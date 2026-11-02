import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  GraduationCap, Briefcase, ArrowRight, ArrowUpRight, CheckCircle2,
  Sparkles, ChevronRight, Award, Compass, Heart, Users, Code2,
  Brain, Globe, Lock, ShieldCheck, FileText, Check, AlertCircle, X
} from 'lucide-react';
import { submitToSheet } from '../../lib/sheets';
import { validateBusinessEmail, validatePhone, FormErrorBanner, HoneypotField } from '../components/forms/FormFeedback';
import { trackEvent } from '../../lib/analytics';
import { Button } from '../components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../components/ui/dialog";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Textarea } from "../components/ui/textarea";

interface JobRole {
  id: string;
  title: string;
  dept: string;
  type: string;
  location: string;
  experience: string;
  summary: string;
  responsibilities: string[];
  qualifications: string[];
}

export default function CareersFellowshipsPage() {
  const [isApplyOpen, setIsApplyOpen] = useState(false);
  const [selectedRole, setSelectedRole] = useState("General Application / Fellowship Interest");
  const [submissionId, setSubmissionId] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [applicantEmail, setApplicantEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [emailError, setEmailError] = useState<string | null>(null);
  const [phoneError, setPhoneError] = useState<string | null>(null);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [honeypot, setHoneypot] = useState('');

  useEffect(() => {
    document.title = "Careers & Fellowships | ProfitMachines AI";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Explore engineering careers, research fellowships, and forward-deployed revenue architecture opportunities at ProfitMachines.');
    }
  }, []);

  const openRoles: JobRole[] = [
    {
      id: 'ai-ml-engineer',
      title: 'AI / ML Systems Engineer (LLM & Agent Orchestration)',
      dept: 'AI Engineering',
      type: 'Full-time',
      location: 'Bengaluru / Remote',
      experience: '3 - 6 Years',
      summary: 'Architect proprietary multi-agent cognitive workflows, retrieval-augmented generation pipelines, and real-time sales intelligence extraction models.',
      responsibilities: [
        'Design and deploy production-grade RAG and vector database architectures for enterprise sales guidance.',
        'Implement low-latency inference pipelines connecting buyer intent telemetry with autonomous rep briefings.',
        'Build automated evaluation harnesses benchmarked against commercial deal progression accuracy.'
      ],
      qualifications: [
        'Deep proficiency in Python, PyTorch/TensorFlow, LangChain/LlamaIndex, and vector databases (Pinecone, Qdrant).',
        'Proven track record deploying LLM agent systems in production enterprise environments.',
        'Strong computer science fundamentals (BTech/MTech in CS or related field).'
      ]
    },
    {
      id: 'full-stack-engineer',
      title: 'Senior Full Stack Revenue Platform Engineer',
      dept: 'Platform Engineering',
      type: 'Full-time',
      location: 'Bengaluru / Remote',
      experience: '4 - 7 Years',
      summary: 'Engineer high-throughput enterprise revenue platforms, state-machine pipeline progression tools, and responsive analytical dashboards.',
      responsibilities: [
        'Build scalable micro-frontend architectures with React, TypeScript, and high-performance serverless backends.',
        'Develop real-time WebSocket telemetry ingestion bridges for CRM, ERP, and communication channels.',
        'Ensure enterprise SOC-2 Type II standards, zero data leakage, and rigorous automated test coverage.'
      ],
      qualifications: [
        'Advanced expertise in modern TypeScript, React, Node.js, and relational/time-series databases.',
        'Experience building enterprise SaaS interfaces with complex state management and telemetry charts.',
        'Strong architectural discipline regarding API contracts, idempotency, and security standards.'
      ]
    },
    {
      id: 'forward-deployed-architect',
      title: 'Forward-Deployed Revenue Architect',
      dept: 'Revenue Architecture',
      type: 'Full-time',
      location: 'Tampa / Singapore / Remote',
      experience: '5+ Years',
      summary: 'Partner directly with enterprise CROs, CEOs, and commercial boards to deploy ProfitMachines revenue acceleration systems into live revenue motions.',
      responsibilities: [
        'Audit customer commercial funnels, isolate conversion decay, and design custom dual-track acceleration programs.',
        'Collaborate with AI engineering to configure account intent models, sales battlecards, and pipeline progression gates.',
        'Quantify and prove ARR contribution margin lift, CAC compression, and quota attainment improvements.'
      ],
      qualifications: [
        'Demonstrated background in enterprise B2B sales engineering, management consulting, or RevOps leadership.',
        'Exceptional executive communication and commercial quantitative modeling capabilities.',
        'Comfort working at the intersection of enterprise software architecture and corporate revenue strategy.'
      ]
    },
    {
      id: 'enterprise-ae',
      title: 'Enterprise Account Executive & Deal Strategist',
      dept: 'Commercial Growth',
      type: 'Full-time',
      location: 'United States / Singapore / Remote',
      experience: '5+ Years',
      summary: 'Lead high-value commercial engagements with Fortune 1000 and high-growth enterprise leaders seeking AI-native revenue transformation.',
      responsibilities: [
        'Execute consultative discovery with board-level executives, mapping commercial pain to ProfitMachines capabilities.',
        'Orchestrate cross-functional scoping diagnostics and mutual value commitments.',
        'Drive multi-year enterprise platform agreements with high retention and expansion predictability.'
      ],
      qualifications: [
        'Consistent track record of enterprise quota overachievement in high-ACV software or consulting.',
        'Deep familiarity with modern revenue architectures, AI workflows, and CFO-level business cases.',
        'Exemplary relationship management and contract negotiation skills under bilateral NDAs.'
      ]
    }
  ];

  const fellowships = [
    {
      title: 'ProfitMachines Revenue AI Research Fellowship',
      duration: '6 - 12 Months',
      audience: 'Graduate Students & Post-Grad Researchers (IIT, Top Tech Institutes)',
      stipend: 'Competitive Merit Stipend + Research Publication',
      desc: 'Conduct foundational applied research into cognitive agent orchestration, automated commercial negotiation dynamics, and mathematical revenue progression modeling under the guidance of veteran AI architects.'
    },
    {
      title: 'Automation & Forward Engineering Fellowship',
      duration: '3 - 6 Months',
      audience: 'Senior Undergraduates & Early-Career Engineers',
      stipend: 'Sponsored Fellowship with Direct Full-Time Conversion Track',
      desc: 'Work directly on live enterprise platform deployments, building high-speed data enrichment bridges, telemetry testing harnesses, and automated CRM validation protocols.'
    }
  ];

  const handleApply = (roleTitle: string) => {
    setSelectedRole(roleTitle);
    setIsApplyOpen(true);
    setEmailError(null);
    setPhoneError(null);
    setSubmitError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;
    if (honeypot) return;
    setEmailError(null);
    setPhoneError(null);
    setSubmitError(null);

    const form = e.currentTarget as HTMLFormElement;
    const formData = new FormData(form);
    const email = String(formData.get('email') || '').trim();
    const phone = String(formData.get('phone') || '').trim();

    const emailVal = validateBusinessEmail(email);
    if (!emailVal.valid) {
      setEmailError(emailVal.message || 'Please provide a valid email address');
      return;
    }

    if (phone) {
      const phoneVal = validatePhone(phone);
      if (!phoneVal.valid) {
        setPhoneError(phoneVal.message || 'Please provide a valid phone number');
        return;
      }
    }

    setIsSubmitting(true);
    trackEvent({ eventName: 'JOB_APPLICATION_SUBMIT', category: 'CAREERS', label: selectedRole });

    try {
      const res = await submitToSheet('Job Applications', {
        formName: `Application - ${selectedRole}`,
        firstName: String(formData.get('firstName') || ''),
        lastName: String(formData.get('lastName') || ''),
        email: email,
        phone: phone,
        company: String(formData.get('linkedin') || ''),
        designation: selectedRole,
        interest: `Careers / ${selectedRole}`,
        message: String(formData.get('coverLetter') || ''),
        source: 'Careers & Fellowships Page'
      });
      setSubmissionId(res.submissionId || 'PM-APP-' + Math.floor(100000 + Math.random() * 900000));
      setApplicantEmail(email);
      setSubmitted(true);
      setIsApplyOpen(false);
    } catch (error) {
      console.error(error);
      setSubmitError("We couldn't submit your application just now. Please try again or email talent@profitmachines.com directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

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
            <span className="text-blue-400 font-bold">Careers & Fellowships</span>
          </div>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-900/60 border border-blue-700/80 text-blue-300 font-mono text-xs font-bold uppercase tracking-wider mb-6">
              <GraduationCap className="w-3.5 h-3.5 text-blue-400" />
              <span>Talent, Research & Fellowships</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black font-heading tracking-tight text-white mb-6 leading-[1.1]">
              Engineer the Future of <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-400 to-indigo-300">
                AI-Native Commercial Systems
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-300 font-medium leading-relaxed mb-8">
              Join a team of forward-deployed revenue architects, AI researchers, and distributed platform engineers building autonomous commercial platforms that eliminate pipeline guesswork for global enterprises.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#open-roles"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 active:bg-blue-700 text-white font-bold text-sm shadow-lg shadow-blue-600/30 transition-all hover:-translate-y-0.5"
              >
                <span>View Open Positions ({openRoles.length})</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#fellowships"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-slate-800/80 hover:bg-slate-800 text-slate-200 border border-slate-700 font-semibold text-sm transition-all"
              >
                <span>Research Fellowships</span>
                <ArrowUpRight className="w-4 h-4 text-slate-400" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 02: OUR CULTURE & WORKING PRINCIPLES ── */}
      <section id="culture" className="py-20 sm:py-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600 bg-blue-50 border border-blue-200/60 px-3 py-1 rounded-full">
              Working Principles
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading tracking-tight mt-3 mb-4">
              How We Work, Learn, and Accelerate Together
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              We look for high-agency engineers and commercial architects who thrive in an intellectually demanding environment focused on real enterprise impact.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-7 rounded-2xl bg-white border border-slate-200 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold mb-5 border border-blue-100">
                <Brain className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2 font-heading">High Agency & Ownership</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                You will not be micromanaged. We give team members end-to-end ownership over architecture, models, and commercial deliverables from day one.
              </p>
            </div>

            <div className="p-7 rounded-2xl bg-white border border-slate-200 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold mb-5 border border-emerald-100">
                <Code2 className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2 font-heading">Code & System Rigor</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Our platforms handle real enterprise capital. We prioritize clean code, deterministic tests, and high-availability systems over fragile hacks.
              </p>
            </div>

            <div className="p-7 rounded-2xl bg-white border border-slate-200 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold mb-5 border border-indigo-100">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2 font-heading">Board-Level Impact</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Work directly with seasoned enterprise leaders, former CROs, and top academic researchers (IIT Bombay, IIT Madras) solving multi-million dollar revenue challenges.
              </p>
            </div>

            <div className="p-7 rounded-2xl bg-white border border-slate-200 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center font-bold mb-5 border border-purple-100">
                <Globe className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2 font-heading">Distributed Flexibility</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Distributed teams operating across Tampa, Singapore, Bengaluru, and Mumbai with deep respect for focus time, documentation, and asynchronous delivery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 03: OPEN POSITIONS ── */}
      <section id="open-roles" data-section-id="apply" className="scroll-mt-24 py-20 sm:py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600 bg-blue-50 border border-blue-200/60 px-3 py-1 rounded-full">
              Current Openings
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading tracking-tight mt-3 mb-4">
              Active Full-Time Career Opportunities
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              Explore open roles across our engineering, revenue architecture, and commercial execution teams.
            </p>
          </div>

          <div className="space-y-6">
            {openRoles.map((role) => (
              <div
                key={role.id}
                className="p-7 sm:p-8 rounded-2xl bg-slate-50 border border-slate-200/90 hover:border-blue-300 hover:bg-white transition-all shadow-2xs"
              >
                <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6">
                  <div className="space-y-3 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-800 text-[10px] font-mono font-bold">
                        {role.dept}
                      </span>
                      <span className="px-2.5 py-0.5 rounded-full bg-slate-200 text-slate-700 text-[10px] font-mono font-bold">
                        {role.type}
                      </span>
                      <span className="px-2.5 py-0.5 rounded-full bg-slate-200 text-slate-700 text-[10px] font-mono font-bold">
                        {role.location}
                      </span>
                      <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-mono font-bold">
                        {role.experience}
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-heading">
                      {role.title}
                    </h3>

                    <p className="text-sm text-slate-600 leading-relaxed max-w-3xl">
                      {role.summary}
                    </p>

                    <div className="grid sm:grid-cols-2 gap-4 pt-3">
                      <div>
                        <div className="text-[11px] font-mono font-bold uppercase text-slate-500 mb-2">Key Responsibilities</div>
                        <ul className="space-y-1.5 text-xs text-slate-700">
                          {role.responsibilities.map((r, rIdx) => (
                            <li key={rIdx} className="flex items-start gap-1.5">
                              <span className="text-blue-600 font-bold">&#8226;</span>
                              <span>{r}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <div className="text-[11px] font-mono font-bold uppercase text-slate-500 mb-2">Qualifications</div>
                        <ul className="space-y-1.5 text-xs text-slate-700">
                          {role.qualifications.map((q, qIdx) => (
                            <li key={qIdx} className="flex items-start gap-1.5">
                              <span className="text-emerald-600 font-bold">&#8226;</span>
                              <span>{q}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="shrink-0 pt-2 lg:pt-0">
                    <button
                      onClick={() => handleApply(role.title)}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-sm cursor-pointer"
                    >
                      <span>Apply For Role</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 04: FELLOWSHIPS & RESEARCH PROGRAMS ── */}
      <section id="fellowships" className="py-20 sm:py-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600 bg-blue-50 border border-blue-200/60 px-3 py-1 rounded-full">
              Research & Academic Alliances
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading tracking-tight mt-3 mb-4">
              Fellowships & Advanced Research Programs
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              Partnering with talented graduate and undergraduate researchers from premier institutions like IIT Bombay and IIT Madras to pioneer cognitive revenue science.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {fellowships.map((f, idx) => (
              <div key={idx} className="p-8 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-4">
                    <span className="px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700 text-[10px] font-mono font-bold border border-blue-200">
                      Duration: {f.duration}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-[10px] font-mono font-bold border border-emerald-200">
                      {f.stipend}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 font-heading mb-2">
                    {f.title}
                  </h3>

                  <div className="text-xs font-semibold text-slate-500 mb-4">
                    Target Candidates: {f.audience}
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed mb-6">
                    {f.desc}
                  </p>
                </div>

                <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-mono text-slate-400">Applications Open for 2026</span>
                  <button
                    onClick={() => handleApply(f.title)}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-blue-50 hover:bg-blue-100 text-blue-700 text-xs font-bold transition-colors cursor-pointer"
                  >
                    <span>Apply for Fellowship</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── APPLICATION MODAL (REAL FORM WITH SHEETS INTEGRATION) ── */}
      <Dialog open={isApplyOpen} onOpenChange={setIsApplyOpen}>
        <DialogContent className="max-w-xl bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-2xl">
          <DialogHeader>
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-2.5 py-0.5 rounded">
                Application Intake
              </span>
            </div>
            <DialogTitle className="text-xl sm:text-2xl font-black text-slate-900 font-heading mt-2">
              Apply: {selectedRole}
            </DialogTitle>
            <DialogDescription className="text-xs text-slate-500">
              Submit your credentials directly to our talent and engineering committee. All applications are reviewed under strict confidentiality.
            </DialogDescription>
          </DialogHeader>

          {submitError && (
            <div className="p-3 rounded-lg bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{submitError}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4 mt-2">
            <HoneypotField value={honeypot} onChange={setHoneypot} />

            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-1">
                <Label htmlFor="firstName" className="text-xs font-bold text-slate-700">First Name *</Label>
                <Input id="firstName" name="firstName" required placeholder="Alex" className="text-xs" />
              </div>
              <div className="space-y-1">
                <Label htmlFor="lastName" className="text-xs font-bold text-slate-700">Last Name *</Label>
                <Input id="lastName" name="lastName" required placeholder="Vance" className="text-xs" />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-1">
                <Label htmlFor="email" className="text-xs font-bold text-slate-700">Email Address *</Label>
                <Input id="email" name="email" type="email" required placeholder="alex@company.com" className="text-xs" />
                {emailError && <p className="text-[10px] text-red-600 font-medium">{emailError}</p>}
              </div>
              <div className="space-y-1">
                <Label htmlFor="phone" className="text-xs font-bold text-slate-700">Phone Number *</Label>
                <Input id="phone" name="phone" required placeholder="+1 555-0199" className="text-xs" />
                {phoneError && <p className="text-[10px] text-red-600 font-medium">{phoneError}</p>}
              </div>
            </div>

            <div className="space-y-1">
              <Label htmlFor="linkedin" className="text-xs font-bold text-slate-700">LinkedIn Profile or Portfolio URL *</Label>
              <Input id="linkedin" name="linkedin" required placeholder="https://linkedin.com/in/alexvance or github" className="text-xs" />
            </div>

            <div className="space-y-1">
              <Label htmlFor="coverLetter" className="text-xs font-bold text-slate-700">Summary of Key Engineering or Commercial Accomplishments</Label>
              <Textarea
                id="coverLetter"
                name="coverLetter"
                rows={3}
                placeholder="Briefly describe your most significant technical or revenue architectural contribution..."
                className="text-xs resize-none"
              />
            </div>

            <div className="p-3 rounded-lg bg-slate-50 border border-slate-200/80 text-[11px] text-slate-500 flex items-center gap-2">
              <Lock className="w-3.5 h-3.5 text-blue-600 shrink-0" />
              <span>100% Confidential. Your submission will never be shared externally.</span>
            </div>

            <div className="flex items-center justify-end gap-3 pt-2">
              <Button
                type="button"
                variant="outline"
                onClick={() => setIsApplyOpen(false)}
                className="text-xs font-semibold"
              >
                Cancel
              </Button>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold px-5"
              >
                {isSubmitting ? 'Submitting...' : 'Submit Application'}
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>

      {/* ── SUCCESS MODAL ── */}
      {submitted && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="w-full max-w-md bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-2xl text-center">
            <div className="w-14 h-14 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200 flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-black text-slate-900 font-heading mb-2">Application Received</h3>
            <p className="text-xs text-slate-600 leading-relaxed mb-4">
              Thank you for applying to ProfitMachines for <span className="font-bold text-slate-900">{selectedRole}</span>. Your application ID is <span className="font-mono font-bold text-blue-600">{submissionId}</span>.
            </p>
            <div className="p-3 rounded-lg bg-slate-50 border border-slate-200 text-xs text-slate-500 mb-6">
              Our review committee will evaluate your profile and contact you at <span className="font-semibold text-slate-800">{applicantEmail}</span> within 48 business hours.
            </div>
            <Button
              onClick={() => setSubmitted(false)}
              className="w-full bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold"
            >
              Done
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

