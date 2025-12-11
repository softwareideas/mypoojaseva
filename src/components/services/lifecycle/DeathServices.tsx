import * as React from 'react';
import { Heart, Star, Clock, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';

const DeathServices = () => {
  return (
    <div id="death" className="scroll-mt-20">
      <div className="flex items-center mb-4">
        <Heart className="h-6 w-6 text-maroon mr-2" />
        <h2 className="text-2xl font-bold text-maroon">Death & Afterlife Rituals</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <p className="text-gray-600 mb-6">
            The final samskaras help the departed soul transition peacefully to the next realm and provide comfort to the grieving family through proper rituals and ceremonies.
          </p>
          
          <div className="space-y-4">
            <div className="divine-border">
              <h3 className="text-xl font-medium text-maroon mb-2">Antyeshti Samskara</h3>
              <p className="text-gray-600 text-sm mb-2">
                The final rites and cremation ceremony, ensuring the soul's peaceful departure.
              </p>
              <div className="text-xs text-gray-500">
                <strong>Timing:</strong> Within 24 hours of death<br/>
                <strong>Purpose:</strong> To release the soul from the physical body
              </div>
            </div>
            
            <div className="divine-border">
              <h3 className="text-xl font-medium text-maroon mb-2">Asthi Visarjana</h3>
              <p className="text-gray-600 text-sm mb-2">
                The immersion of ashes in sacred rivers, particularly the Ganges, for purification.
              </p>
              <div className="text-xs text-gray-500">
                <strong>Timing:</strong> 3rd, 7th, or 13th day after death<br/>
                <strong>Purpose:</strong> To purify the soul and ensure peaceful transition
              </div>
            </div>
            
            <div className="divine-border">
              <h3 className="text-xl font-medium text-maroon mb-2">Shraddha Ceremonies</h3>
              <p className="text-gray-600 text-sm mb-2">
                Annual memorial ceremonies to honor ancestors and provide them with spiritual nourishment.
              </p>
              <div className="text-xs text-gray-500">
                <strong>Timing:</strong> Annual, on death anniversary<br/>
                <strong>Purpose:</strong> To honor ancestors and ensure their well-being
              </div>
            </div>
            
            <div className="divine-border">
              <h3 className="text-xl font-medium text-maroon mb-2">Pitru Paksha Rituals</h3>
              <p className="text-gray-600 text-sm mb-2">
                Special fortnight dedicated to ancestors with daily offerings and prayers.
              </p>
              <div className="text-xs text-gray-500">
                <strong>Timing:</strong> September-October (15 days)<br/>
                <strong>Purpose:</strong> To honor all ancestors and seek their blessings
              </div>
            </div>
            
            <div className="divine-border">
              <h3 className="text-xl font-medium text-maroon mb-2">Monthly Tarpana Ceremonies</h3>
              <p className="text-gray-600 text-sm mb-2">
                Regular water offerings to ancestors on Amavasya (new moon) and Purnima (full moon) days.
              </p>
              <div className="text-xs text-gray-500">
                <strong>Timing:</strong> Monthly on Amavasya & Purnima<br/>
                <strong>Purpose:</strong> To provide regular spiritual nourishment to ancestors
              </div>
            </div>
            
            <div className="divine-border">
              <h3 className="text-xl font-medium text-maroon mb-2">Amavasya Tarpanam</h3>
              <p className="text-gray-600 text-sm mb-2">
                Special tarpanam performed on new moon day, the most auspicious day for ancestral worship.
              </p>
              <div className="text-xs text-gray-500">
                <strong>Timing:</strong> Every Amavasya (new moon day)<br/>
                <strong>Purpose:</strong> To satisfy departed souls and seek their blessings
              </div>
            </div>
            
            <div className="divine-border">
              <h3 className="text-xl font-medium text-maroon mb-2">Purnima Tarpanam</h3>
              <p className="text-gray-600 text-sm mb-2">
                Tarpanam performed on full moon day for prosperity and success through ancestral blessings.
              </p>
              <div className="text-xs text-gray-500">
                <strong>Timing:</strong> Every Purnima (full moon day)<br/>
                <strong>Purpose:</strong> To honor ancestors and seek prosperity blessings
              </div>
            </div>
            
            <div className="divine-border">
              <h3 className="text-xl font-medium text-maroon mb-2">Memorial Services</h3>
              <p className="text-gray-600 text-sm mb-2">
                Special prayers and ceremonies to remember and honor the departed soul.
              </p>
              <div className="text-xs text-gray-500">
                <strong>Timing:</strong> As per family tradition<br/>
                <strong>Purpose:</strong> To keep the memory alive and seek blessings
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-saffron/5 p-6 rounded-lg">
          <h3 className="text-xl font-medium text-maroon mb-4">What We Provide</h3>
          
          <ul className="space-y-3 text-gray-600">
            <li className="flex items-start">
              <Star className="h-5 w-5 text-saffron mr-2 flex-shrink-0 mt-0.5" />
              <span>24/7 emergency services for immediate needs</span>
            </li>
            <li className="flex items-start">
              <Star className="h-5 w-5 text-saffron mr-2 flex-shrink-0 mt-0.5" />
              <span>Complete arrangement of all ceremonial materials</span>
            </li>
            <li className="flex items-start">
              <Star className="h-5 w-5 text-saffron mr-2 flex-shrink-0 mt-0.5" />
              <span>Experienced pandits for proper ritual performance</span>
            </li>
            <li className="flex items-start">
              <Star className="h-5 w-5 text-saffron mr-2 flex-shrink-0 mt-0.5" />
              <span>Guidance for cremation and final rites</span>
            </li>
            <li className="flex items-start">
              <Star className="h-5 w-5 text-saffron mr-2 flex-shrink-0 mt-0.5" />
              <span>Arrangements for sacred river immersion</span>
            </li>
            <li className="flex items-start">
              <Star className="h-5 w-5 text-saffron mr-2 flex-shrink-0 mt-0.5" />
              <span>Annual Shraddha ceremony arrangements</span>
            </li>
            <li className="flex items-start">
              <Star className="h-5 w-5 text-saffron mr-2 flex-shrink-0 mt-0.5" />
              <span>Emotional support and spiritual counseling</span>
            </li>
            <li className="flex items-start">
              <Star className="h-5 w-5 text-saffron mr-2 flex-shrink-0 mt-0.5" />
              <span>Documentation and certificate services</span>
            </li>
          </ul>
          
          <div className="mt-6 space-y-2">
            <Button className="w-full bg-gradient-to-r from-saffron to-softSaffron text-white">
              Emergency Services
            </Button>
            <Button variant="outline" className="w-full">
              Plan Memorial Service
            </Button>
            <p className="text-xs text-gray-500 text-center">
              Available 24/7 for immediate assistance
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeathServices;
