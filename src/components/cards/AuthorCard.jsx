import React, { useState } from 'react';
import { Linkedin, Twitter, Mail, Check } from 'lucide-react';
import OptimizedImage from '../shared/OptimizedImage';

export default function AuthorCard({ image, name, bio, role }) {
  const [following, setFollowing] = useState(false);

  return (
    <div className="mt-section-v-space pt-12 border-t border-outline-variant flex flex-col md:flex-row items-center gap-stack-lg">
      {/* Author portrait */}
      <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-primary p-1 shrink-0">
        <OptimizedImage
          wrapperClassName="w-full h-full rounded-full"
          className="rounded-full"
          src={image}
          alt={`Portrait of ${name}`}
        />
      </div>

      {/* Profile info */}
      <div className="text-center md:text-left flex-1">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-2">
          <div>
            <h4 className="font-headline-subsection text-headline-subsection mb-0.5">{name}</h4>
            {role && <span className="font-meta-info text-meta-info text-primary font-medium block">{role}</span>}
          </div>
          <button
            onClick={() => setFollowing(!following)}
            className={`px-6 py-2 rounded-full font-meta-info text-meta-info font-bold transition-all duration-200 ${
              following
                ? 'bg-green-600 text-white flex items-center gap-1.5'
                : 'bg-on-surface text-surface hover:bg-primary hover:text-white'
            }`}
          >
            {following ? (
              <>
                <Check className="w-3.5 h-3.5" /> Following
              </>
            ) : (
              'Follow'
            )}
          </button>
        </div>
        
        <p className="font-body-base text-body-base text-on-surface-variant mb-4 leading-relaxed">
          {bio}
        </p>

        {/* Social channels */}
        <div className="flex justify-center md:justify-start gap-4 text-on-surface-variant">
          <a href="#" className="hover:text-primary transition-colors duration-200" aria-label="LinkedIn">
            <Linkedin className="w-5 h-5" />
          </a>
          <a href="#" className="hover:text-primary transition-colors duration-200" aria-label="Twitter">
            <Twitter className="w-5 h-5" />
          </a>
          <a href="#" className="hover:text-primary transition-colors duration-200" aria-label="Email">
            <Mail className="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  );
}
