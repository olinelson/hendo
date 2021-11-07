<script lang="ts">
  import { onMount } from "svelte"

  export let isTransparent: boolean = false
  export let currentPath: string = "/"
  let scrollY = 0

  $: navClasses =
    isTransparent && scrollY < 20
      ? "text-white bg-transparent"
      : "text-black bg-white"
</script>

<svelte:window bind:scrollY />
<nav class={`h-10 px-4 fixed top-0 left-0 right-0 text-xl  z-50 ${navClasses}`}>
  <div class="">
    <a href="/"> <h4>nick henderson</h4></a>
  </div>

  <div id="items" class=" justify-self-end">
    <a href="/bio" class={currentPath === "/bio" && " border-b-2 border-black"}
      >bio</a
    >
    <a
      href="/blog"
      class={currentPath === "/blog" && " border-b-2 border-black"}>blog</a
    >
    <a
      href="/music"
      class={currentPath === "/music" && " border-b-2 border-black"}>music</a
    >
    <a
      href="/contact"
      class={currentPath === "/contact" && " border-b-2 border-black"}
      >contact</a
    >
  </div>
</nav>

<style>
  nav {
    display: grid;
    grid-template-columns: auto 1fr;
    transition: background-color 300ms linear, color 300ms linear;
    align-items: center;
  }
  #items {
    justify-self: end;
    display: flex;
    grid-auto-columns: min-content;
    grid-gap: 1rem;
  }
</style>
