<script lang="ts">
  import { onMount } from "svelte";
  import { Sun, Moon } from "lucide-svelte";
  import { writable } from "svelte/store";

  let mode: string;

  onMount(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      theme.set(savedTheme);
      document.documentElement.classList.toggle(savedTheme);
      mode = savedTheme;
    }
  });

  const theme = writable("light");

  function toggleTheme() {
    theme.update((currentTheme) => {
      mode = currentTheme === "light" ? "dark" : "light";
      localStorage.setItem("theme", mode);

      document.documentElement.classList.remove(currentTheme);
      document.documentElement.classList.add(mode);
      return mode;
    });
  }
</script>

<button on:click={toggleTheme}>
  {#if mode === "dark"}
    <Moon class="h-5 w-5" />
  {:else}
    <Sun class="h-5 w-5" />
  {/if}
</button>
