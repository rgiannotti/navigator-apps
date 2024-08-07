<script lang="ts">
  import {
    Send,
    Heart,
    ExternalLink,
    Forward,
    Wallpaper,
    HeartOff,
  } from "lucide-svelte";
  import * as Dialog from "$lib/components/ui/dialog/index.js";

  export let app: any;

  let like = true;
</script>

<div
  class="app-card bg-black w-[300px] flex h-[420px] m-auto"
  style="border: 1px solid white;
  border-radius: 55px 55px 55px 65px;
  zoom: 0.9;"
>
  <div
    class="bg-black h-[97%] w-[97%] flex flex-col m-auto"
    style="border-radius: 55px;"
  >
    <div class="w-full h-[10%] flex m-auto">
      <div
        class="w-[50%] h-full m-auto flex items-end justify-center text-white"
      >
        <h3 class="text-xl font-semibold">{app.name}</h3>
      </div>
      <div
        class="m-auto w-18 h-full bg-white dark:bg-zinc-900 mr-0 flex rounded-tl-[45px] rounded-tr-[65px] rounded-br-[0px] rounded-bl-[0px]"
      >
        <div class="flex m-auto w-20">
          <div class="flex flex-col w-20 mt-3">
            <Wallpaper class="h-5 w-5 m-auto " />
          </div>
        </div>
      </div>
    </div>

    <div
      class="w-full h-2/5 m-auto bg-white dark:bg-zinc-900 flex flex-col"
      style="border-radius: 40px 0px 0px 55px;"
    >
      <div class="flex m-auto w-5/6 h-1/3 pt-5 pb-18">
        <p class="text-sm font-medium text-gray-500">
          {app.description}
        </p>
      </div>
      <div class="m-auto pt-6 w-11/12">
        {#each app.tags as tag}
          <button
            class="app-btn w-auto h-auto p-2 m-1 mb-1 text-sm text-center dark:bg-black bg-gray-200 font-semibold rounded-3xl hover:transform hover:scale-105 hover:transition hover:duration-500"
            type="button"
            >{tag}
          </button>
        {/each}
      </div>

      <div class="flex m-auto w-5/6 h-2/5 justify-end items-start">
        <img
          class="app-img-animate absolute w-36 h-36 -mt-5 mr-0"
          src={app.icon}
          alt={app.name}
        />
      </div>
    </div>

    <div class="w-full h-2/4 flex justify-center m-auto">
      <div class="flex flex-col w-1/5 h-full">
        <div
          class="w-18 h-14 bg-white dark:bg-zinc-900 rounded-none m-auto -mt-2 ml-0"
        >
          <div
            class="w-[60px] h-[60px] bg-black m-auto"
            style="border-radius: 32% 68% 100% 0% / 0% 100% 0% 100%;"
          />
        </div>

        <div class="m-auto w-full h-3/5 flex flex-col -mt-14">
          <button on:click={() => (like = !like)} class="pb-5">
            {#if like}
              <Heart class="h-5 w-5 text-red-500 m-auto" />
            {:else}
              <HeartOff class="h-5 w-5 text-white m-auto" />
            {/if}
          </button>
          <a href={app.url} target="_blank" class="pb-5">
            <Forward class="h-5 w-5 text-white m-auto" />
          </a>
          <Dialog.Root>
            <Dialog.Trigger>
              <button class="pb-5">
                <ExternalLink class="h-5 w-5 text-white m-auto" />
              </button>
            </Dialog.Trigger>

            <Dialog.Content class="sm:max-w-6xl h-5/6 inline">
              <Dialog.Header>
                <Dialog.Title class="h-6">{app.name}</Dialog.Title>
              </Dialog.Header>
              <div class="w-full h-full">
                <iframe class="w-full h-full" title={app.name} src={app.url} />
              </div>
            </Dialog.Content>
          </Dialog.Root>
        </div>
      </div>

      <div
        class="w-4/5 bg-white dark:bg-zinc-900 mr-0 flex flex-col"
        style="border-radius: 0px 0px 50px 40px;"
      >
        <div class="m-auto w-full h-3/5 flex mb-0">
          <div class=" w-3/5 h-full flex">
            <div class="m-auto flex flex-col w-full h-full mb-0 font-bold">
              <h6 class="m-auto mb-0 mr-2">Available</h6>
              <p class="m-auto mr-1 mt-0" />
            </div>
            <span class="w-2/4" />
          </div>

          <div class="w-2/5 h-full flex">
            <a href="/{app.id}" class="h-10 w-10 m-auto">
              <div
                class="m-auto w-14 h-14 rounded-full bg-black mb-3 mr-3 flex cursor-pointer hover:shadow-md hover:transform hover:scale-105 hover:transition-all duration-300"
              >
                <Send class="h-6 w-6 text-white m-auto" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
