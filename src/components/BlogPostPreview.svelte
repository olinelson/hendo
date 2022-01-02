<script lang="ts">
  import moment from "moment"
  import Card from "./Card.svelte"

  export let fullWidth: boolean = false
  export let post

  interface Post {
    cover: string
    layout: string
    title: string
    description: string
    published: string
    author: string
    coverDescription: string
    url: string
  }

  const { title, description, cover, coverDescription, published, url } =
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
    style={`background-image: url('${cover}');`}
  >
    <div
      class=" w-full h-full bg-cover bg-center bg-black bg-opacity-40  p-2 flex flex-col justify-between"
    >
      <div class=" text-sm justify-end flex text-gray-200 flex-1">
        {moment(published).format("Do MMM YYYY")}
      </div>
      <div class="p-2 flex-1">
        <div class=" text-4xl font-semibold ">{title}</div>

        <div class="text-sm my-2 text-gray-200 leading-loose">
          {truncateString(description, 150)}
        </div>
      </div>
    </div>
  </div>
</Card>
