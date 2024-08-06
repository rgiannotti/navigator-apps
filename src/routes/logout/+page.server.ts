import { redirect } from '@sveltejs/kit'
import type { Actions, PageServerLoad } from './$types'

export const load: PageServerLoad = async ({ cookies }) => {
	cookies.delete('_session', { path: '/' })
	cookies.delete('_apikey', { path: '/' })
	cookies.delete('_program', { path: '/' })

	throw redirect(302, '/login')
}

export const actions: Actions = {
	default({ cookies }) {
		cookies.delete('_session1', { path: '/' })
		cookies.delete('_apikey', { path: '/' })
		cookies.delete('_program', { path: '/' })

		throw redirect(302, '/login')
	}
}
