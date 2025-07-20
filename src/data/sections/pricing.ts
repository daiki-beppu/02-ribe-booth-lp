import type { PricingData } from '../../types/sections/pricing';

export const pricingData: PricingData = {
  title: '料金・お申し込み',
  description:
    '自由研究から将来のスキルまで！\n体験無料、継続学習で一石二鳥の成長体験',
  freeServices: [
    {
      icon: '🚦',
      title: '信号機プログラミング体験',
      description: {
        mobile: '15分で自由研究完成！',
        desktop: '15分で自由研究完成！夢中になる本格体験',
      },
      borderColor: 'border-green-400',
    },
    {
      icon: '👨‍💻',
      title: '現役エンジニアとおしゃべり会',
      description: {
        mobile:
          '現役エンジニアが直接回答\nトークテーマ\nA：小中学生向け（将来・学習・体験）\nB：中高生・大学生向け（将来・進路・大学）\nC：親御さん向け（将来・進路・教育）',
        desktop:
          '現役エンジニアが直接回答（30分・事前予約推奨）\nトークテーマ：A.小中学生向け B.中高生・大学生向け C.親御さん向け（8/9-8/11開催）',
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
  products: [
    {
      id: 'starterkit',
      name: '🌱 スタートキット',
      price: 2980,
      description: [
        '🚦 Arduino UNO互換ボード + LED信号機キット',
        '🔧 LED制御プログラム',
        '📝 自由研究レポート',
      ],
      target: '学習支援',
      borderColor: 'border-green-400',
      priceColor: 'text-green-600',
      badgeColor: 'bg-green-100 text-green-800',
    },
    {
      id: 'adventurekit',
      name: '🚀 アドベンチャーキット',
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
      badge: {
        text: '限定5個',
        color: 'bg-orange-500 text-white hover:bg-orange-600',
      },
    },
    {
      id: 'masterkit',
      name: '💎 マスターキット',
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
      badge: {
        text: '限定1個',
        color: 'bg-red-500 text-white hover:bg-red-600',
      },
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
  finalCta: {
    title: '体験から始まる、本気の学び！',
    button: {
      text: '今すぐ無料体験に申し込む',
      href: 'https://docs.google.com/forms/d/e/1FAIpQLSczxo5c082Y6JTdNPmzM_lczjt8hvsga08G8WPtkv2S858rrg/viewform',
      variant: 'primary',
      external: true,
    },
    subtitle: '継続サポートで学習加速！\n安心して成長を見守れます',
  },
};
