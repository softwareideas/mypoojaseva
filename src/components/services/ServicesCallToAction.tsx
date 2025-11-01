
import React from 'react';
import { Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const ServicesCallToAction = () => {
  return (
    <section className="py-12 bg-gradient-to-r from-maroon to-saffron">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl font-bold text-white mb-4">Begin Your Spiritual Journey Today</h2>
        <p className="text-white/90 max-w-2xl mx-auto mb-6">
          Connect with us to learn more about our services and how we can support your spiritual needs.
        </p>
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Button asChild variant="outline" className="bg-white text-maroon border-white hover:bg-white/90">
            <Link to="/contact">
              <Calendar className="mr-2 h-4 w-4" />
              Contact Us
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesCallToAction;
