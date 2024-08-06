<script lang="ts">
  import * as Card from "$lib/components/ui/card/index";
  import { Progress } from "$lib/components/ui/progress/index.js";
  import { Badge } from "$lib/components/ui/badge/index.js";
  import * as ContextMenu from "$lib/components/ui/context-menu/index.js";
  import { cn } from "$lib/utils.js";
  import * as Dialog from "$lib/components/ui/dialog/index.js";
  import { Heart } from "lucide-svelte";

  let className: string | undefined | null = undefined;
  export { className as class };

  export let app: any;
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

<div
  class="max-w-sm w-auto bg-card rounded-lg shadow-lg overflow-hidden transition-all hover:scale-105"
>
  <div class="relative">
    <img src={app.image} alt={app.name} class="w-full h-48 object-cover" />
    <div class="absolute top-4 left-4 flex items-center space-x-2">
      <img
        src="https://placehold.co/40x40"
        alt="Profile"
        class="rounded-full border-2 border-white"
      />
      <div class="text-white">
        <h2 class="font-semibold">Lynn Chang</h2>
        <p class="text-muted-foreground">@lynnchang_415</p>
      </div>
    </div>
    <button class="absolute top-4 right-4 bg-white rounded-full p-2">
      <img
        src="https://openui.fly.dev/openui/24x24.svg?text=🔒"
        alt="Lock Icon"
      />
    </button>
  </div>
  <div class="p-4">
    <h3 class="text-lg font-bold">Adventure Robot</h3>
    <p class="text-muted-foreground">#141</p>
    <div class="flex justify-between items-center mt-4">
      <span class="text-primary font-semibold">120</span>
      <span class="text-primary font-semibold">21.345 ETH</span>
      <button
        class="bg-secondary text-secondary-foreground hover:bg-secondary/80 rounded-full p-2"
      >
        <img
          src="https://openui.fly.dev/openui/24x24.svg?text=📥"
          alt="Download Icon"
        />
      </button>
    </div>
  </div>
</div>
