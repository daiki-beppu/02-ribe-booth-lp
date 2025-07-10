import type { Image } from '../common';
import type { TextOrResponsive } from '../common/responsive-text';

export type FeatureItem = {
  icon: string;
  title: TextOrResponsive;
  description: TextOrResponsive;
};

export type ConceptData = {
  title: TextOrResponsive;
  description: TextOrResponsive;
  image: Image;
  features: FeatureItem[];
};
