import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Briefcase,
  ShoppingBag,
  Building2,
  Sliders,
  HelpCircle,
  ArrowRight,
  UserCheck,
  Cpu,
  CheckCircle2,
  Filter,
  Sparkles,
  ChevronRight,
  Search
} from 'lucide-react';
import OfferingsSubNav from '../components/OfferingsSubNav';
import { businessSegments, BusinessSegmentCategory, SubSegmentDetail } from '../../data/offeringsCleanContent';

const sectorIcons: Record<string, any> = {
  'services-companies': Briefcase,
  'retail-commerce': ShoppingBag,
  'platform-companies': Building2,
  'adjacent-segments': Sliders
};

export default function OfferingsSegments() {
  const [activeCategoryId, setActiveCategoryId] = useState<string>(businessSegments[0].id);
  const [selectedSubIndex, setSelectedSubIndex] = useState<number>(0);
  const [searchQuery, setSearchQuery] = useState<string>('');

  const currentCategory = businessSegments.find((b) => b.id === activeCategoryId) || businessSegments[0];

  const filteredSubSegments = currentCategory.subSegments.filter((sub) => {
    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase();
    return (
      sub.title.toLowerCase().includes(q) ||
      sub.examples.toLowerCase().includes(q) ||
      sub.businessChallenge.toLowerCase().includes(q) ||
      sub.discoveryQuestion.toLowerCase().includes(q)
    );
  });

  const selectedSub: SubSegmentDetail = filteredSubSegments[selectedSubIndex] || filteredSubSegments[0] || currentCategory.subSegments[0];
  const CategoryIcon = sectorIcons[currentCategory.id] || Briefcase;

  return (
    <div className="min-h-screen bg-slate-50/50 text-slate-900 pt-16 lg:pt-[72px]">
      {/* Header Banner with Dark Industry Image Background */}
      <section className="relative bg-slate-950 text-white py-16 lg:py-24 overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=2000&q=80"
            alt="Enterprise Corporate Architecture"
            className="w-full h-full object-cover object-center opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-900/80" />
          <div className="absolute inset-0 bg-radial-at-t from-blue-950/40 via-transparent to-transparent pointer-events-none" />
        </div>

        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/20 border border-blue-400/40 text-blue-300 text-xs font-semibold uppercase tracking-wider mb-4">
              <Briefcase className="w-3.5 h-3.5 text-blue-400" />
              <span>Interactive Segment Explorer</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.12] mb-4">
              Solutions by Business Type
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              Commercial strategies must reflect real unit economics. Select your industry category below to inspect common margin bottlenecks, source-verified discovery questions, and recommended service priorities.
            </p>
          </div>
        </div>
      </section>

      {/* Main Interactive Segment Explorer */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
        {/* Category Sector Tabs */}
        <div className="flex flex-wrap items-center gap-2.5 mb-8">
          {businessSegments.map((cat) => {
            const Icon = sectorIcons[cat.id] || Briefcase;
            const isActive = cat.id === activeCategoryId;
            return (
              <button
                key={cat.id}
                onClick={() => {
                  setActiveCategoryId(cat.id);
                  setSelectedSubIndex(0);
                  setSearchQuery('');
                }}
                className={`flex items-center gap-2.5 px-5 py-3 rounded-2xl text-xs sm:text-sm font-bold transition-all ${
                  isActive
                    ? 'bg-slate-900 text-white shadow-md'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200/90'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-blue-400' : 'text-slate-400'}`} />
                <span>{cat.title}</span>
                <span
                  className={`text-[10px] px-2 py-0.5 rounded-full font-mono ${
                    isActive ? 'bg-slate-800 text-slate-300' : 'bg-slate-100 text-slate-500'
                  }`}
                >
                  {cat.subSegments.length}
                </span>
              </button>
            );
          })}
        </div>

        {/* Explorer Workspace */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Subsegment Navigation List */}
          <div className="lg:col-span-5 xl:col-span-4 space-y-4">
            <div className="bg-white rounded-3xl border border-slate-200 p-5 shadow-xs">
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
                  Documented Subsegments
                </span>
                <span className="text-xs font-semibold text-slate-500">
                  {filteredSubSegments.length} Available
                </span>
              </div>

              {/* In-Category Search */}
              <div className="relative mb-3">
                <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-2.5" />
                <input
                  type="text"
                  placeholder="Filter subsegment or issue..."
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setSelectedSubIndex(0);
                  }}
                  className="w-full text-xs pl-8 pr-3 py-2 rounded-xl border border-slate-200 bg-slate-50/70 focus:outline-hidden focus:border-blue-500"
                />
              </div>

              {/* Subsegment Button List */}
              <div className="space-y-1.5 max-h-[520px] overflow-y-auto pr-1 no-scrollbar">
                {filteredSubSegments.length === 0 ? (
                  <div className="py-6 text-center text-xs text-slate-400">
                    No subsegments match your search.
                  </div>
                ) : (
                  filteredSubSegments.map((sub, idx) => {
                    const isSelected = sub.title === selectedSub?.title;
                    return (
                      <button
                        key={idx}
                        onClick={() => setSelectedSubIndex(idx)}
                        className={`w-full text-left p-3.5 rounded-2xl transition-all flex items-center justify-between gap-3 ${
                          isSelected
                            ? 'bg-blue-50/80 border border-blue-200 text-blue-950 font-bold shadow-2xs'
                            : 'text-slate-700 hover:bg-slate-50 border border-transparent'
                        }`}
                      >
                        <div className="min-w-0 flex-1">
                          <div className="text-xs sm:text-sm font-bold truncate">
                            {sub.title}
                          </div>
                          <div className="text-[11px] text-slate-500 truncate font-normal">
                            {sub.examples}
                          </div>
                        </div>
                        <ChevronRight className={`w-4 h-4 shrink-0 ${isSelected ? 'text-blue-600' : 'text-slate-300'}`} />
                      </button>
                    );
                  })
                )}
              </div>
            </div>

            {/* Category Overview Note */}
            <div className="p-5 rounded-2xl bg-slate-100/70 border border-slate-200 text-xs text-slate-600 leading-relaxed">
              <strong className="text-slate-800 block mb-1">Sector Context:</strong>
              {currentCategory.overview}
            </div>
          </div>

          {/* Right Column: Contextual Inspection Panel for Selected Subsegment */}
          <div className="lg:col-span-7 xl:col-span-8">
            {selectedSub ? (
              <div className="bg-white rounded-3xl border border-slate-200 shadow-xs overflow-hidden">
                {/* Header with non-people architectural visual banner */}
                <div className="h-32 w-full relative overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=80"
                    alt="Corporate Business Architecture"
                    className="w-full h-full object-cover opacity-30"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent" />
                  <div className="absolute top-4 left-6 right-6 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-700 bg-blue-50/90 px-3 py-1 rounded-full border border-blue-200 self-start shadow-2xs">
                      {currentCategory.title} Focus
                    </span>

                    <span className="text-[11px] text-slate-600 font-medium italic bg-white/80 px-2.5 py-0.5 rounded-md border border-slate-200 self-start sm:self-auto">
                      Archetypes: {selectedSub.examples}
                    </span>
                  </div>
                </div>

                <div className="p-6 sm:p-10 pt-2 border-b border-slate-100">
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-2">
                    {selectedSub.title}
                  </h2>
                </div>

                {/* Core Details Body */}
                <div className="p-6 sm:p-10 space-y-8">
                  {/* Business Challenge */}
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono block mb-2">
                      Specific Business Challenge:
                    </span>
                    <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal bg-slate-50 p-4 rounded-2xl border border-slate-100">
                      {selectedSub.businessChallenge}
                    </p>
                  </div>

                  {/* Delivery Track Emphasis Bar */}
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono block mb-3">
                      Recommended Track Balance:
                    </span>
                    <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                      <div className="flex items-center justify-between text-xs font-bold text-slate-700 mb-2">
                        <span className="flex items-center gap-1.5 text-blue-700">
                          <UserCheck className="w-3.5 h-3.5 text-blue-600" />
                          Strategy & Consulting: {selectedSub.consultingShare}%
                        </span>
                        <span className="flex items-center gap-1.5 text-indigo-700">
                          <Cpu className="w-3.5 h-3.5 text-indigo-600" />
                          AI & Automation: {selectedSub.aiShare}%
                        </span>
                      </div>
                      <div className="w-full h-2.5 bg-slate-200 rounded-full overflow-hidden flex">
                        <div
                          style={{ width: `${selectedSub.consultingShare}%` }}
                          className="bg-blue-600 h-full"
                          title={`Strategy & Consulting: ${selectedSub.consultingShare}%`}
                        />
                        <div
                          style={{ width: `${selectedSub.aiShare}%` }}
                          className="bg-indigo-600 h-full"
                          title={`AI & Automation: ${selectedSub.aiShare}%`}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Priority Source Services */}
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono block mb-3">
                      Priority Services & Solutions:
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {selectedSub.relevantServices.map((serviceName, sIdx) => (
                        <div
                          key={sIdx}
                          className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-100 text-xs text-slate-800 font-semibold"
                        >
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{serviceName}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="p-6 sm:p-10 bg-slate-50 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <Link
                    to="/offerings/families"
                    className="text-xs font-bold text-slate-600 hover:text-blue-600 transition-colors"
                  >
                    View All 34 Service Definitions &rarr;
                  </Link>

                  <Link
                    to="/book-consultation"
                    className="inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-blue-600 text-white font-bold px-6 py-3 rounded-xl transition-all text-xs sm:text-sm shadow-md"
                  >
                    <span>Discuss {selectedSub.title} Strategy</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
