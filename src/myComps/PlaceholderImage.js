import React from 'react';

/**
 * Modern Responsive SVG Placeholder Image Component
 * Generates aesthetic vector placeholders with gradient backgrounds, patterns, and badges.
 * Badge width dynamically scales to the length of the category text to eliminate overflow.
 */
export const PlaceholderImage = ({
  width = 600,
  height = 400,
  title = 'Project Showcase',
  category = 'Case Study',
  theme = 'orange', // 'orange' | 'blue' | 'purple' | 'cyan'
  className = '',
  style = {}
}) => {
  const themes = {
    orange: {
      gradientStart: '#ea580c',
      gradientEnd: '#f97316',
      accent: '#fbbf24',
      glow: 'rgba(234, 88, 12, 0.35)'
    },
    blue: {
      gradientStart: '#1d4ed8',
      gradientEnd: '#3b82f6',
      accent: '#60a5fa',
      glow: 'rgba(59, 130, 246, 0.35)'
    },
    purple: {
      gradientStart: '#6d28d9',
      gradientEnd: '#8b5cf6',
      accent: '#c084fc',
      glow: 'rgba(139, 92, 246, 0.35)'
    },
    cyan: {
      gradientStart: '#0e7490',
      gradientEnd: '#06b6d4',
      accent: '#67e8f9',
      glow: 'rgba(6, 182, 212, 0.35)'
    }
  };

  const selectedTheme = themes[theme] || themes.orange;
  const safeId = `${category.replace(/[^a-zA-Z0-9]/g, '-').toLowerCase()}-${theme}`;
  const gradId = `grad-${safeId}`;
  const patternId = `grid-${safeId}`;
  const clipId = `clip-${safeId}`;

  // Truncate title if extremely long for SVG safety
  const displayTitle = title.length > 36 ? `${title.substring(0, 33)}...` : title;

  // Calculate dynamic badge width so text like "4.1X ROAS • E-COMMERCE" never exceeds or overflows pill
  const categoryText = category.toUpperCase();
  const badgeWidth = Math.min(Math.max(categoryText.length * 7.5 + 28, 120), width * 0.76);

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      className={`placeholder-img-svg w-100 h-auto ${className}`}
      style={{
        borderRadius: '16px',
        display: 'block',
        maxWidth: '100%',
        overflow: 'hidden',
        ...style
      }}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={selectedTheme.gradientStart} />
          <stop offset="100%" stopColor={selectedTheme.gradientEnd} />
        </linearGradient>

        <pattern id={patternId} width="24" height="24" patternUnits="userSpaceOnUse">
          <path d="M 24 0 L 0 0 0 24" fill="none" stroke="rgba(255, 255, 255, 0.08)" strokeWidth="1" />
        </pattern>

        <clipPath id={clipId}>
          <rect width={width * 0.74} height={40} />
        </clipPath>
      </defs>

      {/* Base Background */}
      <rect width={width} height={height} fill={`url(#${gradId})`} />

      {/* Grid overlay */}
      <rect width={width} height={height} fill={`url(#${patternId})`} />

      {/* Ambient Circles / Glass shine */}
      <circle cx={width * 0.85} cy={height * 0.25} r={height * 0.45} fill="rgba(255,255,255,0.12)" />
      <circle cx={width * 0.15} cy={height * 0.85} r={height * 0.35} fill="rgba(0,0,0,0.18)" />

      {/* Central Glass Card */}
      <g transform={`translate(${width * 0.08}, ${height * 0.1})`}>
        <rect
          width={width * 0.84}
          height={height * 0.8}
          rx="14"
          fill="rgba(10, 10, 16, 0.52)"
          stroke="rgba(255, 255, 255, 0.2)"
          strokeWidth="1.5"
        />

        {/* Dynamic Category Badge with calculated width */}
        <g transform="translate(20, 24)">
          <rect
            width={badgeWidth}
            height="26"
            rx="13"
            fill="rgba(255, 255, 255, 0.18)"
            stroke="rgba(255, 255, 255, 0.25)"
            strokeWidth="1"
          />
          <text
            x={badgeWidth / 2}
            y="17"
            fill="#ffffff"
            fontSize="10"
            fontWeight="700"
            letterSpacing="0.05em"
            textAnchor="middle"
            fontFamily="Inter, system-ui, sans-serif"
          >
            {categoryText}
          </text>
        </g>

        {/* Title clipped to avoid overflow */}
        <g transform="translate(20, 68)">
          <g clipPath={`url(#${clipId})`}>
            <text
              x="0"
              y="22"
              fill="#ffffff"
              fontSize={width < 450 ? "15" : "18"}
              fontWeight="800"
              fontFamily="Inter, system-ui, sans-serif"
            >
              {displayTitle}
            </text>
          </g>
        </g>

        {/* Interactive UI Mock bar */}
        <g transform="translate(20, 110)">
          <rect width={width * 0.68} height="7" rx="3.5" fill="rgba(255, 255, 255, 0.18)" />
          <rect width={width * 0.45} height="7" rx="3.5" fill={selectedTheme.accent} />
          <rect y="16" width={width * 0.52} height="5" rx="2.5" fill="rgba(255, 255, 255, 0.1)" />
          <rect y="26" width={width * 0.32} height="5" rx="2.5" fill="rgba(255, 255, 255, 0.1)" />
        </g>
      </g>
    </svg>
  );
};

export default PlaceholderImage;
