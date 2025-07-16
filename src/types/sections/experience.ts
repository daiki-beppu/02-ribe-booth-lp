import type { Image } from '../common';
import type { TextOrResponsive } from '../common/responsive-text';

export type StepItem = {
  icon: string;
  title: TextOrResponsive;
  description: TextOrResponsive;
  decorativeIcon?: string;
};

export type ExperienceData = {
  title: TextOrResponsive;
  description: TextOrResponsive;
  badge: {
    text: TextOrResponsive;
    variant: string;
  };
  images: Image[];
  steps: StepItem[];
};
