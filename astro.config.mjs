// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://tweetok.github.io',
  trailingSlash: 'always',
  build: { format: 'directory' },
  // The full-screen/grid guide was replaced by the hide-retweets guide; its topic lives on the grid-view page.
  redirects: Object.fromEntries(
    ['', '/ja', '/ko', '/zh-hant', '/zh-hans'].map((p) => [`${p}/guides/full-screen-and-grid`, `${p}/grid-view/`]),
  ),
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/404'),
      i18n: {
        defaultLocale: 'en',
        locales: {
          en: 'en',
          ja: 'ja',
          ko: 'ko',
          'zh-hant': 'zh-Hant',
          'zh-hans': 'zh-Hans',
        },
      },
    }),
  ],
});
