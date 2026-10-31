import React from 'react';
import PageTemplate from '../../components/offerings/PageTemplate';
import { industriesB2BData } from '../../../data/industries/industriesB2BData';
import { B2BStrategyVisual } from '../../components/industries/visuals/IndustryVisuals';

export default function IndustriesB2B() {
  return (
    <PageTemplate
      data={industriesB2BData}
      primaryGraphic={<B2BStrategyVisual />}
      layoutVariant="b2b-strategy"
    />
  );
}
