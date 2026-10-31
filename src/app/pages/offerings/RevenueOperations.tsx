import React from 'react';
import PageTemplate from '../../components/offerings/PageTemplate';
import { revenueOperationsData } from '../../../data/offerings/revenueOperationsData';

export default function RevenueOperations() {
  return <PageTemplate data={revenueOperationsData} />;
}
