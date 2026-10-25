import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Compass,
  Target,
  AlertTriangle,
  TrendingUp,
  ShieldCheck,
  ArrowRight,
  Layers,
  Users,
  Zap,
  Coins,
  Gamepad2,
  Landmark,
  Rocket,
  MessageSquare,
  CheckCircle2,
  FileText,
  ChevronRight,
  Cpu,
  Clock,
  Sliders,
  DollarSign,
  Activity,
  Radar
} from 'lucide-react';
import IcoSubNav from '../../components/IcoSubNav';

export default function IcoSalesEnablement() {
  const location = useLocation();

  useEffect(() => {
    document.title = 'Sales Enablement | ProfitMachines Crypto Protocol';
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

  const spicedStages = [
    {
      letter: 'S',
      title: 'Situation',
      tag: 'Current State & Baseline',
      description: 'Capture the objective operational facts of the project before proposing any growth architecture.',
      items: [
        'Target TGE or mainnet launch date and hard deadlines',
        'Exchange listing pipeline status (Tier-1, Tier-2, DEX liquidity commitments)',
        'Current community quality across Telegram, Discord, and X (signal vs. bot noise)',
        'Active marketing activities, existing agency contracts, and historical campaign spend',
        'Internal technical, legal, and operational launch readiness status'
      ]
    },
    {
      letter: 'P',
      title: 'Pain',
      tag: 'Root Cause Friction',
      description: 'Identify specific structural gaps that threaten launch viability or post-TGE sustainability.',
      items: [
        'Unvalidated demand discovery: Unclear whether genuine liquidity exists for the token',
        'Community conversion friction: Large vanity follower counts with zero wallet activation',
        'Listing progress bottlenecks: Incomplete diligence documentation or uncoordinated market-maker SLAs',
        'Opaque campaign performance: Inability to attribute wallet funding or volume to specific KOL spend',
        'Post-TGE retention deficit: No retention mechanics to stem token dumps once initial hype cools'
      ]
    },
    {
      letter: 'I',
      title: 'Impact',
      tag: 'Commercial Ramifications',
      description: 'Assess the quantitative and strategic commercial consequences if pain points remain unaddressed.',
      items: [
        'Day-one launch volatility and immediate liquidity drain following initial distribution',
        'Treasury impairment resulting from unbudgeted emergency market-making and PR costs',
        'Inability to establish a sustainable long-term holder base beyond short-term speculators',
        'Compressed protocol fee revenue failing to sustain ongoing engineering and growth payroll',
        'Adverse effects on secondary token rounds, validator recruitment, and institutional capital access'
      ]
    },
    {
      letter: 'C',
      title: 'Critical Event',
      tag: 'Time-Sensitive Triggers',
      description: 'Record the non-negotiable milestones that dictate the execution window.',
      items: [
        'TGE date commitments made to lead venture capital funds and key backers',
        'Projected treasury runway constraints requiring token liquidity within defined timelines',
        'Team and early investor token vesting milestone schedules',
        'Anticipated competing protocol launches within the same sub-sector or L1 ecosystem',
        'Direct commercial costs and reputational impact of delaying exchange listing commitments'
      ]
    },
    {
      letter: 'D',
      title: 'Decision',
      tag: 'Governance & Approvals',
      description: 'Identify all stakeholders, budgetary allocations, and compliance gates necessary to engage.',
      items: [
        'Key decision-makers: Foundation council, core founders, CMO, and Head of Growth',
        'Budget ownership: Foundation grant pool, marketing treasury, or operational OPEX allocation',
        'Investor and advisory board sign-off requirements',
        'Required jurisdictional legal review and marketing compliance approvals (MiCA, VARA, ASCI)',
        'Standard procurement, MSA execution, and payment terms confirmation'
      ]
    }
  ];

  const segmentChallenges = [
    {
      segment: 'L1 / L2 Ecosystems',
      icon: Cpu,
      challenges: [
        'Slow ecosystem BD and lengthy developer-onboarding cycles',
        'Opaque developer-adoption visibility and lack of commit-level telemetry',
        'Unpredictable foundation grant pipelines with zero ROI accountability',
        'Protracted multi-month development and testnet migration cycles',
        'Difficulty attributing cross-chain TVL and gas fee revenue to specific dApps'
      ],
      solutionLink: '/ico-acceleration/solutions-engagement#l1-l2',
      solutionText: 'View L1/L2 Solutions'
    },
    {
      segment: 'DeFi Protocols',
      icon: Coins,
      challenges: [
        'Hidden intent in on-chain capital flows and obfuscated wallet interactions',
        'Incentive-driven mercenary activity abandoning pools when yields normalize',
        'High customer acquisition costs masking negative real unit economics',
        'Difficulty capturing protocol fee revenue while emissions remain inflationary',
        'Vulnerability to coordinated flash-loan and liquidity vampire attacks'
      ],
      solutionLink: '/ico-acceleration/solutions-engagement#defi',
      solutionText: 'View DeFi Solutions'
    },
    {
      segment: 'Web3 Gaming',
      icon: Gamepad2,
      challenges: [
        'Conflicting journeys between genuine players and speculative token traders',
        'Severe user acquisition cost (UAC) inflation through saturated ad networks',
        'Automated bot-farming rings draining in-game token treasuries and NFT assets',
        'Sharp seasonal activity drops following initial quest campaign completion',
        'Poor post-launch player retention and lack of sustainable secondary economies'
      ],
      solutionLink: '/ico-acceleration/solutions-engagement#gaming',
      solutionText: 'View Gaming Solutions'
    },
    {
      segment: 'CEX / Centralized Exchanges',
      icon: Landmark,
      challenges: [
        'Congested listing pipelines with unpredictable diligence turnaround times',
        'Slow decision speeds between listing committees, security teams, and counsel',
        'Prohibitive market-maker inventory costs, inventory slippage, and spread bleed',
        'Lack of transparent trading volume and deposit attribution across channels',
        'Post-listing volume cliffs once initial trading competition rewards conclude'
      ],
      solutionLink: '/ico-acceleration/solutions-engagement#exchanges',
      solutionText: 'View CEX Solutions'
    },
    {
      segment: 'ICO / TGE Founders',
      icon: Rocket,
      challenges: [
        'Lack of narrative clarity when explaining complex cryptographic utility',
        'Inadequate community lead time (rushing into market 30 days before launch)',
        'Uncoordinated exchange and DEX listing operational readiness',
        'Regulatory and marketing compliance uncertainty across global jurisdictions',
        'Uncontrolled launch spending paired with severe post-TGE user and volume dropoff'
      ],
      solutionLink: '/ico-acceleration/solutions-engagement#ico-founders',
      solutionText: 'View Founder Solutions'
    }
  ];

  const objections = [
    {
      id: 1,
      objection: '“We will just hire a KOL agency.”',
      response:
        'Creator campaigns are only one component of a successful launch. ProfitMachines connects creator sequencing directly with community development, on-chain demand intelligence, campaign attribution, and post-launch retention systems so media spend builds lasting protocol adoption rather than transient dump-pressure.',
      solutionPage: 'Launch & Growth',
      link: '/ico-acceleration/launch-growth#kol-orchestration'
    },
    {
      id: 2,
      objection: '“We will start marketing closer to launch.”',
      response:
        'Earlier preparation creates the essential runway needed for demand validation, community development, creator coordination, exchange diligence, and launch readiness. Rushing into the market 30 days before TGE leads to inflated creator pricing, unverified bot communities, and immediate post-listing volume drops.',
      solutionPage: 'Intelligence & Playbook',
      link: '/ico-acceleration/launch-growth#playbook'
    },
    {
      id: 3,
      objection: '“Token incentives will handle growth.”',
      response:
        'Incentives and airdrops can bootstrap initial participation, but without continuous product education, structured utility onboarding, and lifecycle automation, mercenary capital leaves the moment rewards normalize. Sustainable growth requires converting temporary bounty hunters into recurring protocol users.',
      solutionPage: 'Post-TGE Retention Machine',
      link: '/ico-acceleration/launch-growth#retention-machine'
    },
    {
      id: 4,
      objection: '“We will sort out compliance later.”',
      response:
        'Promotional requirements under EU MiCA, UAE VARA, and Indian ASCI directly dictate campaign creative, creator agreements, targeting boundaries, and launch schedules. Leaving compliance to the final hour freezes exchange approvals and risks severe enforcement. Review must be integrated from Day 1.',
      solutionPage: 'Trust & Performance',
      link: '/ico-acceleration/trust-performance#compliance-design'
    }
  ];

  const connectMatrix = [
    {
      challenge: 'Unvalidated demand & speculative follower vanity',
      solutionPillar: 'Intelligence',
      module: 'Demand Discovery Engine & Market Validation',
      link: '/ico-acceleration/intelligence#demand-discovery'
    },
    {
      challenge: 'Uncoordinated creators, exchange bottlenecks & launch chaos',
      solutionPillar: 'Launch & Growth',
      module: 'TGE Command, KOL Orchestration & 7-Phase Playbook',
      link: '/ico-acceleration/launch-growth#playbook'
    },
    {
      challenge: 'Post-TGE volume cliff, airdrop dumps & mercenary bleed',
      solutionPillar: 'Launch & Growth',
      module: 'Post-TGE Retention Machine & Lifecycle Engine',
      link: '/ico-acceleration/launch-growth#retention-machine'
    },
    {
      challenge: 'Segment-specific business model friction (L1, DeFi, GameFi, CEX)',
      solutionPillar: 'Solutions & Engagement',
      module: 'Segment Solutions & Six Flexible Engagement Models',
      link: '/ico-acceleration/solutions-engagement#models'
    },
    {
      challenge: 'Regulatory advertising risks, claims liabilities & opaque ROI',
      solutionPillar: 'Trust & Performance',
      module: 'Compliance by Design, Regional Guardrails & Token RQL',
      link: '/ico-acceleration/trust-performance#compliance-design'
    }
  ];

  const discoveryOutputs = [
    {
      number: '01',
      title: 'Current Project Position',
      desc: 'An objective baseline audit of your technical development milestones, community authenticity, exchange relationships, and marketing readiness.'
    },
    {
      number: '02',
      title: 'Main Challenge & Potential Impact',
      desc: 'Identification of primary commercial bottlenecks (narrative, liquidity, creator sequencing, or retention) and their quantitative financial impact.'
    },
    {
      number: '03',
      title: 'Launch/Growth Timeline',
      desc: 'A synchronized Gantt roadmap aligning pre-TGE incubation, creator campaigns, listing ops, and post-TGE compounding gates.'
    },
    {
      number: '04',
      title: 'Decision-Makers & Approval Requirements',
      desc: 'Mapping of core foundation stakeholders, budget ownership, legal review SLAs, and governance sign-off criteria.'
    },
    {
      number: '05',
      title: 'Recommended Engagement Model',
      desc: 'A tailored scope recommendation proposing whether a Diagnostic Sprint, TGE Command, or Hybrid structure best fits your objectives.'
    },
    {
      number: '06',
      title: 'Agreed Next Steps',
      desc: 'A prioritized 7-day action checklist addressing immediate launch readiness gaps and setting up your operational infrastructure.'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50/50 text-slate-900 pt-16 lg:pt-[72px]">
      <IcoSubNav />

      {/* ── HERO SECTION ── */}
      <section className="relative bg-slate-950 text-white py-20 lg:py-28 overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=2000&q=80"
            alt="Sales Enablement"
            className="w-full h-full object-cover object-center opacity-30 mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/80 to-slate-900/65" />
          <div className="absolute inset-0 bg-radial-at-t from-blue-900/30 via-transparent to-transparent pointer-events-none" />
        </div>

        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/20 border border-blue-400/40 text-blue-300 text-xs font-semibold uppercase tracking-wider mb-6 shadow-sm">
              <Target className="w-3.5 h-3.5 text-blue-400" />
              <span>Discovery Framework & Commercial Enablement</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.08] mb-6 font-heading">
              Turn Crypto Growth Challenges into <span className="text-blue-400">Clear Business Opportunities</span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed font-normal mb-10 max-w-2xl">
              ProfitMachines supports founders, ecosystem leaders, and BD teams with structured discovery, segment challenge frameworks, objection handling, and commercial planning.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                to="/book-consultation"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold px-8 py-4 rounded-xl transition-all shadow-lg border border-blue-400/40 text-base group"
              >
                <span>Discuss Your Crypto Growth Requirements</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="#spiced-framework"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold px-8 py-4 rounded-xl transition-all text-base border border-white/30 backdrop-blur-sm shadow-md"
              >
                <span>Explore SPICED Framework</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION A: SPICED FRAMEWORK ── */}
      <section id="spiced-framework" className="py-20 lg:py-24 bg-white border-b border-slate-200/80">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <div className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-2">Section A · Discovery Architecture</div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4 font-heading">
              The SPICED Qualification Framework for Web3
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              We structure every discovery conversation around five objective commercial dimensions to evaluate launch readiness and eliminate speculative ambiguity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-10">
            {spicedStages.map((st) => (
              <div
                key={st.letter}
                className="bg-slate-50 rounded-2xl border border-slate-200 p-6 flex flex-col justify-between hover:bg-white hover:border-blue-400 hover:shadow-lg transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-blue-600 text-white font-bold font-mono text-lg flex items-center justify-center">
                      {st.letter}
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 font-mono">
                      {st.tag}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-2 font-heading">{st.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-6 font-normal">{st.description}</p>

                  <div className="space-y-2 pt-4 border-t border-slate-200/80">
                    <div className="text-[10px] font-bold text-blue-600 uppercase tracking-wider">Discovery Focus:</div>
                    {st.items.map((it, idx) => (
                      <div key={idx} className="flex items-start gap-1.5 text-xs text-slate-600">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0 mt-1.5" />
                        <span>{it}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-600 text-center max-w-3xl mx-auto">
            Utilizing direct SPICED diagnostic criteria ensures discussions remain grounded in operational realities, clear deadlines, and verifiable governance requirements.
          </div>
        </div>
      </section>

      {/* ── SECTION B: SEGMENT-SPECIFIC CHALLENGES ── */}
      <section id="segment-challenges" className="py-20 lg:py-24 bg-slate-50 border-b border-slate-200/80">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <div className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-2">Section B · Segment Friction</div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4 font-heading">
              Segment-Specific Challenges & Solutions
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              Addressing the exact commercial bottlenecks faced by Layer 1/2 rollups, DeFi protocols, Web3 gaming studios, centralized exchanges, and TGE founders.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {segmentChallenges.map((sc, idx) => {
              const Icon = sc.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl border border-slate-200 p-7 shadow-xs hover:border-blue-400 hover:shadow-lg transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="text-lg font-bold text-slate-900 font-heading">{sc.segment}</h3>
                    </div>

                    <div className="space-y-2.5 mb-6">
                      <div className="text-[11px] font-bold text-rose-600 uppercase tracking-wider">Identified Friction:</div>
                      {sc.challenges.map((ch, ci) => (
                        <div key={ci} className="flex items-start gap-2 text-xs text-slate-600 leading-relaxed">
                          <AlertTriangle className="w-3.5 h-3.5 text-rose-500 shrink-0 mt-0.5" />
                          <span>{ch}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-100">
                    <Link
                      to={sc.solutionLink}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-700"
                    >
                      <span>{sc.solutionText}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── SECTION C: OBJECTION HANDLING PLAYBOOK ── */}
      <section id="objections" className="py-20 lg:py-24 bg-white border-b border-slate-200/80">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <div className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-2">Section C · Objection Reframing</div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4 font-heading">
              Four Core Market Objections & Strategic Responses
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              Reframing legacy crypto marketing habits with verifiable commercial architecture and long-term protocol economics.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {objections.map((ob) => (
              <div
                key={ob.id}
                className="bg-slate-50/80 rounded-2xl border border-slate-200 p-8 hover:bg-white hover:border-blue-400 hover:shadow-lg transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start gap-3 mb-4">
                    <div className="w-9 h-9 rounded-xl bg-rose-100 text-rose-600 flex items-center justify-center shrink-0 mt-0.5">
                      <MessageSquare className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold text-rose-600 uppercase tracking-wider font-mono">
                        Objection {ob.id}
                      </span>
                      <h3 className="text-lg font-bold text-slate-900 font-heading mt-0.5">{ob.objection}</h3>
                    </div>
                  </div>

                  <div className="p-4 bg-white rounded-xl border border-slate-200/80 text-xs sm:text-sm text-slate-700 leading-relaxed mb-6 font-normal">
                    <strong className="text-blue-700 font-bold block mb-1">Strategic Response:</strong>
                    {ob.response}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-200/60 flex items-center justify-between">
                  <span className="text-[11px] text-slate-500">Related Architecture: {ob.solutionPage}</span>
                  <Link
                    to={ob.link}
                    className="inline-flex items-center gap-1 text-xs font-bold text-blue-600 hover:text-blue-700"
                  >
                    <span>View Engine</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION D: CONNECT CHALLENGES TO SOLUTIONS ── */}
      <section className="py-20 lg:py-24 bg-slate-50 border-b border-slate-200/80">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <div className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-2">Section D · Navigation Matrix</div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4 font-heading">
              Connect Challenges to Verified Solutions
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              Direct pathways connecting specific commercial friction points to our specialized dedicated operating pages.
            </p>
          </div>

          <div className="space-y-4 mb-8">
            {connectMatrix.map((cm, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl border border-slate-200 p-6 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:border-blue-400 hover:shadow-md transition-all"
              >
                <div className="max-w-md">
                  <div className="text-xs text-rose-600 font-bold uppercase tracking-wider mb-1">Operational Friction:</div>
                  <div className="text-sm font-bold text-slate-900 font-heading">{cm.challenge}</div>
                </div>
                <div className="max-w-md">
                  <div className="text-xs text-blue-600 font-bold uppercase tracking-wider mb-1">Pillar: {cm.solutionPillar}</div>
                  <div className="text-xs sm:text-sm text-slate-600">{cm.module}</div>
                </div>
                <div className="shrink-0">
                  <Link
                    to={cm.link}
                    className="inline-flex items-center gap-1.5 text-xs font-bold bg-slate-900 hover:bg-blue-600 text-white px-4 py-2.5 rounded-lg transition-colors"
                  >
                    <span>Explore Section</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION E: DISCOVERY CALL OUTPUT ── */}
      <section id="discovery-blueprint" className="py-20 lg:py-24 bg-white border-b border-slate-200/80">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <div className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-2">Section E · Tangible Deliverables</div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4 font-heading">
              What You Receive from a 45-Minute Discovery Session
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              We do not conduct generic sales calls. Every initial commercial session delivers six concrete strategic outputs ready for founder and foundation review.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {discoveryOutputs.map((out) => (
              <div
                key={out.number}
                className="bg-slate-50 rounded-2xl border border-slate-200 p-6 flex flex-col justify-between hover:bg-white hover:border-blue-400 hover:shadow-md transition-all"
              >
                <div>
                  <div className="text-2xl font-black text-blue-600 mb-2 font-mono">{out.number}</div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2 font-heading">{out.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">{out.desc}</p>
                </div>
                <div className="pt-3 border-t border-slate-200/60 text-[11px] font-bold text-emerald-700 flex items-center gap-1.5 font-mono">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Session Deliverable</span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/book-consultation"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold px-8 py-4 rounded-xl transition-all shadow-lg text-sm sm:text-base group"
            >
              <span>Schedule Commercial Discovery Session</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="py-20 lg:py-24 bg-slate-950 text-white relative overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 font-heading">
              Discuss Your Crypto Growth Requirements
            </h2>
            <p className="text-slate-300 text-base leading-relaxed mb-8 font-normal">
              Connect with our protocol growth strategists to evaluate your launch timeline, address critical bottlenecks, and determine the optimal commercial engagement for your token ecosystem.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/book-consultation"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold px-8 py-4 rounded-xl transition-all shadow-lg text-base group"
              >
                <span>Discuss Your Crypto Growth Requirements</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/ico-acceleration"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold px-8 py-4 rounded-xl transition-all text-base border border-white/20"
              >
                <span>Back to Protocol Hub</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
