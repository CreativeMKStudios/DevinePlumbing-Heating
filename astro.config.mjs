import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// Change `site` if the live domain is different. Canonical tags, the sitemap
// and Open Graph URLs all use this value.
export default defineConfig({
  site: "https://devineplumbingandheating.co.uk",
  integrations: [sitemap()],
  compressHTML: true,
  build: {
    inlineStylesheets: "auto",
  },
});
