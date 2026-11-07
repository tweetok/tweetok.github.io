import type { Dict } from './en';

const zhHans: Dict = {
  meta: {
    siteName: 'TweeTok',
    homeTitle: 'TweeTok – 全屏沉浸的图片视频浏览，支持 iPhone 和 Apple TV',
    homeDescription:
      'TweeTok 把你在 X 上关注的图片和视频，以一屏一条的全屏方式或双列瀑布流展示。支持时间线与列表、自动翻译、离线缓存，还有 Apple TV 版。',
  },
  nav: {
    home: '首页',
    gridView: '瀑布流',
    appleTv: 'Apple TV',
    offline: '离线缓存',
    android: 'Android 内测',
    pricing: '价格',
    guides: '使用指南',
    faq: '常见问题',
    support: '支持',
    privacy: '隐私',
    childSafety: '儿童安全',
    language: '语言',
    menu: '菜单',
    skip: '跳到正文',
  },
  cta: {
    appStore: '在 App Store 下载',
    appStoreShort: 'App Store',
    appStoreNote: '免费，支持 iPhone、iPad 和 Apple TV',
    android: '加入 Android 内测',
    androidNote: '内测期间 Pro 功能全部免费',
  },
  hero: {
    title: '全屏，或者瀑布流。换个方式看你关注的内容。',
    lead: 'TweeTok 把你在 X 上关注的图片和视频一屏一条地展示，也可以排成双列瀑布流，几秒就能扫完一屏。点一下就能切换。',
    toggleToFull: '切到全屏',
    toggleToGrid: '切到瀑布流',
    demoCaption: '点按钮切换视图，和 App 里的操作一样。',
    platforms: '支持 iPhone、iPad 和 Apple TV，Android 版正在内测。',
  },
  wall: {
    title: '墙上展出的功能',
    intro: '下面每一屏都是 App 的真实界面，旁边的标签写着它能做什么、在哪些设备上可用。',
    free: '免费',
    pro: 'Pro',
    more: '了解更多',
    items: {
      feed: {
        title: '一屏一条',
        body: '像刷短视频一样上下滑动切换。视频进入画面自动播放，多图左右横滑，后面的内容已经提前加载好。',
        where: 'iPhone、iPad、Apple TV、Android',
      },
      grid: {
        title: '双列瀑布流',
        body: '一眼扫完整条时间线。点开卡片，内容从原位放大到全屏；右滑一下，又缩回原来的位置。',
        where: 'iPhone、iPad、Apple TV、Android',
      },
      lists: {
        title: '时间线与列表',
        body: '为你推荐、关注、喜欢、书签，以及你创建或订阅的每个列表，点一下就能切换，并记住每条时间线上次看到的位置。',
        where: 'iPhone、iPad、Apple TV、Android',
      },
      filter: {
        title: '过滤',
        body: '隐藏纯文字推文和转推，只留下图片和视频。Pro 还能隐藏已读推文，并为每条时间线单独记住过滤设置。',
        where: 'iPhone、iPad、Apple TV、Android',
      },
      cache: {
        title: '离线缓存',
        body: '把推文和图片保存到本地，在飞机上或信号差的地方也能翻看。缓存列表可以按作者筛选。',
        where: 'iPhone、iPad、Android',
      },
      tv: {
        title: 'Apple TV',
        body: '用 iPhone 扫个码，账号就同步到电视上。可以一屏一条地看，也可以切到网格，用 Siri 遥控器挑想看的推文。',
        where: 'Apple TV',
      },
    },
  },
  extras: {
    title: '还有这些日常功能',
    items: [
      { title: '自动翻译', body: '外语推文直接在原处翻译，不用逐条点开。' },
      { title: '点赞、回复和书签', body: '点赞、书签、转推、引用和回复都在 App 内完成，双击即可点赞。' },
      { title: '加入列表', body: '在推文上一键把作者加入你的列表。' },
      { title: '五种语言', body: '支持 English、日本語、한국어、繁體中文和简体中文。' },
    ],
  },
  privacy: {
    title: '登录信息只留在你的设备上',
    items: [
      '登录在 X 的官方网页中完成，TweeTok 不会接触你的密码。',
      '登录凭据经过加密，只保存在你设备的 iOS 钥匙串或 Android 安全存储中，不会上传到任何服务器。',
      '随时可以退出登录，从设备上删除该账号及其数据。',
    ],
    link: '查看隐私政策',
  },
  pricing: {
    title: '免费使用，Pro 一次买断。',
    lead: '一次购买，后续 Pro 功能更新都包含在内，不是订阅。',
    freeName: '免费版',
    freePrice: '¥0',
    proName: 'Pro',
    proPrice: '{price}',
    proPriceUnit: '一次买断',
    featureColumn: '功能',
    included: '包含',
    notIncluded: '不包含',
    rows: [
      { feature: '全屏与瀑布流两种视图', free: 'yes', pro: 'yes' },
      { feature: '时间线与列表', free: 'yes', pro: 'yes' },
      { feature: '自动翻译', free: 'yes', pro: 'yes' },
      { feature: '点赞、回复和书签', free: 'yes', pro: 'yes' },
      { feature: '隐藏纯文字推文和转推', free: 'yes', pro: 'yes' },
      { feature: '离线缓存', free: '最多 {limit} 条', pro: '不限量' },
      { feature: '隐藏已读推文，每条时间线单独记忆过滤设置', free: 'no', pro: 'yes' },
      { feature: '多账号', free: 'no', pro: 'yes' },
      { feature: '配对 Apple TV', free: 'no', pro: 'yes' },
      { feature: '用你自己的 NAS 或 WebDAV 云端同步', free: 'no', pro: 'yes' },
    ],
    price: '¥68',
    priceNote: '中国区 App Store 价格。购买前 App Store 会显示你所在地区的价格。iOS 与 Android 的购买相互独立。',
  },
  faq: {
    title: '常见问题',
    items: [
      {
        q: 'TweeTok 是 X 官方的 App 吗？',
        a: '不是。TweeTok 由独立开发者制作，与 X Corp. 没有关联，也未获其认可或赞助。使用时需要你自己的 X 账号。',
      },
      {
        q: 'TweeTok 免费吗？',
        a: '免费。浏览、两种视图、时间线、列表和翻译都不收费。Pro 是一次买断，增加不限量离线缓存、Apple TV、高级过滤、多账号和云端同步。',
      },
      {
        q: 'TweeTok 会看到我的密码吗？',
        a: '不会。你是在 App 里打开的 X 官方网页上登录的。TweeTok 只把登录后的凭据加密保存在你的设备上，不会发送到任何服务器。',
      },
      {
        q: '支持哪些设备？',
        a: 'iPhone、iPad 和 Apple TV 可在 App Store 下载。Android 版正在 Google Play 上内测，任何人都可以加入。',
      },
      {
        q: 'Apple TV 需要再买一次 Pro 吗？',
        a: '不需要。Apple TV 版免费下载，和 iPhone 配对需要 iPhone 上已解锁 Pro。',
      },
      {
        q: '在 iPhone 上买了 Pro，Android 上能用吗？',
        a: '不能。App Store 和 Google Play 的购买是分开的，Pro 只在购买的平台上解锁。',
      },
    ],
  },
  finalCta: {
    title: '换一种方式，好好看你关注的内容。',
    body: '免费下载 TweeTok，想要更多时再升级 Pro。',
  },
  footer: {
    disclaimer:
      'TweeTok 是独立开发的第三方浏览工具，与 X Corp. 无任何关联，未获其认可、赞助或授权。App 中展示的所有内容均来自 X，版权归各自作者所有。',
    contact: '联系我们',
    madeBy: '由独立开发者制作。',
  },
  pages: {
    gridView: {
      title: '瀑布流 – 一眼看完整条时间线 | TweeTok',
      description:
        '全屏和双列瀑布流一键切换。点开卡片原位放大，右滑缩回原处。时间线、列表和用户主页都能用。',
      h1: '瀑布流',
      lead: '全屏适合细看，瀑布流适合挑选。在 TweeTok 里点一下就能切换，而且不会丢掉你看到的位置。',
      sections: [
        {
          title: '两列排开，每张图都看得到',
          body: '瀑布流按原始比例把推文排成两列，每张卡片下面有作者和点赞数。视频卡片带播放标记，打开之前就知道哪些会动。',
        },
        {
          title: '原位打开，原位收回',
          body: '点一下卡片，它会从原来的位置放大到全屏。右滑一下，又缩回同一个位置。你在瀑布流里的位置不会变，可以一条接一条地看下去。',
        },
        {
          title: '时间线、列表、主页都能用',
          body: '你浏览的每个地方都支持瀑布流：时间线、列表，以及任何人的主页。在 Apple TV 上会变成适合大屏的四列网格。',
        },
      ],
    },
    appleTv: {
      title: 'TweeTok Apple TV 版 – 在大屏上看图片和视频',
      description: '用 iPhone 扫码即可在 Apple TV 上登录。用 Siri 遥控器以全屏或网格浏览你的时间线和列表。',
      h1: 'Apple TV 上的 TweeTok',
      lead: '图片和视频在大屏上更好看。TweeTok Apple TV 版把你的时间线和列表搬到电视上，一屏一条。',
      sections: [
        {
          title: '扫码登录',
          body: '不用拿遥控器打字。在 Apple TV 上打开 TweeTok，用 iPhone 扫码，账号就出现在电视上了。',
        },
        {
          title: '为 Siri 遥控器设计',
          body: '全屏时滑动逐条切换，切到网格后用遥控器自由移动。时间线和列表从侧边菜单打开。',
        },
        {
          title: '设置跟着过来',
          body: '已读记录和云端资料库的设置会从 iPhone 同步过来，在电视上什么都不用配置。',
        },
      ],
      requirement: 'Apple TV 版免费下载，配对需要在 iPhone 上解锁 TweeTok Pro。',
    },
    offline: {
      title: '离线缓存 – 把图片推文保存到本地 | TweeTok',
      description: '把推文和图片保存到 iPhone 或 Android 手机上，没有网络也能看。可按作者筛选，还能用自己的 NAS 或 WebDAV 同步。',
      h1: '离线缓存',
      lead: '推文会被删，网络会断。把在意的推文存下来，在哪儿都能看。',
      sections: [
        {
          title: '连同图片一起保存',
          body: '在推文的“更多”菜单里选“离线缓存”。推文、图片和视频封面都会存到本地，列表里能看到保存了什么、什么时候存的。',
        },
        {
          title: '按作者再找回来',
          body: '缓存的推文在顶部按作者分组，可以直接跳到某个画师或账号。',
        },
        {
          title: '用你自己的存储同步',
          body: '有了 Pro，可以通过你自己的 NAS 或任何 WebDAV 存储，在设备间同步缓存和已读记录。数据不经过 TweeTok 的服务器。',
        },
      ],
      requirement: '免费版最多保存 {limit} 条，Pro 不限量。',
    },
    androidBeta: {
      title: 'TweeTok Android 版 – 加入内测',
      description: 'TweeTok Android 版正在 Google Play 上内测，三步即可加入。内测期间所有 Pro 功能免费。',
      h1: 'TweeTok Android 内测',
      lead: 'Android 版正式上架前，正在 Google Play 上测试。现在加入，内测期间所有 Pro 功能都免费。',
      stepsTitle: '三步加入',
      steps: [
        { title: '加入 Google 群组', body: '用你的 Google 账号登录，加入测试群组。', action: '打开群组' },
        { title: '成为测试人员', body: '用同一个 Google 账号打开测试页面，点“成为测试人员”。', action: '打开测试页面' },
        { title: '从 Google Play 安装', body: '从 Google Play 安装 TweeTok，登录 X 就可以开始刷了。', action: '打开 Google Play' },
      ],
      freeTitle: '内测期免费解锁',
      freeItems: ['不限量离线缓存', '高级过滤', 'WebDAV 云端同步', '多账号'],
      requirements: '需要 Android 12 或更高版本、Google Play、X 账号，且年满 18 周岁。',
      sameAccount: '三步都要用同一个 Google 账号，否则 Google Play 里找不到这个 App。',
    },
  },
  notFound: {
    title: '页面不存在',
    body: '这个页面不存在，可能已经移走了。',
    back: '回到首页',
  },
};

export default zhHans;
