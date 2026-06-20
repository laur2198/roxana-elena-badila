/**
 * Constante globale ale site-ului.
 *
 * Toate valorile marcate cu `[[DE COMPLETAT]]` trebuie înlocuite cu date reale
 * de către proprietară/dev înainte de lansare. Vezi secțiunea 14 din brief.
 */

export const SITE = {
  /** [[DOMENIU]] — schimbă și în astro.config.mjs (SITE_URL). */
  url: 'https://roxanabadila.ro',
  name: 'Roxana Elena Bădilă',
  shortName: 'Roxana Elena Bădilă',
  subtitle: 'Psiholog · Psihoterapeut CBT',
  defaultTitle: 'Roxana Elena Bădilă · Psiholog & Psihoterapeut CBT Brașov',
  defaultDescription:
    'Cabinet individual de psihologie în Brașov. Psihoterapie individuală pentru adulți în terapie cognitiv-comportamentală (CBT). Ședințe la cabinet și online.',
  locale: 'ro_RO',
  lang: 'ro',
  /** Imagine OG implicită (în /public). Placeholder SVG — înlocuiește cu un .jpg/.png real 1200×630. */
  defaultOgImage: '/images/og-default.svg',
} as const;

/**
 * NAP (Name-Address-Phone) — trebuie să fie IDENTIC peste tot:
 * site, Google Business Profile, directoare. Vezi secțiunea 10 din brief.
 */
export const CONTACT = {
  phone: '[[TELEFON]]', // ex. +40 7XX XXX XXX
  phoneHref: 'tel:+407XXXXXXXX', // [[TELEFON]] — format E.164 fără spații
  email: '[[EMAIL]]', // ex. contact@roxanabadila.ro
  emailHref: 'mailto:[[EMAIL]]',
  whatsapp: '[[TELEFON]]',
  whatsappHref: 'https://wa.me/407XXXXXXXX', // [[TELEFON]] — format internațional fără +
  addressStreet: '[[ADRESĂ CABINET]]', // ex. Str. Exemplu nr. 10
  addressLocality: 'Brașov',
  addressRegion: 'Brașov',
  postalCode: '[[COD POȘTAL]]',
  addressCountry: 'RO',
  /** [[GEO lat/lng]] — coordonate cabinet pentru schema + hartă. */
  geo: { latitude: '45.6580', longitude: '25.6012' }, // [[DE COMPLETAT]] — valori demonstrative Brașov
  /** [[PROGRAM]] */
  openingHours: 'Luni–Vineri, pe bază de programare',
  openingHoursSpec: [
    { days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '09:00', closes: '19:00' },
  ],
  /** [[GOOGLE MAPS EMBED]] — înlocuiește cu URL-ul de embed al locației reale. */
  mapsEmbedUrl:
    'https://www.google.com/maps?q=Bra%C8%99ov%2C+Rom%C3%A2nia&output=embed',
  mapsLink: 'https://www.google.com/maps?q=Bra%C8%99ov%2C+Rom%C3%A2nia',
} as const;

/** Credențiale profesionale — afișate pentru E-E-A-T / YMYL. */
export const CREDENTIALS = {
  jobTitle: 'Psiholog clinician (sub supervizare) & Psihoterapeut CBT',
  alumniOf: 'Universitatea Babeș-Bolyai, Cluj-Napoca',
  copsiCode: '[[COD COPSI]]', // cod în Registrul unic al psihologilor
  copsiMembership: 'Colegiul Psihologilor din România (COPSI)',
  /** Profil oficial COPSI, dacă există public. */
  copsiProfileUrl: '', // [[DE COMPLETAT]] — opțional
} as const;

/** Profiluri sociale / externe (folosite în schema `sameAs`). */
export const SOCIAL = {
  linkedin: 'https://www.linkedin.com/in/roxana-elena-badila-542b5632b/',
} as const;

/** sameAs pentru JSON-LD — doar URL-urile completate. */
export const SAME_AS: string[] = [SOCIAL.linkedin, CREDENTIALS.copsiProfileUrl].filter(Boolean);

/** Navigația principală. */
export const NAV_LINKS = [
  { href: '/despre', label: 'Despre mine' },
  { href: '/servicii', label: 'Servicii', hasDropdown: true },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
] as const;

/** Serviciile — sursă unică pentru nav dropdown, index servicii și internal linking. */
export const SERVICES = [
  {
    slug: 'psihoterapie-individuala',
    title: 'Psihoterapie individuală adulți',
    navLabel: 'Psihoterapie individuală adulți',
    short:
      'Ședințe individuale de psihoterapie cognitiv-comportamentală (CBT) pentru adulți, la cabinet sau online.',
    serviceType: 'Psihoterapie individuală (CBT)',
  },
  {
    slug: 'evaluare-psihologica',
    title: 'Evaluare psihologică clinică',
    navLabel: 'Evaluare psihologică clinică',
    short:
      'Evaluare și psihodiagnostic clinic pentru adulți, în context terapeutic sau la solicitare.',
    serviceType: 'Evaluare psihologică clinică',
  },
  {
    slug: 'consiliere-psihologica',
    title: 'Consiliere psihologică',
    navLabel: 'Consiliere psihologică',
    short:
      'Sprijin punctual pentru perioade dificile, decizii importante sau momente de cumpănă.',
    serviceType: 'Consiliere psihologică',
  },
  {
    slug: 'sedinte-online',
    title: 'Ședințe online',
    navLabel: 'Ședințe online',
    short:
      'Aceeași calitate a lucrului ca la cabinet, de oriunde te-ai afla — comod și confidențial.',
    serviceType: 'Psihoterapie online',
  },
] as const;

export type ServiceMeta = (typeof SERVICES)[number];
