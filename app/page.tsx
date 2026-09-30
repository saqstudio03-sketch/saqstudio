'use client';

import React from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Works } from '@/components/Works';
import { Disciplines } from '@/components/Disciplines';
import { About } from '@/components/About';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { ScrollSequenceBackground } from '@/components/ScrollSequenceBackground';

export default function HomePage() {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-black font-sans selection:bg-black selection:text-white">
      {/* Top Header */}
      <Header onNavigate={scrollToSection} />

      {/* Main Content */}
      <main>
        <Hero
          onExploreClick={() => scrollToSection('works')}
          onScrollDownClick={() => scrollToSection('about')}
          onContactClick={() => scrollToSection('contact')}
        />
        
        {/* Scroll-driven 147-Frame Sequence Background Animation (About Us to Disciplines) */}
        <ScrollSequenceBackground
          totalFrames={147}
          framePrefix="/sequence/ezgif-frame-"
          frameExtension=".jpg"
        >
          <About />
          <Works onContactClick={() => scrollToSection('contact')} />
          <Disciplines onContactClick={() => scrollToSection('contact')} />
        </ScrollSequenceBackground>

        <Contact />
      </main>

      {/* Footer */}
      <Footer onNavigate={scrollToSection} />
    </div>
  );
}
