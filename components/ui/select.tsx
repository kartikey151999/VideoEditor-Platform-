
// components/ui/select.tsx
'use client';

import React from 'react';
import { cn } from '@/lib/utils'; // Utility for conditional class names (optional)

interface SelectProps {
  defaultValue: string;
  children: React.ReactNode;
  onChange?: (value: string) => void;
}

interface SelectTriggerProps {
  children: React.ReactNode;
  className?: string;
}

interface SelectContentProps {
  children: React.ReactNode;
}

interface SelectItemProps {
  value: string;
  children: React.ReactNode;
}

export const Select = ({ defaultValue, children, onChange }: SelectProps) => {
  return (
    <div className="relative">
      {React.Children.map(children, (child) =>
        React.cloneElement(child as React.ReactElement, { onChange, defaultValue })
      )}
    </div>
  );
};

export const SelectTrigger = ({ children, className }: SelectTriggerProps) => {
  return (
    <div
      className={cn(
        'relative w-full cursor-pointer text-gray-900 bg-gray-100 p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-600',
        className
      )}
    >
      {children}
    </div>
  );
};

export const SelectContent = ({ children }: SelectContentProps) => {
  return (
    <div className="absolute left-0 right-0 z-10 mt-1 bg-white rounded-lg shadow-lg border border-gray-300">
      {children}
    </div>
  );
};

export const SelectItem = ({ value, children }: SelectItemProps) => {
  return (
    <div
      className="cursor-pointer px-4 py-2 text-gray-900 hover:bg-gray-100"
      onClick={() => alert(`Selected: ${value}`)} // Can be customized to set the value
    >
      {children}
    </div>
  );
};

export const SelectValue = ({ placeholder }: { placeholder: string }) => {
  return (
    <div className="flex items-center text-gray-500">
      {placeholder}
    </div>
  );
};
