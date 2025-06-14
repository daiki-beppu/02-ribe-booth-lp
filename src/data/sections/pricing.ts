import type { PricingData } from "../../types/sections/pricing";

export const pricingData: PricingData = {
  title: "料金・お申し込み",
  description:
    "体験も相談会も完全無料！気軽にプログラミングの世界を覗いてみてください",
  freeServices: [
    {
      icon: "🚦",
      title: "LED信号機プログラミング体験",
      description: "15分間の本格的な体験（順次案内）",
      borderColor: "border-green-400",
    },
    {
      icon: "👨‍💻",
      title: "現役プログラマーへの相談会",
      description: "60分間の直接相談（1日3回開催）",
      borderColor: "border-blue-400",
    },
    {
      icon: "📜",
      title: "体験証明書・学習資料",
      description: "夏休みの思い出として持ち帰り可能",
      borderColor: "border-purple-400",
    },
  ],
  freeServicesImage: {
    src: "/images/conceptual-experience.png",
    alt: "親子でArduinoプログラミングを学ぶ理想的な体験風景",
    caption: "実際の体験風景：親子で楽しくプログラミングを学習",
  },
  products: [
    {
      id: "starter",
      name: "🌱 スタートキット",
      price: 3000,
      description: [
        "マイコン＋ボード＋信号機キット",
        "基本的なLED制御プログラム付き",
      ],
      target: "初心者・お子様向けの入門モデル",
      borderColor: "border-green-400",
      priceColor: "text-green-600",
      badgeColor: "bg-green-100 text-green-800",
    },
    {
      id: "adventure",
      name: "🚀 アドベンチャーキット",
      price: 5000,
      description: [
        "スタートキットの全内容",
        "＋踏切システム追加＋モーター制御機能",
      ],
      target: "親子で夏の思い出作り＆本格学習モデル",
      borderColor: "border-orange-400",
      priceColor: "text-orange-600",
      badgeColor: "bg-orange-100 text-orange-800",
    },
    {
      id: "master",
      name: "💎 マスターキット",
      price: 10000,
      description: [
        "アドベンチャーキットの全内容",
        "＋3種センサー（距離/温度/照度）追加",
      ],
      target: "副業・転職を目指す本格派モデル",
      borderColor: "border-purple-400",
      priceColor: "text-purple-600",
      badgeColor: "bg-purple-100 text-purple-800",
    },
  ],
  applicationForm: {
    title: "お申し込み・お問い合わせ",
    description: "事前予約推奨（当日参加も可能）",
    button: {
      text: "予約フォームへ →",
      href: "https://docs.google.com/forms/d/e/1FAIpQLSczxo5c082Y6JTdNPmzM_lczjt8hvsga08G8WPtkv2S858rrg/viewform",
      variant: "secondary",
      external: true,
    },
  },
  finalCta: {
    title: "プログラミングの世界への第一歩を一緒に踏み出しませんか？",
    button: {
      text: "🎯 今すぐ無料体験に申し込む",
      href: "https://docs.google.com/forms/d/e/1FAIpQLSczxo5c082Y6JTdNPmzM_lczjt8hvsga08G8WPtkv2S858rrg/viewform",
      variant: "primary",
      external: true,
    },
    subtitle: "初心者でも大丈夫！現役プログラマーが全力でサポートします",
  },
};
