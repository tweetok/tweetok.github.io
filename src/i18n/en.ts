// English is the source copy. Every other locale implements the same shape.
// Placeholders: {limit} = free offline-cache limit, {price} = Pro price.

const en = {
  meta: {
    siteName: 'TweeTok',
    homeTitle: 'TweeTok – Full-screen photo and video feed for iPhone and Apple TV',
    homeDescription:
      'TweeTok shows the photos and videos from the accounts you follow on X one post per screen, or as a two-column grid. Lists, translation, offline cache and an Apple TV app.',
  },
  nav: {
    home: 'Home',
    gridView: 'Grid view',
    appleTv: 'Apple TV',
    offline: 'Offline cache',
    android: 'Android beta',
    pricing: 'Pricing',
    faq: 'FAQ',
    support: 'Support',
    privacy: 'Privacy',
    childSafety: 'Child safety',
    language: 'Language',
    menu: 'Menu',
    skip: 'Skip to content',
  },
  cta: {
    appStore: 'Download on the App Store',
    appStoreShort: 'App Store',
    appStoreNote: 'Free for iPhone, iPad and Apple TV',
    android: 'Join the Android beta',
    androidNote: 'Pro is free during the beta',
  },
  hero: {
    title: 'Full screen or grid. Your feed, rehung.',
    lead:
      'TweeTok shows the photos and videos from the accounts you follow on X one post per screen, or as a two-column grid you can scan in seconds. Switch with one tap.',
    toggleToFull: 'Show full screen',
    toggleToGrid: 'Show grid',
    demoCaption: 'Tap the button to switch views, the same way you do in the app.',
    platforms: 'iPhone, iPad and Apple TV. Android in beta.',
  },
  wall: {
    title: 'What’s on the wall',
    intro: 'Every screen below is the real app. The labels say what each feature does and where it’s available.',
    free: 'Free',
    pro: 'Pro',
    more: 'Learn more',
    items: {
      feed: {
        title: 'One post per screen',
        body: 'Swipe up or down to move between posts, like a short-video app. Videos play as they arrive, multi-image posts swipe sideways, and the next posts are already loaded.',
        where: 'iPhone, iPad, Apple TV, Android',
      },
      grid: {
        title: 'Two-column grid',
        body: 'Scan a whole timeline at a glance. Tap a card and it opens to full screen from where it sits; swipe right and it goes back.',
        where: 'iPhone, iPad, Apple TV, Android',
      },
      lists: {
        title: 'Timelines and lists',
        body: 'For You, Following, Likes, Bookmarks and every list you made or follow, one tap away. TweeTok remembers where you stopped in each.',
        where: 'iPhone, iPad, Apple TV, Android',
      },
      filter: {
        title: 'Filters',
        body: 'Hide text-only posts and reposts so the feed is all pictures and video. Pro also hides posts you’ve already seen and remembers filters for each timeline.',
        where: 'iPhone, iPad, Android',
      },
      cache: {
        title: 'Offline cache',
        body: 'Save posts and their images to your device and read them on a plane or a bad connection. Filter what you saved by author.',
        where: 'iPhone, iPad, Android',
      },
      tv: {
        title: 'Apple TV',
        body: 'Scan a code with your iPhone and your account is on the TV. Watch one post at a time, or switch to a grid and pick what to open with the Siri Remote.',
        where: 'Apple TV',
      },
    },
  },
  extras: {
    title: 'And the everyday things',
    items: [
      { title: 'Translation', body: 'Posts in other languages are translated in place, so you don’t open each one.' },
      { title: 'Likes, replies and bookmarks', body: 'Like, bookmark, repost, quote and reply without leaving the app. Double-tap to like.' },
      { title: 'Add to a list', body: 'Put an author into one of your lists from their post, in one tap.' },
      { title: 'Five languages', body: 'English, 日本語, 한국어, 繁體中文 and 简体中文.' },
    ],
  },
  privacy: {
    title: 'Your login stays on your device',
    items: [
      'You sign in on X’s own web page. TweeTok never sees your password.',
      'Your sign-in is encrypted and stored only on your device, in the iOS Keychain or Android’s secure storage. It is never uploaded to a server.',
      'Sign out at any time to remove the account and its data from the device.',
    ],
    link: 'Read the privacy policy',
  },
  pricing: {
    title: 'Free to use. Pro is a one-time purchase.',
    lead: 'One purchase. All future Pro feature updates included. No subscription.',
    freeName: 'Free',
    freePrice: '$0',
    proName: 'Pro',
    proPrice: '{price}',
    proPriceUnit: 'once',
    featureColumn: 'Feature',
    included: 'Included',
    notIncluded: 'Not included',
    rows: [
      { feature: 'Full-screen and grid views', free: 'yes', pro: 'yes' },
      { feature: 'Timelines and lists', free: 'yes', pro: 'yes' },
      { feature: 'Translation', free: 'yes', pro: 'yes' },
      { feature: 'Likes, replies and bookmarks', free: 'yes', pro: 'yes' },
      { feature: 'Hide text-only posts and reposts', free: 'yes', pro: 'yes' },
      { feature: 'Offline cache', free: 'Up to {limit} posts', pro: 'Unlimited' },
      { feature: 'Hide posts you’ve seen, filters per timeline', free: 'no', pro: 'yes' },
      { feature: 'Multiple accounts', free: 'no', pro: 'yes' },
      { feature: 'Apple TV pairing', free: 'no', pro: 'yes' },
      { feature: 'Cloud sync with your own NAS or WebDAV', free: 'no', pro: 'yes' },
    ],
    price: '$9.99',
    priceNote: 'US price. The App Store shows the price for your region before you buy. Purchases on iOS and Android are separate.',
  },
  faq: {
    title: 'Questions',
    items: [
      {
        q: 'Is TweeTok an official X app?',
        a: 'No. TweeTok is an independent app made by an independent developer. It is not affiliated with, endorsed or sponsored by X Corp. You need your own X account to use it.',
      },
      {
        q: 'Is TweeTok free?',
        a: 'Yes. Browsing, both views, timelines, lists and translation are free. Pro is a one-time purchase that adds unlimited offline cache, Apple TV, advanced filters, multiple accounts and cloud sync.',
      },
      {
        q: 'Does TweeTok see my password?',
        a: 'No. You sign in on X’s own web page inside the app. TweeTok keeps only the resulting sign-in on your device, encrypted, and never sends it to a server.',
      },
      {
        q: 'Which devices does it run on?',
        a: 'iPhone, iPad and Apple TV, from the App Store. The Android app is in beta on Google Play, and anyone can join.',
      },
      {
        q: 'Do I need to buy Pro again for Apple TV?',
        a: 'No. The Apple TV app is a free download. Pairing it with your iPhone needs Pro on the iPhone.',
      },
      {
        q: 'Does a purchase on iPhone unlock Pro on Android?',
        a: 'No. The App Store and Google Play handle purchases separately, so Pro unlocks on the platform where you bought it.',
      },
    ],
  },
  finalCta: {
    title: 'See your feed the way it was meant to be seen.',
    body: 'Download TweeTok for free. Pro is there when you want more.',
  },
  footer: {
    disclaimer:
      'TweeTok is an independently developed third-party viewer. It is not affiliated with, endorsed by, sponsored by or authorised by X Corp. All content shown in the app comes from X and belongs to its authors.',
    contact: 'Contact',
    madeBy: 'Made by an independent developer.',
  },
  pages: {
    gridView: {
      title: 'Grid view – see a whole timeline at a glance | TweeTok',
      description:
        'Switch between full screen and a two-column grid in one tap. Open a card to expand it in place, swipe right to put it back. Works on timelines, lists and profiles.',
      h1: 'Grid view',
      lead: 'Full screen is for looking. The grid is for choosing. TweeTok lets you switch between them with one tap, without losing your place.',
      sections: [
        {
          title: 'Two columns, every picture',
          body: 'The grid lays out posts in two columns at their own proportions, with the author and like count under each one. Videos show a play mark, so you can see what moves before you open it.',
        },
        {
          title: 'Open in place, close in place',
          body: 'Tap a card and it grows to full screen from where it was. Swipe right and it shrinks back into the same spot. You keep your position in the grid, so you can open one post after another.',
        },
        {
          title: 'On timelines, lists and profiles',
          body: 'The grid works everywhere you browse: your timelines, your lists and anyone’s profile. On Apple TV it becomes a four-column grid sized for the big screen.',
        },
      ],
    },
    appleTv: {
      title: 'TweeTok for Apple TV – browse photos and videos on the big screen',
      description:
        'Scan a code with your iPhone to sign in on Apple TV. Browse your timelines and lists full screen or in a grid with the Siri Remote.',
      h1: 'TweeTok on Apple TV',
      lead: 'Photos and videos look better on a big screen. TweeTok for Apple TV puts your timelines and lists on the TV, one post at a time.',
      sections: [
        {
          title: 'Sign in by scanning a code',
          body: 'No typing with the remote. Open TweeTok on Apple TV, scan the code with your iPhone, and your accounts appear on the TV.',
        },
        {
          title: 'Made for the Siri Remote',
          body: 'Swipe from post to post in full screen, or switch to a grid and move around it with the remote. Timelines and lists open from the side menu.',
        },
        {
          title: 'Settings come with you',
          body: 'Your read history and cloud library settings are carried over from the iPhone, so there is nothing to set up on the TV.',
        },
      ],
      requirement: 'The Apple TV app is a free download. Pairing needs TweeTok Pro on your iPhone.',
    },
    offline: {
      title: 'Offline cache – keep photo and video posts on your device | TweeTok',
      description:
        'Save posts and their images to your iPhone or Android phone and read them with no connection. Filter by author. Sync your library with your own NAS or WebDAV.',
      h1: 'Offline cache',
      lead: 'Posts get deleted and connections drop. Save the posts you care about and read them anywhere.',
      sections: [
        {
          title: 'Save a post with its media',
          body: 'Save from a post’s menu. The post, its images and its video cover are stored on your device, and the list shows what was saved and when.',
        },
        {
          title: 'Find it again by author',
          body: 'Your saved posts are grouped by author along the top, so you can go straight to one artist or account.',
        },
        {
          title: 'Sync with your own storage',
          body: 'With Pro, sync your saved posts and read history between devices through your own NAS or any WebDAV storage. Nothing passes through a TweeTok server.',
        },
      ],
      requirement: 'Free users can keep up to {limit} posts. Pro removes the limit.',
    },
    androidBeta: {
      title: 'TweeTok for Android – join the beta',
      description:
        'TweeTok for Android is in beta on Google Play. Join in three steps. All Pro features are free during the beta.',
      h1: 'TweeTok for Android beta',
      lead: 'The Android app is in testing on Google Play before its public release. Join now and every Pro feature is free while the beta runs.',
      stepsTitle: 'Join in three steps',
      steps: [
        { title: 'Join the Google group', body: 'Sign in with your Google account and join the testers group.', action: 'Open the group' },
        { title: 'Become a tester', body: 'With the same Google account, open the testing page and tap “Become a tester”.', action: 'Open the testing page' },
        { title: 'Install from Google Play', body: 'Install TweeTok from Google Play, sign in with X and start browsing.', action: 'Open Google Play' },
      ],
      freeTitle: 'Free during the beta',
      freeItems: ['Unlimited offline cache', 'Advanced filters', 'Cloud sync with WebDAV', 'Multiple accounts'],
      requirements: 'Needs Android 12 or later, Google Play, an X account, and you must be 18 or older.',
      sameAccount: 'Use the same Google account for all three steps, or Google Play won’t show the app.',
    },
  },
  notFound: {
    title: 'Page not found',
    body: 'This page doesn’t exist. It may have moved.',
    back: 'Go to the home page',
  },
};

export type Dict = typeof en;
export default en;
