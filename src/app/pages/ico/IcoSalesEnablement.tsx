import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Target,
  Compass,
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
  Radar,
  HelpCircle,
  Sparkles,
  ArrowUpRight,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

export default function IcoSalesEnablement() {
  const location = useLocation();
  const [openObjectionIdx, setOpenObjectionIdx] = useState<number>(0);

  useEffect(() => {
    document.title = 'Sales Enablement & Conversion Strategy | ProfitMachines Crypto Protocol';
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

  const spicedStages = [
    {
      letter: 'S',
      title: 'Situation',
      tag: 'Current State & Baseline',
      description: "Understand the prospect's business model, product stage, audience, and current marketing activities.",
      questions: [
        'What is your target TGE, mainnet launch date, or key fundraising deadline?',
        'What is the current status of your exchange listing pipeline (CEX / DEX)?',
        'How would you describe your community quality (active builders vs. bot volume)?',
        'What marketing activities or agency contracts are currently active?'
      ],
      output: 'Operational baseline documentation and technical roadmap status.'
    },
    {
      letter: 'P',
      title: 'Pain',
      tag: 'Root Cause Friction',
      description: 'Identify the primary challenges affecting growth, launch readiness, or commercial execution.',
      questions: [
        'Where are you experiencing the biggest gaps between community numbers and real token utility?',
        'Are your creator/KOL campaigns generating verifiable on-chain wallet actions or just vanity impressions?',
        'Are listing delays or compliance questions stalling your go-to-market timeline?',
        'What plans exist to prevent liquidity and volume collapse 30 days after listing?'
      ],
      output: 'Prioritized gap analysis identifying structural commercial friction.'
    },
    {
      letter: 'I',
      title: 'Impact',
      tag: 'Commercial Consequences',
      description: 'Understand the operational or business consequences if those challenges remain unaddressed.',
      questions: [
        'What is the potential treasury impact of a failed or delayed launch?',
        'How does unvalidated demand affect your token float and market-maker costs?',
        'How does low post-TGE retention impact protocol fee revenue and runway?',
        'What does narrative confusion cost you in investor and partner conversations?'
      ],
      output: 'Quantified commercial impact model on treasury runway and protocol valuation.'
    },
    {
      letter: 'C',
      title: 'Critical Event',
      tag: 'Time-Sensitive Triggers',
      description: 'Identify important launch dates, milestones, deadlines, or business events.',
      questions: [
        'What commitments have been made to lead venture capital funds or advisory councils?',
        'Are competing protocols launching in your category within the same quarter?',
        'What are the hard runway constraints governing the token generation event?',
        'What are the contractual or financial consequences of delaying scheduled milestones?'
      ],
      output: 'Critical path execution calendar with non-negotiable hard gates.'
    },
    {
      letter: 'D',
      title: 'Decision',
      tag: 'Governance & Approvals',
      description: 'Understand the decision-making process, stakeholders, evaluation criteria, and next steps.',
      questions: [
        'Who are the final decision-makers (Foundation Council, Founders, CMO)?',
        'What budget ownership exists (Marketing treasury, Foundation grant, Operational OPEX)?',
        'What legal or compliance sign-offs are required before signing an agreement?',
        'What are the agreed evaluation criteria for choosing a growth partner?'
      ],
      output: 'Stakeholder map, procurement path, and decision timeline.'
    }
  ];

  const segmentChallenges = [
    {
      segment: 'L1 & L2 Protocols',
      icon: Cpu,
      challenges: [
        'Ecosystem awareness in a crowded rollup market',
        'Developer and user adoption friction',
        'Clear technical positioning against alternative L1s/L2s',
        'Community and partner ecosystem development'
      ],
      discoveryQuestions: 'What is your current active dApp count, and how do you attribute gas fee generation to specific developer cohorts?',
      solutionArea: 'Developer Adoption Feeds & Ecosystem BD Pipeline (Solutions & Engagement)',
      kpis: 'Active developer contracts deployed, bridge TVL inflows, weekly gas consumption'
    },
    {
      segment: 'DeFi Projects',
      icon: Coins,
      challenges: [
        'Product education for complex financial mechanisms',
        'Building trust and credibility with smart contract security',
        'User onboarding and UX friction',
        'Careful, compliant communication of financial mechanisms without yield promises'
      ],
      discoveryQuestions: 'How do you currently distinguish long-term sticky liquidity providers from transient mercenary yield farmers?',
      solutionArea: 'Mechanism Visualizations & Incentive Curve Optimization (Launch & Growth)',
      kpis: 'CAC per dollar of deposited liquidity, 90-day wallet retention cohort yield'
    },
    {
      segment: 'Web3 Gaming',
      icon: Gamepad2,
      challenges: [
        'Player acquisition in an ad-restricted environment',
        'Onboarding and non-custodial wallet participation',
        'Creator and community engagement centered on gameplay',
        'Sustained active user activity beyond initial quest rewards'
      ],
      discoveryQuestions: 'What proportion of your current community plays the actual game vs. speculating on in-game token secondary markets?',
      solutionArea: 'Gaming Creator Quests & Anti-Bot Behavioral Safeguards (Solutions & Engagement)',
      kpis: 'Player Acquisition Cost (PAC), 30-day in-game quest completions, DAU stickiness'
    },
    {
      segment: 'Exchanges (CEX/DEX)',
      icon: Landmark,
      challenges: [
        'Audience acquisition and deposit conversion',
        'Clear differentiation from tier-1 global venues',
        'User education on advanced trading features',
        'Partnership and listing pipeline development'
      ],
      discoveryQuestions: 'How long does your listing diligence take, and how do you track liquidity depth during opening trading hours?',
      solutionArea: 'Listing Diligence Automation & Market Maker Coordination (Launch & Growth)',
      kpis: 'Trader acquisition cost, opening spread tightness, 60-day active trading volume'
    },
    {
      segment: 'ICO & TGE Founders',
      icon: Rocket,
      challenges: [
        'Launch readiness across legal, technical, and marketing silos',
        'Token narrative clarity for investors and users',
        'Audience development with anti-bot verification',
        'Campaign coordination and post-TGE retention planning'
      ],
      discoveryQuestions: 'Have you benchmarked your launch readiness score against macroeconomic and exchange listing gates?',
      solutionArea: 'Full TGE Command & 7-Phase Launch Playbook (Launch & Growth)',
      kpis: 'Go/No-Go score >85/100, verified whitelist ratio >75%, zero launch-day downtime'
    }
  ];

  const objections = [
    {
      id: 1,
      objection: '“How can we measure the results?”',
      approach: [
        'Agree on target outcomes upfront (e.g. verified wallet registrations, developer testnet faucet claims, or listing milestones).',
        'Define baseline metrics and empirical attribution rules before launching campaigns.',
        'Explain our weekly reporting cadence and multi-channel performance dashboards.',
        'Clarify which outcomes depend on external factors (such as broader market sentiment or exchange listing schedules) without making speculative guarantees.'
      ]
    },
    {
      id: 2,
      objection: '“Can you guarantee an exchange listing?”',
      approach: [
        'Explain the listing preparation, technical documentation, and coordination process.',
        'Clearly state that exchanges make independent, discretionary listing decisions based on their internal committees.',
        'Outline the documentation and readiness support available to maximize committee diligence speed without making deceptive guarantees.'
      ]
    },
    {
      id: 3,
      objection: '“Why do we need a structured launch plan?”',
      approach: [
        'Explain the importance of sequencing dependencies (narrative → community → whitelist → creators → listing).',
        'Demonstrate how milestones, team responsibilities, and regulatory approvals are tracked to prevent costly launch slips.',
        'Connect structured planning to operational visibility and treasury preservation without promising arbitrary market returns.'
      ]
    },
    {
      id: 4,
      objection: '“How do you approach compliance?”',
      approach: [
        'Explain our documented creative-to-legal review workflow and claims escalation SLAs.',
        'Identify specific jurisdictions (MiCA, VARA, ASCI) where qualified specialist legal review is required.',
        'Avoid false claims of universal compliance or automated regulatory clearance, emphasizing documented guardrails and client counsel sign-off.'
      ]
    },
    {
      id: 5,
      objection: '“Can you guarantee token performance?”',
      approach: [
        'Clarify that token prices and market trading behavior cannot be guaranteed by any ethical growth partner.',
        'Focus on defined operational deliverables, verified community participation, and measurable campaign activities.',
        'Explain our transparent KPI framework that measures verified adoption and commercial retention rather than speculative market pumps.'
      ]
    }
  ];

  const solutionMappingMatrix = [
    {
      challenge: 'Market uncertainty and unvalidated demand',
      service: 'Market Validation Intelligence',
      page: '/ico-acceleration/intelligence#market-validation',
      discoveryQ: 'Have you tested whether genuine liquidity exists before allocating treasury?',
      deliverables: 'Market Validation Report & Go/No-Go Scorecard',
      successMeasure: 'Validated demand score exceeding 85/100 readiness'
    },
    {
      challenge: 'Unclear token narrative and messaging drift',
      service: 'Tokenomics & Narrative Studio',
      page: '/ico-acceleration/intelligence#tokenomics-narrative',
      discoveryQ: 'Can your team and community explain token utility in one compelling sentence?',
      deliverables: 'One-Sentence Narrative & Messaging Architecture',
      successMeasure: 'Consistent investor deck and community messaging'
    },
    {
      challenge: 'Weak audience understanding and low wallet traction',
      service: 'Crypto Demand Discovery Engine',
      page: '/ico-acceleration/intelligence#demand-discovery',
      discoveryQ: 'Where are your high-intent users on-chain, and what motivates them to switch?',
      deliverables: 'Audience Segments & Demand Discovery Report',
      successMeasure: 'Identified high-intent wallet cohorts mapped to whitelist'
    },
    {
      challenge: 'Launch coordination gaps and mismatched milestones',
      service: 'Seven-Phase Launch Playbook',
      page: '/ico-acceleration/launch-growth#seven-phase-playbook',
      discoveryQ: 'Are your creator, PR, exchange, and community teams operating on one timeline?',
      deliverables: '7-Phase Launch Timeline & Operational Runbook',
      successMeasure: 'On-schedule phase transitions with zero execution lag'
    },
    {
      challenge: 'Creator campaign opacity and poor ROI attribution',
      service: 'KOL & Creator Orchestration',
      page: '/ico-acceleration/launch-growth#kol-orchestration',
      discoveryQ: 'Can you track which creator posts drove real testnet wallets vs. bot views?',
      deliverables: 'Creator Shortlist, Briefs & Performance Reports',
      successMeasure: 'Verified wallet referral attribution across creators'
    },
    {
      challenge: 'Listing preparation delays and uncoordinated market makers',
      service: 'Exchange & Listing Operations',
      page: '/ico-acceleration/launch-growth#exchange-operations',
      discoveryQ: 'Is your token diligence pack ready for tier-1 exchange review?',
      deliverables: 'Listing Readiness Dossier & MM Coordination SLA',
      successMeasure: 'Completed exchange diligence and synchronized announcements'
    },
    {
      challenge: 'Compliance review requirements and regulatory uncertainty',
      service: 'Compliance by Design',
      page: '/ico-acceleration/trust-performance#compliance-by-design',
      discoveryQ: 'Are your promotional claims audited for MiCA, VARA, or ASCI guidelines?',
      deliverables: 'Review Checklist, Claims Register & Review SLA',
      successMeasure: '24-48h documented review turnaround for creative'
    },
    {
      challenge: 'Unclear marketing performance and fragmented reporting',
      service: 'Forecasting & Attribution / KPI Framework',
      page: '/ico-acceleration/trust-performance#kpi-framework',
      discoveryQ: 'Do you have channel-by-channel attribution for customer acquisition cost?',
      deliverables: '6-Category KPI Framework & Attribution Matrix',
      successMeasure: 'Weekly empirical performance dashboards published'
    },
    {
      challenge: 'Low post-launch engagement and immediate volume drop',
      service: 'Post-TGE Retention Machine',
      page: '/ico-acceleration/launch-growth#post-tge-retention',
      discoveryQ: 'What happens to token holders on Day 30 after the opening bell?',
      deliverables: '90-Day Post-Launch Calendar & Staking Guides',
      successMeasure: 'Sustained 60-day wallet retention and staking ratios'
    },
    {
      challenge: 'Unstructured business development and slow integrations',
      service: 'Institutional & BD Sales Engine',
      page: '/ico-acceleration/launch-growth#institutional-bd',
      discoveryQ: 'How are you sourcing and closing strategic dApp and ecosystem partnerships?',
      deliverables: 'Target-Account Pipeline & Partner Briefs',
      successMeasure: 'Verified ecosystem integrations and grant commitments'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50/50 text-slate-900 pt-16 lg:pt-[72px]">
      {/* ── HERO SECTION ── */}
      <section className="relative bg-slate-950 text-white py-16 lg:py-24 overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=2000&q=80"
            alt="Sales Enablement & Conversion Strategy"
            className="w-full h-full object-cover object-center opacity-40 mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/75 to-slate-900/60" />
          <div className="absolute inset-0 bg-radial-at-t from-blue-950/40 via-transparent to-transparent pointer-events-none" />
        </div>

        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/20 border border-blue-400/40 text-blue-300 text-xs font-semibold uppercase tracking-wider mb-6 font-mono shadow-sm">
                <Target className="w-3.5 h-3.5 text-blue-400" />
                <span>Page 05 · Sales Enablement & Conversion Strategy</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.08] mb-6">
                Sales Enablement & <span className="text-blue-400">Conversion Strategy</span>
              </h1>

              <div className="text-lg sm:text-xl text-blue-200/90 font-medium mb-4 leading-relaxed max-w-3xl">
                Equip teams with structured discovery, relevant solution mapping, consistent objection handling, and clear next steps.
              </div>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal mb-8 max-w-3xl">
                The Sales Enablement page supports conversations with Web3 founders, protocol teams, exchanges, ecosystem partners, and other qualified prospects. It provides a consistent framework for understanding business needs, communicating relevant services, handling concerns, and documenting actionable follow-ups.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <Link
                  to="/book-consultation"
                  className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold px-8 py-4 rounded-xl transition-all shadow-lg border border-blue-400/40 text-sm sm:text-base group"
                >
                  <span>Discuss Your Crypto Growth Strategy</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  to="/ico-acceleration"
                  className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold px-8 py-4 rounded-xl transition-all text-sm sm:text-base border border-white/30 backdrop-blur-sm shadow-md"
                >
                  <span>Return to Suite Gateway</span>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-4">
              <div className="bg-slate-900/90 text-white rounded-3xl overflow-hidden shadow-2xl border border-slate-800 relative">
                <div className="h-44 w-full relative overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=800&q=80"
                    alt="Sales Enablement Framework"
                    className="w-full h-full object-cover opacity-60"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-blue-400 font-bold bg-slate-900/80 px-2.5 py-1 rounded-md border border-slate-700">
                      Discovery Framework
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-[11px] font-mono text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-800/60">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                      SPICED Methodology
                    </span>
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <div className="text-xs text-slate-300 font-medium leading-relaxed">
                    Methodical commercial discovery, objective handling, and solution mapping for Web3 founders and ecosystem leaders.
                  </div>

                  <div className="grid grid-cols-2 gap-3 pt-2 border-t border-slate-800">
                    <div className="p-3 rounded-xl bg-slate-800/60 border border-slate-700/60">
                      <div className="text-lg font-black text-white font-mono">5 Steps</div>
                      <div className="text-[11px] text-slate-400">SPICED elements</div>
                    </div>
                    <div className="p-3 rounded-xl bg-slate-800/60 border border-slate-700/60">
                      <div className="text-lg font-black text-white font-mono">10 Mappings</div>
                      <div className="text-[11px] text-slate-400">Solution matrix</div>
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
            
            {/* ── SUBMENU 1: SPICED FRAMEWORK ── */}
            <section id="spiced-framework" className="scroll-mt-28 bg-white rounded-3xl border border-slate-200/90 p-8 sm:p-10 shadow-xs">
              <div className="max-w-3xl mb-8">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600 block mb-2">
                  Submenu 01 · Discovery Architecture
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
                  SPICED Framework
                </h2>
                <p className="text-base text-slate-600 leading-relaxed font-normal">
                  Organize the sales discovery process using the five SPICED elements: Situation, Pain, Impact, Critical Event, and Decision. This structured sequence turns conversational discovery into clear qualification notes and actionable follow-ups.
                </p>
              </div>

              <div className="space-y-6 mb-8">
                {spicedStages.map((stage) => (
                  <div key={stage.letter} className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center font-black font-mono text-lg shrink-0">
                        {stage.letter}
                      </span>
                      <div>
                        <h3 className="text-xl font-extrabold text-slate-900">{stage.title}</h3>
                        <span className="text-xs font-mono font-bold text-blue-600">{stage.tag}</span>
                      </div>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-700 font-medium mb-4 leading-relaxed">
                      {stage.description}
                    </p>

                    <div className="bg-white rounded-xl border border-slate-200/80 p-4 mb-3">
                      <div className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-2 font-mono">
                        Discovery Diagnostic Questions:
                      </div>
                      <ul className="space-y-2 text-xs text-slate-600">
                        {stage.questions.map((q, qi) => (
                          <li key={qi} className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 shrink-0" />
                            <span>{q}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="text-[11px] font-mono text-slate-500">
                      <strong>Expected Output:</strong> {stage.output}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* ── SUBMENU 2: SEGMENT-SPECIFIC CHALLENGES ── */}
            <section id="segment-challenges" className="scroll-mt-28 bg-white rounded-3xl border border-slate-200/90 p-8 sm:p-10 shadow-xs">
              <div className="max-w-3xl mb-8">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600 block mb-2">
                  Submenu 02 · Audience Diagnosis
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
                  Segment-Specific Challenges
                </h2>
                <p className="text-base text-slate-600 leading-relaxed font-normal">
                  Audience-specific diagnosis cards presenting the primary challenges, key discovery questions, recommended solution areas, and relevant measurement KPIs for each major Web3 segment.
                </p>
              </div>

              <div className="space-y-6 mb-8">
                {segmentChallenges.map((sc, sci) => {
                  const Icon = sc.icon;
                  return (
                    <div key={sci} className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center text-blue-700 shrink-0">
                          <Icon className="w-5 h-5" />
                        </div>
                        <h3 className="text-xl font-extrabold text-slate-900">{sc.segment}</h3>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div className="p-4 rounded-xl bg-white border border-slate-200/80 text-xs">
                          <div className="font-bold text-slate-900 mb-2 uppercase font-mono tracking-wider">
                            Common Operational Challenges:
                          </div>
                          <ul className="space-y-1.5 text-slate-600">
                            {sc.challenges.map((ch, ci) => (
                              <li key={ci} className="flex items-start gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-rose-400 mt-1.5 shrink-0" />
                                <span>{ch}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="p-4 rounded-xl bg-white border border-slate-200/80 text-xs space-y-3">
                          <div>
                            <div className="font-bold text-slate-900 mb-1 uppercase font-mono tracking-wider">
                              Key Discovery Question:
                            </div>
                            <div className="text-slate-700 italic">“{sc.discoveryQuestions}”</div>
                          </div>

                          <div>
                            <div className="font-bold text-slate-900 mb-1 uppercase font-mono tracking-wider">
                              Relevant Solution Area:
                            </div>
                            <div className="text-blue-700 font-semibold">{sc.solutionArea}</div>
                          </div>

                          <div>
                            <div className="font-bold text-slate-900 mb-1 uppercase font-mono tracking-wider">
                              Relevant KPIs:
                            </div>
                            <div className="text-slate-600 font-mono text-[11px]">{sc.kpis}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>

            {/* ── SUBMENU 3: OBJECTION HANDLING ── */}
            <section id="objection-handling" className="scroll-mt-28 bg-white rounded-3xl border border-slate-200/90 p-8 sm:p-10 shadow-xs">
              <div className="max-w-3xl mb-8">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600 block mb-2">
                  Submenu 03 · Consultative Alignment
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
                  Objection Handling
                </h2>
                <p className="text-base text-slate-600 leading-relaxed font-normal">
                  Respectful, evidence-based responses to common client concerns. We reject aggressive pressure tactics or speculative guarantees, focusing instead on operational transparency and defined deliverables.
                </p>
              </div>

              <div className="space-y-4 mb-8">
                {objections.map((item, idx) => {
                  const isOpen = openObjectionIdx === idx;
                  return (
                    <div
                      key={item.id}
                      className="rounded-2xl border border-slate-200 bg-slate-50 overflow-hidden transition-all"
                    >
                      <button
                        onClick={() => setOpenObjectionIdx(isOpen ? -1 : idx)}
                        className="w-full text-left p-5 flex items-center justify-between gap-4 hover:bg-slate-100/80 transition-colors"
                      >
                        <span className="font-extrabold text-base text-slate-900">{item.objection}</span>
                        {isOpen ? (
                          <ChevronUp className="w-5 h-5 text-blue-600 shrink-0" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />
                        )}
                      </button>

                      {isOpen && (
                        <div className="p-5 pt-0 bg-white border-t border-slate-200/60">
                          <div className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600 mb-3 pt-3">
                            Consultative Response Approach:
                          </div>
                          <ul className="space-y-2 text-xs sm:text-sm text-slate-700 leading-relaxed">
                            {item.approach.map((point, pi) => (
                              <li key={pi} className="flex items-start gap-2.5">
                                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                                <span>{point}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </section>

            {/* ── SUBMENU 4: SOLUTION MAPPING ── */}
            <section id="solution-mapping" className="scroll-mt-28 bg-white rounded-3xl border border-slate-200/90 p-8 sm:p-10 shadow-xs">
              <div className="max-w-3xl mb-8">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600 block mb-2">
                  Submenu 04 · Challenge to Capability
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
                  Solution Mapping Matrix
                </h2>
                <p className="text-base text-slate-600 leading-relaxed font-normal">
                  A consultative matrix connecting 10 frequent prospect challenges directly to relevant service modules, diagnostic questions, tangible deliverables, and suggested success measures.
                </p>
              </div>

              <div className="space-y-4 mb-8">
                {solutionMappingMatrix.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-slate-50/80 border border-slate-200/80 hover:bg-white hover:border-blue-300 transition-all text-xs"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 mb-3 border-b border-slate-200">
                      <div>
                        <span className="text-[10px] font-mono font-bold text-slate-400 uppercase mr-2">0{idx + 1}</span>
                        <strong className="text-slate-900 text-sm font-extrabold">{item.challenge}</strong>
                      </div>
                      <Link
                        to={item.page}
                        className="inline-flex items-center gap-1 font-bold text-blue-600 hover:text-blue-700 text-xs shrink-0"
                      >
                        <span>{item.service}</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-slate-600">
                      <div>
                        <strong className="text-slate-800 block mb-1">Discovery Question:</strong>
                        <span className="italic leading-relaxed">{item.discoveryQ}</span>
                      </div>
                      <div>
                        <strong className="text-slate-800 block mb-1">Potential Deliverables:</strong>
                        <span className="leading-relaxed">{item.deliverables}</span>
                      </div>
                      <div>
                        <strong className="text-slate-800 block mb-1">Suggested Success Measure:</strong>
                        <span className="leading-relaxed text-blue-700 font-semibold">{item.successMeasure}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* ── SUBMENU 5: DISCOVERY CALL OUTPUT ── */}
            <section id="discovery-call-output" className="scroll-mt-28 bg-white rounded-3xl border border-slate-200/90 p-8 sm:p-10 shadow-xs">
              <div className="max-w-3xl mb-8">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600 block mb-2">
                  Submenu 05 · Post-Call Artifact
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
                  Discovery Call Output Template
                </h2>
                <p className="text-base text-slate-600 leading-relaxed font-normal">
                  A structured discovery summary template ensuring conversations with Web3 founders and ecosystem leaders convert into actionable, transparent commercial follow-ups across eight standard sections.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80">
                  <span className="text-xs font-mono font-bold text-blue-600 uppercase mb-1 block">Section 01</span>
                  <h3 className="text-base font-extrabold text-slate-900 mb-2">Company & Project Context</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Project name, category (L1, DeFi, GameFi, CEX), current stage (Concept, Testnet, TGE), and target audience profiles.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80">
                  <span className="text-xs font-mono font-bold text-blue-600 uppercase mb-1 block">Section 02</span>
                  <h3 className="text-base font-extrabold text-slate-900 mb-2">Business Objectives</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Primary growth objectives, desired commercial outcomes, key launch milestones, and liquidity targets.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80">
                  <span className="text-xs font-mono font-bold text-blue-600 uppercase mb-1 block">Section 03</span>
                  <h3 className="text-base font-extrabold text-slate-900 mb-2">Challenges</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Primary pain points, operational constraints, agency gaps, and technical or regulatory dependencies.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80">
                  <span className="text-xs font-mono font-bold text-blue-600 uppercase mb-1 block">Section 04</span>
                  <h3 className="text-base font-extrabold text-slate-900 mb-2">Impact & Urgency</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Consequences of delays, critical event deadlines, treasury runway constraints, and competing launches.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80">
                  <span className="text-xs font-mono font-bold text-blue-600 uppercase mb-1 block">Section 05</span>
                  <h3 className="text-base font-extrabold text-slate-900 mb-2">Stakeholders & Decision Process</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Decision-makers, budget ownership (Marketing, Foundation Grant, OPEX), approval criteria, and procurement path.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80">
                  <span className="text-xs font-mono font-bold text-blue-600 uppercase mb-1 block">Section 06</span>
                  <h3 className="text-base font-extrabold text-slate-900 mb-2">Recommended Solution Areas</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Selected engagement model (Diagnostic, Command, Retainer), proposed deliverables, and technical inputs required.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80">
                  <span className="text-xs font-mono font-bold text-blue-600 uppercase mb-1 block">Section 07</span>
                  <h3 className="text-base font-extrabold text-slate-900 mb-2">Measurement Plan</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Proposed operational KPIs, baseline data availability, verified attribution sources, and reporting cadence.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80">
                  <span className="text-xs font-mono font-bold text-blue-600 uppercase mb-1 block">Section 08</span>
                  <h3 className="text-base font-extrabold text-slate-900 mb-2">Next Steps & Responsibilities</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Action items, responsible owners, target completion dates, and outstanding diligence questions.
                  </p>
                </div>
              </div>

              {/* Final Discovery Call Action */}
              <div className="bg-slate-900 text-white rounded-2xl p-8 sm:p-10 border border-slate-800 text-center">
                <h3 className="text-2xl font-extrabold mb-3">Schedule a Structured Discovery Briefing</h3>
                <p className="text-slate-300 text-sm max-w-2xl mx-auto mb-6 leading-relaxed">
                  Connect with a ProfitMachines launch architect to walk through the SPICED framework and evaluate your project's launch readiness.
                </p>
                <div className="flex flex-wrap items-center justify-center gap-4">
                  <Link
                    to="/book-consultation"
                    className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold px-8 py-3.5 rounded-xl shadow-lg transition-all text-sm group"
                  >
                    <span>Discuss Your Crypto Growth Requirements</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link
                    to="/ico-acceleration"
                    className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold px-7 py-3.5 rounded-xl transition-all text-sm border border-white/20"
                  >
                    <span>View All Suite Modules</span>
                  </Link>
                </div>
              </div>
            </section>

      </main>
    </div>
  );
}
