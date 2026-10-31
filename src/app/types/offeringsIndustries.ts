import React from 'react';

export interface CapabilityItem {
  id: string; // DOM anchor, e.g. "market-opportunity-mapping"
  title: string;
  groupName: string; // e.g. "Discovery & Analysis", "Execution & Workflow", "Optimization & Governance"
  shortSummary: string;
  businessChallenge: string;
  whyItMatters: string;
  whatProfitMachinesDoes: string;
  howItWorks: string[];
  relevantInputs: string[];
  deliverables: string[];
  businessValue: string;
  kpis: {
    name: string;
    formula: string;
    purpose: string;
  }[];
  illustrativeUseCase: {
    targetUser: string;
    scenario: string;
    actionTaken: string;
    outcomeObserved: string;
  };
  visualRecommendation: {
    type: string; // e.g. "Market Opportunity Heatmap", "Interactive Scoring Matrix"
    description: string;
  };
  relatedCapabilities: {
    name: string;
    path: string;
  }[];
  nextStepCta: {
    label: string;
    link: string;
  };
}

export interface BusinessGrowthChallenge {
  id: string;
  title: string;
  situation: string;
  whyItMatters: string;
  commercialConsequence: string;
  whyTraditionalMethodsFail: string;
  requiredExecutiveDecision: string;
}

export interface PrincipalWorkflowStep {
  stepNumber: string;
  phase: string;
  title: string;
  duration: string;
  objective: string;
  keyActivities: string[];
  outputDeliverable: string;
  decisionGate: string;
}

export interface MetricDefinition {
  metricName: string;
  category: 'Operational' | 'Commercial' | 'Productivity' | 'Financial & Retention';
  definition: string;
  formula: string;
  benchmarkContext: string;
}

export interface PageFaq {
  question: string;
  answer: string;
}

export interface PageContentData {
  slug: string;
  route: string;
  pageNumber: string; // e.g. "OFFERING 01" or "ICP 01"
  pageCategory: 'Offering' | 'Industry';
  title: string;
  headlineHighlight: string;
  eyebrow: string;
  description: string;
  targetAudience: {
    primary: string;
    secondary: string;
    executives: string;
  };
  heroVisual: {
    imageSrc: string;
    altText: string;
    badgeText: string;
  };
  keyStats: {
    label: string;
    metric: string;
    context: string;
  }[];
  challenges: BusinessGrowthChallenge[];
  capabilities: CapabilityItem[];
  workflow: PrincipalWorkflowStep[];
  metrics: MetricDefinition[];
  faqs: PageFaq[];
  primaryCtaText: string;
  secondaryCtaText: string;
}
