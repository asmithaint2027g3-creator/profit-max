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
    Users
} from 'lucide-react';
import { trackEvent } from '../../../lib/analytics';

export default function HomeAboutSection() {
    const operatingPillars = [
        {
            title: "Business Objectives",
            desc: "Align executive growth priorities, commercial margin targets, and resource allocation with market realities.",
            icon: Target
        },
        {
            title: "Relevant Growth Capabilities",
            desc: "Deploy modular intelligence blocks tailored to business model needs rather than monolithic tech stacks.",
            icon: Layers
        },
        {
            title: "Connected Processes & Data",
            desc: "Bridge silos between marketing intent, CRM pipelines, and customer success data lakes into a single source of truth.",
            icon: LineChart
        },
        {
            title: "Practical AI & Automation",
            desc: "Automate repetitive administrative drag with supervised AI agents while preserving human executive judgment.",
            icon: Bot
        },
        {
            title: "Performance Telemetry",
            desc: "Continuously measure conversion velocity, forecast precision, and unit economics with real-time feedback loops.",
            icon: Activity
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
                        ProfitMachines brings business priorities, customer targeting, demand generation, sales execution, revenue operations, customer growth, and appropriate AI adoption into a coordinated approach.
                    </p>
                </div>

                {/* Two-Column Composition: Left Model Stack + Right Connected System Visual */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-12">
                    
                    {/* Left: 5 Pillars List */}
                    <div className="lg:col-span-6 space-y-4">
                        {operatingPillars.map((p, idx) => {
                            const Icon = p.icon;
                            return (
                                <div 
                                    key={idx}
                                    className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs flex items-start gap-3.5"
                                >
                                    <div className="p-2 rounded-lg bg-blue-50 border border-blue-100 text-blue-600 shrink-0 mt-0.5">
                                        <Icon className="w-4 h-4" />
                                    </div>
                                    <div>
                                        <h3 className="text-sm font-bold text-slate-900 mb-0.5">
                                            {idx + 1}. {p.title}
                                        </h3>
                                        <p className="text-xs text-slate-600 leading-relaxed">
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
                                        ARCHITECTURE SPECIFICATION
                                    </span>
                                    <h4 className="text-base font-bold text-white">
                                        Unified Revenue Operating System
                                    </h4>
                                </div>
                                <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded border border-emerald-500/20">
                                    SYNCHRONIZED
                                </span>
                            </div>

                            {/* 3 Layer Stack Visual */}
                            <div className="space-y-3 font-mono text-xs">
                                
                                {/* Layer 1: Strategic Layer */}
                                <div className="p-3.5 rounded-xl bg-slate-800/80 border border-slate-700/80 space-y-1">
                                    <div className="flex justify-between text-blue-400 text-[11px] font-bold">
                                        <span>LAYER 01: STRATEGIC INTENT</span>
                                        <span>EXECUTIVE LEVEL</span>
                                    </div>
                                    <div className="text-[11px] text-slate-300">
                                        TAM Discovery &bull; Pricing Architecture &bull; ICP Propensity Mapping
                                    </div>
                                </div>

                                {/* Connecting Line */}
                                <div className="flex justify-center -my-1 text-slate-600">
                                    <span>&darr;</span>
                                </div>

                                {/* Layer 2: Execution Engine */}
                                <div className="p-3.5 rounded-xl bg-slate-800/80 border border-blue-500/50 space-y-1">
                                    <div className="flex justify-between text-emerald-400 text-[11px] font-bold">
                                        <span>LAYER 02: AUTONOMOUS EXECUTION MESH</span>
                                        <span>REVENUE PIPELINE</span>
                                    </div>
                                    <div className="text-[11px] text-slate-300">
                                        Intent Prospecting &bull; Deal Briefing &bull; Coordinated Rep Workflows
                                    </div>
                                </div>

                                {/* Connecting Line */}
                                <div className="flex justify-center -my-1 text-slate-600">
                                    <span>&darr;</span>
                                </div>

                                {/* Layer 3: Data & Governance */}
                                <div className="p-3.5 rounded-xl bg-slate-800/80 border border-slate-700/80 space-y-1">
                                    <div className="flex justify-between text-indigo-400 text-[11px] font-bold">
                                        <span>LAYER 03: TELEMETRY &amp; GOVERNANCE</span>
                                        <span>ZERO-DATA SILOS</span>
                                    </div>
                                    <div className="text-[11px] text-slate-300">
                                        Executive Forecasting &bull; Customer Telemetry &bull; Closed-Loop Feedback
                                    </div>
                                </div>

                            </div>

                            {/* Compliance Badges */}
                            <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                                <div className="flex items-center gap-1.5">
                                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                                    <span>SOC2 Type II Standard</span>
                                </div>
                                <span>Zero-Leakage Architecture</span>
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

