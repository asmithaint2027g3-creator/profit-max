import { useState, useEffect, useRef } from 'react';
import { X, Zap, TrendingUp, ArrowRight, Building2, ShoppingBag, Landmark } from 'lucide-react';
import { Link } from 'react-router-dom';
import {
  isPopupSuppressed,
  recordPopupDismissed,
  acquireActivePopup,
  releaseActivePopup
} from '../utils/popupSuppression';

const POPUP_ID = 'marketing_exit_intent';

// Exit-intent modal is ENABLED for desktop visitors.
// Fires only after 30 seconds of engagement, respects 14/30-day suppression rules.
export const EXIT_INTENT_CONFIG = {
  enabledByDefault: true,
  minTimeOnPageMs: 30000, // 30 seconds deliberate engagement before triggering
  suppressionDaysDismissed: 14,
  suppressionDaysSubmitted: 30,
};

interface TabExitPopupProps {
  /** Explicit override to enable exit-intent marketing popup. Default: false */
  enabled?: boolean;
}

const HIGHLIGHTS = [
  { icon: ShoppingBag, label: 'E-commerce & D2C', stat: '3.2X', desc: 'Repeat purchase growth' },
  { icon: Landmark, label: 'BFSI & FinTech', stat: '66%', desc: 'Reduction in Sales Cycle' },
  { icon: Building2, label: 'SaaS & Enterprise', stat: '6X', desc: 'More qualified leads' },
];

export default function TabExitPopup({ enabled = EXIT_INTENT_CONFIG.enabledByDefault }: TabExitPopupProps) {
  const [visible, setVisible] = useState(false);
  const [animateIn, setAnimateIn] = useState(false);
  const arrivedAtRef = useRef(Date.now());

  // If exit-intent is disabled by default, or suppressed by 14/30 day rules, do nothing
  useEffect(() => {
    if (!enabled) return;
    if (isPopupSuppressed(POPUP_ID)) return;

    // Only attach desktop top-exit listener if deliberately enabled
    const handleMouseLeave = (e: MouseEvent) => {
      // Must have spent sufficient deliberate time and moved directly out of top window
      if (Date.now() - arrivedAtRef.current < EXIT_INTENT_CONFIG.minTimeOnPageMs) return;
      if (e.clientY <= 0 && e.relatedTarget === null) {
        if (acquireActivePopup(POPUP_ID)) {
          setVisible(true);
          setTimeout(() => setAnimateIn(true), 20);
        }
      }
    };

    document.documentElement.addEventListener('mouseleave', handleMouseLeave);
    return () => {
      document.documentElement.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [enabled]);

  const handleClose = () => {
    setAnimateIn(false);
    recordPopupDismissed(POPUP_ID, EXIT_INTENT_CONFIG.suppressionDaysDismissed);
    releaseActivePopup(POPUP_ID);
    setTimeout(() => {
      setVisible(false);
    }, 300);
  };

  // Listen for Escape key to close cleanly
  useEffect(() => {
    if (!visible) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [visible]);

  // If not enabled or not visible, render nothing and consume zero resources
  if (!enabled || !visible) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="tab-exit-title"
      className="fixed inset-0 flex items-center justify-center p-4 z-[10000]"
      style={{
        background: animateIn ? 'rgba(15, 23, 42, 0.7)' : 'rgba(15, 23, 42, 0)',
        backdropFilter: animateIn ? 'blur(12px)' : 'blur(0px)',
        transition: 'all 0.35s ease-out',
        pointerEvents: 'auto'
      }}
      onClick={handleClose}
    >
      <div
        className="relative bg-white w-full max-w-xl rounded-3xl shadow-[0_32px_64px_-16px_rgba(0,0,0,0.5)] overflow-hidden"
        style={{
          transform: animateIn ? 'translateY(0) scale(1)' : 'translateY(30px) scale(0.95)',
          opacity: animateIn ? 1 : 0,
          transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Background elements */}
        <div className="absolute top-[-50%] left-[-20%] w-[120%] h-[120%] bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-100/50 via-purple-100/30 to-transparent pointer-events-none" />
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* Top decorative gradient bar */}
        <div className="h-2 w-full bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 relative z-20" />

        <button
          onClick={handleClose}
          aria-label="Close dialog"
          className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm border border-slate-200 hover:bg-slate-100 flex items-center justify-center transition-all z-20 group shadow-sm cursor-pointer"
        >
          <X className="w-5 h-5 text-slate-500 group-hover:text-slate-800 group-hover:rotate-90 transition-all duration-300" />
        </button>

        <div className="px-8 sm:px-10 pt-10 sm:pt-12 pb-8 sm:pb-10 relative z-10">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100/50 text-blue-700 px-4 py-1.5 rounded-full text-xs font-bold mb-5 tracking-wide uppercase shadow-2xs">
            <Zap className="w-4 h-4 fill-blue-600 text-blue-600" />
            Executive Growth Architecture
          </div>

          <h2 id="tab-exit-title" className="text-3xl sm:text-4xl font-black text-slate-900 leading-[1.15] mb-4 tracking-tight">
            Before You Leave — <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              Request a Free Pipeline Audit
            </span>
          </h2>

          <p className="text-slate-600 text-sm sm:text-base mb-6 leading-relaxed max-w-md">
            In 15 minutes, our revenue architects will pinpoint the exact stage where your pipeline loses momentum — with a custom diagnostic report at no cost.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
            {HIGHLIGHTS.map(({ icon: Icon, label, stat, desc }) => (
              <div key={label} className="bg-white rounded-2xl p-4 border border-slate-200/80 shadow-2xs hover:shadow-xs hover:border-blue-200 transition-all group relative overflow-hidden">
                <div className="relative z-10">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100 flex items-center justify-center mb-3 text-blue-600">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="text-2xl font-black text-slate-900 mb-0.5">{stat}</div>
                  <div className="text-[11px] font-bold text-slate-800 uppercase tracking-tight mb-1">{desc}</div>
                  <div className="text-[10px] text-slate-500 font-medium">{label}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              to="/book-consultation"
              onClick={handleClose}
              className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold text-center py-3.5 px-5 rounded-xl shadow-md shadow-blue-600/30 transition-all active:scale-95 flex items-center justify-center gap-2 group text-sm"
            >
              Request 15-Min Pipeline Audit
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/book-consultation"
              onClick={handleClose}
              className="flex-1 bg-white border-2 border-slate-200 hover:border-blue-300 hover:bg-blue-50 text-slate-700 hover:text-blue-700 font-bold text-center py-3.5 px-5 rounded-xl transition-all active:scale-95 flex items-center justify-center text-sm"
            >
              Get Free Revenue Audit →
            </Link>
          </div>

          <div className="mt-6 flex items-center justify-center gap-2 text-xs text-slate-500 font-medium">
            <div className="flex items-center justify-center w-5 h-5 rounded-full bg-emerald-100">
              <TrendingUp className="w-3 h-3 text-emerald-600" />
            </div>
            Connected revenue transformation across 8 enterprise pillars
          </div>
        </div>
      </div>
    </div>
  );
}
