import React from 'react';
import PageTemplate from '../../components/offerings/PageTemplate';
import { industriesSaasData } from '../../../data/industries/industriesSaasData';
import { SaasLifecycleVisual } from '../../components/industries/visuals/IndustryVisuals';

export default function IndustriesSaas() {
  return (
    <PageTemplate
      data={industriesSaasData}
      primaryGraphic={<SaasLifecycleVisual />}
      layoutVariant="saas-lifecycle"
    />
  );
}
