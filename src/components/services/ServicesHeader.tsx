
import React from 'react';

const ServicesHeader = () => {
  return (
    <div className="pooja-header relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-saffron/20 to-saffron/20"></div>
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h1 className="text-5xl md:text-6xl font-bold mb-4 text-white drop-shadow-lg">
          Our Divine Services
        </h1>
        <p className="text-xl md:text-2xl text-white/90 mb-6">
          Authentic Hindu rituals conducted with devotion and traditional expertise
        </p>
        <div className="flex items-center justify-center space-x-4 text-white/80">
          <div className="w-8 h-0.5 bg-saffron"></div>
          <span className="text-lg">ॐ</span>
          <div className="w-8 h-0.5 bg-saffron"></div>
        </div>
      </div>
    </div>
  );
};

export default ServicesHeader;
