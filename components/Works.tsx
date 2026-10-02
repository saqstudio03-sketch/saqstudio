'use client';

import React, { useState } from 'react';
import { ArrowUpRight, ExternalLink } from 'lucide-react';
import { Project, ProjectModal } from './ProjectModal';
import { WebsitePreview } from './WebsitePreview';
import { ScrollReveal, StaggerContainer, StaggerItem } from './ScrollReveal';

const PROJECTS_DATA: Project[] = [
  {
    id: 'spread-joy-foundation',
    title: 'Spread Joy Foundation',
    category: 'Non-Profit',
    year: '2026',
    client: 'Spread Joy Foundation',
    scope: ['Web Architecture', 'Donation Engine', 'Community Outreach', 'Responsive Design'],
    description: 'A modern, compassionate online presence for a non-profit organization focused on community outreach and donations.',
    extendedDescription: 'Designed to elevate the foundation’s mission, this platform provides an intuitive, trustworthy donation pipeline and community hub. Optimized for rapid page loads, accessibility, and high conversion so every outreach initiative achieves maximum impact.',
    liveUrl: 'https://spreadjoyfoundation.freedev.app/',
    previewImage: '/previews/spreadjoy.png',
    specifications: [
      { label: 'Focus', value: 'Community Outreach & Donations' },
      { label: 'Performance', value: '98+ Core Web Vitals' },
      { label: 'Architecture', value: 'Next.js & Modern TypeScript' },
    ],
  },
  {
    id: 'palm-brew-kitchen',
    title: 'Palm Brew & Kitchen',
    category: 'Hospitality',
    year: '2025',
    client: 'Palm Brew & Kitchen',
    scope: ['Digital Experience', 'Editorial Typography', 'Menu Engineering', 'Table Reservations'],
    description: 'An immersive, premium restaurant website featuring rich visuals, elegant typography, and a seamless digital experience.',
    extendedDescription: 'Crafted as an evocative digital extension of the dining room. Blends sensory culinary imagery with refined editorial typography, streamlined online table reservations, and an interactive tasting menu designed for seamless mobile navigation.',
    liveUrl: 'https://palmbrewandkitchen.freedev.app/',
    previewImage: '/previews/palmbrew.png',
    specifications: [
      { label: 'Industry', value: 'Culinary & Craft Hospitality' },
      { label: 'Key Features', value: 'Interactive Menu & Booking' },
      { label: 'Experience', value: 'Fluid Micro-Interactions' },
    ],
  },
  {
    id: 'kdex',
    title: 'Kdex',
    category: 'E-Commerce',
    year: '2025',
    client: 'Kdex Interactive',
    scope: ['E-Commerce Platform', 'Digital Catalog', 'Conversion Architecture', 'Payment Integration'],
    description: 'Premium game selling website',
    extendedDescription: 'A sleek, high-conversion storefront engineered for digital gamers and collectors. Features instant game previews, filterable library matrices, sub-second search latency, and a frictionless checkout experience engineered to maximize revenue.',
    liveUrl: 'https://kdex-tawny.vercel.app/',
    previewImage: '/previews/kdex.png',
    specifications: [
      { label: 'Platform', value: 'E-Commerce Storefront' },
      { label: 'Conversion', value: 'Instant One-Click Flow' },
      { label: 'Security', value: 'Encrypted Digital Delivery' },
    ],
  },
];

interface WorksProps {
  onContactClick: () => void;
}

export function Works({ onContactClick }: WorksProps) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="works" className="relative border-b border-black/10 w-full min-h-[100dvh] min-h-[640px] flex flex-col justify-between py-10 md:py-14 bg-transparent overflow-hidden scroll-mt-20">
      <div className="w-full px-6 sm:px-10 lg:px-16 flex-1 flex flex-col justify-between">
        {/* Section Header */}
        <ScrollReveal yOffset={20} duration={0.6}>
          <div className="mb-6 sm:mb-8">
            <div className="text-xs font-mono uppercase tracking-widest text-black/60 mb-1.5">
              Portfolio
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight uppercase text-black">
              Selected Works
            </h2>
          </div>
        </ScrollReveal>

        {/* Works Display Grid */}
        <StaggerContainer staggerDelay={0.08} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 flex-1 items-stretch">
          {PROJECTS_DATA.map((project) => (
            <StaggerItem key={project.id}>
              <div
                onClick={() => setSelectedProject(project)}
                className="group cursor-pointer border border-black p-4 sm:p-5 lg:p-6 bg-white/95 backdrop-blur-md flex flex-col justify-between hover:bg-white transition-all duration-200 h-full shadow-xs hover:shadow-md"
              >
                <div>
                  {/* Card Header */}
                  <div className="flex items-center justify-between text-xs font-mono uppercase text-black/60 mb-3">
                    <span className="font-semibold text-black">{project.category}</span>
                    <span>{project.year}</span>
                  </div>

                  {/* Live Website Preview Window */}
                  <div className="mb-4">
                    <WebsitePreview
                      url={project.liveUrl || ''}
                      title={project.title}
                      previewImage={project.previewImage}
                      aspectRatio="aspect-16/10"
                      showOpenButton={true}
                    />
                  </div>

                  {/* Title & Arrow */}
                  <h3 className="text-lg sm:text-xl font-bold tracking-tight uppercase text-black mb-2 flex items-center justify-between">
                    <span className="group-hover:underline">{project.title}</span>
                    <ArrowUpRight className="w-4 h-4 opacity-40 group-hover:opacity-100 transition-opacity" />
                  </h3>

                  <p className="text-xs sm:text-sm text-black/70 leading-relaxed mb-4 line-clamp-2 sm:line-clamp-3">
                    {project.description}
                  </p>
                </div>

                {/* Card Footer with Direct Live Link & Case Study */}
                <div className="border-t border-black/10 pt-3 flex items-center justify-between text-xs font-mono text-black/60 mt-auto">
                  <span className="truncate max-w-[130px]">{project.client}</span>
                  <div className="flex items-center gap-3">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex items-center gap-1 font-semibold text-black hover:underline"
                        title="Open live website in new tab"
                      >
                        <span>Visit Site</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                    <span className="text-black/30">·</span>
                    <span className="underline group-hover:text-black font-medium">Details</span>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Bottom Note */}
        <ScrollReveal delay={0.2} yOffset={16} className="mt-6 sm:mt-8 text-center">
          <p className="text-xs font-mono uppercase text-black/50">
            Archive contains {PROJECTS_DATA.length} featured productions · Complete case studies available upon inquiry
          </p>
        </ScrollReveal>
      </div>

      {/* Project Lightbox Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onContactClick={onContactClick}
      />
    </section>
  );
}
