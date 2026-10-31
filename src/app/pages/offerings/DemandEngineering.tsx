import React from 'react';
import PageTemplate from '../../components/offerings/PageTemplate';
import { demandEngineeringData } from '../../../data/offerings/demandEngineeringData';

export default function DemandEngineering() {
  return <PageTemplate data={demandEngineeringData} />;
}
