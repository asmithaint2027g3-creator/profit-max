import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ShieldCheck,
  Coins,
  Sparkles,
  TrendingUp,
  AlertTriangle,
  CheckCircle2,
  Lock,
  ChevronRight,
  Users,
  Target,
  BarChart3,
  Layers,
  Cpu,
  UserCheck,
  FileCheck,
  Scale,
  Award,
  Zap,
  Clock,
  Compass,
  FileText
} from 'lucide-react';
import IndustryIntakeForm from '../../components/forms/IndustryIntakeForm';

export default function CryptoIndustry() {
  const [activeDomain, setActiveDomain] = useState<number>(0);

  const metrics = [
    {
      num: '8.4x',
      title: 'Verified Non-Mercenary Wallet Retention',
      context: 'Achieved through sybil-resistant on-chain scoring, protocol utility loops, and fee-sharing incentives.'
    },
    {
      num: '94%',
      title: 'Sybil & Bot Airdrop Liquidation Filter',
      context: 'Behavioral wallet clustering eliminating mercenary multi-account airdrop dumps prior to token generation.'
    },
    {
      num: '100%',
      title: 'Jurisdictional Marketing Compliance',
      context: 'Audit-ready promotional operations conforming strictly to MiCA (EU), VARA (UAE), ASCI, and UK FCA standards.'
    },
    {
      num: '$180M+',
      title: 'Post-TGE Liquidity Depth Preserved',
      context: 'The 90-Day TGE Launch Arc structuring real day-1 trading volume and institutional market-making coordination.'
    }
  ];

  const failureModes = [
    {
      num: '01',
      title: 'Post-TGE Community & Volume Collapse',
      impact: 'Token price tumbles 80% post-listing as mercenary speculators dump allocations, leading to secondary market death spirals.',
      whyGenericFails: 'Standard crypto marketing agencies rely on ephemeral Telegram shilling and hype bots rather than sticky protocol utility and recurring fee mechanics.'
    },
    {
      num: '02',
      title: 'Mercenary Capital & Sybil Airdrop Farming',
      impact: 'Millions in token incentives burned on automated bots that drain liquidity pools and bridge capital out within hours of claim.',
      whyGenericFails: 'Generic bounty platforms count raw wallet addresses without behavioral on-chain activity filters or identity clustering telemetry.'
    },
    {
      num: '03',
      title: 'Regulatory Marketing Enforcement (MiCA / VARA / SEC)',
      impact: 'Cease-and-desist orders, frozen founder bank accounts, severe statutory penalties, and exchange delisting notices.',
      whyGenericFails: 'Offshore growth hackers make illicit price or return promises, violating regional financial promotion rules without jurisdictional guardrails.'
    },
    {
      num: '04',
      title: 'KOL Dependency Without Organic Demand Telemetry',
      impact: 'Six-figure upfront influencer payments that produce zero organic transaction volume and attract only predatory sniper bots.',
      whyGenericFails: 'Crypto agencies broker undisclosed influencer agreements without performance attribution or verifiable wallet onboarding telemetry.'
    }
  ];

  const solutions = [
    {
      num: '01',
      title: 'The 90-Day TGE Launch Arc & Protocol Fee Architecture',
      architecture: 'Structured 3-phase pre-launch narrative lock, liquidity foundation engineering, and fee-bearing staking infrastructure.',
      outcome: 'Sustainable day-1 trading volume, healthy liquidity depth, and long-term protocol fee distribution that defends token value.'
    },
    {
      num: '02',
      title: 'Wallet-Level Intent Telemetry & Sybil-Resistant Incentive Design',
      architecture: 'Heuristic on-chain clustering, transaction longevity analysis, and proof-of-humanity verification pipelines.',
      outcome: '94% reduction in sybil airdrop capture, ensuring 100% of community incentives flow to long-term protocol participants.'
    },
    {
      num: '03',
      title: 'Jurisdictional Marketing Guardrails & Claims Review SLA',
      architecture: 'Territory-gated campaigns, automated 24-hour creative claims review SLA, and zero-return-promise legal charters.',
      outcome: '100% audit-ready promotional campaigns compliant with EU MiCA, Dubai VARA, UK FCA, and Singapore MAS frameworks.'
    },
    {
      num: '04',
      title: 'Institutional Narrative Lock & Attributed KOL Governance',
      architecture: 'Performance-coupled KOL contracts, verified multi-jurisdiction #Ad disclosures, and real-time wallet tracking links.',
      outcome: 'Complete elimination of predatory dump risks and 4.2x higher conversion of qualified developer and liquidity provider cohorts.'
    }
  ];

  const capabilityDomains = [
    {
      name: 'Market & Whitespace Discovery',
      subtitle: 'Mapping protocol developer demand, liquidity pools, and institutional crypto capital.',
      capA: {
        title: 'On-Chain Liquidity Whitespace',
        features: ['Competitor TVL migration analysis', 'Cross-chain capital bridge flows', 'Yield-seeking wallet tracking']
      },
      capB: {
        title: 'Developer Mindshare Discovery',
        features: ['GitHub commit velocity analysis', 'Smart contract deployment alerts', 'Hackathon participant telemetry']
      }
    },
    {
      name: 'Demand & Pipeline Generation',
      subtitle: 'Executing the 90-Day TGE Launch Arc and automated ecosystem developer onboarding.',
      capA: {
        title: 'The 90-Day TGE Launch Arc',
        features: ['Day -90 to Day 0 milestone governance', 'Exchange listing coordination', 'Market-making liquidity orchestration']
      },
      capB: {
        title: 'Autonomous Ecosystem Outbound',
        features: ['DeFi builder recruitment fleets', 'Institutional validator sourcing', 'Enterprise partner pipeline']
      }
    },
    {
      name: 'Value & Deal Execution',
      subtitle: 'Engineering sustainable protocol fee mechanics and institutional investment memos.',
      capA: {
        title: 'Token Economics Narrative Lock',
        features: ['Utility value accrual design', 'Vesting unlock schedule modeling', 'Institutional investment dossiers']
      },
      capB: {
        title: 'Listing & Custody Deal Room',
        features: ['Tier-1 CEX application kits', 'Institutional custody attestations', 'Liquidity provider alignment models']
      }
    },
    {
      name: 'Channel & Distribution Economics',
      subtitle: 'Balancing DEX liquidity pools, CEX listings, and ecosystem grant programs.',
      capA: {
        title: 'Liquidity Pool Efficiency',
        features: ['Concentrated liquidity design', 'Impermanent loss minimization', 'Automated market-making telemetry']
      },
      capB: {
        title: 'Grant Program ROI Governance',
        features: ['Milestone-based tranche releases', 'KPI verification contracts', 'Developer retention scorecards']
      }
    },
    {
      name: 'Competitive Intelligence',
      subtitle: 'Deconstructing competing L1/L2 and DeFi protocols to capture TVL and builders.',
      capA: {
        title: 'Protocol Moat Teardown',
        features: ['Gas fee and TPS benchmarking', 'Consensus mechanism battlecards', 'Ecosystem incentive comparison']
      },
      capB: {
        title: 'TVL Vampire Defense Playbook',
        features: ['Early-warning liquidity exit triggers', 'Dynamic fee defense models', 'Community counter-narratives']
      }
    },
    {
      name: 'Revenue Realization & FinOps',
      subtitle: 'Continuous monitoring of treasury assets, protocol fee burn/distribution, and runway.',
      capA: {
        title: 'Treasury & Fee Telemetry',
        features: ['Real-time fee collection analytics', 'Runway burn forecasting', 'Diversification hedging models']
      },
      capB: {
        title: 'Jurisdictional Audit Cockpit',
        features: ['MiCA compliance reporting', 'Sanctioned wallet blocklists', 'Proof-of-reserves transparency']
      }
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50/50 text-slate-900 pt-16 lg:pt-[72px]">
      
      {/* ── SECTION 1: HERO & STRATEGIC THESIS ── */}
      <section className="relative bg-slate-950 text-white py-16 lg:py-24 overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 opacity-[0.15]"
            style={{
              backgroundImage: 'linear-gradient(to right, #334155 1px, transparent 1px), linear-gradient(to bottom, #334155 1px, transparent 1px)',
              backgroundSize: '4rem 4rem'
            }}
          />
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none" />
        </div>

        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-400/30 text-emerald-400 text-xs font-mono font-bold tracking-wider uppercase mb-6 shadow-sm">
              <Coins className="w-3.5 h-3.5" />
              <span>CRYPTO & WEB3 PROTOCOLS REVENUE ARCHITECTURE</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.08] mb-6 font-heading">
              Revenue Architecture & GTM Operational Blueprints for{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-300">
                Crypto & Web3 Protocols
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed font-normal mb-6">
              ProfitMachines engineers autonomous demand generation, mathematically verified forecast accuracy, and sub-second buyer intent telemetry, meeting the strictest compliance and growth requirements of the crypto and web3 protocols sector.
            </p>

            <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 mb-8 max-w-3xl">
              <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider block mb-1">
                STRATEGIC THESIS
              </span>
              <p className="text-sm sm:text-base text-slate-200 font-medium leading-relaxed">
                Converting speculative token volume into recurring, compliance-grade fee revenue and ecosystem growth.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                to="/book-consultation"
                className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold px-7 py-4 rounded-xl transition-all shadow-lg shadow-emerald-500/20 text-sm group cursor-pointer"
              >
                <span>Book a Revenue Diagnostic</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/talk-to-expert"
                className="inline-flex items-center gap-2 border border-slate-700 bg-slate-900/80 hover:bg-slate-800 text-white font-semibold px-6 py-4 rounded-xl transition-all text-sm cursor-pointer"
              >
                <span>Talk to a Principal Architect</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 2: VERIFIED INDUSTRY PERFORMANCE METRICS ── */}
      <section className="py-16 sm:py-20 bg-slate-900 border-b border-slate-800 relative">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {metrics.map((m, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-950/60 border border-slate-800/80 backdrop-blur-xl shadow-lg relative group hover:border-emerald-500/40 transition-all"
              >
                <div className="text-3xl sm:text-4xl font-extrabold text-emerald-400 font-mono tracking-tight mb-2">
                  {m.num}
                </div>
                <div className="text-base font-bold text-white mb-2 font-heading">
                  {m.title}
                </div>
                <p className="text-xs text-slate-400 leading-relaxed font-sans">
                  {m.context}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 3: TARGET ENTERPRISE FIT (IDEAL CUSTOMER PROFILE) ── */}
      <section className="py-20 sm:py-24 bg-white border-b border-slate-200/80 relative">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <div className="font-mono text-xs font-semibold text-emerald-600 uppercase tracking-wider mb-2">
              QUALIFICATION MATRIX
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight mb-4 font-heading">
              Target Enterprise Fit & Architecture Scope.
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              We deploy systems-level revenue engineering for high-stakes blockchain foundations, DeFi infrastructure protocols, and institutional Web3 platforms.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Column 1: Target Organizations & Scale */}
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 mb-6">
                  <Coins className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-950 mb-3 font-heading">
                  Target Organizations & Scale
                </h3>
                <div className="space-y-2 mb-6">
                  {['Layer 1 & Layer 2 Blockchain Foundations', 'Decentralized Finance (DeFi) Protocols', 'Web3 Gaming & Metaverse Studios', 'Centralized Exchanges (CEX) & Token Founders'].map((org, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs font-medium text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                      <span>{org}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="pt-4 border-t border-slate-200">
                <span className="font-mono text-[10px] text-slate-400 uppercase tracking-wider block mb-1">
                  OPERATIONAL COMPLEXITY
                </span>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Protocols with $50M–$2B+ in Total Value Locked (TVL), 500k+ on-chain wallets, multi-jurisdiction regulatory filings, and complex market-making commitments.
                </p>
              </div>
            </div>

            {/* Column 2: Decision Makers & Buying Triggers */}
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 mb-6">
                  <Users className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-950 mb-3 font-heading">
                  Decision Makers & Buying Triggers
                </h3>
                <div className="space-y-1.5 mb-6">
                  <span className="font-mono text-[10px] text-slate-400 uppercase tracking-wider block mb-1">
                    KEY EXECUTIVE STAKEHOLDERS
                  </span>
                  {['Foundation Council & Executive Directors', 'Head of Ecosystem Growth', 'VP of Business Development', 'Head of Institutional Partnerships', 'Chief Compliance & Legal Officer'].map((role, i) => (
                    <span key={i} className="inline-block px-2.5 py-1 rounded-md bg-white border border-slate-200 text-xs font-medium text-slate-700 mr-1.5 mb-1.5">
                      {role}
                    </span>
                  ))}
                </div>
              </div>
              <div className="pt-4 border-t border-slate-200">
                <span className="font-mono text-[10px] text-slate-400 uppercase tracking-wider block mb-1">
                  PRIMARY BUYING TRIGGERS
                </span>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Upcoming 90-day TGE countdown, post-airdrop wallet dumping, predatory influencer shill exposure, and impending MiCA or VARA regulatory compliance audits.
                </p>
              </div>
            </div>

            {/* Column 3: Technical & Operational Maturity */}
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 mb-6">
                  <Cpu className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-950 mb-3 font-heading">
                  Technical & Operational Maturity
                </h3>
                <div className="space-y-3 mb-6">
                  <div className="p-3 rounded-xl bg-white border border-slate-200">
                    <span className="text-xs font-bold text-slate-900 block mb-0.5">On-Chain Analytics Stack</span>
                    <p className="text-xs text-slate-600">Dune, Nansen, Artemis, or proprietary RPC nodes capturing granular wallet retention and TVL telemetry.</p>
                  </div>
                  <div className="p-3 rounded-xl bg-white border border-slate-200">
                    <span className="text-xs font-bold text-slate-900 block mb-0.5">Community & Governance Layer</span>
                    <p className="text-xs text-slate-600">Discord/Telegram automation, Snapshot governance portals, and institutional developer grant frameworks.</p>
                  </div>
                </div>
              </div>
              <div className="pt-4 border-t border-slate-200">
                <span className="font-mono text-[10px] text-slate-400 uppercase tracking-wider block mb-1">
                  JURISDICTIONAL MARKETING GUARDRAILS
                </span>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Strict territorial boundaries conforming to EU MiCA, UAE VARA, and UK FCA standards with zero price or yield promises.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 4: SECTOR-SPECIFIC REVENUE FAILURE MODES ── */}
      <section className="py-20 sm:py-24 bg-slate-50 border-b border-slate-200/80 relative">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <div className="font-mono text-xs font-semibold text-rose-600 uppercase tracking-wider mb-2">
              SYSTEMIC FRICTION
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight mb-4 font-heading">
              Four Revenue Failure Modes in Web3 Protocols.
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              Hype-driven growth without structural revenue engineering invariably leads to post-launch liquidity crises. These four failure points crush Web3 projects.
            </p>
          </div>

          <div className="space-y-6">
            {failureModes.map((fm) => (
              <div
                key={fm.num}
                className="p-8 rounded-3xl bg-white border border-slate-200/80 shadow-sm relative overflow-hidden group hover:border-slate-300 transition-all"
              >
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                  <div className="lg:max-w-xl">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="font-mono text-xs font-bold px-2.5 py-1 rounded bg-rose-50 text-rose-600 border border-rose-200">
                        CONSTRAINT {fm.num}
                      </span>
                      <h3 className="text-xl font-bold text-slate-950 font-heading">
                        {fm.title}
                      </h3>
                    </div>
                    <div className="mb-2">
                      <span className="font-mono text-[11px] text-slate-400 uppercase tracking-wider block mb-1">
                        BUSINESS IMPACT
                      </span>
                      <p className="text-sm text-slate-700 font-medium">
                        {fm.impact}
                      </p>
                    </div>
                  </div>

                  <div className="lg:max-w-md p-5 rounded-2xl bg-slate-50 border border-slate-100">
                    <span className="font-mono text-[10px] text-rose-600 uppercase tracking-wider font-bold block mb-1">
                      WHY GENERIC APPROACHES FAIL
                    </span>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {fm.whyGenericFails}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 5: SYSTEMS-LEVEL REVENUE ENGINEERING ── */}
      <section className="py-20 sm:py-24 bg-white border-b border-slate-200/80 relative">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <div className="font-mono text-xs font-semibold text-emerald-600 uppercase tracking-wider mb-2">
              PRODUCTION ARCHITECTURE
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight mb-4 font-heading">
              Systems-Level Revenue Solutions (Problem → Solution Mapping).
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              We deploy the 90-Day TGE Launch Arc and automated on-chain telemetry to replace mercenary speculation with enduring protocol fee revenue.
            </p>
          </div>

          <div className="space-y-6">
            {solutions.map((sol) => (
              <div
                key={sol.num}
                className="p-8 rounded-3xl bg-slate-900 text-white border border-slate-800 shadow-xl relative overflow-hidden"
              >
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                  <div className="lg:max-w-xl">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="font-mono text-xs font-bold px-2.5 py-1 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-400/30">
                        SOLUTION {sol.num}
                      </span>
                      <h3 className="text-xl font-bold text-white font-heading">
                        {sol.title}
                      </h3>
                    </div>
                    <div>
                      <span className="font-mono text-[11px] text-slate-400 uppercase tracking-wider block mb-1">
                        ARCHITECTURE & STACK
                      </span>
                      <p className="text-sm text-slate-300 leading-relaxed font-sans">
                        {sol.architecture}
                      </p>
                    </div>
                  </div>

                  <div className="lg:max-w-md p-5 rounded-2xl bg-slate-950/80 border border-slate-800">
                    <span className="font-mono text-[10px] text-emerald-400 uppercase tracking-wider font-bold block mb-1">
                      EXPECTED PRODUCTION OUTCOME
                    </span>
                    <p className="text-xs text-slate-200 font-medium leading-relaxed">
                      {sol.outcome}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 6: FULL-STACK CAPABILITY MATRIX ── */}
      <section className="py-20 sm:py-24 bg-slate-50 border-b border-slate-200/80 relative">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <div className="font-mono text-xs font-semibold text-emerald-600 uppercase tracking-wider mb-2">
              CAPABILITY CONTINUUM
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight mb-4 font-heading">
              Full-Stack Capability Matrix.
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              Explore our six core revenue architecture domains engineered specifically for crypto protocols, L1/L2s, and Web3 platforms.
            </p>
          </div>

          {/* Domain Tabs */}
          <div className="flex flex-wrap gap-2 mb-8">
            {capabilityDomains.map((domain, idx) => (
              <button
                key={idx}
                onClick={() => setActiveDomain(idx)}
                className={`px-4 py-2.5 rounded-xl text-xs font-mono font-semibold transition-all cursor-pointer ${
                  activeDomain === idx
                    ? 'bg-slate-900 text-emerald-400 shadow-md'
                    : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200'
                }`}
              >
                0{idx + 1} · {domain.name}
              </button>
            ))}
          </div>

          {/* Active Domain Deep-Dive Card */}
          <div className="p-8 sm:p-12 rounded-3xl bg-white border border-slate-200 shadow-lg">
            <div className="max-w-3xl mb-8">
              <span className="font-mono text-xs font-bold text-emerald-600 uppercase tracking-wider mb-2 block">
                DOMAIN 0{activeDomain + 1} // PRODUCTION ARCHITECTURE
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-950 mb-2 font-heading">
                {capabilityDomains[activeDomain].name}
              </h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                {capabilityDomains[activeDomain].subtitle}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
                <h4 className="text-lg font-bold text-slate-950 mb-3 font-heading">
                  {capabilityDomains[activeDomain].capA.title}
                </h4>
                <div className="space-y-2">
                  {capabilityDomains[activeDomain].capA.features.map((feat, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
                <h4 className="text-lg font-bold text-slate-950 mb-3 font-heading">
                  {capabilityDomains[activeDomain].capB.title}
                </h4>
                <div className="space-y-2">
                  {capabilityDomains[activeDomain].capB.features.map((feat, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 7: PROVABLE RETURN ON INVESTMENT ── */}
      <section className="py-20 sm:py-24 bg-white border-b border-slate-200/80 relative">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left: 4 Key Outcomes */}
            <div className="lg:col-span-5">
              <div className="font-mono text-xs font-semibold text-emerald-600 uppercase tracking-wider mb-2">
                MEASURABLE ROI
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight mb-6 font-heading">
                Deterministic Return on Investment.
              </h2>
              <p className="text-base text-slate-600 leading-relaxed mb-8">
                Every Web3 protocol deployment is benchmarked against verifiable on-chain data. We couple our engagements to non-mercenary wallet retention and post-TGE liquidity depth.
              </p>

              <div className="space-y-4">
                {metrics.map((m, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between">
                    <div>
                      <div className="text-sm font-bold text-slate-900">{m.title}</div>
                      <div className="text-xs text-slate-500">{m.context}</div>
                    </div>
                    <div className="text-xl font-bold font-mono text-emerald-600 flex-shrink-0 ml-4">
                      {m.num}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Standard 3-Stage Implementation Framework */}
            <div className="lg:col-span-7">
              <div className="p-8 sm:p-10 rounded-3xl bg-slate-900 text-white border border-slate-800 shadow-xl">
                <span className="font-mono text-xs font-bold text-emerald-400 uppercase tracking-wider mb-2 block">
                  DEPLOYMENT LIFECYCLE
                </span>
                <h3 className="text-2xl font-bold text-white mb-6 font-heading">
                  Standard 3-Stage Implementation Framework
                </h3>

                <div className="space-y-6">
                  <div className="p-5 rounded-2xl bg-slate-950/80 border border-slate-800">
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-mono text-xs font-bold text-emerald-400">STAGE 01 · 2–4 WEEKS</span>
                      <span className="text-[11px] font-mono text-slate-400">BASELINE LOCK</span>
                    </div>
                    <div className="text-base font-bold text-white mb-1">The 90-Day TGE Launch Arc Diagnostic</div>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      Comprehensive on-chain wallet health audit, sybil vulnerability assessment, jurisdictional marketing boundary map, and pre-TGE timeline lock.
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl bg-slate-950/80 border border-slate-800">
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-mono text-xs font-bold text-emerald-400">STAGE 02 · 6–12 WEEKS</span>
                      <span className="text-[11px] font-mono text-slate-400">VALUE REALIZATION</span>
                    </div>
                    <div className="text-base font-bold text-white mb-1">Value Realization & Pre-TGE Orchestration</div>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      Deployed sybil-resistant scoring engine, institutional deal room memos, autonomous developer outreach agents, and live on-chain telemetry cockpit.
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl bg-slate-950/80 border border-slate-800">
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-mono text-xs font-bold text-emerald-400">STAGE 03 · ONGOING</span>
                      <span className="text-[11px] font-mono text-slate-400">COMPOUNDING VALUE</span>
                    </div>
                    <div className="text-base font-bold text-white mb-1">Post-TGE Liquidity & Ecosystem Expansion</div>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      Protocol fee sharing governance, secondary market depth optimization, international validator recruitment, and dedicated Resident Growth Architect deployment.
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── SECTION 8: TRACEABLE BLUEPRINT CASE STUDY ── */}
      <section className="py-20 sm:py-24 bg-slate-50 border-b border-slate-200/80 relative">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-12 rounded-3xl bg-white border border-slate-200 shadow-xl relative overflow-hidden">
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-mono font-bold uppercase tracking-wider">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>VERIFIED PRODUCTION BLUEPRINT</span>
              </span>
              <span className="text-xs font-mono text-slate-400">
                Tier-1 Modular Layer-2 Rollup Ecosystem
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-950 mb-4 font-heading">
              $180M+ Preserved Liquidity & 94% Sybil Filter for a Tier-1 L2 Launch
            </h3>

            <p className="text-base text-slate-700 leading-relaxed mb-8 max-w-4xl">
              Executed the 90-Day TGE Launch Arc across 420,000 participant wallets. Filtered out 94% of mercenary airdrop sybil addresses, structured institutional market-making agreements, and achieved 100% compliance with EU MiCA guidelines — preserving over $180M in post-TGE liquidity depth.
            </p>

            <Link
              to="/book-consultation"
              className="inline-flex items-center gap-2 text-emerald-600 font-bold text-sm hover:text-emerald-700 transition-colors group cursor-pointer"
            >
              <span>Read Full Crypto Protocol Case Study & Telemetry</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── SECTION 9: CUSTOM INDUSTRY ROADMAP & CTA ── */}
      <section className="py-24 sm:py-32 bg-slate-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-emerald-500/10 rounded-full blur-[160px]" />
        </div>

        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6">
              <span className="font-mono text-xs font-bold text-emerald-400 uppercase tracking-wider px-3 py-1 rounded-full bg-emerald-400/10 border border-emerald-400/20 inline-block mb-4">
                CONFIDENTIAL ENGAGEMENT
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-6 font-heading">
                Ready to Architect Industrial-Grade Revenue in Crypto & Web3?
              </h2>
              <p className="text-slate-300 text-base sm:text-lg mb-8 leading-relaxed">
                Engage directly with our principal revenue architects. We audit your existing GTM stack, eliminate pipeline leakage, and engineer verifiable production growth.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <Link
                  to="/book-consultation"
                  className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold px-7 py-4 rounded-xl transition-all shadow-lg shadow-emerald-500/20 text-sm group cursor-pointer"
                >
                  <span>Book a Revenue Diagnostic</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  to="/talk-to-expert"
                  className="inline-flex items-center gap-2 border border-slate-700 bg-slate-900 hover:bg-slate-800 text-white font-semibold px-6 py-4 rounded-xl transition-all text-sm cursor-pointer"
                >
                  <span>Talk to a Principal Architect</span>
                </Link>
              </div>
            </div>

            {/* Confidential Revenue Architecture Intake Form */}
            <div className="lg:col-span-6">
              <IndustryIntakeForm industryName="Crypto & Web3 Protocols" accentColorClass="text-emerald-400" />
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
