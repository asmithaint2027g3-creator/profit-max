import React, { useState } from 'react';
import { CheckCircle2, Lock, ArrowRight, ShieldCheck, Sparkles, Shield, Cpu } from 'lucide-react';

interface AiSalesIntakeFormProps {
  pageContext?: string;
  defaultService?: string;
}

export function AiSalesIntakeForm({
  pageContext = 'AI Native Sales Architecture',
  defaultService = 'Autonomous Revenue Diagnostic'
}: AiSalesIntakeFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    techStack: 'Salesforce + Outreach + Gong',
    biggestChallenge: 'Stalled Pipeline & Slow Sales Cycles',
    honeypot: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.honeypot) return;
    if (!formData.name || !formData.email) return;
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="p-8 sm:p-12 rounded-3xl bg-slate-900 border border-slate-800 text-center text-white shadow-2xl">
        <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mx-auto mb-5 text-emerald-400">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="text-2xl font-black mb-3">Architecture Review Scheduled</h3>
        <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto mb-6 leading-relaxed">
          Thank you, <span className="font-semibold text-white">{formData.name}</span>. A Principal Revenue Systems Architect will review your stack parameters (<span className="text-blue-400">{formData.techStack}</span>) under mutual NDA and provide an empirical diagnostic plan within 24 business hours.
        </p>
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-800 border border-slate-700 text-xs font-mono text-slate-400 mb-6">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
          <span>NDA-Protected · ISO 27001 & SOC2 Type II Governed</span>
        </div>
        <div>
          <button
            onClick={() => setSubmitted(false)}
            className="text-xs font-mono text-slate-400 hover:text-white underline cursor-pointer"
          >
            Submit another consultation request
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-3xl bg-slate-900/95 border border-slate-800 p-6 sm:p-10 backdrop-blur-xl shadow-2xl text-left">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-5 border-b border-slate-800 mb-6">
        <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
          <Lock className="w-3.5 h-3.5 text-blue-400" />
          <span>CONFIDENTIAL REVENUE ARCHITECTURE INTAKE // {pageContext.toUpperCase()}</span>
        </div>
        <div className="flex items-center gap-1.5 text-[11px] font-mono text-emerald-400">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>SLA: 24h Response</span>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Honeypot field */}
        <input
          type="text"
          name="website"
          value={formData.honeypot}
          onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
          className="hidden"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
        />

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <label className="block text-xs font-mono text-slate-300 mb-1.5">
              Name <span className="text-blue-400">*</span>
            </label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="Elena Rostova"
              className="w-full bg-slate-950/80 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-hidden focus:border-blue-500 transition-colors"
            />
          </div>

          <div>
            <label className="block text-xs font-mono text-slate-300 mb-1.5">
              Work Email <span className="text-blue-400">*</span>
            </label>
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="elena@enterprise.com"
              className="w-full bg-slate-950/80 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-hidden focus:border-blue-500 transition-colors"
            />
          </div>

          <div>
            <label className="block text-xs font-mono text-slate-300 mb-1.5">
              Company <span className="text-blue-400">*</span>
            </label>
            <input
              type="text"
              required
              value={formData.company}
              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
              placeholder="ScaleVector Global"
              className="w-full bg-slate-950/80 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-hidden focus:border-blue-500 transition-colors"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-mono text-slate-300 mb-1.5">
              Current Tech Stack
            </label>
            <input
              type="text"
              value={formData.techStack}
              onChange={(e) => setFormData({ ...formData, techStack: e.target.value })}
              placeholder="e.g. Salesforce + Outreach + Gong + 6sense"
              className="w-full bg-slate-950/80 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-hidden focus:border-blue-500 transition-colors"
            />
          </div>

          <div>
            <label className="block text-xs font-mono text-slate-300 mb-1.5">
              Biggest Challenge
            </label>
            <select
              value={formData.biggestChallenge}
              onChange={(e) => setFormData({ ...formData, biggestChallenge: e.target.value })}
              className="w-full bg-slate-950/80 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-hidden focus:border-blue-500 transition-colors"
            >
              <option value="Stalled Pipeline & Slow Sales Cycles">Stalled Pipeline & Slow Sales Cycles</option>
              <option value="Low SDR Reply Rates & Outbound Fatigue">Low SDR Reply Rates & Outbound Fatigue</option>
              <option value="Forecast Guesswork & Missed Board Commitments">Forecast Guesswork & Missed Board Commitments</option>
              <option value="Margin Leakage & Unchecked Discounting">Margin Leakage & Unchecked Discounting</option>
              <option value="Customer Churn & Uncaptured NRR Expansion">Customer Churn & Uncaptured NRR Expansion</option>
              <option value="Fragmented Point Tools & Rep Admin Drag">Fragmented Point Tools & Rep Admin Drag</option>
            </select>
          </div>
        </div>

        <div className="pt-2">
          <button
            type="submit"
            className="w-full py-4 px-6 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm tracking-wide transition-all shadow-lg shadow-blue-600/30 flex items-center justify-center gap-2 group cursor-pointer"
          >
            <span>Request Architecture Review</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Security Badges Row */}
        <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-slate-400">
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
            <span>SOC2 Type II Certified</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Shield className="w-3.5 h-3.5 text-emerald-400" />
            <span>ISO 27001 Certified</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Lock className="w-3.5 h-3.5 text-cyan-400" />
            <span>GDPR Compliant</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400" />
            <span>HIPAA Ready</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Cpu className="w-3.5 h-3.5 text-violet-400" />
            <span>Zero-Trust Architecture</span>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="pt-2 flex flex-wrap items-center justify-center gap-6 text-xs font-mono text-slate-400">
          <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-emerald-400" /> 500+ B2B Companies</span>
          <span className="flex items-center gap-1.5"><Sparkles className="w-4 h-4 text-blue-400" /> 5X Avg Revenue Growth</span>
          <span className="flex items-center gap-1.5"><Cpu className="w-4 h-4 text-cyan-400" /> 24/7 AI Support</span>
        </div>
      </form>
    </div>
  );
}

export default AiSalesIntakeForm;
