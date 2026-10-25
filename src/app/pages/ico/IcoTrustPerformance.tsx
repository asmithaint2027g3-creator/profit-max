import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  ShieldCheck,
  ArrowRight,
  Lock,
  Scale,
  CheckCircle2,
  AlertTriangle,
  BarChart3,
  TrendingUp,
  FileText,
  Clock,
  Compass,
  Coins,
  Cpu,
  Layers,
  ChevronRight,
  Zap,
  Globe,
  Sliders,
  Eye,
  Activity,
  FileSpreadsheet,
  AlertCircle,
  HelpCircle,
  ArrowUpRight
} from 'lucide-react';

export default function IcoTrustPerformance() {
  const location = useLocation();

  useEffect(() => {
    document.title = 'Trust, Compliance & Performance | ProfitMachines Crypto Protocol';
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

  const jurisdictionalGuardrails = [
    {
      region: 'European Union',
      framework: 'MiCA (Markets in Crypto-Assets)',
      status: 'Active Regulatory Enforcement',
      points: [
        'Mandatory crypto-asset whitepaper notification and publication standards',
        'Strict prohibition of misleading promotional claims regarding future performance',
        'Explicit risk disclosure requirements stating loss of total capital is possible',
        'Reverse solicitation restrictions applied to cross-border marketing initiatives'
      ]
    },
    {
      region: 'United Arab Emirates',
      framework: 'VARA (Virtual Assets Regulatory Authority)',
      status: 'Mandatory Marketing Regulations',
      points: [
        'Marketing approval requirements prior to public dissemination within the UAE',
        'Prohibition of marketing targeting retail non-accredited users without warnings',
        'Clear identification of entity regulatory status and licensed jurisdiction',
        'Mandatory prominent risk disclaimers across all digital, video, and social channels'
      ]
    },
    {
      region: 'United States',
      framework: 'SEC & CFTC Guidelines / Howey Doctrine',
      status: 'Active Enforcement Precedent',
      points: [
        'Strict exclusion of US persons from unexempt public token sales and airdrops',
        'Zero promises of passive profits derived solely from entrepreneurial efforts of others',
        'Clear separation of promotional marketing from investment solicitation materials',
        'Mandatory geofencing, IP blocking, and wallet screening for US jurisdictions'
      ]
    },
    {
      region: 'India',
      framework: 'ASCI Guidelines & VDA Tax Framework',
      status: 'Self-Regulatory Code & Tax Compliance',
      points: [
        'Prominent standardized warning disclaimer occupying minimum 1/5th of display screen/audio length',
        'Strict prohibition of terms such as "currency", "securities", or "deposits" in promotional copy',
        'Zero depiction of guaranteed returns or comparing VDA investments to regulated savings accounts',
        'Clear disclosure of 1% TDS and 30% flat capital gains tax applicability'
      ]
    }
  ];

  const reviewSlaSteps = [
    {
      step: '01',
      title: 'Creative Submission',
      desc: 'Campaign drafts, creator briefs, and social copy ingested into the compliance workflow queue.'
    },
    {
      step: '02',
      title: 'Claims & Guardrail Check',
      desc: 'Linguistic filtering detecting price predictions, unverified APY promises, or non-compliant comparisons.'
    },
    {
      step: '03',
      title: 'Jurisdiction & Disclosure Audit',
      desc: 'Verifying market-specific warning text, font sizes, and mandatory creator commercial disclosure tags (#ad).'
    },
    {
      step: '04',
      title: 'Documented Sign-Off',
      desc: 'Formal audit stamp and hash record logged prior to public distribution (standard 24–48h review turnaround SLA).'
    }
  ];

  const kpiCategories = [
    {
      category: 'Awareness',
      metrics: [
        { name: 'Reach & Impressions', calc: 'Total verified impressions across approved media', source: 'Channel APIs', period: 'Weekly' },
        { name: 'Relevant Website Traffic', calc: 'Unique non-bot visitors to documentation & portal', source: 'Web Analytics', period: 'Weekly' },
        { name: 'Content Engagement', calc: 'Shares, comments, and average watch time on research', source: 'Social Analytics', period: 'Bi-weekly' }
      ]
    },
    {
      category: 'Acquisition',
      metrics: [
        { name: 'Qualified Inquiries', calc: 'Verified inbound inquiries meeting ICP criteria', source: 'CRM', period: 'Monthly' },
        { name: 'Cost per Lead (CPL)', calc: 'Total channel spend divided by qualified inquiries', source: 'Ad / Spend Logs', period: 'Monthly' },
        { name: 'Landing-Page Conversion', calc: 'Percentage of unique visitors completing action', source: 'Funnel Telemetry', period: 'Weekly' }
      ]
    },
    {
      category: 'Community',
      metrics: [
        { name: 'Relevant Community Growth', calc: 'Net new human-verified members on Discord/TG', source: 'Bot Screening Logs', period: 'Weekly' },
        { name: 'Meaningful Engagement', calc: 'Active chatter ratio and technical questions asked', source: 'Chat Telemetry', period: 'Weekly' },
        { name: 'Activity Participation', calc: 'Attendance in AMAs, Spaces, and community votes', source: 'Event Logs', period: 'Monthly' }
      ]
    },
    {
      category: 'Conversion',
      metrics: [
        { name: 'Qualified Lead Progression', calc: 'MQLs transitioning into active diligence and SQLs', source: 'Sales Pipeline', period: 'Monthly' },
        { name: 'Completed Target Actions', calc: 'Whitelist completions, testnet transactions, or deposits', source: 'On-Chain Ledger', period: 'Weekly' },
        { name: 'Funnel Conversion Rate', calc: 'Conversion efficiency from step to step', source: 'Funnel Tracker', period: 'Monthly' }
      ]
    },
    {
      category: 'Retention',
      metrics: [
        { name: 'Returning Users / Participants', calc: 'Wallets active in consecutive 30-day windows', source: 'On-Chain Activity', period: 'Monthly' },
        { name: 'Repeat Engagement', calc: 'Repeat protocol interactions, staking, or governance', source: 'Smart Contract Logs', period: 'Monthly' },
        { name: 'Cohort Retention Duration', calc: 'Percentage of cohort retaining token after 90 days', source: 'Wallet Telemetry', period: 'Quarterly' }
      ]
    },
    {
      category: 'Operations',
      metrics: [
        { name: 'Campaign Schedule Delivery', calc: 'Percentage of milestones delivered on schedule', source: 'PM Tracking', period: 'Sprint' },
        { name: 'Review & Approval Status', calc: 'Turnaround compliance SLA adherence (<48 hours)', source: 'Workflow Logs', period: 'Weekly' },
        { name: 'Reporting Completeness', calc: 'Timely publication of monthly performance briefs', source: 'Reporting Audit', period: 'Monthly' }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50/50 text-slate-900 pt-16 lg:pt-[72px]">
      {/* ── HERO SECTION ── */}
      <section className="relative bg-slate-950 text-white py-16 lg:py-24 overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=2000&q=80"
            alt="Trust, Compliance & Performance"
            className="w-full h-full object-cover object-center opacity-40 mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/75 to-slate-900/60" />
          <div className="absolute inset-0 bg-radial-at-t from-blue-950/40 via-transparent to-transparent pointer-events-none" />
        </div>

        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/20 border border-blue-400/40 text-blue-300 text-xs font-semibold uppercase tracking-wider mb-6 font-mono shadow-sm">
                <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
                <span>Page 04 · Trust, Compliance & Performance</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.08] mb-6">
                Trust, Compliance & <span className="text-blue-400">Performance</span>
              </h1>

              <div className="text-lg sm:text-xl text-blue-200/90 font-medium mb-4 leading-relaxed max-w-3xl">
                Build disciplined operating processes around compliant communications, measurable execution, transparent reporting, and accountable growth activities.
              </div>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal mb-8 max-w-3xl">
                Web3 marketing and launch operations require clear controls, accurate claims, and reliable measurement. This page explains how compliance reviews, jurisdictional considerations, lead qualification, performance measurement, forecasting, and KPI governance can be organized within a transparent operating framework.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <Link
                  to="/book-consultation"
                  className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold px-8 py-4 rounded-xl transition-all shadow-lg border border-blue-400/40 text-sm sm:text-base group"
                >
                  <span>Discuss Compliance & Performance</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  to="/ico-acceleration/sales-enablement"
                  className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold px-8 py-4 rounded-xl transition-all text-sm sm:text-base border border-white/30 backdrop-blur-sm shadow-md"
                >
                  <span>Explore Sales Enablement</span>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-4">
              <div className="bg-slate-900/90 text-white rounded-3xl overflow-hidden shadow-2xl border border-slate-800 relative">
                <div className="h-44 w-full relative overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80"
                    alt="Trust Architecture"
                    className="w-full h-full object-cover opacity-60"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-cyan-400 font-bold bg-slate-900/80 px-2.5 py-1 rounded-md border border-slate-700">
                      The Trust Layer
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-[11px] font-mono text-cyan-300 bg-cyan-950/80 px-2 py-0.5 rounded border border-cyan-800/60">
                      <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
                      Active SLA
                    </span>
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <div className="text-xs text-slate-300 font-medium leading-relaxed">
                    Integrated operating framework reviewing claims, structuring jurisdictional guardrails, and enforcing verifiable attribution.
                  </div>

                  <div className="grid grid-cols-2 gap-3 pt-2 border-t border-slate-800">
                    <div className="p-3 rounded-xl bg-slate-800/60 border border-slate-700/60">
                      <div className="text-lg font-black text-white font-mono">4 Regions</div>
                      <div className="text-[11px] text-slate-400">Marketing guardrails</div>
                    </div>
                    <div className="p-3 rounded-xl bg-slate-800/60 border border-slate-700/60">
                      <div className="text-lg font-black text-white font-mono">6 Pillars</div>
                      <div className="text-[11px] text-slate-400">KPI framework</div>
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
            
            {/* ── SUBMENU 1: COMPLIANCE BY DESIGN ── */}
            <section id="compliance-by-design" className="scroll-mt-28 bg-white rounded-3xl border border-slate-200/90 p-8 sm:p-10 shadow-xs">
              <div className="max-w-3xl mb-8">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600 block mb-2">
                  Submenu 01 · Trust Framework
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
                  Compliance by Design
                </h2>
                <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-200/80 text-xs text-amber-900 leading-relaxed font-medium mb-6">
                  <strong>Important Notice:</strong> Operational reviews and promotional guardrails do not replace qualified legal advice. Project teams must engage specialized counsel for their relevant jurisdiction and asset classification.
                </div>
                <p className="text-base text-slate-600 leading-relaxed font-normal">
                  Compliance by Design is an active operating framework that reviews public-facing claims, verifies that token descriptions are supported by evidence, maintains a documented approval process, and keeps records of approved messaging.
                </p>
              </div>

              <div className="space-y-4 mb-8">
                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80">
                  <h3 className="text-base font-extrabold text-slate-900 mb-1">Public Claims Review</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Review public-facing website copy, Litepapers, pitch decks, and social campaigns against marketing guardrails prior to public release.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80">
                  <h3 className="text-base font-extrabold text-slate-900 mb-1">Evidence-Backed Token Descriptions</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Ensure all descriptions of utility, governance rights, network throughput, and security are backed by deployed code or verified audits.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80">
                  <h3 className="text-base font-extrabold text-slate-900 mb-1">Documented Approval Workflow</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Maintain a transparent creative-to-legal sign-off chain ensuring every creator brief and public announcement has designated sign-offs.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80">
                  <h3 className="text-base font-extrabold text-slate-900 mb-1">Formal Legal Escalation</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Immediately escalate novel tokenomics structures, jurisdictional marketing questions, or regulatory queries to designated external counsel.
                  </p>
                </div>
              </div>

              <div className="bg-blue-50/70 border border-blue-200/90 rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <div className="text-xs font-mono font-bold uppercase tracking-wider text-blue-700 mb-1">
                    Deliverables
                  </div>
                  <div className="text-base font-extrabold text-slate-900">
                    Review Checklist, Claims Register, Approval Workflow & Documented Escalation Process
                  </div>
                </div>
                <Link
                  to="/book-consultation"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-700 hover:text-blue-800 bg-white px-4 py-2.5 rounded-xl border border-blue-200 shadow-xs shrink-0"
                >
                  <span>Request Review Framework</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </section>

            {/* ── SUBMENU 2: JURISDICTIONAL GUARDRAILS ── */}
            <section id="jurisdictional-guardrails" className="scroll-mt-28 bg-white rounded-3xl border border-slate-200/90 p-8 sm:p-10 shadow-xs">
              <div className="max-w-3xl mb-8">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600 block mb-2">
                  Submenu 02 · Regional Boundaries
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
                  Jurisdictional Guardrails
                </h2>
                <div className="p-4 rounded-xl bg-slate-100 border border-slate-200 text-xs text-slate-700 leading-relaxed font-medium mb-6">
                  <strong>Notice:</strong> This section outlines common considerations and does not represent a complete legal analysis or guarantee compliance. References are maintained for qualified legal review.
                </div>
                <p className="text-base text-slate-600 leading-relaxed font-normal">
                  Identify the jurisdictions relevant to the project's activities, flag communications requiring specialist review, coordinate regional campaign materials, and track approval status.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {jurisdictionalGuardrails.map((g, gi) => (
                  <div key={gi} className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80">
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="text-xs font-mono font-bold text-blue-700 bg-blue-100/80 px-2.5 py-0.5 rounded">
                        {g.region}
                      </span>
                      <span className="text-[11px] font-semibold text-slate-500">{g.status}</span>
                    </div>
                    <h3 className="text-lg font-extrabold text-slate-900 mb-3">{g.framework}</h3>
                    <ul className="space-y-2 text-xs text-slate-600">
                      {g.points.map((pt, pi) => (
                        <li key={pi} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* ── SUBMENU 3: CLAIMS & CREATIVE REVIEW SLA ── */}
            <section id="claims-sla" className="scroll-mt-28 bg-white rounded-3xl border border-slate-200/90 p-8 sm:p-10 shadow-xs">
              <div className="max-w-3xl mb-8">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600 block mb-2">
                  Submenu 03 · Review Protocol
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
                  Claims & Creative Review SLA
                </h2>
                <p className="text-base text-slate-600 leading-relaxed font-normal">
                  Define which marketing and campaign assets require review, document submission requirements, establish review stages, track revisions, and maintain a verifiable audit trail of approved materials.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {reviewSlaSteps.map((step, idx) => (
                  <div key={idx} className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80">
                    <span className="text-2xl font-black text-blue-600 font-mono block mb-2">{step.step}</span>
                    <h3 className="text-base font-extrabold text-slate-900 mb-2">{step.title}</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">{step.desc}</p>
                  </div>
                ))}
              </div>

              <div className="p-4 rounded-xl bg-slate-100 border border-slate-200 text-xs text-slate-700 flex items-center justify-between">
                <span><strong>SLA Standard:</strong> Standard Creative & Claims Review Turnaround: 24–48 Business Hours</span>
                <span className="font-mono text-slate-500">Documented Hash Logged</span>
              </div>
            </section>

            {/* ── SUBMENU 4: KYC/AML-READY OPERATIONS ── */}
            <section id="kyc-aml" className="scroll-mt-28 bg-white rounded-3xl border border-slate-200/90 p-8 sm:p-10 shadow-xs">
              <div className="max-w-3xl mb-8">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600 block mb-2">
                  Submenu 04 · Identity & Hygiene
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
                  KYC/AML-Ready Operations
                </h2>
                <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-200/80 text-xs text-amber-900 leading-relaxed font-medium mb-6">
                  <strong>Notice:</strong> ProfitMachines itself does not perform regulated identity verification or financial transmission services. We coordinate operational workflows with the client's approved compliance providers.
                </div>
                <p className="text-base text-slate-600 leading-relaxed font-normal">
                  Identify where identity verification or anti-money-laundering procedures may be relevant, document operational responsibilities, coordinate with compliance partners, and maintain escalation logs.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80">
                  <h3 className="text-base font-extrabold text-slate-900 mb-2">Whitelist & Airdrop Qualification</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Structure tiered whitelists identifying required verification tiers for public sales vs. non-monetary community bounties.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80">
                  <h3 className="text-base font-extrabold text-slate-900 mb-2">Compliance Provider Coordination</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Facilitate seamless technical API integration with client-selected identity providers (e.g. fractal, Synaps, Sumsub).
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80">
                  <h3 className="text-base font-extrabold text-slate-900 mb-2">Sanctions Screening Workflows</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Deploy OFAC and regional sanctions screening on addresses interacting with token allocation and claim portals.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80">
                  <h3 className="text-base font-extrabold text-slate-900 mb-2">Escalation & Recordkeeping</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Establish clear audit logs for flagged transactions and maintain structured documentation for institutional partners.
                  </p>
                </div>
              </div>
            </section>

            {/* ── SUBMENU 5: QUALIFIED LEAD FRAMEWORK FOR CRYPTO ── */}
            <section id="qualified-lead-framework" className="scroll-mt-28 bg-white rounded-3xl border border-slate-200/90 p-8 sm:p-10 shadow-xs">
              <div className="max-w-3xl mb-8">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600 block mb-2">
                  Submenu 05 · Qualification Architecture
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
                  Qualified Lead Framework for Crypto
                </h2>
                <p className="text-base text-slate-600 leading-relaxed font-normal">
                  Define an ideal lead profile based on project objectives. Establish qualification criteria such as relevance, intent, and engagement to distinguish raw inquiries from marketing-qualified leads (MQLs) and sales-qualified leads (SQLs). We do not invent arbitrary scores or guarantee conversion rates.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80">
                  <span className="text-xs font-mono font-bold text-blue-600 uppercase mb-1 block">Tier 01</span>
                  <h3 className="text-lg font-extrabold text-slate-900 mb-2">Raw Inquiry</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    General website inquiries, social interactions, community joiners, and unverified newsletter subscribers.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80">
                  <span className="text-xs font-mono font-bold text-blue-600 uppercase mb-1 block">Tier 02</span>
                  <h3 className="text-lg font-extrabold text-slate-900 mb-2">Marketing-Qualified (MQL)</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Verified developers requesting testnet tokens, whitelisted wallets with verified activity, or grant applications.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80">
                  <span className="text-xs font-mono font-bold text-blue-600 uppercase mb-1 block">Tier 03</span>
                  <h3 className="text-lg font-extrabold text-slate-900 mb-2">Sales-Qualified (SQL)</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Institutional funds, prospective validators, ecosystem dApps, or liquidity partners with confirmed budget and timeline.
                  </p>
                </div>
              </div>

              <div className="bg-blue-50/70 border border-blue-200/90 rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <div className="text-xs font-mono font-bold uppercase tracking-wider text-blue-700 mb-1">
                    Deliverables
                  </div>
                  <div className="text-base font-extrabold text-slate-900">
                    Qualification Framework, Lead Definitions, Tracking Plan & Reporting Template
                  </div>
                </div>
                <Link
                  to="/book-consultation"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-700 hover:text-blue-800 bg-white px-4 py-2.5 rounded-xl border border-blue-200 shadow-xs shrink-0"
                >
                  <span>Structure Qualification</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </section>

            {/* ── SUBMENU 6: PERFORMANCE REVENUE ENGINE ── */}
            <section id="performance-revenue" className="scroll-mt-28 bg-white rounded-3xl border border-slate-200/90 p-8 sm:p-10 shadow-xs">
              <div className="max-w-3xl mb-8">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600 block mb-2">
                  Submenu 06 · Attribution & Value
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
                  Performance Revenue Engine
                </h2>
                <p className="text-base text-slate-600 leading-relaxed font-normal">
                  Connect campaign activities directly to measurable operational outcomes. We explicitly separate marketing and operational metrics from token-price movements or secondary trading returns. In compliance with strict policy, any performance model must be documented and approved; we do not promise revenue or token returns.
                </p>
              </div>

              <div className="p-8 rounded-2xl bg-slate-900 text-white mb-8 border border-slate-800">
                <div className="text-xs font-mono font-bold uppercase tracking-wider text-blue-400 mb-4">
                  Attribution Flow Model
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                  <div className="p-5 rounded-xl bg-slate-800/80 border border-slate-700">
                    <div className="text-xs font-mono text-slate-400 mb-1">STAGE 01</div>
                    <div className="text-lg font-bold text-white mb-2">Campaign Spend</div>
                    <div className="text-xs text-slate-300">Creator allocations, PR distribution, and event sponsorships tracked with UTMs & wallet tags.</div>
                  </div>
                  <div className="p-5 rounded-xl bg-slate-800/80 border border-slate-700">
                    <div className="text-xs font-mono text-slate-400 mb-1">STAGE 02</div>
                    <div className="text-lg font-bold text-white mb-2">Wallet & User Activity</div>
                    <div className="text-xs text-slate-300">Testnet interactions, whitelist verifications, faucet claims, and initial deposit transactions.</div>
                  </div>
                  <div className="p-5 rounded-xl bg-slate-800/80 border border-slate-700">
                    <div className="text-xs font-mono text-slate-400 mb-1">STAGE 03</div>
                    <div className="text-lg font-bold text-white mb-2">Measurable Outcomes</div>
                    <div className="text-xs text-slate-300">Verified wallet retention, active dApp volume, institutional BD agreements, and protocol fee yield.</div>
                  </div>
                </div>
              </div>
            </section>

            {/* ── SUBMENU 7: FORECASTING & ATTRIBUTION ── */}
            <section id="forecasting-attribution" className="scroll-mt-28 bg-white rounded-3xl border border-slate-200/90 p-8 sm:p-10 shadow-xs">
              <div className="max-w-3xl mb-8">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600 block mb-2">
                  Submenu 07 · Predictive Analytics
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
                  Forecasting & Attribution
                </h2>
                <p className="text-base text-slate-600 leading-relaxed font-normal">
                  Establish a baseline using available historical or campaign data, document assumptions behind projections, define attribution windows, and continuously compare planned vs. observed performance as new data emerges.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80">
                  <h3 className="text-base font-extrabold text-slate-900 mb-2">Data Baseline Establishment</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Benchmark current organic visitor volume, Discord engagement rate, and testnet activity before starting paid campaigns.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80">
                  <h3 className="text-base font-extrabold text-slate-900 mb-2">Attribution Windows & Rules</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Define 7-day, 14-day, and 30-day attribution windows connecting creator content publications to on-chain interactions.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80">
                  <h3 className="text-base font-extrabold text-slate-900 mb-2">Planned vs. Observed Reviews</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Compare planned milestone deliverables against empirical metrics during bi-weekly sprint retrospectives.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80">
                  <h3 className="text-base font-extrabold text-slate-900 mb-2">Transparent Distinctions</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    All reporting clearly distinguishes verified historical facts, baseline estimates, and forward-looking operational projections.
                  </p>
                </div>
              </div>
            </section>

            {/* ── SUBMENU 8: KPI FRAMEWORK ── */}
            <section id="kpi-framework" className="scroll-mt-28 bg-white rounded-3xl border border-slate-200/90 p-8 sm:p-10 shadow-xs">
              <div className="max-w-3xl mb-8">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600 block mb-2">
                  Submenu 08 · Measurement Governance
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
                  KPI Framework
                </h2>
                <p className="text-base text-slate-600 leading-relaxed font-normal">
                  Our comprehensive KPI governance architecture organizes metrics into six distinct categories with defined calculation methods, verified data sources, and measurement periods. In strict adherence to policy, these are measurement frameworks, not guaranteed historical outcomes.
                </p>
              </div>

              <div className="space-y-6 mb-8">
                {kpiCategories.map((cat, ci) => (
                  <div key={ci} className="p-6 rounded-2xl bg-slate-50/80 border border-slate-200/80">
                    <h3 className="text-lg font-extrabold text-slate-900 mb-4 flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-blue-600"></span>
                      <span>{cat.category} Metrics</span>
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {cat.metrics.map((m, mi) => (
                        <div key={mi} className="p-4 rounded-xl bg-white border border-slate-200/80 text-xs">
                          <div className="font-extrabold text-slate-900 mb-1">{m.name}</div>
                          <div className="text-slate-600 leading-relaxed mb-2">{m.calc}</div>
                          <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono text-slate-400">
                            <span>Source: {m.source}</span>
                            <span className="text-blue-600 font-bold">{m.period}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-blue-50/70 border border-blue-200/90 rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <div className="text-xs font-mono font-bold uppercase tracking-wider text-blue-700 mb-1">
                    Next Section Module
                  </div>
                  <div className="text-base font-extrabold text-slate-900">
                    Explore Sales Enablement & Conversion Strategy
                  </div>
                </div>
                <Link
                  to="/ico-acceleration/sales-enablement"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-white bg-blue-600 hover:bg-blue-500 px-5 py-3 rounded-xl shadow-md transition-all shrink-0"
                >
                  <span>Open Sales Enablement</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </section>

      </main>
    </div>
  );
}
