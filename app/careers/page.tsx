'use client';

import React, { useState } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ArrowRight, Briefcase, GraduationCap, CheckCircle2, Send, Paperclip } from 'lucide-react';

export default function CareersPage() {
  const [appType, setAppType] = useState<'job' | 'internship'>('job');
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    email: '',
    position: 'Frontend Engineer (React/Next.js)',
    customPosition: '',
    resume: '',
    message: ''
  });
  const [fileName, setFileName] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFileName(file.name);
      if (!formData.resume) {
        setFormData(prev => ({ ...prev, resume: `File attached: ${file.name}` }));
      }
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.contact.trim() || !formData.email.trim()) {
      alert('Please fill in your Name, Contact Number, and Email.');
      return;
    }

    setIsSubmitting(true);
    const pos = formData.position === 'Other' && formData.customPosition.trim()
      ? formData.customPosition.trim()
      : formData.position;
    
    const typeTitle = appType === 'job' ? 'FULL-TIME / CONTRACT APPLICATION' : 'INTERNSHIP APPLICATION (3-6 MONTHS)';

    let messageText = `*SAQ STUDIO CAREER APPLICATION*\n`;
    messageText += `----------------------------------\n`;
    messageText += `*Type:* ${typeTitle}\n`;
    messageText += `*Full Name:* ${formData.name.trim()}\n`;
    messageText += `*Contact:* ${formData.contact.trim()}\n`;
    messageText += `*Email:* ${formData.email.trim()}\n`;
    messageText += `*Position:* ${pos}\n`;
    messageText += `*Portfolio / Resume Link:* ${formData.resume.trim() || (fileName ? `Attached: ${fileName}` : 'Link not provided')}\n`;
    if (formData.message.trim()) {
      messageText += `\n*Cover Note:*\n${formData.message.trim()}\n`;
    }

    const waUrl = `https://wa.me/917510466725?text=${encodeURIComponent(messageText)}`;
    setTimeout(() => {
      window.open(waUrl, '_blank');
      setIsSubmitting(false);
    }, 300);
  };

  return (
    <div className="min-h-screen bg-white text-black font-sans selection:bg-black selection:text-white flex flex-col justify-between">
      <Header />

      <main className="pt-28 pb-20 px-6 sm:px-10 lg:px-16 flex-1">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 sm:mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-black/60 mb-2 block font-semibold">
              Join Our Engineering & Design Studio
            </span>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight uppercase text-black mb-4">
              Careers & Opportunities
            </h1>
            <p className="text-sm sm:text-base text-black/70 max-w-xl mx-auto font-normal leading-relaxed">
              We build high-performance digital architecture with zero decorative noise. Choose your application stream and submit directly to our talent desk.
            </p>
          </div>

          {/* Stream Selector (Job vs Internship) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
            <button
              type="button"
              onClick={() => setAppType('job')}
              className={`p-6 rounded-2xl border text-left transition-all cursor-pointer ${
                appType === 'job'
                  ? 'border-black bg-black text-white shadow-md'
                  : 'border-black/20 bg-white/50 text-black hover:border-black/50'
              }`}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className={`p-2 rounded-lg border ${appType === 'job' ? 'border-white/20 bg-white/10' : 'border-black/10 bg-black/5'}`}>
                  <Briefcase className="w-5 h-5" />
                </div>
                <span className="font-mono text-xs uppercase tracking-wider font-bold">Full-Time / Contract</span>
              </div>
              <h3 className="text-lg font-bold uppercase mb-1">Professional Roles</h3>
              <p className={`text-xs leading-relaxed ${appType === 'job' ? 'text-white/70' : 'text-black/70'}`}>
                For experienced engineers, designers, and specialists looking to push digital craft to its absolute limits.
              </p>
            </button>

            <button
              type="button"
              onClick={() => setAppType('internship')}
              className={`p-6 rounded-2xl border text-left transition-all cursor-pointer ${
                appType === 'internship'
                  ? 'border-black bg-black text-white shadow-md'
                  : 'border-black/20 bg-white/50 text-black hover:border-black/50'
              }`}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className={`p-2 rounded-lg border ${appType === 'internship' ? 'border-white/20 bg-white/10' : 'border-black/10 bg-black/5'}`}>
                  <GraduationCap className="w-5 h-5" />
                </div>
                <span className="font-mono text-xs uppercase tracking-wider font-bold">3–6 Month Program</span>
              </div>
              <h3 className="text-lg font-bold uppercase mb-1">Studio Internship</h3>
              <p className={`text-xs leading-relaxed ${appType === 'internship' ? 'text-white/70' : 'text-black/70'}`}>
                Hands-on mentorship working on live production codebases, design systems, and client platforms.
              </p>
            </button>
          </div>

          {/* Application Form */}
          <form onSubmit={handleSubmit} className="p-6 sm:p-10 rounded-2xl border border-black/20 bg-white shadow-sm space-y-6">
            <div className="border-b border-black/10 pb-4 flex items-center justify-between">
              <div>
                <h3 className="text-lg sm:text-xl font-bold uppercase tracking-tight text-black">
                  {appType === 'job' ? 'Full-Time Position Application' : 'Studio Internship Application'}
                </h3>
                <p className="text-xs text-black/60 font-mono">
                  Applications are routed directly to our WhatsApp recruitment desk for instant evaluation.
                </p>
              </div>
              <span className="text-[11px] font-mono text-black/50 font-medium">* Required</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[11px] font-mono uppercase text-black font-semibold mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Alex Rivers"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-white border border-black/30 rounded-lg px-3.5 py-2 text-sm text-black placeholder:text-black/40 focus:outline-hidden focus:border-black font-medium"
                />
              </div>

              <div>
                <label className="block text-[11px] font-mono uppercase text-black font-semibold mb-1">
                  Contact Number (WhatsApp) *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+91 75104 66725"
                  value={formData.contact}
                  onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                  className="w-full bg-white border border-black/30 rounded-lg px-3.5 py-2 text-sm text-black placeholder:text-black/40 focus:outline-hidden focus:border-black font-medium"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[11px] font-mono uppercase text-black font-semibold mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  placeholder="alex@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-white border border-black/30 rounded-lg px-3.5 py-2 text-sm text-black placeholder:text-black/40 focus:outline-hidden focus:border-black font-medium"
                />
              </div>

              <div>
                <label className="block text-[11px] font-mono uppercase text-black font-semibold mb-1">
                  Target Role *
                </label>
                <select
                  value={formData.position}
                  onChange={(e) => setFormData({ ...formData, position: e.target.value })}
                  className="w-full bg-white border border-black/30 rounded-lg px-3.5 py-2 text-sm text-black focus:outline-hidden focus:border-black font-medium"
                >
                  <option value="Frontend Engineer (React/Next.js)">Frontend Engineer (React/Next.js)</option>
                  <option value="Full-Stack Engineer (Node/React)">Full-Stack Engineer (Node/React)</option>
                  <option value="UI/UX & Brand Designer">UI/UX & Brand Designer</option>
                  <option value="AI & Automation Engineer">AI & Automation Engineer</option>
                  <option value="Digital Marketing & Growth Specialist">Digital Marketing & Growth Specialist</option>
                  <option value="Other">Other Custom Specialization</option>
                </select>
              </div>
            </div>

            {formData.position === 'Other' && (
              <div>
                <label className="block text-[11px] font-mono uppercase text-black font-semibold mb-1">
                  Specify Your Specialization
                </label>
                <input
                  type="text"
                  placeholder="e.g. Motion Designer, DevOps Engineer"
                  value={formData.customPosition}
                  onChange={(e) => setFormData({ ...formData, customPosition: e.target.value })}
                  className="w-full bg-white border border-black/30 rounded-lg px-3.5 py-2 text-sm text-black placeholder:text-black/40 focus:outline-hidden focus:border-black font-medium"
                />
              </div>
            )}

            <div>
              <label className="block text-[11px] font-mono uppercase text-black font-semibold mb-1">
                Portfolio URL / Resume Link / GitHub
              </label>
              <input
                type="url"
                placeholder="https://github.com/yourhandle or https://yourportfolio.com"
                value={formData.resume}
                onChange={(e) => setFormData({ ...formData, resume: e.target.value })}
                className="w-full bg-white border border-black/30 rounded-lg px-3.5 py-2 text-sm text-black placeholder:text-black/40 focus:outline-hidden focus:border-black font-medium"
              />
              <div className="mt-2 flex items-center gap-3 text-xs font-mono text-black/60">
                <label className="inline-flex items-center gap-1.5 cursor-pointer hover:text-black">
                  <Paperclip className="w-3.5 h-3.5" />
                  <span>Attach Document (PDF)</span>
                  <input
                    type="file"
                    accept=".pdf,.doc,.docx"
                    onChange={handleFileChange}
                    className="hidden"
                  />
                </label>
                {fileName && <span className="font-semibold text-black">({fileName})</span>}
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-mono uppercase text-black font-semibold mb-1">
                Cover Note / Key Projects
              </label>
              <textarea
                rows={3}
                placeholder="Share your standout work, proudest engineering achievements, or what attracts you to SAQ Studio..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full bg-white border border-black/30 rounded-lg p-3 text-sm text-black placeholder:text-black/40 focus:outline-hidden focus:border-black font-medium resize-y"
              />
            </div>

            <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-black text-white text-xs font-mono uppercase tracking-wider rounded-full hover:bg-neutral-800 transition-all cursor-pointer font-bold disabled:opacity-50"
              >
                <Send className="w-3.5 h-3.5" />
                <span>{isSubmitting ? 'Routing Application...' : 'Send Application via WhatsApp'}</span>
              </button>

              <span className="text-[11px] font-mono text-black/60">
                Direct WhatsApp routing · Responses within 24–48 hours
              </span>
            </div>
          </form>

          {/* Perks & Studio Culture */}
          <div className="mt-16 pt-12 border-t border-black/10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 font-mono">
            <div className="p-4 border border-black/10 rounded-xl bg-white/40">
              <span className="text-[10px] uppercase tracking-wider text-black/50 block mb-1">01 / Remote</span>
              <h4 className="text-sm font-bold text-black uppercase mb-1">Flexible & Remote</h4>
              <p className="text-xs text-black/70 leading-relaxed">Work asynchronously from anywhere with high agency and zero micro-management.</p>
            </div>
            <div className="p-4 border border-black/10 rounded-xl bg-white/40">
              <span className="text-[10px] uppercase tracking-wider text-black/50 block mb-1">02 / Modern Stack</span>
              <h4 className="text-sm font-bold text-black uppercase mb-1">Next.js & TypeScript</h4>
              <p className="text-xs text-black/70 leading-relaxed">Build with modern, clean tooling, headless architectures, and zero legacy bloat.</p>
            </div>
            <div className="p-4 border border-black/10 rounded-xl bg-white/40">
              <span className="text-[10px] uppercase tracking-wider text-black/50 block mb-1">03 / Craft</span>
              <h4 className="text-sm font-bold text-black uppercase mb-1">High-Impact Work</h4>
              <p className="text-xs text-black/70 leading-relaxed">Direct client projects across architecture, technology, retail, and luxury brands.</p>
            </div>
            <div className="p-4 border border-black/10 rounded-xl bg-white/40">
              <span className="text-[10px] uppercase tracking-wider text-black/50 block mb-1">04 / Growth</span>
              <h4 className="text-sm font-bold text-black uppercase mb-1">Rapid Mentorship</h4>
              <p className="text-xs text-black/70 leading-relaxed">Continuous code reviews, architectural feedback, and accelerated technical growth.</p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
