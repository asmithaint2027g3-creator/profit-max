import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Layers, ArrowRight, ChevronRight, Activity, ShieldCheck,
  TrendingUp, BarChart3, Cpu, Globe, CheckCircle2,
  AlertCircle, Users, Bot, Sparkles, Building2, HelpCircle,
  MapPin, Zap, ArrowUpRight, DollarSign, Compass, Network,
  LayoutDashboard, Server, Shield, RefreshCw, Sliders
} from 'lucide-react';
import { GlobalExpansionIntakeForm } from '../../components/forms/GlobalExpansionIntakeForm';

interface RegionTelemetry {
  id: string;
  name: string;
  code: string;
  complianceRate: string;
  attributionAccuracy: string;
  crossBorderRev: string;
  duplicationReduction: string;
  techStackStatus: string;
  liveStatus: 'Optimal' | 'Audited' | 'Active Guardrails';
}

const REGION_DATA: RegionTelemetry[] = [
  {
    id: 'emea',
    name: 'EMEA & DACH Operations',
    code: 'REGION-01-EMEA',
    complianceRate: '100% Proactive (GDPR / BaFin)',
    attributionAccuracy: '98.4%',
    crossBorderRev: '+44% YoY',
    duplicationReduction: '52% Consolidate',
    techStackStatus: 'Unified Salesforce + Localized Billing (EUR/GBP/CHF)',
    liveStatus: 'Optimal'
  },
  {
    id: 'apac',
    name: 'Asia-Pacific & Japan Operations',
    code: 'REGION-02-APAC',
    complianceRate: '100% Proactive (APPI / PDPA)',
    attributionAccuracy: '96.2%',
    crossBorderRev: '+38% YoY',
    duplicationReduction: '48% Consolidate',
    techStackStatus: 'Federated Hub (Tokyo / Singapore / Sydney)',
    liveStatus: 'Optimal'
  },
  {
    id: 'americas',
    name: 'North America & Latin America',
    code: 'REGION-03-AMER',
    complianceRate: '100% Proactive (LGPD / US CCPA)',
    attributionAccuracy: '97.9%',
    crossBorderRev: '+41% YoY',
    duplicationReduction: '58% Consolidate',
    techStackStatus: 'Multi-Entity ERP + Currency Hedged Ledger',
    liveStatus: 'Active Guardrails'
  },
  {
    id: 'gcc',
    name: 'Middle East & GCC Operations',
    code: 'REGION-04-GCC',
    complianceRate: '100% Proactive (Sovereign Cloud)',
    attributionAccuracy: '95.8%',
    crossBorderRev: '+35% YoY',
    duplicationReduction: '45% Consolidate',
    techStackStatus: 'Enterprise Free Zone Gateway + USD/AED Direct',
    liveStatus: 'Optimal'
  }
];

export default function GlobalRevOpsPage() {
  const [selectedRegion, setSelectedRegion] = useState<RegionTelemetry>(REGION_DATA[0]);

  useEffect(() => {
    document.title = 'Global Revenue Operations: Orchestrate Revenue Operations Across Borders | ProfitMachines';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans pt-16 lg:pt-[72px]">
      {/* ── SECTION 1: HERO SECTION (Operations Dashboard Layout, Industry Sky/Ambient Grid) ── */}
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
          <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-sky-500/10 rounded-full blur-[140px] pointer-events-none" />
          <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[140px] pointer-events-none" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-200 text-sky-700 text-xs font-bold tracking-wide uppercase shadow-xs mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-600"></span>
              </span>
              <span className="font-mono text-sky-600 font-extrabold">PILLAR 04 OF 06</span>
              <span className="text-slate-300 font-normal">//</span>
              <span>CROSS-BORDER REVENUE OPERATIONS</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.08] mb-6 font-heading">
              Global Revenue Operations:{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-600">
                Orchestrate Revenue Operations Across Borders
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg lg:text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto mb-10">
              Four operational capabilities that manage compliance across jurisdictions, align global sales teams, attribute revenue by region, and orchestrate multi-region operations — turning global complexity into operational excellence.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
              <a
                href="#intake"
                className="inline-flex items-center justify-center bg-slate-900 hover:bg-sky-600 text-white font-bold px-7 py-4 rounded-xl shadow-lg shadow-slate-900/10 text-sm transition-all hover:-translate-y-0.5 group font-mono uppercase tracking-wider gap-2 cursor-pointer"
              >
                <span>Orchestrate Your Global Operations</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <Link
                to="/global-acceleration"
                className="inline-flex items-center justify-center border border-slate-200 bg-white hover:bg-slate-50 text-slate-800 font-bold px-6 py-4 rounded-xl text-sm shadow-xs transition-all font-mono uppercase tracking-wider gap-2"
              >
                <span>Explore Other Pillars</span>
                <ChevronRight className="w-4 h-4 text-sky-600" />
              </Link>
            </div>

            {/* Telemetry Bar */}
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs font-mono text-slate-600">
              <span className="inline-flex items-center gap-1.5 text-sky-600 font-bold">
                <LayoutDashboard className="w-4 h-4 text-sky-600" />
                MULTI-REGION SYNCHRONIZATION:
              </span>
              <span>4 Operating Theatres Linked</span>
              <span className="text-slate-300">·</span>
              <span className="text-emerald-600 font-semibold">40-60% Duplication Reduction</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 2: THE PRINCIPLE ── */}
      <section className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-12 rounded-3xl bg-white border border-slate-200 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-sky-500/5 rounded-full blur-3xl pointer-events-none" />
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-200 text-sky-700 text-xs font-mono font-bold uppercase mb-4">
                Core Strategic Thesis
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-4">
                Operations Scale What Strategy Designs
              </h2>
              <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
                Most enterprises operate each international region as a separate P&L with independent operations. They can&apos;t coordinate across regions or leverage global scale. But separate regional operations create duplication, inconsistency, and missed synergies. Without multi-region orchestration, you can&apos;t leverage global scale, share resources, or coordinate strategic initiatives. Your global operation becomes inefficient — duplicating resources across regions, missing synergies that could accelerate growth, and operating as fragmented fiefdoms instead of a unified system. Global revenue operations replaces regional silos with unified orchestration — managing compliance across jurisdictions, aligning global sales teams, attributing revenue by region, and orchestrating multi-region operations. The result: global complexity becomes operational excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 3: THE 4 OPERATIONAL CAPABILITIES (NARRATIVE FLOW) ── */}
      <section className="py-20 sm:py-28 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4 font-heading">
              Four Operational Scalability Capabilities
            </h2>
            <p className="text-base sm:text-lg text-slate-600">
              Eliminate operational fragmentation and replace disparate regional tech stacks with unified cross-border orchestration.
            </p>
          </div>

          <div className="space-y-12">
            {/* CAPABILITY 1: Compliance Management */}
            <div className="p-8 sm:p-10 rounded-3xl border border-slate-200 bg-white hover:border-sky-400 hover:shadow-xl transition-all">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-8">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-sky-50 text-sky-700 text-xs font-mono font-bold uppercase mb-3">
                    Capability 01 · Proactive Governance
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                    Compliance Management
                  </h3>
                </div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-sky-50 border border-sky-200 text-sky-700 font-mono text-sm font-bold">
                  <ShieldCheck className="w-4 h-4 text-sky-600" />
                  <span>100% Proactive Compliance · 0 Crises</span>
                </div>
              </div>

              {/* Narrative Breakdown */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-slate-600 mb-6">
                <div className="space-y-3">
                  <p>
                    <strong className="text-slate-900 font-semibold block text-xs font-mono uppercase tracking-wider text-slate-400">The Situation</strong>
                    Companies manage compliance reactively — responding to regulatory notices, fines, or audit requests. They do not have proactive compliance frameworks established across regional markets.
                  </p>
                  <p>
                    <strong className="text-slate-900 font-semibold block text-xs font-mono uppercase tracking-wider text-slate-400">The Hidden Problem</strong>
                    Every market has unique compliance requirements — data residency, industry regulations, tax structures, employment laws. Without proactive compliance management, you face reactive crises that strand contracts, impose fines, or force market exits.
                  </p>
                </div>
                <div className="space-y-3">
                  <p>
                    <strong className="text-slate-900 font-semibold block text-xs font-mono uppercase tracking-wider text-slate-400">The Implication & Trigger</strong>
                    You face compliance crises that erase margins, damage enterprise reputation, or force market exits. You spend vastly more on reactive firefighting than proactive frameworks cost. The critical trigger is when a regulator issues a compliance notice in a priority market.
                  </p>
                  <p>
                    <strong className="text-slate-900 font-semibold block text-xs font-mono uppercase tracking-wider text-sky-600">The Resolution</strong>
                    We build proactive compliance frameworks for every market. We deploy regulatory intelligence agents that monitor legal changes in real time. We structure technical data pipelines and contracts to meet local requirements proactively.
                  </p>
                </div>
              </div>

              {/* Real Buyer Quote */}
              <div className="p-5 rounded-2xl bg-slate-50 border-l-4 border-sky-600 text-slate-700 italic text-sm">
                &ldquo;We received a GDPR compliance notice 18 months after entering the EU — we didn&apos;t realize our data architecture didn&apos;t meet residency requirements until the regulator told us.&rdquo;
                <span className="block mt-1 font-mono text-xs text-slate-500 font-normal not-italic">
                  — Chief Information Security Officer, Cloud Software Platform
                </span>
              </div>
            </div>

            {/* CAPABILITY 2: Global Sales Alignment */}
            <div className="p-8 sm:p-10 rounded-3xl border border-slate-200 bg-white hover:border-sky-400 hover:shadow-xl transition-all">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-8">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 text-blue-700 text-xs font-mono font-bold uppercase mb-3">
                    Capability 02 · Multinational Coordination
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                    Global Sales Alignment
                  </h3>
                </div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-50 border border-blue-200 text-blue-700 font-mono text-sm font-bold">
                  <Users className="w-4 h-4 text-blue-600" />
                  <span>30-50% Lift in Cross-Border Account Revenue</span>
                </div>
              </div>

              {/* Narrative Breakdown */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-slate-600 mb-6">
                <div className="space-y-3">
                  <p>
                    <strong className="text-slate-900 font-semibold block text-xs font-mono uppercase tracking-wider text-slate-400">The Situation</strong>
                    Companies launch international sales teams that operate independently. Each region creates its own processes, metrics, sales methodologies, and territory priorities.
                  </p>
                  <p>
                    <strong className="text-slate-900 font-semibold block text-xs font-mono uppercase tracking-wider text-slate-400">The Hidden Problem</strong>
                    Independent regional teams create inconsistency, operational duplication, and missed enterprise opportunities. Without global alignment, you cannot leverage cross-border account relationships, share best practices, or coordinate strategic global deals.
                  </p>
                </div>
                <div className="space-y-3">
                  <p>
                    <strong className="text-slate-900 font-semibold block text-xs font-mono uppercase tracking-wider text-slate-400">The Implication & Trigger</strong>
                    Global operation fragments. You duplicate sales enablement across regions and miss multinational expansions. The trigger hits when you realize a Fortune 500 account has separate discussions with 5 regional teams with zero coordinated global strategy.
                  </p>
                  <p>
                    <strong className="text-slate-900 font-semibold block text-xs font-mono uppercase tracking-wider text-blue-600">The Resolution</strong>
                    We design global sales alignment frameworks — unified processes, shared KPIs, cross-border account governance, and deal desk collaboration. We deploy AI agents that coordinate global account relationships and surface multi-subsidiary opportunities.
                  </p>
                </div>
              </div>

              {/* Real Buyer Quote */}
              <div className="p-5 rounded-2xl bg-slate-50 border-l-4 border-blue-600 text-slate-700 italic text-sm">
                &ldquo;We had a Fortune 500 account with relationships in 8 countries but no global account plan — each region was working independently, and we were losing deals to competitors with coordinated global strategies.&rdquo;
                <span className="block mt-1 font-mono text-xs text-slate-500 font-normal not-italic">
                  — SVP Strategic Accounts, Enterprise ERP Vendor
                </span>
              </div>
            </div>

            {/* CAPABILITY 3: Revenue Attribution */}
            <div className="p-8 sm:p-10 rounded-3xl border border-slate-200 bg-white hover:border-sky-400 hover:shadow-xl transition-all">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-8">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-indigo-50 text-indigo-700 text-xs font-mono font-bold uppercase mb-3">
                    Capability 03 · Mathematical Transparency
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                    Revenue Attribution
                  </h3>
                </div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-indigo-50 border border-indigo-200 text-indigo-700 font-mono text-sm font-bold">
                  <TrendingUp className="w-4 h-4 text-indigo-600" />
                  <span>95%+ Attribution Accuracy Across Regions</span>
                </div>
              </div>

              {/* Narrative Breakdown */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-slate-600 mb-6">
                <div className="space-y-3">
                  <p>
                    <strong className="text-slate-900 font-semibold block text-xs font-mono uppercase tracking-wider text-slate-400">The Situation</strong>
                    Companies track global revenue totals but cannot attribute revenue by region, partner, or go-to-market motion. They do not know which markets, partners, or motions produce the best net returns.
                  </p>
                  <p>
                    <strong className="text-slate-900 font-semibold block text-xs font-mono uppercase tracking-wider text-slate-400">The Hidden Problem</strong>
                    Without attribution, you cannot optimize resource allocation. You invest equally in low-yield and high-yield markets. You cannot identify which partners actually drive revenue or scale what works.
                  </p>
                </div>
                <div className="space-y-3">
                  <p>
                    <strong className="text-slate-900 font-semibold block text-xs font-mono uppercase tracking-wider text-slate-400">The Implication & Trigger</strong>
                    Capital is misallocated into low-yield markets while high-margin regions starve for investment. The trigger occurs when the board asks which international market produces the best ROI — and you cannot give a defensible answer.
                  </p>
                  <p>
                    <strong className="text-slate-900 font-semibold block text-xs font-mono uppercase tracking-wider text-indigo-600">The Resolution</strong>
                    We build revenue attribution frameworks that track revenue by region, partner, motion, and customer segment. We deploy telemetry that identifies high-yield markets and optimizes resource allocation based on measured contribution.
                  </p>
                </div>
              </div>

              {/* Real Buyer Quote */}
              <div className="p-5 rounded-2xl bg-slate-50 border-l-4 border-indigo-600 text-slate-700 italic text-sm">
                &ldquo;We couldn&apos;t tell you which of our 5 international markets produced the best ROI — we had no attribution, so we invested equally in all of them.&rdquo;
                <span className="block mt-1 font-mono text-xs text-slate-500 font-normal not-italic">
                  — Chief Financial Officer, Enterprise B2B SaaS
                </span>
              </div>
            </div>

            {/* CAPABILITY 4: Multi-Region Operations */}
            <div className="p-8 sm:p-10 rounded-3xl border border-slate-200 bg-white hover:border-sky-400 hover:shadow-xl transition-all">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-8">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-purple-50 text-purple-700 text-xs font-mono font-bold uppercase mb-3">
                    Capability 04 · Infrastructure Consolidation
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                    Multi-Region Operations
                  </h3>
                </div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-purple-50 border border-purple-200 text-purple-700 font-mono text-sm font-bold">
                  <Layers className="w-4 h-4 text-purple-600" />
                  <span>40-60% Reduction in Operational Duplication</span>
                </div>
              </div>

              {/* Narrative Breakdown */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-slate-600 mb-6">
                <div className="space-y-3">
                  <p>
                    <strong className="text-slate-900 font-semibold block text-xs font-mono uppercase tracking-wider text-slate-400">The Situation</strong>
                    Companies operate each international region as a separate P&L with independent operations. They cannot coordinate across regions or leverage global scale.
                  </p>
                  <p>
                    <strong className="text-slate-900 font-semibold block text-xs font-mono uppercase tracking-wider text-slate-400">The Hidden Problem</strong>
                    Separate regional operations create duplication, software sprawl, and missed synergies. Without multi-region orchestration, you cannot share resources or coordinate strategic initiatives across timezones.
                  </p>
                </div>
                <div className="space-y-3">
                  <p>
                    <strong className="text-slate-900 font-semibold block text-xs font-mono uppercase tracking-wider text-slate-400">The Implication & Trigger</strong>
                    Operating margins erode from maintaining redundant software licenses, duplicated regional RevOps teams, and uncoordinated GTM motions. The trigger hits when you realize you are paying for 5 separate CRMs, 5 billing engines, and 5 separate ops teams with zero coordination.
                  </p>
                  <p>
                    <strong className="text-slate-900 font-semibold block text-xs font-mono uppercase tracking-wider text-purple-600">The Resolution</strong>
                    We design multi-region operations frameworks that coordinate across timezones, currencies, and cultures. We deploy AI agents that orchestrate global operations, share resources, and unify technology stacks into a synchronized global revenue operating system.
                  </p>
                </div>
              </div>

              {/* Real Buyer Quote */}
              <div className="p-5 rounded-2xl bg-slate-50 border-l-4 border-purple-600 text-slate-700 italic text-sm">
                &ldquo;We were running 5 separate operations with 5 separate tech stacks — we didn&apos;t realize we could consolidate until we mapped the duplication.&rdquo;
                <span className="block mt-1 font-mono text-xs text-slate-500 font-normal not-italic">
                  — VP Global RevOps, Enterprise Cloud Software
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 4: VISUAL INTERACTION: OPERATIONS DASHBOARD INTERFACE ── */}
      <section className="py-20 sm:py-28 bg-slate-950 text-white border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/30 text-sky-400 text-xs font-mono font-bold uppercase mb-3">
              <LayoutDashboard className="w-3.5 h-3.5" />
              Global RevOps Command Cockpit
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Multi-Region Operations & Compliance Dashboard
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl">
              Inspect real-time telemetry across operating theatres, verifying jurisdictional compliance health, revenue attribution accuracy, and tech stack consolidation.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Region Selector List */}
            <div className="lg:col-span-5 space-y-3">
              {REGION_DATA.map((region) => {
                const isSelected = selectedRegion.id === region.id;
                return (
                  <div
                    key={region.id}
                    onClick={() => setSelectedRegion(region)}
                    className={`p-5 rounded-2xl cursor-pointer transition-all border ${
                      isSelected
                        ? 'bg-slate-900 border-sky-500 shadow-xl shadow-sky-500/10'
                        : 'bg-slate-900/50 border-slate-800 hover:border-slate-700 hover:bg-slate-900/80'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-mono text-xs text-slate-400">{region.code}</span>
                      <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-bold">
                        {region.liveStatus}
                      </span>
                    </div>
                    <h4 className="font-bold text-white text-base mb-1">{region.name}</h4>
                    <div className="flex items-center justify-between text-xs text-slate-400 font-mono">
                      <span className="text-sky-400 font-semibold">Attribution: {region.attributionAccuracy}</span>
                      <span>Growth: {region.crossBorderRev}</span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Region Detail Dossier */}
            <div className="lg:col-span-7 bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-80 h-80 bg-sky-600/10 rounded-full blur-[100px] pointer-events-none" />

              <div className="flex items-center justify-between border-b border-slate-800 pb-5 mb-6">
                <div>
                  <div className="text-xs font-mono text-sky-400 uppercase tracking-wider mb-1">
                    {selectedRegion.code} · Live Telemetry
                  </div>
                  <h3 className="text-2xl font-black text-white">{selectedRegion.name}</h3>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-black font-mono text-sky-400">
                    {selectedRegion.attributionAccuracy}
                  </div>
                  <div className="text-[10px] font-mono uppercase text-slate-400">Attribution Match</div>
                </div>
              </div>

              {/* Metric Cards */}
              <div className="grid grid-cols-3 gap-3 mb-6">
                <div className="bg-slate-950 p-4 rounded-xl border border-slate-800/80">
                  <div className="text-[11px] font-mono text-slate-500 uppercase mb-1">Compliance Rate</div>
                  <div className="text-base font-bold font-mono text-emerald-400 truncate">100% Proactive</div>
                </div>
                <div className="bg-slate-950 p-4 rounded-xl border border-slate-800/80">
                  <div className="text-[11px] font-mono text-slate-500 uppercase mb-1">Cross-Border Revenue</div>
                  <div className="text-base font-bold font-mono text-blue-400 truncate">{selectedRegion.crossBorderRev}</div>
                </div>
                <div className="bg-slate-950 p-4 rounded-xl border border-slate-800/80">
                  <div className="text-[11px] font-mono text-slate-500 uppercase mb-1">Duplication Cut</div>
                  <div className="text-base font-bold font-mono text-purple-400 truncate">{selectedRegion.duplicationReduction}</div>
                </div>
              </div>

              {/* Compliance & Stack Status */}
              <div className="space-y-3 mb-4">
                <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800">
                  <div className="text-xs font-mono text-slate-400 uppercase mb-1 flex items-center gap-2">
                    <Shield className="w-4 h-4 text-emerald-400" />
                    Jurisdictional Compliance Architecture
                  </div>
                  <p className="text-sm text-slate-200 font-sans">{selectedRegion.complianceRate}</p>
                </div>

                <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800">
                  <div className="text-xs font-mono text-slate-400 uppercase mb-1 flex items-center gap-2">
                    <Server className="w-4 h-4 text-sky-400" />
                    Consolidated Enterprise Revenue Stack
                  </div>
                  <p className="text-sm text-slate-200 font-sans">{selectedRegion.techStackStatus}</p>
                </div>
              </div>

              {/* Live Synchronization Status */}
              <div className="p-4 rounded-xl bg-sky-950/30 border border-sky-800/50 flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-mono text-sky-300">
                  <RefreshCw className="w-4 h-4 text-sky-400 animate-spin" style={{ animationDuration: '8s' }} />
                  <span>Real-Time Multi-Region Pipeline Sync Active</span>
                </div>
                <span className="text-xs font-mono text-sky-400 font-bold uppercase">Zero Drift</span>
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
              Empirical Operational Outcomes
            </h2>
            <p className="text-base sm:text-lg text-slate-600">
              Verified metric impacts achieved through unified global revenue operations orchestration.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 text-center">
              <div className="text-4xl sm:text-5xl font-black text-slate-900 font-mono tracking-tight mb-2">
                100%
              </div>
              <div className="h-1 w-12 bg-sky-600 mx-auto mb-4 rounded-full" />
              <p className="text-sm font-semibold text-slate-800 mb-1">Proactive Compliance</p>
              <p className="text-xs text-slate-600">Across all international operating markets with zero post-launch regulatory notices.</p>
            </div>

            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 text-center">
              <div className="text-4xl sm:text-5xl font-black text-slate-900 font-mono tracking-tight mb-2">
                30-50%
              </div>
              <div className="h-1 w-12 bg-blue-600 mx-auto mb-4 rounded-full" />
              <p className="text-sm font-semibold text-slate-800 mb-1">Cross-Border Revenue Lift</p>
              <p className="text-xs text-slate-600">Improvement in multinational account revenue via synchronized global deal planning.</p>
            </div>

            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 text-center">
              <div className="text-4xl sm:text-5xl font-black text-slate-900 font-mono tracking-tight mb-2">
                95%+
              </div>
              <div className="h-1 w-12 bg-indigo-600 mx-auto mb-4 rounded-full" />
              <p className="text-sm font-semibold text-slate-800 mb-1">Attribution Accuracy</p>
              <p className="text-xs text-slate-600">Precision revenue attribution across all regional markets, partners, and GTM motions.</p>
            </div>

            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 text-center">
              <div className="text-4xl sm:text-5xl font-black text-slate-900 font-mono tracking-tight mb-2">
                40-60%
              </div>
              <div className="h-1 w-12 bg-purple-600 mx-auto mb-4 rounded-full" />
              <p className="text-sm font-semibold text-slate-800 mb-1">Duplication Reduction</p>
              <p className="text-xs text-slate-600">Reduction in operational and tooling redundancy via multi-region orchestration.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 6: RELATED CAPABILITIES (CROSS-LINKS) ── */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-3">
              Operations Execute the Strategy
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Explore interconnected capabilities that feed into and leverage your global revenue operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link
              to="/global-acceleration/cross-border-strategy"
              className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-indigo-500 hover:shadow-lg transition-all group block"
            >
              <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                <Compass className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-lg mb-2 group-hover:text-indigo-600 transition-colors flex items-center justify-between">
                <span>Cross-Border Strategy</span>
                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 group-hover:text-indigo-600 transition-all" />
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Defines the market-specific entry models and currency tiers that operations enforces in regional billing engines.
              </p>
            </Link>

            <Link
              to="/global-acceleration/partner-ecosystems"
              className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-emerald-500 hover:shadow-lg transition-all group block"
            >
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                <Network className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-lg mb-2 group-hover:text-emerald-600 transition-colors flex items-center justify-between">
                <span>Partner Ecosystems</span>
                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 group-hover:text-emerald-600 transition-all" />
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Connects regional distributors and hyperscaler partners to your attribution framework for verifiable co-sell payouts.
              </p>
            </Link>

            <Link
              to="/global-acceleration/ai-global-scaling"
              className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-violet-500 hover:shadow-lg transition-all group block"
            >
              <div className="w-10 h-10 rounded-xl bg-violet-50 text-violet-600 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                <Bot className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-lg mb-2 group-hover:text-violet-600 transition-colors flex items-center justify-between">
                <span>AI For Global Scaling</span>
                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 group-hover:text-violet-600 transition-all" />
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Deploys multi-language autonomous agent swarms directly into your multi-region RevOps framework for 24/7 prospecting.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* ── SECTION 7: FINAL CTA + INTAKE FORM ── */}
      <section id="intake" className="py-20 sm:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-200 text-sky-700 text-xs font-mono font-bold uppercase mb-4">
              CONFIDENTIAL INTAKE
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4 font-heading">
              Ready to Orchestrate Global Operations?
            </h2>
            <p className="text-slate-600 text-base max-w-xl mx-auto">
              Request a confidential Global RevOps Diagnostic. Receive a multi-region attribution and consolidation plan within 24 business hours.
            </p>
          </div>

          <div className="p-8 sm:p-12 rounded-3xl bg-white border border-slate-200 shadow-xl">
            <GlobalExpansionIntakeForm
              pageContext="Global Revenue Operations"
              defaultChallenge="Regulatory compliance and data sovereignty (GDPR, LGPD)"
              buttonText="Orchestrate Global Operations"
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
