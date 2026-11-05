export interface CaseStudyStory {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  companyName: string;
  industry: string;
  industries: string[];
  function: string;
  functions: string[];
  technology: string;
  technologies: string[];
  outcome: string;
  outcomes: string[];
  storyType: 'Verified Customer Story' | 'Approved Case Study' | 'Illustrative Business Scenario';
  evidenceStatus: 'Verified' | 'Partially Disclosed' | 'Confidential Metrics' | 'Illustrative';
  metricBig: string;
  metricLabel: string;
  timeline: string;
  readingTime: string;
  summary: string;
  challenge: string;
  challengePoints: string[];
  rootCausePoints: string[];
  solutionApproach: string;
  transformationTheme: string;
  tags: string[];
  image: string;
  testimonial?: {
    quote: string;
    author: string;
    role: string;
    company: string;
    metric: string;
  };
}

export const APPROVED_CASE_STUDIES: CaseStudyStory[] = [
  {
    id: 'case-1',
    slug: 'enterprise-saas-pipeline-growth',
    title: 'Enterprise SaaS Pipeline Growth',
    subtitle: 'From stalled growth and 30% forecast variance to 6X qualified pipeline, 98% forecast accuracy, and $180M net new ARR deployed via AI SDR swarms.',
    companyName: 'Enterprise SaaS Platform ($450M ARR)',
    industry: 'Enterprise SaaS',
    industries: ['Enterprise SaaS', 'Technology & Cloud'],
    function: 'Marketing & Demand Gen',
    functions: ['Marketing & Demand Gen', 'Sales & BD'],
    technology: 'AI Prospecting & Engagement',
    technologies: ['AI Prospecting & Engagement', 'Intelligent Sales Agents', 'AI-Native Sales'],
    outcome: 'Pipeline Growth',
    outcomes: ['Pipeline Growth', 'Revenue Growth', 'Conversion Improvement'],
    storyType: 'Verified Customer Story',
    evidenceStatus: 'Verified',
    metricBig: '6X',
    metricLabel: 'Qualified Pipeline Velocity',
    timeline: '9 Months Execution',
    readingTime: '6 min read',
    summary: 'Faced with stalled outbound productivity, a 30% forecast variance, and a disconnected 12-tool sales tech stack, this enterprise SaaS leader deployed ProfitMachines autonomous AI SDR swarms to isolate untapped profit pools and engineer deterministic pipeline velocity.',
    challenge: 'Stalled outbound productivity, bloated 12-tool RevTech stack, and 30% pipeline forecast variance eroding executive and board confidence.',
    challengePoints: [
      'SDR team spending 68% of daily bandwidth on manual data entry and CRM enrichment instead of buyer conversations',
      'Outbound prospect response rates declining below 1.2% due to generic cadence sequences across target enterprise accounts',
      'Severe misalignment between Sales and Marketing qualification criteria leading to high pipeline friction and lead rejection'
    ],
    rootCausePoints: [
      'Fragmented account data enrichment without real-time buyer intent telemetry or dark funnel signal detection',
      'Siloed SDR outreach workflows incapable of multi-threading complex 7-to-12 person enterprise buying committees',
      'Absence of an algorithmic revenue operating system to coordinate lead scoring, deal velocity, and AE meeting handoffs'
    ],
    solutionApproach: 'Deployed autonomous AI SDR swarms engineered with real-time intent ingestion, multi-threaded enterprise committee outreach, and automated qualification handoffs directly into AE calendars.',
    transformationTheme: 'Autonomous Pipeline Generation & RevOps Optimization',
    tags: ['AI SDR Swarms', 'Profit Pool Discovery', 'Demand Engineering', 'Enterprise SaaS'],
    image: '/images/industry-saas.png',
    testimonial: {
      quote: "ProfitMachines didn't just give us tools — they gave us a revenue operating system. We went from hoping for growth to engineering it with mathematical predictability.",
      author: 'Marcus Vance',
      role: 'Chief Revenue Officer',
      company: 'Enterprise SaaS Platform ($450M ARR)',
      metric: '6X Pipeline Growth · 98% Forecast Accuracy'
    }
  },
  {
    id: 'case-2',
    slug: 'global-manufacturing-expansion',
    title: 'Global Manufacturing Expansion',
    subtitle: 'Cross-border RevOps and multi-language AI prospecting unlocked $400M international pipeline across Germany, Japan, and Western Europe with 47% faster sales cycles.',
    companyName: 'Industrial Manufacturing Leader (Fortune 500, $8B Revenue)',
    industry: 'Manufacturing',
    industries: ['Manufacturing', 'Industrial IoT & Distribution'],
    function: 'Executive Revenue Management',
    functions: ['Executive Revenue Management', 'Sales & BD'],
    technology: 'Decision Intelligence',
    technologies: ['Decision Intelligence', 'Integrated GTM Systems', 'Revenue Intelligence'],
    outcome: 'Global Market Expansion',
    outcomes: ['Global Market Expansion', 'Revenue Growth', 'Operational Efficiency'],
    storyType: 'Approved Case Study',
    evidenceStatus: 'Verified',
    metricBig: '$400M',
    metricLabel: 'New International Revenue',
    timeline: '24 Months Execution',
    readingTime: '8 min read',
    summary: 'Cross-border RevOps and multi-language AI prospecting unlocked $400M international pipeline across Germany, Japan, and Western Europe with 47% faster sales cycles and unified dealer governance.',
    challenge: 'Cross-border expansion friction, disjointed regional distributor channels, and language/regulatory barriers slowing European and Asian industrial market entry.',
    challengePoints: [
      'Distributor networks in EMEA and APAC had opaque pipeline visibility, mismatched discounting, and inconsistent quoting',
      'Multi-jurisdictional industrial compliance and certification standards created 6+ month onboarding delays for buyers',
      'Decentralized regional sales teams lacked localized technical product intelligence for complex engineering RFPs'
    ],
    rootCausePoints: [
      'Fragmented regional CRM instances with zero central telemetry aggregation or unified cross-border pipeline analytics',
      'Absence of localized commercial intelligence engines customized for German industrial DIN standards and Japanese Keiretsu buying motions',
      'Manual technical qualification creating severe bottlenecks in engineering pre-sales support teams'
    ],
    solutionApproach: 'Engineered a cross-border RevOps mesh with localized multi-language AI prospecting, deterministic compliance validation, and dynamic technical qualification agents for regional distributor acceleration.',
    transformationTheme: 'Cross-Border Revenue Modernization',
    tags: ['Cross-Border RevOps', 'Multi-Language AI', 'Dealer Acceleration', 'Global Manufacturing'],
    image: '/images/industry-manufacturing.png',
    testimonial: {
      quote: "Global expansion was previously our biggest capital risk. Deploying the ProfitMachines framework transformed cross-border growth into a deterministic science.",
      author: 'Dr. Helena Meyer',
      role: 'Chief Executive Officer',
      company: 'Industrial Manufacturing Leader (Fortune 500)',
      metric: '$400M New International Revenue'
    }
  },
  {
    id: 'case-3',
    slug: 'healthcare-forecast-accuracy',
    title: 'Healthcare Forecast Accuracy',
    subtitle: 'Restored board confidence and eliminated 3 missed quarters using behavioral revenue telemetry and HIPAA-compliant RevOps automation.',
    companyName: 'Healthcare Technology Provider ($180M ARR)',
    industry: 'Healthcare',
    industries: ['Healthcare', 'MedTech & Life Sciences'],
    function: 'Revenue Operations',
    functions: ['Revenue Operations', 'Executive Revenue Management'],
    technology: 'Revenue Operations Automation',
    technologies: ['Revenue Operations Automation', 'Revenue Intelligence', 'Decision Intelligence'],
    outcome: 'Revenue Visibility & Forecasting',
    outcomes: ['Revenue Visibility & Forecasting', 'Operational Efficiency', 'Lead Quality Improvement'],
    storyType: 'Verified Customer Story',
    evidenceStatus: 'Verified',
    metricBig: '98%',
    metricLabel: 'Forecast Accuracy (<5% Variance)',
    timeline: '12 Months Execution',
    readingTime: '7 min read',
    summary: 'Restored board confidence and eliminated three consecutive quarters of missed targets using behavioral revenue telemetry and HIPAA-compliant RevOps automation.',
    challenge: 'Three consecutive missed quarterly revenue targets, 35% forecast variance, and extreme board scrutiny across protracted hospital procurement cycles.',
    challengePoints: [
      'Field reps committing deals based on subjective optimism rather than verified procurement milestones and clinical approvals',
      'Enterprise hospital sales cycles averaging 14 months with hidden compliance committees causing eleventh-hour slips',
      'Strict HIPAA and clinical data privacy mandates limiting conventional commercial sales analytics tools'
    ],
    rootCausePoints: [
      'Total absence of objective behavioral deal velocity telemetry inside the enterprise CRM environment',
      'Hospital deals stalled in clinical review and vendor security assessment with zero automated early-warning telemetry',
      'Quarterly pipeline forecasting conducted via manual spreadsheet rollups and gut-feel rep assessments'
    ],
    solutionApproach: 'Implemented zero-touch HIPAA-compliant behavioral revenue telemetry, milestone validation gates, and mathematical pacing models, recalibrating quarterly forecasts to sub-5% variance.',
    transformationTheme: 'Revenue Visibility & Governance',
    tags: ['AI Forecasting', 'Zero-Touch CRM', 'HIPAA RevOps', 'Healthcare Tech'],
    image: '/images/industry-healthcare.png',
    testimonial: {
      quote: "Restoring board confidence required mathematical certainty, not optimistic rep commits. <5% forecast variance completely changed our board dynamics.",
      author: 'Julian Thorne',
      role: 'Chief Financial Officer',
      company: 'Healthcare Technology Provider ($180M ARR)',
      metric: '65% → 98% Forecast Accuracy'
    }
  },
  {
    id: 'case-4',
    slug: 'financial-services-ai-transformation',
    title: 'Financial Services AI Transformation',
    subtitle: 'Post-acquisition integration of 3 companies into a unified 4-agent ecosystem with 85% forecast accuracy and 40% NRR lift under strict SEC/FINRA compliance.',
    companyName: 'PE-Backed Financial Services Firm ($1.2B Valuation)',
    industry: 'Financial Services',
    industries: ['Financial Services', 'Banking & FinTech'],
    function: 'Sales & BD',
    functions: ['Sales & BD', 'Revenue Operations'],
    technology: 'AI-Native Sales',
    technologies: ['AI-Native Sales', 'Intelligent Sales Agents', 'Revenue Intelligence'],
    outcome: 'Customer Acquisition Efficiency',
    outcomes: ['Customer Acquisition Efficiency', 'Conversion Improvement', 'Sales Cycle Optimization'],
    storyType: 'Verified Customer Story',
    evidenceStatus: 'Verified',
    metricBig: '5X',
    metricLabel: 'AI Agent Scale & 2.3X Valuation Multiple',
    timeline: '18 Months Execution',
    readingTime: '9 min read',
    summary: 'Post-acquisition integration of 3 companies into a unified 4-agent ecosystem with 85% forecast accuracy and 40% NRR lift under strict SEC/FINRA compliance guardrails.',
    challenge: 'Post-merger integration of three disparate FinTech acquisitions with overlapping sales motions, siloed customer databases, and stringent SEC/FINRA regulatory oversight.',
    challengePoints: [
      'Severe cross-selling friction between institutional banking relationship managers and newer digital wealth products',
      'Three redundant RevTech software stacks creating exorbitant licensing costs and fragmented executive reporting',
      'Compliance review bottlenecks on all outbound communications and deal structuring causing 8-12 day client response delays'
    ],
    rootCausePoints: [
      'Heterogeneous data schemas across 3 legacy CRM instances preventing a unified 360-degree client balance sheet view',
      'Absence of algorithmic cross-sell propensity scoring across the merged 45,000 corporate and wealth account base',
      'Manual compliance audit workflows relying on paper checklists rather than automated deterministic guardrails'
    ],
    solutionApproach: 'Unified commercial architectures into a governed 4-agent AI ecosystem with built-in SEC/FINRA guardrails, driving autonomous cross-sell identification and deal orchestration.',
    transformationTheme: 'AI-Native Sales Infrastructure & Post-Merger GTM',
    tags: ['4-Agent Ecosystem', 'SEC/FINRA Compliant', 'Post-Merger GTM', 'FinTech'],
    image: '/images/industry-fintech.png',
    testimonial: {
      quote: "Post-merger integration of 3 companies usually takes 3 years. The 4-agent ecosystem unified our GTM in 18 months and yielded 2.3X multiple expansion at exit.",
      author: 'Eleanor Sterling',
      role: 'Operating Partner',
      company: 'Tier-1 Technology Private Equity Sponsor',
      metric: '5X AI Scale · 2.3X Valuation Lift'
    }
  },
  {
    id: 'case-5',
    slug: 'technology-customer-expansion',
    title: 'Technology Customer Expansion',
    subtitle: 'Engineered expansion triggers tied to telemetry usage milestones and early churn prediction with 60-day advance notice, driving $48M incremental ARR.',
    companyName: 'Enterprise Cloud Technology ($600M ARR)',
    industry: 'Enterprise SaaS',
    industries: ['Enterprise SaaS', 'Technology & Cloud'],
    function: 'Customer Success & Retention',
    functions: ['Customer Success & Retention', 'Pricing & Revenue Strategy'],
    technology: 'Demand Intelligence',
    technologies: ['Demand Intelligence', 'Revenue Intelligence', 'Decision Intelligence'],
    outcome: 'Customer Retention & Expansion',
    outcomes: ['Customer Retention & Expansion', 'Revenue Growth', 'Conversion Improvement'],
    storyType: 'Verified Customer Story',
    evidenceStatus: 'Verified',
    metricBig: '140%',
    metricLabel: 'Net Revenue Retention (NRR)',
    timeline: '12 Months Execution',
    readingTime: '6 min read',
    summary: 'Engineered expansion triggers tied to real-time product telemetry usage milestones and early churn prediction with 60-day advance notice, driving $48M incremental ARR.',
    challenge: 'Net Revenue Retention stalled at 104%, reactive account management missing tier expansion signals, and surprise customer churn across enterprise accounts.',
    challengePoints: [
      'Customer Success Managers discovering renewal risk less than 30 days prior to annual contract expiration',
      'Expansion and cross-sell discussions conducted ad-hoc during annual reviews rather than dynamically at consumption thresholds',
      'Product telemetry data siloed in engineering databases, completely isolated from commercial CRM systems'
    ],
    rootCausePoints: [
      'Zero real-time data synchronization between product usage spikes and CSM workflow queues',
      'Absence of automated expansion playbooks triggered by API limit thresholds and license consumption milestones',
      'Subjective health scoring methodologies masking executive sponsor departures and organizational restructuring'
    ],
    solutionApproach: 'Constructed an automated expansion engine mapping real-time product consumption milestones directly to commercial expansion triggers, lifting NRR from 104% to 140%.',
    transformationTheme: 'Net Revenue Retention & Account Expansion Loops',
    tags: ['Predictive Retention', 'Expansion Loops', 'CSM Copilots', 'Cloud Infrastructure'],
    image: '/images/demand-pulse-dashboard.png',
    testimonial: {
      quote: "ProfitMachines enabled us to transition from defensive renewal conversations to proactive, data-backed expansion proposals that clients eagerly accepted.",
      author: 'David Chen',
      role: 'SVP Customer Success',
      company: 'Enterprise Cloud Technology ($600M ARR)',
      metric: '104% → 140% NRR · $48M ARR Expansion'
    }
  },
  {
    id: 'case-6',
    slug: 'saas-revenue-operations',
    title: 'SaaS Revenue Operations',
    subtitle: 'Zero-touch CRM data hygiene, automated commission reconciliation, and instant forecast tracking without adding headcount, boosting quota attainment by 44%.',
    companyName: 'Growth-Stage SaaS Platform ($15M ARR, Series B)',
    industry: 'Enterprise SaaS',
    industries: ['Enterprise SaaS', 'Technology & Cloud'],
    function: 'Revenue Operations',
    functions: ['Revenue Operations', 'Sales & BD'],
    technology: 'Revenue Operations Automation',
    technologies: ['Revenue Operations Automation', 'Integrated GTM Systems'],
    outcome: 'Operational Efficiency',
    outcomes: ['Operational Efficiency', 'Sales Cycle Optimization', 'Lead Quality Improvement'],
    storyType: 'Approved Case Study',
    evidenceStatus: 'Verified',
    metricBig: '80%',
    metricLabel: 'Rep Time Dedicated to Active Selling',
    timeline: '6 Months Execution',
    readingTime: '5 min read',
    summary: 'Zero-touch CRM data hygiene, automated commission reconciliation, and instant forecast tracking without adding headcount, boosting sales rep quota attainment by 44%.',
    challenge: 'Account Executives and SDRs spending 60% of work hours on administrative tasks, manual CRM data entry, and dispute-heavy commission calculations.',
    challengePoints: [
      'CRM contact and opportunity data decay rate exceeding 25% annually due to incomplete rep note logging',
      'Manual CPQ quoting and approval chains adding 9 days of friction to enterprise closing cycles',
      'RevOps team constantly overwhelmed with manual data cleansing and monthly commission dispute resolution'
    ],
    rootCausePoints: [
      'Friction-heavy manual CRM interface lacking ambient call transcription and automated field population',
      'Disconnected billing, quoting, and commission engines running on disparate, un-synchronized spreadsheets',
      'Lack of unified operational governance across marketing-to-sales and sales-to-customer success handoffs'
    ],
    solutionApproach: 'Deployed zero-touch RevOps automation agents that transcribe calls, auto-populate CRM attributes, generate instant quotes, and calculate real-time commissions.',
    transformationTheme: 'Operational Efficiency & Zero-Touch RevOps',
    tags: ['AI RevOps Agent', 'Zero-Touch CRM', 'Commission Automation', 'Growth SaaS'],
    image: '/images/revenue-acceleration-engine.png',
    testimonial: {
      quote: "Our sales team gained back 20 hours a week per rep. We scaled revenue by 85% without adding a single administrative or RevOps coordinator.",
      author: 'Sarah Jenkins',
      role: 'VP Sales Operations',
      company: 'Growth-Stage SaaS Platform ($15M ARR)',
      metric: '80% Selling Time · 44% Quota Attainment Lift'
    }
  },
  {
    id: 'case-7',
    slug: 'manufacturing-margin-improvement',
    title: 'Manufacturing Margin Improvement',
    subtitle: 'Eliminated unapproved 20% sales discounting, installed dynamic willingness-to-pay tiers, and protected win rates across core distribution accounts.',
    companyName: 'Mid-Market Specialized Manufacturer ($350M Revenue)',
    industry: 'Manufacturing',
    industries: ['Manufacturing', 'Industrial IoT & Distribution'],
    function: 'Pricing & Revenue Strategy',
    functions: ['Pricing & Revenue Strategy', 'Executive Revenue Management'],
    technology: 'Decision Intelligence',
    technologies: ['Decision Intelligence', 'Revenue Intelligence'],
    outcome: 'Operational Efficiency',
    outcomes: ['Operational Efficiency', 'Revenue Growth', 'Conversion Improvement'],
    storyType: 'Approved Case Study',
    evidenceStatus: 'Verified',
    metricBig: '+15 Pts',
    metricLabel: 'Gross Margin Recovered',
    timeline: '9 Months Execution',
    readingTime: '7 min read',
    summary: 'Eliminated unapproved 20% sales discounting, installed dynamic willingness-to-pay tiers, and protected win rates across core distribution and OEM accounts.',
    challenge: 'Rampant unapproved rep discounting eroding gross margins by 15-20 points against inflationary raw material and supply chain cost increases.',
    challengePoints: [
      'Field sales reps granting 15-25% volume discounts without margin hurdle verification to secure quarter-end quotas',
      'Legacy cost-plus pricing unable to capture premium value in specialized, highly engineered component product lines',
      'Customer procurement teams systematically playing regional sales offices against each other for discount matching'
    ],
    rootCausePoints: [
      'Zero real-time margin visibility inside quoting tools at point-of-sale for field account managers',
      'Lack of customer willingness-to-pay modeling based on component criticality and switching cost barriers',
      'Discretionary discount authorization without executive approval workflows or margin-based commission incentives'
    ],
    solutionApproach: 'Installed algorithmic pricing intelligence engines with dynamic willingness-to-pay tiers and real-time margin guardrails directly into CPQ workflows.',
    transformationTheme: 'Margin Optimization & Pricing Intelligence',
    tags: ['Pricing Governance', 'Willingness-to-Pay', 'Profit Pools', 'Industrial Margin'],
    image: '/images/hero-profit-pool.png',
    testimonial: {
      quote: "ProfitMachines proved that price concessions were a crutch, not a competitive requirement. We recaptured 15 points of margin while maintaining a 92% win rate.",
      author: 'Klaus Reinhardt',
      role: 'Chief Commercial Officer',
      company: 'Mid-Market Specialized Manufacturer ($350M Revenue)',
      metric: '+15 Pts Gross Margin Recovered'
    }
  },
  {
    id: 'case-8',
    slug: 'healthcare-gtm-transformation',
    title: 'Healthcare GTM Transformation',
    subtitle: 'Unified commercial motions across 5 operating divisions, cutting cycle time by 40% and eliminating operational duplication with HIPAA-compliant AI systems.',
    companyName: 'Enterprise Healthcare Systems ($900M Revenue)',
    industry: 'Healthcare',
    industries: ['Healthcare', 'MedTech & Life Sciences'],
    function: 'Executive Revenue Management',
    functions: ['Executive Revenue Management', 'Sales & BD'],
    technology: 'Integrated GTM Systems',
    technologies: ['Integrated GTM Systems', 'AI-Native Sales', 'Revenue Operations Automation'],
    outcome: 'Sales Cycle Optimization',
    outcomes: ['Sales Cycle Optimization', 'Operational Efficiency', 'Lead Quality Improvement'],
    storyType: 'Approved Case Study',
    evidenceStatus: 'Verified',
    metricBig: '80%',
    metricLabel: 'Cross-BU GTM Adoption Rate',
    timeline: '12 Months Execution',
    readingTime: '8 min read',
    summary: 'Unified commercial motions across five operating divisions, cutting cycle time by 40% and eliminating operational duplication with HIPAA-compliant AI systems.',
    challenge: 'Five siloed operating divisions competing against each other for hospital system contracts with duplicate sales motions and conflicting product bundles.',
    challengePoints: [
      'Hospital enterprise buyers receiving multiple uncoordinated sales outreaches from different corporate divisions',
      'Disjointed contract agreements requiring five separate legal and clinical reviews per health system partnership',
      'Lack of cross-divisional pipeline visibility resulting in zero enterprise bundling or multi-product expansion'
    ],
    rootCausePoints: [
      'Autonomous divisional leadership operating without shared revenue telemetry, joint quotas, or cross-sell governance',
      'Disparate sales compensation structures disincentivizing cross-divisional referrals and collaborative account planning',
      'Fragmented CRM systems preventing unified account views across multi-facility integrated delivery networks (IDNs)'
    ],
    solutionApproach: 'Unified all five commercial divisions into a single integrated GTM system with cross-divisional account orchestration and consolidated enterprise contracting.',
    transformationTheme: 'Enterprise GTM Harmonization & Cross-BU Orchestration',
    tags: ['GTM Orchestration', 'Change Management', 'HIPAA Compliance', 'Integrated Systems'],
    image: '/images/hero-end-to-end-transformation.png',
    testimonial: {
      quote: "Hospital systems wanted a single strategic enterprise partner, not five different division reps knocking on their doors. ProfitMachines unified our GTM DNA.",
      author: 'Dr. Rachel Vance',
      role: 'EVP Commercial Transformation',
      company: 'Enterprise Healthcare Systems ($900M Revenue)',
      metric: '80% Cross-BU Adoption · 40% Shorter Cycles'
    }
  }
];

export const CASE_STUDIES_CATEGORIES = [
  {
    title: 'By Industry',
    slug: 'by-industry',
    route: '/resources-hub/case-studies/by-industry',
    description: 'Explore commercial transformations tailored to industry operating models, regulatory environments, and sector-specific revenue dynamics.',
    count: '6 Core Industries',
    badge: 'Industry Verticals',
    iconName: 'Building2'
  },
  {
    title: 'By Function',
    slug: 'by-function',
    route: '/resources-hub/case-studies/by-function',
    description: 'Examine field transformations across key commercial departments: Direct Sales, Marketing, RevOps, Customer Success, and Pricing.',
    count: '6 Functional Disciplines',
    badge: 'Commercial Functions',
    iconName: 'Briefcase'
  },
  {
    title: 'By Technology',
    slug: 'by-technology',
    route: '/resources-hub/case-studies/by-technology',
    description: 'Inspect live deployments of AI SDRs, intent engines, autonomous RevOps agents, decision intelligence, and unified GTM systems.',
    count: '8 Tech Capabilities',
    badge: 'Autonomous RevTech',
    iconName: 'Cpu'
  },
  {
    title: 'By Business Outcome',
    slug: 'by-business-outcome',
    route: '/resources-hub/case-studies/by-business-outcome',
    description: 'Review empirical evidence organized by specific executive outcomes: pipeline lift, margin expansion, forecast accuracy, and cycle compression.',
    count: '10 Quantified Outcomes',
    badge: 'Boardroom Impact',
    iconName: 'TrendingUp'
  },
  {
    title: 'Customer Success Stories',
    slug: 'customer-success-stories',
    route: '/resources-hub/case-studies/customer-success-stories',
    description: 'Direct executive testimonials, multi-year transformation retrospectives, client interviews, and evidence transparency dossiers.',
    count: 'Verified Client Voices',
    badge: 'Verified Proof',
    iconName: 'Award'
  }
];

export const INDUSTRY_CASE_STUDIES_DATA = [
  {
    id: 'saas',
    name: 'Enterprise SaaS',
    badge: 'SaaS / Cloud',
    description: 'High-growth subscription software companies engineering Net Revenue Retention, multi-product expansion, and automated pipeline generation.',
    revenueModel: 'Annual Recurring Revenue (ARR) & Usage-Based Pricing',
    challenges: ['High customer acquisition cost (CAC)', 'SDR outbound fatigue', 'Stalled Net Retention Rate (NRR)'],
    relevantStorySlugs: ['enterprise-saas-pipeline-growth', 'technology-customer-expansion', 'saas-revenue-operations'],
    stat: '6X Pipeline Lift',
    statLabel: 'Average qualified outbound velocity'
  },
  {
    id: 'manufacturing',
    name: 'Manufacturing & Industrial IoT',
    badge: 'Industrial / IoT',
    description: 'Mid-market to Fortune 500 manufacturers modernizing distributor networks, expanding globally, and protecting gross margins.',
    revenueModel: 'Direct Enterprise & Two-Tier Distributor Sales',
    challenges: ['Unapproved sales discounting', 'Opaque dealer channels', 'Complex multi-country technical RFPs'],
    relevantStorySlugs: ['global-manufacturing-expansion', 'manufacturing-margin-improvement'],
    stat: '+15 Pts Margin',
    statLabel: 'Recovered gross margin'
  },
  {
    id: 'financial-services',
    name: 'Financial Services & FinTech',
    badge: 'FinTech / BFSI',
    description: 'Banks, asset managers, and FinTech platforms scaling autonomous sales workflows while maintaining strict SEC/FINRA compliance.',
    revenueModel: 'AUM Fees, Transaction Spread & Capital Facilities',
    challenges: ['Post-merger integration delays', 'Heavy compliance gatekeeping', 'Under-monetized account relationships'],
    relevantStorySlugs: ['financial-services-ai-transformation'],
    stat: '5X AI Scale',
    statLabel: 'Compliance-verified autonomous agents'
  },
  {
    id: 'healthcare',
    name: 'Healthcare & Life Sciences',
    badge: 'MedTech / Life Sciences',
    description: 'MedTech innovators and healthcare platforms navigating multi-stakeholder hospital procurement and strict HIPAA requirements.',
    revenueModel: 'Multi-Year Enterprise Hospital & Provider Contracts',
    challenges: ['14-month procurement cycles', 'Unpredictable quarterly forecasts', 'Divisional sales collisions'],
    relevantStorySlugs: ['healthcare-forecast-accuracy', 'healthcare-gtm-transformation'],
    stat: '98% Accuracy',
    statLabel: 'Forecast variance reduced to <5%'
  },
  {
    id: 'professional-services',
    name: 'Professional Services',
    badge: 'Advisory / Consulting',
    description: 'Global advisory, legal, and management consulting firms maximizing partner billability and systematizing origination.',
    revenueModel: 'Retainer & Value-Based Project Architecture',
    challenges: ['Lumpy non-recurring deal flow', 'Partner bandwidth bottlenecks', 'Inconsistent deal qualification'],
    relevantStorySlugs: ['enterprise-saas-pipeline-growth', 'saas-revenue-operations'],
    stat: '3.4X Velocity',
    statLabel: 'Origination pipeline acceleration'
  },
  {
    id: 'retail-ecommerce',
    name: 'Retail & E-commerce',
    badge: 'Omnichannel Commerce',
    description: 'Enterprise brands and multi-brand retailers optimizing consumer lifetime value and dynamic pricing models.',
    revenueModel: 'High-Volume Omnichannel & Repeat Subscriptions',
    challenges: ['Rising digital acquisition costs', 'Basket margin erosion', 'Inventory-demand mismatch'],
    relevantStorySlugs: ['manufacturing-margin-improvement', 'technology-customer-expansion'],
    stat: '42% Lift',
    statLabel: 'Repeat customer lifetime value'
  }
];

export const FUNCTION_CASE_STUDIES_DATA = [
  {
    id: 'sales-bd',
    name: 'Direct Sales & Enterprise Deal Execution',
    badge: 'Enterprise Sales',
    iconName: 'Target',
    description: 'Empowering account executives and sales leaders to compress multi-threaded enterprise deal cycles and protect win rates.',
    bottlenecks: ['Committee qualification friction', '14+ month deal slippage', 'Rampant discount leakage'],
    enablement: 'AI deal coaching, multi-threaded buyer signals, dynamic pricing guardrails',
    kpi: '47% Shorter Sales Cycles',
    relevantStorySlugs: ['enterprise-saas-pipeline-growth', 'financial-services-ai-transformation', 'healthcare-gtm-transformation']
  },
  {
    id: 'marketing-demand',
    name: 'Marketing & Demand Engineering',
    badge: 'Demand Generation',
    iconName: 'TrendingUp',
    description: 'Orchestrating autonomous inbound and outbound demand engines driven by buyer intent telemetry and dark-funnel signal detection.',
    bottlenecks: ['Declining cold response rates', 'Misaligned MQL definitions', 'Wasted advertising spend'],
    enablement: 'Intent ingestion meshes, autonomous SDR swarms, multi-channel personalized nurturing',
    kpi: '6X Qualified Pipeline Lift',
    relevantStorySlugs: ['enterprise-saas-pipeline-growth', 'global-manufacturing-expansion']
  },
  {
    id: 'revops',
    name: 'Revenue Operations & Pipeline Intelligence',
    badge: 'RevOps Architecture',
    iconName: 'Activity',
    description: 'Constructing unified commercial data architectures that eliminate manual data entry and provide mathematical forecast certainty.',
    bottlenecks: ['60% rep time wasted on admin', '30%+ quarterly forecast variance', 'Fragmented CRM silos'],
    enablement: 'Zero-touch CRM telemetry, predictive deal scoring, automated commission reconciliation',
    kpi: '<5% Forecast Variance',
    relevantStorySlugs: ['healthcare-forecast-accuracy', 'saas-revenue-operations']
  },
  {
    id: 'customer-success',
    name: 'Customer Success & Retention',
    badge: 'Net Revenue Retention',
    iconName: 'Users',
    description: 'Engineering proactive retention loops and automated product telemetry triggers that maximize Net Revenue Retention.',
    bottlenecks: ['Surprise renewal cancellations', 'Untracked product usage milestones', 'Ad-hoc expansion conversations'],
    enablement: '60-day early churn telemetry, consumption-triggered expansion playbooks, CSM copilots',
    kpi: '140% Net Revenue Retention',
    relevantStorySlugs: ['technology-customer-expansion', 'saas-revenue-operations']
  },
  {
    id: 'pricing-strategy',
    name: 'Pricing, Packaging & Monetization Strategy',
    badge: 'Monetization Architecture',
    iconName: 'DollarSign',
    description: 'Eliminating arbitrary discount leakage through algorithmic willingness-to-pay modeling and value-based pricing governance.',
    bottlenecks: ['Unchecked sales discounting', 'Rigid legacy pricing sheets', 'Procurement price pressure'],
    enablement: 'Algorithmic willingness-to-pay tiers, CPQ margin hurdles, real-time discount guardrails',
    kpi: '+15 Pts Margin Recovery',
    relevantStorySlugs: ['manufacturing-margin-improvement', 'technology-customer-expansion']
  },
  {
    id: 'executive-management',
    name: 'Executive Revenue Management',
    badge: 'Boardroom Governance',
    iconName: 'Compass',
    description: 'Providing Chief Revenue Officers, CFOs, and Boards with unified portfolio telemetry and deterministic capital allocation frameworks.',
    bottlenecks: ['Inaccurate board forecasts', 'Post-merger commercial fragmentation', 'Misallocated GTM headcount'],
    enablement: 'Portfolio-wide telemetry command center, automated variance attribution, unified GTM governance',
    kpi: '2.3X Valuation Multiple Lift',
    relevantStorySlugs: ['healthcare-gtm-transformation', 'global-manufacturing-expansion', 'financial-services-ai-transformation']
  }
];

export const TECHNOLOGY_CASE_STUDIES_DATA = [
  {
    id: 'ai-native-sales',
    name: 'AI-Native Sales Infrastructure',
    badge: 'Autonomous Foundation',
    description: 'End-to-end commercial architecture deploying autonomous agents across prospecting, qualification, and pipeline hygiene.',
    workflow: 'Unified data plane connecting CRM, email, phone, and buyer intent feeds to autonomous decision agents.',
    governance: 'Deterministic boundaries, human-in-the-loop escalation thresholds, complete audit logging.',
    humanRole: 'Strategic negotiation, executive relationship building, multi-party boardroom consensus.',
    relevantStorySlugs: ['financial-services-ai-transformation', 'enterprise-saas-pipeline-growth']
  },
  {
    id: 'ai-prospecting',
    name: 'AI Prospecting & Engagement',
    badge: 'Autonomous Outbound',
    description: 'Dynamic prospecting engines that ingest third-party intent, build hyper-personalized dossiers, and run multi-channel sequences.',
    workflow: 'Intent detection -> Account dossier enrichment -> Dynamic angle synthesis -> Multithreaded cadence.',
    governance: 'Domain reputation protections, rate-limiting guardrails, strict opt-out compliance.',
    humanRole: 'Reviewing strategic enterprise key accounts, participating in scheduled discovery calls.',
    relevantStorySlugs: ['enterprise-saas-pipeline-growth', 'global-manufacturing-expansion']
  },
  {
    id: 'intelligent-sales-agents',
    name: 'Intelligent Sales Agents',
    badge: 'Multi-Agent Swarms',
    description: 'Domain-specialized AI agents cooperating as swarms: researcher, copywriter, compliance auditor, and meeting scheduler.',
    workflow: 'Specialized agents exchange intermediate outputs with automated quality and compliance validation checks.',
    governance: 'SEC/FINRA/HIPAA compliance validation engines before any external delivery.',
    humanRole: 'Setting ICP target parameters, approving high-value custom propositions.',
    relevantStorySlugs: ['financial-services-ai-transformation', 'enterprise-saas-pipeline-growth']
  },
  {
    id: 'revenue-intelligence',
    name: 'Revenue Intelligence',
    badge: 'Behavioral Signals',
    description: 'Continuous analysis of buyer interactions, call sentiment, email engagement frequency, and digital footprint velocity.',
    workflow: 'Real-time telemetry streams into predictive graph models estimating deal slip probabilities and win confidence.',
    governance: 'Zero hallucination risk; all scores derive from verifiable empirical behavioral telemetry.',
    humanRole: 'Addressing highlighted deal risks and unblocking stalled committee stakeholders.',
    relevantStorySlugs: ['healthcare-forecast-accuracy', 'technology-customer-expansion']
  },
  {
    id: 'demand-intelligence',
    name: 'Demand Intelligence',
    badge: 'Market Telemetry',
    description: 'Detecting shifts in market demand, hiring surges, competitor displacement windows, and macroeconomic buying cycles.',
    workflow: 'External market web crawlers + hiring telemetry + tech stack change alerts feeding account scoring.',
    governance: 'Strict adherence to GDPR, CCPA, and verified public registry data standards.',
    humanRole: 'Shaping outbound go-to-market campaign strategy and timing market entry.',
    relevantStorySlugs: ['technology-customer-expansion', 'enterprise-saas-pipeline-growth']
  },
  {
    id: 'revops-automation',
    name: 'Revenue Operations Automation',
    badge: 'Zero-Touch RevOps',
    description: 'Automating administrative CRM upkeep, contract generation, billing triggers, and commission calculations.',
    workflow: 'Meeting recording -> Ambient summary & action item extraction -> Automatic CRM field population.',
    governance: 'Double-entry audit logs for all financial and commission updates with manager sign-off.',
    humanRole: 'Sales coaching, compensation structure strategy, cross-departmental alignment.',
    relevantStorySlugs: ['saas-revenue-operations', 'healthcare-forecast-accuracy']
  },
  {
    id: 'decision-intelligence',
    name: 'Decision Intelligence',
    badge: 'Algorithmic Strategy',
    description: 'Mathematical pricing engines, discount optimization models, and capital allocation simulations.',
    workflow: 'Historical win-loss analysis + cost-of-goods + customer willingness-to-pay elasticity modeling.',
    governance: 'Hard margin floor constraints preventing any unprofitable contract execution.',
    humanRole: 'Setting annual gross margin targets and strategic enterprise partnership terms.',
    relevantStorySlugs: ['manufacturing-margin-improvement', 'global-manufacturing-expansion']
  },
  {
    id: 'integrated-gtm-systems',
    name: 'Integrated GTM Systems',
    badge: 'Unified RevTech',
    description: 'Eliminating tool sprawl by consolidating CRM, marketing automation, CPQ, and customer success into a single operating mesh.',
    workflow: 'Single source of truth synchronizing real-time telemetry across all commercial divisions.',
    governance: 'Unified access controls, enterprise SSO, SOC 2 Type II data residency compliance.',
    humanRole: 'Strategic portfolio management and inter-divisional commercial collaboration.',
    relevantStorySlugs: ['healthcare-gtm-transformation', 'saas-revenue-operations']
  }
];

export const OUTCOME_CASE_STUDIES_DATA = [
  {
    id: 'revenue-growth',
    name: 'Revenue Growth',
    badge: 'Top-Line Scale',
    metric: '$400M New ARR',
    description: 'Systematic expansion of net new enterprise revenue without proportional increases in sales headcount.',
    intendedVsMeasured: 'Targeted: 2.5X growth over 36 months | Measured: 4.2X growth achieved in 24 months.',
    kpis: ['Net New ARR', 'Average Deal Size', 'Revenue per Sales Representative'],
    relevantStorySlugs: ['global-manufacturing-expansion', 'enterprise-saas-pipeline-growth', 'manufacturing-margin-improvement']
  },
  {
    id: 'pipeline-growth',
    name: 'Pipeline Growth',
    badge: 'Outbound Velocity',
    metric: '6X Pipeline Lift',
    description: 'Multiplying qualified sales meetings and enterprise pipeline volume through autonomous prospecting swarms.',
    intendedVsMeasured: 'Targeted: 3X pipeline expansion | Measured: 6X qualified opportunity velocity.',
    kpis: ['Sales Qualified Leads (SQLs)', 'Stage 2+ Pipeline Value', 'Outbound Meeting Velocity'],
    relevantStorySlugs: ['enterprise-saas-pipeline-growth', 'technology-customer-expansion']
  },
  {
    id: 'lead-quality',
    name: 'Lead Quality Improvement',
    badge: 'Qualification Purity',
    metric: '92% Acceptance Rate',
    description: 'Eliminating unqualified demos and aligning sales and marketing on deterministic ICP criteria.',
    intendedVsMeasured: 'Targeted: 70% rep acceptance rate | Measured: 92% Stage 1-to-Stage 2 conversion.',
    kpis: ['MQL-to-SQL Conversion Rate', 'AE Rejection Rate', 'Buying Committee Multi-Threading Depth'],
    relevantStorySlugs: ['enterprise-saas-pipeline-growth', 'healthcare-forecast-accuracy']
  },
  {
    id: 'cycle-optimization',
    name: 'Sales Cycle Optimization',
    badge: 'Cycle Compression',
    metric: '47% Faster Cycles',
    description: 'Compressing complex enterprise buying cycles by eliminating administrative friction and accelerating committee approvals.',
    intendedVsMeasured: 'Targeted: 25% cycle reduction | Measured: 47% reduction in time-to-close.',
    kpis: ['Days in Pipeline', 'Stage Velocity Index', 'Legal/Security Approval Duration'],
    relevantStorySlugs: ['global-manufacturing-expansion', 'healthcare-gtm-transformation']
  },
  {
    id: 'conversion-improvement',
    name: 'Conversion Improvement',
    badge: 'Win Rate Defense',
    metric: '+18 Pts Win Rate',
    description: 'Boosting proposal-to-close conversion rates through real-time deal telemetry and objection-handling intelligence.',
    intendedVsMeasured: 'Targeted: +8% win rate | Measured: +18 points lift across competitive RFPs.',
    kpis: ['Opportunity-to-Close Rate', 'Competitive Win Rate', 'Discount Depth at Close'],
    relevantStorySlugs: ['financial-services-ai-transformation', 'manufacturing-margin-improvement']
  },
  {
    id: 'cac-efficiency',
    name: 'Customer Acquisition Efficiency',
    badge: 'Capital Efficiency',
    metric: '62% Lower CAC',
    description: 'Drastically cutting cost per acquired enterprise logo by replacing manual outbound labor with autonomous agents.',
    intendedVsMeasured: 'Targeted: 30% CAC reduction | Measured: 62% reduction within 9 months.',
    kpis: ['CAC Payback Period (Months)', 'Sales Efficiency Ratio', 'Customer Acquisition Cost per Logo'],
    relevantStorySlugs: ['financial-services-ai-transformation', 'saas-revenue-operations']
  },
  {
    id: 'retention-expansion',
    name: 'Customer Retention & Expansion',
    badge: 'NRR Acceleration',
    metric: '140% NRR',
    description: 'Maximizing lifetime value through algorithmic expansion signals and proactive churn prevention telemetry.',
    intendedVsMeasured: 'Targeted: 115% NRR | Measured: 140% NRR achieved across top-tier enterprise accounts.',
    kpis: ['Net Revenue Retention (NRR)', 'Gross Revenue Retention (GRR)', 'Expansion ARR Percentage'],
    relevantStorySlugs: ['technology-customer-expansion']
  },
  {
    id: 'visibility-forecasting',
    name: 'Revenue Visibility & Forecasting',
    badge: 'Mathematical Pacing',
    metric: '98% Accuracy',
    description: 'Replacing subjective sales commits with empirical behavioral telemetry, reducing quarterly variance to <5%.',
    intendedVsMeasured: 'Targeted: <10% variance | Measured: 98% accuracy (<3.2% variance across 4 quarters).',
    kpis: ['Quarterly Forecast Variance (%)', 'Slipped Deal Rate', 'Pipeline Coverage Ratio'],
    relevantStorySlugs: ['healthcare-forecast-accuracy', 'financial-services-ai-transformation']
  },
  {
    id: 'operational-efficiency',
    name: 'Operational Efficiency',
    badge: 'Productivity Lift',
    metric: '80% Selling Time',
    description: 'Liberating sales reps from administrative CRM overhead and automating routine commercial workflows.',
    intendedVsMeasured: 'Targeted: 50% selling time | Measured: 80% time dedicated to active client selling.',
    kpis: ['Hours Spent on CRM per Rep/Week', 'CPQ Quote Generation Time', 'RevOps Support Ticket Volume'],
    relevantStorySlugs: ['saas-revenue-operations', 'manufacturing-margin-improvement']
  },
  {
    id: 'global-expansion',
    name: 'Global Market Expansion',
    badge: 'Cross-Border Scale',
    metric: '$400M International ARR',
    description: 'Scaling multi-language sales operations and distributor channels seamlessly across Europe, Asia, and the Americas.',
    intendedVsMeasured: 'Targeted: $150M international pipeline | Measured: $400M verified closed contracts.',
    kpis: ['International Revenue %', 'Regional Distributor Quota Attainment', 'Time-to-Market in New Geos'],
    relevantStorySlugs: ['global-manufacturing-expansion']
  }
];

export const BUSINESS_CHALLENGES_DATA = [
  {
    id: 'pipeline-growth',
    title: 'Stalled Outbound Pipeline & Lead Fatigue',
    symptom: 'SDR teams generating diminishing returns; email open and response rates falling below 1.5%.',
    diagnostic: 'Outbound sequences rely on static lists and generic personas without intent telemetry or committee multi-threading.',
    remedy: 'Deploy AI SDR swarms that ingest live dark-funnel intent signals and craft hyper-personalized multi-threaded campaigns.',
    relevantStorySlug: 'enterprise-saas-pipeline-growth'
  },
  {
    id: 'forecast-variance',
    title: 'Inaccurate Forecasting & Board Credibility Risks',
    symptom: 'Quarterly pipeline commits swing by 25-40%, leading to missed revenue targets and investor tension.',
    diagnostic: 'Forecasts depend on subjective rep commits and optimistic CRM stage updates rather than verified buyer telemetry.',
    remedy: 'Implement behavioral revenue telemetry that tracks digital engagement milestones to forecast revenue with <5% variance.',
    relevantStorySlug: 'healthcare-forecast-accuracy'
  },
  {
    id: 'margin-discounting',
    title: 'Rampant Sales Discounting & Margin Erosion',
    symptom: 'Sales reps routinely grant 15-25% discounts at quarter-end, eroding gross margin pools.',
    diagnostic: 'Quoting tools lack point-of-sale margin hurdle visibility and customer willingness-to-pay guardrails.',
    remedy: 'Install algorithmic pricing intelligence with dynamic price floors and margin-linked compensation incentives.',
    relevantStorySlug: 'manufacturing-margin-improvement'
  },
  {
    id: 'admin-overload',
    title: 'RevTech Sprawl & Rep Administrative Burden',
    symptom: 'Account executives spend less than 35% of their working hours actively speaking with qualified prospects.',
    diagnostic: '10+ disconnected sales point solutions require manual copy-pasting, logging, and data reconciliation.',
    remedy: 'Transition to zero-touch RevOps automation that listens to calls, updates CRMs ambiently, and automates quotes.',
    relevantStorySlug: 'saas-revenue-operations'
  },
  {
    id: 'retention-plateau',
    title: 'Stagnant Net Retention & Reactive Churn Control',
    symptom: 'Customer expansion happens by accident; accounts churn with less than 30 days notice to leadership.',
    diagnostic: 'Product usage telemetry is trapped in engineering databases and never translated into commercial expansion signals.',
    remedy: 'Connect live product consumption telemetry directly to CSM copilot workflows with automated expansion triggers.',
    relevantStorySlug: 'technology-customer-expansion'
  }
];

export const TRANSFORMATION_THEMES_DATA = [
  {
    theme: 'Autonomous Pipeline Generation & Swarm Prospecting',
    description: 'Replacing linear SDR outreach with autonomous multi-agent swarms that continuously research accounts, discover buying committee members, and initiate contextual dialogues.',
    storiesCount: '3 Engagements'
  },
  {
    theme: 'Predictive Revenue Telemetry & Pacing Governance',
    description: 'Eliminating subjective sales forecasts by tracking digital interaction velocity, committee consensus signals, and mathematical deal progression milestones.',
    storiesCount: '2 Engagements'
  },
  {
    theme: 'Dynamic Pricing Intelligence & Margin Recovery',
    description: 'Instituting algorithmic willingness-to-pay elasticity models and automated CPQ guardrails to protect gross margins against procurement discounting tactics.',
    storiesCount: '2 Engagements'
  },
  {
    theme: 'Zero-Touch RevOps Automation & CRM Modernization',
    description: 'Freeing enterprise sales representatives from manual data entry through ambient call transcription, automated record enrichment, and real-time commission tracking.',
    storiesCount: '2 Engagements'
  },
  {
    theme: 'Consumption-Driven Net Revenue Retention Loops',
    description: 'Transforming Customer Success from defensive renewal management into an autonomous expansion engine linked directly to live product consumption triggers.',
    storiesCount: '2 Engagements'
  },
  {
    theme: 'Cross-Border RevOps & International Market Expansion',
    description: 'Deploying multi-lingual autonomous prospecting engines and standardized dealer governance frameworks to scale international revenue without ballooning headcount.',
    storiesCount: '1 Engagement'
  },
  {
    theme: 'Post-Merger Commercial Consolidation & AI Orchestration',
    description: 'Harmonizing disparate CRM architectures, conflicting sales motions, and overlapping customer bases post-acquisition into a single governed AI revenue ecosystem.',
    storiesCount: '2 Engagements'
  }
];

export const EXECUTIVE_INSIGHTS_DATA = [
  {
    number: '01',
    headline: 'Pipeline Velocity is a Mathematical Function of Multi-Threading',
    insight: 'Single-threaded enterprise opportunities slip 3.8 times more often than multi-threaded deals. Organizations that systematically map 5+ stakeholders per account achieve 6X pipeline velocity.',
    author: 'Principal Transformation Architect'
  },
  {
    number: '02',
    headline: 'Subjective Rep Commits are the Root Cause of Board Variance',
    insight: 'Over 82% of forecast misses trace back to optimistic rep confidence rather than market downturns. Replacing manual commits with behavioral buyer telemetry reduces variance below 5%.',
    author: 'RevOps Practice Lead'
  },
  {
    number: '03',
    headline: 'Uncontrolled Discounting is an Enablement Failure, Not a Market Mandate',
    insight: 'Procurement teams exploit rep urgency at quarter end. Dynamic willingness-to-pay guardrails inside quoting software consistently protect 12-18 points of gross margin without sacrificing win rate.',
    author: 'Commercial Monetization Partner'
  },
  {
    number: '04',
    headline: 'Administrative Friction is the Largest Controllable Revenue Drain',
    insight: 'When reps spend 60% of their time updating CRMs and chasing approvals, revenue per rep collapses. Zero-touch ambient RevOps immediately yields the equivalent of a 40% headcount expansion.',
    author: 'Enterprise Systems Director'
  },
  {
    number: '05',
    headline: 'Post-Merger Revenue Synergies Require Common Data DNA',
    insight: 'Integrating multiple acquired sales teams through static playbooks takes years. Deploying unified AI agents with automated compliance boundaries captures cross-sell revenue within months.',
    author: 'Private Equity Operating Partner'
  }
];

export const TESTIMONIALS_DATA = [
  {
    id: 't-1',
    quote: "ProfitMachines didn't just give us tools — they gave us a revenue operating system. We went from hoping for growth to engineering it with mathematical predictability.",
    name: 'Marcus Vance',
    title: 'Chief Revenue Officer',
    company: 'Enterprise SaaS Platform ($450M ARR)',
    impact: '6X Pipeline Growth · 98% Forecast Accuracy',
    storySlug: 'enterprise-saas-pipeline-growth'
  },
  {
    id: 't-2',
    quote: 'Global expansion was previously our biggest capital risk. Deploying the ProfitMachines framework transformed cross-border growth into a deterministic science.',
    name: 'Dr. Helena Meyer',
    title: 'Chief Executive Officer',
    company: 'Industrial Manufacturing Leader (Fortune 500)',
    impact: '$400M New International Revenue',
    storySlug: 'global-manufacturing-expansion'
  },
  {
    id: 't-3',
    quote: 'Restoring board confidence required mathematical certainty, not optimistic rep commits. <5% forecast variance completely changed our board dynamics.',
    name: 'Julian Thorne',
    title: 'Chief Financial Officer',
    company: 'Healthcare Technology Provider ($180M ARR)',
    impact: '65% → 98% Forecast Accuracy',
    storySlug: 'healthcare-forecast-accuracy'
  },
  {
    id: 't-4',
    quote: 'Post-merger integration of 3 companies usually takes 3 years. The 4-agent ecosystem unified our GTM in 18 months and yielded 2.3X multiple expansion at exit.',
    name: 'Eleanor Sterling',
    title: 'Operating Partner',
    company: 'Tier-1 Technology Private Equity Sponsor',
    impact: '5X AI Scale · 2.3X Valuation Lift',
    storySlug: 'financial-services-ai-transformation'
  }
];

export function getCaseStudyBySlug(slug: string): CaseStudyStory | undefined {
  // Normalize slug in case it has full route prefix
  const cleanSlug = slug.replace(/^\/?(resources-hub\/)?case-studies\/(stories\/)?/, '').replace(/^\//, '');
  return APPROVED_CASE_STUDIES.find(
    (cs) => cs.slug === cleanSlug || cs.slug === slug
  );
}
