import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Rocket, ArrowRight, ArrowUpRight, ShieldCheck, Sparkles, AlertCircle, CheckCircle2, ChevronRight, Zap, BarChart3, Bot, DollarSign } from 'lucide-react';
const TAB_IDS = ['challenges', 'solution', 'impact'];
const sections = [
  {
    id: 'zero-to-one',
    eyebrow: 'AI ZERO-TO-ONE LEADS',
    title: 'Zero-to-One Lead Generation',
    subtitle: 'Automate your first customer acquisition campaigns to validate market interest and land paying customers within 48 hours.',
    icon: Zap, color: 'blue',
    features: ['48-Hour Campaign Launch', 'Cold Prospect Scraping', 'Early Buyer Feedback Loops', 'First Customer Path Acceleration'],
    tabs: {
      challenges: { heading: 'First Customer Barriers', items: ['Building prospect lists from scratch with no existing customer database', 'Validating value proposition quickly before burning runway on unproven assumptions', 'Running capital-efficient outbound without a full sales team'] },
      solution: { heading: 'First-Customer Autopilot', items: ['Automate first customer acquisition campaigns to validate market interest quickly', 'AI scrapes and qualifies prospects matching early ICP criteria within hours', 'Early buyer feedback loops feed real customer insights back into messaging in real time'] },
      impact: { heading: 'First Revenue', items: ['Rapid acquisition of the first 10-50 paying customers to prove traction', 'Validated value proposition supported by real purchase decisions rather than survey data', 'Capital-efficient path to first revenue without a full-time sales hire'] }
    },
    situations: ['Zero existing customer database and no inbound pipeline', 'Need first 10-50 paying customers fast to prove traction for investors']
  },
  {
    id: 'pmf',
    eyebrow: 'AI PRODUCT-MARKET FIT SIGNALS',
    title: 'Product-Market Fit Signal Detection',
    subtitle: 'Measure retention, feature adoption, and referral velocity to generate data-driven proof of traction for investors and the board.',
    icon: BarChart3, color: 'emerald',
    features: ['Retention Cohort Scoring', 'Feature Adoption Metrics', 'Organic Referral Velocity', 'Data-Driven PMF Proof'],
    tabs: {
      challenges: { heading: 'PMF Uncertainty', items: ['Quantifying true PMF readiness beyond anecdotal customer feedback', 'Identifying core retention triggers that define sticky product behavior', 'Proving traction to investors without months of cohort history'] },
      solution: { heading: 'Behavioral PMF Analytics', items: ['Measure user retention, feature adoption, and organic referral velocity using behavioral analytics', 'Cohort scoring identifies which customer segments exhibit genuine PMF versus trial behavior', 'PMF scorecard generates investor-ready traction proof from live usage data'] },
      impact: { heading: 'Investor Confidence', items: ['Data-driven proof of traction for investor confidence in Series A/B fundraising', 'Clear identification of which product features drive retention and expansion', 'Faster fundraising timelines backed by quantified PMF evidence'] }
    },
    situations: ['Unclear PMF signals making it difficult to justify scaling investment', 'High user drop-off post-onboarding indicating retention problems']
  },
  {
    id: 'founder',
    eyebrow: 'AI FOUNDER-LED SALES',
    title: 'Founder-Led Sales Automation',
    subtitle: 'Protect founder calendar time while maintaining high lead velocity through automated qualification, booking, and follow-up.',
    icon: Bot, color: 'violet',
    features: ['Founder Calendar Protection', 'Autonomous Inbound Qualification', 'Deal Health Nudging', 'Follow-Up Autopilot'],
    tabs: {
      challenges: { heading: 'Founder Time Constraints', items: ['Systematizing the founder sales process so it scales beyond the founder themselves', 'Qualifying inbounds automatically without founder involvement on every lead', 'Maintaining high lead velocity while the founder focuses on product and fundraising'] },
      solution: { heading: 'Automated Founder Sales System', items: ['Automate inbound qualification, meeting booking, and deal follow-ups end-to-end', 'AI qualification agent handles first-touch responses and routes only qualified leads to founder calendar', 'Deal health nudging ensures no deal goes cold while the founder is heads-down on product'] },
      impact: { heading: 'Scaled Sales Without Burnout', items: ['Scaled founder sales without burning out leadership on repetitive qualification tasks', 'Founder calendar protected for high-value customer meetings and investor conversations', 'Consistent sales velocity maintained even during intense product development sprints'] }
    },
    situations: ['Founders spending 30+ hours per week selling instead of building', 'Slow follow-ups losing deals due to founder context-switching between product and sales']
  },
  {
    id: 'burn-rate',
    eyebrow: 'AI BURN-RATE OPTIMIZATION',
    title: 'Burn-Rate Optimized Lead Capture',
    subtitle: 'Deploy low-cost organic intent capture and high-ROI outbound loops that maximize lead volume while protecting cash runway.',
    icon: DollarSign, color: 'sky',
    features: ['Low-CAC Acquisition', 'Runway Preservation', 'Capital-Efficient Lead Loops', 'Outbound ROI Maximization'],
    tabs: {
      challenges: { heading: 'CAC Efficiency Challenges', items: ['Capturing leads at minimal cost per acquisition to preserve runway for product', 'Maximizing capital efficiency when every dollar of marketing spend is scrutinized', 'Extending cash runway by eliminating waste from ineffective lead channels'] },
      solution: { heading: 'Capital-Efficient Lead Engine', items: ['Deploy low-cost organic intent capture and high-ROI outbound loops that require minimal spend', 'AI identifies highest-converting channels and shifts budget automatically toward them', 'Intent-based lead capture prioritizes prospects already researching solutions in your category'] },
      impact: { heading: 'Runway Extension', items: ['Maximized lead volume while preserving precious cash runway for product development', 'Lower customer acquisition cost extending the effective runway by weeks or months', 'Higher outbound ROI from precision targeting versus broad spray-and-pray campaigns'] }
    },
    situations: ['High CAC burning precious runway without proportional revenue return', 'Inefficient paid ad spend with no organic intent capture strategy']
  }
];
const colorMap = {
  blue:  { bg:'bg-blue-50',   text:'text-blue-700',   border:'border-blue-200',   badge:'bg-blue-100 text-blue-700',   tab:'bg-blue-600 text-white' },
  emerald:{ bg:'bg-emerald-50',text:'text-emerald-700',border:'border-emerald-200',badge:'bg-emerald-100 text-emerald-700',tab:'bg-emerald-600 text-white' },
  violet:{ bg:'bg-violet-50', text:'text-violet-700', border:'border-violet-200', badge:'bg-violet-100 text-violet-700', tab:'bg-violet-600 text-white' },
  sky:   { bg:'bg-sky-50',    text:'text-sky-700',    border:'border-sky-200',    badge:'bg-sky-100 text-sky-700',    tab:'bg-sky-600 text-white' },
};
function SectionBlock({ section }) {
  const [activeTab, setActiveTab] = useState('challenges'); const c = colorMap[section.color]; const Icon = section.icon;
  return (<section id={section.id} className="py-20 sm:py-24 border-b border-slate-100 scroll-mt-24"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start"><div><div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full ${c.badge} font-mono text-xs font-bold uppercase tracking-widest mb-5`}><Icon className="w-3.5 h-3.5" /><span>{section.eyebrow}</span></div><h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading mb-4">{section.title}</h2><p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-8">{section.subtitle}</p><div className="flex flex-wrap gap-2 mb-8">{section.features.map(f=><span key={f} className={`px-3 py-1 rounded-lg text-xs font-mono font-semibold ${c.bg} ${c.text} border ${c.border}`}>{f}</span>)}</div><div className="rounded-2xl bg-slate-50 border border-slate-200 p-5"><div className="text-xs font-mono font-bold text-slate-500 uppercase tracking-widest mb-3 flex items-center gap-1.5"><AlertCircle className="w-3.5 h-3.5" /> Common Situations</div><ul className="space-y-2">{section.situations.map(s=><li key={s} className="flex items-start gap-2 text-sm text-slate-700"><ChevronRight className="w-4 h-4 text-slate-400 mt-0.5 shrink-0" /><span>"{s}"</span></li>)}</ul></div></div><div><div className="flex gap-1 p-1 rounded-xl bg-slate-100 mb-6">{TAB_IDS.map(t=><button key={t} onClick={()=>setActiveTab(t)} className={`flex-1 py-2 px-3 rounded-lg text-xs font-bold font-mono uppercase tracking-wide transition-all ${activeTab===t?c.tab:'text-slate-500 hover:text-slate-700'}`}>{t}</button>)}</div><div className="rounded-2xl bg-white border border-slate-200 p-6 sm:p-8 shadow-sm min-h-[220px]"><div className="text-sm font-bold text-slate-900 mb-4">{section.tabs[activeTab].heading}</div><ul className="space-y-3">{section.tabs[activeTab].items.map((item,i)=><li key={i} className="flex items-start gap-3"><div className={`w-5 h-5 rounded-full ${c.bg} border ${c.border} flex items-center justify-center shrink-0 mt-0.5`}><CheckCircle2 className={`w-3 h-3 ${c.text}`} /></div><span className="text-sm text-slate-700 leading-relaxed">{item}</span></li>)}</ul></div></div></div></div></section>);
}
function IndustriesIntakeForm({ vertical }) {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name:'', email:'', phone:'', honeypot:'' });
  const handleSubmit = (e) => { e.preventDefault(); if (form.honeypot) return; if (!form.name||!form.email||!form.phone) return; setSubmitted(true); };
  if (submitted) return (<div className="rounded-3xl bg-slate-800 border border-slate-700 p-10 text-center"><CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto mb-4" /><h3 className="text-2xl font-extrabold text-white font-heading mb-2">Consultation Requested</h3><p className="text-slate-300 text-sm">Thank you, <strong>{form.name}</strong>. A specialist in <span className="text-blue-400">{vertical}</span> will contact you within 24 business hours.</p></div>);
  return (<form onSubmit={handleSubmit} className="rounded-3xl bg-slate-800 border border-slate-700 p-8 space-y-5"><input type="text" name="website" value={form.honeypot} onChange={e=>setForm({...form,honeypot:e.target.value})} className="hidden" tabIndex={-1} autoComplete="off" aria-hidden="true" /><div className="grid grid-cols-1 sm:grid-cols-3 gap-4"><div><label className="block text-xs font-mono font-bold text-slate-300 uppercase tracking-wider mb-2">Name *</label><input required type="text" placeholder="Your full name" value={form.name} onChange={e=>setForm({...form,name:e.target.value})} className="w-full px-4 py-3 rounded-xl bg-slate-700/80 border border-slate-600 text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" /></div><div><label className="block text-xs font-mono font-bold text-slate-300 uppercase tracking-wider mb-2">Email *</label><input required type="email" placeholder="you@company.com" value={form.email} onChange={e=>setForm({...form,email:e.target.value})} className="w-full px-4 py-3 rounded-xl bg-slate-700/80 border border-slate-600 text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" /></div><div><label className="block text-xs font-mono font-bold text-slate-300 uppercase tracking-wider mb-2">Phone Number *</label><input required type="tel" placeholder="+1 555 000 0000" value={form.phone} onChange={e=>setForm({...form,phone:e.target.value})} className="w-full px-4 py-3 rounded-xl bg-slate-700/80 border border-slate-600 text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" /></div></div><button type="submit" className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm tracking-wide shadow-lg shadow-blue-600/30 transition-all hover:-translate-y-0.5">Request AI Consultation <ArrowRight className="w-4 h-4" /></button></form>);
}
export default function IndustriesStartups() {
  const location = useLocation();
  useEffect(() => {
    document.title = 'Startups | AI Capital-Efficient Acquisition & PMF Detection | ProfitMachines';
    if (location.hash) { const id = location.hash.replace('#',''); const el = document.getElementById(id); if (el) setTimeout(()=>el.scrollIntoView({behavior:'smooth',block:'start'}),150); } else { window.scrollTo(0,0); }
  }, [location.hash, location.pathname]);
  return (
    <div className="min-h-screen bg-white">
      <section className="relative pt-24 pb-20 sm:pt-32 sm:pb-28 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(245,158,11,0.15),rgba(255,255,255,0))] pointer-events-none" />
        <div className="absolute inset-0 bg-grid-white/[0.03] bg-[size:32px_32px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 font-mono text-xs font-bold uppercase tracking-widest mb-6"><Rocket className="w-3.5 h-3.5" /><span>STARTUP LAUNCHPADS</span></div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight font-heading mb-6 max-w-5xl leading-[1.12]">Startup Launchpads:{' '}<span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-300 to-yellow-300">Validate, Acquire, and Scale with Capital Efficiency</span></h1>
          <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mb-10 leading-relaxed">Automate your first customer acquisition, prove product-market fit with data, and protect the founder's time while scaling revenue.</p>
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <a href="#intake" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-white font-bold text-sm tracking-wide shadow-lg shadow-amber-500/30 transition-all hover:-translate-y-0.5">Get Startup Diagnostic <ArrowRight className="w-4 h-4" /></a>
            <Link to="/book-consultation" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-slate-800/80 hover:bg-slate-800 text-slate-200 border border-slate-700 font-bold text-sm tracking-wide transition-all hover:-translate-y-0.5">Talk to a Principal Architect <ArrowUpRight className="w-4 h-4" /></Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 border-t border-slate-800/80">
            {[{val:'48hrs',label:'First Campaign Launch'},{val:'-70%',label:'Customer Acquisition Cost'},{val:'10-50',label:'First Customers Acquired'},{val:'3x',label:'Runway Extension'}].map(m=><div key={m.label}><div className="text-2xl sm:text-3xl font-extrabold font-mono text-white">{m.val}</div><div className="text-xs font-mono text-slate-400 uppercase tracking-wider mt-1">{m.label}</div></div>)}
          </div>
        </div>
      </section>
      <nav className="sticky top-0 z-40 bg-white/95 backdrop-blur border-b border-slate-200 shadow-sm"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div className="flex gap-1 overflow-x-auto py-3">{sections.map(s=><a key={s.id} href={`#${s.id}`} className="flex-shrink-0 px-4 py-2 rounded-lg text-xs font-mono font-semibold text-slate-600 hover:text-amber-700 hover:bg-amber-50 transition-all whitespace-nowrap">{s.title}</a>)}</div></div></nav>
      {sections.map(s=><SectionBlock key={s.id} section={s} />)}
      <section id="intake" className="py-20 sm:py-28 bg-slate-900 scroll-mt-24"><div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"><div className="text-center mb-12"><div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 font-mono text-xs font-bold uppercase tracking-widest mb-5"><Sparkles className="w-3.5 h-3.5" /> Startup AI Engine</div><h2 className="text-3xl sm:text-4xl font-extrabold text-white font-heading mb-4">Architect Your Startup AI Revenue Engine</h2><p className="text-lg text-slate-300 max-w-2xl mx-auto">Stop relying on generic tools. Deploy a revenue engine engineered for capital efficiency, rapid validation, and founder-led scaling.</p></div><IndustriesIntakeForm vertical="Startup Revenue Acceleration" /><div className="flex flex-wrap justify-center gap-8 mt-10">{['500+ B2B Companies','5X Avg Revenue Growth','24/7 AI Support'].map(b=><div key={b} className="flex items-center gap-2 text-sm text-slate-400 font-mono"><ShieldCheck className="w-4 h-4 text-emerald-400" />{b}</div>)}</div></div></section>
    </div>
  );
}
