<script lang="ts">
  import * as Tabs from "$lib/components/ui/tabs/index.js";
  import CardApp from "$lib/components/widgets/CardApp.svelte";
  import TableApp from "$lib/components/widgets/TableApp.svelte";
  import { onMount } from "svelte";

  let data: any;

  const fetchData = async () => {
    const response = await fetch("/json/apps.json");
    data = await response.json();
  };

  onMount(() => {
    fetchData();
  });
</script>

<main class="grid w-full flex-1 items-start gap-4 sm:px-6 sm:py-0 md:gap-8">
  <div class="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2">
    <div
      class="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4"
    />
    <Tabs.Root value="cards">
      <div class="flex items-center mb-6">
        <Tabs.List>
          <Tabs.Trigger value="cards">Cards</Tabs.Trigger>
          <Tabs.Trigger value="list">List</Tabs.Trigger>
        </Tabs.List>
        <div class="ml-auto flex items-center gap-2">
          <!-- <DropdownMenu.Root>
                <DropdownMenu.Trigger asChild let:builder>
                  <Button
                    variant="outline"
                    size="sm"
                    class="h-7 gap-1 text-sm"
                    builders={[builder]}
                  >
                    <ListFilter class="h-3.5 w-3.5" />
                    <span class="sr-only sm:not-sr-only">Filter</span>
                  </Button>
                </DropdownMenu.Trigger>
                <DropdownMenu.Content align="end">
                  <DropdownMenu.Label>Filter by</DropdownMenu.Label>
                  <DropdownMenu.Separator />
                  <DropdownMenu.CheckboxItem checked
                    >Fulfilled</DropdownMenu.CheckboxItem
                  >
                  <DropdownMenu.CheckboxItem>Declined</DropdownMenu.CheckboxItem
                  >
                  <DropdownMenu.CheckboxItem>Refunded</DropdownMenu.CheckboxItem
                  >
                </DropdownMenu.Content>
              </DropdownMenu.Root>
              <Button size="sm" variant="outline" class="h-7 gap-1 text-sm">
                <File class="h-3.5 w-3.5" />
                <span class="sr-only sm:not-sr-only">Export</span>
              </Button> -->
        </div>
      </div>
      <Tabs.Content value="cards">
        <!-- <div class="flex items-center justify-between">
              <div class="space-y-1">
                <h2 class="text-2xl font-semibold tracking-tight">
                  Listen Now
                </h2>
                <p class="text-muted-foreground text-sm">
                  Top picks for you. Updated daily.
                </p>
              </div>
            </div>
            <Separator class="my-4" /> -->
        <div class="relative">
          <div class="flex space-x-4 pb-4">
            {#if data}
              <div class="w-full grid gap-4 md:grid-cols-2 lg:grid-cols-5">
                {#each data as app}
                  <CardApp {app} />
                {/each}
              </div>
            {:else}
              <p>Loading...</p>
            {/if}
          </div>
        </div>
      </Tabs.Content>
      <Tabs.Content value="list">
        {#if data}
          <TableApp {data} />
        {/if}
      </Tabs.Content>
    </Tabs.Root>
  </div>
</main>
