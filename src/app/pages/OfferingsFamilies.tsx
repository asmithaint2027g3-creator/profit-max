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
  Filter,
  CheckCircle2,
  Cpu,
  UserCheck,
  AlertCircle,
  HelpCircle,
  Layers,
  ChevronRight,
  ChevronDown,
  ChevronUp,
  BookOpen,
} from 'lucide-react';
import { serviceFamilies, ServiceFamily, ServiceOffering } from '../../data/offeringsCleanContent';

const iconsMap: Record<string, any> = {
  Search,
  Target,
  DollarSign,
  Network,
  ShieldCheck,
  Users,
  Sparkles
};

export default function OfferingsFamilies() {
  const location = useLocation();
  const [selectedFamilySlug, setSelectedFamilySlug] = useState<string>(serviceFamilies[0].slug);
  const [selectedTrackFilter, setSelectedTrackFilter] = useState<'All' | 'Strategy & Consulting' | 'AI & Automation'>('All');
  const [expandedServiceIdx, setExpandedServiceIdx] = useState<number | null>(null);

  // Handle hash scrolling to auto-select family
  useEffect(() => {
    if (location.hash) {
      const slug = location.hash.replace('#', '');
      const match = serviceFamilies.find((f) => f.slug === slug || f.id === slug);
      if (match) {
        setSelectedFamilySlug(match.slug);
      }
    }
  }, [location.hash]);

  const activeFamily = serviceFamilies.find((f) => f.slug === selectedFamilySlug) || serviceFamilies[0];
  const ActiveIcon = iconsMap[activeFamily.iconName] || Search;

  const filteredOfferings = activeFamily.offerings.filter((offering) => {
    if (selectedTrackFilter === 'All') return true;
    return offering.track === selectedTrackFilter;
  });

  return (
    <div className="min-h-screen bg-slate-50/50 text-slate-900 pt-16 lg:pt-[72px]">
      {/* Header Banner with Dark Industry Image Background */}
      <section className="relative bg-slate-950 text-white py-16 lg:py-24 overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=2000&q=80"
            alt="Enterprise Technology Grid"
            className="w-full h-full object-cover object-center opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-950/70 to-slate-900/50" />
          <div className="absolute inset-0 bg-radial-at-t from-blue-950/40 via-transparent to-transparent pointer-events-none" />
        </div>

        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/20 border border-blue-400/40 text-blue-300 text-xs font-semibold uppercase tracking-wider mb-4">
              <BookOpen className="w-3.5 h-3.5 text-blue-400" />
              <span>Interactive Service Catalogue</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.12] mb-4">
              Comprehensive Service Catalogue
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              Browse all 34 verified commercial capabilities organized across seven specialized service families. Select a family from the catalogue navigation to inspect individual services, plain-English scopes, and decision outputs.
            </p>
          </div>
        </div>
      </section>

      {/* Main Interactive Master-Detail Catalogue */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
        {/* Mobile Family Selector Dropdown */}
        <div className="lg:hidden mb-6 bg-white p-4 rounded-2xl border border-slate-200 shadow-xs">
          <label className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-2 font-mono">
            Select Service Family:
          </label>
          <select
            value={selectedFamilySlug}
            onChange={(e) => {
              setSelectedFamilySlug(e.target.value);
              setExpandedServiceIdx(null);
            }}
            className="w-full text-sm font-semibold p-3 rounded-xl border border-slate-300 bg-slate-50 text-slate-900 focus:outline-hidden focus:border-blue-500"
          >
            {serviceFamilies.map((fam, idx) => (
              <option key={fam.id} value={fam.slug}>
                0{idx + 1} · {fam.name} ({fam.offerings.length} services)
              </option>
            ))}
          </select>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
          {/* Desktop Left Side Navigation */}
          <div className="hidden lg:block lg:col-span-4 xl:col-span-4">
            <div className="sticky top-36 bg-white rounded-3xl border border-slate-200 p-5 shadow-xs space-y-1">
              <div className="px-3 pb-3 mb-2 border-b border-slate-100 flex items-center justify-between">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
                  7 Service Families
                </span>
                <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full">
                  34 Total Services
                </span>
              </div>

              {serviceFamilies.map((fam, idx) => {
                const isSelected = fam.slug === selectedFamilySlug;
                const FamIcon = iconsMap[fam.iconName] || Search;

                return (
                  <button
                    key={fam.id}
                    onClick={() => {
                      setSelectedFamilySlug(fam.slug);
                      setExpandedServiceIdx(null);
                    }}
                    className={`w-full text-left p-3.5 rounded-2xl transition-all flex items-center gap-3.5 ${
                      isSelected
                        ? 'bg-slate-900 text-white shadow-md'
                        : 'text-slate-700 hover:bg-slate-50 hover:text-slate-900'
                    }`}
                  >
                    <div
                      className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 ${
                        isSelected ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-600'
                      }`}
                    >
                      <FamIcon className="w-4 h-4" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-1.5">
                        <span className={`text-[10px] font-mono font-bold ${isSelected ? 'text-blue-300' : 'text-slate-400'}`}>
                          0{idx + 1}
                        </span>
                        <div className={`text-xs font-bold truncate ${isSelected ? 'text-white' : 'text-slate-900'}`}>
                          {fam.name}
                        </div>
                      </div>
                      <div className={`text-[11px] truncate ${isSelected ? 'text-slate-300' : 'text-slate-500'}`}>
                        {fam.offerings.length} individual capabilities
                      </div>
                    </div>
                    <ChevronRight className={`w-4 h-4 shrink-0 transition-transform ${isSelected ? 'text-blue-400 translate-x-0.5' : 'text-slate-300'}`} />
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Main Editorial Content Panel */}
          <div className="lg:col-span-8 xl:col-span-8">
            <div className="bg-white rounded-3xl border border-slate-200 shadow-xs overflow-hidden">
              {/* Non-people visual banner */}
              <div className="h-28 w-full relative overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80"
                  alt="Global Capability Network"
                  className="w-full h-full object-cover opacity-30"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/70 to-transparent" />
                <div className="absolute top-4 left-6">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-blue-700 bg-blue-50/90 px-2.5 py-0.5 rounded-full border border-blue-200 shadow-2xs">
                    Active Family Focus
                  </span>
                </div>
              </div>

              {/* Panel Editorial Header */}
              <div className="p-6 sm:p-10 pt-2 border-b border-slate-100">
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-6 mb-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-blue-600 text-white flex items-center justify-center shrink-0 shadow-sm mt-1">
                      <ActiveIcon className="w-6 h-6" />
                    </div>
                    <div>
                      <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                        {activeFamily.name}
                      </h2>
                    </div>
                  </div>

                  <Link
                    to={`/offerings/discovery-stack#${activeFamily.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-700 bg-white hover:bg-slate-100 px-3.5 py-2 rounded-xl transition-colors border border-slate-200 shadow-2xs self-start"
                  >
                    <span>Related Discovery Stage</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-blue-600" />
                  </Link>
                </div>

                <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-3xl mb-6">
                  {activeFamily.purpose}
                </p>

                {/* Problems Solved Pills */}
                <div className="pt-4 border-t border-slate-200/60">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-2 font-mono">
                    Key Problems Solved:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {activeFamily.problemsSolved.map((prob, pIdx) => (
                      <span
                        key={pIdx}
                        className="inline-flex items-center gap-1.5 text-xs text-slate-700 bg-slate-50 border border-slate-200 px-3 py-1.5 rounded-lg"
                      >
                        <AlertCircle className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                        <span>{prob}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Panel Controls: Track Filter */}
              <div className="px-6 sm:px-10 py-4 bg-slate-50/50 border-b border-slate-100 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold">
                    Filter Track:
                  </span>
                  <div className="flex items-center gap-1.5">
                    {(['All', 'Strategy & Consulting', 'AI & Automation'] as const).map((track) => (
                      <button
                        key={track}
                        onClick={() => setSelectedTrackFilter(track)}
                        className={`text-xs font-semibold px-3 py-1.5 rounded-lg transition-all ${
                          selectedTrackFilter === track
                            ? 'bg-slate-900 text-white shadow-2xs'
                            : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                        }`}
                      >
                        {track}
                      </button>
                    ))}
                  </div>
                </div>

                <span className="text-xs text-slate-400 font-medium">
                  Showing {filteredOfferings.length} of {activeFamily.offerings.length} services
                </span>
              </div>

              {/* Individual Services List (Clean Rows & Expandable Details) */}
              <div className="p-6 sm:p-10 divide-y divide-slate-100">
                {filteredOfferings.length === 0 ? (
                  <div className="text-center py-12 text-slate-400 text-sm">
                    No services in this family match the selected delivery track.
                  </div>
                ) : (
                  filteredOfferings.map((service, sIdx) => {
                    const isConsulting = service.track === 'Strategy & Consulting';
                    const isExpanded = expandedServiceIdx === sIdx;

                    return (
                      <div
                        key={sIdx}
                        className="py-5 first:pt-0 last:pb-0 transition-colors"
                      >
                        <div
                          onClick={() => setExpandedServiceIdx(isExpanded ? null : sIdx)}
                          className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 cursor-pointer group"
                        >
                          <div className="flex items-start sm:items-center gap-3">
                            <span
                              className={`inline-flex items-center gap-1 text-[11px] font-bold px-2.5 py-0.5 rounded-full shrink-0 ${
                                isConsulting
                                  ? 'bg-blue-50 text-blue-700 border border-blue-100'
                                  : 'bg-indigo-50 text-indigo-700 border border-indigo-100'
                              }`}
                            >
                              {isConsulting ? (
                                <UserCheck className="w-3 h-3 text-blue-600" />
                              ) : (
                                <Cpu className="w-3 h-3 text-indigo-600" />
                              )}
                              <span>{service.track}</span>
                            </span>

                            <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                              {service.name}
                            </h3>
                          </div>

                          <div className="flex items-center gap-2 self-end sm:self-auto text-xs text-slate-400 group-hover:text-blue-600 transition-colors">
                            <span className="font-medium hidden sm:inline">
                              {isExpanded ? 'Less' : 'Details'}
                            </span>
                            {isExpanded ? (
                              <ChevronUp className="w-4 h-4 text-blue-600" />
                            ) : (
                              <ChevronDown className="w-4 h-4" />
                            )}
                          </div>
                        </div>

                        {/* Service Summary Paragraph */}
                        <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed pr-6">
                          {service.summary}
                        </p>

                        {/* Expandable Decision Context */}
                        {isExpanded && (
                          <div className="mt-4 pt-4 border-t border-dashed border-slate-200 grid grid-cols-1 md:grid-cols-2 gap-4 text-xs animate-fadeIn">
                            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                              <span className="font-bold text-slate-800 block mb-1">
                                Decisions & Activities Supported:
                              </span>
                              <p className="text-slate-600 leading-relaxed">
                                {service.decisionsSupported}
                              </p>
                            </div>

                            {service.plainEnglishTerm && (
                              <div className="p-3.5 rounded-xl bg-amber-50/70 border border-amber-100">
                                <span className="font-bold text-amber-950 block mb-1">
                                  Plain English Concept:
                                </span>
                                <p className="text-amber-900 leading-relaxed font-medium">
                                  {service.plainEnglishTerm}
                                </p>
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    );
                  })
                )}
              </div>
            </div>

            {/* Bottom Sector Hint Box */}
            <div className="mt-8 p-6 rounded-2xl bg-white border border-slate-200 shadow-2xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs font-bold text-slate-900 block">
                  Wondering how these services apply to your specific business model?
                </span>
                <span className="text-xs text-slate-500">
                  Explore tailored mappings for Services, Retail & Commerce, SaaS Platforms, and Adjacent sectors.
                </span>
              </div>
              <Link
                to="/offerings/segments"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-700 shrink-0"
              >
                <span>View Solutions by Business Type</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
