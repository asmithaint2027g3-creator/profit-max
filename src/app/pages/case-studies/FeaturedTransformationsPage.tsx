import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight, ChevronRight, TrendingUp, BarChart3, Globe,
  ShieldCheck, Layers, Bot, Compass, CheckCircle2,
  Sparkles, Award, ArrowUpRight, DollarSign, Clock, Users
} from 'lucide-react';
import { CaseStudyIntakeForm } from '../../components/forms/CaseStudyIntakeForm';

export default function FeaturedTransformationsPage() {
  useEffect(() => {
    document.title = 'Featured Transformations: Our Most Impactful Engagements | ProfitMachines';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans pt-16 lg:pt-[72px]">
      {/* ── HERO SECTION: CURATED SHOWCASE LAYOUT ── */}
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

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold tracking-wide uppercase shadow-xs mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
              </span>
              <span className="font-mono text-blue-600 font-extrabold">FLAGSHIP DEPLOYMENTS</span>
              <span className="text-slate-300 font-normal">//</span>
              <span>CURATED EXECUTIVE SHOWCASE</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.08] mb-6 font-heading">
              Featured Transformations:{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
                Our Most Impactful Engagements
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg lg:text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto mb-10">
              Three flagship deployments that showcase the full breadth of ProfitMachines&apos; AI-native revenue platform — from empirical diagnosis to autonomous execution.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
              <Link
                to="/case-studies"
                className="inline-flex items-center justify-center border border-slate-200 bg-white hover:bg-slate-50 text-slate-800 font-bold px-6 py-4 rounded-xl text-sm shadow-xs transition-all font-mono uppercase tracking-wider gap-2"
              >
                <span>View All Case Studies</span>
                <ChevronRight className="w-4 h-4 text-blue-600" />
              </Link>

              <a
                href="#intake"
                className="inline-flex items-center justify-center bg-slate-900 hover:bg-blue-600 text-white font-bold px-7 py-4 rounded-xl shadow-lg shadow-slate-900/10 text-sm transition-all hover:-translate-y-0.5 group font-mono uppercase tracking-wider gap-2 cursor-pointer"
              >
                <span>Schedule Executive Briefing</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Top Telemetry Strip */}
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs font-mono text-slate-600">
              <span className="text-blue-600 font-bold flex items-center gap-1.5">
                <Award className="w-4 h-4 text-blue-600" />
                FLAGSHIP BENCHMARK:
              </span>
              <span>$580M+ Cumulative New Revenue Generated Across Featured Deployments</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 2: THE 3 EDITORIAL SHOWCASE CARDS ── */}
      <section className="py-20 sm:py-28 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-24">

          {/* FEATURED CASE STUDY 1: The $2.3B SaaS Transformation */}
          <div className="rounded-3xl border border-slate-200 bg-white overflow-hidden shadow-sm hover:shadow-xl transition-all">
            <div className="p-8 sm:p-12 lg:p-14">
              <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-8 border-b border-slate-100">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-mono font-bold uppercase border border-blue-200">
                    Flagship 01 · Enterprise SaaS
                  </span>
                  <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-mono font-bold uppercase">
                    Series D · $450M ARR
                  </span>
                </div>
                <div className="font-mono text-xs text-slate-500">
                  Engagement Arc: <strong className="text-slate-800">18 Months to Autonomous Operation</strong>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
                <div className="lg:col-span-7 space-y-6">
                  <img src="/images/industry-saas.png" alt="SaaS Revenue Transformation" className="w-full h-48 sm:h-56 object-cover rounded-2xl mb-4 border border-slate-200" />
                  <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading">
                    The $2.3B SaaS Transformation
                  </h2>
                  <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
                    A Series D SaaS platform faced a critical plateau with YoY pipeline growth stalled at 15% and forecast variance exceeding 30%. Operating across 12 disconnected tools, the sales organization was experiencing 40% SDR churn. ProfitMachines deployed profit pool discovery, demand engineering, and autonomous AI SDR swarms to transform the commercial engine.
                  </p>

                  {/* Highlights Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                    <div className="p-4 rounded-2xl bg-blue-50/60 border border-blue-200/80">
                      <div className="text-2xl sm:text-3xl font-black font-mono text-blue-600">6X</div>
                      <div className="text-xs font-mono font-bold text-slate-800 uppercase mt-1">Qualified Pipeline</div>
                      <p className="text-[11px] text-slate-500 mt-0.5">Expanded in 9 months</p>
                    </div>
                    <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                      <div className="text-2xl sm:text-3xl font-black font-mono text-indigo-600">98%</div>
                      <div className="text-xs font-mono font-bold text-slate-800 uppercase mt-1">Forecast Accuracy</div>
                      <p className="text-[11px] text-slate-500 mt-0.5">&lt;5% board variance</p>
                    </div>
                    <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                      <div className="text-2xl sm:text-3xl font-black font-mono text-emerald-600">$180M</div>
                      <div className="text-xs font-mono font-bold text-slate-800 uppercase mt-1">New Net ARR</div>
                      <p className="text-[11px] text-slate-500 mt-0.5">Realized in 18 months</p>
                    </div>
                  </div>

                  {/* Quote Snippet */}
                  <div className="p-5 rounded-2xl bg-slate-50 border-l-4 border-blue-600 text-sm text-slate-700 italic">
                    &ldquo;ProfitMachines didn&apos;t just give us tools — they gave us an AI-native revenue operating system. We went from hoping for growth to engineering it.&rdquo;
                    <span className="block mt-1 font-mono text-xs text-slate-500 font-normal not-italic">
                      — Chief Revenue Officer, Enterprise SaaS Platform
                    </span>
                  </div>

                  <div className="pt-2">
                    <Link
                      to="/case-studies/enterprise-saas-pipeline-growth"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 hover:bg-blue-600 text-white font-bold text-xs uppercase font-mono tracking-wider transition-all group"
                    >
                      <span>Read Full Case Study</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>

                {/* Right: Transformation Timeline Visual */}
                <div className="lg:col-span-5 bg-slate-950 rounded-3xl p-6 sm:p-8 text-white border border-slate-800 space-y-6">
                  <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                    <span className="text-xs font-mono text-blue-400 font-bold uppercase tracking-wider">
                      Deployment Timeline
                    </span>
                    <span className="text-[11px] font-mono text-slate-400">18-Month Horizon</span>
                  </div>

                  <div className="space-y-5 text-xs">
                    <div className="relative pl-6 border-l-2 border-blue-500">
                      <div className="absolute -left-[5px] top-0 w-2 h-2 rounded-full bg-blue-400" />
                      <div className="font-mono text-blue-400 font-bold uppercase">Months 1–3 · Physics &amp; Diagnosis</div>
                      <p className="text-slate-400 mt-1">Isolated low LTV:CAC cohorts and identified 45% pipeline leakage at discovery.</p>
                    </div>

                    <div className="relative pl-6 border-l-2 border-indigo-500">
                      <div className="absolute -left-[5px] top-0 w-2 h-2 rounded-full bg-indigo-400" />
                      <div className="font-mono text-indigo-400 font-bold uppercase">Months 4–9 · Agentic Deployment</div>
                      <p className="text-slate-400 mt-1">Deployed AI SDR swarms handling multi-channel intent signals. Pipeline expanded 6X.</p>
                    </div>

                    <div className="relative pl-6 border-l-2 border-emerald-500">
                      <div className="absolute -left-[5px] top-0 w-2 h-2 rounded-full bg-emerald-400" />
                      <div className="font-mono text-emerald-400 font-bold uppercase">Months 10–18 · Autonomous Scaling</div>
                      <p className="text-slate-400 mt-1">Unified forecasting telemetry restored board confidence. $180M new ARR booked.</p>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
                    <span>Valuation Acceleration:</span>
                    <span className="text-emerald-400 font-bold">+65% Enterprise Multiple</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* FEATURED CASE STUDY 2: Global Manufacturing Expansion */}
          <div className="rounded-3xl border border-slate-200 bg-white overflow-hidden shadow-sm hover:shadow-xl transition-all">
            <div className="p-8 sm:p-12 lg:p-14">
              <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-8 border-b border-slate-100">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-xs font-mono font-bold uppercase border border-indigo-200">
                    Flagship 02 · Manufacturing
                  </span>
                  <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-mono font-bold uppercase">
                    Fortune 500 · $8B Revenue
                  </span>
                </div>
                <div className="font-mono text-xs text-slate-500">
                  Engagement Arc: <strong className="text-slate-800">24 Months Multi-Region Expansion</strong>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
                <div className="lg:col-span-7 space-y-6">
                  <img src="/images/industry-manufacturing.png" alt="Manufacturing Global Expansion" className="w-full h-48 sm:h-56 object-cover rounded-2xl mb-4 border border-slate-200" />
                  <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading">
                    Global Manufacturing Expansion
                  </h2>
                  <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
                    An industrial equipment giant expanding into Germany, Japan, and Western Europe suffered from protracted 18-month sales cycles and an inefficient distributor network where 80% produced negligible yield. ProfitMachines deployed multi-language AI agents, territory contribution modeling, and high-yield partner orchestration.
                  </p>

                  {/* Highlights Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                    <div className="p-4 rounded-2xl bg-indigo-50/60 border border-indigo-200/80">
                      <div className="text-2xl sm:text-3xl font-black font-mono text-indigo-600">$400M</div>
                      <div className="text-xs font-mono font-bold text-slate-800 uppercase mt-1">New International Revenue</div>
                      <p className="text-[11px] text-slate-500 mt-0.5">In 24 months</p>
                    </div>
                    <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                      <div className="text-2xl sm:text-3xl font-black font-mono text-blue-600">-47%</div>
                      <div className="text-xs font-mono font-bold text-slate-800 uppercase mt-1">Cycle Time Reduction</div>
                      <p className="text-[11px] text-slate-500 mt-0.5">18 mos → 9.5 mos</p>
                    </div>
                    <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                      <div className="text-2xl sm:text-3xl font-black font-mono text-emerald-600">3X</div>
                      <div className="text-xs font-mono font-bold text-slate-800 uppercase mt-1">Dealer Productivity</div>
                      <p className="text-[11px] text-slate-500 mt-0.5">Through co-sell telemetry</p>
                    </div>
                  </div>

                  {/* Quote Snippet */}
                  <div className="p-5 rounded-2xl bg-slate-50 border-l-4 border-indigo-600 text-sm text-slate-700 italic">
                    &ldquo;ProfitMachines turned global expansion from a multi-million dollar gamble into an empirical, repeatable system.&rdquo;
                    <span className="block mt-1 font-mono text-xs text-slate-500 font-normal not-italic">
                      — Chief Executive Officer, Fortune 500 Manufacturer
                    </span>
                  </div>

                  <div className="pt-2">
                    <Link
                      to="/case-studies/global-manufacturing-expansion"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 hover:bg-indigo-600 text-white font-bold text-xs uppercase font-mono tracking-wider transition-all group"
                    >
                      <span>Read Full Case Study</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>

                {/* Right: Global Map Overlay Visual */}
                <div className="lg:col-span-5 bg-slate-950 rounded-3xl p-6 sm:p-8 text-white border border-slate-800 space-y-6">
                  <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                    <span className="text-xs font-mono text-indigo-400 font-bold uppercase tracking-wider">
                      Regional Coverage Map
                    </span>
                    <span className="text-[11px] font-mono text-emerald-400">8 Native Languages</span>
                  </div>

                  <div className="space-y-3 font-mono text-xs">
                    <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between">
                      <div>
                        <div className="text-white font-bold">DACH (Germany/Austria/CH)</div>
                        <div className="text-[10px] text-slate-400">German AI Swarms · €140M Yield</div>
                      </div>
                      <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-[10px]">
                        +118% Quota
                      </span>
                    </div>

                    <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between">
                      <div>
                        <div className="text-white font-bold">Japan &amp; East Asia</div>
                        <div className="text-[10px] text-slate-400">Japanese Localization · $110M Yield</div>
                      </div>
                      <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-[10px]">
                        +94% Quota
                      </span>
                    </div>

                    <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between">
                      <div>
                        <div className="text-white font-bold">Western Europe &amp; UK</div>
                        <div className="text-[10px] text-slate-400">GDPR Compliant · £120M Yield</div>
                      </div>
                      <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-[10px]">
                        +104% Quota
                      </span>
                    </div>
                  </div>

                  <div className="pt-2 text-[11px] text-slate-400 leading-relaxed font-sans">
                    24/7 autonomous timezone handoff achieved with zero regional headcount inflation.
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* FEATURED CASE STUDY 3: Healthcare AI Transformation */}
          <div className="rounded-3xl border border-slate-200 bg-white overflow-hidden shadow-sm hover:shadow-xl transition-all">
            <div className="p-8 sm:p-12 lg:p-14">
              <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-8 border-b border-slate-100">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-mono font-bold uppercase border border-emerald-200">
                    Flagship 03 · Private Equity
                  </span>
                  <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-mono font-bold uppercase">
                    PE-Backed · $1.2B Valuation
                  </span>
                </div>
                <div className="font-mono text-xs text-slate-500">
                  Engagement Arc: <strong className="text-slate-800">18 Months Post-Acquisition Integration</strong>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
                <div className="lg:col-span-7 space-y-6">
                  <img src="/images/industry-healthcare.png" alt="Healthcare AI Transformation" className="w-full h-48 sm:h-56 object-cover rounded-2xl mb-4 border border-slate-200" />
                  <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading">
                    Financial Services &amp; Healthcare AI Transformation
                  </h2>
                  <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
                    Following three rapid acquisitions in 18 months, a healthcare-fintech enterprise suffered from severe operational silos: 3 disparate CRMs, 3 conflicting forecast models, and 40% functional duplication. ProfitMachines deployed an integrated 4-agent ecosystem that unified GTM operations and unlocked $80M in cross-sell revenue.
                  </p>

                  {/* Highlights Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                    <div className="p-4 rounded-2xl bg-emerald-50/60 border border-emerald-200/80">
                      <div className="text-2xl sm:text-3xl font-black font-mono text-emerald-600">5X</div>
                      <div className="text-xs font-mono font-bold text-slate-800 uppercase mt-1">AI Agent Deployment</div>
                      <p className="text-[11px] text-slate-500 mt-0.5">4-agent unified mesh</p>
                    </div>
                    <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                      <div className="text-2xl sm:text-3xl font-black font-mono text-blue-600">85%</div>
                      <div className="text-xs font-mono font-bold text-slate-800 uppercase mt-1">Forecast Accuracy</div>
                      <p className="text-[11px] text-slate-500 mt-0.5">Up from 65% baseline</p>
                    </div>
                    <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                      <div className="text-2xl sm:text-3xl font-black font-mono text-purple-600">40%</div>
                      <div className="text-xs font-mono font-bold text-slate-800 uppercase mt-1">NRR Improvement</div>
                      <p className="text-[11px] text-slate-500 mt-0.5">100% → 140% NRR</p>
                    </div>
                  </div>

                  {/* Quote Snippet */}
                  <div className="p-5 rounded-2xl bg-slate-50 border-l-4 border-emerald-600 text-sm text-slate-700 italic">
                    &ldquo;Incremental AI didn&apos;t compound. ProfitMachines&apos; full AI-native platform unified our portfolio and generated a 2.3X multiple expansion.&rdquo;
                    <span className="block mt-1 font-mono text-xs text-slate-500 font-normal not-italic">
                      — Operating Partner, Technology Private Equity Sponsor
                    </span>
                  </div>

                  <div className="pt-2">
                    <Link
                      to="/case-studies/financial-services-ai-transformation"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 hover:bg-emerald-600 text-white font-bold text-xs uppercase font-mono tracking-wider transition-all group"
                    >
                      <span>Read Full Case Study</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>

                {/* Right: AI Architecture Diagram Visual */}
                <div className="lg:col-span-5 bg-slate-950 rounded-3xl p-6 sm:p-8 text-white border border-slate-800 space-y-6">
                  <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                    <span className="text-xs font-mono text-emerald-400 font-bold uppercase tracking-wider">
                      Agentic Mesh Architecture
                    </span>
                    <span className="text-[11px] font-mono text-slate-400">HIPAA &amp; SEC Certified</span>
                  </div>

                  <div className="space-y-3 font-mono text-xs">
                    <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                      <div className="text-blue-400 font-bold">1. AI SDR Agent Swarm</div>
                      <div className="text-[11px] text-slate-400">Cross-customer whitespace intent mining</div>
                    </div>
                    <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                      <div className="text-indigo-400 font-bold">2. Predictive Sales Intelligence</div>
                      <div className="text-[11px] text-slate-400">Multi-stakeholder approval consensus copilot</div>
                    </div>
                    <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                      <div className="text-purple-400 font-bold">3. Zero-Touch AI RevOps Agent</div>
                      <div className="text-[11px] text-slate-400">Unified multi-CRM data federation and audit</div>
                    </div>
                    <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                      <div className="text-emerald-400 font-bold">4. AI Customer Success Agent</div>
                      <div className="text-[11px] text-slate-400">Autonomous renewal radar &amp; 60-day churn prediction</div>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-slate-800 flex justify-between text-[11px] font-mono text-slate-400">
                    <span>Valuation Expansion:</span>
                    <span className="text-emerald-400 font-bold">8X → 18.4X Exit Multiple</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ── SECTION 3: WHY THESE MATTER (THE PROFITMACHINES DIFFERENCE) ── */}
      <section className="py-20 sm:py-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-mono text-blue-600 font-bold uppercase tracking-wider block mb-2">
              Systemic Differentiation
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading">
              The ProfitMachines Difference
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2">
              How our engagement methodology systematically de-risks enterprise revenue transformations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-xs">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6 font-mono font-bold text-lg">
                01
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Diagnostic Depth</h3>
              <p className="text-sm font-semibold text-blue-600 mb-3 italic">
                &ldquo;We don&apos;t start with solutions. We start with physics.&rdquo;
              </p>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Before writing a line of code or deploying an agent, we dissect unit economics, pipeline leakage, margin erosion, and binding operational constraints to identify the real bottlenecks.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-xs">
              <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-6 font-mono font-bold text-lg">
                02
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Autonomous Execution</h3>
              <p className="text-sm font-semibold text-indigo-600 mb-3 italic">
                &ldquo;We deploy AI agents, not slide decks.&rdquo;
              </p>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                We engineer autonomous agent swarms that execute prospecting, qualification, forecasting, and CRM hygiene directly within your production tech stack 24/7 across every timezone.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-xs">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-6 font-mono font-bold text-lg">
                03
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Measured Realization</h3>
              <p className="text-sm font-semibold text-emerald-600 mb-3 italic">
                &ldquo;Every engagement has locked targets and telemetry.&rdquo;
              </p>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                We link commercial commitments directly to empirical metrics — pipeline multiple, CAC reduction, forecast certainty, and gross margin recovery verified through live board cockpits.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 4: FINAL CTA + INTAKE FORM ── */}
      <section id="intake" className="py-20 sm:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono font-bold uppercase mb-4">
              CONFIDENTIAL INTAKE
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4 font-heading">
              Ready to Be Our Next Featured Transformation?
            </h2>
            <p className="text-slate-600 text-base max-w-xl mx-auto">
              Schedule an executive diagnostic with a Principal Architect. Receive an empirical evaluation of your revenue physics and a transformation roadmap within 24 business hours.
            </p>
          </div>

          <div className="p-8 sm:p-12 rounded-3xl bg-white border border-slate-200 shadow-xl">
            <CaseStudyIntakeForm
              pageContext="Featured Transformations"
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
