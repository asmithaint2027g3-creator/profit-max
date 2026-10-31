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
    MapPin,
    Sparkles
} from 'lucide-react';
import { trackEvent } from '../../../lib/analytics';

export default function HomeGlobalAccelerationSection() {
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
            summary: "Establish operational coordination and multi-region RevOps alignment across distributed commercial teams.",
            badge: "Operational Alignment"
        }
    ];

    return (
        <section className="py-20 md:py-28 bg-white border-b border-slate-200/80 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Header */}
                <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 text-blue-700 font-bold text-xs uppercase tracking-wider border border-blue-100 shadow-xs">
                        <Globe className="w-3.5 h-3.5" />
                        <span>Cross-Border Commercial Strategy</span>
                    </div>

                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
                        Build a More Connected Approach to Business Expansion.
                    </h2>

                    <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
                        Introduce verified capabilities that help businesses assess market opportunities, align customer and market priorities, plan go-to-market activities, coordinate execution, and measure progress.
                    </p>
                </div>

                {/* Split Composition: Left Clean Corporate Image Panel + Right Verified Tracks */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-12">
                    
                    {/* Left: High-Quality Strategy Visual Panel (No human faces) */}
                    <div className="lg:col-span-6">
                        <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-xl bg-slate-900 relative group">
                            <div className="relative h-80 sm:h-96 w-full overflow-hidden">
                                <img 
                                    src="/images/company-hero.png" 
                                    alt="Global Business Expansion Strategy" 
                                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-90"
                                    loading="lazy"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                                
                                <div className="absolute top-4 left-4 bg-slate-900/90 backdrop-blur-md px-3 py-1.5 rounded-full border border-slate-700/80 text-xs font-mono font-bold text-blue-400 flex items-center gap-2">
                                    <Globe className="w-3.5 h-3.5 text-blue-400" />
                                    <span>Market Expansion Framework</span>
                                </div>
                            </div>

                            <div className="p-6 bg-slate-950 border-t border-slate-800 text-white space-y-3">
                                <div className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider">
                                    COORDINATED TERRITORY ROADMAP
                                </div>
                                <h3 className="text-lg font-bold text-white">
                                    Strategic Territory Assessment &amp; Ecosystem Alignment
                                </h3>
                                <p className="text-xs text-slate-400 leading-relaxed">
                                    Assess regulatory feasibility, distributor channels, and regional customer readiness before committing commercial expansion capital.
                                </p>
                                
                                <div className="pt-2 flex flex-wrap gap-2 text-[10px] font-mono text-slate-300">
                                    <span className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800">Americas</span>
                                    <span className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800">EMEA</span>
                                    <span className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800">APAC</span>
                                    <span className="px-2 py-0.5 rounded bg-blue-900/40 text-blue-300 border border-blue-800/60">Cross-Border Compliance</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right: 5 Verified Expansion Capability Tracks */}
                    <div className="lg:col-span-6 space-y-3">
                        {verifiedTracks.map((track, idx) => (
                            <Link
                                key={idx}
                                to={track.path}
                                onClick={() => trackEvent({ eventName: `GLOBAL_TRACK_CLICK_${track.title.toUpperCase()}` })}
                                className="group p-5 rounded-2xl bg-slate-50 border border-slate-200 hover:bg-white hover:border-blue-400 hover:shadow-lg transition-all duration-300 block"
                            >
                                <div className="flex items-center justify-between mb-1.5">
                                    <span className="text-[10px] font-mono font-bold text-blue-600 bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-100">
                                        {track.badge}
                                    </span>
                                    <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                                </div>
                                <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
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
