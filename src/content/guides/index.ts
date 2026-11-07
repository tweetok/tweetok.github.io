import type { ImageMetadata } from 'astro';
import type { Locale } from '../../i18n/locales';
import { FREE_CACHE_LIMIT } from '../../i18n/locales';
import { shot, tvShot } from '../../lib/shots';
import en, { type Guide, type GuidesDict } from './en';
import ja from './ja';
import ko from './ko';
import zhHant from './zh-hant';
import zhHans from './zh-hans';

const GUIDES: Record<Locale, GuidesDict> = { en, ja, ko, 'zh-hant': zhHant, 'zh-hans': zhHans };

export const GUIDE_SLUGS = en.guides.map((g) => g.slug);

/** Publication date shared by all guides, for structured data. */
export const GUIDES_DATE = '2026-11-07';

export function guides(locale: Locale): GuidesDict {
  return GUIDES[locale];
}

export function guide(locale: Locale, slug: Guide['slug']): Guide {
  return GUIDES[locale].guides.find((g) => g.slug === slug)!;
}

export function guideImage(locale: Locale, image: Guide['image']): { src: ImageMetadata; wide: boolean } {
  switch (image) {
    case 'tv':
      return { src: tvShot('grid'), wide: true };
    case 'filter':
      return { src: shot(locale, '4_filter'), wide: false };
    case 'grid':
      return { src: shot(locale, '1_grid'), wide: false };
    case 'cache':
      return { src: shot(locale, '5_cache'), wide: false };
    case 'feed':
      return { src: shot(locale, '2_feed'), wide: false };
  }
}

export function fillGuide(text: string): string {
  return text.replaceAll('{limit}', String(FREE_CACHE_LIMIT));
}

export type { Guide, GuidesDict };
