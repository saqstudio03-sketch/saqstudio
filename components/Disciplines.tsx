'use client';

import React, { useState } from 'react';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { ScrollReveal, StaggerContainer, StaggerItem } from './ScrollReveal';
import { motion, AnimatePresence } from 'motion/react';

interface Discipline {
  id: string;
  num: string;
  title: string;
  tagline: string;
  details: string;
  capabilities: string[];
}

const DISCIPLINES_DATA: Discipline[] = [
  {
    id: 'architecture',
    num: '01',
    title: 'Architecture & Spatial Design',
    tagline: 'Permanent and temporary structures rooted in geometric proportion and pure light.',
    details: 'We conceive architectural spaces from foundational masterplans to tactile finish details. Our work emphasizes natural daylighting, sustainable massing, and unadorned materials such as fair-face concrete, steel, and timber.',
    capabilities: [
      'Architectural Concept Design',
      'Spatial Planning & Scale Prototyping',
      'Exhibition & Pavilion Architecture',
      'Material Selection & Detailing',
    ],
  },
  {
    id: 'identity',
    num: '02',
    title: 'Visual Identity & Systems',
    tagline: 'Timeless brand architecture built to outlast cyclic aesthetic trends.',
    details: 'Visual identities designed with mathematical rigor. We produce comprehensive design systems, custom type specimens, packaging guidelines, and stationery tailored for institutional and progressive commercial brands.',
    capabilities: [
      'Brand Architecture & Strategy',
      'Custom Logotypes & Typography',
      'Printed Collateral & Packaging',
      'Comprehensive Brand Standards',
    ],
  },
  {
    id: 'digital',
    num: '03',
    title: 'Digital Platforms & Web Craft',
    tagline: 'High-performance digital products engineered with zero decorative noise.',
    details: 'We design and engineer bespoke web presences, digital archives, and interactive tools. Focused on rapid load times, sub-second interactions, clear navigation paths, and strict typography.',
    capabilities: [
      'Responsive Web Architecture',
      'Interactive Archives & Catalogs',
      'High-Performance Frontend Systems',
      'Accessibility & WCAG AA Standards',
    ],
  },
  {
    id: 'direction',
    num: '04',
    title: 'Creative Direction & Editorial',
    tagline: 'Curatorial guidance across physical print, publications, and spatial exhibitions.',
    details: 'Guiding publications, monographs, and brand discourse from initial narrative through final production. We manage print technicians, binding artisans, and editorial timelines.',
    capabilities: [
      'Monograph & Book Design',
      'Exhibition Curation & Scenography',
      'Art Direction for Photography',
      'Design Research & Publishing',
    ],
  },
];

interface DisciplinesProps {
  onContactClick: () => void;
}

export function Disciplines({ onContactClick }: DisciplinesProps) {
  const [expandedId, setExpandedId] = useState<string | null>('architecture');

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="disciplines" className="relative border-b border-black/10 w-full min-h-[100dvh] min-h-[640px] flex flex-col justify-between py-10 md:py-14 bg-transparent overflow-hidden scroll-mt-20">
      <div className="w-full px-6 sm:px-10 lg:px-16 flex-1 flex flex-col justify-between">
        {/* Section Header */}
        <ScrollReveal yOffset={20} duration={0.6}>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 sm:mb-10">
            <div>
              <div className="text-xs font-mono uppercase tracking-widest text-black/60 mb-2">
                Capabilities
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight uppercase text-black">
                Disciplines
              </h2>
            </div>
            <p className="text-sm text-black/70 max-w-md font-normal leading-relaxed">
              Every engagement is approached with methodical precision. We select projects where our minimalist philosophy can yield lasting value.
            </p>
          </div>
        </ScrollReveal>

        {/* Disciplines Accordion / Grid */}
        <StaggerContainer staggerDelay={0.08} className="border-t border-black divide-y divide-black/10 my-auto">
          {DISCIPLINES_DATA.map((item) => {
            const isExpanded = expandedId === item.id;
            return (
              <StaggerItem key={item.id}>
                <div className="py-3.5 sm:py-4 transition-colors">
                  <button
                    onClick={() => toggleExpand(item.id)}
                    className="w-full flex items-start justify-between text-left gap-4 group cursor-pointer"
                    aria-expanded={isExpanded}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-baseline gap-4 sm:gap-8 flex-1">
                      <span className="font-mono text-xl sm:text-2xl font-bold text-black/40 group-hover:text-black transition-colors w-12">
                        {item.num}
                      </span>
                      <div className="flex-1">
                        <h3 className="text-lg sm:text-xl font-bold tracking-tight uppercase text-black group-hover:underline">
                          {item.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-black/70 mt-0.5 font-normal">
                          {item.tagline}
                        </p>
                      </div>
                    </div>

                    <div className="p-1.5 border border-black/20 group-hover:border-black transition-colors shrink-0">
                      <ChevronDown
                        className={`w-4 h-4 text-black transition-transform duration-200 ${
                          isExpanded ? 'rotate-180' : ''
                        }`}
                      />
                    </div>
                  </button>

                  {/* Smooth Expanded Details */}
                  <AnimatePresence initial={false}>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="pt-4 sm:pl-20 mt-3 border-t border-black/5 grid grid-cols-1 md:grid-cols-12 gap-6">
                          <div className="md:col-span-7">
                            <h4 className="text-xs font-mono uppercase tracking-wider text-black/50 mb-1.5">
                              Approach
                            </h4>
                            <p className="text-xs sm:text-sm leading-relaxed text-black/80">
                              {item.details}
                            </p>
                          </div>

                          <div className="md:col-span-5">
                            <h4 className="text-xs font-mono uppercase tracking-wider text-black/50 mb-2">
                              Core Capabilities
                            </h4>
                            <ul className="space-y-1.5 text-xs font-mono text-black">
                              {item.capabilities.map((cap, i) => (
                                <li key={i} className="flex items-center gap-2">
                                  <span className="w-1.5 h-1.5 bg-black inline-block" />
                                  <span>{cap}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        {/* CTA prompt */}
        <ScrollReveal delay={0.15} yOffset={20}>
          <div className="mt-6 sm:mt-8 pt-5 sm:pt-6 border-t border-black/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <span className="text-xs font-mono uppercase text-black/60">
              Have a project spanning multiple disciplines?
            </span>
            <button
              onClick={onContactClick}
              className="inline-flex items-center gap-2 px-6 py-2.5 border border-black rounded-full text-xs font-bold uppercase tracking-wider text-black hover:bg-black hover:text-white transition-all cursor-pointer shadow-xs hover:scale-105 active:scale-95"
            >
              <span>Discuss your brief with us</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
