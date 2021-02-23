<script>
  import Post2018, {
    title as title1,
  } from "./news/2018-12-26-post-2018-slideshow.svelte"

  import GdAtFsu, {
    title as title2,
  } from "./news/2017-10-27-guys-and-dolls-at-fsu.svelte"

  import Blonde, {
    title as title3,
  } from "./news/2016-03-19-legally-blonde-at-fsu.svelte"

  import JCSatFSU, {
    title as title4,
  } from "./news/2016-03-18-look-back-at-jcss.svelte"

  import TheFamily, {
    title as title5,
  } from "./news/2016-01-01-the-family-in-china.svelte"

  import ChorusLine, {
    title as title6,
  } from "./news/2015-10-01-a-chorus-line-fsu.svelte"

  import Interiews, {
    title as title7,
  } from "./news/2014-11-06-sdc-interview.svelte"

  import Mainstage, {
    title as title8,
  } from "./news/2014-11-05-mainstage-logic.svelte"
</script>

<main>
  <article class="my-8">
    <h2 class="text-2xl my-4 max-w-lg mx-auto">
      {title1}
    </h2>
    <Post2018 />
  </article>

  <article class="my-24 max-w-lg mx-auto">
    <h2 class="text-2xl my-4">
      {title2}
    </h2>
    <GdAtFsu />
  </article>

  <article class="my-24 max-w-lg mx-auto">
    <h2 class="text-2xl my-4">
      {title3}
    </h2>
    <Blonde />
  </article>

  <article class="my-24 max-w-lg mx-auto">
    <h2 class="text-2xl my-4">
      {title4}
    </h2>
    <JCSatFSU />
  </article>

  <article class="my-24 max-w-lg mx-auto">
    <h2 class="text-2xl my-4">
      {title5}
    </h2>
    <TheFamily />
  </article>

  <article class="my-24 max-w-lg mx-auto">
    <h2 class="text-2xl my-4">
      {title6}
    </h2>
    <ChorusLine />
  </article>

  <article class="my-24 max-w-lg mx-auto">
    <h2 class="text-2xl my-4">
      {title7}
    </h2>
    <Interiews />
  </article>

  <article class="my-24 max-w-lg mx-auto">
    <h2 class="text-2xl my-4">
      {title8}
    </h2>
    <Mainstage />
  </article>
</main>
