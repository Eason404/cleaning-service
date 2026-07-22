/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { LegalNoticeModal } from './components/LegalNoticeModal';

function Footer({ onOpenLegal }: { onOpenLegal: () => void }) {
  return (
    <footer className="bg-slate-900 text-slate-300 py-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-slate-400">
        <div className="flex flex-wrap justify-center gap-4 md:gap-6 uppercase tracking-widest font-bold text-slate-300">
          <span>MA & NH Service Area</span>
          <span className="text-slate-600 hidden sm:inline">|</span>
          <span>Detailed & Reliable</span>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4 text-center md:text-right">
          <span>© {new Date().getFullYear()} Si Cleaning Services • Built pro bono by volunteer contributors</span>
          <span className="hidden md:inline text-slate-700">•</span>
          <button
            onClick={onOpenLegal}
            className="text-teal-400 hover:text-teal-300 underline font-semibold cursor-pointer"
          >
            Legal & Privacy Notice
          </button>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  const [legalOpen, setLegalOpen] = useState(false);

  return (
    <div className="min-h-screen font-sans text-slate-900 selection:bg-teal-100 selection:text-teal-900 flex flex-col">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <Contact />
      </main>
      <Footer onOpenLegal={() => setLegalOpen(true)} />
      <LegalNoticeModal isOpen={legalOpen} onClose={() => setLegalOpen(false)} />
    </div>
  );
}
