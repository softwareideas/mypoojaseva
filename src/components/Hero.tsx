import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Sparkles, ArrowRight, Phone, Calendar } from "lucide-react";

const Hero: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const [imageError, setImageError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-white via-amber-50/30 to-rose-50/20">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25px 25px, rgb(139, 30, 63) 2%, transparent 0%), radial-gradient(circle at 75px 75px, rgb(255, 153, 51) 2%, transparent 0%)`,
          backgroundSize: '100px 100px'
        }} />
      </div>

      {/* Floating Orbs with Parallax */}
      <div
        className="absolute top-20 right-[10%] w-72 h-72 bg-gradient-to-br from-saffron/20 to-transparent rounded-full blur-3xl animate-pulse"
        style={{
          transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02 - scrollY * 0.3}px)`
        }}
      />
      <div
        className="absolute bottom-20 left-[5%] w-96 h-96 bg-gradient-to-tr from-maroon/15 to-transparent rounded-full blur-3xl animate-pulse"
        style={{
          transform: `translate(${-mousePosition.x * 0.015}px, ${-mousePosition.y * 0.015 - scrollY * 0.2}px)`,
          animationDelay: '1s'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-28 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-maroon/10 to-saffron/10 border border-maroon/20 rounded-full backdrop-blur-sm animate-fade-in-up">
              <Sparkles className="h-3.5 w-3.5 text-saffron animate-pulse" />
              <span className="text-xs font-semibold tracking-wider text-maroon uppercase">
                Your Complete Hindu Ritual Guide
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="space-y-2 animate-fade-in-up" style={{ animationDelay: '100ms', animationFillMode: 'backwards' }}>
              <span className="block text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight">
                <span className="bg-gradient-to-r from-maroon via-maroon to-saffron bg-clip-text text-transparent">
                  My Pooja Seva
                </span>
              </span>
              <span className="block text-3xl md:text-4xl lg:text-5xl font-bold text-saffron mt-3">
                Divine Services at Home
              </span>
            </h1>

            {/* Description */}
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0 animate-fade-in-up" style={{ animationDelay: '200ms', animationFillMode: 'backwards' }}>
              Experience authentic Hindu rituals and ceremonies in the comfort of your home.
              <span className="text-maroon font-semibold"> Traditional. Authentic. Convenient.</span>
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up" style={{ animationDelay: '300ms', animationFillMode: 'backwards' }}>
              <Button
                asChild
                size="lg"
                className="bg-maroon hover:bg-maroon/90 text-white rounded-full px-8 py-6 text-base font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 group"
              >
                <Link to="/services" className="flex items-center justify-center">
                  <Calendar className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform" />
                  Explore All Poojas
                  <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-2 border-maroon/30 text-maroon hover:bg-maroon hover:text-white rounded-full px-8 py-6 text-base font-semibold shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <Link to="/contact" className="flex items-center justify-center">
                  <Phone className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform" />
                  Contact Us
                </Link>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 pt-4 text-sm text-gray-600 animate-fade-in-up" style={{ animationDelay: '400ms', animationFillMode: 'backwards' }}>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span>1000+ Ceremonies Completed</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
                <span>Experienced Pandits</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
                <span>All India Service</span>
              </div>
            </div>
          </div>

          {/* Right Visual Element */}
          <div className="relative hidden lg:block animate-fade-in-up" style={{ animationDelay: '200ms', animationFillMode: 'backwards' }}>
            <div className="relative">
              {/* Main Image Container */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-500">
                <div className="aspect-[4/5] bg-gradient-to-br from-maroon/20 via-saffron/20 to-amber-100/40 backdrop-blur-sm">
                  {!imageError ? (
                    <>
                      <img
                        src="/src/assets/images/Gemini_Generated_Image_hcgcu4hcgcu4hcgc.png"
                        alt="Traditional Hindu Pooja Ceremony"
                        className={`w-full h-full object-cover mix-blend-overlay transition-opacity duration-500 ${imageLoaded ? 'opacity-80' : 'opacity-0'
                          }`}
                        onLoad={() => setImageLoaded(true)}
                        onError={() => setImageError(true)}
                      />
                      {!imageLoaded && (
                        <div className="absolute inset-0 bg-gradient-to-br from-maroon/10 via-saffron/10 to-amber-50 animate-pulse" />
                      )}
                    </>
                  ) : (
                    <div className="w-full h-full flex items-center justify-center p-12">
                      <div className="text-center">
                        <Sparkles className="h-24 w-24 text-maroon/30 mx-auto mb-6 animate-pulse" />
                        <h3 className="text-3xl font-bold text-maroon/50 mb-3">My Pooja Seva</h3>
                        <p className="text-lg text-maroon/40">Traditional Hindu Ceremonies</p>
                        <div className="mt-6 flex items-center justify-center gap-4 text-maroon/30">
                          <div className="w-16 h-1 bg-maroon/20 rounded-full" />
                          <Sparkles className="h-5 w-5" />
                          <div className="w-16 h-1 bg-maroon/20 rounded-full" />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-maroon/40 via-transparent to-transparent" />
              </div>

              {/* Floating Card */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-2xl p-6 max-w-xs backdrop-blur-sm bg-white/95 border border-gray-100">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-maroon to-saffron rounded-full flex items-center justify-center">
                    <Sparkles className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-maroon">500+</p>
                    <p className="text-sm text-gray-600">Happy Families</p>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-saffron/20 rounded-full blur-2xl animate-pulse" />
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-maroon/20 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }} />
            </div>
          </div>
        </div>
      </div>

      {/* Om Symbol Watermark */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.02] pointer-events-none">
        <svg width="600" height="600" viewBox="0 0 100 100" fill="none">
          <text x="50" y="60" fontSize="60" textAnchor="middle" fill="#8B1E3F" fontFamily="serif" fontWeight="bold">ॐ</text>
        </svg>
      </div>
    </div>
  );
};

export default Hero;
