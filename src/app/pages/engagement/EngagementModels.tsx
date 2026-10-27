import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Shield,
  ArrowRight,
  Clock,
  UserCheck,
  Cpu,
  Layers,
  TrendingUp,
  DollarSign,
  Users,
  Zap,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Scale,
  Sparkles,
  ArrowUpRight,
  FileCheck,
  Handshake,
  Briefcase,
} from 'lucide-react';

interface SubPackage {
  title: string;
  duration: string;
  focus: string;
}

interface ModelDetail {
  id: string;
  name: string;
  shortName: string;
  stepNum: string;
  tagline: string;
  clientRisk: number;
  pmRisk: number;
  riskDescription: string;
  structure: string;
  commercial: string;
  team: string[];
  deliverables: string[];
  bestFor: string;
  conversionPath: string;
  subPackages: SubPackage[];
}

const modelsData: ModelDetail[] = [
  {
    id: 'advisory-insight',
    name: 'Advisory & Insight Engagements',
    shortName: 'Advisory & Insight',
    stepNum: '01',
    tagline: 'Give us the answer and the confidence to act.',
    clientRisk: 100,
    pmRisk: 0,
    riskDescription: 'Client carries 100% of execution. ProfitMachines carries reputation only.',
    structure: '2–6 week time-boxed sprints, or a quarterly advisory retainer (2–4 sessions per month).',
    commercial: 'Fixed fee per sprint or monthly retainer. 100% client-funded. 30–60 day out-clause on retainers.',
    team: ['Principal / Partner', 'Senior Research Analyst'],
    deliverables: [
      'Diagnostic discovery scorecard across relevant revenue layers',
      'Market & whitespace thesis with empirical profit pool boundaries',
      'Executive decision memo outlining commercial trade-offs',
      'Board-ready narrative for strategic capital allocation'
    ],
    bestFor: 'Pre-decision moments: market entry, M&A go-to-market diligence, pricing strategy shifts, board or investor scrutiny.',
    conversionPath: 'Advisory & Insight → Proof of Value (validate thesis) → Transformation / Outcome-Based',
    subPackages: [
      {
        title: 'Executive Discovery Sprint',
        duration: '2 weeks',
        focus: 'One discovery layer, one high-stakes commercial decision'
      },
      {
        title: 'Board & Investor Revenue Diligence',
        duration: '3–4 weeks',
        focus: 'Forecast defensibility, pipeline quality, GTM health audit'
      },
      {
        title: 'Quarterly Growth Advisory Retainer',
        duration: 'Ongoing',
        focus: 'Recurring strategic counsel + early-warning signals'
      },
      {
        title: 'War-Room Advisory',
        duration: '1–2 weeks',
        focus: 'Rapid response: competitor disruption, pipeline collapse, pricing shock'
      }
    ]
  },
  {
    id: 'consulting-services',
    name: 'Consulting Services',
    shortName: 'Consulting Services',
    stepNum: '02',
    tagline: 'Design the system. Hand us the blueprint.',
    clientRisk: 70,
    pmRisk: 30,
    riskDescription: 'We carry quality of deliverables. Client carries adoption & execution.',
    structure: '4–12 week project-based engagements, phased: Diagnostic → Architecture → Playbook → Enablement.',
    commercial: 'Fixed fee per phase with stage gates. Optional time & materials for open-scope sprints. 100% client-funded.',
    team: ['Engagement Lead', 'Revenue Strategy Consultants', 'RevOps & Pricing Specialist'],
    deliverables: [
      'Comprehensive GTM architecture blueprint',
      'Ideal customer profile (ICP) & micro-segmentation framework',
      'Demand messaging architecture & category narrative system',
      'Sales stage definitions, qualification criteria (MEDDPICC), and coaching system',
      'Channel economics model & territory coverage plan',
      'Enablement curriculum & tech stack matrix'
    ],
    bestFor: 'Organizations with capable in-house teams that lack the strategic method, framework, or bandwidth to design the system.',
    conversionPath: 'Consulting Services → Transformation Engagements (we implement) or Resident Growth Architects (we embed)',
    subPackages: [
      {
        title: 'Revenue Leak Diagnostic',
        duration: '2–3 weeks',
        focus: 'Full funnel teardown + revenue leak scorecard'
      },
      {
        title: 'GTM Architecture Engagement',
        duration: '6–8 weeks',
        focus: 'Segmentation, ICP, motion design, channel mix'
      },
      {
        title: 'Sales System Design',
        duration: '4–6 weeks',
        focus: 'Stages, qualification rigor, forecasting method, coaching system'
      },
      {
        title: 'Demand & Messaging Architecture',
        duration: '4–6 weeks',
        focus: 'Category language, offer engineering, channel allocation'
      },
      {
        title: 'Pricing & Packaging Engagement',
        duration: '4–5 weeks',
        focus: 'Value-to-price alignment, discount governance, tier restructure'
      }
    ]
  },
  {
    id: 'proof-of-value',
    name: 'Proof of Value & Proof of Performance',
    shortName: 'Proof of Value / PoP',
    stepNum: '03',
    tagline: 'Let\'s prove the lift before you scale the bet.',
    clientRisk: 50,
    pmRisk: 50,
    riskDescription: 'Shared validation risk. Client carries small, capped cost with 50%–100% credit applied forward.',
    structure: '4–8 week time-boxed, hypothesis-driven experiment with a pre-agreed success metric.',
    commercial: 'Small fixed fee, 50%–100% creditable against subsequent larger transformation or outcome engagement.',
    team: ['Validation Lead', 'Automation Engineer', 'Revenue Analyst', 'Named Client Counterpart'],
    deliverables: [
      'Empirical baseline instrumentation report',
      'Statistical lift validation vs. control group',
      'Telemetry dashboard tracking live signal conversion',
      'Formal Go / No-Go gate review recommendation'
    ],
    bestFor: 'First-time enterprise buyers, skeptical boards, launching new motions, or validating automation ROI before capital commitment.',
    conversionPath: 'Proof of Value → Transformation Engagements (scale) or Outcome-Based Engagement (performance)',
    subPackages: [
      {
        title: 'Autonomous SDR Proof of Value',
        duration: '6 weeks',
        focus: 'Agentic outbound vs. control on a defined segment'
      },
      {
        title: 'Propensity Model Proof of Value',
        duration: '4–6 weeks',
        focus: 'Scoring lift vs. current lead qualification baseline'
      },
      {
        title: 'Pricing & Offer Proof of Value',
        duration: '4 weeks',
        focus: 'A/B price and packaging test on a live buyer segment'
      },
      {
        title: 'Channel Mix Proof of Value',
        duration: '6 weeks',
        focus: 'Capital reallocation experiment across two demand channels'
      },
      {
        title: 'Forecast Accuracy Proof of Performance',
        duration: '8 weeks',
        focus: 'Algorithmic forecast vs. rep commit on a live quarter'
      },
      {
        title: 'Deal Velocity Proof of Performance',
        duration: '8 weeks',
        focus: 'Stage-slip intervention measured on sales cycle time'
      }
    ]
  },
  {
    id: 'transformation-engagements',
    name: 'Transformation Engagements',
    shortName: 'Transformation',
    stepNum: '04',
    tagline: 'Install a revenue operating system across the GTM organization.',
    clientRisk: 80,
    pmRisk: 20,
    riskDescription: 'Client 80% / ProfitMachines 20% (at-risk on team adoption and execution KPIs).',
    structure: '4–9 month comprehensive programs, phased: Discover → Architect → Build → Deploy → Enable → Transfer.',
    commercial: 'Milestone-based fixed fees (20% kickoff / 30% design / 30% deployment / 20% transfer & adoption). 20% at-risk against adoption KPIs.',
    team: ['Program Director', 'Workstream Leads', 'Automation Engineers', 'Enablement Specialists'],
    deliverables: [
      'Complete 7-layer discovery stack diagnostic and architecture',
      'Unified revenue operating system deployed into production',
      'Agentic automation and telemetry layer running live',
      'Trained sales teams with certified manager coaching',
      'Full intellectual property transfer of code, prompts, and playbooks'
    ],
    bestFor: 'Companies with executive mandate and budget needing structural transformation (e.g., post-funding, new CRO/CGO, post-M&A integration).',
    conversionPath: 'Transformation Engagements → Outcome-Based Engagement (operate) or Resident Growth Architects (sustain)',
    subPackages: [
      {
        title: 'Revenue OS Transformation',
        duration: '6–9 months',
        focus: 'Full 7-layer discovery + automation + team enablement'
      },
      {
        title: 'Enterprise Motion Transformation',
        duration: '4–6 months',
        focus: 'Upmarket GTM rebuild: segmentation, value engineering, deal intelligence'
      },
      {
        title: 'Demand Engine Transformation',
        duration: '4–6 months',
        focus: 'Inbound, outbound, and ABM rebuild with agentic layer'
      },
      {
        title: 'Post-M&A GTM Integration',
        duration: '5–7 months',
        focus: 'Territory, stack, messaging, and sales coverage consolidation'
      },
      {
        title: 'PLG to Sales-Assist Transformation',
        duration: '4–5 months',
        focus: 'Hybrid motion design + product conversion telemetry'
      }
    ]
  },
  {
    id: 'outcome-based',
    name: 'Outcome-Based Engagement',
    shortName: 'Outcome-Based',
    stepNum: '05',
    tagline: 'We get paid when the metric moves.',
    clientRisk: 40,
    pmRisk: 60,
    riskDescription: 'ProfitMachines carries primary delivery risk. Base fee is deeply discounted in exchange for verified upside.',
    structure: '6–12 month engagement: lower base fee + success fee tied to a verified business metric.',
    commercial: 'Base fee (40–60% of standard rate) + success fee (1.5–3× base, paid against verified movement). Governed by Outcome Charter.',
    team: ['Full Delivery Pod', 'Dedicated Revenue Analyst', 'Independent Performance Auditor'],
    deliverables: [
      'Targeted revenue architecture and automation deployment',
      'Pre-kickoff baseline freeze and attribution instrumentation',
      'Verified movement in pipeline $, CAC reduction, win-rate lift, or forecast accuracy',
      'Monthly operational telemetry review and quarterly true-up readout'
    ],
    bestFor: 'Metric-driven executive cultures, PE-backed portfolio companies, and operators demanding economic alignment.',
    conversionPath: 'Outcome-Based Engagement → Joint Risk-Sharing (deepen) or Capability Transfer (internalize)',
    subPackages: [
      {
        title: 'Pipeline Generation Outcome',
        duration: '6–12 months',
        focus: 'Committed qualified pipeline $ generated per quarter'
      },
      {
        title: 'CAC Efficiency Outcome',
        duration: '6–12 months',
        focus: 'Verified CAC reduction and LTV:CAC ratio improvement'
      },
      {
        title: 'Win-Rate & Deal Velocity Outcome',
        duration: '6–9 months',
        focus: 'Statistically verified lift in win rate + compressed cycle time'
      },
      {
        title: 'Forecast Accuracy Outcome',
        duration: '6–12 months',
        focus: 'Variance reduction between commit and actual bookings'
      },
      {
        title: 'Expansion Revenue Outcome',
        duration: '6–12 months',
        focus: 'Net Revenue Retention (NRR) and installed-base cross-sell'
      }
    ]
  },
  {
    id: 'joint-risk-sharing',
    name: 'Joint Risk-Sharing Partnership',
    shortName: 'Risk-Sharing',
    stepNum: '06',
    tagline: 'We co-invest. We share the upside. We share the downside.',
    clientRisk: 50,
    pmRisk: 50,
    riskDescription: 'True ~50/50 economic coupling under a joint business plan with shared P&L economics.',
    structure: '9–18 month strategic partnership under a joint business plan with shared P&L economics.',
    commercial: 'Cost-recovery base + variable share (15–30% of incremental gross margin above baseline) + gain-share multipliers.',
    team: ['Joint Executive Steering Committee', 'Dedicated Embedded Pod', 'Principal / Partner Oversight'],
    deliverables: [
      'Co-investment in building category-defining demand engine',
      'Shared commercial governance board (bi-weekly steering)',
      'Jointly owned pipeline and customer acquisition infrastructure',
      'Audited quarterly gross margin reconciliation and profit distribution'
    ],
    bestFor: 'Category-defining bets, new market creation, platform launches, and turnaround situations too large for a fee.',
    conversionPath: 'Joint Risk-Sharing → Long-Term Commercial Joint Venture or Full Capability Buyout',
    subPackages: [
      {
        title: 'New Market Creation Partnership',
        duration: '12–18 months',
        focus: 'Co-invest in building a new category or geography demand engine'
      },
      {
        title: 'Product Launch Revenue Partnership',
        duration: '9–12 months',
        focus: 'Direct revenue share on a new product or service line'
      },
      {
        title: 'Channel & Ecosystem Partnership',
        duration: '12–18 months',
        focus: 'Co-sell distribution engine with shared pipeline economics'
      },
      {
        title: 'Turnaround Partnership',
        duration: '9–12 months',
        focus: 'Distressed pipeline turnaround with contingent recovery economics'
      },
      {
        title: 'Growth Equity Portfolio Partnership',
        duration: '12–18 months',
        focus: 'Multi-company platform rollout under one shared framework'
      }
    ]
  },
  {
    id: 'resident-growth-architects',
    name: 'Resident Growth Architects',
    shortName: 'Resident Architects',
    stepNum: '07',
    tagline: 'Our expert sits inside your org and builds with your team.',
    clientRisk: 70,
    pmRisk: 30,
    riskDescription: 'Client carries 70% / ProfitMachines carries 30% (tied to workstream execution velocity).',
    structure: '6–18 month embedded assignment (3 days/week to full-time) with full backbench support from ProfitMachines.',
    commercial: 'Monthly embedded rate with quarterly commitment. 70% guaranteed base / 30% tied to workstream KPIs.',
    team: ['Resident Growth Architect (Senior, 8–15 yrs exp)', 'Part-Time Automation Engineer', 'Quarterly Principal Review'],
    deliverables: [
      'End-to-end ownership of designated revenue workstream',
      'Live execution alongside internal managers and reps',
      'Custom playbook authoring and workflow automation deployment',
      'Structured capability transfer ensuring internal team autonomy'
    ],
    bestFor: 'Organizations needing senior revenue leadership and hands-on execution without adding permanent executive headcount.',
    conversionPath: 'Resident Growth Architects → Advisory & Insight (ongoing counsel once team runs it independently)',
    subPackages: [
      {
        title: 'Demand & Pipeline Architect',
        duration: '6–12 months',
        focus: 'Demand architecture, outbound agent fleets, pipeline telemetry'
      },
      {
        title: 'Sales System Architect',
        duration: '6–12 months',
        focus: 'Stage design, qualification rigor, forecasting, manager coaching'
      },
      {
        title: 'Revenue Intelligence Architect',
        duration: '6–12 months',
        focus: 'Data mesh, attribution pipelines, deal intelligence engines'
      },
      {
        title: 'Pricing & Packaging Architect',
        duration: '6–9 months',
        focus: 'Offer architecture, value metrics, discount governance'
      },
      {
        title: 'Growth Architecture Pod',
        duration: '12–18 months',
        focus: '2–3 RGAs covering multiple workstreams at enterprise scale'
      }
    ]
  },
  {
    id: 'forward-deployed-accelerators',
    name: 'Forward Deployed Sales Accelerators',
    shortName: 'Forward Deployed',
    stepNum: '08',
    tagline: 'We are in the field, in the deals, driving measurable pipeline this quarter.',
    clientRisk: 30,
    pmRisk: 70,
    riskDescription: 'ProfitMachines carries execution risk. Forward-deployed operators carry quotas alongside your reps.',
    structure: '3–6 month forward deployments. Experienced operators run live sales motions in-market alongside your team.',
    commercial: 'Monthly deployment fee + performance accelerators per verified meeting, SQL, pipeline $, or closed deal.',
    team: ['1–3 Forward Deployed Operators (Quota-carrying experience)', 'Enablement Lead', 'Automation Engine Pod'],
    deliverables: [
      'Live multi-channel outbound execution and pipeline generation',
      'Real-time ICP validation and objection capture from live buyer calls',
      'Dynamic deal room construction for active high-stakes deals',
      'Competitive displacement plays executed directly against incumbents'
    ],
    bestFor: 'Urgent pipeline droughts, validating new motions before hiring, augmenting rep ramp lag, and entering competitive segments.',
    conversionPath: 'Forward Deployed Accelerators → Resident Growth Architects (embed long-term) or Transformation Engagements',
    subPackages: [
      {
        title: 'New Market Entry Squad',
        duration: '3–6 months',
        focus: 'Validate ICP & demand in a new geography or vertical'
      },
      {
        title: 'Pipeline Rescue Squad',
        duration: '3 months',
        focus: 'Immediate qualified pipeline generation during drought'
      },
      {
        title: 'Enterprise Deal Acceleration Squad',
        duration: '4–6 months',
        focus: 'Forward-deployed deal coaches on named strategic accounts'
      },
      {
        title: 'Rep Ramp Augmentation Squad',
        duration: '3–4 months',
        focus: 'Productivity bridge during sales hiring and onboarding lag'
      },
      {
        title: 'Competitive Displacement Squad',
        duration: '3–6 months',
        focus: 'Targeted win-back campaigns and incumbent displacement plays'
      },
      {
        title: 'Product Launch Go-To-Market Squad',
        duration: '3–4 months',
        focus: 'First-wave customer acquisition and market response'
      }
    ]
  }
];

const questionsData = [
  {
    q: 'Is the organization in a pre-decision state, needing clarity before committing capital?',
    a: 'Start with Advisory & Insight Engagements. Speed of clarity is the product. We deliver an empirical decision memo and market thesis within 2–4 weeks.'
  },
  {
    q: 'Is the primary requirement structural design with an in-house team to execute?',
    a: 'Start with Consulting Services. We design the blueprints, playbooks, and qualification systems; your team executes them.'
  },
  {
    q: 'Is there board skepticism, a first-time bet, or a need for proof before scaling?',
    a: 'Start with Proof of Value & Proof of Performance. Time-boxed 4–8 week experiment with a pre-agreed success gate. 50–100% of the fee credits forward.'
  },
  {
    q: 'Is there an executive mandate and budget for multi-workstream organizational change?',
    a: 'Start with Transformation Engagements. Comprehensive 4–9 month milestone-gated programs with 20% of fees at-risk against adoption KPIs.'
  },
  {
    q: 'Is the leadership team unwilling to pay full consulting fees without performance assurance?',
    a: 'Start with Outcome-Based Engagements. A reduced base fee coupled with a success fee paid only when committed pipeline or CAC metrics are verified.'
  },
  {
    q: 'Is the market opportunity large enough to justify co-investment and shared upside?',
    a: 'Start with Joint Risk-Sharing Partnerships. We co-invest reduced fees in exchange for a defined share of incremental gross margin above baseline.'
  },
  {
    q: 'Does the company need senior growth leadership embedded inside without making a full-time hire?',
    a: 'Start with Resident Growth Architects. An experienced operator works directly inside your team, building the system and transferring capability.'
  },
  {
    q: 'Is there an urgent need for live qualified pipeline and closed deals this quarter?',
    a: 'Start with Forward Deployed Sales Accelerators. Operators deploy into the field this week, running outbound and advancing deals alongside your reps.'
  }
];

export default function EngagementModels() {
  const [activeModelId, setActiveModelId] = useState<string>('advisory-insight');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useState(() => {
    // Initial title
    document.title = 'The Engagement Continuum: Eight Ways to Partner | ProfitMachines';
  });

  // Handle hash changes for sub-menu smooth navigation
  useEffect(() => {
    const handleHash = () => {
      const rawHash = window.location.hash.replace('#', '').toLowerCase();
      const hashToModelId: Record<string, string> = {
        'advisory': 'advisory-insight',
        'advisory-insight': 'advisory-insight',
        'consulting': 'consulting-services',
        'consulting-services': 'consulting-services',
        'pov-pop': 'proof-of-value',
        'proof-of-value': 'proof-of-value',
        'transformation': 'transformation-engagements',
        'transformation-engagements': 'transformation-engagements',
        'outcome': 'outcome-based',
        'outcome-based': 'outcome-based',
        'risk-sharing': 'joint-risk-sharing',
        'joint-risk-sharing': 'joint-risk-sharing',
        'rga': 'resident-growth-architects',
        'resident-growth-architects': 'resident-growth-architects',
        'fda': 'forward-deployed-accelerators',
        'forward-deployed-accelerators': 'forward-deployed-accelerators',
      };
      if (rawHash && hashToModelId[rawHash]) {
        setActiveModelId(hashToModelId[rawHash]);
        setTimeout(() => {
          const el = document.getElementById('active-model-dossier') || document.getElementById('continuum-spectrum');
          if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      }
    };
    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans pt-16 lg:pt-[72px]">
      {/* ── SECTION 1: HERO SECTION (70vh, Dark Background, Strategic Horizon) ── */}
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
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-cyan-600/15 rounded-full blur-[140px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-600/15 rounded-full blur-[140px] pointer-events-none" />
        </div>

        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-blue-700 text-xs font-mono font-bold tracking-wider uppercase mb-6 shadow-sm">
              <Shield className="w-3.5 h-3.5" />
              <span>HOW WE PARTNER // RISK-COUPLED MODELS</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.08] mb-6 font-heading">
              One Continuum.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
                Eight Ways to Buy Certainty.
              </span>
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-slate-600 leading-relaxed font-normal mb-8 max-w-2xl">
              Every ProfitMachines engagement sits on a single risk-and-commitment continuum. The right model is not a matter of budget size. It is a matter of how much evidence, urgency, and shared downside your situation demands.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#continuum-spectrum"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold px-7 py-3.5 rounded-xl transition-all shadow-lg shadow-blue-600/30 text-sm group"
              >
                <span>Explore the Spectrum</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="#comparison-table"
                className="inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 text-white font-bold px-6 py-3.5 rounded-xl transition-all text-sm border border-white/15"
              >
                <span>View Comparison Table</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 2: THE CONTINUUM SPECTRUM (Signature Interactive Component - Fixed in Page, No Sliding) ── */}
      <section id="continuum-spectrum" className="py-12 bg-slate-900 border-b border-slate-800">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between text-xs font-mono font-bold uppercase tracking-wider text-slate-400 mb-4 px-2">
            <span className="flex items-center gap-2 text-blue-400">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-500" />
              Low Commitment · Low Risk-Share
            </span>
            <span className="flex items-center gap-2 text-emerald-400">
              High Commitment · High Risk-Share
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
            </span>
          </div>

          {/* 8 Circular Nodes along Responsive Grid Spectrum Bar - Fixed In-Place, No Sliding */}
          <div className="bg-slate-950 p-2.5 sm:p-3 rounded-2xl border border-slate-800 shadow-inner">
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2">
              {modelsData.map((m) => {
                const isSelected = m.id === activeModelId;
                return (
                  <button
                    key={m.id}
                    type="button"
                    onClick={() => setActiveModelId(m.id)}
                    className={`py-2.5 px-2.5 rounded-xl text-left transition-all cursor-pointer border relative group flex flex-col justify-between ${
                      isSelected
                        ? 'bg-blue-600 text-white border-blue-400 shadow-lg shadow-blue-600/30 ring-1 ring-blue-400'
                        : 'bg-slate-900/80 text-slate-300 border-slate-800 hover:bg-slate-800 hover:text-white hover:border-slate-700'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-[10px] font-mono font-bold text-slate-400 group-hover:text-slate-200">
                        {m.stepNum}
                      </span>
                      <span
                        className={`w-1.5 h-1.5 rounded-full ${
                          isSelected ? 'bg-white' : 'bg-slate-600 group-hover:bg-blue-400'
                        }`}
                      />
                    </div>
                    <span className="text-[11px] sm:text-xs font-bold block truncate leading-tight">
                      {m.shortName}
                    </span>
                    <span className="text-[9px] sm:text-[10px] text-slate-400 block truncate mt-1 opacity-80 font-mono">
                      Client {m.clientRisk}% / PM {m.pmRisk}%
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 3: ACTIVE MODEL DOSSIER (Fixed In-Place, Updates On Click, No Page Sliding) ── */}
      {(() => {
        const model = modelsData.find((m) => m.id === activeModelId) || modelsData[0];
        return (
          <section id="active-model-dossier" className="py-16 lg:py-24 bg-white border-b border-slate-200">
            <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
                
                {/* LEFT COLUMN (40%): Model, Tagline, Risk Split Bars, Structure, Commercial */}
                <div className="lg:col-span-5">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 border border-blue-200/80 text-blue-700 text-xs font-mono font-bold uppercase mb-4">
                    <span>Model {model.stepNum} // Spectrum Stage</span>
                  </div>

                  <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-3 font-heading">
                    {model.name}
                  </h2>

                  <p className="text-base sm:text-lg text-blue-600 font-medium italic mb-8">
                    &ldquo;{model.tagline}&rdquo;
                  </p>

                  {/* Risk Allocation Visual (Two Horizontal Bars) */}
                  <div className="p-5 rounded-2xl bg-slate-900/90 text-white border border-slate-800 shadow-xl mb-6 backdrop-blur-xl">
                    <span className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold block mb-3">
                      Risk Allocation Visual
                    </span>

                    <div className="space-y-3">
                      {/* Client Risk Bar */}
                      <div>
                        <div className="flex justify-between text-xs font-semibold mb-1">
                          <span className="text-slate-300">Client Risk Share</span>
                          <span className="font-mono text-cyan-400">{model.clientRisk}%</span>
                        </div>
                        <div className="w-full h-2.5 bg-slate-800 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-cyan-400 rounded-full transition-all duration-300"
                            style={{ width: `${model.clientRisk}%` }}
                          />
                        </div>
                      </div>

                      {/* PM Risk Bar */}
                      <div>
                        <div className="flex justify-between text-xs font-semibold mb-1">
                          <span className="text-slate-300">ProfitMachines Risk Share</span>
                          <span className="font-mono text-emerald-400">{model.pmRisk}%</span>
                        </div>
                        <div className="w-full h-2.5 bg-slate-800 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-emerald-500 rounded-full transition-all duration-300"
                            style={{ width: `${model.pmRisk}%` }}
                          />
                        </div>
                      </div>
                    </div>

                    <p className="text-[11px] text-slate-400 mt-4 leading-relaxed border-t border-slate-800 pt-3">
                      {model.riskDescription}
                    </p>
                  </div>

                  {/* Structure & Commercial */}
                  <div className="space-y-3">
                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                      <span className="text-xs font-mono uppercase text-slate-400 font-bold block mb-1">
                        Structure & Duration
                      </span>
                      <p className="text-xs sm:text-sm text-slate-800 leading-snug font-medium">
                        {model.structure}
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                      <span className="text-xs font-mono uppercase text-slate-400 font-bold block mb-1">
                        Commercial Terms
                      </span>
                      <p className="text-xs sm:text-sm text-slate-800 leading-snug font-medium">
                        {model.commercial}
                      </p>
                    </div>
                  </div>
                </div>

                {/* RIGHT COLUMN (60%): Staffing, Deliverables, Best For, Conversion Path, Sub-Packages */}
                <div className="lg:col-span-7 space-y-6">
                  {/* Who Staffs It */}
                  <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm">
                    <span className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold block mb-3">
                      Who Staffs It
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {model.team.map((role, rIdx) => (
                        <span
                          key={rIdx}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200 text-xs font-bold text-slate-800"
                        >
                          <Users className="w-3.5 h-3.5 text-cyan-400" />
                          {role}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* What You Receive */}
                  <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm">
                    <span className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold block mb-3">
                      What You Receive (Deliverables)
                    </span>
                    <div className="space-y-2">
                      {model.deliverables.map((del, dIdx) => (
                        <div key={dIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{del}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Best For & Conversion Path */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
                      <span className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold block mb-1">
                        Best For
                      </span>
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-medium">
                        {model.bestFor}
                      </p>
                    </div>

                    <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
                      <span className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold block mb-1">
                        Conversion Path
                      </span>
                      <p className="text-xs sm:text-sm text-cyan-400 leading-relaxed font-semibold">
                        {model.conversionPath}
                      </p>
                    </div>
                  </div>

                  {/* Sub-Packages Compact Table */}
                  <div className="p-6 rounded-2xl bg-slate-900/90 text-white border border-slate-800 backdrop-blur-xl shadow-xl">
                    <span className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold block mb-3">
                      Sub-Packages & Variants
                    </span>

                    <div className="overflow-x-auto">
                      <table className="w-full text-left text-xs">
                        <thead className="text-[11px] font-mono text-slate-400 border-b border-slate-800 uppercase">
                          <tr>
                            <th className="pb-2 font-bold">Sub-Package</th>
                            <th className="pb-2 font-bold">Duration</th>
                            <th className="pb-2 font-bold">Strategic Focus</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-800/60 text-slate-300">
                          {model.subPackages.map((pkg, pIdx) => (
                            <tr key={pIdx}>
                              <td className="py-2.5 font-bold text-white whitespace-nowrap pr-4">
                                {pkg.title}
                              </td>
                              <td className="py-2.5 font-mono text-cyan-300 pr-4 whitespace-nowrap">
                                {pkg.duration}
                              </td>
                              <td className="py-2.5 text-slate-400">
                                {pkg.focus}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Action Bar */}
                  <div className="pt-2 flex flex-wrap items-center justify-between gap-4">
                    <a
                      href="#comparison-table"
                      className="text-xs font-bold text-blue-600 hover:text-blue-700 inline-flex items-center gap-1.5 font-mono uppercase tracking-wider"
                    >
                      <span>Compare all 8 models in full matrix below ↓</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>

                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-2 bg-slate-900 hover:bg-blue-600 text-white font-bold px-5 py-2.5 rounded-xl transition-all text-xs shadow-md shadow-cyan-500/20 font-mono uppercase tracking-wider"
                    >
                      <span>Scoping Memo for {model.shortName}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>

              </div>
            </div>
          </section>
        );
      })()}

      {/* ── SECTION 4: MODEL COMPARISON TABLE ── */}
      <section id="comparison-table" className="py-20 lg:py-28 bg-slate-50/70 border-b border-slate-200 text-slate-900">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono uppercase tracking-wider text-blue-400 font-bold">
              Comparative Analysis
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 mt-2 mb-4 font-heading">
              Model Comparison Matrix
            </h2>
            <p className="text-base text-slate-400">
              Evaluate speed to start, time to measurable impact, risk splits, and typical commitment scale across all eight engagement models.
            </p>
          </div>

          <div className="overflow-x-auto rounded-3xl border border-slate-200 bg-white shadow-xl">
            <table className="w-full text-left text-xs sm:text-sm text-slate-300">
              <thead className="bg-slate-900 text-slate-200 uppercase font-mono text-xs border-b border-slate-800 sticky top-0">
                <tr>
                  <th scope="col" className="px-6 py-4 font-bold">Model</th>
                  <th scope="col" className="px-6 py-4 font-bold">Speed to Start</th>
                  <th scope="col" className="px-6 py-4 font-bold">Speed to Impact</th>
                  <th scope="col" className="px-6 py-4 font-bold">Client Risk</th>
                  <th scope="col" className="px-6 py-4 font-bold">ProfitMachines Risk</th>
                  <th scope="col" className="px-6 py-4 font-bold">Typical Scale</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60">
                <tr className="hover:bg-slate-900/60 transition-colors">
                  <td className="px-6 py-4 font-bold text-white whitespace-nowrap">Advisory & Insight</td>
                  <td className="px-6 py-4 font-mono text-emerald-400">Immediate</td>
                  <td className="px-6 py-4 text-slate-400">Slow (Decision clarity)</td>
                  <td className="px-6 py-4"><span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-bold text-xs">Low</span></td>
                  <td className="px-6 py-4"><span className="px-2 py-0.5 rounded bg-slate-800 text-slate-400 font-bold text-xs">Very Low</span></td>
                  <td className="px-6 py-4 font-mono text-slate-300">$</td>
                </tr>
                <tr className="hover:bg-slate-900/60 transition-colors">
                  <td className="px-6 py-4 font-bold text-white whitespace-nowrap">Consulting Services</td>
                  <td className="px-6 py-4 font-mono text-slate-300">1–2 weeks</td>
                  <td className="px-6 py-4 text-slate-400">Medium (Phased adoption)</td>
                  <td className="px-6 py-4"><span className="px-2 py-0.5 rounded bg-amber-500/20 text-amber-400 font-bold text-xs">Medium</span></td>
                  <td className="px-6 py-4"><span className="px-2 py-0.5 rounded bg-slate-800 text-slate-400 font-bold text-xs">Low</span></td>
                  <td className="px-6 py-4 font-mono text-slate-300">$$</td>
                </tr>
                <tr className="hover:bg-slate-900/60 transition-colors">
                  <td className="px-6 py-4 font-bold text-white whitespace-nowrap">Proof of Value & Performance</td>
                  <td className="px-6 py-4 font-mono text-emerald-400">2 weeks</td>
                  <td className="px-6 py-4 text-emerald-400 font-semibold">Fast (4–8 wks)</td>
                  <td className="px-6 py-4"><span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-bold text-xs">Very Low</span></td>
                  <td className="px-6 py-4"><span className="px-2 py-0.5 rounded bg-amber-500/20 text-amber-400 font-bold text-xs">Medium</span></td>
                  <td className="px-6 py-4 font-mono text-cyan-400 font-bold">100% Credited</td>
                </tr>
                <tr className="hover:bg-slate-900/60 transition-colors">
                  <td className="px-6 py-4 font-bold text-white whitespace-nowrap">Transformation Engagements</td>
                  <td className="px-6 py-4 font-mono text-slate-300">3–4 weeks</td>
                  <td className="px-6 py-4 text-slate-400">Phased (Months)</td>
                  <td className="px-6 py-4"><span className="px-2 py-0.5 rounded bg-rose-500/20 text-rose-400 font-bold text-xs">Medium-High</span></td>
                  <td className="px-6 py-4"><span className="px-2 py-0.5 rounded bg-amber-500/20 text-amber-400 font-bold text-xs">Medium (20% at-risk)</span></td>
                  <td className="px-6 py-4 font-mono text-slate-300">$$$</td>
                </tr>
                <tr className="hover:bg-slate-900/60 transition-colors">
                  <td className="px-6 py-4 font-bold text-white whitespace-nowrap">Outcome-Based Engagement</td>
                  <td className="px-6 py-4 font-mono text-slate-300">2–3 weeks</td>
                  <td className="px-6 py-4 text-slate-300">Medium (Cycles)</td>
                  <td className="px-6 py-4"><span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-bold text-xs">Low (Base only)</span></td>
                  <td className="px-6 py-4"><span className="px-2 py-0.5 rounded bg-rose-500/20 text-rose-400 font-bold text-xs">High</span></td>
                  <td className="px-6 py-4 font-mono text-slate-300">$$ + Upside</td>
                </tr>
                <tr className="hover:bg-slate-900/60 transition-colors">
                  <td className="px-6 py-4 font-bold text-white whitespace-nowrap">Joint Risk-Sharing Partnership</td>
                  <td className="px-6 py-4 font-mono text-slate-300">4–6 weeks</td>
                  <td className="px-6 py-4 text-slate-400">Strategic (9–18 mo)</td>
                  <td className="px-6 py-4"><span className="px-2 py-0.5 rounded bg-amber-500/20 text-amber-400 font-bold text-xs">Medium</span></td>
                  <td className="px-6 py-4"><span className="px-2 py-0.5 rounded bg-rose-500/20 text-rose-400 font-bold text-xs">High (P&L Co-invest)</span></td>
                  <td className="px-6 py-4 font-mono text-slate-300">$ + Gain-share</td>
                </tr>
                <tr className="hover:bg-slate-900/60 transition-colors">
                  <td className="px-6 py-4 font-bold text-white whitespace-nowrap">Resident Growth Architects</td>
                  <td className="px-6 py-4 font-mono text-emerald-400">2 weeks</td>
                  <td className="px-6 py-4 text-slate-300">Medium (Continuous)</td>
                  <td className="px-6 py-4"><span className="px-2 py-0.5 rounded bg-amber-500/20 text-amber-400 font-bold text-xs">Medium</span></td>
                  <td className="px-6 py-4"><span className="px-2 py-0.5 rounded bg-amber-500/20 text-amber-400 font-bold text-xs">Medium (30% at-risk)</span></td>
                  <td className="px-6 py-4 font-mono text-slate-300">$$ (Monthly)</td>
                </tr>
                <tr className="hover:bg-slate-900/60 transition-colors">
                  <td className="px-6 py-4 font-bold text-white whitespace-nowrap">Forward Deployed Sales Accelerators</td>
                  <td className="px-6 py-4 font-mono text-emerald-400">1–2 weeks</td>
                  <td className="px-6 py-4 text-emerald-400 font-semibold">Very Fast (In-quarter)</td>
                  <td className="px-6 py-4"><span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-bold text-xs">Low</span></td>
                  <td className="px-6 py-4"><span className="px-2 py-0.5 rounded bg-rose-500/20 text-rose-400 font-bold text-xs">High (Quota-bearing)</span></td>
                  <td className="px-6 py-4 font-mono text-slate-300">$$ + Accelerators</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── SECTION 5: EIGHT QUESTIONS SELECTOR (FAQ Accordion) ── */}
      <section className="py-20 lg:py-28 bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold">
              Decision Guidance
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2 mb-4 font-heading">
              Not Sure Which Model Fits?
            </h2>
            <p className="text-base text-slate-300">
              Answer the question that matches your executive state to determine the recommended model sequence.
            </p>
          </div>

          <div className="space-y-4">
            {questionsData.map((item, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-slate-200 bg-slate-50 overflow-hidden transition-all"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 font-bold text-slate-900 hover:text-blue-600 transition-colors"
                  >
                    <span className="text-sm sm:text-base leading-snug">{item.q}</span>
                    {isOpen ? (
                      <ChevronUp className="w-5 h-5 text-cyan-400 shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />
                    )}
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 pt-2 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-200 bg-white">
                      {item.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── SECTION 6: DUAL CTA ── */}
      <section className="py-20 bg-white text-slate-900 text-center border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4 font-heading">
            Ready to Find Your Engagement Model?
          </h2>
          <p className="text-slate-300 text-base max-w-2xl mx-auto mb-8">
            Tell us your situation and urgency. Our architecture team will configure the exact model, discovery nodes, and pre-signature charter within 48 hours.
          </p>
          <div className="flex flex-wrap justify-center items-center gap-4">
            <Link
              to="/book-consultation"
              className="inline-flex items-center gap-2 bg-slate-900 hover:bg-blue-600 text-white font-bold px-7 py-3.5 rounded-xl transition-all hover:-translate-y-0.5 shadow-lg shadow-slate-900/10 text-sm font-mono uppercase tracking-wider group"
            >
              <span>Schedule Architecture Consultation</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/origin"
              className="inline-flex items-center gap-2 border border-slate-200 bg-white hover:bg-slate-50 text-slate-800 font-bold px-6 py-3.5 rounded-xl text-sm shadow-xs transition-all font-mono uppercase tracking-wider"
            >
              <span>Explore ORIGIN Framework</span>
              <ArrowRight className="w-3.5 h-3.5 text-cyan-400" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
