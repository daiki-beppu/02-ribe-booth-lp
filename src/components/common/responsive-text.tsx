interface ResponsiveTextProps {
  mobile: string;
  desktop: string;
  className?: string;
  as?: 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'span' | 'div';
}

export default function ResponsiveText({
  mobile,
  desktop,
  className = '',
  as: Component = 'span',
}: ResponsiveTextProps) {
  return (
    <>
      <Component className={`whitespace-pre-line md:hidden ${className}`}>
        {mobile}
      </Component>
      <Component className={`hidden whitespace-pre-line md:block ${className}`}>
        {desktop}
      </Component>
    </>
  );
}
