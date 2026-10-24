import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Search,
  Target,
  DollarSign,
  Network,
  ShieldCheck,
  Users,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Cpu,
  UserCheck,
  HelpCircle,
  TrendingUp,
  Compass,
  ArrowUpRight,
  ChevronDown,
  ChevronUp,
  Layers,
  ChevronRight
} from 'lucide-react';
import OfferingsSubNav from '../components/OfferingsSubNav';
import { discoveryAreas, DiscoveryArea } from '../../data/offeringsCleanContent';

const iconsMap: Record<string, any> = {
  Search,
  Target,
  DollarSign,
  Network,
  ShieldCheck,
  Users,
  Sparkles
};

export default function OfferingsDiscoveryStack() {
  const location = useLocation();
  const [activeAreaId, setActiveAreaId] = useState<string>(discoveryAreas[0].id);
  // Store open state for expandable accordion details per stage
  const [expandedStages, setExpandedStages] = useState<Record<string, boolean>>({
    [discoveryAreas[0].id]: true
  });

  // Handle hash scrolling
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const el = document.getElementById(id);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
          setActiveAreaId(id);
          setExpandedStages((prev) => ({ ...prev, [id]: true }));
        }, 150);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location.hash]);

  const toggleExpand = (id: string) => {
    setExpandedStages((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const expandAll = () => {
    const allOpen: Record<string, boolean> = {};
    discoveryAreas.forEach((a) => {
      allOpen[a.id] = true;
    });
    setExpandedStages(allOpen);
  };

  const collapseAll = () => {
    setExpandedStages({});
  };

  return (
    <div className="min-h-screen bg-slate-50/50 text-slate-900 pt-16 lg:pt-[72px]">
      {/* Hero Header with Dark Industry Image Background */}
      <section className="relative bg-slate-950 text-white py-16 lg:py-24 overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=2000&q=80"
            alt="Diagnostic Telemetry Architecture"
            className="w-full h-full object-cover object-center opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-900/80" />
          <div className="absolute inset-0 bg-radial-at-t from-blue-950/40 via-transparent to-transparent pointer-events-none" />
        </div>

        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/20 border border-blue-400/40 text-blue-300 text-xs font-semibold uppercase tracking-wider mb-5">
              <Compass className="w-3.5 h-3.5 text-blue-400" />
              <span>Connected Diagnostic Sequence</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.12] mb-5">
              The Seven Strategic Revenue Discovery Areas
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed font-normal mb-8">
              Explore our seven-stage diagnostic journey. Each stage investigates a foundational commercial dimension—from macro market whitespace to product-driven monetization—and identifies specific Strategy and AI deliverables to unlock trapped margin.
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={expandAll}
                className="text-xs font-bold text-white bg-blue-600 hover:bg-blue-500 px-4 py-2.5 rounded-xl transition-all shadow-md border border-blue-400/40"
              >
                Expand All Stages
              </button>
              <button
                onClick={collapseAll}
                className="text-xs font-semibold text-slate-300 hover:text-white bg-white/10 hover:bg-white/20 px-4 py-2.5 rounded-xl transition-all border border-white/20"
              >
                Collapse All
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content: Two Column Layout with Sticky Left Jump Index + Right Vertical Timeline */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Sticky Timeline Index (Desktop) */}
          <div className="hidden lg:block lg:col-span-4">
            <div className="sticky top-36 bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-xs">
              {/* Non-people telemetry visual banner */}
              <div className="h-28 w-full relative overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80"
                  alt="Telemetry and Revenue Diagnostics"
                  className="w-full h-full object-cover opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/50 to-transparent" />
                <div className="absolute bottom-2 left-5 right-5">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-blue-700 font-bold bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
                    7 Diagnostic Layers
                  </span>
                </div>
              </div>

              <div className="p-5 pt-2 space-y-1">
                <div className="pb-3 mb-2 border-b border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold">
                    Sequential Roadmap
                  </span>
                  <span className="text-xs text-slate-500 font-semibold">L1–L7</span>
                </div>

              {discoveryAreas.map((area, idx) => {
                const isActive = activeAreaId === area.id;
                const Icon = iconsMap[area.iconName] || Search;
                return (
                  <a
                    key={area.id}
                    href={`#${area.id}`}
                    onClick={() => {
                      setActiveAreaId(area.id);
                      setExpandedStages((prev) => ({ ...prev, [area.id]: true }));
                    }}
                    className={`flex items-center gap-3 p-3 rounded-xl transition-all text-xs font-medium ${
                      isActive
                        ? 'bg-blue-50 text-blue-700 font-bold border border-blue-100'
                        : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900 border border-transparent'
                    }`}
                  >
                    <div
                      className={`w-6 h-6 rounded-lg flex items-center justify-center font-mono text-[11px] shrink-0 font-bold ${
                        isActive ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-500'
                      }`}
                    >
                      0{idx + 1}
                    </div>
                    <span className="truncate">{area.shortName}</span>
                    <ChevronRight className="w-3.5 h-3.5 ml-auto opacity-50" />
                  </a>
                );
              })}

              <div className="pt-5 mt-4 border-t border-slate-100">
                <Link
                  to="/offerings/families"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-700"
                >
                  <span>Browse 34 Service Definitions</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>

          {/* Right Column: The Vertical Timeline */}
          <div className="lg:col-span-8">
            <div className="relative pl-6 sm:pl-10 space-y-12 before:absolute before:left-2.5 sm:before:left-4 before:top-4 before:bottom-4 before:w-0.5 before:bg-slate-200">
              {discoveryAreas.map((area, idx) => {
                const Icon = iconsMap[area.iconName] || Search;
                const isExpanded = !!expandedStages[area.id];

                return (
                  <div
                    key={area.id}
                    id={area.id}
                    className="scroll-mt-36 relative"
                  >
                    {/* Timeline Node Marker */}
                    <div className="absolute -left-6 sm:-left-10 top-1 w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-white border-2 border-blue-600 flex items-center justify-center text-blue-600 font-mono text-[11px] sm:text-xs font-bold shadow-xs">
                      {idx + 1}
                    </div>

                    {/* Stage Card */}
                    <div className="rounded-3xl bg-white border border-slate-200 shadow-xs hover:border-slate-300 transition-all overflow-hidden">
                      {/* Stage Summary Header */}
                      <div className="p-6 sm:p-8">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-3">
                          <div className="flex items-center gap-2">
                            <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-100">
                              Stage 0{idx + 1}
                            </span>
                            <span className="text-xs text-slate-400 font-mono">• {area.shortName}</span>
                          </div>

                          <Link
                            to={`/offerings/families#${area.relatedFamilySlug}`}
                            className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-blue-600 self-start sm:self-auto"
                          >
                            <span>Matching Services</span>
                            <ArrowUpRight className="w-3.5 h-3.5 text-blue-600" />
                          </Link>
                        </div>

                        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-3">
                          {area.name}
                        </h2>

                        {/* Plain Explanation */}
                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                          {area.plainEnglishExplanation}
                        </p>

                        <div className="text-xs text-slate-500 font-medium">
                          <strong className="text-slate-700">What It Examines:</strong> {area.investigates}
                        </div>

                        {/* Expandable Solutions Trigger Button */}
                        <div className="mt-6 pt-5 border-t border-slate-100 flex items-center justify-between">
                          <button
                            onClick={() => toggleExpand(area.id)}
                            className="inline-flex items-center gap-2 text-xs font-bold text-blue-600 hover:text-blue-700 group"
                          >
                            <span>{isExpanded ? 'Hide Delivery Details & Decisions' : 'Reveal Strategy & AI Deliverables'}</span>
                            {isExpanded ? (
                              <ChevronUp className="w-4 h-4" />
                            ) : (
                              <ChevronDown className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
                            )}
                          </button>

                          <span className="text-[11px] font-semibold text-slate-400">
                            {area.consultingDelivers.length} Consulting + {area.aiImplements.length} AI Deliverables
                          </span>
                        </div>
                      </div>

                      {/* Expandable Panel */}
                      {isExpanded && (
                        <div className="p-6 sm:p-8 bg-slate-50 border-t border-slate-200/80 grid grid-cols-1 md:grid-cols-3 gap-6 transition-all animate-fadeIn">
                          {/* Consulting Deliverables */}
                          <div className="rounded-2xl bg-white p-5 border border-blue-100 shadow-2xs">
                            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-900 mb-3">
                              <UserCheck className="w-4 h-4 text-blue-600" />
                              <span>Strategy & Consulting</span>
                            </div>
                            <ul className="space-y-2">
                              {area.consultingDelivers.map((item, dIdx) => (
                                <li key={dIdx} className="flex items-start gap-2 text-xs text-slate-700">
                                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* AI Automation Deliverables */}
                          <div className="rounded-2xl bg-white p-5 border border-indigo-100 shadow-2xs">
                            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-indigo-900 mb-3">
                              <Cpu className="w-4 h-4 text-indigo-600" />
                              <span>AI & Automation</span>
                            </div>
                            <ul className="space-y-2">
                              {area.aiImplements.map((item, dIdx) => (
                                <li key={dIdx} className="flex items-start gap-2 text-xs text-slate-700">
                                  <CheckCircle2 className="w-3.5 h-3.5 text-indigo-600 shrink-0 mt-0.5" />
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Decisions Informed */}
                          <div className="rounded-2xl bg-white p-5 border border-emerald-100 shadow-2xs">
                            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-900 mb-3">
                              <TrendingUp className="w-4 h-4 text-emerald-600" />
                              <span>Decisions Informed</span>
                            </div>
                            <ul className="space-y-2">
                              {area.decisionsInformed.map((item, dIdx) => (
                                <li key={dIdx} className="flex items-start gap-2 text-xs text-slate-700">
                                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0 mt-1.5"></span>
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Callout */}
        <div className="mt-20 bg-slate-900 text-white rounded-3xl p-8 sm:p-12 text-center max-w-4xl mx-auto shadow-xl">
          <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-4">
            Pinpoint Your Revenue Intervention Priority
          </h3>
          <p className="text-slate-300 text-base sm:text-lg mb-8 max-w-2xl mx-auto">
            Our revenue architects conduct a rapid diagnostic review across all seven stages to map your current pipeline leakage and identify your highest-return starting point.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/book-consultation"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold px-6 py-3.5 rounded-xl transition-all shadow-md text-sm"
            >
              <span>Schedule Diagnostic Session</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/offerings/families"
              className="inline-flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold px-6 py-3.5 rounded-xl transition-all text-sm border border-slate-700"
            >
              <span>View Service Families</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
