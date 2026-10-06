import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import icons from './Icons';
import PlaceholderImage from './PlaceholderImage';
import SectionDivider from './SectionDivider';
import './home.css';

const USP_LIST = [
  'Turn Vision into Quantifiable Pipeline',
  'Connect Media, CRM & Custom Tech',
  'Scale Predictable Business Revenue',
  'Eliminate Fragile Agency Silos',
  'Automate Client Journeys & Follow-Ups'
];

const Home = ({ onNavigate }) => {
  const [scrollPct, setScrollPct] = useState(0);
  const [uspIndex, setUspIndex] = useState(0);
  const [hoveredClient, setHoveredClient] = useState(null);

  // Rotating Buzzworthy-style USP ticker
  useEffect(() => {
    const timer = setInterval(() => {
      setUspIndex((prev) => (prev + 1) % USP_LIST.length);
    }, 2800);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const el = document.documentElement;
      const pct = (el.scrollTop / (el.scrollHeight - el.clientHeight)) * 100;
      setScrollPct(Math.min(pct, 100));
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (e, pageId) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate(pageId);
    }
  };

  return (
    <>
      {/* ── Scroll progress bar ── */}
      <div
        className="scroll-progress-bar"
        style={{ width: `${scrollPct}%` }}
        role="progressbar"
        aria-valuenow={Math.round(scrollPct)}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label="Page scroll progress"
      />

      {/* ══════════════════════════════════
          HERO SECTION - REDESIGNED BANNER
      ══════════════════════════════════ */}
      <section className="hero-section" aria-label="Hero">
        {/* Dynamic Abstract Tech Mesh Background */}
        <div className="hero-mesh-bg" aria-hidden="true" />

        {/* Ambient glows */}
        <div className="hero-glow-orange" aria-hidden="true" />
        <div className="hero-glow-blue" aria-hidden="true" />

        {/* Content */}
        <Container className="hero-content">
          <Row className="justify-content-center">
            <Col xs={12} lg={10} xl={9} className="text-center">
              {/* Badge with left-to-right infinite orange glow */}
              <div className="mb-3 d-inline-block">
                <span className="badge-premium-glowing">
                  <span className="badge-dot" aria-hidden="true" />
                  <span className="badge-shimmer-text">Business Growth Infrastructure Company</span>
                </span>
              </div>

              {/* Buzzworthy-style Kinetic Rotating Tagline / USP pill */}
              <div className="buzz-usp-bar mb-4">
                <span className="buzz-usp-prefix">
                  <span>We</span>
                  <span className="buzz-usp-dots">
                    <i className="buzz-dot"></i>
                    <i className="buzz-dot"></i>
                  </span>
                </span>
                <div className="buzz-usp-viewport" key={uspIndex}>
                  <p className="buzz-usp-text">{USP_LIST[uspIndex]}</p>
                </div>
              </div>

              {/* Headline with kinetic split lines */}
              <h1 className="hero-title buzz-kinetic-title">
                <span className="buzz-title-line buzz-line-1">Building Growth Infrastructure</span>
                <span className="hero-title-gradient d-block mt-1 buzz-title-line buzz-line-2">for Modern Businesses.</span>
              </h1>

              {/* Subheadline */}
              <p className="hero-subtitle">
                MSquare Professionals Pvt. Ltd. connects high-intent customer acquisition, intelligent automation, and bespoke software systems into one predictable revenue engine.
              </p>

              {/* CTA Buttons */}
              <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center align-items-center">
                <a
                  href="#contact"
                  onClick={(e) => handleNavClick(e, 'contact')}
                  className="btn-hero-primary w-100 w-sm-auto"
                >
                  <span>Build Your Growth System</span>
                  {icons.arrowRight}
                </a>
                <a
                  href="#services"
                  onClick={(e) => handleNavClick(e, 'services')}
                  className="btn-hero-secondary w-100 w-sm-auto"
                >
                  Explore Services
                </a>
              </div>
            </Col>
          </Row>
        </Container>

        {/* Bottom fade into next section */}
        <div className="hero-bottom-fade" aria-hidden="true" />
      </section>

      {/* ══════════════════════════════════
          TRUST METRICS SECTION
      ══════════════════════════════════ */}
      <section className="stats-section" aria-label="Key statistics">
        <Container>
          <div className="text-center mb-5">
            <span className="badge-eyebrow mb-2">VERIFIED IMPACT</span>
            <h2 className="section-title">Trusted by Growing Businesses</h2>
            <p className="section-subtitle">
              From high-growth startups to enterprise groups — we engineer the digital infrastructure that makes scale predictable.
            </p>
          </div>

          <Row className="g-4 justify-content-center">
            {[
              { number: '100+', label: 'Platforms Built', colorClass: 'orange' },
              { number: '3', label: 'Core Practice Areas', colorClass: 'blue' },
              { number: '98%', label: 'Client Retention', colorClass: 'orange' },
              { number: '3.2x', label: 'Average ROI Delivered', colorClass: 'blue' }
            ].map(({ number, label, colorClass }) => (
              <Col key={label} xs={6} lg={3}>
                <div className="stat-card">
                  <div className={`stat-number ${colorClass}`}>{number}</div>
                  <div className="stat-label">{label}</div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* ── Geometric Section Divider ── */}
      <SectionDivider accent="orange" />

      {/* ══════════════════════════════════
          ECOSYSTEM SERVICES SECTION
      ══════════════════════════════════ */}
      <section className="services-section" aria-label="Our services">
        <Container>
          <div className="text-center mb-5">
            <span className="badge-eyebrow mb-2">INTEGRATED ENGINE</span>
            <h2 className="section-title">One Partner. One Ecosystem.</h2>
            <p className="section-subtitle">
              Marketing, automation, and technology — designed to work together as a single, connected growth system.
            </p>
          </div>

          <Row className="g-4">
            {/* ── Card 1: Growth Marketing ── */}
            <Col xs={12} lg={4} className="d-flex">
              <div className="service-card orange-hover w-100 d-flex flex-column">
                <div className="p-4 flex-grow-1">
                  <div className="service-icon-box orange">
                    {icons.chart}
                  </div>
                  <h3 className="service-card-title">Growth Marketing</h3>
                  <p className="service-card-desc">
                    Attract the right customers and generate qualified leads through data-driven performance marketing.
                  </p>

                  <div className="my-3">
                    <PlaceholderImage
                      width={380}
                      height={200}
                      title="Performance Engine"
                      category="Marketing"
                      theme="orange"
                    />
                  </div>

                  <ul className="service-card-list">
                    {[
                      'Performance Marketing & Lead Generation',
                      'SEO, SEM & Search Dominance',
                      'Social Media Marketing',
                      'Branding & Digital Strategy'
                    ].map((item) => (
                      <li key={item}>
                        <span className="check-icon-orange">{icons.checkCircle}</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="px-4 pb-4">
                  <a
                    href="#services"
                    onClick={(e) => handleNavClick(e, 'services')}
                    className="service-card-link"
                  >
                    <span>View Marketing Pillar</span>
                    {icons.arrowRight}
                  </a>
                </div>
              </div>
            </Col>

            {/* ── Card 2: Business Automation ── */}
            <Col xs={12} lg={4} className="d-flex">
              <div className="service-card blue-hover w-100 d-flex flex-column">
                <div className="p-4 flex-grow-1">
                  <div className="service-icon-box blue">
                    {icons.automation}
                  </div>
                  <h3 className="service-card-title">Business Automation</h3>
                  <p className="service-card-desc">
                    Eliminate manual work and build connected systems that scale your operations seamlessly.
                  </p>

                  <div className="my-3">
                    <PlaceholderImage
                      width={380}
                      height={200}
                      title="Connected Workflows"
                      category="Automation"
                      theme="blue"
                    />
                  </div>

                  <ul className="service-card-list">
                    {[
                      'CRM Solutions & Lead Management',
                      'Workflow & Sales Automation',
                      'Attendance Management Systems',
                      'Process Digitization'
                    ].map((item) => (
                      <li key={item}>
                        <span className="check-icon-blue">{icons.checkCircle}</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="px-4 pb-4">
                  <a
                    href="#services"
                    onClick={(e) => handleNavClick(e, 'services')}
                    className="service-card-link"
                  >
                    <span>View Automation Pillar</span>
                    {icons.arrowRight}
                  </a>
                </div>
              </div>
            </Col>

            {/* ── Card 3: Technology Solutions ── */}
            <Col xs={12} lg={4} className="d-flex">
              <div className="service-card purple-hover w-100 d-flex flex-column">
                <div className="p-4 flex-grow-1">
                  <div className="service-icon-box neutral">
                    {icons.code}
                  </div>
                  <h3 className="service-card-title">Technology Solutions</h3>
                  <p className="service-card-desc">
                    Custom software, web and mobile apps, and enterprise platforms built specifically for your business.
                  </p>

                  <div className="my-3">
                    <PlaceholderImage
                      width={380}
                      height={200}
                      title="Custom Software"
                      category="Technology"
                      theme="purple"
                    />
                  </div>

                  <ul className="service-card-list">
                    {[
                      'Custom Software & Web Applications',
                      'Mobile Apps (iOS & Android)',
                      'Enterprise Software & ERP Solutions',
                      'API Integrations & Pipelines'
                    ].map((item) => (
                      <li key={item}>
                        <span className="check-icon-muted">{icons.checkCircle}</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="px-4 pb-4">
                  <a
                    href="#services"
                    onClick={(e) => handleNavClick(e, 'services')}
                    className="service-card-link"
                  >
                    <span>View Tech Pillar</span>
                    {icons.arrowRight}
                  </a>
                </div>
              </div>
            </Col>
          </Row>

          {/* View All Services Button */}
          <div className="text-center mt-5">
            <a
              href="#services"
              onClick={(e) => handleNavClick(e, 'services')}
              className="btn-view-services"
            >
              <span>View All 15+ Practice Areas</span>
              {icons.arrowRight}
            </a>
          </div>
        </Container>
      </section>

      {/* ── Geometric Section Divider ── */}
      <SectionDivider accent="blue" />

      {/* ══════════════════════════════════
          BUZZWORTHY-STYLE INTERACTIVE CLIENT IMPACT STRIP
      ══════════════════════════════════ */}
      <section className="buzz-clients-impact-section py-5" aria-label="Client results">
        <Container>
          <div className="text-center mb-4">
            <span className="badge-eyebrow mb-2">VERIFIED METRICS</span>
            <h2 className="section-title">Measurable Ecosystem Returns</h2>
            <p className="section-subtitle">
              Hover over each client partner to see verified conversion and pipeline KPIs delivered.
            </p>
          </div>

          <div className="buzz-client-grid">
            {[
              {
                id: 1,
                name: 'Nair Retail Brands',
                category: 'E-Commerce',
                stat: '4.1x',
                metric: 'ROAS Delivered',
                sub: 'Server-side Meta CAPI & UGC system'
              },
              {
                id: 2,
                name: 'Prestige Living Spaces',
                category: 'PropTech',
                stat: '800+',
                metric: 'MQLs in 60 Days',
                sub: 'Real-time WhatsApp CRM dispatch'
              },
              {
                id: 3,
                name: 'CarePoint MedTech',
                category: 'HealthTech',
                stat: '-42%',
                metric: 'Cost Per Acquisition',
                sub: 'Full-funnel intent qualification'
              },
              {
                id: 4,
                name: 'Apex Capital Advisors',
                category: 'FinTech',
                stat: '280%',
                metric: 'Inbound Pipeline Growth',
                sub: 'Automated workflow & portal'
              }
            ].map((client) => {
              const isHovered = hoveredClient === client.id;
              return (
                <div
                  key={client.id}
                  className={`buzz-client-box ${isHovered ? 'is-active' : ''}`}
                  onMouseEnter={() => setHoveredClient(client.id)}
                  onMouseLeave={() => setHoveredClient(null)}
                >
                  <div className="buzz-client-badge">{client.category}</div>
                  <h4 className="buzz-client-name">{client.name}</h4>
                  
                  <div className="buzz-client-impact">
                    <span className="buzz-impact-number">{client.stat}</span>
                    <span className="buzz-impact-label">{client.metric}</span>
                  </div>
                  
                  <p className="buzz-client-sub">{client.sub}</p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ── Geometric Section Divider ── */}
      <SectionDivider accent="orange" />

      {/* ══════════════════════════════════
          FEATURED CASE STUDIES STRIP
      ══════════════════════════════════ */}
      <section className="featured-cases-section py-5 bg-secondary-alt">
        <Container>
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-end mb-5">
            <div>
              <span className="badge-eyebrow mb-2">PROVEN OUTCOMES</span>
              <h2 className="section-title m-0">Recent High-Impact Work</h2>
            </div>
            {/* Styled Explore All Case Studies Button */}
            <a
              href="#case-studies"
              onClick={(e) => handleNavClick(e, 'case-studies')}
              className="btn-explore-cases mt-3 mt-md-0"
            >
              <span>Explore All Case Studies</span>
              {icons.arrowRight}
            </a>
          </div>

          <Row className="g-4">
            <Col xs={12} md={6}>
              <Card className="home-case-card p-0 overflow-hidden border-0 rounded-4">
                <PlaceholderImage
                  width={600}
                  height={320}
                  title="Nair Retail Brands"
                  category="4.1x ROAS • E-Commerce"
                  theme="orange"
                />
                <Card.Body className="p-4">
                  <span className="case-tag-small">E-COMMERCE &amp; FASHION</span>
                  <h3 className="fs-5 fw-bold mt-2">Elevating E-Commerce: 4.1x ROAS in 90 Days</h3>
                  <p className="text-secondary small mb-3">
                    Rebuilt full acquisition funnel, creative testing matrix, and server-side Conversions API attribution.
                  </p>
                  <a
                    href="#case-studies"
                    onClick={(e) => handleNavClick(e, 'case-studies')}
                    className="service-card-link"
                  >
                    <span>Read Full Case Study</span>
                    {icons.arrowRight}
                  </a>
                </Card.Body>
              </Card>
            </Col>

            <Col xs={12} md={6}>
              <Card className="home-case-card p-0 overflow-hidden border-0 rounded-4">
                <PlaceholderImage
                  width={600}
                  height={320}
                  title="Prestige Living Spaces"
                  category="800+ MQLs • PropTech"
                  theme="blue"
                />
                <Card.Body className="p-4">
                  <span className="case-tag-small">REAL ESTATE &amp; PROPTECH</span>
                  <h3 className="fs-5 fw-bold mt-2">Real Estate Lead Gen: 800+ MQLs in 60 Days</h3>
                  <p className="text-secondary small mb-3">
                    Hyper-local campaigns with multi-step qualification funnels and real-time WhatsApp CRM dispatch.
                  </p>
                  <a
                    href="#case-studies"
                    onClick={(e) => handleNavClick(e, 'case-studies')}
                    className="service-card-link"
                  >
                    <span>Read Full Case Study</span>
                    {icons.arrowRight}
                  </a>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* ── Geometric Section Divider ── */}
      <SectionDivider accent="blue" />

      {/* ══════════════════════════════════
          CTA BANNER SECTION
      ══════════════════════════════════ */}
      <section className="cta-section" aria-label="Call to action">
        <div className="cta-ellipse-glow" aria-hidden="true" />
        <Container className="cta-content">
          <Row className="justify-content-center">
            <Col xs={12} lg={8} className="text-center">
              <h2 className="cta-title">Ready to Make Growth Predictable?</h2>
              <p className="cta-desc">
                Stop juggling multiple disconnected vendors. Partner with M Square to build an integrated growth infrastructure that generates revenue and scales your operations.
              </p>
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, 'contact')}
                className="btn-cta-primary"
                aria-label="Build your growth system with MSquare"
              >
                <span>Build Your Growth System</span>
                {icons.arrowRight}
              </a>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Home;