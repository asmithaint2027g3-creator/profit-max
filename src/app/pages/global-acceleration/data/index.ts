import { AccelerationPageData } from '../types';
import { page01MarketAccessData } from './page01MarketAccess';
import { page02DemandNetworksData } from './page02DemandNetworks';
import { page03ExportGrowthData } from './page03ExportGrowth';
import { page04PartnerEcosystemsData } from './page04PartnerEcosystems';
import { page05SupplyNetworksData } from './page05SupplyNetworks';
import { page06RevenueEnginesData } from './page06RevenueEngines';
import { page07CapitalFinanceData } from './page07CapitalFinance';
import { page08AiExpansionData } from './page08AiExpansion';

export {
  page01MarketAccessData,
  page02DemandNetworksData,
  page03ExportGrowthData,
  page04PartnerEcosystemsData,
  page05SupplyNetworksData,
  page06RevenueEnginesData,
  page07CapitalFinanceData,
  page08AiExpansionData
};

export const allGlobalAccelerationPages: AccelerationPageData[] = [
  page01MarketAccessData,
  page02DemandNetworksData,
  page03ExportGrowthData,
  page04PartnerEcosystemsData,
  page05SupplyNetworksData,
  page06RevenueEnginesData,
  page07CapitalFinanceData,
  page08AiExpansionData
];

export const globalAccelerationPagesMap: Record<string, AccelerationPageData> = {
  'global-market-access': page01MarketAccessData,
  'market-access': page01MarketAccessData,
  'market-intelligence': page01MarketAccessData,

  'global-demand-networks': page02DemandNetworksData,
  'demand-networks': page02DemandNetworksData,
  'cross-border-strategy': page02DemandNetworksData,

  'export-growth-engine': page03ExportGrowthData,

  'strategic-partner-ecosystems': page04PartnerEcosystemsData,
  'partner-ecosystems': page04PartnerEcosystemsData,

  'global-supply-networks': page05SupplyNetworksData,
  'supply-networks': page05SupplyNetworksData,

  'global-revenue-engines': page06RevenueEnginesData,
  'revenue-engines': page06RevenueEnginesData,
  'global-revops': page06RevenueEnginesData,

  'global-capital-finance': page07CapitalFinanceData,
  'capital-finance': page07CapitalFinanceData,
  'expansion-office': page07CapitalFinanceData,

  'ai-powered-expansion': page08AiExpansionData,
  'ai-global-scaling': page08AiExpansionData
};

