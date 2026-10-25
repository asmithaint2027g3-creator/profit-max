import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Search,
  Rocket,
  Layers,
  ShieldCheck,
  Target,
  ChevronDown,
  ChevronRight,
  ArrowUpRight,
  Sparkles,
  Menu,
  X
} from 'lucide-react';

export interface SubMenuItem {
  id: string;
  label: string;
  badge?: string;
}

export interface MainMenuItem {
  id: string;
  name: string;
  path: string;
  icon: React.ElementType;
  description: string;
  submenus: SubMenuItem[];
}

export const icoNavStructure: MainMenuItem[] = [
  {
    id: 'intelligence',
    name: 'Intelligence',
    path: '/ico-acceleration/intelligence',
    icon: Search,
    description: 'Market validation, tokenomics positioning & demand discovery',
    submenus: [
      { id: 'market-validation', label: 'Market Validation Intelligence' },
      { id: 'tokenomics-narrative', label: 'Tokenomics & Narrative Studio' },
      { id: 'mvp-acceleration', label: 'Startup MVP Acceleration Engine' },
      { id: 'demand-discovery', label: 'Crypto Demand Discovery Engine' },
      { id: 'community-signals', label: 'Community Signal Command Center' },
      { id: 'competitive-radar', label: 'Competitive Displacement Radar' }
    ]
  },
  {
    id: 'launch-growth',
    name: 'Launch & Growth',
    path: '/ico-acceleration/launch-growth',
    icon: Rocket,
    description: 'Execution engines, listing operations & 7-phase playbook',
    submenus: [
      { id: 'growth-acceleration', label: 'Growth Acceleration Engine' },
      { id: 'kol-orchestration', label: 'KOL & Creator Orchestration' },
      { id: 'exchange-operations', label: 'Exchange & Listing Operations' },
      { id: 'airdrop-incentive', label: 'Airdrop & Incentive Engineering' },
      { id: 'omnichannel-performance', label: 'Omnichannel Performance Engine' },
      { id: 'revenue-acceleration', label: 'Revenue Acceleration Engine' },
      { id: 'customer-journey', label: 'Customer Journey Intelligence' },
      { id: 'institutional-bd', label: 'Institutional & BD Sales Engine' },
      { id: 'post-tge-retention', label: 'Post-TGE Retention Machine' },
      { id: 'seven-phase-playbook', label: 'Seven-Phase Launch Playbook', badge: 'Playbook' }
    ]
  },
  {
    id: 'solutions-engagement',
    name: 'Solutions & Engagement',
    path: '/ico-acceleration/solutions-engagement',
    icon: Layers,
    description: 'Segment packages, 6 commercial models & principles',
    submenus: [
      { id: 'layer1-layer2', label: 'Layer 1 & Layer 2 Protocols' },
      { id: 'defi-projects', label: 'DeFi Projects' },
      { id: 'web3-gaming', label: 'Web3 Gaming' },
      { id: 'centralized-exchanges', label: 'Centralized Exchanges' },
      { id: 'ico-tge-founders', label: 'ICO & TGE Founders' },
      { id: 'engagement-models', label: 'Six Engagement Models', badge: 'Models 1-6' },
      { id: 'commercial-principles', label: 'Commercial Principles' }
    ]
  },
  {
    id: 'trust-performance',
    name: 'Trust & Performance',
    path: '/ico-acceleration/trust-performance',
    icon: ShieldCheck,
    description: 'Compliance by Design, guardrails, SLAs & attribution',
    submenus: [
      { id: 'compliance-by-design', label: 'Compliance by Design' },
      { id: 'jurisdictional-guardrails', label: 'Jurisdictional Guardrails' },
      { id: 'claims-sla', label: 'Claims & Creative Review SLA' },
      { id: 'kyc-aml', label: 'KYC/AML-Ready Operations' },
      { id: 'qualified-lead-framework', label: 'Qualified Lead Framework' },
      { id: 'performance-revenue', label: 'Performance Revenue Engine' },
      { id: 'forecasting-attribution', label: 'Forecasting & Attribution' },
      { id: 'kpi-framework', label: 'KPI Framework' }
    ]
  },
  {
    id: 'sales-enablement',
    name: 'Sales Enablement',
    path: '/ico-acceleration/sales-enablement',
    icon: Target,
    description: 'SPICED discovery, objection handling & solution mapping',
    submenus: [
      { id: 'spiced-framework', label: 'SPICED Framework' },
      { id: 'segment-challenges', label: 'Segment-Specific Challenges' },
      { id: 'objection-handling', label: 'Objection Handling' },
      { id: 'solution-mapping', label: 'Solution Mapping Matrix' },
      { id: 'discovery-call-output', label: 'Discovery Call Output Template' }
    ]
  }
];

interface IcoSidebarProps {
  activePageId: string;
  activeSubmenuId?: string;
  onSubmenuClick?: (id: string) => void;
}

export default function IcoSidebar({
  activePageId,
  activeSubmenuId,
  onSubmenuClick
}: IcoSidebarProps) {
  const location = useLocation();
  const [expandedPages, setExpandedPages] = useState<Record<string, boolean>>({
    [activePageId]: true
  });
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  useEffect(() => {
    setExpandedPages((prev) => ({
      ...prev,
      [activePageId]: true
    }));
  }, [activePageId]);

  const toggleExpand = (pageId: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setExpandedPages((prev) => ({
      ...prev,
      [pageId]: !prev[pageId]
    }));
  };

  const handleSubmenuNav = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    setMobileDrawerOpen(false);
    if (onSubmenuClick) {
      onSubmenuClick(id);
    } else {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        window.history.pushState(null, '', `#${id}`);
      }
    }
  };

  const currentActivePage = icoNavStructure.find((p) => p.id === activePageId);

  return (
    <>
      {/* ── MOBILE / TABLET FLOATING JUMP BUTTON & BAR ── */}
      <div className="lg:hidden sticky top-16 z-30 bg-white/95 backdrop-blur-md border-b border-slate-200 px-4 py-2.5 flex items-center justify-between shadow-xs">
        <button
          onClick={() => setMobileDrawerOpen(true)}
          className="inline-flex items-center gap-2 text-xs font-bold text-slate-800 bg-slate-100 hover:bg-slate-200 px-3 py-1.5 rounded-lg transition-all"
        >
          <Menu className="w-4 h-4 text-blue-600" />
          <span>Menu & Submenus ({currentActivePage?.name})</span>
        </button>
        <Link
          to="/ico-acceleration"
          className="text-xs font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1"
        >
          <span>ICO Home</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </Link>
      </div>

      {/* ── MOBILE SLIDE-IN DRAWER ── */}
      {mobileDrawerOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex">
          <div
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs transition-opacity"
            onClick={() => setMobileDrawerOpen(false)}
          />
          <div className="relative w-80 max-w-[85vw] bg-white h-full shadow-2xl p-6 overflow-y-auto z-10 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-200">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-blue-600" />
                  <span className="font-extrabold text-sm text-slate-900 tracking-tight">ICO Acceleration</span>
                </div>
                <button
                  onClick={() => setMobileDrawerOpen(false)}
                  className="p-1 rounded-md text-slate-400 hover:text-slate-600 hover:bg-slate-100"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-4">
                {icoNavStructure.map((page, idx) => {
                  const PageIcon = page.icon;
                  const isActivePage = page.id === activePageId;
                  const isExpanded = !!expandedPages[page.id];

                  return (
                    <div key={page.id} className="rounded-xl border border-slate-200/80 overflow-hidden">
                      <div
                        className={`flex items-center justify-between p-3 cursor-pointer transition-colors ${
                          isActivePage ? 'bg-blue-50/80 text-blue-700 font-bold' : 'bg-slate-50 text-slate-800'
                        }`}
                      >
                        <Link
                          to={page.path}
                          onClick={() => setMobileDrawerOpen(false)}
                          className="flex items-center gap-2.5 flex-1 min-w-0"
                        >
                          <span className="text-[11px] font-mono font-bold text-slate-400">0{idx + 1}</span>
                          <PageIcon className={`w-4 h-4 shrink-0 ${isActivePage ? 'text-blue-600' : 'text-slate-500'}`} />
                          <span className="text-xs truncate">{page.name}</span>
                        </Link>
                        <button
                          onClick={(e) => toggleExpand(page.id, e)}
                          className="p-1 text-slate-400 hover:text-slate-700"
                        >
                          {isExpanded ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
                        </button>
                      </div>

                      {isExpanded && (
                        <div className="p-2 bg-white space-y-1 border-t border-slate-100">
                          {page.submenus.map((sub) => {
                            const isSubActive = isActivePage && activeSubmenuId === sub.id;
                            const className = `block text-xs py-1.5 px-3 rounded-md transition-colors ${
                              isSubActive
                                ? 'bg-blue-600 text-white font-bold'
                                : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                            }`;

                            return isActivePage ? (
                              <a
                                key={sub.id}
                                href={`#${sub.id}`}
                                onClick={(e) => handleSubmenuNav(sub.id, e)}
                                className={className}
                              >
                                {sub.label}
                              </a>
                            ) : (
                              <Link
                                key={sub.id}
                                to={`${page.path}#${sub.id}`}
                                onClick={() => setMobileDrawerOpen(false)}
                                className={className}
                              >
                                {sub.label}
                              </Link>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="pt-6 border-t border-slate-200 mt-6">
              <Link
                to="/book-consultation"
                onClick={() => setMobileDrawerOpen(false)}
                className="block text-center bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs py-3 rounded-xl shadow-md"
              >
                Discuss Your Launch Strategy
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* ── DESKTOP STICKY SIDEBAR (MATCHING PROFITMACHINES DESIGN SYSTEM) ── */}
      <aside className="hidden lg:block w-72 xl:w-80 shrink-0 sticky top-24 self-start max-h-[calc(100vh-7rem)] overflow-y-auto no-scrollbar">
        <div className="bg-white rounded-3xl border border-slate-200/90 shadow-sm p-5 space-y-5">
          
          {/* Sidebar Header Brand / Gating */}
          <div className="pb-4 border-b border-slate-100">
            <Link
              to="/ico-acceleration"
              className="group flex items-center justify-between text-xs font-mono font-bold uppercase tracking-wider text-slate-500 hover:text-blue-600 transition-colors"
            >
              <div className="flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                <span>ICO Acceleration Suite</span>
              </div>
              <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 transition-opacity" />
            </Link>
            <div className="text-[11px] text-slate-400 mt-1">
              Select page or subsection to navigate
            </div>
          </div>

          {/* 5 Main Menus in Exact Required Order */}
          <nav className="space-y-2">
            {icoNavStructure.map((page, idx) => {
              const PageIcon = page.icon;
              const isActivePage = page.id === activePageId;
              const isExpanded = !!expandedPages[page.id];

              return (
                <div
                  key={page.id}
                  className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                    isActivePage
                      ? 'border-blue-300 bg-blue-50/30 shadow-xs'
                      : 'border-slate-200/70 bg-white hover:border-slate-300'
                  }`}
                >
                  {/* Main Menu Header Row */}
                  <div
                    className={`flex items-center justify-between p-3.5 transition-colors ${
                      isActivePage
                        ? 'bg-blue-50/70 text-blue-900 font-bold'
                        : 'text-slate-800 hover:bg-slate-50/80'
                    }`}
                  >
                    <Link
                      to={page.path}
                      className="flex items-center gap-3 flex-1 min-w-0 group"
                    >
                      <div
                        className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                          isActivePage
                            ? 'bg-blue-600 text-white shadow-xs'
                            : 'bg-slate-100 text-slate-600 group-hover:bg-blue-50 group-hover:text-blue-600'
                        }`}
                      >
                        <PageIcon className="w-4 h-4" />
                      </div>
                      <div className="min-w-0">
                        <div className="flex items-center gap-1.5">
                          <span className="text-[10px] font-mono font-bold text-slate-400">0{idx + 1}</span>
                          <span className="text-xs font-extrabold tracking-tight truncate block">
                            {page.name}
                          </span>
                        </div>
                        <span className="text-[10px] font-normal text-slate-500 block truncate">
                          {page.submenus.length} subsections
                        </span>
                      </div>
                    </Link>

                    <button
                      onClick={(e) => toggleExpand(page.id, e)}
                      title={isExpanded ? 'Collapse submenus' : 'Expand submenus'}
                      className="p-1 rounded-md text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors ml-1"
                    >
                      {isExpanded ? (
                        <ChevronDown className="w-4 h-4 text-blue-600" />
                      ) : (
                        <ChevronRight className="w-4 h-4" />
                      )}
                    </button>
                  </div>

                  {/* Collapsible Submenus List */}
                  {isExpanded && (
                    <div className="px-3 pb-3 pt-1 border-t border-slate-100/90 bg-white space-y-1">
                      {page.submenus.map((sub, sIdx) => {
                        const isSubActive = isActivePage && activeSubmenuId === sub.id;

                        const className = `flex items-center justify-between text-[11px] py-1.5 px-2.5 rounded-lg transition-all group ${
                          isSubActive
                            ? 'bg-blue-600 text-white font-bold shadow-xs'
                            : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                        }`;

                        const innerContent = (
                          <>
                            <div className="flex items-center gap-2 truncate">
                              <span
                                className={`w-1.5 h-1.5 rounded-full shrink-0 ${
                                  isSubActive ? 'bg-white' : 'bg-slate-300 group-hover:bg-blue-500'
                                }`}
                              />
                              <span className="truncate">{sub.label}</span>
                            </div>
                            {sub.badge && (
                              <span
                                className={`text-[9px] font-mono px-1.5 py-0.5 rounded ${
                                  isSubActive
                                    ? 'bg-blue-500 text-white'
                                    : 'bg-slate-100 text-slate-500'
                                }`}
                              >
                                {sub.badge}
                              </span>
                            )}
                          </>
                        );

                        return isActivePage ? (
                          <a
                            key={sub.id}
                            href={`#${sub.id}`}
                            onClick={(e) => handleSubmenuNav(sub.id, e)}
                            className={className}
                          >
                            {innerContent}
                          </a>
                        ) : (
                          <Link
                            key={sub.id}
                            to={`${page.path}#${sub.id}`}
                            className={className}
                          >
                            {innerContent}
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          {/* Sidebar Footer Action */}
          <div className="pt-3 border-t border-slate-100 text-center">
            <Link
              to="/book-consultation"
              className="inline-flex items-center justify-center w-full gap-2 bg-slate-900 hover:bg-blue-600 text-white font-bold text-xs py-3 px-4 rounded-xl transition-all shadow-xs group"
            >
              <span>Discuss Your Launch</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>

        </div>
      </aside>
    </>
  );
}
