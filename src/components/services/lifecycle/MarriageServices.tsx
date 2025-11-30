import React from 'react';
import { Heart, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

const MarriageServices = () => {
  return (
    <div id="marriage" className="scroll-mt-20">
      <div className="flex items-center mb-4">
        <Heart className="h-6 w-6 text-maroon mr-2" />
        <h2 className="text-2xl font-bold text-maroon">Marriage & Union</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <p className="text-gray-600 mb-4">
            Sacred marriage ceremonies that unite two souls in divine presence, following ancient Vedic traditions.
          </p>
          
          <div className="space-y-4">
            <div className="divine-border">
              <h3 className="text-xl font-medium text-maroon mb-2">Engagement Ceremony</h3>
              <p className="text-gray-600 text-sm">
                Sacred ring exchange ceremony with proper rituals and blessings.
              </p>
            </div>
            
            <div className="divine-border">
              <h3 className="text-xl font-medium text-maroon mb-2">Haldi & Mehendi</h3>
              <p className="text-gray-600 text-sm">
                Pre-wedding purification ceremonies for bride and groom.
              </p>
            </div>
            
            <div className="divine-border">
              <h3 className="text-xl font-medium text-maroon mb-2">Vedic Wedding</h3>
              <p className="text-gray-600 text-sm">
                Complete marriage ceremony with Saptapadi and sacred mantras.
              </p>
            </div>
            
            <div className="divine-border">
              <h3 className="text-xl font-medium text-maroon mb-2">Reception Blessings</h3>
              <p className="text-gray-600 text-sm">
                Special prayers for the newlywed couple's prosperity and happiness.
              </p>
            </div>
          </div>
        </div>
        
        <div className="bg-saffron/5 p-6 rounded-lg">
          <h3 className="text-xl font-medium text-maroon mb-4">Wedding Services</h3>
          
          <ul className="space-y-3 text-gray-600">
            <li className="flex items-start">
              <Star className="h-5 w-5 text-saffron mr-2 flex-shrink-0 mt-0.5" />
              <span>Complete wedding planning and coordination</span>
            </li>
            <li className="flex items-start">
              <Star className="h-5 w-5 text-saffron mr-2 flex-shrink-0 mt-0.5" />
              <span>Muhurat calculation for auspicious timing</span>
            </li>
            <li className="flex items-start">
              <Star className="h-5 w-5 text-saffron mr-2 flex-shrink-0 mt-0.5" />
              <span>Traditional mandap decoration and setup</span>
            </li>
            <li className="flex items-start">
              <Star className="h-5 w-5 text-saffron mr-2 flex-shrink-0 mt-0.5" />
              <span>Experienced priest for all ceremonies</span>
            </li>
            <li className="flex items-start">
              <Star className="h-5 w-5 text-saffron mr-2 flex-shrink-0 mt-0.5" />
              <span>Photography and videography services</span>
            </li>
          </ul>
          
          <div className="mt-6">
            <Button className="w-full bg-gradient-to-r from-saffron to-softSaffron text-white">
              Plan Your Wedding
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarriageServices;