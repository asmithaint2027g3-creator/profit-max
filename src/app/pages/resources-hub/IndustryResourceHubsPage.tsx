import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Factory,
  Car,
  HeartPulse,
  Landmark,
  Shield,
  ShoppingBag,
  Truck,
  Radio,
  Flame,
  Briefcase,
  Cloud,
  ArrowRight,
  CheckCircle2,
  TrendingUp,
  BarChart3,
  BrainCircuit,
  Zap,
  Target,
  Layers,
  ArrowUpRight,
  ShieldCheck,
  Activity,
  Calculator,
  Compass,
  FileText,
  Sliders,
  Sparkles,
  ChevronRight,
  Scale
} from 'lucide-react';
import {
  INDUSTRY_RESOURCE_HUBS_DATA,
  INDUSTRY_VALUE_PROPOSITIONS,
  CROSS_INDUSTRY_COMPARISON,
  IndustryHubItem
} from '../../../data/industryResourceHubsData';
import { trackEvent } from '../../../lib/analytics';

export default function IndustryResourceHubsPage() {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState<string>(INDUSTRY_RESOURCE_HUBS_DATA[0].slug);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Industry Resource Hubs | ProfitMachines Revenue Intelligence';
    trackEvent({ eventName: 'PAGE_VIEW_INDUSTRY_RESOURCE_HUBS', category: 'NAVIGATION' });

    // Handle hash scroll smoothly if coming from navigation or internal anchor
    if (location.hash) {
      const targetId = location.hash.replace('#', '');
      setActiveTab(targetId);
      const element = document.getElementById(targetId);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 150);
      }
    }
  }, [location]);

  const scrollToSection = (id: string) => {
    setActiveTab(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 overflow-x-hidden selection:bg-blue-600 selection:text-white">

      {/* ── 1. MAIN HERO SECTION ── */}
      <section className="relative pt-32 pb-20 lg:pt-36 lg:pb-24 bg-gradient-to-b from-slate-950 via-slate-900 to-blue-950 text-white overflow-hidden">
        {/* Glow & subtle grid accents */}
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-blue-600/15 rounded-full blur-[150px] pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[130px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Column: Headlines & Positioning */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/15 border border-blue-400/30 text-blue-300 font-mono text-xs font-bold tracking-widest uppercase">
                <Factory className="w-3.5 h-3.5 text-blue-400" />
                Industry Knowledge & Revenue Intelligence
              </div>

              <div className="space-y-3">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.15] font-heading">
                  Industry Intelligence. <br />
                  Revenue Opportunities. <br />
                  <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-sky-300 bg-clip-text text-transparent">
                    Measurable Business Growth.
                  </span>
                </h1>
                <p className="text-base sm:text-lg font-bold text-slate-300 font-heading">
                  Vertical Revenue Operating Systems Engineered for 10 Foundational Global Industries
                </p>
              </div>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl">
                Generic sales playbooks fail when confronted with complex industry dynamics, procurement committees, and regulatory compliance. Explore vertical-specific market challenges, quantitative models, AI automation, and empirical revenue architectures designed to systematically unlock enterprise profit pools.
              </p>

              {/* Dual CTAs */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <button
                  onClick={() => scrollToSection('industry-quick-nav')}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm transition-all shadow-lg shadow-blue-600/30 active:scale-98 cursor-pointer"
                >
                  <span>Explore All 10 Industry Hubs</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <Link
                  to="/book-consultation"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-bold text-sm border border-white/20 transition-all active:scale-98"
                >
                  <span>Book an Industry Consultation</span>
                  <ArrowUpRight className="w-4 h-4 text-slate-300" />
                </Link>
              </div>

              {/* KPI Badges */}
              <div className="pt-4 flex flex-wrap items-center gap-6 text-xs text-slate-300 border-t border-slate-800/80">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>10 Complete Vertical Sectors</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-400" />
                  <span>25+ Mathematical Revenue Models</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-indigo-400" />
                  <span>Zero Generic Templates</span>
                </div>
              </div>
            </div>

            {/* Right Column: Interactive Quick Card */}
            <div className="lg:col-span-5">
              <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 backdrop-blur-md shadow-2xl space-y-5">
                <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-400">
                    Revenue Architecture Matrix
                  </span>
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-bold">
                    Live Telemetry
                  </span>
                </div>

                <div className="space-y-3">
                  <div className="p-3.5 rounded-xl bg-slate-800/60 border border-slate-700/60 space-y-1">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-bold text-white">Targeted Market Coverage</span>
                      <span className="text-blue-400 font-mono font-bold">10 Verticals</span>
                    </div>
                    <p className="text-[11px] text-slate-400">
                      SaaS, Manufacturing, Banking, Healthcare, Automotive, Logistics, Retail, Telecom, CleanTech & Corporate Services.
                    </p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-800/60 border border-slate-700/60 space-y-1">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-bold text-white">Average Deal Velocity Gain</span>
                      <span className="text-emerald-400 font-mono font-bold">+38% Faster</span>
                    </div>
                    <p className="text-[11px] text-slate-400">
                      Achieved through pre-packaged compliance dossiers and multi-threaded committee rooms.
                    </p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-800/60 border border-slate-700/60 space-y-1">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-bold text-white">Net Margin Protection</span>
                      <span className="text-indigo-400 font-mono font-bold">92% Realization</span>
                    </div>
                    <p className="text-[11px] text-slate-400">
                      Systematically eliminate rogue discounting and unpriced pre-sales engineering hours.
                    </p>
                  </div>
                </div>

                <div className="pt-2">
                  <Link
                    to="/offerings"
                    className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-blue-600/20 hover:bg-blue-600/30 text-blue-300 text-xs font-bold border border-blue-500/30 transition-colors"
                  >
                    <span>View ProfitMachines Core Platform Engines</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── 2. INDUSTRY INTELLIGENCE INTRODUCTION (4 VALUE CARDS) ── */}
      <section className="py-16 bg-slate-50 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-2">
            <span className="text-xs font-mono font-extrabold text-blue-600 uppercase tracking-widest">
              Strategic Foundation
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading tracking-tight">
              Why Industry-Specific Revenue Architecture Matters
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Enterprise buyers do not purchase generic software or consulting. They invest in partners who understand their specific unit economics, regulatory risk profiles, and operational workflows.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {INDUSTRY_VALUE_PROPOSITIONS.map((prop, idx) => {
              const IconComp = prop.icon;
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
                      {prop.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {prop.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 3. QUICK NAVIGATION (10 INDUSTRY ANCHOR TABS) ── */}
      <section id="industry-quick-nav" className="sticky top-20 z-30 bg-white/95 backdrop-blur-md border-b border-slate-200/90 py-3 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4 overflow-x-auto no-scrollbar py-1">
            <span className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider shrink-0 hidden md:inline">
              Jump to Industry:
            </span>
            <div className="flex items-center gap-2 shrink-0">
              {INDUSTRY_RESOURCE_HUBS_DATA.map((ind) => {
                const IconComp = ind.icon;
                const isActive = activeTab === ind.slug;
                return (
                  <button
                    key={ind.id}
                    onClick={() => scrollToSection(ind.slug)}
                    className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                      isActive
                        ? 'bg-blue-600 text-white shadow-xs'
                        : 'bg-slate-100 hover:bg-slate-200/80 text-slate-700'
                    }`}
                  >
                    <IconComp className="w-3.5 h-3.5" />
                    <span>{ind.title.split('&')[0].trim()}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. TEN DETAILED INDUSTRY SECTIONS ── */}
      <div className="space-y-24 py-16">
        {INDUSTRY_RESOURCE_HUBS_DATA.map((industry, index) => {
          const IndustryIcon = industry.icon;
          return (
            <section
              key={industry.id}
              id={industry.slug}
              className="scroll-mt-36 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
            >
              <div className="rounded-3xl bg-white border border-slate-200/90 shadow-sm overflow-hidden">

                {/* ── Section Header ── */}
                <div className="p-6 sm:p-8 lg:p-10 bg-gradient-to-r from-slate-900 via-slate-850 to-blue-950 text-white border-b border-slate-800">
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                    <div className="space-y-3 max-w-3xl">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-2xl bg-blue-600/30 border border-blue-400/30 text-blue-300 flex items-center justify-center shrink-0">
                          <IndustryIcon className="w-6 h-6" />
                        </div>
                        <div>
                          <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-blue-300">
                            {industry.sectorTag}
                          </span>
                          <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-heading tracking-tight">
                            {industry.title}
                          </h2>
                        </div>
                      </div>
                      <p className="text-base sm:text-lg font-bold text-blue-200 font-heading">
                        {industry.headline}
                      </p>
                      <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                        {industry.executiveSummary}
                      </p>
                    </div>

                    {/* Quick CTA inside header */}
                    <div className="shrink-0 space-y-2 text-right">
                      <Link
                        to="/book-consultation"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs transition-colors shadow-xs"
                      >
                        <span>Schedule Advisory Session</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                      <p className="text-[11px] font-mono text-slate-400">
                        Tailored to {industry.title}
                      </p>
                    </div>
                  </div>

                  {/* 4 Quantitative Key Metrics */}
                  <div className="mt-8 grid grid-cols-2 lg:grid-cols-4 gap-4 pt-6 border-t border-slate-800/80">
                    {industry.keyMetrics.map((met, mIdx) => (
                      <div key={mIdx} className="p-3.5 rounded-xl bg-slate-800/50 border border-slate-700/60">
                        <span className="text-[11px] text-slate-400 block font-medium">
                          {met.label}
                        </span>
                        <span className="text-xl sm:text-2xl font-black text-white font-heading mt-0.5 block">
                          {met.value}
                        </span>
                        <span className="text-[10px] text-emerald-400 font-mono mt-0.5 block">
                          {met.context}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* ── Section Body ── */}
                <div className="p-6 sm:p-8 lg:p-10 space-y-12 bg-white">

                  {/* Market Dynamics & Executive Context */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <BarChart3 className="w-4 h-4 text-blue-600" />
                      <h3 className="text-lg font-extrabold text-slate-900 font-heading">
                        Market Dynamics & Executive Context
                      </h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {industry.marketDynamics.map((dyn, dIdx) => (
                        <div
                          key={dIdx}
                          className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-3"
                        >
                          <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                          <span className="text-xs text-slate-700 leading-relaxed font-medium">
                            {dyn}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Revenue Challenges & Opportunity Discovery (2-column layout) */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Revenue & Growth Challenges */}
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Activity className="w-4 h-4 text-rose-600" />
                          <h3 className="text-lg font-extrabold text-slate-900 font-heading">
                            Revenue & Growth Challenges
                          </h3>
                        </div>
                        <span className="text-[10px] font-mono font-bold text-rose-600 uppercase">
                          Friction Points
                        </span>
                      </div>

                      <div className="space-y-3">
                        {industry.revenueChallenges.map((chal, cIdx) => (
                          <div
                            key={cIdx}
                            className="p-4 rounded-xl bg-rose-50/30 border border-rose-100 hover:border-rose-200 transition-colors space-y-1.5"
                          >
                            <h4 className="text-xs font-bold text-slate-900 font-heading">
                              {chal.title}
                            </h4>
                            <p className="text-[11px] text-slate-600 leading-relaxed">
                              {chal.description}
                            </p>
                            <div className="pt-1 flex items-center gap-1.5 text-[11px] font-mono font-bold text-rose-700">
                              <span className="uppercase text-[9px] px-1.5 py-0.5 rounded bg-rose-100/80">Impact</span>
                              <span>{chal.impact}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Revenue Opportunity Discovery */}
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <TrendingUp className="w-4 h-4 text-emerald-600" />
                          <h3 className="text-lg font-extrabold text-slate-900 font-heading">
                            Revenue Opportunity Discovery
                          </h3>
                        </div>
                        <span className="text-[10px] font-mono font-bold text-emerald-600 uppercase">
                          Upside Levers
                        </span>
                      </div>

                      <div className="space-y-3">
                        {industry.revenueOpportunities.map((opp, oIdx) => (
                          <div
                            key={oIdx}
                            className="p-4 rounded-xl bg-emerald-50/30 border border-emerald-100 hover:border-emerald-200 transition-colors space-y-1.5"
                          >
                            <h4 className="text-xs font-bold text-slate-900 font-heading">
                              {opp.title}
                            </h4>
                            <p className="text-[11px] text-slate-600 leading-relaxed">
                              {opp.description}
                            </p>
                            <div className="pt-1 flex items-center gap-1.5 text-[11px] font-mono font-bold text-emerald-700">
                              <span className="uppercase text-[9px] px-1.5 py-0.5 rounded bg-emerald-100/80">Upside</span>
                              <span>{opp.upside}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* ProfitMachines Solutions & Platform Capabilities */}
                  <div className="space-y-4 p-6 rounded-2xl bg-blue-50/40 border border-blue-100">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Target className="w-4 h-4 text-blue-600" />
                        <h3 className="text-lg font-extrabold text-slate-900 font-heading">
                          ProfitMachines Capabilities & Solutions
                        </h3>
                      </div>
                      <Link
                        to="/offerings"
                        className="text-xs font-bold text-blue-600 hover:text-blue-700 inline-flex items-center gap-1"
                      >
                        <span>Explore All Offerings</span>
                        <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {industry.profitMachinesSolutions.map((sol, sIdx) => (
                        <div key={sIdx} className="p-4 rounded-xl bg-white border border-blue-200/80 shadow-2xs space-y-2">
                          <div className="flex items-center justify-between">
                            <h4 className="text-xs font-bold text-slate-900 font-heading">
                              {sol.title}
                            </h4>
                            <span className="text-[9px] font-mono px-2 py-0.5 rounded-full bg-blue-100 text-blue-700 font-bold uppercase">
                              {sol.offeringName}
                            </span>
                          </div>
                          <p className="text-[11px] text-slate-600 leading-relaxed">
                            {sol.description}
                          </p>
                          <div className="pt-2 border-t border-slate-100 space-y-1">
                            <span className="text-[10px] font-mono font-bold uppercase text-slate-400">Core Deliverables:</span>
                            <div className="flex flex-wrap gap-1.5">
                              {sol.deliverables.map((del, dIdx) => (
                                <span key={dIdx} className="text-[10px] px-2 py-0.5 rounded bg-slate-100 text-slate-700 font-medium">
                                  {del}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Revenue Frameworks & Methodologies */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <Scale className="w-4 h-4 text-indigo-600" />
                      <h3 className="text-lg font-extrabold text-slate-900 font-heading">
                        Revenue Frameworks & Methodologies
                      </h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {industry.frameworks.map((frm, fIdx) => (
                        <div key={fIdx} className="p-5 rounded-2xl bg-slate-50/70 border border-slate-200/90 space-y-3">
                          <h4 className="text-sm font-bold text-slate-900 font-heading">
                            {frm.name}
                          </h4>
                          {frm.formula && (
                            <div className="p-2.5 rounded-lg bg-white border border-slate-200 font-mono text-[11px] text-blue-700 font-bold">
                              {frm.formula}
                            </div>
                          )}
                          <p className="text-xs text-slate-600">
                            <span className="font-bold text-slate-800">Objective:</span> {frm.objective}
                          </p>
                          <div className="space-y-1.5 pt-1">
                            <span className="text-[10px] font-mono font-bold uppercase text-slate-500 block">Execution Steps:</span>
                            {frm.steps.map((st, sIdx) => (
                              <div key={sIdx} className="flex items-start gap-2 text-xs text-slate-700">
                                <span className="w-4 h-4 rounded-full bg-blue-100 text-blue-700 font-mono text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                                  {sIdx + 1}
                                </span>
                                <span className="leading-snug">{st}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Industry Analytics, KPIs & Benchmark Models */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <BarChart3 className="w-4 h-4 text-blue-600" />
                        <h3 className="text-lg font-extrabold text-slate-900 font-heading">
                          Industry Analytics, KPIs & Models
                        </h3>
                      </div>
                      <span className="text-xs text-slate-500 font-mono">
                        Target Performance Benchmarks
                      </span>
                    </div>

                    <div className="overflow-x-auto rounded-xl border border-slate-200/90">
                      <table className="w-full text-left text-xs">
                        <thead className="bg-slate-50 border-b border-slate-200 text-slate-600 font-mono font-bold text-[10px] uppercase">
                          <tr>
                            <th className="p-3">Metric Name</th>
                            <th className="p-3">Industry Benchmark</th>
                            <th className="p-3">ProfitMachines Target</th>
                            <th className="p-3">Measurement Cadence</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 font-medium">
                          {industry.kpis.map((kpi, kIdx) => (
                            <tr key={kIdx} className="hover:bg-slate-50/50">
                              <td className="p-3 font-bold text-slate-900">{kpi.metric}</td>
                              <td className="p-3 text-slate-500 font-mono">{kpi.benchmark}</td>
                              <td className="p-3 text-emerald-600 font-mono font-bold">{kpi.target}</td>
                              <td className="p-3 text-slate-600">{kpi.cadence}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* AI, Automation & Revenue Intelligence */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <BrainCircuit className="w-4 h-4 text-purple-600" />
                      <h3 className="text-lg font-extrabold text-slate-900 font-heading">
                        AI, Automation & Revenue Intelligence
                      </h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {industry.aiAutomationEngines.map((ai, aIdx) => (
                        <div key={aIdx} className="p-4 rounded-xl bg-purple-50/20 border border-purple-100 flex items-start gap-3">
                          <div className="w-8 h-8 rounded-lg bg-purple-100 text-purple-700 flex items-center justify-center shrink-0 mt-0.5">
                            <BrainCircuit className="w-4 h-4" />
                          </div>
                          <div className="space-y-1">
                            <div className="flex items-center gap-2">
                              <h4 className="text-xs font-bold text-slate-900 font-heading">
                                {ai.title}
                              </h4>
                              <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-purple-100 text-purple-700 font-bold uppercase">
                                {ai.capability}
                              </span>
                            </div>
                            <p className="text-[11px] text-slate-600 leading-relaxed">
                              {ai.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Practical Business Use Cases & Scenarios */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-amber-500" />
                      <h3 className="text-lg font-extrabold text-slate-900 font-heading">
                        Industry Use Cases & Scenarios
                      </h3>
                    </div>

                    <div className="grid grid-cols-1 gap-4">
                      {industry.useCases.map((uc, uIdx) => (
                        <div key={uIdx} className="p-5 rounded-2xl bg-slate-900 text-white space-y-4">
                          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-3">
                            <div>
                              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-amber-400">
                                Enterprise Case Analysis
                              </span>
                              <h4 className="text-base font-bold text-white font-heading mt-0.5">
                                {uc.title}
                              </h4>
                            </div>
                            <span className="text-xs font-mono px-2.5 py-1 rounded bg-slate-800 text-slate-300 font-semibold shrink-0">
                              {uc.companyProfile}
                            </span>
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                            <div className="space-y-1">
                              <span className="font-bold text-rose-300">Baseline Challenge:</span>
                              <p className="text-slate-300 leading-relaxed">{uc.challenge}</p>
                            </div>
                            <div className="space-y-1">
                              <span className="font-bold text-blue-300">ProfitMachines Intervention:</span>
                              <p className="text-slate-300 leading-relaxed">{uc.solution}</p>
                            </div>
                          </div>

                          <div className="pt-3 border-t border-slate-800 flex flex-wrap items-center gap-6 text-xs">
                            <span className="font-mono font-bold text-emerald-400 uppercase text-[10px]">Measurable Outcomes:</span>
                            {uc.results.map((res, rIdx) => (
                              <div key={rIdx} className="flex items-center gap-2">
                                <span className="text-slate-400">{res.metric}:</span>
                                <span className="font-mono font-bold text-emerald-300">{res.change}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Industry Resources, Tools & Next Steps */}
                  <div className="pt-4 border-t border-slate-100 flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="space-y-1">
                      <span className="text-xs font-bold text-slate-800">
                        Interactive Diagnostic Tools for {industry.title}:
                      </span>
                      <div className="flex flex-wrap items-center gap-2">
                        {industry.toolsAndResources.map((tl, tIdx) => (
                          <Link
                            key={tIdx}
                            to={tl.actionUrl}
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold transition-colors"
                          >
                            <Calculator className="w-3 h-3 text-blue-600" />
                            <span>{tl.name}</span>
                          </Link>
                        ))}
                      </div>
                    </div>

                    <div className="shrink-0 flex items-center gap-3">
                      <Link
                        to="/book-consultation"
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold transition-all shadow-xs"
                      >
                        <span>Schedule {industry.title.split('&')[0]} Advisory</span>
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

      {/* ── 5. CROSS-INDUSTRY REVENUE INTELLIGENCE MATRIX ── */}
      <section className="py-20 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <span className="text-xs font-mono font-extrabold text-blue-600 uppercase tracking-widest">
              Comparative Analysis
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading tracking-tight">
              Cross-Industry Revenue Intelligence Comparison
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Evaluate how buying committees, sales cycle durations, pricing models, and margin leakage risks diverge across the ten foundational industries.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl bg-white border border-slate-200/90 shadow-sm">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-900 text-white font-mono text-[11px] uppercase tracking-wider">
                <tr>
                  <th className="p-4">Industry Sector</th>
                  <th className="p-4">Typical Cycle</th>
                  <th className="p-4">Buying Committee</th>
                  <th className="p-4">Primary Revenue Driver</th>
                  <th className="p-4">Dominant Pricing Model</th>
                  <th className="p-4">Key Margin Leakage Risk</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-medium text-slate-700">
                {CROSS_INDUSTRY_COMPARISON.map((row, rIdx) => (
                  <tr key={rIdx} className="hover:bg-slate-50/80 transition-colors">
                    <td className="p-4 font-bold text-slate-900 whitespace-nowrap">{row.industry}</td>
                    <td className="p-4 font-mono text-blue-600 font-bold whitespace-nowrap">{row.cycleLength}</td>
                    <td className="p-4 whitespace-nowrap">{row.committeeSize}</td>
                    <td className="p-4">{row.primaryDriver}</td>
                    <td className="p-4">{row.pricingModel}</td>
                    <td className="p-4 text-rose-600 font-medium">{row.marginLeakageRisk}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── 6. PROFITMACHINES REVENUE TRANSFORMATION PLATFORM INTEGRATION ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <span className="text-xs font-mono font-extrabold text-blue-600 uppercase tracking-widest">
              Unified Revenue Platform
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading tracking-tight">
              Connect Industry Intelligence to Platform Execution
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Industry intelligence fuels ProfitMachines 8 core revenue engines, turning market insights into deterministic growth.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Profit Pool Discovery', path: '/offerings#profit-pool-discovery', desc: 'Find hidden unit-margin leakage and under-monetized customer cohorts across your vertical.' },
              { title: 'Demand Engineering', path: '/offerings#demand-engineering', desc: 'Capture dark-funnel buyer intent and orchestrate multi-touch account engagement.' },
              { title: 'Sales Acceleration', path: '/offerings#sales-acceleration', desc: 'Multi-threaded buying committee consensus rooms that eliminate deal stagnation.' },
              { title: 'Revenue Operations', path: '/offerings#revenue-operations', desc: 'Unified telemetry, deterministic quota pacing, and cross-functional pipeline discipline.' },
              { title: 'GTM Transformation', path: '/offerings#gtm-transformation', desc: 'Pivot from commodity transactional quoting to high-margin recurring advisory models.' },
              { title: 'Customer Success Engine', path: '/offerings#customer-success-engine', desc: 'Proactive consumption telemetry to defend renewals and unlock automated expansion.' },
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
            Turn Industry Intelligence Into Revenue Growth
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            Whether you operate in enterprise software, advanced manufacturing, healthcare, or financial services, ProfitMachines helps you discover hidden profit pools and engineer predictable, scalable revenue.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/book-consultation"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm transition-all shadow-lg shadow-blue-600/30 active:scale-98"
            >
              <span>Book an Industry Consultation</span>
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
            <span>Direct NDA Protection</span>
            <span>•</span>
            <span>Zero Long-Term Lock-In</span>
            <span>•</span>
            <span>Verified Boardroom Outcomes</span>
          </div>
        </div>
      </section>

    </div>
  );
}

