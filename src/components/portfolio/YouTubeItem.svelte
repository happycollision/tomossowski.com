<script lang="ts">
  import YouTube from "$components/YouTube.svelte"
  import PlayPausePortfolioBtn from "./PlayPausePortfolioBtn.svelte"

  export let id: string
  export let start: string | number | undefined
  export let end: string | number | undefined
  export let alt: string | undefined
  export let poster: string | undefined
  export let unload = false
  export let autoplay = false
  export let controls = false

  let className: string | undefined
  export { className as class }
</script>

<div class="relative rounded-lg overflow-hidden {className}">
  {#if unload}
    <img class="object-cover h-52 w-full" {alt} src={poster} />
    <PlayPausePortfolioBtn name="play" />
  {:else}
    <YouTube {id} {start} {end} class="w-full h-full" {autoplay} {controls} />
  {/if}
</div>
