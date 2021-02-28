<script lang="ts" context="module">
  import Img from "$components/Img.svelte"
  import Markdown from "$components/Markdown.svelte"

  export const title = "The Family"
</script>

<Markdown
  source={`
Tom has been working on a brand new musical in Beijing, China at The Central
Academy of Drama. The musical is called _The Family_ and is based on a classic
Chinese novel. Tom was a part of the Creative Team and served as the American
Director.
`}
/>

<Img
  class="max-w-full max-h-80"
  src="/images/the-family-poster.jpg"
  alt="poster art for The Family"
/>
