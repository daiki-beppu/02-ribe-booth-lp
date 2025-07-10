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
      <Component className={`md:hidden ${className}`}>{mobile}</Component>
      <Component className={`hidden md:block ${className}`}>
        {desktop}
      </Component>
    </>
  );
}
