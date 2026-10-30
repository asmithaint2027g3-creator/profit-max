import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Globe, ArrowRight, ChevronRight, Activity, ShieldCheck,
  TrendingUp, BarChart3, Layers, Cpu, Compass, CheckCircle2,
  AlertCircle, Users, Bot, Sparkles, Building2, HelpCircle,
  MapPin, Zap, ArrowUpRight, DollarSign, Network, Target, Briefcase,
  Scale, FileText, Check, ShieldAlert, Sliders, ExternalLink,
  ChevronDown, Search, Filter
} from 'lucide-react';
import { allGlobalAccelerationPages } from './data';
import { GlobalExpansionIntakeForm } from '../../components/forms/GlobalExpansionIntakeForm';

export default function GlobalAccelerationHub() {
  const [activeAreaIndex, setActiveAreaIndex] = useState(0);
  const [selectedObjective, setSelectedObjective] = useState<string>('market');
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  useEffect(() => {
    document.title = 'Global Business Acceleration: Overview & Capability Navigator | ProfitMachines';
    window.scrollTo(0, 0);
  }, []);

  const selectedArea = allGlobalAccelerationPages[activeAreaIndex];

  // Starting point decision pathways
  const startingPointPathways = [
    {
      id: 'market',
      title: 'Choosing a Foreign Market',
      priorityQuestion: 'Which international territories have the highest demand and lowest regulatory risk?',
      recommendedArea: 'Global Market Access',
      supportingHeading: 'Expansion Intelligence',
      route: '/global-acceleration/market-access',
      explanation: 'Evaluate country opportunities, bottom-up addressability (TAM/SAM/SOM), competitive positioning, and entry feasibility before allocating capital.',
      keyCapabilityLink: '/global-acceleration/market-access#country-opportunity-analysis'
    },
    {
      id: 'buyers',
      title: 'Finding Buyers & Distributors',
      priorityQuestion: 'Where are the active commercial buyers and credentialed channel distributors?',
      recommendedArea: 'Global Demand Networks',
      supportingHeading: 'Demand Ecosystems',
      route: '/global-acceleration/demand-networks',
      explanation: 'Systematically discover verified corporate buyers, customs importers, regional dealers, and institutional procurement networks along active commercial corridors.',
      keyCapabilityLink: '/global-acceleration/demand-networks#distributor-discovery'
    },
    {
      id: 'export',
      title: 'Entering Markets via Exports',
      priorityQuestion: 'How do we assess readiness and build a scalable export sales program?',
      recommendedArea: 'Export Growth Engine',
      supportingHeading: 'Export Growth Engine',
      route: '/global-acceleration/export-growth-engine',
      explanation: 'Assess operational export readiness, structure localized GTM pricing ladders, acquire international buyers, and run accountable 90-day export revenue campaigns.',
      keyCapabilityLink: '/global-acceleration/export-growth-engine#export-readiness-assessment'
    },
    {
      id: 'partners',
      title: 'Developing Strategic Alliances',
      priorityQuestion: 'How do we scale indirectly through master distributors, VARs, and alliances?',
      recommendedArea: 'Strategic Partner Ecosystems',
      supportingHeading: 'Growth Alliances',
      route: '/global-acceleration/partner-ecosystems',
      explanation: 'Design multi-tier channel programs, structure binding master distribution agreements with minimum quotas, and establish bilateral corporate co-selling alliances.',
      keyCapabilityLink: '/global-acceleration/partner-ecosystems#channel-partner-networks'
    },
    {
      id: 'supply',
      title: 'Sourcing & Supply Resilience',
      priorityQuestion: 'How do we optimize contract manufacturing, freight corridors, and supplier risk?',
      recommendedArea: 'Global Supply Networks',
      supportingHeading: 'Supply Networks',
      route: '/global-acceleration/supply-networks',
      explanation: 'Discover verified component suppliers, audit contract manufacturers, optimize multi-modal logistics networks, and stress-test single-source vulnerabilities.',
      keyCapabilityLink: '/global-acceleration/supply-networks#supplier-discovery'
    },
    {
      id: 'revenue',
      title: 'Scaling Regional RevOps',
      priorityQuestion: 'How do we unify multi-territory pipeline visibility and sales execution?',
      recommendedArea: 'Global Revenue Engines',
      supportingHeading: 'Revenue Infrastructure',
      route: '/global-acceleration/revenue-engines',
      explanation: 'Deploy balanced territory planning, multilingual SDR desks, standardized MEDDPICC stage-gate pipeline governance, and international customer success.',
      keyCapabilityLink: '/global-acceleration/revenue-engines#multi-country-gtm-design'
    },
    {
      id: 'finance',
      title: 'Expansion Capital & Trade Finance',
      priorityQuestion: 'What trade credit lines, export guarantees, and treasury rails fund our growth?',
      recommendedArea: 'Global Capital & Finance',
      supportingHeading: 'Financial Infrastructure',
      route: '/global-acceleration/capital-finance',
      explanation: 'Evaluate non-dilutive trade finance facilities, sovereign Export Credit Agency (ECA) insurance, international correspondent banking, and FX risk hedging.',
      keyCapabilityLink: '/global-acceleration/capital-finance#trade-finance-solutions'
    },
    {
      id: 'ai',
      title: 'AI-Assisted Expansion Systems',
      priorityQuestion: 'How can AI accelerate cross-border research and workflows safely?',
      recommendedArea: 'AI-Powered Expansion',
      supportingHeading: 'Autonomous Expansion Systems',
      route: '/global-acceleration/ai-powered-expansion',
      explanation: 'Explore retrieval-augmented market intelligence, algorithmic buyer discovery, localized drafting agents, and executive telemetry with human-in-the-loop governance.',
      keyCapabilityLink: '/global-acceleration/ai-powered-expansion#ai-market-intelligence'
    }
  ];

  const activePathway = startingPointPathways.find(p => p.id === selectedObjective) || startingPointPathways[0];

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-100 selection:text-blue-900">

      {/* ── SECTION 01: EXECUTIVE HERO ── */}
      <section className="relative pt-16 pb-16 sm:pt-24 sm:pb-28 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute inset-0 opacity-[0.22]" style={{ backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.07) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.07) 1px, transparent 1px)', backgroundSize: '4rem 4rem' }} />
          <div className="absolute top-0 right-1/4 w-[700px] h-[700px] bg-blue-600/15 rounded-full blur-[150px]" />
          <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-indigo-600/12 rounded-full blur-[130px]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/15 border border-blue-400/30 text-blue-300 text-xs font-bold tracking-widest uppercase font-mono mb-4">
                <Globe className="w-3.5 h-3.5 text-blue-400" />
                <span>GLOBAL BUSINESS ACCELERATION</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.12] mb-5 font-heading">
                Turn Global Expansion into a{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-indigo-300">
                  Structured Growth System.
                </span>
              </h1>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-6">
                International growth involves far more than picking a country on a map. Organizations must understand true market demand, validate commercial opportunities, identify credentialed buyers and partners, evaluate operational supply constraints, navigate financing requirements, and coordinate revenue execution across jurisdictions. ProfitMachines brings these interconnected disciplines into a single deterministic expansion architecture.
              </p>

              {/* Target Audience Line */}
              <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 text-xs text-slate-300 mb-8 space-y-1">
                <div className="text-[11px] font-mono font-bold text-blue-400 uppercase tracking-wider">
                  Engineered for Enterprise Leaders:
                </div>
                <div className="text-slate-300 leading-relaxed">
                  CEOs, Chief Strategy Officers, Heads of International Expansion, Chief Commercial Officers, and Global Supply Leaders evaluating cross-border scale.
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="#capabilities-overview"
                  className="px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 active:bg-blue-700 text-white font-bold text-sm transition-all shadow-lg shadow-blue-600/30 inline-flex items-center gap-2 group cursor-pointer"
                >
                  <span>Explore Expansion Capabilities</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>

                <a
                  href="#consultation"
                  className="px-6 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-200 font-bold text-sm transition-all inline-flex items-center gap-2 cursor-pointer"
                >
                  <span>Discuss Your Expansion Strategy</span>
                  <ArrowUpRight className="w-4 h-4 text-slate-400" />
                </a>
              </div>
            </div>

            {/* Right Hero Visual: Connected Enterprise Expansion System (NO PEOPLE PHOTOGRAPHY) */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl border border-slate-800 bg-slate-900/90 p-6 shadow-2xl relative overflow-hidden">
                <div className="flex items-center justify-between pb-3.5 border-b border-slate-800 mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-blue-500 animate-pulse" />
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-300">
                      Cross-Border Expansion Mesh
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-400/20 font-bold">
                    8 Interconnected Areas
                  </span>
                </div>

                {/* SVG Visualizing Connected Expansion Engine */}
                <div className="py-2 text-center">
                  <svg className="w-full h-44 text-blue-500" viewBox="0 0 380 180" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* Background trade lines */}
                    <path d="M 40 90 Q 190 20 340 90" stroke="#334155" strokeWidth="1" strokeDasharray="3 3" />
                    <path d="M 40 90 Q 190 160 340 90" stroke="#334155" strokeWidth="1" strokeDasharray="3 3" />
                    <line x1="40" y1="90" x2="340" y2="90" stroke="#1e293b" strokeWidth="1.5" />

                    {/* Nodes representing the expansion pillars */}
                    {/* Node 1: Market Access */}
                    <circle cx="50" cy="90" r="18" fill="#1e3a8a" stroke="#60a5fa" strokeWidth="2" />
                    <text x="50" y="93" fill="#ffffff" fontSize="8" fontWeight="bold" textAnchor="middle">01</text>
                    <text x="50" y="120" fill="#94a3b8" fontSize="7.5" fontWeight="600" textAnchor="middle">Market Access</text>

                    {/* Node 2: Demand */}
                    <circle cx="105" cy="45" r="15" fill="#312e81" stroke="#818cf8" strokeWidth="1.5" />
                    <text x="105" y="48" fill="#ffffff" fontSize="7.5" fontWeight="bold" textAnchor="middle">02</text>
                    <text x="105" y="24" fill="#94a3b8" fontSize="7" textAnchor="middle">Demand</text>

                    {/* Node 3: Export */}
                    <circle cx="160" cy="85" r="16" fill="#064e3b" stroke="#34d399" strokeWidth="1.5" />
                    <text x="160" y="88" fill="#ffffff" fontSize="7.5" fontWeight="bold" textAnchor="middle">03</text>
                    <text x="160" y="112" fill="#94a3b8" fontSize="7" textAnchor="middle">Export</text>

                    {/* Node 4: Partners */}
                    <circle cx="190" cy="35" r="15" fill="#0c4a6e" stroke="#38bdf8" strokeWidth="1.5" />
                    <text x="190" y="38" fill="#ffffff" fontSize="7.5" fontWeight="bold" textAnchor="middle">04</text>
                    <text x="190" y="18" fill="#94a3b8" fontSize="7" textAnchor="middle">Partners</text>

                    {/* Node 5: Supply */}
                    <circle cx="230" cy="135" r="15" fill="#78350f" stroke="#fbbf24" strokeWidth="1.5" />
                    <text x="230" y="138" fill="#ffffff" fontSize="7.5" fontWeight="bold" textAnchor="middle">05</text>
                    <text x="230" y="160" fill="#94a3b8" fontSize="7" textAnchor="middle">Supply</text>

                    {/* Node 6: Revenue */}
                    <circle cx="265" cy="80" r="16" fill="#164e63" stroke="#22d3ee" strokeWidth="1.5" />
                    <text x="265" y="83" fill="#ffffff" fontSize="7.5" fontWeight="bold" textAnchor="middle">06</text>
                    <text x="265" y="106" fill="#94a3b8" fontSize="7" textAnchor="middle">RevOps</text>

                    {/* Node 7: Finance */}
                    <circle cx="300" cy="35" r="15" fill="#4c1d95" stroke="#a78bfa" strokeWidth="1.5" />
                    <text x="300" y="38" fill="#ffffff" fontSize="7.5" fontWeight="bold" textAnchor="middle">07</text>
                    <text x="300" y="18" fill="#94a3b8" fontSize="7" textAnchor="middle">Finance</text>

                    {/* Node 8: AI Expansion */}
                    <circle cx="340" cy="90" r="18" fill="#065f46" stroke="#10b981" strokeWidth="2" />
                    <text x="340" y="93" fill="#ffffff" fontSize="8" fontWeight="bold" textAnchor="middle">08</text>
                    <text x="340" y="120" fill="#94a3b8" fontSize="7.5" fontWeight="600" textAnchor="middle">AI Systems</text>

                    {/* Interconnecting dynamic arcs */}
                    <path d="M 50 90 L 105 45 L 190 35 L 265 80 L 340 90" stroke="#38bdf8" strokeWidth="1.5" />
                    <path d="M 50 90 L 160 85 L 230 135 L 340 90" stroke="#34d399" strokeWidth="1.5" />
                  </svg>
                </div>

                <div className="grid grid-cols-2 gap-2.5 pt-3 border-t border-slate-800 text-xs text-slate-300">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                    <span>8 Primary Capabilities</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                    <span>64 Detailed Modules</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                    <span>Zero People Photos</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                    <span>Empirical Evidence Only</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 02: THE GLOBAL EXPANSION CHALLENGE (6 SPECIFIC CHALLENGES) ── */}
      <section className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono text-blue-600 uppercase tracking-widest font-bold">
              The Reality of Cross-Border Growth
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1 mb-3 font-heading">
              Global Growth Creates Opportunities. Fragmented Execution Creates Friction.
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Entering a foreign market involves dozens of interconnected dependencies. A business may identify a promising country but lack validated buyer demand. It may find distributors without partner qualification. Or it may generate orders without supply fulfillment resilience. Examine the six core friction points:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {/* Challenge 1 */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-2 border-b border-slate-100 mb-3">
                  <span className="text-[10px] font-mono font-bold uppercase text-blue-600 bg-blue-50 px-2 py-0.5 rounded">Friction 01</span>
                  <AlertCircle className="w-4 h-4 text-amber-500" />
                </div>
                <h3 className="text-base font-bold text-slate-900 font-heading mb-2">
                  Market Selection Without Evidence
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-3">
                  Comparing countries using high-level GDP headlines, generic macro reports, or board member travel intuition that fails to reflect actual product accessibility.
                </p>
                <div className="text-xs text-slate-800 bg-slate-50 p-2.5 rounded-lg border border-slate-200 mb-3">
                  <strong>Commercial Consequence:</strong> Capital committed to markets that appear attractive top-down but are blocked by incumbent lock-ins and high friction.
                </div>
              </div>
              <div className="text-xs font-semibold text-blue-700">
                Response: Structured Market Access & TAM/SAM/SOM assessment.
              </div>
            </div>

            {/* Challenge 2 */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-2 border-b border-slate-100 mb-3">
                  <span className="text-[10px] font-mono font-bold uppercase text-blue-600 bg-blue-50 px-2 py-0.5 rounded">Friction 02</span>
                  <AlertCircle className="w-4 h-4 text-amber-500" />
                </div>
                <h3 className="text-base font-bold text-slate-900 font-heading mb-2">
                  Fragmented Buyer & Channel Discovery
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-3">
                  Prospective enterprise buyers, importers, and regional distributors are difficult to locate and qualify across foreign languages and registries.
                </p>
                <div className="text-xs text-slate-800 bg-slate-50 p-2.5 rounded-lg border border-slate-200 mb-3">
                  <strong>Commercial Consequence:</strong> Sales reps waste months pitching low-fit contacts while genuine demand corridors remain unmapped.
                </div>
              </div>
              <div className="text-xs font-semibold text-blue-700">
                Response: Demand Ecosystem mapping & verified buyer discovery.
              </div>
            </div>

            {/* Challenge 3 */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-2 border-b border-slate-100 mb-3">
                  <span className="text-[10px] font-mono font-bold uppercase text-blue-600 bg-blue-50 px-2 py-0.5 rounded">Friction 03</span>
                  <AlertCircle className="w-4 h-4 text-amber-500" />
                </div>
                <h3 className="text-base font-bold text-slate-900 font-heading mb-2">
                  Uncoordinated Export Execution
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-3">
                  Treating exporting as ad-hoc order fulfillment without formal export-readiness audits, localized pricing ladders, or structured outbound acquisition.
                </p>
                <div className="text-xs text-slate-800 bg-slate-50 p-2.5 rounded-lg border border-slate-200 mb-3">
                  <strong>Commercial Consequence:</strong> Unpredictable order volume, stranded customs shipments, and failure to build defensible market share.
                </div>
              </div>
              <div className="text-xs font-semibold text-blue-700">
                Response: Export Growth Engine & 90-day revenue programs.
              </div>
            </div>

            {/* Challenge 4 */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-2 border-b border-slate-100 mb-3">
                  <span className="text-[10px] font-mono font-bold uppercase text-blue-600 bg-blue-50 px-2 py-0.5 rounded">Friction 04</span>
                  <AlertCircle className="w-4 h-4 text-amber-500" />
                </div>
                <h3 className="text-base font-bold text-slate-900 font-heading mb-2">
                  Weak Partner & Supply Network Visibility
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-3">
                  Lack of structured governance over foreign distributors combined with opaque single-region supply chain dependencies.
                </p>
                <div className="text-xs text-slate-800 bg-slate-50 p-2.5 rounded-lg border border-slate-200 mb-3">
                  <strong>Commercial Consequence:</strong> Partners park products without selling, while component supply shocks paralyze fulfillment.
                </div>
              </div>
              <div className="text-xs font-semibold text-blue-700">
                Response: Strategic Partner Ecosystems & Global Supply Networks.
              </div>
            </div>

            {/* Challenge 5 */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-2 border-b border-slate-100 mb-3">
                  <span className="text-[10px] font-mono font-bold uppercase text-blue-600 bg-blue-50 px-2 py-0.5 rounded">Friction 05</span>
                  <AlertCircle className="w-4 h-4 text-amber-500" />
                </div>
                <h3 className="text-base font-bold text-slate-900 font-heading mb-2">
                  Unscalable Regional Revenue Operations
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-3">
                  Sales territories, CRM pipelines, and customer success managed inconsistently across fragmented foreign subsidiaries.
                </p>
                <div className="text-xs text-slate-800 bg-slate-50 p-2.5 rounded-lg border border-slate-200 mb-3">
                  <strong>Commercial Consequence:</strong> Leadership loses forecast visibility, rep productivity diverges, and international customers churn.
                </div>
              </div>
              <div className="text-xs font-semibold text-blue-700">
                Response: Unified Global Revenue Engines & RevOps architecture.
              </div>
            </div>

            {/* Challenge 6 */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-2 border-b border-slate-100 mb-3">
                  <span className="text-[10px] font-mono font-bold uppercase text-blue-600 bg-blue-50 px-2 py-0.5 rounded">Friction 06</span>
                  <AlertCircle className="w-4 h-4 text-amber-500" />
                </div>
                <h3 className="text-base font-bold text-slate-900 font-heading mb-2">
                  Financial & Working Capital Blindspots
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-3">
                  Underestimating cross-border cash conversion cycles, foreign buyer default risks, and multi-currency foreign exchange drag.
                </p>
                <div className="text-xs text-slate-800 bg-slate-50 p-2.5 rounded-lg border border-slate-200 mb-3">
                  <strong>Commercial Consequence:</strong> Trapped working capital starves the business, while unhedged currency swings erode profit.
                </div>
              </div>
              <div className="text-xs font-semibold text-blue-700">
                Response: Global Capital & Finance and trade credit advisory.
              </div>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-blue-50 border border-blue-200 text-center text-xs sm:text-sm text-blue-900 font-medium">
            <strong>Core Principle:</strong> Global expansion works better when market intelligence, demand discovery, operational readiness, and revenue execution inform one another continuously.
          </div>
        </div>
      </section>

      {/* ── SECTION 03: THE GLOBAL BUSINESS ACCELERATION FRAMEWORK (5 CONNECTED STAGES) ── */}
      <section className="py-16 sm:py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono text-blue-600 uppercase tracking-widest font-bold">
              The Architectural Blueprint
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1 mb-2 font-heading">
              One Connected Approach to Global Expansion
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Global expansion is not a single decision or disconnected checklist. Our five-stage framework connects strategic intelligence to operational readiness, commercial execution, and continuous measurement:
            </p>
          </div>

          {/* 5-Stage Responsive Framework Diagram */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-3 mb-8">
            {/* Stage 1 */}
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col justify-between">
              <div>
                <div className="text-[10px] font-mono font-bold uppercase text-blue-600 mb-1">Stage 01</div>
                <h3 className="text-base font-bold text-slate-900 font-heading mb-1.5">Understand</h3>
                <p className="text-xs text-slate-600 leading-snug mb-3">
                  Assess target markets, competitive moats, regulatory burden, and risk-adjusted entry feasibility.
                </p>
              </div>
              <div className="pt-2 border-t border-slate-200 text-[11px] font-mono text-slate-700 font-medium">
                • Global Market Access<br />• AI-Powered Expansion
              </div>
            </div>

            {/* Stage 2 */}
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col justify-between">
              <div>
                <div className="text-[10px] font-mono font-bold uppercase text-blue-600 mb-1">Stage 02</div>
                <h3 className="text-base font-bold text-slate-900 font-heading mb-1.5">Discover</h3>
                <p className="text-xs text-slate-600 leading-snug mb-3">
                  Identify enterprise buyers, master distributors, procurement networks, and demand corridors.
                </p>
              </div>
              <div className="pt-2 border-t border-slate-200 text-[11px] font-mono text-slate-700 font-medium">
                • Global Demand Networks<br />• Strategic Alliances
              </div>
            </div>

            {/* Stage 3 */}
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col justify-between">
              <div>
                <div className="text-[10px] font-mono font-bold uppercase text-blue-600 mb-1">Stage 03</div>
                <h3 className="text-base font-bold text-slate-900 font-heading mb-1.5">Prepare & Enter</h3>
                <p className="text-xs text-slate-600 leading-snug mb-3">
                  Audit export readiness, contract manufacturers, trade finance facilities, and shipping lanes.
                </p>
              </div>
              <div className="pt-2 border-t border-slate-200 text-[11px] font-mono text-slate-700 font-medium">
                • Export Growth Engine<br />• Global Supply Networks<br />• Global Capital & Finance
              </div>
            </div>

            {/* Stage 4 */}
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col justify-between">
              <div>
                <div className="text-[10px] font-mono font-bold uppercase text-blue-600 mb-1">Stage 04</div>
                <h3 className="text-base font-bold text-slate-900 font-heading mb-1.5">Coordinate & Scale</h3>
                <p className="text-xs text-slate-600 leading-snug mb-3">
                  Deploy regional hubs, multi-language SDR desks, pipeline stage gates, and customer success.
                </p>
              </div>
              <div className="pt-2 border-t border-slate-200 text-[11px] font-mono text-slate-700 font-medium">
                • Global Revenue Engines<br />• Partner Ecosystems
              </div>
            </div>

            {/* Stage 5 */}
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col justify-between">
              <div>
                <div className="text-[10px] font-mono font-bold uppercase text-blue-600 mb-1">Stage 05</div>
                <h3 className="text-base font-bold text-slate-900 font-heading mb-1.5">Measure & Refine</h3>
                <p className="text-xs text-slate-600 leading-snug mb-3">
                  Inspect pipeline telemetry, stage velocity, customer retention, and external risk early-warnings.
                </p>
              </div>
              <div className="pt-2 border-t border-slate-200 text-[11px] font-mono text-slate-700 font-medium">
                • Executive Telemetry<br />• All 8 Capability Areas
              </div>
            </div>
          </div>

          <div className="text-center text-xs font-mono text-slate-500">
            Guiding Operational Principle: Start with the business objective. Select the relevant capabilities. Validate the evidence. Coordinate execution. Measure what changes.
          </div>
        </div>
      </section>

      {/* ── SECTION 04: EXPLORE THE EIGHT CAPABILITIES (TWO-PANEL NAVIGATOR & CARDS) ── */}
      <section id="capabilities-overview" className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <span className="text-xs font-mono text-blue-600 uppercase tracking-widest font-bold">
              Primary Capability Navigator
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1 mb-2 font-heading">
              Explore the Eight Global Business Acceleration Capabilities
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Every organization enters international expansion from a distinct starting point. Use our two-panel navigator to inspect any capability area and click through to its dedicated deep-dive page:
            </p>
          </div>

          {/* TWO-PANEL INTERACTIVE NAVIGATION CONTAINER */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start mb-14">
            
            {/* LEFT PANEL: 8 EXACT PRIMARY LABELS */}
            <div className="lg:col-span-4 bg-white border border-slate-200 rounded-2xl p-3 shadow-xs space-y-1">
              <div className="px-3 py-1.5 flex items-center justify-between text-[11px] font-mono font-bold uppercase tracking-wider text-slate-400 border-b border-slate-100 mb-1">
                <span>Primary Capabilities</span>
                <span>01–08</span>
              </div>

              {allGlobalAccelerationPages.map((page, idx) => {
                const isActive = activeAreaIndex === idx;

                return (
                  <button
                    key={page.id}
                    onClick={() => setActiveAreaIndex(idx)}
                    className={`w-full text-left py-2.5 px-3 rounded-xl border transition-all duration-150 flex items-center justify-between group cursor-pointer ${
                      isActive
                        ? 'bg-slate-900 text-white border-slate-900 shadow-sm'
                        : 'bg-white hover:bg-slate-50 text-slate-800 border-slate-200/80 hover:border-slate-300'
                    }`}
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <span className={`w-6 h-6 rounded-md flex items-center justify-center font-mono font-bold text-xs shrink-0 ${
                        isActive ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-600'
                      }`}>
                        {page.pageNumber}
                      </span>
                      <span className={`text-xs sm:text-[13px] font-bold truncate ${isActive ? 'text-white' : 'text-slate-900'}`}>
                        {page.primaryNavLabel}
                      </span>
                    </div>

                    <ChevronRight className={`w-3.5 h-3.5 shrink-0 transition-transform ${
                      isActive ? 'text-blue-400 translate-x-0.5' : 'text-slate-400 group-hover:translate-x-0.5'
                    }`} />
                  </button>
                );
              })}
            </div>

            {/* RIGHT PANEL: SELECTED AREA CAPABILITY MODULES & OUTCOMES */}
            <div className="lg:col-span-8 bg-white border border-slate-200 rounded-2xl p-6 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3.5 border-b border-slate-100 mb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider">
                        {selectedArea.contentHeading}
                      </span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 font-heading">
                      {selectedArea.primaryNavLabel}
                    </h3>
                  </div>

                  <Link
                    to={selectedArea.canonicalPath}
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold transition-colors shrink-0 self-start sm:self-auto shadow-xs"
                  >
                    <span>Open Dedicated Page</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">
                  {selectedArea.heroDescription}
                </p>

                {/* 8 Capability Modules Grid linking directly to anchors */}
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-2.5">
                    <h4 className="text-[11px] font-mono uppercase tracking-wider text-slate-400 font-bold">
                      Eight Core Capability Modules (Click to jump to module):
                    </h4>
                    <span className="text-[10px] font-mono text-slate-400 bg-slate-100 px-2 py-0.5 rounded">
                      8 of 8 Modules Active
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                    {selectedArea.capabilities.map((cap) => (
                      <Link
                        key={cap.id}
                        to={`${selectedArea.canonicalPath}#${cap.id}`}
                        className="p-3 rounded-xl bg-slate-50/70 border border-slate-200/80 hover:border-blue-400 hover:bg-blue-50/30 transition-all flex items-start gap-2.5 group"
                      >
                        <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                        <div className="min-w-0">
                          <h5 className="text-xs font-bold text-slate-900 group-hover:text-blue-700 transition-colors leading-snug">
                            {cap.name}
                          </h5>
                          <p className="text-[11px] text-slate-500 leading-snug mt-0.5 line-clamp-2">
                            {cap.problemAddressed}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Separate Target Business Outcomes */}
                <div className="pt-4 border-t border-slate-100">
                  <h4 className="text-[11px] font-mono uppercase tracking-wider text-slate-400 font-bold mb-2.5">
                    Business-Impact Outcomes (Separately Measured)
                  </h4>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mb-3">
                    {selectedArea.businessOutcomes.map((out, oIdx) => (
                      <div key={oIdx} className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/80">
                        <div className="text-sm sm:text-base font-extrabold text-blue-600 font-mono leading-none mb-1">
                          {out.metric}
                        </div>
                        <div className="text-xs font-bold text-slate-900 leading-tight mb-0.5">
                          {out.label}
                        </div>
                        <div className="text-[10px] text-slate-500 leading-snug line-clamp-2">
                          {out.description}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

              <div className="flex items-center justify-between pt-3 border-t border-slate-100 text-xs text-slate-500">
                <span>Direct link to full capability specifications:</span>
                <Link
                  to={selectedArea.canonicalPath}
                  className="text-blue-600 font-bold inline-flex items-center hover:underline"
                >
                  Explore Complete {selectedArea.primaryNavLabel} Page <ArrowRight className="w-3.5 h-3.5 ml-1" />
                </Link>
              </div>
            </div>

          </div>

          {/* EIGHT STANDALONE CAPABILITY CARDS (SECTION 04 COMPONENT) */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-slate-900 font-heading mb-4">
              All Eight Global Acceleration Areas at a Glance
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {allGlobalAccelerationPages.map((page) => (
                <div
                  key={page.id}
                  className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs flex flex-col justify-between hover:border-blue-400 transition-colors"
                >
                  <div>
                    <div className="flex items-center justify-between pb-2 border-b border-slate-100 mb-3">
                      <span className="text-[10px] font-mono text-slate-400">{page.contentHeading}</span>
                    </div>

                    <h4 className="text-base font-bold text-slate-900 font-heading mb-2">
                      {page.primaryNavLabel}
                    </h4>

                    <p className="text-xs text-slate-600 leading-relaxed mb-4">
                      {page.heroHeadline}
                    </p>

                    <div className="space-y-1 mb-4 text-[11px] text-slate-500">
                      <div className="font-bold text-slate-700">Core Topics:</div>
                      {page.capabilities.slice(0, 3).map((cap, cIdx) => (
                        <div key={cIdx} className="truncate">• {cap.name}</div>
                      ))}
                    </div>
                  </div>

                  <Link
                    to={page.canonicalPath}
                    className="inline-flex items-center justify-between w-full pt-3 border-t border-slate-100 text-xs font-bold text-blue-600 hover:text-blue-700 group"
                  >
                    <span>Explore {page.primaryNavLabel}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ── SECTION 05: FIND YOUR EXPANSION STARTING POINT (INTERACTIVE SELECTOR) ── */}
      <section className="py-16 sm:py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <span className="text-xs font-mono text-blue-600 uppercase tracking-widest font-bold">
              Expansion Starting Point Guide
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1 mb-2 font-heading">
              Where Should Your Expansion Journey Begin?
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              Select your organization's primary immediate growth priority to receive an architectural recommendation on which capability area to activate first:
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Priority Buttons */}
            <div className="lg:col-span-5 space-y-2">
              <span className="text-[11px] font-mono uppercase font-bold text-slate-400 block mb-1">
                Select Your Immediate Priority:
              </span>
              {startingPointPathways.map((pathway) => (
                <button
                  key={pathway.id}
                  onClick={() => setSelectedObjective(pathway.id)}
                  className={`w-full text-left p-3.5 rounded-xl border transition-all text-xs font-bold flex items-center justify-between cursor-pointer ${
                    selectedObjective === pathway.id
                      ? 'bg-blue-600 text-white border-blue-600 shadow-sm'
                      : 'bg-slate-50 hover:bg-slate-100 text-slate-800 border-slate-200'
                  }`}
                >
                  <span>{pathway.title}</span>
                  <ChevronRight className={`w-3.5 h-3.5 ${selectedObjective === pathway.id ? 'text-white' : 'text-slate-400'}`} />
                </button>
              ))}
            </div>

            {/* Right Recommendation Card */}
            <div className="lg:col-span-7 bg-slate-50 border border-slate-200 rounded-2xl p-6 shadow-sm">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-blue-100 text-blue-800">
                  Recommended Starting Capability
                </span>
                <span className="text-[10px] font-mono text-slate-400">
                  {activePathway.supportingHeading}
                </span>
              </div>

              <h3 className="text-xl font-extrabold text-slate-900 font-heading mb-2">
                {activePathway.recommendedArea}
              </h3>

              <p className="text-sm font-semibold text-slate-800 mb-4 italic">
                "{activePathway.priorityQuestion}"
              </p>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                {activePathway.explanation}
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-slate-200">
                <Link
                  to={activePathway.route}
                  className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs inline-flex items-center gap-2 transition-all shadow-xs"
                >
                  <span>Open {activePathway.recommendedArea}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>

                <Link
                  to={activePathway.keyCapabilityLink}
                  className="px-4 py-2.5 rounded-xl bg-white hover:bg-slate-100 border border-slate-200 text-slate-700 font-bold text-xs inline-flex items-center gap-2 transition-all"
                >
                  <span>Inspect Key Capability Module</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 06: HOW THE EXPANSION JOURNEY WORKS (6 PRACTICAL STEPS) ── */}
      <section className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono text-blue-600 uppercase tracking-widest font-bold">
              Execution Architecture
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1 mb-2 font-heading">
              From Market Opportunity to Coordinated Execution
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              International growth involves an accountable sequence of decisions. Review the 6-step operational journey that guides enterprises from initial mandate to sustained multi-country scale:
            </p>
          </div>

          <div className="space-y-4">
            {/* Step 1 */}
            <div className="bg-white rounded-2xl p-5 border border-slate-200/90 shadow-xs grid grid-cols-1 lg:grid-cols-12 gap-4 items-center">
              <div className="lg:col-span-3 flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-blue-600 text-white font-mono font-bold flex items-center justify-center text-xs shrink-0">01</span>
                <div>
                  <h3 className="text-sm font-bold text-slate-900 font-heading">Define Expansion Objective</h3>
                  <span className="text-[10px] font-mono text-slate-400">Capability: Global Market Access</span>
                </div>
              </div>
              <div className="lg:col-span-5 text-xs text-slate-600">
                Establish the commercial reason for expansion, product boundary, target growth rate, capital tolerance, and explicit decision criteria.
              </div>
              <div className="lg:col-span-4 text-xs font-mono text-slate-500 bg-slate-50 p-2.5 rounded-lg border border-slate-200">
                Output: Expansion Brief & Decision Criteria
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-white rounded-2xl p-5 border border-slate-200/90 shadow-xs grid grid-cols-1 lg:grid-cols-12 gap-4 items-center">
              <div className="lg:col-span-3 flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-blue-600 text-white font-mono font-bold flex items-center justify-center text-xs shrink-0">02</span>
                <div>
                  <h3 className="text-sm font-bold text-slate-900 font-heading">Evaluate Opportunities</h3>
                  <span className="text-[10px] font-mono text-slate-400">Capability: Global Market Access</span>
                </div>
              </div>
              <div className="lg:col-span-5 text-xs text-slate-600">
                Screen candidate countries against economic output, regulatory burden, and bottom-up addressable market (TAM/SAM/SOM).
              </div>
              <div className="lg:col-span-4 text-xs font-mono text-slate-500 bg-slate-50 p-2.5 rounded-lg border border-slate-200">
                Output: Country Attractiveness & Accessibility Dossier
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-white rounded-2xl p-5 border border-slate-200/90 shadow-xs grid grid-cols-1 lg:grid-cols-12 gap-4 items-center">
              <div className="lg:col-span-3 flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-blue-600 text-white font-mono font-bold flex items-center justify-center text-xs shrink-0">03</span>
                <div>
                  <h3 className="text-sm font-bold text-slate-900 font-heading">Discover & Qualify Demand</h3>
                  <span className="text-[10px] font-mono text-slate-400">Capability: Global Demand Networks</span>
                </div>
              </div>
              <div className="lg:col-span-5 text-xs text-slate-600">
                Identify active commercial importers, corporate buyers, regional distributors, and institutional procurement portals.
              </div>
              <div className="lg:col-span-4 text-xs font-mono text-slate-500 bg-slate-50 p-2.5 rounded-lg border border-slate-200">
                Output: Ranked Target Buyer & Distributor Database
              </div>
            </div>

            {/* Step 4 */}
            <div className="bg-white rounded-2xl p-5 border border-slate-200/90 shadow-xs grid grid-cols-1 lg:grid-cols-12 gap-4 items-center">
              <div className="lg:col-span-3 flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-blue-600 text-white font-mono font-bold flex items-center justify-center text-xs shrink-0">04</span>
                <div>
                  <h3 className="text-sm font-bold text-slate-900 font-heading">Assess Readiness & Debt</h3>
                  <span className="text-[10px] font-mono text-slate-400">Capability: Export Growth & Finance</span>
                </div>
              </div>
              <div className="lg:col-span-5 text-xs text-slate-600">
                Audit export documentation, contract manufacturing capacity, trade finance credit lines, and customs tariff schedules.
              </div>
              <div className="lg:col-span-4 text-xs font-mono text-slate-500 bg-slate-50 p-2.5 rounded-lg border border-slate-200">
                Output: Export Readiness Scorecard & Trade Finance Plan
              </div>
            </div>

            {/* Step 5 */}
            <div className="bg-white rounded-2xl p-5 border border-slate-200/90 shadow-xs grid grid-cols-1 lg:grid-cols-12 gap-4 items-center">
              <div className="lg:col-span-3 flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-blue-600 text-white font-mono font-bold flex items-center justify-center text-xs shrink-0">05</span>
                <div>
                  <h3 className="text-sm font-bold text-slate-900 font-heading">Design Commercial Approach</h3>
                  <span className="text-[10px] font-mono text-slate-400">Capability: Export Growth & RevOps</span>
                </div>
              </div>
              <div className="lg:col-span-5 text-xs text-slate-600">
                Structure localized pricing ladders, channel incentives, outbound buyer acquisition campaigns, and regional Deal Desk workflows.
              </div>
              <div className="lg:col-span-4 text-xs font-mono text-slate-500 bg-slate-50 p-2.5 rounded-lg border border-slate-200">
                Output: Export GTM Blueprint & Deal Registration Charter
              </div>
            </div>

            {/* Step 6 */}
            <div className="bg-white rounded-2xl p-5 border border-slate-200/90 shadow-xs grid grid-cols-1 lg:grid-cols-12 gap-4 items-center">
              <div className="lg:col-span-3 flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-blue-600 text-white font-mono font-bold flex items-center justify-center text-xs shrink-0">06</span>
                <div>
                  <h3 className="text-sm font-bold text-slate-900 font-heading">Coordinate & Measure Scale</h3>
                  <span className="text-[10px] font-mono text-slate-400">Capability: Global Revenue Engines</span>
                </div>
              </div>
              <div className="lg:col-span-5 text-xs text-slate-600">
                Execute weekly pipeline inspection reviews, track Net Revenue Retention (NRR), and monitor real-time command telemetry.
              </div>
              <div className="lg:col-span-4 text-xs font-mono text-slate-500 bg-slate-50 p-2.5 rounded-lg border border-slate-200">
                Output: Realized Revenue & Multi-Country Telemetry Cockpit
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 07: BUSINESS OUTCOMES AND MEASUREMENT (6 CATEGORIES) ── */}
      <section className="py-16 sm:py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono text-blue-600 uppercase tracking-widest font-bold">
              Accountability Architecture
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1 mb-2 font-heading">
              Measure Progress. Understand Risk. Make Better Expansion Decisions.
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              Global expansion should be evaluated through decision quality, operational readiness, and commercial revenue velocity. Review the six primary measurement categories:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {/* Category 1 */}
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-mono font-bold uppercase text-blue-600 bg-blue-100/60 px-2 py-0.5 rounded">Category 01</span>
                <h3 className="text-base font-bold text-slate-900 font-heading mt-2 mb-2">Market Intelligence</h3>
                <ul className="text-xs text-slate-600 space-y-1.5 mb-4">
                  <li>• Time required to complete country viability dossier</li>
                  <li>• % of priority markets supported by verified trade data</li>
                  <li>• Number of unresolved regulatory compliance gates</li>
                  <li>• Ratio of accessible SOM to theoretical gross TAM</li>
                </ul>
              </div>
              <div className="text-[11px] text-slate-500 font-mono pt-2 border-t border-slate-200">
                Goal: Prevent premature capital misallocation.
              </div>
            </div>

            {/* Category 2 */}
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-mono font-bold uppercase text-blue-600 bg-blue-100/60 px-2 py-0.5 rounded">Category 02</span>
                <h3 className="text-base font-bold text-slate-900 font-heading mt-2 mb-2">Demand Discovery</h3>
                <ul className="text-xs text-slate-600 space-y-1.5 mb-4">
                  <li>• Number of active corporate buyers mapped per corridor</li>
                  <li>• % of candidate distributors meeting all 18 criteria</li>
                  <li>• Target-account verified purchasing intent accuracy</li>
                  <li>• Discovered qualified opportunity pipeline headroom</li>
                </ul>
              </div>
              <div className="text-[11px] text-slate-500 font-mono pt-2 border-t border-slate-200">
                Goal: Validate commercial willingness before hiring.
              </div>
            </div>

            {/* Category 3 */}
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-mono font-bold uppercase text-blue-600 bg-blue-100/60 px-2 py-0.5 rounded">Category 03</span>
                <h3 className="text-base font-bold text-slate-900 font-heading mt-2 mb-2">Export & Market Entry</h3>
                <ul className="text-xs text-slate-600 space-y-1.5 mb-4">
                  <li>• Export Readiness Index (ERI) score out of 100</li>
                  <li>• % of pre-entry statutory certification gates cleared</li>
                  <li>• Order-to-delivery cross-border transit cycle time</li>
                  <li>• Export quota attainment across operating corridors</li>
                </ul>
              </div>
              <div className="text-[11px] text-slate-500 font-mono pt-2 border-t border-slate-200">
                Goal: Ensure reliable cross-border sales velocity.
              </div>
            </div>

            {/* Category 4 */}
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-mono font-bold uppercase text-blue-600 bg-blue-100/60 px-2 py-0.5 rounded">Category 04</span>
                <h3 className="text-base font-bold text-slate-900 font-heading mt-2 mb-2">Partners & Supply Networks</h3>
                <ul className="text-xs text-slate-600 space-y-1.5 mb-4">
                  <li>• Partner-led indirect share of international revenue</li>
                  <li>• On-time-in-full (OTIF) component delivery rate</li>
                  <li>• Time-to-Survive (TTS) vs. Time-to-Recover (TTR) ratio</li>
                  <li>• Landed COGS reduction via tariff optimization</li>
                </ul>
              </div>
              <div className="text-[11px] text-slate-500 font-mono pt-2 border-t border-slate-200">
                Goal: Build resilient non-linear indirect scale.
              </div>
            </div>

            {/* Category 5 */}
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-mono font-bold uppercase text-blue-600 bg-blue-100/60 px-2 py-0.5 rounded">Category 05</span>
                <h3 className="text-base font-bold text-slate-900 font-heading mt-2 mb-2">Global Revenue Operations</h3>
                <ul className="text-xs text-slate-600 space-y-1.5 mb-4">
                  <li>• International forecast variance from Day 1 Commit</li>
                  <li>• Multi-territory Annual Contract Value (ACV) lift</li>
                  <li>• International Net Revenue Retention (NRR) rate</li>
                  <li>• Deal Desk contract turnaround velocity in hours</li>
                </ul>
              </div>
              <div className="text-[11px] text-slate-500 font-mono pt-2 border-t border-slate-200">
                Goal: Ensure predictable multi-territory earnings.
              </div>
            </div>

            {/* Category 6 */}
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-mono font-bold uppercase text-blue-600 bg-blue-100/60 px-2 py-0.5 rounded">Category 06</span>
                <h3 className="text-base font-bold text-slate-900 font-heading mt-2 mb-2">AI-Assisted Workflows</h3>
                <ul className="text-xs text-slate-600 space-y-1.5 mb-4">
                  <li>• Source-verification citation coverage on AI outputs</li>
                  <li>• Human-in-the-loop review compliance rate (100% target)</li>
                  <li>• Sales rep administrative research hours reclaimed</li>
                  <li>• Algorithmic intent signal confirmation precision</li>
                </ul>
              </div>
              <div className="text-[11px] text-slate-500 font-mono pt-2 border-t border-slate-200">
                Goal: Accelerate research without hallucination risk.
              </div>
            </div>
          </div>

          <div className="p-3 rounded-xl bg-slate-100 border border-slate-200 text-center text-[11px] font-mono text-slate-500">
            All metric examples above reflect defined measurement methods and Illustrative Examples — Not Actual ProfitMachines Internal Data.
          </div>
        </div>
      </section>

      {/* ── SECTION 08: INTELLIGENCE, FRAMEWORKS AND EVIDENCE (5 CONCEPTS) ── */}
      <section className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono text-blue-600 uppercase tracking-widest font-bold">
              Structured Decision Instruments
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1 mb-2 font-heading">
              Turn Expansion Information into Decision-Ready Intelligence
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              Expansion decisions often involve conflicting stakeholder priorities. These five structured framework concepts help organizations record assumptions, compare options, and eliminate guesswork:
            </p>
          </div>

          <div className="space-y-4 mb-8">
            {/* Framework 1 */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs">
              <div className="flex items-center justify-between pb-2 border-b border-slate-100 mb-3">
                <span className="text-xs font-mono font-bold text-blue-600 uppercase">Framework 01</span>
                <span className="text-xs font-mono text-slate-400">Decision Tool</span>
              </div>
              <h3 className="text-base font-bold text-slate-900 font-heading mb-1.5">
                Market Opportunity Scorecard
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-3">
                Compares potential foreign jurisdictions across business-specific criteria: verified demand signals, target customer density, competitive incumbent moats, regulatory burden, and risk-adjusted return on capital.
              </p>
              <div className="text-[11px] font-mono text-slate-500 bg-slate-50 p-2.5 rounded-lg border border-slate-200">
                Application: Distinguishes large headline markets from genuinely accessible, profitable markets.
              </div>
            </div>

            {/* Framework 2 */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs">
              <div className="flex items-center justify-between pb-2 border-b border-slate-100 mb-3">
                <span className="text-xs font-mono font-bold text-blue-600 uppercase">Framework 02</span>
                <span className="text-xs font-mono text-slate-400">Diagnostic Tool</span>
              </div>
              <h3 className="text-base font-bold text-slate-900 font-heading mb-1.5">
                Expansion Readiness Checklist
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-3">
                Assesses 40 operational factors across four pillars: Product Readiness (specifications, labeling, packaging), Compliance & Legal (export licenses, HS codes), Financial Readiness (working capital, letters of credit), and Manufacturing Surge Capacity.
              </p>
              <div className="text-[11px] font-mono text-slate-500 bg-slate-50 p-2.5 rounded-lg border border-slate-200">
                Application: Identifies internal operational bottlenecks before launching commercial campaigns.
              </div>
            </div>

            {/* Framework 3 */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs">
              <div className="flex items-center justify-between pb-2 border-b border-slate-100 mb-3">
                <span className="text-xs font-mono font-bold text-blue-600 uppercase">Framework 03</span>
                <span className="text-xs font-mono text-slate-400">Evaluation Matrix</span>
              </div>
              <h3 className="text-base font-bold text-slate-900 font-heading mb-1.5">
                Buyer & Partner Qualification Matrix
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-3">
                Evaluates candidate distributors, dealers, and corporate buyers across 18 operational criteria: commercial reach, certified engineering bench, non-competing brand portfolio synergy, and audited credit solvency.
              </p>
              <div className="text-[11px] font-mono text-slate-500 bg-slate-50 p-2.5 rounded-lg border border-slate-200">
                Application: Prevents granting territorial exclusivity to ineffective or conflicted partner organizations.
              </div>
            </div>

            {/* Framework 4 */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs">
              <div className="flex items-center justify-between pb-2 border-b border-slate-100 mb-3">
                <span className="text-xs font-mono font-bold text-blue-600 uppercase">Framework 04</span>
                <span className="text-xs font-mono text-slate-400">Risk Management</span>
              </div>
              <h3 className="text-base font-bold text-slate-900 font-heading mb-1.5">
                Cross-Border Risk and Dependency Register
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-3">
                Maintains continuous tracking of external sovereign, currency, regulatory, and supply chain dependencies. Records risk triggers, affected operating entities, verified evidence, responsible executive owners, and pre-approved mitigation playbooks.
              </p>
              <div className="text-[11px] font-mono text-slate-500 bg-slate-50 p-2.5 rounded-lg border border-slate-200">
                Application: Replaces panic during external shocks with disciplined, pre-engineered business continuity.
              </div>
            </div>

            {/* Framework 5 */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs">
              <div className="flex items-center justify-between pb-2 border-b border-slate-100 mb-3">
                <span className="text-xs font-mono font-bold text-blue-600 uppercase">Framework 05</span>
                <span className="text-xs font-mono text-slate-400">Telemetry Cockpit</span>
              </div>
              <h3 className="text-base font-bold text-slate-900 font-heading mb-1.5">
                Global Expansion Performance Dashboard Concept
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-3">
                Brings together market assessment progress, demand pipeline velocity, partner onboarding statuses, supply fulfillment SLAs, and currency foreign exchange exposures into a single consolidated executive cockpit.
              </p>
              <div className="text-[11px] font-mono text-slate-500 bg-slate-50 p-2.5 rounded-lg border border-slate-200">
                Application: Provides leadership with real-time operational visibility across distributed foreign entities.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 09: CONNECTED EXPANSION CAPABILITIES (7 CONNECTION EXAMPLES) ── */}
      <section className="py-16 sm:py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono text-blue-600 uppercase tracking-widest font-bold">
              Systemic Connectivity
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1 mb-2 font-heading">
              Eight Capabilities. One Connected Expansion Journey.
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              International business expansion decisions rarely exist in isolation. Discover how each capability naturally informs and reinforces the adjacent pillars:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {/* Connection 1 */}
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col justify-between">
              <div>
                <div className="text-[10px] font-mono font-bold uppercase text-blue-600 mb-1">Connection 01</div>
                <h3 className="text-sm font-bold text-slate-900 font-heading mb-2">
                  Market Access → Demand Networks
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  Market selection establishes which countries offer viable regulatory and economic conditions; Demand Networks then investigates the specific enterprise buyers and distributors inside those territories.
                </p>
              </div>
              <div className="flex items-center gap-2 text-xs font-bold text-blue-600">
                <Link to="/global-acceleration/market-access" className="hover:underline">Market Access</Link>
                <span>→</span>
                <Link to="/global-acceleration/demand-networks" className="hover:underline">Demand Networks</Link>
              </div>
            </div>

            {/* Connection 2 */}
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col justify-between">
              <div>
                <div className="text-[10px] font-mono font-bold uppercase text-blue-600 mb-1">Connection 02</div>
                <h3 className="text-sm font-bold text-slate-900 font-heading mb-2">
                  Demand Networks → Export Growth
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  Discovered buyer and distributor lists provide the target account intelligence that the Export Growth Engine engages and converts through structured outbound campaigns.
                </p>
              </div>
              <div className="flex items-center gap-2 text-xs font-bold text-blue-600">
                <Link to="/global-acceleration/demand-networks" className="hover:underline">Demand Networks</Link>
                <span>→</span>
                <Link to="/global-acceleration/export-growth-engine" className="hover:underline">Export Growth</Link>
              </div>
            </div>

            {/* Connection 3 */}
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col justify-between">
              <div>
                <div className="text-[10px] font-mono font-bold uppercase text-blue-600 mb-1">Connection 03</div>
                <h3 className="text-sm font-bold text-slate-900 font-heading mb-2">
                  Market Access → Partner Ecosystems
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  A market assessment reveals where local licensing, distribution cartels, or statutory ownership barriers make indirect partner alliances and joint ventures essential.
                </p>
              </div>
              <div className="flex items-center gap-2 text-xs font-bold text-blue-600">
                <Link to="/global-acceleration/market-access" className="hover:underline">Market Access</Link>
                <span>→</span>
                <Link to="/global-acceleration/partner-ecosystems" className="hover:underline">Partner Ecosystems</Link>
              </div>
            </div>

            {/* Connection 4 */}
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col justify-between">
              <div>
                <div className="text-[10px] font-mono font-bold uppercase text-blue-600 mb-1">Connection 04</div>
                <h3 className="text-sm font-bold text-slate-900 font-heading mb-2">
                  Export Growth → Supply Networks
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  Aggressive cross-border sales commitments generate strict operational requirements for manufacturing surge capacity, component sourcing, and multi-modal logistics.
                </p>
              </div>
              <div className="flex items-center gap-2 text-xs font-bold text-blue-600">
                <Link to="/global-acceleration/export-growth-engine" className="hover:underline">Export Growth</Link>
                <span>→</span>
                <Link to="/global-acceleration/supply-networks" className="hover:underline">Supply Networks</Link>
              </div>
            </div>

            {/* Connection 5 */}
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col justify-between">
              <div>
                <div className="text-[10px] font-mono font-bold uppercase text-blue-600 mb-1">Connection 05</div>
                <h3 className="text-sm font-bold text-slate-900 font-heading mb-2">
                  Export Growth → Revenue Engines
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  Initial customer acquisition and territory launches must transition into ongoing territory management, Deal Desk contracting, and customer success retention.
                </p>
              </div>
              <div className="flex items-center gap-2 text-xs font-bold text-blue-600">
                <Link to="/global-acceleration/export-growth-engine" className="hover:underline">Export Growth</Link>
                <span>→</span>
                <Link to="/global-acceleration/revenue-engines" className="hover:underline">Revenue Engines</Link>
              </div>
            </div>

            {/* Connection 6 */}
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col justify-between">
              <div>
                <div className="text-[10px] font-mono font-bold uppercase text-blue-600 mb-1">Connection 06</div>
                <h3 className="text-sm font-bold text-slate-900 font-heading mb-2">
                  Expansion Plans → Financial Pathways
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  Entering markets and fulfilling large export orders reveals working capital gaps, necessitating letters of credit, export credit agency (ECA) insurance, and FX hedging.
                </p>
              </div>
              <div className="flex items-center gap-2 text-xs font-bold text-blue-600">
                <Link to="/global-acceleration/market-access" className="hover:underline">Market Access</Link>
                <span>→</span>
                <Link to="/global-acceleration/capital-finance" className="hover:underline">Capital & Finance</Link>
              </div>
            </div>
          </div>

          {/* Connection 7 */}
          <div className="p-5 rounded-2xl bg-blue-50 border border-blue-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <div className="text-[10px] font-mono font-bold uppercase text-blue-700 mb-0.5">Connection 07</div>
              <h3 className="text-sm font-bold text-slate-900 font-heading">
                AI-Powered Expansion ↔ Continuous Intelligence Across All Seven Pillars
              </h3>
              <p className="text-xs text-slate-600 mt-1 max-w-3xl">
                AI-assisted synthesis, lead enrichment, localization, and telemetry orchestration support each of the seven capability areas—always subject to grounded data sources and human-in-the-loop governance.
              </p>
            </div>
            <Link
              to="/global-acceleration/ai-powered-expansion"
              className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shrink-0 inline-flex items-center gap-1.5"
            >
              <span>Explore AI Systems</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── SECTION 10: FINAL CONVERSION SECTION (INTAKE FORM & WORKING CTA) ── */}
      <section id="consultation" className="py-16 sm:py-24 bg-slate-950 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6">
              <span className="text-xs font-mono text-blue-400 uppercase tracking-widest font-bold">
                Expansion Strategy Briefing
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-1 mb-4 font-heading leading-tight">
                Build Your Next Phase of Global Growth.
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                Whether your organization is evaluating new international territories, identifying verified commercial buyers, planning export market entry, developing partner alliances, or scaling cross-border revenue operations—the first step is clarifying your business objective and required decisions.
              </p>

              <div className="space-y-3 mb-8">
                <div className="flex items-start gap-2.5 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Clarify expansion objectives, capital budgets, and target geographic corridors</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Identify critical regulatory, channel, and working capital dependencies</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Strictly confidential architectural review under mutual corporate NDA</span>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <Link
                  to="/book-consultation"
                  className="px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 active:bg-blue-700 text-white font-bold text-sm transition-all shadow-lg shadow-blue-600/30 inline-flex items-center gap-2 group cursor-pointer"
                >
                  <span>Discuss Your Expansion Strategy</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>

                <a
                  href="#capabilities-overview"
                  className="px-5 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-300 font-bold text-sm transition-all cursor-pointer"
                >
                  <span>Explore All Capabilities</span>
                </a>
              </div>
            </div>

            {/* Live Working Consultation Form */}
            <div className="lg:col-span-6">
              <GlobalExpansionIntakeForm
                pageContext="Global Business Acceleration Hub"
                defaultChallenge="Comprehensive international expansion assessment across target corridors"
                buttonText="Request Confidential Expansion Briefing"
              />
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
