import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
    BrainCircuit, 
    Target, 
    Bot, 
    LineChart, 
    Cpu, 
    Users, 
    ArrowRight,
    ArrowUpRight,
    CheckCircle2,
    ShieldCheck,
    Radar,
    Activity,
    Layers,
    FileText,
    Workflow,
    Sliders
} from 'lucide-react';
import { trackEvent } from '../../../lib/analytics';

export default function HomeAiSalesSection() {
    const [activeCapability, setActiveCapability] = useState<number>(0);

    const capabilities = [
        {
            title: "Revenue Intelligence",
            path: "/ai-native-sales/revenue-intelligence",
            description: "Aggregate cross-funnel customer signals and opportunity indicators to evaluate deal health and guide revenue forecasting.",
            badge: "Opportunity Context",
            icon: BrainCircuit,
            focus: "Deal Health & Opportunity Signals"
        },
        {
            title: "Prospecting & Pipeline Generation",
            path: "/ai-native-sales/prospecting",
            description: "Coordinate account identification, buying intent ingestion, and multichannel outreach to maintain a continuous flow of qualified pipeline.",
            badge: "Account Targeting",
            icon: Target,
            focus: "Ideal Customer Identification"
        },
        {
            title: "Sales Execution",
            path: "/ai-native-sales/sales-execution",
            description: "Arm sales reps with account dossiers, competitive counter-points, and recommended next actions to support informed deal progression.",
            badge: "Deal Guidance",
            icon: Cpu,
            focus: "Account Dossiers & Action Plans"
        },
        {
            title: "Revenue Operations",
            path: "/ai-native-sales/revops",
            description: "Align data structures, workflow handoffs, and operational coordination across sales, marketing, and customer success teams.",
            badge: "Workflow Handoffs",
            icon: LineChart,
            focus: "Cross-Functional Alignment"
        },
        {
            title: "Sales Agents & Automation",
            path: "/ai-native-sales/agents",
            description: "Deploy task-specific AI agents with human-in-the-loop oversight to research accounts, schedule meetings, and update CRM records.",
            badge: "Supervised Automation",
            icon: Bot,
            focus: "Human-in-the-Loop SDR Tasks"
        },
        {
            title: "Customer Growth",
            path: "/ai-native-sales/customer-growth",
            description: "Detect adoption shifts and customer feedback early to support recurring contracts and discover expansion opportunities.",
            badge: "Expansion Signals",
            icon: Users,
            focus: "Adoption & Retention Monitoring"
        }
    ];

    return (
        <section className="py-20 md:py-28 bg-slate-900 text-white relative overflow-hidden border-b border-slate-800">
            {/* Ambient Background Grid */}
            <div className="absolute inset-0 opacity-10 bg-grid-slate-100 pointer-events-none" />
            <div className="absolute top-1/3 left-10 w-96 h-96 bg-blue-600/10 blur-[130px] rounded-full pointer-events-none" />
            <div className="absolute bottom-10 right-10 w-96 h-96 bg-indigo-600/10 blur-[130px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                
                {/* Header Section */}
                <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-bold text-blue-400 uppercase font-mono">
                        <Bot className="w-3.5 h-3.5" />
                        <span>Connected Commercial Intelligence</span>
                    </div>

                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                        Make Every Stage of Sales More Informed and Efficient.
                    </h2>

                    <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
                        Connect prospect research, pipeline development, sales engagement, opportunity management, and customer growth through relevant intelligence and automation.
                    </p>
                </div>

                {/* Split Composition: Left Capability Selector + Right Sales Workflow Visual */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-12">
                    
                    {/* Left: 6 Verified Capability Cards */}
                    <div className="lg:col-span-5 space-y-3">
                        {capabilities.map((cap, idx) => {
                            const Icon = cap.icon;
                            const isActive = activeCapability === idx;
                            return (
                                <div
                                    key={idx}
                                    onClick={() => setActiveCapability(idx)}
                                    className={`p-4 rounded-xl border transition-all duration-200 cursor-pointer flex items-center justify-between ${
                                        isActive
                                            ? 'bg-slate-800/90 border-blue-500 shadow-lg shadow-blue-500/10 ring-1 ring-blue-500'
                                            : 'bg-slate-950/60 border-slate-800 hover:border-slate-700 hover:bg-slate-800/40'
                                    }`}
                                >
                                    <div className="flex items-center gap-3.5">
                                        <div className={`p-2 rounded-lg border ${
                                            isActive 
                                                ? 'bg-blue-600 text-white border-blue-400' 
                                                : 'bg-slate-900 text-slate-400 border-slate-800'
                                        }`}>
                                            <Icon className="w-4 h-4" />
                                        </div>
                                        <div>
                                            <div className="text-sm font-bold text-white flex items-center gap-2">
                                                <span>{cap.title}</span>
                                                <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-800 text-slate-400">
                                                    {cap.badge}
                                                </span>
                                            </div>
                                            <div className="text-xs text-slate-400 line-clamp-1 mt-0.5">
                                                {cap.description}
                                            </div>
                                        </div>
                                    </div>
                                    <Link 
                                        to={cap.path}
                                        className="p-1 text-slate-400 hover:text-blue-400"
                                        title={`Explore ${cap.title}`}
                                    >
                                        <ArrowUpRight className="w-4 h-4" />
                                    </Link>
                                </div>
                            );
                        })}
                    </div>

                    {/* Right: Account Research & Sales Engagement Workflow Visual (No Fake Metrics) */}
                    <div className="lg:col-span-7">
                        <div className="rounded-2xl bg-slate-950 border border-slate-800 shadow-2xl overflow-hidden">
                            
                            {/* Window Header */}
                            <div className="px-5 py-3.5 bg-slate-900 border-b border-slate-800 flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <div className="w-2.5 h-2.5 rounded-full bg-slate-700" />
                                    <div className="w-2.5 h-2.5 rounded-full bg-slate-700" />
                                    <div className="w-2.5 h-2.5 rounded-full bg-slate-700" />
                                    <span className="ml-2 font-mono text-xs text-slate-300">
                                        Sales Engagement Workflow &bull; {capabilities[activeCapability].title}
                                    </span>
                                </div>
                                <span className="text-[11px] font-mono text-blue-400 bg-blue-500/10 px-2.5 py-0.5 rounded border border-blue-500/20">
                                    CONNECTED WORKFLOW
                                </span>
                            </div>

                            {/* Workflow Body */}
                            <div className="p-6 space-y-5">
                                
                                {/* Account Research & Context Panel */}
                                <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-3">
                                    <div className="flex items-center justify-between text-xs font-mono">
                                        <span className="text-slate-400">TARGET ACCOUNT CONTEXT</span>
                                        <span className="text-emerald-400">ICP PROPENSITY: HIGH</span>
                                    </div>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                                        <div className="p-3 rounded-lg bg-slate-950 border border-slate-800/80 space-y-1">
                                            <span className="text-[10px] font-mono text-slate-400 block">KEY COMMERCIAL FOCUS</span>
                                            <span className="font-semibold text-slate-200">
                                                {capabilities[activeCapability].focus}
                                            </span>
                                        </div>
                                        <div className="p-3 rounded-lg bg-slate-950 border border-slate-800/80 space-y-1">
                                            <span className="text-[10px] font-mono text-slate-400 block">BUYING COMMITTEE STAKEHOLDERS</span>
                                            <span className="font-semibold text-slate-200">
                                                Economic Buyer, Technical Evaluator &amp; RevOps Lead
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                {/* Active Stage Visual Overview */}
                                <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-3">
                                    <div className="flex items-center justify-between">
                                        <span className="text-xs font-mono font-bold text-slate-300">
                                            WORKFLOW COORDINATION
                                        </span>
                                        <span className="text-xs font-mono text-blue-400">
                                            {capabilities[activeCapability].badge}
                                        </span>
                                    </div>
                                    <p className="text-xs text-slate-300 leading-relaxed">
                                        {capabilities[activeCapability].description}
                                    </p>
                                    
                                    {/* Workflow Step Indicator */}
                                    <div className="grid grid-cols-3 gap-2 pt-2 text-[10px] font-mono">
                                        <div className="p-2 rounded bg-slate-950 border border-slate-800 text-center">
                                            <span className="text-slate-400 block">STAGE 1</span>
                                            <span className="font-bold text-white">Account Research</span>
                                        </div>
                                        <div className="p-2 rounded bg-slate-950 border border-blue-500/40 text-center">
                                            <span className="text-blue-400 block">STAGE 2</span>
                                            <span className="font-bold text-blue-300">Engagement Brief</span>
                                        </div>
                                        <div className="p-2 rounded bg-slate-950 border border-slate-800 text-center">
                                            <span className="text-slate-400 block">STAGE 3</span>
                                            <span className="font-bold text-emerald-400">Rep Support</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Bottom Note */}
                                <div className="flex items-center justify-between text-xs text-slate-400 pt-1">
                                    <div className="flex items-center gap-1.5">
                                        <ShieldCheck className="w-4 h-4 text-emerald-400" />
                                        <span>Human-in-the-Loop Oversight &bull; Supervised Workflows</span>
                                    </div>
                                    <Link 
                                        to={capabilities[activeCapability].path}
                                        className="text-blue-400 font-bold hover:underline flex items-center gap-1"
                                    >
                                        <span>View Specification</span>
                                        <ArrowRight className="w-3.5 h-3.5" />
                                    </Link>
                                </div>

                            </div>

                        </div>
                    </div>

                </div>

                {/* Section Bottom CTA */}
                <div className="text-center">
                    <Link
                        to="/ai-native-sales"
                        onClick={() => trackEvent({ eventName: 'AI_SALES_EXPLORE_HUB_CLICK' })}
                        className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm shadow-lg shadow-blue-600/30 transition-all hover:gap-3"
                    >
                        <span>Explore AI-Native Sales</span>
                        <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>

            </div>
        </section>
    );
}
