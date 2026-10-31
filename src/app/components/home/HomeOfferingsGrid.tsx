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
    CheckCircle2,
    Compass,
    Workflow,
    Sliders,
    Cpu,
    GitMerge
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
            visualBadge: 'Market Opportunity Map',
            icon: Radar,
            color: 'text-blue-600 bg-blue-50 border-blue-200',
            capabilityTag: 'Strategic Whitespace Mapping',
            graphic: (
                <div className="h-28 w-full bg-slate-950 rounded-xl p-3 flex flex-col justify-between border border-slate-800 text-white font-mono text-[10px]">
                    <div className="flex justify-between items-center text-slate-400">
                        <span className="flex items-center gap-1.5">
                            <Compass className="w-3.5 h-3.5 text-blue-400" />
                            <span>MARKET OPPORTUNITY MAP</span>
                        </span>
                        <span className="text-blue-400 font-bold">SEGMENT FIT</span>
                    </div>
                    <div className="grid grid-cols-3 gap-1.5 py-1">
                        <div className="bg-slate-900 border border-slate-800 rounded p-1.5 text-center">
                            <span className="text-[9px] text-slate-400 block">SEGMENT</span>
                            <span className="text-[10px] font-bold text-white">Enterprise</span>
                        </div>
                        <div className="bg-slate-900 border border-blue-500/40 rounded p-1.5 text-center">
                            <span className="text-[9px] text-blue-400 block">DEMAND</span>
                            <span className="text-[10px] font-bold text-blue-300">High Intent</span>
                        </div>
                        <div className="bg-slate-900 border border-slate-800 rounded p-1.5 text-center">
                            <span className="text-[9px] text-slate-400 block">PRIORITY</span>
                            <span className="text-[10px] font-bold text-emerald-400">P1 Focus</span>
                        </div>
                    </div>
                    <div className="flex justify-between text-slate-400 text-[9px] border-t border-slate-800/80 pt-1">
                        <span>Whitespace Detection</span>
                        <span className="text-emerald-400">Signal Verified</span>
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
            visualBadge: 'Demand Generation Workflow',
            icon: Target,
            color: 'text-indigo-600 bg-indigo-50 border-indigo-200',
            capabilityTag: 'Targeted Pipeline Generation',
            graphic: (
                <div className="h-28 w-full bg-slate-950 rounded-xl p-3 flex flex-col justify-between border border-slate-800 text-white font-mono text-[10px]">
                    <div className="flex justify-between items-center text-slate-400">
                        <span className="flex items-center gap-1.5">
                            <Workflow className="w-3.5 h-3.5 text-indigo-400" />
                            <span>CAMPAIGN WORKFLOW</span>
                        </span>
                        <span className="text-indigo-400 font-bold">PIPELINE FLOW</span>
                    </div>
                    <div className="flex items-center justify-between py-1 px-1">
                        <span className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-[9px] text-slate-300">Target ICP</span>
                        <span className="text-slate-600">&rarr;</span>
                        <span className="px-2 py-0.5 rounded bg-indigo-950 border border-indigo-800 text-[9px] text-indigo-300">Intent Intake</span>
                        <span className="text-slate-600">&rarr;</span>
                        <span className="px-2 py-0.5 rounded bg-blue-950 border border-blue-800 text-[9px] text-blue-300">Qualification</span>
                    </div>
                    <div className="flex justify-between text-slate-400 text-[9px] border-t border-slate-800/80 pt-1">
                        <span>Campaign Coordination</span>
                        <span className="text-indigo-400">Lead Progression</span>
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
            visualBadge: 'Sales Process Workflow',
            icon: Bot,
            color: 'text-emerald-600 bg-emerald-50 border-emerald-200',
            capabilityTag: 'Deal Execution & Guidance',
            graphic: (
                <div className="h-28 w-full bg-slate-950 rounded-xl p-3 flex flex-col justify-between border border-slate-800 text-white font-mono text-[10px]">
                    <div className="flex justify-between items-center text-slate-400">
                        <span className="flex items-center gap-1.5">
                            <Sliders className="w-3.5 h-3.5 text-emerald-400" />
                            <span>OPPORTUNITY PROGRESSION</span>
                        </span>
                        <span className="text-emerald-400 font-bold">DEAL GUIDANCE</span>
                    </div>
                    <div className="grid grid-cols-3 gap-1.5 py-1 text-center">
                        <div className="p-1 rounded bg-slate-900 border border-slate-800">
                            <div className="text-[8px] text-slate-400">STAGE 1</div>
                            <div className="text-[9px] font-bold text-white">Account Dossier</div>
                        </div>
                        <div className="p-1 rounded bg-slate-900 border border-emerald-500/40">
                            <div className="text-[8px] text-emerald-400">STAGE 2</div>
                            <div className="text-[9px] font-bold text-emerald-300">Committee Map</div>
                        </div>
                        <div className="p-1 rounded bg-slate-900 border border-slate-800">
                            <div className="text-[8px] text-slate-400">STAGE 3</div>
                            <div className="text-[9px] font-bold text-white">Closing Plan</div>
                        </div>
                    </div>
                    <div className="flex justify-between text-slate-400 text-[9px] border-t border-slate-800/80 pt-1">
                        <span>Follow-up Cadence</span>
                        <span className="text-emerald-400">Informed Execution</span>
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
            visualBadge: 'Connected Business Systems',
            icon: LineChart,
            color: 'text-blue-600 bg-blue-50 border-blue-200',
            capabilityTag: 'Unified Systems & Telemetry',
            graphic: (
                <div className="h-28 w-full bg-slate-950 rounded-xl p-3 flex flex-col justify-between border border-slate-800 text-white font-mono text-[10px]">
                    <div className="flex justify-between items-center text-slate-400">
                        <span className="flex items-center gap-1.5">
                            <Cpu className="w-3.5 h-3.5 text-blue-400" />
                            <span>PROCESS AUTOMATION</span>
                        </span>
                        <span className="text-blue-400 font-bold">REVOPS</span>
                    </div>
                    <div className="flex items-center justify-between py-1 px-1">
                        <div className="text-center">
                            <span className="text-[8px] text-slate-400 block">CRM Data</span>
                            <div className="w-2 h-2 rounded-full bg-blue-400 mx-auto mt-1" />
                        </div>
                        <div className="h-px w-6 bg-slate-700" />
                        <div className="text-center">
                            <span className="text-[8px] text-slate-400 block">Workflows</span>
                            <div className="w-2 h-2 rounded-full bg-indigo-400 mx-auto mt-1" />
                        </div>
                        <div className="h-px w-6 bg-slate-700" />
                        <div className="text-center">
                            <span className="text-[8px] text-slate-400 block">Forecasting</span>
                            <div className="w-2 h-2 rounded-full bg-emerald-400 mx-auto mt-1" />
                        </div>
                    </div>
                    <div className="flex justify-between text-slate-400 text-[9px] border-t border-slate-800/80 pt-1">
                        <span>Zero Data Silos</span>
                        <span className="text-blue-400">Operational Alignment</span>
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
            visualBadge: 'Customer Lifecycle Journey',
            icon: Users,
            color: 'text-emerald-600 bg-emerald-50 border-emerald-200',
            capabilityTag: 'Adoption & Retention Health',
            graphic: (
                <div className="h-28 w-full bg-slate-950 rounded-xl p-3 flex flex-col justify-between border border-slate-800 text-white font-mono text-[10px]">
                    <div className="flex justify-between items-center text-slate-400">
                        <span className="flex items-center gap-1.5">
                            <Activity className="w-3.5 h-3.5 text-emerald-400" />
                            <span>CUSTOMER LIFECYCLE</span>
                        </span>
                        <span className="text-emerald-400 font-bold">RETENTION</span>
                    </div>
                    <div className="flex items-center justify-between py-1 px-1">
                        <span className="px-1.5 py-0.5 rounded bg-slate-900 border border-slate-800 text-[8px] text-slate-300">Onboarding</span>
                        <span className="text-slate-600">&rarr;</span>
                        <span className="px-1.5 py-0.5 rounded bg-slate-900 border border-slate-800 text-[8px] text-slate-300">Adoption</span>
                        <span className="text-slate-600">&rarr;</span>
                        <span className="px-1.5 py-0.5 rounded bg-emerald-950 border border-emerald-800 text-[8px] text-emerald-300">Renewal &amp; Growth</span>
                    </div>
                    <div className="flex justify-between text-slate-400 text-[9px] border-t border-slate-800/80 pt-1">
                        <span>Health Monitoring</span>
                        <span className="text-emerald-400">Expansion Signals</span>
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
            visualBadge: 'Go-To-Market Roadmap',
            icon: Rocket,
            color: 'text-amber-600 bg-amber-50 border-amber-200',
            capabilityTag: 'Market-Entry Alignment',
            graphic: (
                <div className="h-28 w-full bg-slate-950 rounded-xl p-3 flex flex-col justify-between border border-slate-800 text-white font-mono text-[10px]">
                    <div className="flex justify-between items-center text-slate-400">
                        <span className="flex items-center gap-1.5">
                            <GitMerge className="w-3.5 h-3.5 text-amber-400" />
                            <span>GTM TRANSFORMATION MATRIX</span>
                        </span>
                        <span className="text-amber-400 font-bold">ALIGNMENT</span>
                    </div>
                    <div className="flex items-center justify-between py-1 px-1">
                        <span className="px-1.5 py-0.5 rounded bg-slate-900 border border-slate-800 text-[8px] text-slate-300">Positioning</span>
                        <span className="text-slate-600">&rarr;</span>
                        <span className="px-1.5 py-0.5 rounded bg-slate-900 border border-slate-800 text-[8px] text-slate-300">Pricing</span>
                        <span className="text-slate-600">&rarr;</span>
                        <span className="px-1.5 py-0.5 rounded bg-amber-950 border border-amber-800 text-[8px] text-amber-300">Commercial Launch</span>
                    </div>
                    <div className="flex justify-between text-slate-400 text-[9px] border-t border-slate-800/80 pt-1">
                        <span>Route to Market</span>
                        <span className="text-amber-400">Execution Cadence</span>
                    </div>
                </div>
            )
        },
        {
            id: 'growth-intelligence',
            num: '07',
            title: 'Growth Intelligence',
            path: '/offerings/growth-intelligence',
            description: 'Connect business diagnostics, growth experiments, strategic priorities, and decision support to help teams identify where to improve.',
            visualBadge: 'Strategy Planning Workspace',
            icon: BarChart3,
            color: 'text-purple-600 bg-purple-50 border-purple-200',
            capabilityTag: 'Decision Support Architecture',
            graphic: (
                <div className="h-28 w-full bg-slate-950 rounded-xl p-3 flex flex-col justify-between border border-slate-800 text-white font-mono text-[10px]">
                    <div className="flex justify-between items-center text-slate-400">
                        <span className="flex items-center gap-1.5">
                            <Layers className="w-3.5 h-3.5 text-purple-400" />
                            <span>STRATEGY WORKSPACE</span>
                        </span>
                        <span className="text-purple-400 font-bold">DECISION SUPPORT</span>
                    </div>
                    <div className="grid grid-cols-3 gap-1.5 py-1 text-center">
                        <div className="bg-slate-900 p-1.5 rounded border border-slate-800">
                            <span className="text-[8px] text-slate-400 block">DIAGNOSTICS</span>
                            <span className="text-[9px] font-bold text-white">Systemic Audit</span>
                        </div>
                        <div className="bg-slate-900 p-1.5 rounded border border-purple-500/40">
                            <span className="text-[8px] text-purple-400 block">EXPERIMENTS</span>
                            <span className="text-[9px] font-bold text-purple-300">Validated</span>
                        </div>
                        <div className="bg-slate-900 p-1.5 rounded border border-slate-800">
                            <span className="text-[8px] text-slate-400 block">DECISIONS</span>
                            <span className="text-[9px] font-bold text-white">Prioritized</span>
                        </div>
                    </div>
                    <div className="flex justify-between text-slate-400 text-[9px] border-t border-slate-800/80 pt-1">
                        <span>Continuous Improvement</span>
                        <span className="text-purple-400">Executive Insight</span>
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
            visualBadge: 'Responsible AI Workflow',
            icon: ShieldCheck,
            color: 'text-blue-600 bg-blue-50 border-blue-200',
            capabilityTag: 'Operational Governance & Controls',
            graphic: (
                <div className="h-28 w-full bg-slate-950 rounded-xl p-3 flex flex-col justify-between border border-slate-800 text-white font-mono text-[10px]">
                    <div className="flex justify-between items-center text-slate-400">
                        <span className="flex items-center gap-1.5">
                            <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
                            <span>RESPONSIBLE AI WORKFLOW</span>
                        </span>
                        <span className="text-emerald-400 font-bold">GOVERNED</span>
                    </div>
                    <div className="flex items-center justify-between py-1 px-1">
                        <div className="p-1.5 rounded bg-slate-900 border border-slate-800 text-center flex-1 mx-1">
                            <span className="text-[8px] text-slate-400 block">Access Controls</span>
                        </div>
                        <div className="p-1.5 rounded bg-slate-900 border border-blue-500/40 text-center flex-1 mx-1">
                            <span className="text-[8px] text-blue-400 block">Human Oversight</span>
                        </div>
                        <div className="p-1.5 rounded bg-slate-900 border border-emerald-500/40 text-center flex-1 mx-1">
                            <span className="text-[8px] text-emerald-400 block">System Auditing</span>
                        </div>
                    </div>
                    <div className="flex justify-between text-slate-400 text-[9px] border-t border-slate-800/80 pt-1">
                        <span>Operational Controls</span>
                        <span className="text-blue-400">Risk Awareness</span>
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
                                    {/* Card Top: Icon & Visual Badge */}
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

                                {/* Card Footer: Capability Tag & Link */}
                                <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                                    <span className="font-semibold text-slate-700 font-mono text-[11px]">
                                        {item.capabilityTag}
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
