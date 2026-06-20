// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';

// ============================================================
//  CONFIGURARE DEPLOY — alege UN singur set: (A) sau (B)
//  Detalii pas-cu-pas: README → „Trecere la domeniu propriu".
// ============================================================
//
// ─── (A) ACTIV ACUM — GitHub Pages PROJECT SITE ─────────────
//     Servit la https://laur2198.github.io/roxana-elena-badila/
//     `site` = originul user.github.io, `base` = numele repo-ului.
export const SITE_URL = 'https://laur2198.github.io';
export const BASE_PATH = '/roxana-elena-badila';
//
// ─── (B) VIITOR — DOMENIU PROPRIU (sau user site) ───────────
//     Servit la https://DOMENIU.ro/ (rădăcină ⇒ FĂRĂ base).
//     Pentru a activa varianta B:
//       1. comentează cele 2 linii (A) de mai sus;
//       2. decomentează linia SITE_URL de mai jos;
//       3. comentează linia `base: BASE_PATH,` din defineConfig();
//       4. adaugă public/CNAME (vezi README).
//     withBase() devine automat no-op (base devine '/').
// export const SITE_URL = 'https://DOMENIU.ro';

// https://astro.build/config
export default defineConfig({
  site: SITE_URL,
  base: BASE_PATH, // ← (B) DOMENIU PROPRIU: comentează această linie
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
