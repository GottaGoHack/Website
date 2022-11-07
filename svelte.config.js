import { mdsvex } from "mdsvex";
import mdsvexConfig from "./mdsvex.config.js";
import stat from "@sveltejs/adapter-static";
import preprocess from "svelte-preprocess";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: [".svelte", ...mdsvexConfig.extensions],

  kit: {
    adapter: stat(),
    prerender: {
        default: true
    },
    vite: () => ({

      resolve: {
        alias: {
          // The 'replace' values in the preprocess options should work when using /components, but for
          // some reason it doesn't work on the first build when importing Svelte components.
          // I'm using this instead until the issue is fixed.
          $components: "/src/components",
        },
      },
    }),
  },

  preprocess: [
    preprocess({
      replace: [
        [/import '\//g, "import '/src/"],
        [/from '\//g, "from '/src/"],
      ],
      sourceMap: true,
      scss: {
        renderSync: true,
        includePaths: ["src/styles"],
      },
    }),
    mdsvex({
      extensions: [".svelte.md", ".md", ".svx"],

      layout: {
        post: "/src/routes/actu/content/postlayout.svelte",
      },

      smartypants: {
        dashes: "oldschool",
      },

      remarkPlugins: [],
      rehypePlugins: [],
    }),
  ],
};

export default config;
