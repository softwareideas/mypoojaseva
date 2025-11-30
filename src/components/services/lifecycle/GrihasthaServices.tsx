import React from 'react';
import { Home, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

const GrihasthaServices = () => {
  return (
    <div id="grihastha" className="scroll-mt-20">
      <div className="flex items-center mb-4">
        <Home className="h-6 w-6 text-maroon mr-2" />
        <h2 className="text-2xl font-bold text-maroon">Grihastha Ashrama</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <p className="text-gray-600 mb-4">
            Sacred ceremonies and rituals for householders to maintain spiritual balance in daily life.
          </p>
          
          <div className="space-y-4">
            <div className="divine-border">
              <h3 className="text-xl font-medium text-maroon mb-2">Griha Pravesh</h3>
              <p className="text-gray-600 text-sm">
                Housewarming ceremony with Vastu puja for positive energy.
              </p>
            </div>
            
            <div className="divine-border">
              <h3 className="text-xl font-medium text-maroon mb-2">Daily Puja Setup</h3>
              <p className="text-gray-600 text-sm">
                Home temple consecration and daily worship guidance.
              </p>
            </div>
            
            <div className="divine-border">
              <h3 className="text-xl font-medium text-maroon mb-2">Festival Celebrations</h3>
              <p className="text-gray-600 text-sm">
                Guidance for celebrating major festivals at home with family.
              </p>
            </div>
            
            <div className="divine-border">
              <h3 className="text-xl font-medium text-maroon mb-2">Ancestral Worship</h3>
              <p className="text-gray-600 text-sm">
                Pitru Paksha and Shraddha ceremonies for ancestors.
              </p>
            </div>
          </div>
        </div>
        
        <div className="bg-saffron/5 p-6 rounded-lg">
          <h3 className="text-xl font-medium text-maroon mb-4">Householder Services</h3>
          
          <ul className="space-y-3 text-gray-600">
            <li className="flex items-start">
              <Star className="h-5 w-5 text-saffron mr-2 flex-shrink-0 mt-0.5" />
              <span>Vastu consultation and correction remedies</span>
            </li>
            <li className="flex items-start">
              <Star className="h-5 w-5 text-saffron mr-2 flex-shrink-0 mt-0.5" />
              <span>Home temple design and installation</span>
            </li>
            <li className="flex items-start">
              <Star className="h-5 w-5 text-saffron mr-2 flex-shrink-0 mt-0.5" />
              <span>Regular puja training for family members</span>
            </li>
            <li className="flex items-start">
              <Star className="h-5 w-5 text-saffron mr-2 flex-shrink-0 mt-0.5" />
              <span>Seasonal festival celebration planning</span>
            </li>
            <li className="flex items-start">
              <Star className="h-5 w-5 text-saffron mr-2 flex-shrink-0 mt-0.5" />
              <span>Spiritual counseling for family harmony</span>
            </li>
          </ul>
          
          <div className="mt-6">
            <Button className="w-full bg-gradient-to-r from-saffron to-softSaffron text-white">
              Book Grihastha Services
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GrihasthaServices;