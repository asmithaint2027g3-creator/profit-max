import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Radar,
  Activity,
  Layers,
  ArrowRight,
  TrendingUp,
  Target,
  Users,
  Search,
  Shield,
  Zap,
  BarChart3,
  Cpu,
  Clock,
  Sparkles,
  ChevronRight,
  Radio,
  CheckCircle2,
  Lock,
  PieChart,
  AlertCircle,
  Eye,
  ArrowUpRight
} from 'lucide-react';
import { AiSalesIntakeForm } from '../../components/forms/AiSalesIntakeForm';

export default function RevenueIntelligencePage() {
  useEffect(() => {
    document.title = 'Revenue Intelligence: See Every Signal Before Competitors | ProfitMachines';
    window.scrollTo(0, 0);
  }, []);

  const outcomes = [
    {
      value: "85-90%",
      label: "Purchase Readiness Accuracy",
      desc: "Predictive precision for timing a prospect's buying decision across enterprise sales cycles."
    },
    {
      value: "2.5X",
      label: "Pipeline from Re-Prioritised Accounts",
      desc: "Growth in qualified pipeline when target accounts are dynamically re-ranked by real-time propensity signals."
    },
    {
      value: "15-20%",
      label: "Margin Recovery",
      desc: "Margin recapture through AI-identified white-space micro-segments competitors have not entered."
    },
    {
      value: "<10 Days",
      label: "Competitor Move Detection",
      desc: "Average lead time to detect rival pricing restructures, product launches, and messaging pivots."
    }
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-600 selection:text-white">

      {/* ── SECTION 1: HERO (COMMAND CENTER DARK HERO WITH RADAR VISUAL) ── */}
      <section className="relative pt-20 pb-20 sm:pt-28 sm:pb-28 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden border-b border-slate-800">
        {/* Ambient Grid and Glow matching Industry & ICO UI */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div
            className="absolute inset-0 opacity-[0.25]"
            style={{
              backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.08) 1px, transparent 1px)',
              backgroundSize: '4rem 4rem'
            }}
          />
          <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-blue-600/15 rounded-full blur-[140px] pointer-events-none" />
          <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-indigo-600/15 rounded-full blur-[140px] pointer-events-none" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6">
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/15 border border-blue-400/30 text-blue-300 text-xs font-bold tracking-wide uppercase shadow-xs">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                </span>
                <span className="font-mono text-blue-400 font-extrabold">CAPABILITY PILLAR 01 OF 06</span>
                <span className="text-slate-600 font-normal">//</span>
                <span>REAL-TIME TELEMETRY</span>
              </div>

              {/* Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.08] font-heading">
                Revenue Intelligence:{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-cyan-300">
                  See Every Signal Before Your Competitors
                </span>
              </h1>

              {/* Subheadline */}
              <p className="text-lg sm:text-xl text-slate-300 leading-relaxed font-normal max-w-2xl">
                Four intelligence engines that fuse 40+ data sources to reveal who's ready to buy, what they'll pay, and how to win — in real time.
              </p>

              {/* Action CTAs */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href="#audit"
                  className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold px-7 py-4 rounded-xl shadow-lg shadow-blue-600/30 text-sm transition-all hover:-translate-y-0.5 group font-mono uppercase tracking-wider"
                >
                  <span>Schedule Intelligence Audit</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
                <Link
                  to="/ai-native-sales"
                  className="inline-flex items-center justify-center gap-2 border border-slate-700 bg-slate-900/80 hover:bg-slate-800 text-slate-200 font-bold px-6 py-4 rounded-xl text-sm transition-all font-mono uppercase tracking-wider"
                >
                  <span>Explore Other Capabilities</span>
                  <ChevronRight className="w-4 h-4 text-blue-400" />
                </Link>
              </div>

              {/* Micro-telemetry bar */}
              <div className="pt-4 flex flex-wrap items-center gap-6 text-xs text-slate-400 font-mono">
                <div className="flex items-center gap-2">
                  <Activity className="w-4 h-4 text-blue-400" />
                  <span>40+ Ingestion Feeds</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-emerald-400" />
                  <span>Sub-Second Latency</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-indigo-400" />
                  <span>Zero Public Model Training</span>
                </div>
              </div>
            </div>

            {/* Right: 4-Quadrant Intelligence Radar Visual */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl bg-slate-900/95 p-6 sm:p-8 border border-slate-800 shadow-2xl backdrop-blur-xl">
                <div className="flex items-center justify-between pb-4 border-b border-slate-800 text-xs font-mono">
                  <span className="text-blue-400 flex items-center gap-2 font-bold uppercase tracking-wider">
                    <Radio className="w-3.5 h-3.5 text-blue-400 animate-pulse" />
                    4-Quadrant Signal Radar
                  </span>
                  <span className="text-slate-400">TELEMETRY: ACTIVE</span>
                </div>

                <div className="relative h-72 sm:h-80 flex items-center justify-center my-4 overflow-hidden">
                  {/* Concentric Radar Rings */}
                  <div className="absolute w-64 h-64 rounded-full border border-blue-500/10"></div>
                  <div className="absolute w-48 h-48 rounded-full border border-blue-500/20"></div>
                  <div className="absolute w-32 h-32 rounded-full border border-blue-500/30"></div>
                  <div className="absolute w-16 h-16 rounded-full border border-blue-500/40"></div>

                  {/* Crosshairs */}
                  <div className="absolute w-full h-[1px] bg-slate-800"></div>
                  <div className="absolute h-full w-[1px] bg-slate-800"></div>

                  {/* Radar Sweep Line */}
                  <div
                    className="absolute w-32 h-32 origin-bottom-right top-1/2 left-1/2 -translate-x-full -translate-y-full bg-gradient-to-tl from-blue-500/25 to-transparent pointer-events-none rounded-tl-full animate-spin"
                    style={{ animationDuration: '4s' }}
                  />

                  {/* Pulse 1: Buyer Intent */}
                  <div className="absolute top-10 left-16 group cursor-pointer">
                    <span className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
                    </span>
                    <div className="hidden group-hover:block absolute left-4 -top-2 bg-slate-900 border border-slate-700 text-[10px] font-mono px-2 py-1 rounded text-blue-300 shadow whitespace-nowrap z-20">
                      Buyer Intent: C-Suite Vendor Search Detected
                    </div>
                  </div>

                  {/* Pulse 2: Account Propensity */}
                  <div className="absolute bottom-12 right-20 group cursor-pointer">
                    <span className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                    </span>
                    <div className="hidden group-hover:block absolute right-4 -top-2 bg-slate-900 border border-slate-700 text-[10px] font-mono px-2 py-1 rounded text-emerald-300 shadow whitespace-nowrap z-20">
                      Target Account: Q1 Fiscal Budget Confirmed
                    </div>
                  </div>

                  {/* Pulse 3: Competitive Moves */}
                  <div className="absolute top-14 right-14 group cursor-pointer">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-violet-400"></span>
                    </span>
                    <div className="hidden group-hover:block absolute right-4 -top-2 bg-slate-900 border border-slate-700 text-[10px] font-mono px-2 py-1 rounded text-violet-300 shadow whitespace-nowrap z-20">
                      Rival Pricing: Tier Restructure Flagged
                    </div>
                  </div>

                  {/* Pulse 4: Market Pools */}
                  <div className="absolute bottom-14 left-14 group cursor-pointer">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-indigo-400"></span>
                    </span>
                    <div className="hidden group-hover:block absolute left-4 -top-2 bg-slate-900 border border-slate-700 text-[10px] font-mono px-2 py-1 rounded text-indigo-300 shadow whitespace-nowrap z-20">
                      Market Pool: $400M White Space Verified
                    </div>
                  </div>

                  {/* Center Radar Core */}
                  <div className="relative z-10 w-10 h-10 rounded-full bg-slate-950 border border-blue-400 flex items-center justify-center shadow-lg shadow-blue-500/40">
                    <Cpu className="w-5 h-5 text-blue-400" />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 text-[11px] font-mono text-slate-400 pt-3 border-t border-slate-800">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-blue-400"></span>
                    <span>Q1: Buyer Signals</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                    <span>Q2: Account Propensity</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-indigo-400"></span>
                    <span>Q3: Market Pools</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-violet-400"></span>
                    <span>Q4: Competitive Moves</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── SUB-SECTION 1: BUYER INTELLIGENCE ── */}
      <section id="buyer" className="py-20 sm:py-24 border-b border-slate-200 bg-white scroll-mt-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            <div className="lg:col-span-5">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200 font-mono text-xs font-bold uppercase tracking-widest mb-5">
                <Users className="w-3.5 h-3.5" />
                <span>BUYER INTELLIGENCE</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading mb-4">
                Decode Individual Buyer Intent in Real Time
              </h2>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-6">
                Decode individual buyer intent, journey stage, and purchase readiness across every touchpoint.
              </p>

              {/* Metric Card */}
              <div className="rounded-2xl bg-slate-50 border border-slate-200 p-6 mb-6">
                <div className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider mb-1">
                  Validated Performance Benchmark
                </div>
                <div className="text-3xl sm:text-4xl font-extrabold font-mono text-blue-600">
                  85-90%
                </div>
                <div className="text-sm font-semibold text-slate-700 mt-1">
                  Predictive accuracy for purchase readiness timing
                </div>
              </div>

              {/* Common Situation Quote */}
              <div className="rounded-2xl bg-slate-50 border border-slate-200 p-5">
                <div className="text-xs font-mono font-bold text-slate-500 uppercase tracking-widest mb-2 flex items-center gap-1.5">
                  <AlertCircle className="w-3.5 h-3.5 text-blue-600" />
                  <span>Common Situation</span>
                </div>
                <p className="text-sm text-slate-700 font-medium italic">
                  "We had no idea the buying committee had 8 people until we lost the deal"
                </p>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  title: 'Intent Signal Intelligence',
                  desc: 'Detect buying signals from 40+ sources (website, content, social, search) in sub-seconds.',
                  icon: Activity,
                  tag: '40+ Sources'
                },
                {
                  title: 'Buyer Journey Intelligence',
                  desc: 'Map each prospect\'s stage in real time with behavioral precision across all touchpoints.',
                  icon: TrendingUp,
                  tag: 'Behavioral Precision'
                },
                {
                  title: 'Buying Committee Mapping',
                  desc: 'Automatically identify and track all 6-10 stakeholders per enterprise deal without manual research.',
                  icon: Users,
                  tag: '6-10 Stakeholders'
                },
                {
                  title: 'Purchase Readiness Scoring',
                  desc: 'Neural scoring that predicts exact timing of purchase decision and budget commitment.',
                  icon: Target,
                  tag: 'Neural Scoring'
                }
              ].map((cap, i) => {
                const CapIcon = cap.icon;
                return (
                  <div
                    key={i}
                    className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-blue-400 hover:shadow-lg transition-all duration-200 relative group overflow-hidden"
                  >
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-9 h-9 rounded-xl bg-blue-50 border border-blue-100 text-blue-600 flex items-center justify-center">
                        <CapIcon className="w-4 h-4" />
                      </div>
                      <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-slate-100 text-slate-600 border border-slate-200/60">
                        {cap.tag}
                      </span>
                    </div>
                    <h3 className="text-base font-bold text-slate-900 mb-2 font-heading">{cap.title}</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">{cap.desc}</p>
                  </div>
                );
              })}
            </div>

          </div>
        </div>
      </section>

      {/* ── SUB-SECTION 2: ACCOUNT INTELLIGENCE ── */}
      <section id="account" className="py-20 sm:py-24 border-b border-slate-200 bg-slate-50/60 scroll-mt-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            <div className="lg:col-span-5">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-200 font-mono text-xs font-bold uppercase tracking-widest mb-5">
                <Target className="w-3.5 h-3.5" />
                <span>ACCOUNT INTELLIGENCE</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading mb-4">
                Prioritize High-Yield Accounts with Mathematical Precision
              </h2>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-6">
                Transform raw account data into actionable revenue opportunity profiles.
              </p>

              {/* Metric Card */}
              <div className="rounded-2xl bg-white border border-slate-200 p-6 mb-6 shadow-xs">
                <div className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider mb-1">
                  Validated Performance Benchmark
                </div>
                <div className="text-3xl sm:text-4xl font-extrabold font-mono text-indigo-600">
                  2.5X
                </div>
                <div className="text-sm font-semibold text-slate-700 mt-1">
                  Pipeline growth from re-prioritized target accounts
                </div>
              </div>

              {/* Common Situation Quote */}
              <div className="rounded-2xl bg-white border border-slate-200 p-5 shadow-xs">
                <div className="text-xs font-mono font-bold text-slate-500 uppercase tracking-widest mb-2 flex items-center gap-1.5">
                  <AlertCircle className="w-3.5 h-3.5 text-indigo-600" />
                  <span>Common Situation</span>
                </div>
                <p className="text-sm text-slate-700 font-medium italic">
                  "Reps were spending 70% of time on low-propensity accounts"
                </p>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  title: 'Target Account Discovery',
                  desc: 'AI identifies high-propensity accounts from total addressable market with live budget fit.',
                  icon: Search,
                  tag: 'TAM Dissection'
                },
                {
                  title: 'Account Prioritization',
                  desc: 'Dynamic ranking based on real-time fit, intent, and timing signals refreshed continuously.',
                  icon: BarChart3,
                  tag: 'Dynamic Ranking'
                },
                {
                  title: 'Revenue Potential Analysis',
                  desc: 'Calculate true lifetime value and expansion opportunity per account before allocating sales reps.',
                  icon: PieChart,
                  tag: 'True LTV Ceiling'
                },
                {
                  title: 'Account Expansion Opportunities',
                  desc: 'Identify white space within existing customer base to expand contract sizes before renewal.',
                  icon: Sparkles,
                  tag: 'White Space Growth'
                }
              ].map((cap, i) => {
                const CapIcon = cap.icon;
                return (
                  <div
                    key={i}
                    className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-indigo-400 hover:shadow-lg transition-all duration-200 relative group overflow-hidden"
                  >
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-9 h-9 rounded-xl bg-indigo-50 border border-indigo-100 text-indigo-600 flex items-center justify-center">
                        <CapIcon className="w-4 h-4" />
                      </div>
                      <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-slate-100 text-slate-600 border border-slate-200/60">
                        {cap.tag}
                      </span>
                    </div>
                    <h3 className="text-base font-bold text-slate-900 mb-2 font-heading">{cap.title}</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">{cap.desc}</p>
                  </div>
                );
              })}
            </div>

          </div>
        </div>
      </section>

      {/* ── SUB-SECTION 3: MARKET INTELLIGENCE ── */}
      <section id="market" className="py-20 sm:py-24 border-b border-slate-200 bg-white scroll-mt-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            <div className="lg:col-span-5">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 font-mono text-xs font-bold uppercase tracking-widest mb-5">
                <PieChart className="w-3.5 h-3.5" />
                <span>MARKET INTELLIGENCE</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading mb-4">
                Capture High-Margin Micro-Segments
              </h2>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-6">
                Map the total revenue opportunity and identify emerging growth signals before they become obvious.
              </p>

              {/* Metric Card */}
              <div className="rounded-2xl bg-slate-50 border border-slate-200 p-6 mb-6">
                <div className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider mb-1">
                  Validated Performance Benchmark
                </div>
                <div className="text-3xl sm:text-4xl font-extrabold font-mono text-emerald-600">
                  15-20%
                </div>
                <div className="text-sm font-semibold text-slate-700 mt-1">
                  Margin recovery through white-space micro-segment targeting
                </div>
              </div>

              {/* Common Situation Quote */}
              <div className="rounded-2xl bg-slate-50 border border-slate-200 p-5">
                <div className="text-xs font-mono font-bold text-slate-500 uppercase tracking-widest mb-2 flex items-center gap-1.5">
                  <AlertCircle className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Common Situation</span>
                </div>
                <p className="text-sm text-slate-700 font-medium italic">
                  "We sized the market at $2B but didn't know which $400M micro-segment had 32% margin"
                </p>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  title: 'Market Opportunity Discovery',
                  desc: 'Quantify total addressable market by micro-segment with unit economics and localized CAC models.',
                  icon: Search,
                  tag: 'Unit Economics'
                },
                {
                  title: 'Profit Pool Analysis',
                  desc: 'Identify where contribution margin concentrates, not just where vanity volume is highest.',
                  icon: BarChart3,
                  tag: 'Margin Focus'
                },
                {
                  title: 'White Space Identification',
                  desc: 'Find underserved segments competitors have missed and command high pricing power.',
                  icon: Sparkles,
                  tag: 'Underserved Niche'
                },
                {
                  title: 'Emerging Growth Signals',
                  desc: 'Detect category shifts, regulatory changes, and sudden demand surges ahead of the market.',
                  icon: Activity,
                  tag: 'Surge Warning'
                }
              ].map((cap, i) => {
                const CapIcon = cap.icon;
                return (
                  <div
                    key={i}
                    className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-emerald-400 hover:shadow-lg transition-all duration-200 relative group overflow-hidden"
                  >
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-600 to-teal-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-9 h-9 rounded-xl bg-emerald-50 border border-emerald-100 text-emerald-600 flex items-center justify-center">
                        <CapIcon className="w-4 h-4" />
                      </div>
                      <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-slate-100 text-slate-600 border border-slate-200/60">
                        {cap.tag}
                      </span>
                    </div>
                    <h3 className="text-base font-bold text-slate-900 mb-2 font-heading">{cap.title}</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">{cap.desc}</p>
                  </div>
                );
              })}
            </div>

          </div>
        </div>
      </section>

      {/* ── SUB-SECTION 4: COMPETITIVE INTELLIGENCE ── */}
      <section id="competitive" className="py-20 sm:py-24 border-b border-slate-200 bg-slate-50/60 scroll-mt-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            <div className="lg:col-span-5">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-violet-50 text-violet-700 border border-violet-200 font-mono text-xs font-bold uppercase tracking-widest mb-5">
                <Shield className="w-3.5 h-3.5" />
                <span>COMPETITIVE INTELLIGENCE</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading mb-4">
                Counter Rival Moves Before Deals Stall
              </h2>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-6">
                Real-time monitoring of rival moves with automated counter-strategy deployment.
              </p>

              {/* Metric Card */}
              <div className="rounded-2xl bg-white border border-slate-200 p-6 mb-6 shadow-xs">
                <div className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider mb-1">
                  Validated Performance Benchmark
                </div>
                <div className="text-3xl sm:text-4xl font-extrabold font-mono text-violet-600">
                  &lt;10 Days
                </div>
                <div className="text-sm font-semibold text-slate-700 mt-1">
                  Detection time for competitor pricing/messaging shifts
                </div>
              </div>

              {/* Common Situation Quote */}
              <div className="rounded-2xl bg-white border border-slate-200 p-5 shadow-xs">
                <div className="text-xs font-mono font-bold text-slate-500 uppercase tracking-widest mb-2 flex items-center gap-1.5">
                  <AlertCircle className="w-3.5 h-3.5 text-violet-600" />
                  <span>Common Situation</span>
                </div>
                <p className="text-sm text-slate-700 font-medium italic">
                  "We found out about their pricing change from a lost deal in CRM notes"
                </p>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  title: 'Competitor Monitoring',
                  desc: '24/7 tracking of pricing, messaging, product launches, hiring, funding, and collateral shifts.',
                  icon: Eye,
                  tag: '24/7 Tracking'
                },
                {
                  title: 'Win/Loss Analysis',
                  desc: 'Automated interview scheduling, transcription, and pattern extraction to surface rival weaknesses.',
                  icon: BarChart3,
                  tag: 'Pattern Extraction'
                },
                {
                  title: 'Competitive Positioning',
                  desc: 'Dynamic positioning battlecards that adapt to market shifts in real time during active sales cycles.',
                  icon: Shield,
                  tag: 'Live Battlecards'
                },
                {
                  title: 'Market Share Insights',
                  desc: 'Predictive modeling of market share shifts before they appear in retrospective analyst reports.',
                  icon: TrendingUp,
                  tag: 'Predictive Shifts'
                }
              ].map((cap, i) => {
                const CapIcon = cap.icon;
                return (
                  <div
                    key={i}
                    className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-violet-400 hover:shadow-lg transition-all duration-200 relative group overflow-hidden"
                  >
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-violet-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-9 h-9 rounded-xl bg-violet-50 border border-violet-100 text-violet-600 flex items-center justify-center">
                        <CapIcon className="w-4 h-4" />
                      </div>
                      <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-slate-100 text-slate-600 border border-slate-200/60">
                        {cap.tag}
                      </span>
                    </div>
                    <h3 className="text-base font-bold text-slate-900 mb-2 font-heading">{cap.title}</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">{cap.desc}</p>
                  </div>
                );
              })}
            </div>

          </div>
        </div>
      </section>

      {/* ── SECTION 5: VERIFIED OUTCOMES GRID ── */}
      <section id="outcomes" className="py-20 sm:py-24 border-b border-slate-200 bg-white scroll-mt-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-200 font-mono text-xs font-bold uppercase tracking-widest mb-3">
              <span>QUANTIFIED REVENUE PERFORMANCE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading">
              Verified Revenue Intelligence Outcomes
            </h2>
            <p className="text-base sm:text-lg text-slate-600 mt-3 font-normal">
              Empirical metrics measured across active Fortune 500 and high-growth enterprise implementations.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {outcomes.map((item, idx) => (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-slate-50/70 border border-slate-200/90 hover:border-blue-400 hover:shadow-xl hover:bg-white transition-all duration-300 relative group overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="text-4xl sm:text-5xl font-extrabold font-mono text-slate-900 mb-3 tracking-tight">
                  {item.value}
                </div>
                <div className="text-base font-bold text-slate-900 mb-2 font-heading">
                  {item.label}
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 6: RELATED CAPABILITIES (3 CROSS-LINKS) ── */}
      
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
              Every Revenue Intelligence capability is governed by rigorous mathematical benchmarks. Below are the definitive KPIs, formulas, and operational rationales that determine success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-blue-400 hover:shadow-xs transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-50 text-blue-700 font-bold uppercase tracking-wider">
                    Leading Metric
                  </span>
                  <span className="text-xs font-mono text-slate-500 font-bold">&gt;65% Account Engagement</span>
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2 font-heading">Target Account Engagement Rate</h3>
                <div className="text-xs font-mono bg-slate-50 text-slate-700 p-2.5 rounded-lg border border-slate-200/80 mb-3">
                  <span className="text-slate-400 font-bold block mb-0.5">Formula:</span> (Active Engaged Accounts / Total Monitored Target Accounts) × 100
                </div>
                <p className="text-xs text-slate-600 leading-relaxed mb-3">Percentage of strategic named enterprise accounts demonstrating active digital interaction with firm materials.</p>
              </div>
              <div className="pt-3 border-t border-slate-100 text-[11px] text-slate-500">
                <span className="font-bold text-slate-800">Why it matters:</span> Validates that marketing and sales messaging penetrates priority enterprise buying committees effectively.
              </div>
            </div>
            <div className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-blue-400 hover:shadow-xs transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-50 text-blue-700 font-bold uppercase tracking-wider">
                    Precision Metric
                  </span>
                  <span className="text-xs font-mono text-slate-500 font-bold">Top Decile Intent Focus</span>
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2 font-heading">Propensity Qualified Account Rate</h3>
                <div className="text-xs font-mono bg-slate-50 text-slate-700 p-2.5 rounded-lg border border-slate-200/80 mb-3">
                  <span className="text-slate-400 font-bold block mb-0.5">Formula:</span> (Accounts Surpassing Intent Threshold / Total Ingested Accounts) × 100
                </div>
                <p className="text-xs text-slate-600 leading-relaxed mb-3">Proportion of market accounts exhibiting verified dark-funnel surge behaviors and active technology evaluation.</p>
              </div>
              <div className="pt-3 border-t border-slate-100 text-[11px] text-slate-500">
                <span className="font-bold text-slate-800">Why it matters:</span> Prevents commercial teams from wasting expensive outreach capacity on cold accounts not currently in-market.
              </div>
            </div>
            <div className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-blue-400 hover:shadow-xs transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-50 text-blue-700 font-bold uppercase tracking-wider">
                    Conversion Metric
                  </span>
                  <span className="text-xs font-mono text-slate-500 font-bold">&gt;30% Conversion Lift</span>
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2 font-heading">Opportunity Creation Rate</h3>
                <div className="text-xs font-mono bg-slate-50 text-slate-700 p-2.5 rounded-lg border border-slate-200/80 mb-3">
                  <span className="text-slate-400 font-bold block mb-0.5">Formula:</span> (High-Propensity Accounts Advanced to Pipeline / Engaged Accounts) × 100
                </div>
                <p className="text-xs text-slate-600 leading-relaxed mb-3">Efficiency with which intelligence signals convert into formal sales opportunities within 60 days.</p>
              </div>
              <div className="pt-3 border-t border-slate-100 text-[11px] text-slate-500">
                <span className="font-bold text-slate-800">Why it matters:</span> Direct multiplier on outbound ROI; verifies that intelligence feeds translate into revenue opportunities.
              </div>
            </div>
            <div className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-blue-400 hover:shadow-xs transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-50 text-blue-700 font-bold uppercase tracking-wider">
                    Velocity Metric
                  </span>
                  <span className="text-xs font-mono text-slate-500 font-bold">&gt;40% Against Named Rivals</span>
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2 font-heading">Competitive Displacement Win Rate</h3>
                <div className="text-xs font-mono bg-slate-50 text-slate-700 p-2.5 rounded-lg border border-slate-200/80 mb-3">
                  <span className="text-slate-400 font-bold block mb-0.5">Formula:</span> (Opportunities Won Where Competitor Displaced / Total Contested Deals) × 100
                </div>
                <p className="text-xs text-slate-600 leading-relaxed mb-3">Win rate achieved in accounts actively evaluating or replacing legacy competitor technology.</p>
              </div>
              <div className="pt-3 border-t border-slate-100 text-[11px] text-slate-500">
                <span className="font-bold text-slate-800">Why it matters:</span> Proves the defensibility of the product narrative when head-to-head objection handling is required.
              </div>
            </div>
            <div className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-blue-400 hover:shadow-xs transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-50 text-blue-700 font-bold uppercase tracking-wider">
                    Productivity Metric
                  </span>
                  <span className="text-xs font-mono text-slate-500 font-bold">&lt;5 Minutes per Dossier</span>
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2 font-heading">Account Research Velocity</h3>
                <div className="text-xs font-mono bg-slate-50 text-slate-700 p-2.5 rounded-lg border border-slate-200/80 mb-3">
                  <span className="text-slate-400 font-bold block mb-0.5">Formula:</span> Average Clock Time Required to Synthesize 360-Degree Account Buying Dossier
                </div>
                <p className="text-xs text-slate-600 leading-relaxed mb-3">Speed of extracting executive priorities, technology footprints, and hiring signals for target accounts.</p>
              </div>
              <div className="pt-3 border-t border-slate-100 text-[11px] text-slate-500">
                <span className="font-bold text-slate-800">Why it matters:</span> Saves 5-8 hours per week per rep, allowing account executives to focus on active commercial conversations.
              </div>
            </div>
            <div className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-blue-400 hover:shadow-xs transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-50 text-blue-700 font-bold uppercase tracking-wider">
                    Accuracy Metric
                  </span>
                  <span className="text-xs font-mono text-slate-500 font-bold">&gt;85% Validated Signals</span>
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2 font-heading">Intent Signal Predictive Precision</h3>
                <div className="text-xs font-mono bg-slate-50 text-slate-700 p-2.5 rounded-lg border border-slate-200/80 mb-3">
                  <span className="text-slate-400 font-bold block mb-0.5">Formula:</span> (Surge Signals Verified by Active Commercial RFP or Project / Total Signals) × 100
                </div>
                <p className="text-xs text-slate-600 leading-relaxed mb-3">Statistical correlation between automated intent surge detection and active enterprise procurement.</p>
              </div>
              <div className="pt-3 border-t border-slate-100 text-[11px] text-slate-500">
                <span className="font-bold text-slate-800">Why it matters:</span> Ensures sales teams trust the intelligence radar and act with conviction on emerging demand signals.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="related" className="py-20 sm:py-24 border-b border-slate-200 bg-slate-50/60 scroll-mt-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-200 font-mono text-xs font-bold uppercase tracking-widest mb-3">
                <span>INTERCONNECTED TELEMETRY</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading">
                Intelligence Powers Every Other Capability
              </h2>
            </div>
            <p className="text-sm text-slate-600 max-w-md mt-3 md:mt-0 font-normal">
              Signals decoded in Revenue Intelligence flow continuously into downstream prospecting, sales execution, and operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Cross-Link 1: AI Prospecting */}
            <Link
              to="/ai-native-sales/prospecting"
              className="p-8 rounded-3xl bg-white border border-slate-200/90 hover:border-blue-500 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div>
                <span className="text-[11px] font-mono font-bold text-blue-700 bg-blue-50 px-2.5 py-1 rounded-lg border border-blue-200 mb-4 inline-block">
                  Uses Intent Data
                </span>
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors font-heading mb-3">
                  AI Prospecting & Pipeline →
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Real-time purchase readiness and account signals directly trigger hyper-personalized outreach sequences and meeting booking.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-slate-100 text-xs font-mono font-bold text-blue-600 flex items-center justify-between">
                <span>Explore AI Prospecting</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            {/* Cross-Link 2: AI Sales Execution */}
            <Link
              to="/ai-native-sales/sales-execution"
              className="p-8 rounded-3xl bg-white border border-slate-200/90 hover:border-indigo-500 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div>
                <span className="text-[11px] font-mono font-bold text-indigo-700 bg-indigo-50 px-2.5 py-1 rounded-lg border border-indigo-200 mb-4 inline-block">
                  Uses Competitive Intel
                </span>
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-indigo-600 transition-colors font-heading mb-3">
                  AI Sales Execution →
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Competitor moves and deal-risk flags stream live into proposal generation, in-call battlecards, and dynamic pricing gates.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-slate-100 text-xs font-mono font-bold text-indigo-600 flex items-center justify-between">
                <span>Explore Sales Execution</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            {/* Cross-Link 3: AI Revenue Operations */}
            <Link
              to="/ai-native-sales/revops"
              className="p-8 rounded-3xl bg-white border border-slate-200/90 hover:border-emerald-500 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-600 to-teal-600 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div>
                <span className="text-[11px] font-mono font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-lg border border-emerald-200 mb-4 inline-block">
                  Uses Market Data
                </span>
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-emerald-600 transition-colors font-heading mb-3">
                  AI Revenue Operations →
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Micro-segment unit economics and buying stage velocity calculate predictive quarterly forecasts within 5% variance.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-slate-100 text-xs font-mono font-bold text-emerald-600 flex items-center justify-between">
                <span>Explore Revenue Operations</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* ── SECTION 7: FINAL CTA & INTAKE FORM ── */}
      <section id="audit" className="py-20 sm:py-28 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/15 border border-blue-400/30 text-blue-300 font-mono text-xs font-bold uppercase tracking-widest mb-4">
            <Radar className="w-3.5 h-3.5 text-blue-400" />
            <span>CONFIDENTIAL REVENUE INTELLIGENCE AUDIT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-heading mb-4">
            Ready to See Every Signal Before Your Competitors?
          </h2>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto font-normal">
            Request a confidential Revenue Intelligence diagnostic. We will map your existing CRM and signal sources against our 4-quadrant radar.
          </p>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AiSalesIntakeForm
            pageContext="Revenue Intelligence Audit"
            defaultService="Revenue Intelligence Diagnostic"
          />
        </div>
      </section>
    </div>
  );
}
