import React from 'react';
import PageTemplate from '../../components/offerings/PageTemplate';
import { industriesEnterpriseData } from '../../../data/industries/industriesEnterpriseData';

export default function IndustriesEnterprise() {
  return <PageTemplate data={industriesEnterpriseData} />;
}
