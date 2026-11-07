// Tools & Calculators Hub Comprehensive Data Architecture
// ProfitMachines Revenue Intelligence Platform

export interface ToolMetadata {
  id: string;
  slug: string;
  name: string;
  category: string;
  categoryAnchor: string;
  type: 'Live Calculator' | 'Diagnostic Assessment';
  badge: string;
  shortDescription: string;
  businessProblem: string;
  whyItMatters: string;
  explanation: string;
  methodology: string;
  relatedCapabilities: { name: string; path: string }[];
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface RoleRecommendation {
  role: string;
  badge: string;
  description: string;
  recommendedTools: { name: string; slug: string; reason: string }[];
}

// ── 9 PRODUCTION TOOLS METADATA ──
export const ALL_TOOLS: ToolMetadata[] = [
  {
    id: 'revenue-calculator',
    slug: 'revenue-calculator',
    name: 'Revenue Calculator',
    category: 'Revenue Performance Calculators',
    categoryAnchor: 'revenue-performance',
    type: 'Live Calculator',
    badge: 'Top-Line Model',
    shortDescription: 'Calculate estimated new customer and expansion revenue generated from leads, conversion stages, and average deal values.',
    businessProblem: 'Businesses frequently generate leads and pipeline opportunities without understanding how mid-funnel conversion friction compounds into unrealized revenue.',
    whyItMatters: 'Provides an empirical, multi-variable baseline showing which funnel metric (leads, conversion, or deal size) offers the highest mathematical leverage for growth.',
    explanation: 'This deterministic model separates new customer acquisition from recurring account expansion. It calculates new customer revenue by multiplying lead volume by stage conversion rates and average contract value, then adds expansion revenue from your existing customer base.',
    methodology: 'New Customer Revenue = Leads × Lead-to-Opp % × Opp-to-Customer % × Average Deal Value. Expansion Revenue = Existing Customers × Average Expansion Revenue per Customer. Total Revenue = New Customer Revenue + Expansion Revenue.',
    relatedCapabilities: [
      { name: 'Demand Engineering', path: '/offerings/demand-engineering' },
      { name: 'Sales Acceleration', path: '/offerings/sales-acceleration' },
      { name: 'Profit Pool Discovery', path: '/offerings/profit-pool-discovery' }
    ]
  },
  {
    id: 'sales-velocity-calculator',
    slug: 'sales-velocity-calculator',
    name: 'Sales Velocity Calculator',
    category: 'Revenue Performance Calculators',
    categoryAnchor: 'revenue-performance',
    type: 'Live Calculator',
    badge: 'Pipeline Velocity',
    shortDescription: 'Measure the exact speed at which your sales pipeline converts qualified enterprise opportunities into closed revenue.',
    businessProblem: 'A large pipeline can create a false sense of security while long cycle times and poor win rates severely suppress realized cash flow.',
    whyItMatters: 'Sales velocity is the single most comprehensive metric of commercial health, integrating pipeline volume, deal value, conversion win rate, and cycle duration into a single rate of revenue production.',
    explanation: 'Sales velocity quantifies how much revenue your pipeline produces per day, month, or year. By adjusting win rate or compressing cycle days, teams can pinpoint immediate operational leverage.',
    methodology: 'Sales Velocity = (Number of Qualified Opportunities × Average Deal Value × Win Rate) / Sales Cycle Length in Days.',
    relatedCapabilities: [
      { name: 'Sales Acceleration', path: '/offerings/sales-acceleration' },
      { name: 'Revenue Operations', path: '/offerings/revenue-operations' },
      { name: 'Growth Intelligence', path: '/offerings/growth-intelligence' }
    ]
  },
  {
    id: 'cac-ltv-calculator',
    slug: 'cac-ltv-calculator',
    name: 'CAC / LTV Calculator',
    category: 'Customer Economics Calculators',
    categoryAnchor: 'customer-economics',
    type: 'Live Calculator',
    badge: 'Unit Economics',
    shortDescription: 'Evaluate fully loaded customer acquisition costs against projected lifetime value, gross margins, and payback velocity.',
    businessProblem: 'Companies often scale top-of-funnel customer acquisition while eroding gross margins because customer acquisition cost exceeds payback thresholds.',
    whyItMatters: 'Healthy enterprise SaaS and B2B models require a balanced LTV:CAC ratio (target ≥ 3:1) and capital payback under 12 months to avoid capital depletion.',
    explanation: 'Computes fully loaded Customer Acquisition Cost (CAC) by dividing total sales and marketing spend by acquired logos, and projects Customer Lifetime Value (LTV) using monthly contract value, gross margin, and customer tenure.',
    methodology: 'CAC = Total S&M Spend / New Customers. LTV = Average Monthly Revenue × Gross Margin % × Customer Lifetime in Months. LTV:CAC = LTV / CAC. CAC Payback = CAC / (Monthly Revenue × Gross Margin %).',
    relatedCapabilities: [
      { name: 'Profit Pool Discovery', path: '/offerings/profit-pool-discovery' },
      { name: 'Customer Growth', path: '/offerings/customer-growth' },
      { name: 'GTM Transformation', path: '/offerings/gtm-transformation' }
    ]
  },
  {
    id: 'roi-calculator',
    slug: 'roi-calculator',
    name: 'ROI Calculator',
    category: 'Business ROI & Value Calculators',
    categoryAnchor: 'business-roi',
    type: 'Live Calculator',
    badge: 'Capital Justification',
    shortDescription: 'Estimate net financial returns, payback timeline, and annualized ROI for commercial technology and AI automation investments.',
    businessProblem: 'Organizations struggle to justify software and transformation investments to CFOs due to vague, qualitative value propositions.',
    whyItMatters: 'Establishes a quantitative justification model that calculates net dollar benefits, capital recovery months, and percentage returns under conservative assumptions.',
    explanation: 'Models total investment (setup capex plus ongoing opex over the evaluation horizon) against expected monthly financial benefits (cost savings plus revenue lift) to determine net return and payback velocity.',
    methodology: 'Total Investment = Initial Investment + (Monthly Operating Cost × Horizon). Total Benefit = Monthly Benefit × Horizon. Net Benefit = Total Benefit − Total Investment. ROI (%) = (Net Benefit / Total Investment) × 100. Payback = Initial Investment / Monthly Net Benefit.',
    relatedCapabilities: [
      { name: 'Revenue Operations', path: '/offerings/revenue-operations' },
      { name: 'AI Trust & Governance', path: '/offerings/ai-trust-governance' },
      { name: 'Profit Pool Discovery', path: '/offerings/profit-pool-discovery' }
    ]
  },
  {
    id: 'ai-readiness-assessment',
    slug: 'ai-readiness-assessment',
    name: 'AI Readiness Assessment',
    category: 'AI & Automation Readiness Assessments',
    categoryAnchor: 'ai-readiness',
    type: 'Diagnostic Assessment',
    badge: 'Cognitive Readiness',
    shortDescription: 'Evaluate enterprise data hygiene, technical infrastructure, process repeatability, and security governance for AI deployment.',
    businessProblem: 'Deploying autonomous AI agents or LLMs on uncurated, dirty CRM databases leads to hallucinated outputs, rep distrust, and security risks.',
    whyItMatters: 'Diagnoses whether an organization possesses the clean data foundation, human oversight gates, and technical APIs required for autonomous revenue workflows.',
    explanation: 'Evaluates your organization across 6 core dimensions: Data Readiness, Technology Infrastructure, Process Standardization, AI Skills & Literacy, Leadership Alignment, and Security & Governance using a transparent 5-point scale.',
    methodology: 'Dimension Score = Sum of Dimension Question Scores / Total Dimension Questions (1 to 5 scale). Overall AI Readiness = Mean of All 6 Dimension Scores.',
    relatedCapabilities: [
      { name: 'AI Trust & Governance', path: '/offerings/ai-trust-governance' },
      { name: 'Sales Acceleration', path: '/offerings/sales-acceleration' },
      { name: 'Growth Intelligence', path: '/offerings/growth-intelligence' }
    ]
  },
  {
    id: 'automation-readiness-assessment',
    slug: 'automation-readiness-assessment',
    name: 'Automation Readiness Assessment',
    category: 'AI & Automation Readiness Assessments',
    categoryAnchor: 'ai-readiness',
    type: 'Diagnostic Assessment',
    badge: 'Process Engineering',
    shortDescription: 'Identify candidate business workflows suitable for autonomous execution, API orchestration, and agentic workflows.',
    businessProblem: 'Attempting to automate chaotic, poorly documented processes results in automated errors and expensive software rework.',
    whyItMatters: 'Systematically filters operational workflows to separate deterministic rule-based tasks from high-touch creative activities requiring human strategic judgment.',
    explanation: 'Scores candidate workflows across 7 operational criteria: Process Repetition, Documentation, Data Availability, System Integration, Exception Handling, Business Impact, and Human Oversight.',
    methodology: 'Calculates an Automation Suitability Index (0–100) based on weighted dimensional questions, classifying candidates into Immediate Automation, Assisted Workflows, or Manual Retention.',
    relatedCapabilities: [
      { name: 'Revenue Operations', path: '/offerings/revenue-operations' },
      { name: 'Demand Engineering', path: '/offerings/demand-engineering' }
    ]
  },
  {
    id: 'lean-waste-assessment',
    slug: 'lean-waste-assessment',
    name: 'Lean Waste Assessment',
    category: 'Sales Process Optimization',
    categoryAnchor: 'sales-optimization',
    type: 'Diagnostic Assessment',
    badge: 'Waste Elimination',
    shortDescription: 'Quantify operational friction, administrative drag, and weekly dollar losses caused by non-value-added sales tasks.',
    businessProblem: 'Sales representatives expend up to 65% of their working hours on manual CRM entry, redundant approvals, and status tracking rather than customer selling.',
    whyItMatters: 'Translates lost rep working hours into concrete annual dollar losses, creating an undeniable business case for workflow simplification.',
    explanation: 'Applies Lean manufacturing waste elimination principles to the commercial funnel, calculating weekly and annualized financial costs of administrative drag.',
    methodology: 'Weekly Waste Hours = Manual Task Hours × Avoidable Percentage. Weekly Cost = Weekly Waste Hours × Team Size × Loaded Hourly Rate. Annual Cost = Weekly Cost × 52.',
    relatedCapabilities: [
      { name: 'Sales Acceleration', path: '/offerings/sales-acceleration' },
      { name: 'Revenue Operations', path: '/offerings/revenue-operations' }
    ]
  },
  {
    id: 'sales-process-automation-assessment',
    slug: 'sales-process-automation-assessment',
    name: 'Sales Process Automation Assessment',
    category: 'Sales Process Automation Assessment',
    categoryAnchor: 'process-automation',
    type: 'Diagnostic Assessment',
    badge: 'Workflow Coverage',
    shortDescription: 'Evaluate how effectively commercial activities from lead capture to forecasting are supported by intelligent automation.',
    businessProblem: 'Organizations deploy disjointed point tools that create handoff latency and data gaps between prospecting, quoting, and forecasting.',
    whyItMatters: 'Provides a comprehensive view of sales automation coverage, highlighting manual gaps across the end-to-end commercial pipeline.',
    explanation: 'Assesses 8 core sales pipeline milestones: Lead Capture, Qualification, Prospect Research, Outreach Cadencing, CRM Hygiene, Opportunity Monitoring, Forecasting, and Human Approval.',
    methodology: 'Evaluates each stage on a 1–5 maturity scale to calculate an overall Sales Automation Index and identify top candidate workflows for agent deployment.',
    relatedCapabilities: [
      { name: 'Demand Engineering', path: '/offerings/demand-engineering' },
      { name: 'Sales Acceleration', path: '/offerings/sales-acceleration' },
      { name: 'Revenue Operations', path: '/offerings/revenue-operations' }
    ]
  },
  {
    id: 'gtm-maturity-assessment',
    slug: 'gtm-maturity-assessment',
    name: 'GTM Maturity Assessment',
    category: 'Go-To-Market Maturity',
    categoryAnchor: 'gtm-maturity',
    type: 'Diagnostic Assessment',
    badge: 'Commercial Maturity',
    shortDescription: 'Evaluate cross-functional alignment between sales, marketing, RevOps, customer growth, and AI technology across 10 dimensions.',
    businessProblem: 'Siloed departments operate with conflicting definitions of pipeline, misaligned incentives, and fragmented customer data.',
    whyItMatters: 'Provides leadership with a single, unified maturity benchmark across 10 critical commercial capabilities, classifying the organization into a 5-level maturity tier.',
    explanation: 'Surveys 10 strategic dimensions: ICP Clarity, Market Intelligence, Lead Generation, Qualification, Sales Execution, Pipeline Governance, RevOps, Customer Retention, Data Intelligence, and AI Adoption.',
    methodology: 'Maturity Score = Mean score across all 10 dimensions (1 to 5). Classifies organization into Level 1 Initial, Level 2 Developing, Level 3 Defined, Level 4 Integrated, or Level 5 Optimized.',
    relatedCapabilities: [
      { name: 'GTM Transformation', path: '/offerings/gtm-transformation' },
      { name: 'Growth Intelligence', path: '/offerings/growth-intelligence' },
      { name: 'Profit Pool Discovery', path: '/offerings/profit-pool-discovery' }
    ]
  }
];

// ── FREQUENTLY ASKED QUESTIONS (10 QUESTIONS) ──
export const HUB_FAQS: FaqItem[] = [
  {
    question: '1. What is the ProfitMachines Tools & Calculators Hub?',
    answer: 'The Tools & Calculators Hub is an enterprise-grade business intelligence and decision-support workspace. It brings together interactive financial models, deterministic calculators, and structured capability assessments designed to help revenue leaders diagnose pipeline friction, evaluate unit economics, model automation ROI, and accelerate commercial growth.'
  },
  {
    question: '2. Are the calculators interactive and do they calculate in real-time?',
    answer: 'Yes. All calculators perform live, client-side mathematical calculations using validated corporate finance formulas. Adjusting any slider or numeric input immediately updates the results dashboard, sensitivity metrics, and payback timelines without page reloading.'
  },
  {
    question: '3. Do I need to create an account to use the tools?',
    answer: 'No. All calculators and diagnostic assessments in this hub are completely accessible without registration or login. Your inputs remain private in your browser session.'
  },
  {
    question: '4. How accurate are the calculator results?',
    answer: 'The calculators use deterministic mathematical formulations (e.g. Sales Velocity, LTV:CAC, and Net Present Value models). The accuracy of the calculated outputs depends entirely on the accuracy and validity of the business inputs you provide. All outputs are presented as mathematical estimates and should be evaluated alongside your specific market dynamics.'
  },
  {
    question: '5. What information should I prepare before using a calculator?',
    answer: 'For revenue and velocity models, prepare your monthly lead counts, stage conversion rates, average contract value, and sales cycle length. For unit economics (CAC/LTV), gather fully loaded sales and marketing expenditure, newly acquired customer count, monthly subscription values, gross margins, and historical churn rates.'
  },
  {
    question: '6. What is the difference between a calculator and an assessment?',
    answer: 'A calculator is a financial tool that applies exact mathematical formulas to numeric business inputs (dollars, counts, percentages) to produce economic metrics like ROI or sales velocity. An assessment is a structured diagnostic rubric that evaluates qualitative organizational capabilities across multiple dimensions using standardized scoring scales.'
  },
  {
    question: '7. Can I use these tools to evaluate AI readiness?',
    answer: 'Yes. The AI Readiness Assessment evaluates your enterprise across 6 specific dimensions: Data Readiness, Technical Infrastructure, Process Standardization, AI Skills, Leadership Alignment, and Security Governance to identify prerequisites before deploying autonomous AI agents.'
  },
  {
    question: '8. How can I improve sales velocity based on my results?',
    answer: 'Sales velocity is governed by four variables: Opportunities, Deal Size, Win Rate, and Cycle Duration. Improving velocity requires either increasing qualified opportunities, expanding deal value, increasing win rates through qualification rigor (e.g. MEDDPICC), or compressing cycle duration via automated pre-call research and Mutual Action Plans.'
  },
  {
    question: '9. How can I understand my customer acquisition economics?',
    answer: 'Use the CAC / LTV Calculator to determine your true fully loaded acquisition costs and compare them against customer lifetime gross margin. If your LTV:CAC ratio is under 3:1 or your payback period exceeds 14 months, capital is being consumed inefficiently, signaling a need to refine targeting or expand retention.'
  },
  {
    question: '10. Can ProfitMachines help implement the improvements identified?',
    answer: 'Yes. ProfitMachines provides forward-deployed revenue architects and AI engineers who partner with leadership to eliminate identified pipeline friction, consolidate RevOps tooling, build autonomous agent workflows, and deploy deterministic sales acceleration systems.'
  }
];

// ── RECOMMENDED TOOLS BY BUSINESS ROLE (4 ROLES) ──
export const ROLE_RECOMMENDATIONS: RoleRecommendation[] = [
  {
    role: 'Business Leaders & Founders',
    badge: 'CEOs & Managing Directors',
    description: 'Focus on strategic capital allocation, top-line revenue predictability, and overall organizational maturity.',
    recommendedTools: [
      { name: 'Revenue Calculator', slug: 'revenue-calculator', reason: 'Model annual revenue contribution from acquisition versus customer expansion.' },
      { name: 'ROI Calculator', slug: 'roi-calculator', reason: 'Evaluate net return and capital payback timelines for major operational investments.' },
      { name: 'GTM Maturity Assessment', slug: 'gtm-maturity-assessment', reason: 'Benchmark overall commercial alignment and capability readiness across 10 dimensions.' }
    ]
  },
  {
    role: 'Sales Leaders',
    badge: 'CROs & Sales VPs',
    description: 'Focus on accelerating deal progression speed, rep selling capacity, and eliminating stage-gate friction.',
    recommendedTools: [
      { name: 'Sales Velocity Calculator', slug: 'sales-velocity-calculator', reason: 'Measure pipeline throughput and identify whether cycle length or win rate is your core bottleneck.' },
      { name: 'Revenue Calculator', slug: 'revenue-calculator', reason: 'Map how small conversion rate improvements compound into substantial top-line gains.' },
      { name: 'Lean Waste Assessment', slug: 'lean-waste-assessment', reason: 'Quantify the dollar value of hours reps lose each week to manual data entry and admin overhead.' }
    ]
  },
  {
    role: 'Marketing & Growth Leaders',
    badge: 'CMOs & Demand Directors',
    description: 'Focus on acquisition cost efficiency, customer unit economics, and full-funnel demand contribution.',
    recommendedTools: [
      { name: 'CAC / LTV Calculator', slug: 'cac-ltv-calculator', reason: 'Ensure marketing acquisition spend generates profitable customer lifetime value and rapid payback.' },
      { name: 'GTM Maturity Assessment', slug: 'gtm-maturity-assessment', reason: 'Evaluate demand generation alignment and account-based marketing readiness.' },
      { name: 'Revenue Calculator', slug: 'revenue-calculator', reason: 'Connect top-of-funnel inbound inquiries directly to closed-won enterprise revenue.' }
    ]
  },
  {
    role: 'RevOps & Technology Leaders',
    badge: 'RevOps VPs & CISOs',
    description: 'Focus on technical infrastructure, database hygiene, automation suitability, and AI security governance.',
    recommendedTools: [
      { name: 'AI Readiness Assessment', slug: 'ai-readiness-assessment', reason: 'Audit CRM data cleanliness and security guardrails before deploying cognitive agents.' },
      { name: 'Automation Readiness Assessment', slug: 'automation-readiness-assessment', reason: 'Filter candidate processes to prioritize high-ROI, low-risk workflow automation.' },
      { name: 'Sales Process Automation Assessment', slug: 'sales-process-automation-assessment', reason: 'Map sales automation coverage across all 8 pipeline milestones from lead ingress to forecasting.' }
    ]
  }
];

