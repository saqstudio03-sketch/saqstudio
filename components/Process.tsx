'use client';

import React from 'react';
import { ScrollReveal, StaggerContainer, StaggerItem } from './ScrollReveal';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

interface ProcessPhase {
  num: string;
  title: string;
  desc: string;
}

const PROCESS_STEPS: ProcessPhase[] = [
  {
    num: '01',
    title: 'Discovery',
    desc: 'We learn about your business, goals, and target audience to define a clear, measurable digital strategy.'
  },
  {
    num: '02',
    title: 'Planning',
    desc: 'Information architecture, wireframes, and technical stack selection tailored to your specific requirements.'
  },
  {
    num: '03',
    title: 'Design',
    desc: 'Crafting premium, bespoke visual interfaces that build immediate trust and captivate your audience.'
  },
  {
    num: '04',
    title: 'Development',
    desc: 'Translating designs into clean, high-performance, responsive code engineered with modern frameworks.'
  },
  {
    num: '05',
    title: 'Testing',
    desc: 'Rigorous QA across devices, browsers, and performance auditing for flawless, bug-free execution.'
  },
  {
    num: '06',
    title: 'Launch',
    desc: 'Smooth deployment to production with SEO optimization, domain configuration, and analytics integration.'
  },
  {
    num: '07',
    title: 'Support',
    desc: 'Ongoing maintenance, performance updates, and continuous monitoring to ensure sustained commercial growth.'
  }
];

interface ProcessProps {
  onContactClick?: () => void;
}

export function Process({ onContactClick }: ProcessProps) {
  return (
    <section id="process" className="border-b border-black/10 py-20 md:py-28 bg-transparent overflow-hidden scroll-mt-20">
      <div className="w-full px-6 sm:px-10 lg:px-16">
        {/* Section Header */}
        <ScrollReveal yOffset={20} duration={0.6}>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <div className="text-xs font-mono uppercase tracking-widest text-black/60 mb-2">
                Our Methodology
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight uppercase text-black">
                Process
              </h2>
            </div>
            <p className="text-sm text-black/70 max-w-md font-normal leading-relaxed">
              A proven framework for digital excellence. Every step is structured with architectural rigor to eliminate ambiguity and deliver measurable outcomes.
            </p>
          </div>
        </ScrollReveal>

        {/* Process Phases Grid */}
        <StaggerContainer staggerDelay={0.08} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROCESS_STEPS.map((step, idx) => (
            <StaggerItem key={step.num}>
              <div className="group p-6 sm:p-8 rounded-2xl border border-black/15 bg-white/40 hover:bg-white/70 hover:border-black transition-all duration-300 shadow-xs h-full flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs uppercase tracking-widest text-black/50 font-bold">
                      Phase {step.num}
                    </span>
                    <span className="text-xs font-mono text-black/40 group-hover:text-black transition-colors">
                      [ 0{idx + 1} / 07 ]
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold uppercase tracking-tight text-black mb-3">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-black/70 leading-relaxed font-normal">
                    {step.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-black/10 flex items-center justify-between text-xs font-mono text-black/60 group-hover:text-black transition-colors">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-black" />
                    Structured Milestone
                  </span>
                  <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                </div>
              </div>
            </StaggerItem>
          ))}

          {/* Call to action card filling the 8th grid space */}
          <StaggerItem>
            <div className="p-6 sm:p-8 rounded-2xl border border-black bg-black text-white shadow-xs h-full flex flex-col justify-between">
              <div>
                <span className="font-mono text-xs uppercase tracking-widest text-white/50 mb-4 block">
                  Next Step
                </span>
                <h3 className="text-xl sm:text-2xl font-bold uppercase tracking-tight text-white mb-3">
                  Start Your Project
                </h3>
                <p className="text-xs sm:text-sm text-white/70 leading-relaxed font-normal">
                  Ready to put this proven framework into motion? Discuss your brief directly with our engineering and design team.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/20">
                <button
                  type="button"
                  onClick={onContactClick}
                  className="w-full inline-flex items-center justify-between px-4 py-2.5 bg-white text-black text-xs font-mono uppercase tracking-wider rounded-md hover:bg-neutral-200 transition-all cursor-pointer font-bold"
                >
                  <span>Initiate Consultation</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </StaggerItem>
        </StaggerContainer>
      </div>
    </section>
  );
}
