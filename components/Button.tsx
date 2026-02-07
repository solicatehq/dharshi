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
  const baseStyles = "inline-flex items-center justify-center px-8 py-3 transition-all duration-300 ease-out text-sm tracking-widest uppercase font-sans font-medium";
  
  const variants = {
    primary: "bg-stone-800 text-beige-100 hover:bg-stone-700",
    outline: "border border-stone-800 text-stone-800 hover:bg-stone-800 hover:text-beige-100",
    ghost: "text-stone-600 hover:text-stone-900 underline underline-offset-4 decoration-1",
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
