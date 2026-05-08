import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://michalvalco.github.io",
  base: "/apvv2026-hymnals",
  integrations: [
    tailwind({
      configFile: "./tailwind.config.mjs",
    }),
    sitemap({
      // Astro adds `site` + `base` automatically; no extra config needed for
      // the default discovery of all generated routes.
    }),
  ],
  build: {
    format: "directory",
  },
});
