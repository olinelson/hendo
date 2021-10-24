<script lang="ts">
  import moment from "moment"

  export let Name: string = ""
  export let Description: string = ""
  export let Published: string = ""
</script>

<div class="flex justify-between items-end">
  <div>
    <h1 class="font-bold text-4xl">{Name}</h1>
  </div>
  <p class="font-light">{moment(Published).format("Do MMM YYYY")}</p>
</div>
