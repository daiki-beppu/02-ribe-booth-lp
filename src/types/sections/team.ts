export type DetailItem = {
  icon: string;
  text: string;
}

export type TeamMember = {
  name: string;
  title: string;
  experience: string;
  skills: string[];
  description: string;
  avatar?: string;
  color: string;
  badge?: string;
  details: DetailItem[];
  message: string;
  isLeader?: boolean;
  colSpan?: number;
}

export type TeamData = {
  title: string;
  description: string;
  members: TeamMember[];
  finalMessage: {
    title: string;
    description: string;
  };
}