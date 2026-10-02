'use client';

import React, { useState } from 'react';
import { ArrowUpRight, Grid, List as ListIcon, ExternalLink } from 'lucide-react';
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
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = ['All', 'Non-Profit', 'Hospitality', 'E-Commerce'];

  const filteredProjects = activeCategory === 'All'
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter((p) => p.category === activeCategory);

  return (
    <section id="works" className="border-b border-black/10 py-20 md:py-28 bg-transparent overflow-hidden scroll-mt-20">
      <div className="w-full px-6 sm:px-10 lg:px-16">
        {/* Section Header with Controls */}
        <ScrollReveal yOffset={20} duration={0.6}>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <div className="text-xs font-mono uppercase tracking-widest text-black/60 mb-2">
                Portfolio
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight uppercase text-black">
                Selected Works
              </h2>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              {/* Category Filter tabs */}
              <div className="flex flex-wrap items-center gap-1.5 p-1 border border-black/20 rounded-full text-xs font-medium bg-white">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-4 py-1.5 rounded-full transition-all cursor-pointer ${
                      activeCategory === cat
                        ? 'bg-black text-white shadow-xs'
                        : 'bg-transparent text-black hover:bg-neutral-100'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* View Mode Toggle */}
              <div className="hidden sm:flex items-center gap-1 p-1 border border-black/20 rounded-full bg-white text-xs">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-1.5 rounded-full transition-all cursor-pointer ${
                    viewMode === 'grid' ? 'bg-black text-white' : 'bg-transparent text-black hover:bg-neutral-100'
                  }`}
                  title="Grid view"
                  aria-label="Grid view"
                >
                  <Grid className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-1.5 rounded-full transition-all cursor-pointer ${
                    viewMode === 'list' ? 'bg-black text-white' : 'bg-transparent text-black hover:bg-neutral-100'
                  }`}
                  title="List view"
                  aria-label="List view"
                >
                  <ListIcon className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Works Display */}
        {viewMode === 'grid' ? (
          <StaggerContainer staggerDelay={0.08} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <StaggerItem key={project.id}>
                <div
                  onClick={() => setSelectedProject(project)}
                  className="group cursor-pointer border border-black p-6 bg-white/95 backdrop-blur-md flex flex-col justify-between hover:bg-white transition-all duration-200 h-full shadow-xs hover:shadow-md"
                >
                  <div>
                    {/* Card Header */}
                    <div className="flex items-center justify-between text-xs font-mono uppercase text-black/60 mb-4">
                      <span className="font-semibold text-black">{project.category}</span>
                      <span>{project.year}</span>
                    </div>

                    {/* Live Website Preview Window */}
                    <div className="mb-6">
                      <WebsitePreview
                        url={project.liveUrl || ''}
                        title={project.title}
                        previewImage={project.previewImage}
                        aspectRatio="aspect-16/10"
                        showOpenButton={true}
                      />
                    </div>

                    {/* Title & Arrow */}
                    <h3 className="text-xl font-bold tracking-tight uppercase text-black mb-2 flex items-center justify-between">
                      <span className="group-hover:underline">{project.title}</span>
                      <ArrowUpRight className="w-4 h-4 opacity-40 group-hover:opacity-100 transition-opacity" />
                    </h3>

                    <p className="text-sm text-black/70 leading-relaxed mb-6 line-clamp-3">
                      {project.description}
                    </p>
                  </div>

                  {/* Card Footer with Direct Live Link & Case Study */}
                  <div className="border-t border-black/10 pt-4 flex items-center justify-between text-xs font-mono text-black/60">
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
        ) : (
          /* List Mode */
          <StaggerContainer staggerDelay={0.06} className="border-t border-black divide-y divide-black/10">
            {filteredProjects.map((project) => (
              <StaggerItem key={project.id}>
                <div
                  onClick={() => setSelectedProject(project)}
                  className="group cursor-pointer py-5 px-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-neutral-50 transition-colors"
                >
                  <div className="flex items-baseline gap-6">
                    <span className="text-xs font-mono text-black/40 w-12">{project.year}</span>
                    <div>
                      <h3 className="text-lg font-bold uppercase tracking-tight text-black group-hover:underline">
                        {project.title}
                      </h3>
                      <p className="text-xs text-black/60 mt-0.5">{project.description}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-5 text-xs font-mono text-black/60 self-end sm:self-center">
                    <span>{project.category}</span>
                    <span className="hidden md:inline">·</span>
                    <span className="hidden md:inline">{project.client}</span>
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex items-center gap-1 px-3 py-1 bg-black text-white rounded text-[11px] font-mono hover:bg-neutral-800 transition-colors"
                        title="Open live website in new tab"
                      >
                        <span>Live Site</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                    <ArrowUpRight className="w-4 h-4 text-black group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        )}

        {/* Bottom Note */}
        <ScrollReveal delay={0.2} yOffset={16} className="mt-12 text-center">
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
