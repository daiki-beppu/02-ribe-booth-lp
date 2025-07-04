export type DetailItem = {
  icon: string;
  text: string;
};

export type PortfolioItem = {
  title: string;
  description: string;
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
  title: string;
  experience: string;
  skills: string[];
  description: string;
  avatar?: string;
  color: string;
  badge?: string;
  isLeader?: boolean;
  colSpan?: number;
};

// メンバー詳細ページ用の拡張プロフィール
export type TeamMember = TeamMemberBasic & {
  details: DetailItem[];
  message: string;
  portfolio?: PortfolioItem[];
};

export type TeamData = {
  title: string;
  description: string;
  members: TeamMember[];
  finalMessage: {
    title: string;
    description: string;
  };
};

// ホーム用のTeamData型
export type TeamDataBasic = {
  title: string;
  description: string;
  members: TeamMemberBasic[];
  finalMessage: {
    title: string;
    description: string;
  };
};
