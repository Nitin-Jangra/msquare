import React, { useState } from 'react';
import { Container, Row, Col, Card, Nav } from 'react-bootstrap';
import './legal.css';

const Legal = ({ initialTab = 'privacy' }) => {
  const [activeTab, setActiveTab] = useState(initialTab);

  return (
    <div className="legal-page py-5">
      <Container>
        <div className="text-center mb-5">
          <span className="badge-eyebrow mb-2">COMPLIANCE &amp; POLICIES</span>
          <h1 className="legal-title">Legal &amp; Trust Agreements</h1>
          <p className="text-secondary mx-auto" style={{ maxWidth: '640px' }}>
            Transparent policies governing our data privacy, terms of engagement, and operational standards at M Square Professionals Pvt. Ltd.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="legal-nav-shell mx-auto mb-5">
          <Nav variant="pills" activeKey={activeTab} onSelect={(k) => setActiveTab(k)} className="justify-content-center">
            <Nav.Item>
              <Nav.Link eventKey="privacy" className="legal-pill-link">Privacy Policy</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="terms" className="legal-pill-link">Terms of Service</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="cookies" className="legal-pill-link">Cookie Policy</Nav.Link>
            </Nav.Item>
          </Nav>
        </div>

        {/* Policy Content Body */}
        <Row className="justify-content-center">
          <Col xs={12} lg={10}>
            <Card className="legal-card-body p-4 p-md-5 rounded-4 border-0">
              {activeTab === 'privacy' && (
                <div className="legal-content">
                  <div className="d-flex justify-content-between align-items-center mb-4">
                    <h2 className="fs-3 fw-bold m-0">Privacy Policy</h2>
                    <span className="text-muted small">Effective: May 2026</span>
                  </div>

                  <p>
                    At <strong>M Square Professionals Pvt. Ltd.</strong> ("MSquare", "we", "us", or "our"), safeguarding your personal and business data is paramount. This Privacy Policy details the types of information we collect, how it is used, and the measures we employ to secure it.
                  </p>

                  <h4 className="fs-5 fw-bold mt-4 mb-2">1. Information We Collect</h4>
                  <p>
                    We collect personal information directly when you fill out brief forms, subscribe to our research insights, or engage our strategy team. This includes your name, work email address, telephone number, company organization, and specific project scope notes.
                  </p>

                  <h4 className="fs-5 fw-bold mt-4 mb-2">2. How We Utilize Your Data</h4>
                  <ul>
                    <li>To architect customized strategic proposals and project scopes prior to consultation calls.</li>
                    <li>To provide customer support and service updates regarding active growth infrastructure systems.</li>
                    <li>To send periodic technical field notes, industry teardowns, and blueprints (with one-click unsubscribe).</li>
                  </ul>

                  <h4 className="fs-5 fw-bold mt-4 mb-2">3. Zero Third-Party Monetization</h4>
                  <p>
                    We never sell, rent, or lease client data to third-party data brokers or advertisers. Data is solely accessible by authorized engineering and growth strategy personnel.
                  </p>

                  <h4 className="fs-5 fw-bold mt-4 mb-2">4. Data Security &amp; Encryption</h4>
                  <p>
                    All form transmissions utilize SSL/TLS 256-bit encryption. System integrations and webhook flows adhere to modern security and role-based access protocols.
                  </p>

                  <h4 className="fs-5 fw-bold mt-4 mb-2">5. Contact Our Privacy Officer</h4>
                  <p>
                    For inquiries or data modification requests, contact us directly at <a href="mailto:info@msquareprofessionals.com" className="text-orange">info@msquareprofessionals.com</a> or at our registered office in Sector 15, Gurugram, Haryana.
                  </p>
                </div>
              )}

              {activeTab === 'terms' && (
                <div className="legal-content">
                  <div className="d-flex justify-content-between align-items-center mb-4">
                    <h2 className="fs-3 fw-bold m-0">Terms of Service</h2>
                    <span className="text-muted small">Updated: May 2026</span>
                  </div>

                  <p>
                    By engaging M Square Professionals Pvt. Ltd. or accessing our web platforms, you agree to comply with the following contractual terms and conditions.
                  </p>

                  <h4 className="fs-5 fw-bold mt-4 mb-2">1. Scope of Professional Services</h4>
                  <p>
                    MSquare delivers Growth Marketing, Business Automation, and Custom Software Development under mutually signed Statements of Work (SOW). Deliverables, sprint timelines, and SLAs are governed by the respective agreement.
                  </p>

                  <h4 className="fs-5 fw-bold mt-4 mb-2">2. Intellectual Property Rights</h4>
                  <p>
                    Upon settlement of agreed contract milestones, all bespoke custom software code, web applications, and creative campaign assets built specifically for the client transfer entirely to client ownership.
                  </p>

                  <h4 className="fs-5 fw-bold mt-4 mb-2">3. Client Collaboration &amp; Access</h4>
                  <p>
                    Successful deployment depends on timely access to relevant third-party advertising accounts, CRM instances, or repository environments. Both parties agree to maintain strict mutual confidentiality.
                  </p>

                  <h4 className="fs-5 fw-bold mt-4 mb-2">4. Governing Law</h4>
                  <p>
                    These terms are governed by and construed in accordance with the laws of India, under the exclusive jurisdiction of the courts of Gurugram, Haryana.
                  </p>
                </div>
              )}

              {activeTab === 'cookies' && (
                <div className="legal-content">
                  <div className="d-flex justify-content-between align-items-center mb-4">
                    <h2 className="fs-3 fw-bold m-0">Cookie &amp; Tracking Policy</h2>
                    <span className="text-muted small">Updated: May 2026</span>
                  </div>

                  <p>
                    This Cookie Policy explains how MSquare utilizes cookies and similar local storage technologies to ensure optimal platform performance and understand user interaction.
                  </p>

                  <h4 className="fs-5 fw-bold mt-4 mb-2">1. Essential Preference Cookies</h4>
                  <p>
                    We store your selected UI theme preference (Dark Mode vs Light Mode) in your browser's local storage so your visual preference is remembered seamlessly across visits.
                  </p>

                  <h4 className="fs-5 fw-bold mt-4 mb-2">2. Analytical Telemetry</h4>
                  <p>
                    We utilize privacy-respecting analytics to gauge aggregate page view counts, device viewport dimensions, and navigation flows to ensure cross-device mobile responsiveness.
                  </p>

                  <h4 className="fs-5 fw-bold mt-4 mb-2">3. Managing Preferences</h4>
                  <p>
                    You can inspect or delete cookies at any time via your browser settings. Doing so will reset your UI theme to the system default.
                  </p>
                </div>
              )}
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Legal;
