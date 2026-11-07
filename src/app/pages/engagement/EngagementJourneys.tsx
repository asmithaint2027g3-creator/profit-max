import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  TrendingUp,
  ArrowRight,
  ShieldCheck,
  Zap,
  Handshake,
  Wrench,
  Sparkles,
  Clock,
  Compass,
  CheckCircle2,
  ChevronRight,
  Layers,
  Award,
} from 'lucide-react';

interface JourneyStep {
  modelName: string;
  duration: string;
  focus: string;
  deliverable: string;
}

interface Journey {
  id: string;
  name: string;
  tagline: string;
  bestFor: string;
  typicalClient: string;
  whyItWorks: string;
  steps: JourneyStep[];
  strategicTheme: string;
  icon: any;
  accentBg: string;
  accentText: string;
  accentBorder: string;
}

const journeysData: Journey[] = [
  {
    id: 'prove-then-scale',
    name: 'Prove Then Scale',
    tagline: 'De-risk capital allocation through empirical gates and credentialed proof.',
    bestFor: 'Skeptical boards, first-time enterprise buyers, and metric-driven executive teams.',
    typicalClient: 'Mid-to-large SaaS and FinTech scale-ups where board governance requires proof before multi-year GTM commitments.',
    whyItWorks: 'Every step de-risks the next. By the time you transition to an Outcome-Based structure, the core system is already proven, your team is enabled, and metric attribution is locked.',
    strategicTheme: 'Lowest Risk Entry to Scaled Transformation',
    icon: ShieldCheck,
    accentBg: 'bg-blue-50',
    accentText: 'text-blue-600',
    accentBorder: 'border-blue-200'
  ,
    steps: [
      {
        modelName: 'Advisory & Insight',
        duration: '2 Weeks',
        focus: 'Frame the Question & Thesis',
        deliverable: 'Executive scorecard, whitespace diagnosis, and decision memo.'
      },
      {
        modelName: 'Proof of Value',
        duration: '6 Weeks',
        focus: 'Validate Directional Lift',
        deliverable: 'Live statistical lift validation; 100% of fee creditable toward scale.'
      },
      {
        modelName: 'Transformation Engagements',
        duration: '6 Months',
        focus: 'Deploy Full Operating System',
        deliverable: 'End-to-end discovery stack, production automation, and team enablement.'
      },
      {
        modelName: 'Outcome-Based Engagement',
        duration: 'Ongoing',
        focus: 'Scale Against Committed Metrics',
        deliverable: 'Shared upside model tied directly to verified revenue and pipeline movement.'
      }
    ]
  },
  {
    id: 'speed-first',
    name: 'Speed First',
    tagline: 'Generate pipeline in-market today while engineering long-term infrastructure in parallel.',
    bestFor: 'Urgent pipeline droughts, quarterly revenue misses, or rapid new-motion validation.',
    typicalClient: 'Growth-stage companies suffering from sudden deal slippage or rep ramp lag needing immediate revenue production this quarter.',
    whyItWorks: 'You do not wait for a 6-month consulting blueprint to start closing deals. Our forward-deployed operators generate live pipeline this quarter while our architects design next quarter\'s machine in parallel.',
    strategicTheme: 'Immediate Revenue Impact with Architecture in Parallel',
    icon: Zap,
    accentBg: 'bg-amber-50',
    accentText: 'text-amber-600',
    accentBorder: 'border-amber-200',
    steps: [
      {
        modelName: 'Forward Deployed Sales Accelerators',
        duration: '3 Months',
        focus: 'In-Market Live Deal Execution',
        deliverable: 'Immediate pipeline creation, live multi-channel outbound, and deal advancement.'
      },
      {
        modelName: 'Consulting Services (Parallel)',
        duration: 'Concurrent',
        focus: 'System Architecture in Parallel',
        deliverable: 'GTM blueprint, ICP frameworks, and sales qualification rigor.'
      },
      {
        modelName: 'Resident Growth Architects',
        duration: '6–12 Months',
        focus: 'Embed & Capability Transfer',
        deliverable: 'Embedded operator transitions sales motions to internal team ownership.'
      }
    ]
  },
  {
    id: 'the-partnership-path',
    name: 'The Partnership Path',
    tagline: 'Joint capital and economic alignment for category-defining strategic transformations.',
    bestFor: 'Category-defining bets, new market creation, platform launches, and PE portfolio platforms.',
    typicalClient: 'Private equity operating partners and founders making multi-million dollar category bets requiring shared risk and upside.',
    whyItWorks: 'For transformative bets too large for a standard fee, this journey aligns both parties on a shared P&L. Architecture leads to empirical performance proof, unlocking a true co-investment partnership where we only win when you win.',
    strategicTheme: 'Co-Investment with Shared Downside & Upside',
    icon: Handshake,
    accentBg: 'bg-emerald-50',
    accentText: 'text-emerald-600',
    accentBorder: 'border-emerald-200',
    steps: [
      {
        modelName: 'Consulting Services',
        duration: '2 Months',
        focus: 'Architecture & Joint Thesis',
        deliverable: 'Market opportunity blueprint, joint economics, and commercial charter.'
      },
      {
        modelName: 'Proof of Performance',
        duration: '2 Months',
        focus: 'Hard Contracted Numbers',
        deliverable: 'Rigorous validation against contracted pipeline and conversion thresholds.'
      },
      {
        modelName: 'Joint Risk-Sharing Partnership',
        duration: '12–18 Months',
        focus: 'Shared P&L Economics',
        deliverable: 'Co-investment in go-to-market engine with 15–30% upside gain-share.'
      }
    ]
  },
  {
    id: 'capability-build',
    name: 'Capability Build',
    tagline: 'Permanent in-house mastery without perpetual agency dependency.',
    bestFor: 'Organizations committed to owning and operating their revenue engine internally.',
    typicalClient: 'Mature enterprise leaders who refuse to be trapped by external agency retainers and demand permanent internal capability.',
    whyItWorks: 'We do not create perpetual dependency. Our resident architect embeds directly inside your organization, builds the playbooks and automation alongside your team, and hands over complete intellectual property.',
    strategicTheme: 'Capability Transfer & Internal Autonomy',
    icon: Wrench,
    accentBg: 'bg-cyan-50',
    accentText: 'text-cyan-600',
    accentBorder: 'border-cyan-200',
    steps: [
      {
        modelName: 'Consulting Services (Design)',
        duration: '6–8 Weeks',
        focus: 'Method & Framework Blueprint',
        deliverable: 'Full revenue operating system design, sales stages, and tech matrix.'
      },
      {
        modelName: 'Resident Growth Architects (Build)',
        duration: '6–12 Months',
        focus: 'Execute Alongside Team',
        deliverable: 'Senior embedded architect transfers capabilities and trains managers.'
      },
      {
        modelName: 'Advisory & Insight (Ongoing)',
        duration: 'Quarterly',
        focus: 'Strategic Governance Retainer',
        deliverable: 'Executive counsel, quarterly audits, and early-warning signal reviews.'
      }
    ]
  },
  {
    id: 'transformation-skin-in-the-game',
    name: 'Transformation with Skin in the Game',
    tagline: 'Enterprise structural change backed by substantial shared downside.',
    bestFor: 'Enterprise scale, post-merger integration, new executive mandates (CRO/CEO), and board overhauls.',
    typicalClient: 'Post-Series C or publicly traded enterprise revenue organizations requiring large-scale structural change with financial alignment.',
    whyItWorks: 'Designed for enterprise-scale transformations. Starts with unbiased executive truth finding, mobilizes a multi-workstream transformation program where 20% of fees are at-risk, and transitions into verified performance economics.',
    strategicTheme: 'Multi-Workstream Enterprise Overhaul',
    icon: Sparkles,
    accentBg: 'bg-purple-50',
    accentText: 'text-purple-600',
    accentBorder: 'border-purple-200',
    steps: [
      {
        modelName: 'Advisory & Insight',
        duration: '3–4 Weeks',
        focus: 'Executive Truth Finding',
        deliverable: 'Comprehensive revenue leak diagnosis and board-level transformation roadmap.'
      },
      {
        modelName: 'Transformation Engagements (80/20)',
        duration: '6–9 Months',
        focus: 'Operating System Deployment',
        deliverable: 'Discovery stack + production automation; 20% fee at-risk on adoption KPIs.'
      },
      {
        modelName: 'Outcome-Based Engagement',
        duration: '6–12 Months',
        focus: 'Metric-Coupled Operations',
        deliverable: 'Ongoing execution tied directly to pipeline, CAC reduction, and win rate.'
      },
      {
        modelName: 'Joint Risk-Sharing (Optional)',
        duration: 'Multi-Year',
        focus: 'Long-Term Strategic Deepening',
        deliverable: 'Shared commercial entity or multi-product growth partnership.'
      }
    ]
  }
];

const situationMappings = [
  {
    situation: 'Pipeline Drought',
    symptom: 'Immediate deal shortfall threatening current quarter quota.',
    journeyId: 'speed-first',
    journeyName: 'Speed First',
    why: 'Forward-deployed operators enter the field immediately while foundational architecture is designed in parallel.'
  },
  {
    situation: 'High CAC / Capital Efficiency Mandate',
    symptom: 'Acquisition costs escalating; board mandates unit economics proof before funding.',
    journeyId: 'prove-then-scale',
    journeyName: 'Prove Then Scale',
    why: 'Prove unit economic lift and propensity scoring in a rapid Proof of Value before scaling budget commitments.'
  },
  {
    situation: 'New Market or Geography Entry',
    symptom: 'Expanding into an untested vertical or country with significant commercial risk.',
    journeyId: 'the-partnership-path',
    journeyName: 'The Partnership Path',
    why: 'Co-invest in the initial validation and align long-term economics through a shared P&L framework.'
  },
  {
    situation: 'Moving Upmarket to Enterprise',
    symptom: 'Mid-market product struggling with multi-stakeholder buying committees and long sales cycles.',
    journeyId: 'capability-build',
    journeyName: 'Capability Build',
    why: 'Embed a Resident Growth Architect to institutionalize value engineering and enterprise deal rigor.'
  },
  {
    situation: 'Post-M&A GTM Integration',
    symptom: 'Merged sales teams, conflicting tech stacks, overlapping territories, and fragmented messaging.',
    journeyId: 'transformation-skin-in-the-game',
    journeyName: 'Transformation with Skin in the Game',
    why: 'Multi-workstream structural alignment with milestone gates and adoption-tied financial accountability.'
  },
  {
    situation: 'Private Equity Portfolio Optimization',
    symptom: 'Multiple portfolio companies needing accelerated organic growth under repeatable frameworks.',
    journeyId: 'the-partnership-path',
    journeyName: 'The Partnership Path',
    why: 'Repeatable revenue architecture deployed across companies with aligned performance outcomes.'
  }
];

export default function EngagementJourneys() {
  const scrollToJourney = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 pt-16 lg:pt-[72px]">
      {/* ── SECTION 1: HERO SECTION (70vh, Dark Background, Strategic Path) ── */}
      <section className="relative min-h-[70vh] flex flex-col justify-center bg-white text-slate-900 overflow-hidden border-b border-slate-200 py-20 lg:py-28">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div
            className="absolute inset-0 opacity-[0.35]"
            style={{
              backgroundImage: 'linear-gradient(to right, #e2e8f0 1px, transparent 1px), linear-gradient(to bottom, #e2e8f0 1px, transparent 1px)',
              backgroundSize: '4rem 4rem'
            }}
          />
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[140px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[140px] pointer-events-none" />
        </div>
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
            <span>HOW CLIENTS SCALE // SEQUENCED PATHWAYS</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.08] mb-6 font-heading max-w-4xl mx-auto">
            Models Chain.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-300">
              Clients Rarely Buy Just One.
            </span>
          </h1>

          <p className="text-base sm:text-lg lg:text-xl text-slate-300 leading-relaxed font-normal mb-8 max-w-3xl mx-auto">
            Most engagements progress through a sequenced journey. The starting model matters less than the direction of travel — and every journey is engineered so your risk decreases as verifiable evidence accumulates.
          </p>

          {/* 5 Journey Preview Pills */}
          <div className="flex flex-wrap justify-center items-center gap-2.5 max-w-3xl mx-auto">
            {journeysData.map((j) => (
              <button
                key={j.id}
                type="button"
                onClick={() => scrollToJourney(j.id)}
                className="px-4 py-2 rounded-xl bg-white border border-slate-200 text-xs font-bold text-slate-300 hover:text-white hover:border-slate-700 hover:bg-slate-850 transition-all cursor-pointer flex items-center gap-1.5"
              >
                <j.icon className="w-3.5 h-3.5 text-blue-400" />
                <span>{j.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 2: THE 5 JOURNEYS (5 Full Sections with Horizontal Timelines) ── */}
      <div className="divide-y divide-slate-200">
        {journeysData.map((journey, idx) => {
          const isEven = idx % 2 === 0;
          const Icon = journey.icon;
          return (
            <section
              key={journey.id}
              id={journey.id}
              className={`py-20 lg:py-28 ${
                isEven ? 'bg-white' : 'bg-slate-50'
              } scroll-mt-28`}
            >
              <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* TOP: Journey Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 mb-10 border-b border-slate-200">
                  <div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-100 border border-slate-200 text-slate-700 text-xs font-mono font-bold uppercase mb-2">
                      <Icon className="w-3.5 h-3.5 text-blue-600" />
                      <span>Pathway 0{idx + 1} // {journey.strategicTheme}</span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading">
                      {journey.name}
                    </h2>
                    <p className="text-base text-slate-600 mt-1">
                      {journey.tagline}
                    </p>
                  </div>

                  <div className="text-right">
                    <span className="text-xs font-mono text-slate-400 uppercase block mb-0.5">Primary Mandate</span>
                    <span className="text-xs font-bold text-blue-600">{journey.bestFor}</span>
                  </div>
                </div>

                {/* MIDDLE: Horizontal Timeline Visual with Nodes & Connected Flow */}
                <div className="mb-10">
                  <span className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold block mb-4">
                    Sequenced Execution Stages
                  </span>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {journey.steps.map((step, sIdx) => (
                      <div
                        key={sIdx}
                        className="rounded-2xl bg-white border border-slate-200 p-5 shadow-xs flex flex-col justify-between relative group hover:border-blue-400 hover:shadow-md transition-all"
                      >
                        <div>
                          <div className="flex items-center justify-between gap-2 mb-3">
                            <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-blue-50 border border-blue-200 text-blue-700 font-bold">
                              Stage 0{sIdx + 1}
                            </span>
                            <div className="flex items-center gap-1 text-[11px] font-mono text-slate-500">
                              <Clock className="w-3 h-3 text-blue-600" />
                              <span>{step.duration}</span>
                            </div>
                          </div>

                          <h4 className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                            {step.modelName}
                          </h4>
                          <p className="text-xs text-blue-600 font-semibold mt-0.5">
                            {step.focus}
                          </p>
                        </div>

                        <div className="mt-4 pt-4 border-t border-slate-100">
                          <span className="text-[10px] font-mono uppercase text-slate-400 block mb-0.5">
                            Key Output:
                          </span>
                          <p className="text-xs text-slate-600 leading-snug">
                            {step.deliverable}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* BOTTOM: Why It Works Quote Box & Typical Client Callout */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                  <div className="lg:col-span-8 p-6 rounded-2xl bg-white text-white border border-slate-200 shadow-md">
                    <span className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-bold block mb-2">
                      Why This Sequence Works:
                    </span>
                    <p className="text-sm text-slate-200 leading-relaxed italic">
                      "{journey.whyItWorks}"
                    </p>
                  </div>

                  <div className="lg:col-span-4 p-6 rounded-2xl bg-slate-100 border border-slate-200">
                    <span className="text-xs font-mono uppercase tracking-wider text-slate-500 font-bold block mb-1">
                      Typical Client Profile:
                    </span>
                    <p className="text-xs text-slate-700 leading-relaxed font-medium">
                      {journey.typicalClient}
                    </p>
                  </div>
                </div>

              </div>
            </section>
          );
        })}
      </div>

      {/* ── SECTION 3: SITUATION → JOURNEY MAPPER (Interactive Grid) ── */}
      <section className="py-20 lg:py-28 bg-white border-t border-b border-slate-200">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono uppercase tracking-wider text-blue-600 font-bold">
              Situation Mapping
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 mt-2 mb-4 font-heading">
              What's Your Situation?
            </h2>
            <p className="text-base text-slate-600">
              Click your current commercial bottleneck below to jump directly to the proven journey sequence designed to resolve it.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {situationMappings.map((item, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => scrollToJourney(item.journeyId)}
                className="p-6 rounded-3xl bg-slate-50 border border-slate-200 text-left hover:border-blue-400 hover:shadow-lg transition-all cursor-pointer flex flex-col justify-between group"
              >
                <div>
                  <span className="text-[10px] font-mono text-slate-400 uppercase font-bold block mb-1">
                    Constraint // 0{idx + 1}
                  </span>
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-2">
                    {item.situation}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {item.symptom}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200/80">
                  <span className="text-[11px] font-mono uppercase text-blue-600 font-bold block mb-0.5">
                    Recommended Journey:
                  </span>
                  <div className="flex items-center justify-between text-xs font-bold text-slate-900 group-hover:text-blue-700">
                    <span>{item.journeyName}</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 4: JOURNEY COMPARISON (Compact Comparison Table) ── */}
      <section className="py-20 bg-white text-white border-b border-slate-200">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-mono uppercase tracking-wider text-blue-400 font-bold">
              Journey Comparison
            </span>
            <h2 className="text-3xl font-extrabold text-white mt-2 mb-2 font-heading">
              Strategic Journey Matrix
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              Overview of total sequence timelines, risk profiles, and typical entry models.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-slate-50">
            <table className="w-full text-left text-xs text-slate-300">
              <thead className="bg-white text-slate-200 uppercase font-mono text-[11px] border-b border-slate-200">
                <tr>
                  <th className="px-5 py-3.5 font-bold">Journey Pathway</th>
                  <th className="px-5 py-3.5 font-bold">Total Duration</th>
                  <th className="px-5 py-3.5 font-bold">Risk Profile</th>
                  <th className="px-5 py-3.5 font-bold">Typical Entry Model</th>
                  <th className="px-5 py-3.5 font-bold">Primary Advantage</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60">
                <tr className="hover:bg-white/50 transition-colors">
                  <td className="px-5 py-3.5 font-bold text-white whitespace-nowrap">Prove Then Scale</td>
                  <td className="px-5 py-3.5 font-mono text-blue-400">6–12 months</td>
                  <td className="px-5 py-3.5"><span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-bold">Very Low Initial</span></td>
                  <td className="px-5 py-3.5 text-slate-300">Advisory & Insight</td>
                  <td className="px-5 py-3.5 text-slate-400">Fee credited forward toward scale</td>
                </tr>
                <tr className="hover:bg-white/50 transition-colors">
                  <td className="px-5 py-3.5 font-bold text-white whitespace-nowrap">Speed First</td>
                  <td className="px-5 py-3.5 font-mono text-amber-400">6–15 months</td>
                  <td className="px-5 py-3.5"><span className="px-2 py-0.5 rounded bg-amber-500/20 text-amber-400 font-bold">Medium</span></td>
                  <td className="px-5 py-3.5 text-slate-300">Forward Deployed Accelerators</td>
                  <td className="px-5 py-3.5 text-slate-400">Immediate in-quarter revenue impact</td>
                </tr>
                <tr className="hover:bg-white/50 transition-colors">
                  <td className="px-5 py-3.5 font-bold text-white whitespace-nowrap">The Partnership Path</td>
                  <td className="px-5 py-3.5 font-mono text-emerald-400">12–18 months</td>
                  <td className="px-5 py-3.5"><span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-bold">Shared 50/50</span></td>
                  <td className="px-5 py-3.5 text-slate-300">Consulting Services</td>
                  <td className="px-5 py-3.5 text-slate-400">True co-investment & gross margin sharing</td>
                </tr>
                <tr className="hover:bg-white/50 transition-colors">
                  <td className="px-5 py-3.5 font-bold text-white whitespace-nowrap">Capability Build</td>
                  <td className="px-5 py-3.5 font-mono text-cyan-400">8–18 months</td>
                  <td className="px-5 py-3.5"><span className="px-2 py-0.5 rounded bg-blue-500/20 text-blue-400 font-bold">Low-Medium</span></td>
                  <td className="px-5 py-3.5 text-slate-300">Consulting Services</td>
                  <td className="px-5 py-3.5 text-slate-400">Full internal team skill transfer & zero vendor lock-in</td>
                </tr>
                <tr className="hover:bg-white/50 transition-colors">
                  <td className="px-5 py-3.5 font-bold text-white whitespace-nowrap">Transformation with Skin in the Game</td>
                  <td className="px-5 py-3.5 font-mono text-purple-400">12–24 months</td>
                  <td className="px-5 py-3.5"><span className="px-2 py-0.5 rounded bg-rose-500/20 text-rose-400 font-bold">80/20 Gated</span></td>
                  <td className="px-5 py-3.5 text-slate-300">Advisory Diagnostic</td>
                  <td className="px-5 py-3.5 text-slate-400">20% of fees at-risk on adoption metrics</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── SECTION 5: CTA ── */}
      <section className="py-20 bg-slate-50 text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4 font-heading">
            Which Journey Matches Your Ambition?
          </h2>
          <p className="text-slate-300 text-base max-w-2xl mx-auto mb-8">
            Tell us your situation and target timeline. We will recommend the exact model sequence and provide a charter draft within 48 hours.
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
              to="/offerings/commercials"
              className="inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 text-white font-bold px-6 py-3.5 rounded-xl transition-all text-sm border border-white/15"
            >
              <span>View Commercials & Guardrails</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
