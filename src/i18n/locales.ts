import en from './en';
import ja from './ja';
import ko from './ko';
import zhHant from './zh-hant';
import zhHans from './zh-hans';
import type { Dict } from './en';

export type Locale = 'en' | 'ja' | 'ko' | 'zh-hant' | 'zh-hans';

export interface LocaleInfo {
  code: Locale;
  /** BCP 47 tag for <html lang> and hreflang */
  tag: string;
  /** Name shown in the language switcher, in its own language */
  label: string;
  /** URL prefix, '' for the default locale */
  prefix: string;
  /** Which screenshot set to show */
  shots: 'en' | 'zh';
  /** Open Graph image */
  og: string;
  ogLocale: string;
}

export const LOCALES: LocaleInfo[] = [
  { code: 'en', tag: 'en', label: 'English', prefix: '', shots: 'en', og: '/og/en.png', ogLocale: 'en_US' },
  { code: 'ja', tag: 'ja', label: '日本語', prefix: 'ja', shots: 'en', og: '/og/ja.png', ogLocale: 'ja_JP' },
  { code: 'ko', tag: 'ko', label: '한국어', prefix: 'ko', shots: 'en', og: '/og/ko.png', ogLocale: 'ko_KR' },
  { code: 'zh-hant', tag: 'zh-Hant', label: '繁體中文', prefix: 'zh-hant', shots: 'en', og: '/og/en.png', ogLocale: 'zh_TW' },
  { code: 'zh-hans', tag: 'zh-Hans', label: '简体中文', prefix: 'zh-hans', shots: 'zh', og: '/og/zh.png', ogLocale: 'zh_CN' },
];

const DICTS: Record<Locale, Dict> = { en, ja, ko, 'zh-hant': zhHant, 'zh-hans': zhHans };

export const SITE = 'https://tweetok.github.io';
export const APP_STORE_URL = 'https://apps.apple.com/app/id6755531352';
export const APP_STORE_ID = '6755531352';
/**
 * App Store Connect campaign provider token (App Analytics > Acquisition > Campaigns > Generate campaign link, the `pt=` value).
 * Empty means App Store links are sent without campaign parameters.
 */
export const APP_STORE_PROVIDER_TOKEN = '128489940';

/**
 * App Store link tagged with a campaign token (`ct`, max 40 characters), so App Store Connect can show
 * product page views and downloads per website page.
 */
export function appStoreLink(campaign: string): string {
  if (!APP_STORE_PROVIDER_TOKEN) return APP_STORE_URL;
  const url = new URL(`https://apps.apple.com/app/apple-store/id${APP_STORE_ID}`);
  url.searchParams.set('pt', APP_STORE_PROVIDER_TOKEN);
  url.searchParams.set('ct', campaign.slice(0, 40));
  url.searchParams.set('mt', '8');
  return url.href;
}
export const ANDROID_GROUP_URL = 'https://groups.google.com/g/tweetok-testers';
export const ANDROID_OPTIN_URL = 'https://play.google.com/apps/testing/com.tada.tweetok';
export const ANDROID_STORE_URL = 'https://play.google.com/store/apps/details?id=com.tada.tweetok';
export const PRIVACY_URL = '/privacy/';
export const SUPPORT_URL = '/support/';
export const CHILD_SAFETY_URL = '/child-safety/';
export const CONTACT_EMAIL = 'wym572@gmail.com';
export const FREE_CACHE_LIMIT = 5;

export function localeInfo(code: Locale): LocaleInfo {
  return LOCALES.find((l) => l.code === code)!;
}

export function dict(code: Locale): Dict {
  return DICTS[code];
}

/** Path for a page slug ('' for home) in a locale, always with a trailing slash. */
export function pathFor(code: Locale, slug = ''): string {
  const prefix = localeInfo(code).prefix;
  const parts = [prefix, slug].filter(Boolean).join('/');
  return parts ? `/${parts}/` : '/';
}

/** getStaticPaths helper: one entry per locale; the default locale has no prefix. */
export function localePaths() {
  return LOCALES.map((l) => ({
    params: { lang: l.prefix || undefined },
    props: { locale: l.code },
  }));
}
