'use client';

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { Phone, Mail, MessageSquare, Copy, Check, ArrowRight, Send, ExternalLink, ArrowUp } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

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

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.defaultMuted = true;
      videoRef.current.muted = true;
      videoRef.current.play().catch(() => {});
    }
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
    <section id="contact" className="relative pt-12 md:pt-16 pb-8 md:pb-10 bg-white overflow-hidden scroll-mt-20">
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

      <div className="relative z-10 w-full px-6 sm:px-10 lg:px-16">
        {/* Section Header */}
        <ScrollReveal yOffset={20} duration={0.6}>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6 sm:mb-8">
            <div>
              <div className="text-xs font-mono uppercase tracking-widest text-black/60 mb-1">
                Start A Project
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight uppercase text-black">
                Let&apos;s build something great.
              </h2>
            </div>
            <p className="text-sm text-black/70 max-w-md font-normal leading-relaxed">
              Fill out the form to tell us about your vision. Your details will be sent directly to our WhatsApp so we can start the conversation instantly.
            </p>
          </div>
        </ScrollReveal>

        {/* Contact Grid: Direct Line & Adjusted Compact Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start mb-8 sm:mb-10">
          {/* Left Column: Direct Studio Line & Coordinates (No borders) */}
          <ScrollReveal delay={0.1} yOffset={24} duration={0.7} className="lg:col-span-4">
            <div className="p-2 sm:p-3 bg-transparent space-y-3">
              <div>
                <span className="block text-xs font-mono uppercase tracking-wider text-black/50 mb-0.5 flex items-center gap-1.5">
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
                    {copiedPhone ? <Check className="w-3.5 h-3.5 text-black" /> : <Copy className="w-3.5 h-3.5 text-black/60" />}
                  </button>
                </div>
              </div>

              <div>
                <span className="block text-xs font-mono uppercase tracking-wider text-black/50 mb-0.5 flex items-center gap-1.5">
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
                    {copiedEmail ? <Check className="w-3.5 h-3.5 text-black" /> : <Copy className="w-3.5 h-3.5 text-black/60" />}
                  </button>
                </div>
              </div>

              <div>
                <span className="block text-xs font-mono uppercase tracking-wider text-black/50 mb-1 flex items-center gap-1.5">
                  <MessageSquare className="w-3.5 h-3.5 text-black" />
                  <span>Instant Messaging</span>
                </span>
                <a
                  href={`https://wa.me/${directPhoneRaw}?text=${encodeURIComponent("Hello SAQ Studio! I'd like to discuss a new website project.")}`}
                  className="inline-flex items-center justify-between w-full px-3.5 py-2 bg-black text-white text-xs font-mono uppercase tracking-wider rounded-md hover:bg-neutral-800 transition-all group"
                >
                  <span>Chat on WhatsApp</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </ScrollReveal>

          {/* Right Column: Inquiry Form (Smooth border, transparent, compact 3-column top row) */}
          <ScrollReveal delay={0.2} yOffset={24} duration={0.7} className="lg:col-span-8">
            {submitted ? (
              <div className="rounded-2xl border border-black/30 p-6 sm:p-8 text-center bg-transparent space-y-4">
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
              <form onSubmit={handleSubmit} className="rounded-2xl border border-black/30 p-4 sm:p-5 bg-transparent space-y-3">
                <div className="text-xs font-mono uppercase tracking-wider text-black/60 border-b border-black/10 pb-2 flex items-center justify-between">
                  <span>Project Vision & Details</span>
                  <span className="text-[11px] text-black/40">* Required fields</span>
                </div>

                {/* Row 1: Name, Phone, Email in 3 columns on tablet/desktop */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div>
                    <label htmlFor="name" className="block text-xs font-mono uppercase text-black/70 mb-1">
                      Your Name *
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-transparent border border-black/25 rounded-lg px-3 py-1.5 text-sm text-black placeholder:text-black/40 focus:outline-hidden focus:border-black transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-xs font-mono uppercase text-black/70 mb-1">
                      Phone Number *
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      required
                      placeholder="+1 (555) 000-0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-transparent border border-black/25 rounded-lg px-3 py-1.5 text-sm text-black placeholder:text-black/40 focus:outline-hidden focus:border-black transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-mono uppercase text-black/70 mb-1">
                      Email Address *
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-transparent border border-black/25 rounded-lg px-3 py-1.5 text-sm text-black placeholder:text-black/40 focus:outline-hidden focus:border-black transition-colors"
                    />
                  </div>
                </div>

                {/* Row 2: Industry & Service Needed */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label htmlFor="industry" className="block text-xs font-mono uppercase text-black/70 mb-1">
                      Industry
                    </label>
                    <select
                      id="industry"
                      value={formData.industry}
                      onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                      className="w-full bg-transparent border border-black/25 rounded-lg px-3 py-1.5 text-sm text-black focus:outline-hidden focus:border-black transition-colors"
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

                  <div>
                    <label htmlFor="serviceNeeded" className="block text-xs font-mono uppercase text-black/70 mb-1">
                      Service Needed
                    </label>
                    <select
                      id="serviceNeeded"
                      value={formData.serviceNeeded}
                      onChange={(e) => setFormData({ ...formData, serviceNeeded: e.target.value })}
                      className="w-full bg-transparent border border-black/25 rounded-lg px-3 py-1.5 text-sm text-black focus:outline-hidden focus:border-black transition-colors"
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
                </div>

                {/* Row 3: Project Details */}
                <div>
                  <label htmlFor="projectDetails" className="block text-xs font-mono uppercase text-black/70 mb-1">
                    Project Details
                  </label>
                  <textarea
                    id="projectDetails"
                    rows={2}
                    placeholder="Tell us about your project vision, target audience, specific requirements, or reference links..."
                    value={formData.projectDetails}
                    onChange={(e) => setFormData({ ...formData, projectDetails: e.target.value })}
                    className="w-full bg-transparent border border-black/25 rounded-lg p-2.5 text-sm text-black placeholder:text-black/40 focus:outline-hidden focus:border-black transition-colors resize-y min-h-[60px]"
                  />
                </div>

                {/* Row 4: Submit Button */}
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

                  <div className="text-[11px] font-mono text-black/50">
                    Direct WhatsApp routing · Instant response
                  </div>
                </div>
              </form>
            )}
          </ScrollReveal>
        </div>

        {/* Integrated Footer (Inside same section over background video) */}
        <div className="border-t border-black/15 pt-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4">
            {/* Brand Logo & Mission */}
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => (onNavigate ? onNavigate('overview') : window.scrollTo({ top: 0, behavior: 'smooth' }))}
                className="flex items-center text-left group cursor-pointer"
                aria-label="SAQ Studio Home"
              >
                <div className="relative h-8 px-2 py-0.5 bg-neutral-950 rounded-lg border border-neutral-800 flex items-center justify-center shadow-xs transition-all group-hover:bg-black group-hover:border-black">
                  <Image
                    src="/last.png"
                    alt="SAQ Studio Logo"
                    width={64}
                    height={32}
                    className="h-5 w-auto object-contain transition-transform group-hover:scale-105"
                    unoptimized
                  />
                </div>
              </button>
              <span className="text-xs text-black/60 font-mono hidden md:inline">
                Monochrome simplicity, architectural restraint, and clear communication.
              </span>
            </div>

            {/* Quick Links */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-xs font-mono uppercase tracking-wider">
              <button
                type="button"
                onClick={() => (onNavigate ? onNavigate('overview') : window.scrollTo({ top: 0, behavior: 'smooth' }))}
                className="hover:underline cursor-pointer"
              >
                Home
              </button>
              <button
                type="button"
                onClick={() => onNavigate?.('about')}
                className="hover:underline cursor-pointer"
              >
                About
              </button>
              <button
                type="button"
                onClick={() => onNavigate?.('works')}
                className="hover:underline cursor-pointer"
              >
                Works
              </button>
              <button
                type="button"
                onClick={() => onNavigate?.('disciplines')}
                className="hover:underline cursor-pointer"
              >
                Disciplines
              </button>
              <button
                type="button"
                onClick={() => onNavigate?.('faq')}
                className="hover:underline cursor-pointer"
              >
                FAQ
              </button>
              <button
                type="button"
                onClick={() => onNavigate?.('contact')}
                className="hover:underline cursor-pointer font-semibold text-black"
              >
                Inquire
              </button>
            </div>

            {/* Back to top button */}
            <div>
              <button
                type="button"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="inline-flex items-center gap-2 border border-black/30 hover:border-black rounded-full px-4 py-1.5 text-xs font-mono uppercase hover:bg-black hover:text-white transition-all cursor-pointer shadow-xs hover:scale-105 active:scale-95"
                aria-label="Back to top"
              >
                <span>Back to Top</span>
                <ArrowUp className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Bottom Copyright bar */}
          <div className="pt-3 border-t border-black/10 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs font-mono text-black/50">
            <div>
              © {new Date().getFullYear()} SAQ STUDIO. All rights reserved.
            </div>
            <div className="flex items-center gap-3">
              <a href="tel:+917510466725" className="hover:text-black hover:underline transition-colors">
                +91 75104 66725
              </a>
              <span>·</span>
              <a href="mailto:contact@saqstudio.in" className="hover:text-black hover:underline transition-colors">
                contact@saqstudio.in
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
