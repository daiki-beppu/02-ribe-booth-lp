import type { ExperienceData } from "../../types/sections/experience";

export const experienceData: ExperienceData = {
  title: "自由研究完成！体験内容・サービス紹介",
  description: `
  夏休みの自由研究として提出できる成果物を15分で作成！
  Arduino LED信号機を使った本格的なプログラミング体験で
  お子さんが「かっこいい！」と夢中になります`,
  badge: {
    text: "📝 自由研究対応＆無料体験（15分）",
    variant: "orange",
  },
  images: [
    {
      src: "/images/experience-image2.jpg",
      alt: "子供が信号機キットを操作している様子",
    },
  ],
  steps: [
    {
      icon: "🔧",
      title: "Step 1: キット組み立て",
      description: "Arduino基板とLEDライトの配線\n自由研究の実験装置完成！",
    },
    {
      icon: "💻",
      title: "Step 2: プログラム作成",
      description: "テンプレート準備で初心者も安心\n信号機の制御ロジックを学習",
    },
    {
      icon: "📝",
      title: "Step 3: 成果まとめ",
      description: "LED信号機を実際に制御\n自由研究レポートの材料が完成！",
    },
  ],
};
