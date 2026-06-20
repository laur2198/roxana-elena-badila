/**
 * Helper pentru linkuri/assets compatibile cu `base` (GitHub Pages project site).
 *
 * Astro NU rescrie automat căile absolute scrise manual în markup (`/despre`,
 * `/favicon.svg` etc.). Le prefixăm cu `import.meta.env.BASE_URL` prin `withBase()`.
 *
 * Exemple (base = '/roxana-elena-badila'):
 *   withBase('/despre')        -> '/roxana-elena-badila/despre'
 *   withBase('/')              -> '/roxana-elena-badila/'
 * Fără base (base = '/'):
 *   withBase('/despre')        -> '/despre'
 */
const BASE = import.meta.env.BASE_URL; // ex. '/roxana-elena-badila/' sau '/'

export function withBase(path = '/'): string {
  const root = BASE.endsWith('/') ? BASE.slice(0, -1) : BASE; // '/roxana-elena-badila' sau ''
  const clean = path.startsWith('/') ? path : `/${path}`;
  if (clean === '/') return root === '' ? '/' : `${root}/`;
  return `${root}${clean}`;
}

/** Calea de bază brută (cu slash final), utilă pentru construirea URL-urilor absolute. */
export const BASE_URL = BASE;
