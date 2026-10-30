import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Compass, ArrowRight, ShieldCheck, CheckCircle2, TrendingUp, Target,
  DollarSign, Activity, Layers, Search, Sparkles, Lock, ChevronRight,
  Zap, BarChart3, Sliders, Cpu, Shield, ArrowUpRight, Clock,
  Check, Bot, FileText, CreditCard, Briefcase, AlertTriangle,
  Scale, Users, LineChart, CheckCircle, RefreshCw, Eye, UserCheck,
  HeartHandshake, Rocket, Award, HeartPulse
} from 'lucide-react';
import OfferingsIntakeForm from '../../components/forms/OfferingsIntakeForm';

export default function CustomerSuccess() {
  const location = useLocation();

  useEffect(() => {
    document.title = 'Customer Growth | Customer Value & Retention Architecture | ProfitMachines';
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

  const lifecycleFrictionPoints = [
    {
      title: 'Unmonitored Adoption Decay',
      problem: 'Product usage drops quietly across departments after initial onboarding, remaining undetected until the formal renewal window.',
      consequence: 'Surprise contract terminations and forced emergency discounting to save churn-threatened accounts.',
      impact: '15-25% Annual Gross Revenue Leakage'
    },
    {
      title: 'Reactive Account Management',
      problem: 'Customer Success Managers spend time resolving isolated tactical support tickets rather than guiding strategic business value realization.',
      consequence: 'Executives view software as an unquantified line-item expense rather than an indispensable growth partner.',
      impact: 'Sub-90% Gross Retention on Enterprise Accounts'
    },
    {
      title: 'Blindness to Natural Expansion Triggers',
      problem: 'Accounts reach seat saturation or surge in API usage, but account executives lack automated signals to initiate contextual upsell.',
      consequence: 'Expansion revenue is left on the table or delayed until annual anniversary negotiations.',
      impact: '10-20 Points Forfeited from Net Retention (NRR)'
    },
    {
      title: 'Last-Minute Renewal Negotiations',
      problem: 'Renewal conversations begin 30 days before expiration without prior executive sponsorship check-ins or documented ROI evidence.',
      consequence: 'Procurement demands severe 30-50% rate cuts or requests delayed decision windows.',
      impact: 'Compressed Realized Margins on Renewals'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* ── STICKY PAGE SUB-NAV BAR (GLOBAL ACCELERATION PALETTE) ── */}
      <nav aria-label="Page Sub Navigation" className="sticky top-16 z-30 bg-slate-900/95 backdrop-blur-md border-b border-slate-800 text-white text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-11 flex items-center justify-between gap-4 overflow-x-auto no-scrollbar">
          <div className="flex items-center gap-2.5 shrink-0">
            <span className="font-mono text-blue-400 font-bold">OFFERING 05</span>
            <span className="font-bold text-slate-200">Customer Growth</span>
            <span className="hidden sm:inline text-slate-500">|</span>
            <span className="hidden sm:inline text-slate-400 font-medium">Customer Value</span>
          </div>

          <div className="flex items-center gap-3 shrink-0 text-slate-300 font-medium text-[11px] sm:text-xs">
            <a href="#friction" onClick={(e) => scrollToAnchor(e, 'friction')} className="hover:text-blue-400 transition-colors">Lifecycle Friction</a>
            <a href="#health" onClick={(e) => scrollToAnchor(e, 'health')} className="hover:text-blue-400 transition-colors">CS Intelligence</a>
            <a href="#retention" onClick={(e) => scrollToAnchor(e, 'retention')} className="hover:text-blue-400 transition-colors">Churn Prevention</a>
            <a href="#expansion-engine" onClick={(e) => scrollToAnchor(e, 'expansion-engine')} className="hover:text-blue-400 transition-colors">Expansion Revenue</a>
            <a href="#renewal" onClick={(e) => scrollToAnchor(e, 'renewal')} className="hover:text-blue-400 transition-colors">Renewal & Upsell</a>
            <a href="#model" onClick={(e) => scrollToAnchor(e, 'model')} className="hover:text-blue-400 transition-colors">Operating Model</a>
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
            <span className="text-blue-400 font-bold">Customer Growth</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/15 border border-blue-400/30 text-blue-300 text-xs font-bold tracking-widest uppercase font-mono mb-4">
                <HeartPulse className="w-3.5 h-3.5 text-blue-400" />
                <span>CUSTOMER VALUE & EXPANSION PLATFORM</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.15] mb-5 font-heading">
                Turn Customer Value Into{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-indigo-300">
                  Sustainable Revenue Growth
                </span>
              </h1>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-6 max-w-3xl">
                Connect customer success, adoption, retention, expansion, and renewal planning. Help teams identify where customers need support, where value is being realized, and where relevant growth opportunities naturally exist.
              </p>

              {/* Target Decision-Makers */}
              <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 text-xs text-slate-300 mb-8 space-y-1 max-w-2xl">
                <div className="text-[11px] font-mono font-bold text-blue-400 uppercase tracking-wider">
                  Target Decision-Makers:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 text-slate-300">
                  <div className="flex items-center gap-1.5"><span className="text-blue-400">•</span> Chief Customer Officers (CCOs) & CS Leaders</div>
                  <div className="flex items-center gap-1.5"><span className="text-blue-400">•</span> Account Management & Expansion Pods</div>
                  <div className="flex items-center gap-1.5"><span className="text-blue-400">•</span> Subscription SaaS & Cloud Infrastructure Execs</div>
                  <div className="flex items-center gap-1.5"><span className="text-blue-400">•</span> Chief Revenue Officers (CROs) & FP&A Leaders</div>
                </div>
              </div>

              {/* Hero CTAs */}
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="#intake"
                  onClick={(e) => scrollToAnchor(e, 'intake')}
                  className="px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 active:bg-blue-700 text-white font-bold text-sm transition-all shadow-lg shadow-blue-600/30 inline-flex items-center gap-2 group cursor-pointer"
                >
                  <span>Strengthen Customer Growth</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>

                <Link
                  to="/book-consultation"
                  className="px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-200 font-bold text-sm transition-all inline-flex items-center gap-2 cursor-pointer"
                >
                  <span>Discuss Your Customer Strategy</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-4">
              <div className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-xl space-y-4">
                <div className="text-xs font-mono font-bold uppercase text-blue-400 tracking-wider">
                  Customer Value Benchmark Matrix
                </div>
                <div className="space-y-3">
                  <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700/80">
                    <div className="text-[11px] text-slate-400 uppercase font-mono">Net Revenue Retention (NRR)</div>
                    <div className="text-xl font-bold font-mono text-emerald-400 mt-0.5">118% – 134% Compounding</div>
                    <p className="text-[11px] text-slate-400 mt-1">Sustained expansion velocity across multi-year enterprise customer cohorts.</p>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700/80">
                    <div className="text-[11px] text-slate-400 uppercase font-mono">Pre-Churn Detection Window</div>
                    <div className="text-xl font-bold font-mono text-blue-400 mt-0.5">60–90 Days Lead Time</div>
                    <p className="text-[11px] text-slate-400 mt-1">Behavioral drop-off signals surface risks months before renewal.</p>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700/80">
                    <div className="text-[11px] text-slate-400 uppercase font-mono">Gross Retention Floor</div>
                    <div className="text-xl font-bold font-mono text-white mt-0.5">≥94% GRR Integrity</div>
                    <p className="text-[11px] text-slate-400 mt-1">Automated value realization playbooks protect core contracted ARR.</p>
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

      {/* ── SECTION 2: THE LIFECYCLE FRICTION DIAGNOSTIC ── */}
      <section id="friction" className="py-14 sm:py-20 bg-slate-50 border-b border-slate-200 scroll-mt-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <span className="text-xs font-mono text-blue-600 uppercase tracking-widest font-bold block mb-2">
              CUSTOMER LIFECYCLE AUDIT
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading mb-4">
              Where Customer Value Breaks Down Post-Sale
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Acquisition fills the bucket; retention and expansion determine whether it holds enterprise value. When customer success relies on reactive ticketing rather than continuous value telemetry, accounts slip quietly toward churn.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {lifecycleFrictionPoints.map((item, idx) => (
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

      {/* ── SECTION 3: CAPABILITY A - CUSTOMER SUCCESS INTELLIGENCE (#health) ── */}
      <section id="health" className="py-14 sm:py-20 bg-white border-b border-slate-200 scroll-mt-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <span className="text-xs font-mono text-blue-600 uppercase tracking-widest font-bold block mb-2">
              CAPABILITY A · VALUE REALIZATION
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading mb-4">
              Customer Success Intelligence
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Align product telemetry directly to customer business objectives. Track adoption velocity, executive milestone completion, and value realization across every enterprise deployment.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-xs font-mono mb-3">
                <Target className="w-4 h-4" />
              </div>
              <h4 className="text-base font-bold text-slate-900 mb-2 font-heading">Mutual Value Milestones</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Connects initial sales SOW promises to measurable in-app deliverables. CSMs track executive milestones and business outcomes collaboratively with customer sponsors.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-xs font-mono mb-3">
                <Activity className="w-4 h-4" />
              </div>
              <h4 className="text-base font-bold text-slate-900 mb-2 font-heading">Composite Health Scoring</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Synthesizes login frequency, key feature adoption depth, support ticket sentiment, and stakeholder meeting cadence into a live, single-pane health index.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-xs font-mono mb-3">
                <Users className="w-4 h-4" />
              </div>
              <h4 className="text-base font-bold text-slate-900 mb-2 font-heading">Executive Sponsor Alignment</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Tracks champion tenure and alerts teams immediately when economic buyers change roles, initiating re-engagement playbooks before relationship inertia sets in.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 4: CAPABILITY B - RETENTION & CHURN PREVENTION (#retention) ── */}
      <section id="retention" className="py-14 sm:py-20 bg-slate-50 border-b border-slate-200 scroll-mt-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <span className="text-xs font-mono text-blue-600 uppercase tracking-widest font-bold block mb-2">
              CAPABILITY B · RETENTION ARCHITECTURE
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading mb-4">
              Retention & Churn Prevention
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Algorithmic churn prevention, pre-churn behavioral detection, and health sentinels. Intervene weeks before customers contemplate cancellation with tailored value-recovery playbooks.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-10">
            <div className="lg:col-span-6 space-y-4">
              <div className="p-5 rounded-2xl bg-white border border-slate-200">
                <h4 className="text-sm font-bold text-slate-900 font-heading mb-1 flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 text-amber-500" />
                  Pre-Churn Warning Indicators
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Surfaces silent disengagement cues: 30-day login declines, unanswered QBR requests, increased support escalation severity, and export-data download anomalies.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-slate-200">
                <h4 className="text-sm font-bold text-slate-900 font-heading mb-1 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-blue-600" />
                  Human-Reviewed Recovery Playbooks
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  When risk scores breach safety thresholds, automated sentinels assign structured intervention plans to senior account directors with customized value-review dossiers.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-slate-200">
                <h4 className="text-sm font-bold text-slate-900 font-heading mb-1 flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600" />
                  Executive Escalation Routing
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Connects client economic buyers with ProfitMachines executive sponsors for strategic alignment calls, resetting mutual commitments and unblocking technical roadblocks.
                </p>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
                <h4 className="text-xs font-mono font-bold uppercase text-slate-400 tracking-wider mb-4">
                  Predictive Churn Sentinel Telemetry
                </h4>
                <div className="space-y-3 text-xs font-mono">
                  <div className="flex justify-between items-center p-2.5 rounded-lg bg-slate-50 border border-slate-200/80">
                    <span className="text-slate-700">Pre-Churn Detection Horizon</span>
                    <span className="text-slate-900 font-bold">60–90 Days Advance Notice</span>
                  </div>
                  <div className="flex justify-between items-center p-2.5 rounded-lg bg-blue-50/50 border border-blue-200">
                    <span className="text-blue-900 font-semibold">At-Risk Account Intervention Rate</span>
                    <span className="text-blue-800 font-bold">100% Routed to Human Account Lead</span>
                  </div>
                  <div className="flex justify-between items-center p-2.5 rounded-lg bg-emerald-50/50 border border-emerald-200">
                    <span className="text-emerald-900 font-semibold">Gross Revenue Retention Protection</span>
                    <span className="text-emerald-800 font-bold">≥94% GRR Baseline Protected</span>
                  </div>
                </div>
                <p className="text-[11px] text-slate-500 mt-4 leading-relaxed italic">
                  *Illustrative operating model standards. Risk signals represent mathematical indicators and require human customer validation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 5: CAPABILITY C - EXPANSION REVENUE (#expansion-engine) ── */}
      <section id="expansion-engine" className="py-14 sm:py-20 bg-white border-b border-slate-200 scroll-mt-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <span className="text-xs font-mono text-blue-600 uppercase tracking-widest font-bold block mb-2">
              CAPABILITY C · ACCOUNT COMPOUNDING
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading mb-4">
              Expansion Revenue Engine
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Systematic identification of account expansion readiness, seat saturation, and division adoption. Turn existing commercial relationships into your most cost-effective revenue driver.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
              <span className="text-xs font-mono font-bold text-blue-600 block mb-1">Trigger 01</span>
              <h4 className="text-base font-bold text-slate-900 mb-2 font-heading">Capacity & Seat Saturation</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                When enterprise accounts exceed 85% active seat utilization or approach API volume thresholds, automated alerts alert account reps to open tiered expansion discussions.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
              <span className="text-xs font-mono font-bold text-blue-600 block mb-1">Trigger 02</span>
              <h4 className="text-base font-bold text-slate-900 mb-2 font-heading">Multi-Division Whitespace Mapping</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Maps subsidiary corporate hierarchies. When one business unit achieves validated ROI, reference playbooks automatically activate to introduce solutions to adjacent regional divisions.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
              <span className="text-xs font-mono font-bold text-blue-600 block mb-1">Trigger 03</span>
              <h4 className="text-base font-bold text-slate-900 mb-2 font-heading">Advanced Feature Adoption Priming</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Detects advanced workflow experimentation in standard tiers, triggering contextual in-app upgrade demonstrations and ROI calculable business cases.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 6: CAPABILITY D - CROSS-SELL & UPSELL (#renewal) ── */}
      <section id="renewal" className="py-14 sm:py-20 bg-slate-50 border-b border-slate-200 scroll-mt-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <span className="text-xs font-mono text-blue-600 uppercase tracking-widest font-bold block mb-2">
              CAPABILITY D · COMMERCIAL RENEWAL ARCHITECTURE
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading mb-4">
              Cross-Sell, Upsell & 90-Day Renewal Flight Plans
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Automated propensity triggers that surface cross-product recommendations to account teams. Run disciplined 90-day renewal flight plans that protect price realization and lock multi-year commitments.
            </p>
          </div>

          <div className="p-6 sm:p-8 rounded-2xl bg-slate-900 text-white border border-slate-800 shadow-xl mb-10">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-800 gap-2 mb-6">
              <div>
                <span className="text-[10px] font-mono text-blue-400 uppercase font-bold tracking-wider">Illustrative Scenario</span>
                <h4 className="text-lg font-bold font-heading">90-Day Enterprise Renewal Flight Plan</h4>
              </div>
              <span className="px-2.5 py-1 rounded bg-emerald-500/20 text-emerald-300 font-mono text-xs font-bold border border-emerald-500/30">
                Target: ≥96% On-Time Renewal
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-xs font-mono">
              <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700">
                <span className="text-slate-400 text-[11px] block">Day 90: Value Audit</span>
                <span className="text-white block mt-0.5 font-bold">Executive ROI Dossier</span>
                <span className="text-blue-400 text-[11px] mt-1 block">Documented savings presented</span>
              </div>
              <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700">
                <span className="text-slate-400 text-[11px] block">Day 60: Commercial Proposal</span>
                <span className="text-white block mt-0.5 font-bold">Multi-Year Packaging</span>
                <span className="text-emerald-400 text-[11px] mt-1 block">Tiered pricing floor applied</span>
              </div>
              <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700">
                <span className="text-slate-400 text-[11px] block">Day 30: Procurement Sync</span>
                <span className="text-white block mt-0.5 font-bold">Legal & Security Clearance</span>
                <span className="text-blue-400 text-[11px] mt-1 block">Standard fallback clauses</span>
              </div>
              <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700">
                <span className="text-slate-400 text-[11px] block">Day 0: Contract Signed</span>
                <span className="text-emerald-400 block mt-0.5 font-bold">On-Time Execution</span>
                <span className="text-slate-400 text-[11px] mt-1 block">Zero lapse, locked ARR</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 7: CUSTOMER GROWTH OPERATING MODEL (#model) ── */}
      <section id="model" className="py-14 sm:py-20 bg-white border-b border-slate-200 scroll-mt-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono text-blue-600 uppercase tracking-widest font-bold block mb-2">
              LIFECYCLE TOPOLOGY
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading mb-4">
              Customer Growth Operating Model
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              A continuous, compounding loop from onboarding through adoption monitoring, risk mitigation, and account expansion.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-6 gap-3">
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
              <span className="text-xs font-mono text-blue-600 font-bold block mb-1">01. Onboard</span>
              <h5 className="font-bold text-slate-900 text-xs mb-1 font-heading">Value Mandate</h5>
              <p className="text-[11px] text-slate-600">Align customer business outcomes with deployment milestones.</p>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
              <span className="text-xs font-mono text-blue-600 font-bold block mb-1">02. Adopt</span>
              <h5 className="font-bold text-slate-900 text-xs mb-1 font-heading">Usage Telemetry</h5>
              <p className="text-[11px] text-slate-600">Continuous telemetry tracking of seat utilization and feature depth.</p>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
              <span className="text-xs font-mono text-blue-600 font-bold block mb-1">03. Assess</span>
              <h5 className="font-bold text-slate-900 text-xs mb-1 font-heading">Health Scoring</h5>
              <p className="text-[11px] text-slate-600">Composite mathematical health scoring across all active accounts.</p>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
              <span className="text-xs font-mono text-blue-600 font-bold block mb-1">04. Protect</span>
              <h5 className="font-bold text-slate-900 text-xs mb-1 font-heading">Intervention</h5>
              <p className="text-[11px] text-slate-600">Proactive rescue workflows addressing pre-churn signals early.</p>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
              <span className="text-xs font-mono text-blue-600 font-bold block mb-1">05. Expand</span>
              <h5 className="font-bold text-slate-900 text-xs mb-1 font-heading">Whitespace Growth</h5>
              <p className="text-[11px] text-slate-600">Contextual upsell triggers activating on capacity saturation.</p>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
              <span className="text-xs font-mono text-blue-600 font-bold block mb-1">06. Compound</span>
              <h5 className="font-bold text-slate-900 text-xs mb-1 font-heading">Renewal Flight</h5>
              <p className="text-[11px] text-slate-600">Structured 90-day flight plans securing multi-year renewals.</p>
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
              Customer Growth KPI Framework
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Mathematically precise definitions tracking retention, expansion, and customer lifetime value.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-white border border-slate-200">
              <div className="text-xs font-mono text-blue-600 uppercase font-bold mb-1">Net Revenue Retention (NRR)</div>
              <h4 className="text-base font-bold text-slate-900 mb-2">Account Expansion Compounding</h4>
              <p className="text-xs text-slate-600 mb-3"><strong>Formula:</strong> (Starting ARR + Expansion - Contraction - Churn) ÷ Starting ARR, measured over a 12-month cohort.</p>
              <div className="text-[11px] font-mono text-slate-500 pt-3 border-t border-slate-100">
                Target: 118% – 134% · Source: Stripe / ERP Billing Reconciliation
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200">
              <div className="text-xs font-mono text-blue-600 uppercase font-bold mb-1">Gross Revenue Retention (GRR)</div>
              <h4 className="text-base font-bold text-slate-900 mb-2">Core Contract Protection</h4>
              <p className="text-xs text-slate-600 mb-3"><strong>Formula:</strong> (Starting ARR - Contraction - Churn, excluding expansion) ÷ Starting ARR, over identical period.</p>
              <div className="text-[11px] font-mono text-slate-500 pt-3 border-t border-slate-100">
                Target: ≥94% · Source: Billing Contract History
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200">
              <div className="text-xs font-mono text-blue-600 uppercase font-bold mb-1">Time to Value (TTV)</div>
              <h4 className="text-base font-bold text-slate-900 mb-2">First Value Realization</h4>
              <p className="text-xs text-slate-600 mb-3"><strong>Formula:</strong> Elapsed days between contract execution and documented completion of first verified outcome milestone.</p>
              <div className="text-[11px] font-mono text-slate-500 pt-3 border-t border-slate-100">
                Target: &lt;30 Days · Source: Customer Success Platform Telemetry
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
            <span>CONFIDENTIAL CUSTOMER GROWTH DIAGNOSTIC</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-heading mb-4">
            Build a More Proactive Customer Growth Strategy
          </h2>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Schedule a diagnostic session with a Principal Customer Success Architect. We analyze your cohort retention curves, pre-churn warning indicators, and account whitespace under mutual NDA.
          </p>
        </div>

        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <OfferingsIntakeForm
            pageContext="Customer Growth & Retention Architecture"
            defaultObjective="Customer Retention & NRR Compounding"
          />
        </div>
      </section>
    </div>
  );
}
