import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Compass,
  ArrowRight,
  Search,
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
  Radar
} from 'lucide-react';
import IcoSubNav from '../../components/IcoSubNav';

export default function IcoIntelligence() {
  const location = useLocation();

  useEffect(() => {
    document.title = 'Intelligence | ProfitMachines Crypto Protocol';
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

  const deliverablesCards = [
    {
      title: 'Market Readiness',
      deliverable: 'Market Validation Report & Go/No-Go Recommendation',
      description: 'Comprehensive scoring of market demand liquidity, timing suitability, and regulatory clarity across key launch jurisdictions.',
      icon: Search,
      badge: 'Layer 0'
    },
    {
      title: 'Narrative Readiness',
      deliverable: 'Token Narrative & Messaging Architecture',
      description: 'Unified one-sentence narrative, investor deck alignment, utility documentation, and public launch communication guide.',
      icon: Sparkles,
      badge: 'Core Brand'
    },
    {
      title: 'Demand Intelligence',
      deliverable: 'Wallet-Level Demand Scoring & Intent Feeds',
      description: 'On-chain telemetry mapping verified addresses, historical transaction intent, and capital deployment capacity.',
      icon: Target,
      badge: 'Layer 1'
    },
    {
      title: 'Competitive Intelligence',
      deliverable: 'Competitive Displacement Map & Community Signals',
      description: 'Real-time monitoring of competitor sentiment, user friction indicators, migration vectors, and whitespace positioning.',
      icon: Radar,
      badge: 'Radar'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50/50 text-slate-900 pt-16 lg:pt-[72px]">
      <IcoSubNav />

      {/* ── HERO SECTION ── */}
      <section className="relative bg-slate-950 text-white py-20 lg:py-28 overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=2000&q=80"
            alt="Crypto Intelligence"
            className="w-full h-full object-cover object-center opacity-35 mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/80 to-slate-900/65" />
          <div className="absolute inset-0 bg-radial-at-t from-blue-900/30 via-transparent to-transparent pointer-events-none" />
        </div>

        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/20 border border-blue-400/40 text-blue-300 text-xs font-semibold uppercase tracking-wider mb-6 shadow-sm">
              <Search className="w-3.5 h-3.5 text-blue-400" />
              <span>Layer 0 & Layer 1 Intelligence</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.08] mb-6 font-heading">
              Intelligence That Informs Every <span className="text-blue-400">Launch Decision</span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed font-normal mb-10 max-w-2xl">
              ProfitMachines helps crypto teams assess market readiness, discover on-chain demand, and eliminate guesswork before committing treasury spend to TGE campaigns.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                to="/book-consultation"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold px-8 py-4 rounded-xl transition-all shadow-lg border border-blue-400/40 text-base group"
              >
                <span>Request Intelligence Diagnostic</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/ico-acceleration/launch-growth"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold px-8 py-4 rounded-xl transition-all text-base border border-white/30 backdrop-blur-sm shadow-md"
              >
                <span>Explore Launch & Growth</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION A: MARKET VALIDATION INTELLIGENCE ── */}
      <section id="market-validation" className="py-20 lg:py-24 bg-white border-b border-slate-200/80">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5">
              <div className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-2">Section A · Layer 0</div>
              <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4 font-heading">
                Market Validation Intelligence
              </h2>
              <p className="text-slate-600 text-base leading-relaxed mb-6">
                Launching into an unvalidated market is the single highest cause of post-TGE treasury impairment. We run quantitative validation diagnostics to benchmark readiness against active macroeconomic and regulatory conditions.
              </p>
              
              <div className="bg-slate-50 border border-slate-200/90 rounded-xl p-5 mb-6">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">Standard Deliverable</div>
                <div className="text-base font-bold text-slate-900 mb-1 font-heading">Market Validation Report & Go/No-Go Scorecard</div>
                <p className="text-xs text-slate-600">
                  Comprehensive audit delivering an actuarial Go/No-Go readiness score, risk factors, and recommended launch window timing.
                </p>
              </div>

              <Link
                to="/book-consultation"
                className="inline-flex items-center gap-1.5 text-sm font-bold text-blue-600 hover:text-blue-700"
              >
                <span>Order Market Validation Assessment</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-slate-50 rounded-xl border border-slate-200/80 p-6">
                <div className="w-9 h-9 rounded-lg bg-blue-100 flex items-center justify-center text-blue-700 mb-4">
                  <BarChart3 className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2 font-heading">Demand-Readiness Assessment</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Quantitative evaluation of real liquidity interest, community velocity, and organic engagement ratios compared against historical top-quartile launches.
                </p>
              </div>

              <div className="bg-slate-50 rounded-xl border border-slate-200/80 p-6">
                <div className="w-9 h-9 rounded-lg bg-blue-100 flex items-center justify-center text-blue-700 mb-4">
                  <Radar className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2 font-heading">Competitive Landscape Analysis</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Deep-dive mapping of adjacent protocols, TVL distributions, market share dynamics, and whitespace opportunities within your target sector.
                </p>
              </div>

              <div className="bg-slate-50 rounded-xl border border-slate-200/80 p-6">
                <div className="w-9 h-9 rounded-lg bg-blue-100 flex items-center justify-center text-blue-700 mb-4">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2 font-heading">Go/No-Go Scoring Matrix</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  A disciplined 100-point gating framework across tokenomics health, community authenticity, legal clearances, and exchange readiness.
                </p>
              </div>

              <div className="bg-slate-50 rounded-xl border border-slate-200/80 p-6">
                <div className="w-9 h-9 rounded-lg bg-blue-100 flex items-center justify-center text-blue-700 mb-4">
                  <Clock className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2 font-heading">Launch-Timing Optimization</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Cross-referencing broader crypto market cycles, liquidity conditions, upcoming competitor launches, and jurisdictional regulatory gates.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION B: TOKENOMICS & NARRATIVE STUDIO ── */}
      <section id="narrative-studio" className="py-20 lg:py-24 bg-slate-50 border-b border-slate-200/80">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5 order-1 lg:order-2">
              <div className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-2">Section B · Engine 3</div>
              <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4 font-heading">
                Tokenomics & Narrative Studio
              </h2>
              <p className="text-slate-600 text-base leading-relaxed mb-6">
                A tokenomics model without a crisp, memorable narrative fails to capture attention. A compelling story without sustainable token mechanics fails to retain capital. We unite both into a unified communication framework.
              </p>

              <div className="bg-white border border-slate-200/90 rounded-xl p-5 mb-6 shadow-xs">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">Standard Deliverable</div>
                <div className="text-base font-bold text-slate-900 mb-1 font-heading">Token Narrative & Messaging Framework</div>
                <p className="text-xs text-slate-600">
                  Full messaging playbook containing your one-sentence narrative, tier-1 investor narrative, community FAQ, and public tokenomics kit.
                </p>
              </div>

              <Link
                to="/book-consultation"
                className="inline-flex items-center gap-1.5 text-sm font-bold text-blue-600 hover:text-blue-700"
              >
                <span>Structure Your Token Narrative</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="lg:col-span-7 order-2 lg:order-1 space-y-4">
              <div className="bg-white rounded-xl border border-slate-200/80 p-6 flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                  <Target className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900 font-heading mb-1">Token Purpose & Intended Audience</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Clearly segmenting token utility across users, validators, liquidity providers, and governance participants, preventing conflicting economic incentives.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-xl border border-slate-200/80 p-6 flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900 font-heading mb-1">The One-Sentence Token Narrative</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Distilling complex cryptographic and economic architecture into a single, punchy proposition that creators, journalists, and exchanges immediately repeat.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-xl border border-slate-200/80 p-6 flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                  <Coins className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900 font-heading mb-1">Tokenomics Messaging Kit</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Transparent, mathematically defensible visual explanations of circulating supply, emission curves, lockup schedules, and fee sink mechanics.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-xl border border-slate-200/80 p-6 flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900 font-heading mb-1">Consistent Launch Communications</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Standardized PR boilerplates, founder quote guides, Discord announcement copy, and exchange submission documentation ensuring zero narrative divergence.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION C: STARTUP MVP ACCELERATION ENGINE ── */}
      <section id="mvp-acceleration" className="py-20 lg:py-24 bg-white border-b border-slate-200/80">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <div className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-2">Section C · Engine 2</div>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4 font-heading">
              Startup MVP Acceleration Engine
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              Designed for early-stage teams moving from concept to testnet. We validate developer interest, harvest early demand signals, and structure investor materials before public exposure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div className="bg-slate-50 rounded-xl border border-slate-200/80 p-6">
              <div className="text-2xl font-black text-blue-600 mb-2 font-mono">01</div>
              <h3 className="text-base font-bold text-slate-900 mb-2 font-heading">Idea-to-MVP Planning</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Scoping critical path deliverables, testnet milestones, and architectural requirements for early protocol adoption.
              </p>
            </div>

            <div className="bg-slate-50 rounded-xl border border-slate-200/80 p-6">
              <div className="text-2xl font-black text-blue-600 mb-2 font-mono">02</div>
              <h3 className="text-base font-bold text-slate-900 mb-2 font-heading">Early Demand Signals</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Tracking developer repo forks, early testnet faucet requests, and whitelist registrations to prove initial traction.
              </p>
            </div>

            <div className="bg-slate-50 rounded-xl border border-slate-200/80 p-6">
              <div className="text-2xl font-black text-blue-600 mb-2 font-mono">03</div>
              <h3 className="text-base font-bold text-slate-900 mb-2 font-heading">Investor Narrative</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Institutional-grade pitch deck development, token economics modeling, and competitive moat justification for private rounds.
              </p>
            </div>

            <div className="bg-slate-50 rounded-xl border border-slate-200/80 p-6">
              <div className="text-2xl font-black text-blue-600 mb-2 font-mono">04</div>
              <h3 className="text-base font-bold text-slate-900 mb-2 font-heading">GTM Readiness Blueprint</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Establishing the commercial operational roadmap required to transition from closed testnet to public testnet and TGE.
              </p>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-bold text-blue-700 uppercase tracking-wider">Deliverable:</span>
              <span className="text-sm font-bold text-slate-900 ml-2">MVP and GTM Readiness Blueprint (Ready for Seed/Series A Diligence)</span>
            </div>
            <Link
              to="/ico-acceleration/solutions-engagement#model-5"
              className="text-xs font-bold text-blue-600 hover:text-blue-700 shrink-0 inline-flex items-center gap-1"
            >
              <span>View Model 5 Package</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── SECTION D: CRYPTO DEMAND DISCOVERY ENGINE ── */}
      <section id="demand-discovery" className="py-20 lg:py-24 bg-slate-50 border-b border-slate-200/80">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6">
              <div className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-2">Section D · Engine 1</div>
              <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4 font-heading">
                Crypto Demand Discovery Engine
              </h2>
              <p className="text-slate-600 text-base leading-relaxed mb-6">
                Web3 demand is not measured in website pageviews—it lives on-chain. Our proprietary engine analyzes wallet histories, liquidity patterns, and smart-contract interactions to identify committed capital before campaign launch.
              </p>

              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-2.5 text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span><strong>Wallet-Level Demand Scoring:</strong> Profiling wallet holding durations, historical staking, and cross-chain bridge activity.</span>
                </div>
                <div className="flex items-start gap-2.5 text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span><strong>On-Chain Intent Mining:</strong> Identifying active users moving capital into related testnets and staking contracts.</span>
                </div>
                <div className="flex items-start gap-2.5 text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span><strong>Live Demand Feeds:</strong> Continuous telemetry streaming high-intent wallet cohorts directly into your whitelist pipelines.</span>
                </div>
                <div className="flex items-start gap-2.5 text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span><strong>Market-Timing Inputs:</strong> Correlating macro gas costs, liquidity pool depths, and token velocity with launch schedules.</span>
                </div>
              </div>

              <div className="p-4 bg-white rounded-lg border border-slate-200 text-xs text-slate-600">
                <strong className="text-slate-900">Deliverable:</strong> Demand Intelligence Report with verified wallet segments, intent scores, and optimal activation dates.
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="bg-slate-900 rounded-2xl p-6 text-white border border-slate-800 shadow-xl">
                <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-4">
                  <div className="flex items-center gap-2">
                    <Activity className="w-4 h-4 text-cyan-400" />
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-300">On-Chain Demand Scoring</span>
                  </div>
                  <span className="text-xs font-mono text-emerald-400">STATUS: ACTIVE TELEMETRY</span>
                </div>
                <div className="space-y-3 font-mono text-xs">
                  <div className="bg-slate-950/80 p-3 rounded-lg border border-slate-800/80 flex justify-between items-center">
                    <div>
                      <div className="text-slate-400 text-[10px]">COHORT A: L1 ECOSYSTEM MIGRATORS</div>
                      <div className="text-white font-bold text-sm">48,200 High-Intent Wallets</div>
                    </div>
                    <span className="text-emerald-400 font-bold bg-emerald-950/80 px-2.5 py-1 rounded border border-emerald-800/50">Score: 92/100</span>
                  </div>
                  <div className="bg-slate-950/80 p-3 rounded-lg border border-slate-800/80 flex justify-between items-center">
                    <div>
                      <div className="text-slate-400 text-[10px]">COHORT B: DEFI LIQUIDITY PROVIDERS</div>
                      <div className="text-white font-bold text-sm">14,800 Sticky LP Addresses</div>
                    </div>
                    <span className="text-emerald-400 font-bold bg-emerald-950/80 px-2.5 py-1 rounded border border-emerald-800/50">Score: 88/100</span>
                  </div>
                  <div className="bg-slate-950/80 p-3 rounded-lg border border-slate-800/80 flex justify-between items-center">
                    <div>
                      <div className="text-slate-400 text-[10px]">COHORT C: MERCENARY AIRDROP FARMERS</div>
                      <div className="text-rose-400 font-bold text-sm">31,500 Flagged Sybil Addresses</div>
                    </div>
                    <span className="text-rose-400 font-bold bg-rose-950/80 px-2.5 py-1 rounded border border-rose-800/50">Filtered (Excluded)</span>
                  </div>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-800 text-[11px] text-slate-400 text-center">
                  Live filtering separates authentic adoption from Sybil drain prior to token distribution.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION E: COMMUNITY SIGNAL COMMAND CENTER ── */}
      <section id="community-signals" className="py-20 lg:py-24 bg-white border-b border-slate-200/80">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <div className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-2">Section E · Signal Intelligence</div>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4 font-heading">
              Community Signal Command Center
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              Moving beyond vanity follower numbers to monitor genuine participant quality, developer dialogue, and smart-money positioning across Telegram, Discord, and X.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-slate-50 rounded-xl border border-slate-200/80 p-6">
              <Users className="w-8 h-8 text-blue-600 mb-3" />
              <h3 className="text-base font-bold text-slate-900 mb-2 font-heading">Sentiment Telemetry</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Algorithmic sentiment scoring across Telegram chat logs, Discord dev channels, and X mentions to measure genuine optimism vs. orchestrated hype.
              </p>
            </div>

            <div className="bg-slate-50 rounded-xl border border-slate-200/80 p-6">
              <ShieldCheck className="w-8 h-8 text-blue-600 mb-3" />
              <h3 className="text-base font-bold text-slate-900 mb-2 font-heading">Member-Quality Indicators</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Bot-filtering algorithms identifying real community participants, technical contributors, and repetitive spam networks.
              </p>
            </div>

            <div className="bg-slate-50 rounded-xl border border-slate-200/80 p-6">
              <TrendingUp className="w-8 h-8 text-blue-600 mb-3" />
              <h3 className="text-base font-bold text-slate-900 mb-2 font-heading">Engagement Trends</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Tracking daily active chatter, question frequency, governance proposal feedback, and genuine retention velocity.
              </p>
            </div>

            <div className="bg-slate-50 rounded-xl border border-slate-200/80 p-6">
              <Coins className="w-8 h-8 text-blue-600 mb-3" />
              <h3 className="text-base font-bold text-slate-900 mb-2 font-heading">Whale & Smart Money Signals</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Monitoring high-net-worth wallet clustering, notable fund addresses, and influencer accumulation where public data is suitable.
              </p>
            </div>
          </div>

          <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-700 flex items-center justify-between">
            <span><strong>Deliverable:</strong> Community Signal Weekly Report & Real-Time Alert Dashboard</span>
            <span className="text-slate-500 font-mono">Deliverable Code: DL-INT-04</span>
          </div>
        </div>
      </section>

      {/* ── SECTION F: COMPETITIVE DISPLACEMENT RADAR ── */}
      <section id="competitive-radar" className="py-20 lg:py-24 bg-slate-50 border-b border-slate-200/80">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <div className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-2">Section F · Strategic Positioning</div>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4 font-heading">
              Competitive Displacement Radar
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              Pinpoint competitor vulnerabilities, community dissatisfaction, and migration triggers to position your token as the logical superior alternative.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white rounded-xl border border-slate-200/80 p-7">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center font-bold">1</div>
                <h3 className="text-lg font-bold text-slate-900 font-heading">Competitor-Community Signals</h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Monitoring competitor Telegram and Discord channels for community complaints regarding governance impasses, token dilution, fee hikes, and delayed roadmaps.
              </p>
            </div>

            <div className="bg-white rounded-xl border border-slate-200/80 p-7">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center font-bold">2</div>
                <h3 className="text-lg font-bold text-slate-900 font-heading">Dissatisfaction & Migration Triggers</h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Detecting when key builders, validators, and liquidity providers begin seeking alternative protocols due to high fees, network congestion, or poor developer support.
              </p>
            </div>

            <div className="bg-white rounded-xl border border-slate-200/80 p-7">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center font-bold">3</div>
                <h3 className="text-lg font-bold text-slate-900 font-heading">Competitive Positioning Opportunities</h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Arming your founders and community leaders with clear, factual comparative battlecards highlighting your throughput, fee structure, and developer ergonomics.
              </p>
            </div>

            <div className="bg-white rounded-xl border border-slate-200/80 p-7">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center font-bold">4</div>
                <h3 className="text-lg font-bold text-slate-900 font-heading">Adoption Opportunities Validation</h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Qualifying specific dApps and development studios expressing interest in cross-chain expansion before initiating foundation outreach.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl border border-slate-200/90 p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-bold text-blue-700 uppercase tracking-wider">Deliverable:</span>
              <span className="text-sm font-bold text-slate-900 ml-2">Competitive Opportunity Map & Displacement Battlecards</span>
            </div>
            <Link
              to="/book-consultation"
              className="text-xs font-bold text-blue-600 hover:text-blue-700 shrink-0 inline-flex items-center gap-1"
            >
              <span>Commission Displacement Analysis</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── SECTION G: DELIVERABLES SUMMARY & CTA ── */}
      <section className="py-20 lg:py-24 bg-white border-b border-slate-200/80">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14 text-center mx-auto">
            <div className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-2">Section G · Synthesis</div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4 font-heading">
              Intelligence Deliverables Summary
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              Every intelligence engagement delivers four concrete, audit-grade artifacts that de-risk the entire launch journey.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {deliverablesCards.map((d, idx) => {
              const Icon = d.icon;
              return (
                <div
                  key={idx}
                  className="bg-slate-50/70 rounded-2xl border border-slate-200 p-6 flex flex-col justify-between hover:bg-white hover:border-blue-400 hover:shadow-lg transition-all"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center text-blue-700">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-extrabold uppercase tracking-wider text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-200 font-mono">
                        {d.badge}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2 font-heading">{d.title}</h3>
                    <div className="text-xs font-bold text-blue-600 mb-3">{d.deliverable}</div>
                    <p className="text-xs text-slate-600 leading-relaxed mb-4">{d.description}</p>
                  </div>
                  <div className="pt-3 border-t border-slate-200/60 text-[11px] font-semibold text-slate-500">
                    Audit-Grade Document & Live Telemetry
                  </div>
                </div>
              );
            })}
          </div>

          {/* Forward CTA to Page Two */}
          <div className="bg-slate-950 text-white rounded-2xl p-8 sm:p-12 text-center max-w-4xl mx-auto shadow-xl relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="text-2xl sm:text-3xl font-extrabold mb-4 font-heading">Ready to Turn Intelligence into Coordinated Execution?</h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto mb-8 font-normal">
                Review the 7-phase TGE launch playbook, 20–50 creator sequencing architecture, exchange operations, and post-launch retention systems.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link
                  to="/ico-acceleration/launch-growth"
                  className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold px-8 py-3.5 rounded-xl transition-all shadow-md text-sm group"
                >
                  <span>Explore Launch & Growth</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/book-consultation"
                  className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold px-7 py-3.5 rounded-xl transition-all text-sm border border-white/20"
                >
                  <span>Schedule Diagnostic</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
