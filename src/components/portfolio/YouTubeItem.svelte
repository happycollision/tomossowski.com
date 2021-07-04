<script lang="ts">
  import Img from "$components/Img.svelte"
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

<div
  class="relative rounded-lg overflow-hidden border-4 border-blue-500 dark:border-blue-900 cursor-pointer {className}"
>
  {#if unload}
    <Img class="object-cover h-52 w-full" alt="{alt}" src="{poster}" />
    <PlayPausePortfolioBtn name="play" />
  {:else}
    <YouTube
      id="{id}"
      start="{start}"
      end="{end}"
      class="w-full h-full"
      autoplay="{autoplay}"
      controls="{controls}"
    />
  {/if}
</div>
