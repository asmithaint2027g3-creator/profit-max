import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight, ChevronRight, Cpu, Bot, Zap, Activity,
  CheckCircle2, AlertTriangle, Layers, Radar, LineChart,
  Quote, Shield, ArrowUpRight, Terminal, Network, Sparkles,
  BarChart3, RefreshCw
} from 'lucide-react';
import { AiSalesIntakeForm } from '../../components/forms/AiSalesIntakeForm';

export default function AiAccelerationEnginesPage() {
  useEffect(() => {
    document.title = 'AI Acceleration Engines: Autonomous Systems That Compound Growth | ProfitMachines';
    window.scrollTo(0, 0);
  }, []);

  const engines = [
    {
      title: 'Autonomous Agent Deployment',
      engineCode: 'Engine Module Alpha',
      throughput: '1,000+ accounts researched & engaged/day',
      architecture: 'Distributed Multi-Agent Swarm (SDR, AE, RevOps, CSM)',
      question: 'What if your best sales processes could run without human intervention?',
      situation: 'Companies hire SDRs, AEs, and CSMs to execute sales processes. Performance varies by person, and scaling requires hiring more headcount.',
      hiddenProblem: 'Human execution is the bottleneck. Reps can\'t research 1,000 accounts per day. They can\'t personalize every message. They can\'t monitor every deal 24/7.',
      implication: 'Growth is linear — tied to headcount. You can\'t scale without proportional cost increases.',
      trigger: 'When SDR churn hits 40% annually and you realize you\'re training replacements instead of scaling revenue.',
      resolution: 'We deploy autonomous AI agents (SDR Agent, Sales Agent, RevOps Agent, Customer Success Agent) that execute proven playbooks 24/7. They research, outreach, qualify, forecast, and retain — with human-in-the-loop governance at critical decision points.',
      metric: '60+ hrs',
      metricLabel: 'reclaimed per team per week through autonomous workflows',
      secondaryMetric: '3X',
      secondaryMetricLabel: 'higher verified meeting volume with zero human SDR churn',
      quote: 'Our SDR team had 40% annual churn — the AI SDR Agent has zero, and it books 3X more meetings.',
      quoteAuthor: 'VP Demand Generation, Enterprise Cyber Platform'
    },
    {
      title: 'Predictive Expansion & Retention',
      engineCode: 'Engine Module Beta',
      throughput: 'Continuous real-time telemetry across 100% of telemetry seats',
      architecture: 'Deep Behavioral Signal Matrix & Churn Propensity Classifier',
      question: 'Do you know which customers will expand — and which will churn — before they decide?',
      situation: 'Customer success teams react to churn after it happens. Expansion is discovered accidentally, not systematically.',
      hiddenProblem: 'Behavioral signals (usage patterns, support tickets, engagement frequency) predict churn and expansion 60-90 days in advance. Without predictive models, you\'re always behind.',
      implication: 'You lose customers you could have saved. You miss expansion opportunities you could have captured. NRR stays flat while competitors grow.',
      trigger: 'When a strategic account cancels — and you realize you had no warning.',
      resolution: 'We deploy predictive models that score every customer by churn risk and expansion potential. Automated workflows trigger retention interventions for at-risk accounts and expansion outreach for high-potential ones.',
      metric: '85-90%',
      metricLabel: 'churn prediction accuracy with 60-day advance warning',
      secondaryMetric: '124%',
      secondaryMetricLabel: 'sustained Net Revenue Retention across enterprise tiers',
      quote: 'We found out customers were at risk when they sent the cancellation notice — by then, it was too late.',
      quoteAuthor: 'Chief Customer Officer, Cloud Operations SaaS'
    },
    {
      title: 'Ecosystem & Channel Orchestration',
      engineCode: 'Engine Module Gamma',
      throughput: 'Dynamic co-sell routing across active partner networks',
      architecture: 'Algorithmic Alliance Attribution & Opportunity Exchange Fabric',
      question: 'Are your partnerships generating revenue — or just logos?',
      situation: 'Companies sign partnerships and list them on the website. Partner-sourced revenue is untracked. Alliances consume attention but don\'t produce pipeline.',
      hiddenProblem: 'Most partnerships are low-yield. A small cohort of strategic alliances drives disproportionate revenue — but you don\'t know which ones until you measure.',
      implication: 'You invest in partnerships that don\'t pay off while starving the high-yield alliances that could scale revenue.',
      trigger: 'When a strategic partner re-prioritizes to a competitor — and you realize you never formally claimed the joint accounts.',
      resolution: 'We map the entire partner ecosystem, score each alliance by measured contribution, and reallocate resources to the partnerships that produce revenue. Attribution, co-sell orchestration, and incentive ROI tracking turn partnerships into a predictable revenue channel.',
      metric: '2-4 Alliances',
      metricLabel: 'activated from a scored shortlist, each with attributed pipeline',
      secondaryMetric: '35%',
      secondaryMetricLabel: 'of total enterprise new ARR attributed directly to channel co-sell',
      quote: 'We had 50 partners on the logo wall but couldn\'t tell you which ones actually drove pipeline.',
      quoteAuthor: 'Head of Global Alliances, Enterprise AI Infrastructure'
    },
    {
      title: 'Algorithmic Pricing & Packaging',
      engineCode: 'Engine Module Delta',
      throughput: 'Real-time willingness-to-pay scoring and dynamic tiering',
      architecture: 'Conjoint Calibration Engine with Contract Guardrails',
      question: 'Is your packaging engineered for willingness-to-pay — or for cost-plus habit?',
      situation: 'Pricing is set years ago based on intuition or competitor benchmarking. Packaging tiers don\'t align with how customers actually use the product.',
      hiddenProblem: 'Willingness-to-pay varies by segment, use case, and timing. Static pricing leaves money on the table — or prices out customers who would buy at a lower tier.',
      implication: 'You either underprice (leaving margin on the table) or overprice (losing deals you should win). Neither is optimal.',
      trigger: 'When a competitor launches a new pricing model — and you realize yours is outdated.',
      resolution: 'We conduct willingness-to-pay research (Van Westendorp, conjoint analysis, price laddering) by segment, redesign packaging around usage milestones, and install dynamic pricing engines that optimize in real time.',
      metric: '10-20%',
      metricLabel: 'improvement in price realization without sacrificing win rate',
      secondaryMetric: '30%',
      secondaryMetricLabel: 'higher willingness-to-pay captured on premium tier upgrades',
      quote: 'We had no idea customers would pay 30% more for the premium tier — we just never asked.',
      quoteAuthor: 'SVP Product & Growth, Healthcare Technology'
    }
  ];

  const outcomes = [
    { stat: '60+ hrs', label: 'Rep Capacity Reclaimed', detail: 'Autonomous agents shoulder research, outreach, drafting, and data ingestion' },
    { stat: '85-90%', label: 'Churn Prediction Precision', detail: '60-day early intervention windows before contract renewal inflection points' },
    { stat: '3X', label: 'Meeting Velocity Lift', detail: 'Hyper-personalized signal-driven outreach running uninterrupted 24/7' },
    { stat: '10-20%', label: 'Price Realization Boost', detail: 'Scientific packaging calibrated strictly against empirical willingness-to-pay' }
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans">

      {/* ── HERO ── */}
      <section className="relative pt-20 pb-20 sm:pt-28 sm:pb-28 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute inset-0 opacity-[0.22]" style={{ backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.07) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.07) 1px, transparent 1px)', backgroundSize: '4rem 4rem' }} />
          <div className="absolute top-0 right-1/4 w-[650px] h-[650px] bg-violet-600/15 rounded-full blur-[140px]" />
          <div className="absolute bottom-0 right-10 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[120px]" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center gap-2 mb-6">
            <Link to="/growth-science" className="text-xs font-mono text-slate-400 hover:text-white transition-colors">
              Growth Science Hub
            </Link>
            <span className="text-slate-600 text-xs">/</span>
            <span className="text-xs font-mono text-violet-400 font-bold uppercase tracking-wider">
              Pillar 03
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-500/15 border border-violet-400/30 text-violet-300 text-xs font-bold tracking-widest uppercase font-mono mb-6">
                <Cpu className="w-3.5 h-3.5 text-violet-400" />
                PILLAR 03 OF 05
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.07] mb-6 font-heading">
                AI Acceleration Engines:{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-indigo-300 to-cyan-300">
                  Autonomous Systems That Compound Growth
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-slate-300 leading-relaxed max-w-2xl mb-8">
                Once friction is diagnosed, autonomous AI engines accelerate every stage of the revenue lifecycle. Four engines work 24/7 — prospecting, closing, retaining, and expanding — replacing manual effort with deterministic execution.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="#intake" className="inline-flex items-center gap-2 bg-violet-600 hover:bg-violet-500 text-white font-bold px-7 py-4 rounded-xl text-sm shadow-lg shadow-violet-600/30 transition-all hover:-translate-y-0.5 group font-mono uppercase tracking-wider">
                  Schedule Engine Deployment
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
                <a href="#engine-specs" className="inline-flex items-center gap-2 border border-slate-700 bg-slate-900/80 hover:bg-slate-800 text-slate-200 font-bold px-6 py-4 rounded-xl text-sm transition-all font-mono uppercase tracking-wider">
                  Technical Engine Specs
                  <ChevronRight className="w-4 h-4 text-violet-400" />
                </a>
              </div>
            </div>

            {/* Visual: Technical Engine Specification Sheet */}
            <div className="lg:col-span-5">
              <div className="p-6 rounded-2xl bg-slate-900/95 border border-slate-800 shadow-2xl relative backdrop-blur-xl">
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-violet-400 animate-pulse" />
                    <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">Engine Telemetry Bus</span>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-violet-500/20 text-violet-300 border border-violet-500/30">
                    4 Engines Online (24/7/365)
                  </span>
                </div>

                <div className="space-y-3 font-mono text-xs">
                  <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 flex items-center justify-between">
                    <div>
                      <div className="text-slate-300 font-bold flex items-center gap-2">
                        <Bot className="w-3.5 h-3.5 text-violet-400" /> Swarm Orchestrator
                      </div>
                      <div className="text-[11px] text-slate-500">Autonomous SDR + AE Copilots</div>
                    </div>
                    <span className="text-emerald-400 text-[11px]">ACTIVE · 100% SLA</span>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 flex items-center justify-between">
                    <div>
                      <div className="text-slate-300 font-bold flex items-center gap-2">
                        <Activity className="w-3.5 h-3.5 text-indigo-400" /> Retention Neural Model
                      </div>
                      <div className="text-[11px] text-slate-500">60-Day Churn Advance Warning</div>
                    </div>
                    <span className="text-emerald-400 text-[11px]">89.4% Precision</span>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 flex items-center justify-between">
                    <div>
                      <div className="text-slate-300 font-bold flex items-center gap-2">
                        <Network className="w-3.5 h-3.5 text-blue-400" /> Alliance Co-Sell Router
                      </div>
                      <div className="text-[11px] text-slate-500">Scored Partner Opportunity Graph</div>
                    </div>
                    <span className="text-emerald-400 text-[11px]">4 Pipelines Live</span>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 flex items-center justify-between">
                    <div>
                      <div className="text-slate-300 font-bold flex items-center gap-2">
                        <Sparkles className="w-3.5 h-3.5 text-cyan-400" /> Algorithmic Pricing Engine
                      </div>
                      <div className="text-[11px] text-slate-500">Conjoint Willingness-to-Pay</div>
                    </div>
                    <span className="text-emerald-400 text-[11px]">+18.2% Realized</span>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-slate-800 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span>Deterministic Execution</span>
                  <span className="text-violet-400 font-bold">Continuous Throughput</span>
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
            <span className="text-xs font-mono text-violet-700 uppercase tracking-widest font-bold">The Automation Thesis</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2 font-heading">
              Autonomous Execution Compounds Growth
            </h2>
          </div>
          <div className="p-8 sm:p-12 rounded-3xl bg-white border border-slate-200 shadow-sm relative">
            <div className="absolute top-6 right-8 text-slate-200 font-serif text-7xl select-none leading-none opacity-40">“</div>
            <p className="text-lg sm:text-xl text-slate-700 leading-relaxed font-normal">
              Manual execution is the bottleneck. Humans can't research 1,000 accounts per day. They can't personalize every message. They can't monitor every deal 24/7. Growth becomes linear — tied to headcount. AI acceleration engines replace manual effort with deterministic, autonomous execution. Four engines work 24/7 — prospecting, closing, retaining, and expanding — with human-in-the-loop governance at critical decision points. The result: growth that scales without proportional cost increases.
            </p>
            <div className="mt-8 pt-6 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-violet-100 flex items-center justify-center text-violet-700 font-bold text-sm">AE</div>
                <div>
                  <div className="text-sm font-bold text-slate-900">ProfitMachines AI Systems Engineering</div>
                  <div className="text-xs text-slate-500 font-mono">Autonomous Revenue Architectures</div>
                </div>
              </div>
              <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-violet-600 bg-violet-50 px-3 py-1.5 rounded-lg border border-violet-200">
                Deterministic Agent Orchestration
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── THE 4 ENGINES (TECHNICAL SPECIFICATION LAYOUT) ── */}
      <section id="engine-specs" className="py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <span className="text-xs font-mono text-violet-600 uppercase tracking-widest font-bold">System Specifications</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2 mb-4 font-heading">
              Technical Specifications of the Four AI Engines
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              Engineered architectures, behavioral trigger models, and autonomous loops delivering continuous top-line velocity.
            </p>
          </div>

          <div className="space-y-16">
            {engines.map((eng, index) => (
              <div
                key={index}
                className="rounded-3xl border border-slate-200 bg-gradient-to-br from-white to-slate-50/50 shadow-sm overflow-hidden hover:border-violet-300 transition-all"
              >
                {/* Tech Spec Header Strip */}
                <div className="p-6 sm:p-8 bg-slate-900 text-white flex flex-wrap items-center justify-between gap-4 border-b border-slate-800">
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-violet-500/20 text-violet-300 border border-violet-500/30 uppercase tracking-widest font-bold">
                        {eng.engineCode}
                      </span>
                      <span className="text-xs font-mono text-slate-400">{eng.throughput}</span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-heading">
                      {eng.title}
                    </h3>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-800 border border-slate-700 font-mono text-xs text-violet-300 max-w-md">
                    <span className="text-slate-400">Architecture: </span>{eng.architecture}
                  </div>
                </div>

                {/* Narrative Spec Grid */}
                <div className="p-6 sm:p-10">
                  {/* Sharp Provocative Question */}
                  <div className="mb-8 pb-6 border-b border-slate-100">
                    <div className="text-xs font-mono text-violet-600 uppercase tracking-wider mb-2 font-bold">Core Diagnostic Invalidation</div>
                    <div className="text-xl sm:text-2xl font-bold text-slate-900 italic font-heading">
                      "{eng.question}"
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                    {/* The Situation */}
                    <div className="p-5 rounded-2xl bg-white border border-slate-200">
                      <div className="text-xs font-mono text-slate-500 uppercase tracking-wider mb-2 font-bold flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-slate-400" />
                        Observed State
                      </div>
                      <p className="text-sm text-slate-700 leading-relaxed">{eng.situation}</p>
                    </div>

                    {/* The Hidden Problem */}
                    <div className="p-5 rounded-2xl bg-amber-50/60 border border-amber-200">
                      <div className="text-xs font-mono text-amber-700 uppercase tracking-wider mb-2 font-bold flex items-center gap-2">
                        <AlertTriangle className="w-3.5 h-3.5 text-amber-600" />
                        Human Execution Bottleneck
                      </div>
                      <p className="text-sm text-slate-700 leading-relaxed">{eng.hiddenProblem}</p>
                    </div>

                    {/* The Implication */}
                    <div className="p-5 rounded-2xl bg-rose-50/60 border border-rose-200">
                      <div className="text-xs font-mono text-rose-700 uppercase tracking-wider mb-2 font-bold flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-rose-500" />
                        Linear Scaling Penalty
                      </div>
                      <p className="text-sm text-slate-700 leading-relaxed">{eng.implication}</p>
                    </div>

                    {/* The Critical Trigger */}
                    <div className="p-5 rounded-2xl bg-purple-50/60 border border-purple-200">
                      <div className="text-xs font-mono text-purple-700 uppercase tracking-wider mb-2 font-bold flex items-center gap-2">
                        <Zap className="w-3.5 h-3.5 text-purple-600" />
                        Executive Trigger Event
                      </div>
                      <p className="text-sm text-slate-700 leading-relaxed">{eng.trigger}</p>
                    </div>

                    {/* The Resolution */}
                    <div className="p-5 rounded-2xl bg-violet-50/60 border border-violet-200 md:col-span-2">
                      <div className="text-xs font-mono text-violet-700 uppercase tracking-wider mb-2 font-bold flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-violet-600" />
                        Autonomous Engine Resolution
                      </div>
                      <p className="text-sm text-slate-700 leading-relaxed">{eng.resolution}</p>
                    </div>
                  </div>

                  {/* Metrics and Quote */}
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
                    <div className="lg:col-span-5 grid grid-cols-2 gap-4">
                      <div className="p-5 rounded-2xl bg-slate-900 text-white flex flex-col justify-between">
                        <div className="text-xs font-mono text-slate-400 uppercase">Engine Throughput</div>
                        <div className="text-3xl font-extrabold text-violet-400 my-2 font-heading">{eng.metric}</div>
                        <div className="text-xs text-slate-300 leading-snug">{eng.metricLabel}</div>
                      </div>
                      <div className="p-5 rounded-2xl bg-slate-900 text-white flex flex-col justify-between">
                        <div className="text-xs font-mono text-slate-400 uppercase">Compounding Rate</div>
                        <div className="text-3xl font-extrabold text-cyan-400 my-2 font-heading">{eng.secondaryMetric}</div>
                        <div className="text-xs text-slate-300 leading-snug">{eng.secondaryMetricLabel}</div>
                      </div>
                    </div>

                    <div className="lg:col-span-7 p-6 rounded-2xl bg-slate-100 border border-slate-200 flex flex-col justify-between">
                      <div className="flex items-start gap-3">
                        <Quote className="w-6 h-6 text-violet-500 shrink-0 mt-1" />
                        <div>
                          <div className="text-xs font-mono text-slate-500 uppercase tracking-wider mb-1 font-bold">Executive Client Evidence</div>
                          <p className="text-sm italic text-slate-800 font-medium">"{eng.quote}"</p>
                        </div>
                      </div>
                      <div className="text-xs text-slate-500 text-right mt-3 font-mono">
                        — {eng.quoteAuthor}
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
            <span className="text-xs font-mono text-violet-400 uppercase tracking-widest font-bold">Empirical Proof</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2 font-heading">
              Verified Autonomous Acceleration Outcomes
            </h2>
            <p className="text-slate-400 text-base mt-3">
              Proven across live high-velocity pipelines running enterprise autonomous revenue stacks.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {outcomes.map((item, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-slate-950/70 border border-slate-800 hover:border-violet-500/50 transition-all">
                <div className="text-4xl font-extrabold text-violet-400 mb-2 font-heading">{item.stat}</div>
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
            <span className="text-xs font-mono text-violet-600 uppercase tracking-widest font-bold">System Interconnection</span>
            <h2 className="text-3xl font-extrabold text-slate-900 mt-2 font-heading">
              AI Engines Execute the Physics
            </h2>
            <p className="text-slate-600 mt-2 text-base">
              Engines execute the mathematical parameters established by Revenue Physics, resolve diagnoses from Friction Diagnostics, and power our Proprietary Growth Models.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link
              to="/growth-science/revenue-physics"
              className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-blue-400 hover:shadow-md transition-all group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono px-2 py-0.5 rounded bg-blue-100 text-blue-700 font-bold">Pillar 01</span>
                  <Activity className="w-5 h-5 text-blue-600 group-hover:scale-110 transition-transform" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">Revenue Physics</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Defines the mathematical parameters, conversion tipping points, and profit pools that the AI engines optimize for.
                </p>
              </div>
              <div className="mt-6 flex items-center text-xs font-mono font-bold text-blue-600">
                Explore Revenue Physics <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

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
                  Isolates exact stage leakages and discount drift where autonomous AI agent intervention generates the fastest payback.
                </p>
              </div>
              <div className="mt-6 flex items-center text-xs font-mono font-bold text-rose-600">
                Explore Friction Diagnostics <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
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
                  Bridges technical engine automation with strategic revenue models like Velocity pacing and Demand flywheels.
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
              Every AI Acceleration Engines capability is governed by rigorous mathematical benchmarks. Below are the definitive KPIs, formulas, and operational rationales that determine success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-blue-400 hover:shadow-xs transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-50 text-blue-700 font-bold uppercase tracking-wider">
                    Speed Metric
                  </span>
                  <span className="text-xs font-mono text-slate-500 font-bold">Sub-Minute Execution</span>
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2 font-heading">Commercial Workflow Cycle Time</h3>
                <div className="text-xs font-mono bg-slate-50 text-slate-700 p-2.5 rounded-lg border border-slate-200/80 mb-3">
                  <span className="text-slate-400 font-bold block mb-0.5">Formula:</span> Total Elapsed Milliseconds from Ingestion of Buyer Signal to Completed Action Protocol
                </div>
                <p className="text-xs text-slate-600 leading-relaxed mb-3">Speed with which autonomous systems synthesize context, draft communications, and trigger system updates.</p>
              </div>
              <div className="pt-3 border-t border-slate-100 text-[11px] text-slate-500">
                <span className="font-bold text-slate-800">Why it matters:</span> Compresses operational latency, engaging prospective enterprise buyers while commercial intent is peak.
              </div>
            </div>
            <div className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-blue-400 hover:shadow-xs transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-50 text-blue-700 font-bold uppercase tracking-wider">
                    Leverage Metric
                  </span>
                  <span className="text-xs font-mono text-slate-500 font-bold">&gt;75% Autonomous Workflows</span>
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2 font-heading">GTM Operational Automation Rate</h3>
                <div className="text-xs font-mono bg-slate-50 text-slate-700 p-2.5 rounded-lg border border-slate-200/80 mb-3">
                  <span className="text-slate-400 font-bold block mb-0.5">Formula:</span> (Repetitive Commercial Workflows Automated / Total Operational Workflows) × 100
                </div>
                <p className="text-xs text-slate-600 leading-relaxed mb-3">Proportion of routine commercial tasks performed by autonomous systems without manual human effort.</p>
              </div>
              <div className="pt-3 border-t border-slate-100 text-[11px] text-slate-500">
                <span className="font-bold text-slate-800">Why it matters:</span> Reclaims dozens of productive selling hours weekly, liberating human professionals to focus on relationships.
              </div>
            </div>
            <div className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-blue-400 hover:shadow-xs transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-50 text-blue-700 font-bold uppercase tracking-wider">
                    Unit Metric
                  </span>
                  <span className="text-xs font-mono text-slate-500 font-bold">-90% Task Cost Reduction</span>
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2 font-heading">Cost per Commercial Task Execution</h3>
                <div className="text-xs font-mono bg-slate-50 text-slate-700 p-2.5 rounded-lg border border-slate-200/80 mb-3">
                  <span className="text-slate-400 font-bold block mb-0.5">Formula:</span> Total Compute, Token, and System Infrastructure Expense / Total Executed Workflows
                </div>
                <p className="text-xs text-slate-600 leading-relaxed mb-3">Fully loaded compute expense incurred to conduct an in-depth account research dossier or meeting booking.</p>
              </div>
              <div className="pt-3 border-t border-slate-100 text-[11px] text-slate-500">
                <span className="font-bold text-slate-800">Why it matters:</span> Enables massive scaling of high-touch outreach and intelligence synthesis without linear headcount growth.
              </div>
            </div>
            <div className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-blue-400 hover:shadow-xs transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-50 text-blue-700 font-bold uppercase tracking-wider">
                    Reliability Metric
                  </span>
                  <span className="text-xs font-mono text-slate-500 font-bold">&lt;1.5% Exception Frequency</span>
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2 font-heading">Algorithmic Workflow Exception Rate</h3>
                <div className="text-xs font-mono bg-slate-50 text-slate-700 p-2.5 rounded-lg border border-slate-200/80 mb-3">
                  <span className="text-slate-400 font-bold block mb-0.5">Formula:</span> (Workflows Encountering Error or Requiring Fallback / Total Initiated Actions) × 100
                </div>
                <p className="text-xs text-slate-600 leading-relaxed mb-3">Proportion of agentic workflows triggering defensive fallbacks due to ambiguous data or policy boundaries.</p>
              </div>
              <div className="pt-3 border-t border-slate-100 text-[11px] text-slate-500">
                <span className="font-bold text-slate-800">Why it matters:</span> Maintains system reliability and informs continuous improvement of agent prompts and validation logic.
              </div>
            </div>
            <div className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-blue-400 hover:shadow-xs transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-50 text-blue-700 font-bold uppercase tracking-wider">
                    Throughput Metric
                  </span>
                  <span className="text-xs font-mono text-slate-500 font-bold">Thousands Operations/Hr</span>
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2 font-heading">Simultaneous Processing Throughput</h3>
                <div className="text-xs font-mono bg-slate-50 text-slate-700 p-2.5 rounded-lg border border-slate-200/80 mb-3">
                  <span className="text-slate-400 font-bold block mb-0.5">Formula:</span> Concurrent Volume of Account Signals, Deal Dossiers, and Outbound Engagements Processed
                </div>
                <p className="text-xs text-slate-600 leading-relaxed mb-3">Capacity of the distributed agent infrastructure to maintain continuous operations during surge periods.</p>
              </div>
              <div className="pt-3 border-t border-slate-100 text-[11px] text-slate-500">
                <span className="font-bold text-slate-800">Why it matters:</span> Guarantees that sudden spikes in market demand or inbound inquiries are handled instantly without backlogs.
              </div>
            </div>
            <div className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-blue-400 hover:shadow-xs transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-50 text-blue-700 font-bold uppercase tracking-wider">
                    Governance Metric
                  </span>
                  <span className="text-xs font-mono text-slate-500 font-bold">Risk-Calibrated Gating</span>
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2 font-heading">Human Supervisory Oversight Touch</h3>
                <div className="text-xs font-mono bg-slate-50 text-slate-700 p-2.5 rounded-lg border border-slate-200/80 mb-3">
                  <span className="text-slate-400 font-bold block mb-0.5">Formula:</span> (Workflows Requiring Explicit Human Operator Sign-Off / Total Commercial Actions) × 100
                </div>
                <p className="text-xs text-slate-600 leading-relaxed mb-3">Percentage of high-stakes commercial commitments requiring explicit review by an executive supervisor.</p>
              </div>
              <div className="pt-3 border-t border-slate-100 text-[11px] text-slate-500">
                <span className="font-bold text-slate-800">Why it matters:</span> Guarantees human oversight remains in control of pricing, contractual terms, and high-value relationships.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="intake" className="py-24 bg-slate-950 text-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/15 border border-violet-400/30 text-violet-300 text-xs font-mono uppercase tracking-widest mb-6">
                Deployment Protocol
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-6 font-heading">
                Ready to Deploy Autonomous Acceleration?
              </h2>
              <p className="text-base sm:text-lg text-slate-300 mb-8 leading-relaxed">
                Schedule a confidential Architecture Session with our Systems Engineering Principal. We will design your autonomous agent workflow, retention telemetry, and dynamic pricing models.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3 text-sm text-slate-200">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span>Custom autonomous SDR and AE swarm workflow specification</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-200">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span>Predictive retention model calibrated on historical CRM telemetry</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-200">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span>30-day proof-of-value sandbox with guaranteed meeting metrics</span>
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
                <h3 className="text-xl font-bold text-white mb-2">Schedule Engine Deployment</h3>
                <p className="text-xs text-slate-400 mb-6">Confidential intake. Direct routing to Systems Engineering.</p>
                <AiSalesIntakeForm />
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
