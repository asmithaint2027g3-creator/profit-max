import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight, ChevronRight, Activity, TrendingUp, Zap,
  BarChart3, Layers, Compass, Shield, CheckCircle2,
  AlertTriangle, Quote, Cpu, Radar, LineChart, Sparkles,
  ArrowUpRight, HelpCircle, ChevronDown, Award, Scale
} from 'lucide-react';
import { AiSalesIntakeForm } from '../../components/forms/AiSalesIntakeForm';

export default function RevenuePhysicsPage() {
  const [selectedLaw, setSelectedLaw] = useState(0);

  useEffect(() => {
    document.title = 'Revenue Physics: The Laws That Govern Growth | ProfitMachines';
    window.scrollTo(0, 0);
  }, []);

  const laws = [
    {
      title: 'Customer Lifetime Value Mechanics',
      lawName: 'Law of Cohort Momentum & Compounding Trajectory',
      formula: 'LTV(t) = ∑ [ARPU_i · GrossMargin · (Retention_i)^t] / (1 + WACC)^t',
      question: 'Do you know which customers compound value — and which destroy it?',
      situation: 'Most companies track revenue by quarter, not by customer lifetime value trajectory. They treat all customers as equal, regardless of their expansion potential or churn risk.',
      hiddenProblem: 'A small cohort of high-LTV customers often drives 80% of long-term value, while a larger cohort of low-LTV customers consumes disproportionate resources. Without this segmentation, you\'re optimizing for the wrong outcomes.',
      implication: 'You over-invest in acquiring low-value customers while under-investing in expanding high-value ones. Growth feels expensive because you\'re funding the wrong flywheel.',
      trigger: 'When CAC climbs but LTV stays flat, the unit economics break — and no amount of top-line growth fixes it.',
      resolution: 'We map every customer cohort by LTV trajectory, identify the high-compounding segments, and reallocate acquisition and retention resources accordingly.',
      metric: '25-40%',
      metricLabel: 'improvement in LTV:CAC ratio within 6 months',
      secondaryMetric: '3.2X',
      secondaryMetricLabel: 'higher expansion rate in top decile cohorts',
      quote: 'We were acquiring customers at scale but didn\'t realize 60% of them would never expand beyond their initial contract.',
      quoteAuthor: 'Chief Revenue Officer, Series D Enterprise Infrastructure'
    },
    {
      title: 'Market & White-Space Dynamics',
      lawName: 'Law of Concentrated Profit Pools & Marginal Defensibility',
      formula: 'Profit Pool = ∑ [TAM_micro · Margin_defensible · (1 - RivalDensity)]',
      question: 'Are you competing in the right micro-segments — or just the biggest ones?',
      situation: 'Companies size markets top-down (TAM, SAM, SOM) and chase the largest segments. They assume bigger markets equal bigger opportunities.',
      hiddenProblem: 'The largest segments are often the most competitive, with the thinnest margins. Meanwhile, smaller micro-segments with high defensibility and concentrated profit pools remain invisible.',
      implication: 'You invest heavily in segments where you can\'t win — or where winning doesn\'t pay. Meanwhile, competitors quietly dominate the profitable niches you never mapped.',
      trigger: 'When market share grows but contribution margin shrinks, you\'re winning the wrong battles.',
      resolution: 'We dissect TAM into unit-economic micro-segments, identify where profit pools concentrate, and target the segments you can own — not just the ones that look impressive in board decks.',
      metric: '15-25%',
      metricLabel: 'margin recovery through white-space micro-segment targeting',
      secondaryMetric: '$400M',
      secondaryMetricLabel: 'high-margin whitespace isolated from crowded TAM',
      quote: 'We sized the market at $2B but didn\'t know which $400M micro-segment had 32% margin and low competition.',
      quoteAuthor: 'VP Strategy, B2B SaaS Platform'
    },
    {
      title: 'Product-Led Growth Triggers',
      lawName: 'Law of Behavioral Tipping Points & Expansion Inevitability',
      formula: 'P(Conversion) = f(DepthThreshold, VelocityToMilestone, SeatExpansionRate)',
      question: 'Do you know which product behaviors predict paid conversion — or are you guessing?',
      situation: 'Product teams track usage metrics (DAU, MAU, feature adoption) but don\'t connect them to revenue outcomes. They assume engagement equals monetization.',
      hiddenProblem: 'Specific usage patterns — not just volume — predict when a user is ready to convert, expand, or churn. Without identifying these triggers, you\'re leaving conversion to chance.',
      implication: 'High-engagement users extract full value at zero incremental revenue, while the highest-margin revenue sits unharvested.',
      trigger: 'When an enterprise consolidation forces your champion to justify seat counts you can\'t evidence with usage data.',
      resolution: 'We identify the behavioral tipping points that precede paid conversion, wire them to automated upgrade triggers, and redesign packaging around the moments that matter.',
      metric: '30-50%',
      metricLabel: 'increase in free-to-paid conversion within 2 quarters',
      secondaryMetric: '14 Days',
      secondaryMetricLabel: 'reduction in median time-to-value milestone',
      quote: 'Power users were getting full value for free while we struggled to justify expansion to the CFO.',
      quoteAuthor: 'Head of Growth, Data & Analytics Unicorn'
    },
    {
      title: 'Unit Economic Fundamentals',
      lawName: 'Law of Value Conservation & Granular Contribution Margin',
      formula: 'True Margin = Revenue - CAC_allocated - ServicingCost_direct - SupportLoad',
      question: 'Do you know the true cost to serve every customer — or just the average?',
      situation: 'Companies track blended metrics (average CAC, average LTV, average margin) and assume the average represents reality.',
      hiddenProblem: 'Averages hide extremes. Some customers are highly profitable; others destroy value. Without customer-level unit economics, you can\'t optimize where it matters.',
      implication: 'You scale revenue that looks healthy on average but is quietly eroding margins. By the time you notice, the damage is done.',
      trigger: 'When margins compress "inexplicably" in your strongest quarter, or a supplier failure strands signed contracts.',
      resolution: 'We audit cost-to-serve at the customer and SKU level, identify the bottom 20% that destroys value, and either fix, reprice, or exit those segments before scaling further.',
      metric: '10-20 pts',
      metricLabel: 'gross margin recovery through unit economic optimization',
      secondaryMetric: '22%',
      secondaryMetricLabel: 'of existing contracts identified as net-value dilutive',
      quote: 'We thought we were profitable until we audited cost-to-serve and realized our top 10 customers were actually loss-making.',
      quoteAuthor: 'Chief Financial Officer, Global Enterprise Logistics'
    }
  ];

  const outcomes = [
    { stat: '25-40%', label: 'Improvement in LTV:CAC Ratio', detail: 'Achieved in 6 months through rigorous cohort reallocation' },
    { stat: '15-25%', label: 'Margin Recovery in White Space', detail: 'Isolating defensible micro-segments with zero price erosion' },
    { stat: '30-50%', label: 'Lift in Product-Led Conversion', detail: 'Engineered trigger-based monetization tied to actual usage milestones' },
    { stat: '10-20 pts', label: 'Gross Margin Expansion', detail: 'Eliminating hidden servicing drains across legacy customer cohorts' }
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans">

      {/* ── HERO ── */}
      <section className="relative pt-20 pb-20 sm:pt-28 sm:pb-28 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute inset-0 opacity-[0.22]" style={{ backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.07) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.07) 1px, transparent 1px)', backgroundSize: '4rem 4rem' }} />
          <div className="absolute top-0 right-1/3 w-[650px] h-[650px] bg-blue-600/15 rounded-full blur-[140px]" />
          <div className="absolute bottom-0 right-10 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px]" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center gap-2 mb-6">
            <Link to="/growth-science" className="text-xs font-mono text-slate-400 hover:text-white transition-colors">
              Growth Science Hub
            </Link>
            <span className="text-slate-600 text-xs">/</span>
            <span className="text-xs font-mono text-blue-400 font-bold uppercase tracking-wider">
              Pillar 01
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/15 border border-blue-400/30 text-blue-300 text-xs font-bold tracking-widest uppercase font-mono mb-6">
                <Activity className="w-3.5 h-3.5 text-blue-400" />
                PILLAR 01 OF 05
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.07] mb-6 font-heading">
                Revenue Physics:{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-300">
                  The Laws That Govern Growth
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-slate-300 leading-relaxed max-w-2xl mb-8">
                Before you can accelerate revenue, you must understand the forces acting on it. Four fundamental mechanics determine whether your business grows predictably or stalls unpredictably.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="#intake" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold px-7 py-4 rounded-xl text-sm shadow-lg shadow-blue-600/30 transition-all hover:-translate-y-0.5 group font-mono uppercase tracking-wider">
                  Run a Physics Diagnostic
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
                <a href="#scientific-laws" className="inline-flex items-center gap-2 border border-slate-700 bg-slate-900/80 hover:bg-slate-800 text-slate-200 font-bold px-6 py-4 rounded-xl text-sm transition-all font-mono uppercase tracking-wider">
                  Examine The 4 Laws
                  <ChevronRight className="w-4 h-4 text-blue-400" />
                </a>
              </div>
            </div>

            {/* Visual: Physics Force Vectors Simulation Card */}
            <div className="lg:col-span-5">
              <div className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-2xl relative backdrop-blur-xl">
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">Vector Dynamics Model</span>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-500/20 text-blue-300 border border-blue-500/30">Equilibrium Point: 4.8X</span>
                </div>

                <div className="space-y-4">
                  <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800">
                    <div className="flex justify-between items-center text-xs font-mono mb-2">
                      <span className="text-slate-400 flex items-center gap-1.5"><ArrowUpRight className="w-3.5 h-3.5 text-blue-400" /> Force Vector: Acquisition Velocity</span>
                      <span className="text-blue-300 font-bold">+38% Lift</span>
                    </div>
                    <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                      <div className="bg-gradient-to-r from-blue-600 to-cyan-400 h-full w-[78%]" />
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800">
                    <div className="flex justify-between items-center text-xs font-mono mb-2">
                      <span className="text-slate-400 flex items-center gap-1.5"><ArrowUpRight className="w-3.5 h-3.5 text-emerald-400" /> Force Vector: Expansion Momentum</span>
                      <span className="text-emerald-300 font-bold">+128% NRR</span>
                    </div>
                    <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                      <div className="bg-gradient-to-r from-emerald-600 to-teal-400 h-full w-[84%]" />
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800">
                    <div className="flex justify-between items-center text-xs font-mono mb-2">
                      <span className="text-slate-400 flex items-center gap-1.5"><Scale className="w-3.5 h-3.5 text-amber-400" /> Counter-Force: Servicing Drag (Friction)</span>
                      <span className="text-amber-300 font-bold">-42% Damped</span>
                    </div>
                    <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                      <div className="bg-gradient-to-r from-amber-600 to-rose-400 h-full w-[28%]" />
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800">
                    <div className="flex justify-between items-center text-xs font-mono mb-2">
                      <span className="text-slate-400 flex items-center gap-1.5"><Activity className="w-3.5 h-3.5 text-violet-400" /> Net Vector: Compounding Acceleration</span>
                      <span className="text-violet-300 font-bold">Max Velocity</span>
                    </div>
                    <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                      <div className="bg-gradient-to-r from-violet-600 to-indigo-400 h-full w-[92%]" />
                    </div>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-slate-800 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span>Equilibrium Vector Calculation</span>
                  <span className="text-emerald-400 font-bold">Deterministic Trajectory</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── THE PRINCIPLE ── */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-xs font-mono text-blue-700 uppercase tracking-widest font-bold">First Principles of Growth</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2 font-heading">
              Revenue Follows Physical Laws
            </h2>
          </div>
          <div className="p-8 sm:p-12 rounded-3xl bg-white border border-slate-200 shadow-sm relative">
            <div className="absolute top-6 right-8 text-slate-200 font-serif text-7xl select-none leading-none opacity-40">“</div>
            <p className="text-lg sm:text-xl text-slate-700 leading-relaxed font-normal">
              Just as gravity governs physical systems, specific economic laws govern revenue behavior. Customer lifetime value compounds or decays based on identifiable forces. Market dynamics create profit pools that concentrate in predictable patterns. Product usage triggers conversion at specific behavioral tipping points. Unit economics determine which revenue scales profitably and which destroys value. These aren't opinions — they're measurable, predictable laws. Master them, and growth becomes engineered, not hoped for.
            </p>
            <div className="mt-8 pt-6 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-bold text-sm">PM</div>
                <div>
                  <div className="text-sm font-bold text-slate-900">ProfitMachines Revenue Architecture Practice</div>
                  <div className="text-xs text-slate-500 font-mono">Bain Strategic Rigor × Palantir Engineering</div>
                </div>
              </div>
              <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-blue-600 bg-blue-50 px-3 py-1.5 rounded-lg border border-blue-200">
                4 Mathematical Invariants
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── THE 4 LAWS (SCIENTIFIC PRINCIPLES LAYOUT) ── */}
      <section id="scientific-laws" className="py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <span className="text-xs font-mono text-blue-600 uppercase tracking-widest font-bold">Invariant Mechanics</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2 mb-4 font-heading">
              The Four Invariant Laws of Revenue Physics
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              Each law maps the exact cause-and-effect relationship between operational execution and compounding top-line margin.
            </p>
          </div>

          <div className="space-y-16">
            {laws.map((law, index) => (
              <div
                key={index}
                className="rounded-3xl border border-slate-200 bg-gradient-to-br from-white to-slate-50/50 shadow-sm overflow-hidden hover:border-blue-300 transition-all"
              >
                {/* Law Header Strip */}
                <div className="p-6 sm:p-8 bg-slate-900 text-white flex flex-wrap items-center justify-between gap-4 border-b border-slate-800">
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30 uppercase tracking-widest">
                        Law 0{index + 1}
                      </span>
                      <span className="text-xs font-mono text-slate-400">{law.lawName}</span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-heading">
                      {law.title}
                    </h3>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-800 border border-slate-700 font-mono text-xs text-blue-300 max-w-md overflow-x-auto">
                    <code>{law.formula}</code>
                  </div>
                </div>

                {/* Narrative Grid */}
                <div className="p-6 sm:p-10">
                  {/* Sharp Provocative Question */}
                  <div className="mb-8 pb-6 border-b border-slate-100">
                    <div className="text-xs font-mono text-blue-600 uppercase tracking-wider mb-2 font-bold">Core Diagnostic Invalidation</div>
                    <div className="text-xl sm:text-2xl font-bold text-slate-900 italic font-heading">
                      "{law.question}"
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                    {/* The Situation */}
                    <div className="p-5 rounded-2xl bg-white border border-slate-200">
                      <div className="text-xs font-mono text-slate-500 uppercase tracking-wider mb-2 font-bold flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-slate-400" />
                        The Current Situation
                      </div>
                      <p className="text-sm text-slate-700 leading-relaxed">{law.situation}</p>
                    </div>

                    {/* The Hidden Problem */}
                    <div className="p-5 rounded-2xl bg-amber-50/60 border border-amber-200">
                      <div className="text-xs font-mono text-amber-700 uppercase tracking-wider mb-2 font-bold flex items-center gap-2">
                        <AlertTriangle className="w-3.5 h-3.5 text-amber-600" />
                        The Hidden Problem
                      </div>
                      <p className="text-sm text-slate-700 leading-relaxed">{law.hiddenProblem}</p>
                    </div>

                    {/* The Implication */}
                    <div className="p-5 rounded-2xl bg-rose-50/60 border border-rose-200">
                      <div className="text-xs font-mono text-rose-700 uppercase tracking-wider mb-2 font-bold flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-rose-500" />
                        The Strategic Implication
                      </div>
                      <p className="text-sm text-slate-700 leading-relaxed">{law.implication}</p>
                    </div>

                    {/* The Critical Trigger */}
                    <div className="p-5 rounded-2xl bg-purple-50/60 border border-purple-200">
                      <div className="text-xs font-mono text-purple-700 uppercase tracking-wider mb-2 font-bold flex items-center gap-2">
                        <Zap className="w-3.5 h-3.5 text-purple-600" />
                        The Critical Trigger
                      </div>
                      <p className="text-sm text-slate-700 leading-relaxed">{law.trigger}</p>
                    </div>

                    {/* The Resolution */}
                    <div className="p-5 rounded-2xl bg-blue-50/60 border border-blue-200 md:col-span-2">
                      <div className="text-xs font-mono text-blue-700 uppercase tracking-wider mb-2 font-bold flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />
                        The Systematic Resolution
                      </div>
                      <p className="text-sm text-slate-700 leading-relaxed">{law.resolution}</p>
                    </div>
                  </div>

                  {/* Metrics and Quote */}
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
                    <div className="lg:col-span-5 grid grid-cols-2 gap-4">
                      <div className="p-5 rounded-2xl bg-slate-900 text-white flex flex-col justify-between">
                        <div className="text-xs font-mono text-slate-400 uppercase">Impact Metric</div>
                        <div className="text-3xl font-extrabold text-blue-400 my-2 font-heading">{law.metric}</div>
                        <div className="text-xs text-slate-300 leading-snug">{law.metricLabel}</div>
                      </div>
                      <div className="p-5 rounded-2xl bg-slate-900 text-white flex flex-col justify-between">
                        <div className="text-xs font-mono text-slate-400 uppercase">Secondary Vector</div>
                        <div className="text-3xl font-extrabold text-cyan-400 my-2 font-heading">{law.secondaryMetric}</div>
                        <div className="text-xs text-slate-300 leading-snug">{law.secondaryMetricLabel}</div>
                      </div>
                    </div>

                    <div className="lg:col-span-7 p-6 rounded-2xl bg-slate-100 border border-slate-200 flex flex-col justify-between">
                      <div className="flex items-start gap-3">
                        <Quote className="w-6 h-6 text-blue-500 shrink-0 mt-1" />
                        <div>
                          <div className="text-xs font-mono text-slate-500 uppercase tracking-wider mb-1 font-bold">Common Buyer Observation</div>
                          <p className="text-sm italic text-slate-800 font-medium">"{law.quote}"</p>
                        </div>
                      </div>
                      <div className="text-xs text-slate-500 text-right mt-3 font-mono">
                        — {law.quoteAuthor}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── VERIFIED OUTCOMES GRID ── */}
      <section className="py-20 bg-slate-900 text-white border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono text-blue-400 uppercase tracking-widest font-bold">Empirical Proof</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2 font-heading">
              Verified Revenue Physics Outcomes
            </h2>
            <p className="text-slate-400 text-base mt-3">
              Calibrated across enterprise deployments spanning SaaS, FinTech, and B2B platforms.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {outcomes.map((item, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-slate-950/70 border border-slate-800 hover:border-blue-500/50 transition-all">
                <div className="text-4xl font-extrabold text-blue-400 mb-2 font-heading">{item.stat}</div>
                <div className="text-base font-bold text-white mb-2">{item.label}</div>
                <p className="text-xs text-slate-400 leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── RELATED PILLARS CROSS-LINKS ── */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono text-blue-600 uppercase tracking-widest font-bold">System Interconnection</span>
            <h2 className="text-3xl font-extrabold text-slate-900 mt-2 font-heading">
              Revenue Physics Informs Every Other Pillar
            </h2>
            <p className="text-slate-600 mt-2 text-base">
              The laws define baseline mechanics; our other pillars identify breakdowns, deploy autonomous engines, and provide real-time telemetry.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link
              to="/growth-science/friction-diagnostics"
              className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-rose-400 hover:shadow-md transition-all group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono px-2 py-0.5 rounded bg-rose-100 text-rose-700 font-bold">Pillar 02</span>
                  <Radar className="w-5 h-5 text-rose-600 group-hover:scale-110 transition-transform" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-rose-600 transition-colors">Friction Diagnostics</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Identifies where physical laws break down due to pipeline leakage, margin erosion, and operational bottlenecks.
                </p>
              </div>
              <div className="mt-6 flex items-center text-xs font-mono font-bold text-rose-600">
                Explore Friction Diagnostics <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            <Link
              to="/growth-science/ai-engines"
              className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-violet-400 hover:shadow-md transition-all group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono px-2 py-0.5 rounded bg-violet-100 text-violet-700 font-bold">Pillar 03</span>
                  <Cpu className="w-5 h-5 text-violet-600 group-hover:scale-110 transition-transform" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-violet-600 transition-colors">AI Acceleration Engines</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Applies the physics of automated execution at machine scale through 24/7 autonomous agents and predictive pipelines.
                </p>
              </div>
              <div className="mt-6 flex items-center text-xs font-mono font-bold text-violet-600">
                Explore AI Engines <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            <Link
              to="/growth-science/growth-models"
              className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-emerald-400 hover:shadow-md transition-all group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono px-2 py-0.5 rounded bg-emerald-100 text-emerald-700 font-bold">Pillar 04</span>
                  <Layers className="w-5 h-5 text-emerald-600 group-hover:scale-110 transition-transform" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-emerald-600 transition-colors">Proprietary Growth Models</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Operationalizes revenue physics into four repeatable, battle-tested transformation models for high-growth enterprises.
                </p>
              </div>
              <div className="mt-6 flex items-center text-xs font-mono font-bold text-emerald-600">
                Explore Growth Models <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA & INTAKE FORM ── */}
      
      {/* ── KPI METRICS & MEASUREMENT SPECIFICATION ── */}
      <section className="py-20 sm:py-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-blue-600 uppercase tracking-widest mb-3">
              <BarChart3 className="w-3.5 h-3.5" />
              <span>CORE PERFORMANCE METRICS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading mb-4">
              Metrics That Matter: Measurable KPI Architecture
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Every Revenue Physics capability is governed by rigorous mathematical benchmarks. Below are the definitive KPIs, formulas, and operational rationales that determine success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-blue-400 hover:shadow-xs transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-50 text-blue-700 font-bold uppercase tracking-wider">
                    Structural Metric
                  </span>
                  <span className="text-xs font-mono text-slate-500 font-bold">3.5x - 4.5x Forward Cover</span>
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2 font-heading">Pipeline Coverage Multiple</h3>
                <div className="text-xs font-mono bg-slate-50 text-slate-700 p-2.5 rounded-lg border border-slate-200/80 mb-3">
                  <span className="text-slate-400 font-bold block mb-0.5">Formula:</span> Total Active Weighted Pipeline Volume / Forward Quota Revenue Target
                </div>
                <p className="text-xs text-slate-600 leading-relaxed mb-3">The mathematical buffer required to guarantee target attainment across fluctuating conversion distributions.</p>
              </div>
              <div className="pt-3 border-t border-slate-100 text-[11px] text-slate-500">
                <span className="font-bold text-slate-800">Why it matters:</span> Insulates revenue goals from normal statistical variance in individual deal outcomes and closing dates.
              </div>
            </div>
            <div className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-blue-400 hover:shadow-xs transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-50 text-blue-700 font-bold uppercase tracking-wider">
                    Conversion Metric
                  </span>
                  <span className="text-xs font-mono text-slate-500 font-bold">Stable Decile Conversion</span>
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2 font-heading">Deterministic Win Rate</h3>
                <div className="text-xs font-mono bg-slate-50 text-slate-700 p-2.5 rounded-lg border border-slate-200/80 mb-3">
                  <span className="text-slate-400 font-bold block mb-0.5">Formula:</span> (Closed-Won Contract Count / Total Evaluated Enterprise Opportunities) × 100
                </div>
                <p className="text-xs text-slate-600 leading-relaxed mb-3">Statistical probability that an enterprise opportunity progressing through discovery will close successfully.</p>
              </div>
              <div className="pt-3 border-t border-slate-100 text-[11px] text-slate-500">
                <span className="font-bold text-slate-800">Why it matters:</span> Directly establishes the required pipeline intake volume needed to hit quarterly revenue objectives.
              </div>
            </div>
            <div className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-blue-400 hover:shadow-xs transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-50 text-blue-700 font-bold uppercase tracking-wider">
                    Economic Metric
                  </span>
                  <span className="text-xs font-mono text-slate-500 font-bold">Unit Economic Optimization</span>
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2 font-heading">Average Contract Size (ACV)</h3>
                <div className="text-xs font-mono bg-slate-50 text-slate-700 p-2.5 rounded-lg border border-slate-200/80 mb-3">
                  <span className="text-slate-400 font-bold block mb-0.5">Formula:</span> Total Dollar Value of Signed Contracts / Total Number of Executed Contracts
                </div>
                <p className="text-xs text-slate-600 leading-relaxed mb-3">Mean annual economic commitment secured across closed enterprise client relationships.</p>
              </div>
              <div className="pt-3 border-t border-slate-100 text-[11px] text-slate-500">
                <span className="font-bold text-slate-800">Why it matters:</span> Governs sales force unit economics and establishes the minimum margin required to service accounts.
              </div>
            </div>
            <div className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-blue-400 hover:shadow-xs transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-50 text-blue-700 font-bold uppercase tracking-wider">
                    Velocity Metric
                  </span>
                  <span className="text-xs font-mono text-slate-500 font-bold">Compressing Stage Latency</span>
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2 font-heading">Cycle Time to Conversion</h3>
                <div className="text-xs font-mono bg-slate-50 text-slate-700 p-2.5 rounded-lg border border-slate-200/80 mb-3">
                  <span className="text-slate-400 font-bold block mb-0.5">Formula:</span> ∑ (Calendar Days from Stage 1 to Contract Close) / Total Number of Closed Opportunities
                </div>
                <p className="text-xs text-slate-600 leading-relaxed mb-3">Average time required for opportunities to progress through the physical stages of procurement.</p>
              </div>
              <div className="pt-3 border-t border-slate-100 text-[11px] text-slate-500">
                <span className="font-bold text-slate-800">Why it matters:</span> Directly dictates the velocity at which commercial investments convert into recognizable balance sheet cash.
              </div>
            </div>
            <div className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-blue-400 hover:shadow-xs transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-50 text-blue-700 font-bold uppercase tracking-wider">
                    Compound Metric
                  </span>
                  <span className="text-xs font-mono text-slate-500 font-bold">2.5x Velocity Acceleration</span>
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2 font-heading">Revenue Velocity Vector</h3>
                <div className="text-xs font-mono bg-slate-50 text-slate-700 p-2.5 rounded-lg border border-slate-200/80 mb-3">
                  <span className="text-slate-400 font-bold block mb-0.5">Formula:</span> (Qualified Deals × Average Deal Size × Win Rate) / Sales Cycle Duration
                </div>
                <p className="text-xs text-slate-600 leading-relaxed mb-3">Dollar volume of revenue generated per calendar day by the commercial operating system.</p>
              </div>
              <div className="pt-3 border-t border-slate-100 text-[11px] text-slate-500">
                <span className="font-bold text-slate-800">Why it matters:</span> The fundamental mathematical formula governing commercial growth rate and enterprise throughput.
              </div>
            </div>
            <div className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-blue-400 hover:shadow-xs transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-50 text-blue-700 font-bold uppercase tracking-wider">
                    Trajectory Metric
                  </span>
                  <span className="text-xs font-mono text-slate-500 font-bold">Top-Decile Scale Curve</span>
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2 font-heading">Longitudinal ARR Compounding Rate</h3>
                <div className="text-xs font-mono bg-slate-50 text-slate-700 p-2.5 rounded-lg border border-slate-200/80 mb-3">
                  <span className="text-slate-400 font-bold block mb-0.5">Formula:</span> [(Ending Annual Recurring Revenue / Starting Annual Recurring Revenue) ^ (1 / Years)] - 1
                </div>
                <p className="text-xs text-slate-600 leading-relaxed mb-3">Rate of annual compounding expansion produced by stable unit economics and disciplined GTM physics.</p>
              </div>
              <div className="pt-3 border-t border-slate-100 text-[11px] text-slate-500">
                <span className="font-bold text-slate-800">Why it matters:</span> Evidences that growth is structural, predictable, and capital-efficient rather than sporadic or lucky.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="intake" className="py-24 bg-slate-950 text-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/15 border border-blue-400/30 text-blue-300 text-xs font-mono uppercase tracking-widest mb-6">
                Diagnostic Protocol
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-6 font-heading">
                Ready to Master the Laws of Revenue Physics?
              </h2>
              <p className="text-base sm:text-lg text-slate-300 mb-8 leading-relaxed">
                Schedule a confidential Revenue Physics Diagnostic with our Principal Architects. We will benchmark your cohort trajectories, unit economics, and profit pool boundaries against 500+ enterprise peers.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3 text-sm text-slate-200">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span>Granular LTV:CAC cohort mapping and decay point identification</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-200">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span>Hidden cost-to-serve audit across top 20 enterprise accounts</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-200">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span>Actionable 90-day physics calibration roadmap signed by Bain veterans</span>
                </div>
              </div>

              {/* Trust Badges */}
              <div className="pt-8 border-t border-slate-800 grid grid-cols-3 gap-4">
                <div>
                  <div className="text-2xl font-extrabold text-white font-mono">500+</div>
                  <div className="text-xs text-slate-400">B2B Companies</div>
                </div>
                <div>
                  <div className="text-2xl font-extrabold text-white font-mono">5X</div>
                  <div className="text-xs text-slate-400">Avg Revenue Growth</div>
                </div>
                <div>
                  <div className="text-2xl font-extrabold text-white font-mono">24/7</div>
                  <div className="text-xs text-slate-400">Autonomous Support</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="p-8 rounded-3xl bg-slate-900 border border-slate-800 shadow-2xl">
                <h3 className="text-xl font-bold text-white mb-2">Request Revenue Physics Audit</h3>
                <p className="text-xs text-slate-400 mb-6">Confidential intake. Direct routing to Revenue Architecture leadership.</p>
                <AiSalesIntakeForm />
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
