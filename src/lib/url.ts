/**
 * Helper pentru linkuri/assets compatibile cu `base` (GitHub Pages project site).
 *
 * Astro NU rescrie automat căile absolute scrise manual în markup (`/despre`,
 * `/favicon.svg` etc.). Le prefixăm cu `import.meta.env.BASE_URL` prin `withBase()`.
 *
 * Exemple (base = '/roxana-elena-badila'):
 *   withBase('/despre')        -> '/roxana-elena-badila/despre'
 *   withBase('/')              -> '/roxana-elena-badila/'
 *
 * IMPORTANT — trecerea la domeniu propriu este AUTOMATĂ:
 * `BASE` citește `import.meta.env.BASE_URL`, care devine '/' când ștergi `base`
 * din astro.config.mjs. Atunci withBase() devine de la sine un no-op:
 *   withBase('/despre')        -> '/despre'
 *   withBase('/')              -> '/'
 * Nu e nevoie de nicio modificare manuală în acest fișier la comutare.
 */
const BASE = import.meta.env.BASE_URL; // ex. '/roxana-elena-badila/' sau '/'

export function withBase(path = '/'): string {
  const root = BASE.endsWith('/') ? BASE.slice(0, -1) : BASE; // '/roxana-elena-badila' sau ''
  const clean = path.startsWith('/') ? path : `/${path}`;
  const joined = clean === '/' ? `${root}/` : `${root}${clean}`;
  // Plasă de siguranță: când base e gol (domeniu propriu), nu produce niciodată '//'.
  return joined.replace(/\/{2,}/g, '/') || '/';
}

/** Calea de bază brută (cu slash final), utilă pentru construirea URL-urilor absolute. */
export const BASE_URL = BASE;

