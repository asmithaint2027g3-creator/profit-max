import React, { useState } from 'react';
import { CheckCircle2, Lock, ArrowRight, ShieldCheck, Sparkles, Building2, Mail, Phone, User } from 'lucide-react';

interface OfferingsIntakeFormProps {
  pageContext?: string;
  defaultObjective?: string;
}

export default function OfferingsIntakeForm({
  pageContext = 'Enterprise Revenue Acceleration',
  defaultObjective = 'Revenue Discovery Diagnostic'
}: OfferingsIntakeFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    annualRevenue: '$10M – $50M ARR',
    primaryObjective: defaultObjective,
    projectTimeline: 'Within 30 Days',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email) return;
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="p-8 sm:p-12 rounded-3xl bg-white border border-slate-200 text-center text-slate-900 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600" />
        <div className="relative z-10">
          <div className="w-16 h-16 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center mx-auto mb-5 text-emerald-600">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold mb-3 font-heading text-slate-900">
            Architecture Intake Confirmed
          </h3>
          <p className="text-sm sm:text-base text-slate-600 max-w-lg mx-auto mb-6 leading-relaxed">
            Thank you, <span className="text-slate-900 font-bold">{formData.fullName}</span>. A Principal Revenue Systems Architect specialized in <span className="text-blue-600 font-semibold">{formData.primaryObjective}</span> will review your telemetry parameters under mutual NDA and contact you within 24 business hours to establish baseline criteria.
          </p>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-50 border border-slate-200 text-slate-600 text-xs font-mono mb-6">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Architecture Session Assigned · NDA Enforced · Context: {pageContext}</span>
          </div>
          <div>
            <button
              onClick={() => setSubmitted(false)}
              className="text-xs font-mono text-blue-600 hover:text-blue-700 underline underline-offset-4 cursor-pointer"
            >
              Submit Another Request
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative p-6 sm:p-10 lg:p-12 rounded-3xl bg-white border border-slate-200/90 shadow-2xl overflow-hidden text-left">
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600" />
      
      <div className="relative z-10">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-slate-100">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 font-mono text-xs font-bold uppercase tracking-wider mb-2">
              <Lock className="w-3.5 h-3.5 text-blue-600" />
              <span>CONFIDENTIAL ARCHITECTURE INTAKE</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading">
              Request Your Revenue Acceleration Session
            </h3>
          </div>
          <div className="text-xs font-mono text-slate-500 flex items-center gap-1.5 shrink-0">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Enterprise NDA Guaranteed</span>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-700 mb-2">
                Full Name *
              </label>
              <div className="relative">
                <input
                  type="text"
                  required
                  placeholder="e.g. Sarah Jenkins"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-blue-600 focus:bg-white transition-all"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-700 mb-2">
                Work Email *
              </label>
              <input
                type="email"
                required
                placeholder="s.jenkins@enterprise.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-blue-600 focus:bg-white transition-all"
              />
            </div>

            <div>
              <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-700 mb-2">
                Company Name *
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Acme Global Technologies"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-blue-600 focus:bg-white transition-all"
              />
            </div>

            <div>
              <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-700 mb-2">
                Direct Phone
              </label>
              <input
                type="tel"
                placeholder="+1 (555) 000-0000"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-blue-600 focus:bg-white transition-all"
              />
            </div>

            <div>
              <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-700 mb-2">
                Annual Recurring Revenue (ARR)
              </label>
              <select
                value={formData.annualRevenue}
                onChange={(e) => setFormData({ ...formData, annualRevenue: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-blue-600 focus:bg-white transition-all"
              >
                <option value="Under $5M ARR">Under $5M ARR</option>
                <option value="$5M – $20M ARR">$5M – $20M ARR</option>
                <option value="$20M – $100M ARR">$20M – $100M ARR</option>
                <option value="$100M+ ARR">$100M+ Enterprise Scale</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-700 mb-2">
                Primary Acceleration Objective
              </label>
              <select
                value={formData.primaryObjective}
                onChange={(e) => setFormData({ ...formData, primaryObjective: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-blue-600 focus:bg-white transition-all"
              >
                <option value="Profit Pool Discovery">Profit Pool Discovery & Margin Audit</option>
                <option value="Demand Engineering">Demand Engineering & Pipeline Predictability</option>
                <option value="Sales Acceleration">Sales Acceleration & Deal Velocity</option>
                <option value="Revenue Operations">Revenue Operations & Forecasting Certainty</option>
                <option value="GTM Transformation">End-to-End GTM Transformation</option>
                <option value="Customer Success Engine">Customer Retention & Expansion Systems</option>
                <option value="Growth Intelligence">Market Intelligence & Pricing Optimization</option>
                <option value="AI Trust & Governance">AI Trust, Governance & Model Compliance</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-700 mb-2">
              Current Architecture Bottleneck / Context
            </label>
            <textarea
              rows={3}
              placeholder="Outline your primary friction points (e.g. stalled enterprise deal cycles, discount leakage, inaccurate pipeline forecasting, or fragmented tech stack)..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-blue-600 focus:bg-white transition-all resize-none"
            />
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-100">
            <div className="text-xs text-slate-500 font-mono">
              Protected by mutual NDA. Baselines captured prior to any SOW commitment.
            </div>
            <button
              type="submit"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-slate-900 hover:bg-blue-600 text-white font-bold text-sm tracking-wide shadow-lg shadow-slate-900/10 transition-all hover:-translate-y-0.5 cursor-pointer font-mono uppercase"
            >
              <span>Schedule Architecture Session</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
