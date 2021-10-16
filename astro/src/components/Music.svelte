<script lang="ts">
  import MusicCard from "./MusicCard.svelte"

  const links: { href: string; imgSrc: string; title: string }[] = [
    {
      href: "https://50cycles.bandcamp.com",
      imgSrc: "/assets/50_cycles.png",
      title: "50 Cycles",
    },
    {
      href: "https://linktr.ee/twirlybender",
      title: "Twirly Bender",
      imgSrc: "",
    },
    {
      href: "https://peppermintgrovestudios.com",
      title: "Pepermint Grove Studios",
      imgSrc:
        "https://peppermintgrovestudios.com/wp-content/uploads/2021/07/cropped-IMG_4099-scaled-1.jpg",
    },
  ]
</script>

<div id="container" class="container mx-auto mt-12 gap-4">
  {#each links as { href, imgSrc, title }}
    <MusicCard {href} {imgSrc} {title} />
  {/each}
</div>

<style>
  #container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    justify-items: center;
    align-items: center;
  }
</style>
