import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Globe, ArrowRight, ChevronRight, Activity, ShieldCheck,
  TrendingUp, BarChart3, Layers, Cpu, Compass, CheckCircle2,
  AlertCircle, Users, Bot, Sparkles, Building2, HelpCircle,
  MapPin, Zap, ArrowUpRight, DollarSign, Network, Target, Briefcase,
  ExternalLink, FileText, ShieldAlert, Award, ChevronDown, Check,
  Scale, Clock, Database, Search, Filter, Lock
} from 'lucide-react';
import { AccelerationPageData, CapabilityModule } from './types';
import { GlobalExpansionIntakeForm } from '../../components/forms/GlobalExpansionIntakeForm';

interface GlobalAccelerationPageTemplateProps {
  data: AccelerationPageData;
}

export function GlobalAccelerationPageTemplate({ data }: GlobalAccelerationPageTemplateProps) {
  const location = useLocation();
  const [selectedGroup, setSelectedGroup] = useState<string>('All');
  const [expandedCapId, setExpandedCapId] = useState<string>(data.capabilities[0]?.id || '');
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  // Groups present in capabilities
  const groups = ['All', ...Array.from(new Set(data.capabilities.map(c => c.groupName)))];

  const filteredCapabilities = selectedGroup === 'All'
    ? data.capabilities
    : data.capabilities.filter(c => c.groupName === selectedGroup);

  useEffect(() => {
    document.title = `${data.primaryNavLabel} (${data.contentHeading}) | ProfitMachines`;
    // If a hash is present, set the expanded capability to match that hash
    if (location.hash) {
      const hashId = location.hash.replace(/^#/, '');
      const match = data.capabilities.find(c => c.id.toLowerCase() === hashId.toLowerCase());
      if (match) {
        setExpandedCapId(match.id);
      }
    }
  }, [location.hash, data]);

  // Visual icons map
  const getThemeIcon = () => {
    switch (data.visualTheme) {
      case 'market': return Globe;
      case 'demand': return Network;
      case 'export': return TrendingUp;
      case 'partner': return Users;
      case 'supply': return Layers;
      case 'revenue': return BarChart3;
      case 'finance': return DollarSign;
      case 'ai': return Cpu;
      default: return Globe;
    }
  };

  const PageIcon = getThemeIcon();

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-100 selection:text-blue-900">
      
      {/* ── STICKY PAGE SUB-NAV BAR (FOR FAST AUDIT JUMPING) ── */}
      <nav aria-label="Page Sub Navigation" className="sticky top-16 z-30 bg-slate-900/95 backdrop-blur-md border-b border-slate-800 text-white text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-11 flex items-center justify-between gap-4 overflow-x-auto no-scrollbar">
          <div className="flex items-center gap-2.5 shrink-0">
            <span className="font-mono text-blue-400 font-bold">{data.pageNumber}</span>
            <span className="font-bold text-slate-200">{data.primaryNavLabel}</span>
            <span className="hidden sm:inline text-slate-500">|</span>
            <span className="hidden sm:inline text-slate-400 font-medium">{data.contentHeading}</span>
          </div>

          <div className="flex items-center gap-4 shrink-0 text-slate-300 font-medium">
            <a href="#overview" className="hover:text-blue-400 transition-colors">Overview</a>
            <a href="#challenges" className="hover:text-blue-400 transition-colors">Challenges</a>
            <a href="#capabilities" className="hover:text-blue-400 text-blue-400 font-bold transition-colors">Capabilities (8)</a>
            <a href="#methodology" className="hover:text-blue-400 transition-colors">Methodology</a>
            <a href="#kpis" className="hover:text-blue-400 transition-colors">Metrics</a>
            <a href="#frameworks" className="hover:text-blue-400 transition-colors">Frameworks</a>
            <a href="#use-cases" className="hover:text-blue-400 transition-colors">Use Cases</a>
            <a href="#evidence" className="hover:text-blue-400 transition-colors">Evidence</a>
            <a href="#consultation" className="px-2.5 py-1 rounded bg-blue-600 hover:bg-blue-500 text-white font-bold transition-colors">Briefing</a>
          </div>
        </div>
      </nav>

      {/* ── SECTION 01: EXECUTIVE HERO ── */}
      <section id="overview" className="relative pt-12 pb-16 sm:pt-20 sm:pb-24 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute inset-0 opacity-[0.20]" style={{ backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.07) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.07) 1px, transparent 1px)', backgroundSize: '4rem 4rem' }} />
          <div className="absolute -top-40 right-1/4 w-[600px] h-[600px] bg-blue-600/15 rounded-full blur-[140px]" />
          <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-indigo-600/12 rounded-full blur-[130px]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs font-mono text-slate-400 mb-4">
            <Link to="/global-acceleration" className="hover:text-blue-400 transition-colors">Global Acceleration</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
            <span className="text-blue-400 font-bold">{data.primaryNavLabel}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/15 border border-blue-400/30 text-blue-300 text-xs font-bold tracking-widest uppercase font-mono mb-4">
                <PageIcon className="w-3.5 h-3.5 text-blue-400" />
                <span>{data.heroTagline}</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.15] mb-5 font-heading">
                {data.primaryNavLabel}:{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-indigo-300">
                  {data.contentHeading}
                </span>
              </h1>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-6">
                {data.heroDescription}
              </p>

              {/* Target Audience Line */}
              <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 text-xs text-slate-300 mb-8 space-y-1">
                <div className="text-[11px] font-mono font-bold text-blue-400 uppercase tracking-wider">
                  Target Decision-Makers:
                </div>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1 text-slate-300">
                  {data.targetAudience.map((aud, aIdx) => (
                    <li key={aIdx} className="flex items-start gap-1.5">
                      <span className="text-blue-400">•</span>
                      <span>{aud}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Hero CTAs */}
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="#capabilities"
                  className="px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 active:bg-blue-700 text-white font-bold text-sm transition-all shadow-lg shadow-blue-600/30 inline-flex items-center gap-2 group cursor-pointer"
                >
                  <span>{data.primaryCtaText}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>

                <a
                  href="#consultation"
                  className="px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-200 font-bold text-sm transition-all inline-flex items-center gap-2 cursor-pointer"
                >
                  <span>{data.secondaryCtaText}</span>
                  <ArrowUpRight className="w-4 h-4 text-slate-400" />
                </a>
              </div>
            </div>

            {/* Right Hero Diagram: Abstract Network Visualization (NO PEOPLE PHOTOGRAPHY) */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl border border-slate-800 bg-slate-900/90 p-6 shadow-2xl relative overflow-hidden">
                <div className="flex items-center justify-between pb-3.5 border-b border-slate-800 mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-300">
                      System Architecture: {data.contentHeading}
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded border border-blue-400/20">
                    Active Module Mesh
                  </span>
                </div>

                {/* 4 Outcome Metrics */}
                <div className="grid grid-cols-2 gap-3 mb-5">
                  {data.businessOutcomes.map((out, oIdx) => (
                    <div key={oIdx} className="p-3 rounded-xl bg-slate-950/80 border border-slate-800/80">
                      <div className="text-base sm:text-lg font-mono font-extrabold text-blue-400 leading-none mb-1">
                        {out.metric}
                      </div>
                      <div className="text-xs font-bold text-white leading-tight mb-1">
                        {out.label}
                      </div>
                      <div className="text-[10px] text-slate-400 leading-snug line-clamp-2">
                        {out.description}
                      </div>
                    </div>
                  ))}
                </div>

                {/* SVG Domain Topology Diagram */}
                <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-center">
                  <svg className="w-full h-32 text-blue-500" viewBox="0 0 400 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="60" cy="60" r="28" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3" fill="rgba(37, 99, 235, 0.08)" />
                    <circle cx="60" cy="60" r="14" fill="#2563eb" />
                    <text x="60" y="64" fill="#ffffff" fontSize="9" fontWeight="bold" textAnchor="middle">Origin</text>

                    <line x1="88" y1="60" x2="162" y2="35" stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="2 2" />
                    <line x1="88" y1="60" x2="162" y2="85" stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="2 2" />

                    <circle cx="190" cy="35" r="22" stroke="#60a5fa" strokeWidth="1.5" fill="rgba(15, 23, 42, 0.9)" />
                    <text x="190" y="38" fill="#93c5fd" fontSize="8" fontWeight="bold" textAnchor="middle">Validation</text>

                    <circle cx="190" cy="85" r="22" stroke="#60a5fa" strokeWidth="1.5" fill="rgba(15, 23, 42, 0.9)" />
                    <text x="190" y="88" fill="#93c5fd" fontSize="8" fontWeight="bold" textAnchor="middle">Corridor</text>

                    <line x1="212" y1="35" x2="310" y2="60" stroke="#34d399" strokeWidth="1.5" />
                    <line x1="212" y1="85" x2="310" y2="60" stroke="#34d399" strokeWidth="1.5" />

                    <circle cx="340" cy="60" r="30" stroke="#10b981" strokeWidth="2" fill="rgba(16, 185, 129, 0.15)" />
                    <circle cx="340" cy="60" r="15" fill="#10b981" />
                    <text x="340" y="64" fill="#ffffff" fontSize="9" fontWeight="bold" textAnchor="middle">Target</text>
                  </svg>
                  <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 mt-2 px-2">
                    <span>Sovereign Intake</span>
                    <span>Empirical Clearance</span>
                    <span>Deterministic Execution</span>
                  </div>
                </div>

                <div className="mt-3.5 text-center text-[11px] text-slate-500 font-mono">
                  Illustrative Topological Flow · Enterprise Domain Architecture
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 02: BUSINESS CHALLENGES ── */}
      <section id="challenges" className="py-14 sm:py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <span className="text-xs font-mono text-blue-600 uppercase tracking-widest font-bold">
              Domain Friction & Risk Exposure
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1 mb-3 font-heading">
              Why Traditional International Expansion Fails in {data.primaryNavLabel}
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Cross-border growth breaks down when leadership treats complex international dynamics with domestic assumptions. Examine the structural challenges this offering resolves:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.challenges.map((ch, idx) => (
              <div
                key={ch.id}
                className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200/90 shadow-xs flex flex-col justify-between hover:border-blue-400 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-3 pb-2 border-b border-slate-100">
                    <span className="text-[11px] font-mono font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded">
                      Challenge 0{idx + 1}
                    </span>
                    <AlertCircle className="w-4 h-4 text-amber-500" />
                  </div>

                  <h3 className="text-base font-bold text-slate-900 font-heading mb-2 leading-snug">
                    {ch.title}
                  </h3>

                  <div className="space-y-2.5 text-xs text-slate-600 leading-relaxed mb-4">
                    <div>
                      <strong className="text-slate-800">What is happening:</strong> {ch.situation}
                    </div>
                    <div>
                      <strong className="text-slate-800">Commercial consequence:</strong> {ch.consequences}
                    </div>
                    <div>
                      <strong className="text-slate-800">Why fragmented methods fail:</strong> {ch.existingProcessFailure}
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-100 text-xs font-semibold text-blue-700 flex items-center justify-between">
                  <span>Required decision:</span>
                  <span className="text-slate-900 font-bold">{ch.requiredDecision}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 03: CAPABILITY EXPLORER (ALL 8 CAPABILITIES WITH HASH ANCHORS) ── */}
      <section id="capabilities" className="py-14 sm:py-20 bg-white border-b border-slate-200 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <span className="text-xs font-mono text-blue-600 uppercase tracking-widest font-bold">
                Modular Capability Engine
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1 mb-2 font-heading">
                The Eight Required Capabilities of {data.primaryNavLabel}
              </h2>
              <p className="text-slate-600 text-sm max-w-2xl leading-relaxed">
                Click any capability module to inspect its business question, factors considered, methodology, deliverables, and performance KPIs.
              </p>
            </div>

            {/* Group Filter Tabs */}
            <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-xl bg-slate-100 border border-slate-200 self-start md:self-auto">
              {groups.map(grp => (
                <button
                  key={grp}
                  onClick={() => setSelectedGroup(grp)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    selectedGroup === grp
                      ? 'bg-blue-600 text-white shadow-xs'
                      : 'text-slate-600 hover:text-blue-600'
                  }`}
                >
                  {grp}
                </button>
              ))}
            </div>
          </div>

          {/* Capabilities Grid: Stacked Cards with Full Content Depth */}
          <div className="space-y-6">
            {filteredCapabilities.map((cap, cIdx) => {
              const isExpanded = expandedCapId === cap.id;

              return (
                <div
                  key={cap.id}
                  id={cap.id} // Anchor for direct sub-sub menu scroll
                  className={`rounded-2xl border transition-all scroll-mt-32 ${
                    isExpanded
                      ? 'border-blue-500 shadow-md ring-1 ring-blue-500/20 bg-white'
                      : 'border-slate-200 hover:border-slate-300 bg-white'
                  }`}
                >
                  {/* Card Header (Click to expand/collapse) */}
                  <div
                    onClick={() => setExpandedCapId(isExpanded ? '' : cap.id)}
                    className="p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 cursor-pointer select-none"
                  >
                    <div className="flex items-start sm:items-center gap-3.5">
                      <div className={`w-9 h-9 rounded-xl flex items-center justify-center font-mono font-bold text-xs shrink-0 ${
                        isExpanded ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-700'
                      }`}>
                        0{cIdx + 1}
                      </div>

                      <div>
                        <div className="flex items-center gap-2 mb-0.5">
                          <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-slate-100 text-slate-600">
                            {cap.groupName}
                          </span>
                          <span className="text-[10px] font-mono text-slate-400">
                            #{cap.id}
                          </span>
                        </div>
                        <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 font-heading">
                          {cap.name}
                        </h3>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 self-end sm:self-auto">
                      <span className="text-xs text-blue-600 font-bold hidden sm:inline">
                        {isExpanded ? 'Collapse Module' : 'Expand Module Details'}
                      </span>
                      <div className={`w-8 h-8 rounded-lg border border-slate-200 flex items-center justify-center text-slate-500 transition-transform ${
                        isExpanded ? 'rotate-180 bg-blue-50 text-blue-600 border-blue-200' : 'bg-slate-50'
                      }`}>
                        <ChevronDown className="w-4 h-4" />
                      </div>
                    </div>
                  </div>

                  {/* Substantive Capability Details (Always rendered with rich content) */}
                  {isExpanded && (
                    <div className="px-5 sm:px-6 pb-6 pt-2 border-t border-slate-100 space-y-6">
                      
                      {/* Business Question & Problem Addressed */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                        <div>
                          <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-blue-700 mb-1 flex items-center gap-1.5">
                            <HelpCircle className="w-3.5 h-3.5" />
                            Primary Strategic Question
                          </div>
                          <p className="text-sm font-bold text-slate-900 italic">
                            "{cap.businessQuestion}"
                          </p>
                        </div>

                        <div>
                          <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-amber-700 mb-1 flex items-center gap-1.5">
                            <AlertCircle className="w-3.5 h-3.5" />
                            Specific Problem Addressed
                          </div>
                          <p className="text-xs text-slate-600 leading-relaxed">
                            {cap.problemAddressed}
                          </p>
                        </div>
                      </div>

                      {/* Detailed Substantive Explanation */}
                      <div>
                        <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 mb-2">
                          Detailed Capability Methodology
                        </h4>
                        <p className="text-sm text-slate-700 leading-relaxed">
                          {cap.detailedExplanation}
                        </p>
                      </div>

                      {/* Factors Considered & Deliverables Outputs */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 mb-2.5 flex items-center gap-1.5">
                            <Database className="w-3.5 h-3.5 text-blue-600" />
                            Factors & Inputs Evaluated
                          </h4>
                          <ul className="space-y-1.5 text-xs text-slate-600">
                            {cap.factorsInputs.map((f, fIdx) => (
                              <li key={fIdx} className="flex items-start gap-2">
                                <Check className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                                <span>{f}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 mb-2.5 flex items-center gap-1.5">
                            <FileText className="w-3.5 h-3.5 text-emerald-600" />
                            Outputs & Tangible Deliverables
                          </h4>
                          <ul className="space-y-1.5 text-xs text-slate-600">
                            {cap.deliverablesOutputs.map((d, dIdx) => (
                              <li key={dIdx} className="flex items-start gap-2">
                                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                                <span className="font-semibold text-slate-800">{d}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Strategic Decisions Supported */}
                      <div>
                        <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 mb-2 flex items-center gap-1.5">
                          <Target className="w-3.5 h-3.5 text-indigo-600" />
                          Strategic Decisions Supported
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
                          {cap.decisionsSupported.map((dec, decIdx) => (
                            <div key={decIdx} className="p-2.5 rounded-lg bg-blue-50/50 border border-blue-200/50 text-slate-800 font-medium leading-snug">
                              {dec}
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Associated Key Performance Indicators */}
                      <div>
                        <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 mb-2 flex items-center gap-1.5">
                          <BarChart3 className="w-3.5 h-3.5 text-blue-600" />
                          Key Performance Indicators (KPIs)
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {cap.kpis.map((kpi, kIdx) => (
                            <div key={kIdx} className="p-3 rounded-xl bg-slate-50 border border-slate-200/80">
                              <div className="flex items-center justify-between mb-1">
                                <span className="text-xs font-bold text-slate-900">{kpi.metric}</span>
                                <span className="text-[10px] font-mono text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-200/60 font-semibold">{kpi.unit}</span>
                              </div>
                              <p className="text-[11px] text-slate-600 leading-snug mb-1">{kpi.definition}</p>
                              <div className="text-[10px] text-slate-500 font-mono">Benchmark: {kpi.timeframe}</div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Dependencies & Limitations */}
                      <div className="p-3 rounded-xl bg-amber-50/60 border border-amber-200/70 text-xs text-amber-900 flex items-start gap-2.5">
                        <ShieldAlert className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                        <div>
                          <span className="font-bold">Dependencies, Assumptions & Scope Limitations:</span>
                          <ul className="list-disc list-inside mt-1 space-y-0.5 text-amber-800">
                            {cap.dependenciesLimitations.map((lim, lIdx) => (
                              <li key={lIdx}>{lim}</li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Related Capabilities Links */}
                      <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-100 text-xs">
                        <span className="font-mono text-slate-400 font-bold uppercase">Related Nodes:</span>
                        {cap.relatedCapabilities.map((rel, rIdx) => (
                          <Link
                            key={rIdx}
                            to={rel.path}
                            className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-slate-100 hover:bg-blue-50 text-slate-700 hover:text-blue-700 border border-slate-200 transition-colors font-medium"
                          >
                            <span>{rel.name}</span>
                            <ArrowRight className="w-3 h-3 text-slate-400" />
                          </Link>
                        ))}
                      </div>

                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── SECTION 04: HOW THE APPROACH WORKS (5-7 STEP WORKFLOW) ── */}
      <section id="methodology" className="py-14 sm:py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <span className="text-xs font-mono text-blue-600 uppercase tracking-widest font-bold">
              Operating Methodology
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1 mb-2 font-heading">
              How the {data.primaryNavLabel} Process Works
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              International scale is not achieved through speculative leaps. We execute a disciplined, sequential workflow with verifiable outputs and clear ownership at every gate:
            </p>
          </div>

          <div className="space-y-4">
            {data.workflowSteps.map((step, sIdx) => (
              <div
                key={step.stepNumber}
                className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200/90 shadow-xs grid grid-cols-1 lg:grid-cols-12 gap-4 items-start"
              >
                <div className="lg:col-span-3 flex items-start gap-3">
                  <span className="w-9 h-9 rounded-xl bg-blue-600 text-white font-mono font-bold flex items-center justify-center text-sm shrink-0 shadow-sm shadow-blue-600/30">
                    {step.stepNumber}
                  </span>
                  <div>
                    <h3 className="text-base font-bold text-slate-900 font-heading">
                      {step.title}
                    </h3>
                    <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider mt-0.5">
                      Owner: {step.owner}
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-5 space-y-2 text-xs text-slate-600">
                  <div>
                    <strong className="text-slate-900">Objective:</strong> {step.objective}
                  </div>
                  <div>
                    <strong className="text-slate-900">Key Activities:</strong>
                    <ul className="list-disc list-inside mt-0.5 space-y-0.5">
                      {step.activities.map((act, aIdx) => (
                        <li key={aIdx}>{act}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="lg:col-span-4 p-3 rounded-xl bg-slate-50 border border-slate-200/80 text-xs space-y-1.5">
                  <div>
                    <span className="font-mono text-[10px] uppercase font-bold text-emerald-700 block">Deliverable Output:</span>
                    <span className="font-bold text-slate-900">{step.output}</span>
                  </div>
                  <div className="pt-1.5 border-t border-slate-200 text-slate-600">
                    <span className="font-mono text-[10px] uppercase font-bold text-blue-700 block">Next Decision / Gate:</span>
                    <span>{step.nextDecision}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 05: BUSINESS IMPACT AND KPIS (4 CATEGORIES) ── */}
      <section id="kpis" className="py-14 sm:py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <span className="text-xs font-mono text-blue-600 uppercase tracking-widest font-bold">
              Accountability & Measurement
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1 mb-2 font-heading">
              Measurable Business Impact & Performance Indicators
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              Every international expansion initiative must establish measurable indicators across operational, commercial, risk, and automation dimensions. All figures are defined with explicit measurement requirements:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
            {data.kpis.map((kpi, kIdx) => (
              <div
                key={kIdx}
                className="rounded-2xl border border-slate-200 p-5 sm:p-6 bg-slate-50/60 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between pb-2.5 border-b border-slate-200 mb-3">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-blue-100 text-blue-800">
                      {kpi.category} KPI
                    </span>
                    <span className="text-xs font-mono text-slate-500 font-semibold">{kpi.unit}</span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 font-heading mb-1.5">
                    {kpi.metricName}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed mb-3">
                    {kpi.definition}
                  </p>

                  <div className="space-y-1.5 text-xs text-slate-600 p-3 rounded-xl bg-white border border-slate-200/80 mb-3">
                    <div><strong className="text-slate-800">Measurement Method:</strong> {kpi.howMeasured}</div>
                    <div><strong className="text-slate-800">Time Period:</strong> {kpi.timePeriod}</div>
                    <div><strong className="text-slate-800">Baseline Requirement:</strong> {kpi.baselineRequirement}</div>
                    <div><strong className="text-slate-800">Data Source:</strong> {kpi.dataSource}</div>
                  </div>
                </div>

                <div className="pt-2 text-[11px] text-slate-500 italic">
                  {kpi.interpretation}
                </div>
              </div>
            ))}
          </div>

          <div className="p-3 rounded-xl bg-slate-100 border border-slate-200 text-center text-[11px] font-mono text-slate-500">
            Note: All displayed metric benchmarks are Illustrative Examples — Not Actual ProfitMachines Internal Corporate Data. Actual metrics are locked upon client baseline audit.
          </div>
        </div>
      </section>

      {/* ── SECTION 06: FRAMEWORKS AND INTELLIGENCE (VISUAL MODELS) ── */}
      <section id="frameworks" className="py-14 sm:py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <span className="text-xs font-mono text-blue-600 uppercase tracking-widest font-bold">
              Structured Decision Models
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1 mb-2 font-heading">
              Domain Intelligence Frameworks
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              Strategic expansion requires visual models that deconstruct complex commercial dependencies into actionable decision trees and matrices:
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {data.frameworks.map((fw) => (
              <div
                key={fw.id}
                className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-4">
                    <div>
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-blue-600">
                        {fw.type.toUpperCase()} MODEL
                      </span>
                      <h3 className="text-lg font-bold text-slate-900 font-heading">
                        {fw.title}
                      </h3>
                    </div>
                    <Compass className="w-5 h-5 text-blue-600" />
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {fw.description}
                  </p>

                  <div className="space-y-2 mb-5">
                    {fw.components.map((comp, cIdx) => (
                      <div key={cIdx} className="p-3 rounded-xl bg-slate-50 border border-slate-200/70 text-xs">
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-bold text-slate-900">{comp.label}</span>
                          <span className="font-mono text-blue-600 font-bold">{comp.value}</span>
                        </div>
                        <div className="text-[11px] text-slate-600 leading-snug">{comp.details}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-blue-50 border border-blue-200 text-xs text-blue-900 font-medium">
                  <strong>Core Takeaway:</strong> {fw.keyTakeaway}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 07: USE CASES AND EXAMPLES (3-4 INDUSTRY SCENARIOS) ── */}
      <section id="use-cases" className="py-14 sm:py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <span className="text-xs font-mono text-blue-600 uppercase tracking-widest font-bold">
              Industry Scenarios
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1 mb-2 font-heading">
              Practical Enterprise Application Scenarios
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              Examine how distinct B2B industry verticals operationalize the capabilities of {data.primaryNavLabel}. Clearly labeled as illustrative enterprise scenarios:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {data.useCases.map((uc) => (
              <div
                key={uc.id}
                className="rounded-2xl border border-slate-200 p-5 sm:p-6 bg-slate-50/50 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between pb-2 border-b border-slate-200 mb-3">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2 py-0.5 rounded">
                      {uc.industry}
                    </span>
                    <Building2 className="w-4 h-4 text-slate-400" />
                  </div>

                  <h3 className="text-sm font-bold text-slate-900 font-heading mb-2 leading-snug">
                    {uc.businessContext}
                  </h3>

                  <div className="space-y-2.5 text-xs text-slate-600 leading-relaxed mb-4">
                    <div>
                      <strong className="text-slate-800">Business Challenge:</strong> {uc.challenge}
                    </div>
                    <div>
                      <strong className="text-slate-800">Capabilities Applied:</strong>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {uc.capabilitiesUsed.map((capName, cIdx) => (
                          <span key={cIdx} className="px-1.5 py-0.5 rounded bg-slate-200 text-slate-800 text-[10px] font-mono">
                            {capName}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <strong className="text-slate-800">Assessment Workflow:</strong> {uc.assessmentWorkflow}
                    </div>
                    <div>
                      <strong className="text-slate-800">Deliverable Output:</strong> {uc.potentialOutput}
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-200 space-y-1.5">
                  <div className="text-xs font-semibold text-slate-900">
                    Decision Supported: <span className="font-normal text-slate-600">{uc.decisionSupported}</span>
                  </div>
                  <div className="text-[11px] font-mono text-emerald-700 bg-emerald-50 p-2 rounded-lg border border-emerald-200/60">
                    {uc.evaluationMetrics.join(' · ')}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4 text-center text-[11px] font-mono text-slate-400">
            Illustrative Scenarios — Names and details are generalized for enterprise confidentiality.
          </div>
        </div>
      </section>

      {/* ── SECTION 08: TRUST AND EVIDENCE (SOURCES & CITATIONS) ── */}
      <section id="evidence" className="py-14 sm:py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-mono text-blue-600 uppercase tracking-widest font-bold">
              Evidence Standards & Sources
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1 mb-2 font-heading">
              Methodology Integrity and Authoritative Citations
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              Every factual assertion and regulatory standard in {data.primaryNavLabel} is grounded in verified authoritative bodies, official trade statistics, and established international commercial governance standards:
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-8">
            <div className="lg:col-span-6 bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-4">
              <h3 className="text-base font-bold text-slate-900 font-heading flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-blue-600" />
                Research Methodology & Quality Control
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {data.trustEvidence.methodology}
              </p>

              <div>
                <h4 className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                  Operating Assumptions
                </h4>
                <ul className="list-disc list-inside text-xs text-slate-600 space-y-1">
                  {data.trustEvidence.assumptions.map((assump, aIdx) => (
                    <li key={aIdx}>{assump}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                  Data Scope Limitations
                </h4>
                <ul className="list-disc list-inside text-xs text-slate-600 space-y-1">
                  {data.trustEvidence.evidenceLimitations.map((lim, lIdx) => (
                    <li key={lIdx}>{lim}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-3">
              <h3 className="text-sm font-mono font-bold uppercase tracking-wider text-slate-500 mb-2">
                Authoritative Primary Sources & Standards
              </h3>
              {data.trustEvidence.citations.map((cite, cIdx) => (
                <div key={cIdx} className="bg-white p-4 rounded-xl border border-slate-200/90 shadow-2xs">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-bold text-slate-900">{cite.sourceName}</span>
                    <span className="text-[10px] font-mono text-slate-400">{cite.publishedYear}</span>
                  </div>
                  <div className="text-[11px] text-blue-700 font-medium mb-1">{cite.organization}</div>
                  <div className="text-xs text-slate-600 mb-2">{cite.focusArea}</div>
                  <a
                    href={cite.linkOrRef}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[11px] font-mono font-bold text-blue-600 hover:text-blue-800"
                  >
                    <span>Inspect Source Standard</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 09: RELATED CAPABILITIES (CONNECTING TO OTHER 7 PAGES) ── */}
      <section className="py-14 sm:py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-mono text-blue-600 uppercase tracking-widest font-bold">
              Connected Architecture
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1 mb-2 font-heading">
              Explore Connected Expansion Capabilities
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              No expansion pillar operates in isolation. Discover how {data.primaryNavLabel} connects with adjacent capability areas:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {data.relatedPages.map((rel, rIdx) => (
              <Link
                key={rIdx}
                to={rel.path}
                className="p-5 rounded-2xl border border-slate-200 hover:border-blue-400 hover:shadow-md transition-all bg-slate-50/50 flex flex-col justify-between group cursor-pointer"
              >
                <div>
                  <div className="flex items-center justify-between text-xs font-mono font-bold text-blue-600 mb-2">
                    <span>Connected Area</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 font-heading mb-2">
                    {rel.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {rel.relationshipDescription}
                  </p>
                </div>
                <div className="text-xs font-bold text-blue-600 group-hover:underline inline-flex items-center gap-1">
                  <span>Explore Capability</span>
                  <ChevronRight className="w-3 h-3" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 10: FINAL CONVERSION SECTION (INTAKE FORM & WORKING CTA) ── */}
      <section id="consultation" className="py-16 sm:py-24 bg-slate-950 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6">
              <span className="text-xs font-mono text-blue-400 uppercase tracking-widest font-bold">
                Executive Consultation
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-1 mb-4 font-heading leading-tight">
                {data.conversionCta.headline}
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                {data.conversionCta.description}
              </p>

              <div className="space-y-3 mb-8">
                <div className="flex items-start gap-2.5 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Confidential review under mutual corporate non-disclosure agreement (NDA)</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Direct architectural guidance from senior international systems specialists</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>No speculative promises — strictly grounded in empirical market evidence</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Link
                  to="/book-consultation"
                  className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 active:bg-blue-700 text-white font-bold text-sm transition-all shadow-lg shadow-blue-600/30 inline-flex items-center gap-2 group cursor-pointer"
                >
                  <span>Book Formal Strategic Consultation</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Embedded Live Consultation Intake Form */}
            <div className="lg:col-span-6">
              <GlobalExpansionIntakeForm
                pageContext={`${data.primaryNavLabel} (${data.contentHeading})`}
                defaultChallenge={`${data.primaryNavLabel} strategic feasibility and execution planning`}
                buttonText={data.conversionCta.primaryButtonText}
              />
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

export default GlobalAccelerationPageTemplate;

