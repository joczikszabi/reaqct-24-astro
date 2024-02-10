import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind(), icon({
    iconDir: "src/assets/icons",
    include: {
      mdi: ["checkbox-marked-circle-outline"], // Loads only Material Design Icon's "account" SVG
    },
  })]
});