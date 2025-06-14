import type { HeroData } from '../../types/sections/hero';

export const heroData: HeroData = {
  title: '🔰はじめよう！',
  subtitle: 'プログラムの世界！🆓',
  description: '親子で夏休みの思い出作り',
  video: {
    localSrc: '/videos/public-relations.TS.mp4',
    caption: '実際のキットの紹介動画'
  },
  ctaButton: {
    text: '🎯 無料体験に申し込む',
    href: 'https://docs.google.com/forms/d/e/1FAIpQLSczxo5c082Y6JTdNPmzM_lczjt8hvsga08G8WPtkv2S858rrg/viewform',
    variant: 'primary',
    external: true
  },
  eventInfo: {
    boothNumber: 'M-14',
    dates: '2025年8月9日〜11日',
    venue: '幕張メッセ'
  }
};