import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  ChevronRight, 
  ArrowUpRight, 
  Bot, 
  BrainCircuit, 
  Users, 
  ShieldCheck, 
  ArrowLeft,
  ChevronDown
} from 'lucide-react';

export interface AnchorItem {
  id: string;
  label: string;
}

interface AiSalesStickySubNavProps {
  currentPageTitle: string;
  currentPath: string;
  anchors: AnchorItem[];
}

const CATEGORY_PAGES = [
  {
    title: 'Agentic SDR & Autopilots',
    path: '/ai-native-sales/agentic-sdr',
    icon: Bot,
    badge: 'Autonomous Outbound'
  },
  {
    title: 'Predictive Intelligence',
    path: '/ai-native-sales/predictive-intelligence',
    icon: BrainCircuit,
    badge: 'Neural Scoring'
  },
  {
    title: 'Deal Execution & Enablement',
    path: '/ai-native-sales/deal-execution',
    icon: Users,
    badge: 'Consensus & Telemetry'
  },
  {
    title: 'Integrations & Security',
    path: '/ai-native-sales/integrations',
    icon: ShieldCheck,
    badge: 'Zero-Trust Stack'
  }
];

export default function AiSalesStickySubNav({
  currentPageTitle,
  currentPath,
  anchors
}: AiSalesStickySubNavProps) {
  const [activeAnchor, setActiveAnchor] = useState<string>(anchors[0]?.id || '');
  const [categoryDropdownOpen, setCategoryDropdownOpen] = useState(false);
  const location = useLocation();

  // Scroll spy for anchors
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 180;
      for (let i = anchors.length - 1; i >= 0; i--) {
        const anchor = anchors[i];
        const element = document.getElementById(anchor.id);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveAnchor(anchor.id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [anchors]);

  // Handle hash on initial mount or change
  useEffect(() => {
    if (location.hash) {
      const targetId = location.hash.replace('#', '');
      const el = document.getElementById(targetId);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    }
  }, [location.hash]);

  const scrollToAnchor = (id: string) => {
    setActiveAnchor(id);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -90; // offset for sticky sub-nav + main nav
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
      window.history.replaceState(null, '', `#${id}`);
    }
  };

  return (
    <div className="sticky top-16 lg:top-[72px] z-30 bg-slate-950/95 backdrop-blur-md border-b border-slate-800 shadow-md">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 gap-4">
          
          {/* Left: Breadcrumb / Category switcher */}
          <div className="flex items-center gap-2 shrink-0">
            <Link
              to="/ai-native-sales"
              className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-slate-400 hover:text-blue-400 transition-colors"
              title="Return to AI Native Sales Hub"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">AI Native Sales</span>
            </Link>
            <ChevronRight className="w-3 h-3 text-slate-600 shrink-0" />
            
            {/* Category Dropdown Switcher */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setCategoryDropdownOpen(!categoryDropdownOpen)}
                className="inline-flex items-center gap-1 text-xs font-bold text-white hover:text-blue-400 transition-colors bg-slate-900 border border-slate-800 hover:border-slate-700 px-2.5 py-1 rounded-lg"
              >
                <span className="max-w-[160px] sm:max-w-[220px] truncate">{currentPageTitle}</span>
                <ChevronDown className={`w-3 h-3 text-slate-400 transition-transform ${categoryDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {categoryDropdownOpen && (
                <>
                  <div 
                    className="fixed inset-0 z-40" 
                    onClick={() => setCategoryDropdownOpen(false)} 
                  />
                  <div className="absolute left-0 mt-2 w-72 bg-slate-900 border border-slate-800 rounded-xl shadow-2xl p-2 z-50 space-y-1">
                    <div className="px-2.5 py-1 text-[10px] font-mono uppercase tracking-wider text-slate-400 border-b border-slate-800">
                      Switch Category
                    </div>
                    {CATEGORY_PAGES.map((cat, idx) => {
                      const Icon = cat.icon;
                      const isCurrent = cat.path === currentPath;
                      return (
                        <Link
                          key={idx}
                          to={cat.path}
                          onClick={() => setCategoryDropdownOpen(false)}
                          className={`flex items-center justify-between px-3 py-2 rounded-lg text-xs transition-colors ${
                            isCurrent
                              ? 'bg-blue-600/20 text-blue-400 border border-blue-500/30'
                              : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                          }`}
                        >
                          <div className="flex items-center gap-2">
                            <Icon className="w-3.5 h-3.5" />
                            <span className="font-semibold">{cat.title}</span>
                          </div>
                          <span className="text-[10px] font-mono text-slate-400">{cat.badge}</span>
                        </Link>
                      );
                    })}
                    <div className="pt-1 mt-1 border-t border-slate-800">
                      <Link
                        to="/ai-native-sales"
                        onClick={() => setCategoryDropdownOpen(false)}
                        className="flex items-center justify-between px-3 py-1.5 text-xs text-blue-400 hover:bg-slate-800 rounded-lg font-medium"
                      >
                        <span>View Main Operating System Hub</span>
                        <ArrowUpRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Center: In-page Anchor Links (Smooth Scroll) */}
          <nav className="flex items-center gap-1 sm:gap-2 overflow-x-auto no-scrollbar py-1">
            {anchors.map((anchor) => {
              const isSelected = activeAnchor === anchor.id;
              return (
                <button
                  key={anchor.id}
                  type="button"
                  onClick={() => scrollToAnchor(anchor.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all duration-150 cursor-pointer ${
                    isSelected
                      ? 'bg-blue-600 text-white font-semibold shadow-xs'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900 border border-transparent'
                  }`}
                >
                  {anchor.label}
                </button>
              );
            })}
          </nav>

          {/* Right: Quick Action */}
          <div className="shrink-0 hidden md:block">
            <Link
              to="/book-consultation"
              className="inline-flex items-center gap-1.5 bg-blue-600/20 hover:bg-blue-600 text-blue-400 hover:text-white border border-blue-500/30 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all"
            >
              <span>Book Diagnostic</span>
              <ArrowUpRight className="w-3 h-3" />
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}
