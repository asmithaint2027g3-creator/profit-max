import React, { useState } from 'react';
import { 
    Search, 
    Sparkles, 
    Filter, 
    CheckCircle2, 
    Cpu, 
    TrendingUp, 
    RefreshCw, 
    ArrowRight,
    ArrowDown,
    Zap,
    Repeat
} from 'lucide-react';

export default function HomeGrowthJourney() {
    const [selectedStage, setSelectedStage] = useState<number>(0);

    const stages = [
        {
            name: "Discover",
            shortDesc: "Identify promising markets, segments, and growth opportunities.",
            fullDesc: "Continuous market discovery reveals hidden profit pools, dark-funnel buying signals, and underserved customer segments where competitive friction is lowest.",
            deliverable: "Target Opportunity Scorecard & Segment Whitespace Map",
            icon: Search,
            badge: "Stage 01",
            color: "text-blue-600 bg-blue-50 border-blue-200"
        },
        {
            name: "Attract",
            shortDesc: "Reach relevant audiences and generate demand.",
            fullDesc: "Coordinate demand-generation campaigns and automated positioning to capture high-intent prospect attention across primary digital and industry touchpoints.",
            deliverable: "Proprietary Demand Mesh & Intent Ingestion",
            icon: Sparkles,
            badge: "Stage 02",
            color: "text-indigo-600 bg-indigo-50 border-indigo-200"
        },
        {
            name: "Qualify",
            shortDesc: "Identify and prioritize suitable leads and opportunities.",
            fullDesc: "Filter high-fit accounts using verified commercial propensity criteria, ensuring sales energy is concentrated exclusively on deals with high win probability.",
            deliverable: "Autonomous Lead Scoring & ICP Propensity Index",
            icon: Filter,
            badge: "Stage 03",
            color: "text-purple-600 bg-purple-50 border-purple-200"
        },
        {
            name: "Convert",
            shortDesc: "Support informed sales execution and deal progression.",
            fullDesc: "Arm revenue teams with real-time account dossiers, deal-stage guidance, and friction-reducing engagement workflows to shorten cycles and lift win rates.",
            deliverable: "Deal Execution Playbooks & Opportunity Telemetry",
            icon: CheckCircle2,
            badge: "Stage 04",
            color: "text-emerald-600 bg-emerald-50 border-emerald-200"
        },
        {
            name: "Optimize",
            shortDesc: "Improve revenue workflows, data visibility, and operating efficiency.",
            fullDesc: "Connect CRM, billing, and operational data into a single source of truth, removing process bottlenecks and manual reporting drag.",
            deliverable: "Unified RevOps Engine & Telemetry Pipelines",
            icon: Cpu,
            badge: "Stage 05",
            color: "text-blue-600 bg-blue-50 border-blue-200"
        },
        {
            name: "Expand",
            shortDesc: "Strengthen customer adoption, retention, renewals, and growth.",
            fullDesc: "Monitor product adoption and cohort health to proactively safeguard renewals, eliminate churn risk, and trigger timely expansion conversations.",
            deliverable: "Customer Health Index & Expansion Triggers",
            icon: TrendingUp,
            badge: "Stage 06",
            color: "text-emerald-600 bg-emerald-50 border-emerald-200"
        },
        {
            name: "Learn and Improve",
            shortDesc: "Use performance insights to refine targeting, processes, and investment priorities.",
            fullDesc: "Feed win/loss analysis and unit-economics data back into the discovery engine, making every subsequent revenue cycle faster and more profitable.",
            deliverable: "Closed-Loop Growth Telemetry & Feedback Mesh",
            icon: RefreshCw,
            badge: "Stage 07",
            color: "text-amber-600 bg-amber-50 border-amber-200"
        }
    ];

    return (
        <section className="py-20 md:py-28 bg-white border-b border-slate-200/80 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Header */}
                <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-bold text-emerald-800 uppercase font-mono">
                        <Repeat className="w-3.5 h-3.5 text-emerald-600" />
                        <span>Closed-Loop Operational Architecture</span>
                    </div>

                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
                        One Connected Journey From Market Opportunity to Customer Growth.
                    </h2>

                    <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
                        Sustainable revenue expansion is not a disjointed funnel. ProfitMachines connects discovery, demand, execution, and retention into an iterative growth cycle where every stage reinforces the next.
                    </p>
                </div>

                {/* Desktop & Tablet: Horizontal Connected Flow with Visual Arrows */}
                <div className="hidden lg:block mb-12">
                    <div className="relative p-6 rounded-3xl bg-slate-50 border border-slate-200">
                        
                        {/* Connecting track line */}
                        <div className="absolute top-[52px] left-12 right-12 h-1 bg-gradient-to-r from-blue-300 via-indigo-300 to-amber-300 z-0" />

                        <div className="grid grid-cols-7 gap-3 relative z-10">
                            {stages.map((stage, idx) => {
                                const Icon = stage.icon;
                                const isSelected = selectedStage === idx;
                                return (
                                    <button
                                        key={idx}
                                        onClick={() => setSelectedStage(idx)}
                                        className={`p-4 rounded-2xl text-left transition-all duration-200 cursor-pointer flex flex-col justify-between ${
                                            isSelected
                                                ? 'bg-white border-2 border-blue-600 shadow-xl -translate-y-1'
                                                : 'bg-white/80 border border-slate-200/80 hover:bg-white hover:border-slate-300'
                                        }`}
                                    >
                                        <div>
                                            <div className="flex items-center justify-between mb-3">
                                                <div className={`p-2 rounded-xl border ${stage.color}`}>
                                                    <Icon className="w-4 h-4" />
                                                </div>
                                                <span className="text-[10px] font-mono font-bold text-slate-400">
                                                    0{idx + 1}
                                                </span>
                                            </div>

                                            <h3 className="text-sm font-extrabold text-slate-900 mb-1">
                                                {stage.name}
                                            </h3>

                                            <p className="text-[11px] text-slate-600 leading-snug line-clamp-3">
                                                {stage.shortDesc}
                                            </p>
                                        </div>

                                        <div className="mt-3 pt-2 border-t border-slate-100 flex items-center justify-between">
                                            <span className="text-[10px] font-mono text-blue-600 font-bold">
                                                {isSelected ? 'Active' : 'Inspect'}
                                            </span>
                                            <ArrowRight className="w-3 h-3 text-slate-400" />
                                        </div>
                                    </button>
                                );
                            })}
                        </div>

                        {/* Closed-loop return banner on bottom */}
                        <div className="mt-6 pt-4 border-t border-slate-200 flex items-center justify-between text-xs text-slate-600 font-mono">
                            <div className="flex items-center gap-2">
                                <RefreshCw className="w-4 h-4 text-emerald-600 animate-spin" style={{ animationDuration: '8s' }} />
                                <span className="font-bold text-slate-900">Continuous Learning Loop:</span>
                                <span>Performance intelligence from Stage 7 feeds directly back to refine Stage 1 targeting.</span>
                            </div>
                            <span className="text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded font-bold">
                                Non-Linear Architecture
                            </span>
                        </div>

                    </div>
                </div>

                {/* Mobile & Tablet: Interactive Stack & Accordion View */}
                <div className="lg:hidden space-y-3 mb-10">
                    {stages.map((stage, idx) => {
                        const Icon = stage.icon;
                        const isSelected = selectedStage === idx;
                        return (
                            <div
                                key={idx}
                                onClick={() => setSelectedStage(idx)}
                                className={`p-4 rounded-xl border transition-all cursor-pointer ${
                                    isSelected 
                                        ? 'bg-blue-50/50 border-blue-500 shadow-md' 
                                        : 'bg-slate-50 border-slate-200 hover:bg-white'
                                }`}
                            >
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <div className={`p-2 rounded-lg border ${stage.color}`}>
                                            <Icon className="w-4 h-4" />
                                        </div>
                                        <div>
                                            <div className="text-xs font-mono font-bold text-blue-600">
                                                Stage 0{idx + 1}
                                            </div>
                                            <div className="text-sm font-bold text-slate-900">
                                                {stage.name}
                                            </div>
                                        </div>
                                    </div>
                                    <span className="text-xs font-bold text-slate-400">
                                        {isSelected ? '−' : '+'}
                                    </span>
                                </div>
                                
                                {isSelected && (
                                    <div className="mt-3 pt-3 border-t border-slate-200 text-xs text-slate-600 space-y-2">
                                        <p>{stage.fullDesc}</p>
                                        <div className="p-2 rounded bg-white border border-slate-200 font-mono text-[11px] text-slate-700">
                                            <span className="font-bold text-slate-900">Key Deliverable: </span>
                                            {stage.deliverable}
                                        </div>
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>

                {/* Detailed Stage Deep-Dive Card (Synced with active selection) */}
                <div className="p-6 sm:p-8 rounded-2xl bg-slate-900 text-white shadow-xl border border-slate-800">
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                        <div className="md:col-span-8 space-y-2">
                            <div className="flex items-center gap-2">
                                <span className="text-xs font-mono font-bold text-blue-400 uppercase">
                                    {stages[selectedStage].badge} DEEP DIVE
                                </span>
                                <span className="text-slate-600">•</span>
                                <span className="text-xs font-mono text-emerald-400">
                                    SYSTEM SYNCHRONIZED
                                </span>
                            </div>
                            <h3 className="text-xl sm:text-2xl font-bold text-white">
                                {stages[selectedStage].name}: {stages[selectedStage].shortDesc}
                            </h3>
                            <p className="text-sm text-slate-300 leading-relaxed font-normal">
                                {stages[selectedStage].fullDesc}
                            </p>
                        </div>
                        <div className="md:col-span-4 p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                            <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">
                                Operational Deliverable
                            </div>
                            <div className="text-xs font-semibold text-emerald-300">
                                {stages[selectedStage].deliverable}
                            </div>
                            <div className="text-[10px] text-slate-500 pt-2 border-t border-slate-800">
                                Validated against enterprise RevOps telemetry
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}

