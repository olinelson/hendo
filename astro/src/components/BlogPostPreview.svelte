<script lang="ts">
  import moment from "moment"

  import Card from "./Card.svelte"
  export let post

  interface Post {
    Cover: string
    layout: string
    Name: string
    Description: string
    Published: string
    Author: string
    HeroImageDescription: string
    url: string
  }

  const { Name, Description, Cover, HeroImageDescription, Published, url } =
    post as Post
</script>

<Card onClick={() => (window.location = url)}>
  <div class=" h-96 w-80">
    <img
      class="w-full h-52 object-cover"
      src={Cover}
      alt={HeroImageDescription}
    />
    <div class="p-2">
      <div class="text-xl font-semibold">{Name}</div>
      <div class="text-xs">{moment(Published).format("DD/MM/YY")}</div>
      <div class="text-sm mt-2 overflow-ellipsis">
        {Description}
      </div>
    </div>
  </div>
</Card>
