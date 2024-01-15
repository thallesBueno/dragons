import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {

}


export default function Button({ type, children } : ButtonProps) {
  return (
    <button
      type={type}
      className="bg-slate-600 px-4 h-12 rounded-md text-slate-100 font-semibold"
    >
      {children}
    </button>
  );
}
