import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, X, MessageCircle, Bot } from 'lucide-react';

export default function StickyCtaBar() {
    const [visible, setVisible] = useState(false);
    const [dismissed, setDismissed] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (!dismissed && window.scrollY > 400) {
                setVisible(true);
            } else if (window.scrollY <= 400) {
                setVisible(false);
            }
        };
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, [dismissed]);

    const handleOpenChat = () => {
        window.dispatchEvent(new CustomEvent('open-chatbot'));
    };

    if (dismissed) return null;

    return (
        <div
            className={`fixed bottom-0 left-0 right-0 z-40 transition-all duration-500 ease-out transform
                ${visible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}
            style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
        >
            {/* Backdrop blur bar */}
            <div className="bg-slate-950/95 backdrop-blur-md border-t border-slate-800 shadow-2xl">
                <div className="max-w-[1440px] mx-auto px-3 sm:px-6 lg:px-8 py-2.5 sm:py-3">
                    
                    {/* DESKTOP LAYOUT (Hidden on mobile) */}
                    <div className="hidden md:flex items-center justify-between gap-4">
                        <div className="flex items-center gap-3 shrink-0">
                            <span className="relative flex h-2.5 w-2.5">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
                            </span>
                            <p className="text-white text-sm font-semibold">
                                Ready to accelerate your enterprise revenue?
                            </p>
                        </div>

                        <div className="flex items-center gap-3 shrink-0">
                            {/* WhatsApp quick link */}
                            <a
                                href="https://wa.me/919513288612?text=Hi%20ProfitMachines%2C%20I'd%20like%20to%20discuss%20my%20growth%20goals."
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-3.5 py-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold text-xs rounded-xl transition-colors shrink-0"
                                aria-label="Chat on WhatsApp"
                            >
                                <MessageCircle className="w-4 h-4" />
                                <span>WhatsApp</span>
                            </a>

                            {/* Primary CTA */}
                            <Link
                                to="/book-consultation"
                                className="inline-flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold text-xs sm:text-sm rounded-xl transition-all shadow-md shadow-blue-900/40 hover:-translate-y-0.5 group shrink-0"
                            >
                                <span>Get Free Revenue Audit</span>
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                            </Link>

                            {/* Dismiss */}
                            <button
                                onClick={() => { setDismissed(true); setVisible(false); }}
                                className="p-1.5 text-slate-400 hover:text-white transition-colors rounded-lg hover:bg-white/10 shrink-0 cursor-pointer"
                                aria-label="Dismiss"
                            >
                                <X className="w-4 h-4" />
                            </button>
                        </div>
                    </div>

                    {/* UNIFIED MOBILE DOCK (Viewports < 768px: Zero overlap, 100% thumb-friendly) */}
                    <div className="flex md:hidden items-center justify-between gap-2">
                        {/* WhatsApp Icon Button */}
                        <a
                            href="https://wa.me/919513288612?text=Hi%20ProfitMachines%2C%20I'd%20like%20to%20discuss%20my%20growth%20goals."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 bg-[#25D366] hover:bg-[#1ebe5d] text-white rounded-xl flex items-center justify-center shrink-0 shadow-sm active:scale-95"
                            aria-label="WhatsApp Chat"
                        >
                            <MessageCircle className="w-5 h-5 fill-white text-white" />
                        </a>

                        {/* Primary Action Button */}
                        <Link
                            to="/book-consultation"
                            className="flex-1 min-h-[40px] bg-gradient-to-r from-blue-600 to-indigo-600 active:from-blue-700 active:to-indigo-700 text-white font-bold text-xs px-3 py-2.5 rounded-xl shadow-md flex items-center justify-center gap-1.5 truncate text-center active:scale-[0.98]"
                        >
                            <span className="truncate">Book Strategy Session</span>
                            <ArrowRight className="w-3.5 h-3.5 shrink-0" />
                        </Link>

                        {/* AI Assistant Chat Trigger */}
                        <button
                            type="button"
                            onClick={handleOpenChat}
                            className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-blue-600 text-white rounded-xl flex items-center justify-center shrink-0 shadow-sm active:scale-95 cursor-pointer relative"
                            aria-label="Open AI Assistant Chat"
                        >
                            <Bot className="w-5 h-5 text-white" />
                            <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                        </button>

                        {/* Dismiss Button */}
                        <button
                            onClick={() => { setDismissed(true); setVisible(false); }}
                            className="p-1.5 text-slate-400 hover:text-white transition-colors rounded-lg shrink-0 cursor-pointer"
                            aria-label="Dismiss mobile dock"
                        >
                            <X className="w-3.5 h-3.5" />
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
}
