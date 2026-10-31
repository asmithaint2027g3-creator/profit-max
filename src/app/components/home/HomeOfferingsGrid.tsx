import React from 'react';
import { Link } from 'react-router-dom';
import { 
    Radar, 
    Target, 
    Bot, 
    LineChart, 
    Users, 
    Rocket, 
    BarChart3, 
    ShieldCheck, 
    ArrowRight,
    ArrowUpRight,
    Activity,
    Layers,
    CheckCircle2
} from 'lucide-react';
import { trackEvent } from '../../../lib/analytics';

export default function HomeOfferingsGrid() {
    const offerings = [
        {
            id: 'profit-pool-discovery',
            num: '01',
            title: 'Profit Pool Discovery',
            path: '/offerings/profit-pool-discovery',
            description: 'Identify attractive market opportunities, customer segments, demand signals, and areas where the business can focus its growth efforts.',
            visualType: 'Market Opportunity Map & Segment Heatmap',
            visualBadge: 'Whitespace TAM',
            icon: Radar,
            color: 'text-blue-600 bg-blue-50 border-blue-200',
            metrics: 'TAM Expansion: +24% to +38%',
            graphic: (
                <div className="h-28 w-full bg-slate-950 rounded-xl p-3 flex flex-col justify-between border border-slate-800 text-white font-mono text-[10px]">
                    <div className="flex justify-between items-center text-slate-400">
                        <span>MARKET WHITESPACE MAP</span>
                        <span className="text-emerald-400 font-bold">P1 HIGH FIT</span>
                    </div>
                    <div className="grid grid-cols-4 gap-1.5 h-12 items-end">
                        <div className="bg-blue-600/40 border border-blue-500 rounded h-6 flex items-center justify-center text-[9px]">SaaS</div>
                        <div className="bg-emerald-600/60 border border-emerald-400 rounded h-11 flex items-center justify-center text-[9px] font-bold">FinTech</div>
                        <div className="bg-indigo-600/40 border border-indigo-500 rounded h-8 flex items-center justify-center text-[9px]">Health</div>
                        <div className="bg-amber-600/40 border border-amber-500 rounded h-9 flex items-center justify-center text-[9px]">Mfg</div>
                    </div>
                    <div className="flex justify-between text-slate-400 text-[9px]">
                        <span>Signal Intent: High</span>
                        <span>Propensity: 94.2%</span>
                    </div>
                </div>
            )
        },
        {
            id: 'demand-engineering',
            num: '02',
            title: 'Demand Engineering',
            path: '/offerings/demand-engineering',
            description: 'Improve customer targeting, prospecting, campaign coordination, qualification, and lead progression to support a more consistent flow of qualified demand.',
            visualType: 'Demand Funnel & Campaign Performance',
            visualBadge: '3.4x Pipeline Velocity',
            icon: Target,
            color: 'text-indigo-600 bg-indigo-50 border-indigo-200',
            metrics: 'Inbound Velocity: 3.4x Faster',
            graphic: (
                <div className="h-28 w-full bg-slate-950 rounded-xl p-3 flex flex-col justify-between border border-slate-800 text-white font-mono text-[10px]">
                    <div className="flex justify-between items-center text-slate-400">
                        <span>PIPELINE GENERATION FUNNEL</span>
                        <span className="text-blue-400">QUALIFIED</span>
                    </div>
                    <div className="space-y-1.5 py-1">
                        <div className="w-full bg-slate-800 rounded-full h-2 overflow-hidden">
                            <div className="bg-blue-500 h-2 rounded-full" style={{ width: '92%' }} />
                        </div>
                        <div className="w-full bg-slate-800 rounded-full h-2 overflow-hidden">
                            <div className="bg-indigo-500 h-2 rounded-full" style={{ width: '68%' }} />
                        </div>
                        <div className="w-full bg-slate-800 rounded-full h-2 overflow-hidden">
                            <div className="bg-emerald-400 h-2 rounded-full" style={{ width: '44%' }} />
                        </div>
                    </div>
                    <div className="flex justify-between text-slate-400 text-[9px]">
                        <span>Target ICPs: 4,200</span>
                        <span className="text-emerald-400">Auto-SQL: 84%</span>
                    </div>
                </div>
            )
        },
        {
            id: 'sales-acceleration',
            num: '03',
            title: 'Sales Acceleration',
            path: '/offerings/sales-acceleration',
            description: 'Help sales teams prioritize opportunities, prepare for conversations, improve follow-up, and make sales execution more informed and efficient.',
            visualType: 'Sales Pipeline & Opportunity Health Indicators',
            visualBadge: 'Deal Intelligence',
            icon: Bot,
            color: 'text-emerald-600 bg-emerald-50 border-emerald-200',
            metrics: 'Win Rate Lift: +19% to +34%',
            graphic: (
                <div className="h-28 w-full bg-slate-950 rounded-xl p-3 flex flex-col justify-between border border-slate-800 text-white font-mono text-[10px]">
                    <div className="flex justify-between items-center text-slate-400">
                        <span>DEAL EXECUTION HEALTH</span>
                        <span className="text-emerald-400">WIN SIGNALS</span>
                    </div>
                    <div className="grid grid-cols-3 gap-1.5 py-1">
                        <div className="p-1.5 rounded bg-slate-900 border border-slate-800 text-center">
                            <div className="text-slate-400 text-[8px]">PROSPECT</div>
                            <div className="font-bold text-white text-[10px]">Enterprise</div>
                        </div>
                        <div className="p-1.5 rounded bg-slate-900 border border-slate-800 text-center">
                            <div className="text-slate-400 text-[8px]">HEALTH</div>
                            <div className="font-bold text-emerald-400 text-[10px]">96 / 100</div>
                        </div>
                        <div className="p-1.5 rounded bg-slate-900 border border-slate-800 text-center">
                            <div className="text-slate-400 text-[8px]">NEXT ACTION</div>
                            <div className="font-bold text-blue-400 text-[10px]">Exec Review</div>
                        </div>
                    </div>
                    <div className="flex justify-between text-slate-400 text-[9px]">
                        <span>Cycle Duration: -38%</span>
                        <span className="text-blue-400">SLA Met</span>
                    </div>
                </div>
            )
        },
        {
            id: 'revenue-operations',
            num: '04',
            title: 'Revenue Operations',
            path: '/offerings/revenue-operations',
            description: 'Connect revenue data, workflows, reporting, forecasting, and operational processes to improve coordination and visibility.',
            visualType: 'Connected CRM & Forecasting Dashboard',
            visualBadge: '98% Forecast Accuracy',
            icon: LineChart,
            color: 'text-blue-600 bg-blue-50 border-blue-200',
            metrics: 'Manual Drag: -65% Reduction',
            graphic: (
                <div className="h-28 w-full bg-slate-950 rounded-xl p-3 flex flex-col justify-between border border-slate-800 text-white font-mono text-[10px]">
                    <div className="flex justify-between items-center text-slate-400">
                        <span>UNIFIED REVOPS PIPELINE</span>
                        <span className="text-indigo-400">REALTIME</span>
                    </div>
                    <div className="flex items-center justify-between py-1 px-1">
                        <div className="text-center">
                            <div className="text-slate-400 text-[8px]">CRM LAKE</div>
                            <div className="w-2 h-2 rounded-full bg-emerald-400 mx-auto mt-1" />
                        </div>
                        <div className="h-px w-8 bg-blue-500/60" />
                        <div className="text-center">
                            <div className="text-slate-400 text-[8px]">FORECAST</div>
                            <div className="w-2 h-2 rounded-full bg-blue-400 mx-auto mt-1" />
                        </div>
                        <div className="h-px w-8 bg-blue-500/60" />
                        <div className="text-center">
                            <div className="text-slate-400 text-[8px]">BILLING</div>
                            <div className="w-2 h-2 rounded-full bg-purple-400 mx-auto mt-1" />
                        </div>
                    </div>
                    <div className="flex justify-between text-slate-400 text-[9px]">
                        <span>Forecast Var: &plusmn;1.4%</span>
                        <span className="text-emerald-400">No Data Silos</span>
                    </div>
                </div>
            )
        },
        {
            id: 'customer-success',
            num: '05',
            title: 'Customer Success Engine',
            path: '/offerings/customer-success',
            description: 'Support onboarding, adoption, customer health monitoring, retention, renewals, and expansion opportunities.',
            visualType: 'Retention Cohort & Health Telemetry',
            visualBadge: '118% Net Retention',
            icon: Users,
            color: 'text-emerald-600 bg-emerald-50 border-emerald-200',
            metrics: 'Gross Churn: Cut by 38%',
            graphic: (
                <div className="h-28 w-full bg-slate-950 rounded-xl p-3 flex flex-col justify-between border border-slate-800 text-white font-mono text-[10px]">
                    <div className="flex justify-between items-center text-slate-400">
                        <span>RETENTION &amp; EXPANSION</span>
                        <span className="text-emerald-400">HEALTHY</span>
                    </div>
                    <div className="grid grid-cols-2 gap-2 py-1">
                        <div className="p-1 rounded bg-slate-900 border border-slate-800">
                            <div className="text-slate-400 text-[8px]">COHORT RETENTION</div>
                            <div className="font-bold text-white text-xs">96.8%</div>
                        </div>
                        <div className="p-1 rounded bg-slate-900 border border-slate-800">
                            <div className="text-slate-400 text-[8px]">EXPANSION PIPELINE</div>
                            <div className="font-bold text-emerald-400 text-xs">+$2.8M</div>
                        </div>
                    </div>
                    <div className="flex justify-between text-slate-400 text-[9px]">
                        <span>Renewal Risk: Low</span>
                        <span className="text-blue-400">Trigger Alert: 0</span>
                    </div>
                </div>
            )
        },
        {
            id: 'gtm-transformation',
            num: '06',
            title: 'GTM Transformation',
            path: '/offerings/gtm-transformation',
            description: 'Align market positioning, customer targeting, routes to market, pricing, launch execution, and growth priorities.',
            visualType: 'Go-To-Market Roadmap & Launch Matrix',
            visualBadge: 'Market Entry Speed',
            icon: Rocket,
            color: 'text-amber-600 bg-amber-50 border-amber-200',
            metrics: 'Launch Velocity: 2.2x Faster',
            graphic: (
                <div className="h-28 w-full bg-slate-950 rounded-xl p-3 flex flex-col justify-between border border-slate-800 text-white font-mono text-[10px]">
                    <div className="flex justify-between items-center text-slate-400">
                        <span>GTM ALIGNMENT ROADMAP</span>
                        <span className="text-amber-400">PHASE 3</span>
                    </div>
                    <div className="flex items-center gap-1.5 py-1">
                        <span className="px-1.5 py-0.5 rounded bg-blue-900/60 text-blue-300 text-[8px]">ICP Focus</span>
                        <span className="text-slate-600">&rarr;</span>
                        <span className="px-1.5 py-0.5 rounded bg-indigo-900/60 text-indigo-300 text-[8px]">Pricing</span>
                        <span className="text-slate-600">&rarr;</span>
                        <span className="px-1.5 py-0.5 rounded bg-emerald-900/60 text-emerald-300 text-[8px]">Scale</span>
                    </div>
                    <div className="flex justify-between text-slate-400 text-[9px]">
                        <span>Strategy: Validated</span>
                        <span className="text-emerald-400">GTM Fit: 95%</span>
                    </div>
                </div>
            )
        },
        {
            id: 'growth-intelligence',
            num: '07',
            title: 'Growth Intelligence',
            path: '/offerings/growth-intelligence',
            description: 'Connect performance indicators, business diagnostics, growth experiments, and decision support to help teams identify where to improve.',
            visualType: 'Executive Performance Dashboard & Diagnostics',
            visualBadge: 'Growth Telemetry',
            icon: BarChart3,
            color: 'text-purple-600 bg-purple-50 border-purple-200',
            metrics: 'Decision Cadence: Real-time',
            graphic: (
                <div className="h-28 w-full bg-slate-950 rounded-xl p-3 flex flex-col justify-between border border-slate-800 text-white font-mono text-[10px]">
                    <div className="flex justify-between items-center text-slate-400">
                        <span>EXECUTIVE GROWTH METRICS</span>
                        <span className="text-purple-400">DIAGNOSTIC</span>
                    </div>
                    <div className="grid grid-cols-3 gap-1 py-1 text-center">
                        <div className="bg-slate-900 p-1 rounded border border-slate-800">
                            <div className="text-[8px] text-slate-400">LTV/CAC</div>
                            <div className="font-bold text-white text-xs">4.2x</div>
                        </div>
                        <div className="bg-slate-900 p-1 rounded border border-slate-800">
                            <div className="text-[8px] text-slate-400">MAGIC #</div>
                            <div className="font-bold text-emerald-400 text-xs">1.34</div>
                        </div>
                        <div className="bg-slate-900 p-1 rounded border border-slate-800">
                            <div className="text-[8px] text-slate-400">VELOCITY</div>
                            <div className="font-bold text-blue-400 text-xs">+31%</div>
                        </div>
                    </div>
                    <div className="flex justify-between text-slate-400 text-[9px]">
                        <span>Friction Points: 2 Isolated</span>
                        <span className="text-emerald-400">Lift Active</span>
                    </div>
                </div>
            )
        },
        {
            id: 'ai-trust-governance',
            num: '08',
            title: 'AI Trust & Governance',
            path: '/offerings/ai-trust-governance',
            description: 'Support appropriate AI adoption through governance, risk awareness, oversight, evaluation, and responsible operational controls.',
            visualType: 'AI Governance & System-Monitoring Board',
            visualBadge: 'SOC2 & ISO Ready',
            icon: ShieldCheck,
            color: 'text-blue-600 bg-blue-50 border-blue-200',
            metrics: 'Zero Data Leakage Vault',
            graphic: (
                <div className="h-28 w-full bg-slate-950 rounded-xl p-3 flex flex-col justify-between border border-slate-800 text-white font-mono text-[10px]">
                    <div className="flex justify-between items-center text-slate-400">
                        <span>ENTERPRISE GOVERNANCE MESH</span>
                        <span className="text-emerald-400">COMPLIANT</span>
                    </div>
                    <div className="flex items-center justify-between py-1 px-1">
                        <div className="flex items-center gap-1.5">
                            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                            <span className="text-[9px] text-slate-200">Zero-Retention Vault</span>
                        </div>
                        <span className="text-emerald-400 text-[9px] font-bold">100% AUDITED</span>
                    </div>
                    <div className="flex justify-between text-slate-400 text-[9px]">
                        <span>Human-in-the-Loop SLA</span>
                        <span className="text-blue-400">Enterprise Guardrails</span>
                    </div>
                </div>
            )
        }
    ];

    return (
        <section id="all-offerings" className="py-20 md:py-28 bg-slate-50 border-b border-slate-200/80">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Header */}
                <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-bold text-blue-700 uppercase font-mono">
                        <Layers className="w-3.5 h-3.5" />
                        <span>The ProfitMachines Platform Suite</span>
                    </div>

                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
                        The Capabilities Behind Sustainable Revenue Growth.
                    </h2>

                    <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
                        Explore the capabilities that help businesses move from growth opportunities to coordinated execution, stronger customer relationships, and better revenue visibility.
                    </p>
                </div>

                {/* 8 Offerings Responsive Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                    {offerings.map((item) => {
                        const Icon = item.icon;
                        return (
                            <Link
                                key={item.id}
                                to={item.path}
                                onClick={() => trackEvent({ eventName: `OFFERING_CARD_CLICK_${item.id.toUpperCase()}` })}
                                className="group p-5 rounded-2xl bg-white border border-slate-200/90 hover:border-blue-400 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
                            >
                                <div className="space-y-4">
                                    {/* Card Top: Icon & Number */}
                                    <div className="flex items-center justify-between">
                                        <div className={`p-2.5 rounded-xl border ${item.color} group-hover:scale-105 transition-transform`}>
                                            <Icon className="w-5 h-5" />
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 font-mono">
                                                {item.visualBadge}
                                            </span>
                                            <span className="text-xs font-black font-mono text-slate-400">
                                                {item.num}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Visual Diagram Element */}
                                    <div className="pt-1">
                                        {item.graphic}
                                    </div>

                                    {/* Title & Description */}
                                    <div>
                                        <h3 className="text-base font-extrabold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors flex items-center justify-between">
                                            <span>{item.title}</span>
                                            <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                                        </h3>
                                        <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>

                                {/* Card Footer: Metric & Link */}
                                <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                                    <span className="font-semibold text-slate-700 font-mono text-[11px]">
                                        {item.metrics}
                                    </span>
                                    <span className="font-bold text-blue-600 group-hover:underline inline-flex items-center gap-1">
                                        <span>View</span>
                                        <ArrowRight className="w-3 h-3" />
                                    </span>
                                </div>
                            </Link>
                        );
                    })}
                </div>

                {/* Section Bottom CTA */}
                <div className="text-center">
                    <Link
                        to="/offerings"
                        onClick={() => trackEvent({ eventName: 'OFFERINGS_EXPLORE_ALL_CLICK' })}
                        className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-slate-900 hover:bg-blue-600 text-white font-bold text-sm shadow-md transition-all hover:gap-3"
                    >
                        <span>Explore All Offerings</span>
                        <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>

            </div>
        </section>
    );
}

