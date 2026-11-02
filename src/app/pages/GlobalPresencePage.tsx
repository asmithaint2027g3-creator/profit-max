import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Globe, ArrowRight, ArrowUpRight, ShieldCheck, CheckCircle2,
  Sparkles, ChevronRight, MapPin, Mail, Phone, Building2,
  Clock, ShieldAlert, Lock, Check, Layers, Compass, Network, AlertCircle
} from 'lucide-react';
import LeadCaptureSection from '../components/LeadCaptureSection';

interface OfficeLocation {
  id: string;
  region: string;
  name: string;
  entityName?: string;
  role: string;
  address: string[];
  email?: string;
  phone?: string;
  hours: string;
  capabilities: string[];
  badgeColor: string;
}

export default function GlobalPresencePage() {
  const [selectedHub, setSelectedHub] = useState<string>('us');

  useEffect(() => {
    document.title = "Global Presence & Offices | ProfitMachines AI";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Explore ProfitMachines global operational presence: corporate headquarters in Tampa, regional hub in Singapore, and engineering innovation centers in Bengaluru and Mumbai.');
    }
  }, []);

  const verifiedOffices: OfficeLocation[] = [
    {
      id: 'us',
      region: 'North America',
      name: 'United States Headquarters',
      role: 'Global Corporate & Commercial Operations',
      address: [
        '501 E Kennedy Blvd Suite 1400',
        'Tampa, FL 33602',
        'United States'
      ],
      email: 'connect@trustgrid.ai',
      phone: '+91 9513288612',
      hours: '08:00 - 18:00 EST &bull; Mon - Fri',
      capabilities: [
        'Enterprise Commercial Strategy',
        'Executive Board Advisory',
        'North American Client Engagement',
        'Strategic Alliances & Legal Governance'
      ],
      badgeColor: 'blue'
    },
    {
      id: 'singapore',
      region: 'Asia-Pacific',
      name: 'Singapore Regional Hub',
      role: 'Asia-Pacific Commercial & Expansion Center',
      address: [
        '5 Temasek Boulevard, 17th Floor',
        'Singapore 038985'
      ],
      email: 'connect@trustgrid.ai',
      phone: '+65 6050 5235',
      hours: '09:00 - 18:00 SGT &bull; Mon - Fri',
      capabilities: [
        'Pan-Asian Enterprise Growth',
        'Cross-Border Commercial Architecture',
        'APAC Distribution Networks',
        'Multinational RevOps Integration'
      ],
      badgeColor: 'indigo'
    },
    {
      id: 'bengaluru',
      region: 'India / South Asia',
      name: 'Bengaluru Innovation Center',
      entityName: 'PROFITMACHINES INNOVATION PVT LTD',
      role: 'Core AI Research & Platform Engineering',
      address: [
        'Suite 32, 235, Binnamangala',
        '2nd Floor, 13th Cross Road',
        'Bengaluru – 560038, India'
      ],
      email: 'connect@trustgrid.ai',
      phone: '+91 9513288612',
      hours: '09:30 - 19:00 IST &bull; Mon - Fri',
      capabilities: [
        'Proprietary AI & ML Model R&D',
        'Distributed Platform Engineering',
        'Telemetry Ingestion Pipelines',
        'Forward-Deployed Engineering Support'
      ],
      badgeColor: 'emerald'
    },
    {
      id: 'mumbai',
      region: 'India / Commercial Delivery',
      name: 'Mumbai Operations Hub',
      role: 'Client Delivery & Financial Operations',
      address: [
        'WeWork, Raheja Platinum',
        'off Andheri - Kurla Road',
        'Mumbai, Maharashtra 400059'
      ],
      email: 'cs@profitmachines.com',
      phone: '+91 9513088612',
      hours: '09:30 - 18:30 IST &bull; Mon - Fri',
      capabilities: [
        'Commercial Account Management',
        'Enterprise Financial Operations',
        'Customer Success Telemetry',
        'Implementation Governance'
      ],
      badgeColor: 'purple'
    }
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-100 selection:text-blue-900">
      
      {/* ── STICKY PAGE SUB-NAV BAR (FOR FAST AUDIT JUMPING) ── */}
      <nav aria-label="Global Presence Sub Navigation" className="sticky top-16 z-30 bg-slate-900/95 backdrop-blur-md border-b border-slate-800 text-white text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-11 flex items-center justify-between gap-4 overflow-x-auto no-scrollbar">
          <div className="flex items-center gap-2.5 shrink-0">
            <span className="font-mono text-blue-400 font-bold">PRESENCE</span>
            <span className="font-bold text-slate-200">Global Presence</span>
            <span className="hidden sm:inline text-slate-500">|</span>
            <span className="hidden sm:inline text-slate-400 font-medium">Headquarters, Innovation Centers & Delivery</span>
          </div>

          <div className="flex items-center gap-4 shrink-0 text-slate-300 font-medium">
            <a href="#overview" className="hover:text-blue-400 transition-colors">Overview</a>
            <a href="#verified-hubs" className="hover:text-blue-400 text-blue-400 font-bold transition-colors">4 Verified Hubs</a>
            <a href="#delivery-model" className="hover:text-blue-400 transition-colors">Delivery Model</a>
            <a href="#security" className="hover:text-blue-400 transition-colors">Data Sovereignty</a>
            <a href="#consultation" className="px-2.5 py-1 rounded bg-blue-600 hover:bg-blue-500 text-white font-bold transition-colors">Discuss Needs</a>
          </div>
        </div>
      </nav>

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
            <span className="text-blue-400 font-bold">Global Presence</span>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-900/60 border border-blue-700/80 text-blue-300 font-mono text-xs font-bold uppercase tracking-wider mb-6">
                <Globe className="w-3.5 h-3.5 text-blue-400" />
                <span>Global Operating Infrastructure</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black font-heading tracking-tight text-white mb-6 leading-[1.1]">
                Serving Enterprise Leaders Across <br className="hidden sm:inline" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-400 to-indigo-300">
                  20+ Global Markets
                </span>
              </h1>

              <p className="text-lg sm:text-xl text-slate-300 font-medium leading-relaxed max-w-3xl mb-8">
                With corporate headquarters in Tampa, Asia-Pacific expansion hubs in Singapore, and engineering innovation centers in Bengaluru and Mumbai, ProfitMachines delivers follow-the-sun commercial transformation with deterministic precision.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="#consultation"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 active:bg-blue-700 text-white font-bold text-sm shadow-lg shadow-blue-600/30 transition-all hover:-translate-y-0.5"
                >
                  <span>Discuss Your Business Requirements</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <a
                  href="#verified-hubs"
                  className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-slate-800/80 hover:bg-slate-800 text-slate-200 border border-slate-700 font-semibold text-sm transition-all"
                >
                  <span>View Confirmed Offices</span>
                  <ArrowUpRight className="w-4 h-4 text-slate-400" />
                </a>
              </div>
            </div>

            {/* Global Telemetry Card */}
            <div className="lg:col-span-4 p-7 rounded-3xl bg-slate-900 border border-slate-800 shadow-2xl relative overflow-hidden">
              <div className="text-xs font-mono font-bold uppercase text-slate-400 mb-4 pb-3 border-b border-slate-800 flex items-center justify-between">
                <span>Infrastructure Metrics</span>
                <span className="text-emerald-400">ACTIVE &bull; 24/7</span>
              </div>

              <div className="space-y-4">
                <div>
                  <div className="text-2xl font-black text-white font-heading">4 Strategic Hubs</div>
                  <div className="text-xs text-slate-400">United States, Singapore, Bengaluru, Mumbai</div>
                </div>

                <div>
                  <div className="text-2xl font-black text-blue-400 font-heading">20+ Countries</div>
                  <div className="text-xs text-slate-400">Active commercial transformation clients</div>
                </div>

                <div>
                  <div className="text-2xl font-black text-emerald-400 font-heading">100% Data Sovereignty</div>
                  <div className="text-xs text-slate-400">Multi-region data isolation and SOC-2 Type II readiness</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 02: FOUR VERIFIED HUBS (DETAILED CONTACT & SPECS) ── */}
      <section id="verified-hubs" className="py-20 sm:py-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600 bg-blue-50 border border-blue-200/60 px-3 py-1 rounded-full">
              Confirmed Operating Locations
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading tracking-tight mt-3 mb-4">
              Our Physical Hubs and Corporate Centers
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              ProfitMachines operates from confirmed physical facilities supporting corporate governance, machine learning engineering, and client engagement.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {verifiedOffices.map((office) => (
              <div
                key={office.id}
                id={office.id}
                data-section-id={office.id === 'bengaluru' || office.id === 'mumbai' ? 'india' : office.id}
                className="scroll-mt-24 p-7 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-blue-300 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="px-2 py-0.5 rounded bg-blue-50 text-blue-700 text-[10px] font-mono font-bold border border-blue-200/60">
                      {office.region}
                    </span>
                    <Building2 className="w-4 h-4 text-slate-400" />
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 font-heading mb-1">{office.name}</h3>
                  {office.entityName && (
                    <div className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-wider mb-2">
                      {office.entityName}
                    </div>
                  )}
                  <p className="text-xs text-blue-600 font-semibold mb-4">{office.role}</p>

                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 mb-5 text-xs text-slate-600 space-y-1">
                    {office.address.map((line, aIdx) => (
                      <div key={aIdx}>{line}</div>
                    ))}
                  </div>

                  <div className="mb-6">
                    <div className="text-[10px] font-mono font-bold uppercase text-slate-500 mb-2">Core Hub Focus</div>
                    <ul className="space-y-1 text-xs text-slate-700">
                      {office.capabilities.map((c, cIdx) => (
                        <li key={cIdx} className="flex items-start gap-1.5">
                          <Check className="w-3 h-3 text-blue-600 shrink-0 mt-0.5" />
                          <span>{c}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 space-y-2 text-xs font-medium">
                  {office.email && (
                    <a href={`mailto:${office.email}`} className="flex items-center gap-2 text-slate-600 hover:text-blue-600 transition-colors">
                      <Mail className="w-3.5 h-3.5 text-blue-600" />
                      <span>{office.email}</span>
                    </a>
                  )}
                  {office.phone && (
                    <a href={`tel:${office.phone.replace(/\s+/g, '')}`} className="flex items-center gap-2 text-slate-600 hover:text-blue-600 transition-colors">
                      <Phone className="w-3.5 h-3.5 text-blue-600" />
                      <span>{office.phone}</span>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 03: DISTRIBUTED DELIVERY & 24/7 SUPPORT ── */}
      <section id="delivery-model" data-section-id="sovereignty" className="scroll-mt-24 py-20 sm:py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600 bg-blue-50 border border-blue-200/60 px-3 py-1 rounded-full">
                Global Delivery Model
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading tracking-tight mt-3 mb-6">
                How ProfitMachines Serves Enterprises Across Continents
              </h2>
              <div className="space-y-4 text-slate-600 text-base leading-relaxed">
                <p>
                  While our core headquarters and innovation centers reside in the United States, Singapore, and India, our revenue transformation programs operate internationally through forward-deployed engineering teams and secure remote telemetry bridges.
                </p>
                <p>
                  We deploy our platforms into client environments via automated cloud infrastructure, providing 24/7 follow-the-sun pipeline monitoring, sub-60-second inbound routing, and continuous predictive modeling.
                </p>
              </div>

              <div className="mt-8 space-y-3">
                {[
                  'Follow-the-Sun Telemetry: Continuous monitoring of buying intent and pipeline progression across all timezones.',
                  'Forward-Deployed Revenue Architects: Senior operators embedded directly into client GTM cadences.',
                  'Multi-Region Cloud Deployment: Low-latency telemetry processing with native geographic data residency.',
                  'Bilateral Mutual NDA: Every client engagement is protected under strict confidentiality protocols.'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                    <span className="text-sm font-semibold text-slate-800 leading-snug">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Delivery Map / Visual Card */}
            <div className="lg:col-span-6">
              <div className="p-8 rounded-3xl bg-slate-950 border border-slate-800 text-white shadow-2xl relative overflow-hidden">
                <div className="flex items-center justify-between pb-4 border-b border-slate-800 text-xs font-mono">
                  <span className="text-blue-400 font-bold uppercase">Timezone Coverage</span>
                  <span className="text-emerald-400 font-bold">24/7 Follow-The-Sun</span>
                </div>

                <div className="space-y-4 my-6">
                  <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between">
                    <div>
                      <div className="text-sm font-bold text-white">Americas (EST / CST / PST)</div>
                      <div className="text-xs text-slate-400">Headquarters in Tampa, FL &bull; US Enterprise Client Cadence</div>
                    </div>
                    <span className="text-[10px] font-mono text-blue-400 font-bold">ACTIVE</span>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between">
                    <div>
                      <div className="text-sm font-bold text-white">Asia-Pacific (SGT / AEST)</div>
                      <div className="text-xs text-slate-400">Singapore Hub &bull; Pan-Pacific Enterprise Growth Networks</div>
                    </div>
                    <span className="text-[10px] font-mono text-indigo-400 font-bold">ACTIVE</span>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between">
                    <div>
                      <div className="text-sm font-bold text-white">South Asia & EMEA (IST / GMT / CET)</div>
                      <div className="text-xs text-slate-400">Bengaluru & Mumbai Hubs &bull; AI Lab & European Client Delivery</div>
                    </div>
                    <span className="text-[10px] font-mono text-emerald-400 font-bold">ACTIVE</span>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 text-xs text-slate-400 flex items-center justify-between font-mono">
                  <span>DISPATCH LATENCY: &lt; 60 SECONDS</span>
                  <span className="text-emerald-400">100% RELIABILITY</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 04: ENTERPRISE DATA SOVEREIGNTY & COMPLIANCE ── */}
      <section id="security" className="py-20 sm:py-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600 bg-blue-50 border border-blue-200/60 px-3 py-1 rounded-full">
              Data Sovereignty
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading tracking-tight mt-3 mb-4">
              Enterprise Compliance and Cross-Border Security Standards
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              Operating globally requires uncompromising standards regarding intellectual property, customer data residency, and bilateral confidentiality.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-7 rounded-2xl bg-white border border-slate-200 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold mb-5 border border-blue-100">
                <Lock className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2 font-heading">Strict Mutual NDA Binding</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Every commercial conversation, architectural diagnostic, and telemetry audit is executed under bilateral enterprise non-disclosure agreements.
              </p>
            </div>

            <div className="p-7 rounded-2xl bg-white border border-slate-200 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold mb-5 border border-emerald-100">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2 font-heading">Zero-Data-Leakage Isolation</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Client proprietary pipelines and conversation records are never used to train public models. Client tenants remain completely isolated.
              </p>
            </div>

            <div className="p-7 rounded-2xl bg-white border border-slate-200 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center font-bold mb-5 border border-purple-100">
                <Globe className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2 font-heading">Regional Data Residency</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Full compliance with GDPR (European Union), HIPAA-ready standards, and Asian cross-border data protection frameworks.
              </p>
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

