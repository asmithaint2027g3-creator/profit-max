import React, { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import {
  Compass, Target, FileText, DollarSign, Award, Calculator,
  TrendingUp, CheckCircle2, ChevronRight, ArrowRight, ArrowUpRight,
  Sparkles, Layers, Sliders, ShieldCheck, Workflow, BarChart3,
  Search, Filter, ChevronDown, Check, HelpCircle
} from 'lucide-react';
import { trackEvent } from '../../../lib/analytics';
import {
  MATURITY_MODEL_RESOURCES,
  ROI_MODEL_RESOURCES,
  BUSINESS_CASE_RESOURCES,
  PLAYBOOK_RESOURCES,
  WORKSHOP_RESOURCES
} from '../../../data/frameworksTemplatesData';
import { ALL_TOOLS } from '../../../data/toolsCalculatorsHubData';

export default function StrategyFrameworksBusinessToolsPage() {
  const location = useLocation();

  // Interactive ROI Calculator inside Submenu 04 / 06
  const [annualRevenue, setAnnualRevenue] = useState(25000000);
  const [currentMargin, setCurrentMargin] = useState(22);
  const [projectedMarginLift, setProjectedMarginLift] = useState(3.5);
  const [implementationInvestment, setImplementationInvestment] = useState(180000);

  // Computations
  const additionalAnnualGrossProfit = Math.round(annualRevenue * (projectedMarginLift / 100));
  const threeYearGrossGain = additionalAnnualGrossProfit * 3;
  const netRoiPercentage = Math.round(((threeYearGrossGain - implementationInvestment) / implementationInvestment) * 100);
  const paybackMonths = Math.max(1, Math.round((implementationInvestment / (additionalAnnualGrossProfit / 12)) * 10) / 10);

  useEffect(() => {
    document.title = 'Strategy, Frameworks & Business Tools | ProfitMachines Resources';
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
    { id: 'strategy-business-transformation', title: 'Strategy & Business Transformation', icon: Compass, badge: 'Strategic' },
    { id: 'performance-management-frameworks', title: 'Performance Management Frameworks', icon: Target, badge: 'Scorecards' },
    { id: 'business-frameworks-templates', title: 'Business Frameworks & Templates', icon: FileText, badge: 'Templates' },
    { id: 'business-cases-roi-models', title: 'Business Cases & ROI Models', icon: DollarSign, badge: 'Financial' },
    { id: 'maturity-assessments-workshops', title: 'Maturity Assessments & Workshops', icon: Award, badge: '5-Stage Audits' },
    { id: 'business-tools-calculators', title: 'Business Tools & Calculators', icon: Calculator, badge: 'Interactive' }
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
            <span className="text-blue-600 font-bold">Strategy, Frameworks & Business Tools</span>
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
              <span>Executive Operating Architecture</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight font-heading mb-4">
              Strategy, Frameworks &{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-emerald-300">
                Business Tools
              </span>
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl font-normal">
              Institutional decision frameworks, financial business case calculators, 5-stage commercial maturity audits, and executive strategy maps engineered for sustainable enterprise scale.
            </p>

            <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800">
                <div className="text-xl sm:text-2xl font-black text-white font-mono">14+</div>
                <div className="text-[11px] text-slate-400 font-medium">Standard Frameworks</div>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800">
                <div className="text-xl sm:text-2xl font-black text-emerald-400 font-mono">5 Stage</div>
                <div className="text-[11px] text-slate-400 font-medium">Maturity Rubric</div>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800">
                <div className="text-xl sm:text-2xl font-black text-blue-400 font-mono">100%</div>
                <div className="text-[11px] text-slate-400 font-medium">Audit-Ready ROI Models</div>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800">
                <div className="text-xl sm:text-2xl font-black text-indigo-300 font-mono">Instant</div>
                <div className="text-[11px] text-slate-400 font-medium">Interactive Calculators</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── IN-PAGE ANCHOR JUMP BAR (OFFERINGS LIGHT STYLE, NON-STICKY) ── */}
      <section className="border-b border-slate-200 bg-slate-50/90 py-3.5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider mb-2">
            Platform Architecture · 6 Submenus
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
            STRATEGY & BUSINESS TRANSFORMATION
        ══════════════════════════════════════════════════════════════════ */}
        <section id="strategy-business-transformation" className="scroll-mt-28 space-y-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between pb-4 border-b border-slate-200 gap-3">
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-heading">
                Strategy & Business Transformation
              </h2>
              <p className="text-sm sm:text-base text-slate-600 mt-1 max-w-3xl leading-relaxed">
                Aligning corporate ambition with execution reality through Kaplan-Norton Strategy Maps, market entry matrices, and transformation roadmaps.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="group rounded-2xl bg-white border border-slate-200/90 hover:border-blue-400 hover:shadow-xl hover:-translate-y-0.5 p-5 flex flex-col justify-between shadow-sm transition-all overflow-hidden">
              <div className="space-y-4">
                <div className="relative h-36 rounded-xl overflow-hidden border border-slate-200/80 bg-slate-100">
                  <img
                    src="/images/hero-end-to-end-transformation.png"
                    alt="4-Perspective Strategy Mapping"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
                  <span className="absolute bottom-2.5 left-2.5 px-2.5 py-0.5 rounded text-[11px] font-mono font-bold bg-white/95 text-blue-800 shadow-xs">
                    Architecture 01
                  </span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 font-heading">4-Perspective Strategy Mapping</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  Connecting Financial targets (EBITDA, NRR) down through Customer value propositions, Internal operating processes, to Organizational learning and telemetry.
                </p>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 font-mono text-xs text-slate-800 mt-4">
                Guarantees strategic initiatives directly fund shareholder ROI mandates.
              </div>
            </div>

            <div className="group rounded-2xl bg-white border border-slate-200/90 hover:border-indigo-400 hover:shadow-xl hover:-translate-y-0.5 p-5 flex flex-col justify-between shadow-sm transition-all overflow-hidden">
              <div className="space-y-4">
                <div className="relative h-36 rounded-xl overflow-hidden border border-slate-200/80 bg-slate-100">
                  <img
                    src="/images/hero-revenue-acceleration.png"
                    alt="Market Horizon Expansion Model"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
                  <span className="absolute bottom-2.5 left-2.5 px-2.5 py-0.5 rounded text-[11px] font-mono font-bold bg-white/95 text-indigo-800 shadow-xs">
                    Architecture 02
                  </span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 font-heading">Market Horizon Expansion Model</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  Horizon 1 (Defend core cash cows), Horizon 2 (High-velocity adjacent market penetration), and Horizon 3 (Autonomous agentic revenue business models).
                </p>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 font-mono text-xs text-slate-800 mt-4">
                Balances quarterly commercial delivery with long-term defensible moats.
              </div>
            </div>

            <div className="group rounded-2xl bg-white border border-slate-200/90 hover:border-emerald-400 hover:shadow-xl hover:-translate-y-0.5 p-5 flex flex-col justify-between shadow-sm transition-all overflow-hidden">
              <div className="space-y-4">
                <div className="relative h-36 rounded-xl overflow-hidden border border-slate-200/80 bg-slate-100">
                  <img
                    src="/images/hero-profit-pool.png"
                    alt="Forensic Margin Leakage Recovery"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
                  <span className="absolute bottom-2.5 left-2.5 px-2.5 py-0.5 rounded text-[11px] font-mono font-bold bg-white/95 text-emerald-800 shadow-xs">
                    Architecture 03
                  </span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 font-heading">Forensic Margin Leakage Recovery</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  Deconstructing commercial contracts to identify unbilled scope creep, discretionary discounting, and SLA penalties eroding operating margins.
                </p>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 font-mono text-xs text-slate-800 mt-4">
                Unlocks 3.2 to 6.8 percentage points in gross margin within 90 days.
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════════
            PERFORMANCE MANAGEMENT FRAMEWORKS
        ══════════════════════════════════════════════════════════════════ */}
        <section id="performance-management-frameworks" className="scroll-mt-28 space-y-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between pb-4 border-b border-slate-200 gap-3">
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-heading">
                Performance Management Frameworks
              </h2>
              <p className="text-sm sm:text-base text-slate-600 mt-1 max-w-3xl leading-relaxed">
                Operationalizing executive targets into cascading OKRs, Balanced Scorecards, and weekly telemetry reviews that hold leaders accountable.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-white border border-slate-200/90 hover:border-blue-400 hover:shadow-xl hover:-translate-y-0.5 space-y-2 shadow-sm transition-all">
              <span className="px-2.5 py-0.5 rounded text-[10px] font-mono font-bold bg-blue-50 text-blue-700 border border-blue-200">
                Pillar 01
              </span>
              <h3 className="text-base font-bold text-slate-900 font-heading">Financial Perspective</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                Gross Margin, Rule of 40, CAC Payback, Net Retention (NRR), and Free Cash Flow Conversion.
              </p>
              <div className="text-[11px] font-mono text-emerald-700 font-bold pt-2 border-t border-slate-100">
                Cadence: Monthly Board Pack
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200/90 hover:border-indigo-400 hover:shadow-xl hover:-translate-y-0.5 space-y-2 shadow-sm transition-all">
              <span className="px-2.5 py-0.5 rounded text-[10px] font-mono font-bold bg-indigo-50 text-indigo-700 border border-indigo-200">
                Pillar 02
              </span>
              <h3 className="text-base font-bold text-slate-900 font-heading">Customer Perspective</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                Verified Value Realization, Net Promoter Score (NPS), Time-to-Value (TTV), and Gross Logo Churn.
              </p>
              <div className="text-[11px] font-mono text-indigo-700 font-bold pt-2 border-t border-slate-100">
                Cadence: Bi-Weekly Health Audit
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200/90 hover:border-purple-400 hover:shadow-xl hover:-translate-y-0.5 space-y-2 shadow-sm transition-all">
              <span className="px-2.5 py-0.5 rounded text-[10px] font-mono font-bold bg-purple-50 text-purple-700 border border-purple-200">
                Pillar 03
              </span>
              <h3 className="text-base font-bold text-slate-900 font-heading">Internal Operations</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                Pipeline Velocity, Stage Conversion, Sales Cycle Duration, and CPQ Redline Turnaround.
              </p>
              <div className="text-[11px] font-mono text-purple-700 font-bold pt-2 border-t border-slate-100">
                Cadence: Weekly Pipeline Review
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200/90 hover:border-slate-400 hover:shadow-xl hover:-translate-y-0.5 space-y-2 shadow-sm transition-all">
              <span className="px-2.5 py-0.5 rounded text-[10px] font-mono font-bold bg-slate-100 text-slate-700 border border-slate-200">
                Pillar 04
              </span>
              <h3 className="text-base font-bold text-slate-900 font-heading">Enablement</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                AE Quota Attainment Distribution, SDR Ramp Time, and Playbook Certification Pass Rates.
              </p>
              <div className="text-[11px] font-mono text-slate-700 font-bold pt-2 border-t border-slate-100">
                Cadence: Monthly Review
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════════
            BUSINESS FRAMEWORKS & TEMPLATES
        ══════════════════════════════════════════════════════════════════ */}
        <section id="business-frameworks-templates" className="scroll-mt-28 space-y-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between pb-4 border-b border-slate-200 gap-3">
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-heading">
                Business Frameworks & Templates
              </h2>
              <p className="text-sm sm:text-base text-slate-600 mt-1 max-w-3xl leading-relaxed">
                Curated library of executive blueprints: Enterprise Mutual Action Plans, CPQ Governance matrices, and Win/Loss interview protocols.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PLAYBOOK_RESOURCES.slice(0, 6).map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white border border-slate-200/90 hover:border-emerald-400 hover:shadow-xl hover:-translate-y-0.5 flex flex-col justify-between transition-all space-y-4 shadow-sm"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-0.5 rounded text-[10px] font-mono font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                      {item.category}
                    </span>
                    <span className="text-[11px] font-mono text-slate-500">
                      {item.targetAudience}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-slate-900 font-heading">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-slate-500">{item.format || 'Executive Blueprint'}</span>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-1 text-xs font-bold font-mono text-emerald-700 hover:text-emerald-800"
                  >
                    <span>Request Template</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════════
            BUSINESS CASES & ROI MODELS
        ══════════════════════════════════════════════════════════════════ */}
        <section id="business-cases-roi-models" className="scroll-mt-28 space-y-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between pb-4 border-b border-slate-200 gap-3">
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-heading">
                Business Cases & ROI Models
              </h2>
              <p className="text-sm sm:text-base text-slate-600 mt-1 max-w-3xl leading-relaxed">
                Deterministic capital justification tools engineered to withstand rigorous CFO review, including Net Present Value (NPV), Payback, and Internal Rate of Return (IRR).
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Interactive Margin ROI Model */}
            <div className="lg:col-span-7 rounded-2xl bg-white border border-slate-200/90 shadow-md p-6 sm:p-8 space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-cyan-50 border border-cyan-200 text-cyan-700 flex items-center justify-center">
                    <Calculator className="w-4 h-4" />
                  </div>
                  <span className="font-bold text-slate-900 text-base font-heading">Interactive 3-Year Enterprise ROI Calculator</span>
                </div>
                <span className="text-xs font-mono font-bold text-cyan-700 bg-cyan-50 px-2.5 py-0.5 rounded border border-cyan-200">
                  Live Model
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <div className="flex justify-between text-xs text-slate-600">
                    <span>Annual Revenue ($):</span>
                    <span className="font-mono font-bold text-slate-900">${(annualRevenue / 1000000).toFixed(1)}M</span>
                  </div>
                  <input
                    type="range"
                    min="5000000"
                    max="100000000"
                    step="1000000"
                    value={annualRevenue}
                    onChange={(e) => setAnnualRevenue(Number(e.target.value))}
                    className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-cyan-600"
                  />
                </div>

                <div className="space-y-1.5">
                  <div className="flex justify-between text-xs text-slate-600">
                    <span>Projected Margin Lift:</span>
                    <span className="font-mono font-bold text-emerald-700">+{projectedMarginLift}%</span>
                  </div>
                  <input
                    type="range"
                    min="1.0"
                    max="8.0"
                    step="0.5"
                    value={projectedMarginLift}
                    onChange={(e) => setProjectedMarginLift(Number(e.target.value))}
                    className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
                  />
                </div>

                <div className="space-y-1.5">
                  <div className="flex justify-between text-xs text-slate-600">
                    <span>Program Investment ($):</span>
                    <span className="font-mono font-bold text-blue-700">${(implementationInvestment / 1000).toFixed(0)}k</span>
                  </div>
                  <input
                    type="range"
                    min="50000"
                    max="500000"
                    step="10000"
                    value={implementationInvestment}
                    onChange={(e) => setImplementationInvestment(Number(e.target.value))}
                    className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                  />
                </div>

                <div className="space-y-1.5">
                  <div className="flex justify-between text-xs text-slate-600">
                    <span>Payback Speed:</span>
                    <span className="font-mono font-bold text-amber-600">{paybackMonths} Months</span>
                  </div>
                  <div className="p-2 rounded bg-slate-50 border border-slate-200 font-mono text-[11px] text-slate-500 text-center">
                    CFO Payback Threshold: &lt; 12 Mo
                  </div>
                </div>
              </div>

              {/* Output HUD */}
              <div className="p-5 rounded-2xl bg-cyan-50/50 border border-cyan-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <div className="text-[11px] font-mono uppercase font-bold text-slate-500">3-Year Cumulative Gross Return</div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-emerald-800 font-mono mt-0.5">
                    ${(threeYearGrossGain / 1000000).toFixed(2)}M
                  </div>
                  <div className="text-xs text-slate-600 font-mono mt-1">
                    Annual Recurring Benefit: <span className="text-slate-900 font-bold">${(additionalAnnualGrossProfit / 1000).toLocaleString()}k / yr</span>
                  </div>
                </div>

                <div className="text-right space-y-1">
                  <div className="text-[11px] font-mono font-bold text-slate-500 uppercase">Computed 3-Yr ROI</div>
                  <div className="text-2xl font-black text-cyan-800 font-mono">
                    +{netRoiPercentage}%
                  </div>
                </div>
              </div>
            </div>

            {/* Standard ROI Resource Profiles */}
            <div className="lg:col-span-5 space-y-4">
              {ROI_MODEL_RESOURCES.slice(0, 3).map((item, idx) => (
                <div key={idx} className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-sm space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-cyan-700 uppercase">{item.name}</span>
                    <span className="text-[10px] font-mono bg-emerald-50 text-emerald-700 border border-emerald-200 px-2.5 py-0.5 rounded font-bold">
                      {item.typicalPayback || '6-9 Mo'}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {item.description}
                  </p>
                  <div className="text-[11px] text-slate-500 font-mono pt-1">
                    Formula: {item.formula}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════════
            MATURITY ASSESSMENTS & WORKSHOPS
        ══════════════════════════════════════════════════════════════════ */}
        <section id="maturity-assessments-workshops" className="scroll-mt-28 space-y-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between pb-4 border-b border-slate-200 gap-3">
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-heading">
                Maturity Assessments & Workshops
              </h2>
              <p className="text-sm sm:text-base text-slate-600 mt-1 max-w-3xl leading-relaxed">
                Evaluating where your commercial organization sits on the 5-stage evolutionary curve, from ad-hoc chaos to fully autonomous revenue physics.
              </p>
            </div>
          </div>

          {/* 5-Stage Maturity Timeline */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {[
              { level: 'Stage 1', name: 'Ad-Hoc / Reactive', desc: 'Hero rep selling; subjective CRM notes; no stage-exit rigor; unpredictable quarterly misses.' },
              { level: 'Stage 2', name: 'Standardized', desc: 'Documented playbooks; basic MEDDPICC fields in CRM; manual manager pipeline reviews.' },
              { level: 'Stage 3', name: 'Instrumented', desc: 'Real-time sales velocity tracking; territory TAM tiering; algorithmic pipeline coverage formulas.' },
              { level: 'Stage 4', name: 'Predictive', desc: 'Bayesian win-probability updates; dark intent capture; CPQ automated guardrails; ±5% forecast accuracy.' },
              { level: 'Stage 5', name: 'Autonomous', desc: 'Multi-agent SDR & Deal Desk swarms; automated lead-to-cash reconciliation; continuous DMAIC Kaizen.' }
            ].map((st, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-sm space-y-2 hover:border-amber-400 hover:shadow-md transition-all"
              >
                <div className="text-xs font-mono font-bold text-amber-600">{st.level}</div>
                <div className="text-sm font-bold text-slate-900 font-heading">{st.name}</div>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">{st.desc}</p>
              </div>
            ))}
          </div>

          {/* Executive Workshop Profiles */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
            {WORKSHOP_RESOURCES.slice(0, 3).map((w, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-white border border-slate-200/90 hover:border-amber-400 hover:shadow-xl hover:-translate-y-0.5 space-y-3 shadow-sm transition-all">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-amber-700 uppercase">Executive Workshop</span>
                  <span className="text-[10px] font-mono text-slate-500 bg-slate-100 px-2 py-0.5 rounded">{w.duration}</span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 font-heading">{w.title}</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">{w.description}</p>
                <div className="pt-3 border-t border-slate-100 text-xs font-mono text-emerald-700 font-bold">
                  Deliverable: {w.deliverables?.[0] || 'Executive Roadmap'}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════════
            BUSINESS TOOLS & CALCULATORS
        ══════════════════════════════════════════════════════════════════ */}
        <section id="business-tools-calculators" className="scroll-mt-28 space-y-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between pb-4 border-b border-slate-200 gap-3">
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-heading">
                Business Tools & Calculators
              </h2>
              <p className="text-sm sm:text-base text-slate-600 mt-1 max-w-3xl leading-relaxed">
                Interactive web-based simulators engineered to diagnose pipeline health, capacity constraints, and pricing leakage in real-time.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ALL_TOOLS.map((tool) => (
              <div
                key={tool.id}
                className="p-6 rounded-2xl bg-white border border-slate-200/90 hover:border-rose-400 hover:shadow-xl hover:-translate-y-0.5 flex flex-col justify-between transition-all space-y-4 shadow-sm"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-0.5 rounded text-[10px] font-mono font-bold bg-rose-50 text-rose-700 border border-rose-200">
                      {tool.category}
                    </span>
                    <span className="text-[10px] font-mono text-slate-500">
                      {tool.difficulty}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-slate-900 font-heading">
                    {tool.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {tool.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-slate-500">Time: {tool.estimatedTime}</span>
                  <Link
                    to={`/resources-hub/tools-calculators-hub/${tool.slug}`}
                    className="inline-flex items-center gap-1 text-xs font-bold font-mono text-rose-700 hover:text-rose-800"
                  >
                    <span>Launch Tool</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>

      {/* ── BOTTOM CTA SECTION (EXECUTIVE DARK CONTRAST) ── */}
      <section className="border-t border-slate-200 bg-gradient-to-b from-slate-900 to-slate-950 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/80 border border-blue-800/60 text-blue-400 text-xs font-mono font-bold uppercase tracking-wider">
            Enterprise Engagement
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight font-heading">
            Deploy Institutional Frameworks to Your Commercial Operation
          </h2>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed font-normal">
            Transition from intuitive management to mathematical certainty. Schedule a strategic consultation to benchmark your commercial maturity against top-quartile enterprise peers.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <Link
              to="/book-consultation"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm shadow-lg shadow-blue-600/30 transition-all cursor-pointer"
            >
              <span>Schedule Strategy Briefing</span>
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
