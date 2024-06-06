import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import preact from "@astrojs/preact";
import tailwind from "@astrojs/tailwind";
import vercel from '@astrojs/vercel/static';
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
  redirects: {
    '/program': 'https://reaqct24storage.blob.core.windows.net/assets/CONFERENCE%20program%202_updated.pdf?sp=r&st=2024-06-06T23:06:15Z&se=2025-07-18T07:06:15Z&spr=https&sv=2022-11-02&sr=b&sig=q7IIp1U8TX4E9Jyyi%2BAr3kFgWmi5jEIwj89C2YLMh28%3D'
  }
});