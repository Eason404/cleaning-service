import { X, ShieldCheck } from 'lucide-react';

interface LegalNoticeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function LegalNoticeModal({ isOpen, onClose }: LegalNoticeModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[85vh] flex flex-col shadow-2xl overflow-hidden border border-teal-100 text-slate-800">
        {/* Header */}
        <div className="bg-slate-900 text-white p-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-teal-500 rounded-xl flex items-center justify-center">
              <ShieldCheck className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="font-bold text-xl">Legal & Privacy Notice</h3>
              <p className="text-xs text-slate-300">Si Cleaning Services • Terms of Use & Disclaimers</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-slate-800 rounded-lg transition-colors text-white cursor-pointer"
            aria-label="Close legal notice"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto flex-1 space-y-6 text-sm leading-relaxed">
          <section className="space-y-2">
            <h4 className="font-bold text-teal-800 text-base">1. Pro Bono & Volunteer Disclaimer</h4>
            <p className="text-slate-600">
              This website was created and is maintained on a voluntary, pro bono basis by independent web contributors. 
              Services, web code, and digital features are provided strictly on an <strong>"AS IS" and "AS AVAILABLE"</strong> basis 
              without warranties of any kind, express or implied.
            </p>
          </section>

          <section className="space-y-2">
            <h4 className="font-bold text-teal-800 text-base">2. Limitation of Liability</h4>
            <p className="text-slate-600">
              Neither Si Cleaning Services nor its voluntary web contributors shall be held liable for any direct, indirect, 
              or consequential damages resulting from website downtime, server interruptions, form submission delays, 
              or email delivery failures. Quote requests submitted online do not constitute a binding contract or price guarantee.
            </p>
          </section>

          <section className="space-y-2">
            <h4 className="font-bold text-teal-800 text-base">3. Privacy & Data Handling</h4>
            <p className="text-slate-600">
              We respect your privacy. Contact form submissions (name, phone number, service requested) are transmitted 
              directly to the business owner via email for the sole purpose of providing cleaning estimates. 
              No personal information is harvested, sold, or shared with third-party advertisers.
            </p>
          </section>

          <section className="space-y-2">
            <h4 className="font-bold text-teal-800 text-base">4. Independent Contributor Status</h4>
            <p className="text-slate-600">
              Volunteer developers function purely as technical contributors and are not business partners, employees, 
              or legal representatives of Si Cleaning Services.
            </p>
          </section>
        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-100 text-right">
          <button
            onClick={onClose}
            className="px-5 py-2.5 bg-teal-600 text-white font-semibold rounded-xl text-sm hover:bg-teal-700 transition-colors cursor-pointer"
          >
            I Understand
          </button>
        </div>
      </div>
    </div>
  );
}
