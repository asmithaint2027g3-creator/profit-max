import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight, ChevronRight, TrendingUp, BarChart3, Globe,
  ShieldCheck, Layers, Bot, Compass, CheckCircle2,
  Sparkles, Award, ArrowUpRight, DollarSign, Clock, Users,
  Zap, AlertCircle, LineChart, Target, Activity, Landmark, Network
} from 'lucide-react';
import { CaseStudyIntakeForm } from '../../components/forms/CaseStudyIntakeForm';

export default function FinancialServicesAiTransformationPage() {
  useEffect(() => {
    document.title = '5X AI Agent Deployment: Financial Services Case Study | ProfitMachines';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans pt-16 lg:pt-[72px]">
      {/* ── SECTION 1: HERO (AI TRANSFORMATION LAYOUT) ── */}
      <section className="relative pt-20 pb-16 sm:pt-28 sm:pb-24 overflow-hidden border-b border-slate-200 bg-white">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div
            className="absolute inset-0 opacity-[0.35]"
            style={{
              backgroundImage: 'linear-gradient(to right, #e2e8f0 1px, transparent 1px), linear-gradient(to bottom, #e2e8f0 1px, transparent 1px)',
              backgroundSize: '4rem 4rem'
            }}
          />
          <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[140px] pointer-events-none" />
          <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            {/* Back link */}
            <div className="mb-6">
              <Link
                to="/case-studies"
                className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-slate-500 hover:text-purple-600 uppercase tracking-wider transition-colors"
              >
                <ChevronRight className="w-4 h-4 rotate-180" />
                <span>Back to Case Studies</span>
              </Link>
            </div>

            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-50 border border-purple-200 text-purple-700 text-xs font-bold tracking-wide uppercase shadow-xs mb-6">
              <span className="font-mono text-purple-600 font-extrabold">CASE STUDY</span>
              <span className="text-slate-300 font-normal">//</span>
              <span>FINANCIAL SERVICES · PE PORTFOLIO</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.08] mb-6 font-heading">
              5X AI Agent Deployment:{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-indigo-600 to-emerald-600">
                How a PE-Backed Firm Accelerated Post-Acquisition Integration
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg lg:text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto mb-8">
              From post-acquisition fragmentation to 5X AI agent deployment, 85% forecast accuracy, and 40% NRR improvement — deployed through ProfitMachines&apos; AI-native transformation platform.
            </p>

            {/* Result Badge */}
            <div className="inline-flex flex-wrap items-center justify-center gap-3 px-6 py-3 rounded-2xl bg-purple-50/80 border border-purple-200 text-purple-900 font-mono text-xs sm:text-sm font-bold shadow-xs mb-10">
              <span className="text-purple-700">5X AI Agent Deployment</span>
              <span className="text-slate-300 font-normal">|</span>
              <span className="text-indigo-700">85% Forecast Accuracy</span>
              <span className="text-slate-300 font-normal">|</span>
              <span className="text-emerald-700">40% NRR Improvement</span>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="#intake"
                className="inline-flex items-center justify-center bg-slate-900 hover:bg-purple-600 text-white font-bold px-7 py-4 rounded-xl shadow-lg shadow-slate-900/10 text-sm transition-all hover:-translate-y-0.5 group font-mono uppercase tracking-wider gap-2 cursor-pointer"
              >
                <span>Schedule Executive Briefing</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#outcomes"
                className="inline-flex items-center justify-center border border-slate-200 bg-white hover:bg-slate-50 text-slate-800 font-bold px-6 py-4 rounded-xl text-sm shadow-xs transition-all font-mono uppercase tracking-wider gap-2"
              >
                <span>Inspect Verified Outcomes</span>
                <ChevronRight className="w-4 h-4 text-purple-600" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 2: EXECUTIVE SUMMARY CARD ── */}
      <section className="py-14 sm:py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-sm">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 border border-purple-200 text-purple-700 text-xs font-mono font-bold uppercase mb-4">
              Executive Briefing Card
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-sm">
              <div>
                <span className="text-xs font-mono text-slate-400 font-bold uppercase block mb-1">Challenge</span>
                <p className="text-slate-700 leading-snug">Post-acquisition integration of 3 companies in 18 months, 3 CRMs, fragmented GTM, and SEC/FINRA compliance overhead.</p>
              </div>
              <div>
                <span className="text-xs font-mono text-slate-400 font-bold uppercase block mb-1">Approach</span>
                <p className="text-slate-700 leading-snug">Deployed AI-Native Transformation with a unified 4-agent ecosystem (SDR, Sales, RevOps, Customer Success).</p>
              </div>
              <div>
                <span className="text-xs font-mono text-slate-400 font-bold uppercase block mb-1">Outcome</span>
                <p className="text-slate-700 leading-snug">5X AI agent scale, 85% forecast accuracy, 40% NRR lift, $80M cross-sell, and 2.3X valuation multiple expansion.</p>
              </div>
              <div>
                <span className="text-xs font-mono text-slate-400 font-bold uppercase block mb-1">Timeline</span>
                <p className="text-slate-700 leading-snug">18 months from post-merger diagnosis to fully integrated autonomous operations.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 3: CLIENT SITUATION ── */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-mono text-purple-600 font-bold uppercase tracking-wider block mb-2">
              Pre-Engagement Context
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight font-heading">
              The Client Situation
            </h2>
          </div>

          <div className="p-8 sm:p-10 rounded-3xl bg-slate-50 border border-slate-200 leading-relaxed text-slate-700 text-base sm:text-lg mb-8">
            A PE-backed financial services firm ($1.2B valuation) had acquired 3 companies in 18 months. Post-acquisition integration had created fragmented GTM operations — 3 different CRMs, 3 different forecasting methods, 3 different sales processes. The PE firm needed to accelerate AI adoption to drive valuation growth. Regulatory complexity (SEC, FINRA) added compliance requirements. The CEO needed a unified AI-native revenue platform.
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs">
            <div className="text-xs font-mono font-bold text-slate-500 uppercase mb-4">
              Diagnostic Mapping: Post-Merger Operational Silos
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-mono">
              <div className="p-4 rounded-xl bg-rose-50 border border-rose-200">
                <span className="text-rose-600 font-bold block mb-1">3 Disparate CRMs</span>
                <p className="text-slate-600 font-sans">Customer databases were completely siloed with zero cross-sell visibility.</p>
              </div>
              <div className="p-4 rounded-xl bg-amber-50 border border-amber-200">
                <span className="text-amber-600 font-bold block mb-1">40% Functional Duplication</span>
                <p className="text-slate-600 font-sans">Overlapping sales engineering, marketing ops, and compliance tracking.</p>
              </div>
              <div className="p-4 rounded-xl bg-rose-50 border border-rose-200">
                <span className="text-rose-600 font-bold block mb-1">Incremental AI Failure</span>
                <p className="text-slate-600 font-sans">Fragmented point solutions failed to produce institutional compounding.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 4: GROWTH DIAGNOSIS (WHAT WE FOUND) ── */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono text-purple-600 font-bold uppercase tracking-wider block mb-2">
              Empirical Discovery
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight font-heading">
              What We Found
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-xs">
              <div className="text-xs font-mono text-purple-600 font-bold uppercase mb-2">Revenue Physics Findings</div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Disparate Unit Economics</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                The 3 acquired operating companies each had divergent LTV:CAC profiles (ranging from 1.8X to 3.2X) and unaligned gross margins, demanding unified economic architecture.
              </p>
            </div>

            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-xs">
              <div className="text-xs font-mono text-indigo-600 font-bold uppercase mb-2">Friction Diagnostics Findings</div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">40% Operational Duplication</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                3 separate forecasting rhythms and duplicate support tiers were burning cash while creating confusion across enterprise clients who had accounts with multiple entities.
              </p>
            </div>

            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-xs">
              <div className="text-xs font-mono text-emerald-600 font-bold uppercase mb-2">Profit Pool Insights</div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Invisible $80M Cross-Sell Pools</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Massive whitespace opportunities existed between the acquired corporate client bases, but lack of federated data meant zero cross-sell was being executed.
              </p>
            </div>

            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-xs">
              <div className="text-xs font-mono text-blue-600 font-bold uppercase mb-2">Growth Bottlenecks</div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Incremental AI Trap</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                AI initiatives were siloed into small tactical experiments (e.g. ad-hoc transcription bots) without a cohesive enterprise architecture driving measurable valuation lift.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 5: SOLUTION ARCHITECTURE ── */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono text-purple-600 font-bold uppercase tracking-wider block mb-2">
              Systemic Intervention
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight font-heading">
              What We Deployed
            </h2>
          </div>

          <div className="space-y-6">
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200">
              <h3 className="text-lg font-bold text-slate-900 mb-4 font-mono uppercase text-purple-600">
                1. Integrated Offerings Deployed
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div className="p-4 rounded-xl bg-white border border-slate-200">
                  <strong className="block text-slate-900 mb-1">GTM Transformation:</strong>
                  <p className="text-slate-600">Consolidated commercial processes, unified deal staging, and synchronized sales compensation incentives across entities.</p>
                </div>
                <div className="p-4 rounded-xl bg-white border border-slate-200">
                  <strong className="block text-slate-900 mb-1">AI Native Sales 4-Agent Mesh:</strong>
                  <p className="text-slate-600">Deployed SDR, Sales Intelligence, RevOps, and Customer Success autonomous agents operating on a shared data lake.</p>
                </div>
                <div className="p-4 rounded-xl bg-white border border-slate-200">
                  <strong className="block text-slate-900 mb-1">Revenue Operations:</strong>
                  <p className="text-slate-600">Federated 3 CRM systems into a unified reporting instance with multi-touch cross-sell attribution.</p>
                </div>
                <div className="p-4 rounded-xl bg-white border border-slate-200">
                  <strong className="block text-slate-900 mb-1">AI Trust &amp; Governance:</strong>
                  <p className="text-slate-600">Engineered SEC, FINRA, and SOC2 Type II compliant governance with explainable audit trails for all algorithmic decisions.</p>
                </div>
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-slate-950 text-white border border-slate-800">
              <h3 className="text-lg font-bold text-white mb-4 font-mono uppercase text-emerald-400">
                2. Autonomous AI Systems Configured
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs font-mono">
                <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
                  <span className="text-purple-400 font-bold block mb-1">AI SDR Agent</span>
                  <p className="text-slate-400 font-sans">Autonomous cross-sell whitespace prospecting across all 3 acquired databases.</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
                  <span className="text-indigo-400 font-bold block mb-1">AI Sales Copilot</span>
                  <p className="text-slate-400 font-sans">Multi-entity product bundling intelligence and executive committee consensus.</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
                  <span className="text-blue-400 font-bold block mb-1">AI RevOps Agent</span>
                  <p className="text-slate-400 font-sans">Zero-touch multi-CRM record alignment and real-time board forecast modeling.</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
                  <span className="text-emerald-400 font-bold block mb-1">AI CS Agent</span>
                  <p className="text-slate-400 font-sans">Continuous retention monitoring and proactive cross-portfolio expansion discovery.</p>
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
            <span className="text-xs font-mono text-purple-600 font-bold uppercase tracking-wider block mb-2">
              Integration Progression
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight font-heading">
              The AI Transformation
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-3xl bg-white border border-rose-200">
              <span className="px-2.5 py-1 rounded bg-rose-50 text-rose-700 font-mono text-xs font-bold uppercase block w-fit mb-3">
                Post-Merger Fragmentation
              </span>
              <h3 className="text-base font-bold text-slate-900 mb-2">3 Incompatible Silos</h3>
              <ul className="space-y-2 text-xs text-slate-600">
                <li>• 3 disparate CRM databases</li>
                <li>• 40% operational duplication</li>
                <li>• 65% forecast accuracy</li>
                <li>• Flat 100% NRR</li>
              </ul>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-purple-200 shadow-md">
              <span className="px-2.5 py-1 rounded bg-purple-50 text-purple-700 font-mono text-xs font-bold uppercase block w-fit mb-3">
                Intervention Arc
              </span>
              <h3 className="text-base font-bold text-slate-900 mb-2">18-Month Engagement</h3>
              <ul className="space-y-2 text-xs text-slate-600">
                <li>• Unified 4-agent ecosystem deployment</li>
                <li>• SEC/FINRA compliant encryption layer</li>
                <li>• Federated cross-sell intelligence</li>
                <li>• Automated portfolio CRM hygiene</li>
              </ul>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-emerald-200">
              <span className="px-2.5 py-1 rounded bg-emerald-50 text-emerald-700 font-mono text-xs font-bold uppercase block w-fit mb-3">
                Unified AI Enterprise
              </span>
              <h3 className="text-base font-bold text-slate-900 mb-2">Multiple Expansion Engine</h3>
              <ul className="space-y-2 text-xs text-slate-600">
                <li>• 5X AI agent scale</li>
                <li>• 85% forecast accuracy</li>
                <li>• $80M in cross-sell ARR</li>
                <li>• 2.3X valuation multiple expansion</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 7: RESULTS DASHBOARD ── */}
      <section id="outcomes" className="py-20 sm:py-28 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono text-purple-600 font-bold uppercase tracking-wider block mb-2">
              Empirical Performance Verification
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading">
              Verified Outcomes
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 text-center">
              <div className="text-4xl sm:text-5xl font-black text-slate-900 font-mono tracking-tight mb-2">
                5X
              </div>
              <div className="h-1 w-12 bg-purple-600 mx-auto mb-4 rounded-full" />
              <p className="text-sm font-bold text-slate-900 mb-1">AI Agent Deployment</p>
              <p className="text-xs text-slate-500">4-agent unified mesh fully integrated across all business units.</p>
            </div>

            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 text-center">
              <div className="text-4xl sm:text-5xl font-black text-slate-900 font-mono tracking-tight mb-2">
                85%
              </div>
              <div className="h-1 w-12 bg-indigo-600 mx-auto mb-4 rounded-full" />
              <p className="text-sm font-bold text-slate-900 mb-1">Forecast Accuracy</p>
              <p className="text-xs text-slate-500">Elevated from 65% baseline across 3 merged organizations.</p>
            </div>

            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 text-center">
              <div className="text-4xl sm:text-5xl font-black text-slate-900 font-mono tracking-tight mb-2">
                +40%
              </div>
              <div className="h-1 w-12 bg-emerald-600 mx-auto mb-4 rounded-full" />
              <p className="text-sm font-bold text-slate-900 mb-1">NRR Improvement</p>
              <p className="text-xs text-slate-500">Net revenue retention accelerated from 100% flat to 140%.</p>
            </div>

            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 text-center">
              <div className="text-4xl sm:text-5xl font-black text-slate-900 font-mono tracking-tight mb-2">
                -60%
              </div>
              <div className="h-1 w-12 bg-blue-600 mx-auto mb-4 rounded-full" />
              <p className="text-sm font-bold text-slate-900 mb-1">Operational Duplication</p>
              <p className="text-xs text-slate-500">Redundant reporting and manual cross-checking eliminated.</p>
            </div>

            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 text-center">
              <div className="text-4xl sm:text-5xl font-black text-slate-900 font-mono tracking-tight mb-2">
                $80M
              </div>
              <div className="h-1 w-12 bg-teal-600 mx-auto mb-4 rounded-full" />
              <p className="text-sm font-bold text-slate-900 mb-1">New Cross-Sell Revenue</p>
              <p className="text-xs text-slate-500">Unlocked from white-space targeting across the 3 acquired bases.</p>
            </div>

            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 text-center">
              <div className="text-4xl sm:text-5xl font-black text-slate-900 font-mono tracking-tight mb-2">
                2.3X
              </div>
              <div className="h-1 w-12 bg-rose-600 mx-auto mb-4 rounded-full" />
              <p className="text-sm font-bold text-slate-900 mb-1">Valuation Multiple Expansion</p>
              <p className="text-xs text-slate-500">Enterprise valuation multiple expanded from 8X to 18.4X.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 8: BEFORE VS AFTER COMPARISON TABLE ── */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-mono text-purple-600 font-bold uppercase tracking-wider block mb-2">
              Side-By-Side Operational Shift
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight font-heading">
              The AI Transformation in Numbers
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
                    <th className="py-4 px-6 text-purple-400 font-bold">Verified Delta</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 font-sans text-sm">
                  <tr className="hover:bg-slate-50/80">
                    <td className="py-3.5 px-6 font-bold text-slate-900">AI Agent Deployment</td>
                    <td className="py-3.5 px-6 text-slate-600 font-mono">Tactical/Ad-Hoc</td>
                    <td className="py-3.5 px-6 text-emerald-600 font-bold font-mono">5X (4 Core Agents)</td>
                    <td className="py-3.5 px-6 text-purple-600 font-mono font-bold">Unified Mesh</td>
                  </tr>
                  <tr className="hover:bg-slate-50/80">
                    <td className="py-3.5 px-6 font-bold text-slate-900">Forecast Accuracy</td>
                    <td className="py-3.5 px-6 text-slate-600 font-mono">65% Accuracy</td>
                    <td className="py-3.5 px-6 text-emerald-600 font-bold font-mono">85% Accuracy</td>
                    <td className="py-3.5 px-6 text-purple-600 font-mono font-bold">+20 Points</td>
                  </tr>
                  <tr className="hover:bg-slate-50/80">
                    <td className="py-3.5 px-6 font-bold text-slate-900">Net Revenue Retention</td>
                    <td className="py-3.5 px-6 text-slate-600 font-mono">100% Flat</td>
                    <td className="py-3.5 px-6 text-emerald-600 font-bold font-mono">140% NRR</td>
                    <td className="py-3.5 px-6 text-purple-600 font-mono font-bold">+40% Lift</td>
                  </tr>
                  <tr className="hover:bg-slate-50/80">
                    <td className="py-3.5 px-6 font-bold text-slate-900">Operational Duplication</td>
                    <td className="py-3.5 px-6 text-slate-600 font-mono">40% Overhead</td>
                    <td className="py-3.5 px-6 text-emerald-600 font-bold font-mono">16% Overhead</td>
                    <td className="py-3.5 px-6 text-purple-600 font-mono font-bold">-60% Reduction</td>
                  </tr>
                  <tr className="hover:bg-slate-50/80">
                    <td className="py-3.5 px-6 font-bold text-slate-900">Cross-Sell Revenue</td>
                    <td className="py-3.5 px-6 text-slate-600 font-mono">$0 Unaddressed</td>
                    <td className="py-3.5 px-6 text-emerald-600 font-bold font-mono">$80M Contracted</td>
                    <td className="py-3.5 px-6 text-purple-600 font-mono font-bold">New Profit Stream</td>
                  </tr>
                  <tr className="hover:bg-slate-50/80">
                    <td className="py-3.5 px-6 font-bold text-slate-900">Valuation Exit Multiple</td>
                    <td className="py-3.5 px-6 text-slate-600 font-mono">8.0X Multiple</td>
                    <td className="py-3.5 px-6 text-emerald-600 font-bold font-mono">18.4X Multiple</td>
                    <td className="py-3.5 px-6 text-purple-600 font-mono font-bold">2.3X Expansion</td>
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
            <span className="text-xs font-mono text-purple-600 font-bold uppercase tracking-wider block mb-2">
              Strategic Takeaways
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight font-heading">
              What the PE Sponsor Learned
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200">
              <div className="font-mono text-xs font-bold text-purple-600 mb-2">Lesson 01</div>
              <h3 className="text-base font-bold text-slate-900 mb-2">Platforms Beat Patchworks</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Post-acquisition integration isn&apos;t about stitching together old databases — it&apos;s about deploying an AI-native layer that unifies operations autonomously.
              </p>
            </div>
            <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200">
              <div className="font-mono text-xs font-bold text-indigo-600 mb-2">Lesson 02</div>
              <h3 className="text-base font-bold text-slate-900 mb-2">Incremental AI Fails to Compound</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Tactical point solutions don&apos;t move enterprise valuation multiples. A full 4-agent ecosystem compounds value across the complete customer lifecycle.
              </p>
            </div>
            <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200">
              <div className="font-mono text-xs font-bold text-emerald-600 mb-2">Lesson 03</div>
              <h3 className="text-base font-bold text-slate-900 mb-2">Whitespace is Capital</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Algorithmic cross-sell intelligence across acquired customer bases unlocked $80M in invisible revenue that traditional account executives could not identify.
              </p>
            </div>
          </div>

          <div className="p-8 sm:p-10 rounded-3xl bg-slate-950 text-white border border-slate-800 relative overflow-hidden">
            <p className="text-lg sm:text-xl text-slate-200 font-medium italic leading-relaxed mb-4">
              &ldquo;ProfitMachines didn&apos;t just integrate our acquisitions — they transformed them into an AI-native revenue platform. The valuation impact was 2.3X multiple expansion.&rdquo;
            </p>
            <div className="font-mono text-xs text-purple-400">
              — Operating Partner, Tier-1 Technology Private Equity Sponsor
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 10: RELATED OFFERINGS ── */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-mono text-purple-600 font-bold uppercase tracking-wider block mb-2">
              Cross-Platform Synergy
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-heading">
              Explore Related Methodologies
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link
              to="/offerings/gtm-transformation"
              className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-purple-400 hover:shadow-lg transition-all group block"
            >
              <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center mb-4">
                <Network className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-lg mb-2 group-hover:text-purple-600 transition-colors flex items-center justify-between">
                <span>GTM Transformation</span>
                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 group-hover:text-purple-600 transition-all" />
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Post-acquisition integration, multi-entity sales unification, and organizational change acceleration.
              </p>
            </Link>

            <Link
              to="/ai-native-sales"
              className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-indigo-400 hover:shadow-lg transition-all group block"
            >
              <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-4">
                <Bot className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-lg mb-2 group-hover:text-indigo-600 transition-colors flex items-center justify-between">
                <span>AI Native Sales</span>
                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 group-hover:text-indigo-600 transition-all" />
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Autonomous agent swarms executing prospecting, pipeline progression, and zero-touch CRM hygiene.
              </p>
            </Link>

            <Link
              to="/offerings/ai-trust-governance"
              className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-emerald-400 hover:shadow-lg transition-all group block"
            >
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4">
                <Landmark className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-lg mb-2 group-hover:text-emerald-600 transition-colors flex items-center justify-between">
                <span>AI Trust &amp; Governance</span>
                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 group-hover:text-emerald-600 transition-all" />
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                SEC, FINRA, and SOC2 compliant algorithmic architectures with explainable auditing standards.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* ── SECTION 11: RELEVANT AI CAPABILITIES ── */}
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
                AI SDR Agent
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Automated whitespace prospecting across all 3 acquired databases.
              </p>
            </Link>

            <Link
              to="/ai-native-sales/deal-execution"
              className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-indigo-400 hover:shadow-md transition-all group block"
            >
              <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-3">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-sm mb-1 group-hover:text-indigo-600 transition-colors">
                AI Sales Copilot
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Deal structuring and cross-entity product bundling intelligence.
              </p>
            </Link>

            <Link
              to="/ai-native-sales/revenue-operations"
              className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-blue-400 hover:shadow-md transition-all group block"
            >
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-3">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-sm mb-1 group-hover:text-blue-600 transition-colors">
                AI RevOps Agent
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Zero-touch multi-CRM federation and board reporting automation.
              </p>
            </Link>

            <Link
              to="/ai-native-sales/customer-growth"
              className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-emerald-400 hover:shadow-md transition-all group block"
            >
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-3">
                <TrendingUp className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-sm mb-1 group-hover:text-emerald-600 transition-colors">
                AI Customer Success Agent
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Proactive retention monitoring and cross-sell discovery.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* ── SECTION 12: FINAL CTA + INTAKE FORM ── */}
      <section id="intake" className="py-20 sm:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 border border-purple-200 text-purple-700 text-xs font-mono font-bold uppercase mb-4">
              CONFIDENTIAL INTAKE
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4 font-heading">
              Ready to Accelerate Your AI Transformation?
            </h2>
            <p className="text-slate-600 text-base max-w-xl mx-auto">
              Schedule a confidential Executive Briefing with a Principal Architect. We will evaluate your portfolio systems and design an enterprise agentic roadmap within 24 business hours.
            </p>
          </div>

          <div className="p-8 sm:p-12 rounded-3xl bg-white border border-slate-200 shadow-xl">
            <CaseStudyIntakeForm
              pageContext="Financial Services AI Transformation"
              defaultChallenge="AI Transformation"
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
              <span>SEC &amp; FINRA Audit Compliant</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
