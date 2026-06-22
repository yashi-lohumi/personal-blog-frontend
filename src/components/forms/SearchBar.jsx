import React from 'react';
import { Search } from 'lucide-react';

export default function SearchBar({ placeholder = 'Search articles...', value, onChange }) {
  return (
    <div className="relative w-full md:w-80">
      <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-outline pointer-events-none" />
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full pl-12 pr-4 py-3 bg-surface-container-lowest border border-outline-variant rounded-lg font-body-base text-on-surface placeholder:text-outline focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-none shadow-sm"
      />
    </div>
  );
}
