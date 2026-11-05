export interface SalesHubSection {
  id: string;
  slug: string;
  number: string;
  title: string;
  subtitle: string;
  badge: string;
  badgeColor: string;
  intro: string;
  challenges: string[];
  frameworks: { title: string; description: string; steps?: string[] }[];
  kpis: { name: string; description: string }[];
  profitmachinesConnection: string[];
  visualType: 'pipeline' | 'velocity' | 'playbook' | 'methodology' | 'revops' | 'abs' | 'territory' | 'productivity';
}

export const SALES_ACCELERATION_SECTIONS: SalesHubSection[] = [
  {
    id: 'sales-methodologies',
    slug: 'sales-methodologies',
    number: '01',
    title: 'Sales Methodologies',
    subtitle: 'Create a Consistent and Disciplined Approach to Winning Deals',
    badge: 'Core Method',
    badgeColor: 'blue',
    intro: 'Sales methodologies provide structured approaches for understanding customer needs, qualifying opportunities, managing buying decisions and progressing deals through a consistent, repeatable process. Without a defined methodology, sales conversations are inconsistent, discovery is shallow and opportunities advance without sufficient understanding of the buying situation.',
    challenges: [
      'Sales reps follow inconsistent selling approaches',
      'Discovery conversations fail to uncover real business problems',
      'Teams focus on product features instead of business value',
      'Opportunities progress without sufficient qualification',
      'Buying committees are not properly understood or mapped',
      'Deals stall because next steps are unclear',
      'Managers lack consistent opportunity evaluation criteria'
    ],
    frameworks: [
      {
        title: 'Customer-Centric Discovery',
        description: 'Understand current business situation, operational problems, consequences and desired outcomes.',
        steps: [
          'Map customer current state & operations',
          'Uncover root-cause business bottlenecks',
          'Quantify commercial impact of inaction',
          'Align on priority executive outcomes'
        ]
      },
      {
        title: 'Consultative Selling',
        description: 'Ask relevant business questions, diagnose decision-making processes, and connect to measurable needs.',
        steps: [
          'Ask targeted diagnostic business questions',
          'Understand committee evaluation criteria',
          'Connect technical capabilities to ROI',
          'Guide multi-threaded buying consensus'
        ]
      },
      {
        title: 'Value-Based Selling',
        description: 'Identify tangible business value, build quantified business cases, and connect to strategic goals.',
        steps: [
          'Isolate primary economic value drivers',
          'Build customer-specific financial models',
          'Co-create formal executive business cases',
          'Anchor proposals to board strategic goals'
        ]
      },
      {
        title: 'Opportunity Qualification',
        description: 'Evaluate business need, stakeholder involvement, urgency, budget access, and commercial viability.',
        steps: [
          'Validate compelling business event & urgency',
          'Confirm economic buyer & budget authority',
          'Verify technical & security requirements',
          'Disqualify bad-fit deals early in cycle'
        ]
      },
      {
        title: 'Buying Committee Management',
        description: 'Identify decision-makers, technical evaluators, financial stakeholders, champions, and end users.',
        steps: [
          'Map all 7-12 enterprise decision personas',
          'Identify & mobilize internal champions',
          'Address technical & procurement criteria',
          'Design stakeholder consensus roadmap'
        ]
      },
      {
        title: 'Deal Strategy & Negotiation',
        description: 'Develop opportunity-specific strategies, manage objections, and establish mutual action plans.',
        steps: [
          'Formulate customized deal win strategy',
          'Establish mutual action plan with buyer',
          'Protect commercial pricing & deal margins',
          'Coordinate legal, security & contract signoff'
        ]
      }
    ],
    kpis: [
      { name: 'Opportunity Qualification Rate', description: 'Percentage of leads that meet qualification criteria and advance' },
      { name: 'Stage Conversion Rate', description: 'Percentage of opportunities advancing from each pipeline stage' },
      { name: 'Win Rate', description: 'Percentage of qualified opportunities converted to closed-won' },
      { name: 'Average Deal Size', description: 'Mean revenue value of closed-won opportunities' },
      { name: 'Sales Cycle Duration', description: 'Average time from opportunity creation to close' },
      { name: 'Forecast Accuracy', description: 'Accuracy of revenue predictions against actual results' }
    ],
    profitmachinesConnection: [
      'Revenue Intelligence surfaces buying signals and account intent 60-90 days ahead',
      'Buyer Intelligence maps full buying committees and stakeholder relationships',
      'AI-Native Sales provides structured opportunity qualification support',
      'Sales Process Optimization improves discovery quality and deal progression'
    ],
    visualType: 'methodology'
  },
  {
    id: 'sales-playbooks',
    slug: 'sales-playbooks',
    number: '02',
    title: 'Sales Playbooks',
    subtitle: 'Turn Sales Strategy into Repeatable Execution',
    badge: 'Execution',
    badgeColor: 'emerald',
    intro: 'Sales playbooks translate strategy into step-by-step execution guides that tell sales representatives what to do, when to do it, why it matters and how to execute it effectively. Playbooks capture institutional knowledge and best practices, ensuring consistent high-quality execution across the entire sales organization regardless of individual experience level.',
    challenges: [
      'New reps take too long to become productive',
      'Sales activities vary significantly between representatives',
      'Objection handling is inconsistent and poorly documented',
      'Follow-up communication lacks consistency and structure',
      'Sales messaging is not aligned with customer needs',
      'Successful practices are not captured or shared',
      'Managers cannot coach consistently without documented standards'
    ],
    frameworks: [
      {
        title: 'Prospecting Playbook',
        description: 'Target account identification, research methodology, prioritization and outreach sequences.',
        steps: [
          'Define firmographic & technographic criteria',
          'Ingest dark-funnel buyer intent surges',
          'Score & prioritize high-probability accounts',
          'Execute multi-channel personalized outreach'
        ]
      },
      {
        title: 'Discovery Playbook',
        description: 'Meeting preparation, business problem questions, impact assessment and stakeholder identification.',
        steps: [
          'Conduct pre-meeting executive research',
          'Execute diagnostic questioning sequence',
          'Quantify commercial impact of pain points',
          'Document summary & secure next meeting commit'
        ]
      },
      {
        title: 'Qualification Playbook',
        description: 'Qualification criteria, opportunity scoring, buying intent evaluation and risk identification.',
        steps: [
          'Score deal against MEDDPICC criteria',
          'Confirm executive sponsor & budget line',
          'Assess competitors & technical fit risks',
          'Assign formal stage-gate progression score'
        ]
      },
      {
        title: 'Sales Engagement Playbook',
        description: 'Multi-channel outreach: email, phone, LinkedIn and personalized messaging frameworks.',
        steps: [
          'Deploy multi-touch executive sequences',
          'Conduct consultative telephone outreach',
          'Orchestrate LinkedIn social credibility',
          'Deliver automated multi-channel follow-ups'
        ]
      },
      {
        title: 'Objection Handling Playbook',
        description: 'Structured responses for price, competitive, timing, technical and approval objections.',
        steps: [
          'Clarify & isolate underlying hesitation',
          'Validate concern with customer benchmarks',
          'Reframe objection around business ROI',
          'Confirm resolution & reaffirm next steps'
        ]
      },
      {
        title: 'Proposal & Presentation Playbook',
        description: 'Business case development, solution alignment and commercial presentation structure.',
        steps: [
          'Structure presentation around customer ROI',
          'Tailor solutions to executive priorities',
          'Demonstrate clear competitive superiority',
          'Establish mutual timeline for evaluation'
        ]
      },
      {
        title: 'Negotiation & Closing Playbook',
        description: 'Negotiation preparation, value protection, stakeholder alignment and closing plans.',
        steps: [
          'Define give-get negotiation boundaries',
          'Protect standard contract pricing margins',
          'Engage procurement & legal early in cycle',
          'Execute structured mutual closing checklist'
        ]
      },
      {
        title: 'Customer Expansion Playbook',
        description: 'Cross-sell, upsell, renewal preparation and account expansion planning.',
        steps: [
          'Monitor product adoption & telemetry data',
          'Identify secondary departments & use cases',
          'Conduct quarterly executive business reviews',
          'Present expansion proposals ahead of renewal'
        ]
      }
    ],
    kpis: [
      { name: 'Playbook Adoption Rate', description: 'Percentage of reps consistently following documented processes' },
      { name: 'Rep Ramp Time', description: 'Time for new reps to reach full productivity' },
      { name: 'Meeting-to-Opportunity Conversion', description: 'Percentage of discovery meetings advancing to qualified opportunities' },
      { name: 'Follow-up Compliance', description: 'Rate of documented follow-up actions completed on time' },
      { name: 'Win Rate by Process', description: 'Win rate comparison between playbook-adherent and non-adherent reps' },
      { name: 'Sales Activity Completion', description: 'Percentage of required sales activities completed per stage' }
    ],
    profitmachinesConnection: [
      'AI-Assisted Sales Execution delivers real-time playbook guidance during calls',
      'Autonomous Sales Engagement automates multi-channel follow-up sequences',
      'Sales Enablement platforms deliver playbooks at the point of execution',
      'Intelligent Sales Agents support objection handling and next-step planning'
    ],
    visualType: 'playbook'
  },
  {
    id: 'sales-velocity-models',
    slug: 'sales-velocity-models',
    number: '03',
    title: 'Sales Velocity Models',
    subtitle: 'Understand How Quickly Your Pipeline Generates Revenue',
    badge: 'Velocity',
    badgeColor: 'violet',
    intro: 'Sales velocity measures the rate at which qualified opportunities generate revenue. The core equation is: Sales Velocity = (Qualified Opportunities × Win Rate × Average Deal Value) ÷ Average Sales Cycle Length. Each variable represents a distinct lever that sales leaders can diagnose and improve independently.',
    challenges: [
      'Revenue forecasts are unreliable due to unclear velocity drivers',
      'Teams cannot identify which variable most constrains growth',
      'Sales cycle length is extended by unnecessary internal delays',
      'Win rates vary widely without systematic root cause analysis',
      'Deal values are compressed by poor value positioning',
      'Pipeline volume does not reflect qualified opportunity count'
    ],
    frameworks: [
      {
        title: 'Opportunity Volume Driver',
        description: 'Lead generation quality, qualification discipline, pipeline coverage and opportunity creation rate.',
        steps: [
          'Audit lead quality criteria across channels',
          'Enforce strict qualification standards',
          'Maintain 3x-4x pipeline coverage ratio',
          'Track weekly opportunity creation velocity'
        ]
      },
      {
        title: 'Win Rate Driver',
        description: 'Discovery quality, value proposition strength, competitive positioning and stakeholder alignment.',
        steps: [
          'Audit discovery conversation depth & notes',
          'Sharpen competitive value differentiation',
          'Multi-thread enterprise buying committee',
          'Standardize weekly deal strategy reviews'
        ]
      },
      {
        title: 'Average Deal Value Driver',
        description: 'Customer segmentation, pricing strategy, solution packaging and upsell/cross-sell effectiveness.',
        steps: [
          'Focus outreach on high-LTV account tiers',
          'Package modular enterprise capabilities',
          'Anchor pricing to realized business value',
          'Systematize cross-sell and multi-tier attach'
        ]
      },
      {
        title: 'Sales Cycle Length Driver',
        description: 'Decision complexity, buying committee alignment, approval workflows and follow-up discipline.',
        steps: [
          'Map buyer milestone decision process',
          'Eliminate internal approval bottlenecks',
          'Institute mutual action plans with dates',
          'Enforce strict rep follow-up turnaround SLAs'
        ]
      },
      {
        title: 'Velocity Improvement Strategy',
        description: 'Identify the single most constraining variable and prioritize improvement there before optimizing others.',
        steps: [
          'Calculate baseline sales velocity equation',
          'Diagnose primary bottleneck lever',
          'Deploy targeted operational interventions',
          'Measure compounding velocity improvement'
        ]
      },
      {
        title: 'Pipeline Coverage Ratio',
        description: 'Maintain sufficient pipeline coverage (typically 3-4x quota) to absorb normal conversion variability.',
        steps: [
          'Calculate segment-specific coverage benchmarks',
          'Maintain 3x-4x qualified quota buffer',
          'Purge dormant deals exceeding 2x cycle',
          'Rebalance rep capacity to active pipeline'
        ]
      }
    ],
    kpis: [
      { name: 'Sales Velocity Score', description: 'Composite metric measuring revenue generation speed across all four drivers' },
      { name: 'Pipeline Coverage Ratio', description: 'Total pipeline value as a multiple of target quota' },
      { name: 'Lead-to-Opportunity Conversion', description: 'Percentage of leads advancing to qualified opportunity status' },
      { name: 'Average Deal Size', description: 'Mean closed-won deal value across the period' },
      { name: 'Sales Cycle Efficiency', description: 'Actual cycle length versus optimal cycle length benchmark' },
      { name: 'Revenue per Sales Representative', description: 'Total revenue generated per active sales headcount' }
    ],
    profitmachinesConnection: [
      'Revenue Intelligence identifies pipeline velocity constraints in real time',
      'Pipeline Analytics surfaces stage-level conversion bottlenecks',
      'AI Forecasting improves win rate prediction accuracy',
      'Sales Optimization prioritizes the highest-impact velocity improvements'
    ],
    visualType: 'velocity'
  },
  {
    id: 'pipeline-optimization',
    slug: 'pipeline-optimization',
    number: '04',
    title: 'Pipeline Optimization',
    subtitle: 'Improve Opportunity Quality, Progression and Conversion',
    badge: 'Hygiene',
    badgeColor: 'amber',
    intro: 'Pipeline optimization is the systematic improvement of opportunity creation, qualification, progression, conversion and overall pipeline visibility across the revenue lifecycle. Maintaining a clean, accurate pipeline allows leaders to identify risks early, allocate resources effectively and generate predictable revenue.',
    challenges: [
      'Large pipeline with insufficient qualified opportunities',
      'Poor lead quality inflating pipeline with unlikely deals',
      'Stalled opportunities consuming management attention',
      'Inconsistent stage definitions across the sales team',
      'Missing opportunity information preventing accurate forecasts',
      'Weak follow-up discipline allowing deals to go cold',
      'High opportunity leakage between pipeline stages',
      'Deals remaining in the same stage for extended periods'
    ],
    frameworks: [
      {
        title: 'Target Account Identification',
        description: 'Define ICP criteria and identify accounts that match target market parameters.',
        steps: [
          'Define ICP firmographic & tech criteria',
          'Ingest first-party & third-party intent data',
          'Filter & rank high-probability accounts',
          'Assign named tier-1 accounts to reps'
        ]
      },
      {
        title: 'Lead Qualification',
        description: 'Apply consistent qualification criteria to separate genuine opportunities from unlikely prospects.',
        steps: [
          'Apply deterministic qualification criteria',
          'Verify budget holder & timeline urgency',
          'Eliminate unqualified demo requests',
          'Route qualified accounts into active stages'
        ]
      },
      {
        title: 'Opportunity Creation Standards',
        description: 'Define minimum information requirements before creating a formal opportunity in the CRM.',
        steps: [
          'Require validated business problem statement',
          'Confirm active project & economic sponsor',
          'Verify timeline within 180-day execution window',
          'Mandate initial executive meeting notes'
        ]
      },
      {
        title: 'Stage-Gate Management',
        description: 'Enforce entry and exit criteria at each pipeline stage to prevent premature advancement.',
        steps: [
          'Define objective exit criteria per stage',
          'Validate buyer commitments before advancing',
          'Prevent premature pipeline stage inflation',
          'Automate manager stage-transition audits'
        ]
      },
      {
        title: 'Pipeline Diagnostic Model',
        description: 'Systematically identify leakage, aging, low-quality and stagnant opportunities.',
        steps: [
          'Track stage-to-stage conversion leakage',
          'Identify deals exceeding stage age limits',
          'Surface low-activity opportunities',
          'Flag single-threaded deal risks'
        ]
      },
      {
        title: 'Pipeline Hygiene Protocol',
        description: 'Regular pipeline reviews, aging opportunity management and lost-deal analysis.',
        steps: [
          'Enforce weekly stage velocity inspections',
          'Automate 30-day deal dormancy purging',
          'Requalify or close slipped opportunities',
          'Update forecast categories with rigor'
        ]
      },
      {
        title: 'Opportunity Prioritization Matrix',
        description: 'Score and rank active opportunities by size, probability and strategic value.',
        steps: [
          'Score active deals by size and win probability',
          'Rank top 20% impact revenue opportunities',
          'Focus executive sponsorship on tier-1 deals',
          'Automate SLA alerts for stalled accounts'
        ]
      },
      {
        title: 'Lost Deal Analysis',
        description: 'Structured analysis of lost opportunities to identify systematic improvement areas.',
        steps: [
          'Conduct structured win/loss debriefs',
          'Categorize primary loss root causes',
          'Feed objection insights into playbooks',
          'Identify competitive loss patterns'
        ]
      }
    ],
    kpis: [
      { name: 'Pipeline Value', description: 'Total weighted value of all active opportunities' },
      { name: 'Qualified Pipeline Value', description: 'Value of opportunities meeting minimum qualification criteria' },
      { name: 'Pipeline Coverage Ratio', description: 'Pipeline value as a multiple of revenue target' },
      { name: 'Stage Conversion Rate', description: 'Percentage advancing between consecutive pipeline stages' },
      { name: 'Opportunity Aging', description: 'Average time opportunities remain in each pipeline stage' },
      { name: 'Win Rate', description: 'Percentage of qualified opportunities closed as won' },
      { name: 'Forecast Accuracy', description: 'Variance between forecasted and actual revenue' }
    ],
    profitmachinesConnection: [
      'AI Prospecting identifies high-quality target accounts at scale',
      'Autonomous Lead Qualification applies consistent scoring to all inbound leads',
      'Revenue Intelligence tracks pipeline health and flags at-risk opportunities',
      'Pipeline Generation creates qualified opportunities through targeted outreach'
    ],
    visualType: 'pipeline'
  },
  {
    id: 'revenue-operations',
    slug: 'revenue-operations',
    number: '05',
    title: 'Revenue Operations',
    subtitle: 'Connect Sales, Marketing, Customer Success and Revenue Intelligence',
    badge: 'RevOps',
    badgeColor: 'cyan',
    intro: 'Revenue Operations (RevOps) is the coordination of people, processes, technology, data and performance management across the entire revenue lifecycle. Disconnected teams and fragmented systems create revenue inefficiencies, inaccurate forecasts and missed growth opportunities.',
    challenges: [
      'Sales and marketing misalignment on ICP and pipeline definitions',
      'Inconsistent customer and account data across systems',
      'Disconnected CRM systems preventing unified revenue visibility',
      'Manual reporting consuming revenue team capacity',
      'Poor pipeline visibility leading to inaccurate forecasts',
      'Unclear ownership of key revenue processes',
      'Fragmented customer lifecycle management after the initial sale',
      'Inefficient handoffs between sales, success and finance teams'
    ],
    frameworks: [
      {
        title: 'Revenue Strategy & Planning',
        description: 'Quota setting, territory design, headcount planning and revenue target cascade.',
        steps: [
          'Cascade total ARR revenue goals',
          'Model rep capacity and hiring plans',
          'Segment territories and account tiers',
          'Align quota distribution and compensation'
        ]
      },
      {
        title: 'Process Design & Governance',
        description: 'Define, document and govern all revenue processes from lead to renewal.',
        steps: [
          'Map end-to-end buyer lifecycle stages',
          'Define cross-team SLAs and handoffs',
          'Document standard operating procedures',
          'Enforce data compliance and audit trails'
        ]
      },
      {
        title: 'CRM & Technology Management',
        description: 'Maintain CRM data quality, configure workflows and integrate the revenue technology stack.',
        steps: [
          'Maintain unified CRM data schema',
          'Automate lead-to-account matching',
          'Rationalize redundant RevTech tools',
          'Configure workflow routing and alerts'
        ]
      },
      {
        title: 'Revenue Data Management',
        description: 'Establish single source of truth for accounts, contacts, opportunities and pipeline.',
        steps: [
          'Establish single source of customer truth',
          'Deduplicate contacts and accounts',
          'Enrich firmographic and intent telemetry',
          'Ensure SOC-2 and privacy compliance'
        ]
      },
      {
        title: 'Sales & Marketing Alignment',
        description: 'Shared ICP definition, lead handoff standards and pipeline contribution accountability.',
        steps: [
          'Unify ICP definitions and scoring models',
          'Establish MQL-to-SQL SLAs and feedback',
          'Coordinate account-based campaign cadences',
          'Measure marketing-sourced pipeline ROI'
        ]
      },
      {
        title: 'Customer Lifecycle Operations',
        description: 'Coordinate onboarding, success, renewal and expansion workflows.',
        steps: [
          'Orchestrate seamless sales-to-CS onboarding',
          'Monitor customer health telemetry',
          'Trigger early churn risk alerts',
          'Automate renewal notification workflows'
        ]
      },
      {
        title: 'Revenue Analytics & Reporting',
        description: 'Build dashboards and reports for pipeline, forecast, productivity and performance.',
        steps: [
          'Build executive pipeline dashboards',
          'Track conversion velocity across funnels',
          'Monitor rep productivity and activity KPIs',
          'Provide real-time board-level telemetry'
        ]
      },
      {
        title: 'Forecast Management',
        description: 'Establish structured forecasting cadence with accuracy accountability.',
        steps: [
          'Establish weekly forecast cadence',
          'Apply predictive AI win probability models',
          'Measure forecast variance by sales leader',
          'Eliminate end-of-quarter commit surprises'
        ]
      }
    ],
    kpis: [
      { name: 'Lead Response Time', description: 'Time from lead creation to first sales contact' },
      { name: 'Marketing-to-Sales Conversion', description: 'Percentage of marketing-qualified leads becoming sales-accepted' },
      { name: 'Pipeline Contribution', description: 'Percentage of pipeline sourced by marketing versus sales versus partners' },
      { name: 'Revenue Forecast Accuracy', description: 'Variance between submitted forecast and actual revenue' },
      { name: 'Customer Acquisition Cost', description: 'Total cost to acquire one new customer' },
      { name: 'Net Revenue Retention', description: 'Revenue retained and grown from existing customers' },
      { name: 'Sales Productivity', description: 'Revenue generated per sales headcount over the period' }
    ],
    profitmachinesConnection: [
      'Revenue Operations practice connects all revenue-generating functions',
      'Growth Intelligence provides unified revenue analytics and forecasting',
      'AI Trust & Governance ensures data integrity across the revenue stack',
      'Revenue Intelligence surfaces cross-functional pipeline and performance data'
    ],
    visualType: 'revops'
  },
  {
    id: 'account-based-selling',
    slug: 'account-based-selling',
    number: '06',
    title: 'Account-Based Selling',
    subtitle: 'Focus Sales Resources on High-Value Business Accounts',
    badge: 'ABS',
    badgeColor: 'rose',
    intro: 'Account-based selling (ABS) is a focused B2B approach that prioritizes selected high-value accounts and develops personalized, deeply researched engagement around their specific business needs, stakeholder structures and strategic priorities.',
    challenges: [
      'Sales teams pursue too many low-value accounts simultaneously',
      'Account research is inconsistent and superficial',
      'Buying committees are not fully mapped or engaged',
      'Outreach lacks personalization and business relevance',
      'Sales and marketing target different account lists',
      'Multiple representatives contact the same organization without coordination',
      'Strategic opportunities lack formal account development plans'
    ],
    frameworks: [
      {
        title: 'Ideal Customer Profile Development',
        description: 'Define firmographic, technographic and behavioral criteria that characterize highest-value accounts.',
        steps: [
          'Analyze top 20% profitable customer base',
          'Extract common firmographic & tech traits',
          'Identify highest-fit industry verticals',
          'Validate against addressable market'
        ]
      },
      {
        title: 'Target Account Selection',
        description: 'Apply ICP criteria to identify and confirm target account list.',
        steps: [
          'Filter market database against ICP filters',
          'Incorporate intent surges & trigger events',
          'Prioritize tier-1, tier-2, tier-3 accounts',
          'Build named account portfolios per rep'
        ]
      },
      {
        title: 'Account Scoring & Prioritization',
        description: 'Score accounts by revenue potential, fit, intent and existing relationship.',
        steps: [
          'Combine fit, intent, and relationship scores',
          'Rank accounts by immediate revenue potential',
          'Alert reps to intent surge spikes',
          'Focus outbound cadences on top decile'
        ]
      },
      {
        title: 'Account Intelligence Research',
        description: 'Gather business context, strategic priorities, challenges and stakeholder information.',
        steps: [
          'Analyze corporate 10-K filings and press',
          'Map organizational tech stack and vendors',
          'Identify executive strategic initiatives',
          'Build customized account dossiers'
        ]
      },
      {
        title: 'Buying Committee Mapping',
        description: 'Identify economic buyers, technical evaluators, champions, end users and procurement stakeholders.',
        steps: [
          'Identify economic buyers & budget holders',
          'Map technical evaluators & legal blockers',
          'Cultivate internal champions & sponsors',
          'Target 7-12 stakeholders per enterprise deal'
        ]
      },
      {
        title: 'Personalized Engagement Strategy',
        description: 'Develop account-specific outreach, messaging and conversation plans.',
        steps: [
          'Craft bespoke executive value propositions',
          'Design multi-threaded account touches',
          'Align tailored collateral to persona pain',
          'Coordinate SDR, AE, and executive outreach'
        ]
      },
      {
        title: 'Opportunity Development',
        description: 'Create and advance qualified opportunities within target accounts.',
        steps: [
          'Convert engagement into discovery workshops',
          'Co-author mutual business cases',
          'Align stakeholders on common business value',
          'Formulate executive project charters'
        ]
      },
      {
        title: 'Account Growth & Expansion',
        description: 'Systematically expand presence across the account through additional stakeholders and use cases.',
        steps: [
          'Map secondary business units and regions',
          'Leverage initial metrics for land-and-expand',
          'Run quarterly executive account summits',
          'Drive multi-product cross-sell campaigns'
        ]
      }
    ],
    kpis: [
      { name: 'Target Account Engagement Rate', description: 'Percentage of target accounts with active engagement from sales or marketing' },
      { name: 'Account Penetration', description: 'Number of stakeholders engaged per target account' },
      { name: 'Meetings per Target Account', description: 'Average number of qualified meetings held within target accounts' },
      { name: 'Target Account Conversion Rate', description: 'Percentage of target accounts converting to opportunities' },
      { name: 'Account Pipeline Value', description: 'Total opportunity value within target account list' },
      { name: 'Account Revenue Growth', description: 'Year-over-year revenue growth within named account portfolio' }
    ],
    profitmachinesConnection: [
      'ICP Discovery identifies highest-value target account profiles',
      'Account Intelligence synthesizes enterprise data for account-level context',
      'Buyer Intelligence maps full buying committee structure and intent',
      'AI Prospecting Swarm runs coordinated multi-channel account outreach',
      'Hyper-Personalization Engine creates account-specific messaging at scale'
    ],
    visualType: 'abs'
  },
  {
    id: 'territory-planning',
    slug: 'territory-planning',
    number: '07',
    title: 'Territory Planning',
    subtitle: 'Align Markets, Accounts and Sales Capacity',
    badge: 'Planning',
    badgeColor: 'indigo',
    intro: 'Territory planning is the structured process of dividing markets, accounts and sales responsibilities to maximize coverage, opportunity access and commercial output from available sales capacity.',
    challenges: [
      'Uneven account distribution creating coverage gaps',
      'Territories with dramatically different revenue potential',
      'Sales representative workload imbalance',
      'Overlapping account ownership causing confusion',
      'Limited visibility into market opportunity by geography or segment',
      'Unclear quota allocation and territory-level targets',
      'Unproductive resource allocation due to poor territory design'
    ],
    frameworks: [
      {
        title: 'Market Segmentation',
        description: 'Divide total addressable market by geography, industry, company size and account type.',
        steps: [
          'Partition addressable market by geography & size',
          'Evaluate industry vertical concentration',
          'Assess commercial opportunity density',
          'Establish clear boundary definitions'
        ]
      },
      {
        title: 'Account Potential Assessment',
        description: 'Estimate revenue potential for each account using firmographic and behavioral data.',
        steps: [
          'Calculate account-level ARR revenue ceilings',
          'Measure historical wallet share and TAM',
          'Factor in growth rate and spending capacity',
          'Segment accounts into balanced potential tiers'
        ]
      },
      {
        title: 'Sales Capacity Assessment',
        description: 'Calculate available selling capacity per representative by role and geography.',
        steps: [
          'Calculate ramped rep selling bandwidth',
          'Audit time spent on customer-facing tasks',
          'Determine optimal accounts per AE/SDR',
          'Align capacity to regional revenue targets'
        ]
      },
      {
        title: 'Territory Assignment',
        description: 'Assign accounts to territories based on potential, capacity and geographic logic.',
        steps: [
          'Equitably distribute tier-1 target accounts',
          'Eliminate territory overlap & conflict',
          'Assign named reps to balanced territories',
          'Optimize travel logistics & timezone alignment'
        ]
      },
      {
        title: 'Quota & Target Allocation',
        description: 'Set territory-level revenue targets aligned to market potential and historical performance.',
        steps: [
          'Base territory quotas on bottom-up potential',
          'Align targets to corporate ARR objectives',
          'Establish quarterly ramped pacing goals',
          'Provide transparent attainment scorecards'
        ]
      },
      {
        title: 'Coverage Planning',
        description: 'Ensure adequate coverage frequency for key accounts within each territory.',
        steps: [
          'Schedule account touch cadences by tier',
          'Ensure high-frequency coverage for tier-1',
          'Plan partner and channel co-selling mesh',
          'Track coverage gaps across regions'
        ]
      },
      {
        title: 'Performance Monitoring',
        description: 'Track revenue, pipeline and coverage metrics at territory level.',
        steps: [
          'Track pipeline generation by territory',
          'Monitor quota attainment variance',
          'Compare rep productivity across geographies',
          'Identify underperforming market sectors'
        ]
      },
      {
        title: 'Territory Rebalancing',
        description: 'Adjust territory assignments based on performance data, headcount changes and market shifts.',
        steps: [
          'Review territory performance semi-annually',
          'Adjust boundaries for headcount additions',
          'Reallocate inactive accounts to top performers',
          'Smooth quota imbalances dynamically'
        ]
      }
    ],
    kpis: [
      { name: 'Territory Revenue Attainment', description: 'Actual revenue versus target by territory' },
      { name: 'Pipeline Generation by Territory', description: 'New pipeline created within each territory over the period' },
      { name: 'Account Coverage Rate', description: 'Percentage of target accounts with active engagement' },
      { name: 'Quota Attainment', description: 'Percentage of reps achieving or exceeding their territory quota' },
      { name: 'Sales Capacity Utilization', description: 'Percentage of available selling capacity actively deployed' },
      { name: 'Revenue Potential vs Actual', description: 'Gap between estimated territory potential and realized revenue' }
    ],
    profitmachinesConnection: [
      'Market Intelligence identifies territory-level opportunity concentration',
      'ICP Discovery supports account prioritization within each territory',
      'Global Business Acceleration applies territory planning to international markets',
      'Revenue Intelligence tracks territory performance against plan in real time'
    ],
    visualType: 'territory'
  },
  {
    id: 'sales-productivity-frameworks',
    slug: 'sales-productivity-frameworks',
    number: '08',
    title: 'Sales Productivity Frameworks',
    subtitle: 'Increase Selling Capacity and Execution Effectiveness',
    badge: 'Productivity',
    badgeColor: 'teal',
    intro: 'Sales productivity is the ability of a sales organization to convert available people, time, processes and resources into meaningful commercial outcomes. High activity volume does not automatically create high productivity — the quality, focus and effectiveness of sales actions determines commercial impact.',
    challenges: [
      'Excessive administrative work consuming selling time',
      'Too much time on low-value activities',
      'Repetitive manual tasks reducing focus on customers',
      'Poor meeting preparation leading to low-quality conversations',
      'Inefficient CRM updates consuming significant time',
      'Inconsistent follow-up reducing deal momentum',
      'Limited coaching due to management bandwidth constraints',
      'Unclear priorities making it difficult to focus on high-value opportunities'
    ],
    frameworks: [
      {
        title: 'Time & Activity Management',
        description: 'Audit and redesign time allocation to maximize customer-facing selling time.',
        steps: [
          'Conduct time-allocation audits across team',
          'Measure customer-facing selling percentage',
          'Protect dedicated uninterrupted selling blocks',
          'Eliminate unproductive internal syncs'
        ]
      },
      {
        title: 'Sales Task Prioritization',
        description: 'Apply structured prioritization to daily sales activities based on revenue impact.',
        steps: [
          'Apply revenue-impact prioritization rubrics',
          'Focus daily hours on high-win-rate activities',
          'Standardize morning deal-prep routines',
          'Align daily tasks with active deal stages'
        ]
      },
      {
        title: 'Account & Opportunity Prioritization',
        description: 'Focus effort on accounts and opportunities with highest probability and value.',
        steps: [
          'Rank daily outreach by account intent scores',
          'Prioritize deals with imminent close dates',
          'Focus coaching on high-value opportunities',
          'Automate alerts for high-risk accounts'
        ]
      },
      {
        title: 'Sales Process Simplification',
        description: 'Remove unnecessary steps, approvals and administrative requirements from the sales process.',
        steps: [
          'Streamline CRM fields & approval chains',
          'Remove redundant administrative gates',
          'Simplify discount and legal approvals',
          'Automate meeting notes and recap summaries'
        ]
      },
      {
        title: 'Automation of Repetitive Activities',
        description: 'Automate data entry, follow-up scheduling, meeting logistics and report generation.',
        steps: [
          'Automate calendar scheduling and reminders',
          'Auto-enrich lead & contact data in CRM',
          'Trigger automated follow-up cadences',
          'Auto-generate standard proposal drafts'
        ]
      },
      {
        title: 'AI-Enabled Sales Productivity',
        description: 'Apply AI to account research, meeting preparation, email personalization and CRM updates.',
        steps: [
          'Ingest real-time call coaching tips',
          'Auto-generate hyper-personalized email drafts',
          'Summarize 10-K filings into 1-page dossiers',
          'Recommend dynamic Next Best Actions'
        ]
      },
      {
        title: 'Performance Coaching',
        description: 'Regular structured coaching conversations focused on skill development and deal strategy.',
        steps: [
          'Conduct weekly deal strategy coaching',
          'Review recorded sales calls against rubrics',
          'Run peer deal-critique workshops',
          'Track skill progression across reps'
        ]
      },
      {
        title: 'Continuous Improvement',
        description: 'Measure → Diagnose → Prioritize → Improve → Validate → Repeat.',
        steps: [
          'Execute cyclical Measure → Diagnose → Improve',
          'Analyze won and lost deal drivers quarterly',
          'Refresh playbooks with winning talk tracks',
          'Optimize sales enablement continuously'
        ]
      }
    ],
    kpis: [
      { name: 'Revenue per Sales Representative', description: 'Total revenue generated per active sales headcount' },
      { name: 'Customer-Facing Time', description: 'Percentage of total working time spent in direct customer conversations' },
      { name: 'Administrative Time', description: 'Percentage of time consumed by non-selling activities' },
      { name: 'Opportunities Created per Rep', description: 'New qualified opportunities generated per representative per period' },
      { name: 'Sales Ramp Time', description: 'Time for new representatives to reach full quota productivity' },
      { name: 'Quota Attainment Rate', description: 'Percentage of sales team achieving or exceeding quota' }
    ],
    profitmachinesConnection: [
      'Intelligent Sales Agents automate research, preparation and CRM updates',
      'Sales Optimization identifies the highest-impact productivity improvements',
      'Autonomous Learning adapts AI recommendations based on what works',
      'Next Best Action guides daily priorities for each representative',
      'Revenue Intelligence identifies which activities most correlate with closed deals'
    ],
    visualType: 'productivity'
  }
];

export const SALES_ACCELERATION_OVERVIEW = {
  title: 'The Eight Sales Acceleration Disciplines',
  description: 'A complete, connected system for building a more predictable, efficient and intelligent sales engine.',
  disciplines: [
    { id: 'sales-methodologies', title: 'Sales Methodologies', shortDescription: 'Create consistent, disciplined approaches to winning deals', icon: 'Compass' },
    { id: 'sales-playbooks', title: 'Sales Playbooks', shortDescription: 'Turn strategy into repeatable step-by-step execution', icon: 'BookOpen' },
    { id: 'sales-velocity-models', title: 'Sales Velocity Models', shortDescription: 'Understand how quickly your pipeline generates revenue', icon: 'Gauge' },
    { id: 'pipeline-optimization', title: 'Pipeline Optimization', shortDescription: 'Improve opportunity quality, progression and conversion', icon: 'Sliders' },
    { id: 'revenue-operations', title: 'Revenue Operations', shortDescription: 'Connect sales, marketing, customer success and finance', icon: 'Workflow' },
    { id: 'account-based-selling', title: 'Account-Based Selling', shortDescription: 'Focus sales resources on highest-value business accounts', icon: 'Target' },
    { id: 'territory-planning', title: 'Territory Planning', shortDescription: 'Align markets, accounts and sales capacity effectively', icon: 'Map' },
    { id: 'sales-productivity-frameworks', title: 'Sales Productivity Frameworks', shortDescription: 'Increase selling capacity and execution effectiveness', icon: 'Rocket' }
  ]
};

export const SALES_ACCELERATION_METRICS = {
  pipeline: [
    { name: 'Qualified Pipeline Value', desc: 'Total weighted value of deals meeting objective qualification gates.' },
    { name: 'Pipeline Coverage Ratio', desc: 'Ratio of active qualified pipeline to target revenue quota (target: 3-4x).' },
    { name: 'Opportunity Creation Rate', desc: 'Weekly or monthly velocity of newly verified enterprise opportunities.' },
    { name: 'Stage-Gate Conversion', desc: 'Progression percentage between consecutive pipeline milestones.' },
    { name: 'Pipeline Aging Index', desc: 'Average days opportunities remain active without positive progression.' }
  ],
  effectiveness: [
    { name: 'Competitive Win Rate', desc: 'Percentage of qualified head-to-head deals converted to closed-won.' },
    { name: 'Average Deal Value (ADV)', desc: 'Mean annualized contract value across all closed-won enterprise deals.' },
    { name: 'Sales Cycle Duration', desc: 'Average calendar days from initial discovery meeting to contract signature.' },
    { name: 'Multi-Threading Depth', desc: 'Average count of validated buyer committee stakeholders engaged per deal.' },
    { name: 'Discount Discipline', desc: 'Average discount percentage applied to list pricing across quarters.' }
  ],
  revenue: [
    { name: 'Net New ARR Added', desc: 'Incremental recurring revenue added from new customer acquisitions.' },
    { name: 'Net Revenue Retention (NRR)', desc: 'Revenue retained and expanded from existing customer cohorts (target: >120%).' },
    { name: 'Revenue per Representative', desc: 'Total closed-won ARR generated per full-time quota-carrying sales headcount.' },
    { name: 'Forecast Precision', desc: 'Variance between day-1 quarter forecast and day-90 actual closed revenue.' },
    { name: 'Quota Attainment Breadth', desc: 'Percentage of sales team achieving 100%+ of individual quota targets.' }
  ],
  operational: [
    { name: 'Speed to First Response', desc: 'Minutes from high-intent inbound signal to verified sales outreach.' },
    { name: 'CRM Data Integrity Score', desc: 'Audit percentage of mandatory fields accurately maintained without manual chase.' },
    { name: 'Selling Time Allocation', desc: 'Percentage of rep working hours spent in direct customer conversations.' },
    { name: 'Playbook Process Adherence', desc: 'Audit compliance score evaluating adherence to standard stage exit criteria.' },
    { name: 'New Rep Ramp Duration', desc: 'Months required for newly hired sales reps to reach 100% quota productivity.' }
  ]
};
