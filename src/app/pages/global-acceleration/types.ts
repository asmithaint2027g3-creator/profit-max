import React from 'react';

export interface CapabilityModule {
  id: string; // anchor slug, e.g. "country-opportunity-analysis"
  name: string;
  groupName: string;
  businessQuestion: string;
  problemAddressed: string;
  detailedExplanation: string;
  factorsInputs: string[];
  methodology: string[];
  deliverablesOutputs: string[];
  decisionsSupported: string[];
  kpis: {
    metric: string;
    definition: string;
    unit: string;
    timeframe: string;
    interpretation: string;
  }[];
  dependenciesLimitations: string[];
  relatedCapabilities: {
    name: string;
    path: string;
    reason: string;
  }[];
}

export interface BusinessChallenge {
  id: string;
  title: string;
  situation: string;
  whyItMatters: string;
  consequences: string;
  existingProcessFailure: string;
  requiredDecision: string;
}

export interface WorkflowStep {
  stepNumber: string;
  title: string;
  objective: string;
  requiredInputs: string[];
  activities: string[];
  output: string;
  nextDecision: string;
  owner: string;
}

export interface ImpactKpi {
  category: 'Operational' | 'Commercial' | 'Risk & Readiness' | 'AI & Automation';
  metricName: string;
  definition: string;
  unit: string;
  howMeasured: string;
  timePeriod: string;
  baselineRequirement: string;
  dataSource: string;
  interpretation: string;
}

export interface IntelligenceFramework {
  id: string;
  title: string;
  subtitle: string;
  type: 'scorecard' | 'matrix' | 'checklist' | 'tree' | 'dashboard';
  description: string;
  components: {
    label: string;
    value: string;
    status?: string;
    details: string;
  }[];
  keyTakeaway: string;
}

export interface IndustryScenario {
  id: string;
  industry: string;
  businessContext: string;
  challenge: string;
  capabilitiesUsed: string[];
  assessmentWorkflow: string;
  potentialOutput: string;
  decisionSupported: string;
  evaluationMetrics: string[];
}

export interface SourceCitation {
  sourceName: string;
  organization: string;
  publishedYear: string;
  focusArea: string;
  linkOrRef: string;
}

export interface AccelerationPageData {
  pageNumber: string; // e.g. "01"
  id: string; // e.g. "global-market-access"
  primaryNavLabel: string; // EXACT non-negotiable label
  contentHeading: string; // e.g. "Expansion Intelligence"
  canonicalPath: string; // e.g. "/global-acceleration/market-access"
  heroTagline: string;
  heroHeadline: string;
  heroDescription: string;
  targetAudience: string[];
  primaryCtaText: string;
  secondaryCtaText: string;
  visualTheme: 'market' | 'demand' | 'export' | 'partner' | 'supply' | 'revenue' | 'finance' | 'ai';
  businessOutcomes: {
    label: string;
    metric: string;
    description: string;
  }[];
  challenges: BusinessChallenge[];
  capabilities: CapabilityModule[];
  workflowSteps: WorkflowStep[];
  kpis: ImpactKpi[];
  frameworks: IntelligenceFramework[];
  useCases: IndustryScenario[];
  trustEvidence: {
    methodology: string;
    assumptions: string[];
    evidenceLimitations: string[];
    citations: SourceCitation[];
  };
  relatedPages: {
    title: string;
    path: string;
    relationshipDescription: string;
  }[];
  conversionCta: {
    headline: string;
    description: string;
    primaryButtonText: string;
  };
}

