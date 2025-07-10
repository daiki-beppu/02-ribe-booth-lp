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
  image?: Image;
};

export type PricingData = {
  title: string;
  description: string;
  freeServices: FreeService[];
  freeServicesImage: Image;
  products: Product[];
  applicationForm: {
    title: string;
    description: string;
    button: Button;
  };
  finalCta: {
    title: string;
    button: Button;
    subtitle: string;
  };
};
