<script lang="ts">
  import Img from "$components/Img.svelte"
  import PlayPausePortfolioBtn from "./PlayPausePortfolioBtn.svelte"

  export let src: string
  export let poster: string | undefined
  export let alt: string | undefined
  export let unload = false
  export let controls: boolean
  export let preloadIn: "none" | "metadata" | "auto" = "none"
  export { preloadIn as preload }
  let className: string | undefined
  export { className as class }
  let autoplayIn: boolean
  export { autoplayIn as autoplay }

  let autoplay = autoplayIn
  let preload = unload ? "none" : preloadIn

  let videoEl: HTMLVideoElement | undefined
  let playing: boolean = false

  function handleClick(evt: SvelteEvent<MouseEvent, HTMLElement>) {
    if (evt.currentTarget === videoEl) evt.stopPropagation()
    if (!controls && videoEl) {
      videoEl.paused ? videoEl.play() : videoEl.pause()
    }
  }

  let prevUnload: boolean | undefined

  $: {
    !videoEl && playing && (playing = false)

    if (videoEl) {
      playing = !videoEl.paused

      if (unload) {
        playing && videoEl.pause()
        videoEl.currentTime = 0
      } else {
        if (prevUnload !== unload && autoplay) {
          videoEl.play()
        }
      }
    }
    prevUnload = unload
  }
</script>

<div
  class="relative rounded-lg overflow-hidden bg-black border-4 border-blue-500 dark:border-blue-900 cursor-pointer flex items-center group {className}"
>
  {#if unload}
    <Img class="object-cover h-52 w-full" {alt} src={poster} />
  {/if}
  {#if unload || (!controls && !playing)}
    <PlayPausePortfolioBtn
      name={playing ? "pause" : "play"}
      on:click={handleClick}
    />
  {/if}
  <!-- svelte-ignore a11y-media-has-caption -->
  {#if !unload}
    <video
      bind:this={videoEl}
      on:click={handleClick}
      on:pause={() => (playing = false)}
      on:play={() => (playing = true)}
      {poster}
      {src}
      {controls}
      {autoplay}
      {preload}
    />
  {/if}
</div>
