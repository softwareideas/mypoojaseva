import * as React from 'react';
import { Baby, Star, BookOpen, GraduationCap } from 'lucide-react';
import { Button } from '@/components/ui/button';

const BirthServices = () => {
  return (
    <div id="birth" className="scroll-mt-20">
      <div className="flex items-center mb-4">
        <Baby className="h-6 w-6 text-maroon mr-2" />
        <h2 className="text-2xl font-bold text-maroon">Birth & Childhood Samskaras</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <p className="text-gray-600 mb-6">
            The sacred journey of a child begins with birth and continues through various samskaras that mark important milestones in their development.
          </p>
          
          <div className="space-y-4">
            <div className="divine-border">
              <h3 className="text-xl font-medium text-maroon mb-2">Jatakarma Samskara</h3>
              <p className="text-gray-600 text-sm mb-2">
                The first ritual performed immediately after birth, welcoming the newborn into the world.
              </p>
              <div className="text-xs text-gray-500">
                <strong>Timing:</strong> Immediately after birth<br/>
                <strong>Purpose:</strong> To welcome the child and invoke divine protection
              </div>
            </div>
            
            <div className="divine-border">
              <h3 className="text-xl font-medium text-maroon mb-2">Namkaran Samskara</h3>
              <p className="text-gray-600 text-sm mb-2">
                The naming ceremony held on the 11th or 12th day after birth, giving the child their identity.
              </p>
              <div className="text-xs text-gray-500">
                <strong>Timing:</strong> 11th or 12th day after birth<br/>
                <strong>Purpose:</strong> To give the child a meaningful name and identity
              </div>
            </div>
            
            <div className="divine-border">
              <h3 className="text-xl font-medium text-maroon mb-2">Nishkramana Samskara</h3>
              <p className="text-gray-600 text-sm mb-2">
                The first outing ceremony when the child is taken outside the house for the first time.
              </p>
              <div className="text-xs text-gray-500">
                <strong>Timing:</strong> 4th month after birth<br/>
                <strong>Purpose:</strong> To introduce the child to the outside world
              </div>
            </div>
            
            <div className="divine-border">
              <h3 className="text-xl font-medium text-maroon mb-2">Annaprashana Samskara</h3>
              <p className="text-gray-600 text-sm mb-2">
                The first feeding of solid food ceremony, marking the transition from milk to solid food.
              </p>
              <div className="text-xs text-gray-500">
                <strong>Timing:</strong> 6th month after birth<br/>
                <strong>Purpose:</strong> To introduce solid food and ensure proper nutrition
              </div>
            </div>
            
            <div className="divine-border">
              <h3 className="text-xl font-medium text-maroon mb-2">Chudakarma (Mundan) Samskara</h3>
              <p className="text-gray-600 text-sm mb-2">
                The first haircut ceremony, typically performed between 1-3 years of age.
              </p>
              <div className="text-xs text-gray-500">
                <strong>Timing:</strong> 1-3 years of age<br/>
                <strong>Purpose:</strong> To purify the child and remove negative influences
              </div>
            </div>
            
            <div className="divine-border">
              <h3 className="text-xl font-medium text-maroon mb-2">Karnavedha Samskara</h3>
              <p className="text-gray-600 text-sm mb-2">
                The ear-piercing ceremony performed for both boys and girls.
              </p>
              <div className="text-xs text-gray-500">
                <strong>Timing:</strong> 3rd or 5th year<br/>
                <strong>Purpose:</strong> To improve hearing and protect from diseases
              </div>
            </div>
            
            <div className="divine-border">
              <h3 className="text-xl font-medium text-maroon mb-2">Vidyarambha Samskara</h3>
              <p className="text-gray-600 text-sm mb-2">
                The initiation into learning, where the child is introduced to the alphabet and education.
              </p>
              <div className="text-xs text-gray-500">
                <strong>Timing:</strong> 5th year<br/>
                <strong>Purpose:</strong> To begin the child's educational journey
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-gold/5 p-6 rounded-lg">
          <h3 className="text-xl font-medium text-maroon mb-4">What We Provide</h3>
          
          <ul className="space-y-3 text-gray-600">
            <li className="flex items-start">
              <Star className="h-5 w-5 text-gold mr-2 flex-shrink-0 mt-0.5" />
              <span>Complete arrangement of all ceremonial materials</span>
            </li>
            <li className="flex items-start">
              <Star className="h-5 w-5 text-gold mr-2 flex-shrink-0 mt-0.5" />
              <span>Experienced pandit who guides through each step</span>
            </li>
            <li className="flex items-start">
              <Star className="h-5 w-5 text-gold mr-2 flex-shrink-0 mt-0.5" />
              <span>Detailed explanation of the significance of each ritual</span>
            </li>
            <li className="flex items-start">
              <Star className="h-5 w-5 text-gold mr-2 flex-shrink-0 mt-0.5" />
              <span>Horoscope preparation and auspicious time calculation</span>
            </li>
            <li className="flex items-start">
              <Star className="h-5 w-5 text-gold mr-2 flex-shrink-0 mt-0.5" />
              <span>Personalized certificate of the ceremony</span>
            </li>
            <li className="flex items-start">
              <Star className="h-5 w-5 text-gold mr-2 flex-shrink-0 mt-0.5" />
              <span>Photography and videography services</span>
            </li>
            <li className="flex items-start">
              <Star className="h-5 w-5 text-gold mr-2 flex-shrink-0 mt-0.5" />
              <span>Post-ceremony guidance and follow-up</span>
            </li>
          </ul>
          
          <div className="mt-6 space-y-2">
            <Button className="w-full bg-gradient-to-r from-saffron to-gold text-white">
              Book Childhood Ceremony
            </Button>
            <p className="text-xs text-gray-500 text-center">
              Package deals available for multiple samskaras
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BirthServices;