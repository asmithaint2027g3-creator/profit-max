import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight, ChevronRight, Layers, Box, Cpu, Activity,
  CheckCircle2, AlertTriangle, Radar, LineChart, Quote,
  Zap, ArrowUpRight, Compass, Shield, Sparkles, TrendingUp,
  BarChart3
} from 'lucide-react';
import { AiSalesIntakeForm } from '../../components/forms/AiSalesIntakeForm';

export default function ProprietaryGrowthModelsPage() {
  useEffect(() => {
    document.title = 'Proprietary Growth Models | ProfitMachines';
    window.scrollTo(0, 0);
  }, []);

  const models = [
    {
      title: 'Revenue Velocity Model',
      blueprintCode: 'Blueprint Framework Alpha',
      formula: 'Velocity = [Qualified Opportunities × Average Win Rate × ACV] / Cycle Time',
      systemType: 'Dynamic Flow & Constraint Optimization Model',
      question: 'Do you know how fast revenue moves through your system — and where it slows down?',
      situation: 'Companies track pipeline volume but not velocity. They know how much is in the pipeline but not how fast it converts.',
      hiddenProblem: 'Revenue velocity (pipeline × win rate × deal size / cycle time) is the true measure of sales efficiency. Most companies optimize one variable while ignoring the others.',
      implication: 'You can have massive pipeline but slow velocity — or fast velocity but small deals. Neither maximizes revenue.',
      trigger: 'When growth plateaus despite heavy pipeline investment.',
      resolution: 'The Revenue Velocity Model measures all four variables, identifies the binding constraint, and prescribes targeted interventions. The result: predictable acceleration, not hopeful growth.',
      metric: '30-50%',
      metricLabel: 'improvement in revenue velocity within 2 quarters',
      secondaryMetric: '38 Days',
      secondaryMetricLabel: 'compression in enterprise sales cycle duration',
      quote: 'We had record pipeline but revenue didn\'t grow — the Revenue Velocity Model showed our cycle time was the bottleneck.',
      quoteAuthor: 'Chief Revenue Officer, FinTech Unicorn'
    },
    {
      title: 'Profit Pool Optimization Model',
      blueprintCode: 'Blueprint Framework Beta',
      formula: 'Net Pool = ∑ [MicroSegment_i × TrueMargin_i × DefensibilityMultiplier]',
      systemType: 'Contribution Margin Concentration & Resource Reallocation',
      question: 'Do you know where profit concentrates — or are you optimizing for revenue?',
      situation: 'Companies optimize for top-line growth. They chase market share without understanding where contribution margin concentrates.',
      hiddenProblem: 'Profit pools are unevenly distributed. A small cohort of customers, segments, or products often drives the majority of profit. Without mapping this, you\'re optimizing blindly.',
      implication: 'You invest in low-margin growth while high-margin opportunities remain invisible. Revenue grows but profitability stagnates.',
      trigger: 'When the board asks why growth isn\'t translating to profit.',
      resolution: 'The Profit Pool Optimization Model maps contribution margin by customer, segment, product, and channel. It identifies the highest-margin opportunities and reallocates resources accordingly.',
      metric: '15-25%',
      metricLabel: 'margin recovery through profit pool reallocation',
      secondaryMetric: '70%',
      secondaryMetricLabel: 'of company profit re-anchored to top 20% high-yield accounts',
      quote: 'We were chasing revenue without realizing 70% of our profit came from 20% of our customers.',
      quoteAuthor: 'Chief Executive Officer, Global Industrial Software'
    },
    {
      title: 'Demand-to-Revenue Flywheel',
      blueprintCode: 'Blueprint Framework Gamma',
      formula: 'Flywheel Rate = ProductValue × ReferralVelocity × OrganicIntentMultiplier',
      systemType: 'Self-Reinforcing Compounding Acquisition Loop',
      question: 'Is your demand engine compounding — or just running?',
      situation: 'Companies run demand generation campaigns that produce one-time pipeline. Each quarter starts from zero.',
      hiddenProblem: 'Compounding demand engines produce exponential growth. One-time campaigns produce linear growth. The difference is whether demand compounds through referrals, brand, and network effects.',
      implication: 'You\'re paying for demand every quarter instead of building a flywheel that accelerates over time.',
      trigger: 'When CAC keeps climbing despite increased spend.',
      resolution: 'The Demand-to-Revenue Flywheel Model designs compounding demand systems — where every customer becomes a source of referrals, every piece of content builds brand, and every interaction strengthens the network.',
      metric: '40-60%',
      metricLabel: 'reduction in blended CAC as the flywheel compounds',
      secondaryMetric: '48%',
      secondaryMetricLabel: 'of qualified pipeline generated via organic compounding channels',
      quote: 'Every quarter felt like starting from scratch — the flywheel model showed us how to build compounding demand.',
      quoteAuthor: 'Chief Marketing Officer, Enterprise Cloud Infrastructure'
    },
    {
      title: 'AI-Native Transformation Model',
      blueprintCode: 'Blueprint Framework Delta',
      formula: 'Productivity = [Autonomous Execution Volume / Human Operating Overhead]',
      systemType: 'Architectural Revenue OS Redesign & Swarm Deployment',
      question: 'Are you adopting AI incrementally — or transforming fundamentally?',
      situation: 'Companies add AI tools incrementally — an AI chatbot here, an AI forecasting tool there. The result: fragmented AI adoption that doesn\'t compound.',
      hiddenProblem: 'AI-native transformation isn\'t about adding tools — it\'s about redesigning processes around autonomous execution. Incremental adoption leaves the old bottlenecks in place.',
      implication: 'You get 10-20% efficiency gains instead of the 3-5X transformation that\'s possible.',
      trigger: 'When competitors deploy AI-native operations and leave you behind.',
      resolution: 'The AI-Native Transformation Model redesigns the entire revenue operation around autonomous agents, predictive intelligence, and real-time telemetry. It\'s not incremental — it\'s fundamental.',
      metric: '3-5X',
      metricLabel: 'improvement in revenue productivity within 12 months',
      secondaryMetric: '85%',
      secondaryMetricLabel: 'of repetitive revenue operations fully autonomous',
      quote: 'We added AI tools one by one but didn\'t see transformation — the AI-Native model showed us we needed to redesign the entire operation.',
      quoteAuthor: 'Managing Director & Operating Partner, Private Equity GTM Group'
    }
  ];

  const outcomes = [
    { stat: '30-50%', label: 'Revenue Velocity Boost', detail: 'Cycle time compressed and win rates elevated across strategic tiers' },
    { stat: '15-25%', label: 'Profit Pool Recovery', detail: 'Capital re-routed from dilutive segments into high-margin profit pools' },
    { stat: '40-60%', label: 'Blended CAC Reduction', detail: 'Compounding brand, referral, and network flywheel replacing paid ad churn' },
    { stat: '3-5X', label: 'Revenue Productivity Lift', detail: 'Fundamental AI-native operating redesign unlocking non-linear scale' }
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans">

      {/* ── HERO ── */}
      <section className="relative pt-20 pb-20 sm:pt-28 sm:pb-28 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute inset-0 opacity-[0.25]" style={{ backgroundImage: 'linear-gradient(to right, rgba(16,185,129,0.12) 1px, transparent 1px), linear-gradient(to bottom, rgba(16,185,129,0.12) 1px, transparent 1px)', backgroundSize: '3rem 3rem' }} />
          <div className="absolute top-0 right-1/4 w-[650px] h-[650px] bg-emerald-600/12 rounded-full blur-[140px]" />
          <div className="absolute bottom-0 right-10 w-[500px] h-[500px] bg-teal-500/10 rounded-full blur-[120px]" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center gap-2 mb-6">
            <Link to="/growth-science" className="text-xs font-mono text-slate-400 hover:text-white transition-colors">
              Growth Science Hub
            </Link>
            <span className="text-slate-600 text-xs">/</span>
            <span className="text-xs font-mono text-emerald-400 font-bold uppercase tracking-wider">
              Pillar 04
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/15 border border-emerald-400/30 text-emerald-300 text-xs font-bold tracking-widest uppercase font-mono mb-6">
                <Layers className="w-3.5 h-3.5 text-emerald-400" />
                PILLAR 04 OF 05
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.07] mb-6 font-heading">
                Proprietary Growth Models:{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-300">
                  Battle-Tested Frameworks That Convert Diagnosis to Action
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-slate-300 leading-relaxed max-w-2xl mb-8">
                Frameworks aren't theory — they're repeatable systems that turn insights into outcomes. Four proprietary models guide every engagement, ensuring every diagnostic converts to measurable realization.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="#intake" className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-7 py-4 rounded-xl text-sm shadow-lg shadow-emerald-600/30 transition-all hover:-translate-y-0.5 group font-mono uppercase tracking-wider">
                  Explore the Models
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
                <a href="#blueprint-specs" className="inline-flex items-center gap-2 border border-slate-700 bg-slate-900/80 hover:bg-slate-800 text-slate-200 font-bold px-6 py-4 rounded-xl text-sm transition-all font-mono uppercase tracking-wider">
                  View Blueprint Schematics
                  <ChevronRight className="w-4 h-4 text-emerald-400" />
                </a>
              </div>
            </div>

            {/* Visual: Blueprint Schematic Card */}
            <div className="lg:col-span-5">
              <div className="p-6 rounded-2xl bg-slate-900/95 border border-slate-800 shadow-2xl relative backdrop-blur-xl">
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">Blueprint Operating System</span>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                    4 Models Calibrated
                  </span>
                </div>

                <div className="space-y-3 font-mono text-xs">
                  <div className="p-3.5 rounded-xl bg-slate-950 border border-emerald-500/30">
                    <div className="flex justify-between text-emerald-300 font-bold mb-1">
                      <span>Model I: Revenue Velocity</span>
                      <span>[Op × Win × ACV] / Cycle</span>
                    </div>
                    <div className="text-[11px] text-slate-400">Binding Constraint Isolation · 30-50% Velocity</div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-950 border border-teal-500/30">
                    <div className="flex justify-between text-teal-300 font-bold mb-1">
                      <span>Model II: Profit Pool Matrix</span>
                      <span>Targeting 20% Core Margin</span>
                    </div>
                    <div className="text-[11px] text-slate-400">Micro-segment reallocation · 15-25% Margin Recovery</div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-950 border border-cyan-500/30">
                    <div className="flex justify-between text-cyan-300 font-bold mb-1">
                      <span>Model III: Demand Flywheel</span>
                      <span>Exponential Referral Multiplier</span>
                    </div>
                    <div className="text-[11px] text-slate-400">Self-compounding demand · 40-60% CAC reduction</div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-950 border border-indigo-500/30">
                    <div className="flex justify-between text-indigo-300 font-bold mb-1">
                      <span>Model IV: AI-Native Transformation</span>
                      <span>Autonomous Operating Redesign</span>
                    </div>
                    <div className="text-[11px] text-slate-400">Fundamental process overhaul · 3-5X Productivity</div>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-slate-800 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span>Blueprint Validation</span>
                  <span className="text-emerald-400 font-bold">Repeatable Realization</span>
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
            <span className="text-xs font-mono text-emerald-700 uppercase tracking-widest font-bold">The Strategic Thesis</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2 font-heading">
              Models Convert Insight to Outcome
            </h2>
          </div>
          <div className="p-8 sm:p-12 rounded-3xl bg-white border border-slate-200 shadow-sm relative">
            <div className="absolute top-6 right-8 text-slate-200 font-serif text-7xl select-none leading-none opacity-40">“</div>
            <p className="text-lg sm:text-xl text-slate-700 leading-relaxed font-normal">
              Insights without execution are intellectual exercises. Execution without models is guesswork. Proprietary growth models bridge the gap — they're repeatable systems that convert diagnostic insights into measurable outcomes. Four models guide every engagement: Revenue Velocity, Profit Pool Optimization, Demand-to-Revenue Flywheel, and AI-Native Transformation. Each is battle-tested across hundreds of deployments. Each converts diagnosis to action. Each produces measurable realization.
            </p>
            <div className="mt-8 pt-6 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 font-bold text-sm">GM</div>
                <div>
                  <div className="text-sm font-bold text-slate-900">ProfitMachines Growth Transformation Practice</div>
                  <div className="text-xs text-slate-500 font-mono">Repeatable Execution Blueprints</div>
                </div>
              </div>
              <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-emerald-600 bg-emerald-50 px-3 py-1.5 rounded-lg border border-emerald-200">
                Deterministic Outcome Blueprints
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── THE 4 MODELS (BLUEPRINT SPECIFICATION LAYOUT) ── */}
      <section id="blueprint-specs" className="py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <span className="text-xs font-mono text-emerald-600 uppercase tracking-widest font-bold">Blueprint Specifications</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2 mb-4 font-heading">
              The Four Proprietary Growth Models
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              Detailed blueprint schematics, operational equations, and compounding mechanisms engineered for enterprise scale.
            </p>
          </div>

          <div className="space-y-16">
            {models.map((mod, index) => (
              <div
                key={index}
                className="rounded-3xl border border-slate-200 bg-gradient-to-br from-white to-slate-50/50 shadow-sm overflow-hidden hover:border-emerald-300 transition-all"
              >
                {/* Blueprint Header Strip */}
                <div className="p-6 sm:p-8 bg-slate-900 text-white flex flex-wrap items-center justify-between gap-4 border-b border-slate-800">
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 uppercase tracking-widest font-bold">
                        {mod.blueprintCode}
                      </span>
                      <span className="text-xs font-mono text-slate-400">{mod.systemType}</span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-heading">
                      {mod.title}
                    </h3>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-800 border border-slate-700 font-mono text-xs text-emerald-300 max-w-md overflow-x-auto">
                    <code>{mod.formula}</code>
                  </div>
                </div>

                {/* Narrative Blueprint Grid */}
                <div className="p-6 sm:p-10">
                  {/* Sharp Provocative Question */}
                  <div className="mb-8 pb-6 border-b border-slate-100">
                    <div className="text-xs font-mono text-emerald-600 uppercase tracking-wider mb-2 font-bold">Core Diagnostic Invalidation</div>
                    <div className="text-xl sm:text-2xl font-bold text-slate-900 italic font-heading">
                      "{mod.question}"
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                    {/* The Situation */}
                    <div className="p-5 rounded-2xl bg-white border border-slate-200">
                      <div className="text-xs font-mono text-slate-500 uppercase tracking-wider mb-2 font-bold flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-slate-400" />
                        Status Quo Assumption
                      </div>
                      <p className="text-sm text-slate-700 leading-relaxed">{mod.situation}</p>
                    </div>

                    {/* The Hidden Problem */}
                    <div className="p-5 rounded-2xl bg-amber-50/60 border border-amber-200">
                      <div className="text-xs font-mono text-amber-700 uppercase tracking-wider mb-2 font-bold flex items-center gap-2">
                        <AlertTriangle className="w-3.5 h-3.5 text-amber-600" />
                        Hidden Model Friction
                      </div>
                      <p className="text-sm text-slate-700 leading-relaxed">{mod.hiddenProblem}</p>
                    </div>

                    {/* The Implication */}
                    <div className="p-5 rounded-2xl bg-rose-50/60 border border-rose-200">
                      <div className="text-xs font-mono text-rose-700 uppercase tracking-wider mb-2 font-bold flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-rose-500" />
                        Economic Stagnation
                      </div>
                      <p className="text-sm text-slate-700 leading-relaxed">{mod.implication}</p>
                    </div>

                    {/* The Critical Trigger */}
                    <div className="p-5 rounded-2xl bg-purple-50/60 border border-purple-200">
                      <div className="text-xs font-mono text-purple-700 uppercase tracking-wider mb-2 font-bold flex items-center gap-2">
                        <Zap className="w-3.5 h-3.5 text-purple-600" />
                        Boardroom Trigger Event
                      </div>
                      <p className="text-sm text-slate-700 leading-relaxed">{mod.trigger}</p>
                    </div>

                    {/* The Resolution */}
                    <div className="p-5 rounded-2xl bg-emerald-50/60 border border-emerald-200 md:col-span-2">
                      <div className="text-xs font-mono text-emerald-700 uppercase tracking-wider mb-2 font-bold flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                        Model Deployment Resolution
                      </div>
                      <p className="text-sm text-slate-700 leading-relaxed">{mod.resolution}</p>
                    </div>
                  </div>

                  {/* Metrics and Quote */}
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
                    <div className="lg:col-span-5 grid grid-cols-2 gap-4">
                      <div className="p-5 rounded-2xl bg-slate-900 text-white flex flex-col justify-between">
                        <div className="text-xs font-mono text-slate-400 uppercase">Model Lift</div>
                        <div className="text-3xl font-extrabold text-emerald-400 my-2 font-heading">{mod.metric}</div>
                        <div className="text-xs text-slate-300 leading-snug">{mod.metricLabel}</div>
                      </div>
                      <div className="p-5 rounded-2xl bg-slate-900 text-white flex flex-col justify-between">
                        <div className="text-xs font-mono text-slate-400 uppercase">Scale Metric</div>
                        <div className="text-3xl font-extrabold text-teal-400 my-2 font-heading">{mod.secondaryMetric}</div>
                        <div className="text-xs text-slate-300 leading-snug">{mod.secondaryMetricLabel}</div>
                      </div>
                    </div>

                    <div className="lg:col-span-7 p-6 rounded-2xl bg-slate-100 border border-slate-200 flex flex-col justify-between">
                      <div className="flex items-start gap-3">
                        <Quote className="w-6 h-6 text-emerald-500 shrink-0 mt-1" />
                        <div>
                          <div className="text-xs font-mono text-slate-500 uppercase tracking-wider mb-1 font-bold">Executive Realization Quote</div>
                          <p className="text-sm italic text-slate-800 font-medium">"{mod.quote}"</p>
                        </div>
                      </div>
                      <div className="text-xs text-slate-500 text-right mt-3 font-mono">
                        — {mod.quoteAuthor}
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
            <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest font-bold">Empirical Proof</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2 font-heading">
              Verified Model Execution Outcomes
            </h2>
            <p className="text-slate-400 text-base mt-3">
              Calibrated across enterprise transformations delivered by Bain alumni and AI architects.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {outcomes.map((item, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-slate-950/70 border border-slate-800 hover:border-emerald-500/50 transition-all">
                <div className="text-4xl font-extrabold text-emerald-400 mb-2 font-heading">{item.stat}</div>
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
            <span className="text-xs font-mono text-emerald-600 uppercase tracking-widest font-bold">System Interconnection</span>
            <h2 className="text-3xl font-extrabold text-slate-900 mt-2 font-heading">
              Models Operationalize the Science
            </h2>
            <p className="text-slate-600 mt-2 text-base">
              Growth models transform baseline Revenue Physics and Friction Diagnoses into actionable operational blueprints, tracked continuously via Executive Telemetry.
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
                  Defines model inputs: cohort compounding, micro-segment margin concentration, and unit economic foundations.
                </p>
              </div>
              <div className="mt-6 flex items-center text-xs font-mono font-bold text-blue-600">
                Explore Revenue Physics <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
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
                  Executes model outputs at machine scale through autonomous SDR/AE swarms and predictive retention loops.
                </p>
              </div>
              <div className="mt-6 flex items-center text-xs font-mono font-bold text-violet-600">
                Explore AI Engines <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            <Link
              to="/growth-science/executive-telemetry"
              className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-indigo-400 hover:shadow-md transition-all group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono px-2 py-0.5 rounded bg-indigo-100 text-indigo-700 font-bold">Pillar 05</span>
                  <LineChart className="w-5 h-5 text-indigo-600 group-hover:scale-110 transition-transform" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors">Executive Telemetry</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Measures model outcomes in real time: velocity pacing, cohort health scorecards, and forecast-to-actuals accuracy.
                </p>
              </div>
              <div className="mt-6 flex items-center text-xs font-mono font-bold text-indigo-600">
                Explore Executive Telemetry <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
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
              Every Proprietary Growth Models capability is governed by rigorous mathematical benchmarks. Below are the definitive KPIs, formulas, and operational rationales that determine success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-blue-400 hover:shadow-xs transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-50 text-blue-700 font-bold uppercase tracking-wider">
                    Profitability Metric
                  </span>
                  <span className="text-xs font-mono text-slate-500 font-bold">70% - 85% Target Margin</span>
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2 font-heading">Gross Contribution Margin</h3>
                <div className="text-xs font-mono bg-slate-50 text-slate-700 p-2.5 rounded-lg border border-slate-200/80 mb-3">
                  <span className="text-slate-400 font-bold block mb-0.5">Formula:</span> [(Total Revenue - Cost of Goods Sold) / Total Revenue] × 100
                </div>
                <p className="text-xs text-slate-600 leading-relaxed mb-3">Proportion of contract revenue retained after satisfying all direct infrastructure and delivery expenses.</p>
              </div>
              <div className="pt-3 border-t border-slate-100 text-[11px] text-slate-500">
                <span className="font-bold text-slate-800">Why it matters:</span> The foundation of enterprise valuation; protected by rigorous profit pool optimization and discount floors.
              </div>
            </div>
            <div className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-blue-400 hover:shadow-xs transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-50 text-blue-700 font-bold uppercase tracking-wider">
                    Concentration Metric
                  </span>
                  <span className="text-xs font-mono text-slate-500 font-bold">High-Yield Segment Focus</span>
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2 font-heading">Unit Profitability per Micro-Segment</h3>
                <div className="text-xs font-mono bg-slate-50 text-slate-700 p-2.5 rounded-lg border border-slate-200/80 mb-3">
                  <span className="text-slate-400 font-bold block mb-0.5">Formula:</span> Segment Revenue - Segment Acquisition Cost - Servicing and Direct Support Overhead
                </div>
                <p className="text-xs text-slate-600 leading-relaxed mb-3">True net contribution margin delivered across specific industry and customer tier cohorts.</p>
              </div>
              <div className="pt-3 border-t border-slate-100 text-[11px] text-slate-500">
                <span className="font-bold text-slate-800">Why it matters:</span> Reveals where profit concentrates, allowing leadership to reallocate capital away from value-dilutive segments.
              </div>
            </div>
            <div className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-blue-400 hover:shadow-xs transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-50 text-blue-700 font-bold uppercase tracking-wider">
                    Unit Metric
                  </span>
                  <span className="text-xs font-mono text-slate-500 font-bold">Positive Unit Economics</span>
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2 font-heading">Customer Account Unit Economics</h3>
                <div className="text-xs font-mono bg-slate-50 text-slate-700 p-2.5 rounded-lg border border-slate-200/80 mb-3">
                  <span className="text-slate-400 font-bold block mb-0.5">Formula:</span> Annual Contract Value - Allocated CAC Amortization - Direct Annual Servicing Load
                </div>
                <p className="text-xs text-slate-600 leading-relaxed mb-3">Individual account-level profitability measuring true economic contribution to the enterprise balance sheet.</p>
              </div>
              <div className="pt-3 border-t border-slate-100 text-[11px] text-slate-500">
                <span className="font-bold text-slate-800">Why it matters:</span> Eliminates hidden servicing drains where large legacy accounts consume more support cost than they generate.
              </div>
            </div>
            <div className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-blue-400 hover:shadow-xs transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-50 text-blue-700 font-bold uppercase tracking-wider">
                    Capital Metric
                  </span>
                  <span className="text-xs font-mono text-slate-500 font-bold">&lt;12 Month Capital Payback</span>
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2 font-heading">CAC Payback Velocity in Months</h3>
                <div className="text-xs font-mono bg-slate-50 text-slate-700 p-2.5 rounded-lg border border-slate-200/80 mb-3">
                  <span className="text-slate-400 font-bold block mb-0.5">Formula:</span> Customer Acquisition Cost / (Monthly Recurring Revenue × Gross Contribution Margin %)
                </div>
                <p className="text-xs text-slate-600 leading-relaxed mb-3">Months of customer cash flow required to fully recover the sales and marketing capital invested to acquire them.</p>
              </div>
              <div className="pt-3 border-t border-slate-100 text-[11px] text-slate-500">
                <span className="font-bold text-slate-800">Why it matters:</span> The primary metric dictating company cash burn, capital efficiency, and self-funding expansion capacity.
              </div>
            </div>
            <div className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-blue-400 hover:shadow-xs transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-50 text-blue-700 font-bold uppercase tracking-wider">
                    Compounding Metric
                  </span>
                  <span className="text-xs font-mono text-slate-500 font-bold">LTV:CAC Ratio &gt; 3.5x</span>
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2 font-heading">Customer Lifetime Economic Value (LTV)</h3>
                <div className="text-xs font-mono bg-slate-50 text-slate-700 p-2.5 rounded-lg border border-slate-200/80 mb-3">
                  <span className="text-slate-400 font-bold block mb-0.5">Formula:</span> (Average Annual Contract ACV × Gross Margin %) / Annualized Customer Churn Rate
                </div>
                <p className="text-xs text-slate-600 leading-relaxed mb-3">Aggregate net contribution produced over the entire expected duration of an enterprise customer relationship.</p>
              </div>
              <div className="pt-3 border-t border-slate-100 text-[11px] text-slate-500">
                <span className="font-bold text-slate-800">Why it matters:</span> Establishes the sustainable upper boundary for acquisition spend while assuring long-term corporate profitability.
              </div>
            </div>
            <div className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-blue-400 hover:shadow-xs transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-50 text-blue-700 font-bold uppercase tracking-wider">
                    Return Metric
                  </span>
                  <span className="text-xs font-mono text-slate-500 font-bold">&gt;40% Cash-on-Cash ROGI</span>
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2 font-heading">Return on Growth Investment (ROGI)</h3>
                <div className="text-xs font-mono bg-slate-50 text-slate-700 p-2.5 rounded-lg border border-slate-200/80 mb-3">
                  <span className="text-slate-400 font-bold block mb-0.5">Formula:</span> (Net Incremental Gross Margin Added / Total Transformed Growth Capital Invested) × 100
                </div>
                <p className="text-xs text-slate-600 leading-relaxed mb-3">Economic return realized on capital invested in transforming commercial systems, models, and workflows.</p>
              </div>
              <div className="pt-3 border-t border-slate-100 text-[11px] text-slate-500">
                <span className="font-bold text-slate-800">Why it matters:</span> Directly validates the board-level return on deploying AI-native revenue operating models.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="intake" className="py-24 bg-slate-950 text-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-400/30 text-emerald-300 text-xs font-mono uppercase tracking-widest mb-6">
                Transformation Protocol
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-6 font-heading">
                Ready to Deploy Battle-Tested Growth Models?
              </h2>
              <p className="text-base sm:text-lg text-slate-300 mb-8 leading-relaxed">
                Connect directly with our Principal Architects to evaluate how Revenue Velocity, Profit Pool Optimization, and the Demand Flywheel can be deployed within your GTM organization.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3 text-sm text-slate-200">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span>Revenue Velocity formula calibration against your current CRM pipeline</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-200">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span>Granular contribution margin and profit pool matrix mapping</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-200">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span>90-day AI-native operational transformation blueprint</span>
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
                <h3 className="text-xl font-bold text-white mb-2">Deploy Growth Models</h3>
                <p className="text-xs text-slate-400 mb-6">Confidential intake. Direct routing to Transformation Practice.</p>
                <AiSalesIntakeForm />
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
