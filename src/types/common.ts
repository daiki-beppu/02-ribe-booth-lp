// 共通型定義
export type Image = {
  src: string;
  alt: string;
  caption?: string;
};

export type Button = {
  text: string;
  href: string;
  variant?: "primary" | "secondary";
  external?: boolean;
};
