import React from 'react';
import PageTemplate from '../../components/offerings/PageTemplate';
import { industriesSaasData } from '../../../data/industries/industriesSaasData';

export default function IndustriesSpecialized() {
  return <PageTemplate data={industriesSaasData} />;
}
