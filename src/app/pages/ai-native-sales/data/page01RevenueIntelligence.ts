import { AiSalesCapabilityPageData } from '../types';

export const page01RevenueIntelligence: AiSalesCapabilityPageData = {
  pageNumber: '01',
  title: 'Revenue Intelligence',
  slug: 'revenue-intelligence',
  canonicalPath: '/ai-native-sales/revenue-intelligence',
  eyebrow: 'AI NATIVE SALES / REVENUE INTELLIGENCE',
  heroHeadline: 'Know Which Buyers Matter, Which Accounts Are Moving, and Why',
  heroSupporting: 'Sales teams often spend time researching accounts without knowing which ones have a relevant need, a credible buying window, or a decision process already underway. Revenue Intelligence combines buyer, account, stakeholder, and market context to help teams prioritize their attention and act with better information.',
  primaryCTA: 'Explore Revenue Intelligence',
  secondaryCTA: 'Book a Consultation',
  targetDecisionMakers: [
    'Chief Revenue Officers (CROs)',
    'VP Sales & Sales Operations',
    'Commercial Directors',
    'Enterprise Account Executives',
    'Demand Generation Leaders'
  ],
  visualTheme: 'intelligence',

  businessProblemTitle: 'More Data Does Not Automatically Create Better Sales Decisions',
  businessProblemSubtitle: 'Enterprises invest heavily in data vendors and CRM instances, yet sales teams still drown in noise while high-intent buying signals pass by unnoticed.',
  businessProblems: [
    {
      id: 'signal-noise',
      title: 'Dark-Funnel & Signal Fragmentation',
      symptom: 'Reps cannot distinguish genuine commercial intent from passive web traffic or casual content downloads.',
      rootCause: 'Data remains siloed across website analytics, intent vendors, CRM records, and product logs with no unified identity graph.',
      impact: 'Up to 68% of sales capacity is wasted chasing cold accounts while active in-market buyers sign with competitors.'
    },
    {
      id: 'manual-research',
      title: 'Repetitive Manual Research Overhead',
      symptom: 'Account executives spend 12-15 hours weekly manually piecing together LinkedIn profiles, SEC filings, and tech stacks.',
      rootCause: 'Lack of automated account graph synthesis and continuous telemetry ingestion.',
      impact: 'Sales cycle velocity stalls by 24 days on average due to delayed initial outreach.'
    },
    {
      id: 'blind-committees',
      title: 'Hidden Buying Committee Dynamics',
      symptom: 'Single-threaded deals stall late in procurement when unseen security, legal, or finance stakeholders veto the proposal.',
      rootCause: 'CRM contacts reflect only who filled out a form, not the 6-10 stakeholders who actually control the budget.',
      impact: 'Unforecasted deal slippage and late-stage loss rates exceed 42% on complex enterprise transactions.'
    }
  ],

  subSubmenus: [
    {
      id: 'buyer-intelligence',
      title: 'Buyer Intelligence',
      badge: 'Intent Velocity',
      businessQuestion: 'Which target accounts are in an active buying window right now, and what specific problem are they trying to solve?',
      description: 'Surfaces dark-funnel buying surges, vendor comparison activity, and solution research 60-90 days before formal RFPs or outreach are initiated.',
      businessProblem: 'Sales teams traditionally rely on inbound form fills or arbitrary cadence sequences, engaging buyers after vendor shortlists are already locked.',
      howItWorks: 'Aggregates first-party digital footprints, third-party B2B intent feeds, topic surge clusters, and job posting signals into a deterministic Buyer Intent Index.',
      informationUsed: [
        'First-party web session depth and documentation reviews',
        'Third-party programmatic intent and category surge data',
        'Competitor review platform evaluation activity',
        'Hiring surge data for specialized technical or commercial skill sets'
      ],
      workflowSupport: 'Directs SDR and AE attention daily to accounts entering their active evaluation window with pre-built context briefs.',
      outcomesSupported: 'Shortens time-to-first-meeting by 3.8x and increases initial discovery meeting qualification rates from 22% to 64%.',
      humanOversight: 'Sales managers review high-intent alerts to confirm account eligibility and avoid reaching out during sensitive corporate events.',
      kpis: [
        { metric: 'Signal-to-Meeting Conversion', definition: 'Meetings booked from intent triggers vs total triggered accounts', target: '38.4%' },
        { metric: 'Detection Lead Time', definition: 'Days between detected intent surge and competitor public engagement', target: '45-60 Days' },
        { metric: 'Intent Precision Score', definition: 'Percentage of alerted accounts confirmed in active buying cycle', target: '92.6%' }
      ]
    },
    {
      id: 'account-intelligence',
      title: 'Account Intelligence',
      badge: 'Account 360',
      businessQuestion: 'What are the strategic initiatives, tech stack vulnerabilities, and financial realities of this enterprise?',
      description: 'Generates a continuous, holistic dossier of target enterprise accounts combining structural, financial, technological, and executive priorities.',
      businessProblem: 'Reps approach enterprise accounts with boilerplate pitches because researching complex 10-K filings, earnings calls, and tech stacks is too time-consuming.',
      howItWorks: 'Autonomous ingestion agents analyze SEC filings, investor presentations, patent registries, and installed technology telemetry to map commercial vulnerabilities.',
      informationUsed: [
        'Annual reports, quarterly earnings transcripts, and investor presentations',
        'Technographic telemetry and cloud infrastructure configurations',
        'Corporate reorganizations, executive leadership transitions, and M&A filings',
        'Historical vendor engagements and legacy contract expiration dates'
      ],
      workflowSupport: 'Synthesizes 50-page enterprise dossiers into actionable 1-page executive briefs tailored to rep discovery conversations.',
      outcomesSupported: 'Eliminates 12 hours of manual research per rep weekly and boosts discovery-to-proposal conversion by 34%.',
      humanOversight: 'Account Executives validate strategic initiative hypotheses before presenting business cases to executive sponsors.',
      kpis: [
        { metric: 'Research Time Saved', definition: 'Hours saved per AE per week on pre-call preparation', target: '11.5 hrs/wk' },
        { metric: 'Opportunity Discovery Rate', definition: 'New qualified deal opportunities identified per target account', target: '2.4 deals' },
        { metric: 'Strategic Fit Index', definition: 'Mathematical correlation of target account profile to top-decile customers', target: '94.2%' }
      ]
    },
    {
      id: 'buying-committee-intelligence',
      title: 'Buying Committee Intelligence',
      badge: 'Stakeholder Graph',
      businessQuestion: 'Who are all the decision-makers, champions, technical evaluators, and blockers in this account, and what are their concerns?',
      description: 'Constructs an interactive stakeholder influence graph mapping economic buyers, technical evaluators, champions, procurement leads, and consensus gaps.',
      businessProblem: 'Complex B2B deals fail because reps engage only 1 or 2 friendly contacts while hidden stakeholders silently veto the investment.',
      howItWorks: 'Analyzes corporate hierarchy, historical deal stakeholder patterns, meeting participant transcripts, and email graph metadata to detect missing roles.',
      informationUsed: [
        'Corporate hierarchy and departmental reporting relationships',
        'Calendar invites, email threads, and virtual meeting attendance logs',
        'Historical closed-won buying committee composition benchmarks',
        'Public professional contributions, technical publications, and speaking topics'
      ],
      workflowSupport: 'Alerts account owners whenever critical stakeholder personas (e.g. CISO, CFO, Head of Procurement) are missing from active evaluation stages.',
      outcomesSupported: 'Increases multi-threading depth from 1.8 to 5.4 verified stakeholders per enterprise deal, dropping late-stage vetoes by 55%.',
      humanOversight: 'Reps verify interpersonal influence and champion credibility before initiating sensitive internal alignment campaigns.',
      kpis: [
        { metric: 'Committee Coverage Depth', definition: 'Verified stakeholders engaged vs total required committee roles', target: '88.5%' },
        { metric: 'Single-Threaded Deal Reduction', definition: 'Decrease in opportunities with only 1 active contact', target: '-72.0%' },
        { metric: 'Consensus Acceleration Velocity', definition: 'Days saved securing unanimous security and procurement sign-off', target: '18 Days' }
      ]
    },
    {
      id: 'market-signals',
      title: 'Market Signals',
      badge: 'Macro Telemetry',
      businessQuestion: 'How are competitive moves, regulatory changes, and category disruptions creating urgent buying triggers in our territory?',
      description: 'Monitors macro market indicators, regulatory enforcement deadlines, vendor price hikes, and competitor outages to trigger contextual outreach.',
      businessProblem: 'Sales teams react months after market events occur, missing the immediate window when buyers are actively seeking alternatives.',
      howItWorks: 'Continuous signal listeners ingest regulatory gazettes, industry news, competitor price updates, and executive job boards, scoring urgency in real-time.',
      informationUsed: [
        'Regulatory compliance mandates and statutory deadlines',
        'Competitor service outages, price increases, and leadership shakeups',
        'Industry macro demand fluctuations and supply chain disruptions',
        'Venture funding, private equity buyouts, and strategic capital allocation'
      ],
      workflowSupport: 'Automatically triggers tailored market opportunity campaigns with approved talk tracks whenever a relevant market event occurs.',
      outcomesSupported: 'Captures competitive displacement opportunities with 3.2x higher win rates compared to cold outreach.',
      humanOversight: 'Sales leadership approves messaging guidelines for sensitive market events before automated campaigns launch.',
      kpis: [
        { metric: 'Market Event Response Time', definition: 'Hours from public market event to sales campaign activation', target: '< 4 Hours' },
        { metric: 'Displacement Win Rate', definition: 'Win rate against entrenched competitors following trigger events', target: '48.2%' },
        { metric: 'Triggered Pipeline Yield', definition: 'Total qualified pipeline sourced from real-time market signals', target: '$4.2M/Qtr' }
      ]
    }
  ],

  workflowTitle: 'From Dark-Funnel Signals to Prioritized Sales Action',
  workflowSubtitle: 'A closed-loop intelligence pipeline continuously ingesting raw signals, synthesizing account context, and delivering high-conviction actions to sales reps.',
  workflowSteps: [
    {
      step: '01',
      name: 'Signal Ingestion & Hygiene',
      description: 'Ingests first-party digital touchpoints, 3rd-party intent feeds, and technographic changes.',
      inputs: 'Web telemetry, CRM logs, G2/Gartner surge data, technographic feeds',
      aiAction: 'Normalizes entity names, deduplicates accounts, and builds probabilistic identity clusters.',
      humanGate: 'RevOps reviews data source confidence thresholds monthly.',
      output: 'Clean, unified account entity graph'
    },
    {
      step: '02',
      name: 'Intent Velocity Scoring',
      description: 'Evaluates signal density and topic clustering to detect true commercial buying windows.',
      inputs: 'Topic surge spikes, pricing page duration, documentation downloads',
      aiAction: 'Applies neural scoring model trained on historical closed-won opportunity signatures.',
      humanGate: 'Sales leadership tunes intent threshold thresholds per territory tier.',
      output: 'Ranked target accounts with intent confidence score > 85%'
    },
    {
      step: '03',
      name: 'Committee & Context Synthesis',
      description: 'Maps the organizational buying unit and extracts strategic initiatives from public filings.',
      inputs: 'Org charts, 10-K transcripts, meeting attendee logs, LinkedIn profiles',
      aiAction: 'Identifies economic buyers, technical champions, and missing committee personas.',
      humanGate: 'Account Executive reviews committee map before executive outreach.',
      output: 'Structured Account Dossier with multi-persona engagement map'
    },
    {
      step: '04',
      name: 'Contextual Action Dispatch',
      description: 'Delivers prioritized next best actions and customized discovery briefs directly into rep workflows.',
      inputs: 'Synthesized account dossier, identified buying triggers, rep calendar',
      aiAction: 'Drafts role-tailored talking points and flags competitive displacement angles.',
      humanGate: 'Rep personalizes and sends messages via approved engagement tools.',
      output: 'Executed high-conviction discovery meeting with verified stakeholder'
    }
  ],

  useCases: [
    {
      title: 'Dark-Funnel Competitive Displacement',
      segment: 'Enterprise SaaS & Cloud Infrastructure',
      situation: 'A tier-1 cybersecurity vendor had 850 target enterprise accounts but lacked visibility into which contracts were expiring or experiencing service dissatisfaction.',
      approach: 'Deployed Revenue Intelligence to monitor competitor support forum spikes, documentation evaluations, and intent topic surges across target CISO personas.',
      result: 'Identified 38 accounts actively evaluating alternatives; reps engaged with tailored migration economics before competitors realized accounts were at risk.',
      metrics: [
        { label: 'Sourced Pipeline', value: '$8.4M' },
        { label: 'Win Rate vs Rival', value: '54.2%' }
      ]
    },
    {
      title: 'Multi-Threaded Buying Committee Unification',
      segment: 'Industrial Technology & Manufacturing IoT',
      situation: 'Average deal cycle stalled at 9.4 months because deals were single-threaded with Plant Managers, while Corporate IT and CFOs blocked budget approval late.',
      approach: 'Leveraged Buying Committee Intelligence to automatically map and score stakeholder coverage across VP Operations, Head of Security, and Regional Finance.',
      result: 'Multi-threaded deals reached 5.2 verified stakeholders in discovery, accelerating consensus and reducing sales cycle duration significantly.',
      metrics: [
        { label: 'Cycle Reduction', value: '-38 Days' },
        { label: 'Forecast Accuracy', value: '96.2%' }
      ]
    },
    {
      title: 'Regulatory Trigger Campaign Activation',
      segment: 'FinTech & Regulatory Compliance Platforms',
      situation: 'New SEC reporting mandates created an immediate urgency for 1,200 asset management firms, but sales reps took 6 weeks to identify affected compliance officers.',
      approach: 'Connected Market Signals engine to regulatory registers, automatically identifying non-compliant funds and matching affected Chief Compliance Officers.',
      result: 'Launched automated intelligence-backed briefing sequences within 72 hours of regulatory announcement, capturing market leadership.',
      metrics: [
        { label: 'First-Meeting Rate', value: '41.8%' },
        { label: 'Closed ARR (90 Days)', value: '$3.1M' }
      ]
    }
  ],

  dashboardTitle: 'Revenue Intelligence Telemetry & Account Health',
  dashboardSubtitle: 'Live multi-dimensional account prioritization, dark-funnel surge detection, and committee coverage tracking.',
  dashboardBadge: 'Live Signal Telemetry v2.4',
  dashboardMetrics: [
    { label: 'Active In-Market Accounts', value: '184', change: '+24 this week', note: 'Surpassing 85% intent threshold' },
    { label: 'Mean Committee Multi-Threading', value: '5.2', change: '+2.8 vs baseline', note: 'Verified decision stakeholders' },
    { label: 'Dark-Funnel Lead Time', value: '52 Days', change: 'Early warning', note: 'Ahead of public RFP issuance' },
    { label: 'Qualified Signal Conversion', value: '38.4%', change: '+18.2% YoY', note: 'Signal-to-completed-discovery' }
  ],
  dashboardVisualType: 'matrix',

  kpiFrameworkTitle: 'Revenue Intelligence Performance & Measurement Framework',
  kpis: [
    {
      name: 'Signal-to-Meeting Conversion Rate',
      formula: 'Meetings Booked ÷ High-Intent Triggered Accounts',
      definition: 'Percentage of accounts flagged with verified buying intent that convert into completed sales discovery meetings.',
      reportingWindow: '30-Day Rolling',
      illustrativeValue: '38.4%',
      interpretation: 'Measures signal accuracy and outreach relevance. Benchmark for top-performing teams is 30-40%.'
    },
    {
      name: 'Committee Coverage Index (CCI)',
      formula: 'Engaged Stakeholder Roles ÷ Identified Committee Roles',
      definition: 'Degree to which the enterprise buying unit (Economic, Technical, Champion, Procurement) is actively participating in discussions.',
      reportingWindow: 'Per Opportunity',
      illustrativeValue: '88.5%',
      interpretation: 'Deals with CCI > 80% experience 3.4x lower slippage rates than single-threaded deals.'
    },
    {
      name: 'Account Research Cycle Time',
      formula: 'Total AE Pre-Call Prep Hours ÷ Accounts Researched',
      definition: 'Average representative time invested in synthesizing account context prior to initial executive outreach.',
      reportingWindow: 'Weekly Aggregate',
      illustrativeValue: '18 Mins',
      interpretation: 'Down from 3.2 hours per account via automated dossier synthesis, unlocking 12+ hours rep capacity weekly.'
    },
    {
      name: 'Intent Velocity Lead Time',
      formula: 'First Signal Date to Formal RFP / Opportunity Creation',
      definition: 'Days of early warning provided by dark-funnel and behavioral intent signals before formal public evaluation.',
      reportingWindow: 'Quarterly Audit',
      illustrativeValue: '48.2 Days',
      interpretation: 'Enables sales reps to co-author evaluation criteria before competitor vendors are invited to pitch.'
    }
  ],

  governanceTitle: 'Data Privacy, Security & Human Oversight Framework',
  governanceSubtitle: 'Strict enterprise guardrails ensuring zero unauthorized surveillance, complete compliance with privacy laws, and transparent AI reasoning.',
  governanceItems: [
    {
      area: 'Permitted Data Sources',
      policy: 'Only public, consented first-party, and licensed B2B programmatic data are ingested into the intelligence graph.',
      humanCheckpoint: 'Legal and InfoSec officers conduct quarterly audits of vendor telemetry and API integrations.',
      auditTrail: 'Full cryptographic hash logging of all ingested data batches and source origins.'
    },
    {
      area: 'Algorithmic Explainability',
      policy: 'Every intent score and stakeholder recommendation must link to observable evidence and underlying data points.',
      humanCheckpoint: 'Reps can click any account score to inspect the raw signals that contributed to the rating.',
      auditTrail: 'Complete decision logs preserved for all automated prioritization scores.'
    },
    {
      area: 'Human-in-the-Loop Approval',
      policy: 'AI models never execute unsolicited external outreach without representative review and explicit authorization.',
      humanCheckpoint: 'Sales rep must approve tailored outreach messaging and confirm contact suitability.',
      auditTrail: 'User authorization timestamped in CRM prior to communication dispatch.'
    },
    {
      area: 'GDPR / CCPA & Privacy Safeguards',
      policy: 'Strict redaction of personal identifiable data not strictly necessary for professional B2B business correspondence.',
      humanCheckpoint: 'Automated suppression list synchronization updated every 60 seconds across all regions.',
      auditTrail: 'Immutable privacy compliance ledger with automated opt-out execution records.'
    }
  ],

  relatedCapabilities: [
    {
      title: 'Autonomous Pipeline Generation',
      path: '/ai-native-sales/autonomous-pipeline-generation',
      summary: 'Turn verified account intelligence into automated prospecting swarms and qualified pipeline.',
      badge: 'Pillar 02'
    },
    {
      title: 'Autonomous Sales Engagement',
      path: '/ai-native-sales/autonomous-sales-engagement',
      summary: 'Coordinate multi-stakeholder buyer enablement, conversation insights, and consensus acceleration.',
      badge: 'Pillar 03'
    },
    {
      title: 'Autonomous GTM Command Center',
      path: '/ai-native-sales/autonomous-gtm-command-center',
      summary: 'Unify real-time buyer signals with pipeline forecasts and commercial deal telemetry.',
      badge: 'Pillar 09'
    }
  ],

  closingCtaHeadline: 'Transform Dark-Funnel Signals into Predictable Revenue Pipeline',
  closingCtaDescription: 'Stop guessing which accounts are in-market. Schedule an executive diagnostic session to evaluate your current revenue intelligence maturity.'
};
