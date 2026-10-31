import React from 'react';
import PageTemplate from '../../components/offerings/PageTemplate';
import { customerSuccessData } from '../../../data/offerings/customerSuccessData';

export default function CustomerSuccess() {
  return <PageTemplate data={customerSuccessData} />;
}
