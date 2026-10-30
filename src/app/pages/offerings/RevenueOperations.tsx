import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Compass, ArrowRight, ShieldCheck, CheckCircle2, TrendingUp, Target,
  DollarSign, Activity, Layers, Search, Sparkles, Lock, ChevronRight,
  Zap, BarChart3, Sliders, Cpu, Shield, ArrowUpRight, Clock,
  Check, Bot, FileText, CreditCard, Briefcase, AlertTriangle,
  Scale, Users, LineChart, CheckCircle, RefreshCw, Eye, Server,
  Database, GitBranch, Gauge, Network, Workflow
} from 'lucide-react';
import OfferingsIntakeForm from '../../components/forms/OfferingsIntakeForm';

export default function RevenueOperations() {
  const location = useLocation();

  useEffect(() => {
    document.title = 'Revenue Operations | Unified Revenue Systems Architecture | ProfitMachines';
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const scrollToElement = () => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      };
      scrollToElement();
      const t1 = setTimeout(scrollToElement, 100);
      const t2 = setTimeout(scrollToElement, 300);
      return () => {
        clearTimeout(t1);
        clearTimeout(t2);
      };
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location.hash, location.pathname]);

  const scrollToAnchor = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      window.history.pushState(null, '', '#' + id);
    }
  };

  const operationalFrictionPoints = [
    {
      title: 'Conflicting System Data & Identity Fragmentation',
      problem: 'Marketing, sales, finance, and customer success operate on disconnected customer databases with mismatched IDs and duplicate records.',
      consequence: 'Conflicting pipeline reports, duplicate account outreach, and broken multi-touch attribution.',
      impact: '20-30% Operational Waste in Data Hygiene'
    },
    {
      title: 'Manual Inter-Departmental Handoff Drag',
      problem: 'Leads, deal stage progressions, and post-sale onboarding handoffs require manual email notifications and spreadsheets.',
      consequence: 'Leads sit untouched for days, stage SLAs are breached, and customer onboarding time-to-value stalls.',
      impact: '3.4x Faster Drop-Off at Transition Boundaries'
    },
    {
      title: 'Inflexible Territory & Quota Allocation',
      problem: 'Accounts are allocated by legacy geographic boundaries rather than verified buyer intent, TAM concentration, and rep capacity.',
      consequence: 'Star reps are starved of target accounts while underperforming territories receive bloated quotas.',
      impact: '±35% Rep Quota Attainment Variance'
    },
    {
      title: 'Subjective Forecasting & Black-Box Variance',
      problem: 'Executive leaders rely on monthly rollups of rep subjective confidence rather than automated, econometric pipeline telemetry.',
      consequence: 'Surprise quarter-end misses that erode board credibility and disrupt capital budgeting.',
      impact: 'Up to 28% Forecast Variance at Quarter End'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* ── STICKY PAGE SUB-NAV BAR (GLOBAL ACCELERATION PALETTE) ── */}
      <nav aria-label="Page Sub Navigation" className="sticky top-16 z-30 bg-slate-900/95 backdrop-blur-md border-b border-slate-800 text-white text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-11 flex items-center justify-between gap-4 overflow-x-auto no-scrollbar">
          <div className="flex items-center gap-2.5 shrink-0">
            <span className="font-mono text-blue-400 font-bold">OFFERING 04</span>
            <span className="font-bold text-slate-200">Revenue Operations</span>
            <span className="hidden sm:inline text-slate-500">|</span>
            <span className="hidden sm:inline text-slate-400 font-medium">Revenue Systems</span>
          </div>

          <div className="flex items-center gap-3 shrink-0 text-slate-300 font-medium text-[11px] sm:text-xs">
            <a href="#friction" onClick={(e) => scrollToAnchor(e, 'friction')} className="hover:text-blue-400 transition-colors">Fragmented Cost</a>
            <a href="#command-center" onClick={(e) => scrollToAnchor(e, 'command-center')} className="hover:text-blue-400 transition-colors">Process Automation</a>
            <a href="#crm-orchestration" onClick={(e) => scrollToAnchor(e, 'crm-orchestration')} className="hover:text-blue-400 transition-colors">CRM & Data</a>
            <a href="#forecasting" onClick={(e) => scrollToAnchor(e, 'forecasting')} className="hover:text-blue-400 transition-colors">Forecast Visibility</a>
            <a href="#lifecycle" onClick={(e) => scrollToAnchor(e, 'lifecycle')} className="hover:text-blue-400 transition-colors">RevOps Lifecycle</a>
            <a href="#kpis" onClick={(e) => scrollToAnchor(e, 'kpis')} className="hover:text-blue-400 transition-colors">KPI Framework</a>
            <a href="#intake" onClick={(e) => scrollToAnchor(e, 'intake')} className="px-2.5 py-1 rounded bg-blue-600 hover:bg-blue-500 text-white font-bold transition-colors">Diagnostic</a>
          </div>
        </div>
      </nav>

      {/* ── SECTION 1: HERO ── */}
      <section className="relative pt-12 pb-16 sm:pt-20 sm:pb-24 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute inset-0 opacity-[0.20]" style={{ backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.07) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.07) 1px, transparent 1px)', backgroundSize: '4rem 4rem' }} />
          <div className="absolute -top-40 right-1/4 w-[600px] h-[600px] bg-blue-600/15 rounded-full blur-[140px]" />
          <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-indigo-600/12 rounded-full blur-[130px]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs font-mono text-slate-400 mb-4">
            <Link to="/offerings" className="hover:text-blue-400 transition-colors">Offerings</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
            <span className="text-blue-400 font-bold">Revenue Operations</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/15 border border-blue-400/30 text-blue-300 text-xs font-bold tracking-widest uppercase font-mono mb-4">
                <Gauge className="w-3.5 h-3.5 text-blue-400" />
                <span>REVENUE SYSTEMS & ARCHITECTURE</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.15] mb-5 font-heading">
                Connect Your Revenue Operations Into{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-indigo-300">
                  One Intelligent System
                </span>
              </h1>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-6 max-w-3xl">
                Unify revenue processes, customer data, operational workflows, and performance visibility. Help marketing, sales, finance, and customer success operate with clearer handoffs, more reliable information, and measurable accountability.
              </p>

              {/* Target Decision-Makers */}
              <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 text-xs text-slate-300 mb-8 space-y-1 max-w-2xl">
                <div className="text-[11px] font-mono font-bold text-blue-400 uppercase tracking-wider">
                  Target Decision-Makers:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 text-slate-300">
                  <div className="flex items-center gap-1.5"><span className="text-blue-400">•</span> VP Revenue Operations & RevOps Directors</div>
                  <div className="flex items-center gap-1.5"><span className="text-blue-400">•</span> Chief Revenue Officers (CROs) & COOs</div>
                  <div className="flex items-center gap-1.5"><span className="text-blue-400">•</span> CRM & Data Architects (SFDC / HubSpot)</div>
                  <div className="flex items-center gap-1.5"><span className="text-blue-400">•</span> Commercial Finance & FP&A Leaders</div>
                </div>
              </div>

              {/* Hero CTAs */}
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="#intake"
                  onClick={(e) => scrollToAnchor(e, 'intake')}
                  className="px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 active:bg-blue-700 text-white font-bold text-sm transition-all shadow-lg shadow-blue-600/30 inline-flex items-center gap-2 group cursor-pointer"
                >
                  <span>Optimize Your Revenue Operations</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>

                <Link
                  to="/book-consultation"
                  className="px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-200 font-bold text-sm transition-all inline-flex items-center gap-2 cursor-pointer"
                >
                  <span>Book a Consultation</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-4">
              <div className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-xl space-y-4">
                <div className="text-xs font-mono font-bold uppercase text-blue-400 tracking-wider">
                  RevOps Performance Benchmark
                </div>
                <div className="space-y-3">
                  <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700/80">
                    <div className="text-[11px] text-slate-400 uppercase font-mono">Forecast Precision</div>
                    <div className="text-xl font-bold font-mono text-emerald-400 mt-0.5">98% Model Precision</div>
                    <p className="text-[11px] text-slate-400 mt-1">&lt;2% Quarterly variance against actual closed ARR.</p>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700/80">
                    <div className="text-[11px] text-slate-400 uppercase font-mono">Cross-Department SLA Drag</div>
                    <div className="text-xl font-bold font-mono text-blue-400 mt-0.5">Zero Handoff Latency</div>
                    <p className="text-[11px] text-slate-400 mt-1">Automated bidirectional routing across marketing, sales & CS.</p>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700/80">
                    <div className="text-[11px] text-slate-400 uppercase font-mono">Customer Identity Resolution</div>
                    <div className="text-xl font-bold font-mono text-white mt-0.5">99.8% Record Hygiene</div>
                    <p className="text-[11px] text-slate-400 mt-1">Single customer source-of-truth across all connected platforms.</p>
                  </div>
                </div>
                <div className="text-[10px] font-mono text-slate-500 pt-2 border-t border-slate-800 text-center">
                  *Illustrative operating scenario metrics based on modeled client baselines.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 2: THE COST OF FRAGMENTED OPERATIONS ── */}
      <section id="friction" className="py-14 sm:py-20 bg-slate-50 border-b border-slate-200 scroll-mt-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <span className="text-xs font-mono text-blue-600 uppercase tracking-widest font-bold block mb-2">
              SYSTEMIC OPERATIONAL DRAG
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading mb-4">
              The True Cost of Fragmented Revenue Operations
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              When go-to-market systems operate in silos, commercial efficiency decays quietly. Sales reps spend hours searching for records, leads slip through handoff gaps, and executive dashboards present conflicting truths.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {operationalFrictionPoints.map((item, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs hover:border-blue-400 transition-all flex flex-col justify-between">
                <div>
                  <div className="w-7 h-7 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-xs font-mono mb-3">
                    0{idx + 1}
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-2 font-heading">{item.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">{item.problem}</p>
                  <p className="text-xs text-slate-500 italic border-l-2 border-slate-200 pl-2.5 mb-4">{item.consequence}</p>
                </div>
                <div className="pt-3 border-t border-slate-100 text-xs font-mono text-emerald-600 font-bold">
                  {item.impact}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 3: CAPABILITY A - REVENUE PROCESS AUTOMATION (#command-center) ── */}
      <section id="command-center" className="py-14 sm:py-20 bg-white border-b border-slate-200 scroll-mt-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <span className="text-xs font-mono text-blue-600 uppercase tracking-widest font-bold block mb-2">
              CAPABILITY A · PROCESS AUTOMATION
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading mb-4">
              Revenue Process Automation & Command Center
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Eliminate manual handoffs between marketing, sales, finance, and customer success. Enforce strict SLA timers, automate deal progression criteria, and trigger instant escalations before friction causes deal drop-off.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-xs font-mono mb-3">
                <Workflow className="w-4 h-4" />
              </div>
              <h4 className="text-base font-bold text-slate-900 mb-2 font-heading">Cross-Functional Transition Gates</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Automates mandatory handoff criteria between SDR qualification, AE discovery, Sales Engineering proof-of-concept, and Customer Success onboarding.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-xs font-mono mb-3">
                <Clock className="w-4 h-4" />
              </div>
              <h4 className="text-base font-bold text-slate-900 mb-2 font-heading">Automated SLA Monitoring</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Tracks response time SLAs down to the minute. If high-intent inbound leads or customer renewal notices linger unassigned, escalation triggers alert management.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-xs font-mono mb-3">
                <AlertTriangle className="w-4 h-4" />
              </div>
              <h4 className="text-base font-bold text-slate-900 mb-2 font-heading">Exception Handling & Deadlock Resolution</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Identifies stuck deals in approval queues, expired quotes, and unreturned contract redlines, routing them automatically to designated commercial architects.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 4: CAPABILITY B - CRM & DATA ORCHESTRATION (#crm-orchestration) ── */}
      <section id="crm-orchestration" className="py-14 sm:py-20 bg-slate-50 border-b border-slate-200 scroll-mt-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <span className="text-xs font-mono text-blue-600 uppercase tracking-widest font-bold block mb-2">
              CAPABILITY B · DATA ARCHITECTURE
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading mb-4">
              CRM & Data Orchestration
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Unified cross-system customer identity resolution, bidirectional sync, and clean data hygiene. Establish an unshakeable single source of truth across CRM, billing, marketing automation, and customer telemetry.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-10">
            <div className="space-y-4">
              <div className="p-5 rounded-2xl bg-white border border-slate-200">
                <h4 className="text-sm font-bold text-slate-900 font-heading mb-1 flex items-center gap-2">
                  <Database className="w-4 h-4 text-blue-600" />
                  Universal Identity Resolution
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Maps website visitor IP, email domain, corporate parent hierarchy, and billing accounts into a unified customer ID, eliminating duplicate records and fragmented contact trees.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-slate-200">
                <h4 className="text-sm font-bold text-slate-900 font-heading mb-1 flex items-center gap-2">
                  <RefreshCw className="w-4 h-4 text-blue-600" />
                  Bi-Directional Telemetry Sync
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Maintains sub-minute synchronization between Salesforce/HubSpot, Snowflake data warehouses, Stripe billing, and product usage analytics without sync conflict errors.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-slate-200">
                <h4 className="text-sm font-bold text-slate-900 font-heading mb-1 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-blue-600" />
                  Continuous Field Completeness & Quality Sentinel
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Automated background audits test field completeness, deduplicate orphan leads, and enrich firmographic details nightly to ensure 99.8% baseline hygiene.
                </p>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200">
              <h4 className="text-xs font-mono font-bold uppercase text-slate-400 tracking-wider mb-4">
                Data Hygiene & Orchestration Standards
              </h4>
              <div className="space-y-3 text-xs font-mono">
                <div className="flex justify-between items-center p-2.5 rounded-lg bg-slate-50 border border-slate-200/80">
                  <span className="text-slate-700">Duplicate Record Rate</span>
                  <span className="text-emerald-600 font-bold">&lt;0.2% Total Database</span>
                </div>
                <div className="flex justify-between items-center p-2.5 rounded-lg bg-slate-50 border border-slate-200/80">
                  <span className="text-slate-700">Identity Resolution Accuracy</span>
                  <span className="text-blue-600 font-bold">99.8% Match Confidence</span>
                </div>
                <div className="flex justify-between items-center p-2.5 rounded-lg bg-slate-50 border border-slate-200/80">
                  <span className="text-slate-700">Sync Failure Recovery SLA</span>
                  <span className="text-slate-900 font-bold">&lt;15 Minutes Auto-Healing</span>
                </div>
              </div>
              <p className="text-[11px] text-slate-500 mt-4 leading-relaxed italic">
                *Verified across multi-system enterprise environments integrating Salesforce Enterprise, HubSpot, Marketo, and Snowflake.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 5: CAPABILITY C & D - FEATURED PORTALS (AI WORKFLOWS & EXECUTIVE TELEMETRY) ── */}
      <section className="py-12 sm:py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* AI Revenue Workflows Portal */}
            <div className="p-8 rounded-3xl bg-slate-900 text-white border border-slate-800 shadow-xl flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 font-mono text-xs font-bold uppercase tracking-wider mb-3">
                  <Cpu className="w-3.5 h-3.5 text-blue-400" />
                  <span>AI NATIVE SALES PORTAL</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold font-heading mb-3">
                  AI Revenue Workflows
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                  Autonomous lead routing, dynamic territory rebalancing based on propensity density, and real-time SLA breach alerting across enterprise sales swarms.
                </p>
              </div>
              <div>
                <Link
                  to="/ai-native-sales/revops"
                  className="px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs font-mono uppercase tracking-wider transition-all inline-flex items-center gap-2 group cursor-pointer"
                >
                  <span>Explore AI RevOps Engine</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Executive Telemetry Portal */}
            <div className="p-8 rounded-3xl bg-slate-900 text-white border border-slate-800 shadow-xl flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 font-mono text-xs font-bold uppercase tracking-wider mb-3">
                  <Gauge className="w-3.5 h-3.5 text-blue-400" />
                  <span>GROWTH SCIENCE PORTAL</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold font-heading mb-3">
                  Executive Telemetry
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                  Consolidated real-time board-level revenue command center HUD, full-funnel attribution, and diagnostic root-cause tracking from ARR down to field rep actions.
                </p>
              </div>
              <div>
                <Link
                  to="/growth-science/executive-telemetry"
                  className="px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs font-mono uppercase tracking-wider transition-all inline-flex items-center gap-2 group cursor-pointer"
                >
                  <span>View Executive Telemetry</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 6: CAPABILITY E - PERFORMANCE & FORECAST VISIBILITY (#forecasting) ── */}
      <section id="forecasting" className="py-14 sm:py-20 bg-slate-50 border-b border-slate-200 scroll-mt-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <span className="text-xs font-mono text-blue-600 uppercase tracking-widest font-bold block mb-2">
              CAPABILITY E · PREDICTIVE FORECASTING
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading mb-4">
              Performance & Forecast Visibility
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Continuous rep performance telemetry, cohort close-rate tracking, and conversion health visibility. Eliminate subjective sales calls with mathematical precision.
            </p>
          </div>

          <div className="p-6 sm:p-8 rounded-2xl bg-slate-900 text-white border border-slate-800 shadow-xl mb-10">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-800 gap-2 mb-6">
              <div>
                <span className="text-[10px] font-mono text-blue-400 uppercase font-bold tracking-wider">Illustrative Scenario</span>
                <h4 className="text-lg font-bold font-heading">Quarterly Pipeline Forecast Variance HUD</h4>
              </div>
              <span className="px-2.5 py-1 rounded bg-blue-500/20 text-blue-300 font-mono text-xs font-bold border border-blue-500/30">
                Current Precision: 98.4%
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-xs font-mono">
              <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700">
                <span className="text-slate-400 text-[11px] block">Quarter Target</span>
                <span className="text-lg font-bold text-white block mt-0.5">$12,400,000 ARR</span>
                <span className="text-blue-400 text-[11px] mt-1 block">Board Approved</span>
              </div>
              <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700">
                <span className="text-slate-400 text-[11px] block">Econometric Predictor</span>
                <span className="text-lg font-bold text-emerald-400 block mt-0.5">$12,650,000 ARR</span>
                <span className="text-slate-400 text-[11px] mt-1 block">+2.0% Projected Variance</span>
              </div>
              <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700">
                <span className="text-slate-400 text-[11px] block">Commit Coverage</span>
                <span className="text-lg font-bold text-white block mt-0.5">3.4x Qualified TAM</span>
                <span className="text-blue-400 text-[11px] mt-1 block">Healthy Cushion</span>
              </div>
              <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700">
                <span className="text-slate-400 text-[11px] block">Downside Stress-Test</span>
                <span className="text-lg font-bold text-amber-400 block mt-0.5">$11,900,000 ARR</span>
                <span className="text-slate-400 text-[11px] mt-1 block">Within 4% Safety Floor</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 7: REVENUE OPERATIONS LIFECYCLE (#lifecycle) ── */}
      <section id="lifecycle" className="py-14 sm:py-20 bg-white border-b border-slate-200 scroll-mt-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono text-blue-600 uppercase tracking-widest font-bold block mb-2">
              SYSTEMIC GOVERNANCE
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading mb-4">
              The Revenue Operations Lifecycle
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              A disciplined, continuous operating loop ensuring data accuracy, automated workflows, and executive clarity at every scale tier.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-6 gap-3">
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
              <span className="text-xs font-mono text-blue-600 font-bold block mb-1">01. Ingestion</span>
              <h5 className="font-bold text-slate-900 text-xs mb-1 font-heading">Data Integration</h5>
              <p className="text-[11px] text-slate-600">Unified customer data capture across all active tools.</p>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
              <span className="text-xs font-mono text-blue-600 font-bold block mb-1">02. Alignment</span>
              <h5 className="font-bold text-slate-900 text-xs mb-1 font-heading">Standardization</h5>
              <p className="text-[11px] text-slate-600">Standardized qualification gates and shared field taxonomies.</p>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
              <span className="text-xs font-mono text-blue-600 font-bold block mb-1">03. Execution</span>
              <h5 className="font-bold text-slate-900 text-xs mb-1 font-heading">Workflow Engine</h5>
              <p className="text-[11px] text-slate-600">Automated routing, SLA timers, and handoff protocols.</p>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
              <span className="text-xs font-mono text-blue-600 font-bold block mb-1">04. Telemetry</span>
              <h5 className="font-bold text-slate-900 text-xs mb-1 font-heading">Monitoring</h5>
              <p className="text-[11px] text-slate-600">Continuous tracking of conversion velocity and deal health.</p>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
              <span className="text-xs font-mono text-blue-600 font-bold block mb-1">05. Exception</span>
              <h5 className="font-bold text-slate-900 text-xs mb-1 font-heading">Resolution</h5>
              <p className="text-[11px] text-slate-600">Immediate remediation of stalled deals and sync errors.</p>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
              <span className="text-xs font-mono text-blue-600 font-bold block mb-1">06. Compounding</span>
              <h5 className="font-bold text-slate-900 text-xs mb-1 font-heading">Optimization</h5>
              <p className="text-[11px] text-slate-600">Refining predictive models based on actual outcomes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 8: KPI MEASUREMENT FRAMEWORK ── */}
      <section id="kpis" className="py-14 sm:py-20 bg-slate-50 border-b border-slate-200 scroll-mt-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono text-blue-600 uppercase tracking-widest font-bold block mb-2">
              MEASUREMENT ARCHITECTURE
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading mb-4">
              Revenue Operations KPI Framework
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Mathematical definitions and documented telemetry parameters tracking revenue operational excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-white border border-slate-200">
              <div className="text-xs font-mono text-blue-600 uppercase font-bold mb-1">Forecast Variance</div>
              <h4 className="text-base font-bold text-slate-900 mb-2">Variance Minimization</h4>
              <p className="text-xs text-slate-600 mb-3"><strong>Formula:</strong> |(Forecast ARR - Actual Closed ARR)| ÷ Actual Closed ARR, measured quarterly.</p>
              <div className="text-[11px] font-mono text-slate-500 pt-3 border-t border-slate-100">
                Target: &lt;2% Spread · Data Source: Continuous CRM Snapshot Feeds
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200">
              <div className="text-xs font-mono text-blue-600 uppercase font-bold mb-1">Handoff SLA Compliance</div>
              <h4 className="text-base font-bold text-slate-900 mb-2">Lead Transition Velocity</h4>
              <p className="text-xs text-slate-600 mb-3"><strong>Formula:</strong> (Transitions completed within SLA limit) ÷ (Total handoffs across departments).</p>
              <div className="text-[11px] font-mono text-slate-500 pt-3 border-t border-slate-100">
                Target: ≥98% On-Time SLA · Data Source: Automated Workflow Event Logs
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200">
              <div className="text-xs font-mono text-blue-600 uppercase font-bold mb-1">Record Hygiene Index</div>
              <h4 className="text-base font-bold text-slate-900 mb-2">CRM Health & Deduplication</h4>
              <p className="text-xs text-slate-600 mb-3"><strong>Formula:</strong> (Clean records with complete mandatory attributes) ÷ (Total database records).</p>
              <div className="text-[11px] font-mono text-slate-500 pt-3 border-t border-slate-100">
                Target: ≥99.5% Completeness · Data Source: Nightly Data Audit Bots
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 9: EXECUTIVE BRIEFING INTAKE ── */}
      <section id="intake" className="py-16 sm:py-24 bg-slate-950 text-white relative overflow-hidden border-t border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 font-mono text-xs font-bold uppercase tracking-widest mb-4">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>CONFIDENTIAL REVOPS AUDIT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-heading mb-4">
            Make Revenue Operations More Connected and Measurable
          </h2>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Schedule an executive review session with a Principal Revenue Systems Architect. We evaluate your CRM data flows, handoff SLAs, and forecasting precision under mutual NDA.
          </p>
        </div>

        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <OfferingsIntakeForm
            pageContext="Revenue Operations Architecture Review"
            defaultObjective="Revenue Operations & Data Orchestration"
          />
        </div>
      </section>
    </div>
  );
}
