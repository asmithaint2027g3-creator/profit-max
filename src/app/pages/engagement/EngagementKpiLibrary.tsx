import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import EngagementSubNav from '../../components/EngagementSubNav';
import { kpiLibraryTable } from '../../../data/engagementDossierData';
import {
  ListOrdered,
  BarChart2,
  TrendingUp,
  Target,
  ArrowRight,
  ShieldAlert,
  Compass,
  CheckCircle,
  HelpCircle,
  Lock
} from 'lucide-react';

export default function EngagementKpiLibrary() {
  const [activeLayerFilter, setActiveLayerFilter] = useState<string>('all');

  const filteredKpis = activeLayerFilter === 'all'
    ? kpiLibraryTable
    : kpiLibraryTable.filter((item) => item.layer.toLowerCase().includes(activeLayerFilter.toLowerCase()));

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans pt-16 lg:pt-[72px]">
      {/* Hero Header with Dark Industry Image Background */}
      <section className="relative bg-slate-950 text-white py-16 lg:py-24 overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=2000&q=80"
            alt="KPI Measurement Telemetry"
            className="w-full h-full object-cover object-center opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-950/70 to-slate-900/50" />
          <div className="absolute inset-0 bg-radial-at-t from-blue-950/40 via-transparent to-transparent pointer-events-none" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/20 border border-blue-400/40 text-blue-300 text-xs font-semibold uppercase tracking-wider mb-5 font-mono">
            <ListOrdered className="w-3.5 h-3.5 text-blue-400" />
            Measurement Architecture
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-4">
            Measure What Moves Revenue
          </h1>
          <p className="text-lg text-slate-300 max-w-3xl leading-relaxed mb-6">
            The ProfitMachines KPI Library connects each discovery layer to empirical leading signals, business-level lagging results, and validated Proof of Value (PoV) success bars.
          </p>

          <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 text-slate-300 text-xs max-w-3xl flex items-start gap-3 shadow-inner">
            <Lock className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
            <div>
              <span className="font-semibold text-white block mb-0.5">Charter Protocol & Baseline Lock:</span>
              <span>
                Success criteria are locked during Week 1 before implementation commences. Example success bars shown below represent typical empirical thresholds from the 2026 Dossier and are customized per signed charter.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Layer Filter Bar */}
      <section className="py-6 bg-white border-b border-slate-200 sticky top-28 z-30 shadow-2xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400 mr-2 shrink-0">Filter Layer:</span>
            {[
              { id: 'all', label: 'All 7 Layers' },
              { id: 'Market', label: 'Market' },
              { id: 'Demand', label: 'Demand' },
              { id: 'Value', label: 'Value' },
              { id: 'Channel', label: 'Channel' },
              { id: 'Competitive', label: 'Competitive' },
              { id: 'Customer', label: 'Customer' },
              { id: 'PMF', label: 'Product-Market Fit' }
            ].map((lvl) => (
              <button
                key={lvl.id}
                onClick={() => setActiveLayerFilter(lvl.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap transition-colors ${
                  activeLayerFilter === lvl.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {lvl.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Main KPI Table */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden mb-12">
          <div className="p-6 bg-slate-900 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800">
            <div>
              <h3 className="text-xl font-bold">Discovery Layer KPI Matrix</h3>
              <p className="text-xs text-slate-400">Preserved from Revenue Architecture Dossier · Edition 2026</p>
            </div>
            <span className="text-xs font-mono px-3 py-1 rounded bg-slate-800 text-slate-300 border border-slate-700 self-start sm:self-auto">
              Seven Diagnostic Layers
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr className="bg-slate-100/90 border-b border-slate-200 text-xs font-bold uppercase tracking-wider text-slate-700">
                  <th className="py-4 px-5 w-36">Discovery Layer</th>
                  <th className="py-4 px-5">Leading Indicators (Signal)</th>
                  <th className="py-4 px-5">Lagging Indicators (Impact)</th>
                  <th className="py-4 px-5">Typical PoV / PoP Success Bar</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-slate-700">
                {filteredKpis.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-4 px-5 font-mono font-bold text-blue-900 whitespace-nowrap bg-blue-50/30">
                      {row.layer.replace(/^L\d+\s*[-·]?\s*/, '')}
                    </td>
                    <td className="py-4 px-5 text-slate-800 text-xs sm:text-sm">
                      {row.leadingIndicators}
                    </td>
                    <td className="py-4 px-5 text-slate-800 text-xs sm:text-sm">
                      {row.laggingIndicators}
                    </td>
                    <td className="py-4 px-5">
                      <span className="inline-block px-3 py-1 rounded-md bg-emerald-50 text-emerald-800 font-bold text-xs border border-emerald-200">
                        {row.typicalPovSuccessBar}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Measurement Philosophy Details */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs">
            <Target className="w-6 h-6 text-blue-600 mb-3" />
            <h4 className="text-base font-bold text-slate-900 mb-1">Pre-Agreed Attribution</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Attribution models (sourced vs. influenced pipeline) are formally specified in the pre-signature charter, preventing post-campaign disagreement.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs">
            <BarChart2 className="w-6 h-6 text-emerald-600 mb-3" />
            <h4 className="text-base font-bold text-slate-900 mb-1">Independent Audit</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              For E5 Outcome and E6 Risk-Sharing engagements, a dedicated Revenue Analyst and Performance Auditor audit telemetry independently of delivery teams.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs">
            <TrendingUp className="w-6 h-6 text-indigo-600 mb-3" />
            <h4 className="text-base font-bold text-slate-900 mb-1">Empirical Gate Decisions</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              PoV experiments lead to a binding Go/No-Go decision against numerical criteria, ensuring follow-on investments rest on verified lift.
            </p>
          </div>
        </div>

        {/* Cross-Link Navigation */}
        <div className="p-8 rounded-3xl bg-slate-900 text-white border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1">
            <h3 className="text-xl font-bold">Benchmark Your Current Revenue Stack</h3>
            <p className="text-xs sm:text-sm text-slate-300">
              Schedule a 60-minute Fit & Frame session to review baseline data access and lock initial target metrics.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <Link
              to="/engagement-model/onboarding"
              className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs shadow-xs"
            >
              See Onboarding Process →
            </Link>
            <Link
              to="/engagement-model/discovery-stack"
              className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-xs border border-slate-700"
            >
              Explore Discovery Stack
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
