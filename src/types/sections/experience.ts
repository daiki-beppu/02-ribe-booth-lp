import type { Image } from '../common';

export type StepItem = {
  icon: string;
  title: string;
  description: string;
};

export type ExperienceData = {
  title: string;
  description: string;
  badge: {
    text: string;
    variant: string;
  };
  images: Image[];
  steps: StepItem[];
};
