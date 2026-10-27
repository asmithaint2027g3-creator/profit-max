import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Bot,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Layers,
  Sparkles,
  Lock,
  Activity,
  Cpu,
  BrainCircuit,
  ShieldCheck,
  Search,
  MessageSquare,
  Calendar,
  RefreshCw,
  Sliders,
  AlertTriangle,
  UserCheck,
  BarChart3,
  GitBranch,
  XCircle
} from 'lucide-react';
import AiSalesStickySubNav from '../../components/AiSalesStickySubNav';
import AiSalesIntakeForm from '../../components/forms/AiSalesIntakeForm';

export default function AgenticSdrPage() {
  useEffect(() => {
    document.title = 'Agentic SDR & Autopilots | ProfitMachines AI Native Sales';
    window.scrollTo(0, 0);
  }, []);

  const subNavAnchors = [
    { id: 'architecture', label: 'Architecture & Stack' },
    { id: 'features', label: 'Key Features & Capabilities' },
    { id: 'governance', label: 'Governance & Outcomes' }
  ];

  const architectureLayers = [
    {
      num: 'Layer 01',
      title: 'Account Research & Deep Intelligence',
      tech: 'Perception Agents & Multi-Modal Ingestion',
      description: 'Autonomous perception agents scour 10-K financial reports, executive earnings transcripts, press releases, tech stack fingerprints, and active job postings to synthesize an empirical account profile in under 4 seconds.',
      details: [
        'Continuous dark-funnel intent polling (6sense, Bombora, G2)',
        'Executive committee mapping and reporting hierarchy resolution',
        'Direct identification of regulatory and operational pain triggers'
      ]
    },
    {
      num: 'Layer 02',
      title: 'Contextual Message Personalization Engine',
      tech: 'Domain-Specialized Reasoning LLMs',
      description: 'Bypasses static templates entirely. Each communication is mathematically engineered from the ground up, referencing specific company initiatives, recent quarterly remarks, and value hypothesis models.',
      details: [
        'Dynamic semantic reasoning tailored to C-suite and VP personas',
        'Tone calibration matching enterprise corporate governance standards',
        'Zero generic fluff or hallucinated corporate claims'
      ]
    },
    {
      num: 'Layer 03',
      title: 'Multi-Channel Sequence Orchestration',
      tech: 'Cross-Rail State Machine & Mesh Protocol',
      description: 'Orchestrates synchronized touchpoints across corporate email, verified LinkedIn executive channels, and automated voice drops. Execution pacing dynamically adapts to prospect engagement telemetry.',
      details: [
        'Domain reputation protection with programmatic inbox rotation',
        'Adaptive send-time optimization based on recipient active hours',
        'Cross-channel state tracking preventing redundant outreach'
      ]
    },
    {
      num: 'Layer 04',
      title: 'Objection Handling & Dynamic Adaptation',
      tech: 'Neural Semantic Classifier & Dynamic Battlecards',
      description: 'When a prospect raises an objection (e.g., "already using competitor X", "budget locked until Q3", "no bandwidth"), the agent classifies the objection semantic type and executes an authoritative, data-backed rebuttal.',
      details: [
        'Sub-second classification across 42 objection archetypes',
        'Real-time retrieval of competitive displacement benchmarks',
        'Automatic routing to human reps when custom parameters arise'
      ]
    },
    {
      num: 'Layer 05',
      title: 'Meeting Booking & CRM Synchronization',
      tech: 'Zero-Latency Calendar Agent & Two-Way Sync',
      description: 'Negotiates availability naturally within the conversation thread, locks calendar invites with multi-stakeholder attendance confirmations, and writes complete meeting briefs into your CRM with zero rep admin.',
      details: [
        'Timezone-aware conversational scheduling in 1-2 email exchanges',
        'Comprehensive MEDDPICC pre-call dossiers generated for AEs',
        'Instant two-way sync with Salesforce, HubSpot, and Google/Outlook'
      ]
    }
  ];

  const featureCards = [
    {
      title: 'Hyper-Personalized Outreach',
      icon: Sparkles,
      desc: 'Generates 1-to-1 tailored executive messaging referencing real-time financials, hiring surges, and strategic vendor shifts.'
    },
    {
      title: 'Real-Time Intent Triggering',
      icon: Activity,
      desc: 'Activates outbound cadences within 180 seconds of dark-funnel buying signals, category research spikes, or executive moves.'
    },
    {
      title: 'Automated Multi-Channel Sequencing',
      icon: Layers,
      desc: 'Seamlessly coordinates executive touches across corporate email, LinkedIn InMail, and personalized voice briefs.'
    },
    {
      title: 'Autonomous Objection Capture',
      icon: MessageSquare,
      desc: 'Identifies, categorizes, and counters 42+ standard enterprise objections with factual evidence and case study validation.'
    },
    {
      title: 'Human-in-the-Loop Escalation',
      icon: UserCheck,
      desc: 'Instantly hands over conversation control to designated senior reps whenever high-value enterprise champions engage.'
    },
    {
      title: 'Deterministic SLA Enforcement',
      icon: Sliders,
      desc: 'Enforces sub-5 minute inbound inquiry response times and strict scheduled follow-up cadences 24/7/365.'
    },
    {
      title: 'Continuous Reinforcement Learning',
      icon: RefreshCw,
      desc: 'Self-calibrates language patterns, subject lines, and objection rebuttals based on real meeting conversion outcomes.'
    },
    {
      title: 'Full Cryptographic Audit Trail',
      icon: ShieldCheck,
      desc: 'Maintains an immutable record of every ingested data point, reasoning step, and generated message for compliance audits.'
    }
  ];

  const comparisonData = [
    {
      metric: 'Monthly Account Coverage',
      manual: '150 – 250 accounts / SDR',
      agentic: '5,000 – 15,000 accounts / pod',
      advantage: '30x – 60x throughput expansion'
    },
    {
      metric: 'Speed to Response on Inbound',
      manual: '45 mins – 4 hours (business hours only)',
      agentic: '< 90 seconds (24/7/365)',
      advantage: 'Instant intent capture'
    },
    {
      metric: 'Message Personalization Depth',
      manual: 'First-name tokens & basic industry inserts',
      agentic: 'Full 10-K analysis, trigger events & ROI math',
      advantage: '100% bespoke executive context'
    },
    {
      metric: 'Rep Burnout & Turnover',
      manual: '34% annual turnover, constant hiring cycle',
      agentic: 'Zero turnover; permanent institutional IP',
      advantage: 'Eliminated ramp overhead'
    },
    {
      metric: 'Cost per Qualified Meeting (SQL)',
      manual: '$1,200 – $2,800 fully-loaded SDR cost',
      agentic: '$350 – $650 fully-loaded autonomous cost',
      advantage: '65% CAC reduction'
    },
    {
      metric: 'CRM Hygiene & Administrative Overhead',
      manual: 'Manual, error-prone data entry; ~2.5 hrs/day',
      agentic: '100% automated real-time structured logging',
      advantage: 'Zero administrative leakage'
    }
  ];

  const governanceRules = [
    {
      title: 'Pre-Approval Rules Engine',
      desc: 'Configurable brand guardrails, exclusion lists, and tone parameters. Specify strict negative keyword boundaries, banned competitor references, and required compliance disclosures.'
    },
    {
      title: 'Real-Time Telemetry & Monitoring',
      desc: 'Continuous real-time sentiment scoring and spam reputation tracking. Automated domain throttling triggers if spam complaint rates exceed 0.05% on any single sending rail.'
    },
    {
      title: 'Algorithmic Escalation Triggers',
      desc: 'Immediate notification and warm transfer to human account executives whenever an enterprise buyer requests a bespoke contract, custom pricing, or complex security clearance.'
    },
    {
      title: 'Post-Action Review & Audit Logs',
      desc: 'Complete immutable archive of every outbound touchpoint, reasoning chain, and conversion outcome with weekly automated drift detection reports.'
    }
  ];

  const useCases = [
    {
      title: 'New Market & Geographic Expansion',
      desc: 'Instantly penetrate new geographic regions or vertical markets without spending 6 months hiring, onboarding, and training local SDR teams.'
    },
    {
      title: 'Dormant Pipeline & Lost-Opportunity Rescue',
      desc: 'Systematically re-engage thousands of stalled CRM leads and closed-lost opportunities with updated trigger events and feature announcements.'
    },
    {
      title: 'Enterprise Account Committee Multi-Threading',
      desc: 'Simultaneously engage 6-10 distinct buying committee stakeholders across Finance, IT, Security, and Operations with tailored messaging.'
    },
    {
      title: 'Rep Ramp Augmentation',
      desc: 'Provide incoming Account Executives with full calendars of pre-qualified meetings on Day 1, cutting quota ramp time from 6 months to 60 days.'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50/50 text-slate-900 pt-16 lg:pt-[72px]">
      
      {/* ── STICKY SUB-NAVIGATION ── */}
      <AiSalesStickySubNav
        currentPageTitle="Agentic SDR & Autopilots"
        currentPath="/ai-native-sales/agentic-sdr"
        anchors={subNavAnchors}
      />

      {/* ── HERO BANNER ── */}
      <section className="relative bg-slate-950 text-white py-14 lg:py-20 overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-blue-950/40" />
        </div>

        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-mono uppercase tracking-wider mb-4">
              <Bot className="w-3.5 h-3.5 text-blue-400" />
              <span>Category 01 · Autonomous Outbound Execution</span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
              Agentic SDR & <span className="text-blue-400">Outbound Autopilots</span>
            </h1>

            <p className="text-lg text-slate-300 leading-relaxed font-normal mb-8">
              Autonomous outbound fleets engineering deeply researched, multi-channel conversations that convert cold TAM accounts into scheduled pipeline under strict enterprise human oversight.
            </p>

            <div className="flex flex-wrap items-center gap-6 text-xs font-mono text-slate-400 border-t border-slate-800/80 pt-6">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span className="text-white font-bold">3.8x Meeting Velocity</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-400" />
                <span className="text-white font-bold">80% Auto-Sourced SQLs</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-purple-400" />
                <span className="text-white font-bold">65% CAC Reduction</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION A: ARCHITECTURE & STACK (#architecture) ── */}
      <section id="architecture" className="scroll-mt-28 py-16 lg:py-24 bg-white border-b border-slate-200">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600 block mb-2">
              Section A · Technical Architecture
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
              The Agentic SDR Architecture: Five Deep Layers
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              Our agentic architecture operates across 5 decoupled software layers, transforming raw account signals into confirmed, qualified executive meetings without human latency:
            </p>
          </div>

          <div className="space-y-6">
            {architectureLayers.map((layer, idx) => (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-slate-50 border border-slate-200/90 hover:border-blue-300 hover:shadow-lg transition-all"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  
                  <div className="lg:col-span-4 space-y-2">
                    <span className="text-xs font-mono font-bold text-blue-600 uppercase tracking-wider">
                      {layer.num}
                    </span>
                    <h3 className="text-xl font-extrabold text-slate-900 tracking-tight">
                      {layer.title}
                    </h3>
                    <div className="text-xs font-mono text-slate-500 bg-white inline-block px-2.5 py-1 rounded-md border border-slate-200">
                      {layer.tech}
                    </div>
                  </div>

                  <div className="lg:col-span-8 space-y-4">
                    <p className="text-sm text-slate-700 leading-relaxed">
                      {layer.description}
                    </p>

                    <div className="space-y-2 pt-2 border-t border-slate-200/80">
                      {layer.details.map((detail, dIdx) => (
                        <div key={dIdx} className="flex items-center gap-2.5 text-xs text-slate-600">
                          <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                          <span>{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── SECTION B: KEY FEATURES & CAPABILITIES (#features) ── */}
      <section id="features" className="scroll-mt-28 py-16 lg:py-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600 block mb-2">
              Section B · Execution Capabilities
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
              Deterministic Outbound at Enterprise Scale
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              Every capability is built for high-volume precision, avoiding the common pitfalls of spam filters, generic AI hallucinations, and fragmented manual handoffs.
            </p>
          </div>

          {/* 2-Column Grid of Detailed Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {featureCards.map((feat, idx) => {
              const Icon = feat.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-xs flex items-start gap-4 hover:border-blue-400 transition-all"
                >
                  <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-extrabold text-slate-900 mb-1.5">{feat.title}</h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{feat.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Comparison Table: Manual SDR vs. Agentic SDR */}
          <div className="bg-white rounded-3xl border border-slate-200/90 p-8 shadow-xs overflow-hidden">
            <div className="mb-6">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600 block mb-1">
                Comparative Telemetry
              </span>
              <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight">
                Manual SDR Fleets vs. ProfitMachines Agentic SDR
              </h3>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-slate-200 text-xs font-mono text-slate-500 uppercase tracking-wider">
                    <th className="py-3 px-4">Performance Dimension</th>
                    <th className="py-3 px-4">Traditional Manual SDR Team</th>
                    <th className="py-3 px-4 text-blue-600">ProfitMachines Agentic SDR</th>
                    <th className="py-3 px-4">Efficiency Advantage</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-xs sm:text-sm">
                  {comparisonData.map((row, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/80 transition-colors">
                      <td className="py-4 px-4 font-bold text-slate-900">{row.metric}</td>
                      <td className="py-4 px-4 text-slate-600">{row.manual}</td>
                      <td className="py-4 px-4 font-semibold text-blue-700 bg-blue-50/50">{row.agentic}</td>
                      <td className="py-4 px-4 font-mono font-bold text-emerald-600">{row.advantage}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

        </div>
      </section>

      {/* ── SECTION C: GOVERNANCE & OUTCOMES (#governance) ── */}
      <section id="governance" className="scroll-mt-28 py-16 lg:py-24 bg-white border-b border-slate-200">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600 block mb-2">
              Section C · Enterprise Governance & Outcomes
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
              Autonomous Execution, Human Oversight
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              We reject black-box automation that endangers brand equity. The ProfitMachines Agentic SDR runs inside a four-stage governance envelope that enforces complete auditability and safety.
            </p>
          </div>

          {/* 4 Governance Layers */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {governanceRules.map((gov, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-50 border border-slate-200/90 flex flex-col justify-between"
              >
                <div>
                  <div className="w-8 h-8 rounded-lg bg-blue-600 text-white font-mono font-bold text-xs flex items-center justify-center mb-4">
                    0{idx + 1}
                  </div>
                  <h3 className="text-base font-extrabold text-slate-900 mb-2">{gov.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{gov.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Use Cases Grid */}
          <div className="mb-16">
            <h3 className="text-xl font-extrabold text-slate-900 mb-6">
              Primary Enterprise Deployment Use Cases
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {useCases.map((uc, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:border-blue-400 transition-all"
                >
                  <h4 className="text-base font-bold text-slate-900 mb-2">{uc.title}</h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{uc.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Final CTA Diagnostic Form */}
          <div className="rounded-3xl bg-slate-950 text-white p-8 sm:p-12 border border-slate-800">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-5 space-y-4">
                <span className="text-xs font-mono font-bold text-blue-400 uppercase tracking-wider block">
                  DEPLOYMENT INITIATION
                </span>
                <h3 className="text-3xl font-extrabold text-white tracking-tight leading-tight">
                  Book an Agentic SDR Revenue Diagnostic
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Evaluate your current outbound CAC and calculate the exact meeting lift an autonomous agent pod will generate across your active TAM.
                </p>
                <div className="pt-2 text-xs font-mono text-slate-400 space-y-1.5">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>Outbound TAM Saturation Simulation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>Domain Health & Inbox Infrastructure Audit</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7">
                <AiSalesIntakeForm
                  pageContext="Agentic SDR & Autopilots"
                  defaultService="Agentic SDR & Autopilots Deployment"
                />
              </div>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
