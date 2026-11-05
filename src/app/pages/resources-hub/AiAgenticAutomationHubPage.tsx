import React, { useEffect, useState, useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  BrainCircuit,
  Bot,
  Zap,
  Workflow,
  Layers,
  ShieldCheck,
  Shield,
  Sliders,
  ChevronRight,
  ArrowRight,
  Activity,
  CheckCircle2,
  AlertTriangle,
  Sparkles,
  Search,
  Check,
  Cpu,
  Clock,
  Terminal,
  Compass,
  Scale,
  RefreshCw,
  TrendingUp,
  FileText,
  Lock,
  Network,
  Users
} from 'lucide-react';
import {
  AI_AGENTIC_SECTIONS,
  AGENTIC_MATURITY_STAGES,
  ENTERPRISE_CHALLENGES,
  AiAgenticSection
} from '../../../data/aiAgenticAutomationHubData';
import { trackEvent } from '../../../lib/analytics';

// 8 Submenu Anchors matching the Mega-Menu exactly
const NAV_ANCHORS = [
  { id: 'ai-use-cases', label: '01. AI Use Cases', number: '01' },
  { id: 'ai-agents', label: '02. AI Agents', number: '02' },
  { id: 'autonomous-agents', label: '03. Autonomous Agents', number: '03' },
  { id: 'agent-architectures', label: '04. Architectures', number: '04' },
  { id: 'multi-agent-systems', label: '05. Multi-Agent Systems', number: '05' },
  { id: 'ai-governance', label: '06. AI Governance', number: '06' },
  { id: 'ai-security', label: '07. AI Security', number: '07' },
  { id: 'agentic-operating-models', label: '08. Operating Models', number: '08' }
];

export default function AiAgenticAutomationHubPage() {
  const location = useLocation();
  const [activeAnchor, setActiveAnchor] = useState<string>('ai-use-cases');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedMaturityIdx, setSelectedMaturityIdx] = useState<number>(3); // Level 4 Autonomous default
  const [selectedArchitecturePattern, setSelectedArchitecturePattern] = useState<'single' | 'planner-executor' | 'hierarchical' | 'multi-agent'>('hierarchical');
  const [selectedUseCaseFilter, setSelectedUseCaseFilter] = useState<string>('all');
  const [expandedLedgerSection, setExpandedLedgerSection] = useState<string | null>(null);

  // Smooth scroll handler
  const scrollTo = (id: string) => {
    setActiveAnchor(id);
    const el = document.getElementById(id) || document.querySelector(`[data-section-id="${id}"]`);
    if (el) {
      const navOffset = 95;
      const elementPosition = el.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = Math.max(0, elementPosition - navOffset);
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    document.title = 'AI & Agentic Automation Hub | ProfitMachines Enterprise Architecture';
    trackEvent({ eventName: 'PAGE_VIEW_AI_AGENTIC_HUB', category: 'NAVIGATION' });

    if (location.hash) {
      const targetId = location.hash.replace('#', '');
      setActiveAnchor(targetId);
      setTimeout(() => {
        const el = document.getElementById(targetId) || document.querySelector(`[data-section-id="${targetId}"]`);
        if (el) {
          const navOffset = 95;
          const elementPosition = el.getBoundingClientRect().top + window.pageYOffset;
          window.scrollTo({ top: Math.max(0, elementPosition - navOffset), behavior: 'smooth' });
        }
      }, 150);
    } else {
      window.scrollTo(0, 0);
    }
  }, [location.hash]);

  // Filtered sections by search
  const filteredSections = useMemo(() => {
    if (!searchQuery.trim()) return AI_AGENTIC_SECTIONS;
    const q = searchQuery.toLowerCase();
    return AI_AGENTIC_SECTIONS.filter(sec =>
      sec.title.toLowerCase().includes(q) ||
      sec.subtitle.toLowerCase().includes(q) ||
      sec.intro.toLowerCase().includes(q) ||
      sec.enterpriseApplications.some(app => app.useCase.toLowerCase().includes(q) || app.description.toLowerCase().includes(q))
    );
  }, [searchQuery]);

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-600 selection:text-white">
      
      {/* ── BREADCRUMB NAVIGATION ── */}
      <div className="bg-white/95 border-b border-slate-200 backdrop-blur-md sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs font-mono text-slate-500">
              <Link to="/" className="hover:text-blue-600 transition-colors text-slate-600">Home</Link>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
              <Link to="/resources-hub" className="hover:text-blue-600 transition-colors text-slate-600">Resources Hub</Link>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
              <span className="text-slate-900 font-bold">AI &amp; Agentic Automation Hub</span>
            </div>

            <div className="hidden md:flex items-center gap-2 text-[11px] font-mono text-blue-700 bg-blue-50 px-2.5 py-1 rounded-full border border-blue-200 font-bold">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse"></span>
              <span>8 ENTERPRISE DISCIPLINES • COGNITIVE WORKFORCE</span>
            </div>
          </div>
        </div>
      </div>

      {/* ── SECTION 01: HERO SECTION (OFFERINGS PALETTE: DARK GRADIENT HERO + WHITE HUD) ── */}
      <section className="relative pt-12 pb-16 sm:pt-20 sm:pb-24 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute inset-0 opacity-[0.20]" style={{ backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.07) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.07) 1px, transparent 1px)', backgroundSize: '4rem 4rem' }} />
          <div className="absolute -top-40 right-1/4 w-[600px] h-[600px] bg-blue-600/15 rounded-full blur-[140px]" />
          <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-indigo-600/12 rounded-full blur-[130px]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

            {/* Left Column: Hero Editorial */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/15 border border-blue-400/30 text-blue-300 font-mono text-xs font-bold tracking-widest uppercase">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-400" />
                </span>
                ENTERPRISE AI &amp; AGENTIC INTELLIGENCE
              </div>

              <div className="space-y-3">
                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.12] font-heading">
                  Move Beyond AI Assistance. <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-indigo-300">
                    Build Intelligent Business Execution.
                  </span>
                </h1>
                <p className="text-base sm:text-lg font-medium text-slate-300 font-heading">
                  AI-Native Cognitive Revenue Architecture &amp; Autonomous Multi-Agent Swarms
                </p>
              </div>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl font-normal">
                Explore how artificial intelligence, autonomous task engines, agent architectures, and coordinated multi-agent systems transform fragmented commercial processes into continuous, compounding revenue generation.
              </p>

              {/* CTAs */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <button
                  onClick={() => scrollTo('ai-use-cases')}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm tracking-wide shadow-lg shadow-blue-600/30 transition-all hover:-translate-y-0.5 cursor-pointer"
                >
                  <span>Explore AI Capabilities</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <Link
                  to="/book-consultation"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-bold text-sm tracking-wide transition-all hover:-translate-y-0.5"
                >
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Book AI Strategy Consultation</span>
                </Link>
              </div>

              {/* Persona Tags */}
              <div className="pt-2 flex items-center gap-2 text-xs font-mono text-slate-400 flex-wrap">
                <span className="text-slate-500 font-semibold">Engineered For:</span>
                <span className="px-2 py-0.5 rounded bg-slate-800/80 border border-slate-700 text-slate-300">CEOs &amp; CROs</span>
                <span className="px-2 py-0.5 rounded bg-slate-800/80 border border-slate-700 text-slate-300">CTOs &amp; CAIOs</span>
                <span className="px-2 py-0.5 rounded bg-slate-800/80 border border-slate-700 text-slate-300">RevOps Architects</span>
              </div>
            </div>

            {/* Right Column: Interactive Ecosystem HUD (Offerings Card Style) */}
            <div className="lg:col-span-5">
              <div className="rounded-3xl bg-white text-slate-900 border border-slate-200/90 shadow-2xl p-6 sm:p-7 relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600" />
                
                <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                  <div className="flex items-center gap-2">
                    <BrainCircuit className="w-5 h-5 text-blue-600" />
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-900">
                      Cognitive Agent Swarm Mesh
                    </span>
                  </div>
                  <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 font-bold flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    ACTIVE SUPERVISOR
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3.5 my-5">
                  <div className="p-3.5 rounded-2xl bg-slate-50/80 border border-slate-200/80">
                    <div className="text-[10px] font-mono text-slate-500 uppercase tracking-wider font-semibold">Autonomous Units</div>
                    <div className="text-2xl font-bold font-mono text-blue-600 mt-1">8 Specialized</div>
                    <div className="text-[11px] font-mono text-slate-600 mt-0.5">SDR, Prep, Hygiene, RFP</div>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-slate-50/80 border border-slate-200/80">
                    <div className="text-[10px] font-mono text-slate-500 uppercase tracking-wider font-semibold">Coordination Latency</div>
                    <div className="text-2xl font-bold font-mono text-indigo-600 mt-1">&lt;1.2s</div>
                    <div className="text-[11px] font-mono text-slate-600 mt-0.5">Sub-Second Dispatch</div>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-slate-50/80 border border-slate-200/80">
                    <div className="text-[10px] font-mono text-slate-500 uppercase tracking-wider font-semibold">Governance Verification</div>
                    <div className="text-2xl font-bold font-mono text-emerald-600 mt-1">100% WORM</div>
                    <div className="text-[11px] font-mono text-emerald-700 font-medium mt-0.5">Zero Data Leakage</div>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-slate-50/80 border border-slate-200/80">
                    <div className="text-[10px] font-mono text-slate-500 uppercase tracking-wider font-semibold">Human Time Released</div>
                    <div className="text-2xl font-bold font-mono text-purple-700 mt-1">68% / Rep</div>
                    <div className="text-[11px] font-mono text-purple-800 mt-0.5 font-medium">+4.2x Selling Bandwidth</div>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-blue-50/60 border border-blue-200/70 text-xs font-mono text-blue-950 flex items-center justify-between">
                  <span className="flex items-center gap-1.5 font-bold">
                    <Activity className="w-3.5 h-3.5 text-blue-600" />
                    Autonomous Orchestrator:
                  </span>
                  <span className="font-bold text-[11px] text-blue-700">LangGraph DAG + MCP Gateway</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── STICKY SUITE CONTROL BAR (OFFERINGS LIGHT STYLE) ── */}
      <nav className="sticky top-[45px] z-30 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-3 py-2.5 overflow-x-auto no-scrollbar">
            <span className="text-[11px] font-mono font-bold text-slate-500 uppercase tracking-widest shrink-0 hidden lg:inline">
              DISCIPLINES:
            </span>
            <div className="flex items-center gap-1.5 sm:gap-2">
              {NAV_ANCHORS.map((anchor) => {
                const isActive = activeAnchor === anchor.id;
                return (
                  <button
                    key={anchor.id}
                    onClick={() => scrollTo(anchor.id)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold font-mono transition-all whitespace-nowrap cursor-pointer flex items-center gap-1.5 ${
                      isActive
                        ? 'bg-blue-600 text-white shadow-xs'
                        : 'bg-slate-50 hover:bg-slate-100 text-slate-700 hover:text-slate-900 border border-slate-200'
                    }`}
                  >
                    <span>{anchor.label}</span>
                  </button>
                );
              })}
            </div>
            <Link
              to="/book-consultation"
              className="text-xs font-mono font-bold px-3 py-1.5 rounded-xl bg-blue-50 hover:bg-blue-600 text-blue-700 hover:text-white border border-blue-200 transition-all shrink-0 hidden md:flex items-center gap-1.5"
            >
              <Bot className="w-3.5 h-3.5" />
              <span>Deploy Agents</span>
            </Link>
          </div>
        </div>
      </nav>

      {/* ── SECTION 02: EXECUTIVE OVERVIEW — MATURITY PROGRESSION ── */}
      <section className="py-16 sm:py-20 bg-slate-50/70 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 font-mono text-xs font-bold uppercase tracking-widest">
              <TrendingUp className="w-3.5 h-3.5" />
              THE ENTERPRISE COGNITIVE EVOLUTION
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading tracking-tight">
              Understanding the Shift from Traditional Automation to Agentic Systems
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Most enterprises remain trapped in fragile, rule-based scripts or passive chatbot copilots. Compare the five progressive stages of machine automation and discover what is required to advance to autonomous execution.
            </p>
          </div>

          {/* Interactive Maturity Slider Tabs */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5">
            {AGENTIC_MATURITY_STAGES.map((stg, i) => {
              const isSelected = selectedMaturityIdx === i;
              return (
                <button
                  key={stg.stage}
                  onClick={() => setSelectedMaturityIdx(i)}
                  className={`p-4 rounded-2xl border text-left transition-all cursor-pointer relative overflow-hidden ${
                    isSelected
                      ? 'bg-white border-blue-500 shadow-md ring-2 ring-blue-500/20'
                      : 'bg-white/70 hover:bg-white border-slate-200/90 text-slate-700'
                  }`}
                >
                  <div className="text-[10px] font-mono font-bold text-blue-600 mb-1">STAGE {stg.stage}</div>
                  <div className="text-sm font-bold text-slate-900 font-heading leading-tight">{stg.name}</div>
                  <div className="text-[11px] font-mono text-slate-500 mt-1">{stg.tech}</div>
                </button>
              );
            })}
          </div>

          {/* Selected Stage Detail Card */}
          {(() => {
            const active = AGENTIC_MATURITY_STAGES[selectedMaturityIdx];
            return (
              <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/90 shadow-sm relative overflow-hidden space-y-6">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600" />
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100">
                  <div>
                    <span className="text-xs font-mono font-bold text-blue-600 uppercase">Stage {active.stage} Deep-Dive</span>
                    <h3 className="text-xl font-bold text-slate-900 font-heading">{active.name} ({active.tech})</h3>
                  </div>
                  <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-200 self-start sm:self-auto">
                    Maturity Horizon {selectedMaturityIdx + 1} of 5
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="p-4 rounded-2xl bg-slate-50/80 border border-slate-200/80 space-y-1.5">
                    <span className="text-xs font-mono font-bold text-slate-700 uppercase block">Core Characteristics</span>
                    <p className="text-xs text-slate-600 leading-relaxed font-normal">{active.characteristics}</p>
                  </div>
                  <div className="p-4 rounded-2xl bg-rose-50/60 border border-rose-200/80 space-y-1.5">
                    <span className="text-xs font-mono font-bold text-rose-800 uppercase block">Operational Limitations</span>
                    <p className="text-xs text-rose-700 leading-relaxed font-normal">{active.limitations}</p>
                  </div>
                  <div className="p-4 rounded-2xl bg-emerald-50/60 border border-emerald-200/80 space-y-1.5">
                    <span className="text-xs font-mono font-bold text-emerald-800 uppercase block">Business Value Realization</span>
                    <p className="text-xs text-emerald-700 leading-relaxed font-normal">{active.businessValue}</p>
                  </div>
                </div>
              </div>
            );
          })()}
        </div>
      </section>

      {/* ── SECTION 03: ENTERPRISE CHALLENGES ── */}
      <section className="py-16 sm:py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 font-mono text-xs font-bold uppercase tracking-widest">
              <AlertTriangle className="w-3.5 h-3.5 text-amber-600" />
              STRUCTURAL EXECUTION BOTTLENECKS
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading tracking-tight">
              Why Enterprises Need More Intelligent Execution Systems
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Commercial organizations are hemorrhaging selling capacity through manual data reconciliation, delayed lead routing, and fragmented SaaS tooling.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {ENTERPRISE_CHALLENGES.map((ch) => (
              <div
                key={ch.id}
                className="p-6 sm:p-7 rounded-3xl bg-slate-50/70 border border-slate-200/90 shadow-sm space-y-4 hover:border-blue-300 transition-all"
              >
                <div className="flex items-center justify-between border-b border-slate-200/70 pb-3">
                  <h3 className="text-base font-bold text-slate-900 font-heading">{ch.title}</h3>
                  <span className="text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-rose-50 text-rose-700 border border-rose-200">
                    High Risk
                  </span>
                </div>
                <div className="space-y-2 text-xs font-mono">
                  <div>
                    <span className="font-bold text-slate-700">Root Cause: </span>
                    <span className="text-slate-600">{ch.underlyingProblem}</span>
                  </div>
                  <div>
                    <span className="font-bold text-slate-700">Operational Drag: </span>
                    <span className="text-slate-600">{ch.operationalConsequences}</span>
                  </div>
                  <div>
                    <span className="font-bold text-rose-700">Commercial Impact: </span>
                    <span className="text-rose-800 font-medium">{ch.businessImpact}</span>
                  </div>
                </div>
                <div className="pt-2 border-t border-slate-200/80 flex items-center justify-between text-xs font-mono text-blue-700 font-bold">
                  <span>Remediation: {ch.solutionApproach}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTIONS 04–11: THE EIGHT CORE RESOURCE CATEGORIES ── */}
      <div className="space-y-0">
        {filteredSections.map((sec, secIdx) => {
          const isEven = secIdx % 2 === 0;

          return (
            <section
              key={sec.id}
              id={sec.id}
              data-section-id={sec.id}
              className={`scroll-mt-24 py-16 sm:py-20 ${isEven ? 'bg-white' : 'bg-slate-50/70'} border-b border-slate-200`}
            >
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">

                {/* 1. Header */}
                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6 border-b border-slate-200">
                  <div className="space-y-3 max-w-3xl">
                    <div className="flex items-center gap-2.5 flex-wrap">
                      <span className="text-xs font-mono font-bold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                        DISCIPLINE {sec.number} // 08
                      </span>
                      <span className="text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200">
                        {sec.badge}
                      </span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading">
                      {sec.title}
                    </h2>
                    <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
                      {sec.subtitle}
                    </p>
                  </div>
                  <span className="text-xs font-mono px-3 py-1.5 rounded-xl bg-slate-100 text-slate-700 border border-slate-200 font-semibold self-start lg:self-auto">
                    Section Anchor #{sec.id}
                  </span>
                </div>

                {/* 2. Intro Statement */}
                <div className="p-6 rounded-2xl bg-blue-50/50 border border-blue-200/60 text-slate-700 text-sm sm:text-base leading-relaxed">
                  <span className="font-mono font-bold text-blue-900 block mb-1">Architectural Brief:</span>
                  {sec.intro}
                </div>

                {/* 3. Enterprise Applications Grid (3 Rich Cards) */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-bold text-slate-900 font-heading">
                      Enterprise Production Applications
                    </h3>
                    <span className="text-xs font-mono text-slate-500">Traditional vs Agentic Execution</span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {sec.enterpriseApplications.map((app, appIdx) => (
                      <div
                        key={appIdx}
                        className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-sm space-y-4 hover:border-blue-300 transition-all flex flex-col justify-between"
                      >
                        <div className="space-y-3">
                          <div className="text-xs font-mono font-bold text-blue-600">Case Study 0{appIdx + 1}</div>
                          <h4 className="text-base font-bold text-slate-900 font-heading leading-tight">{app.useCase}</h4>
                          <p className="text-xs text-slate-600 leading-relaxed">{app.description}</p>
                          <div className="space-y-2 pt-2 border-t border-slate-100 text-xs font-mono">
                            <div className="p-2 rounded-lg bg-rose-50/60 border border-rose-200 text-rose-800">
                              <span className="font-bold block">Traditional:</span>
                              {app.traditionalWay}
                            </div>
                            <div className="p-2 rounded-lg bg-emerald-50/60 border border-emerald-200 text-emerald-800">
                              <span className="font-bold block">Agentic Mesh:</span>
                              {app.agenticWay}
                            </div>
                          </div>
                        </div>

                        <div className="pt-3 border-t border-slate-100 text-xs font-mono text-purple-700 font-bold bg-purple-50/50 p-2.5 rounded-xl border border-purple-200">
                          Measured Impact: {app.impact}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 4. Core Frameworks (2 In-Depth Methodology Cards) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {sec.frameworks.map((fw, fwIdx) => (
                    <div
                      key={fwIdx}
                      className="p-6 sm:p-7 rounded-3xl bg-white border border-slate-200/90 shadow-sm space-y-4 relative overflow-hidden"
                    >
                      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600" />
                      <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                        <h4 className="text-base font-bold text-slate-900 font-heading">{fw.title}</h4>
                        <span className="text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                          Framework 0{fwIdx + 1}
                        </span>
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed font-normal">{fw.description}</p>
                      
                      {fw.formula && (
                        <div className="p-2.5 rounded-xl bg-slate-900 text-cyan-300 font-mono text-xs font-bold">
                          {fw.formula}
                        </div>
                      )}

                      <div className="space-y-1.5 pt-2">
                        <span className="text-xs font-mono font-bold text-slate-700">Implementation Steps:</span>
                        <ul className="space-y-1 text-xs text-slate-600 font-mono">
                          {fw.steps.map((st, stIdx) => (
                            <li key={stIdx} className="flex items-start gap-1.5">
                              <Check className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                              <span>{st}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {fw.output && (
                        <div className="p-2.5 rounded-xl bg-blue-50 border border-blue-200 text-xs font-mono text-blue-900">
                          <span className="font-bold">Deliverable: </span>{fw.output}
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {/* 5. KPIs & Governance Ledger */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                  
                  {/* Left: KPIs (7 Cols) */}
                  <div className="lg:col-span-7 p-6 rounded-3xl bg-white border border-slate-200/90 shadow-sm space-y-4">
                    <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                      <div className="flex items-center gap-2">
                        <Activity className="w-4 h-4 text-blue-600" />
                        <h4 className="text-sm font-bold text-slate-900 font-heading uppercase tracking-wider">
                          Key Performance Indicators &amp; Benchmarks
                        </h4>
                      </div>
                      <span className="text-[10px] font-mono text-slate-500 font-semibold">Empirical Targets</span>
                    </div>

                    <div className="space-y-3">
                      {sec.kpis.map((kpi, kIdx) => (
                        <div key={kIdx} className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1">
                          <div className="flex items-center justify-between text-xs font-mono font-bold">
                            <span className="text-slate-900">{kpi.name}</span>
                            <span className="text-purple-700 bg-purple-50 px-2 py-0.5 rounded border border-purple-200">
                              {kpi.benchmark}
                            </span>
                          </div>
                          {kpi.formula && (
                            <div className="text-[10px] font-mono text-blue-700 font-semibold">{kpi.formula}</div>
                          )}
                          <div className="text-xs text-slate-600 font-mono leading-tight">{kpi.description}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Right: Technical Architecture & Risks (5 Cols) */}
                  <div className="lg:col-span-5 p-6 rounded-3xl bg-white border border-slate-200/90 shadow-sm space-y-4 flex flex-col justify-between">
                    <div className="space-y-4">
                      <div className="flex items-center gap-2 pb-3 border-b border-slate-100 text-xs font-mono font-bold text-slate-900 uppercase tracking-wider">
                        <Network className="w-4 h-4 text-indigo-600" />
                        <span>Technical Constraints &amp; Governance</span>
                      </div>

                      <div className="space-y-2 text-xs font-mono">
                        <span className="font-bold text-slate-700 block">System Architecture Requirements:</span>
                        <ul className="space-y-1 text-slate-600">
                          {sec.architecturePoints.map((ap, apIdx) => (
                            <li key={apIdx} className="flex items-start gap-1.5">
                              <span className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0 mt-1.5"></span>
                              <span>{ap}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="space-y-2 text-xs font-mono pt-3 border-t border-slate-100">
                        <span className="font-bold text-rose-700 block">Governance &amp; Risk Controls:</span>
                        <ul className="space-y-1 text-slate-600">
                          {sec.governanceAndRisks.map((gr, grIdx) => (
                            <li key={grIdx} className="flex items-start gap-1.5">
                              <span className="w-1.5 h-1.5 rounded-full bg-rose-500 shrink-0 mt-1.5"></span>
                              <span>{gr}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="pt-3 border-t border-slate-100 text-[11px] font-mono text-slate-500">
                      <span className="font-bold text-blue-700">Recommended Sprint: </span>
                      {sec.recommendedNextSteps[0]}
                    </div>
                  </div>

                </div>

              </div>
            </section>
          );
        })}
      </div>

      {/* ── SECTION 12: CROSS-CATEGORY KNOWLEDGE CONNECTIONS ── */}
      <section className="py-16 sm:py-20 bg-slate-50/70 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 font-mono text-xs font-bold uppercase tracking-widest">
              <Workflow className="w-3.5 h-3.5" />
              INTEGRATED REVENUE ARCHITECTURE
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading tracking-tight">
              How the Eight Capabilities Work Together
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Enterprise AI execution is not a set of isolated point tools. These eight disciplines form an unbroken, self-reinforcing operational loop from strategic use case prioritization down to cryptographically governed human-agent operating models.
            </p>
          </div>

          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/90 shadow-sm relative overflow-hidden space-y-6">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600" />
            <div className="text-sm font-bold text-slate-900 font-heading">
              The 8-Stage Connected Enterprise AI Loop
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs font-mono">
              <div className="p-4 rounded-2xl bg-blue-50/50 border border-blue-200/60 space-y-1">
                <span className="font-bold text-blue-700">01. AI Use Cases</span>
                <p className="text-slate-600 text-[11px]">Identifies high-impact commercial friction points based on unit economic ROI.</p>
              </div>
              <div className="p-4 rounded-2xl bg-indigo-50/50 border border-indigo-200/60 space-y-1">
                <span className="font-bold text-indigo-700">02. AI Agents</span>
                <p className="text-slate-600 text-[11px]">Translates approved use cases into discrete, task-oriented execution engines.</p>
              </div>
              <div className="p-4 rounded-2xl bg-sky-50/50 border border-sky-200/60 space-y-1">
                <span className="font-bold text-sky-700">03. Autonomous Agents</span>
                <p className="text-slate-600 text-[11px]">Empowers agents with bounded autonomy to formulate sub-plans and self-heal.</p>
              </div>
              <div className="p-4 rounded-2xl bg-violet-50/50 border border-violet-200/60 space-y-1">
                <span className="font-bold text-violet-700">04. Architectures</span>
                <p className="text-slate-600 text-[11px]">Engineers decoupled 10-layer infrastructure with Model Context Protocol.</p>
              </div>
              <div className="p-4 rounded-2xl bg-emerald-50/50 border border-emerald-200/60 space-y-1">
                <span className="font-bold text-emerald-700">05. Multi-Agent Systems</span>
                <p className="text-slate-600 text-[11px]">Orchestrates specialized swarms under master supervisor coordination.</p>
              </div>
              <div className="p-4 rounded-2xl bg-amber-50/50 border border-amber-200/60 space-y-1">
                <span className="font-bold text-amber-700">06. AI Governance</span>
                <p className="text-slate-600 text-[11px]">Enforces WORM audit logs, policy gates, and human oversight checkpoints.</p>
              </div>
              <div className="p-4 rounded-2xl bg-rose-50/50 border border-rose-200/60 space-y-1">
                <span className="font-bold text-rose-700">07. AI Security</span>
                <p className="text-slate-600 text-[11px]">Protects infrastructure via Zero-Trust identity, secrets vaulting, and sandbox isolation.</p>
              </div>
              <div className="p-4 rounded-2xl bg-teal-50/50 border border-teal-200/60 space-y-1">
                <span className="font-bold text-teal-700">08. Operating Models</span>
                <p className="text-slate-600 text-[11px]">Realigns human sales talent to strategic execution while swarms execute 24/7.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 13: 5-STAGE ENTERPRISE IMPLEMENTATION ROADMAP ── */}
      <section className="py-16 sm:py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 font-mono text-xs font-bold uppercase tracking-widest">
              <Compass className="w-3.5 h-3.5" />
              DEPLOYMENT BLUEPRINT
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading tracking-tight">
              From Opportunity Discovery to Governed Enterprise Scale
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              A phased 5-stage transformation roadmap establishing clear decision checkpoints, risk controls, and measurable value criteria at every milestone.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {[
              { stage: 'Stage 01', name: 'Discover', weeks: 'Weeks 1–4', desc: 'Audit manual bottlenecks, map current commercial workflows, evaluate data readiness, and quantify addressable labor debt.' },
              { stage: 'Stage 02', name: 'Prioritize', weeks: 'Weeks 5–8', desc: 'Run ICE-R prioritization matrix, score technical feasibility, evaluate risk exposure, and define unambiguous success criteria.' },
              { stage: 'Stage 03', name: 'Architect', weeks: 'Weeks 9–14', desc: 'Select orchestration patterns (LangGraph/MCP), design sandboxed tool integrations, and configure Zero-Trust secrets vaulting.' },
              { stage: 'Stage 04', name: 'Pilot', weeks: 'Weeks 15–20', desc: 'Deploy bounded Level 2 agents with 100% human-in-the-loop validation; measure F1 accuracy and cycle time compression.' },
              { stage: 'Stage 05', name: 'Scale', weeks: 'Weeks 21+', desc: 'Transition certified workflows to Level 3 bounded autonomy; connect multi-agent swarms and realign human headcount.' }
            ].map((st, i) => (
              <div key={i} className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <div className="text-[10px] font-mono font-bold text-blue-600 uppercase">{st.stage} · {st.weeks}</div>
                <div className="text-base font-bold text-slate-900 font-heading">{st.name}</div>
                <p className="text-xs text-slate-600 font-mono leading-relaxed">{st.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 14: EXECUTIVE CONVERSION CTA (OFFERINGS PALETTE FOOTER) ── */}
      <section className="py-20 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 border-t border-slate-800 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/15 border border-blue-400/30 text-blue-300 font-mono text-xs font-bold tracking-widest uppercase">
            <Sparkles className="w-3.5 h-3.5 text-blue-400" />
            AI REVENUE TRANSFORMATION
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-heading max-w-3xl mx-auto">
            Ready to Build Your Enterprise AI &amp; Agentic Workforce?
          </h2>

          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto font-normal leading-relaxed">
            Deploy ProfitMachines AI-native revenue transformation platform to automate prospect research, accelerate sales cycles, and engineer compounding enterprise growth.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/book-consultation"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-mono text-sm font-bold shadow-lg shadow-blue-600/30 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Schedule Architecture Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/resources-hub"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-slate-800/90 hover:bg-slate-800 text-slate-200 hover:text-white border border-slate-700 font-mono text-sm font-bold transition-all flex items-center justify-center gap-2"
            >
              <span>Back to Resources Hub</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="pt-6 flex items-center justify-center gap-6 text-xs font-mono text-slate-400">
            <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-emerald-400" /> SOC2 Type II Aligned</span>
            <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-blue-400" /> Zero Data Retention Guarantee</span>
            <span className="flex items-center gap-1.5"><Activity className="w-4 h-4 text-indigo-400" /> Sub-Second Agent Dispatch</span>
          </div>
        </div>
      </section>

    </div>
  );
}
