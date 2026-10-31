import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
    ArrowRight, 
    Calendar, 
    Radar, 
    Target, 
    Bot, 
    LineChart, 
    Layers, 
    Activity, 
    ShieldCheck, 
    CheckCircle2, 
    Sparkles, 
    TrendingUp, 
    Database, 
    Cpu, 
    BarChart3,
    ArrowUpRight
} from 'lucide-react';
import { motion } from 'framer-motion';
import { trackEvent } from '../../../lib/analytics';

export default function HomeHero() {
    const [activePillar, setActivePillar] = useState<number>(0);

    const pillars = [
        {
            title: "Market Discovery",
            metric: "+32% TAM",
            detail: "Dark-funnel intent & whitespace capture",
            icon: Radar,
            color: "text-blue-600 bg-blue-50 border-blue-200"
        },
        {
            title: "Demand Engineering",
            metric: "3.4x Pipeline",
            detail: "Autonomous ICP prioritization",
            icon: Target,
            color: "text-indigo-600 bg-indigo-50 border-indigo-200"
        },
        {
            title: "Sales Acceleration",
            metric: "-42% Cycle",
            detail: "Live deal intelligence & execution",
            icon: Bot,
            color: "text-emerald-600 bg-emerald-50 border-emerald-200"
        },
        {
            title: "RevOps & Telemetry",
            metric: "98% Accuracy",
            detail: "Unified forecasting & data pipelines",
            icon: LineChart,
            color: "text-amber-600 bg-amber-50 border-amber-200"
        }
    ];

    return (
        <section className="relative pt-12 pb-20 md:pt-16 md:pb-28 bg-gradient-to-b from-slate-50 via-white to-slate-50 border-b border-slate-200/80 overflow-hidden">
            {/* Ambient Background Grid & Subtle Glows */}
            <div className="absolute inset-0 bg-grid-slate-100 opacity-60 pointer-events-none" />
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute top-20 right-10 w-96 h-96 bg-emerald-500/5 blur-[100px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                    
                    {/* Left Column: Core Positioning Copy & CTAs */}
                    <div className="lg:col-span-7 space-y-6 text-left">
                        
                        {/* Eyebrow Badge */}
                        <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 shadow-xs">
                            <span className="flex h-2 w-2 rounded-full bg-blue-600 animate-pulse" />
                            <span className="text-xs font-bold text-blue-900 tracking-wider uppercase font-mono">
                                AI-NATIVE REVENUE TRANSFORMATION
                            </span>
                        </div>

                        {/* Primary Headline */}
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.12]">
                            Turn Revenue Opportunities Into{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-emerald-600">
                                Measurable Business Growth.
                            </span>
                        </h1>

                        {/* Supporting Message */}
                        <p className="text-lg sm:text-xl text-slate-600 font-normal leading-relaxed max-w-2xl">
                            ProfitMachines helps businesses identify profitable opportunities, generate qualified demand, accelerate sales, and optimize revenue operations through connected intelligence, AI, and automation.
                        </p>

                        {/* CTAs */}
                        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                            <Link 
                                to="/offerings"
                                onClick={() => trackEvent({ eventName: 'HERO_EXPLORE_OFFERINGS_CLICK' })}
                                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-base shadow-lg shadow-blue-600/25 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 text-center"
                            >
                                <span>Explore Our Offerings</span>
                                <ArrowRight className="w-4 h-4" />
                            </Link>

                            <Link 
                                to="/book-consultation"
                                onClick={() => trackEvent({ eventName: 'HERO_BOOK_CONSULTATION_CLICK' })}
                                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-800 font-bold text-base border border-slate-300 shadow-sm transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 text-center"
                            >
                                <Calendar className="w-4 h-4 text-blue-600" />
                                <span>Book a Consultation</span>
                            </Link>
                        </div>

                        {/* Key Trust Checkpoints */}
                        <div className="pt-6 border-t border-slate-200/80 grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs font-semibold text-slate-600">
                            <div className="flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                                <span>Connected Intelligence</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                                <span>Continuous Telemetry</span>
                            </div>
                            <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                                <ShieldCheck className="w-4 h-4 text-indigo-600 shrink-0" />
                                <span>Enterprise Governance</span>
                            </div>
                        </div>

                    </div>

                    {/* Right Column: Interactive Connected Revenue Architecture Visual */}
                    <div className="lg:col-span-5">
                        <div className="relative rounded-2xl bg-white border border-slate-200 shadow-xl overflow-hidden">
                            
                            {/* Window Topbar */}
                            <div className="px-5 py-3.5 bg-slate-900 border-b border-slate-800 flex items-center justify-between text-white">
                                <div className="flex items-center gap-2">
                                    <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                                    <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                                    <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                                    <span className="ml-2 text-xs font-mono font-medium text-slate-400">
                                        ProfitMachines Connected Revenue System
                                    </span>
                                </div>
                                <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 text-[11px] font-bold font-mono">
                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                                    <span>LIVE</span>
                                </div>
                            </div>

                            {/* System Flow Diagram Body */}
                            <div className="p-5 sm:p-6 space-y-4 bg-slate-50/50">
                                
                                {/* Status Banner */}
                                <div className="flex items-center justify-between p-3 rounded-xl bg-white border border-slate-200/80 shadow-xs">
                                    <div>
                                        <div className="text-[11px] font-bold text-slate-400 uppercase font-mono tracking-wider">
                                            Revenue Operating Model
                                        </div>
                                        <div className="text-sm font-extrabold text-slate-900">
                                            Synchronized Demand-to-Retention Mesh
                                        </div>
                                    </div>
                                    <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-lg border border-emerald-200">
                                        Sub-second Sync
                                    </span>
                                </div>

                                {/* Connected 4-Stage Operational Stack */}
                                <div className="grid grid-cols-1 gap-2.5">
                                    {pillars.map((pillar, idx) => {
                                        const Icon = pillar.icon;
                                        const isActive = activePillar === idx;
                                        return (
                                            <button
                                                key={idx}
                                                onClick={() => setActivePillar(idx)}
                                                className={`w-full text-left p-3.5 rounded-xl border transition-all duration-200 cursor-pointer flex items-center justify-between ${
                                                    isActive 
                                                        ? 'bg-white border-blue-500 shadow-md ring-1 ring-blue-500' 
                                                        : 'bg-white/80 border-slate-200 hover:border-slate-300 hover:bg-white'
                                                }`}
                                            >
                                                <div className="flex items-center gap-3">
                                                    <div className={`p-2 rounded-lg border ${pillar.color}`}>
                                                        <Icon className="w-4 h-4" />
                                                    </div>
                                                    <div>
                                                        <div className="text-xs font-bold text-slate-900">
                                                            {idx + 1}. {pillar.title}
                                                        </div>
                                                        <div className="text-[11px] text-slate-500">
                                                            {pillar.detail}
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="text-right">
                                                    <span className="text-xs font-black text-slate-900 font-mono">
                                                        {pillar.metric}
                                                    </span>
                                                </div>
                                            </button>
                                        );
                                    })}
                                </div>

                                {/* Dynamic Pipeline Telemetry Card */}
                                <div className="p-4 rounded-xl bg-slate-900 text-white space-y-3">
                                    <div className="flex items-center justify-between text-xs">
                                        <span className="font-mono text-slate-400">TELEMETRY STREAM</span>
                                        <span className="text-blue-400 font-mono text-[11px]">SIGNAL VERIFIED</span>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <div className="text-xl font-black text-white font-mono">$14.2M</div>
                                            <div className="text-[11px] text-slate-400">Active High-Fit Pipeline</div>
                                        </div>
                                        <div className="h-8 w-px bg-slate-800" />
                                        <div>
                                            <div className="text-xl font-black text-emerald-400 font-mono">+28.4%</div>
                                            <div className="text-[11px] text-slate-400">Net Conversion Lift</div>
                                        </div>
                                        <div className="h-8 w-px bg-slate-800" />
                                        <div>
                                            <div className="text-xl font-black text-indigo-400 font-mono">99.4%</div>
                                            <div className="text-[11px] text-slate-400">Model Precision</div>
                                        </div>
                                    </div>
                                    <div className="text-[10px] text-slate-400 font-mono text-center pt-1 border-t border-slate-800">
                                        Enterprise Intelligence Connected to Live CRM &amp; Data Infrastructure
                                    </div>
                                </div>

                            </div>

                            {/* Sub-card Footer Link */}
                            <div className="px-5 py-3 bg-white border-t border-slate-100 flex items-center justify-between">
                                <span className="text-xs text-slate-500 font-medium">
                                    Exploration Mode: {pillars[activePillar].title}
                                </span>
                                <Link 
                                    to="/offerings" 
                                    className="text-xs font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1"
                                >
                                    <span>Learn how it connects</span>
                                    <ArrowUpRight className="w-3.5 h-3.5" />
                                </Link>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

