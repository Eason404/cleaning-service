import { motion } from 'motion/react';
import { CheckCircle } from 'lucide-react';

export function About() {
  const highlights = [
    "Serving all of Massachusetts and New Hampshire",
    "Reliable and punctual service every time",
    "Meticulous attention to detail",
    "High-quality cleaning products and methods",
    "Customized cleaning plans for your needs",
    "Fully committed to customer satisfaction"
  ];

  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-6">
              Why Choose Si Cleaning Services?
            </h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Owned and operated by Simone, we bring a personal touch and professional dedication to every job. We understand that inviting a cleaning service into your home or business requires trust. That's why we focus on delivering consistent, high-quality results that make your space feel brand new.
            </p>
            
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {highlights.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-teal-500 shrink-0" />
                  <span className="text-slate-700 font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden bg-slate-100 relative shadow-xl">
               <img 
                src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=2070&auto=format&fit=crop" 
                alt="Clean living room" 
                className="object-cover w-full h-full"
               />
               <div className="absolute inset-0 bg-teal-900/10 mix-blend-multiply"></div>
            </div>
            {/* Decoration badge */}
            <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl border border-teal-50 hidden md:block">
              <div className="text-4xl font-black text-teal-600 mb-1">100%</div>
              <div className="text-sm font-medium text-slate-600 uppercase tracking-wider">Satisfaction</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
