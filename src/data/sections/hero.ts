import type { HeroData } from '../../types/sections/hero';

export const heroData: HeroData = {
  title: {
    mobile: '親子でプログラム\n×',
    desktop: '親子でプログラム\n×',
  },
  subtitle: {
    mobile: '光る動くおもちゃ作り！',
    desktop: '光る動くおもちゃ作り！',
  },
  description: {
    mobile: '親子で夏休みの思い出作り',
    desktop: '親子で夏休みの思い出作り',
  },
  video: {
    localSrc: '/videos/public-relations.TS.mp4',
    caption: {
      mobile: 'キット紹介動画',
      desktop: '実際のキットの紹介動画',
    },
  },
  catchCopy: {
    mobile: '自由研究提出OK→将来のスキルまで！',
    desktop: `自由研究提出OK→将来のスキルまで！
一石二鳥の学習体験`,
  },
  ctaButton: {
    text: '無料体験に申し込む',
    href: 'https://docs.google.com/forms/d/e/1FAIpQLSczxo5c082Y6JTdNPmzM_lczjt8hvsga08G8WPtkv2S858rrg/viewform',
    variant: 'primary',
    external: true,
  },
  eventInfo: {
    boothNumber: 'M-14',

    dates: {
      mobile: '8月9日〜11日',
      desktop: '2025年8月9日〜11日',
    },
    venue: {
      mobile: '幕張メッセ',
      desktop: '幕張メッセ',
    },
  },
};
