import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import EngagementSubNav from '../../components/EngagementSubNav';
import {
  stagePlaybooksServices,
  stagePlaybooksRetail,
  stagePlaybooksPlatform,
  productLineNote
} from '../../../data/engagementDossierData';
import {
  Layers,
  Briefcase,
  ShoppingBag,
  Cpu,
  ArrowRight,
  Sparkles,
  ChevronRight,
  ShieldCheck,
  Compass,
  Code2,
  CheckCircle2,
  HelpCircle
} from 'lucide-react';

export default function EngagementStagePlaybooks() {
  const [activeSegment, setActiveSegment] = useState<'services' | 'retail' | 'platform'>('services');
  const [showTechnicalCodes, setShowTechnicalCodes] = useState(false);

  const segmentConfig = {
    services: {
      name: 'Services Companies',
      icon: Briefcase,
      color: 'blue',
      economicModel: 'Monetize people-hours, expert advisory, and client relationships.',
      coreChallenge: 'Capacity bottlenecks, utilization limits, and shifting from bespoke deliverables to packaged high-margin retainers.',
      data: stagePlaybooksServices,
      status: 'Fully Documented Playbook'
    },
    retail: {
      name: 'Retail & Commerce',
      icon: ShoppingBag,
      color: 'amber',
      economicModel: 'Monetize transaction margin, order value, and channel efficiency.',
      coreChallenge: 'Paid acquisition margin compression, omnichannel friction, inventory turnover, and retention dynamics.',
      data: stagePlaybooksRetail,
      status: 'Documented Playbook'
    },
    platform: {
      name: 'Platform Companies',
      icon: Cpu,
      color: 'emerald',
      economicModel: 'Monetize usage, seat density, API volume, and consumption.',
      coreChallenge: 'Bridging product-led signups to enterprise annual contracts, managing net revenue retention, and expansion telemetry.',
      data: stagePlaybooksPlatform,
      status: 'Documented Playbook'
    }
  };

  const currentSegment = segmentConfig[activeSegment];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans pt-16 lg:pt-[72px]">
      {/* Hero Header with Dark Industry Image Background */}
      <section className="relative bg-slate-950 text-white py-16 lg:py-24 overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=2000&q=80"
            alt="Enterprise Growth Architecture"
            className="w-full h-full object-cover object-center opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-900/80" />
          <div className="absolute inset-0 bg-radial-at-t from-blue-950/40 via-transparent to-transparent pointer-events-none" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/20 border border-blue-400/40 text-blue-300 text-xs font-semibold uppercase tracking-wider mb-5 font-mono">
            <Layers className="w-3.5 h-3.5 text-blue-400" />
            Stage & Segment Playbooks
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-4">
            Growth Playbooks by Company and Product Stage
          </h1>
          <p className="text-lg text-slate-300 max-w-3xl leading-relaxed mb-6">
            The same maturity stage means entirely different things for a professional services firm, a multi-channel retailer, or a consumption platform. Strategic engagement recommendations must reflect underlying product-line economics rather than broad industry labels.
          </p>

          {/* Architecture Principle Callout */}
          <div className="p-4 sm:p-5 rounded-xl bg-slate-900/90 border border-slate-800 text-slate-300 text-sm max-w-3xl flex items-start gap-3.5 shadow-inner">
            <Sparkles className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
            <div>
              <span className="font-semibold text-white block mb-0.5">Core Architecture Principle:</span>
              <span>{productLineNote}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Segment Tabs */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-200 pb-4 mb-8">
          <div className="flex items-center gap-2 overflow-x-auto w-full sm:w-auto pb-2 sm:pb-0">
            {(Object.keys(segmentConfig) as Array<keyof typeof segmentConfig>).map((key) => {
              const seg = segmentConfig[key];
              const Icon = seg.icon;
              const isActive = activeSegment === key;
              return (
                <button
                  key={key}
                  onClick={() => setActiveSegment(key)}
                  className={`inline-flex items-center gap-2.5 px-4 py-2.5 rounded-lg text-sm font-semibold transition-all ${
                    isActive
                      ? 'bg-slate-900 text-white shadow-sm'
                      : 'bg-white text-slate-600 hover:text-slate-900 hover:bg-slate-100 border border-slate-200'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-blue-400' : 'text-slate-500'}`} />
                  {seg.name}
                </button>
              );
            })}
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
            <button
              onClick={() => setShowTechnicalCodes(!showTechnicalCodes)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium border border-slate-300 bg-white text-slate-600 hover:bg-slate-50"
            >
              <Code2 className="w-3.5 h-3.5 text-slate-500" />
              {showTechnicalCodes ? 'Hide Offering Codes' : 'Show Technical Bundle Codes'}
            </button>
          </div>
        </div>

        {/* Segment Summary Card */}
        <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs mb-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 space-y-2">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-700">
              <span>Segment Profile</span>
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
              <span className="text-emerald-700 font-mono">{currentSegment.status}</span>
            </div>
            <h3 className="text-xl font-bold text-slate-900">{currentSegment.name} Revenue Mechanics</h3>
            <p className="text-sm text-slate-600 leading-relaxed">{currentSegment.economicModel}</p>
            <p className="text-xs text-slate-500 mt-1">
              <span className="font-semibold text-slate-700">Core Pressure Point:</span> {currentSegment.coreChallenge}
            </p>
          </div>
          <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/80 flex flex-col justify-center">
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block mb-1">Standard Progression</span>
            <span className="text-sm font-bold text-slate-800">S1 Formation → S6 Reinvention</span>
            <span className="text-xs text-slate-600 mt-2">
              Evaluated across 7 revenue discovery layers with custom risk-apportioned engagement tracks.
            </span>
          </div>
        </div>

        {/* Stage Table */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden mb-12">
          <div className="px-6 py-4 bg-slate-900 text-white flex items-center justify-between border-b border-slate-800">
            <div>
              <h4 className="font-bold text-base text-white">Stage-by-Stage Playbook Matrix</h4>
              <p className="text-xs text-slate-400">Preserved from the Revenue Architecture Dossier · Edition 2026</p>
            </div>
            <span className="text-xs font-mono px-2.5 py-1 rounded bg-slate-800 text-slate-300 border border-slate-700">
              6 Stages (S1–S6)
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr className="bg-slate-100/80 border-b border-slate-200 text-xs font-bold uppercase tracking-wider text-slate-700">
                  <th className="py-3.5 px-4 w-32">Stage</th>
                  <th className="py-3.5 px-5">Signature Situation</th>
                  <th className="py-3.5 px-4 w-44">Discovery Focus</th>
                  <th className="py-3.5 px-5">Recommended Engagement & Offering Bundle</th>
                  <th className="py-3.5 px-4 w-36 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-slate-700">
                {currentSegment.data.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-4 px-4 font-mono font-bold text-blue-900 whitespace-nowrap bg-blue-50/30">
                      {row.stage}
                    </td>
                    <td className="py-4 px-5">
                      <span className="font-semibold text-slate-900 block">{row.signatureSituation}</span>
                      <span className="text-xs text-slate-500 mt-0.5 block">
                        Critical bottleneck requiring baseline instrumentation.
                      </span>
                    </td>
                    <td className="py-4 px-4 font-mono text-xs text-slate-800">
                      <span className="inline-block px-2 py-1 rounded bg-slate-100 border border-slate-200 font-semibold">
                        {row.discoveryFocus}
                      </span>
                    </td>
                    <td className="py-4 px-5">
                      <div className="font-medium text-slate-900">
                        {row.bundleSub ? (
                          <div className="text-xs text-emerald-800 font-medium bg-emerald-50 inline-block px-2 py-0.5 rounded border border-emerald-200 mb-1">
                            {row.bundleSub}
                          </div>
                        ) : null}
                        <div>
                          {showTechnicalCodes ? (
                            <span className="font-mono text-xs text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-200 block sm:inline">
                              {row.recommendedBundle}
                            </span>
                          ) : (
                            <span className="text-slate-700 text-xs sm:text-sm">
                              Tailored revenue architecture suite for {row.stage}
                            </span>
                          )}
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-4 text-right whitespace-nowrap">
                      <Link
                        to="/engagement-model/model-selector"
                        className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600 hover:text-blue-800"
                      >
                        Match Model <ChevronRight className="w-3 h-3" />
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="p-4 bg-slate-50 border-t border-slate-200 text-xs text-slate-600 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
            <span>
              <strong>Note:</strong> Technical bundle codes (e.g. F1-A1, F7-A2) correspond to verified offering families mapped across Consulting (Track A) and AI Automation (Track B).
            </span>
            <Link to="/offerings/families" className="text-blue-600 hover:underline shrink-0 font-medium">
              View Detailed Offering Families →
            </Link>
          </div>
        </div>

        {/* Cross-Link Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs hover:border-blue-300 transition-colors">
            <Compass className="w-6 h-6 text-blue-600 mb-3" />
            <h4 className="text-base font-bold text-slate-900 mb-1">Explore the Discovery Stack</h4>
            <p className="text-sm text-slate-600 mb-4 leading-relaxed">
              Understand how Discovery Layers L1 through L7 isolate the specific constraints holding back your stage transition.
            </p>
            <Link
              to="/engagement-model/discovery-stack"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-700 hover:text-blue-900"
            >
              Explore Discovery Stack <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs hover:border-blue-300 transition-colors">
            <ShieldCheck className="w-6 h-6 text-emerald-600 mb-3" />
            <h4 className="text-base font-bold text-slate-900 mb-1">Run the Model Selector</h4>
            <p className="text-sm text-slate-600 mb-4 leading-relaxed">
              Input your exact company segment and pressing business challenge to generate a deterministic engagement roadmap.
            </p>
            <Link
              to="/engagement-model/model-selector"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-700 hover:text-emerald-900"
            >
              Launch Interactive Selector <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

      </section>
    </div>
  );
}
