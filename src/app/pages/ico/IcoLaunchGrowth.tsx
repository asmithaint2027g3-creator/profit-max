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
  DollarSign
} from 'lucide-react';
import IcoSubNav from '../../components/IcoSubNav';

export default function IcoLaunchGrowth() {
  const location = useLocation();
  const [activePhaseTab, setActivePhaseTab] = useState<number>(0);

  useEffect(() => {
    document.title = 'Launch & Growth | ProfitMachines Crypto Protocol';
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

  const executionModules = [
    {
      id: 'growth-acceleration',
      title: 'Growth Acceleration Engine',
      subtitle: 'Original Engine 4',
      icon: TrendingUp,
      description:
        'Continuously identifies conversion bottlenecks across testnet, token sale, and dapp interactions. Implements structured growth experiments to optimize funnel throughput and liquidity participation.',
      capabilities: [
        'Funnel breakpoint detection & leak plugging',
        'Growth experiment planning & sprint cycles',
        'Community & wallet readiness scoring',
        'Protocol adoption and liquidity yield opportunities'
      ]
    },
    {
      id: 'kol-orchestration',
      title: 'KOL & Creator Orchestration',
      subtitle: 'Execution Engine',
      icon: Users,
      description:
        'Replaces predatory one-off sponsored posts with coordinated, phased creator sequencing. Deploys 20–50 verified crypto creators (scaled to scope & budget) on structured performance milestones.',
      capabilities: [
        'Micro-first creator sequencing (technical builders before macro hype)',
        'Phased campaigns across X, YouTube, and Telegram alpha channels',
        'Performance-based creator evaluation (wallet referral attribution)',
        'Strict disclosure enforcement & compliance guardrails'
      ]
    },
    {
      id: 'exchange-operations',
      title: 'Exchange & Listing Operations',
      subtitle: 'Execution Engine',
      icon: Building2,
      description:
        'Synchronizes CEX and DEX listing pipelines, legal documentation, market maker SLAs, and launch announcement windows to prevent volatility slippage.',
      capabilities: [
        'Tier-1 and Tier-2 listing pipeline management',
        'Listing-readiness diligence & technical integration coordination',
        'Coordinated announcement timing (T-21 to T-7 subject to exchange agreements)',
        'Market-maker SLA coordination (spreads, depth & inventory planning)'
      ]
    },
    {
      id: 'incentive-engineering',
      title: 'Airdrop & Incentive Engineering',
      subtitle: 'Execution Engine',
      icon: Gift,
      description:
        'Architects Sybil-resistant token distribution mechanisms that reward authentic early adopters while eliminating mercenary airdrop farmers.',
      capabilities: [
        'Airdrop & whitelist tiering architecture',
        'Eligibility qualification rules & on-chain activity thresholds',
        'Multi-layer Sybil resistance & wallet clustering filtration',
        'Incentive retention telemetry tracking token hold duration'
      ]
    },
    {
      id: 'omnichannel-performance',
      title: 'Omnichannel Performance Engine',
      subtitle: 'Original Engine 5',
      icon: BarChart3,
      description:
        'Provides real-time attribution and spend efficiency reporting across digital channels, measuring true acquisition cost per active wallet and protocol deposit.',
      capabilities: [
        'End-to-end multi-touch channel attribution',
        'Real-time campaign spend efficiency reporting',
        'Dynamic budget reallocation based on high-yield channels',
        'Empirical ROI measurement where verified on-chain data is available'
      ]
    },
    {
      id: 'revenue-acceleration',
      title: 'Revenue Acceleration Engine',
      subtitle: 'Original Engine 6',
      icon: Coins,
      description:
        'Aligns tokenomics with sustainable cash flows. Structures transaction fee sharing, staking yield models, and enterprise API monetization to build lasting treasury reserves.',
      capabilities: [
        'Token and transaction fee monetization models',
        'Expansion and wallet retention signal detection',
        'Forward-looking treasury and fee revenue forecasting',
        'Protocol revenue prioritization & capital allocation'
      ]
    },
    {
      id: 'journey-intelligence',
      title: 'Customer Journey Intelligence',
      subtitle: 'Original Engine 7',
      icon: Cpu,
      description:
        'Maps wallet lifecycles from initial testnet interaction to daily protocol usage. Automates targeted engagement to prevent post-TGE dropoff.',
      capabilities: [
        'Wallet journey lifecycle mapping & milestone tracking',
        'Early churn-risk signals and inactive wallet alerts',
        'Expansion opportunities (cross-protocol staking, lending)',
        'Lifecycle messaging automation triggered by on-chain events'
      ]
    },
    {
      id: 'institutional-bd',
      title: 'Institutional & BD Sales Engine',
      subtitle: 'Original Engine 8',
      icon: Briefcase,
      description:
        'Accelerates enterprise and ecosystem partnerships, institutional liquidity onboarding, foundation grant pipelines, and real-world asset (RWA) tokenization.',
      capabilities: [
        'Exchange and ecosystem strategic partnership sourcing',
        'Foundation grant opportunity tracking & application support',
        'L2 rollup integrations & cross-chain bridge partnerships',
        'Institutional custody & RWA tokenization deal pipeline'
      ]
    },
    {
      id: 'retention-machine',
      title: 'Post-TGE Retention Machine',
      subtitle: 'Lifecycle Engine',
      icon: Activity,
      description:
        'A structured 90-day operational execution framework deployed immediately following TGE to ensure initial token holders convert into permanent protocol participants.',
      capabilities: [
        'Structured 90-day content, education & community activation calendar',
        'Product utility tutorials, developer documentation & hackathons',
        'Staking, yield, and decentralized governance onboarding sequences',
        'DAU, TVL, and wallet retention cohort monitoring'
      ]
    }
  ];

  const playbookPhases = [
    {
      phaseNumber: '01',
      name: 'Phase 1 — Foundation',
      timeframe: 'T-16 to T-12 Weeks',
      leadEngines: 'Tokenomics & Narrative Studio, Market Validation Intelligence',
      objective: 'Audit fundamentals, structure messaging, and map compliance requirements before capital deployment.',
      actions: [
        'Comprehensive tokenomics audit: emission curves, vesting schedules, and circulating float calculation',
        'Jurisdictional legal & compliance review (MiCA / VARA / ASCI promotional boundaries)',
        'Token narrative finalization and core value proposition definition',
        'Initial distribution and treasury allocation planning',
        'Core infrastructure audit: website, documentation, smart contract security roadmap'
      ],
      proposedKpis: [
        'Finalized & legally reviewed tokenomics blueprint',
        'Go/No-Go score exceeding 85/100 threshold',
        'Completed token narrative documentation & developer litepaper'
      ]
    },
    {
      phaseNumber: '02',
      name: 'Phase 2 — Community Build',
      timeframe: 'T-90 to T-61 Days',
      leadEngines: 'Community Signal Command, Customer Journey Intelligence',
      objective: 'Establish high-signal developer and early adopter channels with strict anti-bot filtration.',
      actions: [
        'Discord and Telegram server architecture with bot-filtering and role gating',
        'Website, interactive litepaper, and technical documentation public launch',
        'Community moderation onboarding and 24/7 coverage protocol establishment',
        'Initial organic community development through technical developer bounties',
        'Content preparation: explanatory guides, technical deep-dives, founder podcasts'
      ],
      proposedKpis: [
        'Organic community growth with >70% human-verified member ratio',
        'Initial testnet faucet requests / developer GitHub activity baseline established',
        'Active Discord engagement rate >18% on technical and roadmap channels'
      ]
    },
    {
      phaseNumber: '03',
      name: 'Phase 3 — Momentum & Distribution',
      timeframe: 'T-60 to T-31 Days',
      leadEngines: 'KOL & Creator Orchestration, Crypto Demand Discovery Engine',
      objective: 'Seed early narrative through technical creators and open verified whitelist registration.',
      actions: [
        'Phase 1 creator seeding: technical and builder KOLs conducting product walkthroughs',
        'Crypto PR outreach across major industry publications and podcast circuits',
        'Whitelist application launch with multi-step on-chain qualification criteria',
        'Sybil screening deployment to filter bot farms from whitelist cohorts',
        'Strategic ecosystem partnership announcements (L1/L2 grants, security audit seals)'
      ],
      proposedKpis: [
        '20+ creator deliverables published with verifiable engagement attribution',
        'Whitelist target reached with >80% verified on-chain wallet histories',
        'Tier-1 audit firm completion and public report publication'
      ]
    },
    {
      phaseNumber: '04',
      name: 'Phase 4 — Activation',
      timeframe: 'T-30 to T-1 Days',
      leadEngines: 'Exchange & Listing Operations, Airdrop & Incentive Engineering',
      objective: 'Lock exchange listings, coordinate market makers, and build public launch countdown momentum.',
      actions: [
        'Exchange listing agreements finalized and deposit testing completed (T-21 to T-7 announcements)',
        'Market maker liquidity deployment SLAs, spreads, and depth commitments confirmed',
        'Phase 2 creator amplification: macro crypto influencers and YouTube deep-dives',
        'Whitelist verification closure, allocation confirmation, and claim instructions publication',
        'Founder AMAs across top Twitter Spaces, Telegram channels, and partner communities'
      ],
      proposedKpis: [
        'Confirmed Tier-1/Tier-2 exchange listing schedule with synchronized announcement dates',
        'Market maker collateral and algorithmic liquidity pools fully funded and staged',
        'Total addressable audience reach across creator activations matching target benchmarks'
      ]
    },
    {
      phaseNumber: '05',
      name: 'Phase 5 — TGE Week',
      timeframe: 'Launch Day to Day 7',
      leadEngines: 'TGE Command Center, Omnichannel Performance Engine',
      objective: 'Execute flawless synchronized token listing, liquidity injection, and live crisis management.',
      actions: [
        'Coordinated listing announcements across exchanges, official channels, and partner dApps',
        'Live founder Spaces, continuous community moderation, and technical support escalation',
        'Phase 3 creator momentum: launch day trading and utility demonstration coverage',
        'Real-time sentiment monitoring, DEX liquidity rebalancing, and gas price tracking',
        'Airdrop claim portal opening with Sybil-resistant claiming smart contracts'
      ],
      proposedKpis: [
        'Zero downtime across claim portals, exchange deposit gateways, and RPC nodes',
        'Liquidity pools established within target spread and depth tolerance across pairs',
        'Community sentiment maintaining >75% positive ratio during initial trading hours'
      ]
    },
    {
      phaseNumber: '06',
      name: 'Phase 6 — Post-TGE Compound',
      timeframe: 'T+1 to T+90 Days',
      leadEngines: 'Post-TGE Retention Machine, Revenue Acceleration Engine',
      objective: 'Prevent post-launch volume dropoff by transitioning token holders into active protocol users.',
      actions: [
        'Rollout of 90-day post-launch content, developer hackathons, and product tutorials',
        'Staking contracts, yield mechanisms, and decentralized governance onboarding',
        'Ecosystem partnership announcements, grant program deployment, and integrations',
        'Weekly community updates, product sprint reviews, and institutional transparency reports',
        'Cohort retention telemetry tracking wallet hold times and protocol fee generation'
      ],
      proposedKpis: [
        'Targeted 30-day and 60-day wallet retention benchmarks met or exceeded',
        'Staking / protocol lockup percentage reaching target circulating supply ratio',
        'Protocol transaction fee volume showing sustainable monthly upward trajectory'
      ]
    },
    {
      phaseNumber: '07',
      name: 'Phase 7 — Scale & Institutionalization',
      timeframe: 'T+90 Days Onward',
      leadEngines: 'Institutional & BD Sales Engine, Performance & Forecasting',
      objective: 'Expand institutional partnerships, secure secondary tier-1 listings, and establish recurring revenue.',
      actions: [
        'Institutional BD pipeline execution: hedge funds, family offices, and enterprise partners',
        'Secondary tier-1 CEX listing applications supported by verified volume data',
        'Cross-chain deployments, L2 expansion, and RWA tokenization initiatives',
        'Quarterly financial, treasury, and revenue forecasting audits',
        'Transitioning core governance towards community and foundation autonomy'
      ],
      proposedKpis: [
        'Self-sustaining protocol fee revenue covering ongoing operational expenses',
        'Diversified institutional treasury holding and multi-exchange volume distribution',
        'Multi-chain developer ecosystem building proprietary integrations independently'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50/50 text-slate-900 pt-16 lg:pt-[72px]">
      <IcoSubNav />

      {/* ── HERO SECTION ── */}
      <section className="relative bg-slate-950 text-white py-20 lg:py-28 overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=2000&q=80"
            alt="Launch and Growth Execution"
            className="w-full h-full object-cover object-center opacity-35 mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/80 to-slate-900/65" />
          <div className="absolute inset-0 bg-radial-at-t from-blue-900/30 via-transparent to-transparent pointer-events-none" />
        </div>

        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/20 border border-blue-400/40 text-blue-300 text-xs font-semibold uppercase tracking-wider mb-6 shadow-sm">
              <Rocket className="w-3.5 h-3.5 text-blue-400" />
              <span>Layer 2 & Layer 3 Execution</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.08] mb-6 font-heading">
              Engineer the Launch. <span className="text-blue-400">Build What Comes Next.</span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed font-normal mb-10 max-w-2xl">
              Coordinated TGE orchestration, creator sequencing, exchange operations, and post-launch retention systems designed to turn transient hype into permanent liquidity.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                to="/book-consultation"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold px-8 py-4 rounded-xl transition-all shadow-lg border border-blue-400/40 text-base group"
              >
                <span>Plan Your Launch and Growth Strategy</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="#playbook"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold px-8 py-4 rounded-xl transition-all text-base border border-white/30 backdrop-blur-sm shadow-md"
              >
                <span>View 7-Phase Playbook</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── EXECUTION ENGINES & MODULES ── */}
      <section className="py-20 lg:py-24 bg-white border-b border-slate-200/80">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <div className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-2">
              Modular Operating Engines
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4 font-heading">
              Nine Specialized Launch & Retention Engines
            </h2>
            <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
              Every engine addresses a critical point of friction in crypto go-to-market. Deployed modularly or synchronized in full TGE Command.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {executionModules.map((m, idx) => {
              const Icon = m.icon;
              return (
                <div
                  key={idx}
                  id={m.id}
                  className="bg-slate-50/70 rounded-2xl border border-slate-200 p-8 hover:bg-white hover:border-blue-400 hover:shadow-xl transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-11 h-11 rounded-xl bg-blue-100 flex items-center justify-center text-blue-700">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2.5 py-1 rounded-md border border-blue-200">
                        {m.subtitle}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3 font-heading">{m.title}</h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">{m.description}</p>
                    
                    <div className="space-y-2 mb-6">
                      <div className="text-xs font-bold uppercase tracking-wider text-slate-900">Key Capabilities:</div>
                      {m.capabilities.map((c, ci) => (
                        <div key={ci} className="flex items-start gap-2 text-xs text-slate-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                          <span>{c}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-200/60">
                    <Link
                      to="/book-consultation"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-700"
                    >
                      <span>Deploy This Engine</span>
                      <ChevronRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-600 leading-relaxed max-w-4xl mx-auto text-center">
            <strong>KOL & Creator Scale Note:</strong> While our standard blueprint models 20–50 coordinated creators, final creator roster size, tier allocation, and platform focus are customized based on project category, target liquidity depth, and allocated media budget.
          </div>
        </div>
      </section>

      {/* ── SEVEN-PHASE ICO/TGE LAUNCH PLAYBOOK ── */}
      <section id="playbook" className="py-20 lg:py-28 bg-slate-50 border-b border-slate-200/80">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <div className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-2">
              The Seven-Phase Blueprint
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4 font-heading">
              Complete Seven-Phase ICO/TGE Launch Timeline
            </h2>
            <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
              From initial tokenomics diligence at T-16 weeks to post-launch liquidity compounding at T+90 days onward. Each phase defines clear actions, responsible engines, and measurable exit criteria.
            </p>
          </div>

          {/* Phase Selector Tabs */}
          <div className="flex gap-2 overflow-x-auto no-scrollbar pb-4 mb-8">
            {playbookPhases.map((p, idx) => (
              <button
                key={idx}
                onClick={() => setActivePhaseTab(idx)}
                className={`px-4 py-3 rounded-xl text-xs font-bold whitespace-nowrap transition-all border text-left shrink-0 ${
                  activePhaseTab === idx
                    ? 'bg-blue-600 text-white border-blue-600 shadow-md'
                    : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100'
                }`}
              >
                <div className="text-[10px] opacity-75 font-mono">PHASE {p.phaseNumber}</div>
                <div>{p.name.split('—')[1]}</div>
              </button>
            ))}
          </div>

          {/* Active Phase Card */}
          {playbookPhases[activePhaseTab] && (() => {
            const phase = playbookPhases[activePhaseTab];
            return (
              <div className="bg-white rounded-2xl border border-slate-200 p-8 sm:p-10 shadow-md">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-100 mb-8">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xs font-extrabold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-200 font-mono">
                        {phase.timeframe}
                      </span>
                      <span className="text-xs font-semibold text-slate-500">
                        Lead Engines: <span className="text-slate-900 font-medium">{phase.leadEngines}</span>
                      </span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading">{phase.name}</h3>
                  </div>
                  <div className="text-4xl font-black text-slate-200 font-mono hidden md:block">
                    {phase.phaseNumber}
                  </div>
                </div>

                <div className="mb-8">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Phase Objective:</div>
                  <p className="text-base text-slate-800 font-medium leading-relaxed">{phase.objective}</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-8">
                  {/* Actions Column */}
                  <div className="lg:col-span-7 bg-slate-50 rounded-xl p-6 border border-slate-200/80">
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-4 flex items-center gap-2">
                      <Sliders className="w-4 h-4 text-blue-600" />
                      <span>Operational Actions & Deliverables:</span>
                    </div>
                    <div className="space-y-3">
                      {phase.actions.map((act, ai) => (
                        <div key={ai} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
                          <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                          <span>{act}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Proposed Exit Criteria Column */}
                  <div className="lg:col-span-5 bg-blue-50/70 rounded-xl p-6 border border-blue-200/80">
                    <div className="text-xs font-bold uppercase tracking-wider text-blue-900 mb-4 flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-blue-700" />
                      <span>Proposed Exit Measurement Criteria:</span>
                    </div>
                    <p className="text-[11px] text-blue-800 mb-4 leading-normal">
                      Labeled as proposed targets and quantitative gating criteria rather than guaranteed outcomes:
                    </p>
                    <div className="space-y-3">
                      {phase.proposedKpis.map((kpi, ki) => (
                        <div key={ki} className="flex items-start gap-2.5 text-xs sm:text-sm text-blue-950 font-semibold leading-relaxed">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0 mt-2" />
                          <span>{kpi}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-slate-100">
                  <div className="text-xs text-slate-500">
                    Ready to schedule Phase {phase.phaseNumber} deliverables?
                  </div>
                  <Link
                    to="/book-consultation"
                    className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold px-6 py-3 rounded-xl transition-all shadow-sm text-sm"
                  >
                    <span>Initiate {phase.name.split('—')[1]}</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            );
          })()}
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="py-20 lg:py-24 bg-slate-950 text-white relative overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 font-heading">
              Plan Your Launch and Growth Strategy
            </h2>
            <p className="text-slate-300 text-base leading-relaxed mb-8 font-normal">
              Schedule a comprehensive launch architecture briefing. We evaluate your current runway, listing timeline, and creator requirements.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/book-consultation"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold px-8 py-4 rounded-xl transition-all shadow-lg text-base group"
              >
                <span>Schedule Launch Briefing</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/ico-acceleration/solutions-engagement"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold px-8 py-4 rounded-xl transition-all text-base border border-white/20"
              >
                <span>View Solutions by Segment</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
