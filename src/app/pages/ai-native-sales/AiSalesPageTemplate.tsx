import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  ArrowRight, CheckCircle2, ChevronRight, Activity, Zap, Layers,
  Cpu, BarChart3, ShieldCheck, AlertTriangle, Target, Users,
  Radar, Network, DollarSign, Bot, Eye, LineChart, FileText,
  Clock, Sparkles, Building2, TrendingUp, HelpCircle
} from 'lucide-react';
import { AiSalesCapabilityPageData } from './types';

interface AiSalesPageTemplateProps {
  data: AiSalesCapabilityPageData;
}

export default function AiSalesPageTemplate({ data }: AiSalesPageTemplateProps) {
  const location = useLocation();
  const [activeSubId, setActiveSubId] = useState<string>(data.subSubmenus[0]?.id || '');

  // Update title & scroll to hash anchor on mount/change
  useEffect(() => {
    document.title = `${data.title} | AI Native Sales | ProfitMachines`;

    if (location.hash) {
      const targetId = location.hash.replace(/^#/, '');
      const match = data.subSubmenus.find(
        (s) => s.id.toLowerCase() === targetId.toLowerCase()
      );
      if (match) {
        setActiveSubId(match.id);
      }

      // Smooth scroll target with header offset
      const timer = setTimeout(() => {
        const el = document.getElementById(targetId);
        if (el) {
          const navOffset = 90;
          const elementPosition = el.getBoundingClientRect().top + window.pageYOffset;
          window.scrollTo({
            top: Math.max(0, elementPosition - navOffset),
            behavior: 'smooth'
          });
        }
      }, 100);

      return () => clearTimeout(timer);
    }
  }, [location.hash, data]);

  // Visual icon mapping
  const getPageIcon = () => {
    switch (data.visualTheme) {
      case 'intelligence': return Radar;
      case 'pipeline': return Target;
      case 'engagement': return Zap;
      case 'agents': return Bot;
      case 'acceleration': return TrendingUp;
      case 'pricing': return DollarSign;
      case 'ecosystem': return Network;
      case 'customer': return Users;
      case 'command': return Cpu;
      default: return Activity;
    }
  };

  const PageIcon = getPageIcon();

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-100 selection:text-blue-900">
      
      {/* ── STICKY CAPABILITY SUB-NAV BAR (FOR FAST AUDIT JUMPING) ── */}
      <nav aria-label="Page Sub Navigation" className="sticky top-16 z-30 bg-slate-900/95 backdrop-blur-md border-b border-slate-800 text-white text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-11 flex items-center justify-between gap-4 overflow-x-auto no-scrollbar">
          <div className="flex items-center gap-2.5 shrink-0">
            <span className="font-mono text-blue-400 font-bold">{data.pageNumber}</span>
            <span className="font-bold text-slate-200">{data.title}</span>
            <span className="hidden sm:inline text-slate-500">|</span>
            <span className="hidden sm:inline text-slate-400 font-medium font-mono text-[11px] uppercase tracking-wider">AI Native Sales</span>
          </div>

          <div className="flex items-center gap-4 shrink-0 text-slate-300 font-medium">
            <a href="#overview" className="hover:text-blue-400 transition-colors">Overview</a>
            <a href="#friction" className="hover:text-blue-400 transition-colors">Friction</a>
            <a href="#subsections" className="hover:text-blue-400 text-blue-400 font-bold transition-colors">
              Capabilities ({data.subSubmenus.length})
            </a>
            <a href="#workflow" className="hover:text-blue-400 transition-colors">Workflow</a>
            <a href="#use-cases" className="hover:text-blue-400 transition-colors">Use Cases</a>
            <a href="#dashboard" className="hover:text-blue-400 transition-colors">Telemetry</a>
            <a href="#kpis" className="hover:text-blue-400 transition-colors">Metrics</a>
            <a href="#governance" className="hover:text-blue-400 transition-colors">Governance</a>
            <Link to="/book-consultation" className="px-2.5 py-1 rounded bg-blue-600 hover:bg-blue-500 text-white font-bold transition-colors">
              Briefing
            </Link>
          </div>
        </div>
      </nav>

      {/* ── SECTION 01: EXECUTIVE HERO (MATCHING GLOBAL ACCELERATION PALETTE) ── */}
      <section id="overview" className="relative pt-12 pb-16 sm:pt-20 sm:pb-24 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div
            className="absolute inset-0 opacity-[0.20]"
            style={{
              backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.07) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.07) 1px, transparent 1px)',
              backgroundSize: '4rem 4rem'
            }}
          />
          <div className="absolute -top-40 right-1/4 w-[600px] h-[600px] bg-blue-600/15 rounded-full blur-[140px]" />
          <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-indigo-600/12 rounded-full blur-[130px]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs font-mono text-slate-400 mb-4">
            <Link to="/ai-native-sales" className="hover:text-blue-400 transition-colors">AI Native Sales</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
            <span className="text-blue-400 font-bold">{data.title}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/15 border border-blue-400/30 text-blue-300 text-xs font-bold tracking-widest uppercase font-mono mb-4">
                <PageIcon className="w-3.5 h-3.5 text-blue-400" />
                <span>{data.eyebrow}</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.15] mb-5 font-heading">
                {data.title}:{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-indigo-300">
                  {data.heroHeadline}
                </span>
              </h1>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-6">
                {data.heroSupporting}
              </p>

              {/* Target Decision Makers */}
              <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 text-xs text-slate-300 mb-8 space-y-1">
                <div className="text-[11px] font-mono font-bold text-blue-400 uppercase tracking-wider">
                  Target Decision-Makers:
                </div>
                <div className="flex flex-wrap gap-2 pt-1">
                  {data.targetDecisionMakers.map((aud, aIdx) => (
                    <span
                      key={aIdx}
                      className="px-2.5 py-1 rounded bg-slate-800/90 text-slate-300 border border-slate-700/80 text-xs font-medium"
                    >
                      {aud}
                    </span>
                  ))}
                </div>
              </div>

              {/* Hero CTAs */}
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="#subsections"
                  className="px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 active:bg-blue-700 text-white font-bold text-sm transition-all shadow-lg shadow-blue-600/30 inline-flex items-center gap-2 group cursor-pointer"
                >
                  <span>{data.primaryCTA}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </a>

                <Link
                  to="/book-consultation"
                  className="px-5 py-3 rounded-xl bg-slate-800/90 hover:bg-slate-700 border border-slate-700 text-slate-200 font-bold text-sm transition-all inline-flex items-center gap-2"
                >
                  <Sparkles className="w-4 h-4 text-blue-400" />
                  <span>{data.secondaryCTA}</span>
                </Link>
              </div>
            </div>

            {/* Right Hero Visual Card */}
            <div className="lg:col-span-5">
              <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-900/95 via-slate-900/80 to-slate-950 border border-slate-800 shadow-2xl relative overflow-hidden">
                <div className="flex items-center justify-between pb-3.5 border-b border-slate-800/80 mb-5">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-300">
                      Capability Operating Matrix
                    </span>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-500/15 border border-blue-400/30 text-blue-300">
                    {data.subSubmenus.length} Modules Active
                  </span>
                </div>

                <div className="space-y-3 mb-6">
                  {data.subSubmenus.map((sub, sIdx) => (
                    <a
                      key={sub.id}
                      href={`#${sub.id}`}
                      className="block p-3 rounded-xl bg-slate-950/80 border border-slate-800/90 hover:border-blue-500/60 hover:bg-slate-900 transition-all group"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2.5">
                          <span className="font-mono text-xs text-blue-400 font-bold">0{sIdx + 1}</span>
                          <span className="text-xs font-bold text-white group-hover:text-blue-300 transition-colors">
                            {sub.title}
                          </span>
                        </div>
                        <ChevronRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-blue-400 transition-transform group-hover:translate-x-0.5" />
                      </div>
                      <p className="text-[11px] text-slate-400 mt-1 line-clamp-1">
                        {sub.businessQuestion}
                      </p>
                    </a>
                  ))}
                </div>

                <div className="p-3 rounded-xl bg-slate-950 border border-slate-800/90 text-[11px] font-mono text-slate-400 flex items-center justify-between">
                  <span>Architecture: Deterministic + Agentic</span>
                  <span className="text-emerald-400 font-bold">100% Governance</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 02: THE BUSINESS PROBLEM & FRICTION DIAGNOSTICS ── */}
      <section id="friction" className="py-14 sm:py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <span className="text-xs font-mono text-blue-600 uppercase tracking-widest font-bold">
              Commercial Friction Diagnostics
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1 mb-3 font-heading">
              {data.businessProblemTitle}
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              {data.businessProblemSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.businessProblems.map((prob) => (
              <div
                key={prob.id}
                className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200 shadow-xs flex flex-col justify-between hover:border-blue-400 hover:shadow-sm transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-3 pb-2 border-b border-slate-100">
                    <span className="text-[11px] font-mono font-bold text-rose-600 bg-rose-50 px-2 py-0.5 rounded border border-rose-100 flex items-center gap-1">
                      <AlertTriangle className="w-3 h-3 text-rose-500" />
                      Friction Point
                    </span>
                    <span className="text-[10px] font-mono text-slate-400">#{prob.id}</span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 mb-2 font-heading">
                    {prob.title}
                  </h3>

                  <div className="space-y-2 mb-4 text-xs">
                    <div>
                      <span className="font-mono text-[10px] uppercase font-bold text-slate-400 block">Observed Symptom:</span>
                      <p className="text-slate-700 mt-0.5 leading-relaxed">{prob.symptom}</p>
                    </div>
                    <div>
                      <span className="font-mono text-[10px] uppercase font-bold text-slate-400 block">Root Operational Cause:</span>
                      <p className="text-slate-600 mt-0.5 leading-relaxed">{prob.rootCause}</p>
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-100 text-xs">
                  <span className="text-[10px] font-mono font-bold text-rose-600 uppercase tracking-wider block">Commercial Impact:</span>
                  <span className="font-semibold text-slate-900">{prob.impact}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 03: SUB-SUBMENU CAPABILITY SECTIONS (FULL CONTENT DEPTH & DIRECT HASH ANCHORS) ── */}
      <section id="subsections" className="py-16 sm:py-24 bg-white border-b border-slate-200 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <span className="text-xs font-mono text-blue-600 uppercase tracking-widest font-bold">
                Capability Architecture · Sub-Submenus
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1 mb-2 font-heading">
                Comprehensive Modules for {data.title}
              </h2>
              <p className="text-slate-600 text-sm max-w-2xl leading-relaxed">
                Click any capability anchor below to jump directly to its complete operational specification, inputs, decision support logic, and KPI framework.
              </p>
            </div>

            {/* Quick jump anchor pill bar */}
            <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-xl bg-slate-100 border border-slate-200 self-start md:self-auto">
              {data.subSubmenus.map((sub, sIdx) => (
                <a
                  key={sub.id}
                  href={`#${sub.id}`}
                  onClick={() => setActiveSubId(sub.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    activeSubId === sub.id
                      ? 'bg-blue-600 text-white shadow-xs'
                      : 'text-slate-600 hover:text-blue-600 hover:bg-white'
                  }`}
                >
                  <span className="font-mono mr-1">0{sIdx + 1}.</span>
                  {sub.title}
                </a>
              ))}
            </div>
          </div>

          {/* Deep Capability Cards Stack */}
          <div className="space-y-12">
            {data.subSubmenus.map((sub, sIdx) => (
              <div
                key={sub.id}
                id={sub.id} // Anchor for direct sub-sub menu scroll
                className="scroll-mt-32 rounded-3xl border border-slate-200/90 bg-white shadow-sm hover:shadow-md transition-all overflow-hidden"
              >
                {/* Section Header Bar */}
                <div className="bg-slate-900 text-white p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="w-6 h-6 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center font-mono font-bold text-xs border border-blue-400/30">
                        0{sIdx + 1}
                      </span>
                      <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-400">
                        ANCHOR ID: #{sub.id}
                      </span>
                      {sub.badge && (
                        <span className="text-[10px] font-mono font-bold uppercase px-2 py-0.5 rounded bg-blue-600 text-white">
                          {sub.badge}
                        </span>
                      )}
                    </div>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-white font-heading">
                      {sub.title}
                    </h3>
                  </div>

                  <div className="max-w-md p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 text-xs">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-sky-400 block mb-1">
                      Business Question Resolved:
                    </span>
                    <p className="text-slate-300 font-medium leading-relaxed">
                      "{sub.businessQuestion}"
                    </p>
                  </div>
                </div>

                {/* Section Body */}
                <div className="p-6 sm:p-8 space-y-8">
                  {/* Overview Narrative */}
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    <div className="lg:col-span-7 space-y-4">
                      <div>
                        <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600 mb-1">
                          Operational Overview
                        </h4>
                        <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                          {sub.description}
                        </p>
                      </div>

                      <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs space-y-2">
                        <div className="font-mono font-bold text-slate-800 uppercase tracking-wider flex items-center gap-1.5">
                          <AlertTriangle className="w-3.5 h-3.5 text-amber-600" />
                          Business Problem Addressed:
                        </div>
                        <p className="text-slate-600 leading-relaxed">
                          {sub.businessProblem}
                        </p>
                      </div>

                      <div>
                        <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 mb-1">
                          How the Engine Works:
                        </h4>
                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                          {sub.howItWorks}
                        </p>
                      </div>
                    </div>

                    <div className="lg:col-span-5 space-y-4">
                      {/* Information Used */}
                      <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                        <h5 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-800 mb-2.5 flex items-center gap-1.5">
                          <Layers className="w-3.5 h-3.5 text-blue-600" />
                          Permitted Data & Inputs Used:
                        </h5>
                        <ul className="space-y-1.5">
                          {sub.informationUsed.map((info, iIdx) => (
                            <li key={iIdx} className="text-xs text-slate-600 flex items-start gap-2">
                              <span className="text-blue-500 mt-0.5">•</span>
                              <span>{info}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Human Oversight Box */}
                      <div className="p-4 rounded-2xl bg-blue-50/60 border border-blue-200/70 text-xs space-y-1.5">
                        <div className="font-mono font-bold text-blue-800 uppercase tracking-wider flex items-center gap-1.5">
                          <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
                          Human-in-the-Loop Governance:
                        </div>
                        <p className="text-slate-700 leading-relaxed">
                          {sub.humanOversight}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Decision Support & Outcomes Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-slate-100">
                    <div className="p-4 rounded-xl bg-white border border-slate-200">
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 block mb-1">
                        Workflow & Decision Support:
                      </span>
                      <p className="text-xs text-slate-700 leading-relaxed">
                        {sub.workflowSupport}
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-white border border-slate-200">
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-emerald-600 block mb-1">
                        Business Outcomes Supported:
                      </span>
                      <p className="text-xs text-slate-700 leading-relaxed">
                        {sub.outcomesSupported}
                      </p>
                    </div>
                  </div>

                  {/* KPIs Row */}
                  <div className="p-4 rounded-2xl bg-slate-900 text-white">
                    <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-blue-400 mb-3">
                      Sub-Module Measurable Performance Indicators:
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      {sub.kpis.map((k, kIdx) => (
                        <div key={kIdx} className="p-3 rounded-xl bg-slate-950/80 border border-slate-800">
                          <div className="text-xs font-mono font-bold text-emerald-400 mb-0.5">{k.target}</div>
                          <div className="text-xs font-bold text-white mb-0.5">{k.metric}</div>
                          <div className="text-[10px] text-slate-400 leading-snug">{k.definition}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 04: WORKFLOW PIPELINE ARCHITECTURE ── */}
      <section id="workflow" className="py-14 sm:py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono text-blue-600 uppercase tracking-widest font-bold">
              Autonomous Operating Pipeline
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1 mb-3 font-heading">
              {data.workflowTitle}
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              {data.workflowSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {data.workflowSteps.map((step) => (
              <div
                key={step.step}
                className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs flex flex-col justify-between hover:border-blue-400 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-3">
                    <span className="w-7 h-7 rounded-lg bg-blue-600 text-white font-mono font-bold text-xs flex items-center justify-center">
                      {step.step}
                    </span>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400">Pipeline Stage</span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 mb-2 font-heading">
                    {step.name}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {step.description}
                  </p>

                  <div className="space-y-2 text-xs">
                    <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-100">
                      <span className="font-mono text-[10px] font-bold text-slate-500 uppercase block">Inputs:</span>
                      <span className="text-slate-700">{step.inputs}</span>
                    </div>

                    <div className="p-2.5 rounded-lg bg-blue-50/50 border border-blue-100/70">
                      <span className="font-mono text-[10px] font-bold text-blue-700 uppercase block">AI Operation:</span>
                      <span className="text-slate-800">{step.aiAction}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 space-y-1.5 text-xs">
                  <div className="flex items-center gap-1.5 text-[11px] font-medium text-emerald-700 bg-emerald-50 px-2 py-1 rounded border border-emerald-100">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>{step.humanGate}</span>
                  </div>
                  <div className="text-[11px] text-slate-500">
                    <span className="font-mono font-bold text-slate-700">Output:</span> {step.output}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 05: PRACTICAL BUSINESS USE CASES ── */}
      <section id="use-cases" className="py-14 sm:py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono text-blue-600 uppercase tracking-widest font-bold">
              Operational Scenarios
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1 mb-3 font-heading">
              Practical Enterprise Use Cases
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Examine how revenue organizations deploy this capability across distinct commercial situations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.useCases.map((uc, uIdx) => (
              <div
                key={uIdx}
                className="bg-slate-50 rounded-2xl p-6 border border-slate-200 flex flex-col justify-between hover:border-slate-300 transition-all"
              >
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-slate-200 mb-3">
                    <span className="text-xs font-mono font-bold text-blue-600 bg-blue-50 px-2.5 py-0.5 rounded border border-blue-100">
                      {uc.segment}
                    </span>
                    <span className="text-[10px] font-mono text-slate-400">Use Case 0{uIdx + 1}</span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 mb-2 font-heading">
                    {uc.title}
                  </h3>

                  <div className="space-y-3 mb-5 text-xs">
                    <div>
                      <span className="font-mono text-[10px] font-bold text-slate-400 uppercase block">Situation:</span>
                      <p className="text-slate-700 mt-0.5 leading-relaxed">{uc.situation}</p>
                    </div>

                    <div>
                      <span className="font-mono text-[10px] font-bold text-slate-400 uppercase block">AI Operating Approach:</span>
                      <p className="text-slate-700 mt-0.5 leading-relaxed">{uc.approach}</p>
                    </div>

                    <div className="p-3 rounded-xl bg-white border border-slate-200">
                      <span className="font-mono text-[10px] font-bold text-emerald-600 uppercase block">Outcome:</span>
                      <p className="text-slate-800 font-semibold mt-0.5 leading-snug">{uc.result}</p>
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-200">
                  <div className="text-[10px] font-mono text-slate-400 uppercase font-bold mb-2">Measured Impact:</div>
                  <div className="grid grid-cols-2 gap-2">
                    {uc.metrics.map((m, mIdx) => (
                      <div key={mIdx} className="p-2 rounded-lg bg-white border border-slate-200 text-center">
                        <div className="text-xs font-mono font-bold text-blue-600">{m.value}</div>
                        <div className="text-[9px] text-slate-500 truncate">{m.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 06: CAPABILITY TELEMETRY & DASHBOARD PREVIEW ── */}
      <section id="dashboard" className="py-14 sm:py-20 bg-slate-900 text-white border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <span className="text-xs font-mono text-blue-400 uppercase tracking-widest font-bold">
              Operational Telemetry Mockup
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1 mb-2 font-heading">
              {data.dashboardTitle}
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed">
              {data.dashboardSubtitle} (Sample telemetry displayed for illustrative architectural reference).
            </p>
          </div>

          <div className="p-6 sm:p-8 rounded-3xl bg-slate-950 border border-slate-800 shadow-2xl space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-800 gap-3">
              <div className="flex items-center gap-3">
                <span className="w-3 h-3 rounded-full bg-blue-500 animate-pulse" />
                <span className="text-sm font-bold text-white font-mono uppercase tracking-wider">
                  {data.dashboardBadge}
                </span>
              </div>
              <span className="text-xs font-mono text-slate-400">
                Data Refresh: Real-Time · Consensus Engine v2.4
              </span>
            </div>

            {/* Metrics Ribbon */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {data.dashboardMetrics.map((dm, dIdx) => (
                <div key={dIdx} className="p-4 rounded-xl bg-slate-900/90 border border-slate-800">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[11px] font-mono text-slate-400 uppercase">{dm.label}</span>
                    {dm.change && (
                      <span className="text-[10px] font-mono text-emerald-400 font-bold bg-emerald-500/10 px-1.5 py-0.5 rounded">
                        {dm.change}
                      </span>
                    )}
                  </div>
                  <div className="text-xl sm:text-2xl font-mono font-bold text-white mb-1">{dm.value}</div>
                  <div className="text-[10px] text-slate-400 leading-tight">{dm.note}</div>
                </div>
              ))}
            </div>

            <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800 text-center text-xs text-slate-500 font-mono">
              Illustrative Enterprise View · Production metrics configure to authorized enterprise CRM and data warehouse feeds.
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 07: KPI & MEASUREMENT FRAMEWORK ── */}
      <section id="kpis" className="py-14 sm:py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <span className="text-xs font-mono text-blue-600 uppercase tracking-widest font-bold">
              Accountability & Measurement
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1 mb-3 font-heading">
              {data.kpiFrameworkTitle}
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Standardized formulas, measurement windows, and target baselines for objective commercial evaluation.
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-100 text-slate-700 font-mono uppercase tracking-wider text-[10px] border-b border-slate-200">
                  <tr>
                    <th className="p-3.5 sm:p-4">Metric</th>
                    <th className="p-3.5 sm:p-4">Formula / Calculation</th>
                    <th className="p-3.5 sm:p-4 hidden sm:table-cell">Definition</th>
                    <th className="p-3.5 sm:p-4">Window</th>
                    <th className="p-3.5 sm:p-4 text-right">Illustrative Target</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-700">
                  {data.kpis.map((kpi, kIdx) => (
                    <tr key={kIdx} className="hover:bg-slate-50/80 transition-colors">
                      <td className="p-3.5 sm:p-4 font-bold text-slate-900 whitespace-nowrap">
                        {kpi.name}
                      </td>
                      <td className="p-3.5 sm:p-4 font-mono text-[11px] text-blue-700">
                        {kpi.formula}
                      </td>
                      <td className="p-3.5 sm:p-4 text-slate-600 hidden sm:table-cell max-w-xs">
                        {kpi.definition}
                      </td>
                      <td className="p-3.5 sm:p-4 font-mono text-[11px] text-slate-500 whitespace-nowrap">
                        {kpi.reportingWindow}
                      </td>
                      <td className="p-3.5 sm:p-4 font-mono font-bold text-emerald-600 text-right whitespace-nowrap">
                        {kpi.illustrativeValue}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 08: DATA CONSIDERATIONS & HUMAN-IN-THE-LOOP GOVERNANCE ── */}
      <section id="governance" className="py-14 sm:py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono text-blue-600 uppercase tracking-widest font-bold">
              Enterprise Control & Safety
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1 mb-3 font-heading">
              {data.governanceTitle}
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              {data.governanceSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {data.governanceItems.map((gov, gIdx) => (
              <div key={gIdx} className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                <div className="flex items-center gap-2 pb-2 border-b border-slate-200">
                  <ShieldCheck className="w-4 h-4 text-blue-600" />
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-900">
                    {gov.area}
                  </span>
                </div>

                <div className="space-y-2 text-xs">
                  <div>
                    <span className="text-[10px] font-mono uppercase font-bold text-slate-400 block">System Policy:</span>
                    <p className="text-slate-700 leading-relaxed mt-0.5">{gov.policy}</p>
                  </div>

                  <div className="p-2.5 rounded-lg bg-blue-50/70 border border-blue-100 text-blue-950">
                    <span className="text-[10px] font-mono uppercase font-bold text-blue-700 block">Human Checkpoint:</span>
                    <p className="font-medium leading-relaxed mt-0.5">{gov.humanCheckpoint}</p>
                  </div>

                  <div className="text-[11px] text-slate-500">
                    <span className="font-mono font-bold text-slate-700">Audit:</span> {gov.auditTrail}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 09: RELATED CAPABILITIES IN THE AI NATIVE SALES SUITE ── */}
      <section className="py-14 sm:py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
            <div>
              <span className="text-xs font-mono text-blue-600 uppercase tracking-widest font-bold">
                Connected Revenue Operating Model
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1 mb-2 font-heading">
                Related Capabilities in the Suite
              </h2>
              <p className="text-slate-600 text-sm max-w-xl">
                Explore adjacent capabilities that integrate seamlessly with {data.title}.
              </p>
            </div>
            <Link
              to="/ai-native-sales"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-700 transition-colors shrink-0"
            >
              <span>View All 9 Capabilities</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {data.relatedCapabilities.map((rel, rIdx) => (
              <Link
                key={rIdx}
                to={rel.path}
                className="p-5 rounded-2xl bg-white border border-slate-200 hover:border-blue-400 hover:shadow-sm transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between pb-2 border-b border-slate-100 mb-3">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-2 py-0.5 rounded">
                      {rel.badge}
                    </span>
                    <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-2 font-heading">
                    {rel.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {rel.summary}
                  </p>
                </div>
                <span className="text-xs font-bold text-blue-600 group-hover:underline inline-flex items-center gap-1">
                  <span>Explore Capability</span>
                  <ChevronRight className="w-3 h-3" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 10: CLOSING EXECUTIVE BRIEFING CTA ── */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-slate-900 to-slate-950 text-white relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/15 border border-blue-400/30 text-blue-300 text-xs font-mono font-bold uppercase tracking-widest mb-4">
            <PageIcon className="w-3.5 h-3.5 text-blue-400" />
            <span>EXECUTIVE BRIEFING · {data.title}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4 font-heading">
            {data.closingCtaHeadline}
          </h2>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto mb-8 leading-relaxed">
            {data.closingCtaDescription}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/book-consultation"
              className="px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm transition-all shadow-lg shadow-blue-600/30 inline-flex items-center gap-2 cursor-pointer"
            >
              <span>Schedule Strategic Diagnostic</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              to="/ai-native-sales"
              className="px-6 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-200 font-bold text-sm transition-all inline-flex items-center gap-2"
            >
              <span>Explore AI Native Sales Overview</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
