import React from 'react';
import PageTemplate from '../../components/offerings/PageTemplate';
import { industriesStartupsData } from '../../../data/industries/industriesStartupsData';
import { StartupPmfVisual } from '../../components/industries/visuals/IndustryVisuals';

export default function IndustriesStartups() {
  return (
    <PageTemplate
      data={industriesStartupsData}
      primaryGraphic={<StartupPmfVisual />}
      layoutVariant="startup-pmf"
    />
  );
}
