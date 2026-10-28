import React, { useState } from 'react';
import { CheckCircle2, Lock, ArrowRight, ShieldCheck, Award } from 'lucide-react';

interface CaseStudyIntakeFormProps {
  pageContext?: string;
  defaultChallenge?: string;
  buttonText?: string;
}

export function CaseStudyIntakeForm({
  pageContext = 'General Case Study Inquiry',
  defaultChallenge = 'Pipeline Growth',
  buttonText = 'Schedule Executive Briefing'
}: CaseStudyIntakeFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    industry: 'Enterprise SaaS',
    challenge: defaultChallenge,
    arrRange: '$50M - $250M ARR'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="p-8 sm:p-10 rounded-3xl bg-slate-900 border border-slate-800 text-center text-white">
        <div className="w-14 h-14 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mx-auto mb-4 text-emerald-400">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="text-xl sm:text-2xl font-bold mb-2 font-heading">Executive Briefing Requested</h3>
        <p className="text-sm text-slate-300 max-w-lg mx-auto mb-6 leading-relaxed">
          Thank you, {formData.name}. A Principal Revenue Architect specialized in your sector will review your parameters under mutual NDA standards and reach out within 24 business hours with custom telemetry benchmarks.
        </p>
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs font-mono text-slate-400">
          <Lock className="w-3.5 h-3.5 text-blue-400" />
          <span>Encrypted Submission · Mutual NDA Standard</span>
        </div>
        <div className="mt-6">
          <button
            onClick={() => setSubmitted(false)}
            className="text-xs font-mono text-slate-400 hover:text-white underline cursor-pointer"
          >
            Submit Another Request
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-3xl bg-slate-900/95 border border-slate-800 p-6 sm:p-8 backdrop-blur-xl shadow-2xl text-left">
      <div className="flex flex-wrap items-center justify-between gap-2 mb-6 pb-4 border-b border-slate-800 text-xs font-mono text-slate-400">
        <div className="flex items-center gap-2">
          <Lock className="w-3.5 h-3.5 text-blue-400" />
          <span className="font-bold text-slate-300">CONFIDENTIAL EXECUTIVE INTAKE</span>
        </div>
        <span className="text-[11px] text-slate-400">{pageContext.toUpperCase()}</span>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-mono text-slate-300 mb-1.5">
              Executive Name <span className="text-blue-400">*</span>
            </label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="e.g. Marcus Vance"
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
              placeholder="m.vance@enterprise.com"
              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-mono text-slate-300 mb-1.5">
              Company Name <span className="text-blue-400">*</span>
            </label>
            <input
              type="text"
              required
              value={formData.company}
              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
              placeholder="e.g. Apex Global Systems"
              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
            />
          </div>
          <div>
            <label className="block text-xs font-mono text-slate-300 mb-1.5">
              Primary Industry <span className="text-blue-400">*</span>
            </label>
            <select
              value={formData.industry}
              onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors cursor-pointer"
            >
              <option value="Enterprise SaaS">Enterprise SaaS</option>
              <option value="Industrial & Manufacturing">Industrial & Manufacturing</option>
              <option value="Healthcare & Life Sciences">Healthcare & Life Sciences</option>
              <option value="Financial Services & FinTech">Financial Services & FinTech</option>
              <option value="Cloud & Enterprise Tech">Cloud & Enterprise Tech</option>
              <option value="PE Portfolio Company">PE Portfolio Company</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-xs font-mono text-slate-300 mb-1.5">
            Primary Business Challenge <span className="text-blue-400">*</span>
          </label>
          <select
            value={formData.challenge}
            onChange={(e) => setFormData({ ...formData, challenge: e.target.value })}
            className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors cursor-pointer"
          >
            <option value="Pipeline Growth">Pipeline Growth (Stalled Top-of-Funnel)</option>
            <option value="Forecast Accuracy">Forecast Accuracy (&lt;5% Variance Certainty)</option>
            <option value="Customer Expansion">Customer Expansion &amp; NRR Lift</option>
            <option value="Margin Improvement">Gross Margin Recovery &amp; Pricing Governance</option>
            <option value="Global Expansion">Cross-Border Revenue Scaling</option>
            <option value="AI Transformation">AI-Native Sales &amp; Autonomous Agent Deployment</option>
            <option value="GTM Transformation">Post-Acquisition Integration &amp; GTM Unification</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full mt-4 flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm shadow-lg shadow-blue-600/30 transition-all hover:-translate-y-0.5 cursor-pointer font-mono uppercase tracking-wider"
        >
          <span>{buttonText}</span>
          <ArrowRight className="w-4 h-4" />
        </button>

        <p className="text-[11px] text-center text-slate-400 mt-3 font-mono">
          Strict confidentiality guaranteed. Data processed under SOC2 &amp; GDPR compliance standards.
        </p>
      </form>
    </div>
  );
}
