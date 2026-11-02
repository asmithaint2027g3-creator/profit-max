import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { X, Cookie } from 'lucide-react';
import { Button } from './ui/button';
import { motion, AnimatePresence } from 'framer-motion';

const STORAGE_KEY = 'trustgrid_cookie_consent';

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    try {
      const consent = localStorage.getItem(STORAGE_KEY);
      if (!consent) {
        // Show after initial engagement delay for smooth first paint
        const timer = setTimeout(() => setIsVisible(true), 1200);
        return () => clearTimeout(timer);
      }
    } catch {
      // Graceful fallback if cookies/storage are restricted
    }
  }, []);

  const handleAccept = () => {
    try {
      localStorage.setItem(STORAGE_KEY, 'accepted');
    } catch {
      // Storage failure handled gracefully
    }
    setIsVisible(false);
  };

  const handleDecline = () => {
    try {
      localStorage.setItem(STORAGE_KEY, 'declined');
    } catch {
      // Storage failure handled gracefully
    }
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          role="region"
          aria-label="Cookie consent banner"
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 320, damping: 28 }}
          // Anchored on the bottom-left on desktop (md:left-6 md:right-auto) so it never collides with the ChatBot launcher at bottom-right
          className="fixed bottom-6 left-6 right-6 md:right-auto md:left-6 md:w-[420px] z-[100]"
        >
          <div className="bg-white/95 backdrop-blur-xl border border-slate-200/90 shadow-2xl rounded-2xl p-5 ring-1 ring-slate-900/5">
            <div className="flex items-start gap-3.5">
              <div className="p-2.5 bg-blue-50 rounded-xl text-blue-600 shrink-0">
                <Cookie className="w-5 h-5" />
              </div>
              <div className="flex-1 space-y-2.5">
                <div className="flex items-start justify-between">
                  <h3 className="text-base font-bold text-slate-900">Cookie Notice</h3>
                  <button
                    onClick={() => setIsVisible(false)}
                    aria-label="Dismiss cookie notice"
                    title="Dismiss cookie notice"
                    className="text-slate-400 hover:text-slate-600 transition-colors p-1 cursor-pointer"
                  >
                    <X className="w-4 h-4" />
                    <span className="sr-only">Dismiss</span>
                  </button>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  We use cookies to analyze telemetry and enhance platform performance. See our{' '}
                  <Link to="/privacy" className="text-blue-600 font-semibold hover:underline">
                    Privacy Policy
                  </Link>{' '}
                  and{' '}
                  <Link to="/terms" className="text-blue-600 font-semibold hover:underline">
                    Terms
                  </Link>.
                </p>
                <div className="flex gap-2.5 pt-1">
                  <Button
                    onClick={handleAccept}
                    className="bg-blue-600 hover:bg-blue-700 text-white shadow-sm font-semibold flex-1 h-9 rounded-lg text-xs cursor-pointer"
                  >
                    Accept All
                  </Button>
                  <Button
                    onClick={handleDecline}
                    variant="outline"
                    className="border-slate-200 text-slate-600 hover:bg-slate-50 font-medium flex-1 h-9 rounded-lg text-xs cursor-pointer"
                  >
                    Decline
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
