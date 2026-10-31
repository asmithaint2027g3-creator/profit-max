import React from 'react';
import PageTemplate from '../../components/offerings/PageTemplate';
import { industriesMidMarketData } from '../../../data/industries/industriesMidMarketData';
import { MidMarketOpsVisual } from '../../components/industries/visuals/IndustryVisuals';

export default function IndustriesMidMarket() {
  return (
    <PageTemplate
      data={industriesMidMarketData}
      primaryGraphic={<MidMarketOpsVisual />}
      layoutVariant="midmarket-ops"
    />
  );
}
