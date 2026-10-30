import { GrowthCapabilityPageData } from '../types';
import { page02PhysicsData } from './page02Physics';
import { page03IntelligenceData } from './page03Intelligence';
import { page04PotentialDiscoveryData } from './page04PotentialDiscovery';
import { page05LeakageRecoveryData } from './page05LeakageRecovery';
import { page06BundlingOfferData } from './page06BundlingOffer';
import { page07ValueCaptureData } from './page07ValueCapture';
import { page08ProductInnovationData } from './page08ProductInnovation';
import { page09AccelerationData } from './page09Acceleration';
import { page10CommandCenterData } from './page10CommandCenter';

export {
  page02PhysicsData,
  page03IntelligenceData,
  page04PotentialDiscoveryData,
  page05LeakageRecoveryData,
  page06BundlingOfferData,
  page07ValueCaptureData,
  page08ProductInnovationData,
  page09AccelerationData,
  page10CommandCenterData
};

export const allGrowthCapabilities: GrowthCapabilityPageData[] = [
  page02PhysicsData,
  page03IntelligenceData,
  page04PotentialDiscoveryData,
  page05LeakageRecoveryData,
  page06BundlingOfferData,
  page07ValueCaptureData,
  page08ProductInnovationData,
  page09AccelerationData,
  page10CommandCenterData
];

export const growthCapabilityBySlug: Record<string, GrowthCapabilityPageData> = {
  'revenue-physics': page02PhysicsData,
  'revenue-intelligence': page03IntelligenceData,
  'revenue-potential-discovery': page04PotentialDiscoveryData,
  'revenue-leakage-recovery': page05LeakageRecoveryData,
  'revenue-bundling-offer-engineering': page06BundlingOfferData,
  'value-capture-engineering': page07ValueCaptureData,
  'product-innovation-revenue-expansion': page08ProductInnovationData,
  'revenue-acceleration': page09AccelerationData,
  'executive-revenue-command-center': page10CommandCenterData
};

