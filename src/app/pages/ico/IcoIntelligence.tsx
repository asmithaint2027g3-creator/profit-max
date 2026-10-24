import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
    Target, ArrowRight, CheckCircle2, ShieldCheck, Search, Users, 
    BarChart3, Activity, FileText, Sparkles, Layers, Compass, TrendingUp,
    Clock, Lock, AlertTriangle, ArrowUpRight, Cpu
} from 'lucide-react';

export default function IcoIntelligence() {
    const location = useLocation();

    useEffect(() => {
        document.title = "Market & Demand Intelligence | ProfitMachines Crypto Protocol";
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
    }, [location.hash, location.pathname]);

    return (
        <div className="min-h-screen bg-slate-50/50 text-slate-900 pt-16 lg:pt-[72px] font-sans selection:bg-blue-500/20">
            {/* ── 1. HERO SECTION (DARK ARCHITECTURAL BACKGROUND WITH EXECUTIVE METRICS) ── */}
            <section className="relative bg-slate-950 text-white py-16 lg:py-24 overflow-hidden border-b border-slate-800">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=2000&q=80"
                        alt="Crypto Intelligence Architecture"
                        className="w-full h-full object-cover object-center opacity-30 mix-blend-luminosity"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/85 to-slate-900/60" />
                    <div className="absolute inset-0 bg-radial-at-t from-blue-950/40 via-transparent to-transparent pointer-events-none" />
                </div>

                <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                        <div className="lg:col-span-8">
                            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/20 border border-blue-400/40 text-blue-300 text-xs font-semibold uppercase tracking-wider mb-6 font-mono shadow-sm">
                                <Target className="w-3.5 h-3.5 text-blue-400" />
                                <span>Pillar 01 · Market & Demand Intelligence</span>
                            </div>

                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.08] mb-6 font-heading">
                                Empirical Intelligence That Informs <span className="text-blue-400">Every Token Launch Decision</span>
                            </h1>

                            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed font-normal mb-8 max-w-3xl">
                                ProfitMachines replaces speculative guesswork with verified on-chain telemetry. We help founders, token foundations, and ecosystem leaders assess launch timing, discover organic buyer demand, and eliminate catastrophic primary market errors.
                            </p>

                            <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-slate-400 mb-8 font-mono">
                                {[
                                    'TAM/SAM/SOM Modeling', 
                                    'Go/No-Go Readiness Score', 
                                    'Wallet-Level Intent', 
                                    'Competitive Whitespace', 
                                    'Anti-Sybil Filters'
                                ].map((tag, idx) => (
                                    <span key={idx} className="bg-slate-900/80 text-slate-300 px-3 py-1 rounded-full border border-slate-700/80">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <div className="flex flex-wrap items-center gap-4">
                                <Link
                                    to="/book-consultation"
                                    className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold px-7 py-3.5 rounded-xl transition-all shadow-lg border border-blue-400/40 text-sm sm:text-base group"
                                >
                                    <span>Request Intelligence Audit</span>
                                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                                </Link>
                                <a
                                    href="#tam-breakdown"
                                    className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold px-7 py-3.5 rounded-xl transition-all text-sm sm:text-base border border-white/30 backdrop-blur-sm shadow-md"
                                >
                                    <span>Explore TAM Matrix</span>
                                </a>
                                <Link
                                    to="/ico-acceleration"
                                    className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-400 hover:text-blue-300 px-2 py-3.5"
                                >
                                    <span>Back to Protocol Hub</span>
                                    <ArrowUpRight className="w-3.5 h-3.5" />
                                </Link>
                            </div>
                        </div>

                        {/* Right Preview Card */}
                        <div className="lg:col-span-4">
                            <div className="bg-slate-900/90 text-white rounded-3xl overflow-hidden shadow-2xl border border-slate-800 p-6 space-y-4">
                                <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                                    <span className="text-xs font-mono font-bold text-blue-400 uppercase tracking-wider">Telemetry Engine</span>
                                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                                </div>
                                <div className="space-y-3 text-xs text-slate-300 font-mono">
                                    <div className="flex items-center justify-between">
                                        <span className="text-slate-400">Total Capital Tracked:</span>
                                        <span className="text-white font-bold">$4.2T+ TAM</span>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span className="text-slate-400">Wallets Scored:</span>
                                        <span className="text-emerald-400 font-bold">2.4M+ High-Conviction</span>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span className="text-slate-400">Bot Noise Rejection:</span>
                                        <span className="text-cyan-400 font-bold">98.2% Sybil Filter</span>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span className="text-slate-400">Readiness Scorecard:</span>
                                        <span className="text-indigo-400 font-bold">14 Operational Vectors</span>
                                    </div>
                                </div>
                                <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 text-[11px] text-slate-400 leading-relaxed">
                                    Pre-TGE intelligence prevents the #1 cause of launch failure: deploying millions into unverified market windows without authenticated demand depth.
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 4 Counter Metrics */}
                    <div className="mt-14 pt-8 border-t border-slate-800 grid grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 shadow-sm">
                            <div className="text-3xl font-extrabold font-mono text-white mb-1">$4.2T+</div>
                            <div className="text-xs font-bold text-slate-300 mb-0.5">TAM Liquidity Monitored</div>
                            <div className="text-[11px] text-slate-400">Across 32 global crypto sectors</div>
                        </div>
                        <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 shadow-sm">
                            <div className="text-3xl font-extrabold font-mono text-white mb-1">14 Vectors</div>
                            <div className="text-xs font-bold text-slate-300 mb-0.5">Go/No-Go Gate Review</div>
                            <div className="text-[11px] text-slate-400">Audit, exchange, and community signals</div>
                        </div>
                        <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 shadow-sm">
                            <div className="text-3xl font-extrabold font-mono text-white mb-1">2.4M+</div>
                            <div className="text-xs font-bold text-slate-300 mb-0.5">Scored Active Wallets</div>
                            <div className="text-[11px] text-slate-400">Ranked by duration and staking fidelity</div>
                        </div>
                        <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 shadow-sm">
                            <div className="text-3xl font-extrabold font-mono text-white mb-1">&lt; 14 Days</div>
                            <div className="text-xs font-bold text-slate-300 mb-0.5">Diagnostic Turnaround</div>
                            <div className="text-[11px] text-slate-400">Board-ready diligence report</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── 2. SECTION: TAM / SAM / SOM BREAKDOWN (ANCHOR: #tam-breakdown) ── */}
            <section id="tam-breakdown" className="scroll-mt-24 py-20 lg:py-28 bg-slate-50 border-b border-slate-200/80 text-slate-900">
                <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
                        <div className="max-w-3xl">
                            <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600 block mb-2">
                                Capital Formation Architecture
                            </span>
                            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading">
                                TAM / SAM / SOM Market Sizing & Go/No-Go Readiness
                            </h2>
                            <p className="text-base sm:text-lg text-slate-600 mt-2 leading-relaxed">
                                Sizing real liquidity depth across public blockchain ecosystems before capital deployment. We replace vanity follower metrics with empirical buyer propensity.
                            </p>
                        </div>
                        <Link
                            to="/book-consultation"
                            className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-blue-700 bg-blue-50 hover:bg-blue-100 px-5 py-2.5 rounded-xl transition-colors border border-blue-200 shrink-0"
                        >
                            <span>Commission Sizing Model</span>
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>

                    {/* 3 Tier Sizing Bento Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                        {/* TAM */}
                        <div className="p-8 rounded-3xl bg-white border border-slate-200 hover:border-blue-400 hover:shadow-lg transition-all shadow-xs flex flex-col justify-between">
                            <div>
                                <div className="flex items-center justify-between mb-4">
                                    <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-600 font-mono text-xs font-bold uppercase tracking-wider border border-blue-100">
                                        Macro Liquidity
                                    </span>
                                    <span className="text-xs font-mono text-slate-400">Total Universe</span>
                                </div>
                                <div className="text-4xl font-extrabold font-mono text-slate-900 mb-2">$4.2 Trillion</div>
                                <h3 className="text-lg font-bold text-slate-900 mb-3">Total Addressable Market (TAM)</h3>
                                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                                    Global digital asset capital, centralized and decentralized exchange liquidity, institutional custodial reserves, and institutional fund treasuries.
                                </p>
                                <ul className="space-y-2.5 text-xs text-slate-600">
                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                                        <span>Layer 1 & Layer 2 native settlement base</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                                        <span>Global stablecoin velocity & reserves ($190B+)</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                                        <span>Global crypto hedge fund & family office AUM</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="mt-8 pt-4 border-t border-slate-100 text-xs font-mono text-slate-500">
                                Scope: Complete Digital Asset Ecosystem
                            </div>
                        </div>

                        {/* SAM */}
                        <div className="p-8 rounded-3xl bg-white border-2 border-blue-500 hover:border-blue-600 hover:shadow-xl transition-all shadow-md flex flex-col justify-between relative">
                            <div className="absolute top-4 right-4">
                                <span className="px-2.5 py-0.5 rounded-full bg-blue-600 text-white font-mono text-[10px] font-bold uppercase tracking-wider">
                                    Target Sector
                                </span>
                            </div>
                            <div>
                                <div className="flex items-center justify-between mb-4">
                                    <span className="px-3 py-1 rounded-full bg-indigo-50 text-indigo-600 font-mono text-xs font-bold uppercase tracking-wider border border-indigo-100">
                                        Serviceable Scope
                                    </span>
                                </div>
                                <div className="text-4xl font-extrabold font-mono text-slate-900 mb-2">$680 Billion</div>
                                <h3 className="text-lg font-bold text-slate-900 mb-3">Serviceable Addressable Market (SAM)</h3>
                                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                                    Liquid capital actively circulating within your specific target ecosystem (e.g. EVM-compatible DeFi, Solana Gaming, or decentralized AI compute networks).
                                </p>
                                <ul className="space-y-2.5 text-xs text-slate-700 font-medium">
                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
                                        <span>Cross-chain bridge volume entering target chains</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
                                        <span>Active protocol stakers and DEX liquidity providers</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
                                        <span>Verified testnet participants and faucet depositors</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="mt-8 pt-4 border-t border-slate-100 text-xs font-mono text-indigo-600 font-bold">
                                Focus: Sector-Matched Addressable Capital
                            </div>
                        </div>

                        {/* SOM */}
                        <div className="p-8 rounded-3xl bg-white border border-slate-200 hover:border-blue-400 hover:shadow-lg transition-all shadow-xs flex flex-col justify-between">
                            <div>
                                <div className="flex items-center justify-between mb-4">
                                    <span className="px-3 py-1 rounded-full bg-teal-50 text-teal-600 font-mono text-xs font-bold uppercase tracking-wider border border-teal-100">
                                        Day-One Capture
                                    </span>
                                    <span className="text-xs font-mono text-slate-400">Launch Window</span>
                                </div>
                                <div className="text-4xl font-extrabold font-mono text-slate-900 mb-2">$45M – $120M</div>
                                <h3 className="text-lg font-bold text-slate-900 mb-3">Serviceable Obtainable Market (SOM)</h3>
                                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                                    Realistic, mathematically validated liquidity captured during the 90-day TGE execution window through whitelist allocations and secondary trading pools.
                                </p>
                                <ul className="space-y-2.5 text-xs text-slate-600">
                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                                        <span>Tier-1 & Tier-2 CEX launchpad participation</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                                        <span>Sybil-resistant verified community whitelist funding</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                                        <span>Dedicated market-maker initial depth commitments</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="mt-8 pt-4 border-t border-slate-100 text-xs font-mono text-teal-600 font-bold">
                                Target: Attributable Day-One Capital
                            </div>
                        </div>
                    </div>

                    {/* Go/No-Go Decision Scorecard Box */}
                    <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 mb-6 border-b border-slate-100">
                            <div>
                                <span className="text-xs font-mono font-bold text-blue-600 uppercase tracking-wider">
                                    Proprietary Gate 01
                                </span>
                                <h3 className="text-2xl font-bold text-slate-900 mt-1 font-heading">
                                    14-Vector Go / No-Go Launch Readiness Scorecard
                                </h3>
                            </div>
                            <div className="px-4 py-2 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-mono font-bold">
                                Minimum Launch Threshold: 85 / 100
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/60">
                                <div className="text-xs font-mono text-blue-600 font-bold mb-1">VECTOR 01–03</div>
                                <h4 className="text-sm font-bold text-slate-900 mb-1">Technical Audit & Contracts</h4>
                                <p className="text-xs text-slate-600">Dual security audit completion, timelock governance verification, and multichain testnet stress tests.</p>
                            </div>
                            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/60">
                                <div className="text-xs font-mono text-indigo-600 font-bold mb-1">VECTOR 04–06</div>
                                <h4 className="text-sm font-bold text-slate-900 mb-1">Exchange & MM Alignment</h4>
                                <p className="text-xs text-slate-600">Locked listing agreements, market-maker SLA depth agreements, and secondary spread management plans.</p>
                            </div>
                            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/60">
                                <div className="text-xs font-mono text-purple-600 font-bold mb-1">VECTOR 07–10</div>
                                <h4 className="text-sm font-bold text-slate-900 mb-1">Community & Intent Depth</h4>
                                <p className="text-xs text-slate-600">Verified unique wallet counts, Telegram/Discord non-bot sentiment index, and active testnet transactions.</p>
                            </div>
                            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/60">
                                <div className="text-xs font-mono text-emerald-600 font-bold mb-1">VECTOR 11–14</div>
                                <h4 className="text-sm font-bold text-slate-900 mb-1">Regulatory Hygiene</h4>
                                <p className="text-xs text-slate-600">MiCA whitepaper compliance check, legal utility opinion letters, and regional promotion disclaimers.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── 3. SECTION: ICP & ARCHETYPE MATRICES (ANCHOR: #icp-matrix) ── */}
            <section id="icp-matrix" className="scroll-mt-24 py-20 lg:py-28 bg-white border-b border-slate-200/80 text-slate-900">
                <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl mb-14">
                        <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600 block mb-2">
                            Audience Architecture
                        </span>
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading">
                            Ideal Customer Profiles (ICP) & Token Participant Matrices
                        </h2>
                        <p className="text-base sm:text-lg text-slate-600 mt-2 leading-relaxed">
                            Web3 communities are not monolithic. We segment your launch communications into four distinct buyer archetypes, eliminating mixed signals that destroy token velocity.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {/* Archetype 1 */}
                        <div className="p-7 rounded-3xl bg-slate-50 border border-slate-200 hover:border-blue-400 hover:shadow-md transition-all flex flex-col justify-between">
                            <div>
                                <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center mb-5 font-bold">
                                    <Building2 className="w-6 h-6" />
                                </div>
                                <span className="text-xs font-mono font-bold text-blue-600 block mb-1">ARCHETYPE 01</span>
                                <h3 className="text-xl font-bold text-slate-900 mb-2">Institutional VCs & Angels</h3>
                                <p className="text-xs text-slate-600 leading-relaxed mb-6">
                                    Lead investors seeking long-term protocol equity, governance token allocations, and fundamental technical moats.
                                </p>
                                <div className="space-y-2 pt-4 border-t border-slate-200 text-xs">
                                    <div className="text-slate-500 font-mono">Decision Trigger:</div>
                                    <div className="font-semibold text-slate-800">Founder pedigree, tokenomics vesting schedules & audit hygiene.</div>
                                </div>
                            </div>
                            <div className="mt-6 pt-3 border-t border-slate-200 text-[11px] font-mono text-blue-600 font-bold">
                                Conversion: Private Allocation Dossier
                            </div>
                        </div>

                        {/* Archetype 2 */}
                        <div className="p-7 rounded-3xl bg-slate-50 border border-slate-200 hover:border-indigo-400 hover:shadow-md transition-all flex flex-col justify-between">
                            <div>
                                <div className="w-12 h-12 rounded-2xl bg-indigo-100 text-indigo-600 flex items-center justify-center mb-5 font-bold">
                                    <Coins className="w-6 h-6" />
                                </div>
                                <span className="text-xs font-mono font-bold text-indigo-600 block mb-1">ARCHETYPE 02</span>
                                <h3 className="text-xl font-bold text-slate-900 mb-2">Whales & Liquidity Providers</h3>
                                <p className="text-xs text-slate-600 leading-relaxed mb-6">
                                    High-net-worth wallet operators deploying capital into staking pools, DEX pairs, and initial bridge contracts.
                                </p>
                                <div className="space-y-2 pt-4 border-t border-slate-200 text-xs">
                                    <div className="text-slate-500 font-mono">Decision Trigger:</div>
                                    <div className="font-semibold text-slate-800">Sustainable real yield, market-maker presence & liquidity lockups.</div>
                                </div>
                            </div>
                            <div className="mt-6 pt-3 border-t border-slate-200 text-[11px] font-mono text-indigo-600 font-bold">
                                Conversion: Staking & Whitelist Engine
                            </div>
                        </div>

                        {/* Archetype 3 */}
                        <div className="p-7 rounded-3xl bg-slate-50 border border-slate-200 hover:border-purple-400 hover:shadow-md transition-all flex flex-col justify-between">
                            <div>
                                <div className="w-12 h-12 rounded-2xl bg-purple-100 text-purple-600 flex items-center justify-center mb-5 font-bold">
                                    <Cpu className="w-6 h-6" />
                                </div>
                                <span className="text-xs font-mono font-bold text-purple-600 block mb-1">ARCHETYPE 03</span>
                                <h3 className="text-xl font-bold text-slate-900 mb-2">Ecosystem Builders & Nodes</h3>
                                <p className="text-xs text-slate-600 leading-relaxed mb-6">
                                    Engineers deploying smart contracts, running validator nodes, or integrating protocol APIs.
                                </p>
                                <div className="space-y-2 pt-4 border-t border-slate-200 text-xs">
                                    <div className="text-slate-500 font-mono">Decision Trigger:</div>
                                    <div className="font-semibold text-slate-800">SDK documentation quality, grant incentives & developer tooling.</div>
                                </div>
                            </div>
                            <div className="mt-6 pt-3 border-t border-slate-200 text-[11px] font-mono text-purple-600 font-bold">
                                Conversion: Builder Grants & Hackathons
                            </div>
                        </div>

                        {/* Archetype 4 */}
                        <div className="p-7 rounded-3xl bg-slate-50 border border-slate-200 hover:border-teal-400 hover:shadow-md transition-all flex flex-col justify-between">
                            <div>
                                <div className="w-12 h-12 rounded-2xl bg-teal-100 text-teal-600 flex items-center justify-center mb-5 font-bold">
                                    <Users className="w-6 h-6" />
                                </div>
                                <span className="text-xs font-mono font-bold text-teal-600 block mb-1">ARCHETYPE 04</span>
                                <h3 className="text-xl font-bold text-slate-900 mb-2">Core Community Believers</h3>
                                <p className="text-xs text-slate-600 leading-relaxed mb-6">
                                    Organic protocol advocates participating in governance, referral loops, and social amplify mechanics.
                                </p>
                                <div className="space-y-2 pt-4 border-t border-slate-200 text-xs">
                                    <div className="text-slate-500 font-mono">Decision Trigger:</div>
                                    <div className="font-semibold text-slate-800">Clear mission, active founder voice & non-extractive tokenomics.</div>
                                </div>
                            </div>
                            <div className="mt-6 pt-3 border-t border-slate-200 text-[11px] font-mono text-teal-600 font-bold">
                                Conversion: Gamified Whitelist Quests
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── 4. SECTION: COMPETITIVE WHITESPACE ANALYSIS (ANCHOR: #competitive-whitespace) ── */}
            <section id="competitive-whitespace" className="scroll-mt-24 py-20 lg:py-28 bg-slate-50 border-b border-slate-200/80 text-slate-900">
                <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl mb-14">
                        <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600 block mb-2">
                            Market Radar
                        </span>
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading">
                            Competitive Whitespace & Displacement Radar
                        </h2>
                        <p className="text-base sm:text-lg text-slate-600 mt-2 leading-relaxed">
                            Detecting community friction, governance disputes, and migration catalysts across competing protocols to capture users seeking better throughput, gas economics, or fairer governance.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                        <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-xs">
                            <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
                                <Search className="w-5 h-5" />
                            </div>
                            <h3 className="text-base font-bold text-slate-900 mb-2">Competitor Friction Mining</h3>
                            <p className="text-xs text-slate-600 leading-relaxed">
                                Continuous tracking of governance complaints, transaction latency spikes, and fee inflation across direct competitors.
                            </p>
                        </div>
                        <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-xs">
                            <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-4">
                                <TrendingUp className="w-5 h-5" />
                            </div>
                            <h3 className="text-base font-bold text-slate-900 mb-2">Liquidity Migration Signals</h3>
                            <p className="text-xs text-slate-600 leading-relaxed">
                                Identifying uncommitted capital seeking alternative staking yields when rival incentive programs compress emission curves.
                            </p>
                        </div>
                        <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-xs">
                            <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center mb-4">
                                <ShieldCheck className="w-5 h-5" />
                            </div>
                            <h3 className="text-base font-bold text-slate-900 mb-2">Positioning Whitespace</h3>
                            <p className="text-xs text-slate-600 leading-relaxed">
                                Synthesizing defensible messaging matrices that contrast your architectural moats against legacy incumbents.
                            </p>
                        </div>
                        <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-xs">
                            <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center mb-4">
                                <Activity className="w-5 h-5" />
                            </div>
                            <h3 className="text-base font-bold text-slate-900 mb-2">Targeted Bridge Campaigns</h3>
                            <p className="text-xs text-slate-600 leading-relaxed">
                                Structuring zero-fee bridge campaigns and grant matching to welcome migrating developer teams and LPs.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── 5. SECTION: REAL-TIME DEMAND ENGINE (ANCHOR: #demand-engine - DARK EXECUTIVE RHYTHM) ── */}
            <section id="demand-engine" className="scroll-mt-24 py-20 lg:py-28 bg-slate-950 text-white border-b border-slate-800">
                <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                        <div className="lg:col-span-6">
                            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/20 border border-blue-400/40 text-blue-300 text-xs font-semibold uppercase tracking-wider mb-6 font-mono">
                                <Cpu className="w-3.5 h-3.5 text-blue-400" />
                                <span>On-Chain Telemetry Engine</span>
                            </div>

                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-6 font-heading">
                                Real-Time Demand Intelligence & Intent Telemetry
                            </h2>

                            <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-6 font-normal">
                                Uncover verifiable token adoption intent before speculative hype hits. We track on-chain wallet clustering, cross-chain deposit flows, and multi-channel community sentiment to score authentic launch readiness.
                            </p>

                            <div className="space-y-4 text-sm text-slate-300 mb-8">
                                <div className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                                    <span><strong>Wallet Intent Scoring:</strong> Historical duration scoring, staking locks, and contract interaction counts.</span>
                                </div>
                                <div className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                                    <span><strong>Anti-Sybil Clustering:</strong> Machine learning graph heuristics separating 1 real user from 500 script bots.</span>
                                </div>
                                <div className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                                    <span><strong>Community Health Index:</strong> Natural language analysis of Discord/Telegram messaging velocity.</span>
                                </div>
                            </div>

                            <Link
                                to="/book-consultation"
                                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold px-7 py-3.5 rounded-xl transition-all shadow-lg text-sm"
                            >
                                <span>Deploy Demand Radar for Your Token</span>
                                <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>

                        {/* Telemetry Visual Dashboard */}
                        <div className="lg:col-span-6 p-8 rounded-3xl bg-slate-900 border border-slate-800 shadow-2xl">
                            <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-800">
                                <span className="text-xs font-mono font-bold text-white uppercase">Live Telemetry Dashboard Preview</span>
                                <span className="text-xs font-mono text-emerald-400 font-bold">100% Deterministic</span>
                            </div>

                            <div className="space-y-4 font-mono text-xs">
                                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800/80">
                                    <div className="flex justify-between text-slate-400 mb-1">
                                        <span>ORGANIC DEMAND INDEX</span>
                                        <span className="text-blue-400 font-bold">92.4 / 100</span>
                                    </div>
                                    <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                                        <div className="bg-blue-500 h-full w-[92.4%]" />
                                    </div>
                                </div>

                                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800/80">
                                    <div className="flex justify-between text-slate-400 mb-1">
                                        <span>BOT TRAFFIC REJECTION</span>
                                        <span className="text-emerald-400 font-bold">98.2% Sybil Filtered</span>
                                    </div>
                                    <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                                        <div className="bg-emerald-500 h-full w-[98.2%]" />
                                    </div>
                                </div>

                                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800/80">
                                    <div className="flex justify-between text-slate-400 mb-1">
                                        <span>GO/NO-GO CONFIDENCE</span>
                                        <span className="text-teal-400 font-bold">CLEAR FOR TGE</span>
                                    </div>
                                    <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                                        <div className="bg-teal-500 h-full w-[88%]" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── 6. BOTTOM EXECUTIVE CTA ── */}
            <section className="relative bg-slate-950 text-white py-20 lg:py-24 border-t border-slate-800 text-center">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4 font-heading">
                        Commission Your Token Market & Demand Intelligence Audit
                    </h2>
                    <p className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto mb-8">
                        Get definitive Go/No-Go clarity, verified buyer intent data, and an institutional launch roadmap before public deployment.
                    </p>
                    <div className="flex flex-wrap items-center justify-center gap-4">
                        <Link
                            to="/book-consultation"
                            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold px-8 py-4 rounded-xl transition-all shadow-lg text-base"
                        >
                            <span>Schedule Intelligence Briefing</span>
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                        <Link
                            to="/ico-acceleration/launch-growth"
                            className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold px-8 py-4 rounded-xl transition-all text-base border border-white/20"
                        >
                            <span>Proceed to 7-Phase Launch Playbook</span>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
