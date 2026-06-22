import React, { useState } from 'react';
import { Linkedin, Twitter, Link, Check } from 'lucide-react';

export default function SocialShare({ url = window.location.href, title = '' }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const encodedTitle = encodeURIComponent(title);
  const encodedUrl = encodeURIComponent(url);

  return (
    <div className="flex gap-stack-sm items-center">
      <a
        href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Share on LinkedIn"
        className="w-10 h-10 flex items-center justify-center rounded-lg border border-outline-variant hover:bg-white hover:text-primary transition-all duration-200"
      >
        <Linkedin className="w-5 h-5" />
      </a>
      <a
        href={`https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Share on X"
        className="w-10 h-10 flex items-center justify-center rounded-lg border border-outline-variant hover:bg-white hover:text-primary transition-all duration-200"
      >
        <Twitter className="w-5 h-5" />
      </a>
      <button
        onClick={handleCopy}
        aria-label="Copy article link"
        className="w-10 h-10 flex items-center justify-center rounded-lg border border-outline-variant hover:bg-white hover:text-primary relative transition-all duration-200"
      >
        {copied ? (
          <>
            <Check className="w-5 h-5 text-green-600 animate-scale" />
            <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-inverse-surface text-inverse-on-surface text-[10px] py-1 px-2 rounded whitespace-nowrap opacity-90 transition-opacity">
              Copied!
            </span>
          </>
        ) : (
          <Link className="w-5 h-5" />
        )}
      </button>
    </div>
  );
}
