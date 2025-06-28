import { Button } from "@/components/ui/button";
import type { Button as ButtonType } from "../../types/common";

interface CTAButtonProps {
  button: ButtonType;
  size?: "default" | "sm" | "lg";
  className?: string;
}

export default function CTAButton({
  button,
  size = "default",
  className = "",
}: CTAButtonProps) {
  const baseClasses =
    "font-bold rounded-full transform hover:scale-105 transition-all duration-200 h-auto";
  const variantClasses = {
    primary: "text-white shadow-lg hover:scale-105 transition-all duration-200",
    secondary:
      "bg-white shadow-lg border-2 hover:scale-105 transition-all duration-200",
  };

  const primaryStyle = {
    backgroundColor: "var(--orange-9)",
    "--tw-shadow":
      "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
  };

  const secondaryStyle = {
    color: "var(--orange-9)",
    borderColor: "var(--orange-9)",
  };

  const sizeClasses = {
    default: "px-8 py-4",
    sm: "px-6 py-3",
    lg: "px-12 py-5 text-xl",
  };

  const variant = button.variant || "primary";
  const buttonStyle = variant === "primary" ? primaryStyle : secondaryStyle;

  return (
    <Button
      asChild
      size={size}
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      style={buttonStyle}
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
