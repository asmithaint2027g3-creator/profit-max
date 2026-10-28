import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Globe, ArrowRight, ChevronRight, Activity, ShieldCheck,
  TrendingUp, BarChart3, Layers, Cpu, Compass, CheckCircle2,
  AlertCircle, Users, Bot, Sparkles, Building2, HelpCircle,
  MapPin, Zap, ArrowUpRight, DollarSign, Network, Radar,
  Search, Radio, Shield, Scale, Crosshair, Filter, CheckSquare,
  FileCheck, PieChart
} from 'lucide-react';
import { GlobalExpansionIntakeForm } from '../../components/forms/GlobalExpansionIntakeForm';

interface RadarCountry {
  id: string;
  name: string;
  region: string;
  score: number;
  tam: string;
  sam: string;
  som: string;
  regStatus: 'Green' | 'Amber' | 'High-Discipline';
  regFramework: string;
  incumbentDensity: 'Moderate' | 'High' | 'Dominant';
  primaryIncumbent: string;
  marginPotential: string;
}

const RADAR_COUNTRIES: RadarCountry[] = [
  {
    id: 'de',
    name: 'Germany (DACH)',
    region: 'Western Europe',
    score: 94,
    tam: '$18.4B',
    sam: '$4.2B',
    som: '$680M',
    regStatus: 'High-Discipline',
    regFramework: 'GDPR / BaFin / Works Council',
    incumbentDensity: 'High',
    primaryIncumbent: 'Regional Sovereign ERPs & Legacy Integrators',
    marginPotential: '76% Gross Margin'
  },
  {
    id: 'jp',
    name: 'Japan',
    region: 'Asia-Pacific',
    score: 89,
    tam: '$14.2B',
    sam: '$3.1B',
    som: '$490M',
    regStatus: 'Amber',
    regFramework: 'APPI / Local Reseller Protocol',
    incumbentDensity: 'Dominant',
    primaryIncumbent: 'Domestic Trading Houses (Sogo Shosha)',
    marginPotential: '81% LTV/CAC'
  },
  {
    id: 'uk',
    name: 'United Kingdom',
    region: 'Western Europe',
    score: 96,
    tam: '$16.8B',
    sam: '$5.6B',
    som: '$940M',
    regStatus: 'Green',
    regFramework: 'UK GDPR / FCA Direct',
    incumbentDensity: 'Moderate',
    primaryIncumbent: 'US Multinationals with London HQs',
    marginPotential: '84% Price Realization'
  },
  {
    id: 'br',
    name: 'Brazil',
    region: 'Latin America',
    score: 78,
    tam: '$11.5B',
    sam: '$2.3B',
    som: '$310M',
    regStatus: 'Amber',
    regFramework: 'LGPD / Complex Tax (ICMS/ISS)',
    incumbentDensity: 'High',
    primaryIncumbent: 'Local Brazilian Software Conglomerates',
    marginPotential: '62% Adjusted Net'
  },
  {
    id: 'ae',
    name: 'United Arab Emirates & GCC',
    region: 'Middle East',
    score: 92,
    tam: '$8.9B',
    sam: '$2.8B',
    som: '$520M',
    regStatus: 'Green',
    regFramework: 'Sovereign AI Directives / Free Zones',
    incumbentDensity: 'Moderate',
    primaryIncumbent: 'Global Big 4 Integrators',
    marginPotential: '88% Contract Size'
  },
  {
    id: 'sg',
    name: 'Singapore & ASEAN',
    region: 'Asia-Pacific',
    score: 91,
    tam: '$9.4B',
    sam: '$3.0B',
    som: '$480M',
    regStatus: 'Green',
    regFramework: 'PDPA / MAS Cyber Guidelines',
    incumbentDensity: 'Moderate',
    primaryIncumbent: 'Regional Cloud Resellers',
    marginPotential: '80% Velocity'
  }
];

export default function MarketIntelligencePage() {
  const [selectedCountry, setSelectedCountry] = useState<RadarCountry>(RADAR_COUNTRIES[0]);
  const [radarFilter, setRadarFilter] = useState<'all' | 'high-score' | 'regulated'>('all');

  useEffect(() => {
    document.title = 'Market Intelligence: Validate Every Market Before Committing Capital | ProfitMachines';
    window.scrollTo(0, 0);
  }, []);

  const filteredCountries = RADAR_COUNTRIES.filter((country) => {
    if (radarFilter === 'high-score') return country.score >= 90;
    if (radarFilter === 'regulated') return country.regStatus === 'High-Discipline' || country.regStatus === 'Amber';
    return true;
  });

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans pt-16 lg:pt-[72px]">
      {/* ── SECTION 1: HERO SECTION (Intelligence Radar Layout, Industry Blue/Ambient Grid) ── */}
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
          <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[140px] pointer-events-none" />
          <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[140px] pointer-events-none" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold tracking-wide uppercase shadow-xs mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
              </span>
              <span className="font-mono text-blue-600 font-extrabold">PILLAR 01 OF 06</span>
              <span className="text-slate-300 font-normal">//</span>
              <span>GLOBAL BUSINESS ACCELERATION</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.08] mb-6 font-heading">
              Market Intelligence:{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
                Validate Every Market Before Committing Capital
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg lg:text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto mb-10">
              Four intelligence systems that identify high-propensity international opportunities, quantify total addressable markets by region, map competitive landscapes across borders, and navigate regulatory complexity — before you spend a dollar on market entry.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
              <a
                href="#intake"
                className="inline-flex items-center justify-center bg-slate-900 hover:bg-blue-600 text-white font-bold px-7 py-4 rounded-xl shadow-lg shadow-slate-900/10 text-sm transition-all hover:-translate-y-0.5 group font-mono uppercase tracking-wider gap-2 cursor-pointer"
              >
                <span>Run a Market Intelligence Audit</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <Link
                to="/global-acceleration"
                className="inline-flex items-center justify-center border border-slate-200 bg-white hover:bg-slate-50 text-slate-800 font-bold px-6 py-4 rounded-xl text-sm shadow-xs transition-all font-mono uppercase tracking-wider gap-2"
              >
                <span>Explore Other Pillars</span>
                <ChevronRight className="w-4 h-4 text-blue-600" />
              </Link>
            </div>

            {/* Telemetry Bar */}
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs font-mono text-slate-600">
              <span className="inline-flex items-center gap-1.5 text-blue-600 font-bold">
                <Radar className="w-4 h-4 animate-spin text-blue-600" style={{ animationDuration: '6s' }} />
                ACTIVE SENSING SCAN:
              </span>
              <span>40+ Sovereign Territories Monitored</span>
              <span className="text-slate-300">·</span>
              <span className="text-emerald-600 font-semibold">100% Pre-Capital Validation</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 2: EXECUTIVE SUMMARY PANEL ── */}
      <section className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-12 rounded-3xl bg-white border border-slate-200 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono font-bold uppercase mb-4">
                Executive Summary
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-4">
                Intelligence Precedes Investment
              </h2>
              <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal mb-6">
                Most international expansions falter because capital is deployed based on surface-level macro indicators rather than territory unit economics. High headline GDP frequently masks fragmented distribution, aggressive domestic incumbents, and burdensome regulatory barriers.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-slate-100 text-sm">
                <div>
                  <div className="font-mono text-xs text-slate-400 uppercase">Strategic Focus</div>
                  <div className="font-bold text-slate-900 mt-0.5">Unit-Economic Validation</div>
                </div>
                <div>
                  <div className="font-mono text-xs text-slate-400 uppercase">Target Horizon</div>
                  <div className="font-bold text-blue-600 mt-0.5">Day-1 Margin Predictability</div>
                </div>
                <div>
                  <div className="font-mono text-xs text-slate-400 uppercase">Executive ROI</div>
                  <div className="font-bold text-emerald-600 mt-0.5">60-75% Capital Efficiency Lift</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 3: THE 4 INTELLIGENCE SYSTEMS (OPTIMIZED EXECUTIVE FORMAT) ── */}
      <section className="py-20 sm:py-28 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4 font-heading">
              Four Core Intelligence Systems
            </h2>
            <p className="text-base sm:text-lg text-slate-600">
              High-velocity validation frameworks designed to de-risk market selection, territory sizing, incumbent defense, and regulatory governance.
            </p>
          </div>

          <div className="space-y-12">
            {/* SYSTEM 1: Country Opportunity Analysis */}
            <div className="p-8 sm:p-10 rounded-3xl border border-slate-200 bg-white hover:border-blue-400 hover:shadow-xl transition-all">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-6">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 text-blue-700 text-xs font-mono font-bold uppercase mb-3">
                    System 01 · Macro vs. Unit Economics
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                    Country Opportunity Analysis
                  </h3>
                </div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-50 border border-blue-200 text-blue-700 font-mono text-sm font-bold">
                  <TrendingUp className="w-4 h-4 text-blue-600" />
                  <span>60-75% International ROI Lift</span>
                </div>
              </div>

              {/* Executive Summary Card */}
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 mb-6 text-sm text-slate-700 leading-relaxed">
                <span className="font-bold text-slate-900 block mb-1 font-mono text-xs uppercase tracking-wider text-blue-700">Strategic Overview</span>
                Replaces superficial headline GDP with rigorous territory contribution margin modeling. By analyzing local willingness-to-pay, distribution friction, and regulatory drag prior to capital deployment, leadership invests exclusively in validated high-yield profit pools.
              </div>

              {/* Benchmark & ROI Snapshot Panel */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs">
                  <div className="text-[11px] font-mono text-slate-400 uppercase font-semibold mb-1">Benchmark Contrast</div>
                  <div className="text-xs text-slate-600 leading-snug">
                    <strong className="text-slate-900 block font-semibold mb-1">Traditional vs Engineered:</strong>
                    Moves from unvalidated market entries to first-principles unit-economic ranking.
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-blue-50/60 border border-blue-200/80">
                  <div className="text-[11px] font-mono text-blue-700 uppercase font-semibold mb-1">ROI Snapshot</div>
                  <div className="text-lg font-black text-blue-900 font-mono">+2.8X Payback Speed</div>
                  <div className="text-xs text-blue-700 mt-0.5">Average gross margin protection: 74%</div>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 shadow-xs">
                  <div className="text-[11px] font-mono text-slate-400 uppercase font-semibold mb-1">Case-Study Snippet</div>
                  <div className="text-xs text-slate-700 leading-snug">
                    <strong className="text-slate-900 block font-semibold">$140M Enterprise SaaS:</strong>
                    Redirected expansion from high-cost LATAM into validated DACH corridors, beating Year-1 revenue goals by 42%.
                  </div>
                </div>
              </div>

              {/* Real Buyer Quote */}
              <div className="p-5 rounded-2xl bg-slate-50 border-l-4 border-blue-600 text-slate-700 italic text-sm">
                &ldquo;We avoided a costly multi-year distribution misstep by shifting capital into high-margin European corridors validated by real willingness-to-pay telemetry.&rdquo;
                <span className="block mt-1 font-mono text-xs text-slate-500 font-normal not-italic">
                  — SVP International Business, Global B2B SaaS Platform ($140M ARR)
                </span>
              </div>
            </div>

            {/* SYSTEM 2: TAM / SAM / SOM Assessment */}
            <div className="p-8 sm:p-10 rounded-3xl border border-slate-200 bg-white hover:border-blue-400 hover:shadow-xl transition-all">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-6">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-indigo-50 text-indigo-700 text-xs font-mono font-bold uppercase mb-3">
                    System 02 · Territory Sizing
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                    TAM / SAM / SOM Assessment
                  </h3>
                </div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-indigo-50 border border-indigo-200 text-indigo-700 font-mono text-sm font-bold">
                  <CheckCircle2 className="w-4 h-4 text-indigo-600" />
                  <span>&lt;15% Variance to Actual Revenue</span>
                </div>
              </div>

              {/* Executive Summary Card */}
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 mb-6 text-sm text-slate-700 leading-relaxed">
                <span className="font-bold text-slate-900 block mb-1 font-mono text-xs uppercase tracking-wider text-indigo-700">Strategic Overview</span>
                Calculates country-specific addressable markets using localized buyer discovery and willingness-to-pay telemetry rather than multiplying domestic penetration across global territories. Delivers board-defensible forecasts grounded in factual territory data.
              </div>

              {/* Benchmark & ROI Snapshot Panel */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs">
                  <div className="text-[11px] font-mono text-slate-400 uppercase font-semibold mb-1">Benchmark Contrast</div>
                  <div className="text-xs text-slate-600 leading-snug">
                    <strong className="text-slate-900 block font-semibold mb-1">Forecast Variance:</strong>
                    Reduces common 50%+ first-year revenue misses down to under 15% verifiable variance.
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-indigo-50/60 border border-indigo-200/80">
                  <div className="text-[11px] font-mono text-indigo-700 uppercase font-semibold mb-1">ROI Snapshot</div>
                  <div className="text-lg font-black text-indigo-900 font-mono">98.4% SOM Accuracy</div>
                  <div className="text-xs text-indigo-700 mt-0.5">Eliminates boardroom forecast drift</div>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 shadow-xs">
                  <div className="text-[11px] font-mono text-slate-400 uppercase font-semibold mb-1">Case-Study Snippet</div>
                  <div className="text-xs text-slate-700 leading-snug">
                    <strong className="text-slate-900 block font-semibold">Infrastructure Provider:</strong>
                    Modeled Japan market SAM at $3.1B with local keiretsu variables; closed Year-1 at $490M SOM with 94% forecast precision.
                  </div>
                </div>
              </div>

              {/* Real Buyer Quote */}
              <div className="p-5 rounded-2xl bg-slate-50 border-l-4 border-indigo-600 text-slate-700 italic text-sm">
                &ldquo;Instead of presenting top-down multiplied assumptions to the board, we entered Japan with verified bottom-up models that matched our Year-1 financial close.&rdquo;
                <span className="block mt-1 font-mono text-xs text-slate-500 font-normal not-italic">
                  — Chief Commercial Officer, Enterprise Infrastructure Firm
                </span>
              </div>
            </div>

            {/* SYSTEM 3: Competitive Mapping */}
            <div className="p-8 sm:p-10 rounded-3xl border border-slate-200 bg-white hover:border-blue-400 hover:shadow-xl transition-all">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-6">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-purple-50 text-purple-700 text-xs font-mono font-bold uppercase mb-3">
                    System 03 · Incumbent Dissection
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                    Competitive Mapping
                  </h3>
                </div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-purple-50 border border-purple-200 text-purple-700 font-mono text-sm font-bold">
                  <Crosshair className="w-4 h-4 text-purple-600" />
                  <span>25-40% Win-Rate Lift vs. Local Rivals</span>
                </div>
              </div>

              {/* Executive Summary Card */}
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 mb-6 text-sm text-slate-700 leading-relaxed">
                <span className="font-bold text-slate-900 block mb-1 font-mono text-xs uppercase tracking-wider text-purple-700">Strategic Overview</span>
                Uncovers regional and domestic incumbents who quietly dominate 60-80% of local enterprise market share. Builds deal-by-deal competitive battlecards, feature counter-positioning, and distributor displacement workflows before first contact.
              </div>

              {/* Benchmark & ROI Snapshot Panel */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs">
                  <div className="text-[11px] font-mono text-slate-400 uppercase font-semibold mb-1">Benchmark Contrast</div>
                  <div className="text-xs text-slate-600 leading-snug">
                    <strong className="text-slate-900 block font-semibold mb-1">Incumbent Blindspots:</strong>
                    Prevents losing initial deals to regional players by mapping territory positioning early.
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-purple-50/60 border border-purple-200/80">
                  <div className="text-[11px] font-mono text-purple-700 uppercase font-semibold mb-1">ROI Snapshot</div>
                  <div className="text-lg font-black text-purple-900 font-mono">+34% Win Rate Lift</div>
                  <div className="text-xs text-purple-700 mt-0.5">Average displacement cycle: 48 days</div>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 shadow-xs">
                  <div className="text-[11px] font-mono text-slate-400 uppercase font-semibold mb-1">Case-Study Snippet</div>
                  <div className="text-xs text-slate-700 leading-snug">
                    <strong className="text-slate-900 block font-semibold">Cybersecurity Scaleup:</strong>
                    Entered Germany against a legacy DACH vendor; counter-positioning drove 12 consecutive enterprise displacements in 90 days.
                  </div>
                </div>
              </div>

              {/* Real Buyer Quote */}
              <div className="p-5 rounded-2xl bg-slate-50 border-l-4 border-purple-600 text-slate-700 italic text-sm">
                &ldquo;We assumed our primary competitor was Salesforce in Europe. Competitive mapping revealed the domestic incumbent with 60% share and gave us the playbook to win.&rdquo;
                <span className="block mt-1 font-mono text-xs text-slate-500 font-normal not-italic">
                  — VP EMEA Expansion, AI Operations Scaleup
                </span>
              </div>
            </div>

            {/* SYSTEM 4: Regulatory Intelligence */}
            <div className="p-8 sm:p-10 rounded-3xl border border-slate-200 bg-white hover:border-blue-400 hover:shadow-xl transition-all">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-6">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-50 text-emerald-700 text-xs font-mono font-bold uppercase mb-3">
                    System 04 · Sovereign Compliance
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                    Regulatory Intelligence
                  </h3>
                </div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-700 font-mono text-sm font-bold">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>100% Launch Compliance · 0 Fines</span>
                </div>
              </div>

              {/* Executive Summary Card */}
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 mb-6 text-sm text-slate-700 leading-relaxed">
                <span className="font-bold text-slate-900 block mb-1 font-mono text-xs uppercase tracking-wider text-emerald-700">Strategic Overview</span>
                Architects data residency, industry compliance mandates, and localized contractual liability frameworks prior to market entry. Autonomous regulatory sentinel agents track statutory changes in real time, preventing contract freeze or compliance sanctions.
              </div>

              {/* Benchmark & ROI Snapshot Panel */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs">
                  <div className="text-[11px] font-mono text-slate-400 uppercase font-semibold mb-1">Benchmark Contrast</div>
                  <div className="text-xs text-slate-600 leading-snug">
                    <strong className="text-slate-900 block font-semibold mb-1">Proactive vs Reactive:</strong>
                    Prevents contract stranding by certifying technical data architecture before sales kick off.
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-emerald-50/60 border border-emerald-200/80">
                  <div className="text-[11px] font-mono text-emerald-700 uppercase font-semibold mb-1">ROI Snapshot</div>
                  <div className="text-lg font-black text-emerald-900 font-mono">Zero Post-Launch Fines</div>
                  <div className="text-xs text-emerald-700 mt-0.5">100% Day-1 contractual legality</div>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 shadow-xs">
                  <div className="text-[11px] font-mono text-slate-400 uppercase font-semibold mb-1">Case-Study Snippet</div>
                  <div className="text-xs text-slate-700 leading-snug">
                    <strong className="text-slate-900 block font-semibold">HealthTech Platform:</strong>
                    Navigated EU MDR and German BaFin data residency rules simultaneously, securing €8.5M in hospital contracts without legal friction.
                  </div>
                </div>
              </div>

              {/* Real Buyer Quote */}
              <div className="p-5 rounded-2xl bg-slate-50 border-l-4 border-emerald-600 text-slate-700 italic text-sm">
                &ldquo;Pre-launch regulatory mapping ensured our cloud architecture cleared German data residency audits on the first pass, protecting €5M in signed pipeline.&rdquo;
                <span className="block mt-1 font-mono text-xs text-slate-500 font-normal not-italic">
                  — General Counsel & VP Growth, HealthTech Enterprise
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 4: VISUAL INTERACTION: INTELLIGENCE RADAR INTERFACE ── */}
      <section className="py-20 sm:py-28 bg-slate-950 text-white border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-mono font-bold uppercase mb-3">
                <Radar className="w-3.5 h-3.5" />
                Live Opportunity Radar Interface
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Country Opportunity & Regulatory Telemetry
              </h2>
              <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl">
                Inspect live opportunity scoring, territory addressable revenue sizing, regulatory governance overlays, and competitive density indices by clicking any territory.
              </p>
            </div>

            {/* Filter buttons */}
            <div className="flex items-center gap-2 bg-slate-900 p-1.5 rounded-xl border border-slate-800">
              <button
                onClick={() => setRadarFilter('all')}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono font-semibold transition-all ${radarFilter === 'all' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-white'}`}
              >
                All Markets
              </button>
              <button
                onClick={() => setRadarFilter('high-score')}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono font-semibold transition-all ${radarFilter === 'high-score' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-white'}`}
              >
                Score 90+
              </button>
              <button
                onClick={() => setRadarFilter('regulated')}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono font-semibold transition-all ${radarFilter === 'regulated' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-white'}`}
              >
                High Compliance
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Country Selector Cards */}
            <div className="lg:col-span-5 space-y-3">
              {filteredCountries.map((country) => {
                const isSelected = selectedCountry.id === country.id;
                return (
                  <div
                    key={country.id}
                    onClick={() => setSelectedCountry(country)}
                    className={`p-5 rounded-2xl cursor-pointer transition-all border ${
                      isSelected
                        ? 'bg-slate-900 border-blue-500 shadow-xl shadow-blue-500/10'
                        : 'bg-slate-900/50 border-slate-800 hover:border-slate-700 hover:bg-slate-900/80'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <MapPin className={`w-4 h-4 ${isSelected ? 'text-blue-400' : 'text-slate-500'}`} />
                        <h4 className="font-bold text-white text-base">{country.name}</h4>
                      </div>
                      <span className="font-mono text-xs px-2.5 py-1 rounded-md bg-blue-500/10 text-blue-400 border border-blue-500/20 font-bold">
                        Score: {country.score}/100
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-xs text-slate-400 font-mono">
                      <span>{country.region}</span>
                      <span className="text-slate-300">SOM: {country.som}</span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Radar Telemetry Cockpit */}
            <div className="lg:col-span-7 bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />

              <div className="flex items-center justify-between border-b border-slate-800 pb-5 mb-6">
                <div>
                  <div className="text-xs font-mono text-blue-400 uppercase tracking-wider mb-1">
                    {selectedCountry.region} Telemetry Dossier
                  </div>
                  <h3 className="text-2xl font-black text-white">{selectedCountry.name}</h3>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-black font-mono text-emerald-400">
                    {selectedCountry.score}<span className="text-base text-slate-500 font-normal">/100</span>
                  </div>
                  <div className="text-[10px] font-mono uppercase text-slate-400">Expansion Index</div>
                </div>
              </div>

              {/* Sizing Metrics */}
              <div className="grid grid-cols-3 gap-3 mb-6">
                <div className="bg-slate-950 p-4 rounded-xl border border-slate-800/80">
                  <div className="text-[11px] font-mono text-slate-500 uppercase mb-1">Country TAM</div>
                  <div className="text-xl font-bold font-mono text-white">{selectedCountry.tam}</div>
                </div>
                <div className="bg-slate-950 p-4 rounded-xl border border-slate-800/80">
                  <div className="text-[11px] font-mono text-slate-500 uppercase mb-1">Serviceable SAM</div>
                  <div className="text-xl font-bold font-mono text-blue-400">{selectedCountry.sam}</div>
                </div>
                <div className="bg-slate-950 p-4 rounded-xl border border-slate-800/80">
                  <div className="text-[11px] font-mono text-slate-500 uppercase mb-1">Year-1 SOM</div>
                  <div className="text-xl font-bold font-mono text-emerald-400">{selectedCountry.som}</div>
                </div>
              </div>

              {/* Detailed Breakdown */}
              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-xs font-mono uppercase text-slate-400 flex items-center gap-2">
                      <Shield className="w-3.5 h-3.5 text-blue-400" />
                      Regulatory Framework & Data Residency
                    </span>
                    <span className={`text-[10px] font-mono px-2 py-0.5 rounded font-bold ${
                      selectedCountry.regStatus === 'Green' ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30' :
                      selectedCountry.regStatus === 'Amber' ? 'bg-amber-500/10 text-amber-400 border border-amber-500/30' :
                      'bg-purple-500/10 text-purple-400 border border-purple-500/30'
                    }`}>
                      {selectedCountry.regStatus}
                    </span>
                  </div>
                  <p className="text-sm text-slate-200 font-sans">{selectedCountry.regFramework}</p>
                </div>

                <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-xs font-mono uppercase text-slate-400 flex items-center gap-2">
                      <Crosshair className="w-3.5 h-3.5 text-purple-400" />
                      Competitive Incumbent Density
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300 font-bold">
                      {selectedCountry.incumbentDensity}
                    </span>
                  </div>
                  <p className="text-sm text-slate-200 font-sans">{selectedCountry.primaryIncumbent}</p>
                </div>

                <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-xs font-mono uppercase text-slate-400 flex items-center gap-2">
                      <DollarSign className="w-3.5 h-3.5 text-emerald-400" />
                      Unit Economics & Price Realization
                    </span>
                    <span className="text-xs font-mono text-emerald-400 font-bold">
                      {selectedCountry.marginPotential}
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 font-sans">
                    Validated through local enterprise willingness-to-pay interviews and regional purchasing-power calibration.
                  </p>
                </div>
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
              Empirical Validation Outcomes
            </h2>
            <p className="text-base sm:text-lg text-slate-600">
              Verified outcomes across international enterprise expansions guided by our market intelligence practice.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 text-center">
              <div className="text-4xl sm:text-5xl font-black text-slate-900 font-mono tracking-tight mb-2">
                60-75%
              </div>
              <div className="h-1 w-12 bg-blue-600 mx-auto mb-4 rounded-full" />
              <p className="text-sm font-semibold text-slate-800 mb-1">ROI Improvement</p>
              <p className="text-xs text-slate-600">Achieved via unit-economic territory selection over macro GDP chasing.</p>
            </div>

            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 text-center">
              <div className="text-4xl sm:text-5xl font-black text-slate-900 font-mono tracking-tight mb-2">
                &lt;15%
              </div>
              <div className="h-1 w-12 bg-indigo-600 mx-auto mb-4 rounded-full" />
              <p className="text-sm font-semibold text-slate-800 mb-1">Forecast Variance</p>
              <p className="text-xs text-slate-600">Tight variance between modeled territory revenue and Year-1 contracted reality.</p>
            </div>

            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 text-center">
              <div className="text-4xl sm:text-5xl font-black text-slate-900 font-mono tracking-tight mb-2">
                25-40%
              </div>
              <div className="h-1 w-12 bg-purple-600 mx-auto mb-4 rounded-full" />
              <p className="text-sm font-semibold text-slate-800 mb-1">Win-Rate Increase</p>
              <p className="text-xs text-slate-600">Lift against entrenched domestic incumbents through competitive dissection.</p>
            </div>

            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 text-center">
              <div className="text-4xl sm:text-5xl font-black text-slate-900 font-mono tracking-tight mb-2">
                100%
              </div>
              <div className="h-1 w-12 bg-emerald-600 mx-auto mb-4 rounded-full" />
              <p className="text-sm font-semibold text-slate-800 mb-1">Launch Compliance</p>
              <p className="text-xs text-slate-600">Zero post-launch regulatory notices, contract strandings, or jurisdiction penalties.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 6: RELATED CAPABILITIES (CROSS-LINKS) ── */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-3">
              Market Intelligence Informs Every Other Pillar
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Intelligence outputs feed directly into downstream market entry, partner ecosystems, and regulatory RevOps.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link
              to="/global-acceleration/cross-border-strategy"
              className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-blue-500 hover:shadow-lg transition-all group block"
            >
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                <Compass className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-lg mb-2 group-hover:text-blue-600 transition-colors flex items-center justify-between">
                <span>Cross-Border Strategy</span>
                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 group-hover:text-blue-600 transition-all" />
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Uses intelligence data to design optimal entry models, deep cultural localization, and purchasing-power adjusted pricing tiers.
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
                Uses competitive incumbent mapping to pinpoint unaligned distributors and orchestrate co-sell alliance networks.
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
                Applies regulatory intelligence to build proactive data residency pipelines, localized tax architectures, and attribution models.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* ── SECTION 7: FINAL CTA + INTAKE FORM ── */}
      <section id="intake" className="py-20 sm:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono font-bold uppercase mb-4">
              CONFIDENTIAL INTAKE
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4 font-heading">
              Ready to Validate Your International Markets?
            </h2>
            <p className="text-slate-600 text-base max-w-xl mx-auto">
              Request a confidential Market Intelligence Audit. Receive a territory opportunity dossier and unit-economic assessment within 24 business hours.
            </p>
          </div>

          <div className="p-8 sm:p-12 rounded-3xl bg-white border border-slate-200 shadow-xl">
            <GlobalExpansionIntakeForm
              pageContext="Market Intelligence Audit"
              defaultChallenge="Validating country TAM and unit economics before investing"
              buttonText="Run Market Intelligence Audit"
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
