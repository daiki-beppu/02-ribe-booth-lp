import type { Image } from '../common';

export type FeatureItem = {
  icon: string;
  title: string;
  description: string;
}

export type ConceptData = {
  title: string;
  description: string;
  image: Image;
  features: FeatureItem[];
}