import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  User,
  Mail,
  Phone,
  Lock,
  Building2,
  Globe,
  MapPin,
  Briefcase,
  Users,
  CheckCircle2,
  AlertCircle,
  Eye,
  EyeOff,
  ArrowRight,
  ArrowLeft,
  ShieldCheck,
  Sparkles,
  Plus,
  HelpCircle
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { trackEvent } from '../../lib/analytics';

// ── Industry Sector Options ─────────────────────────────────────────────────
const INDUSTRY_SECTORS = [
  'Enterprise SaaS & Cloud Software',
  'AI / Machine Learning & Intelligent Automation',
  'Fintech, Banking & Digital Assets',
  'HealthTech & Life Sciences',
  'Advanced Manufacturing & Industrial IoT',
  'Supply Chain & Autonomous Logistics',
  'CleanTech, Renewable Energy & Climate',
  'Professional Business Services & Consulting',
  'E-Commerce & Omnichannel Retail',
  'Telecommunications & Network Infrastructure',
  'Media, Entertainment & Creative Tech',
  'Other Specialized Sector'
];

// ── Headcount Options ───────────────────────────────────────────────────────
const HEADCOUNT_OPTIONS = [
  { value: 'Individual', label: 'Individual (1)' },
  { value: 'Startup (1–10)', label: 'Startup (1–10 employees)' },
  { value: 'Small (11–50)', label: 'Small Business (11–50 employees)' },
  { value: 'Medium (51–250)', label: 'Mid-Market (51–250 employees)' },
  { value: 'Large (251–1000)', label: 'Large Enterprise (251–1000 employees)' },
  { value: 'Enterprise (1000+)', label: 'Global Enterprise (1000+ employees)' }
];

// ── Default Business Operations Options ─────────────────────────────────────
const DEFAULT_OPERATIONS = [
  'B2B Enterprise Direct Sales',
  'Product-Led Growth (PLG)',
  'Global Channel & Partner Distribution',
  'Outbound Cold Pipeline Generation',
  'Inbound Organic & Performance Demand',
  'Account-Based Marketing (ABM)',
  'Customer Expansion & Net Retention (NDR)',
  'Cross-Border International Expansion',
  'AI Sales Agent Automation'
];

// ── Country List ────────────────────────────────────────────────────────────
const GLOBAL_COUNTRIES = [
  'United States', 'United Kingdom', 'Canada', 'Australia', 'Germany',
  'France', 'Singapore', 'India', 'United Arab Emirates', 'Japan',
  'Netherlands', 'Switzerland', 'Sweden', 'Ireland', 'Israel',
  'Spain', 'Italy', 'Brazil', 'South Africa', 'Other'
];

export default function Register() {
  const navigate = useNavigate();
  const { register, isAuthenticated, checkDuplicate } = useAuth();

  const [step, setStep] = useState<1 | 2>(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [registeredProfile, setRegisteredProfile] = useState<any>(null);

  // Form State
  const [formData, setFormData] = useState({
    // Step 1: Basic Information
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
    industry: 'Enterprise SaaS & Cloud Software',
    subIndustry: '',
    headcount: 'Medium (51–250)',
    operations: [
      'B2B Enterprise Direct Sales',
      'Outbound Cold Pipeline Generation'
    ],
    customOperation: '',
    consent: false
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Create Account | ProfitMachines Enterprise Access';
    trackEvent({ eventName: 'PAGE_VIEW_REGISTER', category: 'AUTH' });
    if (isAuthenticated && !isSuccess) {
      navigate('/sales-calculators', { replace: true });
    }
  }, [isAuthenticated, isSuccess, navigate]);

  // Validation helpers
  const validateBusinessEmail = (email: string): { valid: boolean; message?: string } => {
    const trimmed = email.trim().toLowerCase();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) {
      return { valid: false, message: 'Please enter a valid corporate email format.' };
    }
    const freeDomains = ['gmail.com', 'yahoo.com', 'hotmail.com', 'outlook.com', 'aol.com', 'icloud.com'];
    const domain = trimmed.split('@')[1];
    if (freeDomains.includes(domain)) {
      // Allowed but advised
    }
    return { valid: true };
  };

  const validatePhone = (phone: string): { valid: boolean; message?: string } => {
    const clean = phone.replace(/[\s\-\(\)\.]/g, '');
    if (clean.length < 7 || clean.length > 16 || !/^\+?[0-9]+$/.test(clean)) {
      return { valid: false, message: 'Please enter a valid mobile number with country code.' };
    }
    return { valid: true };
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
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
      newErrors.consent = 'You must accept the Privacy Policy and Terms of Service to proceed.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle transition to Step 2
  const handleNext = async () => {
    if (!validateStep1()) return;

    try {
      const dup = await checkDuplicate(formData.userId, formData.email);
      if (dup.exists) {
        setErrors(prev => ({
          ...prev,
          [dup.field || 'form']: dup.message || 'User ID or Email is already registered.'
        }));
        return;
      }
      setStep(2);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (err: any) {
      console.warn('Duplicate check warning:', err);
      setStep(2);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Handle final registration
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
    trackEvent({ eventName: 'REGISTER_ATTEMPT', category: 'AUTH' });

    try {
      const profile = await register({
        fullName: formData.fullName,
        email: formData.email,
        mobile: formData.mobile,
        userId: formData.userId,
        password: formData.password,
        company: formData.company,
        website: formData.website || undefined,
        country: formData.country,
        state: formData.state || undefined,
        city: formData.city || undefined,
        industry: formData.industry,
        subIndustry: formData.subIndustry || undefined,
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
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-blue-50/30 text-slate-900 flex flex-col justify-between pt-24 pb-12 relative overflow-hidden">
      {/* Background Radiance */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12 flex items-center justify-center relative z-10">
        <div className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-12 bg-white border border-slate-200/90 rounded-3xl shadow-2xl shadow-blue-900/5 overflow-hidden">

          {/* ── LEFT COLUMN: ONBOARDING VALUE & PROGRESS ── */}
          <div className="lg:col-span-4 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 p-8 sm:p-10 border-b lg:border-b-0 lg:border-r border-slate-800 text-white flex flex-col justify-between">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 font-mono text-xs font-bold tracking-widest uppercase">
                <ShieldCheck className="w-4 h-4 text-blue-400" />
                Two-Step Registration
              </div>

              <div>
                <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-tight font-heading">
                  Join the Enterprise Revenue Network
                </h1>
                <p className="text-sm text-slate-300 mt-2 leading-relaxed">
                  Register your corporate credentials to unlock executive diagnostic models and sales calculators.
                </p>
              </div>

              {/* Progress Indicator */}
              <div className="space-y-3 pt-2">
                {/* Step 1 Pill */}
                <div
                  onClick={() => !isSuccess && setStep(1)}
                  className={`p-3.5 rounded-2xl border transition-all cursor-pointer flex items-center gap-3.5 ${
                    step === 1
                      ? 'bg-blue-600/20 border-blue-400 text-white shadow-md'
                      : 'bg-white/5 border-white/10 hover:border-white/20 text-slate-300'
                  }`}
                >
                  <div
                    className={`w-9 h-9 rounded-xl flex items-center justify-center text-xs font-mono font-bold shrink-0 ${
                      step === 1 ? 'bg-blue-600 text-white' : 'bg-slate-800 text-slate-400'
                    }`}
                  >
                    01
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white">Basic Information</div>
                    <div className="text-xs text-slate-300">Personal & Identity Credentials</div>
                  </div>
                </div>

                {/* Step 2 Pill */}
                <div
                  onClick={() => !isSuccess && validateStep1() && setStep(2)}
                  className={`p-3.5 rounded-2xl border transition-all cursor-pointer flex items-center gap-3.5 ${
                    step === 2
                      ? 'bg-blue-600/20 border-blue-400 text-white shadow-md'
                      : 'bg-white/5 border-white/10 hover:border-white/20 text-slate-300'
                  }`}
                >
                  <div
                    className={`w-9 h-9 rounded-xl flex items-center justify-center text-xs font-mono font-bold shrink-0 ${
                      step === 2 ? 'bg-blue-600 text-white' : 'bg-slate-800 text-slate-400'
                    }`}
                  >
                    02
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white">Company Information</div>
                    <div className="text-xs text-slate-300">Corporate & Operational Scope</div>
                  </div>
                </div>
              </div>

              {/* Feature Highlights */}
              <div className="pt-4 space-y-2.5 text-xs text-slate-300 border-t border-slate-800">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                  <span>Executive Sales Calculators Suite</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                  <span>Pipeline Velocity & Dark Funnel Modeling</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                  <span>Authorized Enterprise Workspace Access</span>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-800 mt-6 text-sm text-slate-400">
              Already have an account?{' '}
              <Link to="/sign-in" className="text-blue-400 hover:text-blue-300 font-bold transition-colors">
                Sign In &rarr;
              </Link>
            </div>
          </div>

          {/* ── RIGHT COLUMN: FORM WORKFLOW / SUCCESS STATE ── */}
          <div className="lg:col-span-8 p-8 sm:p-12 bg-white overflow-y-auto max-h-[85vh]">

            {/* ── SUCCESS STATE ── */}
            {isSuccess ? (
              <div className="py-8 text-center space-y-6 animate-in fade-in zoom-in-95">
                <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center mx-auto shadow-xs">
                  <CheckCircle2 className="w-9 h-9" />
                </div>

                <div className="space-y-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                    Registration Successfully Logged
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-heading">
                    Account Created Successfully
                  </h2>
                  <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                    Welcome to ProfitMachines, <span className="font-bold text-slate-900">{registeredProfile?.fullName}</span>. Your enterprise account has been registered and synced with our central directory.
                  </p>
                </div>

                {/* Account Details Box */}
                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 max-w-sm mx-auto text-left space-y-2.5 text-sm">
                  <div className="flex justify-between border-b border-slate-200 pb-2">
                    <span className="text-slate-500 font-medium">Registration ID:</span>
                    <span className="font-mono font-bold text-blue-600">{registeredProfile?.registrationId}</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-200 pb-2">
                    <span className="text-slate-500 font-medium">Preferred User ID:</span>
                    <span className="font-mono font-bold text-slate-900">{registeredProfile?.userId}</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-200 pb-2">
                    <span className="text-slate-500 font-medium">Registered Email:</span>
                    <span className="font-semibold text-slate-900">{registeredProfile?.email}</span>
                  </div>
                  <div className="flex justify-between pt-1">
                    <span className="text-slate-500 font-medium">Unlocked Access:</span>
                    <span className="font-bold text-emerald-600">Sales Calculators & Telemetry</span>
                  </div>
                </div>

                <p className="text-xs text-slate-500 max-w-md mx-auto">
                  A registration confirmation email has been dispatched to <strong className="text-slate-800">{registeredProfile?.email}</strong>.
                </p>

                <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
                  <button
                    type="button"
                    onClick={() => navigate('/sales-calculators')}
                    className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold text-sm tracking-wide shadow-md shadow-blue-600/25 transition-all cursor-pointer flex items-center justify-center gap-2"
                  >
                    <span>Access Sales Calculators Now</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <button
                    type="button"
                    onClick={() => navigate('/sign-in')}
                    className="px-6 py-3 rounded-xl border border-slate-300 hover:bg-slate-50 text-slate-700 font-bold text-sm transition-colors cursor-pointer"
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
                  <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                    <span className="leading-relaxed font-medium">{errors.form}</span>
                  </div>
                )}

                {/* STEP 1: BASIC INFORMATION */}
                {step === 1 && (
                  <div className="space-y-5 animate-in fade-in">
                    <div className="border-b border-slate-200 pb-3">
                      <span className="text-xs font-mono font-bold uppercase tracking-widest text-blue-600">Step 01 / 02</span>
                      <h3 className="text-2xl font-bold text-slate-900 mt-1 font-heading">Basic & Security Information</h3>
                      <p className="text-sm text-slate-600 mt-0.5">Please provide your primary corporate contact information.</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Full Name */}
                      <div>
                        <label className="block text-sm font-bold text-slate-900 mb-1.5">
                          Full Name <span className="text-blue-600">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleChange}
                          placeholder="Sarah Jenkins"
                          className="w-full h-12 px-4 rounded-xl bg-slate-50/70 hover:bg-white focus:bg-white border border-slate-300 text-base text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-600 font-medium transition-all"
                        />
                        {errors.fullName && <p className="text-xs text-red-600 mt-1 font-semibold">{errors.fullName}</p>}
                      </div>

                      {/* Business Email */}
                      <div>
                        <label className="block text-sm font-bold text-slate-900 mb-1.5">
                          Corporate Business Email <span className="text-blue-600">*</span>
                        </label>
                        <input
                          type="email"
                          required
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="sarah@enterprise.com"
                          className="w-full h-12 px-4 rounded-xl bg-slate-50/70 hover:bg-white focus:bg-white border border-slate-300 text-base text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-600 font-medium transition-all"
                        />
                        {errors.email && <p className="text-xs text-red-600 mt-1 font-semibold">{errors.email}</p>}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Mobile Number */}
                      <div>
                        <label className="block text-sm font-bold text-slate-900 mb-1.5">
                          Mobile Number (with country code) <span className="text-blue-600">*</span>
                        </label>
                        <input
                          type="tel"
                          required
                          name="mobile"
                          value={formData.mobile}
                          onChange={handleChange}
                          placeholder="+1 (555) 000-0000"
                          className="w-full h-12 px-4 rounded-xl bg-slate-50/70 hover:bg-white focus:bg-white border border-slate-300 text-base text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-600 font-medium transition-all"
                        />
                        {errors.mobile && <p className="text-xs text-red-600 mt-1 font-semibold">{errors.mobile}</p>}
                      </div>

                      {/* Preferred User ID */}
                      <div>
                        <label className="block text-sm font-bold text-slate-900 mb-1.5">
                          Preferred User ID <span className="text-blue-600">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          name="userId"
                          value={formData.userId}
                          onChange={handleChange}
                          placeholder="e.g. sarah_cro"
                          className="w-full h-12 px-4 rounded-xl bg-slate-50/70 hover:bg-white focus:bg-white border border-slate-300 text-base text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-600 font-mono font-medium transition-all"
                        />
                        {errors.userId && <p className="text-xs text-red-600 mt-1 font-semibold">{errors.userId}</p>}
                      </div>
                    </div>

                    {/* Password & Confirm Password */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-bold text-slate-900 mb-1.5">
                          Password <span className="text-blue-600">*</span>
                        </label>
                        <div className="relative">
                          <input
                            type={showPassword ? 'text' : 'password'}
                            required
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            placeholder="Enter password (min 8 chars)"
                            className="w-full h-12 pl-4 pr-11 rounded-xl bg-slate-50/70 hover:bg-white focus:bg-white border border-slate-300 text-base text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-600 font-medium transition-all"
                          />
                          <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-slate-400 hover:text-slate-700 cursor-pointer"
                          >
                            {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                          </button>
                        </div>
                        {errors.password && <p className="text-xs text-red-600 mt-1 font-semibold">{errors.password}</p>}
                      </div>

                      <div>
                        <label className="block text-sm font-bold text-slate-900 mb-1.5">
                          Confirm Password <span className="text-blue-600">*</span>
                        </label>
                        <div className="relative">
                          <input
                            type={showConfirmPassword ? 'text' : 'password'}
                            required
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            placeholder="Re-enter password"
                            className="w-full h-12 pl-4 pr-11 rounded-xl bg-slate-50/70 hover:bg-white focus:bg-white border border-slate-300 text-base text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-600 font-medium transition-all"
                          />
                          <button
                            type="button"
                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                            className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-slate-400 hover:text-slate-700 cursor-pointer"
                          >
                            {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                          </button>
                        </div>
                        {errors.confirmPassword && (
                          <p className="text-xs text-red-600 mt-1 font-semibold">{errors.confirmPassword}</p>
                        )}
                      </div>
                    </div>

                    <div className="pt-3">
                      <button
                        type="button"
                        onClick={handleNext}
                        className="w-full h-12 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 active:from-blue-800 active:to-indigo-800 text-white font-bold text-base shadow-md shadow-blue-600/25 transition-all flex items-center justify-center gap-2 cursor-pointer"
                      >
                        <span>Next: Company Details</span>
                        <ArrowRight className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                )}

                {/* STEP 2: COMPANY INFORMATION */}
                {step === 2 && (
                  <div className="space-y-5 animate-in fade-in">
                    <div className="border-b border-slate-200 pb-3 flex items-center justify-between">
                      <div>
                        <span className="text-xs font-mono font-bold uppercase tracking-widest text-indigo-600">Step 02 / 02</span>
                        <h3 className="text-2xl font-bold text-slate-900 mt-1 font-heading">Company & Operational Scope</h3>
                        <p className="text-sm text-slate-600 mt-0.5">Tell us about your organization and commercial focus.</p>
                      </div>
                      <button
                        type="button"
                        onClick={() => setStep(1)}
                        className="text-xs sm:text-sm font-semibold text-slate-600 hover:text-slate-900 flex items-center gap-1 cursor-pointer px-3 py-1.5 rounded-lg border border-slate-200 hover:bg-slate-50"
                      >
                        <ArrowLeft className="w-4 h-4" />
                        <span>Back</span>
                      </button>
                    </div>

                    {/* Section A: Corporate Information */}
                    <div className="space-y-3">
                      <div className="text-xs font-bold uppercase tracking-wider text-slate-500">A. Corporate Profile</div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-bold text-slate-900 mb-1.5">
                            Company Name <span className="text-blue-600">*</span>
                          </label>
                          <input
                            type="text"
                            required
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            placeholder="Acme Global Inc."
                            className="w-full h-12 px-4 rounded-xl bg-slate-50/70 hover:bg-white focus:bg-white border border-slate-300 text-base text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-600 font-medium transition-all"
                          />
                          {errors.company && <p className="text-xs text-red-600 mt-1 font-semibold">{errors.company}</p>}
                        </div>

                        <div>
                          <label className="block text-sm font-bold text-slate-900 mb-1.5">Official Website (optional)</label>
                          <input
                            type="url"
                            name="website"
                            value={formData.website}
                            onChange={handleChange}
                            placeholder="https://company.com"
                            className="w-full h-12 px-4 rounded-xl bg-slate-50/70 hover:bg-white focus:bg-white border border-slate-300 text-base text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-600 font-medium transition-all"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        <div>
                          <label className="block text-sm font-bold text-slate-900 mb-1.5">
                            Country <span className="text-blue-600">*</span>
                          </label>
                          <select
                            name="country"
                            value={formData.country}
                            onChange={handleChange}
                            className="w-full h-12 px-3.5 rounded-xl bg-slate-50/70 hover:bg-white focus:bg-white border border-slate-300 text-base text-slate-900 focus:outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-600 font-medium transition-all"
                          >
                            {GLOBAL_COUNTRIES.map(c => (
                              <option key={c} value={c} className="bg-white text-slate-900">{c}</option>
                            ))}
                          </select>
                        </div>

                        <div>
                          <label className="block text-sm font-bold text-slate-900 mb-1.5">State / Region</label>
                          <input
                            type="text"
                            name="state"
                            value={formData.state}
                            onChange={handleChange}
                            placeholder="California / Ontario"
                            className="w-full h-12 px-4 rounded-xl bg-slate-50/70 hover:bg-white focus:bg-white border border-slate-300 text-base text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-600 font-medium transition-all"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-bold text-slate-900 mb-1.5">City</label>
                          <input
                            type="text"
                            name="city"
                            value={formData.city}
                            onChange={handleChange}
                            placeholder="San Francisco"
                            className="w-full h-12 px-4 rounded-xl bg-slate-50/70 hover:bg-white focus:bg-white border border-slate-300 text-base text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-600 font-medium transition-all"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Section B: Industry and Company Size */}
                    <div className="space-y-3 pt-2">
                      <div className="text-xs font-bold uppercase tracking-wider text-slate-500">B. Industry & Headcount</div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-bold text-slate-900 mb-1.5">
                            Industry Sector <span className="text-blue-600">*</span>
                          </label>
                          <select
                            name="industry"
                            value={formData.industry}
                            onChange={handleChange}
                            className="w-full h-12 px-3.5 rounded-xl bg-slate-50/70 hover:bg-white focus:bg-white border border-slate-300 text-base text-slate-900 focus:outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-600 font-medium transition-all"
                          >
                            {INDUSTRY_SECTORS.map(ind => (
                              <option key={ind} value={ind} className="bg-white text-slate-900">{ind}</option>
                            ))}
                          </select>
                        </div>

                        <div>
                          <label className="block text-sm font-bold text-slate-900 mb-1.5">Sub-industry / Vertical (optional)</label>
                          <input
                            type="text"
                            name="subIndustry"
                            value={formData.subIndustry}
                            onChange={handleChange}
                            placeholder="e.g. Cybersecurity, PropTech, Supply Chain AI"
                            className="w-full h-12 px-4 rounded-xl bg-slate-50/70 hover:bg-white focus:bg-white border border-slate-300 text-base text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-600 font-medium transition-all"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-bold text-slate-900 mb-1.5">
                          Company Headcount <span className="text-blue-600">*</span>
                        </label>
                        <select
                          name="headcount"
                          value={formData.headcount}
                          onChange={handleChange}
                          className="w-full h-12 px-3.5 rounded-xl bg-slate-50/70 hover:bg-white focus:bg-white border border-slate-300 text-base text-slate-900 focus:outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-600 font-medium transition-all"
                        >
                          {HEADCOUNT_OPTIONS.map(opt => (
                            <option key={opt.value} value={opt.value} className="bg-white text-slate-900">{opt.label}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Section C: Business Operations */}
                    <div className="space-y-3 pt-2">
                      <div className="flex items-center justify-between">
                        <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
                          C. Active Business Operations <span className="text-blue-600">*</span>
                        </div>
                        <span className="text-xs text-slate-500">Select all that apply</span>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {DEFAULT_OPERATIONS.map(op => {
                          const active = formData.operations.includes(op);
                          return (
                            <button
                              key={op}
                              type="button"
                              onClick={() => handleToggleOperation(op)}
                              className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold border transition-all cursor-pointer ${
                                active
                                  ? 'bg-blue-50 border-blue-500 text-blue-700 shadow-2xs'
                                  : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100 hover:border-slate-300'
                              }`}
                            >
                              {active && <CheckCircle2 className="w-3.5 h-3.5 inline mr-1.5 text-blue-600" />}
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
                          className="flex-1 h-10 px-3.5 rounded-xl bg-slate-50 border border-slate-300 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 font-medium"
                        />
                        <button
                          type="button"
                          onClick={handleAddCustomOperation}
                          className="h-10 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 border border-slate-300 text-xs font-bold text-slate-800 transition-colors flex items-center gap-1.5 cursor-pointer"
                        >
                          <Plus className="w-4 h-4" />
                          <span>Add</span>
                        </button>
                      </div>

                      {errors.operations && <p className="text-xs text-red-600 font-semibold">{errors.operations}</p>}
                    </div>

                    {/* Section D: Consent & Policies */}
                    <div className="pt-3 space-y-2 border-t border-slate-200">
                      <label className="flex items-start gap-3 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={formData.consent}
                          onChange={(e) => setFormData(prev => ({ ...prev, consent: e.target.checked }))}
                          className="mt-1 w-4 h-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
                        />
                        <span className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                          I accept the{' '}
                          <Link to="/privacy" target="_blank" className="text-blue-600 underline hover:text-blue-700 font-semibold">
                            Privacy Policy
                          </Link>{' '}
                          and{' '}
                          <Link to="/terms" target="_blank" className="text-blue-600 underline hover:text-blue-700 font-semibold">
                            Terms of Service
                          </Link>
                          . I consent to ProfitMachines securely storing my corporate profile to provision enterprise platform tools and executive sales calculators.
                        </span>
                      </label>
                      {errors.consent && <p className="text-xs text-red-600 font-semibold">{errors.consent}</p>}
                    </div>

                    {/* Action Buttons */}
                    <div className="pt-3 flex items-center gap-3">
                      <button
                        type="button"
                        onClick={() => setStep(1)}
                        className="px-5 h-12 rounded-xl border border-slate-300 text-slate-700 hover:bg-slate-100 text-sm font-bold transition-colors cursor-pointer"
                      >
                        &larr; Back
                      </button>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="flex-1 h-12 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 active:from-blue-800 active:to-indigo-800 text-white font-bold text-base shadow-md shadow-blue-600/25 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                            <span>Creating Account...</span>
                          </>
                        ) : (
                          <>
                            <span>Register / Create Account</span>
                            <CheckCircle2 className="w-5 h-5" />
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
