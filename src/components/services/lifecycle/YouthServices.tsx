import * as React from 'react';
import { GraduationCap, BookOpen, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

const YouthServices = () => {
  return (
    <div id="youth" className="scroll-mt-20">
      <div className="flex items-center mb-4">
        <GraduationCap className="h-6 w-6 text-maroon mr-2" />
        <h2 className="text-2xl font-bold text-maroon">Youth & Education Samskaras</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <p className="text-gray-600 mb-6">
            The transition from childhood to adulthood is marked by important samskaras that prepare the individual for their role in society and spiritual growth.
          </p>
          
          <div className="space-y-4">
            <div className="divine-border">
              <h3 className="text-xl font-medium text-maroon mb-2">Upanayana Samskara</h3>
              <p className="text-gray-600 text-sm mb-2">
                The sacred thread ceremony, marking the beginning of formal education and spiritual learning.
              </p>
              <div className="text-xs text-gray-500">
                <strong>Timing:</strong> 8-12 years for boys, varies by tradition<br/>
                <strong>Purpose:</strong> To initiate into Vedic learning and spiritual practices
              </div>
            </div>
            
            <div className="divine-border">
              <h3 className="text-xl font-medium text-maroon mb-2">Vedarambha Samskara</h3>
              <p className="text-gray-600 text-sm mb-2">
                The formal beginning of Vedic studies, where the student starts learning the sacred texts.
              </p>
              <div className="text-xs text-gray-500">
                <strong>Timing:</strong> After Upanayana<br/>
                <strong>Purpose:</strong> To begin formal study of Vedas and scriptures
              </div>
            </div>
            
            <div className="divine-border">
              <h3 className="text-xl font-medium text-maroon mb-2">Keshanta Samskara</h3>
              <p className="text-gray-600 text-sm mb-2">
                The first shaving ceremony, marking the transition to adolescence and maturity.
              </p>
              <div className="text-xs text-gray-500">
                <strong>Timing:</strong> 16th year<br/>
                <strong>Purpose:</strong> To mark physical maturity and readiness for adult responsibilities
              </div>
            </div>
            
            <div className="divine-border">
              <h3 className="text-xl font-medium text-maroon mb-2">Samavartana Samskara</h3>
              <p className="text-gray-600 text-sm mb-2">
                The graduation ceremony marking the completion of formal education and return to householder life.
              </p>
              <div className="text-xs text-gray-500">
                <strong>Timing:</strong> After completion of studies<br/>
                <strong>Purpose:</strong> To mark the end of student life and beginning of householder duties
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-gold/5 p-6 rounded-lg">
          <h3 className="text-xl font-medium text-maroon mb-4">What We Provide</h3>
          
          <ul className="space-y-3 text-gray-600">
            <li className="flex items-start">
              <Star className="h-5 w-5 text-gold mr-2 flex-shrink-0 mt-0.5" />
              <span>Complete ceremonial setup with all traditional elements</span>
            </li>
            <li className="flex items-start">
              <Star className="h-5 w-5 text-gold mr-2 flex-shrink-0 mt-0.5" />
              <span>Experienced gurus and pandits for proper guidance</span>
            </li>
            <li className="flex items-start">
              <Star className="h-5 w-5 text-gold mr-2 flex-shrink-0 mt-0.5" />
              <span>Sacred thread (Yajnopavita) and other ceremonial items</span>
            </li>
            <li className="flex items-start">
              <Star className="h-5 w-5 text-gold mr-2 flex-shrink-0 mt-0.5" />
              <span>Gayatri Mantra initiation and teaching</span>
            </li>
            <li className="flex items-start">
              <Star className="h-5 w-5 text-gold mr-2 flex-shrink-0 mt-0.5" />
              <span>Educational guidance and spiritual counseling</span>
            </li>
            <li className="flex items-start">
              <Star className="h-5 w-5 text-gold mr-2 flex-shrink-0 mt-0.5" />
              <span>Certificate of completion and traditional blessings</span>
            </li>
            <li className="flex items-start">
              <Star className="h-5 w-5 text-gold mr-2 flex-shrink-0 mt-0.5" />
              <span>Follow-up guidance for continued spiritual practice</span>
            </li>
          </ul>
          
          <div className="mt-6 space-y-2">
            <Button className="w-full bg-gradient-to-r from-saffron to-gold text-white">
              Book Youth Ceremony
            </Button>
            <p className="text-xs text-gray-500 text-center">
              Special packages for complete educational journey
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YouthServices;
