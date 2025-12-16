import React, { ReactNode } from 'react';

interface SectionProps {
  id?: string;
  className?: string;
  children: ReactNode;
  light?: boolean;
}

export const Section: React.FC<SectionProps> = ({ id, className = "", children, light = false }) => {
  return (
    <section 
      id={id} 
      className={`py-20 px-4 md:px-8 lg:px-16 ${light ? 'bg-brand-soft text-brand-dark' : 'bg-brand-dark text-white'} ${className}`}
    >
      <div className="max-w-7xl mx-auto">
        {children}
      </div>
    </section>
  );
};

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ children, variant = 'primary', fullWidth, className = '', ...props }) => {
  const baseStyle = "inline-flex items-center justify-center px-8 py-3 rounded-full font-heading font-bold transition-all duration-300 transform hover:scale-105 shadow-lg";
  
  const variants = {
    primary: "bg-brand-accent text-brand-dark hover:bg-white hover:shadow-brand-accent/50",
    secondary: "bg-brand-soft text-brand-dark hover:bg-white",
    outline: "border-2 border-brand-accent text-brand-accent hover:bg-brand-accent hover:text-brand-dark"
  };

  return (
    <button 
      className={`${baseStyle} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export const SectionTitle: React.FC<{ title: string; subtitle?: string; light?: boolean }> = ({ title, subtitle, light }) => (
  <div className="mb-12 text-center">
    <h2 className={`text-4xl md:text-5xl font-heading font-bold mb-4 ${light ? 'text-brand-dark' : 'text-white'}`}>
      {title}
    </h2>
    <div className={`h-1 w-24 mx-auto rounded mb-4 ${light ? 'bg-brand-accent' : 'bg-brand-accent'}`}></div>
    {subtitle && (
      <p className={`text-xl max-w-2xl mx-auto ${light ? 'text-gray-600' : 'text-gray-300'}`}>
        {subtitle}
      </p>
    )}
  </div>
);

export const Card: React.FC<{ children: ReactNode; className?: string }> = ({ children, className = '' }) => (
  <div className={`bg-brand-slate border border-brand-accent/10 rounded-2xl p-6 md:p-8 hover:border-brand-accent/50 transition-colors duration-300 shadow-xl ${className}`}>
    {children}
  </div>
);