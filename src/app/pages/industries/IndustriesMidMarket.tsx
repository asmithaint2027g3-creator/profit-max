import React from 'react';
import PageTemplate from '../../components/offerings/PageTemplate';
import { industriesMidMarketData } from '../../../data/industries/industriesMidMarketData';

export default function IndustriesMidMarket() {
  return <PageTemplate data={industriesMidMarketData} />;
}
