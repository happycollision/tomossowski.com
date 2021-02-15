<script lang="ts">
  export let path: string

  const mainNav = [
    { name: "Latest", url: "/" },
    // { name: "Biography", url: "/biography" },
    // { name: "Portfolio", url: "/portfolio" },
    // { name: "References", url: "/references" },
    // { name: "Resum&eacute;", url: "/resume" },
  ]

  function nodeIsActive(node: HTMLAnchorElement, path: string) {
    const hrefPath = new URL(node.href).pathname

    return hrefPath === path
  }

  function manageNodeActiveClass(node: HTMLAnchorElement, path: string) {
    if (nodeIsActive(node, path)) {
      node.setAttribute("aria-active", "page")
    } else {
      node.removeAttribute("aria-active")
    }
  }

  function active(node: HTMLAnchorElement, path: string) {
    manageNodeActiveClass(node, path)

    return {
      update(path: string) {
        manageNodeActiveClass(node, path)
      },
    }
  }
</script>

<nav class="px-4 text-white bg-blue-500 dark:bg-blue-900 dark:text-gray-300">
  <ul class="flex flex-wrap m-auto max-w-4xl items-baseline justify-center">
    {#each mainNav as navItem}
      <li>
        <a
          class="block px-4 py-1 hover:bg-green-500 dark:hover:bg-green-700"
          use:active={path}
          rel="prefetch"
          href={navItem.url}>{@html navItem.name}</a
        >
      </li>
    {/each}
  </ul>
</nav>

<style>
  li > :global([aria-active="page"]) {
    @apply bg-green-500 dark:bg-green-700;
  }
</style>
