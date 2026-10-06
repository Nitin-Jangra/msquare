import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import icons from './Icons';
import PlaceholderImage from './PlaceholderImage';
import './about.css';

const About = () => {
  const values = [
    {
      title: 'One Partner. One Ecosystem.',
      desc: 'Marketing, automation, and custom technology solutions architected to work together seamlessly — eliminate multiple disjointed agencies.',
      icon: icons.shield
    },
    {
      title: 'Growth-Focused Approach',
      desc: 'Every campaign and line of code is structured around quantifiable pipeline impact, efficiency, and customer lifetime value.',
      icon: icons.chart
    },
    {
      title: 'Technology-Led Execution',
      desc: 'Deep software development and API automation expertise enable us to solve business bottlenecks beyond standard marketing.',
      icon: icons.code
    },
    {
      title: 'End-to-End Capability',
      desc: 'From initial customer acquisition to CRM lead routing and post-sale retention portals, we cover the full growth cycle.',
      icon: icons.automation
    },
    {
      title: 'Customized Architecture',
      desc: 'No cookie-cutter templates or generic packages. We build tailored architectures suited to your operational workflows.',
      icon: icons.checkCircle
    },
    {
      title: 'Measurable Business Impact',
      desc: 'Real-time transparent dashboards track every rupee of ad spend and every automated hour saved for your executive team.',
      icon: icons.arrowRight
    }
  ];

  const milestones = [
    {
      year: '2023',
      title: 'Founded',
      desc: 'MSquare Professionals was established as a partnership firm in Gurugram, India — with a clear mission: to help businesses build connected growth systems combining marketing, automation, and technology.'
    },
    {
      year: '2024',
      title: 'Growing Client Base',
      desc: 'Expanded our team and service offerings across Growth Marketing, CRM automation, and custom software development, serving startups, educational institutions, healthcare organizations, and real estate firms.'
    },
    {
      year: '2025',
      title: '100+ Platforms Built',
      desc: 'Crossed the milestone of 100+ platforms designed and deployed. Deepened expertise in lead management systems, workflow automation, and enterprise software solutions.'
    },
    {
      year: '2026',
      title: 'Incorporated as Pvt. Ltd.',
      desc: 'In response to our growing business and expanding client base, we transitioned to MSquare Professionals Pvt. Ltd. — a Private Limited Company structure built for scale.'
    }
  ];

  const industries = [
    {
      sector: 'Healthcare Organizations',
      name: 'Healthcare & MedTech',
      desc: 'Patient acquisition funnels, HIPAA-compliant CRM routing, automated appointment scheduling, and telemedicine platforms.',
      points: [
        'Patient lead generation & nurturing drip flows',
        'Hospital & clinic appointment management systems',
        'Telemedicine & doctor consultation portals',
        'Healthcare SEO & local search dominance'
      ],
      theme: 'orange',
      icon: icons.heart
    },
    {
      sector: 'Educational Institutions',
      name: 'Education & EdTech',
      desc: 'Student enrollment marketing, custom Learning Management Systems (LMS), automated fee management, and parent communication apps.',
      points: [
        'Student enrollment & admission campaigns',
        'LMS platform development & mobile apps',
        'Automated fee collection & ERP sync',
        'Institutional brand building & authority'
      ],
      theme: 'blue',
      icon: icons.graduation
    },
    {
      sector: 'Real Estate & PropTech',
      name: 'Real Estate',
      desc: 'High-intent buyer generation, automated site visit scheduling, WhatsApp sales alerts, and developer CRM pipelines.',
      points: [
        'HNW buyer lead generation & qualification',
        'Real estate CRM & automated lead distribution',
        'Site visit scheduling & reminder automation',
        'Multi-channel performance campaigns'
      ],
      theme: 'purple',
      icon: icons.building
    },
    {
      sector: 'Retail & Manufacturing',
      name: 'Retail & Manufacturing',
      desc: 'Multi-location inventory tracking, custom e-commerce web applications, B2B sales automation, and distributor portals.',
      points: [
        'Headless e-commerce web & mobile applications',
        'Inventory & multi-warehouse management',
        'Sales rep pipeline automation & tracking',
        'Supply chain digitization & ERP connectors'
      ],
      theme: 'cyan',
      icon: icons.shoppingBag
    }
  ];

  return (
    <div className="about-page">
      {/* ── Hero Section ── */}
      <section className="about-hero">
        <Container>
          <Row className="justify-content-center text-center">
            <Col xs={12} lg={10}>
              <span className="badge-eyebrow mb-3">OUR STORY &amp; PHILOSOPHY</span>
              <h1 className="about-hero-title">
                Building Growth Infrastructure <span>for Modern Businesses.</span>
              </h1>
              <p className="about-hero-subtitle">
                Businesses today face a chronic challenge: growth is managed through disconnected agencies, fragmented software tools, and leaky manual processes. MSquare unites Growth Marketing, Business Automation, and Custom Software under one cohesive roof.
              </p>
            </Col>
          </Row>

          {/* Quick Metrics Banner */}
          <div className="about-metrics-box mt-5 p-4 rounded-4">
            <Row className="g-4 text-center">
              <Col xs={6} md={3}>
                <div className="stat-metric-item">
                  <span className="metric-huge orange">100+</span>
                  <span className="metric-caption">Platforms Built</span>
                </div>
              </Col>
              <Col xs={6} md={3}>
                <div className="stat-metric-item">
                  <span className="metric-huge blue">3</span>
                  <span className="metric-caption">Core Practice Areas</span>
                </div>
              </Col>
              <Col xs={6} md={3}>
                <div className="stat-metric-item">
                  <span className="metric-huge orange">98%</span>
                  <span className="metric-caption">Client Retention</span>
                </div>
              </Col>
              <Col xs={6} md={3}>
                <div className="stat-metric-item">
                  <span className="metric-huge blue">3.2x</span>
                  <span className="metric-caption">Average Client ROI</span>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </section>

      {/* ── How We Work (4-Step Rhythm) ── */}
      <section className="how-we-work py-5">
        <Container>
          <Row className="align-items-center mb-5">
            <Col xs={12} lg={6}>
              <span className="badge-eyebrow mb-2">OUR METHODOLOGY</span>
              <h2 className="fs-2 fw-bold">One Partner for the Entire Growth Lifecycle</h2>
            </Col>
            <Col xs={12} lg={6}>
              <p className="text-secondary m-0">
                We align customer acquisition, conversion logic, lead tracking, workflow automation, and custom engineering so every part of your organization moves in synchronization.
              </p>
            </Col>
          </Row>

          <Row className="g-4">
            {[
              { num: '01', title: 'Understand', desc: 'We dissect your market landscape, customer economics, bottlenecks, and tech stack.' },
              { num: '02', title: 'Connect', desc: 'We identify high-value integration opportunities between paid media and operations.' },
              { num: '03', title: 'Build & Deploy', desc: 'We deploy conversion funnels, workflows, and custom applications engineered for scale.' },
              { num: '04', title: 'Optimize & Scale', desc: 'Continuous iteration backed by real-time conversion data and operational telemetry.' }
            ].map((step, idx) => (
              <Col key={idx} xs={12} sm={6} lg={3}>
                <div className="step-card p-4 rounded-4 h-100">
                  <span className="step-num font-monospace">{step.num}</span>
                  <h3 className="fs-5 fw-bold mb-2">{step.title}</h3>
                  <p className="text-secondary small m-0">{step.desc}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* ── Why MSquare ── */}
      <section className="why-msquare py-5 bg-secondary-alt">
        <Container>
          <div className="text-center mb-5">
            <span className="badge-eyebrow mb-2">OUR ADVANTAGE</span>
            <h2 className="fs-2 fw-bold">Why Growing Brands Choose MSquare</h2>
            <p className="text-secondary mx-auto" style={{ maxWidth: '640px' }}>
              Unlike traditional marketing agencies or standalone software shops, we synthesize both disciplines into a unified growth engine.
            </p>
          </div>

          <Row className="g-4">
            {values.map((v, idx) => (
              <Col key={idx} xs={12} md={6} lg={4}>
                <div className="why-card p-4 rounded-4 h-100">
                  <div className="why-icon-bubble mb-3">{v.icon}</div>
                  <h4 className="fs-5 fw-bold mb-2">{v.title}</h4>
                  <p className="text-secondary small m-0">{v.desc}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* ── Timeline / Journey: Vertical Orange Line with Double Circle Year Nodes ── */}
      <section className="timeline-section py-5">
        <Container>
          <div className="text-center mb-5">
            <span className="badge-eyebrow mb-2">OUR TRAJECTORY</span>
            <h2 className="fs-2 fw-bold">Our Journey</h2>
            <p className="text-secondary">From a partnership firm to a Private Limited Company — building growth systems for businesses across India.</p>
          </div>

          <div className="timeline-clean-track mx-auto position-relative">
            {/* Continuous vertical orange line connecting through all nodes */}
            <div className="timeline-continuous-spine" aria-hidden="true" />

            <div className="d-flex flex-column gap-4">
              {milestones.map((m, idx) => (
                <div key={idx} className="timeline-row-item d-flex align-items-center gap-4 position-relative">
                  {/* Left Column: Outer/Inner Circular Year Node */}
                  <div className="timeline-node-wrapper position-relative">
                    <div className="timeline-outer-ring">
                      <span className="timeline-year-text">{m.year}</span>
                    </div>
                  </div>

                  {/* Right Column: Clean White/Dark Card with Blue Heading */}
                  <div className="timeline-content-card p-4 rounded-4 flex-grow-1">
                    <h3 className="timeline-card-heading mb-2">{m.title}</h3>
                    <p className="timeline-card-desc text-secondary m-0">{m.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ── Industries We Serve ── */}
      <section className="industries-section py-5 bg-secondary-alt">
        <Container>
          <div className="text-center mb-5">
            <span className="badge-eyebrow mb-2">SECTOR EXPERTISE</span>
            <h2 className="fs-2 fw-bold">Built for Your Exact Industry</h2>
            <p className="text-secondary mx-auto" style={{ maxWidth: '640px' }}>
              We bring proven architectures tailored to the regulatory and customer behavior nuances of key sectors.
            </p>
          </div>

          <Row className="g-4">
            {industries.map((ind, idx) => (
              <Col key={idx} xs={12} md={6} className="d-flex">
                <Card className="industry-detail-card p-4 rounded-4 w-100 border-0">
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <span className="industry-badge">{ind.sector}</span>
                    <span className="industry-icon-wrapper">{ind.icon}</span>
                  </div>

                  <h3 className="fs-4 fw-bold mb-2">{ind.name}</h3>
                  <p className="text-secondary small mb-3">{ind.desc}</p>

                  <div className="mb-4">
                    <PlaceholderImage
                      width={520}
                      height={240}
                      title={ind.name}
                      category="Industry Solutions"
                      theme={ind.theme}
                    />
                  </div>

                  <ul className="industry-points-list mt-auto">
                    {ind.points.map((pt, pIdx) => (
                      <li key={pIdx}>
                        <span className="point-check">✓</span>
                        <span className="small text-secondary">{pt}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* ── Ready to partner CTA ── */}
      <section className="about-cta py-5 text-center">
        <Container>
          <div className="p-5 rounded-4 cta-highlight-box">
            <h2 className="fs-2 fw-bold mb-3">Ready to Build Your Growth Infrastructure?</h2>
            <p className="text-secondary mx-auto mb-4" style={{ maxWidth: '600px' }}>
              Schedule a focused discovery session with our senior architects in Gurugram or virtually.
            </p>
            <a href="/contact" className="btn-hero-primary d-inline-flex align-items-center gap-2">
              <span>Start the Conversation</span>
              {icons.arrowRight}
            </a>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default About;
