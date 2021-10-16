<script lang="ts">
  import Card from "./Card.svelte"

  export let title: string = ""
  export let href: string = ""
  export let imgSrc: string = ""
  export let width: number = 1
  export let height: number = 1
</script>

<div
  id="container"
  class={`bg-cover bg-center text-white h-full w-full`}
  style="background-image: url('{imgSrc}'); --width:{width}; --height:{height};"
>
  <a {href} class=" h-full w-full" target="_blank">
    <div
      class=" w-full h-full bg-cover bg-center bg-black bg-opacity-40  p-2 flex flex-col justify-between"
    >
      <div class="p-2 flex-1">
        <div class=" text-4xl font-semibold ">{title}</div>
      </div>
    </div>
  </a>
</div>

<style>
  @keyframes fullScale {
    from {
      transform: scale(1);
    }
    to {
      transform: scale(1.015);
    }
  }
  #container:hover {
    animation: fullScale 0.3s forwards;
  }

  #container {
    grid-column: span 1;
    grid-row: span var(--height);
  }
  @media screen and (min-width: 600px) {
    #container {
      grid-column: span var(--width);
    }
  }
</style>
