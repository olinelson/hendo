<script lang="ts">
  import MusicCard from "./MusicCard.svelte"

  const links: {
    href: string
    imgSrc: string
    title: string
    width: number
    height: number
    instagram?: string
    youtube?: string
  }[] = [
    {
      href: "https://50cycles.bandcamp.com",
      imgSrc: "/assets/50_cycles.png",
      title: "50 Cycles",
      width: 1,
      height: 1,
      youtube: "https://www.youtube.com/channel/UCVmc9nV27XnG5qev5nDoygA",
    },

    {
      href: "https://linktr.ee/twirlybender",
      title: "Twirly Bender",
      imgSrc: "/assets/twirly_bender.jpeg",
      width: 1,
      height: 1,
      instagram: "https://www.instagram.com/twirlybender/",
      youtube: "https://www.youtube.com/channel/UCZqkXjrQwr8G8F41lAM54bA",
    },
    {
      href: "https://peppermintgrovestudios.com",
      title: "Pepermint Grove Studios",
      imgSrc:
        "https://peppermintgrovestudios.com/wp-content/uploads/2021/07/cropped-IMG_4099-scaled-1.jpg",
      width: 1,
      height: 1,
      instagram: "https://www.instagram.com/peppermintgrovestudios/",
    },
  ]
</script>

<div id="container" class="gap-4">
  {#each links as { href, imgSrc, title, width, height, instagram, youtube }}
    <MusicCard {href} {imgSrc} {title} {width} {height} {instagram} {youtube} />
  {/each}
  <iframe
    title="The Haze by 50 cycles"
    style="border: 0; width: 100%; height: 100%;"
    src="https://bandcamp.com/EmbeddedPlayer/album=1795821136/size=large/bgcol=333333/linkcol=ffffff/minimal=true/transparent=true/"
    seamless
    ><a href="https://50cycles.bandcamp.com/album/the-haze"
      >The Haze by 50 cycles</a
    ></iframe
  >
</div>

<style>
  #container {
    display: grid;
    grid-template-columns: repeat(auto-fit, 350px);
    grid-auto-rows: 350px;
    justify-items: center;
    align-items: center;
    justify-content: center;
  }
  @media screen and (max-width: 600px) {
    #container {
      padding: 0 1rem;
    }
  }
</style>
