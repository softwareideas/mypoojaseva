import * as React from 'react';
import { Heart, Baby, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

const PreBirthServices = () => {
  return (
    <div id="pre-birth" className="scroll-mt-20">
      <div className="flex items-center mb-4">
        <Heart className="h-6 w-6 text-maroon mr-2" />
        <h2 className="text-2xl font-bold text-maroon">Pre-Birth Rituals (Garbha Samskaras)</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <p className="text-gray-600 mb-6">
            The journey of a soul begins even before birth. These sacred rituals prepare the parents and create an auspicious environment for the child's arrival.
          </p>
          
          <div className="space-y-4">
            <div className="divine-border">
              <h3 className="text-xl font-medium text-maroon mb-2">Garbhadhana Samskara</h3>
              <p className="text-gray-600 text-sm mb-2">
                The first samskara performed before conception to ensure a healthy and virtuous child.
              </p>
              <div className="text-xs text-gray-500">
                <strong>Timing:</strong> Before conception, during auspicious periods<br/>
                <strong>Purpose:</strong> To invoke divine blessings for conception
              </div>
            </div>
            
            <div className="divine-border">
              <h3 className="text-xl font-medium text-maroon mb-2">Pumsavana Samskara</h3>
              <p className="text-gray-600 text-sm mb-2">
                Performed during the third month of pregnancy to ensure the child's well-being and proper development.
              </p>
              <div className="text-xs text-gray-500">
                <strong>Timing:</strong> 3rd month of pregnancy<br/>
                <strong>Purpose:</strong> To ensure healthy development of the fetus
              </div>
            </div>
            
            <div className="divine-border">
              <h3 className="text-xl font-medium text-maroon mb-2">Seemantonayana Samskara</h3>
              <p className="text-gray-600 text-sm mb-2">
                The parting of hair ceremony performed in the 4th, 6th, or 8th month of pregnancy.
              </p>
              <div className="text-xs text-gray-500">
                <strong>Timing:</strong> 4th, 6th, or 8th month of pregnancy<br/>
                <strong>Purpose:</strong> To protect mother and child from negative influences
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-saffron/5 p-6 rounded-lg">
          <h3 className="text-xl font-medium text-maroon mb-4">What We Provide</h3>
          
          <ul className="space-y-3 text-gray-600">
            <li className="flex items-start">
              <Star className="h-5 w-5 text-saffron mr-2 flex-shrink-0 mt-0.5" />
              <span>Complete guidance on timing and preparation</span>
            </li>
            <li className="flex items-start">
              <Star className="h-5 w-5 text-saffron mr-2 flex-shrink-0 mt-0.5" />
              <span>All necessary materials and samagri</span>
            </li>
            <li className="flex items-start">
              <Star className="h-5 w-5 text-saffron mr-2 flex-shrink-0 mt-0.5" />
              <span>Experienced pandit for proper ritual performance</span>
            </li>
            <li className="flex items-start">
              <Star className="h-5 w-5 text-saffron mr-2 flex-shrink-0 mt-0.5" />
              <span>Dietary and lifestyle guidance during pregnancy</span>
            </li>
            <li className="flex items-start">
              <Star className="h-5 w-5 text-saffron mr-2 flex-shrink-0 mt-0.5" />
              <span>Spiritual counseling for expectant parents</span>
            </li>
            <li className="flex items-start">
              <Star className="h-5 w-5 text-saffron mr-2 flex-shrink-0 mt-0.5" />
              <span>Post-ritual follow-up and support</span>
            </li>
          </ul>
          
          <div className="mt-6 space-y-2">
            <Button className="w-full bg-gradient-to-r from-saffron to-softSaffron text-white">
              Book Pre-Birth Ritual
            </Button>
            <p className="text-xs text-gray-500 text-center">
              Consultation available for planning all pregnancy rituals
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreBirthServices;
