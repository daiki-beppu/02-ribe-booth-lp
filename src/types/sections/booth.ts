// ブース詳細の型定義

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
  title: string;
  description: string;
  icon: string;
  details: string[];
  image?: string;
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
  label: string;
  target: string;
  description: string;
  topics: string[];
};

export type BoothData = {
  title: string;
  description: string;
  activities: BoothActivity[];
  consultation: {
    title: string;
    description: string;
    features: string[];
    targets: ConsultationTarget[];
  };
  products: BoothProduct[];
  events: BoothGameEvent[];
  detailedSchedule: BoothDetailedSchedule;
};
