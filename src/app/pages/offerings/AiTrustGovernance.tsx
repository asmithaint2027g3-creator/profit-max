import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Compass, ArrowRight, ShieldCheck, CheckCircle2, TrendingUp, Target,
  DollarSign, Activity, Layers, Search, Sparkles, Lock, ChevronRight,
  Zap, BarChart3, Sliders, Cpu, Shield, ArrowUpRight, Clock,
  Check, Bot, FileText, CreditCard, Briefcase, AlertTriangle,
  Scale, Users, LineChart, CheckCircle, RefreshCw, Eye, ShieldAlert,
  Server, Database, KeyRound, Award
} from 'lucide-react';
import OfferingsIntakeForm from '../../components/forms/OfferingsIntakeForm';

export default function AiTrustGovernance() {
  const location = useLocation();

  useEffect(() => {
    document.title = 'AI Governance & Performance | Enterprise Responsible AI Architecture | ProfitMachines';
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

  const governanceChallengePoints = [
    {
      title: 'Ungoverned Autonomous Permissions',
      problem: 'Autonomous sales and marketing agents deployed with unbounded permissions to write into CRMs, publish external emails, or offer unapproved pricing terms.',
      consequence: 'Brand reputation risks, customer confusion, and accidental policy or regulatory violations.',
      impact: '100% Policy Failure Without Guardrails'
    },
    {
      title: 'Silent Algorithmic Drift & Hallucination',
      problem: 'Predictive scoring models and LLM agents decay over time as buyer market conditions shift, generating inaccurate lead scores and fabricated facts.',
      consequence: 'Wasted sales hours pursuing dead-end leads and misleading executive forecasting inputs.',
      impact: '15-30% Accuracy Erosion Over 6 Months'
    },
    {
      title: 'Sensitive Customer Data Exposure',
      problem: 'Proprietary customer conversation audio, contract terms, and PII fed into public third-party LLM APIs without strict multi-tenant isolation.',
      consequence: 'Potential GDPR, HIPAA, or SOC 2 non-compliance and catastrophic customer trust loss.',
      impact: 'Severe Legal & Regulatory Penalty Exposure'
    },
    {
      title: 'Lack of Explainability for C-Suite & Boards',
      problem: 'Black-box algorithms outputting critical decisions (pricing floors, credit scores, lead rankings) without auditable mathematical evidence.',
      consequence: 'Audit committees and enterprise risk officers halt AI initiatives before production deployment.',
      impact: 'Months of Delayed Innovation Deployment'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* ── STICKY PAGE SUB-NAV BAR (GLOBAL ACCELERATION PALETTE) ── */}
      <nav aria-label="Page Sub Navigation" className="sticky top-16 z-30 bg-slate-900/95 backdrop-blur-md border-b border-slate-800 text-white text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-11 flex items-center justify-between gap-4 overflow-x-auto no-scrollbar">
          <div className="flex items-center gap-2.5 shrink-0">
            <span className="font-mono text-blue-400 font-bold">OFFERING 07</span>
            <span className="font-bold text-slate-200">AI Governance & Performance</span>
            <span className="hidden sm:inline text-slate-500">|</span>
            <span className="hidden sm:inline text-slate-400 font-medium">Responsible AI</span>
          </div>

          <div className="flex items-center gap-3 shrink-0 text-slate-300 font-medium text-[11px] sm:text-xs">
            <a href="#friction" onClick={(e) => scrollToAnchor(e, 'friction')} className="hover:text-blue-400 transition-colors">Governance Challenges</a>
            <a href="#executive" onClick={(e) => scrollToAnchor(e, 'executive')} className="hover:text-blue-400 transition-colors">Workflow Governance</a>
            <a href="#bias" onClick={(e) => scrollToAnchor(e, 'bias')} className="hover:text-blue-400 transition-colors">Performance Monitoring</a>
            <a href="#compliance" onClick={(e) => scrollToAnchor(e, 'compliance')} className="hover:text-blue-400 transition-colors">Revenue Controls</a>
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
            <span className="text-blue-400 font-bold">AI Governance & Performance</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/15 border border-blue-400/30 text-blue-300 text-xs font-bold tracking-widest uppercase font-mono mb-4">
                <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
                <span>ENTERPRISE TRUST & RISK ARCHITECTURE</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.15] mb-5 font-heading">
                Govern AI Performance With Enterprise-Grade{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-indigo-300">
                  Visibility and Control
                </span>
              </h1>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-6 max-w-3xl">
                Build clearer boundaries around AI-enabled revenue workflows through permission management, human oversight, performance monitoring, auditability, and data protection. Establish controls appropriate to your use cases and risk requirements.
              </p>

              {/* Target Decision-Makers */}
              <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 text-xs text-slate-300 mb-8 space-y-1 max-w-2xl">
                <div className="text-[11px] font-mono font-bold text-blue-400 uppercase tracking-wider">
                  Target Decision-Makers:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 text-slate-300">
                  <div className="flex items-center gap-1.5"><span className="text-blue-400">•</span> Chief Information Security Officers (CISOs)</div>
                  <div className="flex items-center gap-1.5"><span className="text-blue-400">•</span> General Counsel & Chief Compliance Officers</div>
                  <div className="flex items-center gap-1.5"><span className="text-blue-400">•</span> Enterprise Risk & Audit Committees</div>
                  <div className="flex items-center gap-1.5"><span className="text-blue-400">•</span> BFSI, Healthcare & Regulated Revenue Leaders</div>
                </div>
              </div>

              {/* Hero CTAs */}
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="#intake"
                  onClick={(e) => scrollToAnchor(e, 'intake')}
                  className="px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 active:bg-blue-700 text-white font-bold text-sm transition-all shadow-lg shadow-blue-600/30 inline-flex items-center gap-2 group cursor-pointer"
                >
                  <span>Assess Your AI Governance Needs</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>

                <Link
                  to="/book-consultation"
                  className="px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-200 font-bold text-sm transition-all inline-flex items-center gap-2 cursor-pointer"
                >
                  <span>Discuss Enterprise AI Controls</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-4">
              <div className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-xl space-y-4">
                <div className="text-xs font-mono font-bold uppercase text-blue-400 tracking-wider">
                  Governance Baseline Matrix
                </div>
                <div className="space-y-3">
                  <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700/80">
                    <div className="text-[11px] text-slate-400 uppercase font-mono">Data Sovereignty Standard</div>
                    <div className="text-xl font-bold font-mono text-emerald-400 mt-0.5">Zero Training on Customer Data</div>
                    <p className="text-[11px] text-slate-400 mt-1">Multi-tenant isolation and strict contractual privacy guardrails.</p>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700/80">
                    <div className="text-[11px] text-slate-400 uppercase font-mono">Workflow Auditability</div>
                    <div className="text-xl font-bold font-mono text-blue-400 mt-0.5">100% Immutable Audit Logs</div>
                    <p className="text-[11px] text-slate-400 mt-1">Every AI recommendation and decision logged with timestamped weights.</p>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700/80">
                    <div className="text-[11px] text-slate-400 uppercase font-mono">Human-in-the-Loop Enforced</div>
                    <div className="text-xl font-bold font-mono text-white mt-0.5">Mandatory Approval Gates</div>
                    <p className="text-[11px] text-slate-400 mt-1">Zero automated external dispatch without licensed rep authorization.</p>
                  </div>
                </div>
                <div className="text-[10px] font-mono text-slate-500 pt-2 border-t border-slate-800 text-center">
                  *Operating standards enforced across client environments.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 2: THE ENTERPRISE AI GOVERNANCE CHALLENGE ── */}
      <section id="friction" className="py-14 sm:py-20 bg-slate-50 border-b border-slate-200 scroll-mt-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <span className="text-xs font-mono text-blue-600 uppercase tracking-widest font-bold block mb-2">
              RISK ARCHITECTURE AUDIT
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading mb-4">
              The Enterprise AI Governance Challenge
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Autonomous agents and predictive scoring cannot run unsupervised in regulated enterprise environments. Unmanaged AI architectures create permission sprawl, compliance vulnerability, and board-level risk.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {governanceChallengePoints.map((item, idx) => (
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

      {/* ── SECTION 3: CAPABILITY A - AI WORKFLOW GOVERNANCE (#executive) ── */}
      <section id="executive" className="py-14 sm:py-20 bg-white border-b border-slate-200 scroll-mt-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <span className="text-xs font-mono text-blue-600 uppercase tracking-widest font-bold block mb-2">
              CAPABILITY A · POLICY & CONTROLS
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading mb-4">
              AI Workflow Governance
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Enterprise policy frameworks, permission boundaries, and audit controls for autonomous agents. Establish role-based access limits, restricted actions, and mandatory human sign-off checkpoints.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
              <span className="text-xs font-mono font-bold text-blue-600 block mb-1">Control 01</span>
              <h4 className="text-base font-bold text-slate-900 mb-2 font-heading">Role-Based Permission Fences</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Autonomous agents operate within strict sandboxes. They can query public buyer intent, formulate meeting briefs, and calculate pricing options, but cannot modify core CRM stages without approval.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
              <span className="text-xs font-mono font-bold text-blue-600 block mb-1">Control 02</span>
              <h4 className="text-base font-bold text-slate-900 mb-2 font-heading">Mandatory Human Sign-Off</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Zero automated external communications dispatch without human review. Account executives verify outbound messaging, discount concession terms, and contract redlines before release.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
              <span className="text-xs font-mono font-bold text-blue-600 block mb-1">Control 03</span>
              <h4 className="text-base font-bold text-slate-900 mb-2 font-heading">Immutable Audit Telemetry</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Every prompt, model response, recommendation weight, and human override is preserved in tamper-evident audit logs suitable for internal compliance officers and external regulators.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 4: CAPABILITY B - AI PERFORMANCE MONITORING (#bias) ── */}
      <section id="bias" className="py-14 sm:py-20 bg-slate-50 border-b border-slate-200 scroll-mt-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <span className="text-xs font-mono text-blue-600 uppercase tracking-widest font-bold block mb-2">
              CAPABILITY B · QUALITY TELEMETRY
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading mb-4">
              AI Performance Monitoring & Bias Auditing
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Real-time algorithmic drift detection, accuracy telemetry, and decision latency audits. Continuously measure model output quality against task-specific evaluation datasets.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-10">
            <div className="space-y-4">
              <div className="p-5 rounded-2xl bg-white border border-slate-200">
                <h4 className="text-sm font-bold text-slate-900 font-heading mb-1 flex items-center gap-2">
                  <Activity className="w-4 h-4 text-blue-600" />
                  Continuous Algorithmic Drift Telemetry
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Monitors predictive lead scoring distributions daily. If market conditions alter buyer behavior and model precision drops below agreed tolerances, automated retraining alerts activate.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-slate-200">
                <h4 className="text-sm font-bold text-slate-900 font-heading mb-1 flex items-center gap-2">
                  <Scale className="w-4 h-4 text-blue-600" />
                  Fairness & Disparate Impact Auditing
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Scans prospecting algorithms, pricing proposals, and automated qualification rules for systematic outlier bias, ensuring equitable treatment across buyer segments and demographics.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-slate-200">
                <h4 className="text-sm font-bold text-slate-900 font-heading mb-1 flex items-center gap-2">
                  <Eye className="w-4 h-4 text-blue-600" />
                  Human Correction Rate Tracking
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Tracks how frequently sales reps alter AI-drafted responses or override predictive deal ratings, using feedback signals to calibrate underlying prompt architectures.
                </p>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
              <h4 className="text-xs font-mono font-bold uppercase text-slate-400 tracking-wider mb-4">
                Performance Telemetry Console (Illustrative Model)
              </h4>
              <div className="space-y-3 text-xs font-mono">
                <div className="flex justify-between items-center p-2.5 rounded-lg bg-slate-50 border border-slate-200/80">
                  <span className="text-slate-700">Predictive Model Drift Deviation</span>
                  <span className="text-emerald-600 font-bold">&lt;1.2% (Within Safe Corridor)</span>
                </div>
                <div className="flex justify-between items-center p-2.5 rounded-lg bg-blue-50/50 border border-blue-200">
                  <span className="text-blue-900 font-semibold">Human Override Acceptance</span>
                  <span className="text-blue-800 font-bold">92.4% Direct Rep Approval</span>
                </div>
                <div className="flex justify-between items-center p-2.5 rounded-lg bg-slate-50 border border-slate-200/80">
                  <span className="text-slate-700">Inference Response Latency</span>
                  <span className="text-slate-900 font-bold">&lt;850ms Sub-Second Execution</span>
                </div>
              </div>
              <p className="text-[11px] text-slate-500 mt-4 leading-relaxed italic">
                *Illustrative console metrics. Actual thresholds are calibrated to specific client data volumes and regulatory jurisdictions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 5: CAPABILITY C - REVENUE INTELLIGENCE CONTROLS (#compliance) ── */}
      <section id="compliance" className="py-14 sm:py-20 bg-white border-b border-slate-200 scroll-mt-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <span className="text-xs font-mono text-blue-600 uppercase tracking-widest font-bold block mb-2">
              CAPABILITY C · DATA SOVEREIGNTY
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading mb-4">
              Revenue Intelligence Controls & Data Sovereignty
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Enterprise data sovereignty, SOC 2 Type II, HIPAA, and GDPR guardrails across sales intelligence feeds. Protect customer confidentiality with cryptographic separation and strict residency rules.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-xs font-mono mb-3">
                <Lock className="w-4 h-4" />
              </div>
              <h4 className="text-base font-bold text-slate-900 mb-2 font-heading">Zero Model Training on PII</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Enterprise contracts strictly prohibit LLM providers from storing, logging, or utilizing proprietary customer conversation data or CRM records for foundation model training.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-xs font-mono mb-3">
                <Server className="w-4 h-4" />
              </div>
              <h4 className="text-base font-bold text-slate-900 mb-2 font-heading">Regional Data Residency</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Customer telemetry, CRM synchronization, and AI processing execute exclusively within designated regional sovereign boundaries (US, EU, UK, or APAC) to satisfy statutory privacy mandates.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-xs font-mono mb-3">
                <KeyRound className="w-4 h-4" />
              </div>
              <h4 className="text-base font-bold text-slate-900 mb-2 font-heading">Cryptographic Key Isolation</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Enterprise client data is encrypted at rest (AES-256) and in transit (TLS 1.3), with support for customer-managed encryption keys (CMEK) and strict tenant isolation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 6: GOVERNANCE OPERATING MODEL (#model) ── */}
      <section id="model" className="py-14 sm:py-20 bg-slate-50 border-b border-slate-200 scroll-mt-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono text-blue-600 uppercase tracking-widest font-bold block mb-2">
              DISCIPLINED GOVERNANCE CADENCE
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading mb-4">
              Enterprise AI Governance Operating Model
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              A comprehensive lifecycle ensuring that every AI use case is inventoried, evaluated, tested, monitored, and audited under human oversight.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-6 gap-3">
            <div className="p-4 rounded-2xl bg-white border border-slate-200">
              <span className="text-xs font-mono text-blue-600 font-bold block mb-1">01. Inventory</span>
              <h5 className="font-bold text-slate-900 text-xs mb-1 font-heading">Use Case Catalog</h5>
              <p className="text-[11px] text-slate-600">Register all active AI models and agent swarms.</p>
            </div>
            <div className="p-4 rounded-2xl bg-white border border-slate-200">
              <span className="text-xs font-mono text-blue-600 font-bold block mb-1">02. Evaluate</span>
              <h5 className="font-bold text-slate-900 text-xs mb-1 font-heading">Risk Classification</h5>
              <p className="text-[11px] text-slate-600">Categorize risks under EU AI Act and enterprise charters.</p>
            </div>
            <div className="p-4 rounded-2xl bg-white border border-slate-200">
              <span className="text-xs font-mono text-blue-600 font-bold block mb-1">03. Design</span>
              <h5 className="font-bold text-slate-900 text-xs mb-1 font-heading">Permission Fences</h5>
              <p className="text-[11px] text-slate-600">Architect sandboxes, API bounds, and human approval gates.</p>
            </div>
            <div className="p-4 rounded-2xl bg-white border border-slate-200">
              <span className="text-xs font-mono text-blue-600 font-bold block mb-1">04. Validate</span>
              <h5 className="font-bold text-slate-900 text-xs mb-1 font-heading">Quality Testing</h5>
              <p className="text-[11px] text-slate-600">Pre-deployment evaluation against benchmark datasets.</p>
            </div>
            <div className="p-4 rounded-2xl bg-white border border-slate-200">
              <span className="text-xs font-mono text-blue-600 font-bold block mb-1">05. Monitor</span>
              <h5 className="font-bold text-slate-900 text-xs mb-1 font-heading">Drift Telemetry</h5>
              <p className="text-[11px] text-slate-600">24/7 scanning of output accuracy, latency, and fairness.</p>
            </div>
            <div className="p-4 rounded-2xl bg-white border border-slate-200">
              <span className="text-xs font-mono text-blue-600 font-bold block mb-1">06. Audit</span>
              <h5 className="font-bold text-slate-900 text-xs mb-1 font-heading">Board Reporting</h5>
              <p className="text-[11px] text-slate-600">Periodic risk reports delivered to executive committees.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 7: KPI MEASUREMENT FRAMEWORK ── */}
      <section id="kpis" className="py-14 sm:py-20 bg-white border-b border-slate-200 scroll-mt-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono text-blue-600 uppercase tracking-widest font-bold block mb-2">
              MEASUREMENT ARCHITECTURE
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading mb-4">
              AI Governance KPI & Controls Framework
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Clear parameters tracking compliance, safety, and output quality across all enterprise AI revenue deployments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="text-xs font-mono text-blue-600 uppercase font-bold mb-1">Policy Compliance Rate</div>
              <h4 className="text-base font-bold text-slate-900 mb-2">Boundary Enforcement</h4>
              <p className="text-xs text-slate-600 mb-3"><strong>Formula:</strong> (AI actions passing policy checks without violation) ÷ (Total AI action requests).</p>
              <div className="text-[11px] font-mono text-slate-500 pt-3 border-t border-slate-200">
                Target: 100% Policy Adherence · Source: Policy Engine Logs
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="text-xs font-mono text-blue-600 uppercase font-bold mb-1">Audit-Log Completeness</div>
              <h4 className="text-base font-bold text-slate-900 mb-2">Evidence Trail Verification</h4>
              <p className="text-xs text-slate-600 mb-3"><strong>Formula:</strong> (AI decisions with complete tamper-evident input/output trace) ÷ (Total decisions logged).</p>
              <div className="text-[11px] font-mono text-slate-500 pt-3 border-t border-slate-200">
                Target: 100% Immutable Completeness · Source: Cryptographic Audit Vault
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="text-xs font-mono text-blue-600 uppercase font-bold mb-1">Algorithmic Drift Horizon</div>
              <h4 className="text-base font-bold text-slate-900 mb-2">Predictive Stability</h4>
              <p className="text-xs text-slate-600 mb-3"><strong>Formula:</strong> Statistical Kolmogorov-Smirnov distance between production score distribution and validation baseline.</p>
              <div className="text-[11px] font-mono text-slate-500 pt-3 border-t border-slate-200">
                Target: KS &lt; 0.05 · Source: Nightly Drift Sentinel Feeds
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 8: EXECUTIVE BRIEFING INTAKE ── */}
      <section id="intake" className="py-16 sm:py-24 bg-slate-950 text-white relative overflow-hidden border-t border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 font-mono text-xs font-bold uppercase tracking-widest mb-4">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>CONFIDENTIAL GOVERNANCE AUDIT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-heading mb-4">
            Build a Clearer Framework for Responsible Enterprise AI
          </h2>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Schedule an executive architecture session with a Principal AI Governance Architect. We assess your permission boundaries, data residency constraints, and monitoring requirements under mutual NDA.
          </p>
        </div>

        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <OfferingsIntakeForm
            pageContext="AI Governance & Performance Architecture"
            defaultObjective="Enterprise AI Governance & Risk Controls"
          />
        </div>
      </section>
    </div>
  );
}
