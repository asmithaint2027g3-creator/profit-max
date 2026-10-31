import React from 'react';
import PageTemplate from '../../components/offerings/PageTemplate';
import { industriesStartupsData } from '../../../data/industries/industriesStartupsData';

export default function IndustriesStartups() {
  return <PageTemplate data={industriesStartupsData} />;
}
