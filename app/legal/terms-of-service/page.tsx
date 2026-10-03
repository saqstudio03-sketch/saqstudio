import React from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export const metadata = {
  title: 'Terms of Service | SAQ Studio',
  description: 'Terms of service and legal agreements for using SAQ Studio services and website.',
};

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-white text-black font-sans selection:bg-black selection:text-white flex flex-col justify-between">
      <Header />

      <main className="pt-28 pb-20 px-6 sm:px-10 lg:px-16 flex-1">
        <div className="max-w-3xl mx-auto">
          <div className="mb-10 pb-6 border-b border-black/10">
            <span className="text-xs font-mono uppercase tracking-widest text-black/60 mb-2 block font-semibold">
              Legal Agreements
            </span>
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight uppercase text-black mb-3">
              Terms of Service
            </h1>
            <p className="text-xs font-mono text-black/50">
              Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </p>
          </div>

          <div className="space-y-8 text-black/80 font-normal leading-relaxed text-sm sm:text-base">
            <section className="space-y-3">
              <h2 className="text-xl font-bold uppercase tracking-tight text-black">
                1. Agreement to Terms
              </h2>
              <p>
                By accessing or navigating the website located at <a href="https://saqstudio.in" className="text-black font-semibold underline">saqstudio.in</a> or engaging SAQ Studio for design, engineering, or consulting services, you agree to be bound by these Terms of Service, all applicable laws, and relevant regulatory requirements. If you do not agree with any provision of these terms, you are prohibited from using this platform.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold uppercase tracking-tight text-black">
                2. Intellectual Property & Use License
              </h2>
              <p>
                All digital assets, code repositories, brand graphics, and architectural concepts displayed on this website are the intellectual property of SAQ Studio unless otherwise specified. Permission is granted to temporarily view and interact with the materials on our platform for informational and non-commercial assessment only.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold uppercase tracking-tight text-black">
                3. Client Engagements & Deliverables
              </h2>
              <p>
                Specific project scopes, timelines, technical deliverables, and intellectual property transfers are governed by individual Master Services Agreements (MSA) or formal Statements of Work (SOW) executed between SAQ Studio and the client prior to project commencement.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold uppercase tracking-tight text-black">
                4. Warranty Disclaimer
              </h2>
              <p>
                The materials and information on this website are provided &quot;as is&quot; without warranties of any kind, whether express or implied. SAQ Studio disclaims all other representations and warranties, including fitness for a particular purpose or non-infringement of third-party rights.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold uppercase tracking-tight text-black">
                5. Limitation of Liability
              </h2>
              <p>
                In no event shall SAQ Studio, its directors, developers, or subcontractors be liable for any direct, indirect, incidental, or consequential damages resulting from the use or inability to use the platform, even if advised of the possibility of such damages.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
