import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight, ChevronRight, TrendingUp, BarChart3, Globe,
  ShieldCheck, Layers, Bot, Compass, CheckCircle2,
  Sparkles, Award, ArrowUpRight, DollarSign, Clock, Users,
  Zap, AlertCircle, LineChart, Target, Activity, RefreshCw,
  GitMerge, HeartPulse, Building2, Check, ArrowDown
} from 'lucide-react';
import { CaseStudyIntakeForm } from '../../components/forms/CaseStudyIntakeForm';

export default function HealthcareGtmTransformationPage() {
  const [activeMilestone, setActiveMilestone] = useState<number>(0);

  useEffect(() => {
    document.title = 'Enterprise Healthcare GTM Transformation ($900M Scale) | ProfitMachines';
    window.scrollTo(0, 0);
  }, []);

  const milestones = [
    {
      quarter: 'PHASE 01',
      title: 'Commercial Architecture Harmonization',
      duration: 'Months 1 – 3',
      status: 'Foundation',
      summary: 'Consolidation of 3 acquired business units under a unified enterprise account model and single source of customer truth.',
      deliverables: [
        'Merged 3 disjointed CRM instances into single HIPAA-compliant instance',
        'Standardized 280 reps across a unified clinical-economic value proposition',
        'Eliminated duplicate account coverage across 420 national health systems'
      ]
    },
    {
      quarter: 'PHASE 02',
      title: 'Health System Account Orchestrator',
      duration: 'Months 4 – 6',
      status: 'Deployment',
      summary: 'Deployment of an intelligent account coordination plane preventing multi-rep collision in hospital C-suites.',
      deliverables: [
        'Single Enterprise Lead Executive assigned per health system IDN',
        'Automated buying committee mapping spanning clinical, IT, and CFO personas',
        'Unified cross-specialty proposal generation through CPQ'
      ]
    },
    {
      quarter: 'PHASE 03',
      title: 'Autonomous Field Telemetry & Enablement',
      duration: 'Months 7 – 9',
      status: 'Acceleration',
      summary: 'Zero-friction background meeting intelligence increasing rep CRM adoption from 40% to 80%.',
      deliverables: [
        'Automated call synthesis and clinical compliance note tagging',
        'Dynamic approval routing reducing committee sign-offs from 6 weeks to 4 days',
        'Value realization dashboards delivered directly to hospital CFOs'
      ]
    },
    {
      quarter: 'PHASE 04',
      title: 'Enterprise Velocity & Scale',
      duration: 'Months 10 – 12',
      status: 'Optimization',
      summary: 'Cross-divisional bundle contracts accelerating sales velocity by 40% and unlocking $140M in expansion pipeline.',
      deliverables: [
        'Enterprise multi-year subscription agreements (SaaS + Device + Services)',
        '40% reduction in average sales cycle duration (16 mos to 9.5 mos)',
        'Sustainable cross-sell engine driving 60% operating efficiency lift'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans pt-16 lg:pt-[72px]">
      {/* ── SECTION 1: HERO (GTM TRANSFORMATION JOURNEY LAYOUT) ── */}
      <section className="relative pt-20 pb-16 sm:pt-28 sm:pb-24 overflow-hidden border-b border-slate-200 bg-white">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div
            className="absolute inset-0 opacity-[0.35]"
            style={{
              backgroundImage: 'linear-gradient(to right, #e2e8f0 1px, transparent 1px), linear-gradient(to bottom, #e2e8f0 1px, transparent 1px)',
              backgroundSize: '4rem 4rem'
            }}
          />
          <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-teal-500/10 rounded-full blur-[140px] pointer-events-none" />
          <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            {/* Back link */}
            <div className="mb-6">
              <Link
                to="/case-studies"
                className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-slate-500 hover:text-teal-600 uppercase tracking-wider transition-colors"
              >
                <ChevronRight className="w-4 h-4 rotate-180" />
                <span>Back to Case Studies</span>
              </Link>
            </div>

            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 border border-teal-200 text-teal-700 text-xs font-bold tracking-wide uppercase shadow-xs mb-6">
              <span className="font-mono text-teal-600 font-extrabold">CASE STUDY</span>
              <span className="text-slate-300 font-normal">//</span>
              <span>HEALTHCARE · GTM TRANSFORMATION</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.08] mb-6 font-heading">
              GTM Transformation at Scale:{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 via-emerald-600 to-indigo-600">
                Unifying a $900M Enterprise Healthcare Engine
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg lg:text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto mb-8">
              How a healthcare technology conglomerate unified 3 acquired divisions, boosted rep adoption from 40% to 80%, shortened enterprise cycles by 40%, and unlocked $140M in cross-sell pipeline.
            </p>

            {/* Impact Highlights Bar */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-200/80 shadow-xs mb-10 max-w-4xl mx-auto">
              <div className="text-center p-3">
                <div className="text-2xl sm:text-3xl font-extrabold text-teal-600 font-heading">80%</div>
                <div className="text-xs font-medium text-slate-600 uppercase tracking-wider mt-1">GTM Tool Adoption (vs 40%)</div>
              </div>
              <div className="text-center p-3 border-l border-slate-200">
                <div className="text-2xl sm:text-3xl font-extrabold text-emerald-600 font-heading">-40%</div>
                <div className="text-xs font-medium text-slate-600 uppercase tracking-wider mt-1">Cycle Duration (16 to 9.5 mos)</div>
              </div>
              <div className="text-center p-3 border-l border-slate-200">
                <div className="text-2xl sm:text-3xl font-extrabold text-indigo-600 font-heading">+60%</div>
                <div className="text-xs font-medium text-slate-600 uppercase tracking-wider mt-1">Commercial Efficiency Lift</div>
              </div>
              <div className="text-center p-3 border-l border-slate-200">
                <div className="text-2xl sm:text-3xl font-extrabold text-cyan-600 font-heading">$140M</div>
                <div className="text-xs font-medium text-slate-600 uppercase tracking-wider mt-1">Cross-Divisional Pipeline</div>
              </div>
            </div>

            {/* CTA row */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#intake-form"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-teal-600 text-white font-bold text-sm hover:bg-teal-700 transition-all shadow-md shadow-teal-600/20"
              >
                <span>Request Transformation Assessment</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#transformation-journey"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white border border-slate-200 text-slate-700 font-bold text-sm hover:bg-slate-50 transition-all"
              >
                <span>Explore Milestone Journey</span>
                <GitMerge className="w-4 h-4 text-teal-500" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 2: CLIENT PROFILE & CONTEXT ── */}
      <section className="py-16 sm:py-20 border-b border-slate-200 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-100 text-teal-800 text-xs font-mono font-bold uppercase mb-4">
                PHASE 1 // EXECUTIVE SNAPSHOT &amp; BASELINE CONTEXT
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mb-4 font-heading">
                M&A Integration Creating Commercial Gridlock
              </h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                Following three strategic acquisitions totaling $900M in consolidated revenue, this healthcare enterprise found itself operating three incompatible commercial engines. Different product divisions were pitching the same hospital system executives simultaneously with conflicting contract terms.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm text-slate-700">
                  <CheckCircle2 className="w-5 h-5 text-teal-600 shrink-0" />
                  <span><strong>Scale:</strong> $900M Consolidated Annual Revenue across 3 distinct divisions</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-700">
                  <CheckCircle2 className="w-5 h-5 text-teal-600 shrink-0" />
                  <span><strong>Sales Force:</strong> 280 field sales specialists and clinical account managers</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-700">
                  <CheckCircle2 className="w-5 h-5 text-teal-600 shrink-0" />
                  <span><strong>Customer Base:</strong> 420 integrated delivery networks (IDNs) and health systems</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
                  <div className="w-10 h-10 rounded-xl bg-rose-50 flex items-center justify-center text-rose-600 mb-4">
                    <Users className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-2">Hospital Executive Fatigue</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Hospital CIOs received uncoordinated pitches from 3 separate reps from the same parent brand within a 48-hour window, undermining enterprise credibility.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
                  <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center text-amber-600 mb-4">
                    <Clock className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-2">16-Month Sales Cycles</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Because proposals failed to address both clinical benefits and CFO ROI, deals dragged through redundant security, procurement, and clinical committees.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
                  <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-slate-600 mb-4">
                    <Layers className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-2">40% CRM Adoption</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Field reps refused to maintain cumbersome enterprise CRM instances, managing relationships out of private phone books and personal spreadsheets.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
                  <div className="w-10 h-10 rounded-xl bg-teal-50 flex items-center justify-center text-teal-600 mb-4">
                    <GitMerge className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-2">Zero Cross-Sell Synergy</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Less than 8% of enterprise accounts held products from more than one division, leaving hundreds of millions in uncaptured cross-sell synergy on the table.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 3: PRE-INTERVENTION FRICTION ── */}
      <section className="py-16 sm:py-20 border-b border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-100 text-rose-700 text-xs font-mono font-bold uppercase mb-4">
              Baseline Breakdown
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading">
              The Cost of Commercial Fragmentation
            </h2>
            <p className="text-base text-slate-600 mt-4">
              Detailed organizational audit revealed three structural bottlenecks paralyzing go-to-market throughput.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="text-rose-600 font-mono text-sm font-bold mb-2">FRICTION POINT 01</div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">Multi-Rep Collision in C-Suites</h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">
                Health system executives noted that reps from Division A (Diagnostic Imaging) and Division B (Clinical Workflow Software) pitched competing budget priorities, creating confusion and postponing purchasing decisions.
              </p>
              <div className="text-xs font-mono font-bold text-rose-700 bg-rose-50 p-3 rounded-lg border border-rose-200">
                Stalled Deals: 44 high-value health system tenders frozen indefinitely
              </div>
            </div>

            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="text-rose-600 font-mono text-sm font-bold mb-2">FRICTION POINT 02</div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">Disconnected Contracting & Legal Review</h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">
                Each division negotiated independent Master Service Agreements (MSAs), Business Associate Agreements (BAAs), and indemnity clauses, forcing hospital legal teams to redline three separate contracts for one vendor.
              </p>
              <div className="text-xs font-mono font-bold text-rose-700 bg-rose-50 p-3 rounded-lg border border-rose-200">
                Contract Cycle: 140 days average legal redline turnaround
              </div>
            </div>

            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="text-rose-600 font-mono text-sm font-bold mb-2">FRICTION POINT 03</div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">60% Blind Pipeline Volatility</h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">
                Because 60% of reps bypassed CRM entry, executive leadership had zero visibility into account health or true pipeline progression until final closing signatures, producing unpredictable quarterly swings.
              </p>
              <div className="text-xs font-mono font-bold text-rose-700 bg-rose-50 p-3 rounded-lg border border-rose-200">
                Forecast Slippage: 38% of committed enterprise revenue missed targets
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 4: STRATEGIC DIAGNOSTICS & AUDIT ── */}
      <section className="py-16 sm:py-20 border-b border-slate-200 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/20 text-teal-300 text-xs font-mono font-bold uppercase mb-4 border border-teal-500/30">
                Diagnostic Analysis
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-6 font-heading">
                Designing a Unified Healthcare GTM Model
              </h2>
              <p className="text-slate-300 leading-relaxed mb-6">
                ProfitMachines engaged key commercial stakeholders across all three divisions, analyzing 420 integrated delivery network accounts to build a single enterprise commercial governance framework.
              </p>
              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700">
                  <div className="text-sm font-bold text-teal-400 mb-1">Lead Client Director (LCD) Architecture</div>
                  <div className="text-xs text-slate-300">
                    Assigned a single senior enterprise executive as the single point of entry for each health system, supported by product specialists on demand.
                  </div>
                </div>
                <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700">
                  <div className="text-sm font-bold text-emerald-400 mb-1">Unified Umbrella Master Agreement</div>
                  <div className="text-xs text-slate-300">
                    Created an enterprise Master Solutions Agreement encompassing all clinical software, diagnostics, and service lines under pre-cleared HIPAA terms.
                  </div>
                </div>
                <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700">
                  <div className="text-sm font-bold text-indigo-400 mb-1">Zero-Friction Meeting & Telemetry Capture</div>
                  <div className="text-xs text-slate-300">
                    Automated calendar and communication scraping compliant with healthcare privacy standards, liberating reps from manual data entry.
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="p-8 rounded-2xl bg-slate-800 border border-slate-700 shadow-2xl">
                <div className="flex items-center justify-between border-b border-slate-700 pb-4 mb-6">
                  <div className="text-sm font-mono text-slate-400 uppercase">GTM Transformation Scorecard</div>
                  <span className="px-2.5 py-0.5 rounded text-[11px] font-mono bg-teal-500/20 text-teal-300 border border-teal-500/40">
                    VALIDATED
                  </span>
                </div>
                <div className="space-y-4 text-xs">
                  <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 flex justify-between items-center">
                    <div>
                      <div className="font-bold text-white">CRM Field Adoption</div>
                      <div className="text-slate-400">Zero-click background ingestion</div>
                    </div>
                    <span className="font-mono text-emerald-400 font-bold text-sm">80.4% (+101% lift)</span>
                  </div>
                  <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 flex justify-between items-center">
                    <div>
                      <div className="font-bold text-white">Sales Cycle Duration</div>
                      <div className="text-slate-400">Pre-cleared umbrella contracting</div>
                    </div>
                    <span className="font-mono text-teal-400 font-bold text-sm">9.5 Months (-40%)</span>
                  </div>
                  <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 flex justify-between items-center">
                    <div>
                      <div className="font-bold text-white">Cross-Sell Account Penetration</div>
                      <div className="text-slate-400">Multi-divisional customer contracts</div>
                    </div>
                    <span className="font-mono text-cyan-400 font-bold text-sm">34.8% (up from 7.9%)</span>
                  </div>
                  <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 flex justify-between items-center">
                    <div>
                      <div className="font-bold text-white">Incremental Cross-Sell ARR</div>
                      <div className="text-slate-400">Enterprise bundle adoption</div>
                    </div>
                    <span className="font-mono text-indigo-400 font-bold text-sm">+$140M Pipeline</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 5: SOLUTION ARCHITECTURE ── */}
      <section className="py-16 sm:py-20 border-b border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-100 text-teal-800 text-xs font-mono font-bold uppercase mb-4">
              PHASE 2 // TRANSFORMATION DESIGN &amp; GTM ARCHITECTURE
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading">
              The Enterprise Commercial Mesh
            </h2>
            <p className="text-base text-slate-600 mt-4">
              Four unified operating pillars transforming a fragmented collection of sales divisions into an integrated market leader.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-teal-300 transition-all">
              <div className="w-12 h-12 rounded-xl bg-teal-100 text-teal-600 flex items-center justify-center mb-4">
                <Building2 className="w-6 h-6" />
              </div>
              <div className="text-xs font-mono text-teal-600 font-bold uppercase mb-1">Pillar 1</div>
              <h3 className="text-base font-bold text-slate-900 mb-2">Single-Account Orchestrator</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Centralized account planning preventing multi-rep collisions and aligning division pitches with health system strategic objectives.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-emerald-300 transition-all">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center mb-4">
                <GitMerge className="w-6 h-6" />
              </div>
              <div className="text-xs font-mono text-emerald-600 font-bold uppercase mb-1">Pillar 2</div>
              <h3 className="text-base font-bold text-slate-900 mb-2">Harmonized CPQ & Legal</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Standardized master enterprise agreements with pre-approved BAA and security addendums, eliminating redundant contract negotiations.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-indigo-300 transition-all">
              <div className="w-12 h-12 rounded-xl bg-indigo-100 text-indigo-600 flex items-center justify-center mb-4">
                <Bot className="w-6 h-6" />
              </div>
              <div className="text-xs font-mono text-indigo-600 font-bold uppercase mb-1">Pillar 3</div>
              <h3 className="text-base font-bold text-slate-900 mb-2">Automated Field Ingestion</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Zero-friction background telemetry capturing stakeholder interactions and logging clinical notes automatically, doubling CRM adoption.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-cyan-300 transition-all">
              <div className="w-12 h-12 rounded-xl bg-cyan-100 text-cyan-600 flex items-center justify-center mb-4">
                <LineChart className="w-6 h-6" />
              </div>
              <div className="text-xs font-mono text-cyan-600 font-bold uppercase mb-1">Pillar 4</div>
              <h3 className="text-base font-bold text-slate-900 mb-2">CFO Value Realization</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Dynamic ROI calculation engines demonstrating quantifiable clinical outcome gains and bottom-line savings directly to hospital leadership.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 6: INTERACTIVE GTM TRANSFORMATION MILESTONE JOURNEY ── */}
      <section id="transformation-journey" className="py-20 border-b border-slate-200 bg-slate-50/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-100 border border-teal-200 text-teal-800 text-xs font-mono font-bold uppercase shadow-xs mb-3">
              <GitMerge className="w-3.5 h-3.5 text-teal-600" />
              <span>Transformation Journey</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading">
              The 12-Month GTM Unification Roadmap
            </h2>
            <p className="text-slate-600 text-base mt-3">
              Click through the four phases of the enterprise overhaul that aligned 280 sales specialists across 420 health systems.
            </p>
          </div>

          {/* Phase Selectors */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {milestones.map((ms, idx) => (
              <button
                key={idx}
                onClick={() => setActiveMilestone(idx)}
                className={`p-4 rounded-2xl text-left transition-all border ${
                  activeMilestone === idx
                    ? 'bg-teal-600 text-white border-teal-500 shadow-lg shadow-teal-600/20'
                    : 'bg-white text-slate-800 border-slate-200 hover:border-teal-300 hover:bg-slate-50'
                }`}
              >
                <div className={`text-[10px] font-mono font-bold uppercase mb-1 ${activeMilestone === idx ? 'text-teal-200' : 'text-teal-600'}`}>
                  {ms.quarter} · {ms.duration}
                </div>
                <div className="text-sm font-bold truncate">{ms.title}</div>
                <div className={`text-xs mt-1 ${activeMilestone === idx ? 'text-teal-100' : 'text-slate-500'}`}>
                  {ms.status}
                </div>
              </button>
            ))}
          </div>

          {/* Active Phase Detailed Display */}
          <div className="bg-slate-900 rounded-3xl p-6 sm:p-10 border border-slate-800 shadow-2xl text-white">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7">
                <div className="flex items-center gap-3 mb-3">
                  <span className="px-2.5 py-1 rounded-full text-xs font-mono font-bold bg-teal-500/20 text-teal-300 border border-teal-500/30">
                    {milestones[activeMilestone].quarter}
                  </span>
                  <span className="text-xs font-mono text-slate-400">{milestones[activeMilestone].duration}</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-3 font-heading">
                  {milestones[activeMilestone].title}
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  {milestones[activeMilestone].summary}
                </p>

                <div className="space-y-3">
                  {milestones[activeMilestone].deliverables.map((del, dIdx) => (
                    <div key={dIdx} className="flex items-start gap-3 p-3 rounded-xl bg-slate-800/80 border border-slate-700">
                      <CheckCircle2 className="w-5 h-5 text-teal-400 shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-slate-200">{del}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-5 bg-slate-950/80 p-6 rounded-2xl border border-slate-800">
                <div className="text-xs font-mono text-slate-400 uppercase mb-4">Milestone Progress & Milestones</div>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-xs font-mono mb-1">
                      <span className="text-slate-400">Phase Completion</span>
                      <span className="text-teal-400 font-bold">100% Verified</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-slate-800">
                      <div className="h-full bg-teal-500 rounded-full" style={{ width: '100%' }} />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-xs font-mono mb-1">
                      <span className="text-slate-400">Rep Compliance Metric</span>
                      <span className="text-emerald-400 font-bold">
                        {activeMilestone === 0 ? '52%' : activeMilestone === 1 ? '68%' : activeMilestone === 2 ? '80%' : '94%'}
                      </span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-slate-800">
                      <div
                        className="h-full bg-emerald-500 rounded-full"
                        style={{ width: activeMilestone === 0 ? '52%' : activeMilestone === 1 ? '68%' : activeMilestone === 2 ? '80%' : '94%' }}
                      />
                    </div>
                  </div>
                  <div className="pt-4 border-t border-slate-800">
                    <div className="text-xs font-mono text-slate-400 mb-1">ORGANIZATIONAL BENEFIT</div>
                    <div className="text-xs text-slate-200">
                      {activeMilestone === 0 && 'Unified customer identity established across 420 health systems.'}
                      {activeMilestone === 1 && 'Multi-rep collisions reduced to zero across target C-suite accounts.'}
                      {activeMilestone === 2 && 'CRM tool adoption jumped 40 percentage points through automated telemetry.'}
                      {activeMilestone === 3 && '$140M cross-sell pipeline established in multi-year subscription agreements.'}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Visual Architecture Preview */}
          <div className="mt-10 rounded-3xl overflow-hidden border border-slate-200 shadow-md relative group">
            <img
              src="/images/hero-end-to-end-transformation.png"
              alt="Healthcare GTM Transformation Architecture"
              className="w-full h-64 sm:h-80 object-cover group-hover:scale-102 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-6">
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-white bg-teal-600/90 px-3 py-1 rounded-md backdrop-blur-xs">
                  Enterprise GTM Architecture
                </span>
                <p className="text-slate-200 text-xs sm:text-sm mt-2">
                  Harmonized commercial motions across 5 operating divisions with HIPAA-compliant AI workflows.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 7: PHASED IMPLEMENTATION CADENCE ── */}
      <section className="py-16 sm:py-20 border-b border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-100 text-teal-800 text-xs font-mono font-bold uppercase mb-4">
              Execution Cadence
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading">
              Disciplined Enterprise Implementation
            </h2>
            <p className="text-base text-slate-600 mt-4">
              Carefully engineered change management ensuring clinical continuity while consolidating commercial operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="text-xs font-mono font-bold text-teal-600 uppercase mb-2">Quarter 1</div>
              <h3 className="text-base font-bold text-slate-900 mb-2">Audit & Model Design</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Diagnostic of 420 health systems, governance definition, customer identity deduplication, and Lead Client Director mapping.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="text-xs font-mono font-bold text-emerald-600 uppercase mb-2">Quarter 2</div>
              <h3 className="text-base font-bold text-slate-900 mb-2">Umbrella Contract Rollout</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Launch of unified master services contracts, pre-cleared BAA agreements, and consolidated CPQ pricing matrix.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="text-xs font-mono font-bold text-indigo-600 uppercase mb-2">Quarter 3</div>
              <h3 className="text-base font-bold text-slate-900 mb-2">Field Telemetry Deployment</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Rollout of zero-click meeting capture for 280 reps, elevating CRM data fidelity and reducing manual administrative tasks.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="text-xs font-mono font-bold text-cyan-600 uppercase mb-2">Quarter 4</div>
              <h3 className="text-base font-bold text-slate-900 mb-2">Cross-Sell Acceleration</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Deployment of dynamic enterprise bundle pricing unlocking $140M in multi-divisional health system expansions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 8: MEASURABLE OUTCOMES & ROI DASHBOARD ── */}
      <section className="py-16 sm:py-20 border-b border-slate-200 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-mono font-bold uppercase mb-4">
              PHASE 3 // EVIDENCE &amp; QUANTIFIED ROI
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading">
              Quantifiable Impact on $900M Healthcare Revenue
            </h2>
            <p className="text-base text-slate-600 mt-4">
              Full 12-month post-transformation results verified by internal finance and operational audits.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-8 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
              <div className="text-3xl font-extrabold text-teal-600 font-heading mb-1">80.4%</div>
              <div className="text-sm font-bold text-slate-900 mb-2">CRM & Tool Adoption</div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Doubled from 40% to 80.4% across 280 field reps through automated zero-click meeting and telemetry capture.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
              <div className="text-3xl font-extrabold text-emerald-600 font-heading mb-1">-40%</div>
              <div className="text-sm font-bold text-slate-900 mb-2">Sales Cycle Duration</div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Reduced average deal turnaround from 16 months down to 9.5 months via pre-cleared HIPAA umbrella agreements.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
              <div className="text-3xl font-extrabold text-indigo-600 font-heading mb-1">+60%</div>
              <div className="text-sm font-bold text-slate-900 mb-2">Commercial Efficiency Lift</div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Eliminated redundant sales engineering and administrative overhead, boosting rep productive selling time.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
              <div className="text-3xl font-extrabold text-cyan-600 font-heading mb-1">$140M</div>
              <div className="text-sm font-bold text-slate-900 mb-2">Cross-Sell Pipeline</div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Generated $140M in new multi-divisional opportunities within the first 12 months of unified account governance.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
              <div className="text-3xl font-extrabold text-amber-600 font-heading mb-1">0 Collisions</div>
              <div className="text-sm font-bold text-slate-900 mb-2">Health System Pitch Conflicts</div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Zero multi-rep collisions reported across all 420 national health systems under Lead Client Director oversight.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
              <div className="text-3xl font-extrabold text-rose-600 font-heading mb-1">100%</div>
              <div className="text-sm font-bold text-slate-900 mb-2">HIPAA & BAA Compliance</div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Zero security or compliance exceptions recorded across all unified contract and communication channels.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 9: BEFORE VS AFTER COMPARISON ── */}
      <section className="py-16 sm:py-20 border-b border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-mono font-bold uppercase mb-4">
              Structural Transformation
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading">
              GTM Operations: Baseline vs Unified State
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse border border-slate-200">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200 text-xs font-mono uppercase text-slate-500">
                  <th className="p-4 sm:p-5">Commercial Metric</th>
                  <th className="p-4 sm:p-5 text-rose-600">Prior State (3 Disjointed Divisions)</th>
                  <th className="p-4 sm:p-5 text-teal-600">ProfitMachines Unified GTM Mesh</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-sm">
                <tr>
                  <td className="p-4 sm:p-5 font-bold text-slate-900">Hospital C-Suite Coverage</td>
                  <td className="p-4 sm:p-5 text-slate-600">Uncoordinated pitches from multiple reps</td>
                  <td className="p-4 sm:p-5 font-bold text-teal-600">Single Lead Client Director orchestration</td>
                </tr>
                <tr>
                  <td className="p-4 sm:p-5 font-bold text-slate-900">Sales Cycle Duration</td>
                  <td className="p-4 sm:p-5 text-slate-600">16 months average</td>
                  <td className="p-4 sm:p-5 font-bold text-teal-600">9.5 months (-40% cycle compression)</td>
                </tr>
                <tr>
                  <td className="p-4 sm:p-5 font-bold text-slate-900">Field Tool Adoption</td>
                  <td className="p-4 sm:p-5 text-slate-600">40% rep adoption; rogue spreadsheets</td>
                  <td className="p-4 sm:p-5 font-bold text-teal-600">80.4% adoption via zero-friction telemetry</td>
                </tr>
                <tr>
                  <td className="p-4 sm:p-5 font-bold text-slate-900">Contracting & Legal</td>
                  <td className="p-4 sm:p-5 text-slate-600">3 separate MSAs, BAAs, and redlines</td>
                  <td className="p-4 sm:p-5 font-bold text-teal-600">1 pre-cleared umbrella enterprise agreement</td>
                </tr>
                <tr>
                  <td className="p-4 sm:p-5 font-bold text-slate-900">Cross-Sell Synergies</td>
                  <td className="p-4 sm:p-5 text-slate-600">&lt;8% multi-division penetration</td>
                  <td className="p-4 sm:p-5 font-bold text-teal-600">34.8% penetration; $140M pipeline created</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── SECTION 10: EXECUTIVE TESTIMONIAL ── */}
      <section className="py-16 sm:py-20 border-b border-slate-200 bg-slate-50/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-100 text-teal-800 text-xs font-mono font-bold uppercase mb-8">
            Executive Perspective
          </div>
          <blockquote className="text-xl sm:text-2xl font-serif text-slate-900 italic leading-relaxed mb-8">
            &ldquo;Acquiring three industry-leading companies was easy compared to getting their commercial organizations to speak with one voice. ProfitMachines designed and deployed our unified GTM operating system in under a year. We went from confusing hospital executives with conflicting pitches to presenting a unified clinical and economic value proposition that cut our sales cycles by 40%.&rdquo;
          </blockquote>
          <div className="flex flex-col items-center">
            <div className="font-bold text-slate-900 text-base">Dr. Julian Vance</div>
            <div className="text-xs text-slate-500 font-mono mt-1">Chief Commercial Officer · Enterprise Healthcare Solutions ($900M Revenue)</div>
          </div>
        </div>
      </section>

      {/* ── SECTION 11: CROSS-OFFERINGS & RELATED CASE STUDIES ── */}
      <section className="py-16 sm:py-20 border-b border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <div className="text-xs font-mono font-bold text-teal-600 uppercase mb-2">PHASE 4 // REPLICATION PLAYBOOK &amp; CONNECTED ARCHITECTURE</div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-heading">
                Related Healthcare & Enterprise Studies
              </h2>
            </div>
            <Link
              to="/case-studies"
              className="inline-flex items-center gap-2 text-sm font-bold text-teal-600 hover:text-teal-700 mt-4 md:mt-0"
            >
              <span>View All 8 Case Studies</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link
              to="/case-studies/healthcare-forecast-accuracy"
              className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-teal-300 hover:shadow-md transition-all group"
            >
              <div className="text-xs font-mono font-bold text-slate-400 uppercase mb-2">HEALTHCARE · FORECASTING</div>
              <h3 className="text-base font-bold text-slate-900 group-hover:text-teal-600 transition-colors mb-2">
                98% Forecast Precision
              </h3>
              <p className="text-xs text-slate-600 mb-4">
                Eliminating revenue volatility in high-compliance healthcare enterprise environments.
              </p>
              <div className="flex items-center gap-1.5 text-xs font-bold text-teal-600">
                <span>Read Case Study</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            <Link
              to="/case-studies/enterprise-saas-pipeline-growth"
              className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-teal-300 hover:shadow-md transition-all group"
            >
              <div className="text-xs font-mono font-bold text-slate-400 uppercase mb-2">ENTERPRISE · PIPELINE</div>
              <h3 className="text-base font-bold text-slate-900 group-hover:text-teal-600 transition-colors mb-2">
                Enterprise SaaS Pipeline Acceleration
              </h3>
              <p className="text-xs text-slate-600 mb-4">
                Scaling enterprise pipeline from $180M to $420M through autonomous multi-threading.
              </p>
              <div className="flex items-center gap-1.5 text-xs font-bold text-teal-600">
                <span>Read Case Study</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            <Link
              to="/case-studies/saas-revenue-operations"
              className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-teal-300 hover:shadow-md transition-all group"
            >
              <div className="text-xs font-mono font-bold text-slate-400 uppercase mb-2">OPERATIONS · EFFICIENCY</div>
              <h3 className="text-base font-bold text-slate-900 group-hover:text-teal-600 transition-colors mb-2">
                Autonomous Revenue Operations
              </h3>
              <p className="text-xs text-slate-600 mb-4">
                Reclaiming rep selling capacity and eliminating operational friction.
              </p>
              <div className="flex items-center gap-1.5 text-xs font-bold text-teal-600">
                <span>Read Case Study</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* ── SECTION 12: EXECUTIVE CONFIDENTIAL INTAKE FORM ── */}
      <section id="intake-form" className="py-20 sm:py-28 bg-slate-50 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-100 border border-teal-200 text-teal-800 text-xs font-mono font-bold uppercase shadow-xs mb-4">
              <ShieldCheck className="w-3.5 h-3.5 text-teal-600" />
              <span>Confidential GTM Diagnostic</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading">
              Align Your Enterprise Commercial Engine
            </h2>
            <p className="text-slate-600 text-base mt-3">
              Request a confidential commercial assessment to resolve multi-division sales friction, accelerate hospital sales cycles, and expand enterprise cross-sell.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-xl">
            <CaseStudyIntakeForm studyTitle="Healthcare GTM Transformation" />
          </div>
        </div>
      </section>
    </div>
  );
}
