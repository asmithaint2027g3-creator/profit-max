import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight, ChevronRight, TrendingUp, Zap, BarChart3,
  Layers, Activity, Target, CheckCircle2, AlertCircle,
  HelpCircle, ChevronDown, Cpu, Radar, Clock, Shield,
  Sparkles, DollarSign, LineChart, Network, Sliders, Scale,
  ShieldCheck, Compass, Users, Check
} from 'lucide-react';
import { AiSalesIntakeForm } from '../../components/forms/AiSalesIntakeForm';
import { allGrowthCapabilities } from './data';

const capabilityList = [
  {
    num: '01',
    title: 'Revenue Physics',
    slug: 'revenue-physics',
    path: '/growth-science/revenue-physics',
    headline: 'Revenue Mechanics & Modeling',
    desc: 'Understand the mathematical laws governing revenue behavior: driver mapping, parametric revenue equations, cohort dynamics, and white-space profit pools.',
    icon: Activity,
    kpi: '$14.2K/Day',
    kpiLabel: 'Sales Velocity Index',
    submenus: ['Revenue Architecture', 'Customer Economics', 'Unit Economics', 'White Space Intelligence']
  },
  {
    num: '02',
    title: 'Revenue Intelligence',
    slug: 'revenue-intelligence',
    path: '/growth-science/revenue-intelligence',
    headline: 'Signals & Decision Intelligence',
    desc: 'Transform raw market intent, account telemetry, competitor moves, and pipeline data into deterministic commercial decision intelligence.',
    icon: LineChart,
    kpi: '96.4%',
    kpiLabel: 'Forecast Precision',
    submenus: ['Revenue Signal Intelligence', 'Market Intelligence', 'Customer Intelligence', 'Revenue Forecast Intelligence']
  },
  {
    num: '03',
    title: 'Revenue Potential Discovery',
    slug: 'revenue-potential-discovery',
    path: '/growth-science/revenue-potential-discovery',
    headline: 'Opportunity Exploration',
    desc: 'Systematically discover unharvested economic headroom across installed accounts, latent product capabilities, unserved market segments, and AI revenue lines.',
    icon: Compass,
    kpi: '+38.2%',
    kpiLabel: 'Expansion ARR Growth',
    submenus: ['Existing Customer Growth', 'Product Revenue Potential', 'Market Revenue Potential', 'AI Revenue Potential']
  },
  {
    num: '04',
    title: 'Revenue Leakage & Recovery',
    slug: 'revenue-leakage-recovery',
    path: '/growth-science/revenue-leakage-recovery',
    headline: 'Forensic Loss Diagnosis',
    desc: 'Diagnose and claw back invisible revenue loss across funnel bottlenecks, rogue discounting, contract entitlement slippage, and silent customer churn.',
    icon: Radar,
    kpi: '< 6.0%',
    kpiLabel: 'Leakage Rate Ceiling',
    submenus: ['Funnel Leakage Analysis', 'Commercial Leakage', 'Customer Leakage', 'Revenue Recovery Programs']
  },
  {
    num: '05',
    title: 'Revenue Bundling & Offer Engineering',
    slug: 'revenue-bundling-offer-engineering',
    path: '/growth-science/revenue-bundling-offer-engineering',
    headline: 'Offer Architecture & Packaging',
    desc: 'Engineer high-converting commercial solution bundles, subscription tiers, and value-based packaging that increase contract magnitude and protect gross margins.',
    icon: Layers,
    kpi: '$56.2K',
    kpiLabel: 'Average Revenue / Account',
    submenus: ['Product Bundling Science', 'Commercial Packaging', 'Revenue Expansion Models']
  },
  {
    num: '06',
    title: 'Value Capture Engineering',
    slug: 'value-capture-engineering',
    path: '/growth-science/value-capture-engineering',
    headline: 'Pricing & Profitability',
    desc: 'Capture fair economic return for the value your business creates. Enforce concession trade-offs, optimize proposals, and dominate high-margin profit pools.',
    icon: DollarSign,
    kpi: '83.5%',
    kpiLabel: 'Gross Margin Realization',
    submenus: ['Pricing Science', 'Commercial Optimization', 'Profit Pool Capture']
  },
  {
    num: '07',
    title: 'Product Innovation & Revenue Expansion',
    slug: 'product-innovation-revenue-expansion',
    path: '/growth-science/product-innovation-revenue-expansion',
    headline: 'Innovation to Monetization',
    desc: 'Convert customer research and R&D engineering into scalable software revenue. Transform bespoke consulting services into high-margin recurring SaaS.',
    icon: Sparkles,
    kpi: '68 Days',
    kpiLabel: 'Time to First Revenue',
    submenus: ['Product Innovation Intelligence', 'New Revenue Models', 'Growth Productization']
  },
  {
    num: '08',
    title: 'Revenue Acceleration',
    slug: 'revenue-acceleration',
    path: '/growth-science/revenue-acceleration',
    headline: 'Sales Execution & Workflows',
    desc: 'Deploy AI sales engines, autonomous growth orchestration, and real-time deal risk coaching to compress sales cycles and multiply rep productivity.',
    icon: Zap,
    kpi: '62 Days',
    kpiLabel: 'Median Sales Cycle',
    submenus: ['AI Sales Engines', 'Growth Automation', 'Opportunity Acceleration']
  },
  {
    num: '09',
    title: 'Executive Revenue Command Center',
    slug: 'executive-revenue-command-center',
    path: '/growth-science/executive-revenue-command-center',
    headline: 'Executive Decision Cockpit',
    desc: 'Unify commercial telemetry, stochastic board forecast scenarios, margin health indexes, and proactive leakage alarms into an executive command HUD.',
    icon: Cpu,
    kpi: '97.4%',
    kpiLabel: 'Boardroom Precision',
    submenus: ['Growth Command Center', 'Board Intelligence', 'Growth Telemetry']
  }
];

const diagnosticChallenges = [
  {
    id: 'velocity',
    label: 'Slow Sales Velocity & Lengthening Cycles',
    symptom: 'Deals taking 120+ days to close; rep capacity is consumed by administrative CRM tasks.',
    recommendedPage: 'Revenue Acceleration',
    recommendedPath: '/growth-science/revenue-acceleration',
    icon: Zap
  },
  {
    id: 'forecast',
    label: 'Forecast Volatility & End-of-Quarter Slip',
    symptom: 'Subjective rep rollups miss quarterly revenue projections by >15%; no deterministic signals.',
    recommendedPage: 'Revenue Intelligence',
    recommendedPath: '/growth-science/revenue-intelligence',
    icon: LineChart
  },
  {
    id: 'margin',
    label: 'Margin Erosion & Rogue Discounting',
    symptom: 'Sales reps granting 25-40% discounts to close deals; gross margin compressed below 65%.',
    recommendedPage: 'Value Capture Engineering',
    recommendedPath: '/growth-science/value-capture-engineering',
    icon: DollarSign
  },
  {
    id: 'leakage',
    label: 'Silent Funnel & Churn Leakage',
    symptom: 'Qualified leads stall without follow-up, and legacy clients quietly churn at contract renewal.',
    recommendedPage: 'Revenue Leakage & Recovery',
    recommendedPath: '/growth-science/revenue-leakage-recovery',
    icon: Radar
  },
  {
    id: 'stagnation',
    label: 'Installed Base & Expansion Stagnation',
    symptom: 'Existing clients remain on single point-solutions; secondary modules have <10% attach rates.',
    recommendedPage: 'Revenue Potential Discovery',
    recommendedPath: '/growth-science/revenue-potential-discovery',
    icon: Compass
  }
];

export default function GrowthScienceHub() {
  const [selectedChallenge, setSelectedChallenge] = useState<string>(diagnosticChallenges[0].id);

  useEffect(() => {
    document.title = 'Growth Science: AI-Native Revenue Transformation Platform | ProfitMachines';
    window.scrollTo(0, 0);
  }, []);

  const activeChallengeData = diagnosticChallenges.find(c => c.id === selectedChallenge) || diagnosticChallenges[0];

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-100 selection:text-blue-900">

      {/* ── STICKY HUB SUB-NAV BAR ── */}
      <nav aria-label="Page Sub Navigation" className="sticky top-16 z-30 bg-slate-900/95 backdrop-blur-md border-b border-slate-800 text-white text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-11 flex items-center justify-between gap-4 overflow-x-auto no-scrollbar">
          <div className="flex items-center gap-2.5 shrink-0">
            <span className="font-mono text-blue-400 font-bold">REVENUE OS</span>
            <span className="font-bold text-slate-200">Growth Science</span>
            <span className="hidden sm:inline text-slate-500">|</span>
            <span className="hidden sm:inline text-slate-400 font-medium">9 Core Capabilities</span>
          </div>

          <div className="flex items-center gap-4 shrink-0 text-slate-300 font-medium">
            <a href="#overview" className="hover:text-blue-400 transition-colors">Overview</a>
            <a href="#architecture" className="hover:text-blue-400 transition-colors">Growth System</a>
            <a href="#diagnostic" className="hover:text-blue-400 text-blue-400 font-bold transition-colors">Diagnostic Entry</a>
            <a href="#capabilities" className="hover:text-blue-400 transition-colors">Capabilities (9)</a>
            <a href="#kpis" className="hover:text-blue-400 transition-colors">KPI Overview</a>
            <a href="#consultation" className="px-2.5 py-1 rounded bg-blue-600 hover:bg-blue-500 text-white font-bold transition-colors">Briefing</a>
          </div>
        </div>
      </nav>

      {/* ── HERO SECTION: SPLIT EXECUTIVE LAYOUT ── */}
      <section id="overview" className="relative pt-12 pb-16 sm:pt-20 sm:pb-24 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute inset-0 opacity-[0.20]" style={{ backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.07) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.07) 1px, transparent 1px)', backgroundSize: '4rem 4rem' }} />
          <div className="absolute -top-40 right-1/4 w-[600px] h-[600px] bg-blue-600/15 rounded-full blur-[140px]" />
          <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-indigo-600/12 rounded-full blur-[130px]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Hero Content */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/15 border border-blue-400/30 text-blue-300 text-xs font-bold tracking-widest uppercase font-mono mb-4">
                <Sparkles className="w-3.5 h-3.5 text-blue-400" />
                <span>AI-NATIVE REVENUE TRANSFORMATION PLATFORM</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1] mb-6 font-heading">
                Growth Science:{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-indigo-300">
                  The Empirical Architecture of Profitable Scale
                </span>
              </h1>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8">
                Move past subjective sales forecasting and fragmented GTM silos. ProfitMachines Growth Science deconstructs enterprise revenue into deterministic mathematical equations, connects buyer signals to commercial execution, and captures high-margin economic value.
              </p>

              {/* 3 Core System Pillars Summary */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
                <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 text-xs space-y-1">
                  <span className="font-mono text-blue-400 font-bold block uppercase">01. Physics</span>
                  <span className="text-slate-300">Deterministic modeling of drivers, CAC, and cohorts</span>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 text-xs space-y-1">
                  <span className="font-mono text-sky-400 font-bold block uppercase">02. Execution</span>
                  <span className="text-slate-300">AI sales engines & autonomous multi-channel acceleration</span>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 text-xs space-y-1">
                  <span className="font-mono text-emerald-400 font-bold block uppercase">03. Governance</span>
                  <span className="text-slate-300">Real-time C-suite telemetry & stochastic board forecasting</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="#capabilities"
                  className="px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 active:bg-blue-700 text-white font-bold text-sm transition-all shadow-lg shadow-blue-600/30 inline-flex items-center gap-2 group cursor-pointer"
                >
                  <span>Explore 9 Capabilities</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </a>

                <a
                  href="#diagnostic"
                  className="px-6 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-200 font-bold text-sm transition-all inline-flex items-center gap-2"
                >
                  <Radar className="w-4 h-4 text-blue-400" />
                  <span>Start Friction Diagnostic</span>
                </a>
              </div>
            </div>

            {/* Right Hero Visual: Connected Revenue Growth System SVG Diagram */}
            <div className="lg:col-span-5">
              <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/90 border border-slate-800 shadow-2xl relative overflow-hidden">
                <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-6">
                  <div className="text-xs font-mono font-bold text-slate-300 uppercase flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Revenue Transformation System</span>
                  </div>
                  <span className="text-[11px] font-mono text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded border border-blue-500/20">
                    9 Connected Nodes
                  </span>
                </div>

                {/* System Architecture Topology Model */}
                <div className="space-y-3">
                  <div className="p-3.5 rounded-xl bg-slate-950 border border-blue-900/40 flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <Activity className="w-4 h-4 text-blue-400" />
                      <span className="text-xs font-bold text-white">01. Revenue Physics</span>
                    </div>
                    <span className="text-[10px] font-mono text-blue-400">Driver & Cohort Models</span>
                  </div>

                  <div className="grid grid-cols-2 gap-2.5">
                    <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800">
                      <div className="text-[10px] font-mono text-slate-400">02. Intelligence</div>
                      <div className="text-xs font-bold text-slate-200 mt-0.5">Intent Signals</div>
                    </div>
                    <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800">
                      <div className="text-[10px] font-mono text-slate-400">03. Discovery</div>
                      <div className="text-xs font-bold text-slate-200 mt-0.5">Latent Headroom</div>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-950 border border-rose-900/30 flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <Radar className="w-4 h-4 text-rose-400" />
                      <span className="text-xs font-bold text-white">04. Leakage & Recovery</span>
                    </div>
                    <span className="text-[10px] font-mono text-rose-400">Forensic Margin Clawback</span>
                  </div>

                  <div className="grid grid-cols-2 gap-2.5">
                    <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800">
                      <div className="text-[10px] font-mono text-slate-400">05. Bundling</div>
                      <div className="text-xs font-bold text-slate-200 mt-0.5">AOV Architecture</div>
                    </div>
                    <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800">
                      <div className="text-[10px] font-mono text-slate-400">06. Value Capture</div>
                      <div className="text-xs font-bold text-slate-200 mt-0.5">Profit Pools</div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2.5">
                    <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800">
                      <div className="text-[10px] font-mono text-slate-400">07. Innovation</div>
                      <div className="text-xs font-bold text-slate-200 mt-0.5">Productization</div>
                    </div>
                    <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800">
                      <div className="text-[10px] font-mono text-slate-400">08. Acceleration</div>
                      <div className="text-xs font-bold text-slate-200 mt-0.5">AI Sales Engines</div>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-gradient-to-r from-blue-950/80 to-indigo-950/80 border border-blue-800/40 flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <Cpu className="w-4 h-4 text-sky-400" />
                      <span className="text-xs font-bold text-white">09. Executive Command Center</span>
                    </div>
                    <span className="text-[10px] font-mono text-emerald-400">C-Suite Telemetry</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── SECTION 02: CENTRAL GROWTH SYSTEM ARCHITECTURE ── */}
      <section id="architecture" className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <div className="text-xs font-mono font-bold text-blue-600 uppercase tracking-widest mb-2">
              Systematic Methodology
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight font-heading">
              The 5-Stage Growth Science Transformation Journey
            </h2>
            <p className="mt-3 text-base text-slate-600 leading-relaxed">
              How enterprise organizations transition from uncalibrated commercial guesswork into deterministic, high-compounding revenue engines.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
              <span className="text-xs font-mono font-bold text-blue-600">STAGE 01</span>
              <h3 className="text-base font-bold text-slate-900">Diagnosis & Physics</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Deconstruct parametric revenue equations, audit cohort survival curves, and quantify the true cost to serve across all customer segments.
              </p>
              <div className="text-[11px] font-mono text-slate-400">Capabilities: 01, 04</div>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
              <span className="text-xs font-mono font-bold text-blue-600">STAGE 02</span>
              <h3 className="text-base font-bold text-slate-900">Intelligence & Sensing</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Capture live buying intent signals, competitor discount patterns, customer usage inflections, and predictive churn indicators.
              </p>
              <div className="text-[11px] font-mono text-slate-400">Capabilities: 02, 03</div>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
              <span className="text-xs font-mono font-bold text-blue-600">STAGE 03</span>
              <h3 className="text-base font-bold text-slate-900">Offer Architecture</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Package high-converting solution bundles, enforce value-based price realization, and eliminate rogue discounting.
              </p>
              <div className="text-[11px] font-mono text-slate-400">Capabilities: 05, 06</div>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
              <span className="text-xs font-mono font-bold text-blue-600">STAGE 04</span>
              <h3 className="text-base font-bold text-slate-900">Execution Velocity</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Deploy AI sales engines, multi-threaded committee mapping, and trigger-driven growth workflows to compress sales cycles.
              </p>
              <div className="text-[11px] font-mono text-slate-400">Capabilities: 07, 08</div>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
              <span className="text-xs font-mono font-bold text-blue-600">STAGE 05</span>
              <h3 className="text-base font-bold text-slate-900">Executive Governance</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Unify real-time telemetry, automated leakage alarms, and stochastic board scenario models into a single executive command HUD.
              </p>
              <div className="text-[11px] font-mono text-slate-400">Capabilities: 09</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 03: BUSINESS CHALLENGE SELECTOR & DIAGNOSTIC ENTRY POINT ── */}
      <section id="diagnostic" className="py-16 sm:py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <div className="text-xs font-mono font-bold text-rose-600 uppercase tracking-widest mb-2">
              Executive Diagnostic Navigator
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-heading">
              Where Is Your Commercial Model Breaking Down?
            </h2>
            <p className="mt-3 text-base text-slate-600 leading-relaxed">
              Select your primary commercial symptom to discover the underlying mathematical failure point and inspect the recommended growth capability.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Challenge Buttons */}
            <div className="lg:col-span-5 space-y-2.5">
              {diagnosticChallenges.map((ch) => {
                const Icon = ch.icon;
                const isSelected = selectedChallenge === ch.id;
                return (
                  <button
                    key={ch.id}
                    onClick={() => setSelectedChallenge(ch.id)}
                    className={`w-full text-left p-4 rounded-2xl border transition-all flex items-center justify-between gap-3 ${
                      isSelected
                        ? 'bg-blue-600 text-white border-blue-600 shadow-lg shadow-blue-600/20'
                        : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <Icon className={`w-5 h-5 ${isSelected ? 'text-white' : 'text-blue-600'}`} />
                      <span className="text-xs sm:text-sm font-bold">{ch.label}</span>
                    </div>
                    <ChevronRight className={`w-4 h-4 shrink-0 ${isSelected ? 'text-white' : 'text-slate-400'}`} />
                  </button>
                );
              })}
            </div>

            {/* Diagnostic Result Card */}
            <div className="lg:col-span-7 p-6 sm:p-8 rounded-3xl bg-slate-900 text-white border border-slate-800 shadow-xl space-y-6">
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <span className="text-xs font-mono font-bold text-rose-400 uppercase tracking-wider flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 text-rose-400" />
                  Identified Friction Profile
                </span>
                <span className="text-xs font-mono text-slate-400">Diagnostic Analysis</span>
              </div>

              <div>
                <h3 className="text-lg font-bold text-white mb-2">
                  {activeChallengeData.label}
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {activeChallengeData.symptom}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                <span className="text-xs font-mono text-emerald-400 font-bold block uppercase">
                  Recommended Capability Solution:
                </span>
                <div className="text-base font-bold text-white">
                  {activeChallengeData.recommendedPage}
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Deploys targeted empirical models and systematic governance to eliminate this specific commercial bottleneck.
                </p>
              </div>

              <div className="pt-2">
                <Link
                  to={activeChallengeData.recommendedPath}
                  className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs inline-flex items-center gap-2 transition-all shadow-lg shadow-blue-600/30"
                >
                  <span>Inspect {activeChallengeData.recommendedPage}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 04: ALL 9 CAPABILITY CARDS ── */}
      <section id="capabilities" className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <div className="text-xs font-mono font-bold text-blue-600 uppercase tracking-widest mb-2">
              Full Suite Architecture
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight font-heading">
              Nine Core Growth Science Capabilities
            </h2>
            <p className="mt-3 text-base text-slate-600 leading-relaxed">
              Each capability contains dedicated sub-submenu sections, empirical evidence requirements, and mathematical KPI scorecards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilityList.map((cap) => {
              const Icon = cap.icon;
              return (
                <div
                  key={cap.slug}
                  className="p-6 rounded-3xl bg-white border border-slate-200 hover:border-blue-400 hover:shadow-xl transition-all flex flex-col justify-between space-y-6 group"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs font-extrabold text-blue-600 bg-blue-50 px-2.5 py-1 rounded">
                        Pillar {cap.num}
                      </span>
                      <div className="w-9 h-9 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-700 group-hover:text-blue-600 group-hover:bg-blue-50 transition-colors">
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                        {cap.title}
                      </h3>
                      <div className="text-xs font-mono text-slate-400 mt-0.5">{cap.headline}</div>
                      <p className="text-xs text-slate-600 mt-2.5 leading-relaxed line-clamp-3">
                        {cap.desc}
                      </p>
                    </div>

                    {/* Sub-Submenu Sections Preview */}
                    <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 text-xs text-slate-600 space-y-1.5">
                      <span className="font-mono text-[10px] uppercase font-bold text-slate-400 block">
                        Sub-Submenu Sections ({cap.submenus.length}):
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {cap.submenus.map((sub, sIdx) => (
                          <span key={sIdx} className="px-2 py-0.5 rounded bg-white border border-slate-200 text-[11px] text-slate-700">
                            {sub}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-slate-100 pt-4 flex items-center justify-between">
                    <div>
                      <div className="text-[10px] font-mono text-slate-400 uppercase">{cap.kpiLabel}</div>
                      <div className="text-sm font-extrabold text-slate-900 font-mono">{cap.kpi}</div>
                    </div>

                    <Link
                      to={cap.path}
                      className="px-3.5 py-2 rounded-xl bg-slate-900 hover:bg-blue-600 text-white font-bold text-xs inline-flex items-center gap-1.5 transition-colors"
                    >
                      <span>Explore</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── SECTION 05: COMPACT KPI OVERVIEW & INTEGRATION ── */}
      <section id="kpis" className="py-16 sm:py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
            <div className="max-w-2xl">
              <div className="text-xs font-mono font-bold text-blue-600 uppercase tracking-widest mb-2">
                Executive Metric Library
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-heading">
                Connected Growth Science KPI Index
              </h2>
              <p className="mt-3 text-base text-slate-600 leading-relaxed">
                Sample core metrics configured across all 9 capabilities. Every metric follows a strict mathematical formula with verifiable reporting windows.
              </p>
            </div>

            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs font-mono text-slate-600 flex items-center gap-2">
              <Scale className="w-4 h-4 text-blue-600 shrink-0" />
              <span>Illustrative Benchmarks — Governed by Customer Baseline Ledger</span>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {[
              { label: 'Sales Velocity', value: '$14.2K/Day', unit: 'Throughput', desc: 'Revenue per active pipeline day' },
              { label: 'LTV:CAC Ratio', value: '4.2x', unit: 'Compounding', desc: 'Discounted lifetime equity' },
              { label: 'Forecast Accuracy', value: '96.4%', unit: 'Precision', desc: 'Absolute variance <5%' },
              { label: 'Gross Margin', value: '83.5%', unit: 'Realization', desc: 'Protected pricing floors' },
              { label: 'Leakage Ceiling', value: '< 6.0%', unit: 'Retention', desc: 'Clawed back cash flow' },
              { label: 'Rule of 40 Score', value: '54.2%', unit: 'Efficiency', desc: 'Growth % + FCF Margin %' }
            ].map((kpi, idx) => (
              <div key={idx} className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-center space-y-1">
                <div className="text-[10px] font-mono text-slate-400 uppercase truncate">{kpi.label}</div>
                <div className="text-lg font-extrabold text-slate-900 font-mono mt-0.5">{kpi.value}</div>
                <div className="text-[10px] font-mono text-blue-600 font-bold">{kpi.unit}</div>
                <p className="text-[11px] text-slate-500 pt-1 leading-tight">{kpi.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 06: FINAL CONVERSION SECTION & CONSULTATION FORM ── */}
      <section id="consultation" className="py-20 sm:py-28 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[140px]" />
          <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-indigo-600/10 rounded-full blur-[120px]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/15 border border-blue-400/30 text-blue-300 text-xs font-bold tracking-widest uppercase font-mono mb-4">
                <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
                <span>EXECUTIVE DIAGNOSTIC CONSULTATION</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight mb-4 font-heading">
                Audit Your Commercial Revenue Architecture
              </h2>

              <p className="text-slate-300 leading-relaxed text-sm sm:text-base mb-6">
                Connect with our Growth Science team to lock your baseline metrics, identify hidden pipeline friction, and model your deterministic expansion path.
              </p>

              <div className="space-y-3 mb-8 text-xs text-slate-300">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Comprehensive 36-month revenue equation calibration</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Forensic pipeline leakage & pricing concession audit</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Stochastic C-suite forecast scenario modeling</span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-400 font-mono">
                <span className="text-blue-400 font-bold block mb-1">Confidentiality Guarantee:</span>
                All commercial and financial data is handled under mutual enterprise non-disclosure agreements.
              </div>
            </div>

            {/* Live Form Integration */}
            <div className="lg:col-span-7">
              <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl backdrop-blur-xl">
                <div className="mb-6 border-b border-slate-800 pb-4">
                  <div className="text-xs font-mono font-bold text-blue-400 uppercase tracking-wider">
                    Revenue Architecture Brief
                  </div>
                  <h3 className="text-xl font-bold text-white mt-1">
                    Request Growth Science Assessment
                  </h3>
                </div>
                <AiSalesIntakeForm />
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
