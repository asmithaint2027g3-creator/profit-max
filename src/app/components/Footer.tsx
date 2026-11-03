import React from 'react';
import { 
    Linkedin, Twitter, Mail, Phone, MapPin, 
    Cloud, Share2, LayoutGrid, Box, Server, ArrowUpRight 
} from 'lucide-react';
import { Link } from 'react-router-dom';

interface FooterLinkGroup {
    title: string;
    path: string;
    links: { name: string; path: string }[];
}

export default function Footer() {
    const linkGroups: FooterLinkGroup[] = [
        {
            title: 'Offerings',
            path: '/offerings',
            links: [
                { name: 'Offerings Overview', path: '/offerings' },
                { name: 'Profit Pool Discovery', path: '/offerings/profit-pool-discovery' },
                { name: 'Demand Engineering', path: '/offerings/demand-engineering' },
                { name: 'Sales Acceleration', path: '/offerings/sales-acceleration' },
                { name: 'Revenue Operations', path: '/offerings/revenue-operations' },
                { name: 'GTM Transformation', path: '/offerings/gtm-transformation' },
                { name: 'Customer Success', path: '/offerings/customer-success' },
                { name: 'Growth Intelligence', path: '/offerings/growth-intelligence' },
                { name: 'AI Trust & Governance', path: '/offerings/ai-trust-governance' },
            ]
        },
        {
            title: 'AI Sales',
            path: '/ai-native-sales',
            links: [
                { name: 'AI Sales Hub', path: '/ai-native-sales' },
                { name: 'Revenue Intelligence', path: '/ai-native-sales/revenue-intelligence' },
                { name: 'Autonomous Pipeline', path: '/ai-native-sales/autonomous-pipeline-generation' },
                { name: 'Sales Engagement', path: '/ai-native-sales/autonomous-sales-engagement' },
                { name: 'Intelligent Sales Agents', path: '/ai-native-sales/intelligent-sales-agents' },
                { name: 'Revenue Acceleration', path: '/ai-native-sales/revenue-acceleration' },
                { name: 'Pricing Intelligence', path: '/ai-native-sales/pricing-intelligence' },
                { name: 'Autonomous GTM Command', path: '/ai-native-sales/autonomous-gtm-command-center' },
            ]
        },
        {
            title: 'Growth Science',
            path: '/growth-science',
            links: [
                { name: 'Growth Science Hub', path: '/growth-science' },
                { name: 'Revenue Physics', path: '/growth-science/revenue-physics' },
                { name: 'Friction Diagnostics', path: '/growth-science/friction-diagnostics' },
                { name: 'AI Engines', path: '/growth-science/ai-engines' },
                { name: 'Proprietary Growth Models', path: '/growth-science/growth-models' },
                { name: 'Executive Telemetry', path: '/growth-science/executive-telemetry' },
                { name: 'Revenue Potential Discovery', path: '/growth-science/revenue-potential-discovery' },
                { name: 'Revenue Leakage Recovery', path: '/growth-science/revenue-leakage-recovery' },
            ]
        },
        {
            title: 'Global Scaling',
            path: '/global-acceleration',
            links: [
                { name: 'Global Scaling Hub', path: '/global-acceleration' },
                { name: 'Market Access', path: '/global-acceleration/market-access' },
                { name: 'Demand Networks', path: '/global-acceleration/demand-networks' },
                { name: 'Export Growth Engine', path: '/global-acceleration/export-growth-engine' },
                { name: 'Partner Ecosystems', path: '/global-acceleration/partner-ecosystems' },
                { name: 'Supply Networks', path: '/global-acceleration/supply-networks' },
                { name: 'Global Revenue Engines', path: '/global-acceleration/revenue-engines' },
                { name: 'Capital & Finance', path: '/global-acceleration/capital-finance' },
            ]
        },
        {
            title: 'Industries',
            path: '/industries',
            links: [
                { name: 'Industries Overview', path: '/industries' },
                { name: 'Enterprise Scale', path: '/industries/enterprise' },
                { name: 'B2B Revenue', path: '/industries/b2b' },
                { name: 'SaaS & Subscription', path: '/industries/saas' },
                { name: 'Mid-Market Acceleration', path: '/industries/midmarket' },
                { name: 'Startups & Scaleups', path: '/industries/startups' },
                { name: 'Consumer & B2C', path: '/industries/b2c' },
            ]
        },
        {
            title: 'Company',
            path: '/about',
            links: [
                { name: 'About ProfitMachines', path: '/about' },
                { name: 'Leadership & Teams', path: '/leadership' },
                { name: 'Careers & Fellowships', path: '/careers' },
                { name: 'Global Presence', path: '/global-presence' },
                { name: 'Case Studies', path: '/case-studies' },
                { name: 'Outcomes & Metrics', path: '/outcomes' },
                { name: 'Blog & Insights', path: '/blog' },
                { name: 'Contact Inquiries', path: '/contact' },
            ]
        }
    ];

    const legalLinks = [
        { name: 'Privacy Policy', path: '/privacy' },
        { name: 'Terms of Service', path: '/terms' },
        { name: 'Security & Compliance', path: '/security' },
        { name: 'Cookies Policy', path: '/cookies' },
        { name: 'Copyright & IP', path: '/copyright' },
        { name: 'Sitemap', path: '/sitemap' },
    ];

    return (
        <footer className="bg-slate-950 pt-16 pb-12 border-t border-slate-800/80 font-sans text-slate-400 relative overflow-hidden">
            {/* Background Accent Glows */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-20%] right-[-10%] w-[700px] h-[700px] bg-blue-900/15 rounded-full blur-[140px] opacity-60" />
                <div className="absolute bottom-[-20%] left-[-10%] w-[700px] h-[700px] bg-indigo-900/15 rounded-full blur-[140px] opacity-60" />
            </div>

            <div className="max-w-[1440px] w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* Executive Call to Action Banner */}
                <div className="bg-gradient-to-r from-slate-900 via-blue-950/40 to-slate-900 border border-blue-500/20 rounded-3xl p-8 md:p-12 mb-16 text-center lg:text-left flex flex-col lg:flex-row items-center justify-between gap-8 shadow-xl shadow-black/40">
                    <div className="max-w-2xl">
                        <span className="text-[11px] font-mono font-bold tracking-widest uppercase px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/30 inline-block mb-3">
                            Executive Consultation
                        </span>
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-white mb-3 font-heading tracking-tight">
                            Build Your Next Enterprise AI Revenue Engine
                        </h2>
                        <p className="text-slate-300 text-sm md:text-base leading-relaxed">
                            Diagnose revenue friction, audit untapped profit pools, and engineer your tailored growth roadmap with our executive architecture team.
                        </p>
                    </div>
                    <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0 w-full lg:w-auto">
                        <Link 
                            to="/book-consultation" 
                            className="w-full sm:w-auto px-6 py-3.5 rounded-xl font-bold text-sm text-white bg-blue-600 hover:bg-blue-500 shadow-lg shadow-blue-600/30 transition-all hover:scale-[1.02] active:scale-[0.98] text-center"
                        >
                            Book Free Consultation
                        </Link>
                        <a 
                            href="mailto:connect@profitmachines.com" 
                            className="w-full sm:w-auto px-6 py-3.5 rounded-xl font-bold text-sm text-slate-200 border border-slate-700 hover:border-slate-500 hover:bg-white/5 transition-all text-center"
                        >
                            Email Us Directly
                        </a>
                    </div>
                </div>

                {/* Top Section: Brand & Contact Column + 6 Navigation Columns */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">

                    {/* Brand & Direct Contact (Left 3.5 Columns on Desktop) */}
                    <div className="lg:col-span-3 space-y-6">
                        <div>
                            <Link to="/" className="inline-block mb-3">
                                <div className="flex items-center gap-2">
                                    <div className="text-2xl font-black tracking-tight text-white flex items-center font-heading">
                                        <span>Profit</span>
                                        <span className="text-blue-500">Machines</span>
                                    </div>
                                </div>
                            </Link>
                            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-6 font-normal">
                                AI-native revenue transformation systems. Engineering measurable pipeline generation, sales acceleration, and margin expansion for modern enterprises.
                            </p>

                            {/* Direct Contact Points */}
                            <div className="space-y-3.5 mb-6 text-xs sm:text-sm">
                                <a 
                                    href="mailto:connect@profitmachines.com" 
                                    className="group flex items-center gap-3 text-slate-300 hover:text-blue-400 transition-colors"
                                >
                                    <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-blue-500/50 group-hover:bg-blue-600/20 transition-all shrink-0">
                                        <Mail className="w-4 h-4 text-blue-400" />
                                    </div>
                                    <span className="font-medium truncate">connect@profitmachines.com</span>
                                </a>

                                <a 
                                    href="tel:+917889397999" 
                                    className="group flex items-center gap-3 text-slate-300 hover:text-blue-400 transition-colors"
                                >
                                    <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-blue-500/50 group-hover:bg-blue-600/20 transition-all shrink-0">
                                        <Phone className="w-4 h-4 text-cyan-400" />
                                    </div>
                                    <span className="font-medium">+91 7889397999</span>
                                </a>

                                <div className="flex items-start gap-3 text-slate-400 text-xs pt-1">
                                    <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0 mt-0.5">
                                        <MapPin className="w-4 h-4 text-indigo-400" />
                                    </div>
                                    <div className="leading-snug">
                                        <div className="font-semibold text-slate-300">Western Operations</div>
                                        <div>WeWork Raheja Platinum, Marol, Andheri East, Mumbai 400059</div>
                                    </div>
                                </div>
                            </div>

                            {/* Social Presence */}
                            <div className="flex items-center gap-3 pt-2">
                                <a 
                                    href="https://www.linkedin.com" 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    aria-label="ProfitMachines LinkedIn"
                                    className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-blue-600 hover:border-blue-500 transition-all"
                                >
                                    <Linkedin className="w-4 h-4" />
                                </a>
                                <a 
                                    href="https://twitter.com" 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    aria-label="ProfitMachines Twitter"
                                    className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-blue-600 hover:border-blue-500 transition-all"
                                >
                                    <Twitter className="w-4 h-4" />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Navigation Columns (Right 9 Columns on Desktop -> 6 Submenu Columns) */}
                    <div className="lg:col-span-9 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8">
                        {linkGroups.map((group, groupIndex) => (
                            <div key={groupIndex} className="space-y-3.5">
                                <Link 
                                    to={group.path} 
                                    className="group inline-flex items-center gap-1 text-[11px] font-bold text-white uppercase tracking-wider border-b border-white/10 pb-2.5 hover:text-blue-400 transition-colors w-full"
                                >
                                    <span>{group.title}</span>
                                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-blue-400" />
                                </Link>
                                <ul className="space-y-2.5 text-xs">
                                    {group.links.map((link, linkIndex) => (
                                        <li key={linkIndex}>
                                            <Link 
                                                to={link.path} 
                                                className="text-slate-400 hover:text-blue-400 transition-colors block leading-relaxed font-normal hover:translate-x-0.5 transform duration-150"
                                            >
                                                {link.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Trusted Enterprise Integration Ecosystem */}
                <div className="border-t border-white/10 pt-8 pb-6">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                        <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest">
                            Enterprise Revenue Integrations &amp; Standards
                        </span>
                        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 opacity-75 grayscale hover:grayscale-0 transition-all duration-500 text-xs">
                            <div className="flex items-center gap-2 group cursor-default">
                                <Cloud className="w-4 h-4 text-slate-400 group-hover:text-[#00A1E0] transition-colors" />
                                <span className="font-semibold text-slate-300">Salesforce CRM</span>
                            </div>
                            <div className="flex items-center gap-2 group cursor-default">
                                <Share2 className="w-4 h-4 text-slate-400 group-hover:text-[#FF7A59] transition-colors" />
                                <span className="font-semibold text-slate-300">HubSpot</span>
                            </div>
                            <div className="flex items-center gap-2 group cursor-default">
                                <LayoutGrid className="w-4 h-4 text-slate-400 group-hover:text-[#00A4EF] transition-colors" />
                                <span className="font-semibold text-slate-300">Microsoft Azure</span>
                            </div>
                            <div className="flex items-center gap-2 group cursor-default">
                                <Box className="w-4 h-4 text-slate-400 group-hover:text-[#FF9900] transition-colors" />
                                <span className="font-semibold text-slate-300">AWS Cloud</span>
                            </div>
                            <div className="flex items-center gap-2 group cursor-default">
                                <Server className="w-4 h-4 text-slate-400 group-hover:text-[#4285F4] transition-colors" />
                                <span className="font-semibold text-slate-300">Google Cloud</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Legal & Compliance Bar */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-6 border-t border-white/10 text-xs text-slate-400">
                    <p className="font-normal text-center md:text-left">
                        &copy; {new Date().getFullYear()} ProfitMachines Revenue Systems. All rights reserved.
                    </p>
                    <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-2 font-normal">
                        {legalLinks.map((item, i) => (
                            <Link 
                                key={i} 
                                to={item.path} 
                                className="hover:text-blue-400 transition-colors"
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>
                </div>

            </div>
        </footer>
    );
}
