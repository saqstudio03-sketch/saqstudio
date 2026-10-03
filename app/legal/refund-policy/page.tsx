import React from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export const metadata = {
  title: 'Refund Policy | SAQ Studio',
  description: 'Refund policy for SAQ Studio digital services and web development engagements.',
};

export default function RefundPolicyPage() {
  return (
    <div className="min-h-screen bg-white text-black font-sans selection:bg-black selection:text-white flex flex-col justify-between">
      <Header />

      <main className="pt-28 pb-20 px-6 sm:px-10 lg:px-16 flex-1">
        <div className="max-w-3xl mx-auto">
          <div className="mb-10 pb-6 border-b border-black/10">
            <span className="text-xs font-mono uppercase tracking-widest text-black/60 mb-2 block font-semibold">
              Commercial Terms
            </span>
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight uppercase text-black mb-3">
              Refund Policy
            </h1>
            <p className="text-xs font-mono text-black/50">
              Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </p>
          </div>

          <div className="space-y-8 text-black/80 font-normal leading-relaxed text-sm sm:text-base">
            <section className="space-y-3">
              <h2 className="text-xl font-bold uppercase tracking-tight text-black">
                1. General Overview
              </h2>
              <p>
                At SAQ Studio, we are dedicated to crafting bespoke, uncompromising digital platforms that exceed your highest technical and aesthetic expectations. Because our work involves custom architectural planning, bespoke code engineering, and dedicated personnel allocation, our refund policy reflects the customized nature of digital services.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold uppercase tracking-tight text-black">
                2. Project Retainers & Milestone Payments
              </h2>
              <p>
                Project deposits and phase retainer fees secure dedicated engineering and design capacity. Once discovery, architectural planning, or prototype design has commenced, initial deposit retainers are strictly non-refundable as they cover direct hours and creative labor already expended.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold uppercase tracking-tight text-black">
                3. Revisions & Satisfaction Guarantee
              </h2>
              <p>
                We include dedicated review and revision iterations within every project milestone. If early design concepts or functional specifications require alignment, our team works closely with your stakeholders during the revision rounds to adjust the deliverables to match the agreed project scope.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold uppercase tracking-tight text-black">
                4. Third-Party Services & Infrastructure
              </h2>
              <p>
                SAQ Studio is not responsible for disbursements or refund requests related to external third-party software, domain names, third-party hosting providers, cloud infrastructure (e.g. AWS, Vercel), or proprietary software licenses purchased on the client&apos;s behalf.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold uppercase tracking-tight text-black">
                5. Resolution & Support
              </h2>
              <p>
                Should any questions arise concerning project invoices or commercial agreements, please contact our billing administration directly at <a href="mailto:contact@saqstudio.in" className="text-black font-semibold underline">contact@saqstudio.in</a>.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
