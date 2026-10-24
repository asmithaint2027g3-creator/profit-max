import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
    ShieldCheck, Lock, AlertTriangle, Scale, CheckCircle2, ArrowRight, 
    BarChart3, TrendingUp, Layers, FileText, Zap, Compass, Activity, Eye,
    ArrowUpRight, Building2, Clock, Check
} from 'lucide-react';

export default function IcoTrustPerformance() {
    const location = useLocation();

    useEffect(() => {
        document.title = "Trust, Security & ROI Attribution | ProfitMachines Crypto Protocol";
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
            {/* ── 1. HERO SECTION (OFFERINGS & ENGAGEMENT DESIGN) ── */}
            <section className="relative bg-slate-950 text-white py-16 lg:py-24 overflow-hidden border-b border-slate-800">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=2000&q=80"
                        alt="Trust & Security Architecture"
                        className="w-full h-full object-cover object-center opacity-30 mix-blend-luminosity"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/85 to-slate-900/60" />
                    <div className="absolute inset-0 bg-radial-at-t from-blue-950/40 via-transparent to-transparent pointer-events-none" />
                </div>

                <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                        <div className="lg:col-span-8">
                            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-xs font-semibold uppercase tracking-wider mb-6 font-mono shadow-sm">
                                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                                <span>Pillar 04 · Trust, Compliance & Multi-Touch Attribution</span>
                            </div>

                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.08] mb-6 font-heading">
                                Institutional Trust, Regulatory Sanity & <span className="text-emerald-400">Verifiable ROI</span>
                            </h1>

                            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed font-normal mb-8 max-w-3xl">
                                Marketing compliance is existential in Web3. We embed regional legal guardrails (MiCA, VARA, SEC) and empirical on-chain attribution directly into your token launch lifecycle, protecting foundations from enforcement actions and treasury drain.
                            </p>

                            <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-slate-400 mb-8 font-mono">
                                {[
                                    'Compliance by Design', 
                                    'EU MiCA Guardrails', 
                                    'UAE VARA Framework', 
                                    'Token-Adjusted RQL', 
                                    'KYC/AML Whitelist Ops'
                                ].map((tag, idx) => (
                                    <span key={idx} className="bg-slate-900/80 text-slate-300 px-3 py-1 rounded-full border border-slate-700/80">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <div className="flex flex-wrap items-center gap-4">
                                <Link
                                    to="/book-consultation"
                                    className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-7 py-3.5 rounded-xl transition-all shadow-lg border border-emerald-400/40 text-sm sm:text-base group"
                                >
                                    <span>Schedule Compliance Review</span>
                                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                                </Link>
                                <a
                                    href="#compliance-matrix"
                                    className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold px-7 py-3.5 rounded-xl transition-all text-sm sm:text-base border border-white/30 backdrop-blur-sm shadow-md"
                                >
                                    <span>Explore Compliance Matrix</span>
                                </a>
                                <Link
                                    to="/ico-acceleration"
                                    className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-400 hover:text-emerald-300 px-2 py-3.5"
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
                                    <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider">Trust Engine SLA</span>
                                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                                </div>
                                <div className="space-y-3 text-xs text-slate-300 font-mono">
                                    <div className="flex items-center justify-between">
                                        <span className="text-slate-400">Creative Turnaround:</span>
                                        <span className="text-white font-bold">&lt; 24 Hours Review</span>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span className="text-slate-400">Influencer Disclosure:</span>
                                        <span className="text-emerald-400 font-bold">100% Pre-Live Check</span>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span className="text-slate-400">Sanctions Screening:</span>
                                        <span className="text-cyan-400 font-bold">OFAC & Global Lists</span>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span className="text-slate-400">Attribution Model:</span>
                                        <span className="text-indigo-400 font-bold">Token-Adjusted RQL</span>
                                    </div>
                                </div>
                                <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 text-[11px] text-slate-400 leading-relaxed">
                                    All promotional claims, KOL briefs, Discord announcements, and whitelist mechanics pass documented multi-gate compliance sign-offs before live broadcast.
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 4 Counter Metrics */}
                    <div className="mt-14 pt-8 border-t border-slate-800 grid grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 shadow-sm">
                            <div className="text-3xl font-extrabold font-mono text-white mb-1">100%</div>
                            <div className="text-xs font-bold text-slate-300 mb-0.5">Asset Audit Trail</div>
                            <div className="text-[11px] text-slate-400">Archived for regulatory inspections</div>
                        </div>
                        <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 shadow-sm">
                            <div className="text-3xl font-extrabold font-mono text-white mb-1">4 Regions</div>
                            <div className="text-xs font-bold text-slate-300 mb-0.5">Jurisdictional Guardrails</div>
                            <div className="text-[11px] text-slate-400">EU MiCA, UAE VARA, US SEC, India ASCI</div>
                        </div>
                        <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 shadow-sm">
                            <div className="text-3xl font-extrabold font-mono text-white mb-1">&lt; 24h</div>
                            <div className="text-xs font-bold text-slate-300 mb-0.5">Legal Review Turnaround</div>
                            <div className="text-[11px] text-slate-400">Agile Creative-to-Legal workflow</div>
                        </div>
                        <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 shadow-sm">
                            <div className="text-3xl font-extrabold font-mono text-white mb-1">Deterministic</div>
                            <div className="text-xs font-bold text-slate-300 mb-0.5">Multi-Touch Attribution</div>
                            <div className="text-[11px] text-slate-400">Connecting spend to wallet locks</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── 2. SECTION: REGULATORY & COMPLIANCE MATRIX (ANCHOR: #compliance-matrix) ── */}
            <section id="compliance-matrix" className="scroll-mt-24 py-20 lg:py-28 bg-slate-50 border-b border-slate-200/80 text-slate-900">
                <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
                        <div className="max-w-3xl">
                            <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-600 block mb-2">
                                Regulatory Hygiene
                            </span>
                            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading">
                                Global Regulatory & Compliance Matrix
                            </h2>
                            <p className="text-base sm:text-lg text-slate-600 mt-2 leading-relaxed">
                                Global crypto distribution demands granular regional awareness. We configure marketing campaigns to conform to target jurisdiction guardrails.
                            </p>
                        </div>
                        <Link
                            to="/book-consultation"
                            className="inline-flex items-center gap-2 text-sm font-bold text-emerald-700 hover:text-emerald-800 bg-emerald-50 hover:bg-emerald-100 px-5 py-2.5 rounded-xl transition-colors border border-emerald-200 shrink-0"
                        >
                            <span>Request Compliance Review</span>
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                        {/* EU / MiCA */}
                        <div className="p-8 rounded-3xl bg-white border border-slate-200 hover:border-emerald-400 hover:shadow-lg transition-all shadow-xs flex flex-col justify-between">
                            <div>
                                <div className="text-xs font-mono text-blue-600 font-bold mb-2">JURISDICTION 01</div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3">European Union · MiCA</h3>
                                <ul className="space-y-2.5 text-xs text-slate-600 mb-6">
                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                                        <span>Mandatory crypto-asset whitepaper promotional alignment</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                                        <span>Strict reverse solicitation boundaries and fair presentation</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                                        <span>Ban on misleading forward-looking yield or profit guarantees</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                                        <span>Clear commercial identification of all sponsored media</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="pt-4 border-t border-slate-100 text-[11px] font-mono text-slate-500">
                                Reg: Markets in Crypto-Assets (MiCA)
                            </div>
                        </div>

                        {/* UAE / VARA */}
                        <div className="p-8 rounded-3xl bg-white border border-slate-200 hover:border-emerald-400 hover:shadow-lg transition-all shadow-xs flex flex-col justify-between">
                            <div>
                                <div className="text-xs font-mono text-indigo-600 font-bold mb-2">JURISDICTION 02</div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3">United Arab Emirates · VARA</h3>
                                <ul className="space-y-2.5 text-xs text-slate-600 mb-6">
                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                                        <span>Administrative compliance with Virtual Assets Regulatory Authority</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                                        <span>Compulsory prominent risk warning statements on all creatives</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                                        <span>Rigid influencer sponsorship disclosures and registry proofs</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                                        <span>Audit-ready promotional activity log maintenance</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="pt-4 border-t border-slate-100 text-[11px] font-mono text-slate-500">
                                Reg: VARA Marketing Regulations 2023/2024
                            </div>
                        </div>

                        {/* US / SEC */}
                        <div className="p-8 rounded-3xl bg-white border border-slate-200 hover:border-emerald-400 hover:shadow-lg transition-all shadow-xs flex flex-col justify-between">
                            <div>
                                <div className="text-xs font-mono text-teal-600 font-bold mb-2">JURISDICTION 03</div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3">United States · SEC / CFTC</h3>
                                <ul className="space-y-2.5 text-xs text-slate-600 mb-6">
                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                                        <span>Rigorous compliance with Section 17(b) anti-touting disclosures</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                                        <span>Active US-person geoblocking across all whitelist portals</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                                        <span>Howey Test risk mitigation in creative vocabulary</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                                        <span>Prohibition of price appreciation statements by project leads</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="pt-4 border-t border-slate-100 text-[11px] font-mono text-slate-500">
                                Reg: Securities Act & FTC Guidelines
                            </div>
                        </div>
                    </div>

                    <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 flex items-start gap-3">
                        <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                        <p className="text-xs text-amber-900 leading-relaxed">
                            <strong className="text-amber-950 font-bold">Mandatory Regulatory Notice:</strong> The above parameters represent operating review considerations and do not constitute formal legal advice. Every token project, asset type, and marketing activity requires qualified, independent legal review in each target jurisdiction before campaign deployment.
                        </p>
                    </div>
                </div>
            </section>

            {/* ── 3. SECTION: SMART CONTRACT AUDIT WORKFLOWS & KYC (ANCHOR: #audit-workflows) ── */}
            <section id="audit-workflows" className="scroll-mt-24 py-20 lg:py-28 bg-white border-b border-slate-200/80 text-slate-900">
                <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl mb-14">
                        <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-600 block mb-2">
                            Security Architecture
                        </span>
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading">
                            Smart Contract Audit Workflows & KYC/AML Campaign Ops
                        </h2>
                        <p className="text-base sm:text-lg text-slate-600 mt-2 leading-relaxed">
                            Protecting your token distribution from hostile bad actors, sanctions exposure, and smart contract exploits during high-traffic launch windows.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                        {/* Audit Workflows & SLAs */}
                        <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200">
                            <div className="flex items-center gap-3 mb-4">
                                <Lock className="w-6 h-6 text-emerald-600" />
                                <h3 className="text-2xl font-bold text-slate-900 font-heading">
                                    Claims & Creative Review SLA Desk
                                </h3>
                            </div>
                            <p className="text-sm text-slate-600 leading-relaxed mb-6">
                                Fast-moving crypto launches require rapid iteration without compromising legal hygiene. We operate an agile Creative-to-Legal-to-Live workflow with defined turnaround targets.
                            </p>
                            <div className="space-y-3 text-xs sm:text-sm text-slate-700">
                                <div className="p-3.5 rounded-xl bg-white border border-slate-200 flex items-center justify-between">
                                    <span>Creative Turnaround Target:</span>
                                    <span className="font-mono text-blue-600 font-bold">&lt; 24 Hours</span>
                                </div>
                                <div className="p-3.5 rounded-xl bg-white border border-slate-200 flex items-center justify-between">
                                    <span>Influencer Disclosure Verification:</span>
                                    <span className="font-mono text-emerald-600 font-bold">100% Pre-Live Check</span>
                                </div>
                                <div className="p-3.5 rounded-xl bg-white border border-slate-200 flex items-center justify-between">
                                    <span>Risk-Disclaimer Injection:</span>
                                    <span className="font-mono text-teal-600 font-bold">Automated Multi-Lingual</span>
                                </div>
                            </div>
                        </div>

                        {/* KYC / AML Ops */}
                        <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200">
                            <div className="flex items-center gap-3 mb-4">
                                <ShieldCheck className="w-6 h-6 text-emerald-600" />
                                <h3 className="text-2xl font-bold text-slate-900 font-heading">
                                    KYC / AML-Ready Campaign Ops
                                </h3>
                            </div>
                            <p className="text-sm text-slate-600 leading-relaxed mb-6">
                                Protect your token distribution from hostile bad actors, sanctioned entities, and Sybil rings. We embed verified hygiene controls into whitelist and airdrop distribution.
                            </p>
                            <div className="space-y-3 text-xs sm:text-sm text-slate-700">
                                <div className="p-3.5 rounded-xl bg-white border border-slate-200 flex items-center justify-between">
                                    <span>Sanctions Screening Workflow:</span>
                                    <span className="font-mono text-teal-600 font-bold">OFAC & Global Lists</span>
                                </div>
                                <div className="p-3.5 rounded-xl bg-white border border-slate-200 flex items-center justify-between">
                                    <span>Sybil & Cluster Analysis:</span>
                                    <span className="font-mono text-indigo-600 font-bold">On-Chain Graph Heuristics</span>
                                </div>
                                <div className="p-3.5 rounded-xl bg-white border border-slate-200 flex items-center justify-between">
                                    <span>Documentation & Escalation:</span>
                                    <span className="font-mono text-purple-600 font-bold">Archived Audit Trails</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── 4. SECTION: MULTI-TOUCH ROI ATTRIBUTION & RQL (ANCHOR: #roi-attribution - DARK EXECUTIVE RHYTHM) ── */}
            <section id="roi-attribution" className="scroll-mt-24 py-20 lg:py-28 bg-slate-950 text-white border-b border-slate-800">
                <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl mb-14">
                        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-xs font-semibold uppercase tracking-wider mb-4 font-mono">
                            <BarChart3 className="w-3.5 h-3.5 text-emerald-400" />
                            <span>Verifiable Capital Attribution</span>
                        </div>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4 font-heading">
                            Multi-Touch ROI Attribution & Token-Adjusted RQL
                        </h2>
                        <p className="text-slate-300 text-base sm:text-lg">
                            Replacing vanity impressions with empirical on-chain telemetry. We map every marketing dollar directly through user interactions to verifiable protocol outcomes.
                        </p>
                    </div>

                    {/* Attribution Flow Cards */}
                    <div className="p-8 rounded-3xl bg-slate-900 border border-slate-800 mb-10">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                            <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800">
                                <div className="text-xs font-mono text-blue-400 mb-1 font-bold">INPUT STAGE</div>
                                <div className="text-lg font-bold text-white mb-2">Campaign Spend</div>
                                <p className="text-xs text-slate-400">
                                    Creator disbursements, PR fees, exchange placement costs, and community bounties.
                                </p>
                            </div>
                            <div className="p-6 rounded-2xl bg-slate-950 border border-emerald-500/40 shadow-inner">
                                <div className="text-xs font-mono text-emerald-400 mb-1 font-bold">CONVERSION STAGE</div>
                                <div className="text-lg font-bold text-white mb-2">Wallet & User Activity</div>
                                <p className="text-xs text-slate-300">
                                    Verified wallet connects, smart contract claiming, staking locks, and testnet interactions.
                                </p>
                            </div>
                            <div className="p-6 rounded-2xl bg-slate-950 border border-indigo-500/40">
                                <div className="text-xs font-mono text-indigo-400 mb-1 font-bold">OUTCOME STAGE</div>
                                <div className="text-lg font-bold text-white mb-2">Measurable Protocol Value</div>
                                <p className="text-xs text-slate-300">
                                    Protocol fee revenue, sustained liquidity depth, retention coefficients, and TVL.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* 4 RQL Applications */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800">
                            <div className="text-blue-400 font-mono text-xs mb-2 font-bold">APPLICATION 01</div>
                            <h3 className="text-base font-bold text-white mb-2">Demand-Readiness</h3>
                            <p className="text-xs text-slate-400 leading-relaxed">
                                Scoring incoming participant wallets by historical transaction density and staking participation to prioritize allocation.
                            </p>
                        </div>
                        <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800">
                            <div className="text-indigo-400 font-mono text-xs mb-2 font-bold">APPLICATION 02</div>
                            <h3 className="text-base font-bold text-white mb-2">Launch-Window Timing</h3>
                            <p className="text-xs text-slate-400 leading-relaxed">
                                Aggregating category-wide RQL scores to trigger public launch communications when buyer intent reaches peak index.
                            </p>
                        </div>
                        <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800">
                            <div className="text-teal-400 font-mono text-xs mb-2 font-bold">APPLICATION 03</div>
                            <h3 className="text-base font-bold text-white mb-2">BD Opportunity Scoring</h3>
                            <p className="text-xs text-slate-400 leading-relaxed">
                                Evaluating developer protocol teams applying for grants against their potential on-chain gas fee generation.
                            </p>
                        </div>
                        <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800">
                            <div className="text-emerald-400 font-mono text-xs mb-2 font-bold">APPLICATION 04</div>
                            <h3 className="text-base font-bold text-white mb-2">Partnership Pipeline</h3>
                            <p className="text-xs text-slate-400 leading-relaxed">
                                Measuring institutional custodial and market-maker pipeline velocity to eliminate stalled strategic agreements.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── 5. BOTTOM EXECUTIVE CTA ── */}
            <section className="relative bg-slate-950 text-white py-20 lg:py-24 border-t border-slate-800 text-center">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4 font-heading">
                        Establish Institutional Governance & Verifiable ROI
                    </h2>
                    <p className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto mb-8">
                        Connect with our compliance and growth measurement leads to review your campaign guardrails and attribution architecture.
                    </p>
                    <div className="flex flex-wrap items-center justify-center gap-4">
                        <Link
                            to="/book-consultation"
                            className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-8 py-4 rounded-xl transition-all shadow-lg text-base"
                        >
                            <span>Schedule Governance Briefing</span>
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                        <Link
                            to="/ico-acceleration/sales-enablement"
                            className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold px-8 py-4 rounded-xl transition-all text-base border border-white/20"
                        >
                            <span>Explore Sales Enablement</span>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
