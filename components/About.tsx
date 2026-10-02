'use client';

import React from 'react';
import { ScrollReveal, StaggerContainer, StaggerItem } from './ScrollReveal';

export function About() {
  return (
    <section id="about" className="relative border-b border-black/10 w-full min-h-[100dvh] min-h-[640px] flex flex-col justify-between py-12 md:py-16 bg-transparent overflow-hidden scroll-mt-20">
      <div className="w-full px-6 sm:px-10 lg:px-16 flex-1 flex flex-col justify-between">
        {/* Section Header */}
        <ScrollReveal yOffset={20} duration={0.6}>
          <div className="text-xs font-mono uppercase tracking-widest text-black/60 mb-2">
            About Us
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight uppercase text-black mb-6 sm:mb-8">
            Who We Are
          </h2>
        </ScrollReveal>

        {/* Studio Manifesto */}
        <div className="max-w-4xl my-auto">
          <ScrollReveal delay={0.1} yOffset={24} duration={0.7} className="space-y-4 text-lg sm:text-2xl md:text-3xl leading-relaxed text-black/90">
            <p className="font-semibold text-black leading-snug">
              SAQ Studio is a premium web development studio focused on creating high-performance, conversion-driven websites.
            </p>
            <p className="text-base sm:text-lg text-black/80 font-normal leading-relaxed">
              We combine modern technology, elegant design, and measurable business growth to build digital experiences that stand out in today&apos;s competitive landscape.
            </p>
          </ScrollReveal>
        </div>

        {/* Three Principles */}
        <StaggerContainer staggerDelay={0.15} className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-black/10 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          <StaggerItem>
            <div className="font-mono text-xs uppercase text-black/50 mb-1.5">01 / Performance</div>
            <h4 className="text-base sm:text-lg font-bold uppercase text-black mb-1.5">High-Speed Execution</h4>
            <p className="text-xs sm:text-sm text-black/70 leading-relaxed">
              Engineered with modern frameworks and optimized pipelines to ensure instant load times and seamless responsiveness across all screen sizes.
            </p>
          </StaggerItem>

          <StaggerItem>
            <div className="font-mono text-xs uppercase text-black/50 mb-1.5">02 / Conversion</div>
            <h4 className="text-base sm:text-lg font-bold uppercase text-black mb-1.5">Measurable Growth</h4>
            <p className="text-xs sm:text-sm text-black/70 leading-relaxed">
              Strategic visual hierarchy and deliberate interaction design crafted to turn audience engagement into concrete business value.
            </p>
          </StaggerItem>

          <StaggerItem>
            <div className="font-mono text-xs uppercase text-black/50 mb-1.5">03 / Elegance</div>
            <h4 className="text-base sm:text-lg font-bold uppercase text-black mb-1.5">Modern Technology</h4>
            <p className="text-xs sm:text-sm text-black/70 leading-relaxed">
              Clean architectural restraint married with state-of-the-art frontend engineering for lasting digital longevity.
            </p>
          </StaggerItem>
        </StaggerContainer>
      </div>
    </section>
  );
}
