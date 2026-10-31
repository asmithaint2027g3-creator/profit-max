import React from 'react';
import PageTemplate from '../../components/offerings/PageTemplate';
import { aiTrustGovernanceData } from '../../../data/offerings/aiTrustGovernanceData';
import { AiTrustGovernanceVisual } from '../../components/offerings/visuals/OfferingVisuals';

export default function AiTrustGovernance() {
  return (
    <PageTemplate
      data={aiTrustGovernanceData}
      primaryGraphic={<AiTrustGovernanceVisual />}
      layoutVariant="governance-control"
    />
  );
}
