import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Compass, ArrowRight, ShieldCheck, CheckCircle2, TrendingUp, Target,
  DollarSign, Activity, Layers, Search, Sparkles, Lock, ChevronRight,
  Zap, BarChart3, Sliders, Cpu, Shield, ArrowUpRight, Clock,
  Check, Bot, FileText, CreditCard, Briefcase, AlertTriangle,
  Scale, Users, LineChart, CheckCircle, RefreshCw, Eye
} from 'lucide-react';
import OfferingsIntakeForm from '../../components/forms/OfferingsIntakeForm';

export default function SalesAcceleration() {
  const location = useLocation();

  useEffect(() => {
    document.title = 'Sales Acceleration | Sales Execution Architecture | ProfitMachines';
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

  const dealFrictionPoints = [
    {
      stage: 'Phase 01 · Qualification & Discovery',
      title: 'Incomplete Buying Committee Mapping',
      friction: 'Deals initiate with a single technical champion. Economic buyers and procurement stakeholders remain unengaged until late in the quarter, causing sudden stall.',
      consequence: '6-9 month cycle drag and unexpected disqualification during final budget approvals.',
      kpiImpact: '-40% First-Meeting-to-Proposal Conversion'
    },
    {
      stage: 'Phase 02 · Technical Validation',
      title: 'Unresolved Objections & Silent Hesitation',
      friction: 'Security redlines, data sovereignty questions, and architecture doubts linger unanswered because sales reps lack real-time conversational intelligence.',
      consequence: 'Deals slip past committed close dates as internal review boards wait for technical clarification.',
      kpiImpact: '+45 Days Added to Enterprise Sales Cycles'
    },
    {
      stage: 'Phase 03 · Commercial Proposal',
      title: 'Discretionary Discounting & CPQ Bottlenecks',
      friction: 'Reps offer unearned 25-40% price concessions to artificially pull deals forward, while waiting days for manual finance and legal approvals.',
      consequence: 'Gross margin erosion and contract cycle latency across mid-market and enterprise deals.',
      kpiImpact: '8-15 Margin Points Leaked per Contract'
    },
    {
      stage: 'Phase 04 · Forecast Commitment',
      title: 'Subjective Rep Forecast Confidence',
      friction: 'Sales managers base board commitments on rep gut-feel rather than empirical velocity metrics, leading to surprise revenue misses.',
      consequence: 'Over 40% of commit deals slip to following quarters, destroying board forecasting credibility.',
      kpiImpact: '±28% Forecast Variance at Quarter Close'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* ── STICKY PAGE SUB-NAV BAR (GLOBAL ACCELERATION PALETTE) ── */}
      <nav aria-label="Page Sub Navigation" className="sticky top-16 z-30 bg-slate-900/95 backdrop-blur-md border-b border-slate-800 text-white text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-11 flex items-center justify-between gap-4 overflow-x-auto no-scrollbar">
          <div className="flex items-center gap-2.5 shrink-0">
            <span className="font-mono text-blue-400 font-bold">OFFERING 03</span>
            <span className="font-bold text-slate-200">Sales Acceleration</span>
            <span className="hidden sm:inline text-slate-500">|</span>
            <span className="hidden sm:inline text-slate-400 font-medium">Sales Execution</span>
          </div>

          <div className="flex items-center gap-3 shrink-0 text-slate-300 font-medium text-[11px] sm:text-xs">
            <a href="#friction" onClick={(e) => scrollToAnchor(e, 'friction')} className="hover:text-blue-400 transition-colors">Deal Friction</a>
            <a href="#autonomous-workflows" onClick={(e) => scrollToAnchor(e, 'autonomous-workflows')} className="hover:text-blue-400 transition-colors">AI Sales Execution</a>
            <a href="#deal-intelligence" onClick={(e) => scrollToAnchor(e, 'deal-intelligence')} className="hover:text-blue-400 transition-colors">Deal Intelligence</a>
            <a href="#quote-to-cash" onClick={(e) => scrollToAnchor(e, 'quote-to-cash')} className="hover:text-blue-400 transition-colors">Process Optimization</a>
            <a href="#workflow" onClick={(e) => scrollToAnchor(e, 'workflow')} className="hover:text-blue-400 transition-colors">Connected Motion</a>
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
            <span className="text-blue-400 font-bold">Sales Acceleration</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/15 border border-blue-400/30 text-blue-300 text-xs font-bold tracking-widest uppercase font-mono mb-4">
                <TrendingUp className="w-3.5 h-3.5 text-blue-400" />
                <span>SALES EXECUTION ARCHITECTURE</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.15] mb-5 font-heading">
                Move Opportunities Forward With{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-indigo-300">
                  Greater Confidence
                </span>
              </h1>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-6 max-w-3xl">
                Connect revenue intelligence, AI-assisted sales execution, deal analysis, process optimization, and forecasting to help teams identify risks earlier, improve sales coordination, and make better-informed revenue decisions.
              </p>

              {/* Target Decision-Makers */}
              <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 text-xs text-slate-300 mb-8 space-y-1 max-w-2xl">
                <div className="text-[11px] font-mono font-bold text-blue-400 uppercase tracking-wider">
                  Target Decision-Makers:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 text-slate-300">
                  <div className="flex items-center gap-1.5"><span className="text-blue-400">•</span> Chief Revenue Officers (CROs) & Sales VPs</div>
                  <div className="flex items-center gap-1.5"><span className="text-blue-400">•</span> Enterprise Account Executives & Sales Pods</div>
                  <div className="flex items-center gap-1.5"><span className="text-blue-400">•</span> Revenue Operations & Commercial Directors</div>
                  <div className="flex items-center gap-1.5"><span className="text-blue-400">•</span> Financial Services & Tech Sales Leadership</div>
                </div>
              </div>

              {/* Hero CTAs */}
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="#intake"
                  onClick={(e) => scrollToAnchor(e, 'intake')}
                  className="px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 active:bg-blue-700 text-white font-bold text-sm transition-all shadow-lg shadow-blue-600/30 inline-flex items-center gap-2 group cursor-pointer"
                >
                  <span>Accelerate Your Sales Process</span>
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
                  Execution Benchmark Matrix
                </div>
                <div className="space-y-3">
                  <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700/80">
                    <div className="text-[11px] text-slate-400 uppercase font-mono">Deal Cycle Duration</div>
                    <div className="text-xl font-bold font-mono text-emerald-400 mt-0.5">28% Cycle Compression</div>
                    <p className="text-[11px] text-slate-400 mt-1">Measured across qualified multi-stakeholder enterprise opportunities.</p>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700/80">
                    <div className="text-[11px] text-slate-400 uppercase font-mono">Forecast Precision</div>
                    <div className="text-xl font-bold font-mono text-blue-400 mt-0.5">99.4% Statistical Fit</div>
                    <p className="text-[11px] text-slate-400 mt-1">Bayesian model calibration vs final quarter close outcomes.</p>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700/80">
                    <div className="text-[11px] text-slate-400 uppercase font-mono">Rep Administrative Relief</div>
                    <div className="text-xl font-bold font-mono text-white mt-0.5">14+ hrs/week Reclaimed</div>
                    <p className="text-[11px] text-slate-400 mt-1">Automated call summarization, meeting prep, and CRM data sync.</p>
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

      {/* ── SECTION 2: WHERE DEALS LOSE MOMENTUM ── */}
      <section id="friction" className="py-14 sm:py-20 bg-slate-50 border-b border-slate-200 scroll-mt-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <span className="text-xs font-mono text-blue-600 uppercase tracking-widest font-bold block mb-2">
              OPPORTUNITY LATENCY DIAGNOSTICS
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading mb-4">
              Where Enterprise Deals Lose Momentum
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Deals rarely fail in an instant. They decay through subtle, compounding operational friction across stakeholder alignment, discovery omissions, delayed quote approvals, and subjective forecast guessing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {dealFrictionPoints.map((item, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs hover:border-blue-400 transition-all flex flex-col justify-between">
                <div>
                  <div className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-blue-50 text-blue-700 border border-blue-200 font-bold inline-block mb-3">
                    {item.stage}
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-2 font-heading">{item.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">{item.friction}</p>
                  <p className="text-xs text-slate-500 italic border-l-2 border-slate-200 pl-2.5 mb-4">{item.consequence}</p>
                </div>
                <div className="pt-3 border-t border-slate-100 text-xs font-mono text-emerald-600 font-bold">
                  {item.kpiImpact}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 3: CAPABILITY A - REVENUE INTELLIGENCE (FEATURED PORTAL) ── */}
      <section className="py-12 sm:py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-10 rounded-3xl bg-slate-900 text-white border border-slate-800 shadow-xl relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              <div className="lg:col-span-8">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 font-mono text-xs font-bold uppercase tracking-wider mb-3">
                  <Activity className="w-3.5 h-3.5 text-blue-400" />
                  <span>DEEP CAPABILITY OVERVIEW · SECTOR INTEL</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-heading mb-3">
                  Revenue Intelligence: Dark-Funnel & Buying Signals
                </h3>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6 max-w-2xl">
                  Uncover hidden buyer intent, stakeholder committee shifts, and account health signals across the entire sales surface. Access the dedicated Revenue Intelligence capability hub for complete signal topology.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6 text-xs text-slate-300 font-mono">
                  <div className="p-2.5 rounded-lg bg-slate-800/80 border border-slate-700">
                    <span className="text-blue-400 block font-bold">Signal Ingestion</span> 40+ Dark-Funnel Feeds
                  </div>
                  <div className="p-2.5 rounded-lg bg-slate-800/80 border border-slate-700">
                    <span className="text-blue-400 block font-bold">Stakeholder Radar</span> Committee Sentiment Maps
                  </div>
                  <div className="p-2.5 rounded-lg bg-slate-800/80 border border-slate-700">
                    <span className="text-blue-400 block font-bold">Risk Alerts</span> Pre-Slippage Interventions
                  </div>
                </div>
              </div>
              <div className="lg:col-span-4 flex flex-col sm:items-start lg:items-end justify-center">
                <Link
                  to="/ai-native-sales/revenue-intelligence"
                  className="px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm transition-all shadow-lg shadow-blue-600/30 inline-flex items-center gap-2 group cursor-pointer"
                >
                  <span>Explore Revenue Intelligence</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <span className="text-[11px] font-mono text-slate-400 mt-2">
                  Direct navigation to AI Native Sales module
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 4: CAPABILITY B - AI-ASSISTED SALES EXECUTION (#autonomous-workflows) ── */}
      <section id="autonomous-workflows" className="py-14 sm:py-20 bg-slate-50 border-b border-slate-200 scroll-mt-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <span className="text-xs font-mono text-blue-600 uppercase tracking-widest font-bold block mb-2">
              CAPABILITY B · EXECUTION ENGINE
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading mb-4">
              AI-Assisted Sales Execution
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Liberate sales reps from administrative drag. Autonomous copilots formulate discovery dossiers, generate instant conversation transcripts, log CRM stage updates, and draft tailored follow-up action plans.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-10">
            <div className="lg:col-span-6 space-y-4">
              <div className="p-6 rounded-2xl bg-white border border-slate-200">
                <h4 className="text-sm font-bold text-slate-900 font-heading mb-2 flex items-center gap-2">
                  <Bot className="w-4 h-4 text-blue-600" />
                  Pre-Meeting Dossier Formulation
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Before executive calls, reps receive synthesized account dossiers extracting past meeting objections, stakeholder organizational trees, and active competitor usage to guide strategic discovery.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-slate-200">
                <h4 className="text-sm font-bold text-slate-900 font-heading mb-2 flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-600" />
                  Post-Call Action & CRM Hygiene
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Summarizes conversation audio in real time, isolates agreed customer next steps, drafts mutual action plans, and automatically pushes structured field updates directly into Salesforce or HubSpot.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-slate-200">
                <h4 className="text-sm font-bold text-slate-900 font-heading mb-2 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-blue-600" />
                  Human-in-the-Loop Governance
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Sales reps retain 100% final approval authority over customer communications. AI proposes tailored email sequences and contract terms, but zero external messages dispatch without explicit human sign-off.
                </p>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="p-6 rounded-2xl bg-white border border-slate-200">
                <h4 className="text-xs font-mono font-bold uppercase text-slate-400 tracking-wider mb-4">
                  Rep Operating Capacity Shift (Before vs. AI-Assisted)
                </h4>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-xs font-mono mb-1">
                      <span className="text-slate-600 font-medium">Conventional Sales Week: Active Selling</span>
                      <span className="text-slate-900 font-bold">35% of Total Time</span>
                    </div>
                    <div className="w-full h-2.5 rounded-full bg-slate-100 overflow-hidden">
                      <div className="h-full bg-slate-400 rounded-full" style={{ width: '35%' }} />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-xs font-mono mb-1">
                      <span className="text-blue-600 font-bold">With ProfitMachines Copilot: Active Selling</span>
                      <span className="text-blue-700 font-bold">78% of Total Time</span>
                    </div>
                    <div className="w-full h-2.5 rounded-full bg-blue-100 overflow-hidden">
                      <div className="h-full bg-blue-600 rounded-full" style={{ width: '78%' }} />
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 space-y-1 mt-4">
                    <div className="font-bold text-slate-900">Key Measurable Outcomes:</div>
                    <div>• <strong>Preparation Time:</strong> Compressed from 45 min to &lt;5 min per executive briefing.</div>
                    <div>• <strong>Follow-up Latency:</strong> Immediate draft creation within 15 minutes of call termination.</div>
                    <div>• <strong>CRM Data Completeness:</strong> 99.2% compliance across mandatory qualification fields.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 5: CAPABILITY C - OPPORTUNITY & DEAL INTELLIGENCE (#deal-intelligence) ── */}
      <section id="deal-intelligence" className="py-14 sm:py-20 bg-white border-b border-slate-200 scroll-mt-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <span className="text-xs font-mono text-blue-600 uppercase tracking-widest font-bold block mb-2">
              CAPABILITY C · DEAL TELEMETRY
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading mb-4">
              Opportunity & Deal Intelligence
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Replace subjective gut-feel with Bayesian win-probability modeling, buying committee consensus tracking, and automated slippage warning radar.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-xs font-mono mb-3">
                01
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2 font-heading">Bayesian Win-Probability Scoring</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Scores active enterprise pipeline using multi-variable econometric factors: email response latency, multi-threading depth, champion tenure, and competitor mention density.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-xs font-mono mb-3">
                02
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2 font-heading">Buying Committee Consensus Radar</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Visualizes stakeholder coverage across Economic Buyers, Technical Evaluators, Security Officers, and Legal Counsel. Highlights missing signatures weeks before quarter close.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-xs font-mono mb-3">
                03
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2 font-heading">Early Deal Slippage Intervention</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Identifies decelerating deal velocity 21-30 days before close date. Triggers targeted intervention playbooks to re-engage executive sponsors and rescue at-risk ARR.
              </p>
            </div>
          </div>

          {/* Deal Health Dashboard Mockup */}
          <div className="p-6 sm:p-8 rounded-2xl bg-slate-900 text-white border border-slate-800 shadow-xl">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-800 gap-2 mb-6">
              <div>
                <span className="text-[10px] font-mono text-blue-400 uppercase font-bold tracking-wider">Illustrative Scenario</span>
                <h4 className="text-lg font-bold font-heading">Enterprise Deal Health Telemetry Console</h4>
              </div>
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-1 rounded bg-emerald-500/20 text-emerald-300 font-mono text-xs font-bold border border-emerald-500/30">
                  Model Fit: 99.4% Precision
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-xs">
              <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700">
                <span className="text-slate-400 block font-mono text-[11px]">Opportunity</span>
                <span className="text-base font-bold text-white block mt-0.5">Global FinTech Corp</span>
                <span className="text-blue-400 font-mono mt-1 block">$480,000 ACV · Q3 Commit</span>
              </div>
              <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700">
                <span className="text-slate-400 block font-mono text-[11px]">Win Probability</span>
                <span className="text-base font-bold text-emerald-400 block mt-0.5">84% (+12% vs. Prior)</span>
                <span className="text-slate-400 text-[11px] block mt-1">Multi-threaded (7 Contacts)</span>
              </div>
              <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700">
                <span className="text-slate-400 block font-mono text-[11px]">Velocity Stall Risk</span>
                <span className="text-base font-bold text-amber-400 block mt-0.5">Moderate (Security Redline)</span>
                <span className="text-slate-400 text-[11px] block mt-1">InfoSec review pending 9 days</span>
              </div>
              <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700">
                <span className="text-slate-400 block font-mono text-[11px]">Recommended Intervention</span>
                <span className="text-base font-bold text-white block mt-0.5">Dispatch CISO Dossier</span>
                <span className="text-blue-400 text-[11px] block mt-1">Deploy SOC2 pre-approval doc</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 6: CAPABILITY D - SALES PROCESS OPTIMIZATION (#quote-to-cash) ── */}
      <section id="quote-to-cash" className="py-14 sm:py-20 bg-slate-50 border-b border-slate-200 scroll-mt-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <span className="text-xs font-mono text-blue-600 uppercase tracking-widest font-bold block mb-2">
              CAPABILITY D · COMMERCIAL VELOCITY
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading mb-4">
              Sales Process Optimization & Quote-to-Cash
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Eliminate friction between verbal agreement and signed contract. Optimize quoting turnaround, automate discount governance, compress security reviews, and expedite legal redlining loops.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-10">
            <div className="space-y-3">
              <div className="p-4 rounded-xl bg-white border border-slate-200 flex items-start gap-3">
                <div className="w-6 h-6 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 font-bold text-xs mt-0.5">1</div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 font-heading">Automated Discount Guardrails</h4>
                  <p className="text-xs text-slate-600 mt-1">Configurable CPQ rules prevent unearned discounting by matching proposed rates to account ACV, multi-year term, and prepayment terms.</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white border border-slate-200 flex items-start gap-3">
                <div className="w-6 h-6 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 font-bold text-xs mt-0.5">2</div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 font-heading">Sub-Hour Approval Routing</h4>
                  <p className="text-xs text-slate-600 mt-1">Eliminates multi-day waiting queues. Quotes requiring special terms route automatically via Slack/Teams to designated finance authorities with instant mobile sign-off.</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white border border-slate-200 flex items-start gap-3">
                <div className="w-6 h-6 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 font-bold text-xs mt-0.5">3</div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 font-heading">Legal & InfoSec Fast-Tracks</h4>
                  <p className="text-xs text-slate-600 mt-1">Pre-approved standard fallback clauses and automated security questionnaire response vaults compress customer legal review by up to 60%.</p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200">
              <h4 className="text-xs font-mono font-bold uppercase text-slate-400 tracking-wider mb-4">
                Stage Duration Compression Metrics
              </h4>
              <div className="space-y-3 text-xs font-mono">
                <div className="flex justify-between items-center p-2.5 rounded-lg bg-slate-50 border border-slate-200/80">
                  <span className="text-slate-700">Proposal Turnaround Time</span>
                  <span className="text-slate-900 font-bold">4.2 Days → 3.5 Hours</span>
                </div>
                <div className="flex justify-between items-center p-2.5 rounded-lg bg-blue-50/50 border border-blue-200">
                  <span className="text-blue-900 font-semibold">Legal Redline & Security Review</span>
                  <span className="text-blue-800 font-bold">28 Days → 11 Days</span>
                </div>
                <div className="flex justify-between items-center p-2.5 rounded-lg bg-emerald-50/50 border border-emerald-200">
                  <span className="text-emerald-900 font-semibold">Total Quote-to-Contract Duration</span>
                  <span className="text-emerald-800 font-bold">-40% Overall Elapsed Time</span>
                </div>
              </div>
              <p className="text-[11px] text-slate-500 mt-3 italic">
                *Based on operational time-study data comparing manual vs. automated enterprise CPQ routing pipelines.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 7: CAPABILITY E - REVENUE FORECASTING (FEATURED PORTAL) ── */}
      <section className="py-12 sm:py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-10 rounded-3xl bg-slate-900 text-white border border-slate-800 shadow-xl relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              <div className="lg:col-span-8">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 font-mono text-xs font-bold uppercase tracking-wider mb-3">
                  <LineChart className="w-3.5 h-3.5 text-blue-400" />
                  <span>DEEP CAPABILITY OVERVIEW · REVENUE SCIENCE</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-heading mb-3">
                  Revenue Forecasting: Deterministic Econometric Models
                </h3>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6 max-w-2xl">
                  Forecast quarter close with 99.4% precision. Replace subjective rep commit categories with mathematical pipeline velocity, cohort progression physics, and automated variance mitigation.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6 text-xs text-slate-300 font-mono">
                  <div className="p-2.5 rounded-lg bg-slate-800/80 border border-slate-700">
                    <span className="text-blue-400 block font-bold">Accuracy</span> 99.4% Statistical Fit
                  </div>
                  <div className="p-2.5 rounded-lg bg-slate-800/80 border border-slate-700">
                    <span className="text-blue-400 block font-bold">Variance</span> &lt;2% Quarterly Spread
                  </div>
                  <div className="p-2.5 rounded-lg bg-slate-800/80 border border-slate-700">
                    <span className="text-blue-400 block font-bold">Simulation</span> Monte Carlo Scenarios
                  </div>
                </div>
              </div>
              <div className="lg:col-span-4 flex flex-col sm:items-start lg:items-end justify-center">
                <Link
                  to="/growth-science/revenue-physics"
                  className="px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm transition-all shadow-lg shadow-blue-600/30 inline-flex items-center gap-2 group cursor-pointer"
                >
                  <span>Inspect Revenue Physics</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <span className="text-[11px] font-mono text-slate-400 mt-2">
                  Direct navigation to Growth Science framework
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 8: CONNECTED SALES ACCELERATION WORKFLOW ── */}
      <section id="workflow" className="py-14 sm:py-20 bg-slate-50 border-b border-slate-200 scroll-mt-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono text-blue-600 uppercase tracking-widest font-bold block mb-2">
              END-TO-END OPERATING TOPOLOGY
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading mb-4">
              Connected Sales Acceleration Workflow
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Sales acceleration is not an isolated point tool. It operates as a connected loop where buyer intelligence directly powers rep execution, deal health surveillance, and forecast certainty.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            <div className="p-5 rounded-2xl bg-white border border-slate-200 relative">
              <span className="text-xs font-mono font-bold text-blue-600 block mb-1">01. Signal</span>
              <h4 className="text-sm font-bold text-slate-900 mb-2 font-heading">Account Intelligence</h4>
              <p className="text-xs text-slate-600">Continuous dark-funnel surge detection surfaces in-market buying committees.</p>
            </div>
            <div className="p-5 rounded-2xl bg-white border border-slate-200 relative">
              <span className="text-xs font-mono font-bold text-blue-600 block mb-1">02. Preparation</span>
              <h4 className="text-sm font-bold text-slate-900 mb-2 font-heading">AI Sales Execution</h4>
              <p className="text-xs text-slate-600">Autonomous dossiers formulate tailored discovery questions and battlecards.</p>
            </div>
            <div className="p-5 rounded-2xl bg-white border border-slate-200 relative">
              <span className="text-xs font-mono font-bold text-blue-600 block mb-1">03. Telemetry</span>
              <h4 className="text-sm font-bold text-slate-900 mb-2 font-heading">Deal Health</h4>
              <p className="text-xs text-slate-600">Bayesian win-probability scoring highlights missing stakeholders & stall risks.</p>
            </div>
            <div className="p-5 rounded-2xl bg-white border border-slate-200 relative">
              <span className="text-xs font-mono font-bold text-blue-600 block mb-1">04. Finalization</span>
              <h4 className="text-sm font-bold text-slate-900 mb-2 font-heading">Quote-to-Cash</h4>
              <p className="text-xs text-slate-600">Discount guardrails and instant sub-hour approvals compress contract cycle.</p>
            </div>
            <div className="p-5 rounded-2xl bg-white border border-slate-200 relative">
              <span className="text-xs font-mono font-bold text-blue-600 block mb-1">05. Calibration</span>
              <h4 className="text-sm font-bold text-slate-900 mb-2 font-heading">Forecast Review</h4>
              <p className="text-xs text-slate-600">Deterministic pipeline modeling ensures reliable quarterly revenue delivery.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 9: KPI MEASUREMENT FRAMEWORK ── */}
      <section id="kpis" className="py-14 sm:py-20 bg-white border-b border-slate-200 scroll-mt-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono text-blue-600 uppercase tracking-widest font-bold block mb-2">
              MEASUREMENT ARCHITECTURE
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading mb-4">
              Sales Acceleration KPI & Metrics Framework
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Every sales acceleration metric is grounded in transparent formulas, documented data sources, and empirical comparison baselines.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="text-xs font-mono text-blue-600 uppercase font-bold mb-1">Sales-Cycle Duration</div>
              <h4 className="text-base font-bold text-slate-900 mb-2">Cycle Time Compression</h4>
              <p className="text-xs text-slate-600 mb-3"><strong>Formula:</strong> Elapsed calendar days from Stage 1 Qualification creation to Closed-Won contract execution.</p>
              <div className="text-[11px] font-mono text-slate-500 pt-3 border-t border-slate-200">
                Source: CRM Stage History Timestamp Log · Baseline Target: -28% Duration
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="text-xs font-mono text-blue-600 uppercase font-bold mb-1">Deal Slippage Rate</div>
              <h4 className="text-base font-bold text-slate-900 mb-2">Quarterly Slippage Minimization</h4>
              <p className="text-xs text-slate-600 mb-3"><strong>Formula:</strong> (Commit opportunities pushed to next quarter) ÷ (Total commit opportunities at Day 60).</p>
              <div className="text-[11px] font-mono text-slate-500 pt-3 border-t border-slate-200">
                Source: Bi-weekly Commit Snapshot Audits · Target: &lt;10% Total Slip Rate
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="text-xs font-mono text-blue-600 uppercase font-bold mb-1">Realized Price Integrity</div>
              <h4 className="text-base font-bold text-slate-900 mb-2">Margin Protection & CPQ Floors</h4>
              <p className="text-xs text-slate-600 mb-3"><strong>Formula:</strong> Actual contracted ARR ÷ List Price ARR across closed enterprise deals.</p>
              <div className="text-[11px] font-mono text-slate-500 pt-3 border-t border-slate-200">
                Source: CPQ Contract Ingestion Feeds · Target: ≥92% Price Realization
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 10: EXECUTIVE BRIEFING INTAKE ── */}
      <section id="intake" className="py-16 sm:py-24 bg-slate-950 text-white relative overflow-hidden border-t border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 font-mono text-xs font-bold uppercase tracking-widest mb-4">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>CONFIDENTIAL ARCHITECTURE BRIEFING</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-heading mb-4">
            Understand What Is Slowing Your Deals Down
          </h2>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Schedule an executive architecture session with a Principal Revenue Systems Architect. We audit your stage velocity, discount leakage, and buying committee gaps under mutual NDA.
          </p>
        </div>

        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <OfferingsIntakeForm
            pageContext="Sales Acceleration Diagnostic"
            defaultObjective="Sales Process Optimization & Deal Velocity"
          />
        </div>
      </section>
    </div>
  );
}
