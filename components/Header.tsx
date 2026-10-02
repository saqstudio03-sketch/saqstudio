'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence, useScroll, useSpring } from 'motion/react';

interface HeaderProps {
  onNavigate: (id: string) => void;
}

export function Header({ onNavigate }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('overview');
  const [hoveredNav, setHoveredNav] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  // Smooth scroll progress bar at header bottom
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  const navItems = [
    { label: 'Home', id: 'overview' },
    { label: 'About Us', id: 'about' },
    { label: 'Works', id: 'works' },
    { label: 'Disciplines', id: 'disciplines' },
    { label: 'FAQ', id: 'faq' },
    { label: 'Contact', id: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sectionElements = navItems.map((item) => document.getElementById(item.id));
      const scrollPos = window.scrollY + 140;

      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const el = sectionElements[i];
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setActiveSection(id);
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/85 backdrop-blur-md shadow-[0_4px_24px_-4px_rgba(0,0,0,0.06)] border-b border-black/10 py-0.5'
          : 'bg-white/70 backdrop-blur-xs border-b border-black/10 py-1.5'
      }`}
    >
      <div className="w-full px-6 sm:px-10 lg:px-16 h-16 flex items-center justify-between gap-4">
        {/* Zone 1: Logo & Studio Status */}
        <div className="flex items-center gap-4">
          <motion.button
            onClick={() => handleNavClick('overview')}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center text-left group cursor-pointer"
            aria-label="SAQ Studio Home"
          >
            <div className="relative h-9 px-2.5 py-1 bg-neutral-950 rounded-lg border border-neutral-800 flex items-center justify-center shadow-xs transition-all group-hover:bg-black group-hover:border-neutral-700 group-hover:shadow-md overflow-hidden">
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

          {/* Availability live pulse badge */}
          <div className="hidden xl:inline-flex items-center gap-2 px-3 py-1 rounded-full border border-black/10 bg-white/70 backdrop-blur-xs text-[11px] font-mono text-black/70 shadow-2xs">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="uppercase tracking-widest text-[10px] font-medium">Available Q4</span>
          </div>
        </div>

        {/* Zone 2: Aesthetic Floating Navigation Capsule */}
        <nav
          className="hidden md:flex items-center gap-1 p-1 bg-black/[0.03] border border-black/10 rounded-full text-xs font-mono uppercase tracking-wider backdrop-blur-xs shadow-2xs"
          onMouseLeave={() => setHoveredNav(null)}
        >
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            const isHovered = hoveredNav === item.id;

            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                onMouseEnter={() => setHoveredNav(item.id)}
                className={`relative px-4 py-1.5 rounded-full transition-colors cursor-pointer select-none flex items-center gap-1.5 ${
                  isActive ? 'text-black font-bold' : 'text-black/60 hover:text-black font-medium'
                }`}
              >
                {/* Hover capsule slide animation */}
                {isHovered && (
                  <motion.div
                    layoutId="navHoverPill"
                    transition={{ type: 'spring', stiffness: 350, damping: 28 }}
                    className="absolute inset-0 bg-white shadow-xs border border-black/10 rounded-full z-0"
                  />
                )}

                {/* Active capsule outline when not hovered */}
                {!isHovered && isActive && (
                  <motion.div
                    layoutId="navActivePill"
                    transition={{ type: 'spring', stiffness: 350, damping: 28 }}
                    className="absolute inset-0 bg-white/80 border border-black/10 rounded-full z-0 shadow-2xs"
                  />
                )}

                {/* Micro active dot */}
                {isActive && (
                  <motion.span
                    layoutId="navActiveDot"
                    className="relative z-10 w-1.5 h-1.5 rounded-full bg-black shrink-0"
                  />
                )}

                <span className="relative z-10 text-[11px] tracking-widest">{item.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Zone 3: CTA & Mobile Hamburger Toggle */}
        <div className="flex items-center gap-3">
          <motion.button
            onClick={() => handleNavClick('contact')}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2 text-xs font-mono uppercase tracking-wider text-white bg-black rounded-full hover:bg-neutral-900 transition-all shadow-xs hover:shadow-md cursor-pointer relative overflow-hidden group"
          >
            {/* Shimmer sweep */}
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/15 to-transparent pointer-events-none" />
            <span className="font-semibold text-[11px] tracking-widest">Inquire</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </motion.button>

          {/* Animated Mobile Hamburger Toggle */}
          <motion.button
            type="button"
            whileTap={{ scale: 0.95 }}
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="md:hidden flex items-center gap-2 px-3.5 py-1.5 border border-black/15 rounded-full text-black hover:bg-black/5 transition-colors cursor-pointer text-xs font-mono uppercase tracking-wider bg-white/80 backdrop-blur-xs active:scale-95"
            aria-label="Toggle navigation menu"
          >
            <div className="relative w-3.5 h-3 flex flex-col justify-between py-0.5">
              <span
                className={`w-full h-[1.5px] bg-black transition-all duration-300 origin-center ${
                  mobileMenuOpen ? 'rotate-45 translate-y-[3.5px]' : ''
                }`}
              />
              <span
                className={`w-full h-[1.5px] bg-black transition-all duration-300 origin-center ${
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
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden border-t border-black/10 bg-white/95 backdrop-blur-xl px-6 py-6 overflow-hidden shadow-lg"
          >
            <div className="space-y-1">
              {navItems.map((item, idx) => {
                const isActive = activeSection === item.id;
                return (
                  <motion.button
                    key={item.id}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.035, duration: 0.22 }}
                    onClick={() => handleNavClick(item.id)}
                    className={`w-full flex items-center justify-between py-3 px-4 rounded-xl text-left text-xs font-mono uppercase tracking-wider transition-all cursor-pointer ${
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
                onClick={() => handleNavClick('contact')}
                className="w-full flex items-center justify-center gap-2 py-3.5 text-xs font-mono font-semibold uppercase tracking-widest text-white bg-black rounded-full hover:bg-neutral-800 transition-all shadow-xs cursor-pointer"
              >
                <span>Start an Inquiry</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 1.5px Animated Scroll Progress Line */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-black/20 via-black to-black/80 origin-left"
        style={{ scaleX }}
      />
    </header>
  );
}

