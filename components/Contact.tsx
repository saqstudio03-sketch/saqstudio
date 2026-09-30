'use client';

import React, { useState } from 'react';
import { Phone, Mail, MessageSquare, Copy, Check, ArrowRight, Send, ExternalLink } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    businessName: '',
    industry: '',
    serviceNeeded: '',
    budget: '',
    timeline: '',
    projectDetails: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [lastWhatsAppUrl, setLastWhatsAppUrl] = useState('');

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

    const messageLines = [
      `*New Project Inquiry — SAQ Studio*`,
      ``,
      `*Name:* ${formData.name}`,
      `*Phone:* ${formData.phone}`,
      `*Email:* ${formData.email}`,
      formData.businessName ? `*Business Name:* ${formData.businessName}` : null,
      formData.industry ? `*Industry:* ${formData.industry}` : null,
      formData.serviceNeeded ? `*Service Needed:* ${formData.serviceNeeded}` : null,
      formData.budget ? `*Budget Range:* ${formData.budget}` : null,
      formData.timeline ? `*Timeline:* ${formData.timeline}` : null,
      ``,
      formData.projectDetails ? `*Project Details:*\n${formData.projectDetails}` : null,
    ].filter(Boolean).join('\n');

    const whatsappUrl = `https://wa.me/${directPhoneRaw}?text=${encodeURIComponent(messageLines)}`;
    setLastWhatsAppUrl(whatsappUrl);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      // Navigate to WhatsApp smoothly
      window.location.href = whatsappUrl;
    }, 400);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      phone: '',
      email: '',
      businessName: '',
      industry: '',
      serviceNeeded: '',
      budget: '',
      timeline: '',
      projectDetails: '',
    });
    setSubmitted(false);
  };

  return (
    <section id="contact" className="py-20 md:py-28 border-b border-black/10 bg-transparent overflow-hidden">
      <div className="w-full px-6 sm:px-10 lg:px-16">
        {/* Section Header */}
        <ScrollReveal yOffset={20} duration={0.6}>
          <div className="max-w-4xl mb-14 sm:mb-16">
            <div className="text-xs font-mono uppercase tracking-widest text-black/60 mb-3">
              Start A Project
            </div>
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight uppercase text-black leading-[0.95] mb-6">
              Let&apos;s build<br />
              something great.
            </h2>
            <p className="text-base sm:text-xl text-black/80 font-normal leading-relaxed max-w-2xl text-balance">
              Fill out the form to tell us about your vision. Your details will be sent directly to our WhatsApp so we can start the conversation instantly.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Direct Studio Line & Coordinates */}
          <ScrollReveal delay={0.1} yOffset={24} duration={0.7} className="lg:col-span-4 space-y-6">
            {/* Direct Line Card */}
            <div className="border border-black p-6 sm:p-7 bg-white space-y-6">
              <div>
                <span className="block text-xs font-mono uppercase tracking-wider text-black/50 mb-1.5 flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-black" />
                  <span>Direct Line</span>
                </span>
                <div className="flex items-center justify-between gap-3 mt-1">
                  <a
                    href={`tel:${directPhone.replace(/\s+/g, '')}`}
                    className="font-mono text-base sm:text-lg font-bold text-black hover:underline"
                  >
                    {directPhone}
                  </a>
                  <button
                    type="button"
                    onClick={() => handleCopy(directPhone, 'phone')}
                    className="p-1.5 border border-black/20 hover:border-black rounded-md text-xs font-mono text-black transition-colors cursor-pointer"
                    title="Copy phone number"
                    aria-label="Copy phone number"
                  >
                    {copiedPhone ? <Check className="w-3.5 h-3.5 text-black" /> : <Copy className="w-3.5 h-3.5 text-black/60" />}
                  </button>
                </div>
              </div>

              {/* Email Card */}
              <div className="border-t border-black/10 pt-5">
                <span className="block text-xs font-mono uppercase tracking-wider text-black/50 mb-1.5 flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-black" />
                  <span>Email</span>
                </span>
                <div className="flex items-center justify-between gap-3 mt-1">
                  <a
                    href={`mailto:${directEmail}`}
                    className="font-mono text-sm sm:text-base font-bold text-black hover:underline break-all"
                  >
                    {directEmail}
                  </a>
                  <button
                    type="button"
                    onClick={() => handleCopy(directEmail, 'email')}
                    className="p-1.5 border border-black/20 hover:border-black rounded-md text-xs font-mono text-black transition-colors cursor-pointer"
                    title="Copy email address"
                    aria-label="Copy email address"
                  >
                    {copiedEmail ? <Check className="w-3.5 h-3.5 text-black" /> : <Copy className="w-3.5 h-3.5 text-black/60" />}
                  </button>
                </div>
              </div>

              {/* Instant WhatsApp Quick Link */}
              <div className="border-t border-black/10 pt-5">
                <span className="block text-xs font-mono uppercase tracking-wider text-black/50 mb-2 flex items-center gap-1.5">
                  <MessageSquare className="w-3.5 h-3.5 text-black" />
                  <span>Instant Messaging</span>
                </span>
                <a
                  href={`https://wa.me/${directPhoneRaw}?text=${encodeURIComponent("Hello SAQ Studio! I'd like to discuss a new website project.")}`}
                  className="inline-flex items-center justify-between w-full px-4 py-2.5 bg-black text-white text-xs font-mono uppercase tracking-wider rounded-md hover:bg-neutral-800 transition-all group"
                >
                  <span>Chat on WhatsApp</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>

            {/* Response Time Guarantee */}
            <div className="border border-black/20 p-5 bg-neutral-50/70 text-xs font-mono text-black/80 space-y-2">
              <div className="font-bold uppercase tracking-wider text-black flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Instant Direct Dispatch</span>
              </div>
              <p className="leading-relaxed text-black/60">
                Form submissions automatically pre-fill your structured project inquiry into WhatsApp for immediate triage by our principal developers.
              </p>
            </div>
          </ScrollReveal>

          {/* Right Column: Inquiry Form */}
          <ScrollReveal delay={0.2} yOffset={24} duration={0.7} className="lg:col-span-8">
            {submitted ? (
              <div className="border border-black p-8 sm:p-12 text-center bg-white space-y-6">
                <div className="w-12 h-12 mx-auto rounded-full border border-black flex items-center justify-center">
                  <Check className="w-6 h-6 text-black" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold uppercase tracking-tight text-black">
                  Inquiry Dispatched to WhatsApp
                </h3>
                <p className="text-sm sm:text-base text-black/80 max-w-lg mx-auto leading-relaxed">
                  Thank you, <span className="font-semibold text-black">{formData.name}</span>. Your project brief has been formatted. If WhatsApp did not open automatically, click the button below to continue:
                </p>
                {lastWhatsAppUrl && (
                  <div className="pt-2 flex flex-wrap justify-center gap-4">
                    <a
                      href={lastWhatsAppUrl}
                      className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white text-xs font-semibold uppercase tracking-wider rounded-full hover:bg-neutral-800 transition-all cursor-pointer"
                    >
                      <span>Open WhatsApp Chat</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                    <button
                      type="button"
                      onClick={handleReset}
                      className="px-6 py-3 border border-black rounded-full text-xs font-semibold uppercase tracking-wider hover:bg-black hover:text-white transition-colors cursor-pointer"
                    >
                      Fill Another Form
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="border border-black p-6 sm:p-10 bg-white space-y-6">
                <div className="text-xs font-mono uppercase tracking-wider text-black/60 border-b border-black/10 pb-4 flex items-center justify-between">
                  <span>Project Vision & Details</span>
                  <span className="text-[11px] text-black/40">* Required fields</span>
                </div>

                {/* Row 1: Name & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-xs font-mono uppercase text-black/70 mb-2">
                      Your Name *
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-white border border-black/30 px-3.5 py-2.5 text-sm text-black placeholder:text-black/30 focus:outline-hidden focus:border-black transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-xs font-mono uppercase text-black/70 mb-2">
                      Phone Number *
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      required
                      placeholder="+1 (555) 000-0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-white border border-black/30 px-3.5 py-2.5 text-sm text-black placeholder:text-black/30 focus:outline-hidden focus:border-black transition-colors"
                    />
                  </div>
                </div>

                {/* Row 2: Email & Business Name */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-xs font-mono uppercase text-black/70 mb-2">
                      Email Address *
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-white border border-black/30 px-3.5 py-2.5 text-sm text-black placeholder:text-black/30 focus:outline-hidden focus:border-black transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="businessName" className="block text-xs font-mono uppercase text-black/70 mb-2">
                      Business Name
                    </label>
                    <input
                      id="businessName"
                      type="text"
                      placeholder="Acme Corp"
                      value={formData.businessName}
                      onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                      className="w-full bg-white border border-black/30 px-3.5 py-2.5 text-sm text-black placeholder:text-black/30 focus:outline-hidden focus:border-black transition-colors"
                    />
                  </div>
                </div>

                {/* Row 3: Industry & Service Needed */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="industry" className="block text-xs font-mono uppercase text-black/70 mb-2">
                      Industry
                    </label>
                    <select
                      id="industry"
                      value={formData.industry}
                      onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                      className="w-full bg-white border border-black/30 px-3.5 py-2.5 text-sm text-black focus:outline-hidden focus:border-black transition-colors"
                    >
                      <option value="">Select industry</option>
                      <option value="E-Commerce & Retail">E-Commerce & Retail</option>
                      <option value="SaaS & Technology">SaaS & Technology</option>
                      <option value="Architecture & Real Estate">Architecture & Real Estate</option>
                      <option value="Healthcare & Wellness">Healthcare & Wellness</option>
                      <option value="Fashion & Luxury">Fashion & Luxury</option>
                      <option value="Professional Services & Consulting">Professional Services & Consulting</option>
                      <option value="Media & Creative">Media & Creative</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="serviceNeeded" className="block text-xs font-mono uppercase text-black/70 mb-2">
                      Service Needed
                    </label>
                    <select
                      id="serviceNeeded"
                      value={formData.serviceNeeded}
                      onChange={(e) => setFormData({ ...formData, serviceNeeded: e.target.value })}
                      className="w-full bg-white border border-black/30 px-3.5 py-2.5 text-sm text-black focus:outline-hidden focus:border-black transition-colors"
                    >
                      <option value="">Select service</option>
                      <option value="High-Performance Web Development">High-Performance Web Development</option>
                      <option value="E-Commerce Platform">E-Commerce Platform</option>
                      <option value="Web Application & SaaS">Web Application & SaaS</option>
                      <option value="Full Website Redesign">Full Website Redesign</option>
                      <option value="Conversion Optimization (CRO)">Conversion Optimization (CRO)</option>
                      <option value="Bespoke Digital Experience">Bespoke Digital Experience</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                {/* Row 4: Budget Range & Timeline */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="budget" className="block text-xs font-mono uppercase text-black/70 mb-2">
                      Budget Range
                    </label>
                    <select
                      id="budget"
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full bg-white border border-black/30 px-3.5 py-2.5 text-sm text-black focus:outline-hidden focus:border-black transition-colors"
                    >
                      <option value="">Select budget</option>
                      <option value="Under $2,500">Under $2,500</option>
                      <option value="$2,500 - $5,000">$2,500 - $5,000</option>
                      <option value="$5,000 - $10,000">$5,000 - $10,000</option>
                      <option value="$10,000 - $25,000">$10,000 - $25,000</option>
                      <option value="$25,000+">$25,000+</option>
                      <option value="Flexible / Let's Discuss">Flexible / Let&apos;s Discuss</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="timeline" className="block text-xs font-mono uppercase text-black/70 mb-2">
                      Timeline
                    </label>
                    <select
                      id="timeline"
                      value={formData.timeline}
                      onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                      className="w-full bg-white border border-black/30 px-3.5 py-2.5 text-sm text-black focus:outline-hidden focus:border-black transition-colors"
                    >
                      <option value="">Select timeline</option>
                      <option value="Urgent (< 2 weeks)">Urgent (&lt; 2 weeks)</option>
                      <option value="2 - 4 weeks">2 - 4 weeks</option>
                      <option value="1 - 2 months">1 - 2 months</option>
                      <option value="2+ months">2+ months</option>
                      <option value="Flexible">Flexible</option>
                    </select>
                  </div>
                </div>

                {/* Row 5: Project Details */}
                <div>
                  <label htmlFor="projectDetails" className="block text-xs font-mono uppercase text-black/70 mb-2">
                    Project Details
                  </label>
                  <textarea
                    id="projectDetails"
                    rows={4}
                    placeholder="Tell us about your project vision, target audience, specific requirements, or reference links..."
                    value={formData.projectDetails}
                    onChange={(e) => setFormData({ ...formData, projectDetails: e.target.value })}
                    className="w-full bg-white border border-black/30 p-3.5 text-sm text-black placeholder:text-black/30 focus:outline-hidden focus:border-black transition-colors resize-y min-h-[100px]"
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-black text-white text-xs font-semibold uppercase tracking-wider rounded-full hover:bg-neutral-800 transition-all shadow-xs cursor-pointer hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50"
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
      </div>
    </section>
  );
}
