import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Users, ArrowRight, ArrowUpRight, ShieldCheck, CheckCircle2,
  Sparkles, ChevronRight, Award, Compass, Network, BrainCircuit,
  Building2, BarChart3, Database, Lock, Scale, Mail, Briefcase, Zap
} from 'lucide-react';
import LeadCaptureSection from '../components/LeadCaptureSection';

interface TeamMember {
  name: string;
  role: string;
  category: 'strategy' | 'ai' | 'product' | 'infra' | 'governance';
  credentials?: string;
  bio: string;
  expertise: string[];
}

export default function LeadershipTeamsPage() {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  useEffect(() => {
    document.title = "Leadership & Teams | ProfitMachines AI Revenue Platform";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Meet the executive leadership, forward-deployed revenue architects, AI engineers, and industry advisors driving autonomous revenue transformation at ProfitMachines.');
    }
  }, []);

  const teamMembers: TeamMember[] = [
    {
      name: "Balaji Venkatraman",
      role: "Director of Growth",
      category: "strategy",
      credentials: "Commercial Strategy & Enterprise GTM",
      bio: "Leads commercial architecture, global revenue growth, and enterprise board advisory. Veteran revenue operator specializing in mathematical GTM systems and dark-funnel intent capture.",
      expertise: ["Enterprise GTM", "Pipeline Engineering", "Revenue Operations", "Board Advisory"]
    },
    {
      name: "Lavanya Seshadri",
      role: "Engineering Head",
      category: "product",
      credentials: "Core Architecture & Engineering Leadership",
      bio: "Directs end-to-end platform engineering, distributed system design, and AI orchestration pipelines powering the ProfitMachines autonomous commercial engine.",
      expertise: ["System Architecture", "Platform Engineering", "Cloud Infrastructure", "Engineering Leadership"]
    },
    {
      name: "Vignesh KS",
      role: "Product Lead",
      category: "product",
      credentials: "Revenue Product Strategy & UX",
      bio: "Heads product innovation, deal velocity workflow tooling, and revenue telemetry user experiences across enterprise commercial suites.",
      expertise: ["Product Strategy", "Deal Flow Engineering", "User Experience", "Enterprise Workflow"]
    },
    {
      name: "Dinesh Kumar",
      role: "Lead AI Engineer",
      category: "ai",
      credentials: "Cognitive AI & Neural Architectures",
      bio: "Specializes in multi-agent orchestration, proprietary commercial LLM inference pipelines, and autonomous account research synthesis engines.",
      expertise: ["Multi-Agent Systems", "Neural NLP", "Intent Sensing", "Cognitive Architecture"]
    },
    {
      name: "Hemalata",
      role: "AI Engineer & Tech Lead",
      category: "ai",
      credentials: "Agentic Systems & Machine Learning",
      bio: "Architects autonomous sales intelligence workflows, dynamic objection battlecard engines, and real-time CRM data enrichment pipelines.",
      expertise: ["Agentic Workflows", "Sales Intelligence", "RAG Pipelines", "Automated Enrichment"]
    },
    {
      name: "Shiva Kumar",
      role: "Senior Product Architect",
      category: "product",
      credentials: "Scalable Enterprise Systems",
      bio: "Focuses on high-throughput enterprise integrations, CRM synchronization APIs, and deterministic stage progression state machines.",
      expertise: ["Enterprise APIs", "State Machines", "Pipeline Governance", "System Integration"]
    },
    {
      name: "Ritin",
      role: "Senior AI Architect",
      category: "ai",
      credentials: "Deep Learning & Intent Modeling",
      bio: "Designs mathematical progression algorithms, empirical forecasting indices, and buyer propensity classification models.",
      expertise: ["Predictive Analytics", "Forecasting Models", "Propensity Scoring", "Mathematical Modeling"]
    },
    {
      name: "Viswanath",
      role: "Senior DevOps Engineer",
      category: "infra",
      credentials: "High-Availability Cloud Infrastructure",
      bio: "Ensures zero-downtime scalability, low-latency telemetry ingestion, and enterprise SOC-2 Type II data residency and governance.",
      expertise: ["Cloud Security", "Kubernetes / CI/CD", "Data Residency", "SOC-2 Governance"]
    },
    {
      name: "Subashini Kaushik",
      role: "AI Engineer - LLM / RAG",
      category: "ai",
      credentials: "Knowledge Retrieval & Semantic Search",
      bio: "Builds high-precision retrieval-augmented generation systems that turn fragmented corporate sales assets into real-time deal guidance.",
      expertise: ["RAG Systems", "Semantic Search", "Knowledge Synthesis", "Vector Databases"]
    },
    {
      name: "Sonu Priyadarshini",
      role: "Chief Financial Officer (CFO)",
      category: "governance",
      credentials: "Financial Engineering & Capital Allocation",
      bio: "Oversees fiscal governance, capital efficiency, unit economics modeling, and enterprise compliance across international corporate entities.",
      expertise: ["Unit Economics", "Financial Governance", "Cross-Border Tax", "Capital Efficiency"]
    },
    {
      name: "Aswathi Nair",
      role: "Corporate Counsel",
      category: "governance",
      credentials: "Enterprise Legal & Regulatory Compliance",
      bio: "Directs legal frameworks, mutual confidentiality protocols, intellectual property protection, and global SaaS regulatory compliance.",
      expertise: ["Enterprise Contracts", "Mutual NDAs", "Data Privacy (GDPR/HIPAA)", "Corporate Law"]
    },
    {
      name: "Prithivin L",
      role: "Project Lead - EscrowChain",
      category: "product",
      credentials: "Decentralized Settlement & Contracts",
      bio: "Leads smart commercial contract verification, multi-party milestone escrow, and automated cross-border billing protocols.",
      expertise: ["Smart Contracts", "Settlement Protocols", "Escrow Engineering", "FinTech Systems"]
    },
    {
      name: "Natarajan",
      role: "Sr Blockchain Architect",
      category: "infra",
      credentials: "Cryptographic Ledger Infrastructure",
      bio: "Engineers tamper-evident audit logs, cryptographic transaction proofing, and deterministic revenue verification chains.",
      expertise: ["Cryptographic Ledgers", "Audit Infrastructure", "Deterministic State", "System Security"]
    },
    {
      name: "Neha Hebber",
      role: "FinTech Platform Engineer",
      category: "product",
      credentials: "IIT Bombay - Core Engineering",
      bio: "Develops automated pricing engine calculators, enterprise discounting governance rules, and margin reconciliation engines.",
      expertise: ["Pricing Engines", "Discount Control", "Financial Modeling", "FinTech Architecture"]
    },
    {
      name: "Swathi Iyer",
      role: "Platform Engineer",
      category: "product",
      credentials: "IIT Madras - BTech",
      bio: "Specializes in high-speed telemetry ingestion pipelines, low-latency API bridges, and multi-tenant data segmentation.",
      expertise: ["Telemetry Ingestion", "API Bridges", "Multi-Tenancy", "Data Engineering"]
    },
    {
      name: "Aishwarya L Bhatt",
      role: "AI Performance Marketing & Strategy",
      category: "strategy",
      credentials: "Quantitative Demand Generation",
      bio: "Designs algorithmic paid acquisition structures, intent-driven audience segmentation, and dark-funnel inbound conversion mechanics.",
      expertise: ["Intent Marketing", "Demand Engineering", "Audience Scoring", "Growth Analytics"]
    },
    {
      name: "Chintiya Liu",
      role: "Industry Consultant",
      category: "strategy",
      credentials: "Cross-Border Commercial Strategy",
      bio: "Provides vertical market expertise across Southeast Asian and Pan-Pacific enterprise ecosystems, advising on regional commercial expansion.",
      expertise: ["APAC Expansion", "Cross-Border Commercials", "Market Entry", "Industry Playbooks"]
    },
    {
      name: "Kallol Pal",
      role: "Technology Advisor",
      category: "governance",
      credentials: "Enterprise AI & Scalability Advisor",
      bio: "Advises executive leadership on cognitive software scaling, enterprise AI governance, and defensive technology moat construction.",
      expertise: ["Technology Moats", "Enterprise Scalability", "AI Governance", "Executive Advisory"]
    },
    {
      name: "Soumya S",
      role: "Company Secretary & Advisor",
      category: "governance",
      credentials: "Corporate Governance & Compliance",
      bio: "Maintains international corporate compliance, board resolutions, regulatory filings, and statutory enterprise standards.",
      expertise: ["Corporate Secretarial", "Board Resolutions", "Statutory Compliance", "Audits"]
    },
    {
      name: "Poojasri",
      role: "AI/ML Engineer",
      category: "ai",
      credentials: "Machine Learning & Predictive Telemetry",
      bio: "Builds lead propensity models, automated CRM hygiene enrichment scripts, and response latency monitoring algorithms.",
      expertise: ["Predictive Models", "CRM Automation", "Data Science", "Python / PyTorch"]
    },
    {
      name: "Annapoorani",
      role: "Automation Engineering",
      category: "infra",
      credentials: "Workflow Automation & Telemetry",
      bio: "Implements automated revenue testing harnesses, continuous telemetry validation, and stage routing reliability checks.",
      expertise: ["Workflow Automation", "Integration Testing", "Process Orchestration", "Python"]
    }
  ];

  const functionalGroups = [
    {
      id: 'revenue-strategy',
      title: 'Revenue Strategy & Commercial Architecture',
      icon: BarChart3,
      desc: 'Former enterprise CROs, commercial strategists, and growth leaders who translate complex business challenges into mathematical GTM execution frameworks.',
      focus: ['Dark-Funnel Intent Interception', 'Value-Based Pricing Architectures', 'Territory & Capacity Modeling', 'Board-Level Revenue Predictability']
    },
    {
      id: 'ai-engineering',
      title: 'AI Engineering & Machine Learning Systems',
      icon: BrainCircuit,
      desc: 'Forward-deployed AI researchers and machine learning engineers developing multi-agent cognitive systems, proprietary RAG pipelines, and deterministic sales guidance.',
      focus: ['Multi-Agent Cognitive Systems', 'Sub-60s Inbound Intake Engines', 'Dynamic Battlecard Synthesis', 'Empirical Forecast Modeling']
    },
    {
      id: 'platform-engineering',
      title: 'Enterprise Platform Architecture & Products',
      icon: Building2,
      desc: 'System architects and software engineers from leading institutions (IIT Bombay, IIT Madras) engineering robust, zero-downtime revenue software engines.',
      focus: ['State Machine Progression Gates', 'Enterprise CRM & ERP Bridges', 'Milestone Settlement Protocols', 'Zero-Data-Retention Telemetry']
    },
    {
      id: 'governance-advisory',
      title: 'Executive Governance & Regulatory Advisory',
      icon: ShieldCheck,
      desc: 'Corporate counsel, CFO leadership, and technology advisors guaranteeing client data sovereignty, mutual NDA compliance, and international corporate rigor.',
      focus: ['Strict Mutual NDA Governance', 'SOC-2 Type II Standards', 'Data Privacy (GDPR/HIPAA)', 'Cross-Border Capital Structuring']
    }
  ];

  const filteredMembers = activeCategory === 'all'
    ? teamMembers
    : teamMembers.filter(m => m.category === activeCategory);

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
            <span className="text-blue-400 font-bold">Leadership & Teams</span>
          </div>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-900/60 border border-blue-700/80 text-blue-300 font-mono text-xs font-bold uppercase tracking-wider mb-6">
              <Users className="w-3.5 h-3.5 text-blue-400" />
              <span>World-Class Commercial Cadre</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black font-heading tracking-tight text-white mb-6 leading-[1.1]">
              The People and Expertise Behind <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-400 to-indigo-300">
                Autonomous Revenue Transformation
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-300 font-medium leading-relaxed mb-8">
              ProfitMachines unites enterprise revenue operators, forward-deployed software engineers, and machine learning researchers to solve the hardest problems in modern commercial execution.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#consultation"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 active:bg-blue-700 text-white font-bold text-sm shadow-lg shadow-blue-600/30 transition-all hover:-translate-y-0.5"
              >
                <span>Connect With Our Team</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#team-directory"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-slate-800/80 hover:bg-slate-800 text-slate-200 border border-slate-700 font-semibold text-sm transition-all"
              >
                <span>View Full Team Directory ({teamMembers.length})</span>
                <ArrowUpRight className="w-4 h-4 text-slate-400" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 02: ROLE OF LEADERSHIP IN REVENUE TRANSFORMATION ── */}
      <section id="role-of-leadership" className="py-20 sm:py-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600 bg-blue-50 border border-blue-200/60 px-3 py-1 rounded-full">
                Operating Philosophy
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading tracking-tight mt-3 mb-6">
                Why Leadership Sets the Standard for Engineering-First Commercial Growth
              </h2>
              <div className="space-y-4 text-slate-600 text-base leading-relaxed">
                <p>
                  Technology alone cannot transform an enterprise go-to-market organization. Sustainable commercial acceleration requires leaders who understand the intricate interplay between buying committee dynamics, pipeline latency, and mathematical forecasting.
                </p>
                <p>
                  Our leadership team works directly with enterprise founders, CEOs, and commercial boards under strict confidentiality, deploying proven frameworks that eliminate guesswork and instill structural discipline across every revenue tier.
                </p>
              </div>

              <div className="mt-8 grid sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs">
                  <div className="text-xl font-black text-slate-900 font-heading mb-1">100%</div>
                  <div className="text-xs font-bold text-slate-800 mb-1">Confidential Engagement</div>
                  <p className="text-[11px] text-slate-500 leading-snug">All client commercial data is governed under strict bilateral NDAs with zero leakage.</p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs">
                  <div className="text-xl font-black text-blue-600 font-heading mb-1">Dual-Track</div>
                  <div className="text-xs font-bold text-slate-800 mb-1">Execution Architecture</div>
                  <p className="text-[11px] text-slate-500 leading-snug">Rapid 90-day pipeline lift running in parallel with multi-year platform deployment.</p>
                </div>
              </div>
            </div>

            {/* Quote / Highlight Card */}
            <div className="lg:col-span-6">
              <div className="p-8 sm:p-10 rounded-3xl bg-slate-900 border border-slate-800 text-white shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-48 h-48 bg-blue-600/10 rounded-full blur-2xl pointer-events-none" />
                <div className="text-xs font-mono text-blue-400 font-bold uppercase tracking-wider mb-6 flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>The ProfitMachines Cadre</span>
                </div>

                <blockquote className="text-lg sm:text-xl font-medium text-slate-200 leading-relaxed mb-6 font-heading">
                  &ldquo;Enterprise revenue is an engineering discipline. When you eliminate response latency, connect dark-funnel buying signals to rep workflows, and govern pipeline progression empirically, growth ceases to be volatile.&rdquo;
                </blockquote>

                <div className="pt-6 border-t border-slate-800 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center text-base font-mono">
                    BV
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white">Balaji Venkatraman</div>
                    <div className="text-xs text-slate-400 font-medium">Director of Growth &bull; ProfitMachines</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 03: FUNCTIONAL EXPERTISE GROUPS ── */}
      <section id="functional-groups" data-section-id="functional-groups" className="py-20 sm:py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600 bg-blue-50 border border-blue-200/60 px-3 py-1 rounded-full">
              Core Competencies
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading tracking-tight mt-3 mb-4">
              Organized Around Critical Revenue Disciplines
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              Our multidisciplinary team combines deep commercial acumen with cutting-edge artificial intelligence, distributed platform engineering, and institutional corporate governance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {functionalGroups.map((grp) => {
              const IconComp = grp.icon;
              return (
                <div key={grp.id} id={grp.id} data-section-id={grp.id} className="scroll-mt-24 p-8 rounded-2xl bg-slate-50 border border-slate-200/90 shadow-2xs hover:bg-white hover:border-blue-300 transition-all flex flex-col justify-between">
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold mb-5 border border-blue-100">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 font-heading mb-3">{grp.title}</h3>
                    <p className="text-sm text-slate-600 leading-relaxed mb-6">{grp.desc}</p>
                  </div>

                  <div>
                    <div className="text-xs font-mono font-bold uppercase text-slate-500 tracking-wider mb-2.5">
                      Domain Focus Areas
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      {grp.focus.map((item, fIdx) => (
                        <div key={fIdx} className="p-2.5 rounded-lg bg-white border border-slate-200/80 text-xs font-semibold text-slate-800 flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0" />
                          <span className="truncate">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── SECTION 04: FULL TEAM DIRECTORY (21 VERIFIED PROFILES) ── */}
      <section id="team-directory" data-section-id="teams" className="scroll-mt-24 py-20 sm:py-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600 bg-blue-50 border border-blue-200/60 px-3 py-1 rounded-full">
                Verified Directory
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading tracking-tight mt-3">
                Leadership, Engineering & Advisory Profiles
              </h2>
              <p className="text-slate-600 text-sm sm:text-base mt-2">
                Profiles and domain contributions of our verified core team members.
              </p>
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center gap-1.5 bg-white p-1.5 rounded-xl border border-slate-200 shadow-2xs">
              {[
                { id: 'all', label: 'All Members' },
                { id: 'strategy', label: 'Strategy & GTM' },
                { id: 'ai', label: 'AI & ML' },
                { id: 'product', label: 'Product & Systems' },
                { id: 'infra', label: 'Infra & DevOps' },
                { id: 'governance', label: 'Governance & Advisory' },
              ].map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveCategory(tab.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    activeCategory === tab.id
                      ? 'bg-blue-600 text-white shadow-2xs'
                      : 'text-slate-600 hover:text-blue-600 hover:bg-slate-50'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Team Cards Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredMembers.map((member, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-blue-300 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 text-blue-700 font-mono font-black text-sm flex items-center justify-center shrink-0">
                      {member.name.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase()}
                    </div>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-2 py-0.5 rounded border border-blue-200/60">
                      {member.category.toUpperCase()}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 font-heading mb-1">{member.name}</h3>
                  <div className="text-xs font-bold text-blue-600 mb-2">{member.role}</div>
                  {member.credentials && (
                    <div className="text-[11px] font-mono font-semibold text-slate-500 mb-3">
                      {member.credentials}
                    </div>
                  )}

                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {member.bio}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <div className="flex flex-wrap gap-1.5">
                    {member.expertise.map((exp, eIdx) => (
                      <span key={eIdx} className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 text-[10px] font-semibold">
                        {exp}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 05: EXECUTIVE CONSULTATION & INTAKE ── */}
      <section id="consultation" className="scroll-mt-20">
        <LeadCaptureSection />
      </section>
    </div>
  );
}

