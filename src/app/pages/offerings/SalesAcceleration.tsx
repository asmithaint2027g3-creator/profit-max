import React from 'react';
import PageTemplate from '../../components/offerings/PageTemplate';
import { salesAccelerationData } from '../../../data/offerings/salesAccelerationData';
import { SalesAccelerationVisual } from '../../components/offerings/visuals/OfferingVisuals';

export default function SalesAcceleration() {
  return (
    <PageTemplate
      data={salesAccelerationData}
      primaryGraphic={<SalesAccelerationVisual />}
      layoutVariant="opportunity-progression"
    />
  );
}
