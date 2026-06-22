import React from 'react';

export default function StatCard({ icon: Icon, number, label }) {
  return (
    <div className="bg-surface-container-lowest border border-outline-variant p-8 rounded-xl shadow-sm flex flex-col items-center text-center transition-all duration-300 hover:shadow-md hover:-translate-y-1">
      {Icon && (
        <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-4">
          <Icon className="w-6 h-6" />
        </div>
      )}
      <span className="font-display-hero-mobile text-display-hero-mobile text-primary font-bold block mb-2">{number}</span>
      <span className="font-meta-info text-meta-info text-on-surface-variant uppercase tracking-wider font-semibold">{label}</span>
    </div>
  );
}
