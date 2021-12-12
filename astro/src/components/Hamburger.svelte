<script lang="ts">
  export let onClick: () => void
  export let isDark = false

  $: barClasses = `w-5 h-0.5 ${isDark ? "bg-white" : "bg-black"} dark:bg-white`
</script>

<div class="space-y-1 cursor-pointer" on:click={onClick}>
  <div class={barClasses} />
  <div class={barClasses} />
  <div class={barClasses} />
</div>
