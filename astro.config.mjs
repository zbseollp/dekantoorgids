import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://dekantoorgids.nl",
  output: "static",
  trailingSlash: "always",
  build: { format: "directory" },
});
