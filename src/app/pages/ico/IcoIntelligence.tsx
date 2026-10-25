import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Search,
  ArrowRight,
  Sparkles,
  Target,
  Users,
  ShieldCheck,
  CheckCircle2,
  BarChart3,
  TrendingUp,
  FileText,
  Activity,
  Cpu,
  Coins,
  ChevronRight,
  ArrowUpRight,
  Clock,
  Radar,
  FileSpreadsheet,
  Layers,
  MessageSquare,
  AlertCircle,
  HelpCircle,
  Briefcase
} from 'lucide-react';

export default function IcoIntelligence() {
  const location = useLocation();

  // Handle in-page smooth hash scrolling on load or change
  useEffect(() => {
    document.title = 'Intelligence & Market Strategy | ProfitMachines Crypto Protocol';
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
  }, [location.hash]);

  const deliverablesCards = [
    {
      title: 'Market Readiness',
      deliverable: 'Market Validation Report & Prioritized Recommendations',
      description: 'Comprehensive assessment of target opportunity, competitor mapping, audience profiles, and launch-readiness criteria.',
      icon: Search,
      badge: 'Submenu 01'
    },
    {
      title: 'Narrative Readiness',
      deliverable: 'Token Narrative & Messaging Framework',
      description: 'Unified one-sentence narrative, utility documentation, communication brief, and risk & claims review.',
      icon: Sparkles,
      badge: 'Submenu 02'
    },
    {
      title: 'Demand Intelligence',
      deliverable: 'Audience Segments & Demand Discovery Report',
      description: 'Empirical audience segmentation, community discussions, channel mapping, and message testing hypotheses.',
      icon: Target,
      badge: 'Submenu 04'
    },
    {
      title: 'Competitive Intelligence',
      deliverable: 'Competitive Comparison Matrix & Differentiation Framework',
      description: 'Systematic comparison of comparable protocols, feature matrix, verified differentiation, and positioning guidance.',
      icon: Radar,
      badge: 'Submenu 06'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50/50 text-slate-900 pt-16 lg:pt-[72px]">
      {/* ── HERO SECTION (MATCHES OFFERINGS / ENGAGEMENT PATTERN) ── */}
      <section className="relative bg-slate-950 text-white py-16 lg:py-24 overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=2000&q=80"
            alt="Crypto Intelligence & Market Strategy"
            className="w-full h-full object-cover object-center opacity-40 mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/75 to-slate-900/60" />
          <div className="absolute inset-0 bg-radial-at-t from-blue-950/40 via-transparent to-transparent pointer-events-none" />
        </div>

        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/20 border border-blue-400/40 text-blue-300 text-xs font-semibold uppercase tracking-wider mb-6 font-mono shadow-sm">
                <Search className="w-3.5 h-3.5 text-blue-400" />
                <span>Page 01 · Intelligence & Market Strategy</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.08] mb-6">
                Intelligence & <span className="text-blue-400">Market Strategy</span>
              </h1>

              <div className="text-lg sm:text-xl text-blue-200/90 font-medium mb-4 leading-relaxed max-w-3xl">
                Build an evidence-based foundation for your Web3 launch through market validation, tokenomics positioning, demand discovery, and competitive intelligence.
              </div>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal mb-8 max-w-3xl">
                ProfitMachines helps Web3 teams understand their market, identify their audience, clarify their value proposition, and prepare a stronger foundation for launch. The Intelligence page brings together research, strategic positioning, product validation, and community insights to support informed decisions before major launch investments.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  to="/book-consultation"
                  className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold px-8 py-4 rounded-xl transition-all shadow-lg border border-blue-400/40 text-sm sm:text-base group"
                >
                  <span>Request Intelligence Diagnostic</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  to="/ico-acceleration/launch-growth"
                  className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold px-8 py-4 rounded-xl transition-all text-sm sm:text-base border border-white/30 backdrop-blur-sm shadow-md"
                >
                  <span>Explore Launch & Growth</span>
                </Link>
              </div>
            </div>

            {/* Right Architectural Preview Card */}
            <div className="lg:col-span-4">
              <div className="bg-slate-900/90 text-white rounded-3xl overflow-hidden shadow-2xl border border-slate-800 relative">
                <div className="h-44 w-full relative overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
                    alt="Market Strategy"
                    className="w-full h-full object-cover opacity-60"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-blue-400 font-bold bg-slate-900/80 px-2.5 py-1 rounded-md border border-slate-700">
                      Layer 0 & 1 Intelligence
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-[11px] font-mono text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-800/60">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                      Verified Gating
                    </span>
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <div className="text-xs text-slate-300 font-medium leading-relaxed">
                    Quantitative pre-launch validation assessing real liquidity demand, positioning boundaries, and competitive differentiation.
                  </div>

                  <div className="grid grid-cols-2 gap-3 pt-2 border-t border-slate-800">
                    <div className="p-3 rounded-xl bg-slate-800/60 border border-slate-700/60">
                      <div className="text-lg font-black text-white font-mono">6 Submenus</div>
                      <div className="text-[11px] text-slate-400">Research modules</div>
                    </div>
                    <div className="p-3 rounded-xl bg-slate-800/60 border border-slate-700/60">
                      <div className="text-lg font-black text-white font-mono">4 Reports</div>
                      <div className="text-[11px] text-slate-400">Audit-grade outputs</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── MAIN CONTENT ── */}
      <main className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 space-y-16 lg:space-y-24">
            
            {/* ── SUBMENU 1: MARKET VALIDATION INTELLIGENCE ── */}
            <section id="market-validation" className="scroll-mt-28 bg-white rounded-3xl border border-slate-200/90 p-8 sm:p-10 shadow-xs">
              <div className="max-w-3xl mb-8">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600 block mb-2">
                  Submenu 01 · Pre-Launch Validation
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
                  Market Validation Intelligence
                </h2>
                <div className="text-sm font-bold text-slate-700 uppercase tracking-wide mb-2">
                  Purpose: Understand the market opportunity before committing significant resources.
                </div>
                <p className="text-base text-slate-600 leading-relaxed font-normal">
                  Launching into an unvalidated market is the single highest cause of post-TGE treasury impairment. We run quantitative validation diagnostics to benchmark readiness against active macroeconomic and regulatory conditions.
                </p>
              </div>

              {/* 5 Core Pillars */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-slate-50/80 rounded-2xl border border-slate-200/80 p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 rounded-xl bg-blue-100 flex items-center justify-center text-blue-700 font-bold text-xs font-mono">
                      01
                    </div>
                    <h3 className="text-lg font-extrabold text-slate-900 tracking-tight">Market Opportunity Assessment</h3>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Define the core problem, target audience, market segment, and potential demand under current Web3 liquidity conditions.
                  </p>
                </div>

                <div className="bg-slate-50/80 rounded-2xl border border-slate-200/80 p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 rounded-xl bg-blue-100 flex items-center justify-center text-blue-700 font-bold text-xs font-mono">
                      02
                    </div>
                    <h3 className="text-lg font-extrabold text-slate-900 tracking-tight">Competitor Mapping</h3>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Identify comparable protocols, competing solutions, positioning differences, and unaddressed market gaps.
                  </p>
                </div>

                <div className="bg-slate-50/80 rounded-2xl border border-slate-200/80 p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 rounded-xl bg-blue-100 flex items-center justify-center text-blue-700 font-bold text-xs font-mono">
                      03
                    </div>
                    <h3 className="text-lg font-extrabold text-slate-900 tracking-tight">Audience Validation</h3>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Understand user needs, adoption barriers, developer requirements, and relevant community sub-segments.
                  </p>
                </div>

                <div className="bg-slate-50/80 rounded-2xl border border-slate-200/80 p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 rounded-xl bg-blue-100 flex items-center justify-center text-blue-700 font-bold text-xs font-mono">
                      04
                    </div>
                    <h3 className="text-lg font-extrabold text-slate-900 tracking-tight">Launch Readiness Assessment</h3>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Audit gaps in positioning, product readiness, audience understanding, and launch preparation against 100-point gating criteria.
                  </p>
                </div>

                <div className="md:col-span-2 bg-slate-50/80 rounded-2xl border border-slate-200/80 p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 rounded-xl bg-blue-100 flex items-center justify-center text-blue-700 font-bold text-xs font-mono">
                      05
                    </div>
                    <h3 className="text-lg font-extrabold text-slate-900 tracking-tight">Strategic Recommendations</h3>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Convert research findings into actionable priorities, Go/No-Go milestones, and an optimal TGE execution window.
                  </p>
                </div>
              </div>

              {/* Output Deliverable Card */}
              <div className="bg-blue-50/70 border border-blue-200/90 rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <div className="text-xs font-mono font-bold uppercase tracking-wider text-blue-700 mb-1">
                    Suggested Output Artifact
                  </div>
                  <div className="text-base font-extrabold text-slate-900">
                    Market Validation Report, Competitor Map, Audience Profile & Prioritized Recommendations
                  </div>
                </div>
                <Link
                  to="/book-consultation"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-700 hover:text-blue-800 bg-white px-4 py-2.5 rounded-xl border border-blue-200 shadow-xs shrink-0"
                >
                  <span>Request Assessment</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </section>

            {/* ── SUBMENU 2: TOKENOMICS & NARRATIVE STUDIO ── */}
            <section id="tokenomics-narrative" className="scroll-mt-28 bg-white rounded-3xl border border-slate-200/90 p-8 sm:p-10 shadow-xs">
              <div className="max-w-3xl mb-8">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600 block mb-2">
                  Submenu 02 · Narrative & Economics
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
                  Tokenomics & Narrative Studio
                </h2>
                <div className="text-sm font-bold text-slate-700 uppercase tracking-wide mb-2">
                  Purpose: Align token utility, project positioning, and communication.
                </div>
                <p className="text-base text-slate-600 leading-relaxed font-normal">
                  A tokenomics model without a crisp, memorable narrative fails to capture attention. A compelling story without sustainable token mechanics fails to retain capital. We unite both into a unified communication framework.
                </p>
              </div>

              <div className="space-y-4 mb-8">
                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center text-blue-700 shrink-0 mt-0.5">
                    <Coins className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-extrabold text-slate-900 mb-1">Token Utility Mapping</h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      Explain the intended function and utility of the token within the ecosystem across governance, fee discounts, staking, and network security.
                    </p>
                  </div>
                </div>

                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center text-blue-700 shrink-0 mt-0.5">
                    <BarChart3 className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-extrabold text-slate-900 mb-1">Tokenomics Communication</h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      Present token supply, allocation, vesting, and distribution information accurately and transparently without ambiguous jargon.
                    </p>
                  </div>
                </div>

                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center text-blue-700 shrink-0 mt-0.5">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-extrabold text-slate-900 mb-1">Project Narrative</h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      Develop a clear, persuasive explanation of the core problem, cryptographic solution, sustainable differentiation, and broader ecosystem value.
                    </p>
                  </div>
                </div>

                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center text-blue-700 shrink-0 mt-0.5">
                    <FileText className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-extrabold text-slate-900 mb-1">Messaging Framework</h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      Create consistent messages for the website, community channels, partners, and launch campaigns to ensure zero narrative drift.
                    </p>
                  </div>
                </div>

                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center text-amber-700 shrink-0 mt-0.5">
                    <AlertCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-extrabold text-slate-900 mb-1">Risk and Claims Review</h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      Identify unsupported statements and avoid misleading token-related claims. In strict adherence to compliance rules, we do not invent token allocations, tokenomics parameters, returns, or investment projections.
                    </p>
                  </div>
                </div>
              </div>

              {/* Output Deliverable Box */}
              <div className="bg-blue-50/70 border border-blue-200/90 rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <div className="text-xs font-mono font-bold uppercase tracking-wider text-blue-700 mb-1">
                    Suggested Output Artifact
                  </div>
                  <div className="text-base font-extrabold text-slate-900">
                    Token Narrative Document, Messaging Framework & Tokenomics Communication Brief
                  </div>
                </div>
                <Link
                  to="/book-consultation"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-700 hover:text-blue-800 bg-white px-4 py-2.5 rounded-xl border border-blue-200 shadow-xs shrink-0"
                >
                  <span>Build Narrative Studio</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </section>

            {/* ── SUBMENU 3: STARTUP MVP ACCELERATION ENGINE ── */}
            <section id="mvp-acceleration" className="scroll-mt-28 bg-white rounded-3xl border border-slate-200/90 p-8 sm:p-10 shadow-xs">
              <div className="max-w-3xl mb-8">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600 block mb-2">
                  Submenu 03 · Idea to Testnet
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
                  Startup MVP Acceleration Engine
                </h2>
                <div className="text-sm font-bold text-slate-700 uppercase tracking-wide mb-2">
                  Purpose: Help early-stage Web3 teams turn their core idea into a testable product direction.
                </div>
                <p className="text-base text-slate-600 leading-relaxed font-normal">
                  Designed for pre-TGE teams navigating product-market fit. We clarify scope, validate assumptions with early adopters, and align milestones for testnet and investor diligence.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-slate-50/80 rounded-2xl border border-slate-200/80 p-6">
                  <div className="text-xs font-mono font-bold text-blue-600 uppercase mb-2">Phase 01</div>
                  <h3 className="text-lg font-extrabold text-slate-900 mb-2">Problem Definition</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Identify the primary user problem, friction points, and the intended cryptographic or operational outcome.
                  </p>
                </div>

                <div className="bg-slate-50/80 rounded-2xl border border-slate-200/80 p-6">
                  <div className="text-xs font-mono font-bold text-blue-600 uppercase mb-2">Phase 02</div>
                  <h3 className="text-lg font-extrabold text-slate-900 mb-2">MVP Scope</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Separate essential launch features from later enhancements to accelerate time-to-testnet and preserve runway.
                  </p>
                </div>

                <div className="bg-slate-50/80 rounded-2xl border border-slate-200/80 p-6">
                  <div className="text-xs font-mono font-bold text-blue-600 uppercase mb-2">Phase 03</div>
                  <h3 className="text-lg font-extrabold text-slate-900 mb-2">User Journey Mapping</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Define the key steps a user or developer takes through wallet connection, contract interaction, and daily utility.
                  </p>
                </div>

                <div className="bg-slate-50/80 rounded-2xl border border-slate-200/80 p-6">
                  <div className="text-xs font-mono font-bold text-blue-600 uppercase mb-2">Phase 04</div>
                  <h3 className="text-lg font-extrabold text-slate-900 mb-2">Validation Milestones</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Establish measurable milestones for testing assumptions, tracking testnet faucet usage, and developer repo forks.
                  </p>
                </div>

                <div className="md:col-span-2 bg-slate-50/80 rounded-2xl border border-slate-200/80 p-6">
                  <div className="text-xs font-mono font-bold text-blue-600 uppercase mb-2">Phase 05</div>
                  <h3 className="text-lg font-extrabold text-slate-900 mb-2">Iteration Planning</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Use feedback and product observations to guide improvements prior to public token launch.
                  </p>
                </div>
              </div>

              {/* Output Deliverable Box */}
              <div className="bg-blue-50/70 border border-blue-200/90 rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <div className="text-xs font-mono font-bold uppercase tracking-wider text-blue-700 mb-1">
                    Suggested Output Artifact
                  </div>
                  <div className="text-base font-extrabold text-slate-900">
                    MVP Scope Document, User Journey, Validation Checklist & Milestone Plan
                  </div>
                </div>
                <Link
                  to="/ico-acceleration/solutions-engagement#model-5"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-700 hover:text-blue-800 bg-white px-4 py-2.5 rounded-xl border border-blue-200 shadow-xs shrink-0"
                >
                  <span>Explore Model 5 Blueprint</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </section>

            {/* ── SUBMENU 4: CRYPTO DEMAND DISCOVERY ENGINE ── */}
            <section id="demand-discovery" className="scroll-mt-28 bg-white rounded-3xl border border-slate-200/90 p-8 sm:p-10 shadow-xs">
              <div className="max-w-3xl mb-8">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600 block mb-2">
                  Submenu 04 · On-Chain & Market Intent
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
                  Crypto Demand Discovery Engine
                </h2>
                <div className="text-sm font-bold text-slate-700 uppercase tracking-wide mb-2">
                  Purpose: Identify where relevant users are located and what motivates them to engage.
                </div>
                <p className="text-base text-slate-600 leading-relaxed font-normal">
                  Authentic Web3 demand is not measured in website pageviews—it lives on-chain and within active communities. We map real engagement signals to identify high-intent cohorts before launch capital is deployed.
                </p>
              </div>

              <div className="space-y-4 mb-8">
                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center text-blue-700 shrink-0 mt-0.5">
                    <Users className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-extrabold text-slate-900 mb-1">Audience Segmentation</h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      Define distinct user groups according to interests, technical needs, holding behavior, staking habits, and protocol use cases.
                    </p>
                  </div>
                </div>

                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center text-blue-700 shrink-0 mt-0.5">
                    <Activity className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-extrabold text-slate-900 mb-1">Demand Signals</h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      Examine relevant community discussions, testnet feedback, validator requests, and on-chain liquidity activity.
                    </p>
                  </div>
                </div>

                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center text-blue-700 shrink-0 mt-0.5">
                    <Target className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-extrabold text-slate-900 mb-1">Channel Discovery</h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      Identify high-affinity Discord servers, Telegram groups, X discussion circles, and developer forums where relevant participants congregate.
                    </p>
                  </div>
                </div>

                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center text-blue-700 shrink-0 mt-0.5">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-extrabold text-slate-900 mb-1">Message Testing</h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      Compare messaging approaches using controlled campaign experiments, organic community polls, and content testbeds.
                    </p>
                  </div>
                </div>

                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center text-blue-700 shrink-0 mt-0.5">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-extrabold text-slate-900 mb-1">Demand Insights</h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      Summarize empirical findings and recommend prioritized marketing channels and messaging angles for the launch sprint.
                    </p>
                  </div>
                </div>
              </div>

              {/* Output Deliverable Box */}
              <div className="bg-blue-50/70 border border-blue-200/90 rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <div className="text-xs font-mono font-bold uppercase tracking-wider text-blue-700 mb-1">
                    Suggested Output Artifact
                  </div>
                  <div className="text-base font-extrabold text-slate-900">
                    Audience Segments, Channel Map, Message Hypotheses & Demand Discovery Report
                  </div>
                </div>
                <Link
                  to="/book-consultation"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-700 hover:text-blue-800 bg-white px-4 py-2.5 rounded-xl border border-blue-200 shadow-xs shrink-0"
                >
                  <span>Request Demand Discovery</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </section>

            {/* ── SUBMENU 5: COMMUNITY SIGNAL COMMAND CENTER ── */}
            <section id="community-signals" className="scroll-mt-28 bg-white rounded-3xl border border-slate-200/90 p-8 sm:p-10 shadow-xs">
              <div className="max-w-3xl mb-8">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600 block mb-2">
                  Submenu 05 · Community Intelligence
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
                  Community Signal Command Center
                </h2>
                <div className="text-sm font-bold text-slate-700 uppercase tracking-wide mb-2">
                  Purpose: Organize community feedback into useful insights for marketing and product decisions.
                </div>
                <p className="text-base text-slate-600 leading-relaxed font-normal">
                  Move beyond vanity member counts. Using aggregate insights and privacy-compliant monitoring, we distill organic sentiment, recurring friction points, and product questions across Telegram, Discord, and X.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-slate-50/80 rounded-2xl border border-slate-200/80 p-6">
                  <h3 className="text-lg font-extrabold text-slate-900 mb-2">Community Monitoring</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Review relevant discussions, developer chat channels, and recurring community questions across approved project spaces.
                  </p>
                </div>

                <div className="bg-slate-50/80 rounded-2xl border border-slate-200/80 p-6">
                  <h3 className="text-lg font-extrabold text-slate-900 mb-2">Sentiment Themes</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Categorize feedback into positive themes, user concerns, technical inquiries, and emerging operational bottlenecks.
                  </p>
                </div>

                <div className="bg-slate-50/80 rounded-2xl border border-slate-200/80 p-6">
                  <h3 className="text-lg font-extrabold text-slate-900 mb-2">FAQ Discovery</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Identify the most common questions, terminology confusion, and documentation gaps requiring clarification.
                  </p>
                </div>

                <div className="bg-slate-50/80 rounded-2xl border border-slate-200/80 p-6">
                  <h3 className="text-lg font-extrabold text-slate-900 mb-2">Engagement Opportunities</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Find timely topics suitable for founder AMAs, technical deep-dives, developer bounties, and community education.
                  </p>
                </div>

                <div className="md:col-span-2 bg-slate-50/80 rounded-2xl border border-slate-200/80 p-6">
                  <h3 className="text-lg font-extrabold text-slate-900 mb-2">Feedback Reporting</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Produce structured summaries for the marketing, product, and leadership teams to rapidly address sentiment trends.
                  </p>
                </div>
              </div>

              {/* Output Deliverable Box */}
              <div className="bg-blue-50/70 border border-blue-200/90 rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <div className="text-xs font-mono font-bold uppercase tracking-wider text-blue-700 mb-1">
                    Suggested Output Artifact
                  </div>
                  <div className="text-base font-extrabold text-slate-900">
                    Community Insights Report, Master FAQ List & Engagement Recommendations
                  </div>
                </div>
                <Link
                  to="/book-consultation"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-700 hover:text-blue-800 bg-white px-4 py-2.5 rounded-xl border border-blue-200 shadow-xs shrink-0"
                >
                  <span>Setup Signal Center</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </section>

            {/* ── SUBMENU 6: COMPETITIVE DISPLACEMENT RADAR ── */}
            <section id="competitive-radar" className="scroll-mt-28 bg-white rounded-3xl border border-slate-200/90 p-8 sm:p-10 shadow-xs">
              <div className="max-w-3xl mb-8">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600 block mb-2">
                  Submenu 06 · Strategic Differentiation
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
                  Competitive Displacement Radar
                </h2>
                <div className="text-sm font-bold text-slate-700 uppercase tracking-wide mb-2">
                  Purpose: Identify opportunities to differentiate the project from alternative solutions.
                </div>
                <p className="text-base text-slate-600 leading-relaxed font-normal">
                  Pinpoint competitor limitations, community dissatisfaction, and migration opportunities to position your protocol on verified technical superiority and clear economic alignment.
                </p>
              </div>

              <div className="space-y-4 mb-8">
                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center text-blue-700 shrink-0 mt-0.5">
                    <Radar className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-extrabold text-slate-900 mb-1">Competitive Landscape</h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      Identify relevant direct alternatives, comparable protocols, and adjacent ecosystems competing for the same user liquidity.
                    </p>
                  </div>
                </div>

                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center text-blue-700 shrink-0 mt-0.5">
                    <FileSpreadsheet className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-extrabold text-slate-900 mb-1">Feature Comparison</h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      Compare documented throughput, gas models, tokenomics, developer SDKs, and security architecture against market standards.
                    </p>
                  </div>
                </div>

                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center text-blue-700 shrink-0 mt-0.5">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-extrabold text-slate-900 mb-1">Differentiation Mapping</h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      Articulate the project's verified strengths, intended market niche, and sustainable competitive moat.
                    </p>
                  </div>
                </div>

                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center text-blue-700 shrink-0 mt-0.5">
                    <FileText className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-extrabold text-slate-900 mb-1">Competitive Messaging</h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      Create evidence-based messaging and battlecards that communicate meaningful, verified technical differences to users and investors.
                    </p>
                  </div>
                </div>

                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center text-blue-700 shrink-0 mt-0.5">
                    <Target className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-extrabold text-slate-900 mb-1">Opportunity Prioritization</h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      Recommend specific tactical areas where the project can rapidly gain market share and win developer adoption.
                    </p>
                  </div>
                </div>
              </div>

              {/* Output Deliverable Box */}
              <div className="bg-blue-50/70 border border-blue-200/90 rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <div className="text-xs font-mono font-bold uppercase tracking-wider text-blue-700 mb-1">
                    Suggested Output Artifact
                  </div>
                  <div className="text-base font-extrabold text-slate-900">
                    Competitive Comparison Matrix, Differentiation Framework & Messaging Recommendations
                  </div>
                </div>
                <Link
                  to="/book-consultation"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-700 hover:text-blue-800 bg-white px-4 py-2.5 rounded-xl border border-blue-200 shadow-xs shrink-0"
                >
                  <span>Build Radar Matrix</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </section>

            {/* ── INTELLIGENCE DELIVERABLES SYNTHESIS & NEXT PAGE CTA ── */}
            <section className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 border border-slate-800 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-80 h-80 bg-radial from-blue-600/20 to-transparent pointer-events-none" />
              
              <div className="max-w-3xl mb-10 relative z-10">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-400 bg-slate-800/80 px-3 py-1 rounded-full border border-slate-700 inline-block mb-4">
                  Synthesis & Deliverables
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-3">
                  Summary of Intelligence Deliverables
                </h3>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  Every intelligence engagement produces four concrete, evidence-backed deliverables to remove guesswork from your launch timeline.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10 relative z-10">
                {deliverablesCards.map((d, idx) => {
                  const Icon = d.icon;
                  return (
                    <div
                      key={idx}
                      className="bg-slate-800/70 rounded-2xl border border-slate-700/80 p-6 flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-3">
                          <div className="w-10 h-10 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center">
                            <Icon className="w-5 h-5" />
                          </div>
                          <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-blue-300 bg-blue-900/60 px-2 py-0.5 rounded border border-blue-700/60">
                            {d.badge}
                          </span>
                        </div>
                        <h4 className="text-lg font-bold text-white mb-1">{d.title}</h4>
                        <div className="text-xs font-semibold text-blue-300 mb-2">{d.deliverable}</div>
                        <p className="text-xs text-slate-300 leading-relaxed">{d.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6 relative z-10">
                <div>
                  <div className="text-lg font-bold text-white">Next Step: Launch & Growth Acceleration</div>
                  <div className="text-xs text-slate-400">Review execution engines, creator orchestration, and the 7-phase launch playbook.</div>
                </div>
                <Link
                  to="/ico-acceleration/launch-growth"
                  className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold px-7 py-3.5 rounded-xl transition-all shadow-md text-sm border border-blue-400/40 group shrink-0"
                >
                  <span>Explore Launch & Growth</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </section>

      </main>
    </div>
  );
}
