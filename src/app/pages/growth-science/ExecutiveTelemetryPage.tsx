import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight, ChevronRight, LineChart, Activity, Eye,
  BarChart3, CheckCircle2, AlertTriangle, Layers, Radar,
  Quote, Shield, ArrowUpRight, Gauge, PieChart, Users,
  Zap, Cpu, TrendingUp
} from 'lucide-react';
import { AiSalesIntakeForm } from '../../components/forms/AiSalesIntakeForm';

export default function ExecutiveTelemetryPage() {
  useEffect(() => {
    document.title = 'Executive Telemetry: Real-Time Visibility for the C-Suite | ProfitMachines';
    window.scrollTo(0, 0);
  }, []);

  const systems = [
    {
      title: 'Predictive Revenue Forecasting',
      telemetryCode: 'Telemetry Stream 01',
      kpiBadge: '<5% Variance to Actuals',
      visualizationType: 'Stochastic Pipeline Confidence Band',
      question: 'Can you forecast revenue with mathematical certainty — or are you relying on rep commits?',
      situation: 'Forecasts are based on rep commits, which are optimistic guesses. Variance between forecast and actuals is 30-40%.',
      hiddenProblem: 'Behavioral signals (deal progression, stakeholder engagement, competitive pressure) predict revenue more accurately than human judgment. Without predictive models, forecasts are hope, not science.',
      implication: 'The board loses trust in forecasts. Resources are misallocated. Course correction happens after the quarter ends, not before.',
      trigger: 'When three consecutive quarters miss forecast and the board questions the sales process.',
      resolution: 'Predictive forecasting models combine pipeline health, deal velocity, and behavioral signals to generate forecasts with <5% variance. The board gets certainty, not optimism.',
      metric: '<5%',
      metricLabel: 'forecast-to-actuals variance across closing quarters',
      secondaryMetric: '94.2%',
      secondaryMetricLabel: 'stochastic accuracy on 90-day pipeline commits',
      quote: 'The board stopped trusting our forecasts after three consecutive misses — predictive forecasting restored confidence.',
      quoteAuthor: 'Chief Financial Officer, Enterprise B2B SaaS'
    },
    {
      title: 'Cohort & Retention Analytics',
      telemetryCode: 'Telemetry Stream 02',
      kpiBadge: 'Cohort LTV & Trajectory Heatmap',
      visualizationType: 'Longitudinal Expansion Decay Curve',
      question: 'Do you know which customer cohorts compound value — and which churn?',
      situation: 'Companies track aggregate retention rates but don\'t understand cohort dynamics. They don\'t know which segments retain, which expand, and which churn.',
      hiddenProblem: 'Cohort behavior predicts future revenue. Without cohort analytics, you can\'t optimize retention or expansion systematically.',
      implication: 'You treat all customers the same, missing opportunities to retain high-value cohorts and exit low-value ones.',
      trigger: 'When NRR plateaus and you can\'t identify why.',
      resolution: 'Cohort analytics segment customers by acquisition date, segment, and behavior. Retention curves, expansion trajectories, and churn predictors reveal which cohorts drive long-term value.',
      metric: '20-30%',
      metricLabel: 'improvement in NRR through cohort-optimized retention',
      secondaryMetric: '2X',
      secondaryMetricLabel: 'expansion rate identified in top quarter acquisition cohorts',
      quote: 'We didn\'t realize customers acquired in Q1 had 2X the expansion rate of Q3 customers — cohort analytics changed how we prioritize.',
      quoteAuthor: 'Chief Customer Officer, Public Cloud Security'
    },
    {
      title: 'Sales Productivity Metrics',
      telemetryCode: 'Telemetry Stream 03',
      kpiBadge: 'Behavioral Execution Benchmark',
      visualizationType: 'Rep Activity to Win Rate Correlation Matrix',
      question: 'Do you know what separates your top performers — or are you guessing?',
      situation: 'Sales managers evaluate reps based on quota attainment. They don\'t understand the behaviors that drive top performance.',
      hiddenProblem: 'Top performers have distinct behavioral patterns — specific activities, conversation styles, and deal strategies. Without identifying these, you can\'t scale top performance.',
      implication: 'Average performers stay average. Top performers leave. The team doesn\'t improve.',
      trigger: 'When quota attainment drops and you can\'t identify why.',
      resolution: 'Sales productivity metrics analyze the behaviors of top performers and prescribe those patterns to the rest of the team. Coaching becomes data-driven, not anecdotal.',
      metric: '25-40%',
      metricLabel: 'improvement in average rep productivity within 2 quarters',
      secondaryMetric: '3X',
      secondaryMetricLabel: 'increase in multi-threaded stakeholder penetration per account',
      quote: 'We couldn\'t figure out why our top reps were 3X more productive — productivity metrics showed it was specific behaviors we could scale.',
      quoteAuthor: 'EVP Worldwide Sales, Enterprise Infrastructure'
    },
    {
      title: 'C-Suite Growth Scorecards',
      telemetryCode: 'Telemetry Stream 04',
      kpiBadge: 'Unified C-Suite Executive Cockpit',
      visualizationType: 'Real-Time ARR Velocity & Margin Index',
      question: 'Does your C-suite have real-time visibility into growth — or just quarterly reports?',
      situation: 'Executives receive quarterly reports with lagging indicators. By the time they see problems, it\'s too late to course-correct.',
      hiddenProblem: 'Growth requires real-time visibility into leading indicators — pipeline velocity, cohort health, friction points, acceleration opportunities. Without this, executives are flying blind.',
      implication: 'Decisions are reactive, not proactive. The organization responds to problems instead of preventing them.',
      trigger: 'When a major customer churns — and the C-suite finds out from the quarterly report.',
      resolution: 'C-Suite Growth Scorecards provide real-time visibility into the metrics that matter — revenue velocity, cohort health, friction diagnostics, and acceleration opportunities. Executives get predictive intelligence, not lagging reports.',
      metric: '50-70%',
      metricLabel: 'faster decision-making through real-time telemetry',
      secondaryMetric: '100%',
      secondaryMetricLabel: 'real-time alignment between CEO, CFO, and CRO leadership',
      quote: 'We found out about major customer issues in the quarterly report — C-suite scorecards gave us real-time visibility to prevent problems.',
      quoteAuthor: 'Chief Executive Officer, Multi-Tenant SaaS Platform'
    }
  ];

  const outcomes = [
    { stat: '<5%', label: 'Forecast Variance', detail: 'Predictive behavioral machine learning replacing subjective rep commitments' },
    { stat: '20-30%', label: 'NRR Expansion', detail: 'Granular cohort segmentation pinpointing high-expansion customer clusters' },
    { stat: '25-40%', label: 'Rep Productivity Lift', detail: 'Top-performer behavioral modeling replicated across the entire commercial bench' },
    { stat: '50-70%', label: 'Decision Acceleration', detail: 'Leading indicator scorecards eliminating reliance on delayed quarterly post-mortems' }
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans">

      {/* ── HERO ── */}
      <section className="relative pt-20 pb-20 sm:pt-28 sm:pb-28 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute inset-0 opacity-[0.22]" style={{ backgroundImage: 'linear-gradient(to right, rgba(99,102,241,0.12) 1px, transparent 1px), linear-gradient(to bottom, rgba(99,102,241,0.12) 1px, transparent 1px)', backgroundSize: '3rem 3rem' }} />
          <div className="absolute top-0 right-1/4 w-[650px] h-[650px] bg-indigo-600/15 rounded-full blur-[140px]" />
          <div className="absolute bottom-0 right-10 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px]" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center gap-2 mb-6">
            <Link to="/growth-science" className="text-xs font-mono text-slate-400 hover:text-white transition-colors">
              Growth Science Hub
            </Link>
            <span className="text-slate-600 text-xs">/</span>
            <span className="text-xs font-mono text-indigo-400 font-bold uppercase tracking-wider">
              Pillar 05
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/15 border border-indigo-400/30 text-indigo-300 text-xs font-bold tracking-widest uppercase font-mono mb-6">
                <LineChart className="w-3.5 h-3.5 text-indigo-400" />
                PILLAR 05 OF 05
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.07] mb-6 font-heading">
                Executive Telemetry:{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-blue-300 to-cyan-300">
                  Real-Time Visibility for the C-Suite
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-slate-300 leading-relaxed max-w-2xl mb-8">
                Boards don't want lagging indicators — they want predictive intelligence. Four telemetry systems give the C-suite real-time visibility into revenue health, cohort performance, sales productivity, and growth trajectory.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="#intake" className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white font-bold px-7 py-4 rounded-xl text-sm shadow-lg shadow-indigo-600/30 transition-all hover:-translate-y-0.5 group font-mono uppercase tracking-wider">
                  Schedule a Telemetry Demo
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
                <a href="#telemetry-cockpit" className="inline-flex items-center gap-2 border border-slate-700 bg-slate-900/80 hover:bg-slate-800 text-slate-200 font-bold px-6 py-4 rounded-xl text-sm transition-all font-mono uppercase tracking-wider">
                  Explore C-Suite Systems
                  <ChevronRight className="w-4 h-4 text-indigo-400" />
                </a>
              </div>
            </div>

            {/* Visual: Executive Dashboard Cockpit Interface */}
            <div className="lg:col-span-5">
              <div className="p-6 rounded-2xl bg-slate-900/95 border border-slate-800 shadow-2xl relative backdrop-blur-xl">
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 animate-ping" />
                    <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">C-Suite Live Telemetry</span>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                    Live Sync: Real-Time
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800">
                    <div className="text-[10px] font-mono text-slate-400 uppercase">Q3 Forecast Confidence</div>
                    <div className="text-2xl font-extrabold text-white my-1 font-mono">$18.4M</div>
                    <div className="text-[11px] text-emerald-400 font-mono flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" /> 97.4% Model Certainty
                    </div>
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800">
                    <div className="text-[10px] font-mono text-slate-400 uppercase">Net Revenue Retention</div>
                    <div className="text-2xl font-extrabold text-white my-1 font-mono">128.6%</div>
                    <div className="text-[11px] text-indigo-400 font-mono flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" /> +14.2% YoY Lift
                    </div>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 mb-3">
                  <div className="flex justify-between items-center text-xs font-mono text-slate-400 mb-2">
                    <span>Revenue Velocity Index</span>
                    <span className="text-blue-400 font-bold">148 pts (+42%)</span>
                  </div>
                  <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                    <div className="bg-gradient-to-r from-blue-500 via-indigo-500 to-emerald-400 h-full w-[82%]" />
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span>Boardroom Ready</span>
                  <span className="text-indigo-400 font-bold">&lt;5% Variance Guaranteed</span>
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
            <span className="text-xs font-mono text-indigo-700 uppercase tracking-widest font-bold">The Telemetry Thesis</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2 font-heading">
              Predictive Intelligence, Not Lagging Reports
            </h2>
          </div>
          <div className="p-8 sm:p-12 rounded-3xl bg-white border border-slate-200 shadow-sm relative">
            <div className="absolute top-6 right-8 text-slate-200 font-serif text-7xl select-none leading-none opacity-40">“</div>
            <p className="text-lg sm:text-xl text-slate-700 leading-relaxed font-normal">
              Most executives receive quarterly reports with lagging indicators. By the time they see problems, it's too late to course-correct. Growth requires real-time visibility into leading indicators — pipeline velocity, cohort health, friction points, acceleration opportunities. Without this, executives are flying blind. Executive telemetry provides predictive intelligence — real-time visibility into the metrics that matter, delivered as actionable scorecards, not static reports.
            </p>
            <div className="mt-8 pt-6 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-700 font-bold text-sm">ET</div>
                <div>
                  <div className="text-sm font-bold text-slate-900">ProfitMachines Executive Intelligence Group</div>
                  <div className="text-xs text-slate-500 font-mono">Real-Time Boardroom Analytics</div>
                </div>
              </div>
              <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-indigo-600 bg-indigo-50 px-3 py-1.5 rounded-lg border border-indigo-200">
                Predictive Governance Telemetry
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── THE 4 TELEMETRY SYSTEMS (EXECUTIVE DASHBOARD LAYOUT) ── */}
      <section id="telemetry-cockpit" className="py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <span className="text-xs font-mono text-indigo-600 uppercase tracking-widest font-bold">C-Suite Cockpit Architecture</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2 mb-4 font-heading">
              The Four Executive Telemetry Systems
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              Dynamic dashboards, algorithmic forecasting models, and cohort analytics designed for board-level clarity and proactive intervention.
            </p>
          </div>

          <div className="space-y-16">
            {systems.map((sys, index) => (
              <div
                key={index}
                className="rounded-3xl border border-slate-200 bg-gradient-to-br from-white to-slate-50/50 shadow-sm overflow-hidden hover:border-indigo-300 transition-all"
              >
                {/* Dashboard Cockpit Header Strip */}
                <div className="p-6 sm:p-8 bg-slate-900 text-white flex flex-wrap items-center justify-between gap-4 border-b border-slate-800">
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 uppercase tracking-widest font-bold">
                        {sys.telemetryCode}
                      </span>
                      <span className="text-xs font-mono text-slate-400">{sys.visualizationType}</span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-heading">
                      {sys.title}
                    </h3>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-800 border border-slate-700 font-mono text-xs text-indigo-300">
                    <span className="text-slate-400">Board Metric: </span>{sys.kpiBadge}
                  </div>
                </div>

                {/* Narrative Dashboard Grid */}
                <div className="p-6 sm:p-10">
                  {/* Sharp Provocative Question */}
                  <div className="mb-8 pb-6 border-b border-slate-100">
                    <div className="text-xs font-mono text-indigo-600 uppercase tracking-wider mb-2 font-bold">Core Diagnostic Invalidation</div>
                    <div className="text-xl sm:text-2xl font-bold text-slate-900 italic font-heading">
                      "{sys.question}"
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                    {/* The Situation */}
                    <div className="p-5 rounded-2xl bg-white border border-slate-200">
                      <div className="text-xs font-mono text-slate-500 uppercase tracking-wider mb-2 font-bold flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-slate-400" />
                        Observed State
                      </div>
                      <p className="text-sm text-slate-700 leading-relaxed">{sys.situation}</p>
                    </div>

                    {/* The Hidden Problem */}
                    <div className="p-5 rounded-2xl bg-amber-50/60 border border-amber-200">
                      <div className="text-xs font-mono text-amber-700 uppercase tracking-wider mb-2 font-bold flex items-center gap-2">
                        <AlertTriangle className="w-3.5 h-3.5 text-amber-600" />
                        Information Blind Spot
                      </div>
                      <p className="text-sm text-slate-700 leading-relaxed">{sys.hiddenProblem}</p>
                    </div>

                    {/* The Implication */}
                    <div className="p-5 rounded-2xl bg-rose-50/60 border border-rose-200">
                      <div className="text-xs font-mono text-rose-700 uppercase tracking-wider mb-2 font-bold flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-rose-500" />
                        Executive Risk
                      </div>
                      <p className="text-sm text-slate-700 leading-relaxed">{sys.implication}</p>
                    </div>

                    {/* The Critical Trigger */}
                    <div className="p-5 rounded-2xl bg-purple-50/60 border border-purple-200">
                      <div className="text-xs font-mono text-purple-700 uppercase tracking-wider mb-2 font-bold flex items-center gap-2">
                        <Zap className="w-3.5 h-3.5 text-purple-600" />
                        Board Inquest Trigger
                      </div>
                      <p className="text-sm text-slate-700 leading-relaxed">{sys.trigger}</p>
                    </div>

                    {/* The Resolution */}
                    <div className="p-5 rounded-2xl bg-indigo-50/60 border border-indigo-200 md:col-span-2">
                      <div className="text-xs font-mono text-indigo-700 uppercase tracking-wider mb-2 font-bold flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-indigo-600" />
                        Predictive Telemetry Resolution
                      </div>
                      <p className="text-sm text-slate-700 leading-relaxed">{sys.resolution}</p>
                    </div>
                  </div>

                  {/* Metrics and Quote */}
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
                    <div className="lg:col-span-5 grid grid-cols-2 gap-4">
                      <div className="p-5 rounded-2xl bg-slate-900 text-white flex flex-col justify-between">
                        <div className="text-xs font-mono text-slate-400 uppercase">Predictive Accuracy</div>
                        <div className="text-3xl font-extrabold text-indigo-400 my-2 font-heading">{sys.metric}</div>
                        <div className="text-xs text-slate-300 leading-snug">{sys.metricLabel}</div>
                      </div>
                      <div className="p-5 rounded-2xl bg-slate-900 text-white flex flex-col justify-between">
                        <div className="text-xs font-mono text-slate-400 uppercase">Stochastic Confidence</div>
                        <div className="text-3xl font-extrabold text-cyan-400 my-2 font-heading">{sys.secondaryMetric}</div>
                        <div className="text-xs text-slate-300 leading-snug">{sys.secondaryMetricLabel}</div>
                      </div>
                    </div>

                    <div className="lg:col-span-7 p-6 rounded-2xl bg-slate-100 border border-slate-200 flex flex-col justify-between">
                      <div className="flex items-start gap-3">
                        <Quote className="w-6 h-6 text-indigo-500 shrink-0 mt-1" />
                        <div>
                          <div className="text-xs font-mono text-slate-500 uppercase tracking-wider mb-1 font-bold">C-Suite Evidence</div>
                          <p className="text-sm italic text-slate-800 font-medium">"{sys.quote}"</p>
                        </div>
                      </div>
                      <div className="text-xs text-slate-500 text-right mt-3 font-mono">
                        — {sys.quoteAuthor}
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
            <span className="text-xs font-mono text-indigo-400 uppercase tracking-widest font-bold">Empirical Proof</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2 font-heading">
              Verified Executive Telemetry Benchmarks
            </h2>
            <p className="text-slate-400 text-base mt-3">
              Delivered across enterprise leadership cockpits, private equity portfolios, and boardrooms.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {outcomes.map((item, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-slate-950/70 border border-slate-800 hover:border-indigo-500/50 transition-all">
                <div className="text-4xl font-extrabold text-indigo-400 mb-2 font-heading">{item.stat}</div>
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
            <span className="text-xs font-mono text-indigo-600 uppercase tracking-widest font-bold">System Interconnection</span>
            <h2 className="text-3xl font-extrabold text-slate-900 mt-2 font-heading">
              Telemetry Monitors the Entire System
            </h2>
            <p className="text-slate-600 mt-2 text-base">
              Executive Telemetry feeds on Revenue Physics, detects Friction Diagnostics, supervises AI Acceleration Engines, and tracks Proprietary Growth Models.
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
                  Telemetry benchmarks operational output directly against first-principles physics and unit economics.
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
                  Telemetry serves as an early radar alerting executives to pipeline stall points and discount drift in real time.
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
                  Monitors autonomous agent swarms, retention neural models, and dynamic pricing execution live in production.
                </p>
              </div>
              <div className="mt-6 flex items-center text-xs font-mono font-bold text-violet-600">
                Explore AI Engines <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
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
              Every Executive Telemetry capability is governed by rigorous mathematical benchmarks. Below are the definitive KPIs, formulas, and operational rationales that determine success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-blue-400 hover:shadow-xs transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-50 text-blue-700 font-bold uppercase tracking-wider">
                    Executive Metric
                  </span>
                  <span className="text-xs font-mono text-slate-500 font-bold">Live Telemetry Stream</span>
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2 font-heading">Real-Time Revenue Velocity HUD</h3>
                <div className="text-xs font-mono bg-slate-50 text-slate-700 p-2.5 rounded-lg border border-slate-200/80 mb-3">
                  <span className="text-slate-400 font-bold block mb-0.5">Formula:</span> Continuous Daily Pipeline Conversion Progression Extrapolated to Annualized ARR Run-Rate
                </div>
                <p className="text-xs text-slate-600 leading-relaxed mb-3">Real-time executive cockpit displaying pipeline flow velocity, deal stagnation alerts, and revenue pacing.</p>
              </div>
              <div className="pt-3 border-t border-slate-100 text-[11px] text-slate-500">
                <span className="font-bold text-slate-800">Why it matters:</span> Eliminates reliance on outdated quarterly reports, giving C-suite leadership immediate diagnostic visibility.
              </div>
            </div>
            <div className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-blue-400 hover:shadow-xs transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-50 text-blue-700 font-bold uppercase tracking-wider">
                    Predictive Metric
                  </span>
                  <span className="text-xs font-mono text-slate-500 font-bold">&gt;80% Decision Authority</span>
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2 font-heading">Pipeline Health & Authority Index</h3>
                <div className="text-xs font-mono bg-slate-50 text-slate-700 p-2.5 rounded-lg border border-slate-200/80 mb-3">
                  <span className="text-slate-400 font-bold block mb-0.5">Formula:</span> (Active Pipeline Validated with Verified C-Suite Economic Buyers / Total Pipeline) × 100
                </div>
                <p className="text-xs text-slate-600 leading-relaxed mb-3">Proportion of forward pipeline verified through multi-threaded executive engagement and documented ROI.</p>
              </div>
              <div className="pt-3 border-t border-slate-100 text-[11px] text-slate-500">
                <span className="font-bold text-slate-800">Why it matters:</span> Distinguishes genuine enterprise pipeline from speculative deals that will push or stall indefinitely.
              </div>
            </div>
            <div className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-blue-400 hover:shadow-xs transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-50 text-blue-700 font-bold uppercase tracking-wider">
                    Precision Metric
                  </span>
                  <span className="text-xs font-mono text-slate-500 font-bold">&lt;5% Quarterly Variance</span>
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2 font-heading">Commit Forecast Precision Variance</h3>
                <div className="text-xs font-mono bg-slate-50 text-slate-700 p-2.5 rounded-lg border border-slate-200/80 mb-3">
                  <span className="text-slate-400 font-bold block mb-0.5">Formula:</span> (|Actual Closed Revenue Book - Stochastic Pipeline Commit| / Forecast Commit) × 100
                </div>
                <p className="text-xs text-slate-600 leading-relaxed mb-3">Mathematical discrepancy between machine-learned closing forecasts and actual audited quarterly results.</p>
              </div>
              <div className="pt-3 border-t border-slate-100 text-[11px] text-slate-500">
                <span className="font-bold text-slate-800">Why it matters:</span> Restores executive credibility with the board of directors and provides certainty for strategic planning.
              </div>
            </div>
            <div className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-blue-400 hover:shadow-xs transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-50 text-blue-700 font-bold uppercase tracking-wider">
                    Profitability Metric
                  </span>
                  <span className="text-xs font-mono text-slate-500 font-bold">Margin Protection</span>
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2 font-heading">Corporate Contribution Margin Index</h3>
                <div className="text-xs font-mono bg-slate-50 text-slate-700 p-2.5 rounded-lg border border-slate-200/80 mb-3">
                  <span className="text-slate-400 font-bold block mb-0.5">Formula:</span> Enterprise Revenue Retained After Variable Cloud Hosting, Support Load, and Partner Revenue Share
                </div>
                <p className="text-xs text-slate-600 leading-relaxed mb-3">True corporate gross contribution margin produced across all active software and solution tiers.</p>
              </div>
              <div className="pt-3 border-t border-slate-100 text-[11px] text-slate-500">
                <span className="font-bold text-slate-800">Why it matters:</span> Ensures revenue scaling expands net corporate earnings rather than quietly diluting enterprise margins.
              </div>
            </div>
            <div className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-blue-400 hover:shadow-xs transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-50 text-blue-700 font-bold uppercase tracking-wider">
                    Efficiency Metric
                  </span>
                  <span className="text-xs font-mono text-slate-500 font-bold">&lt;12 Month CAC Payback</span>
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2 font-heading">Fully Loaded Customer Acquisition Cost</h3>
                <div className="text-xs font-mono bg-slate-50 text-slate-700 p-2.5 rounded-lg border border-slate-200/80 mb-3">
                  <span className="text-slate-400 font-bold block mb-0.5">Formula:</span> All Commercial Headcount, Ad Spend, Tooling, and Leadership Overhead / Sourced Net-New ARR
                </div>
                <p className="text-xs text-slate-600 leading-relaxed mb-3">Comprehensive capital required to add each dollar of annual recurring revenue across the organization.</p>
              </div>
              <div className="pt-3 border-t border-slate-100 text-[11px] text-slate-500">
                <span className="font-bold text-slate-800">Why it matters:</span> The ultimate financial efficiency metric determining enterprise valuation multiples and capital runway.
              </div>
            </div>
            <div className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-blue-400 hover:shadow-xs transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-50 text-blue-700 font-bold uppercase tracking-wider">
                    Trajectory Metric
                  </span>
                  <span className="text-xs font-mono text-slate-500 font-bold">120% - 135% Compounding</span>
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2 font-heading">Cohort Net Revenue Retention (NRR)</h3>
                <div className="text-xs font-mono bg-slate-50 text-slate-700 p-2.5 rounded-lg border border-slate-200/80 mb-3">
                  <span className="text-slate-400 font-bold block mb-0.5">Formula:</span> [(Installed Base ARR + Account Expansion - Account Churn) / Starting Base ARR] × 100
                </div>
                <p className="text-xs text-slate-600 leading-relaxed mb-3">Longitudinal expansion rate produced by existing client cohorts without factoring new customer acquisition.</p>
              </div>
              <div className="pt-3 border-t border-slate-100 text-[11px] text-slate-500">
                <span className="font-bold text-slate-800">Why it matters:</span> Validates that the enterprise operating system delivers compounding value to customers over multi-year periods.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="intake" className="py-24 bg-slate-950 text-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/15 border border-indigo-400/30 text-indigo-300 text-xs font-mono uppercase tracking-widest mb-6">
                Executive Telemetry Protocol
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-6 font-heading">
                Ready to See Your Growth in Real Time?
              </h2>
              <p className="text-base sm:text-lg text-slate-300 mb-8 leading-relaxed">
                Schedule a confidential C-Suite Telemetry Demonstration. We will show you how stochastic forecasting, cohort retention curves, and executive scorecards give boards total certainty.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3 text-sm text-slate-200">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span>Stochastic pipeline forecasting calibrated to &lt;5% quarterly variance</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-200">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span>Cohort retention and expansion decay telemetry architecture</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-200">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span>Custom C-suite scorecard integration with your existing BI data warehouse</span>
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
                <h3 className="text-xl font-bold text-white mb-2">Schedule Telemetry Briefing</h3>
                <p className="text-xs text-slate-400 mb-6">Confidential intake. Direct routing to Executive Analytics Practice.</p>
                <AiSalesIntakeForm />
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
