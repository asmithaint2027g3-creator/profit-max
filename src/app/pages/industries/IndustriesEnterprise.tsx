import React from 'react';
import PageTemplate from '../../components/offerings/PageTemplate';
import { industriesEnterpriseData } from '../../../data/industries/industriesEnterpriseData';
import { EnterpriseScaleVisual } from '../../components/industries/visuals/IndustryVisuals';

export default function IndustriesEnterprise() {
  return (
    <PageTemplate
      data={industriesEnterpriseData}
      primaryGraphic={<EnterpriseScaleVisual />}
      layoutVariant="enterprise-scale"
    />
  );
}
