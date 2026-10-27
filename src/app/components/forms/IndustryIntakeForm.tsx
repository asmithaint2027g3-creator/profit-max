import React, { useState } from 'react';
import { CheckCircle2, Send, Lock, ArrowRight } from 'lucide-react';

interface IndustryIntakeFormProps {
  industryName: string;
  accentColorClass?: string;
}

export default function IndustryIntakeForm({
  industryName,
  accentColorClass = 'text-blue-400'
}: IndustryIntakeFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    serviceInterest: 'Revenue Diagnostic',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email) return;
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="p-8 sm:p-10 rounded-2xl bg-slate-900 border border-slate-800 text-center text-white">
        <div className="w-14 h-14 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mx-auto mb-4 text-emerald-400">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="text-xl font-bold mb-2">Confidential Intake Received</h3>
        <p className="text-sm text-slate-300 max-w-md mx-auto mb-6">
          Thank you, {formData.fullName}. A Principal Revenue Architect specialized in {industryName} will review your parameters under mutual NDA standards and contact you within 24 business hours.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="text-xs font-mono text-slate-400 hover:text-white underline cursor-pointer"
        >
          Submit another inquiry
        </button>
      </div>
    );
  }

  return (
    <div className="rounded-2xl bg-slate-900/95 border border-slate-800 p-6 sm:p-8 backdrop-blur-xl shadow-2xl text-left">
      <div className="flex items-center gap-2 mb-6 pb-4 border-b border-slate-800 text-xs font-mono text-slate-400">
        <Lock className="w-3.5 h-3.5 text-blue-400" />
        <span>CONFIDENTIAL REVENUE ARCHITECTURE INTAKE // {industryName.toUpperCase()}</span>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-mono text-slate-300 mb-1.5">
              Full Name <span className="text-blue-400">*</span>
            </label>
            <input
              type="text"
              required
              value={formData.fullName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
              placeholder="e.g. Sarah Jenkins"
              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
            />
          </div>
          <div>
            <label className="block text-xs font-mono text-slate-300 mb-1.5">
              Corporate Email <span className="text-blue-400">*</span>
            </label>
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="s.jenkins@enterprise.com"
              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-mono text-slate-300 mb-1.5">
              Phone Number
            </label>
            <input
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              placeholder="+1 (555) 019-2834"
              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
            />
          </div>
          <div>
            <label className="block text-xs font-mono text-slate-300 mb-1.5">
              Company / Organization
            </label>
            <input
              type="text"
              value={formData.company}
              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
              placeholder="e.g. Vanguard Dynamics"
              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-mono text-slate-300 mb-1.5">
            Service Interest
          </label>
          <select
            value={formData.serviceInterest}
            onChange={(e) => setFormData({ ...formData, serviceInterest: e.target.value })}
            className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors"
          >
            <option value="Revenue Diagnostic">Revenue Diagnostic & Baseline Lock</option>
            <option value="Agentic SDR Deployment">Agentic SDR Deployment</option>
            <option value="Forecast Transformation">Forecast Transformation & Pipeline Precision</option>
            <option value="Full GTM Overhaul">Full GTM Operating System Overhaul</option>
          </select>
        </div>

        <div>
          <label className="block text-xs font-mono text-slate-300 mb-1.5">
            Specific Requirements / Context
          </label>
          <textarea
            rows={3}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            placeholder="Share current quota shortfall, CAC bottlenecks, or specific target segments..."
            className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors resize-none"
          />
        </div>

        <button
          type="submit"
          className="w-full py-3.5 px-6 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm tracking-wide transition-all shadow-lg shadow-blue-600/30 flex items-center justify-center gap-2 cursor-pointer group"
        >
          <span>Submit Confidential Intake</span>
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </button>

        <p className="text-[11px] text-slate-500 text-center font-mono pt-1">
          Enterprise confidentiality guaranteed under mutual NDA standards.
        </p>
      </form>
    </div>
  );
}
