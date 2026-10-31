import React from 'react';
import PageTemplate from '../../components/offerings/PageTemplate';
import { revenueOperationsData } from '../../../data/offerings/revenueOperationsData';
import { RevenueOperationsVisual } from '../../components/offerings/visuals/OfferingVisuals';

export default function RevenueOperations() {
  return (
    <PageTemplate
      data={revenueOperationsData}
      primaryGraphic={<RevenueOperationsVisual />}
      layoutVariant="connected-systems"
    />
  );
}
