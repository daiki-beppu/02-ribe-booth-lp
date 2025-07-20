import type { Button, Image } from '../common';
import type { TextOrResponsive } from '../common/responsive-text';

export type FreeService = {
  icon: string;
  title: string;
  description: TextOrResponsive;
  borderColor: string;
  target?: string;
  image?: Image;
};

export type Product = {
  id: string;
  name: string;
  price: number;
  description: string[];
  target: string;
  borderColor: string;
  priceColor: string;
  badgeColor: string;
  badge?: {
    text: string;
    color: string;
  };
  image?: Image;
};

export type PricingData = {
  title: string;
  description: string;
  freeServices: FreeService[];
  products: Product[];
  finalCta: {
    title: string;
    button: Button;
    subtitle: string;
  };
};
