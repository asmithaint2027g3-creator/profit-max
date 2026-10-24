import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
    Compass, Target, AlertTriangle, TrendingUp, Calendar, CheckSquare, 
    ShieldCheck, ArrowRight, Layers, Users, Zap, Coins, Gamepad2, 
    Landmark, Rocket, MessageSquare, CheckCircle2, FileText, ChevronRight, Cpu,
    ArrowUpRight, Sparkles, Building2, Lock
} from 'lucide-react';

export default function IcoSalesEnablement() {
    const location = useLocation();

    useEffect(() => {
        document.title = "Sales Enablement & Objections | ProfitMachines Crypto Protocol";
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

    const spicedStages = [
        {
            letter: "S",
            title: "Situation",
            tag: "Current State & Baseline",
            description: "Capture the objective operational facts of the project before proposing any growth architecture.",
            items: [
                "Target TGE or mainnet launch date and hard deadlines",
                "Exchange listing pipeline status (Tier-1, Tier-2, DEX liquidity commitments)",
                "Current community quality across Telegram, Discord, and X (signal vs. bot noise)",
                "Active marketing activities, existing agency contracts, and historical campaign spend",
                "Internal technical and operational launch readiness status"
            ],
            color: "from-blue-500/20 to-cyan-500/10",
            border: "border-blue-500/30"
        },
        {
            letter: "P",
            title: "Pain",
            tag: "Root Cause Friction",
            description: "Identify specific structural gaps that threaten launch viability or post-TGE sustainability.",
            items: [
                "Unvalidated demand discovery: Unclear whether genuine liquidity exists for the token",
                "Community conversion friction: Large vanity follower counts with zero wallet activation",
                "Listing progress bottlenecks: Incomplete diligence documentation or uncoordinated market-maker SLAs",
                "Opaque campaign performance: Inability to attribute wallet funding or volume to specific KOL spend",
                "Post-TGE retention deficit: No retention mechanics to stem token dumps once initial hype cools"
            ],
            color: "from-amber-500/20 to-orange-500/10",
            border: "border-amber-500/30"
        },
        {
            letter: "I",
            title: "Impact",
            tag: "Commercial Ramifications",
            description: "Assess the quantitative and strategic commercial consequences if pain points remain unaddressed.",
            items: [
                "Day-one launch volatility and immediate liquidity drain following initial distribution",
                "Treasury impairment resulting from unbudgeted emergency market-making and PR costs",
                "Inability to establish a sustainable long-term holder base beyond short-term speculators",
                "Compressed protocol fee revenue failing to sustain ongoing engineering and growth payroll",
                "Adverse effects on secondary token rounds and future institutional capital access"
            ],
            color: "from-rose-500/20 to-red-500/10",
            border: "border-rose-500/30"
        },
        {
            letter: "C",
            title: "Critical Event",
            tag: "Time-Sensitive Triggers",
            description: "Record the non-negotiable milestones that dictate the execution window.",
            items: [
                "TGE date commitments made to lead venture capital funds and key backers",
                "Projected treasury runway constraints requiring token liquidity within defined timelines",
                "Team and early investor token vesting milestone schedules",
                "Anticipated competing protocol launches within the same sub-sector or L1 ecosystem",
                "Direct commercial costs and reputational impact of delaying exchange listing commitments"
            ],
            color: "from-purple-500/20 to-indigo-500/10",
            border: "border-purple-500/30"
        },
        {
            letter: "D",
            title: "Decision",
            tag: "Governance & Approvals",
            description: "Identify all stakeholders, budgetary allocations, and compliance gates necessary to engage.",
            items: [
                "Key decision-makers: Foundation council, core founders, CMO, and Head of Growth",
                "Budget ownership: Foundation grant pool, marketing treasury, or operational OPEX allocation",
                "Investor and advisory board sign-off requirements",
                "Required jurisdictional legal review and marketing compliance approvals (MiCA, VARA, ASCI)",
                "Standard procurement, MSA execution, and payment terms confirmation"
            ],
            color: "from-emerald-500/20 to-teal-500/10",
            border: "border-emerald-500/30"
        }
    ];

    const objections = [
        {
            id: 1,
            objection: "“We will just hire a KOL agency to promote our launch.”",
            context: "Common among founders who believe influencer mentions equate to a comprehensive launch strategy.",
            response: "Creator and KOL campaigns represent only one execution channel within a multi-layered launch architecture. An influencer tweet can generate initial awareness, but without pre-validated demand discovery, coordinated community moderation, liquidity operations, and attribution modeling, that awareness fails to convert into active wallet holders. ProfitMachines connects creator sequencing directly with on-chain intent analysis, whitelist qualification, exchange alignment, and post-launch retention mechanisms so your media spend creates lasting equity rather than a one-day pump and dump.",
            actionLink: "/ico-acceleration/launch-growth",
            actionText: "See KOL Orchestration Engine"
        },
        {
            id: 2,
            objection: "“We will start marketing closer to launch — maybe 30 days before TGE.”",
            context: "Founders laser-focused on engineering who underestimate community and liquidity incubation cycles.",
            response: "Commencing marketing 30 days prior to TGE is one of the leading causes of primary market underperformance. A resilient launch requires 12 to 16 weeks of systematic preparation: conducting market demand validation (T-16 to T-12), setting up moderated community hubs (T-90 to T-61), seeding organic creator relationships and whitelists (T-60 to T-31), and securing exchange listing and market-maker agreements. Rushing into the market at T-30 leads to inflated creator pricing, panicked execution, and an unverified community that dumps tokens on day one.",
            actionLink: "/ico-acceleration/launch-growth",
            actionText: "Inspect 7-Phase Launch Timeline"
        },
        {
            id: 3,
            objection: "“Our token incentives and airdrop will handle our growth automatically.”",
            context: "Teams assuming high token emission yields alone create sustained protocol product-market fit.",
            response: "Token incentives attract mercenary capital that leaves the second yields decline or a competitor forks your contracts. Airdrops and reward pools are valuable for bootstrapping initial participation, but they require structured product education, tiered wallet onboarding, staking sinks, and ongoing lifecycle automation. Without a post-TGE retention architecture, protocols often experience an 80%+ drop in active wallets within 30 days of airdrop distribution. Sustainable growth requires converting temporary bounty hunters into sticky product users.",
            actionLink: "/ico-acceleration/launch-growth",
            actionText: "Review Post-TGE Retention Machine"
        },
        {
            id: 4,
            objection: "“We are moving fast in crypto — we will sort out compliance later after we gain traction.”",
            context: "High-risk attitude that exposes foundations, founders, and community leads to enforcement actions.",
            response: "In today’s regulated crypto landscape, marketing compliance is not an afterthought — it is existential. Regulatory authorities under EU MiCA, UAE VARA, and Indian ASCI actively monitor promotional claims, influencer disclosures, and token distribution mechanics. Launching non-compliant marketing can freeze exchange listing approvals, trigger bank account closures, and result in substantial civil or criminal liability. ProfitMachines integrates 'Compliance by Design' from Day 1, ensuring creative assets, influencer contracts, and whitelists meet regional guardrails without sacrificing speed.",
            actionLink: "/ico-acceleration/trust-performance",
            actionText: "Examine Compliance Guardrails"
        }
    ];

    const battlecards = [
        {
            title: "Traditional Crypto Marketing Agency vs. ProfitMachines Protocol",
            points: [
                { aspect: "Operating Model", legacy: "Disconnected influencer brokers marking up creator costs 50–100%", pm: "Direct pass-through creator costs with zero markups; fee tied to execution" },
                { aspect: "Attribution", legacy: "Vanity impressions, retweets, and bot-inflated follower counters", pm: "Token-Adjusted RQL tracking verified wallet connects, funding, and staking" },
                { aspect: "Compliance", legacy: "Zero legal awareness; blind promo posts risking regulatory bans", pm: "Compliance by Design reviewing every asset against MiCA, VARA, and SEC rules" },
                { aspect: "Horizon", legacy: "Vanishes on Day 2 of listing once initial hype dissipates", pm: "90-day post-TGE retention machine to monetize protocol fees and stem churn" }
            ]
        }
    ];

    const discoveryDeliverables = [
        {
            step: "01",
            title: "Current Project Position & Baseline Audit",
            desc: "A clear assessment of your current technical milestones, community size, listing pipeline, and existing marketing runway."
        },
        {
            step: "02",
            title: "Main Challenges & Commercial Impact Matrix",
            desc: "Identification of primary growth bottlenecks (narrative, liquidity, creator coordination, or compliance) and their financial impact."
        },
        {
            step: "03",
            title: "Launch & Growth Timeline Roadmap",
            desc: "A custom 16-week pre-TGE and 90-day post-TGE Gantt schedule mapped against key exchange, tokenomics, and campaign gates."
        },
        {
            step: "04",
            title: "Decision-Makers & Approval Requirements",
            desc: "Mapping foundation governance, legal review turnaround SLAs, budget allocations, and compliance gates."
        },
        {
            step: "05",
            title: "Recommended Engagement Model & Scope",
            desc: "A transparent proposal recommending whether a Launch Diagnostic Sprint, TGE Command, or Hybrid model best fits your objectives."
        },
        {
            step: "06",
            title: "Agreed Immediate Next Steps",
            desc: "A prioritized punch-list of immediate 7-day actions to resolve urgent launch readiness bottlenecks."
        }
    ];

    return (
        <div className="min-h-screen bg-slate-50/50 text-slate-900 pt-16 lg:pt-[72px] font-sans selection:bg-blue-500/20">
            {/* ── 1. HERO SECTION (OFFERINGS & ENGAGEMENT DESIGN) ── */}
            <section className="relative bg-slate-950 text-white py-16 lg:py-24 overflow-hidden border-b border-slate-800">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=2000&q=80"
                        alt="Web3 Sales Enablement Architecture"
                        className="w-full h-full object-cover object-center opacity-30 mix-blend-luminosity"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/85 to-slate-900/60" />
                    <div className="absolute inset-0 bg-radial-at-t from-blue-950/40 via-transparent to-transparent pointer-events-none" />
                </div>

                <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                        <div className="lg:col-span-8">
                            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/20 border border-cyan-400/40 text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-6 font-mono shadow-sm">
                                <Compass className="w-3.5 h-3.5 text-cyan-400" />
                                <span>Pillar 05 · Sales Enablement & Commercial Discovery</span>
                            </div>

                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.08] mb-6 font-heading">
                                Turn Crypto Growth Challenges into <span className="text-cyan-400">Clear Business Opportunities</span>
                            </h1>

                            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed font-normal mb-8 max-w-3xl">
                                ProfitMachines supports founders, foundation councils, and token growth leads with structured commercial discovery, objective launch readiness diagnostics, and battle-tested sales battlecards.
                            </p>

                            <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-slate-400 mb-8 font-mono">
                                {[
                                    'SPICED Diagnostic Framework', 
                                    'Founder Objection Reframing', 
                                    'Commercial Battlecards', 
                                    'Diligence Deliverables', 
                                    '7-Day Action Sprints'
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
                                    <span>Schedule Commercial Discovery Call</span>
                                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                                </Link>
                                <a
                                    href="#spiced-framework"
                                    className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold px-7 py-3.5 rounded-xl transition-all text-sm sm:text-base border border-white/30 backdrop-blur-sm shadow-md"
                                >
                                    <span>Review SPICED Framework</span>
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
                                    <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider">Discovery Session</span>
                                    <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
                                </div>
                                <div className="space-y-3 text-xs text-slate-300 font-mono">
                                    <div className="flex items-center justify-between">
                                        <span className="text-slate-400">Diagnostic Duration:</span>
                                        <span className="text-white font-bold">45-Minute Session</span>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span className="text-slate-400">Strategic Deliverables:</span>
                                        <span className="text-emerald-400 font-bold">6 Tangible Outputs</span>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span className="text-slate-400">Readiness Gap Score:</span>
                                        <span className="text-cyan-400 font-bold">5 SPICED Dimensions</span>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span className="text-slate-400">Outcome Orientation:</span>
                                        <span className="text-indigo-400 font-bold">No Generic Pitches</span>
                                    </div>
                                </div>
                                <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 text-[11px] text-slate-400 leading-relaxed">
                                    Every initial session produces a structured briefing assessing technical milestones, listing gaps, and concrete budget recommendations.
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 4 Counter Metrics */}
                    <div className="mt-14 pt-8 border-t border-slate-800 grid grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 shadow-sm">
                            <div className="text-3xl font-extrabold font-mono text-white mb-1">5 Dimensions</div>
                            <div className="text-xs font-bold text-slate-300 mb-0.5">SPICED Diagnostics</div>
                            <div className="text-[11px] text-slate-400">Situation, Pain, Impact, Critical Event, Decision</div>
                        </div>
                        <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 shadow-sm">
                            <div className="text-3xl font-extrabold font-mono text-white mb-1">4 Objections</div>
                            <div className="text-xs font-bold text-slate-300 mb-0.5">Institutional Reframes</div>
                            <div className="text-[11px] text-slate-400">KOL hype, T-30 rushes, airdrop mercenary traps</div>
                        </div>
                        <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 shadow-sm">
                            <div className="text-3xl font-extrabold font-mono text-white mb-1">6 Outputs</div>
                            <div className="text-xs font-bold text-slate-300 mb-0.5">Session Deliverables</div>
                            <div className="text-[11px] text-slate-400">Included in initial commercial briefing</div>
                        </div>
                        <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 shadow-sm">
                            <div className="text-3xl font-extrabold font-mono text-white mb-1">7 Days</div>
                            <div className="text-xs font-bold text-slate-300 mb-0.5">Immediate Action Plan</div>
                            <div className="text-[11px] text-slate-400">Prioritized launch blocker resolution</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── 2. SECTION: SPICED QUALIFICATION FRAMEWORK (ANCHOR: #spiced-framework) ── */}
            <section id="spiced-framework" className="scroll-mt-24 py-20 lg:py-28 bg-slate-50 border-b border-slate-200/80 text-slate-900">
                <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl mb-14">
                        <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600 block mb-2">
                            Discovery Architecture
                        </span>
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading">
                            The SPICED Diagnostic Framework for Web3
                        </h2>
                        <p className="text-base sm:text-lg text-slate-600 mt-2 leading-relaxed">
                            Web3 launches fail when discovery relies on vague enthusiasm instead of commercial rigor. We evaluate launch readiness across five distinct operational dimensions.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                        {spicedStages.map((stage) => (
                            <div 
                                key={stage.letter}
                                className="p-6 rounded-3xl bg-white border border-slate-200 hover:border-blue-400 hover:shadow-lg transition-all shadow-xs flex flex-col justify-between"
                            >
                                <div>
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 font-mono font-bold text-lg flex items-center justify-center border border-blue-100">
                                            {stage.letter}
                                        </div>
                                        <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 font-bold">
                                            {stage.tag}
                                        </span>
                                    </div>

                                    <h3 className="text-xl font-bold text-slate-900 mb-2 font-heading">
                                        {stage.title}
                                    </h3>
                                    
                                    <p className="text-xs text-slate-600 mb-6 leading-relaxed">
                                        {stage.description}
                                    </p>

                                    <div className="space-y-2.5 pt-4 border-t border-slate-100">
                                        <div className="text-[10px] font-mono font-bold text-blue-600 uppercase">
                                            Key Discovery Inquiries:
                                        </div>
                                        {stage.items.map((item, idx) => (
                                            <div key={idx} className="flex items-start gap-2 text-xs text-slate-600">
                                                <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 shrink-0" />
                                                <span>{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── 3. SECTION: INTERACTIVE OBJECTION HANDLING (ANCHOR: #objection-handling) ── */}
            <section id="objection-handling" className="scroll-mt-24 py-20 lg:py-28 bg-white border-b border-slate-200/80 text-slate-900">
                <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl mb-14">
                        <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600 block mb-2">
                            Objection Handling
                        </span>
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading">
                            Commercial Clarity for Critical Founder Inquiries
                        </h2>
                        <p className="text-base sm:text-lg text-slate-600 mt-2 leading-relaxed">
                            Founders frequently evaluate launch strategies against legacy agency habits. Here is how ProfitMachines reframes standard assumptions with commercial rigor.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {objections.map((obj) => (
                            <div 
                                key={obj.id}
                                className="p-8 rounded-3xl bg-slate-50 border border-slate-200 hover:border-blue-400 hover:shadow-lg transition-all flex flex-col justify-between"
                            >
                                <div>
                                    <div className="flex items-start gap-3.5 mb-4">
                                        <div className="w-10 h-10 rounded-2xl bg-rose-100 text-rose-600 flex items-center justify-center shrink-0 mt-0.5">
                                            <MessageSquare className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <span className="text-xs font-mono font-bold text-rose-600 uppercase tracking-wider">
                                                Market Objection 0{obj.id}
                                            </span>
                                            <h3 className="text-lg font-bold text-slate-900 mt-1 font-heading">
                                                {obj.objection}
                                            </h3>
                                        </div>
                                    </div>

                                    <div className="mb-5 p-4 rounded-2xl bg-white border border-slate-200/80 text-xs text-slate-500 italic">
                                        Context: {obj.context}
                                    </div>

                                    <div className="space-y-3 mb-6">
                                        <div className="flex items-center gap-2">
                                            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                                            <span className="text-xs font-mono font-bold text-emerald-700 uppercase tracking-wider">
                                                ProfitMachines Solution Architecture:
                                            </span>
                                        </div>
                                        <p className="text-sm text-slate-700 leading-relaxed">
                                            {obj.response}
                                        </p>
                                    </div>
                                </div>

                                <div className="pt-4 border-t border-slate-200 flex justify-end">
                                    <Link 
                                        to={obj.actionLink}
                                        className="inline-flex items-center text-xs font-bold text-blue-600 hover:text-blue-700 transition-colors"
                                    >
                                        <span>{obj.actionText}</span>
                                        <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── 4. SECTION: BATTLECARDS & DISCOVERY DELIVERABLES (ANCHOR: #battlecards - DARK EXECUTIVE RHYTHM) ── */}
            <section id="battlecards" className="scroll-mt-24 py-20 lg:py-28 bg-slate-950 text-white border-b border-slate-800">
                <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl mb-14">
                        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/20 border border-blue-400/40 text-blue-300 text-xs font-semibold uppercase tracking-wider mb-4 font-mono">
                            <FileText className="w-3.5 h-3.5 text-blue-400" />
                            <span>Sales Battlecards & Tangible Outputs</span>
                        </div>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4 font-heading">
                            Commercial Battlecards & Discovery Deliverables
                        </h2>
                        <p className="text-slate-300 text-base sm:text-lg">
                            We do not conduct generic pitch calls. Every initial commercial session delivers concrete strategic outputs to inform your launch readiness and budgetary planning.
                        </p>
                    </div>

                    {/* Battlecard Comparison Table */}
                    <div className="p-8 rounded-3xl bg-slate-900 border border-slate-800 mb-14 shadow-xl overflow-x-auto">
                        <h3 className="text-xl font-bold text-white mb-6 font-heading">
                            Agency Legacy Habits vs. ProfitMachines Commercial Protocol
                        </h3>
                        <table className="w-full text-left text-xs sm:text-sm">
                            <thead>
                                <tr className="border-b border-slate-800 text-slate-400 font-mono uppercase text-[11px]">
                                    <th className="pb-3 w-1/4">Operational Vector</th>
                                    <th className="pb-3 w-3/8 text-rose-400">Traditional Crypto Agency</th>
                                    <th className="pb-3 w-3/8 text-emerald-400">ProfitMachines Revenue Protocol</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-800/60">
                                {battlecards[0].points.map((pt, pIdx) => (
                                    <tr key={pIdx}>
                                        <td className="py-4 font-bold text-white font-mono">{pt.aspect}</td>
                                        <td className="py-4 text-slate-400 leading-relaxed pr-4">{pt.legacy}</td>
                                        <td className="py-4 text-emerald-300 font-medium leading-relaxed">{pt.pm}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* 6 Discovery Deliverables Grid */}
                    <div className="mb-6">
                        <h3 className="text-2xl font-bold text-white mb-6 font-heading">
                            What You Receive from a 45-Minute Discovery Session
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {discoveryDeliverables.map((del) => (
                                <div 
                                    key={del.step}
                                    className="p-6 rounded-3xl bg-slate-900 border border-slate-800 flex flex-col justify-between"
                                >
                                    <div>
                                        <span className="text-3xl font-extrabold font-mono text-blue-500 mb-3 block">
                                            {del.step}
                                        </span>
                                        <h4 className="text-lg font-bold text-white mb-2 font-heading">
                                            {del.title}
                                        </h4>
                                        <p className="text-xs text-slate-400 leading-relaxed">
                                            {del.desc}
                                        </p>
                                    </div>
                                    <div className="mt-6 pt-4 border-t border-slate-800 flex items-center gap-2 text-xs text-emerald-400 font-mono font-bold">
                                        <CheckCircle2 className="w-3.5 h-3.5" />
                                        <span>Included in Discovery Briefing</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ── 5. BOTTOM EXECUTIVE CTA ── */}
            <section className="relative bg-slate-950 text-white py-20 lg:py-24 border-t border-slate-800 text-center">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4 font-heading">
                        Discuss Your Token Growth & Launch Requirements
                    </h2>
                    <p className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto mb-8">
                        Connect with our protocol growth strategists to evaluate your launch timeline, address critical bottlenecks, and determine the optimal commercial engagement for your token ecosystem.
                    </p>
                    <div className="flex flex-wrap items-center justify-center gap-4">
                        <Link
                            to="/book-consultation"
                            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold px-8 py-4 rounded-xl transition-all shadow-lg text-base"
                        >
                            <span>Schedule Strategy Session</span>
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                        <Link
                            to="/ico-acceleration"
                            className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold px-8 py-4 rounded-xl transition-all text-base border border-white/20"
                        >
                            <span>Back to Protocol Hub</span>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
