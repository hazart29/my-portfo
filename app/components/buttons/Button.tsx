import React from 'react';

interface ButtonProps {
  variant?: 'outline' | 'default';
  className?: string;
  children: React.ReactNode;
  [key: string]: unknown;
}

const cn = (...args: (string | undefined)[]) => args.filter(Boolean).join(' ');

const Button: React.FC<ButtonProps> = ({ variant = 'default', className, children, ...props }) => {
  const baseClasses = "px-4 py-2 rounded font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors";
  let variantClasses = "";

  switch (variant) {
    case "outline":
      variantClasses = "border border-current text-current";
      break;
    default:
      variantClasses = "bg-purple-500/20 text-purple-300 border-purple-500/30 hover:bg-purple-500/30 hover:text-purple-200";
  }

  const combinedClasses = cn(baseClasses, variantClasses, className);

  return (
    <button className={combinedClasses} {...props}>
      {children}
    </button>
  );
};

export default Button;