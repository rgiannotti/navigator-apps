<script lang="ts">
	import { page } from '$app/stores'
	import { onMount, afterUpdate } from 'svelte'

	export let data

	let appList: any[] = []
	let app: any
	let url = ''

	const fetchData = async () => {
		const response = await fetch('/json/apps.json')
		appList = await response.json()
		filterAppsById()
	}

	const filterAppsById = () => {
		app = appList && appList.find((app) => app.id === data.id)
		url = app?.url?.replace('{token}', $page.data?.user?.token)
	}

	onMount(() => {
		fetchData()
	})

	afterUpdate(() => {
		appList && appList.length > 0 && filterAppsById()
	})
</script>

<main class="grid w-full h-screen">
	{#if app}
		{#key app.id}
			<!-- <iframe class="w-full h-full" title={app.name} src={`/${data.id}/proxy`} /> -->
			<iframe class="w-full h-full" title={app.name} src={url} />
		{/key}
	{:else}
		<p>Loading...</p>
	{/if}
</main>
