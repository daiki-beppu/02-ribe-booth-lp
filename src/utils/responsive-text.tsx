import type { ReactNode } from 'react';
import ResponsiveText from '../components/common/responsive-text';
import type { TextOrResponsive } from '../types/common/responsive-text';
import { isResponsiveText } from '../types/common/responsive-text';

/**
 * レスポンシブテキストまたは通常のテキストをレンダリングするヘルパー関数
 */
export function renderResponsiveText(
  text: TextOrResponsive,
  className?: string,
  as?: 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'span' | 'div'
): ReactNode {
  if (isResponsiveText(text)) {
    return (
      <ResponsiveText
        as={as}
        className={className}
        desktop={text.desktop}
        mobile={text.mobile}
      />
    );
  }

  const Component = as || 'span';
  return <Component className={className}>{text}</Component>;
}

/**
 * レスポンシブテキストから文字列を取得するヘルパー関数（メタデータなどで使用）
 */
export function getTextString(
  text: TextOrResponsive,
  preferDesktop = true
): string {
  if (isResponsiveText(text)) {
    return preferDesktop ? text.desktop : text.mobile;
  }
  return text;
}
