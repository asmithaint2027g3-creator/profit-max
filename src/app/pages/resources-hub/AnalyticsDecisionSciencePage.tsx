import React, { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import {
  BarChart3, LineChart, PieChart, Activity, Sliders, Calculator,
  TrendingUp, CheckCircle2, ChevronRight, ArrowRight, ArrowUpRight,
  Sparkles, DollarSign, Database, Binary, ShieldCheck, Scale,
  Layers, Search, Filter, ChevronDown, BookOpen
} from 'lucide-react';
import { trackEvent } from '../../../lib/analytics';
import { MATHEMATICAL_MODELS } from '../../../data/advancedAnalyticalToolsData';
import MarketingDebtDashboard from '../../components/dashboards/MarketingDebtDashboard';

export default function AnalyticsDecisionSciencePage() {
  const location = useLocation();
  const [selectedModelCategory, setSelectedModelCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedModelNumber, setExpandedModelNumber] = useState<string | null>('01');

  useEffect(() => {
    document.title = 'Analytics & Decision Science | ProfitMachines Resources';
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
    { id: 'foundational-analytics', title: 'Foundational Analytics', icon: Database, badge: 'Core Metrics' },
    { id: 'advanced-analytical-models', title: 'Advanced Analytical Models', icon: Calculator, badge: '25 Models + Telemetry' },
    { id: 'revenue-pipeline-analytics', title: 'Revenue & Pipeline Analytics', icon: Activity, badge: 'Velocity' },
    { id: 'predictive-statistical-analytics', title: 'Predictive & Statistical Analytics', icon: Binary, badge: 'Forecasting' },
    { id: 'comparative-analytics-benchmarking', title: 'Comparative Analytics & Benchmarking', icon: Scale, badge: 'Cohorts' }
  ];

  const handleAnchorClick = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const navOffset = 95;
      const pos = el.getBoundingClientRect().top + window.pageYOffset - navOffset;
      window.scrollTo({ top: Math.max(0, pos), behavior: 'smooth' });
    }
  };

  const filteredModels = MATHEMATICAL_MODELS.filter((m) => {
    const matchesCategory = selectedModelCategory === 'all' || m.category === selectedModelCategory;
    const matchesSearch =
      searchQuery === '' ||
      m.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      m.equation.toLowerCase().includes(searchQuery.toLowerCase()) ||
      m.businessProblem.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const categories = [
    { id: 'all', label: 'All 25 Models' },
    { id: 'revenue-pipeline', label: 'Revenue & Pipeline (01-12)' },
    { id: 'margin-cost-economics', label: 'Margin & Economics (13-17)' },
    { id: 'statistical-predictive', label: 'Statistical & Predictive (18-21)' },
    { id: 'customer-market-expansion', label: 'Customer & Market (22-25)' }
  ];

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
            <span className="text-blue-600 font-bold">Analytics & Decision Science</span>
          </nav>
        </div>
      </div>

      {/* ── HERO BANNER (OFFERINGS PRESTIGE DARK PANEL) ── */}
      <section className="relative pt-12 pb-16 md:pt-16 md:pb-20 bg-slate-950 text-white border-b border-slate-800 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 pointer-events-none" />
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-mono font-bold uppercase tracking-widest mb-5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Empirical Decision Engine</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight font-heading mb-4">
              Analytics &{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-300">
                Decision Science
              </span>
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl font-normal">
              The rigorous mathematical foundation of enterprise commercial performance: 25 peer-reviewed analytical models, marketing debt telemetry, and econometric simulations.
            </p>

            <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800">
                <div className="text-xl sm:text-2xl font-black text-cyan-400 font-mono">25</div>
                <div className="text-[11px] text-slate-400 font-medium">Approved Models</div>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800">
                <div className="text-xl sm:text-2xl font-black text-emerald-400 font-mono">100%</div>
                <div className="text-[11px] text-slate-400 font-medium">Deterministic Logic</div>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800">
                <div className="text-xl sm:text-2xl font-black text-blue-400 font-mono">±2.4%</div>
                <div className="text-[11px] text-slate-400 font-medium">Forecast Precision</div>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800">
                <div className="text-xl sm:text-2xl font-black text-indigo-300 font-mono">Live</div>
                <div className="text-[11px] text-slate-400 font-medium">Marketing Debt Telemetry</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── IN-PAGE ANCHOR JUMP BAR (OFFERINGS LIGHT STYLE, NON-STICKY) ── */}
      <section className="border-b border-slate-200 bg-slate-50/90 py-3.5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider mb-2">
            Mathematical Decision Architecture · 5 Submenus
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
                    {item.badge}
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
            FOUNDATIONAL ANALYTICS
        ══════════════════════════════════════════════════════════════════ */}
        <section id="foundational-analytics" className="scroll-mt-28 space-y-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between pb-4 border-b border-slate-200 gap-3">
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-heading">
                Foundational Analytics
              </h2>
              <p className="text-sm sm:text-base text-slate-600 mt-1 max-w-3xl leading-relaxed">
                The core data definitions, single-source-of-truth architectures, and governance hygiene required to power high-fidelity decision science.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="group rounded-2xl bg-white border border-slate-200/90 hover:border-cyan-400 hover:shadow-xl hover:-translate-y-0.5 p-5 flex flex-col justify-between shadow-sm transition-all overflow-hidden">
              <div className="space-y-4">
                <div className="relative h-36 rounded-xl overflow-hidden border border-slate-200/80 bg-slate-100">
                  <img
                    src="/images/hero-data-intelligence.png"
                    alt="Single Source of Truth (SSOT)"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
                  <span className="absolute bottom-2.5 left-2.5 px-2.5 py-0.5 rounded text-[11px] font-mono font-bold bg-white/95 text-cyan-800 shadow-xs">
                    Data Pillar 01
                  </span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 font-heading">Single Source of Truth (SSOT)</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  Reconciling conflicting ARR, MRR, churn, and booking metrics between ERP (NetSuite/SAP), CRM (Salesforce/HubSpot), and billing gateways (Stripe/Zuora).
                </p>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs font-mono text-emerald-700 font-bold mt-4">
                Eliminates 100% of executive board dispute over ARR definitions.
              </div>
            </div>

            <div className="group rounded-2xl bg-white border border-slate-200/90 hover:border-blue-400 hover:shadow-xl hover:-translate-y-0.5 p-5 flex flex-col justify-between shadow-sm transition-all overflow-hidden">
              <div className="space-y-4">
                <div className="relative h-36 rounded-xl overflow-hidden border border-slate-200/80 bg-slate-100">
                  <img
                    src="/images/demand-pulse-dashboard.png"
                    alt="Entity Graph Resolution"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
                  <span className="absolute bottom-2.5 left-2.5 px-2.5 py-0.5 rounded text-[11px] font-mono font-bold bg-white/95 text-blue-800 shadow-xs">
                    Data Pillar 02
                  </span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 font-heading">Entity Graph Resolution</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  Automated parent-child corporate hierarchy linkage (Ultimate Parent D-U-N-S, subsidiaries, mergers) preventing fragmented account representation across reps.
                </p>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs font-mono text-blue-700 font-bold mt-4">
                Consolidates multi-subsidiary spend into unified master contracts.
              </div>
            </div>

            <div className="group rounded-2xl bg-white border border-slate-200/90 hover:border-indigo-400 hover:shadow-xl hover:-translate-y-0.5 p-5 flex flex-col justify-between shadow-sm transition-all overflow-hidden">
              <div className="space-y-4">
                <div className="relative h-36 rounded-xl overflow-hidden border border-slate-200/80 bg-slate-100">
                  <img
                    src="/images/hero-profit-pool.png"
                    alt="Audit Trail & Lineage"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
                  <span className="absolute bottom-2.5 left-2.5 px-2.5 py-0.5 rounded text-[11px] font-mono font-bold bg-white/95 text-indigo-800 shadow-xs">
                    Data Pillar 03
                  </span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 font-heading">Audit Trail & Lineage</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  Immutable event timestamping for deal creation, stage migration, discount approval, and close-date slips, establishing forensic causality.
                </p>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs font-mono text-indigo-700 font-bold mt-4">
                Enables statistical backtesting and machine learning validation.
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════════
            ADVANCED ANALYTICAL MODELS (25 MODELS + DASHBOARD)
        ══════════════════════════════════════════════════════════════════ */}
        <section id="advanced-analytical-models" className="scroll-mt-28 space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between pb-4 border-b border-slate-200 gap-3">
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-heading">
                Advanced Analytical Models
              </h2>
              <p className="text-sm sm:text-base text-slate-600 mt-1 max-w-3xl leading-relaxed">
                The complete library of all 25 approved mathematical models with variables, formulas, and step-by-step example calculations, plus live Marketing Debt telemetry.
              </p>
            </div>
          </div>

          {/* ── PRESERVED MARKETING DEBT DASHBOARD IN PRESTIGE CONTAINER ── */}
          <div className="rounded-3xl bg-slate-950 text-white border border-slate-800 p-5 sm:p-7 shadow-2xl space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <div className="flex items-center gap-2.5">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                <span className="font-bold text-white text-sm uppercase tracking-wider font-mono">
                  Live Enterprise Telemetry · Marketing Debt Dashboard
                </span>
              </div>
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-emerald-950 text-emerald-400 border border-emerald-800/60">
                Active Telemetry
              </span>
            </div>
            <div className="overflow-x-auto">
              <MarketingDebtDashboard />
            </div>
          </div>

          {/* ── 25 MATHEMATICAL MODELS SEARCH & FILTER ── */}
          <div className="space-y-4 pt-4">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
              <div className="flex flex-wrap items-center gap-2">
                {categories.map((c) => (
                  <button
                    key={c.id}
                    onClick={() => setSelectedModelCategory(c.id)}
                    className={`px-3.5 py-2 rounded-xl text-xs font-bold font-heading transition-all cursor-pointer ${
                      selectedModelCategory === c.id
                        ? 'bg-slate-900 text-white shadow-md'
                        : 'bg-white text-slate-700 hover:bg-slate-50 border border-slate-200 shadow-2xs'
                    }`}
                  >
                    {c.label}
                  </button>
                ))}
              </div>

              <div className="relative w-full md:w-72">
                <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search 25 models, equations..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-3 py-2 rounded-xl bg-white border border-slate-200 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500 shadow-2xs"
                />
              </div>
            </div>

            {/* Model Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {filteredModels.map((m) => {
                const isExpanded = expandedModelNumber === m.number;
                return (
                  <div
                    key={m.number}
                    className={`rounded-2xl border transition-all ${
                      isExpanded
                        ? 'bg-white border-blue-500 shadow-xl'
                        : 'bg-white border-slate-200/90 hover:border-slate-300 shadow-sm'
                    }`}
                  >
                    <div
                      onClick={() => setExpandedModelNumber(isExpanded ? null : m.number)}
                      className="p-6 cursor-pointer flex items-start justify-between gap-3 select-none"
                    >
                      <div className="space-y-2 flex-1">
                        <div className="flex items-center gap-2">
                          <span className="w-8 h-8 rounded-lg bg-blue-50 text-blue-700 border border-blue-200 font-mono font-bold text-xs flex items-center justify-center">
                            {m.number}
                          </span>
                          <span className="px-2.5 py-0.5 rounded text-[10px] font-mono font-bold bg-slate-100 text-slate-700 border border-slate-200">
                            {m.categoryLabel}
                          </span>
                        </div>
                        <h3 className="text-base sm:text-lg font-bold text-slate-900 font-heading hover:text-blue-600 transition-colors">
                          {m.name}
                        </h3>
                        <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 font-mono text-xs text-emerald-400 font-bold overflow-x-auto shadow-2xs">
                          {m.equation}
                        </div>
                        <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                          {m.businessProblem}
                        </p>
                      </div>

                      <ChevronDown
                        className={`w-4 h-4 text-slate-400 shrink-0 transition-transform mt-2 ${
                          isExpanded ? 'rotate-180 text-blue-600' : ''
                        }`}
                      />
                    </div>

                    {isExpanded && (
                      <div className="px-6 pb-6 pt-2 border-t border-slate-100 space-y-4 text-xs">
                        {/* Variables Definition */}
                        <div className="space-y-2">
                          <div className="font-mono font-bold text-slate-500 uppercase text-[10px]">
                            Equation Variables & Units:
                          </div>
                          <div className="grid grid-cols-1 gap-1.5">
                            {m.variables.map((v, vIdx) => (
                              <div key={vIdx} className="p-2.5 rounded-lg bg-slate-50 border border-slate-200 flex items-start justify-between gap-2 text-[11px]">
                                <div>
                                  <span className="font-mono font-bold text-blue-700">{v.symbol}</span>
                                  <span className="text-slate-800 font-semibold"> · {v.name}: </span>
                                  <span className="text-slate-600">{v.description}</span>
                                </div>
                                <span className="font-mono text-slate-500 font-bold shrink-0">{v.unit}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Step by Step Calculation */}
                        <div className="p-4 rounded-xl bg-slate-50/80 border border-slate-200 space-y-2">
                          <div className="font-mono font-bold text-emerald-800 uppercase text-[10px]">
                            Example Calculation & Operational Step-Through:
                          </div>
                          <div className="space-y-1 text-slate-700 font-mono text-[11px]">
                            {m.exampleCalculation.steps.map((st, stIdx) => (
                              <div key={stIdx} className="flex items-start gap-1.5">
                                <span className="text-slate-400">[{stIdx + 1}]</span>
                                <span>{st}</span>
                              </div>
                            ))}
                          </div>
                          <div className="pt-2 border-t border-slate-200 flex items-center justify-between text-xs">
                            <span className="font-bold text-slate-900 font-heading">Result:</span>
                            <span className="font-mono font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">{m.exampleCalculation.result}</span>
                          </div>
                          <div className="text-[11px] text-slate-600 italic">
                            Executive Takeaway: {m.exampleCalculation.interpretation}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════════
            REVENUE & PIPELINE ANALYTICS
        ══════════════════════════════════════════════════════════════════ */}
        <section id="revenue-pipeline-analytics" className="scroll-mt-28 space-y-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between pb-4 border-b border-slate-200 gap-3">
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-heading">
                Revenue & Pipeline Analytics
              </h2>
              <p className="text-sm sm:text-base text-slate-600 mt-1 max-w-3xl leading-relaxed">
                Mathematical modeling of pipeline coverage ratios, slip rates, deal conversion decay, and rep capacity utilization.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-white border border-slate-200/90 hover:border-blue-400 hover:shadow-xl hover:-translate-y-0.5 space-y-3 shadow-sm transition-all">
              <span className="text-xs font-mono font-bold text-blue-700 uppercase">Metric Framework 01</span>
              <h3 className="text-lg font-bold text-slate-900 font-heading">Pipeline Coverage Multiplier</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                Replacing the arbitrary "3x coverage" rule with dynamic segment-specific coverage formulas based on historical win-rates and average slip duration.
              </p>
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 font-mono text-xs text-slate-800">
                Formula: Coverage = Target ARR ÷ (Win Rate × Delivery %)
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200/90 hover:border-emerald-400 hover:shadow-xl hover:-translate-y-0.5 space-y-3 shadow-sm transition-all">
              <span className="text-xs font-mono font-bold text-emerald-700 uppercase">Metric Framework 02</span>
              <h3 className="text-lg font-bold text-slate-900 font-heading">Stage Conversion Half-Life</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                Survival analysis measuring the probability of an opportunity closing as a function of calendar days spent in any single pipeline milestone.
              </p>
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 font-mono text-xs text-slate-800">
                Observation: Deals stalling over 2x median stage length suffer 68% close degradation.
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200/90 hover:border-indigo-400 hover:shadow-xl hover:-translate-y-0.5 space-y-3 shadow-sm transition-all">
              <span className="text-xs font-mono font-bold text-indigo-700 uppercase">Metric Framework 03</span>
              <h3 className="text-lg font-bold text-slate-900 font-heading">Rep Ramp & Capacity Attainment</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                Logarithmic ramping curves tracking time-to-first-deal, pipeline generation per tenure month, and fully loaded quota capacity across cohorts.
              </p>
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 font-mono text-xs text-slate-800">
                Outcome: Shortens enterprise AE ramp from 8.2 months to 4.6 months.
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════════
            PREDICTIVE & STATISTICAL ANALYTICS
        ══════════════════════════════════════════════════════════════════ */}
        <section id="predictive-statistical-analytics" className="scroll-mt-28 space-y-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between pb-4 border-b border-slate-200 gap-3">
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-heading">
                Predictive & Statistical Analytics
              </h2>
              <p className="text-sm sm:text-base text-slate-600 mt-1 max-w-3xl leading-relaxed">
                Monte Carlo simulations, Bayesian win-probability updates, regression-based pricing elasticity, and macroeconomic sensitivity modeling.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-white border border-slate-200/90 hover:border-purple-400 hover:shadow-xl hover:-translate-y-0.5 space-y-4 shadow-sm transition-all">
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 rounded-xl bg-purple-50 border border-purple-200 text-purple-700 font-mono font-bold text-xs flex items-center justify-center">
                  MC
                </div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 font-heading">10,000-Run Monte Carlo Revenue Simulation</h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                Simulates 10,000 discrete quarterly pipeline outcomes sampling deal-size volatility, close-date slippage probability distributions, and rep turnover risks.
              </p>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 grid grid-cols-3 gap-2 text-center text-xs">
                <div>
                  <div className="text-[10px] text-slate-500 font-mono">P10 (Worst Case)</div>
                  <div className="font-mono font-bold text-rose-600 mt-0.5">$8.4M</div>
                </div>
                <div>
                  <div className="text-[10px] text-slate-500 font-mono">P50 (Median)</div>
                  <div className="font-mono font-bold text-slate-900 mt-0.5">$11.2M</div>
                </div>
                <div>
                  <div className="text-[10px] text-slate-500 font-mono">P90 (Upside)</div>
                  <div className="font-mono font-bold text-emerald-700 mt-0.5">$13.8M</div>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200/90 hover:border-cyan-400 hover:shadow-xl hover:-translate-y-0.5 space-y-4 shadow-sm transition-all">
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 rounded-xl bg-cyan-50 border border-cyan-200 text-cyan-700 font-mono font-bold text-xs flex items-center justify-center">
                  BY
                </div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 font-heading">Bayesian Win-Probability Updates</h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                Dynamically revises an opportunity's close probability following observed buyer behavior: executive attendance at demos, security questionnaire turnaround, and legal engagement.
              </p>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5 text-xs">
                <div className="flex justify-between text-slate-700">
                  <span>Prior Baseline Probability:</span>
                  <span className="font-mono font-bold text-slate-500">22%</span>
                </div>
                <div className="flex justify-between text-slate-700">
                  <span>After CFO Direct Engagement:</span>
                  <span className="font-mono font-bold text-emerald-700">74% (+52 pts)</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════════
            COMPARATIVE ANALYTICS & BENCHMARKING
        ══════════════════════════════════════════════════════════════════ */}
        <section id="comparative-analytics-benchmarking" className="scroll-mt-28 space-y-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between pb-4 border-b border-slate-200 gap-3">
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-heading">
                Comparative Analytics & Benchmarking
              </h2>
              <p className="text-sm sm:text-base text-slate-600 mt-1 max-w-3xl leading-relaxed">
                Calibrating your enterprise performance against top-quartile B2B software, industrial manufacturing, and professional services peers.
              </p>
            </div>
          </div>

          <div className="rounded-2xl bg-white border border-slate-200/90 shadow-sm overflow-hidden">
            <div className="p-5 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
              <span className="text-xs font-mono font-bold text-slate-700 uppercase">
                Peer Quartile Performance Calibration Matrix
              </span>
              <span className="text-xs font-mono text-emerald-700 font-bold">Trailing 12-Month Dataset</span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-xs text-left">
                <thead className="bg-slate-50 text-slate-600 border-b border-slate-200 font-mono">
                  <tr>
                    <th className="p-4 sm:px-6">Operational Metric</th>
                    <th className="p-4">Bottom Quartile (P25)</th>
                    <th className="p-4">Median (P50)</th>
                    <th className="p-4 text-emerald-700 font-bold">Top Quartile (P75)</th>
                    <th className="p-4 text-blue-700 font-bold">ProfitMachines Benchmark</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-700">
                  <tr className="hover:bg-slate-50">
                    <td className="p-4 sm:px-6 font-bold text-slate-900 font-heading">Net Revenue Retention (NRR)</td>
                    <td className="p-4 font-mono text-rose-600 font-bold">92%</td>
                    <td className="p-4 font-mono">104%</td>
                    <td className="p-4 font-mono text-emerald-700 font-bold">122%</td>
                    <td className="p-4 font-mono text-blue-700 font-bold">128%</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="p-4 sm:px-6 font-bold text-slate-900 font-heading">CAC Payback Period (Months)</td>
                    <td className="p-4 font-mono text-rose-600 font-bold">26 Months</td>
                    <td className="p-4 font-mono">17 Months</td>
                    <td className="p-4 font-mono text-emerald-700 font-bold">11 Months</td>
                    <td className="p-4 font-mono text-blue-700 font-bold">8.4 Months</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="p-4 sm:px-6 font-bold text-slate-900 font-heading">Magic Number (Sales Efficiency)</td>
                    <td className="p-4 font-mono text-rose-600 font-bold">0.45</td>
                    <td className="p-4 font-mono">0.78</td>
                    <td className="p-4 font-mono text-emerald-700 font-bold">1.15</td>
                    <td className="p-4 font-mono text-blue-700 font-bold">1.34</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="p-4 sm:px-6 font-bold text-slate-900 font-heading">Opportunity Win Rate (%)</td>
                    <td className="p-4 font-mono text-rose-600 font-bold">14%</td>
                    <td className="p-4 font-mono">22%</td>
                    <td className="p-4 font-mono text-emerald-700 font-bold">34%</td>
                    <td className="p-4 font-mono text-blue-700 font-bold">39%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

      </div>

      {/* ── BOTTOM CTA SECTION (EXECUTIVE DARK CONTRAST) ── */}
      <section className="border-t border-slate-200 bg-gradient-to-b from-slate-900 to-slate-950 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-800/60 text-cyan-400 text-xs font-mono font-bold uppercase tracking-wider">
            Decision Science Briefing
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight font-heading">
            Deploy Empirical Mathematics to Your Commercial Engine
          </h2>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed font-normal">
            Eliminate subjective executive guesswork. Connect your CRM telemetry to our 25 peer-reviewed analytical models and begin algorithmic revenue engineering.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <Link
              to="/book-consultation"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm shadow-lg shadow-blue-600/30 transition-all cursor-pointer"
            >
              <span>Schedule Analytical Audit</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/offerings/growth-science-engine"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-sm border border-slate-700 transition-all cursor-pointer"
            >
              <span>Explore Growth Science Engine</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
