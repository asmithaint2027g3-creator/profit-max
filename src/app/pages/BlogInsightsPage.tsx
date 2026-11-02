import React, { useState, useEffect, useMemo } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import {
  BookOpen, ArrowRight, ArrowUpRight, CheckCircle2, Sparkles,
  ChevronRight, Search, Filter, Clock, Calendar, Tag, Target,
  BrainCircuit, BarChart3, Layers, ShieldCheck, X, FileText, Check
} from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../components/ui/dialog";
import { Button } from "../components/ui/button";
import LeadCaptureSection from '../components/LeadCaptureSection';

interface Article {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  categorySlug: string;
  date: string;
  readTime: string;
  featured?: boolean;
  takeaway: string;
  summary: string;
  frameworkSections: {
    heading: string;
    points: string[];
  }[];
  relatedOfferingLink: string;
  relatedOfferingName: string;
}

export default function BlogInsightsPage() {
  const [searchParams] = useSearchParams();
  const location = useLocation();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeArticle, setActiveArticle] = useState<Article | null>(null);

  useEffect(() => {
    document.title = "Blog & Insights | ProfitMachines Revenue Knowledge Library";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Explore ProfitMachines editorial insights, revenue engineering playbooks, and empirical research across AI-native sales, demand generation, RevOps, and GTM transformation.');
    }

    // Check query param or hash for category pre-selection
    const qCat = searchParams.get('category');
    const rawHash = location.hash ? location.hash.replace(/^#/, '') : '';

    if (qCat) {
      const normalized = qCat.toLowerCase();
      if (normalized.includes('sales') || normalized.includes('ai')) setSelectedCategory('ai-sales');
      else if (normalized.includes('playbook')) setSelectedCategory('sales-accel');
      else if (normalized.includes('data') || normalized.includes('science')) setSelectedCategory('growth-science');
      else if (normalized.includes('case')) setSelectedCategory('all');
    } else if (rawHash) {
      if (['ai-sales', 'demand-gen', 'sales-accel', 'revops', 'growth-science', 'gtm-trans', 'customer-growth'].includes(rawHash)) {
        setSelectedCategory(rawHash);
      }
    }
  }, [searchParams, location.hash]);

  const categories = [
    { id: 'all', name: 'All Insights' },
    { id: 'ai-sales', name: 'AI-Native Sales' },
    { id: 'demand-gen', name: 'Demand Generation' },
    { id: 'sales-accel', name: 'Sales Acceleration' },
    { id: 'revops', name: 'Revenue Operations' },
    { id: 'growth-science', name: 'Growth Science' },
    { id: 'gtm-trans', name: 'GTM Transformation' },
    { id: 'customer-growth', name: 'Customer Success & Retention' },
    { id: 'rev-intel', name: 'Revenue Intelligence' },
    { id: 'ai-automation', name: 'AI Automation' }
  ];

  const articles: Article[] = [
    {
      id: 'lead-response-decay-curve',
      title: 'The Inbound Lead Response Decay Curve: Why Engagement Latency Erodes Enterprise Win Rates',
      subtitle: 'How 5-minute response thresholds drive +391% conversion lift over manual round-robin queues.',
      category: 'Sales Acceleration',
      categorySlug: 'sales-accel',
      date: 'October 28, 2026',
      readTime: '6 min read',
      featured: true,
      takeaway: 'Inbound prospect buying urgency decays by 78% after 60 minutes. Replacing manual SDR routing with autonomous intake dossiers restores optimal conversion velocity.',
      summary: 'When a qualified enterprise decision-maker submits an inquiry, they are in the active evaluation window. Traditional routing models delay initial engagement by an average of 4.2 hours. We examine the mathematical decay of commercial intent and present the sub-60-second autonomous intake architecture.',
      frameworkSections: [
        {
          heading: 'The Four-Quadrant Velocity Waterfall',
          points: [
            '0 - 5 Minutes: Optimal velocity window generating +391% conversion lift with instant dossier delivery.',
            '5 - 30 Minutes: Baseline response threshold where SDR manual round-robin begins experiencing attrition.',
            '1 - 4 Hours: Severe attrition hazard resulting in -78% connection probability drop.',
            '24+ Hours: Complete opportunity loss as the prospect commits attention to competing category alternatives.'
          ]
        },
        {
          heading: 'Autonomous Latency Elimination Architecture',
          points: [
            'Sub-60s Inbound Intake: Instant context capture from domain, tech stack, and intent signals.',
            'Autonomous Briefing Dossier: Real-time synthesis of buying committee priorities before rep outreach.',
            'Dynamic Stage Routing: Algorithmic matching of high-fit accounts to available senior commercial directors.'
          ]
        }
      ],
      relatedOfferingLink: '/ai-native-sales',
      relatedOfferingName: 'AI Sales Acceleration'
    },
    {
      id: 'dormant-account-recovery',
      title: 'Surfacing the Dark Funnel: How to Monetize Dormant High-Fit Accounts in the Enterprise CRM',
      subtitle: 'A four-quadrant commercial opportunity matrix to uncover underserved enterprise demand.',
      category: 'Demand Generation',
      categorySlug: 'demand-gen',
      date: 'October 24, 2026',
      readTime: '8 min read',
      featured: true,
      takeaway: 'Over 80% of enterprise audits reveal massive unharvested pipeline pools sitting dormant in closed-lost CRM stages due to outdated timing assumptions.',
      summary: 'Marketing teams constantly burn capital acquiring expensive net-new top-of-funnel leads. Meanwhile, hundreds of high-ICP enterprise accounts that stalled 6 months ago are actively visiting pricing pages and experiencing executive turnover without triggering an alert.',
      frameworkSections: [
        {
          heading: 'The Four Commercial Opportunity Quadrants',
          points: [
            'Quadrant I — Dormant High-Fit Accounts: Stalled > 90 days; reactivate via automated signal trigger cadences.',
            'Quadrant II — Dark-Funnel Intent Surges: Anonymous category research; execute account-level value interception.',
            'Quadrant III — Uncaptured Tier Expansion: Existing customers near consumption ceilings; deploy cross-selling blueprints.',
            'Quadrant IV — Adjacent Micro-Niches: Underserved vertical segments overlooked by rigid incumbent GTM motions.'
          ]
        },
        {
          heading: 'Telemetry Interception Mechanics',
          points: [
            'Monitor executive departures and champion promotions across Tier-1 target accounts.',
            'Correlate anonymous IP intent surges with dormant CRM opportunity records.',
            'Deliver pre-packaged problem-to-value business cases tailored to the new economic sponsor.'
          ]
        }
      ],
      relatedOfferingLink: '/offerings/profit-pool-discovery',
      relatedOfferingName: 'Profit Pool Discovery Engine'
    },
    {
      id: 'mathematical-forecasting-revops',
      title: 'From Rep Sentiment to Empirical Telemetry: Replacing Subjective Forecasts with Progression Weights',
      subtitle: 'Eliminating the 30% quarterly revenue variance that plagues enterprise sales organizations.',
      category: 'Revenue Operations',
      categorySlug: 'revops',
      date: 'October 19, 2026',
      readTime: '7 min read',
      takeaway: 'Subjective rep probability scoring creates dangerous board forecast volatility. Mathematical stage progression telemetry yields 94% forecast precision.',
      summary: 'Most CROs still rely on rep sentiment to determine whether a deal will close this quarter. By replacing intuitive guesswork with empirical stage validation gates and velocity weighting, revenue teams achieve predictable compounding growth.',
      frameworkSections: [
        {
          heading: 'The Three Flaws of Subjective Forecasting',
          points: [
            'Rep Optimism Bias: Deals remain marked "Commit" despite zero stakeholder interaction in 21 days.',
            'Unverified Progression Gates: Advancing opportunities without documented CFO business case sign-off.',
            'Disjointed Billing Reconciliation: Forecast models detached from historical contract actuals and billing timing.'
          ]
        },
        {
          heading: 'Empirical Telemetry Blueprint',
          points: [
            'Dynamic Win-Probability Indices computed from multi-touch stakeholder engagement metrics.',
            'Automated Stage Progression Verification requiring verifiable artifacts (mutual action plan, legal review).',
            'Continuous Scenario Simulation providing board directors with probabilistic ARR outcomes.'
          ]
        }
      ],
      relatedOfferingLink: '/growth-science',
      relatedOfferingName: 'Growth Science Hub'
    },
    {
      id: 'cac-payback-compression',
      title: 'CAC Payback Compression: Decoupling Enterprise Pipeline Growth from Headcount Bloat',
      subtitle: 'Engineering autonomous revenue infrastructure that scales contribution margins predictably.',
      category: 'Growth Science',
      categorySlug: 'growth-science',
      date: 'October 14, 2026',
      readTime: '9 min read',
      takeaway: 'Scaling sales teams linearly to grow pipeline destroys unit economics. Automated account briefings and CRM hygiene free 14 hours per rep weekly.',
      summary: 'In the era of capital efficiency, expanding commercial headcount to brute-force revenue growth creates unsustainable CAC drag. Forward-thinking revenue leaders deploy AI-native infrastructure to augment commercial capacity and compress payback periods under 12 months.',
      frameworkSections: [
        {
          heading: 'The Economic Efficiency Model',
          points: [
            'Administrative Drag Reduction: Eliminating manual CRM updating and proposal formatting.',
            'Autonomous Research Synthesis: Pre-meeting briefing dossiers generated in seconds from SEC filings and news.',
            'High-Margin ICP Prioritization: Routing commercial capacity exclusively to accounts with >80% retention profile.'
          ]
        }
      ],
      relatedOfferingLink: '/solutions#sales-ops',
      relatedOfferingName: 'Revenue Operations Architecture'
    },
    {
      id: 'retention-early-warning',
      title: 'Predictive Churn Interception: How Usage Telemetry Predicts Enterprise Churn 90 Days in Advance',
      subtitle: 'Moving from lagging renewal post-mortems to proactive expansion blueprints.',
      category: 'Customer Success & Retention',
      categorySlug: 'customer-growth',
      date: 'October 09, 2026',
      readTime: '6 min read',
      takeaway: 'Over 70% of enterprise churn is initiated 90 days before renewal due to silent executive turnover or gradual feature abandonment.',
      summary: 'Customer success teams often discover renewal risks only when the procurement department requests contract termination. We outline how automated telemetry sensing flags consumption decay and stakeholder turnover in time to orchestrate a recovery play.',
      frameworkSections: [
        {
          heading: 'Early Warning Telemetry Signals',
          points: [
            'Executive Champion Departure: Alerting account leads within 48 hours of key sponsor movement.',
            'Usage Velocity Deceleration: Detecting declining team logins and API query drops 90 days out.',
            'Stalled Milestone Realization: Identifying unachieved onboarding KPIs before contract anniversary.'
          ]
        }
      ],
      relatedOfferingLink: '/ai-native-sales/customer-growth',
      relatedOfferingName: 'Customer Growth Acceleration'
    },
    {
      id: 'multi-agent-deal-desk',
      title: 'The Multi-Agent Deal Desk: Autonomous Objection Battlecards and Contract Pricing Governance',
      subtitle: 'How forward-deployed cognitive agents prevent end-of-quarter margin erosion.',
      category: 'AI-Native Sales',
      categorySlug: 'ai-sales',
      date: 'October 04, 2026',
      readTime: '7 min read',
      takeaway: 'Rep-level discounting during quarter close destroys up to 34% of contract contribution margin. Dynamic deal desks enforce value-based boundaries.',
      summary: 'During commercial contract negotiations, enterprise buyers leverage competitive alternatives to extract deep discounts. Multi-agent cognitive assistants equip sales directors with real-time value hypotheses, customer ROI proof points, and defensible contract tiering.',
      frameworkSections: [
        {
          heading: 'Deal Desk Governance Architecture',
          points: [
            'Real-Time Objection Counters: Context-aware battlecard guidance during live commercial negotiations.',
            'Dynamic Value Calculators: Translating technical functionality into CFO-defensible revenue gains.',
            'Strict Margin Threshold Gates: Algorithmic approval hierarchies protecting contract unit economics.'
          ]
        }
      ],
      relatedOfferingLink: '/ai-native-sales',
      relatedOfferingName: 'AI Sales Execution'
    }
  ];

  const filteredArticles = useMemo(() => {
    return articles.filter(art => {
      const matchesCategory = selectedCategory === 'all' || art.categorySlug === selectedCategory;
      const matchesQuery = !searchQuery || 
        art.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        art.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
        art.category.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesQuery;
    });
  }, [articles, selectedCategory, searchQuery]);

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-100 selection:text-blue-900">
      
      

      {/* ── SECTION 01: EXECUTIVE HERO (GLOBAL ACCELERATION PALETTE) ── */}
      <section id="overview" className="relative pt-12 pb-16 sm:pt-20 sm:pb-24 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute inset-0 opacity-[0.20]" style={{ backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.07) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.07) 1px, transparent 1px)', backgroundSize: '4rem 4rem' }} />
          <div className="absolute -top-40 right-1/4 w-[600px] h-[600px] bg-blue-600/15 rounded-full blur-[140px]" />
          <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-indigo-600/12 rounded-full blur-[130px]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs font-mono text-slate-400 mb-4">
            <Link to="/" className="hover:text-blue-400 transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
            <Link to="/about" className="text-slate-400 hover:text-blue-400 transition-colors">About Us</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
            <span className="text-blue-400 font-bold">Blog & Insights</span>
          </div>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-900/60 border border-blue-700/80 text-blue-300 font-mono text-xs font-bold uppercase tracking-wider mb-6">
              <BookOpen className="w-3.5 h-3.5 text-blue-400" />
              <span>Revenue Transformation Editorial</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black font-heading tracking-tight text-white mb-6 leading-[1.1]">
              Strategic Intelligence for <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-400 to-indigo-300">
                Modern Revenue Leaders
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-300 font-medium leading-relaxed mb-8">
              Rigorous playbooks, empirical telemetry models, and engineering perspectives on building predictable, AI-native commercial growth engines.
            </p>

            {/* Quick Search Bar */}
            <div className="relative max-w-xl">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search topics: lead decay, intent surges, forecast modeling..."
                className="w-full bg-slate-900/90 border border-slate-700 rounded-xl pl-11 pr-4 py-3.5 text-sm text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 transition-colors shadow-xl"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 02: FEATURED INSIGHTS (BENTO HERO CARDS) ── */}
      <section id="featured" className="py-20 sm:py-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600 bg-blue-50 border border-blue-200/60 px-3 py-1 rounded-full">
              Featured Research
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading tracking-tight mt-3 mb-4">
              Flagship Commercial Frameworks
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              In-depth research on latency compression and dark-funnel demand extraction.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {articles.filter(a => a.featured).map((art) => (
              <div
                key={art.id}
                id={art.id}
                data-section-id={art.id}
                onClick={() => setActiveArticle(art)}
                className="scroll-mt-24 p-8 rounded-3xl bg-white border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-blue-300 transition-all cursor-pointer flex flex-col justify-between group"
              >
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                    <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-mono font-bold border border-blue-200/60">
                      {art.category}
                    </span>
                    <div className="flex items-center gap-3 text-xs font-mono text-slate-400">
                      <span>{art.date}</span>
                      <span>&bull;</span>
                      <span>{art.readTime}</span>
                    </div>
                  </div>

                  <h3 className="text-2xl font-black text-slate-900 font-heading mb-3 group-hover:text-blue-600 transition-colors">
                    {art.title}
                  </h3>

                  <p className="text-sm font-semibold text-slate-700 mb-4 leading-snug">
                    {art.subtitle}
                  </p>

                  <p className="text-xs text-slate-500 leading-relaxed mb-6">
                    {art.summary}
                  </p>

                  <div className="p-4 rounded-xl bg-blue-50/60 border border-blue-100 text-xs text-blue-900 font-medium">
                    <span className="font-bold text-blue-700 block mb-1">Key Takeaway:</span>
                    {art.takeaway}
                  </div>
                </div>

                <div className="pt-6 border-t border-slate-100 flex items-center justify-between mt-6">
                  <span className="text-xs font-bold text-blue-600 group-hover:text-blue-700 flex items-center gap-1.5">
                    <span>Read Executive Briefing</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <span className="text-xs font-mono text-slate-400">Full Framework Included</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 03: FULL KNOWLEDGE LIBRARY WITH CATEGORY FILTERS ── */}
      <section id="library" className="py-20 sm:py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600 bg-blue-50 border border-blue-200/60 px-3 py-1 rounded-full">
                Knowledge Library
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading tracking-tight mt-3">
                All Research & Commercial Playbooks
              </h2>
              <p className="text-slate-600 text-sm sm:text-base mt-2">
                Showing {filteredArticles.length} publications across revenue transformation disciplines.
              </p>
            </div>
          </div>

          {/* Category Filter Pills Bar */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-4 mb-8 no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-blue-600 text-white shadow-sm shadow-blue-600/25'
                    : 'bg-slate-100 text-slate-600 hover:text-blue-600 hover:bg-slate-200/80'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Articles Grid */}
          {filteredArticles.length === 0 ? (
            <div className="p-12 text-center rounded-2xl bg-slate-50 border border-slate-200 text-slate-500">
              <BookOpen className="w-8 h-8 text-slate-400 mx-auto mb-3" />
              <p className="font-bold text-slate-700">No matching articles found.</p>
              <p className="text-xs text-slate-500 mt-1">Try resetting your search query or choosing another category.</p>
              <button
                onClick={() => { setSelectedCategory('all'); setSearchQuery(''); }}
                className="mt-4 px-4 py-2 rounded-lg bg-blue-600 text-white text-xs font-bold"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredArticles.map((art) => (
                <div
                  key={art.id}
                  id={art.id}
                  data-section-id={art.id}
                  onClick={() => setActiveArticle(art)}
                  className="scroll-mt-24 p-6 rounded-2xl bg-slate-50 border border-slate-200/90 hover:bg-white hover:border-blue-300 hover:shadow-md transition-all cursor-pointer flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-800 text-[10px] font-mono font-bold">
                        {art.category}
                      </span>
                      <span className="text-[11px] font-mono text-slate-400">{art.readTime}</span>
                    </div>

                    <h3 className="text-lg font-bold text-slate-900 font-heading mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
                      {art.title}
                    </h3>

                    <p className="text-xs text-slate-600 leading-relaxed mb-4 line-clamp-3">
                      {art.summary}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-200/70 flex items-center justify-between text-xs">
                    <span className="font-bold text-blue-600 group-hover:text-blue-700 flex items-center gap-1">
                      <span>View Briefing</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                    </span>
                    <span className="text-[10px] font-mono text-slate-400">{art.date}</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ── ARTICLE READER MODAL (FULL BRIEFING WITHOUT BROKEN LINKS) ── */}
      <Dialog open={!!activeArticle} onOpenChange={(open) => !open && setActiveArticle(null)}>
        {activeArticle && (
          <DialogContent className="max-w-3xl bg-white p-6 sm:p-10 rounded-3xl border border-slate-200 shadow-2xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-mono font-bold border border-blue-200">
                  {activeArticle.category}
                </span>
                <span className="text-xs font-mono text-slate-400">
                  {activeArticle.date} &bull; {activeArticle.readTime}
                </span>
              </div>
              <DialogTitle className="text-2xl sm:text-3xl font-black text-slate-900 font-heading leading-tight">
                {activeArticle.title}
              </DialogTitle>
              <DialogDescription className="text-sm font-semibold text-slate-600 pt-1">
                {activeArticle.subtitle}
              </DialogDescription>
            </DialogHeader>

            <div className="space-y-6 my-4 text-slate-700 text-sm leading-relaxed">
              <div className="p-4 rounded-xl bg-blue-50/60 border border-blue-200 text-blue-900 font-medium">
                <span className="font-bold text-blue-700 block mb-1">Executive Takeaway:</span>
                {activeArticle.takeaway}
              </div>

              <div>
                <h4 className="text-base font-bold text-slate-900 font-heading mb-2">Executive Context</h4>
                <p>{activeArticle.summary}</p>
              </div>

              {activeArticle.frameworkSections.map((sec, sIdx) => (
                <div key={sIdx} className="space-y-2">
                  <h4 className="text-base font-bold text-slate-900 font-heading">{sec.heading}</h4>
                  <div className="space-y-2">
                    {sec.points.map((pt, pIdx) => (
                      <div key={pIdx} className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 text-xs flex items-start gap-2.5">
                        <Check className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                        <span className="font-medium text-slate-800">{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}

              <div className="p-6 rounded-2xl bg-slate-900 text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <span className="text-[10px] font-mono text-blue-400 uppercase tracking-wider block">Related Enterprise Capability</span>
                  <div className="text-base font-bold text-white">{activeArticle.relatedOfferingName}</div>
                </div>
                <Link
                  to={activeArticle.relatedOfferingLink}
                  onClick={() => setActiveArticle(null)}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold transition-all shrink-0"
                >
                  <span>Explore Offering</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            <div className="flex justify-end pt-4 border-t border-slate-100">
              <Button
                variant="outline"
                onClick={() => setActiveArticle(null)}
                className="text-xs font-bold"
              >
                Close Briefing
              </Button>
            </div>
          </DialogContent>
        )}
      </Dialog>

      {/* ── SECTION 04: EXECUTIVE CONSULTATION & INTAKE ── */}
      <section id="consultation" className="scroll-mt-20">
        <LeadCaptureSection />
      </section>
    </div>
  );
}

