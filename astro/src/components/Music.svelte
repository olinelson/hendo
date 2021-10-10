<script lang="ts">
  import MusicCard from "./MusicCard.svelte"

  const links: { src: string; imgSrc: string; title: string }[] = [
    {
      src: "https://50cycles.bandcamp.com",
      imgSrc: "/assets/50_cycles.png",
      title: "50 Cycles",
    },
    {
      src: "https://linktr.ee/twirlybender",
      title: "Twirly Bender",
      imgSrc: "",
    },
    {
      src: "https://peppermintgrovestudios.com",
      title: "Pepermint Grove Studios",
      imgSrc:
        "https://peppermintgrovestudios.com/wp-content/uploads/2021/07/cropped-IMG_4099-scaled-1.jpg",
    },
  ]
</script>

{#each links as { src, imgSrc, title }}
  <MusicCard {src} {imgSrc} {title} />
{/each}
