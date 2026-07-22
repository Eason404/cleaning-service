import { motion } from 'motion/react';
import { Home, Building2, Sparkles, ArrowRightLeft, CalendarClock, Key } from 'lucide-react';

const services = [
  {
    title: 'Residential Cleaning',
    description: 'Keep your home pristine with our thorough and reliable residential cleaning services designed for your lifestyle.',
    icon: Home,
  },
  {
    title: 'Commercial Cleaning',
    description: 'Maintain a professional, spotless workspace to impress clients and keep your employees comfortable and productive.',
    icon: Building2,
  },
  {
    title: 'Deep Cleaning',
    description: 'A comprehensive, top-to-bottom clean that reaches the hidden dirt and grime standard cleanings might miss.',
    icon: Sparkles,
  },
  {
    title: 'Move-In / Move-Out',
    description: 'Start fresh in your new home or leave a perfectly clean space behind with our detailed transition cleaning.',
    icon: ArrowRightLeft,
  },
  {
    title: 'Regular Recurring',
    description: 'Weekly, bi-weekly, or monthly scheduling to keep your home or office consistently fresh without the hassle.',
    icon: CalendarClock,
  },
  {
    title: 'Airbnb / Short-Term',
    description: 'Fast, reliable turnover cleaning to ensure 5-star reviews and a welcoming environment for every new guest.',
    icon: Key,
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-6">
            Our Cleaning Services
          </h2>
          <p className="text-lg text-slate-600">
            From cozy homes to bustling offices, Si Cleaning Services provides detailed, reliable solutions for every environment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-5 rounded-2xl border border-teal-100 flex flex-col sm:flex-row items-start gap-4 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="bg-teal-100 p-3 rounded-xl text-teal-600 shrink-0">
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-slate-900 mb-1">
                    {service.title}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
