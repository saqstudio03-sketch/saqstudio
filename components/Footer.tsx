'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUp } from 'lucide-react';

interface FooterProps {
  onNavigate?: (id: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    <footer className="border-t border-black bg-white py-10 md:py-12 text-black relative z-10">
      <div className="w-full px-6 sm:px-10 lg:px-16">
        {/* Main Footer Grid: Brand Column + 4 Link Columns */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 pb-10">
          {/* Brand & Studio Direct Line (Cols 1-4) */}
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

            <div className="pt-1 flex flex-col space-y-1 font-mono text-xs">
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
              <ul className="space-y-2 text-black/70">
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
              <ul className="space-y-2 text-black/70">
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
              <ul className="space-y-2 text-black/70">
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
              <ul className="space-y-2 text-black/70">
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

        {/* Bottom Bar: Centered Copyright */}
        <div className="pt-6 border-t border-black/10 text-center text-xs font-mono text-black/50">
          © {new Date().getFullYear()} SAQ STUDIO. All rights reserved.
        </div>
      </div>

      {/* Floating Back to Top Button */}
      {showBackToTop && (
        <button
          type="button"
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 p-2.5 sm:p-3 bg-black text-white hover:bg-neutral-800 rounded-full shadow-lg border border-white/20 transition-all cursor-pointer hover:scale-105 active:scale-95 flex items-center justify-center"
          aria-label="Back to top"
          title="Back to top"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      )}
    </footer>
  );
}
