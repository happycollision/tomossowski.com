<script lang="ts">
  import Img from "$components/Img.svelte"
  import PlayPausePortfolioBtn from "./PlayPausePortfolioBtn.svelte"

  export let src: string
  export let poster: string | undefined
  export let alt: string | undefined
  export let unload = false
  export let autoplay = false
  export let controls = false

  let className = ""
  export { className as class }

  let audioEl: HTMLAudioElement | undefined
  let playing: boolean | undefined

  function handleClick(evt: Event) {
    if (audioEl) {
      evt.stopPropagation()
      audioEl.paused ? audioEl.play() : audioEl.pause()
    }
  }

  function handleAudioClick(evt: Event) {
    evt.stopPropagation()
  }
</script>

<div
  class="relative rounded-lg border border-blue-900 cursor-pointer overflow-hidden {className}"
  on:click={handleClick}
>
  <Img class="object-cover h-52 w-full" {alt} src={poster} />
  {#if unload || !controls}
    <PlayPausePortfolioBtn name={playing ? "pause" : "play"} />
  {/if}
  {#if !unload}
    <div class="absolute bottom-2 w-full flex">
      <!-- svelte-ignore a11y-media-has-caption -->
      <audio
        class="mx-2 flex-grow"
        bind:this={audioEl}
        on:pause={() => (playing = false)}
        on:play={() => (playing = true)}
        on:click={handleAudioClick}
        {src}
        {controls}
        {autoplay}
      />
    </div>
  {/if}
</div>
