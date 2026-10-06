import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import icons from './Icons';
import './Footer.css';

const Footer = ({ onNavigate }) => {
  const handleNavClick = (e, pageId) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate(pageId);
    }
  };

  return (
    <footer className="msquare-footer" aria-label="Site footer">
      {/* Subtle ambient glow gradients */}
      <div className="footer-glow-orange" aria-hidden="true" />
      <div className="footer-glow-blue" aria-hidden="true" />

      <Container className="px-3 px-lg-5 position-relative z-1">
        <Row className="gy-4 gy-lg-0 gx-lg-5">
          {/* Column 1: Brand, Tagline & Social Links */}
          <Col xs={12} lg={4} className="text-start d-flex flex-column align-items-start">
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, 'home')}
              className="d-inline-flex align-items-center justify-content-start mb-3 text-decoration-none"
            >
              <div className="d-flex align-items-center justify-content-start text-start" style={{ minHeight: '50px' }}>
                <img
                  src={`${process.env.PUBLIC_URL}/assets/msquare-logo.png`}
                  alt="M Square Professionals"
                  height="46"
                  className="object-fit-contain d-block me-2"
                  onError={(e) => {
                    if (!e.currentTarget.dataset.retried) {
                      e.currentTarget.dataset.retried = 'true';
                      e.currentTarget.src = `${process.env.PUBLIC_URL}/msplg.jpeg`;
                    }
                  }}
                />
                <span className="fw-bold fs-4 footer-brand-text">
                  M Square Professionals
                </span>
              </div>
            </a>

            <p className="footer-desc mb-4">
              One Partner. One Ecosystem. Unlimited Growth.
              <br />
              We help businesses attract customers, automate operations, and scale through connected technology ecosystems.
            </p>

            {/* Social Media Links */}
            <div className="d-flex align-items-center gap-2" role="list" aria-label="Social media links">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                role="listitem"
                aria-label="M Square on LinkedIn"
                className="footer-social-btn"
              >
                in
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                role="listitem"
                aria-label="M Square on X"
                className="footer-social-btn"
              >
                x
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                role="listitem"
                aria-label="M Square on Instagram"
                className="footer-social-btn"
              >
                ig
              </a>
            </div>
          </Col>

          {/* Column 2: Navigation Links */}
          <Col xs={6} md={4} lg={2}>
            <h3 className="footer-heading">Ecosystem</h3>
            <ul className="footer-links-list">
              <li>
                <a href="#home" onClick={(e) => handleNavClick(e, 'home')} className="footer-service-link">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" onClick={(e) => handleNavClick(e, 'about')} className="footer-service-link">
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" onClick={(e) => handleNavClick(e, 'services')} className="footer-service-link">
                  All Services
                </a>
              </li>
              <li>
                <a href="#case-studies" onClick={(e) => handleNavClick(e, 'case-studies')} className="footer-service-link">
                  Case Studies
                </a>
              </li>
              <li>
                <a href="#insights" onClick={(e) => handleNavClick(e, 'insights')} className="footer-service-link">
                  Insights &amp; FAQs
                </a>
              </li>
              <li>
                <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')} className="footer-service-link">
                  Contact
                </a>
              </li>
            </ul>
          </Col>

          {/* Column 3: Practice Areas */}
          <Col xs={6} md={4} lg={3}>
            <h3 className="footer-heading">Services</h3>
            <ul className="footer-links-list">
              <li>
                <a href="#services" onClick={(e) => handleNavClick(e, 'services')} className="footer-service-link">
                  Performance Marketing
                </a>
              </li>
              <li>
                <a href="#services" onClick={(e) => handleNavClick(e, 'services')} className="footer-service-link">
                  Lead Generation Funnels
                </a>
              </li>
              <li>
                <a href="#services" onClick={(e) => handleNavClick(e, 'services')} className="footer-service-link">
                  CRM &amp; Sales Automation
                </a>
              </li>
              <li>
                <a href="#services" onClick={(e) => handleNavClick(e, 'services')} className="footer-service-link">
                  Workflow Optimization
                </a>
              </li>
              <li>
                <a href="#services" onClick={(e) => handleNavClick(e, 'services')} className="footer-service-link">
                  Custom Software &amp; Web Apps
                </a>
              </li>
              <li>
                <a href="#services" onClick={(e) => handleNavClick(e, 'services')} className="footer-service-link">
                  Enterprise ERP Solutions
                </a>
              </li>
            </ul>
          </Col>

          {/* Column 4: Get Started & Direct Info */}
          <Col xs={12} md={4} lg={3}>
            <h3 className="footer-heading">Get Started</h3>
            <ul className="footer-contact-list list-unstyled mb-4">
              <li className="d-flex align-items-center gap-2 mb-2">
                <span className="text-orange">{icons.mail}</span>
                <a href="mailto:info@msquareprofessionals.com" className="footer-contact-link text-break">
                  info@msquareprofessionals.com
                </a>
              </li>
              <li className="d-flex align-items-center gap-2 mb-2">
                <span className="text-orange">{icons.phone}</span>
                <a href="tel:+919870202444" className="footer-contact-link">
                  +91 9870202444
                </a>
              </li>
              <li className="d-flex align-items-start gap-2 mb-2">
                <span className="text-orange mt-1">{icons.mapPin}</span>
                <span className="footer-contact-link text-secondary">
                  SCO 40, Civil Line, Sector 15, Gurugram, India
                </span>
              </li>
            </ul>

            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, 'contact')}
              className="footer-cta-btn d-inline-flex align-items-center justify-content-center gap-2 w-100"
            >
              <span>Scale Your Brand</span>
              {icons.arrowRight}
            </a>
          </Col>
        </Row>

        {/* Legal Row */}
        <div className="footer-legal-border mt-5 pt-4 d-flex flex-column flex-md-row justify-content-between align-items-center gap-3">
          <p className="m-0 text-muted small text-center text-md-start">
            &copy; 2026 MSquare Professionals Pvt. Ltd. All rights reserved.
          </p>

          <div className="d-flex align-items-center gap-4">
            <a
              href="#legal"
              onClick={(e) => handleNavClick(e, 'legal')}
              className="legal-anchor text-muted small"
            >
              Privacy Policy
            </a>
            <a
              href="#legal"
              onClick={(e) => handleNavClick(e, 'legal')}
              className="legal-anchor text-muted small"
            >
              Terms of Service
            </a>
            <a
              href="#legal"
              onClick={(e) => handleNavClick(e, 'legal')}
              className="legal-anchor text-muted small"
            >
              Cookie Policy
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
