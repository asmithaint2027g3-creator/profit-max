import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Compass, 
  Layers, 
  Search, 
  Box, 
  TrendingUp, 
  ShieldCheck, 
  ArrowUpRight 
} from 'lucide-react';

interface SubNavItem {
  name: string;
  path: string;
  icon: React.ComponentType<{ className?: string }>;
  description: string;
}

const subNavItems: SubNavItem[] = [
  {
    name: 'Overview',
    path: '/offerings',
    icon: Compass,
    description: 'Executive Summary'
  },
  {
    name: 'Engagement Continuum',
    path: '/offerings/engagement-models',
    icon: Layers,
    description: 'Eight Partnership Models'
  },
  {
    name: 'The Discovery Stack',
    path: '/offerings/discovery-stack',
    icon: Search,
    description: 'Seven Diagnostic Layers'
  },
  {
    name: 'Fast-Start Kits',
    path: '/offerings/fast-start-kits',
    icon: Box,
    description: 'Fixed-Scope Sprints'
  },
  {
    name: 'Engagement Journeys',
    path: '/offerings/engagement-journeys',
    icon: TrendingUp,
    description: 'Sequenced Paths'
  },
  {
    name: 'Commercials & Guardrails',
    path: '/offerings/commercials',
    icon: ShieldCheck,
    description: 'Terms & Alignment'
  }
];

export default function OfferingsSubNav() {
  const location = useLocation();

  const isActive = (itemPath: string) => {
    if (itemPath === '/offerings') {
      return location.pathname === '/offerings';
    }
    return location.pathname.startsWith(itemPath) || 
      (itemPath === '/offerings/fast-start-kits' && location.pathname.startsWith('/offerings/micro-segment-kits')) ||
      (itemPath === '/offerings/engagement-models' && location.pathname.startsWith('/engagement-model/models')) ||
      (itemPath === '/offerings/engagement-journeys' && location.pathname.startsWith('/engagement-model/journeys')) ||
      (itemPath === '/offerings/commercials' && location.pathname.startsWith('/engagement-model/commercials'));
  };

  return (
    <div className="bg-slate-900 border-b border-slate-800 sticky top-16 lg:top-[72px] z-30 shadow-md">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 overflow-x-auto no-scrollbar py-1">
          <div className="flex items-center gap-1 sm:gap-2 shrink-0">
            {subNavItems.map((item) => {
              const active = isActive(item.path);
              const Icon = item.icon;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
                    active
                      ? 'bg-blue-600 text-white shadow-xs font-bold'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/80'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${active ? 'text-white' : 'text-blue-400'}`} />
                  <span>{item.name}</span>
                </Link>
              );
            })}
          </div>

          <div className="hidden xl:flex items-center gap-3 shrink-0 pl-4 border-l border-slate-800">
            <Link
              to="/book-consultation"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-400 hover:text-blue-300 transition-colors"
            >
              <span>Request Proposal</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
