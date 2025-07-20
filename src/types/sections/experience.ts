import type { Image } from '../common';
import type { TextOrResponsive } from '../common/responsive-text';

export type StepItem = {
  title: TextOrResponsive;
  description: TextOrResponsive;
  decorativeIcon?: string;
};

export type ExperienceData = {
  title: TextOrResponsive;
  description: TextOrResponsive;
  badge: {
    text: TextOrResponsive;
  };
  images: Image[];
  steps: StepItem[];
};
