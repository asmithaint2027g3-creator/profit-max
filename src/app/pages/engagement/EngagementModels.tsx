import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Shield,
  ArrowRight,
  Clock,
  UserCheck,
  Cpu,
  Layers,
  TrendingUp,
  DollarSign,
  Users,
  Zap,
  CheckCircle2,
  ChevronRight,
  HelpCircle,
  AlertCircle,
  Scale,
  FileCheck
} from 'lucide-react';
import EngagementSubNav from '../../components/EngagementSubNav';
import {
  engagementModels,
  modelComparisonTable
} from '../../../data/engagementDossierData';

export default function EngagementModels() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const el = document.getElementById(id);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 150);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location.hash]);

  return (
    <div className="min-h-screen bg-slate-50/50 text-slate-900 pt-16 lg:pt-[72px]">
      {/* Header Banner with Dark Industry Image Background */}
      <section className="relative bg-slate-950 text-white py-16 lg:py-24 overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2000&q=80"
            alt="Enterprise Revenue Architecture"
            className="w-full h-full object-cover object-center opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-900/80" />
          <div className="absolute inset-0 bg-radial-at-t from-blue-950/40 via-transparent to-transparent pointer-events-none" />
        </div>

        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/20 border border-blue-400/40 text-blue-300 text-xs font-semibold uppercase tracking-wider mb-5 font-mono">
              <Shield className="w-3.5 h-3.5 text-blue-400" />
              <span>Catalog of Eight Partnership Structures</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.12] mb-5">
              Eight Engagement Models. One Revenue Architecture.
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed font-normal mb-8">
              Different business situations require different levels of strategic input, execution support, validation, and shared accountability. ProfitMachines offers eight engagement models to match those needs.
            </p>

            <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
              {engagementModels.map((m) => (
                <a
                  key={m.id}
                  href={`#${m.id.toLowerCase()}`}
                  className="bg-slate-900/90 hover:bg-slate-800 text-slate-200 px-3 py-1.5 rounded-lg font-semibold transition-colors border border-slate-700"
                >
                  {m.id} · {m.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Main Content: Detailed Breakdown of all 8 Models */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20 space-y-16">
        {engagementModels.map((model) => (
          <section
            key={model.id}
            id={model.id.toLowerCase()}
            className="scroll-mt-36 rounded-3xl bg-white border border-slate-200 shadow-xs overflow-hidden"
          >
            {/* Header */}
            <div className="p-6 sm:p-10 border-b border-slate-100 bg-slate-50/70">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-3">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                    {model.id} · {model.subtitle}
                  </span>
                </div>
                <Link
                  to="/book-consultation"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-white bg-slate-900 hover:bg-blue-600 px-4 py-2 rounded-xl transition-colors self-start sm:self-auto shadow-2xs"
                >
                  <span>Discuss This Model</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-2">
                {model.name}
              </h2>
              <div className="text-base sm:text-lg font-semibold text-blue-700 mb-3 italic">
                {model.quote}
              </div>

              {/* Risk Allocation Callout */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 pt-6 border-t border-slate-200/60">
                <div className="p-4 rounded-2xl bg-white border border-slate-200 text-xs">
                  <span className="font-bold text-slate-900 block mb-1">What ProfitMachines Carries:</span>
                  <span className="text-slate-600 leading-relaxed">{model.riskAllocation.weCarry}</span>
                </div>
                <div className="p-4 rounded-2xl bg-white border border-slate-200 text-xs">
                  <span className="font-bold text-slate-900 block mb-1">What the Client Carries:</span>
                  <span className="text-slate-600 leading-relaxed">{model.riskAllocation.clientCarries}</span>
                </div>
              </div>
            </div>

            {/* Attributes Grid */}
            <div className="p-6 sm:p-10 border-b border-slate-100">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 block mb-4">
                Operating Parameters:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {model.attributes.map((attr, aIdx) => (
                  <div key={aIdx} className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 text-xs">
                    <span className="font-mono font-bold uppercase text-slate-400 text-[10px] block mb-1">
                      {attr.label}
                    </span>
                    <span className="text-slate-800 font-semibold leading-relaxed">
                      {attr.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* PoV vs PoP Comparison Table (for E3) */}
            {model.povVsPop && (
              <div className="p-6 sm:p-10 border-b border-slate-100 bg-blue-50/20">
                <div className="max-w-2xl mb-4">
                  <h3 className="text-base font-bold text-slate-900">
                    Proof of Value (PoV) vs. Proof of Performance (PoP)
                  </h3>
                  <p className="text-xs text-slate-600 mt-1">
                    Understand the difference before agreeing on the evaluation charter.
                  </p>
                </div>
                <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white">
                  <table className="w-full text-left text-xs border-collapse">
                    <thead>
                      <tr className="bg-slate-50 border-b border-slate-200">
                        {model.povVsPop.headers.map((h, hIdx) => (
                          <th key={hIdx} className="p-3 font-bold text-slate-700 font-mono text-[11px] uppercase">
                            {h}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {model.povVsPop.rows.map((r, rIdx) => (
                        <tr key={rIdx}>
                          <td className="p-3 font-bold text-slate-900">{r.dimension}</td>
                          <td className="p-3 text-slate-600">{r.pov}</td>
                          <td className="p-3 text-slate-600">{r.pop}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Sub-Packages Table */}
            <div className="p-6 sm:p-10">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 block mb-4">
                Available Sub-Packages & Sprints:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {model.subPackages.map((sub, sIdx) => (
                  <div key={sIdx} className="p-5 rounded-2xl bg-white border border-slate-200 hover:border-slate-300 shadow-2xs flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span className="text-xs font-bold text-slate-900">{sub.name}</span>
                        {sub.duration && (
                          <span className="text-[10px] font-mono text-slate-500 bg-slate-100 px-2 py-0.5 rounded-md shrink-0">
                            {sub.duration}
                          </span>
                        )}
                      </div>
                      <div className="text-xs text-slate-600 mt-2">
                        <strong className="text-slate-700">{sub.detailLabel}:</strong> {sub.detailValue}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        ))}

        {/* ── SECTION: MODEL COMPARISON TABLE ── */}
        <section className="rounded-3xl bg-white border border-slate-200 shadow-xs overflow-hidden">
          <div className="p-6 sm:p-8 bg-slate-50 border-b border-slate-200">
            <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
              Model Comparison Matrix
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Relative bands across speed to impact, risk allocation, and typical scope commitment.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-slate-100/60 border-b border-slate-200">
                  <th className="p-4 font-bold text-slate-700 font-mono text-[11px] uppercase">Model</th>
                  <th className="p-4 font-bold text-slate-700 font-mono text-[11px] uppercase">Speed to Start</th>
                  <th className="p-4 font-bold text-slate-700 font-mono text-[11px] uppercase">Speed to Impact</th>
                  <th className="p-4 font-bold text-slate-700 font-mono text-[11px] uppercase">Client Risk</th>
                  <th className="p-4 font-bold text-slate-700 font-mono text-[11px] uppercase">ProfitMachines Risk</th>
                  <th className="p-4 font-bold text-slate-700 font-mono text-[11px] uppercase">Expansion Potential</th>
                  <th className="p-4 font-bold text-slate-700 font-mono text-[11px] uppercase">Typical Deal Band</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {modelComparisonTable.map((row, rIdx) => (
                  <tr key={rIdx} className="hover:bg-slate-50/50">
                    <td className="p-4 font-bold text-slate-900">{row.model}</td>
                    <td className="p-4 text-slate-600">{row.speedToStart}</td>
                    <td className="p-4 text-slate-600">{row.speedToImpact}</td>
                    <td className="p-4 text-slate-600">{row.clientRisk}</td>
                    <td className="p-4 text-slate-600">{row.profitMachinesRisk}</td>
                    <td className="p-4 text-slate-600">{row.expansionPotential}</td>
                    <td className="p-4 font-mono text-slate-700 font-semibold">{row.typicalDealBand}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  );
}
