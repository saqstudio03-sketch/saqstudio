'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Phone, Mail, MessageSquare, Copy, Check, ArrowRight, Send, ExternalLink } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';
import { motion } from 'motion/react';

interface ContactProps {
  onNavigate?: (id: string) => void;
}

export function Contact({ onNavigate }: ContactProps = {}) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    industry: '',
    serviceNeeded: '',
    projectDetails: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [lastWhatsAppUrl, setLastWhatsAppUrl] = useState('');

  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.defaultMuted = true;
      videoRef.current.muted = true;
      videoRef.current.play().catch(() => {});
    }
  }, []);

  // Smooth scroll-stopping assist: When scrolling down from FAQ, smoothly stop cleanly at Contact
  useEffect(() => {
    let isAutoSnapping = false;
    let lastScrollY = typeof window !== 'undefined' ? window.scrollY : 0;

    const handleScroll = () => {
      if (isAutoSnapping) return;
      const currentScrollY = window.scrollY;
      const scrollingDown = currentScrollY > lastScrollY;
      lastScrollY = currentScrollY;

      const el = sectionRef.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // When scrolling down past FAQ and entering Contact (top between 60px and 70% of viewport):
      // Smoothly stop correctly on Contact!
      if (scrollingDown && rect.top > 60 && rect.top < windowHeight * 0.7) {
        isAutoSnapping = true;
        const targetY = currentScrollY + rect.top;
        window.scrollTo({
          top: targetY,
          behavior: 'smooth',
        });
        setTimeout(() => {
          isAutoSnapping = false;
        }, 750);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const directPhone = '+91 75104 66725';
  const directPhoneRaw = '917510466725';
  const directEmail = 'contact@saqstudio.in';

  const handleCopy = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.email) return;

    setIsSubmitting(true);

    const message = [
      `*NEW INQUIRY VIA SAQSTUDIO.IN*`,
      `----------------------------------------`,
      `*Client:* ${formData.name}`,
      `*Phone:* ${formData.phone}`,
      `*Email:* ${formData.email}`,
      formData.industry ? `*Industry:* ${formData.industry}` : '',
      formData.serviceNeeded ? `*Service:* ${formData.serviceNeeded}` : '',
      `----------------------------------------`,
      `*Project Brief:*`,
      formData.projectDetails || 'No specific details provided yet.',
    ]
      .filter(Boolean)
      .join('\n');

    const whatsappUrl = `https://wa.me/${directPhoneRaw}?text=${encodeURIComponent(message)}`;
    setLastWhatsAppUrl(whatsappUrl);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      window.location.href = whatsappUrl;
    }, 400);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      phone: '',
      email: '',
      industry: '',
      serviceNeeded: '',
      projectDetails: '',
    });
    setSubmitted(false);
  };

  return (
    <motion.section
      id="contact"
      ref={sectionRef}
      initial={{ opacity: 0, y: 120 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ amount: 0.12, once: false }}
      transition={{ 
        duration: 0.85, 
        ease: [0.16, 1, 0.3, 1] 
      }}
      className="relative border-b border-black/10 bg-white overflow-hidden scroll-mt-0 min-h-[100dvh] lg:h-[100dvh] flex flex-col justify-between pt-16 pb-6 sm:pt-20 sm:pb-8 snap-start snap-always"
    >
      {/* Background Video Layer (Playing as continuous GIF loop) */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover"
          aria-hidden="true"
        >
          <source src="/contact_section_video.mp4" type="video/mp4" />
          <source src="/Contact%20section%20video.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="relative z-10 w-full px-6 sm:px-10 lg:px-16 flex-1 flex flex-col justify-between">
        {/* Section Header */}
        <ScrollReveal yOffset={20} duration={0.6}>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-4 sm:mb-6">
            <div>
              <div className="text-xs font-mono uppercase tracking-widest text-black/60 mb-1">
                Start A Project
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight uppercase text-black">
                Let&apos;s build something great.
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-black/70 max-w-md font-normal leading-relaxed">
              Fill out the form to tell us about your vision. Your details will be sent directly to our WhatsApp so we can start the conversation instantly.
            </p>
          </div>
        </ScrollReveal>

        {/* Contact Grid: Direct Line & Balanced Form framing the center mascot */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center my-auto py-2">
          {/* Left Column: Direct Studio Line & Coordinates (No borders) */}
          <ScrollReveal delay={0.1} yOffset={24} duration={0.7} className="lg:col-span-4">
            <div className="p-2 sm:p-3 bg-transparent space-y-3.5">
              <div>
                <span className="block text-xs font-mono uppercase tracking-wider text-black/70 mb-0.5 flex items-center gap-1.5 font-semibold">
                  <Phone className="w-3.5 h-3.5 text-black" />
                  <span>Direct Line</span>
                </span>
                <div className="flex items-center justify-between gap-2">
                  <a
                    href={`tel:${directPhone.replace(/\s+/g, '')}`}
                    className="font-mono text-base sm:text-lg font-bold text-black hover:underline"
                  >
                    {directPhone}
                  </a>
                  <button
                    type="button"
                    onClick={() => handleCopy(directPhone, 'phone')}
                    className="p-1 hover:bg-black/5 rounded-md text-xs font-mono text-black transition-colors cursor-pointer"
                    title="Copy phone number"
                    aria-label="Copy phone number"
                  >
                    {copiedPhone ? <Check className="w-3.5 h-3.5 text-black" /> : <Copy className="w-3.5 h-3.5 text-black/70" />}
                  </button>
                </div>
              </div>

              <div>
                <span className="block text-xs font-mono uppercase tracking-wider text-black/70 mb-0.5 flex items-center gap-1.5 font-semibold">
                  <Mail className="w-3.5 h-3.5 text-black" />
                  <span>Email</span>
                </span>
                <div className="flex items-center justify-between gap-2">
                  <a
                    href={`mailto:${directEmail}`}
                    className="font-mono text-sm sm:text-base font-bold text-black hover:underline break-all"
                  >
                    {directEmail}
                  </a>
                  <button
                    type="button"
                    onClick={() => handleCopy(directEmail, 'email')}
                    className="p-1 hover:bg-black/5 rounded-md text-xs font-mono text-black transition-colors cursor-pointer"
                    title="Copy email address"
                    aria-label="Copy email address"
                  >
                    {copiedEmail ? <Check className="w-3.5 h-3.5 text-black" /> : <Copy className="w-3.5 h-3.5 text-black/70" />}
                  </button>
                </div>
              </div>

              <div>
                <span className="block text-xs font-mono uppercase tracking-wider text-black/70 mb-1 flex items-center gap-1.5 font-semibold">
                  <MessageSquare className="w-3.5 h-3.5 text-black" />
                  <span>Instant Messaging</span>
                </span>
                <a
                  href={`https://wa.me/${directPhoneRaw}?text=${encodeURIComponent("Hello SAQ Studio! I'd like to discuss a new website project.")}`}
                  className="inline-flex items-center justify-between w-full px-3.5 py-2 bg-black text-white text-xs font-mono uppercase tracking-wider rounded-md hover:bg-neutral-800 transition-all group shadow-xs"
                >
                  <span>Chat on WhatsApp</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </ScrollReveal>

          {/* Right Column: Inquiry Form (Transparent box framing mascot) */}
          <ScrollReveal delay={0.2} yOffset={24} duration={0.7} className="lg:col-span-5 lg:col-start-8">
            {submitted ? (
              <div className="rounded-2xl border border-black/25 p-6 sm:p-8 text-center bg-transparent space-y-4">
                <div className="w-10 h-10 mx-auto rounded-full border border-black flex items-center justify-center">
                  <Check className="w-5 h-5 text-black" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold uppercase tracking-tight text-black">
                  Inquiry Dispatched to WhatsApp
                </h3>
                <p className="text-xs sm:text-sm text-black/80 max-w-lg mx-auto leading-relaxed">
                  Thank you, <span className="font-semibold text-black">{formData.name}</span>. Your project brief has been formatted. If WhatsApp did not open automatically, click the button below to continue:
                </p>
                {lastWhatsAppUrl && (
                  <div className="pt-1 flex flex-wrap justify-center gap-3">
                    <a
                      href={lastWhatsAppUrl}
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-black text-white text-xs font-semibold uppercase tracking-wider rounded-full hover:bg-neutral-800 transition-all cursor-pointer"
                    >
                      <span>Open WhatsApp Chat</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                    <button
                      type="button"
                      onClick={handleReset}
                      className="px-5 py-2.5 border border-black rounded-full text-xs font-semibold uppercase tracking-wider hover:bg-black hover:text-white transition-colors cursor-pointer"
                    >
                      Fill Another Form
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="rounded-2xl border border-black/25 p-4 sm:p-5 bg-transparent space-y-3">
                <div className="text-xs font-mono uppercase tracking-wider text-black border-b border-black/15 pb-2 flex items-center justify-between font-bold">
                  <span>Project Vision & Details</span>
                  <span className="text-[11px] text-black/60 font-medium">* Required fields</span>
                </div>

                {/* Row 1: Name & Phone in 2 balanced columns */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label htmlFor="name" className="block text-[11px] font-mono uppercase text-black mb-1 font-semibold">
                      Your Name *
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-transparent border border-black/25 rounded-lg px-3 py-1.5 text-sm text-black placeholder:text-black/50 focus:outline-hidden focus:border-black transition-colors font-medium"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-[11px] font-mono uppercase text-black mb-1 font-semibold">
                      Phone Number *
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      required
                      placeholder="+1 (555) 000-0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-transparent border border-black/25 rounded-lg px-3 py-1.5 text-sm text-black placeholder:text-black/50 focus:outline-hidden focus:border-black transition-colors font-medium"
                    />
                  </div>
                </div>

                {/* Row 2: Email & Industry in 2 balanced columns */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label htmlFor="email" className="block text-[11px] font-mono uppercase text-black mb-1 font-semibold">
                      Email Address *
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-transparent border border-black/25 rounded-lg px-3 py-1.5 text-sm text-black placeholder:text-black/50 focus:outline-hidden focus:border-black transition-colors font-medium"
                    />
                  </div>

                  <div>
                    <label htmlFor="industry" className="block text-[11px] font-mono uppercase text-black mb-1 font-semibold">
                      Industry
                    </label>
                    <select
                      id="industry"
                      value={formData.industry}
                      onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                      className="w-full bg-transparent border border-black/25 rounded-lg px-3 py-1.5 text-sm text-black focus:outline-hidden focus:border-black transition-colors font-medium"
                    >
                      <option value="" className="bg-white text-black">Select industry</option>
                      <option value="E-Commerce & Retail" className="bg-white text-black">E-Commerce & Retail</option>
                      <option value="SaaS & Technology" className="bg-white text-black">SaaS & Technology</option>
                      <option value="Architecture & Real Estate" className="bg-white text-black">Architecture & Real Estate</option>
                      <option value="Healthcare & Wellness" className="bg-white text-black">Healthcare & Wellness</option>
                      <option value="Fashion & Luxury" className="bg-white text-black">Fashion & Luxury</option>
                      <option value="Professional Services & Consulting" className="bg-white text-black">Professional Services & Consulting</option>
                      <option value="Media & Creative" className="bg-white text-black">Media & Creative</option>
                      <option value="Other" className="bg-white text-black">Other</option>
                    </select>
                  </div>
                </div>

                {/* Row 3: Service Needed full width */}
                <div>
                  <label htmlFor="serviceNeeded" className="block text-[11px] font-mono uppercase text-black mb-1 font-semibold">
                    Service Needed
                  </label>
                  <select
                    id="serviceNeeded"
                    value={formData.serviceNeeded}
                    onChange={(e) => setFormData({ ...formData, serviceNeeded: e.target.value })}
                    className="w-full bg-transparent border border-black/25 rounded-lg px-3 py-1.5 text-sm text-black focus:outline-hidden focus:border-black transition-colors font-medium"
                  >
                    <option value="" className="bg-white text-black">Select service</option>
                    <option value="High-Performance Web Development" className="bg-white text-black">High-Performance Web Development</option>
                    <option value="E-Commerce Platform" className="bg-white text-black">E-Commerce Platform</option>
                    <option value="Web Application & SaaS" className="bg-white text-black">Web Application & SaaS</option>
                    <option value="Full Website Redesign" className="bg-white text-black">Full Website Redesign</option>
                    <option value="Conversion Optimization (CRO)" className="bg-white text-black">Conversion Optimization (CRO)</option>
                    <option value="Bespoke Digital Experience" className="bg-white text-black">Bespoke Digital Experience</option>
                    <option value="Other" className="bg-white text-black">Other</option>
                  </select>
                </div>

                {/* Row 4: Project Details */}
                <div>
                  <label htmlFor="projectDetails" className="block text-[11px] font-mono uppercase text-black mb-1 font-semibold">
                    Project Details
                  </label>
                  <textarea
                    id="projectDetails"
                    rows={2}
                    placeholder="Tell us about your project vision, target audience, specific requirements, or reference links..."
                    value={formData.projectDetails}
                    onChange={(e) => setFormData({ ...formData, projectDetails: e.target.value })}
                    className="w-full bg-transparent border border-black/25 rounded-lg p-2.5 text-sm text-black placeholder:text-black/50 focus:outline-hidden focus:border-black transition-colors resize-y min-h-[58px] font-medium"
                  />
                </div>

                {/* Row 5: Submit Button */}
                <div className="pt-0.5 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-black text-white text-xs font-semibold uppercase tracking-wider rounded-full hover:bg-neutral-800 transition-all shadow-xs cursor-pointer hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Preparing WhatsApp...</span>
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5" />
                        <span>Send via WhatsApp</span>
                      </>
                    )}
                  </button>

                  <div className="text-[11px] font-mono text-black/70 font-medium">
                    Direct WhatsApp routing · Instant response
                  </div>
                </div>
              </form>
            )}
          </ScrollReveal>
        </div>
      </div>
    </motion.section>
  );
}
