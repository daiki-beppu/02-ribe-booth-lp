import type {
  TeamData,
  TeamDataBasic,
  TeamMember,
  TeamMemberBasic,
} from '../../types/sections/team';

// メンバーの完全データ
const fullMembersData: TeamMember[] = [
  {
    name: 'トムランド',
    title: '投資おたくエンジニア',
    experience: 'プログラマー歴25年',
    skills: ['フルスタック開発', 'AI/LLM', '株式投資', '副業'],
    description:
      'フェスのプログラム体験会/相談会を通じて学びの楽しさを伝えたいです！',
    color: 'blue',
    badge: 'リーダー',
    avatar: '/images/icons/tomland-icon.png',
    isLeader: true,
    colSpan: 2,
    details: [
      { icon: '💻', text: '本業は現役プログラマー（経験25年）' },
      {
        icon: '📱',
        text: '副業実績：株式財務分析アプリ・農業支援システム・プログラム教育で収益化',
      },
      { icon: '🤖', text: '現在LLM/AIサービス開発中' },
      {
        icon: '💰',
        text: '高配当株投資で資産4桁＋配当3桁達成',
      },
    ],
    message:
      'フェスのプログラム体験会/相談会を通じて学びの楽しさを伝えたいです！',
    portfolio: [
      {
        title: '株式財務分析アプリ',
        description:
          '高配当株投資で培った経験を活かした財務分析ツール。投資判断をサポートする機能を実装。',
        technologies: ['React', 'TypeScript', 'Python', '財務API'],
        type: 'service',
        url: '#',
      },
      {
        title: '農業支援システム',
        description:
          '農業従事者向けの業務効率化システム。IoTデータと連携した管理ツール。',
        technologies: ['Vue.js', 'Node.js', 'IoT', 'データベース'],
        type: 'service',
        url: '#',
      },
      {
        title: 'LLM/AIサービス',
        description:
          '現在開発中の最新AI技術を活用したサービス。ユーザー体験の向上を目指す。',
        technologies: ['AI/LLM', 'Python', 'API', '機械学習'],
        type: 'project',
        url: '#',
      },
    ],
  },
  {
    name: 'まるの',
    title: '家電エンジニア',
    experience: '現役プログラマー',
    skills: ['組み込み系', '3Dプリンタ', 'ハードウェア'],
    description: 'プログラミングで実物が動く楽しさを体験いただきたいです。',
    color: 'maruno-pink',
    badge: 'サブリーダー',
    avatar: '/images/icons/maruno-icon.png',
    details: [
      { icon: '💻', text: '家電エンジニア、現役プログラマー' },
      { icon: '🖨️', text: '副業：3Dプリンタ ハンドメイド' },
      {
        icon: '🏠',
        text: 'ご家庭にある洗濯機、充電器などの中身をプログラミングで作っています',
      },
    ],
    message: 'プログラミングで実物が動く楽しさを体験いただきたいです。',
    portfolio: [
      {
        title: '3Dプリンタ作品',
        description:
          'オリジナルデザインの3Dプリンタ作品集。機能性とデザイン性を両立したハンドメイド作品。',
        technologies: ['3Dプリンタ', 'CAD', 'デザイン', 'ハンドメイド'],
        type: 'portfolio',
        url: '#',
      },
      {
        title: '家電制御システム',
        description:
          '家庭用電化製品の制御プログラム開発。洗濯機や充電器などの組み込みソフトウェア。',
        technologies: ['C/C++', '組み込み', 'マイコン', 'ハードウェア'],
        type: 'project',
        url: '#',
      },
    ],
  },
  {
    name: 'ももちこ',
    title: '駆け出しプログラマー',
    experience: '2024年10月転職',
    skills: ['Webアプリ開発', 'AI開発', 'プログラミング学習支援'],
    description:
      'プログラミングで人生が変わった経験を、次は誰かに届けたいと考えています！',
    color: 'orange',
    avatar: '/images/icons/momochico-icon.jpg',
    details: [
      {
        icon: '💻',
        text: '新しいテクノロジーが大好きな駆け出しプログラマー',
      },
      {
        icon: '🚀',
        text: '2024年10月に転職し、自由な働き方と充実した毎日を実現',
      },
      {
        icon: '🌱',
        text: 'プログラミングを通じて新しい可能性を見つけることに情熱を注いでいます',
      },
    ],
    message:
      'プログラミングで人生が変わった経験を、次は誰かに届けたいと考えています！',
  },
  {
    name: 'koba',
    title: '記憶力🧠としらべ魔👸の変態エンジニア',
    experience: '管理職エンジニア',
    skills: ['機械設計', 'VBA', '社内ツール開発'],
    description:
      'どんな変態エンジニアかを知りたい方は、どしどし話し掛けてくださいね！',
    color: 'koba-yellow',
    avatar: '/images/icons/koba-icon.jpg',
    details: [
      { icon: '💻', text: '本業は機械設計エンジニア' },
      { icon: '🛠️', text: 'VBAを使った社内ツール開発中' },
      { icon: '📚', text: '管理職に昇進したのでマネジメントも勉強中' },
      {
        icon: '😅',
        text: '小学校の通知表には「情緒不安定」と書かれちゃうほど、落ち着きがない',
      },
    ],
    message:
      'どんな変態エンジニアかを知りたい方は、どしどし話し掛けてくださいね！',
    portfolio: [
      {
        title: '社内ツール開発',
        description:
          'VBAを活用した業務効率化ツール。複雑なデータ処理を自動化し、チームの生産性向上に貢献。',
        technologies: ['VBA', 'Excel', '自動化', '業務効率化'],
        type: 'project',
        url: '#',
      },
      {
        title: '機械設計プロジェクト',
        description:
          '機械設計エンジニアとしての設計案件。技術的な課題解決と品質向上を実現。',
        technologies: ['機械設計', 'CAD', 'エンジニアリング', '品質管理'],
        type: 'project',
        url: '#',
      },
    ],
  },
  {
    name: 'snowdrop',
    title: 'ものづくり大好きなかごバッグ作家',
    experience: '2024年6月転職',
    skills: ['機械設計', 'ハンドメイド', 'ものづくり'],
    description: '多彩な活動を通じて、ものづくりの楽しさをお伝えします！',
    color: 'snowdrop-blue',
    avatar: '/images/icons/snowdrop-icon.jpg',
    details: [
      {
        icon: '👩‍👦‍👦',
        text: '男子2人を育てるシングルマザーで、会社員・家事・副業をこなすスーパー母ちゃん！',
      },
      { icon: '🔧', text: '2024年6月に建築設計から機械設計へ転職' },
      { icon: '💻', text: '現在は機械設計エンジニアとして活躍中' },
      { icon: '🎨', text: '副業ではハンドメイド作家としても活動中' },
    ],
    message: '多彩な活動を通じて、ものづくりの楽しさをお伝えします！',
    portfolio: [
      {
        title: 'ハンドメイドかごバッグ',
        description:
          'オリジナルデザインのかごバッグ作品集。実用性とデザイン性を兼ね備えた手作り作品を制作・販売。',
        technologies: ['ハンドメイド', 'デザイン', 'かごバッグ', '手芸'],
        type: 'portfolio',
        url: '#',
      },
      {
        title: '機械設計案件',
        description:
          '建築設計から機械設計への転職を活かした設計業務。多角的な視点でのものづくりを実践。',
        technologies: ['機械設計', 'CAD', '建築知識', '設計'],
        type: 'project',
        url: '#',
      },
      {
        title: 'ものづくりワークショップ',
        description:
          '子育て経験を活かした、親子で楽しめるものづくりワークショップの企画・運営。',
        technologies: ['ワークショップ', '子育て', '教育', 'コミュニティ'],
        type: 'service',
        url: '#',
      },
    ],
  },
];

// ホーム用の簡易メンバーデータ
export const basicMembersData: TeamMemberBasic[] = fullMembersData.map(
  (member) => ({
    name: member.name,
    title: member.title,
    experience: member.experience,
    skills: member.skills,
    description: member.description,
    avatar: member.avatar,
    color: member.color,
    badge: member.badge,
    isLeader: member.isLeader,
    colSpan: member.colSpan,
  })
);

// ホーム用のteamData
export const teamDataBasic: TeamDataBasic = {
  title: '現役プログラマー陣が直接指導',
  description:
    '異業種の現役専門家が集結！\n動画や書籍では学べない生きた情報とスキルアップのコツをお伝えします！',
  members: basicMembersData,
  finalMessage: {
    title: 'リベシティの魅力とつながる楽しさを共有したい！',
    description: `
    日常生活では絶対に出会えない人と知り合い\n一緒に何かを成し遂げる仲間との出会いを大切にしています。\nプログラミングを通じて、新しいつながりと可能性を一緒に見つけましょう！`,
  },
};

// メンバー詳細ページ用のteamData
export const teamData: TeamData = {
  title: '現役プログラマー陣が直接指導',
  description:
    '異業種の現役専門家が集結！\n動画や書籍では学べない生きた情報とスキルアップのコツをお伝えします！',
  members: fullMembersData,
  finalMessage: {
    title: 'リベシティの魅力とつながる楽しさを共有したい！',
    description: `
    日常生活では絶対に出会えない人と知り合い\n一緒に何かを成し遂げる仲間との出会いを大切にしています。\nプログラミングを通じて、新しいつながりと可能性を一緒に見つけましょう！`,
  },
};
