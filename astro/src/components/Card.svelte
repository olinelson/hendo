<script lang="ts">
  export let onClick: (() => void) | undefined = undefined
  export let fullWidth: boolean = false

  $: containerClasses = `overflow-hidden shadow-lg   ${!fullWidth && "w-80"}`
</script>

{#if onClick}
  <div
    id="container"
    on:click={onClick}
    class={`${containerClasses} cursor-pointer `}
  >
    <slot />
  </div>
{:else}
  <div class={containerClasses}>
    <slot />
  </div>
{/if}

<style>
  @keyframes fullScale {
    from {
      transform: scale(1);
    }
    to {
      transform: scale(1.05);
    }
  }
  #container:hover {
    animation: fullScale 0.3s forwards;
  }
</style>
