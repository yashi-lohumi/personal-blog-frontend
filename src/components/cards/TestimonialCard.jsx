import React from 'react';

export default function TestimonialCard({ image, name, designation, quote }) {
  return (
    <div className="bg-surface-container-lowest border border-outline-variant p-8 rounded-[16px] shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between h-full">
      <p className="font-body-large text-body-large text-on-surface-variant italic leading-relaxed mb-8">
        "{quote}"
      </p>
      
      <div className="flex items-center gap-4 pt-6 border-t border-outline-variant/30">
        <div className="w-12 h-12 rounded-full overflow-hidden shrink-0">
          <img className="w-full h-full object-cover" src={image} alt={name} />
        </div>
        <div>
          <h4 className="font-meta-info text-meta-info font-bold text-on-surface">{name}</h4>
          <p className="text-xs text-on-surface-variant font-medium mt-0.5">{designation}</p>
        </div>
      </div>
    </div>
  );
}
