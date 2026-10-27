import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Compass,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  TrendingUp,
  Target,
  DollarSign,
  Activity,
  Layers,
  Search,
  Sparkles,
  Lock,
  ChevronRight,
  RefreshCw,
  Gauge,
  Box,
  Cpu,
  BarChart3,
  Network,
  Zap,
  ArrowUpRight,
  Handshake,
  Globe,
  Rocket
} from 'lucide-react';
import { originsCategories } from '../../../data/discoveryNodesData';
import OriginIntakeForm from '../../components/forms/OriginIntakeForm';

export default function DiscoveryHub() {
  useEffect(() => {
    document.title = 'The Complete Revenue Discovery Framework | ProfitMachines';
    window.scrollTo(0, 0);
  }, []);

  const [activeOriginTab, setActiveOriginTab] = useState<string>('core-discovery');

  // Realization Layer 6-Step Process
  const realizationSteps = [
    {
      num: '01',
      title: 'Baseline Capture',
      subtitle: 'Measure Current State',
      description: 'Every node starts by measuring the current number — not estimates, but audited ledger and telemetry data. Zero assumptions.'
    },
    {
      num: '02',
      title: 'Locked Targets',
      subtitle: 'Written into SOW',
      description: 'Targets written into the SOW with specific quantified metrics, margin floors, and velocity thresholds agreed upfront.'
    },
    {
      num: '03',
      title: 'Decision Authority',
      subtitle: 'Evidence-Based Mandate',
      description: 'Each node concludes with a named strategic decision made on mathematical proof, not committee opinions or executive instinct.'
    },
    {
      num: '04',
      title: 'Execution Engine',
      subtitle: 'Autonomous Agent Systems',
      description: 'Autonomous revenue engines and telemetry monitors run the playbook 24/7, continuously routing high-intent demand.'
    },
    {
      num: '05',
      title: 'Proof Cadence',
      subtitle: 'Monthly Realization Audits',
      description: 'Rigorous monthly realization reviews benchmarking performance directly against locked targets with immediate corrective tuning.'
    },
    {
      num: '06',
      title: 'Exit State',
      subtitle: 'Client Ownership',
      description: 'You keep the dashboards, playbooks, predictive models, and the compounding revenue numbers they produce. Zero vendor lock-in.'
    }
  ];

  // Engagement Path Stages
  const engagementStages = [
    {
      stage: 'STAGE 01',
      timeframe: '2–4 Weeks',
      title: 'Discovery Diagnostic',
      desc: 'Baseline all 16 nodes simultaneously across your business. Surface immediate margin leaks, unmonetized usage, and channel concentration vulnerabilities.',
      deliverable: '16-Node Diagnostic Heatmap & Board Briefing'
    },
    {
      stage: 'STAGE 02',
      timeframe: '6–12 Weeks',
      title: 'Focused Discovery Sprints',
      desc: 'Deploy 3–5 highest-leverage priority nodes with live telemetry, locked pricing guardrails, and automated demand chain triggers.',
      deliverable: 'Telemetry Installed & High-Leverage Playbooks Live'
    },
    {
      stage: 'STAGE 03',
      timeframe: 'Ongoing / Compounding',
      title: 'Realization & Compounding Value',
      desc: 'Monthly realization reviews against locked targets. Quarterly elasticity re-testing, whitespace rescanning, and autonomous agent optimization.',
      deliverable: 'Compounding Revenue & Margin Expansion'
    }
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans pt-16 lg:pt-[72px]">
      {/* ── SECTION 1: HERO ── */}
      <section className="relative pt-24 pb-20 sm:pt-32 sm:pb-28 overflow-hidden border-b border-slate-200 bg-white">
        {/* Subtle background grid & ambient light glow */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div
            className="absolute inset-0 opacity-[0.35]"
            style={{
              backgroundImage: 'linear-gradient(to right, #e2e8f0 1px, transparent 1px), linear-gradient(to bottom, #e2e8f0 1px, transparent 1px)',
              backgroundSize: '4rem 4rem'
            }}
          />
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[140px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[140px] pointer-events-none" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-blue-700 text-xs font-mono font-bold tracking-wide uppercase shadow-xs mb-6">
              <Compass className="w-3.5 h-3.5" />
              <span>THE COMPLETE REVENUE DISCOVERY FRAMEWORK</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.12] mb-6 font-heading">
              Four Origins. Sixteen Nodes. One Rule:{' '}
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Realization, Not Documentation.
              </span>
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-slate-600 leading-relaxed mb-8 max-w-3xl font-normal">
              Revenue stalls when discovery is fragmented — market sized in one deck, pricing guessed in another, channels untested, competitors watched but never dissected. ORIGIN runs all sixteen discovery nodes as one connected diagnostic, and every node ends in a measured baseline, a locked target, and a telemetry loop — so discovery converts to revenue, not documents.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#intake"
                className="inline-flex items-center justify-center bg-slate-900 hover:bg-blue-600 text-white font-bold px-7 py-4 rounded-xl shadow-lg shadow-slate-900/10 text-sm transition-all hover:-translate-y-0.5 group font-mono uppercase tracking-wider gap-2"
              >
                <span>Book a Discovery Diagnostic</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#node-map"
                className="inline-flex items-center justify-center border border-slate-200 bg-white hover:bg-slate-50 text-slate-800 font-bold px-6 py-4 rounded-xl text-sm shadow-xs transition-all font-mono uppercase tracking-wider gap-2"
              >
                <span>Explore the 16 Nodes</span>
                <ChevronRight className="w-4 h-4 text-blue-600" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 2: THE PROBLEM ── */}
      <section className="py-20 sm:py-24 border-b border-slate-200 bg-slate-50/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-rose-50 border border-rose-200 text-rose-700 font-mono text-xs font-bold uppercase tracking-wider mb-4">
                <span>The Systematic Failure</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading mb-6">
                Why Fragmented Discovery Fails
              </h2>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-6">
                Most enterprises run discovery in silos. Marketing sizes the market. Sales guesses at pricing. Partnerships logs partner logos. Product launches on intuition. None of it connects. None of it has telemetry. None of it converts to measured revenue.
              </p>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                The result: you make decisions on incomplete data, miss margin leaks you can't see, and launch into markets you don't understand.
              </p>
            </div>

            <div className="lg:col-span-7">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  {
                    icon: Target,
                    title: 'Top-Down TAM Fallacy',
                    desc: 'Broad market estimations hide where contribution margin concentrates. Teams chase low-margin revenue that burns cash.'
                  },
                  {
                    icon: DollarSign,
                    title: 'Instinct-Based Pricing',
                    desc: 'Pricing set by guesswork and historical habit. Sales reps discount 30-50% to close deals because they lack ROI evidence.'
                  },
                  {
                    icon: Network,
                    title: 'Unowned Distribution Risk',
                    desc: '60%+ of revenue flows through an external platform or partner. One policy change wipes out net margin overnight.'
                  },
                  {
                    icon: Rocket,
                    title: 'Coin-Flip Launches',
                    desc: 'New offerings built on intuition without pre-validated willingness-to-pay. Millions burned before discovering buyers will not pay.'
                  }
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-blue-400 transition-all duration-300 relative overflow-hidden group"
                  >
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-rose-500 to-amber-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-slate-800 mb-4 group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">
                      <item.icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-slate-900 mb-2 font-heading">{item.title}</h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 3: THE ORIGIN THESIS ── */}
      <section className="py-20 sm:py-24 border-b border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 font-mono text-xs font-bold uppercase tracking-wider mb-4">
              <span>The Diagnostic Operating System</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight font-heading mb-6">
              The ORIGIN Framework
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              ORIGIN is not a consulting engagement. It's a diagnostic operating system. Four origins. Sixteen discovery nodes. One rule: every node ends in a measured baseline, a locked target, and a telemetry loop. Discovery converts to revenue, not documents.
            </p>
          </div>

          {/* 4 Origins Architecture Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {originsCategories.map((cat, idx) => (
              <div
                key={cat.id}
                className="rounded-2xl p-6 bg-slate-50/80 border border-slate-200/90 shadow-sm hover:shadow-2xl hover:border-blue-400 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group flex flex-col justify-between"
              >
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-bold text-blue-700 bg-blue-100/70 px-2.5 py-1 rounded-lg">
                      {cat.name}
                    </span>
                    <span className="text-xs font-mono text-slate-500 font-semibold">
                      {cat.nodes.length} Nodes
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2 font-heading">
                    {cat.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                    {cat.tagline}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200/70">
                  <Link
                    to={`/offerings/discovery/${cat.firstNodeSlug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-blue-600 hover:text-blue-800 transition-colors uppercase tracking-wider"
                  >
                    <span>Explore Nodes</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 4: INTERACTIVE NODE MAP ── */}
      <section id="node-map" className="py-20 sm:py-28 border-b border-slate-200 bg-slate-50/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 font-mono text-xs font-bold uppercase tracking-wider mb-4">
              <span>Interactive Navigation Matrix</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading mb-4">
              The 16 Discovery Nodes
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              Explore each dedicated discovery node page. Every page features a unique structure type, tailored operational telemetry, and verified outcome metrics.
            </p>
          </div>

          {/* Origin Selector Tabs */}
          <div className="flex flex-wrap gap-2 mb-8 pb-4 border-b border-slate-200">
            {originsCategories.map((origin) => (
              <button
                key={origin.id}
                onClick={() => setActiveOriginTab(origin.id)}
                className={`px-4 py-2.5 rounded-xl font-mono text-xs font-bold transition-all cursor-pointer ${
                  activeOriginTab === origin.id
                    ? 'bg-slate-900 text-white shadow-md'
                    : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200'
                }`}
              >
                <span>{origin.name}</span>
                <span className="ml-2 text-[10px] opacity-70">({origin.nodes.length} Nodes)</span>
              </button>
            ))}
          </div>

          {/* Node Cards Grid for Selected Origin */}
          {originsCategories.map((origin) => {
            if (origin.id !== activeOriginTab) return null;
            return (
              <div key={origin.id} className="space-y-6">
                <div className="p-4 rounded-xl bg-blue-50/60 border border-blue-100 flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <h3 className="text-sm font-bold text-blue-900 font-mono">{origin.name.toUpperCase()}</h3>
                    <p className="text-xs text-blue-700 mt-0.5">{origin.description}</p>
                  </div>
                  <Link
                    to={`/offerings/discovery/${origin.firstNodeSlug}`}
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-mono text-xs font-bold transition-colors"
                  >
                    <span>Start with {origin.nodes[0].title}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {origin.nodes.map((node) => (
                    <Link
                      key={node.slug}
                      to={`/offerings/discovery/${node.slug}`}
                      className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:shadow-xl hover:border-blue-500 hover:-translate-y-1 transition-all duration-300 relative group flex flex-col justify-between"
                    >
                      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                      <div>
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-[11px] font-mono font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded">
                            {node.nodeNumber}
                          </span>
                          <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600 transition-colors" />
                        </div>
                        <h4 className="text-sm font-bold text-slate-900 mb-2 font-heading group-hover:text-blue-600 transition-colors">
                          {node.title}
                        </h4>
                        <p className="text-xs text-slate-600 leading-relaxed mb-4">
                          {node.summary}
                        </p>
                      </div>
                      <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono text-slate-500">
                        <span>Dedicated Node Page</span>
                        <span className="text-blue-600 font-semibold group-hover:underline">View Page →</span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── SECTION 5: THE REALIZATION LAYER ── */}
      <section className="py-20 sm:py-24 border-b border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 font-mono text-xs font-bold uppercase tracking-wider mb-4">
              <span>The Operating Protocol</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading mb-4">
              How ORIGIN Converts Discovery to Revenue
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Every node follows the same realization protocol. We do not deliver slide decks that sit on executive hard drives. We establish measured baselines, write targets into commercial agreements, and wire telemetry loops.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {realizationSteps.map((step, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-50/70 border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-blue-400 transition-all duration-300 relative overflow-hidden group"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-extrabold font-mono text-blue-600/40 group-hover:text-blue-600 transition-colors">
                    {step.num}
                  </span>
                  <span className="text-xs font-mono text-slate-500 font-semibold">
                    {step.subtitle}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2 font-heading">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 6: QUICK NAVIGATION ── */}
      <section className="py-20 sm:py-24 border-b border-slate-200 bg-slate-50/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 font-mono text-xs font-bold uppercase tracking-wider mb-4">
              <span>Origin Entry Points</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading mb-4">
              Start Your Discovery
            </h2>
            <p className="text-base text-slate-600">
              Select an origin to begin with its foundational diagnostic node:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {originsCategories.map((cat, idx) => (
              <div
                key={cat.id}
                className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-blue-400 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="text-xs font-mono font-bold text-blue-700 mb-1">{cat.originNumber}</div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2 font-heading">{cat.name}</h3>
                  <p className="text-xs text-slate-600 mb-6">{cat.tagline}</p>
                </div>
                <Link
                  to={`/offerings/discovery/${cat.firstNodeSlug}`}
                  className="inline-flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl bg-slate-900 hover:bg-blue-600 text-white font-mono text-xs font-bold transition-all shadow-sm"
                >
                  <span>Start with {cat.nodes[0].title}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 7: ENGAGEMENT PATH ── */}
      <section className="py-20 sm:py-24 border-b border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 font-mono text-xs font-bold uppercase tracking-wider mb-4">
              <span>Execution Timeline</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading mb-4">
              From Diagnostic to Realization in 90 Days
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              A systematic 3-stage journey designed to rapidly isolate high-leverage margin leaks, install operational telemetry, and establish compounding revenue optimization.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
            {engagementStages.map((stg, idx) => (
              <div
                key={idx}
                className="p-8 rounded-2xl bg-slate-50/80 border border-slate-200/90 shadow-sm relative overflow-hidden group hover:shadow-xl hover:border-blue-400 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-bold text-blue-700 bg-blue-100/70 px-2.5 py-1 rounded-lg">
                    {stg.stage}
                  </span>
                  <span className="text-xs font-mono text-slate-500 font-semibold">
                    {stg.timeframe}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 font-heading">
                  {stg.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                  {stg.desc}
                </p>
                <div className="pt-4 border-t border-slate-200 text-xs font-mono text-slate-700">
                  <span className="text-slate-400 block text-[10px] uppercase">Core Deliverable:</span>
                  <span className="font-bold text-slate-900">{stg.deliverable}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 8: CTA & INTAKE FORM ── */}
      <section id="intake" className="py-20 sm:py-28 bg-slate-50/70 relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 font-mono text-xs font-bold uppercase tracking-wider mb-4">
              <span>Confidential Executive Intake</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight font-heading mb-4">
              Ready to Replace Fragmented Discovery with Measured Realization?
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              Submit your organizational parameters below. A Principal Revenue Systems Architect will review your architecture under mutual NDA and schedule your initial 16-node discovery baseline.
            </p>
          </div>

          <OriginIntakeForm pageContext="ORIGIN Framework Overview Hub" defaultPriority="Full 16-Node Diagnostic" />
        </div>
      </section>
    </div>
  );
}
