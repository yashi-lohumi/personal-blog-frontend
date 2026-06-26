import React from 'react';
import { useNavigate } from 'react-router-dom';
import HeroSection from '../components/sections/HeroSection';
import TrustIndicators from '../components/sections/TrustIndicators';
import FeaturedArticles from '../components/sections/FeaturedArticles';
import Timeline from '../components/sections/Timeline';
import Newsletter from '../components/sections/Newsletter';
import TestimonialCard from '../components/cards/TestimonialCard';
import FadeIn from '../components/shared/FadeIn';
import { testimonials } from '../data/testimonials';
import { timelineMilestones } from '../data/timeline';
import { socialLinks } from '../data/constants';
import { categories } from '../data/categories';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  const navigate = useNavigate();

  const handleExplore = () => {
    navigate('/blogs');
  };

  const handleSubscribe = () => {
    const input = document.getElementById('newsletter-input');
    if (input) {
      input.scrollIntoView({ behavior: 'smooth', block: 'center' });
      input.focus();
    }
  };

  const handleCategoryClick = (category) => {
    // Navigate to blogs and pass the selected category in location state
    navigate('/blogs', { state: { selectedCategory: category } });
  };

  const handleReadStory = () => {
    navigate('/about');
  };

  return (
    <div className="flex flex-col gap-6 overflow-hidden">
      {/* 1. Hero Section */}
      <FadeIn>
        <HeroSection
          tagline="Visionary · Thought · Leader"
          title="Defining the Edge of Technological Possibility"
          description="I write about the intersection of frontier artificial intelligence, fintech infrastructure, product strategy, and remote leadership. Helping founders build structural authority."
          primaryCTA={{
            label: "Explore Articles",
            onClick: handleExplore
          }}
          secondaryCTA={{
            label: "Subscribe",
            onClick: handleSubscribe
          }}
          image="https://lh3.googleusercontent.com/aida-public/AB6AXuC8tEX9H_-zaZQLiZJS3i9Ez3_EoOqj6GXXBJ5eaPpXqczR0l0yc_SLCLDXBjX014iqgsZko6v4pelSNH8XI6at7ie3SHU5CwWNzaL0CPPfbibH_dq57YewtGvez0DhTstKtnxzzrGalhoGIS_kC-Fx1lOkJ_dZEFQKwIXHA2aDoOvwv2IabVmB2j9Iy8goJ5pdPm43Ou_tYg3aBAT1--5XAzY2MwtpnjkICKtSUk-0nz3MVGCXuxM2VlSC0VagOOH9mB9io0Ea-rVr"
          socialLinks={socialLinks}
        />
      </FadeIn>

      {/* 2. Trust Indicators */}
      <FadeIn delay={150}>
        <TrustIndicators />
      </FadeIn>

      {/* 3. Featured Articles */}
      <FadeIn>
        <FeaturedArticles />
      </FadeIn>

      {/* 4. Topic Categories */}
      <FadeIn>
        <section className="max-w-container-max mx-auto px-gutter py-12 text-center">
          <span className="font-label-caps text-label-caps text-primary uppercase tracking-widest block mb-4 font-semibold">
            Knowledge Map
          </span>
          <h2 className="font-headline-section text-headline-section text-on-surface mb-8">
            Explore Topics
          </h2>
          <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
            {categories.map((cat, idx) => (
              <button
                key={idx}
                onClick={() => handleCategoryClick(cat)}
                className="px-6 py-3 bg-surface-container border border-outline-variant text-on-surface-variant hover:text-primary hover:border-primary rounded-full font-label-caps text-label-caps tracking-widest uppercase transition-all duration-200 active:scale-95 shadow-sm"
              >
                {cat}
              </button>
            ))}
          </div>
        </section>
      </FadeIn>

      {/* 5. Author Introduction */}
      <FadeIn>
        <section className="bg-surface-container-low py-section-v-space-mobile md:py-section-v-space">
          <div className="max-w-container-max mx-auto px-gutter">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <span className="font-label-caps text-label-caps text-primary uppercase tracking-widest block mb-4 font-semibold">
                  About the Author
                </span>
                <h2 className="font-headline-section text-headline-section text-on-surface mb-6 leading-tight">
                  Dr. Elena Vance
                </h2>
                <p className="font-headline-subsection text-headline-subsection text-primary font-medium mb-6">
                  Founder • Consultant • Tech Enthusiast
                </p>
                <p className="font-body-large text-body-large text-on-surface-variant mb-8 leading-relaxed">
                  In an era dominated by fleeting trends, I have spent the last decade advocating for a different approach: one rooted in intellectual depth and structural integrity. My work exists at the intersection of venture capital and strategic technology consulting.
                </p>
                <button
                  onClick={handleReadStory}
                  className="bg-primary text-on-primary px-8 py-4 rounded-[14px] font-body-base hover:shadow-lg transition-all flex items-center gap-2 active:scale-95 font-semibold"
                >
                  Read My Story <ArrowRight className="w-4 h-4" />
                </button>
              </div>
              <div className="flex justify-center">
                <div className="relative w-full aspect-[4/5] max-w-sm">
                  <div className="absolute inset-0 bg-primary/5 rounded-[24px] rotate-2 scale-102"></div>
                  <img
                    className="relative w-full h-full object-cover rounded-[24px] border border-outline-variant shadow-sm"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuC8tEX9H_-zaZQLiZJS3i9Ez3_EoOqj6GXXBJ5eaPpXqczR0l0yc_SLCLDXBjX014iqgsZko6v4pelSNH8XI6at7ie3SHU5CwWNzaL0CPPfbibH_dq57YewtGvez0DhTstKtnxzzrGalhoGIS_kC-Fx1lOkJ_dZEFQKwIXHA2aDoOvwv2IabVmB2j9Iy8goJ5pdPm43Ou_tYg3aBAT1--5XAzY2MwtpnjkICKtSUk-0nz3MVGCXuxM2VlSC0VagOOH9mB9io0Ea-rVr"
                    alt="Dr. Elena Vance portrait alternative"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </FadeIn>

      {/* 6. Professional Journey Timeline */}
      <FadeIn>
        <Timeline milestones={timelineMilestones} layout="horizontal" />
      </FadeIn>

      {/* 7. Testimonials */}
      <FadeIn>
        <section className="max-w-container-max mx-auto px-gutter py-section-v-space-mobile md:py-section-v-space">
          <div className="text-center mb-16">
            <span className="font-label-caps text-label-caps text-primary uppercase tracking-widest block mb-4 font-semibold">
              Endorsements
            </span>
            <h2 className="font-headline-section text-headline-section text-on-surface">
              Client &amp; Peer Testimonials
            </h2>
            <div className="h-1 w-24 bg-primary mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((test) => (
              <TestimonialCard
                key={test.id}
                image={test.image}
                name={test.name}
                designation={test.designation}
                quote={test.quote}
              />
            ))}
          </div>
        </section>
      </FadeIn>

      {/* 8. Newsletter Subscription */}
      <FadeIn>
        <Newsletter />
      </FadeIn>
    </div>
  );
}
