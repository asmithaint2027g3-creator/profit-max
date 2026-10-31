import React from 'react';
import PageTemplate from '../../components/offerings/PageTemplate';
import { demandEngineeringData } from '../../../data/offerings/demandEngineeringData';
import { DemandEngineeringVisual } from '../../components/offerings/visuals/OfferingVisuals';

export default function DemandEngineering() {
  return (
    <PageTemplate
      data={demandEngineeringData}
      primaryGraphic={<DemandEngineeringVisual />}
      layoutVariant="demand-generation"
    />
  );
}
