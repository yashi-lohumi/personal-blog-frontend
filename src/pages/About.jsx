import React from 'react';
import { useNavigate } from 'react-router-dom';
import HeroSection from '../components/sections/HeroSection';
import Timeline from '../components/sections/Timeline';
import ExpertiseCard from '../components/cards/ExpertiseCard';
import AchievementCard from '../components/cards/AchievementCard';
import ValueCard from '../components/cards/ValueCard';
import FadeIn from '../components/shared/FadeIn';
import { timelineMilestones } from '../data/timeline';
import { achievements, values, expertise } from '../data/constants';

export default function About() {
  const navigate = useNavigate();

  const handleConnect = () => {
    navigate('/contact');
  };

  const handleViewArticles = () => {
    navigate('/blogs');
  };

  return (
    <div className="flex flex-col gap-6 overflow-hidden">
      {/* 1. About Hero Section */}
      <FadeIn>
        <HeroSection
          tagline="Visionary Thought Leader"
          title="Founder • Consultant • Investor"
          description="Bridging the gap between frontier technology and human-centric enterprise. Helping high-growth startups scale with intentionality and technical rigor."
          primaryCTA={{
            label: "Connect",
            onClick: handleConnect
          }}
          secondaryCTA={{
            label: "View Articles",
            onClick: handleViewArticles
          }}
          image="https://lh3.googleusercontent.com/aida-public/AB6AXuC8tEX9H_-zaZQLiZJS3i9Ez3_EoOqj6GXXBJ5eaPpXqczR0l0yc_SLCLDXBjX014iqgsZko6v4pelSNH8XI6at7ie3SHU5CwWNzaL0CPPfbibH_dq57YewtGvez0DhTstKtnxzzrGalhoGIS_kC-Fx1lOkJ_dZEFQKwIXHA2aDoOvwv2IabVmB2j9Iy8goJ5pdPm43Ou_tYg3aBAT1--5XAzY2MwtpnjkICKtSUk-0nz3MVGCXuxM2VlSC0VagOOH9mB9io0Ea-rVr"
        />
      </FadeIn>

      {/* 2. Professional Story Biography Section */}
      <FadeIn>
        <section className="bg-surface-container-low py-section-v-space-mobile md:py-section-v-space">
          <div className="max-w-[720px] mx-auto px-gutter text-left">
            <h2 className="font-headline-section text-headline-section text-on-surface mb-8 font-bold leading-tight">
              A Philosophy of Radical Transparency
            </h2>
            <div className="space-y-6 text-body-large text-on-surface-variant leading-relaxed">
              <p>
                In an era dominated by fleeting trends and superficial metrics, I've spent the last decade advocating for a different approach: one rooted in intellectual depth and structural integrity. My journey began in the trenches of early-stage software engineering, where I learned that the most elegant solutions are often those that prioritize the end-user's cognitive load over complex feature sets.
              </p>
              <p>
                Today, my work exists at the intersection of venture capital and strategic consulting. Whether I am advising a seed-stage AI startup or helping a legacy institution modernize its tech stack, the goal remains the same: to build resilient systems that empower people to do their best work. I believe that technology should be invisible, enabling human potential rather than demanding its attention.
              </p>
            </div>
          </div>
        </section>
      </FadeIn>

      {/* 3. Core Expertise Grid */}
      <FadeIn>
        <section className="max-w-container-max mx-auto px-gutter py-section-v-space-mobile md:py-section-v-space">
          <div className="text-center mb-16">
            <span className="font-label-caps text-label-caps text-primary uppercase tracking-widest block mb-4 font-semibold">
              Capabilities
            </span>
            <h2 className="font-headline-section text-headline-section text-on-surface font-bold">
              Core Expertise
            </h2>
            <div className="h-1 w-24 bg-primary mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {expertise.map((exp, idx) => (
              <ExpertiseCard
                key={idx}
                icon={exp.iconName}
                title={exp.title}
                description={exp.description}
              />
            ))}
          </div>
        </section>
      </FadeIn>

      {/* 4. Professional Timeline Section */}
      <FadeIn>
        <Timeline milestones={timelineMilestones} layout="vertical" />
      </FadeIn>

      {/* 5. Achievements Section */}
      <FadeIn>
        <section className="max-w-container-max mx-auto px-gutter py-section-v-space-mobile md:py-section-v-space">
          <div className="text-center md:text-left mb-12">
            <span className="font-label-caps text-label-caps text-primary uppercase tracking-widest block mb-2 font-semibold">
              Milestones
            </span>
            <h2 className="font-headline-section text-headline-section text-on-surface font-bold">
              Key Achievements
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {achievements.map((ach, idx) => (
              <AchievementCard
                key={idx}
                category={ach.category}
                title={ach.title}
                description={ach.description}
              />
            ))}
          </div>
        </section>
      </FadeIn>

      {/* 6. Values Grid */}
      <FadeIn>
        <section className="bg-surface py-section-v-space-mobile md:py-section-v-space border-t border-outline-variant/30">
          <div className="max-w-container-max mx-auto px-gutter">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              <div className="lg:col-span-4 text-left">
                <span className="font-label-caps text-label-caps text-primary uppercase tracking-widest block mb-4 font-semibold">
                  Principles
                </span>
                <h2 className="font-headline-section text-headline-section text-on-surface font-bold mb-4">
                  Core Values
                </h2>
                <p className="font-body-base text-on-surface-variant leading-relaxed">
                  The non-negotiables that define every partnership, advisory engagement, investment, and project I undertake.
                </p>
              </div>
              <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-4">
                {values.map((val, idx) => (
                  <ValueCard
                    key={idx}
                    title={val.title}
                    description={val.description}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
      </FadeIn>

      {/* 7. Call To Action Page Banner */}
      <FadeIn>
        <section className="max-w-container-max mx-auto px-gutter py-section-v-space-mobile md:py-section-v-space">
          <div className="bg-surface-container-high border border-outline-variant p-12 md:p-24 rounded-[32px] text-center relative overflow-hidden shadow-lg">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 blur-[100px]"></div>
            <div className="relative z-10 max-w-xl mx-auto flex flex-col items-center">
              <h2 className="font-display-hero-mobile md:font-display-hero text-display-hero-mobile md:text-display-hero text-on-surface mb-8 leading-tight">
                Let's build something meaningful together.
              </h2>
              <button
                onClick={handleConnect}
                className="bg-primary text-on-primary px-10 py-5 rounded-full font-headline-subsection text-headline-subsection font-bold hover:bg-primary-container hover:scale-105 active:scale-95 transition-all duration-300 shadow-md"
              >
                Contact Me
              </button>
            </div>
          </div>
        </section>
      </FadeIn>
    </div>
  );
}
