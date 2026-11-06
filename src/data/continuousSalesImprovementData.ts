// PROFITMACHINES — CONTINUOUS SALES IMPROVEMENT HUB DATA ARCHITECTURE
// Category 09: Enterprise Methodologies, Frameworks & Decision Science

export interface MethodologySection {
  id: string;
  number: string;
  title: string;
  badge: string;
  shortDescription: string;
  businessProblem: string;
  salesApplications: string[];
  whatProfitMachinesHelpsImprove: string[];
  relevantKpis: { name: string; target: string; desc: string }[];
  practicalExample: {
    scenario: string;
    issue: string;
    intervention: string;
    outcome: string;
  };
}

// ── 01 TO 08 METHODOLOGY WORKBENCHES ──
export const IMPROVEMENT_METHODOLOGIES: MethodologySection[] = [
  {
    id: 'lean-sales',
    number: '01',
    title: 'Lean Sales',
    badge: 'Waste Elimination',
    shortDescription: 'Remove unnecessary administrative friction, compress sales-cycle waiting times, and maximize the proportion of rep hours committed to high-yield customer engagement.',
    businessProblem: 'Enterprise sales representatives spend upwards of 64% of their working hours trapped in administrative overhead: duplicate CRM updates, manual proposal formatting, fragmented multi-tool data reconciliation, and redundant internal approval chains rather than active commercial selling.',
    salesApplications: [
      'Sales-process non-value-add waste identification (Muda analysis).',
      'Lead-to-opportunity intake simplification eliminating multi-hop manual handoffs.',
      'Automated CRM hygiene workflows preventing manual dual-record entry.',
      'Streamlining multi-tier discount approval gates with automated boundary rules.',
      'Sales-to-Solutions Engineering technical discovery handoff standardization.',
      'Elimination of repetitive weekly status reporting through streaming dashboards.',
      'Compression of inbound lead response SLAs from hours to sub-5 minutes.'
    ],
    whatProfitMachinesHelpsImprove: [
      'Sales execution velocity across initial discovery to proposal dispatch.',
      'Inbound and event lead response times with automated routing.',
      'Net percentage of representative time dedicated to direct customer engagement.',
      'Quality and completeness of context transferred across team handoffs.',
      'Active deal throughput per quota-carrying representative.'
    ],
    relevantKpis: [
      { name: 'Lead Response Time', target: '< 5 Minutes', desc: 'Elapsed duration from lead submission to verified commercial touchpoint.' },
      { name: 'Sales Cycle Length', target: '-24% Duration', desc: 'Calendar days required from Stage 1 discovery to signed commercial contract.' },
      { name: 'Administrative Load', target: '< 20% Rep Time', desc: 'Weekly hours spent by quota-carrying reps on non-customer administrative tasks.' },
      { name: 'Stage Dwell Waste', target: '< 7 Days / Gate', desc: 'Inactive waiting time where opportunities sit without scheduled next steps.' },
      { name: 'Customer-Facing Time', target: '> 55% Capacity', desc: 'Proportion of total representative hours invested in direct commercial conversations.' }
    ],
    practicalExample: {
      scenario: 'Enterprise Cloud Infrastructure Provider ($120M ARR)',
      issue: 'Inbound enterprise inquiries waited an average of 34 hours for SDR assignment because leads were manually reviewed from CSV exports and cross-referenced in spreadsheets before Salesforce creation.',
      intervention: 'ProfitMachines applied Lean Value Stream Mapping to eliminate 5 manual inspection gates, deploying instant webhook enrichment and rules-based AE pod routing.',
      outcome: 'Lead response compressed from 34 hours to 4.2 minutes; Discovery-to-Demo conversion increased by 31% within 90 days.'
    }
  },
  {
    id: 'six-sigma',
    number: '02',
    title: 'Six Sigma',
    badge: 'Variance Reduction',
    shortDescription: 'Apply DMAIC statistical rigor to eliminate sales execution variance, standardize qualification thresholds, and eradicate forecast inaccuracies.',
    businessProblem: 'Commercial teams experience dramatic performance variance where top-quartile reps convert at 45% while the bottom quartile converts below 12%. Subjective qualification, inconsistent discovery probing, and erratic discounting erode gross margins and create board forecast surprises.',
    salesApplications: [
      'Objective stage qualification consistency using standardized verification gates.',
      'Elimination of pipeline forecast variance using statistical distribution models.',
      'Proposal and quote error reduction to eliminate pricing rework and margin leakage.',
      'Sales-stage conversion consistency across geographic regions and representative cohorts.',
      'Customer onboarding quality defect tracking preventing early contract cancellation.',
      'Root-cause analysis (Ishikawa fishbone diagrams) on late-stage deal losses.'
    ],
    whatProfitMachinesHelpsImprove: [
      'Forecast predictability bringing quarterly variance consistently below 5%.',
      'Quota attainment distribution lifting middle-60% rep cohort output.',
      'Proposal turnaround accuracy eliminating commercial rework cycles.',
      'Deal qualification rigor preventing low-fit opportunities from absorbing resources.',
      'Gross margin retention through governed pricing tolerance guardrails.'
    ],
    relevantKpis: [
      { name: 'Forecast Error Variance', target: '< 4.5%', desc: 'Variance between Day 1 quarterly commit and final recognized revenue.' },
      { name: 'Stage Conversion Sigma', target: 'Z > 3.8', desc: 'Statistical consistency of stage progression rates across sales teams.' },
      { name: 'Qualification Completeness', target: '98.5%', desc: 'Mandatory buying criteria verified before advancing deals to Stage 3.' },
      { name: 'Proposal Rework Frequency', target: '< 2.0%', desc: 'Proportion of formal proposals rejected due to configuration or calculation errors.' },
      { name: 'Discount Tolerance Adherence', target: '99.1%', desc: 'Proposals executed strictly within authorized commercial pricing boundaries.' }
    ],
    practicalExample: {
      scenario: 'Healthcare Compliance Software Enterprise ($85M ARR)',
      issue: 'Quarterly forecasts missed targets by 26% on average due to reps subjectively marking deals as "Commit" based on optimistic buyer phone conversations without verified budget allocation.',
      intervention: 'Implemented a Six Sigma DMAIC initiative: defined mandatory objective stage-exit criteria (written business case, confirmed budget line, scheduled legal review) and established a control chart monitoring pipeline velocity.',
      outcome: 'Forecast variance collapsed from 26% to 3.8%; pipeline hygiene reduced dead-deal drag by $14M in nominal value.'
    }
  },
  {
    id: 'kaizen',
    number: '03',
    title: 'Kaizen',
    badge: 'Continuous Micro-Optimization',
    shortDescription: 'Build an agile, compounding operating rhythm where sales reps and revenue leaders execute continuous weekly micro-improvements based on live customer interactions and empirical data.',
    businessProblem: 'Organizations wait for annual sales kickoffs or costly multi-year consulting engagements to overhaul sales playbooks. Meanwhile, frontline objection patterns, buyer sentiment shifts, and messaging decay go unaddressed week after week.',
    salesApplications: [
      'Weekly 30-minute sales friction retrospective reviews with frontline reps.',
      'Continuous outreach email subject line and call-script message variant testing.',
      'Meeting preparation checklist refinements based on lost discovery analysis.',
      'Incremental CRM field hygiene improvements reducing rep friction step-by-step.',
      'Rapid objection-handling script updates responding to competitor counter-moves.',
      'Ongoing follow-up cadence timing adjustments linked to open and response telemetry.',
      'Peer-led sales coaching feedback loops institutionalizing top-rep tactics.'
    ],
    whatProfitMachinesHelpsImprove: [
      'Agility in responding to new competitor positioning and objection patterns.',
      'Frontline representative engagement and ownership of sales process standards.',
      'Meeting-to-opportunity qualification ratios through iterative checklist tuning.',
      'Speed of learning cycles from weeks down to daily sprint iterations.',
      'Cumulative compounding gains in outbound conversion and pipeline throughput.'
    ],
    relevantKpis: [
      { name: 'Weekly Kaizen Submissions', target: '> 12 / Pod', desc: 'Frontline process improvement ideas logged and reviewed weekly.' },
      { name: 'Idea Implementation Cycle', target: '< 7 Days', desc: 'Average calendar time from valid suggestion to deployed operational standard.' },
      { name: 'Discovery Conversion Lift', target: '+18% MoM', desc: 'Proportion of completed discovery calls progressing to qualified opportunity.' },
      { name: 'Playbook Adoption Rate', target: '94.0%', desc: 'Percentage of representatives actively utilizing updated cadence templates.' },
      { name: 'Follow-up Cadence Velocity', target: '100% SLA', desc: 'Adherence to automated 24-hour post-meeting follow-up protocols.' }
    ],
    practicalExample: {
      scenario: 'Cybersecurity SaaS Platform ($45M ARR)',
      issue: 'Outbound SDR connection rates dropped 35% following a competitor product launch, with reps struggling to answer a new technical architecture objection during cold calls.',
      intervention: 'Instituted a weekly Friday Kaizen Standup. Identified the objection cluster, tested three counter-responses on Monday, reviewed call recordings on Wednesday, and updated the global dialer playbook by Thursday.',
      outcome: 'Discovery booking rate recovered fully within 10 days and outperformed prior historical benchmarks by 14%.'
    }
  },
  {
    id: 'theory-of-constraints',
    number: '04',
    title: 'Theory of Constraints (TOC)',
    badge: 'Bottleneck Throughput',
    shortDescription: 'Pinpoint the single operational constraint restricting entire pipeline throughput, subordinate all upstream and downstream activities to that choke-point, and systematically elevate capacity.',
    businessProblem: 'Revenue leaders spend millions running marketing campaigns to double lead volume, only for opportunities to pile up and die at technical validation or legal procurement because the constraint was never in demand generation.',
    salesApplications: [
      'Pipeline stage dwell-time heatmapping to locate the current system constraint.',
      'Subordinating marketing lead generation to technical demo capacity limits.',
      'Buffering critical sales engineering resources with pre-qualification filters.',
      'Accelerating contract legal reviews using standardized click-wrap fallbacks.',
      'Elevating executive closing bandwidth with asynchronous video briefings.',
      'Eliminating deal starvation before critical month-end and quarter-end cycles.',
      'Balancing quota allocations based on true constraint capacity rather than wishful targets.'
    ],
    whatProfitMachinesHelpsImprove: [
      'End-to-end pipeline throughput without increasing aggregate headcount.',
      'Resource utilization for scarce senior specialists and sales engineers.',
      'Average deal slip rate caused by late-funnel administrative bottlenecks.',
      'Sales velocity and revenue yield per dollar of marketing capital deployed.',
      'Clarity on exactly where incremental investment will unlock revenue growth.'
    ],
    relevantKpis: [
      { name: 'Bottleneck Dwell Time', target: '-58% Days', desc: 'Average calendar duration opportunities linger at the identified constraint stage.' },
      { name: 'Pipeline Throughput Rate', target: '+35% Velocity', desc: 'Total dollar volume of opportunities successfully converted per month.' },
      { name: 'Blocked Deal Inventory', target: '< 5% Total Value', desc: 'Value of opportunities stalled due to pending internal review or approval.' },
      { name: 'SE Resource Utilization', target: '88% High-Value', desc: 'Hours committed by Sales Engineers exclusively to verified Tier-1 qualified deals.' },
      { name: 'Contract Turnaround Time', target: '< 48 Hours', desc: 'Duration from verbal deal agreement to executable bilateral contract dispatch.' }
    ],
    practicalExample: {
      scenario: 'FinTech Payment Orchestration Platform ($160M ARR)',
      issue: 'Qualified enterprise deals were spending 42 days stuck in "Technical Feasibility Review" because only two senior architects were authorized to scope custom ERP connectors.',
      intervention: 'Applied Goldratt’s 5 Focusing Steps: (1) Identified SE scoping as the constraint, (2) Exploited the constraint by deploying automated connector-scoping templates for standard ERPs, (3) Subordinated reps from requesting reviews without complete API specs, (4) Elevated capacity with dedicated integration playbooks.',
      outcome: 'Technical review cycle plummeted from 42 days to 6 days; overall quarterly revenue throughput rose 41% without hiring additional engineers.'
    }
  },
  {
    id: 'total-quality-management',
    number: '05',
    title: 'Total Quality Management (TQM)',
    badge: 'Customer-Centric Quality',
    shortDescription: 'Unify sales, marketing, solution delivery, and customer success into a synchronized commercial ecosystem where every function takes direct ownership of customer journey quality and retention.',
    businessProblem: 'Siloed departments create fractured customer experiences: marketing promises features that sales does not understand, sales closes deals by over-promising timelines, and delivery inherits mismatched expectations leading to early customer churn.',
    salesApplications: [
      'Establishing cross-functional customer expectation alignment standards.',
      'Customer journey touchpoint quality audits from initial ad to year-two renewal.',
      'Formalized Sales-to-Customer Success handover contracts and onboarding briefs.',
      'Voice-of-Customer (VoC) feedback loops feeding real-time sales discovery training.',
      'Proposal quality assurance checks eliminating scope ambiguity and SLA mismatches.',
      'Shared commercial KPIs linking sales compensation to 90-day retention health.',
      'Root-cause resolution of recurring post-sale implementation friction points.'
    ],
    whatProfitMachinesHelpsImprove: [
      'First-year customer retention and Net Revenue Retention (NRR).',
      'Customer onboarding velocity and time-to-first-value milestone.',
      'Cross-departmental alignment between GTM promises and operational delivery.',
      'Customer satisfaction (CSAT) and Net Promoter Scores (NPS) post-onboarding.',
      'Referral and expansion opportunity generation from satisfied client champions.'
    ],
    relevantKpis: [
      { name: 'Customer Journey CSAT', target: '> 92%', desc: 'Composite satisfaction rating evaluated across discovery, buying, and onboarding.' },
      { name: 'Onboarding Defect Rate', target: '< 1.5%', desc: 'Engagements experiencing scope renegotiation or delayed kickoff.' },
      { name: 'Sales-to-CS Handoff SLA', target: '100% Compliant', desc: 'Standardized dossier dispatched within 24 hours of contract closure.' },
      { name: 'First 90-Day Retention', target: '98.8%', desc: 'Percentage of newly acquired accounts achieving active utilization milestones.' },
      { name: 'Expectation Match Index', target: '> 94%', desc: 'Client confirmation that delivered capabilities match sales demonstration claims.' }
    ],
    practicalExample: {
      scenario: 'B2B Logistics & Supply Chain Software ($95M ARR)',
      issue: 'Customer Success reported a 28% churn rate in months 3-6 because sales reps sold legacy warehouse features that required custom engineering, leaving clients frustrated at kickoff.',
      intervention: 'Instituted TQM cross-functional governance: Customer Success leaders co-designed standard proposal capability checklists, and deal closure required CS sign-off on implementation scope.',
      outcome: 'Implementation scope disputes fell 92%; Year 1 Net Revenue Retention rose from 84% to 118% within four quarters.'
    }
  },
  {
    id: 'operational-excellence',
    number: '06',
    title: 'Operational Excellence',
    badge: 'Scalable RevOps Architecture',
    shortDescription: 'Harmonize people, workflows, data planes, and technology infrastructure to establish a governed, predictable, and scalable Revenue Operations operating model.',
    businessProblem: 'Rapid commercial growth creates operational chaos: disjointed sales tool stacks with 14 different point solutions, undocumented regional sales playbooks, conflicting commission incentives, and zero single-source-of-truth reporting.',
    salesApplications: [
      'Standardized Revenue Operations (RevOps) operating model across all commercial units.',
      'Unified CRM schema architecture eliminating conflicting custom field definitions.',
      'Comprehensive sales playbook documentation and interactive digital SOPs.',
      'Territory optimization and capacity planning backed by data-driven TAM models.',
      'Cross-functional SLA governance between marketing, sales, and account management.',
      'Consolidation of overlapping sales tech subscriptions into a unified stack.',
      'Autonomous reporting pipelines replacing manual spreadsheet aggregation.'
    ],
    whatProfitMachinesHelpsImprove: [
      'Revenue predictability and scalability as headcount expands into new territories.',
      'Operational cost efficiency per dollar of pipeline generated.',
      'Speed of ramping new commercial representatives to full quota productivity.',
      'Data integrity across enterprise systems of record (CRM, Billing, ERP).',
      'Executive visibility into live pipeline health, conversion, and CAC payback.'
    ],
    relevantKpis: [
      { name: 'Rep Ramp Time', target: '< 45 Days', desc: 'Calendar days required for new sales hires to achieve 100% quota pace.' },
      { name: 'Process Standard Compliance', target: '99.0%', desc: 'Adherence to documented sales stages, required attachments, and approval chains.' },
      { name: 'Tech Stack Cost per Rep', target: '-28% Efficiency', desc: 'Rationalized software licensing overhead through consolidated RevTech stacks.' },
      { name: 'CRM Completeness Index', target: '> 96%', desc: 'Automated audit score measuring mandatory field completion and data hygiene.' },
      { name: 'Revenue per Employee', target: '+32% Productivity', desc: 'Annualized net revenue divided by total sales and commercial operations headcount.' }
    ],
    practicalExample: {
      scenario: 'Global EdTech Enterprise ($210M ARR across 4 Continents)',
      issue: 'Regional sales offices in North America, EMEA, and APAC operated distinct CRMs with different stage definitions, preventing global leadership from accurately measuring pipeline or consolidating forecasts.',
      intervention: 'ProfitMachines designed a global Operational Excellence framework: established a single Salesforce schema, standardized 5 universal pipeline stages, unified territory allocation rules, and instituted global weekly RevOps review cadences.',
      outcome: 'Global forecast variance decreased by 74%; international sales expansion ramped 2.4X faster across new regional pods.'
    }
  },
  {
    id: 'baldrige-framework',
    number: '07',
    title: 'Baldrige Performance Excellence Framework',
    badge: 'Holistic Organizational Maturity',
    shortDescription: 'Deploy a systemic organizational diagnostic evaluating how Leadership, Strategy, Customers, Measurement, Workforce, and Operations synthesize into sustainable commercial competitiveness.',
    businessProblem: 'Organizations obsess over short-term quarterly revenue numbers while ignoring the structural health of their commercial engine: decaying sales culture, disconnected strategic communication, obsolete compensation plans, and blind measurement systems that lead to sudden performance collapse.',
    salesApplications: [
      'Comprehensive 7-dimension diagnostic of enterprise commercial competitiveness.',
      'GTM strategy alignment connecting board goals to frontline daily sales quotas.',
      'Voice-of-the-Customer knowledge management feeding proactive product strategy.',
      'Balanced Scorecard revenue measurement integrating leading and lagging indicators.',
      'Sales workforce capability development, compensation alignment, and retention.',
      'Core sales operational process standard reviews across regional business units.',
      'Systematic performance benchmark comparisons against top-decile industry peers.'
    ],
    whatProfitMachinesHelpsImprove: [
      'Long-term sustainability and resilience of enterprise revenue generation.',
      'Strategic alignment ensuring frontline sales motions deliver executive board intent.',
      'Sales talent retention, leadership development, and bench-strength depth.',
      'Maturity of business intelligence and customer knowledge repositories.',
      'Cross-functional execution discipline across the entire revenue leadership team.'
    ],
    relevantKpis: [
      { name: 'Strategic Alignment Score', target: '> 90%', desc: 'Percentage of sales reps who accurately state and execute corporate target priorities.' },
      { name: 'Sales Workforce Retention', target: '> 88% Annual', desc: 'Voluntary turnover rate among quota-attaining enterprise commercial representatives.' },
      { name: 'Knowledge Repository Index', target: '> 92%', desc: 'Accessibility and active utilization of competitive intelligence and battlecards.' },
      { name: 'Balanced Scorecard Health', target: '94/100', desc: 'Composite metric tracking Financial, Customer, Internal Process, and Growth health.' },
      { name: 'Operational Audit Score', target: 'Tier-1 Certified', desc: 'Third-party assessment rating enterprise commercial management maturity.' }
    ],
    practicalExample: {
      scenario: 'Industrial Automation & Robotics Manufacturer ($380M Global Revenue)',
      issue: 'Despite hitting current year targets, the commercial division suffered 32% top-rep turnover, sales engineers felt alienated from leadership, and customer satisfaction surveys showed deteriorating relationship scores.',
      intervention: 'Conducted a Baldrige-aligned Organizational Performance Assessment across all 7 dimensions. Re-engineered executive communication, aligned compensation with customer lifetime value, upgraded workforce enablement, and modernized pipeline data transparency.',
      outcome: 'Rep turnover fell to 7%; customer relationship NPS rose 28 points; sustainable multi-year contract renewals surged 44%.'
    }
  },
  {
    id: 'efqm-excellence-model',
    number: '08',
    title: 'EFQM Excellence Model',
    badge: 'Sustainable Transformation',
    shortDescription: 'Anchor commercial improvement in an interconnected Direction, Execution, and Results management framework to ensure transformative sales initiatives deliver enduring stakeholder value.',
    businessProblem: 'Sales transformation programs frequently fail within 12 months because they are treated as tactical CRM implementations without engaging stakeholder perceptions, aligning corporate purpose, or establishing sustainable transformation governance.',
    salesApplications: [
      'Strategic alignment connecting corporate purpose and vision to sales execution.',
      'Multi-stakeholder value mapping: customers, employees, partners, and shareholders.',
      'Sales transformation program governance ensuring milestones deliver verified value.',
      'Comprehensive perception auditing evaluating how buyers actually experience the sales cycle.',
      'Organizational culture and leadership coaching for commercial executives.',
      'Continuous benchmarking of commercial operating maturity against world-class standards.',
      'Balancing short-term quota pressures with long-term brand equity and customer trust.'
    ],
    whatProfitMachinesHelpsImprove: [
      'Success rate and durability of enterprise sales transformation initiatives.',
      'Coherence between executive strategic vision and daily frontline commercial execution.',
      'Stakeholder trust and Net Promoter Score across enterprise buying committees.',
      'Long-term enterprise valuation multiple driven by predictable revenue retention.',
      'Ecosystem collaboration between internal sales teams and external channel partners.'
    ],
    relevantKpis: [
      { name: 'Transformation Milestone SLA', target: '100% On-Time', desc: 'Execution progress against enterprise commercial modernization roadmap.' },
      { name: 'Buyer Perception Index', target: '> 91%', desc: 'External stakeholder assessment of consultative value delivered during sales cycle.' },
      { name: 'Revenue Plan Attainment', target: '102.4%', desc: 'Consistency of recognized commercial revenue against 3-year strategic plan.' },
      { name: 'Transformation Adoption', target: '> 95%', desc: 'Verified behavioral adoption of modernized sales methodologies across teams.' },
      { name: 'Stakeholder Trust Score', target: '> 90%', desc: 'Cross-functional perception rating of commercial leadership integrity and delivery.' }
    ],
    practicalExample: {
      scenario: 'Enterprise Professional Services & Advisory Firm ($250M ARR)',
      issue: 'A 2-year digital transformation aimed at transitioning 400 consulting partners to consultative software-and-services selling stalled due to partner skepticism, vague strategic direction, and lack of stakeholder engagement.',
      intervention: 'Deployed the EFQM framework (Direction, Execution, Results): redefined the shared commercial purpose with partner councils, linked transformation milestones to firm equity bonuses, and instituted rigorous stakeholder feedback loops.',
      outcome: 'Partner transformation adoption surged from 28% to 94%; blended software-and-services deal size expanded by 62% in 18 months.'
    }
  }
];

// ── METHODOLOGY COMPARISON TABLE DATA ──
export const METHODOLOGY_COMPARISONS = [
  {
    name: 'Lean Sales',
    focus: 'Waste and Process Delays',
    bestUsedWhen: 'Sales workflows contain unnecessary manual tasks, repeated data entry, or slow response handoffs.',
    salesOutcome: 'Faster, simpler execution and +40% rep customer-facing time.',
    keyMetric: 'Lead Response Time & Admin Load'
  },
  {
    name: 'Six Sigma',
    focus: 'Variation and Process Defects',
    bestUsedWhen: 'Conversion performance differs wildly across reps and quarterly forecasts suffer variance.',
    salesOutcome: 'Highly predictable conversion, reduced discounting, and accurate forecasts.',
    keyMetric: 'Forecast Error & Stage Conversion Sigma'
  },
  {
    name: 'Kaizen',
    focus: 'Incremental Micro-Improvements',
    bestUsedWhen: 'Teams identify recurring weekly friction points but lack a cadence to log and resolve them.',
    salesOutcome: 'Agile adaptation to market shifts and weekly compounding productivity gains.',
    keyMetric: 'Idea Implementation Speed & Cadence Lift'
  },
  {
    name: 'Theory of Constraints',
    focus: 'Bottlenecks & Choke-Points',
    bestUsedWhen: 'Leads are plentiful but deals consistently stall at one stage (e.g. SE demo, Legal, Approvals).',
    salesOutcome: 'Maximized pipeline throughput and elimination of deal starvation.',
    keyMetric: 'Constraint Dwell Time & Overall Throughput'
  },
  {
    name: 'Total Quality Management',
    focus: 'Customer-Centric Quality',
    bestUsedWhen: 'Marketing, sales, and delivery operate in silos, causing customer expectation mismatches.',
    salesOutcome: 'Seamless customer journey, reduced early churn, and higher Net Revenue Retention.',
    keyMetric: 'Customer Journey CSAT & 90-Day Retention'
  },
  {
    name: 'Operational Excellence',
    focus: 'Operating Model & System Scale',
    bestUsedWhen: 'Disjointed tools, conflicting incentives, and lack of standardized global sales SOPs.',
    salesOutcome: 'Scalable RevOps architecture, fast rep onboarding, and unified single source of truth.',
    keyMetric: 'Rep Ramp Time & Standard Compliance'
  },
  {
    name: 'Baldrige Framework',
    focus: 'Holistic Organizational Maturity',
    bestUsedWhen: 'Leadership practices, workforce culture, and operating systems need systemic evaluation.',
    salesOutcome: 'Deep organizational alignment, low rep turnover, and resilient multi-year growth.',
    keyMetric: 'Balanced Scorecard & Strategic Alignment'
  },
  {
    name: 'EFQM Excellence Model',
    focus: 'Sustainable Transformation',
    bestUsedWhen: 'Multi-year commercial transformation programs risk failure due to lack of stakeholder buy-in.',
    salesOutcome: 'Enduring stakeholder trust, coherent strategic execution, and enterprise value lift.',
    keyMetric: 'Transformation Milestones & Buyer Trust'
  }
];

// ── 7-STAGE CONTINUOUS IMPROVEMENT OPERATING MODEL ──
export const OPERATING_MODEL_STAGES = [
  {
    number: '01',
    name: 'Discover',
    tagline: 'Establish Commercial Context',
    description: 'Understand the business model, commercial objectives, target buyer dynamics, current sales motion, and documented pain points across the revenue lifecycle.',
    deliverables: ['Business Context Assessment', 'Revenue Objectives Map', 'Sales Process Flowchart', 'Executive Problem Statement']
  },
  {
    number: '02',
    name: 'Measure',
    tagline: 'Capture Empirical Baseline Data',
    description: 'Extract raw performance telemetry across CRM, marketing automation, email cadences, and finance ledgers to establish an incontrovertible empirical baseline.',
    deliverables: ['KPI Baseline Scorecard', 'Stage-by-Stage Conversion Funnel', 'Rep Output Distribution Curve', 'Data Hygiene Audit Report']
  },
  {
    number: '03',
    name: 'Diagnose',
    tagline: 'Pinpoint Root Causes & Constraints',
    description: 'Apply statistical analysis, value stream mapping, and constraint discovery to isolate exactly where and why deals stall, leak, or fail to convert.',
    deliverables: ['Root-Cause Ishikawa Map', 'Pipeline Bottleneck Analysis', 'Process Friction Register', 'Variance & Waste Catalogue']
  },
  {
    number: '04',
    name: 'Prioritize',
    tagline: 'Rank by Revenue Impact vs Feasibility',
    description: 'Score candidate improvement initiatives using an empirical Impact vs Effort matrix, structuring a phased implementation roadmap with clear executive ownership.',
    deliverables: ['Prioritized Initiatives Matrix', '12-Month Improvement Roadmap', 'Owner & Stakeholder RACI Matrix', 'Target Return & Success Metrics']
  },
  {
    number: '05',
    name: 'Improve',
    tagline: 'Redesign, Automate & Enable',
    description: 'Redesign sales workflows, configure automated routing and CRM triggers, establish standardized qualification playbooks, and train commercial teams.',
    deliverables: ['Modernized Workflow Playbooks', 'Updated Standard Operating Procedures', 'RevTech Automation Configurations', 'Frontline Enablement Curriculum']
  },
  {
    number: '06',
    name: 'Validate',
    tagline: 'Verify Statistical KPI Movement',
    description: 'Compare post-intervention performance telemetry against the original baseline using statistical control charts to prove verified commercial lift.',
    deliverables: ['Before-and-After KPI Comparison', 'Statistical Significance Report', 'Methodology Adoption Audit', 'Lessons Learned & Edge Cases']
  },
  {
    number: '07',
    name: 'Sustain',
    tagline: 'Institutionalize Governance Cadence',
    description: 'Embed weekly Kaizen standups, monthly RevOps telemetry reviews, and continuous improvement backlogs to ensure operational gains compound permanently.',
    deliverables: ['Governance Rhythm Calendar', 'Continuous Improvement Backlog', 'SLA Exception Monitoring Alerts', 'Next-Horizon Constraint Priorities']
  }
];

// ── 5 ADVANCED SALES IMPROVEMENT METRIC GROUPS ──
export const METRIC_GROUPS = [
  {
    category: 'Sales Efficiency',
    description: 'Quantifying time economy, workflow velocity, and the elimination of wasted manual effort.',
    metrics: [
      {
        name: 'Sales Cycle Length (SCL)',
        formula: 'SCL = Σ(ClosedDate - CreatedDate) / TotalClosedDeals',
        meaning: 'The average number of elapsed calendar days required to progress a deal from first touch to closed-won.',
        whyItMatters: 'Shorter sales cycles dramatically increase annual deal throughput per rep without requiring headcount expansion.',
        howMeasured: 'Computed directly from CRM timestamp logs filtered for won enterprise opportunities.',
        decisionSupported: 'Determines whether qualification criteria are effectively weeding out protracted non-buyers early.'
      },
      {
        name: 'Lead Response Time (LRT)',
        formula: 'LRT = TimestampFirstRepTouch - TimestampFormSubmission',
        meaning: 'Elapsed time from when a prospective buyer submits an inbound request to verified commercial contact.',
        whyItMatters: 'Lead conversion drops by 391% when response latency extends beyond 5 minutes versus instantaneous engagement.',
        howMeasured: 'Automated webhook telemetry linking web forms, marketing automation, and rep email/dialer logs.',
        decisionSupported: 'Informs whether inbound lead routing should be shifted from manual pools to automated direct scheduling.'
      },
      {
        name: 'Active Selling Time Ratio (ASTR)',
        formula: 'ASTR = (WeeklyCustomerFacingHours / TotalWeeklyHours) * 100',
        meaning: 'The percentage of a representative’s weekly working hours spent in direct commercial engagement with buyers.',
        whyItMatters: 'Every 5% lift in customer-facing time typically generates an 8–12% increase in quota attainment.',
        howMeasured: 'Calendar and call-telemetry analytics matched against self-reported time allocations.',
        decisionSupported: 'Guides administrative task automation and CRM data-entry simplification initiatives.'
      },
      {
        name: 'Administrative Workload Hours',
        formula: 'TotalHours - (SellingHours + CoachingHours + StrategicResearchHours)',
        meaning: 'Hours spent updating records, filling out internal spreadsheets, and chasing approvals.',
        whyItMatters: 'High administrative drag is the primary cause of representative burnout and top-talent voluntary turnover.',
        howMeasured: 'Workforce activity logging and RevOps system interaction audits.',
        decisionSupported: 'Prioritizes which CRM fields and internal approval gates should be pruned or automated.'
      },
      {
        name: 'Cost Per Opportunity (CPO)',
        formula: 'CPO = TotalGtmExpenditure / TotalStage2OpportunitiesGenerated',
        meaning: 'Total marketing and sales overhead invested to produce one verified stage-2 sales opportunity.',
        whyItMatters: 'Establishes whether top-of-funnel customer acquisition remains economically viable against target ACV.',
        howMeasured: 'Finance ledgers divided by CRM qualified opportunity counts over trailing-twelve-months.',
        decisionSupported: 'Reallocates marketing budget toward channels delivering higher sales-qualification efficiency.'
      }
    ]
  },
  {
    category: 'Pipeline Performance',
    description: 'Evaluating pipeline health, stage-to-stage conversion predictability, and leakage points.',
    metrics: [
      {
        name: 'Stage-by-Stage Conversion Rate',
        formula: 'Conversion = (DealsAdvancingToNextStage / DealsInStage) * 100',
        meaning: 'The percentage of opportunities in a specific pipeline stage that successfully advance to the next.',
        whyItMatters: 'Isolates the exact operational fault lines where deals stall or fall out of the sales process.',
        howMeasured: 'CRM stage transition history reports over trailing 90-day intervals.',
        decisionSupported: 'Pinpoints whether sales enablement should target discovery, technical demos, or contract negotiation.'
      },
      {
        name: 'Opportunity Stage Dwell Time',
        formula: 'AverageDaysInStage = Σ(DaysOpportunityInStage) / TotalDealsInStage',
        meaning: 'The average calendar days an active opportunity spends residing within a specific pipeline stage.',
        whyItMatters: 'Deals lingering beyond 1.5x the historical stage average experience an 80% drop in ultimate win probability.',
        howMeasured: 'CRM longitudinal date-stamps tracking entry and exit timestamps per opportunity.',
        decisionSupported: 'Enforces automatic pipeline hygiene rules to purge inactive or stalled deals from forecast commits.'
      },
      {
        name: 'Pipeline Coverage Multiple',
        formula: 'Coverage = TotalWeightedPipelineValue / PeriodicQuotaTarget',
        meaning: 'The ratio between qualified active pipeline and the required commercial revenue quota.',
        whyItMatters: 'Guarantees that sales organizations maintain sufficient pipeline inventory to absorb historical loss rates.',
        howMeasured: 'Live CRM pipeline snapshots divided by board revenue targets for the current quarter.',
        decisionSupported: 'Signals whether sales managers need to accelerate outbound prospecting or focus on closing active deals.'
      },
      {
        name: 'Pipeline Leakage Rate',
        formula: 'Leakage = (ClosedLostDollarVolume / TotalPipelineValue) * 100',
        meaning: 'The proportion of total pipeline dollar value that exits the funnel as closed-lost or disqualified.',
        whyItMatters: 'Identifies systemic patterns in lost revenue: pricing pushback, competitor displacement, or poor qualification.',
        howMeasured: 'CRM closed-lost audits categorized by mandatory disposition reason codes.',
        decisionSupported: 'Triggers competitive battlecard revisions or ICP qualification threshold adjustments.'
      },
      {
        name: 'Qualified Pipeline Creation Velocity',
        formula: 'Velocity = MonthlyQualifiedNewARRAdded',
        meaning: 'Net new qualified enterprise pipeline dollars generated and verified within a 30-day operating period.',
        whyItMatters: 'The single most reliable leading indicator of future recognized revenue 2–3 quarters out.',
        howMeasured: 'Stage-2 verified opportunity value logged during the calendar month.',
        decisionSupported: 'Validates whether new marketing campaigns and outbound SDR cadences are delivering qualified traction.'
      }
    ]
  },
  {
    category: 'Revenue Performance',
    description: 'Tracking financial outcomes, forecast accuracy, and representative quota equity.',
    metrics: [
      {
        name: 'Quota Attainment Distribution',
        formula: 'AttainmentRate = (ActualClosedArr / AnnualizedQuotaTarget) * 100',
        meaning: 'The percentage of reps achieving 100%+ of quota, and the shape of the performance bell curve.',
        whyItMatters: 'Healthy organizations see 65%+ of reps at or above quota rather than relying on 2 "hero reps" to carry the team.',
        howMeasured: 'Sales compensation reporting reconciled against verified finance billing records.',
        decisionSupported: 'Identifies whether quota structures, territory allocations, or enablement programs need restructuring.'
      },
      {
        name: 'Win Rate on Qualified Pipeline',
        formula: 'WinRate = (ClosedWonDeals / TotalClosedDealsStage2Plus) * 100',
        meaning: 'The percentage of verified, qualified opportunities that successfully culminate in signed customer contracts.',
        whyItMatters: 'Direct indicator of sales execution quality, value articulation, and competitive differentiation.',
        howMeasured: 'CRM win/loss reports excluding top-of-funnel unqualified marketing leads.',
        decisionSupported: 'Informs whether sales training should focus on objection handling, executive negotiation, or ROI modeling.'
      },
      {
        name: 'Average Selling Price (ASP / ACV)',
        formula: 'ASP = TotalClosedWonArr / NumberOfWonDeals',
        meaning: 'The mean annual contract value across newly acquired commercial customer relationships.',
        whyItMatters: 'Expanding ASP is often the fastest path to revenue acceleration without scaling operational costs linearly.',
        howMeasured: 'Billing records of newly executed annual contracts divided by account count.',
        decisionSupported: 'Determines whether sales reps are effectively multi-threading and cross-selling enterprise solution tiers.'
      },
      {
        name: 'Forecast Accuracy Variance',
        formula: 'Variance = (|RecognizedRevenue - Day1CommitForecast| / Day1CommitForecast) * 100',
        meaning: 'The percentage discrepancy between executive commit at start-of-quarter and actual recognized revenue.',
        whyItMatters: 'Predictable forecasting is vital for board confidence, capital allocation, and public market valuation.',
        howMeasured: 'Historical snapshot analysis comparing week-1 commit records with final finance ledger close.',
        decisionSupported: 'Highlights whether sales managers are allowing subjective optimism to corrupt forecast governance.'
      },
      {
        name: 'Revenue per Sales Representative',
        formula: 'RPR = TotalAnnualRecognizedRevenue / TotalQuotaCarryingFTEs',
        meaning: 'The average annual commercial revenue generated per quota-carrying sales professional.',
        whyItMatters: 'The primary benchmark of sales organization productivity and unit economic health.',
        howMeasured: 'Annual company GAAP revenue divided by full-time equivalent quota-carrying headcount.',
        decisionSupported: 'Dictates optimal headcount hiring plans and territory expansion economics.'
      }
    ]
  },
  {
    category: 'Customer Performance',
    description: 'Evaluating post-sale value delivery, onboarding speed, and long-term commercial retention.',
    metrics: [
      {
        name: 'Net Revenue Retention (NRR)',
        formula: 'NRR = ((StartingARR + Expansions - Contractions - Churn) / StartingARR) * 100',
        meaning: 'Percentage of recurring revenue retained from existing customers over a 12-month period including expansion.',
        whyItMatters: 'NRR > 115% ensures compounding enterprise growth even if new customer acquisition decelerates.',
        howMeasured: 'Finance cohort ledgers tracking account expansion and renewal ARR over 12 months.',
        decisionSupported: 'Validates whether sales teams are selling to the right ICP accounts with genuine long-term value fit.'
      },
      {
        name: 'Time-to-First-Value (TTFV)',
        formula: 'TTFV = TimestampFirstCoreMilestone - TimestampContractSign',
        meaning: 'Calendar days required for a newly signed customer to achieve their first documented operational milestone.',
        whyItMatters: 'Fast TTFV is the single greatest predictor of contract renewal, expansion velocity, and client advocacy.',
        howMeasured: 'Customer Success milestone tracking verified in customer onboarding platforms.',
        decisionSupported: 'Triggers interventions in sales-to-delivery handoff briefs to ensure implementation readiness.'
      },
      {
        name: 'Onboarding CSAT / NPS',
        formula: 'CSAT = (PositiveSurveyResponses / TotalSurveyResponses) * 100',
        meaning: 'Customer satisfaction rating captured immediately following the completion of initial onboarding kickoff.',
        whyItMatters: 'Captures whether sales promises aligned perfectly with initial product and service delivery reality.',
        howMeasured: 'Automated post-onboarding voice-of-customer surveys administered at Day 30 and Day 60.',
        decisionSupported: 'Identifies whether sales reps are over-promising technical capabilities during commercial negotiations.'
      },
      {
        name: 'Early Warning Churn Probability',
        formula: 'Algorithmic composite: LoginFrequency + FeatureUsage + SupportTickets + CSMEngagement',
        meaning: 'Predictive score identifying accounts at risk of non-renewal 6–9 months prior to contract expiration.',
        whyItMatters: 'Allows revenue teams to intervene proactively to restore account health before renewal negotiations begin.',
        howMeasured: 'Product telemetry and CRM account engagement signals fed into predictive risk models.',
        decisionSupported: 'Deploys specialized customer success interventions and executive sponsor check-ins.'
      },
      {
        name: 'Customer Expansion Lead Velocity',
        formula: 'ExpansionPipelineARR = TotalValueIdentifiedCrossSellUpsellOpportunities',
        meaning: 'Dollar value of new expansion and cross-sell pipeline generated within the existing installed customer base.',
        whyItMatters: 'Acquiring expansion revenue from existing accounts costs 4–6X less than acquiring new logos.',
        howMeasured: 'CRM pipeline reports filtered for "Existing Account Expansion" opportunity record types.',
        decisionSupported: 'Guides dedicated Account Management compensation plans and customer marketing campaigns.'
      }
    ]
  },
  {
    category: 'Improvement Performance',
    description: 'Measuring whether continuous improvement initiatives are actively compounding over time.',
    metrics: [
      {
        name: 'Improvement Initiative Adoption Rate',
        formula: 'Adoption = (RepsComplyingWithNewStandard / TotalTargetReps) * 100',
        meaning: 'The percentage of sales representatives actively executing updated playbooks and operating procedures.',
        whyItMatters: 'Process redesigns deliver zero commercial value if frontline teams revert to legacy undisciplined habits.',
        howMeasured: 'Automated CRM field audits and conversation intelligence call scorecards.',
        decisionSupported: 'Directs sales management coaching focus and reinforcement training priorities.'
      },
      {
        name: 'Mean Time to Resolve Friction (MTTRF)',
        formula: 'MTTRF = Σ(ResolutionDate - IdentificationDate) / TotalResolvedIssues',
        meaning: 'Average calendar days required to identify an operational sales friction point and deploy a verified fix.',
        whyItMatters: 'High operational agility separates high-performing revenue organizations from rigid, slow competitors.',
        howMeasured: 'RevOps continuous improvement backlog issue tracking timestamps.',
        decisionSupported: 'Assesses whether RevOps engineering bandwidth is adequately resourced to support sales velocity.'
      },
      {
        name: 'Sustained Performance Yield Ratio',
        formula: 'Yield = PostInterventionKPI_Month6 / PostInterventionKPI_Month1',
        meaning: 'Evaluating whether commercial performance improvements maintain or accelerate 6 months post-deployment.',
        whyItMatters: 'Protects organizations against the "Hawthorne Effect" where performance temporarily spikes then decays.',
        howMeasured: 'Longitudinal telemetry tracking core metrics over 6, 12, and 18 months.',
        decisionSupported: 'Determines whether an operating standard has become permanent culture or requires re-anchoring.'
      },
      {
        name: 'Kaizen Implementation Velocity',
        formula: 'Velocity = MonthlyVerifiedFrontlineImprovementsDeployed',
        meaning: 'The number of frontline employee improvement ideas tested and institutionalized into standard playbooks monthly.',
        whyItMatters: 'Reflects a genuine culture of continuous micro-optimization versus passive compliance.',
        howMeasured: 'Logged entries in the shared Kaizen improvement register with verified before-after data.',
        decisionSupported: 'Recognizes and rewards frontline representatives who actively optimize commercial operations.'
      },
      {
        name: 'Process Compliance Score',
        formula: 'Compliance = (MandatoryStageFieldsCompletedAccurately / TotalRequiredFields) * 100',
        meaning: 'Audit score measuring adherence to standardized CRM pipeline stages, required attachments, and exit criteria.',
        whyItMatters: 'Clean, compliant process data is the prerequisite for all predictive analytics, forecasting, and AI enablement.',
        howMeasured: 'Automated weekly pipeline hygiene scripts auditing every active opportunity in the CRM.',
        decisionSupported: 'Prevents non-compliant deals from advancing in pipeline reviews and forecast commit calls.'
      }
    ]
  }
];

// ── INTERACTIVE DIAGNOSTIC CHALLENGES DATA ──
export const DIAGNOSTIC_CHALLENGES = [
  {
    id: 'slow-lead-response',
    title: 'Slow Inbound Lead Response Time',
    problem: 'Inbound requests wait hours or days for SDR review, causing buyers to evaluate competitors first.',
    primaryMethodology: 'Lean Sales',
    supportingMethodology: 'Theory of Constraints',
    diagnosticQuestions: [
      'What is your median elapsed time from form fill to first personalized commercial touch?',
      'How many manual review steps or spreadsheet exports occur before a lead is assigned?',
      'Are high-fit enterprise leads routed instantly to dedicated account directors or pooled with low-intent SMB inquiries?'
    ],
    recommendedMeasurements: [
      'Lead Response Time (LRT) in minutes',
      'Inbound Form-to-Meeting conversion percentage',
      'Lead decay half-life curve'
    ],
    suggestedNextSteps: [
      'Eliminate batch CSV exports; implement instant webhook triggers from forms to CRM.',
      'Deploy automated calendar drop tools for high-tier ICP accounts.',
      'Establish a strict 5-minute SLA with automated escalation alerts to sales managers.'
    ]
  },
  {
    id: 'inconsistent-conversion',
    title: 'Inconsistent Rep Conversion & Forecasting Errors',
    problem: 'Top reps win 40%+ while the middle cohort struggles below 15%; quarterly forecasts repeatedly miss board targets.',
    primaryMethodology: 'Six Sigma',
    supportingMethodology: 'Operational Excellence',
    diagnosticQuestions: [
      'Are pipeline stages defined by subjective rep feelings or by verifiable objective buyer actions?',
      'What is the standard deviation in win rates across different representative cohorts in the same territory?',
      'Are deals advanced to Stage 3 without confirmed written budget authorization and executive alignment?'
    ],
    recommendedMeasurements: [
      'Forecast Accuracy Variance (< 5% benchmark)',
      'Stage Conversion Sigma (Z-score variation across reps)',
      'Stage 3 qualification completeness index'
    ],
    suggestedNextSteps: [
      'Deploy the DMAIC framework to define mandatory verifiable stage-exit criteria.',
      'Replace manual rep commit calls with empirical pipeline velocity scoring.',
      'Institute weekly pipeline inspection audits using standardized qualification scorecards.'
    ]
  },
  {
    id: 'pipeline-bottlenecks',
    title: 'Opportunities Stalled at Specific Pipeline Stages',
    problem: 'Qualified deals build up at technical validation, proposal pricing, or legal review, dragging out cycle times.',
    primaryMethodology: 'Theory of Constraints (TOC)',
    supportingMethodology: 'Lean Sales',
    diagnosticQuestions: [
      'Which specific pipeline stage exhibits the longest median dwell time across your sales funnel?',
      'Are scarce technical resources (Solutions Engineers/Architects) forced to demo to unqualified tire-kickers?',
      'Do custom pricing requests sit in executive email inboxes waiting for manual margin approval?'
    ],
    recommendedMeasurements: [
      'Opportunity Stage Dwell Time in calendar days',
      'Blocked deal inventory dollar value',
      'Constraint throughput velocity per week'
    ],
    suggestedNextSteps: [
      'Identify the exact constraint stage using longitudinal CRM dwell-time heatmaps.',
      'Subordinate upstream sales motions: require completed technical criteria before scheduling demo resources.',
      'Elevate capacity by standardizing CPQ discounting rules and automated fallback contract clauses.'
    ]
  },
  {
    id: 'poor-handoffs',
    title: 'Poor Sales-to-Delivery Customer Handoffs',
    problem: 'Customers complain about broken promises at kickoff; implementation delays cause early churn and margin erosion.',
    primaryMethodology: 'Total Quality Management (TQM)',
    supportingMethodology: 'Kaizen',
    diagnosticQuestions: [
      'Is there a formal written handover brief signed off by both the AE and Customer Success Manager within 24 hours of closing?',
      'Do sales representatives sell custom engineering features that product and operations cannot deliver?',
      'What is your client satisfaction (CSAT) rating captured at the 30-day post-kickoff milestone?'
    ],
    recommendedMeasurements: [
      'Onboarding Defect Rate (< 2% target)',
      'Sales-to-CS Handoff SLA compliance percentage',
      'First 90-Day customer retention and active usage'
    ],
    suggestedNextSteps: [
      'Implement a mandatory standardized digital handover contract requiring joint AE/CSM review before commission lock.',
      'Align sales compensation with 90-day onboarding completion and customer satisfaction.',
      'Institute bi-weekly post-onboarding retrospective reviews to identify and fix recurring delivery gaps.'
    ]
  },
  {
    id: 'manual-admin-work',
    title: 'Excessive Administrative Drag on Reps',
    problem: 'Reps spend over 60% of their working hours updating databases, compiling quotes, and hunting down collaterals.',
    primaryMethodology: 'Lean Sales',
    supportingMethodology: 'Operational Excellence',
    diagnosticQuestions: [
      'How many distinct software tools must a representative interact with to create and dispatch a single proposal?',
      'Do reps manually type call notes and contact details that could be captured ambiently via conversation intelligence?',
      'How many mandatory CRM fields are required at Stage 1 versus later closing stages?'
    ],
    recommendedMeasurements: [
      'Active Selling Time Ratio (ASTR > 50% target)',
      'Weekly administrative workload hours per representative',
      'Proposal creation cycle time'
    ],
    suggestedNextSteps: [
      'Prune unnecessary CRM fields; retain only data points that actively drive business decisions.',
      'Deploy conversation intelligence integrations to automatically log meeting notes, action items, and contacts.',
      'Streamline quoting with 1-click CPQ templates and pre-approved discounting thresholds.'
    ]
  },
  {
    id: 'disjointed-operating-model',
    title: 'Disjointed Tools, Processes, and Territory Chaos',
    problem: 'Regional teams follow conflicting playbooks, sales technology subscriptions are fragmented, and data lacks single truth.',
    primaryMethodology: 'Operational Excellence',
    supportingMethodology: 'Baldrige Framework',
    diagnosticQuestions: [
      'Does your organization possess a single documented global sales operating model, or do regions improvise their own?',
      'How many overlapping sales software licenses are currently deployed across business units?',
      'Can executive leadership access real-time consolidated pipeline reporting without relying on manual spreadsheets?'
    ],
    recommendedMeasurements: [
      'Sales process standard compliance percentage',
      'Representative ramp time to full quota productivity',
      'Revenue Operations software cost efficiency per representative'
    ],
    suggestedNextSteps: [
      'Consolidate regional CRM instances into a unified global schema with universal stage definitions.',
      'Publish standardized digital sales playbooks with explicit stage gates and required assets.',
      'Audit the RevTech stack to eliminate redundant point tools and integrate data planes.'
    ]
  }
];

// ── 10 PRACTICAL CONTINUOUS IMPROVEMENT TOOLS ──
export const PRACTICAL_TOOLS = [
  {
    name: 'Sales Process Value Stream Mapping Template',
    description: 'Visual framework to map every step from lead intake to closed contract, categorizing actions into Value-Add, Business Non-Value-Add, and Pure Waste.',
    audience: 'Chief Revenue Officers, VPs of Sales Ops, Transformation Leads',
    whenToUse: 'When sales cycles are elongating and reps complain of excessive administrative drag.',
    actionLabel: 'Preview Mapping Framework',
    deliverable: 'Complete Value Stream Map highlighting process wait times and handoff defects.'
  },
  {
    name: 'Sales Waste (Muda) Identification Checklist',
    description: 'Practical diagnostic checklist identifying the 7 deadly wastes in commercial sales: Over-qualification, Waiting time, Transport delays, Over-processing, Inventory buildup, Unnecessary motion, and Defect rework.',
    audience: 'Frontline Sales Managers, Sales Directors, RevOps Specialists',
    whenToUse: 'During quarterly operational reviews to audit representative workflow friction.',
    actionLabel: 'View 7-Waste Checklist',
    deliverable: 'Quantified Friction Scorecard prioritizing top 5 non-value-add tasks for elimination.'
  },
  {
    name: 'DMAIC Sales Improvement Project Worksheet',
    description: 'Structured 5-phase project management charter for executing Six Sigma sales variance and forecasting improvement initiatives.',
    audience: 'Revenue Operations Managers, Continuous Improvement Champions',
    whenToUse: 'When pipeline conversion rates or board forecast variances show unacceptable fluctuation.',
    actionLabel: 'Inspect DMAIC Charter',
    deliverable: 'Formal DMAIC project charter with defined problem statement, baseline, and control plan.'
  },
  {
    name: 'Frontline Kaizen Sales Improvement Register',
    description: 'Agile team backlog tracking micro-optimization ideas submitted by sales reps, status of testing, verified metric impact, and rollout dates.',
    audience: 'Sales Team Leads, Account Executives, SDR Managers',
    whenToUse: 'During weekly 30-minute sales friction standups to manage continuous optimization ideas.',
    actionLabel: 'Access Kaizen Register',
    deliverable: 'Live team improvement backlog with rapid 7-day test-and-deploy cycles.'
  },
  {
    name: 'Sales Bottleneck & Constraint Diagnostic Guide',
    description: 'Theory of Constraints operational framework to isolate whether pipeline flow is constrained by Prospecting, Discovery, Solution Scoping, Legal, or Closing.',
    audience: 'VPs of Revenue Operations, Sales Leadership, Finance Directors',
    whenToUse: 'When pipeline inventory is growing but closed-won revenue velocity is flatlining.',
    actionLabel: 'Explore Constraint Guide',
    deliverable: 'Bottleneck identification radar with subordinated workflow buffers and elevation actions.'
  },
  {
    name: 'Customer Journey Quality Assurance Checklist',
    description: 'Total Quality Management (TQM) audit tool mapping cross-functional touchpoints across Marketing, Sales, Onboarding, and Success.',
    audience: 'VPs of Customer Success, Commercial Operations, CMOs',
    whenToUse: 'When early customer churn indicates a disconnect between sales promises and operational reality.',
    actionLabel: 'Review Journey Checklist',
    deliverable: 'Cross-functional touchpoint quality scorecard with mandatory handoff verification criteria.'
  },
  {
    name: 'Revenue Operations Maturity Matrix',
    description: 'Operational Excellence self-assessment tool evaluating enterprise commercial maturity across People, Process, Technology, Data, and Governance.',
    audience: 'Chief Revenue Officers, CIOs, Heads of RevOps',
    whenToUse: 'Prior to annual budgeting to plan revenue operations infrastructure investments.',
    actionLabel: 'Evaluate Maturity Matrix',
    deliverable: 'Maturity stage rating (Ad-Hoc, Defined, Managed, Optimized) with next-stage roadmap.'
  },
  {
    name: 'Sales KPI Baseline & Variance Worksheet',
    description: 'Standardized empirical modeling template to establish historical baseline metrics, upper/lower control limits, and variance thresholds.',
    audience: 'Sales Analysts, Revenue Intelligence Leads, FP&A Partners',
    whenToUse: 'At the outset of any structured sales transformation or compensation redesign.',
    actionLabel: 'View Baseline Model',
    deliverable: 'Comprehensive metric baseline workbook with automated variance alert triggers.'
  },
  {
    name: 'Lost Deal Root-Cause Analysis (5-Whys) Protocol',
    description: 'Standardized post-mortem inquiry protocol to investigate high-value deal losses beyond superficial "price" or "competitor" excuses.',
    audience: 'Sales Managers, Enterprise Account Executives, Win/Loss Analysts',
    whenToUse: 'Immediately following the loss of any tier-1 enterprise opportunity valued >$100K.',
    actionLabel: 'Inspect 5-Whys Protocol',
    deliverable: 'Verified root-cause determination uncovering systemic product, pricing, or execution gaps.'
  },
  {
    name: 'Continuous Sales Improvement Roadmap Template',
    description: 'Executive Gantt and milestone tracking template mapping 12-month commercial improvement initiatives across quick wins and platform builds.',
    audience: 'Commercial Transformation Committees, Executive Leadership',
    whenToUse: 'To communicate improvement program status, ownership, and ROI to the executive board.',
    actionLabel: 'View Transformation Roadmap',
    deliverable: 'Executive-ready continuous improvement roadmap aligned to annual revenue objectives.'
  }
];

// ── 6 INDUSTRY APPLICATION ENVIRONMENTS ──
export const INDUSTRY_ENVIRONMENTS = [
  {
    industry: 'B2B SaaS & Cloud Technology',
    challenge: 'High inbound lead velocity coupled with low mid-funnel conversion; sales reps overwhelmed by low-intent product signups while enterprise inquiries wait in queues.',
    methodologies: 'Lean Sales + Theory of Constraints',
    exampleInitiative: 'Implemented instant product-qualified lead (PQL) telemetry routing and eliminated manual demo scheduling, subordinating SDR outreach directly to AE calendar availability.',
    kpis: 'Lead response: 4.5 minutes; PQL-to-Opportunity conversion: +34%; Sales cycle duration: -21 days.'
  },
  {
    industry: 'Enterprise Professional Services & Advisory',
    challenge: 'Senior partners spend 40% of their billable capacity drafting custom client proposals and negotiating repetitive contract terms with procurement committees.',
    methodologies: 'Lean Sales + Operational Excellence',
    exampleInitiative: 'Standardized modular proposal building blocks, deployed automated scope calculators, and established a specialized pricing desk to handle standard engagement agreements.',
    kpis: 'Proposal generation time: 2 hours (vs 3 days); Partner billable utilization: +18%; Margin retention: +3.4 pts.'
  },
  {
    industry: 'Manufacturing & Industrial B2B Sales',
    challenge: 'Protracted 9-to-15 month sales cycles with complex engineer-to-order BOM configurations stalling for weeks in technical validation.',
    methodologies: 'Theory of Constraints + Six Sigma',
    exampleInitiative: 'Identified custom engineering sign-off as the primary bottleneck; deployed digital CPQ configuration rules that allowed sales engineers to pre-validate 80% of quotes automatically.',
    kpis: 'Quotation turnaround: 24 hours (vs 12 days); Technical defect rework: <1%; Bid win rate: +26%.'
  },
  {
    industry: 'Financial, Banking & Business Services',
    challenge: 'Strict compliance regulations, multi-level risk sign-offs, and inconsistent discounting causing significant quarterly forecast variance and board surprises.',
    methodologies: 'Six Sigma + TQM',
    exampleInitiative: 'Applied DMAIC to define explicit compliance stage gates; instituted automated discount tolerance boundaries and standardized risk documentation packages.',
    kpis: 'Forecast variance: <3.5%; Regulatory compliance audit: 100% clean; Margin leakage: -4.8%.'
  },
  {
    industry: 'Distribution & Wholesale Commerce',
    challenge: 'Thin gross margins eroded by unauthorized sales discounts, fragmented customer account records, and poor follow-up on repeat order re-contracting.',
    methodologies: 'Kaizen + Operational Excellence',
    exampleInitiative: 'Instituted weekly Kaizen price-realization reviews and automated 60-day renewal notifications synced to customer ERP re-order cycles.',
    kpis: 'Gross margin realization: +2.1 pts; Contract renewal rate: 96.5%; Account repurchase frequency: +14%.'
  },
  {
    industry: 'Enterprise Technology & Strategic Accounts',
    challenge: 'Complex multi-stakeholder buying committees (8–12 executives) leading to "no-decision" deal stalls and unpredictable multi-million dollar slips.',
    methodologies: 'Baldrige Framework + EFQM Excellence Model',
    exampleInitiative: 'Conducted holistic commercial diagnostic; aligned executive sponsor mapping, integrated customer ROI calculators, and established multi-threaded stakeholder governance.',
    kpis: 'Enterprise deal win rate: 44% (vs 24% baseline); Average ACV: +48%; Multi-year commitment rate: 78%.'
  }
];

// ── SUGGESTED GOVERNANCE CADENCE DATA ──
export const GOVERNANCE_CADENCE = [
  {
    frequency: 'Daily',
    meeting: 'Operational Friction Standup',
    duration: '15 Minutes',
    participants: 'Sales Managers, SDR Team Leads, RevOps Duty Specialist',
    purpose: 'Rapid triage of live sales blockers: stalled proposals, lead routing glitches, urgent pricing approvals, and system integration exceptions.'
  },
  {
    frequency: 'Weekly',
    meeting: 'Kaizen Sales Improvement Review',
    duration: '30 Minutes',
    participants: 'Frontline Reps, Sales Managers, RevOps Enablement Lead',
    purpose: 'Review logged friction ideas, examine win/loss objection patterns, evaluate ongoing A/B messaging tests, and deploy updated playbook standards.'
  },
  {
    frequency: 'Monthly',
    meeting: 'Revenue Operations Telemetry Review',
    duration: '60 Minutes',
    participants: 'VPs of Sales, CMO, Head of RevOps, VP Customer Success',
    purpose: 'Evaluate pipeline stage conversion trends, bottleneck dwell times, forecast accuracy variances, tech stack efficiency, and 90-day retention metrics.'
  },
  {
    frequency: 'Quarterly',
    meeting: 'Strategic Commercial Transformation Review',
    duration: 'Half-Day Session',
    participants: 'Executive Board, CRO, CEO, CFO, Transformation Leads',
    purpose: 'Comprehensive diagnostic review of organizational maturity, Balanced Scorecard health, annual improvement roadmap progress, and strategic resource allocation.'
  }
];
