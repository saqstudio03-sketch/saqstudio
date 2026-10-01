'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';

interface HeaderProps {
  onNavigate: (id: string) => void;
}

export function Header({ onNavigate }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Home', id: 'overview' },
    { label: 'About Us', id: 'about' },
    { label: 'Works', id: 'works' },
    { label: 'Disciplines', id: 'disciplines' },
    { label: 'FAQ', id: 'faq' },
    { label: 'Contact', id: 'contact' },
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-black/10">
      <div className="w-full px-6 sm:px-10 lg:px-16 h-16 flex items-center justify-between">
        {/* Zone 1: Logo */}
        <button
          onClick={() => handleNavClick('overview')}
          className="flex items-center text-left group cursor-pointer"
          aria-label="SAQ Studio Home"
        >
          <div className="relative h-9 px-2.5 py-1 bg-neutral-950 rounded-lg border border-neutral-800 flex items-center justify-center shadow-xs transition-all group-hover:bg-black group-hover:border-black">
            <Image
              src="/last.png"
              alt="SAQ Studio Logo"
              width={72}
              height={36}
              className="h-7 w-auto object-contain transition-transform group-hover:scale-105"
              priority
              unoptimized
            />
          </div>
        </button>

        {/* Zone 2: 4-6 clean text navigation links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-black">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className="hover:underline underline-offset-4 decoration-black/40 text-black transition-all"
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Zone 3: 1-2 primary actions */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => handleNavClick('contact')}
            className="hidden sm:inline-flex items-center gap-1.5 px-5 py-2 text-xs font-semibold uppercase tracking-wider text-white bg-black rounded-full hover:bg-neutral-800 transition-all hover:scale-105 active:scale-95 cursor-pointer"
          >
            <span>Inquire</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>

          {/* Mobile hamburger toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-xs uppercase tracking-wider font-semibold px-3 py-1.5 border border-black/20 rounded-full text-black hover:bg-black hover:text-white transition-colors cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? 'Close' : 'Menu'}
          </button>
        </div>
      </div>

      {/* Mobile navigation drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-black/10 bg-white px-6 py-6 space-y-4">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className="block w-full text-left py-2 text-base font-medium text-black border-b border-black/5 hover:pl-2 transition-all cursor-pointer"
            >
              {item.label}
            </button>
          ))}
          <div className="pt-2">
            <button
              onClick={() => handleNavClick('contact')}
              className="w-full flex items-center justify-center gap-2 py-3 text-xs font-semibold uppercase tracking-wider text-white bg-black rounded-full hover:bg-neutral-800 transition-colors cursor-pointer"
            >
              <span>Start an Inquiry</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
