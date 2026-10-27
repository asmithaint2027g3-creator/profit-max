import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Building2, ArrowRight, ArrowUpRight, ShieldCheck, Sparkles, AlertCircle, CheckCircle2, ChevronRight, Globe, Handshake, Users } from 'lucide-react';
const TAB_IDS = ['challenges', 'solution', 'impact'];
const sections = [
  {
    id: 'global',
    eyebrow: 'AI GLOBAL ACCOUNT PENETRATION',
    title: 'Global Account Penetration',
    subtitle: 'Map global corporate trees, discover internal buying circles, and scale ACV across multiple business units and geographies.',
    icon: Globe, color: 'blue',
    features: ['Parent-Subsidiary Mapping', 'Buying Circle Discovery', 'Multi-Division Expansion', 'Corporate Registry Mining'],
    tabs: {
      challenges: { heading: 'Enterprise Expansion Barriers', items: ['Navigating 15+ decision-makers across global enterprise accounts', 'Finding warm introduction paths inside complex corporate structures', 'Scaling ACV across multiple business units without cannibalization'] },
      solution: { heading: 'Corporate Tree Intelligence', items: ['Identify parent-subsidiary relationships and map internal buying circles across regions', 'Surface warm introduction paths through mutual connection analysis and org hierarchy data', 'Deploy multi-division expansion playbooks that monetize each business unit independently'] },
      impact: { heading: 'ACV Expansion', items: ['Scaled Average Contract Value (ACV) across multiple business units within the same enterprise', 'Faster multi-division expansion through pre-mapped stakeholder networks', 'Higher enterprise win rates from structured buying committee navigation'] }
    },
    situations: ['Account limited to a single subsidiary despite 30+ global divisions', 'No visibility into global corporate tree or internal buying circles']
  },
  {
    id: 'partnerships',
    eyebrow: 'AI STRATEGIC PARTNERSHIPS',
    title: 'Strategic Partnership Opportunity Finder',
    subtitle: 'Identify high-yield alliance partners, quantify audience overlap, and accelerate channel pipeline through co-sell opportunities.',
    icon: Handshake, color: 'indigo',
    features: ['Ecosystem Alignment Sensing', 'Partner Audience Overlap', 'Co-Sell Scoring', 'Channel Pipeline Acceleration'],
    tabs: {
      challenges: { heading: 'Partnership Discovery Challenges', items: ['Identifying high-fit alliance partners from thousands of ecosystem players', 'Quantifying audience overlap and estimated revenue opportunity per partner', 'Accelerating partner onboarding from discovery to first co-sell revenue'] },
      solution: { heading: 'Ecosystem Intelligence Engine', items: ['Scan ecosystem players, integrators, and distributors to find high-probability partners automatically', 'Quantify audience overlap, TAM alignment, and co-sell pipeline potential for each candidate', 'Generate automated partner onboarding sequences and co-sell playbooks'] },
      impact: { heading: 'Channel Acceleration', items: ['Accelerated channel pipeline through high-yield alliances identified algorithmically', 'Shorter partner onboarding cycles through automated enablement sequences', 'Measurable co-sell revenue attribution per partner within 90 days'] }
    },
    situations: ['Underperforming reseller channels generating low-quality pipeline', 'Unmapped co-sell opportunities with ecosystem integration partners']
  },
  {
    id: 'executive',
    eyebrow: 'AI EXECUTIVE ENGAGEMENT',
    title: 'Executive Engagement Automation',
    subtitle: 'Capture C-suite attention with board-level ROI proof grounded in annual reports, SEC filings, and specific corporate initiatives.',
    icon: Users, color: 'violet',
    features: ['SEC Filing Goal Extraction', 'Annual Report Alignment', 'C-Suite Value Proposition', 'Executive Sign-Off'],
    tabs: {
      challenges: { heading: 'C-Suite Access Barriers', items: ['Capturing C-level attention in an environment saturated with generic sales outreach', 'Proving quantified ROI that maps directly to the CFO or CEO annual objectives', 'Aligning product value to specific corporate initiatives stated in annual reports'] },
      solution: { heading: 'Board-Level Engagement Engine', items: ['Draft custom value cases tailored to specific corporate initiatives and annual reports', 'Extract strategic priorities from SEC 10-K filings and align product ROI accordingly', 'Generate executive-specific business cases with quantified impact projections'] },
      impact: { heading: 'C-Suite Results', items: ['Higher C-suite sign-off rates through evidence-based, initiative-aligned proposals', 'Accelerated deal velocity as executive champions receive board-ready ROI documentation', 'Reduced deal stall rate at final approval stage through pre-aligned value framing'] }
    },
    situations: ['Deals stalling at C-suite sign-off without quantified ROI alignment', 'Generic sales decks rejected by CFOs demanding measurable business impact']
  }
];
const colorMap = {
  blue:   { bg:'bg-blue-50',   text:'text-blue-700',   border:'border-blue-200',   badge:'bg-blue-100 text-blue-700',   tab:'bg-blue-600 text-white' },
  indigo: { bg:'bg-indigo-50', text:'text-indigo-700', border:'border-indigo-200', badge:'bg-indigo-100 text-indigo-700', tab:'bg-indigo-600 text-white' },
  violet: { bg:'bg-violet-50', text:'text-violet-700', border:'border-violet-200', badge:'bg-violet-100 text-violet-700', tab:'bg-violet-600 text-white' },
};
function SectionBlock({ section }) {
  const [activeTab, setActiveTab] = useState('challenges');
  const c = colorMap[section.color]; const Icon = section.icon;
  return (
    <section id={section.id} className="py-20 sm:py-24 border-b border-slate-100 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div>
            <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full ${c.badge} font-mono text-xs font-bold uppercase tracking-widest mb-5`}><Icon className="w-3.5 h-3.5" /><span>{section.eyebrow}</span></div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading mb-4">{section.title}</h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-8">{section.subtitle}</p>
            <div className="flex flex-wrap gap-2 mb-8">{section.features.map(f=><span key={f} className={`px-3 py-1 rounded-lg text-xs font-mono font-semibold ${c.bg} ${c.text} border ${c.border}`}>{f}</span>)}</div>
            <div className="rounded-2xl bg-slate-50 border border-slate-200 p-5">
              <div className="text-xs font-mono font-bold text-slate-500 uppercase tracking-widest mb-3 flex items-center gap-1.5"><AlertCircle className="w-3.5 h-3.5" /> Common Situations</div>
              <ul className="space-y-2">{section.situations.map(s=><li key={s} className="flex items-start gap-2 text-sm text-slate-700"><ChevronRight className="w-4 h-4 text-slate-400 mt-0.5 shrink-0" /><span>"{s}"</span></li>)}</ul>
            </div>
          </div>
          <div>
            <div className="flex gap-1 p-1 rounded-xl bg-slate-100 mb-6">{TAB_IDS.map(t=><button key={t} onClick={()=>setActiveTab(t)} className={`flex-1 py-2 px-3 rounded-lg text-xs font-bold font-mono uppercase tracking-wide transition-all ${activeTab===t?c.tab:'text-slate-500 hover:text-slate-700'}`}>{t}</button>)}</div>
            <div className="rounded-2xl bg-white border border-slate-200 p-6 sm:p-8 shadow-sm min-h-[220px]">
              <div className="text-sm font-bold text-slate-900 mb-4">{section.tabs[activeTab].heading}</div>
              <ul className="space-y-3">{section.tabs[activeTab].items.map((item,i)=><li key={i} className="flex items-start gap-3"><div className={`w-5 h-5 rounded-full ${c.bg} border ${c.border} flex items-center justify-center shrink-0 mt-0.5`}><CheckCircle2 className={`w-3 h-3 ${c.text}`} /></div><span className="text-sm text-slate-700 leading-relaxed">{item}</span></li>)}</ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
function IndustriesIntakeForm({ vertical }) {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name:'', email:'', phone:'', honeypot:'' });
  const handleSubmit = (e) => { e.preventDefault(); if (form.honeypot) return; if (!form.name||!form.email||!form.phone) return; setSubmitted(true); };
  if (submitted) return (<div className="rounded-3xl bg-slate-800 border border-slate-700 p-10 text-center"><CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto mb-4" /><h3 className="text-2xl font-extrabold text-white font-heading mb-2">Consultation Requested</h3><p className="text-slate-300 text-sm">Thank you, <strong>{form.name}</strong>. A specialist in <span className="text-blue-400">{vertical}</span> will contact you within 24 business hours.</p></div>);
  return (<form onSubmit={handleSubmit} className="rounded-3xl bg-slate-800 border border-slate-700 p-8 space-y-5"><input type="text" name="website" value={form.honeypot} onChange={e=>setForm({...form,honeypot:e.target.value})} className="hidden" tabIndex={-1} autoComplete="off" aria-hidden="true" /><div className="grid grid-cols-1 sm:grid-cols-3 gap-4"><div><label className="block text-xs font-mono font-bold text-slate-300 uppercase tracking-wider mb-2">Name *</label><input required type="text" placeholder="Your full name" value={form.name} onChange={e=>setForm({...form,name:e.target.value})} className="w-full px-4 py-3 rounded-xl bg-slate-700/80 border border-slate-600 text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" /></div><div><label className="block text-xs font-mono font-bold text-slate-300 uppercase tracking-wider mb-2">Email *</label><input required type="email" placeholder="you@company.com" value={form.email} onChange={e=>setForm({...form,email:e.target.value})} className="w-full px-4 py-3 rounded-xl bg-slate-700/80 border border-slate-600 text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" /></div><div><label className="block text-xs font-mono font-bold text-slate-300 uppercase tracking-wider mb-2">Phone Number *</label><input required type="tel" placeholder="+1 555 000 0000" value={form.phone} onChange={e=>setForm({...form,phone:e.target.value})} className="w-full px-4 py-3 rounded-xl bg-slate-700/80 border border-slate-600 text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" /></div></div><button type="submit" className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm tracking-wide shadow-lg shadow-blue-600/30 transition-all hover:-translate-y-0.5">Request AI Consultation <ArrowRight className="w-4 h-4" /></button></form>);
}
export default function IndustriesEnterprise() {
  const location = useLocation();
  useEffect(() => {
    document.title = 'Enterprise | AI Global Account Penetration & Executive Engagement | ProfitMachines';
    if (location.hash) { const id = location.hash.replace('#',''); const el = document.getElementById(id); if (el) setTimeout(()=>el.scrollIntoView({behavior:'smooth',block:'start'}),150); } else { window.scrollTo(0,0); }
  }, [location.hash, location.pathname]);
  return (
    <div className="min-h-screen bg-white">
      <section className="relative pt-24 pb-20 sm:pt-32 sm:pb-28 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(99,102,241,0.2),rgba(255,255,255,0))] pointer-events-none" />
        <div className="absolute inset-0 bg-grid-white/[0.03] bg-[size:32px_32px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 font-mono text-xs font-bold uppercase tracking-widest mb-6"><Building2 className="w-3.5 h-3.5" /><span>ENTERPRISE SCALE</span></div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight font-heading mb-6 max-w-5xl leading-[1.12]">Enterprise Scale:{' '}<span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-violet-300 to-purple-300">Navigate Complexity and Accelerate Global Growth</span></h1>
          <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mb-10 leading-relaxed">Map global corporate trees, discover high-yield alliances, and engage C-level executives with automated, board-level ROI proof.</p>
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <a href="#intake" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-sm tracking-wide shadow-lg shadow-indigo-600/30 transition-all hover:-translate-y-0.5">Get Enterprise Diagnostic <ArrowRight className="w-4 h-4" /></a>
            <Link to="/book-consultation" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-slate-800/80 hover:bg-slate-800 text-slate-200 border border-slate-700 font-bold text-sm tracking-wide transition-all hover:-translate-y-0.5">Talk to a Principal Architect <ArrowUpRight className="w-4 h-4" /></Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 border-t border-slate-800/80">
            {[{val:'3.1x',label:'Faster C-Suite Sign-Off'},{val:'+15pts',label:'Enterprise Win Rate'},{val:'2X',label:'ACV Across Divisions'},{val:'-45%',label:'Sales Cycle Time'}].map(m=><div key={m.label}><div className="text-2xl sm:text-3xl font-extrabold font-mono text-white">{m.val}</div><div className="text-xs font-mono text-slate-400 uppercase tracking-wider mt-1">{m.label}</div></div>)}
          </div>
        </div>
      </section>
      <nav className="sticky top-0 z-40 bg-white/95 backdrop-blur border-b border-slate-200 shadow-sm"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div className="flex gap-1 overflow-x-auto py-3">{sections.map(s=><a key={s.id} href={`#${s.id}`} className="flex-shrink-0 px-4 py-2 rounded-lg text-xs font-mono font-semibold text-slate-600 hover:text-indigo-700 hover:bg-indigo-50 transition-all whitespace-nowrap">{s.title}</a>)}</div></div></nav>
      {sections.map(s=><SectionBlock key={s.id} section={s} />)}
      <section id="intake" className="py-20 sm:py-28 bg-slate-900 scroll-mt-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 font-mono text-xs font-bold uppercase tracking-widest mb-5"><Sparkles className="w-3.5 h-3.5" /> Enterprise AI Engine</div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-heading mb-4">Architect Your Enterprise AI Revenue Engine</h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">Stop relying on generic tools. Deploy a revenue engine engineered for complex buying committees, global expansion, and C-suite alignment.</p>
          </div>
          <IndustriesIntakeForm vertical="Enterprise Revenue Acceleration" />
          <div className="flex flex-wrap justify-center gap-8 mt-10">{['500+ B2B Companies','5X Avg Revenue Growth','24/7 AI Support'].map(b=><div key={b} className="flex items-center gap-2 text-sm text-slate-400 font-mono"><ShieldCheck className="w-4 h-4 text-emerald-400" />{b}</div>)}</div>
        </div>
      </section>
    </div>
  );
}
