<script lang="ts">
  import { onMount } from "svelte"

  export let isTransparent: boolean = false
  let scrollY = 0

  $: navClasses =
    isTransparent && scrollY < 20
      ? "text-white bg-transparent"
      : "text-black bg-white"

  onMount(() => {})
</script>

<svelte:window bind:scrollY />
<nav class={`h-10 px-4 fixed top-0 left-0 right-0 text-xl  z-50 ${navClasses}`}>
  <div class="">
    <a href="/"> <h4>nick henderson</h4></a>
  </div>

  <div id="items" class=" justify-self-end">
    <a href="/bio">bio</a>
    <a href="/blog">blog</a>
    <a href="/music">music</a>
    <a href="/contact">contact</a>
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
