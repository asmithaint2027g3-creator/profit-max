import { PageContentData } from '../../app/types/offeringsIndustries';

export const demandEngineeringData: PageContentData = {
  slug: 'demand-engineering',
  route: '/offerings/demand-engineering',
  pageNumber: 'OFFERING 02',
  pageCategory: 'Offering',
  title: 'Demand Engineering',
  headlineHighlight: 'Build a Repeatable Engine for Qualified Demand.',
  eyebrow: 'SYSTEMIC PIPELINE GENERATION & ACCOUNT ACQUISITION',
  description: 'Transform market intelligence into predictable, high-intent pipeline. Align audience definition, multi-channel campaigns, intent telemetry, qualification rigor, and attribution to generate sales-accepted opportunities.',
  targetAudience: {
    primary: 'CMOs, Heads of Demand Generation, and Marketing Directors',
    secondary: 'VPs of Sales, Revenue Operations Leaders, and Growth Founders',
    executives: 'CEOs and Commercial Leaders requiring predictable pipeline coverage.'
  },
  heroVisual: {
    imageSrc: '/images/demand-pulse-dashboard.png',
    altText: 'Demand Engineering Pipeline Architecture & Intent Telemetry',
    badgeText: 'Pipeline Engine: Live Telemetry'
  },
  keyStats: [
    { label: 'Pipeline Predictability', metric: '94.6%', context: 'Attributed quarterly forecast correlation' },
    { label: 'Sales Acceptance', metric: '82.4%', context: 'Leads progressing to Stage 1 discovery' },
    { label: 'CAC Efficiency', metric: '-38%', context: 'Blended reduction in cost per opportunity' },
    { label: 'Intent Accuracy', metric: '4.2x', context: 'Lift in conversion vs cold lists' }
  ],
  challenges: [
    {
      id: 'f-mql-disconnect',
      title: 'MQL Inflation & Low Sales Acceptance',
      situation: 'Marketing celebrates hit lead goals with hundreds of content downloads, while sales reps discard over 80% as unqualified or unresponsive.',
      whyItMatters: 'Friction between sales and marketing erodes trust, wastes SDR follow-up capacity, and inflates customer acquisition costs.',
      commercialConsequence: 'High marketing burn with zero downstream pipeline realization.',
      whyTraditionalMethodsFail: 'Legacy scoring awards points for superficial clicks rather than verified organizational fit and active buying committee intent.',
      requiredExecutiveDecision: 'Transition from vanity MQL volume to a strict Sales-Accepted Opportunity (SAO) and pipeline contribution governance model.'
    },
    {
      id: 'f-channel-fragmentation',
      title: 'Fragmented Channels & Disjointed Messages',
      situation: 'Paid search, social ads, outbound emails, and event sponsorships run in disconnected silos with contradictory messaging.',
      whyItMatters: 'Prospects receive uncoordinated touches that confuse buying committees and fail to build coherent commercial momentum.',
      commercialConsequence: 'Diluted brand positioning, low ad engagement, and depressed campaign ROI.',
      whyTraditionalMethodsFail: 'Teams manage individual channel tactics rather than architecting a unified, multi-touch account journey.',
      requiredExecutiveDecision: 'Deploy synchronized Account-Based Marketing (ABM) journeys across paid, organic, and direct SDR outreach.'
    },
    {
      id: 'f-attribution-blindspots',
      title: 'Dark-Funnel Attribution Blindspots',
      situation: 'Leadership cannot trace which programs, channels, or campaigns actually produce closed-won ARR vs superficial top-of-funnel traffic.',
      whyItMatters: 'Budget is continually allocated to expensive channels that produce dead pipeline while high-performing assist touches are underfunded.',
      commercialConsequence: 'Inefficient marketing spend and unpredictable quarterly pipeline generation.',
      whyTraditionalMethodsFail: 'First-touch or last-touch attribution models oversimplify complex enterprise multi-stakeholder purchasing paths.',
      requiredExecutiveDecision: 'Implement multi-touch, multi-stakeholder pipeline attribution connected directly to CRM revenue milestones.'
    }
  ],
  capabilities: [
    {
      id: 'icp-target-account-engineering',
      title: 'ICP & Target Account Engineering',
      groupName: 'Targeting & Audience Architecture',
      shortSummary: 'Formulate precision ideal customer profiles, build audited target account lists, and enforce objective qualification filters before deploying spend.',
      businessChallenge: 'Marketing teams waste up to 60% of their ad and outbound budgets targeting companies that lack the budget, infrastructure, or authority to buy.',
      whyItMatters: 'Every dollar spent on non-ICP accounts increases acquisition costs and crowds out high-potential prospects.',
      whatProfitMachinesDoes: 'We engineer exhaustive, verified target account universes ranked by firmographic fit, technical compatibility, and purchasing power.',
      howItWorks: [
        'Ingest historical win/loss data to identify statistical indicators of customer lifetime value and expansion.',
        'Filter national and global corporate databases against strict architectural criteria (cloud stack, employee count, compliance mandates).',
        'De-duplicate and enrich account records with parent-subsidiary hierarchies and verified headquarters locations.',
        'Segment the universe into Tier-1 (High-Touch ABM), Tier-2 (Scaled Digital), and Tier-3 (Programmatic Inbound).'
      ],
      relevantInputs: ['Historical CRM deal data', 'Technographic stack databases', 'Corporate family trees', 'Firmographic revenue registries'],
      deliverables: ['Target Account Universe (TAU) Master File', 'Tiered Account Playbooks', 'ICP Scoring Rubric'],
      businessValue: 'Focuses 100% of marketing and SDR resources on accounts with verified commercial demand and high willingness to pay.',
      kpis: [
        { name: 'Target Account Coverage', formula: 'Engaged Target Accounts ÷ Total Identified Target Account Universe', purpose: 'Measures market penetration.' },
        { name: 'ICP Match Quality Rate', formula: 'Qualified Leads Matching Tier-1/2 ICP ÷ Total Ingested Leads', purpose: 'Protects pipeline integrity.' }
      ],
      illustrativeUseCase: {
        targetUser: 'CMO at High-Growth Enterprise SaaS Firm',
        scenario: 'Marketing was spending $80k/mo on LinkedIn ads targeting broad IT titles, yielding 400 leads but only 3 closed deals.',
        actionTaken: 'Engineered a precision Target Account Universe of 2,400 accounts running legacy on-premise infrastructure.',
        outcomeObserved: 'Cut ad spend by 45% while increasing sales-accepted pipeline by 2.6x within 60 days.'
      },
      visualRecommendation: {
        type: 'Target Account Tiering Pyramid',
        description: 'Hierarchical pyramid dividing total market into Tier 1 strategic accounts down to programmatic scale.'
      },
      relatedCapabilities: [
        { name: 'Profit Pool Discovery', path: '/offerings/profit-pool-discovery' },
        { name: 'B2B Businesses', path: '/industries/b2b' }
      ],
      nextStepCta: { label: 'Engineer Target Accounts', link: '#consultation' }
    },
    {
      id: 'account-based-marketing',
      title: 'Account-Based Marketing (ABM) Orchestration',
      groupName: 'Campaign & Content Architecture',
      shortSummary: 'Orchestrate account-specific advertising, bespoke landing pages, dynamic executive content, and coordinated SDR engagement.',
      businessChallenge: 'Enterprise accounts ignore generic marketing blasts; reaching 6-10 stakeholders requires personalized, coordinated multi-channel touches.',
      whyItMatters: 'Fragmented touches fail to create the broad consensus needed for seven-figure enterprise purchase approvals.',
      whatProfitMachinesDoes: 'We synchronize programmatic IP-targeted ads, personalized web environments, and tailored executive outreach playbooks for top-tier accounts.',
      howItWorks: [
        'Define key enterprise accounts and identify the 5-8 primary committee personas in each organization.',
        'Deploy IP-targeted digital advertising delivering role-specific value narratives to economic and technical stakeholders.',
        'Serve dynamically personalized landing pages reflecting the prospect company name, industry, and architectural challenge.',
        'Coordinate SDR outbound touches to trigger precisely when account engagement surges.'
      ],
      relevantInputs: ['Named account target lists', 'Stakeholder persona profiles', 'Custom value narrative collateral', 'IP-to-company mapping data'],
      deliverables: ['ABM Orchestration Playbook', 'Role-Specific Content Matrix', 'Multi-Touch Engagement Cadences'],
      businessValue: 'Dramatically increases enterprise meeting booking rates and establishes widespread internal consensus early in the buying cycle.',
      kpis: [
        { name: 'Account Engagement Index', formula: 'Weighted touches across buying committee personas ÷ Expected benchmark touches', purpose: 'Measures consensus depth.' },
        { name: 'Target Account Meeting Rate', formula: 'Target Accounts with Discovery Call Booked ÷ Total Targeted Accounts', purpose: 'Tracks direct pipeline impact.' }
      ],
      illustrativeUseCase: {
        targetUser: 'VP of Enterprise Sales & Marketing',
        scenario: 'Enterprise deal sizes averaged $250k, but sales reps struggled to penetrate Fortune 500 accounts cold.',
        actionTaken: 'Launched an ABM Orchestration campaign across 150 Tier-1 retail enterprise accounts.',
        outcomeObserved: 'Achieved 42% account engagement within 90 days and generated $6.8M in qualified enterprise opportunities.'
      },
      visualRecommendation: {
        type: 'ABM Multi-Touch Synchronization Timeline',
        description: 'Cross-functional timeline showing ad impressions, landing page visits, SDR emails, and executive touches.'
      },
      relatedCapabilities: [
        { name: 'Sales Acceleration', path: '/offerings/sales-acceleration' },
        { name: 'Enterprise Organizations', path: '/industries/enterprise' }
      ],
      nextStepCta: { label: 'Deploy ABM Architecture', link: '#consultation' }
    },
    {
      id: 'demand-generation-architecture',
      title: 'Demand Generation Architecture',
      groupName: 'Campaign & Content Architecture',
      shortSummary: 'Plan channel mix, campaign cadence, educational content paths, and conversion touchpoints designed around buyer decision readiness.',
      businessChallenge: 'Demand generation often consists of random acts of marketing—sporadic webinars, ad hoc blog posts, and uncoordinated trade show booths.',
      whyItMatters: 'Unstructured demand programs burn cash, produce erratic lead spikes, and fail to generate steady, predictable pipeline.',
      whatProfitMachinesDoes: 'We architect sustainable, multi-quarter demand engines with balanced paid, organic, partner, and direct outbound streams.',
      howItWorks: [
        'Evaluate historical channel efficiency, CAC payback, and opportunity velocity across all existing acquisition paths.',
        'Model the required monthly funnel metrics (traffic, inquiries, meetings, opportunities) needed to hit ARR targets.',
        'Construct quarterly campaign thematic pillars centered on urgent industry catalysts (regulatory shifts, tech migrations).',
        'Establish automated lead handoffs and tracking mechanisms between marketing engines and CRM.'
      ],
      relevantInputs: ['Historical marketing budget allocations', 'Channel performance metrics', 'Product roadmap milestones', 'Sales quota requirements'],
      deliverables: ['Annual Demand Generation Blueprint', 'Multi-Channel Capacity Model', 'Quarterly Campaign Execution Roadmap'],
      businessValue: 'Provides executive leadership with a predictable, scalable demand infrastructure that delivers consistent pipeline quarter after quarter.',
      kpis: [
        { name: 'Pipeline Contribution Rate', formula: 'Marketing-Generated Pipeline Value ÷ Total Company Pipeline Value', purpose: 'Measures marketing impact.' },
        { name: 'Cost per Qualified Opportunity (CPQO)', formula: 'Total Demand Program Spend ÷ Qualified Sales Opportunities Created', purpose: 'Monitors unit economics.' }
      ],
      illustrativeUseCase: {
        targetUser: 'Director of Growth Marketing',
        scenario: 'Company was 100% reliant on word-of-mouth and experienced severe revenue dips during summer months.',
        actionTaken: 'Engineered a structured multi-channel demand engine with evergreen content and paid intent capture.',
        outcomeObserved: 'Stabilized quarterly pipeline generation to 3.2x quota coverage with zero seasonal volume drops.'
      },
      visualRecommendation: {
        type: 'Demand Funnel Topology Architecture',
        description: 'Flowchart diagram mapping audience channels into qualification nodes and CRM stage transitions.'
      },
      relatedCapabilities: [
        { name: 'GTM Transformation', path: '/offerings/gtm-transformation' },
        { name: 'Mid-Market Businesses', path: '/industries/midmarket' }
      ],
      nextStepCta: { label: 'Architect Your Demand Engine', link: '#consultation' }
    },
    {
      id: 'campaign-content-journey-design',
      title: 'Campaign & Content Journey Design',
      groupName: 'Campaign & Content Architecture',
      shortSummary: 'Align educational content, technical evidence, case studies, and commercial offers to buyer decision readiness stages.',
      businessChallenge: 'Marketing produces generic thought leadership that fails to address technical objections or convince financial buyers to fund purchases.',
      whyItMatters: 'Fluffy content attracts passive students and consultants rather than commercial buyers with budget and authority.',
      whatProfitMachinesDoes: 'We map structured content journeys that guide prospects systematically from problem awareness through technical validation to business case approval.',
      howItWorks: [
        'Identify the critical questions and objections buyers encounter at each of the 4 decision stages (Awareness, Evaluation, Validation, Selection).',
        'Develop specialized technical artifacts including architectural whitepapers, benchmark reports, and security dossiers.',
        'Deploy progressive disclosure workflows that offer deeper technical data as prospect engagement increases.',
        'Equip sales teams with modular content assets to reinforce conversation topics immediately after meetings.'
      ],
      relevantInputs: ['Customer win/loss transcripts', 'Sales objection logs', 'Product technical documentation', 'Content analytics data'],
      deliverables: ['Stage-by-Stage Content Journey Map', 'Executive Technical Whitepapers', 'Sales Enablement Collateral Library'],
      businessValue: 'Accelerates deal velocity by proactively resolving technical, architectural, and financial objections before they stall sales cycles.',
      kpis: [
        { name: 'Content Pipeline Velocity Lift', formula: 'Opportunity Velocity with Content Engagement ÷ Velocity without Engagement', purpose: 'Proves content ROI.' },
        { name: 'High-Intent Content Conversion', formula: 'Commercial Inquiries from Technical Assets ÷ Total Asset Views', purpose: 'Measures asset quality.' }
      ],
      illustrativeUseCase: {
        targetUser: 'Head of Product Marketing',
        scenario: 'Enterprise prospects frequently stalled for 6 weeks during technical due diligence.',
        actionTaken: 'Designed a self-serve Technical Architecture Validation Journey with downloadable security blueprints and API benchmarks.',
        outcomeObserved: 'Compressed technical evaluation duration from 42 days to 11 days across 35 enterprise deals.'
      },
      visualRecommendation: {
        type: 'Progressive Content Decision Matrix',
        description: 'Stage-gated matrix aligning customer questions with technical proof points and conversion offers.'
      },
      relatedCapabilities: [
        { name: 'Sales Acceleration', path: '/offerings/sales-acceleration' },
        { name: 'SaaS & Recurring-Revenue', path: '/industries/saas' }
      ],
      nextStepCta: { label: 'Design Content Journeys', link: '#consultation' }
    },
    {
      id: 'ai-prospect-research',
      title: 'AI-Assisted Prospect Research',
      groupName: 'Intelligence & Research Systems',
      shortSummary: 'Automate deep account context gathering, executive background synthesis, trigger event monitoring, and outreach preparation.',
      businessChallenge: 'SDRs spend up to 40% of their workday manually copy-pasting company news, reading annual reports, and checking LinkedIn profiles.',
      whyItMatters: 'Manual research limits rep capacity, causes burnout, and still frequently results in generic, ineffective outreach emails.',
      whatProfitMachinesDoes: 'We configure autonomous research agents that ingest 10-K filings, hiring trends, technology changes, and press releases to generate instant account briefings.',
      howItWorks: [
        'Deploy automated crawlers to monitor target accounts for key commercial triggers (new VP hiring, product launches, cloud migrations).',
        'Extract strategic priorities and operational pain points from public quarterly earnings transcripts and regulatory filings.',
        'Synthesize findings into an Account Intelligence Brief delivered directly into the sales rep CRM window.',
        'Draft highly tailored, contextual outreach recommendations that reference the prospect’s specific initiatives.'
      ],
      relevantInputs: ['Target account domain lists', 'Regulatory filings (SEC 10-K/10-Q)', 'Executive job postings', 'Corporate press archives'],
      deliverables: ['Automated Account Briefing System', 'Trigger Event Monitoring Feed', 'Contextual Outreach Generator'],
      businessValue: 'Frees up 15+ hours per rep per week while dramatically improving cold outreach relevance, response rates, and meeting conversion.',
      kpis: [
        { name: 'SDR Research Efficiency Lift', formula: 'Accounts Researched per Day per Rep with AI ÷ Baseline Accounts', purpose: 'Measures capacity gain.' },
        { name: 'Personalized Outreach Response Rate', formula: 'Replies to Contextual Emails ÷ Total Contextual Emails Sent', purpose: 'Validates messaging power.' }
      ],
      illustrativeUseCase: {
        targetUser: 'Sales Development Manager with 12 SDRs',
        scenario: 'Reps were averaging only 22 personalized accounts per week due to heavy research friction.',
        actionTaken: 'Deployed AI-Assisted Prospect Research delivering pre-compiled account dossiers every morning.',
        outcomeObserved: 'Increased account outreach volume to 85 accounts per rep per week while reply rates doubled from 3.1% to 7.8%.'
      },
      visualRecommendation: {
        type: 'AI Research Workflow Diagram',
        description: 'Data ingestion flow from public filings through NLP synthesis to CRM account dossier.'
      },
      relatedCapabilities: [
        { name: 'AI Trust & Governance', path: '/offerings/ai-trust-governance' },
        { name: 'B2B Businesses', path: '/industries/b2b' }
      ],
      nextStepCta: { label: 'Automate Account Research', link: '#consultation' }
    },
    {
      id: 'buyer-intent-lead-scoring',
      title: 'Buyer Intent & Lead Scoring',
      groupName: 'Intelligence & Research Systems',
      shortSummary: 'Evaluate first-party web activity, third-party research surges, technographic fit, and engagement depth to prioritize follow-up.',
      businessChallenge: 'Sales teams call inbound leads chronologically rather than in order of purchase readiness, missing hot buyers while chasing cold tire-kickers.',
      whyItMatters: 'Studies show responding to an active buyer within 15 minutes yields 8x higher conversion than calling 2 hours later.',
      whatProfitMachinesDoes: 'We implement dynamic scoring algorithms that weigh high-value actions (pricing calculator, API docs) alongside firmographic fit to score buyer velocity.',
      howItWorks: [
        'Track behavioral engagement across website, email, documentation, and external research networks.',
        'Assign negative points for non-buying behavior (student domains, career page visits, unsubscribe actions).',
        'Calculate a composite 100-point Revenue Qualified Score (RQS) updated in real-time.',
        'Route accounts exceeding threshold scores to senior account executives for immediate phone outreach.'
      ],
      relevantInputs: ['Website tracking telemetry', 'Marketing automation logs', 'CRM account firmographics', 'Third-party intent feeds'],
      deliverables: ['Dynamic Lead Scoring Model', 'Lead Routing Rules Matrix', 'SDR Hot-Lead Alert Engine'],
      businessValue: 'Directs sales rep attention to the highest-probability opportunities, ensuring active buyers are engaged instantly.',
      kpis: [
        { name: 'Lead-to-Opportunity Velocity', formula: 'Time from Ingestion to First Qualified Meeting for High-Score Leads', purpose: 'Tracks response agility.' },
        { name: 'High-Score Close Rate', formula: 'Closed-Won Deals in Tier-1 Score ÷ Total Opportunities in Tier-1', purpose: 'Validates scoring model.' }
      ],
      illustrativeUseCase: {
        targetUser: 'VP of Revenue Operations',
        scenario: 'Sales reps complained they were drowning in 800 inbound leads a month and could not distinguish real buyers from students.',
        actionTaken: 'Implemented dynamic Buyer Intent Scoring prioritizing accounts visiting pricing and security pages simultaneously.',
        outcomeObserved: 'Filtered out 65% of tire-kickers while lift in meeting booking rate on prioritized leads reached 3.4x.'
      },
      visualRecommendation: {
        type: 'Dynamic Scoring Weight Matrix',
        description: 'Scatter plot visualizing fit score (firmographic) vs intent score (behavioral).'
      },
      relatedCapabilities: [
        { name: 'Revenue Operations', path: '/offerings/revenue-operations' },
        { name: 'Startups & Scaleups', path: '/industries/startups' }
      ],
      nextStepCta: { label: 'Implement Intent Scoring', link: '#consultation' }
    },
    {
      id: 'lead-qualification-routing',
      title: 'Lead Qualification & Routing Architecture',
      groupName: 'Routing & Conversion Systems',
      shortSummary: 'Establish objective qualification rules, automated CRM assignment logic, response-time SLAs, and friction-free sales handoffs.',
      businessChallenge: 'Leads sit untouched in CRM queues for days due to confusing territory rules, manual assignment bottlenecks, and unclear qualification criteria.',
      whyItMatters: 'Lead decay is rapid; inquiries not contacted within 24 hours experience an 80% decrease in meeting booking probability.',
      whatProfitMachinesDoes: 'We build automated routing algorithms that validate lead data, check account ownership, enforce territory rules, and alert reps within seconds.',
      howItWorks: [
        'Validate inbound email domains, company size, and geographic location via real-time API enrichment.',
        'Check existing CRM account ownership and active opportunity associations to prevent rep duplicate outreach.',
        'Apply round-robin or territory assignment rules based on account tier, rep capacity, and deal complexity.',
        'Trigger instant Slack/Teams alerts with pre-booked calendar links for high-priority prospects.'
      ],
      relevantInputs: ['CRM territory assignment tables', 'Rep quota and capacity limits', 'Calendar booking systems', 'Third-party enrichment APIs'],
      deliverables: ['Automated Lead Routing Workflow', 'Service Level Agreement (SLA) Matrix', 'Rep Notification Integration'],
      businessValue: 'Eliminates administrative routing delays, guaranteeing that qualified prospects are contacted within minutes of submitting an inquiry.',
      kpis: [
        { name: 'Speed to Lead (Lead Response Time)', formula: 'Minutes between Form Submission and First Documented Rep Outreach', purpose: 'Measures response velocity.' },
        { name: 'Routing Error Rate', formula: 'Misassigned or Disputed Leads ÷ Total Routed Leads', purpose: 'Monitors automation accuracy.' }
      ],
      illustrativeUseCase: {
        targetUser: 'Director of Global Sales Operations',
        scenario: 'Global inbound leads took an average of 46 hours to reach the correct regional rep due to complex country rules.',
        actionTaken: 'Deployed automated Lead Qualification & Routing with real-time enrichment and territory logic.',
        outcomeObserved: 'Reduced average response time from 46 hours to 4 minutes, driving a 38% increase in held demo calls.'
      },
      visualRecommendation: {
        type: 'Automated Routing Flowchart',
        description: 'Decision tree showing enrichment, territory checks, assignment, and escalation triggers.'
      },
      relatedCapabilities: [
        { name: 'Revenue Operations', path: '/offerings/revenue-operations' },
        { name: 'Mid-Market Businesses', path: '/industries/midmarket' }
      ],
      nextStepCta: { label: 'Optimize Lead Routing', link: '#consultation' }
    },
    {
      id: 'lead-nurture-orchestration',
      title: 'Lead Nurture Orchestration',
      groupName: 'Routing & Conversion Systems',
      shortSummary: 'Develop contextual follow-up sequences based on customer needs, product exploration, and buying stage rather than static drip campaigns.',
      businessChallenge: 'Cold or deferred leads are dumped into generic monthly email newsletters that offer zero relevance, causing massive unsubscribes.',
      whyItMatters: 'Over 60% of B2B leads that are not ready to buy today will purchase within 12-18 months if nurtured intelligently.',
      whatProfitMachinesDoes: 'We design behavior-triggered nurture streams that adapt content, cadence, and channels based on prospect interactions and company trigger events.',
      howItWorks: [
        'Segment deferred opportunities by specific stall reason (budget freeze, timing, evaluation deferred, competitor selected).',
        'Deliver quarterly industry benchmarks, regulatory impact analyses, and customer success stories tailored to their stall reason.',
        'Monitor target accounts for executive turnover or funding announcements that reopen buying windows.',
        'Re-alert original sales reps automatically when nurtured prospects resume high-frequency digital engagement.'
      ],
      relevantInputs: ['Closed-lost/deferred CRM opportunity reasons', 'Email engagement telemetry', 'Content consumption logs', 'Trigger event feeds'],
      deliverables: ['Adaptive Nurture Engine', 'Stall-Reason Re-engagement Playbooks', 'Dormant Account Awakening Workflows'],
      businessValue: 'Recovers hundreds of thousands of dollars in lost pipeline by systematically reactivating dormant accounts when conditions change.',
      kpis: [
        { name: 'Nurture Pipeline Reactivation Rate', formula: 'Reactivated Opportunities from Nurture ÷ Total Nurtured Accounts', purpose: 'Measures pipeline recycling.' },
        { name: 'Nurture Unsubscribe Rate', formula: 'Unsubscribed Contacts ÷ Total Contacts in Nurture Streams', purpose: 'Monitors content relevance.' }
      ],
      illustrativeUseCase: {
        targetUser: 'VP of Marketing',
        scenario: 'Database contained 18,000 stale leads from past two years with zero active marketing follow-up.',
        actionTaken: 'Launched an intelligent re-engagement campaign based on specific historical objection categories.',
        outcomeObserved: 'Reactivated 64 qualified enterprise opportunities generating $2.1M in net-new pipeline in 60 days.'
      },
      visualRecommendation: {
        type: 'Behavior-Triggered Nurture Branching Topology',
        description: 'Multi-branch workflow diagram showing dynamic path adjustment based on user actions.'
      },
      relatedCapabilities: [
        { name: 'Customer Success Engine', path: '/offerings/customer-success' },
        { name: 'SaaS & Recurring-Revenue', path: '/industries/saas' }
      ],
      nextStepCta: { label: 'Deploy Nurture Architecture', link: '#consultation' }
    },
    {
      id: 'demand-experimentation',
      title: 'Demand Experimentation',
      groupName: 'Attribution & Optimization',
      shortSummary: 'Systematically test messaging angles, audience segments, creative assets, and landing page architectures with disciplined statistical rigor.',
      businessChallenge: 'Marketing teams make campaign changes based on executive intuition or subjective committee opinions rather than structured hypotheses.',
      whyItMatters: 'Unvalidated changes risk crashing conversion rates and squandering high-performing acquisition channels.',
      whatProfitMachinesDoes: 'We run a continuous growth experimentation backlog, testing value propositions, form lengths, CTA hooks, and offer structures with clear statistical controls.',
      howItWorks: [
        'Maintain a prioritized backlog of growth hypotheses ranked by expected impact, confidence, and implementation effort (ICE score).',
        'Execute multi-variant and split tests with sufficient sample sizes to achieve 95% statistical significance.',
        'Isolate confounding external factors (seasonality, holiday spikes, sales team changes) from experiment results.',
        'Document learnings in a centralized Experimentation Knowledge Base and roll out winning variants site-wide.'
      ],
      relevantInputs: ['Website traffic and conversion logs', 'Ad platform campaign performance data', 'Landing page A/B test histories', 'Qualitative user session recordings'],
      deliverables: ['Growth Experimentation Backlog', 'Statistical Testing Framework', 'Winning Variant Rollout Playbooks'],
      businessValue: 'Drives compound conversion rate improvements across the entire funnel, steadily decreasing customer acquisition costs over time.',
      kpis: [
        { name: 'Experiment Velocity', formula: 'Valid Statistical Experiments Completed per Month', purpose: 'Tracks team agility.' },
        { name: 'Experiment Win Rate', formula: 'Statistically Significant Positive Tests ÷ Total Completed Tests', purpose: 'Measures hypothesis quality.' }
      ],
      illustrativeUseCase: {
        targetUser: 'Head of Growth',
        scenario: 'Landing page conversion on demo requests had stagnated at 1.8% for three quarters.',
        actionTaken: 'Ran 6 structured experiments testing interactive ROI calculators vs static form fields.',
        outcomeObserved: 'Winning interactive calculator lifted page conversion to 4.2%, effectively doubling inbound lead flow at zero extra ad spend.'
      },
      visualRecommendation: {
        type: 'Experimentation Sprint Velocity Tracker',
        description: 'Cumulative conversion lift curve showing incremental gains across sequential test cycles.'
      },
      relatedCapabilities: [
        { name: 'Growth Intelligence', path: '/offerings/growth-intelligence' },
        { name: 'B2C Businesses', path: '/industries/b2c' }
      ],
      nextStepCta: { label: 'Launch Demand Experiments', link: '#consultation' }
    },
    {
      id: 'pipeline-attribution-analytics',
      title: 'Pipeline Attribution & Demand Analytics',
      groupName: 'Attribution & Optimization',
      shortSummary: 'Connect marketing investments, digital touches, and SDR outreach directly to closed-won bookings, recurring revenue, and pipeline velocity.',
      businessChallenge: 'CMOs struggle to defend their marketing budgets to the CFO because existing analytics only report clicks, impressions, and vanity leads.',
      whyItMatters: 'Without revenue attribution, CFOs cut marketing budgets during downturns, strangling future pipeline creation.',
      whatProfitMachinesDoes: 'We implement multi-touch, multi-stakeholder revenue attribution models that trace every closed deal back through its complete touchpoint history.',
      howItWorks: [
        'Capture and stitch all digital and offline touches across anonymous visits, form fills, sales emails, and executive dinners.',
        'Associate touches across all contacts associated with the target account opportunity record.',
        'Apply weighted multi-touch attribution algorithms (W-shaped, U-shaped, and Markov chain models).',
        'Deliver executive dashboards illustrating true return on ad spend (ROAS) and marketing pipeline contribution.'
      ],
      relevantInputs: ['Ad spend records across all platforms', 'Web analytics event streams', 'CRM opportunity and contact history tables', 'Offline event attendee lists'],
      deliverables: ['Multi-Touch Attribution Dashboard', 'Marketing ROI & CAC Payback Model', 'Channel Budget Allocation Recommendations'],
      businessValue: 'Proves the exact ARR return of marketing spend, enabling leadership to double down on winning channels with complete financial confidence.',
      kpis: [
        { name: 'Marketing Sourced Pipeline Contribution', formula: 'ARR Value of Marketing-Initiated Deals ÷ Total Pipeline ARR', purpose: 'Proves origin impact.' },
        { name: 'CAC Payback Period', formula: 'Total Sales & Marketing Spend ÷ (New ARR × Gross Margin %)', purpose: 'Tracks capital recovery.' }
      ],
      illustrativeUseCase: {
        targetUser: 'CMO & Chief Financial Officer',
        scenario: 'Board planned to cut marketing budget by 30% due to skepticism over ad spending effectiveness.',
        actionTaken: 'Implemented multi-touch pipeline attribution connecting top-of-funnel content to 72% of closed enterprise ARR.',
        outcomeObserved: 'Demonstrated marketing drove $14.2M in attributable revenue, convincing the board to increase the marketing budget by 20% instead.'
      },
      visualRecommendation: {
        type: 'Multi-Touch Attribution Chord Diagram',
        description: 'Chord diagram visualizing cross-channel synergy between paid ads, content, SDR outreach, and final bookings.'
      },
      relatedCapabilities: [
        { name: 'Revenue Operations', path: '/offerings/revenue-operations' },
        { name: 'Growth Intelligence', path: '/offerings/growth-intelligence' }
      ],
      nextStepCta: { label: 'Inspect Pipeline Attribution', link: '#consultation' }
    }
  ],
  workflow: [
    {
      stepNumber: '01',
      phase: 'ALIGN',
      title: 'ICP & Funnel Telemetry Calibration',
      duration: 'Weeks 1–2',
      objective: 'Define empirical target account criteria, audit historical channel economics, and align sales-marketing qualification standards.',
      keyActivities: ['Construct target account universe', 'Formulate 100-point ICP rubric', 'Audit marketing attribution data'],
      outputDeliverable: 'Target Account Master File & Qualification SLA',
      decisionGate: 'Sales and marketing VP sign-off on Sales-Accepted Lead criteria.'
    },
    {
      stepNumber: '02',
      phase: 'ARCHITECT',
      title: 'Campaign & Content Infrastructure',
      duration: 'Weeks 2–4',
      objective: 'Build multi-touch ABM campaigns, technical validation content, dynamic landing pages, and lead scoring models.',
      keyActivities: ['Produce stage-specific technical collateral', 'Configure intent-based ad audiences', 'Implement dynamic lead scoring in CRM'],
      outputDeliverable: 'ABM Campaign Blueprint & Dynamic Scoring Engine',
      decisionGate: 'Executive approval of messaging narrative and campaign spend allocations.'
    },
    {
      stepNumber: '03',
      phase: 'LAUNCH',
      title: 'Orchestrated Outbound & Campaign Launch',
      duration: 'Weeks 4–6',
      objective: 'Launch synchronized digital campaigns, deploy AI prospect research for SDRs, and activate automated routing.',
      keyActivities: ['Launch multi-channel ad campaigns', 'Deploy AI research dossiers to SDR queues', 'Activate real-time Slack/CRM alerts'],
      outputDeliverable: 'Live Demand Generation Engine',
      decisionGate: 'First bi-weekly pipeline review and speed-to-lead verification.'
    },
    {
      stepNumber: '04',
      phase: 'SCALE',
      title: 'Attribution & Experimentation Cadence',
      duration: 'Weeks 6–8+',
      objective: 'Deploy multi-touch attribution reporting, launch continuous experimentation backlog, and optimize channel CAC.',
      keyActivities: ['Launch multi-touch attribution dashboard', 'Run weekly A/B experimentation sprints', 'Reallocate budget to highest-yield channels'],
      outputDeliverable: 'Closed-Loop Pipeline Attribution Cockpit',
      decisionGate: 'Monthly board-level revenue and CAC payback reporting.'
    }
  ],
  metrics: [
    {
      metricName: 'Sales-Accepted Opportunity Rate (SAO %)',
      category: 'Commercial',
      definition: 'Percentage of marketing-generated leads that sales reps accept and advance into active pipeline after discovery.',
      formula: 'Sales-Accepted Opportunities ÷ Total Delivered Marketing Inquiries',
      benchmarkContext: 'World-class demand engines achieve >75% acceptance; legacy MQL models typically fall below 20%.'
    },
    {
      metricName: 'Cost per Qualified Opportunity (CPQO)',
      category: 'Financial & Retention',
      definition: 'Total sales and marketing expenditure required to generate one fully qualified, sales-accepted opportunity.',
      formula: 'Total Attributable Acquisition Spend ÷ Qualified Opportunities Created',
      benchmarkContext: 'Monitored across channels to detect budget waste and guide reallocation.'
    },
    {
      metricName: 'Target Account Engagement Depth',
      category: 'Operational',
      definition: 'Percentage of identified Tier-1 target accounts exhibiting multi-stakeholder intent and content consumption.',
      formula: 'Engaged Tier-1 Accounts with >3 Personas Active ÷ Total Tier-1 Accounts',
      benchmarkContext: 'High engagement depth directly correlates with 2.8x higher win rates.'
    },
    {
      metricName: 'Speed to Lead (Response Latency)',
      category: 'Productivity',
      definition: 'Median elapsed time between a prospect form submission and initial sales rep contact attempt.',
      formula: 'Median (Timestamp of First Outreach - Timestamp of Inbound Form)',
      benchmarkContext: 'Under 10 minutes produces optimal conversion; >2 hours sees 70% drop in booking.'
    },
    {
      metricName: 'Pipeline Attribution Coverage',
      category: 'Commercial',
      definition: 'Proportion of total closed-won ARR that can be mathematically traced to specific demand generation touchpoints.',
      formula: 'Attributed ARR from Analyzed Touchpoints ÷ Total Closed-Won ARR',
      benchmarkContext: 'Comprehensive multi-touch attribution models achieve >85% coverage.'
    },
    {
      metricName: 'CAC Payback Horizon',
      category: 'Financial & Retention',
      definition: 'Number of months required for gross margin from new customers to repay their customer acquisition cost.',
      formula: 'Blended CAC ÷ (Monthly Recurring Revenue × Gross Margin %)',
      benchmarkContext: 'Healthy B2B SaaS targets 12-18 months; enterprise models target <12 months.'
    }
  ],
  faqs: [
    {
      question: 'How does Demand Engineering prevent the standard marketing-vs-sales friction?',
      answer: 'By replacing subjective lead volume metrics with an agreed-upon Sales-Accepted Opportunity (SAO) contract. Marketing is measured on pipeline generated and revenue contribution, while sales agrees to strict speed-to-lead response SLAs on verified Tier-1 accounts, aligning both teams around closed-won revenue.'
    },
    {
      question: 'Can Demand Engineering work with small sales teams or single-rep founders?',
      answer: 'Yes. Our AI-Assisted Prospect Research and automated routing workflows are specifically designed to eliminate manual administrative friction, allowing a single founder or 2-person sales team to execute the target-account coverage of a 10-person SDR team.'
    },
    {
      question: 'How do you capture dark-funnel intent without violating privacy regulations?',
      answer: 'We utilize fully compliant, privacy-by-design frameworks. First-party intent is captured from consented website engagement; third-party intent is gathered at the aggregated firmographic/IP level from public and commercial research consortiums with zero personal PII harvesting.'
    },
    {
      question: 'What is the typical timeframe to see net-new qualified pipeline?',
      answer: 'Initial target account list engineering and intent scoring are configured within 2 to 3 weeks. Synchronized ABM and outbound campaigns typically generate the first wave of qualified sales meetings within 30 to 45 days of launch.'
    },
    {
      question: 'How do you handle attribution across long 9-month enterprise sales cycles?',
      answer: 'We employ multi-touch, multi-stakeholder attribution models that track all organizational touches across the entire 9-month horizon, weighting early-stage discovery touches, mid-stage technical validation content, and late-stage proposal assists appropriately.'
    }
  ],
  primaryCtaText: 'Build Your Demand Engine',
  secondaryCtaText: 'Discuss Pipeline Priorities'
};

