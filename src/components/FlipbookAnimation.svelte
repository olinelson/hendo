<script lang="ts">
  import {onMount} from 'svelte'
  // import "../styles/global.css";
  
// const html = document.documentElement;
let container
let canvas
let context
let img
let scrollY
let innerHeight
let outerHeight
const frameCount = 46;

onMount(() => {
  context = canvas.getContext("2d");




const preloadImages = () => {
  for (let i = 1; i < frameCount; i++) {
    const img = new Image();
    img.src = currentFrame(i);
  }
};

img = new Image()
img.src = currentFrame(1);
canvas.width=1158;
canvas.height=770;
img.onload=function(){
  context.drawImage(img, 0, 0);
}



// window.addEventListener('scroll', (e) => {  
//   console.log("Scrolling", e)
//   const scrollTop = container.scrollTop;
//   const maxScrollTop = container.scrollHeight - window.innerHeight;
//   const scrollFraction = scrollTop / maxScrollTop;
//   const frameIndex = Math.min(
//     frameCount - 1,
//     Math.ceil(scrollFraction * frameCount)
//   );
  
//   requestAnimationFrame(() => updateImage(frameIndex + 1))
// });

preloadImages()
})

const currentFrame = index => (
  `/assets/image-effect/hendo-scene-${index}.png`
)

const updateImage = index => {
  img.src = currentFrame(index);
  context.drawImage(img, 0, 0);
}

const onScroll = (e) => {  
  // console.log("Scrolling", e)
  // const s = container.scrollTop;
  // const maxScrollTop = container.scrollHeight - window.innerHeight;
  const scrollFraction = scrollY / 6711;
  const frameIndex = Math.min(
    frameCount - 1,
    Math.ceil(scrollFraction * frameCount)
  );
  console.log({scrollY, innerHeight, outerHeight})
  
  requestAnimationFrame(() => updateImage(frameIndex + 1))
}



</script>

<svelte:window bind:scrollY={scrollY} bind:outerHeight={outerHeight} bind:innerHeight={innerHeight} on:scroll={onScroll}/>

<div  bind:this={container} id="container">
  <canvas bind:this={canvas}/>
</div>

<style>
  #container {
    background: #000;
  height: 1000vh;
  }
  canvas {
    position: fixed;
  left: 50%;
  top: 50%;
  max-height: 100vh;
  max-width: 100vw;
  transform: translate(-50%, -50%);
  }
</style>
