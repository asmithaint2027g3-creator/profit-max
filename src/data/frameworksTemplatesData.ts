// Frameworks & Templates Hub Comprehensive Data Architecture
// ProfitMachines Enterprise Revenue Platform

export interface PlaybookResource {
  id: string;
  title: string;
  badge: string;
  description: string;
  targetAudience: string;
  coreStages: string[];
  operationalInputs: string[];
  expectedOutputs: string[];
  kpis: string[];
  bestPractices: string[];
}

export interface AssessmentResource {
  id: string;
  title: string;
  badge: string;
  description: string;
  diagnosticFocus: string;
  evaluationAreas: string[];
  diagnosticQuestions: {
    question: string;
    options: { text: string; score: number }[];
  }[];
  scoringRubric: { range: string; interpretation: string; priorityAction: string }[];
  outputDeliverable: string;
}

export interface MaturityModelResource {
  id: string;
  title: string;
  badge: string;
  description: string;
  dimensions: string[];
  levels: {
    level: number;
    name: string;
    characteristics: string[];
    processState: string;
    automationLevel: string;
    dataMaturity: string;
    recommendedActions: string[];
  }[];
  evaluationGuidance: string;
}

export interface BusinessCaseResource {
  id: string;
  title: string;
  badge: string;
  description: string;
  executiveSummary: string;
  businessProblem: string;
  proposedSolution: string;
  investmentCategories: string[];
  expectedBenefits: string[];
  keyRisks: string[];
  decisionGateways: string[];
  measurementFramework: string;
}

export interface RoiModelResource {
  id: string;
  title: string;
  badge: string;
  description: string;
  formula: string;
  variables: { symbol: string; label: string; meaning: string }[];
  businessInterpretation: string;
  exampleCalculation: string;
  limitations: string;
}

export interface ChecklistResource {
  id: string;
  title: string;
  badge: string;
  description: string;
  cadence: string;
  stakeholders: string[];
  items: { id: string; label: string; detail: string; category: string }[];
  governanceNote: string;
}

export interface SopResource {
  id: string;
  title: string;
  badge: string;
  description: string;
  purpose: string;
  scope: string;
  processOwner: string;
  roles: string[];
  prerequisites: string[];
  steps: { stepNumber: number; action: string; owner: string; system: string; verification: string }[];
  systemsRequired: string[];
  qualityChecks: string[];
  kpis: string[];
  revisionHistory: string;
}

export interface WorkshopResource {
  id: string;
  title: string;
  badge: string;
  description: string;
  objective: string;
  participants: string[];
  duration: string;
  prerequisites: string[];
  agendaModules: { time: string; topic: string; activity: string; deliverable: string }[];
  expectedOutputs: string[];
  postWorkshopActionPlan: string[];
}

export interface HubCategory {
  id: string;
  label: string;
  anchor: string;
  number: string;
  heading: string;
  subheading: string;
  description: string;
  businessProblems: string[];
  rootCauses: string[];
  operationalImpact: string;
  howToUse: {
    whenToUse: string;
    whoShouldUse: string;
    expectedInputs: string;
    expectedOutputs: string;
  };
  implementationSteps: string[];
  businessValue: string;
  metrics: string[];
}

// ── 01. PLAYBOOKS DATA ──
export const PLAYBOOK_RESOURCES: PlaybookResource[] = [
  {
    id: 'enterprise-sales-playbook',
    title: 'Enterprise Sales Playbook',
    badge: 'Deal Execution',
    description: 'A comprehensive, stage-by-stage methodology for navigating complex multi-stakeholder enterprise commercial transactions from account discovery to contract execution.',
    targetAudience: 'Enterprise Account Executives, Commercial Directors, Sales Leadership',
    coreStages: [
      '1. Target Account Identification & ICP Fit Verification',
      '2. Stakeholder Power Mapping & Buying Committee Profiling',
      '3. Business Problem & Economic Impact Discovery',
      '4. Solution Architecture Alignment & Technical Validation',
      '5. Mutual Action Plan (MAP) Co-Creation',
      '6. Procurement, Legal & Commercial Negotiation',
      '7. Closing, Executive Sign-off & Onboarding Handover'
    ],
    operationalInputs: ['Target Account Domain', 'Executive Org Chart', 'Historical Deal Logs', 'MEDDPICC Criteria'],
    expectedOutputs: ['Validated Mutual Action Plan', 'Stakeholder Power Map', 'Executive Business Case', 'Signed Master Service Agreement'],
    kpis: ['Average Deal Cycle Length', 'Stage-to-Stage Conversion Rate', 'Win Rate on Qualified Opportunities', 'Average Contract Value (ACV)'],
    bestPractices: [
      'Engage minimum 5 distinct stakeholders across Economic Buyer, Technical Champion, and Procurement.',
      'Never progress past Stage 2 without an explicit, quantified Economic Impact metric agreed by the client.',
      'Establish reciprocal commitments in the Mutual Action Plan with defined customer deadlines.'
    ]
  },
  {
    id: 'b2b-prospecting-playbook',
    title: 'B2B Prospecting Playbook',
    badge: 'Outbound Generation',
    description: 'Systematic outbound cadencing protocols connecting account intent signals, persona pain points, multi-touch engagement sequences, and meeting qualification standards.',
    targetAudience: 'SDRs, BDRs, Outbound Campaign Managers, Pipeline Generation Teams',
    coreStages: [
      '1. Account & Market Research: Deep firmographic and intent signal inspection',
      '2. Buyer Identification: Uncovering active persona champions and budget owners',
      '3. Prospect Prioritization: Tier-1, Tier-2, Tier-3 account allocation',
      '4. Personalized Multi-Touch Outreach: Tailored email, phone, and social messaging',
      '5. Follow-Up Cadences: 12-touch rhythm over 21 days with value-add insights',
      '6. Discovery Meeting Conversion & Qualification Handover'
    ],
    operationalInputs: ['Intent Signal Telemetry', 'Technographic Profiles', 'Persona Value Matrices', 'Verified Contact Records'],
    expectedOutputs: ['Qualified First Meetings (SQLs)', 'Validated Contact Data', 'Account Engagement Dossiers'],
    kpis: ['Email Open & Response Rates', 'Call-to-Connect Ratio', 'Meeting Held Rate', 'Opportunity Pipeline Sourced'],
    bestPractices: [
      'Reference a specific observable business trigger in the opening sentence of outreach.',
      'Alternate communication channels (email, phone, LinkedIn) across business hours.',
      'Maintain continuous CRM synchronization of every interaction to prevent duplicate contacts.'
    ]
  },
  {
    id: 'demand-generation-playbook',
    title: 'Demand Generation Playbook',
    badge: 'Inbound Growth',
    description: 'Full-funnel demand creation and capture blueprint orchestrating thought-leadership content, intent-based paid media, conversion pathways, and qualification routing.',
    targetAudience: 'Demand Generation Directors, CMOs, Growth Marketing Teams',
    coreStages: [
      '1. Market Segmentation: Defining total addressable and serviceable markets',
      '2. Audience Identification: Profiling decision-maker content consumption habits',
      '3. Demand Creation: High-value educational assets and point-of-view briefs',
      '4. Multi-Channel Campaign Execution: Search, social, content syndication, webinars',
      '5. Lead Capture & Enrichment: Frictionless forms and sub-second firmographic enrichment',
      '6. Algorithmic Lead Qualification & Sales Routing',
      '7. Pipeline Contribution Telemetry & Attributed Revenue Analysis'
    ],
    operationalInputs: ['Market ICP Definitions', 'Content Asset Repository', 'Ad Spend Allocations', 'Enrichment Webhooks'],
    expectedOutputs: ['Marketing Qualified Accounts (MQAs)', 'Sales Accepted Pipeline', 'Multi-Touch Attribution Reports'],
    kpis: ['Cost per Qualified Account', 'Inbound MQL-to-SQL Conversion', 'Pipeline Velocity', 'Marketing Sourced ARR'],
    bestPractices: [
      'Focus demand creation on buyer problem awareness before product solution introduction.',
      'Enrich leads synchronously in under 3 seconds before routing to sales representatives.',
      'Conduct bi-weekly sales-marketing qualification alignment reviews to refine scoring rules.'
    ]
  },
  {
    id: 'abm-playbook',
    title: 'Account-Based Marketing (ABM) Playbook',
    badge: 'Tier-1 Accounts',
    description: 'Precision engagement orchestration for strategic target accounts, unifying bespoke account research, personalized digital experiences, and coordinated sales touches.',
    targetAudience: 'ABM Program Leads, Enterprise Marketing, Strategic Account Directors',
    coreStages: [
      '1. Target Account Selection: Revenue potential and propensity scoring',
      '2. Buying Committee Mapping: Identifying 6–10 key committee members',
      '3. Account Intelligence Gathering: Pain points, current tech stack, executive goals',
      '4. Bespoke Content & Personalized Engagement: 1:1 tailored microsites and executive briefs',
      '5. Sales & Marketing Coordinated Outreach: Synchronized ads and sales touches',
      '6. Account Stage Progression: Measuring engagement depth and buying intent'
    ],
    operationalInputs: ['Named Account Lists', 'Buying Committee Personas', 'Account-Specific Pain Briefs', 'Dedicated Landing Pages'],
    expectedOutputs: ['Account Penetration Scorecards', 'Executive Relationship Meetings', 'High-ACV Enterprise Pipeline'],
    kpis: ['Target Account Engagement Rate', 'Committee Coverage Ratio', 'Average Deal Size', 'Pipeline Win Rate'],
    bestPractices: [
      'Cap 1:1 ABM account tiering to realistic sales rep capacity (max 20 accounts per AE).',
      'Provide bespoke value propositions tailored to the specific industry challenges of each account.',
      'Track committee-level engagement rather than isolated individual email clicks.'
    ]
  },
  {
    id: 'revops-playbook',
    title: 'Revenue Operations Playbook',
    badge: 'Operations & Data',
    description: 'The definitive operating model for cross-functional RevOps governance: CRM hygiene, stage definitions, pipeline velocity telemetry, forecasting, and tech stack management.',
    targetAudience: 'VP of RevOps, Sales Operations Managers, Chief Revenue Officers',
    coreStages: [
      '1. CRM Architecture & Process Management: Standardized stages and required fields',
      '2. Pipeline Governance: Mandatory stage-gate entrance and exit criteria',
      '3. Continuous Data Hygiene: Deduplication, enrichment, and contact verification',
      '4. Rigorous Forecasting Cadence: Weekly rollups and mathematical slippage models',
      '5. Executive Telemetry Reporting: Board-ready dashboard analytics',
      '6. Continuous Process Optimization: SLA monitoring and bottleneck remediation'
    ],
    operationalInputs: ['CRM Data Schemas', 'Stage-Gate Validation Rules', 'Historical Win/Loss Data', 'Forecast Submission Schedules'],
    expectedOutputs: ['Standardized Revenue Operating Rhythm', 'Audited Forecast Models', 'Automated Exception Alerts'],
    kpis: ['Forecast Variance (<5%)', 'Pipeline Velocity Index', 'Data Hygiene Completeness Score', 'Rep Administrative Overhead (<20%)'],
    bestPractices: [
      'Automate CRM activity logging to minimize rep data entry burden.',
      'Enforce mandatory exit criteria before opportunities can advance to proposal stages.',
      'Establish single definitions for key metrics across marketing, sales, and customer success.'
    ]
  },
  {
    id: 'customer-expansion-playbook',
    title: 'Customer Expansion Playbook',
    badge: 'Net Revenue Retention',
    description: 'Structured methodologies to maximize Net Revenue Retention (NRR) through telemetry-driven customer health scoring, proactive renewal cycles, cross-sell mapping, and upselling.',
    targetAudience: 'Customer Success Managers, Account Managers, VP of Customer Experience',
    coreStages: [
      '1. Continuous Customer Health Assessment: Product telemetry and sentiment monitoring',
      '2. 90-Day Proactive Renewal Planning: Commercial terms and expansion readiness review',
      '3. Cross-Sell Opportunity Discovery: White-space capability mapping across business units',
      '4. Upselling & Tier Migration: Utilization threshold alerts triggering contract expansion',
      '5. Churn Risk Interception: Root-cause remediation workflows for red accounts',
      '6. Expansion Revenue Tracking & Value Realization Reviews'
    ],
    operationalInputs: ['Product Usage Telemetry', 'Contract Expiration Dates', 'Customer Health Scorecards', 'Support Ticket Trends'],
    expectedOutputs: ['Verified Executive Business Reviews (QBRs)', 'Expansion Proposals', 'Clean Contract Renewals'],
    kpis: ['Net Revenue Retention (NRR)', 'Gross Revenue Retention (GRR)', 'Expansion ARR Percentage', 'Customer Churn Rate'],
    bestPractices: [
      'Initiate renewal conversations at least 90 days prior to contract expiration.',
      'Deliver documented Return on Investment reports before presenting expansion proposals.',
      'Deploy automated usage alerts when accounts hit 85% of purchased license capacity.'
    ]
  },
  {
    id: 'ai-native-sales-playbook',
    title: 'AI-Native Sales Playbook',
    badge: 'Cognitive Execution',
    description: 'Operational blueprint for integrating autonomous AI sales agents, automated research dossiers, dynamic messaging, and next-best-action guidance into human selling workflows.',
    targetAudience: 'CROs, Sales Modernization Leaders, Forward-Deployed Sales Engineers',
    coreStages: [
      '1. AI-Assisted Account Research: Autonomous pre-call dossier generation and pain extraction',
      '2. Predictive Lead Scoring: Multi-variable behavioral and firmographic propensity weighting',
      '3. Automated Prospecting & Draft Generation: Context-aware personalized outreach',
      '4. In-Flight Sales Engagement Automation: Real-time call sentiment and objection detection',
      '5. Opportunity Intelligence: Automated deal health risk scoring and decay detection',
      '6. Next-Best-Action Recommendations: Algorithmic nudges guiding rep daily priorities'
    ],
    operationalInputs: ['CRM Opportunity Logs', 'Transcribed Call Audio', 'Account Intent Feeds', 'AI Guardrail Configurations'],
    expectedOutputs: ['Automated Executive Briefings', 'AI-Generated Opportunity Health Scores', 'Dynamic Follow-Up Drafts'],
    kpis: ['Rep Selling Time Percentage', 'Discovery Call Conversion Rate', 'Opportunity Decay Reduction', 'Quota Attainment Rate'],
    bestPractices: [
      'Maintain strict Human-in-the-Loop review for all external enterprise communications.',
      'Ground AI agent reasoning in verified enterprise collateral and price books.',
      'Review agent performance telemetry weekly to calibrate prompt templates and tool access.'
    ]
  },
  {
    id: 'global-market-expansion-playbook',
    title: 'Global Market Expansion Playbook',
    badge: 'International Growth',
    description: 'Strategic and operational execution guide for entering new geographic regions: market selection, regulatory review, local partner ecosystems, and cross-border commercial execution.',
    targetAudience: 'Chief Growth Officers, International Expansion Directors, Commercial VPs',
    coreStages: [
      '1. Market Selection & Prioritization: TAM, local competition, and economic readiness',
      '2. Regional Opportunity Assessment: Customer willingness to pay and buying behaviors',
      '3. Market Entry Planning: Direct sales vs local reseller or joint venture models',
      '4. Strategic Partner Identification: Sourcing and onboarding local distribution partners',
      '5. International Demand Generation: Culturally localized messaging and campaigns',
      '6. Cross-Border Governance & Expansion Performance Monitoring'
    ],
    operationalInputs: ['Regional Market Economic Data', 'Local Regulatory Standards', 'Partner Ecosystem Lists', 'Currency & Tax Rules'],
    expectedOutputs: ['Market Entry Roadmap', 'Partner Distribution Agreements', 'Regional Revenue Projections'],
    kpis: ['Time-to-First Regional Revenue', 'Partner Sourced Pipeline', 'Regional Market Share', 'International Gross Margins'],
    bestPractices: [
      'Validate local data sovereignty and commercial regulations prior to launching sales campaigns.',
      'Partner with established regional distributors to accelerate trust and enterprise access.',
      'Localize marketing collateral to reflect regional terminology, business etiquette, and case studies.'
    ]
  }
];

// ── 02. ASSESSMENT TEMPLATES DATA ──
export const ASSESSMENT_RESOURCES: AssessmentResource[] = [
  {
    id: 'revenue-performance-assessment',
    title: 'Revenue Performance Assessment',
    badge: 'Growth Diagnostics',
    description: 'A multi-dimensional diagnostic assessing pipeline velocity, win-rate consistency, deal cycle compression, and forecasting accuracy to uncover revenue generation bottlenecks.',
    diagnosticFocus: 'Top-line predictability, stage conversion efficiency, and pipeline coverage ratios.',
    evaluationAreas: ['Pipeline Velocity', 'Win-Loss Consistency', 'Sales Cycle Duration', 'Forecasting Accuracy', 'Quota Distribution'],
    diagnosticQuestions: [
      {
        question: 'How predictable is your quarterly revenue forecasting against final closed ARR?',
        options: [
          { text: 'Quarterly variance is greater than 25%; frequently missing targets', score: 1 },
          { text: 'Variance fluctuates between 15–25%; manual last-minute adjustments required', score: 2 },
          { text: 'Variance is 8–15%; consistent process but relies on rep intuition', score: 3 },
          { text: 'Variance is less than 5%; deterministic telemetry-driven pipeline forecasting', score: 4 }
        ]
      },
      {
        question: 'What is your average enterprise sales cycle duration compared to industry benchmarks?',
        options: [
          { text: 'Longer than 12 months with frequent deal stalling in middle stages', score: 1 },
          { text: '9 to 12 months with unpredictable procurement and legal delays', score: 2 },
          { text: '6 to 9 months with structured qualification and milestone tracking', score: 3 },
          { text: 'Under 6 months with verified Mutual Action Plans and executive alignment', score: 4 }
        ]
      },
      {
        question: 'How is sales quota attainment distributed across the commercial team?',
        options: [
          { text: 'Less than 30% of reps hit quota; heavily dependent on 1-2 star performers', score: 1 },
          { text: '30% to 50% hit quota; inconsistent execution across territories', score: 2 },
          { text: '50% to 75% hit quota; repeatable playbook supported by ongoing coaching', score: 3 },
          { text: 'Over 80% hit quota; systematic process-driven revenue execution engine', score: 4 }
        ]
      }
    ],
    scoringRubric: [
      { range: '3–5 points', interpretation: 'Severe Revenue Leakage: Unpredictable revenue engine with significant pipeline stalls.', priorityAction: 'Implement structured qualification stage-gates and pipeline audit immediately.' },
      { range: '6–8 points', interpretation: 'Developing Revenue Operations: Inconsistent performance across reps and stages.', priorityAction: 'Standardize sales playbooks and introduce weekly deal inspection cadences.' },
      { range: '9–11 points', interpretation: 'Mature Revenue Engine: Solid execution with opportunities to accelerate cycle velocity.', priorityAction: 'Deploy AI sales assistance to compress cycle duration and automate data hygiene.' },
      { range: '12 points', interpretation: 'World-Class Predictive Performance: Deterministic pipeline and forecasting.', priorityAction: 'Focus on expansion optimization and international market scaling.' }
    ],
    outputDeliverable: 'Executive Revenue Diagnostic Radar with gap remediation priorities.'
  },
  {
    id: 'sales-process-assessment',
    title: 'Sales Process Assessment',
    badge: 'Execution Hygiene',
    description: 'Evaluates the formalization, adherence, and effectiveness of your sales methodology across prospecting, discovery, demo, negotiation, and handover.',
    diagnosticFocus: 'Sales methodology adherence (MEDDPICC/BANT), stage definitions, and rep execution discipline.',
    evaluationAreas: ['Methodology Formalization', 'Discovery Rigor', 'Value Proposal Quality', 'Objection Handling', 'Stage-Gate Governance'],
    diagnosticQuestions: [
      {
        question: 'How formalized is your organization’s enterprise sales methodology?',
        options: [
          { text: 'No formal methodology; reps use ad-hoc individual selling styles', score: 1 },
          { text: 'Methodology exists in documents but is rarely inspected or enforced', score: 2 },
          { text: 'Structured methodology (e.g. MEDDPICC) enforced at major deal gates', score: 3 },
          { text: 'Fully integrated methodology with automated CRM validation rules', score: 4 }
        ]
      },
      {
        question: 'How rigorously are customer economic pain points and quantifiable value identified in discovery?',
        options: [
          { text: 'Discovery focuses purely on product features and capabilities', score: 1 },
          { text: 'High-level pain points discussed but rarely quantified in financial terms', score: 2 },
          { text: 'CFO-ready business cases built for 50%+ of qualified enterprise pursuits', score: 3 },
          { text: 'Every enterprise deal requires customer-validated economic model before proposal', score: 4 }
        ]
      }
    ],
    scoringRubric: [
      { range: '2–4 points', interpretation: 'Fragmented Sales Process: High deal slippage and discounting vulnerability.', priorityAction: 'Document and train team on standardized stage-gate qualification criteria.' },
      { range: '5–6 points', interpretation: 'Moderate Discipline: Good foundation but lacks systematic executive validation.', priorityAction: 'Implement Mutual Action Plans and economic value justification templates.' },
      { range: '7–8 points', interpretation: 'High-Performance Process: Rigorous qualification and deal governance.', priorityAction: 'Automate administrative verification to maximize rep selling time.' }
    ],
    outputDeliverable: 'Sales Process Maturity Heatmap and Stage-Gate Optimization Guide.'
  },
  {
    id: 'marketing-effectiveness-assessment',
    title: 'Marketing Effectiveness Assessment',
    badge: 'Demand Quality',
    description: 'Diagnoses demand generation efficiency, content engagement, lead scoring accuracy, and commercial alignment between marketing pipeline and sales acceptance.',
    diagnosticFocus: 'Inbound CAC, MQL-to-SQL conversion velocity, and attributable pipeline generation.',
    evaluationAreas: ['Demand Capture', 'Lead Quality', 'Sales-Marketing SLA', 'Content Attribution', 'CAC Efficiency'],
    diagnosticQuestions: [
      {
        question: 'What percentage of marketing-generated leads are accepted and actively pursued by sales?',
        options: [
          { text: 'Under 20%; sales views marketing leads as unqualified tire-kickers', score: 1 },
          { text: '20% to 45%; inconsistent quality requiring significant manual sorting', score: 2 },
          { text: '45% to 70%; agreed SLA criteria with regular joint qualification reviews', score: 3 },
          { text: 'Over 75%; intent-enriched accounts immediately engaged via automated cadences', score: 4 }
        ]
      }
    ],
    scoringRubric: [
      { range: '1 point', interpretation: 'Sales-Marketing Disconnect: High marketing spend waste with minimal sales trust.', priorityAction: 'Establish explicit shared Service Level Agreement (SLA) on lead qualification criteria.' },
      { range: '2–3 points', interpretation: 'Functional Collaboration: Acceptable pipeline volume with qualification gaps.', priorityAction: 'Introduce intent-signal scoring and firmographic enrichment before routing.' },
      { range: '4 points', interpretation: 'Unified Commercial Engine: Seamless lead-to-opportunity handoff.', priorityAction: 'Scale multi-touch attribution and optimize account-based marketing programs.' }
    ],
    outputDeliverable: 'Marketing Demand Architecture Audit and Attribution Scorecard.'
  },
  {
    id: 'crm-data-quality-assessment',
    title: 'CRM Data Quality Assessment',
    badge: 'Data Hygiene',
    description: 'Audits contact record completeness, duplicate frequencies, stale opportunity records, and CRM user adoption across the commercial organization.',
    diagnosticFocus: 'Database hygiene, enrichment coverage, duplicate rates, and field completion accuracy.',
    evaluationAreas: ['Contact Completeness', 'Duplicate Rate', 'Activity Logging Adherence', 'Opportunity Freshness', 'System Adoption'],
    diagnosticQuestions: [
      {
        question: 'What is the state of contact and account data hygiene inside your enterprise CRM?',
        options: [
          { text: 'Severe data rot; 30%+ duplicates, missing emails, outdated titles', score: 1 },
          { text: 'Moderate hygiene; periodic manual cleanups but data rapidly degrades', score: 2 },
          { text: 'Automated deduplication and periodic third-party enrichment in place', score: 3 },
          { text: 'Continuous real-time enrichment, automated zero-touch activity logging, <1% duplicates', score: 4 }
        ]
      }
    ],
    scoringRubric: [
      { range: '1 point', interpretation: 'Critical Data Debt: Distorted reporting, rep administrative friction, and lost outreach.', priorityAction: 'Deploy automated CRM deduplication and continuous firmographic enrichment.' },
      { range: '2–3 points', interpretation: 'Manageable Data Hygiene: Useful for reporting but requires regular maintenance.', priorityAction: 'Automate calendar and email activity capture into CRM records.' },
      { range: '4 points', interpretation: 'Enterprise Clean Data: Reliable operational single source of truth.', priorityAction: 'Leverage clean data to train predictive scoring and AI agent workflows.' }
    ],
    outputDeliverable: 'CRM Data Integrity Audit Report with immediate hygiene remediation rules.'
  },
  {
    id: 'revops-assessment',
    title: 'Revenue Operations Assessment',
    badge: 'Operations Maturity',
    description: 'Evaluates RevOps alignment, tech stack consolidation, workflow automation, and cross-functional reporting consistency across sales, marketing, and CS.',
    diagnosticFocus: 'Tool redundancy, process handoffs, reporting single source of truth, and operational bottlenecks.',
    evaluationAreas: ['Tool Consolidation', 'Handoff Efficiency', 'Reporting Consistency', 'Tech Stack Integration', 'SLA Governance'],
    diagnosticQuestions: [
      {
        question: 'How consolidated and integrated is your commercial revenue technology stack?',
        options: [
          { text: 'Heavily fragmented; 20+ disconnected tools with manual spreadsheets bridging gaps', score: 1 },
          { text: 'Core CRM connected but point solutions operate in silos with data lag', score: 2 },
          { text: 'Integrated stack with unified data warehouse and common reporting dashboards', score: 3 },
          { text: 'Streamlined governed revenue architecture with event-driven automated workflows', score: 4 }
        ]
      }
    ],
    scoringRubric: [
      { range: '1 point', interpretation: 'Operational Drag: High software licensing waste and fragmented reporting.', priorityAction: 'Perform tech stack audit to eliminate redundant seat licenses and unify data.' },
      { range: '2–3 points', interpretation: 'Functional Integration: Solid infrastructure with manual bridge points.', priorityAction: 'Implement bi-directional webhooks and automated workflow state machines.' },
      { range: '4 points', interpretation: 'Autonomous RevOps Architecture: High operational leverage and speed.', priorityAction: 'Deploy cognitive AI agents to handle routine administrative workflows.' }
    ],
    outputDeliverable: 'Enterprise RevOps Capability Diagnostic and Stack Rationalization Map.'
  },
  {
    id: 'ai-readiness-assessment',
    title: 'AI Readiness Assessment',
    badge: 'Cognitive Readiness',
    description: 'Evaluates organizational readiness to deploy autonomous AI agents, LLM-driven research, and predictive intelligence across the revenue engine.',
    diagnosticFocus: 'Data cleanliness, process repeatability, security and governance guardrails, and workforce AI literacy.',
    evaluationAreas: ['Data Readiness', 'Process Suitability', 'Security & Compliance', 'Human-in-the-Loop Controls', 'Tool Integration'],
    diagnosticQuestions: [
      {
        question: 'Does your organization possess structured, clean data and clear governance for AI model ingestion?',
        options: [
          { text: 'Data is unorganized; no governance policies or security boundaries established', score: 1 },
          { text: 'Ad-hoc experimentation with public AI tools without standardized security rules', score: 2 },
          { text: 'Clear enterprise AI acceptable-use policy and sanitized internal datasets', score: 3 },
          { text: 'Enterprise-grade zero-retention VPC architecture with granular RBAC and audit logs', score: 4 }
        ]
      }
    ],
    scoringRubric: [
      { range: '1 point', interpretation: 'Unprepared for AI: High security and hallucination risk without foundation.', priorityAction: 'Establish AI usage governance guidelines and clean CRM data before deploying agents.' },
      { range: '2–3 points', interpretation: 'Emerging Readiness: Suitable for assistive AI (copilots and research briefs).', priorityAction: 'Implement Human-in-the-Loop review gates and test narrow automated use cases.' },
      { range: '4 points', interpretation: 'Enterprise AI-Native: Ready for autonomous multi-agent revenue execution.', priorityAction: 'Deploy autonomous agent swarms for inbound lead routing and intent prospecting.' }
    ],
    outputDeliverable: 'Enterprise AI Adoption Readiness Blueprint & Governance Framework.'
  },
  {
    id: 'customer-retention-assessment',
    title: 'Customer Retention Assessment',
    badge: 'Churn Prevention',
    description: 'Identifies customer churn vulnerabilities, telemetry blind spots, onboarding handoff latency, and Net Revenue Retention expansion potential.',
    diagnosticFocus: 'Early warning churn indicators, customer product health metrics, and renewal governance.',
    evaluationAreas: ['Product Telemetry Visibility', 'Onboarding Speed', 'Account Health Scoring', 'Proactive Renewal Cadence', 'NRR Tracking'],
    diagnosticQuestions: [
      {
        question: 'How early does your organization detect that a customer is at risk of churning?',
        options: [
          { text: 'Only when the customer formally requests cancellation or contract termination', score: 1 },
          { text: '30 days before renewal based on CSM subjective feedback', score: 2 },
          { text: '60–90 days prior based on manual health scoring spreadsheets', score: 3 },
          { text: 'Real-time telemetry detects usage drops, sentiment changes, or sponsor departure instantly', score: 4 }
        ]
      }
    ],
    scoringRubric: [
      { range: '1 point', interpretation: 'Reactive Churn Risk: Constant revenue leakage that threatens growth.', priorityAction: 'Implement basic product usage tracking and 90-day renewal alerts.' },
      { range: '2–3 points', interpretation: 'Proactive Customer Success: Good retention focus with manual monitoring.', priorityAction: 'Automate customer health scores and alert triggers for account decay.' },
      { range: '4 points', interpretation: 'Expansion-Driven Retention: Predictable compounding Net Revenue Retention.', priorityAction: 'Deploy automated expansion playbooks for accounts exceeding usage thresholds.' }
    ],
    outputDeliverable: 'Customer Retention Risk Assessment & NRR Compounding Roadmap.'
  },
  {
    id: 'global-expansion-assessment',
    title: 'Global Expansion Readiness Assessment',
    badge: 'Cross-Border',
    description: 'Evaluates organizational readiness to enter foreign markets: international product-market fit, compliance/tax readiness, channel partner ecosystems, and localized demand generation.',
    diagnosticFocus: 'TAM sizing, regulatory compliance, localized GTM capability, and operational scalability.',
    evaluationAreas: ['Market TAM Validation', 'Regulatory Compliance', 'Partner Ecosystem Readiness', 'Currency & Commercial Terms', 'Support Operations'],
    diagnosticQuestions: [
      {
        question: 'How developed is your cross-border commercial and regulatory infrastructure?',
        options: [
          { text: 'Domestic only; no international compliance, tax, or legal frameworks ready', score: 1 },
          { text: 'Ad-hoc inbound sales to international buyers without localized infrastructure', score: 2 },
          { text: 'Localized legal terms, currency handling, and initial regional distributor discussions', score: 3 },
          { text: 'Dedicated regional GTM architecture with established partner networks and local SLAs', score: 4 }
        ]
      }
    ],
    scoringRubric: [
      { range: '1 point', interpretation: 'High Expansion Risk: Premature international launch could drain resources.', priorityAction: 'Conduct thorough market TAM and regulatory compliance review prior to investment.' },
      { range: '2–3 points', interpretation: 'Viable Expansion Candidate: Strong domestic core ready for selective entry.', priorityAction: 'Select single target country and recruit established regional distribution partner.' },
      { range: '4 points', interpretation: 'Global Revenue Engine: Scalable cross-border operating infrastructure.', priorityAction: 'Expand regional partner networks and automate localized demand generation.' }
    ],
    outputDeliverable: 'Global Market Expansion Feasibility Matrix & Entry Plan.'
  }
];

// ── 03. MATURITY MODELS DATA ──
export const MATURITY_MODEL_RESOURCES: MaturityModelResource[] = [
  {
    id: 'sales-maturity-model',
    title: 'Enterprise Sales Maturity Model',
    badge: 'Sales Capabilities',
    description: 'A 5-level progression matrix evaluating commercial sales organizations from ad-hoc reactive selling to predictive, autonomous AI-native revenue execution.',
    dimensions: ['Process Discipline', 'Methodology Adherence', 'Technology Utilization', 'Forecasting Rigor', 'Coaching & Governance'],
    levels: [
      {
        level: 1,
        name: 'Level 1 — Initial',
        characteristics: ['Ad-hoc individual sales tactics', 'Unpredictable deal progressions', 'Forecasting based on rep gut-feel', 'Fragmented CRM usage'],
        processState: 'Unstructured and reactive',
        automationLevel: 'Manual execution; zero automation',
        dataMaturity: 'Incomplete and siloed data',
        recommendedActions: ['Define standard deal stages in CRM', 'Establish basic qualification checklist (BANT)', 'Mandate CRM activity logging']
      },
      {
        level: 2,
        name: 'Level 2 — Developing',
        characteristics: ['Documented sales steps', 'Initial adoption of sales cadencing tools', 'Basic pipeline tracking in CRM', 'Occasional deal slippage'],
        processState: 'Documented but inconsistently applied',
        automationLevel: 'Basic email sequences and dialers',
        dataMaturity: 'CRM populated but lacks enrichment',
        recommendedActions: ['Implement formal methodology (MEDDPICC)', 'Conduct weekly pipeline inspection reviews', 'Define sales-to-customer success handoffs']
      },
      {
        level: 3,
        name: 'Level 3 — Defined',
        characteristics: ['Standardized sales stage-gates', 'Consistent qualification criteria enforced', 'Regular forecasting cadence with historical baselines', 'Structured onboarding'],
        processState: 'Standardized across entire sales organization',
        automationLevel: 'Automated lead routing and task reminders',
        dataMaturity: 'Clean data with third-party firmographic enrichment',
        recommendedActions: ['Introduce Mutual Action Plans on enterprise deals', 'Build CFO-ready business case models', 'Track rep stage velocity telemetry']
      },
      {
        level: 4,
        name: 'Level 4 — Optimized',
        characteristics: ['Continuous pipeline velocity monitoring', 'Data-driven deal coaching', 'Sub-5% forecast variance', 'Automated CPQ and discount governance'],
        processState: 'Continuously optimized via empirical metrics',
        automationLevel: 'Orchestrated workflows and stage-gate automation',
        dataMaturity: 'Unified data warehouse with real-time dashboards',
        recommendedActions: ['Deploy AI research assistants for pre-call dossiers', 'Implement predictive opportunity decay alerts', 'Automate proposal generation']
      },
      {
        level: 5,
        name: 'Level 5 — AI-Native',
        characteristics: ['Predictive intelligence guides daily rep actions', 'Autonomous AI agents execute routine prospecting', 'Continuous Bayesian win-probability scoring', 'Self-optimizing sales cadences'],
        processState: 'Autonomous, self-learning revenue operating system',
        automationLevel: 'Multi-agent orchestration under human governance',
        dataMaturity: 'Comprehensive real-time telemetry and predictive models',
        recommendedActions: ['Scale autonomous agent swarms across new territories', 'Refine AI guardrails and ethical governance', 'Expand cross-border commercial telemetry']
      }
    ],
    evaluationGuidance: 'Audit at least 50 historical enterprise opportunities to assign your organization’s true operational maturity tier.'
  },
  {
    id: 'marketing-maturity-model',
    title: 'Marketing & Demand Maturity Model',
    badge: 'Marketing Capabilities',
    description: 'Progression matrix from disconnected vanity-metric campaigns to intent-driven, pipeline-accountable demand engineering.',
    dimensions: ['Audience Targeting', 'Content Strategy', 'Attribution Rigor', 'Sales Alignment', 'MarTech Integration'],
    levels: [
      {
        level: 1,
        name: 'Level 1 — Initial',
        characteristics: ['Focus on clicks, impressions, and vanity metrics', 'Generic mass-blast email campaigns', 'Zero alignment with sales team needs'],
        processState: 'Ad-hoc campaign production',
        automationLevel: 'Manual batch email sending',
        dataMaturity: 'Isolated marketing database with high bounce rates',
        recommendedActions: ['Establish shared lead qualification definition with sales', 'Clean database and remove unengaged contacts']
      },
      {
        level: 2,
        name: 'Level 2 — Developing',
        characteristics: ['Basic persona segmentation', 'Initial gated content assets', 'MQL lead scoring rules based on page views'],
        processState: 'Repeatable campaign schedules',
        automationLevel: 'Basic marketing automation drip campaigns',
        dataMaturity: 'Marketing automation synced to CRM',
        recommendedActions: ['Implement multi-touch attribution', 'Align marketing content with specific buyer journey stages']
      },
      {
        level: 3,
        name: 'Level 3 — Defined',
        characteristics: ['Formally agreed Sales-Marketing SLA', 'Account-Based Marketing targeting Tier-1 lists', 'Attributed pipeline targets for marketing'],
        processState: 'Standardized demand generation pipeline',
        automationLevel: 'Dynamic content personalization and web enrichment',
        dataMaturity: 'Unified customer journey tracking across channels',
        recommendedActions: ['Deploy buyer intent monitoring (Bombora/6sense)', 'Establish weekly lead quality review cadence']
      },
      {
        level: 4,
        name: 'Level 4 — Optimized',
        characteristics: ['Predictive account intent triggers', 'Full-funnel multi-touch revenue attribution', 'Omni-channel personalized buyer journeys'],
        processState: 'Optimized against CAC and pipeline velocity',
        automationLevel: 'Real-time enrichment and sub-60-second routing',
        dataMaturity: 'Customer Data Platform (CDP) single source of truth',
        recommendedActions: ['Integrate AI content synthesis for personalized ABM', 'Automate intent signal alerts directly into rep Slack']
      },
      {
        level: 5,
        name: 'Level 5 — AI-Native',
        characteristics: ['Autonomous campaign experimentation and bid allocation', 'Dynamic hyper-personalized microsite generation', 'Continuous predictive CAC optimization'],
        processState: 'Continuous autonomous demand generation loop',
        automationLevel: 'AI agents synthesize custom collateral per account',
        dataMaturity: 'Real-time behavioral telemetry driving AI actions',
        recommendedActions: ['Expand algorithmic content testing across international markets']
      }
    ],
    evaluationGuidance: 'Assess marketing contribution to closed-won revenue rather than top-of-funnel lead count.'
  },
  {
    id: 'revops-maturity-model',
    title: 'Revenue Operations Maturity Model',
    badge: 'RevOps Architecture',
    description: 'Progression matrix from isolated departmental spreadsheets to an enterprise-grade unified commercial revenue engine.',
    dimensions: ['Data Architecture', 'Pipeline Governance', 'Tech Stack Integration', 'Forecasting Precision', 'Process Automation'],
    levels: [
      {
        level: 1,
        name: 'Level 1 — Initial',
        characteristics: ['Sales, marketing, and CS operate in separate software silos', 'Conflicting metric definitions', 'Forecasts built in offline Excel files'],
        processState: 'Fragmented and siloed',
        automationLevel: 'None; manual copy-pasting between systems',
        dataMaturity: 'High duplicate rates and unvalidated data',
        recommendedActions: ['Establish common definitions for ARR, CAC, and Stage conversion', 'Appoint a dedicated RevOps owner']
      },
      {
        level: 2,
        name: 'Level 2 — Developing',
        characteristics: ['Basic CRM integrations configured', 'Initial shared reports created for executive meetings', 'Basic validation rules on required fields'],
        processState: 'Coordinated between sales and marketing',
        automationLevel: 'Native point-to-point software connectors',
        dataMaturity: 'Regular deduplication sprints performed',
        recommendedActions: ['Implement centralized RevOps ticketing queue', 'Document stage-gate entry and exit criteria']
      },
      {
        level: 3,
        name: 'Level 3 — Defined',
        characteristics: ['Single revenue operating model covering full customer lifecycle', 'Standardized commercial metrics and executive dashboards', 'Formal SLA tracking'],
        processState: 'Centralized RevOps organization',
        automationLevel: 'Automated data enrichment and handoff workflows',
        dataMaturity: 'Clean CRM data integrated with billing and support systems',
        recommendedActions: ['Consolidate overlapping RevTech tools to reduce spend', 'Build automated pipeline slippage risk alerts']
      },
      {
        level: 4,
        name: 'Level 4 — Optimized',
        characteristics: ['Unified enterprise data warehouse powering real-time telemetry', 'Deterministic forecast models with historical regression', 'Active tool rationalization'],
        processState: 'Empirically managed with sub-5% forecast variance',
        automationLevel: 'State machine orchestration of complex workflows',
        dataMaturity: 'Comprehensive data hygiene with automated audit triggers',
        recommendedActions: ['Deploy AI forecasting simulations (Monte Carlo)', 'Automate contract generation and approval flows']
      },
      {
        level: 5,
        name: 'Level 5 — AI-Native',
        characteristics: ['Self-healing data pipelines with autonomous anomaly detection', 'Predictive capacity planning and automated territory rebalancing', 'Cognitive agent orchestration'],
        processState: 'Continuous autonomous revenue operating system',
        automationLevel: 'Multi-agent cognitive orchestration with human oversight',
        dataMaturity: 'Enterprise revenue knowledge graph and vector store',
        recommendedActions: ['Deploy executive telemetry AI summarizing weekly revenue risks']
      }
    ],
    evaluationGuidance: 'Review tech stack redundancy and the percentage of rep working time spent on administrative tasks.'
  },
  {
    id: 'ai-sales-maturity-model',
    title: 'AI-Native Sales Maturity Model',
    badge: 'Autonomous Sales',
    description: 'Progression matrix from basic ad-hoc LLM text prompting to coordinated multi-agent cognitive revenue swarms.',
    dimensions: ['Use Case Scope', 'Data Integration', 'Agent Autonomy', 'Human Governance', 'Business Impact'],
    levels: [
      {
        level: 1,
        name: 'Level 1 — Initial',
        characteristics: ['Individual reps using free public LLMs to draft emails', 'Unvetted prompts without data privacy protection', 'No enterprise tracking'],
        processState: 'Ad-hoc individual experimentation',
        automationLevel: 'Zero integration; manual copy-pasting',
        dataMaturity: 'Public web data only; no internal CRM context',
        recommendedActions: ['Establish enterprise AI security and acceptable-use policies', 'Procure enterprise AI workspace with data privacy guarantees']
      },
      {
        level: 2,
        name: 'Level 2 — Developing',
        characteristics: ['Standardized prompt libraries for common sales tasks', 'AI call recording and automated meeting summaries', 'Basic rep training on AI tools'],
        processState: 'Coordinated assistive AI deployment',
        automationLevel: 'Automated transcription and summary generation',
        dataMaturity: 'Internal call transcripts accessible to AI engines',
        recommendedActions: ['Connect AI to CRM records for contextualized research', 'Implement Human-in-the-Loop review for outbound messaging']
      },
      {
        level: 3,
        name: 'Level 3 — Defined',
        characteristics: ['Automated pre-meeting executive research dossiers', 'Predictive lead scoring based on internal historical conversion data', 'Clear human oversight guidelines'],
        processState: 'Integrated copilot supporting core selling activities',
        automationLevel: 'Automated account briefing generated 1 hour before calls',
        dataMaturity: 'CRM data combined with firmographics in AI context',
        recommendedActions: ['Deploy autonomous inbound lead enrichment and routing', 'Introduce objection-handling battlecard auto-injection']
      },
      {
        level: 4,
        name: 'Level 4 — Optimized',
        characteristics: ['Autonomous AI SDR fleets handling initial outbound outreach', 'Real-time in-call objection assistance for account executives', 'Automated opportunity health risk scoring'],
        processState: 'Coordinated AI-human collaborative sales engine',
        automationLevel: 'Autonomous execution of routine repetitive prospecting',
        dataMaturity: 'Full commercial telemetry feeding predictive AI models',
        recommendedActions: ['Implement dynamic margin-aware CPQ generation', 'Establish continuous prompt calibration based on win-rate telemetry']
      },
      {
        level: 5,
        name: 'Level 5 — AI-Native',
        characteristics: ['Autonomous multi-agent swarms conducting research, outreach, and deal telemetry', 'Self-optimizing sales cadences', 'Zero administrative data entry for human reps'],
        processState: 'Fully autonomous cognitive sales acceleration layer',
        automationLevel: 'Multi-agent mesh collaborating across systems',
        dataMaturity: 'Enterprise revenue knowledge graph with vector retrieval',
        recommendedActions: ['Scale autonomous agent operations across international expansion markets']
      }
    ],
    evaluationGuidance: 'Ensure all AI deployment levels strictly adhere to enterprise data sovereignty and client confidentiality standards.'
  }
];

// ── 04. BUSINESS CASES DATA ──
export const BUSINESS_CASE_RESOURCES: BusinessCaseResource[] = [
  {
    id: 'ai-sales-transformation-case',
    title: 'AI Sales Transformation Business Case',
    badge: 'Cognitive Investment',
    description: 'Executive-ready justification template to secure board and CFO authorization for enterprise AI sales acceleration and autonomous agent deployments.',
    executiveSummary: 'This business case demonstrates how deploying an AI-native sales acceleration layer eliminates 65% of rep administrative overhead, accelerates enterprise deal velocity by 40%, and yields a payback period within 4.5 months.',
    businessProblem: 'Sales representatives currently spend less than 35% of their working hours on direct revenue-generating customer conversations due to manual account research, data entry, and fragmented prospecting.',
    proposedSolution: 'Deploy ProfitMachines AI Sales Acceleration platform featuring autonomous pre-call dossier generation, predictive lead prioritization, and automated CRM activity synchronization.',
    investmentCategories: ['Platform Software Licenses', 'Integration Engineering & Webhook Setup', 'Model Tuning & Grounding', 'Rep Enablement & Coaching'],
    expectedBenefits: ['+45% Increase in Rep Selling Capacity', '-40% Enterprise Sales Cycle Compression', '+28% Win Rate Improvement on Qualified Pipeline', '100% Complete and Accurate CRM Data'],
    keyRisks: ['Rep Adoption Inertia: Mitigated through change management and workflow incentives', 'Data Privacy Concerns: Mitigated via zero-retention private VPC architecture'],
    decisionGateways: ['CFO Financial ROI Validation', 'Infosec & SOC 2 Compliance Sign-off', 'Pilot Success Criteria Review (60 Days)'],
    measurementFramework: 'Track weekly active selling hours per rep, pipeline velocity index, and net new ARR generated vs baseline cohorts.'
  },
  {
    id: 'revops-transformation-case',
    title: 'Revenue Operations Transformation Business Case',
    badge: 'Operational Scale',
    description: 'C-suite justification framework for modernizing the RevOps architecture, consolidating redundant tooling, and establishing deterministic forecasting.',
    executiveSummary: 'Consolidate 14 fragmented commercial tools into an integrated RevOps architecture, reducing annual software licensing costs by $180,000 while compressing quarterly forecast variance to under 4%.',
    businessProblem: 'Fragmented data silos between marketing, sales, and customer success cause unpredictable board forecasts, duplicate outreach to accounts, and revenue leakage across contract handoffs.',
    proposedSolution: 'Establish a unified revenue operating model with standardized stage-gates, automated bidirectional sync, and an executive telemetry command center.',
    investmentCategories: ['RevOps Stack Consolidation', 'Unified Data Warehouse Integration', 'Stage-Gate Logic Implementation', 'Executive Telemetry Dashboards'],
    expectedBenefits: ['$180,000 Annual MarTech/SalesTech Savings', 'Forecast Variance Compressed from 24% to <4%', 'Zero Deal Handoff Latency to Customer Success', '+32% Faster Quote-to-Order Turnaround'],
    keyRisks: ['Temporary reporting disruption during migration: Mitigated through parallel run periods', 'Custom workflow dependencies: Handled by API middleware'],
    decisionGateways: ['Audit of redundant tool subscriptions', 'Architecture blueprint sign-off by CRO and CTO', 'Quarterly milestone review'],
    measurementFramework: 'Measure total cost of software ownership (TCO), forecast variance against actual closed ARR, and average quote-to-close duration.'
  },
  {
    id: 'demand-gen-investment-case',
    title: 'Demand Generation Investment Case',
    badge: 'Pipeline Growth',
    description: 'Strategic investment case justifying reallocation of marketing spend from low-intent paid ads into high-precision account-based demand engineering.',
    executiveSummary: 'Transition $40,000 monthly ad spend from generic paid channels into intent-driven Account-Based Marketing (ABM), doubling qualified enterprise sales pipeline while lowering blended CAC by 42%.',
    businessProblem: 'Current inbound marketing delivers high lead counts with abysmal sales acceptance (<15%), resulting in elevated Customer Acquisition Costs and low sales rep trust in marketing pipelines.',
    proposedSolution: 'Deploy high-intent demand capture targeting named ICP accounts exhibiting verified buying intent, combined with personalized 1:1 digital experiences.',
    investmentCategories: ['Intent Signal Telemetry Data Feeds', 'Bespoke Account Microsite Production', 'High-Value Thought Leadership Content', 'Sales Enablement Collateral'],
    expectedBenefits: ['+120% Increase in Sales-Accepted Pipeline (SAP)', '-42% Reduction in Blended Customer Acquisition Cost', '+35% Higher Average Contract Value (ACV)', 'Shortened Time-to-First-Meeting'],
    keyRisks: ['Longer gestation period for enterprise accounts: Balanced with mid-market capture waves', 'Content production bottlenecks: Solved with modular frameworks'],
    decisionGateways: ['Target account list validation with sales leadership', 'Initial 90-day pipeline sourcing audit', 'CAC payback review'],
    measurementFramework: 'Track Marketing Sourced Pipeline, MQL-to-SQL conversion rate, customer acquisition cost payback velocity, and win rates on target accounts.'
  },
  {
    id: 'crm-modernization-case',
    title: 'CRM Modernization Business Case',
    badge: 'Platform Modernization',
    description: 'Justifies data cleanup, workflow automation, and custom APEX/API integration to transform an enterprise CRM into a high-speed revenue engine.',
    executiveSummary: 'Remediate 40% duplicate data debt and implement real-time event-driven automation, recovering an estimated 8 hours per week per rep previously lost to manual data maintenance.',
    businessProblem: 'Years of unmanaged CRM customizations and poor data hygiene have created a system that sales reps actively avoid, leading to incomplete pipelines and zero leadership visibility.',
    proposedSolution: 'Execute a comprehensive CRM architecture overhaul: automated deduplication, real-time enrichment webhooks, and streamlined 4-click deal progression stages.',
    investmentCategories: ['Database Deduplication & Normalization', 'Third-Party Real-Time Enrichment API', 'Custom UI Simplification', 'Data Governance Rules'],
    expectedBenefits: ['8 Hours Reclaimed Weekly per Rep', '99.5% Complete Contact and Account Records', 'Sub-60 Second Inbound Lead Assignment', 'Accurate Historical Win/Loss Reporting'],
    keyRisks: ['Loss of historical data: Protected via immutable cold-storage backups', 'User resistance: Addressed through simplified UI and automated tasks'],
    decisionGateways: ['Data schema audit approval', 'Sandbox validation sign-off', 'User adoption rate milestone (95% at 30 days)'],
    measurementFramework: 'Track CRM daily active users, field completeness percentage, lead routing SLA compliance, and rep satisfaction scores.'
  },
  {
    id: 'customer-retention-case',
    title: 'Customer Retention & NRR Business Case',
    badge: 'Retention Economics',
    description: 'Financial justification model showing the compounding enterprise value of expanding Net Revenue Retention from 102% to 125% via telemetry-driven customer success.',
    executiveSummary: 'Investing $150,000 in proactive product telemetry and renewal governance prevents $1.2M in annual churn and unlocks $800,000 in net-new expansion revenue, lifting enterprise valuation.',
    businessProblem: 'Unchecked customer churn in mid-tier accounts offsets 45% of newly closed ARR, forcing the sales team to constantly replenish lost revenue rather than compounding growth.',
    proposedSolution: 'Deploy proactive account health scoring, early telemetry warning sentries for usage drops, and structured 90-day renewal playbooks.',
    investmentCategories: ['Product Usage Telemetry Integration', 'Customer Health Scoring Algorithm', 'Automated Churn Sentry Alerts', 'Expansion Playbook Enablement'],
    expectedBenefits: ['Churn Rate Cut from 14% to <5%', 'Net Revenue Retention Increased to 125%', '+$800,000 Annual Expansion ARR', 'Higher Enterprise Multiple on Predictable Recurring Revenue'],
    keyRisks: ['Product engineering bandwidth for telemetry hooks: Solved via pre-built SDKs', 'Customer resistance to upsells: Grounded in validated ROI reviews'],
    decisionGateways: ['Cohort churn analysis validation', 'Health scoring pilot review', '6-month NRR audit'],
    measurementFramework: 'Measure Gross Revenue Retention (GRR), Net Revenue Retention (NRR), Expansion ARR, and Net Promoter Score (NPS).'
  },
  {
    id: 'global-expansion-case',
    title: 'Global Expansion Business Case',
    badge: 'International TAM',
    description: 'Executive framework for justifying geographic commercial expansion into secondary international markets through strategic distribution partner models.',
    executiveSummary: 'Enter the European enterprise market via a hybrid distributor-direct model, establishing a $5M regional pipeline within 12 months at 60% lower overhead than direct hiring.',
    businessProblem: 'Domestic market penetration is approaching maturity; continuing growth targets require tapping global addressable markets without reckless capex burn.',
    proposedSolution: 'Leverage established regional distribution networks combined with localized digital demand generation to capture market share with minimal initial fixed overhead.',
    investmentCategories: ['Local Regulatory & Compliance Audits', 'Partner Enablement & Certification', 'Localized Collateral & Digital Campaigns', 'Regional Sales Leadership Hire'],
    expectedBenefits: ['Access to $250M New Addressable Market', '+$5M First-Year Regional Pipeline', 'Diversified Revenue Stream Shielded from Domestic Volatility', 'High-Margin Channel Scalability'],
    keyRisks: ['Currency fluctuation and local tax complexity: Managed via local legal counsel', 'Channel conflict: Prevented through clear territory rules'],
    decisionGateways: ['Market TAM and competitor density audit', 'Signing of initial anchor channel partner', 'First quarterly revenue gate'],
    measurementFramework: 'Track regional pipeline sourced, partner certification rate, time-to-first-contract, and international customer acquisition payback.'
  }
];

// ── 05. ROI MODELS DATA ──
export const ROI_MODEL_RESOURCES: RoiModelResource[] = [
  {
    id: 'ai-sales-automation-roi',
    title: 'AI Sales Automation ROI Model',
    badge: 'Automation Returns',
    description: 'Quantifies the net financial return and payback timeline of deploying AI-powered prospecting, pre-call research, and CRM data automation.',
    formula: 'ROI (%) = ((Financial Benefit − Total Investment) / Total Investment) × 100',
    variables: [
      { symbol: 'HoursSaved', label: 'Monthly Reclaimed Hours', meaning: 'Hours per rep reclaimed from manual admin and research' },
      { symbol: 'RepRate', label: 'Rep Hourly Cost', meaning: 'Blended loaded hourly compensation of sales representatives' },
      { symbol: 'CapacityLift', label: 'Incremental ARR Sourced', meaning: 'Additional closed revenue resulting from increased selling capacity' },
      { symbol: 'Capex', label: 'Initial Setup & Setup Fees', meaning: 'Platform setup, integration engineering, and model configuration' },
      { symbol: 'Opex', label: 'Annual Subscription Cost', meaning: 'Ongoing software licensing, hosting, and API compute fees' }
    ],
    businessInterpretation: 'Directly links hours reclaimed from non-selling activities to quantifiable rep selling capacity and incremental revenue contribution.',
    exampleCalculation: 'For a 20-rep team reclaiming 15 hrs/mo ($60/hr loaded) + sourcing $400k incremental ARR against $80k annual investment: Net Benefit = $400k + $216k - $80k = $536k; ROI = 670%.',
    limitations: 'Assumes reclaimed time is redirected into active customer engagement and pipeline generation activities.'
  },
  {
    id: 'cac-model',
    title: 'Customer Acquisition Cost (CAC) Model',
    badge: 'Acquisition Efficiency',
    description: 'Calculates the true all-inclusive cost of acquiring a single new enterprise customer across marketing, sales, and operational overhead.',
    formula: 'CAC = (Total Sales Costs + Total Marketing Costs + Tool Overhead) / Number of New Customers Acquired',
    variables: [
      { symbol: 'SalesCost', label: 'Total Sales Compensation & T&E', meaning: 'Base salaries, commissions, bonuses, and travel expenses of sales team' },
      { symbol: 'MktgCost', label: 'Total Marketing Spend', meaning: 'Paid advertising, agency fees, content production, events, and sponsorships' },
      { symbol: 'ToolOverhead', label: 'Commercial Software Licenses', meaning: 'Portion of CRM, enrichment, dialer, and marketing automation software allocated to acquisition' },
      { symbol: 'NewCust', label: 'New Customers Acquired', meaning: 'Count of unique paying customers added during the specific measurement period' }
    ],
    businessInterpretation: 'Essential baseline metric for evaluating unit economics; must be compared against Customer Lifetime Value to ensure sustainable growth.',
    exampleCalculation: 'Total quarterly sales and marketing expenses of $600,000 resulting in 30 new enterprise logos yields a blended CAC of $20,000 per customer.',
    limitations: 'Does not account for customer acquisition gestation latency in enterprise sales cycles spanning multiple quarters.'
  },
  {
    id: 'clv-model',
    title: 'Customer Lifetime Value (CLV) Model',
    badge: 'Unit Economics',
    description: 'Determines the total gross margin dollar value generated by an enterprise customer relationship throughout their expected tenure.',
    formula: 'CLV = (Average Annual Revenue per Customer × Gross Margin %) × (1 / Annual Churn Rate)',
    variables: [
      { symbol: 'ARPU', label: 'Average Revenue per Customer (ARR)', meaning: 'Mean annual contract value across the target customer segment' },
      { symbol: 'GrossMargin', label: 'Gross Margin Percentage', meaning: 'Revenue minus direct cost of goods/services sold, expressed as a decimal' },
      { symbol: 'ChurnRate', label: 'Annual Customer Churn Rate', meaning: 'Percentage of customer relationships terminating within a twelve-month cycle' }
    ],
    businessInterpretation: 'Defines the upper economic threshold for customer acquisition expenditure; a healthy enterprise SaaS model requires CLV:CAC ratio ≥ 3:1.',
    exampleCalculation: '$50,000 ARR at 80% gross margin with 10% annual churn yields an expected customer lifetime of 10 years and a CLV of $400,000.',
    limitations: 'Assumes static retention rates; does not model potential Net Revenue Retention expansion from upselling.'
  },
  {
    id: 'payback-period-model',
    title: 'CAC Payback Period Model',
    badge: 'Capital Velocity',
    description: 'Measures the exact number of months required for a newly acquired customer’s gross profit contribution to fully recover its acquisition cost.',
    formula: 'Payback Period (Months) = CAC / (Monthly Recurring Revenue × Gross Margin %)',
    variables: [
      { symbol: 'CAC', label: 'Customer Acquisition Cost', meaning: 'Total fully loaded cost to acquire the customer' },
      { symbol: 'MRR', label: 'Monthly Recurring Revenue', meaning: 'Monthly contract subscription value' },
      { symbol: 'GrossMargin', label: 'Gross Margin Percentage', meaning: 'Contribution margin percentage available to offset CAC' }
    ],
    businessInterpretation: 'Critical metric for cash flow resilience; enterprise organizations should target CAC payback under 12–15 months to support rapid scaling.',
    exampleCalculation: 'For CAC of $36,000, MRR of $3,500, and gross margin of 85%: Monthly Gross Margin = $2,975; Payback Period = 12.1 months.',
    limitations: 'Assumes customers maintain regular payment cadences and do not default during the initial contract year.'
  },
  {
    id: 'sales-productivity-roi',
    title: 'Sales Productivity ROI Model',
    badge: 'Capacity Expansion',
    description: 'Calculates the incremental revenue produced when operational improvements increase rep time in customer meetings by 10–25%.',
    formula: 'Incremental ARR = (Additional Selling Hours / Base Selling Hours) × Current Pipeline Velocity × Historical Win Rate',
    variables: [
      { symbol: 'AddHours', label: 'Additional Selling Hours', meaning: 'Hours shifted from administrative tasks to active prospect interactions' },
      { symbol: 'BaseHours', label: 'Baseline Selling Hours', meaning: 'Current historical hours allocated to direct customer engagement' },
      { symbol: 'Pipeline', label: 'Annual Pipeline Handled', meaning: 'Total dollar volume of qualified pipeline managed per representative' },
      { symbol: 'WinRate', label: 'Historical Win Rate', meaning: 'Percentage of pipeline dollars successfully converted to closed contracts' }
    ],
    businessInterpretation: 'Demonstrates that hiring more sales reps is rarely the most capital-efficient path to growth compared to expanding the selling capacity of existing talent.',
    exampleCalculation: 'Shifting rep selling time from 14 hrs/week to 21 hrs/week (+50%) on a team managing $20M in pipeline with a 25% win rate generates up to $2.5M in additional ARR.',
    limitations: 'Requires sufficient top-of-funnel inbound or outbound pipeline to fill the newly unlocked selling capacity.'
  },
  {
    id: 'customer-retention-roi',
    title: 'Customer Retention ROI Model',
    badge: 'Retention Yield',
    description: 'Models the compounded cash flow impact of reducing annual churn by 3–7 percentage points across multi-year recurring revenue cohorts.',
    formula: 'Retained Cash Benefit = Cumulative ARR × Churn Reduction Percentage × Average Gross Margin',
    variables: [
      { symbol: 'BaseARR', label: 'Total Starting ARR Base', meaning: 'Annual recurring revenue subjected to renewal during the period' },
      { symbol: 'DeltaChurn', label: 'Reduction in Churn Rate', meaning: 'Decrease in percentage points of customer churn' },
      { symbol: 'Margin', label: 'Gross Margin Percentage', meaning: 'Contribution margin percentage of retained revenue' },
      { symbol: 'ProgramCost', label: 'Customer Success Investment', meaning: 'Annual expenditure on CS tooling, health sentries, and team headcount' }
    ],
    businessInterpretation: 'Highlights the compounding value of retention: saving 5% of a $50M ARR base preserves $2.5M annually, cascading into multi-year enterprise value.',
    exampleCalculation: 'Reducing churn from 12% to 7% (5% delta) on a $30M base with 80% gross margin yields $1.2M in annual profit against a $200k CS investment (6x ROI).',
    limitations: 'Does not account for secondary benefits like customer advocacy, referrals, or price increase tolerances.'
  },
  {
    id: 'crm-optimization-roi',
    title: 'CRM Optimization ROI Model',
    badge: 'Efficiency Gain',
    description: 'Calculates operational savings from database deduplication, automated activity capture, and reduced license waste.',
    formula: 'Net Annual Benefit = (License Savings + Admin Labor Savings) − Optimization Implementation Cost',
    variables: [
      { symbol: 'LicensesCut', label: 'Inactive Seats Terminated', meaning: 'Annual cost of unassigned or duplicate software licenses eliminated' },
      { symbol: 'LaborSaved', label: 'Data Cleaning Hours Saved', meaning: 'Value of administrative hours previously expended manually reconciling dirty records' },
      { symbol: 'Cost', label: 'Implementation Capex', meaning: 'Cost of deduplication tools, API setup, and schema normalization' }
    ],
    businessInterpretation: 'Direct operational payback from cutting software bloat and eliminating manual spreadsheet reconciliation.',
    exampleCalculation: 'Terminating 30 unused seats ($4,500/mo) and saving 80 hrs/mo of RevOps time ($4,000/mo) creates $102k in annual savings against a $25k cleanup cost.',
    limitations: 'Requires strict enforcement of new data hygiene governance to prevent data rot from recurring.'
  },
  {
    id: 'revenue-transformation-roi',
    title: 'Full Revenue Transformation ROI Model',
    badge: 'Comprehensive ROI',
    description: 'An enterprise-wide financial model synthesizing demand generation lift, cycle compression, margin recovery, and retention expansion.',
    formula: 'Transformation ROI = ((Total Revenue Lift + Total Cost Savings − Total Program Investment) / Total Program Investment) × 100',
    variables: [
      { symbol: 'RevLift', label: 'Incremental Gross Profit', meaning: 'Gross margin generated from increased deal velocity and higher win rates' },
      { symbol: 'CostSavings', label: 'Operational Cost Reductions', meaning: 'Savings from tech stack consolidation and administrative automation' },
      { symbol: 'Investment', label: 'Total Transformation Capex & Opex', meaning: 'All consulting, software, integration, and training costs incurred' }
    ],
    businessInterpretation: 'The overarching executive justification metric for end-to-end commercial transformation engagements.',
    exampleCalculation: 'For an enterprise generating $3.2M incremental gross profit and $450k in cost savings against a $600k total transformation investment: Net Benefit = $3.05M; ROI = 508%.',
    limitations: 'Calculated over a multi-year horizon (typically 24–36 months) with phased milestone reviews.'
  }
];

// ── 06. CHECKLISTS DATA ──
export const CHECKLIST_RESOURCES: ChecklistResource[] = [
  {
    id: 'sales-qualification-checklist',
    title: 'Enterprise Sales Qualification Checklist',
    badge: 'Deal Hygiene',
    description: 'Critical milestone verification checklist enforcing MEDDPICC rigor before opportunities advance past initial discovery stages.',
    cadence: 'Per Qualified Enterprise Deal',
    stakeholders: ['Account Executive', 'Sales Director', 'Solutions Engineer'],
    items: [
      { id: 'q1', category: 'Metrics', label: 'Quantified Economic Pain Identified', detail: 'Specific customer financial loss, cost overrun, or missed revenue quantified in hard currency.' },
      { id: 'q2', category: 'Economic Buyer', label: 'Economic Buyer Directly Engaged', detail: 'Identified and scheduled meeting with the individual possessing discretionary budget authority.' },
      { id: 'q3', category: 'Decision Criteria', label: 'Decision Criteria Documented & Influenced', detail: 'Written agreement on technical, commercial, and operational requirements guiding selection.' },
      { id: 'q4', category: 'Decision Process', label: 'Formal Decision & Procurement Process Mapped', detail: 'Clear understanding of all approval stages, legal redlines, security reviews, and board sign-offs.' },
      { id: 'q5', category: 'Paper Process', label: 'Legal & Contract Process Timelines Established', detail: 'Identified who signs the contract, standard NDA/MSA review duration, and procurement gates.' },
      { id: 'q6', category: 'Identify Pain', label: 'Negative Business Consequence of Inaction Validated', detail: 'What happens to the customer’s business if this problem is not solved in the next 6 months?' },
      { id: 'q7', category: 'Champion', label: 'Internal Champion Identified & Tested', detail: 'Tested internal advocate who has access to the Economic Buyer and actively sells on our behalf.' },
      { id: 'q8', category: 'Competition', label: 'Competitive Landscape & Alternative Options Mapped', detail: 'Identified competing vendors, internal build alternatives, and "do-nothing" status quo risks.' }
    ],
    governanceNote: 'Completing this checklist provides operational deal guidance; it does not constitute a legal or contractual warranty.'
  },
  {
    id: 'crm-hygiene-checklist',
    title: 'Weekly CRM Pipeline Hygiene Checklist',
    badge: 'Pipeline Integrity',
    description: 'Weekly verification cadence for sales representatives and RevOps teams to eliminate stale deals, validate close dates, and maintain accurate forecast rollups.',
    cadence: 'Weekly (Every Friday by 4:00 PM)',
    stakeholders: ['Account Executives', 'Sales Managers', 'RevOps Analysts'],
    items: [
      { id: 'c1', category: 'Dates', label: 'All Close Dates Current and Realistic', detail: 'No past-due close dates; any deal moving out of month includes documented executive justification.' },
      { id: 'c2', category: 'Stages', label: 'Opportunity Stages Match Customer Reality', detail: 'Deals in Proposal Stage have validated Mutual Action Plans; no verbal promises in Commit.' },
      { id: 'c3', category: 'Next Steps', label: 'Concrete Next Activity & Date Scheduled', detail: 'Every active deal has a specific calendar date and agenda for the next scheduled customer touchpoint.' },
      { id: 'c4', category: 'Contacts', label: 'Multi-Threaded Contacts Logged in CRM', detail: 'Minimum 3 verified customer contacts attached to the opportunity record with title and email.' },
      { id: 'c5', category: 'Values', label: 'Contract Values Reflect Validated Scope', detail: 'ARR and one-time professional services fields populated with verified pricing estimates.' },
      { id: 'c6', category: 'Stale Deals', label: 'Dormant Opportunities Cleaned Out', detail: 'Deals without customer engagement in 30+ days moved to Closed-Lost or Nurture stage.' }
    ],
    governanceNote: 'Mandatory prerequisite for inclusion in weekly executive forecast consolidation.'
  },
  {
    id: 'pipeline-review-checklist',
    title: 'Quarterly Pipeline Review Checklist',
    badge: 'Executive Review',
    description: 'Executive governance framework for quarterly pipeline audit, assessing coverage multiples, stage slippage, and downside revenue risks.',
    cadence: 'Quarterly (Prior to Board Reporting)',
    stakeholders: ['Chief Revenue Officer', 'VP of Sales', 'VP of RevOps'],
    items: [
      { id: 'p1', category: 'Coverage', label: 'Pipeline Coverage Multiple ≥ 3.5x Quota', detail: 'Sufficient total qualified pipeline to achieve quarterly revenue targets at historical conversion rates.' },
      { id: 'p2', category: 'Slippage', label: 'Deal Slippage Risk Factors Audited', detail: 'Identified any enterprise deal pushed more than twice; adjusted probability weighting accordingly.' },
      { id: 'p3', category: 'Discounting', label: 'Margin Compliance & Discount Requests Reviewed', detail: 'All proposed pricing discounts verified against gross margin floor policies.' },
      { id: 'p4', category: 'Concentration', label: 'Single Deal Concentration Risk Evaluated', detail: 'No single customer represents more than 25% of total quarterly forecasted revenue.' }
    ],
    governanceNote: 'Used by executive leadership to establish formal board-level revenue guidance.'
  },
  {
    id: 'marketing-campaign-checklist',
    title: 'Enterprise Campaign Launch Checklist',
    badge: 'Campaign Governance',
    description: 'Pre-flight verification checklist for demand generation campaigns ensuring accurate tracking, brand governance, and sales enablement readiness.',
    cadence: 'Prior to Every Major Campaign Launch',
    stakeholders: ['Marketing Operations', 'Campaign Managers', 'SDR Leadership'],
    items: [
      { id: 'm1', category: 'Tracking', label: 'UTM Parameters & Conversion Pixels Tested', detail: 'End-to-end test submission verified in CRM and Google Analytics attribution dashboards.' },
      { id: 'm2', category: 'SDR Enablement', label: 'SDR Outreach Cadences & Battlecards Deployed', detail: 'Sales reps trained on campaign messaging, value props, and objection-handling scripts.' },
      { id: 'm3', category: 'Enrichment', label: 'Real-Time Lead Enrichment Webhooks Active', detail: 'Form submission instantly appends firmographic and technographic data before routing.' },
      { id: 'm4', category: 'Compliance', label: 'GDPR / CAN-SPAM / CCPA Compliance Verified', detail: 'Consent opt-in checkboxes and functional one-click unsubscribe links present on all touchpoints.' }
    ],
    governanceNote: 'Ensures marketing investments translate into measurable sales pipeline without compliance breaches.'
  },
  {
    id: 'ai-deployment-checklist',
    title: 'AI Agent Production Deployment Checklist',
    badge: 'AI Safety & Security',
    description: 'Enterprise governance checklist enforcing security boundaries, prompt testing, human oversight, and data sovereignty before releasing AI agents.',
    cadence: 'Prior to Releasing Any Automated AI Workflow',
    stakeholders: ['Chief Information Security Officer (CISO)', 'Lead AI Engineer', 'RevOps Director'],
    items: [
      { id: 'a1', category: 'Security', label: 'Zero-Retention API Agreements Confirmed', detail: 'Verified that LLM vendors do not retain customer data or train foundational models on internal inputs.' },
      { id: 'a2', category: 'Guardrails', label: 'Prompt Injection & Hallucination Guardrails Tested', detail: 'Adversarial red-teaming conducted to ensure agents cannot be tricked into unauthorized actions.' },
      { id: 'a3', category: 'Permissions', label: 'Least-Privilege Tool Execution Sandboxing', detail: 'AI agents granted read-only access where appropriate; zero direct access to delete production records.' },
      { id: 'a4', category: 'Human Oversight', label: 'Human Approval Gateways Configured', detail: 'Mandatory 1-click human confirmation before external communications or price quotes are dispatched.' },
      { id: 'a5', category: 'Auditability', label: 'Immutable Audit Logging Active', detail: 'Every agent prompt, reasoning trace, tool execution, and output logged with timestamp and user ID.' }
    ],
    governanceNote: 'Mandatory compliance checklist aligned with SOC 2 Type II and enterprise data governance standards.'
  },
  {
    id: 'customer-onboarding-checklist',
    title: 'Enterprise Customer Onboarding Checklist',
    badge: 'Customer Success',
    description: 'Post-sale handover checklist ensuring zero knowledge loss between sales and customer success, accelerating Time-to-First-Value.',
    cadence: 'Within 48 Hours of Contract Execution',
    stakeholders: ['Account Executive', 'Assigned CSM', 'Implementation Engineer'],
    items: [
      { id: 'o1', category: 'Handover', label: 'Formal Sales-to-CS Briefing Conducted', detail: 'Reviewed customer commercial objectives, key stakeholders, executive sponsor goals, and contract terms.' },
      { id: 'o2', category: 'Milestones', label: '90-Day Implementation Mutual Plan Agreed', detail: 'Agreed on technical integration milestones, required customer IT resources, and target go-live date.' },
      { id: 'o3', category: 'Access', label: 'Customer Portal & Tenant Provisioned', detail: 'Tenant environment spun up with appropriate security certificates, SSO configured, and initial users invited.' },
      { id: 'o4', category: 'Success Criteria', label: 'Quantifiable Value Metrics Documented', detail: 'Baseline metrics recorded to measure first-quarter return on investment for the executive sponsor.' }
    ],
    governanceNote: 'Reduces early-tenure customer churn and establishes clean foundations for Net Revenue Retention.'
  },
  {
    id: 'deal-closure-checklist',
    title: 'Enterprise Deal Closure & Contract Checklist',
    badge: 'Closing Rigor',
    description: 'Commercial and legal checklist required before submitting final contracts for executive and legal sign-off.',
    cadence: 'Prior to Final Contract Submission',
    stakeholders: ['Account Executive', 'Legal Counsel', 'Finance / Deal Desk'],
    items: [
      { id: 'd1', category: 'Pricing', label: 'Commercial Terms Match Approved CPQ Quote', detail: 'Pricing, payment terms, and discount percentages match formal deal desk authorization.' },
      { id: 'd2', category: 'Legal', label: 'MSA Redlines Cleared by Legal Counsel', detail: 'All liability, indemnification, warranty, and data protection clauses reviewed and approved.' },
      { id: 'd3', category: 'Billing', label: 'Billing Entity & Purchase Order (PO) Validated', detail: 'Correct corporate legal entity, billing address, VAT/tax ID, and customer PO number confirmed.' },
      { id: 'd4', category: 'Signatories', label: 'Authorized Signatories Confirmed', detail: 'Confirmed that the individual signing the contract possesses formal corporate signing authority.' }
    ],
    governanceNote: 'Prevents post-signature billing disputes, revenue recognition delays, and legal liabilities.'
  },
  {
    id: 'global-expansion-checklist',
    title: 'Global Expansion Operational Checklist',
    badge: 'International Launch',
    description: 'Operational readiness checklist for entering a new foreign territory: tax, banking, translation, and local distributor compliance.',
    cadence: 'Prior to Committing Capital to New Geographic Region',
    stakeholders: ['Head of International Expansion', 'General Counsel', 'CFO'],
    items: [
      { id: 'g1', category: 'Regulatory', label: 'Local Corporate & Tax Registration Completed', detail: 'Evaluated whether a local subsidiary, branch office, or reseller partner model is required.' },
      { id: 'g2', category: 'Data Privacy', label: 'Regional Data Sovereignty Laws Addressed', detail: 'Confirmed compliance with local privacy frameworks (e.g. EU GDPR, Canadian PIPEDA, Japanese APPI).' },
      { id: 'g3', category: 'Contracts', label: 'Localized Master Services Agreement Prepared', detail: 'Contract terms updated to reflect local governing law, jurisdiction, and currency denomination.' },
      { id: 'g4', category: 'Distribution', label: 'Anchor Local Channel Partner Vetted and Signed', detail: 'Established formal partner distribution agreement with clear margin sharing and SLA terms.' }
    ],
    governanceNote: 'Mitigates cross-border financial risk and regulatory penalties in foreign jurisdictions.'
  }
];

// ── 07. SOPS DATA ──
export const SOP_RESOURCES: SopResource[] = [
  {
    id: 'lead-management-sop',
    title: 'Standard Operating Procedure: Lead Management & Ingress',
    badge: 'SOP-REV-001',
    description: 'Defines the end-to-end standard operating procedure for capturing, validating, enriching, scoring, and routing inbound commercial leads.',
    purpose: 'Standardize inbound lead handling to achieve a sub-60 second response SLA and eliminate orphaned or duplicate inquiries.',
    scope: 'Applies to all inbound inquiries received across web forms, chat widgets, content downloads, event badges, and API webhooks.',
    processOwner: 'Revenue Operations Director',
    roles: ['Inbound Lead Coordinator', 'SDR / BDR', 'Marketing Operations Specialist', 'CRM Administrator'],
    prerequisites: ['Active Salesforce/HubSpot CRM Instance', 'Configured Reverse ETL Enrichment Webhook', 'Slack Notification Bot'],
    steps: [
      { stepNumber: 1, action: 'Ingest Inbound Payload', owner: 'API Gateway', system: 'Webhook / CDP', verification: 'Payload normalized to standard JSON schema within 500ms.' },
      { stepNumber: 2, action: 'Deduplication & Entity Matching', owner: 'RevOps Engine', system: 'CRM Database', verification: 'Check corporate email domain against existing account hierarchy.' },
      { stepNumber: 3, action: 'Automated Firmographic Enrichment', owner: 'Enrichment Sentry', system: 'ZoomInfo / Clearbit API', verification: 'Append employee headcount, ARR range, and industry technographics.' },
      { stepNumber: 4, action: 'Algorithmic ICP Scoring', owner: 'Scoring Engine', system: 'CRM Workflow Rule', verification: 'Assign Tier-1 (Score 80–100), Tier-2 (Score 50–79), or Tier-3 (<50).' },
      { stepNumber: 5, action: 'Territory Assignment & Routing', owner: 'Routing Logic', system: 'Round-Robin Lead Router', verification: 'Owner assigned based on territory zip code and rep quota availability.' },
      { stepNumber: 6, action: 'Dispatched Alert & Cadence Launch', owner: 'SDR Assigned', system: 'Sales Engagement Tool', verification: 'Automated Slack notification delivered; initial outreach deployed within 5 minutes.' }
    ],
    systemsRequired: ['Salesforce Sales Cloud or HubSpot Enterprise', 'Clearbit / ZoomInfo Enrichment', 'Salesloft / Outreach', 'Slack'],
    qualityChecks: [
      'Weekly audit of uncontacted leads older than 2 hours.',
      'Validation of round-robin distribution balance across sales representatives.',
      'Monthly review of disqualification reasons to calibrate scoring weights.'
    ],
    kpis: ['Average Speed-to-Lead (SLA < 5 minutes)', 'Inbound Lead-to-Meeting Conversion Rate', 'Data Enrichment Match Rate (>92%)'],
    revisionHistory: 'Version 3.2 — Updated March 2026: Integrated sub-second enrichment webhooks and auto-Slack dispatch.'
  },
  {
    id: 'crm-data-management-sop',
    title: 'Standard Operating Procedure: CRM Data Hygiene & Field Governance',
    badge: 'SOP-REV-002',
    description: 'Establishes immutable guidelines for data entry, field normalization, deduplication protocols, and administrative record maintenance.',
    purpose: 'Maintain an accurate, auditable, and single source of commercial truth across the enterprise customer lifecycle.',
    scope: 'All employees accessing, modifying, or creating records inside the enterprise CRM.',
    processOwner: 'Head of Sales Operations',
    roles: ['All Commercial Users', 'Sales Managers', 'RevOps Data Stewards'],
    prerequisites: ['Documented CRM Data Dictionary', 'Automated Daily Backup Schedule'],
    steps: [
      { stepNumber: 1, action: 'Pre-Creation Duplicate Search', owner: 'Commercial Rep', system: 'CRM Search Bar', verification: 'Search company domain and primary email before creating any record.' },
      { stepNumber: 2, action: 'Mandatory Field Completion', owner: 'Commercial Rep', system: 'CRM Account Layout', verification: 'Populate Industry, Headcount, Website, and Buying Center without placeholders.' },
      { stepNumber: 3, action: 'Activity Logging Synchronization', owner: 'Zero-Touch Sentry', system: 'Email & Calendar Sync', verification: 'All client emails and calendar invites logged to parent opportunity automatically.' },
      { stepNumber: 4, action: 'Weekly Stale Deal Maintenance', owner: 'Account Executive', system: 'Pipeline View', verification: 'Update close dates and next action notes on all opportunities active > 14 days.' },
      { stepNumber: 5, action: 'Automated Nightly Deduplication', owner: 'Batch Script', system: 'CRM Deduplication Tool', verification: 'Auto-merge identical contact emails; flag fuzzy duplicate accounts for steward review.' }
    ],
    systemsRequired: ['CRM (Salesforce / HubSpot)', 'DupeBlocker / Cloudingo', 'Automated Backup System (OwnBackup)'],
    qualityChecks: [
      'Quarterly data health audit targeting < 0.5% duplicate contact records.',
      'Field completeness score monitored weekly on executive dashboard.'
    ],
    kpis: ['Overall CRM Field Completeness (>95%)', 'Duplicate Account Rate (<1%)', 'Daily Active User Adoption Rate (>90%)'],
    revisionHistory: 'Version 2.8 — Refined automated deduplication rules and mandatory field triggers.'
  },
  {
    id: 'opportunity-management-sop',
    title: 'Standard Operating Procedure: Opportunity Stage-Gate Progression',
    badge: 'SOP-REV-003',
    description: 'Formal criteria governing deal advancement through each opportunity milestone to ensure forecast integrity.',
    purpose: 'Prevent deal stalling, eliminate premature pipeline inflation, and enforce rigorous qualification evidence.',
    scope: 'All active commercial opportunities managed by Account Executives and Account Managers.',
    processOwner: 'VP of Global Sales',
    roles: ['Account Executive', 'Sales Manager', 'Deal Desk Analyst'],
    prerequisites: ['MEDDPICC Qualification Matrix', 'Standard Mutual Action Plan Template'],
    steps: [
      { stepNumber: 1, action: 'Stage 1: Discovery Initiation', owner: 'AE', system: 'CRM', verification: 'Initial call completed; validated business pain documented in opportunity notes.' },
      { stepNumber: 2, action: 'Stage 2: Solution Validation Gate', owner: 'AE & SE', system: 'CRM', verification: 'Technical champion confirmed; preliminary architecture solution presented.' },
      { stepNumber: 3, action: 'Stage 3: Business Case & MAP Gate', owner: 'AE', system: 'Mutual Action Plan Tool', verification: 'Signed or written confirmation of Mutual Action Plan from customer champion.' },
      { stepNumber: 4, action: 'Stage 4: Proposal & Procurement Gate', owner: 'AE & Deal Desk', system: 'CPQ Engine', verification: 'Formal governed CPQ quote approved; legal redline process formally initiated.' },
      { stepNumber: 5, action: 'Stage 5: Closing & Sign-off Gate', owner: 'AE & Sales Director', system: 'DocuSign API', verification: 'Master Services Agreement executed by authorized corporate economic buyer.' }
    ],
    systemsRequired: ['CRM Stage-Gate Enforcer', 'CPQ Quoting Engine', 'DocuSign Integration'],
    qualityChecks: [
      'Deal desk audit of all opportunities exceeding $100k prior to quote generation.',
      'Manager verification of MAP documentation before approving Stage 4 progression.'
    ],
    kpis: ['Stage Conversion Efficiency', 'Average Stage Velocity (Days per Stage)', 'Forecast Realization Percentage'],
    revisionHistory: 'Version 4.0 — Introduced mandatory Mutual Action Plan upload requirement for Stage 3+.'
  },
  {
    id: 'sales-forecasting-sop',
    title: 'Standard Operating Procedure: Weekly Sales Forecasting Cadence',
    badge: 'SOP-REV-004',
    description: 'The standard operating rhythm for rolling up, validating, and submitting quarterly revenue projections to the executive board.',
    purpose: 'Maintain forecast variance under 5% against closed-won revenue through structured inspection.',
    scope: 'All sales managers, regional directors, and executive revenue leadership.',
    processOwner: 'Chief Revenue Officer',
    roles: ['Account Executives', 'Regional Sales Directors', 'RevOps Director', 'CRO'],
    prerequisites: ['Clean CRM Pipeline Data', 'Forecast Rollup Dashboard'],
    steps: [
      { stepNumber: 1, action: 'Rep Forecast Submission', owner: 'AE', system: 'CRM Forecast Tab', verification: 'Submitted every Thursday by 12:00 PM with Commit, Best Case, and Pipeline categories.' },
      { stepNumber: 2, action: 'Manager Deal Inspection', owner: 'Sales Director', system: '1:1 Deal Review', verification: 'Inspect top 10 deals; challenge close dates, champion stability, and procurement status.' },
      { stepNumber: 3, action: 'Regional Consolidation', owner: 'Regional VP', system: 'Rollup Dashboard', verification: 'Apply historical manager judgment discount factors; submit Friday by 3:00 PM.' },
      { stepNumber: 4, action: 'RevOps Statistical Regression', owner: 'RevOps Team', system: 'Telemetry Engine', verification: 'Compare manager subjective forecast against Bayesian historical velocity model.' },
      { stepNumber: 5, action: 'Executive Board Submission', owner: 'CRO', system: 'Executive Board Portal', verification: 'Consolidated revenue projection delivered to CEO & Board Monday 9:00 AM.' }
    ],
    systemsRequired: ['Salesforce Forecast Hierarchy', 'RevOps Telemetry Simulator', 'Executive Dashboard'],
    qualityChecks: [
      'Post-quarter variance post-mortem analyzing deals pushed or lost from Commit category.'
    ],
    kpis: ['Quarterly Forecast Variance (<5%)', 'Commit-to-Close Conversion Ratio (>90%)', 'Timely Submission Rate (100%)'],
    revisionHistory: 'Version 3.1 — Integrated algorithmic Bayesian probability comparisons alongside rep rollups.'
  },
  {
    id: 'campaign-execution-sop',
    title: 'Standard Operating Procedure: Multi-Channel Campaign Execution',
    badge: 'SOP-REV-005',
    description: 'Operational procedure for planning, producing, testing, and deploying high-impact demand generation campaigns.',
    purpose: 'Ensure consistent brand messaging, verified attribution tracking, and rapid pipeline conversion.',
    scope: 'Marketing team members, creative contractors, and demand generation specialists.',
    processOwner: 'VP of Demand Generation',
    roles: ['Campaign Manager', 'Copywriter', 'MarTech Specialist', 'SDR Team Lead'],
    prerequisites: ['Campaign Brief Template', 'Design Asset Kit', 'Allocated Budget Approval'],
    steps: [
      { stepNumber: 1, action: 'Campaign Brief & Hypothesis', owner: 'Campaign Lead', system: 'Project Management', verification: 'Document target ICP persona, core messaging thesis, and target pipeline contribution.' },
      { stepNumber: 2, action: 'Asset Production & Brand Review', owner: 'Creative Team', system: 'Figma / CMS', verification: 'All copy, graphics, and landing pages reviewed against brand design guidelines.' },
      { stepNumber: 3, action: 'Attribution & UTM Tagging', owner: 'MarTech Lead', system: 'Tracking Matrix', verification: 'Every promotional link contains verified campaign, source, medium, and term parameters.' },
      { stepNumber: 4, action: 'Sales Enablement Handover', owner: 'Product Marketer', system: 'Loom / Enablement Hub', verification: 'Sales reps provided with email snippets, call talk tracks, and target account lists.' },
      { stepNumber: 5, action: 'Launch & Telemetry Monitoring', owner: 'Campaign Lead', system: 'Live Dashboard', verification: 'Monitor live form conversions and deliverability rates within first 24 hours.' }
    ],
    systemsRequired: ['HubSpot / Marketo', 'Google Analytics 4', 'Asana / Jira Project Hub', 'Salesloft'],
    qualityChecks: [
      'Pre-launch link checker ensuring zero broken redirect chains.',
      'Day 3 conversion rate audit to pause low-performing ad variations.'
    ],
    kpis: ['Cost per Sales-Accepted Opportunity', 'Attributed Pipeline Sourced', 'Landing Page Conversion Rate (>8%)'],
    revisionHistory: 'Version 2.4 — Mandated sales enablement talk tracks prior to ad spend release.'
  },
  {
    id: 'customer-onboarding-sop',
    title: 'Standard Operating Procedure: Enterprise Client Onboarding & Handoff',
    badge: 'SOP-REV-006',
    description: 'Step-by-step procedure governing commercial sales handover to implementation engineering and customer success.',
    purpose: 'Eliminate post-sale implementation friction, maintain client momentum, and achieve Time-to-First-Value within 30 days.',
    scope: 'All newly closed-won enterprise contracts.',
    processOwner: 'VP of Customer Success',
    roles: ['Account Executive', 'Customer Success Manager', 'Implementation Lead', 'Client Executive Sponsor'],
    prerequisites: ['Executed Master Services Agreement', 'Completed Sales Handover Dossier'],
    steps: [
      { stepNumber: 1, action: 'Internal Sales-to-CS Handover Call', owner: 'AE & CSM', system: 'Internal Meeting', verification: 'Conducted within 24 hours of signature; review contract scope and customer expectations.' },
      { stepNumber: 2, action: 'Client Kickoff Scheduling', owner: 'CSM', system: 'Calendar & Email', verification: 'Formal kickoff meeting invitation and agenda dispatched to customer within 48 hours.' },
      { stepNumber: 3, action: 'Tenant Provisioning & Architecture Setup', owner: 'Implementation Engineer', system: 'Cloud Console', verification: 'Client instance configured, SSO integrations active, and security credentials dispatched.' },
      { stepNumber: 4, action: 'Formal Kickoff Meeting Execution', owner: 'CSM & AE', system: 'Video Conference', verification: 'Review 90-day Mutual Implementation Plan; secure executive sponsor confirmation.' },
      { stepNumber: 5, action: 'First Value Milestone Verification', owner: 'CSM', system: 'Customer Portal', verification: 'First core workflow completed by customer within 14 days of kickoff.' }
    ],
    systemsRequired: ['Gainsight / Planhat Customer Platform', 'Jira Service Desk', 'CRM Account Record'],
    qualityChecks: [
      'Customer kickoff sentiment survey delivered immediately post-meeting.',
      'Bi-weekly implementation status reports sent to client executive sponsor.'
    ],
    kpis: ['Time-to-First-Value (<30 Days)', 'Onboarding CSAT Score (>90%)', '30-Day Platform Adoption Rate'],
    revisionHistory: 'Version 3.0 — Added formal 48-hour SLA for client kickoff scheduling.'
  },
  {
    id: 'ai-agent-governance-sop',
    title: 'Standard Operating Procedure: AI Sales Agent Governance & Safety',
    badge: 'SOP-REV-007',
    description: 'Operational guidelines for configuring, testing, monitoring, and controlling autonomous cognitive sales agents.',
    purpose: 'Prevent model drift, eliminate hallucinations in external communications, and protect corporate brand integrity.',
    scope: 'All AI agents executing research, outreach, scoring, or data modification tasks.',
    processOwner: 'AI Trust & Governance Officer',
    roles: ['AI Platform Engineer', 'RevOps Administrator', 'Human Reviewers (SDRs/AEs)', 'CISO'],
    prerequisites: ['Sanitized Enterprise Knowledge Corpus', 'SOC 2 Compliant API Sandboxes'],
    steps: [
      { stepNumber: 1, action: 'Prompt Template Versioning & Testing', owner: 'AI Engineer', system: 'Git / Prompt Registry', verification: 'All agent system prompts version-controlled; regression tested against 100 sample scenarios.' },
      { stepNumber: 2, action: 'Tool Sandbox Boundary Configuration', owner: 'Security Lead', system: 'API Gateway', verification: 'Agents limited to least-privilege GET endpoints; POST/PUT requires parameter validation.' },
      { stepNumber: 3, action: 'Human-in-the-Loop Review Queue', owner: 'Commercial Rep', system: 'Agent Review Console', verification: 'External messages held in review queue; 1-click human approval required prior to dispatch.' },
      { stepNumber: 4, action: 'Real-Time Anomaly & Token Monitoring', owner: 'AI Sentry SRE', system: 'Datadog / Telemetry', verification: 'Automated circuit breaker trips if agent error rate or token expenditure spikes > 20%.' },
      { stepNumber: 5, action: 'Weekly Hallucination & Sentiment Audit', owner: 'Governance Team', system: 'Audit Dashboard', verification: 'Sample 5% of dispatched outputs for factual correctness and brand tone compliance.' }
    ],
    systemsRequired: ['LangGraph / Temporal Orchestrator', 'Enterprise Secrets Vault', 'Audit Telemetry Ledger'],
    qualityChecks: [
      'Immediate revocation of agent tool credentials upon any policy violation.',
      'Weekly adversarial prompt injection penetration testing.'
    ],
    kpis: ['Agent Accuracy Rate (>99.2%)', 'Human Override Frequency (<8%)', 'Zero Data Sovereignty or PII Violations'],
    revisionHistory: 'Version 2.0 — Codified mandatory human-in-the-loop review for Tier-1 enterprise messaging.'
  },
  {
    id: 'revenue-reporting-sop',
    title: 'Standard Operating Procedure: Executive Revenue Performance Reporting',
    badge: 'SOP-REV-008',
    description: 'Standard operating cadence for validating, synthesizing, and distributing monthly and quarterly commercial telemetry.',
    purpose: 'Deliver board-ready, audit-certified commercial performance reports to executive leadership without manual data manipulation.',
    scope: 'All executive and board-level commercial revenue dashboards.',
    processOwner: 'Director of Revenue Analytics',
    roles: ['RevOps Data Analyst', 'Finance Controller', 'Chief Revenue Officer'],
    prerequisites: ['Automated Data Warehouse Sync', 'Certified KPI Definition Dictionary'],
    steps: [
      { stepNumber: 1, action: 'Monthly Financial Reconciliation', owner: 'Finance & RevOps', system: 'NetSuite & CRM Sync', verification: 'Reconcile booked CRM ARR against recognized accounting revenue by 2nd business day.' },
      { stepNumber: 2, action: 'Funnel Metric Recalculation', owner: 'Data Analyst', system: 'Snowflake / BigQuery', verification: 'Calculate conversion rates across Lead → MQL → SQL → Opportunity → Closed-Won.' },
      { stepNumber: 3, action: 'Exception & Anomaly Flagging', owner: 'Analytics Lead', system: 'Telemetry Monitor', verification: 'Identify territories, reps, or products showing anomalous variance > 15% from trend.' },
      { stepNumber: 4, action: 'Executive Slide Deck Synthesis', owner: 'RevOps Director', system: 'Executive Portal', verification: 'Board-ready presentation highlighting key wins, pipeline risks, and strategic recommendations.' },
      { stepNumber: 5, action: 'Executive Review Meeting', owner: 'CRO & CEO', system: 'Executive Boardroom', verification: 'Monthly performance briefing conducted by 5th business day of each month.' }
    ],
    systemsRequired: ['Snowflake / BigQuery Warehouse', 'Looker / Tableau / Sigma Dashboards', 'Salesforce CRM'],
    qualityChecks: [
      'Dual-sign-off on revenue totals by both Head of RevOps and Finance Controller.'
    ],
    kpis: ['Reporting Delivery Timeliness (100% on schedule)', 'Data Discrepancy Frequency (Zero unverified entries)'],
    revisionHistory: 'Version 3.5 — Automated data warehouse pipelines eliminating 40 hours of manual spreadsheet assembly.'
  }
];

// ── 08. WORKSHOPS DATA ──
export const WORKSHOP_RESOURCES: WorkshopResource[] = [
  {
    id: 'revenue-strategy-workshop',
    title: 'Executive Revenue Strategy Alignment Workshop',
    badge: 'Executive Strategy',
    description: 'An intensive, structured alignment session for executive teams to identify commercial constraints, evaluate market opportunities, and establish shared revenue priorities.',
    objective: 'Align C-suite leadership on a single, quantified revenue strategy and operating model for the upcoming fiscal year.',
    participants: ['Chief Executive Officer (CEO)', 'Chief Revenue Officer (CRO)', 'Chief Financial Officer (CFO)', 'Chief Marketing Officer (CMO)', 'VP of Product'],
    duration: 'Full-Day Session (8 Hours) or 2 Half-Day Sessions',
    prerequisites: ['Historical 3-Year Revenue Cohort Data', 'Current Pipeline Breakdown', 'Market TAM Analysis'],
    agendaModules: [
      { time: '09:00 - 10:30', topic: 'Revenue Baseline & Constraint Discovery', activity: 'Audit historical performance, identify where deals stall, and diagnose pipeline friction points.', deliverable: 'Quantified Revenue Friction Map' },
      { time: '10:45 - 12:30', topic: 'Ideal Customer Profile & Market Attractiveness', activity: 'Evaluate account segmentation, win rates by vertical, and average contract value margins.', deliverable: 'Updated ICP Definition Matrix' },
      { time: '13:30 - 15:00', topic: 'Commercial Operating Model Architecture', activity: 'Define cross-functional responsibilities across sales, marketing, and customer success.', deliverable: 'Unified GTM Operating Architecture' },
      { time: '15:15 - 17:00', topic: 'Priority Action Planning & OKRs', activity: 'Translate strategic decisions into quarterly OKRs, resource allocations, and executive owners.', deliverable: 'Executive Strategic Revenue Roadmap' }
    ],
    expectedOutputs: [
      'Executive Revenue Strategy Charter signed by all participants.',
      'Quantified 12-Month Commercial Targets and Resource Budget.',
      'Documented Cross-Functional Stage-Gate SLAs.'
    ],
    postWorkshopActionPlan: [
      'Day 1–3: Distribute formalized workshop synthesis and agreed OKRs to all participants.',
      'Day 14: Departmental heads submit operational implementation plans aligned to workshop charter.',
      'Day 30: Executive committee reconvenes for initial milestone progress review.'
    ]
  },
  {
    id: 'icp-workshop',
    title: 'Ideal Customer Profile (ICP) & Segmentation Workshop',
    badge: 'Targeting Alignment',
    description: 'Facilitated collaborative session to define high-margin customer characteristics, eliminate low-value tire-kickers, and align sales-marketing targeting.',
    objective: 'Establish mathematically backed Ideal Customer Profile criteria that maximize win rates, average deal size, and Net Revenue Retention.',
    participants: ['Head of Marketing', 'Head of Sales', 'Head of Customer Success', 'Lead Product Manager'],
    duration: 'Half-Day Session (4 Hours)',
    prerequisites: ['Top 20 Most Profitable Customers List', 'Bottom 20 Highest-Churn Customers List', 'Win/Loss Analysis Logs'],
    agendaModules: [
      { time: '09:00 - 10:00', topic: 'Historical Cohort Profitability Audit', activity: 'Compare characteristics of highest-LTV accounts against accounts with high support costs or churn.', deliverable: 'Account Profitability Segmentation Matrix' },
      { time: '10:15 - 11:30', topic: 'Firmographic & Technographic Boundary Setting', activity: 'Define non-negotiable qualifiers: ARR floors, tech stack prerequisites, employee thresholds.', deliverable: 'Tier-1, Tier-2, Tier-3 ICP Criteria' },
      { time: '11:45 - 13:00', topic: 'Buying Committee Persona Profiling', activity: 'Map Economic Buyer, Champion, Technical Evaluator, and Procurement personas and core pain triggers.', deliverable: 'Comprehensive Buying Persona Blueprints' }
    ],
    expectedOutputs: [
      'Universal ICP Definition Document adopted across CRM and marketing automation.',
      'Negative ICP Disqualification Rubric to prevent reps from wasting time on poor-fit accounts.'
    ],
    postWorkshopActionPlan: [
      'Week 1: Update CRM lead scoring and validation rules to reflect new ICP boundaries.',
      'Week 2: Cleanse existing pipeline against negative ICP criteria and reallocate rep capacity.'
    ]
  },
  {
    id: 'sales-process-optimization-workshop',
    title: 'Sales Process & Pipeline Velocity Optimization Workshop',
    badge: 'Process Engineering',
    description: 'Hands-on operational workshop to deconstruct the current sales journey, eliminate administrative bottlenecks, and design streamlined stage-gates.',
    objective: 'Compress enterprise sales cycle duration by 30% and eliminate deal stall points through standardized execution tools.',
    participants: ['Sales Directors', 'Top Performing Account Executives', 'Solutions Engineering Leads', 'RevOps Director'],
    duration: 'Full-Day Session (6 Hours)',
    prerequisites: ['Stage Velocity Reports (Days Spent in Each Stage)', 'Historical Deal Loss Reasons'],
    agendaModules: [
      { time: '09:00 - 11:00', topic: 'Current-State Sales Journey Mapping', activity: 'Map every customer touchpoint, internal handoff, and proposal step; highlight points of friction.', deliverable: 'Friction-Annotated Sales Journey Map' },
      { time: '11:15 - 13:00', topic: 'Stage-Gate Criteria Re-Engineering', activity: 'Define explicit verifiable customer actions required to advance opportunities across stages.', deliverable: 'Objective Stage-Gate Progression Matrix' },
      { time: '14:00 - 15:30', topic: 'Mutual Action Plan Standardization', activity: 'Design enterprise Mutual Action Plan templates that align customer champions to shared timelines.', deliverable: 'Production Mutual Action Plan Template' }
    ],
    expectedOutputs: [
      'Standardized 5-Stage Enterprise Sales Milestone Rubric.',
      'Tested Mutual Action Plan Template ready for field deployment.'
    ],
    postWorkshopActionPlan: [
      'Train all account executives on Mutual Action Plan co-creation within 10 days.',
      'Implement CRM validation rules enforcing exit criteria before stage progression.'
    ]
  },
  {
    id: 'demand-gen-workshop',
    title: 'Demand Generation & Account-Based Marketing Workshop',
    badge: 'Demand Architecture',
    description: 'Strategic planning workshop to align marketing programs and outbound sales teams on high-intent account penetration strategies.',
    objective: 'Design a unified 12-month demand generation engine combining inbound intent capture with high-touch Account-Based Marketing.',
    participants: ['Chief Marketing Officer', 'VP of Demand Gen', 'SDR Leadership', 'Enterprise Sales Directors'],
    duration: 'Half-Day Session (4 Hours)',
    prerequisites: ['Current Inbound Conversion Rates', 'Ad Spend Breakdown', 'Named Enterprise Target Account List'],
    agendaModules: [
      { time: '09:00 - 10:15', topic: 'Intent Signal Architecture & Sourcing', activity: 'Evaluate first-party and third-party intent data feeds; identify high-propensity buying triggers.', deliverable: 'Intent Signal Trigger Matrix' },
      { time: '10:30 - 11:45', topic: 'Target Account Tiering & Coverage', activity: 'Divide target accounts into 1:1 Bespoke, 1:Few Segmented, and 1:Many Programmatic tiers.', deliverable: 'ABM Account Tiering Roster' },
      { time: '12:00 - 13:00', topic: 'Coordinated Touchpoint Cadencing', activity: 'Synchronize marketing ad exposures with personalized SDR phone, email, and social outreach touches.', deliverable: 'Integrated Sales-Marketing Cadence Blueprint' }
    ],
    expectedOutputs: [
      'Named Tier-1 Account Engagement Playbook.',
      'Agreed Sales-Marketing Service Level Agreement (SLA) on lead follow-up timelines.'
    ],
    postWorkshopActionPlan: [
      'Deploy intent tracking webhooks into CRM within 7 business days.',
      'Launch initial pilot ABM wave targeting top 50 accounts with personalized content.'
    ]
  },
  {
    id: 'revops-alignment-workshop',
    title: 'RevOps Alignment & Tech Stack Consolidation Workshop',
    badge: 'Systems Alignment',
    description: 'Technical and operational workshop to eliminate commercial tool redundancy, unify data definitions, and establish automated workflow bridges.',
    objective: 'Eliminate duplicate software subscriptions, unify data schemas, and establish a single source of revenue truth.',
    participants: ['RevOps Director', 'Sales Operations', 'Marketing Operations', 'Customer Success Operations', 'IT / Enterprise Architecture'],
    duration: 'Full-Day Session (6 Hours)',
    prerequisites: ['Complete Inventory of All Commercial Software Licenses', 'Annual SaaS Spend Summary'],
    agendaModules: [
      { time: '09:00 - 11:00', topic: 'Tech Stack Audit & Redundancy Mapping', activity: 'Map functionality across all 20+ commercial tools; identify overlapping licenses and unused seats.', deliverable: 'Tool Consolidation Rationalization Matrix' },
      { time: '11:15 - 13:00', topic: 'Data Schema Normalization & Dictionary', activity: 'Establish single, standardized definitions for core metrics: ARR, MQL, SQL, Opportunity, Churn.', deliverable: 'Enterprise Revenue Data Dictionary' },
      { time: '14:00 - 15:30', topic: 'Automated Event Architecture Planning', activity: 'Design bi-directional API flows and state machines between CRM, marketing, billing, and support.', deliverable: 'System-of-Record Integration Topology' }
    ],
    expectedOutputs: [
      'SaaS Tool Rationalization Plan with identified cost savings.',
      'Certified Enterprise Metric Definition Dictionary signed by all operational leads.'
    ],
    postWorkshopActionPlan: [
      'Cancel identified redundant tool subscriptions prior to auto-renewal dates.',
      'Configure automated webhook synchronizations between CRM and data warehouse.'
    ]
  },
  {
    id: 'ai-sales-transformation-workshop',
    title: 'AI-Native Sales Transformation & Agent Design Workshop',
    badge: 'Cognitive Transformation',
    description: 'Strategic and technical workshop to prioritize enterprise AI use cases, design autonomous agent workflows, and establish safety governance boundaries.',
    objective: 'Identify high-ROI revenue workflows suitable for AI automation and design safe Human-in-the-Loop agent operating models.',
    participants: ['CRO', 'CTO / Chief AI Architect', 'Sales Operations Leads', 'Top AEs and SDRs'],
    duration: 'Full-Day Session (7 Hours)',
    prerequisites: ['Rep Weekly Activity Time Breakdown', 'Current Sales Tool Access Map'],
    agendaModules: [
      { time: '09:00 - 10:30', topic: 'Commercial Friction & Use Case Discovery', activity: 'Identify high-frequency, repetitive administrative tasks consuming rep time; evaluate AI suitability.', deliverable: 'AI Revenue Use Case Priority Matrix' },
      { time: '10:45 - 12:30', topic: 'Autonomous Agent Workflow Architecture', activity: 'Map triggers, reasoning steps, tool permissions, and outputs for automated prospecting and research.', deliverable: 'Agent Cognitive Execution Blueprint' },
      { time: '13:30 - 15:00', topic: 'Human-in-the-Loop Safety & Governance', activity: 'Define approval gateways, prompt sandboxing rules, RBAC permissions, and PII protection.', deliverable: 'AI Governance & Safety Charter' },
      { time: '15:15 - 16:30', topic: 'Pilot Implementation Roadmap', activity: 'Select single high-leverage pilot workflow; establish 60-day success criteria and rollout timeline.', deliverable: '60-Day Pilot Deployment Plan' }
    ],
    expectedOutputs: [
      'Prioritized AI Sales Opportunity Roadmap (Quick Wins vs Strategic Platforms).',
      'Production Agent Architecture Blueprint with Human-in-the-Loop Review Gates.'
    ],
    postWorkshopActionPlan: [
      'Deploy pilot research agent in sandbox environment within 14 days.',
      'Conduct weekly pilot feedback sessions with participating sales representatives.'
    ]
  },
  {
    id: 'customer-growth-workshop',
    title: 'Customer Growth & Net Revenue Retention Workshop',
    badge: 'NRR Compounding',
    description: 'Collaborative strategy workshop to transform reactive customer support into a proactive, expansion-generating customer growth engine.',
    objective: 'Design proactive customer telemetry health scoring and structured expansion cadences to achieve 120%+ NRR.',
    participants: ['Chief Customer Officer', 'VP of Customer Success', 'Account Management Leads', 'Product Marketing Leads'],
    duration: 'Half-Day Session (4 Hours)',
    prerequisites: ['Historical Account Churn Reports', 'Product Feature Adoption Heatmaps'],
    agendaModules: [
      { time: '09:00 - 10:15', topic: 'Customer Health Scoring Framework', activity: 'Synthesize product usage telemetry, sentiment, support tickets, and executive stability into single score.', deliverable: 'Multi-Factor Account Health Scorecard' },
      { time: '10:30 - 11:45', topic: 'Proactive Renewal & Expansion Playbooks', activity: 'Establish 90-day renewal timeline milestones and define telemetry triggers that indicate upsell readiness.', deliverable: '90-Day Renewal & Expansion Playbook' },
      { time: '12:00 - 13:00', topic: 'Cross-Sell White-Space Opportunity Mapping', activity: 'Map complementary capabilities across existing customer accounts; design commercial packaging.', deliverable: 'Customer Account Expansion Matrix' }
    ],
    expectedOutputs: [
      'Universal Account Health Scoring Model implemented in CS platform.',
      'Standardized 90-Day Renewal Governance Cadence.'
    ],
    postWorkshopActionPlan: [
      'Integrate product usage telemetry into customer health scorecards within 2 weeks.',
      'Launch proactive renewal outreach for all accounts expiring in the upcoming 90–120 days.'
    ]
  },
  {
    id: 'global-expansion-workshop',
    title: 'Global Market Expansion Strategy Workshop',
    badge: 'Cross-Border Scale',
    description: 'Executive strategy session to evaluate international market attractiveness, choose optimal entry models, and architect regional distribution partnerships.',
    objective: 'Select target geographic expansion markets and define a low-risk, high-velocity regional entry roadmap.',
    participants: ['CEO', 'Chief Growth Officer', 'General Counsel', 'CFO', 'VP of International Sales'],
    duration: 'Full-Day Session (6 Hours)',
    prerequisites: ['Regional Market Economic Profiles', 'Local Competitor Analysis', 'Regulatory Summary'],
    agendaModules: [
      { time: '09:00 - 11:00', topic: 'Geographic Market Prioritization', activity: 'Score candidate international markets across TAM, competitor saturation, regulatory ease, and willingness to pay.', deliverable: 'International Market Priority Heatmap' },
      { time: '11:15 - 13:00', topic: 'Entry Model Evaluation: Direct vs Partner', activity: 'Compare economics and speed-to-market of direct regional sales versus local reseller/distributor models.', deliverable: 'Optimal Market Entry Model Charter' },
      { time: '14:00 - 15:30', topic: '12-Month Regional Execution Roadmap', activity: 'Define partner recruitment criteria, localized marketing requirements, and revenue milestones.', deliverable: 'Phase-1 International Expansion Roadmap' }
    ],
    expectedOutputs: [
      'Executive Global Market Selection Decision Charter.',
      'Partner Distribution Profile & Recruitment Scorecard.'
    ],
    postWorkshopActionPlan: [
      'Engage local regulatory counsel in the selected primary target market.',
      'Initiate discussions with top 3 identified regional distribution partners.'
    ]
  }
];

// ── MASTER CATEGORIES METADATA (8 MAIN CATEGORIES) ──
export const HUB_CATEGORIES: HubCategory[] = [
  {
    id: 'playbooks',
    label: 'PLAYBOOKS',
    anchor: 'playbooks',
    number: '01',
    heading: 'Enterprise Revenue & Sales Playbooks',
    subheading: 'Turn Strategic Intent Into Standardized, Repeatable Commercial Execution Across Every Stage of the Customer Lifecycle.',
    description: 'Structured execution guides that help sales, marketing, revenue operations, and customer growth teams consistently apply proven commercial processes across target account identification, prospecting, deal progression, contract negotiation, and customer expansion.',
    businessProblems: [
      'Inconsistent sales execution: Individual reps rely on subjective tactics rather than a verified methodology.',
      'Unpredictable deal cycle duration: Deals stall in middle stages without structured milestone acceleration.',
      'Fragmented customer handoffs: Knowledge gaps between SDRs, AEs, and CSMs create client dissatisfaction.',
      'High onboarding latency: New sales hires take 6–9 months to reach full quota productivity.'
    ],
    rootCauses: [
      'Lack of documented, stage-by-stage operational execution standards.',
      'Absence of verifiable customer exit criteria between pipeline milestones.',
      'Siloed departmental playbooks with conflicting incentives and definitions.'
    ],
    operationalImpact: 'Directly impacts sales win rates, reduces rep ramp-up time by 40%, and establishes predictable, forecastable revenue generation.',
    howToUse: {
      whenToUse: 'Deploy during sales onboarding, when entering new market segments, or when standardizing pipeline execution across growing commercial teams.',
      whoShouldUse: 'Account Executives, SDRs/BDRs, Sales Managers, RevOps Leaders, Customer Success Managers.',
      expectedInputs: 'Target ICP criteria, verified buyer personas, product value messaging matrices, CRM stage configurations.',
      expectedOutputs: 'Standardized operational cadence, validated Mutual Action Plans, structured buyer qualification evidence.'
    },
    implementationSteps: [
      '1. Assess Current Execution: Audit historical win/loss data to identify stage-specific drop-off rates.',
      '2. Select Relevant Playbook: Choose the specific functional playbook aligned to your current revenue priority.',
      '3. Customize to Organization: Adapt stages, tools, and qualification rubrics to your business model.',
      '4. Enable Commercial Team: Conduct role-play workshops and embed playbook checklists into CRM workflows.',
      '5. Measure Compliance & Velocity: Track stage progression speed and win rate improvements on trained cohorts.',
      '6. Iterate Continuously: Refine objection-handling talk tracks and cadences based on real-time field telemetry.'
    ],
    businessValue: 'Eliminates reliance on individual "hero" reps by institutionalizing a repeatable, scalable revenue execution playbook.',
    metrics: ['Win Rate on Qualified Pipeline', 'Average Sales Cycle Duration', 'Rep Quota Attainment Distribution', 'Ramp-up Time to First Deal']
  },
  {
    id: 'assessment-templates',
    label: 'DIAGNOSTICS',
    anchor: 'assessment-templates',
    number: '02',
    heading: 'Enterprise Assessment & Diagnostic Templates',
    subheading: 'Identify Hidden Revenue Leakage, Operational Bottlenecks, and Organizational Readiness Before Investing Capital.',
    description: 'Structured audit frameworks and quantitative diagnostic tools designed to systematically evaluate revenue performance, sales process adherence, marketing effectiveness, CRM data hygiene, RevOps alignment, AI readiness, customer retention, and global expansion capability.',
    businessProblems: [
      'Invisible revenue leakage: Organizations lose 10–25% of potential ARR to unnoticed operational drag.',
      'Subjective problem diagnosis: Leadership debates internal friction without empirical benchmark data.',
      'Premature transformation investment: Deploying expensive software before fixing foundational process gaps.',
      'Data rot and blind spots: Executive reporting masks underlying pipeline decay and churn exposure.'
    ],
    rootCauses: [
      'Absence of standardized diagnostic rubrics across commercial departments.',
      'Reliance on surface-level vanity metrics rather than underlying operational health indicators.',
      'Fear of exposing operational weaknesses without a clear remediation path.'
    ],
    operationalImpact: 'Provides C-suite and commercial leadership with an objective, quantified baseline of operational maturity and immediate remediation priorities.',
    howToUse: {
      whenToUse: 'Conduct prior to quarterly planning, before major tech stack investments, or when revenue growth stalls unexpectedly.',
      whoShouldUse: 'Chief Revenue Officers, VPs of Sales & Marketing, RevOps Directors, Enterprise Transformation Leads.',
      expectedInputs: 'Historical pipeline telemetry, CRM data quality audits, tech stack inventory, rep activity logs.',
      expectedOutputs: 'Executive Diagnostic Radar, quantified maturity scorecards, and prioritized 90-day remediation roadmap.'
    },
    implementationSteps: [
      '1. Scope Diagnostic Objective: Identify the specific functional area exhibiting performance degradation.',
      '2. Gather Operational Evidence: Collect quantitative data (CRM records, conversion rates, cycle durations).',
      '3. Administer Assessment: Complete the structured diagnostic rubric with cross-functional leadership.',
      '4. Calculate Capability Score: Score across evaluation dimensions to reveal operational friction points.',
      '5. Prioritize Remediation Waves: Categorize findings into Quick Wins, Strategic Fixes, and Platform Upgrades.',
      '6. Re-Assess Quarterly: Track score progression over time to measure verified operational improvement.'
    ],
    businessValue: 'Prevents wasted capital by ensuring transformation investments target the true root causes of commercial friction.',
    metrics: ['Operational Health Score (0–100)', 'Identified Revenue Leakage Dollars', 'Identified Process Bottlenecks', 'Remediation Velocity']
  },
  {
    id: 'maturity-models',
    label: 'MATURITY',
    anchor: 'maturity-models',
    number: '03',
    heading: 'Enterprise Capability Maturity Models',
    subheading: 'Map Current Operational Capabilities and Define a Structured, Realistic Progression Toward AI-Native Excellence.',
    description: 'Standardized 5-level maturity progression frameworks evaluating sales execution, demand generation, RevOps architecture, and AI-native automation across process discipline, automation level, data maturity, and executive governance.',
    businessProblems: [
      'Unrealistic transformation expectations: Attempting to deploy advanced AI automation on broken, manual processes.',
      'Lack of clear progression roadmap: Teams do not understand the intermediate steps required to achieve operational excellence.',
      'Departmental maturity mismatch: Advanced marketing generation handoffs failing due to primitive sales qualification.',
      'Unverifiable maturity claims: Organizations assuming they are mature without empirical evidence.'
    ],
    rootCauses: [
      'Lack of standardized, industry-accepted capability benchmark rubrics.',
      'Confusing software tool adoption with true process and cultural capability maturity.',
      'Fragmented operational investment across departments without unified architectural governance.'
    ],
    operationalImpact: 'Aligns executive expectations with operational reality and provides a phased, achievable transformation roadmap.',
    howToUse: {
      whenToUse: 'Use during annual strategic planning, capability roadmapping, or when evaluating enterprise technology readiness.',
      whoShouldUse: 'Enterprise Executives, Chief Transformation Officers, CROs, RevOps Architects, Commercial Leaders.',
      expectedInputs: 'Process documentation, tool utilization metrics, data schema audits, governance charters.',
      expectedOutputs: 'Current vs Target State Capability Gap Matrix, phased milestone investment plan.'
    },
    implementationSteps: [
      '1. Select Domain Model: Choose from Sales, Marketing, RevOps, or AI-Native Maturity Models.',
      '2. Audit Operational Reality: Review current processes against the 5 maturity level characteristics.',
      '3. Assign Current-State Level: Identify the lowest verified tier where capabilities are consistently executed.',
      '4. Define Target-State Horizon: Establish an achievable target level for the upcoming 12–18 months.',
      '5. Execute Recommended Actions: Deploy specific foundational upgrades required to advance to the next level.',
      '6. Verify Milestone Attainment: Re-audit capabilities before investing in next-tier advanced tools.'
    ],
    businessValue: 'Ensures sustainable capability development by preventing premature optimization and skipping foundational steps.',
    metrics: ['Organizational Maturity Tier (1 to 5)', 'Capability Gap Deficit Index', 'Time-to-Next-Maturity-Level', 'Process Standardization Rate']
  },
  {
    id: 'business-cases',
    label: 'JUSTIFICATION',
    anchor: 'business-cases',
    number: '04',
    heading: 'Business Case Development Frameworks',
    subheading: 'Quantify Expected Value, Model Investment Payback, and Secure Executive Board Approval for Commercial Modernization.',
    description: 'CFO-ready business case structures that help commercial leaders articulate strategic business problems, propose technical solutions, detail investment requirements, project net economic benefits, assess risks, and define decision approval gateways.',
    businessProblems: [
      'Rejected transformation proposals: High-potential initiatives blocked by CFOs due to vague financial justification.',
      'Unquantified business problems: Describing challenges in emotional terms rather than hard financial metrics.',
      'Hidden cost overruns: Business cases failing to model ongoing integration, enablement, and maintenance costs.',
      'Lack of post-investment accountability: Initiatives approved without defined success telemetry or payback gates.'
    ],
    rootCauses: [
      'Commercial leaders lacking formal corporate finance and business case modeling templates.',
      'Over-reliance on vendor-provided generic ROI claims that lack credibility with finance teams.',
      'Failure to identify and mitigate operational risks upfront in the proposal.'
    ],
    operationalImpact: 'Transforms intuitive commercial ideas into defensible, board-level capital investment proposals with high approval rates.',
    howToUse: {
      whenToUse: 'Deploy when requesting capital budget for software, consulting, headcount, or sales transformation initiatives.',
      whoShouldUse: 'CROs, VPs of Sales & Marketing, RevOps Leaders, Innovation & Transformation Directors.',
      expectedInputs: 'Current operational costs, baseline performance metrics, software vendor quotes, projected productivity gains.',
      expectedOutputs: 'Complete CFO-ready Business Case Dossier with sensitivity modeling and decision criteria.'
    },
    implementationSteps: [
      '1. Frame the Business Problem: Quantify the annual cost of the status quo in lost revenue and labor drag.',
      '2. Articulate Proposed Solution: Detail the target architecture, required tools, and integration scope.',
      '3. Model Investment Requirements: Compile loaded capex and opex across software, integration, and coaching.',
      '4. Calculate Projected Benefits: Estimate conservative revenue lift and labor savings based on historical benchmarks.',
      '5. Conduct Sensitivity & Risk Analysis: Test downside scenarios (e.g. 50% benefit realization) to ensure payback.',
      '6. Present to Executive Committee: Deliver concise executive summary and clear decision authorization gateways.'
    ],
    businessValue: 'Accelerates executive consensus and unlocks capital for high-ROI commercial revenue initiatives.',
    metrics: ['Internal Rate of Return (IRR)', 'Net Present Value (NPV)', 'Capital Payback Velocity (Months)', 'Business Case Approval Rate']
  },
  {
    id: 'roi-models',
    label: 'ROI',
    anchor: 'roi-models',
    number: '05',
    heading: 'Financial ROI & Value Measurement Models',
    subheading: 'Mathematical Formulations and Interactive Calculators Linking Operational Improvements to Verified Economic Value.',
    description: 'Deterministic financial models providing exact mathematical formulas, variable definitions, and interactive calculators for modeling AI sales automation ROI, Customer Acquisition Cost (CAC), Customer Lifetime Value (CLV), payback timelines, sales productivity yield, and customer retention compounding.',
    businessProblems: [
      'Unsupported ROI claims: Unsubstantiated "10x ROI" marketing hype that damages credibility with executive buyers.',
      'Confused unit economics: Leadership unable to calculate true fully loaded Customer Acquisition Cost (CAC).',
      'Misallocated commercial capital: Over-investing in top-of-funnel ads while ignoring high-ROI retention improvements.',
      'Inability to measure productivity: Difficulty proving the financial value of reclaimed rep working hours.'
    ],
    rootCauses: [
      'Lack of standardized mathematical definitions and financial formulas across commercial operations.',
      'Fragmented data tracking that fails to capture all fully loaded cost elements.',
      'Absence of interactive sensitivity modeling to evaluate best-case, expected, and conservative outcomes.'
    ],
    operationalImpact: 'Establishes clear, defensible economic metrics that guide capital allocation and measure verified post-deployment value.',
    howToUse: {
      whenToUse: 'Use when modeling commercial investment returns, setting annual CAC/CLV targets, or presenting customer business cases.',
      whoShouldUse: 'Chief Financial Officers, Commercial Directors, Sales Ops Analysts, Solution Engineers.',
      expectedInputs: 'Loaded rep compensation, marketing spend, customer count, gross margins, churn rates, contract ARR.',
      expectedOutputs: 'Verified financial model outputs: Net ROI %, CAC Payback Months, CLV:CAC Ratio, Retained Cash Value.'
    },
    implementationSteps: [
      '1. Identify Target Metric: Select appropriate model (ROI, CAC, CLV, Payback, Retention).',
      '2. Gather Empirical Input Data: Input verified baseline figures from audited financial and CRM records.',
      '3. Run Interactive Calculator: Model expected operational improvements (e.g. +15% productivity, -3% churn).',
      '4. Review Sensitivity Boundaries: Evaluate conservative downside cases to establish a minimum payback floor.',
      '5. Document Assumptions: Transparently state time horizons, margin percentages, and calculation limitations.',
      '6. Embed in Decision Governance: Require all commercial proposals to cite standardized model formulas.'
    ],
    businessValue: 'Replaces guesswork and vendor hyperbole with rigorous, audit-certified commercial financial mathematics.',
    metrics: ['ROI Percentage (%)', 'CAC Payback Period (Months)', 'CLV:CAC Ratio (Target ≥ 3:1)', 'Reclaimed Dollar Value of Sales Capacity']
  },
  {
    id: 'checklists',
    label: 'HYGIENE',
    anchor: 'checklists',
    number: '06',
    heading: 'Enterprise Execution & Governance Checklists',
    subheading: 'Practical Stage-Gate Verification Checklists to Enforce Execution Consistency and Eliminate Avoidable Gaps.',
    description: 'Interactive, tickable operational verification checklists covering sales qualification rigor (MEDDPICC), weekly CRM hygiene, quarterly pipeline reviews, campaign pre-flight checks, AI deployment safety, client onboarding handovers, contract closing, and global expansion readiness.',
    businessProblems: [
      'Avoidable execution mistakes: Sales reps skipping critical qualification steps in the rush to send proposals.',
      'Distorted pipeline data: Stale close dates and missing contact records corrupting executive forecasts.',
      'Compliance and legal exposure: Dispathing campaigns or deploying AI agents without verified consent or data guardrails.',
      'Client onboarding churn: Dropping critical customer requirements during sales-to-CS handoffs.'
    ],
    rootCauses: [
      'Relying on human memory and good intentions rather than formal verification stage-gates.',
      'Lack of clear accountability for who verifies specific operational criteria.',
      'Complex, cumbersome checklists that reps view as administrative bureaucracy rather than helpful tools.'
    ],
    operationalImpact: 'Dramatically reduces deal slippage, protects compliance, and instills professional operational discipline across teams.',
    howToUse: {
      whenToUse: 'Use during weekly deal reviews, prior to advancing opportunity stages, before campaign releases, and at contract closing.',
      whoShouldUse: 'Account Executives, Sales Managers, RevOps Analysts, Campaign Managers, CSMs, Security Officers.',
      expectedInputs: 'Deal context, CRM records, campaign parameters, contract terms, security configurations.',
      expectedOutputs: 'Validated stage-gate clearance, documented audit trail, instant completion progress tracking.'
    },
    implementationSteps: [
      '1. Select Operational Checklist: Choose the specific checklist corresponding to the current workflow stage.',
      '2. Inspect Real Evidence: Review actual customer documentation (emails, org charts, budget confirmations).',
      '3. Verify Each Item: Tick items only when objective evidence meets the detailed criterion.',
      '4. Address Flagged Gaps: If an item fails verification, execute immediate remediation before progressing.',
      '5. Log Stage Clearance: Record completion date and reviewer in the CRM opportunity record.',
      '6. Track Completion Rates: Monitor team checklist completion compliance on weekly operational dashboards.'
    ],
    businessValue: 'Transforms elite sales habits into an organizational standard, raising the performance floor of every team member.',
    metrics: ['Checklist Completion Compliance Rate', 'Opportunity Stage Slippage Rate', 'Post-Signature Contract Dispute Frequency', 'Lead Time-to-First-Action']
  },
  {
    id: 'sops',
    label: 'SOPS',
    anchor: 'sops',
    number: '07',
    heading: 'Standard Operating Procedures for Revenue Operations',
    subheading: 'Institutionalize Repeatable Commercial Excellence With Documented, Step-by-Step Operating Procedures.',
    description: 'Comprehensive, enterprise-grade Standard Operating Procedures (SOPs) defining exact procedures, owners, systems, prerequisites, and quality checks for lead management, CRM data hygiene, opportunity stage-gates, forecasting, campaign execution, client onboarding, AI agent safety, and executive revenue reporting.',
    businessProblems: [
      'Single-point-of-failure risk: Critical revenue knowledge locked inside the heads of individual employees.',
      'Process drift over time: Best practices degrading into inconsistent habits as teams scale.',
      'Slow employee ramp-up: New operations hires spending months guessing how internal systems function.',
      'Audit and compliance vulnerabilities: Inability to prove to regulators or board members how data and deals are governed.'
    ],
    rootCauses: [
      'Treating documentation as a one-time project rather than an essential, living operational asset.',
      'Writing vague high-level policies that lack granular step-by-step technical instructions.',
      'Failing to assign clear process owners responsible for updating and enforcing procedures.'
    ],
    operationalImpact: 'Creates an organizational foundation that scales predictably, withstands employee turnover, and ensures consistent quality.',
    howToUse: {
      whenToUse: 'Reference during new employee onboarding, process audits, system migrations, or operational troubleshooting.',
      whoShouldUse: 'RevOps Teams, Sales Operations, Marketing Operations, Customer Success, System Administrators.',
      expectedInputs: 'Documented roles, required system credentials, workflow trigger definitions, SLA targets.',
      expectedOutputs: 'Deterministic, error-free execution of complex multi-system commercial workflows.'
    },
    implementationSteps: [
      '1. Adopt Standard SOP Format: Use the 11-part standardized enterprise procedure structure.',
      '2. Assign Named Process Owner: Designate a specific role accountable for maintaining and auditing the procedure.',
      '3. Map Granular System Steps: Document exact inputs, screens, logic gates, and expected outputs.',
      '4. Train Operational Stakeholders: Conduct walkthroughs and mandate procedure adherence.',
      '5. Establish Verification Checks: Implement automated or manual quality gates to catch non-compliance.',
      '6. Review & Version Quarterly: Update SOPs whenever software systems, APIs, or organizational structures change.'
    ],
    businessValue: 'Eliminates operational chaos and builds durable enterprise equity in repeatable commercial processes.',
    metrics: ['Process Cycle Time (SLA Compliance)', 'Operational Error & Exception Rate', 'New Hire Time-to-Autonomy', 'Audit Compliance Pass Rate']
  },
  {
    id: 'workshops',
    label: 'CANVAS',
    anchor: 'workshops',
    number: '08',
    heading: 'Executive Strategy & Business Transformation Workshops',
    subheading: 'Facilitated Collaborative Formats to Align Leadership, Prioritize Initiatives, and Build Actionable Roadmaps.',
    description: 'Structured workshop agendas, canvas templates, and facilitation frameworks designed to help executive teams break through strategic impasses across revenue alignment, Ideal Customer Profile definition, sales process optimization, demand generation, RevOps alignment, AI transformation, customer growth, and global market expansion.',
    businessProblems: [
      'Executive alignment deadlock: Leadership teams debating strategic direction for months without reaching consensus.',
      'Unstructured meetings: Senior executives spending full days in open-ended discussions without concrete deliverables.',
      'Lack of shared ownership: Strategic initiatives failing because department heads were not involved in design.',
      'No post-workshop execution: Great ideas generated in offsites evaporating into daily operational firefighting.'
    ],
    rootCauses: [
      'Absence of structured facilitation agendas with explicit time-boxed deliverables.',
      'Failing to ground strategic discussions in empirical performance data and customer evidence.',
      'Leaving workshops without named executive owners, quarterly OKRs, and scheduled review milestones.'
    ],
    operationalImpact: 'Compresses months of fragmented debate into a focused, highly collaborative session that produces clear decisions and executive ownership.',
    howToUse: {
      whenToUse: 'Conduct during annual executive offsites, quarterly strategic planning, or when undertaking major business model transformations.',
      whoShouldUse: 'CEOs, CROs, CMOs, CFOs, Board Directors, Business Unit Leaders, Transformation Facilitators.',
      expectedInputs: 'Historical performance telemetry, customer retention cohorts, competitor benchmarks, market TAM analyses.',
      expectedOutputs: 'Signed Executive Strategy Charters, prioritized initiative roadmaps, and documented 90-day action plans.'
    },
    implementationSteps: [
      '1. Establish Clear Session Objective: Define the specific strategic decision required by the end of the workshop.',
      '2. Assemble Essential Stakeholders: Restrict participants to core decision-makers with direct organizational ownership.',
      '3. Distribute Pre-Read Dossier: Require participants to review empirical baseline data prior to the session.',
      '4. Facilitate Structured Modules: Follow time-boxed agendas with explicit exercises and tangible deliverables.',
      '5. Synthesize Executive Charter: Formalize agreed priorities, resource allocations, and named owners before adjourning.',
      '6. Enforce 30-60-90 Day Action Cadence: Track post-workshop implementation milestones at executive committee meetings.'
    ],
    businessValue: 'Accelerates strategic velocity and creates unshakeable cross-functional alignment across executive leadership.',
    metrics: ['Strategic Decision Velocity (Days to Consensus)', 'Post-Workshop Initiative Completion Rate', 'Executive Alignment Index', 'Strategic ROI Realization']
  }
];

