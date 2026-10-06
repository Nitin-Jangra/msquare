import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button, Alert } from 'react-bootstrap';
import icons from './Icons';
import './contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    service: '',
    budget: '',
    details: '',
    newsletter: false
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulate reliable dispatch
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormData({
        name: '',
        company: '',
        email: '',
        phone: '',
        service: '',
        budget: '',
        details: '',
        newsletter: false
      });
    }, 800);
  };

  return (
    <div className="contact-page">
      {/* ── Page Hero ── */}
      <section className="contact-hero text-center">
        <Container>
          <Row className="justify-content-center">
            <Col xs={12} lg={10}>
              <span className="badge-eyebrow mb-3">GET IN TOUCH</span>
              <h1 className="contact-hero-title">
                Let's Build Your <span>Growth Plan.</span>
              </h1>
              <p className="contact-hero-subtitle">
                Share a few project details and our senior architects will prepare a customized strategy scoped to your revenue targets before the first call.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* ── Main Form & Info Grid ── */}
      <section className="contact-main-section py-5">
        <Container>
          <Row className="g-5">
            {/* Left Column: Benefits & Direct Info */}
            <Col xs={12} lg={5} className="d-flex flex-column justify-content-between">
              <div>
                <span className="badge-eyebrow mb-2">WHY REACH OUT</span>
                <h2 className="fs-2 fw-bold mb-4">Direct Access to Practitioners, Not Sales Reps</h2>
                <p className="text-secondary mb-4">
                  We don't use boilerplate sales pitches. You talk directly with systems architects who know marketing attribution, API integrations, and product velocity.
                </p>

                <div className="benefits-stack d-flex flex-column gap-3 mb-5">
                  <div className="benefit-card p-3 rounded-3 d-flex gap-3 align-items-center">
                    <div className="benefit-icon orange">{icons.clock}</div>
                    <div>
                      <strong className="d-block text-primary">24-Hour Scoped Response</strong>
                      <span className="text-secondary small">Thorough preliminary audit delivered rapidly.</span>
                    </div>
                  </div>

                  <div className="benefit-card p-3 rounded-3 d-flex gap-3 align-items-center">
                    <div className="benefit-icon blue">{icons.shield}</div>
                    <div>
                      <strong className="d-block text-primary">Free Strategic Architecture</strong>
                      <span className="text-secondary small">Zero commitment. Pure architectural clarity.</span>
                    </div>
                  </div>

                  <div className="benefit-card p-3 rounded-3 d-flex gap-3 align-items-center">
                    <div className="benefit-icon purple">{icons.code}</div>
                    <div>
                      <strong className="d-block text-primary">Custom Technology Scope</strong>
                      <span className="text-secondary small">No recycled pitch decks or generic packages.</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Direct channels card */}
              <div className="direct-channels-card p-4 rounded-4 mb-4">
                <h4 className="fs-6 fw-bold text-uppercase letter-spacing-1 mb-3 text-muted">DIRECT CHANNELS</h4>
                <div className="d-flex flex-column gap-3">
                  <a href="mailto:info@msquareprofessionals.com" className="direct-channel-item">
                    <span className="channel-icon">{icons.mail}</span>
                    <span>info@msquareprofessionals.com</span>
                  </a>
                  <a href="tel:+919870202444" className="direct-channel-item">
                    <span className="channel-icon">{icons.phone}</span>
                    <span>+91 9870202444</span>
                  </a>
                  <div className="direct-channel-item">
                    <span className="channel-icon">{icons.mapPin}</span>
                    <span>Sector 15, Gurugram, Haryana 122002</span>
                  </div>
                </div>
              </div>
            </Col>

            {/* Right Column: Interactive Lead Capture Form */}
            <Col xs={12} lg={7}>
              <Card className="contact-form-card p-4 p-md-5 rounded-4 border-0">
                <Card.Body className="p-0">
                  <div className="mb-4">
                    <span className="form-legend-tag font-monospace">PROJECT BRIEF</span>
                    <h2 className="fs-3 fw-bold mt-2 mb-1">Tell Us What You Want to Scale</h2>
                    <p className="text-secondary small">Fields marked with an asterisk (*) are required.</p>
                  </div>

                  {submitted && (
                    <Alert variant="success" className="mb-4 rounded-3 border-0 bg-success bg-opacity-25 text-primary">
                      <div className="d-flex align-items-center gap-2">
                        <span className="fs-4">✓</span>
                        <div>
                          <strong>Brief received successfully!</strong>
                          <div className="small">Our strategy team will review your requirements and respond within 24 hours.</div>
                        </div>
                      </div>
                    </Alert>
                  )}

                  <Form onSubmit={handleSubmit} id="lead-form">
                    <Row className="g-3">
                      <Col xs={12} md={6}>
                        <Form.Group controlId="contactName">
                          <Form.Label className="small fw-semibold">Full Name *</Form.Label>
                          <Form.Control
                            type="text"
                            name="name"
                            required
                            placeholder="e.g. Rahul Sharma"
                            value={formData.name}
                            onChange={handleChange}
                            className="custom-input"
                          />
                        </Form.Group>
                      </Col>

                      <Col xs={12} md={6}>
                        <Form.Group controlId="contactCompany">
                          <Form.Label className="small fw-semibold">Company / Organization</Form.Label>
                          <Form.Control
                            type="text"
                            name="company"
                            placeholder="e.g. Acme Health Technologies"
                            value={formData.company}
                            onChange={handleChange}
                            className="custom-input"
                          />
                        </Form.Group>
                      </Col>

                      <Col xs={12} md={6}>
                        <Form.Group controlId="contactEmail">
                          <Form.Label className="small fw-semibold">Business Email *</Form.Label>
                          <Form.Control
                            type="email"
                            name="email"
                            required
                            placeholder="name@company.com"
                            value={formData.email}
                            onChange={handleChange}
                            className="custom-input"
                          />
                        </Form.Group>
                      </Col>

                      <Col xs={12} md={6}>
                        <Form.Group controlId="contactPhone">
                          <Form.Label className="small fw-semibold">Phone Number</Form.Label>
                          <Form.Control
                            type="tel"
                            name="phone"
                            placeholder="+91 98700 00000"
                            value={formData.phone}
                            onChange={handleChange}
                            className="custom-input"
                          />
                        </Form.Group>
                      </Col>

                      <Col xs={12} md={6}>
                        <Form.Group controlId="contactService">
                          <Form.Label className="small fw-semibold">Service Area *</Form.Label>
                          <Form.Select
                            name="service"
                            required
                            value={formData.service}
                            onChange={handleChange}
                            className="custom-input"
                          >
                            <option value="">Select a primary service</option>
                            <option value="growth">Growth Marketing &amp; Lead Generation</option>
                            <option value="automation">CRM &amp; Business Automation</option>
                            <option value="software">Custom Software &amp; Web Apps</option>
                            <option value="mobile">Mobile Application (iOS / Android)</option>
                            <option value="full">Full Growth Ecosystem (All 3 Pillars)</option>
                            <option value="consult">Strategy Consultation &amp; System Audit</option>
                          </Form.Select>
                        </Form.Group>
                      </Col>

                      <Col xs={12} md={6}>
                        <Form.Group controlId="contactBudget">
                          <Form.Label className="small fw-semibold">Estimated Budget Range</Form.Label>
                          <Form.Select
                            name="budget"
                            value={formData.budget}
                            onChange={handleChange}
                            className="custom-input"
                          >
                            <option value="">Select budget range</option>
                            <option value="under5">Under ₹5 Lakhs</option>
                            <option value="5-15">₹5 Lakhs – ₹15 Lakhs</option>
                            <option value="15-50">₹15 Lakhs – ₹50 Lakhs</option>
                            <option value="50plus">₹50 Lakhs+</option>
                            <option value="enterprise">Enterprise Contract</option>
                          </Form.Select>
                        </Form.Group>
                      </Col>

                      <Col xs={12}>
                        <Form.Group controlId="contactDetails">
                          <Form.Label className="small fw-semibold">Project Scope &amp; Target Goals *</Form.Label>
                          <Form.Control
                            as="textarea"
                            rows={4}
                            name="details"
                            required
                            placeholder="Describe your current systems, what bottlenecks you face, and what timeline you are targeting..."
                            value={formData.details}
                            onChange={handleChange}
                            className="custom-input"
                          />
                        </Form.Group>
                      </Col>

                      <Col xs={12}>
                        <Form.Check
                          type="checkbox"
                          id="contactNewsletter"
                          name="newsletter"
                          label="Send me weekly growth architecture field notes from M Square."
                          checked={formData.newsletter}
                          onChange={handleChange}
                          className="text-secondary small mt-1"
                        />
                      </Col>

                      <Col xs={12} className="mt-4">
                        <Button
                          type="submit"
                          disabled={loading}
                          className="btn-submit-brief w-100 py-3 d-flex align-items-center justify-content-center gap-2"
                        >
                          <span>{loading ? 'Submitting Brief...' : 'Send Project Brief'}</span>
                          {icons.arrowRight}
                        </Button>
                      </Col>
                    </Row>
                  </Form>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* ── Headquarters Location & Map ── */}
      <section className="hq-section py-5 bg-secondary-alt">
        <Container>
          <div className="text-center mb-5">
            <span className="badge-eyebrow mb-2">OUR HEADQUARTERS</span>
            <h2 className="fs-2 fw-bold">Visit Us in Gurugram, India</h2>
            <p className="text-secondary">Centrally positioned in NCR tech corridor.</p>
          </div>

          <Row className="g-4 align-items-center">
            <Col xs={12} lg={6}>
              <div className="hq-info-box p-4 rounded-4">
                <div className="d-flex align-items-center gap-3 mb-3">
                  <div className="hq-pin-circle">{icons.mapPin}</div>
                  <div>
                    <h4 className="fs-5 fw-bold m-0">Corporate Office</h4>
                    <span className="text-muted small">M Square Professionals Pvt. Ltd.</span>
                  </div>
                </div>

                <div className="hq-address-lines mb-4 text-secondary">
                  <p className="m-0 fw-semibold text-primary">SCO 40, 4th Floor, Civil Line</p>
                  <p className="m-0">Sector 15, Gurugram, Haryana 122002</p>
                  <p className="m-0 text-muted small mt-1">Timezone: IST (UTC +5:30)</p>
                </div>

                <div className="d-flex gap-3 flex-wrap">
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=SCO+40+Sector+15+Gurugram"
                    target="_blank"
                    rel="noreferrer"
                    className="btn-theme-outline d-inline-flex align-items-center gap-2"
                  >
                    <span>Open in Google Maps</span>
                    {icons.external}
                  </a>
                  <a
                    href="https://api.whatsapp.com/send/?phone=919870202444&text=Hi+MSquare!+I+would+like+to+inquire+about+services."
                    target="_blank"
                    rel="noreferrer"
                    className="btn-whatsapp-direct d-inline-flex align-items-center gap-2"
                  >
                    <span>Instant WhatsApp</span>
                  </a>
                </div>
              </div>
            </Col>

            <Col xs={12} lg={6}>
              <div className="map-embed-wrapper rounded-4 overflow-hidden shadow-lg position-relative" style={{ minHeight: '320px', background: 'var(--bg-card)' }}>
                <iframe
                  title="MSquare Gurugram Location"
                  src="https://maps.google.com/maps?q=SCO%2040%20Sector%2015%20Gurugram&t=&z=14&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="340"
                  style={{ border: 0, display: 'block' }}
                  allowFullScreen=""
                  loading="lazy"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Contact;
