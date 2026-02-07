import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost';
  icon?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  icon = false,
  className = '',
  ...props
}) => {
  const baseStyles = "inline-flex items-center justify-center px-8 py-3 transition-all duration-300 ease-out text-sm tracking-widest uppercase font-sans font-medium rounded-sm";

  const variants = {
    primary: "bg-brown-900 text-cream-50 hover:bg-brown-800 hover:shadow-lg hover:-translate-y-1",
    outline: "border border-brown-900 text-brown-900 hover:bg-brown-900 hover:text-cream-50",
    ghost: "text-brown-800 hover:text-brown-900 underline underline-offset-4 decoration-1 hover:decoration-gold-500",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
      {icon && <ArrowRight className="ml-2 w-4 h-4" />}
    </button>
  );
};
