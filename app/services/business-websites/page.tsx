import React from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Check, ArrowRight, Briefcase } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'Business Websites | SAQ Studio',
  description: 'Establish authority and build trust with a premium, conversion-optimized business website engineered for service-based businesses, agencies, and B2B companies.',
};

const FEATURES = [
  'Custom UI/UX Design tailored to your brand identity',
  'Responsive design for mobile, tablet, and desktop',
  'SEO optimization for higher search engine rankings',
  'High-performance architecture for rapid load times',
  'Secure and scalable backend infrastructure',
  'Integration with CRM, marketing, and analytics tools'
];

export default function BusinessWebsitesPage() {
  return (
    <div className="min-h-screen bg-white text-black font-sans selection:bg-black selection:text-white flex flex-col justify-between">
      <Header />

      <main className="pt-28 pb-20 px-6 sm:px-10 lg:px-16 flex-1">
        <div className="max-w-4xl mx-auto">
          {/* Hero */}
          <div className="text-center mb-16">
            <div className="w-16 h-16 mx-auto rounded-2xl border border-black/20 bg-black/5 flex items-center justify-center mb-6">
              <Briefcase className="w-8 h-8 text-black" />
            </div>
            <span className="text-xs font-mono uppercase tracking-widest text-black/60 mb-3 block font-semibold">
              Service Overview
            </span>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight uppercase text-black mb-6">
              Business Websites
            </h1>
            <p className="text-base sm:text-lg text-black/70 max-w-2xl mx-auto leading-relaxed font-normal">
              Establish authority and build trust with a premium, conversion-optimized digital presence engineered for service-based businesses, agencies, and B2B companies.
            </p>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
            <div className="space-y-6 text-sm sm:text-base text-black/80 leading-relaxed font-normal">
              <h3 className="text-xl sm:text-2xl font-bold uppercase tracking-tight text-black">
                Why You Need a Bespoke Business Website
              </h3>
              <p>
                In today&apos;s digital landscape, your website is often the first interaction a potential client has with your brand. A generic template won&apos;t cut it. We design bespoke business websites that communicate your unique value proposition, establish credibility, and guide visitors towards taking action.
              </p>
              <p>
                By focusing on performance, aesthetics, and user experience, we ensure that your digital storefront not only looks exceptional but also serves as a powerful engine for lead generation and business growth.
              </p>
            </div>

            {/* What's Included Box */}
            <div className="p-6 sm:p-8 rounded-2xl border border-black/20 bg-white/60 shadow-xs space-y-6">
              <h4 className="text-lg font-bold uppercase tracking-tight text-black">
                What&apos;s Included
              </h4>
              <ul className="space-y-3.5">
                {FEATURES.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-black/80 font-medium">
                    <div className="w-4 h-4 rounded-full bg-black/10 border border-black/30 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-2.5 h-2.5 text-black" />
                    </div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-4 border-t border-black/10">
                <Link
                  href="/#contact"
                  className="w-full inline-flex items-center justify-between px-5 py-3 bg-black text-white text-xs font-mono uppercase tracking-wider rounded-xl hover:bg-neutral-800 transition-all font-bold group"
                >
                  <span>Start Your Project</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
