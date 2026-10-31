import React from 'react';
import PageTemplate from '../../components/offerings/PageTemplate';
import { gtmTransformationData } from '../../../data/offerings/gtmTransformationData';
import { GtmTransformationVisual } from '../../components/offerings/visuals/OfferingVisuals';

export default function GtmTransformation() {
  return (
    <PageTemplate
      data={gtmTransformationData}
      primaryGraphic={<GtmTransformationVisual />}
      layoutVariant="strategic-roadmap"
    />
  );
}
