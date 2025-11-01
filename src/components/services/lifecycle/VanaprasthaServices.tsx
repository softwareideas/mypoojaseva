import React from 'react';
import { TreePine, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

const VanaprasthaServices = () => {
  return (
    <div id="vanaprastha" className="scroll-mt-20">
      <div className="flex items-center mb-4">
        <TreePine className="h-6 w-6 text-maroon mr-2" />
        <h2 className="text-2xl font-bold text-maroon">Vanaprastha & Sannyasa</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <p className="text-gray-600 mb-4">
            Spiritual guidance for the retirement phase, focusing on meditation, pilgrimage, and spiritual practices.
          </p>
          
          <div className="space-y-4">
            <div className="divine-border">
              <h3 className="text-xl font-medium text-maroon mb-2">Retirement Rituals</h3>
              <p className="text-gray-600 text-sm">
                Sacred ceremonies marking the transition to spiritual life.
              </p>
            </div>
            
            <div className="divine-border">
              <h3 className="text-xl font-medium text-maroon mb-2">Pilgrimage Planning</h3>
              <p className="text-gray-600 text-sm">
                Guidance for Char Dham, Kashi, and other sacred journeys.
              </p>
            </div>
            
            <div className="divine-border">
              <h3 className="text-xl font-medium text-maroon mb-2">Meditation Training</h3>
              <p className="text-gray-600 text-sm">
                Daily meditation practices and spiritual discipline guidance.
              </p>
            </div>
            
            <div className="divine-border">
              <h3 className="text-xl font-medium text-maroon mb-2">Scripture Study</h3>
              <p className="text-gray-600 text-sm">
                Guided study of Bhagavad Gita, Upanishads, and Puranas.
              </p>
            </div>
          </div>
        </div>
        
        <div className="bg-gold/5 p-6 rounded-lg">
          <h3 className="text-xl font-medium text-maroon mb-4">Spiritual Services</h3>
          
          <ul className="space-y-3 text-gray-600">
            <li className="flex items-start">
              <Star className="h-5 w-5 text-gold mr-2 flex-shrink-0 mt-0.5" />
              <span>Personal spiritual mentor assignment</span>
            </li>
            <li className="flex items-start">
              <Star className="h-5 w-5 text-gold mr-2 flex-shrink-0 mt-0.5" />
              <span>Pilgrimage tour planning and coordination</span>
            </li>
            <li className="flex items-start">
              <Star className="h-5 w-5 text-gold mr-2 flex-shrink-0 mt-0.5" />
              <span>Daily spiritual practice schedule creation</span>
            </li>
            <li className="flex items-start">
              <Star className="h-5 w-5 text-gold mr-2 flex-shrink-0 mt-0.5" />
              <span>Regular satsang and spiritual discourse sessions</span>
            </li>
            <li className="flex items-start">
              <Star className="h-5 w-5 text-gold mr-2 flex-shrink-0 mt-0.5" />
              <span>Preparation for the final life stage transition</span>
            </li>
          </ul>
          
          <div className="mt-6">
            <Button className="w-full bg-gradient-to-r from-saffron to-gold text-white">
              Begin Spiritual Journey
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VanaprasthaServices;