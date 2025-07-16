// ブース詳細の型定義
import type { TextOrResponsive } from '../common/responsive-text';

export type BoothProduct = {
  name: string;
  price: string;
  description: string;
  features: string[];
  image?: string;
};

export type BoothGameEvent = {
  name: string;
  description: string;
  prizes: string[];
  rules: string[];
  schedule?: string;
};

export type BoothActivity = {
  title: TextOrResponsive;
  description: TextOrResponsive;
  icon: string;
  details: string[];
  image?: string;
  points?: BoothPoint[];
  steps?: BoothStep[];
};

export type BoothPoint = {
  icon: string;
  title: TextOrResponsive;
  description: TextOrResponsive;
  color: string;
};

export type BoothStep = {
  title: TextOrResponsive;
  description: TextOrResponsive;
  icon: string;
};

export type BoothTimeSlot = {
  time: string;
  activity: string;
  type: 'preparation' | 'experience' | 'consultation' | 'event' | 'cleanup';
};

export type BoothDetailedSchedule = {
  title: string;
  description: string;
  timeSlots: BoothTimeSlot[];
};

export type ConsultationTarget = {
  id: 'A' | 'B' | 'C';
  label: TextOrResponsive;
  target: TextOrResponsive;
  description: TextOrResponsive;
  topics: string[];
};

export type BoothSectionInfo = {
  title: TextOrResponsive;
  description: TextOrResponsive;
  icon: string;
};

export type BoothData = {
  title: TextOrResponsive;
  description: TextOrResponsive;
  headerIcon: string;
  sections: {
    experience: BoothSectionInfo;
    products: BoothSectionInfo;
    events: BoothSectionInfo;
  };
  activities: BoothActivity[];
  consultation: {
    title: TextOrResponsive;
    description: TextOrResponsive;
    features: string[];
    targets: ConsultationTarget[];
  };
  products: BoothProduct[];
  events: BoothGameEvent[];
  detailedSchedule: BoothDetailedSchedule;
};
