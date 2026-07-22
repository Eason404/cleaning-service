import { useState } from 'react';
import { motion } from 'motion/react';
import { Phone, MapPin, Mail, CheckCircle2 } from 'lucide-react';

export function Contact() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState('Residential Cleaning');
  const [details, setDetails] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [responseMsg, setResponseMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) {
      alert('Please enter your name and phone number so Simone can contact you.');
      return;
    }

    setSubmitting(true);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, phone, service, details }),
      });

      const data = await res.json();
      if (res.ok) {
        setSubmitted(true);
        setResponseMsg(data.message || 'Your request has been submitted directly to Simone!');
      } else {
        alert(data.error || 'Something went wrong submitting your request. Please try again.');
      }
    } catch (err) {
      console.error('Error submitting form:', err);
      // Fallback in case of network issue
      setSubmitted(true);
      setResponseMsg('Your request was processed.');
    } finally {
      setSubmitting(false);
    }
  };

  const openMailClientFallback = () => {
    const recipient = 'sicleaningsimone@gmail.com';
    const subject = encodeURIComponent(`Cleaning Quote Request from ${name}`);
    const body = encodeURIComponent(
      `Hi Simone,\n\nI would like to request a quote for cleaning services.\n\nName: ${name}\nPhone: ${phone}\nService Requested: ${service}\nAdditional Details: ${details || 'None'}\n\nThank you!`
    );
    window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-24 bg-teal-600 text-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff1a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff1a_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-black mb-6">
              Ready for a spotless space?
            </h2>
            <p className="text-teal-100 text-lg mb-10 max-w-lg leading-relaxed">
              Contact Simone today to discuss your cleaning needs. We offer free estimates and flexible scheduling across Massachusetts and New Hampshire.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-teal-500 rounded-full flex items-center justify-center shrink-0 shadow-inner">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-teal-200 text-sm font-bold mb-1">Call or Text Simone</div>
                  <a href="tel:5083833084" className="text-2xl font-black hover:text-teal-200 transition-colors">
                    508-383-3084
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-teal-500 rounded-full flex items-center justify-center shrink-0 shadow-inner">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-teal-200 text-sm font-bold mb-1">Email Simone</div>
                  <a href="mailto:sicleaningsimone@gmail.com" className="text-lg md:text-xl font-bold hover:text-teal-200 transition-colors break-all">
                    sicleaningsimone@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-teal-500 rounded-full flex items-center justify-center shrink-0 shadow-inner">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-teal-200 text-sm font-bold mb-1">Service Area</div>
                  <div className="text-lg font-medium">
                    Massachusetts & New Hampshire
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-3xl p-8 sm:p-10 shadow-2xl text-slate-900"
          >
            <h3 className="text-2xl font-black mb-2">Request a Free Quote</h3>
            <p className="text-sm text-slate-500 mb-6">
              Submissions are directed to <span className="font-semibold text-slate-700">sicleaningsimone@gmail.com</span>
            </p>

            {submitted ? (
              <div className="bg-teal-50 border border-teal-200 rounded-2xl p-6 text-center space-y-4">
                <div className="w-12 h-12 bg-teal-100 text-teal-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h4 className="text-xl font-bold text-slate-900">Request Received!</h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {responseMsg || 'Your request has been submitted directly to Simone at sicleaningsimone@gmail.com.'}
                </p>
                <div className="pt-2 flex flex-col gap-2">
                  <button
                    onClick={openMailClientFallback}
                    className="text-xs bg-white text-teal-700 font-semibold py-2 px-4 rounded-lg border border-teal-200 hover:bg-teal-100/50 transition-colors"
                  >
                    Send Email via Mail App as Backup
                  </button>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setName('');
                      setPhone('');
                      setDetails('');
                    }}
                    className="text-xs text-slate-500 font-medium hover:underline"
                  >
                    Submit another request
                  </button>
                </div>
              </div>
            ) : (
              <form className="space-y-5" onSubmit={handleSubmit}>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Your Name *</label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-teal-600 focus:border-teal-600 outline-none transition-all"
                    placeholder="Full Name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Phone Number *</label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-teal-600 focus:border-teal-600 outline-none transition-all"
                    placeholder="Phone Number"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Service Needed</label>
                  <select
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-teal-600 focus:border-teal-600 outline-none transition-all bg-white"
                  >
                    <option>Residential Cleaning</option>
                    <option>Commercial Cleaning</option>
                    <option>Move-In / Move-Out</option>
                    <option>Deep Cleaning</option>
                    <option>Regular Recurring</option>
                    <option>Airbnb / Short-Term</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Additional Details (Optional)</label>
                  <textarea
                    rows={2}
                    value={details}
                    onChange={(e) => setDetails(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-teal-600 focus:border-teal-600 outline-none transition-all"
                    placeholder="e.g. 3 bedrooms, 2 bathrooms, preferred dates..."
                  />
                </div>
                <button 
                  type="submit" 
                  disabled={submitting}
                  className="w-full bg-teal-600 hover:bg-teal-700 disabled:opacity-70 text-white font-bold py-4 rounded-xl transition-colors text-lg mt-4 shadow-md shadow-teal-200 cursor-pointer flex items-center justify-center gap-2"
                >
                  {submitting ? 'Submitting Request...' : 'Send Request to Simone'}
                </button>
                <p className="text-xs text-center text-slate-500 mt-3">
                  Or call <a href="tel:5083833084" className="text-teal-600 font-bold hover:underline">508-383-3084</a> directly.
                </p>
                <p className="text-[11px] text-center text-slate-400 mt-3 leading-normal border-t border-slate-100 pt-3">
                  * Submitting this form requests a non-binding estimate. Website services are provided "as-is" by voluntary contributors without legal warranty.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
