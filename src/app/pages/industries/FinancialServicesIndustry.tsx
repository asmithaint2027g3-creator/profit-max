import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ShieldCheck,
  Landmark,
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
  DollarSign
} from 'lucide-react';
import IndustryIntakeForm from '../../components/forms/IndustryIntakeForm';

export default function FinancialServicesIndustry() {
  const [activeDomain, setActiveDomain] = useState<number>(0);

  const metrics = [
    {
      num: '+$140M',
      title: 'Quarterly Qualified AUM & Asset Inflows',
      context: 'Generated through predictive accredited propensity scoring and institutional fiduciary proof centers.'
    },
    {
      num: '38%',
      title: 'Customer Acquisition Cost (CAC) Reduction',
      context: 'Achieved by weeding out non-qualified credit and unaccredited retail traffic prior to underwriting.'
    },
    {
      num: '99.4%',
      title: 'Underwriting Pre-Screen Rigor',
      context: 'Automated telemetry validating borrower and investor suitability before sales advisor contact.'
    },
    {
      num: '0',
      title: 'Regulatory Sanctions & Compliance Infractions',
      context: '100% adherence to SEC, FINRA, FTC, and state banking promotional disclosure guidelines.'
    }
  ];

  const failureModes = [
    {
      num: '01',
      title: 'Ballooning CAC in Hyper-Saturated Capital Markets',
      impact: 'Customer acquisition costs in fintech and wealth management rank among the highest globally, eroding net interest margins.',
      whyGenericFails: 'Generic digital agencies bid blindly on generic high-intent keywords, driving low-intent retail applicants that stall loan underwriting.'
    },
    {
      num: '02',
      title: 'Regulatory Marketing Compliance & Audit Friction',
      impact: 'Regulatory investigations, heavy statutory fines, halted promotional campaigns, and brand reputation impairment.',
      whyGenericFails: 'Standard growth marketers make un-vetted claims or ignore territory-specific disclosure rules (e.g. SEC, FINRA, FTC), treating compliance as an afterthought.'
    },
    {
      num: '03',
      title: 'Prolonged Trust-Building Cycles & Drop-off Friction',
      impact: 'High-net-worth individuals and corporate treasurers abandon onboarding funnels during cumbersome manual document collection.',
      whyGenericFails: 'Standard intake workflows hit prospects with rigid upfront KYC walls rather than progressive disclosure architectures that demonstrate preliminary approval terms.'
    },
    {
      num: '04',
      title: 'Black-Box Lead Scoring & Underwriting Waste',
      impact: 'Relationship managers spend 60%+ of their time pursuing unqualified leads with inadequate liquidity or flawed credit metrics.',
      whyGenericFails: 'Off-the-shelf CRM scoring tools evaluate superficial webpage views rather than mathematically verified capital readiness and balance sheet capacity.'
    }
  ];

  const solutions = [
    {
      num: '01',
      title: 'Accredited Propensity Scoring & Micro-Segment Routing',
      architecture: 'Machine learning propensity models evaluating pre-screened credit, liquidity triggers, and institutional asset allocations.',
      outcome: '38% reduction in accredited CAC while scaling qualified multi-million-dollar depository and lending pipelines.'
    },
    {
      num: '02',
      title: 'Compliance-Grade GTM Operations & Claims Review SLA',
      architecture: 'Jurisdictional marketing guardrails, automated disclosure insertion engines, and guaranteed 24-hour compliance review workflows.',
      outcome: '100% audit-ready promotional campaigns with zero SEC or FINRA sanctions across all active client acquisition channels.'
    },
    {
      num: '03',
      title: 'Progressive KYC Onboarding & Institutional Value Studios',
      architecture: 'Interactive capital yield calculators, third-party custody attestations, and friction-free progressive disclosure onboarding.',
      outcome: '64% increase in completed onboarding funnels for high-net-worth and enterprise commercial treasury accounts.'
    },
    {
      num: '04',
      title: 'Algorithmic Capital Readiness Telemetry',
      architecture: 'Pre-underwriting data lake integration validating corporate revenue, verified bank connectivity, and debt-to-capital ratios.',
      outcome: '99.4% underwriting qualification precision, eliminating wasted relationship manager outreach on non-viable prospects.'
    }
  ];

  const capabilityDomains = [
    {
      name: 'Market & Whitespace Discovery',
      subtitle: 'Mapping unallocated commercial capital pools, RIA wealth networks, and fintech whitespace.',
      capA: {
        title: 'Capital Pool Whitespace Mapping',
        features: ['Institutional liquidity flow analysis', 'Regional wealth concentration mapping', 'Competitor fee schedule audit']
      },
      capB: {
        title: 'Accredited Propensity Scoring',
        features: ['Liquidity event detection', 'Corporate balance sheet telemetry', 'Executive wealth transition signals']
      }
    },
    {
      name: 'Demand & Pipeline Generation',
      subtitle: 'Deploying compliance-approved outbound fleets and high-trust institutional funnels.',
      capA: {
        title: 'Fiduciary Outbound Orchestration',
        features: ['Pre-cleared message templates', 'Role-tailored institutional sequencing', 'Automated disclaimer insertion']
      },
      capB: {
        title: 'Sub-Second Underwriting Routing',
        features: ['Instant credit pre-screening', 'Accredited lead triage', 'Executive advisor calendar booking']
      }
    },
    {
      name: 'Value & Deal Execution',
      subtitle: 'Arming investment committees and corporate CFOs with undeniable yield and security proof.',
      capA: {
        title: 'Institutional Business Case Studio',
        features: ['Yield & fee comparison models', 'Fiduciary compliance audit packets', 'Custody & insurance verification']
      },
      capB: {
        title: 'Deal Intelligence & Risk Scoring',
        features: ['Counterparty risk analysis', 'Deal committee gap alerts', 'Vesting & commit timeline tracking']
      }
    },
    {
      name: 'Channel & Distribution Economics',
      subtitle: 'Scaling RIA networks, broker-dealer alliances, and fintech API distribution partnerships.',
      capA: {
        title: 'RIA & Broker-Dealer Partnerships',
        features: ['Co-marketing compliance kits', 'Revenue-share margin modeling', 'Partner deal registration portals']
      },
      capB: {
        title: 'Embedded Finance Co-Selling',
        features: ['ERP and SaaS integration pipelines', 'Software partner incentive design', 'Joint pipeline tracking']
      }
    },
    {
      name: 'Competitive Intelligence',
      subtitle: 'Deconstructing legacy bank fee structures and displacing slow institutional incumbents.',
      capA: {
        title: 'Fee Schedule Teardown',
        features: ['Hidden bank fee exposure', 'Execution speed benchmarking', 'Counterparty safety battlecards']
      },
      capB: {
        title: 'Battlecard Autopilot',
        features: ['Dynamic advisor objection scripts', 'Fiduciary comparison matrices', 'Live regulatory update alerts']
      }
    },
    {
      name: 'Revenue Realization & FinOps',
      subtitle: 'Continuous monitoring of Assets Under Management (AUM), net interest margin, and LTV.',
      capA: {
        title: 'AUM Retention & Net Yield Telemetry',
        features: ['Early-warning asset outflow alerts', 'Spread margin optimization', 'Client account expansion tracking']
      },
      capB: {
        title: 'Regulatory Audit Reporting Cockpit',
        features: ['Immutable compliance logs', 'Ad disclosure timestamping', 'PCI-DSS & SOC2 attestation hub']
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
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />
        </div>

        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-400/30 text-amber-400 text-xs font-mono font-bold tracking-wider uppercase mb-6 shadow-sm">
              <Landmark className="w-3.5 h-3.5" />
              <span>FINANCIAL SERVICES & FINTECH REVENUE ARCHITECTURE</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.08] mb-6 font-heading">
              Revenue Architecture & GTM Operational Blueprints for{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-300 to-orange-300">
                Financial Services
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed font-normal mb-6">
              ProfitMachines engineers autonomous demand generation, mathematically verified forecast accuracy, and sub-second buyer intent telemetry, meeting the strictest compliance and growth requirements of the financial services sector.
            </p>

            <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 mb-8 max-w-3xl">
              <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-wider block mb-1">
                STRATEGIC THESIS
              </span>
              <p className="text-sm sm:text-base text-slate-200 font-medium leading-relaxed">
                High-velocity, trust-based pipeline generation that strictly adheres to financial regulatory marketing constraints.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                to="/book-consultation"
                className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-7 py-4 rounded-xl transition-all shadow-lg shadow-amber-500/20 text-sm group cursor-pointer"
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
                className="p-6 rounded-2xl bg-slate-950/60 border border-slate-800/80 backdrop-blur-xl shadow-lg relative group hover:border-amber-500/40 transition-all"
              >
                <div className="text-3xl sm:text-4xl font-extrabold text-amber-400 font-mono tracking-tight mb-2">
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
            <div className="font-mono text-xs font-semibold text-amber-600 uppercase tracking-wider mb-2">
              QUALIFICATION MATRIX
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight mb-4 font-heading">
              Target Enterprise Fit & Architecture Scope.
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              We deploy systems-level revenue engineering for financial institutions, wealth managers, digital lenders, and high-growth FinTech enterprises.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Column 1: Target Organizations & Scale */}
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-amber-50 border border-amber-100 flex items-center justify-center text-amber-600 mb-6">
                  <Landmark className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-950 mb-3 font-heading">
                  Target Organizations & Scale
                </h3>
                <div className="space-y-2 mb-6">
                  {['Digital Lending & Alternative Credit Platforms', 'Payment Processors & Gateway Infrastructure', 'Wealth Management Platforms & Registered Investment Advisors (RIA)', 'Neo-Banks, InsurTech & Commercial FinTech Platforms'].map((org, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs font-medium text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-amber-600 flex-shrink-0" />
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
                  Institutions processing millions in daily fund transfers across hybrid banking rails with strict fiduciary and multi-state compliance liabilities.
                </p>
              </div>
            </div>

            {/* Column 2: Decision Makers & Buying Triggers */}
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-amber-50 border border-amber-100 flex items-center justify-center text-amber-600 mb-6">
                  <Users className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-950 mb-3 font-heading">
                  Decision Makers & Buying Triggers
                </h3>
                <div className="space-y-1.5 mb-6">
                  <span className="font-mono text-[10px] text-slate-400 uppercase tracking-wider block mb-1">
                    KEY EXECUTIVE STAKEHOLDERS
                  </span>
                  {['Chief Revenue Officer (CRO)', 'Head of Institutional Wealth', 'Chief Marketing Officer (CMO)', 'VP of Credit & Underwriting', 'Chief Compliance Officer (CCO)'].map((role, i) => (
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
                  Ballooning CAC on paid search, regulatory scrutiny demanding pre-cleared promotional assets, high funnel drop-offs during KYC, and unverified pipeline forecasting.
                </p>
              </div>
            </div>

            {/* Column 3: Technical & Operational Maturity */}
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-amber-50 border border-amber-100 flex items-center justify-center text-amber-600 mb-6">
                  <Cpu className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-950 mb-3 font-heading">
                  Technical & Operational Maturity
                </h3>
                <div className="space-y-3 mb-6">
                  <div className="p-3 rounded-xl bg-white border border-slate-200">
                    <span className="text-xs font-bold text-slate-900 block mb-0.5">Core Banking & CRM Integration</span>
                    <p className="text-xs text-slate-600">Salesforce Financial Services Cloud, Plaid, or bespoke loan origination systems with automated pipeline telemetry.</p>
                  </div>
                  <div className="p-3 rounded-xl bg-white border border-slate-200">
                    <span className="text-xs font-bold text-slate-900 block mb-0.5">Fiduciary Data Cleanrooms</span>
                    <p className="text-xs text-slate-600">Zero-trust architecture ensuring prospective client financial records remain encrypted and tamper-evident.</p>
                  </div>
                </div>
              </div>
              <div className="pt-4 border-t border-slate-200">
                <span className="font-mono text-[10px] text-slate-400 uppercase tracking-wider block mb-1">
                  REGULATORY COMPLIANCE
                </span>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Strict SEC, FINRA, FTC, PCI-DSS Level 1, and state banking licensing compliance with automated audit logging.
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
              Four Revenue Failure Modes in Financial Services.
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              When financial institutions attempt digital scale, standard demand generation collapses under compliance and trust hurdles. These four failure points stall growth.
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
            <div className="font-mono text-xs font-semibold text-amber-600 uppercase tracking-wider mb-2">
              PRODUCTION ARCHITECTURE
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight mb-4 font-heading">
              Systems-Level Revenue Solutions (Problem → Solution Mapping).
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              We engineer compliance-grade GTM engines and predictive capital readiness telemetry to replace unverified lead generation.
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
                      <span className="font-mono text-xs font-bold px-2.5 py-1 rounded bg-amber-500/20 text-amber-300 border border-amber-400/30">
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
                    <span className="font-mono text-[10px] text-amber-400 uppercase tracking-wider font-bold block mb-1">
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
            <div className="font-mono text-xs font-semibold text-amber-600 uppercase tracking-wider mb-2">
              CAPABILITY CONTINUUM
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight mb-4 font-heading">
              Full-Stack Capability Matrix.
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              Explore our six core revenue architecture domains engineered specifically for financial services, fintech, and asset management institutions.
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
                    ? 'bg-slate-900 text-amber-400 shadow-md'
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
              <span className="font-mono text-xs font-bold text-amber-600 uppercase tracking-wider mb-2 block">
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
                      <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 flex-shrink-0" />
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
                      <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 flex-shrink-0" />
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
              <div className="font-mono text-xs font-semibold text-amber-600 uppercase tracking-wider mb-2">
                MEASURABLE ROI
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight mb-6 font-heading">
                Deterministic Return on Investment.
              </h2>
              <p className="text-base text-slate-600 leading-relaxed mb-8">
                Every financial services engagement is benchmarked against hard mathematical baselines. We couple fees to verified AUM inflows and zero compliance infractions.
              </p>

              <div className="space-y-4">
                {metrics.map((m, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between">
                    <div>
                      <div className="text-sm font-bold text-slate-900">{m.title}</div>
                      <div className="text-xs text-slate-500">{m.context}</div>
                    </div>
                    <div className="text-xl font-bold font-mono text-amber-600 flex-shrink-0 ml-4">
                      {m.num}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Standard 3-Stage Implementation Framework */}
            <div className="lg:col-span-7">
              <div className="p-8 sm:p-10 rounded-3xl bg-slate-900 text-white border border-slate-800 shadow-xl">
                <span className="font-mono text-xs font-bold text-amber-400 uppercase tracking-wider mb-2 block">
                  DEPLOYMENT LIFECYCLE
                </span>
                <h3 className="text-2xl font-bold text-white mb-6 font-heading">
                  Standard 3-Stage Implementation Framework
                </h3>

                <div className="space-y-6">
                  <div className="p-5 rounded-2xl bg-slate-950/80 border border-slate-800">
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-mono text-xs font-bold text-amber-400">STAGE 01 · 2–4 WEEKS</span>
                      <span className="text-[11px] font-mono text-slate-400">BASELINE LOCK</span>
                    </div>
                    <div className="text-base font-bold text-white mb-1">Revenue Diagnostic & Baseline Lock</div>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      Comprehensive promotional compliance audit, accredited applicant drop-off review, underwriting yield scorecard, and 90-day value roadmap.
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl bg-slate-950/80 border border-slate-800">
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-mono text-xs font-bold text-amber-400">STAGE 02 · 6–12 WEEKS</span>
                      <span className="text-[11px] font-mono text-slate-400">VALUE REALIZATION</span>
                    </div>
                    <div className="text-base font-bold text-white mb-1">Value Realization Sprint</div>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      Deployed pre-screened accredited intent scoring, institutional deal room memos, automated compliance disclaimer insertion, and live telemetry cockpit.
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl bg-slate-950/80 border border-slate-800">
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-mono text-xs font-bold text-amber-400">STAGE 03 · ONGOING</span>
                      <span className="text-[11px] font-mono text-slate-400">COMPOUNDING VALUE</span>
                    </div>
                    <div className="text-base font-bold text-white mb-1">Enterprise Scale & Compounding Value</div>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      Full commercial GTM transformation, multi-jurisdiction passporting, continuous AI optimization, and dedicated Resident Growth Architect deployment.
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
                Tier-1 Digital Wealth & Commercial Lending Platform
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-950 mb-4 font-heading">
              +$180M Qualified Inflows & 38% CAC Reduction with Zero Compliance Flags
            </h3>

            <p className="text-base text-slate-700 leading-relaxed mb-8 max-w-4xl">
              Re-architected the borrower and depositor acquisition funnels by implementing accredited propensity scoring and automated claims review SLAs. Slashed customer acquisition costs by 38%, added $180M in qualified quarterly asset inflows, and maintained 100% SEC/FINRA audit pass rates within 90 days.
            </p>

            <Link
              to="/book-consultation"
              className="inline-flex items-center gap-2 text-amber-600 font-bold text-sm hover:text-amber-700 transition-colors group cursor-pointer"
            >
              <span>Read Full Financial Services Case Study & Telemetry</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── SECTION 9: CUSTOM INDUSTRY ROADMAP & CTA ── */}
      <section className="py-24 sm:py-32 bg-slate-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-amber-500/10 rounded-full blur-[160px]" />
        </div>

        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6">
              <span className="font-mono text-xs font-bold text-amber-400 uppercase tracking-wider px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/20 inline-block mb-4">
                CONFIDENTIAL ENGAGEMENT
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-6 font-heading">
                Ready to Architect Industrial-Grade Revenue in Financial Services?
              </h2>
              <p className="text-slate-300 text-base sm:text-lg mb-8 leading-relaxed">
                Engage directly with our principal revenue architects. We audit your existing GTM stack, eliminate pipeline leakage, and engineer verifiable production growth.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <Link
                  to="/book-consultation"
                  className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-7 py-4 rounded-xl transition-all shadow-lg shadow-amber-500/20 text-sm group cursor-pointer"
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
              <IndustryIntakeForm industryName="Financial Services" accentColorClass="text-amber-400" />
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
