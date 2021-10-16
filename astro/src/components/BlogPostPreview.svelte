<script lang="ts">
  import moment from "moment"
  import Card from "./Card.svelte"

  export let fullWidth: boolean = false
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

  const truncateString = (str, len) => {
    if (str.length > len) return str.substring(0, len) + "..."
    else {
      return str
    }
  }
</script>

<Card {fullWidth} href={url}>
  <div
    class="h-96 bg-cover bg-center text-white"
    style={`background-image: url('${Cover}');`}
  >
    <div
      class=" w-full h-full bg-cover bg-center bg-black bg-opacity-40  p-2 flex flex-col justify-between"
    >
      <div class=" text-sm justify-end flex text-gray-200 flex-1">
        {moment(Published).format("Do MMM YYYY")}
      </div>
      <div class="p-2 flex-1">
        <div class=" text-4xl font-semibold ">{Name}</div>

        <div class="text-sm my-2 text-gray-200 leading-loose">
          {truncateString(Description, 150)}
        </div>
      </div>
    </div>
  </div>
</Card>
