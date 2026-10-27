import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Target, ArrowRight, ArrowUpRight, TrendingUp, ShieldCheck,
  BarChart3, ChevronRight, Bot, Sparkles, AlertCircle, CheckCircle2
} from 'lucide-react';

const TAB_IDS = ['challenges', 'solution', 'impact'];

const sections = [
  {
    id: 'abm',
    eyebrow: 'AI ACCOUNT-BASED MARKETING',
    title: 'ABM Autopilot',
    subtitle: 'Orchestrate precise target account campaigns that unite sales and marketing into one synchronized revenue motion.',
    icon: Target,
    color: 'blue',
    features: ['Target Account Ingestion', 'CRM Sync', 'Dynamic Ad Triggers', 'Executive SDR Outreach'],
    tabs: {
      challenges: { heading: 'Why ABM Breaks Down', items: ['Aligning sales and marketing on target accounts', 'Personalizing outreach at scale across hundreds of accounts', 'Measuring ABM pipeline influence accurately'] },
      solution: { heading: 'The Autopilot Approach', items: ['Trigger personalized ads, custom landing pages, and automated SDR outreach simultaneously', 'Ingest CRM target lists and auto-sync across marketing and sales systems', 'Continuous account scoring surfaces the highest-priority accounts daily'] },
      impact: { heading: 'Measurable Outcomes', items: ['Unified sales and marketing motion with measurable pipeline influence', 'Dramatic reduction in account penetration time', 'Precise attribution of pipeline to ABM touchpoints'] }
    },
    situations: ['Siloed marketing and sales lists causing missed opportunities', 'Low enterprise account penetration despite heavy ad spend']
  },
  {
    id: 'competitor',
    eyebrow: 'AI COMPETITOR DISPLACEMENT',
    title: 'Competitor Displacement Engine',
    subtitle: 'Detect competitor vulnerabilities, intercept renewal windows, and win back high-value accounts with precision timing.',
    icon: ShieldCheck,
    color: 'indigo',
    features: ['Competitor Tracking', 'Intent Signal Capture', 'Win-Back Playbooks', 'Switching Triggers'],
    tabs: {
      challenges: { heading: 'Displacement Barriers', items: ['Identifying dissatisfied competitor accounts before they switch', 'Timing win-back outreach to match contract renewal windows', 'Drafting competitive displacement messaging that resonates'] },
      solution: { heading: 'Signal-Driven Displacement', items: ['Detect when accounts search for migration support or complain about rival tools online', 'Auto-trigger win-back playbooks timed to competitor renewal cycles', 'Generate personalized displacement narratives grounded in verified competitor gaps'] },
      impact: { heading: 'Win-Back Results', items: ['Systematic win-back of high-value accounts from rival platforms', 'Shorter competitive sales cycles through precise timing', 'Higher displacement win rates with evidence-based positioning'] }
    },
    situations: ['Competitor lock-in across primary target accounts', 'Undetected contract renewal windows lost to incumbents']
  },
  {
    id: 'sdr',
    eyebrow: 'AI SDR CO-PILOT / AUTOPILOT',
    title: 'AI SDR Co-Pilot',
    subtitle: 'Deploy an autonomous SDR assistant that drafts, sends, handles objections, and books meetings while your reps focus on closing.',
    icon: Bot,
    color: 'sky',
    features: ['Autonomous Email Drafting', 'Objection Resolution', 'Calendar Booking Sync', 'Lead Nurturing'],
    tabs: {
      challenges: { heading: 'SDR Scaling Bottlenecks', items: ['Scaling outbound volume without sacrificing personalization quality', 'Handling complex prospect objections with speed and accuracy', 'Achieving zero lead leakage across inbound and outbound'] },
      solution: { heading: 'Autonomous SDR Operations', items: ['Autonomous SDR assistant drafts personalized outreach, handles objections, and schedules meetings for AEs', 'AI resolves objections in real time using trained competitive and product intelligence', 'Inbound leads qualified and calendared within minutes, not hours'] },
      impact: { heading: 'Pipeline Acceleration', items: ['Massive increase in qualified meetings with zero lead leakage', 'Reps reclaim 60%+ of their time for active selling', 'Consistent outbound quality at unlimited scale'] }
    },
    situations: ['Sales reps spending 60%+ of their time on prospecting instead of selling', 'Delayed response to inbound leads causing lost pipeline']
  },
  {
    id: 'rql',
    eyebrow: 'AI REVENUE QUALIFIED LEADS',
    title: 'Revenue Qualified Lead Predictor',
    subtitle: 'Replace gut-feel forecasting with mathematical deal intelligence that predicts close probability, deal size, and buying velocity.',
    icon: BarChart3,
    color: 'emerald',
    features: ['Close Probability Scoring', 'Pipeline Forecasting', 'Deal Size Prediction', 'Buying Signal Analysis'],
    tabs: {
      challenges: { heading: 'Forecasting Failures', items: ['Identifying deals at risk of stalling before it is too late', 'Quantifying real buying velocity beyond rep optimism', 'Optimizing rep deal allocation to highest-propensity opportunities'] },
      solution: { heading: 'Data-Driven Revenue Intelligence', items: ['Shift from subjective sales gut feelings to data-driven revenue forecasting', 'Multi-signal scoring combines buyer behavior, email sentiment, and engagement velocity', 'Automatic deal risk alerts trigger intervention playbooks before stall occurs'] },
      impact: { heading: 'Forecast Precision', items: ['Highly accurate pipeline forecasting with measurable variance reduction', 'Optimized rep time allocation toward highest-yield deals', 'End-of-quarter revenue predictability at enterprise scale'] }
    },
    situations: ['Inaccurate end-of-quarter revenue forecasts causing surprise misses', 'Time wasted on low-propensity deals that stall in late stages']
  },
  {
    id: 'expansion',
    eyebrow: 'AI CONTRACT EXPANSION',
    title: 'Contract & Expansion Finder',
    subtitle: 'Monitor usage telemetry and contract signals to identify expansion opportunities before accounts plateau or churn.',
    icon: TrendingUp,
    color: 'violet',
    features: ['NRR Expansion Triggers', 'Usage Threshold Alerts', 'Cross-Sell Sensing', 'Renewal Risk Mitigation'],
    tabs: {
      challenges: { heading: 'Expansion Blind Spots', items: ['Detecting expansion signals before contract renewal windows close', 'Preventing customer drop-off and reactive account management', 'Building systematic NRR growth beyond one-off upsells'] },
      solution: { heading: 'Telemetry-Driven Expansion', items: ['Monitor software usage trends to identify accounts ready for seat expansion or premium features', 'Auto-trigger AE expansion plays when usage thresholds cross defined limits', 'Cross-sell recommendation engine surfaces adjacent product fit by account profile'] },
      impact: { heading: 'NRR Growth', items: ['Predictable, systematic Net Revenue Retention (NRR) growth quarter over quarter', 'Reduced churn at contract renewal through proactive intervention', 'Higher ACV per account through structured expansion motions'] }
    },
    situations: ['Reactive customer account management missing expansion windows', 'High churn at contract renewal due to undetected dissatisfaction']
  }
];

const colorMap = {
  blue:    { bg: 'bg-blue-50',    text: 'text-blue-700',    border: 'border-blue-200',    badge: 'bg-blue-100 text-blue-700',    tab: 'bg-blue-600 text-white',    ring: 'focus:ring-blue-500' },
  indigo:  { bg: 'bg-indigo-50',  text: 'text-indigo-700',  border: 'border-indigo-200',  badge: 'bg-indigo-100 text-indigo-700',  tab: 'bg-indigo-600 text-white',  ring: 'focus:ring-indigo-500' },
  sky:     { bg: 'bg-sky-50',     text: 'text-sky-700',     border: 'border-sky-200',     badge: 'bg-sky-100 text-sky-700',     tab: 'bg-sky-600 text-white',     ring: 'focus:ring-sky-500' },
  emerald: { bg: 'bg-emerald-50', text: 'text-emerald-700', border: 'border-emerald-200', badge: 'bg-emerald-100 text-emerald-700', tab: 'bg-emerald-600 text-white', ring: 'focus:ring-emerald-500' },
  violet:  { bg: 'bg-violet-50',  text: 'text-violet-700',  border: 'border-violet-200',  badge: 'bg-violet-100 text-violet-700',  tab: 'bg-violet-600 text-white',  ring: 'focus:ring-violet-500' },
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
            <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full ${c.badge} font-mono text-xs font-bold uppercase tracking-widest mb-5`}>
              <Icon className="w-3.5 h-3.5" />
              <span>{section.eyebrow}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading mb-4">{section.title}</h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-8">{section.subtitle}</p>
            <div className="flex flex-wrap gap-2 mb-8">
              {section.features.map(f => (
                <span key={f} className={`px-3 py-1 rounded-lg text-xs font-mono font-semibold ${c.bg} ${c.text} border ${c.border}`}>{f}</span>
              ))}
            </div>
            <div className="rounded-2xl bg-slate-50 border border-slate-200 p-5">
              <div className="text-xs font-mono font-bold text-slate-500 uppercase tracking-widest mb-3 flex items-center gap-1.5">
                <AlertCircle className="w-3.5 h-3.5" /> Common Situations
              </div>
              <ul className="space-y-2">
                {section.situations.map(s => (
                  <li key={s} className="flex items-start gap-2 text-sm text-slate-700">
                    <ChevronRight className="w-4 h-4 text-slate-400 mt-0.5 shrink-0" />
                    <span>"{s}"</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div>
            <div className="flex gap-1 p-1 rounded-xl bg-slate-100 mb-6">
              {TAB_IDS.map(t => (
                <button key={t} onClick={() => setActiveTab(t)} className={`flex-1 py-2 px-3 rounded-lg text-xs font-bold font-mono uppercase tracking-wide transition-all ${activeTab === t ? c.tab : 'text-slate-500 hover:text-slate-700'}`}>
                  {t}
                </button>
              ))}
            </div>
            <div className="rounded-2xl bg-white border border-slate-200 p-6 sm:p-8 shadow-sm min-h-[220px]">
              <div className="text-sm font-bold text-slate-900 mb-4">{section.tabs[activeTab].heading}</div>
              <ul className="space-y-3">
                {section.tabs[activeTab].items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className={`w-5 h-5 rounded-full ${c.bg} border ${c.border} flex items-center justify-center shrink-0 mt-0.5`}>
                      <CheckCircle2 className={`w-3 h-3 ${c.text}`} />
                    </div>
                    <span className="text-sm text-slate-700 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
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
  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.honeypot) return;
    if (!form.name || !form.email || !form.phone) return;
    setSubmitted(true);
  };
  if (submitted) {
    return (
      <div className="rounded-3xl bg-slate-800 border border-slate-700 p-10 text-center">
        <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
        <h3 className="text-2xl font-extrabold text-white font-heading mb-2">Consultation Requested</h3>
        <p className="text-slate-300 text-sm">Thank you, <strong>{form.name}</strong>. A specialist in <span className="text-blue-400">{vertical}</span> will contact you within 24 business hours.</p>
      </div>
    );
  }
  return (
    <form onSubmit={handleSubmit} className="rounded-3xl bg-slate-800 border border-slate-700 p-8 space-y-5">
      <input type="text" name="website" value={form.honeypot} onChange={e => setForm({ ...form, honeypot: e.target.value })} className="hidden" tabIndex={-1} autoComplete="off" aria-hidden="true" />
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div>
          <label className="block text-xs font-mono font-bold text-slate-300 uppercase tracking-wider mb-2">Name *</label>
          <input required type="text" placeholder="Your full name" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} className="w-full px-4 py-3 rounded-xl bg-slate-700/80 border border-slate-600 text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" />
        </div>
        <div>
          <label className="block text-xs font-mono font-bold text-slate-300 uppercase tracking-wider mb-2">Email *</label>
          <input required type="email" placeholder="you@company.com" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} className="w-full px-4 py-3 rounded-xl bg-slate-700/80 border border-slate-600 text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" />
        </div>
        <div>
          <label className="block text-xs font-mono font-bold text-slate-300 uppercase tracking-wider mb-2">Phone Number *</label>
          <input required type="tel" placeholder="+1 555 000 0000" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} className="w-full px-4 py-3 rounded-xl bg-slate-700/80 border border-slate-600 text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" />
        </div>
      </div>
      <button type="submit" className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm tracking-wide shadow-lg shadow-blue-600/30 transition-all hover:-translate-y-0.5">
        Request AI Consultation <ArrowRight className="w-4 h-4" />
      </button>
    </form>
  );
}

export default function IndustriesB2B() {
  const location = useLocation();
  useEffect(() => {
    document.title = 'B2B Focus | AI Pipeline Generation & Account Targeting | ProfitMachines';
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const el = document.getElementById(id);
      if (el) setTimeout(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }), 150);
    } else { window.scrollTo(0, 0); }
  }, [location.hash, location.pathname]);

  return (
    <div className="min-h-screen bg-white">
      <section className="relative pt-24 pb-20 sm:pt-32 sm:pb-28 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(37,99,235,0.25),rgba(255,255,255,0))] pointer-events-none" />
        <div className="absolute inset-0 bg-grid-white/[0.03] bg-[size:32px_32px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 font-mono text-xs font-bold uppercase tracking-widest mb-6">
            <Target className="w-3.5 h-3.5" /><span>B2B REVENUE ENGINES</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight font-heading mb-6 max-w-5xl leading-[1.12]">
            B2B Revenue Engines:{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-indigo-300">Precision Targeting and Pipeline Acceleration</span>
          </h1>
          <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mb-10 leading-relaxed">Orchestrate end-to-end target account campaigns, automate prospecting, and predict deal outcomes with algorithmic deal intelligence.</p>
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <a href="#intake" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm tracking-wide shadow-lg shadow-blue-600/30 transition-all hover:-translate-y-0.5">Get Free Sales Diagnostic <ArrowRight className="w-4 h-4" /></a>
            <Link to="/book-consultation" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-slate-800/80 hover:bg-slate-800 text-slate-200 border border-slate-700 font-bold text-sm tracking-wide transition-all hover:-translate-y-0.5">Talk to a Principal Architect <ArrowUpRight className="w-4 h-4" /></Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 border-t border-slate-800/80">
            {[{val:'+340%',label:'Qualified Pipeline Growth'},{val:'-60%',label:'Sales Cycle Compression'},{val:'4.2x',label:'ABM Pipeline Influence'},{val:'+25%',label:'Net Revenue Retention'}].map(m=>(
              <div key={m.label}><div className="text-2xl sm:text-3xl font-extrabold font-mono text-white">{m.val}</div><div className="text-xs font-mono text-slate-400 uppercase tracking-wider mt-1">{m.label}</div></div>
            ))}
          </div>
        </div>
      </section>
      <nav className="sticky top-0 z-40 bg-white/95 backdrop-blur border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-1 overflow-x-auto py-3">
            {sections.map(s=>(
              <a key={s.id} href={`#${s.id}`} className="flex-shrink-0 px-4 py-2 rounded-lg text-xs font-mono font-semibold text-slate-600 hover:text-blue-700 hover:bg-blue-50 transition-all whitespace-nowrap">{s.title}</a>
            ))}
          </div>
        </div>
      </nav>
      {sections.map(s => <SectionBlock key={s.id} section={s} />)}
      <section id="intake" className="py-20 sm:py-28 bg-slate-900 scroll-mt-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 font-mono text-xs font-bold uppercase tracking-widest mb-5"><Sparkles className="w-3.5 h-3.5" /> Industry AI Engine</div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-heading mb-4">Architect Your B2B AI Revenue Engine</h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">Stop relying on generic tools. Deploy a revenue engine engineered specifically for B2B pipeline generation, account targeting, and sales efficiency.</p>
          </div>
          <IndustriesIntakeForm vertical="B2B Revenue Acceleration" />
          <div className="flex flex-wrap justify-center gap-8 mt-10">
            {['500+ B2B Companies','5X Avg Revenue Growth','24/7 AI Support'].map(b=>(
              <div key={b} className="flex items-center gap-2 text-sm text-slate-400 font-mono"><ShieldCheck className="w-4 h-4 text-emerald-400" />{b}</div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
