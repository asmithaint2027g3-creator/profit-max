import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Building2, ArrowRight, ChevronRight, Activity, ShieldCheck,
  TrendingUp, BarChart3, Layers, Cpu, Globe, CheckCircle2,
  AlertCircle, Users, Bot, Sparkles, HelpCircle, MapPin,
  Zap, ArrowUpRight, DollarSign, Compass, Network, LineChart,
  PieChart, Sliders, CheckSquare, Award, Shield, FileText
} from 'lucide-react';
import { GlobalExpansionIntakeForm } from '../../components/forms/GlobalExpansionIntakeForm';

interface ScorecardView {
  id: string;
  category: string;
  headline: string;
  metricBig: string;
  metricLabel: string;
  regionalBreakdown: { region: string; score: string; status: string }[];
  strategicAssessment: string;
}

const SCORECARD_VIEWS: ScorecardView[] = [
  {
    id: 'market-perf',
    category: 'Market Performance by Region',
    headline: 'Real-Time Cross-Border Revenue vs. Plan',
    metricBig: '114%',
    metricLabel: 'Attainment to Year-1 Board Target',
    regionalBreakdown: [
      { region: 'DACH (Germany/Austria/CH)', score: '€8.4M ($9.1M)', status: 'Above Target (+18%)' },
      { region: 'United Kingdom', score: '£6.2M ($7.8M)', status: 'On Target (+4%)' },
      { region: 'Japan & ASEAN', score: '$6.5M', status: 'Accelerating (+12%)' },
      { region: 'Middle East & GCC', score: '$4.1M', status: 'Expanding (+22%)' }
    ],
    strategicAssessment: 'Unit economics across all priority territories indicate positive contribution margins with payback compressed to 7.4 months.'
  },
  {
    id: 'partner-contrib',
    category: 'Partner Contribution Scorecards',
    headline: 'Channel & Alliance Revenue Attribution',
    metricBig: '4.8X',
    metricLabel: 'Co-Sell Attributed Pipeline Multiple',
    regionalBreakdown: [
      { region: 'Hyperscaler Co-Sell (AWS/Azure)', score: '$18.2M Pipeline', status: 'Premier Drawdown' },
      { region: 'Pan-Asian Tier-1 Distributors', score: '$8.6M Pipeline', status: 'High Yield' },
      { region: 'EMEA Strategic System Integrators', score: '$6.4M Pipeline', status: 'Expanding' },
      { region: 'Direct Strategic Resellers', score: '$3.8M Pipeline', status: 'Active' }
    ],
    strategicAssessment: 'Top 3 distribution alliances contribute 78% of partner-sourced enterprise revenue with zero unattributed leakage.'
  },
  {
    id: 'compliance-audit',
    category: 'Jurisdictional Compliance Status',
    headline: 'Proactive Cross-Border Governance Index',
    metricBig: '100%',
    metricLabel: 'Compliance with Zero Regulatory Notices',
    regionalBreakdown: [
      { region: 'European Union (GDPR / AI Act)', score: 'Audited / Certified', status: 'Zero Risk' },
      { region: 'United Kingdom (UK GDPR / FCA)', score: 'Audited / Certified', status: 'Zero Risk' },
      { region: 'Japan (APPI Data Sovereign)', score: 'Compliant & Localized', status: 'Active' },
      { region: 'Brazil (LGPD Architecture)', score: 'Encrypted Sovereign Storage', status: 'Audited' }
    ],
    strategicAssessment: 'Proactive compliance architecture ensures all enterprise customer contracts meet statutory standards before signature.'
  },
  {
    id: 'roadmap-velocity',
    category: 'Sequenced Roadmap Execution',
    headline: 'Phased Territory Entry Milestone Telemetry',
    metricBig: '88 Days',
    metricLabel: 'Average Time from Diagnostic to First Revenue',
    regionalBreakdown: [
      { region: 'Phase 1: UK & Western Europe', score: 'Completed (Day 44)', status: 'Operational' },
      { region: 'Phase 2: DACH & Nordics', score: 'Completed (Day 72)', status: 'Operational' },
      { region: 'Phase 3: Japan & Singapore', score: 'In Execution (Day 81)', status: 'On Track' },
      { region: 'Phase 4: GCC Sovereign Freezones', score: 'Initiating Validation', status: 'Scheduled' }
    ],
    strategicAssessment: 'Sequenced market entry eliminates capital risk by unlocking downstream territories only after upstream unit economics validate.'
  }
];

export default function ExecutiveExpansionOfficePage() {
  const [activeScorecard, setActiveScorecard] = useState<ScorecardView>(SCORECARD_VIEWS[0]);

  useEffect(() => {
    document.title = 'Executive Expansion Office: Strategic Oversight for Global Expansion | ProfitMachines';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans pt-16 lg:pt-[72px]">
      {/* ── SECTION 1: HERO SECTION (Strategic Scorecard Layout, Industry Purple/Ambient Grid) ── */}
      <section className="relative pt-20 pb-16 sm:pt-28 sm:pb-24 overflow-hidden border-b border-slate-200 bg-white">
        {/* Ambient Grid & Glow */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div
            className="absolute inset-0 opacity-[0.35]"
            style={{
              backgroundImage: 'linear-gradient(to right, #e2e8f0 1px, transparent 1px), linear-gradient(to bottom, #e2e8f0 1px, transparent 1px)',
              backgroundSize: '4rem 4rem'
            }}
          />
          <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[140px] pointer-events-none" />
          <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[140px] pointer-events-none" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-50 border border-purple-200 text-purple-700 text-xs font-bold tracking-wide uppercase shadow-xs mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-600"></span>
              </span>
              <span className="font-mono text-purple-600 font-extrabold">PILLAR 06 OF 06</span>
              <span className="text-slate-300 font-normal">//</span>
              <span>EXECUTIVE GOVERNANCE & OVERSIGHT</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.08] mb-6 font-heading">
              Executive Expansion Office:{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600">
                Strategic Oversight for Global Expansion
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg lg:text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto mb-10">
              Four executive capabilities that audit expansion readiness, design international growth roadmaps, develop market expansion strategies, and provide real-time scorecards — giving the C-suite predictive visibility into global expansion performance.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
              <a
                href="#intake"
                className="inline-flex items-center justify-center bg-slate-900 hover:bg-purple-600 text-white font-bold px-7 py-4 rounded-xl shadow-lg shadow-slate-900/10 text-sm transition-all hover:-translate-y-0.5 group font-mono uppercase tracking-wider gap-2 cursor-pointer"
              >
                <span>Audit Your Expansion Readiness</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <Link
                to="/global-acceleration"
                className="inline-flex items-center justify-center border border-slate-200 bg-white hover:bg-slate-50 text-slate-800 font-bold px-6 py-4 rounded-xl text-sm shadow-xs transition-all font-mono uppercase tracking-wider gap-2"
              >
                <span>Explore Other Acceleration Areas</span>
                <ChevronRight className="w-4 h-4 text-purple-600" />
              </Link>
            </div>

            {/* Telemetry Bar */}
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs font-mono text-slate-600">
              <span className="inline-flex items-center gap-1.5 text-purple-600 font-bold">
                <Building2 className="w-4 h-4 text-purple-600" />
                EXECUTIVE TELEMETRY:
              </span>
              <span>80-90% Reduction in Expansion Failure</span>
              <span className="text-slate-300">·</span>
              <span className="text-emerald-600 font-semibold">Real-Time Board Cockpits</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 2: EXECUTIVE SUMMARY & STRATEGIC RATIONALE ── */}
      <section className="py-14 sm:py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-sm relative overflow-hidden mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 border border-purple-200 text-purple-700 text-xs font-mono font-bold uppercase mb-4">
              Strategic Executive Summary
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-4">
              Oversight Validates Expansion Before Capital Commitment
            </h2>
            <p className="text-slate-600 text-base leading-relaxed max-w-4xl">
              Enterprise cross-border expansion frequently falters not from poor TAM sizing, but from unvalidated organizational capability readiness. The Executive Expansion Office establishes deterministic pre-flight readiness audits, sequenced territory roadmaps, localized market playbooks, and real-time board telemetry cockpits. Gating expansion milestones behind empirical validation de-risks global capital allocation and accelerates breakeven.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs">
              <div className="text-2xl font-black font-mono text-purple-600 mb-1">80-90%</div>
              <div className="text-xs font-mono font-bold text-slate-900 uppercase tracking-wide mb-1">Failure Risk Mitigation</div>
              <p className="text-xs text-slate-600">Deterministic capability audits prior to territory capital deployment.</p>
            </div>
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs">
              <div className="text-2xl font-black font-mono text-indigo-600 mb-1">50-70%</div>
              <div className="text-xs font-mono font-bold text-slate-900 uppercase tracking-wide mb-1">Expansion ROI Lift</div>
              <p className="text-xs text-slate-600">Sequenced territory roadmaps prioritizing proven unit economics.</p>
            </div>
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs">
              <div className="text-2xl font-black font-mono text-blue-600 mb-1">50-70%</div>
              <div className="text-xs font-mono font-bold text-slate-900 uppercase tracking-wide mb-1">Faster Decision Cycles</div>
              <p className="text-xs text-slate-600">Live board telemetry replacing static quarterly backward-looking decks.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 3: THE 4 EXECUTIVE CAPABILITIES ── */}
      <section className="py-20 sm:py-28 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4 font-heading">
              Four Executive Governance Capabilities
            </h2>
            <p className="text-base sm:text-lg text-slate-600">
              Transform high-risk international ventures into sequenced, empirically governed corporate growth machines.
            </p>
          </div>

          <div className="space-y-12">
            {/* CAPABILITY 1: Expansion Readiness Audit */}
            <div className="p-8 sm:p-10 rounded-3xl border border-slate-200 bg-white hover:border-purple-400 hover:shadow-xl transition-all">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-6">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-purple-50 text-purple-700 text-xs font-mono font-bold uppercase mb-3">
                    Capability 01 · Pre-Flight Clearance
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                    Expansion Readiness Audit
                  </h3>
                </div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-purple-50 border border-purple-200 text-purple-700 font-mono text-sm font-bold">
                  <ShieldCheck className="w-4 h-4 text-purple-600" />
                  <span>80-90% Failure Reduction</span>
                </div>
              </div>

              {/* Executive Summary Card */}
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 mb-6 text-sm text-slate-700 leading-relaxed">
                <span className="font-mono text-xs font-bold text-purple-700 uppercase tracking-wider block mb-1">Strategic Overview</span>
                Comprehensive pre-flight audit assessing technical architecture, legal readiness, leadership bandwidth, and operational infrastructure across target expansion zones before significant capital deployment.
              </div>

              {/* Benchmark, ROI & Case Grids */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs">
                  <div className="text-xs font-mono font-bold text-slate-500 uppercase mb-2">Benchmark Contrast</div>
                  <div className="text-xs space-y-2">
                    <p><strong className="text-rose-600 font-semibold">Traditional:</strong> Ambition-driven expansion entering territories without auditing operational capabilities.</p>
                    <p><strong className="text-purple-600 font-semibold">ProfitMachines:</strong> Deterministic pre-flight audit gating capital commitments behind verified organizational readiness.</p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-purple-50/60 border border-purple-200/80">
                  <div className="text-xs font-mono font-bold text-purple-700 uppercase mb-2">Operational ROI Snapshot</div>
                  <div className="space-y-1 font-mono text-xs">
                    <div className="flex justify-between"><span className="text-slate-600">Metric:</span> <span className="font-bold text-slate-900">Expansion Risk Index</span></div>
                    <div className="flex justify-between"><span className="text-slate-600">Impact:</span> <span className="font-bold text-purple-600">80-90% Failure Cut</span></div>
                    <div className="flex justify-between"><span className="text-slate-600">Velocity:</span> <span className="font-bold text-slate-900">14-Day Full Audit</span></div>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 shadow-xs">
                  <div className="text-xs font-mono font-bold text-slate-500 uppercase mb-2">Enterprise Case Snippet</div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    A $220M software group audited EMEA readiness, identified key localization and compliance gaps, and preserved $10M by staging resources systematically.
                  </p>
                </div>
              </div>

              {/* Real Buyer Quote */}
              <div className="p-5 rounded-2xl bg-slate-50 border-l-4 border-purple-600 text-slate-700 italic text-sm">
                &ldquo;We entered 3 markets before realizing we lacked localization infrastructure — ProfitMachines established the pre-flight readiness framework that made our next launches profitable from quarter one.&rdquo;
                <span className="block mt-1 font-mono text-xs text-slate-500 font-normal not-italic">
                  — Group Chief Executive Officer, Enterprise Software ($220M ARR)
                </span>
              </div>
            </div>

            {/* CAPABILITY 2: International Growth Roadmap */}
            <div className="p-8 sm:p-10 rounded-3xl border border-slate-200 bg-white hover:border-purple-400 hover:shadow-xl transition-all">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-6">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-indigo-50 text-indigo-700 text-xs font-mono font-bold uppercase mb-3">
                    Capability 02 · Territory Sequencing
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                    International Growth Roadmap
                  </h3>
                </div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-indigo-50 border border-indigo-200 text-indigo-700 font-mono text-sm font-bold">
                  <TrendingUp className="w-4 h-4 text-indigo-600" />
                  <span>50-70% Expansion ROI Lift</span>
                </div>
              </div>

              {/* Executive Summary Card */}
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 mb-6 text-sm text-slate-700 leading-relaxed">
                <span className="font-mono text-xs font-bold text-indigo-700 uppercase tracking-wider block mb-1">Strategic Overview</span>
                Territory prioritization and phased expansion sequencing governed by gross-margin probability, local TAM density, and organizational readiness rather than opportunistic inbound interest.
              </div>

              {/* Benchmark, ROI & Case Grids */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs">
                  <div className="text-xs font-mono font-bold text-slate-500 uppercase mb-2">Benchmark Contrast</div>
                  <div className="text-xs space-y-2">
                    <p><strong className="text-rose-600 font-semibold">Traditional:</strong> Fragmented market entries driven by ad-hoc inbound interest or competitor panic.</p>
                    <p><strong className="text-indigo-600 font-semibold">ProfitMachines:</strong> Sequenced roadmap unlocking downstream territories only after upstream unit economics validate.</p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-indigo-50/60 border border-indigo-200/80">
                  <div className="text-xs font-mono font-bold text-indigo-700 uppercase mb-2">Operational ROI Snapshot</div>
                  <div className="space-y-1 font-mono text-xs">
                    <div className="flex justify-between"><span className="text-slate-600">Metric:</span> <span className="font-bold text-slate-900">Territory Payback Period</span></div>
                    <div className="flex justify-between"><span className="text-slate-600">Impact:</span> <span className="font-bold text-indigo-600">50-70% ROI Improvement</span></div>
                    <div className="flex justify-between"><span className="text-slate-600">Velocity:</span> <span className="font-bold text-slate-900">60-Day Sprint Gates</span></div>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 shadow-xs">
                  <div className="text-xs font-mono font-bold text-slate-500 uppercase mb-2">Enterprise Case Snippet</div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    A global SaaS platform sequenced DACH and UK entry before APAC, achieving 114% of Year-1 board targets while conserving 40% of planned deployment capital.
                  </p>
                </div>
              </div>

              {/* Real Buyer Quote */}
              <div className="p-5 rounded-2xl bg-slate-50 border-l-4 border-indigo-600 text-slate-700 italic text-sm">
                &ldquo;The sequenced roadmap prevented us from scattering capital across low-yield regions and focused our executive bandwidth where unit economics proved repeatable.&rdquo;
                <span className="block mt-1 font-mono text-xs text-slate-500 font-normal not-italic">
                  — President & Chief Strategy Officer, Global SaaS Platform
                </span>
              </div>
            </div>

            {/* CAPABILITY 3: Market Expansion Strategy */}
            <div className="p-8 sm:p-10 rounded-3xl border border-slate-200 bg-white hover:border-purple-400 hover:shadow-xl transition-all">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-6">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 text-blue-700 text-xs font-mono font-bold uppercase mb-3">
                    Capability 03 · Local Tailoring
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                    Market Expansion Strategy
                  </h3>
                </div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-50 border border-blue-200 text-blue-700 font-mono text-sm font-bold">
                  <Sparkles className="w-4 h-4 text-blue-600" />
                  <span>2-3X Performance Delta</span>
                </div>
              </div>

              {/* Executive Summary Card */}
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 mb-6 text-sm text-slate-700 leading-relaxed">
                <span className="font-mono text-xs font-bold text-blue-700 uppercase tracking-wider block mb-1">Strategic Overview</span>
                Territory-calibrated commercial strategies replacing uniform global playbooks with tailored pricing tiers, local partner motions, and culturally resonant enterprise buyer workflows.
              </div>

              {/* Benchmark, ROI & Case Grids */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs">
                  <div className="text-xs font-mono font-bold text-slate-500 uppercase mb-2">Benchmark Contrast</div>
                  <div className="text-xs space-y-2">
                    <p><strong className="text-rose-600 font-semibold">Traditional:</strong> Monolithic global sales playbooks deployed without adapting to local market conditions.</p>
                    <p><strong className="text-blue-600 font-semibold">ProfitMachines:</strong> Calibrated market entry models adapted to sovereign regulations, buyer psychology, and local partner channels.</p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-blue-50/60 border border-blue-200/80">
                  <div className="text-xs font-mono font-bold text-blue-700 uppercase mb-2">Operational ROI Snapshot</div>
                  <div className="space-y-1 font-mono text-xs">
                    <div className="flex justify-between"><span className="text-slate-600">Metric:</span> <span className="font-bold text-slate-900">Quota Attainment Delta</span></div>
                    <div className="flex justify-between"><span className="text-slate-600">Impact:</span> <span className="font-bold text-blue-600">2-3X Higher Win Rates</span></div>
                    <div className="flex justify-between"><span className="text-slate-600">Velocity:</span> <span className="font-bold text-slate-900">30-Day Territory GTM</span></div>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 shadow-xs">
                  <div className="text-xs font-mono font-bold text-slate-500 uppercase mb-2">Enterprise Case Snippet</div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    An enterprise infrastructure provider re-architected pricing from USD flat rate to localized value tiers in EMEA, lifting deal conversion 2.4X within 90 days.
                  </p>
                </div>
              </div>

              {/* Real Buyer Quote */}
              <div className="p-5 rounded-2xl bg-slate-50 border-l-4 border-blue-600 text-slate-700 italic text-sm">
                &ldquo;Applying our domestic playbook to international territories underperformed for quarters. The market-specific strategy adapted our commercial engine to local buying realities.&rdquo;
                <span className="block mt-1 font-mono text-xs text-slate-500 font-normal not-italic">
                  — Chief Operating Officer, Infrastructure Technology Firm
                </span>
              </div>
            </div>

            {/* CAPABILITY 4: Executive Scorecards */}
            <div className="p-8 sm:p-10 rounded-3xl border border-slate-200 bg-white hover:border-purple-400 hover:shadow-xl transition-all">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-6">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-50 text-emerald-700 text-xs font-mono font-bold uppercase mb-3">
                    Capability 04 · Predictive Visibility
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                    Executive Scorecards
                  </h3>
                </div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-700 font-mono text-sm font-bold">
                  <BarChart3 className="w-4 h-4 text-emerald-600" />
                  <span>50-70% Faster Decisions</span>
                </div>
              </div>

              {/* Executive Summary Card */}
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 mb-6 text-sm text-slate-700 leading-relaxed">
                <span className="font-mono text-xs font-bold text-emerald-700 uppercase tracking-wider block mb-1">Strategic Overview</span>
                Real-time executive telemetry cockpits replacing lagging quarterly retrospectives with continuous visibility into regional quota attainment, channel attribution, and jurisdictional compliance.
              </div>

              {/* Benchmark, ROI & Case Grids */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs">
                  <div className="text-xs font-mono font-bold text-slate-500 uppercase mb-2">Benchmark Contrast</div>
                  <div className="text-xs space-y-2">
                    <p><strong className="text-rose-600 font-semibold">Traditional:</strong> Lagging quarterly slide decks surfacing territory misses months after margin erosion.</p>
                    <p><strong className="text-emerald-600 font-semibold">ProfitMachines:</strong> Predictive executive telemetry tracking cross-border revenue velocity and compliance continuously.</p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-emerald-50/60 border border-emerald-200/80">
                  <div className="text-xs font-mono font-bold text-emerald-700 uppercase mb-2">Operational ROI Snapshot</div>
                  <div className="space-y-1 font-mono text-xs">
                    <div className="flex justify-between"><span className="text-slate-600">Metric:</span> <span className="font-bold text-slate-900">Executive Decision Latency</span></div>
                    <div className="flex justify-between"><span className="text-slate-600">Impact:</span> <span className="font-bold text-emerald-600">50-70% Faster Velocity</span></div>
                    <div className="flex justify-between"><span className="text-slate-600">Velocity:</span> <span className="font-bold text-slate-900">Continuous Live Telemetry</span></div>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 shadow-xs">
                  <div className="text-xs font-mono font-bold text-slate-500 uppercase mb-2">Enterprise Case Snippet</div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    A global tech conglomerate unified 14 territory reporting streams into a live executive cockpit, diagnosing a UK sales pipeline gap 8 weeks early and rescuing $4.2M.
                  </p>
                </div>
              </div>

              {/* Real Buyer Quote */}
              <div className="p-5 rounded-2xl bg-slate-50 border-l-4 border-emerald-600 text-slate-700 italic text-sm">
                &ldquo;Rather than waiting for quarter-end post-mortems, our executive committee now monitors international expansion velocity in real-time with full attribution confidence.&rdquo;
                <span className="block mt-1 font-mono text-xs text-slate-500 font-normal not-italic">
                  — Board Director & Audit Committee Chair, Global Tech Conglomerate
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 4: VISUAL INTERACTION: STRATEGIC SCORECARD INTERFACE ── */}
      <section className="py-20 sm:py-28 bg-slate-950 text-white border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 text-xs font-mono font-bold uppercase mb-3">
              <LineChart className="w-3.5 h-3.5" />
              Boardroom Expansion Telemetry Cockpit
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Executive Global Expansion Scorecard
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl">
              Inspect real-time executive scorecards spanning regional market performance, partner attribution, jurisdictional compliance audits, and sequenced roadmap velocity.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Scorecard Categories */}
            <div className="lg:col-span-5 space-y-3">
              {SCORECARD_VIEWS.map((view) => {
                const isSelected = activeScorecard.id === view.id;
                return (
                  <div
                    key={view.id}
                    onClick={() => setActiveScorecard(view)}
                    className={`p-5 rounded-2xl cursor-pointer transition-all border ${
                      isSelected
                        ? 'bg-slate-900 border-purple-500 shadow-xl shadow-purple-500/10'
                        : 'bg-slate-900/50 border-slate-800 hover:border-slate-700 hover:bg-slate-900/80'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-mono text-xs text-purple-400 font-bold uppercase">
                        {view.category}
                      </span>
                      <ChevronRight className={`w-4 h-4 transition-transform ${isSelected ? 'rotate-90 text-purple-400' : 'text-slate-600'}`} />
                    </div>
                    <h4 className="font-bold text-white text-base mb-1">{view.headline}</h4>
                    <div className="flex items-center justify-between text-xs text-slate-400 font-mono">
                      <span className="text-emerald-400 font-bold">{view.metricBig}</span>
                      <span>{view.metricLabel}</span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Scorecard Detailed Dossier */}
            <div className="lg:col-span-7 bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-80 h-80 bg-purple-600/10 rounded-full blur-[100px] pointer-events-none" />

              <div className="flex items-center justify-between border-b border-slate-800 pb-5 mb-6">
                <div>
                  <div className="text-xs font-mono text-purple-400 uppercase tracking-wider mb-1">
                    C-Suite Scorecard Telemetry
                  </div>
                  <h3 className="text-2xl font-black text-white">{activeScorecard.category}</h3>
                  <p className="text-xs sm:text-sm text-slate-400 mt-1">{activeScorecard.headline}</p>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-black font-mono text-purple-400">
                    {activeScorecard.metricBig}
                  </div>
                  <div className="text-[10px] font-mono uppercase text-slate-400">{activeScorecard.metricLabel}</div>
                </div>
              </div>

              {/* Regional Breakdown Grid */}
              <div className="mb-6">
                <div className="text-xs font-mono uppercase text-slate-400 mb-3 flex items-center gap-2">
                  <CheckSquare className="w-4 h-4 text-emerald-400" />
                  Regional Telemetry Breakdown
                </div>
                <div className="space-y-2.5">
                  {activeScorecard.regionalBreakdown.map((item, idx) => (
                    <div key={idx} className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800 flex items-center justify-between">
                      <div>
                        <div className="text-sm font-bold text-white">{item.region}</div>
                        <div className="text-xs font-mono text-slate-400">{item.score}</div>
                      </div>
                      <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                        {item.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Strategic Assessment */}
              <div className="p-4 rounded-xl bg-purple-950/30 border border-purple-800/60 mb-2">
                <div className="text-xs font-mono text-purple-400 uppercase font-bold mb-1 flex items-center gap-2">
                  <FileText className="w-4 h-4 text-purple-400" />
                  Board Strategic Assessment
                </div>
                <p className="text-xs sm:text-sm text-purple-200 font-sans leading-relaxed">
                  {activeScorecard.strategicAssessment}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 5: VERIFIED OUTCOMES GRID ── */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4 font-heading">
              Empirical Governance Outcomes
            </h2>
            <p className="text-base sm:text-lg text-slate-600">
              Verified metric impacts achieved through executive expansion oversight and real-time scorecards.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 text-center">
              <div className="text-4xl sm:text-5xl font-black text-slate-900 font-mono tracking-tight mb-2">
                80-90%
              </div>
              <div className="h-1 w-12 bg-purple-600 mx-auto mb-4 rounded-full" />
              <p className="text-sm font-semibold text-slate-800 mb-1">Failure Reduction</p>
              <p className="text-xs text-slate-600">Reduction in expansion failures through readiness validation before capital entry.</p>
            </div>

            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 text-center">
              <div className="text-4xl sm:text-5xl font-black text-slate-900 font-mono tracking-tight mb-2">
                50-70%
              </div>
              <div className="h-1 w-12 bg-indigo-600 mx-auto mb-4 rounded-full" />
              <p className="text-sm font-semibold text-slate-800 mb-1">ROI Improvement</p>
              <p className="text-xs text-slate-600">Lift in international expansion ROI through sequenced territory entry roadmaps.</p>
            </div>

            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 text-center">
              <div className="text-4xl sm:text-5xl font-black text-slate-900 font-mono tracking-tight mb-2">
                2-3X
              </div>
              <div className="h-1 w-12 bg-blue-600 mx-auto mb-4 rounded-full" />
              <p className="text-sm font-semibold text-slate-800 mb-1">Market Performance Lift</p>
              <p className="text-xs text-slate-600">Compared to generic global playbooks applied uniformly across different territories.</p>
            </div>

            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 text-center">
              <div className="text-4xl sm:text-5xl font-black text-slate-900 font-mono tracking-tight mb-2">
                50-70%
              </div>
              <div className="h-1 w-12 bg-emerald-600 mx-auto mb-4 rounded-full" />
              <p className="text-sm font-semibold text-slate-800 mb-1">Faster Decision Speed</p>
              <p className="text-xs text-slate-600">Accelerated C-suite decision velocity enabled by real-time expansion scorecards.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 6: RELATED CAPABILITIES (CROSS-LINKS) ── */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-3">
              Executive Oversight Guides Every Acceleration Area
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Scorecards synthesize telemetry across intelligence, strategy, partner networks, RevOps, and autonomous AI agents.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link
              to="/global-acceleration/market-intelligence"
              className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-blue-500 hover:shadow-lg transition-all group block"
            >
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                <Globe className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-lg mb-2 group-hover:text-blue-600 transition-colors flex items-center justify-between">
                <span>Market Intelligence</span>
                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 group-hover:text-blue-600 transition-all" />
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Feeds country TAM/SAM/SOM sizing and competitor density data directly into board-level expansion models.
              </p>
            </Link>

            <Link
              to="/global-acceleration/cross-border-strategy"
              className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-indigo-500 hover:shadow-lg transition-all group block"
            >
              <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                <Compass className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-lg mb-2 group-hover:text-indigo-600 transition-colors flex items-center justify-between">
                <span>Cross-Border Strategy</span>
                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 group-hover:text-indigo-600 transition-all" />
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Translates executive roadmap priorities into verified decision gates, localized pricing tiers, and entry motions.
              </p>
            </Link>

            <Link
              to="/global-acceleration/ai-global-scaling"
              className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-violet-500 hover:shadow-lg transition-all group block"
            >
              <div className="w-10 h-10 rounded-xl bg-violet-50 text-violet-600 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                <Bot className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-lg mb-2 group-hover:text-violet-600 transition-colors flex items-center justify-between">
                <span>AI For Global Scaling</span>
                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 group-hover:text-violet-600 transition-all" />
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Streams real-time autonomous SDR velocity, competitor detections, and regulatory alerts directly into executive dashboards.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* ── SECTION 7: FINAL CTA + INTAKE FORM ── */}
      <section id="intake" className="py-20 sm:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 border border-purple-200 text-purple-700 text-xs font-mono font-bold uppercase mb-4">
              CONFIDENTIAL INTAKE
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4 font-heading">
              Ready to Audit Your Global Expansion Readiness?
            </h2>
            <p className="text-slate-600 text-base max-w-xl mx-auto">
              Request a confidential Expansion Readiness Audit. Receive a board-ready capability diagnostic and sequenced expansion roadmap within 24 business hours.
            </p>
          </div>

          <div className="p-8 sm:p-12 rounded-3xl bg-white border border-slate-200 shadow-xl">
            <GlobalExpansionIntakeForm
              pageContext="Executive Expansion Office"
              defaultChallenge="Validating country TAM and unit economics before investing"
              buttonText="Audit Your Expansion Readiness"
            />
          </div>

          {/* Trust Badges */}
          <div className="mt-12 text-center">
            <div className="inline-flex flex-wrap items-center justify-center gap-4 sm:gap-8 px-6 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-xs font-mono font-semibold text-slate-600">
              <span>500+ B2B Companies</span>
              <span className="text-slate-300">·</span>
              <span>5X Avg Revenue Growth</span>
              <span className="text-slate-300">·</span>
              <span>24/7 AI Support</span>
              <span className="text-slate-300">·</span>
              <span>Operations in 40+ Countries</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
