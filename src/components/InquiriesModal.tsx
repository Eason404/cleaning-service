import { useState, useEffect } from 'react';
import { X, Inbox, RefreshCw, Calendar, Phone, ServiceIcon, CheckCircle2, AlertCircle } from 'lucide-react';

interface Inquiry {
  id: string;
  name: string;
  phone: string;
  service: string;
  details?: string;
  timestamp: string;
  emailSent: boolean;
}

export function InquiriesModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchInquiries = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/inquiries');
      if (res.ok) {
        const data = await res.json();
        setInquiries(data.inquiries || []);
      }
    } catch (err) {
      console.error('Failed to load inquiries:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      fetchInquiries();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[85vh] flex flex-col shadow-2xl overflow-hidden border border-teal-100">
        {/* Header */}
        <div className="bg-teal-600 text-white p-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-teal-500 rounded-xl flex items-center justify-center">
              <Inbox className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="font-bold text-xl">Customer Quote Inquiries</h3>
              <p className="text-xs text-teal-100">Direct web app form submissions for Simone</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-teal-700 rounded-lg transition-colors text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Action Bar */}
        <div className="px-6 py-3 bg-slate-50 border-b border-slate-100 flex justify-between items-center text-xs text-slate-500">
          <span>Target Notification Email: <strong>sicleaningsimone@gmail.com</strong></span>
          <button
            onClick={fetchInquiries}
            className="flex items-center gap-1.5 text-teal-700 font-semibold hover:underline"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${loading ? 'animate-spin' : ''}`} />
            Refresh
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto flex-1 space-y-4">
          {loading && inquiries.length === 0 ? (
            <div className="py-12 text-center text-slate-400">Loading inquiries...</div>
          ) : inquiries.length === 0 ? (
            <div className="py-12 text-center space-y-3">
              <Inbox className="w-12 h-12 text-slate-300 mx-auto" />
              <p className="text-slate-500 font-medium">No quote inquiries submitted yet.</p>
              <p className="text-xs text-slate-400 max-w-sm mx-auto">
                When customers submit the quote request form on the website, their requests will appear here instantly.
              </p>
            </div>
          ) : (
            inquiries.map((inq) => (
              <div
                key={inq.id}
                className="bg-white border border-slate-200 rounded-2xl p-5 hover:border-teal-300 transition-colors shadow-sm space-y-3"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h4 className="font-bold text-slate-900 text-lg">{inq.name}</h4>
                    <div className="flex items-center gap-2 text-sm font-semibold text-teal-700 mt-0.5">
                      <Phone className="w-4 h-4" />
                      <a href={`tel:${inq.phone}`} className="hover:underline">{inq.phone}</a>
                    </div>
                  </div>
                  <span className="text-xs px-3 py-1 bg-teal-50 text-teal-800 border border-teal-100 rounded-full font-bold shrink-0">
                    {inq.service}
                  </span>
                </div>

                {inq.details && (
                  <p className="text-sm text-slate-600 bg-slate-50 p-3 rounded-xl border border-slate-100">
                    "{inq.details}"
                  </p>
                )}

                <div className="flex items-center justify-between text-xs text-slate-400 pt-1 border-t border-slate-100">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {new Date(inq.timestamp).toLocaleString()}
                  </span>
                  <span className="flex items-center gap-1 text-slate-500">
                    {inq.emailSent ? (
                      <span className="text-teal-600 font-medium flex items-center gap-1">
                        <CheckCircle2 className="w-3.5 h-3.5" /> Email Dispatched
                      </span>
                    ) : (
                      <span className="text-slate-500 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" /> Saved in Web App
                      </span>
                    )}
                  </span>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-100 text-right">
          <button
            onClick={onClose}
            className="px-5 py-2.5 bg-slate-800 text-white font-semibold rounded-xl text-sm hover:bg-slate-900 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
