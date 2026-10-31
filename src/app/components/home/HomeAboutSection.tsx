import React from 'react';
import { Link } from 'react-router-dom';
import { 
    Layers, 
    CheckCircle2, 
    ArrowRight, 
    ShieldCheck, 
    Bot, 
    Activity, 
    Target, 
    LineChart,
    Building2,
    Users,
    Compass,
    Workflow,
    Cpu,
    TrendingUp
} from 'lucide-react';
import { trackEvent } from '../../../lib/analytics';

export default function HomeAboutSection() {
    const connectedCapabilities = [
        {
            title: "Business Objectives",
            desc: "Anchor growth priorities, commercial margin targets, and strategic focus on validated market realities.",
            icon: Target
        },
        {
            title: "Customer Targeting",
            desc: "Isolate high-propensity segments and target accounts with clear commercial demand signals.",
            icon: Compass
        },
        {
            title: "Demand Generation",
            desc: "Build repeatable inbound interest and qualified pipeline flow through coordinated campaigns.",
            icon: Workflow
        },
        {
            title: "Sales Execution",
            desc: "Equip revenue teams with account dossiers, deal guidance, and streamlined engagement workflows.",
            icon: Bot
        },
        {
            title: "Revenue Operations",
            desc: "Connect CRM, data lakes, and reporting pipelines to eliminate silos and manual administrative drag.",
            icon: LineChart
        },
        {
            title: "Customer Growth",
            desc: "Monitor adoption health and usage milestones to support retention and discover expansion opportunities.",
            icon: TrendingUp
        },
        {
            title: "Appropriate AI & Automation",
            desc: "Deploy supervised AI assistants with human-in-the-loop oversight to automate repetitive tasks safely.",
            icon: ShieldCheck
        }
    ];

    return (
        <section className="py-20 md:py-28 bg-slate-50 border-b border-slate-200/80">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Header */}
                <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-bold text-blue-700 uppercase font-mono">
                        <Building2 className="w-3.5 h-3.5" />
                        <span>The ProfitMachines Operating Philosophy</span>
                    </div>

                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
                        A Connected Approach to Revenue Transformation.
                    </h2>

                    <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
                        ProfitMachines connects business objectives, customer targeting, demand generation, sales execution, revenue operations, customer growth, and appropriate AI and automation into one cohesive operating system.
                    </p>
                </div>

                {/* Two-Column Composition: Left Model Stack + Right Connected System Visual */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-12">
                    
                    {/* Left: Connected Capabilities List */}
                    <div className="lg:col-span-6 space-y-3">
                        {connectedCapabilities.map((p, idx) => {
                            const Icon = p.icon;
                            return (
                                <div 
                                    key={idx}
                                    className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-xs flex items-start gap-3.5"
                                >
                                    <div className="p-2 rounded-lg bg-blue-50 border border-blue-100 text-blue-600 shrink-0 mt-0.5">
                                        <Icon className="w-4 h-4" />
                                    </div>
                                    <div>
                                        <h3 className="text-xs font-bold text-slate-900 mb-0.5">
                                            {idx + 1}. {p.title}
                                        </h3>
                                        <p className="text-[11px] text-slate-600 leading-relaxed">
                                            {p.desc}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Right: Layered Revenue Operating Model Graphic (Clean Architecture, No Faces) */}
                    <div className="lg:col-span-6">
                        <div className="rounded-2xl bg-slate-900 text-white p-6 sm:p-8 border border-slate-800 shadow-xl space-y-6">
                            
                            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                                <div className="space-y-0.5">
                                    <span className="text-[10px] font-mono text-blue-400 uppercase tracking-wider">
                                        CONNECTED ARCHITECTURE
                                    </span>
                                    <h4 className="text-base font-bold text-white">
                                        Revenue Operating System
                                    </h4>
                                </div>
                                <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded border border-emerald-500/20">
                                    COORDINATED
                                </span>
                            </div>

                            {/* 3 Layer Stack Visual */}
                            <div className="space-y-3 font-mono text-xs">
                                
                                {/* Layer 1: Strategic Layer */}
                                <div className="p-3.5 rounded-xl bg-slate-800/80 border border-slate-700/80 space-y-1">
                                    <div className="flex justify-between text-blue-400 text-[11px] font-bold">
                                        <span>LAYER 01: COMMERCIAL STRATEGY</span>
                                        <span>OBJECTIVES</span>
                                    </div>
                                    <div className="text-[11px] text-slate-300">
                                        Market Whitespace &bull; Target Account Profiles &bull; Commercial Priorities
                                    </div>
                                </div>

                                {/* Connecting Line */}
                                <div className="flex justify-center -my-1 text-slate-600">
                                    <span>&darr;</span>
                                </div>

                                {/* Layer 2: Execution Engine */}
                                <div className="p-3.5 rounded-xl bg-slate-800/80 border border-blue-500/50 space-y-1">
                                    <div className="flex justify-between text-emerald-400 text-[11px] font-bold">
                                        <span>LAYER 02: EXECUTION &amp; PIPELINE</span>
                                        <span>COORDINATED WORKFLOWS</span>
                                    </div>
                                    <div className="text-[11px] text-slate-300">
                                        Demand Generation &bull; Sales Engagement &bull; Opportunity Progression
                                    </div>
                                </div>

                                {/* Connecting Line */}
                                <div className="flex justify-center -my-1 text-slate-600">
                                    <span>&darr;</span>
                                </div>

                                {/* Layer 3: Data & Governance */}
                                <div className="p-3.5 rounded-xl bg-slate-800/80 border border-slate-700/80 space-y-1">
                                    <div className="flex justify-between text-indigo-400 text-[11px] font-bold">
                                        <span>LAYER 03: REVOPS &amp; CUSTOMER RETENTION</span>
                                        <span>ZERO SILOS</span>
                                    </div>
                                    <div className="text-[11px] text-slate-300">
                                        CRM Synchronization &bull; Adoption Monitoring &bull; Supervised AI Controls
                                    </div>
                                </div>

                            </div>

                            {/* Guardrails Strip */}
                            <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                                <div className="flex items-center gap-1.5">
                                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                                    <span>Human Oversight Guardrails</span>
                                </div>
                                <span>Zero-Data Leakage Architecture</span>
                            </div>

                        </div>
                    </div>

                </div>

                {/* Section Bottom CTA */}
                <div className="text-center">
                    <Link
                        to="/about"
                        onClick={() => trackEvent({ eventName: 'ABOUT_COMPANY_CLICK' })}
                        className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-slate-900 hover:bg-blue-600 text-white font-bold text-sm shadow-md transition-all hover:gap-3"
                    >
                        <span>About ProfitMachines</span>
                        <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>

            </div>
        </section>
    );
}
