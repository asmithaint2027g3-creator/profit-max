import { AiSalesCapabilityPageData } from '../types';

export const page02AutonomousPipelineGeneration: AiSalesCapabilityPageData = {
  pageNumber: '02',
  title: 'Autonomous Pipeline Generation',
  slug: 'autonomous-pipeline-generation',
  canonicalPath: '/ai-native-sales/autonomous-pipeline-generation',
  eyebrow: 'AI NATIVE SALES / PIPELINE GENERATION',
  heroHeadline: 'Build a More Consistent, Better-Qualified Sales Pipeline',
  heroSupporting: 'Pipeline generation often depends on manual research, disconnected prospecting activities, inconsistent qualification, and repetitive follow-ups. Autonomous Pipeline Generation connects ideal customer profiling, account discovery, prospect research, qualification, and workflow coordination to help teams build pipeline with greater focus and consistency.',
  primaryCTA: 'Explore Pipeline Generation',
  secondaryCTA: 'Book a Consultation',
  targetDecisionMakers: [
    'Chief Revenue Officers (CROs)',
    'VP Sales Development & Demand Gen',
    'Heads of Inbound & Outbound Sales',
    'Revenue Operations Leaders',
    'Growth Stage Founders & CEOs'
  ],
  visualTheme: 'pipeline',

  businessProblemTitle: 'Why Pipeline Creation Becomes Inconsistent and Unpredictable',
  businessProblemSubtitle: 'Traditional sales development relies on brute-force volume, resulting in burned brand reputation, representative burnout, and pipeline that slips or evaporates at the proposal stage.',
  businessProblems: [
    {
      id: 'volume-trap',
      title: 'The Outbound Volume vs. Quality Paradox',
      symptom: 'Reps send 500+ generic email sequences daily yielding <0.8% reply rates and triggering domain reputation penalties.',
      rootCause: 'Prospecting cadences treat all accounts identically with zero dynamic adaptation to verified commercial triggers.',
      impact: 'Escalating customer acquisition cost (CAC) and declining sales development representative retention (<14 month tenure).'
    },
    {
      id: 'broad-icp',
      title: 'Static & Outdated ICP Definitions',
      symptom: 'Qualification standards vary across reps; unqualified meetings clog account executive calendars with deals destined to lose.',
      rootCause: 'Ideal Customer Profiles are maintained as static PDF slides rather than dynamic, data-driven mathematical models.',
      impact: 'Meeting-to-opportunity conversion drops below 18%, wasting valuable AE closing capacity on bad-fit prospects.'
    },
    {
      id: 'hand-off-leakage',
      title: 'SDR-to-AE Handoff Friction & Delays',
      symptom: 'Prospects who express interest go cold because it takes 3-5 days to schedule and brief an account executive.',
      rootCause: 'Disconnected scheduling, manual meeting preparation, and lack of real-time conversational handoff protocols.',
      impact: 'Up to 35% of hard-won discovery meetings fail to occur or fail to advance past the initial introductory call.'
    }
  ],

  subSubmenus: [
    {
      id: 'pipeline-generation-ai',
      title: 'Pipeline Generation AI',
      badge: 'Account Discovery',
      businessQuestion: 'How can we systematically discover and qualify high-fit target accounts without manual representative searching?',
      description: 'Autonomous account matching, lead enrichment, and qualification scoring using neural pattern matching against historical top-decile customers.',
      businessProblem: 'Sales development reps spend up to 70% of their working hours searching LinkedIn and ZoomInfo rather than engaging decision-makers.',
      howItWorks: 'Applies machine learning models that scan global corporate registries, technographic datasets, and funding signals, scoring accounts by mathematical close propensity.',
      informationUsed: [
        'Corporate employee size, revenue velocity, and regional footprint',
        'Installed software telemetry, cloud infrastructure, and technical architecture',
        'Executive quotes, annual reports, and strategic corporate initiatives',
        'Historical win/loss records across similar customer cohorts'
      ],
      workflowSupport: 'Continuously feeds verified, qualified target accounts into outbound workflows with pre-populated stakeholder lists and value hypotheses.',
      outcomesSupported: 'Increases pipeline creation velocity by 3.5x while reducing SDR prospecting research time by 80%.',
      humanOversight: 'Sales managers review account scoring distributions weekly and set territory allocation thresholds.',
      kpis: [
        { metric: 'Qualified Pipeline Sourced', definition: 'Net new qualified pipeline value generated autonomously', target: '$5.8M/Qtr' },
        { metric: 'Account Fit Accuracy', definition: 'Percentage of generated accounts meeting strict Tier-1 ICP criteria', target: '96.4%' },
        { metric: 'Research Time Reduction', definition: 'Decrease in hours spent finding and enriching target accounts', target: '-82.0%' }
      ]
    },
    {
      id: 'ai-prospecting-swarm',
      title: 'AI Prospecting Swarm',
      badge: 'Agent Orchestration',
      businessQuestion: 'How do specialized AI agents collaborate across research, outreach preparation, and qualification handoffs?',
      description: 'A multi-agent swarm architecture where specialized micro-agents handle research, contact discovery, contextual draft generation, and follow-up coordination.',
      businessProblem: 'Human reps cannot maintain rigorous, hyper-personalized multi-touch follow-ups across 200+ target enterprise accounts concurrently.',
      howItWorks: 'Discrete AI agents exchange context: Research Agent finds data -> Discovery Agent maps contacts -> Engagement Agent crafts personalized briefs -> Coordinator schedules meetings.',
      informationUsed: [
        'Target prospect role, previous career trajectory, and published articles',
        'Company pain points extracted from earnings calls and press releases',
        'Real-time response sentiment and objection classification',
        'Sales representative calendar availability and territory routing rules'
      ],
      workflowSupport: 'Prepares fully contextualized multi-channel touchpoints ready for human one-click approval before dispatch.',
      outcomesSupported: 'Enables 1 sales development rep to operate with the effective pipeline output of 4 traditional SDRs.',
      humanOversight: 'Reps review and approve every initial outreach message and sensitive objection response before external transmission.',
      kpis: [
        { metric: 'Outbound Reply Rate', definition: 'Positive responses received vs total accounts engaged', target: '18.6%' },
        { metric: 'Swarm Orchestration Efficiency', definition: 'Touchpoints coordinated per rep per week with zero quality loss', target: '850/wk' },
        { metric: 'Rep Approval Time', definition: 'Average seconds required for human rep to inspect and approve agent brief', target: '45 Secs' }
      ]
    },
    {
      id: 'icp-discovery',
      title: 'ICP Discovery',
      badge: 'Mathematical ICP',
      businessQuestion: 'Which exact customer profiles generate the fastest sales cycles, highest retention rates, and largest expansion potential?',
      description: 'Continuous empirical analysis of closed-won deals, churn records, and customer lifetime value to refine Ideal Customer Profile parameters.',
      businessProblem: 'Most companies define their ICP through executive intuition, targeting large enterprise logos that take 18 months to close and churn quickly.',
      howItWorks: 'Analyzes multi-year customer data cohorts using regression and clustering to identify the common characteristics of top 20% margin customers.',
      informationUsed: [
        'Historical CRM win/loss records, deal cycle lengths, and discount levels',
        'Product telemetry: feature adoption velocity, usage frequency, and seat growth',
        'Customer support ticket intensity and cost-to-serve financial allocations',
        'Gross revenue retention (GRR) and net revenue retention (NRR) outcomes'
      ],
      workflowSupport: 'Dynamically updates account tiering in CRM, alerting marketing and sales when a target account matches high-retention signatures.',
      outcomesSupported: 'Eliminates pipeline waste on low-LTV prospects, boosting customer gross margin realization by 6.2 percentage points.',
      humanOversight: 'Executive leadership and VP Sales review quarterly ICP attribute shifts before territory quotas are locked.',
      kpis: [
        { metric: 'LTV:CAC Ratio of New Pipeline', definition: 'Predicted lifetime value to acquisition cost of generated pipeline', target: '5.2x' },
        { metric: 'Win Rate Lift on Tier-1 ICP', definition: 'Close rate improvement on accounts matching neural ICP model', target: '+32.4%' },
        { metric: 'Sales Cycle Compression', definition: 'Days saved closing deals that strictly match discovered ICP', target: '-28 Days' }
      ]
    },
    {
      id: 'pipeline-acceleration',
      title: 'Pipeline Acceleration',
      badge: 'Stage Velocity',
      businessQuestion: 'Where are accounts getting stuck between first engagement and qualified discovery, and how do we resolve the delay?',
      description: 'Identifies friction bottlenecks, unengaged prospects, and delayed handoffs to advance pipeline from initial interest to qualified opportunity.',
      businessProblem: 'Half of all initial positive replies die in email back-and-forth because reps fail to provide relevant meeting value propositions quickly.',
      howItWorks: 'Monitors stage velocity telemetry, analyzes conversational drop-offs, and provides immediate calendar coordination and mutual agenda drafting.',
      informationUsed: [
        'Timestamp telemetry across response, meeting booking, and meeting completion',
        'Prospect availability windows and timezone preferences',
        'Executive calendar schedules and AE discovery specialization profiles',
        'Discovery meeting show rates and rescheduling patterns'
      ],
      workflowSupport: 'Automatically coordinates meeting logistics, issues calendar invites with custom executive agendas, and triggers pre-call reminder briefs.',
      outcomesSupported: 'Drives meeting show rates from 68% to 91% and cuts time-from-positive-reply to held-meeting by 65%.',
      humanOversight: 'Account Executives review and customize the proposed meeting agenda based on specific prospect notes.',
      kpis: [
        { metric: 'Meeting Held Rate', definition: 'Scheduled meetings that actually take place with prospect present', target: '91.2%' },
        { metric: 'Reply-to-Meeting Duration', definition: 'Elapsed hours from prospect interest to confirmed calendar booking', target: '< 2 Hours' },
        { metric: 'Meeting-to-SQL Conversion', definition: 'Held discovery meetings accepted by AE as sales-qualified pipeline', target: '74.5%' }
      ]
    }
  ],

  workflowTitle: 'Autonomous Pipeline Generation Lifecycle',
  workflowSubtitle: 'From dynamic ICP modeling to autonomous swarm research and qualified account executive handoff.',
  workflowSteps: [
    {
      step: '01',
      name: 'Dynamic ICP Calibration',
      description: 'Synthesizes closed-won telemetry to define current high-propensity account criteria.',
      inputs: 'CRM win/loss, ERP margin data, customer telemetry, segment churn',
      aiAction: 'Calculates attribute weighting and produces updated ICP qualification rubric.',
      humanGate: 'Sales leadership signs off on tier definitions.',
      output: 'Calibrated ICP Scoring Engine'
    },
    {
      step: '02',
      name: 'Account & Contact Swarm Discovery',
      description: 'Micro-agents identify target accounts and locate verified decision-makers.',
      inputs: 'Global business registries, technographic feeds, LinkedIn Sales Nav',
      aiAction: 'Extracts relevant economic buyers and verifies email/phone deliverability.',
      humanGate: 'Compliance check filters against global opt-out and suppression lists.',
      output: 'Enriched Account & Committee Roster'
    },
    {
      step: '03',
      name: 'Contextual Outreach Preparation',
      description: 'Crafts tailored value propositions based on specific company pain points.',
      inputs: '10-K priorities, recent executive quotes, technology stack gaps',
      aiAction: 'Generates multi-touch outreach sequences with personalized business cases.',
      humanGate: 'SDR approves or modifies messaging prior to dispatch.',
      output: 'Reviewed, High-Conviction Engagement Sequence'
    },
    {
      step: '04',
      name: 'Autonomous Follow-up & Booking',
      description: 'Manages conversational progression, addresses logistics, and schedules meeting.',
      inputs: 'Prospect responses, rep calendar availability, meeting room links',
      aiAction: 'Interprets prospect intent, proposes meeting times, and prepares executive agenda.',
      humanGate: 'AE accepts meeting and reviews generated pre-call briefing dossier.',
      output: 'Confirmed Discovery Meeting with Verified Stakeholder'
    }
  ],

  useCases: [
    {
      title: 'Outbound Swarm Deployment for B2B FinTech',
      segment: 'Banking Technology & Payment Infrastructure',
      situation: 'A growth-stage payment platform had 6 SDRs struggling to book meetings with Regional Bank CFOs, averaging only 8 discovery calls monthly per rep.',
      approach: 'Deployed AI Prospecting Swarms to research bank capital adequacy ratios and regulatory compliance costs, preparing hyper-specific executive briefing briefs.',
      result: 'Monthly meeting velocity surged to 28 held meetings per rep; positive reply rates increased from 1.2% to 19.4% with zero spam reputation penalties.',
      metrics: [
        { label: 'Monthly SQLs', value: '168 Meetings' },
        { label: 'Pipeline Added', value: '$9.2M ARR' }
      ]
    },
    {
      title: 'Neural ICP Discovery & Reprioritization',
      segment: 'Supply Chain Analytics & Fleet SaaS',
      situation: 'Sales leadership was targeting Fortune 100 enterprise retailers with 16-month sales cycles, causing severe cash-flow strain and missed quarterly targets.',
      approach: 'Ran ICP Discovery across 4 years of historical customer data, revealing that mid-market refrigerated transport fleets closed in 32 days with 128% net revenue retention.',
      result: 'Pivoted outbound pipeline generation to the discovered high-margin micro-segment, accelerating pipeline velocity and doubling quota attainment.',
      metrics: [
        { label: 'Cycle Reduction', value: '-74 Days' },
        { label: 'Win Rate Surge', value: '+41.2%' }
      ]
    },
    {
      title: 'Instant Inbound Pipeline Acceleration',
      segment: 'Developer Tools & Cloud Security',
      situation: 'Inbound trial signups and demo requests took an average of 4.2 hours to receive SDR response, during which 45% of enterprise evaluators lost interest.',
      approach: 'Implemented Autonomous Pipeline Acceleration agents to instantly qualify inbound accounts, enrich firmographic data, and offer live AE booking in under 90 seconds.',
      result: 'Inbound demo completion rate increased by 44%, and inbound-to-opportunity conversion reached industry-leading benchmarks.',
      metrics: [
        { label: 'Response Time', value: '< 90 Secs' },
        { label: 'Demo Held Rate', value: '94.8%' }
      ]
    }
  ],

  dashboardTitle: 'Autonomous Pipeline Velocity & Funnel Telemetry',
  dashboardSubtitle: 'Real-time monitoring of prospecting swarm throughput, ICP fit distribution, and meeting conversion rates.',
  dashboardBadge: 'Pipeline Swarm Operations v2.4',
  dashboardMetrics: [
    { label: 'New Qualified Opportunities', value: '242', change: '+38% MoM', note: 'Strictly vetted against Tier-1 ICP' },
    { label: 'Positive Response Rate', value: '18.6%', change: '+14.2% vs baseline', note: 'Across multi-touch sequences' },
    { label: 'Meeting-to-SQL Conversion', value: '74.5%', change: '+22.5%', note: 'Accepted by Account Executives' },
    { label: 'Cost Per Qualified Opp', value: '$412', change: '-64% reduction', note: 'Fully loaded prospecting cost' }
  ],
  dashboardVisualType: 'funnel',

  kpiFrameworkTitle: 'Pipeline Generation KPI & Velocity Measurement Framework',
  kpis: [
    {
      name: 'Pipeline Velocity ($/Day)',
      formula: '(Qualified Opps × Win Rate % × Average Deal Size) ÷ Sales Cycle Days',
      definition: 'The monetary value of sales pipeline moving through the revenue engine per business day.',
      reportingWindow: 'Monthly Rolling',
      illustrativeValue: '$48,500/day',
      interpretation: 'Core health metric of sales development; increases indicate either higher volume, higher conversion, or faster cycle velocity.'
    },
    {
      name: 'Meeting-to-SQL Acceptance Rate',
      formula: 'Accepted Sales Opportunities ÷ Held Discovery Meetings',
      definition: 'Percentage of first meetings booked by autonomous prospecting that account executives formally accept into the pipeline.',
      reportingWindow: 'Monthly Audit',
      illustrativeValue: '74.5%',
      interpretation: 'Guards against low-quality meetings. Traditional SDR benchmarks range 45-55%; target is >70%.'
    },
    {
      name: 'Cost Per Qualified Opportunity (CPQO)',
      formula: 'Total Sales Development Expenditure ÷ Total Qualified Opps Created',
      definition: 'Fully loaded cost to generate one sales-qualified opportunity, including tooling, data feeds, and human review capacity.',
      reportingWindow: 'Quarterly Audit',
      illustrativeValue: '$412',
      interpretation: 'Down from traditional industry benchmarks of $1,200-$1,800 per enterprise SQL.'
    },
    {
      name: 'Outbound Meeting Velocity Index',
      formula: 'Held Meetings ÷ Active Sales Development Representatives',
      definition: 'Productivity capacity multiplier enabled by autonomous swarm research and outreach coordination.',
      reportingWindow: 'Monthly',
      illustrativeValue: '28.4 / Rep',
      interpretation: 'Traditional human SDR capacity averages 8-12 held meetings per month.'
    }
  ],

  governanceTitle: 'Outbound Ethics, Brand Safety & Regulatory Governance',
  governanceSubtitle: 'Ensuring zero spam, strict compliance with anti-spam legislation, and total transparency in prospect engagement.',
  governanceItems: [
    {
      area: 'CAN-SPAM, GDPR & CASL Compliance',
      policy: 'Autonomous sequences operate exclusively across B2B legitimate interest channels with instant, automated one-click opt-out honoring.',
      humanCheckpoint: 'RevOps reviews suppression lists and compliance bounce rates daily.',
      auditTrail: 'Full timestamped opt-out record stored in immutable compliance registry.'
    },
    {
      area: 'Domain Reputation & Deliverability Safeguards',
      policy: 'Volume pacing algorithms limit daily outreach per sending inbox to 35 messages with automated warmup and SPF/DKIM/DMARC monitoring.',
      humanCheckpoint: 'Automated circuit breakers pause sending instantly if spam complaint rate exceeds 0.08%.',
      auditTrail: 'Daily deliverability scores and inbox reputation telemetry logged.'
    },
    {
      area: 'Message Content & Brand Voice Governance',
      policy: 'All outbound templates and generated copy must adhere to corporate tone guidelines and avoid exaggerated claims or deceptive subject lines.',
      humanCheckpoint: 'SDR leads inspect randomly sampled outbound drafts weekly for quality assurance.',
      auditTrail: 'Complete copy generation prompts and approved variants preserved in version control.'
    },
    {
      area: 'Account Exclusion & Conflict Prevention',
      policy: 'Automatic exclusions block outreach to existing active customers, active pipeline deals, partners, and executive blacklists.',
      humanCheckpoint: 'CRM synchronization rules prevent multi-rep cross-prospecting conflicts.',
      auditTrail: 'Real-time collision detection logs verify account eligibility prior to sequence dispatch.'
    }
  ],

  relatedCapabilities: [
    {
      title: 'Revenue Intelligence',
      path: '/ai-native-sales/revenue-intelligence',
      summary: 'Feed your prospecting swarms with dark-funnel buying signals and stakeholder intelligence.',
      badge: 'Pillar 01'
    },
    {
      title: 'Autonomous Sales Engagement',
      path: '/ai-native-sales/autonomous-sales-engagement',
      summary: 'Coordinate multi-stakeholder buyer enablement and consensus acceleration after the meeting is booked.',
      badge: 'Pillar 03'
    },
    {
      title: 'Intelligent Sales Agents',
      path: '/ai-native-sales/intelligent-sales-agents',
      summary: 'Deploy specialized SDR, BDR, and AE autonomous agents across your sales development pipeline.',
      badge: 'Pillar 04'
    }
  ],

  closingCtaHeadline: 'Scale Your Qualified Pipeline Without Adding Expensive Headcount',
  closingCtaDescription: 'Replace spray-and-pray outbound cadences with an autonomous, high-conviction pipeline generation engine tailored to your ICP.'
};
