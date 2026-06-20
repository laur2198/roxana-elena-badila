# Roxana Elena Bădilă — site (Astro, static)

Site profesional pentru **Roxana Elena Bădilă** — psiholog clinician (sub supervizare) și
psihoterapeut CBT, Brașov. Construit cu [Astro](https://astro.build) (output static), optimizat
pentru SEO și pentru trafic AI (GEO/AEO): schema JSON-LD, `sitemap`, `robots.txt`, `llms.txt`.

## Cuprins
- [Cerințe](#cerințe)
- [Comenzi](#comenzi)
- [Structura proiectului](#structura-proiectului)
- [Cum adaugi un articol de blog](#cum-adaugi-un-articol-de-blog)
- [Ce trebuie completat (placeholdere)](#ce-trebuie-completat-placeholdere)
- [Conectarea formularului de contact](#conectarea-formularului-de-contact)
- [Deploy](#deploy)
- [Trecere la domeniu propriu](#trecere-la-domeniu-propriu)
- [Checklist Local SEO & taskuri în afara codului](#checklist-local-seo--taskuri-în-afara-codului)

## Cerințe
- Node.js **≥ 18** (recomandat 20+).

## Comenzi
| Comandă             | Ce face                                            |
| ------------------- | -------------------------------------------------- |
| `npm install`       | Instalează dependențele                            |
| `npm run dev`       | Pornește serverul de dezvoltare la `localhost:4321`|
| `npm run build`     | Generează site-ul static în `dist/`                |
| `npm run preview`   | Servește local build-ul din `dist/`                |

## Structura proiectului
```
├─ astro.config.mjs        # site (domeniu), integrări (sitemap, mdx)
├─ public/
│  ├─ robots.txt           # permite tot + indică sitemap-ul
│  ├─ llms.txt             # rezumat pentru modelele AI (GEO/AEO)
│  ├─ favicon.svg
│  └─ images/              # imagini (portret, blog, OG) — de adăugat
├─ src/
│  ├─ consts.ts            # ⚙️ CONFIG CENTRAL: NAP, credențiale, servicii, social
│  ├─ content.config.ts    # schema zod pentru blog
│  ├─ styles/global.css    # design tokens + componente (din index.html)
│  ├─ components/          # Header, Footer, SEO, JsonLd, Icon, Faq, Breadcrumbs, ContactCta
│  ├─ layouts/Base.astro   # layout global (head, schema globală, reveal)
│  ├─ lib/                 # schema.ts (JSON-LD), services-content.ts, reading-time.ts
│  ├─ content/blog/*.md    # articolele de blog
│  └─ pages/               # rutele site-ului
└─ README.md
```

> **Config central:** aproape tot ce ține de date reale (telefon, e-mail, adresă, cod COPSI,
> coordonate, profiluri sociale, lista de servicii) se editează într-un singur loc: `src/consts.ts`.

## Cum adaugi un articol de blog
1. Creează un fișier nou în `src/content/blog/`, de exemplu `burnout-semne-si-cauze.md`.
   Numele fișierului devine slug-ul URL-ului: `/blog/burnout-semne-si-cauze`.
   (Folosește slug fără diacritice: `sedinte`, nu `ședințe`.)
2. Adaugă frontmatter-ul la început:
   ```yaml
   ---
   title: "Burnout: semne, cauze și ce poți face"
   description: "Rezumat de 150–160 de caractere pentru Google și rețele sociale."
   publishDate: 2026-06-20
   updatedDate: 2026-06-20        # opțional
   author: "Roxana Elena Bădilă"
   category: "Stres"
   tags: ["burnout", "stres"]
   cover: "/images/blog/burnout.webp"   # opțional
   draft: false                    # true = ascuns din producție
   faq:                            # opțional → generează blocuri FAQ + schema FAQPage
     - q: "Care sunt primele semne de burnout?"
       a: "Răspuns scurt și factual."
   ---
   ```
   > ⚠️ În interiorul valorilor între ghilimele duble `"..."` **nu** folosi ghilimele drepte `"`.
   > Pentru citate în text folosește `„...”` (ghilimele românești).
3. Scrie conținutul în Markdown sub frontmatter. Folosește titluri `##` (apar automat în cuprins).
4. `git add`, `git commit`, `git push`. Build-ul (Cloudflare/Netlify) publică automat.

Articolele cu `draft: false` apar pe `/blog`, în „articole recente" de pe homepage și
generează automat: meta tags, schema `Article`, breadcrumb, timp de citire și (dacă există `faq`)
schema `FAQPage`.

## Ce trebuie completat (placeholdere)
Caută în cod marcajele `[[DE COMPLETAT]]` / `[[...]]`. Principalele:
- **`src/consts.ts`** — telefon, e-mail, WhatsApp, adresă cabinet, cod poștal, **coordonate GEO**,
  program, cod COPSI, link profil COPSI, URL embed Google Maps.
- **`astro.config.mjs`** — `SITE_URL` (domeniul final, înlocuiește `https://roxanabadila.ro`).
  Schimbă și `SITE.url` din `src/consts.ts`, plus URL-urile din `public/robots.txt` și `public/llms.txt`.
- **`src/pages/contact.astro`** — `access_key` pentru Web3Forms (vezi mai jos).
- **`public/images/`** — portret, fotografii cabinet, imagine OG reală (1200×630), covere blog.

## Conectarea formularului de contact
Formularul de pe `/contact` trimite prin [Web3Forms](https://web3forms.com) (gratuit, fără server):
1. Creează o cheie de acces gratuită pe web3forms.com (primești cheia pe e-mail).
2. Înlocuiește `[[WEB3FORMS_ACCESS_KEY]]` din `src/pages/contact.astro` cu cheia ta.
3. Gata — mesajele ajung pe e-mailul asociat cheii. Formularul afișează confirmare/eroare inline
   (fără `alert()`), are honeypot anti-spam și nu necesită backend.

> Alternativ poți folosi Formspree sau o funcție serverless — schimbă doar `action`/endpoint-ul fetch.

## Deploy
Site static (`output: 'static'`), output în `dist/`. Deploy curent: **GitHub Pages**
(project site) prin GitHub Actions.

**GitHub Pages (activ):**
1. Workflow-ul `.github/workflows/deploy.yml` rulează la fiecare push în `main`
   (build cu `withastro/action@v3`, publicare cu `actions/deploy-pages@v4`).
2. **Pas manual unic:** în GitHub → **Settings → Pages → Build and deployment →
   Source: „GitHub Actions"** (NU „Deploy from a branch"). Altfel rulează Jekyll.
3. Site-ul apare la `https://laur2198.github.io/roxana-elena-badila/`.

> `public/.nojekyll` dezactivează Jekyll, iar `base: '/roxana-elena-badila'` din
> `astro.config.mjs` face ca toate căile (assets + linkuri) să funcționeze pe subcale.

**Alternativ (Cloudflare Pages / Netlify):** Build command `npm run build`, output `dist`,
Node 18+. Pe aceste platforme site-ul stă în rădăcină ⇒ vezi „Trecere la domeniu propriu"
(fără `base`).

## Trecere la domeniu propriu
Când cabinetul are un domeniu (ex. `roxanabadila.ro`), treci de la project site (cu subcale)
la rădăcina domeniului (fără subcale). Pașii **exacți**:

1. **`astro.config.mjs`** — comută de la setul (A) la (B), conform comentariilor din fișier:
   - comentează cele 2 linii `SITE_URL` + `BASE_PATH` din (A);
   - decomentează linia `export const SITE_URL = 'https://DOMENIU.ro';` din (B) și pune domeniul real;
   - comentează (sau șterge) linia `base: BASE_PATH,` din `defineConfig()`.
2. **`withBase()` — nimic de făcut manual.** Helper-ul citește `import.meta.env.BASE_URL`;
   fără `base`, acesta devine `/`, deci `withBase()` devine automat no-op (`/despre` rămâne `/despre`,
   fără `//`). Logica e deja pregătită în `src/lib/url.ts`.
3. **`public/CNAME`** — creează fișierul cu o singură linie: domeniul, fără `https://` și fără slash:
   ```
   roxanabadila.ro
   ```
   (Astro îl copiază automat în `dist/`, iar GitHub Pages îl folosește ca domeniu propriu.)
4. **`public/robots.txt`** — schimbă linia `Sitemap:` la `https://roxanabadila.ro/sitemap-index.xml`.
5. **`public/llms.txt`** — înlocuiește toate URL-urile `https://laur2198.github.io/roxana-elena-badila/...`
   cu `https://roxanabadila.ro/...`.
6. **`src/consts.ts`** (opțional, dacă e cazul) — `SITE.url` este folosit doar ca origin; la domeniu
   propriu setează-l pe `https://roxanabadila.ro` (sau lasă config-ul să dicteze, dacă preferi un singur loc).
7. **GitHub → Settings → Pages → Custom domain** — introdu domeniul și bifează „Enforce HTTPS”.
   Configurează la registrar DNS-ul cerut de GitHub (CNAME spre `laur2198.github.io` sau înregistrările A).
8. `npm run build` local pentru verificare, apoi `git commit` + `git push`. Workflow-ul redeployează.

> Verificare rapidă după build: în `dist/index.html`, căile de assets încep cu `/_astro/...`
> (fără `/roxana-elena-badila`), iar `canonical`/sitemap arată domeniul propriu.

## Checklist Local SEO & taskuri în afara codului
Acestea **nu** se rezolvă din cod, dar aduc cei mai mulți clienți:

- [ ] **Google Business Profile** — creează/revendică, categorie „Psiholog", adresă/program/telefon,
      poze, link site. (Cel mai mare impact pentru „psiholog Brașov".)
- [ ] **Google Search Console** — verifică domeniul, trimite `sitemap-index.xml`.
- [ ] **Bing Webmaster Tools** — contează tot mai mult pentru AI/Copilot.
- [ ] **NAP consistent** (Nume-Adresă-Telefon identic) pe site, GBP și toate directoarele.
- [ ] Profil COPSI + directoare psihologi (ex. la-psiholog.ro) pentru backlink-uri și consistență.

### Realism (de comunicat clientului)
- Domeniu nou ⇒ 3–6 luni până la organic relevant.
- Pentru „psiholog Brașov", Google Business Profile (harta/local pack) bate blogul.
- Conținut de sănătate = YMYL ⇒ E-E-A-T strict: autor cu credențiale, ton prudent, fără promisiuni
  de „vindecare", fără testimoniale false, disclaimer informativ pe articole.
