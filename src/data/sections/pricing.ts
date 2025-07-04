import type { PricingData } from '../../types/sections/pricing';

export const pricingData: PricingData = {
  title: '料金・お申し込み',
  description:
    '自由研究から将来のスキルまで！体験無料、継続学習で一石二鳥の成長体験',
  freeServices: [
    {
      icon: '🚦',
      title: 'LED信号機プログラミング体験',
      description: '15分間の本格的な体験（順次案内）',
      borderColor: 'border-green-400',
    },
    {
      icon: '👨‍💻',
      title: '現役プログラマーへの相談会',
      description: '60分間の直接相談（1日3回開催）',
      borderColor: 'border-blue-400',
    },
  ],
  freeServicesImage: {
    src: '/images/conceptual-experience.png',
    alt: '親子でArduinoプログラミングを学ぶ理想的な体験風景',
    caption: '実際の体験風景：親子で楽しくプログラミングを学習',
  },
  products: [
    {
      id: 'starter',
      name: '🌱 スタートキット',
      price: 3000,
      description: [
        'マイコン＋ボード＋信号機キット',
        '基本的なLED制御プログラム付き',
        '自由研究レポート作成ガイド付き',
      ],
      target: '自由研究完成！初心者・お子様向け入門モデル',
      borderColor: 'border-green-400',
      priceColor: 'text-green-600',
      badgeColor: 'bg-green-100 text-green-800',
    },
    {
      id: 'adventure',
      name: '🚀 アドベンチャーキット',
      price: 5000,
      description: [
        'スタートキットの全内容',
        '＋踏切システム追加＋モーター制御機能',
        '応用自由研究テーマ5選付き',
      ],
      target: '自由研究グレードアップ！親子で本格学習モデル',
      borderColor: 'border-orange-400',
      priceColor: 'text-orange-600',
      badgeColor: 'bg-orange-100 text-orange-800',
    },
    {
      id: 'master',
      name: '💎 マスターキット',
      price: 10_000,
      description: [
        'アドベンチャーキットの全内容',
        '＋3種センサー（距離/温度/照度）追加',
        '将来のスキル習得ロードマップ付き',
      ],
      target: '自由研究→将来スキル！副業・転職を目指す本格派',
      borderColor: 'border-purple-400',
      priceColor: 'text-purple-600',
      badgeColor: 'bg-purple-100 text-purple-800',
    },
  ],
  applicationForm: {
    title: 'お申し込み・お問い合わせ',
    description: '事前予約推奨（当日参加も可能）',
    button: {
      text: '予約フォームへ →',
      href: 'https://docs.google.com/forms/d/e/1FAIpQLSczxo5c082Y6JTdNPmzM_lczjt8hvsga08G8WPtkv2S858rrg/viewform',
      variant: 'secondary',
      external: true,
    },
  },
  finalCta: {
    title: '体験から始まる、本気の学びをどうぞ！',
    button: {
      text: '🎯 今すぐ無料体験に申し込む',
      href: 'https://docs.google.com/forms/d/e/1FAIpQLSczxo5c082Y6JTdNPmzM_lczjt8hvsga08G8WPtkv2S858rrg/viewform',
      variant: 'primary',
      external: true,
    },
    subtitle: `購入後は継続的なサポートで学習が加速！
親御さんは安心してお子さんの成長を見守れます`,
  },
};
