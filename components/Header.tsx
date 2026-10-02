'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface HeaderProps {
  onNavigate: (id: string) => void;
}

export function Header({ onNavigate }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('overview');
  const [hoveredNav, setHoveredNav] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  // Lock scroll-spy updates temporarily when user explicitly clicks a nav item
  const isNavigatingRef = useRef(false);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const navItems = [
    { label: 'Home', id: 'overview' },
    { label: 'About Us', id: 'about' },
    { label: 'Works', id: 'works' },
    { label: 'Disciplines', id: 'disciplines' },
    { label: 'FAQ', id: 'faq' },
    { label: 'Contact', id: 'contact' },
  ];

  useEffect(() => {
    let ticking = false;

    const checkActiveSection = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      // 1. Top of page: always Home (overview)
      if (scrollY < 80) {
        setActiveSection('overview');
        return;
      }

      // 2. Bottom of page: always Contact
      if (scrollY + windowHeight >= documentHeight - 60) {
        setActiveSection('contact');
        return;
      }

      // 3. Focal line: 160px from viewport top (accounting for 64px header + visual bias)
      const focalY = 160;

      // Find the section that covers the focal point (checked in reverse order)
      for (let i = navItems.length - 1; i >= 0; i--) {
        const item = navItems[i];
        const el = document.getElementById(item.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= focalY && rect.bottom > 80) {
            setActiveSection(item.id);
            return;
          }
        }
      }

      // Fallback: which section top is closest to focalY
      let closestId = 'overview';
      let closestDist = Infinity;
      for (const item of navItems) {
        const el = document.getElementById(item.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          const dist = Math.abs(rect.top - focalY);
          if (dist < closestDist) {
            closestDist = dist;
            closestId = item.id;
          }
        }
      }
      setActiveSection(closestId);
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 20);

          if (!isNavigatingRef.current) {
            checkActiveSection();
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    const handleUserInteraction = () => {
      if (isNavigatingRef.current) {
        isNavigatingRef.current = false;
        if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('wheel', handleUserInteraction, { passive: true });
    window.addEventListener('touchstart', handleUserInteraction, { passive: true });

    // Initial check on mount
    checkActiveSection();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('wheel', handleUserInteraction);
      window.removeEventListener('touchstart', handleUserInteraction);
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
    };
  }, []);

  const handleNavClick = (id: string) => {
    isNavigatingRef.current = true;
    setActiveSection(id);
    setHoveredNav(null);
    setMobileMenuOpen(false);
    onNavigate(id);

    if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
    scrollTimeoutRef.current = setTimeout(() => {
      isNavigatingRef.current = false;
    }, 850);
  };

  return (
    <header
      className={`sticky top-0 z-40 transition-colors duration-300 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-md shadow-[0_4px_20px_-4px_rgba(0,0,0,0.06)] border-b border-black/10'
          : 'bg-white/70 backdrop-blur-xs border-b border-black/10'
      }`}
    >
      <div className="w-full px-6 sm:px-10 lg:px-16 h-16 flex items-center justify-between gap-4">
        {/* Zone 1: Logo */}
        <div className="flex items-center gap-4">
          <motion.button
            onClick={() => handleNavClick('overview')}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: 'spring', stiffness: 400, damping: 25 }}
            className="flex items-center text-left group cursor-pointer"
            aria-label="SAQ Studio Home"
          >
            <div className="relative h-9 px-2.5 py-1 bg-neutral-950 rounded-lg border border-neutral-800 flex items-center justify-center shadow-xs transition-colors group-hover:bg-black group-hover:border-neutral-700 group-hover:shadow-md overflow-hidden">
              <Image
                src="/last.png"
                alt="SAQ Studio Logo"
                width={72}
                height={36}
                className="h-7 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                priority
                unoptimized
              />
              {/* Subtle gloss sweep on hover */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none" />
            </div>
          </motion.button>
        </div>

        {/* Zone 2: Navigation Capsule with Active Pill Indicator */}
        <nav
          className="hidden md:flex items-center gap-1 p-1 bg-black/[0.04] border border-black/10 rounded-full text-xs font-mono uppercase tracking-wider backdrop-blur-xs shadow-2xs"
          onMouseLeave={() => setHoveredNav(null)}
        >
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            const isHovered = hoveredNav === item.id;

            return (
              <button
                key={item.id}
                type="button"
                onClick={() => handleNavClick(item.id)}
                onMouseEnter={() => setHoveredNav(item.id)}
                className="relative px-4 py-1.5 rounded-full cursor-pointer select-none text-[11px] font-mono tracking-widest uppercase transition-colors"
              >
                {/* Active Section Sliding Indicator Pill */}
                {isActive && (
                  <motion.div
                    layoutId="navActivePill"
                    transition={{
                      type: 'spring',
                      stiffness: 420,
                      damping: 32,
                      mass: 0.6,
                    }}
                    className="absolute inset-0 bg-white border border-black/10 rounded-full z-0 shadow-xs"
                  />
                )}

                {/* Subtle Hover Capsule (when hovering an inactive item) */}
                {isHovered && !isActive && (
                  <motion.div
                    layoutId="navHoverPill"
                    transition={{
                      type: 'spring',
                      stiffness: 450,
                      damping: 35,
                    }}
                    className="absolute inset-0 bg-black/[0.05] rounded-full z-0"
                  />
                )}

                <span
                  className={`relative z-10 transition-colors duration-200 ${
                    isActive
                      ? 'text-black font-bold'
                      : isHovered
                      ? 'text-black font-medium'
                      : 'text-black/60 hover:text-black font-medium'
                  }`}
                >
                  {item.label}
                </span>
              </button>
            );
          })}
        </nav>

        {/* Zone 3: CTA & Mobile Hamburger Toggle */}
        <div className="flex items-center gap-3">
          <motion.button
            type="button"
            onClick={() => handleNavClick('contact')}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 400, damping: 25 }}
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2 text-xs font-mono uppercase tracking-wider text-white bg-black rounded-full hover:bg-neutral-900 shadow-xs hover:shadow-md cursor-pointer relative overflow-hidden group"
          >
            {/* Shimmer sweep */}
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/15 to-transparent pointer-events-none" />
            <span className="font-semibold text-[11px] tracking-widest">Inquire</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </motion.button>

          {/* Animated Mobile Hamburger Toggle */}
          <motion.button
            type="button"
            whileTap={{ scale: 0.93 }}
            transition={{ type: 'spring', stiffness: 500, damping: 28 }}
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="md:hidden flex items-center gap-2 px-3.5 py-1.5 border border-black/15 rounded-full text-black hover:bg-black/5 transition-colors cursor-pointer text-xs font-mono uppercase tracking-wider bg-white/80 backdrop-blur-xs"
            aria-label="Toggle navigation menu"
          >
            <div className="relative w-3.5 h-3 flex flex-col justify-between py-0.5">
              <span
                className={`w-full h-[1.5px] bg-black transition-transform duration-300 origin-center ${
                  mobileMenuOpen ? 'rotate-45 translate-y-[3.5px]' : ''
                }`}
              />
              <span
                className={`w-full h-[1.5px] bg-black transition-transform duration-300 origin-center ${
                  mobileMenuOpen ? '-rotate-45 -translate-y-[3.5px]' : ''
                }`}
              />
            </div>
            <span className="text-[11px] font-medium">{mobileMenuOpen ? 'Close' : 'Menu'}</span>
          </motion.button>
        </div>
      </div>

      {/* Animated Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden border-t border-black/10 bg-white/95 backdrop-blur-xl px-6 py-6 overflow-hidden shadow-lg"
          >
            <div className="space-y-1">
              {navItems.map((item, idx) => {
                const isActive = activeSection === item.id;
                return (
                  <motion.button
                    key={item.id}
                    type="button"
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.025, duration: 0.2 }}
                    onClick={() => handleNavClick(item.id)}
                    className={`w-full flex items-center justify-between py-3 px-4 rounded-xl text-left text-xs font-mono uppercase tracking-wider transition-colors cursor-pointer ${
                      isActive
                        ? 'bg-black text-white font-bold shadow-xs'
                        : 'text-black/80 hover:bg-black/5 hover:pl-5'
                    }`}
                  >
                    <span>{item.label}</span>
                    <span className={`text-[10px] ${isActive ? 'text-white/60' : 'text-black/40'}`}>
                      /0{idx + 1}
                    </span>
                  </motion.button>
                );
              })}
            </div>
            <div className="pt-4 mt-3 border-t border-black/10">
              <button
                type="button"
                onClick={() => handleNavClick('contact')}
                className="w-full flex items-center justify-center gap-2 py-3.5 text-xs font-mono font-semibold uppercase tracking-widest text-white bg-black rounded-full hover:bg-neutral-800 transition-colors shadow-xs cursor-pointer"
              >
                <span>Start an Inquiry</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </header>
  );
}
