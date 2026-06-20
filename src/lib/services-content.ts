/**
 * Conținut detaliat pentru paginile de serviciu (landing local, intenție comercială).
 * Cuvinte-cheie țintă integrate natural (brief sec. 9).
 */
export interface ServiceContent {
  slug: string;
  icon: string;
  /** H1: serviciul + localizare. */
  h1: string;
  metaTitle: string;
  metaDescription: string;
  lead: string;
  serviceType: string;
  intro: string[];
  forWho: string[];
  how: { t: string; d: string }[];
  onlineVsOffice: string;
  faq: { q: string; a: string }[];
}

export const SERVICES_CONTENT: Record<string, ServiceContent> = {
  'psihoterapie-individuala': {
    slug: 'psihoterapie-individuala',
    icon: 'user',
    h1: 'Psihoterapie individuală pentru adulți în Brașov',
    metaTitle: 'Psihoterapie individuală adulți Brașov (CBT)',
    metaDescription:
      'Psihoterapie individuală pentru adulți în Brașov, în terapie cognitiv-comportamentală (CBT). Ședințe la cabinet sau online. Anxietate, depresie, stres.',
    lead: 'Ședințe individuale de psihoterapie cognitiv-comportamentală pentru adulți — la cabinet în Brașov sau online, în ritmul tău.',
    serviceType: 'Psihoterapie individuală (CBT)',
    intro: [
      'Psihoterapia individuală este un spațiu confidențial, doar al tău, în care lucrăm împreună asupra dificultăților care îți afectează viața de zi cu zi. Folosesc terapia cognitiv-comportamentală (CBT), o abordare structurată și validată științific.',
      'Lucrăm la obiective clare, cu instrumente concrete pe care le poți folosi și în afara ședințelor. Nu există rețete rapide — există un demers personalizat, adaptat ție.',
    ],
    forWho: [
      'Te confrunți cu anxietate, griji excesive sau atacuri de panică.',
      'Treci printr-o perioadă de depresie, lipsă de energie sau de sens.',
      'Simți stres cronic, suprasolicitare sau te apropii de burnout.',
      'Vrei să-ți înțelegi mai bine emoțiile, tiparele și relațiile.',
    ],
    how: [
      { t: 'Evaluare inițială', d: 'În primele ședințe înțeleg ce te aduce în terapie și stabilim împreună obiectivele.' },
      { t: 'Plan personalizat', d: 'Construim un plan de lucru adaptat nevoilor tale, cu pași concreți.' },
      { t: 'Ședințe regulate', d: 'De regulă săptămânale, a câte 50 de minute, la cabinet sau online.' },
      { t: 'Consolidare', d: 'Pe măsură ce apar schimbările, rărim întâlnirile și încheiem când te simți pregătit.' },
    ],
    onlineVsOffice:
      'Poți alege ședințe la cabinetul din Brașov sau online — pentru psihoterapia adulților, ambele oferă în general aceeași calitate a lucrului.',
    faq: [
      { q: 'Cât durează o ședință de psihoterapie?', a: 'O ședință durează în mod obișnuit 50 de minute.' },
      { q: 'Cât de des au loc ședințele?', a: 'La început sunt de regulă săptămânale, iar pe parcurs frecvența se adaptează în funcție de evoluția ta.' },
      { q: 'Pentru ce probleme este potrivită psihoterapia individuală?', a: 'Lucrez cu adulți pe teme precum anxietate, atacuri de panică, depresie, stres, burnout, stimă de sine și dificultăți în relații.' },
    ],
  },
  'evaluare-psihologica': {
    slug: 'evaluare-psihologica',
    icon: 'clipboard',
    h1: 'Evaluare psihologică clinică pentru adulți în Brașov',
    metaTitle: 'Evaluare psihologică clinică Brașov',
    metaDescription:
      'Evaluare și psihodiagnostic clinic pentru adulți în Brașov, în context terapeutic sau la solicitare. La cabinet sau online.',
    lead: 'Evaluare și psihodiagnostic clinic pentru adulți, în context terapeutic sau la solicitare.',
    serviceType: 'Evaluare psihologică clinică',
    intro: [
      'Evaluarea psihologică clinică ajută la înțelegerea clară a dificultăților cu care te confrunți și la stabilirea celui mai potrivit plan de intervenție.',
      'Poate fi parte din procesul terapeutic sau o solicitare punctuală, în funcție de nevoia ta.',
    ],
    forWho: [
      'Vrei o înțelegere clară a stării tale psihologice actuale.',
      'Ai nevoie de un psihodiagnostic înainte de a începe un demers terapeutic.',
      'Cauți o evaluare clinică structurată, realizată de un specialist.',
    ],
    how: [
      { t: 'Interviu clinic', d: 'Discutăm despre istoricul tău, dificultățile actuale și obiective.' },
      { t: 'Instrumente validate', d: 'Folosesc, după caz, instrumente psihologice standardizate.' },
      { t: 'Interpretare & feedback', d: 'Îți explic rezultatele într-un limbaj clar și accesibil.' },
      { t: 'Recomandări', d: 'Stabilim împreună pașii următori cei mai potriviți pentru tine.' },
    ],
    onlineVsOffice:
      'Evaluarea poate fi realizată la cabinet în Brașov sau online, în funcție de tipul de evaluare necesar.',
    faq: [
      { q: 'Cât durează o evaluare psihologică?', a: 'Depinde de tipul evaluării; de regulă presupune una sau mai multe întâlniri. Stabilim împreună la primul contact.' },
      { q: 'Primesc un raport scris?', a: 'În funcție de scopul evaluării, putem stabili dacă este necesar un raport scris. Discutăm acest aspect de la început.' },
    ],
  },
  'consiliere-psihologica': {
    slug: 'consiliere-psihologica',
    icon: 'message',
    h1: 'Consiliere psihologică pentru adulți în Brașov',
    metaTitle: 'Consiliere psihologică Brașov',
    metaDescription:
      'Consiliere psihologică pentru adulți în Brașov — sprijin punctual pentru perioade dificile, decizii importante sau momente de cumpănă. La cabinet sau online.',
    lead: 'Sprijin punctual pentru perioade dificile, decizii importante sau momente de cumpănă.',
    serviceType: 'Consiliere psihologică',
    intro: [
      'Consilierea psihologică oferă sprijin pentru situații concrete de viață: o perioadă dificilă, o decizie importantă sau un moment în care simți că te-ai blocat.',
      'Spre deosebire de psihoterapia de durată, consilierea este de regulă mai scurtă și focalizată pe o temă anume.',
    ],
    forWho: [
      'Treci printr-o schimbare majoră sau o perioadă tensionată.',
      'Ai de luat o decizie importantă și vrei claritate.',
      'Simți nevoia de un sprijin punctual, nu neapărat un proces lung.',
    ],
    how: [
      { t: 'Clarificarea temei', d: 'Identificăm împreună situația concretă în care ai nevoie de sprijin.' },
      { t: 'Explorare', d: 'Înțelegem contextul, resursele tale și opțiunile disponibile.' },
      { t: 'Strategii practice', d: 'Lucrăm la pași concreți, adaptați situației tale.' },
    ],
    onlineVsOffice:
      'Consilierea este disponibilă la cabinet în Brașov sau online, în funcție de preferința ta.',
    faq: [
      { q: 'Care e diferența dintre consiliere și psihoterapie?', a: 'Consilierea este de regulă mai scurtă și focalizată pe o situație concretă, iar psihoterapia abordează în profunzime tipare de durată. Putem clarifica împreună ce ți se potrivește.' },
    ],
  },
  'sedinte-online': {
    slug: 'sedinte-online',
    icon: 'monitor',
    h1: 'Ședințe de psihoterapie online pentru adulți',
    metaTitle: 'Psiholog online — ședințe psihoterapie online',
    metaDescription:
      'Ședințe de psihoterapie online pentru adulți, în terapie cognitiv-comportamentală (CBT). Aceeași calitate ca la cabinet, de oriunde te-ai afla.',
    lead: 'Aceeași calitate a lucrului ca la cabinet, de oriunde te-ai afla — comod și confidențial.',
    serviceType: 'Psihoterapie online',
    intro: [
      'Ședințele online îți oferă acces la psihoterapie indiferent de locul în care te afli — util dacă ai un program încărcat, locuiești departe de Brașov sau preferi pur și simplu confortul propriei case.',
      'Pentru psihoterapia adulților, lucrul online este, în general, la fel de eficient ca cel la cabinet.',
    ],
    forWho: [
      'Locuiești în altă localitate sau călătorești des.',
      'Ai un program care îți face greu deplasarea la cabinet.',
      'Preferi confortul și intimitatea propriei case.',
    ],
    how: [
      { t: 'Programare', d: 'Stabilim ziua și ora, exact ca pentru o ședință la cabinet.' },
      { t: 'Conexiune', d: 'Primești un link de întâlnire; ai nevoie doar de un loc liniștit și internet stabil.' },
      { t: 'Ședința', d: 'Lucrăm 50 de minute, cu aceeași structură și confidențialitate.' },
    ],
    onlineVsOffice:
      'Dacă preferi întâlnirile față în față, te aștept oricând la cabinetul din Brașov — alegerea îți aparține.',
    faq: [
      { q: 'Ședințele online sunt la fel de eficiente ca cele la cabinet?', a: 'Pentru psihoterapia adulților, ședințele online oferă în general aceeași calitate a lucrului. Ai nevoie doar de un loc liniștit și o conexiune bună la internet.' },
      { q: 'De ce am nevoie pentru o ședință online?', a: 'Un dispozitiv cu cameră și microfon, o conexiune stabilă la internet și un spațiu privat, în care să nu fii întrerupt.' },
    ],
  },
};
