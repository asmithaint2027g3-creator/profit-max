import React, { useState } from 'react';
import { 
    LineChart as ChartIcon, 
    TrendingUp, 
    Activity, 
    BarChart3, 
    CheckCircle2, 
    ShieldAlert, 
    ArrowRight,
    Gauge,
    DollarSign,
    Clock,
    Target
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function HomeExecutiveTelemetrySection() {
    const [activeKpiGroup, setActiveKpiGroup] = useState<string>('all');

    const kpiMetrics = [
        {
            title: "Qualified Leads & Pipeline",
            value: "$14.8M",
            category: "Pipeline Health",
            indicator: "High-Fit Weighted Value",
            detail: "Continuous pipeline velocity tracking mapped to ICP propensity score.",
            icon: Target,
            trend: "Predictive Ingestion"
        },
        {
            title: "Conversion Rates",
            value: "28.4%",
            category: "Efficiency",
            indicator: "Opportunity-to-Won",
            detail: "Stage-by-stage progression telemetry isolating deal drop-off points.",
            icon: TrendingUp,
            trend: "Funnel Velocity"
        },
        {
            title: "Sales Cycle & Win Rate",
            value: "42 Days",
            category: "Efficiency",
            indicator: "-34% Velocity Delta",
            detail: "Friction-adjusted deal duration from first qualification to contract execution.",
            icon: Clock,
            trend: "Deal Velocity"
        },
        {
            title: "Customer Acquisition Cost",
            value: "3.8x LTV",
            category: "Economics",
            indicator: "Unit Economic Health",
            detail: "Attribution-backed CAC payback periods across automated SDR and inbound channels.",
            icon: DollarSign,
            trend: "Margin Protection"
        },
        {
            title: "Forecast Accuracy",
            value: "98.2%",
            category: "Governance",
            indicator: "&plusmn;1.8% Variance",
            detail: "Real-time CRM data reconciliation eliminating end-of-quarter surprises.",
            icon: Gauge,
            trend: "Revenue Telemetry"
        },
        {
            title: "Net Retention & Expansion",
            value: "119.4%",
            category: "Retention",
            indicator: "NDR Trajectory",
            detail: "Cohort adoption signals predicting renewal health and timely expansion triggers.",
            icon: Activity,
            trend: "Customer Value"
        },
        {
            title: "Process Efficiency",
            value: "68%",
            category: "Operations",
            indicator: "Manual Drag Eliminated",
            detail: "Automated account research, meeting notes, and CRM updates via agent workflows.",
            icon: BarChart3,
            trend: "Productivity Lift"
        },
        {
            title: "Profitability & Unit Economics",
            value: "84.2%",
            category: "Economics",
            indicator: "Gross Contribution Margin",
            detail: "Disciplined monetization preventing unearned discounts and margin erosion.",
            icon: ChartIcon,
            trend: "Profit Pool Capture"
        }
    ];

    return (
        <section className="py-20 md:py-28 bg-slate-50 border-b border-slate-200/80">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Header */}
                <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-bold text-emerald-800 uppercase font-mono">
                        <Gauge className="w-3.5 h-3.5 text-emerald-600" />
                        <span>Executive Performance Telemetry</span>
                    </div>

                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
                        Understand the Performance Behind Your Growth.
                    </h2>

                    <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
                        Explain how relevant performance indicators can help business leaders evaluate growth, identify friction, and decide where improvement is needed.
                    </p>
                </div>

                {/* Executive Dashboard Container */}
                <div className="rounded-3xl bg-white border border-slate-200/90 shadow-xl overflow-hidden mb-12">
                    
                    {/* Top Console Bar */}
                    <div className="px-6 py-4 bg-slate-900 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800">
                        <div className="flex items-center gap-3">
                            <span className="flex h-2.5 w-2.5 rounded-full bg-emerald-400 animate-pulse" />
                            <span className="font-mono text-sm font-bold text-slate-200">
                                ProfitMachines Executive Growth Telemetry Board
                            </span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="text-[11px] font-mono px-2.5 py-1 rounded bg-slate-800 text-slate-300 border border-slate-700">
                                Refresh Cadence: Continuous
                            </span>
                            <span className="text-[11px] font-mono px-2.5 py-1 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20">
                                CRM Sync Active
                            </span>
                        </div>
                    </div>

                    {/* Notice Disclaimer Banner */}
                    <div className="px-6 py-2.5 bg-amber-50 border-b border-amber-200/80 flex items-center justify-between text-xs text-amber-900 font-mono">
                        <div className="flex items-center gap-2">
                            <ShieldAlert className="w-4 h-4 text-amber-700 shrink-0" />
                            <span className="font-bold">Illustrative dashboard — not actual client results.</span>
                            <span className="hidden md:inline text-amber-700">Metrics display architectural capability and telemetry frameworks.</span>
                        </div>
                        <span className="font-semibold text-amber-800">Architecture Spec</span>
                    </div>

                    {/* 8 KPI Cards Grid */}
                    <div className="p-6 sm:p-8 bg-slate-50/50">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                            {kpiMetrics.map((kpi, idx) => {
                                const Icon = kpi.icon;
                                return (
                                    <div 
                                        key={idx}
                                        className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs hover:border-blue-400 hover:shadow-md transition-all duration-200 flex flex-col justify-between"
                                    >
                                        <div>
                                            <div className="flex items-center justify-between mb-3">
                                                <div className="p-2 rounded-xl bg-slate-100 text-slate-700">
                                                    <Icon className="w-4 h-4" />
                                                </div>
                                                <span className="text-[10px] font-mono font-bold text-slate-400 uppercase">
                                                    {kpi.category}
                                                </span>
                                            </div>

                                            <div className="text-2xl font-black text-slate-900 font-mono tracking-tight mb-1">
                                                {kpi.value}
                                            </div>

                                            <div className="text-xs font-bold text-slate-800 mb-1">
                                                {kpi.title}
                                            </div>

                                            <p className="text-[11px] text-slate-500 leading-snug">
                                                {kpi.detail}
                                            </p>
                                        </div>

                                        <div className="mt-4 pt-2.5 border-t border-slate-100 flex items-center justify-between text-[10px] font-mono">
                                            <span className="text-slate-500">{kpi.indicator}</span>
                                            <span className="text-emerald-600 font-bold">{kpi.trend}</span>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Interactive Telemetry Ingestion Strip */}
                    <div className="px-6 py-4 bg-white border-t border-slate-200 flex flex-col md:flex-row md:items-center justify-between gap-4 text-xs text-slate-600">
                        <div className="flex flex-wrap items-center gap-4">
                            <span className="font-bold text-slate-900 font-mono">CONNECTED INGESTION SOURCES:</span>
                            <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 font-mono text-[11px]">Salesforce / HubSpot CRM</span>
                            <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 font-mono text-[11px]">Snowflake / Databricks Data Lake</span>
                            <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 font-mono text-[11px]">Stripe / Billing Ledgers</span>
                        </div>
                        <div className="flex items-center gap-2 font-mono text-emerald-600 font-bold text-[11px]">
                            <CheckCircle2 className="w-3.5 h-3.5" />
                            <span>Zero Data Discrepancy Verified</span>
                        </div>
                    </div>

                </div>

                {/* Section Bottom CTA */}
                <div className="text-center">
                    <Link
                        to="/offerings/growth-intelligence"
                        className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-slate-900 hover:bg-blue-600 text-white font-bold text-sm shadow-md transition-all hover:gap-3"
                    >
                        <span>Explore Growth Intelligence Architecture</span>
                        <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>

            </div>
        </section>
    );
}

