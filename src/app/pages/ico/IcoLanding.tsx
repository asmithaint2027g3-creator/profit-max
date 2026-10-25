import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Compass,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  TrendingUp,
  Layers,
  Rocket,
  Search,
  Target,
  Users,
  CheckCircle2,
  AlertTriangle,
  ArrowUpRight,
  Zap,
  BarChart3,
  Sliders,
  DollarSign,
  Activity,
  Cpu
} from 'lucide-react';
import IcoSubNav from '../../components/IcoSubNav';

export default function IcoLanding() {
  const location = useLocation();

  useEffect(() => {
    document.title = 'ProfitMachines Crypto Protocol | AI-Native Revenue Protocol for Crypto Ecosystems';
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

  const challenges = [
    {
      icon: Search,
      title: 'Unvalidated Market Demand',
      description:
        'Projects routinely spend heavy treasury capital before validating whether genuine user intent and liquidity exist. Vanity follower counts and speculative Discord numbers mask the complete absence of committed capital and product-market fit.',
      resolution: 'Demand-readiness scoring and on-chain intent analytics qualify genuine market traction prior to deployment.'
    },
    {
      icon: Zap,
      title: 'Fragmented Launch Execution',
      description:
        'KOL campaigns, PR firms, community moderators, exchange listing agents, and market makers operate in disconnected operational silos. Launch momentum leaks through uncoordinated announcement schedules and mismatched liquidity commitments.',
      resolution: 'TGE Command orchestrates creator sequencing, exchange milestones, and community sprints in a single operational matrix.'
    },
    {
      icon: BarChart3,
      title: 'Unpredictable Campaign Economics',
      description:
        'Traditional crypto marketing relies on upfront, unverified creator fees without verifiable wallet attribution. Teams cannot determine which channels generated liquidity, which produced active users, and which delivered pure mercenary dumpers.',
      resolution: 'Token-Adjusted RQL frameworks and wallet-level attribution measure the exact cost per active user and verified liquidity.'
    },
    {
      icon: Activity,
      title: 'Post-TGE Retention Gaps',
      description:
        '90% of token launches experience catastrophic volume and participant drops within 30 days of listing. Teams lack structured lifecycle automation, staking education, protocol governance onboarding, and recurring utility monetization.',
      resolution: 'Post-TGE Retention Machines deploy 90-day engagement calendars, utility-driven incentives, and fee-capture pipelines.'
    }
  ];

  const journeyStages = [
    {
      number: '01',
      phase: 'PRE-TGE',
      title: 'Intelligence & Preparation',
      timeframe: 'T-16 Weeks to T-30 Days',
      description:
        'Establish mathematical market validation, discover authentic wallet-level demand, and configure compliant narrative architecture before committing treasury spend.',
      deliverables: [
        'Market validation assessment & Go/No-Go readiness scoring',
        'On-chain intent scoring & demand discovery feeds',
        'Token narrative architecture & tokenomics messaging kit',
        'Community signal radar & smart-money wallet telemetry',
        'Compliance by Design marketing review & KYC/AML workflows'
      ],
      link: '/ico-acceleration/intelligence',
      cta: 'Explore Intelligence Capabilities'
    },
    {
      number: '02',
      phase: 'TGE',
      title: 'Coordinated Launch Execution',
      timeframe: 'T-30 Days to TGE Week',
      description:
        'Orchestrate multi-channel creator sequencing, tiered exchange listing operations, Sybil-resistant airdrop distribution, and live sentiment telemetry.',
      deliverables: [
        'Micro-first KOL sequencing across X, YouTube, and Telegram',
        'Exchange listing readiness & market-maker coordination SLA',
        'Sybil-resistant airdrop mechanics & anti-farming safeguards',
        'Omnichannel performance attribution & spend efficiency',
        'Founder AMAs, Spaces coordination, and community crisis ops'
      ],
      link: '/ico-acceleration/launch-growth',
      cta: 'Explore Launch & Growth Engines'
    },
    {
      number: '03',
      phase: 'POST-TGE',
      title: 'Retention & Revenue Compounding',
      timeframe: 'T+1 to T+90 Days & Ongoing',
      description:
        'Convert transient launch liquidity into sustained protocol adoption, recurring transaction fees, developer ecosystems, and predictable treasury inflows.',
      deliverables: [
        'Wallet journey intelligence & churn-risk identification',
        '90-day post-launch content, product education & governance rollout',
        'Staking incentives & protocol fee monetization architecture',
        'Institutional ecosystem BD, grant pipelines & L2 integrations',
        'Spend-to-revenue forecasting & quarterly performance audits'
      ],
      link: '/ico-acceleration/solutions-engagement',
      cta: 'Explore Lifecycle Solutions'
    }
  ];

  const commercialLayers = [
    {
      layer: 'Layer 0',
      title: 'Launch Intelligence',
      role: 'Decide whether and when to launch',
      detail: 'Assesses market demand readiness, competitive positioning, and macro market conditions to establish Go/No-Go launch criteria.'
    },
    {
      layer: 'Layer 1',
      title: 'Demand Discovery',
      role: 'Identify genuine adoption intent and community signals',
      detail: 'Monitors on-chain wallet behavior, community sentiment, and smart-money positioning to pinpoint authentic adoption interest.'
    },
    {
      layer: 'Layer 2',
      title: 'Acquisition & Launch Execution',
      role: 'Coordinate campaigns and launch operations',
      detail: 'Executes synchronized KOL campaigns, community sprints, exchange listing milestones, and incentive distribution.'
    },
    {
      layer: 'Layer 3',
      title: 'Revenue & Lifecycle',
      role: 'Convert adoption into repeat usage and recurring revenue',
      detail: 'Transforms initial token holders into active protocol users through lifecycle automation, fee monetization, and retention loops.'
    },
    {
      layer: 'Layer 4',
      title: 'Performance & Forecasting',
      role: 'Measure campaign economics and revenue predictability',
      detail: 'Tracks channel-level CAC, verified wallet conversion, protocol fee yields, and forward-looking treasury projections.'
    }
  ];

  const menuPreviews = [
    {
      title: 'Intelligence',
      badge: 'Demand & Market Validation',
      path: '/ico-acceleration/intelligence',
      icon: Search,
      description: 'Validate authentic demand, score on-chain buying intent, audit token narrative, and inform Go/No-Go launch decisions with quantitative rigor.'
    },
    {
      title: 'Launch & Growth',
      badge: 'Execution & 7-Phase Playbook',
      path: '/ico-acceleration/launch-growth',
      icon: Rocket,
      description: 'Deploy the 7-phase TGE launch playbook, coordinate 20–50 verified KOLs, manage listing pipelines, and automate post-TGE user retention.'
    },
    {
      title: 'Solutions & Engagement',
      badge: 'Segment Models & Commercials',
      path: '/ico-acceleration/solutions-engagement',
      icon: Layers,
      description: 'Explore tailored packages for L1/L2s, DeFi, Gaming, and CEXs across six engagement models from diagnostic sprints to enterprise licensing.'
    },
    {
      title: 'Trust & Performance',
      badge: 'Compliance & Measurement',
      path: '/ico-acceleration/trust-performance',
      icon: ShieldCheck,
      description: 'Integrate Compliance by Design guardrails (MiCA, VARA, ASCI), claims review SLAs, and Token-Adjusted RQL performance measurement.'
    },
    {
      title: 'Sales Enablement',
      badge: 'Discovery & Objection Handling',
      path: '/ico-acceleration/sales-enablement',
      icon: Target,
      description: 'Arm ecosystem BD and growth teams with the SPICED discovery framework, segment challenge playbooks, and verified objection handling.'
    }
  ];

  const engagementModels = [
    {
      name: 'Launch Diagnostic Sprint',
      duration: '2–3 Weeks',
      type: 'Fixed Fee (Credit Available)',
      desc: 'Rapid audit of tokenomics, narrative, demand signals, and jurisdictional compliance with a quantified Go/No-Go launch scorecard.'
    },
    {
      name: 'TGE Command',
      duration: '16 Weeks (T-16 to TGE)',
      type: 'Retainer + Media at Cost',
      desc: 'End-to-end launch orchestration: community build, creator sequencing, exchange listing ops, and launch week command center.'
    },
    {
      name: 'Post-TGE Growth Retainer',
      duration: '6–12 Months',
      type: 'Monthly Retainer + Ops Bonus',
      desc: 'Post-launch retention machine, protocol utility education, governance participation, and recurring transaction fee optimization.'
    },
    {
      name: 'Performance / Token-Aligned Hybrid',
      duration: 'Milestone-Based',
      type: 'Reduced Retainer + Success Fees',
      desc: 'Co-aligned risk structure tied to operational milestones (listings, verified wallets, fee revenue, TVL) under strict legal review.'
    },
    {
      name: 'MVP → GTM Acceleration',
      duration: '8–12 Weeks',
      type: 'Fixed Fee Scope',
      desc: 'Idea-to-testnet blueprinting, early demand signal harvesting, investor narrative preparation, and developer GTM readiness.'
    },
    {
      name: 'Enterprise Ecosystem License',
      duration: 'Annual Contract',
      type: 'License + Deployment SLA',
      desc: 'Full deployment of ProfitMachines revenue engines, telemetry dashboards, and the Trust Layer for L1/L2 foundations and major CEXs.'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50/50 text-slate-900 pt-16 lg:pt-[72px]">
      {/* Unified Secondary Navigation */}
      <IcoSubNav />

      {/* ── SECTION 1: HERO (DARK BLOCKCHAIN-IMAGE BACKGROUND & CLEAN COMPOSITION) ── */}
      <section className="relative bg-slate-950 text-white py-20 lg:py-28 overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=2000&q=80"
            alt="ProfitMachines Crypto Protocol"
            className="w-full h-full object-cover object-center opacity-40 mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/80 to-slate-900/65" />
          <div className="absolute inset-0 bg-radial-at-t from-blue-900/30 via-transparent to-transparent pointer-events-none" />
        </div>

        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/20 border border-blue-400/40 text-blue-300 text-xs font-semibold uppercase tracking-wider mb-6 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-blue-400" />
              <span>ProfitMachines Crypto Protocol</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.08] mb-6 font-heading">
              The AI-Native Revenue Protocol for <span className="text-blue-400">Crypto Ecosystems</span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed font-normal mb-10 max-w-2xl">
              Turn wallet-level demand intelligence, coordinated launch execution, and compliance-aware growth into measurable adoption and recurring revenue for L1/L2 ecosystems, DeFi, Gaming, and Centralized Exchanges.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                to="/book-consultation"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold px-8 py-4 rounded-xl transition-all shadow-lg border border-blue-400/40 text-base group"
              >
                <span>Discuss Your Launch</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/ico-acceleration/solutions-engagement"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold px-8 py-4 rounded-xl transition-all text-base border border-white/30 backdrop-blur-sm shadow-md"
              >
                <span>Explore Our Solutions</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 2: THE CHALLENGE ── */}
      <section className="py-20 lg:py-28 bg-white border-b border-slate-200/80">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <div className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-3">
              Market Reality & Structural Obstacles
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4 font-heading">
              From Speculative Activity to Sustainable Growth
            </h2>
            <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
              Crypto markets have shifted from hype-driven cycles to institutional accountability. Token projects fail not from lack of engineering, but from fragmented commercial execution, unvalidated demand, and zero post-launch retention systems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {challenges.map((c, i) => {
              const Icon = c.icon;
              return (
                <div
                  key={i}
                  className="bg-slate-50/70 rounded-2xl border border-slate-200/80 p-8 hover:shadow-md hover:border-blue-300 transition-all"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center text-blue-700">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 font-heading">{c.title}</h3>
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">{c.description}</p>
                  <div className="pt-4 border-t border-slate-200/60 flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <span className="text-xs font-semibold text-slate-800 leading-normal">
                      <span className="text-blue-600 font-bold">ProfitMachines Solution:</span> {c.resolution}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Unified Continuum Statement */}
          <div className="bg-slate-900 text-white rounded-2xl p-8 sm:p-10 border border-slate-800 shadow-md">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-400 mb-2">
                  <Cpu className="w-4 h-4" />
                  <span>The Unified Revenue Continuum</span>
                </div>
                <h4 className="text-2xl font-bold font-heading mb-3">Connecting Intelligence, Execution, Measurement & Lifecycle</h4>
                <p className="text-sm text-slate-300 leading-relaxed font-normal">
                  ProfitMachines replaces fragmented agency vendors with a cohesive operating system. We bridge early on-chain intent discovery with synchronized launch command and algorithmic retention so token ecosystems capture lasting commercial value.
                </p>
              </div>
              <div className="shrink-0">
                <Link
                  to="/ico-acceleration/intelligence"
                  className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold px-6 py-3.5 rounded-xl transition-all shadow-md text-sm"
                >
                  <span>Explore Intelligence Layer</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 3: THREE-STAGE LAUNCH JOURNEY ── */}
      <section className="py-20 lg:py-28 bg-slate-50 border-b border-slate-200/80">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <div className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-3">
              End-to-End Execution Sequence
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4 font-heading">
              Three-Stage Launch Journey
            </h2>
            <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
              Every token ecosystem progresses through three interconnected operational gates. Success requires executing each stage with quantifiable exit criteria before advancing capital.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {journeyStages.map((stage, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-slate-200/90 p-8 shadow-xs hover:shadow-xl hover:border-blue-300 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
                      {stage.phase}
                    </span>
                    <span className="text-2xl font-black text-slate-300 font-mono">{stage.number}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-1 font-heading">{stage.title}</h3>
                  <div className="text-xs font-semibold text-slate-500 mb-4">{stage.timeframe}</div>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">{stage.description}</p>
                  
                  <div className="space-y-2.5 mb-8">
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-900">Key Deliverables:</div>
                    {stage.deliverables.map((d, di) => (
                      <div key={di} className="flex items-start gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                        <span>{d}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-slate-100">
                  <Link
                    to={stage.link}
                    className="inline-flex items-center justify-between w-full text-sm font-bold text-blue-600 hover:text-blue-700 group"
                  >
                    <span>{stage.cta}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 4: FIVE COMMERCIAL LAYERS + TRUST LAYER ── */}
      <section className="py-20 lg:py-28 bg-white border-b border-slate-200/80">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <div className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-3">
              Architectural Hierarchy
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4 font-heading">
              Five Commercial Layers & The Trust Layer
            </h2>
            <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
              Our commercial architecture organizes go-to-market operations into five modular tiers, safeguarded across every interaction by an integrated Compliance by Design Trust Layer.
            </p>
          </div>

          <div className="space-y-4 mb-12">
            {commercialLayers.map((layer, idx) => (
              <div
                key={idx}
                className="bg-slate-50 rounded-xl border border-slate-200 p-6 sm:p-7 hover:border-blue-400 hover:bg-white hover:shadow-md transition-all flex flex-col md:flex-row md:items-center justify-between gap-4"
              >
                <div className="flex items-center gap-4 min-w-[240px]">
                  <span className="w-20 px-2.5 py-1 text-center text-xs font-extrabold uppercase tracking-wider rounded-md bg-blue-600 text-white font-mono shrink-0">
                    {layer.layer}
                  </span>
                  <h4 className="text-lg font-bold text-slate-900 font-heading">{layer.title}</h4>
                </div>
                <div className="text-sm font-semibold text-blue-700 md:max-w-xs">{layer.role}</div>
                <p className="text-xs sm:text-sm text-slate-600 md:max-w-md font-normal leading-relaxed">
                  {layer.detail}
                </p>
              </div>
            ))}
          </div>

          {/* Compliance by Design Trust Layer Banner */}
          <div className="bg-gradient-to-r from-blue-900 to-slate-900 text-white rounded-2xl p-8 sm:p-10 border border-blue-800/60 shadow-lg relative overflow-hidden">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-cyan-300 mb-2">
                  <ShieldCheck className="w-4 h-4" />
                  <span>The Cross-Cutting Trust Layer</span>
                </div>
                <h3 className="text-2xl font-bold font-heading mb-3">Compliance by Design Across the Entire Journey</h3>
                <p className="text-sm text-slate-200 leading-relaxed font-normal">
                  Not a checkbox at launch, but an active operating framework that reviews claims, structures jurisdictional marketing guardrails (MiCA, VARA, ASCI), screens airdrop Sybils, and enforces transparent creator disclosures.
                </p>
              </div>
              <div className="shrink-0">
                <Link
                  to="/ico-acceleration/trust-performance"
                  className="inline-flex items-center gap-2 bg-white text-slate-900 hover:bg-blue-50 font-bold px-6 py-3.5 rounded-xl transition-all shadow-md text-sm"
                >
                  <span>View Trust Framework</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 5: PREVIEW THE FIVE MENU PAGES ── */}
      <section className="py-20 lg:py-28 bg-slate-50 border-b border-slate-200/80">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <div className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-3">
              Deep-Dive Section Modules
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4 font-heading">
              Explore the Five Dedicated Operating Menus
            </h2>
            <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
              Navigate into each specialized domain to review specific deliverables, operational SLAs, segment packages, and sales frameworks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {menuPreviews.map((m, idx) => {
              const Icon = m.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl border border-slate-200 p-8 shadow-xs hover:shadow-xl hover:border-blue-400 transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-11 h-11 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 bg-slate-100 px-2.5 py-1 rounded-md">
                        {m.badge}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3 font-heading group-hover:text-blue-600 transition-colors">
                      {m.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed mb-6">{m.description}</p>
                  </div>

                  <div className="pt-4 border-t border-slate-100">
                    <Link
                      to={m.path}
                      className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 group-hover:text-blue-700"
                    >
                      <span>Open {m.title}</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── SECTION 6: ENGAGEMENT MODELS PREVIEW ── */}
      <section className="py-20 lg:py-28 bg-white border-b border-slate-200/80">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <div className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-3">
              Commercial Structures
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4 font-heading">
              Six Flexible Engagement Models
            </h2>
            <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
              From low-commitment 2-week validation sprints to joint token-aligned performance retainers and multi-year enterprise licenses.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {engagementModels.map((em, idx) => (
              <div
                key={idx}
                className="bg-slate-50/70 rounded-xl border border-slate-200 p-6 hover:bg-white hover:border-blue-400 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-xs font-extrabold text-blue-700 bg-blue-100/80 px-2.5 py-0.5 rounded">
                      Model {idx + 1}
                    </span>
                    <span className="text-xs font-semibold text-slate-500">{em.duration}</span>
                  </div>
                  <h4 className="text-lg font-bold text-slate-900 mb-1 font-heading">{em.name}</h4>
                  <div className="text-xs font-bold text-slate-600 mb-3">{em.type}</div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">{em.desc}</p>
                </div>
                <div className="pt-3 border-t border-slate-200/60">
                  <Link
                    to={`/ico-acceleration/solutions-engagement#model-${idx + 1}`}
                    className="text-xs font-bold text-blue-600 hover:text-blue-700 inline-flex items-center gap-1 group"
                  >
                    <span>View Specifications</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/ico-acceleration/solutions-engagement#models"
              className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-bold px-7 py-3.5 rounded-xl transition-all shadow-sm text-sm"
            >
              <span>Compare All 6 Models & Pricing Terms</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── SECTION 7: FINAL CTA ── */}
      <section className="py-20 lg:py-28 bg-slate-950 text-white relative overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/20 border border-blue-400/40 text-blue-300 text-xs font-semibold uppercase tracking-wider mb-6">
              <Rocket className="w-3.5 h-3.5 text-blue-400" />
              <span>Launch Readiness & Acceleration</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6 font-heading">
              Build Your Launch Around Measurable Outcomes
            </h2>
            
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal mb-10 max-w-2xl mx-auto">
              Start with launch readiness, coordinate execution, and build the systems needed to sustain growth after TGE.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/book-consultation"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold px-8 py-4 rounded-xl transition-all shadow-lg border border-blue-400/40 text-base group"
              >
                <span>Discuss Your Crypto Growth Strategy</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/talk-to-expert"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold px-8 py-4 rounded-xl transition-all text-base border border-white/20 backdrop-blur-sm"
              >
                <span>Talk with a Launch Architect</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
