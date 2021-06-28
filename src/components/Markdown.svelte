<script lang="ts" context="module">
  import { markdown } from "$lib/utils/markdown"
  const defaultClasses = {
    p: "my-4",
    a: "link",
  }
</script>

<script lang="ts">
  export let source: string
  export let classes = defaultClasses
</script>

<div class="via-markdown">
  {@html markdown(source, classes)}
</div>
