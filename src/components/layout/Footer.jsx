import React from 'react';
import { Link } from 'react-router-dom';
import { Share2, Mail, Globe } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full py-section-v-space px-gutter max-w-container-max mx-auto flex flex-col gap-stack-lg bg-surface-container-lowest border-t border-outline-variant">
      <div className="flex flex-col md:flex-row justify-between items-start gap-12">
        <div className="max-w-xs">
          <div className="font-headline-subsection text-headline-subsection font-bold text-on-surface mb-stack-sm">
            TechVisionary
          </div>
          <p className="font-meta-info text-meta-info text-on-surface-variant leading-relaxed">
            Pioneering thoughts on the intersection of humanity and technology. Curated insights for the modern visionary founder.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-12 md:gap-16">
          {/* Column 1 */}
          <div className="flex flex-col gap-stack-sm">
            <span className="font-label-caps text-label-caps text-on-surface font-bold uppercase tracking-wider block mb-2">Platform</span>
            <Link to="/" className="font-meta-info text-meta-info text-on-surface-variant hover:text-primary transition-colors">Home</Link>
            <Link to="/blogs" className="font-meta-info text-meta-info text-on-surface-variant hover:text-primary transition-colors">Blogs</Link>
            <Link to="/about" className="font-meta-info text-meta-info text-on-surface-variant hover:text-primary transition-colors">About</Link>
            <Link to="/contact" className="font-meta-info text-meta-info text-on-surface-variant hover:text-primary transition-colors">Contact</Link>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col gap-stack-sm">
            <span className="font-label-caps text-label-caps text-on-surface font-bold uppercase tracking-wider block mb-2">Legal</span>
            <a href="#" className="font-meta-info text-meta-info text-on-surface-variant hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="font-meta-info text-meta-info text-on-surface-variant hover:text-primary transition-colors">Terms of Service</a>
            <a href="#" className="font-meta-info text-meta-info text-on-surface-variant hover:text-primary transition-colors">RSS Feed</a>
          </div>

          {/* Column 3 */}
          <div className="flex flex-col gap-stack-sm hidden md:flex">
            <span className="font-label-caps text-label-caps text-on-surface font-bold uppercase tracking-wider block mb-2">Socials</span>
            <a href="#" className="font-meta-info text-meta-info text-on-surface-variant hover:text-primary transition-colors">LinkedIn</a>
            <a href="#" className="font-meta-info text-meta-info text-on-surface-variant hover:text-primary transition-colors">X / Twitter</a>
            <a href="#" className="font-meta-info text-meta-info text-on-surface-variant hover:text-primary transition-colors">GitHub</a>
          </div>
        </div>
      </div>

      <div className="pt-8 border-t border-outline-variant flex flex-col md:flex-row justify-between items-center gap-6">
        <span className="font-meta-info text-meta-info text-on-surface-variant opacity-90">
          © {new Date().getFullYear()} TechVisionary. All rights reserved.
        </span>
        <div className="flex gap-6 items-center">
          <div className="flex gap-4">
            <a
              href="#"
              aria-label="LinkedIn"
              className="w-10 h-10 rounded-full border border-outline-variant flex items-center justify-center hover:bg-surface-variant text-on-surface-variant hover:text-primary transition-colors"
            >
              <Share2 className="w-5 h-5" />
            </a>
            <a
              href="#"
              aria-label="Email"
              className="w-10 h-10 rounded-full border border-outline-variant flex items-center justify-center hover:bg-surface-variant text-on-surface-variant hover:text-primary transition-colors"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
          <div className="flex gap-2 items-center text-on-surface-variant font-meta-info text-meta-info">
            <Globe className="w-4 h-4" />
            <span>English (US)</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
