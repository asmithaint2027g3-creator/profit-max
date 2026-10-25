import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Layers,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Building2,
  Cpu,
  Coins,
  Gamepad2,
  Landmark,
  Rocket,
  Compass,
  Clock,
  Sliders,
  DollarSign,
  Briefcase,
  AlertTriangle,
  ChevronRight,
  HelpCircle,
  TrendingUp,
  FileText
} from 'lucide-react';
import IcoSubNav from '../../components/IcoSubNav';

export default function IcoSolutionsEngagement() {
  const location = useLocation();
  const [selectedSegmentIdx, setSelectedSegmentIdx] = useState<number>(0);

  useEffect(() => {
    document.title = 'Solutions & Engagement Models | ProfitMachines Crypto Protocol';
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

  const segmentSolutions = [
    {
      id: 'l1-l2',
      title: 'L1 & L2 Ecosystems',
      badge: 'Infrastructure',
      icon: Cpu,
      lead: 'Accelerating developer ecosystem adoption, institutional bridge TVL, and sustainable network gas fees.',
      challenges: 'Slow ecosystem BD, unmonitored grant leakage, and developer attrition to competing rollups.',
      keyCapabilities: [
        {
          name: 'Developer Adoption Feeds',
          detail: 'Tracking active smart contract deployments, GitHub commits, and SDK usage across developer cohorts.'
        },
        {
          name: 'Ecosystem BD & Grant Pipelines',
          detail: 'Screening and qualifying incoming foundation grant applicants on verifiable technical milestones.'
        },
        {
          name: 'TVL & Fee-Revenue Attribution',
          detail: 'Attributing bridge volume and network gas consumption directly to specific partner dApps.'
        },
        {
          name: 'Cross-Chain Developer Onboarding',
          detail: 'Targeted migration campaigns identifying EVM and Solana developers seeking lower throughput costs.'
        }
      ]
    },
    {
      id: 'defi',
      title: 'DeFi Protocols',
      badge: 'Decentralized Finance',
      icon: Coins,
      lead: 'Uncovering authentic on-chain trading intent, optimizing incentive efficiency, and eliminating mercenary liquidity bleed.',
      challenges: 'Mercenary capital farming yields and immediately dumping; unsustainable token emission inflation.',
      keyCapabilities: [
        {
          name: 'On-Chain Intent Scoring',
          detail: 'Distinguishing long-term yield providers from automated flash-loan arbitrage and dumping bots.'
        },
        {
          name: 'Incentive Curve Optimization',
          detail: 'Modeling emissions to reward lockup duration and protocol fee generation rather than transient TVL.'
        },
        {
          name: 'Mercenary-Capital Risk Filtering',
          detail: 'Automated telemetry detecting whale address clusters with historical dump records post-harvest.'
        },
        {
          name: 'Acquisition Cost & Retention Accounting',
          detail: 'Measuring CAC per dollar of deposited liquidity and 90-day retention yield.'
        }
      ]
    },
    {
      id: 'gaming',
      title: 'Web3 Gaming & Metaverse',
      badge: 'GameFi',
      icon: Gamepad2,
      lead: 'Separating true active players from token speculators, slashing user acquisition costs, and building in-game economies.',
      challenges: 'Bot farming wiping out token reserves, high player churn, and conflicting player-investor goals.',
      keyCapabilities: [
        {
          name: 'Player vs. Token-Holder Journey Mapping',
          detail: 'Bifurcating funnels for active gameplay enthusiasts vs. external secondary market traders.'
        },
        {
          name: 'User Acquisition Cost (UAC) Compression',
          detail: 'Deploying gaming creator sequences with direct wallet quest completions and in-game achievements.'
        },
        {
          name: 'Anti-Bot Farming Safeguards',
          detail: 'Behavioral analytics tracking repetitive on-chain actions and automated keystroke emulation.'
        },
        {
          name: 'DAU & Long-Term In-Game Retention',
          detail: 'In-game season passes, NFT asset staking, and tournament reward schedules.'
        }
      ]
    },
    {
      id: 'exchanges',
      title: 'Centralized Exchanges (CEX)',
      badge: 'Trading Venues',
      icon: Landmark,
      lead: 'Streamlining token listing diligence, tracking decision milestones, and optimizing market-maker capital efficiency.',
      challenges: 'High listing costs, uncoordinated liquidity providers, and sudden volume collapse post-opening bell.',
      keyCapabilities: [
        {
          name: 'Listing Pipeline & Diligence Automation',
          detail: 'Standardized institutional intake evaluating tokenomics, community verification, and legal clearances.'
        },
        {
          name: 'Decision-Stage Milestone Tracking',
          detail: 'Real-time project tracking across listing committee review, legal clearance, and wallet integration.'
        },
        {
          name: 'Market-Maker Coordination & SLAs',
          detail: 'Binding minimum order book depth and spread requirements to ensure tight launch spreads.'
        },
        {
          name: 'Trading Volume Attribution',
          detail: 'Tracking referral sources, deposit channels, and active trader retention across listing pairs.'
        }
      ]
    },
    {
      id: 'ico-founders',
      title: 'ICO & TGE Founders',
      badge: 'Token Launch',
      icon: Rocket,
      lead: 'Complete end-to-end launch command: narrative engineering, creator orchestration, listing ops, and post-TGE growth.',
      challenges: 'Fragmented agencies, opaque influencer ROI, regulatory uncertainty, and post-listing volume drops.',
      keyCapabilities: [
        {
          name: 'Unified Token Narrative & Messaging',
          detail: 'A single, crisp value proposition aligned across whitepaper, investor deck, and community channels.'
        },
        {
          name: 'Community Lead-Time Sequencing',
          detail: 'Building authentic human community 90 days before launch rather than rushed last-minute vanity ads.'
        },
        {
          name: 'Launch Readiness & Compliance Gating',
          detail: 'A disciplined 100-point Go/No-Go framework protecting founders from premature capital exposure.'
        },
        {
          name: 'Post-TGE Retention & Fee Monetization',
          detail: 'Immediate rollout of staking, utility education, and protocol fee sharing to stabilize token float.'
        }
      ]
    }
  ];

  const engagementModels = [
    {
      id: 'model-1',
      number: 'Model 01',
      name: 'Launch Diagnostic Sprint',
      target: 'Founders, CMOs, and Foundation Councils evaluating TGE feasibility within 3–6 months',
      duration: '2–3 Weeks',
      scope: 'Layers 0 & 1: Market validation, narrative/tokenomics audit, competitive displacement radar, jurisdictional compliance mapping, and a comprehensive 90-day launch roadmap.',
      deliverables: 'Quantitative Go/No-Go Scorecard and Launch Architecture Blueprint ready for board review.',
      commercials: 'Fixed fee package. Note: Proposed credit of the diagnostic fee toward Model 2 (TGE Command) upon engagement confirmation.',
      cta: 'Request Diagnostic Sprint'
    },
    {
      id: 'model-2',
      number: 'Model 02',
      name: 'TGE Command',
      target: 'Committed token ecosystems entering public launch phase (T-16 Weeks to TGE Week)',
      duration: '16 Weeks (T-16 to TGE)',
      scope: 'Layers 0–2 & Trust Layer: Full community build, KOL and creator orchestration (20–50 creators), PR amplification, tiered exchange listing operations, Sybil-resistant airdrop, and launch day command center.',
      deliverables: 'Coordinated multi-channel launch, verified wallet whitelist, confirmed exchange listings, and zero-downtime launch command.',
      commercials: 'Monthly operational retainer plus pass-through media/KOL budgets at cost (final pricing subject to commercial confirmation).',
      cta: 'Book TGE Command Briefing'
    },
    {
      id: 'model-3',
      number: 'Model 03',
      name: 'Post-TGE Growth Retainer',
      target: 'Live token projects seeking to stabilize post-listing float and transition to sustainable protocol revenue',
      duration: '6–12 Months (Quarterly Review)',
      scope: 'Layers 3 & 4: 90-day compounding retention machine, utility education, staking rollout, ecosystem BD pipeline, protocol fee optimization, and predictive revenue forecasting.',
      deliverables: 'Monthly wallet retention cohort reports, active DAU growth sprints, partner integrations, and treasury inflow models.',
      commercials: 'Fixed monthly retainer plus an agreed operational performance bonus where appropriate.',
      cta: 'Engage Post-TGE Growth'
    },
    {
      id: 'model-4',
      number: 'Model 04',
      name: 'Performance / Token-Aligned Hybrid',
      target: 'High-conviction protocols seeking deep commercial alignment and shared operational accountability',
      duration: 'Milestone-Governed Execution',
      scope: 'Full lifecycle acceleration tied explicitly to defined operational outcomes: verified listing achievements, verified active wallet milestones, fee revenue thresholds, and TVL targets.',
      deliverables: 'Full-stack growth execution with quarterly milestone auditing and operational gating.',
      commercials: 'Reduced base retainer plus contractually defined operational success fees. Notice: Fees are strictly tied to operational business outcomes, never token price appreciation or trading returns. Token/SAFT agreements require legal review.',
      cta: 'Explore Hybrid Structure'
    },
    {
      id: 'model-5',
      number: 'Model 05',
      name: 'MVP → GTM Acceleration',
      target: 'Early-stage Web3 research teams and venture-backed founders transitioning from concept to public testnet',
      duration: '8–12 Weeks',
      scope: 'Idea-to-MVP scoping, early developer demand signals, seed/Series A investor deck preparation, technical litepaper, and public testnet GTM strategy.',
      deliverables: 'Complete MVP product-market fit blueprint, developer documentation, investor collateral, and early community nucleus.',
      commercials: 'Fixed fee engagement, with any optional venture-style upside separately agreed and legally reviewed.',
      cta: 'Accelerate Your MVP'
    },
    {
      id: 'model-6',
      number: 'Model 06',
      name: 'Enterprise Ecosystem License',
      target: 'L1/L2 Foundations, major Centralized Exchanges, and multi-game GameFi studios',
      duration: 'Annual License + Dedicated SLA',
      scope: 'Full enterprise deployment of ProfitMachines proprietary engines: Demand Discovery, Journey Intelligence, Revenue Operations, and the Trust Layer across the entire ecosystem.',
      deliverables: 'Custom telemetry instances, private API access, foundation grant screening workflows, and dedicated launch architect support.',
      commercials: 'Annual enterprise license plus deployment and integration SLA (pricing to be confirmed based on ecosystem scale).',
      cta: 'Discuss Enterprise Licensing'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50/50 text-slate-900 pt-16 lg:pt-[72px]">
      <IcoSubNav />

      {/* ── HERO SECTION ── */}
      <section className="relative bg-slate-950 text-white py-20 lg:py-28 overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=2000&q=80"
            alt="Crypto Growth Solutions"
            className="w-full h-full object-cover object-center opacity-35 mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/80 to-slate-900/65" />
          <div className="absolute inset-0 bg-radial-at-t from-blue-900/30 via-transparent to-transparent pointer-events-none" />
        </div>

        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/20 border border-blue-400/40 text-blue-300 text-xs font-semibold uppercase tracking-wider mb-6 shadow-sm">
              <Layers className="w-3.5 h-3.5 text-blue-400" />
              <span>Tailored Solutions & Commercial Continuum</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.08] mb-6 font-heading">
              Crypto Growth Solutions Built Around <span className="text-blue-400">Your Business Model</span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed font-normal mb-10 max-w-2xl">
              From L1/L2 foundations to DeFi protocols, Web3 gaming, and ICO founders: explore segment-engineered revenue engines and flexible commercial engagement models.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                to="#models"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold px-8 py-4 rounded-xl transition-all shadow-lg border border-blue-400/40 text-base group"
              >
                <span>Compare 6 Engagement Models</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="#segments"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold px-8 py-4 rounded-xl transition-all text-base border border-white/30 backdrop-blur-sm shadow-md"
              >
                <span>View Solutions by Segment</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION A: SOLUTIONS BY SEGMENT ── */}
      <section id="segments" className="py-20 lg:py-24 bg-white border-b border-slate-200/80">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <div className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-2">Section A · Segment Specialization</div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4 font-heading">
              Engineered for Your Specific Ecosystem Mechanics
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              Every crypto business model possesses distinct liquidity mechanics, user motivations, and regulatory considerations. We deploy purpose-built growth architecture tailored to each segment.
            </p>
          </div>

          {/* Segment Selector Tabs */}
          <div className="flex gap-2 overflow-x-auto no-scrollbar pb-3 mb-8">
            {segmentSolutions.map((seg, idx) => {
              const Icon = seg.icon;
              return (
                <button
                  key={seg.id}
                  onClick={() => setSelectedSegmentIdx(idx)}
                  className={`flex items-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all border shrink-0 ${
                    selectedSegmentIdx === idx
                      ? 'bg-blue-600 text-white border-blue-600 shadow-md'
                      : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{seg.title}</span>
                </button>
              );
            })}
          </div>

          {/* Active Segment Display */}
          {segmentSolutions[selectedSegmentIdx] && (() => {
            const active = segmentSolutions[selectedSegmentIdx];
            const Icon = active.icon;
            return (
              <div className="bg-slate-50 rounded-2xl border border-slate-200 p-8 sm:p-10 shadow-xs">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-slate-200 mb-8">
                  <div>
                    <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-100/80 px-3 py-1 rounded mb-2">
                      <Icon className="w-3.5 h-3.5" />
                      <span>{active.badge}</span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading">{active.title}</h3>
                    <p className="text-sm sm:text-base text-slate-600 max-w-2xl mt-1 font-medium">{active.lead}</p>
                  </div>
                  <div className="bg-white p-4 rounded-xl border border-slate-200 max-w-md shrink-0">
                    <div className="text-xs font-bold uppercase tracking-wider text-rose-600 mb-1 flex items-center gap-1.5">
                      <AlertTriangle className="w-3.5 h-3.5" />
                      <span>Primary Segment Friction</span>
                    </div>
                    <p className="text-xs text-slate-700 leading-relaxed font-normal">{active.challenges}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  {active.keyCapabilities.map((cap, ci) => (
                    <div key={ci} className="bg-white p-6 rounded-xl border border-slate-200/90 shadow-2xs">
                      <div className="flex items-center gap-2 text-base font-bold text-slate-900 font-heading mb-2">
                        <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                        <span>{cap.name}</span>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{cap.detail}</p>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-slate-200">
                  <span className="text-xs text-slate-500">
                    Deploying custom growth telemetry for {active.title}
                  </span>
                  <Link
                    to="/book-consultation"
                    className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold px-6 py-3 rounded-xl transition-all shadow-sm text-xs sm:text-sm"
                  >
                    <span>Request {active.title} Briefing</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            );
          })()}
        </div>
      </section>

      {/* ── SECTION B: SIX ENGAGEMENT MODELS ── */}
      <section id="models" className="py-20 lg:py-28 bg-slate-50 border-b border-slate-200/80">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <div className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-2">Section B · Commercial Packages</div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4 font-heading">
              Six Transparent Engagement Models
            </h2>
            <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
              Every partnership is structured around clear commercial tiers, non-negotiable compliance guardrails, and defined operational outcomes.
            </p>
          </div>

          <div className="space-y-6 mb-16">
            {engagementModels.map((m) => (
              <div
                key={m.id}
                id={m.id}
                className="bg-white rounded-2xl border border-slate-200 p-8 shadow-xs hover:border-blue-400 hover:shadow-lg transition-all"
              >
                <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 pb-6 border-b border-slate-100 mb-6">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs font-extrabold uppercase tracking-wider text-blue-700 bg-blue-50 px-2.5 py-0.5 rounded border border-blue-200 font-mono">
                        {m.number}
                      </span>
                      <span className="text-xs font-bold text-slate-500 flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        <span>{m.duration}</span>
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 font-heading mb-2">{m.name}</h3>
                    <p className="text-xs sm:text-sm text-slate-600 font-medium">
                      <strong>Target Customer:</strong> {m.target}
                    </p>
                  </div>
                  <div className="lg:text-right shrink-0">
                    <Link
                      to="/book-consultation"
                      className="inline-flex items-center gap-2 bg-slate-900 hover:bg-blue-600 text-white font-bold px-6 py-3 rounded-xl transition-all shadow-xs text-xs sm:text-sm"
                    >
                      <span>{m.cta}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs sm:text-sm">
                  <div className="bg-slate-50 p-5 rounded-xl border border-slate-200/70">
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-2">Scope of Operations</div>
                    <p className="text-slate-600 leading-relaxed font-normal">{m.scope}</p>
                  </div>

                  <div className="bg-slate-50 p-5 rounded-xl border border-slate-200/70">
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-2">Core Deliverables</div>
                    <p className="text-slate-600 leading-relaxed font-normal">{m.deliverables}</p>
                  </div>

                  <div className="bg-blue-50/60 p-5 rounded-xl border border-blue-100">
                    <div className="text-xs font-bold uppercase tracking-wider text-blue-900 mb-2">Commercial Structure</div>
                    <p className="text-blue-950 leading-relaxed font-medium">{m.commercials}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* ── SECTION C: COMMERCIAL PRINCIPLES ── */}
          <div className="bg-white rounded-2xl border border-slate-200 p-8 sm:p-10 shadow-xs">
            <div className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-2">Section C · Commercial Principles</div>
            <h3 className="text-2xl font-bold text-slate-900 font-heading mb-6">
              Core Commercial & Operating Principles
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="p-5 rounded-xl bg-slate-50 border border-slate-200/80">
                <div className="font-bold text-slate-900 text-sm font-heading mb-2">Diagnostic → Command → Retainer</div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Clear stepping stones: start with low-risk validation sprints, scale into full launch command, and transition to long-term lifecycle retention.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-slate-50 border border-slate-200/80">
                <div className="font-bold text-slate-900 text-sm font-heading mb-2">Structured Performance Tiers</div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Hybrid models feature reduced monthly retainers paired with measurable operational milestones (listings, verified wallets, fee revenue).
                </p>
              </div>

              <div className="p-5 rounded-xl bg-slate-50 border border-slate-200/80">
                <div className="font-bold text-slate-900 text-sm font-heading mb-2">100% Transparent Media at Cost</div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Creator and advertising budgets are passed through at net cost with zero hidden agency markups or referral rebates.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-slate-50 border border-slate-200/80">
                <div className="font-bold text-slate-900 text-sm font-heading mb-2">Trust Layer Built-In</div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Every commercial engagement automatically includes active Compliance by Design reviews, creative SLAs, and Sybil screening safeguards.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="py-20 lg:py-24 bg-slate-950 text-white relative overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 font-heading">
              Find the Right Engagement for Your Project
            </h2>
            <p className="text-slate-300 text-base leading-relaxed mb-8 font-normal">
              Schedule a scoping conversation with our crypto growth partners to discuss your launch timeline, runway, and required operational model.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/book-consultation"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold px-8 py-4 rounded-xl transition-all shadow-lg text-base group"
              >
                <span>Schedule Scoping Session</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/ico-acceleration/trust-performance"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold px-8 py-4 rounded-xl transition-all text-base border border-white/20"
              >
                <span>Review Trust & Performance SLAs</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
