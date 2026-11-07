import type { Dict } from './en';

const ja: Dict = {
  meta: {
    siteName: 'TweeTok',
    homeTitle: 'TweeTok – iPhone と Apple TV で楽しむ全画面の写真・動画フィード',
    homeDescription:
      'TweeTok は、X でフォローしているアカウントの写真や動画を、1画面に1投稿の全画面表示または2列のグリッド表示で楽しめるアプリです。リスト、自動翻訳、オフラインキャッシュ、Apple TV 版にも対応しています。',
  },
  nav: {
    home: 'ホーム',
    gridView: 'グリッド表示',
    appleTv: 'Apple TV',
    offline: 'オフラインキャッシュ',
    android: 'Android ベータ版',
    pricing: '料金',
    guides: '使い方ガイド',
    faq: 'よくある質問',
    support: 'サポート',
    privacy: 'プライバシー',
    childSafety: '子どもの安全',
    language: '言語',
    menu: 'メニュー',
    skip: '本文へスキップ',
  },
  cta: {
    appStore: 'App Store からダウンロード',
    appStoreShort: 'App Store',
    appStoreNote: 'iPhone、iPad、Apple TV に無料で対応',
    android: 'Android ベータ版に参加',
    androidNote: 'ベータ期間中は Pro を無料で利用できます',
  },
  hero: {
    title: '全画面でも、グリッドでも。いつものフィードを新しい見え方で。',
    lead:
      'TweeTok は、X でフォローしているアカウントの写真や動画を、1画面に1投稿の全画面表示か、数秒で見渡せる2列のグリッド表示で楽しめます。切り替えはワンタップです。',
    toggleToFull: '全画面で表示',
    toggleToGrid: 'グリッドで表示',
    demoCaption: 'ボタンをタップすると表示が切り替わります。アプリでの操作と同じです。',
    platforms: 'iPhone、iPad、Apple TV に対応。Android はベータ版を公開中です。',
  },
  wall: {
    title: 'TweeTok でできること',
    intro: '以下の画面はすべて実際のアプリのものです。それぞれの機能の内容と、対応しているデバイスを記載しています。',
    free: '無料',
    pro: 'Pro',
    more: '詳しく見る',
    items: {
      feed: {
        title: '1画面に1投稿',
        body: 'ショート動画アプリのように、上下にスワイプして投稿を移動します。動画は表示と同時に再生され、複数の画像は左右にスワイプ。次の投稿はあらかじめ読み込まれています。',
        where: 'iPhone、iPad、Apple TV、Android',
      },
      grid: {
        title: '2列のグリッド表示',
        body: 'タイムライン全体をひと目で見渡せます。カードをタップするとその場所から全画面に広がり、右にスワイプすると元の位置に戻ります。',
        where: 'iPhone、iPad、Apple TV、Android',
      },
      lists: {
        title: 'タイムラインとリスト',
        body: 'おすすめ、フォロー中、いいね、ブックマーク、そして作成またはフォローしているすべてのリストにワンタップで移動できます。それぞれの閲覧位置も記憶します。',
        where: 'iPhone、iPad、Apple TV、Android',
      },
      filter: {
        title: 'フィルタ',
        body: 'テキストのみの投稿やリポストを非表示にして、写真と動画だけのフィードにできます。Pro では既読の投稿の非表示や、タイムラインごとのフィルタの記憶にも対応します。',
        where: 'iPhone、iPad、Apple TV、Android',
      },
      cache: {
        title: 'オフラインキャッシュ',
        body: '投稿と画像を端末に保存して、機内や通信環境が悪い場所でも閲覧できます。保存した投稿は投稿者ごとに絞り込めます。',
        where: 'iPhone、iPad、Android',
      },
      tv: {
        title: 'Apple TV',
        body: 'iPhone でコードをスキャンするだけで、アカウントが TV に追加されます。1件ずつ全画面で見ることも、グリッド表示に切り替えて Siri Remote で見たい投稿を選ぶこともできます。',
        where: 'Apple TV',
      },
    },
  },
  extras: {
    title: '毎日使う機能もそろっています',
    items: [
      { title: '自動翻訳', body: '外国語の投稿はその場で翻訳して表示されるので、1件ずつ開く必要はありません。' },
      { title: 'いいね、返信、ブックマーク', body: 'いいね、ブックマーク、リポスト、引用、返信をアプリ内で完結できます。ダブルタップでいいねできます。' },
      { title: 'リストに追加', body: '投稿から、その投稿者をワンタップで自分のリストに追加できます。' },
      { title: '5つの言語に対応', body: 'English、日本語、한국어、繁體中文、简体中文に対応しています。' },
    ],
  },
  privacy: {
    title: 'ログイン情報は端末の中だけに',
    items: [
      'ログインは X の公式ウェブページで行います。TweeTok がパスワードを目にすることはありません。',
      'ログイン情報は暗号化され、iOS のキーチェーンまたは Android の安全な保存領域に、端末の中だけで保管されます。サーバーへアップロードされることはありません。',
      'いつでもログアウトして、アカウントとそのデータを端末から削除できます。',
    ],
    link: 'プライバシーポリシーを読む',
  },
  pricing: {
    title: '基本無料。Pro は買い切りです。',
    lead: '1回の購入で、今後の Pro 機能アップデートもすべて含まれます。サブスクリプションはありません。',
    freeName: '無料',
    freePrice: '¥0',
    proName: 'Pro',
    proPrice: '{price}',
    proPriceUnit: '買い切り',
    featureColumn: '機能',
    included: '利用可能',
    notIncluded: '利用不可',
    rows: [
      { feature: '全画面表示とグリッド表示', free: 'yes', pro: 'yes' },
      { feature: 'タイムラインとリスト', free: 'yes', pro: 'yes' },
      { feature: '自動翻訳', free: 'yes', pro: 'yes' },
      { feature: 'いいね、返信、ブックマーク', free: 'yes', pro: 'yes' },
      { feature: 'テキストのみの投稿とリポストを非表示', free: 'yes', pro: 'yes' },
      { feature: 'オフラインキャッシュ', free: '最大 {limit} 件', pro: '無制限' },
      { feature: '既読の投稿を非表示、タイムラインごとにフィルタを記憶', free: 'no', pro: 'yes' },
      { feature: '複数アカウント', free: 'no', pro: 'yes' },
      { feature: 'Apple TV とのペアリング', free: 'no', pro: 'yes' },
      { feature: '自分の NAS や WebDAV でのクラウド同期', free: 'no', pro: 'yes' },
    ],
    price: '¥1,500',
    priceNote: '日本の App Store での価格です。購入前に、お住まいの地域の価格が App Store に表示されます。iOS と Android の購入は別々です。',
  },
  faq: {
    title: 'よくある質問',
    items: [
      {
        q: 'TweeTok は X の公式アプリですか？',
        a: 'いいえ。TweeTok は個人の開発者が開発している独立したアプリで、X Corp. とは一切関係がなく、同社による承認や後援も受けていません。ご利用にはご自身の X アカウントが必要です。',
      },
      {
        q: 'TweeTok は無料ですか？',
        a: 'はい。閲覧、2つの表示モード、タイムライン、リスト、自動翻訳は無料で使えます。Pro は買い切りの購入で、オフラインキャッシュ無制限、Apple TV、高度なフィルタ、複数アカウント、クラウド同期が追加されます。',
      },
      {
        q: 'TweeTok にパスワードが知られることはありますか？',
        a: 'いいえ。ログインはアプリ内に表示される X の公式ウェブページで行います。TweeTok はログイン後の認証情報だけを暗号化して端末に保存し、サーバーへ送信することはありません。',
      },
      {
        q: 'どのデバイスで使えますか？',
        a: 'iPhone、iPad、Apple TV で、App Store から入手できます。Android アプリは Google Play でベータ版を公開しており、どなたでも参加できます。',
      },
      {
        q: 'Apple TV で使うには Pro をもう一度購入する必要がありますか？',
        a: 'いいえ。Apple TV アプリは無料でダウンロードできます。iPhone とのペアリングには、iPhone 側で Pro が必要です。',
      },
      {
        q: 'iPhone で購入すると Android でも Pro が使えますか？',
        a: 'いいえ。App Store と Google Play の購入は別々に管理されるため、Pro は購入したプラットフォームでのみ有効になります。',
      },
    ],
  },
  finalCta: {
    title: 'フィードを、本来あるべき見え方で。',
    body: 'TweeTok は無料でダウンロードできます。もっと使いたくなったら Pro をどうぞ。',
  },
  footer: {
    disclaimer:
      'TweeTok は独立して開発されたサードパーティ製ビューアであり、X Corp. とは一切関係がなく、同社による承認、後援、認可を受けていません。アプリに表示されるすべてのコンテンツは X に由来し、その権利は各投稿者に帰属します。',
    contact: 'お問い合わせ',
    madeBy: '個人の開発者が制作しています。',
  },
  pages: {
    gridView: {
      title: 'グリッド表示 – タイムライン全体をひと目で | TweeTok',
      description:
        '全画面表示と2列のグリッド表示をワンタップで切り替え。カードを開くとその場所から全画面に広がり、右にスワイプすると元の位置に戻ります。タイムライン、リスト、プロフィールで使えます。',
      h1: 'グリッド表示',
      lead: '全画面はじっくり見るため、グリッドは選ぶため。TweeTok なら、閲覧位置を失わずにワンタップで切り替えられます。',
      sections: [
        {
          title: '2列で、すべての画像を',
          body: 'グリッドでは投稿を元の縦横比のまま2列に並べ、それぞれの下に投稿者といいね数を表示します。動画には再生マークが付くので、開く前に動画かどうかがわかります。',
        },
        {
          title: 'その場で開いて、その場で閉じる',
          body: 'カードをタップすると、その位置から全画面に広がります。右にスワイプすると、同じ場所に戻ります。グリッドでの位置はそのままなので、次々に投稿を開けます。',
        },
        {
          title: 'タイムライン、リスト、プロフィールで',
          body: 'グリッド表示は、タイムライン、リスト、ユーザープロフィールなど、閲覧するすべての場所で使えます。Apple TV では大画面に合わせた4列のグリッドになります。',
        },
      ],
    },
    appleTv: {
      title: 'TweeTok for Apple TV – 写真と動画を大画面で',
      description:
        'iPhone でコードをスキャンするだけで Apple TV にログインできます。タイムラインやリストを、Siri Remote で全画面表示またはグリッド表示で楽しめます。',
      h1: 'Apple TV で TweeTok',
      lead: '写真や動画は大きな画面で見るほど映えます。TweeTok for Apple TV なら、タイムラインやリストを1件ずつ TV で楽しめます。',
      sections: [
        {
          title: 'コードをスキャンしてログイン',
          body: 'リモコンで文字を入力する必要はありません。Apple TV で TweeTok を開き、iPhone でコードをスキャンすると、アカウントが TV に表示されます。',
        },
        {
          title: 'Siri Remote に最適化',
          body: '全画面ではスワイプで投稿を移動し、グリッド表示ではリモコンで自由に選べます。タイムラインやリストはサイドメニューから開きます。',
        },
        {
          title: '設定はそのまま引き継ぎ',
          body: '既読履歴とクラウドライブラリの設定は iPhone から引き継がれるので、TV で設定する必要はありません。',
        },
      ],
      requirement: 'Apple TV アプリは無料でダウンロードできます。ペアリングには iPhone 側で TweeTok Pro が必要です。',
    },
    offline: {
      title: 'オフラインキャッシュ – 写真や動画の投稿を端末に保存 | TweeTok',
      description:
        '投稿と画像を iPhone や Android スマートフォンに保存して、通信なしで閲覧できます。投稿者ごとの絞り込みに対応。自分の NAS や WebDAV でライブラリを同期することもできます。',
      h1: 'オフラインキャッシュ',
      lead: '投稿は削除されることがあり、通信は途切れることがあります。大切な投稿を保存して、どこでも閲覧しましょう。',
      sections: [
        {
          title: '投稿をメディアごと保存',
          body: '投稿のメニューから保存できます。投稿、画像、動画のカバー画像が端末に保存され、一覧には保存した内容と日時が表示されます。',
        },
        {
          title: '投稿者で探す',
          body: '保存した投稿は画面上部で投稿者ごとにまとめられるので、特定のアーティストやアカウントにすぐ移動できます。',
        },
        {
          title: '自分のストレージと同期',
          body: 'Pro では、自分の NAS や WebDAV 対応ストレージを使って、保存した投稿と既読履歴をデバイス間で同期できます。TweeTok のサーバーを経由することはありません。',
        },
      ],
      requirement: '無料版では最大 {limit} 件まで保存できます。Pro では上限がなくなります。',
    },
    androidBeta: {
      title: 'TweeTok for Android – ベータ版に参加',
      description:
        'TweeTok for Android は Google Play でベータ版を公開しています。3つのステップで参加でき、ベータ期間中は Pro のすべての機能を無料で利用できます。',
      h1: 'TweeTok for Android ベータ版',
      lead: 'Android アプリは、一般公開に向けて Google Play でテスト中です。今参加すると、ベータ期間中は Pro のすべての機能を無料で使えます。',
      stepsTitle: '3つのステップで参加',
      steps: [
        { title: 'Google グループに参加', body: 'Google アカウントでログインし、テスターグループに参加します。', action: 'グループを開く' },
        { title: 'テスターになる', body: '同じ Google アカウントでテストページを開き、「テスターになる」をタップします。', action: 'テストページを開く' },
        { title: 'Google Play からインストール', body: 'Google Play から TweeTok をインストールし、X でログインして閲覧を始めます。', action: 'Google Play を開く' },
      ],
      freeTitle: 'ベータ期間中は無料',
      freeItems: ['オフラインキャッシュ無制限', '高度なフィルタ', 'WebDAV でのクラウド同期', '複数アカウント'],
      requirements: 'Android 12 以降、Google Play、X アカウントが必要です。また、18歳以上である必要があります。',
      sameAccount: '3つのステップはすべて同じ Google アカウントで行ってください。異なるアカウントだと Google Play にアプリが表示されません。',
    },
  },
  notFound: {
    title: 'ページが見つかりません',
    body: 'このページは存在しません。移動した可能性があります。',
    back: 'ホームページへ戻る',
  },
};

export default ja;
