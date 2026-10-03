'use client';

import React from 'react';
import Link from 'next/link';
import { 
  Briefcase, 
  LayoutGrid, 
  Zap, 
  RefreshCw, 
  Code2, 
  ShoppingBag, 
  ArrowUpRight, 
  ArrowRight,
  Check
} from 'lucide-react';
import { ScrollReveal, StaggerContainer, StaggerItem } from './ScrollReveal';

export interface ServiceItem {
  id: string;
  num: string;
  category: string;
  title: string;
  description: string;
  deliverables: string[];
  href: string;
  icon: React.ElementType;
}

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'business-websites',
    num: '01',
    category: 'Corporate & Enterprise',
    title: 'Business Websites',
    description: 'Authority-commanding digital flagships built to establish market credibility, articulate complex offerings, and generate qualified commercial inquiries.',
    deliverables: [
      'Custom Information Architecture',
      'High-Conversion Lead Funnels',
      'Institutional Brand Positioning',
      'Lighthouse 99+ Core Web Vitals'
    ],
    href: '/services/business-websites',
    icon: Briefcase
  },
  {
    id: 'portfolio-websites',
    num: '02',
    category: 'Studios & Creatives',
    title: 'Portfolio Websites',
    description: 'Curated digital galleries for architects, designers, studios, and executives, combining fluid interaction design with editorial typography.',
    deliverables: [
      'Interactive Project Case Studies',
      'Custom Visual Grid & Lightbox',
      'Refined Editorial Typography',
      'Smooth Page Transitions'
    ],
    href: '/services/portfolio-websites',
    icon: LayoutGrid
  },
  {
    id: 'landing-pages',
    num: '03',
    category: 'Campaigns & Growth',
    title: 'Landing Pages',
    description: 'High-velocity, CRO-engineered campaign pages built for product launches, marketing funnels, and maximum visitor-to-customer conversion.',
    deliverables: [
      'Conversion Rate Optimization (CRO)',
      'Sub-Second Load Speeds (<200ms)',
      'Compelling Narrative Flow',
      'Analytics & Pixel Integrations'
    ],
    href: '/services/landing-pages',
    icon: Zap
  },
  {
    id: 'website-redesign',
    num: '04',
    category: 'Modernization',
    title: 'Website Redesigns',
    description: 'Transforming legacy, sluggish websites into modern, mobile-first web experiences that elevate brand prestige and accelerate performance.',
    deliverables: [
      'Full UX & Technical Audit',
      'Zero-Downtime SEO Migration',
      'Modern Architectural Design System',
      'Mobile-First Responsiveness'
    ],
    href: '/services/website-redesign',
    icon: RefreshCw
  },
  {
    id: 'custom-web-dev',
    num: '05',
    category: 'Engineering',
    title: 'Custom Web Solutions',
    description: 'Bespoke web applications, interactive platforms, and scalable digital infrastructure engineered with Next.js, TypeScript, and modern APIs.',
    deliverables: [
      '100% Unique Architecture (Zero Templates)',
      'Headless CMS & Dynamic APIs',
      'Scalable Edge Infrastructure',
      'Enterprise Security & Compliance'
    ],
    href: '/custom-website-development',
    icon: Code2
  },
  {
    id: 'ecommerce',
    num: '06',
    category: 'Digital Commerce',
    title: 'E-Commerce Storefronts',
    description: 'High-performance online stores engineered for rapid product discovery, frictionless checkout experiences, and maximized conversion rates.',
    deliverables: [
      'Frictionless Checkout Funnels',
      'Instant Product Filtering & Search',
      'Secure Payment Integrations',
      'Inventory & ERP Synchronization'
    ],
    href: '/ecommerce-development',
    icon: ShoppingBag
  }
];

interface ServicesProps {
  onContactClick?: () => void;
}

export function Services({ onContactClick }: ServicesProps) {
  return (
    <section 
      id="services" 
      className="relative border-b border-black/10 py-20 md:py-28 bg-transparent overflow-hidden scroll-mt-20"
    >
      <div className="w-full px-6 sm:px-10 lg:px-16">
        {/* Section Header */}
        <ScrollReveal yOffset={20} duration={0.6}>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <div className="text-xs font-mono uppercase tracking-widest text-black/60 mb-2">
                What We Build
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight uppercase text-black">
                Services
              </h2>
            </div>
            <p className="text-sm text-black/70 max-w-md font-normal leading-relaxed">
              We design and engineer bespoke digital platforms with architectural restraint and uncompromising performance. Every project is crafted from the ground up to achieve measurable commercial success.
            </p>
          </div>
        </ScrollReveal>

        {/* Services 3x2 Grid */}
        <StaggerContainer staggerDelay={0.08} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES_DATA.map((service) => {
            const Icon = service.icon;
            return (
              <StaggerItem key={service.id}>
                <div className="group rounded-2xl border border-black/15 bg-white/40 hover:bg-white/80 hover:border-black transition-all duration-300 p-6 sm:p-8 flex flex-col justify-between h-full shadow-xs hover:shadow-md">
                  <div>
                    {/* Top Row: Number & Icon */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-xs font-bold text-black/40 group-hover:text-black transition-colors">
                          {service.num}
                        </span>
                        <span className="text-[11px] font-mono uppercase tracking-wider text-black/50 bg-black/5 px-2 py-0.5 rounded">
                          {service.category}
                        </span>
                      </div>
                      <div className="w-8 h-8 rounded-lg border border-black/20 group-hover:border-black group-hover:bg-black group-hover:text-white flex items-center justify-center transition-all text-black">
                        <Icon className="w-4 h-4" />
                      </div>
                    </div>

                    {/* Title & Description */}
                    <h3 className="text-xl sm:text-2xl font-bold uppercase tracking-tight text-black mb-3 group-hover:underline">
                      <Link href={service.href} className="inline-flex items-center gap-1.5">
                        <span>{service.title}</span>
                      </Link>
                    </h3>
                    <p className="text-xs sm:text-sm text-black/70 leading-relaxed font-normal mb-6">
                      {service.description}
                    </p>

                    {/* Deliverables / Capabilities */}
                    <div className="pt-4 border-t border-black/10">
                      <span className="block text-[11px] font-mono uppercase tracking-wider text-black/50 mb-2 font-semibold">
                        Key Deliverables
                      </span>
                      <ul className="space-y-1.5 text-xs font-mono text-black/80">
                        {service.deliverables.map((item, idx) => (
                          <li key={idx} className="flex items-center gap-2">
                            <Check className="w-3 h-3 text-black shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Card Footer: Explore Link */}
                  <div className="mt-8 pt-4 border-t border-black/10 flex items-center justify-between">
                    <Link
                      href={service.href}
                      className="inline-flex items-center gap-1.5 text-xs font-mono uppercase font-bold text-black hover:underline group/link"
                    >
                      <span>Explore Service</span>
                      <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                    </Link>
                    <span className="text-[11px] font-mono text-black/40">
                      Bespoke Only
                    </span>
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        {/* Bottom CTA Bar */}
        <ScrollReveal delay={0.2} yOffset={20}>
          <div className="mt-12 pt-8 border-t border-black/10 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div>
              <span className="block text-sm font-bold uppercase tracking-tight text-black">
                Have a unique challenge or custom digital requirements?
              </span>
              <p className="text-xs text-black/60 font-mono mt-0.5">
                We engineer tailor-made architectures for ambitious brands worldwide.
              </p>
            </div>
            {onContactClick && (
              <button
                type="button"
                onClick={onContactClick}
                className="inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-black text-white text-xs font-semibold uppercase tracking-wider rounded-full hover:bg-neutral-800 transition-all shadow-xs cursor-pointer hover:scale-105 active:scale-95 shrink-0"
              >
                <span>Discuss Your Project</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
