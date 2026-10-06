import React from 'react';
import './SectionDivider.css';

const SectionDivider = ({ accent = 'orange' }) => {
  return (
    <div className={`buzz-section-divider accent-${accent}`} aria-hidden="true">
      <div className="buzz-divider-node left">
        <svg viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M6 1L11 6L6 11L1 6L6 1Z"
            stroke="currentColor"
            strokeWidth="1.5"
            fill="var(--bg-card)"
          />
        </svg>
      </div>
      <div className="buzz-divider-line">
        <span className="buzz-line-pulse"></span>
      </div>
      <div className="buzz-divider-node right">
        <svg viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M6 1L11 6L6 11L1 6L6 1Z"
            stroke="currentColor"
            strokeWidth="1.5"
            fill="var(--bg-card)"
          />
        </svg>
      </div>
    </div>
  );
};

export default SectionDivider;
