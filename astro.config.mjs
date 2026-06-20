// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';

// Deploy pe GitHub Pages ca PROJECT SITE:
//   https://laur2198.github.io/roxana-elena-badila/
// `site` = originul (user.github.io), `base` = numele repo-ului.
// Dacă treci pe domeniu propriu: pune site='https://domeniul-tau.ro', șterge base
// și adaugă un fișier public/CNAME cu domeniul.
export const SITE_URL = 'https://laur2198.github.io';
export const BASE_PATH = '/roxana-elena-badila';

// https://astro.build/config
export default defineConfig({
  site: SITE_URL,
  base: BASE_PATH,
  output: 'static',
  trailingSlash: 'ignore',
  integrations: [
    mdx(),
    sitemap({
      filter: (page) => !page.includes('/404'),
    }),
  ],
  build: {
    inlineStylesheets: 'auto',
  },
  image: {
    service: { entrypoint: 'astro/assets/services/sharp' },
  },
});
