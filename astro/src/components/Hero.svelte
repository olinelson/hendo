<script lang="ts">
  export let src: string;

  import "../styles/global.css";
  import { fade } from "svelte/transition";
  import { onMount } from "svelte";

  let visible = false;

  onMount(() => {
    visible = true;
  });
</script>

{#if visible && src}
  <div
    style="background-image: url('{src}');"
    transition:fade={{ duration: 500 }}
    class="hero grayscale"
  />
{/if}

<style>
  .hero {
    width: 100vw;
    min-height: 100vh;
    background-size: cover;
  }
</style>
