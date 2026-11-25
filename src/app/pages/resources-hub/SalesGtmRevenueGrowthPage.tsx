import React, { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import {
  TrendingUp, Compass, Target, BarChart3, Sliders, Activity,
  Layers, CheckCircle2, ChevronRight, ArrowRight, ArrowUpRight,
  Sparkles, DollarSign, Users, Award, ShieldCheck, Zap,
  Calculator, PieChart, Workflow, FileText
} from 'lucide-react';
import { trackEvent } from '../../../lib/analytics';
import { SALES_ACCELERATION_SECTIONS } from '../../../data/salesAccelerationHubData';
import { GTM_REVOPS_SECTIONS } from '../../../data/gtmRevOpsHubData';

export default function SalesGtmRevenueGrowthPage() {
  const location = useLocation();
  const [activeMethodology, setActiveMethodology] = useState('meddpicc');
  const [dealCount, setDealCount] = useState(42);
  const [winRate, setWinRate] = useState(28);
  const [avgDealSize, setAvgDealSize] = useState(125000);
  const [cycleDays, setCycleDays] = useState(84);

  // Sales Velocity calculation: (Deals * WinRate% * AvgDealSize) / CycleDays
  const calculatedVelocityPerDay = Math.round((dealCount * (winRate / 100) * avgDealSize) / (cycleDays || 1));
  const calculatedMonthlyVelocity = calculatedVelocityPerDay * 30;

  useEffect(() => {
    document.title = 'Sales, GTM & Revenue Growth | ProfitMachines Resources';
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
    { id: 'sales-methodologies-playbooks', title: 'Sales Methodologies & Playbooks', icon: Compass, badge: 'Execution' },
    { id: 'sales-velocity-pipeline-optimization', title: 'Sales Velocity & Pipeline Optimization', icon: TrendingUp, badge: 'Throughput' },
    { id: 'account-territory-strategy', title: 'Account & Territory Strategy', icon: Target, badge: 'Allocation' },
    { id: 'icp-buyer-intelligence', title: 'ICP & Buyer Intelligence', icon: Users, badge: 'Precision' },
    { id: 'funnel-revenue-intelligence', title: 'Funnel & Revenue Intelligence', icon: Activity, badge: 'Telemetry' },
    { id: 'revops-revenue-forecasting', title: 'RevOps & Revenue Forecasting', icon: BarChart3, badge: 'Predictive' }
  ];

  const handleAnchorClick = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const navOffset = 95;
      const pos = el.getBoundingClientRect().top + window.pageYOffset - navOffset;
      window.scrollTo({ top: Math.max(0, pos), behavior: 'smooth' });
    }
  };

  const methodologies = [
    {
      id: 'meddpicc',
      name: 'MEDDPICC Enterprise Qualification',
      focus: 'Complex multi-stakeholder enterprise deals ($100k - $5M+)',
      coreLetters: [
        { letter: 'M', word: 'Metrics', desc: 'Quantifiable business case & operational KPI improvements' },
        { letter: 'E', word: 'Economic Buyer', desc: 'Person with discretionary budget authorization and veto power' },
        { letter: 'D', word: 'Decision Criteria', desc: 'Technical, financial, and operational scoring rubrics' },
        { letter: 'D', word: 'Decision Process', desc: 'Step-by-step consensus timeline from evaluation to board sign-off' },
        { letter: 'P', word: 'Paper Process', desc: 'Legal, infosec, procurement redlining, and Docusign execution' },
        { letter: 'I', word: 'Identify Pain', desc: 'Compelling cost of inaction and organizational distress' },
        { letter: 'C', word: 'Champion', desc: 'Internal advocate with political capital and access to economic buyer' },
        { letter: 'C', word: 'Competition', desc: 'Rival vendors, internal build options, and budget inertia' }
      ]
    },
    {
      id: 'challenger',
      name: 'The Challenger Sale Model',
      focus: 'Disruptive innovation, category creation, insight-led commercial selling',
      coreLetters: [
        { letter: 'T', word: 'Teach', desc: 'Deliver provocative commercial insights altering customer assumptions' },
        { letter: 'T', word: 'Tailor', desc: 'Resonate with specific role economic priorities and risks' },
        { letter: 'T', word: 'Take Control', desc: 'Assertively navigate pricing, contractual concessions, and next steps' }
      ]
    },
    {
      id: 'command',
      name: 'Command of the Message',
      focus: 'Value-based differentiation, pain-to-solution alignment, discounting protection',
      coreLetters: [
        { letter: 'P', word: 'Customer Problems', desc: 'Uncover the root causes of executive pain' },
        { letter: 'S', word: 'Our Solutions', desc: 'Map unique corporate capabilities to each identified problem' },
        { letter: 'D', word: 'Differentiators', desc: 'Provide proof points that no competitor can match' },
        { letter: 'V', word: 'Value Realized', desc: 'Measure post-sale financial return and payback speed' }
      ]
    }
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
            <span className="text-blue-600 font-bold">Sales, GTM & Revenue Growth</span>
          </nav>
        </div>
      </div>

      {/* ── HERO BANNER (OFFERINGS PRESTIGE DARK PANEL) ── */}
      <section className="relative pt-12 pb-16 md:pt-16 md:pb-20 bg-slate-950 text-white border-b border-slate-800 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 pointer-events-none" />
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-mono font-bold uppercase tracking-widest mb-5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Commercial Execution & Revenue Physics</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight font-heading mb-4">
              Sales, GTM &{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-indigo-300">
                Revenue Growth
              </span>
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl font-normal">
              Mathematical playbooks, deal acceleration frameworks, territory allocation logic, and predictive revenue operations designed for high-velocity enterprise commercial organizations.
            </p>

            <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800">
                <div className="text-xl sm:text-2xl font-black text-white font-mono">6 Stage</div>
                <div className="text-[11px] text-slate-400 font-medium">Stage-Exit Rigor</div>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800">
                <div className="text-xl sm:text-2xl font-black text-emerald-400 font-mono">+42%</div>
                <div className="text-[11px] text-slate-400 font-medium">Pipeline Throughput</div>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800">
                <div className="text-xl sm:text-2xl font-black text-blue-400 font-mono">94.8%</div>
                <div className="text-[11px] text-slate-400 font-medium">Forecast Accuracy</div>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800">
                <div className="text-xl sm:text-2xl font-black text-indigo-300 font-mono">2.4x</div>
                <div className="text-[11px] text-slate-400 font-medium">AE Quota Attainment</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── IN-PAGE ANCHOR JUMP BAR (OFFERINGS LIGHT STYLE, NON-STICKY) ── */}
      <section className="border-b border-slate-200 bg-slate-50/90 py-3.5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider mb-2">
            Growth Architecture · 6 Submenus
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
            SALES METHODOLOGIES & PLAYBOOKS
        ══════════════════════════════════════════════════════════════════ */}
        <section id="sales-methodologies-playbooks" className="scroll-mt-28 space-y-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between pb-4 border-b border-slate-200 gap-3">
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-heading">
                Sales Methodologies & Playbooks
              </h2>
              <p className="text-sm sm:text-base text-slate-600 mt-1 max-w-3xl leading-relaxed">
                Battle-tested frameworks engineered to eliminate subjective optimism, qualify economic buyers early, and enforce institutional deal discipline.
              </p>
            </div>
          </div>

          {/* Interactive Methodology Switcher */}
          <div className="flex flex-wrap gap-2">
            {methodologies.map((m) => (
              <button
                key={m.id}
                onClick={() => setActiveMethodology(m.id)}
                className={`px-4 py-2.5 rounded-xl text-xs font-bold font-heading transition-all cursor-pointer ${
                  activeMethodology === m.id
                    ? 'bg-slate-900 text-white shadow-md'
                    : 'bg-white text-slate-700 hover:bg-slate-50 border border-slate-200 shadow-2xs'
                }`}
              >
                {m.name}
              </button>
            ))}
          </div>

          {/* Methodology Details Card */}
          {(() => {
            const current = methodologies.find(m => m.id === activeMethodology) || methodologies[0];
            return (
              <div className="rounded-2xl bg-white border border-slate-200/90 shadow-md p-6 sm:p-8 space-y-6 relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600" />
                
                <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-5 border-b border-slate-100 gap-2">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 font-heading">{current.name}</h3>
                    <p className="text-xs text-slate-500 mt-0.5">{current.focus}</p>
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-blue-50 text-blue-700 border border-blue-200 self-start sm:self-auto">
                    Approved Enterprise Standard
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {current.coreLetters.map((c, idx) => (
                    <div key={idx} className="p-4 rounded-xl bg-slate-50/80 border border-slate-200/80 space-y-2">
                      <div className="flex items-center gap-2.5">
                        <span className="w-8 h-8 rounded-lg bg-blue-600 text-white font-mono font-bold text-xs flex items-center justify-center shadow-2xs">
                          {c.letter}
                        </span>
                        <span className="font-bold text-slate-900 text-sm font-heading">{c.word}</span>
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed font-normal">
                        {c.desc}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                  <div className="space-y-1">
                    <span className="font-bold text-slate-900 font-heading">Sales Enablement Impact:</span>
                    <p className="text-slate-600">Standardized deal inspection during weekly 1-on-1s increases pipeline conversion from 18% to 32% within two quarters.</p>
                  </div>
                  <Link
                    to="/book-consultation"
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-bold font-mono shrink-0 transition-colors shadow-2xs"
                  >
                    <span>Request Methodology Audit</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            );
          })()}
        </section>

        {/* ══════════════════════════════════════════════════════════════════
            SALES VELOCITY & PIPELINE OPTIMIZATION
        ══════════════════════════════════════════════════════════════════ */}
        <section id="sales-velocity-pipeline-optimization" className="scroll-mt-28 space-y-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between pb-4 border-b border-slate-200 gap-3">
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-heading">
                Sales Velocity & Pipeline Optimization
              </h2>
              <p className="text-sm sm:text-base text-slate-600 mt-1 max-w-3xl leading-relaxed">
                Interactive calculation and stage-exit telemetry governing revenue throughput: Velocity = (Opportunities × Win Rate × ACV) ÷ Sales Cycle Length.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Interactive Velocity Calculator */}
            <div className="lg:col-span-7 rounded-2xl bg-white border border-slate-200/90 shadow-md p-6 sm:p-8 space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-700 flex items-center justify-center">
                    <Calculator className="w-4 h-4" />
                  </div>
                  <span className="font-bold text-slate-900 text-base font-heading">Interactive Sales Velocity Engine</span>
                </div>
                <span className="text-xs font-mono font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded border border-emerald-200">
                  Live Model
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <div className="flex justify-between text-xs text-slate-600">
                    <span>Qualified Opps (N):</span>
                    <span className="font-mono font-bold text-slate-900">{dealCount}</span>
                  </div>
                  <input
                    type="range"
                    min="5"
                    max="150"
                    value={dealCount}
                    onChange={(e) => setDealCount(Number(e.target.value))}
                    className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
                  />
                </div>

                <div className="space-y-1.5">
                  <div className="flex justify-between text-xs text-slate-600">
                    <span>Win Rate % (W):</span>
                    <span className="font-mono font-bold text-emerald-700">{winRate}%</span>
                  </div>
                  <input
                    type="range"
                    min="5"
                    max="65"
                    value={winRate}
                    onChange={(e) => setWinRate(Number(e.target.value))}
                    className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
                  />
                </div>

                <div className="space-y-1.5">
                  <div className="flex justify-between text-xs text-slate-600">
                    <span>Avg Deal Size (L):</span>
                    <span className="font-mono font-bold text-blue-700">${(avgDealSize / 1000).toFixed(0)}k</span>
                  </div>
                  <input
                    type="range"
                    min="20000"
                    max="500000"
                    step="5000"
                    value={avgDealSize}
                    onChange={(e) => setAvgDealSize(Number(e.target.value))}
                    className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                  />
                </div>

                <div className="space-y-1.5">
                  <div className="flex justify-between text-xs text-slate-600">
                    <span>Sales Cycle (T in days):</span>
                    <span className="font-mono font-bold text-amber-600">{cycleDays} Days</span>
                  </div>
                  <input
                    type="range"
                    min="15"
                    max="180"
                    value={cycleDays}
                    onChange={(e) => setCycleDays(Number(e.target.value))}
                    className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-amber-600"
                  />
                </div>
              </div>

              {/* Output Result HUD */}
              <div className="p-5 rounded-2xl bg-emerald-50/50 border border-emerald-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <div className="text-[11px] font-mono uppercase font-bold text-slate-500">Computed Pipeline Velocity</div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-emerald-800 font-mono mt-0.5">
                    ${calculatedVelocityPerDay.toLocaleString()} <span className="text-xs text-slate-500 font-normal">/ day</span>
                  </div>
                  <div className="text-xs text-slate-600 font-mono mt-1">
                    30-Day Run-Rate: <span className="text-slate-900 font-bold">${calculatedMonthlyVelocity.toLocaleString()}</span>
                  </div>
                </div>

                <div className="text-xs text-slate-600 max-w-[240px] text-right space-y-1">
                  <span className="text-emerald-700 font-bold block font-heading">15% Cycle Reduction Yield:</span>
                  <span>Shortening cycle to {Math.round(cycleDays * 0.85)} days elevates monthly velocity by +17.6%.</span>
                </div>
              </div>
            </div>

            {/* Stage-Exit Criteria Architecture */}
            <div className="lg:col-span-5 rounded-2xl bg-white border border-slate-200/90 shadow-md p-6 space-y-4">
              <h3 className="text-base font-bold text-slate-900 font-heading flex items-center gap-2">
                <Workflow className="w-4 h-4 text-blue-600" />
                Pipeline Stage-Exit Governance Rigor
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Deals cannot advance based on AE optimism. Strict forensic evidence gates govern stage progression.
              </p>

              <div className="space-y-3 text-xs">
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                  <div className="flex items-center justify-between font-bold text-slate-900 font-heading">
                    <span>Stage 1: Verified Discovery</span>
                    <span className="text-emerald-700 font-mono text-[11px]">Signed Pain Doc</span>
                  </div>
                  <div className="text-slate-600 text-[11px]">Uncovered quantifiable operational cost of inaction confirmed in writing.</div>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                  <div className="flex items-center justify-between font-bold text-slate-900 font-heading">
                    <span>Stage 2: Solution Validation</span>
                    <span className="text-emerald-700 font-mono text-[11px]">Tech Sign-off</span>
                  </div>
                  <div className="text-slate-600 text-[11px]">Champion and technical lead approve architecture and data requirements.</div>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                  <div className="flex items-center justify-between font-bold text-slate-900 font-heading">
                    <span>Stage 3: Economic Buyer Review</span>
                    <span className="text-emerald-700 font-mono text-[11px]">Direct EB Meeting</span>
                  </div>
                  <div className="text-slate-600 text-[11px]">Direct 30-min briefing with authorized budget signer validating ROI model.</div>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                  <div className="flex items-center justify-between font-bold text-slate-900 font-heading">
                    <span>Stage 4: Procurement & Legal</span>
                    <span className="text-emerald-700 font-mono text-[11px]">MSA Redlines</span>
                  </div>
                  <div className="text-slate-600 text-[11px]">Final terms delivered to legal with mutual close plan signed by both sides.</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════════
            ACCOUNT & TERRITORY STRATEGY
        ══════════════════════════════════════════════════════════════════ */}
        <section id="account-territory-strategy" className="scroll-mt-28 space-y-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between pb-4 border-b border-slate-200 gap-3">
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-heading">
                Account & Territory Strategy
              </h2>
              <p className="text-sm sm:text-base text-slate-600 mt-1 max-w-3xl leading-relaxed">
                Eliminating geographic bias through mathematical account tiering, workload balancing, and Total Addressable Market (TAM) coverage.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-2xl bg-white border border-slate-200/90 hover:border-blue-400 hover:shadow-xl hover:-translate-y-0.5 p-6 space-y-4 shadow-sm transition-all">
              <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-200 text-blue-700 flex items-center justify-center font-bold text-base font-mono">
                T1
              </div>
              <h3 className="text-lg font-bold text-slate-900 font-heading">Tier 1: Strategic Accounts</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Top 50-100 accounts per enterprise pod with verified $500k+ potential ARR. 1:1 bespoke ABM with dedicated executive sponsors.
              </p>
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs space-y-1">
                <div className="flex justify-between text-slate-700 font-medium">
                  <span>AE Allocation:</span>
                  <span className="font-mono font-bold text-slate-900">15 - 25 Accounts</span>
                </div>
                <div className="flex justify-between text-slate-700 font-medium">
                  <span>Touches Per Quarter:</span>
                  <span className="font-mono font-bold text-blue-700">36+ Touches</span>
                </div>
              </div>
            </div>

            <div className="rounded-2xl bg-white border border-slate-200/90 hover:border-indigo-400 hover:shadow-xl hover:-translate-y-0.5 p-6 space-y-4 shadow-sm transition-all">
              <div className="w-12 h-12 rounded-xl bg-indigo-50 border border-indigo-200 text-indigo-700 flex items-center justify-center font-bold text-base font-mono">
                T2
              </div>
              <h3 className="text-lg font-bold text-slate-900 font-heading">Tier 2: Scale Expansion</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                High-density accounts with $100k - $499k potential ARR. Segment-specific plays driven by 1:few thematic campaigns and trigger events.
              </p>
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs space-y-1">
                <div className="flex justify-between text-slate-700 font-medium">
                  <span>AE Allocation:</span>
                  <span className="font-mono font-bold text-slate-900">60 - 90 Accounts</span>
                </div>
                <div className="flex justify-between text-slate-700 font-medium">
                  <span>Touches Per Quarter:</span>
                  <span className="font-mono font-bold text-indigo-700">18 - 24 Touches</span>
                </div>
              </div>
            </div>

            <div className="rounded-2xl bg-white border border-slate-200/90 hover:border-cyan-400 hover:shadow-xl hover:-translate-y-0.5 p-6 space-y-4 shadow-sm transition-all">
              <div className="w-12 h-12 rounded-xl bg-sky-50 border border-sky-200 text-sky-700 flex items-center justify-center font-bold text-base font-mono">
                T3
              </div>
              <h3 className="text-lg font-bold text-slate-900 font-heading">Tier 3: Programmatic Coverage</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Broad commercial market ($25k - $99k ARR). Automated intent-sensing workflows, programmatic digital engagement, and self-serve onboarding.
              </p>
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs space-y-1">
                <div className="flex justify-between text-slate-700 font-medium">
                  <span>AE Allocation:</span>
                  <span className="font-mono font-bold text-slate-900">Inbound Pods</span>
                </div>
                <div className="flex justify-between text-slate-700 font-medium">
                  <span>Touches Per Quarter:</span>
                  <span className="font-mono font-bold text-sky-700">AI Sequences</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════════
            ICP & BUYER INTELLIGENCE
        ══════════════════════════════════════════════════════════════════ */}
        <section id="icp-buyer-intelligence" className="scroll-mt-28 space-y-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between pb-4 border-b border-slate-200 gap-3">
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-heading">
                ICP & Buyer Intelligence
              </h2>
              <p className="text-sm sm:text-base text-slate-600 mt-1 max-w-3xl leading-relaxed">
                Mapping the modern 6-10 person enterprise buying committee, capturing dark intent signals, and neutralizing hidden organizational friction.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-white border border-slate-200/90 hover:border-blue-400 hover:shadow-xl hover:-translate-y-0.5 space-y-3 shadow-sm transition-all">
              <span className="px-2.5 py-0.5 rounded text-[10px] font-mono font-bold bg-blue-50 text-blue-700 border border-blue-200">
                Persona 01
              </span>
              <h3 className="text-base font-bold text-slate-900 font-heading">The Economic Buyer</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                CFO / CRO / SVP. Focused on payback duration, EBITDA impact, risk containment, and cross-departmental capital efficiency.
              </p>
              <div className="text-[11px] font-mono text-emerald-700 font-bold pt-2 border-t border-slate-100">
                Primary: 3-Year ROI Audit
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200/90 hover:border-indigo-400 hover:shadow-xl hover:-translate-y-0.5 space-y-3 shadow-sm transition-all">
              <span className="px-2.5 py-0.5 rounded text-[10px] font-mono font-bold bg-indigo-50 text-indigo-700 border border-indigo-200">
                Persona 02
              </span>
              <h3 className="text-base font-bold text-slate-900 font-heading">The Technical Champion</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                VP Engineering / Head of Architecture. Evaluating API robustness, latency, data governance, SOC-2 compliance, and maintenance overhead.
              </p>
              <div className="text-[11px] font-mono text-indigo-700 font-bold pt-2 border-t border-slate-100">
                Primary: Architecture Sandbox
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200/90 hover:border-cyan-400 hover:shadow-xl hover:-translate-y-0.5 space-y-3 shadow-sm transition-all">
              <span className="px-2.5 py-0.5 rounded text-[10px] font-mono font-bold bg-cyan-50 text-cyan-700 border border-cyan-200">
                Persona 03
              </span>
              <h3 className="text-base font-bold text-slate-900 font-heading">The User Advocate</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                Director of Operations / Sales Managers. Worried about workflow disruption, change management friction, and daily team usability.
              </p>
              <div className="text-[11px] font-mono text-sky-700 font-bold pt-2 border-t border-slate-100">
                Primary: Day-in-the-Life Demo
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200/90 hover:border-slate-400 hover:shadow-xl hover:-translate-y-0.5 space-y-3 shadow-sm transition-all">
              <span className="px-2.5 py-0.5 rounded text-[10px] font-mono font-bold bg-slate-100 text-slate-700 border border-slate-200">
                Persona 04
              </span>
              <h3 className="text-base font-bold text-slate-900 font-heading">Procurement & Infosec</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                Legal Counsel / CISO. Enforcing indemnity boundaries, audit rights, data sovereignty, SLA penalties, and payment schedules.
              </p>
              <div className="text-[11px] font-mono text-slate-700 font-bold pt-2 border-t border-slate-100">
                Primary: Security Trust Center
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════════
            FUNNEL & REVENUE INTELLIGENCE
        ══════════════════════════════════════════════════════════════════ */}
        <section id="funnel-revenue-intelligence" className="scroll-mt-28 space-y-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between pb-4 border-b border-slate-200 gap-3">
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-heading">
                Funnel & Revenue Intelligence
              </h2>
              <p className="text-sm sm:text-base text-slate-600 mt-1 max-w-3xl leading-relaxed">
                Continuous Bayesian analysis of deal momentum, stakeholder engagement decay, email sentiment, and stalled opportunity warning triggers.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-white border border-slate-200/90 hover:border-rose-400 hover:shadow-xl hover:-translate-y-0.5 space-y-3 shadow-sm transition-all">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-rose-600 uppercase">Warning Trigger 01</span>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-rose-50 text-rose-700 border border-rose-200">Critical Risk</span>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900 font-heading">Economic Buyer Disengagement</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                Zero inbound responses from executive sponsor for 14+ business days, even if technical evaluators remain active. Deal stall probability jumps to 78%.
              </p>
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700">
                Protocol: Executive sponsor peer-to-peer outreach triggered.
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200/90 hover:border-amber-400 hover:shadow-xl hover:-translate-y-0.5 space-y-3 shadow-sm transition-all">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-amber-600 uppercase">Warning Trigger 02</span>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-amber-50 text-amber-700 border border-amber-200">Medium Risk</span>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900 font-heading">Stage Dwell Time Exceeded</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                Opportunity remaining in "Solution Validation" for over 1.5x the median historical winning dwell time (28 days). Close probability decays by 3.2% per day.
              </p>
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700">
                Protocol: Deal desk technical review and mutual plan re-alignment.
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200/90 hover:border-blue-400 hover:shadow-xl hover:-translate-y-0.5 space-y-3 shadow-sm transition-all">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-blue-600 uppercase">Warning Trigger 03</span>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-blue-50 text-blue-700 border border-blue-200">Observation</span>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900 font-heading">Single-Threaded Trap</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                Less than 3 verified contacts in the CRM opportunity record during proposal stages. 64% of single-threaded enterprise opportunities collapse upon rep turnover.
              </p>
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700">
                Protocol: Multi-threading play initiating automated SDR executive mapping.
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════════
            REVOPS & REVENUE FORECASTING
        ══════════════════════════════════════════════════════════════════ */}
        <section id="revops-revenue-forecasting" className="scroll-mt-28 space-y-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between pb-4 border-b border-slate-200 gap-3">
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-heading">
                RevOps & Revenue Forecasting
              </h2>
              <p className="text-sm sm:text-base text-slate-600 mt-1 max-w-3xl leading-relaxed">
                Triangulating rep call-numbers, weighted pipeline math, historical cohort conversion, and machine-learning deal scoring to achieve ±5% forecast accuracy.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-white border border-slate-200/90 hover:border-blue-400 hover:shadow-xl hover:-translate-y-0.5 space-y-4 shadow-sm transition-all">
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 text-blue-700 font-mono font-bold text-xs flex items-center justify-center">
                  01
                </div>
                <h3 className="text-base font-bold text-slate-900 font-heading">Manager Rollup Forecast</h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                Bottom-up commitments submitted by Front-Line Managers based on subjective MEDDPICC inspection and qualitative verbal commitments from customer executives.
              </p>
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs">
                <span className="text-slate-500">Typical Error Margin: </span>
                <span className="text-amber-700 font-mono font-bold">±18% to 26%</span>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200/90 hover:border-indigo-400 hover:shadow-xl hover:-translate-y-0.5 space-y-4 shadow-sm transition-all">
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-200 text-indigo-700 font-mono font-bold text-xs flex items-center justify-center">
                  02
                </div>
                <h3 className="text-base font-bold text-slate-900 font-heading">Cohort Historical Model</h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                Stage-weighted mathematical conversion based on trailing 8-quarter performance by segment, ACV tier, and rep tenure with seasonal adjustment coefficients.
              </p>
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs">
                <span className="text-slate-500">Typical Error Margin: </span>
                <span className="text-blue-700 font-mono font-bold">±8% to 12%</span>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200/90 hover:border-emerald-400 hover:shadow-xl hover:-translate-y-0.5 space-y-4 shadow-sm transition-all">
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-700 font-mono font-bold text-xs flex items-center justify-center">
                  03
                </div>
                <h3 className="text-base font-bold text-slate-900 font-heading">Triangulated ML Composite</h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                ProfitMachines proprietary synthesis combining real-time buyer digital signals, relationship graphing, email responsiveness, and contract redline velocity.
              </p>
              <div className="p-3.5 rounded-xl bg-emerald-50/50 border border-emerald-200 text-xs">
                <span className="text-slate-600">Achieved Error Margin: </span>
                <span className="text-emerald-800 font-mono font-bold">±3.4% at Day 45</span>
              </div>
            </div>
          </div>
        </section>

      </div>

      {/* ── BOTTOM CTA SECTION (EXECUTIVE DARK CONTRAST) ── */}
      <section className="border-t border-slate-200 bg-gradient-to-b from-slate-900 to-slate-950 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/80 border border-blue-800/60 text-blue-400 text-xs font-mono font-bold uppercase tracking-wider">
            Commercial Diagnostics
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight font-heading">
            Accelerate Your Enterprise Revenue Velocity
          </h2>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed font-normal">
            Uncover where pipeline stalls, eliminate forecast subjectivity, and equip your revenue organization with mathematical sales playbooks.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <Link
              to="/book-consultation"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm shadow-lg shadow-blue-600/30 transition-all cursor-pointer"
            >
              <span>Schedule Pipeline Diagnostic</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/offerings/sales-acceleration"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-sm border border-slate-700 transition-all cursor-pointer"
            >
              <span>Explore Sales Acceleration Offering</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
