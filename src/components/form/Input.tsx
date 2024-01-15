import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export default function Input({ className, ...props} : InputProps) {
  return (
    <input
      className={`text-slate-800 border rounded border-slate-800 px-4 h-12 disabled:cursor-not-allowed ${className}`}
      {...props}
    />
  );
}
