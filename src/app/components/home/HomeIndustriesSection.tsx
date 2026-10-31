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
    ShieldCheck
} from 'lucide-react';
import { trackEvent } from '../../../lib/analytics';

export default function HomeIndustriesSection() {
    const industries = [
        {
            title: "B2B",
            path: "/industries/b2b",
            focus: "Ideal customer profiles, account targeting, qualified pipeline, opportunity progression, and longer-term customer relationships.",
            icon: Briefcase,
            badge: "Account-Based Growth",
            color: "text-blue-600 bg-blue-50 border-blue-200",
            visualGraphic: (
                <div className="h-28 w-full bg-slate-950 rounded-xl p-3 flex flex-col justify-between border border-slate-800 text-white font-mono text-[10px]">
                    <div className="flex justify-between items-center text-slate-400">
                        <span>TARGET ACCOUNT PIPELINE</span>
                        <span className="text-emerald-400">QUALIFIED</span>
                    </div>
                    <div className="grid grid-cols-3 gap-1.5 py-1 text-center">
                        <div className="bg-slate-900 p-1.5 rounded border border-slate-800">
                            <div className="text-[8px] text-slate-400">TIER 1 ACCOUNTS</div>
                            <div className="text-xs font-bold text-white">450</div>
                        </div>
                        <div className="bg-slate-900 p-1.5 rounded border border-slate-800">
                            <div className="text-[8px] text-slate-400">INTENT SURGE</div>
                            <div className="text-xs font-bold text-blue-400">89%</div>
                        </div>
                        <div className="bg-slate-900 p-1.5 rounded border border-slate-800">
                            <div className="text-[8px] text-slate-400">ACTIVE DEALS</div>
                            <div className="text-xs font-bold text-emerald-400">$8.4M</div>
                        </div>
                    </div>
                    <div className="flex justify-between text-slate-400 text-[9px]">
                        <span>Multi-stakeholder alignment</span>
                        <span className="text-blue-400">SLA Active</span>
                    </div>
                </div>
            )
        },
        {
            title: "B2C",
            path: "/industries/b2c",
            focus: "Audience segmentation, customer journeys, campaign performance, conversion, repeat purchases, and retention.",
            icon: ShoppingBag,
            badge: "Lifecycle & Retention",
            color: "text-indigo-600 bg-indigo-50 border-indigo-200",
            visualGraphic: (
                <div className="h-28 w-full bg-slate-950 rounded-xl p-3 flex flex-col justify-between border border-slate-800 text-white font-mono text-[10px]">
                    <div className="flex justify-between items-center text-slate-400">
                        <span>CUSTOMER JOURNEY FUNNEL</span>
                        <span className="text-indigo-400">CONVERSION</span>
                    </div>
                    <div className="space-y-1.5 py-1">
                        <div className="flex items-center justify-between text-[9px] text-slate-300">
                            <span>Reach &rarr; Cart</span>
                            <span className="font-bold text-white">38.2%</span>
                        </div>
                        <div className="w-full bg-slate-800 rounded-full h-1.5 overflow-hidden">
                            <div className="bg-indigo-500 h-1.5 rounded-full" style={{ width: '68%' }} />
                        </div>
                        <div className="flex items-center justify-between text-[9px] text-slate-300">
                            <span>Repeat Purchase Rate</span>
                            <span className="font-bold text-emerald-400">42.8%</span>
                        </div>
                    </div>
                    <div className="flex justify-between text-slate-400 text-[9px]">
                        <span>LTV:CAC Ratio: 3.8x</span>
                        <span className="text-emerald-400">Churn: Low</span>
                    </div>
                </div>
            )
        },
        {
            title: "Enterprise",
            path: "/industries/enterprise",
            focus: "Complex buying groups, account intelligence, coordinated sales processes, forecasting, and expansion opportunities.",
            icon: Building2,
            badge: "Multi-Entity Scaling",
            color: "text-emerald-600 bg-emerald-50 border-emerald-200",
            visualGraphic: (
                <div className="h-28 w-full bg-slate-950 rounded-xl p-3 flex flex-col justify-between border border-slate-800 text-white font-mono text-[10px]">
                    <div className="flex justify-between items-center text-slate-400">
                        <span>BUYING GROUP MATRIX</span>
                        <span className="text-emerald-400">CONSENSUS</span>
                    </div>
                    <div className="grid grid-cols-3 gap-1.5 py-1 text-center">
                        <div className="bg-slate-900 p-1.5 rounded border border-slate-800">
                            <div className="text-[8px] text-slate-400">DECISION MAKERS</div>
                            <div className="text-xs font-bold text-white">8 Execs</div>
                        </div>
                        <div className="bg-slate-900 p-1.5 rounded border border-slate-800">
                            <div className="text-[8px] text-slate-400">SECURITY REVIEW</div>
                            <div className="text-xs font-bold text-emerald-400">Approved</div>
                        </div>
                        <div className="bg-slate-900 p-1.5 rounded border border-slate-800">
                            <div className="text-[8px] text-slate-400">EXPANSION ACCOUNTS</div>
                            <div className="text-xs font-bold text-blue-400">12 Subsid.</div>
                        </div>
                    </div>
                    <div className="flex justify-between text-slate-400 text-[9px]">
                        <span>ACV: $240K+</span>
                        <span className="text-blue-400">Enterprise SLA</span>
                    </div>
                </div>
            )
        },
        {
            title: "Mid-Market",
            path: "/industries/midmarket",
            focus: "Repeatable demand generation, sales productivity, workflow automation, and better visibility with limited resources.",
            icon: BarChart3,
            badge: "Productivity & Velocity",
            color: "text-amber-600 bg-amber-50 border-amber-200",
            visualGraphic: (
                <div className="h-28 w-full bg-slate-950 rounded-xl p-3 flex flex-col justify-between border border-slate-800 text-white font-mono text-[10px]">
                    <div className="flex justify-between items-center text-slate-400">
                        <span>VELOCITY REVOPS DASHBOARD</span>
                        <span className="text-amber-400">AUTOMATED</span>
                    </div>
                    <div className="grid grid-cols-2 gap-2 py-1">
                        <div className="bg-slate-900 p-1.5 rounded border border-slate-800">
                            <div className="text-[8px] text-slate-400">SALES REPS SUPPORTED</div>
                            <div className="text-xs font-bold text-white">18 Reps</div>
                        </div>
                        <div className="bg-slate-900 p-1.5 rounded border border-slate-800">
                            <div className="text-[8px] text-slate-400">TIME SAVED / REP</div>
                            <div className="text-xs font-bold text-emerald-400">12 hrs/wk</div>
                        </div>
                    </div>
                    <div className="flex justify-between text-slate-400 text-[9px]">
                        <span>Overhead: Minimal</span>
                        <span className="text-emerald-400">Quota Attainment: 82%</span>
                    </div>
                </div>
            )
        },
        {
            title: "Startups & Founders",
            path: "/industries/startups",
            focus: "Customer and market validation, ideal customer profiles, early demand generation, founder-led sales processes, and funnel measurement.",
            icon: Rocket,
            badge: "Validation & Traction",
            color: "text-purple-600 bg-purple-50 border-purple-200",
            visualGraphic: (
                <div className="h-28 w-full bg-slate-950 rounded-xl p-3 flex flex-col justify-between border border-slate-800 text-white font-mono text-[10px]">
                    <div className="flex justify-between items-center text-slate-400">
                        <span>PMF &amp; TRACTION SCORECARD</span>
                        <span className="text-purple-400">EARLY STAGE</span>
                    </div>
                    <div className="grid grid-cols-3 gap-1.5 py-1 text-center">
                        <div className="bg-slate-900 p-1.5 rounded border border-slate-800">
                            <div className="text-[8px] text-slate-400">ICP EXPERIMENTS</div>
                            <div className="text-xs font-bold text-white">14 Tested</div>
                        </div>
                        <div className="bg-slate-900 p-1.5 rounded border border-slate-800">
                            <div className="text-[8px] text-slate-400">LEAD VELOCITY</div>
                            <div className="text-xs font-bold text-emerald-400">+4.2x</div>
                        </div>
                        <div className="bg-slate-900 p-1.5 rounded border border-slate-800">
                            <div className="text-[8px] text-slate-400">FOUNDER TIME</div>
                            <div className="text-xs font-bold text-blue-400">Focused</div>
                        </div>
                    </div>
                    <div className="flex justify-between text-slate-400 text-[9px]">
                        <span>Initial 100 Customers</span>
                        <span className="text-emerald-400">Seed to Series A</span>
                    </div>
                </div>
            )
        },
        {
            title: "Specialized Business Models",
            path: "/industries/sectors",
            focus: "Reflect relevant models confirmed by the existing page, such as SaaS and subscriptions, professional services, digital businesses, and education platforms.",
            icon: Layers,
            badge: "Recurring & Vertical Models",
            color: "text-blue-600 bg-blue-50 border-blue-200",
            visualGraphic: (
                <div className="h-28 w-full bg-slate-950 rounded-xl p-3 flex flex-col justify-between border border-slate-800 text-white font-mono text-[10px]">
                    <div className="flex justify-between items-center text-slate-400">
                        <span>RECURRING REVENUE MESH</span>
                        <span className="text-blue-400">EXPANSION</span>
                    </div>
                    <div className="grid grid-cols-3 gap-1.5 py-1 text-center">
                        <div className="bg-slate-900 p-1.5 rounded border border-slate-800">
                            <div className="text-[8px] text-slate-400">NET RETENTION</div>
                            <div className="text-xs font-bold text-emerald-400">122%</div>
                        </div>
                        <div className="bg-slate-900 p-1.5 rounded border border-slate-800">
                            <div className="text-[8px] text-slate-400">CONTRACT TYPE</div>
                            <div className="text-xs font-bold text-white">ARR / Usage</div>
                        </div>
                        <div className="bg-slate-900 p-1.5 rounded border border-slate-800">
                            <div className="text-[8px] text-slate-400">EXPANSION LIFT</div>
                            <div className="text-xs font-bold text-indigo-400">+28%</div>
                        </div>
                    </div>
                    <div className="flex justify-between text-slate-400 text-[9px]">
                        <span>SaaS &bull; Services &bull; Platforms</span>
                        <span className="text-blue-400">Active</span>
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
                        Growth priorities vary with the customer, sales cycle, business model, available resources, and revenue structure. ProfitMachines should reflect these differences rather than present one identical growth approach for every business.
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

