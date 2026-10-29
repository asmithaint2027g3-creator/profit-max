import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
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
  Gauge,
  Box,
  Network,
  GitBranch,
  Building2,
  Users,
  Zap,
  Check,
  ArrowUpRight,
  Scale,
  Clock,
  Briefcase,
  Cpu,
  BarChart3,
  Globe,
  Radio,
  Sliders,
  ShieldAlert
} from 'lucide-react';
import OfferingsIntakeForm from '../../components/forms/OfferingsIntakeForm';

export default function ProfitPoolDiscovery() {
  const location = useLocation();

  useEffect(() => {
    document.title = 'Profit Pool Discovery | The Revenue Discovery Framework | ProfitMachines';
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const el = document.getElementById(id);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 150);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location.hash, location.pathname]);

  const [activeTab, setActiveTab] = useState<'market-whitespace' | 'demand-intent' | 'value-roi' | 'competitive' | 'pmf'>('market-whitespace');

  const discoveryPillars = [
    {
      title: 'Core Revenue Discovery',
      descriptor: 'Where margin concentrates, true willingness-to-pay, active buyer intent, and competitive dynamics.',
      count: '8 Discovery Capabilities',
      icon: Search,
      badge: 'Pillar 01'
    },
    {
      title: 'Offer & Delivery Architecture',
      descriptor: 'Packaging, pricing ladders, capacity allocation, and true gross cost-to-serve calculation.',
      count: '2 Discovery Capabilities',
      icon: Box,
      badge: 'Pillar 02'
    },
    {
      title: 'Partnership & Ecosystem Discovery',
      descriptor: 'Alliance leverage, ecosystem channels, co-sell integrations, and platform adjacency.',
      count: '2 Discovery Capabilities',
      icon: Network,
      badge: 'Pillar 03'
    },
    {
      title: 'Expansion & Launch Discovery',
      descriptor: 'Adjacent offerings, secondary markets, new distribution channels, and de-risked GTM launches.',
      count: '4 Discovery Capabilities',
      icon: TrendingUp,
      badge: 'Pillar 04'
    }
  ];

  const capabilityMatrix = [
    { pillar: 'Core Revenue Discovery', name: 'Micro-Market Discovery', question: 'Which micro-segment carries the margin — and can we defend it?', metric: '100% TAM dissected' },
    { pillar: 'Core Revenue Discovery', name: 'Demand Discovery', question: 'Where does the demand chain leak — and how do we fix velocity?', metric: '-50% deal stall rate' },
    { pillar: 'Core Revenue Discovery', name: 'Channel Discovery', question: 'How concentrated is our reach — and where is the secondary engine?', metric: '3.4x pipeline reach' },
    { pillar: 'Core Revenue Discovery', name: 'Willingness-to-Pay Discovery', question: 'What will buyers actually pay — and where are we underpriced?', metric: '≥92% price realization' },
    { pillar: 'Core Revenue Discovery', name: 'Customer Propensity Discovery', question: 'Who is in-market right now — and are we engaging them first?', metric: 'Nightly decile intent scoring' },
    { pillar: 'Core Revenue Discovery', name: 'Usage-to-Revenue Discovery', question: 'Which usage behaviors predict paid expansion — and are triggers live?', metric: '+30-50% conversion lift' },
    { pillar: 'Core Revenue Discovery', name: 'Competitor Discovery', question: 'What exactly are we losing to — deal by deal, feature by feature?', metric: '+15-25% competitive win rate' },
    { pillar: 'Core Revenue Discovery', name: 'Competitive Ecosystem Discovery', question: 'Who is building the field we compete on — inside or outside their structure?', metric: '100% landscape mapped' },
    { pillar: 'Offer & Delivery Architecture', name: 'Offer & Revenue Architecture', question: 'Is what we sell engineered for willingness-to-pay — or cost-plus habit?', metric: 'Tiered packaging & floors' },
    { pillar: 'Offer & Delivery Architecture', name: 'Supply, Capacity & Cost-to-Serve', question: 'Which revenue do we scale — and which revenue destroys margins quietly?', metric: '5-15 margin points saved' },
    { pillar: 'Partnership & Ecosystem Discovery', name: 'Alliance & Co-Sell Ecosystem', question: 'Who holds the trust before you do — and how do we bridge revenue?', metric: 'Cloud co-sell pipelines' },
    { pillar: 'Partnership & Ecosystem Discovery', name: 'Platform, Marketplace & Adjacency', question: 'Can we build inside an existing ecosystem — or do we need our own surface?', metric: 'Adjacency surface capture' },
    { pillar: 'Expansion & Launch Discovery', name: 'New Offering Discovery', question: 'What is the natural second product that existing buyers actively request?', metric: '≥60% price validation' },
    { pillar: 'Expansion & Launch Discovery', name: 'New Market Discovery', question: 'Which geography or segment can absorb our existing engine?', metric: 'Cross-border deployment' },
    { pillar: 'Expansion & Launch Discovery', name: 'New Channel Discovery', question: 'Where else do our buyers spend attention — and can we monetize it?', metric: 'Diversified CAC channels' },
    { pillar: 'Expansion & Launch Discovery', name: 'New Product Launch Discovery', question: 'How do we de-risk the launch before spending capital on build?', metric: '≥3x quota launch pipeline' }
  ];

  const realizationProtocol = [
    {
      step: '01',
      title: 'Baseline Capture',
      summary: 'Every capability starts by measuring the current number. No baseline, no engagement.',
      detail: 'Before redesigning pricing or pipeline flows, our architects audit your active discount rates, price realization, funnel stall rates, and customer margin. Mathematical certainty replaces conjecture.'
    },
    {
      step: '02',
      title: 'Locked Targets',
      summary: 'Targets written directly into the SOW — "recover 8 points of margin in 2 quarters", never "improve".',
      detail: 'Contracts lock explicit mathematical deliverables: "reduce discount variance by 35% in 180 days," "boost win rates against named rival by 18 points," or "achieve 94% forecast precision."'
    },
    {
      step: '03',
      title: 'Decision Authority',
      summary: 'Each capability ends with a named decision: enter/exit, price/hold, build/kill — backed by verified evidence.',
      detail: 'Executive leadership receives definitive dossiers with empirical support. Ambiguous consensus is replaced by clear, evidence-based commitments.'
    },
    {
      step: '04',
      title: 'Execution Engine',
      summary: 'Autonomous systems (agent fleets, propensity rescoring, telemetry guardrails) run 24/7.',
      detail: 'Strategic intelligence does not sit in a slide deck. Autonomous software agents score accounts nightly, CRM discount guardrails prevent deal leakage, and live telemetry loops monitor progression.'
    },
    {
      step: '05',
      title: 'Proof Cadence',
      summary: 'Monthly realization reviews against locked targets. If the needle is not moving, the engagement is re-scoped.',
      detail: 'Structured 30-day reporting cadences review actual margin and pipeline lift against SOW baselines. Performance attribution is tracked down to the individual account and contract.'
    },
    {
      step: '06',
      title: 'Exit State',
      summary: 'You keep the dashboards, the playbooks, the algorithmic models — and the numbers they produce.',
      detail: 'At engagement conclusion, client teams retain full ownership of the custom propensity models, CRM guardrails, competitive feeds, and continuous telemetry systems.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* ── SECTION 1: HERO ── */}
      <section className="relative pt-24 pb-20 sm:pt-32 sm:pb-28 bg-slate-950 text-white overflow-hidden">
        {/* Background Image with High-Contrast Dark Protective Overlays to guarantee 100% text readability */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <img
            src="/images/hero-profit-pool.png"
            alt="Profit Pool Background"
            className="w-full h-full object-cover object-center opacity-30 mix-blend-luminosity scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-slate-950" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/85" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(37,99,235,0.25),rgba(15,23,42,0.6))]" />
          <div className="absolute inset-0 bg-grid-white/[0.03] bg-[size:32px_32px]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 font-mono text-xs font-bold uppercase tracking-widest mb-6">
            <Compass className="w-3.5 h-3.5 text-blue-400" />
            <span>THE REVENUE DISCOVERY FRAMEWORK</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight font-heading mb-6 max-w-5xl leading-[1.12]">
            Four Discovery Pillars. Sixteen Capabilities.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-indigo-300">
              One Rule: Realization, Not Documentation.
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mb-10 leading-relaxed font-normal">
            Revenue stalls when discovery is fragmented. Our framework runs all sixteen discovery capabilities as one connected diagnostic — every capability ends in a measured baseline, a locked target, and a continuous optimization cycle.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <a
              href="#intake"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm tracking-wide shadow-lg shadow-blue-600/30 transition-all hover:-translate-y-0.5"
            >
              <span>Start Your Discovery Diagnostic</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <Link
              to="/book-consultation"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-slate-800/80 hover:bg-slate-800 text-slate-200 border border-slate-700 font-bold text-sm tracking-wide transition-all hover:-translate-y-0.5"
            >
              <span>Talk to a Principal Architect</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-16 pt-8 border-t border-slate-800/80">
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold font-mono text-white">16</div>
              <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mt-1">Discovery Capabilities</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold font-mono text-blue-400">4</div>
              <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mt-1">Discovery Pillars</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold font-mono text-emerald-400">5-15 pts</div>
              <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mt-1">Gross Margin Recovered</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold font-mono text-indigo-400">100%</div>
              <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mt-1">SOW-Locked Baselines</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 2: THE PROBLEM ── */}
      <section className="py-20 sm:py-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-red-600 uppercase tracking-widest mb-3">
              <ShieldAlert className="w-3.5 h-3.5" />
              <span>THE ROOT CAUSE OF REVENUE STALL</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading mb-4">
              Why Fragmented Discovery Fails
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Market sized in one deck, pricing guessed in another, channels untested, competitors watched but never dissected. In conventional consulting, discovery converts to static documents, not compounding revenue.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-red-50 text-red-600 flex items-center justify-center font-bold text-base mb-4 font-mono">
                01
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">TAM Disconnect</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Top-down market sizing creates false confidence. Aggregate TAM obscures the specific high-margin micro-segments where deals actually close profitably.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-red-50 text-red-600 flex items-center justify-center font-bold text-base mb-4 font-mono">
                02
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">Pricing by Habit</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Prices set by cost-plus habit or competitor imitation bleed margin on every transaction. Sales reps discount 30-50% to close deals because willingness-to-pay was never evidenced.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-red-50 text-red-600 flex items-center justify-center font-bold text-base mb-4 font-mono">
                03
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">Passive Competitor Intel</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Generic battlecards sit unread in sales drives. Without feature-by-feature loss telemetry, field reps lack objection-level positioning when it matters most.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-red-50 text-red-600 flex items-center justify-center font-bold text-base mb-4 font-mono">
                04
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">Unverified Product Expansion</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                New products and features launch based on executive optimism rather than pre-committed buyer purchase orders. R&D capital is drained without guaranteed demand.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 3: THE DISCOVERY THESIS ── */}
      <section className="py-20 sm:py-28 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 font-mono text-xs font-bold uppercase tracking-widest mb-4">
                <Layers className="w-3.5 h-3.5" />
                <span>DIAGNOSTIC THESIS</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading mb-6">
                The Revenue Discovery Framework
              </h2>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-6">
                ProfitMachines organizes revenue diagnostic science into <strong>4 Discovery Pillars</strong> containing <strong>16 Discovery Capabilities</strong>, executed through our disciplined <strong>Revenue Realization Process</strong>.
              </p>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-8">
                Every single capability begins with an audited empirical baseline, binds to measurable contractual targets in the SOW, and deploys continuous telemetry loops that run autonomously long after strategists finish the diagnostic sprint.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-blue-600 text-white flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Unified Architecture Over Isolated Point Audits</h4>
                    <p className="text-xs text-slate-600">All 16 capabilities cross-pollinate data. Demand signals update pricing guardrails, and customer usage telemetry informs expansion timing.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-blue-600 text-white flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">No Documentation Without Direct Execution</h4>
                    <p className="text-xs text-slate-600">Every finding translates directly into CRM discount floors, automated routing triggers, and field battlecards.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {discoveryPillars.map((pillar, idx) => {
                  const Icon = pillar.icon;
                  return (
                    <div
                      key={idx}
                      className="p-6 rounded-2xl bg-slate-900 text-white border border-slate-800 shadow-xl relative overflow-hidden group hover:border-blue-500/50 transition-all"
                    >
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-900/60 text-blue-300 font-bold uppercase tracking-wider">
                          {pillar.badge}
                        </span>
                        <Icon className="w-5 h-5 text-blue-400" />
                      </div>
                      <h3 className="text-lg font-bold mb-2 font-heading">{pillar.title}</h3>
                      <p className="text-xs text-slate-300 leading-relaxed mb-4">{pillar.descriptor}</p>
                      <div className="pt-3 border-t border-slate-800 text-xs font-mono text-blue-400 font-bold">
                        {pillar.count}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 4: INTERACTIVE CAPABILITY MATRIX ── */}
      <section className="py-20 sm:py-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-blue-600 uppercase tracking-widest mb-3">
              <Target className="w-3.5 h-3.5" />
              <span>INTERACTIVE CAPABILITY MATRIX</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading mb-4">
              The 16 Discovery Capabilities
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Select a capability to examine its sharp diagnostic question, baseline metric, and realization deliverable.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {capabilityMatrix.map((cap, i) => (
              <div
                key={i}
                className="p-5 rounded-xl bg-white border border-slate-200 hover:border-blue-400 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <span className="text-[10px] font-mono font-bold text-blue-600 uppercase tracking-wider block mb-1">
                    {cap.pillar}
                  </span>
                  <h4 className="text-sm font-bold text-slate-900 mb-2 font-heading">{cap.name}</h4>
                  <p className="text-xs text-slate-600 italic leading-snug mb-4">
                    "{cap.question}"
                  </p>
                </div>
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono text-slate-500">
                  <span className="font-semibold text-emerald-600">{cap.metric}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 5: CORE REVENUE DISCOVERY PILLARS (DEEP DIVE) ── */}
      <section className="py-20 sm:py-28 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-blue-600 uppercase tracking-widest mb-3">
              <Search className="w-3.5 h-3.5" />
              <span>CORE REVENUE DISCOVERY DEEP DIVE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading mb-4">
              Where Margin Concentrates & How We Defend It
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Five foundational capabilities engineering complete diagnostic clarity across micro-markets, demand channels, willingness-to-pay, competitive displacement, and expansion triggers.
            </p>
          </div>

          <div className="space-y-16">
            {/* CAPABILITY: MARKET & WHITESPACE */}
            <div id="market-whitespace" className="p-8 sm:p-12 rounded-3xl bg-slate-50 border border-slate-200 scroll-mt-28">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-slate-200 mb-8">
                <div>
                  <span className="text-xs font-mono font-bold text-blue-600 uppercase tracking-wider block mb-1">
                    Discovery Area A
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading">
                    Market & Whitespace Discovery
                  </h3>
                </div>
                <div className="px-4 py-2 rounded-xl bg-blue-100/70 border border-blue-200 text-blue-800 text-xs font-mono font-bold">
                  Defensibility Target: ≥85/100 Score
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="text-xs font-mono font-bold uppercase text-slate-400 tracking-wider mb-2">
                    The Sharp Question
                  </h4>
                  <p className="text-lg font-bold text-slate-900 mb-4">
                    Which micro-segment carries the margin — and can we defend it?
                  </p>

                  <h4 className="text-xs font-mono font-bold uppercase text-slate-400 tracking-wider mb-2">
                    The Problem We Solve
                  </h4>
                  <p className="text-sm text-slate-600 leading-relaxed mb-4">
                    Aggregated TAM models conceal unit-level margin destruction. Companies pursue broad customer cohorts where sales costs exceed lifetime gross revenue, while ignoring adjacent high-margin micro-segments.
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-mono font-bold uppercase text-slate-400 tracking-wider mb-2">
                    The Deliverable Architecture
                  </h4>
                  <ul className="space-y-2 text-sm text-slate-700">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span><strong>Micro-Market Discovery Dossier:</strong> Customer-level profit pool dissection.</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span><strong>Defensibility Scorecard:</strong> Structural advantage metrics vs. top 5 alternatives.</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span><strong>Entry/Exit Economics Model:</strong> Prescriptive capital allocation roadmap.</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-slate-200 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <span className="text-xs font-mono font-bold text-slate-500 uppercase">Quantified Target (KPI)</span>
                  <div className="text-xl font-extrabold text-blue-600 font-mono mt-1">100% TAM Dissected</div>
                  <p className="text-xs text-slate-500 mt-1">Named target micro-segment locked with confirmed contribution margin.</p>
                </div>
                <div>
                  <span className="text-xs font-mono font-bold text-slate-500 uppercase">Continuous Optimization Cycle</span>
                  <div className="text-sm font-semibold text-slate-800 mt-1">Quarterly Whitespace Rescanning</div>
                  <p className="text-xs text-slate-500 mt-1">Quarterly resource reallocation rebalancing marketing budgets toward defending the high-yield territory.</p>
                </div>
              </div>
            </div>

            {/* CAPABILITY: DEMAND & INTENT */}
            <div id="demand-intent" className="p-8 sm:p-12 rounded-3xl bg-slate-50 border border-slate-200 scroll-mt-28">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-slate-200 mb-8">
                <div>
                  <span className="text-xs font-mono font-bold text-blue-600 uppercase tracking-wider block mb-1">
                    Discovery Area B
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading">
                    Demand & Intent Discovery
                  </h3>
                </div>
                <div className="px-4 py-2 rounded-xl bg-indigo-100/70 border border-indigo-200 text-indigo-800 text-xs font-mono font-bold">
                  Stall Reduction: -50% Velocity Drain
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="text-xs font-mono font-bold uppercase text-slate-400 tracking-wider mb-2">
                    The Sharp Question
                  </h4>
                  <p className="text-lg font-bold text-slate-900 mb-4">
                    Where does the demand chain leak — and who is in-market right now?
                  </p>

                  <h4 className="text-xs font-mono font-bold uppercase text-slate-400 tracking-wider mb-2">
                    The Problem We Solve
                  </h4>
                  <p className="text-sm text-slate-600 leading-relaxed mb-4">
                    Marketing channels pass vanity MQLs that stall in AE pipelines for 90+ days. Disconnected systems conceal who has active buying intent versus passive research browsers.
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-mono font-bold uppercase text-slate-400 tracking-wider mb-2">
                    The Deliverable Architecture
                  </h4>
                  <ul className="space-y-2 text-sm text-slate-700">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span><strong>Demand Chain Diagnostic:</strong> Velocity telemetry from first impression to closed PO.</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span><strong>Propensity Scoring Engine:</strong> Nightly TAM scoring across deciles 1 through 10.</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span><strong>Channel Architecture Blueprint:</strong> Attribution telemetry isolating second demand engines.</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-slate-200 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <span className="text-xs font-mono font-bold text-slate-500 uppercase">Quantified Target (KPI)</span>
                  <div className="text-xl font-extrabold text-blue-600 font-mono mt-1">±10% Forecast Precision</div>
                  <p className="text-xs text-slate-500 mt-1">Stall rate reduced by 50% across mid-funnel evaluation stages.</p>
                </div>
                <div>
                  <span className="text-xs font-mono font-bold text-slate-500 uppercase">Continuous Optimization Cycle</span>
                  <div className="text-sm font-semibold text-slate-800 mt-1">Nightly Intent Routing & Telemetry</div>
                  <p className="text-xs text-slate-500 mt-1">Threshold alerts trigger proactive SDR routing whenever tier-1 accounts cross engagement milestones.</p>
                </div>
              </div>
            </div>

            {/* CAPABILITY: VALUE & ROI */}
            <div id="value-roi" className="p-8 sm:p-12 rounded-3xl bg-slate-50 border border-slate-200 scroll-mt-28">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-slate-200 mb-8">
                <div>
                  <span className="text-xs font-mono font-bold text-blue-600 uppercase tracking-wider block mb-1">
                    Discovery Area C
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading">
                    Value & ROI Discovery
                  </h3>
                </div>
                <div className="px-4 py-2 rounded-xl bg-emerald-100/70 border border-emerald-200 text-emerald-800 text-xs font-mono font-bold">
                  Margin Recovered: 5-15 Points
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="text-xs font-mono font-bold uppercase text-slate-400 tracking-wider mb-2">
                    The Sharp Question
                  </h4>
                  <p className="text-lg font-bold text-slate-900 mb-4">
                    What will buyers actually pay — and what does it truly cost to serve?
                  </p>

                  <h4 className="text-xs font-mono font-bold uppercase text-slate-400 tracking-wider mb-2">
                    The Problem We Solve
                  </h4>
                  <p className="text-sm text-slate-600 leading-relaxed mb-4">
                    Pricing is anchored to historical habits or arbitrary competitor tiers. Reps grant discretionary discounts without understanding the hidden engineering or support costs that destroy customer margin.
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-mono font-bold uppercase text-slate-400 tracking-wider mb-2">
                    The Deliverable Architecture
                  </h4>
                  <ul className="space-y-2 text-sm text-slate-700">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span><strong>Willingness-to-Pay Engine:</strong> Empirical buyer pricing thresholds by tier.</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span><strong>Offer & Revenue Architecture:</strong> Modular packaging eliminating unbilled customization.</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span><strong>Cost-to-Serve Audit Model:</strong> True gross margin calculation across accounts.</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-slate-200 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <span className="text-xs font-mono font-bold text-slate-500 uppercase">Quantified Target (KPI)</span>
                  <div className="text-xl font-extrabold text-blue-600 font-mono mt-1">≥92% Price Realization</div>
                  <p className="text-xs text-slate-500 mt-1">Discretionary discount rate reduced by 30-50% in 2 quarters.</p>
                </div>
                <div>
                  <span className="text-xs font-mono font-bold text-slate-500 uppercase">Continuous Optimization Cycle</span>
                  <div className="text-sm font-semibold text-slate-800 mt-1">Automated CRM Discount Floors</div>
                  <p className="text-xs text-slate-500 mt-1">Discount floors locked into quoting workflows with monthly realization reviews against locked targets.</p>
                </div>
              </div>
            </div>

            {/* CAPABILITY: COMPETITIVE DISPLACEMENT */}
            <div id="competitive" className="p-8 sm:p-12 rounded-3xl bg-slate-50 border border-slate-200 scroll-mt-28">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-slate-200 mb-8">
                <div>
                  <span className="text-xs font-mono font-bold text-blue-600 uppercase tracking-wider block mb-1">
                    Discovery Area D
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading">
                    Competitive Displacement Discovery
                  </h3>
                </div>
                <div className="px-4 py-2 rounded-xl bg-purple-100/70 border border-purple-200 text-purple-800 text-xs font-mono font-bold">
                  Win Rate Lift: +15-25%
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="text-xs font-mono font-bold uppercase text-slate-400 tracking-wider mb-2">
                    The Sharp Question
                  </h4>
                  <p className="text-lg font-bold text-slate-900 mb-4">
                    What exactly are we losing to — deal by deal, feature by feature?
                  </p>

                  <h4 className="text-xs font-mono font-bold uppercase text-slate-400 tracking-wider mb-2">
                    The Problem We Solve
                  </h4>
                  <p className="text-sm text-slate-600 leading-relaxed mb-4">
                    Loss notes in CRM say "lost to price" or "went with incumbent." In reality, buyers chose competitors due to specific architectural gaps or contract structure that reps were unequipped to counter.
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-mono font-bold uppercase text-slate-400 tracking-wider mb-2">
                    The Deliverable Architecture
                  </h4>
                  <ul className="space-y-2 text-sm text-slate-700">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span><strong>Competitor Teardown Dossiers:</strong> Structural weaknesses of top 5 rivals.</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span><strong>Live Competitive Battlecards:</strong> Field-tested objection positioning for reps.</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span><strong>Ecosystem & Rival Positioning Map:</strong> Structural advantages inside customer stacks.</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-slate-200 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <span className="text-xs font-mono font-bold text-slate-500 uppercase">Quantified Target (KPI)</span>
                  <div className="text-xl font-extrabold text-blue-600 font-mono mt-1">Detection &lt;10 Days</div>
                  <p className="text-xs text-slate-500 mt-1">Rival product or pricing shifts flagged and counter-positioned within 10 days.</p>
                </div>
                <div>
                  <span className="text-xs font-mono font-bold text-slate-500 uppercase">Continuous Optimization Cycle</span>
                  <div className="text-sm font-semibold text-slate-800 mt-1">Continuous Win/Loss Feedback Loops</div>
                  <p className="text-xs text-slate-500 mt-1">Bi-weekly deal loss forensics feeding directly into objection handling and battlecard updates.</p>
                </div>
              </div>
            </div>

            {/* CAPABILITY: PRODUCT-MARKET FIT */}
            <div id="pmf" className="p-8 sm:p-12 rounded-3xl bg-slate-50 border border-slate-200 scroll-mt-28">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-slate-200 mb-8">
                <div>
                  <span className="text-xs font-mono font-bold text-blue-600 uppercase tracking-wider block mb-1">
                    Discovery Area E
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading">
                    Product-Market Fit & Expansion Discovery
                  </h3>
                </div>
                <div className="px-4 py-2 rounded-xl bg-amber-100/70 border border-amber-200 text-amber-800 text-xs font-mono font-bold">
                  Conversion Boost: +30-50%
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="text-xs font-mono font-bold uppercase text-slate-400 tracking-wider mb-2">
                    The Sharp Question
                  </h4>
                  <p className="text-lg font-bold text-slate-900 mb-4">
                    Which behaviors predict paid conversion — and what should we build next?
                  </p>

                  <h4 className="text-xs font-mono font-bold uppercase text-slate-400 tracking-wider mb-2">
                    The Problem We Solve
                  </h4>
                  <p className="text-sm text-slate-600 leading-relaxed mb-4">
                    High free user volume fails to convert into recurring enterprise revenue. New feature releases drain engineering roadmap bandwidth without pre-validated willingness-to-pay.
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-mono font-bold uppercase text-slate-400 tracking-wider mb-2">
                    The Deliverable Architecture
                  </h4>
                  <ul className="space-y-2 text-sm text-slate-700">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span><strong>Usage-to-Revenue Triggers:</strong> Behavioral milestones that correlate with expansion.</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span><strong>New Offering Validation Dossier:</strong> Pre-committed purchase order confirmations.</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span><strong>Launch Command Telemetry:</strong> GTM tracking framework verifying adoption velocity.</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-slate-200 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <span className="text-xs font-mono font-bold text-slate-500 uppercase">Quantified Target (KPI)</span>
                  <div className="text-xl font-extrabold text-blue-600 font-mono mt-1">≥60% Price Validation</div>
                  <p className="text-xs text-slate-500 mt-1">Validated buyer commitments prior to committing full production code.</p>
                </div>
                <div>
                  <span className="text-xs font-mono font-bold text-slate-500 uppercase">Continuous Optimization Cycle</span>
                  <div className="text-sm font-semibold text-slate-800 mt-1">Automated Upgrade Playbooks</div>
                  <p className="text-xs text-slate-500 mt-1">Usage threshold crossings trigger targeted expansion sequences to account owners automatically.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 6: THE REVENUE REALIZATION PROCESS ── */}
      <section className="py-20 sm:py-28 bg-slate-900 text-white border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 font-mono text-xs font-bold uppercase tracking-widest mb-4">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>THE REVENUE REALIZATION PROCESS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-heading mb-4 text-white">
              How Discovery Converts to Measurable Revenue
            </h2>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              Conventional consulting ends with a presentation. ProfitMachines enforces a six-stage realization protocol that guarantees every diagnostic finding is operationalized and measured against contracted financial targets.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {realizationProtocol.map((item, idx) => (
              <div
                key={idx}
                className="p-8 rounded-2xl bg-slate-800/80 border border-slate-700/80 hover:border-blue-500/50 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="text-2xl font-mono font-extrabold text-blue-400 mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 font-heading">{item.title}</h3>
                  <p className="text-xs font-mono text-slate-300 font-semibold mb-3">{item.summary}</p>
                  <p className="text-sm text-slate-400 leading-relaxed">{item.detail}</p>
                </div>
                <div className="pt-4 mt-6 border-t border-slate-700/60 flex items-center gap-2 text-xs font-mono text-emerald-400">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>Enforced via SOW Terms</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COMPLETE CAPABILITY ARCHITECTURE REFERENCE TABLE ── */}
      <section className="py-20 sm:py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-blue-600 uppercase tracking-widest mb-3">
              <Compass className="w-3.5 h-3.5" />
              <span>ARCHITECTURAL REFERENCE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading mb-4">
              The Complete Capability Architecture Matrix
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              The sixteen interconnected diagnostic capabilities that govern our revenue acceleration engagements.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
            <table className="w-full text-left text-sm text-slate-700">
              <thead className="bg-slate-50 border-b border-slate-200 text-xs font-mono uppercase text-slate-500 tracking-wider">
                <tr>
                  <th className="py-4 px-6">Discovery Pillar</th>
                  <th className="py-4 px-6">Discovery Capability</th>
                  <th className="py-4 px-6">Sharp Diagnostic Question</th>
                  <th className="py-4 px-6">Realized Output Metric</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {capabilityMatrix.map((item, index) => (
                  <tr key={index} className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-3.5 px-6 font-mono text-xs font-bold text-slate-500">{item.pillar}</td>
                    <td className="py-3.5 px-6 font-bold text-slate-900">{item.name}</td>
                    <td className="py-3.5 px-6 text-slate-600 italic">"{item.question}"</td>
                    <td className="py-3.5 px-6 font-mono text-xs font-semibold text-emerald-600">{item.metric}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── SECTION 8: FINAL CTA & INTAKE ── */}
      <section id="intake" className="py-20 sm:py-28 bg-slate-50 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 font-mono text-xs font-bold uppercase tracking-widest mb-4">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>DISCOVERY DIAGNOSTIC INTAKE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight font-heading mb-4">
            Ready to Replace Fragmented Discovery with Measured Realization?
          </h2>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto font-normal">
            Baseline your profit pools, eliminate margin leakage, and establish contractual revenue certainty with our Principal Revenue Architects.
          </p>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <OfferingsIntakeForm
            pageContext="Profit Pool Discovery Diagnostic"
            defaultObjective="Profit Pool Discovery"
          />
        </div>
      </section>
    </div>
  );
}
