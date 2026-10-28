// ProfitMachines Intelligent Chatbot Knowledge Bank & Route Context Registry
// Comprehensive, grounded domain knowledge base for all ProfitMachines capabilities,
// offerings, frameworks, industries, case studies, and consultation workflows.

export interface PageChatContext {
    id: string;
    routePattern: string | RegExp;
    title: string;
    category: string;
    welcomeMessage: string;
    suggestedQuestions: string[];
    relevantTopics: string[];
    relatedRoutes: { label: string; path: string }[];
    defaultFollowUps: string[];
}

export interface KnowledgeItem {
    id: string;
    title: string;
    category: string;
    keywords: string[];
    summary: string;
    keyPoints: string[];
    metricsOrFacts?: string[];
    relatedOfferings: { name: string; path: string }[];
    followUpQuestions: string[];
}

// ─────────────────────────────────────────────────────────────────────────────
// 1. PAGE CONTEXT REGISTRY (ROUTE-AWARE QUESTION BANK)
// ─────────────────────────────────────────────────────────────────────────────

export const PAGE_CONTEXTS: PageChatContext[] = [
    // ── AI Native Sales Hub ──────────────────────────────────────────────────
    {
        id: 'ai-native-sales-hub',
        routePattern: /^\/ai-(native-)?sales(\/)?$|^\/ai-driven-sales-transformation(\/)?$/,
        title: 'AI Native Sales Hub',
        category: 'AI Native Sales',
        welcomeMessage: "Welcome! You're exploring AI Native Sales. I can help you understand how AI can improve prospecting, pipeline generation, revenue intelligence, sales execution, and conversion performance.\n\nWhat would you like to explore?",
        suggestedQuestions: [
            "How can AI improve our sales pipeline?",
            "How does AI-powered prospecting work?",
            "How can we identify high-intent buyers?",
            "How can we improve sales conversion rates?",
            "How can AI automate repetitive sales tasks?",
            "How can ProfitMachines help our sales team?"
        ],
        relevantTopics: ['prospecting', 'pipeline', 'sales execution', 'revenue intelligence', 'agentic sdr', 'deal execution', 'automation'],
        relatedRoutes: [
            { label: 'Prospecting & Pipeline', path: '/ai-native-sales/prospecting' },
            { label: 'Revenue Intelligence', path: '/ai-native-sales/revenue-intelligence' },
            { label: 'Agentic SDR', path: '/ai-native-sales/agentic-sdr' },
            { label: 'Book Consultation', path: '/book-consultation' }
        ],
        defaultFollowUps: [
            "How does Agentic SDR compare to human SDRs?",
            "What CRM integrations are supported?",
            "Can we pilot this on a single sales territory?"
        ]
    },
    {
        id: 'ai-sales-prospecting',
        routePattern: '/ai-native-sales/prospecting',
        title: 'AI Prospecting & Pipeline Generation',
        category: 'AI Native Sales',
        welcomeMessage: "You're viewing AI Prospecting & Pipeline Generation. I can show you how algorithmic intent detection, real-time account scoring, and multi-channel outreach find high-probability buyers before your competitors do.",
        suggestedQuestions: [
            "How does AI-powered prospecting work?",
            "How do we identify active intent accounts?",
            "How does algorithmic scoring reduce lead qualification time?",
            "What data sources are used for signal detection?",
            "Can it reduce our sales team's prospecting workload?"
        ],
        relevantTopics: ['prospecting', 'buyer intent', 'lead scoring', 'pipeline acceleration', 'outreach automation'],
        relatedRoutes: [
            { label: 'Agentic SDR', path: '/ai-native-sales/agentic-sdr' },
            { label: 'Predictive Intelligence', path: '/ai-native-sales/predictive-intelligence' },
            { label: 'Book Consultation', path: '/book-consultation' }
        ],
        defaultFollowUps: [
            "Which of your services supports automated outreach?",
            "How quickly can we see pipeline lift?",
            "What CRM platforms are supported?"
        ]
    },
    {
        id: 'ai-sales-revenue-intelligence',
        routePattern: '/ai-native-sales/revenue-intelligence',
        title: 'Revenue Intelligence & Diagnostics',
        category: 'AI Native Sales',
        welcomeMessage: "You're exploring Revenue Intelligence. I can help you understand how machine learning models analyze deal conversations, forecast pipeline health, and flag deal risks in real time.",
        suggestedQuestions: [
            "How does Revenue Intelligence predict deal slippage?",
            "How do conversation signals inform forecast accuracy?",
            "What KPIs does the revenue intelligence engine track?",
            "How can leadership get real-time deal health visibility?"
        ],
        relevantTopics: ['revenue intelligence', 'forecasting', 'conversation analytics', 'deal health', 'slippage detection'],
        relatedRoutes: [
            { label: 'Predictive Intelligence', path: '/ai-native-sales/predictive-intelligence' },
            { label: 'Revenue Operations', path: '/ai-native-sales/revops' },
            { label: 'Executive Telemetry', path: '/growth-science/executive-telemetry' }
        ],
        defaultFollowUps: [
            "How does this integrate with Salesforce or HubSpot?",
            "Can we see a live telemetry demonstration?",
            "How does it handle complex multi-stakeholder deals?"
        ]
    },
    {
        id: 'ai-sales-agentic-sdr',
        routePattern: '/ai-native-sales/agentic-sdr',
        title: 'Agentic SDR & Autonomous Outbound',
        category: 'AI Native Sales',
        welcomeMessage: "You're viewing Agentic SDR. I can explain how autonomous AI sales agents research prospects, draft hyper-personalized hyper-relevant messages, and book qualified meetings directly into your reps' calendars.",
        suggestedQuestions: [
            "What tasks can an Agentic SDR handle autonomously?",
            "How does the AI personalize outbound emails and LinkedIn touchpoints?",
            "How does human-in-the-loop governance ensure brand safety?",
            "Can it reduce our sales team's workload?",
            "What is the average response rate compared to standard cold outreach?"
        ],
        relevantTopics: ['agentic sdr', 'autonomous sales', 'email personalization', 'meeting booking', 'governance'],
        relatedRoutes: [
            { label: 'Prospecting Pipeline', path: '/ai-native-sales/prospecting' },
            { label: 'Sales Execution', path: '/ai-native-sales/sales-execution' },
            { label: 'AI Trust & Governance', path: '/offerings/ai-trust-governance' }
        ],
        defaultFollowUps: [
            "How do we configure tone and value propositions?",
            "Which ProfitMachines offering includes Agentic SDR?",
            "Schedule an architecture review"
        ]
    },
    {
        id: 'ai-sales-deal-execution',
        routePattern: '/ai-native-sales/deal-execution',
        title: 'Deal Execution & Close Acceleration',
        category: 'AI Native Sales',
        welcomeMessage: "You're exploring Deal Execution. I can help you understand how AI copilots guide account executives during active sales cycles, overcoming objections, managing stakeholders, and compressing cycle times.",
        suggestedQuestions: [
            "How does AI assist reps during complex deal negotiations?",
            "How does the system recommend next-best actions for stalled deals?",
            "What impact does close acceleration have on sales cycle length?",
            "How are multi-threaded enterprise stakeholder maps built?"
        ],
        relevantTopics: ['deal execution', 'objection handling', 'sales cycles', 'win rate', 'stakeholder mapping'],
        relatedRoutes: [
            { label: 'Revenue Intelligence', path: '/ai-native-sales/revenue-intelligence' },
            { label: 'Sales Acceleration', path: '/offerings/sales-acceleration' }
        ],
        defaultFollowUps: [
            "Can this assist with pricing and commercial negotiations?",
            "What are the typical win-rate improvements?",
            "How are sales playbooks codified into the copilot?"
        ]
    },

    // ── Growth & Acceleration Science ─────────────────────────────────────────
    {
        id: 'growth-science-hub',
        routePattern: /^\/growth-(acceleration-)?science(\/)?$/,
        title: 'Growth & Acceleration Science',
        category: 'Growth & Acceleration Science',
        welcomeMessage: "You're exploring Growth & Acceleration Science. I can help you understand revenue growth, profit pools, revenue friction, growth models, and performance optimization.\n\nWhat would you like to examine?",
        suggestedQuestions: [
            "How can we identify new profit pools?",
            "What is Revenue Physics?",
            "How can we identify revenue friction?",
            "How can we improve revenue velocity?",
            "How can we measure growth performance?",
            "How can ProfitMachines improve profitability?"
        ],
        relevantTopics: ['growth science', 'profit pools', 'revenue physics', 'friction diagnostics', 'growth models', 'velocity'],
        relatedRoutes: [
            { label: 'Revenue Physics', path: '/growth-science/revenue-physics' },
            { label: 'Friction Diagnostics', path: '/growth-science/friction-diagnostics' },
            { label: 'Proprietary Growth Models', path: '/growth-science/growth-models' },
            { label: 'Book Diagnostic Consultation', path: '/book-consultation' }
        ],
        defaultFollowUps: [
            "How is a Revenue Friction Audit conducted?",
            "What mathematical formulas govern Revenue Physics?",
            "What is the typical ROI on profit pool discovery?"
        ]
    },
    {
        id: 'growth-science-revenue-physics',
        routePattern: '/growth-science/revenue-physics',
        title: 'Revenue Physics & Momentum Dynamics',
        category: 'Growth & Acceleration Science',
        welcomeMessage: "You're exploring Revenue Physics. I can help you understand how mathematical modeling, revenue momentum, friction coefficients, and capital velocity optimize enterprise revenue systems.",
        suggestedQuestions: [
            "What are the core laws of Revenue Physics?",
            "How do friction coefficients impact our conversion pipeline?",
            "How is capital velocity calculated in enterprise sales?",
            "How does Revenue Physics differ from traditional sales forecasting?",
            "How can mathematical models isolate hidden revenue leakage?"
        ],
        relevantTopics: ['revenue physics', 'momentum', 'friction coefficients', 'capital velocity', 'mathematical modeling'],
        relatedRoutes: [
            { label: 'Friction Diagnostics', path: '/growth-science/friction-diagnostics' },
            { label: 'AI Acceleration Engines', path: '/growth-science/ai-engines' },
            { label: 'Executive Telemetry', path: '/growth-science/executive-telemetry' }
        ],
        defaultFollowUps: [
            "How do you measure pipeline inertia?",
            "Which ProfitMachines offering includes Revenue Physics analysis?",
            "Can we run a diagnostic audit on our CRM data?"
        ]
    },
    {
        id: 'growth-science-friction-diagnostics',
        routePattern: '/growth-science/friction-diagnostics',
        title: 'Friction Diagnostics & Leakage Auditing',
        category: 'Growth & Acceleration Science',
        welcomeMessage: "You're exploring Friction Diagnostics. I can help you detect invisible sales leaks, pipeline slippage, conversion drop-offs, and execution friction across your revenue engine.",
        suggestedQuestions: [
            "How do we detect hidden pipeline friction?",
            "What are the primary causes of revenue slippage?",
            "How does autonomous friction auditing work?",
            "How much revenue can be recovered by eliminating friction?",
            "How long does an enterprise friction diagnostic take?"
        ],
        relevantTopics: ['friction diagnostics', 'revenue leakage', 'pipeline drop-off', 'audit', 'cycle time reduction'],
        relatedRoutes: [
            { label: 'Revenue Physics', path: '/growth-science/revenue-physics' },
            { label: 'Proprietary Growth Models', path: '/growth-science/growth-models' },
            { label: 'Book Consultation', path: '/book-consultation' }
        ],
        defaultFollowUps: [
            "What data inputs are required for the audit?",
            "How does this connect to our existing tech stack?",
            "See related SaaS or B2B case studies"
        ]
    },

    // ── Global Business Acceleration ──────────────────────────────────────────
    {
        id: 'global-acceleration-hub',
        routePattern: /^\/global-(business-)?accelerations?(\/)?$/,
        title: 'Global Business Acceleration',
        category: 'Global Business Acceleration',
        welcomeMessage: "You're exploring Global Business Acceleration. I can help you understand cross-border revenue expansion, international market entry, localized partner ecosystems, and global scaling frameworks.",
        suggestedQuestions: [
            "How can we evaluate a new international market?",
            "How can we identify market-entry opportunities?",
            "How can we prioritize countries for expansion?",
            "How can AI support global business operations?",
            "How can we measure international growth performance?",
            "What is the role of the Executive Expansion Office?"
        ],
        relevantTopics: ['global expansion', 'cross-border strategy', 'market entry', 'partner ecosystems', 'global revops'],
        relatedRoutes: [
            { label: 'Market Intelligence', path: '/global-acceleration/market-intelligence' },
            { label: 'Cross-Border Strategy', path: '/global-acceleration/cross-border-strategy' },
            { label: 'Global Partner Ecosystems', path: '/global-acceleration/partner-ecosystems' },
            { label: 'Executive Expansion Office', path: '/global-acceleration/expansion-office' }
        ],
        defaultFollowUps: [
            "How do you calculate Market Readiness Scores?",
            "What are the typical risks in cross-border scaling?",
            "How do we align global sales compensation and revops?"
        ]
    },
    {
        id: 'global-market-intelligence',
        routePattern: '/global-acceleration/market-intelligence',
        title: 'Global Market Intelligence',
        category: 'Global Business Acceleration',
        welcomeMessage: "You're exploring Global Market Intelligence. I can help you evaluate territory TAM, competitor whitespace, regulatory barriers, and buyer density across North America, EMEA, APAC, and MENA.",
        suggestedQuestions: [
            "How does ProfitMachines assess international territory TAM?",
            "How do we identify competitor vulnerabilities in target markets?",
            "What regulatory and compliance factors are analyzed?",
            "How are localized buyer intent signals gathered?"
        ],
        relevantTopics: ['market intelligence', 'TAM validation', 'competitor whitespace', 'territory expansion', 'localization'],
        relatedRoutes: [
            { label: 'Cross-Border Strategy', path: '/global-acceleration/cross-border-strategy' },
            { label: 'Profit Pool Discovery', path: '/offerings/profit-pool-discovery' }
        ],
        defaultFollowUps: [
            "Can we run this for MENA or European expansion?",
            "Which data providers power the global intelligence?",
            "Schedule a global expansion advisory session"
        ]
    },

    // ── Core Offerings ────────────────────────────────────────────────────────
    {
        id: 'offerings-hub',
        routePattern: /^\/offerings(\/)?$/,
        title: 'Offerings Architecture',
        category: 'Offerings',
        welcomeMessage: "Welcome to ProfitMachines Offerings. We provide an integrated suite spanning Profit Pool Discovery, Demand Engineering, Sales Acceleration, Revenue Operations, GTM Transformation, and AI Governance.\n\nWhich discipline would you like to explore?",
        suggestedQuestions: [
            "What are ProfitMachines' core service offerings?",
            "How do Strategy & Consulting integrate with AI & Automation?",
            "How does Profit Pool Discovery differ from traditional market research?",
            "What is Demand Engineering?",
            "How does Revenue Operations align sales, marketing, and CS?",
            "How do we choose the right engagement model for our stage?"
        ],
        relevantTopics: ['offerings', 'profit pool', 'demand engineering', 'sales acceleration', 'revops', 'gtm', 'ai governance'],
        relatedRoutes: [
            { label: 'Profit Pool Discovery', path: '/offerings/profit-pool-discovery' },
            { label: 'Demand Engineering', path: '/offerings/demand-engineering' },
            { label: 'Sales Acceleration', path: '/offerings/sales-acceleration' },
            { label: 'Engagement Models', path: '/engagement/models' }
        ],
        defaultFollowUps: [
            "Can offerings be deployed modularly?",
            "What is the typical time-to-value for Demand Engineering?",
            "Talk to a Practice Lead"
        ]
    },
    {
        id: 'offering-profit-pool',
        routePattern: '/offerings/profit-pool-discovery',
        title: 'Profit Pool Discovery',
        category: 'Offerings',
        welcomeMessage: "You're viewing Profit Pool Discovery. We identify high-margin customer segments, unaddressed buyer whitespace, and margin opportunities that traditional reporting overlooks.",
        suggestedQuestions: [
            "How does Profit Pool Discovery uncover hidden margin opportunities?",
            "What data sources and economic models are used?",
            "How do we determine our ideal customer profile (ICP) yield?",
            "What deliverables are included in a Profit Pool engagement?",
            "How does this inform our pricing and GTM strategy?"
        ],
        relevantTopics: ['profit pool', 'whitespace', 'margin expansion', 'icp yield', 'pricing strategy'],
        relatedRoutes: [
            { label: 'Demand Engineering', path: '/offerings/demand-engineering' },
            { label: 'Revenue Physics', path: '/growth-science/revenue-physics' },
            { label: 'Book Consultation', path: '/book-consultation' }
        ],
        defaultFollowUps: [
            "How long does a Profit Pool Discovery study take?",
            "Which case study illustrates profit pool expansion?",
            "Schedule a scoping discussion"
        ]
    },
    {
        id: 'offering-demand-engineering',
        routePattern: '/offerings/demand-engineering',
        title: 'Demand Engineering',
        category: 'Offerings',
        welcomeMessage: "You're viewing Demand Engineering. We replace unpredictable lead generation with engineered, high-intent buyer acquisition systems powered by predictive targeting and algorithmic attribution.",
        suggestedQuestions: [
            "What is Demand Engineering and how does it differ from demand gen?",
            "How do you capture in-market buyer intent signals?",
            "What is Revenue-Qualified Lead (RQL) scoring?",
            "How does algorithmic multi-touch attribution work?",
            "How does Demand Engineering reduce customer acquisition cost (CAC)?"
        ],
        relevantTopics: ['demand engineering', 'intent signals', 'rql', 'attribution', 'cac reduction', 'pipeline'],
        relatedRoutes: [
            { label: 'Sales Acceleration', path: '/offerings/sales-acceleration' },
            { label: 'AI Prospecting', path: '/ai-native-sales/prospecting' },
            { label: 'Demand Pulse', path: '/demand-pulse' }
        ],
        defaultFollowUps: [
            "What conversion uplift do clients typically experience?",
            "How does Demand Engineering connect with inbound marketing?",
            "Request a Demand System Audit"
        ]
    },
    {
        id: 'offering-sales-acceleration',
        routePattern: '/offerings/sales-acceleration',
        title: 'Sales Acceleration',
        category: 'Offerings',
        welcomeMessage: "You're exploring Sales Acceleration. We equip revenue teams with AI copilots, dynamic objection handling, stakeholder intelligence, and deal execution playbooks that accelerate win rates.",
        suggestedQuestions: [
            "How does Sales Acceleration compress sales cycles?",
            "How do AI copilots assist account executives during live negotiations?",
            "What impact does dynamic objection handling have on win rates?",
            "How do you integrate playbooks into reps' daily workflows?"
        ],
        relevantTopics: ['sales acceleration', 'win rate', 'cycle compression', 'ai copilot', 'objection handling'],
        relatedRoutes: [
            { label: 'AI Native Sales Hub', path: '/ai-native-sales' },
            { label: 'Revenue Operations', path: '/offerings/revenue-operations' }
        ],
        defaultFollowUps: [
            "What training is provided for sales teams?",
            "Can this assist enterprise reps on million-dollar deals?",
            "Schedule a sales methodology review"
        ]
    },
    {
        id: 'offering-revenue-operations',
        routePattern: '/offerings/revenue-operations',
        title: 'Revenue Operations (RevOps)',
        category: 'Offerings',
        welcomeMessage: "You're viewing Revenue Operations. We eliminate operational silos between Sales, Marketing, and Customer Success by building unified data architectures, telemetry, and automated cadence governance.",
        suggestedQuestions: [
            "How does unified RevOps prevent pipeline leakage?",
            "What does a modern enterprise revenue architecture look like?",
            "How do you clean and synchronize CRM and billing data?",
            "How are revenue forecasting models calibrated?",
            "How does RevOps support post-merger integration?"
        ],
        relevantTopics: ['revops', 'data architecture', 'crm integration', 'pipeline leakage', 'forecast calibration'],
        relatedRoutes: [
            { label: 'Growth Intelligence', path: '/offerings/growth-intelligence' },
            { label: 'Executive Telemetry', path: '/growth-science/executive-telemetry' }
        ],
        defaultFollowUps: [
            "Do you support HubSpot, Salesforce, and Marketo?",
            "How does RevOps improve NRR (Net Revenue Retention)?",
            "Book an architecture assessment"
        ]
    },

    // ── Industries ────────────────────────────────────────────────────────────
    {
        id: 'industries-hub',
        routePattern: /^\/industries(\/)?$/,
        title: 'Industry Solutions',
        category: 'Industries',
        welcomeMessage: "You're exploring ProfitMachines Industry Solutions. We tailor revenue architecture, intent models, and sales acceleration to the distinct dynamics of SaaS, Enterprise, BFSI, Healthcare, Manufacturing, and Scaleups.\n\nWhich industry matches your focus?",
        suggestedQuestions: [
            "Which industries does ProfitMachines specialize in?",
            "How are AI sales engines adapted for regulated industries (BFSI, Healthcare)?",
            "What revenue models work best for enterprise B2B SaaS?",
            "How do you help traditional manufacturing firms modernize GTM?",
            "What playbooks accelerate early-stage startup commercialization?"
        ],
        relevantTopics: ['industries', 'saas', 'enterprise', 'bfsi', 'healthcare', 'manufacturing', 'startups'],
        relatedRoutes: [
            { label: 'Enterprise B2B', path: '/industries/enterprise' },
            { label: 'B2B & Mid-Market SaaS', path: '/industries/b2b' },
            { label: 'Specialized (BFSI & Healthcare)', path: '/industries/specialized' },
            { label: 'Case Studies', path: '/case-studies' }
        ],
        defaultFollowUps: [
            "Show me a case study in our industry",
            "What compliance safeguards are in place for healthcare and finance?",
            "Speak with an industry practice leader"
        ]
    },
    {
        id: 'industries-saas-b2b',
        routePattern: /^\/industries\/(b2b|mid-market)(\/)?$/,
        title: 'B2B Technology & SaaS Solutions',
        category: 'Industries',
        welcomeMessage: "You're exploring B2B Technology & SaaS Solutions. I can help you understand how we reduce CAC, accelerate expansion revenue, combat seat contraction, and engineer predictable ARR growth.",
        suggestedQuestions: [
            "How can we reduce customer acquisition costs (CAC)?",
            "How can we improve customer retention and Net Revenue Retention (NRR)?",
            "How can AI help identify product expansion and upsell opportunities?",
            "How can we improve recurring revenue velocity?",
            "Which ProfitMachines offerings are most relevant to SaaS companies?"
        ],
        relevantTopics: ['saas', 'cac reduction', 'nrr', 'expansion revenue', 'arr velocity', 'seat churn', 'product-led'],
        relatedRoutes: [
            { label: 'Enterprise SaaS Case Study', path: '/case-studies/enterprise-saas-pipeline-growth' },
            { label: 'Demand Engineering', path: '/offerings/demand-engineering' },
            { label: 'Customer Success Engine', path: '/offerings/customer-success' }
        ],
        defaultFollowUps: [
            "How do you handle usage-based or consumption pricing models?",
            "What benchmarks do you see for B2B SaaS pipeline conversion?",
            "Schedule a SaaS revenue assessment"
        ]
    },
    {
        id: 'industries-specialized',
        routePattern: /^\/industries\/specialized(\/)?$/,
        title: 'Specialized & Regulated Industries (BFSI, Healthcare, Manufacturing)',
        category: 'Industries',
        welcomeMessage: "You're viewing Specialized & Regulated Industry Solutions. I can help you understand how we design high-converting, compliant GTM engines tailored for BFSI, Healthcare, Life Sciences, and Advanced Manufacturing.",
        suggestedQuestions: [
            "How do you ensure strict regulatory compliance (SOC2, HIPAA, GDPR, CAN-SPAM)?",
            "How does AI prospecting work in institutional financial services (BFSI)?",
            "How do you accelerate complex hospital and health system sales cycles?",
            "How do manufacturing enterprises transition from distributor reliance to direct digital sales?",
            "What security certifications and air-gapped options are available?"
        ],
        relevantTopics: ['bfsi', 'healthcare', 'manufacturing', 'compliance', 'hipaa', 'gdpr', 'regulations', 'security'],
        relatedRoutes: [
            { label: 'Financial Services AI Case Study', path: '/case-studies/financial-services-ai-transformation' },
            { label: 'Healthcare Forecast Accuracy Case Study', path: '/case-studies/healthcare-forecast-accuracy' },
            { label: 'Global Manufacturing Expansion Case Study', path: '/case-studies/global-manufacturing-expansion' },
            { label: 'AI Trust & Governance', path: '/offerings/ai-trust-governance' }
        ],
        defaultFollowUps: [
            "Do models train on proprietary institutional data?",
            "Can we review your security architecture dossier?",
            "Consult with our Enterprise Compliance Director"
        ]
    },

    // ── Case Studies ──────────────────────────────────────────────────────────
    {
        id: 'case-studies-hub',
        routePattern: /^\/case-studies(\/.*)?$/,
        title: 'Case Studies & Documented Transformations',
        category: 'Case Studies',
        welcomeMessage: "You're exploring ProfitMachines Case Studies. Here you will find verified enterprise transformations detailing how our methodology created 3.4x pipeline expansion, 42% CAC reduction, and multi-million dollar revenue acceleration across SaaS, Healthcare, Financial Services, and Manufacturing.",
        suggestedQuestions: [
            "What results did the Enterprise SaaS pipeline growth transformation achieve?",
            "How did global manufacturing expansion increase cross-border revenue?",
            "What methodology improved forecast accuracy in healthcare by 88%?",
            "How long do transformations typically take to show positive ROI?",
            "Are there case studies relevant to my company's revenue size?"
        ],
        relevantTopics: ['case studies', 'transformations', 'verified roi', 'saas pipeline', 'manufacturing expansion', 'healthcare forecast'],
        relatedRoutes: [
            { label: 'Enterprise SaaS Case Study', path: '/case-studies/enterprise-saas-pipeline-growth' },
            { label: 'Financial Services AI Transformation', path: '/case-studies/financial-services-ai-transformation' },
            { label: 'Healthcare Forecast Accuracy', path: '/case-studies/healthcare-forecast-accuracy' },
            { label: 'Book Diagnostic Consultation', path: '/book-consultation' }
        ],
        defaultFollowUps: [
            "Can we speak with an executive reference?",
            "What was the implementation timeline for these results?",
            "Calculate potential ROI for our business"
        ]
    },

    // ── Consultation & Contact ────────────────────────────────────────────────
    {
        id: 'book-consultation-page',
        routePattern: /^\/book-consultation(\/)?$|^\/talk-to-expert(\/)?$/,
        title: 'Executive Consultation & Diagnostic Scoping',
        category: 'Consultation',
        welcomeMessage: "Welcome to Consultation Scheduling! I can help you prepare for your strategy session with our revenue architects, explain what happens during a diagnostic audit, and address any preliminary questions before you book.",
        suggestedQuestions: [
            "What happens during an initial executive consultation?",
            "Who from our team should attend the strategy session?",
            "What data or information should we prepare beforehand?",
            "Is the initial diagnostic audit confidential?",
            "What are the expected deliverables following the consultation?"
        ],
        relevantTopics: ['consultation', 'diagnostic audit', 'scheduling', 'agenda', 'nda', 'deliverables'],
        relatedRoutes: [
            { label: 'Explore Offerings', path: '/offerings' },
            { label: 'Engagement Models', path: '/engagement/models' },
            { label: 'Case Studies', path: '/case-studies' }
        ],
        defaultFollowUps: [
            "Can we sign an NDA prior to data sharing?",
            "How soon can a consultation be scheduled?",
            "What commercial models are available?"
        ]
    },

    // ── Company / About ───────────────────────────────────────────────────────
    {
        id: 'company-page',
        routePattern: /^\/company(\/)?$|^\/about(-us)?(\/)?$/,
        title: 'About ProfitMachines',
        category: 'Company',
        welcomeMessage: "You're viewing About ProfitMachines. We are an enterprise revenue engineering firm combining mathematical rigor, proprietary AI architecture, and battle-tested commercial playbooks to unlock enterprise growth.",
        suggestedQuestions: [
            "What is ProfitMachines' core mission and philosophy?",
            "Who leads the ProfitMachines executive and engineering team?",
            "How does ProfitMachines differ from traditional consulting firms (e.g. McKinsey, Bain)?",
            "Where are ProfitMachines offices and advisory teams located?",
            "How does ProfitMachines approach AI safety and IP ownership?"
        ],
        relevantTopics: ['about', 'mission', 'leadership', 'differentiation', 'consulting vs engineering', 'global offices'],
        relatedRoutes: [
            { label: 'Our Offerings', path: '/offerings' },
            { label: 'Growth Science', path: '/growth-science' },
            { label: 'Careers', path: '/career' }
        ],
        defaultFollowUps: [
            "Does ProfitMachines invest in client outcomes?",
            "How are customer data and IP protected?",
            "Get in touch with executive leadership"
        ]
    },

    // ── Default / Homepage ────────────────────────────────────────────────────
    {
        id: 'home-page',
        routePattern: /^\/$/,
        title: 'ProfitMachines Executive Platform',
        category: 'Platform Overview',
        welcomeMessage: "Hello! Welcome to ProfitMachines. I'm your AI Revenue Architect assistant. I can guide you through our AI Native Sales platforms, Growth Science frameworks, Core Offerings, and verified industry transformations.\n\nWhat would you like to explore today?",
        suggestedQuestions: [
            "How does ProfitMachines help enterprises accelerate revenue?",
            "What is AI Native Sales and how does it work?",
            "What is Growth & Acceleration Science?",
            "How can we identify untapped profit pools in our market?",
            "Which offerings are best suited for enterprise B2B companies?",
            "How do we schedule a diagnostic consultation?"
        ],
        relevantTopics: ['overview', 'revenue acceleration', 'ai native sales', 'growth science', 'profit pools', 'consultation'],
        relatedRoutes: [
            { label: 'AI Native Sales Hub', path: '/ai-native-sales' },
            { label: 'Growth Science Hub', path: '/growth-science' },
            { label: 'Explore All Offerings', path: '/offerings' },
            { label: 'Book Consultation', path: '/book-consultation' }
        ],
        defaultFollowUps: [
            "How does your AI integrate with our existing CRM?",
            "Can you show me relevant case studies in our industry?",
            "What does an engagement model look like?"
        ]
    }
];

// ─────────────────────────────────────────────────────────────────────────────
// 2. DEEP GROUNDED KNOWLEDGE BASE NODES
// ─────────────────────────────────────────────────────────────────────────────

export const KNOWLEDGE_BASE: KnowledgeItem[] = [
    {
        id: 'kb-profitmachines-overview',
        title: 'ProfitMachines Firm Positioning & Architecture',
        category: 'Company & Positioning',
        keywords: ['profitmachines', 'what is', 'who are you', 'firm', 'overview', 'positioning', 'value proposition', 'consulting vs engineering'],
        summary: "ProfitMachines is an enterprise revenue architecture and AI acceleration firm. Unlike traditional consulting firms that deliver static PowerPoint decks, ProfitMachines builds operational revenue systems combining mathematical growth science with autonomous AI agents and execution engineering.",
        keyPoints: [
            "Dual-track approach: Strategy & Consulting combined with autonomous AI & Automation systems.",
            "End-to-end coverage: From Profit Pool Discovery and TAM validation to autonomous outbound prospecting, live deal execution copilots, and unified RevOps telemetry.",
            "Rooted in Revenue Physics: Replaces anecdotal sales advice with mathematical modeling, friction coefficient auditing, and capital velocity formulas.",
            "Enterprise-grade governance: Fully compliant with SOC2, GDPR, HIPAA, and CAN-SPAM standards with zero unauthorized model training on customer data."
        ],
        metricsOrFacts: [
            "Proven 3.4x average pipeline expansion across enterprise engagements.",
            "42% average reduction in customer acquisition cost (CAC).",
            "88% improvement in forecast accuracy within 90 days."
        ],
        relatedOfferings: [
            { name: 'Core Offerings Architecture', path: '/offerings' },
            { name: 'Growth & Acceleration Science', path: '/growth-science' },
            { name: 'Book Consultation', path: '/book-consultation' }
        ],
        followUpQuestions: [
            "What are your core offerings?",
            "How does the AI integrate with our existing sales stack?",
            "How do your engagement models work?"
        ]
    },
    {
        id: 'kb-ai-prospecting-pipeline',
        title: 'AI Prospecting & Autonomous Pipeline Generation',
        category: 'AI Native Sales',
        keywords: ['prospecting', 'pipeline', 'ai prospecting', 'outbound', 'lead generation', 'intent', 'high-intent', 'lead qualification', 'workload', 'reduce workload'],
        summary: "ProfitMachines AI Prospecting transforms outbound sales from brute-force cold calling into a precision intent-driven engine. The platform ingests real-time buyer intent signals, scores accounts with machine learning, and deploys autonomous outreach agents that book qualified meetings.",
        keyPoints: [
            "Real-Time Signal Ingestion: Monitors first-party and third-party web visits, search patterns, technographic adoption, hiring surges, and peer review research to detect in-market accounts before competitors.",
            "Dynamic ICP Matching: Algorithmic propensity scoring matches active accounts against your highest-yielding historical wins, eliminating low-probability accounts.",
            "Autonomous Personalized Outreach: Automatically crafts context-aware, hyper-personalized emails and LinkedIn outreach addressing the prospect's specific technology stack and pain points.",
            "Workload Reduction: Automates up to 75% of repetitive SDR tasks (account research, list building, drafting, follow-up cadences), allowing human reps to focus strictly on qualified deal conversations.",
            "Human-in-the-Loop Safeguards: Every automated sequence operates within strict guardrails, with optional approval workflows for high-value strategic tier-1 enterprise accounts."
        ],
        metricsOrFacts: [
            "Up to 3.8x increase in meeting booking rates over traditional cold outreach.",
            "60-75% reduction in manual sales rep prospecting hours.",
            "Zero spam reputation degradation via automated warm-up and domain rotation."
        ],
        relatedOfferings: [
            { name: 'AI Prospecting & Pipeline', path: '/ai-native-sales/prospecting' },
            { name: 'Agentic SDR', path: '/ai-native-sales/agentic-sdr' },
            { name: 'Demand Engineering', path: '/offerings/demand-engineering' }
        ],
        followUpQuestions: [
            "Can it reduce our sales team's workload?",
            "Which of your services supports that?",
            "How does Agentic SDR handle complex enterprise objections?"
        ]
    },
    {
        id: 'kb-agentic-sdr',
        title: 'Agentic SDR: Autonomous Sales Development Reps',
        category: 'AI Native Sales',
        keywords: ['agentic sdr', 'sales agent', 'autonomous rep', 'ai sdr', 'bot', 'sdr copilot', 'cold outreach', 'book meetings', 'automation'],
        summary: "The ProfitMachines Agentic SDR is an autonomous AI agent capable of multi-channel prospect research, hyper-personalized communications, handling inbound inquiries, and booking verified meetings directly into account executive calendars.",
        keyPoints: [
            "Deep Company & Persona Research: Pulls 10-K filings, press releases, job boards, and tech stacks in seconds to craft individualized value propositions.",
            "Multi-Turn Email & Inbound Dialogues: Answers prospect questions, handles timing/pricing objections, and coordinates meeting scheduling across time zones.",
            "Calendar Synchronization: Seamlessly integrates with Google Calendar, Outlook, and scheduling engines to deposit qualified prospects directly into AE pipelines.",
            "Enterprise Governance: Adheres to brand style guides, negative keywords, compliance boundaries, and opt-out regulations automatically."
        ],
        metricsOrFacts: [
            "Operates 24/7 across global time zones with sub-5-minute response times to inbound leads.",
            "Maintains 99.4% CAN-SPAM and GDPR opt-in compliance.",
            "Reduces cost-per-qualified-meeting by over 50% compared to outsourced SDR agencies."
        ],
        relatedOfferings: [
            { name: 'Agentic SDR Page', path: '/ai-native-sales/agentic-sdr' },
            { name: 'Prospecting Pipeline', path: '/ai-native-sales/prospecting' },
            { name: 'Sales Acceleration', path: '/offerings/sales-acceleration' }
        ],
        followUpQuestions: [
            "Does it replace our human SDR team or assist them?",
            "How does it handle prospect skepticism or objections?",
            "Can we pilot Agentic SDR on a specific segment?"
        ]
    },
    {
        id: 'kb-revenue-physics',
        title: 'Revenue Physics & Momentum Dynamics',
        category: 'Growth & Acceleration Science',
        keywords: ['revenue physics', 'physics', 'momentum', 'friction', 'friction coefficient', 'velocity', 'capital velocity', 'laws of revenue', 'mathematical'],
        summary: "Revenue Physics is ProfitMachines' proprietary mathematical framework that treats enterprise revenue generation as a dynamic thermodynamic system governed by conservation of momentum, friction coefficients, and capital velocity.",
        keyPoints: [
            "Law of Revenue Inertia: Pipeline deals tend to remain in their current stage unless acted upon by external closing catalysts or high-intent buying force.",
            "Friction Coefficients: Quantifies the resistance at each handoff point (Lead → MQL → SQL → Opportunity → Verbal → Closed-Won), identifying exact friction leaks.",
            "Capital Velocity Equation: Velocity = (Total Active Pipeline Value × Average Win Rate × Average Deal Size) / (Cycle Duration × Friction Index).",
            "Predictive Thermodynamics: Replaces subjective 'gut feel' sales manager forecasts with rigorous statistical probabilities based on real deal velocity vectors."
        ],
        metricsOrFacts: [
            "Isolates friction sources responsible for up to 68% of enterprise deal slippage.",
            "Enables forecasting precision within 4% of actual fiscal quarterly revenue.",
            "Identifies non-viable opportunities 3x faster, saving hundreds of rep hours."
        ],
        relatedOfferings: [
            { name: 'Revenue Physics Page', path: '/growth-science/revenue-physics' },
            { name: 'Friction Diagnostics', path: '/growth-science/friction-diagnostics' },
            { name: 'Executive Telemetry', path: '/growth-science/executive-telemetry' }
        ],
        followUpQuestions: [
            "How do we identify revenue friction in our funnel?",
            "What data inputs are needed to calculate our friction coefficient?",
            "How does this apply to SaaS vs Manufacturing?"
        ]
    },
    {
        id: 'kb-friction-diagnostics',
        title: 'Friction Diagnostics & Pipeline Leakage Auditing',
        category: 'Growth & Acceleration Science',
        keywords: ['friction diagnostics', 'leakage', 'pipeline leaks', 'deal slippage', 'friction audit', 'drop-off', 'bottleneck', 'choke points'],
        summary: "Friction Diagnostics is an automated audit engine that analyzes CRM logs, conversation transcripts, rep activities, and procurement delays to uncover invisible blockers draining pipeline revenue.",
        keyPoints: [
            "Handoff Friction Analysis: Pinpoints drops between SDR qualification and Account Executive acceptance.",
            "Proposal & Security Review Drag: Measures the exact days lost in legal, Infosec questionnaires, and procurement negotiations.",
            "Rep Activity Inconsistency: Flags reps who over-index on administrative tasks while neglecting high-propensity deal stages.",
            "Actionable Remediation Playbooks: Generates immediate structural fixes (e.g., standardizing mutual action plans, deploying automated security dossier packs)."
        ],
        metricsOrFacts: [
            "Average enterprise audit detects $1.2M to $4.8M in recoverable stalled pipeline.",
            "Compresses enterprise sales cycles by 22% to 35% within 60 days.",
            "Audit turnaround delivered in 10 business days."
        ],
        relatedOfferings: [
            { name: 'Friction Diagnostics Page', path: '/growth-science/friction-diagnostics' },
            { name: 'Revenue Operations', path: '/offerings/revenue-operations' },
            { name: 'Book Diagnostic Audit', path: '/book-consultation' }
        ],
        followUpQuestions: [
            "How long does a Friction Diagnostic audit take?",
            "What data access is required from our CRM?",
            "What are the typical findings for enterprise SaaS?"
        ]
    },
    {
        id: 'kb-profit-pool-discovery',
        title: 'Profit Pool Discovery & Margin Optimization',
        category: 'Offerings',
        keywords: ['profit pool', 'profit pool discovery', 'whitespace', 'untapped markets', 'margin expansion', 'where to play', 'icp yield', 'profitability'],
        summary: "Profit Pool Discovery maps the total profit distribution across your industry's value chain to identify where the highest-margin economic value is accumulating, revealing customer niches and product gaps your competitors ignore.",
        keyPoints: [
            "Economic Value Mapping: Identifies high-margin vs commoditized segments within your total addressable market (TAM).",
            "Whitespace Opportunity Scoring: Assesses competitive intensity, willingness-to-pay, and time-to-monetize across adjacent verticals.",
            "ICP Yield Optimization: Calibrates your Ideal Customer Profile to target accounts with the highest lifetime value (LTV) and lowest service delivery friction.",
            "Pricing & Packaging Realignment: Restructures commercial tiers around value drivers that capture maximum economic surplus."
        ],
        metricsOrFacts: [
            "Typically identifies 25% to 40% in previously unaddressed gross margin opportunity.",
            "Prevents multi-million dollar capital misallocation in unprofitable segments.",
            "Delivered as an executive board-level strategic dossier."
        ],
        relatedOfferings: [
            { name: 'Profit Pool Discovery Offering', path: '/offerings/profit-pool-discovery' },
            { name: 'Demand Engineering', path: '/offerings/demand-engineering' },
            { name: 'Market Intelligence', path: '/global-acceleration/market-intelligence' }
        ],
        followUpQuestions: [
            "How do we know if our company is in an unprofitable pool?",
            "What is the timeline for a Profit Pool Discovery study?",
            "Which case study illustrates profit pool expansion?"
        ]
    },
    {
        id: 'kb-demand-engineering',
        title: 'Demand Engineering & Revenue-Qualified Leads',
        category: 'Offerings',
        keywords: ['demand engineering', 'demand gen', 'rql', 'attribution', 'buyer intent', 'lead generation', 'cac', 'engineered demand'],
        summary: "Demand Engineering replaces random acts of marketing with an engineered acquisition architecture that captures verified buyer intent and feeds sales pipelines with Revenue-Qualified Leads (RQLs).",
        keyPoints: [
            "Intent Capture Engine: Tracks account-level digital footprints across 500+ B2B data signals to detect active research cycles.",
            "Revenue-Qualified Lead (RQL) Standard: Replaces flimsy MQL form-fills with RQLs that meet verified budget, authority, need, tech fit, and timeline criteria.",
            "Algorithmic Multi-Touch Attribution: Connects marketing ad dollars and content directly to closed P&L revenue rather than misleading vanity clicks.",
            "High-Converting Capture Flows: Interactive diagnostics, benchmark calculators, and micro-assessments that qualify buyers while delivering immediate value."
        ],
        metricsOrFacts: [
            "Increases sales acceptance rate of marketing-delivered leads from industry average 18% to over 64%.",
            "Reduces customer acquisition cost (CAC) by 30% to 45%.",
            "Eliminates wasted advertising spend on non-ICP traffic."
        ],
        relatedOfferings: [
            { name: 'Demand Engineering Offering', path: '/offerings/demand-engineering' },
            { name: 'Demand Pulse Product', path: '/demand-pulse' },
            { name: 'Sales Acceleration', path: '/offerings/sales-acceleration' }
        ],
        followUpQuestions: [
            "What is the difference between an MQL and an RQL?",
            "How does Demand Engineering lower customer acquisition costs?",
            "Can we integrate Demand Engineering with our existing CRM?"
        ]
    },
    {
        id: 'kb-global-expansion',
        title: 'Global Business Acceleration & Cross-Border Scaling',
        category: 'Global Business Acceleration',
        keywords: ['global', 'global expansion', 'cross-border', 'international', 'market entry', 'territory', 'expansion office', 'overseas', 'emea', 'apac', 'mena'],
        summary: "ProfitMachines Global Business Acceleration provides end-to-end strategy, localized market intelligence, compliance frameworks, and partner ecosystems to scale high-growth companies into international territories.",
        keyPoints: [
            "Territory Market Readiness Scoring: Evaluates TAM, regulatory hurdles, localized buyer intent, and competitive density across prospective countries.",
            "Cross-Border GTM Playbooks: Adapts sales messaging, currency structures, localized proof points, and commercial terms to regional business norms.",
            "Global Partner Ecosystems: Recruits, qualifies, and onboards high-yield distribution and channel partners across EMEA, APAC, and MENA.",
            "Executive Expansion Office: Acts as an on-demand fractional expansion executive team driving initial regulatory setup, key account acquisition, and local entity ramp."
        ],
        metricsOrFacts: [
            "Reduces cross-border market-entry cycle from 18 months to under 6 months.",
            "Mitigates up to $2M in wasted international subsidiary overhead.",
            "Active global networks across US, UK, EU, UAE, Saudi Arabia, Singapore, and India."
        ],
        relatedOfferings: [
            { name: 'Global Business Acceleration Hub', path: '/global-acceleration' },
            { name: 'Market Intelligence', path: '/global-acceleration/market-intelligence' },
            { name: 'Executive Expansion Office', path: '/global-acceleration/expansion-office' }
        ],
        followUpQuestions: [
            "How do we prioritize which country to expand into first?",
            "How does ProfitMachines assist with local partner recruitment?",
            "What is the Executive Expansion Office model?"
        ]
    },
    {
        id: 'kb-industry-saas',
        title: 'B2B SaaS & Cloud Revenue Optimization',
        category: 'Industries',
        keywords: ['saas', 'software', 'cloud', 'arr', 'mrr', 'churn', 'nrr', 'cac', 'seat contraction', 'expansion revenue', 'retention'],
        summary: "ProfitMachines provides specialized revenue architecture for B2B SaaS companies, addressing key headwinds like rising CAC, pipeline drying, net retention erosion, and seat contraction.",
        keyPoints: [
            "CAC Compression: Shifts expensive broad-scale PPC to targeted intent-driven account penetration, cutting customer acquisition costs by up to 45%.",
            "Expansion & Retention Engine: Identifies feature adoption patterns and usage surges that signal prime upsell and cross-sell moments.",
            "Churn Prediction Telemetry: Flags declining platform usage 60 days before contract renewal, enabling proactive customer success intervention.",
            "Product-Led to Sales-Assisted Handshakes: Seamlessly transitions free trial and freemium users to enterprise sales reps when account maturity thresholds are met."
        ],
        metricsOrFacts: [
            "Demonstrated 3.4x pipeline expansion for enterprise SaaS clients.",
            "NRR improvement of 14% to 22% across multi-year SaaS portfolios.",
            "Average 35% reduction in CAC payback period."
        ],
        relatedOfferings: [
            { name: 'Enterprise SaaS Case Study', path: '/case-studies/enterprise-saas-pipeline-growth' },
            { name: 'B2B Industry Solutions', path: '/industries/b2b' },
            { name: 'Demand Engineering', path: '/offerings/demand-engineering' }
        ],
        followUpQuestions: [
            "How can we reduce customer acquisition costs?",
            "How can we improve customer retention and NRR?",
            "Which ProfitMachines offerings are relevant to SaaS companies?"
        ]
    },
    {
        id: 'kb-industry-bfsi-healthcare',
        title: 'Regulated Enterprise Solutions: BFSI, Healthcare & Manufacturing',
        category: 'Industries',
        keywords: ['bfsi', 'banking', 'finance', 'healthcare', 'hospitals', 'manufacturing', 'regulated', 'hipaa', 'soc2', 'compliance', 'security'],
        summary: "Specialized GTM engines built for high-security, heavily regulated industries where standard marketing tools fail due to compliance, privacy, or long procurement cycles.",
        keyPoints: [
            "Healthcare & Life Sciences: Compliant outreach that respects HIPAA and FDA boundaries, mapping complex health system buying committees across clinical, IT, and CFO stakeholders.",
            "Financial Services & FinTech: SOC2 Type II, GDPR, and GLBA compliant infrastructure. AI agents operate with deterministic security policies and zero unauthorized data persistence.",
            "Industrial Manufacturing: Digitizes legacy distributor and rep relationships into high-velocity direct enterprise pipeline, modernizing quoting and procurement.",
            "Zero Data Leakage: Private VPC deployments and air-gapped processing available for Tier-1 institutions."
        ],
        metricsOrFacts: [
            "88% forecast accuracy achieved for hospital-network healthcare technology vendor.",
            "$42M in cross-border pipeline unlocked for global precision manufacturer.",
            "100% security questionnaire pass rate with enterprise procurement teams."
        ],
        relatedOfferings: [
            { name: 'Specialized Industries Page', path: '/industries/specialized' },
            { name: 'Financial Services Case Study', path: '/case-studies/financial-services-ai-transformation' },
            { name: 'Healthcare Forecast Case Study', path: '/case-studies/healthcare-forecast-accuracy' }
        ],
        followUpQuestions: [
            "What security certifications and safeguards are in place?",
            "How does your AI comply with healthcare privacy regulations?",
            "Read our financial services transformation case study"
        ]
    },
    {
        id: 'kb-pricing-commercial-models',
        title: 'Commercial Models, Pricing & Engagement Approach',
        category: 'Commercials',
        keywords: ['pricing', 'cost', 'how much', 'fee', 'commercial model', 'budget', 'roi', 'engagement models', 'contract', 'pilot'],
        summary: "ProfitMachines does not use rigid commodity pricing or one-size-fits-all software tiers. Engagements are tailored based on enterprise revenue scale, diagnostic scope, and whether the partnership is advisory, AI system deployment, or shared-outcome.",
        keyPoints: [
            "Diagnostic & Architecture Phase: Fixed-scope initial audit (Friction Diagnostics or Profit Pool Discovery) delivered in 2 to 4 weeks with concrete executive deliverables.",
            "Modular Implementation Tracks: Clients can license specific AI engines (e.g. Agentic SDR, Demand Pulse) or engage full-lifecycle revenue transformation teams.",
            "Outcome-Aligned Commercials: For qualified enterprises, ProfitMachines incorporates performance-contingent milestones tied directly to pipeline creation or closed revenue.",
            "Transparent Scope: Every commercial proposal is preceded by a diagnostic scoping call to evaluate technical fit, expected ROI, and timeline."
        ],
        metricsOrFacts: [
            "Typical client ROI exceeds 6x within the first 12 months.",
            "Clear milestone deliverables with zero hidden software maintenance surcharges.",
            "Flexible pilot programs available prior to enterprise-wide rollout."
        ],
        relatedOfferings: [
            { name: 'Engagement Commercials', path: '/engagement/commercials' },
            { name: 'Engagement Models', path: '/engagement/models' },
            { name: 'Book Scoping Consultation', path: '/book-consultation' }
        ],
        followUpQuestions: [
            "Can we start with a diagnostic pilot?",
            "What is the typical timeline to see first results?",
            "Schedule a scoping discussion with our commercial team"
        ]
    },
    {
        id: 'kb-implementation-timeline',
        title: 'Implementation Methodology & Time-to-Value',
        category: 'Methodology',
        keywords: ['implementation', 'how long', 'timeline', 'rollout', 'onboarding', 'time to value', 'integration', 'process', 'steps'],
        summary: "ProfitMachines utilizes a disciplined 3-phase rollout methodology engineered to deliver immediate quick-win pipeline improvements within 30 days while constructing durable enterprise revenue architecture.",
        keyPoints: [
            "Phase 1: Rapid Diagnostic & Friction Audit (Weeks 1-3): Ingests CRM logs and marketing telemetry, audits friction coefficients, and identifies immediate pipeline leaks.",
            "Phase 2: Pilot Deployment & Engine Calibration (Weeks 4-8): Deploys the selected AI engines (e.g. Agentic SDR or Demand Pulse), calibrates ICP models, and trains initial reps.",
            "Phase 3: Scaled Enterprise Integration & Optimization (Weeks 9-12+): Expands coverage across territories, integrates bidirectional telemetry, and establishes executive reporting cadences.",
            "Zero Disruption: Built to run seamlessly alongside your existing Salesforce, HubSpot, or Outreach stacks without requiring rip-and-replace."
        ],
        metricsOrFacts: [
            "Initial pipeline lift observed within 21 days of pilot activation.",
            "Standard implementation requires less than 4 hours of internal IT / Ops resource time.",
            "Dedicated Revenue Architect assigned to oversee every customer onboarding."
        ],
        relatedOfferings: [
            { name: 'Engagement Onboarding Guide', path: '/engagement/onboarding' },
            { name: 'Delivery Tracks', path: '/engagement/delivery-tracks' },
            { name: 'Book Consultation', path: '/book-consultation' }
        ],
        followUpQuestions: [
            "What technical resources are needed from our team?",
            "What CRM systems do you support?",
            "Can we pilot on a single product or sales team?"
        ]
    },
    {
        id: 'kb-consultation-process',
        title: 'Executive Consultation & Diagnostic Process',
        category: 'Consultation',
        keywords: ['consultation', 'book', 'demo', 'schedule', 'talk to expert', 'speak to expert', 'meeting', 'call', 'next steps'],
        summary: "Booking a ProfitMachines consultation connects your leadership team directly with an Enterprise Revenue Architect for a confidential, data-driven assessment of your current pipeline, friction points, and growth opportunities.",
        keyPoints: [
            "Strategic Agenda: We review your current revenue targets, pipeline velocity, CAC trends, and technology roadblocks.",
            "Confidential & NDA-Backed: All discussion points, metrics, and business models are protected under mutual confidentiality.",
            "Actionable Insights: Even if we do not work together, you will walk away with an objective perspective on your primary revenue bottlenecks.",
            "Immediate Scheduling: Consultations can be scheduled in under 60 seconds with our senior practice leads."
        ],
        metricsOrFacts: [
            "30-to-45-minute executive briefing.",
            "Conducted directly with Senior Revenue Architects, not junior sales reps.",
            "Follow-up Executive Summary deliverable provided within 48 hours."
        ],
        relatedOfferings: [
            { name: 'Schedule Consultation Now', path: '/book-consultation' },
            { name: 'Review Case Studies First', path: '/case-studies' },
            { name: 'Explore Offerings', path: '/offerings' }
        ],
        followUpQuestions: [
            "Who should attend the consultation from our team?",
            "What preparation is needed beforehand?",
            "Ready to book a consultation?"
        ]
    }
];

// ─────────────────────────────────────────────────────────────────────────────
// 3. HELPER UTILITIES FOR ROUTE MATCHING
// ─────────────────────────────────────────────────────────────────────────────

export function resolvePageContext(pathname: string): PageChatContext {
    const cleanPath = pathname.replace(/\/+$/, '') || '/';

    // 1. Check exact string matches
    for (const ctx of PAGE_CONTEXTS) {
        if (typeof ctx.routePattern === 'string' && ctx.routePattern === cleanPath) {
            return ctx;
        }
    }

    // 2. Check RegExp patterns
    for (const ctx of PAGE_CONTEXTS) {
        if (ctx.routePattern instanceof RegExp && ctx.routePattern.test(cleanPath)) {
            return ctx;
        }
    }

    // 3. Check partial path prefixes
    if (cleanPath.startsWith('/ai-native-sales') || cleanPath.startsWith('/ai-sales')) {
        return PAGE_CONTEXTS.find(c => c.id === 'ai-native-sales-hub')!;
    }
    if (cleanPath.startsWith('/growth-science') || cleanPath.startsWith('/growth-acceleration-science')) {
        return PAGE_CONTEXTS.find(c => c.id === 'growth-science-hub')!;
    }
    if (cleanPath.startsWith('/global-acceleration') || cleanPath.startsWith('/global-business-accelerations')) {
        return PAGE_CONTEXTS.find(c => c.id === 'global-acceleration-hub')!;
    }
    if (cleanPath.startsWith('/offerings')) {
        return PAGE_CONTEXTS.find(c => c.id === 'offerings-hub')!;
    }
    if (cleanPath.startsWith('/industries')) {
        return PAGE_CONTEXTS.find(c => c.id === 'industries-hub')!;
    }
    if (cleanPath.startsWith('/case-studies')) {
        return PAGE_CONTEXTS.find(c => c.id === 'case-studies-hub')!;
    }
    if (cleanPath.startsWith('/book-consultation') || cleanPath.startsWith('/talk-to-expert')) {
        return PAGE_CONTEXTS.find(c => c.id === 'book-consultation-page')!;
    }
    if (cleanPath.startsWith('/company') || cleanPath.startsWith('/about')) {
        return PAGE_CONTEXTS.find(c => c.id === 'company-page')!;
    }

    // Default fallback to Home
    return PAGE_CONTEXTS.find(c => c.id === 'home-page')!;
}
