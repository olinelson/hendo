<script lang="ts">
  export let onClick: (() => void) | undefined = undefined
</script>

{#if onClick}
  <div
    id="container"
    on:click={onClick}
    class="max-w-sm overflow-hidden shadow-lg cursor-pointer "
  >
    <slot />
  </div>
{:else}
  <div class="max-w-sm overflow-hidden shadow-lg">
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
