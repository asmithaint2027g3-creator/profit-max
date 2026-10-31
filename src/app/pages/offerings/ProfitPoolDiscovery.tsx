import React from 'react';
import PageTemplate from '../../components/offerings/PageTemplate';
import { profitPoolDiscoveryData } from '../../../data/offerings/profitPoolDiscoveryData';
import { ProfitPoolDiscoveryVisual } from '../../components/offerings/visuals/OfferingVisuals';

export default function ProfitPoolDiscovery() {
  return (
    <PageTemplate
      data={profitPoolDiscoveryData}
      primaryGraphic={<ProfitPoolDiscoveryVisual />}
      layoutVariant="market-strategy"
    />
  );
}
