import type { Button } from '../common';
import type { TextOrResponsive } from '../common/responsive-text';

export type HeroData = {
  title: TextOrResponsive;
  subtitle: TextOrResponsive;
  description: TextOrResponsive;
  video: {
    youtubeId?: string;
    localSrc?: string;
    poster?: string;
    caption: TextOrResponsive;
  };
  catchCopy?: TextOrResponsive;
  ctaButton: Button;
  eventInfo: {
    boothNumber: TextOrResponsive;
    dates: TextOrResponsive;
    venue: TextOrResponsive;
  };
};
