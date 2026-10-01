'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowUp } from 'lucide-react';

interface FooterProps {
  onNavigate: (id: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-black bg-white py-12 text-black">
      <div className="w-full px-6 sm:px-10 lg:px-16">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-10 pb-8">
          {/* Brand & Mission */}
          <div className="max-w-sm">
            <button
              onClick={() => onNavigate('overview')}
              className="flex items-center text-left group cursor-pointer mb-3"
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
            </button>
            <p className="text-xs text-black/60 font-mono mt-3 leading-relaxed">
              Monochrome simplicity, architectural restraint, and clear communication. Designed for permanence.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap gap-8 text-xs font-mono uppercase tracking-wider">
            <div>
              <span className="block text-black/40 mb-3">Index</span>
              <ul className="space-y-2">
                <li>
                  <button onClick={() => onNavigate('overview')} className="hover:underline">
                    Home
                  </button>
                </li>
                <li>
                  <button onClick={() => onNavigate('about')} className="hover:underline">
                    About Us
                  </button>
                </li>
                <li>
                  <button onClick={() => onNavigate('works')} className="hover:underline">
                    Selected Works
                  </button>
                </li>
                <li>
                  <button onClick={() => onNavigate('disciplines')} className="hover:underline">
                    Disciplines
                  </button>
                </li>
                <li>
                  <button onClick={() => onNavigate('faq')} className="hover:underline">
                    FAQ
                  </button>
                </li>
                <li>
                  <button onClick={() => onNavigate('contact')} className="hover:underline">
                    Inquire
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <span className="block text-black/40 mb-3">Direct</span>
              <ul className="space-y-2">
                <li>
                  <a href="tel:+917510466725" className="hover:underline">
                    +91 75104 66725
                  </a>
                </li>
                <li>
                  <a href="mailto:contact@saqstudio.in" className="hover:underline">
                    contact@saqstudio.in
                  </a>
                </li>
                <li>
                  <a href="#contact" onClick={() => onNavigate('contact')} className="hover:underline">
                    WhatsApp Desk
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Back to top button */}
          <div>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 border border-black rounded-full px-5 py-2 text-xs font-mono uppercase hover:bg-black hover:text-white transition-all cursor-pointer shadow-xs hover:scale-105 active:scale-95"
              aria-label="Back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs font-mono text-black/50">
          <div>
            © {new Date().getFullYear()} SAQ STUDIO. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
