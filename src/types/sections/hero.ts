import type { Button } from "../common";

export type HeroData = {
  title: string;
  subtitle: string;
  description: string;
  video: {
    youtubeId?: string;
    localSrc?: string;
    poster?: string;
    caption: string;
  };
  catchCopy?: string;
  ctaButton: Button;
  eventInfo: {
    boothNumber: string;
    dates: string;
    venue: string;
  };
};
