import React, { useState, useEffect, useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
    Menu, X, ChevronRight, ChevronDown, Search, ArrowRight, Compass, Building2,
    Zap, Handshake, Rocket, BrainCircuit, TrendingUp, Globe, ShieldCheck,
    Layers, Cpu, DollarSign, Target, Sparkles, UserCheck, Sliders, Briefcase,
    ShoppingBag, Bot, Users, Activity, FileText, Lock, Coins, Network,
    RefreshCw, Boxes, Server, Image, MessageSquare, BarChart, PieChart,
    Settings, Smile, Brain, CloudRain, Building, AppWindow, Code2, HeartPulse,
    Landmark, Factory, GraduationCap, Truck, Home, Radio, Lightbulb, Wrench,
    CloudCog, UserPlus, Layout, LifeBuoy, BookOpen, Info, Phone, Clock,
    HelpCircle, Database, GitMerge, Workflow, Cloud
} from 'lucide-react';
import { smNavItems } from '../../data/navigationContent';

// Comprehensive Icon Map mapping Lucide string names
const Icons: Record<string, any> = {
    BrainCircuit, Network, Sparkles, Building2, Bot, Cloud, Workflow, GitMerge, RefreshCw, Briefcase, Shield: ShieldCheck, Database,
    Globe, Coins, Boxes, Server, Image, MessageSquare, TrendingUp, BarChart, PieChart, Settings,
    Smile, Layers, Cpu, DollarSign, Brain, CloudRain, Building, AppWindow, Zap, Code2, ShieldCheck, Users, HeartPulse,
    Landmark, ShoppingBag, Factory, GraduationCap, Truck, Home, Radio, Lightbulb, Wrench, CloudCog, UserPlus, Layout,
    Search, LifeBuoy, BookOpen, Handshake, Info, Target, FileText, Phone, Rocket, Lock, Clock, Sliders, HelpCircle,
    UserCheck, Compass
};

function getTopLevelIcon(name: string) {
    switch (name) {
        case 'Offerings': return Compass;
        case 'Industries': return Building2;
        case 'Solutions': return Zap;
        case 'Engagement Models': return Handshake;
        case 'ICO Acceleration': return Rocket;
        case 'AI-Driven Sales Transformation': return BrainCircuit;
        case 'Growth & Acceleration Science': return TrendingUp;
        case 'Global Market Acceleration': return Globe;
        case 'Use Cases': return ShieldCheck;
        default: return Layers;
    }
}

export default function Navigation() {
    const location = useLocation();
    const [mobileOpen, setMobileOpen] = useState(false);
    const [expandedMenus, setExpandedMenus] = useState<string[]>([]);
    const [expandedCategories, setExpandedCategories] = useState<string[]>([]);
    const [searchQuery, setSearchQuery] = useState('');

    // Determine active menu item based on current pathname
    const isItemActive = (item: any): boolean => {
        if (location.pathname === item.path) return true;
        if (item.path !== '/' && location.pathname.startsWith(item.path)) return true;
        if (item.path === '/engagement-model' && (location.pathname === '/engagement' || location.pathname.startsWith('/engagement/'))) return true;
        if (item.path === '/ico-acceleration' && location.pathname === '/crypto') return true;
        if (item.dropdown?.categories) {
            return item.dropdown.categories.some((cat: any) => 
                cat.path === location.pathname || 
                (cat.items && cat.items.some((sub: any) => sub.path.split('#')[0] === location.pathname))
            );
        }
        if (item.dropdown?.items) {
            return item.dropdown.items.some((sub: any) => sub.path.split('#')[0] === location.pathname);
        }
        return false;
    };

    // Auto-expand the active section on mount and route change
    useEffect(() => {
        smNavItems.forEach((item) => {
            if (isItemActive(item)) {
                setExpandedMenus((prev) => (prev.includes(item.name) ? prev : [...prev, item.name]));
                if (item.dropdown?.categories) {
                    item.dropdown.categories.forEach((cat: any) => {
                        const isCatActive = cat.path === location.pathname || 
                            (cat.items && cat.items.some((sub: any) => sub.path.split('#')[0] === location.pathname));
                        if (isCatActive) {
                            setExpandedCategories((prev) => (prev.includes(cat.id) ? prev : [...prev, cat.id]));
                        }
                    });
                }
            }
        });
        // Close mobile drawer on route change
        setMobileOpen(false);
    }, [location.pathname, location.hash]);

    const toggleMenu = (name: string) => {
        setExpandedMenus((prev) =>
            prev.includes(name) ? prev.filter((n) => n !== name) : [...prev, name]
        );
    };

    const toggleCategory = (catId: string) => {
        setExpandedCategories((prev) =>
            prev.includes(catId) ? prev.filter((id) => id !== catId) : [...prev, catId]
        );
    };

    // Flatten all sub-items for instant search filtering
    const searchResults = useMemo(() => {
        if (!searchQuery.trim()) return null;
        const q = searchQuery.toLowerCase().trim();
        const results: { name: string; path: string; icon: string; parentName: string }[] = [];

        smNavItems.forEach((item) => {
            if (item.name.toLowerCase().includes(q)) {
                results.push({ name: item.name, path: item.path, icon: '', parentName: 'Main Section' });
            }
            if (item.dropdown?.categories) {
                item.dropdown.categories.forEach((cat: any) => {
                    if (cat.title.toLowerCase().includes(q)) {
                        results.push({ name: cat.title, path: cat.path, icon: '', parentName: item.name });
                    }
                    if (cat.items) {
                        cat.items.forEach((sub: any) => {
                            if (sub.name.toLowerCase().includes(q)) {
                                results.push({ name: sub.name, path: sub.path, icon: sub.icon, parentName: `${item.name} › ${cat.title}` });
                            }
                        });
                    }
                });
            }
            if (item.dropdown?.items) {
                item.dropdown.items.forEach((sub: any) => {
                    if (sub.name.toLowerCase().includes(q)) {
                        results.push({ name: sub.name, path: sub.path, icon: sub.icon, parentName: item.name });
                    }
                });
            }
        });
        return results;
    }, [searchQuery]);

    // Active page title calculation for the top dashboard bar
    const currentBreadcrumb = useMemo(() => {
        for (const item of smNavItems) {
            if (location.pathname === item.path) return { section: item.name, title: item.name };
            if (item.dropdown?.categories) {
                for (const cat of item.dropdown.categories) {
                    if (cat.path === location.pathname) return { section: item.name, title: cat.title };
                    if (cat.items) {
                        for (const sub of cat.items) {
                            if (sub.path.split('#')[0] === location.pathname) {
                                return { section: item.name, title: sub.name };
                            }
                        }
                    }
                }
            }
            if (item.dropdown?.items) {
                for (const sub of item.dropdown.items) {
                    if (sub.path.split('#')[0] === location.pathname) {
                        return { section: item.name, title: sub.name };
                    }
                }
            }
        }
        if (location.pathname === '/') return { section: 'Executive Command', title: 'Platform Overview' };
        if (location.pathname === '/book-consultation') return { section: 'Advisory', title: 'Schedule Consultation' };
        return { section: 'ProfitMachines', title: 'Enterprise Protocol' };
    }, [location.pathname]);

    // Reusable Sidebar Inner Component
    const renderSidebarContent = () => (
        <div className="flex flex-col h-full bg-white select-none">
            {/* ── 1. SIDEBAR BRAND HEADER ── */}
            <div className="h-16 lg:h-[72px] px-5 border-b border-slate-200/80 flex items-center justify-between shrink-0 bg-white">
                <Link to="/" className="flex items-center gap-2 group">
                    <div className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold text-sm shadow-md shadow-blue-600/30">
                        PM
                    </div>
                    <div className="text-xl font-extrabold tracking-tight text-slate-900 font-heading">
                        <span>Profit</span><span className="text-blue-600">Machines</span>
                    </div>
                </Link>
                <div className="hidden sm:inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-blue-50 border border-blue-200/60 text-blue-700 font-mono text-[10px] font-bold">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                    <span>v2.4</span>
                </div>
            </div>

            {/* ── 2. QUICK SEARCH / FILTER INPUT ── */}
            <div className="px-3.5 pt-3.5 pb-2 shrink-0">
                <div className="relative">
                    <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                        type="text"
                        placeholder="Filter services & models..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full bg-slate-50 hover:bg-slate-100/70 focus:bg-white text-xs text-slate-800 placeholder-slate-400 pl-8 pr-7 py-2 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500/20 outline-none transition-all"
                    />
                    {searchQuery && (
                        <button
                            onClick={() => setSearchQuery('')}
                            className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 text-xs"
                        >
                            <X className="w-3 h-3" />
                        </button>
                    )}
                </div>
            </div>

            {/* ── 3. SCROLLABLE NAVIGATION LIST ── */}
            <div className="flex-1 overflow-y-auto px-3 py-2 space-y-1 custom-scrollbar">
                {searchResults ? (
                    /* Search results view */
                    <div className="space-y-1">
                        <div className="px-2 py-1 text-[11px] font-mono font-bold uppercase tracking-wider text-slate-400">
                            Search Results ({searchResults.length})
                        </div>
                        {searchResults.length === 0 ? (
                            <div className="p-4 text-center text-xs text-slate-400">
                                No matching services or sections found.
                            </div>
                        ) : (
                            searchResults.map((res, rIdx) => {
                                const SubIcon = Icons[res.icon] || ArrowRight;
                                return (
                                    <Link
                                        key={rIdx}
                                        to={res.path}
                                        onClick={() => {
                                            setSearchQuery('');
                                            setMobileOpen(false);
                                        }}
                                        className="p-2 rounded-xl hover:bg-slate-100/80 transition-colors flex items-start gap-2.5 text-xs text-slate-700"
                                    >
                                        <SubIcon className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                                        <div className="min-w-0">
                                            <div className="font-semibold text-slate-900 truncate">{res.name}</div>
                                            <div className="text-[10px] text-slate-400 truncate">{res.parentName}</div>
                                        </div>
                                    </Link>
                                );
                            })
                        )}
                    </div>
                ) : (
                    /* Standard Hierarchical Menu Items */
                    smNavItems.map((item) => {
                        const IconComponent = getTopLevelIcon(item.name);
                        const active = isItemActive(item);
                        const hasDropdown = Boolean(item.dropdown?.categories || item.dropdown?.items);
                        const isExpanded = expandedMenus.includes(item.name);

                        return (
                            <div key={item.name} className="space-y-0.5">
                                {/* Top-Level Menu Row */}
                                <div
                                    className={`group flex items-center justify-between px-3 py-2 rounded-xl text-xs font-semibold transition-all duration-150 cursor-pointer ${
                                        active
                                            ? 'bg-blue-50 text-blue-600 border-l-2 border-blue-600 font-bold shadow-2xs'
                                            : 'text-slate-700 hover:text-blue-600 hover:bg-slate-50'
                                    }`}
                                    onClick={() => {
                                        if (hasDropdown) {
                                            toggleMenu(item.name);
                                        }
                                    }}
                                >
                                    <Link
                                        to={item.path}
                                        onClick={(e) => {
                                            if (hasDropdown) {
                                                // If clicking the row text, allow navigation or toggle
                                                if (!isExpanded) {
                                                    setExpandedMenus((prev) => [...prev, item.name]);
                                                }
                                            } else {
                                                setMobileOpen(false);
                                            }
                                        }}
                                        className="flex items-center gap-2.5 flex-1 min-w-0 truncate"
                                    >
                                        <IconComponent
                                            className={`w-4 h-4 shrink-0 transition-colors ${
                                                active ? 'text-blue-600' : 'text-slate-400 group-hover:text-blue-600'
                                            }`}
                                        />
                                        <span className="truncate">{item.name}</span>
                                    </Link>

                                    {hasDropdown && (
                                        <button
                                            type="button"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                toggleMenu(item.name);
                                            }}
                                            className="p-1 rounded-md text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 transition-colors ml-1"
                                            aria-label={`Toggle ${item.name} submenus`}
                                        >
                                            <ChevronRight
                                                className={`w-3.5 h-3.5 transition-transform duration-200 ${
                                                    isExpanded ? 'rotate-90 text-blue-600' : ''
                                                }`}
                                            />
                                        </button>
                                    )}
                                </div>

                                {/* Expanded Submenu Architecture */}
                                {hasDropdown && isExpanded && (
                                    <div className="ml-4 pl-3 border-l border-slate-200/80 space-y-1.5 my-1 animate-in fade-in-50 duration-200">
                                        {/* Categories structure */}
                                        {item.dropdown?.categories?.map((cat: any) => {
                                            const isCatOpen = expandedCategories.includes(cat.id);
                                            const hasItems = Boolean(cat.items && cat.items.length > 0);
                                            const isCatActive = cat.path === location.pathname;

                                            return (
                                                <div key={cat.id} className="space-y-0.5">
                                                    {/* Category Header Row */}
                                                    <div
                                                        className="flex items-center justify-between py-1 px-2 rounded-lg text-[11px] font-bold uppercase tracking-wider text-slate-500 hover:text-blue-600 hover:bg-slate-50 transition-colors cursor-pointer"
                                                        onClick={() => hasItems && toggleCategory(cat.id)}
                                                    >
                                                        <Link
                                                            to={cat.path}
                                                            onClick={() => setMobileOpen(false)}
                                                            className={`truncate ${isCatActive ? 'text-blue-600 font-bold' : ''}`}
                                                        >
                                                            {cat.title}
                                                        </Link>
                                                        {hasItems && (
                                                            <button
                                                                type="button"
                                                                onClick={(e) => {
                                                                    e.stopPropagation();
                                                                    toggleCategory(cat.id);
                                                                }}
                                                                className="text-slate-400 hover:text-slate-600 p-0.5"
                                                            >
                                                                <ChevronRight
                                                                    className={`w-3 h-3 transition-transform duration-200 ${
                                                                        isCatOpen ? 'rotate-90 text-blue-600' : ''
                                                                    }`}
                                                                />
                                                            </button>
                                                        )}
                                                    </div>

                                                    {/* Category Sub-items */}
                                                    {hasItems && isCatOpen && (
                                                        <div className="ml-2 pl-2 border-l border-slate-200/60 space-y-0.5 my-0.5">
                                                            {cat.items.map((sub: any, sIdx: number) => {
                                                                const SubIcon = Icons[sub.icon] || ArrowRight;
                                                                const isSubActive = 
                                                                    location.pathname === sub.path.split('#')[0] && 
                                                                    (!sub.path.includes('#') || location.hash === `#${sub.path.split('#')[1]}`);

                                                                return (
                                                                    <Link
                                                                        key={sIdx}
                                                                        to={sub.path}
                                                                        onClick={() => setMobileOpen(false)}
                                                                        className={`flex items-center gap-2 px-2 py-1 rounded-lg text-xs transition-colors group ${
                                                                            isSubActive
                                                                                ? 'text-blue-600 bg-blue-50/70 font-semibold'
                                                                                : 'text-slate-600 hover:text-blue-600 hover:bg-slate-50'
                                                                        }`}
                                                                    >
                                                                        <SubIcon className={`w-3 h-3 shrink-0 ${isSubActive ? 'text-blue-600' : 'text-slate-400 group-hover:text-blue-600'}`} />
                                                                        <span className="truncate">{sub.name}</span>
                                                                    </Link>
                                                                );
                            })}
                                                        </div>
                                                    )}
                                                </div>
                                            );
                                        })}

                                        {/* Direct dropdown items (if not using categories) */}
                                        {item.dropdown?.items?.map((sub: any, sIdx: number) => {
                                            const SubIcon = Icons[sub.icon] || ArrowRight;
                                            const isSubActive = location.pathname === sub.path.split('#')[0];

                                            return (
                                                <Link
                                                    key={sIdx}
                                                    to={sub.path}
                                                    onClick={() => setMobileOpen(false)}
                                                    className={`flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-xs transition-colors group ${
                                                        isSubActive
                                                            ? 'text-blue-600 bg-blue-50/70 font-semibold'
                                                            : 'text-slate-600 hover:text-blue-600 hover:bg-slate-50'
                                                    }`}
                                                >
                                                    <SubIcon className={`w-3.5 h-3.5 shrink-0 ${isSubActive ? 'text-blue-600' : 'text-slate-400 group-hover:text-blue-600'}`} />
                                                    <span className="truncate">{sub.name}</span>
                                                </Link>
                                            );
                                        })}
                                    </div>
                                )}
                            </div>
                        );
                    })
                )}
            </div>

            {/* ── 4. SIDEBAR FOOTER (CALL TO ACTION & PROTOCOL STATUS) ── */}
            <div className="p-3.5 border-t border-slate-200/80 bg-slate-50/60 shrink-0 space-y-3">
                <div className="p-3 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-2">
                    <div className="flex items-center justify-between text-[11px] font-mono text-slate-500">
                        <span className="font-bold text-slate-700">Need Advisory?</span>
                        <span className="flex items-center gap-1 text-emerald-600 font-semibold">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                            Online
                        </span>
                    </div>
                    <p className="text-[11px] text-slate-500 leading-tight">
                        Schedule a 45-minute confidential session with our revenue architects.
                    </p>
                    <Link
                        to="/book-consultation"
                        onClick={() => setMobileOpen(false)}
                        className="w-full inline-flex items-center justify-center gap-1.5 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-3 rounded-xl transition-colors text-xs shadow-xs"
                    >
                        <span>Book Consultation</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                </div>

                <div className="flex items-center justify-between px-1 text-[11px] text-slate-400 font-mono">
                    <span>ProfitMachines Protocol</span>
                    <span className="text-slate-500 font-bold">SOC2 · Enterprise</span>
                </div>
            </div>
        </div>
    );

    return (
        <>
            {/* ── DESKTOP FIXED LEFT SIDEBAR (>= lg) ── */}
            <aside className="hidden lg:flex w-72 xl:w-80 h-screen fixed top-0 left-0 z-40 bg-white border-r border-slate-200/80 flex-col overflow-hidden shadow-xs">
                {renderSidebarContent()}
            </aside>

            {/* ── TOP HEADER BAR (RESPONSIVE RIGHT CONTENT HEADER & MOBILE BAR) ── */}
            <header className="fixed top-0 right-0 left-0 lg:left-72 xl:left-80 z-30 h-16 lg:h-[72px] bg-white/95 backdrop-blur-md border-b border-slate-200/80 px-4 sm:px-6 flex items-center justify-between transition-all duration-300">
                {/* Left side: Mobile Hamburger + Breadcrumb indicator */}
                <div className="flex items-center gap-3">
                    {/* Mobile Hamburger toggle button */}
                    <button
                        type="button"
                        onClick={() => setMobileOpen(!mobileOpen)}
                        className="lg:hidden p-2 rounded-xl text-slate-700 hover:text-blue-600 hover:bg-slate-100 transition-colors"
                        aria-label="Toggle navigation drawer"
                    >
                        {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                    </button>

                    {/* Mobile Brand Logo */}
                    <Link to="/" className="lg:hidden flex items-center gap-2">
                        <div className="w-7 h-7 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold text-xs shadow-xs">
                            PM
                        </div>
                        <span className="font-extrabold text-base tracking-tight text-slate-900 font-heading">
                            <span>Profit</span><span className="text-blue-600">Machines</span>
                        </span>
                    </Link>

                    {/* Desktop Breadcrumb / Active Section Indicator */}
                    <div className="hidden lg:flex items-center gap-2 text-xs font-mono">
                        <span className="text-slate-400">ProfitMachines</span>
                        <span className="text-slate-300">/</span>
                        <span className="text-slate-500 font-medium">{currentBreadcrumb.section}</span>
                        <span className="text-slate-300">/</span>
                        <span className="text-blue-600 font-bold bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-100">
                            {currentBreadcrumb.title}
                        </span>
                    </div>
                </div>

                {/* Right side: Top Header Actions */}
                <div className="flex items-center gap-3">
                    {/* Live Network Badge */}
                    <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-mono">
                        <span className="w-2 h-2 rounded-full bg-emerald-500" />
                        <span>Global Revenue Ops</span>
                    </div>

                    {/* Phone / Call Quick Link */}
                    <a
                        href="tel:+18005550199"
                        className="hidden md:inline-flex items-center gap-1.5 text-xs text-slate-600 hover:text-blue-600 font-medium px-2.5 py-1.5 rounded-lg hover:bg-slate-50 transition-colors"
                    >
                        <Phone className="w-3.5 h-3.5 text-slate-400" />
                        <span>Sales Advisory</span>
                    </a>

                    {/* Primary Consultation Action Button */}
                    <Link
                        to="/book-consultation"
                        className="inline-flex items-center gap-1.5 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-bold text-xs sm:text-sm px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl transition-all shadow-sm shadow-blue-600/20 hover:shadow-blue-600/35 hover:-translate-y-px"
                    >
                        <span>Book Consultation</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                </div>
            </header>

            {/* ── MOBILE SLIDE-OVER DRAWER (< lg) ── */}
            {mobileOpen && (
                <div className="lg:hidden fixed inset-0 z-50 flex">
                    {/* Backdrop Overlay */}
                    <div
                        className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs transition-opacity animate-in fade-in-0 duration-200"
                        onClick={() => setMobileOpen(false)}
                    />

                    {/* Slide-out Drawer Panel */}
                    <div className="relative w-80 max-w-[85vw] h-full bg-white shadow-2xl flex flex-col z-10 animate-in slide-in-from-left duration-200">
                        {renderSidebarContent()}
                    </div>
                </div>
            )}
        </>
    );
}
