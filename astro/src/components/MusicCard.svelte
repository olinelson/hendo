<script lang="ts">
  import Card from "./Card.svelte"

  export let title: string = ""
  export let src: string = ""
  export let imgSrc: string = ""
</script>

<Card onClick={() => (window.location = src)}>
  <div
    class="h-96 bg-cover bg-center text-white"
    style={`background-image: url('${imgSrc}');`}
  >
    <div
      class=" w-full h-full bg-cover bg-center bg-black bg-opacity-40  p-2 flex flex-col justify-between"
    >
      <div class=" text-sm justify-end flex text-gray-200 flex-1">
        <!-- {moment(Published).format("Do MMM YYYY")} -->
      </div>
      <div class="p-2 flex-1">
        <div class=" text-4xl font-semibold ">{title}</div>

        <div class="text-sm my-2 text-gray-200 leading-loose">
          <!-- {truncateString(Description, 150)} -->
        </div>
      </div>
    </div>
  </div>
</Card>
