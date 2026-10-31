import { PageContentData } from '../../app/types/offeringsIndustries';

export const customerSuccessData: PageContentData = {
  slug: 'customer-success',
  route: '/offerings/customer-success',
  pageNumber: 'OFFERING 06',
  pageCategory: 'Offering',
  title: 'Customer Success Engine',
  headlineHighlight: 'Turn Customer Value Into Long-Term Revenue Growth.',
  eyebrow: 'ONBOARDING VELOCITY, RETENTION TELEMETRY & ACCOUNT EXPANSION',
  description: 'Transform customer adoption, time-to-value acceleration, proactive health intelligence, churn mitigation, and organic account expansion into a predictable recurring revenue expansion engine.',
  targetAudience: {
    primary: 'Chief Customer Officers, VPs of Customer Success, and Heads of Client Services',
    secondary: 'Account Management Directors, Customer Onboarding Leads, and Renewal Managers',
    executives: 'CEOs, CFOs, and SaaS Founders seeking predictable Net Revenue Retention (NRR).'
  },
  heroVisual: {
    imageSrc: '/images/hero-data-intelligence.png',
    altText: 'Customer Success Engine & Lifetime Value Retention Cockpit',
    badgeText: 'Retention Engine: Active Health Telemetry'
  },
  keyStats: [
    { label: 'Net Revenue Retention', metric: '128.4%', context: 'Top-quartile customer expansion benchmark' },
    { label: 'Time-to-Value', metric: '-55%', context: 'Compression in customer onboarding duration' },
    { label: 'Gross Churn Reduction', metric: '-42%', context: 'Early intervention on at-risk renewal cohorts' },
    { label: 'Expansion Contribution', metric: '44%', context: 'Share of net-new ARR from existing customer accounts' }
  ],
  challenges: [
    {
      id: 'f-onboarding-drag',
      title: 'Prolonged Onboarding & Time-to-Value Drag',
      situation: 'Customers sign contracts with high enthusiasm but spend 90-120 days trapped in complex implementation meetings before realizing any business value.',
      whyItMatters: 'Delayed time-to-value creates buyer remorse, frustrates customer champions, and sets the stage for first-year churn.',
      commercialConsequence: 'Customer dissatisfaction, delayed revenue recognition, and ballooning services overhead.',
      whyTraditionalMethodsFail: 'Teams manage onboarding with messy spreadsheets and manual email reminders rather than standardized milestone automation.',
      requiredExecutiveDecision: 'Standardize customer onboarding into automated 30-day milestone sprints with verified first-value criteria.'
    },
    {
      id: 'f-silent-churn',
      title: 'Silent Churn & Reactive Firefighting',
      situation: 'Customer success managers discover an account plans to cancel on the day their renewal notice arrives, having had zero visibility into declining usage.',
      whyItMatters: 'Attempting to save an account 30 days before renewal is rarely successful; by then, the customer has already selected a rival.',
      commercialConsequence: 'Unanticipated gross revenue churn, board-level ARR misses, and team panic.',
      whyTraditionalMethodsFail: 'CSMs rely on subjective relationship check-ins rather than objective telemetry tracking login drops, feature decay, and stakeholder turnover.',
      requiredExecutiveDecision: 'Deploy algorithmic Customer Health telemetry to trigger automated intervention workflows 120 days before renewal dates.'
    },
    {
      id: 'f-missed-expansion',
      title: 'Uncapitalized Account Expansion Opportunities',
      situation: 'Customers successfully deploy software in one department and love the product, but no one systematically maps opportunities across other divisions.',
      whyItMatters: 'Acquiring an expansion dollar from a satisfied existing customer costs 70% less than closing a cold net-new logo.',
      commercialConsequence: 'Stagnant Net Revenue Retention (NRR), high blended CAC, and missed multi-million-dollar expansion revenue.',
      whyTraditionalMethodsFail: 'Customer success teams view themselves purely as technical support rather than commercial revenue expansion partners.',
      requiredExecutiveDecision: 'Equip CS teams with automated account white-space mapping, usage threshold alerts, and commercial expansion playbooks.'
    }
  ],
  capabilities: [
    {
      id: 'customer-onboarding-activation',
      title: 'Customer Onboarding & Activation Architecture',
      groupName: 'Onboarding & Adoption Velocity',
      shortSummary: 'Structure accelerated customer onboarding journeys, clear technical milestones, automated kickoff environments, and rapid user activation.',
      businessChallenge: 'Customer onboarding is an inconsistent black box; each implementation team uses different checklists, causing massive project delays.',
      whyItMatters: 'Customers who fail to reach active usage milestones within the first 30 days are 3x more likely to churn at the end of year one.',
      whatProfitMachinesDoes: 'We design standardized, automated onboarding workflows with mutual client accountability milestones and rapid time-to-first-value gates.',
      howItWorks: [
        'Map the critical path of technical setup, data ingestion, user provisioning, and initial workflow execution.',
        'Deploy collaborative customer onboarding portals that give client champions complete visibility into project milestones.',
        'Automate routine provisioning webhooks and welcome sequences to engage end users immediately upon contract signature.',
        'Establish strict 30-day "First Value Realization" certification gates signed off by both teams.'
      ],
      relevantInputs: ['Product technical configuration specs', 'Historical onboarding duration logs', 'User provisioning documentation', 'Client implementation roles'],
      deliverables: ['Standardized 30-Day Onboarding Blueprint', 'Interactive Client Milestone Portal', 'Automated Provisioning Workflow Integration'],
      businessValue: 'Cuts customer onboarding duration by 50%, eliminates buyer remorse, and guarantees rapid initial user adoption.',
      kpis: [
        { name: 'Time to Onboarding Completion', formula: 'Calendar Days from Contract Signature to Formal Project Sign-off', purpose: 'Measures implementation velocity.' },
        { name: '30-Day User Activation Rate', formula: 'Provisioned Users Completing Core Action ÷ Total Provisioned Users', purpose: 'Monitors early adoption.' }
      ],
      illustrativeUseCase: {
        targetUser: 'VP of Customer Success',
        scenario: 'Enterprise client implementations averaged 114 days, resulting in 22% of new customers requesting contract cancellations before launch.',
        actionTaken: 'Architected standardized 30-Day Onboarding Sprints with automated kickoff portals and weekly executive status gates.',
        outcomeObserved: 'Compressed average onboarding duration to 28 days and eliminated 100% of pre-launch cancellations.'
      },
      visualRecommendation: {
        type: '30-Day Onboarding Critical Path Gantt',
        description: 'Visual timeline contrasting legacy 90-day onboarding against accelerated 30-day milestone architecture.'
      },
      relatedCapabilities: [
        { name: 'GTM Transformation', path: '/offerings/gtm-transformation' },
        { name: 'SaaS & Recurring-Revenue', path: '/industries/saas' }
      ],
      nextStepCta: { label: 'Accelerate Onboarding', link: '#consultation' }
    },
    {
      id: 'time-to-value-optimization',
      title: 'Time-to-Value (TTV) Optimization',
      groupName: 'Onboarding & Adoption Velocity',
      shortSummary: 'Isolate the critical customer aha-moment and engineer rapid operational paths to deliver measurable business ROI within weeks of signing.',
      businessChallenge: 'Customers buy software expecting immediate business transformation, but are forced to slog through complex configuration before seeing any ROI.',
      whyItMatters: 'Executive sponsors lose interest if they cannot show tangible wins to their board or CFO in their first quarterly budget review.',
      whatProfitMachinesDoes: 'We engineer "Fast-Track Value Sprints" that deliver an immediate, quantified operational win within the first 14 business days.',
      howItWorks: [
        'Identify the single high-impact use case that requires minimum data integration while delivering maximum executive visibility.',
        'Deploy pre-configured industry templates and data connectors to launch the beachhead use case on Day 7.',
        'Generate an automated "First Value Executive Dossier" proving initial operational savings or pipeline visibility.',
        'Leverage the momentum of the quick win to expand into broader platform configurations with full executive backing.'
      ],
      relevantInputs: ['Product core telemetry event logs', 'Customer business case expectations', 'Pre-configured workflow templates', 'Fast-track integration connectors'],
      deliverables: ['14-Day Fast-Track Value Blueprint', 'First-Value Executive Reporting Dossier', 'Pre-Configured Industry Templates'],
      businessValue: 'Validates the buyer’s purchase decision instantly, securing long-term executive sponsorship and protecting annual renewals.',
      kpis: [
        { name: 'Time to First Value Realization', formula: 'Days Elapsed from Contract Execution to First Quantified ROI Metric', purpose: 'Measures speed to value.' },
        { name: 'Executive Sponsor Confidence Score', formula: 'Client Executive Net Promoter Score (NPS) at Day 30', purpose: 'Monitors executive buy-in.' }
      ],
      illustrativeUseCase: {
        targetUser: 'Head of Client Services',
        scenario: 'Analytics platform required 6 months to ingest all corporate databases before generating reports, frustrating enterprise buyers.',
        actionTaken: 'Engineered a Fast-Track Sprint that ingested just one core CRM table to deliver a pipeline leakage audit on Day 10.',
        outcomeObserved: 'Delivered $140k in identified pipeline leaks within two weeks, turning skeptical buyers into passionate internal champions.'
      },
      visualRecommendation: {
        type: 'Time-to-Value Acceleration Horizon',
        description: 'Curve showing cumulative customer perceived value over time contrasting fast-track sprints vs legacy rollouts.'
      },
      relatedCapabilities: [
        { name: 'Sales Acceleration', path: '/offerings/sales-acceleration' },
        { name: 'Mid-Market Businesses', path: '/industries/midmarket' }
      ],
      nextStepCta: { label: 'Optimize Time to Value', link: '#consultation' }
    },
    {
      id: 'customer-health-intelligence',
      title: 'Customer Health Intelligence',
      groupName: 'Retention & Health Telemetry',
      shortSummary: 'Combine permitted software usage, license adoption, support ticket sentiment, executive sponsor engagement, and billing telemetry into an objective score.',
      businessChallenge: 'CSMs rely on "green/yellow/red" subjective status ratings based on whether they had a nice chat with their customer contact.',
      whyItMatters: 'Subjective ratings conceal catastrophic operational decay; 70% of churned accounts were rated "green" 90 days before canceling.',
      whatProfitMachinesDoes: 'We build multi-dimensional Customer Health Index (CHI) algorithms that objectively score customer vitality based on real system and commercial data.',
      howItWorks: [
        'Ingest authorized daily/weekly product telemetry (active user ratios, core feature utilization, API call volume).',
        'Incorporate commercial telemetry including contract payment timeliness, open support escalations, and executive sponsor attendance.',
        'Calculate an automated Customer Health Score (0-100) updated daily in CRM and CS dashboards.',
        'Trigger automated alerts and remediation playbooks whenever an account’s health score drops below threshold levels.'
      ],
      relevantInputs: ['Product telemetry event feeds', 'Zendesk/Jira support ticket sentiment', 'Stripe/NetSuite billing status', 'Executive meeting attendance logs'],
      deliverables: ['Automated Customer Health Index Engine', 'Real-Time Health Telemetry Dashboard', 'Proactive Remediation Trigger Workflows'],
      businessValue: 'Provides executive leadership with an unvarnished, accurate view of customer retention risk, eliminating surprise churn.',
      kpis: [
        { name: 'Customer Health Index (CHI)', formula: 'Weighted Multi-Factor Telemetry Score (Usage 40% + Engagement 30% + Sentiment 20% + Billing 10%)', purpose: 'Objective health.' },
        { name: 'Health-to-Renewal Correlation', formula: 'Renewal Rate of Accounts with CHI >80 ÷ Renewal Rate of Accounts with CHI <50', purpose: 'Validates model.' }
      ],
      illustrativeUseCase: {
        targetUser: 'Chief Customer Officer',
        scenario: 'Company lost $1.8M in enterprise ARR from accounts that account managers had classified as completely healthy.',
        actionTaken: 'Implemented automated Customer Health Intelligence tracking login frequency decay and unassigned seat counts.',
        outcomeObserved: 'Correctly identified 100% of at-risk accounts 90 days before renewal, enabling CSMs to save 78% of vulnerable ARR.'
      },
      visualRecommendation: {
        type: 'Multi-Factor Customer Health Radar',
        description: 'Multi-dimensional radar plotting product usage, executive engagement, support sentiment, and commercial stability.'
      },
      relatedCapabilities: [
        { name: 'Revenue Operations', path: '/offerings/revenue-operations' },
        { name: 'SaaS & Recurring-Revenue', path: '/industries/saas' }
      ],
      nextStepCta: { label: 'Deploy Health Intelligence', link: '#consultation' }
    },
    {
      id: 'churn-risk-detection',
      title: 'Algorithmic Churn Risk Detection',
      groupName: 'Retention & Health Telemetry',
      shortSummary: 'Detect subtle behavioral leading indicators of churn (executive sponsor departures, login drop-offs, unresolved bug tickets) 120 days early.',
      businessChallenge: 'CS teams find out a customer is unhappy when the cancellation email arrives, after the customer has already decided not to renew.',
      whyItMatters: 'Late-stage churn intervention has less than a 15% success rate; by the time notice is served, the account is effectively lost.',
      whatProfitMachinesDoes: 'We deploy machine learning models trained on historical churn data to flag early micro-signals of customer dissatisfaction and disengagement.',
      howItWorks: [
        'Analyze historical churn cohorts to extract the subtle behavioral patterns that preceded cancellation 3-6 months prior.',
        'Monitor target accounts for critical trigger events (key champion leaves company, support ticket reopen count spikes, weekly logins drop by >20%).',
        'Classify at-risk accounts by churn risk type (Product Fit, Champion Loss, Value Perception, Pricing Pressure).',
        'Dispatch tailored Executive Save Playbooks to re-engage senior stakeholders before the renewal window opens.'
      ],
      relevantInputs: ['Historical churned customer logs', 'Employee LinkedIn departure alerts for champions', 'Product login frequency histories', 'Support ticket escalation records'],
      deliverables: ['Predictive Churn Risk Model', 'Executive Save Playbooks by Risk Type', 'Early-Warning Risk Alert Integration'],
      businessValue: 'Gives teams a 90-120 day advance warning window to diagnose customer frustration, re-establish value, and rescue revenue.',
      kpis: [
        { name: 'Churn Early-Warning Lead Time', formula: 'Average Days Elapsed between Risk Alert and Scheduled Contract Renewal Date', purpose: 'Measures advance notice.' },
        { name: 'At-Risk Account Save Rate', formula: 'Successfully Renewed Accounts Flagged as At-Risk ÷ Total At-Risk Accounts', purpose: 'Measures save efficacy.' }
      ],
      illustrativeUseCase: {
        targetUser: 'VP of Customer Success',
        scenario: 'Enterprise SaaS provider suffered 18% annual gross revenue churn, with accounts canceling without prior warning.',
        actionTaken: 'Deployed Churn Risk Detection models alerting CSMs whenever a customer champion stopped attending monthly reviews.',
        outcomeObserved: 'Cut annual gross revenue churn from 18% to 8.2% in the first full year of deployment.'
      },
      visualRecommendation: {
        type: 'Predictive Churn Risk Scatter Matrix',
        description: 'Plot of accounts by contract ARR value vs probability of churn, highlighting high-priority intervention targets.'
      },
      relatedCapabilities: [
        { name: 'Growth Intelligence', path: '/offerings/growth-intelligence' },
        { name: 'Enterprise Organizations', path: '/industries/enterprise' }
      ],
      nextStepCta: { label: 'Detect Churn Risks', link: '#consultation' }
    },
    {
      id: 'retention-renewal-management',
      title: 'Retention & Renewal Management Architecture',
      groupName: 'Retention & Health Telemetry',
      shortSummary: 'Establish disciplined renewal cadences, 90-day commercial milestones, price escalator enforcement, and multi-year contract renewals.',
      businessChallenge: 'Renewals are treated as administrative paperwork handled by account managers 15 days before expiration, resulting in frantic negotiations.',
      whyItMatters: 'Last-minute renewals forfeit commercial leverage, invite procurement discounts, and create unpredictable quarter-end cash flow.',
      whatProfitMachinesDoes: 'We design structured, calendar-driven Renewal Operating Cadences that initiate commercial reviews 90-120 days prior to contract end.',
      howItWorks: [
        'Establish an automated 120-Day Renewal Pipeline in CRM with dedicated stages (Value Review, Commercial Scoping, Agreement Sent, Executed).',
        'Conduct formal 90-Day Executive Business Reviews (EBRs) proving verified ROI and presenting the next year’s strategic roadmap.',
        'Enforce standard contractual annual price escalation adjustments (3-7%) to protect against inflationary margin erosion.',
        'Incentivize multi-year contract conversions with structured trade-off matrices.'
      ],
      relevantInputs: ['Contract renewal calendar schedules', 'Customer business review decks', 'Contractual price escalator clauses', 'Historical renewal negotiation logs'],
      deliverables: ['120-Day Renewal Operating Cadence', 'Executive Business Review (EBR) Template', 'Contract Escalator Enforcement Playbook'],
      businessValue: 'Transforms renewals from high-stress emergencies into smooth commercial milestones that predictably compound recurring revenue.',
      kpis: [
        { name: 'Gross Revenue Retention (GRR)', formula: '(Starting ARR - Churn - Contraction) ÷ Starting ARR', purpose: 'Measures core base stability.' },
        { name: 'On-Time Renewal Rate', formula: 'Contracts Executed on or before Expiration Date ÷ Total Maturing Contracts', purpose: 'Tracks renewal hygiene.' }
      ],
      illustrativeUseCase: {
        targetUser: 'Director of Renewals & Account Management',
        scenario: 'Over 40% of customer renewals closed past contract expiration dates, forcing the company to provide free service while negotiating.',
        actionTaken: 'Implemented a 120-Day Renewal Operating Cadence with mandatory 90-day executive business reviews.',
        outcomeObserved: 'Increased on-time renewal rate to 94% and increased multi-year contract commitments by 65%.'
      },
      visualRecommendation: {
        type: '120-Day Renewal Milestone Cadence Timeline',
        description: 'Timeline illustrating the structured stages at Day 120, Day 90, Day 60, Day 30, and Close.'
      },
      relatedCapabilities: [
        { name: 'Revenue Operations', path: '/offerings/revenue-operations' },
        { name: 'B2B Businesses', path: '/industries/b2b' }
      ],
      nextStepCta: { label: 'Structure Renewal Cadence', link: '#consultation' }
    },
    {
      id: 'expansion-opportunity-intelligence',
      title: 'Expansion Opportunity Intelligence',
      groupName: 'Account Expansion & Growth',
      shortSummary: 'Monitor customer usage thresholds, team capacity constraints, and organizational whitespace to identify organic expansion triggers.',
      businessChallenge: 'CSMs are unaware that customer teams are maxing out licenses, sharing logins, or desperately need additional product modules.',
      whyItMatters: 'Unmonitored usage limits lead to poor customer experience or unauthorized workarounds rather than natural contract expansion.',
      whatProfitMachinesDoes: 'We deploy automated Expansion Telemetry that alerts commercial teams the moment accounts approach license caps or explore new features.',
      howItWorks: [
        'Track real-time account consumption metrics against contracted limits (seats allocated, API call volume, storage thresholds).',
        'Trigger automated commercial alerts when accounts sustain >85% capacity utilization for 14 consecutive days.',
        'Monitor organizational expansion signals such as new subsidiary acquisitions or division hiring in prospect accounts.',
        'Generate custom expansion proposals reflecting the customer’s projected usage growth curves.'
      ],
      relevantInputs: ['Product consumption and meter telemetry', 'Contracted entitlement thresholds', 'Corporate parent-subsidiary directories', 'Feature click logs'],
      deliverables: ['Expansion Telemetry Alert Engine', 'Account Whitespace Mapping Tool', 'Automated Tier-Upgrade Proposal Generator'],
      businessValue: 'Drives frictionless, high-margin expansion ARR by expanding customer contracts at the exact moment of verified operational need.',
      kpis: [
        { name: 'Expansion Pipeline Velocity', formula: 'Qualified Expansion ARR Generated ÷ Total Active Accounts', purpose: 'Monitors organic growth.' },
        { name: 'Capacity-Triggered Upgrade Rate', formula: 'Accounts Upgrading upon Reaching 85% Utilization ÷ Total High-Utilization Accounts', purpose: 'Measures trigger accuracy.' }
      ],
      illustrativeUseCase: {
        targetUser: 'VP of Commercial Expansion',
        scenario: 'Customers were hitting their 50-user license limits and sharing passwords rather than purchasing additional seats.',
        actionTaken: 'Configured automated Expansion Intelligence triggering tailored enterprise tier upgrades at 85% capacity.',
        outcomeObserved: 'Generated $2.4M in frictionless expansion ARR in two quarters with zero outbound sales friction.'
      },
      visualRecommendation: {
        type: 'Capacity Utilization & Expansion Threshold Curve',
        description: 'Area graph showing customer usage growth approaching contracted ceiling and triggering automated expansion tiers.'
      },
      relatedCapabilities: [
        { name: 'Sales Acceleration', path: '/offerings/sales-acceleration' },
        { name: 'SaaS & Recurring-Revenue', path: '/industries/saas' }
      ],
      nextStepCta: { label: 'Unlock Expansion Signals', link: '#consultation' }
    },
    {
      id: 'cross-sell-upsell-orchestration',
      title: 'Cross-Sell & Upsell Orchestration',
      groupName: 'Account Expansion & Growth',
      shortSummary: 'Equip customer success and account management teams with structured modular offerings, division cross-sell playbooks, and commercial proposals.',
      businessChallenge: 'Account managers lack the commercial confidence or materials to introduce new product modules to existing clients, fearing they might disrupt relationships.',
      whyItMatters: 'Leaving cross-sell opportunities unpursued allows competitors to enter existing accounts with adjacent solutions, creating long-term replacement risk.',
      whatProfitMachinesDoes: 'We engineer structured Cross-Sell & Upsell Playbooks that position new modules as natural evolutions to the customer’s proven business success.',
      howItWorks: [
        'Map your modular product portfolio against specific customer maturity stages and organizational departments.',
        'Identify complementary product add-ons that solve adjacent operational headaches for current champions.',
        'Equip CSMs and account directors with value-oriented expansion presentation decks and customer co-marketing business cases.',
        'Structure pilot expansion terms that allow customers to evaluate new modules with zero commercial disruption.'
      ],
      relevantInputs: ['Product module compatibility matrices', 'Existing customer adoption profiles', 'Customer business goals and strategic plans', 'Case studies of multi-module customers'],
      deliverables: ['Modular Cross-Sell Playbook Collection', 'Account Expansion Pitch Decks', 'Pilot Evaluation Agreement Templates'],
      businessValue: 'Empowers customer success teams to comfortably drive high-value commercial expansion, dramatically increasing account lifetime value.',
      kpis: [
        { name: 'Multi-Product Adoption Ratio', formula: 'Customer Accounts Utilizing ≥2 Distinct Modules ÷ Total Active Accounts', purpose: 'Measures account stickiness.' },
        { name: 'Cross-Sell Win Rate', formula: 'Closed-Won Cross-Sell Opportunities ÷ Total Evaluated Expansion Pursuits', purpose: 'Tracks cross-sell success.' }
      ],
      illustrativeUseCase: {
        targetUser: 'Director of Strategic Accounts',
        scenario: 'Company had developed an advanced compliance module, but 90% of existing customers were unaware it existed.',
        actionTaken: 'Launched an Orchestrated Cross-Sell campaign highlighting recent regulatory changes to current customers.',
        outcomeObserved: 'Converted 34% of existing accounts to the compliance module, driving $3.1M in incremental recurring revenue in 6 months.'
      },
      visualRecommendation: {
        type: 'Modular Product Maturity Matrix',
        description: 'Customer maturity pathway showing how core adoption naturally unlocks Tier-2 and Tier-3 advanced modules.'
      },
      relatedCapabilities: [
        { name: 'GTM Transformation', path: '/offerings/gtm-transformation' },
        { name: 'Enterprise Organizations', path: '/industries/enterprise' }
      ],
      nextStepCta: { label: 'Orchestrate Account Expansion', link: '#consultation' }
    },
    {
      id: 'customer-journey-analytics',
      title: 'Customer Journey & Friction Analytics',
      groupName: 'Lifecycle Intelligence & VOC',
      shortSummary: 'Map and measure the full customer post-sale journey to locate hidden operational friction, support bottlenecks, and adoption drops.',
      businessChallenge: 'Leadership assumes the customer journey is smooth, unaware that clients struggle with buggy integrations, confusing UI, or unhelpful support.',
      whyItMatters: 'Accumulated operational friction destroys customer goodwill, driving silent disengagement and eventual contract non-renewal.',
      whatProfitMachinesDoes: 'We analyze post-sales telemetry across support tickets, onboarding milestones, feature usage, and survey responses to map customer friction points.',
      howItWorks: [
        'Stitch customer journey data from onboarding project logs, support desks, in-app telemetry, and billing portals.',
        'Identify recurring drop-off points where user activity stalls or support ticket volumes spike.',
        'Calculate stage-specific friction indices across the 4 key post-sale phases: Setup, Adoption, Expansion, and Renewal.',
        'Deliver prioritized product and operational engineering recommendations to eliminate recurring customer pain points.'
      ],
      relevantInputs: ['In-app user session telemetry', 'Support ticket tags and resolution times', 'Onboarding milestone completion logs', 'Customer satisfaction feedback'],
      deliverables: ['Customer Journey Friction Heatmap', 'Support Ticket Root-Cause Teardown', 'Product-Led Retention Improvement Plan'],
      businessValue: 'Eliminates structural product and operational friction, leading to happier customers, fewer support tickets, and effortless contract renewals.',
      kpis: [
        { name: 'Customer Journey Friction Index', formula: 'Weighted support tickets + onboarding delays per active customer account', purpose: 'Tracks friction.' },
        { name: 'Support Ticket Escalation Rate', formula: 'Escalated Tier-3 Engineering Tickets ÷ Total Support Tickets', purpose: 'Measures issue severity.' }
      ],
      illustrativeUseCase: {
        targetUser: 'Chief Product Officer & VP of CS',
        scenario: 'Support team was overwhelmed with 1,200 monthly tickets regarding API credential setup errors.',
        actionTaken: 'Conducted Customer Journey Analytics, uncovering a single confusing configuration screen.',
        outcomeObserved: 'Redesigned the API onboarding workflow, cutting total support ticket volume by 42% in 30 days.'
      },
      visualRecommendation: {
        type: 'Customer Journey Friction Waterfall',
        description: 'Lifecycle flow highlighting friction points, sentiment drops, and resolution bottlenecks across the journey.'
      },
      relatedCapabilities: [
        { name: 'Revenue Operations', path: '/offerings/revenue-operations' },
        { name: 'Mid-Market Businesses', path: '/industries/midmarket' }
      ],
      nextStepCta: { label: 'Audit Customer Journeys', link: '#consultation' }
    },
    {
      id: 'voice-of-customer-advocacy',
      title: 'Voice of Customer (VOC) & Advocacy Architecture',
      groupName: 'Lifecycle Intelligence & VOC',
      shortSummary: 'Systematically gather customer feedback, identify passionate champions, capture video case studies, and activate customer referral networks.',
      businessChallenge: 'Customer feedback is collected through boring annual survey emails with 4% response rates that yield zero actionable operational insights.',
      whyItMatters: 'Happy customers are your most credible sales assets; leaving them unengaged wastes powerful referral and peer-review momentum.',
      whatProfitMachinesDoes: 'We design structured Voice-of-Customer programs that capture real-time sentiment, celebrate customer wins, and mobilize advocates.',
      howItWorks: [
        'Deploy in-app micro-surveys triggered after moments of customer success (e.g. completing a major report, saving 10 hours).',
        'Identify top-decile customer promoters (NPS 9-10) and automatically route them to executive advocacy programs.',
        'Conduct structured executive interviews to document quantified ROI case studies and video testimonials.',
        'Incentivize customer peer referrals and industry review site submissions through exclusive executive advisory councils.'
      ],
      relevantInputs: ['In-app NPS and CSAT feedback streams', 'Customer success milestone completion data', 'G2/Gartner peer review profiles', 'Executive customer advisory rosters'],
      deliverables: ['Voice of Customer Telemetry Engine', 'Customer Advocacy & Case Study Pipeline', 'Executive Advisory Council Charter'],
      businessValue: 'Turns customer satisfaction into tangible commercial assets: verified case studies, peer referrals, and authoritative industry review leadership.',
      kpis: [
        { name: 'Customer Net Promoter Score (NPS)', formula: '% Promoters (Score 9-10) - % Detractors (Score 0-6)', purpose: 'Measures loyalty.' },
        { name: 'Advocate Pipeline Contribution', formula: 'Qualified Pipeline ARR Sourced from Customer Referrals', purpose: 'Proves advocacy ROI.' }
      ],
      illustrativeUseCase: {
        targetUser: 'VP of Marketing & VP of CS',
        scenario: 'Sales team was losing deals because competitors had 200+ online reviews while the company had only 12 outdated reviews.',
        actionTaken: 'Launched automated VOC advocacy workflows prompting customers who achieved 100% onboarding success to post reviews.',
        outcomeObserved: 'Generated 140 authentic 5-star peer reviews in 90 days, lifting sales close rates on competitive evaluations by 22%.'
      },
      visualRecommendation: {
        type: 'Customer Advocacy & Referral Funnel',
        description: 'Funnel diagram showing transformation of active users into NPS promoters, case study participants, and referral partners.'
      },
      relatedCapabilities: [
        { name: 'Demand Engineering', path: '/offerings/demand-engineering' },
        { name: 'Startups & Scaleups', path: '/industries/startups' }
      ],
      nextStepCta: { label: 'Mobilize Customer Advocates', link: '#consultation' }
    },
    {
      id: 'recurring-revenue-ltv-analytics',
      title: 'Recurring Revenue & Lifetime Value (LTV) Analytics',
      groupName: 'Lifecycle Intelligence & VOC',
      shortSummary: 'Perform granular cohort forensics on Gross Retention, Net Retention, customer cohort expansion, logo churn, and customer lifetime value.',
      businessChallenge: 'Boards and finance teams review aggregate churn percentages that conceal dangerous customer contraction or reliance on a single whale account.',
      whyItMatters: 'Sustained enterprise valuation is driven primarily by Net Revenue Retention; weak cohort retention destroys software multiples.',
      whatProfitMachinesDoes: 'We build institutional-grade Recurring Revenue Cockpits tracking cohort retention curves, expansion bridges, and lifetime value economics.',
      howItWorks: [
        'Extract monthly ARR transaction snapshots segmented by new bookings, expansion, contraction, and churn.',
        'Construct vintage cohort retention curves tracking dollar retention performance over 12, 24, and 36-month horizons.',
        'Calculate precise customer lifetime value (LTV) segmented by acquisition channel, company size, and product package.',
        'Deliver board-ready ARR Waterfall bridges and prescriptive NRR expansion models.'
      ],
      relevantInputs: ['Subscription billing database records', 'Historical contract modification line items', 'Customer acquisition cost allocations', 'Gross margin schedules'],
      deliverables: ['Institutional ARR Waterfall Bridge Model', 'Vintage Cohort Retention Heatmap', 'LTV:CAC Economic Optimization Scorecard'],
      businessValue: 'Provides executive leadership and investors with transparent, audited visibility into the compounding economic power of your customer base.',
      kpis: [
        { name: 'Net Revenue Retention (NRR)', formula: '(Starting ARR + Expansion - Churn - Contraction) ÷ Starting ARR', purpose: 'Measures account compounding.' },
        { name: 'Customer Lifetime Value (LTV)', formula: '(Average Annual Revenue per Account × Gross Margin %) ÷ Gross Logo Churn Rate', purpose: 'Quantifies account value.' }
      ],
      illustrativeUseCase: {
        targetUser: 'Chief Financial Officer & CEO',
        scenario: 'Company was preparing for a Series C growth round and needed to demonstrate top-quartile recurring revenue economics to investors.',
        actionTaken: 'Built institutional-grade LTV and Cohort Retention analytics demonstrating 132% NRR in enterprise segments.',
        outcomeObserved: 'Secured a 14x ARR valuation multiple based on proven compounding retention economics.'
      },
      visualRecommendation: {
        type: 'ARR Expansion Waterfall & Cohort Curves',
        description: 'Waterfall graph demonstrating ARR bridge from starting ARR through churn, contraction, and expansion to ending ARR.'
      },
      relatedCapabilities: [
        { name: 'Growth Intelligence', path: '/offerings/growth-intelligence' },
        { name: 'Revenue Operations', path: '/offerings/revenue-operations' }
      ],
      nextStepCta: { label: 'Audit Recurring Revenue LTV', link: '#consultation' }
    }
  ],
  workflow: [
    {
      stepNumber: '01',
      phase: 'ASSESS',
      title: 'Customer Health & Retention Forensic Audit',
      duration: 'Weeks 1–2',
      objective: 'Audit historical churn cohorts, analyze onboarding milestone durations, and evaluate customer support ticket sentiment.',
      keyActivities: ['Ingest historical billing and churn logs', 'Conduct root-cause interviews with churned clients', 'Map current onboarding milestone friction'],
      outputDeliverable: 'Retention Diagnostic & Churn Forensic Audit',
      decisionGate: 'Executive alignment on primary churn drivers and retention baselines.'
    },
    {
      stepNumber: '02',
      phase: 'STANDARDIZE',
      title: 'Onboarding Acceleration & Health Telemetry',
      duration: 'Weeks 2–4',
      objective: 'Architect 30-day onboarding sprint blueprints, configure algorithmic Customer Health Index models, and build client milestone portals.',
      keyActivities: ['Deploy automated onboarding portal', 'Configure Customer Health Index in CRM/CS tools', 'Set up automated churn early-warning triggers'],
      outputDeliverable: 'Standardized 30-Day Onboarding Engine & Health Radar',
      decisionGate: 'Customer success team certification on health scoring and save playbooks.'
    },
    {
      stepNumber: '03',
      phase: 'ACTIVATE',
      title: 'Renewal Cadence & Expansion Workflows',
      duration: 'Weeks 4–6',
      objective: 'Deploy 120-day renewal operating cadences, activate automated expansion alerts, and rollout cross-sell playbooks.',
      keyActivities: ['Implement 120-day renewal pipeline in CRM', 'Configure capacity-triggered expansion alerts', 'Train account managers on executive business review templates'],
      outputDeliverable: 'Live Renewal Management & Expansion Engine',
      decisionGate: 'First monthly renewal pipeline review and expansion pipeline audit.'
    },
    {
      stepNumber: '04',
      phase: 'COMPOUND',
      title: 'Advocacy & LTV Optimization',
      duration: 'Weeks 6–8+',
      objective: 'Deploy Voice-of-Customer micro-surveys, activate customer referral networks, and launch executive LTV analytics.',
      keyActivities: ['Launch automated in-app NPS advocacy workflows', 'Capture customer ROI video case studies', 'Deploy institutional ARR waterfall cockpit'],
      outputDeliverable: 'Closed-Loop Customer Success & LTV Cockpit',
      decisionGate: 'Quarterly board review of Net Revenue Retention and cohort expansion.'
    }
  ],
  metrics: [
    {
      metricName: 'Net Revenue Retention (NRR)',
      category: 'Financial & Retention',
      definition: 'Percentage of recurring revenue retained and expanded from existing customer cohorts over a 12-month period.',
      formula: '(Starting ARR + Expansion ARR - Contraction ARR - Churn ARR) ÷ Starting ARR',
      benchmarkContext: 'World-class enterprise SaaS models achieve >120% NRR; <100% indicates shrinking base.'
    },
    {
      metricName: 'Gross Revenue Retention (GRR)',
      category: 'Financial & Retention',
      definition: 'Percentage of starting recurring revenue retained excluding all expansion, reflecting core product stickiness.',
      formula: '(Starting ARR - Contraction ARR - Churn ARR) ÷ Starting ARR',
      benchmarkContext: 'Enterprise B2B target is >90%; protects baseline revenue without relying on upsells.'
    },
    {
      metricName: 'Time-to-Value (TTV) Duration',
      category: 'Productivity',
      definition: 'Mean calendar days elapsed from executed contract signature to the customer achieving their first verified business outcome.',
      formula: 'Σ (Date of First Verified Value Milestone - Contract Execution Date) ÷ Total New Customers',
      benchmarkContext: 'Top-performing platforms target <30 days; delays beyond 60 days spike churn risk.'
    },
    {
      metricName: 'At-Risk Renewal Recovery Rate',
      category: 'Operational',
      definition: 'Percentage of accounts flagged by Churn Risk Detection that are successfully renewed after intervention.',
      formula: 'Renewed Accounts Flagged as At-Risk ÷ Total Accounts Flagged as At-Risk',
      benchmarkContext: 'Early 120-day detection models achieve 70-85% save rates.'
    },
    {
      metricName: 'Expansion Pipeline Contribution %',
      category: 'Commercial',
      definition: 'Proportion of total quarterly net-new ARR generated through expansions, upsells, and cross-sells to existing accounts.',
      formula: 'Expansion Booked ARR ÷ Total Booked ARR (New Logo + Expansion)',
      benchmarkContext: 'Mature recurring-revenue businesses target 35-50% expansion contribution.'
    },
    {
      metricName: 'Customer Health Telemetry Accuracy',
      category: 'Operational',
      definition: 'Correlation between predicted Customer Health Index scores and actual 12-month renewal outcomes.',
      formula: 'Accounts with Accurate Renewal Predictions ÷ Total Maturing Accounts',
      benchmarkContext: 'Algorithmic health scoring consistently achieves >92% predictive accuracy.'
    }
  ],
  faqs: [
    {
      question: 'How does Customer Success Engine prevent surprise churn?',
      answer: 'By replacing subjective CSM opinions with objective Customer Health telemetry. Our algorithms monitor daily login trends, feature utilization decay, executive sponsor departures, and support escalations to alert leadership to churn risk 90 to 120 days before contract expiration, giving teams ample time to intervene.'
    },
    {
      question: 'Can customer success managers drive expansion without feeling like aggressive sales reps?',
      answer: 'Yes. Our expansion playbooks position upsells not as aggressive sales pitches, but as logical technical and operational solutions to the customer’s growing business success. When CSMs present capacity-upgrade alerts and modular add-ons that solve immediate customer bottlenecks, buyers view them as trusted advisors.'
    },
    {
      question: 'What is the fastest way to compress customer onboarding time-to-value?',
      answer: 'By separating the broad platform configuration from the immediate "Fast-Track Value Sprint." Instead of forcing the client to complete 100% of integrations before seeing any value, we launch one high-impact, pre-configured workflow in the first 14 days, creating immediate executive buy-in and momentum.'
    },
    {
      question: 'How do you measure customer health if we don’t have granular software telemetry?',
      answer: 'For businesses without in-app product telemetry, we calculate Customer Health using operational and commercial indicators: executive meeting attendance cadence, invoice payment timeliness, support ticket resolution velocity, customer survey sentiment, and contract milestone sign-offs.'
    },
    {
      question: 'What is the standard engagement timeline to establish the Customer Success Engine?',
      answer: 'The complete transformation is delivered in four 2-week sprints over 8 weeks: Sprint 1 (Diagnostic Churn Audit), Sprint 2 (30-Day Onboarding Engine & Health Radar), Sprint 3 (Renewal Cadence & Expansion Workflows), and Sprint 4 (Advocacy Architecture & Executive LTV Cockpit).'
    }
  ],
  primaryCtaText: 'Build Customer Success Engine',
  secondaryCtaText: 'Discuss Retention Priorities'
};
