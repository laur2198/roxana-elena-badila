// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';

// [[DOMENIU]] — domeniul final. Până la achiziție folosim placeholder-ul de mai jos.
// Schimbă această valoare cu domeniul real înainte de deploy (afectează canonical, OG, sitemap).
export const SITE_URL = 'https://roxanabadila.ro';

// https://astro.build/config
export default defineConfig({
  site: SITE_URL,
  output: 'static',
  trailingSlash: 'ignore',
  integrations: [
    mdx(),
    sitemap({
      i18n: undefined,
      filter: (page) => !page.includes('/404'),
    }),
  ],
  build: {
    inlineStylesheets: 'auto',
  },
  image: {
    // permite optimizarea imaginilor locale (WebP/AVIF) la build
    service: { entrypoint: 'astro/assets/services/sharp' },
  },
});
