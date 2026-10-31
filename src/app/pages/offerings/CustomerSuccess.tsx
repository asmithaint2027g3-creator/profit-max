import React from 'react';
import PageTemplate from '../../components/offerings/PageTemplate';
import { customerSuccessData } from '../../../data/offerings/customerSuccessData';
import { CustomerSuccessVisual } from '../../components/offerings/visuals/OfferingVisuals';

export default function CustomerSuccess() {
  return (
    <PageTemplate
      data={customerSuccessData}
      primaryGraphic={<CustomerSuccessVisual />}
      layoutVariant="customer-lifecycle"
    />
  );
}
