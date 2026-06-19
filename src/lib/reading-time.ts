/** Calculează timpul de citire (în minute) pe baza conținutului brut. */
export function readingTime(text: string): number {
  const words = text
    .replace(/<[^>]*>/g, ' ')
    .replace(/[#>*_`~\-\[\]()!]/g, ' ')
    .split(/\s+/)
    .filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
}

/** Formatează o dată în limba română (ex. „20 iunie 2026"). */
export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat('ro-RO', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date);
}
