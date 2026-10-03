'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  ArrowRight,
  ArrowUpRight,
  Check,
  Sparkles
} from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

export interface ServiceItem {
  id: string;
  num: string;
  category: string;
  title: string;
  description: string;
  deliverables: string[];
  href: string;
  image: string;
  imageAlt: string;
}

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'corporate-websites',
    num: '01',
    category: 'Corporate & Enterprise',
    title: 'Corporate Website Design',
    description: 'Backed by years of engineering experience in website design for companies, our team creates visually stunning websites that communicate a company\'s brand, value, products, and services to their audiences with architectural precision.',
    deliverables: [
      'Custom Information Architecture & Wireframing',
      'Lead Capture & Inbound Funnel Optimization',
      'Lighthouse 99+ Core Web Vitals Performance',
      'Enterprise Security & Edge CDN Delivery'
    ],
    href: '/services/business-websites',
    image: '/services/corporate-website.jpg',
    imageAlt: 'Corporate Website Design on Modern Laptop'
  },
  {
    id: 'web-applications',
    num: '02',
    category: 'Full-Stack Engineering',
    title: 'Web Applications',
    description: 'We create intuitive, responsive, and user-friendly web apps that enable users to interact and deliver an engaging user experience across devices with modern frameworks like Next.js and TypeScript.',
    deliverables: [
      'Zero-Template Custom Engineering',
      'Interactive SaaS Dashboards & Analytics Portals',
      'Headless CMS & REST / GraphQL API Integrations',
      'Sub-200ms Serverless & Cloud Infrastructure'
    ],
    href: '/custom-website-development',
    image: '/services/web-applications.jpg',
    imageAlt: 'Modern Web Application Dashboard on Tablet'
  },
  {
    id: 'ecommerce-websites',
    num: '03',
    category: 'Digital Commerce',
    title: 'E-Commerce Website Design',
    description: 'Our professional team designs user-friendly online stores that allow visitors to easily browse products, compare products, and complete purchases quickly and safely with maximum conversion velocity.',
    deliverables: [
      'Frictionless One-Click Checkout Architecture',
      'Instant Product Search & Real-Time Filtering',
      'Secure Payment Gateways & Automated Sync',
      'Mobile-First Conversion Rate Optimization (CRO)'
    ],
    href: '/ecommerce-development',
    image: '/services/ecommerce-website.jpg',
    imageAlt: 'Luxury E-Commerce Storefront on Laptop'
  },
  {
    id: 'website-redesign',
    num: '04',
    category: 'Modernization',
    title: 'Website Redesign',
    description: 'To keep your business\'s online presence fresh, relevant, and effective, we provide modern and high-converting websites that reflect your brand prestige and drive measurable commercial results.',
    deliverables: [
      'Comprehensive UX & Technical Speed Audit',
      'Zero-Ranking-Loss SEO Redirection Strategy',
      'Contemporary Design System & Visual Refresh',
      'Fluid Micro-Interactions & Responsive Layouts'
    ],
    href: '/services/website-redesign',
    image: '/services/website-redesign.jpg',
    imageAlt: 'Modern Website Redesign Mockup'
  },
  {
    id: 'portfolio-websites',
    num: '05',
    category: 'Studios & Visionaries',
    title: 'Portfolio Websites',
    description: 'Curated digital galleries engineered for architects, designers, studios, and executives who demand an uncompromising showcase of their work with refined editorial typography and fluid motion.',
    deliverables: [
      'Editorial Case Study Layouts & Typography',
      'Interactive Visual Grids & Lightbox Views',
      'Dynamic Project Filtering & Categorization',
      'Smooth Cinematic Page Transitions'
    ],
    href: '/services/portfolio-websites',
    image: '/services/portfolio-websites.jpg',
    imageAlt: 'Portfolio Website Showcase Mockup'
  },
  {
    id: 'landing-pages',
    num: '06',
    category: 'Campaigns & Acquisition',
    title: 'Landing Pages',
    description: 'High-velocity, conversion-engineered landing pages built for product launches, marketing campaigns, and paid acquisition that turn traffic into qualified pipeline with sub-second load times.',
    deliverables: [
      'Data-Driven Conversion Rate Optimization (CRO)',
      'Sub-200ms Global Edge Loading Speeds',
      'Persuasive Product Narrative Hierarchy',
      'Deep Analytics & Ad Pixel Integration'
    ],
    href: '/services/landing-pages',
    image: '/services/landing-pages.jpg',
    imageAlt: 'High-Conversion Landing Page Mockup'
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
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 md:mb-24 pb-8 border-b border-black/10">
            <div>
              <div className="text-xs font-mono uppercase tracking-widest text-black/60 mb-2">
                What We Build
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight uppercase text-black">
                Services
              </h2>
            </div>
            <p className="text-sm text-black/70 max-w-md font-normal leading-relaxed">
              We engineer bespoke digital experiences with architectural restraint, unmatched performance, and measurable commercial impact.
            </p>
          </div>
        </ScrollReveal>

        {/* Alternating Zig-Zag Rows (One service left, one right, exactly like ProgBiz reference) */}
        <div className="space-y-20 sm:space-y-28 lg:space-y-36">
          {SERVICES_DATA.map((service, idx) => {
            const isImageLeft = idx % 2 === 0;

            return (
              <div 
                key={service.id}
                className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center"
              >
                {/* Visual Image Mockup Column */}
                <div 
                  className={`lg:col-span-7 ${
                    isImageLeft ? 'lg:order-1' : 'lg:order-2'
                  }`}
                >
                  <ScrollReveal delay={0.1} yOffset={24} duration={0.7}>
                    <Link 
                      href={service.href}
                      className="group block relative rounded-2xl lg:rounded-3xl overflow-hidden border border-black/15 bg-neutral-100 shadow-md hover:shadow-2xl transition-all duration-500 cursor-pointer"
                    >
                      <div className="relative aspect-16/10 w-full overflow-hidden bg-neutral-900">
                        <Image
                          src={service.image}
                          alt={service.imageAlt}
                          fill
                          sizes="(max-width: 1024px) 100vw, 60vw"
                          className="object-cover object-center group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                        />
                      </div>

                      {/* Subtle hover pill overlay */}
                      <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-black/85 text-white text-[11px] font-mono uppercase tracking-wider rounded-full backdrop-blur-xs shadow-md">
                          <span>View Details</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </span>
                      </div>
                    </Link>
                  </ScrollReveal>
                </div>

                {/* Content / Narrative Column */}
                <div 
                  className={`lg:col-span-5 ${
                    isImageLeft ? 'lg:order-2' : 'lg:order-1'
                  }`}
                >
                  <ScrollReveal delay={0.2} yOffset={24} duration={0.7}>
                    <div className="space-y-5">
                      {/* Serial Number & Category Tag */}
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-xs font-bold text-black/40">
                          [ {service.num} ]
                        </span>
                        <span className="text-[11px] font-mono uppercase tracking-widest text-black/60 bg-black/5 px-2.5 py-0.5 rounded">
                          {service.category}
                        </span>
                      </div>

                      {/* Main Service Title */}
                      <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-black">
                        <Link 
                          href={service.href}
                          className="hover:underline underline-offset-4 transition-colors"
                        >
                          {service.title}
                        </Link>
                      </h3>

                      {/* Description Paragraph */}
                      <p className="text-sm sm:text-base text-black/75 leading-relaxed font-normal">
                        {service.description}
                      </p>

                      {/* Key Capabilities / Deliverables */}
                      <div className="pt-2">
                        <ul className="space-y-2 text-xs font-mono text-black/85">
                          {service.deliverables.map((item, dIdx) => (
                            <li key={dIdx} className="flex items-start gap-2">
                              <Check className="w-3.5 h-3.5 text-black shrink-0 mt-0.5" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Explore Action Button */}
                      <div className="pt-4 flex items-center gap-4">
                        <Link
                          href={service.href}
                          className="inline-flex items-center gap-2 px-5 py-2.5 bg-black text-white text-xs font-semibold uppercase tracking-wider rounded-full hover:bg-neutral-800 transition-all shadow-xs hover:scale-105 active:scale-95 group"
                        >
                          <span>Explore Service</span>
                          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                        </Link>
                        
                        <span className="text-[11px] font-mono text-black/40">
                          Bespoke Only
                        </span>
                      </div>
                    </div>
                  </ScrollReveal>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Banner */}
        <ScrollReveal delay={0.2} yOffset={20}>
          <div className="mt-24 pt-12 border-t border-black/10 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-black/60 mb-1">
                <Sparkles className="w-3.5 h-3.5 text-black" />
                <span>Custom Engineering</span>
              </div>
              <h4 className="text-lg sm:text-xl font-bold uppercase tracking-tight text-black">
                Have a unique challenge or specialized project scope?
              </h4>
              <p className="text-xs text-black/60 font-mono mt-0.5">
                We engineer custom architectures and web flagships for ambitious brands worldwide.
              </p>
            </div>
            {onContactClick && (
              <button
                type="button"
                onClick={onContactClick}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-black text-white text-xs font-semibold uppercase tracking-wider rounded-full hover:bg-neutral-800 transition-all shadow-xs cursor-pointer hover:scale-105 active:scale-95 shrink-0"
              >
                <span>Initiate Consultation</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
