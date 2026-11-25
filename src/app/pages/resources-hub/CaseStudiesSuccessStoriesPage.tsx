import React, { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import {
  Briefcase, Building2, Layers, Cpu, TrendingUp, Award,
  ArrowRight, ArrowUpRight, CheckCircle2, ChevronRight,
  ShieldCheck, BarChart3, Target, Sparkles, Filter,
  FileText, Star, Clock, Compass, DollarSign
} from 'lucide-react';
import { trackEvent } from '../../../lib/analytics';
import {
  APPROVED_CASE_STUDIES,
  INDUSTRY_CASE_STUDIES_DATA,
  FUNCTION_CASE_STUDIES_DATA,
  TECHNOLOGY_CASE_STUDIES_DATA,
  OUTCOME_CASE_STUDIES_DATA,
  TESTIMONIALS_DATA
} from '../../../data/caseStudiesData';

const industryImages: Record<string, string> = {
  saas: '/images/industry-saas.png',
  manufacturing: '/images/industry-manufacturing.png',
  'financial-services': '/images/industry-fintech.png',
  healthcare: '/images/industry-healthcare.png',
  'professional-services': '/images/hero-data-intelligence.png',
  'retail-ecommerce': '/images/industry-retail.png'
};

const functionImages: Record<string, string> = {
  'sales-bd': '/images/hero-revenue-acceleration.png',
  'marketing-demand': '/images/demand-pulse-dashboard.png',
  revops: '/images/hero-data-intelligence.png',
  'customer-success': '/images/home-hero-dashboard.png',
  'pricing-strategy': '/images/hero-profit-pool.png',
  'executive-management': '/images/hero-end-to-end-transformation.png'
};

const techImages: Record<string, string> = {
  'ai-native-sales': '/images/hero-agentic-ai.png',
  'ai-prospecting': '/images/demand-pulse-dashboard.png',
  'intelligent-sales-agents': '/images/hero-ai-transformation.png',
  'revenue-intelligence': '/images/hero-data-intelligence.png',
  'demand-intelligence': '/images/revenue-acceleration-engine.png',
  'revops-automation': '/images/outcomes-metrics.png',
  'decision-intelligence': '/images/hero-profit-pool.png',
  'integrated-gtm-systems': '/images/home-hero-dashboard.png'
};

const outcomeImages: Record<string, string> = {
  'revenue-growth': '/images/hero-revenue-acceleration.png',
  'pipeline-growth': '/images/demand-pulse-dashboard.png',
  'lead-quality': '/images/hero-profit-pool.png',
  'cycle-optimization': '/images/revenue-acceleration-engine.png',
  'conversion-improvement': '/images/hero-ai-transformation.png',
  'cac-efficiency': '/images/outcomes-metrics.png',
  'retention-expansion': '/images/home-hero-dashboard.png',
  'visibility-forecasting': '/images/hero-data-intelligence.png',
  'operational-efficiency': '/images/hero-end-to-end-transformation.png'
};

export default function CaseStudiesSuccessStoriesPage() {
  const location = useLocation();

  useEffect(() => {
    document.title = 'Case Studies & Success Stories | ProfitMachines Resources';
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const el = document.getElementById(id);
      if (el) {
        setTimeout(() => {
          const navOffset = 95;
          const pos = el.getBoundingClientRect().top + window.pageYOffset - navOffset;
          window.scrollTo({ top: Math.max(0, pos), behavior: 'smooth' });
        }, 150);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location.hash, location.pathname]);

  const submenus = [
    { id: 'case-studies-by-industry', title: 'Case Studies by Industry', icon: Building2, count: INDUSTRY_CASE_STUDIES_DATA.length },
    { id: 'case-studies-by-function', title: 'Case Studies by Function', icon: Layers, count: FUNCTION_CASE_STUDIES_DATA.length },
    { id: 'case-studies-by-technology', title: 'Case Studies by Technology', icon: Cpu, count: TECHNOLOGY_CASE_STUDIES_DATA.length },
    { id: 'case-studies-by-business-outcome', title: 'Case Studies by Business Outcome', icon: TrendingUp, count: OUTCOME_CASE_STUDIES_DATA.length },
    { id: 'customer-success-stories', title: 'Customer Success Stories', icon: Award, count: APPROVED_CASE_STUDIES.length }
  ];

  const handleAnchorClick = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const navOffset = 95;
      const pos = el.getBoundingClientRect().top + window.pageYOffset - navOffset;
      window.scrollTo({ top: Math.max(0, pos), behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-600 selection:text-white">
      {/* ── BREADCRUMB ── */}
      <div className="border-b border-slate-200 bg-slate-50/90 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center gap-2 text-xs text-slate-500 font-mono">
            <Link to="/" className="hover:text-blue-600 transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <Link to="/resources-hub" className="hover:text-blue-600 transition-colors">Resources</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-blue-600 font-bold">Case Studies & Success Stories</span>
          </nav>
        </div>
      </div>

      {/* ── HERO BANNER (OFFERINGS PRESTIGE DARK PANEL) ── */}
      <section className="relative pt-12 pb-16 md:pt-16 md:pb-20 bg-slate-950 text-white border-b border-slate-800 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 pointer-events-none" />
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-mono font-bold uppercase tracking-widest mb-5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Verified Enterprise Transformations</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight font-heading mb-4">
              Case Studies &{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-indigo-300">
                Success Stories
              </span>
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl font-normal">
              Empirical evidence of enterprise margin expansion, dark intent capture, pipeline acceleration, and automated commercial operations across Global 2000 organizations.
            </p>

            {/* Quick KPI stats */}
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800">
                <div className="text-xl sm:text-2xl font-black text-white font-mono">$1.4B+</div>
                <div className="text-[11px] text-slate-400 font-medium">Pipeline Value Unlocked</div>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800">
                <div className="text-xl sm:text-2xl font-black text-emerald-400 font-mono">+38.4%</div>
                <div className="text-[11px] text-slate-400 font-medium">Avg Margin Improvement</div>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800">
                <div className="text-xl sm:text-2xl font-black text-blue-400 font-mono">3.8x</div>
                <div className="text-[11px] text-slate-400 font-medium">Target Account Velocity</div>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800">
                <div className="text-xl sm:text-2xl font-black text-indigo-300 font-mono">100%</div>
                <div className="text-[11px] text-slate-400 font-medium">Audited Financial Attribution</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── IN-PAGE ANCHOR JUMP BAR (OFFERINGS LIGHT STYLE, NON-STICKY) ── */}
      <section className="border-b border-slate-200 bg-slate-50/90 py-3.5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider mb-2">
            Table of Contents · 5 Dedicated Sections
          </div>
          <div className="flex flex-wrap items-center gap-2">
            {submenus.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => handleAnchorClick(item.id)}
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-white hover:bg-blue-600 hover:text-white border border-slate-200 hover:border-blue-500 text-slate-700 shadow-2xs transition-all cursor-pointer"
                >
                  <Icon className="w-3.5 h-3.5 text-blue-600" />
                  <span>{item.title}</span>
                  <span className="px-1.5 py-0.2 rounded bg-slate-100 text-[10px] text-slate-600 font-mono">
                    {item.count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CONTENT CONTAINER (CLEAN OFFERINGS LIGHT CANVAS) ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">

        {/* ══════════════════════════════════════════════════════════════════
            CASE STUDIES BY INDUSTRY
        ══════════════════════════════════════════════════════════════════ */}
        <section id="case-studies-by-industry" className="scroll-mt-28 space-y-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between pb-4 border-b border-slate-200 gap-3">
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-heading">
                Case Studies by Industry
              </h2>
              <p className="text-sm sm:text-base text-slate-600 mt-1 max-w-3xl leading-relaxed">
                Detailed dossiers illustrating how vertical-specific constraints, compliance frameworks, and go-to-market motions were re-engineered.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {INDUSTRY_CASE_STUDIES_DATA.map((item, idx) => {
              const imageSrc = industryImages[item.id] || '/images/hero-revenue-acceleration.png';
              const targetSlug = item.relevantStorySlugs?.[0] || 'enterprise-saas-pipeline-growth';

              return (
                <div
                  key={idx}
                  className="group rounded-2xl bg-white border border-slate-200/90 hover:border-blue-400 hover:shadow-xl hover:-translate-y-0.5 p-5 flex flex-col justify-between transition-all duration-200 shadow-sm"
                >
                  <div className="space-y-4">
                    {/* Visual Card Image */}
                    <div className="relative h-44 rounded-xl overflow-hidden border border-slate-200/80 bg-slate-100">
                      <img
                        src={imageSrc}
                        alt={item.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                      <div className="absolute top-2.5 left-2.5">
                        <span className="px-2.5 py-1 rounded-md text-[11px] font-mono font-bold bg-white/95 text-blue-700 shadow-xs border border-blue-200/60 backdrop-blur-xs">
                          {item.badge}
                        </span>
                      </div>
                      <div className="absolute top-2.5 right-2.5">
                        <span className="px-2.5 py-1 rounded-md text-xs font-mono font-bold bg-emerald-600 text-white shadow-xs">
                          {item.stat}
                        </span>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-bold text-slate-900 font-heading leading-snug">
                        {item.name}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal mt-1.5">
                        {item.description}
                      </p>
                    </div>

                    <div className="p-3.5 rounded-xl bg-slate-50/90 border border-slate-200/80 text-xs space-y-2 text-slate-700">
                      <div>
                        <span className="font-bold text-slate-900 font-heading">Core Challenges: </span>
                        <span className="text-slate-600">{item.challenges.join(' · ')}</span>
                      </div>
                      <div>
                        <span className="font-bold text-slate-900 font-heading">Revenue Model: </span>
                        <span className="text-slate-600">{item.revenueModel}</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
                    <div className="text-[11px] text-slate-500 font-mono">
                      Impact: <span className="text-slate-900 font-bold">{item.statLabel}</span>
                    </div>
                    <Link
                      to={`/case-studies/stories/${targetSlug}`}
                      className="inline-flex items-center gap-1 text-xs font-bold font-mono text-blue-600 hover:text-blue-700 group/link cursor-pointer"
                    >
                      <span>Read Study</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 transition-transform" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════════
            CASE STUDIES BY FUNCTION
        ══════════════════════════════════════════════════════════════════ */}
        <section id="case-studies-by-function" className="scroll-mt-28 space-y-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between pb-4 border-b border-slate-200 gap-3">
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-heading">
                Case Studies by Function
              </h2>
              <p className="text-sm sm:text-base text-slate-600 mt-1 max-w-3xl leading-relaxed">
                Forensic reviews categorized by departmental role: Enterprise Sales, RevOps, Demand Generation, Customer Success, and Pricing Architecture.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {FUNCTION_CASE_STUDIES_DATA.map((item, idx) => {
              const imageSrc = functionImages[item.id] || '/images/hero-agentic-ai.png';
              const targetSlug = item.relevantStorySlugs?.[0] || 'enterprise-saas-pipeline-growth';

              return (
                <div
                  key={idx}
                  className="group rounded-2xl bg-white border border-slate-200/90 hover:border-indigo-400 hover:shadow-xl hover:-translate-y-0.5 p-5 flex flex-col justify-between transition-all duration-200 shadow-sm"
                >
                  <div className="space-y-4">
                    {/* Visual Card Image */}
                    <div className="relative h-44 rounded-xl overflow-hidden border border-slate-200/80 bg-slate-100">
                      <img
                        src={imageSrc}
                        alt={item.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                      <div className="absolute top-2.5 left-2.5">
                        <span className="px-2.5 py-1 rounded-md text-[11px] font-mono font-bold bg-white/95 text-indigo-700 shadow-xs border border-indigo-200/60 backdrop-blur-xs">
                          {item.badge}
                        </span>
                      </div>
                      <div className="absolute top-2.5 right-2.5">
                        <span className="px-2.5 py-1 rounded-md text-xs font-mono font-bold bg-indigo-600 text-white shadow-xs">
                          {item.kpi}
                        </span>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-bold text-slate-900 font-heading leading-snug">
                        {item.name}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal mt-1.5">
                        {item.description}
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                      <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                        <div className="text-[10px] text-slate-500 uppercase font-mono font-bold">Baseline Bottlenecks</div>
                        <div className="font-semibold text-slate-800 mt-1">{item.bottlenecks.join(' · ')}</div>
                      </div>
                      <div className="p-3.5 rounded-xl bg-emerald-50/70 border border-emerald-200">
                        <div className="text-[10px] text-emerald-800 uppercase font-mono font-bold">Post-Deployment Solution</div>
                        <div className="font-bold text-emerald-900 mt-1">{item.enablement}</div>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-[11px] text-slate-500 font-mono">Impact: <span className="font-bold text-slate-800">{item.kpi}</span></span>
                    <Link
                      to={`/case-studies/stories/${targetSlug}`}
                      className="inline-flex items-center gap-1 text-xs font-bold font-mono text-indigo-600 hover:text-indigo-700 group/link cursor-pointer"
                    >
                      <span>View Functional Brief</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 transition-transform" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════════
            CASE STUDIES BY TECHNOLOGY
        ══════════════════════════════════════════════════════════════════ */}
        <section id="case-studies-by-technology" className="scroll-mt-28 space-y-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between pb-4 border-b border-slate-200 gap-3">
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-heading">
                Case Studies by Technology
              </h2>
              <p className="text-sm sm:text-base text-slate-600 mt-1 max-w-3xl leading-relaxed">
                Transformations powered by AI agents, autonomous CRM reconciliation, intent meshes, CPQ engines, and real-time revenue telemetry.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TECHNOLOGY_CASE_STUDIES_DATA.map((item, idx) => {
              const imageSrc = techImages[item.id] || '/images/hero-agentic-ai.png';
              const targetSlug = item.relevantStorySlugs?.[0] || 'financial-services-ai-transformation';

              return (
                <div
                  key={idx}
                  className="group rounded-2xl bg-white border border-slate-200/90 hover:border-cyan-400 hover:shadow-xl hover:-translate-y-0.5 p-5 flex flex-col justify-between transition-all duration-200 shadow-sm"
                >
                  <div className="space-y-4">
                    {/* Visual Card Image */}
                    <div className="relative h-40 rounded-xl overflow-hidden border border-slate-200/80 bg-slate-100">
                      <img
                        src={imageSrc}
                        alt={item.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                      <div className="absolute top-2.5 left-2.5">
                        <span className="px-2.5 py-1 rounded-md text-[11px] font-mono font-bold bg-white/95 text-cyan-800 shadow-xs border border-cyan-200/60 backdrop-blur-xs">
                          {item.badge}
                        </span>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-slate-900 font-heading">
                        {item.name}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal mt-1.5">
                        {item.description}
                      </p>
                    </div>

                    <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-2 text-xs text-slate-700">
                      <div>
                        <span className="font-bold text-slate-900 font-mono">Workflow Architecture:</span>
                        <p className="text-slate-600 mt-0.5 leading-relaxed">{item.workflow}</p>
                      </div>
                      <div className="pt-2 border-t border-slate-200">
                        <span className="font-bold text-emerald-800 font-mono">Enterprise Governance:</span>
                        <p className="text-slate-600 mt-0.5 leading-relaxed">{item.governance}</p>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-[11px] text-slate-500 font-mono">Telemetry: Active</span>
                    <Link
                      to={`/case-studies/stories/${targetSlug}`}
                      className="inline-flex items-center gap-1 text-xs font-bold font-mono text-cyan-700 hover:text-cyan-800 group/link cursor-pointer"
                    >
                      <span>Inspect Stack Architecture</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 transition-transform" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════════
            CASE STUDIES BY BUSINESS OUTCOME
        ══════════════════════════════════════════════════════════════════ */}
        <section id="case-studies-by-business-outcome" className="scroll-mt-28 space-y-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between pb-4 border-b border-slate-200 gap-3">
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-heading">
                Case Studies by Business Outcome
              </h2>
              <p className="text-sm sm:text-base text-slate-600 mt-1 max-w-3xl leading-relaxed">
                Organized directly around executive balance-sheet mandates: Margin Expansion, Customer Acquisition Cost Reduction, Net Revenue Retention, and Pipeline Velocity.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {OUTCOME_CASE_STUDIES_DATA.map((item, idx) => {
              const imageSrc = outcomeImages[item.id] || '/images/outcomes-metrics.png';
              const targetSlug = item.relevantStorySlugs?.[0] || 'global-manufacturing-expansion';

              return (
                <div
                  key={idx}
                  className="group rounded-2xl bg-white border border-slate-200/90 hover:border-emerald-400 hover:shadow-xl hover:-translate-y-0.5 p-5 flex flex-col justify-between transition-all duration-200 shadow-sm"
                >
                  <div className="space-y-4">
                    {/* Visual Card Image */}
                    <div className="relative h-44 rounded-xl overflow-hidden border border-slate-200/80 bg-slate-100">
                      <img
                        src={imageSrc}
                        alt={item.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                      <div className="absolute top-2.5 left-2.5">
                        <span className="px-2.5 py-1 rounded-md text-[11px] font-mono font-bold bg-white/95 text-emerald-800 shadow-xs border border-emerald-200/60 backdrop-blur-xs">
                          {item.badge}
                        </span>
                      </div>
                      <div className="absolute top-2.5 right-2.5">
                        <span className="px-2.5 py-1 rounded-md text-xs font-mono font-black bg-emerald-600 text-white shadow-xs">
                          {item.metric}
                        </span>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-bold text-slate-900 font-heading">
                        {item.name}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal mt-1.5">
                        {item.description}
                      </p>
                    </div>

                    <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-2 text-xs">
                      <div>
                        <span className="font-bold text-slate-900 font-mono">Empirical Benchmark:</span>
                        <p className="text-slate-600 font-medium mt-0.5 leading-relaxed">{item.intendedVsMeasured}</p>
                      </div>
                      <div className="pt-2 border-t border-slate-200">
                        <span className="font-bold text-emerald-800 font-mono">Governed KPIs:</span>
                        <p className="text-slate-600 mt-0.5">{item.kpis.join(' · ')}</p>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
                    <div className="text-[11px] text-slate-500 font-mono">
                      Audit Status: <span className="text-emerald-700 font-bold">Verified</span>
                    </div>
                    <Link
                      to={`/case-studies/stories/${targetSlug}`}
                      className="inline-flex items-center gap-1 text-xs font-bold font-mono text-emerald-700 hover:text-emerald-800 group/link cursor-pointer"
                    >
                      <span>View Financial Model</span>
                      <ArrowUpRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 transition-transform" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════════
            CUSTOMER SUCCESS STORIES
        ══════════════════════════════════════════════════════════════════ */}
        <section id="customer-success-stories" className="scroll-mt-28 space-y-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between pb-4 border-b border-slate-200 gap-3">
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-heading">
                Customer Success Stories
              </h2>
              <p className="text-sm sm:text-base text-slate-600 mt-1 max-w-3xl leading-relaxed">
                Direct testimonials, leadership perspectives, and multi-year partnership narratives from Board Members, Chief Commercial Officers, and Heads of RevOps.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {TESTIMONIALS_DATA.map((t, idx) => (
              <div
                key={idx}
                className="rounded-2xl bg-white border border-slate-200/90 hover:border-amber-400 hover:shadow-xl hover:-translate-y-0.5 p-6 flex flex-col justify-between space-y-4 shadow-sm transition-all"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-amber-500">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-current" />
                      ))}
                    </div>
                    <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                      {t.impact}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 italic leading-relaxed">
                    "{t.quote}"
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <div>
                    <div className="text-sm font-bold text-slate-900 font-heading">{t.name}</div>
                    <div className="text-xs text-slate-500">{t.title} · {t.company}</div>
                  </div>
                  <Link
                    to={`/case-studies/stories/${t.storySlug}`}
                    className="inline-flex items-center gap-1 text-xs font-bold font-mono text-blue-600 hover:text-blue-700 group cursor-pointer"
                  >
                    <span>Read Story</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Full Case Studies Repository Table */}
          <div className="mt-8 rounded-2xl bg-white border border-slate-200/90 shadow-sm overflow-hidden">
            <div className="p-5 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
              <div>
                <h3 className="text-base font-bold text-slate-900 font-heading">Complete Case Studies Catalog</h3>
                <p className="text-xs text-slate-500 mt-0.5">Explore the comprehensive library of published client transformation dossiers.</p>
              </div>
              <Link
                to="/case-studies"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold font-mono transition-colors shadow-2xs"
              >
                <span>Browse All Case Studies</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="divide-y divide-slate-100 overflow-x-auto">
              {APPROVED_CASE_STUDIES.map((study) => (
                <div
                  key={study.id}
                  className="p-5 hover:bg-slate-50 transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs"
                >
                  <div className="flex items-start gap-4 max-w-2xl">
                    <img
                      src={study.image || '/images/hero-revenue-acceleration.png'}
                      alt={study.title}
                      className="w-16 h-16 rounded-xl object-cover border border-slate-200 shrink-0 hidden sm:block"
                    />
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-slate-100 text-slate-700 border border-slate-200">
                          {study.industry}
                        </span>
                        <span className="text-slate-500 font-mono text-[11px]">
                          Timeline: {study.timeline || '6 Months'}
                        </span>
                        <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                          {study.storyType}
                        </span>
                      </div>
                      <div className="font-bold text-slate-900 text-sm font-heading">
                        {study.title}
                      </div>
                      <div className="text-slate-600 leading-relaxed text-xs">
                        {study.summary}
                      </div>
                    </div>
                  </div>

                  <div className="sm:text-right shrink-0 flex sm:flex-col items-center sm:items-end justify-between gap-2">
                    <div className="font-mono font-bold text-emerald-700 text-base">
                      {study.metricBig}
                    </div>
                    <div className="text-[10px] text-slate-500 font-mono">
                      {study.metricLabel}
                    </div>
                    <Link
                      to={`/case-studies/stories/${study.slug}`}
                      className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-700 font-bold font-mono mt-1 text-xs"
                    >
                      <span>Examine Audit Dossier</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

      </div>

      {/* ── BOTTOM CTA SECTION (EXECUTIVE DARK CONTRAST) ── */}
      <section className="border-t border-slate-200 bg-gradient-to-b from-slate-900 to-slate-950 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/80 border border-blue-800/60 text-blue-400 text-xs font-mono font-bold uppercase tracking-wider">
            Commercial Due Diligence
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight font-heading">
            Ready to Build Your Organization's Empirical Success Story?
          </h2>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed font-normal">
            Schedule an executive diagnostic session with our revenue engineers to evaluate margin leakage, pipeline velocity bottlenecks, and latent market opportunity.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <Link
              to="/book-consultation"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm shadow-lg shadow-blue-600/30 transition-all cursor-pointer"
            >
              <span>Schedule Diagnostic Briefing</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/outcomes"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-sm border border-slate-700 transition-all cursor-pointer"
            >
              <span>Explore Verified Outcomes</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
