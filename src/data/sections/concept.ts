import type { ConceptData } from '../../types/sections/concept';

export const conceptData: ConceptData = {
  title: '今すぐ使える自由研究から、将来に役立つスキルまで！',
  description: `現役エンジニアチームが作った本格仕様の教材で\n遊びながら本物の力が身につきます。
エンジニアに必要な要素がぜんぶ詰まった、理想的な学習環境をご提供します`,
  image: {
    src: '/images/programming-image.jpg',
    alt: 'ArduinoのIDEでプログラミングをしている画面',
  },
  features: [
    {
      icon: '📝',
      title: '自由研究提出OK',
      description:
        '夏休みの自由研究として提出可能！\n「そのまま提出できる」\n実用的な成果物が作れます',
    },
    {
      icon: '🔧',
      title: '本格仕様の教材',
      description:
        '現役エンジニアチームが\n設計した本格的な教材\n遊びながら本物の力が身につきます',
    },
    {
      icon: '📚',
      title: '継続的サポート',
      description:
        '購入後も継続的なサポートで\n学習が加速！\nお子さんの成長を長期的に支援します',
    },
    {
      icon: '👨‍👩‍👧‍👦',
      title: '親御さんも安心',
      description:
        'プロが作った理想的な学習環境で\n安心してお子さんの成長を見守れます',
    },
  ],
};
