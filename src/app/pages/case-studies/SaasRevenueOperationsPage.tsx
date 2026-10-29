import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight, ChevronRight, TrendingUp, BarChart3, Globe,
  ShieldCheck, Layers, Bot, Compass, CheckCircle2,
  Sparkles, Award, ArrowUpRight, DollarSign, Clock, Users,
  Zap, AlertCircle, LineChart, Target, Activity, RefreshCw,
  Cpu, Sliders, Database, FileText, Check, CheckSquare
} from 'lucide-react';
import { CaseStudyIntakeForm } from '../../components/forms/CaseStudyIntakeForm';

export default function SaasRevenueOperationsPage() {
  const [activeQuadrant, setActiveQuadrant] = useState<'pipeline' | 'hygiene' | 'capacity' | 'incentive'>('pipeline');

  useEffect(() => {
    document.title = '2X Rep Output & 80% Selling Time: SaaS RevOps Transformation | ProfitMachines';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans pt-16 lg:pt-[72px]">
      {/* ── SECTION 1: HERO (REVENUE OPERATIONS COMMAND CENTER LAYOUT) ── */}
      <section className="relative pt-20 pb-16 sm:pt-28 sm:pb-24 overflow-hidden border-b border-slate-200 bg-white">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div
            className="absolute inset-0 opacity-[0.35]"
            style={{
              backgroundImage: 'linear-gradient(to right, #e2e8f0 1px, transparent 1px), linear-gradient(to bottom, #e2e8f0 1px, transparent 1px)',
              backgroundSize: '4rem 4rem'
            }}
          />
          <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-violet-500/10 rounded-full blur-[140px] pointer-events-none" />
          <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[140px] pointer-events-none" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            {/* Back link */}
            <div className="mb-6">
              <Link
                to="/case-studies"
                className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-slate-500 hover:text-violet-600 uppercase tracking-wider transition-colors"
              >
                <ChevronRight className="w-4 h-4 rotate-180" />
                <span>Back to Case Studies</span>
              </Link>
            </div>

            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-50 border border-violet-200 text-violet-700 text-xs font-bold tracking-wide uppercase shadow-xs mb-6">
              <span className="font-mono text-violet-600 font-extrabold">CASE STUDY</span>
              <span className="text-slate-300 font-normal">//</span>
              <span>SAAS · REVENUE OPERATIONS</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.08] mb-6 font-heading">
              From Operational Friction to 2X Rep Output:{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 via-indigo-600 to-blue-600">
                SaaS Autonomous Revenue Operations
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg lg:text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto mb-8">
              How a Series B SaaS scale-up reclaimed 40+ hours per rep monthly, boosted selling time from 40% to 80%, and achieved 98% forecast precision through an autonomous RevOps control plane.
            </p>

            {/* Impact Highlights Bar */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-200/80 shadow-xs mb-10 max-w-4xl mx-auto">
              <div className="text-center p-3">
                <div className="text-2xl sm:text-3xl font-extrabold text-violet-600 font-heading">80%</div>
                <div className="text-xs font-medium text-slate-600 uppercase tracking-wider mt-1">Rep Selling Time (vs 40% prior)</div>
              </div>
              <div className="text-center p-3 border-l border-slate-200">
                <div className="text-2xl sm:text-3xl font-extrabold text-indigo-600 font-heading">95%+</div>
                <div className="text-xs font-medium text-slate-600 uppercase tracking-wider mt-1">CRM Data Accuracy</div>
              </div>
              <div className="text-center p-3 border-l border-slate-200">
                <div className="text-2xl sm:text-3xl font-extrabold text-blue-600 font-heading">2.0X</div>
                <div className="text-xs font-medium text-slate-600 uppercase tracking-wider mt-1">Quota Attainment Velocity</div>
              </div>
              <div className="text-center p-3 border-l border-slate-200">
                <div className="text-2xl sm:text-3xl font-extrabold text-emerald-600 font-heading">Instant</div>
                <div className="text-xs font-medium text-slate-600 uppercase tracking-wider mt-1">Commission Calculations</div>
              </div>
            </div>

            {/* CTA row */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#intake-form"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-violet-600 text-white font-bold text-sm hover:bg-violet-700 transition-all shadow-md shadow-violet-600/20"
              >
                <span>Request RevOps Assessment</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#quadrant-dashboard"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white border border-slate-200 text-slate-700 font-bold text-sm hover:bg-slate-50 transition-all"
              >
                <span>Explore Control Plane</span>
                <Sliders className="w-4 h-4 text-violet-500" />
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
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-100 text-violet-700 text-xs font-mono font-bold uppercase mb-4">
                PHASE 1 // EXECUTIVE SNAPSHOT &amp; BASELINE CONTEXT
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mb-4 font-heading">
                Rapid ARR Scaling Strained by Operational Debt
              </h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                Following a successful $30M Series B raise, this B2B SaaS platform expanded its sales force from 12 to 38 account executives. While top-of-funnel inbound demand surged, revenue operations lagged behind, creating severe operational drag that crippled quota attainment.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm text-slate-700">
                  <CheckCircle2 className="w-5 h-5 text-violet-600 shrink-0" />
                  <span><strong>Scale:</strong> $15M ARR expanding toward $35M ARR target</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-700">
                  <CheckCircle2 className="w-5 h-5 text-violet-600 shrink-0" />
                  <span><strong>Team:</strong> 38 AEs, 14 SDRs, 8 AMs across North America & EMEA</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-700">
                  <CheckCircle2 className="w-5 h-5 text-violet-600 shrink-0" />
                  <span><strong>Stack:</strong> Salesforce, HubSpot, Gong, Outreach, manual Google Sheets</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
                  <div className="w-10 h-10 rounded-xl bg-violet-50 flex items-center justify-center text-violet-600 mb-4">
                    <Database className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-2">Tech Stack Disconnection</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Customer data was fractured across 7 disparate SaaS tools with conflicting object schemas, duplicated accounts, and no single source of truth.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
                  <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600 mb-4">
                    <Clock className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-2">Administrative Burdens</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Sellers spent over 24 hours per week logging CRM updates, generating quotes manually, and troubleshooting commission payout discrepancies.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 mb-4">
                    <LineChart className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-2">Forecast Fog</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Forecast submissions relied on gut instinct rather than buyer engagement telemetry, producing 35%+ variances that alarmed board members.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
                  <div className="w-10 h-10 rounded-xl bg-rose-50 flex items-center justify-center text-rose-600 mb-4">
                    <AlertCircle className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-2">Comp Plan Friction</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Commission calculations took RevOps 14 business days after quarter close, causing rep disputes, low trust, and demoralizing turnover.
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
              Where Revenue Momentum Leaked
            </h2>
            <p className="text-base text-slate-600 mt-4">
              A deep-dive audit revealed systemic operational friction across the lead-to-compensation lifecycle.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="text-rose-600 font-mono text-sm font-bold mb-2">LEAKAGE VECTOR 1</div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">60% Admin Tax on Sales Capacity</h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">
                Account Executives spent only 16 hours out of 40 in front of buyers. The remaining 24 hours went to re-keying data between CRM and CPQ, updating spreadsheets, and tracking down contract approvals.
              </p>
              <div className="text-xs font-mono font-bold text-rose-700 bg-rose-50 p-3 rounded-lg border border-rose-200">
                Annual Lost Selling Capacity: 47,000 Hours ($4.2M equivalent payroll)
              </div>
            </div>

            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="text-rose-600 font-mono text-sm font-bold mb-2">LEAKAGE VECTOR 2</div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">65% CRM Data Staleness</h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">
                Over 65% of opportunity stages were outdated. Reps sandbagged deals or left close dates unchanged past month-end, rendering executive pipeline dashboards unreliable for resource allocation.
              </p>
              <div className="text-xs font-mono font-bold text-rose-700 bg-rose-50 p-3 rounded-lg border border-rose-200">
                Pipeline Ghosting Rate: 34% of deals slipped past quarter close
              </div>
            </div>

            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="text-rose-600 font-mono text-sm font-bold mb-2">LEAKAGE VECTOR 3</div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">Post-Close Compensation Lag</h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">
                Split commissions, multi-year prepay accelerators, and SDR attribution required 4 separate spreadsheet models reconciled by hand, producing a 14-day turnaround and a 12% calculation error rate.
              </p>
              <div className="text-xs font-mono font-bold text-rose-700 bg-rose-50 p-3 rounded-lg border border-rose-200">
                Quarterly Disputes: 28 disputed commission statements per period
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
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/20 text-violet-300 text-xs font-mono font-bold uppercase mb-4 border border-violet-500/30">
                Operational Telemetry Audit
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-6 font-heading">
                Rebuilding the Operating Architecture
              </h2>
              <p className="text-slate-300 leading-relaxed mb-6">
                ProfitMachines conducted an exhaustive 14-day telemetry audit of the company&apos;s go-to-market mechanics, mapping every touchpoint from inbound lead routing to revenue recognition.
              </p>
              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700">
                  <div className="text-sm font-bold text-violet-400 mb-1">Unified Data Model (UDM)</div>
                  <div className="text-xs text-slate-300">
                    Harmonized contact, account, opportunity, and subscription objects into an event-driven schema with bidirectional synchronization.
                  </div>
                </div>
                <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700">
                  <div className="text-sm font-bold text-indigo-400 mb-1">Autonomous Activity Capture</div>
                  <div className="text-xs text-slate-300">
                    Zero-click background agents capture emails, calendar invites, and conversation transcripts directly into the CRM with AI entity tagging.
                  </div>
                </div>
                <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700">
                  <div className="text-sm font-bold text-blue-400 mb-1">Algorithmic Deal Health Scoring</div>
                  <div className="text-xs text-slate-300">
                    Machine learning models monitor buyer multi-threading, executive sponsor attendance, and contract review velocity to calculate real-time deal health.
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="p-8 rounded-2xl bg-slate-800 border border-slate-700 shadow-2xl">
                <div className="flex items-center justify-between border-b border-slate-700 pb-4 mb-6">
                  <div className="text-sm font-mono text-slate-400 uppercase">RevOps Operating System</div>
                  <span className="px-2.5 py-0.5 rounded text-[11px] font-mono bg-violet-500/20 text-violet-300 border border-violet-500/40">
                    LIVE ENGINE
                  </span>
                </div>
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between text-xs font-mono mb-2">
                      <span className="text-slate-400">Rep Selling Capacity Realized</span>
                      <span className="text-emerald-400 font-bold">80% (+100% lift)</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-slate-700 overflow-hidden">
                      <div className="h-full bg-emerald-500 rounded-full" style={{ width: '80%' }} />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-xs font-mono mb-2">
                      <span className="text-slate-400">CRM Field Completeness</span>
                      <span className="text-violet-400 font-bold">96.4%</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-slate-700 overflow-hidden">
                      <div className="h-full bg-violet-500 rounded-full" style={{ width: '96.4%' }} />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-xs font-mono mb-2">
                      <span className="text-slate-400">Commission Cycle Turnaround</span>
                      <span className="text-blue-400 font-bold">0 Days (Real-Time)</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-slate-700 overflow-hidden">
                      <div className="h-full bg-blue-500 rounded-full" style={{ width: '98%' }} />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-xs font-mono mb-2">
                      <span className="text-slate-400">Forecast Variance Margin</span>
                      <span className="text-indigo-400 font-bold">±2.1% (from ±35%)</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-slate-700 overflow-hidden">
                      <div className="h-full bg-indigo-500 rounded-full" style={{ width: '95%' }} />
                    </div>
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
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-100 text-indigo-700 text-xs font-mono font-bold uppercase mb-4">
              PHASE 2 // TRANSFORMATION DESIGN &amp; REVOPS STACK
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading">
              The Autonomous Revenue Operations Stack
            </h2>
            <p className="text-base text-slate-600 mt-4">
              A modular, four-layer control plane replacing manual spreadsheet operations with automated intelligence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-violet-300 transition-all">
              <div className="w-12 h-12 rounded-xl bg-violet-100 text-violet-600 flex items-center justify-center mb-4">
                <Database className="w-6 h-6" />
              </div>
              <div className="text-xs font-mono text-violet-600 font-bold uppercase mb-1">Layer 1</div>
              <h3 className="text-base font-bold text-slate-900 mb-2">Autonomous Data Hygiene</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Background agents validate contact info, eliminate duplicate records, auto-enrich firmographics, and standardize opportunity fields without rep intervention.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-indigo-300 transition-all">
              <div className="w-12 h-12 rounded-xl bg-indigo-100 text-indigo-600 flex items-center justify-center mb-4">
                <Sliders className="w-6 h-6" />
              </div>
              <div className="text-xs font-mono text-indigo-600 font-bold uppercase mb-1">Layer 2</div>
              <h3 className="text-base font-bold text-slate-900 mb-2">Deal Velocity Engine</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Continuous inspection of pipeline progression flagging stalled stages, single-threaded champions, and missed follow-ups before deals slip past commit dates.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-blue-300 transition-all">
              <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center mb-4">
                <DollarSign className="w-6 h-6" />
              </div>
              <div className="text-xs font-mono text-blue-600 font-bold uppercase mb-1">Layer 3</div>
              <h3 className="text-base font-bold text-slate-900 mb-2">Automated Compensation Plane</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Rules-based real-time commission engine computing accelerators, split credits, and payout statements the moment contracts are executed in CPQ.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-emerald-300 transition-all">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center mb-4">
                <LineChart className="w-6 h-6" />
              </div>
              <div className="text-xs font-mono text-emerald-600 font-bold uppercase mb-1">Layer 4</div>
              <h3 className="text-base font-bold text-slate-900 mb-2">Predictive Capacity Modeling</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Dynamic ramp and quota simulation tying hiring pace, territory distribution, and segment win rates directly to executive ARR commitments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 6: INTERACTIVE REVOPS COMMAND CENTER (MULTI-QUADRANT LAYOUT) ── */}
      <section id="quadrant-dashboard" className="py-20 border-b border-slate-200 bg-slate-50/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-100 border border-violet-200 text-violet-800 text-xs font-mono font-bold uppercase shadow-xs mb-3">
              <Sliders className="w-3.5 h-3.5 text-violet-600" />
              <span>Interactive Control Plane</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading">
              The 4-Quadrant RevOps Command Center
            </h2>
            <p className="text-slate-600 text-base mt-3">
              Explore the four core operational control modules deployed for executive visibility and rep productivity.
            </p>
          </div>

          {/* Quadrant Navigation Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
            <button
              onClick={() => setActiveQuadrant('pipeline')}
              className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${activeQuadrant === 'pipeline'
                ? 'bg-violet-600 text-white shadow-md shadow-violet-600/20'
                : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
                }`}
            >
              <Target className="w-4 h-4" />
              <span>Quadrant 1: Pipeline Velocity</span>
            </button>
            <button
              onClick={() => setActiveQuadrant('hygiene')}
              className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${activeQuadrant === 'hygiene'
                ? 'bg-violet-600 text-white shadow-md shadow-violet-600/20'
                : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
                }`}
            >
              <Database className="w-4 h-4" />
              <span>Quadrant 2: Autonomous Hygiene</span>
            </button>
            <button
              onClick={() => setActiveQuadrant('capacity')}
              className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${activeQuadrant === 'capacity'
                ? 'bg-violet-600 text-white shadow-md shadow-violet-600/20'
                : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
                }`}
            >
              <Users className="w-4 h-4" />
              <span>Quadrant 3: Capacity & Quota</span>
            </button>
            <button
              onClick={() => setActiveQuadrant('incentive')}
              className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${activeQuadrant === 'incentive'
                ? 'bg-violet-600 text-white shadow-md shadow-violet-600/20'
                : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
                }`}
            >
              <DollarSign className="w-4 h-4" />
              <span>Quadrant 4: Instant Incentive Comp</span>
            </button>
          </div>

          {/* Quadrant Visual Display */}
          <div className="bg-slate-900 rounded-3xl p-6 sm:p-10 border border-slate-800 shadow-2xl text-white">
            {activeQuadrant === 'pipeline' && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-5">
                  <div className="text-violet-400 font-mono text-xs font-bold uppercase mb-2">QUADRANT 01</div>
                  <h3 className="text-2xl font-bold tracking-tight mb-4">Pipeline Velocity & Stalled Deal Alarms</h3>
                  <p className="text-slate-300 text-sm leading-relaxed mb-6">
                    Continuous monitoring of deal progression stages. When deals linger more than 1.5x the historical stage average without logged stakeholder interaction, the system triggers automated playbooks.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-xs text-slate-300">
                      <div className="w-2 h-2 rounded-full bg-emerald-400" />
                      <span>Stage 3 to 4 Transition: 14 days (down from 28 days)</span>
                    </div>
                    <div className="flex items-center gap-3 text-xs text-slate-300">
                      <div className="w-2 h-2 rounded-full bg-violet-400" />
                      <span>Multi-threaded Stakeholder Engagement: 4.8 contacts / opp</span>
                    </div>
                    <div className="flex items-center gap-3 text-xs text-slate-300">
                      <div className="w-2 h-2 rounded-full bg-blue-400" />
                      <span>Early Stage Attrition Detection: 91% precision</span>
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-7 bg-slate-950/80 p-6 rounded-2xl border border-slate-800">
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-xs font-mono text-slate-400 uppercase">Live Pipeline Inspection Telemetry</span>
                    <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-2 py-1 rounded">38 AEs Active</span>
                  </div>
                  <div className="space-y-4">
                    <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-between">
                      <div>
                        <div className="text-xs font-bold text-white">Acme Financial Solutions (Enterprise ARR)</div>
                        <div className="text-[11px] text-slate-400">Stage: Security & Compliance · Health: 94%</div>
                      </div>
                      <span className="text-xs font-mono text-emerald-400 font-bold">$180,000</span>
                    </div>
                    <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-between">
                      <div>
                        <div className="text-xs font-bold text-white">Global Logistics Corp (Mid-Market Tier)</div>
                        <div className="text-[11px] text-slate-400">Stage: Executive Alignment · Health: 88%</div>
                      </div>
                      <span className="text-xs font-mono text-violet-400 font-bold">$115,000</span>
                    </div>
                    <div className="p-3 rounded-lg bg-slate-900 border border-rose-950/80 bg-rose-950/10 flex items-center justify-between">
                      <div>
                        <div className="text-xs font-bold text-rose-300">Apex Health Networks (Stalled Alert)</div>
                        <div className="text-[11px] text-rose-400">No VP interaction for 12 days · AI Re-engagement queued</div>
                      </div>
                      <span className="text-xs font-mono text-rose-400 font-bold">$240,000</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeQuadrant === 'hygiene' && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-5">
                  <div className="text-violet-400 font-mono text-xs font-bold uppercase mb-2">QUADRANT 02</div>
                  <h3 className="text-2xl font-bold tracking-tight mb-4">Autonomous Data Hygiene Control</h3>
                  <p className="text-slate-300 text-sm leading-relaxed mb-6">
                    Zero manual CRM data entry for Account Executives. System parses email headers, attendee metadata, and zoom transcripts, automatically mapping records with 95%+ field accuracy.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-xs text-slate-300">
                      <div className="w-2 h-2 rounded-full bg-emerald-400" />
                      <span>Duplicate Record Merging: 1,420 records deduplicated monthly</span>
                    </div>
                    <div className="flex items-center gap-3 text-xs text-slate-300">
                      <div className="w-2 h-2 rounded-full bg-violet-400" />
                      <span>Firmographic Auto-Enrichment: 100% accounts enriched</span>
                    </div>
                    <div className="flex items-center gap-3 text-xs text-slate-300">
                      <div className="w-2 h-2 rounded-full bg-blue-400" />
                      <span>Rep Time Saved: 8.5 hours / rep weekly</span>
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-7 bg-slate-950/80 p-6 rounded-2xl border border-slate-800">
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-xs font-mono text-slate-400 uppercase">Hygiene & Activity Ingestion Feed</span>
                    <span className="text-xs font-mono text-violet-400 bg-violet-500/10 px-2 py-1 rounded">Autonomous Agent</span>
                  </div>
                  <div className="space-y-3">
                    <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 text-xs">
                      <div className="text-slate-400 font-mono text-[10px]">10:14 AM · Auto-Enrichment</div>
                      <div className="text-white font-medium mt-1">Identified new VP of Engineering at target account. Added to buying committee.</div>
                    </div>
                    <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 text-xs">
                      <div className="text-slate-400 font-mono text-[10px]">10:28 AM · Meeting Summary Ingestion</div>
                      <div className="text-white font-medium mt-1">Gong call transcribed: Budget authority confirmed ($200k), next step set for Legal review.</div>
                    </div>
                    <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 text-xs">
                      <div className="text-slate-400 font-mono text-[10px]">10:45 AM · Stage Auto-Advance</div>
                      <div className="text-white font-medium mt-1">MSA & DPA documents received. Opportunity auto-advanced from Stage 4 to Stage 5.</div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeQuadrant === 'capacity' && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-5">
                  <div className="text-violet-400 font-mono text-xs font-bold uppercase mb-2">QUADRANT 03</div>
                  <h3 className="text-2xl font-bold tracking-tight mb-4">Capacity & Territory Modeling</h3>
                  <p className="text-slate-300 text-sm leading-relaxed mb-6">
                    Dynamic simulation linking rep hiring, ramp curves, account tier distribution, and historical win rates to eliminate quota shortfall surprises before board meetings.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-xs text-slate-300">
                      <div className="w-2 h-2 rounded-full bg-emerald-400" />
                      <span>Ramp Time to Full Productivity: 3.2 months (down from 6.5)</span>
                    </div>
                    <div className="flex items-center gap-3 text-xs text-slate-300">
                      <div className="w-2 h-2 rounded-full bg-violet-400" />
                      <span>Quota Attainment Rate: 78% of reps achieving quota (up from 38%)</span>
                    </div>
                    <div className="flex items-center gap-3 text-xs text-slate-300">
                      <div className="w-2 h-2 rounded-full bg-blue-400" />
                      <span>Territory Potential Balancing: &lt;5% variance across regions</span>
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-7 bg-slate-950/80 p-6 rounded-2xl border border-slate-800">
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-xs font-mono text-slate-400 uppercase">Executive Capacity Simulator</span>
                    <span className="text-xs font-mono text-blue-400 bg-blue-500/10 px-2 py-1 rounded">Series B Model</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
                      <div className="text-[11px] text-slate-400 uppercase font-mono">Total Quota Capacity</div>
                      <div className="text-xl font-bold text-white mt-1">$38.4M</div>
                      <div className="text-[11px] text-emerald-400 mt-1">112% coverage on $34M plan</div>
                    </div>
                    <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
                      <div className="text-[11px] text-slate-400 uppercase font-mono">Rep Ramp Velocity</div>
                      <div className="text-xl font-bold text-white mt-1">94 Days</div>
                      <div className="text-[11px] text-violet-400 mt-1">-51% reduction in ramp cycle</div>
                    </div>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
                    <div className="text-xs font-mono text-slate-400 mb-2">QUOTA SPREAD DISTRIBUTION</div>
                    <div className="flex items-center gap-2">
                      <div className="h-4 bg-emerald-500 rounded text-[10px] font-mono text-slate-900 font-bold flex items-center justify-center" style={{ width: '52%' }}>52% Top Tier</div>
                      <div className="h-4 bg-blue-500 rounded text-[10px] font-mono text-white flex items-center justify-center" style={{ width: '28%' }}>28% Mid</div>
                      <div className="h-4 bg-amber-500 rounded text-[10px] font-mono text-slate-900 flex items-center justify-center" style={{ width: '20%' }}>20% Ramp</div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeQuadrant === 'incentive' && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-5">
                  <div className="text-violet-400 font-mono text-xs font-bold uppercase mb-2">QUADRANT 04</div>
                  <h3 className="text-2xl font-bold tracking-tight mb-4">Instant Incentive Compensation Engine</h3>
                  <p className="text-slate-300 text-sm leading-relaxed mb-6">
                    Eliminated 14 days of manual spreadsheet reconciliation. Sellers view their calculated payout statements immediately upon DocuSign completion with zero disputes.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-xs text-slate-300">
                      <div className="w-2 h-2 rounded-full bg-emerald-400" />
                      <span>Statement Turnaround: Real-time (down from 14 days)</span>
                    </div>
                    <div className="flex items-center gap-3 text-xs text-slate-300">
                      <div className="w-2 h-2 rounded-full bg-violet-400" />
                      <span>Compensation Dispute Rate: 0.0% (down from 12%)</span>
                    </div>
                    <div className="flex items-center gap-3 text-xs text-slate-300">
                      <div className="w-2 h-2 rounded-full bg-blue-400" />
                      <span>Rep Retention Lift: +32% year-over-year</span>
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-7 bg-slate-950/80 p-6 rounded-2xl border border-slate-800">
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-xs font-mono text-slate-400 uppercase">Live Payout Ledger Simulation</span>
                    <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-2 py-1 rounded">Auto-Reconciled</span>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 mb-3">
                    <div className="flex justify-between items-center">
                      <div>
                        <div className="text-xs font-bold text-white">Deal: Cloud Infrastructure Enterprise License ($240k ARR)</div>
                        <div className="text-[11px] text-slate-400">AE: S. Miller · Tier 2 Accelerator (125%) Applied</div>
                      </div>
                      <div className="text-right">
                        <div className="text-xs font-mono text-emerald-400 font-bold">+$28,800.00</div>
                        <div className="text-[10px] text-slate-400 font-mono">Disbursed to Payroll</div>
                      </div>
                    </div>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
                    <div className="flex justify-between items-center">
                      <div>
                        <div className="text-xs font-bold text-white">Deal: Analytics Add-On Pack ($65k Expansion ARR)</div>
                        <div className="text-[11px] text-slate-400">CSM: J. Zhao · Net Retention Multiplier (1.5x) Applied</div>
                      </div>
                      <div className="text-right">
                        <div className="text-xs font-mono text-violet-400 font-bold">+$9,750.00</div>
                        <div className="text-[10px] text-slate-400 font-mono">Disbursed to Payroll</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Visual Architecture Preview */}
          <div className="mt-10 rounded-3xl overflow-hidden border border-slate-200 shadow-md relative group">
            <img
              src="/images/revenue-acceleration-engine.png"
              alt="Autonomous Revenue Acceleration Engine"
              className="w-full h-64 sm:h-80 object-cover group-hover:scale-102 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-6">
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-white bg-violet-600/90 px-3 py-1 rounded-md backdrop-blur-xs">
                  Production RevOps Architecture
                </span>
                <p className="text-slate-200 text-xs sm:text-sm mt-2">
                  Zero-touch CRM data federation, autonomous commission reconciliation, and real-time executive telemetry.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 7: PHASED IMPLEMENTATION TIMELINE ── */}
      <section className="py-16 sm:py-20 border-b border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-100 text-violet-700 text-xs font-mono font-bold uppercase mb-4">
              Execution Cadence
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading">
              12-Week RevOps Overhaul
            </h2>
            <p className="text-base text-slate-600 mt-4">
              Rapid staged deployment delivering tangible rep productivity within 30 days and total operational autonomy by week 12.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="text-xs font-mono font-bold text-violet-600 uppercase mb-2">Weeks 1 – 2</div>
              <h3 className="text-base font-bold text-slate-900 mb-2">Diagnostic & Schema Cleanse</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Complete audit of 7 GTM tools, schema normalization, deduplication scripts, and creation of Unified Data Model.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="text-xs font-mono font-bold text-indigo-600 uppercase mb-2">Weeks 3 – 5</div>
              <h3 className="text-base font-bold text-slate-900 mb-2">Autonomous Activity Ingestion</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Deployment of zero-click meeting, email, and stage transition scrapers. Elimination of manual CRM logging for 38 AEs.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="text-xs font-mono font-bold text-blue-600 uppercase mb-2">Weeks 6 – 8</div>
              <h3 className="text-base font-bold text-slate-900 mb-2">Predictive Pipeline & Comp</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Integration of algorithmic deal velocity alarms, executive forecasting dashboards, and real-time commission engine.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="text-xs font-mono font-bold text-emerald-600 uppercase mb-2">Weeks 9 – 12</div>
              <h3 className="text-base font-bold text-slate-900 mb-2">Capacity Modeling & Scale</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Delivery of Board-level capacity forecasting models, territory rebalancing, and team enablement on the autonomous stack.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 8: MEASURABLE OUTCOMES & ROI DASHBOARD ── */}
      <section className="py-16 sm:py-20 border-b border-slate-200 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-xs font-mono font-bold uppercase mb-4">
              PHASE 3 // EVIDENCE &amp; QUANTIFIED ROI
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading">
              Quantifiable Impact on Revenue Mechanics
            </h2>
            <p className="text-base text-slate-600 mt-4">
              Rigorous before-and-after metrics verified through post-implementation board audit.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-8 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
              <div className="text-3xl font-extrabold text-violet-600 font-heading mb-1">80%</div>
              <div className="text-sm font-bold text-slate-900 mb-2">Rep Selling Time</div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Doubled from 40% (16 hrs/wk) to 80% (32 hrs/wk) as all administrative data entry and quote generation was automated.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
              <div className="text-3xl font-extrabold text-indigo-600 font-heading mb-1">95%+</div>
              <div className="text-sm font-bold text-slate-900 mb-2">CRM Data Accuracy</div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Elevated from 35% manual completeness to 96.4% verified accurate records with zero missing opportunity stages.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
              <div className="text-3xl font-extrabold text-blue-600 font-heading mb-1">98%</div>
              <div className="text-sm font-bold text-slate-900 mb-2">Forecast Precision</div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Variance between Day 1 forecast commitments and quarter-end close dropped from ±35% down to less than ±2.1%.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
              <div className="text-3xl font-extrabold text-emerald-600 font-heading mb-1">0 Days</div>
              <div className="text-sm font-bold text-slate-900 mb-2">Commission Turnaround</div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Reduced from 14 business days to instant, real-time ledger generation with zero disputed commission statements.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
              <div className="text-3xl font-extrabold text-amber-600 font-heading mb-1">2.0X</div>
              <div className="text-sm font-bold text-slate-900 mb-2">AE Quota Velocity</div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Rep quota attainment climbed from 38% of team members to 78%, generating $19M in incremental closed ARR.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
              <div className="text-3xl font-extrabold text-rose-600 font-heading mb-1">-$420K</div>
              <div className="text-sm font-bold text-slate-900 mb-2">Tech Stack Rationalization</div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Eliminated 4 redundant SaaS tools and consolidated under modern API orchestration, generating immediate ARR savings.
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
              Operational Baseline vs Autonomous State
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse border border-slate-200">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200 text-xs font-mono uppercase text-slate-500">
                  <th className="p-4 sm:p-5">Operating Dimension</th>
                  <th className="p-4 sm:p-5 text-rose-600">Prior State (Baseline)</th>
                  <th className="p-4 sm:p-5 text-emerald-600">ProfitMachines Autonomous RevOps</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-sm">
                <tr>
                  <td className="p-4 sm:p-5 font-bold text-slate-900">AE Selling Time</td>
                  <td className="p-4 sm:p-5 text-slate-600">40% (24 hours/week lost to admin)</td>
                  <td className="p-4 sm:p-5 font-bold text-emerald-600">80% (32 hours/week in buyer meetings)</td>
                </tr>
                <tr>
                  <td className="p-4 sm:p-5 font-bold text-slate-900">CRM Data Hygiene</td>
                  <td className="p-4 sm:p-5 text-slate-600">35% field completion, high duplicates</td>
                  <td className="p-4 sm:p-5 font-bold text-emerald-600">96.4% completeness, autonomous deduplication</td>
                </tr>
                <tr>
                  <td className="p-4 sm:p-5 font-bold text-slate-900">Quarterly Forecasting</td>
                  <td className="p-4 sm:p-5 text-slate-600">Gut instinct, ±35% variance</td>
                  <td className="p-4 sm:p-5 font-bold text-emerald-600">Algorithmic inspection, ±2.1% accuracy</td>
                </tr>
                <tr>
                  <td className="p-4 sm:p-5 font-bold text-slate-900">Commission Payout Turnaround</td>
                  <td className="p-4 sm:p-5 text-slate-600">14 business days, 28 disputed statements</td>
                  <td className="p-4 sm:p-5 font-bold text-emerald-600">Instant real-time calculation, zero disputes</td>
                </tr>
                <tr>
                  <td className="p-4 sm:p-5 font-bold text-slate-900">Rep Quota Attainment</td>
                  <td className="p-4 sm:p-5 text-slate-600">38% team hitting quota</td>
                  <td className="p-4 sm:p-5 font-bold text-emerald-600">78% team hitting quota (2.0x velocity)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── SECTION 10: EXECUTIVE TESTIMONIAL ── */}
      <section className="py-16 sm:py-20 border-b border-slate-200 bg-slate-50/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-100 text-violet-700 text-xs font-mono font-bold uppercase mb-8">
            Executive Perspective
          </div>
          <blockquote className="text-xl sm:text-2xl font-serif text-slate-900 italic leading-relaxed mb-8">
            &ldquo;Before ProfitMachines, our RevOps team was essentially full-time spreadsheet firefighters. AEs complained about CRM busywork, forecasts were unreliable, and commission disputes were constant. Deploying this autonomous RevOps control plane gave us back 47,000 selling hours and gave our board absolute confidence in our scaling velocity.&rdquo;
          </blockquote>
          <div className="flex flex-col items-center">
            <div className="font-bold text-slate-900 text-base">Marcus Vance</div>
            <div className="text-xs text-slate-500 font-mono mt-1">Chief Commercial Officer · Enterprise SaaS Platform ($35M ARR)</div>
          </div>
        </div>
      </section>

      {/* ── SECTION 11: CROSS-OFFERINGS & RELATED CASE STUDIES ── */}
      <section className="py-16 sm:py-20 border-b border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <div className="text-xs font-mono font-bold text-violet-600 uppercase mb-2">PHASE 4 // REPLICATION PLAYBOOK &amp; CONNECTED ARCHITECTURE</div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-heading">
                Related Transformations
              </h2>
            </div>
            <Link
              to="/case-studies"
              className="inline-flex items-center gap-2 text-sm font-bold text-violet-600 hover:text-violet-700 mt-4 md:mt-0"
            >
              <span>View All 8 Case Studies</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link
              to="/case-studies/enterprise-saas-pipeline-growth"
              className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-violet-300 hover:shadow-md transition-all group"
            >
              <div className="text-xs font-mono font-bold text-slate-400 uppercase mb-2">SAAS · ENTERPRISE</div>
              <h3 className="text-base font-bold text-slate-900 group-hover:text-violet-600 transition-colors mb-2">
                Enterprise SaaS Pipeline Growth
              </h3>
              <p className="text-xs text-slate-600 mb-4">
                $180M to $420M enterprise pipeline expansion through autonomous demand engineering.
              </p>
              <div className="flex items-center gap-1.5 text-xs font-bold text-violet-600">
                <span>Read Case Study</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            <Link
              to="/case-studies/technology-customer-expansion"
              className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-violet-300 hover:shadow-md transition-all group"
            >
              <div className="text-xs font-mono font-bold text-slate-400 uppercase mb-2">TECHNOLOGY · CUSTOMER SUCCESS</div>
              <h3 className="text-base font-bold text-slate-900 group-hover:text-violet-600 transition-colors mb-2">
                40% NRR Customer Expansion
              </h3>
              <p className="text-xs text-slate-600 mb-4">
                Reversing revenue churn to engineer 140% Net Retention Rate across high-value enterprise accounts.
              </p>
              <div className="flex items-center gap-1.5 text-xs font-bold text-violet-600">
                <span>Read Case Study</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            <Link
              to="/case-studies/healthcare-forecast-accuracy"
              className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-violet-300 hover:shadow-md transition-all group"
            >
              <div className="text-xs font-mono font-bold text-slate-400 uppercase mb-2">HEALTHCARE · FORECASTING</div>
              <h3 className="text-base font-bold text-slate-900 group-hover:text-violet-600 transition-colors mb-2">
                98% Healthcare Forecast Accuracy
              </h3>
              <p className="text-xs text-slate-600 mb-4">
                Eliminating revenue volatility in high-compliance healthcare enterprise environments.
              </p>
              <div className="flex items-center gap-1.5 text-xs font-bold text-violet-600">
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
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-100 border border-violet-200 text-violet-800 text-xs font-mono font-bold uppercase shadow-xs mb-4">
              <ShieldCheck className="w-3.5 h-3.5 text-violet-600" />
              <span>Confidential RevOps Diagnostic</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading">
              Engineer Your RevOps Control Plane
            </h2>
            <p className="text-slate-600 text-base mt-3">
              Request a confidential operational assessment of your current GTM stack, rep administrative load, and forecast precision mechanics.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-xl">
            <CaseStudyIntakeForm studyTitle="SaaS Revenue Operations Transformation" />
          </div>
        </div>
      </section>
    </div>
  );
}
