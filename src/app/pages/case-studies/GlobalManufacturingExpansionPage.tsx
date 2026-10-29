import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight, ChevronRight, TrendingUp, BarChart3, Globe,
  ShieldCheck, Layers, Bot, Compass, CheckCircle2,
  Sparkles, Award, ArrowUpRight, DollarSign, Clock, Users,
  Zap, AlertCircle, LineChart, Target, Activity, MapPin, Network
} from 'lucide-react';
import { CaseStudyIntakeForm } from '../../components/forms/CaseStudyIntakeForm';

export default function GlobalManufacturingExpansionPage() {
  useEffect(() => {
    document.title = '$400M New International Revenue: Global Manufacturing Case Study | ProfitMachines';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans pt-16 lg:pt-[72px]">
      {/* ── SECTION 1: HERO (GLOBAL EXPANSION LAYOUT) ── */}
      <section className="relative pt-20 pb-16 sm:pt-28 sm:pb-24 overflow-hidden border-b border-slate-200 bg-white">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div
            className="absolute inset-0 opacity-[0.35]"
            style={{
              backgroundImage: 'linear-gradient(to right, #e2e8f0 1px, transparent 1px), linear-gradient(to bottom, #e2e8f0 1px, transparent 1px)',
              backgroundSize: '4rem 4rem'
            }}
          />
          <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[140px] pointer-events-none" />
          <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[140px] pointer-events-none" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            {/* Back link */}
            <div className="mb-6">
              <Link
                to="/case-studies"
                className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-slate-500 hover:text-indigo-600 uppercase tracking-wider transition-colors"
              >
                <ChevronRight className="w-4 h-4 rotate-180" />
                <span>Back to Case Studies</span>
              </Link>
            </div>

            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-bold tracking-wide uppercase shadow-xs mb-6">
              <span className="font-mono text-indigo-600 font-extrabold">CASE STUDY</span>
              <span className="text-slate-300 font-normal">//</span>
              <span>MANUFACTURING · ENTERPRISE</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.08] mb-6 font-heading">
              $400M New International Revenue:{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-blue-600 to-purple-600">
                How a Fortune 500 Manufacturer Engineered Global Expansion
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg lg:text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto mb-8">
              From entering 5 new markets with trial-and-error to deploying AI-native global revenue systems — 47% faster sales cycles, 3X dealer productivity, and $400M new international revenue in 24 months.
            </p>

            {/* Result Badge */}
            <div className="inline-flex flex-wrap items-center justify-center gap-3 px-6 py-3 rounded-2xl bg-indigo-50/80 border border-indigo-200 text-indigo-900 font-mono text-xs sm:text-sm font-bold shadow-xs mb-10">
              <span className="text-indigo-700">$400M New Revenue</span>
              <span className="text-slate-300 font-normal">|</span>
              <span className="text-blue-700">47% Faster Cycles</span>
              <span className="text-slate-300 font-normal">|</span>
              <span className="text-emerald-700">3X Dealer Productivity</span>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="#intake"
                className="inline-flex items-center justify-center bg-slate-900 hover:bg-indigo-600 text-white font-bold px-7 py-4 rounded-xl shadow-lg shadow-slate-900/10 text-sm transition-all hover:-translate-y-0.5 group font-mono uppercase tracking-wider gap-2 cursor-pointer"
              >
                <span>Schedule Executive Briefing</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#outcomes"
                className="inline-flex items-center justify-center border border-slate-200 bg-white hover:bg-slate-50 text-slate-800 font-bold px-6 py-4 rounded-xl text-sm shadow-xs transition-all font-mono uppercase tracking-wider gap-2"
              >
                <span>Inspect Verified Outcomes</span>
                <ChevronRight className="w-4 h-4 text-indigo-600" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 2: EXECUTIVE SUMMARY CARD ── */}
      <section className="py-14 sm:py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-sm">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-mono font-bold uppercase mb-4">
              PHASE 1 // EXECUTIVE SNAPSHOT &amp; BASELINE CONTEXT
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-sm">
              <div>
                <span className="text-xs font-mono text-slate-400 font-bold uppercase block mb-1">Challenge</span>
                <p className="text-slate-700 leading-snug">Entering 5 target international markets with trial-and-error, dealer network inefficiency, and complex data residency.</p>
              </div>
              <div>
                <span className="text-xs font-mono text-slate-400 font-bold uppercase block mb-1">Approach</span>
                <p className="text-slate-700 leading-snug">Deployed Global Business Acceleration with AI-native market intelligence and multi-language autonomous agents.</p>
              </div>
              <div>
                <span className="text-xs font-mono text-slate-400 font-bold uppercase block mb-1">Outcome</span>
                <p className="text-slate-700 leading-snug">$400M new international revenue, 47% faster enterprise sales cycles, and 3X dealer productivity.</p>
              </div>
              <div>
                <span className="text-xs font-mono text-slate-400 font-bold uppercase block mb-1">Timeline</span>
                <p className="text-slate-700 leading-snug">24 months from diagnostic to full multi-region operational scale.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 3: CLIENT SITUATION ── */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-mono text-indigo-600 font-bold uppercase tracking-wider block mb-2">
              Pre-Engagement Context
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight font-heading">
              The Client Situation
            </h2>
          </div>

          <div className="p-8 sm:p-10 rounded-3xl bg-slate-50 border border-slate-200 leading-relaxed text-slate-700 text-base sm:text-lg mb-8">
            A Fortune 500 industrial manufacturer with $8B in revenue was expanding into 5 new international markets (Germany, Japan, Brazil, India, Australia). Previous expansion attempts had been costly failures — entering markets without validated demand, launching with English-only messaging, and discovering regulatory gaps after signing contracts. The dealer network was inefficient — 50 distributors but only 5 produced 80% of revenue. The CEO needed a deterministic approach to global expansion.
          </div>

          {/* Global Expansion Challenge Visual */}
          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs">
            <div className="text-xs font-mono font-bold text-slate-500 uppercase mb-4">
              Diagnostic Mapping: Cross-Border Friction
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-mono">
              <div className="p-4 rounded-xl bg-rose-50 border border-rose-200">
                <span className="text-rose-600 font-bold block mb-1">50 Vanity Dealers</span>
                <p className="text-slate-600 font-sans">80% generated near-zero pipeline due to lack of co-sell attribution.</p>
              </div>
              <div className="p-4 rounded-xl bg-amber-50 border border-amber-200">
                <span className="text-amber-600 font-bold block mb-1">English-Only Outreach</span>
                <p className="text-slate-600 font-sans">Zero cultural tone localization in Germany and Japan suppressed win rates.</p>
              </div>
              <div className="p-4 rounded-xl bg-rose-50 border border-rose-200">
                <span className="text-rose-600 font-bold block mb-1">18-Month Sales Cycle</span>
                <p className="text-slate-600 font-sans">Protracted contract review cycles caused by jurisdictional Infosec friction.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 4: GROWTH DIAGNOSIS (WHAT WE FOUND) ── */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono text-indigo-600 font-bold uppercase tracking-wider block mb-2">
              Empirical Discovery
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight font-heading">
              What We Found
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-xs">
              <div className="text-xs font-mono text-indigo-600 font-bold uppercase mb-2">Market Intelligence Findings</div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">2 of 5 Markets Unviable</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                2 of the 5 candidate markets had unit economics that would not support profitable expansion. Regulatory complexity in Brazil alone would have added 18 months of legal burn to payback.
              </p>
            </div>

            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-xs">
              <div className="text-xs font-mono text-blue-600 font-bold uppercase mb-2">Friction Diagnostics Findings</div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Dealer 80/20 Leakage</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Dealer network suffered from classic 80/20 dilution — 80% of distributor partners generated only 20% of pipeline with zero co-sell orchestration or deal attribution.
              </p>
            </div>

            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-xs">
              <div className="text-xs font-mono text-emerald-600 font-bold uppercase mb-2">Profit Pool Insights</div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Concentrated German &amp; Japanese Pools</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Germany and Japan possessed deeply concentrated profit pools with highly favorable regulatory alignment — representing the highest statistical probability of fast ROI.
              </p>
            </div>

            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-xs">
              <div className="text-xs font-mono text-purple-600 font-bold uppercase mb-2">Growth Bottlenecks</div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Zero Multi-Language Capacity</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                No internal multi-language SDR capability existed. Scaling into non-English markets traditionally required recruiting expensive localized sales offices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 5: SOLUTION ARCHITECTURE ── */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono text-indigo-600 font-bold uppercase tracking-wider block mb-2">
              PHASE 2 // TRANSFORMATION DESIGN &amp; MULTI-REGION ARCHITECTURE
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight font-heading">
              What We Deployed
            </h2>
          </div>

          <div className="space-y-6">
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200">
              <h3 className="text-lg font-bold text-slate-900 mb-4 font-mono uppercase text-indigo-600">
                1. Global Capabilities Deployed
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div className="p-4 rounded-xl bg-white border border-slate-200">
                  <strong className="block text-slate-900 mb-1">Global Business Acceleration:</strong>
                  <p className="text-slate-600">Sequenced market entry starting with DACH and Japan, calibrating pricing tiers to local purchasing power.</p>
                </div>
                <div className="p-4 rounded-xl bg-white border border-slate-200">
                  <strong className="block text-slate-900 mb-1">AI Native Sales:</strong>
                  <p className="text-slate-600">Deployed multi-language AI SDR swarms covering 8 native languages across 5 global timezones 24/7.</p>
                </div>
                <div className="p-4 rounded-xl bg-white border border-slate-200">
                  <strong className="block text-slate-900 mb-1">Partner Ecosystem Orchestration:</strong>
                  <p className="text-slate-600">Pruned 50 distributors to 8 premier partners with real-time co-sell telemetry and pipeline attribution.</p>
                </div>
                <div className="p-4 rounded-xl bg-white border border-slate-200">
                  <strong className="block text-slate-900 mb-1">Revenue Operations:</strong>
                  <p className="text-slate-600">Installed multi-region currency hedging, GDPR/APPI compliance pre-flight audits, and unified dashboards.</p>
                </div>
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-slate-950 text-white border border-slate-800">
              <h3 className="text-lg font-bold text-white mb-4 font-mono uppercase text-purple-400">
                2. Autonomous AI Systems Configured
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-mono">
                <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
                  <span className="text-indigo-400 font-bold block mb-1">Multi-Language AI SDRs</span>
                  <p className="text-slate-400 font-sans">Autonomous prospecting in German, Japanese, French, Italian, and Spanish.</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
                  <span className="text-blue-400 font-bold block mb-1">Market Radar Agents</span>
                  <p className="text-slate-400 font-sans">Continuous monitoring of competitive industrial pricing moves and tender filings.</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
                  <span className="text-emerald-400 font-bold block mb-1">Regulatory Agents</span>
                  <p className="text-slate-400 font-sans">Real-time jurisdictional compliance auditing for trade tariffs and data residency.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 6: VISUAL TRANSFORMATION DIAGRAM (WORLD MAP TIMELINE) ── */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono text-indigo-600 font-bold uppercase tracking-wider block mb-2">
              Multi-Region Execution Path
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight font-heading">
              The Global Transformation
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-3xl bg-white border border-rose-200">
              <span className="px-2.5 py-1 rounded bg-rose-50 text-rose-700 font-mono text-xs font-bold uppercase block w-fit mb-3">
                Pre-Entry Blindspots
              </span>
              <h3 className="text-base font-bold text-slate-900 mb-2">Trial-and-Error Expansion</h3>
              <ul className="space-y-2 text-xs text-slate-600">
                <li>• English-only domestic collateral</li>
                <li>• 50 unmanaged distributor logos</li>
                <li>• 18-month average sales cycles</li>
                <li>• Regulatory contract stranding</li>
              </ul>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-indigo-200 shadow-md">
              <span className="px-2.5 py-1 rounded bg-indigo-50 text-indigo-700 font-mono text-xs font-bold uppercase block w-fit mb-3">
                Intervention Arc
              </span>
              <h3 className="text-base font-bold text-slate-900 mb-2">24-Month Deployment</h3>
              <ul className="space-y-2 text-xs text-slate-600">
                <li>• Sequenced entry into DACH &amp; Japan</li>
                <li>• Multi-language AI SDR agents deployed</li>
                <li>• Distributor network scored &amp; focused</li>
                <li>• Currency &amp; compliance automation</li>
              </ul>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-emerald-200">
              <span className="px-2.5 py-1 rounded bg-emerald-50 text-emerald-700 font-mono text-xs font-bold uppercase block w-fit mb-3">
                Validated Global Footprint
              </span>
              <h3 className="text-base font-bold text-slate-900 mb-2">Autonomous International Engine</h3>
              <ul className="space-y-2 text-xs text-slate-600">
                <li>• $400M new international revenue</li>
                <li>• 9.5-month sales cycle (-47%)</li>
                <li>• 3X dealer productivity multiple</li>
                <li>• 100% compliance with zero fines</li>
              </ul>
            </div>
          </div>

          {/* Visual Architecture Preview */}
          <div className="mt-8 rounded-3xl overflow-hidden border border-slate-200 shadow-md relative group">
            <img
              src="/images/industry-manufacturing.png"
              alt="Global Manufacturing Transformation Architecture"
              className="w-full h-64 sm:h-80 object-cover group-hover:scale-102 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-6">
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-white bg-indigo-600/90 px-3 py-1 rounded-md backdrop-blur-xs">
                  Production Telemetry Architecture
                </span>
                <p className="text-slate-200 text-xs sm:text-sm mt-2">
                  Multi-Region RevOps &amp; Autonomous Telemetry Infrastructure deployed across international operating divisions.
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
            <span className="text-xs font-mono text-indigo-600 font-bold uppercase tracking-wider block mb-2">
              PHASE 3 // EVIDENCE &amp; QUANTIFIED RESULTS
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading">
              Verified Outcomes
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 text-center">
              <div className="text-4xl sm:text-5xl font-black text-slate-900 font-mono tracking-tight mb-2">
                $400M
              </div>
              <div className="h-1 w-12 bg-indigo-600 mx-auto mb-4 rounded-full" />
              <p className="text-sm font-bold text-slate-900 mb-1">New International Revenue</p>
              <p className="text-xs text-slate-500">Contracted across Germany, Japan, and Western Europe.</p>
            </div>

            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 text-center">
              <div className="text-4xl sm:text-5xl font-black text-slate-900 font-mono tracking-tight mb-2">
                -47%
              </div>
              <div className="h-1 w-12 bg-blue-600 mx-auto mb-4 rounded-full" />
              <p className="text-sm font-bold text-slate-900 mb-1">Sales Cycle Compression</p>
              <p className="text-xs text-slate-500">Sales cycles shortened from 18 months to 9.5 months.</p>
            </div>

            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 text-center">
              <div className="text-4xl sm:text-5xl font-black text-slate-900 font-mono tracking-tight mb-2">
                3X
              </div>
              <div className="h-1 w-12 bg-emerald-600 mx-auto mb-4 rounded-full" />
              <p className="text-sm font-bold text-slate-900 mb-1">Dealer Productivity</p>
              <p className="text-xs text-slate-500">Partner-sourced pipeline expanded through co-sell telemetry.</p>
            </div>

            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 text-center">
              <div className="text-4xl sm:text-5xl font-black text-slate-900 font-mono tracking-tight mb-2">
                60–75%
              </div>
              <div className="h-1 w-12 bg-purple-600 mx-auto mb-4 rounded-full" />
              <p className="text-sm font-bold text-slate-900 mb-1">Market Entry ROI Lift</p>
              <p className="text-xs text-slate-500">Saved $15M by rejecting two unviable candidate territories.</p>
            </div>

            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 text-center">
              <div className="text-4xl sm:text-5xl font-black text-slate-900 font-mono tracking-tight mb-2">
                8 Langs
              </div>
              <div className="h-1 w-12 bg-sky-600 mx-auto mb-4 rounded-full" />
              <p className="text-sm font-bold text-slate-900 mb-1">Native Language Coverage</p>
              <p className="text-xs text-slate-500">Autonomous prospecting 24/7 across 5 global timezones.</p>
            </div>

            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 text-center">
              <div className="text-4xl sm:text-5xl font-black text-slate-900 font-mono tracking-tight mb-2">
                100%
              </div>
              <div className="h-1 w-12 bg-rose-600 mx-auto mb-4 rounded-full" />
              <p className="text-sm font-bold text-slate-900 mb-1">Jurisdictional Compliance</p>
              <p className="text-xs text-slate-500">Zero regulatory notices or fines under GDPR and APPI.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 8: BEFORE VS AFTER COMPARISON TABLE ── */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-mono text-indigo-600 font-bold uppercase tracking-wider block mb-2">
              Side-By-Side Operational Shift
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight font-heading">
              The Global Transformation in Numbers
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
                    <th className="py-4 px-6 text-indigo-400 font-bold">Verified Delta</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 font-sans text-sm">
                  <tr className="hover:bg-slate-50/80">
                    <td className="py-3.5 px-6 font-bold text-slate-900">International Revenue</td>
                    <td className="py-3.5 px-6 text-slate-600 font-mono">$0 Stalled Base</td>
                    <td className="py-3.5 px-6 text-emerald-600 font-bold font-mono">$400M Realized</td>
                    <td className="py-3.5 px-6 text-indigo-600 font-mono font-bold">New Profit Stream</td>
                  </tr>
                  <tr className="hover:bg-slate-50/80">
                    <td className="py-3.5 px-6 font-bold text-slate-900">Average Sales Cycle</td>
                    <td className="py-3.5 px-6 text-slate-600 font-mono">18.0 Months</td>
                    <td className="py-3.5 px-6 text-emerald-600 font-bold font-mono">9.5 Months</td>
                    <td className="py-3.5 px-6 text-indigo-600 font-mono font-bold">-47% Faster</td>
                  </tr>
                  <tr className="hover:bg-slate-50/80">
                    <td className="py-3.5 px-6 font-bold text-slate-900">Dealer Productivity</td>
                    <td className="py-3.5 px-6 text-slate-600 font-mono">1.0X Baseline</td>
                    <td className="py-3.5 px-6 text-emerald-600 font-bold font-mono">3.0X Pipeline Yield</td>
                    <td className="py-3.5 px-6 text-indigo-600 font-mono font-bold">3X Multiplier</td>
                  </tr>
                  <tr className="hover:bg-slate-50/80">
                    <td className="py-3.5 px-6 font-bold text-slate-900">Market Entry ROI</td>
                    <td className="py-3.5 px-6 text-slate-600 font-mono">40% Below Target</td>
                    <td className="py-3.5 px-6 text-emerald-600 font-bold font-mono">60-75% Above Target</td>
                    <td className="py-3.5 px-6 text-indigo-600 font-mono font-bold">+100+ Points</td>
                  </tr>
                  <tr className="hover:bg-slate-50/80">
                    <td className="py-3.5 px-6 font-bold text-slate-900">Active Languages Covered</td>
                    <td className="py-3.5 px-6 text-slate-600 font-mono">1 (English Only)</td>
                    <td className="py-3.5 px-6 text-emerald-600 font-bold font-mono">8 Native Languages</td>
                    <td className="py-3.5 px-6 text-indigo-600 font-mono font-bold">8X Global Reach</td>
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
            <span className="text-xs font-mono text-indigo-600 font-bold uppercase tracking-wider block mb-2">
              Strategic Takeaways
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight font-heading">
              What the CEO Learned
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200">
              <div className="font-mono text-xs font-bold text-indigo-600 mb-2">Lesson 01</div>
              <h3 className="text-base font-bold text-slate-900 mb-2">Validation Beats Ambition</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Global expansion isn&apos;t about geographic ambition — it&apos;s about verified unit-economic margin. Skipping 2 unviable markets preserved $15M in capital.
              </p>
            </div>
            <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200">
              <div className="font-mono text-xs font-bold text-blue-600 mb-2">Lesson 02</div>
              <h3 className="text-base font-bold text-slate-900 mb-2">Autonomous Scale Without Overhead</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Multi-language AI agents allowed us to scale internationally without recruiting dozens of localized satellite offices. We covered 8 languages in 3 weeks.
              </p>
            </div>
            <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200">
              <div className="font-mono text-xs font-bold text-emerald-600 mb-2">Lesson 03</div>
              <h3 className="text-base font-bold text-slate-900 mb-2">Partners Need Telemetry</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Dealer networks require pipeline attribution, not vanity logo walls. Focusing on 8 high-yield distributors produced far more than 50 unmanaged ones.
              </p>
            </div>
          </div>

          <div className="p-8 sm:p-10 rounded-3xl bg-slate-950 text-white border border-slate-800 relative overflow-hidden">
            <p className="text-lg sm:text-xl text-slate-200 font-medium italic leading-relaxed mb-4">
              &ldquo;ProfitMachines turned global expansion from a gamble into a deterministic system. We went from hoping for international revenue to engineering it with verified precision.&rdquo;
            </p>
            <div className="font-mono text-xs text-indigo-400">
              — Chief Executive Officer, Fortune 500 Industrial Manufacturer
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 10: RELATED OFFERINGS (3 CARDS) ── */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-mono text-indigo-600 font-bold uppercase tracking-wider block mb-2">
              PHASE 4 // REPLICATION PLAYBOOK &amp; RELATED OFFERINGS
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-heading">
              Explore Related Methodologies
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link
              to="/global-acceleration"
              className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-indigo-400 hover:shadow-lg transition-all group block"
            >
              <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-4">
                <Globe className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-lg mb-2 group-hover:text-indigo-600 transition-colors flex items-center justify-between">
                <span>Global Acceleration</span>
                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 group-hover:text-indigo-600 transition-all" />
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                The institutional framework for cross-border expansion, entry models, and territory sequencing.
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
                Deploying autonomous AI agents operating across 15+ native languages and global timezones.
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
                Multi-region revenue attribution, localized pricing governance, and sovereign data residency.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* ── SECTION 11: RELEVANT AI CAPABILITIES ── */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-mono text-indigo-600 font-bold uppercase tracking-wider block mb-2">
              Autonomous Systems
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-heading">
              AI Capabilities Deployed in this Engagement
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link
              to="/global-acceleration/ai-global-scaling"
              className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-indigo-400 hover:shadow-md transition-all group block"
            >
              <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-3">
                <Globe className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-sm mb-1 group-hover:text-indigo-600 transition-colors">
                Multi-Language AI SDRs
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Native prospecting across German, Japanese, and Western European dialects.
              </p>
            </Link>

            <Link
              to="/global-acceleration/market-intelligence"
              className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-blue-400 hover:shadow-md transition-all group block"
            >
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-3">
                <Compass className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-sm mb-1 group-hover:text-blue-600 transition-colors">
                Market Intelligence Agents
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Continuous radar tracking competitor moves and local tender filings.
              </p>
            </Link>

            <Link
              to="/global-acceleration/global-revops"
              className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-emerald-400 hover:shadow-md transition-all group block"
            >
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-3">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-sm mb-1 group-hover:text-emerald-600 transition-colors">
                Regulatory Intelligence
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Continuous monitoring of data sovereignty, tariffs, and trade regulations.
              </p>
            </Link>

            <Link
              to="/global-acceleration/partner-ecosystems"
              className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-purple-400 hover:shadow-md transition-all group block"
            >
              <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center mb-3">
                <Network className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-sm mb-1 group-hover:text-purple-600 transition-colors">
                Partner Attribution Telemetry
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Multi-touch co-sell pipeline attribution and dealer quota tracking.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* ── SECTION 12: FINAL CTA + INTAKE FORM ── */}
      <section id="intake" className="py-20 sm:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-mono font-bold uppercase mb-4">
              CONFIDENTIAL INTAKE
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4 font-heading">
              Ready to Engineer Predictable Global Revenue?
            </h2>
            <p className="text-slate-600 text-base max-w-xl mx-auto">
              Schedule a confidential Executive Briefing with a Global Practice Partner. We will audit your international candidate territories and calculate unit-economic ROI probability within 24 business hours.
            </p>
          </div>

          <div className="p-8 sm:p-12 rounded-3xl bg-white border border-slate-200 shadow-xl">
            <CaseStudyIntakeForm
              pageContext="Global Manufacturing Expansion"
              defaultChallenge="Global Expansion"
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
              <span>Operations in 40+ Countries</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
