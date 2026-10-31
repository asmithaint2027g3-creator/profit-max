import React from 'react';
import { Link } from 'react-router-dom';
import { 
    FileText, 
    CheckCircle2, 
    ArrowRight, 
    ArrowUpRight, 
    Layers, 
    Building2, 
    Factory, 
    HeartPulse, 
    Code, 
    TrendingUp,
    ShieldCheck,
    Compass,
    Sliders,
    Workflow,
    Cpu,
    RefreshCw
} from 'lucide-react';
import { trackEvent } from '../../../lib/analytics';

export default function HomeCaseStudiesSection() {
    const verifiedCaseStudies = [
        {
            title: "Enterprise SaaS Pipeline Growth",
            path: "/case-studies/enterprise-saas-pipeline-growth",
            industry: "B2B Software",
            icon: Code,
            challenge: "Manual SDR research drag and inconsistent account prioritization across enterprise sales tiers.",
            solution: "Deployed intent-driven ICP ingestion and structured deal briefing dossiers for account executives.",
            badge: "Pipeline Progression"
        },
        {
            title: "Global Manufacturing Expansion",
            path: "/case-studies/global-manufacturing-expansion",
            industry: "Industrial Manufacturing",
            icon: Factory,
            challenge: "Fragmented dealer networks and limited visibility into cross-border industrial demand signals.",
            solution: "Built a connected distributor coordination workflow and real-time demand signals across regional hubs.",
            badge: "Cross-Border GTM"
        },
        {
            title: "Healthcare Forecast Accuracy",
            path: "/case-studies/healthcare-forecast-accuracy",
            industry: "Healthcare & Life Sciences",
            icon: HeartPulse,
            challenge: "Quarterly forecast variance due to disconnected hospital procurement and complex approval cycles.",
            solution: "Unified CRM workflows, contract milestones, and clinical approval stages into a single operating model.",
            badge: "RevOps Alignment"
        },
        {
            title: "Technology Customer Expansion",
            path: "/case-studies/technology-customer-expansion",
            industry: "Enterprise Technology",
            icon: Building2,
            challenge: "Missed expansion signals resulting in contract renewals without upsell realization.",
            solution: "Engineered customer adoption monitoring with timely workflows triggered by milestone usage thresholds.",
            badge: "Retention & Expansion"
        }
    ];

    const approachStages = [
        {
            num: "01",
            title: "Understand the business challenge and growth objectives",
            desc: "Examine commercial constraints, sales bottlenecks, and data silos across current go-to-market operations.",
            icon: Compass
        },
        {
            num: "02",
            title: "Identify the most relevant opportunity",
            desc: "Isolate the highest-priority market segments, buyer intent signals, and customer accounts with strong growth potential.",
            icon: Sliders
        },
        {
            num: "03",
            title: "Design an appropriate sales and demand approach",
            desc: "Formulate targeted prospecting workflows, opportunity playbooks, and qualification criteria adapted to the business model.",
            icon: Workflow
        },
        {
            num: "04",
            title: "Connect processes, intelligence, and automation",
            desc: "Integrate CRM workflows, research tools, and rep guidance to eliminate repetitive manual overhead.",
            icon: Cpu
        },
        {
            num: "05",
            title: "Review progress and refine the approach",
            desc: "Review execution against agreed business objectives and continuously refine targeting and workflows.",
            icon: RefreshCw
        }
    ];

    return (
        <section className="py-20 md:py-28 bg-white border-b border-slate-200/80">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Header */}
                <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-bold text-blue-700 uppercase font-mono">
                        <FileText className="w-3.5 h-3.5" />
                        <span>Execution Methodology &bull; Case Studies</span>
                    </div>

                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
                        A Practical Path From Business Challenges to Coordinated Growth.
                    </h2>

                    <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
                        Explore how ProfitMachines systematically guides organizations from fragmented sales operations to unified, coordinated revenue execution.
                    </p>
                </div>

                {/* 5-Stage Approach Process Diagram */}
                <div className="mb-14 p-6 sm:p-8 rounded-3xl bg-slate-50 border border-slate-200">
                    <div className="text-xs font-mono font-bold text-blue-600 uppercase tracking-wider mb-6">
                        Our 5-Stage Growth Transformation Approach:
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                        {approachStages.map((s, idx) => {
                            const Icon = s.icon;
                            return (
                                <div key={idx} className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs flex flex-col justify-between">
                                    <div>
                                        <div className="flex items-center justify-between mb-3">
                                            <div className="p-2 rounded-lg bg-blue-50 text-blue-600">
                                                <Icon className="w-4 h-4" />
                                            </div>
                                            <span className="text-xs font-mono font-black text-slate-400">
                                                {s.num}
                                            </span>
                                        </div>
                                        <h4 className="text-xs font-bold text-slate-900 leading-snug mb-1.5">
                                            {s.title}
                                        </h4>
                                        <p className="text-[11px] text-slate-500 leading-relaxed">
                                            {s.desc}
                                        </p>
                                    </div>
                                    <div className="mt-3 pt-2 border-t border-slate-100 text-[10px] font-mono text-blue-600 font-semibold">
                                        Stage {s.num}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Verified Case Study Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                    {verifiedCaseStudies.map((cs, idx) => {
                        const Icon = cs.icon;
                        return (
                            <Link
                                key={idx}
                                to={cs.path}
                                onClick={() => trackEvent({ eventName: `CASE_STUDY_CLICK_${cs.title.toUpperCase()}` })}
                                className="group p-6 rounded-2xl bg-white border border-slate-200 hover:border-blue-500 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
                            >
                                <div className="space-y-4">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-2.5">
                                            <div className="p-2 rounded-xl bg-slate-100 text-slate-700 group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">
                                                <Icon className="w-5 h-5" />
                                            </div>
                                            <div>
                                                <span className="text-xs font-mono text-slate-400 block">INDUSTRY</span>
                                                <span className="text-xs font-bold text-slate-800">{cs.industry}</span>
                                            </div>
                                        </div>
                                        <span className="text-[10px] font-mono font-bold px-2.5 py-1 rounded-full bg-slate-100 text-slate-700">
                                            {cs.badge}
                                        </span>
                                    </div>

                                    <div>
                                        <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors flex items-center justify-between mb-2">
                                            <span>{cs.title}</span>
                                            <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                                        </h3>
                                        
                                        <div className="space-y-2 text-xs">
                                            <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                                                <span className="font-bold text-slate-700 block mb-0.5">Commercial Challenge:</span>
                                                <span className="text-slate-600">{cs.challenge}</span>
                                            </div>
                                            <div className="p-3 rounded-xl bg-blue-50/50 border border-blue-100/80">
                                                <span className="font-bold text-blue-900 block mb-0.5">Architectural Solution:</span>
                                                <span className="text-slate-700">{cs.solution}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-blue-600">
                                    <span>Read Full Case Study</span>
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </div>
                            </Link>
                        );
                    })}
                </div>

                {/* Section Bottom CTA */}
                <div className="text-center">
                    <Link
                        to="/case-studies"
                        onClick={() => trackEvent({ eventName: 'CASE_STUDIES_EXPLORE_ALL_CLICK' })}
                        className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-slate-900 hover:bg-blue-600 text-white font-bold text-sm shadow-md transition-all hover:gap-3"
                    >
                        <span>Explore All Case Studies</span>
                        <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>

            </div>
        </section>
    );
}
