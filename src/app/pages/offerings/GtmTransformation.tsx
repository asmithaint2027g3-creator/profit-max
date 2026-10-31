import React from 'react';
import PageTemplate from '../../components/offerings/PageTemplate';
import { gtmTransformationData } from '../../../data/offerings/gtmTransformationData';

export default function GtmTransformation() {
  return <PageTemplate data={gtmTransformationData} />;
}
