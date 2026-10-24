import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import EngagementSubNav from '../../components/EngagementSubNav';
import {
  situationPlaybooksB1toB15,
  situationSequenceMapping
} from '../../../data/engagementDossierData';
import {
  Sliders,
  AlertTriangle,
  ArrowRight,
  Search,
  Clock,
  Sparkles,
  Shield,
  Layers,
  ChevronRight,
  TrendingDown,
  Target,
  BarChart2,
  RefreshCw
} from 'lucide-react';

export default function EngagementBusinessSituations() {
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState<'all' | 'pipeline' | 'economics' | 'market' | 'execution'>('all');
  const [showOfferingCodes, setShowOfferingCodes] = useState(false);

  // Group situations by thematic category
  const getCategory = (id: string) => {
    switch (id) {
      case 'B1':
      case 'B14':
      case 'B3':
        return 'pipeline';
      case 'B2':
      case 'B4':
      case 'B12':
      case 'B13':
        return 'economics';
      case 'B5':
      case 'B6':
      case 'B7':
      case 'B8':
      case 'B9':
      case 'B10':
        return 'market';
      case 'B11':
      case 'B15':
      default:
        return 'execution';
    }
  };

  // Combine the B1–B15 table with the sequence table
  const combinedSituations = situationPlaybooksB1toB15.map((b) => {
    const seqRow = situationSequenceMapping.find(
      (s) => s.situation.toLowerCase().trim() === b.situation.toLowerCase().trim()
    ) || situationSequenceMapping.find(
      (s) => s.situation.toLowerCase().includes(b.situation.toLowerCase().slice(0, 10))
    );

    return {
      ...b,
      category: getCategory(b.id),
      sequence: seqRow?.modelSequence || [],
      why: seqRow?.why || 'Pre-tested sequence matching urgency to risk governance.'
    };
  });

  // Include the 16th PE Portfolio recommendation from the dossier
  const peRow = {
    id: 'PE-Uplift',
    situation: 'PE Portfolio GTM Uplift',
    triggerSignals: 'Multiple portfolio assets with unstandardized GTM, margin expansion mandates, exit timing pressures',
    engagement: 'E6-E Joint Risk-Sharing + E5 Outcome-Based',
    duration: '9–18 mos',
    category: 'economics',
    sequence: [
      { id: 'E6-E', label: 'E6-E Portfolio Partnership', variant: 'green' as const },
      { id: 'E5', label: 'E5 Outcome-Based' }
    ],
    why: 'Shared framework with aligned economic incentives across portfolio companies.'
  };

  const allSituations = [...combinedSituations, peRow];

  const filtered = allSituations.filter((item) => {
    const matchesSearch =
      item.situation.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.triggerSignals.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.why.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCat = categoryFilter === 'all' || item.category === categoryFilter;
    return matchesSearch && matchesCat;
  });

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans pt-16 lg:pt-[72px]">
      {/* Hero Header with Dark Industry Image Background */}
      <section className="relative bg-slate-950 text-white py-16 lg:py-24 overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2000&q=80"
            alt="Strategic Situations Architecture"
            className="w-full h-full object-cover object-center opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-900/80" />
          <div className="absolute inset-0 bg-radial-at-t from-blue-950/40 via-transparent to-transparent pointer-events-none" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/20 border border-blue-400/40 text-blue-300 text-xs font-semibold uppercase tracking-wider mb-5 font-mono">
            <Sliders className="w-3.5 h-3.5 text-blue-400" />
            Situation Playbooks
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-4">
            When the Business Has a Problem, Choose the Right Play
          </h1>
          <p className="text-lg text-slate-300 max-w-3xl leading-relaxed mb-6">
            Every business situation carries signature trigger signals, distinct constraints, and a natural risk profile. Rather than selling generic advisory, ProfitMachines deploys pre-structured engagement sequences engineered for specific operational realities.
          </p>

          <div className="flex flex-wrap gap-4 text-xs font-mono text-slate-400">
            <span className="flex items-center gap-1.5 bg-slate-900/80 px-3 py-1.5 rounded-md border border-slate-800">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              15 Standard Business Situations (B1–B15)
            </span>
            <span className="flex items-center gap-1.5 bg-slate-900/80 px-3 py-1.5 rounded-md border border-slate-800">
              <span className="w-2 h-2 rounded-full bg-blue-400" />
              PE Portfolio Growth Play
            </span>
            <span className="flex items-center gap-1.5 bg-slate-900/80 px-3 py-1.5 rounded-md border border-slate-800">
              <span className="w-2 h-2 rounded-full bg-amber-400" />
              Deterministic Model Sequences
            </span>
          </div>
        </div>
      </section>

      {/* Filter and Search Bar */}
      <section className="py-8 bg-white border-b border-slate-200 sticky top-28 z-30 shadow-2xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-1 md:pb-0">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400 mr-2 shrink-0">Filter:</span>
            {[
              { id: 'all', label: 'All Situations (16)' },
              { id: 'pipeline', label: 'Pipeline & Deals' },
              { id: 'economics', label: 'CAC, Margin & Economics' },
              { id: 'market', label: 'Market & Expansion' },
              { id: 'execution', label: 'Rep & Team Execution' }
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setCategoryFilter(cat.id as any)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors ${
                  categoryFilter === cat.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3 w-full md:w-auto">
            <div className="relative flex-1 md:w-64">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search symptom, signal or playbook..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-9 pr-3 py-1.5 text-xs rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 bg-white"
              />
            </div>
            <button
              onClick={() => setShowOfferingCodes(!showOfferingCodes)}
              className="text-xs font-semibold text-slate-600 hover:text-slate-900 border border-slate-300 rounded-lg px-2.5 py-1.5 whitespace-nowrap bg-slate-50"
            >
              {showOfferingCodes ? 'Hide Offering Codes' : 'Show Offering Codes'}
            </button>
          </div>
        </div>
      </section>

      {/* Main Grid */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl border border-slate-200/90 shadow-xs hover:shadow-md hover:border-blue-300 transition-all p-6 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-slate-100 text-slate-700 border border-slate-200">
                    {item.id}
                  </span>
                  <span className="inline-flex items-center gap-1 text-xs font-medium text-slate-500">
                    <Clock className="w-3.5 h-3.5 text-slate-400" />
                    {item.duration}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 mb-2 leading-snug">
                  {item.situation}
                </h3>

                {/* Trigger Signals */}
                <div className="p-3 rounded-xl bg-amber-50/70 border border-amber-200/60 mb-4 text-xs text-amber-950">
                  <div className="flex items-start gap-1.5">
                    <AlertTriangle className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold block text-amber-900 mb-0.5">Trigger Signals:</span>
                      <span>{item.triggerSignals}</span>
                    </div>
                  </div>
                </div>

                {/* Model Sequence */}
                <div className="mb-4">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1.5">
                    Recommended Sequence
                  </span>
                  <div className="flex flex-wrap items-center gap-1.5">
                    {item.sequence.length > 0 ? (
                      item.sequence.map((step, idx) => (
                        <React.Fragment key={idx}>
                          <span
                            className={`px-2.5 py-1 rounded-md text-xs font-bold font-mono ${
                              step.variant === 'red'
                                ? 'bg-red-50 text-red-700 border border-red-200'
                                : step.variant === 'green'
                                ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                                : step.variant === 'dark'
                                ? 'bg-slate-900 text-white'
                                : 'bg-blue-50 text-blue-700 border border-blue-200'
                            }`}
                          >
                            {step.label}
                          </span>
                          {idx < item.sequence.length - 1 && (
                            <span className="text-slate-300 font-mono text-xs">→</span>
                          )}
                        </React.Fragment>
                      ))
                    ) : (
                      <span className="text-xs text-slate-500">Custom engagement structure</span>
                    )}
                  </div>
                </div>

                {/* Rationale */}
                <p className="text-xs text-slate-600 mb-4 leading-relaxed">
                  <span className="font-semibold text-slate-700">Rationale:</span> {item.why}
                </p>

                {/* Technical Offering Codes Toggle */}
                {showOfferingCodes && (
                  <div className="pt-3 border-t border-slate-100 text-[11px] font-mono text-slate-500">
                    <span className="font-semibold text-slate-700">Offering Family Codes:</span> {item.engagement}
                  </div>
                )}
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between mt-2">
                <Link
                  to="/engagement-model/model-selector"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600 hover:text-blue-800"
                >
                  Configure Play <ChevronRight className="w-3.5 h-3.5" />
                </Link>
                <Link
                  to="/engagement-model/models"
                  className="text-xs text-slate-400 hover:text-slate-600"
                >
                  Model Details
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Block */}
        <div className="mt-14 p-8 rounded-3xl bg-slate-900 text-white border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2">
            <h3 className="text-xl sm:text-2xl font-bold">Determine Your Organization's Commercial Situation</h3>
            <p className="text-sm text-slate-300 max-w-2xl">
              Use our interactive Engagement Model Selector to test different variables, or book a confidential 60-minute Fit & Frame working session.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <Link
              to="/engagement-model/model-selector"
              className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm transition-all text-center shadow-sm"
            >
              Launch Model Selector
            </Link>
            <Link
              to="/engagement-model/onboarding"
              className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-sm transition-all text-center border border-slate-700"
            >
              See Onboarding Process
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
