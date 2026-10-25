import { useState, useEffect } from 'react';
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
  FileText,
  Sparkles,
  ArrowUpRight,
  Scale
} from 'lucide-react';

export default function IcoSolutionsEngagement() {
  const location = useLocation();

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
  }, [location.hash]);

  const engagementModelsList = [
    {
      id: 'model-1',
      number: 'Model 01',
      name: 'Launch Diagnostic Sprint',
      achieve: 'Validate market readiness, audit tokenomics narrative, and establish a quantified Go/No-Go scorecard before deploying major capital.',
      activities: 'Comprehensive audit of tokenomics float, jurisdictional marketing guardrails, competitive displacement map, and draft 90-day launch roadmap.',
      profitMachinesResp: 'Lead quantitative diagnostic, conduct competitor audit, benchmark community signals, and produce Go/No-Go readiness blueprint.',
      clientResp: 'Provide current tokenomics documentation, whitepaper drafts, historical marketing spend, and team governance access.',
      deliverables: 'Go/No-Go Scorecard and 90-Day Launch Architecture Blueprint ready for leadership/board review.',
      commercials: 'Fixed fee package. Note: Proposed credit of the diagnostic fee toward Model 2 (TGE Command) upon engagement confirmation.'
    },
    {
      id: 'model-2',
      number: 'Model 02',
      name: 'TGE Command',
      achieve: 'Execute an end-to-end coordinated token launch across community building, creator sequencing, exchange operations, and TGE launch week.',
      activities: 'Multi-channel creator campaigns (20–50 verified creators), PR amplification, tiered exchange listing diligence, Sybil-resistant airdrop, and launch day command center.',
      profitMachinesResp: 'Manage creator briefs and publishing schedules, coordinate exchange diligence materials, run airdrop screening, and manage live sentiment ops.',
      clientResp: 'Final sign-off on creator assets, timely exchange fee escrows, contract deployment approvals, and founder AMA participation.',
      deliverables: 'Synchronized multi-channel TGE execution, verified whitelist registry, confirmed exchange announcements, and zero-downtime launch operations.',
      commercials: 'Monthly operational retainer plus pass-through media/KOL budgets at cost (final terms subject to commercial confirmation).'
    },
    {
      id: 'model-3',
      number: 'Model 03',
      name: 'Post-TGE Growth Retainer',
      achieve: 'Transition initial launch momentum and speculative liquidity into lasting protocol adoption, staking participation, and recurring fee revenue.',
      activities: '90-day post-launch content, developer tutorials, staking and governance onboarding sequences, institutional BD pipeline, and cohort retention telemetry.',
      profitMachinesResp: 'Deploy ongoing content calendars, monitor wallet retention cohorts, structure ecosystem partnership outreach, and conduct quarterly growth audits.',
      clientResp: 'Execute protocol product updates, provide on-chain analytics access, and maintain active developer relations.',
      deliverables: 'Monthly wallet retention cohort reports, active DAU growth sprints, partner integrations, and protocol revenue models.',
      commercials: 'Fixed monthly retainer plus an agreed operational performance bonus where appropriate.'
    },
    {
      id: 'model-4',
      number: 'Model 04',
      name: 'Performance / Token-Aligned Hybrid',
      achieve: 'Establish deep commercial co-alignment through a reduced base retainer paired with success fees tied strictly to verifiable operational milestones.',
      activities: 'Full lifecycle launch and growth execution with quarterly milestone auditing across exchange listings, verified active wallets, fee revenue, and TVL targets.',
      profitMachinesResp: 'Deliver complete growth execution while assuming co-aligned operational risk based on contractually agreed milestone gates.',
      clientResp: 'Provide transparent data access, milestone verification sign-offs, and timely escrow releases.',
      deliverables: 'Full-stack growth operations with quarterly milestone audits and verified performance attribution reporting.',
      commercials: 'Reduced base retainer plus contractually defined operational success fees. Notice: Never tied to token-price appreciation or trading returns. Token/SAFT arrangements require legal review.'
    },
    {
      id: 'model-5',
      number: 'Model 05',
      name: 'MVP → GTM Acceleration',
      achieve: 'Guide early-stage Web3 research teams and venture-backed founders from initial concept to a validated public testnet and seed/Series A diligence readiness.',
      activities: 'Problem definition, MVP scoping, developer journey mapping, investor pitch deck preparation, technical litepaper, and public testnet GTM strategy.',
      profitMachinesResp: 'Structure technical product scoping, validate early developer signals, refine investor positioning, and establish community foundations.',
      clientResp: 'Core smart contract and software engineering execution, technical architecture documentation, and founder availability for investor briefings.',
      deliverables: 'MVP Scope Document, Developer User Journey, Investor Briefing Deck, and Public Testnet GTM Plan.',
      commercials: 'Fixed fee scope, with any optional venture-style upside separately agreed and legally reviewed.'
    },
    {
      id: 'model-6',
      number: 'Model 06',
      name: 'Enterprise Ecosystem License',
      achieve: 'Deploy the complete ProfitMachines revenue protocol, telemetry dashboards, and the Compliance by Design Trust Layer across an entire L1/L2 ecosystem or CEX platform.',
      activities: 'Enterprise software integration, custom demand discovery telemetry instances, foundation grant applicant screening workflows, and dedicated launch architect support.',
      profitMachinesResp: 'Provide dedicated enterprise instances, customized telemetry feeds, quarterly executive reviews, and continuous algorithm updates.',
      clientResp: 'Enterprise API integration, internal team onboarding, and foundation-level governance coordination.',
      deliverables: 'Enterprise Telemetry Instance, Custom API Access, Grant Diligence Workflows, and Dedicated Advisory SLA.',
      commercials: 'Annual enterprise license plus deployment and integration SLA (pricing to be confirmed based on ecosystem scale).'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50/50 text-slate-900 pt-16 lg:pt-[72px]">
      {/* ── HERO SECTION ── */}
      <section className="relative bg-slate-950 text-white py-16 lg:py-24 overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=2000&q=80"
            alt="Solutions & Engagement Models"
            className="w-full h-full object-cover object-center opacity-40 mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/75 to-slate-900/60" />
          <div className="absolute inset-0 bg-radial-at-t from-blue-950/40 via-transparent to-transparent pointer-events-none" />
        </div>

        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/20 border border-blue-400/40 text-blue-300 text-xs font-semibold uppercase tracking-wider mb-6 font-mono shadow-sm">
                <Layers className="w-3.5 h-3.5 text-blue-400" />
                <span>Page 03 · Solutions & Engagement Models</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.08] mb-6">
                Solutions & <span className="text-blue-400">Engagement Models</span>
              </h1>

              <div className="text-lg sm:text-xl text-blue-200/90 font-medium mb-4 leading-relaxed max-w-3xl">
                Structure Web3 growth support around project type, business objectives, operational requirements, and engagement scope.
              </div>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal mb-8 max-w-3xl">
                Different Web3 businesses have different launch and growth needs. This page explains the types of projects the service can support, the challenges they may face, and the engagement structures available for defining responsibilities, deliverables, and commercial expectations.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="#engagement-models"
                  className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold px-8 py-4 rounded-xl transition-all shadow-lg border border-blue-400/40 text-sm sm:text-base group"
                >
                  <span>Explore Six Engagement Models</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
                <Link
                  to="/ico-acceleration/trust-performance"
                  className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold px-8 py-4 rounded-xl transition-all text-sm sm:text-base border border-white/30 backdrop-blur-sm shadow-md"
                >
                  <span>Explore Trust & Performance</span>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-4">
              <div className="bg-slate-900/90 text-white rounded-3xl overflow-hidden shadow-2xl border border-slate-800 relative">
                <div className="h-44 w-full relative overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80"
                    alt="Solutions Architecture"
                    className="w-full h-full object-cover opacity-60"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-blue-400 font-bold bg-slate-900/80 px-2.5 py-1 rounded-md border border-slate-700">
                      Commercial Framework
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-[11px] font-mono text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-800/60">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                      Structured SLAs
                    </span>
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <div className="text-xs text-slate-300 font-medium leading-relaxed">
                    Transparent scopes, clearly demarcated team responsibilities, and evidence-based performance attribution.
                  </div>

                  <div className="grid grid-cols-2 gap-3 pt-2 border-t border-slate-800">
                    <div className="p-3 rounded-xl bg-slate-800/60 border border-slate-700/60">
                      <div className="text-lg font-black text-white font-mono">5 Segments</div>
                      <div className="text-[11px] text-slate-400">Tailored solutions</div>
                    </div>
                    <div className="p-3 rounded-xl bg-slate-800/60 border border-slate-700/60">
                      <div className="text-lg font-black text-white font-mono">6 Models</div>
                      <div className="text-[11px] text-slate-400">Commercial formats</div>
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
            
            {/* ── SUBMENU 1: LAYER 1 & LAYER 2 PROTOCOLS ── */}
            <section id="layer1-layer2" className="scroll-mt-28 bg-white rounded-3xl border border-slate-200/90 p-8 sm:p-10 shadow-xs">
              <div className="max-w-3xl mb-8">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600 block mb-2">
                  Submenu 01 · Infrastructure Protocols
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
                  Layer 1 & Layer 2 Protocols
                </h2>
                <div className="text-xs font-mono font-bold text-blue-700 uppercase tracking-wider bg-blue-50 px-3 py-1 rounded-full border border-blue-200 inline-block mb-3">
                  Typical focus: Ecosystem positioning, developer outreach, community growth, and launch coordination
                </div>
                <p className="text-base text-slate-600 leading-relaxed font-normal">
                  Infrastructure ecosystems require sustained developer adoption and cross-chain liquidity to establish network effects. We support foundation councils and core teams in communicating technical value and tracking genuine network usage.
                </p>
              </div>

              <div className="space-y-4 mb-8">
                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80">
                  <h3 className="text-base font-extrabold text-slate-900 mb-1">Technical & Ecosystem Value Communication</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Articulate throughput benchmarks, finality, consensus architecture, and developer ergonomics without misleading claims.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80">
                  <h3 className="text-base font-extrabold text-slate-900 mb-1">Developer, User & Ecosystem Audiences</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Identify specific dApp developers seeking EVM compatibility, lower gas fees, or rollup scalability, guiding migration workflows.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80">
                  <h3 className="text-base font-extrabold text-slate-900 mb-1">Ecosystem Education & Community Development</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Plan technical documentation portals, developer hackathons, and grant program onboarding to build an authentic builder core.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80">
                  <h3 className="text-base font-extrabold text-slate-900 mb-1">Launch Messaging & Partnership Outreach</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Coordinate cross-chain bridge announcements, institutional validator commitments, and decentralized storage integrations.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80">
                  <h3 className="text-base font-extrabold text-slate-900 mb-1">Ecosystem Adoption Indicators</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Measure verified smart contract deployments, daily active wallet interactions, bridge TVL inflows, and total gas consumption.
                  </p>
                </div>
              </div>

              <div className="bg-slate-100/80 rounded-2xl p-5 text-xs text-slate-700 flex items-center justify-between">
                <span><strong>Deliverables:</strong> Ecosystem Positioning Framework, Developer Sourcing Matrix & Adoption Telemetry</span>
                <span className="font-mono text-slate-500">ID: SOL-L1L2</span>
              </div>
            </section>

            {/* ── SUBMENU 2: DEFI PROJECTS ── */}
            <section id="defi-projects" className="scroll-mt-28 bg-white rounded-3xl border border-slate-200/90 p-8 sm:p-10 shadow-xs">
              <div className="max-w-3xl mb-8">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600 block mb-2">
                  Submenu 02 · Financial Protocols
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
                  DeFi Projects
                </h2>
                <div className="text-xs font-mono font-bold text-blue-700 uppercase tracking-wider bg-blue-50 px-3 py-1 rounded-full border border-blue-200 inline-block mb-3">
                  Typical focus: Product education, audience development, community engagement, and compliant communications
                </div>
                <p className="text-base text-slate-600 leading-relaxed font-normal">
                  DeFi protocols require clear mechanism explanations and responsible communications. In strict accordance with our commercial policy, we do not promise yields, investment returns, liquidity levels, or token-price performance.
                </p>
              </div>

              <div className="space-y-4 mb-8">
                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80">
                  <h3 className="text-base font-extrabold text-slate-900 mb-1">Documented Functionality & User Profiles</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Explain protocol mechanisms (lending, DEX pools, collateral vaults, flash-loans) strictly based on verified smart contract logic.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80">
                  <h3 className="text-base font-extrabold text-slate-900 mb-1">Mechanisms & User Journey Clarity</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Produce clear visual flowcharts explaining deposit steps, liquidation parameters, collateral ratios, and fee schedules.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80">
                  <h3 className="text-base font-extrabold text-slate-900 mb-1">Community & Educational Channels</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Identify educational crypto channels, research DAOs, and technical podcasts suited for explaining complex protocol mechanisms.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80">
                  <h3 className="text-base font-extrabold text-slate-900 mb-1">Compliant Launch Communications</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Review all messaging for absolute clarity, eliminating misleading APY banners and unsupported financial claims.
                  </p>
                </div>
              </div>

              <div className="bg-slate-100/80 rounded-2xl p-5 text-xs text-slate-700 flex items-center justify-between">
                <span><strong>Deliverables:</strong> Protocol Mechanism Documentation, User Journey Walkthroughs & Claims Review SLA</span>
                <span className="font-mono text-slate-500">ID: SOL-DEFI</span>
              </div>
            </section>

            {/* ── SUBMENU 3: WEB3 GAMING ── */}
            <section id="web3-gaming" className="scroll-mt-28 bg-white rounded-3xl border border-slate-200/90 p-8 sm:p-10 shadow-xs">
              <div className="max-w-3xl mb-8">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600 block mb-2">
                  Submenu 03 · GameFi & Interactive
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
                  Web3 Gaming
                </h2>
                <div className="text-xs font-mono font-bold text-blue-700 uppercase tracking-wider bg-blue-50 px-3 py-1 rounded-full border border-blue-200 inline-block mb-3">
                  Typical focus: Player acquisition, onboarding, community growth, and ongoing engagement
                </div>
                <p className="text-base text-slate-600 leading-relaxed font-normal">
                  Web3 games face unique retention challenges when speculative token-hunters displace genuine gamers. We design onboarding and creator campaigns centered on gameplay, in-game utility, and active player retention.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80">
                  <h3 className="text-base font-extrabold text-slate-900 mb-2">Player & Community Segments</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Define distinct funnels for genuine gameplay enthusiasts vs. guild scholars and secondary asset collectors.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80">
                  <h3 className="text-base font-extrabold text-slate-900 mb-2">Gameplay & Utility Communication</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Highlight visual fidelity, game mechanics, quest design, and in-game asset utility over purely speculative rewards.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80">
                  <h3 className="text-base font-extrabold text-slate-900 mb-2">Player Onboarding & Activation</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Streamline custodial/smart-wallet creation and zero-friction quest completions to minimize drop-offs during game launch.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80">
                  <h3 className="text-base font-extrabold text-slate-900 mb-2">Gaming Creator Campaigns</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Coordinate live Twitch and YouTube gameplay streams, tournament broadcasts, and Discord community challenges.
                  </p>
                </div>
              </div>

              <div className="bg-slate-100/80 rounded-2xl p-5 text-xs text-slate-700 flex items-center justify-between">
                <span><strong>Deliverables:</strong> Player Journey Map, Gaming Creator Campaign Briefs & DAU Retention Framework</span>
                <span className="font-mono text-slate-500">ID: SOL-GAME</span>
              </div>
            </section>

            {/* ── SUBMENU 4: CENTRALIZED EXCHANGES ── */}
            <section id="centralized-exchanges" className="scroll-mt-28 bg-white rounded-3xl border border-slate-200/90 p-8 sm:p-10 shadow-xs">
              <div className="max-w-3xl mb-8">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600 block mb-2">
                  Submenu 04 · Trading Venues
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
                  Centralized Exchanges (CEX)
                </h2>
                <div className="text-xs font-mono font-bold text-blue-700 uppercase tracking-wider bg-blue-50 px-3 py-1 rounded-full border border-blue-200 inline-block mb-3">
                  Typical focus: Audience development, campaign coordination, user education, and business development
                </div>
                <p className="text-base text-slate-600 leading-relaxed font-normal">
                  Support trading venues with user acquisition campaigns, project listing diligence pipelines, and ecosystem business development. We do not claim exchange partnerships or listing access without verified documentary evidence.
                </p>
              </div>

              <div className="space-y-4 mb-8">
                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80">
                  <h3 className="text-base font-extrabold text-slate-900 mb-1">Target Segments & Exchange Positioning</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Define trader segments (retail, institutional, algorithmic traders) and articulate exchange security and fee differentiators.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80">
                  <h3 className="text-base font-extrabold text-slate-900 mb-1">Educational & Acquisition Campaigns</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Plan onboarding campaigns explaining platform features, copy trading, advanced order types, and security verifications.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80">
                  <h3 className="text-base font-extrabold text-slate-900 mb-1">Listing Pipeline Diligence Automation</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Standardize project evaluation checklists to accelerate listing reviews while enforcing regulatory and security standards.
                  </p>
                </div>
              </div>

              <div className="bg-slate-100/80 rounded-2xl p-5 text-xs text-slate-700 flex items-center justify-between">
                <span><strong>Deliverables:</strong> Listing Diligence Framework, Trader Acquisition Calendar & Funnel Reporting</span>
                <span className="font-mono text-slate-500">ID: SOL-CEX</span>
              </div>
            </section>

            {/* ── SUBMENU 5: ICO & TGE FOUNDERS ── */}
            <section id="ico-tge-founders" className="scroll-mt-28 bg-white rounded-3xl border border-slate-200/90 p-8 sm:p-10 shadow-xs">
              <div className="max-w-3xl mb-8">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600 block mb-2">
                  Submenu 05 · Token Issuers
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
                  ICO & TGE Founders
                </h2>
                <div className="text-xs font-mono font-bold text-blue-700 uppercase tracking-wider bg-blue-50 px-3 py-1 rounded-full border border-blue-200 inline-block mb-3">
                  Typical focus: Launch readiness, campaign coordination, stakeholder communication, and post-TGE planning
                </div>
                <p className="text-base text-slate-600 leading-relaxed font-normal">
                  Founders navigating public token generation events require clear messaging, disciplined milestone tracking, and post-launch engagement systems to preserve treasury capital and build lasting utility.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80">
                  <h3 className="text-base font-extrabold text-slate-900 mb-2">Project Positioning & Token Messaging</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Ensure the core value proposition is unified across whitepaper, investor decks, community channels, and launch announcements.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80">
                  <h3 className="text-base font-extrabold text-slate-900 mb-2">Operational Dependencies & Readiness</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Map smart contract security audits, legal opinion letters, liquidity pool staging, and market maker SLAs into a single timeline.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80">
                  <h3 className="text-base font-extrabold text-slate-900 mb-2">Audience Development & Whitelist Ops</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Build high-signal developer communities and deploy Sybil-resistant whitelist gating before public allocation.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80">
                  <h3 className="text-base font-extrabold text-slate-900 mb-2">Post-Launch Compounding Planning</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Prepare 90-day staking education, governance participation rollout, and protocol fee monetization before TGE day.
                  </p>
                </div>
              </div>

              <div className="bg-slate-100/80 rounded-2xl p-5 text-xs text-slate-700 flex items-center justify-between">
                <span><strong>Deliverables:</strong> TGE Operational Runbook, Readiness Audit Matrix & 90-Day Post-Launch Roadmap</span>
                <span className="font-mono text-slate-500">ID: SOL-FOUNDER</span>
              </div>
            </section>

            {/* ── SUBMENU 6: SIX ENGAGEMENT MODELS ── */}
            <section id="engagement-models" className="scroll-mt-28 bg-white rounded-3xl border border-slate-200/90 p-8 sm:p-10 shadow-xs">
              <div className="max-w-3xl mb-8">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600 block mb-2">
                  Submenu 06 · Commercial Structures
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
                  Six Engagement Models
                </h2>
                <p className="text-base text-slate-600 leading-relaxed font-normal">
                  Displaying six distinct commercial models with clearly demarcated responsibilities, deliverables, and commercial arrangements. In accordance with policy, we do not invent contractual terms or claim unapproved arrangements.
                </p>
              </div>

              <div className="space-y-6 mb-8">
                {engagementModelsList.map((model, idx) => (
                  <div
                    key={model.id}
                    className="p-7 rounded-2xl border border-slate-200 bg-slate-50/70 hover:bg-white hover:border-blue-400 hover:shadow-lg transition-all"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 mb-4 border-b border-slate-200">
                      <div>
                        <span className="text-xs font-mono font-bold text-blue-700 bg-blue-100/80 px-2.5 py-1 rounded-md mr-3">
                          {model.number}
                        </span>
                        <span className="text-xl font-extrabold text-slate-900">{model.name}</span>
                      </div>
                      <Link
                        to="/book-consultation"
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-700"
                      >
                        <span>Discuss {model.name}</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>

                    <div className="space-y-3 text-xs leading-relaxed">
                      <div>
                        <strong className="text-slate-900 uppercase font-mono tracking-wider">Designed to Achieve: </strong>
                        <span className="text-slate-700">{model.achieve}</span>
                      </div>

                      <div>
                        <strong className="text-slate-900 uppercase font-mono tracking-wider">Included Activities: </strong>
                        <span className="text-slate-700">{model.activities}</span>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
                        <div className="p-3 rounded-xl bg-white border border-slate-200/80">
                          <div className="font-bold text-slate-900 mb-1">ProfitMachines Responsibilities:</div>
                          <div className="text-slate-600">{model.profitMachinesResp}</div>
                        </div>
                        <div className="p-3 rounded-xl bg-white border border-slate-200/80">
                          <div className="font-bold text-slate-900 mb-1">Client Responsibilities:</div>
                          <div className="text-slate-600">{model.clientResp}</div>
                        </div>
                      </div>

                      <div className="pt-2">
                        <strong className="text-slate-900 uppercase font-mono tracking-wider">Deliverables & Reporting: </strong>
                        <span className="text-slate-700">{model.deliverables}</span>
                      </div>

                      <div className="p-3 rounded-xl bg-blue-50/70 border border-blue-200/70 text-slate-800">
                        <strong className="text-blue-900 uppercase font-mono tracking-wider">Commercial Basis: </strong>
                        {model.commercials}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* ── SUBMENU 7: COMMERCIAL PRINCIPLES ── */}
            <section id="commercial-principles" className="scroll-mt-28 bg-white rounded-3xl border border-slate-200/90 p-8 sm:p-10 shadow-xs">
              <div className="max-w-3xl mb-8">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600 block mb-2">
                  Submenu 07 · Operating Governance
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
                  Commercial Principles
                </h2>
                <p className="text-base text-slate-600 leading-relaxed font-normal">
                  Our commercial arrangements are built around transparency, documented expectations, mutual accountability, and formal change control.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80">
                  <h3 className="text-base font-extrabold text-slate-900 mb-2">1. Defined Scope</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Document all services, milestones, deliverables, exclusions, and technical dependencies in formal statements of work.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80">
                  <h3 className="text-base font-extrabold text-slate-900 mb-2">2. Clear Responsibilities</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Establish explicit ownership of content approvals, campaign collateral, smart contract audits, and operational decisions.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80">
                  <h3 className="text-base font-extrabold text-slate-900 mb-2">3. Transparent Measurement</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Agree on objective KPIs, verified data sources, attribution rules, and reporting frequency prior to campaign kick-off.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80">
                  <h3 className="text-base font-extrabold text-slate-900 mb-2">4. Commercial Clarity</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Document retainer fees, payment milestones, and approved operational performance components without hidden markups.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80">
                  <h3 className="text-base font-extrabold text-slate-900 mb-2">5. Risk & Compliance</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Clarify that regulatory obligations, whitepaper filings, and legal clearances require appropriate qualified professional review.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80">
                  <h3 className="text-base font-extrabold text-slate-900 mb-2">6. Change Management</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Maintain a documented change-control process for scope adjustments, additional campaign deliverables, or altered launch dates.
                  </p>
                </div>
              </div>

              <div className="bg-blue-50/70 border border-blue-200/90 rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <div className="text-xs font-mono font-bold uppercase tracking-wider text-blue-700 mb-1">
                    Next Section Module
                  </div>
                  <div className="text-base font-extrabold text-slate-900">
                    Explore Trust, Compliance & Performance Measurement
                  </div>
                </div>
                <Link
                  to="/ico-acceleration/trust-performance"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-white bg-blue-600 hover:bg-blue-500 px-5 py-3 rounded-xl shadow-md transition-all shrink-0"
                >
                  <span>Open Trust & Performance</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </section>

      </main>
    </div>
  );
}
