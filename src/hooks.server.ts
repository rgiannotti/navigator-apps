/* eslint-disable @typescript-eslint/no-unused-vars */
import { decrypt, encrypt } from '$lib/utils/auth/auth'
import { redirect, type Handle } from '@sveltejs/kit'

export const handle: Handle = async ({ event, resolve }) => {
	let token: string = event.url.searchParams.get('token') || ''
	let apikey: undefined | string = event.url.searchParams.get('apikey') || ''
	const troctoken = event.url.searchParams.get('auth') || ''
	const next =
		event.url.searchParams.get('next') || event.cookies.get('_program') || event.cookies.get('next')

	if (token && event.url.pathname !== '/login/callback')
		throw redirect(302, `/login/callback?token=${token}&next=${next}`)

	if (!token && !apikey && !troctoken) {
		try {
			const haveCookieSession = Boolean(event.cookies.get('_session'))
			if (!haveCookieSession) {
				if (
					event.url.pathname !== '/login' &&
					event.url.pathname !== '/' &&
					event.url.pathname !== '/logout'
				)
					event.cookies.set('next', event.url.pathname.replace('/', ''), {
						path: '/',
						httpOnly: true,
						secure: true, //import.meta.env.ENV === 'production',
						maxAge: 60 * 60 * 24 * 30
					})
				return await resolve(event)
			} else {
				const decoded = decrypt(event.cookies.get('_session'))
				if (!decoded) return await resolve(event)
				token = decoded
			}
		} catch (error) {
			return await resolve(event)
		}
	}

	try {
		let session
		if (token) {
			const rawSession = await fetch(`${import.meta.env.VITE_API_URL}/api/v1/user/session`, {
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${token}`
				}
			})
			if (rawSession.status !== 401) {
				session = await rawSession.json()
				apikey = undefined
			}
		}
		if (!session && (troctoken || apikey)) {
			const rawSession = apikey
				? await fetch(`${import.meta.env.VITE_API_URL}/api/v1/login?apikey=${apikey}`, {
						method: 'GET',
						headers: {
							'Content-Type': 'application/json',
							'x-auth-method': 'APIKeyAuth'
						}
					})
				: await fetch(`${import.meta.env.VITE_API_URL}/api/v1/login?auth=${troctoken}`, {
						method: 'GET',
						headers: {
							'Content-Type': 'application/json'
						}
					})
			session = await rawSession.json()

			token = apikey ? apikey : session.token

			if (!apikey) {
				event.cookies.set('_session', encrypt(token), {
					path: '/',
					httpOnly: true,
					secure: true, //import.meta.env.ENV === 'production',
					maxAge: 60 * 60 * 24 * 30
				})
			}
		}
		if (session) {
			const _session = { ...session }
			if (_session.session) delete _session.session
			event.locals.user = { ..._session, ...session?.session }
			event.locals.user.token = apikey ? apikey : token
			event.locals.user.apikey = apikey ? true : false
			if (next) {
				event.locals.user.next = next
				event.cookies.delete('next', {
					path: '/'
				})
			}
		}
	} catch (error) {
		console.log('hooks', error)
		return await resolve(event)
	}
	return await resolve(event)
}
