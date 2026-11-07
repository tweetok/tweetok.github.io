import { APP_STORE_URL, SITE, localeInfo, pathFor, dict, type Locale } from '../i18n/locales';

export function appJsonLd(locale: Locale) {
  const t = dict(locale);
  return {
    '@context': 'https://schema.org',
    '@type': 'MobileApplication',
    name: 'TweeTok',
    description: t.meta.homeDescription,
    url: new URL(pathFor(locale), SITE).href,
    inLanguage: localeInfo(locale).tag,
    applicationCategory: 'MultimediaApplication',
    operatingSystem: 'iOS, iPadOS, tvOS, Android',
    image: new URL('/apple-touch-icon.png', SITE).href,
    installUrl: APP_STORE_URL,
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
  };
}

export function faqJsonLd(items: { q: string; a: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  };
}

export function websiteJsonLd(locale: Locale) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'TweeTok',
    url: new URL(pathFor(locale), SITE).href,
    inLanguage: localeInfo(locale).tag,
  };
}

export function breadcrumbJsonLd(locale: Locale, slug: string, name: string) {
  const t = dict(locale);
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: t.nav.home, item: new URL(pathFor(locale), SITE).href },
      { '@type': 'ListItem', position: 2, name, item: new URL(pathFor(locale, slug), SITE).href },
    ],
  };
}

export function fill(text: string, values: Record<string, string | number>): string {
  return text.replace(/\{(\w+)\}/g, (m, key) => (key in values ? String(values[key]) : m));
}
