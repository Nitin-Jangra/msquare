import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './myComps/header';
import Footer from './myComps/Footer';
import Home from './myComps/home';
import Services from './myComps/Services';
import CaseStudies from './myComps/CaseStudies';
import Insights from './myComps/Insights';
import About from './myComps/About';
import Contact from './myComps/Contact';
import Legal from './myComps/Legal';

function App() {
  // Theme state: dark / light (defaults to light)
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) return savedTheme;
    }
    return 'light';
  });

  // Active page state for single-page component routing
  // 'home' | 'about' | 'services' | 'case-studies' | 'insights' | 'contact' | 'legal'
  const [activePage, setActivePage] = useState(() => {
    if (typeof window !== 'undefined') {
      const hash = window.location.hash.replace('#', '');
      if (['home', 'about', 'services', 'case-studies', 'insights', 'contact', 'legal'].includes(hash)) {
        return hash;
      }
    }
    return 'home';
  });

  // Keep theme synced with document element & localStorage
  useEffect(() => {
    document.documentElement.setAttribute('data-bs-theme', theme);
    document.documentElement.setAttribute('data-theme', theme);
    document.body.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Listen to hash changes in window
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (['home', 'about', 'services', 'case-studies', 'insights', 'contact', 'legal'].includes(hash)) {
        setActivePage(hash);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  const handleNavigate = (pageId) => {
    setActivePage(pageId);
    window.location.hash = pageId;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Render current active component
  const renderCurrentPage = () => {
    switch (activePage) {
      case 'about':
        return <About onNavigate={handleNavigate} />;
      case 'services':
        return <Services onNavigate={handleNavigate} />;
      case 'case-studies':
        return <CaseStudies onNavigate={handleNavigate} />;
      case 'insights':
        return <Insights onNavigate={handleNavigate} />;
      case 'contact':
        return <Contact onNavigate={handleNavigate} />;
      case 'legal':
        return <Legal onNavigate={handleNavigate} />;
      case 'home':
      default:
        return <Home onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className={`App d-flex flex-column min-vh-100 theme-${theme}`}>
      <Header
        activePage={activePage}
        onNavigate={handleNavigate}
        theme={theme}
        toggleTheme={toggleTheme}
      />

      <main className="flex-grow-1" style={{ overflowX: 'hidden' }}>
        {renderCurrentPage()}
      </main>

      {/* Floating Buzzworthy-Style Magnetic Consultation Action + WhatsApp */}
      <div className="buzz-floating-actions" role="complementary" aria-label="Quick contact actions">
        {/* Buzzworthy-style Circular Quick-Talk trigger */}
        <a
          href="#contact"
          onClick={(e) => {
            e.preventDefault();
            handleNavigate('contact');
          }}
          className="buzz-magnetic-cta"
          aria-label="Start consultation with M Square"
          title="Let's Talk — Start Consultation"
        >
          <span className="buzz-cta-spin-ring" aria-hidden="true" />
          <span className="buzz-cta-inner">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
          </span>
          <span className="buzz-cta-tooltip">Let's Talk</span>
        </a>

        {/* Floating WhatsApp Quick Action Button */}
        <a
          className="whatsapp-float-btn"
          href="https://api.whatsapp.com/send/?phone=919870202444&text=Hi+MSquare!+I+visited+your+website+and+would+like+to+know+more+about+your+growth+services."
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with us on WhatsApp"
        >
          <span className="whatsapp-tooltip-label">WhatsApp Us</span>
          <span className="whatsapp-btn-icon" aria-hidden="true">
            <svg viewBox="0 0 32 32" width="28" height="28" fill="currentColor">
              <path d="M16.04 4.4c-6.3 0-11.42 4.98-11.42 11.12 0 2.1.61 4.14 1.77 5.9l-1.88 5.52 5.8-1.82a11.67 11.67 0 0 0 5.73 1.5c6.3 0 11.42-4.98 11.42-11.1 0-6.14-5.12-11.12-11.42-11.12Zm0 20.33c-1.8 0-3.55-.51-5.05-1.48l-.4-.25-3.22 1.01 1.04-3.07-.27-.42a9 9 0 0 1-1.54-5c0-5.09 4.23-9.22 9.44-9.22 5.22 0 9.46 4.13 9.46 9.22 0 5.08-4.24 9.21-9.46 9.21Zm5.18-6.9c-.28-.14-1.67-.8-1.93-.89-.26-.09-.45-.14-.64.14-.19.27-.73.89-.9 1.07-.16.18-.33.2-.61.07-.28-.14-1.18-.42-2.25-1.35-.83-.72-1.39-1.62-1.55-1.89-.16-.28-.02-.43.12-.56.13-.12.28-.32.43-.48.14-.16.19-.27.28-.46.1-.18.05-.34-.02-.48-.07-.14-.64-1.51-.88-2.07-.23-.54-.47-.47-.64-.48h-.55c-.19 0-.5.07-.76.34-.26.28-1 1-1 2.42s1.03 2.8 1.17 2.99c.14.18 2.04 3.04 4.94 4.26.69.29 1.23.46 1.65.59.69.21 1.32.18 1.82.11.56-.08 1.67-.66 1.9-1.3.24-.64.24-1.19.17-1.3-.07-.12-.26-.19-.54-.33Z" />
            </svg>
          </span>
        </a>
      </div>

      <Footer onNavigate={handleNavigate} />
    </div>
  );
}

export default App;
