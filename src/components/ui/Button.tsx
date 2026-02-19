import React, { ButtonHTMLAttributes } from "react";
import Link from "next/link";
import classNames from "classnames";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  fullWidth?: boolean;
  children: React.ReactNode;
  className?: string;
}

const Button = ({
  variant = "primary",
  size = "md",
  href,
  fullWidth = false,
  className = "",
  children,
  ...props
}: ButtonProps) => {
  const baseStyles = [
    "inline-flex items-center justify-center font-medium font-mono text-sm tracking-wide",
    "transition-all duration-200 ease-out",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
    "disabled:pointer-events-none disabled:opacity-50",
    "relative overflow-hidden",
  ].join(" ");

  const variants = {
    primary: [
      "bg-primary text-background",
      "hover:bg-primary-dark hover:shadow-lg hover:shadow-primary-glow",
      "active:scale-[0.98]",
      "border border-primary/20",
    ].join(" "),
    secondary: [
      "bg-secondary text-background",
      "hover:bg-secondary/90 hover:shadow-lg hover:shadow-secondary-glow",
      "active:scale-[0.98]",
      "border border-secondary/20",
    ].join(" "),
    outline: [
      "border border-border bg-transparent text-foreground",
      "hover:bg-muted hover:border-primary/50 hover:text-primary",
      "active:scale-[0.98]",
    ].join(" "),
    ghost: [
      "bg-transparent text-foreground",
      "hover:bg-muted hover:text-foreground",
      "active:scale-[0.98]",
    ].join(" "),
  };

  const sizes = {
    sm: "h-8 px-3 text-xs rounded",
    md: "h-10 px-5 py-2 rounded",
    lg: "h-12 px-7 py-3 text-sm rounded-md",
  };

  const buttonClasses = classNames(
    baseStyles,
    variants[variant],
    sizes[size],
    fullWidth ? "w-full" : "",
    className
  );

  if (href) {
    return (
      <Link
        href={href}
        className={buttonClasses}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      className={buttonClasses}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
