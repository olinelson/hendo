<script lang="ts">
  import "../styles/global.css";
</script>

<div class="h-10 px-2 bg-white" id="nav">
  <div class="">
    <a href="/"> <h4>Nick Henderson</h4></a>
  </div>

  <div id="items" class="">
    <a href="/bio">Bio</a>
    <a href="/blog">Blog</a>
    <a href="/music">Music</a>
    <a href="/contact">Contact</a>
  </div>
</div>

<style>
  #nav {
    position: sticky;
    top: 0;
    width: 100vw;
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
  }
  #items {
    justify-self: end;
    display: flex;
    grid-auto-columns: min-content;
    grid-gap: 1rem;
  }
</style>
