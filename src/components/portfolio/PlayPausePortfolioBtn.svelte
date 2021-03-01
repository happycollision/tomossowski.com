<script lang="ts">
  import PlayPauseBtn from "$components/PlayPauseBtn.svelte"
  export let name: PlayPauseBtn["$$prop_def"]["name"] = "play"
</script>

<PlayPauseBtn
  on:click
  {name}
  class="fill-current text-white absolute bottom-2 left-2 w-1/4 opacity-40 group-hover:opacity-60"
/>
