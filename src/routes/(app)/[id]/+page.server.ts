import { redirect } from '@sveltejs/kit'

export async function load({ params, locals }) {
	if (!locals.user || !locals.user?.token) throw redirect(302, '/login')

	const { id } = params

	return { id, user: locals.user }
}
