# tweetok.github.io

TweeTok's website, built with [Astro](https://astro.build) and published to https://tweetok.github.io/ by GitHub Actions on every push to `main`.

## Develop

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # output in dist/
```

## Where things are

- Copy for every language: `src/i18n/*.ts`. `en.ts` is the source; the other files must have the same keys (TypeScript checks this via the `Dict` type).
- Prices, store links, contact address and the free offline-cache limit: `src/i18n/locales.ts` and `pricing.price` in each language file.
- Screenshots: `src/assets/shots/{en,zh}` and `src/assets/tv`. Astro converts them to WebP at build time.
- Pages: `src/pages/[...lang]/`. English has no URL prefix; the others live under `/ja/`, `/ko/`, `/zh-hant/`, `/zh-hans/`.

- Privacy policy, support and child safety pages: `/privacy/`, `/support/`, `/child-safety/`. Their Chinese and English text is in `src/content/legal/` and is shown word for word; add `?lang=zh` or `?lang=en` to a link to open a specific language. These pages were moved from https://wym572.github.io/, which still serves the old copies until the store listings and the apps link here.
