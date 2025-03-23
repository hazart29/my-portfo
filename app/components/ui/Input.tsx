import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  errorMessage?: string;
}

export const Input: React.FC<InputProps> = ({ label, errorMessage, className, ...props }) => {
  return (
    <div className="space-y-1">
      {label && (
        <label className="block text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
          {label}
        </label>
      )}
      <input
        {...props}
        className={`
          flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm
          file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500
          focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950
          disabled:cursor-not-allowed disabled:opacity-50
          ${errorMessage
            ? 'border-red-500 focus-visible:ring-red-500'
            : 'focus-visible:ring-gray-950'}
          ${className}
        `}
      />
      {errorMessage && <p className="text-xs text-red-500">{errorMessage}</p>}
    </div>
  );
};

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  errorMessage?: string;
}

export const Textarea: React.FC<TextareaProps> = ({ label, errorMessage, className, ...props }) => {
  return (
    <div className="space-y-1">
      {label && (
        <label className="block text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
          {label}
        </label>
      )}
      <textarea
        {...props}
        className={`
          flex w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm
          placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-1
          focus-visible:ring-gray-950 disabled:cursor-not-allowed disabled:opacity-50
          min-h-[80px]
          ${errorMessage
            ? 'border-red-500 focus-visible:ring-red-500'
            : 'focus-visible:ring-gray-950'}
          ${className}
        `}
      />
      {errorMessage && <p className="text-xs text-red-500">{errorMessage}</p>}
    </div>
  );
};