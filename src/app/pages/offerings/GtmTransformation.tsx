import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Compass, ArrowRight, ShieldCheck, CheckCircle2, TrendingUp, Target,
  DollarSign, Activity, Layers, Search, Sparkles, Lock, ChevronRight,
  Zap, BarChart3, Sliders, Cpu, Shield, ArrowUpRight, Clock,
  Check, Bot, FileText, CreditCard, Briefcase, AlertTriangle,
  Scale, Users, LineChart, CheckCircle, RefreshCw, Eye, GitMerge,
  GitBranch, Workflow
} from 'lucide-react';
import OfferingsIntakeForm from '../../components/forms/OfferingsIntakeForm';

export default function GtmTransformation() {
  const location = useLocation();

  useEffect(() => {
    document.title = 'GTM Transformation | Operating Model & Revenue Modernization | ProfitMachines';
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const scrollToElement = () => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      };
      scrollToElement();
      const t1 = setTimeout(scrollToElement, 100);
      const t2 = setTimeout(scrollToElement, 300);
      return () => {
        clearTimeout(t1);
        clearTimeout(t2);
      };
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location.hash, location.pathname]);

  const scrollToAnchor = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      window.history.pushState(null, '', '#' + id);
    }
  };

  const structuralFrictionPoints = [
    {
      title: 'Conflicting Go-to-Market Priorities',
      problem: 'Marketing optimizes for raw lead volume, sales seeks hyper-targeted enterprise accounts, and product prioritizes self-serve feature adoption without mutual alignment.',
      consequence: 'Wasted acquisition budgets, poor sales acceptance of marketing leads, and disjointed buyer experiences.',
      impact: 'Up to 45% Pipeline Drop-off Between MQL and SQL'
    },
    {
      title: 'Proliferation of Fragmented Revenue Silos',
      problem: 'Pre-sales, enterprise AE pods, customer success, and partner channels operate separate disconnected playbooks and incentive structures.',
      consequence: 'Account handoff drag, multi-threaded confusion for buyers, and delayed onboarding time-to-value.',
      impact: '28-40% Sales Cycle Duration Inflation'
    },
    {
      title: 'Uncoordinated Technology Stack Sprawl',
      problem: 'Teams deploy point AI and automation tools independently, resulting in unintegrated data silos, overlapping costs, and rep confusion.',
      consequence: 'Low tool adoption, manual spreadsheet workarounds, and lack of enterprise-wide executive telemetry.',
      impact: '&lt;50% Rep Utilization of Licensed RevTech'
    },
    {
      title: 'Inflexible Territory & Quota Architecture',
      problem: 'Legacy geographic quotas fail to reflect market micro-segment propensity or actual account buyer intent surges.',
      consequence: 'Star reps are starved of whitespace opportunities while underperforming territories receive unattainable targets.',
      impact: '±30% Quota Attainment Disparity Across Pods'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* ── STICKY PAGE SUB-NAV BAR (GLOBAL ACCELERATION PALETTE) ── */}
      <nav aria-label="Page Sub Navigation" className="sticky top-16 z-30 bg-slate-900/95 backdrop-blur-md border-b border-slate-800 text-white text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-11 flex items-center justify-between gap-4 overflow-x-auto no-scrollbar">
          <div className="flex items-center gap-2.5 shrink-0">
            <span className="font-mono text-blue-400 font-bold">OFFERING 06</span>
            <span className="font-bold text-slate-200">GTM Transformation</span>
            <span className="hidden sm:inline text-slate-500">|</span>
            <span className="hidden sm:inline text-slate-400 font-medium">Operating Model</span>
          </div>

          <div className="flex items-center gap-3 shrink-0 text-slate-300 font-medium text-[11px] sm:text-xs">
            <a href="#friction" onClick={(e) => scrollToAnchor(e, 'friction')} className="hover:text-blue-400 transition-colors">Structural Friction</a>
            <a href="#gtm-strategy" onClick={(e) => scrollToAnchor(e, 'gtm-strategy')} className="hover:text-blue-400 transition-colors">GTM Strategy</a>
            <a href="#process" onClick={(e) => scrollToAnchor(e, 'process')} className="hover:text-blue-400 transition-colors">Revenue Velocity</a>
            <a href="#multi-product" onClick={(e) => scrollToAnchor(e, 'multi-product')} className="hover:text-blue-400 transition-colors">AI Operating Models</a>
            <a href="#adoption" onClick={(e) => scrollToAnchor(e, 'adoption')} className="hover:text-blue-400 transition-colors">Cross-Functional Alignment</a>
            <a href="#roadmap" onClick={(e) => scrollToAnchor(e, 'roadmap')} className="hover:text-blue-400 transition-colors">4-Stage Roadmap</a>
            <a href="#kpis" onClick={(e) => scrollToAnchor(e, 'kpis')} className="hover:text-blue-400 transition-colors">KPI Framework</a>
            <a href="#intake" onClick={(e) => scrollToAnchor(e, 'intake')} className="px-2.5 py-1 rounded bg-blue-600 hover:bg-blue-500 text-white font-bold transition-colors">Diagnostic</a>
          </div>
        </div>
      </nav>

      {/* ── SECTION 1: HERO ── */}
      <section className="relative pt-12 pb-16 sm:pt-20 sm:pb-24 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute inset-0 opacity-[0.20]" style={{ backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.07) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.07) 1px, transparent 1px)', backgroundSize: '4rem 4rem' }} />
          <div className="absolute -top-40 right-1/4 w-[600px] h-[600px] bg-blue-600/15 rounded-full blur-[140px]" />
          <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-indigo-600/12 rounded-full blur-[130px]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs font-mono text-slate-400 mb-4">
            <Link to="/offerings" className="hover:text-blue-400 transition-colors">Offerings</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
            <span className="text-blue-400 font-bold">GTM Transformation</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/15 border border-blue-400/30 text-blue-300 text-xs font-bold tracking-widest uppercase font-mono mb-4">
                <Compass className="w-3.5 h-3.5 text-blue-400" />
                <span>OPERATING MODEL & GTM ARCHITECTURE</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.15] mb-5 font-heading">
                Redesign Your Go-to-Market Model For{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-indigo-300">
                  Sustainable Growth
                </span>
              </h1>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-6 max-w-3xl">
                Align market strategy, revenue processes, AI-enabled workflows, and cross-functional accountability. GTM Transformation helps organizations identify structural friction and redesign how commercial teams operate together to reach buyers and compound enterprise ARR.
              </p>

              {/* Target Decision-Makers */}
              <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 text-xs text-slate-300 mb-8 space-y-1 max-w-2xl">
                <div className="text-[11px] font-mono font-bold text-blue-400 uppercase tracking-wider">
                  Target Decision-Makers:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 text-slate-300">
                  <div className="flex items-center gap-1.5"><span className="text-blue-400">•</span> Chief Executive Officers (CEOs) & Enterprise Boards</div>
                  <div className="flex items-center gap-1.5"><span className="text-blue-400">•</span> Chief Revenue Officers (CROs) & COOs</div>
                  <div className="flex items-center gap-1.5"><span className="text-blue-400">•</span> PE Operating Partners & Portfolio Growth Leads</div>
                  <div className="flex items-center gap-1.5"><span className="text-blue-400">•</span> Enterprise Transformation & Strategy Executives</div>
                </div>
              </div>

              {/* Hero CTAs */}
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="#intake"
                  onClick={(e) => scrollToAnchor(e, 'intake')}
                  className="px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 active:bg-blue-700 text-white font-bold text-sm transition-all shadow-lg shadow-blue-600/30 inline-flex items-center gap-2 group cursor-pointer"
                >
                  <span>Plan Your GTM Transformation</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>

                <Link
                  to="/book-consultation"
                  className="px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-200 font-bold text-sm transition-all inline-flex items-center gap-2 cursor-pointer"
                >
                  <span>Book a Consultation</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-4">
              <div className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-xl space-y-4">
                <div className="text-xs font-mono font-bold uppercase text-blue-400 tracking-wider">
                  Transformation Benchmark Matrix
                </div>
                <div className="space-y-3">
                  <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700/80">
                    <div className="text-[11px] text-slate-400 uppercase font-mono">Sales Cycle Compression</div>
                    <div className="text-xl font-bold font-mono text-emerald-400 mt-0.5">-40% Sales Cycle Duration</div>
                    <p className="text-[11px] text-slate-400 mt-1">Achieved through removed approval loops and unified discovery.</p>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700/80">
                    <div className="text-[11px] text-slate-400 uppercase font-mono">Field Adoption Index</div>
                    <div className="text-xl font-bold font-mono text-blue-400 mt-0.5">≥85% Sustained Adoption</div>
                    <p className="text-[11px] text-slate-400 mt-1">Verified tool & process utilization across commercial pods.</p>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700/80">
                    <div className="text-[11px] text-slate-400 uppercase font-mono">Cross-Functional Drag</div>
                    <div className="text-xl font-bold font-mono text-white mt-0.5">Zero Friction Handoffs</div>
                    <p className="text-[11px] text-slate-400 mt-1">Strict SLA contracts connecting marketing, sales & customer success.</p>
                  </div>
                </div>
                <div className="text-[10px] font-mono text-slate-500 pt-2 border-t border-slate-800 text-center">
                  *Illustrative operating scenario metrics based on modeled client baselines.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 2: THE STRUCTURAL FRICTION DIAGNOSTIC ── */}
      <section id="friction" className="py-14 sm:py-20 bg-slate-50 border-b border-slate-200 scroll-mt-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <span className="text-xs font-mono text-blue-600 uppercase tracking-widest font-bold block mb-2">
              OPERATING MODEL DIAGNOSTICS
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading mb-4">
              Why Traditional Go-to-Market Models Fragment
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              As companies scale beyond $25M ARR, revenue silos naturally calcify. Departmental sub-optimization replaces shared commercial accountability, stretching sales cycles and burning marketing capital.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {structuralFrictionPoints.map((item, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs hover:border-blue-400 transition-all flex flex-col justify-between">
                <div>
                  <div className="w-7 h-7 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-xs font-mono mb-3">
                    0{idx + 1}
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-2 font-heading">{item.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">{item.problem}</p>
                  <p className="text-xs text-slate-500 italic border-l-2 border-slate-200 pl-2.5 mb-4">{item.consequence}</p>
                </div>
                <div className="pt-3 border-t border-slate-100 text-xs font-mono text-emerald-600 font-bold">
                  {item.impact}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 3: CAPABILITY A - GTM STRATEGY & DESIGN (#gtm-strategy) ── */}
      <section id="gtm-strategy" className="py-14 sm:py-20 bg-white border-b border-slate-200 scroll-mt-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <span className="text-xs font-mono text-blue-600 uppercase tracking-widest font-bold block mb-2">
              CAPABILITY A · STRATEGIC BLUEPRINT
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading mb-4">
              GTM Strategy & Architecture Design
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Architect unified go-to-market motions engineered for sustainable competitive advantage. We align micro-segment targeting, pricing structures, customer journey mapping, and executive resource allocation.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
              <span className="text-xs font-mono font-bold text-blue-600 block mb-1">Architecture 01</span>
              <h4 className="text-base font-bold text-slate-900 mb-2 font-heading">Micro-Segment Prioritization</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Dissects TAM into defensible, unit-economic micro-segments where willingness-to-pay and win probability are highest, eliminating wasted generic marketing expenditure.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
              <span className="text-xs font-mono font-bold text-blue-600 block mb-1">Architecture 02</span>
              <h4 className="text-base font-bold text-slate-900 mb-2 font-heading">Route-to-Market Engineering</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Matches buyer tiers to appropriate commercial channels: product-led self-serve for mid-market cohorts, and high-velocity AE pods supported by autonomous copilots for strategic enterprise accounts.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
              <span className="text-xs font-mono font-bold text-blue-600 block mb-1">Architecture 03</span>
              <h4 className="text-base font-bold text-slate-900 mb-2 font-heading">Executive Accountability Mandate</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Establishes shared revenue targets and SLA commitments across CMO, CRO, CCO, and Product leaders, replacing isolated vanity metrics with compounding ARR accountability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 4: CAPABILITY B - REVENUE VELOCITY OPTIMIZATION (#process) ── */}
      <section id="process" className="py-14 sm:py-20 bg-slate-50 border-b border-slate-200 scroll-mt-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <span className="text-xs font-mono text-blue-600 uppercase tracking-widest font-bold block mb-2">
              CAPABILITY B · PROCESS RE-ENGINEERING
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading mb-4">
              Revenue Velocity Optimization
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Remove structural latency across discovery, proposal formulation, legal redlining, security questionnaires, and deal closing. Transform sluggish enterprise funnels into streamlined commercial engines.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-10">
            <div className="space-y-4">
              <div className="p-5 rounded-2xl bg-white border border-slate-200">
                <h4 className="text-sm font-bold text-slate-900 font-heading mb-1 flex items-center gap-2">
                  <Clock className="w-4 h-4 text-blue-600" />
                  Stage Exit Criteria Enforcement
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Defines unambiguous mathematical exit criteria for each deal stage. Prevents pipeline bloat where unqualified deals sit in commit stages without verified economic buyer buy-in.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-slate-200">
                <h4 className="text-sm font-bold text-slate-900 font-heading mb-1 flex items-center gap-2">
                  <Workflow className="w-4 h-4 text-blue-600" />
                  Approval Loop Compression
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Replaces serialized multi-day executive sign-offs with parallel, rule-governed mobile approval triggers, reducing proposal and quote turnaround from days to hours.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-slate-200">
                <h4 className="text-sm font-bold text-slate-900 font-heading mb-1 flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-600" />
                  Handoff Friction Elimination
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Standardizes data payloads transferring between BDRs, AEs, and Customer Success to eliminate redundant customer discovery questions and shorten onboarding time-to-value.
                </p>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
              <h4 className="text-xs font-mono font-bold uppercase text-slate-400 tracking-wider mb-4">
                Cycle Compression Across Enterprise Stages
              </h4>
              <div className="space-y-3 text-xs font-mono">
                <div className="flex justify-between items-center p-2.5 rounded-lg bg-slate-50 border border-slate-200/80">
                  <span className="text-slate-700">Discovery-to-Proposal Duration</span>
                  <span className="text-slate-900 font-bold">18 Days → 6 Days</span>
                </div>
                <div className="flex justify-between items-center p-2.5 rounded-lg bg-blue-50/50 border border-blue-200">
                  <span className="text-blue-900 font-semibold">Security & Compliance Review</span>
                  <span className="text-blue-800 font-bold">24 Days → 9 Days</span>
                </div>
                <div className="flex justify-between items-center p-2.5 rounded-lg bg-emerald-50/50 border border-emerald-200">
                  <span className="text-emerald-900 font-semibold">Overall Enterprise Sales Cycle</span>
                  <span className="text-emerald-800 font-bold">-40% Cycle Duration</span>
                </div>
              </div>
              <p className="text-[11px] text-slate-500 mt-4 leading-relaxed italic">
                *Illustrative operational benchmark based on re-engineered enterprise CPQ and discovery workflows.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 5: CAPABILITY C - AI-NATIVE OPERATING MODELS (#multi-product) ── */}
      <section id="multi-product" className="py-14 sm:py-20 bg-white border-b border-slate-200 scroll-mt-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <span className="text-xs font-mono text-blue-600 uppercase tracking-widest font-bold block mb-2">
              CAPABILITY C · AI REVENUE ORCHESTRATION
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading mb-4">
              AI-Native Operating Models & Multi-Product Orchestration
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Transition legacy revenue silos into unified, autonomous AI-orchestrated motions. Combine autonomous research agents, predictive routing, and human oversight into a compounding revenue engine.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
              <span className="text-xs font-mono font-bold text-blue-600 block mb-1">Pillar 01</span>
              <h4 className="text-base font-bold text-slate-900 mb-2 font-heading">Repetitive Work Elimination</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Replaces manual lead enrichment, call note formatting, meeting prep dossiers, and calendar scheduling with autonomous software agents operating 24/7.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
              <span className="text-xs font-mono font-bold text-blue-600 block mb-1">Pillar 02</span>
              <h4 className="text-base font-bold text-slate-900 mb-2 font-heading">Multi-Product Solution Packaging</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Aligns multi-product portfolios so buyers interact with a unified commercial team rather than competing divisional reps, increasing average contract value.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
              <span className="text-xs font-mono font-bold text-blue-600 block mb-1">Pillar 03</span>
              <h4 className="text-base font-bold text-slate-900 mb-2 font-heading">Governed Agent Permissions</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Strict boundary controls ensure autonomous agents propose actions, but external communications, pricing floors, and contractual approvals require human verification.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 6: CAPABILITY D - CROSS-FUNCTIONAL REVENUE ALIGNMENT (#adoption) ── */}
      <section id="adoption" className="py-14 sm:py-20 bg-slate-50 border-b border-slate-200 scroll-mt-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <span className="text-xs font-mono text-blue-600 uppercase tracking-widest font-bold block mb-2">
              CAPABILITY D · ORGANIZATIONAL ADOPTION
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading mb-4">
              Cross-Functional Revenue Alignment & Sustained Adoption
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Synchronize marketing, product, sales, and customer success under shared executive revenue mandates. Transform behavioral change from top-down mandates into ingrained daily operating habits.
            </p>
          </div>

          <div className="p-6 sm:p-8 rounded-2xl bg-slate-900 text-white border border-slate-800 shadow-xl mb-10">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-800 gap-2 mb-6">
              <div>
                <span className="text-[10px] font-mono text-blue-400 uppercase font-bold tracking-wider">Organizational Alignment Matrix</span>
                <h4 className="text-lg font-bold font-heading">Shared Inter-Departmental Revenue Contracts</h4>
              </div>
              <span className="px-2.5 py-1 rounded bg-blue-500/20 text-blue-300 font-mono text-xs font-bold border border-blue-500/30">
                100% Cross-Functional Buy-In
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-xs font-mono">
              <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700">
                <span className="text-slate-400 text-[11px] block">Marketing Mandate</span>
                <span className="text-white block mt-0.5 font-bold">Qualified Pipeline Target</span>
                <span className="text-blue-400 text-[11px] mt-1 block">Tied directly to closed ARR</span>
              </div>
              <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700">
                <span className="text-slate-400 text-[11px] block">Sales Pod Mandate</span>
                <span className="text-white block mt-0.5 font-bold">Stage Velocity & Hygiene</span>
                <span className="text-emerald-400 text-[11px] mt-1 block">&lt;15 min lead SLA adherence</span>
              </div>
              <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700">
                <span className="text-slate-400 text-[11px] block">Product Mandate</span>
                <span className="text-white block mt-0.5 font-bold">Time-to-Value Telemetry</span>
                <span className="text-blue-400 text-[11px] mt-1 block">&lt;30 day first value realization</span>
              </div>
              <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700">
                <span className="text-slate-400 text-[11px] block">Customer Success Mandate</span>
                <span className="text-emerald-400 block mt-0.5 font-bold">Net Retention Compounding</span>
                <span className="text-slate-400 text-[11px] mt-1 block">≥120% NRR cohort benchmark</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 7: 4-STAGE TRANSFORMATION ROADMAP (#roadmap) ── */}
      <section id="roadmap" className="py-14 sm:py-20 bg-white border-b border-slate-200 scroll-mt-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono text-blue-600 uppercase tracking-widest font-bold block mb-2">
              DISCIPLINED EXECUTION SPRINT
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading mb-4">
              The 4-Stage GTM Transformation Roadmap
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              A structured, risk-mitigated progression from empirical diagnostic assessment through full operational embedding.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col justify-between">
              <div>
                <div className="w-8 h-8 rounded-lg bg-blue-600 text-white font-mono font-bold flex items-center justify-center text-xs mb-3 shadow-sm">
                  01
                </div>
                <h4 className="text-base font-bold text-slate-900 mb-2 font-heading">Stage 1: Assess</h4>
                <p className="text-xs text-slate-600 leading-relaxed mb-3">
                  Comprehensive audit of current funnel velocity, handoff friction, discounting patterns, and tech stack utilization.
                </p>
                <div className="text-[11px] font-mono text-slate-500">Deliverable: Empirical GTM Diagnostic Dossier</div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col justify-between">
              <div>
                <div className="w-8 h-8 rounded-lg bg-blue-600 text-white font-mono font-bold flex items-center justify-center text-xs mb-3 shadow-sm">
                  02
                </div>
                <h4 className="text-base font-bold text-slate-900 mb-2 font-heading">Stage 2: Design</h4>
                <p className="text-xs text-slate-600 leading-relaxed mb-3">
                  Architect the future-state operating blueprint, ICP definitions, stage exit criteria, CPQ guardrails, and role mandates.
                </p>
                <div className="text-[11px] font-mono text-slate-500">Deliverable: Future-State Operating Blueprint</div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col justify-between">
              <div>
                <div className="w-8 h-8 rounded-lg bg-blue-600 text-white font-mono font-bold flex items-center justify-center text-xs mb-3 shadow-sm">
                  03
                </div>
                <h4 className="text-base font-bold text-slate-900 mb-2 font-heading">Stage 3: Implement</h4>
                <p className="text-xs text-slate-600 leading-relaxed mb-3">
                  Deploy autonomous workflow copilots, reconfigure CRM routing rules, and align incentive compensation structures.
                </p>
                <div className="text-[11px] font-mono text-slate-500">Deliverable: Live AI-Native RevOps Pipeline</div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col justify-between">
              <div>
                <div className="w-8 h-8 rounded-lg bg-blue-600 text-white font-mono font-bold flex items-center justify-center text-xs mb-3 shadow-sm">
                  04
                </div>
                <h4 className="text-base font-bold text-slate-900 mb-2 font-heading">Stage 4: Optimize</h4>
                <p className="text-xs text-slate-600 leading-relaxed mb-3">
                  Continuous telemetry monitoring, cohort close-rate analysis, and periodic model recalibration against actual performance.
                </p>
                <div className="text-[11px] font-mono text-slate-500">Deliverable: Compounding ARR Operating Rhythm</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 8: KPI MEASUREMENT FRAMEWORK ── */}
      <section id="kpis" className="py-14 sm:py-20 bg-slate-50 border-b border-slate-200 scroll-mt-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono text-blue-600 uppercase tracking-widest font-bold block mb-2">
              MEASUREMENT ARCHITECTURE
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading mb-4">
              GTM Transformation KPI Framework
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Empirically measured outcomes tracking operating model velocity, process quality, and team productivity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-white border border-slate-200">
              <div className="text-xs font-mono text-blue-600 uppercase font-bold mb-1">Sales Cycle Duration</div>
              <h4 className="text-base font-bold text-slate-900 mb-2">Velocity Modernization</h4>
              <p className="text-xs text-slate-600 mb-3"><strong>Formula:</strong> Average elapsed days from initial qualified opportunity creation to contract signature.</p>
              <div className="text-[11px] font-mono text-slate-500 pt-3 border-t border-slate-100">
                Target: -40% Duration · Source: CRM Opportunity Timestamp Log
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200">
              <div className="text-xs font-mono text-blue-600 uppercase font-bold mb-1">Field Adoption Rate</div>
              <h4 className="text-base font-bold text-slate-900 mb-2">Process Compliance</h4>
              <p className="text-xs text-slate-600 mb-3"><strong>Formula:</strong> (Active sales reps meeting weekly workflow and telemetry criteria) ÷ (Total commercial reps).</p>
              <div className="text-[11px] font-mono text-slate-500 pt-3 border-t border-slate-100">
                Target: ≥85% · Source: System Telemetry Logins & Updates
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200">
              <div className="text-xs font-mono text-blue-600 uppercase font-bold mb-1">Cross-Functional SLA Rate</div>
              <h4 className="text-base font-bold text-slate-900 mb-2">Handoff Discipline</h4>
              <p className="text-xs text-slate-600 mb-3"><strong>Formula:</strong> (Departmental transitions completed within contractual SLA limit) ÷ (Total transitions).</p>
              <div className="text-[11px] font-mono text-slate-500 pt-3 border-t border-slate-100">
                Target: ≥98% · Source: Automated Event Routing Logs
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 9: EXECUTIVE BRIEFING INTAKE ── */}
      <section id="intake" className="py-16 sm:py-24 bg-slate-950 text-white relative overflow-hidden border-t border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 font-mono text-xs font-bold uppercase tracking-widest mb-4">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>CONFIDENTIAL TRANSFORMATION BRIEFING</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-heading mb-4">
            Design Your Next-Stage Revenue Operating Model
          </h2>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Schedule an architectural session with a Principal Transformation Architect. We evaluate your revenue operating model, sales cycle friction, and cross-functional alignment under mutual NDA.
          </p>
        </div>

        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <OfferingsIntakeForm
            pageContext="GTM Operating Model Transformation"
            defaultObjective="GTM Strategy & Operating Model Redesign"
          />
        </div>
      </section>
    </div>
  );
}
