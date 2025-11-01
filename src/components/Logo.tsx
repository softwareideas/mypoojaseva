import * as React from "react";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
  showText?: boolean;
}

const Logo: React.FC<LogoProps> = ({
  className = "",
  size = "md",
  showText = true,
}) => {
  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-12 h-12",
    lg: "w-16 h-16",
    xl: "w-20 h-20",
  };

  const textSizes = {
    sm: "text-sm",
    md: "text-lg",
    lg: "text-xl",
    xl: "text-2xl",
  };

  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      {/* Logo Icon */}
      <div
        className={`relative ${sizeClasses[size]} flex items-center justify-center`}
      >
        {/* Outer Circle - Saffron */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 shadow-lg"></div>

        {/* Middle Circle - Gold */}
        <div className="absolute inset-1 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-500"></div>

        {/* Inner Circle - Maroon */}
        <div className="absolute inset-2 rounded-full bg-gradient-to-br from-red-800 to-red-900"></div>

        {/* Om Symbol */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-white font-bold text-xs md:text-sm lg:text-base xl:text-lg">
            ॐ
          </span>
        </div>

        {/* Decorative Elements */}
        <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full opacity-80"></div>
        <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-orange-400 rounded-full opacity-60"></div>
        <div className="absolute top-0 -left-2 w-1 h-1 bg-yellow-300 rounded-full opacity-70"></div>
        <div className="absolute bottom-0 -right-2 w-1 h-1 bg-orange-300 rounded-full opacity-70"></div>
      </div>

      {/* Logo Text */}
      {showText && (
        <div className="flex flex-col">
          <span
            className={`font-bold ${textSizes[size]} bg-gradient-to-r from-orange-600 via-yellow-500 to-orange-600 bg-clip-text text-transparent`}
          >
            My Pooja Seva
          </span>
          <span
            className={`text-xs md:text-sm lg:text-base text-gray-600 font-medium`}
          >
            Divine Services
          </span>
        </div>
      )}
    </div>
  );
};

export default Logo;
