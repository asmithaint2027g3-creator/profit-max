import { AiSalesCapabilityPageData } from '../types';

export const page07EcosystemRevenueGrowth: AiSalesCapabilityPageData = {
  pageNumber: '07',
  title: 'Ecosystem Revenue Growth',
  slug: 'ecosystem-revenue-growth',
  canonicalPath: '/ai-native-sales/ecosystem-revenue-growth',
  eyebrow: 'AI NATIVE SALES / ECOSYSTEM REVENUE',
  heroHeadline: 'Turn Partner Relationships Into a More Coordinated Revenue Ecosystem',
  heroSupporting: 'Partners, technology alliances, referral networks, distributors, and strategic relationships can extend market reach and create new revenue opportunities. But disconnected partner data, unclear ownership, limited attribution, and inconsistent co-selling can make ecosystem performance difficult to manage. Ecosystem Revenue Growth helps organizations understand partner potential, coordinate joint opportunities, and evaluate how ecosystem relationships contribute to commercial outcomes.',
  primaryCTA: 'Orchestrate Partner Ecosystems',
  secondaryCTA: 'Book a Consultation',
  targetDecisionMakers: [
    'Chief Revenue Officers (CROs)',
    'VP Global Alliances & Ecosystems',
    'Heads of Channel & Partner Sales',
    'Corporate Development Executives',
    'Strategic Partner Directors'
  ],
  visualTheme: 'ecosystem',

  businessProblemTitle: 'Why B2B Partner Ecosystems Consistently Underperform Their Potential',
  businessProblemSubtitle: 'Most enterprise partner programs suffer from channel conflict, invisible account overlaps, zero co-selling coordination, and disputed revenue attribution.',
  businessProblems: [
    {
      id: 'blind-overlaps',
      title: 'Invisible Account Overlaps & Missed Warm Intros',
      symptom: 'Direct sales reps cold-call enterprise accounts where existing technology partners already possess trusted C-suite relationships.',
      rootCause: 'Lack of automated, privacy-compliant account mapping across partner CRMs and ecosystem graphs.',
      impact: 'Reps waste months attempting cold outreach while competitors leverage warm partner introductions to close faster.'
    },
    {
      id: 'channel-conflict',
      title: 'Channel Conflict & Disputed Attribution',
      symptom: 'Direct sales teams clash with channel partners over deal ownership, commission splits, and account territory rights.',
      rootCause: 'Ambiguous deal registration rules and lack of unified partner co-selling governance workflows.',
      impact: 'Ecosystem trust breaks down, causing top tier-1 system integrators to deprioritize recommending your platform.'
    },
    {
      id: 'dormant-partners',
      title: 'Dormant Partner Roster & Low Enablement Velocity',
      symptom: '85% of signed partner agreements yield zero pipeline because partners lack timely co-selling enablement and collateral.',
      rootCause: 'Manual partner onboarding processes fail to provide automated co-branded assets and deal registration portals.',
      impact: 'Investments in partner recruitment generate negligible revenue returns and high relationship management overhead.'
    }
  ],

  subSubmenus: [
    {
      id: 'partner-intelligence',
      title: 'Partner Intelligence',
      badge: 'Alliances Scoring Matrix',
      businessQuestion: 'Which system integrators, technology partners, and consultancies have the highest propensity to generate active pipeline?',
      description: 'Scores existing and prospective ecosystem partners across market alignment, account overlap, joint win rates, and certified technical capacity.',
      businessProblem: 'Alliances teams invest equal time in hundreds of signed partners without knowing which 10% actually generate 90% of joint revenue.',
      howItWorks: 'Evaluates partner customer segment overlaps, historical referral velocity, technical certification counts, and regional market presence.',
      informationUsed: [
        'Partner customer footprint, industry vertical specialization, and geographic reach',
        'Certified partner engineer counts and implementation competency ratings',
        'Historical joint win/loss records, co-sell deal velocity, and average contract values',
        'Ecosystem customer overlap density and mutual account tier matching'
      ],
      workflowSupport: 'Produces a prioritized Partner Tiering Matrix directing alliance managers to focus co-selling efforts on high-yield partners.',
      outcomesSupported: 'Concentrates partner resources on top-performing relationships, lifting partner-sourced pipeline by 3.8x.',
      humanOversight: 'VP Alliances validates partner tier designations and approves joint strategic business commitments.',
      kpis: [
        { metric: 'Partner-Sourced Pipeline', definition: 'New qualified pipeline value originated directly by ecosystem partners', target: '$6.4M/Qtr' },
        { metric: 'Active Partner Ratio', definition: 'Percentage of signed partners actively registering qualified deals', target: '44.5%' },
        { metric: 'Co-Sell Win Rate Premium', definition: 'Win rate improvement on deals executed jointly with certified partners', target: '+28.4%' }
      ]
    },
    {
      id: 'partner-revenue-os',
      title: 'Partner Revenue OS',
      badge: 'Co-Sell Coordination',
      businessQuestion: 'How can direct sales reps and partner account managers seamlessly co-sell without conflict or communication lag?',
      description: 'A shared collaborative operating environment for joint account planning, deal registration, lead routing, and co-branded enablement.',
      businessProblem: 'Partner co-selling stalls in uncoordinated email threads and spreadsheets, leading to duplicated outreach and lost momentum.',
      howItWorks: 'Synchronizes deal stages between partner portals and CRM, automating deal registration approvals, commission rules, and mutual action plans.',
      informationUsed: [
        'Registered partner deals, opportunity timestamps, and expiration thresholds',
        'Territory routing rules, partner commission matrices, and co-sell SLAs',
        'Co-branded sales collateral, joint solution architectures, and mutual case studies',
        'Partner portal activity logs and shared deal discussion comments'
      ],
      workflowSupport: 'Instantly alerts direct reps when a partner registers an account in their territory and launches a collaborative co-sell workspace.',
      outcomesSupported: 'Cuts deal registration turnaround from 5 days to 2 hours and prevents 98% of channel territory disputes.',
      humanOversight: 'Channel Director and Regional VP Sales review and authorize deal registrations and co-selling commission allocations.',
      kpis: [
        { metric: 'Deal Registration Speed', definition: 'Hours from partner submission to verified territory approval', target: '< 2 Hours' },
        { metric: 'Channel Conflict Incident Rate', definition: 'Percentage of deals contested between direct and partner sales', target: '< 1.5%' },
        { metric: 'Co-Sell Cycle Acceleration', definition: 'Days saved on enterprise deals closed with certified partner support', target: '24 Days' }
      ]
    },
    {
      id: 'ecosystem-intelligence-graph',
      title: 'Ecosystem Intelligence Graph',
      badge: 'Network Topology',
      businessQuestion: 'Which partners possess active, trusted relationships with the target enterprise accounts in our sales pipeline?',
      description: 'A privacy-safe enterprise relationship graph linking target accounts, technology installations, advisory partners, and executive connections.',
      businessProblem: 'Reps spend months attempting cold outreach to enterprise accounts where a key technology partner has weekly executive meetings.',
      howItWorks: 'Uses cryptographic data escrow to cross-reference target account lists against partner client rosters, revealing mutual accounts without exposing raw CRM records.',
      informationUsed: [
        'Encrypted corporate account identifiers and mutual customer rosters',
        'Verified technology integrations and installed third-party software feeds',
        'System integrator master service agreements and active implementation contracts',
        'Executive advisory and board member ecosystem affiliations'
      ],
      workflowSupport: 'Shows reps exactly which partner can provide a warm executive introduction and provides a one-click introduction request workflow.',
      outcomesSupported: 'Converts cold enterprise outreach into warm partner introductions, boosting initial meeting acceptance rates by 4.2x.',
      humanOversight: 'Partner Account Manager verifies relationship status and approves introduction requests before reaching out to the partner.',
      kpis: [
        { metric: 'Warm Introduction Conversion', definition: 'Partner intro requests resulting in held executive discovery meetings', target: '58.2%' },
        { metric: 'Account Overlap Density', definition: 'Percentage of target enterprise pipeline with 1+ certified partner relationships', target: '76.0%' },
        { metric: 'Cold Outreach Avoidance', definition: 'Accounts transitioned from cold sequences to warm partner introductions', target: '340 Accts' }
      ]
    },
    {
      id: 'ecosystem-growth-engine',
      title: 'Ecosystem Growth Engine',
      badge: 'Influence Attribution',
      businessQuestion: 'How much revenue is genuinely sourced, influenced, or accelerated by ecosystem partners across our business?',
      description: 'Multi-touch attribution models that quantify partner-sourced vs partner-influenced pipeline, revenue, and retention impact.',
      businessProblem: 'Finance and executive leadership underfund partner programs because legacy single-touch attribution fails to capture partner influence.',
      howItWorks: 'Tracks partner touchpoints throughout the deal lifecycle—from initial intro to technical validation and executive sponsorship—calculating fair influence weight.',
      informationUsed: [
        'Partner registration timestamps, joint meeting attendance, and shared document views',
        'Customer procurement surveys and win/loss interview partner feedback',
        'Historical renewal and retention rates of partner-implemented customer cohorts',
        'Contract commission payouts and referral fee financial ledgers'
      ],
      workflowSupport: 'Provides CFO and CRO with an executive dashboard demonstrating the ROI, CAC reduction, and LTV premium of ecosystem-led revenue.',
      outcomesSupported: 'Justifies expanded ecosystem investment and proves that partner-influenced deals close 30% faster with 22% higher average contract value.',
      humanOversight: 'Finance Controller audits quarterly partner commission calculations and influence attribution allocations.',
      kpis: [
        { metric: 'Partner-Influenced Revenue Share', definition: 'Percentage of total enterprise ARR influenced by ecosystem partners', target: '38.5%' },
        { metric: 'Ecosystem LTV Premium', definition: 'Net revenue retention lift on customers implemented by certified partners', target: '+16.4%' },
        { metric: 'Partner Program ROI', definition: 'Gross margin generated from partner deals vs total ecosystem expenditure', target: '5.8x' }
      ]
    }
  ],

  workflowTitle: 'Ecosystem Revenue Orchestration & Co-Selling Lifecycle',
  workflowSubtitle: 'From privacy-safe account overlap mapping to coordinated co-selling and multi-touch influence attribution.',
  workflowSteps: [
    {
      step: '01',
      name: 'Privacy-Safe Account Overlap Mapping',
      description: 'Cross-references target accounts against partner customer rosters via encrypted escrow.',
      inputs: 'CRM account lists, partner client rosters, installed technographic feeds',
      aiAction: 'Identifies high-value overlaps and flags warm introduction pathways.',
      humanGate: 'Alliances manager confirms partner relationship standing.',
      output: 'Prioritized Account Overlap Matrix & Warm Intro Queue'
    },
    {
      step: '02',
      name: 'Automated Deal Registration & SLA Routing',
      description: 'Validates partner deal submissions against territory rules and anti-conflict policies.',
      inputs: 'Partner deal registrations, territory assignment tables, CRM pipeline',
      aiAction: 'Checks for duplicates, applies commission rules, and alerts direct AE.',
      humanGate: 'Channel Director approves registration and commits exclusivity period.',
      output: 'Authorized Deal Registration with 90-Day Protection Window'
    },
    {
      step: '03',
      name: 'Collaborative Co-Selling Execution',
      description: 'Unites direct sales rep and partner champion in a shared deal room with joint collateral.',
      inputs: 'Joint solution briefs, mutual customer ROI models, meeting availability',
      aiAction: 'Stages co-branded proposals, tracks task dependencies, and syncs milestones.',
      humanGate: 'Direct AE and Partner Rep conduct joint discovery presentation.',
      output: 'Accelerated Enterprise Deal Advancement with Partner Endorsement'
    },
    {
      step: '04',
      name: 'Multi-Touch Influence & Commission Clearance',
      description: 'Calculates verified partner influence and triggers accurate revenue commission payouts.',
      inputs: 'Executed customer contract, partner activity telemetry, commission agreement',
      aiAction: 'Computes influence weighting and generates automated commission ledger.',
      humanGate: 'Finance Controller validates payout and authorizes partner compensation.',
      output: 'Automated Partner Payout & Transparent Ecosystem Attribution'
    }
  ],

  useCases: [
    {
      title: 'Global System Integrator Co-Selling Orchestration',
      segment: 'Enterprise ERP & Financial Automation',
      situation: 'A tier-1 ERP vendor struggled to engage Fortune 500 accounts because Big-4 consulting firms controlled the client relationship and favored legacy rivals.',
      approach: 'Deployed Ecosystem Revenue OS and Intelligence Graph to identify shared banking clients, offering certified Big-4 consultants co-branded implementation toolkits.',
      result: 'Partner-sourced pipeline expanded from $2.1M to $18.4M within two quarters; joint co-sell deals achieved a 72% win rate against legacy incumbents.',
      metrics: [
        { label: 'Pipeline Sourced', value: '$18.4M' },
        { label: 'Co-Sell Win Rate', value: '72.4%' }
      ]
    },
    {
      title: 'Warm Partner Introduction Displacement Campaign',
      segment: 'Cloud Security & Identity Governance',
      situation: 'Direct sales reps faced 9-month sales cycles attempting cold outreach into Fortune 1000 CISOs who had strict vendor gatekeepers.',
      approach: 'Mapped account overlaps against cloud platform partners (AWS, Microsoft, Snowflake), securing warm peer introductions to existing security leads.',
      result: 'Cold discovery meeting rates of 1.2% were replaced by warm partner intro acceptance of 58%, cutting sales cycle duration by 45 days.',
      metrics: [
        { label: 'Intro Acceptance', value: '58.2%' },
        { label: 'Cycle Compression', value: '-45 Days' }
      ]
    },
    {
      title: 'Zero-Conflict Deal Registration Governance',
      segment: 'Healthcare Data Interoperability SaaS',
      situation: 'Channel partners were demoralized by frequent territory disputes where direct sales reps claimed commission on partner-originated healthcare deals.',
      approach: 'Implemented automated Partner Revenue OS with instant timestamped registration, transparent SLA tracking, and dual-compensation incentives.',
      result: 'Channel conflict incidents fell by 94%, active partner registration volume tripled, and partner-influenced ARR reached 41% of company bookings.',
      metrics: [
        { label: 'Conflict Drop', value: '-94.0%' },
        { label: 'Partner ARR Share', value: '41.2%' }
      ]
    }
  ],

  dashboardTitle: 'Ecosystem Revenue Telemetry & Partner Performance',
  dashboardSubtitle: 'Real-time monitoring of partner-sourced pipeline, co-sell deal velocity, and multi-touch influence attribution.',
  dashboardBadge: 'Ecosystem Alliances Engine v2.4',
  dashboardMetrics: [
    { label: 'Partner-Sourced Pipeline', value: '$24.8M', change: '+52% YoY', note: 'Directly originated by ecosystem' },
    { label: 'Partner-Influenced ARR', value: '38.5%', change: '+14.2 pts', note: 'Total revenue touchpoint share' },
    { label: 'Co-Sell Win Rate', value: '64.8%', change: '+22.4 pts vs direct', note: 'Deals closed with certified partner' },
    { label: 'Registration Approval Time', value: '1.8 Hours', change: '-96% reduction', note: 'Rapid conflict-free routing' }
  ],
  dashboardVisualType: 'network',

  kpiFrameworkTitle: 'Ecosystem Revenue KPI & Measurement Framework',
  kpis: [
    {
      name: 'Partner-Sourced Revenue (PSR)',
      formula: 'Closed Contract Value where Opportunity Lead Source = Registered Certified Partner',
      definition: 'Monetary revenue directly originated and submitted by an ecosystem partner through formal deal registration.',
      reportingWindow: 'Quarterly Audit',
      illustrativeValue: '$6.4M/Qtr',
      interpretation: 'Pure inbound leverage; high PSR reduces corporate reliance on expensive direct sales development capacity.'
    },
    {
      name: 'Partner-Influenced Revenue (PIR)',
      formula: 'Closed Contract Value where Certified Partner Participated in Discovery or Validation Stages',
      definition: 'Revenue where an ecosystem partner provided strategic endorsement, technical integration, or executive access to accelerate the deal.',
      reportingWindow: 'Quarterly Audit',
      illustrativeValue: '38.5%',
      interpretation: 'Measures ecosystem gravity; partner-influenced deals close faster with higher contract values.'
    },
    {
      name: 'Co-Sell Deal Acceleration Rate',
      formula: 'Average Direct Sales Cycle Duration - Average Co-Sell Sales Cycle Duration',
      definition: 'Net calendar days saved closing opportunities when co-selling alongside certified implementation partners.',
      reportingWindow: 'Annual Rolling',
      illustrativeValue: '24.2 Days',
      interpretation: 'Reflects buyer trust transfer; third-party validation compresses procurement and security evaluation.'
    },
    {
      name: 'Ecosystem Net Retention Multiplier',
      formula: 'Net Revenue Retention of Partner-Implemented Cohorts ÷ Direct-Implemented Cohorts',
      definition: 'Long-term expansion and renewal differential for enterprise clients onboarded by certified ecosystem partners.',
      reportingWindow: '12-Month Cohort',
      illustrativeValue: '1.16x (128% NRR)',
      interpretation: 'Customers onboarded by certified partners experience deeper workflow adoption and significantly lower churn.'
    }
  ],

  governanceTitle: 'Partner Confidentiality, Anti-Trust & Attribution Governance',
  governanceSubtitle: 'Strict enterprise guardrails ensuring zero unauthorized account data leakage, fair competition, and audit-ready commission ledgers.',
  governanceItems: [
    {
      area: 'Cryptographic Account Overlap Escrow',
      policy: 'Account matching uses SHA-256 hashed domain matching; neither party ever sees raw CRM databases or unshared prospect lists.',
      humanCheckpoint: 'InfoSec and Privacy Officers inspect data clean room encryption protocols annually.',
      auditTrail: 'Zero-knowledge cryptographic verification proofs stored with every match query.'
    },
    {
      area: 'Deal Registration Exclusivity & SLA Rules',
      policy: 'Approved deal registrations guarantee 90 days of exclusive territory protection, extendable only upon verified mutual milestone progression.',
      humanCheckpoint: 'Channel Director must formally review and sign off before any partner deal protection is revoked.',
      auditTrail: 'Complete timestamped deal registration lifecycle and extension history archived.'
    },
    {
      area: 'Fair Channel Compensation & Anti-Split Disputes',
      policy: 'Dual-credit and commission split matrices are pre-codified to prevent direct sales reps from suffering compensation penalties when co-selling.',
      humanCheckpoint: 'Compensation Committee reviews and approves sales compensation rules prior to annual plan kickoff.',
      auditTrail: 'Commission calculation formulas and dispute resolution determinations preserved in ERP.'
    },
    {
      area: 'Anti-Bribery & FCPA Partner Compliance',
      policy: 'All ecosystem partners must complete certified anti-corruption onboarding, background checks, and annual ethical compliance certifications.',
      humanCheckpoint: 'Corporate Compliance Officer validates partner certification status prior to commission disbursement.',
      auditTrail: 'Signed FCPA/UK Bribery Act compliance documentation linked to partner records.'
    }
  ],

  relatedCapabilities: [
    {
      title: 'Revenue Intelligence',
      path: '/ai-native-sales/revenue-intelligence',
      summary: 'Identify partner account overlaps and map stakeholder buying committees in target accounts.',
      badge: 'Pillar 01'
    },
    {
      title: 'Autonomous Pipeline Generation',
      path: '/ai-native-sales/autonomous-pipeline-generation',
      summary: 'Coordinate joint outbound prospecting swarms with strategic ecosystem alliances.',
      badge: 'Pillar 02'
    },
    {
      title: 'Customer Growth Intelligence',
      path: '/ai-native-sales/customer-growth-intelligence',
      summary: 'Leverage ecosystem implementation partners to drive long-term retention and account expansion.',
      badge: 'Pillar 08'
    }
  ],

  closingCtaHeadline: 'Turn Your Partner Network Into a Scalable Revenue Engine',
  closingCtaDescription: 'Eliminate channel conflict and unlock warm enterprise account overlaps with Ecosystem Revenue Growth. Schedule an alliances briefing today.'
};

