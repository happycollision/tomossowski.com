<script context="module" lang="ts">
  import { browser } from "$app/env"
  class TransitionInterval {
    interval = 0
    clearIndex = 0

    constructor(private action: () => void) {}

    updateInterval(newInt: number) {
      if (!browser) return
      if (this.interval === newInt) return

      this.clearInterval()
      this.interval = newInt

      this.clearIndex = window.setInterval(this.action, this.interval)
    }

    clearInterval() {
      if (!browser) return
      this.interval = 0
      window.clearInterval(this.clearIndex)
    }
  }
</script>

<script lang="ts">
  import { onDestroy } from "svelte"
  import { flip } from "svelte/animate"
  import { crossfade } from "svelte/transition"

  import { wrappingSlice } from "$lib/utils/array"

  import Img from "./Img.svelte"

  export let images: Array<{ src: string }>
  export let intervalInMs = 5000
  export let transitionDurationInMs = 750
  export let numImagesInView = 1
  export let startingIndex = 0

  let currentPosition = startingIndex

  $: [send, receive] = crossfade({
    duration: (d) => Math.sqrt(d * transitionDurationInMs),
  })

  const transitionTimer = new TransitionInterval(() => {
    currentPosition += numImagesInView
  })

  $: {
    transitionTimer.updateInterval(intervalInMs)
  }

  onDestroy(() => transitionTimer.clearInterval())

  $: viewed = wrappingSlice(
    images,
    currentPosition - numImagesInView,
    numImagesInView,
  )
  $: viewing = wrappingSlice(images, currentPosition, numImagesInView)
  $: willView = wrappingSlice(
    images,
    currentPosition + numImagesInView,
    numImagesInView,
  )
</script>

<div class="w-full overflow-hidden">
  <div style="width: 300%; left: -100%" class="flex relative">
    {#each viewed as slide (slide.src)}
      <div
        class="flex items-center h-80 justify-center p-2"
        style="width: {100 / numImagesInView}%"
        in:receive="{{ key: slide.src }}"
        out:send="{{ key: slide.src }}"
        animate:flip
      >
        <Img
          class="max-w-full max-h-full"
          src="{slide.src}"
          alt="scene from a 2018 production"
        />
      </div>
    {/each}

    {#each viewing as slide (slide.src)}
      <div
        class="flex items-center h-80 justify-center p-2"
        style="width: {100 / numImagesInView}%"
        in:receive="{{ key: slide.src }}"
        out:send="{{ key: slide.src }}"
        animate:flip
      >
        <Img
          class="max-w-full max-h-full"
          src="{slide.src}"
          alt="scene from a 2018 production"
        />
      </div>
    {/each}

    {#each willView as slide (slide.src)}
      <div
        class="flex items-center h-80 justify-center p-2"
        style="width: {100 / numImagesInView}%"
        in:receive="{{ key: slide.src }}"
        out:send="{{ key: slide.src }}"
        animate:flip
      >
        <Img
          class="max-w-full max-h-full"
          src="{slide.src}"
          alt="scene from a 2018 production"
        />
      </div>
    {/each}
  </div>
</div>
