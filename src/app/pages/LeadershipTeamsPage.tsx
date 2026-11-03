import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Users, ArrowRight, ArrowUpRight, ShieldCheck, CheckCircle2,
  Sparkles, ChevronRight, Award, Compass, Network, BrainCircuit,
  Building2, BarChart3, Database, Lock, Scale, Mail, Briefcase, Zap
} from 'lucide-react';
import LeadCaptureSection from '../components/LeadCaptureSection';

interface TeamMember {
  initials: string;
  name: string;
  role: string;
  badge: string;
  category: 'leadership' | 'architecture' | 'engineering' | 'governance';
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
      initials: "SN",
      name: "Shaji Namath",
      role: "Managing Partner - GCC Practice",
      badge: "Product Leadership",
      category: "leadership"
    },
    {
      initials: "PR",
      name: "Pranav PR",
      role: "Director & Chief Operating Officer",
      badge: "Director",
      category: "leadership"
    },
    {
      initials: "BV",
      name: "Balaji Venkatraman",
      role: "Director & Growth & Acceleration",
      badge: "Growth & Acceleration",
      category: "leadership"
    },
    {
      initials: "KV",
      name: "Kumar V",
      role: "Global Head - AI Infra & Cybersecurity Practice",
      badge: "AI Cybersecurity & FDE Cybersecurity",
      category: "architecture"
    },
    {
      initials: "LS",
      name: "Lavanya Seshadri",
      role: "Head - FDE Practice (AJPC)",
      badge: "AI Value Engineering",
      category: "architecture"
    },
    {
      initials: "VK",
      name: "Vignesh KS",
      role: "Product Lead (FinTech & Escrow Platforms)",
      badge: "Product Lead",
      category: "architecture"
    },
    {
      initials: "H",
      name: "Hemalata Niyogi",
      role: "Lead Architect - AI FDE Practice (Mfg)",
      badge: "Lead AI Architect",
      category: "architecture"
    },
    {
      initials: "PL",
      name: "Prithivin L",
      role: "Project Lead - EscrowChain Platform",
      badge: "Systems Lead",
      category: "engineering"
    },
    {
      initials: "SK",
      name: "Shiva Kumar",
      role: "Managing Partner & Advisor - Mfg Domain",
      badge: "Product Architecture",
      category: "architecture"
    },
    {
      initials: "MR",
      name: "Mahadaven Ramasumbramanian",
      role: "Managing Partner - FDE (Energy & Telecom)",
      badge: "Practice Leader (Energy & Telecom)",
      category: "leadership"
    },
    {
      initials: "SP",
      name: "Sonu Priyadharshini",
      role: "Chief Financial Controller (Acting)",
      badge: "Finance",
      category: "governance"
    },
    {
      initials: "DK",
      name: "Dinesh Kumar",
      role: "Senior AI FDE (Finance & Healthcare)",
      badge: "Senior AI FDE",
      category: "engineering"
    },
    {
      initials: "R",
      name: "Risihi Kumar",
      role: "AI/ML Engineer",
      badge: "AI Architecture",
      category: "engineering"
    },
    {
      initials: "R",
      name: "Ritin",
      role: "Senior AI Architect",
      badge: "AI Architecture",
      category: "architecture"
    },
    {
      initials: "N",
      name: "Natarajan",
      role: "Sr Blockchain Architect",
      badge: "Blockchain",
      category: "engineering"
    },
    {
      initials: "V",
      name: "Viswanath",
      role: "Sr DevOps Engineer",
      badge: "DevOps & Cloud",
      category: "engineering"
    },
    {
      initials: "SK",
      name: "Subashini Kaushik",
      role: "Lead AI FDE Practice (GRC / FinTech)",
      badge: "GRC / FinTech",
      category: "engineering"
    },
    {
      initials: "NH",
      name: "Neha Hebber",
      role: "FDE Practice (Finance & GRC)",
      badge: "IIT Bombay",
      category: "engineering"
    },
    {
      initials: "A",
      name: "Annapoorani",
      role: "Lead AI FDE Practice (GRC / FinTech)",
      badge: "Automation",
      category: "engineering"
    },
    {
      initials: "SI",
      name: "Swathi Iyer",
      role: "Lead Investor & Strategic Advisor",
      badge: "IIT Madras",
      category: "governance"
    },
    {
      initials: "AL",
      name: "Aiswhwarya LN Bhatt",
      role: "AI Performance Marketing & Strategy",
      badge: "Strategy",
      category: "leadership"
    },
    {
      initials: "CL",
      name: "Chintiya Liu",
      role: "Lead Consultant (China)",
      badge: "Consultant",
      category: "governance"
    },
    {
      initials: "KP",
      name: "Kallol Pal",
      role: "Technology Advisor & CTO",
      badge: "Advisor",
      category: "architecture"
    },
    {
      initials: "SS",
      name: "Soumya Sommiah",
      role: "Company Secretary & Advisor",
      badge: "Corporate Governance",
      category: "governance"
    },
    {
      initials: "SS",
      name: "Soumya S",
      role: "Corporate Counsel",
      badge: "Legal Counsel",
      category: "governance"
    },
    {
      initials: "AN",
      name: "Aswathi Nair",
      role: "Corporate Counsel",
      badge: "Legal Counsel",
      category: "governance"
    },
    {
      initials: "SP",
      name: "Sonu Priyadharshini",
      role: "Sr Manager - Talent Acceleration",
      badge: "Talent Acceleration",
      category: "governance"
    },
    {
      initials: "VT",
      name: "Vanitha T",
      role: "Manager - General Admin",
      badge: "General Admin",
      category: "governance"
    },
    {
      initials: "GS",
      name: "Gagna Sindhu",
      role: "HR Operations Specialist",
      badge: "HR Operations",
      category: "governance"
    },
    {
      initials: "P",
      name: "Poojasri",
      role: "AI/ML Engineer",
      badge: "AI Architecture",
      category: "engineering"
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
                <span>View Full Team Directory ({teamMembers.length + 1})</span>
                <ArrowUpRight className="w-4 h-4 text-slate-400" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 02: ROLE OF LEADERSHIP IN REVENUE TRANSFORMATION ── */}
      <section id="role-of-leadership" className="py-20 sm:py-24 bg-slate-50 border-b border-slate-200 scroll-mt-20">
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

      {/* ── SECTION 04: FULL TEAM DIRECTORY (CLEAN, COMPACT CARDS) ── */}
      <section id="team-directory" data-section-id="teams" className="scroll-mt-24 py-20 sm:py-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600 bg-blue-50 border border-blue-200/60 px-3 py-1 rounded-full">
                Verified Directory
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading tracking-tight mt-3">
                Leadership, Engineering &amp; Advisory Profiles
              </h2>
              <p className="text-slate-600 text-sm sm:text-base mt-2">
                Profiles and domain contributions of our verified core team members.
              </p>
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center gap-1.5 bg-white p-1.5 rounded-xl border border-slate-200 shadow-2xs">
              {[
                { id: 'all', label: 'All Members' },
                { id: 'leadership', label: 'Leadership' },
                { id: 'architecture', label: 'Architecture' },
                { id: 'engineering', label: 'Engineering' },
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

          {/* Clean, Simple 4-Column Card Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredMembers.map((member, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-white border border-slate-200/90 hover:border-blue-300 hover:shadow-xs transition-all flex items-start gap-3.5 group shadow-2xs"
              >
                {/* Initials Avatar Badge */}
                <div className="w-10 h-10 rounded-lg bg-blue-50 border border-blue-200/60 text-blue-700 font-mono font-bold text-xs flex items-center justify-center shrink-0">
                  {member.initials}
                </div>

                {/* Member Info */}
                <div className="min-w-0 flex-1">
                  <h3 className="font-bold text-slate-900 text-sm font-heading leading-tight group-hover:text-blue-600 transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-xs text-slate-600 mt-1 leading-snug">
                    {member.role}
                  </p>
                  {member.badge && (
                    <span className="inline-block text-[10px] font-mono font-bold text-blue-700 bg-blue-50 border border-blue-200/60 px-2 py-0.5 rounded mt-2.5">
                      {member.badge}
                    </span>
                  )}
                </div>
              </div>
            ))}

            {/* Global Team Members Tile (31st Tile) */}
            <div className="p-5 rounded-xl bg-gradient-to-br from-blue-900 via-slate-900 to-indigo-950 text-white border border-blue-500/30 flex flex-col justify-between shadow-sm">
              <div>
                <div className="flex items-center justify-between mb-2.5">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-blue-500/20 text-blue-300 border border-blue-500/30">
                    Global Network
                  </span>
                  <span className="text-[10px] font-mono text-blue-400 font-bold">
                    60+ Strong
                  </span>
                </div>
                <h3 className="text-base font-black text-white font-heading mt-2">
                  +60 Global Team Members
                </h3>
                <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                  Specialized talent network across Americas, Asia-Pacific &amp; India:
                </p>

                <div className="mt-3 space-y-1.5">
                  <div className="flex items-center gap-2 text-xs text-blue-100 bg-white/5 px-2.5 py-1.5 rounded-lg border border-white/10">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0" />
                    <span className="font-semibold text-white">AI FDEs</span>
                    <span className="text-[11px] text-slate-300">(Forward Deployed Engineers)</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-cyan-100 bg-white/5 px-2.5 py-1.5 rounded-lg border border-white/10">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                    <span className="font-semibold text-white">AI Sales Acceleration Experts</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-indigo-100 bg-white/5 px-2.5 py-1.5 rounded-lg border border-white/10">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 flex-shrink-0" />
                    <span className="font-semibold text-white">AI Domain Engineers</span>
                  </div>
                </div>
              </div>
              <div className="mt-4 pt-3 border-t border-blue-500/20 text-[11px] font-mono text-blue-300 font-bold">
                COMMUNITY &amp; RESEARCH FELLOWSHIPS
              </div>
            </div>
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
