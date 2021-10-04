<script lang="ts">
  export let src: string;
  import { onMount } from "svelte";

  let video;

  onMount(() => {
    video.playbackRate = 0.3;
  });
</script>

<video bind:this={video} muted autoplay loop {src} class="grayscale" />

<style>
  video {
    object-fit: cover;
    height: 100vh;
    width: 100vw;
    /* position: sticky;
    top: 0; */
  }
</style>
