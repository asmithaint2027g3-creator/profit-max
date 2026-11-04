import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import {
  Lock,
  Mail,
  User,
  Eye,
  EyeOff,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  AlertCircle,
  Sparkles,
  KeyRound,
  Calculator,
  Compass,
  ArrowLeft
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { trackEvent } from '../../lib/analytics';

export default function SignIn() {
  const navigate = useNavigate();
  const location = useLocation();
  const { login, isAuthenticated, resetPassword } = useAuth();

  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Forgot password modal state
  const [isForgotOpen, setIsForgotOpen] = useState(false);
  const [forgotIdentifier, setForgotIdentifier] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');
  const [forgotError, setForgotError] = useState<string | null>(null);
  const [forgotSuccess, setForgotSuccess] = useState<string | null>(null);
  const [isResetting, setIsResetting] = useState(false);

  // Read redirect destination
  const searchParams = new URLSearchParams(location.search);
  const redirectUrl = searchParams.get('redirect') || '/sales-calculators';

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Sign In | ProfitMachines Enterprise Access';
    trackEvent({ eventName: 'PAGE_VIEW_SIGN_IN', category: 'AUTH' });
    if (isAuthenticated) {
      navigate(redirectUrl, { replace: true });
    }
  }, [isAuthenticated, navigate, redirectUrl]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!identifier.trim()) {
      setError('Please provide your registered User ID or Business Email.');
      return;
    }
    if (!password) {
      setError('Please enter your account password.');
      return;
    }

    setIsSubmitting(true);
    trackEvent({ eventName: 'LOGIN_ATTEMPT', category: 'AUTH' });

    try {
      await login(identifier, password);
      trackEvent({ eventName: 'LOGIN_SUCCESS', category: 'AUTH' });
      navigate(redirectUrl, { replace: true });
    } catch (err: any) {
      console.error('Sign In error:', err);
      setError(err.message || 'Invalid User ID/Email or Password. Please verify your credentials.');
      trackEvent({ eventName: 'LOGIN_FAILURE', category: 'AUTH', label: err.message });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleResetPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setForgotError(null);
    setForgotSuccess(null);

    if (!forgotIdentifier.trim()) {
      setForgotError('Please enter your registered User ID or Business Email.');
      return;
    }
    if (newPassword.length < 8) {
      setForgotError('New password must be at least 8 characters long.');
      return;
    }
    if (newPassword !== confirmNewPassword) {
      setForgotError('Passwords do not match.');
      return;
    }

    setIsResetting(true);
    try {
      await resetPassword(forgotIdentifier, newPassword);
      setForgotSuccess('Your password has been successfully reset. You may now sign in.');
      setTimeout(() => {
        setIsForgotOpen(false);
        setIdentifier(forgotIdentifier);
        setPassword('');
        setForgotSuccess(null);
      }, 2000);
    } catch (err: any) {
      setForgotError(err.message || 'Unable to reset password. Please check your credentials.');
    } finally {
      setIsResetting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-blue-50/30 text-slate-900 flex flex-col justify-between pt-24 pb-12 relative overflow-hidden">
      {/* Ambient Brand Accents */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12 flex items-center justify-center relative z-10">
        <div className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-12 bg-white border border-slate-200/90 rounded-3xl shadow-2xl shadow-blue-900/5 overflow-hidden">

          {/* ── LEFT COLUMN: EXECUTIVE BRANDING & VALUE PROPOSITION ── */}
          <div className="lg:col-span-5 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 p-8 sm:p-12 border-b lg:border-b-0 lg:border-r border-slate-800 text-white flex flex-col justify-between relative">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 font-mono text-xs font-bold tracking-widest uppercase">
                <ShieldCheck className="w-4 h-4 text-blue-400" />
                Enterprise Access Portal
              </div>

              <div>
                <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-tight">
                  Transform Revenue Into An <br />
                  <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-sky-300 bg-clip-text text-transparent">
                    Engineered Science
                  </span>
                </h1>
                <p className="text-sm text-slate-300 mt-3 leading-relaxed">
                  Sign in to access your proprietary workspace, executive sales calculators, dark-funnel telemetry, and AI revenue models.
                </p>
              </div>

              {/* Value Feature Highlights */}
              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-blue-500/20 border border-blue-400/30 text-blue-300 flex items-center justify-center shrink-0 mt-0.5">
                    <Calculator className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white">Executive Sales Calculators</div>
                    <div className="text-xs text-slate-300 leading-normal">Interactive pipeline velocity, dark-funnel recovery, and CAC payback simulation engines.</div>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 flex items-center justify-center shrink-0 mt-0.5">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white">Dual-Vector Growth Modeling</div>
                    <div className="text-xs text-slate-300 leading-normal">Strategic enterprise diagnostics and contribution margin acceleration playbooks.</div>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-purple-500/20 border border-purple-400/30 text-purple-300 flex items-center justify-center shrink-0 mt-0.5">
                    <Lock className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white">Authorized Workspace Access</div>
                    <div className="text-xs text-slate-300 leading-normal">Direct authorized access to your organization's custom revenue diagnostic models.</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-slate-800 mt-6 text-xs text-slate-400 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>ProfitMachines Enterprise Portal &bull; Active</span>
            </div>
          </div>

          {/* ── RIGHT COLUMN: SIGN IN FORM ── */}
          <div className="lg:col-span-7 p-8 sm:p-12 flex flex-col justify-center bg-white">
            <div className="max-w-md w-full mx-auto space-y-6">

              <div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-heading">
                  Sign In to ProfitMachines
                </h2>
                <p className="text-sm text-slate-600 mt-1">
                  Enter your registered User ID or corporate email address.
                </p>
              </div>

              {/* Error Banner */}
              {error && (
                <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm flex items-start gap-3 animate-in fade-in">
                  <AlertCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                  <span className="leading-relaxed font-medium">{error}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Field 1: User ID or Business Email */}
                <div>
                  <label className="block text-sm font-bold text-slate-900 mb-2">
                    User ID or Business Email <span className="text-blue-600">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
                      <User className="w-5 h-5" />
                    </div>
                    <input
                      type="text"
                      required
                      value={identifier}
                      onChange={(e) => setIdentifier(e.target.value)}
                      placeholder="e.g. sarah_cro or sarah@enterprise.com"
                      className="w-full h-12 pl-11 pr-4 rounded-xl bg-slate-50/70 hover:bg-white focus:bg-white border border-slate-300 text-base text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-600 font-medium transition-all"
                    />
                  </div>
                </div>

                {/* Field 2: Password */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="block text-sm font-bold text-slate-900">
                      Password <span className="text-blue-600">*</span>
                    </label>
                    <button
                      type="button"
                      onClick={() => setIsForgotOpen(true)}
                      className="text-xs sm:text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors cursor-pointer"
                    >
                      Forgot Password?
                    </button>
                  </div>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
                      <Lock className="w-5 h-5" />
                    </div>
                    <input
                      type={showPassword ? 'text' : 'password'}
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Enter your password"
                      className="w-full h-12 pl-11 pr-11 rounded-xl bg-slate-50/70 hover:bg-white focus:bg-white border border-slate-300 text-base text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-600 font-medium transition-all"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-slate-400 hover:text-slate-700 transition-colors cursor-pointer"
                      aria-label={showPassword ? 'Hide password' : 'Show password'}
                    >
                      {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                </div>

                {/* Submit CTA */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full h-12 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 active:from-blue-800 active:to-indigo-800 text-white font-bold text-base tracking-wide shadow-md shadow-blue-600/25 hover:shadow-lg hover:shadow-blue-600/35 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>Signing In...</span>
                      </>
                    ) : (
                      <>
                        <span>Sign In to Platform</span>
                        <ArrowRight className="w-5 h-5" />
                      </>
                    )}
                  </button>
                </div>
              </form>

              {/* Registration Alternative */}
              <div className="pt-4 border-t border-slate-200 text-center">
                <p className="text-sm text-slate-600">
                  New to ProfitMachines?{' '}
                  <Link
                    to="/register"
                    className="text-blue-600 hover:text-blue-700 font-bold transition-colors underline-offset-4 hover:underline"
                  >
                    Create a New Account
                  </Link>
                </p>
              </div>

              {/* Security Pill */}
              <div className="text-xs text-slate-500 text-center flex items-center justify-center gap-1.5 pt-1">
                <Lock className="w-3.5 h-3.5 text-blue-600" />
                <span>Protected Enterprise Session</span>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* ── FORGOT PASSWORD MODAL ── */}
      {isForgotOpen && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="w-full max-w-md bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-5 animate-in fade-in zoom-in-95">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-2xl bg-blue-50 border border-blue-200 text-blue-600 flex items-center justify-center">
                <KeyRound className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900">Reset Account Password</h3>
                <p className="text-xs text-slate-500">Enter your identifier and set a new password.</p>
              </div>
            </div>

            {forgotError && (
              <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs font-medium">
                {forgotError}
              </div>
            )}

            {forgotSuccess && (
              <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-semibold flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>{forgotSuccess}</span>
              </div>
            )}

            <form onSubmit={handleResetPassword} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-800 mb-1">User ID or Business Email</label>
                <input
                  type="text"
                  required
                  value={forgotIdentifier}
                  onChange={(e) => setForgotIdentifier(e.target.value)}
                  placeholder="e.g. sarah_cro or sarah@enterprise.com"
                  className="w-full h-11 px-3.5 rounded-xl bg-slate-50 border border-slate-300 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-600"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-800 mb-1">New Password (min 8 chars)</label>
                <input
                  type="password"
                  required
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  placeholder="Enter new password"
                  className="w-full h-11 px-3.5 rounded-xl bg-slate-50 border border-slate-300 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-600"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-800 mb-1">Confirm New Password</label>
                <input
                  type="password"
                  required
                  value={confirmNewPassword}
                  onChange={(e) => setConfirmNewPassword(e.target.value)}
                  placeholder="Re-enter new password"
                  className="w-full h-11 px-3.5 rounded-xl bg-slate-50 border border-slate-300 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-600"
                />
              </div>

              <div className="flex items-center justify-end gap-2.5 pt-3">
                <button
                  type="button"
                  onClick={() => {
                    setIsForgotOpen(false);
                    setForgotError(null);
                    setForgotSuccess(null);
                  }}
                  className="px-4 py-2.5 rounded-xl border border-slate-300 text-slate-700 hover:bg-slate-100 text-xs font-semibold cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isResetting}
                  className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white text-xs font-bold shadow-md shadow-blue-600/20 cursor-pointer disabled:opacity-50"
                >
                  {isResetting ? 'Updating...' : 'Update Password'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
