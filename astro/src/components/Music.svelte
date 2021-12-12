<script lang="ts">
  import MusicCard from "./MusicCard.svelte"

  const links: {
    href: string
    imgSrc: string
    title: string
    width: number
    height: number
  }[] = [
    {
      href: "https://50cycles.bandcamp.com",
      imgSrc: "/assets/50_cycles.png",
      title: "50 Cycles",
      width: 1,
      height: 1,
    },

    {
      href: "https://linktr.ee/twirlybender",
      title: "Twirly Bender",
      imgSrc: "/assets/twirly_bender.jpeg",
      width: 1,
      height: 1,
    },
    {
      href: "https://peppermintgrovestudios.com",
      title: "Pepermint Grove Studios",
      imgSrc:
        "https://peppermintgrovestudios.com/wp-content/uploads/2021/07/cropped-IMG_4099-scaled-1.jpg",
      width: 1,
      height: 1,
    },
  ]
</script>

<div id="container" class="gap-4">
  {#each links as { href, imgSrc, title, width, height }}
    <MusicCard {href} {imgSrc} {title} {width} {height} />
  {/each}
</div>

<style>
  #container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    grid-auto-rows: 320px;
    justify-items: center;
    align-items: center;
  }
  @media screen and (max-width: 600px) {
    #container {
      padding: 0 1rem;
    }
  }
</style>
