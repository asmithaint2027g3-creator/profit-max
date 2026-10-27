import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Compass,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  TrendingUp,
  Target,
  DollarSign,
  Activity,
  Layers,
  Search,
  Sparkles,
  Lock,
  ChevronRight,
  Zap,
  BarChart3,
  Sliders,
  Cpu,
  Shield,
  ArrowUpRight,
  Scale,
  FileCheck,
  Check,
  AlertTriangle,
  GraduationCap
} from 'lucide-react';
import OfferingsIntakeForm from '../../components/forms/OfferingsIntakeForm';

export default function AiTrustGovernance() {
  const location = useLocation();

  useEffect(() => {
    document.title = 'AI Trust & Governance | Enterprise Regulatory Compliance & Fairness | ProfitMachines';
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const el = document.getElementById(id);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 150);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location.hash, location.pathname]);

  const trustLayers = [
    {
      id: 'explainable',
      title: 'Explainable AI Architecture',
      layer: 'Trust Layer 01 · Model Transparency',
      headline: 'Decision Auditing & Feature Attribution Logs',
      metric: '100% Model Transparency · +80% Buyer Trust',
      description: 'Replaces black-box algorithmic output with transparent, auditable decision trees. Every predictive score or automated routing decision exposes its exact feature weights.',
      deliverables: ['SHAP & LIME Feature Attribution Dashboards', 'Auditable Decision Logs', 'Human-in-the-Loop Override Controls']
    },
    {
      id: 'compliance',
      title: 'Compliance & Enterprise Security',
      layer: 'Trust Layer 02 · Regulatory Protection',
      headline: 'EU AI Act, ISO 42001, SOC2 & HIPAA Enforcement',
      metric: '100% Regulatory Compliance · Zero Security Incidents',
      description: 'Continuous scanning of algorithmic data pipelines against global privacy mandates. Guarantees zero training on proprietary customer data and isolates multi-tenant workloads.',
      deliverables: ['EU AI Act Risk Classification Dossier', 'ISO 42001 Management Framework', 'Continuous SOC2 Compliance Telemetry']
    },
    {
      id: 'bias',
      title: 'Algorithmic Bias & Fairness Monitoring',
      layer: 'Trust Layer 03 · Ethical Guardrails',
      headline: 'Demographic Parity & Outlier Detection Telemetry',
      metric: '100% Bias Detection Coverage · +80% Fairness Index',
      description: 'Real-time telemetry monitoring for disparate impact across customer prospecting, credit scoring, or pricing algorithms to protect brand reputation.',
      deliverables: ['Demographic Parity Auditing Feeds', 'Automated Outlier Alerting System', 'Fairness Telemetry Dashboards']
    },
    {
      id: 'executive',
      title: 'Executive Enablement & Board Governance',
      layer: 'Trust Layer 04 · Board Oversight',
      headline: 'Boardroom Dossiers & Enterprise Risk Committees',
      metric: '+80% Executive AI Literacy · +60% Project Success',
      description: 'Educates and equips C-suite leadership and audit committees to govern enterprise AI investments responsibly without stalling innovation.',
      deliverables: ['Boardroom AI Risk Dossiers', 'Enterprise Governance Charters', 'Audit Committee Playbooks']
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* ── SECTION 1: HERO ── */}
      <section className="relative pt-24 pb-20 sm:pt-32 sm:pb-28 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(37,99,235,0.25),rgba(255,255,255,0))] pointer-events-none" />
        <div className="absolute inset-0 bg-grid-white/[0.03] bg-[size:32px_32px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 font-mono text-xs font-bold uppercase tracking-widest mb-6">
            <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
            <span>ENTERPRISE AI TRUST & GOVERNANCE</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight font-heading mb-6 max-w-5xl leading-[1.12]">
            Trust by Design.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-indigo-300">
              Explainable. Compliant. Fair. Enterprise-Ready.
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mb-10 leading-relaxed font-normal">
            AI systems engineered with trust, compliance, and governance from the ground up. We de-risk enterprise AI adoption with mathematical explainability, continuous regulatory compliance, and board-level risk controls.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <a
              href="#intake"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm tracking-wide shadow-lg shadow-blue-600/30 transition-all hover:-translate-y-0.5"
            >
              <span>Implement AI Governance</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <Link
              to="/book-consultation"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-slate-800/80 hover:bg-slate-800 text-slate-200 border border-slate-700 font-bold text-sm tracking-wide transition-all hover:-translate-y-0.5"
            >
              <span>Talk to a Principal Architect</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Quick Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-16 pt-8 border-t border-slate-800/80">
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold font-mono text-white">100%</div>
              <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mt-1">Model Transparency</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold font-mono text-blue-400">Zero</div>
              <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mt-1">Regulatory Penalties</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold font-mono text-emerald-400">ISO 42001</div>
              <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mt-1">Certified Framework</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold font-mono text-indigo-400">+80%</div>
              <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mt-1">Boardroom AI Literacy</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 2: THE PROBLEM ── */}
      <section className="py-20 sm:py-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-red-600 uppercase tracking-widest mb-3">
              <AlertTriangle className="w-3.5 h-3.5" />
              <span>THE ENTERPRISE AI COMPLIANCE CRISIS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading mb-4">
              Why Unregulated AI Stalls Enterprise Deployment
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Enterprise legal and risk officers routinely block AI deployments because of unexplainable models, intellectual property leaks, and impending regulatory penalties.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-red-50 text-red-600 flex items-center justify-center font-bold text-base mb-4 font-mono">
                01
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">Black-Box Uncertainty</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                When models cannot explain why a specific prospect was rejected or how pricing was derived, enterprise clients refuse to trust recommendations.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-red-50 text-red-600 flex items-center justify-center font-bold text-base mb-4 font-mono">
                02
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">Severe Regulatory Penalties</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                The EU AI Act and FTC enforcement carry penalties reaching up to €35M or 7% of global annual turnover for high-risk, uncertified models.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-red-50 text-red-600 flex items-center justify-center font-bold text-base mb-4 font-mono">
                03
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">Algorithmic Bias Exposure</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Unmonitored models inherit training biases that disproportionately filter out qualified enterprise accounts, creating massive legal vulnerabilities.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-red-50 text-red-600 flex items-center justify-center font-bold text-base mb-4 font-mono">
                04
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">Executive & Board Hesitancy</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Audit committees veto generative and autonomous revenue initiatives because they lack clear governance frameworks and risk parameters.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 3: THE 4 TRUST LAYERS ── */}
      <section className="py-20 sm:py-28 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 font-mono text-xs font-bold uppercase tracking-widest mb-4">
              <Layers className="w-3.5 h-3.5" />
              <span>THE 4 TRUST LAYERS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading mb-4">
              Enterprise AI Governance Architecture
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              A four-tier defense system ensuring mathematical transparency, continuous compliance, and boardroom accountability.
            </p>
          </div>

          <div className="space-y-6">
            {trustLayers.map((layer) => (
              <div
                key={layer.id}
                id={layer.id}
                className="p-8 rounded-3xl bg-slate-50 border border-slate-200 hover:border-blue-400 transition-all flex flex-col lg:flex-row lg:items-center justify-between gap-8 scroll-mt-28"
              >
                <div className="max-w-3xl">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs font-mono font-bold text-blue-600 uppercase tracking-wider">
                      {layer.layer}
                    </span>
                    <span className="text-xs font-mono px-2.5 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200 font-bold">
                      {layer.metric.split('·')[0]}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 font-heading mb-2">{layer.title}: {layer.headline}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-4">{layer.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {layer.deliverables.map((del, dIdx) => (
                      <span key={dIdx} className="text-xs font-mono px-3 py-1 rounded-md bg-white border border-slate-200 text-slate-700 font-medium">
                        ✓ {del}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="shrink-0 text-left lg:text-right pt-4 lg:pt-0 border-t lg:border-t-0 border-slate-200">
                  <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">Governance Output</div>
                  <div className="text-base font-extrabold text-slate-900 font-mono mt-1 text-blue-600">
                    {layer.metric.split('·')[1] || layer.metric}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 9: COMPLIANCE MATRIX TABLE ── */}
      <section className="py-20 sm:py-24 bg-slate-900 text-white border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-blue-400 uppercase tracking-widest mb-3">
              <FileCheck className="w-3.5 h-3.5" />
              <span>REGULATORY FRAMEWORK COMPLIANCE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-heading mb-4 text-white">
              The Enterprise Compliance Matrix
            </h2>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              How our AI architectures align with global regulatory bodies and enterprise certifications.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-slate-800 shadow-xl bg-slate-950">
            <table className="w-full text-left text-sm text-slate-300">
              <thead className="bg-slate-900/80 border-b border-slate-800 text-xs font-mono uppercase text-slate-400 tracking-wider">
                <tr>
                  <th className="py-4 px-6">Regulatory Body / Standard</th>
                  <th className="py-4 px-6">Governance Requirement</th>
                  <th className="py-4 px-6">ProfitMachines Architecture Safeguard</th>
                  <th className="py-4 px-6">Audit Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800">
                <tr className="hover:bg-slate-900/50 transition-colors">
                  <td className="py-4 px-6 font-bold text-white font-mono">EU AI Act (2024)</td>
                  <td className="py-4 px-6">High-risk transparency, data governance, human oversight</td>
                  <td className="py-4 px-6">Automated technical documentation and human-in-the-loop overrides</td>
                  <td className="py-4 px-6 font-mono text-emerald-400 font-bold">100% Certified</td>
                </tr>
                <tr className="hover:bg-slate-900/50 transition-colors">
                  <td className="py-4 px-6 font-bold text-white font-mono">ISO/IEC 42001</td>
                  <td className="py-4 px-6">AI management system risk management standard</td>
                  <td className="py-4 px-6">Continuous algorithmic lifecycle monitoring and impact assessment</td>
                  <td className="py-4 px-6 font-mono text-emerald-400 font-bold">Aligned Framework</td>
                </tr>
                <tr className="hover:bg-slate-900/50 transition-colors">
                  <td className="py-4 px-6 font-bold text-white font-mono">SOC2 Type II & ISO 27001</td>
                  <td className="py-4 px-6">Customer data privacy, encryption, multi-tenant isolation</td>
                  <td className="py-4 px-6">Zero data retention for training, AES-256 encryption at rest/transit</td>
                  <td className="py-4 px-6 font-mono text-emerald-400 font-bold">Audited Annually</td>
                </tr>
                <tr className="hover:bg-slate-900/50 transition-colors">
                  <td className="py-4 px-6 font-bold text-white font-mono">HIPAA & HITECH</td>
                  <td className="py-4 px-6">Protected health information (PHI) safeguard standards</td>
                  <td className="py-4 px-6">BAA execution, automated PHI sanitization prior to model ingestion</td>
                  <td className="py-4 px-6 font-mono text-emerald-400 font-bold">BAA Ready</td>
                </tr>
                <tr className="hover:bg-slate-900/50 transition-colors">
                  <td className="py-4 px-6 font-bold text-white font-mono">FTC AI Truth & Substantiation Standard</td>
                  <td className="py-4 px-6">Prohibition against deceptive or biased algorithmic claims</td>
                  <td className="py-4 px-6">Statistical demographic parity testing and auditable log preservation</td>
                  <td className="py-4 px-6 font-mono text-emerald-400 font-bold">Fully Compliant</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── SECTION 10: FINAL CTA & INTAKE ── */}
      <section id="intake" className="py-20 sm:py-28 bg-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 font-mono text-xs font-bold uppercase tracking-widest mb-4">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>AI GOVERNANCE INTAKE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight font-heading mb-4">
            Ready to Deploy Enterprise-Grade, Compliant AI Systems?
          </h2>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto font-normal">
            Schedule an AI trust and governance consultation with our Principal AI Architects to audit model risk, explainability, and regulatory compliance.
          </p>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <OfferingsIntakeForm
            pageContext="AI Trust and Governance Architecture Session"
            defaultObjective="AI Trust & Governance"
          />
        </div>
      </section>
    </div>
  );
}
