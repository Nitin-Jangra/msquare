import React, { useState } from 'react';
import { Container, Row, Col, Card, Form } from 'react-bootstrap';
import icons from './Icons';
import PlaceholderImage from './PlaceholderImage';
import './services.css';

const Services = ({ onNavigate }) => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const handleNavClick = (e, pageId) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate(pageId);
    }
  };

  const pillars = [
    {
      id: 'marketing',
      pillarNumber: 'Pillar I',
      title: 'Growth Marketing',
      badgeClass: 'orange',
      description: 'Data-driven marketing strategies that attract the right customers, generate qualified leads, and build brands that command attention — all measured by business impact, not vanity metrics.',
      services: [
        {
          code: 'PM',
          title: 'Performance Marketing',
          desc: 'Paid advertising across Google, Meta, and YouTube engineered for maximum ROI — from first click to closed deal, with full attribution.',
          features: [
            'Google Ads & Meta Ads management',
            'YouTube & programmatic advertising',
            'Conversion tracking & attribution',
            'CPA optimization & scaling'
          ],
          accent: 'orange'
        },
        {
          code: 'LG',
          title: 'Lead Generation Systems',
          desc: 'End-to-end lead generation systems that fill your pipeline with high-intent prospects — not just form-fillers.',
          features: [
            'Inbound & outbound lead strategies',
            'High-converting landing page design',
            'Lead scoring & qualification logic',
            'Automated lead nurturing & drip campaigns'
          ],
          accent: 'orange'
        },
        {
          code: 'SEO',
          title: 'SEO & Search Dominance',
          desc: 'Dominate search results organically and through paid search — capturing demand when buyers are actively searching.',
          features: [
            'Technical & on-page SEO audits',
            'Keyword research & content architecture',
            'Search Engine Marketing (SEM)',
            'Local SEO for multi-branch companies'
          ],
          accent: 'orange'
        },
        {
          code: 'SM',
          title: 'Social Media Marketing',
          desc: 'Platform-native content, community engagement, and paid campaigns that build audiences and drive steady conversions.',
          features: [
            'Content strategy & video creation',
            'Community management & engagement',
            'Creator & influencer partnerships',
            'Targeted paid social campaigns'
          ],
          accent: 'orange'
        },
        {
          code: 'BD',
          title: 'Branding & Digital Strategy',
          desc: 'Brand identity, messaging frameworks, and digital roadmaps that position your business as the authoritative choice.',
          features: [
            'Brand identity & visual system design',
            'Messaging & positioning frameworks',
            'Digital marketing roadmap & audit',
            'Competitive whitespace analysis'
          ],
          accent: 'orange'
        }
      ]
    },
    {
      id: 'automation',
      pillarNumber: 'Pillar II',
      title: 'Business Automation',
      badgeClass: 'blue',
      description: 'We eliminate manual, repetitive work by building connected automation systems — from CRM and lead routing to sales pipelines, workflows, and attendance — so your team focuses on high-impact work.',
      services: [
        {
          code: 'CRM',
          title: 'CRM Solutions & Architecture',
          desc: 'Custom CRM implementations that centralize customer data, automate follow-ups, and give your team full pipeline visibility.',
          features: [
            'CRM setup, customization & data migration',
            'Sales pipeline automation & alerts',
            'Customer segmentation & dynamic tagging',
            'Executive reporting & KPI dashboards'
          ],
          accent: 'blue'
        },
        {
          code: 'LM',
          title: 'Lead Management & Routing',
          desc: 'End-to-end systems that capture, score, route, and nurture leads automatically — zero opportunity leakage.',
          features: [
            'Instant lead capture & round-robin routing',
            'Omnichannel follow-up sequences',
            'Behavior-based lead prioritization',
            'Seamless CRM & ads integration'
          ],
          accent: 'blue'
        },
        {
          code: 'WA',
          title: 'Workflow Automation',
          desc: 'Map and automate business processes — approvals, notifications, cross-tool data sync, and instant reporting.',
          features: [
            'Business process mapping & optimization',
            'No-code (Make/Zapier/n8n) & custom scripts',
            'Cross-platform data synchronization',
            'Automated error alerts & triggers'
          ],
          accent: 'blue'
        },
        {
          code: 'SA',
          title: 'Sales Automation Systems',
          desc: 'Automate repetitive sales tasks so your team spends more time closing and less time on data entry and email chasing.',
          features: [
            'Cold outreach & warm nurture sequences',
            'Instant quote & proposal automation',
            'Sales activity tracking & analytics',
            'Revenue forecasting dashboards'
          ],
          accent: 'blue'
        },
        {
          code: 'HR',
          title: 'Attendance & HR Management',
          desc: 'Digital attendance, leave management, and HR automation systems for institutions, enterprises, and field teams.',
          features: [
            'Biometric & mobile geofenced attendance',
            'Leave balance & holiday workflows',
            'Payroll software integration',
            'Statutory compliance & audit reports'
          ],
          accent: 'blue'
        }
      ]
    },
    {
      id: 'technology',
      pillarNumber: 'Pillar III',
      title: 'Technology Solutions',
      badgeClass: 'purple',
      description: 'From websites and mobile apps to custom enterprise software and API integrations — we build technology that solves real business problems, scales smoothly, and integrates with everything you use.',
      services: [
        {
          code: 'CS',
          title: 'Custom Software Development',
          desc: 'Bespoke software applications engineered around your exact business processes — not inflexible off-the-shelf software.',
          features: [
            'System architecture & product roadmapping',
            'Full-stack scalable development',
            'Legacy software modernization',
            'Dedicated SLA maintenance & support'
          ],
          accent: 'purple'
        },
        {
          code: 'WA',
          title: 'Web Applications & Portals',
          desc: 'High-performance web applications — customer portals, client dashboards, and multi-tenant SaaS platforms.',
          features: [
            'React & Next.js frontend development',
            'Scalable Node/Python backend APIs',
            'Optimized database design & caching',
            'Rigorous security & performance audits'
          ],
          accent: 'purple'
        },
        {
          code: 'MA',
          title: 'Mobile Applications (iOS & Android)',
          desc: 'Native-quality cross-platform mobile apps engineered for speed, offline reliability, and intuitive user experiences.',
          features: [
            'React Native & Flutter mobile development',
            'Offline-first synchronization architecture',
            'Push notifications & deep linking',
            'App Store & Google Play Store release'
          ],
          accent: 'purple'
        },
        {
          code: 'WD',
          title: 'Website Design & Development',
          desc: 'Ultra-fast, conversion-optimized corporate websites that represent your brand and convert visitors into high-value leads.',
          features: [
            'Modern UI/UX prototyping in Figma',
            'SEO-ready semantic architecture',
            'Sub-second Core Web Vitals performance',
            'Headless CMS & custom management'
          ],
          accent: 'purple'
        },
        {
          code: 'ERP',
          title: 'Enterprise Software & ERP',
          desc: 'Inventory control, multi-branch operations, procurement, and enterprise management systems built for reliable scale.',
          features: [
            'ERP architecture & modular deployment',
            'Multi-location & role-based permissions',
            'Audit trails & enterprise security',
            'Real-time financial & operational views'
          ],
          accent: 'purple'
        },
        {
          code: 'API',
          title: 'API Integrations & Pipelines',
          desc: 'Connect disparate systems so data flows automatically across your business — eliminating data silos.',
          features: [
            'REST & GraphQL API design',
            'Payment gateway & banking integrations',
            'Enterprise webhook event architectures',
            'Continuous monitoring & data reliability'
          ],
          accent: 'purple'
        }
      ]
    }
  ];

  const filteredPillars = pillars.map(pillar => {
    if (activeFilter !== 'all' && pillar.id !== activeFilter) {
      return null;
    }
    const filteredServices = pillar.services.filter(s =>
      s.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.features.some(f => f.toLowerCase().includes(searchQuery.toLowerCase()))
    );

    if (searchQuery && filteredServices.length === 0) return null;

    return {
      ...pillar,
      services: filteredServices
    };
  }).filter(Boolean);

  return (
    <div className="services-page">
      {/* ── Page Hero ── */}
      <section className="services-hero">
        <Container>
          <Row className="justify-content-center text-center">
            <Col xs={12} lg={10}>
              <span className="badge-eyebrow mb-3">WHAT WE DO</span>
              <h1 className="services-hero-title">
                Growth Systems Built Around <span>Your Next Stage.</span>
              </h1>
              <p className="services-hero-subtitle">
                From attracting high-intent customers to automating the backend operations and building custom software, we bring every piece of your growth engine under one roof.
              </p>

              {/* Search & Filter Bar */}
              <div className="filter-bar mt-4 mx-auto">
                <div className="filter-tabs">
                  <button
                    className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
                    onClick={() => setActiveFilter('all')}
                  >
                    All Capabilities
                  </button>
                  <button
                    className={`filter-btn ${activeFilter === 'marketing' ? 'active' : ''}`}
                    onClick={() => setActiveFilter('marketing')}
                  >
                    Growth Marketing
                  </button>
                  <button
                    className={`filter-btn ${activeFilter === 'automation' ? 'active' : ''}`}
                    onClick={() => setActiveFilter('automation')}
                  >
                    Business Automation
                  </button>
                  <button
                    className={`filter-btn ${activeFilter === 'technology' ? 'active' : ''}`}
                    onClick={() => setActiveFilter('technology')}
                  >
                    Technology Solutions
                  </button>
                </div>

                <div className="search-box mt-3">
                  <Form.Control
                    type="text"
                    placeholder="Search services (e.g. SEO, CRM, React, Mobile Apps)..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="service-search-input"
                  />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* ── Pillars & Services Cards ── */}
      <div className="services-content-area">
        <Container>
          {filteredPillars.length === 0 ? (
            <div className="text-center py-5">
              <h3 className="text-muted">No services found matching "{searchQuery}"</h3>
              <button className="btn-theme-outline mt-3" onClick={() => { setSearchQuery(''); setActiveFilter('all'); }}>
                Clear filters
              </button>
            </div>
          ) : (
            filteredPillars.map((pillar) => (
              <section key={pillar.id} className="pillar-block mb-5">
                <div className="pillar-header mb-4">
                  <div className="d-flex align-items-center gap-3 mb-2">
                    <span className={`pillar-tag ${pillar.badgeClass}`}>{pillar.pillarNumber}</span>
                    <h2 className="pillar-title m-0">{pillar.title}</h2>
                  </div>
                  <p className="pillar-desc">{pillar.description}</p>
                </div>

                <Row className="g-4">
                  {pillar.services.map((service, idx) => (
                    <Col key={idx} xs={12} md={6} lg={4} className="d-flex">
                      <Card className={`service-detail-card accent-${service.accent} w-100`}>
                        <Card.Body className="d-flex flex-column p-4">
                          <div className="d-flex align-items-center justify-content-between mb-3">
                            <span className={`service-code-badge badge-${service.accent}`}>
                              {service.code}
                            </span>
                            <span className="card-accent-pill" />
                          </div>

                          <h3 className="service-card-h3 mb-2">{service.title}</h3>
                          <p className="service-card-text text-secondary mb-4">{service.desc}</p>

                          <div className="mt-auto">
                            <h4 className="deliverables-title mb-2">Deliverables</h4>
                            <ul className="service-features-list">
                              {service.features.map((feat, fIdx) => (
                                <li key={fIdx}>
                                  <span className={`feat-icon color-${service.accent}`}>
                                    {icons.check}
                                  </span>
                                  <span>{feat}</span>
                                </li>
                              ))}
                            </ul>

                            <a
                              href="#contact"
                              onClick={(e) => handleNavClick(e, 'contact')}
                              className="service-inquire-link mt-4"
                            >
                              <span>Inquire about {service.title}</span>
                              {icons.arrowRight}
                            </a>
                          </div>
                        </Card.Body>
                      </Card>
                    </Col>
                  ))}
                </Row>
              </section>
            ))
          )}
        </Container>
      </div>

      {/* ── Visual Architecture Showcase ── */}
      <section className="tech-stack-showcase py-5">
        <Container>
          <Row className="align-items-center g-4">
            <Col xs={12} lg={6}>
              <span className="badge-eyebrow mb-2">UNIFIED ARCHITECTURE</span>
              <h2 className="section-h2 mb-3">How All 3 Pillars Interlock</h2>
              <p className="section-p mb-4">
                Most agencies only sell you ad clicks. Software agencies only build isolated code. M Square aligns paid media, conversion mechanics, and operational databases into one synchronized system that lowers your CAC and accelerates your sales velocity.
              </p>
              <div className="architecture-checklist">
                <div className="arch-item">
                  <div className="arch-icon orange">{icons.chart}</div>
                  <div>
                    <h5>Attract & Convert</h5>
                    <p>High-intent traffic funneled through optimized landing pages with server-side tracking.</p>
                  </div>
                </div>
                <div className="arch-item">
                  <div className="arch-icon blue">{icons.automation}</div>
                  <div>
                    <h5>Automate & Route</h5>
                    <p>Instant SMS/WhatsApp triggers, automated scoring, and real-time CRM updates.</p>
                  </div>
                </div>
                <div className="arch-item">
                  <div className="arch-icon purple">{icons.code}</div>
                  <div>
                    <h5>Retain & Scale</h5>
                    <p>Custom client dashboards, portals, and software platforms for frictionless retention.</p>
                  </div>
                </div>
              </div>
            </Col>
            <Col xs={12} lg={6}>
              <div className="placeholder-preview-card shadow-lg p-2 rounded-4">
                <PlaceholderImage
                  width={640}
                  height={440}
                  title="Connected Growth Architecture"
                  category="System Flow"
                  theme="blue"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* ── Bottom CTA ── */}
      <section className="services-bottom-cta text-center py-5">
        <Container>
          <div className="cta-inner-box p-5 rounded-4 position-relative overflow-hidden">
            <h2 className="mb-3">Need a Scoped Architecture for Your Business?</h2>
            <p className="mb-4 text-secondary mx-auto" style={{ maxWidth: '620px' }}>
              We evaluate your current marketing, tech stack, and automation bottlenecks to craft a bespoke 90-day deployment plan.
            </p>
            <div className="d-flex justify-content-center gap-3 flex-wrap">
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, 'contact')}
                className="btn-hero-primary"
              >
                Book a Strategy Consultation
                {icons.arrowRight}
              </a>
              <a
                href="#case-studies"
                onClick={(e) => handleNavClick(e, 'case-studies')}
                className="btn-hero-secondary"
              >
                View Case Studies
              </a>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Services;
