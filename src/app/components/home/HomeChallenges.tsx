import React from 'react';
import { 
    SearchX, 
    FilterX, 
    Clock, 
    Unplug, 
    UserMinus, 
    ArrowRight,
    CheckCircle2,
    ShieldAlert
} from 'lucide-react';
import { motion } from 'framer-motion';

export default function HomeChallenges() {
    const challenges = [
        {
            num: "01",
            title: "Unclear Growth Opportunities",
            description: "Teams struggle to identify the most attractive markets, customer segments, and opportunities to prioritize.",
            icon: SearchX,
            impact: "Wasted exploratory spend & missed market whitespace",
            color: "text-rose-600 bg-rose-50 border-rose-200"
        },
        {
            num: "02",
            title: "Inconsistent Demand Generation",
            description: "Prospecting, targeting, and campaigns may generate activity without producing enough qualified pipeline.",
            icon: FilterX,
            impact: "Unpredictable pipeline flow & high acquisition cost",
            color: "text-amber-600 bg-amber-50 border-amber-200"
        },
        {
            num: "03",
            title: "Sales Execution Bottlenecks",
            description: "Manual research, inconsistent follow-up, and limited opportunity visibility can slow deal progression.",
            icon: Clock,
            impact: "Extended sales cycles & deal slippage",
            color: "text-indigo-600 bg-indigo-50 border-indigo-200"
        },
        {
            num: "04",
            title: "Fragmented Revenue Operations",
            description: "Disconnected data, workflows, and reporting make it harder to understand performance and coordinate teams.",
            icon: Unplug,
            impact: "Data silos & inaccurate executive forecasting",
            color: "text-blue-600 bg-blue-50 border-blue-200"
        },
        {
            num: "05",
            title: "Missed Customer Growth",
            description: "Limited visibility into adoption, retention, and expansion can cause businesses to overlook opportunities within their existing customer base.",
            icon: UserMinus,
            impact: "Silent churn & unrealized expansion revenue",
            color: "text-purple-600 bg-purple-50 border-purple-200"
        }
    ];

    return (
        <section className="py-20 md:py-28 bg-white border-b border-slate-200/80 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Header Section */}
                <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-xs font-bold text-slate-700 uppercase font-mono">
                        <ShieldAlert className="w-3.5 h-3.5 text-slate-500" />
                        <span>The Cost of Fragmentation</span>
                    </div>

                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
                        Growth Becomes Harder When Your Revenue System Is Disconnected.
                    </h2>

                    <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
                        When growth functions operate in isolation, friction builds at every handoff—slowing velocity, ballooning costs, and masking true commercial potential.
                    </p>
                </div>

                {/* 5 Concise Challenge Panels */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-14">
                    {challenges.map((c, idx) => {
                        const Icon = c.icon;
                        return (
                            <div 
                                key={idx}
                                className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 hover:bg-white hover:border-slate-300 hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
                            >
                                <div>
                                    <div className="flex items-center justify-between mb-4">
                                        <div className={`p-2.5 rounded-xl border ${c.color} transition-transform group-hover:scale-105`}>
                                            <Icon className="w-5 h-5" />
                                        </div>
                                        <span className="text-xs font-black font-mono text-slate-400">
                                            {c.num}
                                        </span>
                                    </div>

                                    <h3 className="text-base font-bold text-slate-900 mb-2 leading-snug">
                                        {c.title}
                                    </h3>

                                    <p className="text-xs text-slate-600 leading-relaxed">
                                        {c.description}
                                    </p>
                                </div>

                                <div className="mt-5 pt-3 border-t border-slate-200/60">
                                    <div className="text-[10px] font-bold text-slate-400 uppercase font-mono tracking-wider">Commercial Friction</div>
                                    <div className="text-[11px] font-semibold text-slate-700 mt-0.5">
                                        {c.impact}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Transition Statement Banner */}
                <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white shadow-xl border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="space-y-2 text-center md:text-left max-w-3xl">
                        <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-emerald-400 uppercase">
                            <CheckCircle2 className="w-4 h-4" />
                            <span>The ProfitMachines Revenue Architecture</span>
                        </div>
                        <p className="text-base sm:text-lg text-slate-100 font-medium leading-relaxed">
                            ProfitMachines connects these challenges into a coordinated approach to discovering opportunities, generating demand, improving sales execution, and measuring growth.
                        </p>
                    </div>

                    <a 
                        href="#all-offerings"
                        className="shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm shadow-md transition-all hover:gap-3"
                    >
                        <span>See The Solution</span>
                        <ArrowRight className="w-4 h-4" />
                    </a>
                </div>

            </div>
        </section>
    );
}

