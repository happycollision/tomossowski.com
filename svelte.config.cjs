const svelte = require("svelte/compiler")
const sveltePreprocess = require("svelte-preprocess")
const image = require("svelte-image")

const imagePreprocessor = image({
  processFolders: ["images"],
  processFoldersRecursively: true,
  // @ts-expect-error
  processFoldersSizes: [400, 800, 1200],
  processFoldersExtensions: ["jpg", "jpeg", "png", "JPG", "JPEG", "PNG"],
})

function runImagesAfterOthers(otherProcessors) {
  return {
    markup: async ({ content, filename }) => {
      const otherProcessorsReturn = await svelte.preprocess(
        content,
        otherProcessors,
        { filename },
      )
      content = otherProcessorsReturn.code

      const { code } = await imagePreprocessor.markup({ content, filename })
      return {
        ...otherProcessorsReturn,
        code,
      }
    },
  }
}

module.exports = {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: [
    runImagesAfterOthers(
      // @ts-expect-error
      sveltePreprocess({
        defaults: {
          style: "postcss",
        },
        postcss: true,
      }),
    ),
  ],
  kit: {
    // By default, `npm run build` will create a standard Node app.
    // You can create optimized builds for different platforms by
    // specifying a different adapter
    adapter: "@sveltejs/adapter-static",

    // hydrate the <div id="svelte"> element in src/app.html
    target: "#svelte",
  },
}
