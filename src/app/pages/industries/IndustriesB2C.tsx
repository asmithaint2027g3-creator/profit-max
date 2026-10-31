import React from 'react';
import PageTemplate from '../../components/offerings/PageTemplate';
import { industriesB2CData } from '../../../data/industries/industriesB2CData';
import { B2CConsumerVisual } from '../../components/industries/visuals/IndustryVisuals';

export default function IndustriesB2C() {
  return (
    <PageTemplate
      data={industriesB2CData}
      primaryGraphic={<B2CConsumerVisual />}
      layoutVariant="b2c-consumer"
    />
  );
}
