import React from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export const metadata = {
  title: 'Privacy Policy | SAQ Studio',
  description: 'Privacy policy and data handling practices for SAQ Studio.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white text-black font-sans selection:bg-black selection:text-white flex flex-col justify-between">
      <Header />

      <main className="pt-28 pb-20 px-6 sm:px-10 lg:px-16 flex-1">
        <div className="max-w-3xl mx-auto">
          <div className="mb-10 pb-6 border-b border-black/10">
            <span className="text-xs font-mono uppercase tracking-widest text-black/60 mb-2 block font-semibold">
              Legal Documentation
            </span>
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight uppercase text-black mb-3">
              Privacy Policy
            </h1>
            <p className="text-xs font-mono text-black/50">
              Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </p>
          </div>

          <div className="space-y-8 text-black/80 font-normal leading-relaxed text-sm sm:text-base">
            <section className="space-y-3">
              <h2 className="text-xl font-bold uppercase tracking-tight text-black">
                1. Introduction
              </h2>
              <p>
                SAQ Studio (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) respects your privacy and is committed to protecting your personal data. This privacy policy informs you how we manage your information when you visit our website, utilize our digital services, or engage with our studio, and outlines your privacy rights under applicable data protection laws.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold uppercase tracking-tight text-black">
                2. The Data We Collect About You
              </h2>
              <p>
                Personal data refers to any information relating to an identified or identifiable individual. We collect and process the following categories of information:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-black/70">
                <li><strong className="text-black">Identity & Contact Data:</strong> Name, email address, telephone number, and business organization submitted via inquiry forms or direct messaging.</li>
                <li><strong className="text-black">Technical & Usage Data:</strong> Internet protocol (IP) address, browser type, device specifications, operating system, and interaction telemetry when navigating our web properties.</li>
                <li><strong className="text-black">Project Brief Data:</strong> Requirements, industry sector, budget guidance, and specification documents provided during consultation requests.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold uppercase tracking-tight text-black">
                3. How We Use Your Personal Data
              </h2>
              <p>
                We only use your personal data for legitimate business operations, including:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-black/70">
                <li>Delivering, configuring, and maintaining web design and technical engineering services.</li>
                <li>Responding directly to inquiries, support requests, and scheduling discovery consultations.</li>
                <li>Ensuring technical security, performance optimization, and fraud prevention across our digital infrastructure.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold uppercase tracking-tight text-black">
                4. Data Security & Storage
              </h2>
              <p>
                We have implemented industry-standard technical and operational security safeguards to protect your personal information from accidental loss, unauthorized access, alteration, or disclosure. Access to client data is strictly restricted to personnel and verified technical contractors who require it for operational fulfillment.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold uppercase tracking-tight text-black">
                5. Contact & Privacy Inquiries
              </h2>
              <p>
                If you have questions regarding this Privacy Policy or wish to exercise your legal rights regarding your personal information, please contact our data governance desk at <a href="mailto:contact@saqstudio.in" className="text-black font-semibold underline">contact@saqstudio.in</a> or call <a href="tel:+917510466725" className="text-black font-semibold underline">+91 75104 66725</a>.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
