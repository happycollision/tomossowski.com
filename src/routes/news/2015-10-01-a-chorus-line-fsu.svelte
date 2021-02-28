<script lang="ts" context="module">
  import Img from "$components/Img.svelte"
  import Markdown from "$components/Markdown.svelte"

  export const title = "A Chorus Line at FSU"
</script>

<Markdown
  source={`
Tom was the Music Director and Conductor for FloridaState University's October
production of _A Chorus Line_.
`}
/>

<Img
  class="max-w-full max-h-80"
  src="/images/a-chorus-line.jpg"
  alt="promo shot for A Chorus Line at FSU"
/>
