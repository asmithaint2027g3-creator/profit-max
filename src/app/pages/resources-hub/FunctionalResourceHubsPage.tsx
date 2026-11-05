import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Target,
  TrendingUp,
  Users,
  Activity,
  DollarSign,
  Layers,
  Compass,
  Scale,
  Server,
  ShieldCheck,
  ArrowRight,
  CheckCircle2,
  AlertTriangle,
  BrainCircuit,
  Zap,
  BarChart3,
  ArrowUpRight,
  Calculator,
  ChevronRight,
  Sparkles,
  GitBranch,
  Sliders,
  Workflow,
  Cpu
} from 'lucide-react';
import {
  FUNCTIONAL_RESOURCE_HUBS_DATA,
  FUNCTIONAL_VALUE_AREAS,
  CROSS_FUNCTIONAL_COLLABORATION_MATRIX,
  FunctionalHubItem
} from '../../../data/functionalResourceHubsData';
import { trackEvent } from '../../../lib/analytics';

export default function FunctionalResourceHubsPage() {
  const location = useLocation();
  const [activeSectionId, setActiveSectionId] = useState<string>(FUNCTIONAL_RESOURCE_HUBS_DATA[0].slug);
  const [activeSubTab, setActiveSubTab] = useState<{ [key: string]: 'challenges' | 'frameworks' | 'kpis' | 'ai' | 'scenarios' }>({});

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Functional Resource Hubs | ProfitMachines Commercial Intelligence';
    trackEvent({ eventName: 'PAGE_VIEW_FUNCTIONAL_RESOURCE_HUBS', category: 'NAVIGATION' });

    // Handle hash scroll smoothly if arriving via direct anchor URL
    if (location.hash) {
      const targetId = location.hash.replace('#', '');
      setActiveSectionId(targetId);
      const element = document.getElementById(targetId);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 150);
      }
    }
  }, [location]);

  const scrollToAnchor = (id: string) => {
    setActiveSectionId(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const setTabForHub = (hubId: string, tab: 'challenges' | 'frameworks' | 'kpis' | 'ai' | 'scenarios') => {
    setActiveSubTab(prev => ({ ...prev, [hubId]: tab }));
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 overflow-x-hidden selection:bg-blue-600 selection:text-white">

      {/* ── 1. MAIN HERO SECTION ── */}
      <section className="relative pt-32 pb-20 lg:pt-36 lg:pb-24 bg-gradient-to-b from-slate-950 via-slate-900 to-blue-950 text-white overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-0 right-1/4 w-[650px] h-[650px] bg-blue-600/15 rounded-full blur-[160px] pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            {/* Left Column: Eyebrow, Headlines & Dual CTAs */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/15 border border-blue-400/30 text-blue-300 font-mono text-xs font-bold tracking-widest uppercase">
                <Workflow className="w-3.5 h-3.5 text-blue-400" />
                Functional Revenue Intelligence
              </div>

              <div className="space-y-3">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.15] font-heading">
                  Transform Every Revenue Function <br />
                  <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-sky-300 bg-clip-text text-transparent">
                    Into a Growth Engine.
                  </span>
                </h1>
                <p className="text-base sm:text-lg font-bold text-slate-300 font-heading">
                  Explore the commercial disciplines that drive acquisition, retention, monetization and profitability.
                </p>
              </div>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl">
                Discover empirical frameworks, mathematical models, AI automation applications, and practical resources engineered to help CEOs, CROs, CMOs, and CFOs eliminate commercial friction and accelerate organizational growth.
              </p>

              {/* Dual CTAs */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <button
                  onClick={() => scrollToAnchor('functional-navigation-grid')}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm transition-all shadow-lg shadow-blue-600/30 active:scale-98 cursor-pointer"
                >
                  <span>Explore Functional Hubs</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <Link
                  to="/offerings"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-bold text-sm border border-white/20 transition-all active:scale-98"
                >
                  <span>Explore Revenue Capabilities</span>
                  <ArrowUpRight className="w-4 h-4 text-slate-300" />
                </Link>
              </div>

              {/* Value Signals */}
              <div className="pt-4 flex flex-wrap items-center gap-6 text-xs text-slate-300 border-t border-slate-800/80">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>10 Core Commercial Disciplines</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-400" />
                  <span>Deterministic Unit Economics</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-indigo-400" />
                  <span>Zero GTM Data Silos</span>
                </div>
              </div>
            </div>

            {/* Right Column: Connected Revenue Operating Architecture Visual (SVG Diagram) */}
            <div className="lg:col-span-5">
              <div className="p-6 rounded-3xl bg-slate-900/90 border border-slate-800 shadow-2xl backdrop-blur-md space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-blue-400">
                    Unified Commercial Engine Flow
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-bold">
                    Connected Telemetry
                  </span>
                </div>

                {/* SVG Visual Flow Blueprint */}
                <div className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800 flex flex-col items-center justify-center space-y-3">
                  <svg className="w-full h-48" viewBox="0 0 400 180" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* Background Connection Lines */}
                    <path d="M 60 40 L 200 40 L 340 40" stroke="#3b82f6" strokeWidth="2" strokeDasharray="4 4" opacity="0.6" />
                    <path d="M 60 90 L 200 90 L 340 90" stroke="#10b981" strokeWidth="2" opacity="0.7" />
                    <path d="M 60 140 L 200 140 L 340 140" stroke="#6366f1" strokeWidth="2" strokeDasharray="4 4" opacity="0.6" />
                    <path d="M 200 20 L 200 160" stroke="#3b82f6" strokeWidth="1.5" opacity="0.4" />

                    {/* Nodes */}
                    {/* Node 1: Demand */}
                    <rect x="20" y="25" width="80" height="30" rx="6" fill="#1e293b" stroke="#3b82f6" strokeWidth="1.5" />
                    <text x="60" y="44" fill="#93c5fd" fontSize="10" fontWeight="bold" textAnchor="middle">Marketing & Intent</text>

                    {/* Node 2: RevOps Hub */}
                    <rect x="155" y="25" width="90" height="30" rx="6" fill="#1e293b" stroke="#38bdf8" strokeWidth="1.5" />
                    <text x="200" y="44" fill="#bae6fd" fontSize="10" fontWeight="bold" textAnchor="middle">RevOps Telemetry</text>

                    {/* Node 3: CFO Office */}
                    <rect x="300" y="25" width="80" height="30" rx="6" fill="#1e293b" stroke="#a855f7" strokeWidth="1.5" />
                    <text x="340" y="44" fill="#e9d5ff" fontSize="10" fontWeight="bold" textAnchor="middle">CFO Economics</text>

                    {/* Center Core Node */}
                    <rect x="140" y="72" width="120" height="36" rx="8" fill="#1d4ed8" stroke="#60a5fa" strokeWidth="2" />
                    <text x="200" y="94" fill="#ffffff" fontSize="11" fontWeight="900" textAnchor="middle">PROFITMACHINES</text>

                    {/* Node 4: Direct Sales */}
                    <rect x="20" y="75" width="80" height="30" rx="6" fill="#1e293b" stroke="#10b981" strokeWidth="1.5" />
                    <text x="60" y="94" fill="#a7f3d0" fontSize="10" fontWeight="bold" textAnchor="middle">Direct Sales</text>

                    {/* Node 5: Success & NRR */}
                    <rect x="300" y="75" width="80" height="30" rx="6" fill="#1e293b" stroke="#10b981" strokeWidth="1.5" />
                    <text x="340" y="94" fill="#a7f3d0" fontSize="10" fontWeight="bold" textAnchor="middle">Customer NRR</text>

                    {/* Node 6: Partnerships */}
                    <rect x="20" y="125" width="80" height="30" rx="6" fill="#1e293b" stroke="#f59e0b" strokeWidth="1.5" />
                    <text x="60" y="144" fill="#fde68a" fontSize="10" fontWeight="bold" textAnchor="middle">Ecosystem GTM</text>

                    {/* Node 7: Pricing */}
                    <rect x="155" y="125" width="90" height="30" rx="6" fill="#1e293b" stroke="#ec4899" strokeWidth="1.5" />
                    <text x="200" y="144" fill="#fbcfe8" fontSize="10" fontWeight="bold" textAnchor="middle">Monetization</text>

                    {/* Node 8: AI Governance */}
                    <rect x="300" y="125" width="80" height="30" rx="6" fill="#1e293b" stroke="#3b82f6" strokeWidth="1.5" />
                    <text x="340" y="144" fill="#bfdbfe" fontSize="10" fontWeight="bold" textAnchor="middle">AI Governance</text>
                  </svg>
                  <p className="text-[11px] text-slate-400 text-center font-mono">
                    Deterministic Revenue Loop: Signal → Qualification → Closed-Won → Retention → Profitability
                  </p>
                </div>

                <div className="pt-1">
                  <button
                    onClick={() => scrollToAnchor('functional-cross-matrix')}
                    className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-blue-600/20 hover:bg-blue-600/30 text-blue-300 text-xs font-bold border border-blue-500/30 transition-colors cursor-pointer"
                  >
                    <span>View Cross-Functional Collaboration Matrix</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── 2. FUNCTIONAL INTELLIGENCE INTRODUCTION (4 VALUE AREAS) ── */}
      <section className="py-16 bg-slate-50 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-2">
            <span className="text-xs font-mono font-extrabold text-blue-600 uppercase tracking-widest">
              Organizational Revenue Architecture
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading tracking-tight">
              One Revenue Ecosystem. Ten Critical Business Functions.
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Disconnected departments, fragmented CRM data, and broken handoffs create revenue leakage. ProfitMachines connects every commercial function into an orchestrated, measurable growth system.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {FUNCTIONAL_VALUE_AREAS.map((area, idx) => {
              const IconComp = area.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:border-blue-400 hover:shadow-md transition-all duration-200 flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200/80 text-blue-600 flex items-center justify-center">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-slate-900 font-heading">
                      {area.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {area.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 3. EXPLORE ALL 10 FUNCTIONAL HUBS (INTERACTIVE GRID) ── */}
      <section id="functional-navigation-grid" className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-mono font-extrabold text-blue-600 uppercase tracking-widest">
                Functional Navigation
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading tracking-tight mt-1">
                Explore All 10 Functional Hubs
              </h2>
            </div>
            <p className="text-slate-500 text-xs sm:text-sm max-w-md">
              Select any commercial function below to jump directly to its detailed operational intelligence and frameworks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {FUNCTIONAL_RESOURCE_HUBS_DATA.map((hub) => {
              const HubIcon = hub.icon;
              const isSelected = activeSectionId === hub.slug;
              return (
                <div
                  key={hub.id}
                  onClick={() => scrollToAnchor(hub.slug)}
                  className={`p-5 rounded-2xl border transition-all duration-200 flex flex-col justify-between cursor-pointer group ${
                    isSelected
                      ? 'bg-blue-50/60 border-blue-500 shadow-sm ring-1 ring-blue-500/30'
                      : 'bg-slate-50/70 hover:bg-white border-slate-200/90 hover:border-blue-400 hover:shadow-md'
                  }`}
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-white border border-slate-200 text-slate-600">
                        Hub {hub.number}
                      </span>
                      <HubIcon className="w-4 h-4 text-blue-600 group-hover:scale-110 transition-transform" />
                    </div>
                    <div>
                      <h3 className="text-xs font-bold text-slate-900 font-heading group-hover:text-blue-600 transition-colors line-clamp-2">
                        {hub.title}
                      </h3>
                      <p className="text-[11px] text-slate-500 mt-1 line-clamp-2 leading-relaxed">
                        {hub.tagline}
                      </p>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-200/60 mt-3 flex items-center justify-between text-xs font-bold text-blue-600">
                    <span>Explore Function</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 4. TEN COMPREHENSIVE FUNCTIONAL HUBS (WORKBENCH ARCHITECTURE) ── */}
      <div className="space-y-24 py-16">
        {FUNCTIONAL_RESOURCE_HUBS_DATA.map((hub) => {
          const HubIcon = hub.icon;
          const currentTab = activeSubTab[hub.id] || 'challenges';

          return (
            <section
              key={hub.id}
              id={hub.slug}
              className="scroll-mt-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
            >
              <div className="rounded-3xl bg-white border border-slate-200/90 shadow-sm overflow-hidden">

                {/* ── Functional Section Header ── */}
                <div className="p-6 sm:p-8 bg-slate-50/90 border-b border-slate-200/90">
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                    <div className="space-y-2 max-w-3xl">
                      <div className="flex items-center gap-2.5">
                        <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center shrink-0 shadow-xs">
                          <HubIcon className="w-5 h-5" />
                        </div>
                        <div>
                          <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-blue-600">
                            Functional Hub {hub.number}
                          </span>
                          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading tracking-tight">
                            {hub.title}
                          </h2>
                        </div>
                      </div>
                      <p className="text-sm sm:text-base font-bold text-slate-700 font-heading">
                        {hub.tagline}
                      </p>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {hub.overview}
                      </p>
                    </div>

                    <div className="shrink-0 space-y-2">
                      <Link
                        to="/book-consultation"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs transition-colors shadow-xs"
                      >
                        <span>Schedule {hub.title.split('&')[0]} Advisory</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                      <p className="text-[10px] font-mono text-slate-400 text-right">
                        Executive Consultation
                      </p>
                    </div>
                  </div>

                  {/* Core Executive Priorities Pills */}
                  <div className="mt-6 pt-5 border-t border-slate-200/80 flex flex-wrap items-center gap-2">
                    <span className="text-[11px] font-mono font-bold text-slate-500 uppercase shrink-0">
                      Executive Priorities:
                    </span>
                    {hub.executiveFocus.map((focus, fIdx) => (
                      <span
                        key={fIdx}
                        className="text-xs px-3 py-1 rounded-full bg-white border border-slate-200 text-slate-700 font-medium shadow-2xs"
                      >
                        {focus}
                      </span>
                    ))}
                  </div>
                </div>

                {/* ── Interactive Functional Workbench Canvas ── */}
                <div className="p-6 sm:p-8 space-y-8">

                  {/* Sub-Tabs Navigation for Workbench View */}
                  <div className="flex items-center gap-2 overflow-x-auto no-scrollbar border-b border-slate-200 pb-3">
                    <span className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider shrink-0 mr-2">
                      View Intelligence:
                    </span>
                    {[
                      { key: 'challenges', label: 'Root Cause & Revenue Opportunities', count: hub.challenges.length },
                      { key: 'frameworks', label: 'Empirical Frameworks & Models', count: hub.frameworks.length },
                      { key: 'kpis', label: 'KPIs & Benchmarks', count: hub.kpis.length },
                      { key: 'ai', label: 'AI Automation & Real Scenarios', count: hub.aiWorkflows.length + hub.scenarios.length },
                      { key: 'scenarios', label: 'Tools & Diagnostics', count: hub.tools.length }
                    ].map((tab) => (
                      <button
                        key={tab.key}
                        onClick={() => setTabForHub(hub.id, tab.key as any)}
                        className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                          currentTab === tab.key
                            ? 'bg-blue-600 text-white shadow-xs'
                            : 'bg-slate-100 hover:bg-slate-200/80 text-slate-700'
                        }`}
                      >
                        <span>{tab.label}</span>
                        <span className={`text-[10px] px-1.5 py-0.2 rounded font-mono ${
                          currentTab === tab.key ? 'bg-blue-800 text-blue-200' : 'bg-slate-200 text-slate-600'
                        }`}>
                          {tab.count}
                        </span>
                      </button>
                    ))}
                  </div>

                  {/* Tab 1: Challenges, Root Causes & Revenue Opportunities */}
                  {currentTab === 'challenges' && (
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <h3 className="text-base font-extrabold text-slate-900 font-heading">
                          Functional Challenges & Root Cause Resolution
                        </h3>
                        <span className="text-xs text-slate-500 font-mono">
                          Challenge → Root Cause → Opportunity → ProfitMachines Engine → Target KPI
                        </span>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {hub.challenges.map((chal, cIdx) => (
                          <div
                            key={cIdx}
                            className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:border-slate-300 transition-colors space-y-3"
                          >
                            <div className="flex items-center justify-between">
                              <h4 className="text-xs font-bold text-slate-900 font-heading">
                                {chal.title}
                              </h4>
                              <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-rose-50 text-rose-700 border border-rose-100 font-bold uppercase">
                                Friction Point
                              </span>
                            </div>

                            <div className="space-y-2 text-xs">
                              <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/70">
                                <span className="font-bold text-slate-800 block text-[11px] mb-0.5">Root Cause:</span>
                                <p className="text-slate-600 text-[11px] leading-relaxed">{chal.rootCause}</p>
                              </div>

                              <div className="flex items-start gap-1.5 text-[11px]">
                                <span className="font-bold text-rose-700 shrink-0">Business Impact:</span>
                                <span className="text-slate-700">{chal.businessImpact}</span>
                              </div>

                              <div className="p-2.5 rounded-xl bg-emerald-50/50 border border-emerald-100/80 space-y-1">
                                <div className="flex items-center justify-between text-[11px]">
                                  <span className="font-bold text-emerald-900">Revenue Opportunity:</span>
                                  <span className="font-mono text-[9px] font-bold text-emerald-700 uppercase bg-white px-1.5 py-0.2 rounded border border-emerald-200">
                                    {chal.profitMachinesEngine}
                                  </span>
                                </div>
                                <p className="text-emerald-800 text-[11px]">{chal.opportunity}</p>
                              </div>

                              <div className="pt-1 flex items-center justify-between text-[11px] font-mono text-slate-500 border-t border-slate-100">
                                <span>Target KPI to Measure:</span>
                                <span className="font-bold text-blue-600">{chal.kpiToMeasure}</span>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Tab 2: Empirical Frameworks & Mathematical Models */}
                  {currentTab === 'frameworks' && (
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <h3 className="text-base font-extrabold text-slate-900 font-heading">
                          Functional Frameworks & Mathematical Models
                        </h3>
                        <span className="text-xs text-slate-500 font-mono">
                          Verified Growth Formulations
                        </span>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {hub.frameworks.map((frm, fIdx) => (
                          <div
                            key={fIdx}
                            className="p-6 rounded-2xl bg-slate-50/70 border border-slate-200/90 space-y-4"
                          >
                            <div>
                              <h4 className="text-sm font-bold text-slate-900 font-heading">
                                {frm.name}
                              </h4>
                              <p className="text-xs text-slate-600 mt-1">
                                <span className="font-bold text-slate-800">Business Purpose:</span> {frm.purpose}
                              </p>
                            </div>

                            {frm.formula && (
                              <div className="p-3 rounded-xl bg-white border border-blue-200/80 font-mono text-xs text-blue-700 font-bold shadow-2xs">
                                {frm.formula}
                              </div>
                            )}

                            <div className="space-y-2">
                              <span className="text-[10px] font-mono font-bold uppercase text-slate-500 block">
                                When to Use:
                              </span>
                              <p className="text-xs text-slate-700 font-medium">{frm.whenToUse}</p>
                            </div>

                            <div className="space-y-1.5 pt-2 border-t border-slate-200/70">
                              <span className="text-[10px] font-mono font-bold uppercase text-slate-500 block">
                                Core Execution Stages:
                              </span>
                              {frm.steps.map((st, sIdx) => (
                                <div key={sIdx} className="flex items-start gap-2 text-xs text-slate-700">
                                  <span className="w-4 h-4 rounded-full bg-blue-100 text-blue-700 font-mono text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                                    {sIdx + 1}
                                  </span>
                                  <span className="leading-snug">{st}</span>
                                </div>
                              ))}
                            </div>

                            <div className="pt-2 flex flex-wrap items-center gap-1.5">
                              <span className="text-[10px] font-mono font-bold uppercase text-slate-400">Relevant KPIs:</span>
                              {frm.kpis.map((kp, kIdx) => (
                                <span key={kIdx} className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-50 text-blue-700 border border-blue-100">
                                  {kp}
                                </span>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Tab 3: KPIs & Benchmarks */}
                  {currentTab === 'kpis' && (
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <h3 className="text-base font-extrabold text-slate-900 font-heading">
                          Functional Analytics, KPIs & Benchmarks
                        </h3>
                        <span className="text-xs text-slate-500 font-mono">
                          Verified Industry Standards
                        </span>
                      </div>

                      <div className="overflow-x-auto rounded-2xl border border-slate-200/90 shadow-2xs">
                        <table className="w-full text-left text-xs">
                          <thead className="bg-slate-50 border-b border-slate-200 text-slate-600 font-mono font-bold text-[10px] uppercase">
                            <tr>
                              <th className="p-3.5">Metric & Definition</th>
                              <th className="p-3.5">Formula</th>
                              <th className="p-3.5">Baseline Benchmark</th>
                              <th className="p-3.5">ProfitMachines Target</th>
                              <th className="p-3.5">Cadence</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-slate-100 font-medium">
                            {hub.kpis.map((kpi, kIdx) => (
                              <tr key={kIdx} className="hover:bg-slate-50/60">
                                <td className="p-3.5">
                                  <span className="font-bold text-slate-900 block">{kpi.name}</span>
                                  <span className="text-[11px] text-slate-500">{kpi.definition}</span>
                                </td>
                                <td className="p-3.5 font-mono text-[10px] text-blue-700">
                                  {kpi.formula || 'Empirical Aggregate'}
                                </td>
                                <td className="p-3.5 font-mono text-slate-500">{kpi.benchmark}</td>
                                <td className="p-3.5 font-mono font-bold text-emerald-600">{kpi.target}</td>
                                <td className="p-3.5 text-slate-600">{kpi.cadence}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  )}

                  {/* Tab 4: AI Automation & Real Scenarios */}
                  {currentTab === 'ai' && (
                    <div className="space-y-6">
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <h3 className="text-base font-extrabold text-slate-900 font-heading">
                            AI & Automation Intelligence Applications
                          </h3>
                          <span className="text-xs text-slate-500 font-mono">
                            Deterministic vs Autonomous Workflows
                          </span>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {hub.aiWorkflows.map((ai, aIdx) => (
                            <div key={aIdx} className="p-4 rounded-xl bg-purple-50/20 border border-purple-100 space-y-2">
                              <div className="flex items-center justify-between">
                                <h4 className="text-xs font-bold text-slate-900 font-heading">
                                  {ai.title}
                                </h4>
                                <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-purple-100 text-purple-700 font-bold uppercase">
                                  {ai.type}
                                </span>
                              </div>
                              <p className="text-[11px] text-slate-600 leading-relaxed">
                                {ai.description}
                              </p>
                              <div className="pt-2 border-t border-purple-100/60 flex items-start gap-1.5 text-[10px] text-purple-900">
                                <span className="font-bold shrink-0">Human Oversight:</span>
                                <span>{ai.humanOversight}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Real Business Scenario Cards */}
                      <div className="space-y-3 pt-4 border-t border-slate-200">
                        <div className="flex items-center justify-between">
                          <h4 className="text-sm font-extrabold text-slate-900 font-heading">
                            Practical Business Use Case Scenario
                          </h4>
                          <span className="text-xs text-amber-600 font-mono font-bold">
                            Audited Commercial Execution
                          </span>
                        </div>

                        {hub.scenarios.map((sc, sIdx) => (
                          <div key={sIdx} className="p-5 rounded-2xl bg-slate-900 text-white space-y-4 shadow-sm">
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-3">
                              <div>
                                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-amber-400">
                                  Illustrative Enterprise Scenario
                                </span>
                                <h5 className="text-sm font-bold text-white font-heading mt-0.5">
                                  {sc.title}
                                </h5>
                              </div>
                              <span className="text-xs font-mono px-2.5 py-1 rounded bg-slate-800 text-slate-300 font-semibold shrink-0">
                                {sc.businessContext}
                              </span>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                              <div className="space-y-1">
                                <span className="font-bold text-rose-300">Challenge & Root Cause:</span>
                                <p className="text-slate-300 leading-relaxed">{sc.problem} {sc.rootCause}</p>
                              </div>
                              <div className="space-y-1">
                                <span className="font-bold text-blue-300">ProfitMachines Solution:</span>
                                <p className="text-slate-300 leading-relaxed">{sc.recommendedApproach}</p>
                              </div>
                            </div>

                            <div className="pt-3 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4 text-xs">
                              <div className="flex items-center gap-2">
                                <span className="text-slate-400">Verified Capability:</span>
                                <span className="font-mono text-blue-300 font-bold">{sc.profitMachinesCapability}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <span className="text-slate-400">Expected Outcome:</span>
                                <span className="font-mono text-emerald-300 font-bold">{sc.expectedOutcome}</span>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Tab 5: Tools & Resources */}
                  {currentTab === 'scenarios' && (
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <h3 className="text-base font-extrabold text-slate-900 font-heading">
                          Functional Tools, Templates & Resources
                        </h3>
                        <span className="text-xs text-slate-500 font-mono">
                          Ready-to-Deploy Assets
                        </span>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {hub.tools.map((tl, tIdx) => (
                          <div key={tIdx} className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs space-y-3 flex flex-col justify-between">
                            <div className="space-y-2">
                              <div className="flex items-center justify-between">
                                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-50 text-blue-700 font-bold uppercase">
                                  {tl.status}
                                </span>
                                <Calculator className="w-4 h-4 text-slate-400" />
                              </div>
                              <h4 className="text-xs font-bold text-slate-900 font-heading">
                                {tl.name}
                              </h4>
                              <p className="text-[11px] text-slate-600 leading-relaxed">
                                {tl.description}
                              </p>
                            </div>

                            <div className="pt-2 border-t border-slate-100">
                              <Link
                                to={tl.actionUrl}
                                className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-700"
                              >
                                <span>Launch Assessment</span>
                                <ArrowRight className="w-3.5 h-3.5" />
                              </Link>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Section Footer: Related Functional Hubs & Advisory CTA */}
                  <div className="pt-6 border-t border-slate-100 flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-xs font-bold text-slate-700">Related Hubs:</span>
                      {hub.relatedHubs.map((rel, rIdx) => (
                        <button
                          key={rIdx}
                          onClick={() => scrollToAnchor(rel.slug)}
                          className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-medium transition-colors cursor-pointer"
                        >
                          <span>{rel.name}</span>
                          <ArrowRight className="w-3 h-3 text-slate-400" />
                        </button>
                      ))}
                    </div>

                    <div className="shrink-0 flex items-center gap-3">
                      <Link
                        to="/book-consultation"
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold transition-all shadow-xs"
                      >
                        <span>Schedule {hub.title.split('&')[0]} Session</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>

                </div>

              </div>
            </section>
          );
        })}
      </div>

      {/* ── 5. CROSS-FUNCTIONAL REVENUE INTELLIGENCE SECTION ── */}
      <section id="functional-cross-matrix" className="py-20 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <span className="text-xs font-mono font-extrabold text-blue-600 uppercase tracking-widest">
              Inter-Functional Governance
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading tracking-tight">
              One Connected Revenue System. Ten Functional Growth Engines.
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Revenue leakage occurs at departmental handoffs. Explore the critical interface points, failure risks, and ProfitMachines system interventions across all ten commercial functions.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl bg-white border border-slate-200/90 shadow-sm">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-900 text-white font-mono text-[11px] uppercase tracking-wider">
                <tr>
                  <th className="p-4">Primary Function</th>
                  <th className="p-4">Collaborating Function</th>
                  <th className="p-4">Interface Handoff</th>
                  <th className="p-4">Silo Failure Risk</th>
                  <th className="p-4">ProfitMachines Intervention</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-medium text-slate-700">
                {CROSS_FUNCTIONAL_COLLABORATION_MATRIX.map((row, rIdx) => (
                  <tr key={rIdx} className="hover:bg-slate-50/80 transition-colors">
                    <td className="p-4 font-bold text-slate-900 whitespace-nowrap">{row.primaryFunction}</td>
                    <td className="p-4 font-bold text-blue-600 whitespace-nowrap">{row.collaboratingFunction}</td>
                    <td className="p-4 font-mono text-slate-800">{row.interfacePoint}</td>
                    <td className="p-4 text-rose-600 font-medium">{row.failureRisk}</td>
                    <td className="p-4 text-emerald-700 font-bold">{row.profitMachinesIntervention}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── 6. PROFITMACHINES REVENUE TRANSFORMATION CAPABILITIES (8 ENGINES) ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <span className="text-xs font-mono font-extrabold text-blue-600 uppercase tracking-widest">
              Platform Architecture
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading tracking-tight">
              ProfitMachines Revenue Transformation Architecture
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              The Functional Resource Hubs map directly to ProfitMachines 8 approved revenue transformation engines.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Profit Pool Discovery', path: '/offerings#profit-pool-discovery', desc: 'Deconstruct unit economics and uncover hidden margin leakages across your commercial operations.' },
              { title: 'Demand Engineering', path: '/offerings#demand-engineering', desc: 'Harvest dark-funnel intent surges and orchestrate multi-touch buyer capture.' },
              { title: 'Sales Acceleration', path: '/offerings#sales-acceleration', desc: 'Multi-threaded consensus rooms that de-risk enterprise deals and accelerate sales cycle velocity.' },
              { title: 'Revenue Operations', path: '/offerings#revenue-operations', desc: 'Unified commercial telemetry, deterministic forecast accuracy, and cross-functional SLA enforcement.' },
              { title: 'GTM Transformation', path: '/offerings#gtm-transformation', desc: 'Shift commercial teams from commoditized discounting to high-margin recurring advisory models.' },
              { title: 'Customer Success Engine', path: '/offerings#customer-success-engine', desc: 'Proactive consumption telemetry to defend renewals and unlock automated account expansion.' },
              { title: 'Growth Intelligence', path: '/offerings#growth-intelligence', desc: 'Empirical data science models predicting close propensity and customer lifetime value.' },
              { title: 'AI Trust & Governance', path: '/offerings#ai-trust-governance', desc: 'Deterministic compliance guardrails ensuring zero model drift and strict regulatory adherence.' }
            ].map((offering, oIdx) => (
              <Link
                key={oIdx}
                to={offering.path}
                className="group p-5 rounded-2xl bg-slate-50/60 hover:bg-white border border-slate-200/80 hover:border-blue-500 hover:shadow-md transition-all duration-200 flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono font-bold text-blue-600 uppercase">Engine 0{oIdx + 1}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-blue-600 transition-colors" />
                  </div>
                  <h3 className="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors font-heading">
                    {offering.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {offering.desc}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. FINAL CONVERSION SECTION ── */}
      <section className="py-20 bg-gradient-to-b from-slate-900 via-blue-950 to-slate-950 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-blue-600/15 via-transparent to-transparent pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-mono font-bold uppercase tracking-wider">
            <Zap className="w-3.5 h-3.5 text-blue-400" />
            Executive Revenue Engineering
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-heading tracking-tight">
            Connect Your Business Functions. Accelerate Revenue Performance.
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            Discover how ProfitMachines can help identify commercial opportunities, improve revenue processes and connect AI-native intelligence with business execution.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/book-consultation"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm transition-all shadow-lg shadow-blue-600/30 active:scale-98"
            >
              <span>Book an Executive Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/offerings"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white/10 hover:bg-white/15 text-white font-bold text-sm border border-white/20 transition-all active:scale-98"
            >
              <span>Explore ProfitMachines Offerings</span>
              <ArrowUpRight className="w-4 h-4 text-slate-300" />
            </Link>
          </div>

          <div className="pt-8 flex flex-wrap items-center justify-center gap-8 text-xs text-slate-400 font-mono">
            <span>Direct Mutual NDA Protection</span>
            <span>•</span>
            <span>Deterministic Commercial Outcomes</span>
            <span>•</span>
            <span>No Long-Term Lock-In</span>
          </div>
        </div>
      </section>

    </div>
  );
}
