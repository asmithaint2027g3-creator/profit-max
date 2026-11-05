import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  BookOpen,
  ArrowRight,
  TrendingUp,
  BarChart3,
  BrainCircuit,
  Calculator,
  Compass,
  CheckCircle2,
  Layers,
  Sparkles,
  ShieldCheck,
  Target,
  Users,
  Building2,
  Workflow,
  Factory,
  Zap,
  ArrowUpRight,
  ChevronRight,
  Search
} from 'lucide-react';
import { RESOURCES_HUB_CATEGORIES, ResourceCategory } from '../../../data/resourcesHubData';
import { trackEvent } from '../../../lib/analytics';

export default function ResourcesHubLandingPage() {
  const location = useLocation();
  const [searchFilter, setSearchFilter] = useState('');
  const [selectedTag, setSelectedTag] = useState<string>('All');

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Resources Hub | ProfitMachines Business Intelligence & Frameworks';
    trackEvent({ eventName: 'PAGE_VIEW_RESOURCES_HUB', category: 'NAVIGATION' });

    // Handle hash scroll if arriving with #anchor
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const el = document.getElementById(id);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 150);
      }
    }
  }, [location]);

  // Filter categories based on search input or tag
  const filteredCategories = RESOURCES_HUB_CATEGORIES.filter(cat => {
    const matchesSearch =
      cat.title.toLowerCase().includes(searchFilter.toLowerCase()) ||
      cat.shortIntro.toLowerCase().includes(searchFilter.toLowerCase()) ||
      cat.previewLabels.some(l => l.toLowerCase().includes(searchFilter.toLowerCase()));
    return matchesSearch;
  });

  return (
    <div className="min-h-screen bg-white text-slate-900 overflow-x-hidden selection:bg-blue-600 selection:text-white">

      {/* ── 7.1 HERO SECTION ── */}
      <section className="relative pt-32 pb-20 lg:pt-36 lg:pb-28 bg-gradient-to-b from-slate-950 via-blue-950/90 to-slate-900 text-white overflow-hidden">
        {/* Background glow effects */}
        <div className="absolute top-0 right-1/4 w-[700px] h-[700px] bg-blue-600/15 rounded-full blur-[160px] pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 font-mono text-xs font-bold tracking-widest uppercase">
                <BookOpen className="w-4 h-4 text-blue-400" />
                Enterprise Resources Hub
              </div>

              <div className="space-y-3">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-white tracking-tight leading-[1.1] font-heading">
                  Explore the Resources That Drive <br className="hidden sm:inline" />
                  <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-sky-300 bg-clip-text text-transparent">
                    Business Growth
                  </span>
                </h1>
                <p className="text-lg sm:text-xl font-bold text-slate-200 tracking-wide font-heading">
                  Knowledge. Analytics. Frameworks. Intelligence. Tools.
                </p>
              </div>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl">
                Discover industry insights, business frameworks, analytical models, AI capabilities and practical tools designed to help organisations understand challenges, improve performance and accelerate growth.
              </p>

              {/* Dual CTAs */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <a
                  href="#all-resource-categories"
                  className="px-7 py-4 rounded-xl bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-extrabold text-sm sm:text-base tracking-wide shadow-lg shadow-blue-600/30 transition-all flex items-center justify-center gap-2 border border-blue-400/30 group cursor-pointer"
                >
                  <span>Explore Resources</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>

                <a
                  href="#tools-calculators"
                  className="px-7 py-4 rounded-xl bg-slate-800/80 hover:bg-slate-800 border border-slate-700 hover:border-slate-500 text-slate-200 font-bold text-sm sm:text-base transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Calculator className="w-4 h-4 text-blue-400" />
                  <span>Explore Tools &amp; Calculators</span>
                </a>
              </div>

              {/* Trust Reassurance Anchors */}
              <div className="pt-4 flex flex-wrap items-center gap-4 text-xs text-slate-400 border-t border-slate-800/80">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
                  12 Complete Categories
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
                  Boardroom-Verified Methodologies
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
                  Fortune 1000 Best Practices
                </span>
              </div>
            </div>

            {/* Right Visual: Connected Business Intelligence / Resource Ecosystem Graphic */}
            <div className="lg:col-span-5 relative">
              <div className="relative p-6 sm:p-8 rounded-3xl bg-slate-900/90 border border-slate-700/70 shadow-2xl shadow-blue-950/60 backdrop-blur-xl">
                <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="font-mono text-xs font-bold text-slate-300 uppercase tracking-wider">Resource Ecosystem Mesh</span>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-500/20 text-blue-300 font-bold">12 Clusters</span>
                </div>

                {/* Ecosystem Node Representation */}
                <div className="py-6 space-y-3.5">
                  <div className="p-3.5 rounded-2xl bg-slate-800/60 border border-slate-700/60 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0">
                        <Factory className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-white">Vertical &amp; Functional Intelligence</div>
                        <div className="text-[10px] text-slate-400">10 Industries • 10 Core Business Departments</div>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono font-bold text-emerald-400">Active</span>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-slate-800/60 border border-slate-700/60 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-indigo-500/20 text-indigo-400 flex items-center justify-center shrink-0">
                        <BarChart3 className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-white">Analytics &amp; Decision Science</div>
                        <div className="text-[10px] text-slate-400">Approved 25-Model Suite • Foundational KPIs</div>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono font-bold text-blue-400">Mathematical</span>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-slate-800/60 border border-slate-700/60 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center shrink-0">
                        <BrainCircuit className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-white">AI &amp; Agentic Automation Systems</div>
                        <div className="text-[10px] text-slate-400">Autonomous SDRs • Multi-Agent Architectures</div>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono font-bold text-purple-400">Autonomous</span>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-slate-800/60 border border-slate-700/60 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-sky-500/20 text-sky-400 flex items-center justify-center shrink-0">
                        <Calculator className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-white">Interactive Calculators &amp; Assessments</div>
                        <div className="text-[10px] text-slate-400">Velocity • CAC/LTV • Pipeline Leakage</div>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono font-bold text-cyan-400">Interactive</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                  <span>Architecture Status: Synchronized</span>
                  <span className="text-blue-400 font-mono font-bold">PM-RES-v2.4</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── 7.2 RESOURCE HUB OVERVIEW ── */}
      <section className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-blue-600 bg-blue-50 border border-blue-200 px-3 py-1 rounded-full">
              Holistic Knowledge Architecture
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight font-heading">
              One Resource Ecosystem. Multiple Business Capabilities.
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              ProfitMachines Resources Hub brings together industry knowledge, functional expertise, sales and revenue frameworks, analytical models, AI and automation resources, business transformation methodologies and practical tools in one organised destination.
            </p>
          </div>

          {/* 6 Exploration Dimensions */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
            {[
              { label: 'By Industry', desc: 'Vertical compliance and operating nuances', icon: Factory, anchor: '#industry-resource-hubs' },
              { label: 'By Function', desc: 'Departmental execution and sales playbooks', icon: Briefcase, anchor: '#functional-resource-hubs' },
              { label: 'By Revenue Challenge', desc: 'Pipeline stall and friction recovery', icon: Target, anchor: '#sales-acceleration' },
              { label: 'By Analytical Science', desc: 'Deterministic KPIs and probability models', icon: BarChart3, anchor: '#analytics-decision-science' },
              { label: 'By AI & Automation', desc: 'Autonomous agents and process mining', icon: BrainCircuit, anchor: '#ai-agentic-automation' },
              { label: 'By Transformation Goal', desc: 'Balanced Scorecards and target models', icon: Compass, anchor: '#strategy-transformation' }
            ].map((pathway, idx) => {
              const Icon = pathway.icon;
              return (
                <a
                  key={idx}
                  href={pathway.anchor}
                  className="p-4 rounded-2xl bg-white border border-slate-200/80 hover:border-blue-400 hover:shadow-md transition-all group flex flex-col justify-between text-left cursor-pointer"
                >
                  <div className="w-8 h-8 rounded-xl bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors flex items-center justify-center mb-3">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-slate-900 group-hover:text-blue-600 transition-colors leading-snug">
                      {pathway.label}
                    </h3>
                    <p className="text-[11px] text-slate-500 mt-1 line-clamp-2">
                      {pathway.desc}
                    </p>
                  </div>
                  <div className="pt-3 mt-2 border-t border-slate-100 flex items-center text-[10px] font-bold text-blue-600 group-hover:translate-x-0.5 transition-transform">
                    <span>Explore &rarr;</span>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 7.3 ALL 12 RESOURCE CATEGORY CARDS ── */}
      <section id="all-resource-categories" className="py-20 lg:py-28 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 lg:mb-16 gap-6 border-b border-slate-200 pb-8">
            <div className="space-y-2 max-w-2xl">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-blue-600">
                Categorical Directory
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading">
                All 12 Resource Hub Categories
              </h2>
              <p className="text-sm sm:text-base text-slate-600">
                Browse through all 12 main resource categories. Each category contains tailored submenus, operational frameworks, and diagnostic tools.
              </p>
            </div>

            {/* Quick Search Input */}
            <div className="w-full md:w-72 relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={searchFilter}
                onChange={(e) => setSearchFilter(e.target.value)}
                placeholder="Filter categories or tools..."
                className="w-full h-11 pl-10 pr-4 rounded-xl bg-slate-50 hover:bg-white focus:bg-white border border-slate-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 text-sm text-slate-900 placeholder:text-slate-400 transition-all font-medium"
              />
            </div>
          </div>

          {/* 12 Cards Grid — 3 Cards Per Row (Desktop), Responsive Tablet/Mobile */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filteredCategories.map((cat) => {
              const IconComponent = cat.icon;

              return (
                <div
                  key={cat.id}
                  id={cat.id}
                  className="rounded-3xl bg-white border border-slate-200/90 hover:border-blue-300 p-6 sm:p-7 shadow-xs hover:shadow-xl hover:shadow-blue-900/5 transition-all flex flex-col justify-between group relative overflow-hidden"
                >
                  {/* Subtle top indicator bar */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600/0 via-blue-600/50 to-indigo-600/0 opacity-0 group-hover:opacity-100 transition-opacity" />

                  <div className="space-y-4">
                    {/* Top Row: Category Number + Icon */}
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs font-black text-blue-600 bg-blue-50 border border-blue-200/70 px-2.5 py-1 rounded-lg">
                        {cat.number}
                      </span>
                      <div className="w-10 h-10 rounded-2xl bg-slate-100 group-hover:bg-blue-600 group-hover:text-white text-slate-700 transition-colors flex items-center justify-center">
                        <IconComponent className="w-5 h-5" />
                      </div>
                    </div>

                    {/* Category Title */}
                    <div>
                      <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 font-heading tracking-tight group-hover:text-blue-600 transition-colors">
                        {cat.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                        {cat.shortIntro}
                      </p>
                    </div>

                    {/* What Visitors Can Explore / Purpose */}
                    <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 space-y-1 text-xs">
                      <span className="font-bold text-slate-700 uppercase tracking-wider text-[10px] block">
                        Purpose &amp; Scope:
                      </span>
                      <p className="text-slate-600 leading-snug">
                        {cat.purpose}
                      </p>
                    </div>

                    {/* Subcategory Preview (Labels / Groups) */}
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-2">
                        Included Subcategories &amp; Modules:
                      </span>

                      {/* If category has subGroups (Category 06 - Analytics) */}
                      {cat.subGroups ? (
                        <div className="space-y-2.5">
                          {cat.subGroups.map((grp, gIdx) => (
                            <div key={gIdx} className="p-2.5 rounded-xl bg-blue-50/50 border border-blue-100/70 space-y-1">
                              <div className="flex items-center justify-between text-[11px] font-bold text-blue-900">
                                <span>{grp.groupName}</span>
                                <span className="text-[9px] font-mono text-blue-600">{grp.items.length} items</span>
                              </div>
                              <div className="flex flex-wrap gap-1">
                                {grp.items.slice(0, 4).map((it, itIdx) => (
                                  <span key={itIdx} className="text-[10px] px-1.5 py-0.5 rounded bg-white border border-slate-200 text-slate-700">
                                    {it.title}
                                  </span>
                                ))}
                                {grp.items.length > 4 && (
                                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-white text-blue-600 font-semibold">
                                    +{grp.items.length - 4} more
                                  </span>
                                )}
                              </div>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className="flex flex-wrap gap-1.5">
                          {cat.previewLabels.map((lbl, lIdx) => (
                            <span
                              key={lIdx}
                              className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-50 border border-slate-200/70 text-slate-700 font-medium group-hover:border-slate-300 transition-colors"
                            >
                              {lbl}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Explore Button Action */}
                  <div className="pt-6 mt-6 border-t border-slate-100">
                    <Link
                      to={cat.path}
                      className="w-full h-11 rounded-xl bg-slate-900 hover:bg-blue-600 text-white font-bold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 group-hover:shadow-md group-hover:shadow-blue-600/20 cursor-pointer"
                    >
                      <span>{cat.ctaText}</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ── 7.4 HOW TO EXPLORE RESOURCES (4 Pathways) ── */}
      <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-3 mb-14">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-blue-400 bg-blue-500/15 border border-blue-400/20 px-3 py-1 rounded-full">
              Discovery Framework
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-heading">
              Four Deliberate Ways to Explore
            </h2>
            <p className="text-sm sm:text-base text-slate-300">
              Navigate the platform based on your organizational lens, current operational friction points, or strategic modernization agenda.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                number: '01',
                title: 'Explore by Industry',
                desc: 'Tailored for vertical regulatory standards, margin profiles, and buyer committee patterns across 10 sectors.',
                icon: Factory,
                link: '#industry-resource-hubs',
                cta: 'View Sector Hubs'
              },
              {
                number: '02',
                title: 'Explore by Business Function',
                desc: 'Department-specific playbooks for Sales, Marketing, Customer Success, Finance, and Supply Chain leaders.',
                icon: Briefcase,
                link: '#functional-resource-hubs',
                cta: 'View Functional Hubs'
              },
              {
                number: '03',
                title: 'Explore by Business Challenge',
                desc: 'Targeted remediation for pipeline velocity stalling, forecast inaccuracies, deal slip, and NRR erosion.',
                icon: Target,
                link: '#sales-acceleration',
                cta: 'View Challenge Hubs'
              },
              {
                number: '04',
                title: 'Explore by Tools & Analytics',
                desc: 'Interactive calculators, Bayesian probability models, and capability maturity rubrics for empirical audits.',
                icon: Calculator,
                link: '#tools-calculators',
                cta: 'Launch Tools & Calculators'
              }
            ].map((pathway, idx) => {
              const PathIcon = pathway.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-3xl bg-slate-800/70 border border-slate-700/70 hover:border-blue-500/50 transition-all flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs font-bold text-blue-400">{pathway.number}</span>
                      <div className="w-9 h-9 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center">
                        <PathIcon className="w-4.5 h-4.5" />
                      </div>
                    </div>
                    <h3 className="text-base font-bold text-white font-heading">{pathway.title}</h3>
                    <p className="text-xs text-slate-400 leading-relaxed">{pathway.desc}</p>
                  </div>
                  <a
                    href={pathway.link}
                    className="mt-6 pt-4 border-t border-slate-700/60 inline-flex items-center gap-1.5 text-xs font-bold text-blue-400 hover:text-blue-300 transition-colors group cursor-pointer"
                  >
                    <span>{pathway.cta}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 7.5 FEATURED RESOURCES SECTION ── */}
      <section className="py-20 bg-slate-50 border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-3 mb-12">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-indigo-600 bg-indigo-50 border border-indigo-200 px-3 py-1 rounded-full">
              Featured Flagship Modules
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-heading">
              High-Impact Frameworks &amp; Live Tools
            </h2>
            <p className="text-sm text-slate-600">
              Explore essential enterprise revenue tools and frameworks frequently deployed across global client engagements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Revenue Velocity Equation',
                category: 'Analytics & Decision Science',
                desc: 'Deterministic throughput model quantifying the compound financial lift of marginal gains across pipeline variables.',
                badge: 'Core Formula',
                path: '#revenue-velocity'
              },
              {
                title: 'Pipeline Optimization & Leakage Audit',
                category: 'Sales Acceleration',
                desc: 'Diagnostic framework mapping covert deal stalling and exit patterns across enterprise stage-gate boundaries.',
                badge: 'Diagnostic',
                path: '#pipeline-optimization'
              },
              {
                title: 'ICP Scoring & Firmographic Mesh',
                category: 'GTM & Revenue Operations',
                desc: 'Empirical ideal customer profile matrix identifying high-LTV accounts with maximum propensity to expand.',
                badge: 'Targeting',
                path: '#icp-frameworks'
              },
              {
                title: 'Autonomous AI Sales Agents Suite',
                category: 'AI & Agentic Automation',
                desc: '24/7 autonomous SDR & AE multi-agent swarms conducting multi-channel prospect research and scheduling.',
                badge: 'Live Architecture',
                path: '/ai-sales-agents'
              },
              {
                title: 'Customer Lifetime Value (LTV) Cohorts',
                category: 'Analytics & Decision Science',
                desc: 'Mathematical retention projection models incorporating expansion ARR, gross margin drag and discount rates.',
                badge: 'Financial Model',
                path: '#ltv-models'
              },
              {
                title: 'GTM Maturity Assessment Rubric',
                category: 'Frameworks & Templates',
                desc: '5-stage organizational audit evaluating sales process standardization, telemetry maturity, and tooling ROI.',
                badge: 'Assessment',
                path: '#maturity-assessments'
              }
            ].map((feat, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white border border-slate-200/90 hover:border-blue-300 hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider">
                      {feat.category}
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-50 text-blue-700 font-bold border border-blue-200/60">
                      {feat.badge}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {feat.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {feat.desc}
                  </p>
                </div>

                <a
                  href={feat.path}
                  className="mt-5 pt-3 border-t border-slate-100 inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-700 transition-colors cursor-pointer"
                >
                  <span>Explore Module</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7.6 BUSINESS VALUE SECTION ── */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-3 mb-14">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-blue-600">
              Strategic Impact
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading">
              Turn Business Knowledge into Better Decisions
            </h2>
            <p className="text-sm sm:text-base text-slate-600">
              The Resources Hub delivers structured, actionable knowledge to transform commercial strategy into consistent operational reality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Understand Business Challenges',
                desc: 'Diagnose the structural and systemic causes of pipeline friction rather than applying temporary tactical bandages.',
                icon: Target
              },
              {
                title: 'Measure Business Performance',
                desc: 'Deploy empirical mathematical models and standardized KPI frameworks to eliminate subjective reporting bias.',
                icon: BarChart3
              },
              {
                title: 'Discover Improvement Opportunities',
                desc: 'Identify hidden profit pools, under-monetized account segments, and covert operational drag across revenue stages.',
                icon: TrendingUp
              },
              {
                title: 'Explore Practical Solutions',
                desc: 'Access battle-tested playbooks, SOPs, and autonomous AI architectures designed for immediate enterprise deployment.',
                icon: Workflow
              }
            ].map((val, idx) => {
              const ValIcon = val.icon;
              return (
                <div key={idx} className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-3 text-left">
                  <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center">
                    <ValIcon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 font-heading">{val.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{val.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 7.7 FINAL CALL TO ACTION ── */}
      <section className="py-20 lg:py-24 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 font-mono text-xs font-bold tracking-widest uppercase">
            <Sparkles className="w-4 h-4 text-blue-400" />
            Empirical Growth Acceleration
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight font-heading leading-tight">
            Find the Resources That Move Your Business Forward
          </h2>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Explore the ProfitMachines Resources Hub to discover frameworks, analytical tools and business resources relevant to your organisation.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#all-resource-categories"
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-extrabold text-sm sm:text-base shadow-lg shadow-blue-600/30 transition-all flex items-center justify-center gap-2 cursor-pointer border border-blue-400/30"
            >
              <span>Explore All Resources</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <Link
              to="/book-consultation"
              className="px-8 py-4 rounded-xl bg-white hover:bg-slate-100 text-slate-900 font-extrabold text-sm sm:text-base transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
            >
              <span>Book Strategy Consultation</span>
              <ArrowUpRight className="w-4 h-4 text-blue-600" />
            </Link>
          </div>

          <div className="pt-6 text-xs text-slate-400 flex items-center justify-center gap-4">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-blue-400" />
              Confidential Enterprise Engagement
            </span>
            <span>•</span>
            <span>Mutual Enterprise NDA Signed Automatically</span>
          </div>
        </div>
      </section>

    </div>
  );
}

