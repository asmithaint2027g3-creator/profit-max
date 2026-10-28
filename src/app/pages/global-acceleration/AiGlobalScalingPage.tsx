import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Bot, ArrowRight, ChevronRight, Activity, ShieldCheck,
  TrendingUp, BarChart3, Layers, Cpu, Globe, CheckCircle2,
  AlertCircle, Users, Sparkles, Building2, HelpCircle,
  MapPin, Zap, ArrowUpRight, DollarSign, Compass, Network,
  Terminal, Shield, Eye, Clock, Radio, Play
} from 'lucide-react';
import { GlobalExpansionIntakeForm } from '../../components/forms/GlobalExpansionIntakeForm';

interface AgentSwarm {
  id: string;
  name: string;
  languages: string[];
  primaryMission: string;
  activeDeployments: string;
  velocityMetric: string;
  sampleTerminalLog: string;
  activeStatus: string;
}

const AGENT_SWARMS: AgentSwarm[] = [
  {
    id: 'sdr-swarm',
    name: 'Multi-Language AI SDR Swarms',
    languages: ['German', 'Japanese', 'French', 'Portuguese', 'Arabic', 'English'],
    primaryMission: 'Autonomous 24/7 multi-channel prospecting, objection handling, and executive meeting booking in local business hours.',
    activeDeployments: '24 Regions · 15+ Native Dialects',
    velocityMetric: '1/10th Cost of Human Fleets',
    sampleTerminalLog: '[AGENT-SDR-DE-04] Identified DACH CIO via intent surge. Drafted localized BaFin-compliant technical inquiry in native German. Meeting booked for 10:00 CET.',
    activeStatus: 'Streaming 24/7'
  },
  {
    id: 'intel-agents',
    name: 'Market Intelligence Sentinel Agents',
    languages: ['Global Multi-Dialect Web & Regulatory Scans'],
    primaryMission: 'Continuous monitoring of competitive launches, local pricing updates, and enterprise hiring signals across 40+ countries.',
    activeDeployments: '40 Sovereign Markets Monitored',
    velocityMetric: '<7 Days Competitor Detection',
    sampleTerminalLog: '[AGENT-INTEL-JP-02] Detected competitor pricing shift in Tokyo market. Alerting EMEA/APAC pricing engine to adjust defensive discounting thresholds.',
    activeStatus: 'Active Sensor Sweep'
  },
  {
    id: 'reg-agents',
    name: 'Regulatory Compliance Sentinel Agents',
    languages: ['Legal & Sovereign Directives Monitoring'],
    primaryMission: 'Real-time tracking of data sovereignty changes (GDPR, LGPD, APPI, PDPA) and cross-border commercial regulations.',
    activeDeployments: '25 Jurisdictions Covered',
    velocityMetric: '90+ Days Advance Warning',
    sampleTerminalLog: '[AGENT-REG-BR-01] Brazil LGPD technical update detected on data localization. Impact flagged: 2 contract templates automatically amended for legal review.',
    activeStatus: 'Zero Compliance Breaches'
  },
  {
    id: 'expansion-agents',
    name: 'Autonomous Expansion Workflows',
    languages: ['Multinational Entity Cross-Indexing'],
    primaryMission: 'Continuous telemetry parsing across global enterprise accounts to surface multi-subsidiary expansion and cross-border cross-sell.',
    activeDeployments: '1,400+ Enterprise Entities Monitored',
    velocityMetric: '+25-40% Expansion Pipeline',
    sampleTerminalLog: '[AGENT-EXP-MNC-09] German subsidiary expanded cloud telemetry by 38%. Cross-border trigger dispatched to London VP of IT for UK rollout.',
    activeStatus: 'Autonomous Opportunity Trigger'
  }
];

export default function AiGlobalScalingPage() {
  const [selectedSwarm, setSelectedSwarm] = useState<AgentSwarm>(AGENT_SWARMS[0]);

  useEffect(() => {
    document.title = 'AI For Global Scaling: Deploy Autonomous AI Agents That Operate Across Borders | ProfitMachines';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans pt-16 lg:pt-[72px]">
      {/* ── SECTION 1: HERO SECTION (Agent Deployment Map Layout, Industry Violet/Ambient Grid) ── */}
      <section className="relative pt-20 pb-16 sm:pt-28 sm:pb-24 overflow-hidden border-b border-slate-200 bg-white">
        {/* Ambient Grid & Glow */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div
            className="absolute inset-0 opacity-[0.35]"
            style={{
              backgroundImage: 'linear-gradient(to right, #e2e8f0 1px, transparent 1px), linear-gradient(to bottom, #e2e8f0 1px, transparent 1px)',
              backgroundSize: '4rem 4rem'
            }}
          />
          <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-violet-500/10 rounded-full blur-[140px] pointer-events-none" />
          <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[140px] pointer-events-none" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-50 border border-violet-200 text-violet-700 text-xs font-bold tracking-wide uppercase shadow-xs mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-violet-600"></span>
              </span>
              <span className="font-mono text-violet-600 font-extrabold">PILLAR 05 OF 06 · KEY DIFFERENTIATOR</span>
              <span className="text-slate-300 font-normal">//</span>
              <span>AUTONOMOUS AGENT SWARMS</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.08] mb-6 font-heading">
              AI For Global Scaling:{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 via-indigo-600 to-blue-600">
                Deploy Autonomous AI Agents That Operate Across Borders
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg lg:text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto mb-10">
              Four AI capabilities that deploy multi-language SDR agents, market intelligence agents, regulatory intelligence agents, and autonomous expansion workflows — scaling global operations without proportional headcount increases.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
              <a
                href="#intake"
                className="inline-flex items-center justify-center bg-slate-900 hover:bg-violet-600 text-white font-bold px-7 py-4 rounded-xl shadow-lg shadow-slate-900/10 text-sm transition-all hover:-translate-y-0.5 group font-mono uppercase tracking-wider gap-2 cursor-pointer"
              >
                <span>Deploy Global AI Agents</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <Link
                to="/global-acceleration"
                className="inline-flex items-center justify-center border border-slate-200 bg-white hover:bg-slate-50 text-slate-800 font-bold px-6 py-4 rounded-xl text-sm shadow-xs transition-all font-mono uppercase tracking-wider gap-2"
              >
                <span>Explore Other Pillars</span>
                <ChevronRight className="w-4 h-4 text-violet-600" />
              </Link>
            </div>

            {/* Telemetry Bar */}
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs font-mono text-slate-600">
              <span className="inline-flex items-center gap-1.5 text-violet-600 font-bold">
                <Bot className="w-4 h-4 text-violet-600" />
                ACTIVE AGENT SWARMS:
              </span>
              <span>15+ Languages Covered</span>
              <span className="text-slate-300">·</span>
              <span className="text-emerald-600 font-semibold">24/7 Follow-the-Sun Execution</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 2: EXECUTIVE SUMMARY PANEL ── */}
      <section className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-12 rounded-3xl bg-white border border-slate-200 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-violet-500/5 rounded-full blur-3xl pointer-events-none" />
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-50 border border-violet-200 text-violet-700 text-xs font-mono font-bold uppercase mb-4">
                Executive Summary
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-4">
                AI Scales What Humans Can&apos;t
              </h2>
              <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal mb-6">
                Scaling international outbound through localized human SDR hiring is inherently linear, expensive, and bottlenecked by language and timezone friction. Autonomous AI agent swarms deliver instant 24/7 multi-language outreach, continuous competitor monitoring, and real-time account expansion triggers at 1/10th the headcount cost.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-slate-100 text-sm">
                <div>
                  <div className="font-mono text-xs text-slate-400 uppercase">Execution Model</div>
                  <div className="font-bold text-slate-900 mt-0.5">Autonomous Swarm Fleets</div>
                </div>
                <div>
                  <div className="font-mono text-xs text-slate-400 uppercase">Language Dialects</div>
                  <div className="font-bold text-violet-600 mt-0.5">15+ Native Vernaculars</div>
                </div>
                <div>
                  <div className="font-mono text-xs text-slate-400 uppercase">Cost Efficiency</div>
                  <div className="font-bold text-emerald-600 mt-0.5">90% Headcount Savings</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 3: THE 4 AI CAPABILITIES (OPTIMIZED EXECUTIVE FORMAT) ── */}
      <section className="py-20 sm:py-28 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4 font-heading">
              Four Autonomous AI Capabilities
            </h2>
            <p className="text-base sm:text-lg text-slate-600">
              Transform slow, localized human hiring into instantly deployable autonomous agent fleets operating across every timezone.
            </p>
          </div>

          <div className="space-y-12">
            {/* CAPABILITY 1: Multi-Language AI SDRs */}
            <div className="p-8 sm:p-10 rounded-3xl border border-slate-200 bg-white hover:border-violet-400 hover:shadow-xl transition-all">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-6">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-violet-50 text-violet-700 text-xs font-mono font-bold uppercase mb-3">
                    Capability 01 · 24/7 Outbound Fleets
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                    Multi-Language AI SDRs
                  </h3>
                </div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-violet-50 border border-violet-200 text-violet-700 font-mono text-sm font-bold">
                  <Bot className="w-4 h-4 text-violet-600" />
                  <span>15+ Languages · 1/10th the Cost</span>
                </div>
              </div>

              {/* Executive Summary Card */}
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 mb-6 text-sm text-slate-700 leading-relaxed">
                <span className="font-bold text-slate-900 block mb-1 font-mono text-xs uppercase tracking-wider text-violet-700">Strategic Overview</span>
                Deploys autonomous, native-fluent AI SDR agents that prospect, qualify, and book enterprise meetings in 15+ native languages across 20+ timezones. Executes follow-the-sun prospecting 24/7 in native business hours without the overhead of localized SDR hiring.
              </div>

              {/* Benchmark & ROI Snapshot Panel */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs">
                  <div className="text-[11px] font-mono text-slate-400 uppercase font-semibold mb-1">Benchmark Contrast</div>
                  <div className="text-xs text-slate-600 leading-snug">
                    <strong className="text-slate-900 block font-semibold mb-1">Hiring Velocity:</strong>
                    Deploys native outbound swarms in 3 weeks vs. 12+ months of localized headcount recruitment.
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-violet-50/60 border border-violet-200/80">
                  <div className="text-[11px] font-mono text-violet-700 uppercase font-semibold mb-1">ROI Snapshot</div>
                  <div className="text-lg font-black text-violet-900 font-mono">1/10th Cost Basis</div>
                  <div className="text-xs text-violet-700 mt-0.5">24/7 follow-the-sun meeting coverage</div>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 shadow-xs">
                  <div className="text-[11px] font-mono text-slate-400 uppercase font-semibold mb-1">Case-Study Snippet</div>
                  <div className="text-xs text-slate-700 leading-snug">
                    <strong className="text-slate-900 block font-semibold">Enterprise Cloud Platform:</strong>
                    Deployed multi-language AI SDRs covering DACH, Japan, and France; booked 210 qualified meetings in 60 days at 90% lower CAC.
                  </div>
                </div>
              </div>

              {/* Real Buyer Quote */}
              <div className="p-5 rounded-2xl bg-slate-50 border-l-4 border-violet-600 text-slate-700 italic text-sm">
                &ldquo;The AI SDR agents covered 8 languages and 5 timezones in 3 weeks, booking meetings in local business hours while our domestic team was asleep.&rdquo;
                <span className="block mt-1 font-mono text-xs text-slate-500 font-normal not-italic">
                  — VP Global Inbound & Outbound, Enterprise Cloud Platform
                </span>
              </div>
            </div>

            {/* CAPABILITY 2: Market Intelligence Agents */}
            <div className="p-8 sm:p-10 rounded-3xl border border-slate-200 bg-white hover:border-violet-400 hover:shadow-xl transition-all">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-6">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-indigo-50 text-indigo-700 text-xs font-mono font-bold uppercase mb-3">
                    Capability 02 · Real-Time Signals
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                    Market Intelligence Agents
                  </h3>
                </div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-indigo-50 border border-indigo-200 text-indigo-700 font-mono text-sm font-bold">
                  <Eye className="w-4 h-4 text-indigo-600" />
                  <span>&lt;7 Days Competitor Detection</span>
                </div>
              </div>

              {/* Executive Summary Card */}
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 mb-6 text-sm text-slate-700 leading-relaxed">
                <span className="font-bold text-slate-900 block mb-1 font-mono text-xs uppercase tracking-wider text-indigo-700">Strategic Overview</span>
                Autonomous web and regulatory sensor swarms continuously monitor competitive pricing shifts, executive hiring trends, and regional enterprise demand surges across 40+ countries. Delivers actionable early warnings in under 7 days.
              </div>

              {/* Benchmark & ROI Snapshot Panel */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs">
                  <div className="text-[11px] font-mono text-slate-400 uppercase font-semibold mb-1">Benchmark Contrast</div>
                  <div className="text-xs text-slate-600 leading-snug">
                    <strong className="text-slate-900 block font-semibold mb-1">Signal Velocity:</strong>
                    Detects rival territory moves in under a week rather than discovering them months later via lost deals.
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-indigo-50/60 border border-indigo-200/80">
                  <div className="text-[11px] font-mono text-indigo-700 uppercase font-semibold mb-1">ROI Snapshot</div>
                  <div className="text-lg font-black text-indigo-900 font-mono">&lt;7 Days Detection</div>
                  <div className="text-xs text-indigo-700 mt-0.5">Real-time alerts to regional deal desks</div>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 shadow-xs">
                  <div className="text-[11px] font-mono text-slate-400 uppercase font-semibold mb-1">Case-Study Snippet</div>
                  <div className="text-xs text-slate-700 leading-snug">
                    <strong className="text-slate-900 block font-semibold">B2B Telemetry Scaleup:</strong>
                    Detected an incumbent pricing shift in Tokyo within 4 days, enabling leadership to deploy counter-discounting and save $1.8M in pipeline.
                  </div>
                </div>
              </div>

              {/* Real Buyer Quote */}
              <div className="p-5 rounded-2xl bg-slate-50 border-l-4 border-indigo-600 text-slate-700 italic text-sm">
                &ldquo;Market intelligence agents caught an incumbent&apos;s quiet product launch in Japan months before our domestic team would have noticed, preserving our pipeline.&rdquo;
                <span className="block mt-1 font-mono text-xs text-slate-500 font-normal not-italic">
                  — Chief Product & Strategy Officer, B2B Telemetry Scaleup
                </span>
              </div>
            </div>

            {/* CAPABILITY 3: Regulatory Intelligence Agents */}
            <div className="p-8 sm:p-10 rounded-3xl border border-slate-200 bg-white hover:border-violet-400 hover:shadow-xl transition-all">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-6">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-50 text-emerald-700 text-xs font-mono font-bold uppercase mb-3">
                    Capability 03 · Autonomous Sentinel
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                    Regulatory Intelligence Agents
                  </h3>
                </div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-700 font-mono text-sm font-bold">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>90+ Days Advance Notice</span>
                </div>
              </div>

              {/* Executive Summary Card */}
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 mb-6 text-sm text-slate-700 leading-relaxed">
                <span className="font-bold text-slate-900 block mb-1 font-mono text-xs uppercase tracking-wider text-emerald-700">Strategic Overview</span>
                Automated sentinels parse statutory gazettes, regulatory filings, and court rulings across 20+ global jurisdictions. Surfaces upcoming cross-border compliance updates 90+ days in advance, providing automated contract template remediation before statutory deadlines.
              </div>

              {/* Benchmark & ROI Snapshot Panel */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs">
                  <div className="text-[11px] font-mono text-slate-400 uppercase font-semibold mb-1">Benchmark Contrast</div>
                  <div className="text-xs text-slate-600 leading-snug">
                    <strong className="text-slate-900 block font-semibold mb-1">Lead Time:</strong>
                    Replaces emergency compliance firefighting with a proactive 90-day lead time on all legal updates.
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-emerald-50/60 border border-emerald-200/80">
                  <div className="text-[11px] font-mono text-emerald-700 uppercase font-semibold mb-1">ROI Snapshot</div>
                  <div className="text-lg font-black text-emerald-900 font-mono">90+ Days Advance</div>
                  <div className="text-xs text-emerald-700 mt-0.5">Automated contract template adjustments</div>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 shadow-xs">
                  <div className="text-[11px] font-mono text-slate-400 uppercase font-semibold mb-1">Case-Study Snippet</div>
                  <div className="text-xs text-slate-700 leading-snug">
                    <strong className="text-slate-900 block font-semibold">Multinational FinTech:</strong>
                    Automated sentinels alerted leadership to updated Brazilian data localization rules 4 months ahead, allowing engineering to adapt with zero downtime.
                  </div>
                </div>
              </div>

              {/* Real Buyer Quote */}
              <div className="p-5 rounded-2xl bg-slate-50 border-l-4 border-emerald-600 text-slate-700 italic text-sm">
                &ldquo;Advance regulatory alerts gave our engineering team a 90-day lead time to adapt our infrastructure, preventing compliance halts in South America.&rdquo;
                <span className="block mt-1 font-mono text-xs text-slate-500 font-normal not-italic">
                  — VP Legal Operations, Multinational FinTech
                </span>
              </div>
            </div>

            {/* CAPABILITY 4: Autonomous Expansion Workflows */}
            <div className="p-8 sm:p-10 rounded-3xl border border-slate-200 bg-white hover:border-violet-400 hover:shadow-xl transition-all">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-6">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 text-blue-700 text-xs font-mono font-bold uppercase mb-3">
                    Capability 04 · NRR Automated Triggers
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                    Autonomous Expansion Workflows
                  </h3>
                </div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-50 border border-blue-200 text-blue-700 font-mono text-sm font-bold">
                  <TrendingUp className="w-4 h-4 text-blue-600" />
                  <span>25-40% Expansion Revenue Lift</span>
                </div>
              </div>

              {/* Executive Summary Card */}
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 mb-6 text-sm text-slate-700 leading-relaxed">
                <span className="font-bold text-slate-900 block mb-1 font-mono text-xs uppercase tracking-wider text-blue-700">Strategic Overview</span>
                Continuously analyzes enterprise product utilization, corporate entity hierarchies, and executive movements across global accounts. Automatically triggers tailored cross-border upsell workflows to expand initial domestic wins into global subsidiaries.
              </div>

              {/* Benchmark & ROI Snapshot Panel */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs">
                  <div className="text-[11px] font-mono text-slate-400 uppercase font-semibold mb-1">Benchmark Contrast</div>
                  <div className="text-xs text-slate-600 leading-snug">
                    <strong className="text-slate-900 block font-semibold mb-1">Automated Expansion:</strong>
                    Prevents leaving subsidiary revenue on the table by mapping multi-national corporate entity trees.
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-blue-50/60 border border-blue-200/80">
                  <div className="text-[11px] font-mono text-blue-700 uppercase font-semibold mb-1">ROI Snapshot</div>
                  <div className="text-lg font-black text-blue-900 font-mono">+32% Cross-Border NRR</div>
                  <div className="text-xs text-blue-700 mt-0.5">Automated executive introduction triggers</div>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 shadow-xs">
                  <div className="text-[11px] font-mono text-slate-400 uppercase font-semibold mb-1">Case-Study Snippet</div>
                  <div className="text-xs text-slate-700 leading-snug">
                    <strong className="text-slate-900 block font-semibold">Workflow Engine:</strong>
                    Detected a 38% software surge in a German division of a Fortune 500 client, triggering an automated London intro that closed a $2.6M global agreement.
                  </div>
                </div>
              </div>

              {/* Real Buyer Quote */}
              <div className="p-5 rounded-2xl bg-slate-50 border-l-4 border-blue-600 text-slate-700 italic text-sm">
                &ldquo;Autonomous expansion workflows alerted us to cross-border usage surges we never would have seen manually, unlocking millions in subsidiary revenue.&rdquo;
                <span className="block mt-1 font-mono text-xs text-slate-500 font-normal not-italic">
                  — Chief Customer Officer, Enterprise Workflow Engine
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 4: VISUAL INTERACTION: AGENT DEPLOYMENT MAP ── */}
      <section className="py-20 sm:py-28 bg-slate-950 text-white border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/30 text-violet-400 text-xs font-mono font-bold uppercase mb-3">
              <Terminal className="w-3.5 h-3.5" />
              Autonomous Agent Telemetry Console
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Live Cross-Border Agent Swarm Deployment
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl">
              Inspect active autonomous agent swarms executing multi-language SDR outreach, regulatory monitoring, and enterprise expansion triggers across global timezones.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Swarm Selector List */}
            <div className="lg:col-span-5 space-y-3">
              {AGENT_SWARMS.map((swarm) => {
                const isSelected = selectedSwarm.id === swarm.id;
                return (
                  <div
                    key={swarm.id}
                    onClick={() => setSelectedSwarm(swarm)}
                    className={`p-5 rounded-2xl cursor-pointer transition-all border ${
                      isSelected
                        ? 'bg-slate-900 border-violet-500 shadow-xl shadow-violet-500/10'
                        : 'bg-slate-900/50 border-slate-800 hover:border-slate-700 hover:bg-slate-900/80'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[11px] font-mono uppercase px-2 py-0.5 rounded bg-violet-500/20 text-violet-400 font-bold">
                        {swarm.activeStatus}
                      </span>
                      <span className="text-xs font-mono text-emerald-400 font-bold">{swarm.velocityMetric}</span>
                    </div>
                    <h4 className="font-bold text-white text-base mb-1">{swarm.name}</h4>
                    <p className="text-xs text-slate-400 font-sans line-clamp-1">{swarm.activeDeployments}</p>
                  </div>
                );
              })}
            </div>

            {/* Agent Live Terminal Dossier */}
            <div className="lg:col-span-7 bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-80 h-80 bg-violet-600/10 rounded-full blur-[100px] pointer-events-none" />

              <div className="flex items-center justify-between border-b border-slate-800 pb-5 mb-6">
                <div>
                  <div className="text-xs font-mono text-violet-400 uppercase tracking-wider mb-1">
                    Swarm Architecture Dossier
                  </div>
                  <h3 className="text-2xl font-black text-white">{selectedSwarm.name}</h3>
                </div>
                <div className="text-right">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 text-xs font-mono font-bold">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                    LIVE TELEMETRY
                  </div>
                </div>
              </div>

              {/* Core Mission */}
              <div className="mb-6">
                <div className="text-xs font-mono text-slate-400 uppercase mb-2">Autonomous Mission Scope</div>
                <p className="text-sm text-slate-200 leading-relaxed font-sans">{selectedSwarm.primaryMission}</p>
              </div>

              {/* Languages / Dialects Covered */}
              <div className="mb-6">
                <div className="text-xs font-mono text-slate-400 uppercase mb-2">Native Language Dialects Active</div>
                <div className="flex flex-wrap gap-2">
                  {selectedSwarm.languages.map((lang, idx) => (
                    <span key={idx} className="px-3 py-1 rounded-lg bg-slate-950 border border-slate-800 text-xs font-mono text-violet-300">
                      {lang}
                    </span>
                  ))}
                </div>
              </div>

              {/* Real-Time Terminal Feed */}
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 font-mono text-xs mb-4">
                <div className="flex items-center justify-between text-slate-500 pb-2 mb-2 border-b border-slate-900 text-[11px]">
                  <span>TERMINAL STREAM // NODE-EXECUTOR</span>
                  <span className="text-emerald-400">ENCRYPTED</span>
                </div>
                <p className="text-emerald-400 leading-relaxed">{selectedSwarm.sampleTerminalLog}</p>
              </div>

              {/* Coverage Telemetry */}
              <div className="flex items-center justify-between text-xs font-mono text-slate-400 pt-2 border-t border-slate-800/80">
                <span>Coverage: {selectedSwarm.activeDeployments}</span>
                <span className="text-violet-400 font-bold">{selectedSwarm.velocityMetric}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 5: VERIFIED OUTCOMES GRID ── */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4 font-heading">
              Empirical AI Scaling Outcomes
            </h2>
            <p className="text-base sm:text-lg text-slate-600">
              Verified metric impacts achieved through autonomous cross-border agent deployment.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 text-center">
              <div className="text-4xl sm:text-5xl font-black text-slate-900 font-mono tracking-tight mb-2">
                15+
              </div>
              <div className="h-1 w-12 bg-violet-600 mx-auto mb-4 rounded-full" />
              <p className="text-sm font-semibold text-slate-800 mb-1">Languages Covered</p>
              <p className="text-xs text-slate-600">Native dialects covered 24/7 across every timezone with follow-the-sun execution.</p>
            </div>

            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 text-center">
              <div className="text-4xl sm:text-5xl font-black text-slate-900 font-mono tracking-tight mb-2">
                1/10th
              </div>
              <div className="h-1 w-12 bg-indigo-600 mx-auto mb-4 rounded-full" />
              <p className="text-sm font-semibold text-slate-800 mb-1">Cost vs. Human SDRs</p>
              <p className="text-xs text-slate-600">Compared to hiring, onboarding, and managing proportional localized SDR fleets.</p>
            </div>

            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 text-center">
              <div className="text-4xl sm:text-5xl font-black text-slate-900 font-mono tracking-tight mb-2">
                &lt;7 Days
              </div>
              <div className="h-1 w-12 bg-blue-600 mx-auto mb-4 rounded-full" />
              <p className="text-sm font-semibold text-slate-800 mb-1">Rival Move Detection</p>
              <p className="text-xs text-slate-600">Autonomous detection window for competitor launches, price shifts, and territory changes.</p>
            </div>

            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 text-center">
              <div className="text-4xl sm:text-5xl font-black text-slate-900 font-mono tracking-tight mb-2">
                90+ Days
              </div>
              <div className="h-1 w-12 bg-emerald-600 mx-auto mb-4 rounded-full" />
              <p className="text-sm font-semibold text-slate-800 mb-1">Regulatory Early Warning</p>
              <p className="text-xs text-slate-600">Advance warning of jurisdictional data sovereignty changes with automated remediation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 6: RELATED CAPABILITIES (CROSS-LINKS) ── */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-3">
              AI Agents Execute Globally
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Explore how autonomous agent swarms feed data to executive offices and operationalize other pillars.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link
              to="/global-acceleration/market-intelligence"
              className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-blue-500 hover:shadow-lg transition-all group block"
            >
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                <Globe className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-lg mb-2 group-hover:text-blue-600 transition-colors flex items-center justify-between">
                <span>Market Intelligence</span>
                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 group-hover:text-blue-600 transition-all" />
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Autonomous market sentinel agents continuously feed live opportunity and competitive data back into market sizing models.
              </p>
            </Link>

            <Link
              to="/global-acceleration/global-revops"
              className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-sky-500 hover:shadow-lg transition-all group block"
            >
              <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-lg mb-2 group-hover:text-sky-600 transition-colors flex items-center justify-between">
                <span>Global Revenue Operations</span>
                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 group-hover:text-sky-600 transition-all" />
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Connects autonomous SDR pipelines directly into CRM and attribution engines to automate meeting routing and follow-ups.
              </p>
            </Link>

            <Link
              to="/global-acceleration/expansion-office"
              className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-purple-500 hover:shadow-lg transition-all group block"
            >
              <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                <Building2 className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-lg mb-2 group-hover:text-purple-600 transition-colors flex items-center justify-between">
                <span>Executive Expansion Office</span>
                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 group-hover:text-purple-600 transition-all" />
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Feeds autonomous telemetry straight into boardroom scorecards, giving the C-suite real-time predictive visibility.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* ── SECTION 7: FINAL CTA + INTAKE FORM ── */}
      <section id="intake" className="py-20 sm:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-50 border border-violet-200 text-violet-700 text-xs font-mono font-bold uppercase mb-4">
              CONFIDENTIAL INTAKE
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4 font-heading">
              Ready to Deploy Autonomous Global AI Agents?
            </h2>
            <p className="text-slate-600 text-base max-w-xl mx-auto">
              Request a confidential Global AI Scaling Diagnostic. Receive an agent swarm architecture and multi-language deployment roadmap within 24 business hours.
            </p>
          </div>

          <div className="p-8 sm:p-12 rounded-3xl bg-white border border-slate-200 shadow-xl">
            <GlobalExpansionIntakeForm
              pageContext="AI For Global Scaling"
              defaultChallenge="Scaling multi-language prospecting across 24/7 timezones"
              buttonText="Deploy Global AI Agents"
            />
          </div>

          {/* Trust Badges */}
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
