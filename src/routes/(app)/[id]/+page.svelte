<script lang="ts">
	import { onMount, afterUpdate } from 'svelte'

	export let data

	let appList: any[] = []
	let app: any

	const fetchData = async () => {
		const response = await fetch('/json/apps.json')
		appList = await response.json()
		filterAppsById()
	}

	const filterAppsById = () => {
		app = appList && appList.find((app) => app.id === data.id)
	}

	onMount(() => {
		fetchData()
	})

	afterUpdate(() => {
		filterAppsById()
	})
</script>

<main class="grid w-full h-screen">
	{#if app}
		{#key app.id}
			<iframe class="w-full h-full" title={app.name} src={app.url} />
		{/key}
	{:else}
		<p>Loading...</p>
	{/if}
</main>
