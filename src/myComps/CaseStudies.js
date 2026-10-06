import React, { useState } from 'react';
import { Container, Row, Col, Card, Modal, Button } from 'react-bootstrap';
import icons from './Icons';
import PlaceholderImage from './PlaceholderImage';
import './caseStudies.css';

const CaseStudies = ({ onNavigate }) => {
  const [selectedCase, setSelectedCase] = useState(null);
  const [activeFilter, setActiveFilter] = useState('all');

  const handleNavClick = (e, pageId) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate(pageId);
    }
  };

  const cases = [
    {
      id: 'nair-retail',
      client: 'Nair Retail Brands',
      category: 'E-COMMERCE',
      theme: 'orange',
      icon: '🛍️',
      title: 'Elevating E-Commerce: 4.1x ROAS in 90 Days',
      shortSummary: 'Rebuilt the full customer acquisition funnel, UGC creative engine, and server-side Meta CAPI attribution for a premier fashion brand.',
      problem: 'A Bangalore-based fashion retailer was burning substantial ad budget on broad Meta targeting, achieving under 1.8x ROAS with severe iOS 14 attribution blind spots and high bounce rates on slow product pages.',
      strategy: 'We treated media buying and web performance as a single unified system. Restructured campaign architecture into tiered intent buckets, deployed an iterative UGC creative system, and re-engineered landing pages for sub-1.5s load speeds.',
      execution: [
        'Audience segmentation: Lookalike stacking + retargeting tiered by cart abandonment intent',
        'UGC-first creative framework: 12 ad variations A/B tested in bi-weekly design sprints',
        'Next.js headless landing page: Largest Contentful Paint (LCP) under 1.4s, 68% reduction in bounce rate',
        'Server-side Meta Conversions API (CAPI) + Google Analytics 4 deep event mapping'
      ],
      metrics: [
        { label: 'ROAS', value: '4.1x', color: 'orange' },
        { label: 'CAC Reduction', value: '44%', color: 'blue' },
        { label: 'Timeline', value: '90 Days', color: 'orange' },
        { label: 'Creative Variants', value: '12+', color: 'blue' }
      ]
    },
    {
      id: 'prestige-living',
      client: 'Prestige Living Spaces',
      category: 'REAL ESTATE / PROPTECH',
      theme: 'blue',
      icon: '🏢',
      title: 'Real Estate Lead Gen: 800+ MQLs in 60 Days',
      shortSummary: 'Hyper-localized Google and Meta campaigns paired with multi-step qualification funnels and automated CRM sales dispatch.',
      problem: 'A luxury residential property developer needed genuine, high-intent home buyers rather than casual form-fillers. Existing campaigns generated high lead volume but conversion to site visits was below 3%.',
      strategy: 'Engineered an interactive multi-step qualification quiz with dynamic salary and neighborhood scoring. Integrated CRM webhook automation to push qualified prospects directly to sales agents via WhatsApp within 90 seconds.',
      execution: [
        'Geo-fenced Meta and Google Search campaigns targeting high-net-worth pin codes',
        'Multi-step qualification funnel filtering for purchase timeframe and budget criteria',
        'HubSpot CRM automation: automated lead scoring, immediate WhatsApp booking and calendar sync',
        'Live CPL and site visit pipeline dashboard with real-time sales agent attribution'
      ],
      metrics: [
        { label: 'MQLs Generated', value: '800+', color: 'orange' },
        { label: 'CPL vs Industry', value: '-38%', color: 'blue' },
        { label: 'Sales Conversion', value: '11%', color: 'orange' },
        { label: 'Timeline', value: '60 Days', color: 'blue' }
      ]
    },
    {
      id: 'clarix-saas',
      client: 'Clarix SaaS',
      category: 'B2B SAAS',
      theme: 'purple',
      icon: '⚡',
      title: 'SaaS Brand Relaunch: 2.1x Trial-to-Paid Conversion',
      shortSummary: 'End-to-end positioning audit, sleek UI design system, and frictionless onboarding flow overhaul.',
      problem: 'A B2B analytics platform was losing enterprise deals to competitors with inferior software but slicker branding. Their website focused purely on technical features rather than business ROI, resulting in poor trial adoption.',
      strategy: 'Complete repositioning around business outcomes and team velocity. Designed a comprehensive design system in Figma, stripped onboarding steps down to 3, and embedded interactive product sandboxes.',
      execution: [
        'Competitor narrative audit and strategic whitespace positioning matrix',
        'Full brand voice guide: customer outcome messaging and proof structure',
        'Scalable design system with 60+ components and reactive dark/light themes',
        'Onboarding workflow simplified from 6 steps to 3, with smart contextual tooltips'
      ],
      metrics: [
        { label: 'Trial → Paid', value: '2.1x', color: 'orange' },
        { label: 'Time to Value', value: '-52%', color: 'blue' },
        { label: 'Demo Requests', value: '+89%', color: 'orange' },
        { label: 'UI Components', value: '60+', color: 'blue' }
      ]
    },
    {
      id: 'medassist-health',
      client: 'MedAssist HealthTech',
      category: 'HEALTHCARE / HEALTHTECH',
      theme: 'cyan',
      icon: '❤️',
      title: 'Automating 80% of Manual Operations for HealthTech',
      shortSummary: 'Custom patient portal, automated scheduling workflows, and medical billing API synchronization.',
      problem: 'A rapidly scaling telemedicine platform was losing 4+ hours every day to manual appointments, doctor roster synchronization, and insurance billing reconciliations, leading to frequent errors and patient churn.',
      strategy: 'Built an integrated automation architecture combining a custom HIPAA-compliant patient portal, webhook triggers, and automated calendar & billing reconciliation pipelines.',
      execution: [
        'Custom patient CRM with complete appointment lifecycle tracking and records in one view',
        'Make.com workflow automation: zero-touch booking, SMS confirmations, and follow-ups',
        'Medical billing API integration with automated reconciliation and error dispute reporting',
        'Real-time operational dashboard for doctor capacity, patient satisfaction (NPS), and clinic revenue'
      ],
      metrics: [
        { label: 'Manual Work Cut', value: '80%', color: 'orange' },
        { label: 'Error Rate Reduction', value: '-95%', color: 'blue' },
        { label: 'Hours Saved / Wk', value: '28 hrs', color: 'orange' },
        { label: 'Timeline', value: '4 Months', color: 'blue' }
      ]
    }
  ];

  const filteredCases = cases.filter(c => {
    if (activeFilter === 'all') return true;
    return c.theme === activeFilter || c.category.toLowerCase().includes(activeFilter.toLowerCase());
  });

  return (
    <div className="case-studies-page">
      {/* ── Hero Banner ── */}
      <section className="case-hero text-center">
        <Container>
          <Row className="justify-content-center">
            <Col xs={12} lg={10}>
              <span className="badge-eyebrow mb-3">SELECTED OUTCOMES &amp; CASE STUDIES</span>
              <h1 className="case-hero-title">
                Measurable Work Across <span>Campaigns &amp; Systems.</span>
              </h1>
              <p className="case-hero-subtitle">
                We don't deal in vanity metrics or empty deliverables. Every project is scoped around client context, strategic bottleneck, work deployed, and quantifiable financial return.
              </p>

              {/* Category Pills */}
              <div className="case-filter-tabs mt-4">
                <button
                  className={`case-tab-btn ${activeFilter === 'all' ? 'active' : ''}`}
                  onClick={() => setActiveFilter('all')}
                >
                  All Case Studies
                </button>
                <button
                  className={`case-tab-btn ${activeFilter === 'orange' ? 'active' : ''}`}
                  onClick={() => setActiveFilter('orange')}
                >
                  E-Commerce &amp; Retail
                </button>
                <button
                  className={`case-tab-btn ${activeFilter === 'blue' ? 'active' : ''}`}
                  onClick={() => setActiveFilter('blue')}
                >
                  Real Estate &amp; PropTech
                </button>
                <button
                  className={`case-tab-btn ${activeFilter === 'purple' ? 'active' : ''}`}
                  onClick={() => setActiveFilter('purple')}
                >
                  B2B SaaS
                </button>
                <button
                  className={`case-tab-btn ${activeFilter === 'cyan' ? 'active' : ''}`}
                  onClick={() => setActiveFilter('cyan')}
                >
                  Healthcare &amp; MedTech
                </button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* ── Case Studies Feed ── */}
      <section className="case-feed py-5">
        <Container>
          <div className="d-flex flex-column gap-5">
            {filteredCases.map((cs) => (
              <Card key={cs.id} className="case-card-expanded p-0 overflow-hidden border-0">
                <Row className="g-0 align-items-stretch">
                  {/* Left Column: Visual Mockup / Placeholder */}
                  <Col xs={12} lg={5} className="case-visual-col d-flex flex-column justify-content-center p-4 p-md-5">
                    <div className="placeholder-container shadow-lg">
                      <PlaceholderImage
                        width={600}
                        height={420}
                        title={cs.client}
                        category={cs.category}
                        theme={cs.theme}
                      />
                    </div>
                    <div className="d-flex justify-content-between align-items-center mt-3 px-2">
                      <span className="case-client-badge text-uppercase font-monospace">{cs.category}</span>
                      <span className="case-icon-display fs-4">{cs.icon}</span>
                    </div>
                  </Col>

                  {/* Right Column: Case Details & Metrics */}
                  <Col xs={12} lg={7} className="p-4 p-md-5 d-flex flex-column justify-content-between">
                    <div>
                      <div className="d-flex align-items-center gap-2 mb-2">
                        <span className="case-client-name fw-bold">{cs.client}</span>
                        <span className="bullet-sep">•</span>
                        <span className="case-category-label">{cs.category}</span>
                      </div>

                      <h2 className="case-heading-h2 mb-3">{cs.title}</h2>
                      <p className="case-lead-p mb-4 text-secondary">{cs.shortSummary}</p>

                      <div className="case-content-blocks mb-4">
                        <div className="case-subblock mb-3">
                          <h6 className="case-subblock-title text-orange">THE CHALLENGE</h6>
                          <p className="case-subblock-text text-secondary">{cs.problem}</p>
                        </div>
                        <div className="case-subblock mb-3">
                          <h6 className="case-subblock-title text-blue">OUR STRATEGY</h6>
                          <p className="case-subblock-text text-secondary">{cs.strategy}</p>
                        </div>
                      </div>
                    </div>

                    {/* Metrics Grid */}
                    <div className="case-metrics-row p-3 rounded-3 mb-4">
                      <Row className="g-3 text-center">
                        {cs.metrics.map((m, mIdx) => (
                          <Col key={mIdx} xs={6} md={3}>
                            <div className="metric-item">
                              <span className={`metric-val ${m.color}`}>{m.value}</span>
                              <span className="metric-label d-block text-secondary">{m.label}</span>
                            </div>
                          </Col>
                        ))}
                      </Row>
                    </div>

                    <div className="d-flex align-items-center justify-content-between flex-wrap gap-3">
                      <Button
                        variant="outline-secondary"
                        className="btn-case-expand"
                        onClick={() => setSelectedCase(cs)}
                      >
                        View Full Execution Details {icons.arrowRight}
                      </Button>
                      <a
                        href="#contact"
                        onClick={(e) => handleNavClick(e, 'contact')}
                        className="link-similar-results"
                      >
                        Achieve similar results
                      </a>
                    </div>
                  </Col>
                </Row>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Modal for In-depth Case Study View ── */}
      {selectedCase && (
        <Modal
          show={!!selectedCase}
          onHide={() => setSelectedCase(null)}
          size="lg"
          centered
          className="case-study-modal"
        >
          <Modal.Header closeButton className="border-secondary border-opacity-25">
            <div>
              <span className="badge-eyebrow mb-1">{selectedCase.category}</span>
              <Modal.Title className="fw-bold fs-4">{selectedCase.client}</Modal.Title>
            </div>
          </Modal.Header>
          <Modal.Body className="p-4">
            <h3 className="fs-5 fw-bold mb-3">{selectedCase.title}</h3>

            <div className="mb-4">
              <PlaceholderImage
                width={700}
                height={320}
                title={selectedCase.client}
                category="Deep Dive"
                theme={selectedCase.theme}
              />
            </div>

            <div className="modal-section mb-3">
              <h5 className="fw-bold text-orange">Problem Statement</h5>
              <p className="text-secondary">{selectedCase.problem}</p>
            </div>

            <div className="modal-section mb-3">
              <h5 className="fw-bold text-blue">Strategic Architecture</h5>
              <p className="text-secondary">{selectedCase.strategy}</p>
            </div>

            <div className="modal-section mb-4">
              <h5 className="fw-bold">Step-by-step Execution</h5>
              <ul className="modal-execution-list">
                {selectedCase.execution.map((step, idx) => (
                  <li key={idx} className="mb-2 text-secondary">
                    <span className="text-orange me-2">✔</span> {step}
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-3 rounded-3 bg-secondary bg-opacity-10">
              <Row className="text-center">
                {selectedCase.metrics.map((m, idx) => (
                  <Col key={idx} xs={6} md={3}>
                    <strong className={`fs-4 d-block ${m.color === 'orange' ? 'text-warning' : 'text-primary'}`}>
                      {m.value}
                    </strong>
                    <small className="text-muted">{m.label}</small>
                  </Col>
                ))}
              </Row>
            </div>
          </Modal.Body>
          <Modal.Footer className="border-secondary border-opacity-25 justify-content-between">
            <Button variant="secondary" onClick={() => setSelectedCase(null)}>
              Close
            </Button>
            <Button
              href="#contact"
              onClick={(e) => {
                setSelectedCase(null);
                handleNavClick(e, 'contact');
              }}
              className="btn-start-project text-white"
            >
              Start Your Project With Us
            </Button>
          </Modal.Footer>
        </Modal>
      )}

      {/* ── Ready to be next success story CTA ── */}
      <section className="case-cta py-5 text-center">
        <Container>
          <div className="p-5 rounded-4 cta-highlight-box">
            <h2 className="fw-bold mb-3">Ready to Be Our Next Success Story?</h2>
            <p className="text-secondary mx-auto mb-4" style={{ maxWidth: '640px' }}>
              Join 100+ growing brands that have scaled their revenue and automated operations with M Square Professionals.
            </p>
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, 'contact')}
              className="btn-hero-primary d-inline-flex align-items-center gap-2"
            >
              <span>Book Your Strategy Call</span>
              {icons.arrowRight}
            </a>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default CaseStudies;
