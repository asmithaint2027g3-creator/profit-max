import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Network, ArrowRight, ChevronRight, Activity, ShieldCheck,
  TrendingUp, BarChart3, Layers, Cpu, Globe, CheckCircle2,
  AlertCircle, Users, Bot, Sparkles, Building2, HelpCircle,
  MapPin, Zap, ArrowUpRight, DollarSign, Compass, Handshake,
  Share2, GitMerge, Award, Target, Server
} from 'lucide-react';
import { GlobalExpansionIntakeForm } from '../../components/forms/GlobalExpansionIntakeForm';

interface TopologyNode {
  id: string;
  category: 'Tier-1 Distributor' | 'Hyperscaler Alliance' | 'Regional Co-Sell' | 'Strategic SI';
  name: string;
  region: string;
  attributedPipeline: string;
  closedRevenue: string;
  coSellVelocity: string;
  yieldScore: number;
  status: 'High Yield' | 'Optimizing' | 'Restructuring';
  summary: string;
}

const TOPOLOGY_NODES: TopologyNode[] = [
  {
    id: 'node-aws',
    category: 'Hyperscaler Alliance',
    name: 'AWS Global Marketplace Co-Sell Fabric',
    region: 'North America / EMEA / APAC',
    attributedPipeline: '$14.8M',
    closedRevenue: '$6.2M',
    coSellVelocity: '42 Days Deal Cycle',
    yieldScore: 96,
    status: 'High Yield',
    summary: 'Joint ISV accelerator with committed drawdown against customer EDP enterprise discount agreements.'
  },
  {
    id: 'node-msft',
    category: 'Hyperscaler Alliance',
    name: 'Microsoft Cloud Solution Partner (Azure)',
    region: 'Western Europe & DACH',
    attributedPipeline: '$11.4M',
    closedRevenue: '$4.9M',
    coSellVelocity: '48 Days Deal Cycle',
    yieldScore: 92,
    status: 'High Yield',
    summary: 'Top-tier MACC co-sell routing with co-incentivized Microsoft enterprise account directors.'
  },
  {
    id: 'node-apac-dist',
    category: 'Tier-1 Distributor',
    name: 'Pan-Asian Enterprise Distributor Consortium',
    region: 'Japan, Singapore, Australia',
    attributedPipeline: '$8.6M',
    closedRevenue: '$3.4M',
    coSellVelocity: '55 Days Deal Cycle',
    yieldScore: 89,
    status: 'High Yield',
    summary: 'Exclusive tier-1 distribution across 450 certified enterprise VARs with native support engineering.'
  },
  {
    id: 'node-dach-si',
    category: 'Strategic SI',
    name: 'DACH Industrial Cloud Integration Network',
    region: 'Germany, Austria, Switzerland',
    attributedPipeline: '$7.2M',
    closedRevenue: '$2.8M',
    coSellVelocity: '62 Days Deal Cycle',
    yieldScore: 88,
    status: 'High Yield',
    summary: 'Specialized BaFin and industrial IoT integrators embedding technology into manufacturing conglomerates.'
  },
  {
    id: 'node-gcc-hub',
    category: 'Regional Co-Sell',
    name: 'Middle East & GCC Enterprise Alliance',
    region: 'UAE & Saudi Arabia',
    attributedPipeline: '$5.8M',
    closedRevenue: '$2.1M',
    coSellVelocity: '38 Days Deal Cycle',
    yieldScore: 86,
    status: 'Optimizing',
    summary: 'Sovereign digital transformation partnerships accelerating government and sovereign wealth deals.'
  }
];

export default function GlobalPartnerEcosystemsPage() {
  const [selectedNode, setSelectedNode] = useState<TopologyNode>(TOPOLOGY_NODES[0]);

  useEffect(() => {
    document.title = 'Global Partner Ecosystems: Build Partner Networks That Produce Predictable Revenue | ProfitMachines';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans pt-16 lg:pt-[72px]">
      {/* ── SECTION 1: HERO SECTION (Network Topology Layout, Industry Blue/Ambient Grid) ── */}
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
          <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none" />
          <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[140px] pointer-events-none" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-bold tracking-wide uppercase shadow-xs mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600"></span>
              </span>
              <span className="font-mono text-emerald-600 font-extrabold">PILLAR 03 OF 06</span>
              <span className="text-slate-300 font-normal">//</span>
              <span>GLOBAL PARTNER ARCHITECTURE</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.08] mb-6 font-heading">
              Global Partner Ecosystems:{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-600 to-blue-600">
                Build Partner Networks That Produce Predictable Revenue
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg lg:text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto mb-10">
              Four ecosystem capabilities that identify high-value distributors, recruit strategic partners, orchestrate co-selling programs, and manage alliances — turning partner networks from logo walls into predictable revenue channels.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
              <a
                href="#intake"
                className="inline-flex items-center justify-center bg-slate-900 hover:bg-emerald-600 text-white font-bold px-7 py-4 rounded-xl shadow-lg shadow-slate-900/10 text-sm transition-all hover:-translate-y-0.5 group font-mono uppercase tracking-wider gap-2 cursor-pointer"
              >
                <span>Build Your Partner Network</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <Link
                to="/global-acceleration"
                className="inline-flex items-center justify-center border border-slate-200 bg-white hover:bg-slate-50 text-slate-800 font-bold px-6 py-4 rounded-xl text-sm shadow-xs transition-all font-mono uppercase tracking-wider gap-2"
              >
                <span>Explore Other Pillars</span>
                <ChevronRight className="w-4 h-4 text-emerald-600" />
              </Link>
            </div>

            {/* Telemetry Bar */}
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs font-mono text-slate-600">
              <span className="inline-flex items-center gap-1.5 text-emerald-600 font-bold">
                <Network className="w-4 h-4 text-emerald-600" />
                ECOSYSTEM ATTRIBUTION:
              </span>
              <span>100% Pipeline Traced</span>
              <span className="text-slate-300">·</span>
              <span className="text-blue-600 font-semibold">3-5X Partner Revenue Lift</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 2: EXECUTIVE SUMMARY PANEL ── */}
      <section className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-12 rounded-3xl bg-white border border-slate-200 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-mono font-bold uppercase mb-4">
                Executive Summary
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-4">
                Partnerships Scale What You Can&apos;t Build Alone
              </h2>
              <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal mb-6">
                Most partner networks devolve into vanity logo walls where 80% of distributors generate less than 20% of pipeline. High-yield global scaling demands measuring every partner by attributed revenue contribution, active co-sell engagement, and hyperscaler marketplace leverage.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-slate-100 text-sm">
                <div>
                  <div className="font-mono text-xs text-slate-400 uppercase">Ecosystem Model</div>
                  <div className="font-bold text-slate-900 mt-0.5">Scored Yield Architecture</div>
                </div>
                <div>
                  <div className="font-mono text-xs text-slate-400 uppercase">Attribution Integrity</div>
                  <div className="font-bold text-emerald-600 mt-0.5">100% Verified Co-Sell Pipe</div>
                </div>
                <div>
                  <div className="font-mono text-xs text-slate-400 uppercase">Deal Cycle Velocity</div>
                  <div className="font-bold text-blue-600 mt-0.5">42-Day Hyperscaler Drawdown</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 3: THE 4 ECOSYSTEM CAPABILITIES (OPTIMIZED EXECUTIVE FORMAT) ── */}
      <section className="py-20 sm:py-28 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4 font-heading">
              Four High-Yield Ecosystem Capabilities
            </h2>
            <p className="text-base sm:text-lg text-slate-600">
              Transform unstructured channel networks into rigorous, pipeline-producing alliances with verifiable multi-touch attribution.
            </p>
          </div>

          <div className="space-y-12">
            {/* CAPABILITY 1: Distributor Networks */}
            <div className="p-8 sm:p-10 rounded-3xl border border-slate-200 bg-white hover:border-emerald-400 hover:shadow-xl transition-all">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-6">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-50 text-emerald-700 text-xs font-mono font-bold uppercase mb-3">
                    Capability 01 · Scored Distribution
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                    Distributor Networks
                  </h3>
                </div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-700 font-mono text-sm font-bold">
                  <TrendingUp className="w-4 h-4 text-emerald-600" />
                  <span>3-5X Partner Revenue Lift</span>
                </div>
              </div>

              {/* Executive Summary Card */}
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 mb-6 text-sm text-slate-700 leading-relaxed">
                <span className="font-bold text-slate-900 block mb-1 font-mono text-xs uppercase tracking-wider text-emerald-700">Strategic Overview</span>
                Replaces vanity logo-wall distributor agreements with rigorous, contribution-scored partner tiers. Continuously benchmarks distributors by technical enablement, enterprise account access, and verified pipeline yield, reallocating support resources toward high-performing channels.
              </div>

              {/* Benchmark & ROI Snapshot Panel */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs">
                  <div className="text-[11px] font-mono text-slate-400 uppercase font-semibold mb-1">Benchmark Contrast</div>
                  <div className="text-xs text-slate-600 leading-snug">
                    <strong className="text-slate-900 block font-semibold mb-1">Focus vs Sprawl:</strong>
                    Stops subsidizing 50+ dormant regional partners to focus exclusively on high-yield distributors.
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-emerald-50/60 border border-emerald-200/80">
                  <div className="text-[11px] font-mono text-emerald-700 uppercase font-semibold mb-1">ROI Snapshot</div>
                  <div className="text-lg font-black text-emerald-900 font-mono">3-5X Partner Yield</div>
                  <div className="text-xs text-emerald-700 mt-0.5">80% of revenue concentrated in top 5 tiers</div>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 shadow-xs">
                  <div className="text-[11px] font-mono text-slate-400 uppercase font-semibold mb-1">Case-Study Snippet</div>
                  <div className="text-xs text-slate-700 leading-snug">
                    <strong className="text-slate-900 block font-semibold">Cyber Platform:</strong>
                    Pruned 45 low-yield distributor agreements across APAC, focusing capital on 5 scored Tier-1 distributors to generate $6.2M in 6 months.
                  </div>
                </div>
              </div>

              {/* Real Buyer Quote */}
              <div className="p-5 rounded-2xl bg-slate-50 border-l-4 border-emerald-600 text-slate-700 italic text-sm">
                &ldquo;Scoring distributor contribution allowed us to stop subsidizing dormant partners and focus all co-sell bandwidth on the 5 relationships driving 80% of regional pipeline.&rdquo;
                <span className="block mt-1 font-mono text-xs text-slate-500 font-normal not-italic">
                  — VP Global Channels & Alliances, Cyber Tech Enterprise
                </span>
              </div>
            </div>

            {/* CAPABILITY 2: Partner Recruitment */}
            <div className="p-8 sm:p-10 rounded-3xl border border-slate-200 bg-white hover:border-emerald-400 hover:shadow-xl transition-all">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-6">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-teal-50 text-teal-700 text-xs font-mono font-bold uppercase mb-3">
                    Capability 02 · Strategic Sourcing
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                    Partner Recruitment
                  </h3>
                </div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-teal-50 border border-teal-200 text-teal-700 font-mono text-sm font-bold">
                  <Target className="w-4 h-4 text-teal-600" />
                  <span>2-4 Priority Partners in 6 Months</span>
                </div>
              </div>

              {/* Executive Summary Card */}
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 mb-6 text-sm text-slate-700 leading-relaxed">
                <span className="font-bold text-slate-900 block mb-1 font-mono text-xs uppercase tracking-wider text-teal-700">Strategic Overview</span>
                Identifies ecosystem coverage gaps by country and vertical, proactively recruiting established regional systems integrators and distributors rather than passively fielding inbound interest. Equips new partners with structured commercial models and turnkey co-sell playbooks.
              </div>

              {/* Benchmark & ROI Snapshot Panel */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs">
                  <div className="text-[11px] font-mono text-slate-400 uppercase font-semibold mb-1">Benchmark Contrast</div>
                  <div className="text-xs text-slate-600 leading-snug">
                    <strong className="text-slate-900 block font-semibold mb-1">Proactive Recruitment:</strong>
                    Prevents competitors from locking in premier regional channels through systematic ecosystem gap analysis.
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-teal-50/60 border border-teal-200/80">
                  <div className="text-[11px] font-mono text-teal-700 uppercase font-semibold mb-1">ROI Snapshot</div>
                  <div className="text-lg font-black text-teal-900 font-mono">90-Day Partner Ramp</div>
                  <div className="text-xs text-teal-700 mt-0.5">2-4 strategic recruits per priority market</div>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 shadow-xs">
                  <div className="text-[11px] font-mono text-slate-400 uppercase font-semibold mb-1">Case-Study Snippet</div>
                  <div className="text-xs text-slate-700 leading-snug">
                    <strong className="text-slate-900 block font-semibold">Data Integration Vendor:</strong>
                    Targeted and signed the largest enterprise reseller in Southeast Asia, locking out competitors and generating $3.4M in Year-1 joint pipeline.
                  </div>
                </div>
              </div>

              {/* Real Buyer Quote */}
              <div className="p-5 rounded-2xl bg-slate-50 border-l-4 border-teal-600 text-slate-700 italic text-sm">
                &ldquo;Mapping our ecosystem gaps allowed us to recruit premier regional distributors before our competitors could establish exclusivity.&rdquo;
                <span className="block mt-1 font-mono text-xs text-slate-500 font-normal not-italic">
                  — Chief Commercial Officer, Enterprise Data Integration Platform
                </span>
              </div>
            </div>

            {/* CAPABILITY 3: Co-Selling Programs */}
            <div className="p-8 sm:p-10 rounded-3xl border border-slate-200 bg-white hover:border-emerald-400 hover:shadow-xl transition-all">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-6">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 text-blue-700 text-xs font-mono font-bold uppercase mb-3">
                    Capability 03 · Pipeline Attribution
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                    Co-Selling Programs
                  </h3>
                </div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-50 border border-blue-200 text-blue-700 font-mono text-sm font-bold">
                  <Share2 className="w-4 h-4 text-blue-600" />
                  <span>4-6X Improvement in Co-Selling ROI</span>
                </div>
              </div>

              {/* Executive Summary Card */}
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 mb-6 text-sm text-slate-700 leading-relaxed">
                <span className="font-bold text-slate-900 block mb-1 font-mono text-xs uppercase tracking-wider text-blue-700">Strategic Overview</span>
                Institutes deterministic pipeline attribution, shared account mapping, and mutual sales SLAs for every joint co-sell motion. Eliminates vanity marketing webinars and replaces them with active deal-level co-selling governed by transparent pipeline tracking.
              </div>

              {/* Benchmark & ROI Snapshot Panel */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs">
                  <div className="text-[11px] font-mono text-slate-400 uppercase font-semibold mb-1">Benchmark Contrast</div>
                  <div className="text-xs text-slate-600 leading-snug">
                    <strong className="text-slate-900 block font-semibold mb-1">Attributed Revenue:</strong>
                    Transitions from unmeasurable joint marketing spend to 100% verified pipeline sourcing.
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-blue-50/60 border border-blue-200/80">
                  <div className="text-[11px] font-mono text-blue-700 uppercase font-semibold mb-1">ROI Snapshot</div>
                  <div className="text-lg font-black text-blue-900 font-mono">4-6X Co-Sell ROI</div>
                  <div className="text-xs text-blue-700 mt-0.5">Zero unattributed joint marketing waste</div>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 shadow-xs">
                  <div className="text-[11px] font-mono text-slate-400 uppercase font-semibold mb-1">Case-Study Snippet</div>
                  <div className="text-xs text-slate-700 leading-snug">
                    <strong className="text-slate-900 block font-semibold">AI Infrastructure Firm:</strong>
                    Replaced generic joint webinars with account-mapped co-sell sprints, converting 44 enterprise accounts for $8.2M in verified co-sold ARR.
                  </div>
                </div>
              </div>

              {/* Real Buyer Quote */}
              <div className="p-5 rounded-2xl bg-slate-50 border-l-4 border-blue-600 text-slate-700 italic text-sm">
                &ldquo;Structured account mapping and multi-touch attribution turned our co-sell initiative from an expensive marketing cost center into our fastest-growing pipeline engine.&rdquo;
                <span className="block mt-1 font-mono text-xs text-slate-500 font-normal not-italic">
                  — Global Partner Director, AI Infrastructure Firm
                </span>
              </div>
            </div>

            {/* CAPABILITY 4: Alliance Management */}
            <div className="p-8 sm:p-10 rounded-3xl border border-slate-200 bg-white hover:border-emerald-400 hover:shadow-xl transition-all">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-6">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-purple-50 text-purple-700 text-xs font-mono font-bold uppercase mb-3">
                    Capability 04 · Hyperscaler Alliances
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                    Alliance Management
                  </h3>
                </div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-purple-50 border border-purple-200 text-purple-700 font-mono text-sm font-bold">
                  <Award className="w-4 h-4 text-purple-600" />
                  <span>2-4 Activated Hyperscaler Alliances</span>
                </div>
              </div>

              {/* Executive Summary Card */}
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 mb-6 text-sm text-slate-700 leading-relaxed">
                <span className="font-bold text-slate-900 block mb-1 font-mono text-xs uppercase tracking-wider text-purple-700">Strategic Overview</span>
                Orchestrates deep co-sell and marketplace integrations with major cloud platforms (AWS, Microsoft Azure, Google Cloud). Leverages customer Enterprise Discount Program (EDP/MACC) commitment drawdowns to compress deal approval times and streamline procurement.
              </div>

              {/* Benchmark & ROI Snapshot Panel */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs">
                  <div className="text-[11px] font-mono text-slate-400 uppercase font-semibold mb-1">Benchmark Contrast</div>
                  <div className="text-xs text-slate-600 leading-snug">
                    <strong className="text-slate-900 block font-semibold mb-1">Commit Drawdown:</strong>
                    Transforms static tier partner logos into accelerated procurement vehicles via existing enterprise cloud commitments.
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-purple-50/60 border border-purple-200/80">
                  <div className="text-[11px] font-mono text-purple-700 uppercase font-semibold mb-1">ROI Snapshot</div>
                  <div className="text-lg font-black text-purple-900 font-mono">42-Day Close Cycle</div>
                  <div className="text-xs text-purple-700 mt-0.5">78% win rate on marketplace co-sells</div>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 shadow-xs">
                  <div className="text-[11px] font-mono text-slate-400 uppercase font-semibold mb-1">Case-Study Snippet</div>
                  <div className="text-xs text-slate-700 leading-snug">
                    <strong className="text-slate-900 block font-semibold">B2B SaaS ($80M ARR):</strong>
                    Activated AWS and Azure marketplace co-sell routing, allowing Fortune 500 prospects to draw down existing cloud commitments for $9.5M in contracted software.
                  </div>
                </div>
              </div>

              {/* Real Buyer Quote */}
              <div className="p-5 rounded-2xl bg-slate-50 border-l-4 border-purple-600 text-slate-700 italic text-sm">
                &ldquo;Aligning with hyperscaler cloud commit drawdowns removed procurement friction across our largest international enterprise deals.&rdquo;
                <span className="block mt-1 font-mono text-xs text-slate-500 font-normal not-italic">
                  — CEO & Founder, Enterprise B2B SaaS ($80M ARR)
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 4: VISUAL INTERACTION: NETWORK TOPOLOGY MAP ── */}
      <section className="py-20 sm:py-28 bg-slate-950 text-white border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-bold uppercase mb-3">
              <Share2 className="w-3.5 h-3.5" />
              Network Topology & Revenue Attribution
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Global Ecosystem Attribution Topology
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl">
              Inspect verified distributor relationships, hyperscaler co-sell flows, and strategic alliances with attributed closed revenue and pipeline velocity.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Partner Node List */}
            <div className="lg:col-span-5 space-y-3">
              {TOPOLOGY_NODES.map((node) => {
                const isSelected = selectedNode.id === node.id;
                return (
                  <div
                    key={node.id}
                    onClick={() => setSelectedNode(node)}
                    className={`p-5 rounded-2xl cursor-pointer transition-all border ${
                      isSelected
                        ? 'bg-slate-900 border-emerald-500 shadow-xl shadow-emerald-500/10'
                        : 'bg-slate-900/50 border-slate-800 hover:border-slate-700 hover:bg-slate-900/80'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[11px] font-mono uppercase px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-bold">
                        {node.category}
                      </span>
                      <span className="text-xs font-mono text-slate-400">{node.region}</span>
                    </div>
                    <h4 className="font-bold text-white text-base mb-1">{node.name}</h4>
                    <div className="flex items-center justify-between text-xs text-slate-400 font-mono">
                      <span className="text-emerald-400 font-bold">Closed: {node.closedRevenue}</span>
                      <span>Pipeline: {node.attributedPipeline}</span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Partner Node Detail Dossier */}
            <div className="lg:col-span-7 bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-600/10 rounded-full blur-[100px] pointer-events-none" />

              <div className="flex items-center justify-between border-b border-slate-800 pb-5 mb-6">
                <div>
                  <div className="text-xs font-mono text-emerald-400 uppercase tracking-wider mb-1">
                    {selectedNode.category} · {selectedNode.region}
                  </div>
                  <h3 className="text-2xl font-black text-white">{selectedNode.name}</h3>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-black font-mono text-emerald-400">
                    {selectedNode.yieldScore}<span className="text-base text-slate-500 font-normal">/100</span>
                  </div>
                  <div className="text-[10px] font-mono uppercase text-slate-400">Yield Score</div>
                </div>
              </div>

              {/* Metric Cards */}
              <div className="grid grid-cols-3 gap-3 mb-6">
                <div className="bg-slate-950 p-4 rounded-xl border border-slate-800/80">
                  <div className="text-[11px] font-mono text-slate-500 uppercase mb-1">Attributed Pipeline</div>
                  <div className="text-xl font-bold font-mono text-white">{selectedNode.attributedPipeline}</div>
                </div>
                <div className="bg-slate-950 p-4 rounded-xl border border-slate-800/80">
                  <div className="text-[11px] font-mono text-slate-500 uppercase mb-1">Closed-Won Revenue</div>
                  <div className="text-xl font-bold font-mono text-emerald-400">{selectedNode.closedRevenue}</div>
                </div>
                <div className="bg-slate-950 p-4 rounded-xl border border-slate-800/80">
                  <div className="text-[11px] font-mono text-slate-500 uppercase mb-1">Co-Sell Velocity</div>
                  <div className="text-xl font-bold font-mono text-blue-400">{selectedNode.coSellVelocity}</div>
                </div>
              </div>

              {/* Narrative Summary */}
              <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 mb-4">
                <div className="text-xs font-mono text-slate-400 uppercase mb-1 flex items-center gap-2">
                  <Handshake className="w-4 h-4 text-emerald-400" />
                  Ecosystem Integration Architecture
                </div>
                <p className="text-sm text-slate-200 font-sans">{selectedNode.summary}</p>
              </div>

              {/* Attribution Guarantee */}
              <div className="p-4 rounded-xl bg-emerald-950/20 border border-emerald-800/50 flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-mono text-emerald-300">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Deterministic Co-Sell Claiming & Attribution Gate</span>
                </div>
                <span className="text-xs font-mono text-emerald-400 font-bold uppercase">Active Fabric</span>
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
              Empirical Ecosystem Outcomes
            </h2>
            <p className="text-base sm:text-lg text-slate-600">
              Verified metric impacts achieved through strategic partner ecosystem architecture.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 text-center">
              <div className="text-4xl sm:text-5xl font-black text-slate-900 font-mono tracking-tight mb-2">
                3-5X
              </div>
              <div className="h-1 w-12 bg-emerald-600 mx-auto mb-4 rounded-full" />
              <p className="text-sm font-semibold text-slate-800 mb-1">Partner Revenue Lift</p>
              <p className="text-xs text-slate-600">Improvement in partner-sourced revenue via focused high-yield scoring.</p>
            </div>

            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 text-center">
              <div className="text-4xl sm:text-5xl font-black text-slate-900 font-mono tracking-tight mb-2">
                2-4
              </div>
              <div className="h-1 w-12 bg-teal-600 mx-auto mb-4 rounded-full" />
              <p className="text-sm font-semibold text-slate-800 mb-1">Strategic Recruits</p>
              <p className="text-xs text-slate-600">Premier regional distributors onboarded per priority market within 6 months.</p>
            </div>

            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 text-center">
              <div className="text-4xl sm:text-5xl font-black text-slate-900 font-mono tracking-tight mb-2">
                4-6X
              </div>
              <div className="h-1 w-12 bg-blue-600 mx-auto mb-4 rounded-full" />
              <p className="text-sm font-semibold text-slate-800 mb-1">Co-Selling ROI</p>
              <p className="text-xs text-slate-600">Return on co-selling investments driven by strict account claiming attribution.</p>
            </div>

            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 text-center">
              <div className="text-4xl sm:text-5xl font-black text-slate-900 font-mono tracking-tight mb-2">
                2-4
              </div>
              <div className="h-1 w-12 bg-purple-600 mx-auto mb-4 rounded-full" />
              <p className="text-sm font-semibold text-slate-800 mb-1">Alliances Activated</p>
              <p className="text-xs text-slate-600">Strategic platform alliances activated with dedicated co-sell attribution.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 6: RELATED CAPABILITIES (CROSS-LINKS) ── */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-3">
              Partners Execute the Strategy
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Explore how partner networks integrate seamlessly with upstream strategy and downstream operations.
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
                Supplies the market entry model (distributor-led vs. hybrid) executed by your regional partner fabric.
              </p>
            </Link>

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
                Identifies regional partner gaps and surfaces untapped distributor opportunities through competitive mapping.
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
                Maintains multi-region revenue attribution engines to track partner commission splits and co-sell attribution accurately.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* ── SECTION 7: FINAL CTA + INTAKE FORM ── */}
      <section id="intake" className="py-20 sm:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-mono font-bold uppercase mb-4">
              CONFIDENTIAL INTAKE
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4 font-heading">
              Ready to Build a Predictable Partner Network?
            </h2>
            <p className="text-slate-600 text-base max-w-xl mx-auto">
              Request a confidential Partner Ecosystem Diagnostic. Receive an audit of your regional distributor network and co-sell attribution framework within 24 business hours.
            </p>
          </div>

          <div className="p-8 sm:p-12 rounded-3xl bg-white border border-slate-200 shadow-xl">
            <GlobalExpansionIntakeForm
              pageContext="Global Partner Ecosystems"
              defaultChallenge="Unproductive distributor networks and lack of co-sell attribution"
              buttonText="Build Your Partner Network"
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
