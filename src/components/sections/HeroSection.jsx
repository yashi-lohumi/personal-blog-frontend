import React from 'react';
import { ArrowUpRight, Linkedin, Twitter, Github, Mail } from 'lucide-react';

const iconMap = {
  Linkedin: Linkedin,
  Twitter: Twitter,
  Github: Github,
  Mail: Mail
};

export default function HeroSection({
  tagline,
  title,
  description,
  primaryCTA = { label: '', onClick: () => {} },
  secondaryCTA = { label: '', onClick: () => {} },
  image,
  socialLinks = []
}) {
  return (
    <section className="max-w-container-max mx-auto px-gutter py-section-v-space-mobile md:py-section-v-space">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-stack-lg items-center">
        {/* Left: Content panel */}
        <div className="order-2 md:order-1 flex flex-col items-start text-left">
          {tagline && (
            <span className="font-label-caps text-label-caps text-primary uppercase tracking-widest block mb-4 font-semibold">
              {tagline}
            </span>
          )}
          <h1 className="font-display-hero-mobile md:font-display-hero text-display-hero-mobile md:text-display-hero text-on-surface mb-6 leading-tight">
            {title}
          </h1>
          <p className="font-body-large text-body-large text-on-surface-variant mb-10 max-w-xl leading-relaxed">
            {description}
          </p>

          <div className="flex flex-wrap gap-4 mb-8">
            {primaryCTA && primaryCTA.label && (
              <button
                onClick={primaryCTA.onClick}
                className="bg-primary text-on-primary px-8 py-4 rounded-[14px] font-body-base hover:shadow-lg hover:bg-opacity-90 transition-all flex items-center gap-2 active:scale-95 font-semibold"
              >
                {primaryCTA.label} <ArrowUpRight className="w-4 h-4" />
              </button>
            )}
            {secondaryCTA && secondaryCTA.label && (
              <button
                onClick={secondaryCTA.onClick}
                className="border border-outline-variant text-on-surface px-8 py-4 rounded-[14px] font-body-base hover:bg-surface-container transition-all active:scale-95 font-semibold"
              >
                {secondaryCTA.label}
              </button>
            )}
          </div>

          {/* Social connections */}
          {socialLinks && socialLinks.length > 0 && (
            <div className="flex gap-4 items-center">
              <span className="text-xs text-on-surface-variant/60 font-semibold uppercase tracking-wider">Follow online:</span>
              <div className="flex gap-3">
                {socialLinks.map((link, idx) => {
                  const Icon = iconMap[link.iconName] || Mail;
                  return (
                    <a
                      key={idx}
                      href={link.url}
                      aria-label={link.platform}
                      className="w-8 h-8 rounded-full border border-outline-variant flex items-center justify-center hover:bg-surface-variant text-on-surface-variant hover:text-primary transition-colors"
                    >
                      <Icon className="w-4 h-4" />
                    </a>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        {/* Right: Portrait panel */}
        <div className="order-1 md:order-2 flex justify-center">
          <div className="relative w-full aspect-square max-w-sm md:max-w-md lg:max-w-lg">
            <div className="absolute inset-0 bg-primary/5 rounded-[32px] -rotate-3 scale-105"></div>
            <img
              className="relative w-full h-full object-cover rounded-[32px] border border-outline-variant shadow-sm"
              src={image}
              alt="Dr. Elena Vance portrait"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
