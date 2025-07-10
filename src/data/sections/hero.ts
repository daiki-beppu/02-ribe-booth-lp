import type { HeroData } from '../../types/sections/hero';

export const heroData: HeroData = {
  title: '親子でプログラム×',
  subtitle: '光る動くおもちゃ作り！',
  description: '親子で夏休みの思い出作り',
  video: {
    localSrc: '/videos/public-relations.TS.mp4',
    caption: '実際のキットの紹介動画',
  },
  catchCopy: `自由研究提出OK→将来のスキルまで！
一石二鳥の学習体験`,
  ctaButton: {
    text: '無料体験に申し込む',
    href: 'https://docs.google.com/forms/d/e/1FAIpQLSczxo5c082Y6JTdNPmzM_lczjt8hvsga08G8WPtkv2S858rrg/viewform',
    variant: 'primary',
    external: true,
  },
  eventInfo: {
    boothNumber: 'M-14',
    dates: '2025年8月9日〜11日',
    venue: '幕張メッセ',
  },
};
