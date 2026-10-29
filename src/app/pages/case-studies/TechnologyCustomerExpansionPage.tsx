import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight, ChevronRight, TrendingUp, BarChart3, Globe,
  ShieldCheck, Layers, Bot, Compass, CheckCircle2,
  Sparkles, Award, ArrowUpRight, DollarSign, Clock, Users,
  Zap, AlertCircle, LineChart, Target, Activity, RefreshCw, Network
} from 'lucide-react';
import { CaseStudyIntakeForm } from '../../components/forms/CaseStudyIntakeForm';

export default function TechnologyCustomerExpansionPage() {
  useEffect(() => {
    document.title = '40% NRR Improvement: Enterprise Technology Case Study | ProfitMachines';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans pt-16 lg:pt-[72px]">
      {/* ── SECTION 1: HERO (CUSTOMER EXPANSION LAYOUT) ── */}
      <section className="relative pt-20 pb-16 sm:pt-28 sm:pb-24 overflow-hidden border-b border-slate-200 bg-white">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div
            className="absolute inset-0 opacity-[0.35]"
            style={{
              backgroundImage: 'linear-gradient(to right, #e2e8f0 1px, transparent 1px), linear-gradient(to bottom, #e2e8f0 1px, transparent 1px)',
              backgroundSize: '4rem 4rem'
            }}
          />
          <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-sky-500/10 rounded-full blur-[140px] pointer-events-none" />
          <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[140px] pointer-events-none" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            {/* Back link */}
            <div className="mb-6">
              <Link
                to="/case-studies"
                className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-slate-500 hover:text-sky-600 uppercase tracking-wider transition-colors"
              >
                <ChevronRight className="w-4 h-4 rotate-180" />
                <span>Back to Case Studies</span>
              </Link>
            </div>

            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-200 text-sky-700 text-xs font-bold tracking-wide uppercase shadow-xs mb-6">
              <span className="font-mono text-sky-600 font-extrabold">CASE STUDY</span>
              <span className="text-slate-300 font-normal">//</span>
              <span>TECHNOLOGY · ENTERPRISE</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.08] mb-6 font-heading">
              40% NRR Improvement:{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-600">
                How an Enterprise Tech Company Engineered Predictable Expansion
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg lg:text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto mb-8">
              From flat NRR and reactive customer management to 40% NRR improvement and 25% expansion revenue growth — deployed through ProfitMachines&apos; Customer Success Engine.
            </p>

            {/* Result Badge */}
            <div className="inline-flex flex-wrap items-center justify-center gap-3 px-6 py-3 rounded-2xl bg-sky-50/80 border border-sky-200 text-sky-900 font-mono text-xs sm:text-sm font-bold shadow-xs mb-10">
              <span className="text-sky-700">40% NRR Improvement</span>
              <span className="text-slate-300 font-normal">|</span>
              <span className="text-blue-700">25% Expansion Revenue Growth</span>
              <span className="text-slate-300 font-normal">|</span>
              <span className="text-emerald-700">90% Churn Prediction</span>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="#intake"
                className="inline-flex items-center justify-center bg-slate-900 hover:bg-sky-600 text-white font-bold px-7 py-4 rounded-xl shadow-lg shadow-slate-900/10 text-sm transition-all hover:-translate-y-0.5 group font-mono uppercase tracking-wider gap-2 cursor-pointer"
              >
                <span>Schedule Executive Briefing</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#outcomes"
                className="inline-flex items-center justify-center border border-slate-200 bg-white hover:bg-slate-50 text-slate-800 font-bold px-6 py-4 rounded-xl text-sm shadow-xs transition-all font-mono uppercase tracking-wider gap-2"
              >
                <span>Inspect Verified Outcomes</span>
                <ChevronRight className="w-4 h-4 text-sky-600" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 2: EXECUTIVE SUMMARY CARD ── */}
      <section className="py-14 sm:py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-sm">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-200 text-sky-700 text-xs font-mono font-bold uppercase mb-4">
              PHASE 1 // EXECUTIVE SNAPSHOT &amp; BASELINE CONTEXT
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-sm">
              <div>
                <span className="text-xs font-mono text-slate-400 font-bold uppercase block mb-1">Challenge</span>
                <p className="text-slate-700 leading-snug">Flat NRR at 100%, reactive customer management, missed expansion upsells, and sudden churn surprises.</p>
              </div>
              <div>
                <span className="text-xs font-mono text-slate-400 font-bold uppercase block mb-1">Approach</span>
                <p className="text-slate-700 leading-snug">Deployed Customer Success Engine with autonomous AI CS Agents, usage milestone triggers, and 60-day churn radar.</p>
              </div>
              <div>
                <span className="text-xs font-mono text-slate-400 font-bold uppercase block mb-1">Outcome</span>
                <p className="text-slate-700 leading-snug">40% NRR improvement (100% to 140%), 25% expansion revenue growth, and 90% churn prediction accuracy.</p>
              </div>
              <div>
                <span className="text-xs font-mono text-slate-400 font-bold uppercase block mb-1">Timeline</span>
                <p className="text-slate-700 leading-snug">12 months from diagnostic to full enterprise telemetry integration.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 3: CLIENT SITUATION ── */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-mono text-sky-600 font-bold uppercase tracking-wider block mb-2">
              Pre-Engagement Context
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight font-heading">
              The Client Situation
            </h2>
          </div>

          <div className="p-8 sm:p-10 rounded-3xl bg-slate-50 border border-slate-200 leading-relaxed text-slate-700 text-base sm:text-lg mb-8">
            An enterprise technology company ($600M ARR) had flat NRR at 100% — meaning they weren&apos;t growing existing customer revenue. Customer success was reactive — they found out customers were at risk when they sent cancellation notices. Expansion opportunities were discovered accidentally, not systematically. The CRO needed to engineer predictable customer expansion.
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs">
            <div className="text-xs font-mono font-bold text-slate-500 uppercase mb-4">
              Diagnostic Mapping: Retention &amp; Expansion Blindspots
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-mono">
              <div className="p-4 rounded-xl bg-rose-50 border border-rose-200">
                <span className="text-rose-600 font-bold block mb-1">100% Flat NRR</span>
                <p className="text-slate-600 font-sans">Zero net account expansion; customer ARR stagnated after initial contract signoff.</p>
              </div>
              <div className="p-4 rounded-xl bg-amber-50 border border-amber-200">
                <span className="text-amber-600 font-bold block mb-1">Accidental Upselling</span>
                <p className="text-slate-600 font-sans">CSMs lacked usage telemetry to detect when customers exceeded licensed limits.</p>
              </div>
              <div className="p-4 rounded-xl bg-rose-50 border border-rose-200">
                <span className="text-rose-600 font-bold block mb-1">Reactive Churn</span>
                <p className="text-slate-600 font-sans">Cancellations surfaced only at formal contract non-renewal, leaving zero rescue time.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 4: GROWTH DIAGNOSIS (WHAT WE FOUND) ── */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono text-sky-600 font-bold uppercase tracking-wider block mb-2">
              Empirical Discovery
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight font-heading">
              What We Found
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-xs">
              <div className="text-xs font-mono text-sky-600 font-bold uppercase mb-2">Revenue Physics Findings</div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Unwired Expansion Thresholds</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Customers were regularly consuming 200% of their contracted tier limits, but because contract expansion triggers were not wired into software telemetry, automated upgrades were never triggered.
              </p>
            </div>

            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-xs">
              <div className="text-xs font-mono text-blue-600 font-bold uppercase mb-2">Friction Diagnostics Findings</div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">60-Day Advance Warning Window</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                60% of churned accounts exhibited distinct behavioral drop-offs (declining API calls, executive login drops) 60 days before cancellation, but CSMs lacked automated radar to detect them.
              </p>
            </div>

            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-xs">
              <div className="text-xs font-mono text-emerald-600 font-bold uppercase mb-2">Profit Pool Insights</div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">20% Concentrated Upsell Pool</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                20% of enterprise client accounts accounted for 80% of all latent expansion value — yet account managers spent identical hours servicing low-potential accounts.
              </p>
            </div>

            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-xs">
              <div className="text-xs font-mono text-purple-600 font-bold uppercase mb-2">Growth Bottlenecks</div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Manual Account Monitoring Overhead</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                CSMs were overburdened with clerical check-in emails, preventing them from focusing on executive stakeholder alignment in high-potential expansion accounts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 5: SOLUTION ARCHITECTURE ── */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono text-sky-600 font-bold uppercase tracking-wider block mb-2">
              PHASE 2 // TRANSFORMATION DESIGN &amp; EXPANSION ARCHITECTURE
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight font-heading">
              What We Deployed
            </h2>
          </div>

          <div className="space-y-6">
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200">
              <h3 className="text-lg font-bold text-slate-900 mb-4 font-mono uppercase text-sky-600">
                1. Methodological Offerings Deployed
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div className="p-4 rounded-xl bg-white border border-slate-200">
                  <strong className="block text-slate-900 mb-1">Customer Success Engine:</strong>
                  <p className="text-slate-600">Replaced subjective customer satisfaction surveys with live usage telemetry and automated tier expansion triggers.</p>
                </div>
                <div className="p-4 rounded-xl bg-white border border-slate-200">
                  <strong className="block text-slate-900 mb-1">AI Native Sales:</strong>
                  <p className="text-slate-600">Deployed AI Customer Success Agents to monitor account health and surface upsell opportunities continuously.</p>
                </div>
                <div className="p-4 rounded-xl bg-white border border-slate-200">
                  <strong className="block text-slate-900 mb-1">Revenue Operations:</strong>
                  <p className="text-slate-600">Installed customer health scoring, usage analytics, and automated renewal pipeline tracking.</p>
                </div>
                <div className="p-4 rounded-xl bg-white border border-slate-200">
                  <strong className="block text-slate-900 mb-1">Expansion Intelligence:</strong>
                  <p className="text-slate-600">Algorithmic cross-sell discovery matching enterprise product features to unutilized client departments.</p>
                </div>
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-slate-950 text-white border border-slate-800">
              <h3 className="text-lg font-bold text-white mb-4 font-mono uppercase text-sky-400">
                2. Autonomous AI Systems Configured
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-mono">
                <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
                  <span className="text-sky-400 font-bold block mb-1">AI CS Agent</span>
                  <p className="text-slate-400 font-sans">Continuous product adoption monitoring, renewal scheduling, and automated upsell discovery.</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
                  <span className="text-blue-400 font-bold block mb-1">Predictive Churn Radar</span>
                  <p className="text-slate-400 font-sans">Multi-signal behavioral health scoring with automated 60-day advance alerts.</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
                  <span className="text-emerald-400 font-bold block mb-1">Expansion Trigger Copilot</span>
                  <p className="text-slate-400 font-sans">Instant commercial proposal generation when customer usage crosses contracted limits.</p>
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
            <span className="text-xs font-mono text-sky-600 font-bold uppercase tracking-wider block mb-2">
              Expansion Lifecycle Progression
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight font-heading">
              The Customer Expansion Transformation
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-3xl bg-white border border-rose-200">
              <span className="px-2.5 py-1 rounded bg-rose-50 text-rose-700 font-mono text-xs font-bold uppercase block w-fit mb-3">
                Reactive Account Drag
              </span>
              <h3 className="text-base font-bold text-slate-900 mb-2">Stagnant Lifecycle</h3>
              <ul className="space-y-2 text-xs text-slate-600">
                <li>• Flat 100% NRR</li>
                <li>• Reactive cancellation discovery</li>
                <li>• Unwired tier threshold limits</li>
                <li>• 0% systematic expansion growth</li>
              </ul>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-sky-200 shadow-md">
              <span className="px-2.5 py-1 rounded bg-sky-50 text-sky-700 font-mono text-xs font-bold uppercase block w-fit mb-3">
                Intervention Arc
              </span>
              <h3 className="text-base font-bold text-slate-900 mb-2">12-Month Deployment</h3>
              <ul className="space-y-2 text-xs text-slate-600">
                <li>• Customer Success Engine activated</li>
                <li>• AI CS Agent monitoring telemetry</li>
                <li>• Usage milestone triggers wired</li>
                <li>• 60-day churn radar installed</li>
              </ul>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-emerald-200">
              <span className="px-2.5 py-1 rounded bg-emerald-50 text-emerald-700 font-mono text-xs font-bold uppercase block w-fit mb-3">
                Compounding Growth Loops
              </span>
              <h3 className="text-base font-bold text-slate-900 mb-2">Predictable Expansion OS</h3>
              <ul className="space-y-2 text-xs text-slate-600">
                <li>• 140% Net Revenue Retention (+40%)</li>
                <li>• 25% expansion revenue growth</li>
                <li>• 90% churn prediction accuracy</li>
                <li>• 12+ CSM hours reclaimed weekly</li>
              </ul>
            </div>
          </div>

          {/* Visual Architecture Preview */}
          <div className="mt-8 rounded-3xl overflow-hidden border border-slate-200 shadow-md relative group">
            <img
              src="/images/demand-pulse-dashboard.png"
              alt="Technology Customer Expansion Telemetry"
              className="w-full h-64 sm:h-80 object-cover group-hover:scale-102 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-6">
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-white bg-sky-600/90 px-3 py-1 rounded-md backdrop-blur-xs">
                  Production Telemetry Architecture
                </span>
                <p className="text-slate-200 text-xs sm:text-sm mt-2">
                  Real-time product usage telemetry, predictive health scoring, and automated account expansion loops.
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
            <span className="text-xs font-mono text-sky-600 font-bold uppercase tracking-wider block mb-2">
              PHASE 3 // EVIDENCE &amp; QUANTIFIED RESULTS
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading">
              Verified Outcomes
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 text-center">
              <div className="text-4xl sm:text-5xl font-black text-slate-900 font-mono tracking-tight mb-2">
                140%
              </div>
              <div className="h-1 w-12 bg-sky-600 mx-auto mb-4 rounded-full" />
              <p className="text-sm font-bold text-slate-900 mb-1">Net Revenue Retention (NRR)</p>
              <p className="text-xs text-slate-500">Accelerated by +40 points from 100% baseline.</p>
            </div>

            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 text-center">
              <div className="text-4xl sm:text-5xl font-black text-slate-900 font-mono tracking-tight mb-2">
                +25%
              </div>
              <div className="h-1 w-12 bg-blue-600 mx-auto mb-4 rounded-full" />
              <p className="text-sm font-bold text-slate-900 mb-1">Expansion Revenue Growth</p>
              <p className="text-xs text-slate-500">Generated from systematic usage-based account tier upgrades.</p>
            </div>

            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 text-center">
              <div className="text-4xl sm:text-5xl font-black text-slate-900 font-mono tracking-tight mb-2">
                90%
              </div>
              <div className="h-1 w-12 bg-emerald-600 mx-auto mb-4 rounded-full" />
              <p className="text-sm font-bold text-slate-900 mb-1">Churn Prediction Accuracy</p>
              <p className="text-xs text-slate-500">Identified at-risk customer accounts with 60-day advance notice.</p>
            </div>

            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 text-center">
              <div className="text-4xl sm:text-5xl font-black text-slate-900 font-mono tracking-tight mb-2">
                3X
              </div>
              <div className="h-1 w-12 bg-indigo-600 mx-auto mb-4 rounded-full" />
              <p className="text-sm font-bold text-slate-900 mb-1">Expansion Deals Sourced</p>
              <p className="text-xs text-slate-500">Increase in identified upsell opportunities across installed base.</p>
            </div>

            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 text-center">
              <div className="text-4xl sm:text-5xl font-black text-slate-900 font-mono tracking-tight mb-2">
                100%
              </div>
              <div className="h-1 w-12 bg-purple-600 mx-auto mb-4 rounded-full" />
              <p className="text-sm font-bold text-slate-900 mb-1">Customer Health Visibility</p>
              <p className="text-xs text-slate-500">Real-time telemetry tracking adoption across all enterprise accounts.</p>
            </div>

            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 text-center">
              <div className="text-4xl sm:text-5xl font-black text-slate-900 font-mono tracking-tight mb-2">
                12+ Hrs
              </div>
              <div className="h-1 w-12 bg-rose-600 mx-auto mb-4 rounded-full" />
              <p className="text-sm font-bold text-slate-900 mb-1">CSM Hours Reclaimed / Week</p>
              <p className="text-xs text-slate-500">Freed up from clerical monitoring to lead executive reviews.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 8: BEFORE VS AFTER COMPARISON TABLE ── */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-mono text-sky-600 font-bold uppercase tracking-wider block mb-2">
              Side-By-Side Operational Shift
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight font-heading">
              The Customer Expansion Transformation in Numbers
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
                    <th className="py-4 px-6 text-sky-400 font-bold">Verified Delta</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 font-sans text-sm">
                  <tr className="hover:bg-slate-50/80">
                    <td className="py-3.5 px-6 font-bold text-slate-900">Net Revenue Retention</td>
                    <td className="py-3.5 px-6 text-slate-600 font-mono">100% Flat</td>
                    <td className="py-3.5 px-6 text-emerald-600 font-bold font-mono">140% NRR</td>
                    <td className="py-3.5 px-6 text-sky-600 font-mono font-bold">+40% Lift</td>
                  </tr>
                  <tr className="hover:bg-slate-50/80">
                    <td className="py-3.5 px-6 font-bold text-slate-900">Expansion Revenue Growth</td>
                    <td className="py-3.5 px-6 text-slate-600 font-mono">0% Unsystematic</td>
                    <td className="py-3.5 px-6 text-emerald-600 font-bold font-mono">+25% Compound</td>
                    <td className="py-3.5 px-6 text-sky-600 font-mono font-bold">+25 Points</td>
                  </tr>
                  <tr className="hover:bg-slate-50/80">
                    <td className="py-3.5 px-6 font-bold text-slate-900">Churn Prediction Horizon</td>
                    <td className="py-3.5 px-6 text-slate-600 font-mono">0 Days (Reactive)</td>
                    <td className="py-3.5 px-6 text-emerald-600 font-bold font-mono">60-Day Advance Alert</td>
                    <td className="py-3.5 px-6 text-sky-600 font-mono font-bold">90% Accuracy</td>
                  </tr>
                  <tr className="hover:bg-slate-50/80">
                    <td className="py-3.5 px-6 font-bold text-slate-900">Expansion Identification</td>
                    <td className="py-3.5 px-6 text-slate-600 font-mono">Accidental</td>
                    <td className="py-3.5 px-6 text-emerald-600 font-bold font-mono">3X Systematic</td>
                    <td className="py-3.5 px-6 text-sky-600 font-mono font-bold">3X Multiplier</td>
                  </tr>
                  <tr className="hover:bg-slate-50/80">
                    <td className="py-3.5 px-6 font-bold text-slate-900">Customer Health Visibility</td>
                    <td className="py-3.5 px-6 text-slate-600 font-mono">40% Accounts Tracked</td>
                    <td className="py-3.5 px-6 text-emerald-600 font-bold font-mono">100% Real-Time</td>
                    <td className="py-3.5 px-6 text-sky-600 font-mono font-bold">+60 Points</td>
                  </tr>
                  <tr className="hover:bg-slate-50/80">
                    <td className="py-3.5 px-6 font-bold text-slate-900">CSM Reclaimed Hours</td>
                    <td className="py-3.5 px-6 text-slate-600 font-mono">0 Hours</td>
                    <td className="py-3.5 px-6 text-emerald-600 font-bold font-mono">12+ Hours / Week</td>
                    <td className="py-3.5 px-6 text-sky-600 font-mono font-bold">12+ Hours Freed</td>
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
            <span className="text-xs font-mono text-sky-600 font-bold uppercase tracking-wider block mb-2">
              Strategic Takeaways
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight font-heading">
              What the CRO Learned
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200">
              <div className="font-mono text-xs font-bold text-sky-600 mb-2">Lesson 01</div>
              <h3 className="text-base font-bold text-slate-900 mb-2">Expansion is Engineered</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Customer expansion isn&apos;t accidental good luck — it&apos;s an engineered system. Wiring expansion triggers to usage thresholds unlocked 25% ARR growth effortlessly.
              </p>
            </div>
            <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200">
              <div className="font-mono text-xs font-bold text-blue-600 mb-2">Lesson 02</div>
              <h3 className="text-base font-bold text-slate-900 mb-2">60 Days to Rescue Accounts</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Churn management isn&apos;t about reacting to cancellation notices. Behavioral telemetry gave us 60-day advance notice to diagnose and rescue at-risk accounts.
              </p>
            </div>
            <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200">
              <div className="font-mono text-xs font-bold text-emerald-600 mb-2">Lesson 03</div>
              <h3 className="text-base font-bold text-slate-900 mb-2">CSMs Need Intelligence Copilots</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                AI Customer Success Agents enabled CSMs to focus on strategic C-suite relationships rather than manually monitoring hundreds of dashboard usage graphs.
              </p>
            </div>
          </div>

          <div className="p-8 sm:p-10 rounded-3xl bg-slate-950 text-white border border-slate-800 relative overflow-hidden">
            <p className="text-lg sm:text-xl text-slate-200 font-medium italic leading-relaxed mb-4">
              &ldquo;ProfitMachines didn&apos;t just improve our NRR — they engineered predictable customer expansion. We went from hoping for account growth to engineering it with mathematical certainty.&rdquo;
            </p>
            <div className="font-mono text-xs text-sky-400">
              — Chief Revenue Officer, Enterprise Technology Company ($600M ARR)
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 10: RELATED OFFERINGS ── */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-mono text-sky-600 font-bold uppercase tracking-wider block mb-2">
              PHASE 4 // REPLICATION PLAYBOOK &amp; RELATED OFFERINGS
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-heading">
              Explore Related Methodologies
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link
              to="/offerings/customer-success"
              className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-sky-400 hover:shadow-lg transition-all group block"
            >
              <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center mb-4">
                <RefreshCw className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-lg mb-2 group-hover:text-sky-600 transition-colors flex items-center justify-between">
                <span>Customer Success Engine</span>
                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 group-hover:text-sky-600 transition-all" />
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Predictive retention, telemetry expansion loops, and automated churn prevention architecture.
              </p>
            </Link>

            <Link
              to="/ai-native-sales"
              className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-blue-400 hover:shadow-lg transition-all group block"
            >
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
                <Bot className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-lg mb-2 group-hover:text-blue-600 transition-colors flex items-center justify-between">
                <span>AI Native Sales</span>
                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 group-hover:text-blue-600 transition-all" />
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Autonomous agents operating across prospecting, pipeline progression, and account expansion.
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
                Multi-tier account usage federation, automated contract renewals, and board telemetry cockpits.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* ── SECTION 11: RELEVANT AI CAPABILITIES ── */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-mono text-sky-600 font-bold uppercase tracking-wider block mb-2">
              Autonomous Systems
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-heading">
              AI Capabilities Deployed in this Engagement
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link
              to="/ai-native-sales/customer-growth"
              className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-sky-400 hover:shadow-md transition-all group block"
            >
              <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center mb-3">
                <Bot className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-sm mb-1 group-hover:text-sky-600 transition-colors">
                AI Customer Success Agent
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Continuous product telemetry monitoring and renewal task automation.
              </p>
            </Link>

            <Link
              to="/growth-science/friction-diagnostics"
              className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-blue-400 hover:shadow-md transition-all group block"
            >
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-3">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-sm mb-1 group-hover:text-blue-600 transition-colors">
                Predictive Churn Radar
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Early behavioral decay detection with automated 60-day rescue alerts.
              </p>
            </Link>

            <Link
              to="/ai-native-sales/revenue-intelligence"
              className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-indigo-400 hover:shadow-md transition-all group block"
            >
              <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-3">
                <Compass className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-sm mb-1 group-hover:text-indigo-600 transition-colors">
                Expansion Intelligence
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Algorithmic feature-usage matching that discovers latent upsell demand.
              </p>
            </Link>

            <Link
              to="/growth-science/executive-telemetry"
              className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-emerald-400 hover:shadow-md transition-all group block"
            >
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-3">
                <LineChart className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-sm mb-1 group-hover:text-emerald-600 transition-colors">
                Customer Health Scoring
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Objective composite scoring based on telemetry frequency and committee health.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* ── SECTION 12: FINAL CTA + INTAKE FORM ── */}
      <section id="intake" className="py-20 sm:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-200 text-sky-700 text-xs font-mono font-bold uppercase mb-4">
              CONFIDENTIAL INTAKE
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4 font-heading">
              Ready to Engineer Predictable Customer Expansion?
            </h2>
            <p className="text-slate-600 text-base max-w-xl mx-auto">
              Schedule a confidential Executive Briefing with a Principal Retention Architect. We will audit your current NRR physics and design an automated expansion loop within 24 business hours.
            </p>
          </div>

          <div className="p-8 sm:p-12 rounded-3xl bg-white border border-slate-200 shadow-xl">
            <CaseStudyIntakeForm
              pageContext="Technology Customer Expansion"
              defaultChallenge="Customer Expansion"
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
