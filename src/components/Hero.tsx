import { motion } from 'motion/react';
import { PhoneCall, MapPin, Sparkles } from 'lucide-react';

export function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-50">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      <div className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 rounded-full bg-teal-400 opacity-20 blur-[120px] w-[600px] h-[400px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-50 text-teal-700 text-sm font-semibold border border-teal-100">
                <MapPin className="w-4 h-4" />
                Serving Massachusetts & New Hampshire
              </span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-slate-900 tracking-tight mb-8 leading-[1.1]">
              Detailed cleaning for a <span className="text-teal-500 inline-block">welcoming space.</span>
            </h1>
            
            <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
              Reliable, high-quality residential and commercial cleaning services tailored to your needs. Let us make every space clean, fresh, and welcoming.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="tel:5083833084" className="w-full sm:w-auto flex items-center justify-center gap-2 bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 rounded-full text-lg font-bold transition-all shadow-lg shadow-teal-200 hover:-translate-y-0.5">
                <PhoneCall className="w-5 h-5" />
                <span>Call Simone for a Free Quote</span>
              </a>
              <a href="#services" className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white border-2 border-slate-200 hover:border-slate-300 text-slate-700 px-8 py-4 rounded-full text-lg font-bold transition-all">
                <Sparkles className="w-5 h-5" />
                <span>Explore Services</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
