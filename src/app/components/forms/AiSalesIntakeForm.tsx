import React, { useState } from 'react';
import { CheckCircle2, Lock, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';

interface AiSalesIntakeFormProps {
  pageContext?: string;
  defaultService?: string;
}

export default function AiSalesIntakeForm({
  pageContext = 'AI Native Sales Architecture',
  defaultService = 'Autonomous Revenue Diagnostic'
}: AiSalesIntakeFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    currentArr: '$5M - $20M ARR',
    crmStack: 'Salesforce',
    serviceInterest: defaultService,
    notes: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email) return;
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="p-8 sm:p-12 rounded-3xl bg-slate-900 border border-slate-800 text-center text-white shadow-2xl">
        <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mx-auto mb-5 text-emerald-400">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="text-2xl font-black mb-3">Confidential Architectural Intake Confirmed</h3>
        <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto mb-6 leading-relaxed">
          Thank you, <span className="font-semibold text-white">{formData.fullName}</span>. A Principal Revenue Systems Architect will review your revenue telemetry parameters under mutual non-disclosure and provide an empirical diagnostic plan within 24 business hours.
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
            Submit another telemetry parameter set
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
              placeholder="e.g. Elena Rostova"
              className="w-full bg-slate-950/80 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-hidden focus:border-blue-500 transition-colors"
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
              placeholder="e.g. elena@enterprise.com"
              className="w-full bg-slate-950/80 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-hidden focus:border-blue-500 transition-colors"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <label className="block text-xs font-mono text-slate-300 mb-1.5">
              Company Name
            </label>
            <input
              type="text"
              value={formData.company}
              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
              placeholder="e.g. ScaleVector Inc."
              className="w-full bg-slate-950/80 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-hidden focus:border-blue-500 transition-colors"
            />
          </div>

          <div>
            <label className="block text-xs font-mono text-slate-300 mb-1.5">
              Current ARR Band
            </label>
            <select
              value={formData.currentArr}
              onChange={(e) => setFormData({ ...formData, currentArr: e.target.value })}
              className="w-full bg-slate-950/80 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-hidden focus:border-blue-500 transition-colors"
            >
              <option value="< $5M ARR">&lt; $5M ARR (Early Scale)</option>
              <option value="$5M - $20M ARR">$5M - $20M ARR (Expansion)</option>
              <option value="$20M - $100M ARR">$20M - $100M ARR (Growth Scale)</option>
              <option value="$100M+ ARR">$100M+ ARR (Enterprise Tier)</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-mono text-slate-300 mb-1.5">
              Primary CRM
            </label>
            <select
              value={formData.crmStack}
              onChange={(e) => setFormData({ ...formData, crmStack: e.target.value })}
              className="w-full bg-slate-950/80 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-hidden focus:border-blue-500 transition-colors"
            >
              <option value="Salesforce">Salesforce Enterprise</option>
              <option value="HubSpot">HubSpot Operations Hub</option>
              <option value="Microsoft Dynamics">Microsoft Dynamics 365</option>
              <option value="Custom / Other">Custom / Other Warehouse</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-xs font-mono text-slate-300 mb-1.5">
            Architectural Focus Area
          </label>
          <select
            value={formData.serviceInterest}
            onChange={(e) => setFormData({ ...formData, serviceInterest: e.target.value })}
            className="w-full bg-slate-950/80 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-hidden focus:border-blue-500 transition-colors"
          >
            <option value="Autonomous Revenue Diagnostic">Autonomous Revenue Diagnostic (Full Stack)</option>
            <option value="Agentic SDR & Autopilots Deployment">Agentic SDR & Outbound Autopilots</option>
            <option value="Predictive Intelligence & ICP Propensity">Predictive Intelligence & ICP Propensity Scoring</option>
            <option value="Deal Execution & Buying Committee Telemetry">Deal Execution & Buying Committee Consensus</option>
            <option value="Security, Compliance & Stack Integration">Security, Zero-Trust & Stack Integration</option>
          </select>
        </div>

        <div>
          <label className="block text-xs font-mono text-slate-300 mb-1.5">
            Operational Telemetry / Current Pipeline Challenges
          </label>
          <textarea
            rows={3}
            value={formData.notes}
            onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
            placeholder="Describe your current outbound conversion rates, rep ramp times, or forecast variance..."
            className="w-full bg-slate-950/80 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-hidden focus:border-blue-500 transition-colors resize-none"
          />
        </div>

        <div className="pt-2">
          <button
            type="submit"
            className="w-full py-4 px-6 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm tracking-wide transition-all shadow-lg shadow-blue-600/30 flex items-center justify-center gap-2 group cursor-pointer"
          >
            <span>Request Enterprise Revenue Diagnostic</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pt-2 text-[11px] text-slate-500 font-mono">
          <div className="flex items-center gap-1.5">
            <Lock className="w-3 h-3 text-slate-400" />
            <span>256-bit encrypted · Mutual NDA standard</span>
          </div>
          <div>Strictly Zero Third-Party Model Training</div>
        </div>
      </form>
    </div>
  );
}
