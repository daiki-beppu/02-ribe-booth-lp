import type { ConceptData } from '../../types/sections/concept';

export const conceptData: ConceptData = {
  title: 'プログラムを"見て・触れて・動かして"学ぼう！',
  description: 'お金の勉強フェス2025で、現役プログラマーと一緒にArduino LED信号機を使った本格的なプログラミング体験ができます',
  image: {
    src: '/images/programming-image.jpg',
    alt: 'ArduinoのIDEでプログラミングをしている画面'
  },
  features: [
    {
      icon: '🔰',
      title: '初心者でも超簡単',
      description: 'プログラミング未経験でも大丈夫！現役プログラマーが優しく指導します'
    },
    {
      icon: '🆓',
      title: '参加無料',
      description: '体験も相談会も完全無料！気軽にプログラミングの世界を覗いてみましょう'
    },
    {
      icon: '⚡',
      title: '即効性抜群',
      description: '15分でプログラムが動く！すぐに成果が見えるから達成感を感じられます'
    },
    {
      icon: '👨‍👩‍👧‍👦',
      title: '親子で参加OK',
      description: '家族みんなで楽しめます。親子のコミュニケーションにも最適です'
    }
  ]
};