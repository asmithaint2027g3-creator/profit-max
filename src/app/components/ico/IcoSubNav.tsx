import { Link, useLocation } from 'react-router-dom';
import { Cpu, Rocket, Sparkles, ShieldCheck, Target, ArrowLeft } from 'lucide-react';

export const icoNavItems = [
    { name: 'Intelligence', path: '/ico-acceleration/intelligence', icon: Cpu, desc: 'Market & Demand Validation' },
    { name: 'Launch & Growth', path: '/ico-acceleration/launch-growth', icon: Rocket, desc: '7-Phase Playbook & Engines' },
    { name: 'Solutions & Engagement', path: '/ico-acceleration/solutions-engagement', icon: Sparkles, desc: 'Segments & 6 Commercial Models' },
    { name: 'Trust & Performance', path: '/ico-acceleration/trust-performance', icon: ShieldCheck, desc: 'Compliance & ROI Measurement' },
    { name: 'Sales Enablement', path: '/ico-acceleration/sales-enablement', icon: Target, desc: 'SPICED & Objection Handling' },
];

export default function IcoSubNav() {
    const location = useLocation();
    const isLanding = location.pathname === '/ico-acceleration' || location.pathname === '/crypto';

    return (
        <div className="sticky top-16 lg:top-[72px] z-40 bg-slate-900/95 backdrop-blur-md border-b border-slate-800 text-white shadow-md">
            <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-13 overflow-x-auto no-scrollbar gap-4 py-1.5">
                    {/* Protocol Identity & Home Link */}
                    <Link
                        to="/ico-acceleration"
                        className={`flex items-center gap-2 text-xs sm:text-sm font-bold tracking-tight shrink-0 transition-colors ${
                            isLanding ? 'text-blue-400' : 'text-slate-400 hover:text-white'
                        }`}
                    >
                        {!isLanding && <ArrowLeft className="w-3.5 h-3.5" />}
                        <span className="px-2 py-0.5 rounded bg-blue-600/20 text-blue-400 border border-blue-500/30 font-mono text-[11px] uppercase tracking-wider">
                            ICO Protocol
                        </span>
                        <span className="hidden sm:inline font-heading font-extrabold text-slate-200">
                            ProfitMachines
                        </span>
                    </Link>

                    {/* The 5 Dedicated Menus */}
                    <div className="flex items-center gap-1 sm:gap-2 shrink-0">
                        {icoNavItems.map((item) => {
                            const isActive = location.pathname === item.path;
                            const Icon = item.icon;
                            return (
                                <Link
                                    key={item.name}
                                    to={item.path}
                                    className={`relative flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs sm:text-sm font-semibold whitespace-nowrap transition-all duration-200 ${
                                        isActive
                                            ? 'text-white bg-blue-600/30 border border-blue-500/50 shadow-sm'
                                            : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                                    }`}
                                >
                                    <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-blue-400' : 'text-slate-400'}`} />
                                    <span>{item.name}</span>
                                    {isActive && (
                                        <span className="absolute -bottom-[7px] left-1/2 -translate-x-1/2 w-8 h-[2px] bg-blue-500 rounded-full" />
                                    )}
                                </Link>
                            );
                        })}
                    </div>

                    {/* Quick CTA */}
                    <div className="hidden md:flex items-center shrink-0">
                        <Link
                            to="/book-consultation"
                            className="text-xs font-bold px-3 py-1.5 rounded-md bg-blue-600 hover:bg-blue-500 text-white transition-colors"
                        >
                            Discuss Launch
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
