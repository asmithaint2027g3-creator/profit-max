import React from 'react';
import { Link } from 'react-router-dom';
import { 
    Briefcase, 
    ShoppingBag, 
    Building2, 
    BarChart3, 
    Rocket, 
    Layers, 
    ArrowRight,
    ArrowUpRight,
    CheckCircle2,
    Users,
    TrendingUp,
    ShieldCheck,
    Compass,
    Workflow,
    Sliders
} from 'lucide-react';
import { trackEvent } from '../../../lib/analytics';

export default function HomeIndustriesSection() {
    const industries = [
        {
            title: "B2B",
            path: "/industries/b2b",
            focus: "Ideal customer profiles, account targeting, qualified pipeline, opportunity progression, and customer relationships.",
            icon: Briefcase,
            badge: "Account-Based Growth",
            color: "text-blue-600 bg-blue-50 border-blue-200",
            visualGraphic: (
                <div className="h-28 w-full bg-slate-950 rounded-xl p-3 flex flex-col justify-between border border-slate-800 text-white font-mono text-[10px]">
                    <div className="flex justify-between items-center text-slate-400">
                        <span>TARGET ACCOUNT WORKFLOW</span>
                        <span className="text-blue-400">COORDINATED</span>
                    </div>
                    <div className="grid grid-cols-3 gap-1.5 py-1 text-center">
                        <div className="bg-slate-900 p-1.5 rounded border border-slate-800">
                            <span className="text-[8px] text-slate-400 block">STEP 1</span>
                            <span className="text-[9px] font-bold text-white">ICP Identification</span>
                        </div>
                        <div className="bg-slate-900 p-1.5 rounded border border-blue-500/40">
                            <span className="text-[8px] text-blue-400 block">STEP 2</span>
                            <span className="text-[9px] font-bold text-blue-300">Committee Map</span>
                        </div>
                        <div className="bg-slate-900 p-1.5 rounded border border-slate-800">
                            <span className="text-[8px] text-slate-400 block">STEP 3</span>
                            <span className="text-[9px] font-bold text-emerald-400">Outreach Playbook</span>
                        </div>
                    </div>
                    <div className="flex justify-between text-slate-400 text-[9px] border-t border-slate-800/80 pt-1">
                        <span>Multi-Stakeholder Alignment</span>
                        <span className="text-blue-400">Active Workflow</span>
                    </div>
                </div>
            )
        },
        {
            title: "B2C",
            path: "/industries/b2c",
            focus: "Audience segmentation, customer journeys, campaign coordination, conversion, repeat purchases, and retention.",
            icon: ShoppingBag,
            badge: "Lifecycle & Retention",
            color: "text-indigo-600 bg-indigo-50 border-indigo-200",
            visualGraphic: (
                <div className="h-28 w-full bg-slate-950 rounded-xl p-3 flex flex-col justify-between border border-slate-800 text-white font-mono text-[10px]">
                    <div className="flex justify-between items-center text-slate-400">
                        <span>CONSUMER JOURNEY MAP</span>
                        <span className="text-indigo-400">LIFECYCLE</span>
                    </div>
                    <div className="flex items-center justify-between py-1 px-1">
                        <span className="px-1.5 py-0.5 rounded bg-slate-900 border border-slate-800 text-[8px] text-slate-300">Audience Segment</span>
                        <span className="text-slate-600">&rarr;</span>
                        <span className="px-1.5 py-0.5 rounded bg-indigo-950 border border-indigo-800 text-[8px] text-indigo-300">Targeted Campaign</span>
                        <span className="text-slate-600">&rarr;</span>
                        <span className="px-1.5 py-0.5 rounded bg-slate-900 border border-slate-800 text-[8px] text-slate-300">Repeat Retention</span>
                    </div>
                    <div className="flex justify-between text-slate-400 text-[9px] border-t border-slate-800/80 pt-1">
                        <span>Campaign Coordination</span>
                        <span className="text-indigo-400">Retention Strategy</span>
                    </div>
                </div>
            )
        },
        {
            title: "Enterprise",
            path: "/industries/enterprise",
            focus: "Complex buying groups, account intelligence, coordinated sales processes, and expansion opportunities.",
            icon: Building2,
            badge: "Complex Buying Groups",
            color: "text-emerald-600 bg-emerald-50 border-emerald-200",
            visualGraphic: (
                <div className="h-28 w-full bg-slate-950 rounded-xl p-3 flex flex-col justify-between border border-slate-800 text-white font-mono text-[10px]">
                    <div className="flex justify-between items-center text-slate-400">
                        <span>BUYING COMMITTEE MATRIX</span>
                        <span className="text-emerald-400">CONSENSUS</span>
                    </div>
                    <div className="grid grid-cols-3 gap-1.5 py-1 text-center">
                        <div className="bg-slate-900 p-1.5 rounded border border-slate-800">
                            <span className="text-[8px] text-slate-400 block">DECISION</span>
                            <span className="text-[9px] font-bold text-white">Executive</span>
                        </div>
                        <div className="bg-slate-900 p-1.5 rounded border border-emerald-500/40">
                            <span className="text-[8px] text-emerald-400 block">SECURITY</span>
                            <span className="text-[9px] font-bold text-emerald-300">Governance</span>
                        </div>
                        <div className="bg-slate-900 p-1.5 rounded border border-slate-800">
                            <span className="text-[8px] text-slate-400 block">DIVISION</span>
                            <span className="text-[9px] font-bold text-white">Expansion</span>
                        </div>
                    </div>
                    <div className="flex justify-between text-slate-400 text-[9px] border-t border-slate-800/80 pt-1">
                        <span>Corporate Account Planning</span>
                        <span className="text-emerald-400">Coordinated Motion</span>
                    </div>
                </div>
            )
        },
        {
            title: "Mid-Market",
            path: "/industries/midmarket",
            focus: "Repeatable demand generation, sales productivity, workflow automation, and efficient growth with limited resources.",
            icon: BarChart3,
            badge: "Productivity & Velocity",
            color: "text-amber-600 bg-amber-50 border-amber-200",
            visualGraphic: (
                <div className="h-28 w-full bg-slate-950 rounded-xl p-3 flex flex-col justify-between border border-slate-800 text-white font-mono text-[10px]">
                    <div className="flex justify-between items-center text-slate-400">
                        <span>STREAMLINED WORKFLOW</span>
                        <span className="text-amber-400">LEAN OPS</span>
                    </div>
                    <div className="flex items-center justify-between py-1 px-1">
                        <span className="px-1.5 py-0.5 rounded bg-slate-900 border border-slate-800 text-[8px] text-slate-300">Inbound Lead</span>
                        <span className="text-slate-600">&rarr;</span>
                        <span className="px-1.5 py-0.5 rounded bg-amber-950 border border-amber-800 text-[8px] text-amber-300">Automated CRM Task</span>
                        <span className="text-slate-600">&rarr;</span>
                        <span className="px-1.5 py-0.5 rounded bg-slate-900 border border-slate-800 text-[8px] text-slate-300">Rep Action</span>
                    </div>
                    <div className="flex justify-between text-slate-400 text-[9px] border-t border-slate-800/80 pt-1">
                        <span>Workflow Automation</span>
                        <span className="text-amber-400">High Productivity</span>
                    </div>
                </div>
            )
        },
        {
            title: "Startups & Founders",
            path: "/industries/startups",
            focus: "Customer and market validation, ideal customer profiles, early demand generation, founder-led sales, and funnel measurement.",
            icon: Rocket,
            badge: "Validation & Traction",
            color: "text-purple-600 bg-purple-50 border-purple-200",
            visualGraphic: (
                <div className="h-28 w-full bg-slate-950 rounded-xl p-3 flex flex-col justify-between border border-slate-800 text-white font-mono text-[10px]">
                    <div className="flex justify-between items-center text-slate-400">
                        <span>MARKET VALIDATION JOURNEY</span>
                        <span className="text-purple-400">FOUNDER-LED</span>
                    </div>
                    <div className="grid grid-cols-3 gap-1.5 py-1 text-center">
                        <div className="bg-slate-900 p-1.5 rounded border border-slate-800">
                            <span className="text-[8px] text-slate-400 block">PHASE 1</span>
                            <span className="text-[9px] font-bold text-white">ICP Discovery</span>
                        </div>
                        <div className="bg-slate-900 p-1.5 rounded border border-purple-500/40">
                            <span className="text-[8px] text-purple-400 block">PHASE 2</span>
                            <span className="text-[9px] font-bold text-purple-300">Demand Signal</span>
                        </div>
                        <div className="bg-slate-900 p-1.5 rounded border border-slate-800">
                            <span className="text-[8px] text-slate-400 block">PHASE 3</span>
                            <span className="text-[9px] font-bold text-white">Early Pipeline</span>
                        </div>
                    </div>
                    <div className="flex justify-between text-slate-400 text-[9px] border-t border-slate-800/80 pt-1">
                        <span>Capital Efficiency</span>
                        <span className="text-purple-400">Traction Building</span>
                    </div>
                </div>
            )
        },
        {
            title: "Specialized Business Models",
            path: "/industries/sectors",
            focus: "Focus on business models that fit ProfitMachines' sales, demand generation, customer acquisition, and revenue-growth positioning (SaaS, platforms, services).",
            icon: Layers,
            badge: "Recurring & Vertical Models",
            color: "text-blue-600 bg-blue-50 border-blue-200",
            visualGraphic: (
                <div className="h-28 w-full bg-slate-950 rounded-xl p-3 flex flex-col justify-between border border-slate-800 text-white font-mono text-[10px]">
                    <div className="flex justify-between items-center text-slate-400">
                        <span>RECURRING REVENUE WORKFLOW</span>
                        <span className="text-blue-400">EXPANSION</span>
                    </div>
                    <div className="flex items-center justify-between py-1 px-1">
                        <span className="px-1.5 py-0.5 rounded bg-slate-900 border border-slate-800 text-[8px] text-slate-300">Subscription Intake</span>
                        <span className="text-slate-600">&rarr;</span>
                        <span className="px-1.5 py-0.5 rounded bg-blue-950 border border-blue-800 text-[8px] text-blue-300">Usage Alignment</span>
                        <span className="text-slate-600">&rarr;</span>
                        <span className="px-1.5 py-0.5 rounded bg-emerald-950 border border-emerald-800 text-[8px] text-emerald-300">Account Expansion</span>
                    </div>
                    <div className="flex justify-between text-slate-400 text-[9px] border-t border-slate-800/80 pt-1">
                        <span>Vertical Specialization</span>
                        <span className="text-blue-400">SaaS &bull; Services &bull; Platforms</span>
                    </div>
                </div>
            )
        }
    ];

    return (
        <section className="py-20 md:py-28 bg-slate-50 border-b border-slate-200/80">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Header */}
                <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-bold text-blue-700 uppercase font-mono">
                        <Users className="w-3.5 h-3.5" />
                        <span>Business Model Specialization</span>
                    </div>

                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
                        Different Business Models. Different Paths to Growth.
                    </h2>

                    <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
                        Every business has different customers, sales cycles, growth constraints, and operational requirements. ProfitMachines should adapt its revenue approach to the business model and growth priorities.
                    </p>
                </div>

                {/* 6 Industry Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                    {industries.map((ind, idx) => {
                        const Icon = ind.icon;
                        return (
                            <Link
                                key={idx}
                                to={ind.path}
                                onClick={() => trackEvent({ eventName: `INDUSTRY_CARD_CLICK_${ind.title.toUpperCase()}` })}
                                className="group p-6 rounded-2xl bg-white border border-slate-200/90 hover:border-blue-400 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
                            >
                                <div className="space-y-4">
                                    <div className="flex items-center justify-between">
                                        <div className={`p-2.5 rounded-xl border ${ind.color} group-hover:scale-105 transition-transform`}>
                                            <Icon className="w-5 h-5" />
                                        </div>
                                        <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-slate-100 text-slate-600">
                                            {ind.badge}
                                        </span>
                                    </div>

                                    {/* Miniature Visual Graphic */}
                                    <div className="pt-1">
                                        {ind.visualGraphic}
                                    </div>

                                    <div>
                                        <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors flex items-center justify-between">
                                            <span>{ind.title}</span>
                                            <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                                        </h3>
                                        <p className="text-xs text-slate-600 leading-relaxed">
                                            {ind.focus}
                                        </p>
                                    </div>
                                </div>

                                <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                                    <span className="font-semibold text-slate-500">Explore Blueprint</span>
                                    <span className="font-bold text-blue-600 group-hover:underline inline-flex items-center gap-1">
                                        <span>View Pathway</span>
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
                        to="/industries"
                        onClick={() => trackEvent({ eventName: 'INDUSTRIES_EXPLORE_ALL_CLICK' })}
                        className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-slate-900 hover:bg-blue-600 text-white font-bold text-sm shadow-md transition-all hover:gap-3"
                    >
                        <span>Explore All Industries</span>
                        <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>

            </div>
        </section>
    );
}
