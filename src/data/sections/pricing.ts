import type { PricingData } from '../../types/sections/pricing';

export const pricingData: PricingData = {
  title: '料金・お申し込み',
  description:
    '自由研究から将来のスキルまで！\n体験無料、継続学習で一石二鳥の成長体験',
  freeServices: [
    {
      icon: '🚦',
      title: 'Arduino LED信号機プログラミング体験',
      description: {
        mobile: '15分で自由研究完成！',
        desktop: '15分で自由研究完成！夢中になる本格体験',
      },
      borderColor: 'border-green-400',
    },
    {
      icon: '👨‍💻',
      title: '現役エンジニアへの相談会',
      description: {
        mobile: '現役エンジニアが直接回答',
        desktop: '現役エンジニアが直接回答（30分・事前予約推奨）',
      },
      borderColor: 'border-blue-400',
    },
    {
      icon: '🎮',
      title: '大交流会イベント',
      description: {
        mobile: 'ゲーム大会で交流',
        desktop: 'ゲーム大会で参加者・スタッフと交流（18:30〜19:00）',
      },
      borderColor: 'border-purple-400',
    },
  ],
  freeServicesImage: {
    src: '/images/conceptual-experience.png',
    alt: '親子でArduinoプログラミングを学ぶ理想的な体験風景',
    caption: '実際の体験風景：親子で楽しくプログラミングを学習',
  },
  products: [
    {
      id: 'starterkit',
      name: '🌱 スタートキット',
      price: 2980,
      description: [
        '🚦 Arduino UNO互換ボード + LED信号機キット',
        '🔧 LED制御プログラム（サンプルコード10種類）',
        '📝 自由研究レポート作成ガイド',
      ],
      target: '学習支援',
      borderColor: 'border-green-400',
      priceColor: 'text-green-600',
      badgeColor: 'bg-green-100 text-green-800',
    },
    {
      id: 'adventurekit',
      name: '【限定10個】🚀 アドベンチャーキット',
      price: 4980,
      description: [
        '自由研究グレードアップ！親子で本格学習',
        '🌱 スタートキットの全内容',
        '🚃 踏切システム（モーター制御）',
      ],
      target: '学習支援',
      borderColor: 'border-orange-400',
      priceColor: 'text-orange-600',
      badgeColor: 'bg-orange-100 text-orange-800',
    },
    {
      id: 'masterkit',
      name: '【限定5個】💎 マスターキット',
      price: 9980,
      description: [
        '自由研究→将来スキル！本格派モデル',
        '🚀 アドベンチャーキットの全内容',
        '🌡️ 3種センサー追加（距離・温度・照度）',
      ],
      target: '学習支援',
      borderColor: 'border-purple-400',
      priceColor: 'text-purple-600',
      badgeColor: 'bg-purple-100 text-purple-800',
    },
    {
      id: 'ledheadband',
      name: '💡 光るカチューシャ',
      price: 500,
      description: [
        '🎪 イベント会場で目立つこと間違いなし',
        '🎁 お土産・記念品として最適',
      ],
      target: '学習支援',
      borderColor: 'border-blue-400',
      priceColor: 'text-blue-600',
      badgeColor: 'bg-blue-100 text-blue-800',
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
      text: '今すぐ無料体験に申し込む',
      href: 'https://docs.google.com/forms/d/e/1FAIpQLSczxo5c082Y6JTdNPmzM_lczjt8hvsga08G8WPtkv2S858rrg/viewform',
      variant: 'primary',
      external: true,
    },
    subtitle: '継続サポートで学習加速！安心して成長を見守れます',
  },
};
