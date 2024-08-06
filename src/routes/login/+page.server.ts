/* eslint-disable @typescript-eslint/no-explicit-any */
import { fail, redirect } from '@sveltejs/kit'
import type { Action, Actions, PageServerLoad } from './$types'
import { encrypt } from '$lib/utils/auth/auth'
import { buildImageUrls, filterAuthMethods, removeBasicAuth } from '$lib/utils/login/login'
import { getData } from '$lib/services/getData'

export const load: PageServerLoad = async ({ locals }) => {
	if (locals.user) throw redirect(302, '/')

	const apiUrl = import.meta.env.VITE_API_URL
	const tenant = 'navigator' //url.hostname.split('.')[0]
	const rootLink = `${import.meta.env.VITE_API_URL_IMAGES}/api/v2/services/images/`

	const resp = await getData(`${apiUrl}/api/v1/clients?subdomain_prefix=${tenant}`)
	const data = resp[0]

	const images = buildImageUrls(data, rootLink)
	const { auth_backends } = data

	let filteredObject: Record<string, any> = {}

	const totalAuthMethods = await getData(`${apiUrl}/api/v1/auth/methods`)
	filteredObject = filterAuthMethods(totalAuthMethods, auth_backends)
	filteredObject = removeBasicAuth(filteredObject)

	return {
		filteredObject,
		authMethods: totalAuthMethods,
		images
	}
}

const login: Action = async ({ cookies, request }) => {
	const data = await request.formData()
	const username = data.get('email')
	const password = data.get('password')

	if (typeof username !== 'string' || typeof password !== 'string' || !username || !password) {
		return fail(400, { invalid: true })
	}

	const response = await fetch(`${import.meta.env.VITE_API_URL}/api/v1/login`, {
		method: 'POST',
		headers: {
			'x-auth-method': 'BasicAuth',
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({ username, password })
	})

	if (response.ok) {
		const data = await response.json()
		const token = encrypt(data.token)

		cookies.set('_session', token, {
			path: '/',
			httpOnly: true,
			sameSite: 'none',
			secure: true, //import.meta.env.ENV === 'production',
			maxAge: 60 * 60 * 24 * 30
		})
		cookies.delete('_program', { path: '/' })
		cookies.delete('_apikey', { path: '/' })
	} else {
		return fail(400, { credentials: true, message: await response.json() })
	}
	// redirect the user
	throw redirect(302, '/')
}

export const actions: Actions = { login }
