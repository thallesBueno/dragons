import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}


export default function Button({ children, ...props} : ButtonProps) {
  return (
    <button
      {...props}
      className="bg-slate-600 px-4 h-12 rounded-md text-slate-100 font-semibold disabled:bg-slate-400 disabled:cursor-not-allowed"
    >
      {children}
    </button>
  );
}
