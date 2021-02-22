<script lang="ts">
  import Carousel from "@beyonk/svelte-carousel"
  import { onMount } from "svelte"

  export let loop = undefined,
    perPage = undefined,
    autoplay = undefined,
    duration = undefined,
    easing = undefined,
    startIndex = undefined,
    draggable = undefined,
    multipleDrag = undefined,
    dots = undefined,
    controls = undefined,
    threshold = undefined,
    rtl = undefined

  let mounted = false
  onMount(() => (mounted = true))
</script>

{#if mounted}
  <Carousel
    {loop}
    {perPage}
    {autoplay}
    {duration}
    {easing}
    {startIndex}
    {draggable}
    {multipleDrag}
    {dots}
    {controls}
    {threshold}
    {rtl}
  >
    <span slot="left-control">
      <svg
        class="fill-current opacity-80 hover:opacity-100"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
      >
        <path
          d="M0 10a10 10 0 1 1 20 0 10 10 0 0 1-20 0zm2 0a8 8 0 1 0 16 0 8 8 0 0 0-16 0zm8-2h5v4h-5v3l-5-5 5-5v3z"
        />
      </svg>
    </span>
    <slot />
    <span slot="right-control">
      <svg
        class="fill-current opacity-80 hover:opacity-100"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
      >
        <path
          d="M20 10a10 10 0 1 1-20 0 10 10 0 0 1 20 0zm-2 0a8 8 0 1 0-16 0 8 8 0 0 0 16 0zm-8 2H5V8h5V5l5 5-5 5v-3z"
        />
      </svg>
    </span>
  </Carousel>
{/if}
