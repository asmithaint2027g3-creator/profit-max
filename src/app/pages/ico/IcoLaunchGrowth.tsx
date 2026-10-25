import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Rocket,
  ArrowRight,
  TrendingUp,
  Users,
  Building2,
  Gift,
  BarChart3,
  Coins,
  Cpu,
  Compass,
  CheckCircle2,
  Calendar,
  Layers,
  ShieldCheck,
  ChevronRight,
  Zap,
  Activity,
  Network,
  Clock,
  Briefcase,
  Sliders,
  DollarSign,
  AlertTriangle,
  FileText,
  Workflow,
  Sparkles,
  ArrowUpRight
} from 'lucide-react';

export default function IcoLaunchGrowth() {
  const location = useLocation();
  const [activePhaseTab, setActivePhaseTab] = useState<number>(0);

  useEffect(() => {
    document.title = 'Launch & Growth Acceleration | ProfitMachines Crypto Protocol';
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

  const playbookPhases = [
    {
      phaseNumber: '01',
      name: 'Foundation & Strategy',
      timeframe: 'T-16 to T-12 Weeks',
      objective: 'Validate positioning, objectives, tokenomics communication, and launch requirements before deploying capital.',
      actions: [
        'Comprehensive tokenomics audit and circulating float distribution modeling',
        'Jurisdictional marketing review (MiCA / VARA / ASCI promotional boundaries)',
        'Core project narrative finalization and audience value proposition clarity',
        'Core documentation roadmap and smart contract security verification'
      ],
      dependencies: 'Completed market validation report and legal counsel engagement',
      deliverables: 'Launch roadmap blueprint, token narrative framework, and compliance intake log.'
    },
    {
      phaseNumber: '02',
      name: 'Product & Narrative Readiness',
      timeframe: 'T-12 to T-8 Weeks',
      objective: 'Prepare core product messaging, user onboarding journeys, and developer documentation.',
      actions: [
        'Interactive litepaper, technical documentation, and testnet tutorials publication',
        'Developer onboarding SDKs and faucet infrastructure optimization',
        'Website conversion funnel optimization and messaging consistency audit',
        'Seed/private investor narrative alignment and tokenomics disclosure kit'
      ],
      dependencies: 'Finalized token utility architecture and testnet stability',
      deliverables: 'Public documentation hub, user journey maps, and investor briefing pack.'
    },
    {
      phaseNumber: '03',
      name: 'Community Foundation',
      timeframe: 'T-8 to T-5 Weeks',
      objective: 'Organize official community channels, FAQs, and engagement planning with strict anti-bot filtration.',
      actions: [
        'Discord and Telegram server architecture with bot-filtering and role gating',
        'Community moderation protocol onboarding and 24/7 global coverage setup',
        'Core community FAQ list and educational content series publication',
        'Organic early adopter bounties and developer feedback incentives'
      ],
      dependencies: 'Documentation release and social channel governance',
      deliverables: 'Configured community hubs, master FAQ repository, and moderation handbook.'
    },
    {
      phaseNumber: '04',
      name: 'Audience & Partner Activation',
      timeframe: 'T-5 to T-2 Weeks',
      objective: 'Coordinate approved creator, ecosystem, and partnership activities across relevant crypto channels.',
      actions: [
        'Phase 1 creator sequencing: technical builders and research analysts walkthroughs',
        'Whitelist registration portal opening with Sybil verification and qualification rules',
        'Ecosystem partnership announcements (L1/L2 grants, security audit completions)',
        'Podcast circuits and founder AMA schedules across top Twitter Spaces'
      ],
      dependencies: 'Approved creative assets, disclosure compliance, and whitelist gating',
      deliverables: 'Creator campaign briefs, verified whitelist registry, and partnership releases.'
    },
    {
      phaseNumber: '05',
      name: 'Launch Readiness',
      timeframe: 'T-2 Weeks to T-1 Day',
      objective: 'Review communications, operational dependencies, and launch checklists prior to opening bell.',
      actions: [
        'Exchange listing documentation finalization and deposit testing (subject to exchange approvals)',
        'Market maker liquidity deployment SLAs, spreads, and depth commitments confirmed',
        'Whitelist closure, allocation confirmation, and claim instructions publication',
        'Final multi-party operational dry run and community crisis response protocol'
      ],
      dependencies: 'Exchange agreements, liquidity staging, and contract audits',
      deliverables: 'Launch readiness checklist, operational runbook, and claim schedule.'
    },
    {
      phaseNumber: '06',
      name: 'TGE & Listing Coordination',
      timeframe: 'Launch Day to Day 7',
      objective: 'Coordinate approved launch communications and relevant exchange trading activities.',
      actions: [
        'Synchronized listing announcements across exchanges, official channels, and partner dApps',
        'Live founder Spaces, continuous community support, and rapid issue escalation',
        'Phase 2 creator momentum: trading access and protocol utility demonstration',
        'Real-time sentiment monitoring, liquidity depth telemetry, and claim portal stability'
      ],
      dependencies: 'Exchange opening approvals, token contract deployment, and liquidity injection',
      deliverables: 'Live launch command report, liquidity depth telemetry, and claim logs.'
    },
    {
      phaseNumber: '07',
      name: 'Post-TGE Optimization',
      timeframe: 'T+7 to T+90 Days & Onward',
      objective: 'Review performance, community feedback, retention, and next-step growth priorities.',
      actions: [
        'Execution of 90-day post-launch content, developer hackathons, and product tutorials',
        'Rollout of staking, utility incentives, and decentralized governance onboarding',
        'Ongoing wallet cohort retention monitoring and transaction fee optimization',
        'Quarterly performance review, treasury runway updates, and ecosystem expansion'
      ],
      dependencies: 'Live token trading and on-chain protocol activity',
      deliverables: 'Post-TGE engagement calendar, retention reports, and quarterly growth priorities.'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50/50 text-slate-900 pt-16 lg:pt-[72px]">
      {/* ── HERO SECTION ── */}
      <section className="relative bg-slate-950 text-white py-16 lg:py-24 overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=2000&q=80"
            alt="Launch & Growth Acceleration"
            className="w-full h-full object-cover object-center opacity-40 mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/75 to-slate-900/60" />
          <div className="absolute inset-0 bg-radial-at-t from-blue-950/40 via-transparent to-transparent pointer-events-none" />
        </div>

        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/20 border border-blue-400/40 text-blue-300 text-xs font-semibold uppercase tracking-wider mb-6 font-mono shadow-sm">
                <Rocket className="w-3.5 h-3.5 text-blue-400" />
                <span>Page 02 · Launch & Growth Acceleration</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.08] mb-6">
                Launch & <span className="text-blue-400">Growth Acceleration</span>
              </h1>

              <div className="text-lg sm:text-xl text-blue-200/90 font-medium mb-4 leading-relaxed max-w-3xl">
                Coordinate launch preparation, audience acquisition, exchange readiness, campaign execution, and post-launch engagement.
              </div>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal mb-8 max-w-3xl">
                The Launch & Growth page organizes the activities required to prepare and execute a Web3 launch. It connects campaign planning, creator partnerships, exchange coordination, incentive programs, performance measurement, business development, and retention into a structured operating process.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <Link
                  to="/book-consultation"
                  className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold px-8 py-4 rounded-xl transition-all shadow-lg border border-blue-400/40 text-sm sm:text-base group"
                >
                  <span>Plan Your Launch Strategy</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  to="/ico-acceleration/solutions-engagement"
                  className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold px-8 py-4 rounded-xl transition-all text-sm sm:text-base border border-white/30 backdrop-blur-sm shadow-md"
                >
                  <span>Explore Solutions & Engagement</span>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-4">
              <div className="bg-slate-900/90 text-white rounded-3xl overflow-hidden shadow-2xl border border-slate-800 relative">
                <div className="h-44 w-full relative overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80"
                    alt="Execution Engine"
                    className="w-full h-full object-cover opacity-60"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-blue-400 font-bold bg-slate-900/80 px-2.5 py-1 rounded-md border border-slate-700">
                      Execution Architecture
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-[11px] font-mono text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-800/60">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                      Ready to Deploy
                    </span>
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <div className="text-xs text-slate-300 font-medium leading-relaxed">
                    End-to-end operational coordination linking creator distribution, exchange listing pipelines, and compounding retention loops.
                  </div>

                  <div className="grid grid-cols-2 gap-3 pt-2 border-t border-slate-800">
                    <div className="p-3 rounded-xl bg-slate-800/60 border border-slate-700/60">
                      <div className="text-lg font-black text-white font-mono">10 Modules</div>
                      <div className="text-[11px] text-slate-400">Execution submenus</div>
                    </div>
                    <div className="p-3 rounded-xl bg-slate-800/60 border border-slate-700/60">
                      <div className="text-lg font-black text-white font-mono">7 Phases</div>
                      <div className="text-[11px] text-slate-400">TGE launch timeline</div>
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
            
            {/* ── SUBMENU 1: GROWTH ACCELERATION ENGINE ── */}
            <section id="growth-acceleration" className="scroll-mt-28 bg-white rounded-3xl border border-slate-200/90 p-8 sm:p-10 shadow-xs">
              <div className="max-w-3xl mb-8">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600 block mb-2">
                  Submenu 01 · Funnel & Experimentation
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
                  Growth Acceleration Engine
                </h2>
                <p className="text-base text-slate-600 leading-relaxed font-normal">
                  Continuously identifies conversion bottlenecks across testnet, token sale, and dapp interactions. Implements structured growth experiments to optimize funnel throughput and liquidity participation.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80">
                  <h3 className="text-base font-extrabold text-slate-900 mb-2">Launch Objectives & Audience Segments</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Define clear quantitative launch milestones and select high-priority user and liquidity cohorts.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80">
                  <h3 className="text-base font-extrabold text-slate-900 mb-2">Channel Selection</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Select acquisition channels based on validated audience fit, developer density, and cost-efficiency.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80">
                  <h3 className="text-base font-extrabold text-slate-900 mb-2">Campaign Themes & Distribution</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Develop multi-channel campaign themes, content assets, and distribution schedules across digital touchpoints.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80">
                  <h3 className="text-base font-extrabold text-slate-900 mb-2">Controlled Experiments & Metrics</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Establish hypothesis-driven campaign experiments, tracking metrics, and weekly sprint reviews to prioritize improvements.
                  </p>
                </div>
              </div>

              <div className="bg-blue-50/70 border border-blue-200/90 rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <div className="text-xs font-mono font-bold uppercase tracking-wider text-blue-700 mb-1">
                    Deliverables
                  </div>
                  <div className="text-base font-extrabold text-slate-900">
                    Growth Strategy, Channel Plan, Campaign Calendar & Performance Review Framework
                  </div>
                </div>
                <Link
                  to="/book-consultation"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-700 hover:text-blue-800 bg-white px-4 py-2.5 rounded-xl border border-blue-200 shadow-xs shrink-0"
                >
                  <span>Deploy Growth Engine</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </section>

            {/* ── SUBMENU 2: KOL & CREATOR ORCHESTRATION ── */}
            <section id="kol-orchestration" className="scroll-mt-28 bg-white rounded-3xl border border-slate-200/90 p-8 sm:p-10 shadow-xs">
              <div className="max-w-3xl mb-8">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600 block mb-2">
                  Submenu 02 · Creator Distribution
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
                  KOL & Creator Orchestration
                </h2>
                <p className="text-base text-slate-600 leading-relaxed font-normal">
                  Replaces one-off paid tweets with sequenced creator campaigns. We match, brief, review, and evaluate creators based on authentic technical relevance and verifiable audience engagement.
                </p>
              </div>

              <div className="space-y-4 mb-8">
                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80">
                  <h3 className="text-base font-extrabold text-slate-900 mb-1">Targeted Creator Matching</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Identify Web3 analysts, researchers, and creators whose genuine followers match the project's developer and user profile.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80">
                  <h3 className="text-base font-extrabold text-slate-900 mb-1">Due Diligence & Disclosure</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Evaluate audience relevance, bot percentages, content quality, and commercial disclosure practices (#ad).
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80">
                  <h3 className="text-base font-extrabold text-slate-900 mb-1">Briefs, Reviews & Scheduling</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Coordinate factual campaign briefs, technical reviews, and phased publishing schedules to amplify major roadmap milestones.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80">
                  <h3 className="text-base font-extrabold text-slate-900 mb-1">Performance Tracking & Policy</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Track agreed campaign metrics and document results. Note: In strict compliance with our standards, we do not guarantee creator reach, token demand, or campaign returns.
                  </p>
                </div>
              </div>

              <div className="bg-blue-50/70 border border-blue-200/90 rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <div className="text-xs font-mono font-bold uppercase tracking-wider text-blue-700 mb-1">
                    Deliverables
                  </div>
                  <div className="text-base font-extrabold text-slate-900">
                    Creator Shortlist, Outreach Plan, Campaign Briefs & Creator Performance Reports
                  </div>
                </div>
                <Link
                  to="/book-consultation"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-700 hover:text-blue-800 bg-white px-4 py-2.5 rounded-xl border border-blue-200 shadow-xs shrink-0"
                >
                  <span>Coordinate Creators</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </section>

            {/* ── SUBMENU 3: EXCHANGE & LISTING OPERATIONS ── */}
            <section id="exchange-operations" className="scroll-mt-28 bg-white rounded-3xl border border-slate-200/90 p-8 sm:p-10 shadow-xs">
              <div className="max-w-3xl mb-8">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600 block mb-2">
                  Submenu 03 · Venue Operations
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
                  Exchange & Listing Operations
                </h2>
                <p className="text-base text-slate-600 leading-relaxed font-normal">
                  Prepare documentation, organize listing-readiness materials, and coordinate communications with relevant exchange contacts. Clearly stated: exchange listings are subject to the exchange's independent review and approval. Do not guarantee a listing.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80">
                  <h3 className="text-base font-extrabold text-slate-900 mb-2">Documentation & Diligence Dossier</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Organize tokenomics models, legal opinion letters, smart contract audit reports, and technical node specs.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80">
                  <h3 className="text-base font-extrabold text-slate-900 mb-2">Communication Coordination</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Coordinate communications with authorized exchange listing managers, tracking outstanding diligence actions.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80">
                  <h3 className="text-base font-extrabold text-slate-900 mb-2">Market Maker SLAs</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Facilitate operational alignment on order book depth, spread requirements, and inventory staging where applicable.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80">
                  <h3 className="text-base font-extrabold text-slate-900 mb-2">Announcement Synchronization</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Coordinate launch timing and public communications strictly in accordance with exchange partner agreements.
                  </p>
                </div>
              </div>

              <div className="bg-blue-50/70 border border-blue-200/90 rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <div className="text-xs font-mono font-bold uppercase tracking-wider text-blue-700 mb-1">
                    Deliverables
                  </div>
                  <div className="text-base font-extrabold text-slate-900">
                    Listing-Readiness Checklist, Documentation Tracker, Communication Plan & Launch Schedule
                  </div>
                </div>
                <Link
                  to="/book-consultation"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-700 hover:text-blue-800 bg-white px-4 py-2.5 rounded-xl border border-blue-200 shadow-xs shrink-0"
                >
                  <span>Prepare Listing Dossier</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </section>

            {/* ── SUBMENU 4: AIRDROP & INCENTIVE ENGINEERING ── */}
            <section id="airdrop-incentive" className="scroll-mt-28 bg-white rounded-3xl border border-slate-200/90 p-8 sm:p-10 shadow-xs">
              <div className="max-w-3xl mb-8">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600 block mb-2">
                  Submenu 04 · Incentive Design
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
                  Airdrop & Incentive Engineering
                </h2>
                <p className="text-base text-slate-600 leading-relaxed font-normal">
                  Design reward and whitelist mechanisms that attract authentic early adopters while actively preventing abuse, duplicate participation, and Sybil farming. We do not invent token allocations, rewards, eligibility guarantees, or legal assurances.
                </p>
              </div>

              <div className="space-y-4 mb-8">
                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80">
                  <h3 className="text-base font-extrabold text-slate-900 mb-1">Campaign Purpose & Eligibility Criteria</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Define exact objective participant cohorts (e.g. active testnet developers, liquidity providers, governance participants).
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80">
                  <h3 className="text-base font-extrabold text-slate-900 mb-1">Rules, Allocation Logic & Participation Steps</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Document transparent campaign rules, tiered allocation formulas, and straightforward claim steps.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80">
                  <h3 className="text-base font-extrabold text-slate-900 mb-1">Sybil-Resistance & Anti-Abuse Measures</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Implement multi-layer screening to detect automated address clusters, disposable wallets, and mercenary farming networks.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80">
                  <h3 className="text-base font-extrabold text-slate-900 mb-1">Communications & Post-Campaign Analysis</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Plan claim portal communications, security advisories, and analyze participant hold duration post-distribution.
                  </p>
                </div>
              </div>

              <div className="bg-blue-50/70 border border-blue-200/90 rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <div className="text-xs font-mono font-bold uppercase tracking-wider text-blue-700 mb-1">
                    Deliverables
                  </div>
                  <div className="text-base font-extrabold text-slate-900">
                    Incentive Campaign Brief, Eligibility Framework, Rules Checklist & Measurement Plan
                  </div>
                </div>
                <Link
                  to="/book-consultation"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-700 hover:text-blue-800 bg-white px-4 py-2.5 rounded-xl border border-blue-200 shadow-xs shrink-0"
                >
                  <span>Structure Incentives</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </section>

            {/* ── SUBMENU 5: OMNICHANNEL PERFORMANCE ENGINE ── */}
            <section id="omnichannel-performance" className="scroll-mt-28 bg-white rounded-3xl border border-slate-200/90 p-8 sm:p-10 shadow-xs">
              <div className="max-w-3xl mb-8">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600 block mb-2">
                  Submenu 05 · Channel Coordination
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
                  Omnichannel Performance Engine
                </h2>
                <p className="text-base text-slate-600 leading-relaxed font-normal">
                  Coordinate campaign messaging, brand consistency, and content publishing schedules across X, YouTube, Telegram, Discord, and earned PR while measuring channel-level engagement and conversion events.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80">
                  <h3 className="text-base font-extrabold text-slate-900 mb-2">Cross-Channel Consistency</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Ensure unified brand presentation, tone of voice, and disclaimer compliance across all social, video, and audio venues.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80">
                  <h3 className="text-base font-extrabold text-slate-900 mb-2">Publishing Schedules</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Synchronize content drops and announcements with protocol development sprints and exchange launch milestones.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80">
                  <h3 className="text-base font-extrabold text-slate-900 mb-2">Conversion Tracking</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Track channel-level traffic, whitelist signups, testnet faucet requests, and verified wallet activations.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80">
                  <h3 className="text-base font-extrabold text-slate-900 mb-2">Attribution Rules</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Compare channel performance using clear, empirical attribution rules to dynamically shift focus to high-yield channels.
                  </p>
                </div>
              </div>

              <div className="bg-blue-50/70 border border-blue-200/90 rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <div className="text-xs font-mono font-bold uppercase tracking-wider text-blue-700 mb-1">
                    Deliverables
                  </div>
                  <div className="text-base font-extrabold text-slate-900">
                    Omnichannel Campaign Calendar, Channel Matrix & Reporting Framework
                  </div>
                </div>
                <Link
                  to="/book-consultation"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-700 hover:text-blue-800 bg-white px-4 py-2.5 rounded-xl border border-blue-200 shadow-xs shrink-0"
                >
                  <span>Build Campaign Matrix</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </section>

            {/* ── SUBMENU 6: REVENUE ACCELERATION ENGINE ── */}
            <section id="revenue-acceleration" className="scroll-mt-28 bg-white rounded-3xl border border-slate-200/90 p-8 sm:p-10 shadow-xs">
              <div className="max-w-3xl mb-8">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600 block mb-2">
                  Submenu 06 · Commercial Monetization
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
                  Revenue Acceleration Engine
                </h2>
                <p className="text-base text-slate-600 leading-relaxed font-normal">
                  Identify relevant commercial opportunities, define qualification criteria, build partnership pipelines, and structure token transaction fee sharing. In compliance with strict policies, we do not promise revenue outcomes.
                </p>
              </div>

              <div className="space-y-4 mb-8">
                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80">
                  <h3 className="text-base font-extrabold text-slate-900 mb-1">Business Opportunities & Target Accounts</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Identify dApps, enterprise integrators, and infrastructure providers capable of generating recurring on-chain volume.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80">
                  <h3 className="text-base font-extrabold text-slate-900 mb-1">Commercial Objectives & Qualification</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Establish commercial qualification thresholds for integrations, grant distributions, and fee-sharing agreements.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80">
                  <h3 className="text-base font-extrabold text-slate-900 mb-1">Outreach, Proposals & Pipeline Stages</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Coordinate structured BD outreach, technical evaluation meetings, proposal negotiations, and partner onboardings.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80">
                  <h3 className="text-base font-extrabold text-slate-900 mb-1">Commercial Reporting</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Review pipeline progression, integration velocity, and protocol fee yield metrics without speculative projections.
                  </p>
                </div>
              </div>

              <div className="bg-blue-50/70 border border-blue-200/90 rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <div className="text-xs font-mono font-bold uppercase tracking-wider text-blue-700 mb-1">
                    Deliverables
                  </div>
                  <div className="text-base font-extrabold text-slate-900">
                    Revenue Strategy, Account Prioritization Framework, Pipeline Stages & Commercial Reporting
                  </div>
                </div>
                <Link
                  to="/book-consultation"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-700 hover:text-blue-800 bg-white px-4 py-2.5 rounded-xl border border-blue-200 shadow-xs shrink-0"
                >
                  <span>Build Revenue Pipeline</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </section>

            {/* ── SUBMENU 7: CUSTOMER JOURNEY INTELLIGENCE ── */}
            <section id="customer-journey" className="scroll-mt-28 bg-white rounded-3xl border border-slate-200/90 p-8 sm:p-10 shadow-xs">
              <div className="max-w-3xl mb-8">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600 block mb-2">
                  Submenu 07 · Wallet Lifecycle
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
                  Customer Journey Intelligence
                </h2>
                <p className="text-base text-slate-600 leading-relaxed font-normal">
                  Map the complete journey from initial awareness to wallet connection, active participation, and recurring protocol engagement. Identify drop-off points and implement targeted onboarding improvements.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80">
                  <h3 className="text-base font-extrabold text-slate-900 mb-2">Journey Mapping</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Map user flow from first touchpoint through RPC setup, token acquisition, testnet interactions, and daily usage.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80">
                  <h3 className="text-base font-extrabold text-slate-900 mb-2">Friction & Drop-Off Points</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Detect UI confusion, gas fee shock, confusing signing requests, and drop-offs during onboarding.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80">
                  <h3 className="text-base font-extrabold text-slate-900 mb-2">Conversion Milestones</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Define measurable conversion events (e.g. smart contract interaction, liquidity provision, governance vote).
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80">
                  <h3 className="text-base font-extrabold text-slate-900 mb-2">Optimization Backlog</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Prioritize actionable UX and messaging improvements to systematically increase wallet retention.
                  </p>
                </div>
              </div>

              <div className="bg-blue-50/70 border border-blue-200/90 rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <div className="text-xs font-mono font-bold uppercase tracking-wider text-blue-700 mb-1">
                    Deliverables
                  </div>
                  <div className="text-base font-extrabold text-slate-900">
                    Journey Map, Funnel Analysis Framework & Optimization Backlog
                  </div>
                </div>
                <Link
                  to="/book-consultation"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-700 hover:text-blue-800 bg-white px-4 py-2.5 rounded-xl border border-blue-200 shadow-xs shrink-0"
                >
                  <span>Analyze User Funnel</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </section>

            {/* ── SUBMENU 8: INSTITUTIONAL & BD SALES ENGINE ── */}
            <section id="institutional-bd" className="scroll-mt-28 bg-white rounded-3xl border border-slate-200/90 p-8 sm:p-10 shadow-xs">
              <div className="max-w-3xl mb-8">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600 block mb-2">
                  Submenu 08 · Ecosystem Partnerships
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
                  Institutional & BD Sales Engine
                </h2>
                <p className="text-base text-slate-600 leading-relaxed font-normal">
                  Identify and segment prospective institutional partners, ecosystem foundations, cross-chain bridges, and enterprise integrators. Note: We do not claim partnerships with specific institutions unless officially verified.
                </p>
              </div>

              <div className="space-y-4 mb-8">
                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80">
                  <h3 className="text-base font-extrabold text-slate-900 mb-1">Prospect Identification & Segmentation</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Segment institutional funds, ecosystem grant foundations, liquidity providers, and L2 platforms by strategic fit.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80">
                  <h3 className="text-base font-extrabold text-slate-900 mb-1">Tailored Collateral & Meeting Briefs</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Prepare institutional diligence packs, technical one-pagers, integration specs, and meeting briefing sheets.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80">
                  <h3 className="text-base font-extrabold text-slate-900 mb-1">Opportunity Tracking</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Track introductions, exploratory calls, follow-ups, and formal partnership evaluation stages in a unified CRM.
                  </p>
                </div>
              </div>

              <div className="bg-blue-50/70 border border-blue-200/90 rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <div className="text-xs font-mono font-bold uppercase tracking-wider text-blue-700 mb-1">
                    Deliverables
                  </div>
                  <div className="text-base font-extrabold text-slate-900">
                    Target-Account Framework, Outreach Templates, Meeting Briefs & Opportunity Tracker
                  </div>
                </div>
                <Link
                  to="/book-consultation"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-700 hover:text-blue-800 bg-white px-4 py-2.5 rounded-xl border border-blue-200 shadow-xs shrink-0"
                >
                  <span>Build BD Pipeline</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </section>

            {/* ── SUBMENU 9: POST-TGE RETENTION MACHINE ── */}
            <section id="post-tge-retention" className="scroll-mt-28 bg-white rounded-3xl border border-slate-200/90 p-8 sm:p-10 shadow-xs">
              <div className="max-w-3xl mb-8">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600 block mb-2">
                  Submenu 09 · Post-Launch Sustainability
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
                  Post-TGE Retention Machine
                </h2>
                <p className="text-base text-slate-600 leading-relaxed font-normal">
                  Plan post-launch communications, educational onboarding, recurring community engagement, and product update schedules. In accordance with policy, we do not promise token-price appreciation, trading performance, or guaranteed retention.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80">
                  <h3 className="text-base font-extrabold text-slate-900 mb-2">Post-Launch Engagement Calendar</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    A structured 90-day calendar of technical progress updates, community AMAs, developer bounties, and feature releases.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80">
                  <h3 className="text-base font-extrabold text-slate-900 mb-2">Educational Onboarding</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Develop interactive guides, video tutorials, and documentation walking new holders into staking and governance participation.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80">
                  <h3 className="text-base font-extrabold text-slate-900 mb-2">User Question Management</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Identify recurring questions and address barriers to ongoing utility, protocol voting, and ecosystem usage.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80">
                  <h3 className="text-base font-extrabold text-slate-900 mb-2">Retention Telemetry</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Monitor available on-chain indicators, 30/60/90-day wallet retention cohorts, and active smart contract calls.
                  </p>
                </div>
              </div>

              <div className="bg-blue-50/70 border border-blue-200/90 rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <div className="text-xs font-mono font-bold uppercase tracking-wider text-blue-700 mb-1">
                    Deliverables
                  </div>
                  <div className="text-base font-extrabold text-slate-900">
                    Post-TGE Engagement Calendar, Onboarding Communication Plan & Retention Reporting Framework
                  </div>
                </div>
                <Link
                  to="/book-consultation"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-700 hover:text-blue-800 bg-white px-4 py-2.5 rounded-xl border border-blue-200 shadow-xs shrink-0"
                >
                  <span>Build Retention Engine</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </section>

            {/* ── SUBMENU 10: SEVEN-PHASE LAUNCH PLAYBOOK ── */}
            <section id="seven-phase-playbook" className="scroll-mt-28 bg-white rounded-3xl border border-slate-200/90 p-8 sm:p-10 shadow-xs">
              <div className="max-w-3xl mb-8">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600 block mb-2">
                  Submenu 10 · Complete Operational Timeline
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
                  Seven-Phase Launch Playbook
                </h2>
                <p className="text-base text-slate-600 leading-relaxed font-normal">
                  A comprehensive, end-to-end operational sequence organizing every milestone from pre-launch positioning through TGE execution and post-launch scaling.
                </p>
              </div>

              {/* Phase Selector Tabs */}
              <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pb-3 mb-8 border-b border-slate-200">
                {playbookPhases.map((phase, idx) => (
                  <button
                    key={phase.phaseNumber}
                    onClick={() => setActivePhaseTab(idx)}
                    className={`px-4 py-2.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all flex items-center gap-2 ${
                      activePhaseTab === idx
                        ? 'bg-blue-600 text-white shadow-md'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    <span className="font-mono text-[10px] opacity-80">{phase.phaseNumber}</span>
                    <span>{phase.name.split('—')[1] || phase.name}</span>
                  </button>
                ))}
              </div>

              {/* Active Phase Card */}
              {playbookPhases[activePhaseTab] && (
                <div className="bg-slate-50 rounded-2xl border border-slate-200/80 p-8 space-y-6">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200/80">
                    <div>
                      <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
                        Phase {playbookPhases[activePhaseTab].phaseNumber}
                      </span>
                      <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight mt-2">
                        {playbookPhases[activePhaseTab].name}
                      </h3>
                    </div>
                    <div className="flex items-center gap-2 text-xs font-mono font-bold text-slate-600 bg-white px-3 py-1.5 rounded-lg border border-slate-200 shrink-0">
                      <Clock className="w-4 h-4 text-slate-400" />
                      <span>{playbookPhases[activePhaseTab].timeframe}</span>
                    </div>
                  </div>

                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">Objective</div>
                    <p className="text-sm text-slate-800 font-medium leading-relaxed">
                      {playbookPhases[activePhaseTab].objective}
                    </p>
                  </div>

                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-3">Key Actions & Milestones</div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {playbookPhases[activePhaseTab].actions.map((act, ai) => (
                        <div key={ai} className="flex items-start gap-2.5 p-3 rounded-xl bg-white border border-slate-200/70 text-xs text-slate-700">
                          <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                          <span className="leading-relaxed">{act}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-200/80 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                    <div className="p-4 rounded-xl bg-white border border-slate-200/80">
                      <div className="font-bold text-slate-900 mb-1">Dependencies:</div>
                      <div className="text-slate-600 leading-relaxed">{playbookPhases[activePhaseTab].dependencies}</div>
                    </div>
                    <div className="p-4 rounded-xl bg-blue-50/60 border border-blue-200/80">
                      <div className="font-bold text-blue-900 mb-1">Key Deliverables:</div>
                      <div className="text-blue-800 leading-relaxed">{playbookPhases[activePhaseTab].deliverables}</div>
                    </div>
                  </div>
                </div>
              )}
            </section>

            {/* ── NEXT PAGE FORWARD CTA ── */}
            <section className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 border border-slate-800 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-80 h-80 bg-radial from-blue-600/20 to-transparent pointer-events-none" />
              
              <div className="flex flex-col sm:flex-row items-center justify-between gap-6 relative z-10">
                <div className="max-w-2xl">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-400 bg-slate-800/80 px-3 py-1 rounded-full border border-slate-700 inline-block mb-3">
                    Next Section Module
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-2">
                    Solutions & Engagement Models
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    Explore tailored packages for L1/L2s, DeFi, Gaming, and CEXs across our six transparent commercial structures.
                  </p>
                </div>
                <Link
                  to="/ico-acceleration/solutions-engagement"
                  className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold px-7 py-3.5 rounded-xl transition-all shadow-md text-sm border border-blue-400/40 group shrink-0"
                >
                  <span>Explore Solutions</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </section>

      </main>
    </div>
  );
}
