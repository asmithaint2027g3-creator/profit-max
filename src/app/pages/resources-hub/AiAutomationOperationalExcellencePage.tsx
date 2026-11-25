import React, { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import {
  Cpu, Bot, ShieldCheck, Workflow, Factory, Gauge,
  CheckCircle2, ChevronRight, ArrowRight, ArrowUpRight,
  Sparkles, DollarSign, Activity, Terminal, Lock, RefreshCw,
  GitBranch, Server, Layers, Sliders
} from 'lucide-react';
import { trackEvent } from '../../../lib/analytics';
import { AI_AGENTIC_SECTIONS } from '../../../data/aiAgenticAutomationHubData';
import { AUTOMATION_CAPABILITIES } from '../../../data/automationExcellenceData';

const agentImages: Record<string, string> = {
  sdr: '/images/hero-agentic-ai.png',
  dealdesk: '/images/hero-ai-transformation.png',
  revops: '/images/hero-data-intelligence.png',
  cs: '/images/home-hero-dashboard.png'
};

export default function AiAutomationOperationalExcellencePage() {
  const location = useLocation();
  const [activeAgentTab, setActiveAgentTab] = useState('sdr-agent');

  useEffect(() => {
    document.title = 'AI, Automation & Operational Excellence | ProfitMachines Resources';
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const el = document.getElementById(id);
      if (el) {
        setTimeout(() => {
          const navOffset = 95;
          const pos = el.getBoundingClientRect().top + window.pageYOffset - navOffset;
          window.scrollTo({ top: Math.max(0, pos), behavior: 'smooth' });
        }, 150);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location.hash, location.pathname]);

  const submenus = [
    { id: 'ai-use-cases-agents', title: 'AI Use Cases & Specialized Agents', icon: Bot, badge: 'Agents' },
    { id: 'agentic-ai-architectures', title: 'Agentic AI Architectures', icon: Cpu, badge: 'Topology' },
    { id: 'ai-governance-security', title: 'AI Governance & Enterprise Security', icon: ShieldCheck, badge: 'Compliance' },
    { id: 'workflow-process-automation', title: 'Workflow & Process Automation', icon: Workflow, badge: 'Operations' },
    { id: 'industrial-automation-robotics', title: 'Industrial Automation & Telemetry', icon: Factory, badge: 'IoT Edge' },
    { id: 'continuous-improvement-excellence', title: 'Continuous Improvement & Excellence', icon: Gauge, badge: 'Kaizen' }
  ];

  const handleAnchorClick = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const navOffset = 95;
      const pos = el.getBoundingClientRect().top + window.pageYOffset - navOffset;
      window.scrollTo({ top: Math.max(0, pos), behavior: 'smooth' });
    }
  };

  const agentPersonas = [
    {
      id: 'sdr-agent',
      name: 'Autonomous Inbound & Outbound SDR Agent',
      role: 'Pipeline Genesis & Dark Intent Reconnaissance',
      skills: ['Firmographic enrichment via Clearbit/Apollo', 'Dark-funnel intent parsing (G2/Bombora)', 'Personalized hyper-relevant executive email drafting', 'Calendar auto-coordination via Google/Outlook APIs'],
      safetyGuards: 'Strict human-in-the-loop review for Tier-1 accounts; max 25 emails sent per hour; zero hallucinated statistics.',
      kpiImpact: '+320% Qualified Pipeline volume, 4.2 minute average lead response time.'
    },
    {
      id: 'deal-desk-agent',
      name: 'Deal Desk & Pricing Optimization Agent',
      role: 'Commercial Governance & Gross Margin Protection',
      skills: ['Historical discount concession analytics', 'Real-time CPQ multi-year ARR calculation', 'Automatic escalation triggers for <65% gross margin', 'Competitor battlecard retrieval and objection coaching'],
      safetyGuards: 'Deterministic pricing formulas; no LLM leeway on contract terms; hard approvals required by CRO for >20% discounts.',
      kpiImpact: '+4.2 percentage points gross margin expansion across enterprise deals.'
    },
    {
      id: 'renewal-agent',
      name: 'Account Health & Renewal Telemetry Agent',
      role: 'Net Revenue Retention & Churn Prevention',
      skills: ['Product telemetry drop-off alerting', 'Support ticket sentiment analysis', 'Executive sponsor LinkedIn movement tracking', 'Automated 90-day renewal deck generation with realized ROI'],
      safetyGuards: 'Flagged accounts immediately assign high-priority tasks to VP of Customer Success.',
      kpiImpact: '124% Median Net Revenue Retention (NRR), 82% reduction in surprise churn.'
    }
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-600 selection:text-white">
      {/* ── BREADCRUMB ── */}
      <div className="border-b border-slate-200 bg-slate-50/90 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center gap-2 text-xs text-slate-500 font-mono">
            <Link to="/" className="hover:text-blue-600 transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <Link to="/resources-hub" className="hover:text-blue-600 transition-colors">Resources</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-blue-600 font-bold">AI, Automation & Operational Excellence</span>
          </nav>
        </div>
      </div>

      {/* ── HERO BANNER (OFFERINGS PRESTIGE DARK PANEL) ── */}
      <section className="relative pt-12 pb-16 md:pt-16 md:pb-20 bg-slate-950 text-white border-b border-slate-800 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 pointer-events-none" />
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-mono font-bold uppercase tracking-widest mb-5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Autonomous Enterprise Operations</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight font-heading mb-4">
              AI, Automation &{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-300 to-blue-400">
                Operational Excellence
              </span>
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl font-normal">
              Enterprise architectures for multi-agent swarms, deterministic workflow automation, industrial IoT telemetry, and continuous Six Sigma commercial excellence.
            </p>

            <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800">
                <div className="text-xl sm:text-2xl font-black text-purple-400 font-mono">100%</div>
                <div className="text-[11px] text-slate-400 font-medium">Deterministic Guardrails</div>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800">
                <div className="text-xl sm:text-2xl font-black text-emerald-400 font-mono">84%</div>
                <div className="text-[11px] text-slate-400 font-medium">Workflow Touch Reduction</div>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800">
                <div className="text-xl sm:text-2xl font-black text-blue-400 font-mono">SOC-2</div>
                <div className="text-[11px] text-slate-400 font-medium">Type II & EU AI Act</div>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800">
                <div className="text-xl sm:text-2xl font-black text-indigo-300 font-mono">3.8x</div>
                <div className="text-[11px] text-slate-400 font-medium">Process Throughput</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── IN-PAGE ANCHOR JUMP BAR (OFFERINGS LIGHT STYLE, NON-STICKY) ── */}
      <section className="border-b border-slate-200 bg-slate-50/90 py-3.5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider mb-2">
            Operational Architecture · 6 Submenus
          </div>
          <div className="flex flex-wrap items-center gap-2">
            {submenus.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => handleAnchorClick(item.id)}
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-white hover:bg-blue-600 hover:text-white border border-slate-200 hover:border-blue-500 text-slate-700 shadow-2xs transition-all cursor-pointer"
                >
                  <Icon className="w-3.5 h-3.5 text-blue-600" />
                  <span>{item.title}</span>
                  <span className="px-1.5 py-0.2 rounded bg-slate-100 text-[10px] text-slate-600 font-mono">
                    {item.badge}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CONTENT CONTAINER (CLEAN OFFERINGS LIGHT CANVAS) ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">

        {/* ══════════════════════════════════════════════════════════════════
            AI USE CASES & SPECIALIZED AGENTS
        ══════════════════════════════════════════════════════════════════ */}
        <section id="ai-use-cases-agents" className="scroll-mt-28 space-y-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between pb-4 border-b border-slate-200 gap-3">
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-heading">
                AI Use Cases & Specialized Agents
              </h2>
              <p className="text-sm sm:text-base text-slate-600 mt-1 max-w-3xl leading-relaxed">
                Moving past generic chatbots to purpose-built autonomous agents with tool access, sandboxed execution, and hard economic objectives.
              </p>
            </div>
          </div>

          {/* Interactive Agent Persona Tabs */}
          <div className="flex flex-wrap gap-2">
            {agentPersonas.map((p) => (
              <button
                key={p.id}
                onClick={() => setActiveAgentTab(p.id)}
                className={`px-4 py-2.5 rounded-xl text-xs font-bold font-heading transition-all cursor-pointer ${
                  activeAgentTab === p.id
                    ? 'bg-slate-900 text-white shadow-md'
                    : 'bg-white text-slate-700 hover:bg-slate-50 border border-slate-200 shadow-2xs'
                }`}
              >
                {p.name.split('·')[0]}
              </button>
            ))}
          </div>

          {(() => {
            const current = agentPersonas.find(p => p.id === activeAgentTab) || agentPersonas[0];
            return (
              <div className="rounded-2xl bg-white border border-slate-200/90 shadow-md p-6 sm:p-8 space-y-6 relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600" />
                
                {/* Visual Image Banner for Active Agent */}
                <div className="relative h-44 sm:h-52 rounded-xl overflow-hidden border border-slate-200/80 bg-slate-100">
                  <img
                    src={agentImages[current.id] || '/images/hero-agentic-ai.png'}
                    alt={current.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                    <div className="text-white">
                      <div className="text-[10px] font-mono uppercase tracking-wider text-purple-300 font-bold">{current.role}</div>
                      <div className="text-xl sm:text-2xl font-bold text-white font-heading">{current.name}</div>
                    </div>
                    <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-purple-600 text-white shadow-xs">
                      Active Agent Pod
                    </span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-5 border-b border-slate-100 gap-2">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 font-heading">{current.name}</h3>
                    <p className="text-xs text-purple-700 font-mono font-bold mt-0.5">{current.role}</p>
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-purple-50 text-purple-700 border border-purple-200 self-start sm:self-auto">
                    Agent Specification 2.4
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <h4 className="text-xs font-mono font-bold uppercase text-slate-700">
                      Autonomous Skills & API Integrations:
                    </h4>
                    <div className="space-y-2">
                      {current.skills.map((sk, sIdx) => (
                        <div key={sIdx} className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-2.5 text-xs text-slate-800">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{sk}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                      <div className="text-xs font-mono font-bold text-amber-700 uppercase flex items-center gap-1.5">
                        <ShieldCheck className="w-4 h-4" />
                        Deterministic Guardrails & Sandboxing:
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed font-normal">
                        {current.safetyGuards}
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-purple-50/50 border border-purple-200 space-y-1">
                      <div className="text-xs font-mono font-bold text-purple-800 uppercase">
                        Verified Business Metric Impact:
                      </div>
                      <div className="text-xs text-emerald-800 font-bold font-mono">
                        {current.kpiImpact}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })()}
        </section>

        {/* ══════════════════════════════════════════════════════════════════
            AGENTIC AI ARCHITECTURES
        ══════════════════════════════════════════════════════════════════ */}
        <section id="agentic-ai-architectures" className="scroll-mt-28 space-y-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between pb-4 border-b border-slate-200 gap-3">
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-heading">
                Agentic AI Architectures
              </h2>
              <p className="text-sm sm:text-base text-slate-600 mt-1 max-w-3xl leading-relaxed">
                Multi-agent state machines, hierarchical supervisor-worker networks, semantic vector memories, and tool verification pipelines.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-white border border-slate-200/90 hover:border-indigo-400 hover:shadow-xl hover:-translate-y-0.5 space-y-3 shadow-sm transition-all">
              <span className="text-xs font-mono font-bold text-indigo-700 uppercase">Architecture 01</span>
              <h3 className="text-lg font-bold text-slate-900 font-heading">Supervisor-Worker Swarms</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                Central planner agent delegates tasks across specialized worker sub-agents (Research, Code Gen, Reconciliation), verifying completion before committing.
              </p>
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 font-mono text-xs text-slate-800">
                Prevents infinite feedback loops and controls LLM token consumption.
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200/90 hover:border-purple-400 hover:shadow-xl hover:-translate-y-0.5 space-y-3 shadow-sm transition-all">
              <span className="text-xs font-mono font-bold text-purple-700 uppercase">Architecture 02</span>
              <h3 className="text-lg font-bold text-slate-900 font-heading">Semantic Episodic Memory Mesh</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                Dual-tier memory architecture combining low-latency session scratchpads with long-term vector graphs indexing past deal histories and objection responses.
              </p>
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 font-mono text-xs text-slate-800">
                Sub-50ms retrieval across 500,000+ past client communications.
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200/90 hover:border-blue-400 hover:shadow-xl hover:-translate-y-0.5 space-y-3 shadow-sm transition-all">
              <span className="text-xs font-mono font-bold text-blue-700 uppercase">Architecture 03</span>
              <h3 className="text-lg font-bold text-slate-900 font-heading">Deterministic Tool Verification</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                All external tool calls (CRM updates, Slack broadcasts, ERP invoice creation) execute via strict JSON schemas with pre-execution dry-run validations.
              </p>
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 font-mono text-xs text-slate-800">
                Zero unauthorized CRM state mutations or data corruption.
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════════
            AI GOVERNANCE & ENTERPRISE SECURITY
        ══════════════════════════════════════════════════════════════════ */}
        <section id="ai-governance-security" className="scroll-mt-28 space-y-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between pb-4 border-b border-slate-200 gap-3">
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-heading">
                AI Governance & Enterprise Security
              </h2>
              <p className="text-sm sm:text-base text-slate-600 mt-1 max-w-3xl leading-relaxed">
                Aligning model operations with SOC-2 Type II, ISO 42001, the EU AI Act, and enterprise Data Loss Prevention (DLP) mandates.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-white border border-slate-200/90 hover:border-emerald-400 hover:shadow-xl hover:-translate-y-0.5 space-y-2 shadow-sm transition-all">
              <div className="text-xs font-mono font-bold text-emerald-700 uppercase">Standard 01</div>
              <h3 className="text-base font-bold text-slate-900 font-heading">Zero Model Training on Data</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                Zero data retention agreements with foundation model providers ensuring proprietary enterprise CRM data is never used for training.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200/90 hover:border-blue-400 hover:shadow-xl hover:-translate-y-0.5 space-y-2 shadow-sm transition-all">
              <div className="text-xs font-mono font-bold text-blue-700 uppercase">Standard 02</div>
              <h3 className="text-base font-bold text-slate-900 font-heading">Automated PII Redaction</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                Edge filtering regex and NER models scrubbing social security numbers, API tokens, passwords, and credit card numbers prior to LLM submission.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200/90 hover:border-indigo-400 hover:shadow-xl hover:-translate-y-0.5 space-y-2 shadow-sm transition-all">
              <div className="text-xs font-mono font-bold text-indigo-700 uppercase">Standard 03</div>
              <h3 className="text-base font-bold text-slate-900 font-heading">EU AI Act Conformity</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                Categorization of commercial decision algorithms as Low/Transparency risk with full explainability logs and bias mitigation monitoring.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200/90 hover:border-amber-400 hover:shadow-xl hover:-translate-y-0.5 space-y-2 shadow-sm transition-all">
              <div className="text-xs font-mono font-bold text-amber-700 uppercase">Standard 04</div>
              <h3 className="text-base font-bold text-slate-900 font-heading">Prompt Sandboxing</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                Dual-boundary semantic classifiers detecting adversarial attempts to jailbreak agents or override corporate instructions.
              </p>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════════
            WORKFLOW & PROCESS AUTOMATION
        ══════════════════════════════════════════════════════════════════ */}
        <section id="workflow-process-automation" className="scroll-mt-28 space-y-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between pb-4 border-b border-slate-200 gap-3">
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-heading">
                Workflow & Process Automation
              </h2>
              <p className="text-sm sm:text-base text-slate-600 mt-1 max-w-3xl leading-relaxed">
                Automating repetitive enterprise workflows from initial lead ingestion, CRM enrichment, CPQ approval routing, to billing reconciliation.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-white border border-slate-200/90 hover:border-cyan-400 hover:shadow-xl hover:-translate-y-0.5 space-y-3 shadow-sm transition-all">
              <span className="text-xs font-mono font-bold text-cyan-700">Workflow 01</span>
              <h3 className="text-lg font-bold text-slate-900 font-heading">Instant Lead Routing & SLA</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                Inbound leads scored, enriched with technographics, matched to territory AE, and pushed to Slack/mobile within 180 seconds.
              </p>
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 font-mono text-xs text-emerald-700 font-bold">
                +48% first-touch conversion by eliminating delays.
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200/90 hover:border-blue-400 hover:shadow-xl hover:-translate-y-0.5 space-y-3 shadow-sm transition-all">
              <span className="text-xs font-mono font-bold text-blue-700">Workflow 02</span>
              <h3 className="text-lg font-bold text-slate-900 font-heading">Autonomous CPQ Redlines</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                AI parses client NDA/MSA markup against standard legal playbooks, automatically accepting approved clauses and flagging outlier risk terms.
              </p>
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 font-mono text-xs text-blue-700 font-bold">
                Reduces legal turnaround from 12 days to 36 hours.
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200/90 hover:border-purple-400 hover:shadow-xl hover:-translate-y-0.5 space-y-3 shadow-sm transition-all">
              <span className="text-xs font-mono font-bold text-purple-700">Workflow 03</span>
              <h3 className="text-lg font-bold text-slate-900 font-heading">Closed-Won Provisioning</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                Docusign execution triggers automated ERP contract creation, tenant cloud provisioning, Stripe billing schedule, and onboarding kickoff emails.
              </p>
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 font-mono text-xs text-purple-700 font-bold">
                Zero manual data re-entry between CRM and ERP.
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════════
            INDUSTRIAL AUTOMATION & TELEMETRY
        ══════════════════════════════════════════════════════════════════ */}
        <section id="industrial-automation-robotics" className="scroll-mt-28 space-y-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between pb-4 border-b border-slate-200 gap-3">
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-heading">
                Industrial Automation & Telemetry
              </h2>
              <p className="text-sm sm:text-base text-slate-600 mt-1 max-w-3xl leading-relaxed">
                Bridging edge hardware sensors, SCADA telemetry, predictive maintenance triggers, and autonomous replenishment in manufacturing and logistics.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-white border border-slate-200/90 hover:border-amber-400 hover:shadow-xl hover:-translate-y-0.5 space-y-3 shadow-sm transition-all">
              <span className="text-xs font-mono font-bold text-amber-700">Industrial Edge 01</span>
              <h3 className="text-lg font-bold text-slate-900 font-heading">Predictive Wear Triggers</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                Vibration and thermal sensors on industrial equipment calculate mean-time-between-failure (MTBF), automatically creating parts orders before breakdown.
              </p>
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 font-mono text-xs text-amber-700 font-bold">
                Transforms warranty costs into high-margin parts ARR.
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200/90 hover:border-emerald-400 hover:shadow-xl hover:-translate-y-0.5 space-y-3 shadow-sm transition-all">
              <span className="text-xs font-mono font-bold text-emerald-700">Industrial Edge 02</span>
              <h3 className="text-lg font-bold text-slate-900 font-heading">Warehouse Replenishment</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                Computer vision dock inspection and RFID scans update ERP inventory in real-time, executing dynamic reorder points tied to supplier freight lead times.
              </p>
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 font-mono text-xs text-emerald-700 font-bold">
                Cuts safety stock holding costs by 22%.
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200/90 hover:border-cyan-400 hover:shadow-xl hover:-translate-y-0.5 space-y-3 shadow-sm transition-all">
              <span className="text-xs font-mono font-bold text-cyan-700">Industrial Edge 03</span>
              <h3 className="text-lg font-bold text-slate-900 font-heading">Digital Twin Optimization</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                Simulating factory line throughput under shifting raw material input prices, recommending optimal machine dispatch schedules to maximize margin.
              </p>
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 font-mono text-xs text-cyan-700 font-bold">
                +3.8% Overall Equipment Effectiveness (OEE) lift.
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════════
            CONTINUOUS IMPROVEMENT & EXCELLENCE
        ══════════════════════════════════════════════════════════════════ */}
        <section id="continuous-improvement-excellence" className="scroll-mt-28 space-y-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between pb-4 border-b border-slate-200 gap-3">
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-heading">
                Continuous Improvement & Excellence
              </h2>
              <p className="text-sm sm:text-base text-slate-600 mt-1 max-w-3xl leading-relaxed">
                Applying DMAIC (Define, Measure, Analyze, Improve, Control) to commercial processes, eradicating operational debt, and institutionalizing Kaizen.
              </p>
            </div>
          </div>

          <div className="rounded-2xl bg-white border border-slate-200/90 shadow-md p-6 sm:p-8 space-y-6">
            <h3 className="text-base sm:text-lg font-bold text-slate-900 font-heading">The Commercial DMAIC Improvement Cycle</h3>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                <div className="text-xs font-mono font-bold text-blue-700">01. DEFINE</div>
                <div className="text-xs font-bold text-slate-900 font-heading">Identify Leakage</div>
                <p className="text-[11px] text-slate-600 leading-relaxed">Pinpoint specific process variance: e.g., 28% of quotes giving unauthorized discounts.</p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                <div className="text-xs font-mono font-bold text-indigo-700">02. MEASURE</div>
                <div className="text-xs font-bold text-slate-900 font-heading">Audit Baseline</div>
                <p className="text-[11px] text-slate-600 leading-relaxed">Calculate baseline cycle duration, touch counts, and revenue leakage dollar impact.</p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                <div className="text-xs font-mono font-bold text-purple-700">03. ANALYZE</div>
                <div className="text-xs font-bold text-slate-900 font-heading">Root Cause</div>
                <p className="text-[11px] text-slate-600 leading-relaxed">Apply Ishikawa fishbone diagrams and 5-Whys to find the structural bottleneck.</p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                <div className="text-xs font-mono font-bold text-emerald-700">04. IMPROVE</div>
                <div className="text-xs font-bold text-slate-900 font-heading">Standardize</div>
                <p className="text-[11px] text-slate-600 leading-relaxed">Deploy automated agent guardrails and standardized playbooks across all pods.</p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                <div className="text-xs font-mono font-bold text-rose-700">05. CONTROL</div>
                <div className="text-xs font-bold text-slate-900 font-heading">Telemetry</div>
                <p className="text-[11px] text-slate-600 leading-relaxed">Statistical process control charts alerting executives to process drift within 24 hours.</p>
              </div>
            </div>
          </div>
        </section>

      </div>

      {/* ── BOTTOM CTA SECTION (EXECUTIVE DARK CONTRAST) ── */}
      <section className="border-t border-slate-200 bg-gradient-to-b from-slate-900 to-slate-950 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/80 border border-purple-800/60 text-purple-400 text-xs font-mono font-bold uppercase tracking-wider">
            Operational Engineering
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight font-heading">
            Engineer Autonomous Excellence Across Your Commercial Organization
          </h2>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed font-normal">
            Eliminate manual friction, deploy role-specific AI agents with deterministic safety, and transform operational overhead into competitive advantage.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <Link
              to="/book-consultation"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm shadow-lg shadow-blue-600/30 transition-all cursor-pointer"
            >
              <span>Schedule Automation Session</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/offerings/ai-trust-governance"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-sm border border-slate-700 transition-all cursor-pointer"
            >
              <span>Explore AI Trust & Governance</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
