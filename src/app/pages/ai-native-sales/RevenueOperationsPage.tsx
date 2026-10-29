import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Database, 
  BarChart3, 
  TrendingUp, 
  Cpu, 
  ArrowRight, 
  Sparkles, 
  CheckCircle2, 
  Activity, 
  Layers, 
  Clock, 
  Sliders, 
  ShieldCheck, 
  ChevronRight,
  GitBranch,
  RefreshCw,
  Terminal,
  Calculator,
  AlertCircle,
  PieChart,
  Workflow
} from 'lucide-react';
import { AiSalesIntakeForm } from '../../components/forms/AiSalesIntakeForm';

export const RevenueOperationsPage: React.FC = () => {
  const [activeQuadrant, setActiveQuadrant] = useState<'crm' | 'forecast' | 'analytics' | 'workflow'>('forecast');

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-blue-500/30 selection:text-blue-200">

      {/* Hero Section - Command Center Style */}
      <section className="relative pt-24 pb-20 overflow-hidden border-b border-slate-800 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
        <div 
          className="absolute inset-0 opacity-[0.03] pointer-events-none" 
          style={{ 
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: '32px 32px' 
          }} 
        />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-gradient-to-tr from-cyan-600/15 to-blue-600/10 blur-[130px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center gap-2.5 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-800/60 text-cyan-300 text-xs font-mono tracking-wider mb-6">
            <span className="flex h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
            CAPABILITY PILLAR 04 OF 06
          </div>
          
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white max-w-4xl leading-tight">
            AI Revenue Operations: <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-300 to-indigo-400">Command Your Revenue with Mathematical Certainty</span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-slate-300 max-w-3xl leading-relaxed">
            Replace lagging indicators and surprise misses with real-time revenue command — from automated CRM hygiene to predictive forecasting to autonomous workflow orchestration.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a 
              href="#intake-form" 
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold shadow-lg shadow-blue-600/25 transition-all duration-200"
            >
              Schedule RevOps Audit
              <ArrowRight className="w-4 h-4" />
            </a>
            <Link 
              to="/ai-native-sales" 
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 font-medium transition-all"
            >
              Explore Other Capabilities
            </Link>
          </div>

          {/* Interactive 4-Quadrant Command Center Dashboard Mockup */}
          <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-slate-900/90 border border-slate-800 backdrop-blur-md shadow-2xl">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-6 border-b border-slate-800 gap-4">
              <div>
                <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">Autonomous Telemetry Command Center</span>
                <h3 className="text-lg font-semibold text-white mt-1">Four-Quadrant Revenue Orchestration Grid</h3>
              </div>
              <div className="flex items-center gap-2">
                <span className="flex h-2.5 w-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs font-mono text-slate-300">Variance: &lt;5% audit-grade</span>
              </div>
            </div>

            {/* 4 Quadrant Selector */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
              <button 
                onClick={() => setActiveQuadrant('forecast')}
                className={`p-4 rounded-xl text-left border transition-all ${
                  activeQuadrant === 'forecast' 
                    ? 'bg-slate-800/90 border-cyan-500 shadow-md ring-1 ring-cyan-500/50' 
                    : 'bg-slate-950/60 border-slate-800 hover:border-slate-700 text-slate-400'
                }`}
              >
                <div className="text-xs font-mono text-cyan-400">Quadrant 01</div>
                <div className="text-sm font-semibold text-white mt-1">Predictive Forecast</div>
                <div className="text-xs text-slate-400 mt-1">±3.2% confidence band</div>
              </button>

              <button 
                onClick={() => setActiveQuadrant('crm')}
                className={`p-4 rounded-xl text-left border transition-all ${
                  activeQuadrant === 'crm' 
                    ? 'bg-slate-800/90 border-cyan-500 shadow-md ring-1 ring-cyan-500/50' 
                    : 'bg-slate-950/60 border-slate-800 hover:border-slate-700 text-slate-400'
                }`}
              >
                <div className="text-xs font-mono text-cyan-400">Quadrant 02</div>
                <div className="text-sm font-semibold text-white mt-1">CRM Intelligence</div>
                <div className="text-xs text-slate-400 mt-1">95%+ zero-touch hygiene</div>
              </button>

              <button 
                onClick={() => setActiveQuadrant('analytics')}
                className={`p-4 rounded-xl text-left border transition-all ${
                  activeQuadrant === 'analytics' 
                    ? 'bg-slate-800/90 border-cyan-500 shadow-md ring-1 ring-cyan-500/50' 
                    : 'bg-slate-950/60 border-slate-800 hover:border-slate-700 text-slate-400'
                }`}
              >
                <div className="text-xs font-mono text-cyan-400">Quadrant 03</div>
                <div className="text-sm font-semibold text-white mt-1">Revenue Analytics</div>
                <div className="text-xs text-slate-400 mt-1">25-30% conversion lift</div>
              </button>

              <button 
                onClick={() => setActiveQuadrant('workflow')}
                className={`p-4 rounded-xl text-left border transition-all ${
                  activeQuadrant === 'workflow' 
                    ? 'bg-slate-800/90 border-cyan-500 shadow-md ring-1 ring-cyan-500/50' 
                    : 'bg-slate-950/60 border-slate-800 hover:border-slate-700 text-slate-400'
                }`}
              >
                <div className="text-xs font-mono text-cyan-400">Quadrant 04</div>
                <div className="text-sm font-semibold text-white mt-1">Workflow Automation</div>
                <div className="text-xs text-slate-400 mt-1">60% admin overhead cut</div>
              </button>
            </div>

            {/* Dashboard Display Area */}
            <div className="p-6 rounded-xl bg-slate-950/90 border border-slate-800">
              {activeQuadrant === 'forecast' && (
                <div className="space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <div className="text-xs font-mono text-cyan-400">Quarterly Committed Revenue Model</div>
                      <div className="text-3xl font-bold text-white mt-1">$14.85M <span className="text-sm font-normal text-slate-400">vs $14.2M target</span></div>
                    </div>
                    <div className="text-left sm:text-right">
                      <div className="text-xs font-mono text-emerald-400">Calculated Variance</div>
                      <div className="text-2xl font-bold text-emerald-400">±3.2% <span className="text-xs font-mono text-slate-400">(Deterministic)</span></div>
                    </div>
                  </div>
                  <div className="h-2.5 w-full bg-slate-800 rounded-full overflow-hidden flex">
                    <div className="bg-emerald-500 h-full w-[72%]" title="Closed-Won" />
                    <div className="bg-cyan-500 h-full w-[18%]" title="High-Confidence Commit" />
                    <div className="bg-amber-500 h-full w-[7%]" title="Upside Risk Adjusted" />
                    <div className="bg-slate-700 h-full w-[3%]" title="Pipeline Reserve" />
                  </div>
                  <div className="flex flex-wrap justify-between text-[11px] font-mono text-slate-400 pt-1">
                    <span>Closed-Won: $10.7M</span>
                    <span>AI Commit: $2.67M</span>
                    <span>Weighted Upside: $1.04M</span>
                    <span>Reserve: $440K</span>
                  </div>
                </div>
              )}

              {activeQuadrant === 'crm' && (
                <div className="space-y-3 font-mono text-xs">
                  <div className="flex items-center justify-between p-3 rounded-lg bg-slate-900 border border-slate-800">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      <span className="text-slate-300">Salesforce & HubSpot Bi-Directional Auto-Sync</span>
                    </div>
                    <span className="text-emerald-400">99.98% Synced (0 Errors)</span>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-lg bg-slate-900 border border-slate-800">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      <span className="text-slate-300">Autonomous Contact Deduplication & Enrichment</span>
                    </div>
                    <span className="text-cyan-400">2,410 Records Cleaned Today</span>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-lg bg-slate-900 border border-slate-800">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      <span className="text-slate-300">Rep Activity Auto-Logging (Emails, Calls, Meets)</span>
                    </div>
                    <span className="text-emerald-400">100% Zero-Touch Logging</span>
                  </div>
                </div>
              )}

              {activeQuadrant === 'analytics' && (
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  <div className="p-3.5 rounded-lg bg-slate-900 border border-slate-800">
                    <div className="text-[10px] font-mono text-slate-400">MQL → SQL Velocity</div>
                    <div className="text-xl font-bold text-cyan-400 mt-1">42.8%</div>
                    <div className="text-[10px] text-emerald-400 mt-0.5">+14% vs benchmark</div>
                  </div>
                  <div className="p-3.5 rounded-lg bg-slate-900 border border-slate-800">
                    <div className="text-[10px] font-mono text-slate-400">SQL → Opp Conversion</div>
                    <div className="text-xl font-bold text-cyan-400 mt-1">68.4%</div>
                    <div className="text-[10px] text-emerald-400 mt-0.5">+9% vs benchmark</div>
                  </div>
                  <div className="p-3.5 rounded-lg bg-slate-900 border border-slate-800">
                    <div className="text-[10px] font-mono text-slate-400">Opp → Proposal</div>
                    <div className="text-xl font-bold text-cyan-400 mt-1">54.1%</div>
                    <div className="text-[10px] text-emerald-400 mt-0.5">+12% vs benchmark</div>
                  </div>
                  <div className="p-3.5 rounded-lg bg-slate-900 border border-slate-800">
                    <div className="text-[10px] font-mono text-slate-400">Proposal → Won</div>
                    <div className="text-xl font-bold text-cyan-400 mt-1">38.7%</div>
                    <div className="text-[10px] text-emerald-400 mt-0.5">+16% vs benchmark</div>
                  </div>
                </div>
              )}

              {activeQuadrant === 'workflow' && (
                <div className="space-y-3 font-mono text-xs">
                  <div className="flex items-center justify-between p-3 rounded-lg bg-slate-900 border border-slate-800">
                    <span className="text-slate-300">Automated Commission Payout Calculation & Audit</span>
                    <span className="text-cyan-400">Executed in 3.4s</span>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-lg bg-slate-900 border border-slate-800">
                    <span className="text-slate-300">Territory Rebalancing Algorithm (Neural ICP Fit)</span>
                    <span className="text-emerald-400">Active - Optimal Distribution</span>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-lg bg-slate-900 border border-slate-800">
                    <span className="text-slate-300">Executive Revenue Reporting Digest Generation</span>
                    <span className="text-cyan-400">Scheduled Daily at 06:00 UTC</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Sub-Section 1: CRM Intelligence */}
      <section id="crm" className="py-24 bg-white text-slate-900 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-blue-50 text-blue-700 border border-blue-200">
                <Database className="w-3.5 h-3.5" />
                CRM Intelligence
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-4 leading-tight">
                Zero-Touch CRM Management with 100% Data Quality
              </h2>
              <p className="text-sm text-blue-700 font-mono mt-2">
                Core Function: Zero-touch CRM management that ensures 100% data quality.
              </p>
              
              <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">
                Transforms the CRM from a neglected administrative burden into a living, real-time single source of truth. Captures customer touchpoints autonomously from emails, calendars, and calls.
              </p>

              <div className="mt-6 p-5 rounded-xl bg-slate-50 border border-slate-200">
                <div className="text-xs font-mono text-slate-500 uppercase tracking-wider mb-1">Key Validated Metric</div>
                <div className="text-3xl font-extrabold text-blue-600">95%+</div>
                <div className="text-xs text-slate-600 mt-1">CRM data accuracy achieved with zero manual rep entry</div>
              </div>

              <div className="mt-6 rounded-2xl bg-slate-50 border border-slate-200 p-5 flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-slate-500">Common Situation</div>
                  <p className="text-sm text-slate-800 font-medium italic mt-1">
                    "Reps spent 30% of their week updating Salesforce instead of selling"
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="relative group p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-blue-300 transition-all overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="p-2.5 rounded-lg bg-blue-50 text-blue-600 w-fit mb-4">
                  <Database className="w-5 h-5" />
                </div>
                <h3 className="text-base font-semibold text-slate-900">CRM Automation</h3>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  Autonomous CRM updates from every customer interaction, logging meetings, emails, and stage progressions in real time.
                </p>
              </div>

              <div className="relative group p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-blue-300 transition-all overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="p-2.5 rounded-lg bg-indigo-50 text-indigo-600 w-fit mb-4">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="text-base font-semibold text-slate-900">Data Governance</h3>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  Automated data quality monitoring and cleansing, deduplicating records and resolving conflicting company hierarchies.
                </p>
              </div>

              <div className="relative group p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-blue-300 transition-all overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="p-2.5 rounded-lg bg-cyan-50 text-cyan-600 w-fit mb-4">
                  <Layers className="w-5 h-5" />
                </div>
                <h3 className="text-base font-semibold text-slate-900">Customer 360</h3>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  Unified customer view synthesizing product telemetry, support history, contract terms, and stakeholder relationships.
                </p>
              </div>

              <div className="relative group p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-blue-300 transition-all overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="p-2.5 rounded-lg bg-emerald-50 text-emerald-600 w-fit mb-4">
                  <RefreshCw className="w-5 h-5" />
                </div>
                <h3 className="text-base font-semibold text-slate-900">Revenue Data Management</h3>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  Centralized revenue data with real-time synchronization across billing systems, data warehouses, and execution tools.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sub-Section 2: Revenue Forecasting */}
      <section id="forecasting" className="py-24 bg-slate-50 text-slate-900 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5 order-2 lg:order-1">
              <div className="relative group p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-emerald-300 transition-all overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-600 to-teal-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="p-2.5 rounded-lg bg-emerald-50 text-emerald-600 w-fit mb-4">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <h3 className="text-base font-semibold text-slate-900">Pipeline Forecasting</h3>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  Predictive pipeline models based on deal health signals, stakeholder engagement velocity, and historical close telemetry.
                </p>
              </div>

              <div className="relative group p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-emerald-300 transition-all overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-600 to-teal-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="p-2.5 rounded-lg bg-teal-50 text-teal-600 w-fit mb-4">
                  <BarChart3 className="w-5 h-5" />
                </div>
                <h3 className="text-base font-semibold text-slate-900">Revenue Prediction</h3>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  Quarterly revenue predictions with mathematically computed confidence intervals, removing subjective rep commits.
                </p>
              </div>

              <div className="relative group p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-emerald-300 transition-all overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-600 to-teal-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="p-2.5 rounded-lg bg-blue-50 text-blue-600 w-fit mb-4">
                  <Activity className="w-5 h-5" />
                </div>
                <h3 className="text-base font-semibold text-slate-900">Growth Forecasting</h3>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  Long-term growth trajectory modeling accounting for macroeconomic trends, seasonal factors, and market segment shifts.
                </p>
              </div>

              <div className="relative group p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-emerald-300 transition-all overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-600 to-teal-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="p-2.5 rounded-lg bg-sky-50 text-sky-600 w-fit mb-4">
                  <Sliders className="w-5 h-5" />
                </div>
                <h3 className="text-base font-semibold text-slate-900">Capacity Planning</h3>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  Sales capacity optimization based on pipeline density, rep ramp trajectories, and quota attainment probability.
                </p>
              </div>
            </div>

            <div className="lg:col-span-5 order-1 lg:order-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-emerald-50 text-emerald-700 border border-emerald-200">
                <TrendingUp className="w-3.5 h-3.5" />
                Revenue Forecasting
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-4 leading-tight">
                Behavioral Forecasting with Mathematical Precision
              </h2>
              <p className="text-sm text-emerald-700 font-mono mt-2">
                Core Function: Behavioral forecasting that replaces rep-commit guesswork with mathematical precision.
              </p>
              
              <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">
                Replaces spreadsheet guesswork with predictive algorithms trained on thousands of deal outcomes. Reconciles rep sentiment against behavioral telemetry to deliver reliable quarterly projections.
              </p>

              <div className="mt-6 p-5 rounded-xl bg-white border border-slate-200 shadow-xs">
                <div className="text-xs font-mono text-slate-500 uppercase tracking-wider mb-1">Key Validated Metric</div>
                <div className="text-3xl font-extrabold text-emerald-600">&lt;5%</div>
                <div className="text-xs text-slate-600 mt-1">Forecast-to-actuals variance across enterprise revenue quarters</div>
              </div>

              <div className="mt-6 rounded-2xl bg-white border border-slate-200 p-5 flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-slate-500">Common Situation</div>
                  <p className="text-sm text-slate-800 font-medium italic mt-1">
                    "Board stopped trusting our forecasts after 3 consecutive misses"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sub-Section 3: Revenue Analytics */}
      <section id="analytics" className="py-24 bg-white text-slate-900 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-indigo-50 text-indigo-700 border border-indigo-200">
                <BarChart3 className="w-3.5 h-3.5" />
                Revenue Analytics
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-4 leading-tight">
                Real-Time Diagnostics on Funnel Performance
              </h2>
              <p className="text-sm text-indigo-700 font-mono mt-2">
                Core Function: Real-time analytics that reveal what's working and what's not.
              </p>
              
              <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">
                Uncovers the exact mechanical friction points in your revenue engine. Identifies why deals stall at specific stages and provides prescriptive operational remedies.
              </p>

              <div className="mt-6 p-5 rounded-xl bg-slate-50 border border-slate-200">
                <div className="text-xs font-mono text-slate-500 uppercase tracking-wider mb-1">Key Validated Metric</div>
                <div className="text-3xl font-extrabold text-indigo-600">25-30%</div>
                <div className="text-xs text-slate-600 mt-1">Improvement in stage-to-stage conversion rates</div>
              </div>

              <div className="mt-6 rounded-2xl bg-slate-50 border border-slate-200 p-5 flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-slate-500">Common Situation</div>
                  <p className="text-sm text-slate-800 font-medium italic mt-1">
                    "We had no idea which stage was killing our deals"
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="relative group p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-indigo-300 transition-all overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="p-2.5 rounded-lg bg-indigo-50 text-indigo-600 w-fit mb-4">
                  <BarChart3 className="w-5 h-5" />
                </div>
                <h3 className="text-base font-semibold text-slate-900">Win Rate Analytics</h3>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  Win/loss pattern analysis with actionable insights broken down by competitor, deal structure, and objection type.
                </p>
              </div>

              <div className="relative group p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-indigo-300 transition-all overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="p-2.5 rounded-lg bg-purple-50 text-purple-600 w-fit mb-4">
                  <GitBranch className="w-5 h-5" />
                </div>
                <h3 className="text-base font-semibold text-slate-900">Conversion Analytics</h3>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  Stage-by-stage conversion tracking with bottleneck identification and prescriptive interventions.
                </p>
              </div>

              <div className="relative group p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-indigo-300 transition-all overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="p-2.5 rounded-lg bg-blue-50 text-blue-600 w-fit mb-4">
                  <Layers className="w-5 h-5" />
                </div>
                <h3 className="text-base font-semibold text-slate-900">Funnel Analytics</h3>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  Complete funnel visibility from first touch to closed-won, isolating pipeline velocity by lead source.
                </p>
              </div>

              <div className="relative group p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-indigo-300 transition-all overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="p-2.5 rounded-lg bg-emerald-50 text-emerald-600 w-fit mb-4">
                  <Clock className="w-5 h-5" />
                </div>
                <h3 className="text-base font-semibold text-slate-900">Productivity Analytics</h3>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  Rep-level productivity metrics with automated coaching recommendations to standardize high-performer outputs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sub-Section 4: Workflow Automation */}
      <section id="workflow" className="py-24 bg-slate-50 text-slate-900 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5 order-2 lg:order-1">
              <div className="relative group p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-cyan-300 transition-all overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="p-2.5 rounded-lg bg-cyan-50 text-cyan-600 w-fit mb-4">
                  <Terminal className="w-5 h-5" />
                </div>
                <h3 className="text-base font-semibold text-slate-900">Sales Workflow Automation</h3>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  Automated routing, approvals, and handoffs triggered across deal progression events without administrative friction.
                </p>
              </div>

              <div className="relative group p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-cyan-300 transition-all overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="p-2.5 rounded-lg bg-blue-50 text-blue-600 w-fit mb-4">
                  <Calculator className="w-5 h-5" />
                </div>
                <h3 className="text-base font-semibold text-slate-900">Commission Automation</h3>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  Real-time commission calculation and payout with auditable statements and zero reconciliation latency.
                </p>
              </div>

              <div className="relative group p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-cyan-300 transition-all overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="p-2.5 rounded-lg bg-purple-50 text-purple-600 w-fit mb-4">
                  <BarChart3 className="w-5 h-5" />
                </div>
                <h3 className="text-base font-semibold text-slate-900">Reporting Automation</h3>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  Autonomous report generation and distribution for board decks, pipeline reviews, and executive dashboards.
                </p>
              </div>

              <div className="relative group p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-cyan-300 transition-all overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="p-2.5 rounded-lg bg-emerald-50 text-emerald-600 w-fit mb-4">
                  <Workflow className="w-5 h-5" />
                </div>
                <h3 className="text-base font-semibold text-slate-900">Process Orchestration</h3>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  End-to-end process automation seamlessly synchronizing sales, marketing, finance, and customer success teams.
                </p>
              </div>
            </div>

            <div className="lg:col-span-5 order-1 lg:order-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-cyan-50 text-cyan-700 border border-cyan-200">
                <Workflow className="w-3.5 h-3.5" />
                Workflow Automation
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-4 leading-tight">
                Autonomous Orchestration of Sales Workflows
              </h2>
              <p className="text-sm text-cyan-700 font-mono mt-2">
                Core Function: Autonomous orchestration of sales workflows and processes.
              </p>
              
              <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">
                Frees leadership and reps from the operational gridlock of quarterly comp recalculations, manual routing rules, and weekly deck assembly.
              </p>

              <div className="mt-6 p-5 rounded-xl bg-white border border-slate-200 shadow-xs">
                <div className="text-xs font-mono text-slate-500 uppercase tracking-wider mb-1">Key Validated Metric</div>
                <div className="text-3xl font-extrabold text-cyan-600">60% Reduction</div>
                <div className="text-xs text-slate-600 mt-1">Reduction in administrative time, 80% increase in active selling time</div>
              </div>

              <div className="mt-6 rounded-2xl bg-white border border-slate-200 p-5 flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-slate-500">Common Situation</div>
                  <p className="text-sm text-slate-800 font-medium italic mt-1">
                    "Commission calculations took 2 weeks every quarter"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Verified Outcomes Grid */}
      <section id="outcomes" className="py-24 bg-white text-slate-900 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono text-cyan-600 uppercase tracking-widest font-semibold">Verified Outcomes</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-2">Audited Revenue Operations Performance</h2>
            <p className="text-slate-600 mt-3 text-sm sm:text-base">
              Hard operational benchmarks achieved across deployed enterprise revenue engines.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200 shadow-xs hover:border-cyan-300 transition-all">
              <div className="text-4xl font-extrabold text-cyan-600">
                &lt;5%
              </div>
              <div className="text-sm font-semibold text-slate-900 mt-2">Forecast Variance</div>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                Forecast-to-actuals variance achieved with behavioral deal progression algorithms.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200 shadow-xs hover:border-blue-300 transition-all">
              <div className="text-4xl font-extrabold text-blue-600">
                95%+
              </div>
              <div className="text-sm font-semibold text-slate-900 mt-2">CRM Data Accuracy</div>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                Clean, enriched, and synchronized records with zero manual sales rep data entry.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200 shadow-xs hover:border-indigo-300 transition-all">
              <div className="text-4xl font-extrabold text-indigo-600">
                25-30%
              </div>
              <div className="text-sm font-semibold text-slate-900 mt-2">Conversion Lift</div>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                Improvement in stage-to-stage conversion rates through bottleneck analytics.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200 shadow-xs hover:border-emerald-300 transition-all">
              <div className="text-4xl font-extrabold text-emerald-600">
                60%
              </div>
              <div className="text-sm font-semibold text-slate-900 mt-2">Admin Reduction</div>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                Reduction in administrative time, resulting in an 80% surge in active rep selling time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Capabilities */}
      <section className="py-20 bg-slate-900 border-b border-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-12">
            <div>
              <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">Autonomous Interoperability</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mt-1">Related Revenue Capabilities</h2>
            </div>
            <Link 
              to="/ai-native-sales" 
              className="mt-4 sm:mt-0 text-sm font-semibold text-cyan-400 hover:text-cyan-300 inline-flex items-center gap-1.5"
            >
              Back to AI Native Sales Hub
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link 
              to="/ai-native-sales/sales-execution"
              className="group p-6 rounded-2xl bg-slate-950/80 border border-slate-800 hover:border-cyan-500 transition-all"
            >
              <div className="text-xs font-mono text-cyan-400 mb-2">Capability Pillar 03</div>
              <h3 className="text-lg font-semibold text-white group-hover:text-cyan-300 transition-colors">
                AI Sales Execution
              </h3>
              <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                Live deal data and stage progression signals feed directly into forecasting and deal scoring algorithms.
              </p>
              <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-cyan-400">
                Explore Sales Execution <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>

            <Link 
              to="/ai-native-sales/agents"
              className="group p-6 rounded-2xl bg-slate-950/80 border border-slate-800 hover:border-cyan-500 transition-all"
            >
              <div className="text-xs font-mono text-cyan-400 mb-2">Capability Pillar 05</div>
              <h3 className="text-lg font-semibold text-white group-hover:text-cyan-300 transition-colors">
                AI Sales Agents
              </h3>
              <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                The AI RevOps Agent autonomously executes CRM hygiene, forecasting, and reporting within strict human-in-the-loop guardrails.
              </p>
              <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-cyan-400">
                Explore AI Sales Agents <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>

            <Link 
              to="/ai-native-sales/customer-growth"
              className="group p-6 rounded-2xl bg-slate-950/80 border border-slate-800 hover:border-cyan-500 transition-all"
            >
              <div className="text-xs font-mono text-cyan-400 mb-2">Capability Pillar 06</div>
              <h3 className="text-lg font-semibold text-white group-hover:text-cyan-300 transition-colors">
                Customer Growth
              </h3>
              <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                Retention and expansion telemetry directly informs revenue forecasting and lifetime value analytics.
              </p>
              <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-cyan-400">
                Explore Customer Growth <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA & Intake Form */}
      
      {/* ── KPI METRICS & MEASUREMENT SPECIFICATION ── */}
      <section className="py-20 sm:py-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-blue-600 uppercase tracking-widest mb-3">
              <BarChart3 className="w-3.5 h-3.5" />
              <span>CORE PERFORMANCE METRICS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading mb-4">
              Metrics That Matter: Measurable KPI Architecture
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Every AI Revenue Operations capability is governed by rigorous mathematical benchmarks. Below are the definitive KPIs, formulas, and operational rationales that determine success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-blue-400 hover:shadow-xs transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-50 text-blue-700 font-bold uppercase tracking-wider">
                    Compliance Metric
                  </span>
                  <span className="text-xs font-mono text-slate-500 font-bold">&gt;95% Rep Compliance</span>
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2 font-heading">CRM User Protocol Adoption</h3>
                <div className="text-xs font-mono bg-slate-50 text-slate-700 p-2.5 rounded-lg border border-slate-200/80 mb-3">
                  <span className="text-slate-400 font-bold block mb-0.5">Formula:</span> (Active Reps Adhering to CRM Data Protocols / Total Licensed Sales Users) × 100
                </div>
                <p className="text-xs text-slate-600 leading-relaxed mb-3">Percentage of the commercial bench actively operating through automated system workflows.</p>
              </div>
              <div className="pt-3 border-t border-slate-100 text-[11px] text-slate-500">
                <span className="font-bold text-slate-800">Why it matters:</span> Ensures the entire revenue engine operates with standardized stage exit criteria and consistent execution.
              </div>
            </div>
            <div className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-blue-400 hover:shadow-xs transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-50 text-blue-700 font-bold uppercase tracking-wider">
                    Hygiene Metric
                  </span>
                  <span className="text-xs font-mono text-slate-500 font-bold">&gt;98% Complete Records</span>
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2 font-heading">Telemetry Hygiene & Completeness</h3>
                <div className="text-xs font-mono bg-slate-50 text-slate-700 p-2.5 rounded-lg border border-slate-200/80 mb-3">
                  <span className="text-slate-400 font-bold block mb-0.5">Formula:</span> (Pipeline Opportunities with 100% Required Data Fields Populated / Total Deals) × 100
                </div>
                <p className="text-xs text-slate-600 leading-relaxed mb-3">Proportion of deal records enriched with stakeholder mapping, call notes, and activity logs autonomously.</p>
              </div>
              <div className="pt-3 border-t border-slate-100 text-[11px] text-slate-500">
                <span className="font-bold text-slate-800">Why it matters:</span> Eliminates data blindness, enabling accurate attribution modeling and reliable pipeline health scoring.
              </div>
            </div>
            <div className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-blue-400 hover:shadow-xs transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-50 text-blue-700 font-bold uppercase tracking-wider">
                    Operational Metric
                  </span>
                  <span className="text-xs font-mono text-slate-500 font-bold">Sub-Minute Approvals</span>
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2 font-heading">Workflow SLA Completion Rate</h3>
                <div className="text-xs font-mono bg-slate-50 text-slate-700 p-2.5 rounded-lg border border-slate-200/80 mb-3">
                  <span className="text-slate-400 font-bold block mb-0.5">Formula:</span> (Operational Requests Processed Within Target SLA Window / Total Requests) × 100
                </div>
                <p className="text-xs text-slate-600 leading-relaxed mb-3">Speed and consistency of automated lead routing, discount approvals, and contract provisioning.</p>
              </div>
              <div className="pt-3 border-t border-slate-100 text-[11px] text-slate-500">
                <span className="font-bold text-slate-800">Why it matters:</span> Removes cross-departmental handoff friction that delays deal closure and frustrates prospective buyers.
              </div>
            </div>
            <div className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-blue-400 hover:shadow-xs transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-50 text-blue-700 font-bold uppercase tracking-wider">
                    Forecasting Metric
                  </span>
                  <span className="text-xs font-mono text-slate-500 font-bold">&lt;2% Quarterly Variance</span>
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2 font-heading">Pipeline Forecast Variance</h3>
                <div className="text-xs font-mono bg-slate-50 text-slate-700 p-2.5 rounded-lg border border-slate-200/80 mb-3">
                  <span className="text-slate-400 font-bold block mb-0.5">Formula:</span> (|Actual Closed Revenue - Algorithmic Projected Revenue| / Projected Revenue) × 100
                </div>
                <p className="text-xs text-slate-600 leading-relaxed mb-3">Mathematical discrepancy between machine-learned quarterly commitments and actual booked revenue.</p>
              </div>
              <div className="pt-3 border-t border-slate-100 text-[11px] text-slate-500">
                <span className="font-bold text-slate-800">Why it matters:</span> Provides C-suite and board leadership with dependable revenue visibility for capital allocation.
              </div>
            </div>
            <div className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-blue-400 hover:shadow-xs transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-50 text-blue-700 font-bold uppercase tracking-wider">
                    Efficiency Metric
                  </span>
                  <span className="text-xs font-mono text-slate-500 font-bold">-60% Admin Reduction</span>
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2 font-heading">Weekly Admin Overhead Drain</h3>
                <div className="text-xs font-mono bg-slate-50 text-slate-700 p-2.5 rounded-lg border border-slate-200/80 mb-3">
                  <span className="text-slate-400 font-bold block mb-0.5">Formula:</span> Average Hours per Representative Absorbed by Manual Data Entry and Report Compiling
                </div>
                <p className="text-xs text-slate-600 leading-relaxed mb-3">Time lost across the commercial organization to repetitive administrative tasks rather than revenue generation.</p>
              </div>
              <div className="pt-3 border-t border-slate-100 text-[11px] text-slate-500">
                <span className="font-bold text-slate-800">Why it matters:</span> Directly recovers thousands of productive selling hours across the commercial organization annually.
              </div>
            </div>
            <div className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-blue-400 hover:shadow-xs transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-50 text-blue-700 font-bold uppercase tracking-wider">
                    Productivity Metric
                  </span>
                  <span className="text-xs font-mono text-slate-500 font-bold">&gt; $1.8M ARR per FTE</span>
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2 font-heading">Revenue per Sales Representative</h3>
                <div className="text-xs font-mono bg-slate-50 text-slate-700 p-2.5 rounded-lg border border-slate-200/80 mb-3">
                  <span className="text-slate-400 font-bold block mb-0.5">Formula:</span> Total Closed Net-New ARR / Total Number of Full-Time Equivalent Quota Reps
                </div>
                <p className="text-xs text-slate-600 leading-relaxed mb-3">Annualized revenue productivity achieved per commercial sales representative across the organization.</p>
              </div>
              <div className="pt-3 border-t border-slate-100 text-[11px] text-slate-500">
                <span className="font-bold text-slate-800">Why it matters:</span> The benchmark metric governing the economic profitability of scaling commercial sales headcount.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="intake-form" className="py-24 relative bg-slate-950 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Ready to Command Your Revenue with Mathematical Certainty?
            </h2>
            <p className="mt-4 text-slate-400 text-sm sm:text-base max-w-xl mx-auto">
              Schedule a RevOps Audit with our enterprise architects to eliminate CRM friction and predict revenue with sub-5% variance.
            </p>
            <div className="mt-4 flex items-center justify-center gap-4 text-xs text-slate-400">
              <span className="inline-flex items-center gap-1">
                <CheckCircle2 className="w-4 h-4 text-cyan-400" /> Schedule RevOps Audit
              </span>
              <span className="inline-flex items-center gap-1">
                <CheckCircle2 className="w-4 h-4 text-cyan-400" /> Talk to a Principal Architect
              </span>
            </div>
          </div>

          <AiSalesIntakeForm />
        </div>
      </section>
    </div>
  );
};

export default RevenueOperationsPage;
