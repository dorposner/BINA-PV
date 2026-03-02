// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
    site: 'https://bina.kesher.me',
    integrations: [sitemap()],
    i18n: {
        defaultLocale: "he",
        locales: ["he", "en"],
        routing: { prefixDefaultLocale: false }
    }
});
