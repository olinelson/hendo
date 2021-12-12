<script lang="ts">
  import { onMount } from "svelte"
  import CloseButton from "./CloseButton.svelte"
  import Hamburger from "./Hamburger.svelte"

  export let isTransparent: boolean = false
  export let currentPath: string = "/"

  const selectedItemsClasses = "border-b-2 border-black dark:border-white"

  let scrollY = 0
  let sideMenuVisible = false

  const toggleSideMenuVisible = () => (sideMenuVisible = !sideMenuVisible)

  $: showWhiteText = isTransparent && scrollY < 20

  $: dynamicNavClasses = showWhiteText
    ? "text-white bg-transparent"
    : "text-black bg-white dark:bg-black dark:text-white"
</script>

<svelte:window bind:scrollY />
<nav
  class={`grid items-center h-10 px-5 fixed top-0 left-0 right-0 text-xl z-50 ${dynamicNavClasses}`}
>
  <div class="">
    <a href="/"> <h4>nick henderson</h4></a>
  </div>

  <div class="hidden md:flex gap-3 justify-self-end">
    <a href="/bio" class={currentPath === "/bio" && selectedItemsClasses}>bio</a
    >
    <a href="/blog" class={currentPath === "/blog" && selectedItemsClasses}
      >blog</a
    >
    <a href="/music" class={currentPath === "/music" && selectedItemsClasses}
      >music</a
    >
    <a
      href="/contact"
      class={currentPath === "/contact" && selectedItemsClasses}>contact</a
    >
  </div>

  <div class="md:hidden justify-self-end">
    <Hamburger isDark={showWhiteText} onClick={toggleSideMenuVisible} />
  </div>

  {#if sideMenuVisible}
    <div
      class="h-screen w-full top-0 right-0 backdrop-blur absolute"
      on:click={toggleSideMenuVisible}
    >
      <div
        class="h-screen w-3/6 top-0 right-0 text-black dark:text-white absolute bg-white dark:bg-black "
      >
        <div class="grid p-5 gap-4 justify-items-start">
          <CloseButton on:click={toggleSideMenuVisible} />
          <a href="/bio" class={currentPath === "/bio" && selectedItemsClasses}
            >bio</a
          >
          <a
            href="/blog"
            class={currentPath === "/blog" && selectedItemsClasses}>blog</a
          >
          <a
            href="/music"
            class={currentPath === "/music" && selectedItemsClasses}>music</a
          >
          <a
            href="/contact"
            class={currentPath === "/contact" && selectedItemsClasses}
            >contact</a
          >
        </div>
      </div>
    </div>
  {/if}

  <div />
</nav>

<style>
  nav {
    grid-template-columns: auto 1fr;
    transition: background-color 300ms linear, color 300ms linear;
  }
</style>
