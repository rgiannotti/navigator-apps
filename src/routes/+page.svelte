<script>
  import { onMount } from "svelte";
  import { goto } from "$app/navigation";
  import { auth } from "$lib/stores/auth";

  onMount(() => {
    console.log("Start", $auth);
    if ($auth?.isAuthenticated) {
      goto("/home");
    } else {
      goto("/login");
    }
  });
</script>

<main>
  <p>Redirigiendo...</p>
</main>
