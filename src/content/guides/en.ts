// English is the source for the guides. Other locales implement the same shape:
// same slugs, same number of sections and steps in each guide.
// {limit} is replaced with the free offline-cache limit.

export interface GuideSection {
  h2: string;
  paragraphs: string[];
  /** numbered steps, shown after the paragraphs */
  steps?: string[];
}

export interface Guide {
  slug: 'apple-tv' | 'photos-and-videos-only' | 'full-screen-and-grid' | 'save-offline' | 'download-videos';
  /** <title> */
  title: string;
  description: string;
  h1: string;
  lead: string;
  /** which screenshot to show beside the article */
  image: 'tv' | 'filter' | 'grid' | 'cache' | 'feed';
  imageAlt: string;
  sections: GuideSection[];
}

export interface GuidesDict {
  indexTitle: string;
  indexDescription: string;
  indexH1: string;
  indexLead: string;
  readGuide: string;
  updated: string;
  relatedTitle: string;
  ctaTitle: string;
  ctaBody: string;
  guides: Guide[];
}

const en: GuidesDict = {
  indexTitle: 'Guides – browsing X photos and videos with TweeTok',
  indexDescription:
    'Step-by-step guides: browse X on Apple TV, see only photos and videos, swipe one post at a time or scan a grid, and save posts for offline viewing.',
  indexH1: 'Guides',
  indexLead: 'Short, practical answers to the questions people ask most about browsing photos and videos from X.',
  readGuide: 'Read the guide',
  updated: 'Updated November 2026',
  relatedTitle: 'More guides',
  ctaTitle: 'Try it on your own feed',
  ctaBody: 'TweeTok is free to download for iPhone, iPad and Apple TV, and the Android beta is open to everyone.',
  guides: [
    {
      slug: 'apple-tv',
      title: 'How to browse X (Twitter) on Apple TV – step-by-step guide',
      description:
        'Watch photos and videos from your X timeline and lists on Apple TV. Pair with your iPhone by scanning a code, then browse full screen or in a grid with the Siri Remote.',
      h1: 'How to browse X (Twitter) on Apple TV',
      lead: 'Photos and videos from the accounts you follow look much better on a TV. Here is how to put your X timeline and lists on Apple TV and browse them with the Siri Remote.',
      image: 'tv',
      imageAlt: 'TweeTok on Apple TV showing a four-column grid of paintings',
      sections: [
        {
          h2: 'Is there an X app for Apple TV?',
          paragraphs: [
            'X’s own app is made for iPhone and iPad. When we wrote this guide we could not find an official X app on Apple TV for browsing your timeline, so the practical option is a third-party viewer.',
            'TweeTok is one of them. It is an independent app, not made by X, and it shows the posts from your own X account: your timelines, your lists and anyone’s profile.',
          ],
        },
        {
          h2: 'What you need',
          paragraphs: [
            'An Apple TV with TweeTok installed, an iPhone with TweeTok signed in to your X account, and both devices on the same Wi-Fi network.',
          ],
        },
        {
          h2: 'Pair your Apple TV with your iPhone',
          paragraphs: ['You don’t type anything with the remote. Your sign-in is sent from the iPhone to the Apple TV over your local network.'],
          steps: [
            'Open TweeTok on Apple TV. It shows a QR code.',
            'On your iPhone, open TweeTok and go to Me > Account Management, then choose to scan.',
            'Point the camera at the code on the TV. When asked Pair with this Apple TV?, tap Send.',
            'Your accounts appear on the TV. Your read history and cloud library settings come across too.',
          ],
        },
        {
          h2: 'Browse with the Siri Remote',
          paragraphs: [
            'Swipe down on the remote to move to the next post. Each post fills the screen, and videos play when they arrive.',
            'To see more at once, switch to the grid with the button at the top right. The grid shows four columns sized for the TV; click a card to open it full screen.',
            'Press left on the remote to open the side menu and switch between For You, Following, Likes, Bookmarks and your lists.',
          ],
        },
        {
          h2: 'If pairing doesn’t work',
          paragraphs: [
            'Make sure the iPhone and the Apple TV are on the same Wi-Fi network. On the iPhone, check that TweeTok has Local Network and Camera access in Settings > TweeTok. If it still fails, quit TweeTok on both devices and try again.',
          ],
        },
      ],
    },
    {
      slug: 'photos-and-videos-only',
      title: 'How to see only photos and videos on X (Twitter) – hide text posts and reposts',
      description:
        'X has no built-in switch for a media-only timeline. Here is what X itself lets you do, and how to hide text-only posts and reposts on iPhone, Apple TV and Android.',
      h1: 'How to see only photos and videos on X',
      lead: 'If you follow artists, photographers or video accounts, text posts and reposts get in the way. Here is how to get a timeline that is only pictures and video.',
      image: 'filter',
      imageAlt: 'TweeTok filter menu with Hide Retweets, Hide Text-Only Tweets and Hide Read Tweets',
      sections: [
        {
          h2: 'What X lets you do',
          paragraphs: [
            'X’s app has no setting that hides every post without media. You can open one account’s Media tab to see only that account’s photos and videos, but not for your whole timeline.',
            'Reposts can be turned off only one account at a time, from that account’s profile, and the change applies to new reposts only. On the web, some people use browser extensions to filter the timeline, but those don’t work in the phone app.',
          ],
        },
        {
          h2: 'Hide text-only posts and reposts in TweeTok',
          paragraphs: ['TweeTok has both filters built in, for any timeline or list, free.'],
          steps: [
            'Open the timeline or list you want to filter.',
            'Tap the filter button next to the timeline name at the top.',
            'Turn on Hide Text-Only Tweets to keep only posts with images or video.',
            'Turn on Hide Retweets to keep only posts written by the accounts you follow.',
          ],
        },
        {
          h2: 'Then make the pictures bigger',
          paragraphs: [
            'Once the timeline is only media, switch to full screen and swipe through one post at a time, or use the two-column grid to scan a whole page of pictures. The same filters work on Apple TV and Android.',
          ],
        },
      ],
    },
    {
      slug: 'full-screen-and-grid',
      title: 'Browse X (Twitter) like short videos – one post per screen, or a photo grid',
      description:
        'Swipe through your X timeline one full-screen post at a time, like a short-video app, or switch to a two-column grid to scan dozens of photos at once.',
      h1: 'Browse X one post per screen, or as a photo grid',
      lead: 'A normal timeline shows a post, then a reply, then a link card. For photos and video there are two better ways to look: one post filling the screen, or a grid of pictures.',
      image: 'grid',
      imageAlt: 'TweeTok two-column grid of paintings on iPhone',
      sections: [
        {
          h2: 'One post per screen',
          paragraphs: [
            'In TweeTok’s full-screen view each post fills the screen, like a short-video app. Swipe up for the next post and down to go back. Videos start when they arrive, multi-image posts swipe sideways, and you can double-tap or pinch to zoom.',
            'The next posts are loaded ahead of time, so swiping stays smooth even through a long timeline.',
          ],
        },
        {
          h2: 'A two-column grid',
          paragraphs: [
            'The grid lays out posts in two columns at their own proportions, with the author under each one. It is the fastest way to scan a list of artists or photographers and pick what to look at.',
            'Tap a card and it grows to full screen from where it sits. Swipe right and it goes back to the same place, so you don’t lose your spot.',
          ],
        },
        {
          h2: 'Switch between them',
          paragraphs: ['Use the button at the top left of the timeline to switch views. The choice works for timelines, lists and profiles.'],
          steps: [
            'Open a timeline, list or profile.',
            'Tap the view button at the top left to switch to the grid.',
            'Tap a card to open it full screen; swipe right to go back to the grid.',
          ],
        },
        {
          h2: 'On Apple TV and Android',
          paragraphs: [
            'On Apple TV the grid becomes four columns sized for the big screen, and you move around it with the Siri Remote. The Android app has the same full-screen view and grid.',
          ],
        },
      ],
    },
    {
      slug: 'save-offline',
      title: 'How to save X (Twitter) posts with images for offline viewing',
      description:
        'Posts get deleted and connections drop. Save X posts with their images to your phone, read them with no connection, find them by author, and sync them with your own NAS.',
      h1: 'How to save X posts with images for offline viewing',
      lead: 'Bookmarks on X only work while the post still exists and you are online. If you want to keep a post and its pictures for a flight, or in case it gets deleted, save it to your device.',
      image: 'cache',
      imageAlt: 'TweeTok offline cache list grouped by author',
      sections: [
        {
          h2: 'Bookmarks are not a copy',
          paragraphs: [
            'An X bookmark is a link. If the author deletes the post or makes their account private, the bookmark stops working, and nothing loads without a connection.',
            'An offline copy keeps the post text, its images and its video cover on your own device.',
          ],
        },
        {
          h2: 'Save a post in TweeTok',
          paragraphs: [],
          steps: [
            'On the post you want to keep, tap More.',
            'Choose Offline Cache. The post and its media download to your device.',
            'Open Me > Offline Cache to see everything you saved, with the date each one was saved.',
          ],
        },
        {
          h2: 'Find saved posts again',
          paragraphs: [
            'Saved posts are grouped by author along the top of the list, so you can jump straight to one artist or account. On iPhone the files are also visible in the Files app under On My iPhone > TweeTok; on Android you can export them to the Download/TweeTok folder.',
          ],
        },
      ],
    },
    {
      slug: 'download-videos',
      title: 'How to download X (Twitter) videos to watch offline on iPhone and Android',
      description:
        'Save videos from X posts to your phone at the best available quality and watch them with no connection. No link copying, no downloader websites. Works on iPhone, iPad and Android.',
      h1: 'How to download X videos to watch offline',
      lead: 'Long flights, the subway, a video that might get deleted: there are plenty of reasons to keep a video on your phone. Here is how to save videos from X posts and watch them without a connection.',
      image: 'feed',
      imageAlt: 'A post playing full screen in TweeTok on iPhone',
      sections: [
        {
          h2: 'Why it’s awkward in X’s own app',
          paragraphs: [
            'X offers a download option only to some paid subscribers, and only for videos whose uploader allows downloads. For everyone else, the usual advice is to copy the post link into a downloader website, which means ads, pop-ups and a file you then have to find.',
          ],
        },
        {
          h2: 'Download a video in TweeTok',
          paragraphs: ['TweeTok saves the whole post, video included, from inside the app.'],
          steps: [
            'Open the post with the video you want to keep.',
            'Tap More, then choose Offline Cache.',
            'TweeTok downloads the video file and its cover. You can see the progress in Me > Offline Cache.',
            'Open the saved post from Offline Cache to play the video, with or without a connection.',
          ],
        },
        {
          h2: 'Which quality is saved',
          paragraphs: [
            'X offers each video in several sizes. TweeTok downloads the MP4 with the highest bitrate available for that post, so what you watch offline is the best version X provides.',
          ],
        },
        {
          h2: 'Where the files are',
          paragraphs: [
            'On iPhone and iPad the saved videos are MP4 files you can see in the Files app under On My iPhone > TweeTok, so you can also move them elsewhere. On Android you can export them from the app to the Download/TweeTok folder.',
          ],
        },
        {
          h2: 'Respect the people who made the video',
          paragraphs: [
            'Saving a video for yourself to watch later is one thing; re-uploading someone else’s work is another. Keep downloads for personal viewing and credit or ask the creator before sharing them anywhere.',
          ],
        },
      ],
    },
  ],
};

export default en;
