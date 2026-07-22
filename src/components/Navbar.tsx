import { Phone, Menu, X, Sparkles, Inbox } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { InquiriesModal } from './InquiriesModal';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [inquiriesOpen, setInquiriesOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <nav className="fixed w-full bg-white/90 backdrop-blur-md z-40 border-b border-teal-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <div className="flex-shrink-0 flex items-center gap-2">
              <div className="w-10 h-10 bg-teal-500 rounded-xl flex items-center justify-center text-white">
                <Sparkles className="w-6 h-6" />
              </div>
              <span className="text-2xl font-black tracking-tight text-teal-900 underline decoration-teal-400 decoration-4 underline-offset-4">
                Si Cleaning
              </span>
            </div>
            
            <div className="hidden md:flex items-center space-x-6">
              {navLinks.map((link) => (
                <a key={link.name} href={link.href} className="text-slate-600 hover:text-teal-600 font-bold transition-colors">
                  {link.name}
                </a>
              ))}
              <button
                onClick={() => setInquiriesOpen(true)}
                className="flex items-center gap-1.5 text-xs text-teal-700 bg-teal-50 hover:bg-teal-100 border border-teal-200 px-3 py-2 rounded-xl font-bold transition-colors cursor-pointer"
                title="View quotes submitted via web app"
              >
                <Inbox className="w-4 h-4 text-teal-600" />
                <span>Inquiries</span>
              </button>
              <a href="tel:5083833084" className="flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-full font-bold transition-all shadow-lg shadow-teal-200">
                <Phone className="w-4 h-4" />
                <span>508-383-3084</span>
              </a>
            </div>

            <div className="md:hidden flex items-center gap-2">
              <button
                onClick={() => setInquiriesOpen(true)}
                className="p-2 text-teal-700 bg-teal-50 rounded-lg border border-teal-200"
                title="Inquiries"
              >
                <Inbox className="w-5 h-5" />
              </button>
              <button onClick={() => setIsOpen(!isOpen)} className="text-slate-600 hover:text-slate-900 p-2">
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-b border-slate-100 overflow-hidden"
            >
              <div className="px-4 pt-2 pb-6 space-y-1">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block px-3 py-3 text-base font-medium text-slate-700 hover:text-teal-600 hover:bg-slate-50 rounded-lg"
                  >
                    {link.name}
                  </a>
                ))}
                <div className="pt-4 mt-2 border-t border-teal-100 space-y-2">
                  <button
                    onClick={() => {
                      setIsOpen(false);
                      setInquiriesOpen(true);
                    }}
                    className="flex items-center justify-center gap-2 w-full bg-teal-50 text-teal-800 border border-teal-200 px-5 py-2.5 rounded-xl font-bold"
                  >
                    <Inbox className="w-4 h-4" />
                    <span>View Received Inquiries</span>
                  </button>
                  <a href="tel:5083833084" className="flex items-center justify-center gap-2 w-full bg-teal-600 text-white px-5 py-3 rounded-xl font-bold">
                    <Phone className="w-5 h-5" />
                    <span>Call Simone: 508-383-3084</span>
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <InquiriesModal isOpen={inquiriesOpen} onClose={() => setInquiriesOpen(false)} />
    </>
  );
}
