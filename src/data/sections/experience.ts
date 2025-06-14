import type { ExperienceData } from '../../types/sections/experience';

export const experienceData: ExperienceData = {
  title: '体験内容・サービス紹介',
  description: 'Arduino LED信号機を使った本格的なプログラミング体験と現役プログラマーによる相談会をご用意しています',
  badge: {
    text: '🆓 無料体験（15分）',
    variant: 'orange'
  },
  images: [
    {
      src: '/images/experience-image2.jpg',
      alt: '子供が信号機キットを操作している様子'
    }
  ],
  steps: [
    {
      icon: '🔧',
      title: 'Step 1: キット組み立て',
      description: 'Arduino基板とLEDライトの配線\nプログラマーの仕事を疑似体験'
    },
    {
      icon: '💻',
      title: 'Step 2: プログラム作成',
      description: 'テンプレート準備で初心者も安心\n信号機の点灯パターンをプログラミング'
    },
    {
      icon: '⚡',
      title: 'Step 3: 動かしてみる',
      description: 'LED信号機を実際に制御\n赤→黄→緑の点灯を体験'
    }
  ]
};