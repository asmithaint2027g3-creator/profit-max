import { BrowserRouter as Router, Routes, Route, Navigate, useParams } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import Navigation from './components/Navigation';
import ChatBot from './components/ChatBot';
import Footer from './components/Footer';

import Home from './pages/Home';
import ScrollToTopAndHash from './components/ScrollToTopAndHash';

const BookConsultation = lazy(() => import('./pages/BookConsultation'));
const Crypto = lazy(() => import('./pages/Crypto'));
const Outcomes = lazy(() => import('./pages/Outcomes'));
const Solutions = lazy(() => import('./pages/Solutions'));
const Capabilities = lazy(() => import('./pages/Capabilities'));
const Industries = lazy(() => import('./pages/Industries'));
const IndustriesB2B = lazy(() => import('./pages/industries/IndustriesB2B'));
const IndustriesB2C = lazy(() => import('./pages/industries/IndustriesB2C'));
const IndustriesEnterprise = lazy(() => import('./pages/industries/IndustriesEnterprise'));
const IndustriesMidMarket = lazy(() => import('./pages/industries/IndustriesMidMarket'));
const IndustriesStartups = lazy(() => import('./pages/industries/IndustriesStartups'));
const IndustriesSpecialized = lazy(() => import('./pages/industries/IndustriesSpecialized'));
const Offerings = lazy(() => import('./pages/Offerings'));
const ProfitPoolDiscovery = lazy(() => import('./pages/offerings/ProfitPoolDiscovery'));
const DemandEngineering = lazy(() => import('./pages/offerings/DemandEngineering'));
const SalesAcceleration = lazy(() => import('./pages/offerings/SalesAcceleration'));
const RevenueOperations = lazy(() => import('./pages/offerings/RevenueOperations'));
const GtmTransformation = lazy(() => import('./pages/offerings/GtmTransformation'));
const CustomerSuccess = lazy(() => import('./pages/offerings/CustomerSuccess'));
const GrowthIntelligence = lazy(() => import('./pages/offerings/GrowthIntelligence'));
const AiTrustGovernance = lazy(() => import('./pages/offerings/AiTrustGovernance'));
const Engagement = lazy(() => import('./pages/Engagement'));
const EngagementModels = lazy(() => import('./pages/engagement/EngagementModels'));
const EngagementDiscoveryStack = lazy(() => import('./pages/engagement/EngagementDiscoveryStack'));
const EngagementDeliveryTracks = lazy(() => import('./pages/engagement/EngagementDeliveryTracks'));
const EngagementStagePlaybooks = lazy(() => import('./pages/engagement/EngagementStagePlaybooks'));
const EngagementBusinessSituations = lazy(() => import('./pages/engagement/EngagementBusinessSituations'));
const EngagementJourneys = lazy(() => import('./pages/engagement/EngagementJourneys'));
const EngagementCommercials = lazy(() => import('./pages/engagement/EngagementCommercials'));
const EngagementModelSelector = lazy(() => import('./pages/engagement/EngagementModelSelector'));
const EngagementKpiLibrary = lazy(() => import('./pages/engagement/EngagementKpiLibrary'));
const EngagementOnboarding = lazy(() => import('./pages/engagement/EngagementOnboarding'));
const EngagementGlossaryFaq = lazy(() => import('./pages/engagement/EngagementGlossaryFaq'));
const Resources = lazy(() => import('./pages/Resources'));
const Company = lazy(() => import('./pages/Company'));
const Privacy = lazy(() => import('./pages/Privacy'));
const Terms = lazy(() => import('./pages/Terms'));
const Security = lazy(() => import('./pages/Security'));
const Cookies = lazy(() => import('./pages/Cookies'));
const Copyright = lazy(() => import('./pages/Copyright'));
const Sitemap = lazy(() => import('./pages/Sitemap'));
const DemandPulse = lazy(() => import('./pages/DemandPulse'));
const Partners = lazy(() => import('./pages/Partners'));
const Career = lazy(() => import('./pages/Career'));
const TalkToExpert = lazy(() => import('./pages/TalkToExpert'));
const AIDemandDiscovery = lazy(() => import('./pages/AIDemandDiscovery'));
const AILeadGeneration = lazy(() => import('./pages/AILeadGeneration'));
const AILeadNurturing = lazy(() => import('./pages/AILeadNurturing'));
const AIMVPValidation = lazy(() => import('./pages/AIMVPValidation'));
const AILeadSalesTransformation = lazy(() => import('./pages/AILeadSalesTransformation'));
const AIRevenueOperations = lazy(() => import('./pages/AIRevenueOperations'));
const AIRevenueAcceleration = lazy(() => import('./pages/AIRevenueAcceleration'));
const BehaviourAnalytics = lazy(() => import('./pages/BehaviourAnalytics'));
const AnalyticsDashboard = lazy(() => import('./pages/AnalyticsDashboard'));
const ServiceDetail = lazy(() => import('./pages/ServiceDetail'));
const ServicePage = lazy(() => import('./pages/ServicePage'));
const Pricing = lazy(() => import('./pages/Pricing'));
const AIBrandAcceleration = lazy(() => import('./pages/AIBrandAcceleration'));
const AIReputationAcceleration = lazy(() => import('./pages/AIReputationAcceleration'));
const CookieConsent = lazy(() => import('./components/CookieConsent'));
const IcoLanding = lazy(() => import('./pages/ico/IcoLanding'));
const IcoIntelligence = lazy(() => import('./pages/ico/IcoIntelligence'));
const IcoLaunchGrowth = lazy(() => import('./pages/ico/IcoLaunchGrowth'));
const IcoSolutionsEngagement = lazy(() => import('./pages/ico/IcoSolutionsEngagement'));
const IcoTrustPerformance = lazy(() => import('./pages/ico/IcoTrustPerformance'));
const IcoSalesEnablement = lazy(() => import('./pages/ico/IcoSalesEnablement'));
const AiNativeSalesHub = lazy(() => import('./pages/ai-native-sales/AiNativeSalesHub'));
const RevenueIntelligencePage = lazy(() => import('./pages/ai-native-sales/RevenueIntelligencePage'));
const ProspectingPipelinePage = lazy(() => import('./pages/ai-native-sales/ProspectingPipelinePage'));
const SalesExecutionPage = lazy(() => import('./pages/ai-native-sales/SalesExecutionPage'));
const RevenueOperationsPage = lazy(() => import('./pages/ai-native-sales/RevenueOperationsPage'));
const SalesAgentsPage = lazy(() => import('./pages/ai-native-sales/SalesAgentsPage'));
const CustomerGrowthPage = lazy(() => import('./pages/ai-native-sales/CustomerGrowthPage'));
const AgenticSdrPage = lazy(() => import('./pages/ai-native-sales/AgenticSdrPage'));
const PredictiveIntelligencePage = lazy(() => import('./pages/ai-native-sales/PredictiveIntelligencePage'));
const DealExecutionPage = lazy(() => import('./pages/ai-native-sales/DealExecutionPage'));
const IntegrationsSecurityPage = lazy(() => import('./pages/ai-native-sales/IntegrationsSecurityPage'));
const GrowthScienceHub = lazy(() => import('./pages/growth-science/GrowthScienceHub'));
const RevenuePhysicsPage = lazy(() => import('./pages/growth-science/RevenuePhysicsPage'));
const FrictionDiagnosticsPage = lazy(() => import('./pages/growth-science/FrictionDiagnosticsPage'));
const AiAccelerationEnginesPage = lazy(() => import('./pages/growth-science/AiAccelerationEnginesPage'));
const ProprietaryGrowthModelsPage = lazy(() => import('./pages/growth-science/ProprietaryGrowthModelsPage'));
const ExecutiveTelemetryPage = lazy(() => import('./pages/growth-science/ExecutiveTelemetryPage'));
const GlobalAccelerationHub = lazy(() => import('./pages/global-acceleration/GlobalAccelerationHub'));
const MarketIntelligencePage = lazy(() => import('./pages/global-acceleration/MarketIntelligencePage'));
const CrossBorderStrategyPage = lazy(() => import('./pages/global-acceleration/CrossBorderStrategyPage'));
const GlobalPartnerEcosystemsPage = lazy(() => import('./pages/global-acceleration/GlobalPartnerEcosystemsPage'));
const GlobalRevOpsPage = lazy(() => import('./pages/global-acceleration/GlobalRevOpsPage'));
const AiGlobalScalingPage = lazy(() => import('./pages/global-acceleration/AiGlobalScalingPage'));
const ExecutiveExpansionOfficePage = lazy(() => import('./pages/global-acceleration/ExecutiveExpansionOfficePage'));
const CaseStudiesHub = lazy(() => import('./pages/case-studies/CaseStudiesHub'));
const FeaturedTransformationsPage = lazy(() => import('./pages/case-studies/FeaturedTransformationsPage'));
const AiNativeTransformationsPage = lazy(() => import('./pages/case-studies/AiNativeTransformationsPage'));
const EnterpriseSaasPipelineGrowthPage = lazy(() => import('./pages/case-studies/EnterpriseSaasPipelineGrowthPage'));
const GlobalManufacturingExpansionPage = lazy(() => import('./pages/case-studies/GlobalManufacturingExpansionPage'));
const HealthcareForecastAccuracyPage = lazy(() => import('./pages/case-studies/HealthcareForecastAccuracyPage'));
const FinancialServicesAiTransformationPage = lazy(() => import('./pages/case-studies/FinancialServicesAiTransformationPage'));
const TechnologyCustomerExpansionPage = lazy(() => import('./pages/case-studies/TechnologyCustomerExpansionPage'));
const SaasRevenueOperationsPage = lazy(() => import('./pages/case-studies/SaasRevenueOperationsPage'));
const ManufacturingMarginImprovementPage = lazy(() => import('./pages/case-studies/ManufacturingMarginImprovementPage'));
const HealthcareGtmTransformationPage = lazy(() => import('./pages/case-studies/HealthcareGtmTransformationPage'));
import TabExitPopup from './components/TabExitPopup';
import StickyCtaBar from './components/StickyCtaBar';
import WhatsAppWidget from './components/WhatsAppWidget';
import { servicesData } from '../data/navigationContent';

import { useAnalytics } from '../hooks/useAnalytics';
import { useTrafficAnalysis } from '../hooks/useTrafficAnalysis';
import { useContextAwareChat } from '../hooks/useContextAwareChat';

function AnalyticsTracker() {
  useAnalytics();
  useTrafficAnalysis();
  useContextAwareChat();
  return null;
}

// Fallback loader for lazy pages
const PageLoader = () => (
  <div className="flex items-center justify-center min-h-[50vh]">
    <div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
  </div>
);

function NavigateToIndustriesSection() {
  const { slug } = useParams<{ slug: string }>();
  if (slug && servicesData[slug]) {
    return <ServiceDetail />;
  }
  return <Navigate to="/industries" replace />;
}

function NavigateToExploreSection() {
  const { slug } = useParams<{ slug: string }>();
  if (slug && servicesData[slug]) {
    return <ServiceDetail />;
  }
  if (slug?.startsWith('crypto-')) {
    return <Navigate to={`/crypto#${slug}`} replace />;
  }
  return <ServiceDetail />;
}


function NavigateToSolutionsSection() {
  const { slug } = useParams<{ slug: string }>();
  return <Navigate to={`/solutions#${slug}`} replace />;
}

export default function App() {
  return (
    <Router>
      <ScrollToTopAndHash />
      <AnalyticsTracker />
      <div className="min-h-screen bg-white pb-20 lg:pb-0">
        <Navigation />
        <main>
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/book-consultation" element={<BookConsultation />} />
              <Route path="/crypto" element={<Crypto />} />
              <Route path="/ico-acceleration" element={<IcoLanding />} />
              <Route path="/ico-acceleration/intelligence" element={<IcoIntelligence />} />
              <Route path="/ico-acceleration/launch-growth" element={<IcoLaunchGrowth />} />
              <Route path="/ico-acceleration/solutions-engagement" element={<IcoSolutionsEngagement />} />
              <Route path="/ico-acceleration/trust-performance" element={<IcoTrustPerformance />} />
              <Route path="/ico-acceleration/sales-enablement" element={<IcoSalesEnablement />} />
              <Route path="/ai-driven-sales-transformation" element={<AiNativeSalesHub />} />
              <Route path="/ai-native-sales" element={<AiNativeSalesHub />} />
              <Route path="/ai-sales" element={<AiNativeSalesHub />} />
              <Route path="/ai-native-sales/revenue-intelligence" element={<RevenueIntelligencePage />} />
              <Route path="/ai-native-sales/prospecting" element={<ProspectingPipelinePage />} />
              <Route path="/ai-native-sales/sales-execution" element={<SalesExecutionPage />} />
              <Route path="/ai-native-sales/revops" element={<RevenueOperationsPage />} />
              <Route path="/ai-native-sales/agents" element={<SalesAgentsPage />} />
              <Route path="/ai-native-sales/customer-growth" element={<CustomerGrowthPage />} />
              <Route path="/ai-native-sales/agentic-sdr" element={<AgenticSdrPage />} />
              <Route path="/ai-native-sales/predictive-intelligence" element={<PredictiveIntelligencePage />} />
              <Route path="/ai-native-sales/deal-execution" element={<DealExecutionPage />} />
              <Route path="/ai-native-sales/integrations" element={<IntegrationsSecurityPage />} />
              <Route path="/growth-acceleration-science" element={<GrowthScienceHub />} />
              <Route path="/growth-science" element={<GrowthScienceHub />} />
              <Route path="/growth-science/revenue-physics" element={<RevenuePhysicsPage />} />
              <Route path="/growth-science/friction-diagnostics" element={<FrictionDiagnosticsPage />} />
              <Route path="/growth-science/ai-engines" element={<AiAccelerationEnginesPage />} />
              <Route path="/growth-science/growth-models" element={<ProprietaryGrowthModelsPage />} />
              <Route path="/growth-science/executive-telemetry" element={<ExecutiveTelemetryPage />} />
              <Route path="/global-acceleration" element={<GlobalAccelerationHub />} />
              <Route path="/global-business-accelerations" element={<GlobalAccelerationHub />} />
              <Route path="/global-market-acceleration" element={<Navigate to="/global-acceleration" replace />} />
              <Route path="/global-acceleration/market-intelligence" element={<MarketIntelligencePage />} />
              <Route path="/global-acceleration/cross-border-strategy" element={<CrossBorderStrategyPage />} />
              <Route path="/global-acceleration/partner-ecosystems" element={<GlobalPartnerEcosystemsPage />} />
              <Route path="/global-acceleration/global-revops" element={<GlobalRevOpsPage />} />
              <Route path="/global-acceleration/ai-global-scaling" element={<AiGlobalScalingPage />} />
              <Route path="/global-acceleration/expansion-office" element={<ExecutiveExpansionOfficePage />} />
              <Route path="/demand-pulse" element={<DemandPulse />} />
              <Route path="/outcomes" element={<Outcomes />} />
              <Route path="/case-studies" element={<CaseStudiesHub />} />
              <Route path="/case-studies/featured" element={<FeaturedTransformationsPage />} />
              <Route path="/case-studies/ai-native" element={<AiNativeTransformationsPage />} />
              <Route path="/case-studies/enterprise-saas-pipeline-growth" element={<EnterpriseSaasPipelineGrowthPage />} />
              <Route path="/case-studies/global-manufacturing-expansion" element={<GlobalManufacturingExpansionPage />} />
              <Route path="/case-studies/healthcare-forecast-accuracy" element={<HealthcareForecastAccuracyPage />} />
              <Route path="/case-studies/financial-services-ai-transformation" element={<FinancialServicesAiTransformationPage />} />
              <Route path="/case-studies/technology-customer-expansion" element={<TechnologyCustomerExpansionPage />} />
              <Route path="/case-studies/saas-revenue-operations" element={<SaasRevenueOperationsPage />} />
              <Route path="/case-studies/manufacturing-margin-improvement" element={<ManufacturingMarginImprovementPage />} />
              <Route path="/case-studies/healthcare-gtm-transformation" element={<HealthcareGtmTransformationPage />} />
              <Route path="/use-cases" element={<Navigate to="/case-studies" replace />} />
              <Route path="/solutions" element={<Solutions />} />
              <Route path="/solutions/:slug" element={<NavigateToSolutionsSection />} />
              <Route path="/capabilities" element={<Navigate to="/solutions" replace />} />
              <Route path="/industries" element={<Navigate to="/industries/b2b" replace />} />
              <Route path="/industries/b2b" element={<IndustriesB2B />} />
              <Route path="/industries/b2c" element={<IndustriesB2C />} />
              <Route path="/industries/enterprise" element={<IndustriesEnterprise />} />
              <Route path="/industries/midmarket" element={<IndustriesMidMarket />} />
              <Route path="/industries/mid-market" element={<Navigate to="/industries/midmarket" replace />} />
              <Route path="/industries/startups" element={<IndustriesStartups />} />
              <Route path="/industries/sectors" element={<IndustriesSpecialized />} />
              <Route path="/industries/specialized" element={<Navigate to="/industries/sectors" replace />} />
              <Route path="/industries/*" element={<Navigate to="/industries/b2b" replace />} />
              <Route path="/offerings" element={<Offerings />} />
              <Route path="/offerings/profit-pool-discovery" element={<ProfitPoolDiscovery />} />
              <Route path="/offerings/demand-engineering" element={<DemandEngineering />} />
              <Route path="/offerings/sales-acceleration" element={<SalesAcceleration />} />
              <Route path="/offerings/revenue-operations" element={<RevenueOperations />} />
              <Route path="/offerings/gtm-transformation" element={<GtmTransformation />} />
              <Route path="/offerings/customer-success" element={<CustomerSuccess />} />
              <Route path="/offerings/customer-growth" element={<CustomerSuccess />} />
              <Route path="/offerings/ai-governance" element={<AiTrustGovernance />} />
              <Route path="/offerings/growth-intelligence" element={<GrowthIntelligence />} />
              <Route path="/offerings/ai-trust-governance" element={<AiTrustGovernance />} />
              <Route path="/offerings/*" element={<Navigate to="/offerings" replace />} />
              <Route path="/origin" element={<Navigate to="/offerings/profit-pool-discovery" replace />} />
              <Route path="/origin/*" element={<Navigate to="/offerings/profit-pool-discovery" replace />} />
              <Route path="/engagement" element={<Engagement />} />
              <Route path="/engagement-model" element={<Engagement />} />
              <Route path="/engagement-models" element={<EngagementModels />} />
              <Route path="/engagement-model/models" element={<EngagementModels />} />
              <Route path="/engagement-model/discovery-stack" element={<EngagementDiscoveryStack />} />
              <Route path="/engagement-model/delivery-tracks" element={<EngagementDeliveryTracks />} />
              <Route path="/engagement-model/stage-playbooks" element={<EngagementStagePlaybooks />} />
              <Route path="/engagement-model/business-situations" element={<EngagementBusinessSituations />} />
              <Route path="/engagement-model/journeys" element={<EngagementJourneys />} />
              <Route path="/engagement-model/commercials" element={<EngagementCommercials />} />
              <Route path="/engagement-model/model-selector" element={<EngagementModelSelector />} />
              <Route path="/engagement-model/kpi-library" element={<EngagementKpiLibrary />} />
              <Route path="/engagement-model/onboarding" element={<EngagementOnboarding />} />
              <Route path="/engagement-model/glossary-faq" element={<EngagementGlossaryFaq />} />
              <Route path="/resources" element={<Resources />} />
              {/* ── New consolidated service routes ── */}
              <Route path="/services" element={<Navigate to="/offerings" replace />} />
              <Route path="/services/ai-growth-engine" element={<ServicePage />} />
              <Route path="/services/revenue-acceleration" element={<ServicePage />} />
              <Route path="/services/lead-generation" element={<ServicePage />} />
              <Route path="/services/demand-discovery" element={<ServicePage />} />
              <Route path="/services/customer-discovery" element={<ServicePage />} />
              <Route path="/services/competitive-discovery" element={<ServicePage />} />
              <Route path="/services/product-market-fit" element={<ServicePage />} />
              {/* ── New top-level routes ── */}
              <Route path="/company" element={<Company />} />
              <Route path="/about" element={<Company />} />
              <Route path="/about-us" element={<Company />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/security" element={<Security />} />
              <Route path="/cookies" element={<Cookies />} />
              <Route path="/copyright" element={<Copyright />} />
              <Route path="/sitemap" element={<Sitemap />} />
              <Route path="/demand-pulse" element={<DemandPulse />} />
              <Route path="/partners" element={<Partners />} />
              <Route path="/career" element={<Career />} />
              <Route path="/talk-to-expert" element={<TalkToExpert />} />
              <Route path="/ai-demand-discovery" element={<Navigate to="/solutions#ai-demand-discovery" replace />} />
              <Route path="/ai-lead-generation" element={<Navigate to="/offerings" replace />} />
              <Route path="/ai-lead-nurturing" element={<Navigate to="/offerings" replace />} />
              <Route path="/ai-mvp-validation" element={<Navigate to="/offerings" replace />} />
              <Route path="/ai-lead-sales-transformation" element={<Navigate to="/offerings" replace />} />
              <Route path="/ai-revenue-operations" element={<Navigate to="/solutions#ai-revenue-operations" replace />} />
              <Route path="/ai-revenue-acceleration" element={<Navigate to="/solutions#ai-revenue-acceleration" replace />} />
              <Route path="/behaviour-analytics" element={<BehaviourAnalytics />} />
              <Route path="/analytics" element={<AnalyticsDashboard />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/ai-brand-acceleration" element={<Navigate to="/solutions#ai-brand-acceleration" replace />} />
              <Route path="/ai-reputation-acceleration" element={<Navigate to="/solutions#ai-reputation-acceleration" replace />} />
              <Route path="/hidden-revenue-capture" element={<Navigate to="/solutions#hidden-revenue-capture" replace />} />
              <Route path="/about" element={<Navigate to="/company#about" replace />} />
              <Route path="/mission" element={<Navigate to="/company#mission" replace />} />
              <Route path="/leadership" element={<Navigate to="/company#leadership" replace />} />
              <Route path="/offices" element={<Navigate to="/company#offices" replace />} />
              <Route path="/careers" element={<Navigate to="/career" replace />} />
              <Route path="/contact" element={<Navigate to="/book-consultation" replace />} />
              <Route path="/explore/:slug" element={<NavigateToExploreSection />} />
              <Route path="/products" element={<Navigate to="/demand-pulse" replace />} />
            </Routes>
          </Suspense>
        </main>

        <ChatBot />
        <CookieConsent />
        <TabExitPopup />
        <StickyCtaBar />
        <WhatsAppWidget />
        <Footer />
      </div>
    </Router>
  );
}
