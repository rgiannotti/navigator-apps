import { redirect } from '@sveltejs/kit'
import type { PageServerLoad } from './$types'
import { encrypt } from '$lib/utils/auth/auth'

// export const ssr = false

export const load: PageServerLoad = async ({ locals, cookies }) => {
	const token = encrypt(locals.user.token)

	cookies.set('_session', token, {
		path: '/',
		httpOnly: true,
		sameSite: 'none',
		secure: true, //import.meta.env.ENV === 'production',
		maxAge: 60 * 60 * 24 * 30
	})

	if (locals.user?.next) {
		cookies.set('_program', locals.user.next, {
			path: '/',
			httpOnly: true,
			sameSite: 'none',
			secure: true, //import.meta.env.ENV === 'production',
			maxAge: 60 * 60
		})
		const url = `/${locals.user.next}${locals.user.apikey ? '?apikey=' + locals.user.token : ''}`
		throw redirect(302, url)
	}
	throw redirect(302, '/')
}
