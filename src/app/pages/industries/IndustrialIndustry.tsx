import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ShieldCheck,
  Factory,
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
  Wrench,
  Truck
} from 'lucide-react';
import IndustryIntakeForm from '../../components/forms/IndustryIntakeForm';

export default function IndustrialIndustry() {
  const [activeDomain, setActiveDomain] = useState<number>(0);

  const metrics = [
    {
      num: '+$82M',
      title: 'Qualified Industrial & CapEx Pipeline Added',
      context: 'Generated through engineer-level CAD specification telemetry and plant intent tracking.'
    },
    {
      num: '35%',
      title: 'Capital Equipment Sales Cycle Compression',
      context: 'Achieved by bridging technical specs with plant CFO amortization and OEE lift models.'
    },
    {
      num: '4.2x',
      title: 'Dealer & Distributor Quote-to-Close Velocity',
      context: 'Automated deal registration and dynamic margin incentive tiering across dealer networks.'
    },
    {
      num: '34%',
      title: 'Recurring Aftermarket Service Attach Lift',
      context: 'Predictive IoT maintenance telemetry routing spare parts replenishment before equipment failure.'
    }
  ];

  const failureModes = [
    {
      num: '01',
      title: 'Opaque 12–24 Month CapEx Procurement Cycles',
      impact: 'Massive capital expenditure proposals stall indefinitely in board review, causing unpredictable quarterly EBITDA forecasting.',
      whyGenericFails: 'Outbound marketing teams pitch generic features rather than arming plant managers with CFO-level total cost of ownership (TCO) and equipment amortization models.'
    },
    {
      num: '02',
      title: 'Technical vs. Financial Buying Committee Disconnect',
      impact: 'Plant engineers champion machinery specifications while procurement officers and CFOs reject proposals on capital hurdles.',
      whyGenericFails: 'Traditional industrial sales materials consist of static PDF specification sheets that fail to calculate plant throughput or overall equipment effectiveness (OEE) lift.'
    },
    {
      num: '03',
      title: 'Dealer Channel Conflict & Opaque Distributor Networks',
      impact: 'Distributors push competing brands, fail to register deals, and cannibalize direct manufacturer margins.',
      whyGenericFails: 'Legacy manufacturers lack real-time channel telemetry, relying on manual quarterly spreadsheets rather than automated deal protection systems.'
    },
    {
      num: '04',
      title: 'High-Margin Aftermarket & Spares Revenue Leakage',
      impact: 'Customers purchase capital equipment from OEMs but source profitable replacement parts and servicing from gray-market third parties.',
      whyGenericFails: 'Siloed equipment sales teams hand off accounts without instrumenting IoT telemetry or automated consumable replenishment triggers.'
    }
  ];

  const solutions = [
    {
      num: '01',
      title: 'Technical-to-Financial Translation Studios & OEE Models',
      architecture: 'CapEx payback calculators, machine downtime reduction models, and automated engineering specification telemetry.',
      outcome: '35% compression in multi-million-dollar capital equipment procurement cycles, converting RFQs into closed contracts.'
    },
    {
      num: '02',
      title: 'Multi-Stakeholder Plant Evaluation Workspaces',
      architecture: 'Role-tailored deal rooms delivering throughput simulations for Operations, safety attestations for EHS, and ROI models for CFOs.',
      outcome: 'Aligned plant buying committees with verified 92% approval velocity through corporate procurement.'
    },
    {
      num: '03',
      title: 'Automated Distributor Telemetry & Zero-Conflict Governance',
      architecture: 'Self-service dealer portals, automated territory deal registration, and dynamic margin tiering engines.',
      outcome: '4.2x faster distributor quote turnaround with zero territory disputes or channel cannibalization.'
    },
    {
      num: '04',
      title: 'Predictive Aftermarket Telemetry & IoT Replenishment',
      architecture: 'Installed base usage tracking, predictive maintenance triggers, and automated OEM parts reordering pipelines.',
      outcome: '34% increase in recurring aftermarket attach rate, transforming one-time machinery buyers into multi-year recurring revenue.'
    }
  ];

  const capabilityDomains = [
    {
      name: 'Market & Whitespace Discovery',
      subtitle: 'Mapping industrial manufacturing facilities, CapEx modernization cycles, and OEM supply chains.',
      capA: {
        title: 'Factory Modernization Whitespace',
        features: ['Plant age and machinery telemetry', 'CapEx expansion budget signals', 'Competitor installed base discovery']
      },
      capB: {
        title: 'Plant Engineer Intent Scoring',
        features: ['CAD drawing download tracking', 'Technical whitepaper engagement', 'Safety specification audit telemetry']
      }
    },
    {
      name: 'Demand & Pipeline Generation',
      subtitle: 'Deploying engineering-grade outbound fleets targeting plant managers and VP of Manufacturing.',
      capA: {
        title: 'Technical Outbound Orchestration',
        features: ['Specification-led personalization', 'Plant benchmark integration', 'Role-tailored procurement sequencing']
      },
      capB: {
        title: 'Sub-Second RFQ Triage',
        features: ['Automated BOM parsing', 'Machinery fit verification', 'Engineering team review routing']
      }
    },
    {
      name: 'Value & Deal Execution',
      subtitle: 'Packaging undeniable industrial payback models and overall equipment effectiveness (OEE) proofs.',
      capA: {
        title: 'CapEx Payback Studio',
        features: ['OEE improvement modeling', 'Machine downtime cost calculators', 'Equipment leasing & amortization packs']
      },
      capB: {
        title: 'Turnkey Commissioning Deal Room',
        features: ['Installation timeline guarantees', 'Factory acceptance test (FAT) kits', 'Plant safety compliance dossiers']
      }
    },
    {
      name: 'Channel & Distribution Economics',
      subtitle: 'Scaling independent dealer networks, industrial distributors, and direct plant accounts.',
      capA: {
        title: 'Distributor Margin Matrix',
        features: ['Tiered dealer margin models', 'Automated deal registration protection', 'Channel co-marketing playbooks']
      },
      capB: {
        title: 'Direct-to-Plant Channel Governance',
        features: ['Territory carve-out rules', 'Enterprise account prioritization', 'OEM supplier master agreements']
      }
    },
    {
      name: 'Competitive Intelligence',
      subtitle: 'Deconstructing incumbent machinery manufacturers and displacing low-cost foreign suppliers.',
      capA: {
        title: 'OEM Specification Teardown',
        features: ['TCO & lifecycle cost comparison', 'Mean Time Between Failures (MTBF) proof', 'Consumable cost battlecards']
      },
      capB: {
        title: 'Displacement Autopilot',
        features: ['Trade-in credit incentive models', 'Legacy machine retirement plans', 'Engineer objection scripts']
      }
    },
    {
      name: 'Revenue Realization & FinOps',
      subtitle: 'Tracking equipment uptime, warranty claims, spare parts replenishment, and field servicing margins.',
      capA: {
        title: 'Aftermarket Spares Telemetry',
        features: ['Predictive wear-part notifications', 'Automated quote-to-order pipelines', 'Field service scheduling synchronization']
      },
      capB: {
        title: 'Quality & Regulatory Audit Cockpit',
        features: ['ISO 9001 compliance logs', 'ITAR/Export control screening', 'Supply chain warranty tracking']
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
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-slate-400/10 rounded-full blur-[140px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-sky-600/10 rounded-full blur-[140px] pointer-events-none" />
        </div>

        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-400/10 border border-slate-400/30 text-slate-300 text-xs font-mono font-bold tracking-wider uppercase mb-6 shadow-sm">
              <Factory className="w-3.5 h-3.5" />
              <span>MANUFACTURING & INDUSTRIAL REVENUE ARCHITECTURE</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.08] mb-6 font-heading">
              Revenue Architecture & GTM Operational Blueprints for{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-200 via-sky-300 to-blue-300">
                Manufacturing & Industrial
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed font-normal mb-6">
              ProfitMachines engineers autonomous demand generation, mathematically verified forecast accuracy, and sub-second buyer intent telemetry, meeting the strictest compliance and growth requirements of the manufacturing and industrial sector.
            </p>

            <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 mb-8 max-w-3xl">
              <span className="text-xs font-mono font-bold text-sky-400 uppercase tracking-wider block mb-1">
                STRATEGIC THESIS
              </span>
              <p className="text-sm sm:text-base text-slate-200 font-medium leading-relaxed">
                Shortening multi-year sales cycles and optimizing complex, global distribution networks for heavy industry.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                to="/book-consultation"
                className="inline-flex items-center gap-2 bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold px-7 py-4 rounded-xl transition-all shadow-lg shadow-sky-500/20 text-sm group cursor-pointer"
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
                className="p-6 rounded-2xl bg-slate-950/60 border border-slate-800/80 backdrop-blur-xl shadow-lg relative group hover:border-sky-400/40 transition-all"
              >
                <div className="text-3xl sm:text-4xl font-extrabold text-sky-400 font-mono tracking-tight mb-2">
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
            <div className="font-mono text-xs font-semibold text-sky-600 uppercase tracking-wider mb-2">
              QUALIFICATION MATRIX
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight mb-4 font-heading">
              Target Enterprise Fit & Architecture Scope.
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              We deploy systems-level revenue engineering for heavy machinery OEMs, advanced industrial IoT manufacturers, specialty chemical producers, and global supply distributors.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Column 1: Target Organizations & Scale */}
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-700 mb-6">
                  <Factory className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-950 mb-3 font-heading">
                  Target Organizations & Scale
                </h3>
                <div className="space-y-2 mb-6">
                  {['Heavy Machinery & Equipment OEMs', 'Industrial IoT & Smart Factory Automation', 'Contract Electronics & Precision Manufacturing', 'Specialty Chemicals & Global Industrial Distributors'].map((org, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs font-medium text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-sky-600 flex-shrink-0" />
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
                  Enterprises producing $250k–$5M+ unit-cost machinery, managing 500+ independent dealer territories, and operating multi-plant global supply chains.
                </p>
              </div>
            </div>

            {/* Column 2: Decision Makers & Buying Triggers */}
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-700 mb-6">
                  <Users className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-950 mb-3 font-heading">
                  Decision Makers & Buying Triggers
                </h3>
                <div className="space-y-1.5 mb-6">
                  <span className="font-mono text-[10px] text-slate-400 uppercase tracking-wider block mb-1">
                    KEY EXECUTIVE STAKEHOLDERS
                  </span>
                  {['VP of Global Industrial Sales', 'Chief Commercial Officer (CCO)', 'VP of Manufacturing & Operations', 'Head of Dealer & Channel Networks', 'Chief Financial Officer (CFO)'].map((role, i) => (
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
                  Stalled CapEx pipeline proposals, low dealer quoting activity, loss of high-margin aftermarket spares to generic clones, and supply chain price volatility eroding margins.
                </p>
              </div>
            </div>

            {/* Column 3: Technical & Operational Maturity */}
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-700 mb-6">
                  <Cpu className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-950 mb-3 font-heading">
                  Technical & Operational Maturity
                </h3>
                <div className="space-y-3 mb-6">
                  <div className="p-3 rounded-xl bg-white border border-slate-200">
                    <span className="text-xs font-bold text-slate-900 block mb-0.5">ERP & CPQ Infrastructure</span>
                    <p className="text-xs text-slate-600">SAP, Oracle NetSuite, or Infor connected to configure-price-quote (CPQ) systems and plant floor MES.</p>
                  </div>
                  <div className="p-3 rounded-xl bg-white border border-slate-200">
                    <span className="text-xs font-bold text-slate-900 block mb-0.5">IoT Machine Telemetry</span>
                    <p className="text-xs text-slate-600">Edge telemetry logging operating hours, cycle counts, and predictive maintenance error codes.</p>
                  </div>
                </div>
              </div>
              <div className="pt-4 border-t border-slate-200">
                <span className="font-mono text-[10px] text-slate-400 uppercase tracking-wider block mb-1">
                  OPERATIONAL COMPLIANCE
                </span>
                <p className="text-xs text-slate-600 leading-relaxed">
                  ISO 9001 certified engineering processes, ISO 27001 data safeguards, and NIST SP 800-171 export control adherence.
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
              Four Revenue Failure Modes in Industrial Manufacturing.
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              Industrial commercial motions navigate high-stakes procurement hurdles and long sales timelines. These four structural failure points destroy manufacturing EBITDA.
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
            <div className="font-mono text-xs font-semibold text-sky-600 uppercase tracking-wider mb-2">
              PRODUCTION ARCHITECTURE
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight mb-4 font-heading">
              Systems-Level Revenue Solutions (Problem → Solution Mapping).
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              We deploy technical-to-financial value translation studios and predictive aftermarket telemetry to replace offline sales friction.
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
                      <span className="font-mono text-xs font-bold px-2.5 py-1 rounded bg-sky-500/20 text-sky-300 border border-sky-400/30">
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
                    <span className="font-mono text-[10px] text-sky-400 uppercase tracking-wider font-bold block mb-1">
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
            <div className="font-mono text-xs font-semibold text-sky-600 uppercase tracking-wider mb-2">
              CAPABILITY CONTINUUM
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight mb-4 font-heading">
              Full-Stack Capability Matrix.
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              Explore our six core revenue architecture domains engineered specifically for heavy equipment OEMs, manufacturing plants, and industrial tech providers.
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
                    ? 'bg-slate-900 text-sky-400 shadow-md'
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
              <span className="font-mono text-xs font-bold text-sky-600 uppercase tracking-wider mb-2 block">
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
                      <CheckCircle2 className="w-3.5 h-3.5 text-sky-600 flex-shrink-0" />
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
                      <CheckCircle2 className="w-3.5 h-3.5 text-sky-600 flex-shrink-0" />
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
              <div className="font-mono text-xs font-semibold text-sky-600 uppercase tracking-wider mb-2">
                MEASURABLE ROI
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight mb-6 font-heading">
                Deterministic Return on Investment.
              </h2>
              <p className="text-base text-slate-600 leading-relaxed mb-8">
                Every industrial engagement is benchmarked against hard mathematical baselines. We couple fees to verified CapEx pipeline velocity and recurring aftermarket attach rates.
              </p>

              <div className="space-y-4">
                {metrics.map((m, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between">
                    <div>
                      <div className="text-sm font-bold text-slate-900">{m.title}</div>
                      <div className="text-xs text-slate-500">{m.context}</div>
                    </div>
                    <div className="text-xl font-bold font-mono text-sky-600 flex-shrink-0 ml-4">
                      {m.num}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Standard 3-Stage Implementation Framework */}
            <div className="lg:col-span-7">
              <div className="p-8 sm:p-10 rounded-3xl bg-slate-900 text-white border border-slate-800 shadow-xl">
                <span className="font-mono text-xs font-bold text-sky-400 uppercase tracking-wider mb-2 block">
                  DEPLOYMENT LIFECYCLE
                </span>
                <h3 className="text-2xl font-bold text-white mb-6 font-heading">
                  Standard 3-Stage Implementation Framework
                </h3>

                <div className="space-y-6">
                  <div className="p-5 rounded-2xl bg-slate-950/80 border border-slate-800">
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-mono text-xs font-bold text-sky-400">STAGE 01 · 2–4 WEEKS</span>
                      <span className="text-[11px] font-mono text-slate-400">BASELINE LOCK</span>
                    </div>
                    <div className="text-base font-bold text-white mb-1">Revenue Diagnostic & Baseline Lock</div>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      Comprehensive dealer network quote audit, engineering intent download review, aftermarket margin leakage scorecard, and 90-day value roadmap.
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl bg-slate-950/80 border border-slate-800">
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-mono text-xs font-bold text-sky-400">STAGE 02 · 6–12 WEEKS</span>
                      <span className="text-[11px] font-mono text-slate-400">VALUE REALIZATION</span>
                    </div>
                    <div className="text-base font-bold text-white mb-1">Value Realization Sprint</div>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      Deployed dealer portal automation, CapEx payback calculator studio, IoT predictive parts replenishment loops, and live telemetry cockpit.
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl bg-slate-950/80 border border-slate-800">
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-mono text-xs font-bold text-sky-400">STAGE 03 · ONGOING</span>
                      <span className="text-[11px] font-mono text-slate-400">COMPOUNDING VALUE</span>
                    </div>
                    <div className="text-base font-bold text-white mb-1">Enterprise Scale & Compounding Value</div>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      Full commercial GTM transformation, Equipment-as-a-Service (EaaS) rollout, continuous AI optimization, and dedicated Resident Growth Architect deployment.
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
                Global Heavy Robotics & Machinery Manufacturer
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-950 mb-4 font-heading">
              +$82M Qualified CapEx Pipeline & 35% Cycle Compression for an Industrial OEM
            </h3>

            <p className="text-base text-slate-700 leading-relaxed mb-8 max-w-4xl">
              Equipped plant engineering champions with our CapEx payback studio and automated dealer deal registration. Compressed sales cycles from 14 months to 9 months, generating $82M in verified multi-plant contracts and scaling recurring aftermarket service attach by 34% within 90 days.
            </p>

            <Link
              to="/book-consultation"
              className="inline-flex items-center gap-2 text-sky-600 font-bold text-sm hover:text-sky-700 transition-colors group cursor-pointer"
            >
              <span>Read Full Industrial Case Study & Telemetry</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── SECTION 9: CUSTOM INDUSTRY ROADMAP & CTA ── */}
      <section className="py-24 sm:py-32 bg-slate-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-sky-500/10 rounded-full blur-[160px]" />
        </div>

        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6">
              <span className="font-mono text-xs font-bold text-sky-400 uppercase tracking-wider px-3 py-1 rounded-full bg-sky-400/10 border border-sky-400/20 inline-block mb-4">
                CONFIDENTIAL ENGAGEMENT
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-6 font-heading">
                Ready to Architect Industrial-Grade Revenue in Manufacturing & Industry?
              </h2>
              <p className="text-slate-300 text-base sm:text-lg mb-8 leading-relaxed">
                Engage directly with our principal revenue architects. We audit your existing GTM stack, eliminate pipeline leakage, and engineer verifiable production growth.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <Link
                  to="/book-consultation"
                  className="inline-flex items-center gap-2 bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold px-7 py-4 rounded-xl transition-all shadow-lg shadow-sky-500/20 text-sm group cursor-pointer"
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
              <IndustryIntakeForm industryName="Manufacturing & Industrial" accentColorClass="text-sky-400" />
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
