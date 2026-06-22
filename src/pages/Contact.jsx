import React from 'react';
import ContactForm from '../components/forms/ContactForm';
import FAQAccordion from '../components/forms/FAQAccordion';
import SocialIconCard from '../components/shared/SocialIconCard';
import Newsletter from '../components/sections/Newsletter';
import FadeIn from '../components/shared/FadeIn';
import { faqs, socialLinks } from '../data/constants';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <div className="flex flex-col gap-6 overflow-hidden">
      {/* 1. Contact Hero */}
      <FadeIn>
        <header className="py-section-v-space-mobile md:py-section-v-space px-gutter max-w-container-max mx-auto text-center">
          <span className="font-label-caps text-label-caps text-primary uppercase tracking-widest block mb-4 font-semibold">
            Get In Touch
          </span>
          <h1 className="font-display-hero-mobile md:font-display-hero text-display-hero-mobile md:text-display-hero mb-stack-md leading-tight text-on-surface">
            Let's Connect
          </h1>
          <p className="font-body-large text-body-large text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
            Whether you are looking for deep-tech consulting, interested in advisory collaborations, or want to discuss structural artificial intelligence design, my door is open.
          </p>
        </header>
      </FadeIn>

      {/* 2. Direct Channels & Form Section */}
      <FadeIn>
        <section className="max-w-container-max mx-auto px-gutter mb-section-v-space">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            {/* Left: Contact Info Block */}
            <div className="flex flex-col h-full">
              <div className="glass-card p-8 rounded-xl flex flex-col gap-6 h-full shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-wider font-semibold">
                    Current Status: Open for Consulting
                  </span>
                </div>
                
                <h2 className="font-headline-section text-[28px] md:text-headline-section mt-2 text-on-surface font-bold leading-tight">
                  Direct Channels
                </h2>
                
                <div className="space-y-6 mt-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-label-caps text-label-caps text-outline uppercase tracking-wider font-semibold">Email</p>
                      <p className="font-body-large text-body-large font-bold text-on-surface mt-0.5">hello@techvisionary.io</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-label-caps text-label-caps text-outline uppercase tracking-wider font-semibold">Phone</p>
                      <p className="font-body-large text-body-large font-bold text-on-surface mt-0.5">+1 (555) 012-3456</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-label-caps text-label-caps text-outline uppercase tracking-wider font-semibold">Location</p>
                      <p className="font-body-large text-body-large font-bold text-on-surface mt-0.5">San Francisco, CA &amp; Global Remote</p>
                    </div>
                  </div>
                </div>

                <div className="mt-auto pt-6 border-t border-outline-variant/60">
                  <div
                    className="w-full h-48 rounded-lg bg-cover bg-center border border-outline-variant shadow-sm"
                    style={{
                      backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDo57yuSsGlyP0JRE6N7NvWiN7xDFPiQ1qHpXeP62qg8jaFjTU1sM3N1dQ_5W809vqLJQKmGjIQVHz_0Icj7VEvQgegsm5gPq2CV9O7lhZuKpe68RpeVL8KU89XVA2hoBZEHF9Y4WkPvaQx-EZ45BSdWmwijDpeFkvsLVExFBz18UT-8fEMl3wdpDuhEolaaYyYgsrR0Ez23s6SReiefgSoCCDr41pRv8XHX0EEIeniC02-sNLsMyX8oqRw8cIiEMNDAW-WEI5d2zv7')"
                    }}
                    role="img"
                    aria-label="San Francisco topographic layout map"
                  ></div>
                </div>
              </div>
            </div>

            {/* Right: Contact Form */}
            <div className="h-full">
              <ContactForm />
            </div>
          </div>
        </section>
      </FadeIn>

      {/* 3. Social Connect: Find me online */}
      <FadeIn>
        <section className="max-w-container-max mx-auto px-gutter mb-section-v-space text-center">
          <h2 className="font-headline-section text-headline-section text-on-surface mb-8 font-bold">
            Find Me Online
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {socialLinks.map((social, idx) => (
              <SocialIconCard
                key={idx}
                platform={social.platform}
                url={social.url}
                handle={social.handle}
                iconName={social.iconName}
              />
            ))}
          </div>
        </section>
      </FadeIn>

      {/* 4. FAQ Accordion Section */}
      <FadeIn>
        <section className="max-w-3xl mx-auto px-gutter mb-section-v-space">
          <h2 className="font-headline-section text-headline-section text-center mb-8 font-bold">
            Frequently Asked Questions
          </h2>
          <div className="flex flex-col gap-4">
            {faqs.map((faq, idx) => (
              <FAQAccordion
                key={idx}
                question={faq.question}
                answer={faq.answer}
                defaultOpen={idx === 0} // Open first accordion item by default
              />
            ))}
          </div>
        </section>
      </FadeIn>

      {/* 5. Newsletter CTA Section */}
      <FadeIn>
        <Newsletter
          title="Stay Updated"
          description="Join 10,000+ technologists receiving weekly deep-dives into AI ethics, modern fintech architectures, and startup scalability."
        />
      </FadeIn>
    </div>
  );
}
