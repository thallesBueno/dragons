import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}


export default function Button({ children, className, ...props} : ButtonProps) {
  return (
    <button
      {...props}
      className={`bg-amber-500 px-4 h-12 rounded-md text-slate-50 font-semibold disabled:bg-amber-200 disabled:cursor-not-allowed ${className}`}
    >
      {children}
    </button>
  );
}
