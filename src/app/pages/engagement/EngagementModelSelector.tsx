import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import EngagementSubNav from '../../components/EngagementSubNav';
import {
  modelSelectorData,
  situationPlaybooksB1toB15,
  situationSequenceMapping
} from '../../../data/engagementDossierData';
import {
  Bot,
  Briefcase,
  ShoppingBag,
  Cpu,
  ArrowRight,
  RotateCcw,
  Sparkles,
  Clock,
  Compass,
  CheckCircle2,
  Sliders,
  ShieldCheck,
  AlertCircle
} from 'lucide-react';

export default function EngagementModelSelector() {
  const [selectedSegment, setSelectedSegment] = useState<'services' | 'retail' | 'platform'>('services');
  const [selectedSituationKey, setSelectedSituationKey] = useState<string>('B1');

  const segments = [
    {
      id: 'services' as const,
      name: 'Services Company',
      icon: Briefcase,
      desc: 'Monetizes expert hours, bespoke retainers, and client relationships.'
    },
    {
      id: 'retail' as const,
      name: 'Retail & Commerce',
      icon: ShoppingBag,
      desc: 'Monetizes transaction margins, omnichannel flow, and customer CAC.'
    },
    {
      id: 'platform' as const,
      name: 'Platform Company',
      icon: Cpu,
      desc: 'Monetizes usage, seat density, API consumption, and NRR expansion.'
    }
  ];

  // Situations list from B1-B15 + PE
  const situationOptions = [
    { key: 'B1', name: 'Pipeline drought', prompt: 'Flat or declining pipeline, low response rates' },
    { key: 'B2', name: 'High CAC / inefficient growth', prompt: 'Rising CAC, falling LTV:CAC, budget constraints' },
    { key: 'B3', name: 'Low win rate / stalled deals', prompt: 'Late-stage slippage, heavy discounting to close' },
    { key: 'B4', name: 'Forecast unreliability', prompt: 'Missed commit numbers, board & investor scrutiny' },
    { key: 'B5', name: 'New market / segment entry', prompt: 'Expansion into untested vertical or geography' },
    { key: 'B6', name: 'New product / service launch', prompt: 'R&D investment with unclear commercial pipeline' },
    { key: 'B7', name: 'Channel dependency risk', prompt: 'Single channel or partner driving >40% of revenue' },
    { key: 'B8', name: 'Moving upmarket / enterprise motion', prompt: 'Larger deal sizes but elongated sales cycles' },
    { key: 'B9', name: 'Moving downmarket / velocity motion', prompt: 'High-touch sales model too expensive for smaller deals' },
    { key: 'B10', name: 'Post-M&A GTM integration', prompt: 'Overlapping territories, duplicate stacks, mixed cultures' },
    { key: 'B11', name: 'Competitive displacement pressure', prompt: 'Declining win-rate against a specific aggressive rival' },
    { key: 'B12', name: 'Pricing underperformance', prompt: 'Discount creep, margin compression, packaging confusion' },
    { key: 'B13', name: 'Expansion revenue underperformance', prompt: 'Flat NRR, customer churn, missed cross-sell' },
    { key: 'B14', name: 'Demand invisibility', prompt: 'Deals closing without predictable or traceable demand sources' },
    { key: 'B15', name: 'Sales team ramp failure', prompt: 'Slow rep productivity ramp, widespread quota misses' },
    { key: 'PE', name: 'PE Portfolio GTM Uplift', prompt: 'Multi-asset standardized revenue acceleration & margin expansion' }
  ];

  // Resolve recommendation
  const rawSituationData = situationPlaybooksB1toB15.find((b) => b.id === selectedSituationKey);
  const rawMapping = modelSelectorData.bySituation[selectedSituationKey];
  const segmentConfig = modelSelectorData.segmentNotes[selectedSegment];

  // Model sequence labels
  let resolvedSequence = rawMapping ? [...rawMapping.seq] : ['e2', 'e3'];
  if (selectedSituationKey === 'PE') {
    resolvedSequence = ['e6', 'e5'];
  }
  // Segment adjustment if applicable
  if (segmentConfig && segmentConfig.adj) {
    resolvedSequence = segmentConfig.adj(resolvedSequence);
  }

  const modelNames = resolvedSequence.map(
    (code) => modelSelectorData.modelsMap[code] || code.toUpperCase()
  );

  const duration = rawSituationData?.duration || (selectedSituationKey === 'PE' ? '9–18 mos' : '6–10 wks');
  const triggerSignals = rawSituationData?.triggerSignals || (selectedSituationKey === 'PE' ? 'Standardized portfolio performance uplift mandate' : 'Specific growth blockage');
  const note = rawMapping?.note || (selectedSituationKey === 'PE' ? 'Shared framework with aligned economic incentives across portfolio companies.' : 'Balanced engagement progression.');

  // Discovery layer hints
  const getDiscoveryLayers = (key: string) => {
    switch (key) {
      case 'B1': return 'L1 Market & L2 Demand';
      case 'B2': return 'L6 Customer & L4 Channel';
      case 'B3': return 'L5 Competitive & L3 Value';
      case 'B4': return 'L3 Value & L2 Demand';
      case 'B5': return 'L1 Market & L6 Customer';
      case 'B6': return 'L7 Product-Market Fit & L2 Demand';
      case 'B7': return 'L4 Channel Discovery';
      case 'B8': return 'L3 Value & L6 Customer';
      case 'B9': return 'L2 Demand & L7 PMF';
      case 'B10': return 'L4 Channel & L6 Customer';
      case 'B11': return 'L5 Competitive Discovery';
      case 'B12': return 'L3 Value & Pricing';
      case 'B13': return 'L7 PMF & L6 Customer';
      case 'B14': return 'L1 Market & L2 Demand';
      case 'B15': return 'L3 Value & L5 Competitive';
      case 'PE': return 'L1–L7 Complete Discovery Stack';
      default: return 'L1 Market & L2 Demand';
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans pt-16 lg:pt-[72px]">
      {/* Hero Header with Dark Industry Image Background */}
      <section className="relative bg-slate-950 text-white py-16 lg:py-24 overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=2000&q=80"
            alt="Decision Architecture Telemetry"
            className="w-full h-full object-cover object-center opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-950/70 to-slate-900/50" />
          <div className="absolute inset-0 bg-radial-at-t from-blue-950/40 via-transparent to-transparent pointer-events-none" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/20 border border-blue-400/40 text-blue-300 text-xs font-semibold uppercase tracking-wider mb-5 font-mono">
            <Bot className="w-3.5 h-3.5 text-blue-400" />
            Decision Architecture
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-4">
            Interactive Engagement Model Selector
          </h1>
          <p className="text-lg text-slate-300 max-w-3xl leading-relaxed mb-6">
            Select your company segment and primary commercial friction point. Our deterministic engine maps your inputs directly to the 2026 Revenue Architecture Dossier playbooks.
          </p>

          <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span>Deterministic Source Mapping · Zero Generative Guesswork</span>
          </div>
        </div>
      </section>

      {/* Selector Container */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Inputs Column (Left 5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Step 1: Select Segment */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono font-bold text-blue-700 uppercase tracking-wider">
                  Step 01
                </span>
                <span className="text-xs text-slate-400 font-medium">Monetization Profile</span>
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-3">Select Company Segment</h3>

              <div className="space-y-2.5">
                {segments.map((seg) => {
                  const Icon = seg.icon;
                  const isSelected = selectedSegment === seg.id;
                  return (
                    <button
                      key={seg.id}
                      onClick={() => setSelectedSegment(seg.id)}
                      className={`w-full text-left p-3.5 rounded-xl border transition-all flex items-start gap-3 ${
                        isSelected
                          ? 'bg-blue-50/70 border-blue-400 ring-1 ring-blue-400/40'
                          : 'bg-white border-slate-200 hover:border-slate-300'
                      }`}
                    >
                      <div className={`p-2 rounded-lg shrink-0 ${isSelected ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-600'}`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <span className={`text-sm font-bold block ${isSelected ? 'text-blue-950' : 'text-slate-800'}`}>
                          {seg.name}
                        </span>
                        <span className="text-xs text-slate-500 leading-snug block mt-0.5">
                          {seg.desc}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Select Situation */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono font-bold text-blue-700 uppercase tracking-wider">
                  Step 02
                </span>
                <span className="text-xs text-slate-400 font-medium">Friction Point</span>
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-3">Select Business Situation</h3>

              <div className="max-h-80 overflow-y-auto space-y-2 pr-1">
                {situationOptions.map((sit) => {
                  const isSelected = selectedSituationKey === sit.key;
                  return (
                    <button
                      key={sit.key}
                      onClick={() => setSelectedSituationKey(sit.key)}
                      className={`w-full text-left p-3 rounded-xl border transition-all ${
                        isSelected
                          ? 'bg-blue-50/80 border-blue-400 ring-1 ring-blue-400/40'
                          : 'bg-white border-slate-200 hover:bg-slate-50'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className={`text-xs font-bold ${isSelected ? 'text-blue-900' : 'text-slate-900'}`}>
                          {sit.name}
                        </span>
                        <span className="font-mono text-[10px] px-1.5 py-0.5 rounded bg-slate-100 text-slate-600">
                          {sit.key}
                        </span>
                      </div>
                      <span className="text-[11px] text-slate-500 line-clamp-1">
                        {sit.prompt}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Output Card (Right 7 Cols) */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl border border-slate-200 shadow-md overflow-hidden sticky top-36">
              
              {/* Output Top Header */}
              <div className="p-6 sm:p-8 bg-slate-900 text-white border-b border-slate-800">
                <div className="flex items-center justify-between gap-4 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400">
                      Recommended Sequence
                    </span>
                  </div>
                  <button
                    onClick={() => {
                      setSelectedSegment('services');
                      setSelectedSituationKey('B1');
                    }}
                    className="inline-flex items-center gap-1 text-xs text-slate-400 hover:text-white"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    Reset
                  </button>
                </div>

                <h2 className="text-2xl font-extrabold text-white mb-2">
                  {situationOptions.find((s) => s.key === selectedSituationKey)?.name}
                </h2>
                <p className="text-xs text-slate-300">
                  <span className="font-semibold text-slate-200">Trigger Signals:</span> {triggerSignals}
                </p>
              </div>

              {/* Output Body */}
              <div className="p-6 sm:p-8 space-y-6">
                
                {/* Visual Model Flow */}
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-3">
                    Structured Engagement Path
                  </span>
                  <div className="flex flex-wrap items-center gap-2">
                    {modelNames.map((name, idx) => (
                      <React.Fragment key={idx}>
                        <div className="px-4 py-2.5 rounded-xl bg-blue-50 border border-blue-200 text-blue-900 font-bold font-mono text-sm shadow-2xs">
                          {name}
                        </div>
                        {idx < modelNames.length - 1 && (
                          <span className="text-slate-300 font-bold font-mono text-base">→</span>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </div>

                {/* Details Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-slate-100">
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block mb-1">
                      Indicative Duration
                    </span>
                    <span className="text-sm font-bold text-slate-900 flex items-center gap-1.5">
                      <Clock className="w-4 h-4 text-blue-600" />
                      {duration}
                    </span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block mb-1">
                      Highest-Leverage Discovery
                    </span>
                    <span className="text-sm font-bold text-slate-900 flex items-center gap-1.5">
                      <Compass className="w-4 h-4 text-emerald-600" />
                      {getDiscoveryLayers(selectedSituationKey)}
                    </span>
                  </div>
                </div>

                {/* Strategic Rationale */}
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 text-xs text-slate-700 leading-relaxed">
                  <span className="font-bold text-slate-900 block mb-1">Why this sequence fits:</span>
                  <span>{note}</span>
                </div>

                {/* Delivery Mix Note */}
                <div className="p-4 rounded-xl bg-blue-50/60 border border-blue-100 text-xs text-blue-950 leading-relaxed">
                  <span className="font-bold text-blue-900 block mb-1">
                    {segments.find((s) => s.id === selectedSegment)?.name} Delivery Dynamics:
                  </span>
                  <span>{segmentConfig?.mix}</span>
                </div>

                {/* Action Row */}
                <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <Link
                    to="/engagement-model/onboarding"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-xs"
                  >
                    Initiate Fit & Frame (Week 0) <ArrowRight className="w-3.5 h-3.5" />
                  </Link>

                  <div className="flex items-center gap-3 text-xs">
                    <Link
                      to="/engagement-model/models"
                      className="text-slate-600 hover:text-slate-900 font-medium"
                    >
                      View All Models
                    </Link>
                    <span className="text-slate-300">·</span>
                    <Link
                      to="/engagement-model/commercials"
                      className="text-slate-600 hover:text-slate-900 font-medium"
                    >
                      Guardrails
                    </Link>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
