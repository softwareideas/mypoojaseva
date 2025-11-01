import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-temple-pattern">
      <div className="absolute inset-0 bg-gradient-to-r from-maroon/20 to-gold/10 z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 relative z-10">
        <div className="text-center md:text-left md:max-w-2xl">
          <div className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-gold uppercase bg-gold/10 rounded-full">
            Your Complete Hindu Ritual Guide
          </div>

          <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-maroon md:text-5xl lg:text-6xl">
            <span className="block">My Pooja Seva</span>
            <span className="block text-3xl md:text-4xl mt-2 text-gold spiritual-text">
              Divine Services
            </span>
          </h1>

          <p className="mx-auto md:mx-0 max-w-xl mt-5 text-lg text-gray-700">
            Guiding you through the sacred rituals of Hindu life from birth to
            spiritual fulfillment. Traditional ceremonies conducted with
            authentic rituals at your convenience.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row justify-center md:justify-start space-y-3 sm:space-y-0 sm:space-x-4">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-saffron to-gold text-white font-medium py-3 px-6 rounded-md shadow-lg hover:shadow-xl transition duration-300"
            >
              <Link to="/services">View All Poojas</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="bg-white text-maroon border border-gold/50 font-medium py-3 px-6 rounded-md shadow-md hover:bg-gold/5 transition duration-300"
            >
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 right-0 transform translate-x-1/4 translate-y-1/4 w-96 h-96 bg-gold/10 rounded-full blur-3xl"></div>
      <div className="absolute top-0 left-0 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-saffron/10 rounded-full blur-3xl"></div>

      {/* Om Symbol - SVG */}
      <div className="hidden lg:block absolute right-10 bottom-10 opacity-10">
        <svg
          width="150"
          height="150"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M50,10C27.909,10,10,27.909,10,50s17.909,40,40,40s40-17.909,40-40S72.091,10,50,10z M50,80
            c-16.569,0-30-13.431-30-30c0-16.569,13.431-30,30-30c16.569,0,30,13.431,30,30C80,66.569,66.569,80,50,80z
            M63.172,36.828C59.323,32.979,54.771,31,50,31c-4.771,0-9.323,1.979-13.172,5.828l7.07,7.07
            C45.607,42.188,47.768,41,50,41c2.232,0,4.393,1.188,6.101,2.899L63.172,36.828z
            M63,50c0-7.18-5.82-13-13-13s-13,5.82-13,13s5.82,13,13,13S63,57.18,63,50z
            M50,57c-3.866,0-7-3.134-7-7s3.134-7,7-7s7,3.134,7,7S53.866,57,50,57z"
            fill="#D4AF37"
          />
        </svg>
      </div>
    </div>
  );
};

export default Hero;
