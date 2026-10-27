import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ShieldCheck,
  HeartPulse,
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
  Activity
} from 'lucide-react';
import IndustryIntakeForm from '../../components/forms/IndustryIntakeForm';

export default function HealthcareIndustry() {
  const [activeDomain, setActiveDomain] = useState<number>(0);

  const metrics = [
    {
      num: '40%',
      title: 'Health System Sales Cycle Compression',
      context: 'Achieved through multi-stakeholder clinical dossiers and automated CFO value models.'
    },
    {
      num: '+$68M',
      title: 'Qualified Health System Enterprise Pipeline',
      context: 'Generated across hospital integrated delivery networks (IDNs) and clinical provider groups.'
    },
    {
      num: '100%',
      title: 'Zero-PHI HIPAA Compliance Adherence',
      context: 'Completely anonymized behavioral attribution and BAA-secured pipeline telemetry.'
    },
    {
      num: '88.5%',
      title: 'Value Analysis Committee Approval Rate',
      context: 'HEOR economic models eliminating procurement stalls across CMO, CFO, and CIO reviewers.'
    }
  ];

  const failureModes = [
    {
      num: '01',
      title: 'HIPAA & Patient Privacy Marketing Friction',
      impact: 'Fear of statutory enforcement, HHS fines, and brand damage completely halts outbound and conversion tracking experimentation.',
      whyGenericFails: 'Standard digital marketing agencies install commercial tracking pixels that inadvertently transmit protected health information (PHI) to third-party ad networks.'
    },
    {
      num: '02',
      title: 'Elongated 12–24 Month Clinical Sales Cycles',
      impact: 'Commercial runway evaporates while clinical pilots remain trapped in uncompensated trials without clear procurement conversion gates.',
      whyGenericFails: 'Generic SaaS sales methodologies fail to arm champion clinicians with health economics and outcomes research (HEOR) justification for hospital CFOs.'
    },
    {
      num: '03',
      title: 'Multi-Stakeholder Buyer Committee Vetoes',
      impact: 'Chief Medical Officers, CFOs, IT security directors, and nursing leadership each exercise unilateral veto power over new clinical technologies.',
      whyGenericFails: 'Sellers pitch clinical features to financial executives and technical specs to doctors, creating conflicting alignment across the evaluation committee.'
    },
    {
      num: '04',
      title: 'FDA Promotion & Scientific Exchange Boundaries',
      impact: 'Severe regulatory warning letters and legal exposure caused by sales reps making off-label or unvalidated promotional claims.',
      whyGenericFails: 'Off-the-shelf growth hackers ignore FDA guidelines governing the strict boundary between promotional commercial messaging and scientific exchange.'
    }
  ];

  const solutions = [
    {
      num: '01',
      title: 'Zero-PHI Attribution & BAA-Certified Telemetry',
      architecture: 'Client-side cryptographic anonymization, zero-PHI data pipelines, and Business Associate Agreement (BAA) infrastructure.',
      outcome: '100% HIPAA-compliant demand generation capturing full enterprise buyer attribution with zero regulatory or privacy exposure.'
    },
    {
      num: '02',
      title: 'HEOR Economic Impact Studios & Pilot Conversion Gates',
      architecture: 'Peer-reviewed health economic outcomes research (HEOR) models, length-of-stay reduction calculators, and pre-agreed contract gates.',
      outcome: '40% compression in enterprise health system procurement timelines, transitioning pilots into recurring multi-year contracts.'
    },
    {
      num: '03',
      title: 'Multi-Threaded Buying Committee Portals',
      architecture: 'Role-specific evaluation workspaces providing CFO-level payback projections, CMO clinical proof dossiers, and CISO FHIR/HL7 security audits.',
      outcome: '88.5% approval pass rate across health system value analysis committees and procurement boards.'
    },
    {
      num: '04',
      title: 'Automated Clinical Claim Verification & Governance',
      architecture: 'Automated collateral scanning engines enforcing strict FDA promotional boundaries and peer-reviewed citation requirements.',
      outcome: 'Zero compliance infractions and seamless collaboration between commercial sales operations and medical affairs teams.'
    }
  ];

  const capabilityDomains = [
    {
      name: 'Market & Whitespace Discovery',
      subtitle: 'Mapping provider credentialing records, hospital bed allocations, and clinical budget pockets.',
      capA: {
        title: 'Health System Whitespace Mapping',
        features: ['IDN hospital bed utilization telemetry', 'Payer reimbursement coding trends', 'Clinical specialty budget scoring']
      },
      capB: {
        title: 'Provider Propensity Index',
        features: ['Physician referral network analysis', 'Prescription/procedure volume tracking', 'Clinical trial investigator discovery']
      }
    },
    {
      name: 'Demand & Pipeline Generation',
      subtitle: 'Deploying HIPAA-compliant outbound fleets and specialized clinical engagement funnels.',
      capA: {
        title: 'Compliant Provider Outreach',
        features: ['Zero-PHI message dispatch', 'Medical specialty personalization', 'CME & clinical paper integration']
      },
      capB: {
        title: 'Sub-Second Referral Triage',
        features: ['Automated provider intake', 'Credentialing verification', 'Clinical coordinator calendar routing']
      }
    },
    {
      name: 'Value & Deal Execution',
      subtitle: 'Packaging undeniable clinical proof and health economics for value analysis committees.',
      capA: {
        title: 'HEOR Economic Impact Studio',
        features: ['Length-of-stay reduction models', 'Readmission penalty calculators', 'Peer-reviewed evidence synthesis']
      },
      capB: {
        title: 'Committee Deal Room Agent',
        features: ['CMO, CFO & CISO persona views', 'FHIR/HL7 integration dossiers', 'BAA contract sign-off tracking']
      }
    },
    {
      name: 'Channel & Distribution Economics',
      subtitle: 'Optimizing medical distributor partnerships, GPO contracts, and payer alignment.',
      capA: {
        title: 'GPO & Distributor Economics',
        features: ['Tiered distributor margin models', 'GPO contract compliance tracking', 'Dealer territory protection']
      },
      capB: {
        title: 'Payer Reimbursement Alignment',
        features: ['CPT/HCPCS code adoption strategy', 'Commercial health plan coverage briefs', 'Actuarial cost-savings dossiers']
      }
    },
    {
      name: 'Competitive Intelligence',
      subtitle: 'Deconstructing legacy medical technology vendors and displacing outdated clinical software.',
      capA: {
        title: 'Clinical Moat Teardown',
        features: ['Workflow friction benchmarking', 'EHR integration complexity teardown', 'Clinician burnout scorecards']
      },
      capB: {
        title: 'Battlecard Autopilot',
        features: ['Clinical objection handling scripts', 'Efficacy comparison grids', 'Regulatory clearance battlecards']
      }
    },
    {
      name: 'Revenue Realization & FinOps',
      subtitle: 'Tracking procedure utilization, recurring consumable billings, and value-based shared savings.',
      capA: {
        title: 'Consumable & Procedure Telemetry',
        features: ['Automated reorder triggers', 'Device utilization analytics', 'Contract true-up tracking']
      },
      capB: {
        title: 'HIPAA & Regulatory Audit Cockpit',
        features: ['BAA agreement archive', 'Data access logging', 'Zero-PHI compliance certification']
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
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-teal-500/10 rounded-full blur-[140px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none" />
        </div>

        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-500/10 border border-teal-400/30 text-teal-400 text-xs font-mono font-bold tracking-wider uppercase mb-6 shadow-sm">
              <HeartPulse className="w-3.5 h-3.5" />
              <span>HEALTHCARE & LIFE SCIENCES REVENUE ARCHITECTURE</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.08] mb-6 font-heading">
              Revenue Architecture & GTM Operational Blueprints for{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-cyan-300 to-emerald-300">
                Healthcare & Life Sciences
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed font-normal mb-6">
              ProfitMachines engineers autonomous demand generation, mathematically verified forecast accuracy, and sub-second buyer intent telemetry, meeting the strictest compliance and growth requirements of the healthcare and life sciences sector.
            </p>

            <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 mb-8 max-w-3xl">
              <span className="text-xs font-mono font-bold text-teal-400 uppercase tracking-wider block mb-1">
                STRATEGIC THESIS
              </span>
              <p className="text-sm sm:text-base text-slate-200 font-medium leading-relaxed">
                Accelerating patient acquisition, clinical trial enrollment, and pharma commercial reach within strict regulatory boundaries.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                to="/book-consultation"
                className="inline-flex items-center gap-2 bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold px-7 py-4 rounded-xl transition-all shadow-lg shadow-teal-500/20 text-sm group cursor-pointer"
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
                className="p-6 rounded-2xl bg-slate-950/60 border border-slate-800/80 backdrop-blur-xl shadow-lg relative group hover:border-teal-500/40 transition-all"
              >
                <div className="text-3xl sm:text-4xl font-extrabold text-teal-400 font-mono tracking-tight mb-2">
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
            <div className="font-mono text-xs font-semibold text-teal-600 uppercase tracking-wider mb-2">
              QUALIFICATION MATRIX
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight mb-4 font-heading">
              Target Enterprise Fit & Architecture Scope.
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              We deploy systems-level revenue engineering for enterprise health systems, clinical medtech manufacturers, biopharma leaders, and digital health platforms.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Column 1: Target Organizations & Scale */}
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-teal-50 border border-teal-100 flex items-center justify-center text-teal-600 mb-6">
                  <HeartPulse className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-950 mb-3 font-heading">
                  Target Organizations & Scale
                </h3>
                <div className="space-y-2 mb-6">
                  {['Hospital Networks & Integrated Delivery Networks (IDNs)', 'Medical Device & Clinical Diagnostics Manufacturers', 'Digital Health & Telemedicine Enterprise Platforms', 'Biopharma Commercial Teams & Specialty Therapeutics'].map((org, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs font-medium text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-teal-600 flex-shrink-0" />
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
                  Organizations navigating multi-hospital value analysis committees, EHR integrations (Epic/Cerner), strict IRB approvals, and rigorous FDA promotional reviews.
                </p>
              </div>
            </div>

            {/* Column 2: Decision Makers & Buying Triggers */}
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-teal-50 border border-teal-100 flex items-center justify-center text-teal-600 mb-6">
                  <Users className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-950 mb-3 font-heading">
                  Decision Makers & Buying Triggers
                </h3>
                <div className="space-y-1.5 mb-6">
                  <span className="font-mono text-[10px] text-slate-400 uppercase tracking-wider block mb-1">
                    KEY EXECUTIVE STAKEHOLDERS
                  </span>
                  {['Chief Medical Officer (CMO)', 'VP of Health System Sales', 'Chief Commercial Officer (CCO)', 'Head of Medical Affairs', 'Chief Information Security Officer (CISO)'].map((role, i) => (
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
                  Clinical sales cycles stretching past 18 months, uncompensated health system pilot purgatory, HIPAA compliance audits halting marketing, and missed procurement deadlines.
                </p>
              </div>
            </div>

            {/* Column 3: Technical & Operational Maturity */}
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-teal-50 border border-teal-100 flex items-center justify-center text-teal-600 mb-6">
                  <Cpu className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-950 mb-3 font-heading">
                  Technical & Operational Maturity
                </h3>
                <div className="space-y-3 mb-6">
                  <div className="p-3 rounded-xl bg-white border border-slate-200">
                    <span className="text-xs font-bold text-slate-900 block mb-0.5">Clinical Data Integration</span>
                    <p className="text-xs text-slate-600">FHIR, HL7, and interoperability endpoints linking clinical software directly into enterprise health system workflows.</p>
                  </div>
                  <div className="p-3 rounded-xl bg-white border border-slate-200">
                    <span className="text-xs font-bold text-slate-900 block mb-0.5">BAA Contract Safeguards</span>
                    <p className="text-xs text-slate-600">Signed Business Associate Agreements (BAA) with strict end-to-end encryption in transit and at rest.</p>
                  </div>
                </div>
              </div>
              <div className="pt-4 border-t border-slate-200">
                <span className="font-mono text-[10px] text-slate-400 uppercase tracking-wider block mb-1">
                  REGULATORY COMPLIANCE
                </span>
                <p className="text-xs text-slate-600 leading-relaxed">
                  100% HIPAA and HITECH adherence, FDA promotional boundary enforcement, and SOC2 Type II certified clinical data security.
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
              Four Revenue Failure Modes in Healthcare & Life Sciences.
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              When life science and health tech firms scale, standard commercial playbooks fail. These four structural failure points stall clinical adoption.
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
            <div className="font-mono text-xs font-semibold text-teal-600 uppercase tracking-wider mb-2">
              PRODUCTION ARCHITECTURE
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight mb-4 font-heading">
              Systems-Level Revenue Solutions (Problem → Solution Mapping).
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              We deploy zero-PHI demand architectures and HEOR economic studios to replace generic health tech marketing.
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
                      <span className="font-mono text-xs font-bold px-2.5 py-1 rounded bg-teal-500/20 text-teal-300 border border-teal-400/30">
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
                    <span className="font-mono text-[10px] text-teal-400 uppercase tracking-wider font-bold block mb-1">
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
            <div className="font-mono text-xs font-semibold text-teal-600 uppercase tracking-wider mb-2">
              CAPABILITY CONTINUUM
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight mb-4 font-heading">
              Full-Stack Capability Matrix.
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              Explore our six core revenue architecture domains engineered specifically for healthcare, medical devices, and life sciences.
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
                    ? 'bg-slate-900 text-teal-400 shadow-md'
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
              <span className="font-mono text-xs font-bold text-teal-600 uppercase tracking-wider mb-2 block">
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
                      <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 flex-shrink-0" />
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
                      <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 flex-shrink-0" />
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
              <div className="font-mono text-xs font-semibold text-teal-600 uppercase tracking-wider mb-2">
                MEASURABLE ROI
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight mb-6 font-heading">
                Deterministic Return on Investment.
              </h2>
              <p className="text-base text-slate-600 leading-relaxed mb-8">
                Every healthcare engagement is benchmarked against hard mathematical baselines. We couple fees to verified hospital IDN adoption and sales cycle compression.
              </p>

              <div className="space-y-4">
                {metrics.map((m, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between">
                    <div>
                      <div className="text-sm font-bold text-slate-900">{m.title}</div>
                      <div className="text-xs text-slate-500">{m.context}</div>
                    </div>
                    <div className="text-xl font-bold font-mono text-teal-600 flex-shrink-0 ml-4">
                      {m.num}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Standard 3-Stage Implementation Framework */}
            <div className="lg:col-span-7">
              <div className="p-8 sm:p-10 rounded-3xl bg-slate-900 text-white border border-slate-800 shadow-xl">
                <span className="font-mono text-xs font-bold text-teal-400 uppercase tracking-wider mb-2 block">
                  DEPLOYMENT LIFECYCLE
                </span>
                <h3 className="text-2xl font-bold text-white mb-6 font-heading">
                  Standard 3-Stage Implementation Framework
                </h3>

                <div className="space-y-6">
                  <div className="p-5 rounded-2xl bg-slate-950/80 border border-slate-800">
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-mono text-xs font-bold text-teal-400">STAGE 01 · 2–4 WEEKS</span>
                      <span className="text-[11px] font-mono text-slate-400">BASELINE LOCK</span>
                    </div>
                    <div className="text-base font-bold text-white mb-1">Revenue Diagnostic & Baseline Lock</div>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      Comprehensive clinical sales pipeline audit, HIPAA tracking risk review, HEOR justification gap analysis, and 90-day value roadmap.
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl bg-slate-950/80 border border-slate-800">
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-mono text-xs font-bold text-teal-400">STAGE 02 · 6–12 WEEKS</span>
                      <span className="text-[11px] font-mono text-slate-400">VALUE REALIZATION</span>
                    </div>
                    <div className="text-base font-bold text-white mb-1">Value Realization Sprint</div>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      Deployed zero-PHI outreach fleet, value analysis committee deal rooms, automated FDA promotional review, and live telemetry cockpit.
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl bg-slate-950/80 border border-slate-800">
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-mono text-xs font-bold text-teal-400">STAGE 03 · ONGOING</span>
                      <span className="text-[11px] font-mono text-slate-400">COMPOUNDING VALUE</span>
                    </div>
                    <div className="text-base font-bold text-white mb-1">Enterprise Scale & Compounding Value</div>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      National health system expansion, commercial payer reimbursement alignment, continuous AI optimization, and dedicated Resident Growth Architect deployment.
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
                Tier-1 Clinical AI & Diagnostic Imaging Platform
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-950 mb-4 font-heading">
              40% Cycle Compression & $68M Pipeline for an Enterprise Health AI Platform
            </h3>

            <p className="text-base text-slate-700 leading-relaxed mb-8 max-w-4xl">
              Compressed clinical sales cycles from 16 months down to 9 months by arming champion clinicians with our HEOR economic impact studio. Added $68M in qualified health system pipeline across 14 integrated delivery networks with 100% zero-PHI HIPAA adherence within 90 days.
            </p>

            <Link
              to="/book-consultation"
              className="inline-flex items-center gap-2 text-teal-600 font-bold text-sm hover:text-teal-700 transition-colors group cursor-pointer"
            >
              <span>Read Full Healthcare Case Study & Telemetry</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── SECTION 9: CUSTOM INDUSTRY ROADMAP & CTA ── */}
      <section className="py-24 sm:py-32 bg-slate-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-teal-500/10 rounded-full blur-[160px]" />
        </div>

        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6">
              <span className="font-mono text-xs font-bold text-teal-400 uppercase tracking-wider px-3 py-1 rounded-full bg-teal-400/10 border border-teal-400/20 inline-block mb-4">
                CONFIDENTIAL ENGAGEMENT
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-6 font-heading">
                Ready to Architect Industrial-Grade Revenue in Healthcare & Life Sciences?
              </h2>
              <p className="text-slate-300 text-base sm:text-lg mb-8 leading-relaxed">
                Engage directly with our principal revenue architects. We audit your existing GTM stack, eliminate pipeline leakage, and engineer verifiable production growth.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <Link
                  to="/book-consultation"
                  className="inline-flex items-center gap-2 bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold px-7 py-4 rounded-xl transition-all shadow-lg shadow-teal-500/20 text-sm group cursor-pointer"
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
              <IndustryIntakeForm industryName="Healthcare & Life Sciences" accentColorClass="text-teal-400" />
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
