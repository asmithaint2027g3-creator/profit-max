import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  ShoppingBag, ArrowRight, ArrowUpRight, TrendingUp, ShieldCheck,
  BarChart3, ChevronRight, Sparkles, AlertCircle, CheckCircle2, Users
} from 'lucide-react';

const TAB_IDS = ['challenges', 'solution', 'impact'];

const sections = [
  {
    id: 'omnichannel',
    eyebrow: 'AI OMNICHANNEL LEAD GENERATION',
    title: 'Omnichannel Lead Generation',
    subtitle: 'Automate campaign execution across social, search, and email — optimizing budget and maximizing ROAS in real time.',
    icon: BarChart3,
    color: 'blue',
    features: ['Multi-Channel Ad Sync', 'Real-Time CPL Optimization', 'Programmatic Budget Allocation', 'Social Lead Capture'],
    tabs: {
      challenges: { heading: 'Consumer Acquisition Challenges', items: ['Capturing high-intent consumer leads across fragmented channels', 'Minimizing ad spend waste from low-converting placements', 'Dynamic creative optimization without manual intervention'] },
      solution: { heading: 'Autonomous Channel Execution', items: ['Automate campaign execution across social, search, and email, optimizing budget in real-time', 'AI dynamically shifts spend toward highest-converting placements as data arrives', 'Creative rotation and audience refresh runs continuously without human oversight'] },
      impact: { heading: 'ROAS Outcomes', items: ['Lowest-cost conversions with maximized return on ad spend (ROAS)', 'Unified attribution across all channels for true cost-per-acquisition visibility', 'Significant reduction in manual campaign management overhead'] }
    },
    situations: ['High customer acquisition costs across ad networks', 'Siloed social and search channels producing inconsistent results']
  },
  {
    id: 'offers',
    eyebrow: 'AI PERSONALIZED OFFER GENERATION',
    title: 'Personalized Offer Generation at Scale',
    subtitle: 'Trigger dynamic 1:1 offers based on user behavior, location, and cart value — without eroding profit margins.',
    icon: TrendingUp,
    color: 'emerald',
    features: ['Dynamic Coupon Triggering', 'Cart Bounce Recovery', 'Margin Preservation Rules', 'Behavioral Discounting'],
    tabs: {
      challenges: { heading: 'Offer Personalization Barriers', items: ['Personalizing offers in real-time for millions of sessions simultaneously', 'Protecting profit margin baseline while driving purchase urgency', 'Creating immediate conversion triggers without blanket discounting'] },
      solution: { heading: 'Behavioral Offer Engine', items: ['Analyze user location, browsing history, and cart value to trigger 1:1 dynamic pricing', 'Margin preservation guardrails ensure offers never cross pre-defined profitability thresholds', 'Session-level personalization generates unique offer combinations for each user'] },
      impact: { heading: 'Conversion Lift', items: ['Higher conversion rates without eroding profit margins across the product catalog', 'Reduced cart abandonment through perfectly timed, personalized incentives', 'Measurable lift in average order value through intelligent bundling'] }
    },
    situations: ['Generic discounts eroding profit margins across all customer segments', 'High cart bounce rates despite competitive pricing']
  },
  {
    id: 'retargeting',
    eyebrow: 'AI BEHAVIORAL RETARGETING',
    title: 'Behavioral Retargeting Autopilot',
    subtitle: 'Re-engage bounced shoppers within minutes using context-aware emails and SMS that recover lost checkouts.',
    icon: Users,
    color: 'violet',
    features: ['Session Logging', 'Contextual SMS/Email', 'Cart Recovery Loops', 'Mobile Conversion Lift'],
    tabs: {
      challenges: { heading: 'Cart Recovery Failures', items: ['Re-engaging bounced shoppers instantly before intent fades', 'Personalizing recovery copy to match what each user was viewing', 'Orchestrating omnichannel cadence timing across email and SMS'] },
      solution: { heading: 'Instant Recovery Automation', items: ['Trigger context-aware emails and SMS messages within minutes of a cart bounce', 'Recovery messages reference exact products viewed, price points, and browsing context', 'Multi-touch cadences automatically escalate urgency across 24–72 hours'] },
      impact: { heading: 'Checkout Recovery', items: ['Significant recovery of abandoned checkouts across desktop and mobile', 'Mobile conversion lift from timely, personalized SMS re-engagement', 'Higher customer lifetime value from recaptured first-purchase moments'] }
    },
    situations: ['70%+ cart bounce rates with no automated recovery in place', 'Slow retargeting email cadence failing to recapture high-intent shoppers']
  },
  {
    id: 'lookalike',
    eyebrow: 'AI LOOKALIKE AUDIENCE SCALING',
    title: 'Lookalike Audience Auto-Scaling',
    subtitle: 'Automatically replicate your highest-converting buyer cohorts across ad networks at scale while maintaining buyer intent quality.',
    icon: ShoppingBag,
    color: 'sky',
    features: ['Seed List Automation', 'Privacy Compliance Hashing', 'Ad Network Auto-Feeding', 'Cohort Replication'],
    tabs: {
      challenges: { heading: 'Audience Scaling Barriers', items: ['Scaling target audience pool without diluting buyer intent signals', 'Maintaining high intent quality as audiences expand beyond core segments', 'Automating seed list updates as buyer behavior shifts quarterly'] },
      solution: { heading: 'Automated Cohort Replication', items: ['Automatically feed ad networks with custom seed lists to replicate highest-converting buyer cohorts', 'Privacy-compliant hashing ensures customer data never leaves your environment', 'Dynamic cohort updates refresh seed lists weekly as conversion patterns evolve'] },
      impact: { heading: 'Scaled Reach', items: ['Scaled audience reach with maintained high buyer intent signals across networks', 'Reduced cost-per-acquisition from more relevant audience targeting', 'Compounding performance improvement as the AI learns which cohorts convert best'] }
    },
    situations: ['Ad targeting fatigue causing declining click-through rates', 'Rising ad network bidding competition eroding margins on core audiences']
  }
];

const colorMap = {
  blue:    { bg: 'bg-blue-50',    text: 'text-blue-700',    border: 'border-blue-200',    badge: 'bg-blue-100 text-blue-700',    tab: 'bg-blue-600 text-white' },
  emerald: { bg: 'bg-emerald-50', text: 'text-emerald-700', border: 'border-emerald-200', badge: 'bg-emerald-100 text-emerald-700', tab: 'bg-emerald-600 text-white' },
  violet:  { bg: 'bg-violet-50',  text: 'text-violet-700',  border: 'border-violet-200',  badge: 'bg-violet-100 text-violet-700',  tab: 'bg-violet-600 text-white' },
  sky:     { bg: 'bg-sky-50',     text: 'text-sky-700',     border: 'border-sky-200',     badge: 'bg-sky-100 text-sky-700',     tab: 'bg-sky-600 text-white' },
};

function SectionBlock({ section }) {
  const [activeTab, setActiveTab] = useState('challenges');
  const c = colorMap[section.color];
  const Icon = section.icon;
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
            <div className="flex gap-1 p-1 rounded-xl bg-slate-100 mb-6">
              {TAB_IDS.map(t=><button key={t} onClick={()=>setActiveTab(t)} className={`flex-1 py-2 px-3 rounded-lg text-xs font-bold font-mono uppercase tracking-wide transition-all ${activeTab===t?c.tab:'text-slate-500 hover:text-slate-700'}`}>{t}</button>)}
            </div>
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
  const [form, setForm] = useState({ name: '', email: '', phone: '', honeypot: '' });
  const handleSubmit = (e) => { e.preventDefault(); if (form.honeypot) return; if (!form.name || !form.email || !form.phone) return; setSubmitted(true); };
  if (submitted) return (<div className="rounded-3xl bg-slate-800 border border-slate-700 p-10 text-center"><CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto mb-4" /><h3 className="text-2xl font-extrabold text-white font-heading mb-2">Consultation Requested</h3><p className="text-slate-300 text-sm">Thank you, <strong>{form.name}</strong>. A specialist in <span className="text-blue-400">{vertical}</span> will contact you within 24 business hours.</p></div>);
  return (
    <form onSubmit={handleSubmit} className="rounded-3xl bg-slate-800 border border-slate-700 p-8 space-y-5">
      <input type="text" name="website" value={form.honeypot} onChange={e=>setForm({...form,honeypot:e.target.value})} className="hidden" tabIndex={-1} autoComplete="off" aria-hidden="true" />
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div><label className="block text-xs font-mono font-bold text-slate-300 uppercase tracking-wider mb-2">Name *</label><input required type="text" placeholder="Your full name" value={form.name} onChange={e=>setForm({...form,name:e.target.value})} className="w-full px-4 py-3 rounded-xl bg-slate-700/80 border border-slate-600 text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" /></div>
        <div><label className="block text-xs font-mono font-bold text-slate-300 uppercase tracking-wider mb-2">Email *</label><input required type="email" placeholder="you@company.com" value={form.email} onChange={e=>setForm({...form,email:e.target.value})} className="w-full px-4 py-3 rounded-xl bg-slate-700/80 border border-slate-600 text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" /></div>
        <div><label className="block text-xs font-mono font-bold text-slate-300 uppercase tracking-wider mb-2">Phone Number *</label><input required type="tel" placeholder="+1 555 000 0000" value={form.phone} onChange={e=>setForm({...form,phone:e.target.value})} className="w-full px-4 py-3 rounded-xl bg-slate-700/80 border border-slate-600 text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" /></div>
      </div>
      <button type="submit" className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm tracking-wide shadow-lg shadow-blue-600/30 transition-all hover:-translate-y-0.5">Request AI Consultation <ArrowRight className="w-4 h-4" /></button>
    </form>
  );
}

export default function IndustriesB2C() {
  const location = useLocation();
  useEffect(() => {
    document.title = 'B2C Focus | AI Consumer Acquisition & Conversion Engine | ProfitMachines';
    if (location.hash) { const id = location.hash.replace('#',''); const el = document.getElementById(id); if (el) setTimeout(()=>el.scrollIntoView({behavior:'smooth',block:'start'}),150); } else { window.scrollTo(0,0); }
  }, [location.hash, location.pathname]);
  return (
    <div className="min-h-screen bg-white">
      <section className="relative pt-24 pb-20 sm:pt-32 sm:pb-28 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(16,185,129,0.2),rgba(255,255,255,0))] pointer-events-none" />
        <div className="absolute inset-0 bg-grid-white/[0.03] bg-[size:32px_32px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-xs font-bold uppercase tracking-widest mb-6"><ShoppingBag className="w-3.5 h-3.5" /><span>B2C GROWTH ENGINES</span></div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight font-heading mb-6 max-w-5xl leading-[1.12]">
            B2C Growth Engines:{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-sky-300">Turn Attention into Demand, Demand into Revenue</span>
          </h1>
          <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mb-10 leading-relaxed">Separate browsing behavior from buying intent, automate personalized retargeting, and optimize the conversion funnel for maximum growth.</p>
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <a href="#intake" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm tracking-wide shadow-lg shadow-emerald-600/30 transition-all hover:-translate-y-0.5">Get Free B2C Diagnostic <ArrowRight className="w-4 h-4" /></a>
            <Link to="/book-consultation" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-slate-800/80 hover:bg-slate-800 text-slate-200 border border-slate-700 font-bold text-sm tracking-wide transition-all hover:-translate-y-0.5">Talk to a Principal Architect <ArrowUpRight className="w-4 h-4" /></Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 border-t border-slate-800/80">
            {[{val:'20-35%',label:'Conversion Rate Uplift'},{val:'-25%',label:'Paid Media Dependency'},{val:'+30%',label:'Repeat Purchase Rate'},{val:'2.5x',label:'Sales Pipeline Velocity'}].map(m=>(
              <div key={m.label}><div className="text-2xl sm:text-3xl font-extrabold font-mono text-white">{m.val}</div><div className="text-xs font-mono text-slate-400 uppercase tracking-wider mt-1">{m.label}</div></div>
            ))}
          </div>
        </div>
      </section>
      <nav className="sticky top-0 z-40 bg-white/95 backdrop-blur border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-1 overflow-x-auto py-3">{sections.map(s=><a key={s.id} href={`#${s.id}`} className="flex-shrink-0 px-4 py-2 rounded-lg text-xs font-mono font-semibold text-slate-600 hover:text-emerald-700 hover:bg-emerald-50 transition-all whitespace-nowrap">{s.title}</a>)}</div>
        </div>
      </nav>
      {sections.map(s=><SectionBlock key={s.id} section={s} />)}
      <section id="intake" className="py-20 sm:py-28 bg-slate-900 scroll-mt-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-xs font-bold uppercase tracking-widest mb-5"><Sparkles className="w-3.5 h-3.5" /> B2C AI Engine</div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-heading mb-4">Architect Your B2C Growth Engine</h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">Stop relying on generic tools. Deploy a revenue engine engineered specifically for consumer intent capture, cart recovery, and scalable acquisition.</p>
          </div>
          <IndustriesIntakeForm vertical="B2C Revenue Acceleration" />
          <div className="flex flex-wrap justify-center gap-8 mt-10">{['500+ B2B Companies','5X Avg Revenue Growth','24/7 AI Support'].map(b=><div key={b} className="flex items-center gap-2 text-sm text-slate-400 font-mono"><ShieldCheck className="w-4 h-4 text-emerald-400" />{b}</div>)}</div>
        </div>
      </section>
    </div>
  );
}
