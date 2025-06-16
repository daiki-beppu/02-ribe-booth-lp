import type { TeamData } from "../../types/sections/team";

export const teamData: TeamData = {
  title: "現役プログラマー陣が直接指導",
  description: `異業種の現役専門家が集結！\n動画や書籍では学べない生きた情報とスキルアップのコツをお伝えします！`,
  members: [
    {
      name: "トムランド",
      title: "投資おたくエンジニア",
      experience: "プログラマー歴25年",
      skills: ["フルスタック開発", "AI/LLM", "株式投資", "副業"],
      description:
        "フェスのプログラム体験会/相談会を通じて学びの楽しさを伝えたいです！",
      color: "orange",
      badge: "リーダー",
      avatar: "/images/icons/tomland-icon.png",
      isLeader: true,
      colSpan: 2,
      details: [
        { icon: "💻", text: "本業は現役プログラマー（経験25年）" },
        {
          icon: "📱",
          text: "副業実績：株式財務分析アプリ・農業支援システム・プログラム教育で収益化",
        },
        { icon: "🤖", text: "現在LLM/AIサービス開発中" },
        {
          icon: "💰",
          text: "高配当株投資で資産4桁＋配当3桁達成",
        },
      ],
      message:
        "フェスのプログラム体験会/相談会を通じて学びの楽しさを伝えたいです！",
    },
    {
      name: "まるの",
      title: "家電エンジニア",
      experience: "現役プログラマー",
      skills: ["組み込み系", "3Dプリンタ", "ハードウェア"],
      description: "プログラミングで実物が動く楽しさを体験いただきたいです。",
      color: "blue",
      badge: "サブリーダー",
      avatar: "/images/icons/maruno-icon.png",
      details: [
        { icon: "💻", text: "家電エンジニア、現役プログラマー" },
        { icon: "🖨️", text: "副業：3Dプリンタ ハンドメイド" },
        {
          icon: "🏠",
          text: "ご家庭にある洗濯機、充電器などの中身をプログラミングで作っています",
        },
      ],
      message: "プログラミングで実物が動く楽しさを体験いただきたいです。",
    },
    {
      name: "ももちこ",
      title: "駆け出しプログラマー",
      experience: "2024年10月転職",
      skills: ["Webアプリ開発", "AI開発", "転職支援"],
      description:
        "プログラミングで人生が変わった経験を、次は誰かに届けたいと考えています！",
      color: "pink",
      avatar: "/images/icons/momochico-icon.jpg",
      details: [
        {
          icon: "💻",
          text: "新しいテクノロジーが大好きな駆け出しプログラマー",
        },
        {
          icon: "🚀",
          text: "2024年10月に転職し、自由な働き方と充実した毎日を実現",
        },
        {
          icon: "🌐",
          text: "現在はWebアプリ開発に携わりつつ、毎日新しいことを学んでいます",
        },
      ],
      message:
        "プログラミングで人生が変わった経験を、次は誰かに届けたいと考えています！",
    },
    {
      name: "KOBA",
      title: "記憶力🧠としらべ魔👸の変態エンジニア",
      experience: "管理職エンジニア",
      skills: ["機械設計", "VBA", "社内ツール開発"],
      description:
        "どんな変態エンジニアかを知りたい方は、どしどし話し掛けてくださいね！",
      color: "green",
      avatar: "/images/icons/koba-icon.jpg",
      details: [
        { icon: "💻", text: "本業は機械設計エンジニア" },
        { icon: "🛠️", text: "VBAを使った社内ツール開発中" },
        { icon: "📚", text: "管理職に昇進したのでマネジメントも勉強中" },
        {
          icon: "😅",
          text: "小学校の通知表には「情緒不安定」と書かれちゃうほど、落ち着きがない",
        },
      ],
      message:
        "どんな変態エンジニアかを知りたい方は、どしどし話し掛けてくださいね！",
    },
    {
      name: "snowdrop",
      title: "ものづくり大好きなかごバッグ作家",
      experience: "2024年6月転職",
      skills: ["機械設計", "ハンドメイド", "ものづくり"],
      description: "多彩な活動を通じて、ものづくりの楽しさをお伝えします！",
      color: "yellow",
      avatar: "/images/icons/snowdrop-icon.jpg",
      details: [
        {
          icon: "👩‍👦‍👦",
          text: "男子2人を育てるシングルマザーで、会社員・家事・副業をこなすスーパー母ちゃん！",
        },
        { icon: "🔧", text: "2024年6月に建築設計から機械設計へ転職" },
        { icon: "💻", text: "現在は機械設計エンジニアとして活躍中" },
        { icon: "🎨", text: "副業ではハンドメイド作家としても活動中" },
      ],
      message: "多彩な活動を通じて、ものづくりの楽しさをお伝えします！",
    },
  ],
  finalMessage: {
    title: "リベシティの魅力とつながる楽しさを共有したい！",
    description: `
    日常生活では絶対に出会えない人と知り合い\n一緒に何かを成し遂げる仲間との出会いを大切にしています。\nプログラミングを通じて、新しいつながりと可能性を一緒に見つけましょう！`,
  },
};
