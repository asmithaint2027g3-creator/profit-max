import { AiSalesCapabilityPageData } from '../types';

export const page08CustomerGrowthIntelligence: AiSalesCapabilityPageData = {
  pageNumber: '08',
  title: 'Customer Growth Intelligence',
  slug: 'customer-growth-intelligence',
  canonicalPath: '/ai-native-sales/customer-growth-intelligence',
  eyebrow: 'AI NATIVE SALES / CUSTOMER GROWTH',
  heroHeadline: 'Find the Next Growth Opportunity Inside Your Existing Customer Base',
  heroSupporting: 'Existing customers represent the largest, most profitable opportunities for expansion, cross-sell, upsell, and long-term enterprise value. However, organizations frequently miss these opportunities when customer health, product adoption, business changes, stakeholder turnover, and renewal timing remain spread across disconnected systems. Customer Growth Intelligence helps teams understand customer needs, recognize expansion signals, identify retention risks, and coordinate timely action.',
  primaryCTA: 'Drive Customer Expansion',
  secondaryCTA: 'Book a Consultation',
  targetDecisionMakers: [
    'Chief Revenue Officers (CROs)',
    'Chief Customer Officers (CCOs)',
    'VP Customer Success & Account Management',
    'Heads of Retention & Renewal Operations',
    'Chief Financial Officers (CFOs)'
  ],
  visualTheme: 'customer',

  businessProblemTitle: 'The Hidden Leaks and Overlooked Upsells in Existing Accounts',
  businessProblemSubtitle: 'While organizations invest heavily in acquiring new logos, they ignore whitespace inside existing enterprise accounts and discover renewal risks too late to prevent churn.',
  businessProblems: [
    {
      id: 'churn-surprise',
      title: 'Late-Stage Churn Notice Blindness',
      symptom: 'Account managers discover an enterprise client is not renewing only 30 days before contract expiration, leaving zero time for remediation.',
      rootCause: 'Customer health is evaluated through subjective rep sentiment rather than automated product telemetry and stakeholder engagement signals.',
      impact: 'Gross Revenue Retention (GRR) collapses below 84%, forcing new sales teams to fill a leaky bucket.'
    },
    {
      id: 'unmapped-whitespace',
      title: 'Invisible Enterprise Account Whitespace',
      symptom: 'Vendors hold a $50k contract in one subsidiary while sister business units and regional divisions buy competing software.',
      rootCause: 'Account teams lack automated cross-subsidiary mapping to track unpenetrated departments, licenses, and use-cases.',
      impact: 'Net Revenue Retention (NRR) stagnates near 100%, trailing elite SaaS benchmarks of 120-135%.'
    },
    {
      id: 'champion-turnover',
      title: 'Silent Champion Turnover & Relationship Decay',
      symptom: 'The key executive who championed your software departs, and the incoming leader replaces your platform with their familiar vendor.',
      rootCause: 'Lack of automated monitoring for executive movements and failure to multi-thread across multiple layers of operational champions.',
      impact: 'Unexpected churn of tier-1 accounts accounting for hundreds of thousands of dollars in annual recurring revenue.'
    }
  ],

  subSubmenus: [
    {
      id: 'expansion-intelligence',
      title: 'Expansion Intelligence',
      badge: 'Whitespace Discovery',
      businessQuestion: 'Which divisions, subsidiaries, and departments within our current customer accounts have high propensity to purchase?',
      description: 'Maps the organizational chart and technology whitespace across enterprise customer divisions to identify expansion opportunities.',
      businessProblem: 'Account managers focus only on maintaining the existing contract, leaving sister divisions and new regional business units untouched.',
      howItWorks: 'Correlates corporate subsidiary ownership structures with internal product usage telemetry and executive hiring to detect new department needs.',
      informationUsed: [
        'Corporate parent-subsidiary structures and global business unit hierarchies',
        'Current license utilization rates, seat capacity limits, and API usage surges',
        'Executive job postings in non-contracted customer departments',
        'Cross-department collaboration signals and internal user invitation graphs'
      ],
      workflowSupport: 'Generates account expansion dossiers with pre-mapped decision-makers in adjacent divisions and pre-calculated business cases.',
      outcomesSupported: 'Unlocks 2.8x more expansion pipeline per enterprise account and increases multi-division penetration by 45%.',
      humanOversight: 'Strategic Account Manager evaluates organizational politics before initiating outreach to sister business units.',
      kpis: [
        { metric: 'Account Expansion Pipeline', definition: 'Qualified pipeline generated from existing enterprise accounts', target: '$5.2M/Qtr' },
        { metric: 'Multi-Division Penetration', definition: 'Enterprise customers deployed across 2+ distinct business units', target: '48.2%' },
        { metric: 'Time-to-Second-Contract', definition: 'Months elapsed between initial customer contract and first division expansion', target: '6.4 Mos' }
      ]
    },
    {
      id: 'cross-sell',
      title: 'Cross-Sell',
      badge: 'Product Affinity Modeling',
      businessQuestion: 'Which complementary platform modules or service tiers will deliver immediate value to this specific customer use-case?',
      description: 'Product affinity models that recommend complementary platform modules based on current feature usage, industry vertical, and workflow maturity.',
      businessProblem: 'Reps pitch random product add-ons during quarterly business reviews without understanding the customer’s immediate technical bottlenecks.',
      howItWorks: 'Evaluates feature telemetry against successful product adoption trajectories of similar customer cohorts, pinpointing the optimal moment to propose new modules.',
      informationUsed: [
        'Granular product telemetry: feature frequency, workflow completion, and custom integrations',
        'Customer support ticket themes highlighting unmet functional needs or manual workarounds',
        'Historical cross-sell adoption sequences that yielded highest customer retention',
        'Quarterly business review action items and stated executive operational priorities'
      ],
      workflowSupport: 'Presents account executives with verified Cross-Sell Opportunity Cards highlighting specific customer telemetry justifying the recommendation.',
      outcomesSupported: 'Increases cross-sell proposal acceptance from 16% to 42% and elevates multi-product customer ARR by 38%.',
      humanOversight: 'Customer Success Manager and Account Executive confirm operational readiness before pitching new modules.',
      kpis: [
        { metric: 'Cross-Sell Conversion Rate', definition: 'Cross-sell proposals accepted and contracted by existing clients', target: '42.4%' },
        { metric: 'Multi-Product Customer Share', definition: 'Percentage of customer base utilizing 2+ distinct platform products', target: '56.0%' },
        { metric: 'Cross-Sell ARR Contribution', definition: 'Net new recurring revenue generated from module expansion', target: '$3.4M/Qtr' }
      ]
    },
    {
      id: 'upsell',
      title: 'Upsell',
      badge: 'Usage & Tier Progression',
      businessQuestion: 'When is a customer approaching usage thresholds, and how do we guide them to a higher-capacity enterprise tier?',
      description: 'Monitors license consumption, transaction volume, and feature limits to automate proactive, value-grounded tier upgrade pathways.',
      businessProblem: 'Customers hit hard usage limits unexpectedly, causing system lockouts and angry executive escalations rather than smooth upgrades.',
      howItWorks: 'Tracks consumption velocity toward 80% and 90% capacity thresholds, modeling projected growth and proposing customized enterprise tier upgrades.',
      informationUsed: [
        'Real-time seat utilization, active monthly users, and license allocation logs',
        'Consumption metrics: API calls, data storage volume, compute hours, or transaction counts',
        'Contractual overage terms and historical seasonal volume spikes',
        'Value realization metrics and cost-benefit analysis of higher-tier commitments'
      ],
      workflowSupport: 'Alerts account managers 60 days before anticipated limit breaches with customized tier transition proposals and volume discounts.',
      outcomesSupported: 'Eliminates friction-laden overage billing disputes and drives seamless tier progression, lifting average ARR per customer by 28%.',
      humanOversight: 'Account Director leads tier transition discussions and structures long-term contractual volume commitments.',
      kpis: [
        { metric: 'Proactive Tier Upgrade Rate', definition: 'Customers upgrading tiers prior to encountering hard usage limits', target: '88.5%' },
        { metric: 'Average Revenue Per Account (ARPA)', definition: 'Year-over-year expansion in average annual recurring revenue per account', target: '+28.2%' },
        { metric: 'Overage Dispute Elimination', definition: 'Reduction in billing disputes related to unexpected usage charges', target: '-92.0%' }
      ]
    },
    {
      id: 'renewal-intelligence',
      title: 'Renewal Intelligence',
      badge: 'Retention Predictor',
      businessQuestion: 'What is the true empirical renewal probability for contracts expiring over the next 180 days, and what actions are required?',
      description: 'Predicts renewal outcomes 6 to 9 months in advance by aggregating telemetry, executive alignment, support sentiment, and commercial contract terms.',
      businessProblem: 'Renewal forecasts are based on optimistic rep assumptions, masking deep-seated customer dissatisfaction until non-renewal notices arrive.',
      howItWorks: 'Applies neural classification models trained on historical churn and renewal patterns, scoring renewal risk across 16 objective operational dimensions.',
      informationUsed: [
        'Contract expiration dates, renewal terms (auto-renew vs manual), and price escalator clauses',
        'Product adoption depth, executive login frequency, and license activation percentages',
        'Customer support escalation frequency, resolution satisfaction scores, and open P1 tickets',
        'Executive sponsor departure alerts and recent corporate restructuring telemetry'
      ],
      workflowSupport: 'Categorizes expiring accounts into Green (Auto-Advance), Yellow (Action Required), and Red (Executive Intervention Needed) with prescribed playbooks.',
      outcomesSupported: 'Drives Gross Revenue Retention (GRR) from 86% to 96.2% and provides a full 180 days of early warning for at-risk accounts.',
      humanOversight: 'VP Customer Success and Account Executives conduct monthly reviews of all accounts in Yellow and Red renewal categories.',
      kpis: [
        { metric: 'Gross Revenue Retention (GRR)', definition: 'Contract value retained from existing customer base excluding expansion', target: '96.2%' },
        { metric: 'Renewal Early Warning Horizon', definition: 'Average advance warning days provided on accounts with elevated churn risk', target: '180 Days' },
        { metric: 'On-Time Renewal Rate', definition: 'Contracts successfully executed on or before scheduled expiration date', target: '94.8%' }
      ]
    },
    {
      id: 'customer-retention',
      title: 'Customer Retention',
      badge: 'Churn Mitigation',
      businessQuestion: 'How do we systematically detect and remediate customer friction before relationship decay becomes irreversible?',
      description: 'Automated intervention workflows that mobilize customer success, technical support, and executive sponsors whenever relationship health dips.',
      businessProblem: 'Customer health alerts trigger isolated emails that fail to address the underlying product adoption or organizational issues driving dissatisfaction.',
      howItWorks: 'Detects leading indicators of churn (e.g. key user departure, declining weekly logins) and launches coordinated cross-functional recovery workflows.',
      informationUsed: [
        'Telemetry on login frequency drop-offs (>30% decline over 30 days)',
        'Unresolved customer technical feedback and product feature requests',
        'Executive leadership turnover and champion career transitions',
        'Competitor displacement signals and external contract review activity'
      ],
      workflowSupport: 'Assigns targeted retention plays: technical architecture health checks, executive sponsor check-ins, or customized training workshops.',
      outcomesSupported: 'Rescues 42% of flagged at-risk customer accounts, protecting millions of dollars in recurring enterprise software revenue.',
      humanOversight: 'Customer Success Manager leads customer recovery initiatives and validates sentiment recovery with customer leadership.',
      kpis: [
        { metric: 'At-Risk Customer Recovery Rate', definition: 'Accounts flagged with critical churn indicators successfully retained', target: '42.8%' },
        { metric: 'Net Revenue Retention (NRR)', definition: 'Total revenue retained and expanded across customer cohorts over 12 months', target: '124.5%' },
        { metric: 'Customer Health Stability', definition: 'Percentage of customer portfolio maintaining Green health classification', target: '89.4%' }
      ]
    }
  ],

  workflowTitle: 'Customer Growth & Retention Operating Lifecycle',
  workflowSubtitle: 'From continuous health telemetry to whitespace discovery, proactive upsells, and predictable renewals.',
  workflowSteps: [
    {
      step: '01',
      name: 'Continuous Health & Adoption Telemetry',
      description: 'Monitors product consumption, executive engagement, and support ticket sentiment across accounts.',
      inputs: 'Application telemetry, support ticketing systems, executive login logs',
      aiAction: 'Calculates dynamic Customer Health Score and flags leading churn indicators.',
      humanGate: 'CSM reviews automated health score updates during weekly cohort reviews.',
      output: 'Live Customer Health Dashboard & Risk Stratification'
    },
    {
      step: '02',
      name: 'Whitespace & Expansion Opportunity Mapping',
      description: 'Analyzes corporate hierarchy to locate unpenetrated divisions and high-affinity modules.',
      inputs: 'Customer subsidiary tree, product usage patterns, hiring trends',
      aiAction: 'Identifies expansion target departments and models cross-sell propensity.',
      humanGate: 'Account Director confirms corporate relationship politics.',
      output: 'Prioritized Account Whitespace Map & Cross-Sell Opportunity Brief'
    },
    {
      step: '03',
      name: 'Proactive Tier Progression & Upsell',
      description: 'Engages customers reaching 80%+ usage capacity with tailored upgrade proposals.',
      inputs: 'License utilization telemetry, transaction velocity, contract terms',
      aiAction: 'Drafts customized enterprise tier upgrade proposal with volume economics.',
      humanGate: 'Account Executive presents upgrade proposal to customer sponsor.',
      output: 'Contract Amendment Executing Expanded Platform Capacity'
    },
    {
      step: '04',
      name: '180-Day Predictable Renewal Execution',
      description: 'Initiates structured renewal milestones 6 months ahead of contract expiration.',
      inputs: 'Contract expiration dates, value realization scorecards, price escalators',
      aiAction: 'Prepares renewal agreement, flags outstanding risks, and coordinates signature.',
      humanGate: 'VP Customer Success signs off on renewal terms and concessions.',
      output: 'Executed Multi-Year Enterprise Contract Renewal'
    }
  ],

  useCases: [
    {
      title: 'Global Enterprise Whitespace Expansion',
      segment: 'Supply Chain & Logistics Software',
      situation: 'A global food conglomerate had a $120k contract in its North American beverage division, while 8 other international divisions operated on fragmented tools.',
      approach: 'Deployed Expansion Intelligence to map all 8 subsidiaries, identifying common supply chain compliance challenges and crafting tailored division proposals.',
      result: 'Expanded the customer relationship from a single division to 6 global business units within 14 months, driving total account ARR from $120k to $1.85M.',
      metrics: [
        { label: 'Account ARR Lift', value: '15.4x ($1.85M)' },
        { label: 'Divisions Onboarded', value: '6 Divisions' }
      ]
    },
    {
      title: '180-Day Renewal Rescue & Churn Elimination',
      segment: 'Healthcare Enterprise EHR Integration Platform',
      situation: 'An enterprise hospital network with $650k ARR was secretly preparing an RFP to replace the platform following an unresolved C-suite champion departure.',
      approach: 'Renewal Intelligence detected the lack of executive engagement 190 days ahead of expiration, triggering an immediate clinical leadership outreach workshop.',
      result: 'Re-engaged the new Chief Medical Officer, resolved outstanding workflow grievances, and secured an early 3-year contract renewal with an 18% expansion.',
      metrics: [
        { label: 'Rescued ARR', value: '$650k' },
        { label: 'Contract Extension', value: '3-Year Lock' }
      ]
    },
    {
      title: 'Automated Consumption Upsell Progression',
      segment: 'Developer Platform & Cloud Storage API',
      situation: 'High-growth tech customers routinely hit API rate limits unexpectedly, leading to service throttling and frustrated engineering leadership.',
      approach: 'Implemented automated Consumption Upsell workflows that detected accounts exceeding 80% capacity, offering proactive volume discounts for higher tiers.',
      result: 'Eliminated overage billing disputes completely, and 88% of expanding customers smoothly upgraded to annual enterprise commitments before hitting limits.',
      metrics: [
        { label: 'Tier Upgrade Rate', value: '88.5%' },
        { label: 'NRR Surge', value: '138.2%' }
      ]
    }
  ],

  dashboardTitle: 'Customer Growth, Health & Net Retention Telemetry',
  dashboardSubtitle: 'Real-time visibility into customer health score distributions, whitespace expansion pipeline, and renewal predictability.',
  dashboardBadge: 'Customer Retention Engine v2.4',
  dashboardMetrics: [
    { label: 'Net Revenue Retention (NRR)', value: '124.5%', change: '+14.2 pts YoY', note: 'Top-quartile enterprise benchmark' },
    { label: 'Gross Revenue Retention (GRR)', value: '96.2%', change: '+8.4 pts vs baseline', note: 'Low churn portfolio' },
    { label: 'Account Expansion Pipeline', value: '$18.4M', change: '+48% YoY', note: 'Sourced from existing accounts' },
    { label: 'At-Risk Churn Recovery', value: '42.8%', change: '34 accounts saved', note: 'Proactive intervention outcome' }
  ],
  dashboardVisualType: 'matrix',

  kpiFrameworkTitle: 'Customer Growth & Retention KPI Measurement Framework',
  kpis: [
    {
      name: 'Net Revenue Retention (NRR)',
      formula: '(Starting ARR + Expansion - Contraction - Churn) ÷ Starting ARR',
      definition: 'Percentage of recurring revenue retained from existing customers over a 12-month window, including upsell and cross-sell expansion.',
      reportingWindow: 'Annual Cohort',
      illustrativeValue: '124.5%',
      interpretation: 'The definitive indicator of product value and compound enterprise growth; elite benchmarks exceed 120%.'
    },
    {
      name: 'Gross Revenue Retention (GRR)',
      formula: '(Starting ARR - Contraction - Churn) ÷ Starting ARR',
      definition: 'Percentage of recurring revenue retained from existing customers over 12 months, strictly excluding expansion revenue.',
      reportingWindow: 'Annual Cohort',
      illustrativeValue: '96.2%',
      interpretation: 'Measures baseline product retention and customer stickiness; top enterprise software companies target >95%.'
    },
    {
      name: 'Account Expansion Velocity',
      formula: 'Expansion ARR Sourced ÷ Total Active Enterprise Customer Accounts',
      definition: 'Average annual dollar expansion generated per existing customer account through upsell and cross-sell.',
      reportingWindow: 'Quarterly Audit',
      illustrativeValue: '$42,800 / Acct',
      interpretation: 'Quantifies account management efficiency and multi-division land-and-expand execution.'
    },
    {
      name: 'Renewal Early-Warning Precision',
      formula: 'Accounts Correctly Flagged as Yellow/Red ÷ Total Churned Accounts',
      definition: 'Accuracy of neural retention models in predicting customer non-renewal at least 120 days prior to contract expiration.',
      reportingWindow: 'Quarterly',
      illustrativeValue: '94.2%',
      interpretation: 'High precision ensures customer success teams never get blindsided by unexpected churn notices.'
    }
  ],

  governanceTitle: 'Customer Data Ethics, Communication Frequency & Account Governance',
  governanceSubtitle: 'Strict enterprise guardrails governing customer data privacy, representative handoffs, and ethical upsell communication.',
  governanceItems: [
    {
      area: 'Customer Telemetry Privacy & Security',
      policy: 'Product usage telemetry is ingested strictly for operational performance and account health; zero customer data is used to train public LLMs.',
      humanCheckpoint: 'CISO conducts semi-annual data governance audits to verify encryption at rest and in transit.',
      auditTrail: 'Customer telemetry access logs preserved in compliance repository.'
    },
    {
      area: 'Communication Fatigue & Frequency Caps',
      policy: 'Automated algorithms enforce strict communication caps: maximum 2 automated touchpoints per month per customer stakeholder persona.',
      humanCheckpoint: 'CSM reviews communication history before launching automated satisfaction or expansion campaigns.',
      auditTrail: 'Outreach frequency and delivery timestamps recorded in customer CRM records.'
    },
    {
      area: 'Account Ownership & Representative Routing',
      policy: 'Customer Success Managers and Account Executives operate under strict territorial and account assignment rules with joint quota incentives.',
      humanCheckpoint: 'VP Customer Success resolves any expansion commission or account coverage questions.',
      auditTrail: 'Account ownership assignment history permanently preserved in CRM.'
    },
    {
      area: 'Fair Renewal Terms & Price Transparency',
      policy: 'Renewal proposals must disclose all contractual price indexation formulas and volume tiers clearly without deceptive billing fees.',
      humanCheckpoint: 'Commercial Legal and Deal Desk audit all customer renewal proposals prior to transmission.',
      auditTrail: 'Executed contract amendments and pricing escalation terms archived in ERP.'
    }
  ],

  relatedCapabilities: [
    {
      title: 'Pricing Intelligence',
      path: '/ai-native-sales/pricing-intelligence',
      summary: 'Ensure customer expansion proposals optimize margin and willingness-to-pay economics.',
      badge: 'Pillar 06'
    },
    {
      title: 'Revenue Acceleration',
      path: '/ai-native-sales/revenue-acceleration',
      summary: 'Advance complex multi-million dollar enterprise expansion deals through dedicated war rooms.',
      badge: 'Pillar 05'
    },
    {
      title: 'Autonomous GTM Command Center',
      path: '/ai-native-sales/autonomous-gtm-command-center',
      summary: 'Monitor portfolio NRR, GRR, and customer health telemetry across all revenue segments.',
      badge: 'Pillar 09'
    }
  ],

  closingCtaHeadline: 'Turn Your Existing Customer Base Into Your Primary Growth Engine',
  closingCtaDescription: 'Stop letting churn erode your hard-won revenue. Schedule an executive consultation to evaluate Customer Growth Intelligence.'
};

