<script lang="ts">
  import moment from "moment"

  export let title: string = ""
  export let description: string = ""
  export let published: string = ""
</script>

<div class="flex justify-between items-end">
  <div>
    <h1 class="font-bold text-4xl">{title}</h1>
  </div>
  <p class="font-light">{moment(published).format("Do MMM YYYY")}</p>
</div>
