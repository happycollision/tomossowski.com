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

<style>
  .glow {
    filter: drop-shadow(0 0 4px rgba(255, 255, 255, 1));
  }
  @media (prefers-color-scheme: dark) {
    .glow {
      filter: drop-shadow(0 0 4px rgba(0, 0, 0, 1));
    }
  }
</style>

{#if mounted}
  <Carousel
    on:change
    loop="{loop}"
    perPage="{perPage}"
    autoplay="{autoplay}"
    duration="{duration}"
    easing="{easing}"
    startIndex="{startIndex}"
    draggable="{draggable}"
    multipleDrag="{multipleDrag}"
    dots="{dots}"
    controls="{controls}"
    threshold="{threshold}"
    rtl="{rtl}"
  >
    <span slot="left-control">
      <svg
        class="fill-current opacity-80 hover:opacity-100 glow"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
      >
        <path
          d="M0 10a10 10 0 1 1 20 0 10 10 0 0 1-20 0zm2 0a8 8 0 1 0 16 0 8 8 0 0 0-16 0zm8-2h5v4h-5v3l-5-5 5-5v3z"
        ></path>
      </svg>
    </span>
    <slot />
    <span slot="right-control">
      <svg
        class="fill-current opacity-80 hover:opacity-100 glow"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
      >
        <path
          d="M20 10a10 10 0 1 1-20 0 10 10 0 0 1 20 0zm-2 0a8 8 0 1 0-16 0 8 8 0 0 0 16 0zm-8 2H5V8h5V5l5 5-5 5v-3z"
        ></path>
      </svg>
    </span>
  </Carousel>
{/if}
