import { useState, useRef, useEffect, useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import {
    MessageSquare, X, Send, Bot, User, Sparkles,
    RotateCcw, ChevronRight, Compass, ArrowUpRight
} from 'lucide-react';
import { Button } from './ui/button';
import { motion, AnimatePresence, useDragControls } from 'motion/react';
import logo from '../../assets/Trustgrid-logo.png';
import { resolvePageContext, PageChatContext } from '../data/chatbotKnowledgeBank';
import { chatbotEngine, ChatMessage } from '../services/chatbotEngine';
import { ChatMarkdown } from './ChatMarkdown';

export default function ChatBot() {
    const location = useLocation();
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<ChatMessage[]>([]);
    const [inputValue, setInputValue] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [agentName, setAgentName] = useState('Pooja');
    const [agentRole] = useState('Senior Revenue Architect');
    const [activeContext, setActiveContext] = useState<PageChatContext>(() => resolvePageContext(location.pathname));
    const [activeFollowUps, setActiveFollowUps] = useState<string[]>([]);
    const previousPathRef = useRef<string>(location.pathname);

    const messagesEndRef = useRef<HTMLDivElement>(null);
    const dragControls = useDragControls();

    // ── 1. Geolocation-aware Agent Personalization ─────────────────────────
    useEffect(() => {
        const fetchLocation = async () => {
            try {
                const response = await fetch('https://ipapi.co/json/');
                const data = await response.json();
                const country = data.country_code;

                const arabCountries = ['AE', 'SA', 'QA', 'KW', 'OM', 'BH', 'EG', 'IQ', 'JO', 'LB'];
                if (arabCountries.includes(country)) {
                    setAgentName('Mustafa');
                } else if (country === 'GB') {
                    setAgentName('Charles');
                } else {
                    setAgentName('Pooja');
                }
            } catch (error) {
                const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
                if (timezone.includes('Dubai') || timezone.includes('Riyadh') || timezone.includes('Qatar')) {
                    setAgentName('Mustafa');
                } else if (timezone.includes('London')) {
                    setAgentName('Charles');
                } else {
                    setAgentName('Pooja');
                }
            }
        };

        fetchLocation();
    }, []);

    const scrollToBottom = useCallback(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, []);

    useEffect(() => {
        scrollToBottom();
    }, [messages, isOpen, isLoading, activeFollowUps, scrollToBottom]);

    // ── 2. Route Awareness & Dynamic Context Resolver ──────────────────────
    useEffect(() => {
        const newContext = resolvePageContext(location.pathname);
        setActiveContext(newContext);

        // If route actually changed and conversation exists
        if (previousPathRef.current !== location.pathname) {
            previousPathRef.current = location.pathname;

            setMessages(prev => {
                // If chat is empty, initialize with new page greeting
                if (prev.length === 0) {
                    return [
                        {
                            id: Date.now().toString(),
                            role: 'assistant',
                            content: `Hello! 👋 I'm ${agentName} (${agentRole}).\n\n${newContext.welcomeMessage}`,
                            timestamp: new Date(),
                            pageContextName: newContext.title,
                            suggestedFollowUps: newContext.suggestedQuestions.slice(0, 3)
                        }
                    ];
                }

                // If user only has the initial greeting and hasn't chatted yet, replace it with new page's greeting
                if (prev.length === 1 && prev[0].role === 'assistant') {
                    return [
                        {
                            id: Date.now().toString(),
                            role: 'assistant',
                            content: `Hello! 👋 I'm ${agentName} (${agentRole}).\n\n${newContext.welcomeMessage}`,
                            timestamp: new Date(),
                            pageContextName: newContext.title,
                            suggestedFollowUps: newContext.suggestedQuestions.slice(0, 3)
                        }
                    ];
                }

                // If active multi-turn conversation exists, add an elegant non-disruptive context change divider
                const lastMsg = prev[prev.length - 1];
                if (lastMsg.pageContextName === newContext.title) {
                    return prev;
                }

                return [
                    ...prev,
                    {
                        id: `ctx-${Date.now()}`,
                        role: 'system',
                        content: `Now viewing: **${newContext.title}** (${newContext.category})`,
                        timestamp: new Date(),
                        isContextChangeMarker: true,
                        pageContextName: newContext.title
                    }
                ];
            });

            // Update active suggestion chips to match the new page
            setActiveFollowUps(newContext.suggestedQuestions.slice(0, 4));
        } else if (messages.length === 0) {
            // Initial mount on current route
            setMessages([
                {
                    id: '1',
                    role: 'assistant',
                    content: `Hello! 👋 I'm ${agentName} (${agentRole}).\n\n${newContext.welcomeMessage}`,
                    timestamp: new Date(),
                    pageContextName: newContext.title,
                    suggestedFollowUps: newContext.suggestedQuestions.slice(0, 3)
                }
            ]);
            setActiveFollowUps(newContext.suggestedQuestions.slice(0, 4));
        }
    }, [location.pathname, agentName, agentRole, messages.length]);

    // ── 3. Listen for Context-Aware Triggers from Page Components ─────────
    useEffect(() => {
        const handleContextTrigger = (e: CustomEvent<{ message?: string; contextName?: string }>) => {
            const activeEl = document.activeElement;
            if (activeEl && (
                ['INPUT', 'TEXTAREA', 'SELECT', 'OPTION'].includes(activeEl.tagName?.toUpperCase()) ||
                activeEl.closest('form')
            )) {
                return;
            }

            const { contextName, message } = e.detail || {};
            const contextLabel = contextName || activeContext.title;
            const formattedMessage = message || `Hello! 👋 I'm ${agentName} (${agentRole}).\n\nWe noticed you are exploring **${contextLabel}**.\n\nWould you like a brief overview, a tailored case study, or shall we set up an executive strategy consultation?`;

            setIsOpen(true);

            setMessages(prev => {
                const lastMsg = prev[prev.length - 1];
                if (lastMsg?.content === formattedMessage) return prev;

                return [
                    ...prev,
                    {
                        id: Date.now().toString(),
                        role: 'assistant',
                        content: formattedMessage,
                        timestamp: new Date(),
                        pageContextName: contextLabel,
                        suggestedFollowUps: activeContext.suggestedQuestions.slice(0, 3)
                    }
                ];
            });
        };

        window.addEventListener('open_chat_with_context' as any, handleContextTrigger);
        return () => window.removeEventListener('open_chat_with_context' as any, handleContextTrigger);
    }, [agentName, agentRole, activeContext]);

    // ── 4. Chatbot Lead Telemetry Tracking ─────────────────────────────────
    const trackChatbotLead = (messageText: string, isChipClick = false) => {
        const GOOGLE_SCRIPT_URL = import.meta.env.VITE_GOOGLE_SCRIPT_URL;
        if (!GOOGLE_SCRIPT_URL) return;

        const lowerText = messageText.toLowerCase();
        let chatIntent = 'General Inquiry';
        if (lowerText.includes('demo') || lowerText.includes('book') || lowerText.includes('consult')) {
            chatIntent = 'Consultation Request';
        } else if (lowerText.includes('expert') || lowerText.includes('speak')) {
            chatIntent = 'Expert Consultation';
        } else if (lowerText.includes('partner')) {
            chatIntent = 'Partnership Interest';
        } else if (lowerText.includes('offering') || lowerText.includes('feature') || lowerText.includes('product')) {
            chatIntent = 'Product Exploration';
        } else if (lowerText.includes('pricing') || lowerText.includes('cost')) {
            chatIntent = 'Pricing Inquiry';
        } else if (lowerText.includes('saas') || lowerText.includes('pipeline') || lowerText.includes('prospecting')) {
            chatIntent = 'AI Sales Solution Inquiry';
        }

        const conversationSummary = messages
            .slice(-6)
            .map(m => `[${m.role}]: ${m.content.slice(0, 100)}`)
            .join(' → ');

        const chatStartTime = messages[0]?.timestamp || new Date();
        const chatDuration = Math.round((Date.now() - chatStartTime.getTime()) / 1000);

        const leadData = {
            table: 'Chatbot Leads',
            fields: {
                'Session ID': sessionStorage.getItem('tg_session_id') || '',
                'IP Address': localStorage.getItem('tg_ip') || 'detecting...',
                'Country': localStorage.getItem('tg_country') || '',
                'State': localStorage.getItem('tg_state') || '',
                'City': localStorage.getItem('tg_city') || '',
                'User Name': localStorage.getItem('user_name') || 'anonymous',
                'User Email': localStorage.getItem('user_email') || '',
                'User Phone': '',
                'Chat Intent': chatIntent,
                'Quick Action Used': isChipClick ? messageText : '',
                'Messages Count': messages.length + 1,
                'Chat Duration (s)': chatDuration,
                'Conversation Summary': conversationSummary,
                'Page Where Chat Started': location.pathname,
                'Referrer URL': document.referrer,
                'Device Type': /Mobi|Android/i.test(navigator.userAgent) ? 'mobile' : 'desktop',
                'Agent Name': agentName
            }
        };

        try {
            fetch(GOOGLE_SCRIPT_URL, {
                method: 'POST',
                mode: 'no-cors',
                headers: { 'Content-Type': 'text/plain' },
                body: JSON.stringify(leadData)
            });
        } catch (e) {
            console.warn('Chatbot lead tracking skipped:', e);
        }
    };

    // ── 5. Message Dispatch & Knowledge Engine Invocation ──────────────────
    const handleSend = async (textToSend?: string) => {
        const queryText = (textToSend || inputValue).trim();
        if (!queryText || isLoading) return;

        const userMsg: ChatMessage = {
            id: Date.now().toString(),
            role: 'user',
            content: queryText,
            timestamp: new Date(),
            pageContextName: activeContext.title
        };

        setMessages(prev => [...prev, userMsg]);
        setInputValue('');
        setIsLoading(true);

        const isSuggestedQuestion = activeContext.suggestedQuestions.includes(queryText) ||
            activeFollowUps.includes(queryText);
        trackChatbotLead(queryText, isSuggestedQuestion);

        // Variable realistic thinking latency
        const delay = Math.random() * 500 + 700;

        try {
            // Optional server API call if available
            let serverResponseText: string | null = null;
            try {
                const apiRes = await fetch('/api/chat', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        message: queryText,
                        currentRoute: location.pathname,
                        pageTitle: activeContext.title,
                        history: messages.slice(-5)
                    })
                });
                if (apiRes.ok) {
                    const data = await apiRes.json();
                    if (data.source === 'gemini-secure-api' && data.text) {
                        serverResponseText = data.text;
                    }
                }
            } catch {
                // Server API optional; fallback seamlessly to grounded local engine
            }

            setTimeout(() => {
                let responseText = serverResponseText;
                let followUps: string[] = [];

                if (!responseText) {
                    const engineRes = chatbotEngine.generateResponse(queryText, messages, location.pathname);
                    responseText = engineRes.text;
                    followUps = engineRes.suggestedFollowUps || [];
                }

                const assistantMsg: ChatMessage = {
                    id: (Date.now() + 1).toString(),
                    role: 'assistant',
                    content: responseText,
                    timestamp: new Date(),
                    pageContextName: activeContext.title,
                    suggestedFollowUps: followUps
                };

                setMessages(prev => [...prev, assistantMsg]);
                setActiveFollowUps(followUps.length > 0 ? followUps : activeContext.suggestedQuestions.slice(0, 3));
                setIsLoading(false);
            }, delay);

        } catch (error) {
            console.error('Chat error:', error);
            setTimeout(() => {
                const errorMsg: ChatMessage = {
                    id: (Date.now() + 1).toString(),
                    role: 'assistant',
                    content: "I apologize, but I encountered a momentary connection glitch. Please feel free to ask again, or **[Schedule an Executive Consultation](/book-consultation)** to connect directly with our Revenue Architecture practice.",
                    timestamp: new Date(),
                    pageContextName: activeContext.title
                };
                setMessages(prev => [...prev, errorMsg]);
                setIsLoading(false);
            }, delay);
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSend();
        }
    };

    // Reset / Clear Conversation
    const handleClearChat = () => {
        chatbotEngine.reset();
        const currentCtx = resolvePageContext(location.pathname);
        setMessages([
            {
                id: Date.now().toString(),
                role: 'assistant',
                content: `Conversation refreshed! 👋 I'm ${agentName} (${agentRole}).\n\n${currentCtx.welcomeMessage}`,
                timestamp: new Date(),
                pageContextName: currentCtx.title,
                suggestedFollowUps: currentCtx.suggestedQuestions.slice(0, 3)
            }
        ]);
        setActiveFollowUps(currentCtx.suggestedQuestions.slice(0, 4));
    };

    return (
        <>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        id="chatbot-container"
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        drag
                        dragListener={false}
                        dragControls={dragControls}
                        dragMomentum={false}
                        className="fixed bottom-24 right-4 sm:right-6 w-[420px] max-w-[calc(100vw-2rem)] h-[640px] max-h-[calc(100vh-7rem)] bg-white rounded-2xl shadow-2xl border border-slate-200 z-[999] flex flex-col overflow-hidden ring-1 ring-slate-900/10"
                    >
                        {/* ── A. PREMIUM CONTEXT-AWARE HEADER ── */}
                        <div
                            onPointerDown={(e) => dragControls.start(e)}
                            className="bg-white px-4 py-3.5 flex items-center justify-between border-b border-slate-100 shrink-0 cursor-move touch-none select-none"
                        >
                            <div className="flex items-center gap-3">
                                <div className="relative">
                                    <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center shadow-sm shadow-blue-500/20 overflow-hidden p-1.5">
                                        <img
                                            loading="lazy"
                                            decoding="async"
                                            width="40"
                                            height="40"
                                            src={logo}
                                            alt="ProfitMachines"
                                            className="w-full h-full object-contain pointer-events-none brightness-0 invert"
                                        />
                                    </div>
                                    <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-emerald-500 border-2 border-white rounded-full"></span>
                                </div>
                                <div className="flex flex-col">
                                    <div className="flex items-center gap-1.5">
                                        <h3 className="font-extrabold text-slate-900 text-sm tracking-tight font-heading leading-tight">
                                            PROFITMACHINES
                                        </h3>
                                        <span className="text-[10px] bg-blue-50 text-blue-700 px-1.5 py-0.2 rounded font-semibold border border-blue-100">
                                            AI
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-1 text-[11px] text-slate-500 font-medium">
                                        <span>{agentName}</span>
                                        <span>•</span>
                                        <span className="truncate max-w-[170px]" title={activeContext.title}>
                                            {activeContext.title}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Header Actions */}
                            <div className="flex items-center gap-1">
                                <button
                                    type="button"
                                    aria-label="Clear chat and start fresh"
                                    title="Start new conversation"
                                    onClick={handleClearChat}
                                    className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
                                >
                                    <RotateCcw className="w-4 h-4" />
                                </button>
                                <button
                                    type="button"
                                    aria-label="Close Chat"
                                    title="Close"
                                    onClick={() => setIsOpen(false)}
                                    className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
                                >
                                    <X className="w-5 h-5" strokeWidth={1.8} />
                                </button>
                            </div>
                        </div>

                        {/* ── B. CURRENT PAGE CONTEXT PILL (DYNAMIC) ── */}
                        <div className="bg-slate-50/90 px-4 py-1.5 border-b border-slate-100 flex items-center justify-between text-[11px] text-slate-500 shrink-0">
                            <div className="flex items-center gap-1.5 truncate">
                                <Compass className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                                <span className="text-slate-400">Context:</span>
                                <span className="font-bold text-slate-700 truncate">{activeContext.category}</span>
                                <span className="text-slate-300">›</span>
                                <span className="text-blue-700 font-semibold truncate">{activeContext.title}</span>
                            </div>
                            <span className="text-[10px] text-emerald-600 font-bold bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-100 shrink-0 ml-2">
                                Active
                            </span>
                        </div>

                        {/* ── C. MESSAGES STREAM ── */}
                        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50/40 scroll-smooth">
                            {messages.map((msg) => {
                                if (msg.isContextChangeMarker) {
                                    return (
                                        <div key={msg.id} className="flex items-center justify-center my-3">
                                            <div className="bg-white border border-blue-200/80 shadow-2xs px-3 py-1 rounded-full text-[10px] text-blue-700 font-semibold flex items-center gap-1.5">
                                                <Compass className="w-3 h-3 text-blue-600" />
                                                <span>{msg.content.replace(/\*\*/g, '')}</span>
                                            </div>
                                        </div>
                                    );
                                }

                                const isAssistant = msg.role === 'assistant';

                                return (
                                    <motion.div
                                        initial={{ opacity: 0, y: 8 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        key={msg.id}
                                        className={`flex items-start gap-2.5 ${isAssistant ? '' : 'flex-row-reverse'}`}
                                    >
                                        <div
                                            className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 shadow-2xs mt-0.5 ${
                                                isAssistant
                                                    ? 'bg-blue-600 text-white'
                                                    : 'bg-slate-800 text-white'
                                            }`}
                                        >
                                            {isAssistant ? <Bot size={14} /> : <User size={14} />}
                                        </div>

                                        <div className={`flex flex-col gap-1 max-w-[85%] ${isAssistant ? '' : 'items-end'}`}>
                                            <div
                                                className={`p-3 text-[12px] leading-relaxed shadow-sm ${
                                                    isAssistant
                                                        ? 'bg-white text-slate-800 rounded-2xl rounded-tl-xs border border-slate-200/80'
                                                        : 'bg-blue-600 text-white rounded-2xl rounded-tr-xs shadow-blue-600/20'
                                                }`}
                                            >
                                                {isAssistant ? (
                                                    <ChatMarkdown
                                                        content={msg.content}
                                                        onLinkClick={() => {
                                                            // Keep chat open while internal navigation happens
                                                        }}
                                                    />
                                                ) : (
                                                    <p className="whitespace-pre-wrap font-medium">{msg.content}</p>
                                                )}
                                            </div>

                                            <span className="text-[9px] text-slate-400 px-1">
                                                {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                            </span>
                                        </div>
                                    </motion.div>
                                );
                            })}

                            {/* Typing Indicator */}
                            {isLoading && (
                                <motion.div
                                    initial={{ opacity: 0, y: 8 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="flex items-start gap-2.5"
                                >
                                    <div className="w-7 h-7 rounded-lg bg-blue-600 text-white flex items-center justify-center shrink-0 shadow-2xs mt-0.5">
                                        <Bot size={14} />
                                    </div>
                                    <div className="bg-white p-3 rounded-2xl rounded-tl-xs border border-slate-200/80 shadow-2xs flex gap-1.5 items-center">
                                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full animate-bounce [animation-delay:-0.3s]" />
                                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full animate-bounce [animation-delay:-0.15s]" />
                                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full animate-bounce" />
                                    </div>
                                </motion.div>
                            )}

                            {/* Dynamic Suggested Question Chips */}
                            {!isLoading && activeFollowUps.length > 0 && (
                                <div className="pt-2 pl-9 space-y-1.5">
                                    <div className="flex items-center gap-1 text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                                        <Sparkles className="w-3 h-3 text-blue-500" />
                                        <span>Suggested for {activeContext.title}:</span>
                                    </div>
                                    <div className="flex flex-col gap-1.5">
                                        {activeFollowUps.map((q, idx) => (
                                            <button
                                                key={idx}
                                                type="button"
                                                onClick={() => handleSend(q)}
                                                className="text-left text-[11px] bg-white hover:bg-blue-50 text-slate-700 hover:text-blue-700 border border-slate-200/80 hover:border-blue-300 px-3 py-2 rounded-xl transition-all shadow-2xs font-medium flex items-center justify-between group cursor-pointer"
                                            >
                                                <span className="line-clamp-1 flex-1 pr-1">{q}</span>
                                                <ChevronRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-blue-600 shrink-0 group-hover:translate-x-0.5 transition-transform" />
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            )}

                            <div ref={messagesEndRef} />
                        </div>

                        {/* ── D. QUICK ACTION CONSULTATION BANNER (NON-INTRUSIVE) ── */}
                        <div className="bg-slate-100/70 border-t border-slate-200/70 px-4 py-2 flex items-center justify-between text-[11px] shrink-0">
                            <span className="text-slate-600 truncate font-medium">Ready to discuss your pipeline?</span>
                            <a
                                href="/book-consultation"
                                className="font-bold text-blue-600 hover:text-blue-700 inline-flex items-center gap-1 shrink-0"
                            >
                                <span>Book Consultation</span>
                                <ArrowUpRight className="w-3 h-3" />
                            </a>
                        </div>

                        {/* ── E. INPUT AREA ── */}
                        <div className="p-3 bg-white border-t border-slate-200/80 shrink-0">
                            <div className="flex items-end gap-2 bg-slate-50 border border-slate-200/90 rounded-xl p-1.5 focus-within:ring-2 focus-within:ring-blue-600/20 focus-within:border-blue-600 transition-all">
                                <textarea
                                    value={inputValue}
                                    onChange={(e) => setInputValue(e.target.value)}
                                    onKeyDown={handleKeyDown}
                                    placeholder={`Ask about ${activeContext.title}...`}
                                    rows={1}
                                    className="flex-1 bg-transparent border-none p-1.5 max-h-24 text-[12px] focus:outline-none focus:ring-0 resize-none placeholder:text-slate-400 text-slate-800 min-h-[38px] leading-relaxed"
                                    style={{ scrollbarWidth: 'none' }}
                                />
                                <Button
                                    type="button"
                                    aria-label="Send message"
                                    title="Send message"
                                    onClick={() => handleSend()}
                                    disabled={!inputValue.trim() || isLoading}
                                    className="h-[36px] w-[36px] rounded-lg bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white shadow-sm p-0 flex items-center justify-center shrink-0 transition-all disabled:opacity-40 disabled:cursor-not-allowed mb-0.5 cursor-pointer"
                                >
                                    <Send className="w-4 h-4 ml-0.5" />
                                    <span className="sr-only">Send message</span>
                                </Button>
                            </div>
                            <div className="flex items-center justify-between mt-2 px-1 text-[10px] text-slate-400 font-medium">
                                <span className="flex items-center gap-1">
                                    <Sparkles className="w-3 h-3 text-blue-500" />
                                    <span>Context-Aware Revenue Intelligence</span>
                                </span>
                                <span>Press Enter ↵ to send</span>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* ── F. FLOATING LAUNCHER BUTTON ── */}
            {!isOpen && (
                <motion.button
                    id="chatbot-toggle"
                    type="button"
                    aria-label="Open AI Assistant"
                    title="Open ProfitMachines AI Assistant"
                    initial={{ scale: 0, rotate: 90 }}
                    animate={{ scale: 1, rotate: 0 }}
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.94 }}
                    onClick={() => setIsOpen(true)}
                    className="fixed bottom-8 right-6 z-[999] w-14 h-14 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-full shadow-xl shadow-blue-600/30 flex items-center justify-center text-white cursor-pointer hover:shadow-2xl hover:shadow-blue-600/50 transition-all ring-2 ring-white/30"
                >
                    <MessageSquare className="w-7 h-7" strokeWidth={2.4} />
                    <span className="absolute -top-0.5 -right-0.5 w-3.5 h-3.5 bg-emerald-500 border-2 border-white rounded-full"></span>
                    <span className="sr-only">Open Chat</span>
                </motion.button>
            )}
        </>
    );
}
