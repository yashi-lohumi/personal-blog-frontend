import React from 'react';

export default function ValueCard({ title, description }) {
  return (
    <div className="bg-surface-container-lowest p-8 rounded-[16px] border border-outline-variant hover:border-primary transition-all duration-300 hover:shadow-sm">
      <h5 className="font-headline-subsection text-body-large font-bold mb-2 text-on-surface">
        {title}
      </h5>
      <p className="font-body-base text-on-surface-variant leading-relaxed">
        {description}
      </p>
    </div>
  );
}
