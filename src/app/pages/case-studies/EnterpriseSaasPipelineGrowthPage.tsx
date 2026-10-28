import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight, ChevronRight, TrendingUp, BarChart3, Globe,
  ShieldCheck, Layers, Bot, Compass, CheckCircle2,
  Sparkles, Award, ArrowUpRight, DollarSign, Clock, Users,
  Zap, AlertCircle, LineChart, Target, Activity, Cpu
} from 'lucide-react';
import { CaseStudyIntakeForm } from '../../components/forms/CaseStudyIntakeForm';

export default function EnterpriseSaasPipelineGrowthPage() {
  useEffect(() => {
    document.title = '6X Pipeline Growth in 9 Months: Enterprise SaaS Case Study | ProfitMachines';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans pt-16 lg:pt-[72px]">
      {/* ── SECTION 1: HERO (PIPELINE ACCELERATION LAYOUT) ── */}
      <section className="relative pt-20 pb-16 sm:pt-28 sm:pb-24 overflow-hidden border-b border-slate-200 bg-white">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div
            className="absolute inset-0 opacity-[0.35]"
            style={{
              backgroundImage: 'linear-gradient(to right, #e2e8f0 1px, transparent 1px), linear-gradient(to bottom, #e2e8f0 1px, transparent 1px)',
              backgroundSize: '4rem 4rem'
            }}
          />
          <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[140px] pointer-events-none" />
          <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[140px] pointer-events-none" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            {/* Back link */}
            <div className="mb-6">
              <Link
                to="/case-studies"
                className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-slate-500 hover:text-blue-600 uppercase tracking-wider transition-colors"
              >
                <ChevronRight className="w-4 h-4 rotate-180" />
                <span>Back to Case Studies</span>
              </Link>
            </div>

            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold tracking-wide uppercase shadow-xs mb-6">
              <span className="font-mono text-blue-600 font-extrabold">CASE STUDY</span>
              <span className="text-slate-300 font-normal">//</span>
              <span>ENTERPRISE SAAS · MID-MARKET</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.08] mb-6 font-heading">
              6X Pipeline Growth in 9 Months:{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
                How a $450M ARR SaaS Platform Engineered Predictable Growth
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg lg:text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto mb-8">
              From stalled growth and 30% forecast variance to 6X qualified pipeline and 98% forecast accuracy — deployed through ProfitMachines&apos; AI-native revenue platform.
            </p>

            {/* Result Badge */}
            <div className="inline-flex flex-wrap items-center justify-center gap-3 px-6 py-3 rounded-2xl bg-blue-50/80 border border-blue-200 text-blue-900 font-mono text-xs sm:text-sm font-bold shadow-xs mb-10">
              <span className="text-blue-700">6X Pipeline Growth</span>
              <span className="text-slate-300 font-normal">|</span>
              <span className="text-indigo-700">98% Forecast Accuracy</span>
              <span className="text-slate-300 font-normal">|</span>
              <span className="text-emerald-700">$180M New ARR</span>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="#intake"
                className="inline-flex items-center justify-center bg-slate-900 hover:bg-blue-600 text-white font-bold px-7 py-4 rounded-xl shadow-lg shadow-slate-900/10 text-sm transition-all hover:-translate-y-0.5 group font-mono uppercase tracking-wider gap-2 cursor-pointer"
              >
                <span>Schedule Executive Briefing</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#outcomes"
                className="inline-flex items-center justify-center border border-slate-200 bg-white hover:bg-slate-50 text-slate-800 font-bold px-6 py-4 rounded-xl text-sm shadow-xs transition-all font-mono uppercase tracking-wider gap-2"
              >
                <span>Inspect Verified Outcomes</span>
                <ChevronRight className="w-4 h-4 text-blue-600" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 2: EXECUTIVE SUMMARY CARD ── */}
      <section className="py-14 sm:py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-sm">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono font-bold uppercase mb-4">
              Executive Briefing Card
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-sm">
              <div>
                <span className="text-xs font-mono text-slate-400 font-bold uppercase block mb-1">Challenge</span>
                <p className="text-slate-700 leading-snug">Stalled growth, 30% forecast variance, fragmented 12-tool GTM stack, and 40% SDR team burnout.</p>
              </div>
              <div>
                <span className="text-xs font-mono text-slate-400 font-bold uppercase block mb-1">Approach</span>
                <p className="text-slate-700 leading-snug">Deployed Profit Pool Discovery, Demand Engineering, and autonomous AI SDR agents with approval gating.</p>
              </div>
              <div>
                <span className="text-xs font-mono text-slate-400 font-bold uppercase block mb-1">Outcome</span>
                <p className="text-slate-700 leading-snug">6X qualified pipeline velocity, 98% forecast accuracy, and $180M net new ARR in 18 months.</p>
              </div>
              <div>
                <span className="text-xs font-mono text-slate-400 font-bold uppercase block mb-1">Timeline</span>
                <p className="text-slate-700 leading-snug">18 months from initial diagnostic to fully autonomous scaled operation.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 3: CLIENT SITUATION ── */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-mono text-blue-600 font-bold uppercase tracking-wider block mb-2">
              Pre-Engagement Context
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight font-heading">
              The Client Situation
            </h2>
          </div>

          <div className="p-8 sm:p-10 rounded-3xl bg-slate-50 border border-slate-200 leading-relaxed text-slate-700 text-base sm:text-lg mb-8">
            A Series D SaaS platform with $450M ARR faced a growth plateau. Despite strong product-market fit and a large TAM, pipeline growth had stalled at 15% YoY. Forecast accuracy was 70% — meaning the board couldn&apos;t trust revenue projections. The GTM stack was fragmented across 12 disconnected tools. SDRs were burning out at 40% annual churn. The CRO knew something had to change, but lacked empirical behavioral telemetry to isolate root causes.
          </div>

          {/* Situation Fragmentation Diagram */}
          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs">
            <div className="text-xs font-mono font-bold text-slate-500 uppercase mb-4">
              Diagnostic Mapping: Baseline Fragmentation
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-mono">
              <div className="p-4 rounded-xl bg-rose-50 border border-rose-200">
                <span className="text-rose-600 font-bold block mb-1">15% YoY Growth</span>
                <p className="text-slate-600 font-sans">Stalled despite increasing outbound sales spend by 35%.</p>
              </div>
              <div className="p-4 rounded-xl bg-amber-50 border border-amber-200">
                <span className="text-amber-600 font-bold block mb-1">30% Forecast Variance</span>
                <p className="text-slate-600 font-sans">Subjective rep commits resulted in 3 consecutive board missed forecasts.</p>
              </div>
              <div className="p-4 rounded-xl bg-rose-50 border border-rose-200">
                <span className="text-rose-600 font-bold block mb-1">40% SDR Churn</span>
                <p className="text-slate-600 font-sans">Reps spent 60% of time on manual data entry and cold list scraping.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 4: GROWTH DIAGNOSIS (WHAT WE FOUND) ── */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono text-blue-600 font-bold uppercase tracking-wider block mb-2">
              Empirical Discovery
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight font-heading">
              What We Found
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-xs">
              <div className="text-xs font-mono text-blue-600 font-bold uppercase mb-2">Revenue Physics Findings</div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Sub-Optimal LTV:CAC Ratio (2.1X)</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                LTV:CAC ratio was 2.1X — below the 3X threshold for sustainable enterprise SaaS growth. 60% of acquired customers would never expand beyond their initial contract tier, dragging down capital efficiency.
              </p>
            </div>

            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-xs">
              <div className="text-xs font-mono text-indigo-600 font-bold uppercase mb-2">Friction Diagnostics Findings</div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">45% Funnel Leakage &amp; 12 Pt Margin Erosion</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Pipeline leakage was concentrated at 45% between discovery and technical proposal stage. Margin erosion from uncontrolled rogue sales discounting was costing 12 gross margin points annually.
              </p>
            </div>

            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-xs">
              <div className="text-xs font-mono text-emerald-600 font-bold uppercase mb-2">Profit Pool Insights</div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">80/20 Account Asymmetry</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                70% of company gross profit came from just 20% of customer accounts — but acquisition budget and SDR capacity were distributed completely uniformly across low-yield and high-yield tiers.
              </p>
            </div>

            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-xs">
              <div className="text-xs font-mono text-purple-600 font-bold uppercase mb-2">Growth Bottlenecks</div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Binding SDR Capacity Constraint</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Human SDR capacity was the critical binding constraint. Manual list enrichment and message writing could not physically scale to capture dark-funnel market opportunity without massive headcount costs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 5: SOLUTION ARCHITECTURE (WHAT WE DEPLOYED) ── */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono text-blue-600 font-bold uppercase tracking-wider block mb-2">
              Systemic Intervention
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight font-heading">
              What We Deployed
            </h2>
          </div>

          <div className="space-y-6">
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200">
              <h3 className="text-lg font-bold text-slate-900 mb-4 font-mono uppercase text-blue-600">
                1. Methodological Offerings Deployed
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div className="p-4 rounded-xl bg-white border border-slate-200">
                  <strong className="block text-slate-900 mb-1">Profit Pool Discovery:</strong>
                  <p className="text-slate-600">Mapped customer cohorts by LTV trajectory, isolating high-compounding accounts and establishing strict discount governance.</p>
                </div>
                <div className="p-4 rounded-xl bg-white border border-slate-200">
                  <strong className="block text-slate-900 mb-1">Demand Engineering:</strong>
                  <p className="text-slate-600">Deployed dark-funnel intent tracking, multi-channel orchestration, and high-frequency automated nurture.</p>
                </div>
                <div className="p-4 rounded-xl bg-white border border-slate-200">
                  <strong className="block text-slate-900 mb-1">Sales Acceleration:</strong>
                  <p className="text-slate-600">Implemented predictive deal health scoring and automated custom proposal generation.</p>
                </div>
                <div className="p-4 rounded-xl bg-white border border-slate-200">
                  <strong className="block text-slate-900 mb-1">Revenue Operations:</strong>
                  <p className="text-slate-600">Installed AI RevOps Agent for zero-touch CRM hygiene and statistical forecast modeling.</p>
                </div>
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-slate-950 text-white border border-slate-800">
              <h3 className="text-lg font-bold text-white mb-4 font-mono uppercase text-purple-400">
                2. Autonomous AI Systems Configured
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-mono">
                <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
                  <span className="text-blue-400 font-bold block mb-1">AI SDR Agent</span>
                  <p className="text-slate-400 font-sans">Autonomous prospecting, intent qualification, objection handling, and calendar booking.</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
                  <span className="text-indigo-400 font-bold block mb-1">AI RevOps Agent</span>
                  <p className="text-slate-400 font-sans">Automated CRM logging, commission audit, and real-time board forecast updates.</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
                  <span className="text-emerald-400 font-bold block mb-1">Revenue Intelligence</span>
                  <p className="text-slate-400 font-sans">Dark-funnel buyer intent detection, account prioritization, and competitive tracking.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 6: VISUAL TRANSFORMATION DIAGRAM ── */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono text-blue-600 font-bold uppercase tracking-wider block mb-2">
              Timeline Progression
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight font-heading">
              The Transformation Journey
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-3xl bg-white border border-rose-200">
              <span className="px-2.5 py-1 rounded bg-rose-50 text-rose-700 font-mono text-xs font-bold uppercase block w-fit mb-3">
                Phase 1: Baseline Friction
              </span>
              <h3 className="text-base font-bold text-slate-900 mb-2">Fragmented Stack</h3>
              <ul className="space-y-2 text-xs text-slate-600">
                <li>• 15% YoY pipeline growth</li>
                <li>• 70% forecast accuracy</li>
                <li>• 12 disconnected tools</li>
                <li>• 40% SDR team burnout</li>
              </ul>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-blue-200 shadow-md">
              <span className="px-2.5 py-1 rounded bg-blue-50 text-blue-700 font-mono text-xs font-bold uppercase block w-fit mb-3">
                Phase 2: Platform Deployment
              </span>
              <h3 className="text-base font-bold text-slate-900 mb-2">18-Month Engagement</h3>
              <ul className="space-y-2 text-xs text-slate-600">
                <li>• Profit Pool re-allocation</li>
                <li>• AI SDR Agent swarm launch</li>
                <li>• CRM discount governance</li>
                <li>• Behavioral forecast telemetry</li>
              </ul>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-emerald-200">
              <span className="px-2.5 py-1 rounded bg-emerald-50 text-emerald-700 font-mono text-xs font-bold uppercase block w-fit mb-3">
                Phase 3: Autonomous Scale
              </span>
              <h3 className="text-base font-bold text-slate-900 mb-2">Revenue Operating System</h3>
              <ul className="space-y-2 text-xs text-slate-600">
                <li>• 90% YoY pipeline growth (6X)</li>
                <li>• 98% forecast accuracy (&lt;5% var)</li>
                <li>• $180M net new ARR</li>
                <li>• 60+ hours reclaimed/team/week</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 7: RESULTS DASHBOARD (6 LARGE METRIC CARDS) ── */}
      <section id="outcomes" className="py-20 sm:py-28 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono text-blue-600 font-bold uppercase tracking-wider block mb-2">
              Empirical Performance Verification
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading">
              Verified Outcomes
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 text-center">
              <div className="text-4xl sm:text-5xl font-black text-slate-900 font-mono tracking-tight mb-2">
                90% YoY
              </div>
              <div className="h-1 w-12 bg-blue-600 mx-auto mb-4 rounded-full" />
              <p className="text-sm font-bold text-slate-900 mb-1">Annual Revenue Growth</p>
              <p className="text-xs text-slate-500">Accelerated from 15% pre-engagement baseline.</p>
            </div>

            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 text-center">
              <div className="text-4xl sm:text-5xl font-black text-slate-900 font-mono tracking-tight mb-2">
                6X
              </div>
              <div className="h-1 w-12 bg-indigo-600 mx-auto mb-4 rounded-full" />
              <p className="text-sm font-bold text-slate-900 mb-1">Qualified Pipeline</p>
              <p className="text-xs text-slate-500">Net expansion in qualified meetings and pipeline value.</p>
            </div>

            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 text-center">
              <div className="text-4xl sm:text-5xl font-black text-slate-900 font-mono tracking-tight mb-2">
                98%
              </div>
              <div className="h-1 w-12 bg-emerald-600 mx-auto mb-4 rounded-full" />
              <p className="text-sm font-bold text-slate-900 mb-1">Forecast Accuracy</p>
              <p className="text-xs text-slate-500">Restored from 70%; variance compressed to under 5%.</p>
            </div>

            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 text-center">
              <div className="text-4xl sm:text-5xl font-black text-slate-900 font-mono tracking-tight mb-2">
                3.8X
              </div>
              <div className="h-1 w-12 bg-purple-600 mx-auto mb-4 rounded-full" />
              <p className="text-sm font-bold text-slate-900 mb-1">SDR Meeting Velocity</p>
              <p className="text-xs text-slate-500">Autonomous prospecting swarms multiplied rep bookings.</p>
            </div>

            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 text-center">
              <div className="text-4xl sm:text-5xl font-black text-slate-900 font-mono tracking-tight mb-2">
                -45%
              </div>
              <div className="h-1 w-12 bg-sky-600 mx-auto mb-4 rounded-full" />
              <p className="text-sm font-bold text-slate-900 mb-1">Customer Acquisition Cost</p>
              <p className="text-xs text-slate-500">CAC decreased from $12,000 to $6,600 per customer.</p>
            </div>

            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 text-center">
              <div className="text-4xl sm:text-5xl font-black text-slate-900 font-mono tracking-tight mb-2">
                60+ Hrs
              </div>
              <div className="h-1 w-12 bg-rose-600 mx-auto mb-4 rounded-full" />
              <p className="text-sm font-bold text-slate-900 mb-1">Hours Reclaimed / Team / Week</p>
              <p className="text-xs text-slate-500">Zero-touch CRM data hygiene eliminated admin overhead.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 8: BEFORE VS AFTER COMPARISON TABLE ── */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-mono text-blue-600 font-bold uppercase tracking-wider block mb-2">
              Side-By-Side Operational Shift
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight font-heading">
              The Transformation in Numbers
            </h2>
          </div>

          <div className="rounded-3xl bg-white border border-slate-200 overflow-hidden shadow-xs">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs font-mono">
                <thead className="bg-slate-950 text-white uppercase tracking-wider">
                  <tr>
                    <th className="py-4 px-6 font-bold">Metric Dimension</th>
                    <th className="py-4 px-6 text-slate-400">Before Deployment</th>
                    <th className="py-4 px-6 text-emerald-400 font-bold">After Platform</th>
                    <th className="py-4 px-6 text-blue-400 font-bold">Verified Delta</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 font-sans text-sm">
                  <tr className="hover:bg-slate-50/80">
                    <td className="py-3.5 px-6 font-bold text-slate-900">Pipeline Growth (YoY)</td>
                    <td className="py-3.5 px-6 text-slate-600 font-mono">15% YoY</td>
                    <td className="py-3.5 px-6 text-emerald-600 font-bold font-mono">90% YoY</td>
                    <td className="py-3.5 px-6 text-blue-600 font-mono font-bold">6X Velocity</td>
                  </tr>
                  <tr className="hover:bg-slate-50/80">
                    <td className="py-3.5 px-6 font-bold text-slate-900">Forecast Accuracy</td>
                    <td className="py-3.5 px-6 text-slate-600 font-mono">70% Accuracy</td>
                    <td className="py-3.5 px-6 text-emerald-600 font-bold font-mono">98% Accuracy</td>
                    <td className="py-3.5 px-6 text-blue-600 font-mono font-bold">+28 Points</td>
                  </tr>
                  <tr className="hover:bg-slate-50/80">
                    <td className="py-3.5 px-6 font-bold text-slate-900">SDR Meeting Velocity</td>
                    <td className="py-3.5 px-6 text-slate-600 font-mono">1.0X Baseline</td>
                    <td className="py-3.5 px-6 text-emerald-600 font-bold font-mono">3.8X Velocity</td>
                    <td className="py-3.5 px-6 text-blue-600 font-mono font-bold">3.8X Improvement</td>
                  </tr>
                  <tr className="hover:bg-slate-50/80">
                    <td className="py-3.5 px-6 font-bold text-slate-900">Customer Acquisition Cost</td>
                    <td className="py-3.5 px-6 text-slate-600 font-mono">$12,000 CAC</td>
                    <td className="py-3.5 px-6 text-emerald-600 font-bold font-mono">$6,600 CAC</td>
                    <td className="py-3.5 px-6 text-blue-600 font-mono font-bold">-45% Compression</td>
                  </tr>
                  <tr className="hover:bg-slate-50/80">
                    <td className="py-3.5 px-6 font-bold text-slate-900">Rep Admin Time</td>
                    <td className="py-3.5 px-6 text-slate-600 font-mono">60% of Day</td>
                    <td className="py-3.5 px-6 text-emerald-600 font-bold font-mono">20% of Day</td>
                    <td className="py-3.5 px-6 text-blue-600 font-mono font-bold">-67% Admin Drag</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 9: EXECUTIVE LESSONS & QUOTE ── */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono text-blue-600 font-bold uppercase tracking-wider block mb-2">
              Strategic Takeaways
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight font-heading">
              What the CRO Learned
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200">
              <div className="font-mono text-xs font-bold text-blue-600 mb-2">Lesson 01</div>
              <h3 className="text-base font-bold text-slate-900 mb-2">Growth is Physics, Not Hustle</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Growth isn&apos;t about adding more SDR headcount — it&apos;s about doing the right things with autonomous execution.
              </p>
            </div>
            <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200">
              <div className="font-mono text-xs font-bold text-indigo-600 mb-2">Lesson 02</div>
              <h3 className="text-base font-bold text-slate-900 mb-2">Forecast is a System Problem</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Forecast accuracy isn&apos;t a rep discipline problem — it&apos;s an architectural system problem. Behavioral telemetry solves it.
              </p>
            </div>
            <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200">
              <div className="font-mono text-xs font-bold text-emerald-600 mb-2">Lesson 03</div>
              <h3 className="text-base font-bold text-slate-900 mb-2">Agents Amplify Humans</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                AI agents don&apos;t replace humans — they replace the manual drudgery that prevents humans from closing complex deals.
              </p>
            </div>
          </div>

          {/* Full Executive Quote */}
          <div className="p-8 sm:p-10 rounded-3xl bg-slate-950 text-white border border-slate-800 relative overflow-hidden">
            <p className="text-lg sm:text-xl text-slate-200 font-medium italic leading-relaxed mb-4">
              &ldquo;ProfitMachines didn&apos;t just give us tools — they gave us a revenue operating system. We went from hoping for growth to engineering it with mathematical predictability.&rdquo;
            </p>
            <div className="font-mono text-xs text-blue-400">
              — Chief Revenue Officer, Enterprise SaaS Platform ($450M ARR)
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 10: RELATED OFFERINGS (3 CARDS) ── */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-mono text-blue-600 font-bold uppercase tracking-wider block mb-2">
              Cross-Platform Synergy
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-heading">
              Explore Related Methodologies
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link
              to="/offerings/demand-engineering"
              className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-blue-400 hover:shadow-lg transition-all group block"
            >
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
                <Target className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-lg mb-2 group-hover:text-blue-600 transition-colors flex items-center justify-between">
                <span>Demand Engineering</span>
                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 group-hover:text-blue-600 transition-all" />
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Multi-channel buyer intent capture and dark funnel activation engineered for high-growth pipelines.
              </p>
            </Link>

            <Link
              to="/offerings/sales-acceleration"
              className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-indigo-400 hover:shadow-lg transition-all group block"
            >
              <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-4">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-lg mb-2 group-hover:text-indigo-600 transition-colors flex items-center justify-between">
                <span>Sales Acceleration</span>
                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 group-hover:text-indigo-600 transition-all" />
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Predictive deal intelligence and committee consensus accelerators that compress sales cycle times.
              </p>
            </Link>

            <Link
              to="/offerings/revenue-operations"
              className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-emerald-400 hover:shadow-lg transition-all group block"
            >
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-lg mb-2 group-hover:text-emerald-600 transition-colors flex items-center justify-between">
                <span>Revenue Operations</span>
                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 group-hover:text-emerald-600 transition-all" />
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Unified data federation, automated commission models, and statistical board forecast certainty.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* ── SECTION 11: RELEVANT AI CAPABILITIES (4 CARDS) ── */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-mono text-purple-600 font-bold uppercase tracking-wider block mb-2">
              Autonomous Systems
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-heading">
              AI Capabilities Deployed in this Engagement
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link
              to="/ai-native-sales/agentic-sdr"
              className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-purple-400 hover:shadow-md transition-all group block"
            >
              <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center mb-3">
                <Bot className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-sm mb-1 group-hover:text-purple-600 transition-colors">
                AI SDR Agent Swarms
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Autonomous prospecting and personalized outbound with human oversight.
              </p>
            </Link>

            <Link
              to="/ai-native-sales/revenue-operations"
              className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-indigo-400 hover:shadow-md transition-all group block"
            >
              <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-3">
                <Cpu className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-sm mb-1 group-hover:text-indigo-600 transition-colors">
                AI RevOps Agent
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Zero-touch CRM data cleansing, logging, and reporting automation.
              </p>
            </Link>

            <Link
              to="/ai-native-sales/revenue-intelligence"
              className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-blue-400 hover:shadow-md transition-all group block"
            >
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-3">
                <Compass className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-sm mb-1 group-hover:text-blue-600 transition-colors">
                Revenue Intelligence
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Buyer intent scoring, account tiering, and competitor radar swarms.
              </p>
            </Link>

            <Link
              to="/ai-native-sales/deal-execution"
              className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-emerald-400 hover:shadow-md transition-all group block"
            >
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-3">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-sm mb-1 group-hover:text-emerald-600 transition-colors">
                Predictive Deal Intelligence
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Real-time committee consensus mapping and deal slippage prevention.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* ── SECTION 12: FINAL CTA + INTAKE FORM ── */}
      <section id="intake" className="py-20 sm:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono font-bold uppercase mb-4">
              CONFIDENTIAL INTAKE
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4 font-heading">
              Ready to Engineer Similar Results?
            </h2>
            <p className="text-slate-600 text-base max-w-xl mx-auto">
              Schedule a confidential Executive Briefing with a Principal Architect. We will benchmark your current pipeline velocity and model an engineered scaling roadmap within 24 business hours.
            </p>
          </div>

          <div className="p-8 sm:p-12 rounded-3xl bg-white border border-slate-200 shadow-xl">
            <CaseStudyIntakeForm
              pageContext="Enterprise SaaS Pipeline Growth"
              defaultChallenge="Pipeline Growth"
              buttonText="Schedule Executive Briefing"
            />
          </div>

          <div className="mt-12 text-center">
            <div className="inline-flex flex-wrap items-center justify-center gap-4 sm:gap-8 px-6 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-xs font-mono font-semibold text-slate-600">
              <span>500+ B2B Companies</span>
              <span className="text-slate-300">·</span>
              <span>5X Avg Revenue Growth</span>
              <span className="text-slate-300">·</span>
              <span>24/7 AI Support</span>
              <span className="text-slate-300">·</span>
              <span>SOC2 Type II &amp; ISO 27001</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
