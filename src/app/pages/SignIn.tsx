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
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col justify-between pt-20 relative overflow-hidden">
      {/* Ambient Cyber Accents */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16 flex items-center justify-center relative z-10">
        <div className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-12 bg-slate-900/90 border border-slate-800 rounded-3xl shadow-2xl overflow-hidden backdrop-blur-xl">

          {/* ── LEFT COLUMN: EXECUTIVE BRANDING & VALUE PROPOSITION ── */}
          <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 via-blue-950/40 to-slate-950 p-8 sm:p-12 border-b lg:border-b-0 lg:border-r border-slate-800/80 flex flex-col justify-between relative">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 font-mono text-[11px] font-bold tracking-widest uppercase">
                <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
                Enterprise Access Portal
              </div>

              <div>
                <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-tight">
                  Transform Revenue Into An <br />
                  <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent">
                    Engineered Science
                  </span>
                </h1>
                <p className="text-xs sm:text-sm text-slate-400 mt-3 leading-relaxed">
                  Sign in to access your proprietary workspace, executive sales calculators, dark-funnel telemetry, and AI revenue models.
                </p>
              </div>

              {/* Value Feature Highlights */}
              <div className="space-y-3.5 pt-2">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center shrink-0 mt-0.5">
                    <Calculator className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-200">Executive Sales Calculators</div>
                    <div className="text-[11px] text-slate-400 leading-normal">Interactive pipeline velocity, dark-funnel leak, and CAC payback simulation engines.</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-200">Dual-Vector Growth Modeling</div>
                    <div className="text-[11px] text-slate-400 leading-normal">+28.4% contribution margin expansion with real-time intent telemetry.</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-purple-500/10 border border-purple-500/20 text-purple-400 flex items-center justify-center shrink-0 mt-0.5">
                    <Lock className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-200">Zero-Data-Retention Security</div>
                    <div className="text-[11px] text-slate-400 leading-normal">PBKDF2 cryptographic isolation with strict mutual enterprise NDA.</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-slate-800/80 mt-6 text-[11px] text-slate-500 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Identity Service Online &bull; SOC-2 Type II Guardrails</span>
            </div>
          </div>

          {/* ── RIGHT COLUMN: SIGN IN FORM ── */}
          <div className="lg:col-span-7 p-8 sm:p-12 flex flex-col justify-center bg-slate-900/60">
            <div className="max-w-md w-full mx-auto space-y-6">

              <div>
                <h2 className="text-2xl font-bold text-white tracking-tight">Sign In to ProfitMachines</h2>
                <p className="text-xs sm:text-sm text-slate-400 mt-1">
                  Enter your registered User ID or corporate email address.
                </p>
              </div>

              {/* Error Banner */}
              {error && (
                <div className="p-3.5 rounded-xl bg-red-500/10 border border-red-500/30 text-red-300 text-xs flex items-start gap-2.5 animate-in fade-in">
                  <AlertCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{error}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Field 1: User ID or Business Email */}
                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                    User ID or Business Email *
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
                      <User className="w-4 h-4" />
                    </div>
                    <input
                      type="text"
                      required
                      value={identifier}
                      onChange={(e) => setIdentifier(e.target.value)}
                      placeholder="e.g. sarah_cro or sarah@enterprise.com"
                      className="w-full h-11 pl-10 pr-4 rounded-xl bg-slate-800/70 border border-slate-700/80 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                {/* Field 2: Password */}
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider">
                      Password *
                    </label>
                    <button
                      type="button"
                      onClick={() => setIsForgotOpen(true)}
                      className="text-xs text-blue-400 hover:text-blue-300 transition-colors cursor-pointer"
                    >
                      Forgot Password?
                    </button>
                  </div>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
                      <Lock className="w-4 h-4" />
                    </div>
                    <input
                      type={showPassword ? 'text' : 'password'}
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="••••••••••••"
                      className="w-full h-11 pl-10 pr-11 rounded-xl bg-slate-800/70 border border-slate-700/80 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-slate-400 hover:text-slate-200 transition-colors cursor-pointer"
                      aria-label={showPassword ? 'Hide password' : 'Show password'}
                    >
                      {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                {/* Submit CTA */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full h-12 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 hover:from-blue-500 hover:to-indigo-500 text-white font-bold text-sm tracking-wide shadow-lg shadow-blue-600/30 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>Verifying Credentials...</span>
                      </>
                    ) : (
                      <>
                        <span>Sign In to Platform</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>
              </form>

              {/* Registration Alternative */}
              <div className="pt-4 border-t border-slate-800/80 text-center">
                <p className="text-xs text-slate-400">
                  New to ProfitMachines?{' '}
                  <Link
                    to="/register"
                    className="text-blue-400 hover:text-blue-300 font-bold transition-colors underline-offset-4 hover:underline"
                  >
                    Create a New Account
                  </Link>
                </p>
              </div>

              {/* Security Badge */}
              <div className="text-[11px] text-slate-500 text-center flex items-center justify-center gap-1.5 pt-1">
                <Lock className="w-3 h-3 text-slate-500" />
                <span>256-bit TLS encryption • Authenticated against Master Sheet</span>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* ── FORGOT PASSWORD MODAL ── */}
      {isForgotOpen && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="w-full max-w-md bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-2xl space-y-5 animate-in fade-in zoom-in-95">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center">
                <KeyRound className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Reset Account Password</h3>
                <p className="text-xs text-slate-400">Enter your identifier and set a new password.</p>
              </div>
            </div>

            {forgotError && (
              <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-300 text-xs">
                {forgotError}
              </div>
            )}

            {forgotSuccess && (
              <div className="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{forgotSuccess}</span>
              </div>
            )}

            <form onSubmit={handleResetPassword} className="space-y-3.5">
              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">User ID or Business Email</label>
                <input
                  type="text"
                  required
                  value={forgotIdentifier}
                  onChange={(e) => setForgotIdentifier(e.target.value)}
                  placeholder="e.g. sarah_cro or sarah@enterprise.com"
                  className="w-full h-10 px-3 rounded-lg bg-slate-800 border border-slate-700 text-xs text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">New Password (min 8 chars)</label>
                <input
                  type="password"
                  required
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  placeholder="••••••••••••"
                  className="w-full h-10 px-3 rounded-lg bg-slate-800 border border-slate-700 text-xs text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">Confirm New Password</label>
                <input
                  type="password"
                  required
                  value={confirmNewPassword}
                  onChange={(e) => setConfirmNewPassword(e.target.value)}
                  placeholder="••••••••••••"
                  className="w-full h-10 px-3 rounded-lg bg-slate-800 border border-slate-700 text-xs text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                  className="px-4 py-2 rounded-lg border border-slate-700 text-slate-300 hover:bg-slate-800 text-xs font-semibold cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isResetting}
                  className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold transition-colors cursor-pointer disabled:opacity-50"
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
