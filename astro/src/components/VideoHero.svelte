<script lang="ts">
  import { fade } from "svelte/transition"
  export let videoSrc: string = ""
  export let imageSrc: string = ""
  export let description: string = ""

  let video: HTMLVideoElement | undefined = undefined
  let showVideo = false

  const onPlay = () => (showVideo = true)
  const childClasses = "absolute top-0  w-full h-full object-cover"
</script>

<div
  id="container"
  class="bg-cover bg-center relative h-screen w-screen"
  style="background-image: url('/assets/hendo_guitar_clip_poster.png');"
>
  {#if !showVideo}
    <img
      transition:fade={{ duration: 2000 }}
      src={imageSrc}
      alt={description}
      class={`grayscale z-20 ${childClasses}`}
    />
  {/if}
  <video
    on:play={onPlay}
    bind:this={video}
    playsinline
    loop
    autoplay
    muted
    src={videoSrc}
    poster={imageSrc}
    alt={description}
    class={`grayscale z-10 ${childClasses}`}
  />
</div>
