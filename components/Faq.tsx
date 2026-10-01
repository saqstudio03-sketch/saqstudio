'use client';

import React, { useState } from 'react';
import { ChevronDown, ArrowRight, MessageSquare, HelpCircle } from 'lucide-react';
import { ScrollReveal, StaggerContainer, StaggerItem } from './ScrollReveal';
import { motion, AnimatePresence } from 'motion/react';

interface FaqItem {
  id: string;
  num: string;
  question: string;
  answer: string;
  highlight?: string;
}

const FAQS_DATA: FaqItem[] = [
  {
    id: 'timeline',
    num: '01',
    question: 'How long does a project take?',
    answer:
      'Most custom business websites take between 3 to 6 weeks from discovery to launch, depending on the complexity and features required. We structure our timeline into distinct phases: Discovery & Strategy, Design & Prototyping, Full-Stack Development, and QA & Deployment—ensuring transparent milestones at every step.',
    highlight: 'Typical delivery: 3 to 6 weeks from kickoff to launch.',
  },
  {
    id: 'pricing',
    num: '02',
    question: 'How much does a website cost?',
    answer:
      'Every project is bespoke, tailored to your brand goals, scope of work, and functional requirements. We operate on a transparent, flat-fee project model with clear deliverables and zero hidden surprises. Following an initial discovery call, we provide a detailed proposal tailored to your budget and specifications.',
    highlight: 'Transparent flat-rate pricing with clearly defined deliverables.',
  },
  {
    id: 'hosting',
    num: '03',
    question: 'Do you provide hosting?',
    answer:
      'Yes. We handle end-to-end cloud infrastructure and deployment on modern enterprise platforms like Vercel and AWS. We configure SSL certificates, custom domain DNS records, automated global CDNs, and daily backups to ensure your website is blazingly fast, reliable, and secure 24/7.',
    highlight: 'Enterprise cloud hosting, global edge CDN, and automated SSL included.',
  },
  {
    id: 'updates',
    num: '04',
    question: 'Can I update my website later?',
    answer:
      'Absolutely. We build with modular, scalable architectures and can integrate headless content management systems (CMS) so your team can easily update copy, imagery, products, case studies, and blog posts without touching any code.',
    highlight: 'Intuitive headless CMS integration for effortless client updates.',
  },
  {
    id: 'support',
    num: '05',
    question: 'Do you offer ongoing support?',
    answer:
      'Yes. We provide continuous maintenance packages and ongoing retainer partnerships. Our support covers security updates, performance monitoring, SEO health checks, and on-demand feature additions as your business grows.',
    highlight: 'Dedicated ongoing support, performance tuning, and retainer agreements.',
  },
  {
    id: 'redesign',
    num: '06',
    question: 'Can you redesign an existing website?',
    answer:
      'Yes. We frequently transform legacy websites into modern, high-converting digital flagships. We perform a full UX and technical audit, preserve your hard-earned SEO equity and redirects, and completely elevate your visual identity and page speed.',
    highlight: 'Complete redesigns with full SEO preservation and performance upgrades.',
  },
];

interface FaqProps {
  onContactClick?: () => void;
}

export function Faq({ onContactClick }: FaqProps) {
  // Allow toggling items; start with first item open
  const [openIds, setOpenIds] = useState<string[]>(['timeline']);

  const toggleItem = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleAskQuestion = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onContactClick) {
      onContactClick();
    } else {
      const el = document.getElementById('contact');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="faq"
      className="py-20 md:py-28 border-b border-black/10 bg-transparent overflow-hidden"
    >
      <div className="w-full px-6 sm:px-10 lg:px-16">
        {/* Section Header */}
        <ScrollReveal yOffset={20} duration={0.6}>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14 sm:mb-16">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-black text-white text-[11px] font-mono uppercase tracking-widest mb-4">
                <HelpCircle className="w-3 h-3" />
                <span>FAQ</span>
              </div>
              <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight uppercase text-black leading-[0.98] mb-4">
                Frequently Asked<br />Questions
              </h2>
              <p className="text-base sm:text-lg text-black/80 font-normal leading-relaxed text-balance">
                Everything you need to know about working with SAQ Studio. Can&apos;t find the answer you&apos;re looking for? Feel free to contact us.
              </p>
            </div>

            {/* Direct Ask Button */}
            <div className="shrink-0">
              <button
                type="button"
                onClick={handleAskQuestion}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-black text-white hover:bg-neutral-800 text-xs font-mono uppercase tracking-widest transition-all shadow-xs hover:shadow-md cursor-pointer group"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Ask a Question</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </ScrollReveal>

        {/* FAQ Accordion List */}
        <StaggerContainer
          staggerDelay={0.06}
          className="border-t border-black divide-y divide-black/10 max-w-5xl"
        >
          {FAQS_DATA.map((item) => {
            const isOpen = openIds.includes(item.id);
            return (
              <StaggerItem key={item.id}>
                <div className="group transition-colors bg-white/90 backdrop-blur-xs hover:bg-white">
                  <button
                    type="button"
                    onClick={() => toggleItem(item.id)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${item.id}`}
                    className="w-full py-6 sm:py-8 px-4 sm:px-6 flex items-start justify-between gap-6 text-left cursor-pointer select-none"
                  >
                    <div className="flex items-start gap-4 sm:gap-8">
                      <span className="text-xs font-mono font-bold text-black/40 group-hover:text-black transition-colors pt-1">
                        /{item.num}
                      </span>
                      <div>
                        <h3 className="text-lg sm:text-2xl font-bold tracking-tight uppercase text-black group-hover:underline underline-offset-4">
                          {item.question}
                        </h3>
                        {!isOpen && (
                          <p className="text-xs sm:text-sm text-black/60 mt-1 line-clamp-1 font-normal font-sans">
                            {item.highlight || item.answer}
                          </p>
                        )}
                      </div>
                    </div>

                    <div
                      className={`p-2 border transition-all shrink-0 mt-0.5 ${
                        isOpen
                          ? 'border-black bg-black text-white'
                          : 'border-black/20 group-hover:border-black text-black bg-white'
                      }`}
                    >
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-300 ${
                          isOpen ? 'rotate-180 text-white' : 'text-black'
                        }`}
                      />
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={`faq-answer-${item.id}`}
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="pb-8 pt-2 px-4 sm:px-6 sm:pl-20 border-t border-black/5">
                          <p className="text-sm sm:text-base leading-relaxed text-black/80 max-w-3xl mb-4 font-normal">
                            {item.answer}
                          </p>
                          {item.highlight && (
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-neutral-100 border-l-2 border-black text-xs font-mono text-black/90">
                              <span className="font-bold uppercase tracking-wider">Note:</span>
                              <span>{item.highlight}</span>
                            </div>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        {/* Bottom Banner */}
        <ScrollReveal delay={0.2} yOffset={16} className="mt-12 max-w-5xl">
          <div className="border border-black p-6 sm:p-8 bg-neutral-950 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-6 shadow-sm">
            <div>
              <div className="text-[11px] font-mono uppercase tracking-widest text-neutral-400 mb-1">
                Have a unique requirement?
              </div>
              <p className="text-base sm:text-lg font-bold uppercase tracking-tight">
                We craft custom digital solutions tailored to your specific vision.
              </p>
            </div>
            <button
              type="button"
              onClick={handleAskQuestion}
              className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-black hover:bg-neutral-200 text-xs font-mono uppercase tracking-widest transition-colors shrink-0 cursor-pointer"
            >
              <span>Get in Touch</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
