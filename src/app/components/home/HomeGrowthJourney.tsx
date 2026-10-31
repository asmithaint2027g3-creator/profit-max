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
    Repeat
} from 'lucide-react';
import { motion } from 'framer-motion';

export default function HomeGrowthJourney() {
    const [activeStage, setActiveStage] = useState<number>(0);

    const stages = [
        {
            phase: '01',
            label: 'Discover',
            title: 'Market Discovery & Opportunity Audit',
            icon: Search,
            desc: 'Identify promising markets, customer segments, dark-funnel buying signals, and high-potential revenue opportunities.',
            deliverable: 'Target Opportunity Scorecard & Segment Whitespace Map',
            cadence: 'Stage 01'
        },
        {
            phase: '02',
            label: 'Attract',
            title: 'Demand Generation & Audience Targeting',
            icon: Sparkles,
            desc: 'Reach relevant buyer audiences, coordinate multi-touch marketing campaigns, and generate sustained qualified demand.',
            deliverable: 'Campaign Targeting Matrix & Inbound Pipeline Flow',
            cadence: 'Stage 02'
        },
        {
            phase: '03',
            label: 'Qualify',
            title: 'Lead Prioritization & Account Scoring',
            icon: Filter,
            desc: 'Identify and prioritize high-fit leads using verified commercial propensity criteria so sales teams focus on real opportunities.',
            deliverable: 'ICP Propensity Model & Lead Qualification Rubric',
            cadence: 'Stage 03'
        },
        {
            phase: '04',
            label: 'Convert',
            title: 'Informed Sales Execution & Deal Guidance',
            icon: CheckCircle2,
            desc: 'Support informed sales execution, buyer committee alignment, and deal progression through real-time account dossiers.',
            deliverable: 'Deal Progression Playbook & Stakeholder Briefings',
            cadence: 'Stage 04'
        },
        {
            phase: '05',
            label: 'Optimize',
            title: 'Revenue Operations & Systems Coordination',
            icon: Cpu,
            desc: 'Improve revenue workflows, CRM data visibility, and cross-functional handoffs between marketing, sales, and operations.',
            deliverable: 'Unified RevOps Architecture & Data Sync Pipelines',
            cadence: 'Stage 05'
        },
        {
            phase: '06',
            label: 'Expand',
            title: 'Customer Adoption & Net Retention',
            icon: TrendingUp,
            desc: 'Strengthen customer onboarding, track adoption health, safeguard renewals, and discover account expansion opportunities.',
            deliverable: 'Customer Health Framework & Expansion Triggers',
            cadence: 'Stage 06'
        },
        {
            phase: '07',
            label: 'Learn & Improve',
            title: 'Continuous Strategy Refinement',
            icon: RefreshCw,
            desc: 'Use closed-loop performance insights from commercial outcomes to refine targeting, processes, and investment priorities.',
            deliverable: 'Closed-Loop Feedback Mesh & Refinement Cadence',
            cadence: 'Stage 07'
        }
    ];

    return (
        <section className="py-20 md:py-28 bg-white relative overflow-hidden border-b border-slate-200" id="growth-journey">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
                    <div className="inline-flex items-center justify-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 text-blue-700 font-bold text-xs uppercase tracking-wider mb-4 border border-blue-100 shadow-xs">
                        <Repeat className="w-3.5 h-3.5 text-blue-600" />
                        <span>Closed-Loop Operational Architecture</span>
                    </div>

                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight font-heading">
                        One Connected Journey From <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">Market Opportunity to Customer Growth.</span>
                    </h2>

                    <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed max-w-2xl mx-auto">
                        Sustainable revenue expansion connects discovery, demand, execution, and retention into an iterative growth cycle where every stage reinforces the next.
                    </p>
                </div>

                {/* Horizontal Step Navigation Bar (Like Image 4) */}
                <div className="hidden lg:grid grid-cols-7 gap-2.5 mb-16 max-w-6xl mx-auto">
                    {stages.map((step, idx) => {
                        const Icon = step.icon;
                        const isActive = activeStage === idx;
                        return (
                            <button
                                key={step.phase}
                                onClick={() => setActiveStage(idx)}
                                className={`p-3.5 rounded-2xl text-left transition-all duration-200 border cursor-pointer ${
                                    isActive 
                                        ? 'bg-slate-900 border-slate-900 text-white shadow-xl -translate-y-1' 
                                        : 'bg-white border-slate-200 text-slate-700 hover:border-slate-300 hover:bg-slate-50'
                                }`}
                            >
                                <div className="flex items-center justify-between mb-2">
                                    <span className={`text-xs font-mono font-bold ${isActive ? 'text-blue-400' : 'text-slate-400'}`}>
                                        {step.phase}
                                    </span>
                                    <Icon className={`w-4 h-4 ${isActive ? 'text-blue-400' : 'text-slate-400'}`} />
                                </div>
                                <div className="font-bold text-xs truncate">
                                    {step.label}
                                </div>
                                <div className={`text-[10px] mt-0.5 ${isActive ? 'text-slate-300' : 'text-slate-500'}`}>
                                    {step.cadence}
                                </div>
                            </button>
                        );
                    })}
                </div>

                {/* Connected Vertical Timeline (Like Image 4) */}
                <div className="relative max-w-4xl mx-auto">
                    {/* Central Vertical Connecting Line */}
                    <div className="absolute top-0 bottom-0 left-6 sm:left-8 md:left-1/2 w-0.5 bg-gradient-to-b from-blue-500 via-indigo-500 to-purple-500 -translate-x-1/2 opacity-30" />
                    
                    <div className="space-y-10 sm:space-y-14">
                        {stages.map((step, index) => {
                            const Icon = step.icon;
                            return (
                                <div
                                    key={step.phase}
                                    className={`relative flex items-center gap-8 md:gap-14 group ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                                >
                                    {/* Center Node Indicator */}
                                    <div className="absolute left-6 sm:left-8 md:left-1/2 w-6 h-6 rounded-full bg-white border-4 border-blue-600 -translate-x-1/2 group-hover:scale-125 group-hover:border-indigo-600 transition-all duration-300 z-10 shadow-md shadow-blue-600/30 flex items-center justify-center">
                                        <div className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                                    </div>

                                    {/* Content Card (Identical Structure to Image 4) */}
                                    <div className={`flex-1 pl-12 sm:pl-14 md:pl-0 ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                                        <div className={`flex flex-col bg-slate-50/90 hover:bg-white p-7 sm:p-8 rounded-2xl border border-slate-200/90 shadow-xs hover:shadow-2xl hover:shadow-blue-600/10 hover:border-blue-400 transition-all duration-300 ${index % 2 === 0 ? 'md:items-start' : 'md:items-end'} text-left md:text-inherit`}>
                                            
                                            {/* Phase Tag & Timeline Pill */}
                                            <div className="flex items-center gap-3 mb-4">
                                                <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-xs">
                                                    <Icon className="w-5 h-5" />
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <span className="text-xs font-mono font-bold text-blue-600 uppercase tracking-wider bg-blue-50/80 px-2.5 py-1 rounded-md border border-blue-100">
                                                        Phase {step.phase} // {step.label}
                                                    </span>
                                                    <span className="text-[11px] text-slate-400 font-mono hidden sm:inline">
                                                        ({step.cadence})
                                                    </span>
                                                </div>
                                            </div>

                                            <h4 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2 font-heading">
                                                {step.title}
                                            </h4>

                                            <p className="text-sm text-slate-600 leading-relaxed mb-4 font-normal">
                                                {step.desc}
                                            </p>

                                            <div className="pt-3 border-t border-slate-200/60 w-full flex items-center gap-2 text-xs font-semibold text-slate-700">
                                                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                                                <span><strong className="text-slate-900">Key Deliverable:</strong> {step.deliverable}</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Empty flex spacer for balanced alternate alignment */}
                                    <div className="hidden md:block flex-1" />
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Bottom Loop Refinement Notice */}
                <div className="mt-14 max-w-2xl mx-auto p-4 rounded-xl bg-slate-50 border border-slate-200 text-center text-xs text-slate-600 flex items-center justify-center gap-2 font-mono">
                    <RefreshCw className="w-4 h-4 text-emerald-600 animate-spin" style={{ animationDuration: '8s' }} />
                    <span className="font-bold text-slate-900">Closed-Loop Learning:</span>
                    <span>Outcomes from Phase 07 refine Phase 01 targeting for the next revenue cycle.</span>
                </div>

            </div>
        </section>
    );
}
