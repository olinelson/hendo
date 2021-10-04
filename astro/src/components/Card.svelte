<script lang="ts">
  export let onClick: (() => void) | undefined = undefined;
</script>

{#if onClick}
  <div
    on:click={onClick}
    class="max-w-sm overflow-hidden shadow-lg cursor-pointer"
  >
    <slot />
  </div>
{:else}
  <div class="max-w-sm overflow-hidden shadow-lg">
    <slot />
  </div>
{/if}
