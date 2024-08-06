<script lang="ts">
	import * as Card from '$lib/components/ui/card/index'
	import { Progress } from '$lib/components/ui/progress/index.js'
	import { Badge } from '$lib/components/ui/badge/index.js'
	import { Send } from 'lucide-svelte'

	import * as ContextMenu from '$lib/components/ui/context-menu/index.js'
	import { cn } from '$lib/utils.js'
	import * as Dialog from '$lib/components/ui/dialog/index.js'
	import { Heart } from 'lucide-svelte'

	let className: string | undefined | null = undefined
	export { className as class }

	export let app: any
	let like = false
</script>

<!-- <div class="w-[250px]">
  <a href={app.url}>
  <Card.Root
    class="h-auto w-auto object-cover transition-all hover:scale-105 aspect-square"
  >
    <ContextMenu.Root>
      <ContextMenu.Trigger>
        <div class={cn("space-y-3", className)} {...$$restProps}>
          <div
            class="overflow-hidden rounded-md h-56 flex items-center justify-center"
          >
            <img
              class="h-auto w-auto object-cover transition-all hover:scale-105 aspect-square"
              src={app.image}
              alt={app.name}
            />
          </div>
        </div>

        <Card.Content class="pb-2">
          <div class=" flex flex-row items-center justify-between">
            <Card.Title>{app.name}</Card.Title>
            <Heart class="h-4 w-4" />
          </div>

          {#each app.tags as tag}
            <Badge class="my-1 mr-1" variant="secondary">{tag}</Badge>
          {/each}
        </Card.Content>
        <Card.Footer>
          <Progress value={100} />
        </Card.Footer>
      </ContextMenu.Trigger>
      <ContextMenu.Content class="w-40">
        <ContextMenu.Item><a href={app.url}> Open </a></ContextMenu.Item>
        <ContextMenu.Item>
          <a href={app.url} target="_blank"> Open in new tab </a>
        </ContextMenu.Item>

        <Dialog.Root>
          <Dialog.Trigger>Open in iframe</Dialog.Trigger>

          <Dialog.Content class="sm:max-w-6xl h-5/6 inline">
            <Dialog.Header>
              <Dialog.Title class="h-6">{app.name}</Dialog.Title>
            </Dialog.Header>
            <div class="w-full h-full">
              <iframe class="w-full h-full" title={app.name} src={app.url} />
            </div>
          </Dialog.Content>
        </Dialog.Root>
      </ContextMenu.Content>
    </ContextMenu.Root>
  </Card.Root>
  </a>
</div> -->

<ContextMenu.Root>
	<ContextMenu.Trigger>
		<div class="w-auto bg-card rounded-lg shadow-lg overflow-hidden transition-all hover:scale-105">
			<div class="relative">
				<img
					src={app.image}
					alt={app.name}
					class="w-full h-48 object-cover transition-all hover:scale-110"
				/>
				<div class="absolute top-4 left-4 flex items-center space-x-2">
					<!-- <img
        src="https://placehold.co/40x40"
        alt="Profile"
        class="rounded-full border-2 border-white"
      /> 
       <div class="text-white">
        <h2 class="font-semibold">Lynn Chang</h2>
        <p class="text-muted-foreground">@lynnchang_415</p>
      </div> -->
				</div>
				<button
					class={cn(
						'absolute top-4 right-4  rounded-full p-2 transition-all ',
						like ? 'bg-red-500 text-white' : 'bg-red-50 text-gray-800'
					)}
					on:click={() => (like = !like)}
				>
					<Heart class="h-4 w-4 " />
				</button>
			</div>
			<div class="p-4">
				<h3 class="text-lg font-semibold">{app.name}</h3>
				<div class="flex justify-between items-center mt-4">
					<div>
						{#each app.tags as tag}
							<Badge class="mr-1" variant="secondary">{tag}</Badge>
						{/each}
					</div>
					<div />
					<a href="/{app.id}" class="bg-blue-500 hover:bg-blue-800 text-white rounded-full p-2">
						<Send class="h-4 w-4 " />
					</a>
				</div>
			</div>
		</div>
	</ContextMenu.Trigger>
	<ContextMenu.Content class="w-40">
		<ContextMenu.Item>
			<a href="/{app.id}" target="_blank"> Open </a>
		</ContextMenu.Item>
		<ContextMenu.Item><a href={app.url}> Open in tab </a></ContextMenu.Item>
		<ContextMenu.Item>
			<a href={app.url} target="_blank"> Open in new tab </a>
		</ContextMenu.Item>

		<!-- <Dialog.Root>
      <Dialog.Trigger>Open in iframe</Dialog.Trigger>

      <Dialog.Content class="sm:max-w-6xl h-5/6 inline">
        <Dialog.Header>
          <Dialog.Title class="h-6">{app.name}</Dialog.Title>
        </Dialog.Header>
        <div class="w-full h-full">
          <iframe class="w-full h-full" title={app.name} src={app.url} />
        </div>
      </Dialog.Content>
    </Dialog.Root> -->
	</ContextMenu.Content>
</ContextMenu.Root>
