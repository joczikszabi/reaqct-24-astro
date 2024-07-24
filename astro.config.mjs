import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import preact from "@astrojs/preact";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/static";
import icon from "astro-icon";


// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind(), icon()],
  output: "static",
  adapter: vercel({
    webAnalytics: {
      enabled: true
    }
  }),
});