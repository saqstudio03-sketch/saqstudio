import React from 'react';
import { notFound } from 'next/navigation';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { getSeoPageData, SEO_PAGES_DATA, SLUG_ALIASES } from '@/lib/seoPagesData';
import {
  Code,
  Palette,
  Wrench,
  Sparkles,
  Briefcase,
  Utensils,
  Heart,
  ShoppingBag,
  Store,
  Laptop,
  Building,
  ShieldCheck,
  Check,
  ArrowRight,
  LucideIcon
} from 'lucide-react';
import Link from 'next/link';

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

const ICONS_MAP: Record<string, LucideIcon> = {
  Code,
  Palette,
  Wrench,
  Sparkles,
  Briefcase,
  Utensils,
  Heart,
  ShoppingBag,
  Store,
  Laptop,
  Building,
  ShieldCheck
};

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const pageData = getSeoPageData(slug);
  if (!pageData) {
    return {
      title: 'SAQ STUDIO | Digital Architecture',
      description: 'Clean, minimal black and white website for SAQ STUDIO.',
    };
  }

  return {
    title: pageData.metaTitle,
    description: pageData.metaDescription,
  };
}

export function generateStaticParams() {
  const directSlugs = Object.keys(SEO_PAGES_DATA);
  const aliasSlugs = Object.keys(SLUG_ALIASES);
  const allSlugs = Array.from(new Set([...directSlugs, ...aliasSlugs]));
  return allSlugs.map((slug) => ({ slug }));
}

export default async function DynamicSeoPage({ params }: PageProps) {
  const { slug } = await params;
  const pageData = getSeoPageData(slug);

  if (!pageData) {
    notFound();
  }

  const IconComponent = ICONS_MAP[pageData.iconName] || Laptop;

  return (
    <div className="min-h-screen bg-white text-black font-sans selection:bg-black selection:text-white flex flex-col justify-between">
      <Header />

      <main className="pt-28 pb-20 px-6 sm:px-10 lg:px-16 flex-1">
        <div className="max-w-4xl mx-auto">
          {/* Hero */}
          <div className="text-center mb-16">
            <div className="w-16 h-16 mx-auto rounded-2xl border border-black/20 bg-black/5 flex items-center justify-center mb-6">
              <IconComponent className="w-8 h-8 text-black" />
            </div>
            <span className="text-xs font-mono uppercase tracking-widest text-black/60 mb-3 block font-semibold">
              {pageData.subtitle}
            </span>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight uppercase text-black mb-6">
              {pageData.title}
            </h1>
            <p className="text-base sm:text-lg text-black/70 max-w-2xl mx-auto leading-relaxed font-normal">
              {pageData.metaDescription}
            </p>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
            <div className="space-y-6 text-sm sm:text-base text-black/80 leading-relaxed font-normal">
              <h3 className="text-xl sm:text-2xl font-bold uppercase tracking-tight text-black">
                Engineered for Impact
              </h3>
              <p>{pageData.description1}</p>
              <p>{pageData.description2}</p>
            </div>

            {/* What's Included Box */}
            <div className="p-6 sm:p-8 rounded-2xl border border-black/20 bg-white/60 shadow-xs space-y-6">
              <h4 className="text-lg font-bold uppercase tracking-tight text-black">
                Capabilities & Deliverables
              </h4>
              <ul className="space-y-3.5">
                {pageData.features.map((feature, idx) => (
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
