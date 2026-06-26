import React from 'react';
import * as Icons from 'lucide-react';

export default function SocialIconCard({ platform, url, handle, iconName }) {
  // Dynamically resolve icon from lucide-react if passed
  const IconComponent = Icons[iconName] || Icons.Share2;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col items-center justify-center p-10 bg-surface-container-lowest border border-outline-variant rounded-xl hover:border-primary hover:shadow-md transition-all duration-300 text-center"
    >
      <IconComponent className="w-10 h-10 text-secondary group-hover:text-primary mb-4 transition-colors duration-300" />
      <span className="font-meta-info text-meta-info font-bold text-on-surface block mb-1">{platform}</span>
      <span className="text-xs text-on-surface-variant font-medium opacity-70 group-hover:opacity-100 transition-opacity">{handle}</span>
    </a>
  );
}
