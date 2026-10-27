import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  DollarSign,
  Shield,
  Users,
  CheckCircle2,
  Lock,
  ArrowRight,
  FileCheck,
  Scale,
  Sparkles,
  ChevronDown,
  ChevronUp,
  Clock,
  Compass,
  Award,
  Zap,
  Cpu,
  UserCheck,
  BarChart3,
} from 'lucide-react';

interface PricingRow {
  model: string;
  base: string;
  variable: string;
  isVariableAccent?: boolean;
  paymentTerms: string;
  minimumCommitment: string;
}

const pricingRows: PricingRow[] = [
  {
    model: 'Advisory & Insight',
    base: 'Fixed fee or monthly retainer',
    variable: '—',
    paymentTerms: '50% upfront or monthly in advance',
    minimumCommitment: '2 wks (sprint) / 3 mo (retainer)'
  },
  {
    model: 'Consulting Services',
    base: 'Fixed per project phase',
    variable: 'Time & materials for open scope',
    paymentTerms: 'Milestone-based (Phase gates)',
    minimumCommitment: '1 project phase'
  },
  {
    model: 'Proof of Value & Performance',
    base: 'Small fixed validation fee',
    variable: '50%–100% credited toward scale',
    isVariableAccent: true,
    paymentTerms: '50% at signature, 50% at gate decision',
    minimumCommitment: '4–8 weeks'
  },
  {
    model: 'Transformation Engagements',
    base: 'Milestone fixed fee (80%)',
    variable: '20% at-risk tied to adoption KPIs',
    isVariableAccent: true,
    paymentTerms: 'Phased: 20% / 30% / 30% / 20%',
    minimumCommitment: '4 months'
  },
  {
    model: 'Outcome-Based Engagement',
    base: 'Reduced base (40%–60% standard rate)',
    variable: 'Success fee 1.5–3× base on verified metric',
    isVariableAccent: true,
    paymentTerms: 'Monthly base + quarterly success true-up',
    minimumCommitment: '2 measurement cycles (6–12 mo)'
  },
  {
    model: 'Joint Risk-Sharing Partnership',
    base: 'Cost-recovery base',
    variable: '15%–30% share of verified incremental gross margin',
    isVariableAccent: true,
    paymentTerms: 'Monthly cost recovery + quarterly true-up',
    minimumCommitment: '9 months'
  },
  {
    model: 'Resident Growth Architects',
    base: 'Monthly embedded rate (70%)',
    variable: '30% at-risk tied to workstream KPIs',
    isVariableAccent: true,
    paymentTerms: 'Monthly in advance with quarterly renewals',
    minimumCommitment: '6 months'
  },
  {
    model: 'Forward Deployed Sales Accelerators',
    base: 'Monthly deployment fee',
    variable: 'Per-metric accelerators (SQL, pipeline $, closed deals)',
    isVariableAccent: true,
    paymentTerms: 'Monthly base + monthly verified performance payout',
    minimumCommitment: '3 months'
  }
];

const guardrails = [
  {
    number: '01',
    title: 'Proof of Value & Proof of Performance Charter',
    description: 'Success metrics, baselines, attribution methods, and gate criteria are defined and signed before kickoff—never retrofitted after data arrives.',
    icon: FileCheck
  },
  {
    number: '02',
    title: 'Outcome Charter Pre-Signature',
    description: 'For Outcome-Based and Joint Risk-Sharing models: KPIs, measurement windows, data access, and client preconditions are locked pre-signature to protect both parties.',
    icon: Scale
  },
  {
    number: '03',
    title: 'Data & Access Preconditions',
    description: 'All outcome- and risk-bearing models require CRM read access, clean baseline data, and a named counterpart. If unmet, KPI obligations are void.',
    icon: Lock
  },
  {
    number: '04',
    title: 'Pre-Agreed Attribution Rules',
    description: 'What counts as sourced versus influenced pipeline is agreed upon before measurement begins—not negotiated after the revenue lands.',
    icon: CheckCircle2
  },
  {
    number: '05',
    title: 'Conversion Credit Guarantee',
    description: 'Proof of Value and Proof of Performance fees credit 50% to 100% against a subsequent larger transformation or outcome engagement. Proof should never be paid for twice.',
    icon: DollarSign
  },
  {
    number: '06',
    title: 'Defined Exit & Off-Ramps',
    description: 'Every model carries a defined exit: Proof of Value go/no-go gates, quarterly out-clauses on retainers, and milestone exits on transformations.',
    icon: Shield
  },
  {
    number: '07',
    title: 'Complete Capability Transfer Clause',
    description: 'On Transformation Engagements, Resident Growth Architects, and Forward Deployed models, all enablement content, code, prompts, and playbooks transfer to client IP at completion. We build machines you own.',
    icon: Award
  }
];

const teamRoles = [
  {
    title: 'Principal / Partner',
    attachedModels: 'Advisory & Insight · Risk-Sharing Governance',
    responsibility: 'Strategic counsel, C-suite advisory, thesis validation, executive decision memos, and quarterly board readouts.',
    icon: UserCheck
  },
  {
    title: 'Engagement Lead',
    attachedModels: 'Consulting Services · Transformation Engagements',
    responsibility: 'End-to-end program governance, deliverable excellence, stakeholder alignment, and cross-workstream coordination.',
    icon: Users
  },
  {
    title: 'Resident Growth Architect',
    attachedModels: 'Resident Growth Architects',
    responsibility: 'Embedded revenue workstream ownership, hands-on execution alongside client teams, and permanent capability transfer.',
    icon: Compass
  },
  {
    title: 'Forward Deployed Sales Accelerator',
    attachedModels: 'Forward Deployed Sales Accelerators',
    responsibility: 'In-market live execution, multi-channel outbound, live enterprise deal progression, and competitive displacement.',
    icon: Zap
  },
  {
    title: 'Automation Engineer',
    attachedModels: 'Proof of Value · Transformation · Outcome-Based · Forward Deployed',
    responsibility: 'Agentic fleets, scoring algorithms, telemetry pipelines, CRM webhook integrations, and predictive models.',
    icon: Cpu
  },
  {
    title: 'Revenue Analyst',
    attachedModels: 'Proof of Value · Outcome-Based · Resident Growth Architects',
    responsibility: 'KPI instrumentation, baseline locking, statistical lift verification, and multi-touch attribution analysis.',
    icon: BarChart3
  },
  {
    title: 'Enablement Lead',
    attachedModels: 'Consulting Services · Transformation · Forward Deployed',
    responsibility: 'Sales curriculum design, live objection workshops, playbook adoption measurement, and manager certification.',
    icon: FileCheck
  },
  {
    title: 'Performance Auditor',
    attachedModels: 'Outcome-Based Engagements · Joint Risk-Sharing',
    responsibility: 'Independent third-party verification of pipeline, revenue, and gross margin movement ensuring fairness for both sides.',
    icon: Scale
  }
];

const onboardingSteps = [
  {
    time: 'Week 0',
    title: 'Fit & Frame Working Session',
    description: '60-minute executive session. We analyze your situation, segment, and stage to name the single discovery layer with highest leverage and the model that matches your risk profile.'
  },
  {
    time: 'Week 0–1',
    title: 'Charter Execution',
    description: 'Scope, success metrics, baselines, attribution rules, preconditions, and clean off-ramps are formally codified. Signed before any delivery resource is scheduled.'
  },
  {
    time: 'Week 1',
    title: 'Baseline Lock',
    description: 'Secure CRM read access, data verification, and metric baseline frozen. Everything evaluated after this date is measured against a locked mathematical reference.'
  },
  {
    time: 'Week 1–2',
    title: 'Deployment & Kickoff',
    description: 'Dedicated pod deployed based on your model: principal, engagement lead, resident architect, forward-deployed squad, or automation pod. Kickoff with internal counterparts.'
  },
  {
    time: 'Weekly',
    title: 'Working Cadence',
    description: 'Weekly operational sync, continuous telemetry dashboard reporting, and a running decision log. Zero surprises at the formal readout.'
  },
  {
    time: 'Gate Review',
    title: 'Go/No-Go & Scale Gate',
    description: 'Formal gate review against charter criteria. Clear options: scale, iterate, transfer capability, or exit cleanly—with credit applied forward.'
  }
];

const trustFaqs = [
  {
    q: 'Can we start small before making a large capital commitment?',
    a: 'Yes. Over 60% of our enterprise relationships begin with a 2-week Advisory & Insight sprint or a 4–8 week Proof of Value experiment. Up to 100% of proof fees credit directly against subsequent transformation work.'
  },
  {
    q: 'How is performance independently verified in outcome-based engagements?',
    a: 'All outcome models lock baseline data, attribution windows, and calculation rules pre-signature in a formal Outcome Charter. An independent performance auditor reviews pipeline logs and CRM timestamps monthly.'
  },
  {
    q: 'What if our CRM data is messy or incomplete?',
    a: 'Clean baseline data is a mandatory precondition before any outcome-bearing model commences. If data is disorganized, we begin with a diagnostic sprint to cleanse pipelines and instrument telemetry before locking performance baselines.'
  },
  {
    q: 'Do your automation agents and forward operators replace our internal team?',
    a: 'Never. Our systems augment your team. The automation track runs autonomous outbound and scoring to feed high-intent leads to your reps, while our consulting track trains your team to close deals and institutionalize the operating system.'
  },
  {
    q: 'How fast can a delivery team or forward squad deploy?',
    a: 'Advisory sprints can start immediately. Proof of Value experiments and Forward Deployed squads deploy within 1–2 weeks of charter execution and baseline lock.'
  },
  {
    q: 'What is the smallest engagement available?',
    a: 'Our smallest entry point is a 2-week Executive Discovery Sprint or a 3-week fixed-scope Fast-Start Discovery Kit (such as the Agency Margin Kit).'
  }
];

export default function EngagementCommercials() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-white text-slate-900 pt-16 lg:pt-[72px]">
      {/* ── SECTION 1: HERO SECTION (60vh, Dark Background, Shield Motif) ── */}
      <section className="relative min-h-[60vh] flex flex-col justify-center bg-slate-50 text-white overflow-hidden border-b border-slate-200 py-16 lg:py-24">
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute inset-0 opacity-[0.18]"
            style={{
              backgroundImage: 'linear-gradient(to right, #334155 1px, transparent 1px), linear-gradient(to bottom, #334155 1px, transparent 1px)',
              backgroundSize: '4rem 4rem'
            }}
          />
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/15 rounded-full blur-[140px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-600/15 rounded-full blur-[140px] pointer-events-none" />
        </div>

        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/30 text-blue-400 text-xs font-mono font-bold tracking-wider uppercase mb-6 shadow-sm">
            <DollarSign className="w-3.5 h-3.5" />
            <span>ENGINEERED ALIGNMENT // GOVERNANCE & PRICING</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.08] mb-6 font-heading max-w-4xl mx-auto">
            Transparent Commercials.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-300">
              Ironclad Guardrails.
            </span>
          </h1>

          <p className="text-base sm:text-lg lg:text-xl text-slate-300 leading-relaxed font-normal mb-8 max-w-2xl mx-auto">
            Alignment is engineered, not hoped for. Every model has a defined pricing structure, a pre-signature charter where risk is involved, and a clean off-ramp.
          </p>

          <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-10 text-xs sm:text-sm font-mono text-slate-300">
            <span className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              No Long-Term Lock-In
            </span>
            <span>·</span>
            <span className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-blue-400" />
              SOC2 Type II Certified
            </span>
            <span>·</span>
            <span className="flex items-center gap-2">
              <Lock className="w-4 h-4 text-cyan-400" />
              Mutual Enterprise NDA
            </span>
          </div>
        </div>
      </section>

      {/* ── SECTION 2: PRICING STRUCTURE TABLE (Signature Component) ── */}
      <section className="py-20 lg:py-28 bg-white border-b border-slate-200">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono uppercase tracking-wider text-blue-600 font-bold">
              Transparent Economics
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 mt-2 mb-4 font-heading">
              How Each Model is Priced
            </h2>
            <p className="text-base text-slate-600">
              Transparent base fee structures, variable risk multipliers, and standard payment schedules across all eight engagement models.
            </p>
          </div>

          <div className="overflow-x-auto rounded-3xl border border-slate-200 bg-white shadow-xl">
            <table className="w-full text-left text-xs sm:text-sm text-slate-800">
              <thead className="bg-white text-white uppercase font-mono text-xs border-b border-slate-200 sticky top-0">
                <tr>
                  <th scope="col" className="px-6 py-4 font-bold">Model</th>
                  <th scope="col" className="px-6 py-4 font-bold">Base Fee</th>
                  <th scope="col" className="px-6 py-4 font-bold text-cyan-400">Variable Component</th>
                  <th scope="col" className="px-6 py-4 font-bold">Payment Terms</th>
                  <th scope="col" className="px-6 py-4 font-bold">Minimum Commitment</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {pricingRows.map((row, idx) => {
                  const isEven = idx % 2 === 0;
                  return (
                    <tr
                      key={idx}
                      className={`hover:bg-blue-50/50 transition-colors ${
                        isEven ? 'bg-white' : 'bg-slate-50/60'
                      }`}
                    >
                      <td className="px-6 py-4 font-bold text-slate-900 whitespace-nowrap">
                        {row.model}
                      </td>
                      <td className="px-6 py-4 text-slate-700">
                        {row.base}
                      </td>
                      <td className="px-6 py-4 font-medium">
                        {row.isVariableAccent ? (
                          <span className="text-blue-700 font-bold bg-blue-50 px-2.5 py-1 rounded-md border border-blue-200/60">
                            {row.variable}
                          </span>
                        ) : (
                          <span className="text-slate-400">{row.variable}</span>
                        )}
                      </td>
                      <td className="px-6 py-4 text-slate-600">
                        {row.paymentTerms}
                      </td>
                      <td className="px-6 py-4 font-mono text-xs text-slate-700 font-bold">
                        {row.minimumCommitment}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          <p className="text-xs text-slate-400 mt-4 text-center">
            * Note: Percentages and variable ranges represent standard engagement terms. Final terms, downside caps, and success criteria are formalized in a mutually executed Engagement Charter.
          </p>
        </div>
      </section>

      {/* ── SECTION 3: THE 7 GUARDRAILS (Numbered Card List) ── */}
      <section className="py-20 lg:py-28 bg-slate-50 border-b border-slate-200">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono uppercase tracking-wider text-blue-600 font-bold">
              Institutional Governance
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 mt-2 mb-4 font-heading">
              Seven Standard Guardrails
            </h2>
            <p className="text-base text-slate-600">
              Contractual safety mechanisms embedded in every engagement to guarantee transparency, data protection, and fair exit criteria.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {guardrails.map((g) => {
              const Icon = g.icon;
              return (
                <div
                  key={g.number}
                  className="rounded-3xl bg-white border border-slate-200 p-7 flex flex-col justify-between hover:border-blue-400 hover:shadow-xl transition-all group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xl font-mono font-extrabold text-blue-600">
                        {g.number}
                      </span>
                      <div className="w-9 h-9 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600 group-hover:scale-105 transition-transform">
                        <Icon className="w-4 h-4" />
                      </div>
                    </div>

                    <h3 className="text-base font-bold text-slate-900 mb-2">
                      {g.title}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pt-3 border-t border-slate-100">
                    {g.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── SECTION 4: TEAM ARCHITECTURE (Grid of 8 Role Cards: 2 Rows x 4 Columns) ── */}
      <section className="py-20 lg:py-28 bg-white border-b border-slate-200">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono uppercase tracking-wider text-blue-600 font-bold">
              Talent Architecture
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 mt-2 mb-4 font-heading">
              Who Works on Your Engagement
            </h2>
            <p className="text-base text-slate-600">
              Specialized practitioners matched to specific model requirements. Zero generalist overhead.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamRoles.map((role, idx) => {
              const Icon = role.icon;
              return (
                <div
                  key={idx}
                  className="rounded-2xl bg-slate-50 border border-slate-200 p-6 flex flex-col justify-between hover:border-blue-400 hover:shadow-md transition-all group"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600 mb-4 group-hover:scale-105 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>

                    <h3 className="text-base font-bold text-slate-900 mb-1">
                      {role.title}
                    </h3>

                    <div className="mb-4">
                      <span className="text-[10px] font-mono uppercase text-slate-400 font-bold block mb-0.5">
                        Attached Models:
                      </span>
                      <p className="text-xs text-blue-700 font-semibold leading-snug">
                        {role.attachedModels}
                      </p>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-slate-200/80">
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {role.responsibility}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── SECTION 5: ONBOARDING TIMELINE (Vertical Timeline with 6 Nodes) ── */}
      <section className="py-20 lg:py-28 bg-white text-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-xs font-mono uppercase tracking-wider text-blue-400 font-bold">
              Deployment Cadence
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mt-2 mb-4 font-heading">
              How an Engagement Starts
            </h2>
            <p className="text-base text-slate-400">
              From initial 60-minute fit review to baseline freeze, telemetry deployment, and formal gate decision.
            </p>
          </div>

          <div className="relative pl-8 sm:pl-10 space-y-8 before:absolute before:left-3 sm:before:left-4 before:top-3 before:bottom-3 before:w-0.5 before:bg-slate-700">
            {onboardingSteps.map((step, idx) => (
              <div key={idx} className="relative">
                <span className="absolute -left-8 sm:-left-10 top-1.5 w-3.5 h-3.5 rounded-full bg-blue-500 ring-4 ring-slate-900" />
                
                <div className="p-6 rounded-2xl bg-slate-50/80 border border-slate-200 shadow-md">
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider">
                      {step.time}
                    </span>
                    <span className="text-[10px] font-mono text-slate-500">Step 0{idx + 1}</span>
                  </div>
                  <h4 className="text-base font-bold text-white mb-1.5">
                    {step.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 6: TRUST FAQ (Clean Expandable Accordion) ── */}
      <section className="py-20 lg:py-28 bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-xs font-mono uppercase tracking-wider text-blue-600 font-bold">
              Direct Answers
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2 mb-4 font-heading">
              Frequently Asked Questions
            </h2>
            <p className="text-base text-slate-600">
              Clear answers regarding pricing governance, data preconditions, and engagement ramp time.
            </p>
          </div>

          <div className="space-y-4">
            {trustFaqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-slate-200 bg-slate-50 overflow-hidden transition-all"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 font-bold text-slate-900 hover:text-blue-600 transition-colors cursor-pointer"
                  >
                    <span className="text-sm sm:text-base leading-snug">{faq.q}</span>
                    {isOpen ? (
                      <ChevronUp className="w-5 h-5 text-blue-600 shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />
                    )}
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 pt-2 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-200/60 bg-white">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── SECTION 7: FINAL CTA ── */}
      <section className="py-20 bg-slate-50 text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4 font-heading">
            Ready to Deploy Your Autonomous Revenue OS?
          </h2>
          <p className="text-slate-300 text-base max-w-2xl mx-auto mb-8">
            Join forward-thinking enterprise teams replacing fragmented tools with a unified, self-learning GTM intelligence infrastructure. No long-term lock-in. SOC2 Type II Certified. Mutual Enterprise NDA.
          </p>

          <div className="flex flex-wrap justify-center items-center gap-4 mb-10">
            <Link
              to="/book-consultation"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold px-7 py-3.5 rounded-xl transition-all shadow-lg shadow-blue-600/30 text-sm group"
            >
              <span>Schedule Executive Consultation</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 text-white font-bold px-6 py-3.5 rounded-xl transition-all text-sm border border-white/15"
            >
              <span>Talk to Principal Architect</span>
            </Link>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-10 text-xs text-slate-400 font-mono">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              No Long-Term Lock-in
            </span>
            <span>·</span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
              SOC2 Type II Certified
            </span>
            <span>·</span>
            <span className="flex items-center gap-1.5">
              <Lock className="w-3.5 h-3.5 text-cyan-400" />
              Mutual Enterprise NDA
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}
