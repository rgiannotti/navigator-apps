import { writable } from "svelte/store";

export const auth = writable({
  isAuthenticated: false,
});
