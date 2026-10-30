export interface AiSalesSubSection {
  id: string; // anchor slug (e.g. 'buyer-intelligence')
  title: string;
  badge?: string;
  businessQuestion: string;
  description: string;
  businessProblem: string;
  howItWorks: string;
  informationUsed: string[];
  workflowSupport: string;
  outcomesSupported: string;
  humanOversight: string;
  kpis: {
    metric: string;
    definition: string;
    target: string;
  }[];
  visualData?: {
    label: string;
    items: { label: string; value: string; detail?: string }[];
  };
}

export interface AiSalesBusinessProblem {
  id: string;
  title: string;
  symptom: string;
  rootCause: string;
  impact: string;
}

export interface AiSalesWorkflowStep {
  step: string;
  name: string;
  description: string;
  inputs: string;
  aiAction: string;
  humanGate: string;
  output: string;
}

export interface AiSalesUseCase {
  title: string;
  segment: string;
  situation: string;
  approach: string;
  result: string;
  metrics: { label: string; value: string }[];
}

export interface AiSalesKpi {
  name: string;
  formula: string;
  definition: string;
  reportingWindow: string;
  illustrativeValue: string;
  interpretation: string;
}

export interface AiSalesGovernanceItem {
  area: string;
  policy: string;
  humanCheckpoint: string;
  auditTrail: string;
}

export interface AiSalesCapabilityPageData {
  pageNumber: string; // '01' - '09'
  title: string;
  slug: string;
  canonicalPath: string;
  eyebrow: string;
  heroHeadline: string;
  heroSupporting: string;
  primaryCTA: string;
  secondaryCTA: string;
  targetDecisionMakers: string[];
  visualTheme: 'intelligence' | 'pipeline' | 'engagement' | 'agents' | 'acceleration' | 'pricing' | 'ecosystem' | 'customer' | 'command';
  
  // Section 1: Business Problem
  businessProblemTitle: string;
  businessProblemSubtitle: string;
  businessProblems: AiSalesBusinessProblem[];

  // Section 2: Core Capability Subsections (Sub-Submenus with Anchors)
  subSubmenus: AiSalesSubSection[];

  // Section 3: Workflow Diagram
  workflowTitle: string;
  workflowSubtitle: string;
  workflowSteps: AiSalesWorkflowStep[];

  // Section 4: Practical Business Use Cases
  useCases: AiSalesUseCase[];

  // Section 5: Capability Visual Dashboard / Chart Mockup
  dashboardTitle: string;
  dashboardSubtitle: string;
  dashboardBadge: string;
  dashboardMetrics: { label: string; value: string; change?: string; note: string }[];
  dashboardVisualType: 'matrix' | 'funnel' | 'journey' | 'network' | 'waterfall' | 'timeline' | 'command' | 'agents';

  // Section 6: KPI Framework
  kpiFrameworkTitle: string;
  kpis: AiSalesKpi[];

  // Section 7: Data & Governance
  governanceTitle: string;
  governanceSubtitle: string;
  governanceItems: AiSalesGovernanceItem[];

  // Section 8: Related Capabilities
  relatedCapabilities: {
    title: string;
    path: string;
    summary: string;
    badge: string;
  }[];

  // Section 9: Closing CTA
  closingCtaHeadline: string;
  closingCtaDescription: string;
}

