import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ShieldCheck,
  Briefcase,
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
  Clock
} from 'lucide-react';
import IndustryIntakeForm from '../../components/forms/IndustryIntakeForm';

export default function ServicesIndustry() {
  const [activeDomain, setActiveDomain] = useState<number>(0);

  const metrics = [
    {
      num: '40–60%',
      title: 'Pipeline Velocity Acceleration',
      context: 'Verified across specialized professional services firms and multi-stakeholder consulting engagements.'
    },
    {
      num: '35%',
      title: 'Customer Acquisition Cost Reduction',
      context: 'Achieved through autonomous account research, intent routing, and micro-segment margin prioritization.'
    },
    {
      num: '98%',
      title: 'Forecast Accuracy Alignment',
      context: 'Immutable telemetry bridging the gap between partner pipeline conjecture and actual billable bookings.'
    },
    {
      num: '3.8x',
      title: 'Meeting Velocity Lift',
      context: 'Sub-second inbound routing and research-grounded outbound messaging to enterprise decision makers.'
    }
  ];

  const failureModes = [
    {
      num: '01',
      title: 'Scope Creep & Gross Margin Erosion',
      impact: 'Unbilled out-of-scope work, fee compression, and project gross margins deteriorating below 30%.',
      whyGenericFails: 'Standard services firms lack algorithmic scope-change tracking and rigid discount governance, leaving partners to negotiate concessions without margin telemetry.'
    },
    {
      num: '02',
      title: 'The Founder-Led Sales Trap & Pipeline Drought',
      impact: 'Feast-or-famine quarterly billings, executive burnout, and inability to build enterprise enterprise enterprise valuation beyond key person dependencies.',
      whyGenericFails: 'Outsourced SDR agencies deploy junior telemarketers and canned email spam that alienate C-suite buyers and damage firm prestige.'
    },
    {
      num: '03',
      title: 'Delivery Capacity & Pipeline Mismatches',
      impact: 'Bench burn during demand troughs and delivery quality collapses when major multi-workstream mandates close simultaneously.',
      whyGenericFails: 'Traditional CRM pipelines fail to link live sales stage progression to billable staff utilization calendars in real time.'
    },
    {
      num: '04',
      title: 'Commoditization & Offshore Price Undercutting',
      impact: 'Trapped in brutal time-and-materials rate card RFPs against global low-cost offshore IT outsourcing conglomerates.',
      whyGenericFails: 'Generic marketing agencies emphasize billable hours rather than productized IP, executive business cases, and proprietary methodologies.'
    }
  ];

  const solutions = [
    {
      num: '01',
      title: 'Micro-Segment Margin Mapping & Offer Packaging',
      architecture: 'Algorithmic gross-margin analysis per client cohort, productized fixed-scope packaging, and automated discount governance guardrails.',
      outcome: 'Protected 55%+ project gross margins and complete elimination of unbilled scope creep across engagements.'
    },
    {
      num: '02',
      title: 'Autonomous Demand Orchestration & SDR Fleet',
      architecture: 'Multi-agent outbound orchestration, dynamic executive messaging meshes, and verified account research engines tailored to professional services.',
      outcome: '3.8x lift in qualified executive meetings without requiring partner or practice leader manual outbound hours.'
    },
    {
      num: '03',
      title: 'Predictive Utilization & Pipeline Synchronization',
      architecture: 'Stochastic deal-closure modeling connected directly to bench allocation telemetry and capacity forecasting engines.',
      outcome: 'Eliminated idle bench waste, sustaining 85%+ billable staff utilization throughout all market cycles.'
    },
    {
      num: '04',
      title: 'Institutional Value Studio & Proprietary IP Moats',
      architecture: 'Pre-purchase proof architecture, buyer CFO justification frameworks, and proprietary diagnostic audit suites.',
      outcome: 'Commands 2.5x higher hourly-equivalent fees through fixed-price productized transformation packages.'
    }
  ];

  const capabilityDomains = [
    {
      name: 'Market & Whitespace Discovery',
      subtitle: 'Mapping untapped high-margin services whitespace and institutional buyers.',
      capA: {
        title: 'B2B Services Whitespace Mapping',
        features: ['TAM & service margin breakdown', 'Competitor rate teardown', 'Whitespace opportunity scoring']
      },
      capB: {
        title: 'Account Propensity Scoring',
        features: ['Budget readiness detection', 'Contract renewal timing', 'Executive buying signals']
      }
    },
    {
      name: 'Demand & Pipeline Generation',
      subtitle: 'Hardware-to-human pipeline design for high-velocity revenue environments.',
      capA: {
        title: 'Autonomous Outbound Orchestration',
        features: ['Hyper-personalized sequencing', 'Real-time intent triggering', 'Automated objection handling']
      },
      capB: {
        title: 'Sub-Second Signal Routing',
        features: ['Behavioral scoring', 'Instant partner notification', 'Automated qualification & booking']
      }
    },
    {
      name: 'Value & Deal Execution',
      subtitle: 'Engineering undeniable business cases and institutionalizing MEDDPICC rigor.',
      capA: {
        title: 'Executive Business Case Studio',
        features: ['CFO-level payback modeling', 'Client ROI calculators', 'Fiduciary proof dossiers']
      },
      capB: {
        title: 'Deal Intelligence Engine',
        features: ['Win-probability scoring', 'Buying-committee gap alerts', 'Stage-slip prediction']
      }
    },
    {
      name: 'Channel & Distribution Economics',
      subtitle: 'Optimizing ecosystem partnerships and co-selling networks.',
      capA: {
        title: 'Ecosystem Partner Co-Selling',
        features: ['Alliance channel attribution', 'Partner deal registration', 'Joint pipeline dashboards']
      },
      capB: {
        title: 'Referral Margin Optimization',
        features: ['Tiered incentive modeling', 'Zero-conflict territory rules', 'Partner enablement kits']
      }
    },
    {
      name: 'Competitive Intelligence',
      subtitle: 'Deconstructing incumbent consultancy fee schedules and displacing legacy firms.',
      capA: {
        title: 'Win/Loss Empirical Teardown',
        features: ['Fee schedule comparisons', 'Competitor battlecards', 'Value gap analysis']
      },
      capB: {
        title: 'Battlecard Autopilot',
        features: ['Dynamic rep prompts', 'Counterparty differentiation', 'Objection-clearing scripts']
      }
    },
    {
      name: 'Revenue Realization & FinOps',
      subtitle: 'Continuous telemetry linking billable delivery to bottom-line EBITDA realization.',
      capA: {
        title: 'Gross Margin Variance Telemetry',
        features: ['Scope creep early warning', 'Real-time margin attribution', 'Contract profitability analytics']
      },
      capB: {
        title: 'Predictive Retainer Optimization',
        features: ['Churn prevention signals', 'Expansion propensity tracking', 'Contract renewal automation']
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
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />
        </div>

        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-400 text-xs font-mono font-bold tracking-wider uppercase mb-6 shadow-sm">
              <Briefcase className="w-3.5 h-3.5" />
              <span>SERVICES & PROFESSIONAL FIRMS REVENUE ARCHITECTURE</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.08] mb-6 font-heading">
              Revenue Architecture & GTM Operational Blueprints for{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-300">
                Services Companies
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed font-normal mb-6">
              ProfitMachines engineers autonomous demand generation, mathematically verified forecast accuracy, and sub-second buyer intent telemetry, meeting the strictest compliance and growth requirements of the professional services sector.
            </p>

            <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 mb-8 max-w-3xl">
              <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider block mb-1">
                STRATEGIC THESIS
              </span>
              <p className="text-sm sm:text-base text-slate-200 font-medium leading-relaxed">
                Scalable IP productization, margin protection, and predictable pipeline for people-centric businesses.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                to="/book-consultation"
                className="inline-flex items-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold px-7 py-4 rounded-xl transition-all shadow-lg shadow-cyan-500/20 text-sm group cursor-pointer"
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
                className="p-6 rounded-2xl bg-slate-950/60 border border-slate-800/80 backdrop-blur-xl shadow-lg relative group hover:border-cyan-500/40 transition-all"
              >
                <div className="text-3xl sm:text-4xl font-extrabold text-cyan-400 font-mono tracking-tight mb-2">
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
            <div className="font-mono text-xs font-semibold text-cyan-600 uppercase tracking-wider mb-2">
              QUALIFICATION MATRIX
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight mb-4 font-heading">
              Target Enterprise Fit & Architecture Scope.
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              We deploy systems-level revenue engineering for high-complexity service firms where partner time is the scarce asset and margin protection is paramount.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Column 1: Target Organizations & Scale */}
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-cyan-50 border border-cyan-100 flex items-center justify-center text-cyan-600 mb-6">
                  <Briefcase className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-950 mb-3 font-heading">
                  Target Organizations & Scale
                </h3>
                <div className="space-y-2 mb-6">
                  {['Boutique & Mid-Market Agencies', 'IT Systems Integrators & Tech Consultancies', 'Management & Strategic Advisory Firms', 'Staffing, MSPs & Managed Services Providers'].map((org, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs font-medium text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-cyan-600 flex-shrink-0" />
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
                  Firms managing 50–500+ billable consultants, complex statement-of-work (SOW) negotiations, and multi-tier rate cards vulnerable to margin decay.
                </p>
              </div>
            </div>

            {/* Column 2: Decision Makers & Buying Triggers */}
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-cyan-50 border border-cyan-100 flex items-center justify-center text-cyan-600 mb-6">
                  <Users className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-950 mb-3 font-heading">
                  Decision Makers & Buying Triggers
                </h3>
                <div className="space-y-1.5 mb-6">
                  <span className="font-mono text-[10px] text-slate-400 uppercase tracking-wider block mb-1">
                    KEY EXECUTIVE STAKEHOLDERS
                  </span>
                  {['Managing Partners & Founders', 'Chief Revenue Officer (CRO)', 'VP of Client Partnerships', 'Practice Group Leaders', 'Head of Revenue Operations'].map((role, i) => (
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
                  Founder sales bottleneck, quarterly billings volatility, commoditization in competitive RFPs, and unbilled scope creep eroding delivery margins.
                </p>
              </div>
            </div>

            {/* Column 3: Technical & Operational Maturity */}
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-cyan-50 border border-cyan-100 flex items-center justify-center text-cyan-600 mb-6">
                  <Cpu className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-950 mb-3 font-heading">
                  Technical & Operational Maturity
                </h3>
                <div className="space-y-3 mb-6">
                  <div className="p-3 rounded-xl bg-white border border-slate-200">
                    <span className="text-xs font-bold text-slate-900 block mb-0.5">Expanding Enterprise Motion</span>
                    <p className="text-xs text-slate-600">Transitioning from sub-$50k project engagements to $250k–$1M+ annual recurring transformation retainers.</p>
                  </div>
                  <div className="p-3 rounded-xl bg-white border border-slate-200">
                    <span className="text-xs font-bold text-slate-900 block mb-0.5">AI-Augmented CRM Stack</span>
                    <p className="text-xs text-slate-600">CRM deployment requiring automated account enrichment, intent scoring, and sub-second inbound routing.</p>
                  </div>
                </div>
              </div>
              <div className="pt-4 border-t border-slate-200">
                <span className="font-mono text-[10px] text-slate-400 uppercase tracking-wider block mb-1">
                  STATUTORY COMPLIANCE
                </span>
                <p className="text-xs text-slate-600 leading-relaxed">
                  SOC2 Type II certified client data boundaries, mutual NDA standards, and strict zero-leakage attribution protocols.
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
              Four Revenue Failure Modes in Professional Services.
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              When professional firms hit a growth ceiling, standard agency growth hacks fail. These four structural failure modes require deterministic systems engineering.
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
            <div className="font-mono text-xs font-semibold text-cyan-600 uppercase tracking-wider mb-2">
              PRODUCTION ARCHITECTURE
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight mb-4 font-heading">
              Systems-Level Revenue Solutions (Problem → Solution Mapping).
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              We deploy deterministic engineering stacks that systematically replace manual sales guesswork with automated revenue infrastructure.
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
                      <span className="font-mono text-xs font-bold px-2.5 py-1 rounded bg-cyan-500/20 text-cyan-300 border border-cyan-400/30">
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
                    <span className="font-mono text-[10px] text-cyan-400 uppercase tracking-wider font-bold block mb-1">
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
            <div className="font-mono text-xs font-semibold text-cyan-600 uppercase tracking-wider mb-2">
              CAPABILITY CONTINUUM
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight mb-4 font-heading">
              Full-Stack Capability Matrix.
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              Explore our six core revenue architecture domains engineered for professional services enterprises.
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
                    ? 'bg-slate-900 text-cyan-400 shadow-md'
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
              <span className="font-mono text-xs font-bold text-cyan-600 uppercase tracking-wider mb-2 block">
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
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-600 flex-shrink-0" />
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
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-600 flex-shrink-0" />
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
              <div className="font-mono text-xs font-semibold text-cyan-600 uppercase tracking-wider mb-2">
                MEASURABLE ROI
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight mb-6 font-heading">
                Deterministic Return on Investment.
              </h2>
              <p className="text-base text-slate-600 leading-relaxed mb-8">
                Every ProfitMachines engagement is benchmarked against hard mathematical baselines. We couple fees to verified production metrics.
              </p>

              <div className="space-y-4">
                {metrics.map((m, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between">
                    <div>
                      <div className="text-sm font-bold text-slate-900">{m.title}</div>
                      <div className="text-xs text-slate-500">{m.context}</div>
                    </div>
                    <div className="text-xl font-bold font-mono text-cyan-600 flex-shrink-0 ml-4">
                      {m.num}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Standard 3-Stage Implementation Framework */}
            <div className="lg:col-span-7">
              <div className="p-8 sm:p-10 rounded-3xl bg-slate-900 text-white border border-slate-800 shadow-xl">
                <span className="font-mono text-xs font-bold text-cyan-400 uppercase tracking-wider mb-2 block">
                  DEPLOYMENT LIFECYCLE
                </span>
                <h3 className="text-2xl font-bold text-white mb-6 font-heading">
                  Standard 3-Stage Implementation Framework
                </h3>

                <div className="space-y-6">
                  <div className="p-5 rounded-2xl bg-slate-950/80 border border-slate-800">
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-mono text-xs font-bold text-cyan-400">STAGE 01 · 2–4 WEEKS</span>
                      <span className="text-[11px] font-mono text-slate-400">BASELINE LOCK</span>
                    </div>
                    <div className="text-base font-bold text-white mb-1">Revenue Diagnostic & Baseline Lock</div>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      Comprehensive pipeline leak audit, partner time expenditure review, verified intent scorecard, and 90-day value roadmap.
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl bg-slate-950/80 border border-slate-800">
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-mono text-xs font-bold text-cyan-400">STAGE 02 · 6–12 WEEKS</span>
                      <span className="text-[11px] font-mono text-slate-400">VALUE REALIZATION</span>
                    </div>
                    <div className="text-base font-bold text-white mb-1">Value Realization Sprint</div>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      Deployed autonomous SDR agent fleet, hardened professional service packaging, dynamic messaging mesh, and live telemetry cockpit.
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl bg-slate-950/80 border border-slate-800">
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-mono text-xs font-bold text-cyan-400">STAGE 03 · ONGOING</span>
                      <span className="text-[11px] font-mono text-slate-400">COMPOUNDING VALUE</span>
                    </div>
                    <div className="text-base font-bold text-white mb-1">Enterprise Scale & Compounding Value</div>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      Full GTM transformation, multi-practice expansion, continuous AI optimization, and dedicated Resident Growth Architect deployment.
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
                Tier-1 Management & Technology Consultancy
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-950 mb-4 font-heading">
              45% CAC Reduction & 3.8x Meeting Lift for a Specialized Advisory Firm
            </h3>

            <p className="text-base text-slate-700 leading-relaxed mb-8 max-w-4xl">
              Re-architected the outbound GTM motion from fragmented, manual partner efforts to an autonomous, intent-driven agent mesh. Slashed customer acquisition costs by 45% while scaling verified enterprise CFO meeting volume by 3.8x within the first 90 days, completely de-bottlenecking founder-led sales.
            </p>

            <Link
              to="/book-consultation"
              className="inline-flex items-center gap-2 text-cyan-600 font-bold text-sm hover:text-cyan-700 transition-colors group cursor-pointer"
            >
              <span>Read Full Services Case Study & Audit Telemetry</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── SECTION 9: CUSTOM INDUSTRY ROADMAP & CTA ── */}
      <section className="py-24 sm:py-32 bg-slate-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-cyan-500/10 rounded-full blur-[160px]" />
        </div>

        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6">
              <span className="font-mono text-xs font-bold text-cyan-400 uppercase tracking-wider px-3 py-1 rounded-full bg-cyan-400/10 border border-cyan-400/20 inline-block mb-4">
                CONFIDENTIAL ENGAGEMENT
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-6 font-heading">
                Ready to Architect Industrial-Grade Revenue in Professional Services?
              </h2>
              <p className="text-slate-300 text-base sm:text-lg mb-8 leading-relaxed">
                Engage directly with our principal revenue architects. We audit your existing GTM stack, eliminate pipeline leakage, and engineer verifiable production growth.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <Link
                  to="/book-consultation"
                  className="inline-flex items-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold px-7 py-4 rounded-xl transition-all shadow-lg shadow-cyan-500/20 text-sm group cursor-pointer"
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
              <IndustryIntakeForm industryName="Services Companies" accentColorClass="text-cyan-400" />
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
