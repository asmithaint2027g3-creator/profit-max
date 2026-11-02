import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  MessageSquare, Phone, Mail, MapPin, Building2, ArrowRight,
  ArrowUpRight, ShieldCheck, CheckCircle2, Sparkles, ChevronRight,
  Clock, Lock, Check, Send, AlertCircle
} from 'lucide-react';
import { submitToSheet } from '../../lib/sheets';
import { validateBusinessEmail, validatePhone, FormErrorBanner, HoneypotField } from '../components/forms/FormFeedback';
import { trackEvent } from '../../lib/analytics';
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Textarea } from "../components/ui/textarea";
import { Button } from "../components/ui/button";

export default function ContactInquiriesPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    designation: '',
    inquiryType: 'Revenue Growth Strategy',
    revenueRange: '$10M - $50M ARR',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [submissionId, setSubmissionId] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [emailError, setEmailError] = useState<string | null>(null);
  const [phoneError, setPhoneError] = useState<string | null>(null);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [honeypot, setHoneypot] = useState('');

  useEffect(() => {
    document.title = "Contact & Inquiries | ProfitMachines AI";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Initiate a confidential commercial inquiry with ProfitMachines. Connect with our forward-deployed revenue architects and AI systems team under strict mutual NDA.');
    }
  }, []);

  const inquiryTypes = [
    'Revenue Growth Strategy',
    'Demand Generation & Intent Sensing',
    'AI-Native Sales Execution',
    'Revenue Operations & Telemetry',
    'Customer Success & Retention',
    'AI Automation & Architecture',
    'Strategic Partnerships & Alliances',
    'Careers & Fellowship Inquiries'
  ];

  const revenueRanges = [
    'Pre-Revenue / Seed / Early Stage',
    '$1M - $10M ARR',
    '$10M - $50M ARR',
    '$50M - $250M ARR',
    '$250M+ Enterprise'
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;
    if (honeypot) return;
    setEmailError(null);
    setPhoneError(null);
    setSubmitError(null);

    const emailVal = validateBusinessEmail(formData.email);
    if (!emailVal.valid) {
      setEmailError(emailVal.message || 'Please provide a valid corporate business email');
      return;
    }

    if (formData.phone) {
      const phoneVal = validatePhone(formData.phone);
      if (!phoneVal.valid) {
        setPhoneError(phoneVal.message || 'Please provide a valid phone number');
        return;
      }
    }

    setIsSubmitting(true);
    trackEvent({ eventName: 'CONTACT_FORM_SUBMIT', category: 'CONTACT', label: formData.inquiryType });

    try {
      const res = await submitToSheet('Inbound Leads', {
        formName: `Contact Inquiry — ${formData.inquiryType}`,
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        company: formData.company,
        designation: formData.designation,
        interest: formData.inquiryType,
        revenueRange: formData.revenueRange,
        message: formData.message,
        source: 'Contact & Inquiries Page'
      });

      setSubmissionId(res.submissionId || 'PM-INQ-' + Math.floor(100000 + Math.random() * 900000));
      setSubmitted(true);
    } catch (error: any) {
      console.error("Error submitting contact form:", error);
      setSubmitError("We couldn't submit your inquiry just now. Please try again or reach out directly at connect@trustgrid.ai.");
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
            <span className="text-blue-400 font-bold">Contact & Inquiries</span>
          </div>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-900/60 border border-blue-700/80 text-blue-300 font-mono text-xs font-bold uppercase tracking-wider mb-6">
              <MessageSquare className="w-3.5 h-3.5 text-blue-400" />
              <span>Direct Commercial Engagement</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black font-heading tracking-tight text-white mb-6 leading-[1.1]">
              Discuss Your Enterprise <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-400 to-indigo-300">
                Revenue Growth Priorities
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-300 font-medium leading-relaxed mb-8">
              Connect directly with our senior revenue architects and forward-deployed engineering leadership. Every consultation is conducted under bilateral non-disclosure agreements with complete data isolation.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#inquiry-form"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 active:bg-blue-700 text-white font-bold text-sm shadow-lg shadow-blue-600/30 transition-all hover:-translate-y-0.5"
              >
                <span>Initiate Confidential Inquiry</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#office-directory"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-slate-800/80 hover:bg-slate-800 text-slate-200 border border-slate-700 font-semibold text-sm transition-all"
              >
                <span>View Global Directory</span>
                <ArrowUpRight className="w-4 h-4 text-slate-400" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 02: INTAKE FORM & CONSULTATION DETAILS ── */}
      <section id="inquiry-form" data-section-id="schedule" className="scroll-mt-24 py-20 sm:py-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            
            {/* Left: Inquiry Types & Commitment */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600 bg-blue-50 border border-blue-200/60 px-3 py-1 rounded-full">
                  Inquiry Spectrum
                </span>
                <h2 className="text-3xl font-extrabold text-slate-900 font-heading tracking-tight mt-3 mb-4">
                  How We Engage with Prospective Clients
                </h2>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  We engage with founders, CROs, CMOs, and board committees looking to systematically solve pipeline generation, sales conversion latency, or revenue forecasting volatility.
                </p>
              </div>

              <div className="space-y-3">
                {[
                  { title: 'Quantitative Revenue Audit', desc: 'Isolating dark-funnel intent surges and dormant CRM account opportunities.' },
                  { title: 'Sub-60s Inbound Blueprint', desc: 'Eliminating sales cycle latency and preventing lead decay.' },
                  { title: 'Multi-Agent Cognitive Systems', desc: 'Deploying autonomous battlecards, meeting prep, and CRM data capture.' },
                  { title: 'Territory & Capacity Modeling', desc: 'Structuring outcome-driven pricing and mathematical quota attainment.' }
                ].map((item, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs">
                    <div className="text-xs font-bold text-slate-900 font-heading mb-1">{item.title}</div>
                    <div className="text-[11px] text-slate-500 leading-snug">{item.desc}</div>
                  </div>
                ))}
              </div>

              {/* NDA Guarantee Box */}
              <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 text-white space-y-2">
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-blue-400 uppercase">
                  <Lock className="w-3.5 h-3.5" />
                  <span>Confidentiality & NDA Protocol</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  We execute bilateral NDAs prior to accessing any commercial telemetry or CRM data. Your proprietary information is never shared or used to train external models.
                </p>
              </div>
            </div>

            {/* Right: Functional Submission Form */}
            <div className="lg:col-span-7">
              <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200/90 shadow-xl">
                {submitted ? (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200 flex items-center justify-center mx-auto mb-4">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-black text-slate-900 font-heading mb-2">Inquiry Successfully Registered</h3>
                    <p className="text-sm text-slate-600 max-w-md mx-auto mb-4 leading-relaxed">
                      Thank you, <span className="font-bold text-slate-900">{formData.name}</span>. A Principal Revenue Systems Architect will review your requirements under strict mutual NDA.
                    </p>
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 text-xs font-mono font-bold text-slate-700 mb-6">
                      <span>Tracking ID:</span>
                      <span className="text-blue-600">{submissionId}</span>
                    </div>
                    <p className="text-xs text-slate-500 mb-6">
                      Expected response time: within 24 business hours to <span className="font-semibold text-slate-800">{formData.email}</span>.
                    </p>
                    <Button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({
                          name: '',
                          email: '',
                          phone: '',
                          company: '',
                          designation: '',
                          inquiryType: 'Revenue Growth Strategy',
                          revenueRange: '$10M - $50M ARR',
                          message: ''
                        });
                      }}
                      className="bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold"
                    >
                      Submit Another Inquiry
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <HoneypotField value={honeypot} onChange={setHoneypot} />

                    <div className="pb-2 border-b border-slate-100">
                      <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600">
                        Confidential Inquiry Intake
                      </span>
                      <h3 className="text-xl font-black text-slate-900 font-heading mt-1">
                        Tell Us About Your Commercial Priorities
                      </h3>
                    </div>

                    {submitError && (
                      <div className="p-3 rounded-lg bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
                        <AlertCircle className="w-4 h-4 shrink-0" />
                        <span>{submitError}</span>
                      </div>
                    )}

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <Label htmlFor="name" className="text-xs font-bold text-slate-700">Full Name *</Label>
                        <Input
                          id="name"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Sarah Jenkins"
                          className="text-xs"
                        />
                      </div>
                      <div className="space-y-1">
                        <Label htmlFor="email" className="text-xs font-bold text-slate-700">Business Email *</Label>
                        <Input
                          id="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="s.jenkins@enterprise.com"
                          className="text-xs"
                        />
                        {emailError && <p className="text-[10px] text-red-600 font-medium">{emailError}</p>}
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <Label htmlFor="phone" className="text-xs font-bold text-slate-700">Phone Number *</Label>
                        <Input
                          id="phone"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+1 555-0149"
                          className="text-xs"
                        />
                        {phoneError && <p className="text-[10px] text-red-600 font-medium">{phoneError}</p>}
                      </div>
                      <div className="space-y-1">
                        <Label htmlFor="company" className="text-xs font-bold text-slate-700">Company Name *</Label>
                        <Input
                          id="company"
                          required
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          placeholder="Acme Global Inc."
                          className="text-xs"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <Label htmlFor="inquiryType" className="text-xs font-bold text-slate-700">Inquiry Focus *</Label>
                        <select
                          id="inquiryType"
                          value={formData.inquiryType}
                          onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                          className="w-full bg-white border border-slate-200 rounded-lg px-3 py-2 text-xs font-medium text-slate-800 focus:outline-none focus:border-blue-500"
                        >
                          {inquiryTypes.map((type, tIdx) => (
                            <option key={tIdx} value={type}>{type}</option>
                          ))}
                        </select>
                      </div>

                      <div className="space-y-1">
                        <Label htmlFor="revenueRange" className="text-xs font-bold text-slate-700">Current Revenue Scale</Label>
                        <select
                          id="revenueRange"
                          value={formData.revenueRange}
                          onChange={(e) => setFormData({ ...formData, revenueRange: e.target.value })}
                          className="w-full bg-white border border-slate-200 rounded-lg px-3 py-2 text-xs font-medium text-slate-800 focus:outline-none focus:border-blue-500"
                        >
                          {revenueRanges.map((rng, rIdx) => (
                            <option key={rIdx} value={rng}>{rng}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className="space-y-1">
                      <Label htmlFor="message" className="text-xs font-bold text-slate-700">Specific Commercial Challenge or Objective</Label>
                      <Textarea
                        id="message"
                        rows={3}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Describe your revenue velocity, pipeline conversion, or operational challenge..."
                        className="text-xs resize-none"
                      />
                    </div>

                    <div className="pt-2">
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs uppercase tracking-wider py-3 rounded-xl shadow-md transition-all cursor-pointer"
                      >
                        {isSubmitting ? 'Transmitting Inbound Dossier...' : 'Submit Commercial Inquiry →'}
                      </Button>
                    </div>

                    <div className="text-center text-[11px] text-slate-400">
                      Protected by 256-bit encryption. Strict bilateral NDA enforced upon transmission.
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 03: VERIFIED GLOBAL DIRECTORY ── */}
      <section id="office-directory" data-section-id="locations" className="scroll-mt-24 py-20 sm:py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600 bg-blue-50 border border-blue-200/60 px-3 py-1 rounded-full">
              Verified Locations
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading tracking-tight mt-3 mb-4">
              Direct Office Directory & Communication Channels
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              Reach our corporate and engineering facilities directly across North America, Singapore, and India.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-blue-600">Americas HQ</span>
              <h3 className="text-lg font-bold text-slate-900 font-heading mt-1 mb-3">Tampa, Florida</h3>
              <p className="text-xs text-slate-600 mb-4 leading-relaxed">
                501 E Kennedy Blvd Suite 1400<br />Tampa, FL 33602, United States
              </p>
              <div className="space-y-1.5 text-xs font-medium">
                <a href="mailto:connect@trustgrid.ai" className="flex items-center gap-2 text-slate-700 hover:text-blue-600">
                  <Mail className="w-3.5 h-3.5 text-blue-600" /> connect@trustgrid.ai
                </a>
                <a href="tel:+919513288612" className="flex items-center gap-2 text-slate-700 hover:text-blue-600">
                  <Phone className="w-3.5 h-3.5 text-blue-600" /> +91 9513288612
                </a>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-indigo-600">APAC Regional Hub</span>
              <h3 className="text-lg font-bold text-slate-900 font-heading mt-1 mb-3">Singapore</h3>
              <p className="text-xs text-slate-600 mb-4 leading-relaxed">
                5 Temasek Boulevard, 17th Floor<br />Singapore 038985
              </p>
              <div className="space-y-1.5 text-xs font-medium">
                <a href="mailto:connect@trustgrid.ai" className="flex items-center gap-2 text-slate-700 hover:text-blue-600">
                  <Mail className="w-3.5 h-3.5 text-indigo-600" /> connect@trustgrid.ai
                </a>
                <a href="tel:+6560505235" className="flex items-center gap-2 text-slate-700 hover:text-blue-600">
                  <Phone className="w-3.5 h-3.5 text-indigo-600" /> +65 6050 5235
                </a>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-emerald-600">Innovation Center</span>
              <h3 className="text-lg font-bold text-slate-900 font-heading mt-1 mb-1">Bengaluru</h3>
              <div className="text-[10px] font-mono text-slate-500 uppercase mb-3">PROFITMACHINES INNOVATION PVT LTD</div>
              <p className="text-xs text-slate-600 mb-4 leading-relaxed">
                Suite 32, 235, Binnamangala, 2nd Floor, 13th Cross Road, Bengaluru – 560038, India
              </p>
              <div className="space-y-1.5 text-xs font-medium">
                <a href="mailto:connect@trustgrid.ai" className="flex items-center gap-2 text-slate-700 hover:text-blue-600">
                  <Mail className="w-3.5 h-3.5 text-emerald-600" /> connect@trustgrid.ai
                </a>
                <a href="tel:+919513288612" className="flex items-center gap-2 text-slate-700 hover:text-blue-600">
                  <Phone className="w-3.5 h-3.5 text-emerald-600" /> +91 9513288612
                </a>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-purple-600">Commercial Operations</span>
              <h3 className="text-lg font-bold text-slate-900 font-heading mt-1 mb-3">Mumbai</h3>
              <p className="text-xs text-slate-600 mb-4 leading-relaxed">
                WeWork, Raheja Platinum, off Andheri - Kurla Road, Mumbai, Maharashtra 400059
              </p>
              <div className="space-y-1.5 text-xs font-medium">
                <a href="mailto:cs@profitmachines.com" className="flex items-center gap-2 text-slate-700 hover:text-blue-600">
                  <Mail className="w-3.5 h-3.5 text-purple-600" /> cs@profitmachines.com
                </a>
                <a href="tel:+917889397999" className="flex items-center gap-2 text-slate-700 hover:text-blue-600">
                  <Phone className="w-3.5 h-3.5 text-purple-600" /> +91 7889397999
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 04: CONFIDENTIALITY COMMITMENT ── */}
      <section id="confidentiality" data-section-id="nda" className="scroll-mt-24 py-16 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl mx-auto">
          <div className="w-12 h-12 rounded-2xl bg-blue-600/20 text-blue-400 border border-blue-500/30 flex items-center justify-center mx-auto mb-4">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-heading mb-3">Enterprise Governance & Bilateral NDA</h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            ProfitMachines partners with founders, CROs, and executive boards under binding bilateral confidentiality agreements. We never sell, share, or co-mingle customer commercial data.
          </p>
        </div>
      </section>
    </div>
  );
}

