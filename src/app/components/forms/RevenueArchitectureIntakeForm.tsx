import React, { useState } from 'react';
import { CheckCircle2, Lock, ArrowRight, ShieldCheck } from 'lucide-react';

interface RevenueArchitectureIntakeFormProps {
  pageContext?: string;
  defaultService?: 'Revenue Diagnostic' | 'Agentic SDR Deployment' | 'Forecast Transformation' | 'Full GTM Overhaul';
}

export default function RevenueArchitectureIntakeForm({
  pageContext = 'AI Native Sales Operations',
  defaultService = 'Revenue Diagnostic'
}: RevenueArchitectureIntakeFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    serviceInterest: defaultService,
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email) return;
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="p-8 sm:p-12 rounded-3xl bg-slate-900 border border-slate-800 text-center text-white shadow-2xl">
        <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mx-auto mb-5 text-emerald-400">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="text-2xl font-extrabold mb-3 font-heading">Confidential Intake Received</h3>
        <p className="text-sm sm:text-base text-slate-300 max-w-lg mx-auto mb-6 leading-relaxed">
          Thank you, <span className="text-white font-bold">{formData.fullName}</span>. A Principal Revenue Architect specialized in <span className="text-blue-400 font-semibold">{formData.serviceInterest}</span> will review your parameters under mutual NDA standards and contact you within 24 business hours.
        </p>
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-950 border border-slate-800 text-slate-400 text-xs font-mono mb-6">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
          <span>Ticket Assigned: REF-{Math.floor(100000 + Math.random() * 900000)} // Context: {pageContext}</span>
        </div>
        <div>
          <button
            onClick={() => setSubmitted(false)}
            className="text-xs font-mono text-blue-400 hover:text-blue-300 underline cursor-pointer"
          >
            Submit another confidential inquiry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-3xl bg-slate-900/95 border border-slate-800 p-6 sm:p-10 backdrop-blur-xl shadow-2xl text-left">
      <div className="flex flex-wrap items-center justify-between gap-3 mb-8 pb-5 border-b border-slate-800 text-xs font-mono text-slate-400">
        <div className="flex items-center gap-2">
          <Lock className="w-3.5 h-3.5 text-blue-400" />
          <span className="font-bold text-slate-200">CONFIDENTIAL REVENUE ARCHITECTURE INTAKE</span>
        </div>
        <span className="text-[11px] text-blue-400 font-mono bg-blue-500/10 px-2.5 py-0.5 rounded border border-blue-400/20">
          {pageContext}
        </span>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label className="block text-xs font-mono text-slate-300 mb-1.5 font-bold">
              Full Name <span className="text-blue-400">*</span>
            </label>
            <input
              type="text"
              required
              value={formData.fullName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
              placeholder="e.g. Marcus Vance"
              className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
            />
          </div>
          <div>
            <label className="block text-xs font-mono text-slate-300 mb-1.5 font-bold">
              Corporate Email <span className="text-blue-400">*</span>
            </label>
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="m.vance@enterprise.com"
              className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label className="block text-xs font-mono text-slate-300 mb-1.5 font-bold">
              Phone Number
            </label>
            <input
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              placeholder="+1 (555) 019-2834"
              className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
            />
          </div>
          <div>
            <label className="block text-xs font-mono text-slate-300 mb-1.5 font-bold">
              Company / Organization
            </label>
            <input
              type="text"
              value={formData.company}
              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
              placeholder="e.g. Apex Health Systems"
              className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-mono text-slate-300 mb-1.5 font-bold">
            Service Interest <span className="text-blue-400">*</span>
          </label>
          <select
            value={formData.serviceInterest}
            onChange={(e) => setFormData({ ...formData, serviceInterest: e.target.value as any })}
            className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors cursor-pointer"
          >
            <option value="Revenue Diagnostic">Revenue Diagnostic (Pipeline Leak & Intent Audit)</option>
            <option value="Agentic SDR Deployment">Agentic SDR Deployment (Outbound Fleets)</option>
            <option value="Forecast Transformation">Forecast Transformation (Predictive Intelligence)</option>
            <option value="Full GTM Overhaul">Full GTM Overhaul (End-to-End Autonomous OS)</option>
          </select>
        </div>

        <div>
          <label className="block text-xs font-mono text-slate-300 mb-1.5 font-bold">
            Requirements / GTM Context
          </label>
          <textarea
            rows={3}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            placeholder="Share current ARR stage, sales cycle length, pipeline blockers, or specific stack integrations..."
            className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
          />
        </div>

        <div className="pt-2">
          <button
            type="submit"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-blue-600 hover:bg-blue-500 text-white font-bold px-8 py-4 rounded-xl text-sm transition-all shadow-lg shadow-blue-600/30 cursor-pointer group"
          >
            <span>Submit Confidential Intake</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        <div className="pt-4 border-t border-slate-800 flex items-center gap-2 text-[11px] font-mono text-slate-400">
          <ShieldCheck className="w-3.5 h-3.5 text-blue-400 shrink-0" />
          <span>Enterprise confidentiality guaranteed under mutual NDA standards. Zero data reselling or public disclosure.</span>
        </div>
      </form>
    </div>
  );
}
