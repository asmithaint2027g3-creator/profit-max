export interface GtmRevOpsFramework {
  title: string;
  description: string;
  steps: string[];
  formula?: string;
}

export interface GtmRevOpsKpi {
  name: string;
  formula?: string;
  description: string;
}

export interface GtmRevOpsSection {
  id: string;
  slug: string;
  number: string;
  title: string;
  subtitle: string;
  badge: string;
  badgeColor: string;
  intro: string;
  challenges: string[];
  frameworks: GtmRevOpsFramework[];
  kpis: GtmRevOpsKpi[];
  profitmachinesConnection: string[];
  visualType: 'icp' | 'buyerJourney' | 'funnel' | 'revops' | 'intelligence' | 'forecasting' | 'capacity' | 'growth';
}

export interface PracticalApplicationScenario {
  question: string;
  situation: string;
  investigationQuestions: string[];
  relevantDisciplines: string[];
  analyticalMethods: string[];
  kpis: string[];
  nextSteps: string[];
}

export const GTM_REVOPS_SECTIONS: GtmRevOpsSection[] = [
  // 01. ICP FRAMEWORKS
  {
    id: 'icp-frameworks',
    slug: 'icp-frameworks',
    number: '01',
    title: 'ICP Frameworks',
    subtitle: 'Identify the Customers Most Likely to Create Sustainable Revenue',
    badge: 'Targeting',
    badgeColor: 'blue',
    intro: 'An Ideal Customer Profile (ICP) defines the specific organizations that derive the highest value from your commercial solution while providing the highest lifetime commercial returns with minimal operational friction. Moving beyond basic firmographics, a modern ICP synthesizes technographic infrastructure, operational readiness, behavioral intent telemetry, and commercial unit economics to focus outbound bandwidth where conversion probability is mathematically superior.',
    challenges: [
      'Pursuing low-margin accounts that consume high support bandwidth',
      'Inconsistent definition of ideal accounts between Sales and Marketing',
      'High outbound bounce rates and declining cadence response velocities',
      'Long sales cycles caused by misdiagnosed customer technical readiness',
      'Premature discounting driven by targeting price-sensitive segments',
      'High first-year customer churn from structurally poor-fit accounts',
      'Inability to distinguish high-intent accounts from passive browsers'
    ],
    frameworks: [
      {
        title: 'Firmographic & Technographic Calibration',
        description: 'Define deterministic organizational boundaries across headcount, annual revenue, cloud architecture, and CRM stack maturity.',
        steps: [
          'Filter addressable market by industry verticals & revenue tiers',
          'Audit installed enterprise software & infrastructure stacks',
          'Identify cloud migration & digital transformation triggers',
          'Eliminate sub-scale accounts with insufficient ACV potential'
        ]
      },
      {
        title: 'Operational Maturity Assessment',
        description: 'Evaluate prospect process complexity, governance requirements, and operational bottlenecks before initiating outbound engagement.',
        steps: [
          'Map buyer workflow maturity across commercial functions',
          'Diagnose operational pain points and cost of inaction',
          'Verify organizational readiness for modern AI automation',
          'Score prospect change-management capacity'
        ]
      },
      {
        title: 'Behavioral & Dark-Funnel Intent Telemetry',
        description: 'Capture first-party website interactions, third-party vendor comparison signals, and category research velocity.',
        steps: [
          'Ingest third-party topic research and intent surges',
          'Track anonymous account-level visits to pricing and demo pages',
          'Aggregate content consumption across key buying personas',
          'Trigger priority outbound alerts upon multi-signal convergence'
        ]
      },
      {
        title: 'Commercial Unit Economics Fit',
        description: 'Ensure target accounts satisfy minimum threshold criteria for Annual Contract Value (ACV), payback period, and expansion potential.',
        steps: [
          'Benchmark estimated ACV against customer acquisition cost (CAC)',
          'Model 36-month expansion trajectory and Net Revenue Retention',
          'Assess budget authority and executive sponsorship presence',
          'Disqualify accounts failing gross margin contribution hurdles'
        ]
      },
      {
        title: 'Weighted ICP Account Scoring Model',
        description: 'Combine multi-dimensional attributes into an objective account priority score from 0 to 100 to govern outbound capacity.',
        steps: [
          'Assign mathematical weights: Firmographic (25%), Tech (25%), Intent (30%), Margin (20%)',
          'Calculate composite account scores across total addressable database',
          'Segment database into Tier 1 (90+), Tier 2 (75-89), and Tier 3 (60-74)',
          'Automate CRM routing of top decile accounts to senior reps'
        ],
        formula: 'ICP Score = (0.25 × Firmographic) + (0.25 × Technographic) + (0.30 × Intent) + (0.20 × Unit Economics)'
      },
      {
        title: 'Continuous ICP Validation & Recalibration',
        description: 'Institute quarterly feedback loops analyzing closed-won vs. closed-lost deal telemetry to refine ICP parameters dynamically.',
        steps: [
          'Analyze top 20% most profitable customer cohorts quarterly',
          'Isolate attributes correlated with fastest sales cycles and highest retention',
          'Identify deal loss patterns across low-fit prospect segments',
          'Recalibrate CRM scoring weights based on empirical revenue outcomes'
        ]
      }
    ],
    kpis: [
      { name: 'ICP-Fit Account Percentage', formula: '(Active Pipeline Accounts Matching ICP ÷ Total Pipeline Accounts) × 100', description: 'Measures the purity of sales pipeline against defined ideal customer parameters.' },
      { name: 'Target Account Engagement Velocity', formula: '(Engaged Tier-1 Accounts ÷ Total Tier-1 Target Accounts) × 100', description: 'Percentage of high-value named accounts actively responding to outbound touches.' },
      { name: 'Qualified Opportunity Rate by Segment', formula: '(Qualified SQLs ÷ Total Inbound/Outbound Leads) by ICP Tier', description: 'Conversion efficiency comparison between Tier 1, Tier 2, and non-ICP accounts.' },
      { name: 'Pipeline Contribution by ICP Tier', formula: 'Dollar Value of Tier-1 Pipeline ÷ Total Pipeline Dollar Value', description: 'Ensures marketing and SDR bandwidth is primarily generating enterprise-grade pipeline.' },
      { name: 'Win Rate by ICP Segment', formula: 'Closed-Won Deals in Tier ÷ Total Qualified Opportunities in Tier', description: 'Validates that accounts identified as high-fit convert at substantially higher rates.' },
      { name: 'Average Deal Size (ACV) Lift', formula: 'Mean Won Contract Value in Tier 1 vs. Historical Non-Tier Baseline', description: 'Monitors commercial value expansion achieved through strict ICP targeting discipline.' }
    ],
    profitmachinesConnection: [
      'Profit Pool Discovery ingests multi-source intent data to isolate top-decile revenue accounts',
      'Autonomous ICP Engine synthesizes firmographic, technographic, and dark-funnel telemetry in real time',
      'Buyer Intelligence models stakeholder buying committee dynamics across target accounts',
      'Dynamic Lead Routing directs verified Tier-1 accounts directly to senior account executives'
    ],
    visualType: 'icp'
  },

  // 02. BUYER JOURNEY MODELS
  {
    id: 'buyer-journey-models',
    slug: 'buyer-journey-models',
    number: '02',
    title: 'Buyer Journey Models',
    subtitle: 'Understand How Buyers Discover, Evaluate and Choose Solutions',
    badge: 'Journey',
    badgeColor: 'emerald',
    intro: 'Modern enterprise B2B purchasing is rarely linear. It involves an average of 7 to 12 cross-functional stakeholders navigating competing internal priorities, strict risk assessments, technical compliance evaluations, and complex procurement checkpoints. Comprehensive buyer journey modeling aligns sales choreography, marketing content, and technical validation to the exact psychological and operational stages of the buying committee.',
    challenges: [
      'Single-threaded sales reps engaging only one champion without committee access',
      'Marketing generating content that fails to address procurement or security concerns',
      'Deals stalling unexpectedly at legal and compliance verification stages',
      'Buyers conducting 70% of evaluation anonymously before contacting sales',
      'Misalignment between rep sales stages and buyer decision milestones',
      'Failure to identify latent business triggers that create urgent buying mandates',
      'Inconsistent post-sale handoffs eroding buyer trust during implementation'
    ],
    frameworks: [
      {
        title: 'Problem Recognition & Latent Trigger Mapping',
        description: 'Identify the operational catalysts, market disruptions, and executive mandates that force organizations to seek solutions.',
        steps: [
          'Document primary commercial pain points per executive persona',
          'Identify external regulatory or macroeconomic disruption triggers',
          'Publish provocative diagnostic content addressing latent operational risk',
          'Engage buying teams at the earliest problem-crystallization phase'
        ]
      },
      {
        title: 'Research & Solution Discovery Architecture',
        description: 'Provide self-directed digital evaluation paths, interactive ROI calculators, and authoritative architectural frameworks for anonymous research.',
        steps: [
          'De-gate high-value technical architecture whitepapers and benchmarks',
          'Deploy interactive ROI calculators to quantify operational value',
          'Build customer proof hubs highlighting peer transformation journeys',
          'Track anonymous account-level research patterns to guide sales outreach'
        ]
      },
      {
        title: 'Buying Committee Multi-Threading Matrix',
        description: 'Map and engage the seven canonical enterprise buying committee personas across economic, technical, and operational dimensions.',
        steps: [
          'Identify Economic Buyer (budget authority & boardroom ROI focus)',
          'Map Technical Evaluator (architecture, security, API & integration fit)',
          'Equip Business Champion with internal business case presentations',
          'Address Procurement & Legal requirements before contract presentation'
        ]
      },
      {
        title: 'Mutual Decision & Verification Roadmap',
        description: 'Establish shared mutual action plans (MAP) co-authored with the buyer, defining concrete verification milestones through contract execution.',
        steps: [
          'Draft mutual evaluation criteria and technical proof-of-value scope',
          'Establish agreed timelines for security review, legal redlines, and signoff',
          'Assign named executive sponsors on both vendor and client sides',
          'Maintain weekly milestone cadence to eliminate deal slippage'
        ]
      },
      {
        title: 'Implementation & Value Realization Bridge',
        description: 'Orchestrate seamless transitions from commercial agreement to operational deployment, securing early customer adoption milestones.',
        steps: [
          'Conduct comprehensive pre-kickoff sales-to-customer success handoffs',
          'Validate Day-30 time-to-first-value implementation milestones',
          'Track user adoption depth and operational software telemetry',
          'Review early performance metrics against original business case promises'
        ]
      },
      {
        title: 'Expansion & Executive Advocacy Cadence',
        description: 'Systematize customer account growth through structured quarterly business reviews, secondary use-case discovery, and executive peer advocacy.',
        steps: [
          'Deliver data-backed Quarterly Executive Business Reviews (QBRs)',
          'Identify adjacent departments and international subsidiary expansion opportunities',
          'Engage satisfied executive sponsors in peer advisory roundtables',
          'Secure contractual renewals 90 days prior to contract expiration'
        ]
      }
    ],
    kpis: [
      { name: 'Stage-to-Stage Progression Rate', formula: '(Opportunities Progressing to Next Journey Stage ÷ Total In-Stage Opportunities) × 100', description: 'Conversion speed and velocity between problem recognition and final decision.' },
      { name: 'Buying Committee Coverage Depth', formula: 'Average Validated Stakeholders Engaged per Enterprise Opportunity', description: 'Measures multi-threading breadth (target: 5+ verified personas on $100K+ deals).' },
      { name: 'Decision Cycle Duration', formula: 'Calendar Days Elapsed from Initial Discovery Meeting to Executed Contract', description: 'Monitors the compression of buyer evaluation and procurement timelines.' },
      { name: 'Content Consumption Engagement', formula: 'High-Intent Content Downloads & Interactive Diagnostic Completions per Account', description: 'Measures buyer committee self-education intensity during evaluation.' },
      { name: 'Mutual Action Plan Adherence', formula: '(Milestones Completed on Target Date ÷ Total Scheduled Milestones) × 100', description: 'Tracks buyer and vendor execution discipline against agreed close schedules.' },
      { name: 'Time-to-First-Value (TTFV)', formula: 'Days Elapsed from Contract Execution to Initial Production Value Realization', description: 'Key leading indicator for long-term account retention and expansion.' }
    ],
    profitmachinesConnection: [
      'Buyer Intelligence constructs dynamic multi-stakeholder organizational relationship graphs',
      'Conversation Telemetry surfaces unaddressed stakeholder objections during live meetings',
      'Hyper-Personalization Engine delivers tailored collateral to technical, financial, and executive buyers',
      'Automated Mutual Action Plans keep enterprise deals anchored to mutually agreed schedules'
    ],
    visualType: 'buyerJourney'
  },

  // 03. FUNNEL OPTIMIZATION
  {
    id: 'funnel-optimization',
    slug: 'funnel-optimization',
    number: '03',
    title: 'Funnel Optimization',
    subtitle: 'Turn Revenue Funnel Leakage into Measurable Opportunities for Improvement',
    badge: 'Conversion',
    badgeColor: 'violet',
    intro: 'A revenue funnel represents the continuous operational pipeline through which market demand is discovered, qualified, converted, and grown into long-term commercial value. Systematic funnel optimization applies quantitative stage-gate discipline, dark-funnel telemetry, and friction root-cause diagnostics to eliminate pipeline drop-off, compress deal cycle days, and multiply capital efficiency across every commercial dollar invested.',
    challenges: [
      'Severe lead qualification drop-off between Marketing MQLs and Sales SQLs',
      'Slow sales response times causing high-intent inbound leads to go cold',
      'Deals stagnating indefinitely in mid-funnel stages without clear exit criteria',
      'Inconsistent stage definitions across distributed global sales teams',
      'Failure to calculate revenue velocity across individual marketing channels',
      'High proposal-to-close leakage caused by unaddressed procurement blockers',
      'Disproportionate focus on top-of-funnel volume rather than conversion purity'
    ],
    frameworks: [
      {
        title: 'Full-Lifecycle Revenue Funnel Architecture',
        description: 'Standardize unified stage definitions spanning Awareness, Engagement, MQL, SQL, Opportunity, Proposal, Negotiation, Won, and Expansion.',
        steps: [
          'Document objective entry and exit criteria for all 11 funnel stages',
          'Enforce strict CRM stage progression validations to prevent rep subjectivity',
          'Align sales and marketing definitions under a single governed SLA',
          'Integrate post-sale customer retention and expansion stages into the funnel'
        ]
      },
      {
        title: 'Quantitative Funnel Leakage Diagnostic',
        description: 'Isolate the exact operational stages where conversion velocity decelerates and prospects abandon the evaluation pipeline.',
        steps: [
          'Calculate historical conversion rates between every consecutive stage pair',
          'Benchmark conversion performance by industry, lead source, and deal size',
          'Identify stages exhibiting greater than 20% negative variance from benchmark',
          'Deploy targeted process interventions to remediate isolated friction points'
        ]
      },
      {
        title: 'Lead Response & Routing Velocity SLA',
        description: 'Institute automated routing, instant qualification, and strict rep response time service-level agreements for high-intent inbound leads.',
        steps: [
          'Automate instant lead enrichment via API upon inbound form submission',
          'Route qualified enterprise accounts to dedicated account executives within 5 minutes',
          'Deploy autonomous conversational AI agents for immediate calendar scheduling',
          'Track SLA adherence dashboards with automated escalation for stalled leads'
        ]
      },
      {
        title: 'Revenue Velocity Mathematical Optimization',
        description: 'Model and optimize the compounding relationship between pipeline volume, win rates, average deal size, and sales cycle duration.',
        steps: [
          'Audit current baseline across the four velocity equation drivers',
          'Model revenue lift scenarios from single-variable 10% optimizations',
          'Prioritize interventions addressing the most constraining velocity lever',
          'Track compound ARR expansion across rolling 90-day measurement windows'
        ],
        formula: 'Revenue Velocity = (Qualified Opportunities × Win Rate × Average Deal Value) ÷ Average Sales Cycle Length'
      },
      {
        title: 'Stage-Gate Verification Protocol',
        description: 'Eliminate speculative forecast inflation by requiring verifiable customer commitments before opportunities advance in the CRM.',
        steps: [
          'Mandate confirmed economic buyer attendance before moving to Stage 3',
          'Require co-authored mutual action plan with verified dates for Stage 4',
          'Validate legal and procurement security clearance before Stage 5 Proposal',
          'Automate manager audits for opportunities exceeding stage aging thresholds'
        ]
      },
      {
        title: 'Win/Loss Empirical Root-Cause Analysis',
        description: 'Conduct structured quantitative post-mortems on closed-won and closed-lost opportunities to eliminate systematic execution flaws.',
        steps: [
          'Execute third-party or structured internal interviews with buyer stakeholders',
          'Categorize primary loss drivers across product, pricing, timing, and competition',
          'Correlate loss reasons with initial lead source and discovery quality',
          'Feed empirical objection patterns directly into sales enablement playbooks'
        ]
      }
    ],
    kpis: [
      { name: 'Lead-to-Opportunity Conversion Rate', formula: '(Stage 2 Qualified Opportunities ÷ Total Inbound/Outbound Leads) × 100', description: 'Key measure of initial qualification and targeting quality (benchmark: 15-25%).' },
      { name: 'Opportunity-to-Won Conversion Rate', formula: '(Closed-Won Deals ÷ Total Formally Created Opportunities) × 100', description: 'Overall sales execution and solution fit efficiency (benchmark: 25-35%).' },
      { name: 'Speed to First Sales Touch', formula: 'Minutes from Inbound Form Submission to Initial Sales Outreach/Meeting Booked', description: 'Directly impacts meeting show rates; targets <10 minutes for enterprise inbounds.' },
      { name: 'Stage Conversion Variance', formula: '(Actual Stage Conversion % - Target Stage Benchmark %) ÷ Target Benchmark', description: 'Identifies isolated bottlenecks across specific pipeline milestones.' },
      { name: 'Average Opportunity Aging by Stage', formula: 'Mean Calendar Days Opportunities Spend Active in Given Stage', description: 'Identifies stalled deals that require executive intervention or qualification purging.' },
      { name: 'Pipeline Velocity ($/Day)', formula: '(Qualified Pipeline × Win Rate × Average Deal Size) ÷ Sales Cycle Days', description: 'Comprehensive metric measuring daily revenue generation power.' }
    ],
    profitmachinesConnection: [
      'Revenue Operations practice eliminates data silos between marketing automation and CRM',
      'AI Prospecting Swarms deliver pre-qualified opportunities directly into active funnel stages',
      'Pipeline Telemetry flags stalled deals automatically when activity frequency drops below threshold',
      'Conversion Science models historical deal paths to recommend dynamic Next Best Actions'
    ],
    visualType: 'funnel'
  },

  // 04. REVOPS FRAMEWORKS
  {
    id: 'revops-frameworks',
    slug: 'revops-frameworks',
    number: '04',
    title: 'RevOps Frameworks',
    subtitle: 'Connect Sales, Marketing and Customer Success Through Revenue Operations',
    badge: 'Alignment',
    badgeColor: 'cyan',
    intro: 'Revenue Operations (RevOps) is the strategic operational engine that unifies the people, processes, systems, and data supporting the complete customer commercial lifecycle. By breaking down legacy departmental silos between Sales, Marketing, and Customer Success, RevOps establishes single-source-of-truth telemetry, deterministic workflow governance, and cross-functional accountability that turns commercial execution into a predictable, scalable science.',
    challenges: [
      'Fragmented tech stack of 15+ disconnected point tools without unified data integration',
      'Sales and Marketing reporting conflicting pipeline and attribution numbers to the board',
      'Inconsistent customer data across CRM, billing, and customer success databases',
      'Manual, error-prone spreadsheet forecasting consuming 20% of sales leadership bandwidth',
      'Friction points and lost context during sales-to-customer success customer handoffs',
      'Lack of clear operational ownership for revenue processes and technology governance',
      'Inability to measure full-funnel customer acquisition cost (CAC) and payback periods'
    ],
    frameworks: [
      {
        title: 'Unified RevOps Operating Model (People, Process, Tech, Data)',
        description: 'Organize revenue operations across four core pillars with defined governance, service SLAs, and operational ownership.',
        steps: [
          'People: Centralize revenue operations leadership reporting directly to CEO or CRO',
          'Process: Standardize lead handoffs, stage governance, and renewal workflows',
          'Tech: Rationalize duplicate software licenses and establish core GTM architecture',
          'Data: Build unified data schemas across CRM, marketing, and ERP systems'
        ]
      },
      {
        title: 'Single-Source-of-Truth Data Architecture',
        description: 'Design a unified revenue data plane connecting CRM records, billing telemetry, product usage logs, and customer support archives.',
        steps: [
          'Establish canonical customer account ID across all commercial tools',
          'Automate bi-directional data synchronization between CRM and product analytics',
          'Institute automated data deduplication and enrichment pipelines',
          'Enforce strict field validation rules to prevent manual rep data corruption'
        ]
      },
      {
        title: 'Cross-Functional Service Level Agreements (SLAs)',
        description: 'Define mathematical contracts between Marketing, Sales, and Customer Success governing lead handoffs, response speeds, and pipeline quotas.',
        steps: [
          'Marketing commits to defined monthly volume of verified ICP opportunities',
          'Sales commits to maximum 15-minute response SLA on inbound inquiries',
          'Customer Success commits to pre-kickoff onboarding within 48 hours of contract signoff',
          'Hold monthly joint SLA review sessions with automated compliance reporting'
        ]
      },
      {
        title: 'RevOps Technology Stack Rationalization',
        description: 'Audit, consolidate, and orchestrate the commercial software ecosystem to eliminate redundancy, reduce licensing waste, and optimize workflow velocity.',
        steps: [
          'Inventory all active commercial tools, seats, renewal dates, and utilization metrics',
          'Identify overlapping capabilities across engagement, enrichment, and analytics tools',
          'Consolidate point solutions into unified AI-native revenue operating platforms',
          'Reduce RevTech spend by 25-40% while improving system interoperability'
        ]
      },
      {
        title: 'Revenue Operations Maturity Matrix',
        description: 'Assess organizational operational capability across five progressive maturity stages from Fragmented to Autonomous RevOps.',
        steps: [
          'Stage 1 (Fragmented): Disconnected spreadsheets, siloed tools, uncoordinated handoffs',
          'Stage 2 (Standardized): Unified CRM, documented stage definitions, initial SLAs',
          'Stage 3 (Integrated): Cross-departmental RevOps team, automated data sync, unified KPIs',
          'Stage 4 (Predictive): Algorithmic forecasting, real-time intent telemetry, proactive alerts',
          'Stage 5 (Autonomous): Multi-agent AI swarms, deterministic governance, continuous optimization'
        ]
      },
      {
        title: 'Commercial Governance & Change Control',
        description: 'Establish rigorous change-management frameworks for CRM schema modifications, workflow automation rules, and system access permissions.',
        steps: [
          'Form cross-functional Revenue Technology Steering Committee',
          'Establish staging environment regression testing before production CRM deployments',
          'Maintain complete cryptographic audit logs of workflow automation updates',
          'Conduct quarterly data security and SOC-2 compliance verification reviews'
        ]
      }
    ],
    kpis: [
      { name: 'CRM Data Integrity Score', formula: '(Accurately Populated Mandatory Fields ÷ Total Tracked Records) × 100', description: 'Measures completeness and hygiene of customer database records.' },
      { name: 'Lead Handoff Efficiency SLA', formula: '(Leads Contacted within SLA Window ÷ Total Routed Leads) × 100', description: 'Operational compliance score tracking sales responsiveness to marketing pipeline.' },
      { name: 'Forecast Precision Index', formula: '100% - |(Actual Revenue - Forecasted Revenue) ÷ Actual Revenue|', description: 'Measures predictability and reliability of executive revenue projections.' },
      { name: 'Full-Funnel CAC Payback Period', formula: '(Total Sales & Marketing Spend in Period) ÷ (Net New ARR × Gross Margin %)', description: 'Months of gross profit required to recover customer acquisition investment.' },
      { name: 'RevTech Stack Utilization Rate', formula: '(Actively Used Features & Licenses ÷ Total Purchased Features & Licenses) × 100', description: 'Identifies software bloat and opportunities for vendor rationalization.' },
      { name: 'Revenue per RevOps Headcount', formula: 'Total Annual Company Revenue ÷ Full-Time RevOps Headcount', description: 'Measures operational leverage and efficiency of the central RevOps function.' }
    ],
    profitmachinesConnection: [
      'Autonomous Revenue OS serves as the single centralized operational plane for GTM execution',
      'Growth Intelligence delivers automated cross-functional pipeline dashboards and executive telemetry',
      'AI Trust & Governance ensures deterministic compliance across multi-cloud integrations',
      'RevOps practice architects custom CRM schemas and automated routing rules for enterprise scale'
    ],
    visualType: 'revops'
  },

  // 05. REVENUE INTELLIGENCE
  {
    id: 'revenue-intelligence',
    slug: 'revenue-intelligence',
    number: '05',
    title: 'Revenue Intelligence',
    subtitle: 'Convert Revenue Data into Actionable Commercial Intelligence',
    badge: 'Telemetry',
    badgeColor: 'amber',
    intro: 'Revenue Intelligence transforms passive historical CRM data into real-time, prescriptive operational guidance. By continuously ingesting buyer conversational sentiment, email engagement frequency, digital dark-funnel intent surges, and pipeline deal activity, Revenue Intelligence enables sales leaders to identify deal risks weeks before they happen, isolate true win factors, and guide revenue teams toward the highest-return actions.',
    challenges: [
      'Sales managers relying on rep optimism rather than empirical activity telemetry',
      'Critical buyer objections surfacing only at final contract review or post-loss',
      'Lack of visibility into actual customer engagement frequency between scheduled meetings',
      'Inability to identify competitor displacement efforts inside active enterprise opportunities',
      'Important deal context lost due to incomplete or delayed rep meeting notes in the CRM',
      'Failure to detect negative buying committee sentiment shifts early in the cycle',
      'Over-reliance on rear-view descriptive reporting rather than forward-looking prescriptive insight'
    ],
    frameworks: [
      {
        title: 'Multi-Stream Revenue Data Ingestion',
        description: 'Aggregate structured and unstructured commercial telemetry across CRM, video meetings, email exchanges, and digital buyer footprints.',
        steps: [
          'Capture audio/video recording and transcripts of customer discovery calls',
          'Ingest bi-directional email engagement metadata and response latency',
          'Track digital document viewing time, page drop-offs, and forward sharing',
          'Synthesize first-party telemetry with external industry and competitive signals'
        ]
      },
      {
        title: 'Real-Time Pipeline Health & Risk Scoring',
        description: 'Calculate algorithmic deal health scores based on stakeholder engagement depth, meeting momentum, and next-step commitments.',
        steps: [
          'Evaluate interaction frequency against historical win benchmarks',
          'Flag single-threaded deals lacking multi-persona engagement',
          'Detect stalled opportunities exceeding standard days without touchpoints',
          'Trigger automated management alerts for sudden deal health score declines'
        ]
      },
      {
        title: 'Conversational Intelligence & Sentiment Analysis',
        description: 'Analyze customer meeting dialogue to detect latent objections, pricing sensitivity, competitor mentions, and purchase urgency signals.',
        steps: [
          'Transcribe and summarize key meeting discussion points automatically',
          'Analyze customer talk-to-listen ratios and question frequency',
          'Detect positive buying triggers vs. hesitation phrases regarding pricing/budget',
          'Generate instant post-meeting action summaries with assigned rep owners'
        ]
      },
      {
        title: 'Buyer & Account Relationship Graphing',
        description: 'Construct visual stakeholder relationship graphs mapping internal champions, technical evaluators, economic buyers, and blockers.',
        steps: [
          'Map all participants appearing in emails, calendar invites, and proposals',
          'Evaluate individual stakeholder sentiment and engagement intensity',
          'Identify missing buying committee personas (e.g. absent CFO or CISO)',
          'Recommend targeted multi-threading outreach to bridge committee coverage gaps'
        ]
      },
      {
        title: 'Prescriptive Next Best Action Engine',
        description: 'Deliver dynamic, context-aware operational recommendations to reps based on high-performing historical deal progression patterns.',
        steps: [
          'Compare active opportunity dynamics with thousands of closed-won deals',
          'Identify optimal timing and content for follow-up communications',
          'Recommend executive sponsor engagement when deals encounter procurement delays',
          'Automate draft creation for follow-up emails, battlecards, and ROI summaries'
        ]
      },
      {
        title: 'Competitive Telemetry & Displacement Tracking',
        description: 'Monitor competitive mentions across live conversations to deploy real-time counter-positioning strategies and battlecards.',
        steps: [
          'Index competitor names, rival claims, and pricing models from customer calls',
          'Surface tailored competitive battlecards during active deal negotiations',
          'Track win/loss ratios against specific competitors across market segments',
          'Refine sales talk tracks based on winning objection-handling responses'
        ]
      }
    ],
    kpis: [
      { name: 'Pipeline Health Index', formula: 'Algorithmic Score (0-100) Evaluating Activity Frequency, Multi-Threading & Velocity', description: 'Composite indicator of pipeline viability and probability of close.' },
      { name: 'Deal At-Risk Detection Accuracy', formula: '(Slipped/Lost Deals Correctly Flagged in Advance ÷ Total Slipped/Lost Deals) × 100', description: 'Measures predictive reliability of early-warning revenue intelligence models.' },
      { name: 'Customer Engagement Latency', formula: 'Mean Business Hours Elapsed Between Buyer Inquiry and Verified Vendor Response', description: 'Tracks commercial responsiveness across ongoing active negotiations.' },
      { name: 'Stakeholder Committee Coverage', formula: '(Identified Active Decision Personas ÷ Standard 7-Persona Enterprise Benchmark) × 100', description: 'Ensures opportunities are protected against single-contact churn risk.' },
      { name: 'Next Best Action Adoption Rate', formula: '(Prescribed AI Recommendations Executed by Reps ÷ Total Recommendations) × 100', description: 'Measures sales team trust and operational adoption of revenue intelligence guidance.' },
      { name: 'Competitor Displacement Win Rate', formula: 'Deals Won Where Competitor Was Formally Evaluated ÷ Total Competitive Deals', description: 'Validates efficacy of competitive counter-positioning intelligence.' }
    ],
    profitmachinesConnection: [
      'Revenue Intelligence engine provides 360-degree pipeline telemetry and proactive risk alerts',
      'Buyer Intelligence automatically synthesizes enterprise 10-Ks, tech stacks, and committee graphs',
      'Conversation Telemetry analyzes meeting sentiment and isolates winning talk tracks across reps',
      'Autonomous Learning continuously refines predictive scoring based on verified business outcomes'
    ],
    visualType: 'intelligence'
  },

  // 06. FORECASTING MODELS
  {
    id: 'forecasting-models',
    slug: 'forecasting-models',
    number: '06',
    title: 'Forecasting Models',
    subtitle: 'Improve Revenue Planning Through Structured Forecasting',
    badge: 'Accuracy',
    badgeColor: 'rose',
    intro: 'Revenue forecasting bridges tactical pipeline execution with boardroom strategic planning. Moving away from subjective rep intuition and optimistic end-of-quarter commitments, modern revenue forecasting leverages empirical historical conversion data, stage-gate hygiene, weighted probability models, and multi-scenario simulations to provide executive leadership with predictable, reliable revenue projections.',
    challenges: [
      'Wide variances (>20%) between Day-1 quarterly forecasts and final Day-90 revenue',
      'Sales reps sandbagging deals or committing speculative opportunities that slip',
      'Lack of clear objective criteria defining Commit vs. Best Case vs. Pipeline categories',
      'Inability to anticipate end-of-quarter deal slippage into following fiscal periods',
      'Boardroom loss of confidence in executive revenue leadership projections',
      'Over-reliance on historical run rates during market shifts or economic volatility',
      'Failure to account for customer renewal contraction and churn in top-line models'
    ],
    frameworks: [
      {
        title: 'Triangulated Multi-Model Forecasting Architecture',
        description: 'Combine three independent forecasting methodologies (historical run-rate, bottom-up weighted pipeline, and AI predictive scoring) to eliminate single-method bias.',
        steps: [
          'Calculate top-down historical cohort and seasonal run-rate baseline',
          'Aggregate bottom-up rep commit forecasts calibrated by stage-gate criteria',
          'Execute machine-learning predictive win probability models on open pipeline',
          'Triangulate variance between models to isolate over-optimistic projections'
        ]
      },
      {
        title: 'Objective Forecast Category Governance',
        description: 'Establish mathematically rigorous, non-negotiable definitions for Pipeline, Best Case, Commit, and Closed categories.',
        steps: [
          'Commit: Validated budget, legal redlines complete, closing within 30 days (>85% certainty)',
          'Best Case: Verified economic sponsor, active mutual action plan, technical signoff (>50% certainty)',
          'Pipeline: Qualified opportunity advancing through early discovery and validation (>20% certainty)',
          'Enforce formal managerial signoff before any deal transitions to Commit'
        ]
      },
      {
        title: 'Calibrated Weighted Pipeline Modeling',
        description: 'Apply empirically calculated stage-conversion probabilities derived from historical closed deals rather than arbitrary rounded percentages.',
        steps: [
          'Audit rolling 12-month historical conversion rates across every pipeline stage',
          'Segment conversion probabilities by deal size tiers and customer industry',
          'Multiply open opportunity values by empirical segment win probabilities',
          'Sum weighted values across pipeline to establish mathematically defensible forecast'
        ],
        formula: 'Weighted Forecast = ∑ (Opportunity Contract Value × Empirical Historical Stage Win Probability)'
      },
      {
        title: 'Multi-Scenario Planning (Conservative, Base, Optimistic)',
        description: 'Model three distinct quarterly revenue realization scenarios accounting for macroeconomic risk, competitive pressure, and sales cycle elasticity.',
        steps: [
          'Conservative: 100% of Closed-Won + 80% of Commit, zero Best Case inclusion',
          'Base Case: 100% of Closed-Won + 90% of Commit + 40% of Best Case',
          'Optimistic: 100% of Closed-Won + 95% of Commit + 65% of Best Case + 15% Pipeline pull-in',
          'Align executive hiring, marketing spend, and operational budget to Base Case'
        ]
      },
      {
        title: 'Deal Slippage & Push Analysis Protocol',
        description: 'Track and analyze opportunities whose expected close dates repeatedly roll over into subsequent quarters without positive progression.',
        steps: [
          'Automatically flag deals whose close dates have slipped more than twice',
          'Audit slipped deals for underlying buyer budget freezes or vendor re-evaluations',
          'Enforce strict requalification review with executive sales leadership',
          'Remove chronic slippage deals from Commit forecast categories'
        ]
      },
      {
        title: 'Quarterly Forecast Variance Retrospective',
        description: 'Conduct structured post-quarter analyses comparing submitted forecasts against actual revenue to calibrate future accuracy.',
        steps: [
          'Calculate absolute percentage variance between Week-1 commit and final actual ARR',
          'Measure forecast accuracy scorecards by sales manager and regional territory',
          'Identify individual rep biases (consistent over-promising or sandbagging)',
          'Calibrate future forecasting weights to neutralize identified managerial biases'
        ]
      }
    ],
    kpis: [
      { name: 'Quarterly Forecast Accuracy', formula: '100% - (|Actual Closed Revenue - Week-1 Forecast| ÷ Actual Closed Revenue) × 100', description: 'Measures precision of executive revenue predictions (target: >95%).' },
      { name: 'Commit Conversion Reliability', formula: '(Closed-Won Deals Originating in Commit ÷ Total Deals in Commit) × 100', description: 'Verifies integrity of the Commit category (benchmark: >85%).' },
      { name: 'Deal Slippage Rate', formula: '(Deals with Close Date Pushed to Next Quarter ÷ Total Active Pipeline Deals) × 100', description: 'Monitors timeline friction and deal progression health.' },
      { name: 'Pipeline Coverage Multiple', formula: 'Total Active Qualified Pipeline ÷ Remaining Unattained Quota Target', description: 'Ensures adequate pipeline buffer exists to absorb normal win-rate variability (target: 3x-4x).' },
      { name: 'Forecast Bias Indicator', formula: '(Cumulative Forecasted Revenue - Cumulative Actual Revenue) across 4 Quarters', description: 'Identifies systemic organizational over-optimism (+) or under-commitment (-).' },
      { name: 'Days-to-Close Drift', formula: 'Actual Close Date - Original Estimated Close Date at Opportunity Creation', description: 'Quantifies timeline extension across enterprise sales cycles.' }
    ],
    profitmachinesConnection: [
      'Growth Intelligence delivers predictive multi-model forecasting dashboards with real-time triangulation',
      'AI Win Probability Scoring evaluates hundreds of deal attributes to remove rep subjectivity',
      'Automated Stage Hygiene audits identify stagnant deals and flag unearned Commit classifications',
      'Boardroom Telemetry packages executive forecast dossiers with clear confidence intervals'
    ],
    visualType: 'forecasting'
  },

  // 07. CAPACITY PLANNING
  {
    id: 'capacity-planning',
    slug: 'capacity-planning',
    number: '07',
    title: 'Capacity Planning',
    subtitle: 'Align Revenue Targets with the People and Resources Required to Achieve Them',
    badge: 'Capacity',
    badgeColor: 'indigo',
    intro: 'Sales capacity planning mathematically connects corporate top-line revenue targets with the human, operational, and territory resources required to execute them. By analyzing rep ramp dynamics, available customer-facing selling bandwidth, deal throughput limits, and regional market potential, capacity planning ensures revenue quotas are grounded in operational reality rather than speculative executive mandate.',
    challenges: [
      'Setting top-down revenue quotas that exceed the physical selling capacity of the team',
      'Failing to account for 6-to-9 month ramp-up productivity curves for newly hired reps',
      'Sales reps spending over 65% of daily hours on administrative tasks rather than selling',
      'Severe workload imbalances with some territories oversaturated and others ignored',
      'Hiring sales headcount too late in the fiscal year to influence annual quota targets',
      'High sales rep turnover driven by unrealistic, unachievable individual quota assignments',
      'Disconnect between marketing lead generation volume and sales team follow-up capacity'
    ],
    frameworks: [
      {
        title: 'Bottom-Up Sales Capacity Modeling',
        description: 'Calculate the true revenue capacity of the sales team based on headcount, ramp state, average deal size, and historical quota attainment.',
        steps: [
          'Inventory active sales reps by tenure, role, and ramp productivity percentage',
          'Calculate productive selling hours available per rep after administrative overhead',
          'Determine maximum deal throughput per rep based on average sales cycle duration',
          'Calculate total organizational capacity buffer needed (typically 115-125% of target)'
        ],
        formula: 'Total Capacity = ∑ (Rep Quota Target × Individual Ramp Multiplier × Historical Attainment %)'
      },
      {
        title: 'New Rep Ramp-Up & Productivity Curves',
        description: 'Model progressive contribution curves for newly hired account executives across their first 12 months of tenure.',
        steps: [
          'Months 1-3 (Onboarding & Enablement): 0% quota expectation, focus on certification',
          'Months 4-6 (Initial Pipeline Generation): 25-50% quota contribution',
          'Months 7-9 (Active Deal Execution): 75% quota contribution',
          'Months 10-12 (Fully Ramped): 100% standard quota contribution'
        ]
      },
      {
        title: 'Selling Time Allocation & Admin Elimination',
        description: 'Audit and rebalance daily rep time allocation to expand customer-facing selling bandwidth from 35% to 60%+ through automation.',
        steps: [
          'Conduct operational time-tracking audit across sales team daily activities',
          'Identify hours lost to manual CRM data entry, prospecting research, and meeting scheduling',
          'Deploy autonomous AI agents to automate data enrichment and admin workflows',
          'Protect dedicated 4-hour daily uninterrupted customer-facing meeting blocks'
        ]
      },
      {
        title: 'Balanced Territory & Account Allocation',
        description: 'Distribute enterprise accounts and geographic territories equitably based on total addressable market potential rather than historical bias.',
        steps: [
          'Evaluate total addressable account potential across geographic and vertical territories',
          'Assign balanced portfolios of Tier-1, Tier-2, and Tier-3 named accounts per rep',
          'Eliminate overlapping account ownership and regional channel conflicts',
          'Rebalance territory assignments semi-annually based on actual market expansion'
        ]
      },
      {
        title: 'Demand-to-Capacity Synchronization Model',
        description: 'Synchronize marketing lead generation targets with the outbound follow-up and meeting capacity of the sales engineering team.',
        steps: [
          'Calculate maximum daily meeting capacity per account executive and SDR',
          'Model required MQL and SQL volume needed to support target deal flow',
          'Adjust marketing campaign investment dynamically based on available rep bandwidth',
          'Prevent lead decay by throttling inbound flows during capacity bottlenecks'
        ]
      },
      {
        title: 'Strategic Headcount & Hiring Cadence Roadmap',
        description: 'Determine the exact calendar timing required for sales hiring to ensure ramped rep capacity arrives ahead of annual growth surges.',
        steps: [
          'Backsolve hiring start dates from target revenue realization milestones',
          'Factor in 60-day recruiting cycle plus 180-day rep productivity ramp curve',
          'Plan Q1 hiring cohorts to influence Q3/Q4 enterprise closing seasons',
          'Establish continuous talent pipelines to buffer against expected sales turnover'
        ]
      }
    ],
    kpis: [
      { name: 'Revenue per Sales Representative', formula: 'Total Closed-Won Revenue ÷ Total Full-Time Quota-Carrying Headcount', description: 'Primary benchmark of individual sales capital productivity.' },
      { name: 'Quota Attainment Breadth', formula: '(Sales Reps Achieving ≥100% of Quota ÷ Total Active Sales Reps) × 100', description: 'Indicates whether quotas are balanced across the team or reliant on outliers (target: >65%).' },
      { name: 'Customer-Facing Selling Time %', formula: '(Hours Spent in Direct Customer Interactions ÷ Total Working Hours) × 100', description: 'Measures rep bandwidth efficiency (target: >50% through AI automation).' },
      { name: 'Average Rep Ramp Duration', formula: 'Months Elapsed from Hire Date to First Month Achieving 100% Quota Pacing', description: 'Validates onboarding speed and sales enablement effectiveness.' },
      { name: 'Capacity Coverage Buffer Multiple', formula: 'Total Ramped Sales Capacity Quota ÷ Corporate Top-Line Revenue Target', description: 'Protective buffer accounting for turnover and deal variability (target: 1.15x-1.25x).' },
      { name: 'Cost of Sales Ratio', formula: '(Total Direct Sales Headcount Compensation + Commissions) ÷ Total Revenue Generated', description: 'Measures commercial labor efficiency and sales margin contribution.' }
    ],
    profitmachinesConnection: [
      'Intelligent Sales Agents absorb up to 80% of repetitive CRM administrative tasks',
      'Autonomous SDR Swarms scale top-of-funnel outbound capacity without linear headcount additions',
      'Sales Enablement platforms accelerate new hire ramp time by up to 45%',
      'Global Business Acceleration provides flexible cross-border sales capacity on demand'
    ],
    visualType: 'capacity'
  },

  // 08. REVENUE GROWTH FRAMEWORKS
  {
    id: 'revenue-growth-frameworks',
    slug: 'revenue-growth-frameworks',
    number: '08',
    title: 'Revenue Growth Frameworks',
    subtitle: 'Design a Structured System for Sustainable Revenue Growth',
    badge: 'Growth',
    badgeColor: 'teal',
    intro: 'Sustainable enterprise revenue growth is engineered through multi-vector commercial expansion rather than relying solely on brute-force new customer acquisition. By systematically orchestrating customer acquisition, net revenue retention (NRR), pricing optimization, cross-sell expansion, and international market penetration, organizations create compounding, resilient revenue flywheels that withstand macroeconomic volatility.',
    challenges: [
      'Over-reliance on expensive new logo acquisition while ignoring customer expansion potential',
      'High Net Revenue Churn eroding top-line growth and depressing enterprise valuation multiples',
      'Static, unoptimized pricing models failing to capture delivered customer value',
      'Inability to scale customer expansion beyond initial departmental land agreements',
      'High Customer Acquisition Costs (CAC) creating unsustainable payback periods (>24 months)',
      'Sales teams pursuing low-margin commodity deals that fail unit economics thresholds',
      'Lack of clear strategic framework for prioritizing competing revenue growth initiatives'
    ],
    frameworks: [
      {
        title: 'Multi-Vector Revenue Expansion Architecture',
        description: 'Orchestrate commercial growth across eight complementary revenue vectors to build compounding, multi-channel top-line momentum.',
        steps: [
          'Vector 1: New Logo Acquisition (high-fit enterprise ICP focus)',
          'Vector 2: Account Expansion (cross-sell add-on modules & tier upgrades)',
          'Vector 3: Usage & Volume Monetization (aligning pricing with client consumption)',
          'Vector 4: Channel & Partner Ecosystem (distributor and co-selling mesh networks)'
        ]
      },
      {
        title: 'Net Revenue Retention (NRR) Engine',
        description: 'Build an operational expansion system that ensures customer cohorts expand revenue year-over-year even prior to new logo additions.',
        steps: [
          'Track customer software telemetry and feature utilization depth',
          'Deploy automated customer health scoring to preempt churn risks 90 days out',
          'Design modular expansion upgrade paths aligned to customer growth milestones',
          'Target top-quartile enterprise NRR benchmarks (>120% for SaaS / >115% for B2B)'
        ],
        formula: 'Net Revenue Retention (NRR) = ((Starting ARR + Expansion ARR - Contraction ARR - Churn ARR) ÷ Starting ARR) × 100'
      },
      {
        title: 'Value-Based Pricing & Monetization Optimization',
        description: 'Align commercial pricing packaging and contract structures with the measurable economic value delivered to the enterprise.',
        steps: [
          'Quantify customer economic ROI and cost savings generated by solution',
          'Transition from legacy flat-rate pricing to value-metric or hybrid usage tiers',
          'Implement disciplined discounting governance and executive approval gates',
          'Capture 15-30% pricing lift through periodic capability packaging reviews'
        ]
      },
      {
        title: 'Enterprise Land-and-Expand Playbook',
        description: 'Structure initial commercial engagements to minimize procurement friction, followed by systematic multi-departmental expansion.',
        steps: [
          'Engineer low-friction initial land package solving urgent, isolated operational pain',
          'Deliver verified time-to-first-value within 60 days of deployment',
          'Co-create formal case studies documenting achieved customer ROI with client champions',
          'Present multi-departmental enterprise license agreements at annual contract renewal'
        ]
      },
      {
        title: 'Growth Constraint & Bottleneck Diagnostics',
        description: 'Systematically identify and eliminate the primary organizational constraints capping enterprise revenue acceleration.',
        steps: [
          'Diagnose whether growth is constrained by TAM, ICP fit, pipeline volume, or churn',
          'Evaluate sales capacity and capital allocation efficiency across product lines',
          'Remove operational friction points before pouring additional capital into top-of-funnel',
          'Rebalance marketing and sales budgets toward highest-margin growth vectors'
        ]
      },
      {
        title: 'Growth Initiative Prioritization Matrix',
        description: 'Score and rank competing revenue growth projects based on revenue potential, time-to-value, capital requirements, and execution risk.',
        steps: [
          'Evaluate proposed growth initiatives across Revenue Potential (1-10) and Execution Feasibility (1-10)',
          'Prioritize Quick Wins (high impact, low complexity) for immediate 90-day execution',
          'Sequence Strategic Bets (high impact, high complexity) with dedicated executive sponsorship',
          'Deprioritize low-margin, high-friction initiatives that dilute organizational focus'
        ]
      }
    ],
    kpis: [
      { name: 'Net Revenue Retention (NRR)', formula: '((Beginning ARR + Expansion - Contraction - Churn) ÷ Beginning ARR) × 100', description: 'Primary health metric of the installed enterprise customer base (target: >120%).' },
      { name: 'Customer Lifetime Value (LTV) to CAC Ratio', formula: 'Customer Lifetime Value ÷ Customer Acquisition Cost', description: 'Measures capital efficiency and profitability of growth investments (target: >3.5x).' },
      { name: 'Annual Recurring Revenue (ARR) Growth Rate', formula: '((Current Period ARR - Previous Period ARR) ÷ Previous Period ARR) × 100', description: 'Top-line speed of business scale across consecutive fiscal years.' },
      { name: 'Gross Margin Expansion (bps)', formula: 'Current Period Gross Margin % - Previous Period Gross Margin %', description: 'Validates that revenue scale is accompanied by expanding profitability.' },
      { name: 'Expansion Revenue Contribution %', formula: '(Expansion ARR Added ÷ Total Net New ARR Added) × 100', description: 'Measures reliance on installed base growth vs. new customer acquisition.' },
      { name: 'CAC Payback Period (Months)', formula: '(Total S&M Spend) ÷ (Net New ARR Added in Period × Gross Margin %)', description: 'Months required to recoup the capital expended to acquire an enterprise customer.' }
    ],
    profitmachinesConnection: [
      'Profit Pool Discovery isolates untapped high-margin enterprise expansion opportunities',
      'AI-Native Sales transforms traditional sales processes into automated, scalable revenue systems',
      'Growth Science applies mathematical growth modeling to accelerate ARR trajectory',
      'Global Scaling provides cross-border infrastructure for international market penetration'
    ],
    visualType: 'growth'
  }
];

export const GTM_REVOPS_OVERVIEW = {
  title: 'The Eight GTM & Revenue Operations Disciplines',
  description: 'An interconnected revenue operating system connecting customer targeting, buyer psychology, pipeline conversion, operational alignment, and scalable growth.',
  disciplines: [
    { id: 'icp-frameworks', title: 'ICP Frameworks', shortDescription: 'Identify and prioritize high-margin ideal customer profiles', icon: 'Target', badge: 'Targeting' },
    { id: 'buyer-journey-models', title: 'Buyer Journey Models', shortDescription: 'Map and multi-thread complex enterprise buying committees', icon: 'GitMerge', badge: 'Journey' },
    { id: 'funnel-optimization', title: 'Funnel Optimization', shortDescription: 'Eliminate conversion leakage and accelerate pipeline velocity', icon: 'Sliders', badge: 'Conversion' },
    { id: 'revops-frameworks', title: 'RevOps Frameworks', shortDescription: 'Unify sales, marketing, and CS through single-source data', icon: 'Workflow', badge: 'Alignment' },
    { id: 'revenue-intelligence', title: 'Revenue Intelligence', shortDescription: 'Transform interaction telemetry into predictive deal insights', icon: 'BrainCircuit', badge: 'Telemetry' },
    { id: 'forecasting-models', title: 'Forecasting Models', shortDescription: 'Triangulate statistical forecasts to eliminate rep subjectivity', icon: 'BarChart3', badge: 'Accuracy' },
    { id: 'capacity-planning', title: 'Capacity Planning', shortDescription: 'Align headcount ramp curves and selling bandwidth to targets', icon: 'Users', badge: 'Capacity' },
    { id: 'revenue-growth-frameworks', title: 'Revenue Growth Frameworks', shortDescription: 'Architect multi-vector flywheels for sustainable expansion', icon: 'TrendingUp', badge: 'Growth' }
  ]
};

export const GTM_REVOPS_PRACTICAL_APPLICATIONS: PracticalApplicationScenario[] = [
  {
    question: 'How should an organization identify its highest-value target accounts?',
    situation: 'Sales teams are overwhelmed by thousands of disparate accounts, wasting bandwidth on low-margin prospects while Tier-1 enterprises are under-served.',
    investigationQuestions: [
      'What are the common firmographic and technographic traits of the top 20% most profitable customer cohorts?',
      'Which third-party intent surges indicate active buying cycles rather than casual research?',
      'What minimum ACV threshold is required to support dedicated enterprise outbound capacity?'
    ],
    relevantDisciplines: ['ICP Frameworks', 'Buyer Journey Models', 'Revenue Intelligence'],
    analyticalMethods: ['Multi-dimensional account scoring model', 'Dark-funnel intent surge aggregation', 'Historical customer LTV cohort analysis'],
    kpis: ['ICP-Fit Account %', 'Target Account Engagement Velocity', 'ACV Lift'],
    nextSteps: [
      'Audit existing customer base to extract top decile characteristics',
      'Implement 4-pillar weighted ICP scoring formula in CRM',
      'Assign dedicated named account lists to senior reps'
    ]
  },
  {
    question: 'Why are qualified leads not converting into opportunities?',
    situation: 'Marketing generates substantial MQL volumes, but sales reps report low lead quality and reject over 70% of inbound handoffs.',
    investigationQuestions: [
      'Do Marketing and Sales share identical, mathematically governed qualification definitions?',
      'How quickly are reps reaching out following initial inbound form submission?',
      'Are leads entering the funnel with verified budget and urgent business pain or merely downloading whitepapers?'
    ],
    relevantDisciplines: ['Funnel Optimization', 'RevOps Frameworks', 'ICP Frameworks'],
    analyticalMethods: ['MQL-to-SQL drop-off diagnostic', 'Lead response time telemetry audit', 'Mutual qualification criteria calibration'],
    kpis: ['Lead-to-Opportunity Conversion Rate', 'Speed to First Sales Touch', 'Lead Handoff Efficiency SLA'],
    nextSteps: [
      'Establish formal cross-functional Service Level Agreement (SLA)',
      'Automate instant lead enrichment and routing within 5 minutes',
      'Enforce strict Stage 1 entry criteria before lead acceptance'
    ]
  },
  {
    question: 'Why are sales opportunities repeatedly slipping into future quarters?',
    situation: 'Over 35% of deals committed for end-of-quarter closing roll into the subsequent fiscal period, causing persistent forecast misses.',
    investigationQuestions: [
      'Are deals placed in Commit based on rep gut-feel or verified buyer procurement milestones?',
      'Has the buying committee legal, security, and procurement signoff roadmap been mapped and agreed?',
      'Is there an active co-authored mutual action plan with committed executive sponsor dates?'
    ],
    relevantDisciplines: ['Forecasting Models', 'Revenue Intelligence', 'Buyer Journey Models'],
    analyticalMethods: ['Historical deal slippage push analysis', 'Stage-gate verification audits', 'Conversational objection sentiment mining'],
    kpis: ['Deal Slippage Rate', 'Commit Conversion Reliability', 'Mutual Action Plan Adherence'],
    nextSteps: [
      'Institute objective Stage-Gate criteria required for Commit category classification',
      'Mandate co-authored Mutual Action Plan co-signed by buyer executive sponsor',
      'Purge chronic slippage deals from immediate commit projections'
    ]
  },
  {
    question: 'Why do marketing and sales report different pipeline numbers to the board?',
    situation: 'Marketing claims $50M in generated pipeline while Sales reports only $18M in viable opportunities, eroding board confidence.',
    investigationQuestions: [
      'Are both departments drawing metrics from a single synchronized database or disconnected tools?',
      'What are the explicit CRM pipeline stage requirements for an opportunity to be recognized as pipeline?',
      'Is attribution modeled on first-touch, last-touch, or multi-touch algorithmic models?'
    ],
    relevantDisciplines: ['RevOps Frameworks', 'Funnel Optimization', 'Forecasting Models'],
    analyticalMethods: ['CRM data schema reconciliation', 'Multi-touch pipeline attribution modeling', 'Single-source-of-truth data integration'],
    kpis: ['CRM Data Integrity Score', 'Pipeline Contribution by ICP Tier', 'Forecast Precision Index'],
    nextSteps: [
      'Centralize revenue metrics under a unified RevOps leadership charter',
      'Align stage progression definitions across marketing automation and CRM',
      'Publish unified weekly pipeline scorecards to all commercial leaders'
    ]
  },
  {
    question: 'How can revenue leaders improve forecast reliability to within 5% variance?',
    situation: 'Quarterly board forecasts swing by 25% due to subjective sales rep commits and lack of predictive pipeline telemetry.',
    investigationQuestions: [
      'Can bottom-up rep commitments be validated against algorithmic historical win rates?',
      'What confidence intervals exist across Conservative, Base Case, and Optimistic scenarios?',
      'Are individual sales manager forecasting biases tracked and normalized over time?'
    ],
    relevantDisciplines: ['Forecasting Models', 'Revenue Intelligence', 'RevOps Frameworks'],
    analyticalMethods: ['Triangulated multi-model forecast modeling', 'Empirical stage-conversion calibration', 'Historical managerial forecast variance scoring'],
    kpis: ['Quarterly Forecast Accuracy', 'Forecast Bias Indicator', 'Pipeline Coverage Multiple'],
    nextSteps: [
      'Deploy AI-driven win probability scoring alongside rep commit submissions',
      'Establish structured weekly forecast review cadences with objective category gates',
      'Calibrate quarterly targets using 3-scenario risk models'
    ]
  },
  {
    question: 'How many sales representatives are needed to achieve a 50% growth target?',
    situation: 'Leadership mandates a 50% ARR increase but has not modeled the hiring timelines, ramp curves, or territory potential required.',
    investigationQuestions: [
      'What is the true ramp-up duration before a newly hired AE contributes 100% quota?',
      'How much customer-facing selling time is available after subtracting administrative duties?',
      'Does the addressable market have enough territory account potential to support additional reps?'
    ],
    relevantDisciplines: ['Capacity Planning', 'Revenue Growth Frameworks', 'Territory Planning'],
    analyticalMethods: ['Bottom-up sales capacity modeling', 'Ramped productivity curve calculation', 'Territory market density analysis'],
    kpis: ['Revenue per Sales Representative', 'Average Rep Ramp Duration', 'Capacity Coverage Buffer Multiple'],
    nextSteps: [
      'Backsolve hiring cohort dates from future revenue delivery milestones',
      'Automate rep administrative workloads to expand selling bandwidth to 55%+',
      'Ensure minimum 1.2x capacity buffer exists above corporate ARR target'
    ]
  },
  {
    question: 'Which customer segments offer the strongest expansion and NRR potential?',
    situation: 'The company is overly reliant on expensive new logo acquisition while customer retention and upsell remain stagnant.',
    investigationQuestions: [
      'Which product features and usage patterns correlate most strongly with long-term retention?',
      'What are the commercial characteristics of customer cohorts delivering >130% NRR?',
      'Are account expansion conversations initiated reactively at renewal or proactively via QBRs?'
    ],
    relevantDisciplines: ['Revenue Growth Frameworks', 'Buyer Journey Models', 'ICP Frameworks'],
    analyticalMethods: ['Customer cohort telemetry retention analysis', 'Net Revenue Retention expansion modeling', 'Usage telemetry and churn risk scoring'],
    kpis: ['Net Revenue Retention (NRR)', 'Expansion Revenue Contribution %', 'LTV:CAC Ratio'],
    nextSteps: [
      'Deploy customer health telemetry alerts to identify expansion-ready accounts',
      'Institutionalize structured Quarterly Executive Business Reviews (QBRs)',
      'Design modular add-on capability packages for existing accounts'
    ]
  },
  {
    question: 'How can a company achieve complete real-time revenue visibility across teams?',
    situation: 'Executives operate with fragmented 30-day delayed reporting, unable to detect deal risks or conversion slowdowns until after the month closes.',
    investigationQuestions: [
      'Are customer interaction streams (calls, emails, meetings) automatically ingested into the CRM?',
      'Can leadership view real-time pipeline health indicators and deal risk alerts dynamically?',
      'Is there an automated early-warning system for single-threaded or stagnant deals?'
    ],
    relevantDisciplines: ['Revenue Intelligence', 'RevOps Frameworks', 'Funnel Optimization'],
    analyticalMethods: ['Automated interaction stream integration', 'Algorithmic deal health scoring', 'Real-time executive dashboard architecture'],
    kpis: ['Pipeline Health Index', 'Deal At-Risk Detection Accuracy', 'Customer Engagement Latency'],
    nextSteps: [
      'Integrate conversation and interaction telemetry into the core CRM data plane',
      'Deploy real-time pipeline health dashboards with automated risk alerts',
      'Conduct weekly executive deal reviews powered by objective telemetry'
    ]
  }
];

export const GTM_REVOPS_METRICS = {
  targeting: [
    { name: 'ICP Pipeline Purity Rate', desc: 'Percentage of active pipeline accounts that fully satisfy defined Tier-1 & Tier-2 ICP criteria (target: >80%).' },
    { name: 'Account Engagement Velocity', desc: 'Speed at which target enterprise accounts progress from first intent signal to discovery meeting.' },
    { name: 'Average Contract Value (ACV) Expansion', desc: 'Annualized contract value expansion resulting from rigorous ICP qualification discipline.' },
    { name: 'Buying Committee Coverage', desc: 'Average number of verified decision-making stakeholders actively engaged per enterprise opportunity.' }
  ],
  funnel: [
    { name: 'Lead-to-Opportunity Conversion', desc: 'Conversion rate from initial verified inquiry to formal Stage 2 sales qualified opportunity.' },
    { name: 'Full-Funnel Sales Cycle Days', desc: 'Calendar days elapsed from first buyer touchpoint to signed enterprise agreement.' },
    { name: 'Stage Conversion Variance Index', desc: 'Deviation of actual stage-to-stage progression rates against corporate model benchmarks.' },
    { name: 'Revenue Pipeline Velocity ($/Day)', desc: 'Daily revenue generated by multiplying qualified opportunities, win rate, and deal size divided by cycle days.' }
  ],
  operations: [
    { name: 'CRM Data Integrity Benchmark', desc: 'Percentage of enterprise accounts possessing complete, verified firmographic and contact records.' },
    { name: 'Inbound Response Time SLA', desc: 'Average minutes elapsed from inbound lead submission to initial verified sales touchpoint (target: <10m).' },
    { name: 'RevTech Stack Cost per Rep', desc: 'Total annualized technology expenditure divided by quota-carrying sales headcount.' },
    { name: 'Cross-Functional SLA Compliance', desc: 'Adherence score measuring Marketing, Sales, and CS execution against agreed operational contracts.' }
  ],
  predictability: [
    { name: 'Quarterly Forecast Variance Index', desc: 'Percentage variance between initial Day-1 quarter forecast and final Day-90 actual closed ARR.' },
    { name: 'Net Revenue Retention (NRR)', desc: 'Percentage of recurring revenue retained and expanded from existing customer cohorts (target: >120%).' },
    { name: 'Sales Quota Attainment Breadth', desc: 'Percentage of the sales team achieving or exceeding 100% of individual quota assignments.' },
    { name: 'Customer Acquisition Cost (CAC) Payback', desc: 'Months of gross margin required to fully recover customer acquisition expenditures.' }
  ]
};
