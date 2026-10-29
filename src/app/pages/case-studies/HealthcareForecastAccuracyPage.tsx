import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight, ChevronRight, TrendingUp, BarChart3, Globe,
  ShieldCheck, Layers, Bot, Compass, CheckCircle2,
  Sparkles, Award, ArrowUpRight, DollarSign, Clock, Users,
  Zap, AlertCircle, LineChart, Target, Activity, HeartPulse, Scale
} from 'lucide-react';
import { CaseStudyIntakeForm } from '../../components/forms/CaseStudyIntakeForm';

export default function HealthcareForecastAccuracyPage() {
  useEffect(() => {
    document.title = 'From 65% to 98% Forecast Accuracy: Healthcare Tech Case Study | ProfitMachines';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans pt-16 lg:pt-[72px]">
      {/* ── SECTION 1: HERO (FORECAST CERTAINTY LAYOUT) ── */}
      <section className="relative pt-20 pb-16 sm:pt-28 sm:pb-24 overflow-hidden border-b border-slate-200 bg-white">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div
            className="absolute inset-0 opacity-[0.35]"
            style={{
              backgroundImage: 'linear-gradient(to right, #e2e8f0 1px, transparent 1px), linear-gradient(to bottom, #e2e8f0 1px, transparent 1px)',
              backgroundSize: '4rem 4rem'
            }}
          />
          <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none" />
          <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[140px] pointer-events-none" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            {/* Back link */}
            <div className="mb-6">
              <Link
                to="/case-studies"
                className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-slate-500 hover:text-emerald-600 uppercase tracking-wider transition-colors"
              >
                <ChevronRight className="w-4 h-4 rotate-180" />
                <span>Back to Case Studies</span>
              </Link>
            </div>

            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-bold tracking-wide uppercase shadow-xs mb-6">
              <span className="font-mono text-emerald-600 font-extrabold">CASE STUDY</span>
              <span className="text-slate-300 font-normal">//</span>
              <span>HEALTHCARE · GROWTH STAGE</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.08] mb-6 font-heading">
              From 65% to 98% Forecast Accuracy:{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-600 to-blue-600">
                How a Healthcare Tech Company Restored Board Confidence
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg lg:text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto mb-8">
              From 3 consecutive missed quarters and board distrust to 98% forecast accuracy with &lt;5% variance — deployed through ProfitMachines&apos; AI forecasting and RevOps platform.
            </p>

            {/* Result Badge */}
            <div className="inline-flex flex-wrap items-center justify-center gap-3 px-6 py-3 rounded-2xl bg-emerald-50/80 border border-emerald-200 text-emerald-900 font-mono text-xs sm:text-sm font-bold shadow-xs mb-10">
              <span className="text-emerald-700">98% Forecast Accuracy</span>
              <span className="text-slate-300 font-normal">|</span>
              <span className="text-blue-700">&lt;5% Variance to Plan</span>
              <span className="text-slate-300 font-normal">|</span>
              <span className="text-indigo-700">Board Confidence Restored</span>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="#intake"
                className="inline-flex items-center justify-center bg-slate-900 hover:bg-emerald-600 text-white font-bold px-7 py-4 rounded-xl shadow-lg shadow-slate-900/10 text-sm transition-all hover:-translate-y-0.5 group font-mono uppercase tracking-wider gap-2 cursor-pointer"
              >
                <span>Schedule Executive Briefing</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#outcomes"
                className="inline-flex items-center justify-center border border-slate-200 bg-white hover:bg-slate-50 text-slate-800 font-bold px-6 py-4 rounded-xl text-sm shadow-xs transition-all font-mono uppercase tracking-wider gap-2"
              >
                <span>Inspect Verified Outcomes</span>
                <ChevronRight className="w-4 h-4 text-emerald-600" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 2: EXECUTIVE SUMMARY CARD ── */}
      <section className="py-14 sm:py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-sm">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-mono font-bold uppercase mb-4">
              PHASE 1 // EXECUTIVE SNAPSHOT &amp; BASELINE CONTEXT
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-sm">
              <div>
                <span className="text-xs font-mono text-slate-400 font-bold uppercase block mb-1">Challenge</span>
                <p className="text-slate-700 leading-snug">3 consecutive missed quarters, 65% forecast accuracy, severe board distrust, and HIPAA compliance data complexity.</p>
              </div>
              <div>
                <span className="text-xs font-mono text-slate-400 font-bold uppercase block mb-1">Approach</span>
                <p className="text-slate-700 leading-snug">Deployed Revenue Operations with AI forecasting, zero-touch CRM agents, and HIPAA-compliant behavioral telemetry.</p>
              </div>
              <div>
                <span className="text-xs font-mono text-slate-400 font-bold uppercase block mb-1">Outcome</span>
                <p className="text-slate-700 leading-snug">98% forecast accuracy, &lt;5% quarterly variance, 95%+ CRM data fidelity, and complete restoration of board trust.</p>
              </div>
              <div>
                <span className="text-xs font-mono text-slate-400 font-bold uppercase block mb-1">Timeline</span>
                <p className="text-slate-700 leading-snug">12 months from diagnostic to enterprise-wide autonomous telemetry deployment.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 3: CLIENT SITUATION ── */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-mono text-emerald-600 font-bold uppercase tracking-wider block mb-2">
              Pre-Engagement Context
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight font-heading">
              The Client Situation
            </h2>
          </div>

          <div className="p-8 sm:p-10 rounded-3xl bg-slate-50 border border-slate-200 leading-relaxed text-slate-700 text-base sm:text-lg mb-8">
            A growth-stage healthcare technology company ($180M ARR) had missed forecast 3 consecutive quarters. Forecast accuracy was 65% — the board had lost trust in revenue projections. The CEO was under pressure to deliver predictable growth. HIPAA compliance added complexity to data architecture. The CFO needed mathematical certainty in forecasting, not optimistic rep commits.
          </div>

          {/* Forecast Challenge Visual */}
          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs">
            <div className="text-xs font-mono font-bold text-slate-500 uppercase mb-4">
              Diagnostic Mapping: Pre-Intervention Telemetry Friction
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-mono">
              <div className="p-4 rounded-xl bg-rose-50 border border-rose-200">
                <span className="text-rose-600 font-bold block mb-1">65% Forecast Precision</span>
                <p className="text-slate-600 font-sans">Board revenue projections missed by 35% on average each quarter.</p>
              </div>
              <div className="p-4 rounded-xl bg-amber-50 border border-amber-200">
                <span className="text-amber-600 font-bold block mb-1">30% Rep Admin Burden</span>
                <p className="text-slate-600 font-sans">Field reps wasted hours manually updating CRM with outdated estimates.</p>
              </div>
              <div className="p-4 rounded-xl bg-rose-50 border border-rose-200">
                <span className="text-rose-600 font-bold block mb-1">Zero Behavioral Signals</span>
                <p className="text-slate-600 font-sans">Pipeline committed based on rep emotional hope rather than verified health markers.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 4: GROWTH DIAGNOSIS (WHAT WE FOUND) ── */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono text-emerald-600 font-bold uppercase tracking-wider block mb-2">
              Empirical Discovery
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight font-heading">
              What We Found
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-xs">
              <div className="text-xs font-mono text-emerald-600 font-bold uppercase mb-2">Revenue Physics Findings</div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">System Defect, Not Rep Defect</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Forecast inaccuracy was fundamentally an architectural system failure, not a rep character flaw. Rep commits were optimistic guesses without behavioral telemetry, making misses inevitable.
              </p>
            </div>

            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-xs">
              <div className="text-xs font-mono text-blue-600 font-bold uppercase mb-2">Friction Diagnostics Findings</div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">60% CRM Data Fidelity</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                CRM data hygiene stood at only 60%. Reps spent nearly a third of their productive day doing manual clerical data entry rather than negotiating with hospital procurement committees.
              </p>
            </div>

            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-xs">
              <div className="text-xs font-mono text-indigo-600 font-bold uppercase mb-2">Profit Pool Insights</div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Unsegmented Forecasting Models</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                70% of enterprise revenue was generated by just 3 healthcare sub-segments — but the existing forecasting model applied generic blended win rates that masked segment volatility.
              </p>
            </div>

            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-xs">
              <div className="text-xs font-mono text-purple-600 font-bold uppercase mb-2">Growth Bottlenecks</div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Absence of Behavioral Telemetry</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                No objective deal health telemetry existed. Slippage was only discovered when closing dates silently passed at the end of the final fiscal week of the quarter.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 5: SOLUTION ARCHITECTURE ── */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono text-emerald-600 font-bold uppercase tracking-wider block mb-2">
              PHASE 2 // TRANSFORMATION DESIGN &amp; REVOPS ARCHITECTURE
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight font-heading">
              What We Deployed
            </h2>
          </div>

          <div className="space-y-6">
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200">
              <h3 className="text-lg font-bold text-slate-900 mb-4 font-mono uppercase text-emerald-600">
                1. Methodological Offerings Deployed
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div className="p-4 rounded-xl bg-white border border-slate-200">
                  <strong className="block text-slate-900 mb-1">Revenue Operations:</strong>
                  <p className="text-slate-600">Replaced subjective rep commit calls with continuous Bayesian forecast modeling based on buyer engagement signals.</p>
                </div>
                <div className="p-4 rounded-xl bg-white border border-slate-200">
                  <strong className="block text-slate-900 mb-1">AI Native Sales:</strong>
                  <p className="text-slate-600">Installed zero-touch AI RevOps Agent to log all calls, emails, and proposal views autonomously.</p>
                </div>
                <div className="p-4 rounded-xl bg-white border border-slate-200">
                  <strong className="block text-slate-900 mb-1">AI Trust &amp; Governance:</strong>
                  <p className="text-slate-600">Built a zero-PHI, HIPAA-compliant encryption pipeline ensuring hospital data security standards were met.</p>
                </div>
                <div className="p-4 rounded-xl bg-white border border-slate-200">
                  <strong className="block text-slate-900 mb-1">Executive Scorecards:</strong>
                  <p className="text-slate-600">Delivered a real-time board cockpit giving the C-suite and audit committee continuous forecast certainty.</p>
                </div>
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-slate-950 text-white border border-slate-800">
              <h3 className="text-lg font-bold text-white mb-4 font-mono uppercase text-teal-400">
                2. Autonomous AI Systems Configured
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-mono">
                <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
                  <span className="text-emerald-400 font-bold block mb-1">AI RevOps Agent</span>
                  <p className="text-slate-400 font-sans">Zero-touch data cleansing, stage velocity alerts, and automated CRM field population.</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
                  <span className="text-teal-400 font-bold block mb-1">Predictive Forecasting</span>
                  <p className="text-slate-400 font-sans">Deal health scoring analyzing buyer committee participation and legal redline frequency.</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
                  <span className="text-blue-400 font-bold block mb-1">Revenue Analytics</span>
                  <p className="text-slate-400 font-sans">Win rate variance analysis, clinical conversion velocity, and rep sales time telemetry.</p>
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
            <span className="text-xs font-mono text-emerald-600 font-bold uppercase tracking-wider block mb-2">
              Certainty Progression
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight font-heading">
              The Forecast Transformation
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-3xl bg-white border border-rose-200">
              <span className="px-2.5 py-1 rounded bg-rose-50 text-rose-700 font-mono text-xs font-bold uppercase block w-fit mb-3">
                Pre-Intervention Chaos
              </span>
              <h3 className="text-base font-bold text-slate-900 mb-2">Subjective Commit Model</h3>
              <ul className="space-y-2 text-xs text-slate-600">
                <li>• 65% forecast precision</li>
                <li>• 35% variance to actuals</li>
                <li>• 3 missed board quarters</li>
                <li>• 60% CRM data accuracy</li>
              </ul>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-emerald-200 shadow-md">
              <span className="px-2.5 py-1 rounded bg-emerald-50 text-emerald-700 font-mono text-xs font-bold uppercase block w-fit mb-3">
                Intervention Arc
              </span>
              <h3 className="text-base font-bold text-slate-900 mb-2">12-Month Deployment</h3>
              <ul className="space-y-2 text-xs text-slate-600">
                <li>• Zero-touch AI RevOps Agent deployed</li>
                <li>• Behavioral deal telemetry wired</li>
                <li>• HIPAA-compliant encryption layer</li>
                <li>• Executive telemetry board cockpit</li>
              </ul>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-teal-200">
              <span className="px-2.5 py-1 rounded bg-teal-50 text-teal-700 font-mono text-xs font-bold uppercase block w-fit mb-3">
                Restored Board Trust
              </span>
              <h3 className="text-base font-bold text-slate-900 mb-2">Mathematical Certainty</h3>
              <ul className="space-y-2 text-xs text-slate-600">
                <li>• 98% forecast precision</li>
                <li>• &lt;5% quarterly variance</li>
                <li>• 95%+ CRM data fidelity</li>
                <li>• 80% increase in selling time</li>
              </ul>
            </div>
          </div>

          {/* Visual Architecture Preview */}
          <div className="mt-8 rounded-3xl overflow-hidden border border-slate-200 shadow-md relative group">
            <img
              src="/images/industry-healthcare.png"
              alt="Healthcare Forecast Accuracy Architecture"
              className="w-full h-64 sm:h-80 object-cover group-hover:scale-102 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-6">
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-white bg-emerald-600/90 px-3 py-1 rounded-md backdrop-blur-xs">
                  Production Telemetry Architecture
                </span>
                <p className="text-slate-200 text-xs sm:text-sm mt-2">
                  HIPAA-Compliant Behavioral Telemetry and Zero-Touch RevOps Automation Engine.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 7: RESULTS DASHBOARD ── */}
      <section id="outcomes" className="py-20 sm:py-28 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono text-emerald-600 font-bold uppercase tracking-wider block mb-2">
              PHASE 3 // EVIDENCE &amp; QUANTIFIED RESULTS
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading">
              Verified Outcomes
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 text-center">
              <div className="text-4xl sm:text-5xl font-black text-slate-900 font-mono tracking-tight mb-2">
                98%
              </div>
              <div className="h-1 w-12 bg-emerald-600 mx-auto mb-4 rounded-full" />
              <p className="text-sm font-bold text-slate-900 mb-1">Forecast Accuracy</p>
              <p className="text-xs text-slate-500">Elevated from 65% baseline across 4 consecutive quarters.</p>
            </div>

            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 text-center">
              <div className="text-4xl sm:text-5xl font-black text-slate-900 font-mono tracking-tight mb-2">
                &lt;5%
              </div>
              <div className="h-1 w-12 bg-teal-600 mx-auto mb-4 rounded-full" />
              <p className="text-sm font-bold text-slate-900 mb-1">Forecast Variance</p>
              <p className="text-xs text-slate-500">Variance to board revenue targets compressed from 35%.</p>
            </div>

            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 text-center">
              <div className="text-4xl sm:text-5xl font-black text-slate-900 font-mono tracking-tight mb-2">
                95%+
              </div>
              <div className="h-1 w-12 bg-blue-600 mx-auto mb-4 rounded-full" />
              <p className="text-sm font-bold text-slate-900 mb-1">CRM Data Fidelity</p>
              <p className="text-xs text-slate-500">Zero manual entry required; full autonomous field capture.</p>
            </div>

            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 text-center">
              <div className="text-4xl sm:text-5xl font-black text-slate-900 font-mono tracking-tight mb-2">
                -60%
              </div>
              <div className="h-1 w-12 bg-indigo-600 mx-auto mb-4 rounded-full" />
              <p className="text-sm font-bold text-slate-900 mb-1">Rep Admin Overhead</p>
              <p className="text-xs text-slate-500">Admin drag reduced from 30% to 12% of representative daily hours.</p>
            </div>

            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 text-center">
              <div className="text-4xl sm:text-5xl font-black text-slate-900 font-mono tracking-tight mb-2">
                +80%
              </div>
              <div className="h-1 w-12 bg-purple-600 mx-auto mb-4 rounded-full" />
              <p className="text-sm font-bold text-slate-900 mb-1">Active Selling Time</p>
              <p className="text-xs text-slate-500">Reps redirected 18+ hours/week to negotiating with hospital executives.</p>
            </div>

            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 text-center">
              <div className="text-4xl sm:text-5xl font-black text-slate-900 font-mono tracking-tight mb-2">
                100%
              </div>
              <div className="h-1 w-12 bg-rose-600 mx-auto mb-4 rounded-full" />
              <p className="text-sm font-bold text-slate-900 mb-1">Boardroom Confidence</p>
              <p className="text-xs text-slate-500">Restored board approval for $45M international expansion capital.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 8: BEFORE VS AFTER COMPARISON TABLE ── */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-mono text-emerald-600 font-bold uppercase tracking-wider block mb-2">
              Side-By-Side Operational Shift
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight font-heading">
              The Forecast Transformation in Numbers
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
                    <th className="py-4 px-6 text-teal-400 font-bold">Verified Delta</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 font-sans text-sm">
                  <tr className="hover:bg-slate-50/80">
                    <td className="py-3.5 px-6 font-bold text-slate-900">Forecast Accuracy</td>
                    <td className="py-3.5 px-6 text-slate-600 font-mono">65% Accuracy</td>
                    <td className="py-3.5 px-6 text-emerald-600 font-bold font-mono">98% Accuracy</td>
                    <td className="py-3.5 px-6 text-teal-600 font-mono font-bold">+33 Points</td>
                  </tr>
                  <tr className="hover:bg-slate-50/80">
                    <td className="py-3.5 px-6 font-bold text-slate-900">Forecast Variance</td>
                    <td className="py-3.5 px-6 text-slate-600 font-mono">35% Variance</td>
                    <td className="py-3.5 px-6 text-emerald-600 font-bold font-mono">&lt;5% Variance</td>
                    <td className="py-3.5 px-6 text-teal-600 font-mono font-bold">-30 Points</td>
                  </tr>
                  <tr className="hover:bg-slate-50/80">
                    <td className="py-3.5 px-6 font-bold text-slate-900">CRM Data Accuracy</td>
                    <td className="py-3.5 px-6 text-slate-600 font-mono">60% Accuracy</td>
                    <td className="py-3.5 px-6 text-emerald-600 font-bold font-mono">95%+ Accuracy</td>
                    <td className="py-3.5 px-6 text-teal-600 font-mono font-bold">+35 Points</td>
                  </tr>
                  <tr className="hover:bg-slate-50/80">
                    <td className="py-3.5 px-6 font-bold text-slate-900">Rep Admin Burden</td>
                    <td className="py-3.5 px-6 text-slate-600 font-mono">30% of Rep Day</td>
                    <td className="py-3.5 px-6 text-emerald-600 font-bold font-mono">12% of Rep Day</td>
                    <td className="py-3.5 px-6 text-teal-600 font-mono font-bold">-60% Admin Time</td>
                  </tr>
                  <tr className="hover:bg-slate-50/80">
                    <td className="py-3.5 px-6 font-bold text-slate-900">Active Selling Time</td>
                    <td className="py-3.5 px-6 text-slate-600 font-mono">40% of Day</td>
                    <td className="py-3.5 px-6 text-emerald-600 font-bold font-mono">72% of Day</td>
                    <td className="py-3.5 px-6 text-teal-600 font-mono font-bold">+80% Selling Time</td>
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
            <span className="text-xs font-mono text-emerald-600 font-bold uppercase tracking-wider block mb-2">
              Strategic Takeaways
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight font-heading">
              What the CFO Learned
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200">
              <div className="font-mono text-xs font-bold text-emerald-600 mb-2">Lesson 01</div>
              <h3 className="text-base font-bold text-slate-900 mb-2">Telemetry Beats Optimism</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Forecast accuracy isn&apos;t about pushing sales reps to guess better — it&apos;s about architectural telemetry. Behavioral buyer signals solved what gut feel never could.
              </p>
            </div>
            <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200">
              <div className="font-mono text-xs font-bold text-teal-600 mb-2">Lesson 02</div>
              <h3 className="text-base font-bold text-slate-900 mb-2">Zero-Touch CRM is Mandatory</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                CRM data hygiene should never be a rep&apos;s manual responsibility. Delegating it to an autonomous AI RevOps agent doubled our CRM data fidelity instantly.
              </p>
            </div>
            <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200">
              <div className="font-mono text-xs font-bold text-blue-600 mb-2">Lesson 03</div>
              <h3 className="text-base font-bold text-slate-900 mb-2">Certainty Restores Governance</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Board confidence doesn&apos;t come from rosy presentations; it comes from repeatability. Compressing quarterly variance to &lt;5% transformed our entire governance climate.
              </p>
            </div>
          </div>

          <div className="p-8 sm:p-10 rounded-3xl bg-slate-950 text-white border border-slate-800 relative overflow-hidden">
            <p className="text-lg sm:text-xl text-slate-200 font-medium italic leading-relaxed mb-4">
              &ldquo;ProfitMachines didn&apos;t just improve our forecast — they restored board confidence. We went from hoping for accuracy to engineering mathematical predictability.&rdquo;
            </p>
            <div className="font-mono text-xs text-emerald-400">
              — Chief Financial Officer, Healthcare Technology Company ($180M ARR)
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 10: RELATED OFFERINGS ── */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-mono text-emerald-600 font-bold uppercase tracking-wider block mb-2">
              PHASE 4 // REPLICATION PLAYBOOK &amp; RELATED OFFERINGS
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-heading">
              Explore Related Methodologies
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
                Unified data federation, automated commission reconciliation, and statistical board telemetry.
              </p>
            </Link>

            <Link
              to="/ai-native-sales"
              className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-teal-400 hover:shadow-lg transition-all group block"
            >
              <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center mb-4">
                <Bot className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-lg mb-2 group-hover:text-teal-600 transition-colors flex items-center justify-between">
                <span>AI Native Sales</span>
                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 group-hover:text-teal-600 transition-all" />
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Autonomous agents handling SDR prospecting, CRM hygiene, and predictive deal health.
              </p>
            </Link>

            <Link
              to="/offerings/ai-trust-governance"
              className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-blue-400 hover:shadow-lg transition-all group block"
            >
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-lg mb-2 group-hover:text-blue-600 transition-colors flex items-center justify-between">
                <span>AI Trust &amp; Governance</span>
                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 group-hover:text-blue-600 transition-all" />
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                HIPAA, SOC2, and GDPR-compliant sovereign data architectures engineered for regulated sectors.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* ── SECTION 11: RELEVANT AI CAPABILITIES ── */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-mono text-emerald-600 font-bold uppercase tracking-wider block mb-2">
              Autonomous Systems
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-heading">
              AI Capabilities Deployed in this Engagement
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link
              to="/ai-native-sales/revenue-operations"
              className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-emerald-400 hover:shadow-md transition-all group block"
            >
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-3">
                <Bot className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-sm mb-1 group-hover:text-emerald-600 transition-colors">
                AI RevOps Agent
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Zero-touch CRM data cleansing, stage velocity alerts, and automated logging.
              </p>
            </Link>

            <Link
              to="/growth-science/executive-telemetry"
              className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-teal-400 hover:shadow-md transition-all group block"
            >
              <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center mb-3">
                <LineChart className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-sm mb-1 group-hover:text-teal-600 transition-colors">
                Predictive Forecasting
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Statistical modeling based on engagement telemetry and committee activity.
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
                CRM Intelligence
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Autonomous deal health scoring and early warning signals for pipeline slippage.
              </p>
            </Link>

            <Link
              to="/growth-science/revenue-physics"
              className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-purple-400 hover:shadow-md transition-all group block"
            >
              <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center mb-3">
                <Scale className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-sm mb-1 group-hover:text-purple-600 transition-colors">
                Revenue Analytics
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Multi-cohort win rate analytics, clinical conversion velocity, and rep sales time.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* ── SECTION 12: FINAL CTA + INTAKE FORM ── */}
      <section id="intake" className="py-20 sm:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-mono font-bold uppercase mb-4">
              CONFIDENTIAL INTAKE
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4 font-heading">
              Ready to Engineer Forecast Certainty?
            </h2>
            <p className="text-slate-600 text-base max-w-xl mx-auto">
              Schedule a confidential Executive Briefing with a Principal RevOps Architect. We will benchmark your current forecast variance and deliver a predictive roadmap within 24 business hours.
            </p>
          </div>

          <div className="p-8 sm:p-12 rounded-3xl bg-white border border-slate-200 shadow-xl">
            <CaseStudyIntakeForm
              pageContext="Healthcare Forecast Accuracy"
              defaultChallenge="Forecast Accuracy"
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
              <span>100% HIPAA BAA Compliant</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
