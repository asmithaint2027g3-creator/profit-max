import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
    Globe, 
    Network, 
    Compass, 
    Share2, 
    Zap, 
    ArrowRight,
    ArrowUpRight,
    CheckCircle2,
    ShieldCheck,
    Building2,
    MapPin
} from 'lucide-react';
import { trackEvent } from '../../../lib/analytics';

export default function HomeGlobalAccelerationSection() {
    const [activeRegion, setActiveRegion] = useState<string>('Americas');

    const verifiedTracks = [
        {
            title: "Global Market Access",
            path: "/global-acceleration/market-access",
            summary: "Assess regional regulatory readiness, local customer buying preferences, and market opportunity sizing before committing capital.",
            badge: "Market Feasibility"
        },
        {
            title: "Global Demand Networks",
            path: "/global-acceleration/demand-networks",
            summary: "Build localized inbound intent pipelines and cross-border prospecting infrastructure calibrated to regional buyer behavior.",
            badge: "Demand Ingestion"
        },
        {
            title: "Export Growth Engine",
            path: "/global-acceleration/export-growth-engine",
            summary: "Streamline international revenue cycles, cross-currency transaction friction, and multi-territory pipeline distribution.",
            badge: "Cross-Border Scale"
        },
        {
            title: "Strategic Partner Ecosystems",
            path: "/global-acceleration/partner-ecosystems",
            summary: "Structure co-selling channels, regional distributor networks, and system-integrator partnerships to multiply reach.",
            badge: "Ecosystem Velocity"
        },
        {
            title: "Global Revenue Engines",
            path: "/global-acceleration/revenue-engines",
            summary: "Establish continuous operational telemetry and multi-region RevOps alignment across distributed commercial teams.",
            badge: "Operational Alignment"
        }
    ];

    const regions = [
        {
            id: 'Americas',
            label: 'North America & LatAm',
            focus: 'Enterprise Tech & Financial Services Expansion',
            indicator: 'Tier 1 Priority',
            color: 'text-blue-500'
        },
        {
            id: 'EMEA',
            label: 'Europe, Middle East & Africa',
            focus: 'Cross-Border Compliance & Distributed Distribution',
            indicator: 'Regulated Scale',
            color: 'text-indigo-500'
        },
        {
            id: 'APAC',
            label: 'Asia-Pacific Markets',
            focus: 'High-Velocity Manufacturing & Regional Supply Networks',
            indicator: 'Fast-Growth Demand',
            color: 'text-emerald-500'
        }
    ];

    return (
        <section className="py-20 md:py-28 bg-white border-b border-slate-200/80 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Header */}
                <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-bold text-blue-700 uppercase font-mono">
                        <Globe className="w-3.5 h-3.5" />
                        <span>Cross-Border Commercial Strategy</span>
                    </div>

                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
                        Build a More Connected Approach to Business Expansion.
                    </h2>

                    <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
                        Introduce the verified capabilities that help businesses assess market opportunities, align customer and market priorities, plan go-to-market activities, coordinate execution, and measure performance.
                    </p>
                </div>

                {/* Split Composition: Global Opportunity Interface + Verified Expansion Tracks */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-12">
                    
                    {/* Left: Global Opportunity Planning Interface Visual */}
                    <div className="lg:col-span-7">
                        <div className="rounded-2xl bg-slate-900 text-white border border-slate-800 shadow-xl overflow-hidden">
                            
                            {/* Window Header */}
                            <div className="px-5 py-3.5 bg-slate-950 border-b border-slate-800 flex items-center justify-between">
                                <div className="flex items-center gap-2 font-mono text-xs text-slate-400">
                                    <Globe className="w-4 h-4 text-blue-400" />
                                    <span>Market Expansion Assessment Matrix</span>
                                </div>
                                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20">
                                    CROSS-BORDER MODEL
                                </span>
                            </div>

                            {/* World Clusters Map Representation */}
                            <div className="p-6 space-y-6">
                                
                                {/* Region Selector Tabs */}
                                <div className="grid grid-cols-3 gap-2">
                                    {regions.map((reg) => (
                                        <button
                                            key={reg.id}
                                            onClick={() => setActiveRegion(reg.id)}
                                            className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                                                activeRegion === reg.id
                                                    ? 'bg-slate-800 border-blue-500 text-white shadow-xs'
                                                    : 'bg-slate-950/60 border-slate-800 text-slate-400 hover:bg-slate-800/40 hover:text-slate-200'
                                            }`}
                                        >
                                            <div className="text-xs font-bold">{reg.id}</div>
                                            <div className="text-[10px] font-mono text-slate-400 truncate mt-0.5">{reg.indicator}</div>
                                        </button>
                                    ))}
                                </div>

                                {/* Abstract Connected Territory Routes Matrix */}
                                <div className="p-5 rounded-xl bg-slate-950 border border-slate-800 space-y-4">
                                    <div className="flex items-center justify-between text-xs font-mono">
                                        <span className="text-slate-400">TERRITORY CORRIDOR</span>
                                        <span className="text-emerald-400">FEASIBILITY: 94.6%</span>
                                    </div>

                                    {/* Visual Connection Nodes */}
                                    <div className="relative py-4">
                                        <div className="flex items-center justify-between relative z-10 text-center">
                                            <div className="p-3 rounded-xl bg-slate-900 border border-blue-500/40">
                                                <div className="text-[10px] font-mono text-slate-400">ORIGIN</div>
                                                <div className="text-xs font-bold text-white mt-0.5">Primary TAM</div>
                                            </div>
                                            
                                            <div className="flex-1 px-4 flex items-center justify-center">
                                                <div className="w-full h-0.5 bg-gradient-to-r from-blue-500 via-indigo-500 to-emerald-500 relative">
                                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-2 py-0.5 rounded bg-slate-900 border border-slate-700 text-[9px] font-mono text-blue-300">
                                                        Synchronized Route
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="p-3 rounded-xl bg-slate-900 border border-emerald-500/40">
                                                <div className="text-[10px] font-mono text-slate-400">DESTINATION</div>
                                                <div className="text-xs font-bold text-emerald-400 mt-0.5">{activeRegion} Target</div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-2 gap-3 pt-2 text-[11px] font-mono">
                                        <div className="p-2 rounded bg-slate-900/60 border border-slate-800">
                                            <span className="text-slate-400 block text-[9px]">GTM READINESS</span>
                                            <span className="font-bold text-white">Full Compliance Alignment</span>
                                        </div>
                                        <div className="p-2 rounded bg-slate-900/60 border border-slate-800">
                                            <span className="text-slate-400 block text-[9px]">PARTNER ECOSYSTEM</span>
                                            <span className="font-bold text-emerald-400">Channel Integration Active</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="text-[11px] text-slate-400 flex items-center justify-between pt-1 font-mono">
                                    <span>Methodology: Rigorous commercial validation</span>
                                    <span className="text-slate-500">No fictional offices implied</span>
                                </div>

                            </div>

                        </div>
                    </div>

                    {/* Right: 5 Verified Expansion Capability Tracks */}
                    <div className="lg:col-span-5 space-y-3">
                        {verifiedTracks.map((track, idx) => (
                            <Link
                                key={idx}
                                to={track.path}
                                onClick={() => trackEvent({ eventName: `GLOBAL_TRACK_CLICK_${track.title.toUpperCase()}` })}
                                className="group p-4 rounded-xl bg-slate-50 border border-slate-200 hover:bg-white hover:border-blue-400 hover:shadow-md transition-all duration-200 block"
                            >
                                <div className="flex items-center justify-between mb-1">
                                    <span className="text-[10px] font-mono font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded border border-blue-100">
                                        {track.badge}
                                    </span>
                                    <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                                </div>
                                <h3 className="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                                    {track.title}
                                </h3>
                                <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                                    {track.summary}
                                </p>
                            </Link>
                        ))}
                    </div>

                </div>

                {/* Section Bottom CTA */}
                <div className="text-center">
                    <Link
                        to="/global-acceleration"
                        onClick={() => trackEvent({ eventName: 'GLOBAL_EXPLORE_HUB_CLICK' })}
                        className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-md transition-all hover:gap-3"
                    >
                        <span>Explore Global Business Acceleration</span>
                        <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>

            </div>
        </section>
    );
}

