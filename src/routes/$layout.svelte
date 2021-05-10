<script>
  import { page } from "$app/stores"
  import MainNav from "$components/MainNav.svelte"

  import "./_global.pcss"

  $: path = $page.path
</script>

<header>
  <h1 class="hidden">Tom Ossowski</h1>
  <div class="w-11/12 mx-auto my-1 max-w-xl
    fill-current text-blue-500">
    <svg viewBox="0 0 113 14" class="font-black" style="font-size: 1rem">
      <text x="0" y="13">Tom Ossowski</text>
    </svg>
  </div>

  <ul class="flex justify-center space-x-4">
    <li>director</li>
    <li>music director</li>
    <li>artistic director</li>
  </ul>
</header>

<MainNav {path} />

<article class="px-2 sm:px-4">
  <slot />
</article>
