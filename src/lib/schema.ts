/**
 * Generatoare JSON-LD (schema.org) — implementare pe tip de pagină (brief sec. 8).
 * Validează cu Rich Results Test după deploy.
 */
import { SITE, CONTACT, CREDENTIALS, SAME_AS } from '../consts';

const abs = (path: string) => new URL(path, SITE.url).href;

const ORG_ID = `${SITE.url}/#organization`;
const WEBSITE_ID = `${SITE.url}/#website`;
const PERSON_ID = `${SITE.url}/#roxana`;
const BUSINESS_ID = `${SITE.url}/#psychologist`;

/** PostalAddress reutilizat. */
const postalAddress = () => ({
  '@type': 'PostalAddress',
  streetAddress: CONTACT.addressStreet,
  addressLocality: CONTACT.addressLocality,
  addressRegion: CONTACT.addressRegion,
  postalCode: CONTACT.postalCode,
  addressCountry: CONTACT.addressCountry,
});

/** WebSite — global, toate paginile. */
export function websiteSchema() {
  return {
    '@type': 'WebSite',
    '@id': WEBSITE_ID,
    url: SITE.url,
    name: SITE.name,
    inLanguage: 'ro-RO',
    publisher: { '@id': ORG_ID },
  };
}

/** Organization / LocalBusiness (Psychologist) — global + Acasă + Contact. */
export function psychologistSchema() {
  return {
    '@type': ['LocalBusiness', 'Psychologist'],
    '@id': BUSINESS_ID,
    name: SITE.name,
    alternateName: 'Cabinet psihologic Roxana Elena Bădilă',
    description: SITE.defaultDescription,
    url: SITE.url,
    image: abs(SITE.defaultOgImage),
    telephone: CONTACT.phone,
    email: CONTACT.email,
    address: postalAddress(),
    geo: {
      '@type': 'GeoCoordinates',
      latitude: CONTACT.geo.latitude,
      longitude: CONTACT.geo.longitude,
    },
    areaServed: [
      { '@type': 'City', name: 'Brașov' },
      { '@type': 'Country', name: 'România' },
    ],
    openingHoursSpecification: CONTACT.openingHoursSpec.map((s) => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: s.days,
      opens: s.opens,
      closes: s.closes,
    })),
    knowsAbout: ['Terapie cognitiv-comportamentală', 'Anxietate', 'Depresie', 'Stres', 'Burnout'],
    sameAs: SAME_AS,
    founder: { '@id': PERSON_ID },
  };
}

/** Alias minimal de Organization pentru a fi referit ca publisher. */
export function organizationSchema() {
  return {
    '@type': 'Organization',
    '@id': ORG_ID,
    name: SITE.name,
    url: SITE.url,
    logo: abs('/favicon.svg'),
    sameAs: SAME_AS,
  };
}

/** Person (Roxana) — /despre + autor articole. */
export function personSchema() {
  return {
    '@type': 'Person',
    '@id': PERSON_ID,
    name: SITE.name,
    jobTitle: CREDENTIALS.jobTitle,
    url: abs('/despre'),
    image: abs(SITE.defaultOgImage),
    alumniOf: { '@type': 'CollegeOrUniversity', name: CREDENTIALS.alumniOf },
    knowsAbout: ['Terapie cognitiv-comportamentală (CBT)', 'Psihologie clinică', 'Anxietate', 'Depresie'],
    memberOf: { '@type': 'Organization', name: CREDENTIALS.copsiMembership },
    worksFor: { '@id': BUSINESS_ID },
    sameAs: SAME_AS,
  };
}

/** Service — pagini de serviciu. */
export function serviceSchema(opts: {
  name: string;
  description: string;
  serviceType: string;
  url: string;
}) {
  return {
    '@type': 'Service',
    name: opts.name,
    description: opts.description,
    serviceType: opts.serviceType,
    url: abs(opts.url),
    provider: { '@id': BUSINESS_ID },
    areaServed: [
      { '@type': 'City', name: 'Brașov' },
      { '@type': 'Country', name: 'România' },
    ],
    audience: { '@type': 'PeopleAudience', suggestedMinAge: 18 },
  };
}

/** BreadcrumbList — pagini interne. */
export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      item: abs(it.path),
    })),
  };
}

/** FAQPage — servicii + articole cu faq[]. */
export function faqSchema(faq: { q: string; a: string }[]) {
  return {
    '@type': 'FAQPage',
    mainEntity: faq.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };
}

/** Article — articole blog. */
export function articleSchema(opts: {
  title: string;
  description: string;
  url: string;
  image?: string;
  datePublished: string;
  dateModified: string;
}) {
  return {
    '@type': 'Article',
    headline: opts.title,
    description: opts.description,
    image: opts.image ? abs(opts.image) : abs(SITE.defaultOgImage),
    datePublished: opts.datePublished,
    dateModified: opts.dateModified,
    author: { '@id': PERSON_ID },
    publisher: { '@id': ORG_ID },
    mainEntityOfPage: { '@type': 'WebPage', '@id': abs(opts.url) },
    inLanguage: 'ro-RO',
  };
}

/** Împachetează într-un @graph cu @context unic. */
export function graph(...nodes: Record<string, any>[]) {
  return {
    '@context': 'https://schema.org',
    '@graph': nodes,
  };
}
