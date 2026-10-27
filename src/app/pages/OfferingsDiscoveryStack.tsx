import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Search,
  Target,
  DollarSign,
  Network,
  ShieldCheck,
  Users,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Cpu,
  UserCheck,
  TrendingUp,
  Compass,
  ArrowUpRight,
  Layers,
  ChevronRight,
  Sparkle,
  Zap,
  Activity,
  Award,
  BarChart3,
} from 'lucide-react';

interface SubOffering {
  title: string;
  description: string;
}

interface DiscoveryLayerData {
  id: string;
  stepNum: string;
  name: string;
  tagline: string;
  coreQuestion: string;
  icon: any;
  scope: string;
  consultingOfferings: SubOffering[];
  automationOfferings: SubOffering[];
  whatYouReceive: string[];
  leadingIndicators: string;
  laggingIndicators: string;
  povSuccessBar: string;
  povPercent: number;
}

const discoveryLayers: DiscoveryLayerData[] = [
  {
    id: 'market-whitespace',
    stepNum: '01 / 07',
    name: 'Market & Whitespace Discovery',
    tagline: 'Map untapped revenue and margin-dense pockets before competitors arrive.',
    coreQuestion: 'Where is the revenue we haven\'t mapped?',
    icon: Search,
    scope: 'Macro Market Architecture',
    consultingOfferings: [
      {
        title: 'Total Addressable Market & Profit Pool Mapping',
        description: 'Sized whitespace mapping and micro-segment profit pool economics across addressable categories.'
      },
      {
        title: 'Segment Attractiveness & Entry Thesis',
        description: 'Empirical prioritization of target verticals, expansion regions, and strategic entry timing.'
      },
      {
        title: 'Micro-Segment Margin Mapping',
        description: 'Unit economics and margin variance analysis down to granular sub-segments and buyer cohorts.'
      }
    ],
    automationOfferings: [
      {
        title: 'Predictive Market Sizing Engine',
        description: 'Machine-learning powered addressable market modeling with real-time intent re-scoring.'
      },
      {
        title: 'Dark-Funnel & Intent Telemetry',
        description: 'Autonomous ingestion of third-party research, search spikes, and dark-funnel buying signals.'
      },
      {
        title: 'Whitespace Alerting Agents',
        description: 'Continuous surveillance detecting high-yield accounts and micro-regions slipping out of coverage.'
      }
    ],
    whatYouReceive: [
      'Sized whitespace and unit margin-driver heat map',
      'Continuous dark-funnel buyer intent ingestion pipeline',
      'Board-level new market entry thesis with prioritized account lists'
    ],
    leadingIndicators: 'Whitespace accounts identified, intent signal volume, buyer research surges',
    laggingIndicators: 'New-segment sourced pipeline value, revenue from unmapped territories',
    povSuccessBar: '≥ 200 qualified whitespace accounts mapped with verified intent signals',
    povPercent: 85
  },
  {
    id: 'demand-pipeline',
    stepNum: '02 / 07',
    name: 'Demand & Pipeline Discovery',
    tagline: 'Architect category narratives and autonomous outbound fleets that create urgency.',
    coreQuestion: 'What are buyers struggling to articulate?',
    icon: Target,
    scope: 'Pipeline Architecture',
    consultingOfferings: [
      {
        title: 'Demand Architecture & Channel Mix Design',
        description: 'Structural blueprints identifying where buyer demand originates, why it stalls, and optimal channel paths.'
      },
      {
        title: 'Messaging & Offer Engineering',
        description: 'Proprietary category language frameworks articulating latent pain points that trigger immediate executive priority.'
      },
      {
        title: 'Pipeline Motion Design',
        description: 'Targeted motion blueprints harmonizing enterprise outbound, high-velocity inbound, and account-based plays.'
      }
    ],
    automationOfferings: [
      {
        title: 'Autonomous Sales Development Agent Fleet',
        description: 'Multi-agent outbound engines executing research-grounded, multi-channel outreach at enterprise scale.'
      },
      {
        title: 'Dynamic Messaging Mesh',
        description: 'Real-time contextual personalization engine tailoring value props to recipient role, tech stack, and pain points.'
      },
      {
        title: 'Pipeline Velocity Telemetry',
        description: 'Stage-slip prediction and bottleneck detection alerting leadership before quarterly forecasts suffer.'
      }
    ],
    whatYouReceive: [
      'Proprietary category messaging and offer narrative handbook',
      'Production autonomous SDR fleet executing multi-channel outbound',
      'Real-time pipeline flow telemetry dashboard with stage-slip alerts'
    ],
    leadingIndicators: 'Executive reply rates, meeting booking velocity, signal-to-MQL conversion rate',
    laggingIndicators: 'Net new qualified pipeline value, customer acquisition cost reduction',
    povSuccessBar: '+25% qualified reply rate versus human-only control benchmark',
    povPercent: 90
  },
  {
    id: 'value-deal',
    stepNum: '03 / 07',
    name: 'Value & Deal Discovery',
    tagline: 'Engineer undeniable business cases and eliminate discount creep before the contract.',
    coreQuestion: 'How do we prove ROI before the PO?',
    icon: DollarSign,
    scope: 'Commercial Architecture',
    consultingOfferings: [
      {
        title: 'Value Engineering & ROI Business Case Studio',
        description: 'Pre-purchase proof architecture, executive business-case formulas, and buyer CFO justification frameworks.'
      },
      {
        title: 'Pricing & Packaging Architecture',
        description: 'Value-to-price alignment, tier structure overhaul, and ironclad discount governance policies.'
      },
      {
        title: 'Sales Stage & Qualification Rigor',
        description: 'MEDDPICC-aligned enterprise qualification models and stage-exit criteria enforced across reps.'
      }
    ],
    automationOfferings: [
      {
        title: 'Deal Intelligence & Win-Probability Engine',
        description: 'Predictive deal-risk scoring, buying-committee gap alerts, and next-best-action guidance.'
      },
      {
        title: 'Dynamic Deal Room & ROI Model Agent',
        description: 'Automated generation of bespoke customer business cases and interactive ROI calculators.'
      },
      {
        title: 'Forecast Precision Algorithm',
        description: 'Algorithmic commit vs. upside variance modeling replacing subjective sales rep conjecture.'
      }
    ],
    whatYouReceive: [
      'Executive CFO business case generator and buyer proof models',
      'MEDDPICC deal qualification scorecard and discount governance framework',
      'Machine-learning deal intelligence and win-probability engine'
    ],
    leadingIndicators: 'Business-case attachment rate, Proof of Concept conversion rate, qualification completeness',
    laggingIndicators: 'Win rate in competitive deals, average deal size, sales cycle time compression',
    povSuccessBar: '+15 percentage points Proof of Concept-to-close conversion lift',
    povPercent: 88
  },
  {
    id: 'channel-distribution',
    stepNum: '04 / 07',
    name: 'Channel & Distribution Discovery',
    tagline: 'Build resilient distribution ecosystems and eliminate single-channel vulnerability.',
    coreQuestion: 'How do we distribute without dependency?',
    icon: Network,
    scope: 'Distribution Architecture',
    consultingOfferings: [
      {
        title: 'Channel Economics & Partner Program Design',
        description: 'Margin waterfalls, partner incentive modeling, co-sell alignment, and partner tier structures.'
      },
      {
        title: 'Coverage Model & Territory Design',
        description: 'Balanced territory quotas, direct vs. partner handoff boundaries, and hybrid coverage optimization.'
      }
    ],
    automationOfferings: [
      {
        title: 'Channel Mix Optimization Engine',
        description: 'Machine learning allocation engine rebalancing capital and rep effort across top performing channels.'
      },
      {
        title: 'Partner Sourcing & Performance Agents',
        description: 'Automated partner prospecting, technical certification tracking, and real-time deal routing.'
      }
    ],
    whatYouReceive: [
      'Multi-tier partner economics model and co-sell playbook',
      'Algorithmic channel budget optimization logic',
      'Automated partner discovery and pipeline routing engine'
    ],
    leadingIndicators: 'Channel-attributed pipeline share, partner co-sell registrations, partner velocity',
    laggingIndicators: 'Blended customer acquisition cost, gross margin per channel, channel concentration index',
    povSuccessBar: '−20% dependency on top primary channel with zero loss in aggregate volume',
    povPercent: 80
  },
  {
    id: 'competitive-positioning',
    stepNum: '05 / 07',
    name: 'Competitive & Positioning Discovery',
    tagline: 'Expose rival vulnerabilities and equip front-line reps to win contested enterprise deals.',
    coreQuestion: 'Why do we win or lose?',
    icon: ShieldCheck,
    scope: 'Defensive Architecture',
    consultingOfferings: [
      {
        title: 'Win/Loss Teardown & Positioning Thesis',
        description: 'Deep-dive qualitative and quantitative deal post-mortems exposing true buyer decision triggers.'
      },
      {
        title: 'Objection & Negotiation Playbook',
        description: 'Field-tested objection counters, competitive trap-setting scripts, and late-stage concession guards.'
      }
    ],
    automationOfferings: [
      {
        title: 'Competitive Intelligence Agent',
        description: 'Autonomous scrapers tracking rival pricing shifts, feature deployments, executive hires, and review trends.'
      },
      {
        title: 'Battlecard & Objection-Response Autopilot',
        description: 'Rep-facing contextual assistant serving real-time tactical rebuttals inside live video calls and CRM.'
      }
    ],
    whatYouReceive: [
      'Win/Loss diagnostic report exposing root deal loss patterns',
      'Late-stage concession and objection-countering playbook',
      'Live competitor change-alerting agent and dynamic rep battlecards'
    ],
    leadingIndicators: 'Battlecard engagement rate, objection handling confidence score, rival mention frequency',
    laggingIndicators: 'Win rate against named competitors, discount rate against incumbent rivals',
    povSuccessBar: '+10 percentage points win rate improvement in head-to-head contested deals',
    povPercent: 84
  },
  {
    id: 'customer-propensity',
    stepNum: '06 / 07',
    name: 'Customer & Propensity Discovery',
    tagline: 'Pinpoint accounts in an active buying window and route them to reps within seconds.',
    coreQuestion: 'Who is actually ready to buy?',
    icon: Users,
    scope: 'Targeting Architecture',
    consultingOfferings: [
      {
        title: 'Ideal Customer Profile & Buying-Committee Diagnostic',
        description: 'Multidimensional persona mapping across economic buyers, technical evaluators, security gates, and internal champions.'
      },
      {
        title: 'Account Tiering & Coverage Strategy',
        description: 'Precision tiering frameworks matching high-cost human engagement to verified high-yield accounts.'
      }
    ],
    automationOfferings: [
      {
        title: 'Propensity & Lookalike Scoring Engine',
        description: 'Neural networks analyzing hundreds of firmographic, technographic, and intent parameters to predict conversion.'
      },
      {
        title: 'Buying Signal Aggregation & Routing',
        description: 'Sub-second webhook pipelines dispatching high-intent account alerts directly to rep communication channels.'
      }
    ],
    whatYouReceive: [
      'Comprehensive buying committee matrix and security gate playbook',
      'Production machine learning propensity scoring model across account base',
      'Sub-second signal routing pipelines delivering ready-to-buy accounts directly to reps'
    ],
    leadingIndicators: 'Propensity score coverage, signal-to-representative dispatch latency, rep acceptance rate',
    laggingIndicators: 'Sales-qualified lead to closed-won conversion rate, sales representative quota attainment',
    povSuccessBar: '2× qualification accuracy versus existing manual lead scoring baseline',
    povPercent: 92
  },
  {
    id: 'product-market-fit',
    stepNum: '07 / 07',
    name: 'Product-Market Fit & Offer Architecture Discovery',
    tagline: 'Connect product telemetry to commercial expansion and unlock installed-base revenue.',
    coreQuestion: 'What should we sell, to whom, at what price?',
    icon: Sparkles,
    scope: 'Monetization Architecture',
    consultingOfferings: [
      {
        title: 'Offer & Bundle Architecture',
        description: 'Packaging strategy, feature tiering, modular add-ons, and pricing model restructuring.'
      },
      {
        title: 'R&D-to-Revenue Alignment Review',
        description: 'Product feature economic audit providing kill, defend, or commercialize recommendations for engineering investments.'
      },
      {
        title: 'Expansion & Cross-Sell Revenue Mapping',
        description: 'Whitespace discovery within the existing customer base to systematically drive net revenue retention.'
      }
    ],
    automationOfferings: [
      {
        title: 'Usage-to-Revenue Signal Pipeline',
        description: 'Real-time telemetry linking customer product consumption patterns directly to revenue expansion triggers.'
      },
      {
        title: 'Next-Best-Offer & Expansion Propensity Engine',
        description: 'Predictive models identifying the exact calendar window and feature triggers when accounts are ripe for expansion.'
      }
    ],
    whatYouReceive: [
      'Multi-tier offer packaging architecture and discount governance guidelines',
      'R&D feature monetization audit with kill/scale recommendations',
      'Product usage-to-revenue telemetry pipeline with automated expansion alerts'
    ],
    leadingIndicators: 'Product-qualified account volume, feature-to-upgrade signal triggers, expansion pipeline',
    laggingIndicators: 'Net Revenue Retention (NRR), expansion ARR, gross revenue churn reduction',
    povSuccessBar: 'Measurable conversion lift and statistically significant expansion velocity in target cohort',
    povPercent: 86
  }
];

export default function OfferingsDiscoveryStack() {
  const [activeLayerId, setActiveLayerId] = useState<string>('market-whitespace');

  const scrollToLayer = (id: string) => {
    setActiveLayerId(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 pt-16 lg:pt-[72px]">
      {/* ── SECTION 1: HERO SECTION (70vh, Dark Background, 3D Stack Effect) ── */}
      <section className="relative min-h-[70vh] flex flex-col justify-center bg-slate-950 text-white overflow-hidden border-b border-slate-800 py-20 lg:py-28">
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute inset-0 opacity-[0.18]"
            style={{
              backgroundImage: 'linear-gradient(to right, #334155 1px, transparent 1px), linear-gradient(to bottom, #334155 1px, transparent 1px)',
              backgroundSize: '4rem 4rem'
            }}
          />
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/15 rounded-full blur-[140px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-600/15 rounded-full blur-[140px] pointer-events-none" />
        </div>

        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/30 text-blue-400 text-xs font-mono font-bold tracking-wider uppercase mb-6 shadow-sm">
            <Compass className="w-3.5 h-3.5" />
            <span>WHAT WE SOLVE // SEVEN DIAGNOSTIC LAYERS</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.08] mb-6 font-heading max-w-4xl mx-auto">
            Seven Questions That Unlock Your{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-300">
              Hidden Revenue.
            </span>
          </h1>

          <p className="text-base sm:text-lg lg:text-xl text-slate-300 leading-relaxed font-normal mb-8 max-w-3xl mx-auto">
            Seven diagnostic layers form the spine of every ProfitMachines offering. Each layer answers one critical revenue question, delivered concurrently through human strategy and autonomous AI pipelines.
          </p>

          <div className="flex flex-wrap justify-center items-center gap-4 mb-10">
            <a
              href="#stack-visual"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold px-7 py-3.5 rounded-xl transition-all shadow-lg shadow-blue-600/30 text-sm group"
            >
              <span>Explore the Stack Visual</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>

            <a
              href="#kpi-library"
              className="inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 text-white font-bold px-6 py-3.5 rounded-xl transition-all text-sm border border-white/15"
            >
              <span>View KPI Library</span>
            </a>
          </div>
        </div>
      </section>

      {/* ── SECTION 2: THE STACK VISUAL (Signature 3D Perspective Component) ── */}
      <section id="stack-visual" className="py-16 lg:py-24 bg-slate-900 border-b border-slate-800 text-white">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-mono uppercase tracking-wider text-blue-400 font-bold">
              Architectural Sequence
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2 mb-3 font-heading">
              The Seven Diagnostic Layers at a Glance
            </h2>
            <p className="text-sm text-slate-400">
              From macro market whitespace down to micro product telemetry. Click any layer to smooth-scroll down to its dedicated deep dive.
            </p>
          </div>

          {/* 7 Horizontal Layer Planes Stacked with Perspective */}
          <div className="space-y-3 max-w-4xl mx-auto">
            {discoveryLayers.map((layer, index) => {
              const Icon = layer.icon;
              const isSelected = activeLayerId === layer.id;
              // Subtle pyramid width effect (macro to micro)
              const widthClasses = [
                'w-full',
                'w-[98%]',
                'w-[96%]',
                'w-[94%]',
                'w-[92%]',
                'w-[90%]',
                'w-[88%]'
              ];

              return (
                <div key={layer.id} className="flex justify-center">
                  <button
                    type="button"
                    onClick={() => scrollToLayer(layer.id)}
                    className={`${widthClasses[index]} text-left rounded-2xl p-4 sm:p-5 border transition-all duration-300 flex items-center justify-between gap-4 cursor-pointer group ${
                      isSelected
                        ? 'bg-blue-600 text-white border-blue-400 shadow-xl shadow-blue-600/20 scale-[1.01]'
                        : 'bg-slate-950/90 text-slate-300 border-slate-800 hover:bg-slate-800 hover:border-slate-700 hover:text-white'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                          isSelected ? 'bg-white/20 text-white' : 'bg-slate-900 text-blue-400'
                        }`}
                      >
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-0.5">
                          <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">
                            {layer.stepNum}
                          </span>
                          <span className="text-[10px] text-slate-500">·</span>
                          <span className="text-[10px] font-mono uppercase text-cyan-400 font-bold">
                            {layer.scope}
                          </span>
                        </div>
                        <h3 className="text-base sm:text-lg font-bold text-white">
                          {layer.name}
                        </h3>
                      </div>
                    </div>

                    <div className="hidden md:block text-right pr-4">
                      <span className="text-xs font-mono italic text-blue-200">
                        "{layer.coreQuestion}"
                      </span>
                    </div>

                    <div className="shrink-0 flex items-center gap-2">
                      <span className="text-xs font-bold text-blue-400 group-hover:text-white hidden sm:inline">
                        Inspect Layer
                      </span>
                      <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-white group-hover:translate-x-1 transition-transform" />
                    </div>
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── SECTION 3: LAYER DEEP-DIVES (7 Full Sections with Sticky Left 30% / Right 70%) ── */}
      <div className="divide-y divide-slate-200">
        {discoveryLayers.map((layer, idx) => {
          const isEven = idx % 2 === 0;
          return (
            <section
              key={layer.id}
              id={layer.id}
              className={`py-20 lg:py-28 ${
                isEven ? 'bg-white' : 'bg-slate-50'
              } scroll-mt-28`}
            >
              <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
                  
                  {/* LEFT COLUMN (Sticky Side Panel, 30%): Layer Name, Core Question, Number */}
                  <div className="lg:col-span-4 lg:sticky lg:top-36 space-y-4">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono font-bold uppercase">
                      <span>{layer.stepNum} // Diagnostic Layer</span>
                    </div>

                    <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading">
                      {layer.name}
                    </h2>

                    <blockquote className="p-4 rounded-2xl bg-slate-900 text-white border border-slate-800 shadow-md">
                      <span className="text-[10px] font-mono uppercase text-blue-400 font-bold block mb-1">
                        Core Diagnostic Question:
                      </span>
                      <p className="text-base sm:text-lg font-medium italic text-blue-200">
                        "{layer.coreQuestion}"
                      </p>
                    </blockquote>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                      {layer.tagline}
                    </p>

                    <div className="pt-2">
                      <span className="text-[11px] font-mono text-slate-400 uppercase font-bold block mb-1">
                        Domain Scope
                      </span>
                      <span className="text-xs font-bold text-slate-800 bg-slate-100 px-3 py-1.5 rounded-lg border border-slate-200 inline-block">
                        {layer.scope}
                      </span>
                    </div>
                  </div>

                  {/* RIGHT COLUMN (Main Content, 70%): Consulting Track, Automation Track, What You Receive */}
                  <div className="lg:col-span-8 space-y-6">
                    {/* Dual-Track Cards Side-by-Side */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      
                      {/* The Consulting Track */}
                      <div className="rounded-3xl bg-white border border-slate-200 p-6 sm:p-7 shadow-xs flex flex-col justify-between">
                        <div>
                          <div className="flex items-center justify-between mb-4">
                            <span className="text-xs font-mono font-bold text-blue-600 uppercase tracking-wider">
                              Track A // Strategy
                            </span>
                            <UserCheck className="w-5 h-5 text-blue-600" />
                          </div>
                          <h3 className="text-lg font-bold text-slate-900 mb-4">
                            The Consulting Track
                          </h3>

                          <div className="space-y-4">
                            {layer.consultingOfferings.map((item, cIdx) => (
                              <div key={cIdx} className="p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                                <h4 className="text-xs font-bold text-slate-900 mb-1">
                                  {item.title}
                                </h4>
                                <p className="text-xs text-slate-600 leading-relaxed">
                                  {item.description}
                                </p>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* The Automation Track */}
                      <div className="rounded-3xl bg-white border border-slate-200 p-6 sm:p-7 shadow-xs flex flex-col justify-between">
                        <div>
                          <div className="flex items-center justify-between mb-4">
                            <span className="text-xs font-mono font-bold text-indigo-600 uppercase tracking-wider">
                              Track B // AI Systems
                            </span>
                            <Cpu className="w-5 h-5 text-indigo-600" />
                          </div>
                          <h3 className="text-lg font-bold text-slate-900 mb-4">
                            The Automation Track
                          </h3>

                          <div className="space-y-4">
                            {layer.automationOfferings.map((item, aIdx) => (
                              <div key={aIdx} className="p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                                <h4 className="text-xs font-bold text-slate-900 mb-1">
                                  {item.title}
                                </h4>
                                <p className="text-xs text-slate-600 leading-relaxed">
                                  {item.description}
                                </p>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                    </div>

                    {/* What You Receive (Highlighted Box) */}
                    <div className="p-6 sm:p-7 rounded-3xl bg-slate-900 text-white border border-slate-800 shadow-md">
                      <span className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-bold block mb-3">
                        What You Receive (Tangible Outputs)
                      </span>
                      <div className="space-y-2.5">
                        {layer.whatYouReceive.map((out, oIdx) => (
                          <div key={oIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                            <span>{out}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                  </div>

                </div>
              </div>
            </section>
          );
        })}
      </div>

      {/* ── SECTION 4: KPI LIBRARY (Data Table with Progress Bar Visualizations) ── */}
      <section id="kpi-library" className="py-20 lg:py-28 bg-slate-900 text-white border-t border-b border-slate-800">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono uppercase tracking-wider text-blue-400 font-bold">
              Verifiable Measurement
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mt-2 mb-4 font-heading">
              What We Measure at Every Layer
            </h2>
            <p className="text-base text-slate-400">
              Every layer carries strict measurement rigor. We define leading operational signals, lagging financial outcomes, and the pre-agreed Proof of Value success threshold before kick-off.
            </p>
          </div>

          <div className="overflow-x-auto rounded-3xl border border-slate-800 bg-slate-950 shadow-2xl">
            <table className="w-full text-left text-xs sm:text-sm text-slate-300">
              <thead className="bg-slate-900 text-slate-200 uppercase font-mono text-xs border-b border-slate-800 sticky top-0">
                <tr>
                  <th scope="col" className="px-6 py-4 font-bold">Diagnostic Layer</th>
                  <th scope="col" className="px-6 py-4 font-bold">Leading Indicators</th>
                  <th scope="col" className="px-6 py-4 font-bold">Lagging Indicators</th>
                  <th scope="col" className="px-6 py-4 font-bold text-emerald-400">Proof-of-Value Success Bar</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60">
                {discoveryLayers.map((l) => (
                  <tr key={l.id} className="hover:bg-slate-900/60 transition-colors">
                    <td className="px-6 py-4 font-bold text-white whitespace-nowrap">
                      <div className="flex items-center gap-2">
                        <l.icon className="w-4 h-4 text-blue-400 shrink-0" />
                        <span>{l.name}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-slate-300 max-w-xs">{l.leadingIndicators}</td>
                    <td className="px-6 py-4 text-slate-300 max-w-xs">{l.laggingIndicators}</td>
                    <td className="px-6 py-4 max-w-sm">
                      <div className="font-semibold text-emerald-300 text-xs mb-1.5">{l.povSuccessBar}</div>
                      <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-emerald-500 rounded-full"
                          style={{ width: `${l.povPercent}%` }}
                        />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── SECTION 5: HOW LAYERS CONNECT (Interconnected System Visual) ── */}
      <section className="py-20 lg:py-28 bg-white border-b border-slate-200">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono uppercase tracking-wider text-blue-600 font-bold">
              Systemic Interconnection
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 mt-2 mb-4 font-heading">
              These Are Not Seven Problems.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
                They Are One System.
              </span>
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed italic">
              "Fix one in isolation and the others collapse. Fix the system and they all improve."
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 text-left">
              <span className="text-xs font-mono text-blue-600 font-bold block mb-1">Feedback Loop 01</span>
              <h4 className="text-sm font-bold text-slate-900 mb-1">Market → Demand</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                TAM whitespace data directly feeds autonomous outbound messaging parameters.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 text-left">
              <span className="text-xs font-mono text-blue-600 font-bold block mb-1">Feedback Loop 02</span>
              <h4 className="text-sm font-bold text-slate-900 mb-1">Demand → Deal Value</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Category messaging frames buyer CFO pain, anchoring value before contract negotiations.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 text-left">
              <span className="text-xs font-mono text-blue-600 font-bold block mb-1">Feedback Loop 03</span>
              <h4 className="text-sm font-bold text-slate-900 mb-1">Deal Rigor → Forecast</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                MEDDPICC criteria power algorithmic commit engines, eliminating sales forecast variance.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 text-left">
              <span className="text-xs font-mono text-blue-600 font-bold block mb-1">Feedback Loop 04</span>
              <h4 className="text-sm font-bold text-slate-900 mb-1">Telemetry → PMF Expansion</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Product telemetry triggers automated upsell alerts, continuously driving Net Revenue Retention.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 6: CTA ── */}
      <section className="py-20 bg-slate-950 text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4 font-heading">
            Which Layer is Leaking Revenue in Your Business?
          </h2>
          <p className="text-slate-300 text-base max-w-2xl mx-auto mb-8">
            Take 60 seconds with our interactive selector to pinpoint your primary diagnostic bottleneck and receive a customized model recommendation.
          </p>
          <div className="flex flex-wrap justify-center items-center gap-4">
            <Link
              to="/offerings#engagement-selector"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold px-7 py-3.5 rounded-xl transition-all shadow-lg shadow-blue-600/30 text-sm group"
            >
              <span>Use Engagement Selector</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/offerings/fast-start-kits"
              className="inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 text-white font-bold px-6 py-3.5 rounded-xl transition-all text-sm border border-white/15"
            >
              <span>Explore Fast-Start Discovery Kits</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
