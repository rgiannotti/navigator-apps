<script lang="ts">
  import { onMount } from "svelte";

  export let data;

  let appList: any[] = [];
  let app: any;

  const fetchData = async () => {
    const response = await fetch("/json/apps.json");
    appList = await response.json();
    filterAppsById();
  };

  const filterAppsById = () => {
    app = appList.find((app) => app.id === data.id);
  };

  onMount(() => {
    fetchData();
  });
</script>

<main class="grid w-full h-screen">
  {#if app}
    <iframe class="w-full h-full" title={app.name} src={app.url} />
  {:else}
    <p>Loading...</p>
  {/if}
</main>
