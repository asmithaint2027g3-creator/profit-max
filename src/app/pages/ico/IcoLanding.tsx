import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
    Sparkles, ArrowRight, ShieldCheck, Activity, Target, TrendingUp, Layers, 
    Coins, Rocket, ChevronRight, Zap, Users, BarChart3, AlertTriangle, CheckCircle2,
    Lock, ArrowUpRight, Clock, Compass, DollarSign, Bot, Sliders, Shield, FileText,
    HelpCircle, ChevronDown, Check, Building2
} from 'lucide-react';

export default function IcoLanding() {
    const location = useLocation();
    const [selectedArchetype, setSelectedArchetype] = useState<'l1' | 'defi' | 'gaming' | 'depin' | 'ico'>('ico');
    const [selectedUrgency, setSelectedUrgency] = useState<'urgent' | 'planned' | 'live'>('urgent');
    const [activeStageTab, setActiveStageTab] = useState<'pre' | 'tge' | 'post'>('pre');

    useEffect(() => {
        document.title = "ICO & Token Launch Acceleration | ProfitMachines Crypto Protocol";
        if (location.hash) {
            const id = location.hash.replace('#', '');
            const el = document.getElementById(id);
            if (el) {
                setTimeout(() => {
                    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }, 150);
            }
        } else {
            window.scrollTo(0, 0);
        }
    }, [location.hash]);

    // Model Selector Logic calibrated for Web3 Launches
    const selectorMatrix: Record<string, { model: string; modelCode: string; timeline: string; deliverable: string; desc: string }> = {
        'ico-urgent': {
            model: 'TGE Command & Launch Ops',
            modelCode: 'Model 04',
            timeline: '8–12 Weeks',
            deliverable: 'Complete Multi-Channel Launch Execution & Exchange Desk Orchestration',
            desc: 'Turnkey co-pilot for teams launching within 90 days requiring immediate KOL sequencing, whitelist management, and day-one market-maker alignment.'
        },
        'ico-planned': {
            model: 'Launch Diagnostic Sprint',
            modelCode: 'Model 01',
            timeline: '2–4 Weeks',
            deliverable: 'Go/No-Go Readiness Scorecard, Tokenomics Stress-Test & 16-Week Roadmap',
            desc: 'Low-risk diagnostic evaluation to validate market demand, score readiness, and eliminate critical listing bottlenecks prior to public budget commitments.'
        },
        'ico-live': {
            model: 'Post-TGE Retention & Revenue Engine',
            modelCode: 'Model 03',
            timeline: '90-Day Sprint',
            deliverable: 'Automated Wallet Lifecycle, Staking Monetization & Ecosystem Fee Capture',
            desc: 'Systematic retention architecture designed to prevent the typical 80% post-TGE liquidity drop by converting mercenary farmers into sticky utility participants.'
        },
        'l1-urgent': {
            model: 'Ecosystem Liquidity Sprints',
            modelCode: 'Model 04',
            timeline: '6–12 Weeks',
            deliverable: 'Dapp Migration Incentive Program & Developer Acquisition Radar',
            desc: 'Aggressive outbound ecosystem growth targeting competing chain builders with verified gas-consumption benchmarks and bridge incentives.'
        },
        'l1-planned': {
            model: 'Foundation Growth Advisory',
            modelCode: 'Model 02',
            timeline: '3–6 Months',
            deliverable: 'Comprehensive Ecosystem Strategy, Grant Governance & Institutional BD',
            desc: 'High-touch strategic advisory aligning foundation token reserves, market-maker SLAs, and cross-border regulatory guardrails (MiCA, VARA).'
        },
        'l1-live': {
            model: 'Enterprise Ecosystem License',
            modelCode: 'Model 06',
            timeline: 'Annual License',
            deliverable: 'Proprietary AI Demand Telemetry, Automated BD Bot & Full Attribution Stack',
            desc: 'Full enterprise technology deployment enabling foundation growth teams to autonomously identify, track, and close leading protocol builders.'
        },
        'defi-urgent': {
            model: 'Liquidity Velocity Sprint',
            modelCode: 'Model 04',
            timeline: '4–8 Weeks',
            deliverable: 'TVL Incentive Architecture & Whale Staking Bootstrapping',
            desc: 'Precision targeted acquisition of high-net-worth liquidity providers with structured lockups and sustainable token emission sinks.'
        },
        'defi-planned': {
            model: 'Tokenomics & Positioning Studio',
            modelCode: 'Model 01',
            timeline: '3–4 Weeks',
            deliverable: 'Fee Monetization Framework & Deflationary Burn Simulation',
            desc: 'Engineering mathematical token sustainability to withstand adverse macro conditions and protocol forks.'
        },
        'defi-live': {
            model: 'Performance Shared-Upside',
            modelCode: 'Model 05',
            timeline: '6 Months',
            deliverable: 'Risk-Sharing TVL Milestones & Fee Protocol Attribution',
            desc: 'Aligned economic partnership where compensation is tied directly to verifiable on-chain volume and fee capture.'
        },
        'gaming-urgent': {
            model: 'Player Acquisition Blitz',
            modelCode: 'Model 04',
            timeline: '6–8 Weeks',
            deliverable: 'Guild Co-Op Activation, Sybil-Resistant Alpha Whitelisting',
            desc: 'Rapid seeding of active gaming wallets through top gaming creator networks and community guild tournaments.'
        },
        'gaming-planned': {
            model: 'Dual-Token Economy Validation',
            modelCode: 'Model 01',
            timeline: '2–4 Weeks',
            deliverable: 'Inflationary Sink Analysis & Player Lifetime Value Model',
            desc: 'Preventing hyper-inflation in in-game currencies through simulated sink mechanics and asset staking.'
        },
        'gaming-live': {
            model: 'Ongoing Retention Engine',
            modelCode: 'Model 03',
            timeline: 'Quarterly Retainer',
            deliverable: 'Player Reactivation Automation & Seasonal Tournament Marketing',
            desc: 'Maximizing secondary marketplace volume and perpetual in-game spending through automated retention flows.'
        },
        'depin-urgent': {
            model: 'Hardware Node Seeding Command',
            modelCode: 'Model 04',
            timeline: '8 Weeks',
            deliverable: 'Global Miner Whitelisting & Hardware Pre-Order Acceleration',
            desc: 'Coordinated global marketing targeting node operators and data providers across Tier-1 crypto mining hubs.'
        },
        'depin-planned': {
            model: 'DePIN Tokenomics Studio',
            modelCode: 'Model 01',
            timeline: '3 Weeks',
            deliverable: 'Supply-Side Mint-and-Burn Equilibrium Model',
            desc: 'Balancing node operator rewards with enterprise client service purchases to secure predictable revenue.'
        },
        'depin-live': {
            model: 'Enterprise BD Co-Pilot',
            modelCode: 'Model 03',
            timeline: '6 Months',
            deliverable: 'B2B Client Enterprise Pipeline & Compute Consumption Contracts',
            desc: 'Bridging decentralized infrastructure networks with traditional enterprise buyers through targeted ABM campaigns.'
        }
    };

    const resolvedSelector = selectorMatrix[`${selectedArchetype}-${selectedUrgency}`] || selectorMatrix['ico-urgent'];

    return (
        <div className="min-h-screen bg-slate-50/50 text-slate-900 pt-16 lg:pt-[72px] font-sans selection:bg-blue-500/20">

            {/* ── 1. HERO SECTION (DECISION-ORIENTED EXECUTIVE COMMAND - DARK ARCHITECTURAL IMAGE OVERLAY) ── */}
            <section className="relative bg-slate-950 text-white py-16 lg:py-24 overflow-hidden border-b border-slate-800">
                {/* Background Image: Enterprise Web3 Architecture Command Center */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=2000&q=80"
                        alt="Enterprise Web3 Architecture"
                        className="w-full h-full object-cover object-center opacity-40 mix-blend-luminosity"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/85 to-slate-900/60" />
                    <div className="absolute inset-0 bg-radial-at-t from-blue-950/40 via-transparent to-transparent pointer-events-none" />
                </div>

                <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                        {/* Hero Left: Headline, Value Proposition, Dual CTAs */}
                        <div className="lg:col-span-8">
                            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/20 border border-blue-400/40 text-blue-300 text-xs font-semibold uppercase tracking-wider mb-6 font-mono shadow-sm">
                                <Sparkles className="w-3.5 h-3.5 text-blue-400" />
                                <span>ProfitMachines Crypto Protocol · Executive Acceleration Suite</span>
                            </div>

                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.08] mb-6 font-heading">
                                From Token Launch Uncertainty to a <span className="text-blue-400">Guaranteed Growth Engine</span>
                            </h1>

                            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed font-normal mb-8 max-w-3xl">
                                ProfitMachines helps crypto founders, foundation councils, and token growth leaders validate organic market demand, coordinate flawless TGE execution, and engineer institutional-grade compliance. Replace mercenary hype with verified wallet adoption and compounding protocol revenues.
                            </p>

                            {/* Supporting Category Pills */}
                            <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-slate-400 mb-8 font-mono">
                                {[
                                    'Pre-TGE Validation', 
                                    'TGE Multi-Channel Ops', 
                                    'Post-TGE Retention', 
                                    'MiCA/VARA Compliance', 
                                    'Whale & Institutional BD'
                                ].map((tag, idx) => (
                                    <span key={idx} className="bg-slate-900/80 text-slate-300 px-3 py-1 rounded-full border border-slate-700/80">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            {/* Action Buttons */}
                            <div className="flex flex-wrap items-center gap-4">
                                <Link
                                    to="/book-consultation"
                                    className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold px-7 py-3.5 rounded-xl transition-all shadow-lg border border-blue-400/40 text-sm sm:text-base group"
                                >
                                    <span>Discuss Your Launch</span>
                                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                                </Link>
                                <a
                                    href="#selector"
                                    className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold px-7 py-3.5 rounded-xl transition-all text-sm sm:text-base border border-white/30 backdrop-blur-sm shadow-md"
                                >
                                    <Bot className="w-4 h-4 text-blue-400" />
                                    <span>Find Your Launch Model</span>
                                </a>
                                <Link
                                    to="/ico-acceleration/intelligence"
                                    className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-400 hover:text-blue-300 px-2 py-3.5"
                                >
                                    <span>Explore Launch Intelligence</span>
                                    <ArrowUpRight className="w-3.5 h-3.5" />
                                </Link>
                            </div>
                        </div>

                        {/* Hero Right: Architectural Preview Card */}
                        <div className="lg:col-span-4">
                            <div className="bg-slate-900/90 text-white rounded-3xl overflow-hidden shadow-2xl border border-slate-800 relative">
                                <div className="h-44 w-full relative overflow-hidden">
                                    <img
                                        src="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&q=80"
                                        alt="Protocol Growth Architecture"
                                        className="w-full h-full object-cover opacity-60"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
                                    <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                                        <span className="text-[11px] font-mono uppercase tracking-wider text-blue-400 font-bold bg-slate-900/80 px-2.5 py-1 rounded-md border border-slate-700">
                                            Web3 Protocol Engine
                                        </span>
                                        <span className="flex items-center gap-1.5 text-[11px] font-mono text-emerald-400 bg-slate-950/80 px-2 py-0.5 rounded border border-emerald-500/30">
                                            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                                            Active Protocol
                                        </span>
                                    </div>
                                </div>

                                <div className="p-6 space-y-3">
                                    <div className="text-xs text-slate-400 font-medium leading-relaxed">
                                        A synchronized operational continuum connecting demand validation, liquidity operations, compliant execution, and post-TGE fee capture.
                                    </div>
                                    <div className="space-y-2 pt-2 border-t border-slate-800 text-xs font-mono text-slate-300">
                                        <div className="flex items-center justify-between">
                                            <span className="text-slate-400">Launch Timeline:</span>
                                            <span className="text-blue-400 font-bold">12–16w Pre-TGE</span>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <span className="text-slate-400">Compliance Standard:</span>
                                            <span className="text-emerald-400 font-bold">MiCA · VARA · SEC</span>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <span className="text-slate-400">Attribution Type:</span>
                                            <span className="text-indigo-400 font-bold">Token-Adjusted RQL</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 4 Executive Metric Counters Strip */}
                    <div className="mt-14 pt-8 border-t border-slate-800 grid grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 shadow-sm">
                            <div className="text-3xl font-extrabold font-mono text-white mb-1">$4.2T+</div>
                            <div className="text-xs font-bold text-slate-300 mb-0.5">Tracked Liquidity TAM</div>
                            <div className="text-[11px] text-slate-400">Empirical wallet-level demand mapping</div>
                        </div>
                        <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 shadow-sm">
                            <div className="text-3xl font-extrabold font-mono text-white mb-1">120+</div>
                            <div className="text-xs font-bold text-slate-300 mb-0.5">Launch Pipelines Guided</div>
                            <div className="text-[11px] text-slate-400">Across L1/L2s, DeFi, DePIN & GameFi</div>
                        </div>
                        <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 shadow-sm">
                            <div className="text-3xl font-extrabold font-mono text-white mb-1">94%</div>
                            <div className="text-xs font-bold text-slate-300 mb-0.5">Whitelist-to-Holder Rate</div>
                            <div className="text-[11px] text-slate-400">Eliminating mercenary bot drain</div>
                        </div>
                        <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 shadow-sm">
                            <div className="text-3xl font-extrabold font-mono text-white mb-1">6 Models</div>
                            <div className="text-xs font-bold text-slate-300 mb-0.5">Flexible Commercial Scopes</div>
                            <div className="text-[11px] text-slate-400">Diagnostic Sprints to Shared Upside</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── 2. COMMERCIAL CONTINUUM: THE SYSTEMIC CHALLENGES (ASYMMETRICAL BENTO GRID) ── */}
            <section className="py-20 lg:py-28 bg-slate-50 border-b border-slate-200/80 text-slate-900">
                <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
                        <div className="max-w-3xl">
                            <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600 block mb-2">
                                Market Realities · Systematic Friction
                            </span>
                            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading">
                                From Speculative Activity to Sustainable Growth
                            </h2>
                            <p className="text-base sm:text-lg text-slate-600 mt-3 leading-relaxed">
                                Most token projects treat TGE as a finish line, burning capital on disparate hype cycles without validating demand or engineering retention. ProfitMachines eliminates the four systemic breakdown points that compromise token launches.
                            </p>
                        </div>
                        <Link
                            to="/ico-acceleration/intelligence"
                            className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-blue-700 bg-blue-50 hover:bg-blue-100 px-5 py-2.5 rounded-xl transition-colors border border-blue-200 shrink-0"
                        >
                            <span>Explore Market Intelligence</span>
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>

                    {/* 4 Crisp Bento Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                        <div className="p-7 rounded-2xl bg-white border border-slate-200 hover:border-blue-400 hover:shadow-lg transition-all shadow-xs flex flex-col justify-between">
                            <div>
                                <div className="w-12 h-12 rounded-xl bg-red-50 border border-red-100 text-red-600 flex items-center justify-center mb-5">
                                    <AlertTriangle className="w-6 h-6" />
                                </div>
                                <span className="text-[11px] font-mono uppercase tracking-wider text-red-600 font-bold block mb-1">
                                    Breakdown 01
                                </span>
                                <h3 className="text-xl font-bold text-slate-900 mb-2">Unvalidated Market Demand</h3>
                                <p className="text-sm text-slate-600 leading-relaxed">
                                    Launching into market noise without verifying organic buyer appetite, genuine wallet propensity, or real utility requirements before committing major capital.
                                </p>
                            </div>
                            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-mono">
                                <span>Impact:</span>
                                <span className="text-red-600 font-bold">Low day-one depth</span>
                            </div>
                        </div>

                        <div className="p-7 rounded-2xl bg-white border border-slate-200 hover:border-blue-400 hover:shadow-lg transition-all shadow-xs flex flex-col justify-between">
                            <div>
                                <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-100 text-amber-600 flex items-center justify-center mb-5">
                                    <Activity className="w-6 h-6" />
                                </div>
                                <span className="text-[11px] font-mono uppercase tracking-wider text-amber-600 font-bold block mb-1">
                                    Breakdown 02
                                </span>
                                <h3 className="text-xl font-bold text-slate-900 mb-2">Fragmented Launch Execution</h3>
                                <p className="text-sm text-slate-600 leading-relaxed">
                                    Siloed influencer spend, disconnected PR firms, uncoordinated exchange listings, and missing market-maker sync creating chaos during the critical TGE window.
                                </p>
                            </div>
                            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-mono">
                                <span>Impact:</span>
                                <span className="text-amber-600 font-bold">Unsynchronized momentum</span>
                            </div>
                        </div>

                        <div className="p-7 rounded-2xl bg-white border border-slate-200 hover:border-blue-400 hover:shadow-lg transition-all shadow-xs flex flex-col justify-between">
                            <div>
                                <div className="w-12 h-12 rounded-xl bg-purple-50 border border-purple-100 text-purple-600 flex items-center justify-center mb-5">
                                    <BarChart3 className="w-6 h-6" />
                                </div>
                                <span className="text-[11px] font-mono uppercase tracking-wider text-purple-600 font-bold block mb-1">
                                    Breakdown 03
                                </span>
                                <h3 className="text-xl font-bold text-slate-900 mb-2">Unpredictable Economics</h3>
                                <p className="text-sm text-slate-600 leading-relaxed">
                                    Heavy mercenary farming, bot drain on airdrop pools, zero granular channel-to-holder attribution, and absence of structured deflationary sinks.
                                </p>
                            </div>
                            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-mono">
                                <span>Impact:</span>
                                <span className="text-purple-600 font-bold">High treasury drain</span>
                            </div>
                        </div>

                        <div className="p-7 rounded-2xl bg-white border border-slate-200 hover:border-blue-400 hover:shadow-lg transition-all shadow-xs flex flex-col justify-between">
                            <div>
                                <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 text-blue-600 flex items-center justify-center mb-5">
                                    <TrendingUp className="w-6 h-6" />
                                </div>
                                <span className="text-[11px] font-mono uppercase tracking-wider text-blue-600 font-bold block mb-1">
                                    Breakdown 04
                                </span>
                                <h3 className="text-xl font-bold text-slate-900 mb-2">Post-TGE Retention Cliff</h3>
                                <p className="text-sm text-slate-600 leading-relaxed">
                                    Over 80% of token launches experience catastrophic volume and wallet drop-offs within 30 days due to absent ongoing lifecycle nurturing and protocol fee models.
                                </p>
                            </div>
                            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-mono">
                                <span>Impact:</span>
                                <span className="text-blue-600 font-bold">Post-launch churn</span>
                            </div>
                        </div>
                    </div>

                    {/* Integrated Solution Bridge */}
                    <div className="p-8 rounded-3xl bg-white border border-blue-200 shadow-sm relative overflow-hidden">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                            <div className="lg:col-span-8">
                                <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600 block mb-2">
                                    The ProfitMachines Resolution
                                </span>
                                <h3 className="text-2xl font-bold text-slate-900 mb-3">
                                    How ProfitMachines Connects The Protocol Continuum
                                </h3>
                                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                                    We replace guesswork with a synchronized operational architecture: <strong className="text-slate-900">Demand Intelligence</strong> to validate readiness, <strong className="text-slate-900">Coordinated Execution</strong> to orchestrate listings and community distribution, <strong className="text-slate-900">Trust & Performance Measurement</strong> to attribute capital efficiency, and <strong className="text-slate-900">Lifecycle Growth</strong> to ensure compounding protocol fees after day one.
                                </p>
                            </div>
                            <div className="lg:col-span-4 flex justify-start lg:justify-end">
                                <Link
                                    to="/ico-acceleration/launch-growth"
                                    className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-7 py-3.5 rounded-xl font-bold text-sm shadow-md transition-colors"
                                >
                                    <span>Explore 7-Phase Playbook</span>
                                    <ArrowRight className="w-4 h-4" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── 3. THREE-STAGE LAUNCH JOURNEY (DEEP ENTERPRISE BLUE SECTION WITH TIMELINE INDICATORS) ── */}
            <section className="py-20 lg:py-28 bg-slate-950 text-white border-b border-slate-800">
                <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/20 border border-blue-400/40 text-blue-300 text-xs font-semibold uppercase tracking-wider mb-4 font-mono">
                            <Clock className="w-3.5 h-3.5 text-blue-400" />
                            <span>Continuum Playbook · Stage Sequences</span>
                        </div>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4 font-heading">
                            Three-Stage Token Launch Architecture
                        </h2>
                        <p className="text-slate-300 text-base sm:text-lg">
                            A synchronized operational roadmap covering pre-launch intelligence, the critical TGE window, and post-launch expansion.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative">
                        {/* Stage 1: PRE-TGE */}
                        <div className="p-8 rounded-3xl bg-slate-900/90 border border-slate-800 relative hover:border-blue-500/50 transition-colors flex flex-col justify-between">
                            <div>
                                <div className="flex items-center justify-between mb-6">
                                    <span className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 font-mono text-xs font-bold uppercase tracking-wider">
                                        Stage 01
                                    </span>
                                    <span className="text-xs text-slate-400 font-mono">T-16w to T-1w</span>
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-3">PRE-TGE · Intelligence & Preparation</h3>
                                <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                                    Deep market validation, narrative refinement, and establishing verified buyer signals before public deployment.
                                </p>
                                <ul className="space-y-3.5 text-sm text-slate-300 mb-6">
                                    <li className="flex items-start gap-2.5">
                                        <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                                        <span>Market validation & Go/No-Go readiness scoring</span>
                                    </li>
                                    <li className="flex items-start gap-2.5">
                                        <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                                        <span>Wallet-level demand discovery & intent mapping</span>
                                    </li>
                                    <li className="flex items-start gap-2.5">
                                        <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                                        <span>Token narrative studio & tokenomics messaging kit</span>
                                    </li>
                                    <li className="flex items-start gap-2.5">
                                        <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                                        <span>Community infrastructure (Discord, Telegram, X) setup</span>
                                    </li>
                                    <li className="flex items-start gap-2.5">
                                        <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                                        <span>Compliance by Design workflows (MiCA, VARA checks)</span>
                                    </li>
                                </ul>
                            </div>
                            <Link
                                to="/ico-acceleration/intelligence"
                                className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-400 hover:text-blue-300 pt-4 border-t border-slate-800"
                            >
                                <span>Inspect Stage 01 Systems</span>
                                <ArrowRight className="w-3.5 h-3.5" />
                            </Link>
                        </div>

                        {/* Stage 2: TGE APEX */}
                        <div className="p-8 rounded-3xl bg-slate-900 border-2 border-blue-500 relative shadow-2xl shadow-blue-900/20 hover:border-blue-400 transition-colors flex flex-col justify-between">
                            <div>
                                <div className="flex items-center justify-between mb-6">
                                    <span className="px-3 py-1 rounded-full bg-blue-600 text-white font-mono text-xs font-bold uppercase tracking-wider">
                                        Stage 02 · Apex
                                    </span>
                                    <span className="text-xs text-blue-300 font-mono font-bold">TGE Week</span>
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-3">TGE · Coordinated Execution</h3>
                                <p className="text-slate-300 text-sm mb-6 leading-relaxed">
                                    Orchestrating distribution channels, creator swarms, liquidity operations, and exchange communications in unison.
                                </p>
                                <ul className="space-y-3.5 text-sm text-slate-200 mb-6">
                                    <li className="flex items-start gap-2.5">
                                        <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                                        <span>Phased creator & KOL campaigns (20–50 verified leaders)</span>
                                    </li>
                                    <li className="flex items-start gap-2.5">
                                        <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                                        <span>Community activation, Spaces & founder AMAs</span>
                                    </li>
                                    <li className="flex items-start gap-2.5">
                                        <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                                        <span>Exchange listing operations & market-maker sync</span>
                                    </li>
                                    <li className="flex items-start gap-2.5">
                                        <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                                        <span>Sybil-resistant airdrop & whitelist distribution</span>
                                    </li>
                                    <li className="flex items-start gap-2.5">
                                        <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                                        <span>Real-time sentiment monitoring & performance attribution</span>
                                    </li>
                                </ul>
                            </div>
                            <Link
                                to="/ico-acceleration/launch-growth"
                                className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-400 hover:text-blue-300 pt-4 border-t border-slate-800"
                            >
                                <span>Inspect Stage 02 Playbook</span>
                                <ArrowRight className="w-3.5 h-3.5" />
                            </Link>
                        </div>

                        {/* Stage 3: POST-TGE */}
                        <div className="p-8 rounded-3xl bg-slate-900/90 border border-slate-800 relative hover:border-teal-500/50 transition-colors flex flex-col justify-between">
                            <div>
                                <div className="flex items-center justify-between mb-6">
                                    <span className="px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 font-mono text-xs font-bold uppercase tracking-wider">
                                        Stage 03
                                    </span>
                                    <span className="text-xs text-slate-400 font-mono">T+1 to T+90d+</span>
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-3">POST-TGE · Retention & Revenue</h3>
                                <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                                    Converting day-one trading volume into active users, recurring protocol fees, and institutional ecosystem partnerships.
                                </p>
                                <ul className="space-y-3.5 text-sm text-slate-300 mb-6">
                                    <li className="flex items-start gap-2.5">
                                        <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                                        <span>Core product adoption & developer onboarding</span>
                                    </li>
                                    <li className="flex items-start gap-2.5">
                                        <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                                        <span>Wallet journey intelligence & churn-risk signaling</span>
                                    </li>
                                    <li className="flex items-start gap-2.5">
                                        <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                                        <span>Retention automation & 90-day content calendar</span>
                                    </li>
                                    <li className="flex items-start gap-2.5">
                                        <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                                        <span>Token fee monetization & revenue forecasting</span>
                                    </li>
                                    <li className="flex items-start gap-2.5">
                                        <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                                        <span>Institutional BD & ecosystem grant pipelines</span>
                                    </li>
                                </ul>
                            </div>
                            <Link
                                to="/ico-acceleration/trust-performance"
                                className="inline-flex items-center gap-1.5 text-xs font-bold text-teal-400 hover:text-teal-300 pt-4 border-t border-slate-800"
                            >
                                <span>Inspect Stage 03 Monetization</span>
                                <ArrowRight className="w-3.5 h-3.5" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── 4. FIVE COMMERCIAL LAYERS + COMPLIANCE TRUST LAYER (CRISP WHITE ENTERPRISE BENTO) ── */}
            <section className="py-20 lg:py-28 bg-slate-50 border-b border-slate-200/80 text-slate-900">
                <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl mb-14">
                        <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600 block mb-2">
                            Architectural Foundation
                        </span>
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading">
                            Five Commercial Layers + Encompassing Trust Layer
                        </h2>
                        <p className="text-base sm:text-lg text-slate-600 mt-2 leading-relaxed">
                            Every growth motion operates inside structured layers, bounded by an institutional Trust Layer that guarantees regulatory sanity from sprint zero to scale.
                        </p>
                    </div>

                    <div className="space-y-4 mb-10">
                        {/* Layer 0 */}
                        <div className="p-6 rounded-2xl bg-white border border-slate-200 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:border-blue-400 hover:shadow-md transition-all shadow-xs">
                            <div className="flex items-start gap-4">
                                <div className="px-3.5 py-1.5 rounded-xl bg-blue-50 text-blue-600 font-mono font-bold text-sm shrink-0 border border-blue-100">
                                    L0
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-slate-900 mb-1">Layer 0 — Launch Intelligence</h3>
                                    <p className="text-sm text-slate-600 max-w-3xl">
                                        Determine whether, where, and exactly when to launch through Go/No-Go readiness scoring, competitive radar mapping, and macro-cycle evaluation.
                                    </p>
                                </div>
                            </div>
                            <span className="text-xs font-mono text-blue-600 font-bold bg-blue-50 px-3 py-1 rounded-full shrink-0">
                                Validation Milestone
                            </span>
                        </div>

                        {/* Layer 1 */}
                        <div className="p-6 rounded-2xl bg-white border border-slate-200 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:border-indigo-400 hover:shadow-md transition-all shadow-xs">
                            <div className="flex items-start gap-4">
                                <div className="px-3.5 py-1.5 rounded-xl bg-indigo-50 text-indigo-600 font-mono font-bold text-sm shrink-0 border border-indigo-100">
                                    L1
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-slate-900 mb-1">Layer 1 — Demand Discovery</h3>
                                    <p className="text-sm text-slate-600 max-w-3xl">
                                        Separate speculative bot hype from high-conviction holders by scoring on-chain intent, community signals, and wallet behaviors.
                                    </p>
                                </div>
                            </div>
                            <span className="text-xs font-mono text-indigo-600 font-bold bg-indigo-50 px-3 py-1 rounded-full shrink-0">
                                Audience Verification
                            </span>
                        </div>

                        {/* Layer 2 */}
                        <div className="p-6 rounded-2xl bg-white border border-slate-200 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:border-purple-400 hover:shadow-md transition-all shadow-xs">
                            <div className="flex items-start gap-4">
                                <div className="px-3.5 py-1.5 rounded-xl bg-purple-50 text-purple-600 font-mono font-bold text-sm shrink-0 border border-purple-100">
                                    L2
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-slate-900 mb-1">Layer 2 — Acquisition & Launch Execution</h3>
                                    <p className="text-sm text-slate-600 max-w-3xl">
                                        Coordinated multi-channel activation: influencer sequencing, exchange listings, sybil-resistant incentives, and PR narrative control.
                                    </p>
                                </div>
                            </div>
                            <span className="text-xs font-mono text-purple-600 font-bold bg-purple-50 px-3 py-1 rounded-full shrink-0">
                                TGE Apex Ops
                            </span>
                        </div>

                        {/* Layer 3 */}
                        <div className="p-6 rounded-2xl bg-white border border-slate-200 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:border-teal-400 hover:shadow-md transition-all shadow-xs">
                            <div className="flex items-start gap-4">
                                <div className="px-3.5 py-1.5 rounded-xl bg-teal-50 text-teal-600 font-mono font-bold text-sm shrink-0 border border-teal-100">
                                    L3
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-slate-900 mb-1">Layer 3 — Revenue & Lifecycle Retention</h3>
                                    <p className="text-sm text-slate-600 max-w-3xl">
                                        Convert token adoption into active utility: wallet journey intelligence, automated re-engagement, protocol fee capture, and staking locks.
                                    </p>
                                </div>
                            </div>
                            <span className="text-xs font-mono text-teal-600 font-bold bg-teal-50 px-3 py-1 rounded-full shrink-0">
                                Compounding Fees
                            </span>
                        </div>

                        {/* Layer 4 */}
                        <div className="p-6 rounded-2xl bg-white border border-slate-200 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:border-emerald-400 hover:shadow-md transition-all shadow-xs">
                            <div className="flex items-start gap-4">
                                <div className="px-3.5 py-1.5 rounded-xl bg-emerald-50 text-emerald-600 font-mono font-bold text-sm shrink-0 border border-emerald-100">
                                    L4
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-slate-900 mb-1">Layer 4 — Performance Attribution & Forecasting</h3>
                                    <p className="text-sm text-slate-600 max-w-3xl">
                                        Measure campaign economics, attribute verified wallet acquisition costs, model treasury inflows, and provide forecast predictability.
                                    </p>
                                </div>
                            </div>
                            <span className="text-xs font-mono text-emerald-600 font-bold bg-emerald-50 px-3 py-1 rounded-full shrink-0">
                                Predictive Telemetry
                            </span>
                        </div>
                    </div>

                    {/* Integrated Trust Layer Callout Card */}
                    <div className="p-8 rounded-3xl bg-white border-2 border-emerald-500/50 shadow-md relative overflow-hidden">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center shrink-0">
                                    <Lock className="w-6 h-6" />
                                </div>
                                <div>
                                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-100 block mb-2 w-fit">
                                        Encompassing Trust Layer
                                    </span>
                                    <h3 className="text-2xl font-bold text-slate-900 mb-2 font-heading">
                                        Compliance by Design — Operational Guardrails
                                    </h3>
                                    <p className="text-sm sm:text-base text-slate-600 max-w-3xl leading-relaxed">
                                        Runs continuously across all five layers: creative promotional reviews, influencer disclosures, jurisdictional checklists (EU MiCA, UAE VARA, India ASCI), and KYC/AML-ready whitelist verification.
                                    </p>
                                </div>
                            </div>
                            <Link
                                to="/ico-acceleration/trust-performance"
                                className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm px-6 py-3.5 rounded-xl transition-colors shadow-sm shrink-0"
                            >
                                <span>Review Trust Framework</span>
                                <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── 5. FIVE SPECIALIZED ARCHITECTURE SUB-PAGES (PREMIUM ELEVATED BENTO CARDS) ── */}
            <section className="py-20 lg:py-28 bg-white border-b border-slate-200/80 text-slate-900">
                <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600 block mb-2">
                            Modular Deep Dives
                        </span>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-4 font-heading">
                            Five Specialized Architecture Sub-Pages
                        </h2>
                        <p className="text-slate-600 text-base sm:text-lg">
                            Explore the detailed engines, deliverables, and operational frameworks inside each dedicated section.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* Pillar 1 */}
                        <Link
                            to="/ico-acceleration/intelligence"
                            className="group p-8 rounded-3xl bg-slate-50 border border-slate-200 hover:border-blue-500 hover:bg-white hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
                        >
                            <div>
                                <div className="w-12 h-12 rounded-2xl bg-blue-100/80 text-blue-600 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                                    <Target className="w-6 h-6" />
                                </div>
                                <span className="text-xs font-mono text-blue-600 font-bold block mb-1">Pillar 01</span>
                                <h3 className="text-2xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors font-heading">
                                    Intelligence
                                </h3>
                                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                                    Validate genuine market demand, score Go/No-Go launch readiness, map competitive displacement radar, and eliminate blind spots before deployment.
                                </p>
                            </div>
                            <div className="flex items-center gap-2 text-sm font-bold text-blue-600 pt-4 border-t border-slate-200 group-hover:border-blue-100">
                                <span>Explore Intelligence Systems</span>
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </div>
                        </Link>

                        {/* Pillar 2 */}
                        <Link
                            to="/ico-acceleration/launch-growth"
                            className="group p-8 rounded-3xl bg-slate-50 border border-slate-200 hover:border-indigo-500 hover:bg-white hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
                        >
                            <div>
                                <div className="w-12 h-12 rounded-2xl bg-indigo-100/80 text-indigo-600 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                                    <Rocket className="w-6 h-6" />
                                </div>
                                <span className="text-xs font-mono text-indigo-600 font-bold block mb-1">Pillar 02</span>
                                <h3 className="text-2xl font-bold text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors font-heading">
                                    Launch & Growth
                                </h3>
                                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                                    Coordinate multi-channel TGE execution across 20–50 verified creators, listing desks, liquidity pools, and post-launch compounding loops.
                                </p>
                            </div>
                            <div className="flex items-center gap-2 text-sm font-bold text-indigo-600 pt-4 border-t border-slate-200 group-hover:border-indigo-100">
                                <span>Explore Launch Playbook</span>
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </div>
                        </Link>

                        {/* Pillar 3 */}
                        <Link
                            to="/ico-acceleration/solutions-engagement"
                            className="group p-8 rounded-3xl bg-slate-50 border border-slate-200 hover:border-purple-500 hover:bg-white hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
                        >
                            <div>
                                <div className="w-12 h-12 rounded-2xl bg-purple-100/80 text-purple-600 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                                    <Layers className="w-6 h-6" />
                                </div>
                                <span className="text-xs font-mono text-purple-600 font-bold block mb-1">Pillar 03</span>
                                <h3 className="text-2xl font-bold text-slate-900 mb-2 group-hover:text-purple-600 transition-colors font-heading">
                                    Solutions & Engagement
                                </h3>
                                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                                    Tailored architectures for L1/L2s, DeFi, Gaming, and CEXs, paired with six proven commercial engagement models.
                                </p>
                            </div>
                            <div className="flex items-center gap-2 text-sm font-bold text-purple-600 pt-4 border-t border-slate-200 group-hover:border-purple-100">
                                <span>Explore Models & Solutions</span>
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </div>
                        </Link>

                        {/* Pillar 4 */}
                        <Link
                            to="/ico-acceleration/trust-performance"
                            className="group p-8 rounded-3xl bg-slate-50 border border-slate-200 hover:border-emerald-500 hover:bg-white hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
                        >
                            <div>
                                <div className="w-12 h-12 rounded-2xl bg-emerald-100/80 text-emerald-600 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                                    <ShieldCheck className="w-6 h-6" />
                                </div>
                                <span className="text-xs font-mono text-emerald-600 font-bold block mb-1">Pillar 04</span>
                                <h3 className="text-2xl font-bold text-slate-900 mb-2 group-hover:text-emerald-600 transition-colors font-heading">
                                    Trust & Performance
                                </h3>
                                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                                    Integrate institutional compliance guardrails (MiCA, VARA), attribution engines, and verifiable revenue measurement.
                                </p>
                            </div>
                            <div className="flex items-center gap-2 text-sm font-bold text-emerald-600 pt-4 border-t border-slate-200 group-hover:border-emerald-100">
                                <span>Explore Trust Frameworks</span>
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </div>
                        </Link>

                        {/* Pillar 5 */}
                        <Link
                            to="/ico-acceleration/sales-enablement"
                            className="group p-8 rounded-3xl bg-slate-50 border border-slate-200 hover:border-teal-500 hover:bg-white hover:shadow-xl transition-all duration-300 flex flex-col justify-between md:col-span-2 lg:col-span-1"
                        >
                            <div>
                                <div className="w-12 h-12 rounded-2xl bg-teal-100/80 text-teal-600 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                                    <Users className="w-6 h-6" />
                                </div>
                                <span className="text-xs font-mono text-teal-600 font-bold block mb-1">Pillar 05</span>
                                <h3 className="text-2xl font-bold text-slate-900 mb-2 group-hover:text-teal-600 transition-colors font-heading">
                                    Sales Enablement
                                </h3>
                                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                                    Execute structured discovery using SPICED, address common founder objections, and establish clear commercial alignment.
                                </p>
                            </div>
                            <div className="flex items-center gap-2 text-sm font-bold text-teal-600 pt-4 border-t border-slate-200 group-hover:border-teal-100">
                                <span>Explore Discovery Framework</span>
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </div>
                        </Link>

                        {/* Direct Consultation Tile */}
                        <div className="p-8 rounded-3xl bg-gradient-to-br from-blue-600 to-indigo-700 text-white flex flex-col justify-between shadow-xl">
                            <div>
                                <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center mb-6 backdrop-blur-sm">
                                    <Compass className="w-6 h-6 text-white" />
                                </div>
                                <span className="text-xs font-mono text-blue-200 font-bold block mb-1">Get Started</span>
                                <h3 className="text-2xl font-bold text-white mb-2 font-heading">
                                    Schedule Strategy Call
                                </h3>
                                <p className="text-sm text-blue-100 leading-relaxed mb-6">
                                    Review your tokenomics, exchange pipeline, and launch readiness with our Web3 growth strategists.
                                </p>
                            </div>
                            <Link
                                to="/book-consultation"
                                className="w-full inline-flex items-center justify-center gap-2 bg-white text-blue-600 hover:bg-blue-50 font-bold py-3.5 px-6 rounded-xl transition-colors shadow-md text-sm"
                            >
                                <span>Book Consultation</span>
                                <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── 6. INTERACTIVE LAUNCH MODEL SELECTOR WIDGET (MATCHING ENGAGEMENT MODEL PAGE UX) ── */}
            <section id="selector" className="scroll-mt-24 py-20 lg:py-28 bg-slate-50 border-b border-slate-200/80 text-slate-900">
                <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl mb-12">
                        <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600 block mb-2">
                            Interactive Decision Engine
                        </span>
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading">
                            Find Your Recommended Launch Model
                        </h2>
                        <p className="text-base sm:text-lg text-slate-600 mt-2">
                            Select your ecosystem archetype and current launch window to determine the optimal operational framework.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                        {/* Selector Controls (Left 6 Cols) */}
                        <div className="lg:col-span-6 space-y-6">
                            {/* Archetype Selector */}
                            <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-xs">
                                <label className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 block mb-3">
                                    Step 1: Select Ecosystem Archetype
                                </label>
                                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                                    {[
                                        { id: 'ico', label: 'ICO / TGE Founder' },
                                        { id: 'l1', label: 'Layer 1 / Layer 2' },
                                        { id: 'defi', label: 'DeFi Protocol' },
                                        { id: 'gaming', label: 'Web3 Gaming' },
                                        { id: 'depin', label: 'DePIN Network' }
                                    ].map((arch) => (
                                        <button
                                            key={arch.id}
                                            onClick={() => setSelectedArchetype(arch.id as any)}
                                            className={`p-3 rounded-xl text-xs font-bold text-left transition-all ${
                                                selectedArchetype === arch.id
                                                    ? 'bg-blue-600 text-white shadow-md'
                                                    : 'bg-slate-50 text-slate-700 hover:bg-slate-100 border border-slate-200/60'
                                            }`}
                                        >
                                            {arch.label}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Urgency / Launch Window Selector */}
                            <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-xs">
                                <label className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 block mb-3">
                                    Step 2: Select Launch Timing Window
                                </label>
                                <div className="grid grid-cols-3 gap-2">
                                    {[
                                        { id: 'urgent', label: '< 90 Days (Active Launch)', desc: 'High urgency execution' },
                                        { id: 'planned', label: '3–6 Months (Planned)', desc: 'Validation & scoping' },
                                        { id: 'live', label: 'Already Live (Post-TGE)', desc: 'Retention & fee recovery' }
                                    ].map((win) => (
                                        <button
                                            key={win.id}
                                            onClick={() => setSelectedUrgency(win.id as any)}
                                            className={`p-3 rounded-xl text-left transition-all ${
                                                selectedUrgency === win.id
                                                    ? 'bg-blue-600 text-white shadow-md'
                                                    : 'bg-slate-50 text-slate-700 hover:bg-slate-100 border border-slate-200/60'
                                            }`}
                                        >
                                            <div className="text-xs font-bold">{win.label}</div>
                                            <div className={`text-[10px] mt-0.5 ${selectedUrgency === win.id ? 'text-blue-100' : 'text-slate-400'}`}>
                                                {win.desc}
                                            </div>
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Resolved Recommendation Output (Right 6 Cols) */}
                        <div className="lg:col-span-6">
                            <div className="p-8 rounded-3xl bg-white border-2 border-blue-600 shadow-xl relative overflow-hidden">
                                <div className="flex items-center justify-between mb-4">
                                    <span className="text-xs font-mono font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                                        {resolvedSelector.modelCode}
                                    </span>
                                    <span className="text-xs font-mono text-slate-500 font-bold">
                                        Duration: {resolvedSelector.timeline}
                                    </span>
                                </div>

                                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-3 font-heading">
                                    {resolvedSelector.model}
                                </h3>

                                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                                    {resolvedSelector.desc}
                                </p>

                                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 mb-6 space-y-2">
                                    <div className="text-xs font-mono font-bold text-blue-600 uppercase">
                                        Primary Deliverable Output:
                                    </div>
                                    <div className="text-sm font-semibold text-slate-900">
                                        {resolvedSelector.deliverable}
                                    </div>
                                </div>

                                <div className="flex flex-col sm:flex-row gap-3">
                                    <Link
                                        to="/book-consultation"
                                        className="flex-1 inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 px-6 rounded-xl transition-colors shadow-md text-sm"
                                    >
                                        <span>Request Scope for this Model</span>
                                        <ArrowRight className="w-4 h-4" />
                                    </Link>
                                    <Link
                                        to="/ico-acceleration/solutions-engagement"
                                        className="inline-flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold py-3.5 px-5 rounded-xl transition-colors text-sm"
                                    >
                                        <span>All 6 Models</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── 7. SIX COMMERCIAL ENGAGEMENT MODELS PREVIEW (CRISP CLEAN PRICING CARDS) ── */}
            <section className="py-20 lg:py-28 bg-white border-b border-slate-200/80 text-slate-900">
                <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                        <div>
                            <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600 block mb-2">
                                Commercial Terms & Transparency
                            </span>
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight font-heading">
                                Six Commercial Engagement Models
                            </h2>
                            <p className="text-slate-600 text-base sm:text-lg mt-2">
                                From low-commitment advisory sprints to shared-upside risk partnerships.
                            </p>
                        </div>
                        <Link
                            to="/ico-acceleration/solutions-engagement"
                            className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-blue-700 bg-blue-50 hover:bg-blue-100 px-5 py-2.5 rounded-xl transition-colors border border-blue-200"
                        >
                            <span>Compare Detailed Deliverables & Scopes</span>
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            {
                                code: "Model 01",
                                name: "Launch Diagnostic Sprint",
                                duration: "2–4 Weeks",
                                target: "Pre-Launch & Early Teams",
                                scope: "Demand readiness audit, tokenomics review, Go/No-Go scorecard, and compliance sanity check.",
                                deliverable: "Board-Ready Launch Readiness Dossier",
                                commercials: "Fixed-fee advisory sprint"
                            },
                            {
                                code: "Model 02",
                                name: "Strategic Advisory Retainer",
                                duration: "3–6 Months",
                                target: "Foundations & Protocol Councils",
                                scope: "Ongoing executive counsel, exchange listing advisory, market-maker SLAs, and governance review.",
                                deliverable: "Bi-Weekly Strategy Command & Review",
                                commercials: "Monthly retainer"
                            },
                            {
                                code: "Model 03",
                                name: "Fractional Launch Operations",
                                duration: "3–6 Months",
                                target: "Lean Teams without Full In-House GTM",
                                scope: "Embedded CMO and Head of Growth co-pilot driving day-to-day execution, community, and KOL ops.",
                                deliverable: "Embedded Cross-Functional Launch Pod",
                                commercials: "Monthly retainer"
                            },
                            {
                                code: "Model 04",
                                name: "TGE Command & Launch Ops",
                                duration: "8–12 Weeks",
                                target: "TGE Within 90-Day Execution Window",
                                scope: "Full-scale multi-channel orchestration: KOL campaign sequencing, exchange comms, whitelist ops, and PR war-room.",
                                deliverable: "Turnkey Launch Day Execution Command",
                                commercials: "Project fee + optional token warrants"
                            },
                            {
                                code: "Model 05",
                                name: "Performance / Hybrid Model",
                                duration: "6 Months",
                                target: "High-Conviction Live Protocols",
                                scope: "Reduced base cash retainer with performance fees tied strictly to verifiable on-chain outcomes (verified holders, TVL).",
                                deliverable: "Risk-Sharing Growth Partnership",
                                commercials: "Reduced base + milestone performance"
                            },
                            {
                                code: "Model 06",
                                name: "Enterprise Ecosystem License",
                                duration: "Annual Engagement",
                                target: "L1/L2 Foundations & Venture Studios",
                                scope: "Deploy proprietary ProfitMachines demand discovery algorithms, automated builder BD pipelines, and attribution telemetry.",
                                deliverable: "Full Technology & Playbook Deployment",
                                commercials: "Annual enterprise license"
                            }
                        ].map((m, idx) => (
                            <div 
                                key={idx} 
                                className="p-8 rounded-3xl bg-slate-50 border border-slate-200 hover:border-blue-400 hover:shadow-lg transition-all flex flex-col justify-between"
                            >
                                <div>
                                    <div className="flex items-center justify-between mb-4">
                                        <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-600 font-mono text-xs font-bold uppercase tracking-wider border border-blue-100">
                                            {m.code}
                                        </span>
                                        <div className="flex items-center gap-1.5 text-xs text-slate-500 font-mono">
                                            <Clock className="w-3.5 h-3.5 text-blue-600" />
                                            <span>{m.duration}</span>
                                        </div>
                                    </div>

                                    <h3 className="text-xl font-bold text-slate-900 mb-1 font-heading">{m.name}</h3>
                                    <div className="text-xs font-mono text-slate-500 mb-4">{m.target}</div>

                                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                                        {m.scope}
                                    </p>

                                    <div className="p-4 rounded-2xl bg-white border border-slate-200/80 mb-6 space-y-1">
                                        <div className="text-[11px] font-mono text-blue-600 uppercase font-bold">Key Deliverable:</div>
                                        <div className="text-xs font-semibold text-slate-800">{m.deliverable}</div>
                                        <div className="text-[11px] text-slate-500 pt-1 font-mono">{m.commercials}</div>
                                    </div>
                                </div>

                                <Link
                                    to="/book-consultation"
                                    className="w-full inline-flex items-center justify-center gap-2 bg-white hover:bg-blue-600 text-slate-800 hover:text-white border border-slate-200 hover:border-blue-600 px-5 py-3 rounded-xl font-bold text-xs sm:text-sm transition-colors shadow-2xs"
                                >
                                    <span>Discuss This Model</span>
                                    <ArrowRight className="w-4 h-4" />
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── 8. EXECUTIVE FINAL CTA (MATCHING OFFERINGS & ENGAGEMENT MODEL HERO/CTA SYSTEM) ── */}
            <section className="relative bg-slate-950 text-white py-20 lg:py-28 overflow-hidden border-t border-slate-800 text-center">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2000&q=80"
                        alt="Enterprise Web3 Launch Architecture"
                        className="w-full h-full object-cover object-center opacity-30 mix-blend-luminosity"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/90 to-slate-950/70" />
                </div>

                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/20 border border-blue-400/40 text-blue-300 text-xs font-semibold uppercase tracking-wider mb-6 font-mono">
                        <Sparkles className="w-3.5 h-3.5 text-blue-400" />
                        <span>Confidential Protocol Evaluation</span>
                    </div>

                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-6 font-heading">
                        Build Your Next Token Launch Revenue Engine
                    </h2>

                    <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
                        Let's evaluate your tokenomics, review listing timelines, and recommend the right commercial acceleration structure for your ecosystem.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
                        <Link
                            to="/book-consultation"
                            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold px-8 py-4 rounded-xl transition-all shadow-lg border border-blue-400/40 text-base group"
                        >
                            <span>Book Confidential Consultation</span>
                            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                        <Link
                            to="/ico-acceleration/intelligence"
                            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold px-8 py-4 rounded-xl transition-all text-base border border-white/30 backdrop-blur-sm"
                        >
                            <span>Explore Demand Intelligence</span>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
