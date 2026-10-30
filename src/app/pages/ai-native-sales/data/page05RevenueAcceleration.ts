import { AiSalesCapabilityPageData } from '../types';

export const page05RevenueAcceleration: AiSalesCapabilityPageData = {
  pageNumber: '05',
  title: 'Revenue Acceleration',
  slug: 'revenue-acceleration',
  canonicalPath: '/ai-native-sales/revenue-acceleration',
  eyebrow: 'AI NATIVE SALES / REVENUE ACCELERATION',
  heroHeadline: 'Identify Deal Risks Earlier. Move Opportunities Forward With Confidence.',
  heroSupporting: 'Complex deals can lose momentum because of missing stakeholders, unresolved objections, competing priorities, weak champions, unclear decision criteria, and delayed follow-ups. Revenue Acceleration helps teams understand deal health, coordinate responses, and focus on the actions most likely to resolve blockers before deals slip or stall.',
  primaryCTA: 'Accelerate Deal Velocity',
  secondaryCTA: 'Book a Consultation',
  targetDecisionMakers: [
    'Chief Revenue Officers (CROs)',
    'VP Enterprise Sales',
    'Regional Sales Directors',
    'Strategic Deal Desk Leaders',
    'Commercial Legal Counsel'
  ],
  visualTheme: 'acceleration',

  businessProblemTitle: 'Where Revenue Momentum Breaks Down in Mid-Flight Opportunities',
  businessProblemSubtitle: 'Most enterprise deals do not fail because the product was bad—they stall and slip because hidden risks and unengaged decision-makers were discovered too late.',
  businessProblems: [
    {
      id: 'pipeline-stagnation',
      title: 'Invisible Deal Stagnation & Pipeline Bloat',
      symptom: 'Opportunities linger in "Evaluation" or "Negotiation" stages for months without verifiable customer progression.',
      rootCause: 'Sales reps rely on optimistic verbal assurances from friendly champions rather than objective milestone telemetry.',
      impact: 'Quarterly forecasts experience 35-50% variance, blindsiding executive leadership at quarter-end.'
    },
    {
      id: 'unaddressed-risks',
      title: 'Hidden Objections & Unvoiced Competitor Threats',
      symptom: 'Deals marked as "90% commit" suddenly vanish or lose to an incumbent competitor days before projected signature.',
      rootCause: 'Lack of systematic risk detection across email sentiment, meeting attendance, and security review progress.',
      impact: 'Late-stage win rates drop below 45% on enterprise transactions exceeding $250k ARR.'
    },
    {
      id: 'siloed-war-rooms',
      title: 'Fragmented Internal Deal Execution',
      symptom: 'Executive sponsors, legal counsel, solution architects, and sales reps operate in disconnected Slack channels with no shared war room.',
      rootCause: 'Deal orchestration lacks a single collaborative cockpit uniting commercial, technical, and executive workstreams.',
      impact: 'Proposal turnaround takes weeks and key contractual redlines miss critical customer board meetings.'
    }
  ],

  subSubmenus: [
    {
      id: 'deal-intelligence',
      title: 'Deal Intelligence',
      badge: 'Multivariate Health Telemetry',
      businessQuestion: 'What is the true empirical health of this opportunity based on observable evidence rather than rep sentiment?',
      description: 'Scores active enterprise deals across 12 objective dimensions including committee coverage, meeting cadence, executive engagement, and content views.',
      businessProblem: 'Reps report "great meetings" while the prospect’s CFO has already frozen new software procurement budgets.',
      howItWorks: 'Analyzes engagement frequency, email response latency, stakeholder seniority, and mutual plan completion to compute a real-time Deal Health Score.',
      informationUsed: [
        'Timestamped email exchanges and customer response latency trends',
        'Seniority and department diversity of meeting participants',
        'Digital sales room view duration across proposal and pricing pages',
        'Historical close signatures of similar deal sizes and industries'
      ],
      workflowSupport: 'Flags deteriorating deal health 30-45 days before forecasted close dates, giving sales leadership time to intervene.',
      outcomesSupported: 'Increases forecast accuracy to 95%+ and reduces unpredicted deal slippage by 62%.',
      humanOversight: 'Sales managers review low-health opportunities during bi-weekly pipeline inspection meetings.',
      kpis: [
        { metric: 'Deal Health Precision', definition: 'Correlation between high health score and successful contract close', target: '92.4%' },
        { metric: 'Early Warning Lead Time', definition: 'Days of advance notice provided before predicted deal slippage occurs', target: '38 Days' },
        { metric: 'Forecast Variance', definition: 'Deviation between committed forecast and final closed revenue', target: '< 4.2%' }
      ]
    },
    {
      id: 'deal-war-room',
      title: 'Deal War Room',
      badge: 'Collaborative Execution',
      businessQuestion: 'How can executive sponsors, solution engineers, and legal counsel coordinate to advance our largest strategic transactions?',
      description: 'A unified virtual command center for high-value strategic deals, uniting stakeholder influence maps, mutual action plans, and task ownership.',
      businessProblem: 'Large deals fail because cross-functional team members (exec sponsors, legal, sales engineering) work in silos with no shared timeline.',
      howItWorks: 'Assembles a centralized deal room linking mutual action milestones, legal redlines, competitive battlecards, and executive sponsor touchpoints.',
      informationUsed: [
        'Mutual action plan milestones, deliverables, and customer sign-off deadlines',
        'Executive sponsor relationship maps and peer-to-peer engagement logs',
        'Legal contract redline status and pending security compliance questions',
        'Assigned internal owner, task dependencies, and due date alerts'
      ],
      workflowSupport: 'Provides daily standup briefings showing overdue deliverables, blocking items, and immediate next steps for each team member.',
      outcomesSupported: 'Shortens enterprise negotiation cycles by 32% and raises win rates on competitive deals over $500k to 68%.',
      humanOversight: 'Enterprise Account Executive and VP Sales lead the war room and assign all cross-functional tasks.',
      kpis: [
        { metric: 'Strategic Deal Win Rate', definition: 'Close rate on enterprise opportunities managed through deal war rooms', target: '68.5%' },
        { metric: 'Mutual Plan Milestone Adherence', definition: 'Customer and vendor milestones completed on schedule', target: '88.6%' },
        { metric: 'Executive Sponsor Engagement', definition: 'Percentage of tier-1 deals with active executive sponsor alignment', target: '94.0%' }
      ]
    },
    {
      id: 'deal-risk-analysis',
      title: 'Deal Risk Analysis',
      badge: 'Predictive Risk Radar',
      businessQuestion: 'What specific technical, commercial, or political obstacles threaten to delay or derail this opportunity?',
      description: 'Systematically detects risk patterns such as single-threaded engagement, champion turnover, competitor stealth pilots, and budget freezes.',
      businessProblem: 'Sales teams uncover deal blockers only after the projected close date has passed and the champion stops replying.',
      howItWorks: 'Scans conversational telemetry, digital engagement pauses, and org chart shifts, matching observed patterns against historical lost-deal fingerprints.',
      informationUsed: [
        'Sudden elongation in customer email response times (>3x baseline)',
        'Champion job changes, LinkedIn updates, or corporate restructuring news',
        'Competitor mentions and sudden requests for custom pilot pricing models',
        'Absence of verified economic buyer or procurement contacts in late stages'
      ],
      workflowSupport: 'Generates specific remediation playbooks (e.g. "Trigger executive outreach to board member; deploy security brief to address CISO pause").',
      outcomesSupported: 'Rescues 34% of at-risk deals and slashes late-stage losses by over half.',
      humanOversight: 'Sales Director evaluates flagged risk levels and authorizes tactical remediation actions.',
      kpis: [
        { metric: 'Risk Detection Accuracy', definition: 'Identified deal risks confirmed by subsequent customer interactions', target: '94.8%' },
        { metric: 'At-Risk Deal Recovery Rate', definition: 'Opportunities successfully closed following automated risk intervention', target: '34.2%' },
        { metric: 'Late-Stage Loss Reduction', definition: 'Decrease in deals lost after reaching proposal/negotiation stage', target: '-54.0%' }
      ]
    },
    {
      id: 'sales-cycle-optimization',
      title: 'Sales Cycle Optimization',
      badge: 'Friction Elimination',
      businessQuestion: 'Which specific stages and handoffs cause our sales cycle to extend, and how do we remove the drag?',
      description: 'Stage duration telemetry and bottleneck diagnostics that pinpoint avoidable delays in legal review, security assessment, and technical validation.',
      businessProblem: 'Sales cycles expand from 60 to 140 days without management understanding which internal or external step is creating the delay.',
      howItWorks: 'Calculates stage aging benchmarks across deal sizes, highlighting individual opportunities exceeding normal stage residency limits.',
      informationUsed: [
        'Historical days-in-stage benchmarks segmented by deal size and industry',
        'Legal redline turnaround times and security review queue duration',
        'Customer proposal revision counts and discounting negotiation rounds',
        'Sales engineering proof-of-concept (POC) duration and success criteria'
      ],
      workflowSupport: 'Alerts sales ops and legal when an agreement has been in contract review longer than 5 business days, triggering automated escalation.',
      outcomesSupported: 'Compresses overall sales cycle length by 35 days, accelerating revenue realization and improving sales capacity.',
      humanOversight: 'RevOps and Legal heads review stage duration bottlenecks monthly to adjust internal approval policies.',
      kpis: [
        { metric: 'Average Sales Cycle Compression', definition: 'Days saved from initial discovery to executed contract', target: '-35 Days' },
        { metric: 'Stage Bottleneck Elimination', definition: 'Reduction in average days spent in contract and security review', target: '-58.0%' },
        { metric: 'Deal Velocity Multiplier', definition: 'Improvement in pipeline velocity index across enterprise deals', target: '1.45x' }
      ]
    }
  ],

  workflowTitle: 'Revenue Acceleration & Deal Advancement Workflow',
  workflowSubtitle: 'From real-time health telemetry to war room coordination and accelerated contract execution.',
  workflowSteps: [
    {
      step: '01',
      name: 'Continuous Deal Telemetry Ingestion',
      description: 'Ingests email latency, meeting transcripts, and digital room telemetry across all active deals.',
      inputs: 'CRM records, calendar invites, email threads, digital sales room logs',
      aiAction: 'Calculates dynamic deal health score and flags anomalies.',
      humanGate: 'AE reviews health indicators during weekly 1-on-1s.',
      output: 'Live Opportunity Health Score & Risk Classification'
    },
    {
      step: '02',
      name: 'Predictive Risk Diagnosis',
      description: 'Scans for specific risk signatures including missing stakeholders and competitor pilots.',
      inputs: 'Stage residency days, attendee seniority, competitor mentions',
      aiAction: 'Matches deal trajectory against historical lost-deal fingerprints.',
      humanGate: 'Sales Director reviews identified risk factors and approves action.',
      output: 'Risk Remediation Brief & Prescribed Action Plan'
    },
    {
      step: '03',
      name: 'Deal War Room Activation',
      description: 'Mobilizes cross-functional resources for tier-1 deals requiring strategic alignment.',
      inputs: 'Mutual action plan milestones, legal redlines, executive sponsors',
      aiAction: 'Assigns tasks, tracks milestone completion, and manages daily updates.',
      humanGate: 'Executive sponsor conducts peer-to-peer customer executive call.',
      output: 'Coordinated Multi-Workstream Deal Advancement'
    },
    {
      step: '04',
      name: 'Contract & Close Optimization',
      description: 'Streamlines legal, security, and procurement approvals to prevent quarter-end slippage.',
      inputs: 'Procurement guidelines, standard terms, legal redline documents',
      aiAction: 'Pre-screens redlines against pre-approved legal fallback positions.',
      humanGate: 'Legal Counsel and CFO execute final commercial countersignature.',
      output: 'Executed Enterprise Contract & Predictable Revenue Realization'
    }
  ],

  useCases: [
    {
      title: 'Fortune 500 Strategic Deal War Room',
      segment: 'Cloud Infrastructure & Managed DevOps',
      situation: 'A $1.2M enterprise contract was stalling because the client’s procurement team introduced 42 custom legal redlines 10 days before fiscal year-end.',
      approach: 'Activated Deal War Room, mobilizing General Counsel, CFO, and VP Sales to review automated legal fallback recommendations and coordinate executive outreach.',
      result: 'Resolved all 42 redlines in 72 hours and secured signed contract 4 days ahead of deadline with zero unapproved margin concessions.',
      metrics: [
        { label: 'Contract Value', value: '$1.2M ARR' },
        { label: 'Resolution Speed', value: '72 Hours' }
      ]
    },
    {
      title: 'Early Deal Risk Detection & Rescue',
      segment: 'Supply Chain & Inventory Management SaaS',
      situation: 'A $450k deal marked as "Commit" showed sudden email response latency from the VP Champion, masking an internal budget re-allocation.',
      approach: 'Deal Risk Analysis detected the behavioral anomaly 40 days before projected close, prompting an immediate executive alignment meeting with the CFO.',
      result: 'Uncovered the budget reallocation early, reframed the solution around hard inventory cost reduction, and rescued the deal before it was cancelled.',
      metrics: [
        { label: 'Rescued Value', value: '$450k' },
        { label: 'Advance Warning', value: '42 Days' }
      ]
    },
    {
      title: 'Sales Cycle Bottleneck Compression',
      segment: 'Medical Device & Hospital Compliance Tech',
      situation: 'Hospital procurement cycles averaged 210 days, with 85 days lost in repetitive IT security assessments and vendor credentialing.',
      approach: 'Deployed Sales Cycle Optimization to provide pre-indexed HIPAA and SOC2 compliance dossiers and real-time vendor risk clearance workflows.',
      result: 'Security phase duration dropped from 85 days to 18 days, compressing overall sales cycle duration by 32% across 60+ regional hospital systems.',
      metrics: [
        { label: 'Cycle Reduction', value: '-67 Days' },
        { label: 'Annual Pipeline Velocity', value: '+46.0%' }
      ]
    }
  ],

  dashboardTitle: 'Revenue Acceleration & Deal Risk Telemetry',
  dashboardSubtitle: 'Real-time pipeline health tracking, risk detection radar, and sales cycle stage velocity analytics.',
  dashboardBadge: 'Deal Telemetry Engine v2.4',
  dashboardMetrics: [
    { label: 'Mean Deal Health Score', value: '88.4 / 100', change: '+14.2 pts MoM', note: 'Across active committed deals' },
    { label: 'Average Sales Cycle', value: '54 Days', change: '-35 days vs baseline', note: 'Compressed enterprise cycle' },
    { label: 'Quarterly Forecast Variance', value: '3.6%', change: 'Down from 38%', note: 'Predictable quarter-end close' },
    { label: 'At-Risk Deal Recovery', value: '34.2%', change: '+18.0% lift', note: 'Successfully closed post-alert' }
  ],
  dashboardVisualType: 'timeline',

  kpiFrameworkTitle: 'Revenue Acceleration KPI & Velocity Measurement',
  kpis: [
    {
      name: 'Deal Slippage Rate',
      formula: 'Opportunities Missing Forecasted Close Month ÷ Total Forecasted Deals',
      definition: 'Percentage of opportunities committed for a specific calendar month that fail to close within that period.',
      reportingWindow: 'Monthly Close',
      illustrativeValue: '6.4%',
      interpretation: 'Traditional industry benchmark is 35-50%; acceleration workflows target under 10% slippage.'
    },
    {
      name: 'Average Sales Cycle Duration',
      formula: 'Total Days from Discovery Qualified to Contract Signature ÷ Closed Deals',
      definition: 'Mean business days required to shepherd an opportunity through the complete sales pipeline.',
      reportingWindow: 'Quarterly Audit',
      illustrativeValue: '54.2 Days',
      interpretation: 'Compression indicates improved decision enablement and faster legal/security clearance.'
    },
    {
      name: 'Stage Conversion Velocity Index',
      formula: 'Stage Progression Rate ÷ Average Days in Stage',
      definition: 'Measures the velocity and momentum of pipeline moving across key qualification and negotiation gates.',
      reportingWindow: 'Monthly Rolling',
      illustrativeValue: '1.48x',
      interpretation: 'Values > 1.2 indicate rapid pipeline advancement with low deal stagnation.'
    },
    {
      name: 'At-Risk Deal Rescue Yield',
      formula: 'Closed Revenue from Flagged At-Risk Deals ÷ Total Flagged At-Risk Pipeline',
      definition: 'Proportion of revenue recovered through algorithmic risk alerts and coordinated war room interventions.',
      reportingWindow: 'Quarterly',
      illustrativeValue: '34.2%',
      interpretation: 'Directly measures the financial return of proactive deal risk management.'
    }
  ],

  governanceTitle: 'Deal Integrity, Commercial Authority & Risk Governance',
  governanceSubtitle: 'Ensuring rigorous stage validation, transparent risk scoring, and authorized commercial decision-making.',
  governanceItems: [
    {
      area: 'Objective Stage Exit Criteria',
      policy: 'Opportunities cannot advance to "Proposal" or "Negotiation" stages without verified multi-threaded stakeholder contacts logged in CRM.',
      humanCheckpoint: 'Sales Director reviews and validates mandatory stage criteria before approving stage advancement.',
      auditTrail: 'Full timestamped stage history and criteria verification checklist recorded in CRM.'
    },
    {
      area: 'Deal Health Score Explainability',
      policy: 'Every risk flag and health score must cite specific observable telemetry (e.g. response latency, lack of economic buyer engagement).',
      humanCheckpoint: 'Reps can dispute automated risk flags by submitting documented counter-evidence.',
      auditTrail: 'Complete scoring factor audit log stored with every deal update.'
    },
    {
      area: 'Commercial Negotiation Guardrails',
      policy: 'Any contractual concession exceeding standard discount limits or modifying indemnity terms requires Deal Desk and Legal authorization.',
      humanCheckpoint: 'CFO and General Counsel sign off on non-standard deal terms prior to customer delivery.',
      auditTrail: 'Commercial exception approval ledger maintained in corporate ERP.'
    },
    {
      area: 'Forecast Integrity & Transparency',
      policy: 'Forecast commit classifications are algorithmically cross-referenced against deal health to prevent ungrounded quota sandbagging or inflation.',
      humanCheckpoint: 'VP Sales conducts bi-weekly deal inspection reviews reconciling rep commitments against telemetry.',
      auditTrail: 'Historical forecast changes, rep overrides, and actual close outcomes archived for audit.'
    }
  ],

  relatedCapabilities: [
    {
      title: 'Pricing Intelligence',
      path: '/ai-native-sales/pricing-intelligence',
      summary: 'Protect deal profitability and optimize discount structures during late-stage negotiations.',
      badge: 'Pillar 06'
    },
    {
      title: 'Intelligent Sales Agents',
      path: '/ai-native-sales/intelligent-sales-agents',
      summary: 'Deploy Account Executive co-pilot agents to manage deal war rooms and post-meeting briefs.',
      badge: 'Pillar 04'
    },
    {
      title: 'Autonomous GTM Command Center',
      path: '/ai-native-sales/autonomous-gtm-command-center',
      summary: 'Aggregate deal health and pipeline risk telemetry into an executive revenue cockpit.',
      badge: 'Pillar 09'
    }
  ],

  closingCtaHeadline: 'Eliminate Deal Slippage and Secure Predictable Revenue Velocity',
  closingCtaDescription: 'Stop letting complex enterprise deals stall in late-stage limbo. Schedule an executive consultation to accelerate your revenue execution.'
};

