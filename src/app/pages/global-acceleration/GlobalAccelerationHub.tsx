import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Globe, ArrowRight, ChevronRight, Activity, ShieldCheck,
  TrendingUp, BarChart3, Layers, Cpu, Compass, CheckCircle2,
  AlertCircle, Users, Bot, Sparkles, Building2, HelpCircle,
  MapPin, Zap, ArrowUpRight, DollarSign, Network
} from 'lucide-react';
import { AiSalesIntakeForm } from '../../components/forms/AiSalesIntakeForm';

const pillars = [
  {
    num: '01',
    title: 'Market Intelligence',
    path: '/global-acceleration/market-intelligence',
    color: 'blue',
    icon: Globe,
    desc: 'Four intelligence systems that validate every market before committing capital — country opportunity analysis, TAM/SAM/SOM assessment, competitive mapping, and regulatory intelligence.',
    metric: '60-75%',
    metricLabel: 'improvement in international market ROI',
  },
  {
    num: '02',
    title: 'Cross-Border Revenue Strategy',
    path: '/global-acceleration/cross-border-strategy',
    color: 'indigo',
    icon: Compass,
    desc: 'Four strategic frameworks that engineer market entry for predictable ROI — market entry models, localization strategy, global pricing, and revenue expansion planning.',
    metric: '50-70%',
    metricLabel: 'reduction in time-to-revenue',
  },
  {
    num: '03',
    title: 'Global Partner Ecosystems',
    path: '/global-acceleration/partner-ecosystems',
    color: 'emerald',
    icon: Network,
    desc: 'Four ecosystem capabilities that build partner networks producing predictable revenue — distributor networks, partner recruitment, co-selling programs, and alliance management.',
    metric: '3-5X',
    metricLabel: 'improvement in partner-sourced revenue',
  },
  {
    num: '04',
    title: 'Global Revenue Operations',
    path: '/global-acceleration/global-revops',
    color: 'sky',
    icon: Layers,
    desc: 'Four operational capabilities that orchestrate revenue operations across borders — compliance management, global sales alignment, revenue attribution, and multi-region operations.',
    metric: '40-60%',
    metricLabel: 'reduction in operational duplication',
  },
  {
    num: '05',
    title: 'AI For Global Scaling',
    path: '/global-acceleration/ai-global-scaling',
    color: 'violet',
    icon: Bot,
    badge: 'Key Differentiator',
    desc: 'Four AI capabilities that deploy autonomous agents operating across borders — multi-language AI SDRs, market intelligence agents, regulatory intelligence agents, and autonomous expansion workflows.',
    metric: '15+ Langs',
    metricLabel: 'covered with 24/7 timezone coverage',
  },
  {
    num: '06',
    title: 'Executive Expansion Office',
    path: '/global-acceleration/expansion-office',
    color: 'purple',
    icon: Building2,
    desc: 'Four executive capabilities providing strategic oversight for global expansion — expansion readiness audit, international growth roadmap, market expansion strategy, and executive scorecards.',
    metric: '80-90%',
    metricLabel: 'reduction in expansion failures',
  },
];

const regions = [
  { name: 'North America & UK', status: 'Core Tier 1', coverage: 'Direct + Hyperscaler Co-Sell', lat: '38%', lon: '24%', active: true },
  { name: 'DACH & Western Europe', status: 'Sovereign GDPR', coverage: 'Local Sovereign Swarms', lat: '32%', lon: '49%', active: true },
  { name: 'Nordics & Benelux', status: 'High Purchasing Power', coverage: 'Digital-First + Partner', lat: '25%', lon: '52%', active: true },
  { name: 'Asia-Pacific & Japan', status: 'High-Touch / Alliance', coverage: 'Tier-1 Distributor Fabric', lat: '45%', lon: '82%', active: true },
  { name: 'Middle East & GCC', status: 'Accelerating TAM', coverage: 'Enterprise Co-Sell Hub', lat: '42%', lon: '62%', active: true },
  { name: 'Latin America', status: 'Micro-Segment Margin', coverage: 'Local Currency Hedged', lat: '65%', lon: '33%', active: true },
];

export default function GlobalAccelerationHub() {
  const [activeRegion, setActiveRegion] = useState(0);

  useEffect(() => {
    document.title = 'Global Business Acceleration | ProfitMachines';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans">

      {/* ── HERO SECTION: GLOBAL COMMAND CENTER ── */}
      <section className="relative pt-20 pb-20 sm:pt-28 sm:pb-28 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute inset-0 opacity-[0.22]" style={{ backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.07) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.07) 1px, transparent 1px)', backgroundSize: '4rem 4rem' }} />
          <div className="absolute top-0 right-1/4 w-[700px] h-[700px] bg-blue-600/15 rounded-full blur-[150px]" />
          <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-indigo-600/12 rounded-full blur-[130px]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/15 border border-blue-400/30 text-blue-300 text-xs font-bold tracking-widest uppercase font-mono mb-6">
                <Globe className="w-3.5 h-3.5 text-blue-400" />
                SCALE REVENUE ACROSS BORDERS WITH AUTONOMOUS AI
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.07] mb-6 font-heading">
                Global Business Acceleration:{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-indigo-300">
                  Engineer International Revenue at the Speed of Market Opportunity
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-slate-300 leading-relaxed max-w-2xl mb-8">
                Most enterprises expand globally through trial and error — entering markets without validated demand, launching without localization, and scaling without compliance. We replace this approach with autonomous AI systems that identify high-propensity international opportunities, orchestrate cross-border revenue operations, and deploy multi-language AI agents that execute 24/7 across every timezone.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="#diagnostic" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold px-7 py-4 rounded-xl text-sm shadow-lg shadow-blue-600/30 transition-all hover:-translate-y-0.5 group font-mono uppercase tracking-wider">
                  Run a Global Expansion Diagnostic
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
                <a href="#capabilities" className="inline-flex items-center gap-2 border border-slate-700 bg-slate-900/80 hover:bg-slate-800 text-slate-200 font-bold px-6 py-4 rounded-xl text-sm transition-all font-mono uppercase tracking-wider">
                  Explore the Framework
                  <ChevronRight className="w-4 h-4 text-blue-400" />
                </a>
              </div>
            </div>

            {/* Visual: Interactive World Command Center */}
            <div className="lg:col-span-5">
              <div className="p-6 rounded-3xl bg-slate-900/90 border border-slate-800 shadow-2xl relative backdrop-blur-xl">
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-blue-400 animate-pulse" />
                    <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">Global Operations Cockpit</span>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-500/20 text-blue-300 border border-blue-500/30">
                    40+ Sovereign Territories
                  </span>
                </div>

                {/* Simulated World Grid & Regional Telemetry */}
                <div className="space-y-3 font-mono text-xs mb-4">
                  {regions.map((reg, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveRegion(idx)}
                      className={`w-full p-3 rounded-xl border text-left transition-all flex items-center justify-between ${
                        activeRegion === idx
                          ? 'bg-blue-950/60 border-blue-500/60 text-white'
                          : 'bg-slate-950/60 border-slate-800 text-slate-400 hover:border-slate-700'
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <span className={`w-2 h-2 rounded-full ${activeRegion === idx ? 'bg-blue-400 animate-ping' : 'bg-slate-600'}`} />
                        <div>
                          <div className="font-bold text-slate-200 text-xs">{reg.name}</div>
                          <div className="text-[10px] text-slate-500">{reg.coverage}</div>
                        </div>
                      </div>
                      <span className="text-[10px] px-2 py-0.5 rounded bg-slate-800 text-blue-300 font-mono">
                        {reg.status}
                      </span>
                    </button>
                  ))}
                </div>

                <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span>Live Cross-Border Telemetry</span>
                  <span className="text-emerald-400 font-bold">24/7 Multi-Region Mesh</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── THE GLOBAL CHALLENGE (SPLIT COMPARISON & BENCHMARKS) ── */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <span className="text-xs font-mono text-blue-600 uppercase tracking-widest font-bold">The Strategic Defect</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2 font-heading">
              Why Most Global Expansion Initiatives Fail
            </h2>
          </div>

          {/* Executive Summary Card */}
          <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm relative mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono font-bold uppercase mb-4">
              Executive Briefing
            </div>
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
              Most enterprise cross-border expansions stall due to unvalidated demand signals, non-localized buyer journeys, and fragmented partner channels. ProfitMachines treats global acceleration as an engineered, deterministic system — validating unit-economic feasibility before capital commitment, automating native localization, and deploying autonomous AI sales agents across 40+ countries.
            </p>
          </div>

          {/* Executive Benchmark Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs">
              <div className="text-2xl font-black font-mono text-blue-600 mb-1">60-75%</div>
              <div className="text-xs font-mono font-bold text-slate-900 uppercase tracking-wide mb-1">Market ROI Lift</div>
              <p className="text-xs text-slate-600">Unit-economic TAM/SAM/SOM validation prior to territory deployment.</p>
            </div>
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs">
              <div className="text-2xl font-black font-mono text-indigo-600 mb-1">50-70%</div>
              <div className="text-xs font-mono font-bold text-slate-900 uppercase tracking-wide mb-1">Faster Time-to-Revenue</div>
              <p className="text-xs text-slate-600">Autonomous multi-language SDRs and pre-established distributor ecosystems.</p>
            </div>
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs">
              <div className="text-2xl font-black font-mono text-emerald-600 mb-1">80-90%</div>
              <div className="text-xs font-mono font-bold text-slate-900 uppercase tracking-wide mb-1">Failure Risk Reduction</div>
              <p className="text-xs text-slate-600">Pre-flight capability audits gating expansion decisions behind verified readiness.</p>
            </div>
          </div>

          {/* Split Comparison Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 rounded-3xl bg-rose-50/50 border border-rose-200">
              <div className="flex items-center gap-2 mb-4 text-rose-700 font-mono text-xs uppercase font-bold">
                <AlertCircle className="w-4 h-4 text-rose-600" />
                Traditional Global Expansion (Ad-Hoc & Reactive)
              </div>
              <ul className="space-y-3.5 text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="text-rose-500 font-bold shrink-0">✕</span>
                  <span>Selecting markets based on generic macro signals rather than true territory contribution margin</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-500 font-bold shrink-0">✕</span>
                  <span>Directly translating domestic collateral, missing local buyer nuances and willingness-to-pay</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-500 font-bold shrink-0">✕</span>
                  <span>Signing vanity distributor logos without attribution, joint pipelines, or co-sell SLA</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-500 font-bold shrink-0">✕</span>
                  <span>Discovering data residency and compliance laws months after contracts are executed</span>
                </li>
              </ul>
            </div>

            <div className="p-8 rounded-3xl bg-blue-50/50 border border-blue-200">
              <div className="flex items-center gap-2 mb-4 text-blue-700 font-mono text-xs uppercase font-bold">
                <CheckCircle2 className="w-4 h-4 text-blue-600" />
                Engineered Global Expansion (Validated & Predictive)
              </div>
              <ul className="space-y-3.5 text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span>Empirical TAM/SAM/SOM and contribution margin audits before deploying local capital</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span>Deep cultural localization calibrated against local purchasing power and workflow expectations</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span>Scored partner alliance network with verified pipeline attribution and dynamic co-sell routing</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span>Autonomous AI agents prospecting in 15+ native languages across 20+ global timezones</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── THE 6 CAPABILITIES (INTERACTIVE 2x3 GRID) ── */}
      <section id="capabilities" className="py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <span className="text-xs font-mono text-blue-600 uppercase tracking-widest font-bold">Comprehensive Architecture</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2 mb-4 font-heading">
              Six Pillars of Global Revenue Acceleration
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              Each capability represents an institutional pillar engineered to turn cross-border growth into a deterministic science.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <Link
                  key={idx}
                  to={pillar.path}
                  className="rounded-3xl border border-slate-200 bg-white p-8 hover:border-blue-400 hover:shadow-xl transition-all group flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-blue-50 text-blue-700 font-bold border border-blue-200">
                        Pillar {pillar.num}
                      </span>
                      {pillar.badge && (
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-violet-100 text-violet-700 font-bold border border-violet-200">
                          {pillar.badge}
                        </span>
                      )}
                    </div>
                    <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 mb-6 group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors font-heading">
                      {pillar.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed mb-6">
                      {pillar.desc}
                    </p>
                  </div>

                  <div className="pt-6 border-t border-slate-100">
                    <div className="text-xs font-mono text-slate-400 uppercase">Impact Metric</div>
                    <div className="text-2xl font-extrabold text-blue-600 font-mono my-1">{pillar.metric}</div>
                    <div className="text-xs text-slate-500 mb-4">{pillar.metricLabel}</div>
                    <div className="inline-flex items-center text-xs font-mono font-bold text-blue-600 group-hover:translate-x-1 transition-transform">
                      Explore Framework <ChevronRight className="w-4 h-4 ml-1" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── HOW THE CAPABILITIES CONNECT ── */}
      <section className="py-20 bg-slate-900 text-white border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono text-blue-400 uppercase tracking-widest font-bold">Integrated Execution Fabric</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2 font-heading">
              The Unified Global Revenue System
            </h2>
            <p className="text-slate-400 text-base mt-3">
              How the six capabilities interconnect into a continuous, compounding international revenue engine.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-slate-950/80 border border-slate-800 relative">
              <div className="text-xs font-mono text-blue-400 mb-2 font-bold">Step 01 · Validation</div>
              <h4 className="text-lg font-bold text-white mb-2">Market Intelligence</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Validates country opportunity, local TAM, and competitive landscape before capital is allocated.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-950/80 border border-slate-800 relative">
              <div className="text-xs font-mono text-indigo-400 mb-2 font-bold">Step 02 · Strategy</div>
              <h4 className="text-lg font-bold text-white mb-2">Cross-Border Strategy</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Designs the entry model, deep cultural localization, purchasing-power pricing, and expansion roadmap.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-950/80 border border-slate-800 relative">
              <div className="text-xs font-mono text-emerald-400 mb-2 font-bold">Step 03 · Distribution</div>
              <h4 className="text-lg font-bold text-white mb-2">Partner Ecosystems</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Recruits high-yield distributors, activates co-sell programs, and secures attributed pipeline.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-950/80 border border-slate-800 relative">
              <div className="text-xs font-mono text-sky-400 mb-2 font-bold">Step 04 · Operations</div>
              <h4 className="text-lg font-bold text-white mb-2">Global RevOps</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Orchestrates multi-region compliance, unifies tech stacks, and attributes revenue across borders.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-950/80 border border-slate-800 relative">
              <div className="text-xs font-mono text-violet-400 mb-2 font-bold">Step 05 · Automation</div>
              <h4 className="text-lg font-bold text-white mb-2">AI Global Scaling</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Deploys 24/7 autonomous SDR agents in 15+ native languages and real-time market radar swarms.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-950/80 border border-slate-800 relative">
              <div className="text-xs font-mono text-purple-400 mb-2 font-bold">Step 06 · Governance</div>
              <h4 className="text-lg font-bold text-white mb-2">Executive Expansion Office</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Audits readiness, tracks boardroom scorecards, and manages sequenced multi-territory roadmaps.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 90-DAY ENGAGEMENT TIMELINE ── */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <span className="text-xs font-mono text-blue-600 uppercase tracking-widest font-bold">Deterministic Pacing</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2 font-heading">
              From Diagnostic to First Revenue in 90 Days
            </h2>
            <p className="text-slate-600 text-base sm:text-lg mt-2">
              A sequenced deployment protocol that eliminates multi-year delays and accelerates time-to-value.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm relative">
              <div className="text-xs font-mono text-blue-600 font-bold uppercase tracking-wider mb-2">Days 1–14</div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Diagnostic & Market Validation</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Country opportunity scoring, unit-economic TAM/SAM/SOM dissection, regulatory pre-flight audit, and baseline readiness lock.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm relative">
              <div className="text-xs font-mono text-indigo-600 font-bold uppercase tracking-wider mb-2">Days 15–45</div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Strategy & Partner Network Activation</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Market-specific entry model finalization, cultural localization of collateral, purchasing-power pricing, and high-yield partner recruitment.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm relative">
              <div className="text-xs font-mono text-emerald-600 font-bold uppercase tracking-wider mb-2">Days 46–90</div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">AI Agent Deployment & First Revenue</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Multi-language AI SDR swarm activation, 24/7 timezone coverage, real-time telemetry dashboard handover, and contracted deal close.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA & INTAKE FORM ── */}
      <section id="diagnostic" className="py-24 bg-slate-950 text-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/15 border border-blue-400/30 text-blue-300 text-xs font-mono uppercase tracking-widest mb-6">
                Expansion Readiness Protocol
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-6 font-heading">
                Ready to Engineer Predictable Global Revenue?
              </h2>
              <p className="text-base sm:text-lg text-slate-300 mb-8 leading-relaxed">
                Connect with our Global Expansion Partners. We will benchmark your target territories, audit regulatory requirements, and calculate unit-economic ROI probability across 40+ countries.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3 text-sm text-slate-200">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span>Confidential territory opportunity & TAM/SAM/SOM evaluation</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-200">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span>Sovereignty, data residency, and compliance pre-flight roadmap</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-200">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span>Autonomous multi-language AI SDR trial in your priority geography</span>
                </div>
              </div>

              {/* Trust Badges */}
              <div className="pt-8 border-t border-slate-800 grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div>
                  <div className="text-2xl font-extrabold text-white font-mono">500+</div>
                  <div className="text-xs text-slate-400">B2B Companies</div>
                </div>
                <div>
                  <div className="text-2xl font-extrabold text-white font-mono">5X</div>
                  <div className="text-xs text-slate-400">Avg Growth</div>
                </div>
                <div>
                  <div className="text-2xl font-extrabold text-white font-mono">24/7</div>
                  <div className="text-xs text-slate-400">AI Coverage</div>
                </div>
                <div>
                  <div className="text-2xl font-extrabold text-white font-mono">40+</div>
                  <div className="text-xs text-slate-400">Countries</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="p-8 rounded-3xl bg-slate-900 border border-slate-800 shadow-2xl">
                <h3 className="text-xl font-bold text-white mb-2">Run Global Expansion Diagnostic</h3>
                <p className="text-xs text-slate-400 mb-6">Confidential intake. Direct routing to Global Practice Leadership.</p>
                <AiSalesIntakeForm />
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
