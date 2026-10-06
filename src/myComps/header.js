import React, { useState } from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import icons from './Icons';
import './header.css';

// Reusable Theme Toggle Button with Sun/Moon icons
const ThemeToggleButton = ({ theme, toggleTheme }) => (
  <button
    type="button"
    onClick={toggleTheme}
    className="theme-toggle-btn"
    aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
    title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
  >
    {theme === 'dark' ? (
      <span className="theme-icon sun-icon">{icons.sun}</span>
    ) : (
      <span className="theme-icon moon-icon">{icons.moon}</span>
    )}
  </button>
);

const Header = ({ activePage = 'home', onNavigate, theme, toggleTheme }) => {
  const [expanded, setExpanded] = useState(false);

  const handleNavClick = (e, pageId) => {
    e.preventDefault();
    setExpanded(false); // Auto close mobile dropdown on select
    if (onNavigate) {
      onNavigate(pageId);
    }
  };

  return (
    <Navbar
      as="nav"
      expand="lg"
      sticky="top"
      expanded={expanded}
      onToggle={(isExpanded) => setExpanded(isExpanded)}
      role="navigation"
      aria-label="Main navigation"
      className="msquare-navbar"
    >
      <Container fluid className="px-3 px-lg-4">
        {/* Brand / Logo */}
        <Navbar.Brand
          href="#home"
          onClick={(e) => handleNavClick(e, 'home')}
          className="d-flex align-items-center me-3 py-0 cursor-pointer"
        >
          <div className="d-flex align-items-center justify-content-center" style={{ minHeight: '52px' }}>
            <img
              src={`${process.env.PUBLIC_URL}/assets/msquare-logo.png`}
              alt="M Square Professionals"
              height="48"
              className="object-fit-contain d-block"
              onError={(e) => {
                if (!e.currentTarget.dataset.retried) {
                  e.currentTarget.dataset.retried = 'true';
                  e.currentTarget.src = `${process.env.PUBLIC_URL}/msplg.jpeg`;
                } else {
                  e.currentTarget.style.display = 'none';
                  const fallbackText = e.currentTarget.nextElementSibling;
                  if (fallbackText) fallbackText.style.display = 'inline-block';
                }
              }}
            />
            <span
              className="fw-bold fs-4 msquare-brand-text ms-2"
              style={{ letterSpacing: '-0.5px' }}
            >
              M Square
            </span>
          </div>
        </Navbar.Brand>

        {/* Mobile controls (Theme Toggle + Hamburger Menu) */}
        <div className="d-flex align-items-center d-lg-none ms-auto gap-2">
          <ThemeToggleButton theme={theme} toggleTheme={toggleTheme} />
          <Navbar.Toggle
            aria-controls="main-navbar-nav"
            aria-label="Open navigation menu"
            className="msquare-toggle shadow-none"
          />
        </div>

        {/* Collapsible Menu */}
        <Navbar.Collapse id="main-navbar-nav">
          {/* Navigation Links - Single Active Item Guaranteed */}
          <Nav className="mx-auto my-2 my-lg-0 align-items-lg-center" role="list">
            <Nav.Link
              href="#home"
              onClick={(e) => handleNavClick(e, 'home')}
              className={`msquare-nav-link ${activePage === 'home' ? 'is-current' : ''}`}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#about"
              onClick={(e) => handleNavClick(e, 'about')}
              className={`msquare-nav-link ${activePage === 'about' ? 'is-current' : ''}`}
            >
              About
            </Nav.Link>
            <Nav.Link
              href="#services"
              onClick={(e) => handleNavClick(e, 'services')}
              className={`msquare-nav-link ${activePage === 'services' ? 'is-current' : ''}`}
            >
              Services
            </Nav.Link>
            <Nav.Link
              href="#case-studies"
              onClick={(e) => handleNavClick(e, 'case-studies')}
              className={`msquare-nav-link ${activePage === 'case-studies' ? 'is-current' : ''}`}
            >
              Case Studies
            </Nav.Link>
            <Nav.Link
              href="#insights"
              onClick={(e) => handleNavClick(e, 'insights')}
              className={`msquare-nav-link ${activePage === 'insights' ? 'is-current' : ''}`}
            >
              Insights
            </Nav.Link>
            <Nav.Link
              href="#contact"
              onClick={(e) => handleNavClick(e, 'contact')}
              className={`msquare-nav-link ${activePage === 'contact' ? 'is-current' : ''}`}
            >
              Contact
            </Nav.Link>
          </Nav>

          {/* Action Area: Desktop Theme Toggle + Scale Your Brand CTA */}
          <div className="d-flex align-items-center gap-2 pt-2 pt-lg-0">
            <div className="d-none d-lg-block">
              <ThemeToggleButton theme={theme} toggleTheme={toggleTheme} />
            </div>

            <Button
              href="#contact"
              onClick={(e) => handleNavClick(e, 'contact')}
              variant="light"
              className="btn-start-project d-inline-flex align-items-center justify-content-center gap-2 w-100 w-lg-auto"
              aria-label="Scale your brand with MSquare"
            >
              <span>Scale Your Brand</span>
              {icons.arrowRight}
            </Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
