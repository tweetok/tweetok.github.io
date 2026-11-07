// Website analytics: PostHog in cookieless mode (no cookies, no local/session storage).
// Same PostHog project as the iOS app; website events carry `site: 'website'`.
// Only the production host sends data. Elsewhere (local preview) events are logged to the console.
//
// Events
// - $pageview         with referrer and UTM parameters (added by PostHog)
// - app_store_click   a click on an App Store button: position, campaign, page, locale
//
// The slim PostHog build is loaded after the page has loaded, so it never delays the first paint.
// Note: cookieless mode must also be turned on in the PostHog project settings,
// otherwise PostHog drops these events.
import type { PostHog } from 'posthog-js';

const POSTHOG_KEY = 'phc_S8sr2kaY57sIPoQaWJIBeIRufOu0qKmGlZulcuT3yAs';
const POSTHOG_HOST = 'https://us.i.posthog.com';
const PRODUCTION_HOST = 'tweetok.github.io';

const isProduction = location.hostname === PRODUCTION_HOST;

function common() {
  return {
    site: 'website',
    page_path: location.pathname,
    page_locale: document.documentElement.lang,
  };
}

let client: Promise<PostHog> | null = null;

function loadClient(): Promise<PostHog> {
  client ??= import('posthog-js/dist/module.slim.no-external').then(({ default: posthog }) => {
    posthog.init(POSTHOG_KEY, {
      api_host: POSTHOG_HOST,
      cookieless_mode: 'always',
      person_profiles: 'never',
      autocapture: false,
      capture_pageview: false,
      capture_pageleave: false,
      disable_session_recording: true,
      disable_surveys: true,
      advanced_disable_flags: true,
    });
    return posthog as PostHog;
  });
  return client;
}

function track(name: string, props: Record<string, unknown>, beacon = false) {
  if (!isProduction) {
    console.debug(`[analytics] ${name}`, props);
    return;
  }
  loadClient().then((ph) => ph.capture(name, props, beacon ? { transport: 'sendBeacon' } : undefined));
}

export function initAnalytics() {
  const pageview = () => track('$pageview', common());
  const idle = (fn: () => void) => ('requestIdleCallback' in window ? requestIdleCallback(fn, { timeout: 3000 }) : setTimeout(fn, 1));
  if (document.readyState === 'complete') idle(pageview);
  else addEventListener('load', () => idle(pageview), { once: true });

  document.addEventListener('click', (event) => {
    const link = (event.target as Element | null)?.closest<HTMLAnchorElement>('a[data-track]');
    if (!link) return;
    // sendBeacon so the event survives the navigation to the App Store
    track(
      link.dataset.track!,
      { ...common(), position: link.dataset.position, campaign: link.dataset.campaign, destination: link.href },
      true,
    );
  });
}
