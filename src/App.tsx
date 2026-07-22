/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Sparkles } from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-wrap justify-center gap-4 md:gap-6 text-xs uppercase tracking-widest font-bold">
          <span>MA & NH Service Area</span>
          <span className="text-slate-600 hidden sm:inline">|</span>
          <span>Detailed & Reliable</span>
        </div>
        <div className="text-xs text-center md:text-right text-slate-400">
          © {new Date().getFullYear()} Si Cleaning Services • Professional Excellence by Simone
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen font-sans text-slate-900 selection:bg-teal-100 selection:text-teal-900 flex flex-col">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
