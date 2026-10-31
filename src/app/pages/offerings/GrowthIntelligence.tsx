import React from 'react';
import PageTemplate from '../../components/offerings/PageTemplate';
import { growthIntelligenceData } from '../../../data/offerings/growthIntelligenceData';
import { GrowthIntelligenceVisual } from '../../components/offerings/visuals/OfferingVisuals';

export default function GrowthIntelligence() {
  return (
    <PageTemplate
      data={growthIntelligenceData}
      primaryGraphic={<GrowthIntelligenceVisual />}
      layoutVariant="decision-support"
    />
  );
}
