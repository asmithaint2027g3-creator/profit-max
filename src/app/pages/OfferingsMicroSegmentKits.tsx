import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Box,
  Clock,
  UserCheck,
  Cpu,
  Layers,
  ArrowRight,
  CheckCircle2,
  AlertCircle,
  Filter,
  Check,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import OfferingsSubNav from '../components/OfferingsSubNav';
import { microSegmentKits, MicroSegmentKit } from '../../data/offeringsCleanContent';

export default function OfferingsMicroSegmentKits() {
  const [selectedTrackFilter, setSelectedTrackFilter] = useState<'All' | 'Strategy & Consulting' | 'AI & Automation' | 'Hybrid (Consulting + AI)'>('All');
  // Track open state for services per kit card
  const [expandedKits, setExpandedKits] = useState<Record<string, boolean>>({});

  const toggleKitExpand = (id: string) => {
    setExpandedKits((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const filteredKits = microSegmentKits.filter((kit) => {
    if (selectedTrackFilter === 'All') return true;
    return kit.deliveryTrack === selectedTrackFilter;
  });

  return (
    <div className="min-h-screen bg-slate-50/50 text-slate-900 pt-16 lg:pt-[72px]">
      {/* Header Banner with Dark Industry Image Background */}
      <section className="relative bg-slate-950 text-white py-16 lg:py-24 overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=2000&q=80"
            alt="Hardware Engineering Blueprint"
            className="w-full h-full object-cover object-center opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-900/80" />
          <div className="absolute inset-0 bg-radial-at-t from-blue-950/40 via-transparent to-transparent pointer-events-none" />
        </div>

        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/20 border border-blue-400/40 text-blue-300 text-xs font-semibold uppercase tracking-wider mb-4">
                <Box className="w-3.5 h-3.5 text-blue-400" />
                <span>Curated Engagement Packages</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.12] mb-4">
                Micro-Segment Discovery Kits
              </h1>
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal mb-8">
                Pre-packaged, fixed-scope fast starts for high-frequency micro-segment bottlenecks. Each kit combines verified service capabilities into a defined 3 to 10-week sprint to eliminate scoping delays and start delivery inside two weeks.
              </p>

              {/* Track Filter Pills */}
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono mr-2 flex items-center gap-1.5">
                  <Filter className="w-3.5 h-3.5 text-blue-400" /> Filter by Delivery:
                </span>
                {(['All', 'Strategy & Consulting', 'AI & Automation', 'Hybrid (Consulting + AI)'] as const).map((track) => (
                  <button
                    key={track}
                    onClick={() => setSelectedTrackFilter(track)}
                    className={`text-xs font-semibold px-3.5 py-2 rounded-xl transition-all ${
                      selectedTrackFilter === track
                        ? 'bg-blue-600 text-white font-bold shadow-md border border-blue-400/40'
                        : 'bg-slate-900/80 text-slate-300 hover:bg-slate-800 border border-slate-700'
                    }`}
                  >
                    {track}
                  </button>
                ))}
              </div>
            </div>

            {/* Non-people visual framework card */}
            <div className="hidden lg:block lg:col-span-4">
              <div className="rounded-3xl bg-slate-900 overflow-hidden border border-slate-800 shadow-xl relative">
                <div className="h-44 w-full relative overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80"
                    alt="Hardware Architecture Blueprint"
                    className="w-full h-full object-cover opacity-50"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-blue-400 font-bold bg-slate-900/80 px-2 py-0.5 rounded border border-slate-700">
                      Fixed-Scope Sprints
                    </span>
                    <span className="text-[10px] font-mono text-emerald-400">8 Curated Kits</span>
                  </div>
                </div>
                <div className="p-4 text-xs text-slate-300">
                  Rapid deployment architectures designed to convert uncertainty into immediate pipeline.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Kits Comparison Grid */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8">
          {filteredKits.map((kit) => {
            const isConsulting = kit.deliveryTrack === 'Strategy & Consulting';
            const isAutomation = kit.deliveryTrack === 'AI & Automation';
            const isHybrid = kit.deliveryTrack === 'Hybrid (Consulting + AI)';
            const isExpanded = !!expandedKits[kit.id];

            return (
              <div
                key={kit.id}
                id={kit.id}
                className="bg-white rounded-3xl border border-slate-200 shadow-xs hover:border-slate-300 hover:shadow-md transition-all p-6 sm:p-9 flex flex-col justify-between"
              >
                <div>
                  {/* Top Badges Bar */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-5">
                    <span
                      className={`inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1 rounded-full ${
                        isConsulting
                          ? 'bg-blue-50 text-blue-700 border border-blue-100'
                          : isAutomation
                          ? 'bg-indigo-50 text-indigo-700 border border-indigo-100'
                          : 'bg-purple-50 text-purple-700 border border-purple-100'
                      }`}
                    >
                      {isConsulting ? (
                        <UserCheck className="w-3.5 h-3.5 text-blue-600" />
                      ) : isAutomation ? (
                        <Cpu className="w-3.5 h-3.5 text-indigo-600" />
                      ) : (
                        <Layers className="w-3.5 h-3.5 text-purple-600" />
                      )}
                      <span>{kit.deliveryTrack}</span>
                    </span>

                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 bg-slate-100 px-3 py-1 rounded-full font-mono">
                      <Clock className="w-3.5 h-3.5 text-slate-500" />
                      {kit.duration}
                    </span>
                  </div>

                  {/* Title & Audience */}
                  <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight mb-2">
                    {kit.name}
                  </h2>
                  <div className="text-xs text-slate-500 font-medium mb-4">
                    <strong className="text-slate-800">Designed For:</strong> {kit.targetAudience}
                  </div>

                  {/* Business Challenge Box */}
                  <div className="mb-4 p-4 rounded-2xl bg-amber-50/70 border border-amber-200/80">
                    <div className="flex items-start gap-2.5 text-xs text-amber-950">
                      <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                      <div>
                        <span className="font-bold block mb-0.5">The Business Problem:</span>
                        <p className="text-amber-900 leading-relaxed font-normal">
                          {kit.businessProblem}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* What Engagement Examines */}
                  <div className="mb-5">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 font-mono block mb-1">
                      What the Engagement Examines:
                    </span>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                      {kit.whatItExamines}
                    </p>
                  </div>

                  {/* Interactive Control to Reveal Included Services */}
                  <div className="pt-4 border-t border-slate-100">
                    <button
                      onClick={() => toggleKitExpand(kit.id)}
                      className="inline-flex items-center justify-between w-full text-xs font-bold text-blue-600 hover:text-blue-700 py-1"
                    >
                      <span>
                        {isExpanded
                          ? 'Hide Included Services'
                          : `Reveal Included Services (${kit.includedServices.length} Capabilities)`}
                      </span>
                      {isExpanded ? (
                        <ChevronUp className="w-4 h-4 text-blue-600" />
                      ) : (
                        <ChevronDown className="w-4 h-4" />
                      )}
                    </button>

                    {/* Expandable Services Drawer */}
                    {isExpanded && (
                      <div className="mt-3 space-y-2 pt-2 animate-fadeIn">
                        {kit.includedServices.map((serviceName, sIdx) => (
                          <div
                            key={sIdx}
                            className="flex items-start gap-2 text-xs text-slate-700 bg-slate-50 p-2.5 rounded-xl border border-slate-100"
                          >
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                            <span className="font-semibold">{serviceName}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Footer Action CTA */}
                <div className="pt-6 mt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <span className="text-[11px] text-slate-400 text-center sm:text-left">
                    Includes executive findings & execution roadmap
                  </span>
                  <Link
                    to={`/book-consultation?kit=${kit.id}`}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-blue-600 text-white font-bold px-6 py-2.5 rounded-xl transition-all shadow-2xs text-xs sm:text-sm"
                  >
                    <span>{kit.ctaText}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Informative Guidance Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 text-xs sm:text-sm text-slate-600 leading-relaxed max-w-4xl mx-auto shadow-2xs">
          <strong className="text-slate-900 block font-semibold mb-1 text-sm sm:text-base">
            Transparent Engagement Scoping:
          </strong>
          Our discovery kits are fixed-scope diagnostic sprints. Clicking &ldquo;Discuss This Engagement&rdquo; initiates a confidential consultation with our revenue architecture team to review feasibility, match micro-segment economics, and verify fit before any formal agreement is executed.
        </div>
      </div>
    </div>
  );
}
