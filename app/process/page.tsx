import React from 'react';
import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Process } from '@/components/Process';
import Link from 'next/link';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Our Methodology & 7-Phase Process | SAQ Studio',
  description: 'Explore the 7-phase digital engineering methodology of SAQ Studio: Discovery, Planning, Design, Development, Testing, Launch, and Ongoing Support.',
};

export default function ProcessPage() {
  return (
    <div className="min-h-screen bg-white text-black font-sans selection:bg-black selection:text-white">
      <Header />
      
      <main className="pt-24 pb-16">
        {/* Back Link */}
        <div className="w-full px-6 sm:px-10 lg:px-16 pt-6 pb-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-black/60 hover:text-black transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Home</span>
          </Link>
        </div>

        {/* The 7-Phase Process Component */}
        <Process />

        {/* CTA Section */}
        <section className="py-16 border-t border-black/10 bg-neutral-50/50">
          <div className="w-full px-6 sm:px-10 lg:px-16 max-w-4xl mx-auto text-center space-y-6">
            <span className="text-xs font-mono uppercase tracking-widest text-black/50">
              Ready to collaborate?
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold uppercase tracking-tight text-black">
              Let&apos;s Build Your Digital Flagship
            </h2>
            <p className="text-sm text-black/70 max-w-xl mx-auto leading-relaxed">
              Every project begins with a focused discovery conversation. Tell us about your goals and vision.
            </p>
            <div className="pt-2">
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-black text-white text-xs font-bold uppercase tracking-wider rounded-full hover:bg-neutral-800 transition-all shadow-xs hover:scale-105"
              >
                <span>Start A Project</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
