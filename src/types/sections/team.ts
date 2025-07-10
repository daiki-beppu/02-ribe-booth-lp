import type { TextOrResponsive } from '../common/responsive-text';

export type DetailItem = {
  icon: string;
  text: TextOrResponsive;
};

export type PortfolioItem = {
  title: TextOrResponsive;
  description: TextOrResponsive;
  image?: string;
  headerImage?: string;
  url?: string;
  github?: string;
  technologies: string[];
  type: 'service' | 'portfolio' | 'project';
};

// ホーム用の簡易プロフィール
export type TeamMemberBasic = {
  name: string;
  title: TextOrResponsive;
  experience: TextOrResponsive;
  skills: string[];
  description: TextOrResponsive;
  avatar?: string;
  color: string;
  badge?: string;
  isLeader?: boolean;
  colSpan?: number;
};

// メンバー詳細ページ用の拡張プロフィール
export type TeamMember = TeamMemberBasic & {
  details: DetailItem[];
  message: TextOrResponsive;
  portfolio?: PortfolioItem[];
};

export type TeamData = {
  title: TextOrResponsive;
  description: TextOrResponsive;
  members: TeamMember[];
  finalMessage: {
    title: TextOrResponsive;
    description: TextOrResponsive;
  };
};

// ホーム用のTeamData型
export type TeamDataBasic = {
  title: TextOrResponsive;
  description: TextOrResponsive;
  members: TeamMemberBasic[];
  finalMessage: {
    title: TextOrResponsive;
    description: TextOrResponsive;
  };
};
