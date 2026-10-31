import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
    Activity, 
    Stethoscope, 
    Sliders, 
    Wrench, 
    Gauge, 
    TrendingUp, 
    ArrowRight,
    ArrowUpRight,
    CheckCircle2,
    Sparkles,
    ShieldCheck,
    LineChart
} from 'lucide-react';
import { trackEvent } from '../../../lib/analytics';

export default function HomeGrowthScienceSection() {
    const [activeStep, setActiveStep] = useState<number>(0);

    const frameworkSteps = [
        {
            name: "Diagnose",
            concept: "Friction Diagnostics",
            conceptPath: "/growth-science/friction-diagnostics",
            summary: "Audit conversion leakages, buyer hesitation points, and sales operational drag across historical deal telemetry.",
            output: "Systemic Friction Matrix",
            icon: Stethoscope
        },
        {
            name: "Prioritize",
            concept: "Revenue Physics",
            conceptPath: "/growth-science/revenue-physics",
            summary: "Calculate velocity vectors to isolate the fewest high-leverage interventions with the greatest revenue contribution.",
            output: "High-Leverage Growth Map",
            icon: Sliders
        },
        {
            name: "Implement",
            concept: "AI Acceleration Engines",
            conceptPath: "/growth-science/ai-engines",
            summary: "Embed targeted AI workflows and automation modules into CRM and sales channels to eliminate manual execution barriers.",
            output: "Operational Acceleration Pods",
            icon: Wrench
        },
        {
            name: "Measure",
            concept: "Executive Telemetry",
            conceptPath: "/growth-science/executive-telemetry",
            summary: "Track conversion velocity, forecast precision, and unit economics with real-time operational telemetry feeds.",
            output: "Telemetry Dashboard Feed",
            icon: Gauge
        },
        {
            name: "Improve",
            concept: "Proprietary Growth Models",
            conceptPath: "/growth-science/growth-models",
            summary: "Calibrate models iteratively using closed-loop commercial outcomes to compound margin expansion over time.",
            output: "Model Calibration Log",
            icon: TrendingUp
        }
    ];

    return (
        <section className="py-20 md:py-28 bg-white border-b border-slate-200/80">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Header */}
                <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-bold text-blue-700 uppercase font-mono">
                        <Activity className="w-3.5 h-3.5" />
                        <span>Empirical Revenue Methodology</span>
                    </div>

                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
                        Diagnose What Slows Growth. Prioritize What Moves It Forward.
                    </h2>

                    <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
                        Introduce the existing ProfitMachines frameworks and concepts that help businesses examine growth constraints, prioritize opportunities, improve execution, and measure progress.
                    </p>
                </div>

                {/* 5-Step Visual Framework Pipeline: Diagnose -> Prioritize -> Implement -> Measure -> Improve */}
                <div className="mb-14">
                    <div className="p-6 sm:p-8 rounded-3xl bg-slate-50 border border-slate-200 shadow-sm">
                        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                            {frameworkSteps.map((step, idx) => {
                                const Icon = step.icon;
                                const isSelected = activeStep === idx;
                                return (
                                    <button
                                        key={idx}
                                        onClick={() => setActiveStep(idx)}
                                        className={`p-5 rounded-2xl text-left transition-all duration-200 cursor-pointer flex flex-col justify-between ${
                                            isSelected 
                                                ? 'bg-white border-2 border-blue-600 shadow-lg -translate-y-1' 
                                                : 'bg-white/80 border border-slate-200 hover:border-slate-300 hover:bg-white'
                                        }`}
                                    >
                                        <div>
                                            <div className="flex items-center justify-between mb-3">
                                                <div className={`p-2 rounded-xl ${
                                                    isSelected ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-700'
                                                }`}>
                                                    <Icon className="w-4 h-4" />
                                                </div>
                                                <span className="text-[10px] font-mono font-bold text-slate-400">
                                                    0{idx + 1}
                                                </span>
                                            </div>

                                            <div className="text-xs font-mono font-bold text-blue-600 mb-1">
                                                STEP 0{idx + 1}
                                            </div>

                                            <h3 className="text-base font-extrabold text-slate-900 mb-2">
                                                {step.name}
                                            </h3>

                                            <p className="text-xs text-slate-600 leading-relaxed mb-3">
                                                {step.summary}
                                            </p>
                                        </div>

                                        <div className="pt-3 border-t border-slate-100 text-[11px]">
                                            <span className="text-slate-400 font-mono block text-[9px] uppercase">
                                                Verified Framework
                                            </span>
                                            <span className="font-bold text-slate-900">
                                                {step.concept}
                                            </span>
                                        </div>
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                </div>

                {/* Detailed Active Step & Concept Callout Panel */}
                <div className="p-6 sm:p-8 rounded-2xl bg-slate-900 text-white shadow-xl border border-slate-800 mb-12">
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                        <div className="md:col-span-8 space-y-3">
                            <div className="flex items-center gap-2">
                                <span className="text-xs font-mono font-bold text-blue-400 uppercase">
                                    FRAMEWORK STAGE: {frameworkSteps[activeStep].name.toUpperCase()}
                                </span>
                                <span className="text-slate-600">&bull;</span>
                                <span className="text-xs font-mono text-emerald-400">
                                    VERIFIED CONCEPT
                                </span>
                            </div>
                            <h3 className="text-2xl font-bold text-white">
                                {frameworkSteps[activeStep].concept}
                            </h3>
                            <p className="text-sm text-slate-300 font-normal leading-relaxed max-w-2xl">
                                {frameworkSteps[activeStep].summary} By addressing underlying friction points systematically, revenue teams prevent recurring process breakdowns and protect baseline conversion health.
                            </p>
                        </div>
                        <div className="md:col-span-4 p-5 rounded-xl bg-slate-950 border border-slate-800 space-y-3">
                            <div>
                                <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">
                                    Diagnostic Deliverable
                                </span>
                                <span className="text-sm font-bold text-emerald-400">
                                    {frameworkSteps[activeStep].output}
                                </span>
                            </div>
                            <div className="pt-3 border-t border-slate-800 flex items-center justify-between">
                                <Link
                                    to={frameworkSteps[activeStep].conceptPath}
                                    className="text-xs font-bold text-blue-400 hover:text-blue-300 inline-flex items-center gap-1"
                                >
                                    <span>Explore {frameworkSteps[activeStep].concept}</span>
                                    <ArrowRight className="w-3.5 h-3.5" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Section Bottom CTA */}
                <div className="text-center">
                    <Link
                        to="/growth-science"
                        onClick={() => trackEvent({ eventName: 'GROWTH_SCIENCE_EXPLORE_CLICK' })}
                        className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-slate-900 hover:bg-blue-600 text-white font-bold text-sm shadow-md transition-all hover:gap-3"
                    >
                        <span>Explore Growth &amp; Acceleration Science</span>
                        <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>

            </div>
        </section>
    );
}

