import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {

}


export default function Input({ value, onChange, placeholder, required, type, className } : InputProps) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      required={required}
      className={`text-slate-800 bg-slate-200 border rounded border-slate-800 px-4 h-12 ${className}`}
      value={value}
      onChange={onChange}
    />
  );
}
