<script lang="ts">
  import "../styles/global.css";
</script>

<div
  class="h-10 px-2 fixed top-0 left-0 right-0 text-xl text-white  z-50 items-center"
  id="nav"
>
  <div class="">
    <a href="/"> <h4>nick henderson</h4></a>
  </div>

  <div id="items" class=" justify-self-end">
    <a href="/bio">bio</a>
    <a href="/blog">blog</a>
    <a href="/music">music</a>
    <a href="/contact">contact</a>
  </div>
</div>

<style>
  #nav {
    display: grid;
    grid-template-columns: auto 1fr;
  }
  #items {
    justify-self: end;
    display: flex;
    grid-auto-columns: min-content;
    grid-gap: 1rem;
  }
</style>
