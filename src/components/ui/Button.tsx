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
  const baseStyles = "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50";
  
  const variants = {
    primary: "bg-primary text-white hover:bg-primary-dark",
    secondary: "bg-secondary text-white hover:bg-secondary/90",
    outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
    ghost: "hover:bg-muted hover:text-foreground",
  };
  
  const sizes = {
    sm: "h-8 px-3 text-xs",
    md: "h-10 px-4 py-2",
    lg: "h-12 px-6 py-3 text-lg",
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
