import { Button } from '@/components/ui/button';
import type { Button as ButtonType } from '../../types/common';

interface CTAButtonProps {
  button: ButtonType;
  size?: 'default' | 'sm' | 'lg';
  className?: string;
}

export default function CTAButton({
  button,
  size = 'default',
  className = '',
}: CTAButtonProps) {
  const baseClasses =
    'font-bold rounded-full transform hover:scale-110 transition-all duration-300 h-auto animate-pulse hover:animate-none relative overflow-hidden';
  const variantClasses = {
    primary:
      'text-white shadow-2xl hover:shadow-3xl hover:scale-110 transition-all duration-300 border-4 border-orange-300',
    secondary:
      'bg-white shadow-2xl border-4 hover:scale-110 transition-all duration-300',
  };

  const primaryStyle = {
    background:
      'linear-gradient(135deg, #ff4500 0%, #ff6b35 30%, #ff8c42 70%, #ff4500 100%)',
    backgroundSize: '200% 200%',
    animation: 'gradient-shift 3s ease infinite',
    '--tw-shadow':
      '0 0 30px rgba(255, 69, 0, 0.9), 0 0 60px rgba(255, 107, 53, 0.7), 0 25px 50px -12px rgba(255, 107, 53, 0.6)',
    filter: 'brightness(1.1)',
  };

  const secondaryStyle = {
    color: 'var(--orange-9)',
    borderColor: 'var(--orange-9)',
    '--tw-shadow':
      '0 20px 40px -12px rgba(255, 107, 53, 0.6), 0 8px 16px -5px rgba(255, 107, 53, 0.3)',
  };

  const sizeClasses = {
    default: 'px-8 py-4 text-lg',
    sm: 'px-6 py-3',
    lg: 'px-16 py-6 text-2xl font-extrabold',
  };

  const variant = button.variant || 'primary';
  const buttonStyle = variant === 'primary' ? primaryStyle : secondaryStyle;

  return (
    <div className="group relative">
      <Button
        asChild
        className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
        size={size}
        style={buttonStyle}
      >
        <a
          href={button.href}
          rel={button.external ? 'noopener noreferrer' : undefined}
          target={button.external ? '_blank' : undefined}
        >
          <span className="relative z-10 flex items-center justify-center gap-2">
            <span className="animate-bounce">🎯</span>
            {button.text}
            <span className="animate-bounce" style={{ animationDelay: '0.5s' }}>
              ✨
            </span>
          </span>
          {/* キラキラエフェクト */}
          <div className="absolute inset-0 animate-pulse rounded-full bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-90" />
          {/* 内側グロー効果 */}
          <div className="absolute inset-1 rounded-full bg-gradient-to-r from-yellow-300/60 via-orange-200/40 to-yellow-300/60 opacity-50 blur-sm transition-opacity duration-300 group-hover:opacity-80" />
          {/* 外側グロー効果 */}
          <div className="-inset-4 absolute animate-pulse rounded-full bg-orange-500/50 opacity-70 blur-xl transition-all duration-500 group-hover:opacity-100" />
        </a>
      </Button>
    </div>
  );
}
