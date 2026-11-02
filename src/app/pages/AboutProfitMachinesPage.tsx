import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Building2, ArrowRight, ArrowUpRight, CheckCircle2, ShieldCheck,
  TrendingUp, BarChart3, Layers, Cpu, Compass, Activity, Target,
  Zap, Globe, Sparkles, ChevronRight, Lock, Users, Network,
  AlertCircle, Scale, Database, Clock, RefreshCw, Check, MapPin,
  Mail, Phone, ExternalLink, Award, FileText, Binary, Server, Code,
  Flame, Leaf, HeartHandshake, Eye, Briefcase
} from 'lucide-react';
import { Reveal } from '../components/ui/Reveal';
import LeadCaptureSection from '../components/LeadCaptureSection';

export default function AboutProfitMachinesPage() {
  const location = useLocation();
  const [activeRoadmapStage, setActiveRoadmapStage] = useState<number>(0);
  const [selectedTeamCategory, setSelectedTeamCategory] = useState<string>('all');
  const [selectedCapabilityIndex, setSelectedCapabilityIndex] = useState<number>(0);

  useEffect(() => {
    document.title = "About Us | ProfitMachines — Full-Spectrum Revenue Engineering & AI Architecture";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        'content',
        'ProfitMachines, powered by TRUSTGRID.AI, is an enterprise-grade AI-native revenue transformation platform helping global businesses engineer predictable pipeline, compress sales cycles, and scale frontier intelligence.'
      );
    }
  }, []);

  // ── VALUE ENGINEERING ROADMAP (OPERATING AT FRONTIER SCALE) ──
  const roadmapStages = [
    {
      stage: 'STAGE 01',
      timeframe: 'T + 2 Weeks',
      title: 'Proof of Feasibility',
      question: '“Can it be built?”',
      desc: 'Validate technical feasibility, telemetry connectors, CRM integration, and operational readiness.',
      milestone: 'MILESTONE 01',
      kpi: 'Data Pipeline Validation'
    },
    {
      stage: 'STAGE 02',
      timeframe: 'T + 4 Weeks',
      title: 'Proof of Value',
      question: '“Does it deliver benefit?”',
      desc: 'Demonstrate measurable business outcomes, early pipeline conversion signals, and preliminary ROI validation.',
      milestone: 'MILESTONE 02',
      kpi: 'Measurable ROI Lift'
    },
    {
      stage: 'STAGE 03',
      timeframe: 'T + 6 Weeks',
      title: 'Proof of Performance',
      question: '“Does it scale?”',
      desc: 'Validate scalability, reliability, resilience, deal-triage throughput, and latency benchmarks.',
      milestone: 'MILESTONE 03',
      kpi: 'Sub-60s Execution SLA'
    },
    {
      stage: 'STAGE 04',
      timeframe: 'T + 8 Weeks',
      title: 'Proof of Recurring Value',
      question: '“Is it sustainable?”',
      desc: 'Demonstrate repeatable value, sales rep adoption, automated hygiene, and long-term operating stability.',
      milestone: 'MILESTONE 04',
      kpi: 'Systemic Rep Adoption'
    },
    {
      stage: 'STAGE 05',
      timeframe: 'T + 12 Weeks',
      title: 'Proof of Compounding',
      question: '“Does value multiply?”',
      desc: 'Show compounded business impact, cross-functional leverage, Net Revenue Retention (NRR) expansion, and measurable growth.',
      milestone: 'MILESTONE 05',
      kpi: 'Compounding Enterprise NRR'
    }
  ];

  // ── 6 CORE ENGINEERING PILLARS ──
  const corePillars = [
    {
      id: 'compute',
      title: 'GPU & Compute Optimization',
      tagline: 'High-Throughput Inference & Signal Processing',
      desc: 'Dynamic voltage/frequency scaling, kernel optimization, and continuous batching across distributed GPU clusters to reduce inference latency and power consumption.',
      icon: Cpu,
      stats: '74% Less Inspection Energy',
      color: 'blue'
    },
    {
      id: 'agentic',
      title: 'LLM & AI Agent Engineering',
      tagline: 'Autonomous Context Dossiers & Deal Execution',
      desc: 'Multi-agent orchestration frameworks generating real-time account dossiers, stakeholder maps, dynamic battlecards, and autonomous intake triage.',
      icon: Network,
      stats: 'Sub-60s Inbound Briefing',
      color: 'indigo'
    },
    {
      id: 'infrastructure',
      title: 'AI Infrastructure Engineering',
      tagline: 'Continuous Revenue Data Fabric & Bidirectional Sync',
      desc: 'Resilient, high-availability pipelines integrating Salesforce, HubSpot, NetSuite, ERPs, and calendar telemetry into an auditable single source of truth.',
      icon: Server,
      stats: '99.99% Fabric Availability',
      color: 'emerald'
    },
    {
      id: 'security',
      title: 'AI Cybersecurity & Quantum Safe',
      tagline: 'Zero Data Retention & Enterprise Sovereign AI',
      desc: 'Air-gapped deployment readiness, post-quantum cryptography, strict mutual NDA governance, and zero-client-data-leakage architecture.',
      icon: ShieldCheck,
      stats: '100% Client Data Isolation',
      color: 'purple'
    },
    {
      id: 'reliability',
      title: 'Reliability & Trust Engineering',
      tagline: 'Algorithmic Deal Health & CFO-Auditable Telemetry',
      desc: 'Deterministic deal-slip prediction, objective win-rate scoring, and auditable forecast models replacing speculative rep confidence.',
      icon: Activity,
      stats: '98.4% Forecast Precision',
      color: 'cyan'
    },
    {
      id: 'modernization',
      title: 'Infrastructure Modernization & AI Operating Model',
      tagline: 'Transforming Legacy Teams into Capital-Efficient Engines',
      desc: 'Complete commercial restructuring: aligning compensation, territory capacity, sales velocity science, and phased human-in-the-loop governance.',
      icon: Layers,
      stats: '40% Lower Customer Acquisition Cost',
      color: 'amber'
    }
  ];

  // ── THE VALUE ADDITION QUADRANTS ──
  const valueAddition = [
    {
      category: 'Value to AI Progress',
      title: 'The Acceleration Multiplier',
      desc: "The bottleneck to enterprise commercial progress is operational friction, not talent. We serve as the critical catalyst between theoretical AI research and scalable, real-world revenue deployment.",
      icon: Zap,
      color: 'blue'
    },
    {
      category: 'Value to the Planet & Capital',
      title: 'The Sustainability Shield',
      desc: "Enterprise compute sprawl is an efficiency and capital crisis. Through carbon-aware workload routing, kernel optimization, and lean data pipelines, we drastically curtail waste while maximizing capital return.",
      icon: Leaf,
      color: 'emerald'
    },
    {
      category: 'Value to Human Governance',
      title: 'The Trust Anchor',
      desc: "As autonomous agentic systems make high-stakes commercial and operational decisions, we provide verifiable guardrails, explainability traces, and SOC-2 standard cryptographic envelopes.",
      icon: Lock,
      color: 'purple'
    },
    {
      category: 'Real-World Impact',
      title: 'The Net Societal Outcome',
      desc: "We ensure enterprise AI investments translate into genuine productivity gains, sustainable job empowerment, and resilient supply chains—rather than vanishing into technical debt.",
      icon: HeartHandshake,
      color: 'indigo'
    }
  ];

  // ── RADICAL ENGINEERING PRECISION (CULTURE & PRINCIPLES) ──
  const principles = [
    {
      num: 'PRIN 01',
      title: 'Systems-Level Thinking',
      desc: 'We do not patch symptoms. Our engineers look at the entire stack—from underlying silicon and CRM interconnects up to the agentic attention mechanisms driving revenue decisions.'
    },
    {
      num: 'PRIN 02',
      title: 'Relentless Optimization',
      desc: 'Every cycle of compute, every minute of sales rep latency, and every dollar of CAC matters. We push workflows to the mathematical limit of efficiency.'
    },
    {
      num: 'PRIN 03',
      title: 'Truth Over Trend',
      desc: 'While the market chases hype and ungrounded chat interfaces, we are anchored in mathematics, physics, and empirical telemetry. We prioritize deterministic business outcomes over flashy demos.'
    },
    {
      num: 'PRIN 04',
      title: 'High-Trust, High-Ownership',
      desc: 'We operate with radical transparency, rigorous peer review, and deep responsibility for the mission-critical systems and proprietary data entrusted to us.'
    },
    {
      num: 'PRIN 05',
      title: 'Impact-Driven Focus',
      desc: 'Every line of code and every operational blueprint is evaluated through the lens of measurable economic return, building the sustainable foundation for enterprise growth.'
    }
  ];

  // ── LEADERSHIP & ARCHITECTURAL TEAM ROSTER ──
  const teamMembers = [
    {
      name: 'Shaji Namath',
      role: 'Managing Partner - GCC Practice & Strategic Architecture',
      domain: 'leadership',
      badge: 'Executive',
      location: 'Bengaluru / Global'
    },
    {
      name: 'Pranav PR',
      role: 'Director & Chief Operating Officer',
      domain: 'leadership',
      badge: 'Executive',
      location: 'Bengaluru'
    },
    {
      name: 'Balaji Venkatraman',
      role: 'Director - Growth & Acceleration',
      domain: 'leadership',
      badge: 'Growth Architecture',
      location: 'Singapore / Global'
    },
    {
      name: 'Kumar V',
      role: 'Global Head - AI Infra & Cybersecurity Practice',
      domain: 'architecture',
      badge: 'Infra & Cyber',
      location: 'US / Americas'
    },
    {
      name: 'Lavanya Seshadri',
      role: 'Head - FDE Practice (AJPC) & AI Value Engineering',
      domain: 'architecture',
      badge: 'Value Engineering',
      location: 'San Mateo, CA'
    },
    {
      name: 'Vignesh KS',
      role: 'Product Lead (FinTech & Escrow Platforms)',
      domain: 'engineering',
      badge: 'Platform Lead',
      location: 'Bengaluru'
    },
    {
      name: 'Hemalata Niyogi',
      role: 'Lead Architect - AI FDE Practice (Mfg & Systems)',
      domain: 'architecture',
      badge: 'Lead AI Architect',
      location: 'Osaka / East Asia'
    },
    {
      name: 'Prithivin L',
      role: 'Project Lead - Systems & Enterprise Platforms',
      domain: 'engineering',
      badge: 'Systems Lead',
      location: 'Bengaluru'
    },
    {
      name: 'Shiva Kumar',
      role: 'Managing Partner & Advisor - Mfg Domain',
      domain: 'leadership',
      badge: 'Domain Advisor',
      location: 'Bengaluru'
    },
    {
      name: 'Mahadaven Ramasumbramanian',
      role: 'Managing Partner - FDE Practice (Energy & Telecom)',
      domain: 'leadership',
      badge: 'Practice Leader',
      location: 'Mumbai'
    },
    {
      name: 'Sonu Priyadharshini',
      role: 'Chief Financial Controller (Acting) & Talent Acceleration',
      domain: 'governance',
      badge: 'Finance & Talent',
      location: 'Bengaluru'
    },
    {
      name: 'Dinesh Kumar',
      role: 'Senior AI FDE (Finance & Healthcare)',
      domain: 'engineering',
      badge: 'Senior FDE',
      location: 'Bengaluru'
    },
    {
      name: 'Risihi Kumar',
      role: 'AI / ML Engineer & Deep Learning',
      domain: 'engineering',
      badge: 'AI Architecture',
      location: 'Bengaluru'
    },
    {
      name: 'Ritin',
      role: 'Senior AI Architect & Model Optimization',
      domain: 'engineering',
      badge: 'AI Systems',
      location: 'Bengaluru'
    },
    {
      name: 'Natarajan',
      role: 'Senior Blockchain & Distributed Systems Architect',
      domain: 'architecture',
      badge: 'Distributed Systems',
      location: 'Bengaluru'
    },
    {
      name: 'Viswanath',
      role: 'Senior DevOps & Cloud Infrastructure Engineer',
      domain: 'architecture',
      badge: 'Cloud & SRE',
      location: 'Bengaluru'
    },
    {
      name: 'Subashini Kaushik',
      role: 'Lead AI FDE Practice (GRC & FinTech)',
      domain: 'governance',
      badge: 'GRC & FinTech',
      location: 'Bengaluru'
    },
    {
      name: 'Neha Hebber',
      role: 'FDE Practice (Finance & GRC) — IIT Bombay',
      domain: 'engineering',
      badge: 'IIT Bombay Alum',
      location: 'Mumbai'
    },
    {
      name: 'Annapoorani',
      role: 'Lead AI FDE Practice (Automation & Workflows)',
      domain: 'engineering',
      badge: 'Automation Lead',
      location: 'Bengaluru'
    },
    {
      name: 'Swathi Iyer',
      role: 'Lead Investor & Strategic Advisor — IIT Madras',
      domain: 'governance',
      badge: 'IIT Madras Alum',
      location: 'Bengaluru'
    },
    {
      name: 'Aishwarya LN Bhatt',
      role: 'AI Performance Marketing & Commercial Strategy',
      domain: 'growth',
      badge: 'Commercial Strategy',
      location: 'Bengaluru'
    },
    {
      name: 'Chintiya Liu',
      role: 'Lead Regional Consultant & Cross-Border Advisory',
      domain: 'growth',
      badge: 'Regional Advisory',
      location: 'East Asia'
    },
    {
      name: 'Kallol Pal',
      role: 'Technology Advisor & Enterprise Systems CTO',
      domain: 'leadership',
      badge: 'CTO Advisor',
      location: 'Global'
    },
    {
      name: 'Soumya Sommiah',
      role: 'Company Secretary & Corporate Governance',
      domain: 'governance',
      badge: 'Governance',
      location: 'Bengaluru'
    },
    {
      name: 'Soumya S',
      role: 'Corporate Legal Counsel & Compliance',
      domain: 'governance',
      badge: 'Legal',
      location: 'Bengaluru'
    },
    {
      name: 'Aswathi Nair',
      role: 'Corporate Legal Counsel & IP Protection',
      domain: 'governance',
      badge: 'Legal',
      location: 'Bengaluru'
    },
    {
      name: 'Vanitha T',
      role: 'Manager - General Administration & Operations',
      domain: 'operations',
      badge: 'Operations',
      location: 'Bengaluru'
    },
    {
      name: 'Gagna Sindhu',
      role: 'HR & People Operations Specialist',
      domain: 'operations',
      badge: 'People Ops',
      location: 'Bengaluru'
    },
    {
      name: 'Poojasri',
      role: 'AI / ML Engineer — Pipeline & Embeddings',
      domain: 'engineering',
      badge: 'ML Systems',
      location: 'Bengaluru'
    }
  ];

  const filteredTeam = selectedTeamCategory === 'all'
    ? teamMembers
    : teamMembers.filter(m => m.domain === selectedTeamCategory);

  // ── CASE STUDIES (PRODUCTION AI, MEASURED IN OUTCOMES) ──
  const caseStudies = [
    {
      sector: 'Medical Supplies & Manufacturing',
      client: 'Global Medical Supplies & Manufacturing Enterprise',
      challenge: 'Distributing disposable hygiene and sterile surgical supplies across 40+ international markets required 3–4 weeks of localized legal review per market, manual conveyor seal inspection with 4.5% returns, and slow 10–14 day warranty claim processing.',
      interventions: [
        { label: 'Generative AI Compliance', detail: 'Automated multi-jurisdiction warranty T&C generation across 40+ countries in 3 days vs 3-4 weeks.' },
        { label: 'Dynamic Regulatory Labeling', detail: 'Direct factory inkjet integration printing verified regional registrations (FDA, ANVISA, CDSCO).' },
        { label: 'Edge Computer Vision', detail: 'Optical beam-triggered OCR and seal integrity checks with 74% inspection power reduction.' },
        { label: 'Touchless Claim Adjudication', detail: '85% auto-approval straight-through processing in under 2 minutes.' }
      ],
      outcome: '3-day T&C turnaround, 300% distribution velocity increase, 90% return/recall reduction, and 99.9% license placement defect prevention.'
    },
    {
      sector: 'Public Sector / Air-Gapped',
      client: 'Government Defense & Intelligence Agency',
      challenge: 'Air-gapped 200-GPU A100 network processing 50K intelligence docs/day. Mission required doubling throughput with zero new hardware during an 18-month procurement cycle.',
      interventions: [
        { label: 'Domain Quantization', detail: 'GPTQ INT4 with defense-domain calibration; <0.8% accuracy loss.' },
        { label: 'Continuous Batching', detail: 'Migrated to vLLM; average batch size jumped from 1.2 to 8.4.' },
        { label: 'Speculative Decoding', detail: '7B draft model paired with 70B target — 2.1x speedup on long document summarization.' }
      ],
      outcome: '2.4x throughput increase, zero hardware expansion cost, and sub-second classification SLA.'
    },
    {
      sector: 'Financial Services / WealthTech',
      client: 'Tier-1 Global Investment Bank',
      challenge: 'Manual commercial lending underwriting taking 18 business days with dispersed client financial telemetry, delayed risk assessment, and elevated compliance friction.',
      interventions: [
        { label: 'Autonomous Financial Dossiers', detail: 'Zero-touch synthesis of 10-K, audited P&L, and debt schedules into CFO-ready credit packages.' },
        { label: 'Algorithmic Risk Scoring', detail: 'Real-time multi-variable probability modeling across macro volatility and covenant buffers.' },
        { label: 'Explainable Audit Trails', detail: 'Every AI decision mapped to cryptographic governance chains for regulatory inspection.' }
      ],
      outcome: 'Underwriting cycle compressed from 18 days to 48 hours, 42% operational cost savings, and 100% regulatory compliance validation.'
    }
  ];

  // ── GLOBAL TECH HUBS ──
  const globalHubs = [
    {
      region: 'India Headquarters',
      city: 'Bengaluru (Indiranagar HQ)',
      label: 'Global R&D Center',
      address: 'Suite 32, 235, Binnamangala, 2nd Floor, 13th Cross Road, Indira Nagar 2nd Stage, Hoysala Nagar, Bengaluru – 560038, India',
      phone: '+91 9513288612',
      email: 'connect@trustgrid.ai'
    },
    {
      region: 'AI Systems Engineering Lab',
      city: 'Bengaluru (Tin Factory)',
      label: 'Hardware & Systems Lab',
      address: 'WeWork, 13th Floor, Tin Factory, Salarpuria Magnificia, 78, Old Madras Rd, next to KR Puram, Bengaluru, Karnataka 560016',
      phone: '+91 9513288612',
      email: 'connect@trustgrid.ai'
    },
    {
      region: 'Western India Operations',
      city: 'Mumbai',
      label: 'Western Operations',
      address: 'WeWork, Raheja Platinum, Road off Andheri - Kurla Road, Sag Baug, Marol, Andheri East, Mumbai, Maharashtra 400059',
      phone: '+91 9513288612',
      email: 'connect@trustgrid.ai'
    },
    {
      region: 'Silicon Valley Office',
      city: 'San Mateo / Mountain View, CA',
      label: 'West Coast AI Center',
      address: 'Suite 21, 400 Concar Dr, San Mateo, CA 94402, United States',
      phone: '+1 650 772 4145',
      email: 'connect@trustgrid.ai'
    },
    {
      region: 'New York Office',
      city: 'New York, New York',
      label: 'East Coast Center',
      address: '33 Irving Pl, New York, NY 10003, United States',
      phone: '+1 650 772 4145',
      email: 'connect@trustgrid.ai'
    },
    {
      region: 'Americas Headquarters',
      city: 'Tampa, Florida',
      label: 'Americas HQ',
      address: '501 E Kennedy Blvd Suite 1400, Tampa, FL 33602, United States',
      phone: '+1 650 772 4145',
      email: 'connect@trustgrid.ai'
    },
    {
      region: 'Southeast Asia Hub',
      city: 'Singapore',
      label: 'APAC Regional Center',
      address: '5 Temasek Boulevard, 17th Floor, Singapore 038985',
      phone: '+65 6050 5235',
      email: 'connect@trustgrid.ai'
    },
    {
      region: 'Australia Operations',
      city: 'Melbourne, Victoria',
      label: 'ANZ Regional Office',
      address: '120 Spencer St, Melbourne VIC 3000, Australia',
      phone: '+65 6050 5235',
      email: 'connect@trustgrid.ai'
    },
    {
      region: 'East Asia Center',
      city: 'Osaka, Japan',
      label: 'East Asia Hub',
      address: '〒530-0002 Osaka, Kita Ward, Sonezakishinchi, 1 Chome−13−22 WeWork 御堂筋フロンティア, Japan',
      phone: '+65 6050 5235',
      email: 'connect@trustgrid.ai'
    },
    {
      region: 'Canada Center',
      city: 'Toronto, Ontario',
      label: 'North America Hub',
      address: '1050 King St W, Toronto, Ontario M6K 0A5, Canada',
      phone: '+1 650 772 4145',
      email: 'connect@trustgrid.ai'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 font-sans selection:bg-blue-600 selection:text-white">
      {/* ── STICKY ANCHOR SUB-NAV ── */}
      <nav className="sticky top-16 z-30 bg-slate-900/95 backdrop-blur-md border-b border-slate-800 text-xs hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-3 overflow-x-auto scrollbar-none gap-6">
            <div className="flex items-center gap-1 shrink-0 font-semibold text-slate-300">
              <Building2 className="w-4 h-4 text-blue-400 mr-1.5" />
              <span>ABOUT US</span>
            </div>
            <div className="flex items-center gap-5 text-slate-400 font-medium whitespace-nowrap">
              <a href="#overview" className="hover:text-blue-400 transition-colors">Overview</a>
              <a href="#mission-vision" className="hover:text-blue-400 transition-colors">Mission & Vision</a>
              <a href="#roadmap" className="hover:text-blue-400 text-blue-400 font-bold transition-colors">Value Roadmap</a>
              <a href="#pillars" className="hover:text-blue-400 transition-colors">Engineering Pillars</a>
              <a href="#value-addition" className="hover:text-blue-400 transition-colors">Value Addition</a>
              <a href="#principles" className="hover:text-blue-400 transition-colors">Culture & DNA</a>
              <a href="#team" className="hover:text-blue-400 transition-colors">Architects & Team</a>
              <a href="#outcomes" className="hover:text-blue-400 transition-colors">Proven Outcomes</a>
              <a href="#global-presence" className="hover:text-blue-400 transition-colors">Global Hubs</a>
              <a href="#consultation" className="text-white bg-blue-600 hover:bg-blue-500 px-3 py-1 rounded-md transition-colors font-semibold">
                Briefing
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* ── SECTION 01: HERO ── */}
      <section id="overview" className="relative pt-16 pb-20 sm:pt-24 sm:pb-28 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.12),transparent_45%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(99,102,241,0.08),transparent_40%)] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-mono font-semibold tracking-wide uppercase mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Full-Spectrum AI Engineering &amp; Revenue Architecture</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black font-heading tracking-tight text-white mb-6 leading-[1.1]">
              Engineering the resilient, hyper-optimized backbone of the AI economy.
            </h1>

            <p className="text-xl sm:text-2xl font-light text-slate-300 mb-6 leading-relaxed">
              From Infrastructure to Compounding Intelligence.
            </p>

            <p className="text-base sm:text-lg text-slate-400 max-w-3xl mb-10 leading-relaxed">
              ProfitMachines, in strategic partnership with TRUSTGRID.AI, bridges the gap between frontier AI research and deterministic enterprise scale. We do not build speculative models; we engineer the autonomous systems, low-latency telemetry fabrics, and revenue acceleration engines that make modern organizations predictably compound.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#roadmap"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm tracking-wide shadow-lg shadow-blue-500/25 transition-all"
              >
                <span>Explore Value Engineering Roadmap</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#team"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-semibold text-sm transition-all"
              >
                <Users className="w-4 h-4 text-blue-400" />
                <span>Meet the Architects</span>
              </a>
              <Link
                to="/book-consultation"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-transparent hover:bg-white/5 text-slate-300 border border-slate-700/60 font-semibold text-sm transition-all"
              >
                <span>Schedule Executive Briefing</span>
                <ArrowUpRight className="w-4 h-4 text-slate-400" />
              </Link>
            </div>
          </div>

          {/* KPI Summary Bar */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 pt-10 border-t border-slate-800/80">
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
              <div className="text-2xl sm:text-3xl font-black text-blue-400 font-heading">$420M+</div>
              <div className="text-xs text-slate-400 mt-1 font-medium">Enterprise Pipeline Generated</div>
            </div>
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
              <div className="text-2xl sm:text-3xl font-black text-indigo-400 font-heading">3.4×</div>
              <div className="text-xs text-slate-400 mt-1 font-medium">Faster Sales Cycle Compression</div>
            </div>
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
              <div className="text-2xl sm:text-3xl font-black text-emerald-400 font-heading">98.4%</div>
              <div className="text-xs text-slate-400 mt-1 font-medium">Forecasting Telemetry Precision</div>
            </div>
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
              <div className="text-2xl sm:text-3xl font-black text-purple-400 font-heading">100%</div>
              <div className="text-xs text-slate-400 mt-1 font-medium">Zero Data Leakage Sovereignty</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 02: MISSION & VISION ── */}
      <section id="mission-vision" className="py-20 sm:py-24 bg-slate-950 text-white relative overflow-hidden border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 sm:p-10 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-900/60 border border-slate-800 shadow-xl relative overflow-hidden group hover:border-blue-500/50 transition-all">
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center font-bold mb-6 border border-blue-500/20">
                <Target className="w-6 h-6" />
              </div>
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-400 mb-2 block">Core Purpose</span>
              <h2 className="text-3xl sm:text-4xl font-black text-white font-heading tracking-tight mb-4">
                Our Mission
              </h2>
              <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
                To democratize frontier-grade revenue intelligence and autonomous operational infrastructure for modern enterprises. We eliminate commercial latency, unblock stalled pipelines, and empower organizations to grow predictably through empirical mathematics rather than speculative intuition.
              </p>
            </div>

            <div className="p-8 sm:p-10 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-900/60 border border-slate-800 shadow-xl relative overflow-hidden group hover:border-indigo-500/50 transition-all">
              <div className="w-12 h-12 rounded-xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center font-bold mb-6 border border-indigo-500/20">
                <Compass className="w-6 h-6" />
              </div>
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-indigo-400 mb-2 block">Long-Term Horizon</span>
              <h2 className="text-3xl sm:text-4xl font-black text-white font-heading tracking-tight mb-4">
                Our Vision
              </h2>
              <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
                A world where enterprise commercial decisions are deterministic, capital-efficient, and mathematically auditable. We envision a future where commercial teams operate with zero operational drag, instant context dossiers, and continuous compound growth anchored in privacy-preserving AI.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 03: VALUE ENGINEERING ROADMAP (OPERATING AT FRONTIER SCALE) ── */}
      <section id="roadmap" className="py-20 sm:py-28 bg-slate-900 text-white relative overflow-hidden border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-14">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-blue-400">
                VALUE ENGINEERING ROADMAP
              </span>
              <span className="text-[11px] font-mono font-semibold uppercase px-3 py-1 rounded-full bg-blue-500/10 text-blue-300 border border-blue-500/30">
                MILESTONE-BASED VALUE REALIZATION
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-heading tracking-tight mb-4">
              Operating at Frontier Scale
            </h2>
            <p className="text-slate-400 text-base sm:text-lg max-w-3xl">
              Designed and engineered to sustainably impact global AI infrastructure and enterprise revenue velocity.
            </p>
          </div>

          {/* 5 Milestone Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {roadmapStages.map((stage, idx) => (
              <div
                key={idx}
                onClick={() => setActiveRoadmapStage(idx)}
                className={`p-6 rounded-2xl transition-all duration-300 flex flex-col justify-between cursor-pointer border ${
                  activeRoadmapStage === idx
                    ? 'bg-slate-800/90 border-blue-500 shadow-xl shadow-blue-500/10 ring-1 ring-blue-500/50'
                    : 'bg-slate-950/60 border-slate-800/90 hover:bg-slate-800/50 hover:border-slate-700'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-400">
                      {stage.stage}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-bold bg-blue-500/10 text-blue-400 border border-blue-500/20">
                      {stage.timeframe}
                    </span>
                  </div>

                  <h3 className="text-lg font-black text-white font-heading mb-1.5 leading-snug">
                    {stage.title}
                  </h3>

                  <div className="text-xs italic font-semibold text-blue-400 mb-3">
                    {stage.question}
                  </div>

                  <p className="text-xs text-slate-400 leading-relaxed mb-6">
                    {stage.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <div className="flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full ${activeRoadmapStage === idx ? 'bg-blue-400 animate-pulse' : 'bg-blue-600'}`} />
                    <span className="font-bold uppercase tracking-wider">{stage.milestone}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 p-4 rounded-xl bg-slate-950/50 border border-slate-800 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-slate-400">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block" />
              <span>DETERMINISTIC VERIFICATION: Each stage requires CFO-auditable KPI sign-off prior to advancing.</span>
            </div>
            <Link to="/growth-science" className="text-blue-400 hover:text-blue-300 font-semibold inline-flex items-center gap-1">
              <span>View Acceleration Science Blueprint</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── SECTION 04: CORE ARCHITECTURAL PILLARS ── */}
      <section id="pillars" className="py-20 sm:py-28 bg-slate-950 text-white relative border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-400 bg-blue-500/10 border border-blue-500/20 px-3 py-1 rounded-full">
              Full-Spectrum Engineering
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-heading tracking-tight mt-4 mb-4">
              We do not build speculative AI models; we build the engines that make revenue work at scale.
            </h2>
            <p className="text-slate-400 text-base sm:text-lg">
              Six synchronized operational disciplines engineered to transform commercial unpredictability into scalable compound growth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {corePillars.map((pillar) => {
              const IconComponent = pillar.icon;
              return (
                <div
                  key={pillar.id}
                  className="p-7 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-blue-500/50 transition-all hover:bg-slate-900 group shadow-lg flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center font-bold mb-6 border border-blue-500/20 group-hover:scale-105 transition-transform">
                      <IconComponent className="w-6 h-6" />
                    </div>

                    <h3 className="text-xl font-bold text-white font-heading mb-2">
                      {pillar.title}
                    </h3>
                    <div className="text-xs font-semibold text-blue-400 mb-3 font-mono">
                      {pillar.tagline}
                    </div>
                    <p className="text-sm text-slate-400 leading-relaxed mb-6">
                      {pillar.desc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-slate-300">
                      {pillar.stats}
                    </span>
                    <span className="text-xs text-blue-400 font-semibold group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                      <span>Explore</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── SECTION 05: THE VALUE ADDITION ── */}
      <section id="value-addition" className="py-20 sm:py-24 bg-slate-900 text-white relative border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-400 bg-blue-500/10 border border-blue-500/20 px-3 py-1 rounded-full">
              Enterprise Value Addition
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-heading tracking-tight mt-3 mb-4">
              The TRUSTGRID.AI &amp; ProfitMachines Value Addition
            </h2>
            <p className="text-slate-400 text-base sm:text-lg">
              The bottleneck to humanity's next great leap forward is operational and physical, not algorithmic. We serve as the critical catalyst between theoretical breakthroughs and real-world economic impact.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {valueAddition.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div key={idx} className="p-7 rounded-2xl bg-slate-950/80 border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between">
                  <div>
                    <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-blue-400 mb-4">
                      {item.category}
                    </div>
                    <div className="w-10 h-10 rounded-xl bg-slate-900 text-blue-400 flex items-center justify-center font-bold mb-4 border border-slate-800">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-bold text-white font-heading mb-2">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── SECTION 06: RADICAL ENGINEERING PRECISION (CULTURE) ── */}
      <section id="principles" className="py-20 sm:py-24 bg-slate-950 text-white relative border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-400 bg-blue-500/10 border border-blue-500/20 px-3 py-1 rounded-full">
              Core DNA &amp; Culture
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-heading tracking-tight mt-3 mb-4">
              Radical Engineering Precision
            </h2>
            <p className="text-slate-400 text-base sm:text-lg">
              We are a collective of systems architects, hardware hackers, and AI strategists who thrive in the technical trenches of the world's most complex commercial and computing infrastructure.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {principles.map((pr, idx) => (
              <div key={idx} className="p-7 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-blue-500/40 transition-all">
                <span className="text-xs font-mono font-bold text-blue-400 block mb-3">
                  {pr.num}
                </span>
                <h3 className="text-lg font-bold text-white font-heading mb-2">
                  {pr.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {pr.desc}
                </p>
              </div>
            ))}

            <div className="p-7 rounded-2xl bg-gradient-to-br from-blue-900/20 to-indigo-900/20 border border-blue-500/30 flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono font-bold text-blue-400 block mb-3">
                  ETHICAL COGNITION
                </span>
                <h3 className="text-lg font-bold text-white font-heading mb-2">
                  Deterministic Governance
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  We guarantee full client data isolation, strict mutual NDAs, and auditable cryptographic validation across all client deployments.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-blue-500/20">
                <Link to="/security" className="text-xs font-semibold text-blue-400 hover:text-blue-300 inline-flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Review Security Posture</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 07: LEADERSHIP & ARCHITECTURAL ROSTER ── */}
      <section id="team" className="py-20 sm:py-28 bg-slate-900 text-white relative border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-400 bg-blue-500/10 border border-blue-500/20 px-3 py-1 rounded-full">
                World-Class Talent
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-heading tracking-tight mt-3 mb-4">
                The Architects &amp; Engineers Behind the Platform
              </h2>
              <p className="text-slate-400 text-base max-w-2xl">
                A globally distributed collective of systems architects, AI engineering fellows, and revenue operations leaders.
              </p>
            </div>

            {/* Filter Pills */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
              {[
                { id: 'all', label: 'All Members' },
                { id: 'leadership', label: 'Leadership' },
                { id: 'architecture', label: 'Architecture' },
                { id: 'engineering', label: 'Engineering' },
                { id: 'governance', label: 'Governance & Legal' }
              ].map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedTeamCategory(cat.id)}
                  className={`px-3 py-1.5 rounded-lg border transition-all ${
                    selectedTeamCategory === cat.id
                      ? 'bg-blue-600 border-blue-500 text-white font-bold'
                      : 'bg-slate-950/60 border-slate-800 text-slate-400 hover:text-white'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Team Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredTeam.map((member, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl bg-slate-950/70 border border-slate-800/90 hover:border-blue-500/40 hover:bg-slate-900/90 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20">
                      {member.badge}
                    </span>
                    <span className="text-[10px] text-slate-500 font-mono">
                      {member.location}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-white font-heading group-hover:text-blue-400 transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                    {member.role}
                  </p>
                </div>
              </div>
            ))}

            {/* Global Team Members Tile */}
            <div className="p-5 rounded-xl bg-gradient-to-br from-blue-950/40 via-slate-900 to-indigo-950/40 border border-blue-500/40 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-blue-500/20 text-blue-300 border border-blue-500/30">
                  Global Network
                </span>
                <h3 className="text-base font-black text-white font-heading mt-3">
                  +30 Global Team Members
                </h3>
                <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                  Distributed Systems, R&amp;D Fellows, and Field Deployment Network across Americas, Asia-Pacific &amp; India.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-blue-500/20 text-[11px] font-mono text-blue-400 font-bold">
                COMMUNITY &amp; FELLOWSHIPS
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 08: CASE STUDIES & OUTCOMES ── */}
      <section id="outcomes" className="py-20 sm:py-28 bg-slate-950 text-white relative border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-400 bg-blue-500/10 border border-blue-500/20 px-3 py-1 rounded-full">
              Enterprise Case Studies
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-heading tracking-tight mt-3 mb-4">
              Production AI, Measured in Outcomes
            </h2>
            <p className="text-slate-400 text-base sm:text-lg">
              A selection of recent enterprise engagements. Client identities protected under mutual non-disclosure agreements.
            </p>
          </div>

          <div className="space-y-8">
            {caseStudies.map((cs, idx) => (
              <div key={idx} className="p-8 sm:p-10 rounded-2xl bg-slate-900/60 border border-slate-800 shadow-xl">
                <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-400 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20">
                    {cs.sector}
                  </span>
                  <span className="text-xs font-mono text-slate-500">
                    CONFIDENTIAL ENTERPRISE ENGAGEMENT
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white font-heading mb-4">
                  {cs.client}
                </h3>

                <div className="mb-6 p-4 rounded-xl bg-slate-950/70 border border-slate-800 text-sm text-slate-300">
                  <span className="font-bold text-slate-200">Situation &amp; Challenge: </span>
                  {cs.challenge}
                </div>

                <div className="mb-6">
                  <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 mb-3">
                    Engineering Interventions Deployed:
                  </h4>
                  <div className="grid md:grid-cols-2 gap-3">
                    {cs.interventions.map((inv, iIdx) => (
                      <div key={iIdx} className="p-3.5 rounded-lg bg-slate-950/40 border border-slate-800/80 text-xs text-slate-300">
                        <span className="font-bold text-blue-400">{inv.label}: </span>
                        <span>{inv.detail}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-emerald-950/20 border border-emerald-500/30 text-emerald-300 text-sm flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold font-mono uppercase tracking-wider block text-xs mb-1">
                      Verified Business Outcome:
                    </span>
                    <span>{cs.outcome}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 09: GLOBAL TECH HUBS ── */}
      <section id="global-presence" className="py-20 sm:py-28 bg-slate-900 text-white relative border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-400 bg-blue-500/10 border border-blue-500/20 px-3 py-1 rounded-full">
              Global Presence
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-heading tracking-tight mt-3 mb-4">
              Operating in Key Global Tech Hubs
            </h2>
            <p className="text-slate-400 text-base sm:text-lg">
              Our engineering clusters, systems labs, and executive offices operate across 10 international hubs to serve global enterprises.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {globalHubs.map((hub, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-slate-950/80 border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-blue-400 px-2 py-0.5 rounded bg-blue-500/10 border border-blue-500/20">
                      {hub.label}
                    </span>
                    <MapPin className="w-4 h-4 text-slate-500" />
                  </div>

                  <h3 className="text-lg font-bold text-white font-heading mb-1">
                    {hub.city}
                  </h3>
                  <div className="text-xs text-slate-400 font-mono mb-4">
                    {hub.region}
                  </div>

                  <p className="text-xs text-slate-400 leading-relaxed mb-6">
                    {hub.address}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-800/80 space-y-2 text-xs font-mono text-slate-400">
                  <div className="flex items-center gap-2">
                    <Phone className="w-3.5 h-3.5 text-blue-400" />
                    <span>{hub.phone}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-3.5 h-3.5 text-blue-400" />
                    <a href={`mailto:${hub.email}`} className="text-slate-300 hover:text-white transition-colors">
                      {hub.email}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 10: EXECUTIVE CONSULTATION & INTAKE ── */}
      <section id="consultation" className="scroll-mt-20">
        <LeadCaptureSection />
      </section>
    </div>
  );
}
