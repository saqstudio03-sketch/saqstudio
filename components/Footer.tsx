'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUp, ArrowRight, ShieldCheck, Zap, Layers } from 'lucide-react';

interface FooterProps {
  onNavigate?: (id: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (e: React.MouseEvent, sectionId: string) => {
    if (onNavigate) {
      e.preventDefault();
      onNavigate(sectionId);
    }
  };

  return (
    <footer className="border-t border-black bg-white py-12 md:py-16 text-black relative z-10">
      <div className="w-full px-6 sm:px-10 lg:px-16">
        {/* Main Footer Grid: Brand Column + 4 Link Columns */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-black/10">
          {/* Brand & Studio Mission (Cols 1-4) */}
          <div className="md:col-span-4 lg:col-span-4 space-y-4">
            <Link
              href="/#home"
              onClick={(e) => handleNavClick(e, 'overview')}
              className="inline-flex items-center group cursor-pointer"
              aria-label="SAQ Studio Home"
            >
              <div className="relative h-10 px-2.5 py-1 bg-neutral-950 rounded-lg border border-neutral-800 flex items-center justify-center shadow-xs transition-all group-hover:bg-black group-hover:border-black">
                <Image
                  src="/last.png"
                  alt="SAQ Studio Logo"
                  width={76}
                  height={38}
                  className="h-7 w-auto object-contain transition-transform group-hover:scale-105"
                  unoptimized
                />
              </div>
            </Link>

            <p className="text-xs text-black/70 font-mono leading-relaxed max-w-sm">
              Monochrome simplicity, architectural restraint, and clear communication. Crafting websites that inspire and convert for forward-thinking enterprises.
            </p>

            <div className="pt-2 flex flex-col space-y-1.5 font-mono text-xs">
              <span className="text-black/50 uppercase tracking-wider text-[11px]">Direct Line</span>
              <a href="tel:+917510466725" className="font-bold text-black hover:underline">
                +91 75104 66725
              </a>
              <a href="mailto:contact@saqstudio.in" className="text-black/80 hover:text-black hover:underline">
                contact@saqstudio.in
              </a>
            </div>
          </div>

          {/* 4 Categorized Columns (Cols 5-12) */}
          <div className="md:col-span-8 lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-8 text-xs font-mono">
            {/* Column 1: Quick Links */}
            <div>
              <span className="block text-black font-bold uppercase tracking-wider mb-4 border-b border-black/15 pb-1">
                Quick Links
              </span>
              <ul className="space-y-2.5 text-black/70">
                <li>
                  <Link
                    href="/#home"
                    onClick={(e) => handleNavClick(e, 'overview')}
                    className="hover:text-black hover:underline transition-colors block"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#about"
                    onClick={(e) => handleNavClick(e, 'about')}
                    className="hover:text-black hover:underline transition-colors block"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#services"
                    onClick={(e) => handleNavClick(e, 'disciplines')}
                    className="hover:text-black hover:underline transition-colors block"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#process"
                    onClick={(e) => handleNavClick(e, 'process')}
                    className="hover:text-black hover:underline transition-colors block"
                  >
                    Process
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#portfolio"
                    onClick={(e) => handleNavClick(e, 'works')}
                    className="hover:text-black hover:underline transition-colors block"
                  >
                    Work
                  </Link>
                </li>
                <li>
                  <Link
                    href="/careers"
                    className="hover:text-black hover:underline transition-colors block font-semibold text-black"
                  >
                    Careers
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#faq"
                    onClick={(e) => handleNavClick(e, 'faq')}
                    className="hover:text-black hover:underline transition-colors block"
                  >
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 2: Services */}
            <div>
              <span className="block text-black font-bold uppercase tracking-wider mb-4 border-b border-black/15 pb-1">
                Services
              </span>
              <ul className="space-y-2.5 text-black/70">
                <li>
                  <Link href="/services/business-websites" className="hover:text-black hover:underline transition-colors block">
                    Business Websites
                  </Link>
                </li>
                <li>
                  <Link href="/services/portfolio-websites" className="hover:text-black hover:underline transition-colors block">
                    Portfolios
                  </Link>
                </li>
                <li>
                  <Link href="/services/landing-pages" className="hover:text-black hover:underline transition-colors block">
                    Landing Pages
                  </Link>
                </li>
                <li>
                  <Link href="/services/website-redesign" className="hover:text-black hover:underline transition-colors block">
                    Redesigns
                  </Link>
                </li>
                <li>
                  <Link href="/web-development-services" className="hover:text-black hover:underline transition-colors block">
                    Web Dev Services
                  </Link>
                </li>
                <li>
                  <Link href="/website-design-agency" className="hover:text-black hover:underline transition-colors block">
                    Web Design Agency
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3: Solutions */}
            <div>
              <span className="block text-black font-bold uppercase tracking-wider mb-4 border-b border-black/15 pb-1">
                Solutions
              </span>
              <ul className="space-y-2.5 text-black/70">
                <li>
                  <Link href="/custom-website-development" className="hover:text-black hover:underline transition-colors block">
                    Custom Solutions
                  </Link>
                </li>
                <li>
                  <Link href="/ecommerce-development" className="hover:text-black hover:underline transition-colors block">
                    E-Commerce
                  </Link>
                </li>
                <li>
                  <Link href="/ai-website-development" className="hover:text-black hover:underline transition-colors block">
                    AI Websites
                  </Link>
                </li>
                <li>
                  <Link href="/restaurant-websites" className="hover:text-black hover:underline transition-colors block">
                    Restaurants
                  </Link>
                </li>
                <li>
                  <Link href="/real-estate-websites" className="hover:text-black hover:underline transition-colors block">
                    Real Estate
                  </Link>
                </li>
                <li>
                  <Link href="/healthcare-websites" className="hover:text-black hover:underline transition-colors block">
                    Healthcare
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 4: Legal */}
            <div>
              <span className="block text-black font-bold uppercase tracking-wider mb-4 border-b border-black/15 pb-1">
                Legal
              </span>
              <ul className="space-y-2.5 text-black/70">
                <li>
                  <Link href="/legal/privacy-policy" className="hover:text-black hover:underline transition-colors block">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/legal/terms-of-service" className="hover:text-black hover:underline transition-colors block">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="/legal/refund-policy" className="hover:text-black hover:underline transition-colors block">
                    Refund Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Quality Badges & Performance Metrics */}
        <div className="py-6 border-b border-black/10 flex flex-wrap items-center justify-between gap-6 font-mono text-xs text-black/70">
          <div className="flex flex-wrap items-center gap-6 sm:gap-10">
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-black" />
              <span>Performance: <strong className="text-black font-bold">Lighthouse 99+</strong></span>
            </div>
            <div className="flex items-center gap-2">
              <Layers className="w-4 h-4 text-black" />
              <span>Response Time: <strong className="text-black font-bold">&lt; 200ms</strong></span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-black" />
              <span>Approach: <strong className="text-black font-bold">Bespoke Only</strong></span>
            </div>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 border border-black/30 hover:border-black rounded-full px-4 py-1.5 text-xs font-mono uppercase hover:bg-black hover:text-white transition-all cursor-pointer shadow-xs hover:scale-105 active:scale-95"
            aria-label="Back to top"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Bottom Bar: Copyright & Attribution */}
        <div className="pt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs font-mono text-black/50">
          <div>
            © {new Date().getFullYear()} SAQ STUDIO. All rights reserved.
          </div>
          <div>
            Designed with architectural restraint and engineering excellence.
          </div>
        </div>
      </div>
    </footer>
  );
}
