import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  ShieldCheck,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  ArrowLeft,
  Lock,
  User,
  Mail,
  Phone,
  Building2,
  Globe,
  MapPin,
  Briefcase,
  Users,
  Eye,
  EyeOff,
  Sparkles,
  Layers,
  Plus,
  X
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { trackEvent } from '../../lib/analytics';
import { validateBusinessEmail, validatePhone } from '../components/forms/FormFeedback';

// Global Country List
const GLOBAL_COUNTRIES = [
  'United States', 'United Kingdom', 'Canada', 'Australia', 'Germany',
  'France', 'Singapore', 'India', 'United Arab Emirates', 'Saudi Arabia',
  'Netherlands', 'Switzerland', 'Ireland', 'Japan', 'Brazil', 'South Africa',
  'Sweden', 'Norway', 'Denmark', 'Finland', 'Spain', 'Italy', 'New Zealand',
  'Mexico', 'Hong Kong', 'Israel', 'South Korea', 'Other'
];

// Industry Sectors
const INDUSTRY_SECTORS = [
  'B2B Enterprise SaaS & Cloud',
  'Financial Services & FinTech',
  'Web3, Blockchain & Crypto Protocol',
  'Healthcare, Life Sciences & HealthTech',
  'Manufacturing, Industrial & Supply Chain',
  'Professional Services & Management Consulting',
  'E-Commerce & High-Growth Retail',
  'Media, Telecom & Advertising Tech',
  'Artificial Intelligence & Data Infrastructure',
  'Energy, CleanTech & Sustainability',
  'Other Commercial Sector'
];

// Company Headcount Options
const HEADCOUNT_OPTIONS = [
  { value: 'Individual', label: 'Individual (Solo Practitioner / Advisory)' },
  { value: 'Startup (1–10)', label: 'Startup (1–10 Employees)' },
  { value: 'Small (11–50)', label: 'Small (11–50 Employees)' },
  { value: 'Medium (51–250)', label: 'Medium (51–250 Employees)' },
  { value: 'Large (251–1000)', label: 'Large (251–1,000 Employees)' },
  { value: 'Enterprise (1000+)', label: 'Enterprise (1,000+ Employees)' }
];

// Default Business Operations
const DEFAULT_OPERATIONS = [
  'Inbound Lead Capture & Diagnostics',
  'Autonomous SDR Outbound Engine',
  'Dark Funnel Demand Telemetry',
  'Pricing & Margin Leakage Audit',
  'Multi-Touch Revenue Attribution',
  'Enterprise Account Expansion (NRR)',
  'CRM & RevOps Data Synchronization',
  'Deal Qualification & SPICED Scoring'
];

export default function Register() {
  const navigate = useNavigate();
  const { register, isAuthenticated } = useAuth();

  const [step, setStep] = useState<1 | 2>(1);

  // Step 1: Basic Information
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    mobile: '',
    userId: '',
    password: '',
    confirmPassword: '',

    // Step 2: Company Information
    company: '',
    website: '',
    country: 'United States',
    state: '',
    city: '',
    industry: 'B2B Enterprise SaaS & Cloud',
    subIndustry: '',
    headcount: 'Medium (51–250)',
    operations: [
      'Inbound Lead Capture & Diagnostics',
      'Autonomous SDR Outbound Engine'
    ] as string[],
    customOperation: '',
    consent: false
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [registeredProfile, setRegisteredProfile] = useState<any>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Create an Account | ProfitMachines Enterprise Access';
    trackEvent({ eventName: 'PAGE_VIEW_REGISTER', category: 'AUTH' });
    if (isAuthenticated) {
      navigate('/sales-calculators', { replace: true });
    }
  }, [isAuthenticated, navigate]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => {
        const copy = { ...prev };
        delete copy[name];
        return copy;
      });
    }
  };

  const handleToggleOperation = (op: string) => {
    setFormData(prev => {
      const exists = prev.operations.includes(op);
      const updated = exists ? prev.operations.filter(o => o !== op) : [...prev.operations, op];
      return { ...prev, operations: updated };
    });
  };

  const handleAddCustomOperation = () => {
    if (!formData.customOperation.trim()) return;
    const op = formData.customOperation.trim();
    if (!formData.operations.includes(op)) {
      setFormData(prev => ({
        ...prev,
        operations: [...prev.operations, op],
        customOperation: ''
      }));
    }
  };

  // Step 1 Validation
  const validateStep1 = (): boolean => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full Name is required.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Business Email is required.';
    } else {
      const emailCheck = validateBusinessEmail(formData.email);
      if (!emailCheck.valid) {
        newErrors.email = emailCheck.message || 'Please provide a valid corporate business email.';
      }
    }

    if (!formData.mobile.trim()) {
      newErrors.mobile = 'Mobile phone number is required.';
    } else {
      const phoneCheck = validatePhone(formData.mobile);
      if (!phoneCheck.valid) {
        newErrors.mobile = phoneCheck.message || 'Please provide a valid phone number with country code.';
      }
    }

    const cleanUserId = formData.userId.trim();
    if (!cleanUserId) {
      newErrors.userId = 'Preferred User ID is required.';
    } else if (cleanUserId.length < 3 || cleanUserId.length > 25) {
      newErrors.userId = 'User ID must be between 3 and 25 characters.';
    } else if (!/^[a-zA-Z0-9_-]+$/.test(cleanUserId)) {
      newErrors.userId = 'User ID can only contain letters, numbers, underscores, and hyphens.';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required.';
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters long.';
    } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])/.test(formData.password)) {
      newErrors.password = 'Password must include uppercase, lowercase, and a number.';
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Step 2 Validation
  const validateStep2 = (): boolean => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.company.trim()) {
      newErrors.company = 'Company Name is required.';
    }

    if (!formData.country.trim()) {
      newErrors.country = 'Country is required.';
    }

    if (!formData.industry.trim()) {
      newErrors.industry = 'Industry Sector is required.';
    }

    if (!formData.headcount.trim()) {
      newErrors.headcount = 'Company Headcount is required.';
    }

    if (formData.operations.length === 0) {
      newErrors.operations = 'Please select at least one active business operation.';
    }

    if (!formData.consent) {
      newErrors.consent = 'You must agree to the Terms of Service & Privacy Policy to register.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep1()) {
      setStep(2);
      window.scrollTo(0, 0);
      trackEvent({ eventName: 'REGISTER_STEP1_COMPLETE', category: 'AUTH' });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep1()) {
      setStep(1);
      return;
    }
    if (!validateStep2()) {
      return;
    }

    setIsSubmitting(true);
    trackEvent({ eventName: 'REGISTER_SUBMIT', category: 'AUTH' });

    try {
      const profile = await register({
        fullName: formData.fullName,
        email: formData.email,
        mobile: formData.mobile,
        userId: formData.userId,
        password: formData.password,
        company: formData.company,
        website: formData.website,
        country: formData.country,
        state: formData.state,
        city: formData.city,
        industry: formData.industry,
        subIndustry: formData.subIndustry,
        headcount: formData.headcount,
        operations: formData.operations,
        consent: formData.consent
      });

      setRegisteredProfile(profile);
      setIsSuccess(true);
      trackEvent({ eventName: 'REGISTER_SUCCESS', category: 'AUTH', label: profile.userId });
    } catch (err: any) {
      console.error('Registration error:', err);
      setErrors({ form: err.message || 'Unable to complete registration. Please check your inputs.' });
      trackEvent({ eventName: 'REGISTER_FAILURE', category: 'AUTH', label: err.message });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col justify-between pt-20 relative overflow-hidden">
      {/* Background Radiance */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16 flex items-center justify-center relative z-10">
        <div className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-12 bg-slate-900/90 border border-slate-800 rounded-3xl shadow-2xl overflow-hidden backdrop-blur-xl">

          {/* ── LEFT COLUMN: ONBOARDING VALUE & PROGRESS ── */}
          <div className="lg:col-span-4 bg-gradient-to-br from-slate-900 via-blue-950/40 to-slate-950 p-8 sm:p-10 border-b lg:border-b-0 lg:border-r border-slate-800/80 flex flex-col justify-between">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 font-mono text-[11px] font-bold tracking-widest uppercase">
                <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
                Two-Step Registration
              </div>

              <div>
                <h1 className="text-2xl font-extrabold text-white tracking-tight leading-tight">
                  Join the Enterprise Revenue Network
                </h1>
                <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                  Register your corporate credentials to unlock executive diagnostic models and sales calculators.
                </p>
              </div>

              {/* Progress Indicator */}
              <div className="space-y-4 pt-4">
                {/* Step 1 Pill */}
                <div
                  onClick={() => !isSuccess && setStep(1)}
                  className={`p-3.5 rounded-xl border transition-all cursor-pointer flex items-center gap-3.5 ${
                    step === 1
                      ? 'bg-blue-600/15 border-blue-500/50 shadow-sm'
                      : 'bg-slate-800/40 border-slate-800 hover:border-slate-700'
                  }`}
                >
                  <div
                    className={`w-8 h-8 rounded-lg flex items-center justify-center text-xs font-mono font-bold shrink-0 ${
                      step === 1 ? 'bg-blue-600 text-white' : 'bg-slate-800 text-slate-400'
                    }`}
                  >
                    01
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-200">Basic Information</div>
                    <div className="text-[10px] text-slate-400">Personal & Identity Credentials</div>
                  </div>
                </div>

                {/* Step 2 Pill */}
                <div
                  onClick={() => !isSuccess && validateStep1() && setStep(2)}
                  className={`p-3.5 rounded-xl border transition-all cursor-pointer flex items-center gap-3.5 ${
                    step === 2
                      ? 'bg-blue-600/15 border-blue-500/50 shadow-sm'
                      : 'bg-slate-800/40 border-slate-800 hover:border-slate-700'
                  }`}
                >
                  <div
                    className={`w-8 h-8 rounded-lg flex items-center justify-center text-xs font-mono font-bold shrink-0 ${
                      step === 2 ? 'bg-blue-600 text-white' : 'bg-slate-800 text-slate-400'
                    }`}
                  >
                    02
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-200">Company Information</div>
                    <div className="text-[10px] text-slate-400">Corporate & Operational Scope</div>
                  </div>
                </div>
              </div>

              {/* Security Standards */}
              <div className="pt-4 space-y-2 text-[11px] text-slate-400 border-t border-slate-800/80">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>PBKDF2 Cryptographic Hashing</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Zero passwords stored in spreadsheets</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Immediate auto-responder verification</span>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-800/80 mt-6 text-xs text-slate-400">
              Already have an account?{' '}
              <Link to="/sign-in" className="text-blue-400 hover:text-blue-300 font-bold transition-colors">
                Sign In &rarr;
              </Link>
            </div>
          </div>

          {/* ── RIGHT COLUMN: FORM WORKFLOW / SUCCESS STATE ── */}
          <div className="lg:col-span-8 p-8 sm:p-12 bg-slate-900/60 overflow-y-auto max-h-[85vh]">

            {/* ── SUCCESS STATE ── */}
            {isSuccess ? (
              <div className="py-8 text-center space-y-6 animate-in fade-in zoom-in-95">
                <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto shadow-inner">
                  <CheckCircle2 className="w-8 h-8" />
                </div>

                <div className="space-y-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    Registration Successfully Logged
                  </span>
                  <h2 className="text-2xl font-bold text-white tracking-tight">Account Created Successfully</h2>
                  <p className="text-xs sm:text-sm text-slate-400 max-w-md mx-auto leading-relaxed">
                    Welcome to ProfitMachines, <span className="font-semibold text-slate-200">{registeredProfile?.fullName}</span>. Your enterprise account has been registered and synced with our central directory.
                  </p>
                </div>

                {/* Account Details Box */}
                <div className="p-5 rounded-2xl bg-slate-800/60 border border-slate-700/80 max-w-sm mx-auto text-left space-y-2 text-xs">
                  <div className="flex justify-between border-b border-slate-700/60 pb-2">
                    <span className="text-slate-400">Registration ID:</span>
                    <span className="font-mono font-bold text-blue-400">{registeredProfile?.registrationId}</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-700/60 pb-2">
                    <span className="text-slate-400">Preferred User ID:</span>
                    <span className="font-mono font-bold text-white">{registeredProfile?.userId}</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-700/60 pb-2">
                    <span className="text-slate-400">Registered Email:</span>
                    <span className="font-semibold text-white">{registeredProfile?.email}</span>
                  </div>
                  <div className="flex justify-between pt-1">
                    <span className="text-slate-400">Unlocked Access:</span>
                    <span className="font-bold text-emerald-400">Sales Calculators & Telemetry</span>
                  </div>
                </div>

                <p className="text-[11px] text-slate-400 max-w-md mx-auto">
                  A registration confirmation email has been dispatched to <strong className="text-slate-200">{registeredProfile?.email}</strong>. An alert has also been securely delivered to the ProfitMachines executive team.
                </p>

                <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
                  <button
                    type="button"
                    onClick={() => navigate('/sales-calculators')}
                    className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold text-xs tracking-wide shadow-lg shadow-blue-600/30 transition-all cursor-pointer flex items-center justify-center gap-2"
                  >
                    <span>Access Sales Calculators Now</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <button
                    type="button"
                    onClick={() => navigate('/sign-in')}
                    className="px-6 py-3 rounded-xl border border-slate-700 hover:bg-slate-800 text-slate-300 font-bold text-xs transition-colors cursor-pointer"
                  >
                    Go to Sign In Page
                  </button>
                </div>
              </div>
            ) : (
              /* ── TWO-STEP FORM ── */
              <form onSubmit={handleSubmit} className="space-y-6">

                {/* Form Error Banner */}
                {errors.form && (
                  <div className="p-3.5 rounded-xl bg-red-500/10 border border-red-500/30 text-red-300 text-xs flex items-start gap-2.5">
                    <AlertCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{errors.form}</span>
                  </div>
                )}

                {/* STEP 1: BASIC INFORMATION */}
                {step === 1 && (
                  <div className="space-y-5 animate-in fade-in">
                    <div className="border-b border-slate-800 pb-3">
                      <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-blue-400">Step 01 / 02</span>
                      <h3 className="text-xl font-bold text-white mt-1">Basic & Security Information</h3>
                      <p className="text-xs text-slate-400 mt-0.5">Please provide your primary corporate contact information.</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Full Name */}
                      <div>
                        <label className="block text-xs font-bold text-slate-300 mb-1">Full Name *</label>
                        <div className="relative">
                          <input
                            type="text"
                            required
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleChange}
                            placeholder="Sarah Jenkins"
                            className="w-full h-11 px-3.5 rounded-xl bg-slate-800/70 border border-slate-700/80 text-xs text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                          />
                        </div>
                        {errors.fullName && <p className="text-[11px] text-red-400 mt-1 font-semibold">{errors.fullName}</p>}
                      </div>

                      {/* Business Email */}
                      <div>
                        <label className="block text-xs font-bold text-slate-300 mb-1">Corporate Business Email *</label>
                        <div className="relative">
                          <input
                            type="email"
                            required
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="sarah@enterprise.com"
                            className="w-full h-11 px-3.5 rounded-xl bg-slate-800/70 border border-slate-700/80 text-xs text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                          />
                        </div>
                        {errors.email && <p className="text-[11px] text-red-400 mt-1 font-semibold">{errors.email}</p>}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Mobile Number */}
                      <div>
                        <label className="block text-xs font-bold text-slate-300 mb-1">Mobile Number (with country code) *</label>
                        <div className="relative">
                          <input
                            type="tel"
                            required
                            name="mobile"
                            value={formData.mobile}
                            onChange={handleChange}
                            placeholder="+1 (555) 000-0000"
                            className="w-full h-11 px-3.5 rounded-xl bg-slate-800/70 border border-slate-700/80 text-xs text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                          />
                        </div>
                        {errors.mobile && <p className="text-[11px] text-red-400 mt-1 font-semibold">{errors.mobile}</p>}
                      </div>

                      {/* Preferred User ID */}
                      <div>
                        <label className="block text-xs font-bold text-slate-300 mb-1">Preferred User ID *</label>
                        <div className="relative">
                          <input
                            type="text"
                            required
                            name="userId"
                            value={formData.userId}
                            onChange={handleChange}
                            placeholder="e.g. sarah_cro"
                            className="w-full h-11 px-3.5 rounded-xl bg-slate-800/70 border border-slate-700/80 text-xs text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 font-mono"
                          />
                        </div>
                        {errors.userId && <p className="text-[11px] text-red-400 mt-1 font-semibold">{errors.userId}</p>}
                      </div>
                    </div>

                    {/* Password & Confirm Password */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-300 mb-1">Password *</label>
                        <div className="relative">
                          <input
                            type={showPassword ? 'text' : 'password'}
                            required
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            placeholder="••••••••••••"
                            className="w-full h-11 pl-3.5 pr-10 rounded-xl bg-slate-800/70 border border-slate-700/80 text-xs text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                          />
                          <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-slate-200 cursor-pointer"
                          >
                            {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                          </button>
                        </div>
                        {errors.password && <p className="text-[11px] text-red-400 mt-1 font-semibold">{errors.password}</p>}
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-300 mb-1">Confirm Password *</label>
                        <div className="relative">
                          <input
                            type={showConfirmPassword ? 'text' : 'password'}
                            required
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            placeholder="••••••••••••"
                            className="w-full h-11 pl-3.5 pr-10 rounded-xl bg-slate-800/70 border border-slate-700/80 text-xs text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                          />
                          <button
                            type="button"
                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                            className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-slate-200 cursor-pointer"
                          >
                            {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                          </button>
                        </div>
                        {errors.confirmPassword && (
                          <p className="text-[11px] text-red-400 mt-1 font-semibold">{errors.confirmPassword}</p>
                        )}
                      </div>
                    </div>

                    <div className="pt-3">
                      <button
                        type="button"
                        onClick={handleNext}
                        className="w-full h-12 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-blue-600/30 transition-all flex items-center justify-center gap-2 cursor-pointer"
                      >
                        <span>Next: Company Details</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                )}

                {/* STEP 2: COMPANY INFORMATION */}
                {step === 2 && (
                  <div className="space-y-5 animate-in fade-in">
                    <div className="border-b border-slate-800 pb-3 flex items-center justify-between">
                      <div>
                        <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-indigo-400">Step 02 / 02</span>
                        <h3 className="text-xl font-bold text-white mt-1">Company & Operational Scope</h3>
                        <p className="text-xs text-slate-400 mt-0.5">Tell us about your organization and commercial focus.</p>
                      </div>
                      <button
                        type="button"
                        onClick={() => setStep(1)}
                        className="text-xs text-slate-400 hover:text-slate-200 flex items-center gap-1 cursor-pointer"
                      >
                        <ArrowLeft className="w-3.5 h-3.5" />
                        <span>Back</span>
                      </button>
                    </div>

                    {/* Section A: Corporate Information */}
                    <div className="space-y-3">
                      <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">A. Corporate Profile</div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-bold text-slate-300 mb-1">Company Name *</label>
                          <input
                            type="text"
                            required
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            placeholder="Acme Global Inc."
                            className="w-full h-11 px-3.5 rounded-xl bg-slate-800/70 border border-slate-700/80 text-xs text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                          />
                          {errors.company && <p className="text-[11px] text-red-400 mt-1 font-semibold">{errors.company}</p>}
                        </div>

                        <div>
                          <label className="block text-xs font-bold text-slate-300 mb-1">Official Website (optional)</label>
                          <input
                            type="url"
                            name="website"
                            value={formData.website}
                            onChange={handleChange}
                            placeholder="https://company.com"
                            className="w-full h-11 px-3.5 rounded-xl bg-slate-800/70 border border-slate-700/80 text-xs text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        <div>
                          <label className="block text-xs font-bold text-slate-300 mb-1">Country *</label>
                          <select
                            name="country"
                            value={formData.country}
                            onChange={handleChange}
                            className="w-full h-11 px-3 rounded-xl bg-slate-800/70 border border-slate-700/80 text-xs text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                          >
                            {GLOBAL_COUNTRIES.map(c => (
                              <option key={c} value={c} className="bg-slate-900 text-white">{c}</option>
                            ))}
                          </select>
                        </div>

                        <div>
                          <label className="block text-xs font-bold text-slate-300 mb-1">State / Region</label>
                          <input
                            type="text"
                            name="state"
                            value={formData.state}
                            onChange={handleChange}
                            placeholder="California / Ontario"
                            className="w-full h-11 px-3.5 rounded-xl bg-slate-800/70 border border-slate-700/80 text-xs text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-bold text-slate-300 mb-1">City</label>
                          <input
                            type="text"
                            name="city"
                            value={formData.city}
                            onChange={handleChange}
                            placeholder="San Francisco"
                            className="w-full h-11 px-3.5 rounded-xl bg-slate-800/70 border border-slate-700/80 text-xs text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Section B: Industry and Company Size */}
                    <div className="space-y-3 pt-2">
                      <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">B. Industry & Headcount</div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-bold text-slate-300 mb-1">Industry Sector *</label>
                          <select
                            name="industry"
                            value={formData.industry}
                            onChange={handleChange}
                            className="w-full h-11 px-3 rounded-xl bg-slate-800/70 border border-slate-700/80 text-xs text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                          >
                            {INDUSTRY_SECTORS.map(ind => (
                              <option key={ind} value={ind} className="bg-slate-900 text-white">{ind}</option>
                            ))}
                          </select>
                        </div>

                        <div>
                          <label className="block text-xs font-bold text-slate-300 mb-1">Sub-industry / Vertical (optional)</label>
                          <input
                            type="text"
                            name="subIndustry"
                            value={formData.subIndustry}
                            onChange={handleChange}
                            placeholder="e.g. Cybersecurity, PropTech, Supply Chain AI"
                            className="w-full h-11 px-3.5 rounded-xl bg-slate-800/70 border border-slate-700/80 text-xs text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-300 mb-1">Company Headcount *</label>
                        <select
                          name="headcount"
                          value={formData.headcount}
                          onChange={handleChange}
                          className="w-full h-11 px-3 rounded-xl bg-slate-800/70 border border-slate-700/80 text-xs text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                          {HEADCOUNT_OPTIONS.map(opt => (
                            <option key={opt.value} value={opt.value} className="bg-slate-900 text-white">{opt.label}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Section C: Business Operations */}
                    <div className="space-y-3 pt-2">
                      <div className="flex items-center justify-between">
                        <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                          C. Active Business Operations *
                        </div>
                        <span className="text-[10px] text-slate-500">Select all that apply</span>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {DEFAULT_OPERATIONS.map(op => {
                          const active = formData.operations.includes(op);
                          return (
                            <button
                              key={op}
                              type="button"
                              onClick={() => handleToggleOperation(op)}
                              className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-all cursor-pointer ${
                                active
                                  ? 'bg-blue-600/20 border-blue-500 text-blue-300 shadow-xs'
                                  : 'bg-slate-800/40 border-slate-700 text-slate-400 hover:text-slate-200 hover:border-slate-600'
                              }`}
                            >
                              {active && <CheckCircle2 className="w-3 h-3 inline mr-1 text-blue-400" />}
                              {op}
                            </button>
                          );
                        })}
                      </div>

                      {/* Add Custom Operation Input */}
                      <div className="flex gap-2 pt-1">
                        <input
                          type="text"
                          value={formData.customOperation}
                          onChange={(e) => setFormData(prev => ({ ...prev, customOperation: e.target.value }))}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                              e.preventDefault();
                              handleAddCustomOperation();
                            }
                          }}
                          placeholder="Add custom operational focus..."
                          className="flex-1 h-9 px-3 rounded-lg bg-slate-800/50 border border-slate-700/60 text-xs text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                        />
                        <button
                          type="button"
                          onClick={handleAddCustomOperation}
                          className="h-9 px-3 rounded-lg bg-slate-800 hover:bg-slate-700 border border-slate-600 text-xs font-semibold text-slate-200 transition-colors flex items-center gap-1 cursor-pointer"
                        >
                          <Plus className="w-3.5 h-3.5" />
                          <span>Add</span>
                        </button>
                      </div>

                      {errors.operations && <p className="text-[11px] text-red-400 font-semibold">{errors.operations}</p>}
                    </div>

                    {/* Section D: Consent & Policies */}
                    <div className="pt-3 space-y-2 border-t border-slate-800">
                      <label className="flex items-start gap-2.5 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={formData.consent}
                          onChange={(e) => setFormData(prev => ({ ...prev, consent: e.target.checked }))}
                          className="mt-0.5 rounded border-slate-700 bg-slate-800 text-blue-600 focus:ring-blue-500"
                        />
                        <span className="text-xs text-slate-400 leading-relaxed">
                          I accept the{' '}
                          <Link to="/privacy" target="_blank" className="text-blue-400 underline hover:text-blue-300">
                            Privacy Policy
                          </Link>{' '}
                          and{' '}
                          <Link to="/terms" target="_blank" className="text-blue-400 underline hover:text-blue-300">
                            Terms of Service
                          </Link>
                          . I consent to ProfitMachines securely storing my corporate profile to provision enterprise platform tools and executive sales calculators. (Passwords are never shared or stored in Google Sheets.)
                        </span>
                      </label>
                      {errors.consent && <p className="text-[11px] text-red-400 font-semibold">{errors.consent}</p>}
                    </div>

                    {/* Action Buttons */}
                    <div className="pt-3 flex items-center gap-3">
                      <button
                        type="button"
                        onClick={() => setStep(1)}
                        className="px-5 h-12 rounded-xl border border-slate-700 text-slate-300 hover:bg-slate-800 text-xs font-bold transition-colors cursor-pointer"
                      >
                        &larr; Back
                      </button>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="flex-1 h-12 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 hover:from-blue-500 hover:to-indigo-500 text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-blue-600/30 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                            <span>Creating Enterprise Account...</span>
                          </>
                        ) : (
                          <>
                            <span>Register / Create Account</span>
                            <CheckCircle2 className="w-4 h-4" />
                          </>
                        )}
                      </button>
                    </div>

                  </div>
                )}

              </form>
            )}

          </div>

        </div>
      </div>
    </div>
  );
}
