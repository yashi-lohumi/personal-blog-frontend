import React from 'react';
import * as Icons from 'lucide-react';

export default function ExpertiseCard({ icon: iconName, title, description }) {
  // Dynamically resolve icon from Lucide React
  const IconComponent = Icons[iconName] || Icons.Sparkles;

  return (
    <div className="bg-surface-container-lowest border border-outline-variant p-8 rounded-[16px] hover:shadow-md transition-all duration-300 group">
      <div className="w-14 h-14 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-on-primary transition-all duration-300">
        <IconComponent className="w-7 h-7" />
      </div>
      <h3 className="font-headline-subsection text-headline-subsection mb-4 text-on-surface">
        {title}
      </h3>
      <p className="font-body-base text-body-base text-on-surface-variant leading-relaxed">
        {description}
      </p>
    </div>
  );
}
