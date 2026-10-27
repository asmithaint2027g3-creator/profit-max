import React, { useState } from 'react';
import { CheckCircle2, Lock, ArrowRight, ShieldCheck } from 'lucide-react';

interface OriginIntakeFormProps {
  pageContext?: string;
  defaultPriority?: string;
}

export default function OriginIntakeForm({
  pageContext = 'ORIGIN Revenue Discovery Diagnostic',
  defaultPriority = 'Revenue Diagnostic'
}: OriginIntakeFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    discoveryPriority: defaultPriority,
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email) return;
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="p-8 sm:p-12 rounded-3xl bg-white border border-slate-200 text-center text-slate-900 shadow-2xl">
        <div className="w-16 h-16 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center mx-auto mb-5 text-emerald-600">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="text-2xl font-extrabold mb-3 font-heading text-slate-900">Discovery Diagnostic Intake Received</h3>
        <p className="text-sm sm:text-base text-slate-600 max-w-lg mx-auto mb-6 leading-relaxed">
          Thank you, <span className="text-slate-900 font-bold">{formData.fullName}</span>. A Principal Revenue Systems Architect specialized in <span className="text-blue-600 font-semibold">{formData.discoveryPriority}</span> will review your parameters under mutual NDA standards and contact you within 24 business hours to lock baselines.
        </p>
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-50 border border-slate-200 text-slate-600 text-xs font-mono mb-6">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
          <span>Case File: ORIGIN-{Math.floor(100000 + Math.random() * 900000)} // Context: {pageContext}</span>
        </div>
        <div>
          <button
            onClick={() => setSubmitted(false)}
            className="text-xs font-mono text-blue-600 hover:text-blue-700 underline cursor-pointer"
          >
            Submit another diagnostic parameter set
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-3xl bg-white border border-slate-200/90 p-6 sm:p-10 shadow-2xl text-left relative overflow-hidden">
      {/* Top Animated Color Bar */}
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600" />

      <div className="flex flex-wrap items-center justify-between gap-3 mb-8 pb-5 border-b border-slate-100 text-xs font-mono text-slate-500">
        <div className="flex items-center gap-2">
          <Lock className="w-3.5 h-3.5 text-blue-600" />
          <span className="font-bold text-slate-900 tracking-wider">CONFIDENTIAL DISCOVERY DIAGNOSTIC INTAKE</span>
        </div>
        <div className="flex items-center gap-2 text-emerald-600 font-bold">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>SLA: 24h Response</span>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label className="block text-xs font-mono font-bold text-slate-700 mb-2 uppercase tracking-wider">
              Full Name <span className="text-rose-500">*</span>
            </label>
            <input
              type="text"
              required
              placeholder="e.g. Marcus Vance"
              value={formData.fullName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
              className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-600 focus:bg-white text-sm transition-colors"
            />
          </div>

          <div>
            <label className="block text-xs font-mono font-bold text-slate-700 mb-2 uppercase tracking-wider">
              Email Address <span className="text-rose-500">*</span>
            </label>
            <input
              type="email"
              required
              placeholder="e.g. marcus@enterprise.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-600 focus:bg-white text-sm transition-colors"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label className="block text-xs font-mono font-bold text-slate-700 mb-2 uppercase tracking-wider">
              Phone Number
            </label>
            <input
              type="tel"
              placeholder="e.g. +1 (555) 019-2834"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-600 focus:bg-white text-sm transition-colors"
            />
          </div>

          <div>
            <label className="block text-xs font-mono font-bold text-slate-700 mb-2 uppercase tracking-wider">
              Company / Organization
            </label>
            <input
              type="text"
              placeholder="e.g. Datastream Systems Inc."
              value={formData.company}
              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
              className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-600 focus:bg-white text-sm transition-colors"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-mono font-bold text-slate-700 mb-2 uppercase tracking-wider">
            Service Interest / Discovery Priority
          </label>
          <select
            value={formData.discoveryPriority}
            onChange={(e) => setFormData({ ...formData, discoveryPriority: e.target.value as any })}
            className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 focus:outline-none focus:border-blue-600 focus:bg-white text-sm transition-colors font-medium"
          >
            <option value="Revenue Diagnostic">Revenue Diagnostic (Baseline Measurement & SOW Lock)</option>
            <option value="Revenue Discovery">Revenue Discovery (The 8 Discovery Nodes)</option>
            <option value="Supply Chain Discovery">Supply Chain Discovery (Offer Architecture & Cost-to-Serve)</option>
            <option value="Ecosystem Discovery">Ecosystem Discovery (Alliances, Co-Sell & Platform Adjacency)</option>
            <option value="Expansion Discovery">Expansion Discovery (New Offerings, Markets, Channels & Product Launches)</option>
            <option value="Full ORIGIN Framework">Full ORIGIN Framework (All 16 Nodes across 4 Origins)</option>
            <option value="Specific Discovery Node">Specific Discovery Node (Targeted Intervention)</option>
          </select>
        </div>

        <div>
          <label className="block text-xs font-mono font-bold text-slate-700 mb-2 uppercase tracking-wider">
            Requirements / Message
          </label>
          <textarea
            rows={3}
            placeholder="Outline your primary discovery bottleneck, pricing leaks, or expansion hypotheses..."
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-600 focus:bg-white text-sm transition-colors resize-none"
          />
        </div>

        <button
          type="submit"
          className="w-full py-4 px-6 rounded-xl bg-slate-900 hover:bg-blue-600 text-white font-bold font-mono text-sm uppercase tracking-wider flex items-center justify-center gap-2 transition-all hover:-translate-y-0.5 shadow-lg shadow-slate-900/10 cursor-pointer group"
        >
          <span>Initiate Confidential Diagnostic</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>

        <div className="pt-2 text-center">
          <p className="text-xs text-slate-500 font-mono">
            Enterprise confidentiality guaranteed under mutual NDA standards.
          </p>
        </div>
      </form>
    </div>
  );
}
