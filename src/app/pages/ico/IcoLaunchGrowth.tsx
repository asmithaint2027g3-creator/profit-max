import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
    Rocket, Users, BarChart3, TrendingUp, CheckCircle2, ArrowRight, ShieldCheck, 
    Coins, Clock, Layers, Zap, Bot, Network, RefreshCw, Handshake, ArrowUpRight,
    Lock, Sparkles, Building2, HelpCircle
} from 'lucide-react';

export default function IcoLaunchGrowth() {
    const location = useLocation();
    const [activePhaseIndex, setActivePhaseIndex] = useState(0);

    useEffect(() => {
        document.title = "7-Phase Launch & Growth Execution | ProfitMachines Crypto Protocol";
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

    const phases = [
        {
            phase: "Phase 1",
            timeline: "T-16 to T-12 Weeks",
            title: "Foundation & Architecture",
            focus: "Structural planning, tokenomics stress-testing, and compliance alignment.",
            actions: [
                "Tokenomics and emission curve modeling under extreme volatility scenarios",
                "Legal & regulatory compliance classification review (MiCA / VARA guardrails)",
                "Foundation treasury, token allocation, and vesting smart contract drafting",
                "Core narrative and brand positioning kit crystallization"
            ],
            deliverable: "Finalized legal memo, audited tokenomics schedule, signed technical advisory agreements."
        },
        {
            phase: "Phase 2",
            timeline: "T-90 to T-61 Days",
            title: "Community Infrastructure & Digital Presence",
            focus: "Deploying official channels, litepaper publication, and seeding authentic contributors.",
            actions: [
                "Telegram & Discord infrastructure deployment with Sybil-resistant verification",
                "Official protocol portal, technical litepaper, and documentation release",
                "Support channel staffing and 24/7 global community moderation onboarding",
                "Foundational content pipeline: deep-dives, developer blogs, and explainer threads"
            ],
            deliverable: "5,000+ organic Discord members, 15%+ engagement rate, verified mod coverage."
        },
        {
            phase: "Phase 3",
            timeline: "T-60 to T-31 Days",
            title: "Momentum Building & Creator Seeding",
            focus: "Securing tier-1 creator alignment, PR seeding, and whitelist qualification rollout.",
            actions: [
                "Micro-first creator sequencing: engaging 20–50 verified crypto researchers and analysts",
                "Major crypto publication PR placement (CoinDesk, Cointelegraph, Decrypt coverage)",
                "Whitelist task campaigns with bot-filtering and proof-of-humanity mechanics",
                "Early community governance simulations and product feedback testnets"
            ],
            deliverable: "25,000+ whitelist submissions, 80%+ Sybil filtration pass rate, positive sentiment index."
        },
        {
            phase: "Phase 4",
            timeline: "T-30 to T-1 Days",
            title: "Activation & Listing Operations",
            focus: "Exchange listing confirmations, market-maker coordination, and final countdown.",
            actions: [
                "Finalizing CEX / DEX listing agreements and market-maker liquidity parameters",
                "Phased T-21 to T-7 listing announcement schedule subject to exchange governance",
                "High-intensity creator campaign activation across X, YouTube, and Telegram",
                "Founder video AMAs, global Twitter/X Spaces, and whitelist allocation freeze"
            ],
            deliverable: "Confirmed CEX/DEX pairs, MM liquidity committed, 50,000+ active launch participants."
        },
        {
            phase: "Phase 5",
            timeline: "TGE Week",
            title: "TGE Coordinated Launch Execution",
            focus: "Live contract deployment, token generation, claiming window, and liquidity stabilization.",
            actions: [
                "Smart contract token generation execution and decentralized liquidity seeding",
                "Coordinated exchange trading open announcements and claiming portal activation",
                "Real-time DEX slippage, gas spike, and transaction flow telemetry monitoring",
                "Continuous creator engagement and 24/7 community sentiment crisis desk"
            ],
            deliverable: "Zero contract exploits, uninterrupted claim processing, stable order book depth."
        },
        {
            phase: "Phase 6",
            timeline: "T+1 to T+90 Days",
            title: "Post-TGE Compounding & Utility",
            focus: "Defeating the post-launch volume cliff through product adoption and staking rollouts.",
            actions: [
                "90-day post-launch content, developer workshops, and user adoption sprints",
                "Staking pools, governance forums, and token-utility mechanism rollout",
                "Tracking wallet retention trajectories, churn signals, and token velocity",
                "Regular transparent ecosystem development and treasury transparency reports"
            ],
            deliverable: "40%+ 30-day active wallet retention, 25%+ circulating supply locked in staking."
        },
        {
            phase: "Phase 7",
            timeline: "T+91 to T+180 Days",
            title: "Ecosystem Expansion & Long-Term Revenue",
            focus: "Institutional integrations, secondary exchange tier upgrades, and DAO maturity.",
            actions: [
                "Tier-1 secondary exchange listing expansion (Binance, Coinbase, OKX)",
                "Institutional custody, market-making review, and treasury diversification",
                "Ecosystem grant fund deployment to accelerate builder adoption",
                "Progressive decentralization milestones and transition to community DAO governance"
            ],
            deliverable: "Secondary market stability, recurring protocol fee growth, active governance voting quorum."
        }
    ];

    return (
        <div className="min-h-screen bg-slate-50/50 text-slate-900 pt-16 lg:pt-[72px] font-sans selection:bg-blue-500/20">
            {/* ── 1. HERO SECTION (OFFERINGS & ENGAGEMENT DESIGN) ── */}
            <section className="relative bg-slate-950 text-white py-16 lg:py-24 overflow-hidden border-b border-slate-800">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=2000&q=80"
                        alt="7-Phase Launch Playbook"
                        className="w-full h-full object-cover object-center opacity-30 mix-blend-luminosity"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/85 to-slate-900/60" />
                    <div className="absolute inset-0 bg-radial-at-t from-blue-950/40 via-transparent to-transparent pointer-events-none" />
                </div>

                <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                        <div className="lg:col-span-8">
                            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/20 border border-blue-400/40 text-blue-300 text-xs font-semibold uppercase tracking-wider mb-6 font-mono shadow-sm">
                                <Rocket className="w-3.5 h-3.5 text-blue-400" />
                                <span>Pillar 02 · 7-Phase Launch & Growth Execution</span>
                            </div>

                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.08] mb-6 font-heading">
                                Orchestrated Token Launch Execution <span className="text-blue-400">From T-16 Weeks to Scale</span>
                            </h1>

                            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed font-normal mb-8 max-w-3xl">
                                Coordinated marketing, multi-tier exchange listings, and post-TGE utility retention. We synchronize 20–50 verified crypto researchers, liquidity operations, and institutional compliance so your token launches with depth and compounds afterwards.
                            </p>

                            <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-slate-400 mb-8 font-mono">
                                {[
                                    '7-Phase Lifecycle Roadmap', 
                                    'Liquidity Engine & MM Sync', 
                                    'Sybil-Resistant Whitelist', 
                                    'Creator Swarm Orchestration', 
                                    'Post-TGE Fee Monetization'
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
                                    <span>Schedule Launch Operations Review</span>
                                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                                </Link>
                                <a
                                    href="#lifecycle-phases"
                                    className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold px-7 py-3.5 rounded-xl transition-all text-sm sm:text-base border border-white/30 backdrop-blur-sm shadow-md"
                                >
                                    <span>Explore 7 Phases</span>
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
                                    <span className="text-xs font-mono font-bold text-blue-400 uppercase tracking-wider">Execution Command Desk</span>
                                    <span className="w-2.5 h-2.5 rounded-full bg-blue-400 animate-pulse" />
                                </div>
                                <div className="space-y-3 text-xs text-slate-300 font-mono">
                                    <div className="flex items-center justify-between">
                                        <span className="text-slate-400">Total Lifecycle:</span>
                                        <span className="text-white font-bold">180 Days Monitored</span>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span className="text-slate-400">Verified KOL Network:</span>
                                        <span className="text-emerald-400 font-bold">140+ Research Leads</span>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span className="text-slate-400">Exchange Listing Desks:</span>
                                        <span className="text-cyan-400 font-bold">Tier 1 & Tier 2 Covered</span>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span className="text-slate-400">Retention Horizon:</span>
                                        <span className="text-indigo-400 font-bold">90-Day Compounding</span>
                                    </div>
                                </div>
                                <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 text-[11px] text-slate-400 leading-relaxed">
                                    Eliminate siloed agencies. ProfitMachines synchronizes creator sequencing, exchange listing ops, and community moderation into one unified command room.
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 4 Counter Metrics */}
                    <div className="mt-14 pt-8 border-t border-slate-800 grid grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 shadow-sm">
                            <div className="text-3xl font-extrabold font-mono text-white mb-1">7 Phases</div>
                            <div className="text-xs font-bold text-slate-300 mb-0.5">End-to-End Roadmap</div>
                            <div className="text-[11px] text-slate-400">From T-16 weeks to secondary market scale</div>
                        </div>
                        <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 shadow-sm">
                            <div className="text-3xl font-extrabold font-mono text-white mb-1">20–50</div>
                            <div className="text-xs font-bold text-slate-300 mb-0.5">Verified Researchers / KOLs</div>
                            <div className="text-[11px] text-slate-400">Sequenced micro-first for authentic intent</div>
                        </div>
                        <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 shadow-sm">
                            <div className="text-3xl font-extrabold font-mono text-white mb-1">Zero Exploits</div>
                            <div className="text-xs font-bold text-slate-300 mb-0.5">Claiming Portal Security</div>
                            <div className="text-[11px] text-slate-400">Multi-audited distribution smart contracts</div>
                        </div>
                        <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 shadow-sm">
                            <div className="text-3xl font-extrabold font-mono text-white mb-1">&gt; 40%</div>
                            <div className="text-xs font-bold text-slate-300 mb-0.5">60-Day Active Retention</div>
                            <div className="text-[11px] text-slate-400">Defeating the post-TGE volume cliff</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── 2. SECTION: 7-PHASE LIFECYCLE ROADMAP (ANCHOR: #lifecycle-phases) ── */}
            <section id="lifecycle-phases" className="scroll-mt-24 py-20 lg:py-28 bg-slate-50 border-b border-slate-200/80 text-slate-900">
                <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
                        <div className="max-w-3xl">
                            <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600 block mb-2">
                                Operational Continuum
                            </span>
                            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading">
                                The 7-Phase Token Launch Lifecycle Roadmap
                            </h2>
                            <p className="text-base sm:text-lg text-slate-600 mt-2 leading-relaxed">
                                A rigorously sequenced roadmap covering every phase of your launch—from architectural modeling to day-one apex coordination and secondary market compounding.
                            </p>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="text-xs font-mono font-bold text-slate-500 uppercase">
                                Phased Delivery Architecture
                            </span>
                        </div>
                    </div>

                    {/* Phased Cards Vertical Timeline */}
                    <div className="space-y-6 mb-12">
                        {phases.map((item, idx) => (
                            <div 
                                key={idx}
                                className={`p-8 rounded-3xl bg-white border transition-all shadow-xs ${
                                    idx === 4 
                                        ? 'border-2 border-blue-500 shadow-lg' 
                                        : 'border-slate-200 hover:border-blue-400 hover:shadow-md'
                                }`}
                            >
                                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-4 mb-4 border-b border-slate-100">
                                    <div className="flex items-center gap-4">
                                        <div className={`px-3.5 py-1.5 rounded-xl font-mono text-xs font-bold uppercase tracking-wider ${
                                            idx === 4 
                                                ? 'bg-blue-600 text-white' 
                                                : 'bg-blue-50 text-blue-600 border border-blue-100'
                                        }`}>
                                            {item.phase}
                                        </div>
                                        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-heading">
                                            {item.title}
                                        </h3>
                                    </div>
                                    <div className="flex items-center gap-2 text-xs font-mono font-bold text-slate-500 bg-slate-50 px-3 py-1 rounded-full border border-slate-200/60 w-fit">
                                        <Clock className="w-3.5 h-3.5 text-blue-600" />
                                        <span>{item.timeline}</span>
                                    </div>
                                </div>

                                <p className="text-sm font-semibold text-slate-700 mb-6">
                                    Focus: {item.focus}
                                </p>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                                    {item.actions.map((act, aIdx) => (
                                        <div key={aIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600">
                                            <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                                            <span>{act}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-center justify-between gap-4 text-xs font-mono">
                                    <span className="text-slate-500 font-bold uppercase">Exit Deliverable:</span>
                                    <span className="text-slate-800 font-semibold">{item.deliverable}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── 3. SECTION: LIQUIDITY GENERATION ENGINE (ANCHOR: #liquidity-engine) ── */}
            <section id="liquidity-engine" className="scroll-mt-24 py-20 lg:py-28 bg-white border-b border-slate-200/80 text-slate-900">
                <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl mb-14">
                        <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600 block mb-2">
                            Liquidity Operations
                        </span>
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading">
                            Liquidity Generation Engine & Market-Maker Coordination
                        </h2>
                        <p className="text-base sm:text-lg text-slate-600 mt-2 leading-relaxed">
                            A successful token launch requires balanced liquidity architecture on day one. We coordinate market-maker SLAs, decentralized pool initial depth, and anti-dump vesting mechanisms.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                        <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 hover:border-blue-400 hover:shadow-lg transition-all">
                            <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center mb-5 font-bold">
                                <Coins className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-2">Market-Maker Alignment</h3>
                            <p className="text-sm text-slate-600 leading-relaxed mb-4">
                                Structuring binding market-making SLAs: maximum acceptable bid-ask spreads, guaranteed order book depth, and loan-plus-call-option contract boundaries.
                            </p>
                            <div className="text-xs font-mono text-blue-600 font-bold pt-3 border-t border-slate-200">
                                Protection: No spread blowout on listing open
                            </div>
                        </div>

                        <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 hover:border-indigo-400 hover:shadow-lg transition-all">
                            <div className="w-12 h-12 rounded-2xl bg-indigo-100 text-indigo-600 flex items-center justify-center mb-5 font-bold">
                                <Zap className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-2">DEX Initial Pool Seeding</h3>
                            <p className="text-sm text-slate-600 leading-relaxed mb-4">
                                Determining optimal initial paired liquidity (USDC/USDT or native gas asset) across Uniswap, Raydium, or PancakeSwap to maintain low slippage.
                            </p>
                            <div className="text-xs font-mono text-indigo-600 font-bold pt-3 border-t border-slate-200">
                                Metric: Calibrated price discovery curves
                            </div>
                        </div>

                        <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 hover:border-teal-400 hover:shadow-lg transition-all">
                            <div className="w-12 h-12 rounded-2xl bg-teal-100 text-teal-600 flex items-center justify-center mb-5 font-bold">
                                <ShieldCheck className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-2">Anti-Dump Vesting Mechanics</h3>
                            <p className="text-sm text-slate-600 leading-relaxed mb-4">
                                Smart contract timelocks, block-by-block streaming releases, and cliff schedules protecting secondary markets from large unlocks.
                            </p>
                            <div className="text-xs font-mono text-teal-600 font-bold pt-3 border-t border-slate-200">
                                Audit: Transparent public timelock proofs
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── 4. SECTION: VIRAL COMMUNITY LOOPS (ANCHOR: #viral-loops) ── */}
            <section id="viral-loops" className="scroll-mt-24 py-20 lg:py-28 bg-slate-50 border-b border-slate-200/80 text-slate-900">
                <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl mb-14">
                        <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600 block mb-2">
                            Growth Mechanics
                        </span>
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading">
                            Viral Community Loops & Creator Orchestration
                        </h2>
                        <p className="text-base sm:text-lg text-slate-600 mt-2 leading-relaxed">
                            Stop paying for useless influencer retweets. We deploy a coordinated micro-first creator swarm combined with Sybil-resistant referral loops that convert social buzz into funded wallets.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-xs">
                            <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
                                <Users className="w-5 h-5" />
                            </div>
                            <h3 className="text-base font-bold text-slate-900 mb-2">Micro-First KOL Sequencing</h3>
                            <p className="text-xs text-slate-600 leading-relaxed">
                                Seeding deep-dive technical threads with 20–50 niche crypto analysts before activating top-tier macro channels.
                            </p>
                        </div>
                        <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-xs">
                            <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-4">
                                <Network className="w-5 h-5" />
                            </div>
                            <h3 className="text-base font-bold text-slate-900 mb-2">Sybil-Resistant Quests</h3>
                            <p className="text-xs text-slate-600 leading-relaxed">
                                Gitcoin Passport, on-chain transaction verification, and wallet age thresholds eliminating bot farms from rewards.
                            </p>
                        </div>
                        <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-xs">
                            <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center mb-4">
                                <TrendingUp className="w-5 h-5" />
                            </div>
                            <h3 className="text-base font-bold text-slate-900 mb-2">Referral Multipliers</h3>
                            <p className="text-xs text-slate-600 leading-relaxed">
                                Tiered allocation boosts for verified wallet referrals, motivating high-net-worth community members to invite peer whales.
                            </p>
                        </div>
                        <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-xs">
                            <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center mb-4">
                                <RefreshCw className="w-5 h-5" />
                            </div>
                            <h3 className="text-base font-bold text-slate-900 mb-2">24/7 War Room Desk</h3>
                            <p className="text-xs text-slate-600 leading-relaxed">
                                Instant crisis communication, FUD response protocols, and coordinated founder audio spaces during listing volatility.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── 5. SECTION: EXCHANGE LISTING FRAMEWORKS (ANCHOR: #exchange-frameworks - DARK EXECUTIVE RHYTHM) ── */}
            <section id="exchange-frameworks" className="scroll-mt-24 py-20 lg:py-28 bg-slate-950 text-white border-b border-slate-800">
                <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl mb-14">
                        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/20 border border-blue-400/40 text-blue-300 text-xs font-semibold uppercase tracking-wider mb-4 font-mono">
                            <Building2 className="w-3.5 h-3.5 text-blue-400" />
                            <span>Institutional Distribution</span>
                        </div>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4 font-heading">
                            Exchange Listing Frameworks & Due Diligence Desks
                        </h2>
                        <p className="text-slate-300 text-base sm:text-lg">
                            Navigating CEX listing criteria requires rigorous institutional preparation. We assist teams in assembling listing documentation, technical token audit standards, and regional regulatory filings.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="p-8 rounded-3xl bg-slate-900 border border-slate-800 flex flex-col justify-between">
                            <div>
                                <span className="text-xs font-mono font-bold text-blue-400 uppercase tracking-wider block mb-2">
                                    TIER 1 EXCHANGES
                                </span>
                                <h3 className="text-xl font-bold text-white mb-2">Binance · Coinbase · OKX</h3>
                                <p className="text-xs text-slate-400 leading-relaxed mb-6">
                                    Institutional compliance audit, formal legal utility opinions, proof of distributed token supply (no single entity &gt;10%), and verified on-chain usage volume.
                                </p>
                            </div>
                            <div className="pt-4 border-t border-slate-800 text-xs font-mono text-slate-300">
                                Preparation Cycle: 8–16 Weeks
                            </div>
                        </div>

                        <div className="p-8 rounded-3xl bg-slate-900 border border-slate-800 flex flex-col justify-between">
                            <div>
                                <span className="text-xs font-mono font-bold text-indigo-400 uppercase tracking-wider block mb-2">
                                    TIER 2 EXCHANGES
                                </span>
                                <h3 className="text-xl font-bold text-white mb-2">Bybit · KuCoin · Gate.io</h3>
                                <p className="text-xs text-slate-400 leading-relaxed mb-6">
                                    Launchpool coordination, marketing co-promotions, community voting campaigns, and verified market-maker liquidity depth guarantees.
                                </p>
                            </div>
                            <div className="pt-4 border-t border-slate-800 text-xs font-mono text-slate-300">
                                Preparation Cycle: 4–8 Weeks
                            </div>
                        </div>

                        <div className="p-8 rounded-3xl bg-slate-900 border border-slate-800 flex flex-col justify-between">
                            <div>
                                <span className="text-xs font-mono font-bold text-teal-400 uppercase tracking-wider block mb-2">
                                    DECENTRALIZED EXCHANGES
                                </span>
                                <h3 className="text-xl font-bold text-white mb-2">Uniswap · Raydium · Aerodrome</h3>
                                <p className="text-xs text-slate-400 leading-relaxed mb-6">
                                    Decentralized smart contract pool deployment, LP token burning or timelocking proofs, and automated arbitrage stabilization integrations.
                                </p>
                            </div>
                            <div className="pt-4 border-t border-slate-800 text-xs font-mono text-slate-300">
                                Preparation Cycle: 2–4 Weeks
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── 6. BOTTOM EXECUTIVE CTA ── */}
            <section className="relative bg-slate-950 text-white py-20 lg:py-24 border-t border-slate-800 text-center">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4 font-heading">
                        Execute Your Token Launch with Institutional Precision
                    </h2>
                    <p className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto mb-8">
                        Connect with our launch operations command desk to evaluate your exchange agreements, KOL sequencing, and TGE timeline.
                    </p>
                    <div className="flex flex-wrap items-center justify-center gap-4">
                        <Link
                            to="/book-consultation"
                            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold px-8 py-4 rounded-xl transition-all shadow-lg text-base"
                        >
                            <span>Schedule Launch Operations Call</span>
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                        <Link
                            to="/ico-acceleration/solutions-engagement"
                            className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold px-8 py-4 rounded-xl transition-all text-base border border-white/20"
                        >
                            <span>Explore 6 Engagement Models</span>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
