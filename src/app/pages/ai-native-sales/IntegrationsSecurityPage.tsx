import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ShieldCheck,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Lock,
  Server,
  Database,
  Cloud,
  FileText,
  Key,
  Shield,
  Layers,
  ChevronDown,
  Cpu,
  Activity,
  Download,
  HelpCircle,
  Building2,
  Coins,
  HeartPulse,
  Landmark,
  Radio
} from 'lucide-react';
import AiSalesStickySubNav from '../../components/AiSalesStickySubNav';
import AiSalesIntakeForm from '../../components/forms/AiSalesIntakeForm';

export default function IntegrationsSecurityPage() {
  useEffect(() => {
    document.title = 'Integrations & Security Architecture | ProfitMachines AI Native Sales';
    window.scrollTo(0, 0);
  }, []);

  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const subNavAnchors = [
    { id: 'integrations', label: 'Tech Stack Integrations' },
    { id: 'security', label: 'Security Architecture' },
    { id: 'compliance', label: 'Compliance Frameworks' }
  ];

  const integrationCategories = [
    {
      category: '1. CRM Systems',
      subtitle: 'Bidirectional Real-Time Synchronization',
      platforms: ['Salesforce Enterprise', 'HubSpot Operations Hub', 'Microsoft Dynamics 365'],
      capabilities: [
        'Real-time webhook and REST API event sync (< 500ms latency)',
        'Automated custom object logging (committee maps, intent scores)',
        'Zero-overwrite field integrity with programmatic conflict resolution',
        'Native standard object mapping (Leads, Contacts, Accounts, Opportunities)'
      ]
    },
    {
      category: '2. Sales Engagement & Conversation Intel',
      subtitle: 'Synchronized Multichannel Cadences',
      platforms: ['Outreach.io', 'SalesLoft', 'Apollo.io', 'Gong.io / Chorus'],
      capabilities: [
        'Programmatic sequence injection and dynamic cadence enrollment',
        'Automatic task assignment and rep calendar availability locking',
        'In-flight call recording transcript parsing and objection classification',
        'Suppression list synchronization preventing cross-cadence collisions'
      ]
    },
    {
      category: '3. Intent & Account Intelligence',
      subtitle: 'Continuous Dark-Funnel Telemetry Ingestion',
      platforms: ['Bombora Company Surge', '6sense Dark Funnel', 'G2 Buyer Intent', 'ZoomInfo / Clearbit'],
      capabilities: [
        'Multi-vendor intent signal normalization and composite scoring',
        'Sub-second account tier promotion upon category surge detection',
        'Verified corporate email and direct phone line resolution',
        'Automated TAM coverage gap alerts for unmapped accounts'
      ]
    },
    {
      category: '4. Executive Communications',
      subtitle: 'In-Flight HUD & Instant Stakeholder Alerting',
      platforms: ['Slack Enterprise Grid', 'Microsoft Teams', 'Zoom Video', 'Google Workspace / Office 365'],
      capabilities: [
        'Live Slack/Teams alerts when Tier-1 accounts surge in intent',
        'In-meeting HUD battlecard delivery when competitor names surface',
        'Bespoke calendar invite generation with Zoom/Teams bridge links',
        'Delegated executive mailbox sending with DKIM/DMARC alignment'
      ]
    },
    {
      category: '5. Data Warehouses & Lakes',
      subtitle: 'Zero-Copy Analytics & Enterprise Governance',
      platforms: ['Snowflake Data Cloud', 'Google BigQuery', 'Databricks Lakehouse', 'Amazon Redshift'],
      capabilities: [
        'Zero-copy querying directly inside your VPC or private cloud',
        'Custom SQL transform pipelines for proprietary score modeling',
        'Daily automated export of all revenue telemetry and agent logs',
        'Column-level encryption and masking for sensitive financial metrics'
      ]
    }
  ];

  const securityLayers = [
    {
      layer: 'Layer 01',
      title: 'Infrastructure Security',
      standards: 'Multi-Region Isolation · AWS & Google Cloud VPC',
      description: 'Dedicated isolated container clusters deployed across SOC 2 Type II certified data centers. Multi-AZ redundancy with automatic failover and DDOS mitigation via Cloudflare Enterprise.',
      metrics: '99.99% Uptime SLA guaranteed by contractual credit.'
    },
    {
      layer: 'Layer 02',
      title: 'Data Security & Cryptography',
      standards: 'AES-256 at Rest · TLS 1.3 in Transit · CMEK Option',
      description: 'All customer data is encrypted using AES-256 with customer-managed encryption keys (CMEK) via AWS KMS or HashiCorp Vault. TLS 1.3 strictly enforced on all public and internal service meshes.',
      metrics: '100% Data Encryption across memory, disk, and wire.'
    },
    {
      layer: 'Layer 03',
      title: 'Access Security & Identity',
      standards: 'Zero-Trust Architecture · RBAC · SAML SSO · MFA',
      description: 'Zero-trust perimeter. Role-based access control (RBAC) with granular least-privilege principles. Seamless enterprise single sign-on (Okta, Azure AD, Ping Identity) with mandatory MFA.',
      metrics: 'Granular audit logs recorded on every access request.'
    },
    {
      layer: 'Layer 04',
      title: 'Application Security & LLM Governance',
      standards: 'OWASP Top 10 · Quarterly Third-Party Pen-Testing',
      description: 'Continuous static (SAST) and dynamic (DAST) code vulnerability scanning. Zero customer data is ever utilized to train public foundation models (OpenAI, Anthropic, or Meta). Strict air-gapped enterprise model endpoints.',
      metrics: 'Contractual Zero-Training Guarantee with mutual NDA.'
    },
    {
      layer: 'Layer 05',
      title: 'Compliance & Auditability',
      standards: 'SOC 2 Type II · ISO 27001 · GDPR · CCPA',
      description: 'Independently audited by top-tier security accounting firms. Complete tamper-evident audit logs of every prompt, reasoning chain, message sent, and API payload retained for 7 years.',
      metrics: 'Annual SOC 2 Type II reports available under NDA.'
    }
  ];

  const complianceMatrix = [
    {
      industry: 'Enterprise SaaS & Cloud',
      icon: Cloud,
      regulations: 'SOC 2 Type II, ISO 27001, GDPR, CCPA',
      safeguards: 'Data residency controls in US, EU, and APAC; automated right-to-be-forgotten deletion workflows; standard DPA with SCCs.'
    },
    {
      industry: 'Financial Services & Banking',
      icon: Landmark,
      regulations: 'PCI-DSS, SEC Rule 17a-4, FINRA, GLBA',
      safeguards: 'Immutable WORM compliance logs, continuous supervision of outbound claims, strict suppression of non-public material information.'
    },
    {
      industry: 'Healthcare & Life Sciences',
      icon: HeartPulse,
      regulations: 'HIPAA, HITECH, FDA Title 21 CFR Part 11',
      safeguards: 'Business Associate Agreements (BAA) executed; PHI/PII automated redaction filters prior to any model ingestion; dedicated isolated enclaves.'
    },
    {
      industry: 'Crypto & Digital Assets',
      icon: Coins,
      regulations: 'MiCA (EU), VARA (Dubai), OFAC Sanctions',
      safeguards: 'Automated wallet address screening; strict sanctions screening against OFAC/SDN lists; zero promotional financial advisory claims.'
    }
  ];

  const deploymentModels = [
    {
      title: 'Multi-Tenant SaaS',
      tier: 'Standard Enterprise',
      desc: 'Logically isolated tenant environments running on ProfitMachines secure infrastructure with dedicated cryptographic keys and 99.99% SLA.',
      highlight: 'Fastest time-to-value: live within 14 days.'
    },
    {
      title: 'Single-Tenant Dedicated',
      tier: 'High-Compliance Enterprise',
      desc: 'Physically separated compute and database instances dedicated exclusively to your organization with custom VPC peering and IP whitelisting.',
      highlight: 'Ideal for regulated FinTech and Tier-1 enterprises.'
    },
    {
      title: 'On-Premise / Private VPC Cloud',
      tier: 'Defense & Institutional Tier',
      desc: 'Deploy the complete ProfitMachines Autonomous Revenue OS directly inside your AWS, Azure, or Google Cloud private VPC with zero data egress.',
      highlight: 'Total organizational data custody and sovereignty.'
    }
  ];

  const securityFaqs = [
    {
      q: 'Does ProfitMachines train machine learning models on our proprietary corporate data?',
      a: 'Strictly No. We maintain an ironclad contractual guarantee that your CRM records, prospect conversations, rep transcripts, and proprietary positioning are never used to train or fine-tune public foundation models. We utilize private, dedicated enterprise inference endpoints with zero data retention.'
    },
    {
      q: 'How does ProfitMachines integrate with our existing CRM without disrupting active sales reps?',
      a: 'Our architecture uses a non-destructive bidirectional sync via standard REST and streaming APIs. ProfitMachines operates as a discrete intelligence layer, populating dedicated custom objects (e.g., Committee Map, Intent Tier, Autopilot Sequences) while preserving your core sales workflows and field mappings.'
    },
    {
      q: 'Can we use our own Customer-Managed Encryption Keys (CMEK)?',
      a: 'Yes. For Single-Tenant and Dedicated VPC deployments, we support Customer-Managed Encryption Keys (CMEK) integrated with AWS KMS, Google Cloud KMS, or HashiCorp Vault, ensuring your InfoSec team retains ultimate cryptographic custody over all data at rest.'
    },
    {
      q: 'What happens if a prospect unsubscribes or requests data deletion under GDPR/CCPA?',
      a: 'Unsubscribe and deletion requests are processed in real time (< 3 seconds). The prospect’s email, phone number, and domain are instantly propagated to global suppression lists across all agentic SDR pods, CRM systems, and outbound channels, with a cryptographic receipt generated for audit compliance.'
    }
  ];

  const resourceCards = [
    {
      title: 'SOC 2 Type II Audit Report',
      format: 'PDF · Audit Report (Deloitte)',
      size: '2.4 MB',
      desc: 'Independent assessment of security, availability, and confidentiality controls.'
    },
    {
      title: 'ISO/IEC 27001 Certificate',
      format: 'PDF · Formal Certification',
      size: '850 KB',
      desc: 'International certification for Information Security Management Systems (ISMS).'
    },
    {
      title: 'Enterprise Security Architecture Whitepaper',
      format: 'PDF · Technical Whitepaper',
      size: '4.8 MB',
      desc: 'In-depth 36-page architectural breakdown of zero-trust meshes, CMEK, and model guardrails.'
    },
    {
      title: 'Standard Data Processing Agreement (DPA)',
      format: 'DOCX / PDF · Legal Framework',
      size: '1.1 MB',
      desc: 'Pre-approved enterprise DPA including standard EU Standard Contractual Clauses (SCCs).'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50/50 text-slate-900 pt-16 lg:pt-[72px]">
      
      {/* ── STICKY SUB-NAV ── */}
      <AiSalesStickySubNav
        currentPageTitle="Integrations & Security"
        currentPath="/ai-native-sales/integrations"
        anchors={subNavAnchors}
      />

      {/* ── HERO BANNER ── */}
      <section className="relative bg-slate-950 text-white py-14 lg:py-20 overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-blue-950/40" />
        </div>

        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-mono uppercase tracking-wider mb-4">
              <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
              <span>Category 04 · Enterprise-Grade Stack Architecture</span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
              Zero-Trust <span className="text-blue-400">Integrations & Security</span> Architecture
            </h1>

            <p className="text-lg text-slate-300 leading-relaxed font-normal mb-8">
              Seamless bidirectional integration across your existing GTM stack paired with bank-grade SOC 2 Type II, ISO 27001, and zero-model-training security guarantees.
            </p>

            <div className="flex flex-wrap items-center gap-6 text-xs font-mono text-slate-400 border-t border-slate-800/80 pt-6">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span className="text-white font-bold">99.99% Uptime SLA</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-400" />
                <span className="text-white font-bold">100% AES-256 & TLS 1.3</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-purple-400" />
                <span className="text-white font-bold">SOC 2 Type II & ISO 27001</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION A: TECH STACK INTEGRATIONS (#integrations) ── */}
      <section id="integrations" className="scroll-mt-28 py-16 lg:py-24 bg-white border-b border-slate-200">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600 block mb-2">
              Section A · Ecosystem Architecture
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
              Zero Rip-and-Replace Integration Philosophy
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              AI Native Sales does not ask you to replace your software investments. Our intelligence layer sits directly atop your existing enterprise stack, synchronizing via high-speed bidirectional APIs with sub-second latency:
            </p>
          </div>

          <div className="space-y-6">
            {integrationCategories.map((cat, idx) => (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-slate-50 border border-slate-200/90 hover:border-blue-300 hover:shadow-lg transition-all"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  
                  <div className="lg:col-span-4 space-y-2">
                    <span className="text-xs font-mono font-bold text-blue-600 uppercase tracking-wider">
                      INTEGRATION DOMAIN 0{idx + 1}
                    </span>
                    <h3 className="text-xl font-extrabold text-slate-900 tracking-tight">
                      {cat.category}
                    </h3>
                    <div className="text-xs font-mono text-slate-500 mb-3">
                      {cat.subtitle}
                    </div>
                    <div className="pt-2 flex flex-wrap gap-1.5">
                      {cat.platforms.map((plat, pIdx) => (
                        <span
                          key={pIdx}
                          className="text-[11px] font-semibold bg-white border border-slate-200 px-2.5 py-1 rounded-md text-slate-700"
                        >
                          {plat}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="lg:col-span-8 space-y-2.5">
                    <div className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 mb-2">
                      Architectural Capabilities:
                    </div>
                    {cat.capabilities.map((cap, cIdx) => (
                      <div key={cIdx} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                        <span>{cap}</span>
                      </div>
                    ))}
                  </div>

                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── SECTION B: SECURITY ARCHITECTURE (#security) ── */}
      <section id="security" className="scroll-mt-28 py-16 lg:py-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600 block mb-2">
              Section B · Enterprise Defense In Depth
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
              Enterprise-Grade Security Architecture: Five Layers
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              Every layer of the ProfitMachines autonomous engine is hardened according to strict defense-in-depth security principles.
            </p>
          </div>

          {/* 5 Security Layers */}
          <div className="space-y-6 mb-16">
            {securityLayers.map((sec, idx) => (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-white border border-slate-200/90 shadow-xs hover:border-blue-300 transition-all"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  
                  <div className="lg:col-span-4 space-y-2">
                    <span className="text-xs font-mono font-bold text-blue-600 uppercase tracking-wider">
                      {sec.layer}
                    </span>
                    <h3 className="text-xl font-extrabold text-slate-900 tracking-tight">
                      {sec.title}
                    </h3>
                    <div className="text-xs font-mono text-slate-500 bg-slate-50 inline-block px-2.5 py-1 rounded-md border border-slate-200">
                      {sec.standards}
                    </div>
                  </div>

                  <div className="lg:col-span-8 space-y-3">
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                      {sec.description}
                    </p>
                    <div className="pt-2 border-t border-slate-100 flex items-center gap-2 text-xs font-mono font-bold text-emerald-600">
                      <ShieldCheck className="w-4 h-4 shrink-0" />
                      <span>Verified Specification: {sec.metrics}</span>
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>

          {/* 4 Verified Metric Cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-slate-900 text-white border border-slate-800 text-left">
              <div className="text-3xl font-black text-blue-400 font-mono mb-1">99.99%</div>
              <div className="text-xs font-bold uppercase tracking-wider text-slate-300">Uptime SLA</div>
              <div className="text-[11px] text-slate-500 mt-1">Contractual availability backing</div>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900 text-white border border-slate-800 text-left">
              <div className="text-3xl font-black text-emerald-400 font-mono mb-1">100%</div>
              <div className="text-xs font-bold uppercase tracking-wider text-slate-300">Data Encryption</div>
              <div className="text-[11px] text-slate-500 mt-1">AES-256 at rest, TLS 1.3 in transit</div>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900 text-white border border-slate-800 text-left">
              <div className="text-3xl font-black text-purple-400 font-mono mb-1">Type II</div>
              <div className="text-xs font-bold uppercase tracking-wider text-slate-300">SOC 2 Certified</div>
              <div className="text-[11px] text-slate-500 mt-1">Audited annually by Big-4 firm</div>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900 text-white border border-slate-800 text-left">
              <div className="text-3xl font-black text-cyan-400 font-mono mb-1">27001</div>
              <div className="text-xs font-bold uppercase tracking-wider text-slate-300">ISO Certified</div>
              <div className="text-[11px] text-slate-500 mt-1">Global standard for ISMS</div>
            </div>
          </div>

        </div>
      </section>

      {/* ── SECTION C: COMPLIANCE FRAMEWORKS (#compliance) ── */}
      <section id="compliance" className="scroll-mt-28 py-16 lg:py-24 bg-white border-b border-slate-200">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600 block mb-2">
              Section C · Regulatory Alignment
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
              Industry-Specific Compliance Frameworks
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              We engineer specialized regulatory guardrails tailored to the compliance realities of your vertical:
            </p>
          </div>

          {/* Compliance Matrix Table */}
          <div className="bg-white rounded-3xl border border-slate-200/90 p-8 shadow-xs overflow-hidden mb-16">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-slate-200 text-xs font-mono text-slate-500 uppercase tracking-wider">
                    <th className="py-3 px-4">Industry Sector</th>
                    <th className="py-3 px-4">Core Compliance Standards</th>
                    <th className="py-3 px-4">Engineered Safeguards & Architecture</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-xs sm:text-sm">
                  {complianceMatrix.map((row, idx) => {
                    const Icon = row.icon;
                    return (
                      <tr key={idx} className="hover:bg-slate-50/80 transition-colors">
                        <td className="py-5 px-4 font-bold text-slate-900">
                          <div className="flex items-center gap-2.5">
                            <Icon className="w-4 h-4 text-blue-600" />
                            <span>{row.industry}</span>
                          </div>
                        </td>
                        <td className="py-5 px-4 font-mono font-semibold text-blue-700 bg-blue-50/40">{row.regulations}</td>
                        <td className="py-5 px-4 text-slate-600 leading-relaxed">{row.safeguards}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>

          {/* Deployment Models */}
          <div className="mb-16">
            <div className="max-w-3xl mb-8">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600 block mb-1">
                Deployment Topology
              </span>
              <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight">
                Three Flexible Deployment Models
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {deploymentModels.map((dep, idx) => (
                <div
                  key={idx}
                  className="p-8 rounded-3xl bg-slate-50 border border-slate-200/90 flex flex-col justify-between hover:border-blue-400 transition-all"
                >
                  <div>
                    <span className="text-xs font-mono font-bold text-blue-600 uppercase tracking-wider block mb-1">
                      {dep.tier}
                    </span>
                    <h4 className="text-xl font-extrabold text-slate-900 mb-3">{dep.title}</h4>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">{dep.desc}</p>
                  </div>
                  <div className="pt-4 border-t border-slate-200 text-xs font-mono font-semibold text-slate-800">
                    <span className="text-emerald-600 block mb-0.5">&check; Fit Assessment:</span>
                    {dep.highlight}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Downloadable Resource Cards */}
          <div className="mb-16">
            <div className="max-w-3xl mb-8">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600 block mb-1">
                Audited Documentation
              </span>
              <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight">
                Compliance & Security Artifacts
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {resourceCards.map((res, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:border-blue-400 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 mb-4">
                      <FileText className="w-5 h-5" />
                    </div>
                    <h4 className="text-sm font-extrabold text-slate-900 mb-1.5">{res.title}</h4>
                    <p className="text-xs text-slate-500 leading-relaxed mb-4">{res.desc}</p>
                  </div>
                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono text-slate-400">
                    <span>{res.size}</span>
                    <Link
                      to="/book-consultation"
                      className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-700 font-bold"
                    >
                      <span>Request</span>
                      <Download className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Security FAQ */}
          <div className="mb-16">
            <div className="max-w-3xl mb-8">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600 block mb-1">
                Frequently Addressed Inquiries
              </span>
              <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight">
                Enterprise Security & Governance FAQ
              </h3>
            </div>

            <div className="space-y-4">
              {securityFaqs.map((faq, idx) => {
                const isOpen = activeFaq === idx;
                return (
                  <div
                    key={idx}
                    className="rounded-2xl bg-slate-50 border border-slate-200/90 overflow-hidden"
                  >
                    <button
                      type="button"
                      onClick={() => setActiveFaq(isOpen ? null : idx)}
                      className="w-full p-6 text-left flex items-center justify-between gap-4 font-bold text-slate-900 text-sm sm:text-base hover:text-blue-600 transition-colors cursor-pointer"
                    >
                      <span>{faq.q}</span>
                      <ChevronDown
                        className={`w-4 h-4 text-slate-500 transition-transform ${isOpen ? 'rotate-180 text-blue-600' : ''}`}
                      />
                    </button>
                    {isOpen && (
                      <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-200/60 bg-white">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Final CTA Diagnostic Form */}
          <div className="rounded-3xl bg-slate-950 text-white p-8 sm:p-12 border border-slate-800">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-5 space-y-4">
                <span className="text-xs font-mono font-bold text-blue-400 uppercase tracking-wider block">
                  SECURITY CLEARANCE
                </span>
                <h3 className="text-3xl font-extrabold text-white tracking-tight leading-tight">
                  Request an InfoSec & Integration Scoping Review
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Engage directly with our Principal Solutions Architects and Chief Information Security Officer under mutual NDA standards.
                </p>
                <div className="pt-2 text-xs font-mono text-slate-400 space-y-1.5">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>Vendor Security Assessment Questionnaire (VSAQ) Pre-Filled</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>Custom VPC Peering & Firewall Scoping Session</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7">
                <AiSalesIntakeForm
                  pageContext="Integrations & Security"
                  defaultService="Security, Compliance & Stack Integration"
                />
              </div>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
