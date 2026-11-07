import type { Dict } from './en';

const ko: Dict = {
  meta: {
    siteName: 'TweeTok',
    homeTitle: 'TweeTok – iPhone과 Apple TV를 위한 전체 화면 사진·동영상 피드',
    homeDescription:
      'TweeTok은 X에서 팔로우하는 계정의 사진과 동영상을 한 화면에 하나씩, 또는 2열 그리드로 보여 줍니다. 리스트, 번역, 오프라인 캐시, Apple TV 앱을 지원합니다.',
  },
  nav: {
    home: '홈',
    gridView: '그리드 보기',
    appleTv: 'Apple TV',
    offline: '오프라인 캐시',
    android: 'Android 베타',
    pricing: '가격',
    faq: '자주 묻는 질문',
    support: '지원',
    privacy: '개인정보 처리방침',
    childSafety: '아동 안전',
    language: '언어',
    menu: '메뉴',
    skip: '본문으로 건너뛰기',
  },
  cta: {
    appStore: 'App Store에서 다운로드',
    appStoreShort: 'App Store',
    appStoreNote: 'iPhone, iPad, Apple TV에서 무료',
    android: 'Android 베타 참여하기',
    androidNote: '베타 기간에는 Pro가 무료입니다',
  },
  hero: {
    title: '전체 화면 또는 그리드. 피드를 새롭게 펼쳐 보세요.',
    lead:
      'TweeTok은 X에서 팔로우하는 계정의 사진과 동영상을 한 화면에 하나씩, 또는 몇 초 만에 훑어볼 수 있는 2열 그리드로 보여 줍니다. 한 번의 탭으로 전환하세요.',
    toggleToFull: '전체 화면으로 보기',
    toggleToGrid: '그리드로 보기',
    demoCaption: '앱에서와 똑같이 버튼을 탭해 보기 방식을 전환해 보세요.',
    platforms: 'iPhone, iPad, Apple TV 지원. Android는 베타 중입니다.',
  },
  wall: {
    title: '이런 기능이 있습니다',
    intro: '아래 화면은 모두 실제 앱입니다. 각 기능이 무엇을 하는지, 어디에서 쓸 수 있는지 함께 표시했습니다.',
    free: '무료',
    pro: 'Pro',
    more: '자세히 보기',
    items: {
      feed: {
        title: '한 화면에 게시물 하나',
        body: '숏폼 영상 앱처럼 위아래로 스와이프해 게시물을 넘깁니다. 동영상은 화면에 나타나면 바로 재생되고, 여러 장의 이미지는 좌우로 넘기며, 다음 게시물은 미리 불러와 둡니다.',
        where: 'iPhone, iPad, Apple TV, Android',
      },
      grid: {
        title: '2열 그리드',
        body: '타임라인 전체를 한눈에 훑어보세요. 카드를 탭하면 그 자리에서 전체 화면으로 열리고, 오른쪽으로 스와이프하면 다시 돌아갑니다.',
        where: 'iPhone, iPad, Apple TV, Android',
      },
      lists: {
        title: '타임라인과 리스트',
        body: '추천, 팔로잉, 마음에 들어요, 북마크, 그리고 직접 만들거나 팔로우한 모든 리스트를 한 번의 탭으로 열 수 있습니다. TweeTok은 각각 마지막으로 본 위치를 기억합니다.',
        where: 'iPhone, iPad, Apple TV, Android',
      },
      filter: {
        title: '필터',
        body: '텍스트만 있는 게시물과 재게시를 숨겨 피드를 사진과 동영상으로만 채울 수 있습니다. Pro에서는 이미 본 게시물도 숨기고, 타임라인별로 필터를 기억합니다.',
        where: 'iPhone, iPad, Android',
      },
      cache: {
        title: '오프라인 캐시',
        body: '게시물과 이미지를 기기에 저장해 비행기 안이나 연결이 불안정한 곳에서도 볼 수 있습니다. 저장한 항목은 작성자별로 필터링할 수 있습니다.',
        where: 'iPhone, iPad, Android',
      },
      tv: {
        title: 'Apple TV',
        body: 'iPhone으로 코드를 스캔하면 계정이 TV로 옮겨집니다. 게시물을 하나씩 전체 화면으로 보거나, 그리드로 전환해 Siri Remote로 원하는 게시물을 고를 수 있습니다.',
        where: 'Apple TV',
      },
    },
  },
  extras: {
    title: '그리고 매일 쓰는 기능들',
    items: [
      { title: '번역', body: '다른 언어로 된 게시물을 그 자리에서 번역해 주므로 하나씩 열어 볼 필요가 없습니다.' },
      { title: '좋아요, 답글, 북마크', body: '좋아요, 북마크, 재게시, 인용, 답글을 앱을 떠나지 않고 할 수 있습니다. 두 번 탭하면 좋아요가 눌립니다.' },
      { title: '리스트에 추가', body: '게시물에서 한 번의 탭으로 작성자를 내 리스트에 추가할 수 있습니다.' },
      { title: '5개 언어 지원', body: 'English, 日本語, 한국어, 繁體中文, 简体中文을 지원합니다.' },
    ],
  },
  privacy: {
    title: '로그인 정보는 기기에만 남습니다',
    items: [
      '로그인은 X의 공식 웹페이지에서 진행됩니다. TweeTok은 비밀번호를 볼 수 없습니다.',
      '로그인 정보는 암호화되어 iOS 키체인 또는 Android의 보안 저장소에 기기에만 보관되며, 서버로 업로드되지 않습니다.',
      '언제든 로그아웃하면 해당 계정과 데이터가 기기에서 삭제됩니다.',
    ],
    link: '개인정보 처리방침 보기',
  },
  pricing: {
    title: '무료로 사용하세요. Pro는 한 번만 구매하면 됩니다.',
    lead: '한 번 구매로 이후 Pro 기능 업데이트까지 모두 포함됩니다. 구독이 아닙니다.',
    freeName: '무료',
    freePrice: '₩0',
    proName: 'Pro',
    proPrice: '{price}',
    proPriceUnit: '1회 구매',
    featureColumn: '기능',
    included: '포함',
    notIncluded: '미포함',
    rows: [
      { feature: '전체 화면 보기와 그리드 보기', free: 'yes', pro: 'yes' },
      { feature: '타임라인과 리스트', free: 'yes', pro: 'yes' },
      { feature: '자동 번역', free: 'yes', pro: 'yes' },
      { feature: '좋아요, 답글, 북마크', free: 'yes', pro: 'yes' },
      { feature: '텍스트만 있는 게시물과 재게시 숨기기', free: 'yes', pro: 'yes' },
      { feature: '오프라인 캐시', free: '최대 {limit}개', pro: '무제한' },
      { feature: '읽은 게시물 숨기기, 타임라인별 필터 기억', free: 'no', pro: 'yes' },
      { feature: '여러 계정', free: 'no', pro: 'yes' },
      { feature: 'Apple TV 앱 페어링', free: 'no', pro: 'yes' },
      { feature: '내 NAS 또는 WebDAV로 클라우드 동기화', free: 'no', pro: 'yes' },
    ],
    price: '₩17,000',
    priceNote: '한국 App Store 가격입니다. 구매 전에 App Store에서 해당 지역의 가격을 확인할 수 있습니다. iOS와 Android의 구매는 별도입니다.',
  },
  faq: {
    title: '자주 묻는 질문',
    items: [
      {
        q: 'TweeTok은 X의 공식 앱인가요?',
        a: '아닙니다. TweeTok은 개인 개발자가 만든 독립 앱으로, X Corp.와 관련이 없으며 X Corp.의 승인이나 후원을 받지 않았습니다. 사용하려면 본인의 X 계정이 필요합니다.',
      },
      {
        q: 'TweeTok은 무료인가요?',
        a: '네. 둘러보기, 두 가지 보기 방식, 타임라인, 리스트, 번역은 무료입니다. Pro는 1회 구매로 오프라인 캐시 무제한, Apple TV, 고급 필터, 여러 계정, 클라우드 동기화를 추가합니다.',
      },
      {
        q: 'TweeTok이 제 비밀번호를 볼 수 있나요?',
        a: '아니요. 로그인은 앱 안에서 X의 공식 웹페이지를 통해 진행됩니다. TweeTok은 그 결과로 얻은 로그인 정보만 암호화해 기기에 보관하며, 서버로 보내지 않습니다.',
      },
      {
        q: '어떤 기기에서 사용할 수 있나요?',
        a: 'App Store에서 iPhone, iPad, Apple TV용으로 받을 수 있습니다. Android 앱은 Google Play에서 베타 중이며, 누구나 참여할 수 있습니다.',
      },
      {
        q: 'Apple TV에서 Pro를 다시 구매해야 하나요?',
        a: '아니요. Apple TV 앱은 무료로 다운로드할 수 있습니다. iPhone과 페어링하려면 iPhone에서 Pro가 필요합니다.',
      },
      {
        q: 'iPhone에서 구매하면 Android에서도 Pro가 잠금 해제되나요?',
        a: '아니요. App Store와 Google Play는 구매를 따로 처리하므로, Pro는 구매한 플랫폼에서만 잠금 해제됩니다.',
      },
    ],
  },
  finalCta: {
    title: '피드를 원래 보여야 할 모습 그대로 만나 보세요.',
    body: 'TweeTok을 무료로 다운로드하세요. 더 필요할 때는 Pro가 있습니다.',
  },
  footer: {
    disclaimer:
      'TweeTok은 독립적으로 개발된 서드파티 뷰어로, X Corp.와 관련이 없으며 X Corp.의 승인, 후원 또는 허가를 받지 않았습니다. 앱에 표시되는 모든 콘텐츠는 X에서 제공되며, 권리는 각 작성자에게 있습니다.',
    contact: '문의',
    madeBy: '독립 개발자가 만들었습니다.',
  },
  pages: {
    gridView: {
      title: '그리드 보기 – 타임라인 전체를 한눈에 | TweeTok',
      description:
        '전체 화면과 2열 그리드를 한 번의 탭으로 전환하세요. 카드를 열면 그 자리에서 확대되고, 오른쪽으로 스와이프하면 제자리로 돌아갑니다. 타임라인, 리스트, 프로필에서 사용할 수 있습니다.',
      h1: '그리드 보기',
      lead: '전체 화면은 감상하기 위한 것, 그리드는 고르기 위한 것입니다. TweeTok에서는 보던 위치를 잃지 않고 한 번의 탭으로 둘을 오갈 수 있습니다.',
      sections: [
        {
          title: '2열로 모든 사진을',
          body: '그리드는 게시물을 원래 비율 그대로 2열로 배치하고, 각 게시물 아래에 작성자와 좋아요 수를 표시합니다. 동영상에는 재생 표시가 있어 열기 전에도 움직이는 게시물을 알아볼 수 있습니다.',
        },
        {
          title: '그 자리에서 열고, 그 자리로 닫기',
          body: '카드를 탭하면 놓여 있던 자리에서 전체 화면으로 커집니다. 오른쪽으로 스와이프하면 같은 자리로 다시 작아집니다. 그리드에서의 위치가 유지되므로 게시물을 차례로 열어 볼 수 있습니다.',
        },
        {
          title: '타임라인, 리스트, 프로필에서',
          body: '그리드는 둘러보는 모든 곳에서 사용할 수 있습니다. 타임라인, 리스트, 그리고 누구의 프로필에서든 마찬가지입니다. Apple TV에서는 큰 화면에 맞춘 4열 그리드로 표시됩니다.',
        },
      ],
    },
    appleTv: {
      title: 'Apple TV용 TweeTok – 큰 화면에서 사진과 동영상 보기',
      description:
        'iPhone으로 코드를 스캔해 Apple TV에 로그인하세요. Siri Remote로 타임라인과 리스트를 전체 화면이나 그리드로 둘러볼 수 있습니다.',
      h1: 'Apple TV용 TweeTok',
      lead: '사진과 동영상은 큰 화면에서 더 멋지게 보입니다. Apple TV용 TweeTok은 타임라인과 리스트를 TV에서 게시물 하나씩 보여 줍니다.',
      sections: [
        {
          title: '코드를 스캔해 로그인',
          body: '리모컨으로 입력할 필요가 없습니다. Apple TV에서 TweeTok을 열고 iPhone으로 코드를 스캔하면 계정이 TV에 나타납니다.',
        },
        {
          title: 'Siri Remote에 맞춘 조작',
          body: '전체 화면에서는 스와이프해 게시물을 넘기고, 그리드에서는 리모컨으로 자유롭게 이동합니다. 타임라인과 리스트는 사이드 메뉴에서 엽니다.',
        },
        {
          title: '설정은 그대로 따라옵니다',
          body: '읽은 기록과 클라우드 라이브러리 설정이 iPhone에서 그대로 넘어오므로 TV에서 따로 설정할 것이 없습니다.',
        },
      ],
      requirement: 'Apple TV 앱은 무료로 다운로드할 수 있습니다. 페어링하려면 iPhone에 TweeTok Pro가 필요합니다.',
    },
    offline: {
      title: '오프라인 캐시 – 사진·동영상 게시물을 기기에 보관 | TweeTok',
      description:
        '게시물과 이미지를 iPhone이나 Android 휴대폰에 저장해 연결 없이도 보세요. 작성자별로 필터링하고, 내 NAS나 WebDAV로 라이브러리를 동기화할 수 있습니다.',
      h1: '오프라인 캐시',
      lead: '게시물은 삭제되기도 하고 연결은 끊기기도 합니다. 소중한 게시물을 저장해 두고 어디서든 보세요.',
      sections: [
        {
          title: '미디어와 함께 게시물 저장',
          body: '게시물 메뉴에서 저장하세요. 게시물과 이미지, 동영상 커버가 기기에 저장되고, 목록에서 무엇을 언제 저장했는지 확인할 수 있습니다.',
        },
        {
          title: '작성자별로 다시 찾기',
          body: '저장한 게시물은 상단에 작성자별로 묶여 있어 특정 작가나 계정의 게시물로 바로 이동할 수 있습니다.',
        },
        {
          title: '내 저장소와 동기화',
          body: 'Pro에서는 내 NAS나 WebDAV 저장소를 통해 저장한 게시물과 읽은 기록을 기기 간에 동기화할 수 있습니다. TweeTok 서버를 거치는 데이터는 없습니다.',
        },
      ],
      requirement: '무료 사용자는 최대 {limit}개 게시물을 보관할 수 있습니다. Pro에서는 제한이 없습니다.',
    },
    androidBeta: {
      title: 'Android용 TweeTok – 베타 참여하기',
      description:
        'Android용 TweeTok이 Google Play에서 베타 테스트 중입니다. 세 단계로 참여할 수 있으며, 베타 기간에는 모든 Pro 기능이 무료입니다.',
      h1: 'Android용 TweeTok 베타',
      lead: 'Android 앱은 정식 출시 전 Google Play에서 테스트 중입니다. 지금 참여하면 베타 기간 동안 모든 Pro 기능을 무료로 사용할 수 있습니다.',
      stepsTitle: '세 단계로 참여하기',
      steps: [
        { title: 'Google 그룹 가입', body: 'Google 계정으로 로그인하고 테스터 그룹에 가입하세요.', action: '그룹 열기' },
        { title: '테스터 되기', body: '같은 Google 계정으로 테스트 페이지를 열고 “테스터 되기”를 탭하세요.', action: '테스트 페이지 열기' },
        { title: 'Google Play에서 설치', body: 'Google Play에서 TweeTok을 설치하고 X로 로그인한 뒤 둘러보세요.', action: 'Google Play 열기' },
      ],
      freeTitle: '베타 기간 무료',
      freeItems: ['오프라인 캐시 무제한', '고급 필터', 'WebDAV 클라우드 동기화', '여러 계정'],
      requirements: 'Android 12 이상, Google Play, X 계정이 필요하며 만 18세 이상이어야 합니다.',
      sameAccount: '세 단계 모두 같은 Google 계정을 사용하세요. 그렇지 않으면 Google Play에 앱이 표시되지 않습니다.',
    },
  },
  notFound: {
    title: '페이지를 찾을 수 없습니다',
    body: '존재하지 않는 페이지입니다. 다른 곳으로 옮겨졌을 수 있습니다.',
    back: '홈으로 가기',
  },
};

export default ko;
