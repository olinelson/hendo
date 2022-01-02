<script lang="ts">
  export let href: string | undefined
  export let fullWidth: boolean = false

  const containerClasses = `overflow-hidden shadow-lg ${
    fullWidth ? "w-full" : "w-80"
  }
  `.replace("\n", " ")
</script>

{#if href}
  <a {href}>
    <div id="container" class={`${containerClasses} cursor-pointer`}>
      <slot />
    </div>
  </a>
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
    transform: scale(1.015);
  }
</style>
