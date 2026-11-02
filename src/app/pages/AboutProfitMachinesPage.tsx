import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Building2, ArrowRight, ArrowUpRight, CheckCircle2, ShieldCheck,
  TrendingUp, BarChart3, Layers, Cpu, Compass, Activity, Target,
  Zap, Globe, Sparkles, ChevronRight, Lock, Users, Network,
  AlertCircle, Scale, Database, Clock, RefreshCw, Check, MapPin,
  Mail, Phone, ExternalLink, Award, FileText, Binary, Server, Code,
  Flame, Leaf, HeartHandshake, Eye, Briefcase, Filter, Search,
  DollarSign, Sliders, CheckSquare, ShieldAlert
} from 'lucide-react';
import { Reveal } from '../components/ui/Reveal';
import LeadCaptureSection from '../components/LeadCaptureSection';

export default function AboutProfitMachinesPage() {
  const location = useLocation();
  const [activeRoadmapStage, setActiveRoadmapStage] = useState<number>(0);
  const [selectedTeamCategory, setSelectedTeamCategory] = useState<string>('all');
  const [activeTab, setActiveTab] = useState<'mission' | 'approach' | 'governance'>('mission');

  useEffect(() => {
    document.title = "About ProfitMachines | AI-Native Revenue Transformation Platform";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        'content',
        'ProfitMachines is an enterprise AI-native revenue transformation platform helping global organizations engineer predictable pipeline, accelerate sales execution, and achieve mathematical growth.'
      );
    }

    if (location.hash) {
      const elementId = location.hash.replace('#', '');
      const el = document.getElementById(elementId);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth' });
        }, 150);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location.hash]);

  // ── VALUE ENGINEERING ROADMAP (OPERATING AT FRONTIER SCALE) ──
  const roadmapStages = [
    {
      stage: 'STAGE 01',
      timeframe: 'T + 2 Weeks',
      title: 'Proof of Feasibility',
      question: '“Can it be built?”',
      desc: 'Validate technical data connectors, CRM telemetry sync, pipeline intake pipelines, and commercial architecture readiness.',
      milestone: 'MILESTONE 01',
      kpi: 'Telemetry Pipeline Validation',
      deliverable: 'Data ingestion audit & telemetry connector verification.'
    },
    {
      stage: 'STAGE 02',
      timeframe: 'T + 4 Weeks',
      title: 'Proof of Value',
      question: '“Does it deliver benefit?”',
      desc: 'Demonstrate measurable pipeline conversion uplift, autonomous account qualification signals, and initial ROI validation.',
      milestone: 'MILESTONE 02',
      kpi: 'Measurable Conversion Lift',
      deliverable: 'Live pilot pipeline generation & early win-rate uplift.'
    },
    {
      stage: 'STAGE 03',
      timeframe: 'T + 6 Weeks',
      title: 'Proof of Performance',
      question: '“Does it scale?”',
      desc: 'Validate enterprise scalability, high-throughput deal triage, low-latency rep brief generation, and reliability benchmarks.',
      milestone: 'MILESTONE 03',
      kpi: 'Sub-60s Inbound Briefing SLA',
      deliverable: 'Full sales team adoption & automated deal hygiene.'
    },
    {
      stage: 'STAGE 04',
      timeframe: 'T + 8 Weeks',
      title: 'Proof of Recurring Value',
      question: '“Is it sustainable?”',
      desc: 'Demonstrate repeatable rep productivity gains, continuous forecast precision, and ongoing commercial friction elimination.',
      milestone: 'MILESTONE 04',
      kpi: '14 hrs/wk Rep Drag Reduction',
      deliverable: 'Deterministic stage gating & closed-loop CRM hygiene.'
    },
    {
      stage: 'STAGE 05',
      timeframe: 'T + 12 Weeks',
      title: 'Proof of Compounding',
      question: '“Does value multiply?”',
      desc: 'Realize compounded enterprise valuation impact, Net Revenue Retention (NRR) expansion, and dual-track revenue acceleration.',
      milestone: 'MILESTONE 05',
      kpi: '124% Average Enterprise NRR',
      deliverable: 'CFO-auditable board forecasts & compounding ARR growth.'
    }
  ];

  // ── 6 CORE TECHNICAL PILLARS (PROFITMACHINES REVENUE ENGINE) ──
  const technicalPillars = [
    {
      id: 'signal-inference',
      title: 'Signal Sensing & Dark-Funnel Inference Engine',
      tagline: 'High-Throughput Demand Capture & Buyer Intent',
      desc: 'Replaces generic outbound outreach with real-time demand telemetry. Continuously analyzes executive leadership reshuffles, category evaluations, and tech stack transitions to isolate underserved commercial headroom.',
      metrics: '3.8× Increase in Sales-Accepted Pipeline',
      icon: Cpu,
      deliverables: ['Dark-funnel intent surge monitoring', 'Parent-subsidiary expansion mapping', 'Micro-niche commercial sizing', 'Dynamic buyer willingness-to-pay indexing']
    },
    {
      id: 'agentic-sales',
      title: 'Autonomous Revenue Agent Architecture',
      tagline: 'Instant Rep Briefs & Dynamic Deal Execution',
      desc: 'Autonomous multi-agent orchestration frameworks generating zero-touch account briefings, stakeholder power maps, real-time objection battlecards, and sub-60-second inbound lead qualification dossiers.',
      metrics: '52% Compression in Sales Cycle Latency',
      icon: Network,
      deliverables: ['Sub-60s autonomous intake dossiers', 'Executive objection counter-battlecards', 'Buying committee persona orchestration', 'Dynamic deal desk calculation engines']
    },
    {
      id: 'data-fabric',
      title: 'Unified Revenue Data Fabric & Bidirectional Sync',
      tagline: 'Single-Source Commercial Truth & Data Hygiene',
      desc: 'Unifies fragmented CRM pipelines, ERP records, billing systems, and customer engagement telemetry into an automated, zero-touch operational data backbone with bidirectional synchronization.',
      metrics: '14 hrs/week Saved per Sales Representative',
      icon: Server,
      deliverables: ['Zero-touch CRM data enrichment', 'Stage progression gate validation', 'Automated cross-functional handoffs', 'Multi-source attribution reconciliation']
    },
    {
      id: 'sovereign-ai',
      title: 'Enterprise Sovereign AI & Zero-Data-Retention',
      tagline: 'Strict Mutual NDA & Client IP Isolation',
      desc: 'Enterprise-grade cognitive security, SOC-2 Type II readiness, and deterministic verification protocols ensuring proprietary commercial data, deal pipelines, and client transcripts remain strictly isolated.',
      metrics: '100% Client Data Isolation Guaranteed',
      icon: ShieldCheck,
      deliverables: ['Zero-data-retention AI inference', 'Strict mutual NDA protocols', 'Audit-ready compliance reporting', 'Enterprise role-based permissions']
    },
    {
      id: 'algorithmic-forecasting',
      title: 'Algorithmic Deal Health & CFO-Auditable Telemetry',
      tagline: 'Mathematical Pipeline Forecasting & Risk Modeling',
      desc: 'Replaces subjective sales rep confidence with empirical win-probability indices computed from authentic stage progression velocity, stakeholder engagement cadence, and historical deal behavior.',
      metrics: '98.4% Board Forecast Accuracy Rate',
      icon: Activity,
      deliverables: ['Leading vs. lagging telemetry modeling', 'Pipeline risk heatmaps', 'Deal slip early warning systems', 'Continuous scenario simulations']
    },
    {
      id: 'gtm-transformation',
      title: 'Commercial Modernization & GTM Operating Model',
      tagline: 'Transforming Legacy Teams into Capital-Efficient Engines',
      desc: 'Restructures enterprise go-to-market motions from ad-hoc rep intuition into mathematically validated sales engineering frameworks aligned with CFO business cases and capital efficiency.',
      metrics: '40% Lower Customer Acquisition Cost (CAC)',
      icon: Layers,
      deliverables: ['Territory capacity modeling', 'Outcome-based pricing architectures', 'Compensation & incentive alignment', 'Board-level commercial predictability']
    }
  ];

  // ── THE VALUE ADDITION QUADRANTS (PROFITMACHINES VALUE MULTIPLIERS) ──
  const valueAdditionQuadrants = [
    {
      category: 'Value to Sales Velocity',
      title: 'The Acceleration Multiplier',
      tag: 'Velocity & Capacity',
      desc: 'The greatest bottleneck to enterprise revenue growth is operational friction, rep administrative drag, and stalled pipeline latency. We eliminate manual overhead, empowering commercial teams to close deals 52% faster with existing headcount.',
      icon: Zap,
      kpi: '52% Cycle Compression'
    },
    {
      category: 'Value to Margin & Capital',
      title: 'The Capital Efficiency Shield',
      tag: 'CAC & Free Cash Flow',
      desc: 'Brute-force sales expansion with point-tool bloat, seat sprawl, and vanity MQLs destroys EBITDA margin. We engineer lean, automated revenue systems that reduce customer acquisition costs by 40% and compound free cash flow.',
      icon: Leaf,
      kpi: '40% Lower CAC Drag'
    },
    {
      category: 'Value to Executive Governance',
      title: 'The Commercial Trust Anchor',
      tag: 'Empirical Forecast Truth',
      desc: 'Subjective rep optimism and end-of-quarter pipeline surprises jeopardize executive credibility. We provide deterministic, mathematically auditable forecasting telemetry anchored in verified deal velocity and buyer engagement.',
      icon: Lock,
      kpi: '98.4% Forecast Precision'
    },
    {
      category: 'Real-World Economic Return',
      title: 'The Net Compounding Outcome',
      tag: 'NRR & Valuation Lift',
      desc: 'We connect top-of-funnel demand generation directly to customer expansion and retention. By continuously sensing consumption ceilings and churn risks, our clients achieve sustained Net Revenue Retention above 124%.',
      icon: HeartHandshake,
      kpi: '124%+ Net Retention'
    }
  ];

  // ── RADICAL ENGINEERING PRECISION (5 OPERATING PRINCIPLES) ──
  const operatingPrinciples = [
    {
      num: 'PRIN 01',
      title: 'Systems-Level Thinking',
      subtitle: 'Eliminating Fragmented Point Tools',
      desc: 'We do not patch commercial symptoms with disconnected point solutions. Our revenue engineers look at the entire commercial architecture—from dark-funnel intent signals through CRM workflows to billing and retention telemetry.'
    },
    {
      num: 'PRIN 02',
      title: 'Relentless Optimization',
      subtitle: 'Halting Pipeline Latency Drag',
      desc: 'Every minute of sales rep latency, every day of procurement stalling, and every basis point of customer churn represents quantifiable financial destruction. We engineer commercial workflows to the mathematical limit of efficiency.'
    },
    {
      num: 'PRIN 03',
      title: 'Truth Over Trend',
      subtitle: 'Deterministic Mathematics vs. AI Hype',
      desc: 'While the industry chases flashy generic chatbots and ungrounded demos, we are anchored in empirical revenue mathematics, stage-progression probability, and auditable telemetry that CFOs can sign off on.'
    },
    {
      num: 'PRIN 04',
      title: 'High-Trust, High-Ownership',
      subtitle: 'Radical Sovereignty & Client IP Isolation',
      desc: 'We operate with complete transparency, rigorous peer review, and deep responsibility for the mission-critical revenue architectures and proprietary customer datasets entrusted to us under strict mutual NDA.'
    },
    {
      num: 'PRIN 05',
      title: 'Economic Alignment',
      subtitle: 'Outcomes-Driven Value Realization',
      desc: 'We measure success exclusively in verified economic outcomes: contribution margin expansion, CAC payback compression, win-rate lift, and sustained ARR compounding rather than vanity software licenses.'
    }
  ];

  // ── CASE STUDIES & PROVEN OUTCOMES (PROFITMACHINES ENTERPRISE EVIDENCE) ──
  const caseStudies = [
    {
      sector: 'Enterprise B2B SaaS & Cloud Platforms',
      client: 'Global Enterprise B2B SaaS & Cloud Platform',
      tag: 'Pipeline & Sales Velocity Acceleration',
      challenge: 'A $140M ARR enterprise software firm suffered from elongated 78-day sales cycles, 38% pipeline leakage across mid-funnel stages, and sales reps spending 14 hours per week on manual CRM data entry and meeting preparation.',
      interventions: [
        { label: 'Signal Intent Interception', detail: 'Deployed dark-funnel buying intent telemetry capturing executive hiring surges and technology transition signals in real time.' },
        { label: 'Autonomous Context Dossiers', detail: 'Zero-touch synthesis generating CFO-ready business cases, buying committee maps, and objection counter-battlecards before calls.' },
        { label: 'Stage-Gate Velocity Enforcement', detail: 'Algorithmic progression gates validating verified MEDDPICC criteria before advancing pipeline stages.' },
        { label: 'Automated CRM Synchronization', detail: 'Zero-touch bidirectional synchronization between call transcripts, email exchanges, and Salesforce opportunities.' }
      ],
      outcome: 'Sales cycle compressed from 78 to 36 days (53% compression), $48M in incremental sales-accepted pipeline within 180 days, and win-rates lifted by 28.4%.'
    },
    {
      sector: 'Medical Technology & Healthcare Systems',
      client: 'Global Medical Technology & Healthcare Enterprise',
      tag: 'Commercial Scaling & Regulatory Intelligence',
      challenge: 'Distributing specialized medical devices across 40+ international regional healthcare systems required navigating complex hospital buying committees, delayed procurement approvals, and strict clinical data privacy mandates.',
      interventions: [
        { label: 'Buying Committee Graph Mapping', detail: 'Automated stakeholder mapping connecting clinical directors, procurement officers, and hospital CFO requirements.' },
        { label: 'Regulatory-Compliant Dossiers', detail: 'Instant synthesis of localized clinical evidence and reimbursement calculators tailored to regional health authorities.' },
        { label: 'Air-Gapped Telemetry Architecture', detail: 'Zero-client-data-retention security controls ensuring zero leakage of protected clinical or provider telemetry.' }
      ],
      outcome: '300% increase in qualified hospital network opportunities, 62% faster RFP turnaround, and zero compliance breaches across international jurisdictions.'
    },
    {
      sector: 'Financial Technology & Institutional Infrastructure',
      client: 'Tier-1 FinTech & Commercial Lending Infrastructure',
      tag: 'Algorithmic Deal Health & Underwriting Velocity',
      challenge: 'An institutional financial platform experienced severe deal slippage at quarter-end, manual deal underwriting taking 18 business days, and erratic forecast accuracy leading to board-level friction.',
      interventions: [
        { label: 'Autonomous Financial Intake Dossiers', detail: 'Instant synthesis of audited corporate financials, debt schedules, and covenant buffers into CFO-ready packages.' },
        { label: 'Algorithmic Deal Health Scoring', detail: 'Continuous mathematical win-probability calculation based on authentic stage velocity and executive engagement.' },
        { label: 'CFO-Auditable Forecast Engine', detail: 'Empirical telemetry model replacing rep intuition with statistically validated quarterly revenue predictions.' }
      ],
      outcome: 'Commercial underwriting cycle compressed from 18 days to 48 hours, 98.4% board forecast accuracy across four consecutive quarters, and Net Revenue Retention lifted to 124%.'
    }
  ];

  // ── THE ARCHITECTS & ENGINEERS ROSTER ──
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

  // ── GLOBAL TECH HUBS ──
  const globalHubs = [
    {
      region: 'India Headquarters',
      city: 'Bengaluru (Indiranagar HQ)',
      label: 'Global R&D Center',
      address: 'Suite 32, 235, Binnamangala, 2nd Floor, 13th Cross Road, Indira Nagar 2nd Stage, Hoysala Nagar, Bengaluru – 560038, India',
      phone: '+91 9513288612',
      email: 'connect@profitmachines.com'
    },
    {
      region: 'AI Systems Engineering Lab',
      city: 'Bengaluru (Tin Factory)',
      label: 'Hardware & Systems Lab',
      address: 'WeWork, 13th Floor, Tin Factory, Salarpuria Magnificia, 78, Old Madras Rd, next to KR Puram, Bengaluru, Karnataka 560016',
      phone: '+91 9513288612',
      email: 'connect@profitmachines.com'
    },
    {
      region: 'Western India Operations',
      city: 'Mumbai',
      label: 'Western Operations',
      address: 'WeWork, Raheja Platinum, Road off Andheri - Kurla Road, Sag Baug, Marol, Andheri East, Mumbai, Maharashtra 400059',
      phone: '+91 9513288612',
      email: 'connect@profitmachines.com'
    },
    {
      region: 'Silicon Valley Office',
      city: 'San Mateo / Mountain View, CA',
      label: 'West Coast AI Center',
      address: 'Suite 21, 400 Concar Dr, San Mateo, CA 94402, United States',
      phone: '+1 650 772 4145',
      email: 'connect@profitmachines.com'
    },
    {
      region: 'New York Office',
      city: 'New York, New York',
      label: 'East Coast Center',
      address: '33 Irving Pl, New York, NY 10003, United States',
      phone: '+1 650 772 4145',
      email: 'connect@profitmachines.com'
    },
    {
      region: 'Americas Headquarters',
      city: 'Tampa, Florida',
      label: 'Americas HQ',
      address: '501 E Kennedy Blvd Suite 1400, Tampa, FL 33602, United States',
      phone: '+1 650 772 4145',
      email: 'connect@profitmachines.com'
    },
    {
      region: 'Southeast Asia Hub',
      city: 'Singapore',
      label: 'APAC Regional Center',
      address: '5 Temasek Boulevard, 17th Floor, Singapore 038985',
      phone: '+65 6050 5235',
      email: 'connect@profitmachines.com'
    },
    {
      region: 'Australia Operations',
      city: 'Melbourne, Victoria',
      label: 'ANZ Regional Office',
      address: '120 Spencer St, Melbourne VIC 3000, Australia',
      phone: '+65 6050 5235',
      email: 'connect@profitmachines.com'
    },
    {
      region: 'East Asia Center',
      city: 'Osaka, Japan',
      label: 'East Asia Hub',
      address: '〒530-0002 Osaka, Kita Ward, Sonezakishinchi, 1 Chome−13−22 WeWork 御堂筋フロンティア, Japan',
      phone: '+65 6050 5235',
      email: 'connect@profitmachines.com'
    },
    {
      region: 'Canada Center',
      city: 'Toronto, Ontario',
      label: 'North America Hub',
      address: '1050 King St W, Toronto, Ontario M6K 0A5, Canada',
      phone: '+1 650 772 4145',
      email: 'connect@profitmachines.com'
    }
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-100 selection:text-blue-900">

      

      {/* ── SECTION 01: EXECUTIVE HERO (MATCHING GLOBAL ACCELERATION HERO) ── */}
      <section id="overview" className="relative pt-16 pb-16 sm:pt-24 sm:pb-28 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute inset-0 opacity-[0.22]" style={{ backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.07) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.07) 1px, transparent 1px)', backgroundSize: '4rem 4rem' }} />
          <div className="absolute top-0 right-1/4 w-[700px] h-[700px] bg-blue-600/15 rounded-full blur-[150px]" />
          <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-indigo-600/12 rounded-full blur-[130px]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/15 border border-blue-400/30 text-blue-300 text-xs font-bold tracking-widest uppercase font-mono mb-4">
                <Sparkles className="w-3.5 h-3.5 text-blue-400" />
                <span>AI-NATIVE REVENUE TRANSFORMATION PLATFORM</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.12] mb-5 font-heading">
                Engineering the resilient, hyper-optimized backbone of{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-indigo-300">
                  Enterprise Revenue.
                </span>
              </h1>

              <p className="text-lg sm:text-xl font-light text-slate-200 mb-4 leading-relaxed">
                From Infrastructure to Compounding Intelligence.
              </p>

              

              {/* Crisp Core Focus Badge */}
              <div className="inline-flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-slate-900/90 border border-slate-800 text-xs text-slate-300 mb-6 shadow-sm">
                <Zap className="w-4 h-4 text-blue-400 shrink-0" />
                <span>
                  <strong className="text-blue-400 font-semibold font-mono">Core Focus:</strong> Deterministic Gates • Lossless RoCEv2 Delivery • Continuous FinOps Optimization
                </span>
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="#roadmap"
                  className="px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 active:bg-blue-700 text-white font-bold text-sm transition-all shadow-lg shadow-blue-600/30 inline-flex items-center gap-2 group cursor-pointer"
                >
                  <span>Explore Value Engineering Roadmap</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>

                <a
                  href="#capabilities"
                  className="px-6 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-200 font-bold text-sm transition-all inline-flex items-center gap-2 cursor-pointer"
                >
                  <span>View 6 Revenue Pillars</span>
                  <ArrowUpRight className="w-4 h-4 text-slate-400" />
                </a>

                <Link
                  to="/book-consultation"
                  className="px-6 py-3.5 rounded-xl bg-transparent hover:bg-white/5 border border-slate-700/60 text-slate-300 font-bold text-sm transition-all inline-flex items-center gap-2 cursor-pointer"
                >
                  <span>Schedule Scoping Call</span>
                  <ArrowRight className="w-4 h-4 text-slate-400" />
                </Link>
              </div>

              {/* Numbered Milestone Stage Pills */}
              <div className="flex flex-wrap items-center gap-2 pt-5 text-xs font-mono">
                {['1. Full-Spectrum', '2. Diagnostic', '3. Architecture', '4. Deployment', '5. Compounding'].map((step, idx) => (
                  <span key={idx} className="px-2.5 py-1 rounded-lg bg-slate-900/80 border border-slate-800/90 text-slate-400 text-[11px]">
                    {step}
                  </span>
                ))}
              </div>
            </div>

            {/* Right Hero Visual: Connected Enterprise Revenue Engine */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl border border-slate-800 bg-slate-900/90 p-6 shadow-2xl relative overflow-hidden">
                <div className="flex items-center justify-between pb-3.5 border-b border-slate-800 mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-blue-500 animate-pulse" />
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-300">
                      Autonomous Revenue Mesh
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-400/20 font-bold">
                    Single Source of Truth
                  </span>
                </div>

                <div className="space-y-3">
                  <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center font-bold">
                        <Target className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-white">Demand Sensing</div>
                        <div className="text-[11px] text-slate-400">Dark-funnel intent surge</div>
                      </div>
                    </div>
                    <span className="text-[11px] font-mono text-emerald-400 font-bold">+28.4% TAM Lift</span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-indigo-500/10 text-indigo-400 flex items-center justify-center font-bold">
                        <Zap className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-white">Sales Acceleration</div>
                        <div className="text-[11px] text-slate-400">Autonomous context dossiers</div>
                      </div>
                    </div>
                    <span className="text-[11px] font-mono text-blue-400 font-bold">52% Latency Drop</span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center font-bold">
                        <Activity className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-white">Forecasting Precision</div>
                        <div className="text-[11px] text-slate-400">Empirical deal slip telemetry</div>
                      </div>
                    </div>
                    <span className="text-[11px] font-mono text-purple-400 font-bold">98.4% Auditable</span>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span>CONFIDENTIAL &amp; NDA BOUND</span>
                  <span className="text-blue-400 font-bold">SOC-2 STANDARD CONTROLS</span>
                </div>
              </div>
            </div>
          </div>

          {/* Metric Bar (Matching Global Acceleration) */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 pt-8 border-t border-slate-800/80">
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
              <div className="text-xs text-slate-400 mt-1 font-medium">Zero Client Data Leakage</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 02: MISSION & VISION (LIGHT SLATE-50 SECTION) ── */}
      <section id="mission-vision" className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600 bg-blue-50 border border-blue-200/60 px-3 py-1 rounded-full">
              Firm Foundation &amp; Philosophy
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 font-heading tracking-tight mt-3 mb-4">
              Our Mission &amp; Strategic Vision
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              Democratizing frontier-grade revenue intelligence and autonomous operational infrastructure for modern organizations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 sm:p-10 rounded-2xl bg-white border border-slate-200 shadow-sm hover:border-blue-300 hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold mb-6 border border-blue-100">
                  <Target className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600 mb-2 block">Core Purpose</span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading tracking-tight mb-4">
                  Our Mission
                </h3>
                <p className="text-slate-600 text-base leading-relaxed">
                  To eliminate enterprise revenue friction by replacing disconnected point tools, subjective sales confidence, and lead decay with connected intelligence. We engineer deterministic pipeline flow, accelerate sales execution, and align commercial systems directly to CFO-auditable business outcomes.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-mono text-slate-500">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Empirical Velocity • Zero Subjective Guesswork</span>
              </div>
            </div>

            <div className="p-8 sm:p-10 rounded-2xl bg-white border border-slate-200 shadow-sm hover:border-blue-300 hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold mb-6 border border-indigo-100">
                  <Compass className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-indigo-600 mb-2 block">Long-Term Horizon</span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading tracking-tight mb-4">
                  Our Vision
                </h3>
                <p className="text-slate-600 text-base leading-relaxed">
                  A future where global commercial decisions are mathematically validated, capital-efficient, and continuously compounding. Modern sales organizations will operate with autonomous intake dossiers, instant buyer context, zero administrative drag, and complete privacy-preserving data sovereignty.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-mono text-slate-500">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Continuous Compounding • Capital-Efficient Scale</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 03: VALUE ENGINEERING ROADMAP (OPERATING AT FRONTIER SCALE - DARK ACCENT) ── */}
      <section id="roadmap" className="py-20 sm:py-28 bg-slate-950 text-white relative overflow-hidden border-b border-slate-800 scroll-mt-20">
        <div id="methodology" className="scroll-mt-20" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
              Designed and engineered to predictably accelerate enterprise revenue architectures and AI infrastructure.
            </p>
          </div>

          {/* 5 Milestone Cards (Direct Visual Match to User Screenshot) */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {roadmapStages.map((stage, idx) => (
              <div
                key={idx}
                onClick={() => setActiveRoadmapStage(idx)}
                className={`p-6 rounded-2xl transition-all duration-300 flex flex-col justify-between cursor-pointer border ${
                  activeRoadmapStage === idx
                    ? 'bg-slate-800/90 border-blue-500 shadow-xl shadow-blue-500/10 ring-1 ring-blue-500/50'
                    : 'bg-slate-900/60 border-slate-800 hover:bg-slate-800/50 hover:border-slate-700'
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

                  <div className="text-xs italic font-semibold text-blue-400 mb-3 font-sans">
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

          <div className="mt-8 p-4 rounded-xl bg-slate-900/70 border border-slate-800 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-slate-400">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block" />
              <span>DETERMINISTIC VALUE GATE: Every phase requires audited commercial KPI validation before progressing.</span>
            </div>
            <Link to="/growth-science" className="text-blue-400 hover:text-blue-300 font-semibold inline-flex items-center gap-1">
              <span>View Acceleration Science Blueprint</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── SECTION 04: CORE CAPABILITY ENGINE (6 TECHNICAL PILLARS) ── */}
      <section id="capabilities" className="py-16 sm:py-24 bg-white border-b border-slate-200 scroll-mt-20">
        <div id="pillars" className="scroll-mt-20" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600 bg-blue-50 border border-blue-200/60 px-3 py-1 rounded-full">
              Full-Spectrum Revenue Architecture
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 font-heading tracking-tight mt-3 mb-4">
              We do not build speculative AI models; we build the engines that make revenue work at scale.
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              Six synchronized operational disciplines engineered to transform commercial unpredictability into scalable, compounding ARR growth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technicalPillars.map((pillar) => {
              const IconComponent = pillar.icon || Cpu;
              return (
                <div
                  key={pillar.id}
                  className="p-7 rounded-2xl bg-white border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold mb-6 border border-blue-100 group-hover:scale-105 transition-transform">
                      <IconComponent className="w-6 h-6" />
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 font-heading mb-2">
                      {pillar.title}
                    </h3>
                    <div className="text-xs font-semibold text-blue-600 mb-3 font-mono">
                      {pillar.tagline}
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed mb-6">
                      {pillar.desc}
                    </p>

                    <div className="mb-6 space-y-1.5 pt-4 border-t border-slate-100">
                      <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 mb-2">
                        Core Capabilities
                      </div>
                      {pillar.deliverables.map((del, dIdx) => (
                        <div key={dIdx} className="text-xs text-slate-700 flex items-center gap-2">
                          <Check className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                          <span>{del}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-slate-900">
                      {pillar.metrics}
                    </span>
                    <Link
                      to="/offerings/profit-pool-discovery"
                      className="text-xs text-blue-600 font-semibold group-hover:translate-x-1 transition-transform inline-flex items-center gap-1"
                    >
                      <span>Explore</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── SECTION 05: THE VALUE ADDITION (LIGHT SLATE-50 SECTION) ── */}
      <section id="value-addition" className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600 bg-blue-50 border border-blue-200/60 px-3 py-1 rounded-full">
              Enterprise Value Addition
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 font-heading tracking-tight mt-3 mb-4">
              The ProfitMachines Value Addition
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              The bottleneck to modern enterprise revenue growth is operational latency, seat sprawl, and subjective guesswork. We serve as the critical catalyst between theoretical intelligence and real-world commercial compounding.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {valueAdditionQuadrants.map((item, idx) => {
              const IconComp = item.icon || Zap;
              return (
                <div key={idx} className="p-7 rounded-2xl bg-white border border-slate-200 shadow-sm hover:border-blue-300 hover:shadow-md transition-all flex flex-col justify-between">
                  <div>
                    <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-blue-600 mb-4">
                      {item.category}
                    </div>
                    <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold mb-4 border border-blue-100">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 font-heading mb-1">
                      {item.title}
                    </h3>
                    <div className="text-xs font-semibold text-slate-500 font-mono mb-3">
                      {item.tag}
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-mono">
                    <span className="text-slate-500 font-medium">Impact Index</span>
                    <span className="font-bold text-blue-600">{item.kpi}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── SECTION 06: RADICAL ENGINEERING PRECISION (CULTURE & PRINCIPLES) ── */}
      <section id="principles" className="py-16 sm:py-24 bg-white border-b border-slate-200 scroll-mt-20">
        <div id="values" className="scroll-mt-20" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600 bg-blue-50 border border-blue-200/60 px-3 py-1 rounded-full">
              Core DNA &amp; Principles
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 font-heading tracking-tight mt-3 mb-4">
              Radical Engineering Precision
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              We are a cadre of revenue architects, systems researchers, and growth strategists who thrive in the technical trenches of the world's most demanding commercial organizations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {operatingPrinciples.map((pr, idx) => (
              <div key={idx} className="p-7 rounded-2xl bg-slate-50 border border-slate-200 hover:border-blue-300 hover:bg-white transition-all shadow-2xs flex flex-col justify-between">
                <div>
                  <span className="text-xs font-mono font-bold text-blue-600 block mb-2">
                    {pr.num}
                  </span>
                  <h3 className="text-lg font-bold text-slate-900 font-heading mb-1">
                    {pr.title}
                  </h3>
                  <div className="text-xs font-semibold text-slate-500 font-mono mb-3">
                    {pr.subtitle}
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {pr.desc}
                  </p>
                </div>
              </div>
            ))}

            <div className="p-7 rounded-2xl bg-gradient-to-br from-blue-900 to-indigo-950 text-white border border-blue-500/30 flex flex-col justify-between shadow-md">
              <div>
                <span className="text-xs font-mono font-bold text-blue-300 block mb-2">
                  CLIENT DATA SOVEREIGNTY
                </span>
                <h3 className="text-lg font-bold text-white font-heading mb-1">
                  Deterministic Governance
                </h3>
                <div className="text-xs font-semibold text-blue-200 font-mono mb-3">
                  Zero Data Retention Architecture
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  We guarantee complete client data isolation, strict mutual NDAs, and auditable cryptographic validation across all enterprise deployments.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-white/10">
                <Link to="/security" className="text-xs font-bold text-blue-300 hover:text-white inline-flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Review Security &amp; Compliance Posture</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 07: CASE STUDIES & PROVEN OUTCOMES (LIGHT SLATE-50 SECTION) ── */}
      <section id="outcomes" className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600 bg-blue-50 border border-blue-200/60 px-3 py-1 rounded-full">
              Enterprise Case Studies
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 font-heading tracking-tight mt-3 mb-4">
              Production AI, Measured in Outcomes
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              A selection of recent enterprise revenue engagements. Client identities protected under mutual non-disclosure agreements.
            </p>
          </div>

          <div className="space-y-8">
            {caseStudies.map((cs, idx) => (
              <div key={idx} className="p-8 sm:p-10 rounded-2xl bg-white border border-slate-200 shadow-sm hover:border-blue-300 hover:shadow-md transition-all">
                <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-700 px-3 py-1 rounded-full bg-blue-50 border border-blue-200">
                    {cs.sector}
                  </span>
                  <span className="text-xs font-mono text-slate-400">
                    CONFIDENTIAL ENTERPRISE ENGAGEMENT
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-slate-900 font-heading mb-1">
                  {cs.client}
                </h3>
                <div className="text-xs font-semibold text-blue-600 font-mono mb-4">
                  {cs.tag}
                </div>

                <div className="mb-6 p-4 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-700">
                  <span className="font-bold text-slate-900">Situation &amp; Challenge: </span>
                  {cs.challenge}
                </div>

                <div className="mb-6">
                  <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 mb-3">
                    Engineering Interventions Deployed:
                  </h4>
                  <div className="grid md:grid-cols-2 gap-3">
                    {cs.interventions.map((inv, iIdx) => (
                      <div key={iIdx} className="p-3.5 rounded-lg bg-slate-50 border border-slate-200 text-xs text-slate-700">
                        <span className="font-bold text-blue-600">{inv.label}: </span>
                        <span>{inv.detail}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 text-sm flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold font-mono uppercase tracking-wider block text-xs mb-1 text-emerald-800">
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

      {/* ── SECTION 08: LEADERSHIP & ARCHITECTURAL ROSTER (WHITE SECTION) ── */}
      <section id="team" className="py-16 sm:py-24 bg-white border-b border-slate-200 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600 bg-blue-50 border border-blue-200/60 px-3 py-1 rounded-full">
                World-Class Talent
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 font-heading tracking-tight mt-3 mb-4">
                The Architects &amp; Engineers Behind the Platform
              </h2>
              <p className="text-slate-600 text-base max-w-2xl">
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
                      ? 'bg-blue-600 border-blue-600 text-white font-bold shadow-xs'
                      : 'bg-white border-slate-200 text-slate-600 hover:border-slate-300 hover:text-slate-900'
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
                className="p-5 rounded-xl bg-slate-50 border border-slate-200 hover:border-blue-300 hover:bg-white transition-all flex flex-col justify-between group shadow-2xs"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-blue-50 text-blue-700 border border-blue-200">
                      {member.badge}
                    </span>
                    <span className="text-[10px] text-slate-500 font-mono">
                      {member.location}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 font-heading group-hover:text-blue-600 transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    {member.role}
                  </p>
                </div>
              </div>
            ))}

            {/* Global Team Members Tile */}
            <div className="p-5 rounded-xl bg-gradient-to-br from-blue-900 via-slate-900 to-indigo-950 text-white border border-blue-500/30 flex flex-col justify-between shadow-sm">
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
              <div className="mt-4 pt-3 border-t border-blue-500/20 text-[11px] font-mono text-blue-300 font-bold">
                COMMUNITY &amp; RESEARCH FELLOWSHIPS
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 09: GLOBAL TECH HUBS (LIGHT SLATE-50 SECTION) ── */}
      <section id="global-presence" className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600 bg-blue-50 border border-blue-200/60 px-3 py-1 rounded-full">
              Global Presence
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 font-heading tracking-tight mt-3 mb-4">
              Operating in Key Global Tech Hubs
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              Our engineering clusters, systems labs, and executive offices operate across 10 international hubs to serve global enterprises.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {globalHubs.map((hub, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-blue-700 px-2 py-0.5 rounded bg-blue-50 border border-blue-200">
                      {hub.label}
                    </span>
                    <MapPin className="w-4 h-4 text-slate-400" />
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 font-heading mb-1">
                    {hub.city}
                  </h3>
                  <div className="text-xs text-slate-500 font-mono mb-4">
                    {hub.region}
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed mb-6">
                    {hub.address}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 space-y-2 text-xs font-mono text-slate-600">
                  <div className="flex items-center gap-2">
                    <Phone className="w-3.5 h-3.5 text-blue-600" />
                    <span>{hub.phone}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-3.5 h-3.5 text-blue-600" />
                    <a href={`mailto:${hub.email}`} className="text-slate-700 hover:text-blue-600 transition-colors">
                      {hub.email}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 10: EXECUTIVE CONSULTATION & INTAKE (MATCHING GLOBAL ACCELERATION) ── */}
      <section id="consultation" className="scroll-mt-20">
        <LeadCaptureSection />
      </section>
    </div>
  );
}
