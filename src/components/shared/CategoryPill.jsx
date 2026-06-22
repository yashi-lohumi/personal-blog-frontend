import React from 'react';

export default function CategoryPill({ name, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-1.5 rounded-full font-label-caps text-label-caps tracking-widest uppercase transition-colors duration-200 ${
        active
          ? 'bg-primary text-on-primary'
          : 'bg-surface-container border border-outline-variant text-on-surface-variant hover:bg-surface-variant'
      }`}
    >
      {name}
    </button>
  );
}
