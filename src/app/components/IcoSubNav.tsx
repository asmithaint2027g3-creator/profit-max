import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Sparkles, 
  Search, 
  Rocket, 
  Layers, 
  ShieldCheck, 
  Target, 
  ArrowRight 
} from 'lucide-react';

interface SubNavItem {
  name: string;
  path: string;
  icon: React.ElementType;
  badge?: string;
}

const navItems: SubNavItem[] = [
  { name: 'Intelligence', path: '/ico-acceleration/intelligence', icon: Search },
  { name: 'Launch & Growth', path: '/ico-acceleration/launch-growth', icon: Rocket },
  { name: 'Solutions & Engagement', path: '/ico-acceleration/solutions-engagement', icon: Layers },
  { name: 'Trust & Performance', path: '/ico-acceleration/trust-performance', icon: ShieldCheck },
  { name: 'Sales Enablement', path: '/ico-acceleration/sales-enablement', icon: Target }
];

export default function IcoSubNav() {
  const location = useLocation();

  return (
    <div className="sticky top-16 lg:top-[72px] z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/90 shadow-xs">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 gap-4">
          
          {/* Main Landing Root Link */}
          <Link
            to="/ico-acceleration"
            className={`flex items-center gap-2 shrink-0 py-1.5 px-3 rounded-lg text-xs sm:text-sm font-bold tracking-tight transition-all ${
              location.pathname === '/ico-acceleration'
                ? 'bg-blue-50 text-blue-700 border border-blue-200'
                : 'text-slate-700 hover:text-blue-600 hover:bg-slate-50'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span className="font-heading">Crypto Protocol</span>
          </Link>

          {/* Divider */}
          <div className="hidden sm:block h-5 w-px bg-slate-200 shrink-0" />

          {/* 5 Main Sub-menu Pages Navigation */}
          <div className="flex items-center gap-1 sm:gap-2 overflow-x-auto no-scrollbar py-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;

              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center gap-1.5 shrink-0 px-3 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
                    isActive
                      ? 'bg-blue-600 text-white shadow-xs'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/80'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-white' : 'text-slate-400'}`} />
                  <span>{item.name}</span>
                </Link>
              );
            })}
          </div>

          {/* Right Action CTA */}
          <div className="hidden xl:flex items-center shrink-0">
            <Link
              to="/book-consultation"
              className="inline-flex items-center gap-1.5 bg-slate-900 hover:bg-blue-600 text-white text-xs font-bold px-3.5 py-2 rounded-lg transition-all shadow-xs group"
            >
              <span>Discuss Your Launch</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}
