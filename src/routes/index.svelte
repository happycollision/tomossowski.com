<script>
  import Post2018, {
    title as title1,
  } from "./news/2018-12-26-post-2018-slideshow.svelte"

  import GdAtFsu, {
    title as title2,
  } from "./news/2017-10-27-guys-and-dolls-at-fsu.svelte"
</script>

<main>
  <article class="my-8">
    <h2 class="text-2xl my-4 max-w-lg mx-auto">
      {title1}
    </h2>
    <Post2018 />
  </article>

  <article class="my-8 max-w-lg mx-auto">
    <h2 class="text-2xl my-4">
      {title2}
    </h2>
    <GdAtFsu />
  </article>
</main>
