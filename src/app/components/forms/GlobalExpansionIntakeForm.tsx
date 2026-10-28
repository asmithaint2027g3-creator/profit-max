import React, { useState } from 'react';
import { CheckCircle2, Lock, ArrowRight, ShieldCheck, Globe, Building2, MapPin } from 'lucide-react';

interface GlobalExpansionIntakeFormProps {
  pageContext?: string;
  defaultChallenge?: string;
  buttonText?: string;
}

export function GlobalExpansionIntakeForm({
  pageContext = 'Global Business Acceleration',
  defaultChallenge = 'Market validation and competitive displacement',
  buttonText = 'Request Confidential Expansion Diagnostic'
}: GlobalExpansionIntakeFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    currentChallenge: defaultChallenge,
    targetMarkets: 'DACH / Western Europe',
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
        <h3 className="text-2xl font-black mb-3">Global Expansion Briefing Scheduled</h3>
        <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto mb-6 leading-relaxed">
          Thank you, <span className="font-semibold text-white">{formData.name}</span>. A Principal International Systems Architect will review your target markets (<span className="text-blue-400">{formData.targetMarkets}</span>) under strict mutual NDA and present an empirical market entry roadmap within 24 business hours.
        </p>
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-800 border border-slate-700 text-xs font-mono text-slate-400 mb-6">
          <Lock className="w-3.5 h-3.5 text-blue-400" />
          <span>CONFIDENTIAL · EXCLUSIVE TO QUALIFIED ENTERPRISES</span>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Honeypot */}
      <input
        type="text"
        name="website_hp"
        value={formData.honeypot}
        onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-mono font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
            Full Name *
          </label>
          <input
            type="text"
            required
            placeholder="Sarah Jenkins"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all font-sans"
          />
        </div>

        <div>
          <label className="block text-xs font-mono font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
            Corporate Email *
          </label>
          <input
            type="email"
            required
            placeholder="sarah.jenkins@enterprise.com"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all font-sans"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-mono font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
            Enterprise Name *
          </label>
          <input
            type="text"
            required
            placeholder="Global Dynamics Corp"
            value={formData.company}
            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
            className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all font-sans"
          />
        </div>

        <div>
          <label className="block text-xs font-mono font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
            Primary Target Market(s)
          </label>
          <select
            value={formData.targetMarkets}
            onChange={(e) => setFormData({ ...formData, targetMarkets: e.target.value })}
            className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all font-sans"
          >
            <option value="DACH / Western Europe (Germany, France, UK)">DACH / Western Europe (Germany, France, UK)</option>
            <option value="Asia-Pacific & Japan (Japan, Singapore, Australia)">Asia-Pacific & Japan (Japan, Singapore, Australia)</option>
            <option value="Middle East & GCC (UAE, Saudi Arabia)">Middle East & GCC (UAE, Saudi Arabia)</option>
            <option value="Latin America (Brazil, Mexico)">Latin America (Brazil, Mexico)</option>
            <option value="Nordics & Benelux">Nordics & Benelux</option>
            <option value="Multi-Region Global Expansion (3+ Geographies)">Multi-Region Global Expansion (3+ Geographies)</option>
          </select>
        </div>
      </div>

      <div>
        <label className="block text-xs font-mono font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
          Current Global Expansion Challenge
        </label>
        <select
          value={formData.currentChallenge}
          onChange={(e) => setFormData({ ...formData, currentChallenge: e.target.value })}
          className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all font-sans"
        >
          <option value="Validating country TAM and unit economics before investing">Validating country TAM and unit economics before investing</option>
          <option value="Losing deals to entrenched local incumbents">Losing deals to entrenched local incumbents</option>
          <option value="Regulatory compliance and data sovereignty (GDPR, LGPD)">Regulatory compliance and data sovereignty (GDPR, LGPD)</option>
          <option value="Unproductive distributor networks and lack of co-sell attribution">Unproductive distributor networks and lack of co-sell attribution</option>
          <option value="Replicating domestic motion without proper localization">Replicating domestic motion without proper localization</option>
          <option value="Scaling multi-language prospecting across 24/7 timezones">Scaling multi-language prospecting across 24/7 timezones</option>
        </select>
      </div>

      <div className="pt-2">
        <button
          type="submit"
          className="w-full inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-bold px-7 py-4 rounded-xl shadow-lg shadow-blue-500/20 text-sm transition-all hover:-translate-y-0.5 group font-mono uppercase tracking-wider gap-2 cursor-pointer"
        >
          <span>{buttonText}</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-4 pt-2 text-xs text-slate-500 font-mono">
        <span className="inline-flex items-center gap-1.5">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
          Mutual Non-Disclosure Agreement
        </span>
        <span>·</span>
        <span className="inline-flex items-center gap-1.5">
          <Globe className="w-3.5 h-3.5 text-blue-500" />
          40+ Country Operations Telemetry
        </span>
        <span>·</span>
        <span className="inline-flex items-center gap-1.5">
          <Building2 className="w-3.5 h-3.5 text-purple-500" />
          Strict Enterprise Discretion
        </span>
      </div>
    </form>
  );
}
