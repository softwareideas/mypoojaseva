import * as React from "react";

interface LogoTextProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
}

const LogoText: React.FC<LogoTextProps> = ({ className = "", size = "md" }) => {
  const sizeClasses = {
    sm: "text-sm",
    md: "text-lg",
    lg: "text-2xl",
    xl: "text-4xl",
  };

  const subSizeClasses = {
    sm: "text-xs",
    md: "text-sm",
    lg: "text-base",
    xl: "text-lg",
  };

  return (
    <div className={`flex flex-col items-center ${className}`}>
      {/* Main Title with Om Symbol */}
      <div className="flex items-center space-x-2">
        <span className={`${sizeClasses[size]} text-orange-600 font-bold`}>
          ॐ
        </span>
        <span
          className={`${sizeClasses[size]} font-bold bg-gradient-to-r from-orange-600 via-yellow-500 to-orange-600 bg-clip-text text-transparent`}
        >
          My Pooja Seva
        </span>
        <span className={`${sizeClasses[size]} text-orange-600 font-bold`}>
          ॐ
        </span>
      </div>

      {/* Subtitle */}
      <span
        className={`${subSizeClasses[size]} text-gray-600 font-medium mt-1`}
      >
        Divine Services
      </span>

      {/* Decorative Line */}
      <div className="flex items-center space-x-2 mt-2">
        <div className="w-4 h-0.5 bg-gradient-to-r from-transparent to-orange-500"></div>
        <div className="w-1 h-1 bg-yellow-500 rounded-full"></div>
        <div className="w-8 h-0.5 bg-gradient-to-r from-orange-500 via-yellow-500 to-orange-500"></div>
        <div className="w-1 h-1 bg-yellow-500 rounded-full"></div>
        <div className="w-4 h-0.5 bg-gradient-to-r from-orange-500 to-transparent"></div>
      </div>
    </div>
  );
};

export default LogoText;
