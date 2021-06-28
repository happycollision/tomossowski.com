import preprocess from "svelte-preprocess"
import staticSite from "@sveltejs/adapter-static"
import { preprocess as compilerPreprocess } from "svelte/compiler"
import image from "svelte-image"
import path from "path"

const imagePreprocessor = image({
  processFolders: ["images"],
  processFoldersRecursively: true,
  // @ts-expect-error bad type inference
  processFoldersSizes: [400, 800, 1200],
  processFoldersExtensions: ["jpg", "jpeg", "png", "JPG", "JPEG", "PNG"],
})

// There is some kind of race condition between the preprocessor and the adapter
// such that any images created in the `static/g/` folder aren't present on the
// first run of `npm run build`. Since this project only relies upon the
// recursive folder image processing done by svelte-image, we can just feed it
// one fake template when this file is loaded. By the time the actual adapter is
// run, the images will already be in place.
//
// This is a hack, to be sure. Perhaps when SvelteKit hits 1.0, this won't be a
// problem anymore? To reproduce the actual issue, comment out the next line
// (since it is the workaround) and run `npm run clean && npm run build`. If you
// don't get any 404 errors from Pretender, then the bug is gone.
imagePreprocessor.markup({ content: "<html/>" })

function runImagesAfterOthers(otherProcessors) {
  return {
    markup: async ({ content, filename }) => {
      const otherProcessorsReturn = await compilerPreprocess(
        content,
        otherProcessors,
        {
          filename,
        },
      )
      content = otherProcessorsReturn.code

      const { code } = await imagePreprocessor.markup({ content })
      return {
        ...otherProcessorsReturn,
        code,
      }
    },
  }
}

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: [
    runImagesAfterOthers(
      preprocess({
        defaults: {
          style: "postcss",
        },
        postcss: true,
      }),
    ),
  ],

  kit: {
    // hydrate the <div id="svelte"> element in src/app.html
    target: "#svelte",
    adapter: staticSite(),
    vite: {
      resolve: {
        alias: {
          $components: path.resolve("./src/components"),
        },
      },
    },
  },
}

export default config
// Workaround until SvelteKit uses Vite 2.3.8 (and it's confirmed to fix the Tailwind JIT problem)
const mode = process.env.NODE_ENV
const dev = mode === "development"
process.env.TAILWIND_MODE = dev ? "watch" : "build"
