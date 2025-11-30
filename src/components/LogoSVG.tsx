import * as React from "react";

interface LogoSVGProps {
  className?: string;
  size?: number;
  showText?: boolean;
}

const LogoSVG: React.FC<LogoSVGProps> = ({
  className = "",
  size = 48,
  showText = true,
}) => {
  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      {/* SVG Logo */}
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        className="drop-shadow-lg"
      >
        {/* Outer Circle - Saffron Gradient */}
        <defs>
          <radialGradient id="saffronGradient" cx="50%" cy="30%" r="70%">
            <stop offset="0%" stopColor="#FF9933" />
            <stop offset="100%" stopColor="#E68A2E" />
          </radialGradient>

          <radialGradient id="maroonGradient" cx="50%" cy="30%" r="70%">
            <stop offset="0%" stopColor="#8B1E3F" />
            <stop offset="100%" stopColor="#6D1731" />
          </radialGradient>

          <radialGradient id="softSaffronGradient" cx="50%" cy="30%" r="70%">
            <stop offset="0%" stopColor="#FFD8A8" />
            <stop offset="100%" stopColor="#FFC988" />
          </radialGradient>
        </defs>

        {/* Outer Circle */}
        <circle
          cx="50"
          cy="50"
          r="45"
          fill="url(#saffronGradient)"
          stroke="#8B1E3F"
          strokeWidth="2"
        />

        {/* Middle Circle */}
        <circle
          cx="50"
          cy="50"
          r="35"
          fill="url(#maroonGradient)"
          stroke="#FF9933"
          strokeWidth="1"
        />

        {/* Inner Circle */}
        <circle
          cx="50"
          cy="50"
          r="25"
          fill="url(#softSaffronGradient)"
          stroke="#8B1E3F"
          strokeWidth="1"
        />

        {/* Om Symbol */}
        <text
          x="50"
          y="58"
          textAnchor="middle"
          fontSize="20"
          fill="#8B1E3F"
          fontFamily="serif"
          fontWeight="bold"
          className="drop-shadow-sm"
        >
          ॐ
        </text>

        {/* Decorative Elements */}
        <circle cx="75" cy="25" r="4" fill="#FF9933" opacity="0.8" />
        <circle cx="25" cy="75" r="3" fill="#8B1E3F" opacity="0.7" />
        <circle cx="15" cy="20" r="2" fill="#FFD8A8" opacity="0.6" />
        <circle cx="85" cy="80" r="2" fill="#FF9933" opacity="0.6" />

        {/* Spiritual Rays */}
        <g stroke="#FF9933" strokeWidth="1" opacity="0.4">
          <line x1="50" y1="5" x2="50" y2="15" />
          <line x1="50" y1="85" x2="50" y2="95" />
          <line x1="5" y1="50" x2="15" y2="50" />
          <line x1="85" y1="50" x2="95" y2="50" />
          <line x1="20" y1="20" x2="25" y2="25" />
          <line x1="75" y1="75" x2="80" y2="80" />
          <line x1="80" y1="20" x2="75" y2="25" />
          <line x1="25" y1="75" x2="20" y2="80" />
        </g>
      </svg>

      {/* Logo Text */}
      {showText && (
        <div className="flex flex-col">
          <span className="text-lg md:text-xl font-bold bg-gradient-to-r from-saffron via-maroon to-saffron bg-clip-text text-transparent">
            My Pooja Seva
          </span>
          <span className="text-xs md:text-sm text-gray-600 font-medium">
            Divine Services
          </span>
        </div>
      )}
    </div>
  );
};

export default LogoSVG;
