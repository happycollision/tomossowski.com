<script context="module">
  // declare const YT: {
  //   Player: new (...args: any[]) => any
  //   PlayerState: { PLAYING: boolean }
  // }
  const YT_SCRIPT_URL = "https://www.youtube.com/iframe_api"
</script>

<script lang="ts">
  import { onMount } from "svelte"

  export let id: string
  export let start: string | number | undefined
  export let end: string | number | undefined
  export let autoplay: boolean | undefined
  export let controls: boolean | undefined
  let className = ""
  export { className as class }

  let scriptTag: HTMLScriptElement
  let player: any
  let apiFrameReady = false

  onMount(() => {
    const scriptTags = document.querySelectorAll("script")
    for (const tag of Array.from(scriptTags)) {
      // only add the script tag once per user session
      if (tag.src === YT_SCRIPT_URL) return (apiFrameReady = true)
    }

    window["onYouTubeIframeAPIReady"] = () => (apiFrameReady = true)

    const firstScriptTag = scriptTags[0]
    scriptTag = document.createElement("script")
    scriptTag.src = YT_SCRIPT_URL
    firstScriptTag.parentNode.insertBefore(scriptTag, firstScriptTag)
  })

  // 3. This function creates an <iframe> (and YouTube player)
  //    after the API code downloads.
  function createIframeAndPlay() {
    // @ts-expect-error (YT exists in the DOM)
    player = new YT.Player("player", {
      // height: "390",
      // width: "640",
      videoId: id,
      playerVars: {
        start: start,
        end: end,
        showinfo: 0,
        rel: 0,
        modestbranding: 1,
        autoplay: autoplay ? 1 : 0,
        controls: controls ? 1 : 0,
      },
    })
  }

  $: {
    if (apiFrameReady) {
      createIframeAndPlay()
    }
  }
</script>

<div class="w-full h-full">
  <div class="{className}" id="player"></div>
</div>
