import React from 'react';

export default function Timeline({ milestones = [], layout = 'vertical' }) {
  if (layout === 'horizontal') {
    return (
      <section className="bg-surface-container-highest py-section-v-space-mobile md:py-section-v-space overflow-hidden">
        <div className="max-w-container-max mx-auto px-gutter mb-12">
          <h2 className="font-headline-section text-headline-section text-on-surface">The Journey</h2>
          <div className="h-1 w-24 bg-primary mt-4 rounded-full"></div>
        </div>
        
        <div className="relative">
          {/* Horizontal Line background */}
          <div className="absolute top-[80px] left-0 w-full h-[2px] bg-outline-variant -translate-y-1/2 z-0"></div>
          
          <div className="flex overflow-x-auto gap-12 px-gutter pb-12 hide-scrollbar relative z-10 snap-x">
            {milestones.map((item, idx) => (
              <div key={idx} className="flex-shrink-0 w-72 snap-start">
                <div className="font-display-hero-mobile text-primary font-bold mb-4">{item.year}</div>
                <div className="bg-surface border border-outline-variant p-6 rounded-[16px] shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                  <h4 className="font-headline-subsection text-meta-info uppercase tracking-wider mb-2 font-bold text-primary">
                    {item.title}
                  </h4>
                  <p className="font-body-base text-on-surface-variant leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // Vertical timeline layout
  return (
    <section className="bg-surface-container-highest py-section-v-space-mobile md:py-section-v-space overflow-hidden">
      <div className="max-w-container-max mx-auto px-gutter">
        <div className="mb-16">
          <h2 className="font-headline-section text-headline-section text-on-surface">The Journey</h2>
          <div className="h-1 w-24 bg-primary mt-4 rounded-full"></div>
        </div>

        <div className="relative">
          {/* Vertical central line (hidden on mobile) */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-outline-variant -translate-x-1/2 hidden md:block"></div>
          
          <div className="space-y-12 relative">
            {milestones.map((item, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div
                  key={idx}
                  className="group relative flex flex-col md:flex-row items-start md:items-center gap-8"
                >
                  {/* Left card slot on desktop */}
                  <div className={`md:w-1/2 order-2 md:order-1 ${isEven ? 'md:text-right' : 'md:hidden'}`}>
                    {isEven && (
                      <div className="bg-surface border border-outline-variant p-8 rounded-[24px] shadow-sm transition-all duration-300 group-hover:shadow-lg group-hover:-translate-y-1 group-hover:border-primary">
                        <span className="font-label-caps text-primary mb-2 block font-bold">{item.title}</span>
                        <p className="font-body-base text-on-surface-variant leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Node Dot indicator */}
                  <div className="absolute left-4 md:left-1/2 w-8 h-8 bg-primary rounded-full -translate-x-1/2 flex items-center justify-center z-10 border-4 border-surface-container-highest group-hover:scale-125 transition-transform duration-300">
                    <div className="w-2 h-2 bg-on-primary rounded-full"></div>
                  </div>

                  {/* Right card slot on desktop */}
                  <div className={`md:w-1/2 order-2 md:order-2 pl-12 md:pl-0 ${!isEven ? '' : 'md:hidden'}`}>
                    {!isEven && (
                      <>
                        <div className="md:hidden mb-2">
                          <span className="font-display-hero-mobile text-primary font-bold opacity-30">{item.year}</span>
                        </div>
                        <div className="bg-surface border border-outline-variant p-8 rounded-[24px] shadow-sm transition-all duration-300 group-hover:shadow-lg group-hover:-translate-y-1 group-hover:border-primary">
                          <span className="font-label-caps text-primary mb-2 block font-bold">{item.title}</span>
                          <p className="font-body-base text-on-surface-variant leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      </>
                    )}
                  </div>

                  {/* Year Tag labels */}
                  <div className={`hidden md:block md:w-1/2 ${isEven ? 'order-2 md:order-2 pl-8' : 'order-1 md:order-1 pr-8 text-right'}`}>
                    <span className="font-display-hero-mobile text-primary font-bold opacity-20 group-hover:opacity-100 transition-opacity duration-300">
                      {item.year}
                    </span>
                  </div>

                  {/* Mobile-only fallback content layout */}
                  {isEven && (
                    <div className="md:hidden order-2 pl-12 w-full">
                      <div className="mb-2">
                        <span className="font-display-hero-mobile text-primary font-bold opacity-30">{item.year}</span>
                      </div>
                      <div className="bg-surface border border-outline-variant p-8 rounded-[24px] shadow-sm">
                        <span className="font-label-caps text-primary mb-2 block font-bold">{item.title}</span>
                        <p className="font-body-base text-on-surface-variant leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
