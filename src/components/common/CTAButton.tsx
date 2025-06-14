import { Button } from "@/components/ui/button";
import type { Button as ButtonType } from "../../types/common";

interface CTAButtonProps {
  button: ButtonType;
  size?: "default" | "sm" | "lg";
  className?: string;
}

export default function CTAButton({ button, size = "default", className = "" }: CTAButtonProps) {
  const baseClasses = "font-bold rounded-full transform hover:scale-105 transition-all duration-200 h-auto";
  const variantClasses = {
    primary: "bg-blue-600 hover:bg-blue-700 text-white shadow-lg",
    secondary: "bg-white text-orange-600 hover:bg-gray-100"
  };

  const sizeClasses = {
    default: "px-8 py-4",
    sm: "px-6 py-3",
    lg: "px-12 py-5 text-xl"
  };

  return (
    <Button
      asChild
      size={size}
      className={`${baseClasses} ${variantClasses[button.variant || 'primary']} ${sizeClasses[size]} ${className}`}
    >
      <a
        href={button.href}
        target={button.external ? "_blank" : undefined}
        rel={button.external ? "noopener noreferrer" : undefined}
      >
        {button.text}
      </a>
    </Button>
  );
}