import type { ConceptData } from '../../types/sections/concept';

export const conceptData: ConceptData = {
  title: {
    desktop: '今すぐ使える自由研究から、将来に役立つスキルまで！',
    mobile: '本格的な教材で学ぼう！',
  },
  description: {
    desktop:
      '現役エンジニアチームが作った本格的な教材で\n遊びながら本物の力が身につきます。\nエンジニアに必要な要素がぜんぶ詰まった、理想的な学習環境をご提供します',
    mobile:
      '現役エンジニアチームが作った本格的な教材で\n遊びながら本物の力が身につきます！',
  },

  image: {
    src: '/images/programming-image.jpg',
    alt: 'ArduinoのIDEでプログラミングをしている画面',
  },
  features: [
    {
      icon: '📝',
      title: '自由研究提出OK',
      description:
        '夏休みの自由研究として提出可能！\nフォーマットもこちらで用意しています',
    },
    {
      icon: '🔧',
      title: '本格仕様の教材',
      description:
        '現役エンジニアチームが設計！\n遊びながら本物の力が身につく👊',
    },
    {
      icon: '📚',
      title: '継続的サポート',
      description: '購入後も継続的なサポートで\n学習が加速！',
    },
    {
      icon: '👨‍👩‍👧‍👦',
      title: '親御さんも安心',
      description:
        'プロが作った理想的な学習環境で\n安心してお子さんの成長を見守れます',
    },
  ],
  detailButton: {
    text: '詳細を見る →',
    href: '/booth',
    variant: 'primary',
  },
};
