import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ShieldCheck,
  Building2,
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
  LayoutGrid
} from 'lucide-react';
import IndustryIntakeForm from '../../components/forms/IndustryIntakeForm';

export default function PlatformIndustry() {
  const [activeDomain, setActiveDomain] = useState<number>(0);

  const metrics = [
    {
      num: '48%',
      title: 'Enterprise Pipeline Velocity Lift',
      context: 'Achieved through automated product-qualified account (PQA) telemetry and instant buying committee routing.'
    },
    {
      num: '138%',
      title: 'Net Revenue Retention (NRR) Benchmark',
      context: 'Autonomous expansion triggering predicting account upgrades before renewal deadlines.'
    },
    {
      num: '98.5%',
      title: 'Forecast Accuracy Alignment',
      context: 'Behavioral usage signals replacing subjective sales rep conjecture in quarterly commit calls.'
    },
    {
      num: '3.6x',
      title: 'Self-Serve to Enterprise Conversion Lift',
      context: 'Dynamic deal rooms providing buyer CFO business cases directly to freemium champions.'
    }
  ];

  const failureModes = [
    {
      num: '01',
      title: 'PLG-to-Enterprise Sales Friction (The Freemium Ceiling)',
      impact: 'Millions of free and self-serve tier users that sales reps cannot effectively qualify or monetize into enterprise MSAs.',
      whyGenericFails: 'Outbound sales teams cold-call self-serve users with generic pitch decks, alienating champions and ignoring product usage telemetry.'
    },
    {
      num: '02',
      title: 'Net Revenue Retention (NRR) Erosion & Silent Churn',
      impact: 'Expansion ARR stalls while accounts churn unexpectedly due to undetected feature adoption drop-offs.',
      whyGenericFails: 'Customer success teams rely on delayed NPS surveys and calendar check-ins rather than algorithmic real-time consumption telemetry.'
    },
    {
      num: '03',
      title: 'Unpredictable Enterprise Sales Cycles & Forecast Slip',
      impact: 'Seven-figure deals stall across 9-month buying committee reviews, causing massive quarterly commit variance.',
      whyGenericFails: 'Standard CRM pipelines track vanity stages without enforcing deterministic MEDDPICC qualification rigor across multi-threaded champions.'
    },
    {
      num: '04',
      title: 'Vertical Expansion & TAM Saturation Stalls',
      impact: 'Platform growth plateaus in tech-native startups and fails to penetrate legacy enterprise regulated verticals.',
      whyGenericFails: 'Marketing teams reuse horizontal messaging rather than building specialized vertical compliance packages and industry-specific business cases.'
    }
  ];

  const solutions = [
    {
      num: '01',
      title: 'Usage-to-Revenue Signal Pipelines & PQA Scoring',
      architecture: 'Real-time telemetry ingestion bridging product analytics (Mixpanel/Segment) directly to CRM routing engines with behavioral intent scoring.',
      outcome: '3.6x lift in self-serve to enterprise conversion, capturing accounts at the exact moment of commercial expansion readiness.'
    },
    {
      num: '02',
      title: 'Automated Account Expansion & Churn Prevention Telemetry',
      architecture: 'Algorithmic feature-usage degradation monitors and predictive next-best-offer recommendation agents for existing accounts.',
      outcome: 'Achieved 138% average Net Revenue Retention (NRR) and reduced gross revenue churn to under 2.5% annually.'
    },
    {
      num: '03',
      title: 'Automated MEDDPICC Rigor & Dynamic Deal Rooms',
      architecture: 'Machine learning deal-health evaluation, buying-committee gap detection, and auto-generated buyer CFO business cases.',
      outcome: '98.5% forecast commit precision and 35% compression in enterprise sales cycle duration.'
    },
    {
      num: '04',
      title: 'Vertical Moat Packaging & Enterprise Compliance Hubs',
      architecture: 'Turnkey verticalization playbooks, pre-packaged SOC2/HIPAA/ISO dossiers, and specialized procurement accelerators.',
      outcome: 'Successful expansion into financial services, healthcare, and industrial sectors with 2.8x higher average contract value (ACV).'
    }
  ];

  const capabilityDomains = [
    {
      name: 'Market & Whitespace Discovery',
      subtitle: 'Mapping addressable developer, user, and enterprise accounts across global ecosystems.',
      capA: {
        title: 'Installed-Base Whitespace Audit',
        features: ['Account consumption analysis', 'Cross-sell opportunity modeling', 'Contract renewal whitespace mapping']
      },
      capB: {
        title: 'Developer Intent Scoring',
        features: ['API documentation telemetry', 'Open-source repo engagement', 'SDK integration signals']
      }
    },
    {
      name: 'Demand & Pipeline Generation',
      subtitle: 'Bridging developer signups with high-intent enterprise pipeline creation.',
      capA: {
        title: 'Autonomous Inbound Signal Routing',
        features: ['Sub-second PQA detection', 'Automated enrichment', 'Executive champion alert dispatch']
      },
      capB: {
        title: 'Multi-Threaded Account Outreach',
        features: ['Buying committee mapping', 'Dynamic persona messaging', 'Automated objection handling']
      }
    },
    {
      name: 'Value & Deal Execution',
      subtitle: 'Equipping champions with board-ready ROI proof and CFO business cases.',
      capA: {
        title: 'Dynamic Deal Room Agent',
        features: ['Auto-generated CFO calculators', 'Security & architecture hubs', 'Collaborative evaluation timelines']
      },
      capB: {
        title: 'Algorithmic Win Probability',
        features: ['MEDDPICC stage-gate verification', 'Deal slip prediction', 'Next-best-action prompts']
      }
    },
    {
      name: 'Channel & Distribution Economics',
      subtitle: 'Scaling cloud marketplace listings, ISV co-selling, and reseller networks.',
      capA: {
        title: 'Cloud Marketplace Co-Selling',
        features: ['AWS/Azure/GCP commit drawdown', 'Private offer automation', 'Cloud marketplace attribution']
      },
      capB: {
        title: 'Ecosystem Alliance Governance',
        features: ['ISV partner lead exchange', 'Joint solution briefs', 'Tiered margin distribution']
      }
    },
    {
      name: 'Competitive Intelligence',
      subtitle: 'Displacing legacy on-premise software and horizontal SaaS incumbents.',
      capA: {
        title: 'Feature Parity & TCO Teardown',
        features: ['Total cost of ownership models', 'Migration payback calculators', 'Live competitor feature grids']
      },
      capB: {
        title: 'Battlecard Autopilot',
        features: ['Real-time objection counters', 'Competitor pricing teardowns', 'Win-loss telemetry']
      }
    },
    {
      name: 'Revenue Realization & FinOps',
      subtitle: 'Continuous monitoring of contract consumption, billing, and gross margin.',
      capA: {
        title: 'Usage Consumption Telemetry',
        features: ['Over-usage alert automation', 'Capacity ceiling notifications', 'Contract true-up forecasting']
      },
      capB: {
        title: 'SaaS Unit Economics Engine',
        features: ['LTV:CAC cohort reporting', 'Rule of 40 tracking', 'Cost to serve per customer tier']
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
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />
        </div>

        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/30 text-blue-400 text-xs font-mono font-bold tracking-wider uppercase mb-6 shadow-sm">
              <Building2 className="w-3.5 h-3.5" />
              <span>PLATFORM & SAAS REVENUE ARCHITECTURE</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.08] mb-6 font-heading">
              Revenue Architecture & GTM Operational Blueprints for{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-cyan-300">
                Platform Companies
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed font-normal mb-6">
              ProfitMachines engineers autonomous demand generation, mathematically verified forecast accuracy, and sub-second buyer intent telemetry, meeting the strictest compliance and growth requirements of the platform and SaaS sector.
            </p>

            <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 mb-8 max-w-3xl">
              <span className="text-xs font-mono font-bold text-blue-400 uppercase tracking-wider block mb-1">
                STRATEGIC THESIS
              </span>
              <p className="text-sm sm:text-base text-slate-200 font-medium leading-relaxed">
                Bridging the gap between product-led growth and predictable, high-velocity enterprise sales motions.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                to="/book-consultation"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold px-7 py-4 rounded-xl transition-all shadow-lg shadow-blue-600/30 text-sm group cursor-pointer"
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
                className="p-6 rounded-2xl bg-slate-950/60 border border-slate-800/80 backdrop-blur-xl shadow-lg relative group hover:border-blue-500/40 transition-all"
              >
                <div className="text-3xl sm:text-4xl font-extrabold text-blue-400 font-mono tracking-tight mb-2">
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
            <div className="font-mono text-xs font-semibold text-blue-600 uppercase tracking-wider mb-2">
              QUALIFICATION MATRIX
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight mb-4 font-heading">
              Target Enterprise Fit & Architecture Scope.
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              We deploy systems-level revenue engineering for high-growth SaaS, developer platforms, and B2B marketplaces scaling from $10M to $100M+ ARR.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Column 1: Target Organizations & Scale */}
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 mb-6">
                  <Building2 className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-950 mb-3 font-heading">
                  Target Organizations & Scale
                </h3>
                <div className="space-y-2 mb-6">
                  {['Horizontal & Vertical Enterprise SaaS', 'Product-Led Growth (PLG) Developer Platforms', 'Two-Sided B2B Marketplaces', 'Cloud Infrastructure & API Platforms'].map((org, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs font-medium text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0" />
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
                  Platforms with millions of API calls, hybrid self-serve + enterprise sales tiers, and complex usage-based pricing models requiring live metering.
                </p>
              </div>
            </div>

            {/* Column 2: Decision Makers & Buying Triggers */}
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 mb-6">
                  <Users className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-950 mb-3 font-heading">
                  Decision Makers & Buying Triggers
                </h3>
                <div className="space-y-1.5 mb-6">
                  <span className="font-mono text-[10px] text-slate-400 uppercase tracking-wider block mb-1">
                    KEY EXECUTIVE STAKEHOLDERS
                  </span>
                  {['Chief Revenue Officer (CRO)', 'VP of Enterprise Sales', 'Head of Revenue Operations', 'Chief Product Officer (CPO)', 'Chief Growth Officer (CGO)'].map((role, i) => (
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
                  Freemium users failing to convert to enterprise contracts, quarter-end forecast slippage, declining Net Retention (NRR), and competitive feature erosion.
                </p>
              </div>
            </div>

            {/* Column 3: Technical & Operational Maturity */}
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 mb-6">
                  <Cpu className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-950 mb-3 font-heading">
                  Technical & Operational Maturity
                </h3>
                <div className="space-y-3 mb-6">
                  <div className="p-3 rounded-xl bg-white border border-slate-200">
                    <span className="text-xs font-bold text-slate-900 block mb-0.5">Product Data Infrastructure</span>
                    <p className="text-xs text-slate-600">Snowflake, BigQuery, Segment, or PostHog stacks capturing granular customer usage telemetry.</p>
                  </div>
                  <div className="p-3 rounded-xl bg-white border border-slate-200">
                    <span className="text-xs font-bold text-slate-900 block mb-0.5">Dual-Motion GTM Stack</span>
                    <p className="text-xs text-slate-600">Salesforce, HubSpot, or bespoke CRM orchestrating both automated self-serve workflows and high-touch AEs.</p>
                  </div>
                </div>
              </div>
              <div className="pt-4 border-t border-slate-200">
                <span className="font-mono text-[10px] text-slate-400 uppercase tracking-wider block mb-1">
                  ENTERPRISE GOVERNANCE
                </span>
                <p className="text-xs text-slate-600 leading-relaxed">
                  SOC2 Type II, ISO 27001, GDPR, and enterprise BAA/DPA contract requirements for large corporate procurements.
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
              Four Revenue Failure Modes in Platform & SaaS.
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              When software companies attempt to transition upmarket, standard sales playbooks stall. These four friction points choke SaaS multiples.
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
            <div className="font-mono text-xs font-semibold text-blue-600 uppercase tracking-wider mb-2">
              PRODUCTION ARCHITECTURE
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight mb-4 font-heading">
              Systems-Level Revenue Solutions (Problem → Solution Mapping).
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              We engineer telemetry pipelines that seamlessly bridge self-serve product telemetry with deterministic enterprise deal execution.
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
                      <span className="font-mono text-xs font-bold px-2.5 py-1 rounded bg-blue-500/20 text-blue-300 border border-blue-400/30">
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
                    <span className="font-mono text-[10px] text-blue-400 uppercase tracking-wider font-bold block mb-1">
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
            <div className="font-mono text-xs font-semibold text-blue-600 uppercase tracking-wider mb-2">
              CAPABILITY CONTINUUM
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight mb-4 font-heading">
              Full-Stack Capability Matrix.
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              Explore our six core revenue architecture domains engineered for high-velocity software and platform companies.
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
                    ? 'bg-slate-900 text-blue-400 shadow-md'
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
              <span className="font-mono text-xs font-bold text-blue-600 uppercase tracking-wider mb-2 block">
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
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 flex-shrink-0" />
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
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 flex-shrink-0" />
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
              <div className="font-mono text-xs font-semibold text-blue-600 uppercase tracking-wider mb-2">
                MEASURABLE ROI
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight mb-6 font-heading">
                Deterministic Return on Investment.
              </h2>
              <p className="text-base text-slate-600 leading-relaxed mb-8">
                Every software platform engagement is benchmarked against hard mathematical baselines. We couple fees to verified expansion ARR and sales cycle compression.
              </p>

              <div className="space-y-4">
                {metrics.map((m, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between">
                    <div>
                      <div className="text-sm font-bold text-slate-900">{m.title}</div>
                      <div className="text-xs text-slate-500">{m.context}</div>
                    </div>
                    <div className="text-xl font-bold font-mono text-blue-600 flex-shrink-0 ml-4">
                      {m.num}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Standard 3-Stage Implementation Framework */}
            <div className="lg:col-span-7">
              <div className="p-8 sm:p-10 rounded-3xl bg-slate-900 text-white border border-slate-800 shadow-xl">
                <span className="font-mono text-xs font-bold text-blue-400 uppercase tracking-wider mb-2 block">
                  DEPLOYMENT LIFECYCLE
                </span>
                <h3 className="text-2xl font-bold text-white mb-6 font-heading">
                  Standard 3-Stage Implementation Framework
                </h3>

                <div className="space-y-6">
                  <div className="p-5 rounded-2xl bg-slate-950/80 border border-slate-800">
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-mono text-xs font-bold text-blue-400">STAGE 01 · 2–4 WEEKS</span>
                      <span className="text-[11px] font-mono text-slate-400">BASELINE LOCK</span>
                    </div>
                    <div className="text-base font-bold text-white mb-1">Revenue Diagnostic & Baseline Lock</div>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      Comprehensive PLG-to-sales funnel telemetry audit, PQA threshold calibration, forecast variance analysis, and 90-day value roadmap.
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl bg-slate-950/80 border border-slate-800">
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-mono text-xs font-bold text-blue-400">STAGE 02 · 6–12 WEEKS</span>
                      <span className="text-[11px] font-mono text-slate-400">VALUE REALIZATION</span>
                    </div>
                    <div className="text-base font-bold text-white mb-1">Value Realization Sprint</div>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      Deployed usage-to-revenue signal pipeline, dynamic deal room agent fleet, automated MEDDPICC qualification scorecards, and live telemetry cockpit.
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl bg-slate-950/80 border border-slate-800">
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-mono text-xs font-bold text-blue-400">STAGE 03 · ONGOING</span>
                      <span className="text-[11px] font-mono text-slate-400">COMPOUNDING VALUE</span>
                    </div>
                    <div className="text-base font-bold text-white mb-1">Enterprise Scale & Compounding Value</div>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      Full enterprise GTM transformation, multi-vertical expansion playbooks, continuous AI optimization, and dedicated Resident Growth Architect deployment.
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
                Series-C Cloud Infrastructure & API Platform
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-950 mb-4 font-heading">
              138% NRR & $34M Enterprise Pipeline for a PLG Developer Platform
            </h3>

            <p className="text-base text-slate-700 leading-relaxed mb-8 max-w-4xl">
              Connected granular API telemetry directly to our autonomous enterprise qualification mesh. Identified 420+ hidden enterprise buying committees within active self-serve developer accounts, scaling Net Revenue Retention to 138% and adding $34M in qualified pipeline within 90 days.
            </p>

            <Link
              to="/book-consultation"
              className="inline-flex items-center gap-2 text-blue-600 font-bold text-sm hover:text-blue-700 transition-colors group cursor-pointer"
            >
              <span>Read Full Platform Case Study & Telemetry</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── SECTION 9: CUSTOM INDUSTRY ROADMAP & CTA ── */}
      <section className="py-24 sm:py-32 bg-slate-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-600/10 rounded-full blur-[160px]" />
        </div>

        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6">
              <span className="font-mono text-xs font-bold text-blue-400 uppercase tracking-wider px-3 py-1 rounded-full bg-blue-400/10 border border-blue-400/20 inline-block mb-4">
                CONFIDENTIAL ENGAGEMENT
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-6 font-heading">
                Ready to Architect Industrial-Grade Revenue in Platforms & SaaS?
              </h2>
              <p className="text-slate-300 text-base sm:text-lg mb-8 leading-relaxed">
                Engage directly with our principal revenue architects. We audit your existing GTM stack, eliminate pipeline leakage, and engineer verifiable production growth.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <Link
                  to="/book-consultation"
                  className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold px-7 py-4 rounded-xl transition-all shadow-lg shadow-blue-600/30 text-sm group cursor-pointer"
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
              <IndustryIntakeForm industryName="Platform Companies" accentColorClass="text-blue-400" />
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
