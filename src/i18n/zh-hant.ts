import type { Dict } from './en';

const zhHant: Dict = {
  meta: {
    siteName: 'TweeTok',
    homeTitle: 'TweeTok – iPhone 與 Apple TV 上的全螢幕圖片與影片動態',
    homeDescription:
      'TweeTok 把你在 X 上關注的帳號發布的圖片和影片，以全螢幕一次一則或雙欄瀑布流呈現。支援時間軸與列表、翻譯、離線快取，還有 Apple TV 版。',
  },
  nav: {
    home: '首頁',
    gridView: '瀑布流模式',
    appleTv: 'Apple TV',
    offline: '離線快取',
    android: 'Android 測試版',
    pricing: '價格',
    guides: '使用指南',
    faq: '常見問題',
    support: '支援',
    privacy: '隱私權',
    childSafety: '兒童安全',
    language: '語言',
    menu: '選單',
    skip: '跳至主要內容',
  },
  cta: {
    appStore: '在 App Store 下載',
    appStoreShort: 'App Store',
    appStoreNote: 'iPhone、iPad 和 Apple TV 皆可免費下載',
    android: '加入 Android 測試版',
    androidNote: '測試期間 Pro 免費',
  },
  hero: {
    title: '全螢幕，或瀑布流。你的動態，換個方式看。',
    lead:
      'TweeTok 把你在 X 上關注的帳號發布的圖片和影片，以全螢幕一次一則呈現，或排成雙欄瀑布流，幾秒就能掃過一輪。點一下即可切換。',
    toggleToFull: '切換到全螢幕',
    toggleToGrid: '切換到瀑布流',
    demoCaption: '點按鈕切換瀏覽模式，和在 App 裡的操作一樣。',
    platforms: '支援 iPhone、iPad 和 Apple TV，Android 版測試中。',
  },
  wall: {
    title: '功能一覽',
    intro: '下方每個畫面都是 App 的實際畫面，標籤會說明每項功能的用途和適用平台。',
    free: '免費',
    pro: 'Pro',
    more: '了解更多',
    items: {
      feed: {
        title: '一個畫面一則推文',
        body: '像短影音 App 一樣上下滑動切換推文。影片一出現就自動播放，多圖推文可以左右滑動，後面的推文也已預先載入。',
        where: 'iPhone、iPad、Apple TV、Android',
      },
      grid: {
        title: '雙欄瀑布流',
        body: '一眼掃過整條時間軸。點一下卡片，它會從原位放大到全螢幕；向右滑動即可縮回。',
        where: 'iPhone、iPad、Apple TV、Android',
      },
      lists: {
        title: '時間軸與列表',
        body: '為你推薦、正在關注、喜歡、書籤，以及你建立或關注的每個列表，點一下就能切換。TweeTok 會記住你在每個時間軸和列表看到哪裡。',
        where: 'iPhone、iPad、Apple TV、Android',
      },
      filter: {
        title: '過濾',
        body: '隱藏純文字推文和轉推，讓動態只剩圖片和影片。Pro 還能隱藏已讀推文，並為每條時間軸分別記住過濾設定。',
        where: 'iPhone、iPad、Apple TV、Android',
      },
      cache: {
        title: '離線快取',
        body: '把推文和圖片存到裝置上，搭飛機或網路不穩時也能看。已儲存的內容可以按作者查看。',
        where: 'iPhone、iPad、Android',
      },
      tv: {
        title: 'Apple TV',
        body: '用 iPhone 掃碼，帳號就會同步到電視上。可以一則一則全螢幕觀看，也能切換成網格，用 Siri Remote 挑選想看的推文。',
        where: 'Apple TV',
      },
    },
  },
  extras: {
    title: '還有這些日常功能',
    items: [
      { title: '翻譯', body: '其他語言的推文直接在原處翻譯，不必一則一則點開。' },
      { title: '喜歡、回覆與書籤', body: '不用離開 App 就能喜歡、加入書籤、轉推、引用和回覆。點兩下即可喜歡。' },
      { title: '加入清單', body: '在推文上點一下，就能把作者加入你的清單。' },
      { title: '五種語言', body: '支援 English、日本語、한국어、繁體中文和简体中文。' },
    ],
  },
  privacy: {
    title: '登入資訊只留在你的裝置上',
    items: [
      '你是在 X 官方網頁上登入，TweeTok 不會看到你的密碼。',
      '登入資訊經過加密，只存放在你裝置上的 iOS 鑰匙圈或 Android 安全儲存區，不會上傳到任何伺服器。',
      '你可以隨時登出，從裝置上移除該帳號及其資料。',
    ],
    link: '閱讀隱私權政策',
  },
  pricing: {
    title: '免費使用，Pro 一次買斷。',
    lead: '一次購買，之後所有 Pro 功能更新都包含在內，不需訂閱。',
    freeName: '免費版',
    freePrice: 'NT$0',
    proName: 'Pro',
    proPrice: '{price}',
    proPriceUnit: '一次買斷',
    featureColumn: '功能',
    included: '包含',
    notIncluded: '不包含',
    rows: [
      { feature: '全螢幕與瀑布流模式', free: 'yes', pro: 'yes' },
      { feature: '時間軸與列表', free: 'yes', pro: 'yes' },
      { feature: '自動翻譯', free: 'yes', pro: 'yes' },
      { feature: '喜歡、回覆與書籤', free: 'yes', pro: 'yes' },
      { feature: '隱藏純文字推文和轉推', free: 'yes', pro: 'yes' },
      { feature: '離線快取', free: '最多 {limit} 則', pro: '不限量' },
      { feature: '隱藏已讀推文，每條時間軸單獨記憶篩選設定', free: 'no', pro: 'yes' },
      { feature: '多帳號', free: 'no', pro: 'yes' },
      { feature: 'Apple TV 配對', free: 'no', pro: 'yes' },
      { feature: '用你自己的 NAS 或 WebDAV 雲端同步', free: 'no', pro: 'yes' },
    ],
    price: 'NT$320',
    priceNote: '此為台灣 App Store 售價（香港為 HK$88）。購買前，App Store 會顯示你所在地區的價格。iOS 與 Android 的購買彼此獨立。',
  },
  faq: {
    title: '常見問題',
    items: [
      {
        q: 'TweeTok 是 X 官方的 App 嗎？',
        a: '不是。TweeTok 是由獨立開發者製作的 App，與 X Corp. 沒有關聯，也未獲其背書或贊助。使用時需要你自己的 X 帳號。',
      },
      {
        q: 'TweeTok 免費嗎？',
        a: '是的。瀏覽、兩種瀏覽模式、時間軸、列表和翻譯都免費。Pro 是一次性購買，提供不限量離線快取、Apple TV、進階篩選、多帳號和雲端同步。',
      },
      {
        q: 'TweeTok 會看到我的密碼嗎？',
        a: '不會。你是在 App 內開啟的 X 官方網頁上登入。TweeTok 只會把登入後取得的資訊加密存放在你的裝置上，不會傳送到任何伺服器。',
      },
      {
        q: '可以在哪些裝置上使用？',
        a: 'iPhone、iPad 和 Apple TV，可從 App Store 下載。Android 版正在 Google Play 上測試，任何人都能加入。',
      },
      {
        q: 'Apple TV 需要再買一次 Pro 嗎？',
        a: '不需要。Apple TV App 可免費下載，與 iPhone 配對時，iPhone 上需要有 Pro。',
      },
      {
        q: '在 iPhone 上購買後，Android 也會解鎖 Pro 嗎？',
        a: '不會。App Store 和 Google Play 的購買各自獨立，Pro 只會在你購買的平台上解鎖。',
      },
    ],
  },
  finalCta: {
    title: '用更適合的方式，看你的動態。',
    body: '免費下載 TweeTok，想要更多時再升級 Pro。',
  },
  footer: {
    disclaimer:
      'TweeTok 是獨立開發的第三方瀏覽工具，與 X Corp. 沒有任何關聯，也未獲其背書、贊助或授權。App 中顯示的所有內容均來自 X，並歸各自的作者所有。',
    contact: '聯絡我們',
    madeBy: '由獨立開發者製作。',
  },
  pages: {
    gridView: {
      title: '瀑布流模式 – 一眼掃過整條時間軸 | TweeTok',
      description:
        '點一下就能在全螢幕與雙欄瀑布流之間切換。點開卡片會在原位放大，向右滑動就放回原處。時間軸、列表和個人檔案都能使用。',
      h1: '瀑布流模式',
      lead: '全螢幕適合細看，瀑布流適合挑選。TweeTok 讓你點一下就在兩者之間切換，不會失去目前的位置。',
      sections: [
        {
          title: '兩欄排列，每張圖都看得到',
          body: '瀑布流把推文依原始比例排成兩欄，每則下方顯示作者和喜歡數。影片會標示播放圖示，點開前就知道哪些是影片。',
        },
        {
          title: '原位打開，原位收起',
          body: '點一下卡片，它會從原來的位置放大到全螢幕；向右滑動，它就縮回同一個位置。你在瀑布流中的位置不變，可以一則接一則地點開。',
        },
        {
          title: '時間軸、列表和個人檔案都能用',
          body: '凡是瀏覽的地方都能使用瀑布流：你的時間軸、你的列表，以及任何人的個人檔案。在 Apple TV 上會變成適合大螢幕的四欄網格。',
        },
      ],
    },
    appleTv: {
      title: 'Apple TV 版 TweeTok – 在大螢幕上瀏覽圖片和影片',
      description:
        'Apple TV 版 TweeTok 只要用 iPhone 掃碼就能登入，不必用遙控器打字。再用 Siri Remote 以全螢幕或網格瀏覽你的時間軸和列表。',
      h1: 'Apple TV 上的 TweeTok',
      lead: '圖片和影片在大螢幕上更好看。Apple TV 版 TweeTok 把你的時間軸和列表搬上電視，一次一則。',
      sections: [
        {
          title: '掃碼登入',
          body: '不必用遙控器打字。在 Apple TV 上開啟 TweeTok，用 iPhone 掃描畫面上的 QR 碼，你的帳號就會出現在電視上。',
        },
        {
          title: '為 Siri Remote 設計',
          body: '全螢幕時滑動即可切換推文，切換成網格後可用遙控器自由移動。時間軸和列表從側邊選單開啟。',
        },
        {
          title: '設定跟著你走',
          body: '已讀記錄和雲端資料庫設定會從 iPhone 帶過來，電視上不需要另外設定。',
        },
      ],
      requirement: 'Apple TV App 可免費下載。配對需要 iPhone 上的 TweeTok Pro。',
    },
    offline: {
      title: '離線快取 – 把圖片和影片推文存在裝置上 | TweeTok',
      description:
        '把推文和圖片存到 iPhone 或 Android 手機上，沒有網路也能看。可以按作者查看，還能透過你自己的 NAS 或 WebDAV 同步資料庫。',
      h1: '離線快取',
      lead: '推文可能被刪除，網路也可能斷線。把在意的推文存起來，到哪裡都能看。',
      sections: [
        {
          title: '連同媒體一起儲存',
          body: '在推文的「更多」選單中選擇「離線快取」即可儲存。推文、圖片和影片封面都會存在你的裝置上，列表中會顯示儲存了什麼、何時儲存。',
        },
        {
          title: '按作者找回',
          body: '已儲存的推文會按作者排列在頂端，可以直接跳到某位創作者或某個帳號。',
        },
        {
          title: '與你自己的儲存空間同步',
          body: '有了 Pro，就能透過你自己的 NAS 或任何 WebDAV 儲存空間，在裝置之間同步已儲存的推文和已讀記錄。資料不會經過 TweeTok 的伺服器。',
        },
      ],
      requirement: '免費版最多儲存 {limit} 則推文，Pro 不限數量。',
    },
    androidBeta: {
      title: 'Android 版 TweeTok – 加入測試',
      description:
        'Android 版 TweeTok 正在 Google Play 上測試，只要三個步驟就能加入。測試期間，所有 Pro 功能都可以免費使用。',
      h1: 'TweeTok Android 測試版',
      lead: 'Android 版在正式上架前，正在 Google Play 上進行測試。現在加入，測試期間所有 Pro 功能都免費。',
      stepsTitle: '三個步驟加入',
      steps: [
        { title: '加入 Google 群組', body: '用你的 Google 帳號登入，加入測試人員群組。', action: '開啟群組' },
        { title: '成為測試人員', body: '用同一個 Google 帳號開啟測試頁面，點選「成為測試人員」。', action: '開啟測試頁面' },
        { title: '從 Google Play 安裝', body: '從 Google Play 安裝 TweeTok，用 X 帳號登入後即可開始瀏覽。', action: '開啟 Google Play' },
      ],
      freeTitle: '測試期間免費',
      freeItems: ['不限量離線快取', '進階篩選', 'WebDAV 雲端同步', '多帳號'],
      requirements: '需要 Android 12 以上版本、Google Play 和 X 帳號，且須年滿 18 歲。',
      sameAccount: '三個步驟請使用同一個 Google 帳號，否則 Google Play 不會顯示這個 App。',
    },
  },
  notFound: {
    title: '找不到頁面',
    body: '這個頁面不存在，可能已經移動。',
    back: '回到首頁',
  },
};

export default zhHant;
