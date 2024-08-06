import { redirect } from '@sveltejs/kit'
import type { PageServerLoad } from './$types'

export const load: PageServerLoad = async ({ locals }) => {
	if (!locals.user || !locals.user.token) throw redirect(302, '/login')
	if (locals.user.next) {
		const url = `/${locals.user.next}${locals.user.apikey ? '?apikey=' + locals.user.token : ''}`
		throw redirect(302, url)
	}
	redirect(302, '/home')
}
