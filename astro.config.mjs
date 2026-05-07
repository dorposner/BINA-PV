// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

import react from "@astrojs/react";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: 'https://bina.kesher.me',
  integrations: [sitemap(), react()],

  i18n: {
      defaultLocale: "he",
      locales: ["he", "en"],
      routing: { prefixDefaultLocale: false }
  },

  vite: {
    plugins: [tailwindcss()]
  }
});