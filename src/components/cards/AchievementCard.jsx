import React from 'react';

export default function AchievementCard({ category, title, description }) {
  return (
    <div className="p-8 border-l-4 border-primary bg-surface-container-low rounded-r-xl transition-all duration-300 hover:shadow-sm hover:border-l-8">
      <span className="font-label-caps text-label-caps text-primary block mb-2 uppercase tracking-wider font-semibold">
        {category}
      </span>
      <h4 className="font-headline-subsection text-on-surface mb-4 leading-tight">
        {title}
      </h4>
      <p className="font-body-base text-on-surface-variant leading-relaxed">
        {description}
      </p>
    </div>
  );
}
