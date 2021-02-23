<script lang="ts" context="module">
  export const title = "Guys and Dolls at FSU"
</script>

<script lang="ts">
  import VideoItem from "$components/portfolio/VideoItem.svelte"
</script>

<p class="my-4">Conducting and Music Direction by Tom Ossowski.</p>

<VideoItem
  src="/media/guys-dolls.mp4"
  poster="/images/portfolio/guys-dolls.jpg"
  preload="metadata"
/>

<h3 class="text-lg mt-4">Bushel and a Peck</h3>
<!-- svelte-ignore a11y-media-has-caption -->
<audio preload="metadata" src="/media/bushel-peck.mp3" controls />

<h3 class="text-lg mt-4">Sit Down You're Rocking the Boat</h3>
<!-- svelte-ignore a11y-media-has-caption -->
<audio preload="metadata" src="/media/rocking-boat.mp3" controls />
