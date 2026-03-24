import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: "https://michalvalco.github.io",
  base: "/apvv2026-hymnals",
  integrations: [
    tailwind({
      configFile: "./tailwind.config.mjs",
    }),
  ],
  build: {
    format: "directory",
  },
});
