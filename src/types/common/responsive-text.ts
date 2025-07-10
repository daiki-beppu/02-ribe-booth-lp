export interface ResponsiveText {
  mobile: string;
  desktop: string;
}

export type TextOrResponsive = string | ResponsiveText;

export function isResponsiveText(
  text: TextOrResponsive
): text is ResponsiveText {
  return typeof text === 'object' && 'mobile' in text && 'desktop' in text;
}
