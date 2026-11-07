import type { ImageMetadata } from 'astro';
import type { Locale } from '../i18n/locales';
import { localeInfo } from '../i18n/locales';

const files = import.meta.glob<{ default: ImageMetadata }>('../assets/shots/*/*.png', { eager: true });
const tv = import.meta.glob<{ default: ImageMetadata }>('../assets/tv/*.png', { eager: true });

export type ShotName = '1_grid' | '2_feed' | '3_sheet' | '4_filter' | '5_cache';

export function shot(locale: Locale, name: ShotName): ImageMetadata {
  const set = localeInfo(locale).shots;
  return files[`../assets/shots/${set}/${name}.png`].default;
}

/** Apple TV screenshots (English UI, used for every language): the four-column grid and the full-screen post. */
export function tvShot(name: 'grid' | 'feed'): ImageMetadata {
  return tv[`../assets/tv/${name}.png`].default;
}

/**
 * Where the Bordighera post sits in each grid screenshot, and where its image sits in the
 * full-screen screenshot, as fractions of the 1206×2622 screen. Measured from the PNGs.
 * The demo scales the full-screen shot down onto the grid card, then back up.
 */
export const DEMO_GEOMETRY = {
  en: { cardLeft: 0.01244, cardTop: 0.50877, cardHeight: 0.267 },
  zh: { cardLeft: 0.505, cardTop: 0.35317, cardHeight: 0.267 },
  cardWidth: 0.4793,
  feedImageTop: 0.315,
  feedImageBottomInset: 0.3211,
};
