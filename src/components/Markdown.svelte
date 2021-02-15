<script lang="ts" context="module">
  import { markdown } from "$utils/markdown"
  const defaultClasses = {
    p: "my-4",
  }
</script>

<script lang="ts">
  export let source: string
  export let classes = defaultClasses
</script>

<div class="via-markdown">
  {@html markdown(source, classes)}
</div>
