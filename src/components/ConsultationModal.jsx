import React, { useState } from 'react';
import { X, CheckCircle, Sparkles, Send, Phone, Mail, User, BookOpen } from 'lucide-react';

export default function ConsultationModal({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    course: 'Advanced Digital Marketing',
    message: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      // simulate response
    }, 500);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({ name: '', phone: '', email: '', course: 'Advanced Digital Marketing', message: '' });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div
        className="relative w-full max-w-lg rounded-2xl p-6 sm:p-8 bg-[#0e0a1a] border border-purple-500/30 shadow-2xl shadow-purple-950/50 text-white"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Glow backdrop */}
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-purple-600/30 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-fuchsia-600/20 rounded-full blur-3xl pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
          aria-label="Close Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <>
            <div className="mb-6">

              <h3 className="text-2xl font-bold tracking-tight text-white">
                Book a Free <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-fuchsia-400">Consultation</span>
              </h3>
              <p className="text-sm text-gray-400 mt-1">
                Speak directly with our senior mentors to chart your high-growth tech & marketing career.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-gray-300 mb-1.5">Full Name</label>
                <div className="relative">
                  <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                  <input
                    type="text"
                    required
                    placeholder="e.g. Rahul Sharma"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white/[0.04] border border-purple-500/20 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all text-sm"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-gray-300 mb-1.5">Phone Number</label>
                  <div className="relative">
                    <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white/[0.04] border border-purple-500/20 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-gray-300 mb-1.5">Email Address</label>
                  <div className="relative">
                    <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                    <input
                      type="email"
                      required
                      placeholder="you@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white/[0.04] border border-purple-500/20 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all text-sm"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-300 mb-1.5">Interested Course</label>
                <div className="relative">
                  <BookOpen className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                  <select
                    value={formData.course}
                    onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#140f24] border border-purple-500/20 text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all text-sm"
                  >
                    <option value="Advanced Digital Marketing">Advanced Digital Marketing (5 Months)</option>
                    <option value="Full Stack Web Development">Full Stack Web Development (6 Months)</option>
                    <option value="UI/UX & Graphic Design">UI/UX & Graphic Design (4 Months)</option>
                    <option value="Python & Data Analytics">Python & Data Analytics (4 Months)</option>
                  </select>
                </div>
              </div>

              <button
                type="submit"
                className="w-full mt-2 py-3 px-6 rounded-xl font-semibold text-white bg-gradient-to-r from-purple-600 to-fuchsia-600 hover:from-purple-500 hover:to-fuchsia-500 shadow-lg shadow-purple-900/50 hover:shadow-purple-700/50 transition-all duration-300 flex items-center justify-center gap-2 text-sm"
              >
                <span>Confirm & Request Callback</span>
                <Send className="w-4 h-4" />
              </button>
            </form>
          </>
        ) : (
          <div className="py-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-purple-500/20 border border-purple-500/50 text-purple-400 mx-auto flex items-center justify-center">
              <CheckCircle className="w-9 h-9" />
            </div>
            <h4 className="text-2xl font-bold text-white">Consultation Requested!</h4>
            <p className="text-sm text-gray-300 max-w-sm mx-auto">
              Thank you, <span className="text-purple-400 font-semibold">{formData.name}</span>. Our senior career advisor will contact you within 2 hours on <span className="text-purple-400 font-medium">{formData.phone}</span>.
            </p>
            <button
              onClick={handleReset}
              className="mt-4 px-6 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-sm font-semibold transition-all shadow-md shadow-purple-900/40"
            >
              Done
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
