import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  FileText,
  BookOpen,
  CheckCircle2,
  Award,
  DollarSign,
  Calculator,
  Sliders,
  Workflow,
  Users,
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  ShieldCheck,
  Search,
  Filter,
  Check,
  RotateCcw,
  Compass,
  Play,
  TrendingUp,
  Target,
  BarChart3,
  Layers,
  HelpCircle,
  Clock,
  Building2,
  ChevronRight,
  AlertTriangle,
  Cpu,
  BrainCircuit,
  Lock,
  Boxes,
  Zap,
  Briefcase
} from 'lucide-react';
import {
  HUB_CATEGORIES,
  PLAYBOOK_RESOURCES,
  ASSESSMENT_RESOURCES,
  MATURITY_MODEL_RESOURCES,
  BUSINESS_CASE_RESOURCES,
  ROI_MODEL_RESOURCES,
  CHECKLIST_RESOURCES,
  SOP_RESOURCES,
  WORKSHOP_RESOURCES,
  HubCategory,
  PlaybookResource,
  AssessmentResource,
  MaturityModelResource,
  BusinessCaseResource,
  RoiModelResource,
  ChecklistResource,
  SopResource,
  WorkshopResource
} from '../../../data/frameworksTemplatesData';
import { trackEvent } from '../../../lib/analytics';

export default function FrameworksTemplatesHubPage() {
  const location = useLocation();
  const [activeAnchor, setActiveAnchor] = useState('playbooks');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategoryFilter, setSelectedCategoryFilter] = useState('all');

  // Interactive Tools State
  // 1. Playbook active selection
  const [activePlaybookId, setActivePlaybookId] = useState(PLAYBOOK_RESOURCES[0].id);

  // 2. Assessment active selection & answers
  const [activeAssessmentId, setActiveAssessmentId] = useState(ASSESSMENT_RESOURCES[0].id);
  const [assessmentAnswers, setAssessmentAnswers] = useState<Record<string, number>>({});

  // 3. Maturity model active selection & active level tab
  const [activeMaturityId, setActiveMaturityId] = useState(MATURITY_MODEL_RESOURCES[0].id);
  const [activeMaturityLevel, setActiveMaturityLevel] = useState(3);

  // 4. Business case active selection
  const [activeBusinessCaseId, setActiveBusinessCaseId] = useState(BUSINESS_CASE_RESOURCES[0].id);

  // 5. Interactive ROI Calculator 1 (AI Sales Automation)
  const [calc1Reps, setCalc1Reps] = useState(15);
  const [calc1HoursSaved, setCalc1HoursSaved] = useState(16);
  const [calc1RepRate, setCalc1RepRate] = useState(65);
  const [calc1IncrementalARR, setCalc1IncrementalARR] = useState(350000);
  const [calc1AnnualCost, setCalc1AnnualCost] = useState(60000);

  // 5. Interactive ROI Calculator 2 (CAC Payback)
  const [calc2CAC, setCalc2CAC] = useState(30000);
  const [calc2MRR, setCalc2MRR] = useState(3200);
  const [calc2Margin, setCalc2Margin] = useState(82);

  // 6. Interactive Checklist state
  const [activeChecklistId, setActiveChecklistId] = useState(CHECKLIST_RESOURCES[0].id);
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});

  // 7. Interactive SOP active selection & step
  const [activeSopId, setActiveSopId] = useState(SOP_RESOURCES[0].id);
  const [activeSopStep, setActiveSopStep] = useState(1);

  // 8. Interactive Workshop active selection
  const [activeWorkshopId, setActiveWorkshopId] = useState(WORKSHOP_RESOURCES[0].id);

  useEffect(() => {
    document.title = 'Frameworks & Templates Hub | ProfitMachines Enterprise Architecture';
    trackEvent({ eventName: 'PAGE_VIEW_FRAMEWORKS_TEMPLATES_HUB', category: 'RESOURCES' });

    if (location.hash) {
      const id = location.hash.replace('#', '');
      const el = document.getElementById(id);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
          setActiveAnchor(id);
        }, 150);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location.hash, location.pathname]);

  // Observer for scroll spy on sub-navigation
  useEffect(() => {
    const handleScroll = () => {
      const anchors = HUB_CATEGORIES.map((c) => c.anchor);
      const scrollPos = window.scrollY + 200;

      for (let i = anchors.length - 1; i >= 0; i--) {
        const el = document.getElementById(anchors[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveAnchor(anchors[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToAnchor = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveAnchor(id);
      window.history.pushState(null, '', `#${id}`);
    }
  };

  // Calculations for ROI Model 1
  const annualLaborSavings = calc1Reps * calc1HoursSaved * 12 * calc1RepRate;
  const totalFinancialBenefit = annualLaborSavings + calc1IncrementalARR;
  const netROI = calc1AnnualCost > 0
    ? Math.round(((totalFinancialBenefit - calc1AnnualCost) / calc1AnnualCost) * 100)
    : 0;

  // Calculations for ROI Model 2 (CAC Payback)
  const monthlyGrossMargin = (calc2MRR * (calc2Margin / 100));
  const cacPaybackMonths = monthlyGrossMargin > 0
    ? (calc2CAC / monthlyGrossMargin).toFixed(1)
    : '0';

  // Active resource lookups
  const activePlaybook = PLAYBOOK_RESOURCES.find((p) => p.id === activePlaybookId) || PLAYBOOK_RESOURCES[0];
  const activeAssessment = ASSESSMENT_RESOURCES.find((a) => a.id === activeAssessmentId) || ASSESSMENT_RESOURCES[0];
  const activeMaturityModel = MATURITY_MODEL_RESOURCES.find((m) => m.id === activeMaturityId) || MATURITY_MODEL_RESOURCES[0];
  const activeBusinessCase = BUSINESS_CASE_RESOURCES.find((b) => b.id === activeBusinessCaseId) || BUSINESS_CASE_RESOURCES[0];
  const activeChecklist = CHECKLIST_RESOURCES.find((c) => c.id === activeChecklistId) || CHECKLIST_RESOURCES[0];
  const activeSop = SOP_RESOURCES.find((s) => s.id === activeSopId) || SOP_RESOURCES[0];
  const activeWorkshop = WORKSHOP_RESOURCES.find((w) => w.id === activeWorkshopId) || WORKSHOP_RESOURCES[0];

  // Assessment score calculation
  const totalScore = Object.values(assessmentAnswers).reduce((acc, curr) => acc + curr, 0);

  // Checklist toggling
  const toggleCheckItem = (id: string) => {
    setCheckedItems((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const completedCount = activeChecklist.items.filter((item) => checkedItems[item.id]).length;
  const totalItemsCount = activeChecklist.items.length;
  const completionPercentage = Math.round((completedCount / totalItemsCount) * 100);

  const resetChecklist = () => {
    const nextChecked = { ...checkedItems };
    activeChecklist.items.forEach((item) => {
      delete nextChecked[item.id];
    });
    setCheckedItems(nextChecked);
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-blue-600 selection:text-white">

      {/* ── SECTION 01: HERO ── */}
      <section className="relative pt-32 pb-20 lg:pt-36 lg:pb-28 bg-white border-b border-slate-200 overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-blue-50/80 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-[450px] h-[450px] bg-indigo-50/70 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-blue-700 font-mono text-xs font-bold tracking-widest uppercase shadow-2xs">
            <BookOpen className="w-4 h-4 text-blue-600" />
            ENTERPRISE REVENUE FRAMEWORKS &amp; EXECUTION RESOURCES
          </div>

          <div className="max-w-4xl space-y-4">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.1] font-heading">
              Frameworks &amp; Templates Hub
            </h1>

            <p className="text-xl sm:text-2xl font-bold text-blue-600 font-heading">
              Turn Revenue Strategy Into Structured Business Execution.
            </p>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-3xl">
              Access practical enterprise frameworks, assessment templates, maturity models, financial justification tools, operational checklists, and implementation playbooks designed to help organizations improve revenue performance.
            </p>

            <p className="text-sm text-slate-500 leading-relaxed max-w-3xl">
              The Frameworks &amp; Templates Hub brings together structured resources that help business leaders identify operational gaps, evaluate organizational capabilities, make informed investment decisions, standardize execution, and improve measurable business outcomes.
            </p>
          </div>

          {/* Action CTAs */}
          <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <button
              onClick={() => scrollToAnchor('playbooks')}
              className="px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-sm sm:text-base shadow-md shadow-blue-600/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Explore Frameworks</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <Link
              to="/book-consultation"
              className="px-8 py-4 rounded-xl bg-white hover:bg-slate-50 text-slate-900 font-bold text-sm sm:text-base border border-slate-300 shadow-2xs transition-all flex items-center justify-center gap-2"
            >
              <span>Book a Consultation</span>
              <ArrowUpRight className="w-4 h-4 text-blue-600" />
            </Link>
          </div>

          {/* Supporting Information Badges */}
          <div className="pt-6 border-t border-slate-200/80">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 block mb-3">
              Core Enterprise Revenue Disciplines Covered:
            </span>
            <div className="flex flex-wrap gap-2.5">
              {[
                'Revenue Strategy',
                'Sales Execution',
                'Revenue Operations',
                'Business Transformation',
                'Performance Measurement'
              ].map((badge, idx) => (
                <span
                  key={idx}
                  className="px-3.5 py-1.5 rounded-full bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-700 flex items-center gap-1.5 shadow-2xs"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />
                  <span>{badge}</span>
                </span>
              ))}
            </div>
          </div>

          {/* Revenue Operating System Visual Topology */}
          <div className="mt-10 p-6 sm:p-8 rounded-3xl bg-slate-50/70 border border-slate-200/90 shadow-xs relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600" />
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 pb-6 border-b border-slate-200">
              <div>
                <span className="text-xs font-mono font-bold text-blue-600 uppercase tracking-widest block mb-1">
                  Enterprise Revenue Operating System (RevOS)
                </span>
                <h3 className="text-xl font-bold text-slate-900 font-heading">
                  How Frameworks &amp; Templates Connect Strategy to Deterministic Outcomes
                </h3>
              </div>
              <span className="text-xs font-mono px-3 py-1 rounded-full bg-blue-100 text-blue-800 font-bold">
                Closed-Loop Governance
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 pt-6">
              {[
                { step: '01', title: 'Diagnostic Audits', desc: 'Quantitative assessments identify pipeline drag, CRM data rot, and capability gaps.', icon: Search },
                { step: '02', title: 'Target Architecture', desc: '5-level maturity models and business cases structure realistic transformation roadmaps.', icon: Compass },
                { step: '03', title: 'Field Execution', desc: 'Standardized playbooks, stage-gate checklists, and SOPs govern daily rep activities.', icon: Workflow },
                { step: '04', title: 'Value Realization', desc: 'Deterministic financial ROI models measure CAC payback and Net Revenue Retention.', icon: BarChart3 }
              ].map((item, idx) => {
                const ItemIcon = item.icon;
                return (
                  <div key={idx} className="p-4 rounded-2xl bg-white border border-slate-200/80 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs font-black text-blue-600">{item.step}</span>
                      <ItemIcon className="w-4 h-4 text-slate-500" />
                    </div>
                    <h4 className="text-sm font-bold text-slate-900 font-heading">{item.title}</h4>
                    <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </section>

      {/* ── SECTION 02: STICKY SUB-NAVIGATION BAR (8 CAPABILITY ANCHORS) ── */}
      <nav className="sticky top-16 z-30 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-2xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-3 py-3 overflow-x-auto no-scrollbar">
            <div className="flex items-center gap-1.5 shrink-0">
              {HUB_CATEGORIES.map((cat) => {
                const isActive = activeAnchor === cat.anchor;
                return (
                  <button
                    key={cat.id}
                    onClick={() => scrollToAnchor(cat.anchor)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all shrink-0 cursor-pointer flex items-center gap-1.5 ${
                      isActive
                        ? 'bg-blue-600 text-white shadow-xs'
                        : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border border-slate-200/80'
                    }`}
                  >
                    <span className="font-mono text-[10px] opacity-75">{cat.number}</span>
                    <span>{cat.heading.split(' ')[0]} {cat.heading.split(' ')[1] || ''}</span>
                  </button>
                );
              })}
            </div>

            <div className="hidden lg:flex items-center gap-2 shrink-0 border-l border-slate-200 pl-3">
              <button
                onClick={() => scrollToAnchor('roi-models')}
                className="px-2.5 py-1.5 rounded-lg text-xs font-mono font-bold bg-blue-50 text-blue-700 hover:bg-blue-100 transition-colors flex items-center gap-1 cursor-pointer"
              >
                <Calculator className="w-3.5 h-3.5" />
                <span>ROI Models</span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* ── SECTION 03: HUB OVERVIEW (EIGHT RESOURCE CATEGORIES GRID) ── */}
      <section className="py-20 lg:py-24 bg-slate-50/70 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-blue-600">
              Eight Curated Resource Disciplines
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading tracking-tight">
              Frameworks, Diagnostics &amp; Operational Resources
            </h2>
            <p className="text-base text-slate-600">
              Explore the eight main categories below. Every category contains verified enterprise templates, structured rubrics, and interactive tools.
            </p>
          </div>

          {/* 2-Column Desktop Grid matching Resources Hub submenu design */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {HUB_CATEGORIES.map((cat, idx) => {
              const icons = [BookOpen, CheckCircle2, Award, DollarSign, Calculator, Sliders, Workflow, Users];
              const IconComp = icons[idx] || FileText;

              return (
                <div
                  key={cat.id}
                  onClick={() => scrollToAnchor(cat.anchor)}
                  className="p-6 sm:p-7 rounded-3xl bg-white border border-slate-200/90 hover:border-blue-400 hover:shadow-xl hover:shadow-blue-900/5 transition-all flex flex-col justify-between group cursor-pointer relative overflow-hidden"
                >
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600" />
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">
                          <IconComp className="w-5 h-5" />
                        </div>
                        <span className="text-xs font-mono font-bold text-blue-700 bg-blue-50/70 border border-blue-200 px-2.5 py-0.5 rounded-full">
                          CATEGORY {cat.number}
                        </span>
                      </div>
                      <span className="text-[10px] font-mono font-bold uppercase px-2 py-0.5 rounded bg-slate-100 text-slate-600">
                        {cat.label}
                      </span>
                    </div>

                    <h3 className="text-xl font-extrabold text-slate-900 font-heading group-hover:text-blue-600 transition-colors">
                      {cat.heading}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3">
                      {cat.description}
                    </p>
                  </div>

                  <div className="pt-6 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-blue-600 group-hover:translate-x-1 transition-transform">
                    <span>Explore {cat.heading.split(' ')[0]} &amp; Resources</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ── SECTION 04: THE EIGHT DETAILED CATEGORY SECTIONS ── */}
      <main className="divide-y divide-slate-200">
        
        {/* ── CATEGORY 01: PLAYBOOKS ── */}
        <section id="playbooks" className="scroll-mt-24 py-20 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            
            {/* 1. Category Hero */}
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6 border-b border-slate-200">
              <div className="space-y-3 max-w-3xl">
                <div className="flex items-center gap-2.5">
                  <span className="text-xs font-mono font-bold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                    CATEGORY 01 // 08
                  </span>
                  <span className="text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200">
                    PLAYBOOKS
                  </span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading tracking-tight">
                  Enterprise Revenue &amp; Sales Playbooks
                </h2>
                <p className="text-base sm:text-lg font-bold text-slate-700 font-heading">
                  Standardized execution guides establishing repeatable processes across customer acquisition, deal progression, and expansion.
                </p>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-2xl">
                  Eliminate reliance on individual intuition. Deploy 8 battle-tested enterprise playbooks that standardize daily sales motions, qualification rigor, and post-sale expansion.
                </p>
              </div>

              <div className="shrink-0">
                <Link
                  to="/book-consultation"
                  className="px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-mono font-bold transition-all flex items-center gap-2 shadow-xs cursor-pointer"
                >
                  <Briefcase className="w-3.5 h-3.5" />
                  <span>Request Custom Playbook Audit</span>
                </Link>
              </div>
            </div>

            {/* 2. Business Challenges Addressed */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { title: 'Inconsistent Sales Execution', desc: 'Reps invent their own individual processes, leading to unpredictable forecast variances and high win-rate volatility.' },
                { title: 'Pipeline Stalling Drag', desc: 'Deals linger in discovery and validation stages without clear customer exit milestones or Mutual Action Plans.' },
                { title: 'Siloed Handoff Friction', desc: 'Context is lost when accounts transition between SDRs, AEs, and CSMs, creating buyer skepticism and onboarding delays.' },
                { title: 'Extended Rep Ramp-Up Time', desc: 'New sales hires require 6–9 months of trial-and-error to understand ideal customer profile triggers and buyer objections.' }
              ].map((item, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-slate-50/80 border border-slate-200/80 space-y-1.5">
                  <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-rose-600">
                    <AlertTriangle className="w-3.5 h-3.5 shrink-0" />
                    <span>Challenge 0{idx + 1}</span>
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 font-heading">{item.title}</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* 3. Resource Library Grid (8 Playbooks) */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500">
                  8 Production Enterprise Playbooks
                </span>
                <span className="text-xs font-mono text-blue-600 font-bold">Select a playbook below to inspect stages</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {PLAYBOOK_RESOURCES.map((pb) => {
                  const isSelected = activePlaybookId === pb.id;
                  return (
                    <div
                      key={pb.id}
                      onClick={() => setActivePlaybookId(pb.id)}
                      className={`p-5 rounded-2xl border transition-all cursor-pointer space-y-3 flex flex-col justify-between ${
                        isSelected
                          ? 'bg-blue-50/70 border-blue-400 shadow-md ring-2 ring-blue-500/20'
                          : 'bg-white hover:bg-slate-50 border-slate-200/90 shadow-2xs'
                      }`}
                    >
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-slate-100 text-slate-700 border border-slate-200">
                            {pb.badge}
                          </span>
                          {isSelected && <Check className="w-4 h-4 text-blue-600" />}
                        </div>
                        <h4 className="text-sm font-bold text-slate-900 font-heading">{pb.title}</h4>
                        <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">{pb.description}</p>
                      </div>

                      <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono text-blue-600 font-semibold">
                        <span>Inspect Stages</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* 4. Interactive Playbook Inspector Workbench */}
            <div className="p-6 sm:p-8 rounded-3xl bg-slate-900 text-white border border-slate-800 shadow-xl space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-4">
                <div>
                  <span className="text-xs font-mono font-bold text-blue-400 uppercase tracking-widest block mb-1">
                    Playbook Execution Workbench // {activePlaybook.badge}
                  </span>
                  <h3 className="text-2xl font-bold font-heading text-white">
                    {activePlaybook.title}
                  </h3>
                </div>
                <span className="text-xs font-mono text-slate-400">Target Audience: {activePlaybook.targetAudience}</span>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                {/* Left: Stages Flow */}
                <div className="lg:col-span-7 space-y-3">
                  <span className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider block">
                    Execution Stages &amp; Milestones:
                  </span>
                  <div className="space-y-2">
                    {activePlaybook.coreStages.map((stage, sIdx) => (
                      <div key={sIdx} className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 flex items-start gap-3">
                        <span className="w-6 h-6 rounded-full bg-blue-600/30 text-blue-400 font-mono text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                          {sIdx + 1}
                        </span>
                        <span className="text-xs sm:text-sm text-slate-200 font-medium leading-relaxed">{stage}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right: Operational Details */}
                <div className="lg:col-span-5 space-y-4">
                  <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
                    <span className="text-xs font-mono font-bold text-blue-400 uppercase block">Operational Inputs:</span>
                    <ul className="space-y-1 text-xs text-slate-300 font-mono">
                      {activePlaybook.operationalInputs.map((inp, iIdx) => (
                        <li key={iIdx} className="flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                          <span>{inp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
                    <span className="text-xs font-mono font-bold text-emerald-400 uppercase block">Expected Deliverables:</span>
                    <ul className="space-y-1 text-xs text-slate-300 font-mono">
                      {activePlaybook.expectedOutputs.map((out, oIdx) => (
                        <li key={oIdx} className="flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                          <span>{out}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
                    <span className="text-xs font-mono font-bold text-indigo-400 uppercase block">Core Governance KPIs:</span>
                    <div className="flex flex-wrap gap-1.5">
                      {activePlaybook.kpis.map((kpi, kIdx) => (
                        <span key={kIdx} className="text-[11px] font-mono px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-slate-300">
                          {kpi}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Best Practices Row */}
              <div className="pt-4 border-t border-slate-800 space-y-2">
                <span className="text-xs font-mono font-bold text-slate-400 uppercase block">Field Best Practices:</span>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  {activePlaybook.bestPractices.map((bp, bIdx) => (
                    <div key={bIdx} className="p-3 rounded-xl bg-slate-950/60 border border-slate-800 text-xs text-slate-300 leading-relaxed">
                      {bp}
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* ── CATEGORY 02: ASSESSMENT TEMPLATES ── */}
        <section id="assessment-templates" className="scroll-mt-24 py-20 lg:py-24 bg-slate-50/70">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            
            {/* 1. Category Hero */}
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6 border-b border-slate-200">
              <div className="space-y-3 max-w-3xl">
                <div className="flex items-center gap-2.5">
                  <span className="text-xs font-mono font-bold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                    CATEGORY 02 // 08
                  </span>
                  <span className="text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200">
                    DIAGNOSTICS
                  </span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading tracking-tight">
                  Enterprise Assessment &amp; Diagnostic Templates
                </h2>
                <p className="text-base sm:text-lg font-bold text-slate-700 font-heading">
                  Systematic audit tools designed to identify operational gaps, pipeline leakage, and organizational readiness.
                </p>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-2xl">
                  Before investing in expensive software or restructuring teams, understand your baseline operational capabilities across 8 critical revenue vectors.
                </p>
              </div>

              <div className="shrink-0">
                <Link
                  to="/book-consultation"
                  className="px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-mono font-bold transition-all flex items-center gap-2 shadow-xs cursor-pointer"
                >
                  <Search className="w-3.5 h-3.5" />
                  <span>Book Guided Diagnostic Review</span>
                </Link>
              </div>
            </div>

            {/* Assessment Selector Pills */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar">
              {ASSESSMENT_RESOURCES.map((ass) => {
                const isSelected = activeAssessmentId === ass.id;
                return (
                  <button
                    key={ass.id}
                    onClick={() => {
                      setActiveAssessmentId(ass.id);
                      setAssessmentAnswers({});
                    }}
                    className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all shrink-0 cursor-pointer border ${
                      isSelected
                        ? 'bg-blue-600 border-blue-600 text-white shadow-xs'
                        : 'bg-white hover:bg-slate-100 text-slate-700 border-slate-200'
                    }`}
                  >
                    {ass.title}
                  </button>
                );
              })}
            </div>

            {/* Interactive Assessment Evaluation Tool */}
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-8">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-4">
                <div>
                  <span className="text-xs font-mono font-bold text-blue-600 uppercase tracking-widest block mb-1">
                    Live Diagnostic Instrument
                  </span>
                  <h3 className="text-2xl font-bold font-heading text-slate-900">
                    {activeAssessment.title}
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">{activeAssessment.description}</p>
                </div>
                <div className="p-3 rounded-xl bg-blue-50 border border-blue-200 text-right shrink-0">
                  <span className="text-[10px] font-mono text-blue-700 uppercase font-bold block">Current Score</span>
                  <span className="text-2xl font-black text-blue-900 font-mono">{totalScore} Points</span>
                </div>
              </div>

              {/* Questions List */}
              <div className="space-y-6">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 block">
                  Evaluation Rubric Questions:
                </span>

                {activeAssessment.diagnosticQuestions.map((q, qIdx) => (
                  <div key={qIdx} className="p-5 rounded-2xl bg-slate-50/70 border border-slate-200 space-y-3">
                    <h4 className="text-sm font-bold text-slate-900 font-heading">
                      {qIdx + 1}. {q.question}
                    </h4>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {q.options.map((opt, oIdx) => {
                        const isSelected = assessmentAnswers[qIdx] === opt.score;
                        return (
                          <button
                            key={oIdx}
                            onClick={() => {
                              setAssessmentAnswers((prev) => ({ ...prev, [qIdx]: opt.score }));
                            }}
                            className={`p-3 rounded-xl text-left text-xs transition-all cursor-pointer border flex items-start gap-2.5 ${
                              isSelected
                                ? 'bg-blue-600 border-blue-600 text-white font-semibold shadow-xs'
                                : 'bg-white hover:bg-slate-100 border-slate-200 text-slate-700'
                            }`}
                          >
                            <span className="w-5 h-5 rounded-full border border-current flex items-center justify-center shrink-0 text-[10px] font-mono">
                              {opt.score}
                            </span>
                            <span className="leading-relaxed">{opt.text}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>

              {/* Scoring Interpretation Matrix */}
              <div className="space-y-3 pt-4 border-t border-slate-200">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 block">
                  Scoring Rubric &amp; Prescribed Action Plan:
                </span>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
                  {activeAssessment.scoringRubric.map((rubric, rIdx) => (
                    <div key={rIdx} className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                      <span className="text-xs font-mono font-bold text-blue-700 px-2 py-0.5 rounded bg-blue-100/70 inline-block">
                        {rubric.range}
                      </span>
                      <h5 className="text-xs font-bold text-slate-900 font-heading">{rubric.interpretation}</h5>
                      <p className="text-[11px] text-slate-600 leading-relaxed font-sans">{rubric.priorityAction}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-900 text-white flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono">
                <span className="text-slate-300">Deliverable: {activeAssessment.outputDeliverable}</span>
                <button
                  onClick={() => setAssessmentAnswers({})}
                  className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 flex items-center gap-1 cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Reset Answers</span>
                </button>
              </div>
            </div>

          </div>
        </section>

        {/* ── CATEGORY 03: MATURITY MODELS ── */}
        <section id="maturity-models" className="scroll-mt-24 py-20 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            
            {/* 1. Category Hero */}
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6 border-b border-slate-200">
              <div className="space-y-3 max-w-3xl">
                <div className="flex items-center gap-2.5">
                  <span className="text-xs font-mono font-bold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                    CATEGORY 03 // 08
                  </span>
                  <span className="text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200">
                    MATURITY
                  </span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading tracking-tight">
                  Enterprise Capability Maturity Models
                </h2>
                <p className="text-base sm:text-lg font-bold text-slate-700 font-heading">
                  Standardized 5-level progression matrices to assess current capabilities and plan realistic operational advancement.
                </p>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-2xl">
                  Do not jump straight to AI without foundational process discipline. Use these 5-level matrices to define realistic 12-month capability roadmaps.
                </p>
              </div>

              <div className="shrink-0">
                <button
                  onClick={() => scrollToAnchor('roi-models')}
                  className="px-5 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-900 text-xs font-mono font-bold transition-all flex items-center gap-2 border border-slate-300 cursor-pointer"
                >
                  <Calculator className="w-3.5 h-3.5 text-blue-600" />
                  <span>Model Payback</span>
                </button>
              </div>
            </div>

            {/* Model Selector Pills */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar">
              {MATURITY_MODEL_RESOURCES.map((mod) => {
                const isSelected = activeMaturityId === mod.id;
                return (
                  <button
                    key={mod.id}
                    onClick={() => setActiveMaturityId(mod.id)}
                    className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all shrink-0 cursor-pointer border ${
                      isSelected
                        ? 'bg-blue-600 border-blue-600 text-white shadow-xs'
                        : 'bg-white hover:bg-slate-100 text-slate-700 border-slate-200'
                    }`}
                  >
                    {mod.title}
                  </button>
                );
              })}
            </div>

            {/* 5-Level Maturity Matrix Display */}
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 font-heading">{activeMaturityModel.title}</h3>
                  <p className="text-xs text-slate-500">{activeMaturityModel.description}</p>
                </div>
                <span className="text-xs font-mono text-slate-500 font-bold">Standard 5-Level Architecture</span>
              </div>

              {/* Level Selector Tabs */}
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
                {activeMaturityModel.levels.map((lvl) => {
                  const isSelected = activeMaturityLevel === lvl.level;
                  return (
                    <button
                      key={lvl.level}
                      onClick={() => setActiveMaturityLevel(lvl.level)}
                      className={`p-3 rounded-xl text-left transition-all cursor-pointer border ${
                        isSelected
                          ? 'bg-blue-600 border-blue-600 text-white shadow-md'
                          : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200'
                      }`}
                    >
                      <span className="text-[10px] font-mono font-bold block opacity-80">LEVEL 0{lvl.level}</span>
                      <span className="text-xs font-bold leading-tight block mt-0.5">{lvl.name.split('—')[1] || lvl.name}</span>
                    </button>
                  );
                })}
              </div>

              {/* Active Level Detail Card */}
              {(() => {
                const currentLevel = activeMaturityModel.levels.find((l) => l.level === activeMaturityLevel) || activeMaturityModel.levels[0];
                return (
                  <div className="p-6 sm:p-8 rounded-3xl bg-slate-900 text-white border border-slate-800 shadow-xl space-y-6">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-4">
                      <div>
                        <span className="text-xs font-mono font-bold text-blue-400 uppercase tracking-widest block mb-1">
                          Operational Profile
                        </span>
                        <h4 className="text-2xl font-bold font-heading text-white">
                          {currentLevel.name}
                        </h4>
                      </div>
                      <span className="text-xs font-mono px-3 py-1 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                        Process State: {currentLevel.processState}
                      </span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
                        <span className="text-xs font-mono font-bold text-blue-400 uppercase block">Observable Characteristics:</span>
                        <ul className="space-y-1.5 text-xs text-slate-300">
                          {currentLevel.characteristics.map((c, cIdx) => (
                            <li key={cIdx} className="flex items-start gap-2">
                              <span className="text-blue-500 font-bold mt-0.5">•</span>
                              <span>{c}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-3">
                        <div>
                          <span className="text-xs font-mono font-bold text-indigo-400 uppercase block mb-1">Automation Level:</span>
                          <p className="text-xs text-slate-300">{currentLevel.automationLevel}</p>
                        </div>
                        <div className="pt-2 border-t border-slate-800">
                          <span className="text-xs font-mono font-bold text-cyan-400 uppercase block mb-1">Data Maturity:</span>
                          <p className="text-xs text-slate-300">{currentLevel.dataMaturity}</p>
                        </div>
                      </div>

                      <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
                        <span className="text-xs font-mono font-bold text-emerald-400 uppercase block">Actions to Advance to Next Level:</span>
                        <ul className="space-y-1.5 text-xs text-slate-300">
                          {currentLevel.recommendedActions.map((act, aIdx) => (
                            <li key={aIdx} className="flex items-start gap-2">
                              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                              <span>{act}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-slate-800 text-xs font-mono text-slate-400">
                      <span>Guidance: {activeMaturityModel.evaluationGuidance}</span>
                    </div>
                  </div>
                );
              })()}
            </div>

          </div>
        </section>

        {/* ── CATEGORY 04: BUSINESS CASES ── */}
        <section id="business-cases" className="scroll-mt-24 py-20 lg:py-24 bg-slate-50/70">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            
            {/* 1. Category Hero */}
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6 border-b border-slate-200">
              <div className="space-y-3 max-w-3xl">
                <div className="flex items-center gap-2.5">
                  <span className="text-xs font-mono font-bold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                    CATEGORY 04 // 08
                  </span>
                  <span className="text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200">
                    JUSTIFICATION
                  </span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading tracking-tight">
                  Business Case Development Frameworks
                </h2>
                <p className="text-base sm:text-lg font-bold text-slate-700 font-heading">
                  Executive-ready justification templates to articulate problems, quantify benefits, and secure board sign-off.
                </p>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-2xl">
                  Transform technical proposals into board-ready capital investment cases with explicit payback metrics, risk mitigations, and governance gates.
                </p>
              </div>

              <div className="shrink-0">
                <Link
                  to="/book-consultation"
                  className="px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-mono font-bold transition-all flex items-center gap-2 shadow-xs cursor-pointer"
                >
                  <DollarSign className="w-3.5 h-3.5" />
                  <span>Request Custom Business Case Review</span>
                </Link>
              </div>
            </div>

            {/* 6 Business Case Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {BUSINESS_CASE_RESOURCES.map((bc) => {
                const isSelected = activeBusinessCaseId === bc.id;
                return (
                  <div
                    key={bc.id}
                    onClick={() => setActiveBusinessCaseId(bc.id)}
                    className={`p-6 rounded-3xl border transition-all cursor-pointer flex flex-col justify-between space-y-4 group relative overflow-hidden ${
                      isSelected
                        ? 'bg-white border-blue-400 shadow-lg ring-2 ring-blue-500/20'
                        : 'bg-white hover:border-slate-300 border-slate-200/90 shadow-2xs'
                    }`}
                  >
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600" />
                    
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-mono font-bold text-blue-700 bg-blue-50 border border-blue-200 px-2.5 py-0.5 rounded-full">
                          {bc.badge}
                        </span>
                        {isSelected && <Check className="w-4 h-4 text-blue-600" />}
                      </div>

                      <h3 className="text-lg font-bold text-slate-900 font-heading group-hover:text-blue-600 transition-colors">
                        {bc.title}
                      </h3>

                      <p className="text-xs text-slate-600 leading-relaxed">
                        {bc.description}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-blue-600">
                      <span>Inspect Template</span>
                      <ChevronRight className="w-4 h-4" />
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Selected Business Case Detailed Blueprint */}
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-8">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-4">
                <div>
                  <span className="text-xs font-mono font-bold text-blue-600 uppercase tracking-widest block mb-1">
                    CFO-Ready Justification Template
                  </span>
                  <h3 className="text-2xl font-bold font-heading text-slate-900">
                    {activeBusinessCase.title}
                  </h3>
                </div>
                <span className="text-xs font-mono px-3 py-1 rounded-full bg-slate-100 text-slate-700 font-bold border border-slate-200">
                  {activeBusinessCase.badge}
                </span>
              </div>

              <div className="p-5 rounded-2xl bg-blue-50/60 border border-blue-200/80 space-y-2">
                <span className="text-xs font-mono font-bold text-blue-800 uppercase block">Executive Summary:</span>
                <p className="text-xs sm:text-sm text-slate-800 leading-relaxed">{activeBusinessCase.executiveSummary}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                  <span className="text-xs font-mono font-bold text-rose-700 uppercase block">Core Business Problem:</span>
                  <p className="text-xs text-slate-700 leading-relaxed">{activeBusinessCase.businessProblem}</p>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                  <span className="text-xs font-mono font-bold text-blue-700 uppercase block">Proposed Architecture Solution:</span>
                  <p className="text-xs text-slate-700 leading-relaxed">{activeBusinessCase.proposedSolution}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                  <span className="text-xs font-mono font-bold text-slate-600 uppercase block">Investment Categories:</span>
                  <ul className="space-y-1 text-xs text-slate-700">
                    {activeBusinessCase.investmentCategories.map((cat, cIdx) => (
                      <li key={cIdx} className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0" />
                        <span>{cat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-5 rounded-2xl bg-emerald-50/50 border border-emerald-200 space-y-2">
                  <span className="text-xs font-mono font-bold text-emerald-800 uppercase block">Projected Business Benefits:</span>
                  <ul className="space-y-1 text-xs text-slate-700">
                    {activeBusinessCase.expectedBenefits.map((ben, bIdx) => (
                      <li key={bIdx} className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>{ben}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                  <span className="text-xs font-mono font-bold text-slate-600 uppercase block">Decision &amp; Approval Gateways:</span>
                  <ul className="space-y-1 text-xs text-slate-700">
                    {activeBusinessCase.decisionGateways.map((gate, gIdx) => (
                      <li key={gIdx} className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 shrink-0" />
                        <span>{gate}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-2 text-xs font-mono text-slate-500 border-t border-slate-100 flex items-center justify-between">
                <span>Measurement Framework: {activeBusinessCase.measurementFramework}</span>
                <span className="text-slate-400">All projections illustrative</span>
              </div>
            </div>

          </div>
        </section>

        {/* ── CATEGORY 05: ROI MODELS & CALCULATORS ── */}
        <section id="roi-models" className="scroll-mt-24 py-20 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            
            {/* 1. Category Hero */}
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6 border-b border-slate-200">
              <div className="space-y-3 max-w-3xl">
                <div className="flex items-center gap-2.5">
                  <span className="text-xs font-mono font-bold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                    CATEGORY 05 // 08
                  </span>
                  <span className="text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200">
                    ROI
                  </span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading tracking-tight">
                  Financial ROI &amp; Value Measurement Models
                </h2>
                <p className="text-base sm:text-lg font-bold text-slate-700 font-heading">
                  Mathematical formulas and interactive calculators connecting operational improvements to verified economic value.
                </p>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-2xl">
                  Replace marketing hyperbole with rigorous corporate finance formulas. Use the interactive calculators below to model time savings, payback velocity, and net economic returns.
                </p>
              </div>

              <div className="shrink-0">
                <Link
                  to="/book-consultation"
                  className="px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-mono font-bold transition-all flex items-center gap-2 shadow-xs cursor-pointer"
                >
                  <Calculator className="w-3.5 h-3.5" />
                  <span>Model Custom Financial Business Case</span>
                </Link>
              </div>
            </div>

            {/* 2 Live Interactive Financial Calculators */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              
              {/* Calculator 1: AI Sales Automation ROI */}
              <div className="p-6 sm:p-8 rounded-3xl bg-slate-50/70 border border-slate-200 shadow-sm space-y-6 relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-indigo-600" />
                <div className="space-y-1">
                  <span className="text-xs font-mono font-bold text-blue-600 uppercase">Interactive Calculator 01</span>
                  <h3 className="text-xl font-bold font-heading text-slate-900">AI Sales Automation ROI Calculator</h3>
                  <p className="text-xs text-slate-500">Model rep time reclaimed from admin work and its direct net financial yield.</p>
                </div>

                <div className="space-y-4 text-xs font-mono">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-slate-600">Sales Representatives Count:</span>
                      <span className="font-bold text-slate-900">{calc1Reps} Reps</span>
                    </div>
                    <input
                      type="range"
                      min="2"
                      max="100"
                      step="1"
                      value={calc1Reps}
                      onChange={(e) => setCalc1Reps(Number(e.target.value))}
                      className="w-full accent-blue-600"
                    />
                  </div>

                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-slate-600">Reclaimed Hours per Rep / Month:</span>
                      <span className="font-bold text-slate-900">{calc1HoursSaved} Hours/Mo</span>
                    </div>
                    <input
                      type="range"
                      min="4"
                      max="40"
                      step="2"
                      value={calc1HoursSaved}
                      onChange={(e) => setCalc1HoursSaved(Number(e.target.value))}
                      className="w-full accent-blue-600"
                    />
                  </div>

                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-slate-600">Blended Rep Loaded Hourly Cost:</span>
                      <span className="font-bold text-slate-900">${calc1RepRate}/Hour</span>
                    </div>
                    <input
                      type="range"
                      min="35"
                      max="150"
                      step="5"
                      value={calc1RepRate}
                      onChange={(e) => setCalc1RepRate(Number(e.target.value))}
                      className="w-full accent-blue-600"
                    />
                  </div>

                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-slate-600">Projected Incremental Closed ARR:</span>
                      <span className="font-bold text-slate-900">${calc1IncrementalARR.toLocaleString()}</span>
                    </div>
                    <input
                      type="range"
                      min="50000"
                      max="2000000"
                      step="25000"
                      value={calc1IncrementalARR}
                      onChange={(e) => setCalc1IncrementalARR(Number(e.target.value))}
                      className="w-full accent-blue-600"
                    />
                  </div>

                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-slate-600">Annual Automation Platform Investment:</span>
                      <span className="font-bold text-slate-900">${calc1AnnualCost.toLocaleString()}</span>
                    </div>
                    <input
                      type="range"
                      min="10000"
                      max="250000"
                      step="5000"
                      value={calc1AnnualCost}
                      onChange={(e) => setCalc1AnnualCost(Number(e.target.value))}
                      className="w-full accent-blue-600"
                    />
                  </div>
                </div>

                {/* Calculation Outputs */}
                <div className="p-5 rounded-2xl bg-white border border-blue-200/80 space-y-3 font-mono">
                  <div className="flex justify-between text-xs">
                    <span className="text-slate-600">Annual Reclaimed Labor Value:</span>
                    <span className="font-bold text-slate-800">${annualLaborSavings.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-slate-600">Total Annual Gross Benefit:</span>
                    <span className="font-bold text-slate-800">${totalFinancialBenefit.toLocaleString()}</span>
                  </div>
                  <div className="pt-2 border-t border-slate-200 flex justify-between items-end">
                    <div>
                      <span className="text-[10px] uppercase text-blue-700 font-bold block">Net Projected ROI</span>
                      <span className="text-2xl font-black text-blue-900">{netROI}%</span>
                    </div>
                    <span className="text-xs font-bold text-emerald-700 bg-emerald-100 px-2.5 py-1 rounded-full">
                      Payback &lt; 3 Months
                    </span>
                  </div>
                </div>
              </div>

              {/* Calculator 2: CAC Payback Period */}
              <div className="p-6 sm:p-8 rounded-3xl bg-slate-50/70 border border-slate-200 shadow-sm space-y-6 relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-600 to-teal-600" />
                <div className="space-y-1">
                  <span className="text-xs font-mono font-bold text-emerald-700 uppercase">Interactive Calculator 02</span>
                  <h3 className="text-xl font-bold font-heading text-slate-900">CAC Payback Velocity Calculator</h3>
                  <p className="text-xs text-slate-500">Calculate exact months to recover fully loaded customer acquisition costs.</p>
                </div>

                <div className="space-y-4 text-xs font-mono">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-slate-600">Blended Customer Acquisition Cost (CAC):</span>
                      <span className="font-bold text-slate-900">${calc2CAC.toLocaleString()}</span>
                    </div>
                    <input
                      type="range"
                      min="5000"
                      max="100000"
                      step="2500"
                      value={calc2CAC}
                      onChange={(e) => setCalc2CAC(Number(e.target.value))}
                      className="w-full accent-emerald-600"
                    />
                  </div>

                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-slate-600">Average Contract Monthly Revenue (MRR):</span>
                      <span className="font-bold text-slate-900">${calc2MRR.toLocaleString()}/mo</span>
                    </div>
                    <input
                      type="range"
                      min="500"
                      max="20000"
                      step="250"
                      value={calc2MRR}
                      onChange={(e) => setCalc2MRR(Number(e.target.value))}
                      className="w-full accent-emerald-600"
                    />
                  </div>

                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-slate-600">Gross Margin Percentage:</span>
                      <span className="font-bold text-slate-900">{calc2Margin}%</span>
                    </div>
                    <input
                      type="range"
                      min="50"
                      max="95"
                      step="1"
                      value={calc2Margin}
                      onChange={(e) => setCalc2Margin(Number(e.target.value))}
                      className="w-full accent-emerald-600"
                    />
                  </div>
                </div>

                {/* Formula Display */}
                <div className="p-3.5 rounded-xl bg-slate-900 text-center font-mono text-xs font-bold text-emerald-400">
                  Payback Period = CAC / (MRR × Gross Margin %)
                </div>

                {/* Calculation Outputs */}
                <div className="p-5 rounded-2xl bg-white border border-emerald-200/80 space-y-3 font-mono">
                  <div className="flex justify-between text-xs">
                    <span className="text-slate-600">Monthly Gross Profit Contribution:</span>
                    <span className="font-bold text-slate-800">${Math.round(monthlyGrossMargin).toLocaleString()}/mo</span>
                  </div>
                  <div className="pt-2 border-t border-slate-200 flex justify-between items-end">
                    <div>
                      <span className="text-[10px] uppercase text-emerald-800 font-bold block">CAC Payback Timeline</span>
                      <span className="text-2xl font-black text-emerald-950">{cacPaybackMonths} Months</span>
                    </div>
                    <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${
                      Number(cacPaybackMonths) <= 12
                        ? 'bg-emerald-100 text-emerald-800'
                        : 'bg-amber-100 text-amber-800'
                    }`}>
                      {Number(cacPaybackMonths) <= 12 ? 'Tier-1 SaaS Velocity' : 'Acceptable Enterprise'}
                    </span>
                  </div>
                </div>
              </div>

            </div>

            {/* 8 Core ROI Models Reference Directory */}
            <div className="space-y-6 pt-6 border-t border-slate-200">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600">
                    Comprehensive Financial Formulas
                  </span>
                  <h3 className="text-2xl font-bold font-heading text-slate-900">
                    8 Revenue Evaluation Mathematical Models
                  </h3>
                </div>
                <span className="text-xs font-mono text-slate-500 font-bold">Audited Formulations</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {ROI_MODEL_RESOURCES.map((mod) => (
                  <div
                    key={mod.id}
                    className="p-5 rounded-2xl bg-white border border-slate-200 hover:border-blue-300 shadow-2xs space-y-3 flex flex-col justify-between"
                  >
                    <div className="space-y-2">
                      <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-blue-50 text-blue-700 border border-blue-200">
                        {mod.badge}
                      </span>
                      <h4 className="text-sm font-bold text-slate-900 font-heading">{mod.title}</h4>
                      <div className="p-2.5 rounded-xl bg-slate-900 text-blue-300 font-mono text-[11px] font-bold text-center">
                        {mod.formula}
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed">{mod.businessInterpretation}</p>
                    </div>

                    <div className="pt-2 border-t border-slate-100 text-[11px] font-mono text-slate-500">
                      <span>Example: {mod.exampleCalculation.slice(0, 70)}...</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* ── CATEGORY 06: CHECKLISTS ── */}
        <section id="checklists" className="scroll-mt-24 py-20 lg:py-24 bg-slate-50/70">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            
            {/* 1. Category Hero */}
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6 border-b border-slate-200">
              <div className="space-y-3 max-w-3xl">
                <div className="flex items-center gap-2.5">
                  <span className="text-xs font-mono font-bold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                    CATEGORY 06 // 08
                  </span>
                  <span className="text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200">
                    HYGIENE
                  </span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading tracking-tight">
                  Enterprise Execution &amp; Governance Checklists
                </h2>
                <p className="text-base sm:text-lg font-bold text-slate-700 font-heading">
                  Interactive stage-gate verification checklists to eliminate deal slippage, preserve CRM hygiene, and enforce compliance.
                </p>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-2xl">
                  Tick off items in real-time. Use these operational checklists during weekly deal inspections and stage-gate progression reviews.
                </p>
              </div>

              <div className="shrink-0">
                <button
                  onClick={resetChecklist}
                  className="px-4 py-2.5 rounded-xl bg-white hover:bg-slate-100 text-slate-700 text-xs font-mono font-bold transition-all flex items-center gap-2 border border-slate-300 cursor-pointer shadow-2xs"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Reset Checklist</span>
                </button>
              </div>
            </div>

            {/* Checklist Selector Pills */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar">
              {CHECKLIST_RESOURCES.map((cl) => {
                const isSelected = activeChecklistId === cl.id;
                return (
                  <button
                    key={cl.id}
                    onClick={() => setActiveChecklistId(cl.id)}
                    className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all shrink-0 cursor-pointer border ${
                      isSelected
                        ? 'bg-blue-600 border-blue-600 text-white shadow-xs'
                        : 'bg-white hover:bg-slate-100 text-slate-700 border-slate-200'
                    }`}
                  >
                    {cl.title}
                  </button>
                );
              })}
            </div>

            {/* Interactive Tickable Checklist Panel */}
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-4">
                <div>
                  <span className="text-xs font-mono font-bold text-blue-600 uppercase tracking-widest block mb-1">
                    {activeChecklist.badge} // Verification Matrix
                  </span>
                  <h3 className="text-2xl font-bold font-heading text-slate-900">
                    {activeChecklist.title}
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">{activeChecklist.description}</p>
                </div>

                {/* Progress Bar & Counter */}
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-right shrink-0 min-w-44">
                  <div className="flex justify-between text-xs font-mono font-bold mb-1.5">
                    <span className="text-slate-600">Completed:</span>
                    <span className="text-blue-600">{completedCount} / {totalItemsCount}</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-slate-200 overflow-hidden">
                    <div
                      className="h-full bg-blue-600 transition-all duration-300"
                      style={{ width: `${completionPercentage}%` }}
                    />
                  </div>
                  <span className="text-[10px] font-mono text-slate-500 block mt-1">
                    {completionPercentage}% Stage-Gate Clear
                  </span>
                </div>
              </div>

              {/* Checklist Items */}
              <div className="space-y-3">
                {activeChecklist.items.map((item) => {
                  const isChecked = Boolean(checkedItems[item.id]);
                  return (
                    <div
                      key={item.id}
                      onClick={() => toggleCheckItem(item.id)}
                      className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-start gap-4 ${
                        isChecked
                          ? 'bg-blue-50/50 border-blue-200 text-slate-900'
                          : 'bg-white hover:bg-slate-50 border-slate-200 text-slate-700'
                      }`}
                    >
                      <div className={`w-5 h-5 rounded-md border flex items-center justify-center shrink-0 mt-0.5 transition-colors ${
                        isChecked
                          ? 'bg-blue-600 border-blue-600 text-white'
                          : 'border-slate-300 bg-white'
                      }`}>
                        {isChecked && <Check className="w-3.5 h-3.5 stroke-3" />}
                      </div>

                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-slate-100 text-slate-600">
                            {item.category}
                          </span>
                          <h4 className={`text-sm font-bold font-heading ${isChecked ? 'text-blue-900' : 'text-slate-900'}`}>
                            {item.label}
                          </h4>
                        </div>
                        <p className="text-xs text-slate-600 leading-relaxed font-sans">{item.detail}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs font-mono text-slate-500">
                <span>Cadence: {activeChecklist.cadence}</span>
                <span>Governance Note: {activeChecklist.governanceNote}</span>
              </div>
            </div>

          </div>
        </section>

        {/* ── CATEGORY 07: SOPS ── */}
        <section id="sops" className="scroll-mt-24 py-20 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            
            {/* 1. Category Hero */}
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6 border-b border-slate-200">
              <div className="space-y-3 max-w-3xl">
                <div className="flex items-center gap-2.5">
                  <span className="text-xs font-mono font-bold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                    CATEGORY 07 // 08
                  </span>
                  <span className="text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200">
                    SOPS
                  </span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading tracking-tight">
                  Standard Operating Procedures for Revenue Operations
                </h2>
                <p className="text-base sm:text-lg font-bold text-slate-700 font-heading">
                  Documented operational procedures establishing consistent ways of executing repeatable commercial activities.
                </p>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-2xl">
                  Every SOP contains purpose, scope, owner, systems required, step-by-step procedures, quality checks, and KPIs.
                </p>
              </div>

              <div className="shrink-0">
                <Link
                  to="/book-consultation"
                  className="px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-mono font-bold transition-all flex items-center gap-2 shadow-xs cursor-pointer"
                >
                  <Workflow className="w-3.5 h-3.5" />
                  <span>Request RevOps SOP Architecture Audit</span>
                </Link>
              </div>
            </div>

            {/* SOP Selector Pills */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar">
              {SOP_RESOURCES.map((sop) => {
                const isSelected = activeSopId === sop.id;
                return (
                  <button
                    key={sop.id}
                    onClick={() => {
                      setActiveSopId(sop.id);
                      setActiveSopStep(1);
                    }}
                    className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all shrink-0 cursor-pointer border ${
                      isSelected
                        ? 'bg-blue-600 border-blue-600 text-white shadow-xs'
                        : 'bg-white hover:bg-slate-100 text-slate-700 border-slate-200'
                    }`}
                  >
                    {sop.title.split(':')[1] || sop.title}
                  </button>
                );
              })}
            </div>

            {/* Interactive SOP Document Viewer */}
            <div className="p-6 sm:p-8 rounded-3xl bg-slate-900 text-white border border-slate-800 shadow-xl space-y-8">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-blue-500/20 text-blue-300 border border-blue-400/30">
                      {activeSop.badge}
                    </span>
                    <span className="text-xs font-mono text-slate-400">Owner: {activeSop.processOwner}</span>
                  </div>
                  <h3 className="text-2xl font-bold font-heading text-white">
                    {activeSop.title}
                  </h3>
                </div>
                <span className="text-xs font-mono text-slate-400">{activeSop.revisionHistory}</span>
              </div>

              {/* Purpose & Scope Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-1">
                  <span className="text-xs font-mono font-bold text-blue-400 uppercase block">Procedure Purpose:</span>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{activeSop.purpose}</p>
                </div>
                <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-1">
                  <span className="text-xs font-mono font-bold text-indigo-400 uppercase block">Operational Scope:</span>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{activeSop.scope}</p>
                </div>
              </div>

              {/* Step-by-Step Procedure Table */}
              <div className="space-y-3">
                <span className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider block">
                  Sequential Procedure Execution:
                </span>

                <div className="space-y-2">
                  {activeSop.steps.map((st) => (
                    <div
                      key={st.stepNumber}
                      className="p-4 rounded-2xl bg-slate-950 border border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-4"
                    >
                      <div className="flex items-start gap-3">
                        <span className="w-7 h-7 rounded-full bg-blue-600 text-white font-mono text-xs font-bold flex items-center justify-center shrink-0">
                          {st.stepNumber}
                        </span>
                        <div>
                          <h4 className="text-sm font-bold text-white font-heading">{st.action}</h4>
                          <span className="text-xs font-mono text-slate-400">System: {st.system} · Owner: {st.owner}</span>
                        </div>
                      </div>

                      <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800/80 text-xs font-mono text-emerald-400 md:max-w-sm">
                        <span className="font-bold text-slate-400 block text-[10px] uppercase">Verification Gate:</span>
                        <span>{st.verification}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Systems & KPIs */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t border-slate-800">
                <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
                  <span className="text-xs font-mono font-bold text-slate-400 uppercase block">Systems Required:</span>
                  <div className="flex flex-wrap gap-1.5">
                    {activeSop.systemsRequired.map((sys, sIdx) => (
                      <span key={sIdx} className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-300">
                        {sys}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
                  <span className="text-xs font-mono font-bold text-blue-400 uppercase block">Quality Checks:</span>
                  <ul className="space-y-1 text-xs text-slate-300">
                    {activeSop.qualityChecks.map((qc, qIdx) => (
                      <li key={qIdx} className="flex items-start gap-1.5">
                        <span className="text-blue-400">•</span>
                        <span>{qc}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
                  <span className="text-xs font-mono font-bold text-emerald-400 uppercase block">Target SLAs &amp; KPIs:</span>
                  <ul className="space-y-1 text-xs text-slate-300">
                    {activeSop.kpis.map((kp, kIdx) => (
                      <li key={kIdx} className="flex items-start gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{kp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* ── CATEGORY 08: WORKSHOPS ── */}
        <section id="workshops" className="scroll-mt-24 py-20 lg:py-24 bg-slate-50/70">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            
            {/* 1. Category Hero */}
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6 border-b border-slate-200">
              <div className="space-y-3 max-w-3xl">
                <div className="flex items-center gap-2.5">
                  <span className="text-xs font-mono font-bold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                    CATEGORY 08 // 08
                  </span>
                  <span className="text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200">
                    CANVAS
                  </span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading tracking-tight">
                  Executive Strategy &amp; Business Transformation Workshops
                </h2>
                <p className="text-base sm:text-lg font-bold text-slate-700 font-heading">
                  Structured facilitation formats to align leadership teams, prioritize initiatives, and build actionable roadmaps.
                </p>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-2xl">
                  Break through departmental silos and reach executive consensus in a single facilitated session with explicit deliverables and OKRs.
                </p>
              </div>

              <div className="shrink-0">
                <Link
                  to="/book-consultation"
                  className="px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-mono font-bold transition-all flex items-center gap-2 shadow-xs cursor-pointer"
                >
                  <Users className="w-3.5 h-3.5" />
                  <span>Book Executive Workshop Facilitator</span>
                </Link>
              </div>
            </div>

            {/* Workshop Selector Pills */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar">
              {WORKSHOP_RESOURCES.map((ws) => {
                const isSelected = activeWorkshopId === ws.id;
                return (
                  <button
                    key={ws.id}
                    onClick={() => setActiveWorkshopId(ws.id)}
                    className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all shrink-0 cursor-pointer border ${
                      isSelected
                        ? 'bg-blue-600 border-blue-600 text-white shadow-xs'
                        : 'bg-white hover:bg-slate-100 text-slate-700 border-slate-200'
                    }`}
                  >
                    {ws.title.replace('Workshop', '')}
                  </button>
                );
              })}
            </div>

            {/* Interactive Workshop Canvas Agenda */}
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-8">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-4">
                <div>
                  <span className="text-xs font-mono font-bold text-blue-600 uppercase tracking-widest block mb-1">
                    Facilitation Canvas // {activeWorkshop.badge}
                  </span>
                  <h3 className="text-2xl font-bold font-heading text-slate-900">
                    {activeWorkshop.title}
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">{activeWorkshop.objective}</p>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-right shrink-0">
                  <span className="text-[10px] font-mono text-slate-500 uppercase font-bold block">Duration</span>
                  <span className="text-sm font-bold text-slate-900 font-mono">{activeWorkshop.duration}</span>
                </div>
              </div>

              {/* Recommended Participants & Prerequisites */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                  <span className="text-xs font-mono font-bold text-slate-700 uppercase block">Recommended Stakeholders:</span>
                  <div className="flex flex-wrap gap-1.5">
                    {activeWorkshop.participants.map((part, pIdx) => (
                      <span key={pIdx} className="text-xs font-medium px-2.5 py-1 rounded-lg bg-white border border-slate-200 text-slate-800">
                        {part}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                  <span className="text-xs font-mono font-bold text-slate-700 uppercase block">Required Pre-Read Data:</span>
                  <ul className="space-y-1 text-xs text-slate-600">
                    {activeWorkshop.prerequisites.map((pre, prIdx) => (
                      <li key={prIdx} className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                        <span>{pre}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Time-Boxed Agenda Modules */}
              <div className="space-y-3">
                <span className="text-xs font-mono font-bold text-slate-600 uppercase tracking-wider block">
                  Time-Boxed Workshop Modules &amp; Deliverables:
                </span>

                <div className="space-y-3">
                  {activeWorkshop.agendaModules.map((mod, mIdx) => (
                    <div
                      key={mIdx}
                      className="p-5 rounded-2xl bg-slate-50/70 border border-slate-200 flex flex-col md:flex-row md:items-center justify-between gap-4"
                    >
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-blue-100 text-blue-800">
                            {mod.time}
                          </span>
                          <h4 className="text-sm font-bold text-slate-900 font-heading">{mod.topic}</h4>
                        </div>
                        <p className="text-xs text-slate-600 leading-relaxed">{mod.activity}</p>
                      </div>

                      <div className="p-3 rounded-xl bg-white border border-slate-200 text-xs font-mono md:max-w-xs shrink-0">
                        <span className="text-[10px] uppercase font-bold text-slate-400 block">Deliverable:</span>
                        <span className="font-bold text-blue-700">{mod.deliverable}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Post-Workshop Action Plan */}
              <div className="p-5 rounded-2xl bg-blue-50/60 border border-blue-200/80 space-y-2">
                <span className="text-xs font-mono font-bold text-blue-900 uppercase block">Post-Workshop Execution Cadence:</span>
                <ul className="space-y-1 text-xs text-slate-700">
                  {activeWorkshop.postWorkshopActionPlan.map((act, aIdx) => (
                    <li key={aIdx} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0" />
                      <span>{act}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>
        </section>

      </main>

      {/* ── SECTION A: HOW THE RESOURCE SYSTEM WORKS (4-STEP PROCESS) ── */}
      <section className="py-20 lg:py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-blue-600">
              Operational Methodology
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading tracking-tight">
              How the Resource System Works
            </h2>
            <p className="text-base text-slate-600">
              Transforming revenue strategy into measurable business execution follows an iterative four-step management cycle.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: '01',
                title: 'Diagnose',
                desc: 'Understand the current business situation and identify performance gaps using structured assessment rubrics and quantitative telemetry.'
              },
              {
                step: '02',
                title: 'Structure',
                desc: 'Select the right framework, maturity progression model, financial business case, or standard operating procedure to address the root cause.'
              },
              {
                step: '03',
                title: 'Execute',
                desc: 'Apply the resource to commercial processes, train reps on playbook motions, and enforce stage-gate verification checklists.'
              },
              {
                step: '04',
                title: 'Measure',
                desc: 'Track performance against deterministic financial ROI formulas, evaluate outcome realization, and identify further continuous improvements.'
              }
            ].map((st, idx) => (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-slate-50/70 border border-slate-200 hover:border-blue-300 shadow-xs hover:shadow-xl transition-all space-y-4 relative overflow-hidden group"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600" />
                <span className="text-3xl font-black font-mono text-blue-600 block">{st.step}</span>
                <h3 className="text-xl font-bold text-slate-900 font-heading">{st.title}</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{st.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── SECTION B: WHO SHOULD USE THIS HUB? (4 AUDIENCE GROUPS) ── */}
      <section className="py-20 lg:py-24 bg-slate-50/70 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-blue-600">
              Role-Specific Value
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading tracking-tight">
              Who Should Use This Hub?
            </h2>
            <p className="text-base text-slate-600">
              Tailored governance tools, financial justification models, and execution playbooks designed for specific leadership functions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                role: 'Enterprise Executives',
                badge: 'C-Suite & Board',
                desc: 'Strategic planning, capital investment decisions, board-level forecast governance, and commercial transformation priorities.',
                primaryTools: ['Revenue Strategy Workshops', 'Business Case Frameworks', 'Global Expansion Models']
              },
              {
                role: 'Revenue Leaders',
                badge: 'CROs & Sales VPs',
                desc: 'Sales performance management, pipeline velocity optimization, stage-gate enforcement, and win-rate improvement.',
                primaryTools: ['Enterprise Sales Playbook', 'Sales Qualification Checklists', 'Sales Productivity ROI']
              },
              {
                role: 'Operations Teams',
                badge: 'RevOps & MarTech',
                desc: 'Process standardization, CRM data hygiene, technology stack consolidation, and executive telemetry reporting.',
                primaryTools: ['RevOps SOPs', 'CRM Hygiene Checklists', 'Tool Rationalization Frameworks']
              },
              {
                role: 'Transformation Leaders',
                badge: 'Change Architects',
                desc: 'Capability development, AI agent adoption, operating model modernization, and cross-functional alignment.',
                primaryTools: ['5-Level Maturity Models', 'AI Readiness Assessments', 'Cognitive Transformation Canvases']
              }
            ].map((aud, idx) => (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-white border border-slate-200/90 hover:border-blue-300 shadow-xs hover:shadow-xl transition-all space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-blue-50 text-blue-700 border border-blue-200">
                      {aud.badge}
                    </span>
                    <Users className="w-4 h-4 text-slate-400" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 font-heading">{aud.role}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{aud.desc}</p>
                </div>

                <div className="pt-4 border-t border-slate-100 space-y-1.5">
                  <span className="text-[10px] font-mono font-bold text-slate-400 uppercase block">Primary Resources:</span>
                  <ul className="space-y-1 text-xs text-slate-700 font-mono">
                    {aud.primaryTools.map((tool, tIdx) => (
                      <li key={tIdx} className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0" />
                        <span>{tool}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── SECTION C: RELATED PROFITMACHINES CAPABILITIES ── */}
      <section className="py-20 lg:py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-blue-600">
              Platform Integration
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading tracking-tight">
              Related ProfitMachines Capabilities
            </h2>
            <p className="text-base text-slate-600">
              Connect these operational frameworks and execution templates directly to our core revenue engineering services and offerings.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Profit Pool Discovery', path: '/offerings/profit-pool-discovery', desc: 'Identify where margin leaks through discounts and unmonetized services.' },
              { title: 'Demand Engineering', path: '/offerings/demand-engineering', desc: 'Architect intent-driven buyer capture pipelines and autonomous outbound.' },
              { title: 'Sales Acceleration', path: '/offerings/sales-acceleration', desc: 'Compress deal cycles with AI research dossiers and governed CPQ proposals.' },
              { title: 'Revenue Operations', path: '/offerings/revenue-operations', desc: 'Unify data schemas, automate stage-gates, and achieve sub-5% forecast variance.' },
              { title: 'Customer Growth', path: '/offerings/customer-growth', desc: 'Sentry alerts for churn risk and proactive 90-day renewal playbooks.' },
              { title: 'GTM Transformation', path: '/offerings/gtm-transformation', desc: 'Modernize commercial operating models across global expansion corridors.' },
              { title: 'Growth Intelligence', path: '/offerings/growth-intelligence', desc: 'Empirical telemetry linking buyer sentiment to pipeline close probability.' },
              { title: 'AI Trust & Governance', path: '/offerings/ai-trust-governance', desc: 'Zero-retention VPC architecture, human oversight gates, and SOC 2 compliance.' }
            ].map((sol, idx) => (
              <Link
                key={idx}
                to={sol.path}
                className="p-5 rounded-2xl bg-slate-50 border border-slate-200 hover:border-blue-400 hover:bg-white hover:shadow-md transition-all space-y-2 group flex flex-col justify-between"
              >
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono text-blue-600 font-bold uppercase">Solution 0{idx + 1}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-0.5 transition-all" />
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 font-heading group-hover:text-blue-600 transition-colors">
                    {sol.title}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">{sol.desc}</p>
                </div>
                <div className="pt-2 text-[11px] font-bold text-blue-600">
                  <span>Explore Solution &rarr;</span>
                </div>
              </Link>
            ))}
          </div>

        </div>
      </section>

      {/* ── SECTION D: FINAL CONVERSION CALL TO ACTION ── */}
      <section className="py-20 lg:py-24 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 font-mono text-xs font-bold tracking-widest uppercase">
            <Sparkles className="w-4 h-4 text-blue-400" />
            Structured Commercial Execution
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight font-heading leading-tight">
            Ready to Turn Business Frameworks Into Measurable Results?
          </h2>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            ProfitMachines helps organizations connect revenue strategy, sales execution, operational intelligence, and AI-enabled workflows to create a more predictable and scalable revenue engine.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/book-consultation"
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-extrabold text-sm sm:text-base shadow-lg shadow-blue-600/30 transition-all flex items-center justify-center gap-2 cursor-pointer border border-blue-400/30"
            >
              <span>Book a Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              to="/offerings"
              className="px-8 py-4 rounded-xl bg-white hover:bg-slate-100 text-slate-900 font-extrabold text-sm sm:text-base transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
            >
              <span>Explore ProfitMachines Offerings</span>
              <ArrowUpRight className="w-4 h-4 text-blue-600" />
            </Link>
          </div>

          <div className="pt-6 text-xs text-slate-400 flex items-center justify-center gap-4">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-blue-400" />
              Confidential Enterprise Scoping
            </span>
            <span>•</span>
            <span>NDA-Bound Revenue Architecture</span>
          </div>
        </div>
      </section>

    </div>
  );
}

