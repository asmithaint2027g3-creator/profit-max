export interface SubSubmenuTopic {
  title: string;
  description: string;
  businessEvidence: string;
  analysisProcess: string;
  decisionsEnabled: string;
}

export interface SubSubmenuSection {
  id: string;
  slug: string;
  title: string;
  businessQuestion: string;
  explanation: string;
  topics: SubSubmenuTopic[];
  useCase: {
    situation: string;
    action: string;
    outcome: string;
  };
  kpis: {
    name: string;
    definition: string;
    target: string;
  }[];
  visualModel: {
    type: 'driver-tree' | 'waterfall' | 'matrix' | 'funnel' | 'orchestration' | 'scorecard' | 'architecture' | 'journey';
    caption: string;
    metrics?: { label: string; value: string; delta?: string }[];
  };
}

export interface GrowthScienceKPI {
  name: string;
  definition: string;
  formula: string;
  unit: string;
  reportingPeriod: string;
  baseline: string;
  target: string;
  illustrativeValue: string;
  interpretation: string;
  category: 'Operational' | 'Commercial' | 'Unit Economics' | 'Executive';
}

export interface WorkflowStep {
  stepNumber: string;
  title: string;
  input: string;
  activity: string;
  output: string;
}

export interface BusinessScenario {
  title: string;
  industry: string;
  baselineSituation: string;
  observedProblem: string;
  analysis: string;
  decisionEvaluated: string;
  expectedImprovement: string;
  validatingMetrics: string[];
  assumptions: string;
}

export interface DataConsideration {
  title: string;
  description: string;
  impactLevel: 'High' | 'Critical' | 'Medium';
}

export interface DecisionSupportItem {
  priority: string;
  focusArea: string;
  keyMetrics: string;
  tradeOffs: string;
  recommendedAction: string;
}

export interface GrowthCapabilityPageData {
  pageNumber: string; // '02' through '10'
  title: string;
  slug: string;
  heroHeadline: string;
  heroSupporting: string;
  businessProblemSummary: string;
  targetDecisionMakers: string[];
  contextWhoExperiences: string;
  contextSituation: string;
  contextWhyDifficult: string;
  contextContributingFactors: string[];
  symptomsAndConsequences: {
    category: string;
    symptom: string;
    consequence: string;
  }[];
  subSubmenus: SubSubmenuSection[];
  methodologyWorkflow: WorkflowStep[];
  primaryKpis: GrowthScienceKPI[];
  scenarios: BusinessScenario[];
  dataConsiderations: DataConsideration[];
  decisionSupport: DecisionSupportItem[];
  visualTheme: 'physics' | 'intelligence' | 'discovery' | 'leakage' | 'bundling' | 'value' | 'innovation' | 'acceleration' | 'command';
}

