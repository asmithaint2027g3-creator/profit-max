import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
    Layers, Cpu, Coins, Gamepad2, Landmark, Rocket, CheckCircle2, 
    ArrowRight, Clock, ShieldCheck, DollarSign, Sparkles, Building2,
    ArrowUpRight, Sliders, Shield, FileText, Check
} from 'lucide-react';

export default function IcoSolutionsEngagement() {
    const location = useLocation();

    useEffect(() => {
        document.title = "Solutions & Commercial Models | ProfitMachines Crypto Protocol";
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

    const segments = [
        {
            icon: Cpu,
            title: "L1 / L2 Blockchain Ecosystems",
            tag: "Infrastructure & Protocols",
            challenges: "Slow ecosystem business development, lack of developer onboarding visibility, unpredictable grant pipeline ROI, and unmeasured TVL-to-revenue attribution.",
            solutions: [
                "Automated developer onboarding funnels and hackathon lead conversion pipelines",
                "Ecosystem grant tracking with milestone-based payout attribution",
                "Cross-chain bridge volume analysis and liquidity provider retention modeling",
                "Protocol fee attribution tying developer activity directly to gas fee capture"
            ]
        },
        {
            icon: Coins,
            title: "DeFi Protocols & Yield Platforms",
            tag: "Decentralized Finance",
            challenges: "Mercenary capital churning immediately after incentive exhaustion, invisible on-chain borrower/lender intent, and steep liquidity acquisition costs.",
            solutions: [
                "Wallet-level intent scoring to isolate long-term liquidity providers from farmers",
                "Dynamic incentive modeling to protect protocol treasuries from vampire attacks",
                "Continuous wallet journey mapping and liquidity withdrawal early warning radar",
                "Predictable protocol fee monetization modeling across swaps, lending, and spreads"
            ]
        },
        {
            icon: Gamepad2,
            title: "Web3 Gaming & Virtual Worlds",
            tag: "Gaming Studios & Virtual Worlds",
            challenges: "Divergent player vs. token-holder journeys, escalating user acquisition costs (UAC), massive bot farming, and severe post-launch DAU drop-offs.",
            solutions: [
                "Distinct dual-funnel journeys: in-game players vs. governance token investors",
                "Proof-of-play anti-bot telemetry to safeguard reward pools for genuine players",
                "Seasonal retention calendars, guild partnership pipelines, and tournament activations",
                "Sustainable in-game token sinks and marketplace royalty capture mechanisms"
            ]
        },
        {
            icon: Landmark,
            title: "Centralized Exchanges (CEX)",
            tag: "Trading Desks & Marketplaces",
            challenges: "Sluggish listing pipelines, high market-maker subsidies, decision bottlenecks, and inability to attribute trading volume to specific campaigns.",
            solutions: [
                "Automated token listing pipeline evaluation and project readiness scoring",
                "Market-maker SLA coordination and liquidity health telemetry dashboards",
                "Regional promotional compliance workflows (ASCI, VARA, MiCA adhering)",
                "Full-funnel volume attribution mapping influencer spend directly to taker fees"
            ]
        },
        {
            icon: Rocket,
            title: "ICO, IDO & TGE Founders",
            tag: "New Token Projects",
            challenges: "Uncrystallized narrative, insufficient community lead time, listing desk negotiation friction, opaque compliance requirements, and post-listing cliff.",
            solutions: [
                "One-sentence narrative core and complete tokenomics messaging framework",
                "Phased 16-week launch playbook synchronizing 20–50 creators with listing announcements",
                "Compliance by Design pre-launch review protocols for promotional collateral",
                "Day-one post-TGE retention machine to ensure staking and active product adoption"
            ]
        }
    ];

    const models = [
        {
            model: "Model 01",
            name: "Launch Diagnostic Sprint",
            duration: "2–3 Weeks",
            target: "Pre-launch token teams, foundations, and venture-backed founders.",
            scope: "Comprehensive market readiness audit, token narrative & tokenomics review, competitive whitespace radar, jurisdictional compliance mapping (MiCA/VARA), and a customized 90-day execution blueprint.",
            deliverable: "Definitive Go/No-Go Scorecard & Master Launch Blueprint.",
            commercials: "Fixed Fee. Fee credit applied toward Model 02 (TGE Command) upon commercial confirmation.",
            ctaText: "Request Diagnostic Sprint"
        },
        {
            model: "Model 02",
            name: "TGE Command & Launch Ops",
            duration: "16 Weeks (T-16 to TGE)",
            target: "Confirmed token projects with scheduled TGE date.",
            scope: "Full execution of Layers 0–2: creator orchestration (20–50 KOLs), Sybil-resistant airdrop engineering, listing operations, exchange PR, community growth desks, and Trust Layer reviews.",
            deliverable: "Coordinated TGE Launch Execution & Day-One Liquidity Orchestration.",
            commercials: "Structured Monthly Retainer + Media & Creator Costs pass-through at cost.",
            ctaText: "Engage TGE Command"
        },
        {
            model: "Model 03",
            name: "Post-TGE Growth Retainer",
            duration: "6–12 Months (Quarterly Reviews)",
            target: "Post-TGE protocols seeking to eliminate user churn and scale recurring fees.",
            scope: "Execution of Layer 3 & 4: wallet lifecycle automation, 90-day content calendar, staking/governance adoption sprints, institutional BD pipeline, and revenue forecasting.",
            deliverable: "Active Wallet Retention & Predictable Monthly Protocol Fees.",
            commercials: "Monthly Retainer + Agreed Performance Bonus for verified operational milestones.",
            ctaText: "Scale Post-TGE Growth"
        },
        {
            model: "Model 04",
            name: "Performance / Token-Aligned Hybrid",
            duration: "Project-Specific Milestones",
            target: "High-conviction founders with vetted token utility and treasury governance.",
            scope: "Full-stack launch and growth execution tied directly to defined operational outcomes: verified wallet counts, tier-1 exchange listings, protocol fee volume, and TVL targets.",
            deliverable: "Outcome-Aligned Operational Execution.",
            commercials: "Reduced Base Retainer + Defined Success Fees (never tied to secondary market price appreciation).",
            ctaText: "Discuss Hybrid Structure"
        },
        {
            model: "Model 05",
            name: "MVP → GTM Acceleration",
            duration: "8–12 Weeks",
            target: "Early-stage crypto startups moving from whitepaper to working product.",
            scope: "Idea-to-MVP architecture scoping, early on-chain demand validation, investor narrative framing, testnet community seeding, and GTM readiness audit.",
            deliverable: "Functional MVP, Validated Buyer Signals & Seed/Series A Pitch Kit.",
            commercials: "Fixed Advisory Fee. Optional venture-style upside separately agreed.",
            ctaText: "Accelerate MVP to GTM"
        },
        {
            model: "Model 06",
            name: "Enterprise Ecosystem License",
            duration: "Annual Enterprise License",
            target: "Layer 1 / Layer 2 Foundations, Centralized Exchanges, and Gaming Platforms.",
            scope: "Enterprise deployment of ProfitMachines' complete revenue protocol: wallet intelligence engine, demand discovery feeds, automated attribution, and Trust Layer compliance dashboards.",
            deliverable: "Dedicated Infrastructure Deployment & Quarterly Strategy Retainer.",
            commercials: "Annual Platform License + Custom Deployment Fee based on ecosystem scale.",
            ctaText: "Inquire About Licensing"
        }
    ];

    return (
        <div className="min-h-screen bg-slate-50/50 text-slate-900 pt-16 lg:pt-[72px] font-sans selection:bg-blue-500/20">
            {/* ── 1. HERO SECTION (OFFERINGS & ENGAGEMENT DESIGN) ── */}
            <section className="relative bg-slate-950 text-white py-16 lg:py-24 overflow-hidden border-b border-slate-800">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=2000&q=80"
                        alt="Web3 Solutions Architecture"
                        className="w-full h-full object-cover object-center opacity-30 mix-blend-luminosity"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/85 to-slate-900/60" />
                    <div className="absolute inset-0 bg-radial-at-t from-blue-950/40 via-transparent to-transparent pointer-events-none" />
                </div>

                <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                        <div className="lg:col-span-8">
                            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/20 border border-blue-400/40 text-blue-300 text-xs font-semibold uppercase tracking-wider mb-6 font-mono shadow-sm">
                                <Layers className="w-3.5 h-3.5 text-blue-400" />
                                <span>Pillar 03 · Solutions & Commercial Engagement Models</span>
                            </div>

                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.08] mb-6 font-heading">
                                Tailored Web3 Solutions & <span className="text-blue-400">Six Transparent Commercial Models</span>
                            </h1>

                            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed font-normal mb-8 max-w-3xl">
                                From 2-week diagnostic sprints to full TGE command and shared-upside growth partnerships. Choose a structured commercial framework tailored to your stage, urgency, and token governance requirements.
                            </p>

                            <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-slate-400 mb-8 font-mono">
                                {[
                                    'L1/L2 Infrastructure', 
                                    'DeFi & Staking', 
                                    'Web3 Gaming Studios', 
                                    'CEX Due Diligence', 
                                    'Primary TGE Launches'
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
                                    <span>Discuss Engagement Scope</span>
                                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                                </Link>
                                <a
                                    href="#commercial-models"
                                    className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold px-7 py-3.5 rounded-xl transition-all text-sm sm:text-base border border-white/30 backdrop-blur-sm shadow-md"
                                >
                                    <span>Compare All 6 Models</span>
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
                                    <span className="text-xs font-mono font-bold text-blue-400 uppercase tracking-wider">Commercial Matrix</span>
                                    <span className="w-2.5 h-2.5 rounded-full bg-blue-400 animate-pulse" />
                                </div>
                                <div className="space-y-3 text-xs text-slate-300 font-mono">
                                    <div className="flex items-center justify-between">
                                        <span className="text-slate-400">Total Models:</span>
                                        <span className="text-white font-bold">Six Commercial Scopes</span>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span className="text-slate-400">Sectors Supported:</span>
                                        <span className="text-emerald-400 font-bold">Five Core Archetypes</span>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span className="text-slate-400">Fee Architecture:</span>
                                        <span className="text-cyan-400 font-bold">Fixed & Milestone Aligned</span>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span className="text-slate-400">Sprint Option:</span>
                                        <span className="text-indigo-400 font-bold">2-Week Low Risk Audit</span>
                                    </div>
                                </div>
                                <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 text-[11px] text-slate-400 leading-relaxed">
                                    No lock-ins. Every commercial engagement progresses cleanly from initial diagnostic evidence to full-scale launch operations.
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 4 Counter Metrics */}
                    <div className="mt-14 pt-8 border-t border-slate-800 grid grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 shadow-sm">
                            <div className="text-3xl font-extrabold font-mono text-white mb-1">5 Archetypes</div>
                            <div className="text-xs font-bold text-slate-300 mb-0.5">Ecosystem Segments</div>
                            <div className="text-[11px] text-slate-400">Customized for sector economics</div>
                        </div>
                        <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 shadow-sm">
                            <div className="text-3xl font-extrabold font-mono text-white mb-1">6 Models</div>
                            <div className="text-xs font-bold text-slate-300 mb-0.5">Commercial Structures</div>
                            <div className="text-[11px] text-slate-400">Calibrated for risk and speed</div>
                        </div>
                        <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 shadow-sm">
                            <div className="text-3xl font-extrabold font-mono text-white mb-1">100% Pass-Through</div>
                            <div className="text-xs font-bold text-slate-300 mb-0.5">Media & Creator Spend</div>
                            <div className="text-[11px] text-slate-400">Zero hidden markups on marketing</div>
                        </div>
                        <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 shadow-sm">
                            <div className="text-3xl font-extrabold font-mono text-white mb-1">Zero Speculation</div>
                            <div className="text-xs font-bold text-slate-300 mb-0.5">Ethical Guardrails</div>
                            <div className="text-[11px] text-slate-400">Fees never tied to token price</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── 2. SECTION: ECOSYSTEM ARCHETYPES (ANCHOR: #ecosystem-archetypes) ── */}
            <section id="ecosystem-archetypes" className="scroll-mt-24 py-20 lg:py-28 bg-slate-50 border-b border-slate-200/80 text-slate-900">
                <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
                        <div className="max-w-3xl">
                            <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600 block mb-2">
                                Tailored Architecture
                            </span>
                            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading">
                                Solutions by Crypto Ecosystem Archetype
                            </h2>
                            <p className="text-base sm:text-lg text-slate-600 mt-2 leading-relaxed">
                                Different crypto business models face distinct operational risks. We address the root structural bottlenecks unique to each sector.
                            </p>
                        </div>
                        <Link
                            to="/book-consultation"
                            className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-blue-700 bg-blue-50 hover:bg-blue-100 px-5 py-2.5 rounded-xl transition-colors border border-blue-200 shrink-0"
                        >
                            <span>Request Sector Proposal</span>
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>

                    <div className="space-y-6">
                        {segments.map((seg, idx) => {
                            const Icon = seg.icon;
                            return (
                                <div 
                                    key={idx} 
                                    className="p-8 rounded-3xl bg-white border border-slate-200 hover:border-blue-400 hover:shadow-lg transition-all shadow-xs"
                                >
                                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 border border-blue-100">
                                                <Icon className="w-6 h-6" />
                                            </div>
                                            <div>
                                                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-heading">{seg.title}</h3>
                                                <span className="text-xs text-blue-600 font-mono font-bold">{seg.tag}</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mb-6 p-4 rounded-2xl bg-red-50/60 border border-red-100 text-xs sm:text-sm text-slate-700">
                                        <strong className="text-red-700 font-mono uppercase text-xs block mb-1">Inherent Sector Friction:</strong>
                                        {seg.challenges}
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        {seg.solutions.map((sol, sIdx) => (
                                            <div key={sIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600">
                                                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                                                <span>{sol}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ── 3. SECTION: SIX COMMERCIAL ENGAGEMENT MODELS (ANCHOR: #commercial-models) ── */}
            <section id="commercial-models" className="scroll-mt-24 py-20 lg:py-28 bg-white border-b border-slate-200/80 text-slate-900">
                <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl mb-14">
                        <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600 block mb-2">
                            Commercial Continuum
                        </span>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight font-heading">
                            Six Commercial Engagement Models
                        </h2>
                        <p className="text-base sm:text-lg text-slate-600 mt-2 leading-relaxed">
                            Transparent commercial frameworks designed to progress from diagnostic clarity to full launch command and long-term ecosystem retention.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {models.map((m, idx) => (
                            <div 
                                key={idx} 
                                className="p-8 rounded-3xl bg-slate-50 border border-slate-200 hover:border-blue-400 hover:shadow-lg transition-all flex flex-col justify-between"
                            >
                                <div>
                                    <div className="flex items-center justify-between mb-4">
                                        <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-600 font-mono text-xs font-bold uppercase tracking-wider border border-blue-100">
                                            {m.model}
                                        </span>
                                        <div className="flex items-center gap-1.5 text-xs text-slate-500 font-mono font-bold">
                                            <Clock className="w-3.5 h-3.5 text-blue-600" />
                                            <span>{m.duration}</span>
                                        </div>
                                    </div>

                                    <h3 className="text-2xl font-bold text-slate-900 mb-2 font-heading">{m.name}</h3>
                                    <div className="text-xs font-mono text-slate-500 mb-6">Target: {m.target}</div>

                                    <div className="space-y-4 mb-6">
                                        <div>
                                            <div className="text-xs font-mono uppercase text-slate-500 font-bold mb-1">Operational Scope:</div>
                                            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{m.scope}</p>
                                        </div>
                                        <div>
                                            <div className="text-xs font-mono uppercase text-slate-500 font-bold mb-1">Primary Deliverable:</div>
                                            <p className="text-xs sm:text-sm text-slate-900 font-bold">{m.deliverable}</p>
                                        </div>
                                        <div className="p-4 rounded-2xl bg-white border border-slate-200">
                                            <div className="text-[11px] font-mono text-blue-600 font-bold uppercase mb-0.5">Commercial Structure:</div>
                                            <p className="text-xs text-slate-600">{m.commercials}</p>
                                        </div>
                                    </div>
                                </div>

                                <Link
                                    to="/book-consultation"
                                    className="w-full inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 px-6 rounded-xl transition-colors shadow-sm text-sm"
                                >
                                    <span>{m.ctaText}</span>
                                    <ArrowRight className="w-4 h-4" />
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── 4. SECTION: SPRINT STRUCTURES & CORE PRINCIPLES (ANCHOR: #sprint-structures) ── */}
            <section id="sprint-structures" className="scroll-mt-24 py-20 lg:py-28 bg-slate-50 border-b border-slate-200/80 text-slate-900">
                <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl mb-14">
                        <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600 block mb-2">
                            Governance & Transparency
                        </span>
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading">
                            Sprint & Retainer Structures — Four Core Principles
                        </h2>
                        <p className="text-base sm:text-lg text-slate-600 mt-2 leading-relaxed">
                            We operate on institutional standards of transparency, accountability, and regulatory hygiene.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-xs">
                            <div className="text-blue-600 font-mono text-xs mb-2 font-bold">PRINCIPLE 01</div>
                            <h3 className="text-base font-bold text-slate-900 mb-2">Diagnostic Progression</h3>
                            <p className="text-xs text-slate-600 leading-relaxed">
                                No long-term lock-in before proof. Start with a 2-week Launch Diagnostic Sprint to validate readiness before committing to full TGE Command.
                            </p>
                        </div>
                        <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-xs">
                            <div className="text-indigo-600 font-mono text-xs mb-2 font-bold">PRINCIPLE 02</div>
                            <h3 className="text-base font-bold text-slate-900 mb-2">Operational Attribution</h3>
                            <p className="text-xs text-slate-600 leading-relaxed">
                                We measure verified wallet interactions, bridge volumes, and fee capture—never secondary token prices or speculative trading volatility.
                            </p>
                        </div>
                        <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-xs">
                            <div className="text-teal-600 font-mono text-xs mb-2 font-bold">PRINCIPLE 03</div>
                            <h3 className="text-base font-bold text-slate-900 mb-2">Compliance by Design</h3>
                            <p className="text-xs text-slate-600 leading-relaxed">
                                Every campaign collateral, creator contract, and whitelist flow undergoes multi-jurisdictional legal review before public broadcast.
                            </p>
                        </div>
                        <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-xs">
                            <div className="text-emerald-600 font-mono text-xs mb-2 font-bold">PRINCIPLE 04</div>
                            <h3 className="text-base font-bold text-slate-900 mb-2">Zero-Markup Media Costs</h3>
                            <p className="text-xs text-slate-600 leading-relaxed">
                                All creator disbursements, exchange listing fees, and PR distribution expenses are passed through at 100% direct cost with transparent receipts.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── 5. BOTTOM EXECUTIVE CTA ── */}
            <section className="relative bg-slate-950 text-white py-20 lg:py-24 border-t border-slate-800 text-center">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4 font-heading">
                        Structure the Right Commercial Model for Your Token
                    </h2>
                    <p className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto mb-8">
                        Connect with our protocol growth strategists to select the optimal model matching your treasury, timeline, and launch urgency.
                    </p>
                    <div className="flex flex-wrap items-center justify-center gap-4">
                        <Link
                            to="/book-consultation"
                            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold px-8 py-4 rounded-xl transition-all shadow-lg text-base"
                        >
                            <span>Book Commercial Strategy Call</span>
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                        <Link
                            to="/ico-acceleration/trust-performance"
                            className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold px-8 py-4 rounded-xl transition-all text-base border border-white/20"
                        >
                            <span>Inspect Trust & Compliance</span>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
