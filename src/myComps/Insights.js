import React, { useState } from 'react';
import { Container, Row, Col, Card, Accordion } from 'react-bootstrap';
import icons from './Icons';
import PlaceholderImage from './PlaceholderImage';
import './insights.css';

const Insights = () => {
  const [selectedTag, setSelectedTag] = useState('All');

  const articles = [
    {
      id: 1,
      title: 'How to Connect Marketing, CRM & Automation Without Slowing Down Sales',
      summary: 'A field-tested playbook for founders and growth operators who want higher lead quality, instant sales follow-up, and clean multi-touch attribution.',
      tag: 'Automation & CRM',
      readTime: '6 min read',
      date: 'May 2026',
      theme: 'orange'
    },
    {
      id: 2,
      title: 'Modern SEO in 2026: Search Generative Experience (SGE) & Semantic Content',
      summary: 'Why keyword-stuffed blogs fail modern search algorithms, and how topic-cluster architecture establishes authoritative domain ranking.',
      tag: 'Growth Marketing',
      readTime: '8 min read',
      date: 'Apr 2026',
      theme: 'blue'
    },
    {
      id: 3,
      title: 'Why Monolithic Off-the-Shelf ERPs Fail Growing Businesses (and What to Build Instead)',
      summary: 'Off-the-shelf software charges exorbitant license fees while forcing your team into rigid workflows. Here is the modular microservices alternative.',
      tag: 'Custom Tech',
      readTime: '5 min read',
      date: 'Mar 2026',
      theme: 'purple'
    },
    {
      id: 4,
      title: 'The Real Math of Performance Marketing: CPA, LTV, and Attribution Blindspots',
      summary: 'Navigating post-iOS 14 privacy changes using server-side Conversions API (CAPI), first-party cookies, and predictive attribution modeling.',
      tag: 'Growth Marketing',
      readTime: '7 min read',
      date: 'Feb 2026',
      theme: 'cyan'
    }
  ];

  const faqs = [
    {
      q: 'Which service should our company start with?',
      a: 'If you have an identified bottleneck (e.g. ad performance or manual order processing), you can engage directly for that specific practice area. If you want to transform your end-to-end customer acquisition and operations, we recommend our "Full Growth System" consultation where we review your marketing, CRM, and tech stack.'
    },
    {
      q: 'How fast can we expect measurable business results?',
      a: 'Paid media campaigns, CRM routing, and workflow automations usually deliver measurable efficiency gains within 14 to 30 days. Organic search dominance (SEO), brand repositioning, and custom web applications build compound value over 60 to 90 days.'
    },
    {
      q: 'Do you create bespoke custom plans or fixed rigid packages?',
      a: 'Everything we deliver is 100% custom-scoped. We evaluate your revenue targets, industry landscape, existing tech stack, and internal team capabilities before proposing a phased implementation roadmap.'
    },
    {
      q: 'Can M Square handle both marketing campaigns and deep software engineering?',
      a: 'Yes — this is our core advantage. Rather than you having to coordinate between a separate marketing agency, a CRM consultant, and a software vendor, M Square provides full-stack engineering, workflow automation, and performance marketing under one unified roof.'
    },
    {
      q: 'What is your communication and project management rhythm?',
      a: 'We provide dedicated Slack/WhatsApp channels, weekly sprint updates, live performance dashboards, and bi-weekly strategic executive reviews.'
    }
  ];

  const tags = ['All', 'Growth Marketing', 'Automation & CRM', 'Custom Tech'];

  const filteredArticles = selectedTag === 'All'
    ? articles
    : articles.filter(a => a.tag === selectedTag);

  return (
    <div className="insights-page">
      {/* ── Page Hero ── */}
      <section className="insights-hero text-center">
        <Container>
          <Row className="justify-content-center">
            <Col xs={12} lg={10}>
              <span className="badge-eyebrow mb-3">FIELD NOTES &amp; INSIGHTS</span>
              <h1 className="insights-hero-title">
                Practical Resources for Teams Building <span>Modern Growth Systems.</span>
              </h1>
              <p className="insights-hero-subtitle">
                Actionable frameworks on performance advertising, workflow automation, custom architecture, CRM design, and customer retention.
              </p>

              {/* Tag filters */}
              <div className="d-flex justify-content-center gap-2 flex-wrap mt-4">
                {tags.map((t) => (
                  <button
                    key={t}
                    className={`tag-filter-btn ${selectedTag === t ? 'active' : ''}`}
                    onClick={() => setSelectedTag(t)}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* ── Featured Guide Banner ── */}
      <section className="featured-guide-band py-5">
        <Container>
          <div className="featured-guide-card p-4 p-md-5 rounded-4">
            <Row className="align-items-center g-4">
              <Col xs={12} lg={7}>
                <span className="featured-pill mb-3 d-inline-block">FEATURED BLUEPRINT</span>
                <h2 className="fs-2 fw-bold mb-3">
                  The Complete 2026 Growth Infrastructure Handbook
                </h2>
                <p className="text-secondary mb-4 fs-6">
                  A 38-page practical blueprint detailing how modern high-growth companies connect Google/Meta media buying directly with HubSpot/Salesforce automated workflows and custom React client portals.
                </p>
                <div className="d-flex align-items-center gap-3 flex-wrap">
                  <a href="/contact" className="btn-hero-primary">
                    Request Free Guide Copy {icons.arrowRight}
                  </a>
                  <span className="text-muted small">No spam. Sent instantly to your inbox.</span>
                </div>
              </Col>
              <Col xs={12} lg={5}>
                <div className="shadow-lg rounded-4 overflow-hidden">
                  <PlaceholderImage
                    width={560}
                    height={380}
                    title="Growth Handbook 2026"
                    category="Whitepaper"
                    theme="orange"
                  />
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </section>

      {/* ── Articles Grid ── */}
      <section className="articles-section py-4">
        <Container>
          <div className="d-flex align-items-center justify-content-between mb-4">
            <h2 className="fs-3 fw-bold m-0">Latest Articles &amp; Field Notes</h2>
            <span className="text-secondary small">{filteredArticles.length} Articles</span>
          </div>

          <Row className="g-4">
            {filteredArticles.map((art) => (
              <Col key={art.id} xs={12} md={6} className="d-flex">
                <Card className="article-card w-100 p-0 overflow-hidden border-0">
                  <div className="article-preview-mockup">
                    <PlaceholderImage
                      width={600}
                      height={320}
                      title={art.title}
                      category={art.tag}
                      theme={art.theme}
                    />
                  </div>
                  <Card.Body className="p-4 d-flex flex-column">
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <span className="article-tag">{art.tag}</span>
                      <span className="article-meta text-muted small">{art.readTime} • {art.date}</span>
                    </div>

                    <h3 className="article-title fs-5 fw-bold mb-2">{art.title}</h3>
                    <p className="article-summary text-secondary small mb-4">{art.summary}</p>

                    <a href="/contact" className="mt-auto article-read-link">
                      <span>Read Full Guide</span>
                      {icons.arrowRight}
                    </a>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* ── Frequently Asked Questions (FAQ) Accordion ── */}
      <section className="faq-section py-5">
        <Container>
          <Row className="justify-content-center">
            <Col xs={12} lg={9}>
              <div className="text-center mb-5">
                <span className="badge-eyebrow mb-2">COMMON QUESTIONS</span>
                <h2 className="fs-2 fw-bold">Answers Before You Book the Call</h2>
                <p className="text-secondary">
                  Transparent expectations regarding project scoping, pricing models, timelines, and deliverables.
                </p>
              </div>

              <Accordion defaultActiveKey="0" className="msquare-accordion">
                {faqs.map((faq, idx) => (
                  <Accordion.Item key={idx} eventKey={idx.toString()} className="mb-3 border-0 rounded-3 overflow-hidden">
                    <Accordion.Header className="faq-accordion-header">
                      <span className="fw-semibold">{faq.q}</span>
                    </Accordion.Header>
                    <Accordion.Body className="faq-accordion-body text-secondary">
                      {faq.a}
                    </Accordion.Body>
                  </Accordion.Item>
                ))}
              </Accordion>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Insights;
